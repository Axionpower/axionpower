import "./FaqSection.css";
import type { FaqData, FaqItem } from "@/lib/queries/faq";

interface Props {
    data: FaqData;
}

export default function FaqSection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h2') as React.ElementType;
    const CardTag = (data.cardHeadingTag || 'h3') as React.ElementType;

    return (
        <section className="faq-section" style={{ background: data.bgColor }}>
            <div className="faq-container">
                {/* Header Row */}
                <div className="faq-header">
                    <div className="faq-label">
                        <span className="faq-label-bar" />
                        <span className="faq-label-text" style={{ ...(data.labelColor && { color: data.labelColor }) }}>{data.labelText}</span>
                    </div>
                    <div className="faq-header-content">
                        <HeadingTag className="faq-main-heading" style={{ ...(data.headingColor && { color: data.headingColor }) }}>{data.heading}</HeadingTag>
                        <p
                            className="faq-intro"
                            style={{ ...(data.bodyColor && { color: data.bodyColor }) }}
                            dangerouslySetInnerHTML={{ __html: data.introText }}
                        />
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="faq-list">
                    {data.faqs.map((faq: FaqItem, i: number) => (
                        <div key={i} className="faq-item">
                            <div className="faq-question-side">
                                <span className="faq-number">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <CardTag className="faq-question" style={{ ...(data.cardTitleColor && { color: data.cardTitleColor }) }}>{faq.question}</CardTag>
                            </div>
                            <div className="faq-answer">
                                <ul>
                                    {faq.answers.map((a: string, j: number) => (
                                        <li key={j}>{a}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
