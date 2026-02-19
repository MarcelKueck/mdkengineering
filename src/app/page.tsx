import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';
import ContactForm from '@/components/ContactForm';
import HeroAnimation from '@/components/HeroAnimation';

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className={styles.hero} id="hero">
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>AI Knowledge Systems · Munich</div>
            <HeroAnimation />
            <p className={styles.heroDescription}>
              I build AI systems that give your team instant, reliable access to your
              organization&apos;s knowledge — whether that&apos;s research papers, product catalogs,
              or medical guidelines. Production-grade, compliant, tailored to your domain.
            </p>
            <div className={styles.heroButtons}>
              <Link href="#contact" className="btn btn-primary btn-arrow">
                Let&apos;s Talk
              </Link>
              <Link href="#projects" className="btn btn-secondary">
                See My Work
              </Link>
            </div>
            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className="num">8+</span> Years Engineering
              </div>
              <div className={styles.heroMetaItem}>
                <span className="num">2</span> Startups Founded
              </div>
              <div className={styles.heroMetaItem}>
                <span className="num">E2E</span> Research · Healthcare · E-Commerce
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════ TRUST BAR ═══════════ */}
      <div className={styles.trustBar}>
        <div className="container">
          <div className={styles.trustInner}>
            <span className={styles.trustLabel}>Background</span>
            <div className={styles.trustLogos}>
              <div className={styles.trustItem}>
                <span className={styles.trustName}>TUM</span>
                <span className={styles.trustRole}>Computer Science</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <span className={styles.trustName}>Oxford</span>
                <span className={styles.trustRole}>AI Research</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <span className={styles.trustName}>Siemens</span>
                <span className={styles.trustRole}>Systems Engineering</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <span className={styles.trustName}>Devanthro</span>
                <span className={styles.trustRole}>Humanoid Robotics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Services</div>
            <h2 className="section-title">What I build.</h2>
            <p className="section-subtitle">
              End-to-end engineering: from understanding your problem to deploying a working
              solution. No handoffs, no gaps.
            </p>
          </div>

          <div className={`${styles.servicesGrid} reveal reveal-delay-2`}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🧠</div>
              <h3>Custom RAG &amp; Knowledge Systems</h3>
              <p>
                I build AI-powered retrieval systems that make your organization&apos;s knowledge
                instantly accessible. From research databases to product catalogs to medical
                guidelines — accurate, contextual, and production-ready.
              </p>
              <div className={styles.serviceTech}>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">LangChain</span>
                <span className="tech-tag">Vector DBs</span>
                <span className="tech-tag">LLM APIs</span>
                <span className="tech-tag">Evaluation Pipelines</span>
              </div>
              <Link href="/services#rag-systems" className={styles.serviceLink}>
                Discuss your knowledge challenge →
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>�</div>
              <h3>AI Document Intelligence</h3>
              <p>
                End-to-end systems that extract, classify, and route documents using LLM-based
                analysis. Invoices, contracts, reports, research papers — integrated into your
                existing workflows and tools.
              </p>
              <div className={styles.serviceTech}>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Claude/OpenAI APIs</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">OCR</span>
                <span className="tech-tag">NLP</span>
              </div>
              <Link href="/services#document-intelligence" className={styles.serviceLink}>
                Automate your documents →
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>�</div>
              <h3>AI Architecture &amp; Consulting</h3>
              <p>
                Architecture reviews, RAG evaluation strategy, build-vs-buy analysis, and compliance
                planning. I help teams make the right technical decisions before writing a single
                line of code.
              </p>
              <div className={styles.serviceTech}>
                <span className="tech-tag">Architecture Design</span>
                <span className="tech-tag">RAG Evaluation</span>
                <span className="tech-tag">Compliance Strategy</span>
                <span className="tech-tag">Tech Selection</span>
              </div>
              <Link href="/services#consulting" className={styles.serviceLink}>
                Book a consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════ PROJECTS ═══════════ */}
      <section id="projects">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Projects</div>
            <h2 className="section-title">Selected work.</h2>
            <p className="section-subtitle">
              Real AI knowledge systems I&apos;ve designed and built. Each project ships — no slide decks.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            <Link href="/projects/research-knowledge-assistant" className={`${styles.projectCard} reveal reveal-delay-1`}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePattern} />
                <div className={styles.projectImageIcon}>🔬</div>
                <span className={styles.projectStatus}>● Case Study</span>
              </div>
              <div className={styles.projectBody}>
                <h3>AI Knowledge Assistant for Academic Research</h3>
                <p className={styles.projectDesc}>
                  Built a domain-specific RAG system for a research institute, enabling researchers
                  to query thousands of papers and internal documents with accurate, citation-backed
                  answers.
                </p>
                <div className={styles.projectResult}>↓ Hours of literature search reduced to seconds</div>
                <div className={styles.projectTags}>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">LangChain</span>
                  <span className="tech-tag">Vector DB</span>
                  <span className="tech-tag">Claude API</span>
                  <span className="tech-tag">FastAPI</span>
                </div>
              </div>
            </Link>

            <Link href="/projects/ai-document-processing" className={`${styles.projectCard} reveal reveal-delay-2`}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePattern} />
                <div className={styles.projectImageIcon}>📊</div>
                <span className={styles.projectStatus}>● Case Study</span>
              </div>
              <div className={styles.projectBody}>
                <h3>AI-Powered Document Processing Pipeline</h3>
                <p className={styles.projectDesc}>
                  Built an end-to-end automation system that extracts, classifies, and routes
                  incoming documents using LLM-based analysis. Integrates with existing ERP via REST
                  API.
                </p>
                <div className={styles.projectResult}>↓ 85% reduction in manual data entry</div>
                <div className={styles.projectTags}>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">LangChain</span>
                  <span className="tech-tag">Claude API</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">n8n</span>
                </div>
              </div>
            </Link>

            <Link href="/projects/medical-copilot" className={`${styles.projectCard} reveal reveal-delay-3`}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePattern} />
                <div className={styles.projectImageIcon}>⚕️</div>
                <span className={styles.projectStatus}>● In Development</span>
              </div>
              <div className={styles.projectBody}>
                <h3>Medical Practice AI Copilot</h3>
                <p className={styles.projectDesc}>
                  Designing a fully DSGVO-compliant AI assistant for German medical practices.
                  Retrieves patient-relevant guidelines, drug interactions, and clinical protocols
                  from verified medical knowledge bases.
                </p>
                <div className={styles.projectResult}>Currently in development — pilot phase 2025</div>
                <div className={styles.projectTags}>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">RAG</span>
                  <span className="tech-tag">DSGVO Compliance</span>
                  <span className="tech-tag">Medical NLP</span>
                  <span className="tech-tag">Guardrails</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════ ABOUT ═══════════ */}
      <section id="about">
        <div className="container">
          <div className="reveal">
            <div className="section-label">About</div>
            <h2 className="section-title">The engineer behind it.</h2>
          </div>

          <div className={`${styles.aboutGrid} reveal reveal-delay-1`}>
            <div className={styles.aboutPhoto}>
              <Image
                src="/marcel.jpg"
                alt="Marcel Kück, AI Engineer & Founder of MDK Engineering"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: 'cover' }}
                priority={false}
              />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerTl}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerTr}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerBl}`} />
              <div className={`${styles.aboutPhotoCorner} ${styles.cornerBr}`} />
            </div>

            <div className={styles.aboutText}>
              <blockquote>
                I&apos;ve built AI knowledge systems for research institutions, e-commerce platforms,
                and healthcare providers. Each domain has different accuracy requirements, compliance
                constraints, and user expectations — and I&apos;ve learned what actually works in
                production, not just in demos.
              </blockquote>
              <blockquote>
                My background spans computer science (TUM), AI research (Oxford), industrial systems
                (Siemens), and robotics (Devanthro). That breadth means I understand not just the ML,
                but the infrastructure, the integration, and the real-world constraints that determine
                whether a system actually ships.
              </blockquote>

              <div className={styles.aboutFacts}>
                <div className={styles.aboutFact}>
                  <div className={styles.factLabel}>Education</div>
                  <div className={styles.factValue}>CS at TU Munich · AI Research at Oxford</div>
                </div>
                <div className={styles.aboutFact}>
                  <div className={styles.factLabel}>Industry</div>
                  <div className={styles.factValue}>Siemens · Devanthro · 2 Startups</div>
                </div>
                <div className={styles.aboutFact}>
                  <div className={styles.factLabel}>Focus</div>
                  <div className={styles.factValue}>RAG Systems · Document AI · Compliance</div>
                </div>
                <div className={styles.aboutFact}>
                  <div className={styles.factLabel}>Location</div>
                  <div className={styles.factValue}>Munich · Working Internationally</div>
                </div>
              </div>

              <div className={styles.aboutValues}>
                <div className={styles.aboutValue}>
                  &ldquo;Build the simplest thing that works, then make it better.&rdquo;
                </div>
                <div className={styles.aboutValue}>
                  &ldquo;Technology should solve real problems, not create new ones.&rdquo;
                </div>
                <div className={styles.aboutValue}>
                  &ldquo;I ship fast, communicate clearly, and own the outcome.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════ BLOG ═══════════ */}
      <section id="blog">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Insights</div>
            <h2 className="section-title">Thinking out loud.</h2>
            <p className="section-subtitle">
              Technical deep dives, industry perspectives, and behind-the-scenes from the workshop.
            </p>
          </div>

          <div className={styles.blogGrid}>
            <Link
              href="/blog/german-mittelstand-ai-adoption"
              className={`${styles.blogCard} reveal reveal-delay-1`}
            >
              <div className={styles.blogMeta}>
                <span className={styles.blogCategory}>Industry</span>
                <span className={styles.blogDate}>Feb 2026</span>
              </div>
              <h3>
                Why 94% of German Mittelstand Companies Haven&apos;t Adopted AI and What to Do
                About It
              </h3>
              <p>
                The German manufacturing sector has a 137,000 IT specialist deficit. Here&apos;s how
                smaller companies can still leverage AI without building a data science team.
              </p>
              <div className={styles.blogReadTime}>8 min read</div>
            </Link>

            <Link
              href="/blog/ai-document-pipeline-tutorial"
              className={`${styles.blogCard} reveal reveal-delay-2`}
            >
              <div className={styles.blogMeta}>
                <span className={styles.blogCategory}>Tutorial</span>
                <span className={styles.blogDate}>Jan 2026</span>
              </div>
              <h3>Building an AI-Powered Document Pipeline: From OCR to ERP Integration</h3>
              <p>
                A step-by-step walkthrough of building a production-grade document automation system
                with LangChain, Claude, and FastAPI. Real code, real lessons.
              </p>
              <div className={styles.blogReadTime}>12 min read</div>
            </Link>

            <Link
              href="/blog/iot-prototype-3-weeks"
              className={`${styles.blogCard} reveal reveal-delay-3`}
            >
              <div className={styles.blogMeta}>
                <span className={styles.blogCategory}>Behind the Build</span>
                <span className={styles.blogDate}>Jan 2026</span>
              </div>
              <h3>From Sensor to Dashboard in 3 Weeks: Building an IoT Monitoring Prototype</h3>
              <p>
                What went right, what broke, and what I&apos;d do differently when rapid-prototyping
                a LoRaWAN sensor network with ML-based anomaly detection.
              </p>
              <div className={styles.blogReadTime}>10 min read</div>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════ CONTACT ═══════════ */}
      <section className={styles.contactSection} id="contact">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Let&apos;s build something.</h2>
          </div>

          <div className={styles.contactGrid}>
            <div className={`${styles.contactInfo} reveal reveal-delay-1`}>
              <h3>Have a knowledge challenge or an AI system that needs building?</h3>
              <p>
                Every engagement starts with a free 30-minute discovery call. Tell me about your
                challenge, and I&apos;ll tell you honestly whether I can help and what it would take.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailIcon}>✉</div>
                  <div className={styles.contactDetailText}>
                    <a href="mailto:hello@mdkengineering.com">hello@mdkengineering.com</a>
                  </div>
                </div>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailIcon}>in</div>
                  <div className={styles.contactDetailText}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailIcon}>📍</div>
                  <div className={styles.contactDetailText}>
                    Based in Munich, Germany.
                    <br />
                    Working with clients worldwide.
                  </div>
                </div>
              </div>

              <div className={styles.contactResponse}>
                Typically responds within 24 hours
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
