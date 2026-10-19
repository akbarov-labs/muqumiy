import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";
import { images } from "@/lib/images";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Алоқа" };

const roads = "M-20 250 C260 230 420 330 640 250 S980 150 1220 190";
const avenue = "M440 -20 C470 120 560 200 600 450";

export default function ContactPage() {
  const { address } = site;

  return (
    <>
      <PageHero eyebrow="Бизни топинг" title="Алоқа" />

      <section className={styles.details}>
        <div className={`container ${styles.detailsInner}`}>
          <div className={styles.info}>
            <div>
              <span className={styles.label}>Манзил</span>
              <span className={styles.address}>{address.full}</span>
              <span className={styles.hint}>
                Мўлжал: {address.landmark}. Метро: «{address.metro}» бекати.
              </span>
            </div>

            <div className={styles.channels}>
              <div>
                <span className={styles.label}>Телефон</span>
                {site.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className={styles.bigLink}>
                    {phone.label}
                  </a>
                ))}
                <span className={styles.fax}>Факс: {site.fax}</span>
              </div>
              <div>
                <span className={styles.label}>Электрон почта</span>
                <a href={`mailto:${site.email}`} className={styles.bigLink}>
                  {site.email}
                </a>
              </div>
            </div>

            <div>
              <span className={styles.label}>Ижтимоий тармоқлар</span>
              <div className={styles.socials}>
                {site.socials.map((social) => (
                  <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.notice}>
              <strong>Дам олиш куни: {site.dayOff}.</strong> Бошқа кунларда спектакллар одатда 18:00 да бошланади.
            </div>
          </div>

          <div className={styles.photo}>
            <Image src={images.bino} alt="Муқимий театри биноси, Чилонзор тумани" sizes="(max-width: 900px) 100vw, 600px" preload />
            <p className={styles.caption}>Театр биноси, Чилонзор тумани.</p>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Харита</h2>
          <div className={styles.map}>
            <svg aria-hidden="true" viewBox="0 0 1200 440" preserveAspectRatio="xMidYMid slice" className={styles.mapArt}>
              <g fill="none" stroke="#1C2A5E" strokeWidth="1">
                <path d="M0 80 H1200 M0 180 H1200 M0 300 H1200 M0 390 H1200" />
                <path d="M120 0 V440 M300 0 V440 M520 0 V440 M760 0 V440 M980 0 V440 M1130 0 V440" />
              </g>
              <g fill="none" stroke="#2B3C7C" strokeWidth="14" strokeLinecap="round">
                <path d={roads} />
                <path d={avenue} />
              </g>
              <g fill="none" stroke="#36489A" strokeWidth="3" strokeDasharray="2 14" strokeLinecap="round">
                <path d={roads} />
                <path d={avenue} />
              </g>
              <ellipse cx="900" cy="330" rx="150" ry="60" fill="#14224F" stroke="#26336B" />
            </svg>

            <div className={styles.mapContent}>
              <div className={styles.mapCard}>
                <span className={styles.label}>Театр манзили</span>
                <span className={styles.mapCardAddress}>{address.street}</span>
                <span className={styles.hint}>
                  Метро: «{address.metro}». Мўлжал: {address.landmark}.
                </span>
                <a href={address.mapUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-gold ${styles.mapButton}`}>
                  Google Maps’да очиш
                </a>
              </div>
              <div className={styles.pin}>
                <svg width="64" height="84" viewBox="0 0 64 84" role="img" aria-label="Театр жойлашган нуқта">
                  <path
                    d="M32 82 C32 82 6 52 6 30 A26 26 0 0 1 58 30 C58 52 32 82 32 82 Z"
                    fill="#E3B04B"
                    stroke="#0A1230"
                    strokeWidth="3"
                  />
                  <path d="M20 38 V26 C20 14 44 14 44 26 V38" fill="none" stroke="#0A1230" strokeWidth="3" />
                </svg>
              </div>
            </div>
          </div>
          <p className={styles.mapNote}>Схематик тасвир. Аниқ йўналиш учун Google Maps’ни очинг.</p>
        </div>
      </section>

      <section className={styles.seatingSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Ўриндиқлар чизмаси</h2>
          <div className={styles.seating}>[Зал схемаси: расмий чизма шу ерда жойлаштирилади]</div>
        </div>
      </section>

      <section aria-label="Театр биноси кечқурун" className={styles.band}>
        <div className={styles.bandPhoto}>
          <Image src={images.binoKechqurun} alt="Муқимий театри биноси кечқурун, ёритилган фасад" fill sizes="100vw" />
        </div>
        <p className={styles.bandText}>Сизни кутиб оламиз</p>
      </section>
    </>
  );
}
