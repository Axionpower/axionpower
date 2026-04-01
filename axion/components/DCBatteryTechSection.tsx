import { DCBatteryTechData } from "@/lib/queries/data-centers";
import "./DCBatteryTechSection.css";

export default function DCBatteryTechSection({ data }: { data: DCBatteryTechData }) {
  return (
    <section className="dc-batt">
      <div className="dc-batt-inner">
        <div className="dc-batt-header">
          <span className="dc-batt-label">{data.label}</span>
          <h2 className="dc-batt-heading">{data.heading}</h2>
          <p className="dc-batt-desc">{data.description}</p>
        </div>

        <div className="dc-batt-table-wrap">
          <table className="dc-batt-table">
            <thead>
              <tr>
                <th className="dc-batt-th dc-batt-th-spec">SPECIFICATION</th>
                <th className="dc-batt-th dc-batt-th-vrla">
                  <span className="dc-batt-col-badge dc-batt-col-badge--vrla">VRLA BATTERIES</span>
                  <span className="dc-batt-col-sub">Valve-Regulated Lead Acid</span>
                </th>
                <th className="dc-batt-th dc-batt-th-wet">
                  <span className="dc-batt-col-badge dc-batt-col-badge--wet">WET CELL BATTERIES</span>
                  <span className="dc-batt-col-sub">Flooded / Vented Lead Acid</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "dc-batt-row dc-batt-row--even" : "dc-batt-row"}>
                  <td className="dc-batt-td dc-batt-td-spec">{row.spec}</td>
                  <td className="dc-batt-td dc-batt-td-vrla">{row.vrla}</td>
                  <td className="dc-batt-td dc-batt-td-wet">{row.wetCell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dc-batt-recommendation">
          <span className="dc-batt-rec-label">DATA CENTER RECOMMENDATION:</span>
          <span className="dc-batt-rec-text">{data.recommendation}</span>
        </div>
      </div>
    </section>
  );
}
