import "./CabinetsAboutSection.css";

interface CabinetsAboutProps {
    label?: string;
    description?: string;
    bgColor?: string;
    labelColor?: string;
    bodyColor?: string;
    labelFontSize?: string;
    bodyFontSize?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

export default function CabinetsAboutSection({
    label = "Stationary Battery Cabinets",
    description = "Purpose-built battery cabinets engineered for safety, thermal management, and code compliance. Axion Critical Power Solutions designs and supplies stationary cabinets that protect and organize battery systems in mission-critical facilities, ensuring reliable performance and simplified maintenance access.",
    bgColor, labelColor, bodyColor, labelFontSize, bodyFontSize,
    marginTopOverlap, borderRadiusTop,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
}: CabinetsAboutProps) {
    return (
        <section className="cabinets-about-section" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
        }}>
            <div className="cabinets-about-content" style={{
                ...(paddingTop && { paddingTop }),
                ...(paddingBottom && { paddingBottom }),
                ...(paddingLeft && { paddingLeft }),
                ...(paddingRight && { paddingRight }),
            }}>
                <div className="cabinets-about-label" style={{
                    ...(labelColor && { color: labelColor }),
                    ...(labelFontSize && { fontSize: labelFontSize }),
                }}>{label}</div>
                <p className="cabinets-about-desc" style={{
                    ...(bodyColor && { color: bodyColor }),
                    ...(bodyFontSize && { fontSize: bodyFontSize }),
                }}>{description}</p>
            </div>
        </section>
    );
}
