import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { albums } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Фотоальбом" };

export default function AlbumPage() {
  return (
    <>
      <PageHero
        eyebrow="Театр архиви"
        title="Фотоальбом"
        lead="Спектакллар, репетициялар ва театр ҳаётидан суратлар."
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {albums.map((album, i) => (
              <Link key={album.slug} href={`/album/${album.slug}`} className={styles.album}>
                <Image
                  src={album.cover}
                  alt={`Альбом муқоваси: ${album.title}`}
                  sizes={i === 0 ? "(max-width: 900px) 100vw, 800px" : "(max-width: 900px) 100vw, 400px"}
                  preload={i === 0}
                />
                <span className={styles.title}>{album.title}</span>
                <span className={styles.meta}>
                  {album.photoCount} фотосурат · {album.date}
                </span>
              </Link>
            ))}
          </div>
          <p className={`sample-note ${styles.note}`}>Муқовалар ҳозирча намуна сифатида қўйилган.</p>
        </div>
      </section>
    </>
  );
}
