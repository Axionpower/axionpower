import React from 'react';
import { QSHandlingData } from '@/lib/queries/quality-safety';
import { SectionOverrides } from '@/lib/queries/sustainability';
import './QSHandlingSection.css';

interface QSHandlingSectionProps {
  data: QSHandlingData;
}

const QSHandlingSection: React.FC<QSHandlingSectionProps> = ({ data }) => {
  // Extract overrides
  const overrides = data.overrides || {};
  const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;
  const CardTag = (overrides.cardHeadingTag || 'h3') as React.ElementType;

  // Style values with fallbacks to defaults
  const sectionStyle: React.CSSProperties = {
    backgroundColor: overrides.bgColor || '#1565c0',
    ...(overrides.marginTop && { marginTop: overrides.marginTop }),
    ...(overrides.borderRadiusTop && { borderRadius: `${overrides.borderRadiusTop} ${overrides.borderRadiusTop} 0 0` }),
  };

  const innerStyle: React.CSSProperties = {
    ...(overrides.paddingTop && { paddingTop: overrides.paddingTop }),
    ...(overrides.paddingBottom && { paddingBottom: overrides.paddingBottom }),
    ...(overrides.paddingLeft && { paddingLeft: overrides.paddingLeft }),
    ...(overrides.paddingRight && { paddingRight: overrides.paddingRight }),
    ...(overrides.minHeight && { minHeight: overrides.minHeight }),
    ...(overrides.contentGap && { gap: overrides.contentGap }),
  };

  const headingStyle: React.CSSProperties = {
    color: overrides.headingColor || '#ffffff',
    fontSize: overrides.headingFontSize || '46px',
  };

  const bodyStyle: React.CSSProperties = {
    color: overrides.bodyColor || '#c5ddf0',
    fontSize: overrides.bodyFontSize || '17px',
  };

  const labelStyle: React.CSSProperties = {
    color: overrides.labelColor || '#ffffff',
  };

  const labelBarStyle: React.CSSProperties = {
    backgroundColor: overrides.labelColor || '#ffffff',
  };

  const cardBgStyle: React.CSSProperties = {
    backgroundColor: overrides.cardBgColor || '#1976d2',
  };

  return (
    <section className="qsh-section" style={sectionStyle}>
      <div className="qsh-inner" style={innerStyle}>
        {/* Left column */}
        <div className="qsh-left">
          {/* Label row */}
          <div className="qsh-label-row">
            <div className="qsh-label-bar" style={labelBarStyle}></div>
            <span className="qsh-label" style={labelStyle}>
              {data.label}
            </span>
          </div>

          {/* Heading */}
          <HeadingTag className="qsh-heading" style={headingStyle}>
            {data.heading}
          </HeadingTag>

          {/* Body */}
          <p className="qsh-body" style={bodyStyle}>
            {data.body}
          </p>

          {/* Cards stack */}
          <div className="qsh-cards" style={{ gap: overrides.cardsGap || '18px' }}>
            {data.cards.map((card, index) => (
              <div
                key={index}
                className="qsh-card"
                style={cardBgStyle}
              >
                {/* Card header - number and title */}
                <div className="qsh-card-header">
                  <div className="qsh-card-number">
                    {card.number}
                  </div>
                  <div className="qsh-card-title">
                    {card.title}
                  </div>
                </div>

                {/* Card description */}
                <div className="qsh-card-description">
                  {card.description}
                </div>

                {/* Checks row */}
                <div className="qsh-checks">
                  {card.checks.map((check, checkIndex) => (
                    <div key={checkIndex} className="qsh-check-item">
                      <span className="qsh-check-mark">✓</span>
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="qsh-right">
          {/* Main image */}
          <div className="qsh-image-card">
            {data.imageUrl ? (
              <img
                src={data.imageUrl}
                alt={data.imageAlt || 'Safe battery handling procedures'}
              />
            ) : (
              <div style={{ width: '100%', height: '100%' }}></div>
            )}

            {/* Decorative lines */}
            <div className="qsh-decorative-line" style={{ top: '40px' }}></div>
            <div className="qsh-decorative-line" style={{ top: '170px' }}></div>
            <div className="qsh-decorative-line" style={{ top: '300px' }}></div>
            <div className="qsh-decorative-line" style={{ top: '430px' }}></div>

            {/* Stat badge */}
            <div className="qsh-stat-badge">
              <div className="qsh-stat-value">
                {data.statValue}
              </div>
              <div className="qsh-stat-label">
                {data.statLabel}
              </div>
            </div>
          </div>

          {/* Secondary smaller image */}
          {data.image2Url && (
            <div className="qsh-image-card-2">
              <img
                src={data.image2Url}
                alt={data.image2Alt || 'Battery installation detail'}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QSHandlingSection;
