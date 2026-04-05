import { fetchGraphQL } from "@/lib/graphql";

// ── GraphQL Query ──
const COMPLIANCE_QUERY = `
  query GetComplianceSection {
    compliances(first: 1) {
      nodes {
        complianceSection {
          sectionBgColor
          columns {
            heading
            headingTag
            headingColor
            headingFontSize
            image {
              node {
                sourceUrl
                altText
              }
            }
            description
            descriptionColor
            descriptionFontSize
            buttonLabel
            buttonUrl
            buttonBgColor
            buttonTextColor
            buttonFontSize
            buttonRadius
            buttonHoverBgColor
            highlightsTitle
            highlightsTitleTag
            highlightsTitleColor
            highlightsTitleFontSize
            highlights {
              text
            }
            highlightsTextColor
            highlightsTextFontSize
            highlightsIconColor
          }
          cardBgColor
          cardBorderColor
          cardBorderRadius
        }
      }
    }
  }
`;

// ── TypeScript Interfaces ──
export interface ComplianceHighlight {
    text: string;
}

export interface ComplianceColumn {
    heading: string;
    headingTag: string;
    headingColor: string;
    headingFontSize: number;
    image: { node: { sourceUrl: string; altText: string } } | null;
    videoUrl?: string;
    description: string;
    descriptionColor: string;
    descriptionFontSize: number;
    buttonLabel: string;
    buttonUrl: string;
    buttonBgColor: string;
    buttonTextColor: string;
    buttonFontSize: number;
    buttonRadius: number;
    buttonHoverBgColor: string;
    highlightsTitle: string;
    highlightsTitleTag: string;
    highlightsTitleColor: string;
    highlightsTitleFontSize: number;
    highlights: ComplianceHighlight[];
    highlightsTextColor: string;
    highlightsTextFontSize: number;
    highlightsIconColor: string;
}

export interface ComplianceData {
    sectionBgColor: string;
    columns: ComplianceColumn[];
    cardBgColor: string;
    cardBorderColor: string;
    cardBorderRadius: number;
}

// ── Default values ──
const DEFAULT_COLUMN_1: ComplianceColumn = {
    heading: "Sustainability & Compliance",
    headingTag: "h2",
    headingColor: "#ffffff",
    headingFontSize: 30,
    image: null,
    description:
        "Axion Critical Power Solutions prioritizes environmental responsibility and regulatory compliance across the full lifecycle of every battery system. From recycling programs to safe handling and operational guidance, our solutions support sustainable, reliable, and responsible power system operations.",
    descriptionColor: "#cbd5e1",
    descriptionFontSize: 13,
    buttonLabel: "LEARN MORE",
    buttonUrl: "/sustainability",
    buttonBgColor: "#0EA5E9",
    buttonTextColor: "#ffffff",
    buttonFontSize: 11,
    buttonRadius: 50,
    buttonHoverBgColor: "#38BDF8",
    highlightsTitle: "Key Highlights:",
    highlightsTitleTag: "h3",
    highlightsTitleColor: "#ffffff",
    highlightsTitleFontSize: 15,
    highlights: [
        { text: "Environmentally responsible recycling programs" },
        { text: "Compliance with applicable environmental regulations" },
        { text: "Responsible sourcing of battery products" },
        { text: "Safe handling and installation guidance" },
    ],
    highlightsTextColor: "#cbd5e1",
    highlightsTextFontSize: 13,
    highlightsIconColor: "#0EA5E9",
};

const DEFAULT_COLUMN_2: ComplianceColumn = {
    heading: "Quality, Safety & Compliance",
    headingTag: "h2",
    headingColor: "#ffffff",
    headingFontSize: 30,
    image: null,
    description:
        "Axion Critical Power Solutions prioritizes quality, safety, and compliance across all battery solutions. We partner with trusted manufacturers and follow recognized industry standards to ensure reliable, safe, and long-lasting mission-critical power systems.",
    descriptionColor: "#cbd5e1",
    descriptionFontSize: 13,
    buttonLabel: "LEARN MORE",
    buttonUrl: "/quality",
    buttonBgColor: "#0EA5E9",
    buttonTextColor: "#ffffff",
    buttonFontSize: 11,
    buttonRadius: 50,
    buttonHoverBgColor: "#38BDF8",
    highlightsTitle: "Key Highlights:",
    highlightsTitleTag: "h3",
    highlightsTitleColor: "#ffffff",
    highlightsTitleFontSize: 15,
    highlights: [
        { text: "Adherence to industry standards and best practices" },
        { text: "Manufacturer quality assurance and verification" },
        { text: "Safe handling, installation, and maintenance guidance" },
        { text: "Environmental responsibility throughout the battery lifecycle" },
    ],
    highlightsTextColor: "#cbd5e1",
    highlightsTextFontSize: 13,
    highlightsIconColor: "#0EA5E9",
};

export const COMPLIANCE_DEFAULTS: ComplianceData = {
    sectionBgColor: "#0a0a14",
    columns: [DEFAULT_COLUMN_1, DEFAULT_COLUMN_2],
    cardBgColor: "#111827",
    cardBorderColor: "rgba(255, 255, 255, 0.06)",
    cardBorderRadius: 14,
};

