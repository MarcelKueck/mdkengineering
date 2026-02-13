import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog – MDK Engineering',
  description:
    'Insights on AI automation, rapid prototyping, hardware-software integration, and engineering strategy for German Mittelstand companies.',
  openGraph: {
    title: 'Blog – MDK Engineering',
    description:
      'Insights on AI automation, rapid prototyping, hardware-software integration, and engineering strategy.',
    url: 'https://mdkengineering.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <span className="section-label">{'// Blog'}</span>
          <h1 className="section-title">Insights & Tutorials</h1>
          <p style={{ maxWidth: '640px', opacity: 0.8, fontSize: '1.125rem', lineHeight: 1.7 }}>
            Practical perspectives on AI, engineering, and building technology
            that works — from the workshop floor to production.
          </p>
        </div>
      </section>

      <section className={styles.blogList}>
        <div className="container">
          {posts.length === 0 ? (
            <p style={{ opacity: 0.6 }}>No posts yet. Check back soon.</p>
          ) : (
            <div className={styles.grid}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardMeta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.dot}>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardDesc}>{post.description}</p>
                  <div className={styles.cardFooter}>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="btn-arrow" style={{ fontSize: '0.875rem' }}>
                      Read article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
