import Image from "next/image";
import Link from "next/link";
import "./WetCellHeroSection.css";

interface WetCellHeroData {
    backgroundImage?: string;
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

const DEFAULTS: WetCellHeroData = {
    backgroundImage: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    heading: "WET CELL",
    headingTag: "h1",
    headingHighlight: "BATTERIES",
    headingColor: "#FFFFFF",
    description:
        "Axion Critical Power Solutions delivers robust, high-capacity Wet Cell (Flooded) batteries engineered for the most demanding stationary power applications. With superior cycling capability and extended service life, flooded batteries remain the preferred choice for utility substations, large-scale UPS systems, and industrial DC power plants.",
    keyHighlights: [
        "Extended service life (20+ years)",
        "Superior deep-discharge recovery",
        "High cycling capability",
        "Cost-effective for large installations",
    ],
    ctaLabel: "Speak with an Expert",
    ctaUrl: "#contact",
    bodyColor: "#cbd5e1",
    breadcrumb: "Wet Cell Batteries",
};

function CircleIcon() {
    return (
        <span className="wetcell-list-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </span>
    );
}

export default function WetCellHeroSection({ data }: { data?: WetCellHeroData }) {
    const d = { ...DEFAULTS, ...data };
    const HeadingTag = (d.headingTag || 'h1') as React.ElementType;

    return (
        <section className="wetcell-hero" style={{
            ...(d.sectionMinHeight && { minHeight: d.sectionMinHeight }),
            ...(d.paddingBottom && { paddingBottom: d.paddingBottom }),
            ...(d.paddingLeft && { paddingLeft: d.paddingLeft }),
            ...(d.paddingRight && { paddingRight: d.paddingRight }),
        }}>
            {d.backgroundImage && (
                <div className="wetcell-hero-bg">
                    <Image
                        src={d.backgroundImage}
                        alt="Wet Cell Batteries"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            )}
            <div className="wetcell-hero-overlay" />

            <div className="wetcell-hero-content">
                <nav className="wetcell-breadcrumb" aria-label="Breadcrumb" style={{ ...(d.breadcrumbColor && { color: d.breadcrumbColor }) }}>
                    <Link href="/" style={{ ...(d.breadcrumbColor && { color: d.breadcrumbColor }) }}>Home</Link>
                    <span className="wetcell-breadcrumb-sep"> / </span>
                    <span>{d.breadcrumb}</span>
                </nav>

                <HeadingTag className="wetcell-hero-heading" style={{
                    ...(d.headingColor && { color: d.headingColor }),
                    ...(d.headingFontSize && { fontSize: d.headingFontSize }),
                }}>
                    {d.heading} <span className="highlight" style={{ ...(d.highlightColor && { color: d.highlightColor }) }}>{d.headingHighlight}</span>
                </HeadingTag>

                <p className="wetcell-hero-desc" style={{
                    ...(d.bodyColor && { color: d.bodyColor }),
                    ...(d.bodyFontSize && { fontSize: d.bodyFontSize }),
                }}>{d.description}</p>

                <Link href={d.ctaUrl || "#"} className="wetcell-hero-cta" style={{
                    ...(d.btnBg && { backgroundColor: d.btnBg }),
                    ...(d.btnFg && { color: d.btnFg }),
                }}>
                    {d.ctaLabel}
                </Link>
            </div>
        </section>
    );
}
