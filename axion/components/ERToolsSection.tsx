import Link from "next/link";
import { ERToolsData } from "@/lib/queries/engineering-resources";
import "./ERToolsSection.css";

export default function ERToolsSection({ data }: { data: ERToolsData }) {
  return (
    <section className="er-tools" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="er-tools__container">

        <div className="er-tools__header">
          <span className="er-tools__label">{data.label}</span>
          <h2 className="er-tools__heading">{data.heading}</h2>
          <p className="er-tools__subtitle">{data.subtitle}</p>
        </div>

        <div className="er-tools__grid">
          {data.tools.map((tool) => (
            <div key={tool.title} className="er-tools__card">
              <div className="er-tools__card-header">
                <span className="er-tools__card-icon">{tool.icon}</span>
                <span className="er-tools__card-standard">{tool.standard}</span>
              </div>
              <h3 className="er-tools__card-title">{tool.title}</h3>
              <p className="er-tools__card-desc">{tool.description}</p>

              <div className="er-tools__inputs-block">
                <span className="er-tools__inputs-label">{data.inputsLabel}</span>
                <ul className="er-tools__inputs">
                  {tool.inputs.map((inp, i) => (
                    <li key={i} className="er-tools__input-item">
                      <span className="er-tools__input-bullet">›</span>
                      {inp}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="er-tools__output">
                <span className="er-tools__output-label">{data.outputPrefixLabel}</span>
                <span className="er-tools__output-value">{tool.outputLabel}</span>
              </div>

              <Link href={data.requestUrl} className="er-tools__card-link">{data.requestLabel}</Link>
            </div>
          ))}
        </div>

        <p className="er-tools__disclaimer">{data.disclaimer}</p>

      </div>
    </section>
  );
}
