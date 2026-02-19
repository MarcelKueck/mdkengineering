import type { Metadata } from 'next';
import styles from './impressum.module.css';

export const metadata: Metadata = {
  title: 'Impressum – MDK Engineering',
  description: 'Legal notice (Impressum) for MDK Engineering.',
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <span className="section-label">{'// Legal'}</span>
          <h1 className="section-title">Impressum</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              MDK Engineering<br />
              Marcel Kück<br />
              [Straße und Hausnummer]<br />
              [PLZ und Ort]<br />
              Deutschland
            </p>

            <h2>Kontakt</h2>
            <p>
              E-Mail: marcel@mdkengineering.com
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [USt-IdNr. einfügen]
            </p>

            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Marcel Kück<br />
              [Adresse wie oben]
            </p>

            <h2>EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2>
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <div className={styles.notice}>
              <p>
                <strong>Hinweis:</strong> Bitte ersetzen Sie die Platzhalter
                [in eckigen Klammern] mit Ihren tatsächlichen Daten. Für ein
                vollständiges und rechtssicheres Impressum empfehlen wir die
                Nutzung eines Generators wie{' '}
                <a
                  href="https://www.e-recht24.de/impressum-generator.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  e-recht24.de
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
