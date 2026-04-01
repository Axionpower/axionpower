import Link from "next/link";
import { ERLibraryData } from "@/lib/queries/engineering-resources";
import "./ERLibrarySection.css";

export default function ERLibrarySection({ data }: { data: ERLibraryData }) {
  return (
    <section className="er-lib" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="er-lib__container">

        <div className="er-lib__header">
          <span className="er-lib__label">{data.label}</span>
          <h2 className="er-lib__heading">{data.heading}</h2>
          <p className="er-lib__subtitle">{data.subtitle}</p>
        </div>

        <div className="er-lib__grid">
          {data.resources.map((res) => (
            <div key={res.title} className="er-lib__card">
              <div className="er-lib__card-top">
                <span className="er-lib__card-icon">{res.icon}</span>
                <div className="er-lib__card-meta">
                  <span className="er-lib__card-category">{res.category}</span>
                  <span className="er-lib__card-format">{res.format}</span>
                </div>
              </div>
              <h3 className="er-lib__card-title">{res.title}</h3>
              <p className="er-lib__card-desc">{res.description}</p>
              <div className="er-lib__card-footer">
                <div className="er-lib__card-tags">
                  {res.tags.map((t) => (
                    <span key={t} className="er-lib__tag">{t}</span>
                  ))}
                </div>
                <Link href={data.requestUrl} className="er-lib__card-link">{data.requestLabel}</Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
