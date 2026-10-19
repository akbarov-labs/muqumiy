import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PerformanceList } from "@/components/PerformanceList";
import { repertoire } from "@/lib/data";

export const metadata: Metadata = { title: "Репертуар" };

export default function RepertoirePage() {
  return (
    <>
      <PageHero
        eyebrow={`${repertoire.label} ойи`}
        title="Репертуар"
        lead="Одатда спектакллар соат 18:00 да бошланади. Шанба ва якшанба кунлари 17:00 ва 19:00 да."
      />
      <section className="list-section">
        <div className="container">
          <PerformanceList performances={repertoire.performances} month={repertoire.month} variant="dark" />
        </div>
      </section>
    </>
  );
}
