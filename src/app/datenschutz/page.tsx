import type { Metadata } from 'next';
import styles from '../impressum/impressum.module.css';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – MDK Engineering',
  description: 'Privacy policy (Datenschutzerklärung) for MDK Engineering.',
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <span className="section-label">{'// Legal'}</span>
          <h1 className="section-title">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>
            <h2>1. Datenschutz auf einen Blick</h2>

            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Die Server befinden
              sich u.a. in den USA. Details finden Sie in der Datenschutzerklärung
              von Vercel:{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3>Verantwortliche Stelle</h3>
            <p>
              MDK Engineering<br />
              Marcel Koch<br />
              [Straße und Hausnummer]<br />
              [PLZ und Ort]<br />
              Deutschland<br />
              E-Mail: marcel@mdkengineering.com
            </p>

            <h2>4. Datenerfassung auf dieser Website</h2>

            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit.
              f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
              DSGVO).
            </p>

            <h3>Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>

            <h2>5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
            <p>
              Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
              können Sie diese Einwilligung jederzeit für die Zukunft
              widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
              können Sie sich jederzeit an uns wenden.
            </p>

            <h2>6. Analyse-Tools und Werbung</h2>
            <p>
              Diese Website verwendet keine Analyse-Tools oder Tracking-Cookies.
              Es werden keine Daten an Dritte zu Werbezwecken weitergegeben.
            </p>

            <div className={styles.notice}>
              <p>
                <strong>Hinweis:</strong> Diese Datenschutzerklärung dient als
                Vorlage. Bitte ersetzen Sie die Platzhalter [in eckigen
                Klammern] mit Ihren tatsächlichen Daten. Für eine vollständige
                und rechtssichere Datenschutzerklärung empfehlen wir die
                Nutzung eines Generators wie{' '}
                <a
                  href="https://www.e-recht24.de/muster-datenschutzerklaerung.html"
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
