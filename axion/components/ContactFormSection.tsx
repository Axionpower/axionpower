"use client";

import { useState } from "react";
import "./ContactFormSection.css";
import type { ContactInfoData, ContactFormLabels } from "@/lib/queries/contact-page";

interface Props {
    contactInfo: ContactInfoData;
    labels?: ContactFormLabels;
}

const DEFAULT_LABELS: ContactFormLabels = {
    eyebrow: "CONTACT FORM",
    heading: "Send Us a Message",
    emailPlaceholder: "your@company.com",
    fullNamePlaceholder: "John Smith",
    companyPlaceholder: "Acme Corp",
    phonePlaceholder: "+1 (555) 000-0000",
    streetPlaceholder: "123 Main Street",
    cityPlaceholder: "City",
    statePlaceholder: "State/Province",
    postalPlaceholder: "Postal/Zip",
    countryPlaceholder: "Country",
    inquiryTypePlaceholder: "Select an inquiry type",
    messagePlaceholder: "Tell us about your project or question...",
    inquiryOptions: [
        "Login or account help",
        "Connect Partner Portal help",
        "Product Information",
        "Request a Quote",
        "Technical Information",
        "Warranty Information",
        "Comment",
    ],
    marketingConsentLabel: "I agree to receive marketing communications",
    privacyLinkLabel: "Privacy Policy",
    privacyLinkSuffix: "for consented and authorized marketing and communications terms and conditions.",
    submitLabel: "Submit",
    sendingLabel: "Sending\u2026",
    successMessage: "\u2713 Message sent! We\u2019ll respond within 1 business day.",
    infoEyebrow: "GET IN TOUCH",
    infoHeading: "Contact Details",
    customerServiceLabel: "Customer Service",
    emailLabel: "General Email",
    addressLabel: "Office Location",
    hoursLabel: "Business Hours",
    emergencyLabel: "24-Hour Emergency Support",
    responseBadge: "Response within 24 hours",
};

