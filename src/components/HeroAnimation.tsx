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
const FIX_MS = 550;           // must match .aiIFixed transition duration (0.55s)
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

/* ── Arm variant based on viewport ── */
// desktop: full arm with base, positioned beside text
// edge: same arm without base, reaches in from top-right screen edge
type ArmVariant = 'desktop' | 'edge';

function getArmVariant(): ArmVariant {
  if (typeof window === 'undefined') return 'edge';
  return window.innerWidth > 1280 ? 'desktop' : 'edge';
}

/* ── Tilt geometry helper ── */
// Returns the screen-space transform-origin of the tilted I element
// and related geometry, without modifying the DOM.
const TILT_DEG = 20;
const TILT_RAD = (TILT_DEG * Math.PI) / 180;
const TILT_TRANSLATE_Y = -3;
const COS_T = Math.cos(TILT_RAD);
const SIN_T = Math.sin(TILT_RAD);

function getIGeometry(iEl: HTMLElement) {
  const iRect = iEl.getBoundingClientRect();
  const cs = getComputedStyle(iEl);
  const originParts = cs.transformOrigin.split(' ');
  const localOX = parseFloat(originParts[0]);
  const localOY = parseFloat(originParts[1]);
  const boxW = iEl.offsetWidth;
  const boxH = iEl.offsetHeight;

  // 4 corners relative to origin, after CSS transform chain
  const corners = [
    { x: -localOX,       y: -localOY },
    { x: boxW - localOX, y: -localOY },
    { x: boxW - localOX, y: boxH - localOY },
    { x: -localOX,       y: boxH - localOY },
  ];
  const rotatedCorners = corners.map(c => {
    const ty = c.y + TILT_TRANSLATE_Y;
    return { x: c.x * COS_T - ty * SIN_T, y: c.x * SIN_T + ty * COS_T };
  });
  const minRX = Math.min(...rotatedCorners.map(c => c.x));
  const minRY = Math.min(...rotatedCorners.map(c => c.y));
  const originScreenX = iRect.left - minRX;
  const originScreenY = iRect.top - minRY;

  // Grab point: center-x, 35% from top of un-transformed box
  const grabLocalX = boxW / 2;
  const grabLocalY = boxH * 0.35;

  // Tilted grab point in screen coords
  const dx = grabLocalX - localOX;
  const dy = (grabLocalY - localOY) + TILT_TRANSLATE_Y;
  const tiltedGrabScreenX = originScreenX + (dx * COS_T - dy * SIN_T);
  const tiltedGrabScreenY = originScreenY + (dx * SIN_T + dy * COS_T);

  // Fixed grab point in screen coords (identity transform)
  const fixedGrabScreenX = originScreenX + (grabLocalX - localOX);
  const fixedGrabScreenY = originScreenY + (grabLocalY - localOY);

  return {
    originScreenX, originScreenY,
    tiltedGrabScreenX, tiltedGrabScreenY,
    fixedGrabScreenX, fixedGrabScreenY,
  };
}

