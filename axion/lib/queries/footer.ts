// ── TypeScript Interfaces ──

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterColumn {
  type: "brand" | "links" | "text";
  // Brand fields
  logoMain?: string;
  logoSub?: string;
  logoImage?: string; // resolved URL
  phone?: string;
  email?: string;
  // Links fields
  title?: string;
  links?: FooterLink[];
  // Text fields
  content?: string;
}

export interface FooterData {
  copyright: string;
  bgColor: string;
  textColor: string;
  headingColor: string;
  linkHoverColor: string;
  dividerColor: string;
  columns: FooterColumn[];
}

// ── Default values ──
export const FOOTER_DEFAULTS: FooterData = {
  copyright: `© ${new Date().getFullYear()} Axion Critical Power Solutions. All rights reserved.`,
  bgColor: "#0a0e1a",
  textColor: "rgba(180, 200, 230, 0.7)",
  headingColor: "#ffffff",
  linkHoverColor: "#0EA5E9",
  dividerColor: "rgba(255, 255, 255, 0.08)",
  columns: [
    {
      type: "brand",
      logoMain: "AXION",
      logoSub: "Critical Power Solutions",
      phone: "",
      email: "",
    },
    {
      type: "links",
      title: "Products",
      links: [
        { label: "VRLA Batteries", url: "/vrla-batteries" },
        { label: "Wet Cell Batteries", url: "/wet-cell-batteries" },
        { label: "Battery Cabinets", url: "/battery-cabinets" },
        { label: "Replacement & Upgrades", url: "/replacement-upgrades" },
      ],
    },
    {
      type: "links",
      title: "Services",
      links: [
        { label: "Emergency Support", url: "/emergency-support" },
        { label: "Maintenance & Monitoring", url: "/maintenance-monitoring" },
        { label: "Safety Training", url: "/safety-training-documentation" },
        { label: "Quality & Compliance", url: "/quality-safety-compliance" },
      ],
    },
    {
      type: "links",
      title: "Industries",
      links: [
        { label: "Data Centers & Colocation", url: "/data-centers-colocation" },
        { label: "Healthcare", url: "/healthcare" },
        { label: "Industrial Infrastructure", url: "/industrial-infrastructure" },
        { label: "Telecommunications", url: "/telecommunications" },
        { label: "Utilities & Substations", url: "/utilities-substations" },
      ],
    },
    {
      type: "links",
      title: "Resources",
      links: [
        { label: "Engineering Resources", url: "/engineering-resources" },
        { label: "Consulting Engineer Hub", url: "/consulting-engineer-hub" },
        { label: "FAQs", url: "/faqs" },
        { label: "About Us", url: "/about" },
        { label: "Sustainability", url: "/sustainability-compliance" },
        { label: "Contact", url: "/contact" },
      ],
    },
  ],
};

// ── Helper: parse "Label|/url" lines into link array ──
function parseLinksText(text: string): FooterLink[] {
  if (!text) return [];
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, url] = line.split("|");
      return { label: label?.trim() || "", url: url?.trim() || "#" };
    })
    .filter((l) => l.label);
}

// ── Map CMS column data → FooterColumn ──
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapColumn(raw: any): FooterColumn {
  const colType = raw.type || "links";

  if (colType === "brand") {
    return {
      type: "brand",
      logoMain: raw.logo_main || "AXION",
      logoSub: raw.logo_sub || "",
      logoImage: raw.logo_image_url || undefined,
      phone: raw.phone || "",
      email: raw.email || "",
    };
  }

  if (colType === "text") {
    return {
      type: "text",
      title: raw.title || "",
      content: raw.content || "",
    };
  }

  // Default: links
  return {
    type: "links",
    title: raw.title || "",
    links: parseLinksText(raw.links_text || ""),
  };
}

// ── Data Fetcher ──
export async function getFooterData(): Promise<FooterData> {
  const { getAxionSection } = await import("@/lib/queries/axion-cms");

  // ── Try new Global location (footer / settings) first ──
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ax = await getAxionSection<any>("footer", "settings");
    if (ax && (ax.columns || ax.copyright)) {
      const result: FooterData = {
        copyright:      ax.copyright       || FOOTER_DEFAULTS.copyright,
        bgColor:        ax.bg_color        || FOOTER_DEFAULTS.bgColor,
        textColor:      ax.text_color      || FOOTER_DEFAULTS.textColor,
        headingColor:   ax.heading_color   || FOOTER_DEFAULTS.headingColor,
        linkHoverColor: ax.link_hover_color || FOOTER_DEFAULTS.linkHoverColor,
        dividerColor:   ax.divider_color   || FOOTER_DEFAULTS.dividerColor,
        columns: FOOTER_DEFAULTS.columns,
      };
      if (Array.isArray(ax.columns) && ax.columns.length > 0) {
        result.columns = ax.columns.map(mapColumn);
      }
      return result;
    }
  } catch { /* fall through */ }

  // ── Fallback: legacy home / footer location ──
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ax = await getAxionSection<any>("home", "footer");
    if (ax && (ax.columns || ax.copyright)) {
      const result: FooterData = {
        copyright:      ax.copyright       || FOOTER_DEFAULTS.copyright,
        bgColor:        ax.bg_color        || FOOTER_DEFAULTS.bgColor,
        textColor:      ax.text_color      || FOOTER_DEFAULTS.textColor,
        headingColor:   ax.heading_color   || FOOTER_DEFAULTS.headingColor,
        linkHoverColor: ax.link_hover_color || FOOTER_DEFAULTS.linkHoverColor,
        dividerColor:   ax.divider_color   || FOOTER_DEFAULTS.dividerColor,
        columns: FOOTER_DEFAULTS.columns,
      };
      if (Array.isArray(ax.columns) && ax.columns.length > 0) {
        result.columns = ax.columns.map(mapColumn);
      }
      return result;
    }
  } catch { /* fall through */ }

  return FOOTER_DEFAULTS;
}