// ── Merge helper ──
function mergeColumn(
    col: Partial<ComplianceColumn>,
    def: ComplianceColumn
): ComplianceColumn {
    const merged: ComplianceColumn = {
        ...def,
        ...col,
        highlights: col.highlights?.length ? col.highlights : def.highlights,
        image: col.image || def.image,
    };
    // Normalize select fields (WPGraphQL returns arrays)
    if (Array.isArray(merged.headingTag)) merged.headingTag = merged.headingTag[0] || "h2";
    if (Array.isArray(merged.highlightsTitleTag)) merged.highlightsTitleTag = merged.highlightsTitleTag[0] || "h3";
    return merged;
}

function mergeWithDefaults(data: Partial<ComplianceData>): ComplianceData {
    const merged = { ...COMPLIANCE_DEFAULTS, ...data };
    if (data.columns?.length) {
        merged.columns = data.columns.map((col, i) =>
            mergeColumn(col, i === 0 ? DEFAULT_COLUMN_1 : DEFAULT_COLUMN_2)
        );
    }
    return merged;
}

// ── Data Fetcher ──
export async function getComplianceData(): Promise<ComplianceData> {
    // ── Try Axion CMS first ──
    try {
        const { getAxionSection, getAxionAllSections } = await import("@/lib/queries/axion-cms");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let ax = await getAxionSection<any>("home", "compliance");

        // Fallback: if per-section query fails, try allSections
        if (!ax) {
            const all = await getAxionAllSections("home");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ax = (all as any)?.compliance ?? null;
        }

        if (ax && (ax.col1_heading || ax.col2_heading)) {
            // Helper: parse newline-separated highlights text into array
            const parseHighlights = (text: string): ComplianceHighlight[] =>
                (text || "").split("\n").filter(Boolean).map(line => ({ text: line.trim() }));

            // Map flat CMS fields → column objects
            const mapColumn = (prefix: string, defaults: ComplianceColumn): ComplianceColumn => ({
                heading: ax[`${prefix}_heading`] || defaults.heading,
                headingTag: ax[`${prefix}_heading_tag`] || defaults.headingTag,
                headingColor: ax[`${prefix}_heading_color`] || defaults.headingColor,
                headingFontSize: parseInt(ax[`${prefix}_heading_font_size`] || defaults.headingFontSize, 10),
                image: ax[`${prefix}_image_url`]
                    ? { node: { sourceUrl: ax[`${prefix}_image_url`], altText: ax[`${prefix}_heading`] || "" } }
                    : defaults.image,
                description: ax[`${prefix}_description`] || defaults.description,
                descriptionColor: ax[`${prefix}_description_color`] || defaults.descriptionColor,
                descriptionFontSize: parseInt(ax[`${prefix}_description_font_size`] || defaults.descriptionFontSize, 10),
                buttonLabel: ax[`${prefix}_button_label`] || defaults.buttonLabel,
                buttonUrl: ax[`${prefix}_button_url`] || defaults.buttonUrl,
                buttonBgColor: ax[`${prefix}_button_bg_color`] || defaults.buttonBgColor,
                buttonTextColor: ax[`${prefix}_button_text_color`] || defaults.buttonTextColor,
                buttonFontSize: parseInt(ax[`${prefix}_button_font_size`] || defaults.buttonFontSize, 10),
                buttonRadius: parseInt(ax[`${prefix}_button_radius`] || defaults.buttonRadius, 10),
                buttonHoverBgColor: defaults.buttonHoverBgColor,
                highlightsTitle: ax[`${prefix}_highlights_title`] || defaults.highlightsTitle,
                highlightsTitleTag: defaults.highlightsTitleTag,
                highlightsTitleColor: ax[`${prefix}_highlights_title_color`] || defaults.highlightsTitleColor,
                highlightsTitleFontSize: parseInt(ax[`${prefix}_highlights_title_font_size`] || defaults.highlightsTitleFontSize, 10),
                highlights: ax[`${prefix}_highlights_text`]
                    ? parseHighlights(ax[`${prefix}_highlights_text`])
                    : defaults.highlights,
                highlightsTextColor: ax[`${prefix}_highlights_text_color`] || defaults.highlightsTextColor,
                highlightsTextFontSize: parseInt(ax[`${prefix}_highlights_text_font_size`] || defaults.highlightsTextFontSize, 10),
                highlightsIconColor: ax[`${prefix}_highlights_icon_color`] || defaults.highlightsIconColor,
            });

            return {
                sectionBgColor: ax.section_bg_color || COMPLIANCE_DEFAULTS.sectionBgColor,
                cardBgColor: ax.card_bg_color || COMPLIANCE_DEFAULTS.cardBgColor,
                cardBorderColor: ax.card_border_color || COMPLIANCE_DEFAULTS.cardBorderColor,
                cardBorderRadius: parseInt(ax.card_border_radius || COMPLIANCE_DEFAULTS.cardBorderRadius, 10),
                columns: [
                    mapColumn("col1", DEFAULT_COLUMN_1),
                    mapColumn("col2", DEFAULT_COLUMN_2),
                ],
            };
        }
    } catch (e) { console.log("Axion CMS compliance not available", e); }

    // ── Fallback: old ACF ──
    try {
        const data = await fetchGraphQL<{
            compliances: {
                nodes: { complianceSection: Partial<ComplianceData> }[];
            };
        }>(COMPLIANCE_QUERY);

        const node = data?.compliances?.nodes?.[0];
        if (!node?.complianceSection) return COMPLIANCE_DEFAULTS;

        return mergeWithDefaults(node.complianceSection);
    } catch (error) {
        // compliances CPT not registered in WP GraphQL — using defaults
        void error;
        return COMPLIANCE_DEFAULTS;
    }
}
