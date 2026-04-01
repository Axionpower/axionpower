import Link from "next/link";
import { USCtaData } from "@/lib/queries/utilities-substations";
import "./USCtaSection.css";

export default function USCtaSection({ data }: { data: USCtaData }) {
    return (
        <section className="us-cta">
            <div className="us-cta-glow" />
            <div className="us-cta-inner">
                <div className="us-cta-accent-bar" />
                <h2 className="us-cta-heading">
                    {data.heading.split("\n").map((l, i, arr) => (
                        <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                    ))}
                    <br />
                    <span className="us-cta-heading-accent">{data.accentText}</span>
                </h2>
                <p className="us-cta-desc">{data.description}</p>
                <div className="us-cta-buttons">
                    <Link href={data.btn1Url} className="us-cta-btn-primary">{data.btn1Label}</Link>
                    <Link href={data.btn2Url} className="us-cta-btn-outline">{data.btn2Label}</Link>
                    <Link href={data.btn3Url} className="us-cta-btn-text">{data.btn3Label}</Link>
                </div>
            </div>
        </section>
    );
}