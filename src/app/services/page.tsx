import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI & process automation, rapid prototyping, hardware-software integration, and technical consulting. End-to-end engineering from concept to working system.',
};

const services = [
  {
    id: 'ai-automation',
    icon: '⚡',
    title: 'AI & Process Automation',
    what: 'Designing and building AI-powered systems that automate repetitive, complex, or data-heavy workflows. From intelligent document processing to predictive maintenance, these systems work reliably in production, not just in a demo.',
    forWhom:
      'Companies drowning in manual processes, manufacturers wanting smarter production, teams that need AI integrated into existing tools and workflows.',
    process: [
      { step: 'Assess', desc: 'Audit current workflows and identify automation opportunities' },
      { step: 'Design', desc: 'Architecture the solution, select the right AI approach' },
      { step: 'Build', desc: 'Develop, train models, integrate with existing systems' },
      { step: 'Deploy', desc: 'Production deployment with monitoring and testing' },
      { step: 'Support', desc: 'Ongoing optimization and maintenance' },
    ],
    tech: ['Python', 'LangChain', 'OpenAI/Claude APIs', 'n8n', 'Custom ML Pipelines', 'Computer Vision', 'NLP', 'FastAPI'],
    outcome: 'Reduced manual data entry by 85% for a manufacturing client',
  },
  {
    id: 'prototyping',
    icon: '🚀',
    title: 'Rapid Prototyping & MVP Development',
    what: 'Taking an idea from napkin sketch to working prototype in 2–6 weeks. Full-stack capability means the prototype can include hardware (3D-printed enclosures, custom PCBs, sensors) AND software (apps, dashboards, AI models).',
    forWhom:
      'Startups validating ideas, corporate innovation teams, R&D departments that need to prove a concept fast.',
    process: [
      { step: 'Define', desc: 'Clarify scope, success criteria, and constraints' },
      { step: 'Design', desc: 'System architecture and user experience' },
      { step: 'Build', desc: 'Rapid development in focused sprints' },
      { step: 'Test', desc: 'Real-world testing and stakeholder feedback' },
      { step: 'Iterate', desc: 'Refine based on learnings' },
    ],
    tech: ['3D Printing', 'CAD/CAM', 'React/Next.js', 'FastAPI', 'ML Models', 'Arduino/ESP32', 'Custom PCB'],
    outcome: 'Built a working IoT sensor prototype with AI-based anomaly detection in 3 weeks',
  },
  {
    id: 'hw-sw',
    icon: '🔧',
    title: 'Hardware-Software Integration',
    what: 'Connecting the physical world to intelligent software. Embedded systems, IoT, robotics, smart devices. From PCB design and firmware to edge AI and cloud connectivity.',
    forWhom:
      'Companies building physical products with smart features, robotics teams, IoT ventures that need both hardware and software expertise in one place.',
    process: [
      { step: 'Spec', desc: 'Define hardware requirements and constraints' },
      { step: 'Design', desc: 'Schematic and PCB design, 3D enclosure modeling' },
      { step: 'Prototype', desc: 'Fabrication, assembly, firmware development' },
      { step: 'Integrate', desc: 'Connect to cloud, dashboards, AI pipelines' },
      { step: 'Validate', desc: 'Testing, certification prep, production readiness' },
    ],
    tech: ['PCB Design (KiCad)', 'Firmware (C/C++)', '3D Printing', 'Edge AI', 'MQTT/LoRaWAN', 'Sensor Integration', 'Cloud IoT'],
    outcome: 'Designed and built a custom sensor array with on-device ML for real-time quality inspection',
  },
  {
    id: 'consulting',
    icon: '📐',
    title: 'Technical Consulting & Architecture',
    what: 'Helping teams make the right technical decisions before they write a single line of code. Architecture reviews, AI adoption strategy, technology selection, and hands-on team mentoring.',
    forWhom:
      'CTOs evaluating AI adoption, teams stuck on architecture decisions, companies choosing between build vs. buy, startups that need senior technical guidance.',
    process: [
      { step: 'Discovery', desc: 'Understand your current state and goals' },
      { step: 'Analysis', desc: 'Technical assessment and opportunity mapping' },
      { step: 'Recommend', desc: 'Clear recommendations with trade-off analysis' },
      { step: 'Guide', desc: 'Hands-on support during implementation' },
    ],
    tech: ['Architecture Design', 'AI Strategy', 'Team Mentoring', 'Tech Selection', 'Build vs. Buy Analysis'],
    outcome: 'Available as one-off workshops, weekly advisory, or embedded consulting',
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="hero-tag">What I Build</div>
          <h1>
            End-to-end <span className="accent">engineering</span> services.
          </h1>
          <p>
            From understanding your problem to deploying a working solution. No handoffs, no gaps,
            no slide decks, just working technology.
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
              <h3>Automation Sprints</h3>
              <div className={styles.pricingValue}>from €5,000</div>
              <p>Focused engagements to automate specific workflows or build targeted solutions.</p>
            </div>
            <div className={styles.pricingCard}>
              <h3>Consulting</h3>
              <div className={styles.pricingValue}>from €150/hr</div>
              <p>Architecture reviews, AI strategy, and hands-on technical guidance. Also available as weekly retainer.</p>
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
