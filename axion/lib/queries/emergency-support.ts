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
    // accent_color and active_step_color both map to accentColor
    if (val(sec?.accent_color) || val(sec?.active_step_color))
        o.accentColor = sec.accent_color || sec.active_step_color;

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
export interface EsHeroStat {
    icon: string;
    value: string;
    label: string;
}

export interface EsHeroData {
    backgroundImageUrl?: string;
    breadcrumb: string;
    heading: string;
    subtext: string;
    topBadgeText: string;
    btnPrimaryLabel: string;
    btnPrimaryUrl: string;
    btnGhostLabel: string;
    btnGhostUrl: string;
    stats: EsHeroStat[];
    overrides: SectionOverrides;
}

const DEFAULT_HERO_STATS: EsHeroStat[] = [
    { icon: "⚡", value: "<2hr", label: "Response Time" },
    { icon: "🛡", value: "24/7", label: "Availability" },
    { icon: "🔧", value: "SLA", label: "Guaranteed" },
];

export async function getEsHeroData(): Promise<EsHeroData> {
    const sec = await getAxionSection<Raw>("emergency-support", "hero");

    const rawStats = sec?.stats;
    const stats: EsHeroStat[] =
        Array.isArray(rawStats) && rawStats.length > 0
            ? rawStats.map((s: Raw, i: number) => ({
                  icon: String(s.icon ?? DEFAULT_HERO_STATS[i]?.icon ?? "⚡"),
                  value: String(s.value ?? DEFAULT_HERO_STATS[i]?.value ?? ""),
                  label: String(s.label ?? DEFAULT_HERO_STATS[i]?.label ?? ""),
              }))
            : DEFAULT_HERO_STATS;

    return {
        backgroundImageUrl: val(sec?.background_image_url) ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
        breadcrumb: val(sec?.breadcrumb) ?? "HOME / SERVICES / EMERGENCY SUPPORT",
        heading: val(sec?.heading) ?? "Emergency Support\n& Service Contracts",
        subtext:
            val(sec?.subtext) ??
            "When mission-critical power systems fail, every second counts.\nAxion provides 24/7 emergency response and priority support.",
        topBadgeText: val(sec?.top_badge_text) ?? "24/7 LIVE SUPPORT",
        btnPrimaryLabel: val(sec?.btn_primary_label) ?? "🚨 Request Emergency Support",
        btnPrimaryUrl: val(sec?.btn_primary_url) ?? "/contact",
        btnGhostLabel: val(sec?.btn_ghost_label) ?? "Explore Service Contracts →",
        btnGhostUrl: val(sec?.btn_ghost_url) ?? "/services/maintenance-monitoring",
        stats,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// RESPONSE
// ══════════════════════════════════
export interface EsResponseCard {
    icon: string;
    title: string;
    description: string;
}

export interface EsStatusItem {
    icon: string;
    label: string;
    status: string;
    statusColor: string;
}

export interface EsResponseData {
    label: string;
    heading: string;
    body: string;
    cards: EsResponseCard[];
    dashboardTitle: string;
    avgResponseTime: string;
    avgResponseLabel: string;
    avgResponseSub: string;
    statusItems: EsStatusItem[];
    emergencyLine: string;
    emergencyPhone: string;
    overrides: SectionOverrides;
}

const DEFAULT_RESPONSE_CARDS: EsResponseCard[] = [
    {
        icon: "📞",
        title: "Immediate Phone Support",
        description: "Direct access to emergency line with zero wait times for critical failures.",
    },
    {
        icon: "🖥",
        title: "Remote Diagnostics",
        description: "Expert technicians assess your system remotely to identify root cause.",
    },
    {
        icon: "🚐",
        title: "On-Site Technician Dispatch",
        description: "Field engineers dispatched within SLA with full equipment for rapid resolution.",
    },
];

const DEFAULT_STATUS_ITEMS: EsStatusItem[] = [
    { icon: "📞", label: "Phone Support", status: "ACTIVE", statusColor: "#00e676" },
    { icon: "🖥", label: "Remote Diagnostics", status: "ACTIVE", statusColor: "#00e676" },
    { icon: "🚐", label: "On-Site Dispatch", status: "AVAILABLE", statusColor: "#1e88e5" },
    { icon: "📋", label: "SLA Documentation", status: "ACTIVE", statusColor: "#00e676" },
];

export async function getEsResponseData(): Promise<EsResponseData> {
    const [sec, cardsSec] = await Promise.all([
        getAxionSection<Raw>("emergency-support", "response"),
        getAxionSection<Raw>("emergency-support", "response-cards"),
    ]);

    const rawCards = cardsSec?.cards;
    const cards: EsResponseCard[] =
        Array.isArray(rawCards) && rawCards.length > 0
            ? rawCards.map((c: Raw, i: number) => ({
                  icon: String(c.icon ?? DEFAULT_RESPONSE_CARDS[i]?.icon ?? "📞"),
                  title: String(c.title ?? DEFAULT_RESPONSE_CARDS[i]?.title ?? ""),
                  description: String(c.description ?? DEFAULT_RESPONSE_CARDS[i]?.description ?? ""),
              }))
            : DEFAULT_RESPONSE_CARDS;

    const rawStatusItems = sec?.status_items;
    const statusItems: EsStatusItem[] =
        Array.isArray(rawStatusItems) && rawStatusItems.length > 0
            ? rawStatusItems.map((si: Raw, i: number) => ({
                  icon: String(si.icon ?? DEFAULT_STATUS_ITEMS[i]?.icon ?? "📞"),
                  label: String(si.label ?? DEFAULT_STATUS_ITEMS[i]?.label ?? ""),
                  status: String(si.status ?? DEFAULT_STATUS_ITEMS[i]?.status ?? ""),
                  statusColor: String(si.status_color ?? DEFAULT_STATUS_ITEMS[i]?.statusColor ?? "#00e676"),
              }))
            : DEFAULT_STATUS_ITEMS;

    return {
        label: val(sec?.label) ?? "24/7 EMERGENCY RESPONSE",
        heading: val(sec?.heading) ?? "Rapid Response\nWhen Uptime Is\nNon-Negotiable",
        body:
            val(sec?.body) ??
            "Our emergency response team is always standing by to minimize downtime and restore your critical power systems.",
        cards,
        dashboardTitle: val(sec?.dashboard_title) ?? "EMERGENCY RESPONSE STATUS",
        avgResponseTime: val(sec?.avg_response_time) ?? "< 2 Hours",
        avgResponseLabel: val(sec?.avg_response_label) ?? "Average Response Time",
        avgResponseSub: val(sec?.avg_response_sub) ?? "From alarm to technician dispatch",
        statusItems,
        emergencyLine: val(sec?.emergency_line) ?? "🚨 24-Hour Emergency Line",
        emergencyPhone: val(sec?.emergency_phone) ?? "245 445 34352 | Available Round the Clock",
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// SERVICE LEVEL AGREEMENTS (SLA)
// ══════════════════════════════════
export interface EsSlaTier {
    tierLabel: string;
    tierColor: string;
    tierBgColor: string;
    responseTime: string;
    features: string[];
}

export interface EsSlaData {
    label: string;
    heading: string;
    body: string;
    tiers: EsSlaTier[];
    overrides: SectionOverrides;
}

const DEFAULT_SLA_TIERS: EsSlaTier[] = [
    {
        tierLabel: "🔵 STANDARD",
        tierColor: "#1e88e5",
        tierBgColor: "#f5f8ff",
        responseTime: "4 Hours",
        features: [
            "Business hours phone support",
            "Remote diagnostics",
            "On-site dispatch within 4 hours",
            "Incident documentation",
        ],
    },
    {
        tierLabel: "🟡 PRIORITY",
        tierColor: "#ff8c00",
        tierBgColor: "#fffaf0",
        responseTime: "2 Hours",
        features: [
            "Extended hours support",
            "Dedicated escalation path",
            "On-site dispatch within 2 hours",
            "Priority technician allocation",
        ],
    },
    {
        tierLabel: "🔴 CRITICAL",
        tierColor: "#ff3d3d",
        tierBgColor: "#fff5f5",
        responseTime: "< 1 Hour",
        features: [
            "24/7 round-the-clock support",
            "Immediate escalation protocol",
            "On-site within 1 hour",
            "Senior technician priority",
        ],
    },
];

export async function getEsSlaData(): Promise<EsSlaData> {
    const [sec, tiersSec] = await Promise.all([
        getAxionSection<Raw>("emergency-support", "sla"),
        getAxionSection<Raw>("emergency-support", "sla-tiers"),
    ]);

    const rawTiers = tiersSec?.tiers;
    const tiers: EsSlaTier[] =
        Array.isArray(rawTiers) && rawTiers.length > 0
            ? rawTiers.map((t: Raw, i: number) => ({
                  tierLabel: String(t.tier_label ?? DEFAULT_SLA_TIERS[i]?.tierLabel ?? ""),
                  tierColor: String(t.tier_color ?? DEFAULT_SLA_TIERS[i]?.tierColor ?? "#1e88e5"),
                  tierBgColor: String(t.tier_bg_color ?? DEFAULT_SLA_TIERS[i]?.tierBgColor ?? "#f5f8ff"),
                  responseTime: String(t.response_time ?? DEFAULT_SLA_TIERS[i]?.responseTime ?? ""),
                  features: Array.isArray(t.features) && t.features.length > 0
                      ? t.features.map((f: Raw) => String(f))
                      : DEFAULT_SLA_TIERS[i]?.features ?? [],
              }))
            : DEFAULT_SLA_TIERS;

    return {
        label: val(sec?.label) ?? "SERVICE LEVEL AGREEMENTS",
        heading: val(sec?.heading) ?? "SLA-Backed Response\nTimes You Can Count On",
        body:
            val(sec?.body) ??
            "Choose the service tier that matches your operational needs and get guaranteed response times backed by SLAs.",
        tiers,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// TECHNICIANS
// ══════════════════════════════════
export interface EsTechStep {
    timeLabel: string;
    timeLabelColor: string;
    icon: string;
    number: string;
    numberColor: string;
    title: string;
    description: string;
}

export interface EsTechExpertise {
    icon: string;
    title: string;
    description: string;
}

export interface EsTechData {
    label: string;
    heading: string;
    body: string;
    steps: EsTechStep[];
    expertise: EsTechExpertise[];
    overrides: SectionOverrides;
}

const DEFAULT_TECH_STEPS: EsTechStep[] = [
    {
        timeLabel: "0 min",
        timeLabelColor: "#ff3d3d",
        icon: "📞",
        number: "01",
        numberColor: "#ff3d3d",
        title: "Alarm or Failure Reported",
        description: "Emergency line receives alert — immediate triage begins",
    },
    {
        timeLabel: "< 15 min",
        timeLabelColor: "#1e88e5",
        icon: "🖥",
        number: "02",
        numberColor: "#1e88e5",
        title: "Remote Diagnostics",
        description: "Technical experts assess remotely, prepare dispatch if needed",
    },
    {
        timeLabel: "< 60 min",
        timeLabelColor: "#00e676",
        icon: "🚐",
        number: "03",
        numberColor: "#00e676",
        title: "Technician Dispatched",
        description: "Trained field engineer mobilized with full equipment kit",
    },
];

const DEFAULT_TECH_EXPERTISE: EsTechExpertise[] = [
    {
        icon: "🔋",
        title: "VRLA & Flooded\nBattery Specialists",
        description: "Deep expertise in all battery chemistries and system configurations.",
    },
    {
        icon: "🔬",
        title: "Full Testing &\nInspection Kit",
        description: "Equipped for impedance testing, load testing, and thermal inspection.",
    },
    {
        icon: "💡",
        title: "Corrective Action\n& Recommendations",
        description: "Expert guidance to prevent repeat failures and optimize performance.",
    },
];

export async function getEsTechData(): Promise<EsTechData> {
    const [sec, stepsSec, expertiseSec] = await Promise.all([
        getAxionSection<Raw>("emergency-support", "technicians"),
        getAxionSection<Raw>("emergency-support", "technicians-steps"),
        getAxionSection<Raw>("emergency-support", "technicians-expertise"),
    ]);

    const rawSteps = stepsSec?.steps;
    const steps: EsTechStep[] =
        Array.isArray(rawSteps) && rawSteps.length > 0
            ? rawSteps.map((st: Raw, i: number) => ({
                  timeLabel: String(st.time_label ?? DEFAULT_TECH_STEPS[i]?.timeLabel ?? ""),
                  timeLabelColor: String(st.time_label_color ?? DEFAULT_TECH_STEPS[i]?.timeLabelColor ?? "#ff3d3d"),
                  icon: String(st.icon ?? DEFAULT_TECH_STEPS[i]?.icon ?? "📞"),
                  number: String(st.number ?? DEFAULT_TECH_STEPS[i]?.number ?? ""),
                  numberColor: String(st.number_color ?? DEFAULT_TECH_STEPS[i]?.numberColor ?? "#ff3d3d"),
                  title: String(st.title ?? DEFAULT_TECH_STEPS[i]?.title ?? ""),
                  description: String(st.description ?? DEFAULT_TECH_STEPS[i]?.description ?? ""),
              }))
            : DEFAULT_TECH_STEPS;

    const rawExpertise = expertiseSec?.expertise;
    const expertise: EsTechExpertise[] =
        Array.isArray(rawExpertise) && rawExpertise.length > 0
            ? rawExpertise.map((e: Raw, i: number) => ({
                  icon: String(e.icon ?? DEFAULT_TECH_EXPERTISE[i]?.icon ?? "🔋"),
                  title: String(e.title ?? DEFAULT_TECH_EXPERTISE[i]?.title ?? ""),
                  description: String(e.description ?? DEFAULT_TECH_EXPERTISE[i]?.description ?? ""),
              }))
            : DEFAULT_TECH_EXPERTISE;

    return {
        label: val(sec?.label) ?? "ON-SITE TECHNICIANS & PRIORITY SUPPORT",
        heading: val(sec?.heading) ?? "Expert Technicians\nDispatched to You",
        body:
            val(sec?.body) ??
            "Our certified field engineers are trained on all battery systems and equipped to resolve issues quickly and safely.",
        steps,
        expertise,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// BENEFITS
// ══════════════════════════════════
export interface EsBenefitRow {
    icon: string;
    title: string;
    description: string;
}

export interface EsIndustry {
    icon: string;
    title: string;
    subtitle: string;
}

export interface EsBenefitsData {
    label: string;
    heading: string;
    benefits: EsBenefitRow[];
    industriesTitle: string;
    industriesSub: string;
    industries: EsIndustry[];
    overrides: SectionOverrides;
}

const DEFAULT_BENEFITS: EsBenefitRow[] = [
    {
        icon: "⏱",
        title: "Minimized Downtime",
        description: "Rapid response and expert resolution reduce critical system outage duration.",
    },
    {
        icon: "✓",
        title: "Guaranteed Response Times",
        description: "SLA-backed guarantees ensure predictable emergency support availability.",
    },
    {
        icon: "🎓",
        title: "Certified Technicians",
        description: "Factory-trained specialists with deep knowledge of all battery systems.",
    },
    {
        icon: "🛡",
        title: "Reduced Operational Risk",
        description: "Minimize financial loss and regulatory exposure from unexpected power failures.",
    },
    {
        icon: "💪",
        title: "System Reliability Confidence",
        description: "Peace of mind knowing expert help is always available when you need it most.",
    },
];

const DEFAULT_INDUSTRIES: EsIndustry[] = [
    {
        icon: "🏢",
        title: "Data Centers & Colocation",
        subtitle: "24/7 uptime assurance",
    },
    {
        icon: "⚡",
        title: "Utilities & Substations",
        subtitle: "Grid stability support",
    },
    {
        icon: "📡",
        title: "Telecommunications",
        subtitle: "Network continuity",
    },
    {
        icon: "🏥",
        title: "Healthcare Facilities",
        subtitle: "Mission-critical reliability",
    },
];

export async function getEsBenefitsData(): Promise<EsBenefitsData> {
    const [sec, cardsSec, industriesSec] = await Promise.all([
        getAxionSection<Raw>("emergency-support", "benefits"),
        getAxionSection<Raw>("emergency-support", "benefits-cards"),
        getAxionSection<Raw>("emergency-support", "benefits-industries"),
    ]);

    const rawBenefits = cardsSec?.benefits;
    const benefits: EsBenefitRow[] =
        Array.isArray(rawBenefits) && rawBenefits.length > 0
            ? rawBenefits.map((b: Raw, i: number) => ({
                  icon: String(b.icon ?? DEFAULT_BENEFITS[i]?.icon ?? "⏱"),
                  title: String(b.title ?? DEFAULT_BENEFITS[i]?.title ?? ""),
                  description: String(b.description ?? DEFAULT_BENEFITS[i]?.description ?? ""),
              }))
            : DEFAULT_BENEFITS;

    const rawIndustries = industriesSec?.industries;
    const industries: EsIndustry[] =
        Array.isArray(rawIndustries) && rawIndustries.length > 0
            ? rawIndustries.map((ind: Raw, i: number) => ({
                  icon: String(ind.icon ?? DEFAULT_INDUSTRIES[i]?.icon ?? "🏢"),
                  title: String(ind.title ?? DEFAULT_INDUSTRIES[i]?.title ?? ""),
                  subtitle: String(ind.subtitle ?? DEFAULT_INDUSTRIES[i]?.subtitle ?? ""),
              }))
            : DEFAULT_INDUSTRIES;

    return {
        label: val(sec?.label) ?? "BENEFITS & INDUSTRIES",
        heading: val(sec?.heading) ?? "Why Emergency Support\nMatters",
        benefits,
        industriesTitle: val(sec?.industries_title) ?? "Industries Supported",
        industriesSub: val(sec?.industries_sub) ?? "Emergency support available for:",
        industries,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// LIFECYCLE
// ══════════════════════════════════
export interface EsLifecycleStep {
    icon: string;
    title: string;
    isActive?: boolean;
}

export interface EsLifecycleData {
    label: string;
    heading: string;
    body: string;
    steps: EsLifecycleStep[];
    activeStepIndex: number;
    activeLabel: string;
    overrides: SectionOverrides;
}

const DEFAULT_LIFECYCLE_STEPS: EsLifecycleStep[] = [
    { icon: "📐", title: "Specification\n& Design" },
    { icon: "⚙️", title: "Installation\n& Commissioning" },
    { icon: "🔧", title: "Maintenance\n& Monitoring" },
    { icon: "🚨", title: "Emergency\nSupport", isActive: true },
    { icon: "♻️", title: "Replacement\n& Recycling" },
];

export async function getEsLifecycleData(): Promise<EsLifecycleData> {
    const [sec, stepsSec] = await Promise.all([
        getAxionSection<Raw>("emergency-support", "lifecycle"),
        getAxionSection<Raw>("emergency-support", "lifecycle-steps"),
    ]);

    const rawSteps = stepsSec?.steps;
    const steps: EsLifecycleStep[] =
        Array.isArray(rawSteps) && rawSteps.length > 0
            ? rawSteps.map((st: Raw, i: number) => ({
                  icon: String(st.icon ?? DEFAULT_LIFECYCLE_STEPS[i]?.icon ?? "📐"),
                  title: String(st.title ?? DEFAULT_LIFECYCLE_STEPS[i]?.title ?? ""),
                  isActive: i === 3 || st.is_active === true,
              }))
            : DEFAULT_LIFECYCLE_STEPS;

    return {
        label: val(sec?.label) ?? "INTEGRATED LIFECYCLE SUPPORT",
        heading: val(sec?.heading) ?? "Emergency Support Is Part of\nAxion's Full Lifecycle Approach",
        body:
            val(sec?.body) ??
            "From initial design through end-of-life recycling, Axion supports your battery systems at every stage.",
        steps,
        activeStepIndex: 3,
        activeLabel: val(sec?.active_label) ?? "🚨 You are here — Emergency Support Phase",
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// CTA
// ══════════════════════════════════
export interface EsCtaData {
    badgeText: string;
    heading: string;
    body: string;
    btnPrimaryLabel: string;
    btnPrimaryUrl: string;
    btnSecondaryLabel: string;
    btnSecondaryUrl: string;
    btnTertiaryLabel: string;
    btnTertiaryUrl: string;
    emergencyLineLabel: string;
    emergencyPhone: string;
    emergencyNote: string;
    overrides: SectionOverrides;
}

export async function getEsCtaData(): Promise<EsCtaData> {
    const sec = await getAxionSection<Raw>("emergency-support", "cta");

    return {
        badgeText: val(sec?.badge_text) ?? "Support Available Now",
        heading: val(sec?.heading) ?? "Ready When\nYou Need Us Most",
        body:
            val(sec?.body) ??
            "Mission-critical emergencies don't wait — neither do we. Contact Axion's emergency response team for immediate assistance.",
        btnPrimaryLabel: val(sec?.btn_primary_label) ?? "🚨 Request 24/7 Emergency Support",
        btnPrimaryUrl: val(sec?.btn_primary_url) ?? "/contact",
        btnSecondaryLabel: val(sec?.btn_secondary_label) ?? "📋 Explore Service Contracts",
        btnSecondaryUrl: val(sec?.btn_secondary_url) ?? "/services/maintenance-monitoring",
        btnTertiaryLabel: val(sec?.btn_tertiary_label) ?? "📞 Schedule Consultation",
        btnTertiaryUrl: val(sec?.btn_tertiary_url) ?? "/contact",
        emergencyLineLabel: val(sec?.emergency_line_label) ?? "24-Hour Emergency Line:",
        emergencyPhone: val(sec?.emergency_phone) ?? "245 445 34352",
        emergencyNote:
            val(sec?.emergency_note) ??
            "Available round the clock — no hold times for emergencies",
        overrides: buildOverrides(sec),
    };
}
