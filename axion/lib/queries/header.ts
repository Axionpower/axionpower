import { getAxionSection } from "./axion-cms";

/**
 * Axion CMS – Header / Navigation Data Fetcher
 * Fetches logo, navigation links, CTA, and style from the CMS
 */

interface CmsNavChild {
    label: string;
    href: string;
}

interface CmsNavItem {
    label: string;
    href: string;
    children: string; // "Label|/url\nLabel2|/url2"
}

interface CmsNavData {
    items?: CmsNavItem[];
}

interface CmsLogoData {
    title?: string;
    subtitle?: string;
    logo_image?: string | number;
    logo_image_url?: string;   // resolved URL from WP attachment ID
    logo_width?: string | number;
    logo_height?: string | number;
    link?: string;
}

interface CmsCtaData {
    text?: string;
    link?: string;
    bg_color?: string;
    text_color?: string;
}

interface CmsStyleData {
    bg_color?: string;
    text_color?: string;
    accent_color?: string;
    dropdown_bg?: string;
    dropdown_text?: string;
}

export interface NavChild {
    label: string;
    href: string;
}

export interface NavItem {
    label: string;
    href: string;
    children?: NavChild[];
}

export interface HeaderData {
    logo: {
        title: string;
        subtitle: string;
        image?: string;
        width?: number;
        height?: number;
        link: string;
    };
    navigation: NavItem[];
    cta: {
        text: string;
        link: string;
        bgColor?: string;
        textColor?: string;
    };
    style: {
        bgColor?: string;
        textColor?: string;
        accentColor?: string;
        dropdownBg?: string;
        dropdownText?: string;
    };
}

/**
 * Parse the "children" textarea string into NavChild[]
 * Format: "Label|/url" per line
 */
function parseChildren(raw: string): NavChild[] {
    if (!raw || !raw.trim()) return [];
    return raw
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
            const [label, href] = line.split("|");
            return { label: label?.trim() || "", href: href?.trim() || "#" };
        })
        .filter((c) => c.label);
}

export async function getHeaderData(): Promise<HeaderData> {
    const [logoRaw, navRaw, ctaRaw, styleRaw] = await Promise.all([
        getAxionSection<CmsLogoData>("header", "logo"),
        getAxionSection<CmsNavData>("header", "navigation"),
        getAxionSection<CmsCtaData>("header", "cta"),
        getAxionSection<CmsStyleData>("header", "style"),
    ]);

    const logo = {
        title: logoRaw?.title || "AXION",
        subtitle: logoRaw?.subtitle || "CRITICAL POWER SOLUTIONS",
        // GraphQL resolves attachment IDs to URLs under `logo_image_url`.
        // Fall back to `logo_image` in case it was saved as a direct URL.
        image: logoRaw?.logo_image_url || (typeof logoRaw?.logo_image === 'string' ? logoRaw.logo_image : undefined) || undefined,
        width:  logoRaw?.logo_width  ? Number(logoRaw.logo_width)  : undefined,
        height: logoRaw?.logo_height ? Number(logoRaw.logo_height) : undefined,
        link: logoRaw?.link || "/",
    };

    // ── Navigation ──
    const navigation: NavItem[] = (navRaw?.items || []).map((item) => {
        const children = parseChildren(item.children);
        return {
            label: item.label,
            href: item.href,
            ...(children.length > 0 ? { children } : {}),
        };
    });

    // ── CTA ──
    const cta = {
        text: ctaRaw?.text || "Get In Touch",
        link: ctaRaw?.link || "/contact",
        bgColor: ctaRaw?.bg_color || undefined,
        textColor: ctaRaw?.text_color || undefined,
    };

    // ── Style ──
    const style = {
        bgColor: styleRaw?.bg_color || undefined,
        textColor: styleRaw?.text_color || undefined,
        accentColor: styleRaw?.accent_color || undefined,
        dropdownBg: styleRaw?.dropdown_bg || undefined,
        dropdownText: styleRaw?.dropdown_text || undefined,
    };

    return { logo, navigation, cta, style };
}
