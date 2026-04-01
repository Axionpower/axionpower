import React from "react";
import Link from "next/link";
import "./ContactWhySection.css";
import type { ContactWhyData } from "@/lib/queries/contact-page";

interface Props {
    data: ContactWhyData;
}

export default function ContactWhySection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h2') as React.ElementType;
    const points = data.points ?? [];

    return (
        <section className="cwy-section">
            <div className="cwy-inner">
                <div className="cwy-grid">

                    {/* ── LEFT: Why points ── */}
                    <div className="cwy-left">
                        <span className="cwy-label">
                            <span className="cwy-label-bar" />
                            Why Axion
                        </span>

                        <HeadingTag className="cwy-heading">{data.heading}</HeadingTag>

                        {data.description && (
                            <p className="cwy-description">{data.description}</p>
                        )}

                        <ul className="cwy-list" role="list">
                            {points.map((point, i) => (
                                <li key={i} className="cwy-item">
                                    <div className="cwy-item-icon" aria-hidden="true">
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── RIGHT: CTAs ── */}
                    <div className="cwy-right">
                        <p className="cwy-cta-eyebrow">Ready to get started?</p>
                        <h3 className="cwy-cta-heading">Let&apos;s connect.</h3>

                        {/* CTA 1 */}
                        <Link href={data.cta1Url ?? "#contact-form"} className="cwy-cta-card cwy-cta-card--dark">
                            <div className="cwy-cta-card-icon">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </div>
                            <div className="cwy-cta-card-body">
                                <p className="cwy-cta-card-label">Phone</p>
                                <p className="cwy-cta-card-text">{data.cta1Label}</p>
                            </div>
                            <svg className="cwy-cta-card-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>

                        {/* CTA 2 */}
                        <Link href={data.cta2Url ?? "#contact-form"} className="cwy-cta-card cwy-cta-card--light">
                            <div className="cwy-cta-card-icon">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div className="cwy-cta-card-body">
                                <p className="cwy-cta-card-label">Email / Form</p>
                                <p className="cwy-cta-card-text">{data.cta2Label}</p>
                            </div>
                            <svg className="cwy-cta-card-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>

                        {/* Response time note */}
                        <p className="cwy-note">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Typical response time: within 1 business day
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
