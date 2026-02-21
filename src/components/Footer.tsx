import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <span className={styles.footerLogo}>MDK Engineering</span>
            <span className={styles.footerTagline}>Praxisautomatisierung aus einer Hand.</span>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/services">Leistungen</Link>
            <Link href="/about">Über uns</Link>
            <Link href="/contact">Kontakt</Link>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} MDK Engineering GbR. Sitz in München.</span>
          <div className={styles.footerLegal}>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
