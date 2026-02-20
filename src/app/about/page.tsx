import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'Über mich',
  description:
    'Marcel Kück — Ihr technischer Partner für Praxisautomatisierung. TU München, Oxford, Siemens, Devanthro. Software + Hardware aus einer Hand.',
};

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="hero-tag">Über mich</div>
          <h1>
            Der <span className="accent">Mensch</span> hinter der Technik.
          </h1>
          <p>
            Ingenieur mit Leib und Seele — von der Platine bis zur Cloud.
          </p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutPhoto}>
              <Image
                src="/marcel.jpg"
                alt="Marcel Kück, KI-Ingenieur & Gründer von MDK Engineering"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerTl}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerTr}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerBl}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerBr}`} />
            </div>

            <div className={styles.aboutText}>
              <blockquote>
                Ich bin Ingenieur mit Leib und Seele — Informatik und Robotik an der TU München
                studiert, KI an der University of Oxford erforscht, Industrieautomatisierung bei
                Siemens gelernt, humanoide Roboter bei Devanthro gebaut. Was mich von reinen
                Software-Beratern unterscheidet: Ich kann eine ML-Pipeline programmieren UND
                eine Platine löten.
              </blockquote>
              <blockquote>
                Meine Partnerin studiert Medizin. Durch sie verstehe ich den klinischen Alltag
                aus erster Hand — die realen Abläufe, den Zeitdruck, die Frustrationen mit der
                Verwaltung. Diese Kombination aus technischem Know-how und medizinischem
                Verständnis ist der Kern von MDK Engineering.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section>
        <div className="container">
          <div className="section-label">Hintergrund</div>
          <h2 className="section-title">Erfahrung &amp; Ausbildung.</h2>

          <div className={styles.timelineGrid}>
            <div className={styles.timelineCard}>
              <div className={styles.timelineDate}>TU München</div>
              <h3>Informatik &amp; Robotik</h3>
              <p>Grundlagen in KI, maschinellem Lernen und Robotik. Die Basis für alles, was danach kam.</p>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineDate}>Oxford</div>
              <h3>KI-Forschung</h3>
              <p>Forschung an humanoiden KI-Systemen. Akademische Tiefe in maschinellem Lernen und neuronalen Netzen.</p>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineDate}>Siemens</div>
              <h3>Industrieautomatisierung</h3>
              <p>Erfahrung mit realen Automatisierungssystemen in der Industrie. Verständnis für Zuverlässigkeit und Compliance.</p>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineDate}>Devanthro</div>
              <h3>Humanoide Robotik</h3>
              <p>Full-Stack Robotik-Entwicklung — Hardware, Firmware, Software, KI. Von der Platine bis zur Cloud.</p>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineDate}>Gründungen</div>
              <h3>2 Startups</h3>
              <p>Vom Konzept zum Produkt. Gelernt, was es braucht, um unter realen Bedingungen zu liefern.</p>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineDate}>Jetzt</div>
              <h3>MDK Engineering</h3>
              <p>KI-Automatisierung für deutsche Arztpraxen. Software und Hardware aus einer Hand.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section>
        <div className="container">
          <div className="section-label">Fähigkeiten</div>
          <h2 className="section-title">Was ich mitbringe.</h2>

          <div className={styles.capGrid}>
            <div className={styles.capCard}>
              <h3>⚡ Workflow-Automatisierung</h3>
              <p>ePA-Integration, Dokumentenverarbeitung, OCR, GDT-Schnittstellen, PVS-Anbindung, KI-Klassifikation</p>
            </div>
            <div className={styles.capCard}>
              <h3>🔧 Hardware-Integration</h3>
              <p>IoT-Hubs, Bluetooth LE, RS-232, MQTT, ESP32, Raspberry Pi, medizinische Geräteprotokolle</p>
            </div>
            <div className={styles.capCard}>
              <h3>🧠 KI-Systeme</h3>
              <p>RAG, LLM-Integration, medizinische Wissensdatenbanken, Guardrails, lokale KI auf Apple Silicon</p>
            </div>
            <div className={styles.capCard}>
              <h3>🔒 DSGVO &amp; Compliance</h3>
              <p>§203 StGB, Auftragsverarbeitungsvertrag, EU-only Hosting, Verschlüsselung, Auditlogging</p>
            </div>
            <div className={styles.capCard}>
              <h3>💻 Full-Stack-Entwicklung</h3>
              <p>Python, TypeScript, Next.js, FastAPI, PostgreSQL, n8n, Cloud-Infrastruktur</p>
            </div>
            <div className={styles.capCard}>
              <h3>📐 Architektur &amp; Beratung</h3>
              <p>Systemdesign, PVS-Evaluierung, Build-vs-Buy-Analyse, Compliance-Planung</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section>
        <div className="container">
          <div className="section-label">Prinzipien</div>
          <h2 className="section-title">Wie ich arbeite.</h2>

          <div className={styles.valuesList}>
            <div className={styles.valueItem}>
              <div className={styles.valueNum}>01</div>
              <div>
                <h3>Erst verstehen, dann automatisieren.</h3>
                <p>Jede Praxis ist anders. Ich komme vorbei, schaue mir die Abläufe an, und baue dann — nicht andersherum.</p>
              </div>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueNum}>02</div>
              <div>
                <h3>Software und Hardware aus einer Hand.</h3>
                <p>Kein Finger-Pointing zwischen Anbietern. Wenn ich etwas baue, bin ich für das gesamte System verantwortlich.</p>
              </div>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueNum}>03</div>
              <div>
                <h3>DSGVO ist kein Hindernis, sondern Designprinzip.</h3>
                <p>Datenschutz wird nicht nachträglich draufgeschraubt — er ist von Anfang an in die Architektur eingebaut.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Link href="/contact" className="btn btn-primary btn-arrow">
              Erstgespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
