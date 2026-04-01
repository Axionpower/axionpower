import { getAxionSection } from "@/lib/queries/axion-cms";

type Raw = Record<string, unknown>;
const val = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);
const arr = (v: unknown): Raw[] => (Array.isArray(v) && v.length > 0 ? (v as Raw[]) : []);

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
export interface USCircuitNode { label: string; color: string; }
export interface USHeroData {
    breadcrumb: string;
    pill: string;
    headingLine1: string;
    headingAccent: string;
    headingLine2: string;
    accentBarWidth: string;
    subtitle: string;
    btn1Label: string; btn1Url: string;
    btn2Label: string; btn2Url: string;
    badges: string[];
    imageCaption: string;
    imageBadgeText: string;
    circuitNodes: USCircuitNode[];
}
export async function getUSHeroData(): Promise<USHeroData> {
    const sec = await getAxionSection<Raw>("utilities-substations", "hero");
    return {
        breadcrumb:     val(sec?.breadcrumb)       ?? "INDUSTRIES  /  UTILITIES & SUBSTATIONS",
        pill:           val(sec?.pill)             ?? "⚡  UTILITIES & SUBSTATIONS",
        headingLine1:   val(sec?.heading_line1)    ?? "Reliable Battery\nSystems for",
        headingAccent:  val(sec?.heading_accent)   ?? "Utility &",
        headingLine2:   val(sec?.heading_line2)    ?? "Substation Use",
        accentBarWidth: val(sec?.accent_bar_width) ?? "320px",
        subtitle:       val(sec?.subtitle)         ?? "VRLA and flooded battery systems, engineering support, and full lifecycle services for mission-critical DC power.",
        btn1Label:      val(sec?.btn1_label)       ?? "Explore Battery Solutions →",
        btn1Url:        val(sec?.btn1_url)         ?? "/contact",
        btn2Label:      val(sec?.btn2_label)       ?? "Talk to an Engineer ↗",
        btn2Url:        val(sec?.btn2_url)         ?? "/contact",
        badges:         arr(sec?.badges).map((b) => val(b.text) ?? "").filter(Boolean),
        imageCaption:   val(sec?.image_caption)    ?? "📷  Transmission Substation, ON",
        imageBadgeText: val(sec?.image_badge_text) ?? "LIVE DC SYSTEM",
        circuitNodes:   arr(sec?.circuit_nodes).map((n) => ({
            label: val(n.label) ?? "",
            color: val(n.color) ?? "#63def7",
        })),
    };
}

/* ─── Applications ──────────────────────────────────────────────────────────── */
export interface USApplication { number: string; icon: string; title: string; description: string; }
export interface USApplicationsData {
    label: string;
    heading: string;
    description: string;
    apps: USApplication[];
}
export async function getUSApplicationsData(): Promise<USApplicationsData> {
    const sec = await getAxionSection<Raw>("utilities-substations", "applications");
    return {
        label:       val(sec?.label)       ?? "APPLICATIONS",
        heading:     val(sec?.heading)     ?? "Powering Every Layer of the Grid",
        description: val(sec?.description) ?? "From transmission to distribution — Axion delivers proven battery backup for every critical control and protection function.",
        apps: arr(sec?.applications).map((a, i) => ({
            number:      val(a.number)      ?? String(i + 1).padStart(2, "0"),
            icon:        val(a.icon)        ?? "",
            title:       val(a.title)       ?? "",
            description: val(a.description) ?? "",
        })),
    };
}

