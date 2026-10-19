import Image from "next/image";
import Link from "next/link";
import { PerformanceList } from "@/components/PerformanceList";
import { StarPattern } from "@/components/StarPattern";
import { featuredShow, history, historyUrl, news, repertoire, teamGroups, upcomingPerformances } from "@/lib/data";
import { images } from "@/lib/images";
import styles from "./page.module.css";

export default function Home() {
  const [leadStory, ...sideStories] = news;

  return (
    <>
      <section className={styles.hero}>
        <StarPattern size={88} opacity={0.1} inner="star" />
        <div className={styles.heroPhoto}>
          <Image
            src={featuredShow.image}
            alt={`«${featuredShow.title}» спектаклидан лавҳа: уч актёр саҳнада`}
            fill
            sizes="76vw"
            preload
          />
        </div>
        <div aria-hidden="true" className={styles.heroShade} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <p className={styles.heroEyebrow}>{featuredShow.genre}</p>
            <h1 className={styles.heroTitle}>{featuredShow.title}</h1>
            <p className={styles.heroLead}>{featuredShow.credits} Муқимий номидаги театр саҳнасида.</p>
            <div className={styles.heroActions}>
              <Link href="/repertoire" className="btn btn-gold">
                Репертуарни кўриш
              </Link>
              <Link href="/contact" className="btn btn-outline-gold">
                Манзил ва алоқа
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.promo}>
        <div className="container">
          <Link href="/repertoire" className={styles.promoLink}>
            <Image src={images.bizSoginganQoshiqlar} alt="Афиша: Биз соғинган қўшиқлар" sizes="(max-width: 1064px) 100vw, 1000px" />
          </Link>
        </div>
      </section>

      <section className={styles.repertoire}>
        <div className="container">
          <div className="section-head">
            <h2 className={`section-title ${styles.sectionTitle}`}>
              Репертуар
              <span className={styles.sectionSub}>{repertoire.label}</span>
            </h2>
            <Link href="/repertoire" className="btn btn-night">
              Тўлиқ репертуар
            </Link>
          </div>
          <PerformanceList performances={upcomingPerformances} month={repertoire.month} variant="gold" />
        </div>
      </section>

      <section className={`paper ${styles.news}`}>
        <div className="container">
          <div className={`section-head ${styles.sectionHead}`}>
            <h2 className={`section-title ${styles.sectionTitle}`}>Янгиликлар</h2>
            <Link href="/news" className={styles.allNews}>
              Барча янгиликлар
            </Link>
          </div>
          <div className={styles.newsGrid}>
            <article className={styles.lead}>
              <Image src={leadStory.image} alt={leadStory.imageAlt} sizes="(max-width: 900px) 100vw, 640px" />
              <p className={styles.date}>{leadStory.date}</p>
              <h3>{leadStory.title}</h3>
              <p>{leadStory.summary}</p>
              <Link href={`/news/${leadStory.slug}`} className={`link-more ${styles.more}`}>
                Батафсил
              </Link>
            </article>
            <div className={styles.side}>
              {sideStories.map((story) => (
                <article key={story.slug} className={styles.sideItem}>
                  <Image src={story.image} alt="" sizes="104px" />
                  <p className={styles.date}>{story.date}</p>
                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>
                  <Link href={`/news/${story.slug}`} className="link-more">
                    Батафсил
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.history}>
        <StarPattern size={88} opacity={0.07} inner="none" />
        <div className={styles.historyPhoto}>
          <Image src={images.zal} alt="Муқимий театрининг ўймакор шифтли зали" fill sizes="100vw" />
        </div>
        <div className={`container ${styles.historyInner}`}>
          <h2 className={`section-title ${styles.sectionTitle}`}>Театр тарихи</h2>
          <div className={styles.timeline}>
            {history.map((item) => (
              <div key={item.year} className={styles.milestone}>
                <span className={styles.year}>{item.year}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <a href={historyUrl} className={`link-underline ${styles.historyLink}`}>
            Театр тарихини ўқиш
          </a>
        </div>
      </section>

      <section className={styles.team}>
        <div className={`container ${styles.teamInner}`}>
          <h2 className={`section-title ${styles.sectionTitle}`}>Ижодий жамоа</h2>
          <div className={styles.roll}>
            {teamGroups.map((group) => (
              <Link key={group.title} href={group.href}>
                <span>{group.title}</span>
                <span aria-hidden="true" className={styles.arrow}>
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.album}>
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Фотоальбом</h2>
            <Link href="/album" className="link-underline">
              Барча альбомлар
            </Link>
          </div>
          <div className={styles.collage}>
            <Link href="/album" className={styles.collageMain}>
              <Image src={images.sahna} alt="Саҳнадаги спектакль, томошабинлар зали" sizes="(max-width: 900px) 100vw, 780px" />
              <span className={styles.caption}>Саҳна</span>
            </Link>
            <div className={styles.collageSide}>
              <Link href="/album">
                <Image src={images.zal} alt="Театр зали, ўймакор шифт" sizes="(max-width: 900px) 100vw, 400px" />
                <span className={styles.caption}>Зал</span>
              </Link>
              <Link href="/album">
                <Image src={images.tomoshabinlarZali} alt="Томошабинлар зали, қизил ўриндиқлар" sizes="(max-width: 900px) 100vw, 400px" />
                <span className={styles.caption}>Томошабинлар зали</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
