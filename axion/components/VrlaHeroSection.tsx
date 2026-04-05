import CmsMedia from "./CmsMedia";
import Link from "next/link";
import "./VrlaHeroSection.css";

interface VrlaHeroData {
    backgroundImage?: string;
    backgroundVideoUrl?: string;
    heading?: string;
    headingTag?: string;
    headingHighlight?: string;
    headingColor?: string;
    description?: string;
    bodyColor?: string;
    keyHighlights?: string[];
    typicalApplications?: string[];
    ctaLabel?: string;
    ctaUrl?: string;
    breadcrumb?: string;
    breadcrumbColor?: string;
    btnBg?: string;
    btnFg?: string;
    highlightColor?: string;
    headingFontSize?: string;
    bodyFontSize?: string;
    sectionMinHeight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

const DEFAULTS: VrlaHeroData = {
    backgroundImage: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    heading: "VRLA",
    headingTag: "h1",
    headingHighlight: "BATTERIES",
    headingColor: "#FFFFFF",
    description:
        "Axion Critical Power Solutions provides high-performance, low-maintenance VRLA (Valve-Regulated Lead-Acid) batteries for mission-critical applications. Sealed and reliable, they are ideal for UPS, DC power plants, and standby systems where space efficiency, predictable performance, and operational reliability are essential.",
    keyHighlights: [
        "Maintenance-free operation",
        "High power density",
        "Proven reliability in critical environments",
        "Compact footprint",
    ],
    typicalApplications: [
        "Data center UPS systems",
        "Telecom power systems",
        "Healthcare facilities",
        "Commercial and industrial UPS installations facilities",
    ],
    ctaLabel: "Speak with an Expert",
    ctaUrl: "#contact",
    bodyColor: "#cbd5e1",
    breadcrumb: "VRLA Batteries",
};

function CircleIcon() {
    return (
        <span className="vrla-list-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </span>
    );
}

export default function VrlaHeroSection({ data }: { data?: VrlaHeroData }) {
    const d = { ...DEFAULTS, ...data };
    const HeadingTag = (d.headingTag || 'h1') as React.ElementType;

    return (
        <section className="vrla-hero" style={{
            ...(d.sectionMinHeight && { minHeight: d.sectionMinHeight }),
            ...(d.paddingBottom && { paddingBottom: d.paddingBottom }),
            ...(d.paddingLeft && { paddingLeft: d.paddingLeft }),
            ...(d.paddingRight && { paddingRight: d.paddingRight }),
        }}>
            <div className="vrla-hero-bg">
                <CmsMedia
                    imageUrl={d.backgroundImage}
                    videoUrl={d.backgroundVideoUrl}
                    alt="VRLA Batteries"
                    fill
                    priority
                />
            </div>
            <div className="vrla-hero-overlay" />

            <div className="vrla-hero-content">
                <nav className="vrla-breadcrumb" aria-label="Breadcrumb" style={{ ...(d.breadcrumbColor && { color: d.breadcrumbColor }) }}>
                    <Link href="/" style={{ ...(d.breadcrumbColor && { color: d.breadcrumbColor }) }}>Home</Link>
                    <span className="vrla-breadcrumb-sep"> / </span>
                    <span>{d.breadcrumb}</span>
                </nav>

                <HeadingTag className="vrla-hero-heading" style={{
                    ...(d.headingColor && { color: d.headingColor }),
                    ...(d.headingFontSize && { fontSize: d.headingFontSize }),
                }}>
                    {d.heading} <span className="highlight" style={{ ...(d.highlightColor && { color: d.highlightColor }) }}>{d.headingHighlight}</span>
                </HeadingTag>

                <p className="vrla-hero-desc" style={{
                    ...(d.bodyColor && { color: d.bodyColor }),
                    ...(d.bodyFontSize && { fontSize: d.bodyFontSize }),
                }}>{d.description}</p>

                <Link href={d.ctaUrl || "#"} className="vrla-hero-cta" style={{
                    ...(d.btnBg && { backgroundColor: d.btnBg }),
                    ...(d.btnFg && { color: d.btnFg }),
                }}>
                    {d.ctaLabel}
                </Link>
            </div>
        </section>
    );
}
