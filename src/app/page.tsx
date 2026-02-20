import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';
import ContactForm from '@/components/ContactForm';
import HeroAnimation from '@/components/HeroAnimation';

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className={styles.hero} id="hero">
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>Praxisautomatisierung · München</div>
            <HeroAnimation />
            <p className={styles.heroDescription}>
              Ihre MFAs tippen Messwerte ab, kämpfen mit ePA-Uploads, sortieren Faxe
              und verlieren Stunden an Verwaltung. Ärzte dokumentieren statt zu behandeln.
              Ich automatisiere genau diese Abläufe — DSGVO-konform, nahtlos in Ihr PVS
              integriert, Software und Hardware aus einer Hand.
            </p>
            <div className={styles.heroButtons}>
              <Link href="#contact" className="btn btn-primary btn-arrow">
                Erstgespräch vereinbaren
              </Link>
              <Link href="#services" className="btn btn-secondary">
                Leistungen ansehen
              </Link>
            </div>
            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className="num">ePA</span> Automatisierte Uploads statt Klick-Marathons
              </div>
              <div className={styles.heroMetaItem}>
                <span className="num">MFA</span> Weniger Abtippen, mehr Zeit für Patienten
              </div>
              <div className={styles.heroMetaItem}>
                <span className="num">PVS</span> Geräte, Dokumente &amp; Abrechnung — alles verbunden
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════ TRUST BAR ═══════════ */}
      <div className={styles.trustBar}>
        <div className="container">
          <div className={styles.trustInner}>
            <span className={styles.trustLabel}>Hintergrund</span>
            <div className={styles.trustLogos}>
              <div className={styles.trustItem}>
                <span className={styles.trustName}>TUM</span>
                <span className={styles.trustRole}>Informatik &amp; Robotik</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <span className={styles.trustName}>Oxford</span>
                <span className={styles.trustRole}>KI-Forschung</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <span className={styles.trustName}>Siemens</span>
                <span className={styles.trustRole}>Industrieautomatisierung</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <span className={styles.trustName}>Devanthro</span>
                <span className={styles.trustRole}>Humanoide Robotik</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Leistungen</div>
            <h2 className="section-title">Was ich für Ihre Praxis baue.</h2>
            <p className="section-subtitle">
              Von der Analyse bis zur laufenden Betreuung — alles aus einer Hand.
              Kein Vendor-Lock-in, keine Abhängigkeit von Ihrem PVS-Anbieter.
            </p>
          </div>

          <div className={`${styles.servicesGrid} reveal reveal-delay-2`}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3>Workflow-Automatisierung</h3>
              <p>
                ePA-Uploads, Dokumentenklassifikation, Befundbrief-Erstellung,
                Abrechnungsoptimierung — ich automatisiere die Verwaltungsarbeit,
                die Ihre MFAs täglich Stunden kostet.
              </p>
              <div className={styles.serviceTech}>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">n8n</span>
                <span className="tech-tag">GDT</span>
                <span className="tech-tag">OCR</span>
                <span className="tech-tag">LLM APIs</span>
                <span className="tech-tag">HL7 FHIR</span>
              </div>
              <Link href="/services#workflow-automation" className={styles.serviceLink}>
                ePA-Automatisierung besprechen →
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Smart-Praxis-Hardware &amp; Geräteanbindung</h3>
              <p>
                Check-in-Terminals, Wartezimmer-Displays, Geräte-Integration —
                Blutdruck, EKG, Spirometrie direkt ins PVS und die ePA,
                ohne manuelles Abtippen.
              </p>
              <div className={styles.serviceTech}>
                <span className="tech-tag">ESP32</span>
                <span className="tech-tag">Bluetooth LE</span>
                <span className="tech-tag">MQTT</span>
                <span className="tech-tag">Raspberry Pi</span>
                <span className="tech-tag">GDT</span>
              </div>
              <Link href="/services#smart-hardware" className={styles.serviceLink}>
                Hardware-Lösungen entdecken →
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🛡️</div>
              <h3>Laufende Betreuung &amp; Optimierung</h3>
              <p>
                Monitoring, Updates, neue Automatisierungen nach Bedarf — ich bleibe
                Ihr technischer Ansprechpartner, damit alles reibungslos läuft.
              </p>
              <div className={styles.serviceTech}>
                <span className="tech-tag">Monitoring</span>
                <span className="tech-tag">Updates</span>
                <span className="tech-tag">Priority Support</span>
                <span className="tech-tag">Optimierung</span>
              </div>
              <Link href="/services#ongoing-support" className={styles.serviceLink}>
                Betreuungsmodell ansehen →
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🧠</div>
              <h3>Praxis-Copilot — KI-Wissenssystem (in Planung)</h3>
              <p>
                Kontextbewusste Unterstützung direkt im Praxisalltag: Leitlinien,
                Medikamenteninteraktionen, Differentialdiagnosen — aufgebaut auf
                der Automatisierungsinfrastruktur.
              </p>
              <div className={styles.serviceTech}>
                <span className="tech-tag">RAG</span>
                <span className="tech-tag">Leitlinien</span>
                <span className="tech-tag">ABDA</span>
                <span className="tech-tag">Lokale KI</span>
                <span className="tech-tag">DSGVO</span>
              </div>
              <Link href="/services#practice-copilot" className={styles.serviceLink}>
                Mehr erfahren →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════ WARUM MDK ═══════════ */}
      <section id="warum-mdk">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Warum MDK</div>
            <h2 className="section-title">Was mich von Ihrem PVS-Anbieter unterscheidet.</h2>
          </div>

          <div className={`${styles.servicesGrid} reveal reveal-delay-2`}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Software + Hardware aus einer Hand</h3>
              <p>
                Jeder andere Anbieter im Praxisumfeld ist rein software-basiert. Ich kann
                zusätzlich Hardware installieren — IoT-Hubs, Check-in-Terminals, Displays —
                und alles miteinander verbinden. Ein Ansprechpartner für das gesamte System.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚕️</div>
              <h3>Ich verstehe den Praxisalltag</h3>
              <p>
                Meine Partnerin studiert Medizin. Ich kenne die realen Abläufe, den Zeitdruck
                und die Frustrationen aus erster Hand — nicht aus einem Marktforschungsbericht.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔓</div>
              <h3>Kein Vendor-Lock-in</h3>
              <p>
                Ich arbeite mit Open-Source-Technologie und offenen Standards (GDT, HL7 FHIR).
                Was ich baue, gehört Ihnen — nicht einem Plattform-Anbieter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════ ePA ═══════════ */}
      <section id="epa">
        <div className="container">
          <div className="reveal">
            <div className="section-label">ePA</div>
            <h2 className="section-title">ePA-Pflicht seit Oktober 2025. Sanktionen ab 2026.</h2>
          </div>

          <div className="reveal reveal-delay-1">
            <p className="section-subtitle" style={{ maxWidth: '800px' }}>
              Seit Oktober 2025 ist die elektronische Patientenakte Pflicht für alle Praxen.
              Ab 2026 drohen 1% Honorarkürzung und halbierte TI-Pauschale bei Nicht-Compliance.
              Die meisten PVS-Anbieter liefern klunky Upload-Tools, die pro Patient mehrere
              Klicks erfordern. Bei 40+ Patienten pro Tag wird das schnell zur größten
              Zeitfresser-Aufgabe Ihrer MFAs.
            </p>
            <p className="section-subtitle" style={{ maxWidth: '800px', marginTop: '1.5rem' }}>
              Ich automatisiere den gesamten ePA-Upload — Dokumente werden im Hintergrund
              formatiert, validiert und übertragen. Kein Klicken pro Patient.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/services#workflow-automation" className="btn btn-primary btn-arrow">
                ePA-Automatisierung besprechen →
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
            <div className="section-label">Projekte</div>
            <h2 className="section-title">Ausgewählte Arbeit.</h2>
            <p className="section-subtitle">
              Praxisnahe Automatisierungslösungen, die im Alltag funktionieren — keine PowerPoint-Konzepte.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            <Link href="/projects/epa-automation" className={`${styles.projectCard} reveal reveal-delay-1`}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePattern} />
                <div className={styles.projectImageIcon}>📋</div>
                <span className={styles.projectStatus}>● Konzept</span>
              </div>
              <div className={styles.projectBody}>
                <h3>ePA-Automatisierung für Allgemeinmedizin</h3>
                <p className={styles.projectDesc}>
                  Automatisierte Dokumentenaufbereitung und ePA-Upload für eine Allgemeinarztpraxis.
                  Befundberichte, Labordaten und Bildgebung werden automatisch formatiert, validiert
                  und hochgeladen.
                </p>
                <div className={styles.projectResult}>↓ 90% weniger manueller Aufwand bei ePA-Uploads</div>
                <div className={styles.projectTags}>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">OCR</span>
                  <span className="tech-tag">GDT</span>
                  <span className="tech-tag">n8n</span>
                  <span className="tech-tag">ePA</span>
                  <span className="tech-tag">DSGVO</span>
                </div>
              </div>
            </Link>

            <Link href="/projects/device-integration" className={`${styles.projectCard} reveal reveal-delay-2`}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePattern} />
                <div className={styles.projectImageIcon}>🔧</div>
                <span className={styles.projectStatus}>● In Entwicklung</span>
              </div>
              <div className={styles.projectBody}>
                <h3>Medizinische Geräteanbindung</h3>
                <p className={styles.projectDesc}>
                  IoT-Hub für Behandlungsräume: Blutdruckmessgeräte, Waagen und Pulsoximeter
                  automatisch über Bluetooth ins PVS und die ePA integriert — null manuelles Abtippen.
                </p>
                <div className={styles.projectResult}>→ Eine Messung — drei Systeme aktualisiert (PVS + ePA + Copilot)</div>
                <div className={styles.projectTags}>
                  <span className="tech-tag">ESP32-S3</span>
                  <span className="tech-tag">Bluetooth LE</span>
                  <span className="tech-tag">MQTT</span>
                  <span className="tech-tag">GDT</span>
                  <span className="tech-tag">HL7 FHIR</span>
                </div>
              </div>
            </Link>

            <Link href="/projects/practice-copilot" className={`${styles.projectCard} reveal reveal-delay-3`}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePattern} />
                <div className={styles.projectImageIcon}>⚕️</div>
                <span className={styles.projectStatus}>● In Planung</span>
              </div>
              <div className={styles.projectBody}>
                <h3>Praxis-Copilot (DSGVO-konform)</h3>
                <p className={styles.projectDesc}>
                  KI-gestütztes Wissenssystem für Arztpraxen. Greift auf Leitlinien,
                  Medikamentendatenbanken und Patientenkontext zu — integriert in die
                  bestehende Praxisinfrastruktur.
                </p>
                <div className={styles.projectResult}>Aktuell in Konzeption — Pilotphase geplant</div>
                <div className={styles.projectTags}>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">RAG</span>
                  <span className="tech-tag">DSGVO</span>
                  <span className="tech-tag">AWMF Leitlinien</span>
                  <span className="tech-tag">Lokale KI</span>
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
            <div className="section-label">Über mich</div>
            <h2 className="section-title">Marcel Kück.</h2>
          </div>

          <div className={`${styles.aboutGrid} reveal reveal-delay-1`}>
            <div className={styles.aboutPhoto}>
              <Image
                src="/marcel.jpg"
                alt="Marcel Kück, KI-Ingenieur & Gründer von MDK Engineering"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: 'cover' }}
                priority={false}
              />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerTl}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerTr}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerBl}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerBr}`} />
            </div>

            <div className={styles.aboutText}>
              <blockquote>
                Ich baue Technologie, die im Praxisalltag funktioniert — nicht als Konzeptstudie,
                sondern als laufendes System. Mein Hintergrund in Informatik, Robotik und
                Industrieautomatisierung ermöglicht mir, Software und Hardware aus einer Hand
                zu liefern. Das kann kein reiner Software-Anbieter.
              </blockquote>
              <blockquote>
                Meine Partnerin studiert Medizin — ich verstehe den klinischen Alltag nicht nur
                aus der Technik-Perspektive, sondern auch aus der Praxis.
              </blockquote>

              <div className={styles.aboutFacts}>
                <div className={styles.aboutFact}>
                  <div className={styles.factLabel}>Ausbildung</div>
                  <div className={styles.factValue}>TU München &amp; Oxford</div>
                </div>
                <div className={styles.aboutFact}>
                  <div className={styles.factLabel}>Erfahrung</div>
                  <div className={styles.factValue}>Siemens &amp; Devanthro</div>
                </div>
                <div className={styles.aboutFact}>
                  <div className={styles.factLabel}>Gründungen</div>
                  <div className={styles.factValue}>2 Startups</div>
                </div>
                <div className={styles.aboutFact}>
                  <div className={styles.factLabel}>Fokus</div>
                  <div className={styles.factValue}>Software + Hardware für Arztpraxen</div>
                </div>
              </div>

              <div className={styles.aboutValues}>
                <div className={styles.aboutValue}>
                  &ldquo;Erst verstehen, dann automatisieren — jede Praxis ist anders.&rdquo;
                </div>
                <div className={styles.aboutValue}>
                  &ldquo;Software und Hardware aus einer Hand — kein Finger-Pointing zwischen Anbietern.&rdquo;
                </div>
                <div className={styles.aboutValue}>
                  &ldquo;DSGVO ist kein Hindernis, sondern Designprinzip.&rdquo;
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
            <div className="section-label">Einblicke</div>
            <h2 className="section-title">Aktuelles aus der Praxisautomatisierung.</h2>
            <p className="section-subtitle">
              Technische Einblicke, Praxis-Perspektiven und Hintergründe aus der Werkstatt.
            </p>
          </div>

          <div className={styles.blogGrid}>
            <Link
              href="/blog/epa-automatisierung-praxis"
              className={`${styles.blogCard} reveal reveal-delay-1`}
            >
              <div className={styles.blogMeta}>
                <span className={styles.blogCategory}>Praxisautomatisierung</span>
                <span className={styles.blogDate}>Feb 2026</span>
              </div>
              <h3>
                ePA-Automatisierung: Wie Ihre Praxis 2026 compliant bleibt, ohne Ihre MFAs zu überlasten
              </h3>
              <p>
                Seit Oktober 2025 ist die ePA Pflicht. Ab 2026 drohen Sanktionen.
                So wird der ePA-Upload zum Hintergrundprozess.
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
            <div className="section-label">Kontakt</div>
            <h2 className="section-title">Sprechen wir über Ihre Praxis.</h2>
          </div>

          <div className={styles.contactGrid}>
            <div className={`${styles.contactInfo} reveal reveal-delay-1`}>
              <h3>Kostenloses Erstgespräch — ich schaue mir an, wo in Ihrem Praxisalltag Automatisierung den größten Unterschied macht.</h3>
              <p>
                Jedes Engagement beginnt mit einem kostenlosen 30-Minuten-Gespräch.
                Erzählen Sie mir von Ihrem Praxisalltag, und ich sage Ihnen ehrlich,
                wo Automatisierung Sinn ergibt und was es kosten würde.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailIcon}>✉</div>
                  <div className={styles.contactDetailText}>
                    <a href="mailto:marcel@mdkengineering.com">marcel@mdkengineering.com</a>
                  </div>
                </div>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailIcon}>in</div>
                  <div className={styles.contactDetailText}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      LinkedIn Profil
                    </a>
                  </div>
                </div>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailIcon}>📍</div>
                  <div className={styles.contactDetailText}>
                    Sitz in München.
                    <br />
                    Termine vor Ort in ganz Süddeutschland.
                  </div>
                </div>
              </div>

              <div className={styles.contactResponse}>
                Antwortzeit: Innerhalb von 24 Stunden
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