/* ── Inverse kinematics ── */
function solveIK(
  tx: number, ty: number,
  upperLen = UPPER_ARM_LEN, foreLen = FOREARM_LEN, gripLen = GRIPPER_LEN,
): { shoulder: number; elbow: number; wrist: number } {
  const reachLen = foreLen + gripLen;
  const dist = Math.sqrt(tx * tx + ty * ty);
  const maxReach = upperLen + reachLen - 2;
  const minReach = Math.abs(upperLen - reachLen) + 2;
  const d = Math.max(minReach, Math.min(maxReach, dist));

  const cosElbow = (upperLen * upperLen + reachLen * reachLen - d * d)
    / (2 * upperLen * reachLen);
  const elbowAngle = Math.PI - Math.acos(Math.max(-1, Math.min(1, cosElbow)));

  const angleToTarget = Math.atan2(tx, -ty);
  const cosShoulder = (upperLen * upperLen + d * d - reachLen * reachLen)
    / (2 * upperLen * d);
  const shoulderOffset = Math.acos(Math.max(-1, Math.min(1, cosShoulder)));
  const shoulderAngle = angleToTarget - shoulderOffset;

  const totalArmAngle = shoulderAngle + elbowAngle;
  const wristAngle = -totalArmAngle * 0.15;

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
  const [armVariant, setArmVariant] = useState<ArmVariant>('edge');

  // Edge arm: position/visibility driven by CSS classes
  const [edgePhase, setEdgePhase] = useState<
    'hidden' | 'entering' | 'reaching' | 'grabbing' | 'fixing' | 'releasing' | 'exiting' | 'done'
  >('hidden');
  const [edgeStyle, setEdgeStyle] = useState<React.CSSProperties>({});

  const containerRef = useRef<HTMLDivElement>(null);
  const armStartedRef = useRef(false);
  const aiIRef = useRef<HTMLSpanElement>(null);
  const armWrapperRef = useRef<HTMLDivElement>(null);
  const edgeArmRef = useRef<HTMLDivElement>(null);
  const reachPoseRef = useRef<ArmPose | null>(null);
  const fixPoseRef = useRef<ArmPose | null>(null);

  /* ── Detect arm variant on mount + resize ── */
  useEffect(() => {
    const update = () => setArmVariant(getArmVariant());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  /* ── Compute target in SVG coords from a screen point (desktop arm) ── */
  const screenToSvgTarget = useCallback((screenX: number, screenY: number): { dx: number; dy: number } | null => {
    const armEl = armWrapperRef.current;
    const svgEl = armEl?.querySelector('svg') as SVGSVGElement | null;
    if (!svgEl) return null;

    const svgPoint = svgEl.createSVGPoint();
    svgPoint.x = screenX;
    svgPoint.y = screenY;

    const ctm = svgEl.getScreenCTM();
    if (!ctm) return null;
    const svgCoords = svgPoint.matrixTransform(ctm.inverse());

    return { dx: svgCoords.x - 250, dy: svgCoords.y - 475 };
  }, []);

  /* ── Desktop: compute reach pose ── */
  const computeReachPose = useCallback((): ArmPose => {
    if (reachPoseRef.current) return reachPoseRef.current;
    const iEl = aiIRef.current;
    if (!iEl) return { shoulder: -30, elbow: -8, wrist: -50, grip: false };

    const geo = getIGeometry(iEl);
    const target = screenToSvgTarget(geo.tiltedGrabScreenX, geo.tiltedGrabScreenY);
    if (!target) return { shoulder: -30, elbow: -8, wrist: -50, grip: false };

    const ik = solveIK(target.dx, target.dy);
    const pose: ArmPose = { shoulder: ik.shoulder, elbow: ik.elbow, wrist: ik.wrist, grip: false };
    reachPoseRef.current = pose;
    return pose;
  }, [screenToSvgTarget]);

  /* ── Desktop: compute fix pose ── */
  const computeFixPose = useCallback((): ArmPose => {
    if (fixPoseRef.current) return fixPoseRef.current;
    const iEl = aiIRef.current;
    if (!iEl) return { shoulder: -28, elbow: -6, wrist: -45, grip: true };

    const geo = getIGeometry(iEl);
    const target = screenToSvgTarget(geo.fixedGrabScreenX, geo.fixedGrabScreenY);
    if (!target) return { shoulder: -28, elbow: -6, wrist: -45, grip: true };

    const ik = solveIK(target.dx, target.dy);
    const pose: ArmPose = { shoulder: ik.shoulder, elbow: ik.elbow, wrist: ik.wrist, grip: true };
    fixPoseRef.current = pose;
    return pose;
  }, [screenToSvgTarget]);

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
  const armTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Desktop arm sequence
  useEffect(() => {
    if (phase !== 'idle' || armVariant !== 'desktop') return;
    if (armStartedRef.current) return;
    armStartedRef.current = true;

    const ids = armTimeoutsRef.current;
    const s = (fn: () => void, ms: number) => { const id = setTimeout(fn, ms); ids.push(id); };

    const reach = computeReachPose();
    const grab: ArmPose = { ...reach, grip: true };
    const fix = computeFixPose();
    const release: ArmPose = { ...fix, grip: false };

    let t = ARM_DELAY;
    s(() => { setPhase('arm-reaching'); setArmPose(reach); }, t);
    t += ARM_REACH_MS;
    s(() => { setPhase('arm-grabbing'); setArmPose(grab); }, t);
    t += GRAB_PAUSE_MS;
    s(() => { setPhase('arm-fixing'); setTiltFixed(true); setArmPose(fix); }, t);
    t += FIX_MS;
    s(() => { setPhase('arm-releasing'); setArmPose(release); }, t);
    t += RELEASE_PAUSE_MS;
    s(() => { setPhase('arm-returning'); setArmPose(IDLE_POSE); }, t);
    t += ARM_RETURN_MS;
    s(() => { setPhase('done'); }, t);
  }, [phase, armVariant, computeReachPose, computeFixPose]);

  // Edge arm sequence (≤1280px including mobile)
  useEffect(() => {
    if (phase !== 'idle' || armVariant !== 'edge') return;
    if (armStartedRef.current) return;
    armStartedRef.current = true;

    const iEl = aiIRef.current;
    if (!iEl) { setTiltFixed(true); setPhase('done'); return; }

    const geo = getIGeometry(iEl);
    const vw = window.innerWidth;

    // ── Position the edge arm SVG ──
    // The shoulder pivot is at (250, 475) in a 500×600 viewBox.
    // We place the shoulder at the top-right corner of the viewport.
    const shoulderScreenX = vw + 10;  // just off the right edge
    const shoulderScreenY = -20;       // just above the top edge

    // Calculate distance from shoulder to the tilted I grab point
    const dxScreen = geo.tiltedGrabScreenX - shoulderScreenX;
    const dyScreen = geo.tiltedGrabScreenY - shoulderScreenY;
    const distToI = Math.sqrt(dxScreen * dxScreen + dyScreen * dyScreen);

    // The arm's max reach in SVG units = UPPER_ARM_LEN + FOREARM_LEN + GRIPPER_LEN = 345
    // We need: 345 * (svgW / 500) >= distToI * 1.15 (15% margin for comfort)
    // => svgW >= distToI * 1.15 * 500 / 345
    const totalReachSVG = UPPER_ARM_LEN + FOREARM_LEN + GRIPPER_LEN;
    const minSvgW = (distToI * 1.15 * 500) / totalReachSVG;
    const svgW = Math.max(500, minSvgW); // no upper cap
    const svgH = svgW * (600 / 500);

    // Shoulder in SVG-fraction coords
    const shoulderFracX = 250 / 500;
    const shoulderFracY = 475 / 600;

    // Top-left of SVG wrapper so shoulder lands at desired screen position
    const svgLeft = shoulderScreenX - shoulderFracX * svgW;
    const svgTop = shoulderScreenY - shoulderFracY * svgH;

    setEdgeStyle({
      position: 'fixed',
      left: `${svgLeft}px`,
      top: `${svgTop}px`,
      width: `${svgW}px`,
      height: `${svgH}px`,
    });

    // ── Compute IK from pure math (no getScreenCTM needed) ──
    // Screen-to-SVG scale factor: 1 screen px = (500 / svgW) SVG units
    const pxToSvg = 500 / svgW;

    // Target in SVG units relative to shoulder pivot (250, 475)
    const tiltedTargetSvgX = dxScreen * pxToSvg;
    const tiltedTargetSvgY = dyScreen * pxToSvg;

    const fixDxScreen = geo.fixedGrabScreenX - shoulderScreenX;
    const fixDyScreen = geo.fixedGrabScreenY - shoulderScreenY;
    const fixedTargetSvgX = fixDxScreen * pxToSvg;
    const fixedTargetSvgY = fixDyScreen * pxToSvg;

    // Solve IK for reach and fix poses
    const reachIK = solveIK(tiltedTargetSvgX, tiltedTargetSvgY);
    const fixIK = solveIK(fixedTargetSvgX, fixedTargetSvgY);

    const reachPose: ArmPose = { shoulder: reachIK.shoulder, elbow: reachIK.elbow, wrist: reachIK.wrist, grip: false };
    const grabPose: ArmPose = { ...reachPose, grip: true };
    const fixPose: ArmPose = { shoulder: fixIK.shoulder, elbow: fixIK.elbow, wrist: fixIK.wrist, grip: true };
    const releasePose: ArmPose = { ...fixPose, grip: false };

    const ids = armTimeoutsRef.current;
    const s = (fn: () => void, ms: number) => { const id = setTimeout(fn, ms); ids.push(id); };

    let t = ARM_DELAY;

    // 1. Enter — fade in, arm starts at idle pose (straight up, mostly hidden)
    s(() => { setEdgePhase('entering'); }, t);
    t += 50;

    // 2. Reach — animate joints to the tilted I
    s(() => {
      setEdgePhase('reaching');
      setArmPose(reachPose);
    }, t);
    t += ARM_REACH_MS;

    // 3. Grab
    s(() => {
      setEdgePhase('grabbing');
      setArmPose(grabPose);
    }, t);
    t += GRAB_PAUSE_MS;

    // 4. Fix — move arm to corrected position + fix the I
    s(() => {
      setEdgePhase('fixing');
      setTiltFixed(true);
      setArmPose(fixPose);
    }, t);
    t += FIX_MS;

    // 5. Release
    s(() => {
      setEdgePhase('releasing');
      setArmPose(releasePose);
    }, t);
    t += RELEASE_PAUSE_MS;

    // 6. Exit — return to idle and fade out
    s(() => {
      setEdgePhase('exiting');
      setArmPose(IDLE_POSE);
    }, t);
    t += ARM_RETURN_MS;

    // 7. Done
    s(() => { setEdgePhase('done'); setPhase('done'); }, t);
  }, [phase, armVariant]);

  // Cleanup on unmount only
  useEffect(() => {
    const ids = armTimeoutsRef.current;
    return () => { ids.forEach(clearTimeout); };
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

  const typingRow = phase === 'typing-row1' ? 1 : phase === 'typing-row2' ? 2 : phase === 'typing-row3' ? 3 : 0;

  // Desktop arm transition speed
  const armTransitionMs =
    phase === 'arm-reaching' ? ARM_REACH_MS :
    phase === 'arm-fixing' ? FIX_MS :
    phase === 'arm-returning' ? ARM_RETURN_MS :
    300;

  const armEasing =
    phase === 'arm-fixing'
      ? 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      : 'cubic-bezier(0.4, 0, 0.2, 1)';

  // Edge arm transition speed (used for both desktop & edge variants)
  const edgeTransitionMs =
    edgePhase === 'reaching' ? ARM_REACH_MS :
    edgePhase === 'fixing' ? FIX_MS :
    edgePhase === 'exiting' ? ARM_RETURN_MS :
    300;

  const edgeEasing =
    edgePhase === 'fixing'
      ? 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      : 'cubic-bezier(0.4, 0, 0.2, 1)';

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

      {/* ── Desktop: full industrial arm with base ── */}
      {armVariant === 'desktop' && (
        <div ref={armWrapperRef} className={styles.armWrapper}>
          <svg
            viewBox="0 0 500 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.armSvg}
            aria-hidden="true"
            style={{
              '--arm-transition': `${armTransitionMs}ms`,
              '--arm-easing': armEasing,
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
            <circle cx="200" cy="550" r="3.5" fill="var(--accent)" opacity="0.5" />
            <circle cx="300" cy="550" r="3.5" fill="var(--accent)" opacity="0.5" />
            <circle cx="250" cy="558" r="2" fill="var(--accent)" opacity="0.3" />

            {/* ═══ PEDESTAL ═══ */}
            <path d="M232 540 L232 488 C232 482,237 477,243 477 L257 477 C263 477,268 482,268 488 L268 540"
              fill="#2d3034" stroke="var(--accent)" strokeWidth="2.5" />
            <line x1="237" y1="534" x2="263" y2="534" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
            <line x1="237" y1="524" x2="263" y2="524" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
            <line x1="237" y1="514" x2="263" y2="514" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
            <line x1="237" y1="504" x2="263" y2="504" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />

            {/* ═══ SHOULDER JOINT ═══ */}
            <g className={styles.shoulderGroup} style={{ transformOrigin: '250px 475px' }}>
              <circle cx="250" cy="475" r="18" fill="#2d3034" stroke="var(--accent)" strokeWidth="2.5" />
              <circle cx="250" cy="475" r="8" fill="var(--accent)" opacity="0.6" />
              <circle cx="250" cy="475" r="4" fill="#2d3034" />
              <circle cx="238" cy="475" r="2" fill="var(--accent)" opacity="0.35" />
              <circle cx="262" cy="475" r="2" fill="var(--accent)" opacity="0.35" />
              <circle cx="250" cy="463" r="2" fill="var(--accent)" opacity="0.35" />

              {/* ═══ UPPER ARM ═══ */}
              <path d="M238 468 C235 445,233 405,233 370 L233 300 C233 290,238 284,244 284 L256 284 C262 284,267 290,267 300 L267 370 C267 405,265 445,262 468"
                fill="#2d3034" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" />
              <line x1="245" y1="455" x2="245" y2="295" stroke="var(--accent)" strokeWidth="0.8" opacity="0.2" strokeDasharray="5 4" />
              <line x1="255" y1="455" x2="255" y2="295" stroke="var(--accent)" strokeWidth="0.8" opacity="0.2" strokeDasharray="5 4" />
              <line x1="235" y1="420" x2="265" y2="420" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" />
              <line x1="235" y1="370" x2="265" y2="370" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" />
              <line x1="235" y1="330" x2="265" y2="330" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" />

              {/* ═══ ELBOW JOINT ═══ */}
              <g className={styles.elbowGroup} style={{ transformOrigin: '250px 282px' }}>
                <circle cx="250" cy="282" r="14" fill="#2d3034" stroke="var(--accent)" strokeWidth="2.5" />
                <circle cx="250" cy="282" r="6" fill="var(--accent)" opacity="0.55" />
                <circle cx="250" cy="282" r="3" fill="#2d3034" />
                <circle cx="240" cy="282" r="1.5" fill="var(--accent)" opacity="0.3" />
                <circle cx="260" cy="282" r="1.5" fill="var(--accent)" opacity="0.3" />

                {/* ═══ FOREARM ═══ */}
                <path d="M242 276 C240 258,239 235,239 215 L239 170 C239 164,242 160,246 160 L254 160 C258 160,261 164,261 170 L261 215 C261 235,260 258,258 276"
                  fill="#2d3034" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" />
                <line x1="246" y1="268" x2="246" y2="168" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" strokeDasharray="4 3" />
                <line x1="254" y1="268" x2="254" y2="168" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" strokeDasharray="4 3" />
                <line x1="241" y1="220" x2="259" y2="220" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />

                {/* ═══ WRIST JOINT ═══ */}
                <g className={styles.wristGroup} style={{ transformOrigin: '250px 158px' }}>
                  <circle cx="250" cy="158" r="10" fill="#2d3034" stroke="var(--accent)" strokeWidth="2" />
                  <circle cx="250" cy="158" r="4.5" fill="var(--accent)" opacity="0.45" />

                  {/* ═══ GRIPPER ═══ */}
                  <rect x="238" y="138" width="24" height="20" rx="3" fill="#2d3034" stroke="var(--accent)" strokeWidth="2" />
                  <line x1="243" y1="148" x2="257" y2="148" stroke="var(--accent)" strokeWidth="0.6" opacity="0.3" />
                  <path
                    d={armPose.grip
                      ? 'M243 138 L246 110 C246 106,248 105,249 107 L250 114'
                      : 'M243 138 L230 108 C228 104,230 102,232 103 L243 114'}
                    stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" fill="none" className={styles.finger} />
                  <path
                    d={armPose.grip
                      ? 'M257 138 L254 110 C254 106,252 105,251 107 L250 114'
                      : 'M257 138 L270 108 C272 104,270 102,268 103 L257 114'}
                    stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" fill="none" className={styles.finger} />
                </g>
              </g>
            </g>

            {/* ═══ STATUS LED ═══ */}
            <circle cx="250" cy="482" r="2.5" className={styles.statusLed} />
          </svg>
        </div>
      )}

      {/* ── Edge: same arm without base, reaches from top-right screen edge ── */}
      {armVariant === 'edge' && edgePhase !== 'hidden' && edgePhase !== 'done' && (
        <div
          ref={edgeArmRef}
          className={`${styles.edgeArm} ${
            edgePhase === 'entering' ? styles.edgeEntering :
            edgePhase === 'exiting' ? styles.edgeExiting :
            styles.edgeVisible
          }`}
          style={edgeStyle}
        >
          <svg
            viewBox="0 0 500 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.armSvg}
            aria-hidden="true"
            style={{
              '--arm-transition': `${edgeTransitionMs}ms`,
              '--arm-easing': edgeEasing,
              '--shoulder-angle': `${armPose.shoulder}deg`,
              '--elbow-angle': `${armPose.elbow}deg`,
              '--wrist-angle': `${armPose.wrist}deg`,
            } as React.CSSProperties}
          >
            {/* ═══ SHOULDER MOUNT (bracket that disappears off the edge) ═══ */}
            <rect x="230" y="475" width="40" height="16" rx="4"
              fill="#2d3034" stroke="var(--accent)" strokeWidth="2" opacity="0.6" />

            {/* ═══ SHOULDER JOINT ═══ */}
            <g className={styles.shoulderGroup} style={{ transformOrigin: '250px 475px' }}>
              <circle cx="250" cy="475" r="18" fill="#2d3034" stroke="var(--accent)" strokeWidth="2.5" />
              <circle cx="250" cy="475" r="8" fill="var(--accent)" opacity="0.6" />
              <circle cx="250" cy="475" r="4" fill="#2d3034" />
              <circle cx="238" cy="475" r="2" fill="var(--accent)" opacity="0.35" />
              <circle cx="262" cy="475" r="2" fill="var(--accent)" opacity="0.35" />
              <circle cx="250" cy="463" r="2" fill="var(--accent)" opacity="0.35" />

              {/* ═══ UPPER ARM ═══ */}
              <path d="M238 468 C235 445,233 405,233 370 L233 300 C233 290,238 284,244 284 L256 284 C262 284,267 290,267 300 L267 370 C267 405,265 445,262 468"
                fill="#2d3034" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" />
              <line x1="245" y1="455" x2="245" y2="295" stroke="var(--accent)" strokeWidth="0.8" opacity="0.2" strokeDasharray="5 4" />
              <line x1="255" y1="455" x2="255" y2="295" stroke="var(--accent)" strokeWidth="0.8" opacity="0.2" strokeDasharray="5 4" />
              <line x1="235" y1="420" x2="265" y2="420" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" />
              <line x1="235" y1="370" x2="265" y2="370" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" />
              <line x1="235" y1="330" x2="265" y2="330" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" />

              {/* ═══ ELBOW JOINT ═══ */}
              <g className={styles.elbowGroup} style={{ transformOrigin: '250px 282px' }}>
                <circle cx="250" cy="282" r="14" fill="#2d3034" stroke="var(--accent)" strokeWidth="2.5" />
                <circle cx="250" cy="282" r="6" fill="var(--accent)" opacity="0.55" />
                <circle cx="250" cy="282" r="3" fill="#2d3034" />
                <circle cx="240" cy="282" r="1.5" fill="var(--accent)" opacity="0.3" />
                <circle cx="260" cy="282" r="1.5" fill="var(--accent)" opacity="0.3" />

                {/* ═══ FOREARM ═══ */}
                <path d="M242 276 C240 258,239 235,239 215 L239 170 C239 164,242 160,246 160 L254 160 C258 160,261 164,261 170 L261 215 C261 235,260 258,258 276"
                  fill="#2d3034" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" />
                <line x1="246" y1="268" x2="246" y2="168" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" strokeDasharray="4 3" />
                <line x1="254" y1="268" x2="254" y2="168" stroke="var(--accent)" strokeWidth="0.7" opacity="0.2" strokeDasharray="4 3" />
                <line x1="241" y1="220" x2="259" y2="220" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />

                {/* ═══ WRIST JOINT ═══ */}
                <g className={styles.wristGroup} style={{ transformOrigin: '250px 158px' }}>
                  <circle cx="250" cy="158" r="10" fill="#2d3034" stroke="var(--accent)" strokeWidth="2" />
                  <circle cx="250" cy="158" r="4.5" fill="var(--accent)" opacity="0.45" />

                  {/* ═══ GRIPPER ═══ */}
                  <rect x="238" y="138" width="24" height="20" rx="3" fill="#2d3034" stroke="var(--accent)" strokeWidth="2" />
                  <line x1="243" y1="148" x2="257" y2="148" stroke="var(--accent)" strokeWidth="0.6" opacity="0.3" />
                  <path
                    d={armPose.grip
                      ? 'M243 138 L246 110 C246 106,248 105,249 107 L250 114'
                      : 'M243 138 L230 108 C228 104,230 102,232 103 L243 114'}
                    stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" fill="none" className={styles.finger} />
                  <path
                    d={armPose.grip
                      ? 'M257 138 L254 110 C254 106,252 105,251 107 L250 114'
                      : 'M257 138 L270 108 C272 104,270 102,268 103 L257 114'}
                    stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" fill="none" className={styles.finger} />
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
