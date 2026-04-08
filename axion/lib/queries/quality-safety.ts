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
    if (px(sec?.heading_font_size))  o.headingFontSize  = px(sec.heading_font_size);
    if (px(sec?.body_font_size))     o.bodyFontSize     = px(sec.body_font_size);
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
export interface QSHeroData {
    backgroundImageUrl?: string;
    backgroundVideoUrl?: string;
    breadcrumb: string;
    heading: string;
    subtext: string;
    topBadgeText: string;
    btnLabel: string;
    btnUrl: string;
    overrides: SectionOverrides;
}

export async function getQSHeroData(): Promise<QSHeroData> {
    const sec = await getAxionSection<Raw>("quality-safety", "hero");

    return {
        backgroundImageUrl: val(sec?.background_image_url) ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
        backgroundVideoUrl: val(sec?.background_image_video_url),
        breadcrumb: val(sec?.breadcrumb) ?? "ABOUT / QUALITY, SAFETY & COMPLIANCE",
        heading: val(sec?.heading) ?? "Quality, Safety & Compliance",
        subtext:
            val(sec?.subtext) ??
            "Quality, safety, and compliance are integral to every battery solution we provide — from manufacturer selection through installation, maintenance, and end-of-life recycling.",
        topBadgeText: val(sec?.top_badge_text) ?? "🛡  Quality Assured",
        btnLabel: val(sec?.btn_label) ?? "Explore Our Standards →",
        btnUrl: val(sec?.btn_url) ?? "/quality-safety-compliance#standards",
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// INTRODUCTION
// ══════════════════════════════════
export interface QSPillarCard {
    cardColor: string;
    number: string;
    icon: string;
    title: string;
    description: string;
    badgeLabel: string;
}

export interface QSIntroData {
    label: string;
    heading: string;
    body: string;
    cards: QSPillarCard[];
    overrides: SectionOverrides;
}

const DEFAULT_INTRO_CARDS: QSPillarCard[] = [
    {
        cardColor: "#1565c0",
        number: "01",
        icon: "🏅",
        title: "Standards\nCompliance",
        description: "IEEE, UL, CSA & IEC — every solution aligned with applicable regulations and industry best practices.",
        badgeLabel: "4 Standards",
    },
    {
        cardColor: "#0d47a1",
        number: "02",
        icon: "🔬",
        title: "Manufacturer\nQuality Assurance",
        description: "Verified manufacturers with proven QA systems, ensuring every VRLA and wet cell battery meets strict criteria.",
        badgeLabel: "Verified Partners",
    },
    {
        cardColor: "#1976d2",
        number: "03",
        icon: "🛡",
        title: "Safe Handling\n& Installation",
        description: "Guidance, checklists and training for safe battery handling, installation, and maintenance.",
        badgeLabel: "Zero Risk Goal",
    },
    {
        cardColor: "#1e3a6e",
        number: "04",
        icon: "🌱",
        title: "Environmental\nResponsibility",
        description: "Responsible disposal, recycling programs, and compliance with environmental regulations — integrated across the full battery lifecycle.",
        badgeLabel: "Lifecycle Managed",
    },
];

export async function getQSIntroData(): Promise<QSIntroData> {
    const [sec, cardsSec] = await Promise.all([
        getAxionSection<Raw>("quality-safety", "intro"),
        getAxionSection<Raw>("quality-safety", "intro-cards"),
    ]);

    const rawCards = cardsSec?.cards;
    const cards: QSPillarCard[] =
        Array.isArray(rawCards) && rawCards.length > 0
            ? rawCards.map((c: Raw, i: number) => ({
                  cardColor: String(c.card_color ?? DEFAULT_INTRO_CARDS[i]?.cardColor ?? "#1565c0"),
                  number: String(c.number ?? DEFAULT_INTRO_CARDS[i]?.number ?? `0${i + 1}`),
                  icon: String(c.icon ?? DEFAULT_INTRO_CARDS[i]?.icon ?? "🏅"),
                  title: String(c.title ?? DEFAULT_INTRO_CARDS[i]?.title ?? ""),
                  description: String(c.description ?? DEFAULT_INTRO_CARDS[i]?.description ?? ""),
                  badgeLabel: String(c.badge_label ?? DEFAULT_INTRO_CARDS[i]?.badgeLabel ?? ""),
              }))
            : DEFAULT_INTRO_CARDS;

    return {
        label: val(sec?.label) ?? "INTRODUCTION",
        heading: val(sec?.heading) ?? "Quality, Safety & Compliance\nAre Integral to Every Solution",
        body:
            val(sec?.body) ??
            "We work with established battery manufacturers...",
        cards,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// STANDARDS
// ══════════════════════════════════
export interface QSStandardCard {
    badgeColor: string;
    badgeAbbr: string;
    title: string;
    description: string;
    percentage: number;
    percentageColor: string;
}

export interface QSStandardsData {
    label: string;
    heading: string;
    cards: QSStandardCard[];
    notes: string[];
    overrides: SectionOverrides;
}

const DEFAULT_STANDARDS_CARDS: QSStandardCard[] = [
    {
        badgeColor: "#1e88e5",
        badgeAbbr: "IEEE",
        title: "Institute of Electrical and Electronics Engineers",
        description: "Battery systems, DC power, UPS specifications and testing protocols.",
        percentage: 95,
        percentageColor: "#1e88e5",
    },
    {
        badgeColor: "#1565c0",
        badgeAbbr: "UL",
        title: "Underwriters Laboratories",
        description: "Safety certification for batteries and power systems in North American markets.",
        percentage: 90,
        percentageColor: "#1565c0",
    },
    {
        badgeColor: "#0d47a1",
        badgeAbbr: "CSA",
        title: "Canadian Standards Association",
        description: "Canadian compliance for electrical equipment, battery safety and installation.",
        percentage: 88,
        percentageColor: "#0d47a1",
    },
    {
        badgeColor: "#1976d2",
        badgeAbbr: "IEC",
        title: "International Electrotechnical Commission",
        description: "International standards for battery performance, safety, and environmental impact.",
        percentage: 85,
        percentageColor: "#1976d2",
    },
];

const DEFAULT_STANDARDS_NOTES = [
    "Alignment with requirements across data centers, utilities, telecom, and healthcare",
    "Continuous updates to reflect evolving industry standards and new regulations",
    "Documentation support for enterprise and public-sector compliance reporting",
];

export async function getQSStandardsData(): Promise<QSStandardsData> {
    const [sec, cardsSec] = await Promise.all([
        getAxionSection<Raw>("quality-safety", "standards"),
        getAxionSection<Raw>("quality-safety", "standards-cards"),
    ]);

    const rawCards = cardsSec?.cards;
    const cards: QSStandardCard[] =
        Array.isArray(rawCards) && rawCards.length > 0
            ? rawCards.map((c: Raw, i: number) => ({
                  badgeColor: String(c.badge_color ?? DEFAULT_STANDARDS_CARDS[i]?.badgeColor ?? "#1e88e5"),
                  badgeAbbr: String(c.badge_abbr ?? DEFAULT_STANDARDS_CARDS[i]?.badgeAbbr ?? ""),
                  title: String(c.title ?? DEFAULT_STANDARDS_CARDS[i]?.title ?? ""),
                  description: String(c.description ?? DEFAULT_STANDARDS_CARDS[i]?.description ?? ""),
                  percentage: Number(c.percentage ?? DEFAULT_STANDARDS_CARDS[i]?.percentage ?? 0),
                  percentageColor: String(c.percentage_color ?? DEFAULT_STANDARDS_CARDS[i]?.percentageColor ?? "#1e88e5"),
              }))
            : DEFAULT_STANDARDS_CARDS;

    // Notes from repeater field in standards section
    const rawNotes = sec?.notes;
    const notes: string[] =
        Array.isArray(rawNotes) && rawNotes.length > 0
            ? rawNotes.map((n: Raw) => String(n.label ?? "")).filter(Boolean)
            : DEFAULT_STANDARDS_NOTES;

    return {
        label: val(sec?.label) ?? "INDUSTRY STANDARDS & BEST PRACTICES",
        heading: val(sec?.heading) ?? "Standards We\nAlign With",
        cards,
        notes,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// MANUFACTURER QUALITY ASSURANCE
// ══════════════════════════════════
export interface QSManufacturerStep {
    number: string;
    numberColor: string;
    icon: string;
    title: string;
    description: string;
    connectorColor: string;
}

export interface QSManufacturerData {
    label: string;
    heading: string;
    body: string;
    steps: QSManufacturerStep[];
    imageUrl?: string;
    imageAlt: string;
    qualityScoreValue: string;
    qualityScoreLabel: string;
    qualityScoreSub: string;
    overrides: SectionOverrides;
}

const DEFAULT_MANUFACTURER_STEPS: QSManufacturerStep[] = [
    {
        number: "01",
        numberColor: "#1e88e5",
        icon: "🔍",
        title: "Manufacturer Selection",
        description: "Rigorous vetting of manufacturers with proven QA systems and certifications in critical power applications.",
        connectorColor: "#1e88e5",
    },
    {
        number: "02",
        numberColor: "#42a5f5",
        icon: "📋",
        title: "Certification Verification",
        description: "Review and confirmation of relevant certifications, audits, and compliance documentation for each partner.",
        connectorColor: "#42a5f5",
    },
    {
        number: "03",
        numberColor: "#1565c0",
        icon: "⚡",
        title: "Performance Testing",
        description: "Quality audits and performance verification across battery types — ensuring reliability targets are met.",
        connectorColor: "#1565c0",
    },
    {
        number: "04",
        numberColor: "#0d47a1",
        icon: "📊",
        title: "Ongoing Monitoring",
        description: "Continuous performance tracking and supplier review to maintain quality standards across all deployments.",
        connectorColor: "#0d47a1",
    },
];

export async function getQSManufacturerData(): Promise<QSManufacturerData> {
    const [sec, stepsSec] = await Promise.all([
        getAxionSection<Raw>("quality-safety", "manufacturer"),
        getAxionSection<Raw>("quality-safety", "manufacturer-steps"),
    ]);

    const rawSteps = stepsSec?.steps;
    const steps: QSManufacturerStep[] =
        Array.isArray(rawSteps) && rawSteps.length > 0
            ? rawSteps.map((s: Raw, i: number) => ({
                  number: String(s.number ?? DEFAULT_MANUFACTURER_STEPS[i]?.number ?? `0${i + 1}`),
                  numberColor: String(s.number_color ?? DEFAULT_MANUFACTURER_STEPS[i]?.numberColor ?? "#1e88e5"),
                  icon: String(s.icon ?? DEFAULT_MANUFACTURER_STEPS[i]?.icon ?? "🔍"),
                  title: String(s.title ?? DEFAULT_MANUFACTURER_STEPS[i]?.title ?? ""),
                  description: String(s.description ?? DEFAULT_MANUFACTURER_STEPS[i]?.description ?? ""),
                  connectorColor: String(s.connector_color ?? DEFAULT_MANUFACTURER_STEPS[i]?.connectorColor ?? "#1e88e5"),
              }))
            : DEFAULT_MANUFACTURER_STEPS;

    return {
        label: val(sec?.label) ?? "MANUFACTURER QUALITY ASSURANCE",
        heading: val(sec?.heading) ?? "How We Verify\nQuality",
        body:
            val(sec?.body) ??
            "We collaborate with trusted battery manufacturers...",
        steps,
        imageUrl: val(sec?.image_url) ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
        imageAlt: val(sec?.image_alt) ?? "Manufacturer quality assurance facility",
        qualityScoreValue: val(sec?.quality_score_value) ?? "99.8%",
        qualityScoreLabel: val(sec?.quality_score_label) ?? "Quality Score",
        qualityScoreSub: val(sec?.quality_score_sub) ?? "Manufacturer verified",
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// SAFE HANDLING & INSTALLATION
// ══════════════════════════════════
export interface QSHandlingCard {
    number: string;
    title: string;
    description: string;
    checks: string[];
}

export interface QSHandlingData {
    label: string;
    heading: string;
    body: string;
    cards: QSHandlingCard[];
    imageUrl?: string;
    imageAlt: string;
    image2Url?: string;
    image2Alt: string;
    statValue: string;
    statLabel: string;
    overrides: SectionOverrides;
}

const DEFAULT_HANDLING_CARDS: QSHandlingCard[] = [
    {
        number: "01",
        title: "Safe Battery Handling",
        description: "Proper procedures for unpacking, moving, and preparing batteries — minimizing risk of damage, spills, or injury during all handling stages.",
        checks: ["Use appropriate PPE", "Follow weight limits", "Inspect on receipt"],
    },
    {
        number: "02",
        title: "Installation Guidelines",
        description: "Comprehensive checklists and procedures for correct installation in UPS, DC, and standby systems, ensuring safe connections and proper ventilation.",
        checks: ["Verify polarity", "Check torque specs", "Test connections"],
    },
    {
        number: "03",
        title: "Maintenance Teams",
        description: "Training and recommendations for ongoing maintenance staff, ensuring long-term safe operation and early detection of potential issues.",
        checks: ["Scheduled inspections", "Electrolyte levels", "Voltage monitoring"],
    },
];

export async function getQSHandlingData(): Promise<QSHandlingData> {
    const [sec, cardsSec] = await Promise.all([
        getAxionSection<Raw>("quality-safety", "handling"),
        getAxionSection<Raw>("quality-safety", "handling-cards"),
    ]);

    const rawCards = cardsSec?.cards;
    const cards: QSHandlingCard[] =
        Array.isArray(rawCards) && rawCards.length > 0
            ? rawCards.map((c: Raw, i: number) => ({
                  number: String(c.number ?? DEFAULT_HANDLING_CARDS[i]?.number ?? `0${i + 1}`),
                  title: String(c.title ?? DEFAULT_HANDLING_CARDS[i]?.title ?? ""),
                  description: String(c.description ?? DEFAULT_HANDLING_CARDS[i]?.description ?? ""),
                  checks: Array.isArray(c.checks)
                      ? c.checks.map((ch: Raw) => String(ch.label ?? "")).filter(Boolean)
                      : DEFAULT_HANDLING_CARDS[i]?.checks ?? [],
              }))
            : DEFAULT_HANDLING_CARDS;

    return {
        label: val(sec?.label) ?? "SAFE HANDLING & INSTALLATION GUIDANCE",
        heading: val(sec?.heading) ?? "Safety at\nEvery Step",
        body:
            val(sec?.body) ??
            "Safety is a core component of Axion's lifecycle support...",
        cards,
        imageUrl: val(sec?.image_url) ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
        imageAlt: val(sec?.image_alt) ?? "Safe battery handling procedures",
        image2Url: val(sec?.image2_url) ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
        image2Alt: val(sec?.image2_alt) ?? "Battery installation detail",
        statValue: val(sec?.stat_value) ?? "100%",
        statLabel: val(sec?.stat_label) ?? "Safety\nCompliance",
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// ENVIRONMENTAL RESPONSIBILITY
// ══════════════════════════════════
export interface QSEnvCard {
    icon: string;
    title: string;
    badgeLabel: string;
    description: string;
}

export interface QSLifecycleStep {
    iconLabel: string;
    circleColor: string;
}

export interface QSEnvironmentData {
    label: string;
    heading: string;
    body: string;
    cards: QSEnvCard[];
    lifecycleSteps: QSLifecycleStep[];
    overrides: SectionOverrides;
}

const DEFAULT_ENVIRONMENT_CARDS: QSEnvCard[] = [
    {
        icon: "♻️",
        title: "Responsible Disposal",
        badgeLabel: "Zero Waste Goal",
        description: "Certified recycling programs for VRLA and wet cell batteries, minimizing landfill waste.",
    },
    {
        icon: "🏪",
        title: "Safe Storage",
        badgeLabel: "Compliant Storage",
        description: "Proper storage and handling procedures throughout the battery lifecycle and supply chain.",
    },
    {
        icon: "📜",
        title: "Regulatory Compliance",
        badgeLabel: "Standards Aligned",
        description: "Full compliance with environmental regulations, enterprise standards, and audit requirements.",
    },
    {
        icon: "🌱",
        title: "Sustainable Operations",
        badgeLabel: "Eco-Optimized",
        description: "Prioritizing long-life battery solutions that reduce replacement frequency and environmental impact.",
    },
];

const DEFAULT_LIFECYCLE_STEPS: QSLifecycleStep[] = [
    { iconLabel: "📦\nDelivery", circleColor: "#1565c0" },
    { iconLabel: "🔧\nMaintenance", circleColor: "#1976d2" },
    { iconLabel: "♻️\nEnd of Life", circleColor: "#1e88e5" },
    { iconLabel: "⚙️\nOperation", circleColor: "#0d47a1" },
];

export async function getQSEnvironmentData(): Promise<QSEnvironmentData> {
    const [sec, cardsSec, lifecycleSec] = await Promise.all([
        getAxionSection<Raw>("quality-safety", "environment"),
        getAxionSection<Raw>("quality-safety", "environment-cards"),
        getAxionSection<Raw>("quality-safety", "environment-lifecycle"),
    ]);

    const rawCards = cardsSec?.cards;
    const cards: QSEnvCard[] =
        Array.isArray(rawCards) && rawCards.length > 0
            ? rawCards.map((c: Raw, i: number) => ({
                  icon: String(c.icon ?? DEFAULT_ENVIRONMENT_CARDS[i]?.icon ?? "♻️"),
                  title: String(c.title ?? DEFAULT_ENVIRONMENT_CARDS[i]?.title ?? ""),
                  badgeLabel: String(c.badge_label ?? DEFAULT_ENVIRONMENT_CARDS[i]?.badgeLabel ?? ""),
                  description: String(c.description ?? DEFAULT_ENVIRONMENT_CARDS[i]?.description ?? ""),
              }))
            : DEFAULT_ENVIRONMENT_CARDS;

    const rawLifecycle = lifecycleSec?.steps;
    const lifecycleSteps: QSLifecycleStep[] =
        Array.isArray(rawLifecycle) && rawLifecycle.length > 0
            ? rawLifecycle.map((step: Raw, i: number) => ({
                  iconLabel: String(step.icon_label ?? DEFAULT_LIFECYCLE_STEPS[i]?.iconLabel ?? ""),
                  circleColor: String(step.circle_color ?? DEFAULT_LIFECYCLE_STEPS[i]?.circleColor ?? "#1565c0"),
              }))
            : DEFAULT_LIFECYCLE_STEPS;

    return {
        label: val(sec?.label) ?? "ENVIRONMENTAL RESPONSIBILITY",
        heading: val(sec?.heading) ?? "Lifecycle Environmental\nResponsibility",
        body:
            val(sec?.body) ??
            "Axion integrates environmental responsibility across the battery lifecycle...",
        cards,
        lifecycleSteps,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// CTA
// ══════════════════════════════════
export interface QSCtaData {
    label: string;
    heading: string;
    body: string;
    btnPrimaryLabel: string;
    btnPrimaryUrl: string;
    btnGhostLabel: string;
    btnGhostUrl: string;
    overrides: SectionOverrides;
}

export async function getQSCtaData(): Promise<QSCtaData> {
    const sec = await getAxionSection<Raw>("quality-safety", "cta");
    return {
        label: val(sec?.label) ?? "QUALITY COMMITMENT",
        heading: val(sec?.heading) ?? "Committed to Quality,\nSafety & Compliance.",
        body:
            val(sec?.body) ??
            "Every battery solution we deliver meets the highest standards of quality, safety, and regulatory compliance — guaranteed.",
        btnPrimaryLabel: val(sec?.btn_primary_label) ?? "View Our Standards →",
        btnPrimaryUrl: val(sec?.btn_primary_url) ?? "/quality-safety-compliance",
        btnGhostLabel: val(sec?.btn_ghost_label) ?? "Contact Us →",
        btnGhostUrl: val(sec?.btn_ghost_url) ?? "/contact",
        overrides: buildOverrides(sec),
    };
}
