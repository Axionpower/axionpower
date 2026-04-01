/**
 * Data fetchers for the dedicated /contact page.
 * The existing contact.ts handles the ContactSection used on the home page —
 * this file is entirely separate.
 */
import { getAxionSection } from "@/lib/queries/axion-cms";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Raw = any;

function val<T>(v: T): T | undefined {
    if (v === null || v === undefined) return undefined;
    if (typeof v === "string" && !v.trim()) return undefined;
    if (Array.isArray(v) && v.length === 0) return undefined;
    return v;
}

// ══════════════════════════════════
// HERO
// ══════════════════════════════════
export interface ContactHeroData {
    backgroundImageUrl?: string;
    badge?: string;
    heading?: string;
    description?: string;
    description2?: string;
    headingTag?: string;
    headingColor?: string;
    headingFontSize?: string;
    headingFontWeight?: string;
    headingFontFamily?: string;
    bodyColor?: string;
    bodyFontSize?: string;
    bodyFontWeight?: string;
}

export async function getContactPageHeroData(): Promise<ContactHeroData> {
    const ax = await getAxionSection<Raw>("contact", "hero");
    return {
        backgroundImageUrl: val(ax?.background_image_url),
        badge:        val(ax?.badge)        ?? "CONTACT US",
        heading:      val(ax?.heading)      ?? "Contact Axion Critical Power Solutions",
        description:  val(ax?.description)  ??
            "Axion Critical Power Solutions partners with consulting engineers, contractors, and end users to provide reliable, compliant, and long-term battery solutions. Whether you're planning a new installation, replacing aging batteries, or have technical questions, our experts are ready to assist.",
        description2: val(ax?.description2) ??
            "We provide end-to-end support, from system sizing and specification guidance to lifecycle management and compliance advice.",
        headingTag:        val(ax?.heading_tag),
        headingColor:      val(ax?.heading_color),
        headingFontSize:   val(ax?.heading_font_size),
        headingFontWeight: val(ax?.heading_font_weight),
        headingFontFamily: val(ax?.heading_font_family),
        bodyColor:         val(ax?.body_color),
        bodyFontSize:      val(ax?.body_font_size),
        bodyFontWeight:    val(ax?.body_font_weight),
    };
}

// ══════════════════════════════════
// CONTACT INFO
// ══════════════════════════════════
export interface ContactInfoData {
    phone1?: string;
    phone2?: string;
    email?: string;
    address?: string;
    hours?: string;
    emergencyPhone?: string;
}

export async function getContactPageInfoData(): Promise<ContactInfoData> {
    const ax = await getAxionSection<Raw>("contact", "contact-info");
    return {
        phone1:         val(ax?.customer_service_phone1) ?? "343 434 43435",
        phone2:         val(ax?.customer_service_phone2) ?? "334 444 4245",
        email:          val(ax?.email)   ?? "info@axionpower.com",
        address:        val(ax?.address) ?? "123 Power Street, Toronto, ON, Canada",
        hours:          val(ax?.hours)   ?? "Mon–Fri: 8:00 AM – 6:00 PM EST",
        emergencyPhone: val(ax?.emergency_phone)         ?? "245 445 34352",
    };
}

// ══════════════════════════════════
// WHY CONTACT + CTA
// ══════════════════════════════════
export interface ContactWhyData {
    heading?: string;
    description?: string;
    points?: string[];
    cta1Label?: string;
    cta1Url?: string;
    cta2Label?: string;
    cta2Url?: string;
    ctaHeading?: string;
    ctaDescription?: string;
    ctaPhone?: string;
    headingTag?: string;
    cardHeadingTag?: string;
    headingColor?: string;
    headingFontWeight?: string;
    cardTitleColor?: string;
}

const DEFAULT_POINTS = [
    "Direct access to technical experts with mission-critical power experience",
    "Guidance on VRLA and flooded battery technologies",
    "Support for UPS, DC, utility, industrial, and healthcare applications",
    "Assistance with compliance, safety, and lifecycle management",
    "Long-term partnership approach, ensuring ongoing reliability and performance",
];

