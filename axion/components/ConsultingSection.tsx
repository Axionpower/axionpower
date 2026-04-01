import Image from "next/image";
import Link from "next/link";
import "./ConsultingSection.css";
import type { ConsultingData } from "@/lib/queries/consulting";

interface Props {
    data: ConsultingData;
}

export default function ConsultingSection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h2') as React.ElementType;

    return (
        <section className="consulting-section">
            <div className="consulting-container">
                {/* Left Content */}
                <div className="consulting-left">
                    <div className="consulting-label">
                        <span className="consulting-label-bar" />
                        <span className="consulting-label-text" style={{ ...(data.labelColor && { color: data.labelColor }) }}>{data.labelText}</span>
                    </div>
                    <HeadingTag className="consulting-heading" style={{ ...(data.headingColor && { color: data.headingColor }) }}>{data.heading}</HeadingTag>
                    <p className="consulting-desc" style={{ ...(data.bodyColor && { color: data.bodyColor }) }}>{data.description}</p>
                    <Link href={data.buttonUrl || "#"} className="consulting-btn">
                        {data.buttonLabel}
                    </Link>
                </div>

                {/* Right Image with Tooltip Cards */}
                <div className="consulting-right">
                    <div className="consulting-image-wrap">
                        <Image
                            src={data.image?.node?.sourceUrl || data.fallbackImage}
                            alt={data.image?.node?.altText || "Consulting Engineers"}
                            width={420}
                            height={500}
                            className="consulting-image"
                        />
                    </div>

                    <div className="consulting-tooltips">
                        {data.tooltips.map((tt: string, i: number) => (
                            <div key={i} className={`consulting-tooltip tt-${i + 1}`}>
                                {tt}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
