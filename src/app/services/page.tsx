import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Leistungen — Automatisierung für Arztpraxen',
  description:
    'Workflow-Automatisierung, ePA-Integration, Smart-Praxis-Hardware und laufende Betreuung. Alles aus einer Hand, DSGVO-konform, nahtlos in Ihr PVS integriert.',
};

const services = [
  {
    id: 'workflow-automation',
    icon: '⚡',
    title: 'Workflow-Automatisierung',
    what: 'Ich automatisiere die administrativen Abläufe, die Ihre MFAs täglich Stunden kosten. Eingehende Faxe und Dokumente werden automatisch klassifiziert und ins PVS übertragen. ePA-Dokumente werden formatiert, validiert und hochgeladen — ohne manuelles Klicken pro Patient. Befundberichte werden aus der Dokumentation generiert, Abrechnungsziffern auf Vollständigkeit geprüft.',
    forWhom: 'Praxen, die täglich mit manuellem Dokumenten-Upload in die ePA kämpfen. Teams, bei denen MFAs mehr Zeit mit Verwaltung als mit Patienten verbringen. Praxen mit hohem Fax- und Dokumentenaufkommen, die Daten manuell ins PVS übertragen.',
    process: [
      { step: 'Analyse', desc: 'Ich beobachte Ihre täglichen Abläufe und identifiziere die größten Zeitfresser' },
      { step: 'Design', desc: 'Automatisierungs-Workflows, die nahtlos in Ihr PVS und Ihre ePA-Anbindung passen' },
      { step: 'Umsetzung', desc: 'OCR, KI-Klassifikation, GDT-Export — alles wird gebaut und getestet' },
      { step: 'Integration', desc: 'Anbindung an Ihr PVS (Medistar, medatixx, T2med, etc.) via GDT-Schnittstelle' },
      { step: 'Optimierung', desc: 'Feintuning basierend auf echtem Praxisbetrieb' },
    ],
    tech: ['Python', 'n8n', 'OCR (Tesseract)', 'LLM APIs', 'GDT-Schnittstelle', 'HL7 FHIR', 'ePA-Integration'],
    outcome: '90% weniger manueller Aufwand bei ePA-Dokumenten-Uploads durch automatisierte Formatierung, Validierung und Übertragung',
  },
  {
    id: 'smart-hardware',
    icon: '🔧',
    title: 'Smart-Praxis-Hardware & Geräteanbindung',
    what: 'Die meisten Medizingeräte in deutschen Praxen sind isolierte Inseln — Blutdruckmessgeräte, EKGs, Spirometer drucken auf Thermopapier oder speichern nur lokal. Ihre MFA liest den Wert ab und tippt ihn ins PVS. Bei 30-50 Patienten pro Tag: Stunden verschwendeter Zeit und Übertragungsfehler. Meine Lösung: Ein kleiner IoT-Hub pro Behandlungsraum, der Messwerte automatisch über Bluetooth oder Seriell ausliest und direkt ins PVS, die ePA und den Praxis-Copilot überträgt. Dazu: Check-in-Terminals, Wartezimmer-Displays und Raumbelegungsmanagement.',
    forWhom: 'Praxen mit hohem Patientendurchsatz, die Messwerte manuell abtippen. Praxen, die teure Kiosk-Terminals durch günstigere, intelligentere Lösungen ersetzen wollen. Praxen, die Gerätedaten automatisch in die ePA übernehmen möchten.',
    process: [
      { step: 'Bestandsaufnahme', desc: 'Welche Geräte stehen in Ihren Behandlungsräumen? Welche Schnittstellen haben sie?' },
      { step: 'Prototyp', desc: 'Erster IoT-Hub für einen Behandlungsraum — Anbindung des häufigsten Geräts' },
      { step: 'Integration', desc: 'GDT-Export ins PVS, automatischer ePA-Upload, Alarmlogik für Auffälligkeiten' },
      { step: 'Rollout', desc: 'Schrittweise Erweiterung auf alle Behandlungsräume und Gerätetypen' },
    ],
    tech: ['ESP32-S3', 'Raspberry Pi', 'Bluetooth LE', 'RS-232', 'MQTT', 'GDT', 'HL7 FHIR', 'OTA Updates'],
    outcome: 'Eine Messung → null manuelles Abtippen → drei Systeme gleichzeitig aktualisiert (PVS + ePA + Copilot)',
  },
  {
    id: 'ongoing-support',
    icon: '🛡️',
    title: 'Laufende Betreuung & Optimierung',
    what: 'Automatisierung ist kein Einmal-Projekt. Ich bleibe Ihr technischer Ansprechpartner — für Monitoring, Updates, neue Automatisierungen nach Bedarf, und als erste Anlaufstelle, wenn etwas nicht funktioniert. Kein Warten auf den PVS-Anbieter, kein Ticket-System.',
    forWhom: 'Praxen, die bereits Automatisierungslösungen von MDK Engineering im Einsatz haben und eine verlässliche technische Betreuung wünschen.',
    process: [
      { step: 'Monitoring', desc: 'Automatisierte Überwachung aller installierten Systeme' },
      { step: 'Updates', desc: 'Software-Updates, Sicherheitspatches, neue ePA-Features' },
      { step: 'Erweiterung', desc: 'Neue Workflows und Automatisierungen nach Bedarf' },
      { step: 'Support', desc: 'Prioritäts-Support — persönliche Erreichbarkeit statt Ticket-Warteschlange' },
    ],
    tech: ['Monitoring', 'Security Updates', 'DSGVO-Compliance', 'OTA Firmware Updates', 'Priority Support'],
    outcome: 'Monatliche Betreuung ab €500/Monat — technische Sicherheit und kontinuierliche Optimierung',
  },
  {
    id: 'practice-copilot',
    icon: '🧠',
    title: 'Praxis-Copilot — KI-Wissenssystem (in Planung)',
    what: 'Der Praxis-Copilot ist kein isolierter Chatbot — er ist eingebettet in die Automatisierungsinfrastruktur, die MDK Engineering bereits in Ihrer Praxis aufgebaut hat. Er kennt Ihre PVS-Daten, den aktuellen Patientenkontext, und Ihre Dokumentationsmuster. Proaktiv werden relevante Leitlinien angezeigt, Medikamenteninteraktionen geprüft und Differentialdiagnosen vorgeschlagen — direkt im Workflow, ohne ein separates Tool zu öffnen. Verfügbar als Cloud-Lösung oder vollständig lokal auf einem Mac Mini in der Praxis.',
    forWhom: 'Praxen, die bereits Automatisierungslösungen von MDK Engineering nutzen und den nächsten Schritt gehen wollen: kontextbewusste klinische Unterstützung im täglichen Workflow.',
    process: [
      { step: 'Infrastruktur', desc: 'Aufbau auf der bestehenden Automatisierungsebene (Layer 1-3)' },
      { step: 'Wissensbasis', desc: 'Integration von AWMF-Leitlinien, Rote Liste, ABDA, ICD-10, EBM/GOÄ' },
      { step: 'Kontext', desc: 'Verknüpfung mit Patientendaten aus dem PVS (de-identifiziert für Cloud-Variante)' },
      { step: 'Validierung', desc: 'Klinische Evaluation mit Ärzten vor dem Produktivbetrieb' },
    ],
    tech: ['RAG', 'AWMF Leitlinien', 'ABDA', 'Rote Liste', 'Lokale KI (Llama/Mistral)', 'Apple Silicon', 'DSGVO'],
    outcome: 'In Planung — wird als natürliche Erweiterung der bestehenden Praxisinfrastruktur entwickelt',
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="hero-tag">Leistungen</div>
          <h1>
            Automatisierung, die im Praxisalltag <span className="accent">funktioniert</span>.
          </h1>
          <p>
            Von ePA bis Geräteanbindung — jedes Engagement beginnt mit Ihrem konkreten Problem,
            nicht mit einem Technologie-Pitch.
          </p>
        </div>
      </div>

      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={index % 2 === 1 ? styles.altSection : ''}>
          <div className="container">
            <div className={styles.serviceDetail}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIconLarge}>{service.icon}</div>
                <h2>{service.title}</h2>
              </div>

              <div className={styles.serviceGrid}>
                <div>
                  <h3 className={styles.subheading}>Was</h3>
                  <p className={styles.description}>{service.what}</p>

                  <h3 className={styles.subheading}>Für wen</h3>
                  <p className={styles.description}>{service.forWhom}</p>

                  <h3 className={styles.subheading}>Ergebnis</h3>
                  <div className={styles.outcomeBox}>{service.outcome}</div>
                </div>

                <div>
                  <h3 className={styles.subheading}>So funktioniert es</h3>
                  <div className={styles.processList}>
                    {service.process.map((step, i) => (
                      <div key={step.step} className={styles.processStep}>
                        <div className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</div>
                        <div>
                          <strong>{step.step}</strong>
                          <p>{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className={styles.subheading}>Technologie</h3>
                  <div className={styles.techList}>
                    {service.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {index < services.length - 1 && <div className="section-divider" />}
        </section>
      ))}

      {/* Pricing */}
      <section className={styles.altSection}>
        <div className="container">
          <div className="section-label">Preise</div>
          <h2 className="section-title">Transparent von Anfang an.</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3>Workflow-Automatisierung</h3>
              <div className={styles.pricingValue}>ab €3.000</div>
              <p>ePA-Automation, Dokumentenverarbeitung, PVS-Integration. Typisch 1-3 Wochen Umsetzung.</p>
            </div>
            <div className={styles.pricingCard}>
              <h3>Smart-Praxis-Hardware</h3>
              <div className={styles.pricingValue}>ab €5.000</div>
              <p>Geräteanbindung, Check-in-Terminals, Wartezimmer-Displays. Hardware + Software + Installation.</p>
            </div>
            <div className={styles.pricingCard}>
              <h3>Laufende Betreuung</h3>
              <div className={styles.pricingValue}>ab €500/Monat</div>
              <p>Monitoring, Updates, neue Automatisierungen, Priority Support. Ihr technischer Partner auf Dauer.</p>
            </div>
          </div>
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p style={{ marginBottom: '1.5rem', opacity: 0.8, maxWidth: '640px', margin: '0 auto 1.5rem' }}>
              Jedes Engagement beginnt mit einem kostenlosen Erstgespräch. Ich komme gerne auch
              direkt in Ihre Praxis, um mir die Abläufe vor Ort anzuschauen.
            </p>
            <Link href="/contact" className="btn btn-primary btn-arrow">
              Erstgespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