export async function getContactPageWhyData(): Promise<ContactWhyData> {
    const [why, cta] = await Promise.all([
        getAxionSection<Raw>("contact", "why-contact"),
        getAxionSection<Raw>("contact", "cta"),
    ]);

    const points = Array.isArray(why?.points) && why.points.length > 0
        ? why.points.map((p: Raw) => p.text as string).filter(Boolean)
        : DEFAULT_POINTS;

    return {
        heading:        val(why?.heading)          ?? "Why Contact Axion?",
        description:    val(why?.description),
        points,
        cta1Label:      val(cta?.cta1_label)       ?? "Contact Us Today",
        cta1Url:        val(cta?.cta1_url)         ?? "#contact-form",
        cta2Label:      val(cta?.cta2_label)       ?? "Request a Quote",
        cta2Url:        val(cta?.cta2_url)         ?? "#contact-form",
        ctaHeading:     val(cta?.cta_heading)      ?? "Speak with an Expert",
        ctaDescription: val(cta?.cta_description)  ?? "Our technical team is available to answer your questions about battery systems, maintenance, and critical power solutions. Reach out today.",
        ctaPhone:       val(cta?.cta_phone)        ?? "+1 (800) 000-0000",
    };
}

// ══════════════════════════════════
// CONTACT FORM LABELS
// ══════════════════════════════════
export interface ContactFormLabels {
    // Left panel – form
    eyebrow?: string;
    heading?: string;
    emailPlaceholder?: string;
    fullNamePlaceholder?: string;
    companyPlaceholder?: string;
    phonePlaceholder?: string;
    streetPlaceholder?: string;
    cityPlaceholder?: string;
    statePlaceholder?: string;
    postalPlaceholder?: string;
    countryPlaceholder?: string;
    inquiryTypePlaceholder?: string;
    messagePlaceholder?: string;
    inquiryOptions?: string[];
    marketingConsentLabel?: string;
    privacyLinkLabel?: string;
    privacyLinkSuffix?: string;
    submitLabel?: string;
    sendingLabel?: string;
    successMessage?: string;
    // Right panel – info card
    infoEyebrow?: string;
    infoHeading?: string;
    customerServiceLabel?: string;
    emailLabel?: string;
    addressLabel?: string;
    hoursLabel?: string;
    emergencyLabel?: string;
    responseBadge?: string;
}

const DEFAULT_FORM_LABELS: ContactFormLabels = {
    eyebrow: "CONTACT FORM",
    heading: "Connect with Our Team",
    emailPlaceholder: "Email",
    fullNamePlaceholder: "Full Name",
    companyPlaceholder: "Company Name",
    phonePlaceholder: "Phone Number",
    streetPlaceholder: "Street Address",
    cityPlaceholder: "City",
    statePlaceholder: "State/Province",
    postalPlaceholder: "Postal/Zip",
    countryPlaceholder: "Country",
    inquiryTypePlaceholder: "Inquiry Type",
    messagePlaceholder: "Comment",
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
    infoHeading: "We\u2019re Here to Help",
    customerServiceLabel: "Customer Service",
    emailLabel: "General Email",
    addressLabel: "Office Location",
    hoursLabel: "Business Hours",
    emergencyLabel: "24-Hour Emergency Support",
    responseBadge: "Response within 24 hours",
};

