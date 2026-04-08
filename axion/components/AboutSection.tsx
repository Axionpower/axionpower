import Link from "next/link";
import "./AboutSection.css";
import type { AboutData } from "@/lib/queries/about";

interface Props {
    data: AboutData;
}

export default function AboutSection({ data }: Props) {
    const btn = data.button;
    const HeadingTag = (data.headingTag || "h2") as React.ElementType;
    const ApproachTag = (data.approachTitleTag || "h3") as React.ElementType;

    return (
        <section
            className="about-section"
            style={{ background: data.sectionBgColor }}
        >
            <div className="about-container">

                {/* ══════════════════════════════
                    TOP: Two-column layout
                ══════════════════════════════ */}
                <div className="about-top">

                    {/* ── LEFT COLUMN ── */}
                    <div className="about-left">

                        {/* Label badge */}
                        <div className="about-label">
                            <span
                                className="about-label-bar"
                                style={{ background: data.labelBarColor }}
                            />
                            <span
                                className="about-label-text"
                                style={{
                                    color: data.labelColor,
                                    fontSize: `${data.labelFontSize}px`,
                                }}
                            >
                                {data.labelText}
                            </span>
                        </div>

                        {/* Heading */}
                        <HeadingTag
                            className="about-heading"
                            style={{
                                color: data.headingColor,
                                fontSize: `clamp(${data.headingFontSizeMobile}px, 4vw, ${data.headingFontSize}px)`,
                            }}
                        >
                            {data.headingText.split("\n").map((line, i, arr) => (
                                <span key={i}>
                                    {line}
                                    {i < arr.length - 1 && <br />}
                                </span>
                            ))}
                        </HeadingTag>

                        {/* Approach tags as feature check-list */}
                        {data.approachTags && data.approachTags.length > 0 && (
                            <div className="about-features">
                                {data.approachTags.map((tag, i) => (
                                    <div className="about-feature-item" key={i}>
                                        <span
                                            className="about-feature-check"
                                            style={{ borderColor: data.labelBarColor, color: data.labelBarColor }}
                                            aria-hidden="true"
                                        >
                                            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                                            </svg>
                                        </span>
                                        <span
                                            className="about-feature-text"
                                            style={{
                                                color: data.tagTextColor,
                                                fontSize: `${data.tagFontSize}px`,
                                            }}
                                        >
                                            {tag.tagText}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* CTA Button */}
                        <Link
                            href={btn.url || "/about"}
                            className="about-btn"
                            style={{
                                background: btn.bgColor,
                                color: btn.textColor,
                                fontSize: `${btn.fontSize}px`,
                                borderRadius: `${btn.borderRadius}px`,
                            }}
                        >
                            {btn.label}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* ── RIGHT COLUMN ── */}
                    <div className="about-right">

                        {/* Description blocks */}
                        <div className="about-desc-block">
                            <p
                                className="about-description"
                                style={{
                                    color: data.descriptionColor,
                                    fontSize: `${data.descriptionFontSize}px`,
                                }}
                            >
                                {data.description1}
                            </p>
                        </div>

                        <div className="about-desc-block about-desc-block--accent">
                            <p
                                className="about-description"
                                style={{
                                    color: data.descriptionColor,
                                    fontSize: `${data.descriptionFontSize}px`,
                                }}
                            >
                                {data.description2}
                            </p>
                        </div>

                        {/* Approach title + compact chips */}
                        {data.approachTitle && (
                            <div className="about-approach">
                                <ApproachTag
                                    className="about-approach-title"
                                    style={{
                                        color: data.approachTitleColor,
                                        fontSize: `${data.approachTitleFontSize}px`,
                                    }}
                                >
                                    {data.approachTitle}
                                </ApproachTag>
                                <div className="about-tags">
                                    {data.approachTags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="about-tag"
                                            style={{
                                                color: data.tagTextColor,
                                                borderColor: data.tagBorderColor,
                                                fontSize: `${data.tagFontSize}px`,
                                            }}
                                        >
                                            {tag.tagText}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* ══════════════════════════════
                    BOTTOM: Stats row
                ══════════════════════════════ */}
                <div
                    className="about-stats"
                    style={{ borderTopColor: data.statDividerColor }}
                >
                    {data.stats.map((stat, i) => (
                        <div
                            key={i}
                            className="about-stat"
                            style={{ borderLeftColor: data.statDividerColor }}
                        >
                            <span
                                className="stat-value"
                                style={{
                                    color: data.statValueColor,
                                    fontSize: `${data.statValueFontSize}px`,
                                }}
                            >
                                {stat.statValue}
                            </span>
                            <span
                                className="stat-desc"
                                style={{
                                    color: data.statDescColor,
                                    fontSize: `${data.statDescFontSize}px`,
                                }}
                            >
                                {stat.statDescription}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
