import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Kontakt — MDK Engineering',
  description:
    'Kostenloses Erstgespräch zur Praxisautomatisierung. ePA-Workflows, Geräteanbindung, Smart-Praxis-Hardware — sprechen wir über Ihre Praxis.',
  openGraph: {
    title: 'Kontakt — MDK Engineering',
    description:
      'Kostenloses Erstgespräch: Wo kann Automatisierung in Ihrer Praxis den größten Unterschied machen?',
    url: 'https://mdkengineering.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <span className="section-label">{'// Kontakt'}</span>
          <h1 className="section-title">Sprechen wir über Ihre Praxis</h1>
          <p style={{ maxWidth: '640px', opacity: 0.8, fontSize: '1.125rem', lineHeight: 1.7 }}>
            Kostenloses Erstgespräch — ich schaue mir an, wo Automatisierung in Ihrem
            Praxisalltag den größten Unterschied macht. Gerne auch vor Ort.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <div className={styles.infoBlock}>
                <h3>E-Mail</h3>
                <p>
                  <a href="mailto:marcel@mdkengineering.com">marcel@mdkengineering.com</a>
                </p>
              </div>

              <div className={styles.infoBlock}>
                <h3>Standort</h3>
                <p>Sitz in München — Termine vor Ort in ganz Süddeutschland</p>
              </div>

              <div className={styles.infoBlock}>
                <h3>Antwortzeit</h3>
                <p>Innerhalb von 24 Stunden</p>
              </div>

              <div className={styles.infoBlock}>
                <h3>So läuft es ab</h3>
                <ol className={styles.expectList}>
                  <li>Kostenloses Erstgespräch (30 Min.) — ich verstehe Ihren Praxisalltag und Ihre größten Zeitfresser</li>
                  <li>Optional: Praxisbesuch vor Ort — ich schaue mir die Abläufe und Systeme direkt an</li>
                  <li>Konkreter Vorschlag mit klarem Umfang, Zeitrahmen und Preis — keine versteckten Kosten</li>
                </ol>
              </div>

              <div className={styles.infoBlock}>
                <h3>Profile</h3>
                <div className={styles.socialLinks}>
                  <a
                    href="https://github.com/mdk-engineering"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://linkedin.com/in/marcelkueck"
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
