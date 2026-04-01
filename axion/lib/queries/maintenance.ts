import { getAxionSection } from "@/lib/queries/axion-cms";
import { SectionOverrides } from "./sustainability";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Raw = any;

function val<T>(v: T): T | undefined {
    if (v === null || v === undefined) return undefined;
    if (typeof v === "string" && !v.trim()) return undefined;
    if (Array.isArray(v) && v.length === 0) return undefined;
    return v;
}

/** Convert a raw CMS value to a "Npx" string, or undefined if empty. */
function px(v: unknown): string | undefined {
    if (v == null) return undefined;
    const s = String(v).trim();
    if (!s || s === "0" && false) return undefined; // keep 0
    if (!s) return undefined;
    return `${s}px`;
}

/** Build a SectionOverrides from a raw CMS section object. */
function buildOverrides(sec: Raw): SectionOverrides {
    const o: SectionOverrides = {};

    // colours
    if (val(sec?.bg_color))          o.bgColor          = sec.bg_color;
    if (val(sec?.heading_color))     o.headingColor     = sec.heading_color;
    if (val(sec?.body_color))        o.bodyColor        = sec.body_color;
    if (val(sec?.label_color))       o.labelColor       = sec.label_color;
    if (val(sec?.accent_color))      o.accentColor      = sec.accent_color;

    // typography
    if (val(sec?.heading_tag))       o.headingTag       = sec.heading_tag;
    if (val(sec?.subheading_tag))    o.subheadingTag    = sec.subheading_tag;
    if (val(sec?.card_heading_tag))  o.cardHeadingTag   = sec.card_heading_tag;
    if (px(sec?.heading_font_size))  o.headingFontSize  = px(sec.heading_font_size);
    if (val(sec?.heading_font_weight)) o.headingFontWeight = sec.heading_font_weight;
    if (val(sec?.heading_font_family)) o.headingFontFamily = sec.heading_font_family;
    if (px(sec?.body_font_size))     o.bodyFontSize     = px(sec.body_font_size);
    if (val(sec?.body_font_weight))  o.bodyFontWeight   = sec.body_font_weight;
    if (px(sec?.subtext_font_size))  o.subtextFontSize  = px(sec.subtext_font_size);

    // stacking
    if (sec?.margin_top_overlap != null && String(sec.margin_top_overlap).trim() !== "") {
        o.marginTop = `-${sec.margin_top_overlap}px`;
    }
    if (px(sec?.border_radius_top))  o.borderRadiusTop  = px(sec.border_radius_top);

    // dimensions
    if (px(sec?.section_min_height)) o.minHeight        = px(sec.section_min_height);
    if (px(sec?.section_height))     o.sectionHeight    = px(sec.section_height);
    if (px(sec?.left_col_width))     o.leftColWidth     = px(sec.left_col_width);
    if (px(sec?.right_col_width))    o.rightColWidth    = px(sec.right_col_width);
    if (px(sec?.right_col_height))   o.rightColHeight   = px(sec.right_col_height);
    if (px(sec?.right_col_margin_top)) o.rightColMarginTop = px(sec.right_col_margin_top);

    // padding
    if (px(sec?.padding_top))        o.paddingTop       = px(sec.padding_top);
    if (px(sec?.padding_bottom))     o.paddingBottom    = px(sec.padding_bottom);
    if (px(sec?.padding_left))       o.paddingLeft      = px(sec.padding_left);
    if (px(sec?.padding_right))      o.paddingRight     = px(sec.padding_right);

    // layout
    if (px(sec?.content_gap))        o.contentGap       = px(sec.content_gap);
    if (px(sec?.cards_gap))          o.cardsGap         = px(sec.cards_gap);

    // hero-specific
    if (val(sec?.breadcrumb_color))  o.breadcrumbColor  = sec.breadcrumb_color;
    if (val(sec?.pill_bg_color))     o.pillBgColor      = sec.pill_bg_color;
    if (val(sec?.pill_text_color))   o.pillTextColor    = sec.pill_text_color;
    if (val(sec?.accent_bar_color))  o.accentBarColor   = sec.accent_bar_color;

    // recycling-specific
    if (val(sec?.quote_bar_color))   o.quoteBarColor    = sec.quote_bar_color;
    if (val(sec?.quote_text_color))  o.quoteTextColor   = sec.quote_text_color;
    if (val(sec?.item_bg_color))     o.itemBgColor      = sec.item_bg_color;
    if (val(sec?.item_icon_color))   o.itemIconColor    = sec.item_icon_color;

    // intro-specific
    if (val(sec?.step_label_color))  o.stepLabelColor   = sec.step_label_color;
    if (val(sec?.badge_bg_color))    o.badgeBgColor     = sec.badge_bg_color;
    if (val(sec?.badge_text_color))  o.badgeTextColor   = sec.badge_text_color;

    // compliance/sourcing-specific
    if (val(sec?.card_bg_color))     o.cardBgColor      = sec.card_bg_color;

    // safety-specific
    if (val(sec?.item_tint_color))   o.itemTintColor    = sec.item_tint_color;
    if (val(sec?.cert_bg_color))     o.certBgColor      = sec.cert_bg_color;
    if (val(sec?.cert_text_color))   o.certTextColor    = sec.cert_text_color;

    // cta-specific
    if (val(sec?.btn_primary_bg))    o.btnPrimaryBg     = sec.btn_primary_bg;
    if (val(sec?.btn_primary_fg))    o.btnPrimaryFg     = sec.btn_primary_fg;
    if (val(sec?.btn_ghost_color))   o.btnGhostColor    = sec.btn_ghost_color;

    return o;
}

