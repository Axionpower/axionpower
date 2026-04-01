import React from "react";
import "./ContactCtaSection.css";
import type { ContactWhyData } from "@/lib/queries/contact-page";

interface Props {
    data: ContactWhyData;
}

export default function ContactCtaSection({ data }: Props) {
    const heading     = data.ctaHeading     ?? "Speak with an Expert";
    const description = data.ctaDescription ?? "Our technical team is available to answer your questions about battery systems, maintenance, and critical power solutions. Reach out today.";
    const phone       = data.ctaPhone       ?? "+1 (800) 000-0000";
    const cta1Label   = data.cta1Label      ?? "Contact Us Today";
    const cta1Url     = data.cta1Url        ?? "#contact-form";
    const cta2Label   = data.cta2Label      ?? "Request a Quote";
    const cta2Url     = data.cta2Url        ?? "#contact-form";

    return (
        <section className="ccta-section">
            {/* Decorative circles */}
            <div className="ccta-circle ccta-circle--1" aria-hidden="true" />
            <div className="ccta-circle ccta-circle--2" aria-hidden="true" />
            <div className="ccta-circle ccta-circle--3" aria-hidden="true" />

            <div className="ccta-inner">
                {/* Phone badge */}
                <div className="ccta-phone-badge">
                    <span className="ccta-phone-icon" aria-hidden="true">📞</span>
                    <span className="ccta-phone-number">{phone}</span>
                </div>

                {/* Heading */}
                <h2 className="ccta-heading">{heading}</h2>

                {/* Accent line */}
                <div className="ccta-accent" aria-hidden="true" />

                {/* Description */}
                <p className="ccta-desc">{description}</p>

                {/* CTA Buttons */}
                <div className="ccta-buttons">
                    <a href={cta1Url} className="ccta-btn ccta-btn--primary">
                        {cta1Label}
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                    <a href={cta2Url} className="ccta-btn ccta-btn--outline">
                        {cta2Label}
                    </a>
                </div>

                {/* Trust badges */}
                <div className="ccta-badges">
                    <div className="ccta-badge">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                        <span>Trusted by Industry Leaders</span>
                    </div>
                    <div className="ccta-badge">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>24/7 Emergency Response</span>
                    </div>
                    <div className="ccta-badge">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>Serving Canada &amp; North America</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
