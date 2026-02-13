import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './projects.module.css';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Case studies and selected work — from AI-powered automation pipelines to IoT prototypes with on-device machine learning.',
};

const projects = [
  {
    slug: 'predictive-quality-inspection',
    icon: '🏭',
    title: 'Predictive Quality Inspection System',
    description:
      'Designed and deployed a computer vision pipeline for real-time quality inspection on a production line. Custom camera array with on-device ML classifies defects in under 50ms, replacing manual spot-checks.',
    result: '↓ 73% reduction in defect escape rate',
    tags: ['Python', 'TensorFlow Lite', 'OpenCV', 'Raspberry Pi', 'Custom PCB', 'MQTT'],
  },
  {
    slug: 'ai-document-processing',
    icon: '📊',
    title: 'AI-Powered Document Processing Pipeline',
    description:
      'Built an end-to-end automation system that extracts, classifies, and routes incoming documents (invoices, contracts, shipping notes) using LLM-based analysis. Integrates with existing ERP via REST API.',
    result: '↓ 85% reduction in manual data entry',
    tags: ['Python', 'LangChain', 'Claude API', 'FastAPI', 'PostgreSQL', 'n8n'],
  },
  {
    slug: 'iot-environmental-monitoring',
    icon: '🌡️',
    title: 'IoT Environmental Monitoring with Anomaly Detection',
    description:
      'Designed a wireless sensor network for cold chain monitoring in pharmaceutical logistics. Custom hardware with LoRaWAN connectivity, real-time dashboard, and ML-based anomaly detection with automated alerting.',
    result: '3-week prototype cycle, now in pilot',
    tags: ['ESP32', 'LoRaWAN', '3D Printing', 'React', 'InfluxDB', 'scikit-learn'],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="hero-tag">Projects</div>
          <h1>
            Selected <span className="accent">work</span>.
          </h1>
          <p>
            Real systems I&apos;ve designed and built — from AI pipelines to physical prototypes.
            Each project ships, no slide decks.
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
                  <span className={styles.projectStatus}>● Case Study</span>
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
          <h2 className="section-title">Have a project in mind?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
            I&apos;m always interested in challenging engineering problems. Let&apos;s discuss yours.
          </p>
          <Link href="/contact" className="btn btn-primary btn-arrow">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
