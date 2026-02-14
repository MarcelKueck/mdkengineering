'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './HeroAnimation.module.css';

/* ── Text segments ── */
// 3 rows: "I engineer AI" / "into" / "real systems."
const ROW1_BEFORE = 'I engineer ';
const ROW1_A = 'A';
const ROW1_I = 'I';
const ROW1 = ROW1_BEFORE + ROW1_A + ROW1_I; // "I engineer AI"
const ROW2 = 'into';
const ROW3 = 'real systems.';

/* ── Timing ── */
const TYPING_SPEED = 55;
const START_DELAY = 600;
const ARM_DELAY = 800;
const ARM_REACH_MS = 1200;
const GRAB_PAUSE_MS = 400;
const FIX_MS = 600;
const RELEASE_PAUSE_MS = 400;
const ARM_RETURN_MS = 1000;

type Phase =
  | 'typing-row1'
  | 'typing-row2'
  | 'typing-row3'
  | 'idle'
  | 'arm-reaching'
  | 'arm-grabbing'
  | 'arm-fixing'
  | 'arm-releasing'
  | 'arm-returning'
  | 'done';

/* ── Robotic arm angles ── */
type ArmPose = { shoulder: number; elbow: number; wrist: number; grip: boolean };

const IDLE_POSE: ArmPose = { shoulder: 0, elbow: 0, wrist: 0, grip: false };

/* ── Arm segment lengths (in SVG units) ── */
const UPPER_ARM_LEN = 193; // shoulder pivot (475) to elbow pivot (282)
const FOREARM_LEN = 124;   // elbow pivot (282) to wrist pivot (158)
const GRIPPER_LEN = 28;    // wrist pivot to gripper tip (~158 to ~130, where fingers close)

/* ── Inverse kinematics ── */
// Given a target (tx, ty) relative to the shoulder pivot in SVG coords,
// compute shoulder and elbow angles so the gripper tip reaches the target.
// SVG y-axis points DOWN, arm extends UP from shoulder.
function solveIK(tx: number, ty: number): { shoulder: number; elbow: number; wrist: number } {
  // The "end effector" length = forearm + gripper as a single segment from elbow
  const reachLen = FOREARM_LEN + GRIPPER_LEN;
  const dist = Math.sqrt(tx * tx + ty * ty);

  // Clamp to reachable range
  const maxReach = UPPER_ARM_LEN + reachLen - 2;
  const minReach = Math.abs(UPPER_ARM_LEN - reachLen) + 2;
  const d = Math.max(minReach, Math.min(maxReach, dist));

  // Law of cosines for elbow angle (interior angle between upper arm and forearm)
  const cosElbow = (UPPER_ARM_LEN * UPPER_ARM_LEN + reachLen * reachLen - d * d)
    / (2 * UPPER_ARM_LEN * reachLen);
  const elbowAngle = Math.PI - Math.acos(Math.max(-1, Math.min(1, cosElbow)));

  // Angle from shoulder to target
  // atan2(tx, -ty): tx is horizontal offset (positive = left in our case),
  // -ty flips y because SVG y goes down but our arm extends upward
  const angleToTarget = Math.atan2(tx, -ty);

  // Law of cosines for the angle offset at shoulder
  const cosShoulder = (UPPER_ARM_LEN * UPPER_ARM_LEN + d * d - reachLen * reachLen)
    / (2 * UPPER_ARM_LEN * d);
  const shoulderOffset = Math.acos(Math.max(-1, Math.min(1, cosShoulder)));

  // For targets to the left (negative tx), subtract the offset
  const shoulderAngle = angleToTarget - shoulderOffset;

  // Wrist: compensate so end effector stays roughly vertical (pointing down at letter)
  const totalArmAngle = shoulderAngle + elbowAngle;
  const wristAngle = -totalArmAngle * 0.15; // mild compensation

  return {
    shoulder: (shoulderAngle * 180) / Math.PI,
    elbow: (elbowAngle * 180) / Math.PI,
    wrist: (wristAngle * 180) / Math.PI,
  };
}

