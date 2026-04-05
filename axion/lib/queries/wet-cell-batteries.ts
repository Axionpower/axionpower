import { getAxionSection } from "@/lib/queries/axion-cms";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Raw = any;

const FALLBACK_IMG = "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png";

function val<T>(v: T): T | undefined {
    if (v === null || v === undefined) return undefined;
    if (typeof v === "string" && !v.trim()) return undefined;
    if (typeof v === "number" && v === 0) return undefined;
    if (Array.isArray(v) && v.length === 0) return undefined;
    return v;
}

function compact<T extends object>(obj: T): Partial<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([, v]) => v !== undefined)
    ) as Partial<T>;
}

function img(raw: Raw, field: string): string | undefined {
    return val(raw?.[field + "_url"] || raw?.[field] || "");
}

function vid(raw: Raw, field: string): string | undefined {
    return val(raw?.[field + "_video_url"] || "");
}

function px(raw: Raw, field: string): string | undefined {
    const v = raw?.[field];
    if (v === null || v === undefined || v === "" || v === 0) return undefined;
    return `${v}px`;
}

// ═══════════════════════════════
// HERO
// ═══════════════════════════════
export interface WetCellHeroData {
    backgroundImage?: string;
    backgroundVideoUrl?: string;
    heading?: string;
    headingTag?: string;
    headingHighlight?: string;
    headingColor?: string;
    description?: string;
    bodyColor?: string;
    keyHighlights?: string[];
    ctaLabel?: string;
    ctaUrl?: string;
    breadcrumb?: string;
    breadcrumbColor?: string;
    btnBg?: string;
    btnFg?: string;
    highlightColor?: string;
    headingFontSize?: string;
    bodyFontSize?: string;
    sectionMinHeight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

export async function getWetCellHeroData(): Promise<Partial<WetCellHeroData> | undefined> {
    const ax = await getAxionSection<Raw>("wet-cell-batteries", "hero");
    if (!ax) return undefined;

    const highlights = Array.isArray(ax.highlights)
        ? ax.highlights.map((h: Raw) => h.text as string).filter(Boolean)
        : [];

    // compact() is critical: WetCellHeroSection does { ...DEFAULTS, ...data }
    return compact({
        backgroundImage: img(ax, "background_image"),
        backgroundVideoUrl: vid(ax, "background_image"),
        breadcrumb: val(ax.breadcrumb),
        heading: val(ax.heading),
        headingHighlight: val(ax.heading_highlight),
        description: val(ax.subtitle),
        keyHighlights: val(highlights),
        ctaLabel: val(ax.cta_text),
        ctaUrl: val(ax.cta_link),
        // Typography
        headingTag: val(ax.heading_tag),
        headingFontSize: px(ax, "heading_font_size"),
        bodyFontSize: px(ax, "body_font_size"),
        // Dimensions
        sectionMinHeight: px(ax, "section_min_height"),
        paddingBottom: px(ax, "padding_bottom"),
        paddingLeft: px(ax, "padding_left"),
        paddingRight: px(ax, "padding_right"),
        // Colors
        headingColor: val(ax.heading_color),
        bodyColor: val(ax.body_color),
        breadcrumbColor: val(ax.breadcrumb_color),
        btnBg: val(ax.btn_primary_bg),
        btnFg: val(ax.btn_primary_fg),
        highlightColor: val(ax.highlight_color),
    });
}

// ═══════════════════════════════
// ABOUT
// ═══════════════════════════════
export async function getWetCellAboutData(): Promise<{
    label?: string;
    description?: string;
    bgColor?: string;
    labelColor?: string;
    bodyColor?: string;
    labelFontSize?: string;
    bodyFontSize?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
} | undefined> {
    const ax = await getAxionSection<Raw>("wet-cell-batteries", "about");
    if (!ax) return undefined;
    return compact({
        label: val(ax.label_text),
        description: val(ax.description),
        bgColor: val(ax.bg_color),
        labelColor: val(ax.label_color),
        bodyColor: val(ax.body_color),
        labelFontSize: px(ax, "label_font_size"),
        bodyFontSize: px(ax, "body_font_size"),
        marginTopOverlap: px(ax, "margin_top_overlap"),
        borderRadiusTop: px(ax, "border_radius_top"),
        paddingTop: px(ax, "padding_top"),
        paddingBottom: px(ax, "padding_bottom"),
        paddingLeft: px(ax, "padding_left"),
        paddingRight: px(ax, "padding_right"),
    });
}

// ═══════════════════════════════
// APPLICATIONS
// ═══════════════════════════════
export interface AppCard {
    title: string;
    description: string;
    image: string;
}

export async function getWetCellApplicationsData(): Promise<{
    label?: string;
    heading?: string;
    cards?: AppCard[];
    headingTag?: string;
    cardHeadingTag?: string;
    headingColor?: string;
    headingFontSize?: string;
    headingFontWeight?: string;
    labelColor?: string;
    bgColor?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
} | undefined> {
    const ax = await getAxionSection<Raw>("wet-cell-batteries", "applications");
    if (!ax) return undefined;

    const cards = Array.isArray(ax.cards) && ax.cards.length > 0
        ? ax.cards.map((c: Raw) => ({
            title: c.title || "",
            description: c.description || "",
            image: img(c, "image") || FALLBACK_IMG,
        }))
        : undefined;

    return compact({
        label: val(ax.label),
        heading: val(ax.heading),
        cards,
        headingTag: val(ax.heading_tag),
        cardHeadingTag: val(ax.card_heading_tag),
        headingColor: val(ax.heading_color),
        headingFontSize: px(ax, "heading_font_size"),
        headingFontWeight: val(ax.heading_font_weight) ? `${ax.heading_font_weight}` : undefined,
        labelColor: val(ax.label_color),
        bgColor: val(ax.bg_color),
        marginTopOverlap: px(ax, "margin_top_overlap"),
        borderRadiusTop: px(ax, "border_radius_top"),
        paddingTop: px(ax, "padding_top"),
        paddingBottom: px(ax, "padding_bottom"),
        paddingLeft: px(ax, "padding_left"),
        paddingRight: px(ax, "padding_right"),
    });
}

// ═══════════════════════════════
// KEY BENEFITS
// ═══════════════════════════════
export interface BenefitCard {
    title: string;
    description: string;
    image: string;
}

export async function getWetCellKeyBenefitsData(): Promise<{
    heading?: string;
    cards?: BenefitCard[];
    headingTag?: string;
    cardHeadingTag?: string;
    headingColor?: string;
    headingFontSize?: string;
    headingFontWeight?: string;
    bgColor?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
} | undefined> {
    const ax = await getAxionSection<Raw>("wet-cell-batteries", "key-benefits");
    if (!ax) return undefined;

    const cards = Array.isArray(ax.cards) && ax.cards.length > 0
        ? ax.cards.map((c: Raw) => ({
            title: c.title || "",
            description: c.description || "",
            image: img(c, "image") || FALLBACK_IMG,
            videoUrl: vid(c, "image") || undefined,
        }))
        : undefined;

    return compact({
        heading: val(ax.heading),
        cards,
        headingTag: val(ax.heading_tag),
        cardHeadingTag: val(ax.card_heading_tag),
        headingColor: val(ax.heading_color),
        headingFontSize: px(ax, "heading_font_size"),
        headingFontWeight: val(ax.heading_font_weight) ? `${ax.heading_font_weight}` : undefined,
        bgColor: val(ax.bg_color),
        marginTopOverlap: px(ax, "margin_top_overlap"),
        borderRadiusTop: px(ax, "border_radius_top"),
        paddingTop: px(ax, "padding_top"),
        paddingBottom: px(ax, "padding_bottom"),
        paddingLeft: px(ax, "padding_left"),
        paddingRight: px(ax, "padding_right"),
    });
}

// ═══════════════════════════════
// WHY CHOOSE US
// ═══════════════════════════════
export async function getWetCellWhyChooseData(): Promise<{
    headingLine1?: string;
    headingHighlight?: string;
    headingLine3?: string;
    cards?: { number: string; text: string; variant: "white" | "blue" }[];
    headingTag?: string;
    headingColor?: string;
    headingFontSize?: string;
    headingFontWeight?: string;
    highlightColor?: string;
    bgColor?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
} | undefined> {
    const ax = await getAxionSection<Raw>("wet-cell-batteries", "why-choose");
    if (!ax) return undefined;

    const cards = Array.isArray(ax.cards) && ax.cards.length > 0
        ? ax.cards.map((c: Raw) => ({
            number: c.number || "",
            text: c.text || "",
            variant: (c.variant === "blue" ? "blue" : "white") as "white" | "blue",
        }))
        : undefined;

    return compact({
        headingLine1: val(ax.heading_line1),
        headingHighlight: val(ax.heading_highlight),
        headingLine3: val(ax.heading_line3),
        cards,
        headingTag: val(ax.heading_tag),
        headingColor: val(ax.heading_color),
        headingFontSize: px(ax, "heading_font_size"),
        headingFontWeight: val(ax.heading_font_weight) ? `${ax.heading_font_weight}` : undefined,
        highlightColor: val(ax.highlight_color),
        bgColor: val(ax.bg_color),
        marginTopOverlap: px(ax, "margin_top_overlap"),
        borderRadiusTop: px(ax, "border_radius_top"),
        paddingTop: px(ax, "padding_top"),
        paddingBottom: px(ax, "padding_bottom"),
        paddingLeft: px(ax, "padding_left"),
        paddingRight: px(ax, "padding_right"),
    });
}
