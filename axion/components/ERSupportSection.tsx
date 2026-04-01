import Link from "next/link";
import { ERSupportData } from "@/lib/queries/engineering-resources";
import "./ERSupportSection.css";

export default function ERSupportSection({ data }: { data: ERSupportData }) {
  return (
    <section className="er-sup" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="er-sup__container">

        <div className="er-sup__header">
          <span className="er-sup__label">{data.label}</span>
          <h2 className="er-sup__heading">{data.heading}</h2>
          <p className="er-sup__subtitle">{data.subtitle}</p>
        </div>

        <div className="er-sup__grid">
          {data.programs.map((prog) => (
            <div key={prog.title} className="er-sup__card">
              <div className="er-sup__card-icon">{prog.icon}</div>
              <h3 className="er-sup__card-title">{prog.title}</h3>
              <p className="er-sup__card-desc">{prog.description}</p>

              <div className="er-sup__deliverables">
                <span className="er-sup__del-label">{data.deliverablesLabel}</span>
                <ul className="er-sup__del-list">
                  {prog.deliverables.map((d, i) => (
                    <li key={i} className="er-sup__del-item">
                      <span className="er-sup__del-check">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="er-sup__turnaround">
                <span className="er-sup__ta-label">{data.turnaroundLabel}</span>
                <span className="er-sup__ta-value">{prog.turnaround}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="er-sup__note">
          <span className="er-sup__note-icon">★</span>
          <div className="er-sup__note-text">
            <strong className="er-sup__note-heading">{data.noteHeading}</strong>
            <p className="er-sup__note-body">{data.noteText}</p>
          </div>
          <Link href={data.noteUrl} className="er-sup__note-btn">{data.noteBtnLabel}</Link>
        </div>

      </div>
    </section>
  );
}