export default function ContactFormSection({ contactInfo, labels }: Props) {
    const L = { ...DEFAULT_LABELS, ...labels };

    const [formData, setFormData] = useState<Record<string, string>>({});
    const [marketing, setMarketing] = useState(false);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, marketingConsent: marketing, formType: formData.inquiryType || "Contact Us" }),
            });
            if (res.ok) {
                setStatus("success");
                setFormData({});
                setMarketing(false);
                setTimeout(() => setStatus("idle"), 6000);
            } else {
                const body = await res.json().catch(() => ({}));
                setErrorMsg(body.error || "Something went wrong.");
                setStatus("error");
                setTimeout(() => setStatus("idle"), 6000);
            }
        } catch {
            setErrorMsg("Network error. Please try again.");
            setStatus("error");
            setTimeout(() => setStatus("idle"), 6000);
        }
    };

    const inquiryOptions = L.inquiryOptions ?? DEFAULT_LABELS.inquiryOptions ?? [];

    return (
        <section className="cfs-section" id="contact-form">
            <div className="cfs-inner">
                <div className="cfs-grid">

                    {/* LEFT: FORM CARD */}
                    <div className="cfs-card">
                        <div className="cfs-card-accent" aria-hidden="true" />
                        <div className="cfs-card-body">
                            <h2 className="cfs-heading">{L.heading}</h2>
                            <p className="cfs-subheading">Fill in the form and we&apos;ll get back to you shortly.</p>

                            <form onSubmit={handleSubmit} noValidate className="cfs-form">

                                {/* Row 1: Email | Full Name */}
                                <div className="cfs-row-2">
                                    <div className="cfs-field">
                                        <label className="cfs-label">EMAIL ADDRESS</label>
                                        <input className="cfs-input" type="email" name="email"
                                            placeholder={L.emailPlaceholder} required
                                            value={formData.email || ""} onChange={handleChange} />
                                    </div>
                                    <div className="cfs-field">
                                        <label className="cfs-label">FULL NAME</label>
                                        <input className="cfs-input" type="text" name="fullName"
                                            placeholder={L.fullNamePlaceholder} required
                                            value={formData.fullName || ""} onChange={handleChange} />
                                    </div>
                                </div>

                                {/* Row 2: Company | Phone */}
                                <div className="cfs-row-2">
                                    <div className="cfs-field">
                                        <label className="cfs-label">COMPANY NAME</label>
                                        <input className="cfs-input" type="text" name="company"
                                            placeholder={L.companyPlaceholder}
                                            value={formData.company || ""} onChange={handleChange} />
                                    </div>
                                    <div className="cfs-field">
                                        <label className="cfs-label">PHONE NUMBER</label>
                                        <input className="cfs-input" type="tel" name="phone"
                                            placeholder={L.phonePlaceholder}
                                            value={formData.phone || ""} onChange={handleChange} />
                                    </div>
                                </div>

                                {/* Street Address */}
                                <div className="cfs-field">
                                    <label className="cfs-label">STREET ADDRESS</label>
                                    <input className="cfs-input" type="text" name="streetAddress"
                                        placeholder={L.streetPlaceholder}
                                        value={formData.streetAddress || ""} onChange={handleChange} />
                                </div>

                                {/* Row: City | State | Postal */}
                                <div className="cfs-row-3">
                                    <div className="cfs-field">
                                        <label className="cfs-label">CITY</label>
                                        <input className="cfs-input" type="text" name="city"
                                            placeholder={L.cityPlaceholder}
                                            value={formData.city || ""} onChange={handleChange} />
                                    </div>
                                    <div className="cfs-field">
                                        <label className="cfs-label">STATE / PROVINCE</label>
                                        <input className="cfs-input" type="text" name="stateProvince"
                                            placeholder={L.statePlaceholder}
                                            value={formData.stateProvince || ""} onChange={handleChange} />
                                    </div>
                                    <div className="cfs-field">
                                        <label className="cfs-label">POSTAL / ZIP</label>
                                        <input className="cfs-input" type="text" name="postalCode"
                                            placeholder={L.postalPlaceholder}
                                            value={formData.postalCode || ""} onChange={handleChange} />
                                    </div>
                                </div>

                                {/* Country */}
                                <div className="cfs-field">
                                    <label className="cfs-label">COUNTRY</label>
                                    <input className="cfs-input" type="text" name="country"
                                        placeholder={L.countryPlaceholder}
                                        value={formData.country || ""} onChange={handleChange} />
                                </div>

                                {/* Inquiry Type — dropdown */}
                                <div className="cfs-field">
                                    <label className="cfs-label">INQUIRY TYPE</label>
                                    <div className="cfs-select-wrapper">
                                        <select
                                            className="cfs-select"
                                            name="inquiryType"
                                            value={formData.inquiryType || ""}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>{L.inquiryTypePlaceholder}</option>
                                            {inquiryOptions.map((opt, i) => (
                                                <option key={i} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                        <svg className="cfs-select-chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Comment */}
                                <div className="cfs-field">
                                    <label className="cfs-label">COMMENT</label>
                                    <textarea className="cfs-textarea" name="message"
                                        placeholder={L.messagePlaceholder} rows={4}
                                        value={formData.message || ""} onChange={handleChange} />
                                </div>

                                {/* Marketing consent */}
                                <label className="cfs-checkbox-label">
                                    <input type="checkbox" className="cfs-checkbox"
                                        checked={marketing}
                                        onChange={e => setMarketing(e.target.checked)} />
                                    {L.marketingConsentLabel}
                                </label>

                                {/* Privacy */}
                                <p className="cfs-privacy">
                                    <a href="/privacy" className="cfs-privacy-link">{L.privacyLinkLabel}</a>
                                    {" "}{L.privacyLinkSuffix}
                                </p>

                                {/* Submit */}
                                <div className="cfs-submit-row">
                                    <button type="submit" className="cfs-submit-btn" disabled={status === "sending"}>
                                        {status === "sending" ? L.sendingLabel : L.submitLabel}
                                        {status !== "sending" && (
                                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        )}
                                    </button>
                                    {status === "success" && <p className="cfs-status cfs-status--ok">{L.successMessage}</p>}
                                    {status === "error" && <p className="cfs-status cfs-status--err">{errorMsg || "Something went wrong."}</p>}
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT: CONTACT DETAILS CARD */}
                    <div className="ci-stack">

                        {/* Card 1: Contact Details */}
                        <div className="ci-details-card">
                            <div className="ci-card-accent" aria-hidden="true" />
                            <div className="ci-card-body">
                                <h3 className="ci-heading">{L.infoHeading}</h3>

                                <div className="ci-item">
                                    <span className="ci-icon-emoji">📞</span>
                                    <div className="ci-body">
                                        <p className="ci-item-label">{L.customerServiceLabel}</p>
                                        <p className="ci-val">
                                            {[contactInfo.phone1, contactInfo.phone2].filter(Boolean).join(" | ") || "343 434 43435 | 334 444 4245"}
                                        </p>
                                    </div>
                                </div>

                                <div className="ci-item">
                                    <span className="ci-icon-emoji">✉️</span>
                                    <div className="ci-body">
                                        <p className="ci-item-label">{L.emailLabel}</p>
                                        <a href={`mailto:${contactInfo.email}`} className="ci-link">{contactInfo.email || "info@axionpower.ca"}</a>
                                    </div>
                                </div>

                                <div className="ci-item">
                                    <span className="ci-icon-emoji">📍</span>
                                    <div className="ci-body">
                                        <p className="ci-item-label">{L.addressLabel}</p>
                                        <p className="ci-val">{contactInfo.address || "To be confirmed"}</p>
                                    </div>
                                </div>

                                <div className="ci-item ci-item--last">
                                    <span className="ci-icon-emoji">🕐</span>
                                    <div className="ci-body">
                                        <p className="ci-item-label">{L.hoursLabel}</p>
                                        <p className="ci-val">{contactInfo.hours || "Mon\u2013Fri, 8:00 AM \u2013 5:00 PM ET"}</p>
                                    </div>
                                </div>

                                {contactInfo.emergencyPhone && (
                                    <div className="ci-item ci-item--last ci-item--emergency">
                                        <span className="ci-icon-emoji">🚨</span>
                                        <div className="ci-body">
                                            <p className="ci-item-label">{L.emergencyLabel}</p>
                                            <a href={`tel:${contactInfo.emergencyPhone}`} className="ci-link">{contactInfo.emergencyPhone}</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Card 2: Office Location */}
                        <div className="ci-map-card">
                            <div className="ci-map-content">
                                <span className="ci-map-pin">📍</span>
                                <div>
                                    <p className="ci-map-title">Office Location Map</p>
                                    <p className="ci-map-sub">Serving clients across Canada &amp; North America</p>
                                </div>
                            </div>
                            <div className="ci-map-accent-lines" aria-hidden="true">
                                <div className="ci-map-line" />
                                <div className="ci-map-line" />
                                <div className="ci-map-line" />
                            </div>
                        </div>

                        {/* Response time badge */}
                        <div className="ci-response-badge">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span>{L.responseBadge}</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
