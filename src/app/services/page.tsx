import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Leistungen — Automatisierung für Arztpraxen',
  description:
    'Workflow-Automatisierung, ePA-Integration und Smart-Praxis-Hardware. Alles aus einer Hand, DSGVO-konform, nahtlos in Ihr PVS integriert.',
};

const services = [
  {
    id: 'workflow-automation',
    icon: '⚡',
    title: 'Workflow-Automatisierung',
    what: 'Wir automatisieren die administrativen Abläufe, die Ihre MFAs täglich Stunden kosten. Eingehende Dokumente werden automatisch klassifiziert und ins PVS übertragen. ePA-Dokumente werden formatiert, validiert und hochgeladen — ohne manuelles Klicken pro Patient.',
    outcome: '90% weniger manueller Aufwand bei ePA-Dokumenten-Uploads durch automatisierte Formatierung, Validierung und Übertragung',
  },
  {
    id: 'smart-hardware',
    icon: '🔧',
    title: 'Smart-Praxis-Hardware & Geräteanbindung',
    what: 'Ein kleiner IoT-Hub pro Behandlungsraum, der Messwerte automatisch über Bluetooth ausliest und direkt ins PVS und die ePA überträgt — null manuelles Abtippen. Dazu: Check-in-Terminals, Wartezimmer-Displays und Raumbelegungsmanagement.',
    outcome: 'Eine Messung — null manuelles Abtippen — PVS und ePA gleichzeitig aktualisiert',
  },
  {
    id: 'ongoing-support',
    icon: '🛡️',
    title: 'Laufende Betreuung & Optimierung',
    what: 'Automatisierung ist kein Einmal-Projekt. Wir bleiben Ihr technischer Ansprechpartner — für Monitoring, Updates, neue Automatisierungen nach Bedarf, und als erste Anlaufstelle, wenn etwas nicht funktioniert. Kein Warten auf den PVS-Anbieter, kein Ticket-System.',
    outcome: 'Technische Sicherheit und kontinuierliche Optimierung — ein Ansprechpartner für das gesamte System',
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

                  <h3 className={styles.subheading}>Ergebnis</h3>
                  <div className={styles.outcomeBox}>{service.outcome}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Link href="/contact" className="btn btn-primary btn-arrow">
                    Erstgespräch vereinbaren
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {index < services.length - 1 && <div className="section-divider" />}
        </section>
      ))}

      {/* CTA */}
      <section className={styles.altSection}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '1.5rem', opacity: 0.8, maxWidth: '640px', margin: '0 auto 1.5rem' }}>
              Jedes Engagement beginnt mit einem kostenlosen Erstgespräch. Wir kommen gerne auch
              direkt in Ihre Praxis, um uns die Abläufe vor Ort anzuschauen.
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
