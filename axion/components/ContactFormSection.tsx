"use client";

import { useState } from "react";
import "./ContactFormSection.css";
import type { ContactInfoData, ContactFormLabels, CmsFormConfig, CmsFormField } from "@/lib/queries/contact-page";
import { DEFAULT_CMS_FORM_CONFIG } from "@/lib/queries/contact-page";

interface Props {
    contactInfo: ContactInfoData;
    labels?: ContactFormLabels;
    formConfig?: CmsFormConfig;
}

export default function ContactFormSection({ contactInfo, labels, formConfig }: Props) {
    const config = formConfig ?? DEFAULT_CMS_FORM_CONFIG;
    const fields = config.fields ?? DEFAULT_CMS_FORM_CONFIG.fields;

    const [formData, setFormData] = useState<Record<string, string>>({});
    const [marketing, setMarketing] = useState(false);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const infoHeading   = labels?.infoHeading   ?? "Contact Details";
    const customerLabel = labels?.customerServiceLabel ?? "Customer Service";
    const emailLabel    = labels?.emailLabel    ?? "General Email";
    const addressLabel  = labels?.addressLabel  ?? "Office Location";
    const hoursLabel    = labels?.hoursLabel    ?? "Business Hours";
    const emergencyLabel = labels?.emergencyLabel ?? "24-Hour Emergency";
    const responseBadge = labels?.responseBadge ?? "Response within 24 hours";
    const privacyLabel  = labels?.privacyLinkLabel ?? "Privacy Policy";
    const privacySuffix = labels?.privacyLinkSuffix ?? "for marketing and communications terms.";
    const marketingLabel = labels?.marketingConsentLabel ?? "I agree to receive marketing communications";
    const sendingLabel  = labels?.sendingLabel  ?? "Sending…";
    const submitLabel   = config.submitLabel    ?? labels?.submitLabel ?? "Submit";
    const successMsg    = config.successMessage ?? labels?.successMessage ?? "✓ Message sent!";

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
                body: JSON.stringify({
                    ...formData,
                    marketingConsent: marketing,
                    formType: formData.inquiryType || "Contact Us",
                }),
            });
            if (res.ok) {
                setStatus("success");
                setFormData({});
                setMarketing(false);
                setTimeout(() => setStatus("idle"), 7000);
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

    /* ── Pair up half-width fields into rows ── */
    const renderFields = () => {
        const rows: React.ReactNode[] = [];
        let i = 0;
        while (i < fields.length) {
            const f = fields[i];
            const next = fields[i + 1];
            if (f.half && next?.half) {
                rows.push(
                    <div className="cfs-row-2" key={`row-${i}`}>
                        {renderField(f)}
                        {renderField(next)}
                    </div>
                );
                i += 2;
            } else {
                rows.push(renderField(f, `solo-${i}`));
                i += 1;
            }
        }
        return rows;
    };

    const renderField = (f: CmsFormField, keyOverride?: string) => {
        const key = keyOverride ?? f.name;
        if (f.type === "textarea") {
            return (
                <div className="cfs-field" key={key}>
                    <label className="cfs-label">{f.label}{f.required && <span className="cfs-required">*</span>}</label>
                    <textarea
                        className="cfs-input cfs-textarea"
                        name={f.name}
                        placeholder={f.placeholder}
                        required={f.required}
                        rows={4}
                        value={formData[f.name] || ""}
                        onChange={handleChange}
                    />
                </div>
            );
        }
        if (f.type === "select") {
            return (
                <div className="cfs-field" key={key}>
                    <label className="cfs-label">{f.label}{f.required && <span className="cfs-required">*</span>}</label>
                    <div className="cfs-select-wrap">
                        <select
                            className="cfs-input cfs-select"
                            name={f.name}
                            required={f.required}
                            value={formData[f.name] || ""}
                            onChange={handleChange}
                        >
                            <option value="" disabled>{f.placeholder || `Select ${f.label}`}</option>
                            {(f.options ?? []).map((opt, idx) => (
                                <option key={idx} value={opt}>{opt}</option>
                            ))}
                        </select>
                        <svg className="cfs-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            );
        }
        return (
            <div className="cfs-field" key={key}>
                <label className="cfs-label">{f.label}{f.required && <span className="cfs-required">*</span>}</label>
                <input
                    className="cfs-input"
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    required={f.required}
                    value={formData[f.name] || ""}
                    onChange={handleChange}
                />
            </div>
        );
    };

    return (
        <section className="cfs-section" id="contact-form">
            <div className="cfs-inner">

                {/* ── Section header ── */}
                <div className="cfs-header">
                    <span className="cfs-eyebrow">CONTACT FORM</span>
                    <h2 className="cfs-title">{config.heading}</h2>
                    {config.subheading && <p className="cfs-subtitle">{config.subheading}</p>}
                </div>

                <div className="cfs-grid">

                    {/* ══════════════════════════════
                        LEFT — DYNAMIC FORM
                    ══════════════════════════════ */}
                    <div className="cfs-form-card">

                        <form onSubmit={handleSubmit} noValidate className="cfs-form">
                            {renderFields()}

                            {/* Marketing consent */}
                            <label className="cfs-check-label">
                                <span className={`cfs-checkbox-box ${marketing ? "checked" : ""}`} onClick={() => setMarketing(!marketing)} role="checkbox" aria-checked={marketing} tabIndex={0} onKeyDown={e => e.key === " " && setMarketing(!marketing)}>
                                    {marketing && (
                                        <svg viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth={2.2} aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                                        </svg>
                                    )}
                                </span>
                                <input type="checkbox" className="cfs-checkbox-hidden" checked={marketing} onChange={e => setMarketing(e.target.checked)} />
                                <span className="cfs-check-text">{marketingLabel}</span>
                            </label>

                            {/* Privacy */}
                            <p className="cfs-privacy">
                                <a href="/privacy" className="cfs-privacy-link">{privacyLabel}</a>
                                {" "}{privacySuffix}
                            </p>

                            {/* Submit row */}
                            <div className="cfs-submit-row">
                                <button type="submit" className="cfs-submit-btn" disabled={status === "sending"}>
                                    {status === "sending" ? (
                                        <><span className="cfs-spinner" />{sendingLabel}</>
                                    ) : (
                                        <>{submitLabel}
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Status messages */}
                            {status === "success" && (
                                <div className="cfs-status cfs-status--ok">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                                    {successMsg}
                                </div>
                            )}
                            {status === "error" && (
                                <div className="cfs-status cfs-status--err">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
                                    {errorMsg || "Something went wrong. Please try again."}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* ══════════════════════════════
                        RIGHT — CONTACT INFO
                    ══════════════════════════════ */}
                    <div className="cfs-info-col">

                        {/* Contact card */}
                        <div className="cfs-info-card">
                            <div className="cfs-info-card-top">
                                <h3 className="cfs-info-heading">{infoHeading}</h3>
                                <span className="cfs-response-badge">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    {responseBadge}
                                </span>
                            </div>

                            <ul className="cfs-info-list">
                                <li className="cfs-info-item">
                                    <span className="cfs-info-icon cfs-info-icon--phone">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                                    </span>
                                    <div>
                                        <p className="cfs-info-label">{customerLabel}</p>
                                        <p className="cfs-info-val">{[contactInfo.phone1, contactInfo.phone2].filter(Boolean).join("  ·  ") || "—"}</p>
                                    </div>
                                </li>

                                <li className="cfs-info-item">
                                    <span className="cfs-info-icon cfs-info-icon--email">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                                    </span>
                                    <div>
                                        <p className="cfs-info-label">{emailLabel}</p>
                                        <a href={`mailto:${contactInfo.email}`} className="cfs-info-link">{contactInfo.email || "info@axionpower.ca"}</a>
                                    </div>
                                </li>

                                <li className="cfs-info-item">
                                    <span className="cfs-info-icon cfs-info-icon--location">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                                    </span>
                                    <div>
                                        <p className="cfs-info-label">{addressLabel}</p>
                                        <p className="cfs-info-val">{contactInfo.address || "Toronto, ON, Canada"}</p>
                                    </div>
                                </li>

                                <li className="cfs-info-item">
                                    <span className="cfs-info-icon cfs-info-icon--clock">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                                    </span>
                                    <div>
                                        <p className="cfs-info-label">{hoursLabel}</p>
                                        <p className="cfs-info-val">{contactInfo.hours || "Mon–Fri, 8 AM – 5 PM ET"}</p>
                                    </div>
                                </li>

                                {contactInfo.emergencyPhone && (
                                    <li className="cfs-info-item cfs-info-item--emergency">
                                        <span className="cfs-info-icon cfs-info-icon--emergency">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>
                                        </span>
                                        <div>
                                            <p className="cfs-info-label">{emergencyLabel}</p>
                                            <a href={`tel:${contactInfo.emergencyPhone}`} className="cfs-info-link cfs-info-link--emergency">{contactInfo.emergencyPhone}</a>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>

                        {/* Map placeholder card */}
                        <div className="cfs-map-card">
                            <div className="cfs-map-bg" aria-hidden="true">
                                <div className="cfs-map-grid" />
                                <div className="cfs-map-pin-dot" />
                            </div>
                            <div className="cfs-map-body">
                                <svg className="cfs-map-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <div>
                                    <p className="cfs-map-title">Office Location</p>
                                    <p className="cfs-map-sub">Serving Canada &amp; North America</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
