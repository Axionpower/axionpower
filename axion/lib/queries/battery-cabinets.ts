import { getAxionSection } from "@/lib/queries/axion-cms";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Raw = any;

const FALLBACK_IMG = "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png";

// ─── val(): convert empty string / 0 / empty array / null → undefined
function val<T>(v: T): T | undefined {
    if (v === null || v === undefined) return undefined;
    if (typeof v === "string" && !v.trim()) return undefined;
    if (typeof v === "number" && v === 0) return undefined;
    if (Array.isArray(v) && v.length === 0) return undefined;
    return v;
}

// ─── compact(): strip keys whose value is undefined.
function compact<T extends object>(obj: T): Partial<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([, v]) => v !== undefined)
    ) as Partial<T>;
}

// ─── img(): resolve image URL from Axion CMS
function img(raw: Raw, field: string): string | undefined {
    return val(raw?.[field + "_url"] || raw?.[field] || "");
}

// ─── vid(): resolve video URL from Axion CMS (companion to image field)
function vid(raw: Raw, field: string): string | undefined {
    return val(raw?.[field + "_video_url"] || "");
}

// ─── px(): convert numeric CMS value to a px string, or undefined if blank
function px(raw: Raw, field: string): string | undefined {
    const v = raw?.[field];
    if (v === null || v === undefined || v === "" || v === 0) return undefined;
    return `${v}px`;
}

// ═══════════════════════════════
// HERO
// ═══════════════════════════════
export interface CabinetsHeroData {
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

export async function getCabinetsHeroData(): Promise<Partial<CabinetsHeroData> | undefined> {
    const ax = await getAxionSection<Raw>("battery-cabinets", "hero");
    if (!ax) return undefined;

    const highlights = Array.isArray(ax.highlights)
        ? ax.highlights.map((h: Raw) => h.text as string).filter(Boolean)
        : [];

    // compact() is critical: CabinetsHeroSection does { ...DEFAULTS, ...data }
    return compact({
        backgroundImage: img(ax, "background_image"),
        backgroundVideoUrl: vid(ax, "background_image"),
        breadcrumb: val(ax.breadcrumb),
        heading: val(ax.heading),
        headingHighlight: val(ax.heading_highlight),
        description: val(ax.description),
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
export async function getCabinetsAboutData(): Promise<{
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
    const ax = await getAxionSection<Raw>("battery-cabinets", "about");
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
// ENGINEERED
// ═══════════════════════════════
export async function getCabinetsEngineeredData(): Promise<{
    label?: string;
    description?: string;
    image?: string;
    imageVideoUrl?: string;
    bgColor?: string;
    labelColor?: string;
    bodyColor?: string;
    accentColor?: string;
    labelFontSize?: string;
    bodyFontSize?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
} | undefined> {
    const ax = await getAxionSection<Raw>("battery-cabinets", "engineered");
    if (!ax) return undefined;
    return compact({
        label: val(ax.label_text),
        description: val(ax.description),
        image: img(ax, "image"),
        imageVideoUrl: vid(ax, "image"),
        bgColor: val(ax.bg_color),
        labelColor: val(ax.label_color),
        bodyColor: val(ax.body_color),
        accentColor: val(ax.accent_color),
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
// KEY BENEFITS
// ═══════════════════════════════
export interface BenefitCard {
    title: string;
    description: string;
    image: string;
    videoUrl?: string;
}

export async function getCabinetsKeyBenefitsData(): Promise<{
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
    const ax = await getAxionSection<Raw>("battery-cabinets", "key-benefits");
    if (!ax) return undefined;

    const cards = Array.isArray(ax.cards) && ax.cards.length > 0
        ? ax.cards.map((c: Raw) => ({
            title: c.title || "",
            description: c.description || "",
            image: img(c, "image") || FALLBACK_IMG,
            videoUrl: vid(c, "image"),
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
// FEATURES
// ═══════════════════════════════
export async function getCabinetsFeaturesData(): Promise<{
    label?: string;
    features?: { text: string; bold?: boolean }[];
    image?: string;
    imageVideoUrl?: string;
    bgColor?: string;
    labelColor?: string;
    bodyColor?: string;
    iconColor?: string;
    labelFontSize?: string;
    bodyFontSize?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
} | undefined> {
    const ax = await getAxionSection<Raw>("battery-cabinets", "features");
    if (!ax) return undefined;

    const features = Array.isArray(ax.features) && ax.features.length > 0
        ? ax.features.map((f: Raw, i: number) => ({
            text: f.text || "",
            bold: i === 0 || f.bold === "1" || f.bold === true,
        }))
        : undefined;

    return compact({
        label: val(ax.label_text),
        features,
        image: img(ax, "image"),
        imageVideoUrl: vid(ax, "image"),
        bgColor: val(ax.bg_color),
        labelColor: val(ax.label_color),
        bodyColor: val(ax.body_color),
        iconColor: val(ax.icon_color),
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
    videoUrl?: string;
}

export async function getCabinetsApplicationsData(): Promise<{
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
    const ax = await getAxionSection<Raw>("battery-cabinets", "applications");
    if (!ax) return undefined;

    const cards = Array.isArray(ax.cards) && ax.cards.length > 0
        ? ax.cards.map((c: Raw) => ({
            title: c.title || "",
            description: c.description || "",
            image: img(c, "image") || FALLBACK_IMG,
            videoUrl: vid(c, "image"),
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
// APPROACH
// ═══════════════════════════════
export async function getCabinetsApproachData(): Promise<{
    label?: string;
    description?: string;
    items?: { title: string; image: string; videoUrl?: string }[];
    bgColor?: string;
    labelColor?: string;
    bodyColor?: string;
    stepBgColor?: string;
    stepTextColor?: string;
    labelFontSize?: string;
    bodyFontSize?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
} | undefined> {
    const ax = await getAxionSection<Raw>("battery-cabinets", "approach");
    if (!ax) return undefined;

    const items = Array.isArray(ax.items) && ax.items.length > 0
        ? ax.items.map((item: Raw) => ({
            title: item.title || "",
            image: img(item, "image") || FALLBACK_IMG,
            videoUrl: vid(item, "image"),
        }))
        : undefined;

    return compact({
        label: val(ax.label_text),
        description: val(ax.description),
        items,
        bgColor: val(ax.bg_color),
        labelColor: val(ax.label_color),
        bodyColor: val(ax.body_color),
        stepBgColor: val(ax.step_bg_color),
        stepTextColor: val(ax.step_text_color),
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
// WHY CHOOSE US
// ═══════════════════════════════
export async function getCabinetsWhyChooseData(): Promise<{
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
    const ax = await getAxionSection<Raw>("battery-cabinets", "why-choose");
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
