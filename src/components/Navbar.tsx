'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const navLinks = [
    { href: isHome ? '#services' : '/services', label: 'Services' },
    { href: isHome ? '#projects' : '/projects', label: 'Projects' },
    { href: isHome ? '#about' : '/about', label: 'About' },
    { href: '/blog', label: 'Insights' },
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.navLogo}>
          <span className={styles.dot} />
          MDK Engineering
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <Link
              href={isHome ? '#contact' : '/contact'}
              className={styles.navCta}
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>

        <button
          className={styles.navToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} onClick={closeMobile}>
            {link.label}
          </Link>
        ))}
        <Link
          href={isHome ? '#contact' : '/contact'}
          onClick={closeMobile}
          className={styles.navCta}
        >
          Let&apos;s Talk
        </Link>
      </div>

      {mobileOpen && (
        <div className={styles.overlay} onClick={closeMobile} />
      )}
    </nav>
  );
}
