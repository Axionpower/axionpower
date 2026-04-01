import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiPhone } from "react-icons/hi2";
import "./AboutCtaSection.css";
import type { AboutCtaData } from "@/lib/queries/about-page";

interface Props {
    data: AboutCtaData;
}

export default function AboutCtaSection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h2') as React.ElementType;
    return (
        <section className="acta-section">
            {/* ── Left: text + buttons ── */}
            <div className="acta-left">
                <div className="acta-label-row">
                    <span className="acta-label-bar" />
                    <span className="acta-label">{data.label}</span>
                </div>

                <HeadingTag className="acta-heading" style={{ ...(data.headingColor && { color: data.headingColor }), ...(data.headingFontWeight && { fontWeight: data.headingFontWeight }) }}>{data.heading}</HeadingTag>
                <p className="acta-body">{data.body}</p>

                <div className="acta-buttons">
                    <Link href={data.btnPrimaryUrl} className="acta-btn-primary">
                        {data.btnPrimaryLabel}
                    </Link>
                    <Link href={data.btnGhostUrl} className="acta-btn-ghost">
                        {data.btnGhostLabel}
                    </Link>
                </div>
            </div>

            {/* ── Right: image + emergency bar ── */}
            <div className="acta-right">
                <Image
                    src={data.imageUrl ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png"}
                    alt={data.imageAlt ?? "Axion technician at work"}
                    fill
                    className="acta-image"
                />
                <div className="acta-emergency">
                    <span className="acta-emergency-icon" aria-hidden="true">
                        <HiPhone size={16} color="#ffffff" />
                    </span>
                    <span className="acta-emergency-text">{data.emergencyText}</span>
                </div>
            </div>
        </section>
    );
}