export default function HeroAnimation() {
  const [typedRow1, setTypedRow1] = useState('');
  const [typedRow2, setTypedRow2] = useState('');
  const [typedRow3, setTypedRow3] = useState('');
  const [phase, setPhase] = useState<Phase>('typing-row1');
  const [showCursor, setShowCursor] = useState(true);
  const [tiltFixed, setTiltFixed] = useState(false);
  const [armPose, setArmPose] = useState<ArmPose>(IDLE_POSE);

  const containerRef = useRef<HTMLDivElement>(null);
  const armStartedRef = useRef(false);
  const aiIRef = useRef<HTMLSpanElement>(null);
  const armWrapperRef = useRef<HTMLDivElement>(null);
  const reachPoseRef = useRef<ArmPose | null>(null);

  /* ── Compute reach pose dynamically ── */
  const computeReachPose = useCallback((): ArmPose => {
    if (reachPoseRef.current) return reachPoseRef.current;

    const iEl = aiIRef.current;
    const armEl = armWrapperRef.current;
    const svgEl = armEl?.querySelector('svg');
    if (!iEl || !armEl || !svgEl) {
      // Fallback if refs aren't ready
      return { shoulder: -30, elbow: -8, wrist: -50, grip: false };
    }

    const iRect = iEl.getBoundingClientRect();

    // Use the SVG's own coordinate transform to get accurate mapping
    // This accounts for preserveAspectRatio (default xMidYMid meet)
    const svgPoint = (svgEl as SVGSVGElement).createSVGPoint();

    // Target = center-top of the "I" letter
    svgPoint.x = iRect.left + iRect.width / 2;
    svgPoint.y = iRect.top + iRect.height * 0.35;

    // Transform screen coords → SVG coords using the SVG's inverse CTM
    const ctm = (svgEl as SVGSVGElement).getScreenCTM();
    if (!ctm) {
      return { shoulder: -30, elbow: -8, wrist: -50, grip: false };
    }
    const svgCoords = svgPoint.matrixTransform(ctm.inverse());

    // Shoulder pivot is at SVG (250, 475)
    const dx = svgCoords.x - 250;
    const dy = svgCoords.y - 475;

    const ik = solveIK(dx, dy);

    const pose: ArmPose = {
      shoulder: ik.shoulder,
      elbow: ik.elbow,
      wrist: ik.wrist,
      grip: false,
    };

    reachPoseRef.current = pose;
    return pose;
  }, []);

  /* ── Type row 1 ── */
  useEffect(() => {
    if (phase !== 'typing-row1') return;
    let i = 0;
    let tid: ReturnType<typeof setTimeout>;
    const kick = () => {
      tid = setTimeout(function tick() {
        if (i < ROW1.length) { i++; setTypedRow1(ROW1.slice(0, i)); tid = setTimeout(tick, TYPING_SPEED); }
        else setPhase('typing-row2');
      }, TYPING_SPEED);
    };
    const start = setTimeout(kick, START_DELAY);
    return () => { clearTimeout(start); clearTimeout(tid); };
  }, [phase]);

  /* ── Type row 2 ── */
  useEffect(() => {
    if (phase !== 'typing-row2') return;
    let i = 0;
    let tid: ReturnType<typeof setTimeout>;
    tid = setTimeout(function tick() {
      if (i < ROW2.length) { i++; setTypedRow2(ROW2.slice(0, i)); tid = setTimeout(tick, TYPING_SPEED); }
      else setPhase('typing-row3');
    }, TYPING_SPEED);
    return () => clearTimeout(tid);
  }, [phase]);

  /* ── Type row 3 ── */
  useEffect(() => {
    if (phase !== 'typing-row3') return;
    let i = 0;
    let tid: ReturnType<typeof setTimeout>;
    tid = setTimeout(function tick() {
      if (i < ROW3.length) { i++; setTypedRow3(ROW3.slice(0, i)); tid = setTimeout(tick, TYPING_SPEED); }
      else setPhase('idle');
    }, TYPING_SPEED);
    return () => clearTimeout(tid);
  }, [phase]);

  /* ── Cursor blink ── */
  useEffect(() => {
    const iv = setInterval(() => setShowCursor(p => !p), 530);
    return () => clearInterval(iv);
  }, []);

  /* ── Arm animation sequence ── */
  // Store timeout IDs in a ref so cleanup on phase changes doesn't kill them
  const armTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (phase !== 'idle') return;
    if (armStartedRef.current) return;
    armStartedRef.current = true;

    const ids = armTimeoutsRef.current;
    const s = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      ids.push(id);
    };

    // Compute the reach pose dynamically based on where the "I" actually is
    const reach = computeReachPose();
    const grab: ArmPose = { ...reach, grip: true };
    const fix: ArmPose = { ...reach, wrist: reach.wrist + 5, grip: true }; // slight wrist adjust
    const release: ArmPose = { ...fix, grip: false };

    let t = ARM_DELAY;

    // 1. Reach
    s(() => { setPhase('arm-reaching'); setArmPose(reach); }, t);
    t += ARM_REACH_MS;

    // 2. Grab
    s(() => { setPhase('arm-grabbing'); setArmPose(grab); }, t);
    t += GRAB_PAUSE_MS;

    // 3. Fix the I
    s(() => { setPhase('arm-fixing'); setTiltFixed(true); setArmPose(fix); }, t);
    t += FIX_MS;

    // 4. Release
    s(() => { setPhase('arm-releasing'); setArmPose(release); }, t);
    t += RELEASE_PAUSE_MS;

    // 5. Return to idle
    s(() => { setPhase('arm-returning'); setArmPose(IDLE_POSE); }, t);
    t += ARM_RETURN_MS;

    // 6. Done
    s(() => { setPhase('done'); }, t);

    // No cleanup — timeouts are stored in ref and must not be cancelled by phase changes
    // They will be cleaned up on unmount via the separate effect below
  }, [phase, computeReachPose]);

  // Cleanup on unmount only
  useEffect(() => {
    const ids = armTimeoutsRef.current;
    return () => {
      ids.forEach(clearTimeout);
    };
  }, []);

  /* ── Render row 1 with tilted I ── */
  const renderRow1 = () => {
    const len = typedRow1.length;
    const aiStart = ROW1_BEFORE.length;
    const aiIStart = aiStart + ROW1_A.length;

    if (len <= aiStart) return <>{typedRow1}</>;

    const before = typedRow1.slice(0, aiStart);
    if (len <= aiIStart) {
      return <>{before}<span className={styles.aiText}>{typedRow1.slice(aiStart)}</span></>;
    }

    return (
      <>
        {before}
        <span className={styles.aiText}>
          {ROW1_A}
          <span
            ref={aiIRef}
            className={`${styles.aiI} ${tiltFixed ? styles.aiIFixed : styles.aiITilted}`}
          >
            {ROW1_I}
          </span>
        </span>
      </>
    );
  };

  const cursorEl = (
    <span className={`${styles.cursor} ${showCursor ? styles.cursorVisible : styles.cursorHidden}`}>|</span>
  );

  // Which row is currently being typed?
  const typingRow = phase === 'typing-row1' ? 1 : phase === 'typing-row2' ? 2 : phase === 'typing-row3' ? 3 : 0;

  // Arm CSS transition speed depends on the phase
  const armTransitionMs =
    phase === 'arm-reaching' ? ARM_REACH_MS :
    phase === 'arm-fixing' ? FIX_MS :
    phase === 'arm-returning' ? ARM_RETURN_MS :
    300;

  return (
    <div ref={containerRef} className={styles.container}>
      {/* ── Left: typed text ── */}
      <div className={styles.textSide}>
        <h1 className={styles.title}>
          <span className={styles.line}>
            {renderRow1()}
            {typingRow === 1 && cursorEl}
          </span>
          <span className={styles.line}>
            {typedRow2}
            {typingRow === 2 && cursorEl}
          </span>
          <span className={styles.line}>
            {typedRow3}
            {typingRow >= 3 && cursorEl}
            {typingRow === 0 && cursorEl}
          </span>
        </h1>
      </div>

      {/* ── Right: industrial robotic arm ── */}
      <div ref={armWrapperRef} className={styles.armWrapper}>
        <svg
          viewBox="0 0 500 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.armSvg}
          aria-hidden="true"
          style={{
            '--arm-transition': `${armTransitionMs}ms`,
            '--shoulder-angle': `${armPose.shoulder}deg`,
            '--elbow-angle': `${armPose.elbow}deg`,
            '--wrist-angle': `${armPose.wrist}deg`,
          } as React.CSSProperties}
        >
          {/* ═══ BASE PLATE ═══ */}
          <rect x="175" y="540" width="150" height="20" rx="4"
            fill="#2d3034" stroke="var(--accent)" strokeWidth="2" />
          <rect x="195" y="552" width="110" height="12" rx="3"
            fill="#2d3034" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
          {/* Base bolts */}
          <circle cx="200" cy="550" r="3.5" fill="var(--accent)" opacity="0.5" />
          <circle cx="300" cy="550" r="3.5" fill="var(--accent)" opacity="0.5" />
          <circle cx="250" cy="558" r="2" fill="var(--accent)" opacity="0.3" />

          {/* ═══ PEDESTAL ═══ */}
          <path d="M232 540 L232 488 C232 482,237 477,243 477 L257 477 C263 477,268 482,268 488 L268 540"
            fill="#2d3034" stroke="var(--accent)" strokeWidth="2.5" />
          {/* Pedestal ribs */}
          <line x1="237" y1="534" x2="263" y2="534" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          <line x1="237" y1="524" x2="263" y2="524" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          <line x1="237" y1="514" x2="263" y2="514" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          <line x1="237" y1="504" x2="263" y2="504" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />

          {/* ═══ SHOULDER JOINT — pivot point ═══ */}
          <g className={styles.shoulderGroup}
             style={{ transformOrigin: '250px 475px' }}>

            {/* Shoulder housing */}
            <circle cx="250" cy="475" r="18"
              fill="#2d3034" stroke="var(--accent)" strokeWidth="2.5" />
            <circle cx="250" cy="475" r="8"
              fill="var(--accent)" opacity="0.6" />
            <circle cx="250" cy="475" r="4"
              fill="#2d3034" />
            {/* Shoulder bolts */}
            <circle cx="238" cy="475" r="2" fill="var(--accent)" opacity="0.35" />
            <circle cx="262" cy="475" r="2" fill="var(--accent)" opacity="0.35" />
            <circle cx="250" cy="463" r="2" fill="var(--accent)" opacity="0.35" />

            {/* ═══ UPPER ARM ═══ */}
            <path d="M238 468 C235 445,233 405,233 370 L233 300 C233 290,238 284,244 284 L256 284 C262 284,267 290,267 300 L267 370 C267 405,265 445,262 468"
              fill="#2d3034" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" />
            {/* Hydraulic lines */}
            <line x1="245" y1="455" x2="245" y2="295" stroke="var(--accent)" strokeWidth="0.8" opacity="0.2" strokeDasharray="5 4" />
            <line x1="255" y1="455" x2="255" y2="295" stroke="var(--accent)" strokeWidth="0.8" opacity="0.2" strokeDasharray="5 4" />
            {/* Panel lines */}
            <line x1="235" y1="420" x2="265" y2="420" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" />
            <line x1="235" y1="370" x2="265" y2="370" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" />
            <line x1="235" y1="330" x2="265" y2="330" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" />

            {/* ═══ ELBOW JOINT ═══ */}
            <g className={styles.elbowGroup}
               style={{ transformOrigin: '250px 282px' }}>

              <circle cx="250" cy="282" r="14"
                fill="#2d3034" stroke="var(--accent)" strokeWidth="2.5" />
              <circle cx="250" cy="282" r="6"
                fill="var(--accent)" opacity="0.55" />
              <circle cx="250" cy="282" r="3"
                fill="#2d3034" />
              {/* Elbow bolts */}
              <circle cx="240" cy="282" r="1.5" fill="var(--accent)" opacity="0.3" />
              <circle cx="260" cy="282" r="1.5" fill="var(--accent)" opacity="0.3" />

              {/* ═══ FOREARM ═══ */}
              <path d="M242 276 C240 258,239 235,239 215 L239 170 C239 164,242 160,246 160 L254 160 C258 160,261 164,261 170 L261 215 C261 235,260 258,258 276"
                fill="#2d3034" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" />
              {/* Forearm hydraulic lines */}
              <line x1="246" y1="268" x2="246" y2="168" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" strokeDasharray="4 3" />
              <line x1="254" y1="268" x2="254" y2="168" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" strokeDasharray="4 3" />
              {/* Forearm panel line */}
              <line x1="241" y1="220" x2="259" y2="220" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />

              {/* ═══ WRIST JOINT ═══ */}
              <g className={styles.wristGroup}
                 style={{ transformOrigin: '250px 158px' }}>

                <circle cx="250" cy="158" r="10"
                  fill="#2d3034" stroke="var(--accent)" strokeWidth="2" />
                <circle cx="250" cy="158" r="4.5"
                  fill="var(--accent)" opacity="0.45" />

                {/* ═══ GRIPPER HOUSING ═══ */}
                <rect x="240" y="140" width="20" height="16" rx="3"
                  fill="#2d3034" stroke="var(--accent)" strokeWidth="2" />
                {/* Housing detail */}
                <line x1="244" y1="148" x2="256" y2="148" stroke="var(--accent)" strokeWidth="0.6" opacity="0.3" />

                {/* ═══ GRIPPER FINGERS ═══ */}
                {/* Left finger */}
                <path
                  d={armPose.grip
                    ? 'M244 140 L247 118 C247 115,248 114,249 115 L250 120'
                    : 'M244 140 L233 114 C231 110,233 108,235 109 L244 118'
                  }
                  stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" fill="none"
                  className={styles.finger}
                />
                {/* Right finger */}
                <path
                  d={armPose.grip
                    ? 'M256 140 L253 118 C253 115,252 114,251 115 L250 120'
                    : 'M256 140 L267 114 C269 110,267 108,265 109 L256 118'
                  }
                  stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" fill="none"
                  className={styles.finger}
                />
                {/* Finger tip pads */}
                {armPose.grip ? (
                  <>
                    <circle cx="248" cy="115" r="2" fill="var(--accent)" opacity="0.5" />
                    <circle cx="252" cy="115" r="2" fill="var(--accent)" opacity="0.5" />
                  </>
                ) : (
                  <>
                    <circle cx="233" cy="112" r="2" fill="var(--accent)" opacity="0.5" />
                    <circle cx="267" cy="112" r="2" fill="var(--accent)" opacity="0.5" />
                  </>
                )}
              </g>
            </g>
          </g>

          {/* ═══ STATUS LED ═══ */}
          <circle cx="250" cy="482" r="2.5" className={styles.statusLed} />
        </svg>
      </div>
    </div>
  );
}
