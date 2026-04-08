import CmsMedia from "./CmsMedia";
import Link from "next/link";
import "./CabinetsHeroSection.css";

interface CabinetsHeroData {
    backgroundImage?: string;
    backgroundVideoUrl?: string;
    heading?: string;
    headingTag?: string;
    headingHighlight?: string;
    headingColor?: string;
    description?: string;
    bodyColor?: string;
    keyHighlights?: string[];
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

const DEFAULTS: CabinetsHeroData = {
    backgroundImage: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    heading: "STATIONARY BATTERY",
    headingTag: "h1",
    headingHighlight: "CABINETS",
    headingColor: "#FFFFFF",
    description:
        "Axion Critical Power Solutions provides robust, purpose-built stationary battery cabinets designed to house and protect critical battery systems. Engineered for safety, ventilation, and easy maintenance access, our cabinets support VRLA, flooded, and lithium-ion installations across data centers, telecom facilities, and industrial environments.",
    keyHighlights: [
        "Seismic-rated construction",
        "Integrated ventilation and thermal management",
        "Configurable for all battery chemistries",
        "Code-compliant designs (UL, NFPA, IEEE)",
    ],
    ctaLabel: "Speak with an Expert",
    ctaUrl: "#contact",
    bodyColor: "#cbd5e1",
    breadcrumb: "Battery Cabinets",
};

function CircleIcon() {
    return (
        <span className="cabinets-list-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </span>
    );
}

export default function CabinetsHeroSection({ data }: { data?: CabinetsHeroData }) {
    const d = { ...DEFAULTS, ...data };
    const HeadingTag = (d.headingTag || 'h1') as React.ElementType;

    return (
        <section className="cabinets-hero" style={{
            ...(d.sectionMinHeight && { minHeight: d.sectionMinHeight }),
            ...(d.paddingBottom && { paddingBottom: d.paddingBottom }),
            ...(d.paddingLeft && { paddingLeft: d.paddingLeft }),
            ...(d.paddingRight && { paddingRight: d.paddingRight }),
        }}>
            <div className="cabinets-hero-bg">
                <CmsMedia
                    imageUrl={d.backgroundImage}
                    videoUrl={d.backgroundVideoUrl}
                    alt="Stationary Battery Cabinets"
                    fill
                    priority
                />
            </div>
            <div className="cabinets-hero-overlay" />

            <div className="cabinets-hero-content">
                <nav className="cabinets-breadcrumb" aria-label="Breadcrumb" style={{ ...(d.breadcrumbColor && { color: d.breadcrumbColor }) }}>
                    <span>{d.breadcrumb ?? "PRODUCTS / BATTERY CABINETS"}</span>
                </nav>

                <HeadingTag className="cabinets-hero-heading" style={{
                    ...(d.headingColor && { color: d.headingColor }),
                    ...(d.headingFontSize && { fontSize: d.headingFontSize }),
                }}>
                    {d.heading} <span className="highlight" style={{ ...(d.highlightColor && { color: d.highlightColor }) }}>{d.headingHighlight}</span>
                </HeadingTag>

                <p className="cabinets-hero-desc" style={{
                    ...(d.bodyColor && { color: d.bodyColor }),
                    ...(d.bodyFontSize && { fontSize: d.bodyFontSize }),
                }}>{d.description}</p>

                <Link href={d.ctaUrl || "#"} className="cabinets-hero-cta" style={{
                    ...(d.btnBg && { backgroundColor: d.btnBg }),
                    ...(d.btnFg && { color: d.btnFg }),
                }}>
                    {d.ctaLabel}
                </Link>
            </div>
        </section>
    );
}
