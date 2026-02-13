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
  'predictive-quality-inspection': {
    slug: 'predictive-quality-inspection',
    icon: '🏭',
    title: 'Predictive Quality Inspection System',
    problem:
      'A manufacturing client was relying on manual spot-checks for quality inspection on their production line. This was slow, inconsistent, and allowed too many defective products to reach customers. They needed an automated system that could inspect every single unit in real-time without slowing down the line.',
    approach:
      'I designed and built an end-to-end computer vision system with custom hardware and on-device ML inference. The solution includes a multi-camera array positioned at critical points on the production line, running TensorFlow Lite models on Raspberry Pi compute units. Each unit communicates via MQTT to a central dashboard that provides real-time defect analytics and automated alerting.',
    result:
      'The system achieved a 73% reduction in defect escape rate within the first month of deployment. Inspection latency is under 50ms per unit, meaning zero impact on production line speed. The system handles over 10,000 inspections per shift with consistent accuracy.',
    resultMetric: '↓ 73% reduction in defect escape rate',
    techStack: ['Python', 'TensorFlow Lite', 'OpenCV', 'Raspberry Pi', 'Custom PCB', 'MQTT', 'InfluxDB', 'Grafana'],
    details: [
      'Custom camera mount and lighting rig designed in CAD and 3D-printed',
      'Training pipeline with 15,000+ annotated images of good and defective parts',
      'Edge inference at 20+ FPS with <50ms latency',
      'Custom PCB for power management and camera triggering',
      'MQTT-based data pipeline to InfluxDB + Grafana dashboard',
      'Automated alert system via email and Slack',
    ],
  },
  'ai-document-processing': {
    slug: 'ai-document-processing',
    icon: '📊',
    title: 'AI-Powered Document Processing Pipeline',
    problem:
      'The client received hundreds of documents daily — invoices, contracts, shipping notes, compliance forms — all in different formats. A team of 4 people spent most of their day manually extracting data and routing documents to the right departments. The process was slow, error-prone, and not scalable.',
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
  'iot-environmental-monitoring': {
    slug: 'iot-environmental-monitoring',
    icon: '🌡️',
    title: 'IoT Environmental Monitoring with Anomaly Detection',
    problem:
      'A pharmaceutical logistics company needed continuous cold chain monitoring for temperature-sensitive shipments. Their existing solution was manual temperature loggers checked at delivery — by which point any excursion had already happened. They needed real-time monitoring with predictive alerting.',
    approach:
      'I designed a complete IoT solution from scratch: custom sensor nodes with ESP32 microcontrollers, temperature/humidity sensors, and LoRaWAN connectivity for long-range, low-power communication. The backend includes a real-time data pipeline feeding into InfluxDB, a React dashboard with live monitoring, and an ML-based anomaly detection model that predicts temperature excursions before they happen.',
    result:
      'The full prototype — from concept to working demo with 10 sensor nodes — was completed in 3 weeks. The system is now in pilot deployment with the client, monitoring 50+ shipments. Anomaly detection catches 94% of potential excursions with an average 23-minute advance warning.',
    resultMetric: '3-week prototype cycle, now in pilot',
    techStack: ['ESP32', 'LoRaWAN', '3D Printing', 'React', 'InfluxDB', 'scikit-learn', 'Python', 'Node.js'],
    details: [
      'Custom sensor node with ESP32, BME280 sensor, and LoRa radio',
      '3D-printed IP65-rated enclosure designed for logistics environments',
      'Battery life of 6+ months with adaptive sampling rate',
      'LoRaWAN gateway with 2km+ indoor range',
      'Real-time React dashboard with historical data and trend analysis',
      'Anomaly detection model trained on synthetic and real temperature data',
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
