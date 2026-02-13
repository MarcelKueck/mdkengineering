import Link from 'next/link';
import styles from './home.module.css';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className={styles.hero} id="hero">
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>AI Engineering &amp; Automation Studio · Munich</div>
            <h1 className={styles.heroTitle}>
              I engineer <span className={styles.accent}>AI</span> into
              <br />
              real systems.
            </h1>
            <p className={styles.heroDescription}>
              AI engineer and inventor based in Munich. I help companies automate processes,
              build intelligent systems, and turn ideas into working technology — end to end.
            </p>
            <div className={styles.heroButtons}>
              <Link href="#contact" className="btn btn-primary btn-arrow">
                Let&apos;s Talk
              </Link>
              <Link href="#projects" className="btn btn-secondary">
                See My Work
              </Link>
            </div>
            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className="num">8+</span> Years Engineering
              </div>
              <div className={styles.heroMetaItem}>
                <span className="num">2</span> Startups Founded
              </div>
              <div className={styles.heroMetaItem}>
                <span className="num">E2E</span> HW + SW
              </div>
            </div>
          </div>

          {/* Terminal decoration */}
          <div className={styles.heroTerminal}>
            <div className={styles.terminalBar}>
              <div className={styles.terminalDot} />
              <div className={styles.terminalDot} />
              <div className={styles.terminalDot} />
              <span className={styles.terminalTitle}>mdk@workshop:~</span>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.terminalLine}>
                <span className={styles.terminalComment}># current project pipeline</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span> mdk status --active
              </div>
              <div className={styles.terminalLine}>&nbsp;</div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalKeyword}>AI_AUTOMATION</span>{' '}
                <span className={styles.terminalString}>▓▓▓▓▓▓▓░░░</span> 72%
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalKeyword}>IOT_PROTOTYPE</span>{' '}
                <span className={styles.terminalString}>▓▓▓▓▓▓▓▓▓░</span> 91%
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalKeyword}>ML_PIPELINE</span>{'   '}
                <span className={styles.terminalString}>▓▓▓▓░░░░░░</span> 38%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST BAR ═══════════ */}
      <div className={styles.trustBar}>
        <div className="container">
          <div className={styles.trustInner}>
            <span className={styles.trustLabel}>Background</span>
            <div className={styles.trustLogos}>
              <span className={styles.trustLogo}>TU Munich</span>
              <span className={styles.trustLogo}>Oxford</span>
              <span className={styles.trustLogo}>Siemens</span>
              <span className={styles.trustLogo}>Devanthro</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Services</div>
            <h2 className="section-title">What I build.</h2>
            <p className="section-subtitle">
              End-to-end engineering — from understanding your problem to deploying a working
              solution. No handoffs, no gaps.
            </p>
          </div>

          <div className={`${styles.servicesGrid} reveal reveal-delay-2`}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3>AI &amp; Process Automation</h3>
              <p>
                Intelligent systems that eliminate manual work. I design and build AI-powered
                workflows that automate repetitive, complex, or data-heavy processes — integrated
                into your existing tools.
              </p>
              <div className={styles.serviceTech}>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">LangChain</span>
                <span className="tech-tag">LLM APIs</span>
                <span className="tech-tag">n8n</span>
                <span className="tech-tag">Computer Vision</span>
              </div>
              <Link href="/services#ai-automation" className={styles.serviceLink}>
                Discuss your workflow →
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🚀</div>
              <h3>Rapid Prototyping &amp; MVPs</h3>
              <p>
                From napkin sketch to working prototype in 2–6 weeks. Sprint-based approach covering
                both hardware and software — 3D-printed enclosures, custom sensors, dashboards, and
                AI models.
              </p>
              <div className={styles.serviceTech}>
                <span className="tech-tag">3D Printing</span>
                <span className="tech-tag">CAD</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">ML Models</span>
              </div>
              <Link href="/services#prototyping" className={styles.serviceLink}>
                Start a sprint →
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Hardware-Software Integration</h3>
              <p>
                Connecting the physical world to intelligent software. Embedded systems, IoT,
                robotics, smart devices — from PCB design and firmware to edge AI and cloud
                connectivity.
              </p>
              <div className={styles.serviceTech}>
                <span className="tech-tag">PCB Design</span>
                <span className="tech-tag">Firmware</span>
                <span className="tech-tag">Edge AI</span>
                <span className="tech-tag">MQTT</span>
                <span className="tech-tag">Sensors</span>
              </div>
              <Link href="/services#hw-sw" className={styles.serviceLink}>
                Scope your system →
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📐</div>
              <h3>Technical Consulting</h3>
              <p>
                Helping teams make the right technical decisions before writing a line of code.
                Architecture reviews, AI adoption strategy, build-vs-buy analysis, and hands-on
                mentoring.
              </p>
              <div className={styles.serviceTech}>
                <span className="tech-tag">Architecture</span>
                <span className="tech-tag">AI Strategy</span>
                <span className="tech-tag">Team Mentoring</span>
                <span className="tech-tag">Tech Selection</span>
              </div>
              <Link href="/services#consulting" className={styles.serviceLink}>
                Book a session →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════ PROJECTS ═══════════ */}
      <section id="projects">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Projects</div>
            <h2 className="section-title">Selected work.</h2>
            <p className="section-subtitle">
              Real systems I&apos;ve designed and built — from AI pipelines to physical prototypes.
              Each project ships, no slide decks.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            <Link href="/projects/predictive-quality-inspection" className={`${styles.projectCard} reveal reveal-delay-1`}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePattern} />
                <div className={styles.projectImageIcon}>🏭</div>
                <span className={styles.projectStatus}>● Case Study</span>
              </div>
              <div className={styles.projectBody}>
                <h3>Predictive Quality Inspection System</h3>
                <p className={styles.projectDesc}>
                  Designed and deployed a computer vision pipeline for real-time quality inspection
                  on a production line. Custom camera array with on-device ML classifies defects in
                  under 50ms.
                </p>
                <div className={styles.projectResult}>↓ 73% reduction in defect escape rate</div>
                <div className={styles.projectTags}>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">TensorFlow Lite</span>
                  <span className="tech-tag">OpenCV</span>
                  <span className="tech-tag">Raspberry Pi</span>
                  <span className="tech-tag">Custom PCB</span>
                  <span className="tech-tag">MQTT</span>
                </div>
              </div>
            </Link>

            <Link href="/projects/ai-document-processing" className={`${styles.projectCard} reveal reveal-delay-2`}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePattern} />
                <div className={styles.projectImageIcon}>📊</div>
                <span className={styles.projectStatus}>● Case Study</span>
              </div>
              <div className={styles.projectBody}>
                <h3>AI-Powered Document Processing Pipeline</h3>
                <p className={styles.projectDesc}>
                  Built an end-to-end automation system that extracts, classifies, and routes
                  incoming documents using LLM-based analysis. Integrates with existing ERP via REST
                  API.
                </p>
                <div className={styles.projectResult}>↓ 85% reduction in manual data entry</div>
                <div className={styles.projectTags}>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">LangChain</span>
                  <span className="tech-tag">Claude API</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">n8n</span>
                </div>
              </div>
            </Link>

            <Link href="/projects/iot-environmental-monitoring" className={`${styles.projectCard} reveal reveal-delay-3`}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePattern} />
                <div className={styles.projectImageIcon}>🌡️</div>
                <span className={styles.projectStatus}>● Case Study</span>
              </div>
              <div className={styles.projectBody}>
                <h3>IoT Environmental Monitoring with Anomaly Detection</h3>
                <p className={styles.projectDesc}>
                  Designed a wireless sensor network for cold chain monitoring in pharmaceutical
                  logistics. Custom hardware with LoRaWAN connectivity and ML-based anomaly
                  detection.
                </p>
                <div className={styles.projectResult}>3-week prototype cycle, now in pilot</div>
                <div className={styles.projectTags}>
                  <span className="tech-tag">ESP32</span>
                  <span className="tech-tag">LoRaWAN</span>
                  <span className="tech-tag">3D Printing</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">InfluxDB</span>
                  <span className="tech-tag">scikit-learn</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════ ABOUT ═══════════ */}
      <section id="about">
        <div className="container">
          <div className="reveal">
            <div className="section-label">About</div>
            <h2 className="section-title">The engineer behind it.</h2>
          </div>

          <div className={`${styles.aboutGrid} reveal reveal-delay-1`}>
            <div className={styles.aboutPhoto}>
              <div className={styles.aboutPhotoPattern} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerTl}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerTr}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerBl}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerBr}`} />
              <span className={styles.aboutPhotoLabel}>
                [ professional photo ]
                <br />
                <br />
                Ideally at a workbench, near a
                <br />
                3D printer, or in a workshop setting
              </span>
            </div>

            <div className={styles.aboutText}>
              <blockquote>
                I&apos;ve always been the person who takes things apart to understand how they work —
                and then builds something better. I studied Computer Science at TUM, researched at
                Oxford, built robots at Devanthro, and engineered systems at Siemens. I&apos;ve
                founded two startups.
              </blockquote>
              <blockquote>
                Now I help companies turn AI from a buzzword into working technology. I call myself
                an inventor because that&apos;s what I do: I invent solutions. Whether that means
                writing a machine learning pipeline, designing a circuit board, or 3D-printing a
                prototype at 2am — I do whatever it takes to make the thing work.
              </blockquote>

              <div className={styles.aboutFacts}>
                <div className={styles.aboutFact}>
                  <div className={styles.factLabel}>Education</div>
                  <div className={styles.factValue}>CS at TU Munich · Research at Oxford</div>
                </div>
                <div className={styles.aboutFact}>
                  <div className={styles.factLabel}>Industry</div>
                  <div className={styles.factValue}>Siemens · Devanthro</div>
                </div>
                <div className={styles.aboutFact}>
                  <div className={styles.factLabel}>Stack</div>
                  <div className={styles.factValue}>Software · AI · Hardware · Robotics</div>
                </div>
                <div className={styles.aboutFact}>
                  <div className={styles.factLabel}>Location</div>
                  <div className={styles.factValue}>Munich, Germany · Global clients</div>
                </div>
              </div>

              <div className={styles.aboutValues}>
                <div className={styles.aboutValue}>
                  &ldquo;Build the simplest thing that works, then make it better.&rdquo;
                </div>
                <div className={styles.aboutValue}>
                  &ldquo;Technology should solve real problems, not create new ones.&rdquo;
                </div>
                <div className={styles.aboutValue}>
                  &ldquo;I ship fast, communicate clearly, and own the outcome.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════ BLOG ═══════════ */}
      <section id="blog">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Insights</div>
            <h2 className="section-title">Thinking out loud.</h2>
            <p className="section-subtitle">
              Technical deep dives, industry perspectives, and behind-the-scenes from the workshop.
            </p>
          </div>

          <div className={styles.blogGrid}>
            <Link
              href="/blog/german-mittelstand-ai-adoption"
              className={`${styles.blogCard} reveal reveal-delay-1`}
            >
              <div className={styles.blogMeta}>
                <span className={styles.blogCategory}>Industry</span>
                <span className={styles.blogDate}>Feb 2026</span>
              </div>
              <h3>
                Why 94% of German Mittelstand Companies Haven&apos;t Adopted AI — And What to Do
                About It
              </h3>
              <p>
                The German manufacturing sector has a 137,000 IT specialist deficit. Here&apos;s how
                smaller companies can still leverage AI without building a data science team.
              </p>
              <div className={styles.blogReadTime}>8 min read</div>
            </Link>

            <Link
              href="/blog/ai-document-pipeline-tutorial"
              className={`${styles.blogCard} reveal reveal-delay-2`}
            >
              <div className={styles.blogMeta}>
                <span className={styles.blogCategory}>Tutorial</span>
                <span className={styles.blogDate}>Jan 2026</span>
              </div>
              <h3>Building an AI-Powered Document Pipeline: From OCR to ERP Integration</h3>
              <p>
                A step-by-step walkthrough of building a production-grade document automation system
                with LangChain, Claude, and FastAPI. Real code, real lessons.
              </p>
              <div className={styles.blogReadTime}>12 min read</div>
            </Link>

            <Link
              href="/blog/iot-prototype-3-weeks"
              className={`${styles.blogCard} reveal reveal-delay-3`}
            >
              <div className={styles.blogMeta}>
                <span className={styles.blogCategory}>Behind the Build</span>
                <span className={styles.blogDate}>Jan 2026</span>
              </div>
              <h3>From Sensor to Dashboard in 3 Weeks: Building an IoT Monitoring Prototype</h3>
              <p>
                What went right, what broke, and what I&apos;d do differently when rapid-prototyping
                a LoRaWAN sensor network with ML-based anomaly detection.
              </p>
              <div className={styles.blogReadTime}>10 min read</div>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════ CONTACT ═══════════ */}
      <section className={styles.contactSection} id="contact">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Let&apos;s build something.</h2>
          </div>

          <div className={styles.contactGrid}>
            <div className={`${styles.contactInfo} reveal reveal-delay-1`}>
              <h3>Have a process that needs automating or an idea that needs building?</h3>
              <p>
                Every engagement starts with a free 30-minute discovery call. Tell me about your
                challenge — I&apos;ll tell you honestly whether I can help and what it would take.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailIcon}>✉</div>
                  <div className={styles.contactDetailText}>
                    <a href="mailto:hello@mdkengineering.com">hello@mdkengineering.com</a>
                  </div>
                </div>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailIcon}>in</div>
                  <div className={styles.contactDetailText}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailIcon}>📍</div>
                  <div className={styles.contactDetailText}>
                    Based in Munich, Germany.
                    <br />
                    Working with clients worldwide.
                  </div>
                </div>
              </div>

              <div className={styles.contactResponse}>
                <span className={styles.statusDot} />
                Typically responds within 24 hours
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
