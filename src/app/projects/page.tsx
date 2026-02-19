import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './projects.module.css';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Case studies and selected work: production-grade RAG systems, AI document intelligence, and knowledge retrieval pipelines across research, healthcare, and e-commerce.',
};

const projects = [
  {
    slug: 'research-knowledge-assistant',
    icon: '🔬',
    title: 'AI Knowledge Assistant for Academic Research',
    description:
      'Built a domain-specific RAG system for a research institute, enabling researchers to query thousands of papers and internal documents with accurate, citation-backed answers.',
    result: '↓ Hours of literature search reduced to seconds',
    tags: ['Python', 'LangChain', 'Vector DB', 'Claude API', 'FastAPI'],
    status: 'Case Study',
  },
  {
    slug: 'ai-document-processing',
    icon: '📊',
    title: 'AI-Powered Document Processing Pipeline',
    description:
      'Built an end-to-end automation system that extracts, classifies, and routes incoming documents (invoices, contracts, shipping notes) using LLM-based analysis. Integrates with existing ERP via REST API.',
    result: '↓ 85% reduction in manual data entry',
    tags: ['Python', 'LangChain', 'Claude API', 'FastAPI', 'PostgreSQL', 'n8n'],
    status: 'Case Study',
  },
  {
    slug: 'medical-copilot',
    icon: '⚕️',
    title: 'Medical Practice AI Copilot (In Development)',
    description:
      'Designing a fully DSGVO-compliant AI assistant for German medical practices. Retrieves patient-relevant guidelines, drug interactions, and clinical protocols from verified medical knowledge bases.',
    result: 'Currently in development — pilot phase 2025',
    tags: ['Python', 'RAG', 'DSGVO Compliance', 'Medical NLP', 'Guardrails'],
    status: 'In Development',
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
            Real AI knowledge systems I&apos;ve designed and built. Each project ships — no slide decks.
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
          <h2 className="section-title">Have a knowledge challenge?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
            I&apos;m always interested in complex retrieval and knowledge system problems. Let&apos;s discuss yours.
          </p>
          <Link href="/contact" className="btn btn-primary btn-arrow">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
