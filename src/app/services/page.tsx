import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom RAG & knowledge systems, AI document intelligence, and architecture consulting. Production-grade AI systems for research, healthcare, and e-commerce.',
};

const services = [
  {
    id: 'rag-systems',
    icon: '🧠',
    title: 'Custom RAG & Knowledge Systems',
    what: 'I design and build retrieval-augmented generation systems that make your organization\'s knowledge instantly accessible. These aren\'t chatbot demos — they\'re production systems with proper evaluation, monitoring, and guardrails. Whether your knowledge lives in research papers, product databases, internal wikis, or medical guidelines, I build systems that retrieve the right information, in context, reliably.',
    forWhom:
      'Organizations sitting on valuable knowledge that their teams can\'t access efficiently. Research institutions, e-commerce companies with large product catalogs, healthcare providers needing clinical decision support, any team where finding the right information is a daily bottleneck.',
    process: [
      { step: 'Audit', desc: 'Map your knowledge sources, data quality, and access patterns' },
      { step: 'Design', desc: 'Architecture the retrieval pipeline — chunking strategy, embedding model selection, re-ranking approach' },
      { step: 'Build', desc: 'Implement the system with proper evaluation benchmarks from day one' },
      { step: 'Evaluate', desc: 'Systematic testing against your real queries — precision, recall, faithfulness' },
      { step: 'Deploy & Monitor', desc: 'Production deployment with observability, feedback loops, and continuous improvement' },
    ],
    tech: ['Python', 'LangChain / LlamaIndex', 'Vector Databases (Pinecone, Weaviate, Qdrant)', 'OpenAI / Claude APIs', 'Embedding Models', 'FastAPI', 'Evaluation Frameworks (RAGAS, DeepEval)', 'PostgreSQL'],
    outcome: 'Built a research knowledge assistant that reduced literature review time from hours to minutes for an academic institution',
  },
  {
    id: 'document-intelligence',
    icon: '�',
    title: 'AI Document Intelligence',
    what: 'End-to-end systems that extract, classify, and route documents using LLM-based analysis. From unstructured PDFs to structured, actionable data — integrated into your existing ERP, CRM, or workflow tools. These systems handle the messy reality of real-world documents: inconsistent formats, handwritten notes, multi-language content.',
    forWhom:
      'Companies processing high volumes of documents manually — invoices, contracts, shipping notes, research papers, patient records. Teams where data entry and document routing consume hours that should be spent on higher-value work.',
    process: [
      { step: 'Assess', desc: 'Analyze your document types, volumes, and current processing workflow' },
      { step: 'Design', desc: 'Define extraction schemas, classification rules, and integration points' },
      { step: 'Build', desc: 'Develop the pipeline with OCR, LLM extraction, and validation logic' },
      { step: 'Integrate', desc: 'Connect to your existing systems via API — ERP, CRM, databases' },
      { step: 'Optimize', desc: 'Tune accuracy, handle edge cases, set up monitoring' },
    ],
    tech: ['Python', 'Claude / OpenAI APIs', 'OCR (Tesseract, Azure Document Intelligence)', 'FastAPI', 'PostgreSQL', 'n8n', 'LangChain'],
    outcome: 'Reduced manual data entry by 85% with an AI document processing pipeline for invoice and contract handling',
  },
  {
    id: 'consulting',
    icon: '📐',
    title: 'AI Architecture & Consulting',
    what: 'Helping teams make the right technical decisions before they invest in the wrong approach. RAG architecture reviews, LLM evaluation strategy, build-vs-buy analysis, compliance planning (DSGVO, medical regulations), and hands-on team mentoring. I bring practical experience shipping these systems across multiple domains.',
    forWhom:
      'CTOs evaluating RAG or LLM integration, teams stuck on architecture decisions for knowledge systems, companies needing compliance guidance for AI in regulated industries, startups that need senior technical guidance on their AI roadmap.',
    process: [
      { step: 'Discovery', desc: 'Understand your current state, data landscape, and goals' },
      { step: 'Analysis', desc: 'Technical assessment, opportunity mapping, risk identification' },
      { step: 'Recommend', desc: 'Clear recommendations with trade-off analysis and implementation roadmap' },
      { step: 'Guide', desc: 'Hands-on support during implementation — code reviews, architecture decisions, evaluation setup' },
    ],
    tech: ['Architecture Design', 'RAG Evaluation Strategy', 'LLM Selection & Benchmarking', 'DSGVO / Compliance Planning', 'Build vs. Buy Analysis', 'Team Mentoring'],
    outcome: 'Available as one-off architecture reviews, weekly advisory, or embedded consulting',
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="hero-tag">Services</div>
          <h1>
            AI knowledge systems that work in <span className="accent">production</span>.
          </h1>
          <p>
            From understanding your data landscape to deploying a reliable retrieval system.
            Every engagement starts with your actual problem, not a technology pitch.
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
                  <h3 className={styles.subheading}>What</h3>
                  <p className={styles.description}>{service.what}</p>

                  <h3 className={styles.subheading}>For Whom</h3>
                  <p className={styles.description}>{service.forWhom}</p>

                  <h3 className={styles.subheading}>Example Outcome</h3>
                  <div className={styles.outcomeBox}>{service.outcome}</div>
                </div>

                <div>
                  <h3 className={styles.subheading}>How It Works</h3>
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

                  <h3 className={styles.subheading}>Tools & Tech</h3>
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
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Transparent from the start.</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3>Knowledge System Pilots</h3>
              <div className={styles.pricingValue}>from €5,000</div>
              <p>Focused engagements to build a targeted RAG system or knowledge retrieval solution for your specific use case.</p>
            </div>
            <div className={styles.pricingCard}>
              <h3>Consulting</h3>
              <div className={styles.pricingValue}>from €150/hr</div>
              <p>Architecture reviews, RAG evaluation strategy, compliance planning, and hands-on technical guidance. Also available as weekly retainer.</p>
            </div>
            <div className={styles.pricingCard}>
              <h3>Discovery Call</h3>
              <div className={styles.pricingValue}>Free</div>
              <p>Every engagement starts with a free 30-minute call to understand your challenge.</p>
            </div>
          </div>
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link href="/contact" className="btn btn-primary btn-arrow">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
