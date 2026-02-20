import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '../projects.module.css';

interface CaseStudy {
  slug: string;
  icon: string;
  title: string;
  problem: string;
  approach: string;
  result: string;
  resultMetric: string;
  techStack: string[];
  details: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  'epa-automation': {
    slug: 'epa-automation',
    icon: '📋',
    title: 'ePA-Automatisierung für Allgemeinmedizin',
    problem:
      'Eine Allgemeinarztpraxis mit 40+ Patienten pro Tag kämpft mit dem manuellen ePA-Upload. Seit der Pflicht im Oktober 2025 müssen Befundberichte, Labordaten und Bildgebung in die ePA hochgeladen werden — aber der PVS-Anbieter liefert nur ein klunky Upload-Tool, das pro Patient mehrere Klicks erfordert. Die MFAs verlieren täglich 1-2 Stunden mit dieser Arbeit, und ab 2026 drohen Sanktionen bei Nicht-Compliance.',
    approach:
      'Aufbau eines automatisierten Dokumenten-Pipelines: Alle im PVS bereits digital vorliegenden Dokumente werden automatisch identifiziert, in das richtige ePA-Format gebracht, validiert und hochgeladen. Nicht-digitale Dokumente (Faxe, Scans) werden zunächst per OCR erfasst und klassifiziert. Ein Compliance-Dashboard zeigt der Praxisleitung, welche Patienten eine ePA haben, was hochgeladen wurde und wo Lücken bestehen.',
    result:
      'Geschätzter Zeitgewinn von 90% bei ePA-Dokumenten-Uploads. Die MFAs müssen nicht mehr pro Patient einzeln hochladen — das System arbeitet im Hintergrund. Das Compliance-Dashboard gibt Sicherheit bei der TI-Pauschale.',
    resultMetric: 'Konzeptphase — Pilotierung geplant',
    techStack: ['Python', 'n8n', 'OCR (Tesseract)', 'GDT-Schnittstelle', 'LLM-basierte Klassifikation', 'ePA-API', 'DSGVO-konformes Hosting (Hetzner/AWS Frankfurt)'],
    details: [
      'Automatische Identifikation ePA-relevanter Dokumente im PVS',
      'OCR + KI-Klassifikation für nicht-digitale Dokumente (Faxe, Scans, Ausdrucke)',
      'Formatierung und Validierung nach ePA-Dokumentenstandards',
      'GDT-Export für nahtlose PVS-Integration (CGM Medistar, medatixx, T2med)',
      'Compliance-Dashboard: ePA-Status pro Patient, Upload-Historie, Lückenanalyse',
      'Automatische Berücksichtigung von Widersprüchen (Opt-out)',
      'Auditlog für alle Uploads — Dokumentation der ePA-Compliance',
    ],
  },
  'device-integration': {
    slug: 'device-integration',
    icon: '🔧',
    title: 'Medizinische Geräteanbindung — IoT für Behandlungsräume',
    problem:
      'In den meisten deutschen Arztpraxen sind Medizingeräte isolierte Inseln. Blutdruckmessgeräte, EKGs, Spirometer, Waagen und Pulsoximeter speichern Daten nur lokal oder drucken auf Thermopapier. Die MFA liest den Wert ab und tippt ihn ins PVS ein — bei 30-50 Patienten pro Tag summiert sich das zu Stunden verlorener Zeit und einer systematischen Quelle für Übertragungsfehler.',
    approach:
      'Ein kompakter IoT-Hub (ESP32-S3 oder Raspberry Pi) pro Behandlungsraum liest Messwerte automatisch über Bluetooth LE oder serielle Schnittstelle aus und überträgt sie via GDT ins PVS, als strukturiertes Dokument in die ePA, und als Patientenkontext an den Praxis-Copilot. Eine Messung, null manuelles Abtippen, drei Systeme gleichzeitig aktualisiert.',
    result:
      'Eliminierung manueller Datenerfassung für die häufigsten Messwerte (Blutdruck, Gewicht, Sauerstoffsättigung). Gleichzeitige Aktualisierung von PVS, ePA und Copilot-Wissensbasis.',
    resultMetric: 'In Entwicklung',
    techStack: ['ESP32-S3', 'Raspberry Pi', 'Bluetooth LE', 'RS-232 Adapter', 'MQTT', 'GDT-Schnittstelle', 'HL7 FHIR', 'OTA Firmware Updates', 'Next.js Dashboard'],
    details: [
      'Bluetooth LE für moderne Geräte, RS-232 für Legacy-Equipment',
      'MQTT für interne Gerätekommunikation, GDT für PVS-Anbindung',
      'Lokale Edge-Verarbeitung — Messwerte werden validiert, bevor sie den Raum verlassen',
      'Automatische ePA-Dokumenterstellung aus Messwerten',
      'Alarmlogik für pathologische Werte — sofortige Benachrichtigung an den Arzt',
      'Unterstützte Geräte (initial): Blutdruckmessgeräte, Waagen, Pulsoximeter, EKG, Spirometer',
      'OTA-Updates für alle deployten Hubs — kein manuelles Firmware-Update nötig',
      'Regulatorisch: Datentransport, keine klinische Entscheidung — kein Medizinprodukt',
    ],
  },
  'practice-copilot': {
    slug: 'practice-copilot',
    icon: '⚕️',
    title: 'Praxis-Copilot — KI-Wissenssystem (in Planung)',
    problem:
      'Ärzte müssen täglich klinische Entscheidungen treffen und dabei aktuelle Leitlinien, Medikamenteninteraktionen und Abrechnungsregeln berücksichtigen. Bestehende Lösungen wie Prof. Valmed sind isolierte Web-Tools — der Arzt muss den Workflow unterbrechen, ein separates Tool öffnen, und manuell den Kontext eingeben. Microsoft Dragon Copilot fokussiert auf Kliniken, nicht auf deutsche Arztpraxen.',
    approach:
      'Der Praxis-Copilot wird direkt in die bestehende Automatisierungsinfrastruktur eingebettet — er hat automatisch Zugriff auf die Dokumente, Labordaten und Messwerte, die MDK Engineering bereits verarbeitet. RAG-Architektur über kuratierte medizinische Wissensdatenbanken (AWMF-Leitlinien, Rote Liste, ABDA, ICD-10). Verfügbar als Cloud-Lösung mit de-identifizierten Abfragen oder vollständig lokal auf Apple Silicon Hardware in der Praxis.',
    result:
      'In Konzeptionsphase. Architektur steht, RAG-Pipeline funktional mit initialer medizinischer Wissensbasis. Pilotierung geplant nach Aufbau der Praxis-Automatisierungsinfrastruktur (Layer 1-3).',
    resultMetric: 'In Planung — Pilotphase nach Layer 1-3',
    techStack: ['Python', 'RAG (LangChain)', 'AWMF Leitlinien', 'Rote Liste', 'ABDA', 'Claude/OpenAI APIs', 'Lokale KI (Llama/Mistral)', 'Apple Silicon', 'DSGVO-Compliance', 'Guardrails AI'],
    details: [
      'RAG über kuratierte deutsche medizinische Wissensquellen (AWMF, Rote Liste, ABDA)',
      'Kontextbewusst durch Integration mit der bestehenden Automatisierungsebene',
      'Proaktive Unterstützung: Leitlinien-Hinweise, Interaktionsprüfung, Abrechnungsvorschläge',
      'Cloud-Variante: de-identifizierte Abfragen, EU-Hosting (AWS Frankfurt/Hetzner)',
      'Lokale Variante: Mac Mini M4 in der Praxis, maximale Datensouveränität',
      'Zitatpflicht: Jede Empfehlung referenziert die Quell-Leitlinie und Evidenzgrad',
      'Kein Medizinprodukt in Phase 1 (nur Informationsabruf, keine klinischen Claims)',
      'CE-Zertifizierung als MDSW geplant für Phase 2 (Prof. Valmed als Präzedenzfall)',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const study = caseStudies[slug];
    if (!study) return { title: 'Projekt nicht gefunden' };
    return {
      title: study.title,
      description: study.problem.slice(0, 160),
    };
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) notFound();

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="hero-tag">Projekt</div>
          <h1>{study.title}</h1>
          <div style={{ marginTop: '1.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--accent)',
                background: 'var(--accent-dim)',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
              }}
            >
              {study.resultMetric}
            </span>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className={styles.caseStudy}>
            <div className={styles.caseStudySection}>
              <h2>Das Problem</h2>
              <p>{study.problem}</p>
            </div>

            <div className={styles.caseStudySection}>
              <h2>Der Ansatz</h2>
              <p>{study.approach}</p>
            </div>

            <div className={styles.caseStudySection}>
              <h2>Details</h2>
              <ul>
                {study.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className={styles.caseStudySection}>
              <h2>Das Ergebnis</h2>
              <p>{study.result}</p>
            </div>

            <div className={styles.caseStudySection}>
              <h2>Technologie</h2>
              <div className={styles.techStackGrid}>
                {study.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <Link href="/projects" className="btn btn-secondary">
              ← Alle Projekte
            </Link>
            <Link href="/contact" className="btn btn-primary btn-arrow" style={{ marginLeft: '1rem' }}>
              Ähnliches Projekt besprechen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
