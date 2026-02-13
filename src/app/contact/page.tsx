import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact – MDK Engineering',
  description:
    'Get in touch with MDK Engineering. Free discovery call to discuss your AI automation, prototyping, or engineering project.',
  openGraph: {
    title: 'Contact – MDK Engineering',
    description:
      'Free discovery call to discuss your AI automation, prototyping, or engineering project.',
    url: 'https://mdkengineering.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <span className="section-label">{'// Contact'}</span>
          <h1 className="section-title">Let&apos;s Build Something</h1>
          <p style={{ maxWidth: '640px', opacity: 0.8, fontSize: '1.125rem', lineHeight: 1.7 }}>
            Have an engineering challenge? Let&apos;s talk. I offer a free discovery
            call to understand your problem before proposing a solution.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <div className={styles.infoBlock}>
                <h3>Direct Contact</h3>
                <p>
                  <a href="mailto:marcel@mdkengineering.com">marcel@mdkengineering.com</a>
                </p>
              </div>

              <div className={styles.infoBlock}>
                <h3>Based in</h3>
                <p>Munich, Germany</p>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                  Available for remote work worldwide
                </p>
              </div>

              <div className={styles.infoBlock}>
                <h3>Response Time</h3>
                <p>Usually within 24 hours</p>
              </div>

              <div className={styles.infoBlock}>
                <h3>What to Expect</h3>
                <ol className={styles.expectList}>
                  <li>Free 30-minute discovery call</li>
                  <li>Problem assessment & feasibility check</li>
                  <li>Proposal with clear scope, timeline & pricing</li>
                  <li>No obligations — only proceed if it makes sense</li>
                </ol>
              </div>

              <div className={styles.infoBlock}>
                <h3>Profiles</h3>
                <div className={styles.socialLinks}>
                  <a
                    href="https://github.com/mdk-engineering"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://linkedin.com/in/marcelkoch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.formWrapper}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
