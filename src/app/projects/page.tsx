import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './projects.module.css';

export const metadata: Metadata = {
  title: 'Projekte',
  description:
    'Automatisierungslösungen für Arztpraxen: ePA-Workflows, Geräteanbindung und KI-Wissenssysteme — praxisnah, DSGVO-konform, aus einer Hand.',
};

const projects = [
  {
    slug: 'epa-automation',
    icon: '📋',
    title: 'ePA-Automatisierung für Allgemeinmedizin',
    description:
      'Automatisierte Dokumentenaufbereitung und ePA-Upload für eine Allgemeinarztpraxis. Befundberichte, Labordaten und Bildgebung werden automatisch formatiert, validiert und hochgeladen.',
    result: '↓ 90% weniger manueller Aufwand bei ePA-Uploads',
    tags: ['Python', 'OCR', 'GDT', 'n8n', 'ePA', 'DSGVO'],
    status: 'Konzept',
  },
  {
    slug: 'device-integration',
    icon: '🔧',
    title: 'Medizinische Geräteanbindung',
    description:
      'IoT-Hub für Behandlungsräume: Blutdruckmessgeräte, Waagen und Pulsoximeter automatisch über Bluetooth ins PVS und die ePA integriert — null manuelles Abtippen.',
    result: '→ Eine Messung — drei Systeme aktualisiert (PVS + ePA + Copilot)',
    tags: ['ESP32-S3', 'Bluetooth LE', 'MQTT', 'GDT', 'HL7 FHIR'],
    status: 'In Entwicklung',
  },
  {
    slug: 'practice-copilot',
    icon: '⚕️',
    title: 'Praxis-Copilot (DSGVO-konform)',
    description:
      'KI-gestütztes Wissenssystem für Arztpraxen. Greift auf Leitlinien, Medikamentendatenbanken und Patientenkontext zu — integriert in die bestehende Praxisinfrastruktur.',
    result: 'Aktuell in Konzeption — Pilotphase geplant',
    tags: ['Python', 'RAG', 'DSGVO', 'AWMF Leitlinien', 'Lokale KI'],
    status: 'In Planung',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="hero-tag">Projekte</div>
          <h1>
            Ausgewählte <span className="accent">Arbeit</span>.
          </h1>
          <p>
            Automatisierungslösungen, die im Praxisalltag funktionieren. Jedes Projekt liefert — keine Konzeptpapiere.
          </p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={styles.projectCard}
              >
                <div className={styles.projectImage}>
                  <div className={styles.projectImagePattern} />
                  <div className={styles.projectImageIcon}>{project.icon}</div>
                  <span className={styles.projectStatus}>● {project.status}</span>
                </div>
                <div className={styles.projectBody}>
                  <h3>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.projectResult}>{project.result}</div>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Automatisierung für Ihre Praxis?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
            Ich schaue mir gerne an, wo in Ihrem Praxisalltag die größten Zeitfresser liegen.
          </p>
          <Link href="/contact" className="btn btn-primary btn-arrow">
            Erstgespräch vereinbaren
          </Link>
        </div>
      </section>
    </>
  );
}
