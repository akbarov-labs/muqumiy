import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { albums, samplePhotos } from "@/lib/data";
import styles from "./page.module.css";

export function generateStaticParams() {
  return albums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({ params }: PageProps<"/album/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);
  return album ? { title: album.title } : {};
}

export default function AlbumDetailPage({ params }: PageProps<"/album/[slug]">) {
  return (
    <Suspense fallback={<div className="page-loading" />}>
      <AlbumDetail params={params} />
    </Suspense>
  );
}

async function AlbumDetail({ params }: Pick<PageProps<"/album/[slug]">, "params">) {
  const { slug } = await params;
  const index = albums.findIndex((a) => a.slug === slug);
  if (index === -1) notFound();

  const album = albums[index];
  const prev = albums[index - 1];
  const next = albums[index + 1];

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <Link href="/album" className={styles.back}>
            ← Барча альбомлар
          </Link>
          <h1>{album.title}</h1>
          <p className={styles.meta}>
            {album.photoCount} фотосурат · {album.date}
          </p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.gallery}>
            {samplePhotos.map((photo, i) => (
              <a key={i} href={photo.image.src} className={styles.photo}>
                <Image src={photo.image} alt={photo.alt} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 400px" />
              </a>
            ))}
          </div>
          <p className={`sample-note ${styles.note}`}>Суратлар ҳозирча намуна сифатида қўйилган.</p>
        </div>
      </section>

      {(prev || next) && (
        <nav aria-label="Альбомлар" className={styles.pagerSection}>
          <div className={`container ${styles.pagerInner}`}>
            {prev ? (
              <Link href={`/album/${prev.slug}`} className={styles.pagerLink}>
                <span className={styles.pagerLabel}>← Олдинги альбом</span>
                <span className={styles.pagerTitle}>{prev.title}</span>
              </Link>
            ) : (
              <span className={styles.pagerLink} />
            )}
            {next && (
              <Link href={`/album/${next.slug}`} className={`${styles.pagerLink} ${styles.next}`}>
                <span className={styles.pagerLabel}>Кейинги альбом →</span>
                <span className={styles.pagerTitle}>{next.title}</span>
              </Link>
            )}
          </div>
        </nav>
      )}
    </>
  );
}
