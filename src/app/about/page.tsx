import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'AI knowledge systems specialist. CS at TU Munich, research at Oxford, former engineer at Siemens and Devanthro. 2x startup founder. Based in Munich.',
};

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="hero-tag">About</div>
          <h1>
            The <span className="accent">engineer</span> behind it.
          </h1>
          <p>
            I take things apart to understand how they work, then build something better.
          </p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutPhoto}>
              <Image
                src="/marcel.jpg"
                alt="Marcel Kück, AI Engineer & Founder of MDK Engineering"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerTl}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerTr}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerBl}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerBr}`} />
            </div>

            <div className={styles.aboutText}>
              <blockquote>
                I&apos;ve always been the person who takes things apart to understand how they work
                and then builds something better. I studied Computer Science at TUM, researched at
                Oxford, built robots at Devanthro, and engineered systems at Siemens. I&apos;ve
                founded two startups.
              </blockquote>
              <blockquote>
                Today I specialize in AI knowledge systems — building production-grade RAG pipelines
                that give teams reliable access to their organization&apos;s knowledge. I&apos;ve
                built these systems for research institutions, e-commerce platforms, and healthcare
                providers. Each domain taught me something different about what it takes to make
                retrieval actually work: evaluation rigor from research, scale from e-commerce,
                compliance from healthcare.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section>
        <div className="container">
          <div className="section-label">Background</div>
          <h2 className="section-title">Experience & education.</h2>

          <div className={styles.timelineGrid}>
            <div className={styles.timelineCard}>
              <div className={styles.timelineDate}>Education</div>
              <h3>TU Munich, Computer Science</h3>
              <p>Strong foundation in algorithms, systems engineering, and mathematics.</p>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineDate}>Research</div>
              <h3>University of Oxford</h3>
              <p>Research in AI and machine learning, bringing academic rigor to practical engineering.</p>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineDate}>Industry</div>
              <h3>Siemens</h3>
              <p>Engineering complex systems at scale in one of the world&apos;s largest industrial companies.</p>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineDate}>Robotics</div>
              <h3>Devanthro</h3>
              <p>Building humanoid robots, bridging AI, embedded systems, and mechanical engineering.</p>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineDate}>Entrepreneurship</div>
              <h3>2 Startups Founded</h3>
              <p>From concept to product, learned what it takes to ship and iterate under real constraints.</p>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineDate}>Now</div>
              <h3>MDK Engineering</h3>
              <p>Building production-grade AI knowledge systems for research, healthcare, and e-commerce.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section>
        <div className="container">
          <div className="section-label">Capabilities</div>
          <h2 className="section-title">What I bring.</h2>

          <div className={styles.capGrid}>
            <div className={styles.capCard}>
              <h3>🧠 RAG &amp; Retrieval Systems</h3>
              <p>Retrieval-augmented generation, vector search, embedding optimization, chunking strategies, re-ranking, hybrid search</p>
            </div>
            <div className={styles.capCard}>
              <h3>� Document Intelligence</h3>
              <p>OCR, LLM-based extraction and classification, structured data pipelines, multi-format processing</p>
            </div>
            <div className={styles.capCard}>
              <h3>� Evaluation &amp; Testing</h3>
              <p>RAG evaluation frameworks (RAGAS, DeepEval), systematic benchmarking, precision/recall measurement, faithfulness testing</p>
            </div>
            <div className={styles.capCard}>
              <h3>🔒 Compliance &amp; Security</h3>
              <p>DSGVO-compliant AI systems, data handling for regulated industries, guardrails, audit trails, access control</p>
            </div>
            <div className={styles.capCard}>
              <h3>💻 Full-Stack Development</h3>
              <p>Python, TypeScript, React, Next.js, FastAPI, PostgreSQL, cloud infrastructure</p>
            </div>
            <div className={styles.capCard}>
              <h3>📐 Architecture &amp; Strategy</h3>
              <p>System design, LLM selection, build vs. buy analysis, technology roadmaps</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section>
        <div className="container">
          <div className="section-label">Principles</div>
          <h2 className="section-title">How I work.</h2>

          <div className={styles.valuesList}>
            <div className={styles.valueItem}>
              <div className={styles.valueNum}>01</div>
              <div>
                <h3>Build the simplest thing that works, then make it better.</h3>
                <p>Over-engineering kills projects. I start with the minimum viable system, prove it works, then iterate with real feedback.</p>
              </div>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueNum}>02</div>
              <div>
                <h3>Technology should solve real problems, not create new ones.</h3>
                <p>Not every problem needs AI. I&apos;ll tell you honestly if a simpler solution would serve you better.</p>
              </div>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueNum}>03</div>
              <div>
                <h3>I ship fast, communicate clearly, and own the outcome.</h3>
                <p>No disappearing acts. Weekly updates, working demos, and honest conversations about progress and challenges.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Link href="/contact" className="btn btn-primary btn-arrow">
              Let&apos;s Work Together
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
