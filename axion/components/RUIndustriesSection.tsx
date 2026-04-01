import { RUIndustriesData } from "@/lib/queries/replacement-upgrades";
import "./RUIndustriesSection.css";

export default function RUIndustriesSection({ data }: { data: RUIndustriesData }) {
    return (
        <section className="ru-industries">
            <div className="ru-industries-inner">
                <div className="ru-industries-header">
                    <div className="ru-industries-label-row">
                        <div className="ru-industries-label-bar" />
                        <span className="ru-industries-label">{data.label}</span>
                    </div>
                    <h2 className="ru-industries-heading">{data.heading.split("\n").map((l, i, arr) => (
                        <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                    ))}</h2>
                    <p className="ru-industries-desc">{data.description}</p>
                </div>
                <div className="ru-industries-grid">
                    {data.industries.map((ind, i) => (
                        <div key={i} className="ru-industries-card">
                            <div className="ru-industries-icon-circle" style={{ background: `${ind.iconColor}20`, border: `1.5px solid ${ind.iconColor}40` }}>
                                <span className="ru-industries-icon">{ind.icon}</span>
                            </div>
                            <h3 className="ru-industries-card-title">{ind.title}</h3>
                            <p className="ru-industries-card-desc">{ind.description}</p>
                            <div className="ru-industries-card-dot" style={{ background: ind.iconColor }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}