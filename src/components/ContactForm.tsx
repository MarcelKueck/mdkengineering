'use client';

import { useState, FormEvent } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      topic: formData.get('topic'),
      project: formData.get('project'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className={styles.contactForm}>
        <div className={styles.successState}>
          <div className={styles.successIcon}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="var(--accent)" strokeWidth="2" className={styles.successCircle} />
              <path d="M14 24l7 7 13-13" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.successCheck} />
            </svg>
          </div>
          <h3 className={styles.successTitle}>Nachricht gesendet!</h3>
          <p className={styles.successText}>
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
          <div className={styles.successMeta}>
            <div className={styles.successMetaItem}>
              <span className={styles.successMetaLabel}>Antwortzeit</span>
              <span>&lt; 24 Stunden</span>
            </div>
            <div className={styles.successMetaItem}>
              <span className={styles.successMetaLabel}>Nächster Schritt</span>
              <span>Kostenloses Erstgespräch</span>
            </div>
          </div>
          <button
            type="button"
            className={`btn btn-secondary ${styles.successBtn}`}
            onClick={() => setStatus('idle')}
          >
            Weitere Nachricht senden
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" placeholder="Ihr Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-Mail *</label>
          <input type="email" id="email" name="email" placeholder="ihre@email.de" required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="company">
          Praxis / Organisation <span style={{ color: 'var(--text-muted)' }}>(optional)</span>
        </label>
        <input type="text" id="company" name="company" placeholder="Praxisname (optional)" />
      </div>

      <div className="form-group">
        <label htmlFor="topic">Thema</label>
        <select id="topic" name="topic" defaultValue="">
          <option value="" disabled>
            Bitte wählen
          </option>
          <option value="epa-automatisierung">ePA-Automatisierung</option>
          <option value="dokumentenverarbeitung">Dokumentenverarbeitung</option>
          <option value="geraeteanbindung">Geräteanbindung</option>
          <option value="laufende-betreuung">Laufende Betreuung</option>
          <option value="allgemeine-anfrage">Allgemeine Anfrage</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="project">Nachricht *</label>
        <textarea
          id="project"
          name="project"
          placeholder="Beschreiben Sie kurz Ihre Situation — z.B. welches PVS Sie nutzen, wo die größten Zeitfresser liegen, ob die ePA bereits ein Thema ist..."
          required
        />
      </div>

      <button
        type="submit"
        className={`btn btn-primary btn-arrow ${styles.formSubmit}`}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>

      {status === 'error' && (
        <p className={styles.errorMsg}>
          Etwas ist schiefgelaufen. Bitte schreiben Sie direkt an{' '}
          <a href="mailto:contact@mdkengineering.com">contact@mdkengineering.com</a>.
        </p>
      )}
    </form>
  );
}
