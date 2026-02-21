import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'MDK Engineering: Ein Team aus Ingenieur und Medizinerin, spezialisiert auf Praxisautomatisierung. TUM, Oxford, Siemens — Engineering und klinisches Verständnis aus einer Hand.',
};

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="hero-tag">Über uns</div>
          <h1>
            Engineering trifft <span className="accent">Medizin</span>.
          </h1>
          <p>
            Wir sind MDK Engineering — ein Team aus Ingenieur und Medizinerin,
            das Arztpraxen von Verwaltungsarbeit befreit.
          </p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="section-label">Team</div>
          <h2 className="section-title">Wer wir sind.</h2>

          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamCardHeader}>
                <h3>Marcel Kück</h3>
                <span className={styles.teamRole}>Engineering &amp; KI</span>
              </div>
              <p>
                Marcel hat Informatik und Robotik an der TU München studiert,
                an der University of Oxford zu KI geforscht, bei Siemens Industrieautomatisierung
                mitentwickelt und bei Devanthro humanoide Roboter gebaut.
                Er bringt die technische Tiefe mit — von Machine-Learning-Pipelines
                über PCB-Design bis zur PVS-Integration.
              </p>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamCardHeader}>
                <h3>Veronika Raum</h3>
                <span className={styles.teamRole}>Medizin &amp; klinische Workflows</span>
              </div>
              <p>
                Veronika studiert Medizin an der TU München und kennt den Praxisalltag
                aus erster Hand. Sie versteht, wie Ärzte und MFAs tatsächlich arbeiten —
                und wo Automatisierung den größten Unterschied macht.
                Sie sorgt dafür, dass unsere Lösungen im klinischen Workflow funktionieren,
                nicht nur auf dem Papier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section>
        <div className="container">
          <div className="section-label">Prinzipien</div>
          <h2 className="section-title">Wie wir arbeiten.</h2>

          <div className={styles.valuesList}>
            <div className={styles.valueItem}>
              <div className={styles.valueNum}>01</div>
              <div>
                <h3>Erst verstehen, dann bauen.</h3>
                <p>Wir kommen vorbei, schauen uns die Abläufe an, und bauen dann — nicht andersherum.</p>
              </div>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueNum}>02</div>
              <div>
                <h3>Software und Hardware aus einer Hand.</h3>
                <p>Kein Finger-Pointing zwischen Anbietern. Wenn wir etwas bauen, sind wir für das gesamte System verantwortlich.</p>
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
