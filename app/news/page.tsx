import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { news } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Янгиликлар" };

export default function NewsPage() {
  const [leadStory, ...rest] = news;

  return (
    <>
      <PageHero
        eyebrow="Театр ҳаёти"
        title="Янгиликлар"
        lead="Афишалар, табриклар ва театрдаги муҳим воқеалар."
      />

      <section className={`paper ${styles.section}`}>
        <div className="container">
          <article className={styles.lead}>
            <Image src={leadStory.image} alt={leadStory.imageAlt} sizes="(max-width: 900px) 100vw, 640px" preload />
            <div className={styles.leadText}>
              <p className="date">{leadStory.date}</p>
              <h2>{leadStory.title}</h2>
              <p>{leadStory.summary}</p>
              <Link href={`/news/${leadStory.slug}`} className={`link-more ${styles.leadMore}`}>
                Батафсил
              </Link>
            </div>
          </article>

          <div className={styles.list}>
            {rest.map((story) => (
              <article key={story.slug} className={styles.item}>
                <Image src={story.image} alt="" sizes="160px" />
                <div className={styles.itemText}>
                  <p className="date">{story.date}</p>
                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>
                  <Link href={`/news/${story.slug}`} className={`link-more ${styles.itemMore}`}>
                    Батафсил
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
