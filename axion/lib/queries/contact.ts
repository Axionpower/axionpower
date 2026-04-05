import { fetchGraphQL } from "@/lib/graphql";

// ── GraphQL Query ──
const CONTACT_QUERY = `
  query GetContactSection {
    allContact(first: 1) {
      nodes {
        contactSection {
          labelText
          heading
          description
          highlightsTitle
          highlightsList {
            text
          }
          buttonLabel
          buttonUrl
          image {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

// ── TypeScript Interfaces ──
export interface ContactData {
  labelText: string;
  heading: string;
  headingTag?: string;
  headingColor?: string;
  description: string;
  bodyColor?: string;
  highlightsTitle: string;
  highlightsTag?: string;
  highlightsColor?: string;
  highlights: string[];
  buttonLabel: string;
  buttonUrl: string;
  image: { node: { sourceUrl: string; altText: string } } | null;
  fallbackImage: string;
  videoUrl?: string;
  labelColor?: string;
}

// ── Default values ──
export const CONTACT_DEFAULTS: ContactData = {
  labelText: "Contact Axion Critical Power Solutions",
  heading: "Get Expert Guidance on Your Battery Systems",
  headingTag: "h2",
  headingColor: "#0f172a",
  description:
    "Connect with Axion Critical Power Solutions to discuss your mission-critical power requirements, upcoming battery replacements, or technical inquiries. Our team provides engineering guidance, lifecycle support, and system recommendations to ensure reliable, compliant, and safe battery solutions.",
  highlightsTitle: "Key Highlights",
  highlightsTag: "h3",
  highlightsColor: "#ffffff",
  highlights: [
    "Request a quote for VRLA or flooded battery systems",
    "Technical consultation for UPS, DC, or backup power systems",
    "General inquiries about solutions, compliance, or lifecycle support",
  ],
  buttonLabel: "Contact Axion Today",
  buttonUrl: "/contact",
  image: null,
  fallbackImage: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
  labelColor: "#ffffff",
  bodyColor: "rgba(255,255,255,0.85)",
};

// ── Merge helper ──
function mergeWithDefaults(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
): ContactData {
  return {
    labelText: data.labelText || CONTACT_DEFAULTS.labelText,
    heading: data.heading || CONTACT_DEFAULTS.heading,
    headingTag: data.headingTag || CONTACT_DEFAULTS.headingTag,
    headingColor: data.headingColor || CONTACT_DEFAULTS.headingColor,
    description: data.description || CONTACT_DEFAULTS.description,
    bodyColor: data.bodyColor || CONTACT_DEFAULTS.bodyColor,
    highlightsTitle: data.highlightsTitle || CONTACT_DEFAULTS.highlightsTitle,
    highlightsTag: data.highlightsTag || CONTACT_DEFAULTS.highlightsTag,
    highlightsColor: data.highlightsColor || CONTACT_DEFAULTS.highlightsColor,
    highlights: data.highlightsList?.length
      ? data.highlightsList.map((h: { text: string }) => h.text)
      : CONTACT_DEFAULTS.highlights,
    buttonLabel: data.buttonLabel || CONTACT_DEFAULTS.buttonLabel,
    buttonUrl: data.buttonUrl || CONTACT_DEFAULTS.buttonUrl,
    image: data.image || CONTACT_DEFAULTS.image,
    fallbackImage: CONTACT_DEFAULTS.fallbackImage,
    labelColor: data.labelColor || CONTACT_DEFAULTS.labelColor,
  };
}

// ── Data Fetcher ──
export async function getContactData(): Promise<ContactData> {
  // ── Try Axion CMS first ──
  try {
    const { getAxionSection } = await import("@/lib/queries/axion-cms");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ax = await getAxionSection<any>("home", "contact");
    if (ax && (ax.heading || ax.label_text)) {
      const merged = { ...CONTACT_DEFAULTS };
      if (ax.label_text) merged.labelText = ax.label_text;
      if (ax.label_color) merged.labelColor = ax.label_color;
      if (ax.heading) merged.heading = ax.heading;
      if (ax.heading_color) merged.headingColor = ax.heading_color;
      if (ax.description) merged.description = ax.description;
      if (ax.body_color) merged.bodyColor = ax.body_color;
      if (ax.highlights_title) merged.highlightsTitle = ax.highlights_title;
      if (ax.highlights_color) merged.highlightsColor = ax.highlights_color;
      if (ax.button_label) merged.buttonLabel = ax.button_label;
      if (ax.button_url) merged.buttonUrl = ax.button_url;
      if (ax.image_url) merged.image = { node: { sourceUrl: ax.image_url, altText: ax.heading || "" } };
      if (Array.isArray(ax.highlights) && ax.highlights.length > 0) {
        merged.highlights = ax.highlights.map((h: { text: string }) => h.text).filter(Boolean);
      }
      return merged;
    }
  } catch (e) { console.log("Axion CMS contact not available", e); }

  // ── Fallback: old ACF ──
  try {
    const data = await fetchGraphQL<{
      allContact: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodes: { contactSection: any }[];
      };
    }>(CONTACT_QUERY);

    const node = data?.allContact?.nodes?.[0];
    if (!node?.contactSection) return CONTACT_DEFAULTS;

    return mergeWithDefaults(node.contactSection);
  } catch (error) {
    console.error("Failed to fetch contact data:", error);
    return CONTACT_DEFAULTS;
  }
}
