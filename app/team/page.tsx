import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { teamGroups } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Ижодий жамоа" };

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Театр жамоаси"
        title="Ижодий жамоа"
        lead="Актёрлар, вокалистлар, режиссёрлар ва театр раҳбарияти."
      />

      <section id="leadership" className={styles.leaderSection}>
        <div className="container">
          <div className={styles.leader}>
            <div className={styles.portrait}>[Раҳбар сурати]</div>
            <div className={styles.leaderText}>
              <span className="eyebrow">Театр раҳбарияти</span>
              <h2>Азим Муллаханов</h2>
              <p>Лавозими ва таржимаи ҳоли тез кунда қўшилади.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.groupsSection}>
        <div className="container">
          <div className={styles.groups}>
            {teamGroups.map((group, i) => (
              <Link key={group.title} href={group.href} className={styles.group}>
                <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.groupText}>
                  <span className={styles.groupTitle}>{group.title}</span>
                  <span className={styles.groupDesc}>{group.description}</span>
                </span>
                <span aria-hidden="true" className={styles.arrow}>
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
