import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './post.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} – MDK Engineering`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://mdkengineering.com/blog/${slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main>
      <article className={styles.article}>
        <div className="container">
          <header className={styles.header}>
            <Link href="/blog" className={styles.backLink}>
              ← Back to Blog
            </Link>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.dot}>·</span>
              <span>{post.readingTime}</span>
              <span className={styles.dot}>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.description}>{post.description}</p>
          </header>

          <div className="prose">
            <MDXRemote source={post.content} />
          </div>

          <footer className={styles.footer}>
            <Link href="/blog" className="btn btn-secondary">
              ← More Articles
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Discuss Your Project
            </Link>
          </footer>
        </div>
      </article>
    </main>
  );
}