/* ─── Battery Technologies ──────────────────────────────────────────────────── */
export interface USBatteryFeature { text: string; }
export interface USBatteryTech {
    icon: string;
    tag: string;
    tagColor: string;
    title: string;
    subtitle: string;
    description: string;
    features: USBatteryFeature[];
}
export interface USBatteryTechData {
    label: string;
    heading: string;
    description: string;
    quote: string;
    imageCaption: string;
    techs: USBatteryTech[];
}
export async function getUSBatteryTechData(): Promise<USBatteryTechData> {
    const sec = await getAxionSection<Raw>("utilities-substations", "battery-technologies");
    return {
        label:        val(sec?.label)        ?? "BATTERY TECHNOLOGIES",
        heading:      val(sec?.heading)      ?? "The Right Technology for Every Substation",
        description:  val(sec?.description)  ?? "Axion provides guidance to select the right battery technology based on substation class, maintenance capacity, and IEEE requirements.",
        quote:        val(sec?.quote)        ?? "\"The right battery technology makes all the difference.\"",
        imageCaption: val(sec?.image_caption) ?? "📷  Battery Room — Transmission Substation",
        techs: arr(sec?.techs).map((t) => ({
            icon:        val(t.icon)        ?? "🔋",
            tag:         val(t.badge)       ?? "",
            tagColor:    val(t.badge_color) ?? "rgba(99,222,247,1)",
            title:       val(t.name)        ?? "",
            subtitle:    val(t.subtitle)    ?? "",
            description: val(t.description) ?? "",
            features:    typeof t.features === "string" && t.features.trim()
                ? t.features.split("\n").map((f) => f.trim()).filter(Boolean).map((f) => ({ text: f }))
                : arr(t.features).map((f) => ({ text: val(f.text) ?? "" })),
        })),
    };
}

/* ─── Engineering Support ───────────────────────────────────────────────────── */
export interface USEngService { icon: string; title: string; description: string; }
export interface USWorksheetRow { label: string; value: string; valueColor?: string; }
export interface USEngineeringData {
    label: string;
    heading: string;
    description: string;
    services: USEngService[];
    worksheetTitle: string;
    worksheetRows: USWorksheetRow[];
    worksheetNote: string;
}
export async function getUSEngineeringData(): Promise<USEngineeringData> {
    const sec = await getAxionSection<Raw>("utilities-substations", "engineering-support");
    return {
        label:          val(sec?.label)          ?? "ENGINEERING & SPECIFICATION SUPPORT",
        heading:        val(sec?.heading)        ?? "Your Technical\nPartner from\nDay One.",
        description:    val(sec?.description)    ?? "Axion acts as a technical partner throughout the specification and design process — from sizing to installation coordination.",
        worksheetTitle: val(sec?.worksheet_title) ?? "DC BATTERY SYSTEM — SIZING WORKSHEET",
        worksheetNote:  val(sec?.worksheet_note)  ?? "📐  Sizing worksheet — IEEE 485 compliant calculation",
        services: arr(sec?.services).map((s) => ({
            icon:        val(s.icon)        ?? "",
            title:       val(s.title)       ?? "",
            description: val(s.description) ?? "",
        })),
        worksheetRows: arr(sec?.worksheet_rows).map((r) => ({
            label:      val(r.label)       ?? "",
            value:      val(r.value)       ?? "",
            valueColor: val(r.value_color) ?? undefined,
        })),
    };
}

/* ─── Quality & Compliance ──────────────────────────────────────────────────── */
export interface USComplianceBadge { icon: string; title: string; subtitle: string; }
export interface USQualityStat { value: string; label: string; }
export interface USComplianceStandard { code: string; accentColor: string; title: string; description: string; }
export interface USQualityData {
    label: string;
    heading: string;
    description: string;
    badges: USComplianceBadge[];
    stats: USQualityStat[];
    standards: USComplianceStandard[];
    standardsHeading: string;
}
export async function getUSQualityData(): Promise<USQualityData> {
    const sec = await getAxionSection<Raw>("utilities-substations", "quality-compliance");
    return {
        label:            val(sec?.label)             ?? "COMPLIANT",
        heading:          val(sec?.heading)           ?? "Quality, Safety & Compliance\nBuilt Into Every Solution.",
        description:      val(sec?.description)       ?? "Utilities require strict adherence to quality, safety, and reliability. Axion partners with trusted manufacturers and follows industry best practices.",
        standardsHeading: val(sec?.standards_heading) ?? "Standards We Work To",
        badges: arr(sec?.badges).map((b) => ({
            icon:     val(b.icon)     ?? "",
            title:    val(b.title)    ?? "",
            subtitle: val(b.subtitle) ?? "",
        })),
        stats: arr(sec?.stats).map((s) => ({
            value: val(s.value) ?? "",
            label: val(s.label) ?? "",
        })),
        standards: arr(sec?.standards).map((s) => ({
            code:        val(s.code)         ?? "",
            accentColor: val(s.accent_color) ?? "rgba(99,222,247,1)",
            title:       val(s.title)        ?? "",
            description: val(s.description)  ?? "",
        })),
    };
}

