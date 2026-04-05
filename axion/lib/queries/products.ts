import { fetchGraphQL } from "@/lib/graphql";

// ── GraphQL Query ──
const PRODUCTS_QUERY = `
  query GetProductsSection {
    products(first: 1) {
      nodes {
        productsSection {
          introBgColor
          labelText
          labelColor
          labelBarColor
          introHeading
          introHeadingColor
          introButtonLabel
          introButtonUrl
          cardsBgColor
          productsList {
            name
            description
            image {
              node {
                sourceUrl
                altText
              }
            }
            highlights {
              text
            }
            applications {
              text
            }
            buttonLabel
            buttonUrl
            iconTop {
              node {
                sourceUrl
                altText
              }
            }
            iconBottom {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  }
`;

// ── TypeScript Interfaces ──
export interface ProductCard {
    name: string;
    description: string;
    image: { node: { sourceUrl: string; altText: string } } | null;
    fallbackImage: string;
    videoUrl?: string;
    highlights: string[];
    applications: string[];
    buttonLabel: string;
    buttonUrl: string;
    iconTop: { node: { sourceUrl: string; altText: string } } | null;
    iconBottom: { node: { sourceUrl: string; altText: string } } | null;
}

export interface ProductsData {
    introBgColor: string;
    labelText: string;
    labelColor: string;
    labelBarColor: string;
    introHeading: string;
    introHeadingColor: string;
    introButtonLabel: string;
    introButtonUrl: string;
    cardsBgColor: string;
    products: ProductCard[];
    highlightsLabel?: string;
    applicationsLabel?: string;
  cardHeadingTag?: string;
  cardTitleColor?: string;
}

// ── Default values ──
export const PRODUCTS_DEFAULTS: ProductsData = {
    introBgColor: "#f5f5f5",
    labelText: "OUR PRODUCTS",
    labelColor: "#0EA5E9",
    labelBarColor: "#0EA5E9",
    introHeading:
        '<span class="grey-text">Axion Critical Power Solutions delivers reliable,</span> high-performance battery solutions for mission-critical power systems. Our products are engineered for safety, durability, and predictable performance across data centers, industrial sites, healthcare facilities, and utility applications.',
    introHeadingColor: "#0f172a",
    introButtonLabel: "VIEW MORE",
    introButtonUrl: "/products",
    cardsBgColor: "#0a0a14",
    highlightsLabel: "Key Highlights",
    applicationsLabel: "Typical Applications:",
    products: [
        {
            name: "VRLA Batteries",
            description:
                "Axion Critical Power Solutions provides high-performance, low-maintenance VRLA (Valve-Regulated Lead-Acid) batteries for mission-critical applications. Sealed and reliable, they are ideal for UPS, DC power plants, and standby systems where space efficiency, predictable performance, and operational reliability are essential.",
            image: null,
            fallbackImage: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
            highlights: [
                "Maintenance-free operation",
                "Compact footprint",
                "High power density",
                "Proven reliability in critical environments",
            ],
            applications: [
                "Data center UPS systems",
                "Telecom power systems",
                "Healthcare facilities",
                "Commercial and industrial UPS installations facilities",
            ],
            buttonLabel: "Learn More",
            buttonUrl: "/vrla-batteries",
            iconTop: null,
            iconBottom: null,
        },
        {
            name: "Wet Cell (Flooded) Batteries",
            description:
                "Axion Critical Power Solutions offers robust Wet Cell (Flooded Lead-Acid) batteries for large-scale, mission-critical DC power systems. Ideal for utility, substation, and industrial applications, these batteries deliver long life, durability, and reliable performance while being fully supported through the lifecycle from selection to replacement and recycling.",
            image: null,
            fallbackImage: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
            highlights: [
                "Long design life",
                "Proven, field-tested technology",
                "Excellent deep-cycle performance",
                "Ideal for critical infrastructure",
            ],
            applications: [
                "Utility substations",
                "Power generation facilities",
                "Industrial DC systems",
                "Long-duration backup power systems",
            ],
            buttonLabel: "Learn More",
            buttonUrl: "/wet-cell-batteries",
            iconTop: null,
            iconBottom: null,
        },
        {
            name: "Stationary Battery Cabinets",
            description:
                "Axion Critical Power Solutions provides engineered stationary battery cabinet solutions designed to integrate seamlessly with UPS and DC power systems. Our cabinets are built for safety, durability, and optimal battery performance in mission-critical environments, including data centers, healthcare facilities, and industrial operations.",
            image: null,
            fallbackImage: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
            highlights: [
                "Maintenance-free operation",
                "Compact footprint",
                "High power density",
                "Proven reliability in critical environments",
            ],
            applications: [],
            buttonLabel: "Learn More",
            buttonUrl: "/battery-cabinets",
            iconTop: null,
            iconBottom: null,
        },
    ],
};

