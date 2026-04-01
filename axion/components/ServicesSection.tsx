import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./ServicesSection.css";
import type { ServicesData, ServiceItem } from "@/lib/queries/services";

interface Props {
    data: ServicesData;
}

function ArrowIcon({ extraClass = "" }: { extraClass?: string }) {
    return (
        <div className={`service-card-arrow${extraClass ? ` ${extraClass}` : ""}`}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
        </div>
    );
}

function ServiceCard({ item, cardHeadingTag, cardTitleColor }: { item: ServiceItem; cardHeadingTag?: string; cardTitleColor?: string }) {
    const CardTag = (cardHeadingTag || 'h3') as React.ElementType;
    const imgSrc = item.image?.node?.sourceUrl || item.fallbackImage || null;

    return (
        <div className="service-card">
            {/* Background image – hidden by default, shown on hover via CSS */}
            {imgSrc && (
                <div className="service-card-bg">
                    <Image
                        src={imgSrc}
                        alt={item.image?.node?.altText || item.title}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            )}
            <div className="service-card-bg-overlay" />

            <div className="service-card-content">
                <CardTag style={{ ...(cardTitleColor && { color: cardTitleColor }) }}>{item.title}</CardTag>
                <p>{item.description}</p>
                {/* footer: button + arrow on same row — mobile only */}
                <div className="service-card-footer">
                    <Link href={item.buttonUrl || "#"} className="service-card-btn">
                        {item.buttonLabel}
                    </Link>
                    <ArrowIcon extraClass="arrow-mobile" />
                </div>
            </div>

            {/* Arrow on far right, vertically centered — desktop only */}
            <ArrowIcon extraClass="arrow-desktop" />
        </div>
    );
}

export default function ServicesSection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h2') as React.ElementType;

    return (
        <>
            {/* ── Intro Block ── */}
            <section
                className="services-intro"
                style={{ background: `linear-gradient(180deg, ${data.introBgColor} 0%, ${data.midBgColor} 100%)` }}
            >
                <div className="services-intro-container">
                    <div className="services-label">
                        <span className="services-label-bar" />
                        <span className="services-label-text" style={{ ...(data.labelColor && { color: data.labelColor }) }}>{data.labelText}</span>
                    </div>
                    <HeadingTag className="services-intro-heading" style={{ ...(data.headingColor && { color: data.headingColor }) }}>{data.introHeading}</HeadingTag>
                    <Link href={data.introButtonUrl || "/services"} className="services-intro-btn">
                        {data.introButtonLabel}
                    </Link>
                </div>
            </section>

            {/* ── Service Cards ── */}
            <section
                className="services-cards"
                style={{ background: `linear-gradient(180deg, ${data.midBgColor} 0%, ${data.bottomBgColor} 100%)` }}
            >
                <div className="services-cards-container">
                    {data.services.map((item, i) => (
                        <ServiceCard key={i} item={item} cardHeadingTag={data.cardHeadingTag} cardTitleColor={data.cardTitleColor} />
                    ))}
                </div>
            </section>
        </>
    );
}
