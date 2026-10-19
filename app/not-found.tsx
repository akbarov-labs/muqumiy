import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="Саҳифа топилмади" lead="Сиз излаган саҳифа мавжуд эмас ёки кўчирилган." />
      <section className="list-section">
        <div className="container">
          <Link href="/" className="btn btn-gold">
            Бош саҳифага қайтиш
          </Link>
        </div>
      </section>
    </>
  );
}
