import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { news } from "@/lib/data";
import styles from "./page.module.css";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  return item ? { title: item.title, description: item.summary } : {};
}

export default function NewsArticlePage({ params }: PageProps<"/news/[slug]">) {
  return (
    <Suspense fallback={<div className="page-loading" />}>
      <NewsArticle params={params} />
    </Suspense>
  );
}

async function NewsArticle({ params }: Pick<PageProps<"/news/[slug]">, "params">) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  const others = news.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <section className={`paper ${styles.section}`}>
      <div className="container">
        <nav aria-label="Йўл">
          <Link href="/news" className={styles.back}>
            ← Янгиликлар
          </Link>
        </nav>

        <div className={styles.layout}>
          <article className={styles.article}>
            <p className="date">{item.date}</p>
            <h1>{item.title}</h1>
            <Image
              src={item.image}
              alt={item.imageAlt}
              className={styles.cover}
              sizes="(max-width: 900px) 100vw, 760px"
              preload
            />
            <div className={styles.body}>
              {item.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.actions}>
              <Link href="/news" className={`btn ${styles.primary}`}>
                Барча янгиликлар
              </Link>
              <Link href="/repertoire" className={`btn ${styles.secondary}`}>
                Репертуарни кўриш
              </Link>
            </div>
          </article>

          <aside className={styles.aside}>
            <h2>Бошқа янгиликлар</h2>
            {others.map((other) => (
              <Link key={other.slug} href={`/news/${other.slug}`} className={styles.related}>
                <Image src={other.image} alt="" sizes="88px" />
                <span>
                  <span className={styles.relatedDate}>{other.date}</span>
                  <span className={styles.relatedTitle}>{other.title}</span>
                </span>
              </Link>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
