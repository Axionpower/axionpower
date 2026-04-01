import { ERAppNotesData } from "@/lib/queries/engineering-resources";
import "./ERAppNotesSection.css";

export default function ERAppNotesSection({ data }: { data: ERAppNotesData }) {
  return (
    <section className="er-notes" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="er-notes__container">

        <div className="er-notes__header">
          <span className="er-notes__label">{data.label}</span>
          <h2 className="er-notes__heading">{data.heading}</h2>
          <p className="er-notes__subtitle">{data.subtitle}</p>
        </div>

        <div className="er-notes__grid">
          {data.notes.map((note) => (
            <div key={note.title} className="er-notes__card">
              <div className="er-notes__card-top">
                <span
                  className="er-notes__card-tag"
                  style={{ color: note.tagColor, borderColor: `${note.tagColor}40`, background: `${note.tagColor}12` }}
                >
                  {note.tag}
                </span>
                <span className="er-notes__card-tech">{note.technology}</span>
              </div>
              <h3 className="er-notes__card-title">{note.title}</h3>
              <p className="er-notes__card-summary">{note.summary}</p>
              <ul className="er-notes__key-points">
                {note.keyPoints.map((kp, i) => (
                  <li key={i} className="er-notes__key-point">
                    <span className="er-notes__kp-check">✓</span>
                    {kp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
