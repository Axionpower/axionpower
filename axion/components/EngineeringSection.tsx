import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./EngineeringSection.css";
import type { EngineeringData } from "@/lib/queries/engineering";

interface Props {
    data: EngineeringData;
}

export default function EngineeringSection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h2') as React.ElementType;
    const SubTag = (data.subheadingTag || 'h3') as React.ElementType;
    return (
        <section className="engineering-section" style={{ background: data.bgColor }}>
            {/* Decorative floating images */}
            <div className="eng-floating-images">
                {data.decorImages.map((img, i) => (
                    <Image
                        key={i}
                        src={img.image?.node?.sourceUrl || img.fallback}
                        alt={img.image?.node?.altText || `Engineering ${i + 1}`}
                        width={160}
                        height={120}
                        className={`eng-float-img pos-${i + 1}`}
                    />
                ))}
            </div>

            {/* Center content */}
            <div className="eng-content">
                <HeadingTag className="eng-title" style={{ ...(data.headingColor && { color: data.headingColor }), ...(data.headingFontWeight && { fontWeight: data.headingFontWeight }) }}>{data.title}</HeadingTag>
                <p className="eng-description" style={{ ...(data.bodyColor && { color: data.bodyColor }), ...(data.bodyFontSize && { fontSize: data.bodyFontSize }) }}>{data.description}</p>

                <SubTag className="eng-highlights-title" style={{ ...(data.headingColor && { color: data.headingColor }) }}>{data.highlightsTitle}</SubTag>
                <div className="eng-highlights">
                    {data.highlights.map((h: string, i: number) => (
                        <span key={i} className="eng-pill">{h}</span>
                    ))}
                </div>

                <Link href={data.buttonUrl || "#"} className="eng-cta-btn">
                    {data.buttonLabel}
                </Link>
            </div>
        </section>
    );
}
