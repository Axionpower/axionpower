import { CESelectionData } from "@/lib/queries/consulting-engineer-hub";
import "./CESelectionSection.css";

export default function CESelectionSection({ data }: { data: CESelectionData }) {
  return (
    <section className="ce-sel" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="ce-sel__container">

        <div className="ce-sel__header">
          <span className="ce-sel__label">{data.label}</span>
          <h2 className="ce-sel__heading">{data.heading}</h2>
          <p className="ce-sel__subtitle">{data.subtitle}</p>
        </div>

        <div className="ce-sel__table-wrap">
          <table className="ce-sel__table">
            <thead>
              <tr>
                <th className="ce-sel__th ce-sel__th--criteria">{data.thCriteria}</th>
                <th className="ce-sel__th ce-sel__th--vrla">{data.thVrla}</th>
                <th className="ce-sel__th ce-sel__th--wet">{data.thWetCell}</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                <tr key={i} className={`ce-sel__tr ${i % 2 === 0 ? "ce-sel__tr--even" : ""}`}>
                  <td className="ce-sel__td ce-sel__td--criteria">{row.criteria}</td>
                  <td className="ce-sel__td ce-sel__td--vrla">{row.vrla}</td>
                  <td className="ce-sel__td ce-sel__td--wet">{row.wetCell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ce-sel__recommend">
          <div className="ce-sel__recommend-card ce-sel__recommend-card--vrla">
            <span className="ce-sel__recommend-tag">VRLA</span>
            <p className="ce-sel__recommend-text">{data.vrlaRecommend}</p>
          </div>
          <div className="ce-sel__recommend-card ce-sel__recommend-card--wet">
            <span className="ce-sel__recommend-tag">WET CELL</span>
            <p className="ce-sel__recommend-text">{data.wetCellRecommend}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
