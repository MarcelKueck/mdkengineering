import Link from 'next/link';
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
              Wir automatisieren genau diese Abläufe — DSGVO-konform, nahtlos in Ihr PVS
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
            <span className={styles.trustLabel}>Unser Hintergrund</span>
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
                <span className={styles.trustName}>TUM</span>
                <span className={styles.trustRole}>Medizin</span>
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
            <h2 className="section-title">Was wir für Ihre Praxis bauen.</h2>
            <p className="section-subtitle">
              Von der Analyse bis zur laufenden Betreuung — Engineering und Medizin aus einem Team.
            </p>
          </div>

          <div className={`${styles.servicesGrid} reveal reveal-delay-2`}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3>Workflow-Automatisierung</h3>
              <p>
                ePA-Uploads, Dokumentenklassifikation, Befundbrief-Erstellung,
                Abrechnungsoptimierung — wir automatisieren die Verwaltungsarbeit,
                die Ihre MFAs täglich Stunden kostet.
              </p>
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
              <Link href="/services#smart-hardware" className={styles.serviceLink}>
                Hardware-Lösungen entdecken →
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🛡️</div>
              <h3>Laufende Betreuung &amp; Optimierung</h3>
              <p>
                Monitoring, Updates, neue Automatisierungen nach Bedarf — wir bleiben
                Ihr technischer Ansprechpartner, damit alles reibungslos läuft.
              </p>
              <Link href="/services#ongoing-support" className={styles.serviceLink}>
                Betreuungsmodell ansehen →
              </Link>
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
              Wir automatisieren den gesamten ePA-Upload — Dokumente werden im Hintergrund
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

      {/* ═══════════ WARUM WIR ═══════════ */}
      <section id="about">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Warum wir</div>
            <h2 className="section-title">Engineering trifft Medizin.</h2>
            <p className="section-subtitle">
              Wir sind kein IT-Dienstleister mit Gesundheits-Broschüre.
              Unser Team vereint technische Tiefe mit echtem Verständnis für den klinischen Alltag.
            </p>
          </div>

          <div className={`${styles.servicesGrid} reveal reveal-delay-2`}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3>Engineering &amp; Medizin aus einem Team.</h3>
              <p>
                Marcel baut die Systeme. Veronika versteht den klinischen Alltag.
                Zusammen automatisieren wir Abläufe, die technisch funktionieren
                und medizinisch Sinn ergeben.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Software und Hardware aus einer Hand.</h3>
              <p>
                Kein Finger-Pointing zwischen Anbietern.
                Wenn wir etwas bauen, sind wir für das gesamte System verantwortlich —
                von der Schnittstelle bis zum Gerät.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔒</div>
              <h3>DSGVO ist kein Hindernis, sondern Designprinzip.</h3>
              <p>
                Datenschutz wird nicht nachträglich draufgeschraubt —
                er ist von Anfang an in die Architektur eingebaut.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link href="/about" className="btn btn-secondary">
              Mehr über uns →
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
              <h3>Kostenloses Erstgespräch — wir schauen uns an, wo in Ihrem Praxisalltag Automatisierung den größten Unterschied macht.</h3>
              <p>
                Jedes Engagement beginnt mit einem kostenlosen 30-Minuten-Gespräch.
                Erzählen Sie uns von Ihrem Praxisalltag, und wir sagen Ihnen ehrlich,
                wo Automatisierung Sinn ergibt und was es kosten würde.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailIcon}>✉</div>
                  <div className={styles.contactDetailText}>
                    <a href="mailto:contact@mdkengineering.com">contact@mdkengineering.com</a>
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
