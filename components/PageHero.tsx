import { StarPattern } from "./StarPattern";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export function PageHero({ eyebrow, title, lead }: Props) {
  return (
    <section className="page-hero">
      <StarPattern opacity={0.14} />
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lead && <p className="page-hero-lead">{lead}</p>}
      </div>
    </section>
  );
}