// ── Merge helper ──
function mergeProduct(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p: any,
    def: ProductCard
): ProductCard {
    return {
        name: p.name || def.name,
        description: p.description || def.description,
        image: p.image || def.image,
        fallbackImage: def.fallbackImage,
        highlights: p.highlights?.length
            ? p.highlights.map((h: { text: string }) => h.text)
            : def.highlights,
        applications: p.applications?.length
            ? p.applications.map((a: { text: string }) => a.text)
            : def.applications,
        buttonLabel: p.buttonLabel || def.buttonLabel,
        buttonUrl: p.buttonUrl || def.buttonUrl,
        iconTop: p.iconTop || def.iconTop,
        iconBottom: p.iconBottom || def.iconBottom,
    };
}

function mergeWithDefaults(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any
): ProductsData {
    const merged = { ...PRODUCTS_DEFAULTS, ...data };
    if (data.productsList?.length) {
        merged.products = data.productsList.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (p: any, i: number) =>
                mergeProduct(p, PRODUCTS_DEFAULTS.products[i] || PRODUCTS_DEFAULTS.products[0])
        );
    } else {
        merged.products = PRODUCTS_DEFAULTS.products;
    }
    return merged;
}

// ── Data Fetcher ──
export async function getProductsData(): Promise<ProductsData> {
    // ── Try Axion CMS first ──
    try {
        const { getAxionSection } = await import("@/lib/queries/axion-cms");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ax = await getAxionSection<any>("home", "products");
        if (ax && (ax.label_text || ax.intro_heading || ax.products)) {
            // Helper: parse newline-separated text into string array
            const parseLines = (text: string): string[] =>
                (text || "").split("\n").map(s => s.trim()).filter(Boolean);

            const merged: ProductsData = {
                introBgColor: ax.intro_bg_color || PRODUCTS_DEFAULTS.introBgColor,
                labelText: ax.label_text || PRODUCTS_DEFAULTS.labelText,
                labelColor: ax.label_color || PRODUCTS_DEFAULTS.labelColor,
                labelBarColor: ax.label_bar_color || PRODUCTS_DEFAULTS.labelBarColor,
                introHeading: ax.intro_heading || PRODUCTS_DEFAULTS.introHeading,
                introHeadingColor: ax.intro_heading_color || PRODUCTS_DEFAULTS.introHeadingColor,
                introButtonLabel: ax.intro_button_label || PRODUCTS_DEFAULTS.introButtonLabel,
                introButtonUrl: ax.intro_button_url || PRODUCTS_DEFAULTS.introButtonUrl,
                cardsBgColor: ax.cards_bg_color || PRODUCTS_DEFAULTS.cardsBgColor,
                cardHeadingTag: ax.card_heading_tag || PRODUCTS_DEFAULTS.cardHeadingTag,
                cardTitleColor: ax.card_title_color || PRODUCTS_DEFAULTS.cardTitleColor,
                highlightsLabel: ax.highlights_label || PRODUCTS_DEFAULTS.highlightsLabel,
                applicationsLabel: ax.applications_label || PRODUCTS_DEFAULTS.applicationsLabel,
                products: PRODUCTS_DEFAULTS.products,
            };

            if (Array.isArray(ax.products) && ax.products.length > 0) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                merged.products = ax.products.map((p: any, i: number) => {
                    const def = PRODUCTS_DEFAULTS.products[i] || PRODUCTS_DEFAULTS.products[0];
                    return {
                        name: p.title || def.name,
                        description: p.description || def.description,
                        image: p.image_url
                            ? { node: { sourceUrl: p.image_url, altText: p.title || "" } }
                            : def.image,
                        fallbackImage: def.fallbackImage,
                        videoUrl: p.image_video_url || undefined,
                        highlights: p.highlights ? parseLines(p.highlights) : def.highlights,
                        applications: p.applications ? parseLines(p.applications) : def.applications,
                        buttonLabel: p.button_label || def.buttonLabel,
                        buttonUrl: p.button_url || def.buttonUrl,
                        iconTop: def.iconTop,
                        iconBottom: def.iconBottom,
                    };
                });
            }
            return merged;
        }
    } catch (e) { console.log("Axion CMS products not available", e); }

    // ── Fallback: old ACF ──
    try {
        const data = await fetchGraphQL<{
            products: {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                nodes: { productsSection: any }[];
            };
        }>(PRODUCTS_QUERY);

        const node = data?.products?.nodes?.[0];
        if (!node?.productsSection) return PRODUCTS_DEFAULTS;

        return mergeWithDefaults(node.productsSection);
    } catch (error) {
        console.error("Failed to fetch products data:", error);
        return PRODUCTS_DEFAULTS;
    }
}
