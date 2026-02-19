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
  'research-knowledge-assistant': {
    slug: 'research-knowledge-assistant',
    icon: '🔬',
    title: 'AI Knowledge Assistant for Academic Research',
    problem:
      'A research institute had thousands of papers, internal reports, and datasets spread across multiple repositories and file shares. Researchers spent hours manually searching for relevant prior work, often missing critical references. The existing keyword-based search was inadequate for finding conceptually related work across disciplines.',
    approach:
      'I built a domain-specific RAG system tailored to the institute\'s research corpus. The system ingests papers (PDF, LaTeX), internal reports, and metadata, chunks them using a strategy optimized for academic content (respecting section boundaries, tables, and citations), and indexes them in a vector database. Researchers interact through a conversational interface that retrieves relevant passages and generates citation-backed answers. A re-ranking pipeline ensures the most relevant results surface first, and an evaluation framework continuously measures retrieval quality.',
    result:
      'Literature review that previously took hours now completes in seconds. Researchers report discovering relevant cross-disciplinary work they would have missed entirely. The system handles over 15,000 documents with sub-second query response times. Retrieval precision measured at 89% on the institute\'s evaluation benchmark.',
    resultMetric: '↓ Hours of literature search reduced to seconds',
    techStack: ['Python', 'LangChain', 'Pinecone', 'Claude API', 'FastAPI', 'React', 'RAGAS', 'PostgreSQL'],
    details: [
      'Custom PDF and LaTeX parsing pipeline preserving document structure and citations',
      'Chunking strategy optimized for academic content — respects section boundaries, figures, and tables',
      'Hybrid search combining dense vector retrieval with BM25 keyword matching',
      'Re-ranking pipeline using cross-encoder models for improved precision',
      'Citation tracking — every generated answer includes source references with page numbers',
      'Evaluation framework measuring precision, recall, and faithfulness using RAGAS',
      'Feedback loop allowing researchers to rate answer quality, feeding into continuous improvement',
    ],
  },
  'ai-document-processing': {
    slug: 'ai-document-processing',
    icon: '📊',
    title: 'AI-Powered Document Processing Pipeline',
    problem:
      'The client received hundreds of documents daily (invoices, contracts, shipping notes, compliance forms), all in different formats. A team of 4 people spent most of their day manually extracting data and routing documents to the right departments. The process was slow, error-prone, and not scalable.',
    approach:
      'I built an intelligent document pipeline that combines OCR with LLM-based analysis. Documents arrive via email or upload, are classified by type using a fine-tuned classifier, then key data is extracted using LangChain with Claude API. The extracted data is validated against business rules and automatically pushed to the existing ERP system via REST API. Edge cases get flagged for human review.',
    result:
      'Manual data entry was reduced by 85%. The 4-person team now handles 3x the document volume with only 1 person doing quality checks. Processing time per document went from 8 minutes average to 12 seconds.',
    resultMetric: '↓ 85% reduction in manual data entry',
    techStack: ['Python', 'LangChain', 'Claude API', 'FastAPI', 'PostgreSQL', 'n8n', 'OCR', 'Docker'],
    details: [
      'Document classification with 97% accuracy across 12 document types',
      'LLM-based extraction with structured output validation',
      'n8n workflow orchestration for routing and notifications',
      'REST API integration with legacy ERP system (SAP)',
      'Human-in-the-loop review interface for edge cases',
      'Full audit trail and compliance logging',
    ],
  },
  'medical-copilot': {
    slug: 'medical-copilot',
    icon: '⚕️',
    title: 'Medical Practice AI Copilot (In Development)',
    problem:
      'German medical practices face a growing challenge: staying current with evolving clinical guidelines, drug interactions, and treatment protocols while managing increasing patient volumes. Physicians spend significant time manually searching through medical databases and guidelines during consultations. Existing tools are either too generic (not tailored to German medical regulations) or not compliant with DSGVO and medical data protection requirements.',
    approach:
      'I am designing and building a fully DSGVO-compliant AI copilot specifically for German medical practices. The system retrieves patient-relevant guidelines, drug interaction data, and clinical protocols from verified medical knowledge bases using a RAG architecture with strict guardrails. Every response includes source citations from approved medical databases. The system is designed with multiple safety layers: input validation, output guardrails, confidence scoring, and mandatory human-in-the-loop for all clinical recommendations.',
    result:
      'Currently in active development with pilot phase planned for late 2025. Architecture is complete, core RAG pipeline is functional with initial medical knowledge base. Compliance framework for DSGVO and medical data regulations has been validated with legal counsel.',
    resultMetric: 'Currently in development — pilot phase 2025',
    techStack: ['Python', 'LangChain', 'Vector Database', 'Claude API', 'FastAPI', 'DSGVO Compliance Framework', 'Medical NLP', 'Guardrails AI'],
    details: [
      'RAG pipeline ingesting verified German medical guidelines (AWMF Leitlinien), drug databases, and clinical protocols',
      'DSGVO-compliant architecture — all patient data stays on-premise, no PHI sent to external LLM APIs',
      'Multi-layer guardrails: input filtering, output validation, confidence scoring, and mandatory physician review',
      'Citation system linking every recommendation to specific guideline sections and evidence grades',
      'Drug interaction checking against ABDA database with severity classification',
      'Designed for integration with common German practice management systems (PVS)',
      'Audit trail for every query and recommendation for medical documentation requirements',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const study = caseStudies[slug];
    if (!study) return { title: 'Project Not Found' };
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
          <div className="hero-tag">Case Study</div>
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
              <h2>The Problem</h2>
              <p>{study.problem}</p>
            </div>

            <div className={styles.caseStudySection}>
              <h2>The Approach</h2>
              <p>{study.approach}</p>
            </div>

            <div className={styles.caseStudySection}>
              <h2>Key Details</h2>
              <ul>
                {study.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className={styles.caseStudySection}>
              <h2>The Result</h2>
              <p>{study.result}</p>
            </div>

            <div className={styles.caseStudySection}>
              <h2>Tech Stack</h2>
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
              ← All Projects
            </Link>
            <Link href="/contact" className="btn btn-primary btn-arrow" style={{ marginLeft: '1rem' }}>
              Discuss a Similar Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