/* ─── Lifecycle Support ─────────────────────────────────────────────────────── */
export interface USLifecyclePhase { icon: string; accentColor: string; title: string; description: string; }
export interface USLifecycleData {
    label: string;
    heading: string;
    description: string;
    phases: USLifecyclePhase[];
}
export async function getUSLifecycleData(): Promise<USLifecycleData> {
    const sec = await getAxionSection<Raw>("utilities-substations", "lifecycle-support");
    return {
        label:       val(sec?.label)       ?? "LIFECYCLE SUPPORT",
        heading:     val(sec?.heading)     ?? "Support from\nCommissioning to\nEnd-of-Life.",
        description: val(sec?.description) ?? "Reduces risk, extends service life, and ensures predictable operation over time.",
        phases: arr(sec?.phases).map((p) => ({
            icon:        val(p.icon)        ?? "",
            accentColor: val(p.color)       ?? "rgba(99,222,247,1)",
            title:       val(p.title)       ?? "",
            description: val(p.description) ?? "",
        })),
    };
}

/* ─── Why Choose Axion ──────────────────────────────────────────────────────── */
export interface USReason { number: string; accentColor: string; text: string; }
export interface USUptimeStat { value: string; label: string; color: string; }
export interface USWhyData {
    heading: string;
    subheading: string;
    ctaLabel: string;
    ctaUrl: string;
    reasons: USReason[];
    uptimeStats: USUptimeStat[];
}
export async function getUSWhyData(): Promise<USWhyData> {
    const sec = await getAxionSection<Raw>("utilities-substations", "why-axion");
    return {
        heading:    val(sec?.heading)    ?? "Why utilities\nchoose us,\nevery time.",
        subheading: val(sec?.subheading) ?? "A long-term technical partnership backed by 20+ years of experience.",
        ctaLabel:   val(sec?.cta_label)  ?? "Get In Touch →",
        ctaUrl:     val(sec?.cta_url)    ?? "/contact",
        reasons: arr(sec?.reasons).map((r) => ({
            number:      val(r.num)          ?? "",
            accentColor: val(r.accent_color) ?? "rgba(99,222,247,1)",
            text:        val(r.title)        ?? "",
        })),
        uptimeStats: arr(sec?.uptime_stats).map((s) => ({
            value: val(s.value) ?? "",
            label: val(s.label) ?? "",
            color: val(s.color) ?? "rgba(99,222,247,1)",
        })),
    };
}

/* ─── CTA ───────────────────────────────────────────────────────────────────── */
export interface USCtaData {
    heading: string;
    accentText: string;
    description: string;
    btn1Label: string; btn1Url: string;
    btn2Label: string; btn2Url: string;
    btn3Label: string; btn3Url: string;
}
export async function getUSCtaData(): Promise<USCtaData> {
    const sec = await getAxionSection<Raw>("utilities-substations", "cta");
    return {
        heading:     val(sec?.heading)     ?? "Design reliable, compliant\nutility battery systems",
        accentText:  val(sec?.accent_text) ?? "with Axion.",
        description: val(sec?.description) ?? "Contact our team to discuss your project requirements — sizing, selection, compliance, and full lifecycle support.",
        btn1Label:   val(sec?.btn1_label)  ?? "Contact Axion",
        btn1Url:     val(sec?.btn1_url)    ?? "/contact",
        btn2Label:   val(sec?.btn2_label)  ?? "Request a Specification",
        btn2Url:     val(sec?.btn2_url)    ?? "/contact",
        btn3Label:   val(sec?.btn3_label)  ?? "Download Tech Guide",
        btn3Url:     val(sec?.btn3_url)    ?? "/contact",
    };
}
