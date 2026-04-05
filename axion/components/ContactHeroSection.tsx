import HeroBackground from "./HeroBackground";
import React from "react";
import "./ContactHeroSection.css";
import type { ContactHeroData } from "@/lib/queries/contact-page";

interface Props {
    data: ContactHeroData;
}

export default function ContactHeroSection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h1') as React.ElementType;

    return (
        <HeroBackground
            imageUrl={data.backgroundImageUrl}
            videoUrl={data.backgroundVideoUrl}
            className="ch-hero"
        >
            {/* Gradient overlays — matches other page heroes */}
            <div className="ch-overlay-vertical"   aria-hidden="true" />
            <div className="ch-overlay-horizontal" aria-hidden="true" />

            {/* Left-aligned content */}
            <div className="ch-content">

                {/* Breadcrumb */}
                <nav className="ch-breadcrumb" aria-label="Breadcrumb">
                    <span className="ch-breadcrumb-home">HOME</span>
                    <span className="ch-breadcrumb-sep">/</span>
                    <span className="ch-breadcrumb-current">CONTACT US</span>
                </nav>

                {/* Main heading */}
                <HeadingTag
                    className="ch-heading"
                    style={{
                        ...(data.headingColor      && { color:       data.headingColor }),
                        ...(data.headingFontSize   && { fontSize:    data.headingFontSize }),
                        ...(data.headingFontWeight && { fontWeight:  data.headingFontWeight }),
                        ...(data.headingFontFamily && { fontFamily:  data.headingFontFamily }),
                    }}
                >
                    {data.heading ?? "Contact Us"}
                </HeadingTag>

                {/* Blue accent bar */}
                <div className="ch-accent-bar" aria-hidden="true" />

                {/* Description */}
                {data.description && (
                    <p
                        className="ch-desc"
                        style={{
                            ...(data.bodyColor     && { color:    data.bodyColor }),
                            ...(data.bodyFontSize  && { fontSize: data.bodyFontSize }),
                        }}
                    >
                        {data.description}
                    </p>
                )}

                {/* Info pills */}
                <div className="ch-pills">
                    <div className="ch-pill">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <span>24/7 Emergency Support</span>
                    </div>
                    <div className="ch-pill">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>Response within 24 hours</span>
                    </div>
                    <div className="ch-pill">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                        <span>Technical Experts Available</span>
                    </div>
                </div>
            </div>
        </HeroBackground>
    );
}
