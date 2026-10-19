import type { Performance } from "@/lib/data";
import styles from "./PerformanceList.module.css";

type Props = {
  performances: Performance[];
  month: string;
  /** "gold" sits on the gold home-page band, "dark" on the night background. */
  variant: "gold" | "dark";
};

export function PerformanceList({ performances, month, variant }: Props) {
  return (
    <ol className={`${styles.list} ${styles[variant]}`}>
      {performances.map((p) => (
        <li key={`${p.date}-${p.title}`} className={styles.row}>
          <div className={styles.when}>
            <span className={styles.date}>{p.date}</span>
            <span className={styles.day}>
              <span>{p.day}</span>
              <span className={styles.month}>{month}</span>
            </span>
          </div>
          <div className={styles.time}>{p.time}</div>
          <div className={styles.what}>
            <span className={styles.title}>{p.title}</span>
            {p.author && <span className={styles.author}>{p.author}</span>}
          </div>
          <span className={`tag ${styles.genre}`}>{p.genre}</span>
        </li>
      ))}
    </ol>
  );
}
