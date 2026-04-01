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
// SHARED SECTION OVERRIDES
// All CMS-driven spacing / colour / dimension overrides carried on every section.
// Components apply these as inline styles so they win over the CSS defaults.
// ══════════════════════════════════
export interface SectionOverrides {
    // ── Background / colours ──────────────────────────────────────────────────
    bgColor?: string;
    headingColor?: string;
    bodyColor?: string;
    labelColor?: string;
    accentColor?: string;
    // ── Typography ────────────────────────────────────────────────────────────
    headingTag?: string;
    subheadingTag?: string;
    cardHeadingTag?: string;
    headingFontSize?: string;
    headingFontWeight?: string;
    headingFontFamily?: string;
    bodyFontSize?: string;
    bodyFontWeight?: string;
    // ── Section stacking ──────────────────────────────────────────────────────
    marginTop?: string;        // negative value, e.g. "-96px"
    borderRadiusTop?: string;  // e.g. "100px"  → applied as "Xpx Xpx 0 0"
    // ── Dimensions ────────────────────────────────────────────────────────────
    minHeight?: string;
    sectionHeight?: string;
    // ── Content padding ───────────────────────────────────────────────────────
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    // ── Layout ────────────────────────────────────────────────────────────────
    contentGap?: string;    // gap between left / right columns
    cardsGap?: string;      // gap between card items in a card grid
    // ── Hero-specific ─────────────────────────────────────────────────────────
    breadcrumbColor?: string;
    pillBgColor?: string;
    pillTextColor?: string;
    accentBarColor?: string;
    subtextFontSize?: string;
    // ── Recycling-specific ────────────────────────────────────────────────────
    quoteBarColor?: string;
    quoteTextColor?: string;
    itemBgColor?: string;
    itemIconColor?: string;
    leftColWidth?: string;
    // ── Intro-specific ────────────────────────────────────────────────────────
    rightColWidth?: string;
    rightColMarginTop?: string;
    stepLabelColor?: string;
    badgeBgColor?: string;
    badgeTextColor?: string;
    // ── Compliance/Sourcing-specific ──────────────────────────────────────────
    cardBgColor?: string;
    // ── Safety-specific ───────────────────────────────────────────────────────
    rightColHeight?: string;
    itemTintColor?: string;
    certBgColor?: string;
    certTextColor?: string;
    // ── CTA-specific ──────────────────────────────────────────────────────────
    btnPrimaryBg?: string;
    btnPrimaryFg?: string;
    btnGhostColor?: string;
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
export interface SustainHeroData {
    backgroundImageUrl?: string;
    breadcrumb: string;
    heading: string;
    subtext: string;
    topBadgeText: string;
    pills: string[];
    overrides: SectionOverrides;
}

const DEFAULT_HERO_PILLS = [
    "♻️  Responsible Recycling",
    "📋  Regulatory Compliant",
    "🔋  Lifecycle Managed",
];

export async function getSustainHeroData(): Promise<SustainHeroData> {
    const sec = await getAxionSection<Raw>("sustainability", "hero");

    // Pills repeater: each item has a `label` field
    const rawPills = sec?.pills;
    const pills: string[] =
        Array.isArray(rawPills) && rawPills.length > 0
            ? rawPills.map((p: Raw) => String(p.label ?? "")).filter(Boolean)
            : DEFAULT_HERO_PILLS;

    return {
        backgroundImageUrl: val(sec?.background_image_url) ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
        breadcrumb: val(sec?.breadcrumb) ?? "HOME  /  SUSTAINABILITY & COMPLIANCE",
        heading: val(sec?.heading) ?? "Sustainability & Compliance",
        subtext:
            val(sec?.subtext) ??
            "Environmental responsibility and regulatory compliance are central to Axion's approach — integrated throughout the entire battery lifecycle.",
        topBadgeText: val(sec?.top_badge_text) ?? "🌿  Sustainability Focus",
        pills,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// INTRODUCTION
// ══════════════════════════════════
export interface SustainIntroStep {
    label: string;
}

export interface SustainIntroBadge {
    value: string;
    label: string;
}

export interface SustainIntroData {
    label: string;
    heading: string;
    body1: string;
    body2: string;
    steps: SustainIntroStep[];
    badges: SustainIntroBadge[];
    imageUrl?: string;
    imageAlt?: string;
    overrides: SectionOverrides;
}

const DEFAULT_INTRO_STEPS: SustainIntroStep[] = [
    { label: "Selection" },
    { label: "Installation" },
    { label: "Maintenance" },
    { label: "Recycling" },
];

const DEFAULT_INTRO_BADGES: SustainIntroBadge[] = [
    { value: "100%", label: "Certified Partners" },
    { value: "♻️", label: "Zero Landfill Goal" },
];

export async function getSustainIntroData(): Promise<SustainIntroData> {
    // Fetch the three intro sub-sections in parallel
    const [sec, stepsSec, badgesSec] = await Promise.all([
        getAxionSection<Raw>("sustainability", "intro"),
        getAxionSection<Raw>("sustainability", "intro-steps"),
        getAxionSection<Raw>("sustainability", "intro-badges"),
    ]);

    // Steps come from the dedicated intro-steps section
    const rawSteps = stepsSec?.steps;
    const steps: SustainIntroStep[] =
        Array.isArray(rawSteps) && rawSteps.length > 0
            ? rawSteps.map((s: Raw) => ({ label: String(s.label ?? "") }))
            : DEFAULT_INTRO_STEPS;

    // Badges come from the dedicated intro-badges section
    const rawBadges = badgesSec?.badges;
    const badges: SustainIntroBadge[] =
        Array.isArray(rawBadges) && rawBadges.length > 0
            ? rawBadges.map((b: Raw) => ({
                  value: String(b.value ?? ""),
                  label: String(b.label ?? ""),
              }))
            : DEFAULT_INTRO_BADGES;

    return {
        label: val(sec?.label) ?? "INTRODUCTION",
        heading: val(sec?.heading) ?? "Environmental\nResponsibility\nBy Design",
        body1:
            val(sec?.body1) ??
            "Axion takes an active role in managing the environmental impact of every battery system we supply — from selecting manufacturers with responsible practices to ensuring end-of-life batteries are properly collected, documented, and recycled.",
        body2:
            val(sec?.body2) ??
            "Our approach covers the full battery lifecycle: specifying the right system, supporting safe installation, guiding maintenance, and coordinating certified recycling when a battery reaches end of life.",
        steps,
        badges,
        imageUrl: val(sec?.image_url) ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
        imageAlt: val(sec?.image_alt) ?? "Sustainable power facility",
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// RECYCLING PROGRAMS
// ══════════════════════════════════
export interface SustainRecyclingItem {
    icon: string;
    title: string;
    description: string;
}

export interface SustainRecyclingData {
    label: string;
    heading: string;
    body: string;
    quote: string;
    items: SustainRecyclingItem[];
    imageUrl?: string;
    imageAlt?: string;
    overrides: SectionOverrides;
}

const DEFAULT_RECYCLING_ITEMS: SustainRecyclingItem[] = [
    {
        icon: "🚛",
        title: "Collection & Transport",
        description: "To certified recycling facilities with full chain of custody.",
    },
    {
        icon: "🛡",
        title: "Safe Handling",
        description: "VRLA and wet cell batteries handled to safety standards.",
    },
    {
        icon: "📄",
        title: "Documentation",
        description: "Full records for regulatory and client audit reporting.",
    },
    {
        icon: "🌍",
        title: "Minimal Impact",
        description: "Minimizing landfill waste and reducing environmental footprint.",
    },
];

export async function getSustainRecyclingData(): Promise<SustainRecyclingData> {
    const [sec, itemsSec] = await Promise.all([
        getAxionSection<Raw>("sustainability", "recycling"),
        getAxionSection<Raw>("sustainability", "recycling-items"),
    ]);

    const rawItems = itemsSec?.items;
    const items: SustainRecyclingItem[] =
        Array.isArray(rawItems) && rawItems.length > 0
            ? rawItems.map((item: Raw, i: number) => ({
                  icon: String(item.icon ?? DEFAULT_RECYCLING_ITEMS[i]?.icon ?? "🔋"),
                  title: String(item.title ?? DEFAULT_RECYCLING_ITEMS[i]?.title ?? ""),
                  description: String(item.description ?? DEFAULT_RECYCLING_ITEMS[i]?.description ?? ""),
              }))
            : DEFAULT_RECYCLING_ITEMS;

    return {
        label: val(sec?.label) ?? "RECYCLING PROGRAMS",
        heading: val(sec?.heading) ?? "Responsible\nEnd-of-Life Management",
        body:
            val(sec?.body) ??
            "We partner with certified recycling providers to ensure safe, compliant disposal of VRLA and wet cell batteries.",
        quote:
            val(sec?.quote) ??
            '"Zero landfill. Certified partners.\nCompliant every step of the way."',
        items,
        imageUrl: val(sec?.image_url) ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
        imageAlt: val(sec?.image_alt) ?? "Battery recycling facility",
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// ENVIRONMENTAL COMPLIANCE
// ══════════════════════════════════
export interface SustainComplianceCard {
    accentColor: string;
    icon: string;
    title: string;
    description: string;
}

export interface SustainComplianceData {
    label: string;
    heading: string;
    body: string;
    cards: SustainComplianceCard[];
    overrides: SectionOverrides;
}

const DEFAULT_COMPLIANCE_CARDS: SustainComplianceCard[] = [
    {
        accentColor: "#1e88e5",
        icon: "📜",
        title: "Local & International\nRegulations",
        description:
            "Full adherence to local, national, and international regulations governing battery handling, storage, and disposal.",
    },
    {
        accentColor: "#1565c0",
        icon: "🔄",
        title: "Full Lifecycle\nCompliance",
        description:
            "Environmental compliance considerations integrated throughout specification, installation, operation, and end-of-life.",
    },
    {
        accentColor: "#0d47a1",
        icon: "📊",
        title: "Reporting &\nAudit Support",
        description:
            "Supporting enterprise and public-sector clients with comprehensive reporting and audit documentation requirements.",
    },
];

export async function getSustainComplianceData(): Promise<SustainComplianceData> {
    const [sec, cardsSec] = await Promise.all([
        getAxionSection<Raw>("sustainability", "compliance"),
        getAxionSection<Raw>("sustainability", "compliance-cards"),
    ]);

    const rawCards = cardsSec?.cards;
    const cards: SustainComplianceCard[] =
        Array.isArray(rawCards) && rawCards.length > 0
            ? rawCards.map((c: Raw, i: number) => ({
                  accentColor: String(c.accent_color ?? DEFAULT_COMPLIANCE_CARDS[i]?.accentColor ?? "#1e88e5"),
                  icon: String(c.icon ?? DEFAULT_COMPLIANCE_CARDS[i]?.icon ?? "📋"),
                  title: String(c.title ?? DEFAULT_COMPLIANCE_CARDS[i]?.title ?? ""),
                  description: String(c.description ?? DEFAULT_COMPLIANCE_CARDS[i]?.description ?? ""),
              }))
            : DEFAULT_COMPLIANCE_CARDS;

    return {
        label: val(sec?.label) ?? "ENVIRONMENTAL COMPLIANCE",
        heading: val(sec?.heading) ?? "Compliance\nAt Every Stage",
        body:
            val(sec?.body) ??
            "Working with manufacturers and partners that comply with environmental regulations and recognized industry standards.",
        cards,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// RESPONSIBLE SOURCING
// ══════════════════════════════════
export interface SustainSourcingCard {
    number: string;
    numberColor: string;
    cardColor: string;
    icon: string;
    title: string;
    description: string;
}

export interface SustainSourcingData {
    label: string;
    heading: string;
    body: string;
    cards: SustainSourcingCard[];
    overrides: SectionOverrides;
}

const DEFAULT_SOURCING_CARDS: SustainSourcingCard[] = [
    {
        number: "01",
        numberColor: "#1a1a2e",
        cardColor: "#1976d2",
        icon: "🌱",
        title: "Eco-Responsible\nManufacturers",
        description:
            "Partnering exclusively with environmentally responsible battery manufacturers and technology providers.",
    },
    {
        number: "02",
        numberColor: "#ffffff",
        cardColor: "#1e88e5",
        icon: "🔗",
        title: "Supply Chain\nTransparency",
        description:
            "Ensuring full transparency and compliance throughout the supply chain from raw materials to delivery.",
    },
    {
        number: "03",
        numberColor: "#1e88e5",
        cardColor: "#0d47a1",
        icon: "⏳",
        title: "Long-Life\nPriority",
        description:
            "Prioritizing long-life, reliable battery solutions that reduce replacement frequency and environmental impact.",
    },
];

export async function getSustainSourcingData(): Promise<SustainSourcingData> {
    const [sec, cardsSec] = await Promise.all([
        getAxionSection<Raw>("sustainability", "sourcing"),
        getAxionSection<Raw>("sustainability", "sourcing-cards"),
    ]);

    const rawCards = cardsSec?.cards;
    const cards: SustainSourcingCard[] =
        Array.isArray(rawCards) && rawCards.length > 0
            ? rawCards.map((c: Raw, i: number) => ({
                  number: String(c.number ?? DEFAULT_SOURCING_CARDS[i]?.number ?? `0${i + 1}`),
                  numberColor: String(c.number_color ?? DEFAULT_SOURCING_CARDS[i]?.numberColor ?? "#ffffff"),
                  cardColor: String(c.card_color ?? DEFAULT_SOURCING_CARDS[i]?.cardColor ?? "#1e88e5"),
                  icon: String(c.icon ?? DEFAULT_SOURCING_CARDS[i]?.icon ?? "🌱"),
                  title: String(c.title ?? DEFAULT_SOURCING_CARDS[i]?.title ?? ""),
                  description: String(c.description ?? DEFAULT_SOURCING_CARDS[i]?.description ?? ""),
              }))
            : DEFAULT_SOURCING_CARDS;

    return {
        label: val(sec?.label) ?? "RESPONSIBLE SOURCING",
        heading: val(sec?.heading) ?? "Supply Chain\nIntegrity",
        body:
            val(sec?.body) ??
            "Carefully selected battery suppliers that share our commitment to sustainability, ethical practices, and high-quality, long-life solutions.",
        cards,
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// SAFETY & HANDLING
// ══════════════════════════════════
export interface SustainSafetyItem {
    icon: string;
    title: string;
    description: string;
}

export interface SustainSafetyCert {
    abbr: string;
    label: string;
}

export interface SustainSafetyData {
    label: string;
    heading: string;
    body: string;
    items: SustainSafetyItem[];
    certs: SustainSafetyCert[];
    imageUrl?: string;
    imageAlt?: string;
    imageBadge: string;
    imageBadgeSub: string;
    overrides: SectionOverrides;
}

const DEFAULT_SAFETY_ITEMS: SustainSafetyItem[] = [
    {
        icon: "🔧",
        title: "Safe Installation",
        description: "Practices and procedures for compliant, safe battery system installation.",
    },
    {
        icon: "📦",
        title: "Handling & Storage",
        description: "Guidelines for safe transportation, storage, and pre-installation handling.",
    },
    {
        icon: "👷",
        title: "Training & Guidance",
        description: "Recommendations and resources for maintenance team safety protocols.",
    },
    {
        icon: "📐",
        title: "Industry Standards",
        description: "Alignment with IEEE, UL, CSA, and applicable safety standards.",
    },
];

const DEFAULT_SAFETY_CERTS: SustainSafetyCert[] = [
    { abbr: "IEEE", label: "Std" },
    { abbr: "UL", label: "Listed" },
    { abbr: "CSA", label: "Certified" },
    { abbr: "IEC", label: "Compliant" },
];

export async function getSustainSafetyData(): Promise<SustainSafetyData> {
    const [sec, itemsSec] = await Promise.all([
        getAxionSection<Raw>("sustainability", "safety"),
        getAxionSection<Raw>("sustainability", "safety-items"),
    ]);

    const rawItems = itemsSec?.items;
    const items: SustainSafetyItem[] =
        Array.isArray(rawItems) && rawItems.length > 0
            ? rawItems.map((item: Raw, i: number) => ({
                  icon: String(item.icon ?? DEFAULT_SAFETY_ITEMS[i]?.icon ?? "🔧"),
                  title: String(item.title ?? DEFAULT_SAFETY_ITEMS[i]?.title ?? ""),
                  description: String(item.description ?? DEFAULT_SAFETY_ITEMS[i]?.description ?? ""),
              }))
            : DEFAULT_SAFETY_ITEMS;

    // Certs can now come from CMS (safety-items section) OR fall back to defaults
    const rawCerts = itemsSec?.certs;
    const certs: SustainSafetyCert[] =
        Array.isArray(rawCerts) && rawCerts.length > 0
            ? rawCerts.map((c: Raw) => ({ abbr: String(c.abbr ?? ""), label: String(c.label ?? "") }))
            : DEFAULT_SAFETY_CERTS;

    return {
        label: val(sec?.label) ?? "SAFETY & HANDLING",
        heading: val(sec?.heading) ?? "Safety Standards\nFor Every Installation",
        body:
            val(sec?.body) ??
            "Proper battery handling is essential for safety, system performance, and compliance. Axion provides guidance and support to ensure batteries are installed, operated, and maintained safely.",
        items,
        certs,
        imageUrl: val(sec?.image_url) ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
        imageAlt: val(sec?.image_alt) ?? "Safe battery installation",
        imageBadge: val(sec?.image_badge) ?? "⚠️  Safety First",
        imageBadgeSub: val(sec?.image_badge_sub) ?? "IEEE · UL · CSA Aligned",
        overrides: buildOverrides(sec),
    };
}

// ══════════════════════════════════
// CTA
// ══════════════════════════════════
export interface SustainCtaData {
    label: string;
    heading: string;
    body: string;
    btnPrimaryLabel: string;
    btnPrimaryUrl: string;
    btnGhostLabel: string;
    btnGhostUrl: string;
    overrides: SectionOverrides;
}

export async function getSustainCtaData(): Promise<SustainCtaData> {
    const sec = await getAxionSection<Raw>("sustainability", "cta");
    return {
        label: val(sec?.label) ?? "TAKE ACTION",
        heading: val(sec?.heading) ?? "Committed to Compliance.\nCommitted to the Environment.",
        body:
            val(sec?.body) ??
            "Speak with our team about sustainability and compliance support for your project.",
        btnPrimaryLabel: val(sec?.btn_primary_label) ?? "Learn About Our Approach →",
        btnPrimaryUrl: val(sec?.btn_primary_url) ?? "/about",
        btnGhostLabel: val(sec?.btn_ghost_label) ?? "Contact Us →",
        btnGhostUrl: val(sec?.btn_ghost_url) ?? "/contact",
        overrides: buildOverrides(sec),
    };
}