export async function getContactFormLabels(): Promise<ContactFormLabels> {
    try {
        const ax = await getAxionSection<Raw>("contact", "form-labels");
        if (!ax) return DEFAULT_FORM_LABELS;
        return {
            eyebrow:                val(ax.eyebrow)                  ?? DEFAULT_FORM_LABELS.eyebrow,
            heading:                val(ax.heading)                  ?? DEFAULT_FORM_LABELS.heading,
            emailPlaceholder:       val(ax.email_placeholder)        ?? DEFAULT_FORM_LABELS.emailPlaceholder,
            fullNamePlaceholder:    val(ax.full_name_placeholder)    ?? DEFAULT_FORM_LABELS.fullNamePlaceholder,
            companyPlaceholder:     val(ax.company_placeholder)      ?? DEFAULT_FORM_LABELS.companyPlaceholder,
            phonePlaceholder:       val(ax.phone_placeholder)        ?? DEFAULT_FORM_LABELS.phonePlaceholder,
            streetPlaceholder:      val(ax.street_placeholder)       ?? DEFAULT_FORM_LABELS.streetPlaceholder,
            cityPlaceholder:        val(ax.city_placeholder)         ?? DEFAULT_FORM_LABELS.cityPlaceholder,
            statePlaceholder:       val(ax.state_placeholder)        ?? DEFAULT_FORM_LABELS.statePlaceholder,
            postalPlaceholder:      val(ax.postal_placeholder)       ?? DEFAULT_FORM_LABELS.postalPlaceholder,
            countryPlaceholder:     val(ax.country_placeholder)      ?? DEFAULT_FORM_LABELS.countryPlaceholder,
            inquiryTypePlaceholder: val(ax.inquiry_type_placeholder) ?? DEFAULT_FORM_LABELS.inquiryTypePlaceholder,
            messagePlaceholder:     val(ax.message_placeholder)      ?? DEFAULT_FORM_LABELS.messagePlaceholder,
            inquiryOptions:         Array.isArray(ax.inquiry_options) && ax.inquiry_options.length > 0
                                        ? ax.inquiry_options.map((o: Raw) => typeof o === "string" ? o : o.text || o.label || "").filter(Boolean)
                                        : DEFAULT_FORM_LABELS.inquiryOptions,
            marketingConsentLabel:  val(ax.marketing_consent_label)  ?? DEFAULT_FORM_LABELS.marketingConsentLabel,
            privacyLinkLabel:       val(ax.privacy_link_label)       ?? DEFAULT_FORM_LABELS.privacyLinkLabel,
            privacyLinkSuffix:      val(ax.privacy_link_suffix)      ?? DEFAULT_FORM_LABELS.privacyLinkSuffix,
            submitLabel:            val(ax.submit_label)             ?? DEFAULT_FORM_LABELS.submitLabel,
            sendingLabel:           val(ax.sending_label)            ?? DEFAULT_FORM_LABELS.sendingLabel,
            successMessage:         val(ax.success_message)          ?? DEFAULT_FORM_LABELS.successMessage,
            infoEyebrow:            val(ax.info_eyebrow)             ?? DEFAULT_FORM_LABELS.infoEyebrow,
            infoHeading:            val(ax.info_heading)             ?? DEFAULT_FORM_LABELS.infoHeading,
            customerServiceLabel:   val(ax.customer_service_label)   ?? DEFAULT_FORM_LABELS.customerServiceLabel,
            emailLabel:             val(ax.email_label)              ?? DEFAULT_FORM_LABELS.emailLabel,
            addressLabel:           val(ax.address_label)            ?? DEFAULT_FORM_LABELS.addressLabel,
            hoursLabel:             val(ax.hours_label)              ?? DEFAULT_FORM_LABELS.hoursLabel,
            emergencyLabel:         val(ax.emergency_label)          ?? DEFAULT_FORM_LABELS.emergencyLabel,
            responseBadge:          val(ax.response_badge)           ?? DEFAULT_FORM_LABELS.responseBadge,
        };
    } catch {
        return DEFAULT_FORM_LABELS;
    }
}

// ══════════════════════════════════
// GET IN TOUCH FORM CONFIG
// ══════════════════════════════════
export interface GetInTouchField {
    name: string;
    label: string;
    type: "text" | "email" | "tel" | "textarea" | "select";
    required?: boolean;
    half?: boolean;
    options?: string[];
}

export interface GetInTouchTab {
    label: string;
    fields: GetInTouchField[];
}

export interface GetInTouchConfig {
    label?: string;
    heading?: string;
    buttonLabel?: string;
    sendingLabel?: string;
    successMessage?: string;
    errorMessage?: string;
    tabs?: GetInTouchTab[];
}

