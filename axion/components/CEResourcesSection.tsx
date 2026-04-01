import Link from "next/link";
import { CEResourcesData } from "@/lib/queries/consulting-engineer-hub";
import "./CEResourcesSection.css";

export default function CEResourcesSection({ data }: { data: CEResourcesData }) {
  return (
    <section className="ce-res" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="ce-res__container">

        <div className="ce-res__header">
          <span className="ce-res__label">{data.label}</span>
          <h2 className="ce-res__heading">{data.heading}</h2>
          <p className="ce-res__subtitle">{data.subtitle}</p>
        </div>

        <div className="ce-res__grid">
          {data.cards.map((card) => (
            <div key={card.title} className="ce-res__card">
              <div className="ce-res__card-top">
                <span className="ce-res__card-icon">{card.icon}</span>
                <span className="ce-res__card-badge">{card.badge}</span>
              </div>
              <h3 className="ce-res__card-title">{card.title}</h3>
              <p className="ce-res__card-desc">{card.description}</p>
              <Link href={data.requestUrl} className="ce-res__card-link">
                {card.linkLabel} →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
