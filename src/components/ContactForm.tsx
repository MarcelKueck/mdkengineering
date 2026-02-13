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
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
        {status === 'sending'
          ? 'Sending...'
          : status === 'sent'
          ? 'Message Sent ✓'
          : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className={styles.errorMsg}>
          Something went wrong. Please email{' '}
          <a href="mailto:hello@mdkengineering.com">hello@mdkengineering.com</a> directly.
        </p>
      )}
    </form>
  );
}