const DEFAULT_GIT_TABS: GetInTouchTab[] = [
    {
        label: "Request a Quote",
        fields: [
            { name: "fullName", label: "Full Name", type: "text", required: true, half: true },
            { name: "email", label: "Email Address", type: "email", required: true, half: true },
            { name: "phone", label: "Phone", type: "tel", half: true },
            { name: "company", label: "Company / Organization", type: "select", half: true, options: ["Data Center", "Telecom Provider", "Healthcare Facility", "Utility Company", "Industrial Facility", "Government Agency", "Other"] },
            { name: "batteryType", label: "Battery Type Required", type: "select", half: true, options: ["VRLA", "Wet Cell / Flooded", "Lithium-Ion", "Not Sure"] },
            { name: "quantity", label: "Estimated Quantity", type: "text", half: true },
            { name: "projectTimeline", label: "Project Timeline", type: "text", half: true },
            { name: "budget", label: "Budget Range", type: "select", half: true, options: ["Under $10,000", "$10,000 - $50,000", "$50,000 - $100,000", "$100,000+", "Not Sure"] },
            { name: "message", label: "Project Details / Special Requirements", type: "textarea", required: true },
        ],
    },
    {
        label: "Technical Inquiry",
        fields: [
            { name: "fullName", label: "Full Name", type: "text", required: true, half: true },
            { name: "email", label: "Email Address", type: "email", required: true, half: true },
            { name: "phone", label: "Phone", type: "tel", half: true },
            { name: "jobTitle", label: "Job Title / Role", type: "text", half: true },
            { name: "company", label: "Company / Organization", type: "select", half: true, options: ["Data Center", "Telecom Provider", "Healthcare Facility", "Utility Company", "Industrial Facility", "Government Agency", "Other"] },
            { name: "inquiryTopic", label: "Inquiry Topic", type: "select", half: true, options: ["Battery Sizing & Selection", "UPS Integration", "Maintenance & Testing", "Environmental Requirements", "Compliance & Standards", "Other"] },
            { name: "message", label: "Technical Question / Details", type: "textarea", required: true },
        ],
    },
    {
        label: "General Information",
        fields: [
            { name: "fullName", label: "Full Name", type: "text", required: true, half: true },
            { name: "email", label: "Email Address", type: "email", required: true, half: true },
            { name: "phone", label: "Phone", type: "tel", half: true },
            { name: "company", label: "Company / Organization", type: "select", half: true, options: ["Data Center", "Telecom Provider", "Healthcare Facility", "Utility Company", "Industrial Facility", "Government Agency", "Other"] },
            { name: "message", label: "Message", type: "textarea", required: true },
        ],
    },
];

export const DEFAULT_GET_IN_TOUCH: GetInTouchConfig = {
    label: "Get In Touch",
    heading: "Let\u2019s Work Together For Your\nNext Projects",
    buttonLabel: "Send Message",
    sendingLabel: "Sending...",
    successMessage: "Your message has been sent successfully! We\u2019ll get back to you soon.",
    errorMessage: "Something went wrong. Please try again later.",
    tabs: DEFAULT_GIT_TABS,
};

export async function getGetInTouchData(): Promise<GetInTouchConfig> {
    try {
        const ax = await getAxionSection<Raw>("home", "getintouch");
        if (!ax) return DEFAULT_GET_IN_TOUCH;
        return {
            label:          val(ax.label)           ?? DEFAULT_GET_IN_TOUCH.label,
            heading:        val(ax.heading)         ?? DEFAULT_GET_IN_TOUCH.heading,
            buttonLabel:    val(ax.button_label)    ?? DEFAULT_GET_IN_TOUCH.buttonLabel,
            sendingLabel:   val(ax.sending_label)   ?? DEFAULT_GET_IN_TOUCH.sendingLabel,
            successMessage: val(ax.success_message) ?? DEFAULT_GET_IN_TOUCH.successMessage,
            errorMessage:   val(ax.error_message)   ?? DEFAULT_GET_IN_TOUCH.errorMessage,
            tabs: Array.isArray(ax.tabs) && ax.tabs.length > 0
                ? ax.tabs.map((tab: Raw) => ({
                    label: tab.label || "",
                    fields: Array.isArray(tab.fields)
                        ? tab.fields.map((f: Raw) => ({
                            name:     f.name     || "",
                            label:    f.label    || "",
                            type:     f.type     || "text",
                            required: f.required ?? false,
                            half:     f.half     ?? false,
                            options:  Array.isArray(f.options) ? f.options.map((o: Raw) => typeof o === "string" ? o : o.value || "") : undefined,
                        }))
                        : [],
                }))
                : DEFAULT_GET_IN_TOUCH.tabs,
        };
    } catch {
        return DEFAULT_GET_IN_TOUCH;
    }
}
