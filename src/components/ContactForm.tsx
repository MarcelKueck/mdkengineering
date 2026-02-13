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
      project: formData.get('project'),
      budget: formData.get('budget'),
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
          <h3 className={styles.successTitle}>Message Sent</h3>
          <p className={styles.successText}>
            Thanks for reaching out. I&apos;ll review your project details and
            get back to you within 24 hours.
          </p>
          <div className={styles.successMeta}>
            <div className={styles.successMetaItem}>
              <span className={styles.successMetaLabel}>Response time</span>
              <span>&lt; 24 hours</span>
            </div>
            <div className={styles.successMetaItem}>
              <span className={styles.successMetaLabel}>Next step</span>
              <span>Free discovery call</span>
            </div>
          </div>
          <button
            type="button"
            className={`btn btn-secondary ${styles.successBtn}`}
            onClick={() => setStatus('idle')}
          >
            Send another message
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
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" placeholder="you@company.com" required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="company">
          Company <span style={{ color: 'var(--text-muted)' }}>(optional)</span>
        </label>
        <input type="text" id="company" name="company" placeholder="Company name" />
      </div>

      <div className="form-group">
        <label htmlFor="project">Project Description *</label>
        <textarea
          id="project"
          name="project"
          placeholder="Tell me about your project, challenge, or idea. The more context, the better."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="budget">Budget Range</label>
        <select id="budget" name="budget" defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          <option value="<5k">Under €5,000</option>
          <option value="5-15k">€5,000 – €15,000</option>
          <option value="15-50k">€15,000 – €50,000</option>
          <option value="50k+">€50,000+</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <button
        type="submit"
        className={`btn btn-primary btn-arrow ${styles.formSubmit}`}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className={styles.errorMsg}>
          Something went wrong. Please email{' '}
          <a href="mailto:marcel@mdkengineering.com">marcel@mdkengineering.com</a> directly.
        </p>
      )}
    </form>
  );
}