// ══════════════════════════════════
// HERO
// ══════════════════════════════════
export interface MtHeroData {
    backgroundImageUrl?: string;
    breadcrumb: string;
    heading: string;
    subtext: string;
    topBadgeText: string;
    btnPrimaryLabel: string;
    btnPrimaryUrl: string;
    btnGhostLabel: string;
    btnGhostUrl: string;
    overrides: SectionOverrides;
}

export async function getMtHeroData(): Promise<MtHeroData> {
    const sec = await getAxionSection<Raw>("maintenance", "hero");

    return {
        backgroundImageUrl: val(sec?.background_image_url) ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
        breadcrumb: val(sec?.breadcrumb) ?? "HOME / SERVICES / MAINTENANCE & MONITORING",
        heading: val(sec?.heading) ?? "Maintenance & Monitoring",
        subtext:
            val(sec?.subtext) ??
            "Comprehensive maintenance and real-time monitoring solutions designed to keep your mission-critical battery systems operating at peak performance.",
        topBadgeText: val(sec?.top_badge_text) ?? "🔧  Services",
        btnPrimaryLabel: val(sec?.btn_primary_label) ?? "Request a Consultation →",
        btnPrimaryUrl: val(sec?.btn_primary_url) ?? "/contact",
        btnGhostLabel: val(sec?.btn_ghost_label) ?? "Speak with an Expert",
        btnGhostUrl: val(sec?.btn_ghost_url) ?? "/contact",
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// INTRODUCTION
// ══════════════════════════════════
export interface MtIntroPillarCard {
    cardColor: string;
    icon: string;
    title: string;
    description: string;
}

export interface MtIntroData {
    label: string;
    heading: string;
    body: string;
    cards: MtIntroPillarCard[];
    overrides: SectionOverrides;
}

const DEFAULT_INTRO_CARDS: MtIntroPillarCard[] = [
    {
        cardColor: "#1565c0",
        icon: "🔧",
        title: "Preventive Maintenance",
        description: "Scheduled inspections and maintenance procedures to prevent failures before they occur.",
    },
    {
        cardColor: "#0d47a1",
        icon: "📡",
        title: "Remote Monitoring",
        description: "24/7 real-time monitoring of battery performance metrics and system status.",
    },
    {
        cardColor: "#1976d2",
        icon: "🎯",
        title: "Predictive Analytics",
        description: "AI-powered analytics to predict potential failures and optimize maintenance schedules.",
    },
    {
        cardColor: "#1565c0",
        icon: "🛡",
        title: "Lifecycle Support",
        description: "End-to-end support throughout the entire battery system lifecycle.",
    },
];

export async function getMtIntroData(): Promise<MtIntroData> {
    const [sec, cardsSec] = await Promise.all([
        getAxionSection<Raw>("maintenance", "intro"),
        getAxionSection<Raw>("maintenance", "intro-cards"),
    ]);

    const rawCards = cardsSec?.cards;
    const cards: MtIntroPillarCard[] =
        Array.isArray(rawCards) && rawCards.length > 0
            ? rawCards.map((c: Raw, i: number) => ({
                  cardColor: String(c.card_color ?? DEFAULT_INTRO_CARDS[i]?.cardColor ?? "#1565c0"),
                  icon: String(c.icon ?? DEFAULT_INTRO_CARDS[i]?.icon ?? "🔧"),
                  title: String(c.title ?? DEFAULT_INTRO_CARDS[i]?.title ?? ""),
                  description: String(c.description ?? DEFAULT_INTRO_CARDS[i]?.description ?? ""),
              }))
            : DEFAULT_INTRO_CARDS;

    return {
        label: val(sec?.label) ?? "INTRODUCTION",
        heading: val(sec?.heading) ?? "Maintenance & Monitoring\nFor Peak Performance",
        body:
            val(sec?.body) ??
            "We provide comprehensive maintenance and monitoring solutions to maximize battery lifespan and system reliability.",
        cards,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// PREVENTIVE MAINTENANCE
// ══════════════════════════════════
export interface MtPreventiveCard {
    number: string;
    numberColor: string;
    icon: string;
    title: string;
    description: string;
}

export interface MtPreventiveData {
    label: string;
    heading: string;
    body: string;
    cards: MtPreventiveCard[];
    imageUrl?: string;
    imageAlt: string;
    statValue: string;
    statLabel: string;
    statSub: string;
    overrides: SectionOverrides;
}

const DEFAULT_PREVENTIVE_CARDS: MtPreventiveCard[] = [
    {
        number: "01",
        numberColor: "#1e88e5",
        icon: "👁",
        title: "Visual Inspection",
        description: "Regular visual assessments for physical damage, corrosion, leakage, and terminal condition.",
    },
    {
        number: "02",
        numberColor: "#42a5f5",
        icon: "⚡",
        title: "Voltage Testing",
        description: "Precise voltage measurements to detect abnormal discharge rates or cell performance variations.",
    },
    {
        number: "03",
        numberColor: "#1565c0",
        icon: "🔌",
        title: "Impedance Testing",
        description: "Advanced impedance analysis to identify weak cells and degradation in battery stack performance.",
    },
    {
        number: "04",
        numberColor: "#0d47a1",
        icon: "🌡",
        title: "Temperature Monitoring",
        description: "Continuous tracking of operating temperatures to detect thermal stress or abnormal conditions.",
    },
    {
        number: "05",
        numberColor: "#1e88e5",
        icon: "💧",
        title: "Electrolyte Checks",
        description: "Regular verification of electrolyte levels to ensure optimal battery chemistry and function.",
    },
    {
        number: "06",
        numberColor: "#42a5f5",
        icon: "📊",
        title: "Load Testing",
        description: "Periodic load tests to verify actual capacity and performance under operational stress.",
    },
    {
        number: "07",
        numberColor: "#1565c0",
        icon: "🔗",
        title: "Connection Integrity",
        description: "Verification of terminal connections and cable integrity to prevent power loss and safety hazards.",
    },
];

export async function getMtPreventiveData(): Promise<MtPreventiveData> {
    const [sec, cardsSec] = await Promise.all([
        getAxionSection<Raw>("maintenance", "preventive"),
        getAxionSection<Raw>("maintenance", "preventive-cards"),
    ]);

    const rawCards = cardsSec?.cards;
    const cards: MtPreventiveCard[] =
        Array.isArray(rawCards) && rawCards.length > 0
            ? rawCards.map((c: Raw, i: number) => ({
                  number: String(c.number ?? DEFAULT_PREVENTIVE_CARDS[i]?.number ?? `0${i + 1}`),
                  numberColor: String(c.number_color ?? DEFAULT_PREVENTIVE_CARDS[i]?.numberColor ?? "#1e88e5"),
                  icon: String(c.icon ?? DEFAULT_PREVENTIVE_CARDS[i]?.icon ?? "👁"),
                  title: String(c.title ?? DEFAULT_PREVENTIVE_CARDS[i]?.title ?? ""),
                  description: String(c.description ?? DEFAULT_PREVENTIVE_CARDS[i]?.description ?? ""),
              }))
            : DEFAULT_PREVENTIVE_CARDS;

    return {
        label: val(sec?.label) ?? "PREVENTIVE MAINTENANCE",
        heading: val(sec?.heading) ?? "Systematic Preventive\nMaintenance",
        body:
            val(sec?.body) ??
            "Our preventive maintenance programs are designed to identify and address potential issues before they impact system performance.",
        cards,
        imageUrl: val(sec?.image_url) ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
        imageAlt: val(sec?.image_alt) ?? "Preventive maintenance procedures",
        statValue: val(sec?.stat_value) ?? "98.5%",
        statLabel: val(sec?.stat_label) ?? "Early Detection Rate",
        statSub: val(sec?.stat_sub) ?? "Issues caught before failure",
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// REMOTE MONITORING
// ══════════════════════════════════
export interface MtRemoteMetric {
    icon: string;
    title: string;
    subtitle: string;
    cardColor: string;
}

export interface MtRemoteStat {
    value: string;
    label: string;
}

export interface MtRemoteAlert {
    icon: string;
    text: string;
}

export interface MtRemoteData {
    label: string;
    heading: string;
    body: string;
    metrics: MtRemoteMetric[];
    dashboardStats: MtRemoteStat[];
    alerts: MtRemoteAlert[];
    overrides: SectionOverrides;
}

const DEFAULT_REMOTE_METRICS: MtRemoteMetric[] = [
    {
        icon: "⚡",
        title: "Cell Voltage",
        subtitle: "Real-time per-cell voltage monitoring",
        cardColor: "#1565c0",
    },
    {
        icon: "🌡",
        title: "Temperature",
        subtitle: "Continuous thermal monitoring",
        cardColor: "#0d47a1",
    },
    {
        icon: "🔌",
        title: "Internal Resistance",
        subtitle: "Cell health degradation tracking",
        cardColor: "#1976d2",
    },
    {
        icon: "⬇",
        title: "Discharge Rate",
        subtitle: "Load and efficiency metrics",
        cardColor: "#1e88e5",
    },
    {
        icon: "🔄",
        title: "Float Current",
        subtitle: "Charging system performance",
        cardColor: "#42a5f5",
    },
    {
        icon: "📈",
        title: "State of Health",
        subtitle: "Overall battery condition index",
        cardColor: "#1565c0",
    },
];

const DEFAULT_DASHBOARD_STATS: MtRemoteStat[] = [
    { value: "12.8V", label: "Avg Voltage" },
    { value: "99.2%", label: "Health" },
    { value: "24°C", label: "Temp" },
];

const DEFAULT_REMOTE_ALERTS: MtRemoteAlert[] = [
    { icon: "⚠", text: "High temperature detected in cell A3" },
    { icon: "⚠", text: "Low voltage warning on module B2" },
    { icon: "✓", text: "System operating within normal parameters" },
];

export async function getMtRemoteData(): Promise<MtRemoteData> {
    const [sec, metricsSec] = await Promise.all([
        getAxionSection<Raw>("maintenance", "remote"),
        getAxionSection<Raw>("maintenance", "remote-metrics"),
    ]);

    const rawMetrics = metricsSec?.metrics;
    const metrics: MtRemoteMetric[] =
        Array.isArray(rawMetrics) && rawMetrics.length > 0
            ? rawMetrics.map((m: Raw, i: number) => ({
                  icon: String(m.icon ?? DEFAULT_REMOTE_METRICS[i]?.icon ?? "⚡"),
                  title: String(m.title ?? DEFAULT_REMOTE_METRICS[i]?.title ?? ""),
                  subtitle: String(m.subtitle ?? DEFAULT_REMOTE_METRICS[i]?.subtitle ?? ""),
                  cardColor: String(m.card_color ?? DEFAULT_REMOTE_METRICS[i]?.cardColor ?? "#1565c0"),
              }))
            : DEFAULT_REMOTE_METRICS;

    const rawStats = sec?.dashboard_stats;
    const dashboardStats: MtRemoteStat[] =
        Array.isArray(rawStats) && rawStats.length > 0
            ? rawStats.map((s: Raw, i: number) => ({
                  value: String(s.value ?? DEFAULT_DASHBOARD_STATS[i]?.value ?? ""),
                  label: String(s.label ?? DEFAULT_DASHBOARD_STATS[i]?.label ?? ""),
              }))
            : DEFAULT_DASHBOARD_STATS;

    const rawAlerts = sec?.alerts;
    const alerts: MtRemoteAlert[] =
        Array.isArray(rawAlerts) && rawAlerts.length > 0
            ? rawAlerts.map((a: Raw, i: number) => ({
                  icon: String(a.icon ?? DEFAULT_REMOTE_ALERTS[i]?.icon ?? "⚠"),
                  text: String(a.text ?? DEFAULT_REMOTE_ALERTS[i]?.text ?? ""),
              }))
            : DEFAULT_REMOTE_ALERTS;

    return {
        label: val(sec?.label) ?? "REMOTE MONITORING",
        heading: val(sec?.heading) ?? "24/7 Real-Time\nMonitoring",
        body:
            val(sec?.body) ??
            "Our remote monitoring platform provides real-time visibility into battery system performance with instant alerts for any anomalies.",
        metrics,
        dashboardStats,
        alerts,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// PREDICTIVE ANALYTICS
// ══════════════════════════════════
export interface MtPredictiveCard {
    icon: string;
    title: string;
    description: string;
    cardColor: string;
}

export interface MtPredictiveStat {
    icon: string;
    title: string;
    description: string;
}

export interface MtPredictiveData {
    label: string;
    heading: string;
    body: string;
    cards: MtPredictiveCard[];
    stats: MtPredictiveStat[];
    overrides: SectionOverrides;
}

const DEFAULT_PREDICTIVE_CARDS: MtPredictiveCard[] = [
    {
        icon: "🔍",
        title: "Weak Cells",
        description: "Early detection of underperforming cells before they impact overall system.",
        cardColor: "#1565c0",
    },
    {
        icon: "🔥",
        title: "Thermal Runaway",
        description: "Advanced warning system for temperature anomalies and thermal stress conditions.",
        cardColor: "#0d47a1",
    },
    {
        icon: "📉",
        title: "Capacity Loss",
        description: "Predictive modeling of capacity degradation and optimal replacement timing.",
        cardColor: "#1976d2",
    },
    {
        icon: "⚠",
        title: "Connection Degradation",
        description: "Detection of deteriorating connections and corrosion before power loss occurs.",
        cardColor: "#1e88e5",
    },
];

const DEFAULT_PREDICTIVE_STATS: MtPredictiveStat[] = [
    {
        icon: "⏱",
        title: "Reduced Downtime",
        description: "Proactive maintenance prevents unexpected failures and service interruptions.",
    },
    {
        icon: "🔋",
        title: "Extended Lifespan",
        description: "Optimized maintenance extends battery life and maximizes ROI.",
    },
    {
        icon: "💰",
        title: "Lower Costs",
        description: "Preventive approach reduces expensive emergency repairs and replacements.",
    },
    {
        icon: "📋",
        title: "Better Planning",
        description: "Data-driven insights enable strategic maintenance and capacity planning.",
    },
];

export async function getMtPredictiveData(): Promise<MtPredictiveData> {
    const [sec, cardsSec, statsSec] = await Promise.all([
        getAxionSection<Raw>("maintenance", "predictive"),
        getAxionSection<Raw>("maintenance", "predictive-cards"),
        getAxionSection<Raw>("maintenance", "predictive-stats"),
    ]);

    const rawCards = cardsSec?.cards;
    const cards: MtPredictiveCard[] =
        Array.isArray(rawCards) && rawCards.length > 0
            ? rawCards.map((c: Raw, i: number) => ({
                  icon: String(c.icon ?? DEFAULT_PREDICTIVE_CARDS[i]?.icon ?? "🔍"),
                  title: String(c.title ?? DEFAULT_PREDICTIVE_CARDS[i]?.title ?? ""),
                  description: String(c.description ?? DEFAULT_PREDICTIVE_CARDS[i]?.description ?? ""),
                  cardColor: String(c.card_color ?? DEFAULT_PREDICTIVE_CARDS[i]?.cardColor ?? "#1565c0"),
              }))
            : DEFAULT_PREDICTIVE_CARDS;

    const rawStats = statsSec?.stats;
    const stats: MtPredictiveStat[] =
        Array.isArray(rawStats) && rawStats.length > 0
            ? rawStats.map((s: Raw, i: number) => ({
                  icon: String(s.icon ?? DEFAULT_PREDICTIVE_STATS[i]?.icon ?? "⏱"),
                  title: String(s.title ?? DEFAULT_PREDICTIVE_STATS[i]?.title ?? ""),
                  description: String(s.description ?? DEFAULT_PREDICTIVE_STATS[i]?.description ?? ""),
              }))
            : DEFAULT_PREDICTIVE_STATS;

    return {
        label: val(sec?.label) ?? "PREDICTIVE ANALYTICS",
        heading: val(sec?.heading) ?? "AI-Powered Predictive\nAnalytics",
        body:
            val(sec?.body) ??
            "Leverage machine learning and advanced analytics to predict failures before they occur and optimize maintenance schedules.",
        cards,
        stats,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// BENEFITS
// ══════════════════════════════════
export interface MtBenefitCard {
    icon: string;
    title: string;
    description: string;
}

export interface MtIndustry {
    icon: string;
    title: string;
    subtitle: string;
}

export interface MtBenefitsData {
    label: string;
    heading: string;
    benefits: MtBenefitCard[];
    industries: MtIndustry[];
    overrides: SectionOverrides;
}

const DEFAULT_BENEFITS: MtBenefitCard[] = [
    {
        icon: "🛡",
        title: "Reduced Outage Risk",
        description: "Minimize unexpected downtime with proactive maintenance and continuous monitoring.",
    },
    {
        icon: "🔋",
        title: "Extended Battery Lifespan",
        description: "Optimize maintenance practices to maximize battery life and system reliability.",
    },
    {
        icon: "⚙",
        title: "Optimized Performance",
        description: "Keep systems running at peak efficiency with data-driven optimization.",
    },
    {
        icon: "✓",
        title: "Compliance Assurance",
        description: "Meet regulatory requirements and industry standards with comprehensive documentation.",
    },
    {
        icon: "💰",
        title: "Cost Savings",
        description: "Reduce maintenance costs and extend replacement cycles through smart planning.",
    },
];

const DEFAULT_INDUSTRIES: MtIndustry[] = [
    {
        icon: "🏢",
        title: "Data Centers",
        subtitle: "24/7 uptime assurance",
    },
    {
        icon: "🏥",
        title: "Healthcare",
        subtitle: "Mission-critical reliability",
    },
    {
        icon: "📡",
        title: "Telecommunications",
        subtitle: "Network continuity",
    },
    {
        icon: "⚡",
        title: "Utilities",
        subtitle: "Grid stability support",
    },
    {
        icon: "🏦",
        title: "Financial Services",
        subtitle: "Transaction assurance",
    },
];

export async function getMtBenefitsData(): Promise<MtBenefitsData> {
    const [sec, cardsSec, industriesSec] = await Promise.all([
        getAxionSection<Raw>("maintenance", "benefits"),
        getAxionSection<Raw>("maintenance", "benefits-cards"),
        getAxionSection<Raw>("maintenance", "benefits-industries"),
    ]);

    const rawBenefits = cardsSec?.benefits;
    const benefits: MtBenefitCard[] =
        Array.isArray(rawBenefits) && rawBenefits.length > 0
            ? rawBenefits.map((b: Raw, i: number) => ({
                  icon: String(b.icon ?? DEFAULT_BENEFITS[i]?.icon ?? "🛡"),
                  title: String(b.title ?? DEFAULT_BENEFITS[i]?.title ?? ""),
                  description: String(b.description ?? DEFAULT_BENEFITS[i]?.description ?? ""),
              }))
            : DEFAULT_BENEFITS;

    const rawIndustries = industriesSec?.industries;
    const industries: MtIndustry[] =
        Array.isArray(rawIndustries) && rawIndustries.length > 0
            ? rawIndustries.map((ind: Raw, i: number) => ({
                  icon: String(ind.icon ?? DEFAULT_INDUSTRIES[i]?.icon ?? "🏢"),
                  title: String(ind.title ?? DEFAULT_INDUSTRIES[i]?.title ?? ""),
                  subtitle: String(ind.subtitle ?? DEFAULT_INDUSTRIES[i]?.subtitle ?? ""),
              }))
            : DEFAULT_INDUSTRIES;

    return {
        label: val(sec?.label) ?? "BENEFITS",
        heading: val(sec?.heading) ?? "Why Maintenance &\nMonitoring Matters",
        benefits,
        industries,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// CTA
// ══════════════════════════════════
export interface MtCtaData {
    label: string;
    heading: string;
    body: string;
    btnPrimaryLabel: string;
    btnPrimaryUrl: string;
    btnSecondaryLabel: string;
    btnSecondaryUrl: string;
    btnTertiaryLabel: string;
    btnTertiaryUrl: string;
    overrides: SectionOverrides;
}

export async function getMtCtaData(): Promise<MtCtaData> {
    const sec = await getAxionSection<Raw>("maintenance", "cta");
    return {
        label: val(sec?.label) ?? "NEXT STEPS",
        heading: val(sec?.heading) ?? "Ready to Optimize Your\nBattery Maintenance?",
        body:
            val(sec?.body) ??
            "Contact our team to discuss a customized maintenance and monitoring plan for your mission-critical systems.",
        btnPrimaryLabel: val(sec?.btn_primary_label) ?? "Request a Consultation →",
        btnPrimaryUrl: val(sec?.btn_primary_url) ?? "/contact",
        btnSecondaryLabel: val(sec?.btn_secondary_label) ?? "Download Case Study",
        btnSecondaryUrl: val(sec?.btn_secondary_url) ?? "/resources/case-studies",
        btnTertiaryLabel: val(sec?.btn_tertiary_label) ?? "Learn More",
        btnTertiaryUrl: val(sec?.btn_tertiary_url) ?? "/services/maintenance-monitoring",
        overrides: buildOverrides(sec),
    };
}
