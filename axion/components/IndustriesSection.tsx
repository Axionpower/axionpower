import Image from "next/image";
import Link from "next/link";
import "./IndustriesSection.css";
import type { IndustriesData, IndustryItem } from "@/lib/queries/industries";

interface Props {
    data: IndustriesData;
}

function IndustryCard({ item, index }: { item: IndustryItem; index: number }) {
    const isReversed = index % 2 === 1;
    const hasImageOverlay = !!item.imageTitle;
    const CardHeadingTag = 'h3' as React.ElementType;
    const ImageTitleTag = 'h3' as React.ElementType;

    const imageBlock = (
        <div className="industry-image-wrap">
            <Image
                src={item.image?.node?.sourceUrl || item.fallbackImage}
                alt={item.image?.node?.altText || item.title}
                width={560}
                height={420}
                className="industry-image"
            />
            {hasImageOverlay && (
                <div className="industry-image-overlay">
                    <ImageTitleTag className="industry-image-title">{item.imageTitle}</ImageTitleTag>
                    <Link href={item.buttonUrl || "#"} className="industry-image-btn">
                        {item.imageButtonLabel}
                    </Link>
                </div>
            )}
        </div>
    );

    const contentBlock = (
        <div className="industry-content">
            <CardHeadingTag className="industry-title">{item.title}</CardHeadingTag>
            {item.subtitle && <p className="industry-subtitle">{item.subtitle}</p>}
            <p className="industry-description">{item.description}</p>

            <div className="industry-tags-grid">
                {item.features.map((f: string, i: number) => (
                    <div key={i} className="industry-tag">{f}</div>
                ))}
            </div>

            {item.buttonLabel && (
                <Link href={item.buttonUrl || "#"} className="industry-cta-btn">
                    {item.buttonLabel}
                </Link>
            )}
        </div>
    );

    return (
        <div className={`industry-card${isReversed ? " reversed" : ""}`}>
            {isReversed ? (
                <>
                    {contentBlock}
                    {imageBlock}
                </>
            ) : (
                <>
                    {imageBlock}
                    {contentBlock}
                </>
            )}
        </div>
    );
}

export default function IndustriesSection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h2') as React.ElementType;

    return (
        <>
            {/* ── Intro ── */}
            <section className="industries-intro" style={{ background: data.sectionBgColor }}>
                <div className="industries-intro-container">
                    <div className="industries-label">
                        <span className="industries-label-bar" />
                        <span className="industries-label-text" style={{ ...(data.labelColor && { color: data.labelColor }) }}>{data.labelText}</span>
                    </div>
                    <HeadingTag
                        className="industries-intro-heading"
                        style={{ ...(data.headingColor && { color: data.headingColor }) }}
                        dangerouslySetInnerHTML={{ __html: data.introHeading }}
                    />
                </div>
            </section>

            {/* ── Industry Cards ── */}
            <section className="industries-cards" style={{ background: data.sectionBgColor }}>
                <div className="industries-cards-container">
                    {data.industries.map((item: IndustryItem, i: number) => (
                        <IndustryCard key={i} item={item} index={i} />
                    ))}
                </div>
            </section>
        </>
    );
}
