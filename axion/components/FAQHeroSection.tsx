import HeroBackground from "./HeroBackground";
import React from "react";
import Link from "next/link";
import { FAQHeroData } from "@/lib/queries/faqs";
import "./FAQHeroSection.css";

export default function FAQHeroSection({ data }: { data: FAQHeroData }) {
  const lines = data.heading.split("\n");
  return (
    <HeroBackground
      imageUrl={data.bgImage}
      videoUrl={data.bgVideoUrl}
      className="faq-hero"
      style={{ '--accent': data.accentColor, ...(data.bgColor ? { background: data.bgColor } : {}) } as React.CSSProperties}
    >
      <div className="faq-hero__container">
        <div className="faq-hero__grid">

          {/* LEFT COLUMN */}
          <div className="faq-hero__left">
            <p className="faq-hero__breadcrumb">{data.breadcrumb}</p>
            <span className="faq-hero__pill">{data.label}</span>

            <h1 className="faq-hero__heading">
              {lines.map((line, i) => (
                <span key={i} className="faq-hero__heading-line">{line}</span>
              ))}
            </h1>
            <p className="faq-hero__subtitle">{data.subtitle}</p>

            {/* Stats strip */}
            <div className="faq-hero__stats">
              {data.stats.map((s) => (
                <div key={s.label} className="faq-hero__stat">
                  <span className="faq-hero__stat-value">{s.value}</span>
                  <span className="faq-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <Link href={data.btnUrl} className="faq-hero__btn">
              {data.btnLabel}
            </Link>
          </div>

          {/* RIGHT COLUMN — Topic Navigator */}
          <div className="faq-hero__right">
            <div className="faq-hero__topics-card">
              <div className="faq-hero__topics-header">
                <span className="faq-hero__topics-dot" />
                <span className="faq-hero__topics-dot" />
                <span className="faq-hero__topics-dot" />
                <span className="faq-hero__topics-title">{data.topicsTitle}</span>
              </div>
              <div className="faq-hero__topics-list">
                {data.topics.map((t) => (
                  <div key={t.number} className="faq-hero__topic-row">
                    <span
                      className="faq-hero__topic-num"
                      style={{ color: t.color }}
                    >
                      {t.number}
                    </span>
                    <div className="faq-hero__topic-text">
                      <span className="faq-hero__topic-label">{t.label}</span>
                      <span className="faq-hero__topic-sublabel">{t.sublabel}</span>
                    </div>
                    <span
                      className="faq-hero__topic-arrow"
                      style={{ color: t.color }}
                    >›</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </HeroBackground>
  );
}
