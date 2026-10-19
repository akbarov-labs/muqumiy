import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { featuredShow, shows } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Спектакллар" };

const pad = (n: number) => String(n).padStart(2, "0");

export default function ShowsPage() {
  const highlighted = shows.slice(0, 4);
  const others = shows.slice(4);

  return (
    <>
      <PageHero
        eyebrow="Театр саҳнасида"
        title="Спектакллар"
        lead="Театр саҳнасида қўйилаётган драма, комедия ва мусиқали асарлар."
      />

      <section className={styles.featuredSection}>
        <div className="container">
          <Link href="/repertoire" className={styles.featured}>
            <div className={styles.featuredPhoto}>
              <Image
                src={featuredShow.image}
                alt={`«${featuredShow.title}» спектаклидан лавҳа`}
                fill
                sizes="(max-width: 900px) 100vw, 600px"
              />
            </div>
            <div className={styles.featuredText}>
              <span className={styles.featuredLabel}>Янги спектакль</span>
              <h2>{featuredShow.title}</h2>
              <p>
                {featuredShow.genre}. {featuredShow.credits}
              </p>
              <span className={styles.featuredCta}>Репертуарни кўриш</span>
            </div>
          </Link>
        </div>
      </section>

      <section className={styles.listSection}>
        <div className="container">
          <div className={styles.cards}>
            {highlighted.map((show, i) => (
              <article key={show.title} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>{pad(i + 1)}</span>
                  <span className={`tag ${styles.cardTag}`}>{show.genre}</span>
                </div>
                <h3>{show.title}</h3>
                <p className={styles.cardAuthor}>{show.author}</p>
                {show.note && <p className={styles.cardNote}>{show.note}</p>}
                <Link href="/repertoire" className={styles.cardLink}>
                  Репертуарда кўриш →
                </Link>
              </article>
            ))}
          </div>

          <h2 className={styles.moreTitle}>Бошқа спектакллар</h2>
          <div className={styles.more}>
            {others.map((show, i) => (
              <Link key={show.title} href="/repertoire" className={styles.moreItem}>
                <span className={styles.moreNumber}>{pad(i + highlighted.length + 1)}</span>
                <span className={styles.moreText}>
                  <span className={styles.moreTitleText}>{show.title}</span>
                  <span className={styles.moreAuthor}>{show.author}</span>
                </span>
                <span className={styles.moreGenre}>{show.genre}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
