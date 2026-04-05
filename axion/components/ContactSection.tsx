import CmsMedia from "./CmsMedia";
import Link from "next/link";
import "./ContactSection.css";
import type { ContactData } from "@/lib/queries/contact";

interface Props {
    data: ContactData;
}

export default function ContactSection({ data }: Props) {
    const imgSrc = data.image?.node?.sourceUrl || data.fallbackImage;
    const imgAlt = data.image?.node?.altText || "Contact Axion";
    const HeadingTag = (data.headingTag || 'h2') as React.ElementType;
    const HighlightsTag = (data.highlightsTag || 'h3') as React.ElementType;

    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Left: Nested Image Frames */}
                <div className="contact-image-area">
                    <div
                        className="contact-frame-outer"
                        style={{ backgroundImage: `url(${imgSrc})` }}
                    >
                        <div
                            className="contact-frame-middle"
                            style={{ backgroundImage: `url(${imgSrc})` }}
                        >
                            <div className="contact-frame-inner">
                                <CmsMedia
                                    imageUrl={imgSrc}
                                    videoUrl={data.videoUrl}
                                    alt={imgAlt}
                                    width={340}
                                    height={440}
                                    className="contact-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="contact-right">
                    <div className="contact-label">
                        <span className="contact-label-bar" />
                        <span className="contact-label-text" style={{ ...(data.labelColor && { color: data.labelColor }) }}>{data.labelText}</span>
                    </div>
                    <HeadingTag className="contact-heading" style={{ ...(data.headingColor && { color: data.headingColor }) }}>{data.heading}</HeadingTag>
                    <p className="contact-desc" style={{ ...(data.bodyColor && { color: data.bodyColor }) }}>{data.description}</p>

                    <HighlightsTag className="contact-highlights-title" style={{ ...(data.highlightsColor && { color: data.highlightsColor }) }}>{data.highlightsTitle}</HighlightsTag>
                    <div className="contact-pills">
                        {data.highlights.map((h: string, i: number) => (
                            <span key={i} className="contact-pill">{h}</span>
                        ))}
                    </div>

                    <Link href={data.buttonUrl || "#"} className="contact-cta-btn">
                        {data.buttonLabel}
                    </Link>
                </div>
            </div>
        </section>
    );
}
