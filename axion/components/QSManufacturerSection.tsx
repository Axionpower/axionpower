import React from 'react';
import { QSManufacturerData } from '@/lib/queries/quality-safety';
import { SectionOverrides } from '@/lib/queries/sustainability';
import './QSManufacturerSection.css';

interface QSManufacturerSectionProps {
  data: QSManufacturerData;
}

const QSManufacturerSection: React.FC<QSManufacturerSectionProps> = ({ data }) => {
  // Extract overrides
  const overrides = data.overrides || {};
  const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;
  const CardTag = (overrides.cardHeadingTag || 'h3') as React.ElementType;

  // Style values with fallbacks to defaults
  const sectionStyle: React.CSSProperties = {
    backgroundColor: overrides.bgColor || '#0a0e1a',
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
    color: overrides.bodyColor || '#8aaabb',
    fontSize: overrides.bodyFontSize || '17px',
  };

  const labelStyle: React.CSSProperties = {
    color: overrides.labelColor || '#1e88e5',
  };

  const labelBarStyle: React.CSSProperties = {
    backgroundColor: overrides.labelColor || '#1e88e5',
  };

  const cardBgStyle: React.CSSProperties = {
    backgroundColor: overrides.cardBgColor || '#0d1b2a',
  };

  return (
    <section className="qsm-section" style={sectionStyle}>
      <div className="qsm-inner" style={innerStyle}>
        {/* Left column */}
        <div className="qsm-left">
          {/* Label row */}
          <div className="qsm-label-row">
            <div className="qsm-label-bar" style={labelBarStyle}></div>
            <span className="qsm-label" style={labelStyle}>
              {data.label}
            </span>
          </div>

          {/* Heading */}
          <HeadingTag className="qsm-heading" style={headingStyle}>
            {data.heading}
          </HeadingTag>

          {/* Body */}
          <p className="qsm-body" style={bodyStyle}>
            {data.body}
          </p>

          {/* Timeline */}
          <div className="qsm-timeline">
            <div className="qsm-steps">
              {data.steps.map((step, index) => (
                <div
                  key={index}
                  className="qsm-step"
                  style={cardBgStyle}
                >
                  {/* Connector line color */}
                  <style>{`
                    .qsm-step:nth-child(${index + 1})::before {
                      background-color: ${step.connectorColor || '#1e88e5'};
                    }
                  `}</style>

                  {/* Step number */}
                  <div
                    className="qsm-step-number"
                    style={{ color: step.numberColor || '#1e88e5' }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="qsm-step-icon">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="qsm-step-content">
                    <div className="qsm-step-title">
                      {step.title}
                    </div>
                    <div className="qsm-step-description">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="qsm-right">
          <div className="qsm-image-card">
            {data.imageUrl ? (
              <img
                src={data.imageUrl}
                alt={data.imageAlt || 'Manufacturer quality assurance'}
              />
            ) : (
              <div style={{ width: '100%', height: '100%' }}></div>
            )}

            {/* Decorative lines */}
            <div className="qsm-decorative-line" style={{ top: '40px' }}></div>
            <div className="qsm-decorative-line" style={{ top: '170px' }}></div>
            <div className="qsm-decorative-line" style={{ top: '300px' }}></div>
            <div className="qsm-decorative-line" style={{ top: '430px' }}></div>

            {/* Quality score badge */}
            <div className="qsm-score-badge" style={{ backgroundColor: overrides.bgColor || '#0a0e1a' }}>
              <div className="qsm-score-label">
                {data.qualityScoreLabel}
              </div>
              <div className="qsm-score-value" style={{ color: overrides.labelColor || '#1e88e5' }}>
                {data.qualityScoreValue}
              </div>
              <div className="qsm-score-sub">
                {data.qualityScoreSub}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QSManufacturerSection;
