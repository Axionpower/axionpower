import { getAxionSection } from "@/lib/queries/axion-cms";

type Raw = Record<string, unknown>;
const val = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);
const arr = (v: unknown): Raw[] => {
  if (!Array.isArray(v) || v.length === 0) return [];
  const filled = (v as Raw[]).filter((r) =>
    Object.values(r).some((f) => typeof f === "string" && (f as string).trim())
  );
  return filled;
};

// ============================================================================
// HERO
// ============================================================================
export interface CEHeroStat      { value: string; label: string; }
export interface CEHeroResource  { icon: string; category: string; count: string; }
export interface CEHeroData {
  breadcrumb: string;
  label: string;
  heading: string;
  subtitle: string;
  stats: CEHeroStat[];
  panelTitle: string;
  panelResources: CEHeroResource[];
  btnLabel: string; btnUrl: string;
  bgImage?: string;
  bgVideoUrl?: string;
  accentColor: string;
}
export async function getCEHeroData(): Promise<CEHeroData> {
  const raw: Raw = (await getAxionSection<Raw>("consulting-engineer-hub", "hero")) ?? {};
  const statsRaw = arr(raw.stats);
  const panelRaw = arr(raw.panel_resources);
  return {
    breadcrumb:  val(raw.breadcrumb)   ?? "RESOURCES / CONSULTING ENGINEER HUB",
    label:       val(raw.label)        ?? "CONSULTING ENGINEER HUB",
    heading:     val(raw.heading)      ?? "Your Technical\nSpecification Partner",
    subtitle:    val(raw.subtitle)     ?? "Axion Critical Power Solutions provides consulting engineers, specifiers, and project managers with the technical documentation, basis-of-design resources, and specification language needed to design and specify critical power battery systems with confidence.",
    stats: statsRaw.length > 0
      ? statsRaw.map((s) => ({ value: val(s.value) ?? "", label: val(s.label) ?? "" }))
      : [
          { value: "50+",  label: "Spec Documents"     },
          { value: "2",    label: "Battery Families"   },
          { value: "CSI",  label: "MasterFormat Ready" },
          { value: "Free", label: "Spec Support"       },
        ],
    panelTitle: val(raw.panel_title) ?? "ENGINEERING RESOURCES",
    panelResources: panelRaw.length > 0
      ? panelRaw.map((r) => ({ icon: val(r.icon) ?? "", category: val(r.category) ?? "", count: val(r.count) ?? "" }))
      : [
          { icon: "📄", category: "Datasheets & Cut Sheets",     count: "Available"  },
          { icon: "📐", category: "CAD / BIM Files",             count: "On Request" },
          { icon: "📋", category: "CSI MasterFormat Specs",      count: "Templates"  },
          { icon: "📁", category: "Submittal Packages",          count: "On Request" },
          { icon: "📊", category: "Basis-of-Design Docs",        count: "Available"  },
          { icon: "✅", category: "Compliance Documentation",    count: "Included"   },
        ],
    btnLabel:    val(raw.btn_label)    ?? "Request Spec Support →",
    btnUrl:      val(raw.btn_url)      ?? "/contact",
    bgImage:     val(raw.bg_image),
    bgVideoUrl:  val(raw.bg_image_video_url),
    accentColor: val(raw.accent_color) ?? "rgba(56,214,138,1)",
  };
}

// ============================================================================
// RESOURCES & DOWNLOADS
// ============================================================================
export interface CEResourceCard {
  icon: string;
  title: string;
  description: string;
  badge: string;
  linkLabel: string;
}
export interface CEResourcesData {
  bgColor?: string;
  label: string;
  heading: string;
  subtitle: string;
  requestUrl: string;
  cards: CEResourceCard[];
}
export async function getCEResourcesData(): Promise<CEResourcesData> {
  const raw: Raw = (await getAxionSection<Raw>("consulting-engineer-hub", "resources-downloads")) ?? {};
  const cardsRaw = arr(raw.cards);
  return {
    bgColor:    val(raw.bg_color),
    label:      val(raw.label)       ?? "TECHNICAL RESOURCES",
    heading:    val(raw.heading)     ?? "Specification-Ready Technical Resources",
    subtitle:   val(raw.subtitle)    ?? "Access the documentation you need to specify Axion battery systems — available for VRLA and flooded wet cell product lines.",
    requestUrl: val(raw.request_url) ?? "/contact",
    cards: cardsRaw.length > 0
      ? cardsRaw.map((c) => ({
          icon:        val(c.icon)        ?? "",
          title:       val(c.title)       ?? "",
          description: val(c.description) ?? "",
          badge:       val(c.badge)       ?? "",
          linkLabel:   val(c.link_label)  ?? "Request Access",
        }))
      : [
          { icon: "📄", title: "Product Datasheets",      description: "Full technical specifications, dimensions, performance curves, and terminal configurations for every product.",  badge: "PDF",        linkLabel: "Request Access" },
          { icon: "✂",  title: "Cut Sheets",              description: "Concise one-page summaries for project submittals, RFQ packages, and design team distribution.",              badge: "PDF",        linkLabel: "Request Access" },
          { icon: "📋", title: "CSI MasterFormat Specs",  description: "Division 26 and Division 16 specification language — ready to drop into your project manual.",               badge: "DOCX / PDF", linkLabel: "Request Access" },
          { icon: "📐", title: "CAD & BIM Files",         description: "2D CAD drawings and BIM-ready blocks for battery cabinets and system layouts in DWG and RVT formats.",       badge: "DWG / RVT",  linkLabel: "Request Access" },
          { icon: "📁", title: "Submittal Templates",     description: "Pre-formatted submittal packages including cover sheets, product data, and installation documentation.",      badge: "Package",    linkLabel: "Request Access" },
          { icon: "📊", title: "Basis-of-Design Guides",  description: "System selection rationale, lifecycle cost analysis, and comparative documentation for VRLA vs. wet cell.",  badge: "PDF",        linkLabel: "Request Access" },
        ],
  };
}

// ============================================================================
// BATTERY SELECTION GUIDE
// ============================================================================
export interface CESelectionRow { criteria: string; vrla: string; wetCell: string; }
export interface CESelectionData {
  bgColor?: string;
  label: string;
  heading: string;
  subtitle: string;
  thCriteria: string;
  thVrla: string;
  thWetCell: string;
  rows: CESelectionRow[];
  vrlaRecommend: string;
  wetCellRecommend: string;
}
export async function getCESelectionData(): Promise<CESelectionData> {
  const raw: Raw = (await getAxionSection<Raw>("consulting-engineer-hub", "battery-selection")) ?? {};
  const rowsRaw = arr(raw.rows);
  return {
    bgColor:         val(raw.bg_color),
    label:           val(raw.label)           ?? "BATTERY SELECTION GUIDE",
    heading:         val(raw.heading)         ?? "Select the Right Battery for Your Project",
    subtitle:        val(raw.subtitle)        ?? "Use this reference table to match battery technology to project requirements, site conditions, and client maintenance capabilities.",
    thCriteria:      val(raw.th_criteria)     ?? "Specification Criteria",
    thVrla:          val(raw.th_vrla)         ?? "VRLA Batteries",
    thWetCell:       val(raw.th_wet_cell)     ?? "Wet Cell (Flooded)",
    vrlaRecommend:    val(raw.vrla_recommend)     ?? "Recommended for most commercial and healthcare applications",
    wetCellRecommend: val(raw.wet_cell_recommend) ?? "Recommended for utility and long-lifecycle industrial applications",
    rows: rowsRaw.length > 0
      ? rowsRaw.map((r) => ({
          criteria: val(r.criteria) ?? "",
          vrla:     val(r.vrla)     ?? "",
          wetCell:  val(r.wet_cell) ?? "",
        }))
      : [
          { criteria: "Typical Application",    vrla: "UPS, telecom, healthcare, data centers",  wetCell: "Utilities, substations, large UPS systems"     },
          { criteria: "Maintenance Level",       vrla: "Low — largely maintenance-free",          wetCell: "Active — regular electrolyte monitoring"        },
          { criteria: "Typical Float Life",      vrla: "5 – 12 years",                            wetCell: "10 – 20 years"                                  },
          { criteria: "Enclosure Required",      vrla: "Not always required",                     wetCell: "Ventilated room or cabinet required"            },
          { criteria: "Installation Footprint",  vrla: "Compact — rack or cabinet mount",         wetCell: "Larger — floor-standing with acid containment"  },
          { criteria: "Cost Profile",            vrla: "Lower upfront cost",                      wetCell: "Higher upfront, lower lifecycle cost"           },
          { criteria: "Certification / Listing", vrla: "UL 924, UL 1778, IEEE 485",              wetCell: "IEEE 485, IEEE 1187, NFPA 70E"                  },
          { criteria: "Best Suited For",         vrla: "Space-constrained, low-maintenance sites", wetCell: "Long-lifecycle, mission-critical utility sites" },
        ],
  };
}

// ============================================================================
// SPECIFICATION SUPPORT
// ============================================================================
export interface CESpecStep {
  number: string;
  title: string;
  subtitle: string;
  bullets: string[];
}
export interface CESpecSupportData {
  bgColor?: string;
  label: string;
  heading: string;
  subtitle: string;
  steps: CESpecStep[];
}
export async function getCESpecSupportData(): Promise<CESpecSupportData> {
  const raw: Raw = (await getAxionSection<Raw>("consulting-engineer-hub", "specification-support")) ?? {};
  const stepsRaw = arr(raw.steps);
  return {
    bgColor:  val(raw.bg_color),
    label:    val(raw.label)    ?? "SPECIFICATION SUPPORT",
    heading:  val(raw.heading)  ?? "End-to-End Specification Support",
    subtitle: val(raw.subtitle) ?? "Axion works directly with consulting engineers from early design through project close — providing the technical documentation needed at every stage.",
    steps: stepsRaw.length > 0
      ? stepsRaw.map((s) => ({
          number:   val(s.number)   ?? "",
          title:    val(s.title)    ?? "",
          subtitle: val(s.subtitle) ?? "",
          bullets: typeof s.bullets === "string" && (s.bullets as string).trim()
            ? (s.bullets as string).split("\n").map((b) => b.trim()).filter(Boolean)
            : [],
        }))
      : [
          { number: "01", title: "CSI Specification Language",  subtitle: "Ready-to-Use Spec Sections",   bullets: ["Division 26 battery system language", "Manufacturer substitution clauses", "Performance and testing requirements", "Warranty and lifecycle language"] },
          { number: "02", title: "Basis-of-Design Documents",   subtitle: "Design Justification Support", bullets: ["System selection rationale", "VRLA vs. wet cell comparative analysis", "Lifecycle cost documentation", "Site-specific design criteria"] },
          { number: "03", title: "Submittal Packages",          subtitle: "Approval-Ready Documentation", bullets: ["Product data and cut sheets", "Dimensional and installation drawings", "UL and certification documentation", "O&M manual excerpts"] },
          { number: "04", title: "Compliance Review Support",   subtitle: "Code and Standard Alignment",  bullets: ["NEC Article 480 compliance", "NFPA 70E arc flash considerations", "IEEE 485/1188 design conformance", "AHJ coordination support"] },
        ],
  };
}

// ============================================================================
// STANDARDS & CODES
// ============================================================================
export interface CEStandard { code: string; title: string; description: string; }
export interface CEStandardsData {
  bgColor?: string;
  label: string;
  heading: string;
  subtitle: string;
  standards: CEStandard[];
  compliancePoints: string[];
}
export async function getCEStandardsData(): Promise<CEStandardsData> {
  const raw: Raw = (await getAxionSection<Raw>("consulting-engineer-hub", "standards-codes")) ?? {};
  const standardsRaw = arr(raw.standards);
  const complianceRaw = arr(raw.compliance_points);
  return {
    bgColor:  val(raw.bg_color),
    label:    val(raw.label)    ?? "STANDARDS & CODES",
    heading:  val(raw.heading)  ?? "Designed and Specified to Industry Standards",
    subtitle: val(raw.subtitle) ?? "Axion battery systems are specified in alignment with the applicable electrical, safety, and environmental standards — so your documentation is code-compliant from day one.",
    standards: standardsRaw.length > 0
      ? standardsRaw.map((s) => ({
          code:        val(s.code)        ?? "",
          title:       val(s.title)       ?? "",
          description: val(s.description) ?? "",
        }))
      : [
          { code: "IEEE 485",  title: "Battery Sizing",       description: "Lead-acid battery sizing for stationary applications"            },
          { code: "IEEE 1188", title: "VRLA Maintenance",     description: "Recommended practice for maintenance of VRLA batteries"          },
          { code: "NEC 480",   title: "Electrical Code",      description: "NEC Article 480 — Storage Batteries installation requirements"   },
          { code: "NFPA 70E",  title: "Arc Flash Safety",     description: "Electrical safety in the workplace — battery room safety"        },
          { code: "UL 924",    title: "Emergency Lighting",   description: "Emergency lighting and power equipment listing"                  },
          { code: "UL 1778",   title: "UPS Systems",          description: "UPS system listing — battery backup performance"                 },
          { code: "CSA C22.1", title: "Canadian Electrical",  description: "Canadian Electrical Code compliance for battery installations"   },
          { code: "IEC 60896", title: "Stationary Batteries", description: "IEC standard for stationary lead-acid battery systems"          },
        ],
    compliancePoints: complianceRaw.length > 0
      ? complianceRaw.map((p) => val(p.text) ?? "").filter(Boolean)
      : [
          "All battery systems supplied with applicable UL/cUL listings",
          "Full documentation package included for AHJ submissions",
          "IEEE conformance statements available on request",
          "Site-specific code review support provided at no charge",
        ],
  };
}

// ============================================================================
// PROJECT APPLICATIONS
// ============================================================================
export interface CEApplication { tag: string; title: string; description: string; spec: string; }
export interface CEApplicationsData {
  bgColor?: string;
  label: string;
  heading: string;
  subtitle: string;
  specRefLabel: string;
  apps: CEApplication[];
}
export async function getCEApplicationsData(): Promise<CEApplicationsData> {
  const raw: Raw = (await getAxionSection<Raw>("consulting-engineer-hub", "project-applications")) ?? {};
  const appsRaw = arr(raw.apps);
  return {
    bgColor:      val(raw.bg_color),
    label:        val(raw.label)          ?? "PROJECT APPLICATIONS",
    heading:      val(raw.heading)        ?? "Specified Across Critical Industries",
    subtitle:     val(raw.subtitle)       ?? "Axion battery systems appear in specifications for a wide range of critical facility types — each with unique power continuity requirements.",
    specRefLabel: val(raw.spec_ref_label) ?? "Spec Reference:",
    apps: appsRaw.length > 0
      ? appsRaw.map((a) => ({
          tag:         val(a.tag)         ?? "",
          title:       val(a.title)       ?? "",
          description: val(a.description) ?? "",
          spec:        val(a.spec)        ?? "",
        }))
      : [
          { tag: "Healthcare",  title: "Hospitals & Medical Facilities",  description: "Life-safety UPS, nurse call, emergency lighting, and medical imaging backup power systems.",       spec: "VRLA — Division 26 40 00" },
          { tag: "Data Centers",title: "Data Centers & Colocation",       description: "High-density UPS battery strings supporting Tier I through IV data center uptime requirements.",    spec: "VRLA / Wet Cell — Div 26" },
          { tag: "Utilities",   title: "Utilities & Substations",         description: "DC control power, SCADA, protective relay systems, and switchgear backup for utility facilities.", spec: "Wet Cell — IEEE 485"       },
          { tag: "Telecom",     title: "Telecommunications",              description: "Central office, tower, and remote site battery systems supporting 24/7 network availability.",      spec: "VRLA — Telcordia GR-63"   },
          { tag: "Industrial",  title: "Industrial & Infrastructure",     description: "Process control UPS, emergency shutdown systems, and critical load backup for industrial plants.", spec: "VRLA / Wet Cell"           },
          { tag: "Government",  title: "Government & Institutional",      description: "Correctional, transit, municipal, and federal facilities requiring redundant power continuity.",    spec: "VRLA — Division 26 33 53"  },
        ],
  };
}

// ============================================================================
// WHY AXION FOR ENGINEERS
// ============================================================================
export interface CEWhyStat   { value: string; label: string; }
export interface CEWhyReason { icon: string; title: string; description: string; }
export interface CEWhyData {
  bgColor?: string;
  label: string;
  heading: string;
  stats: CEWhyStat[];
  reasons: CEWhyReason[];
}
export async function getCEWhyData(): Promise<CEWhyData> {
  const raw: Raw = (await getAxionSection<Raw>("consulting-engineer-hub", "why-axion")) ?? {};
  const statsRaw = arr(raw.stats);
  const reasonsRaw = arr(raw.reasons);
  return {
    bgColor:  val(raw.bg_color),
    label:    val(raw.label)   ?? "WHY AXION",
    heading:  val(raw.heading) ?? "Built for How Engineers Actually Work",
    stats: statsRaw.length > 0
      ? statsRaw.map((s) => ({ value: val(s.value) ?? "", label: val(s.label) ?? "" }))
      : [
          { value: "Fast",   label: "Spec Turnaround"  },
          { value: "Free",   label: "Engineer Support" },
          { value: "CSI",    label: "Format Ready"     },
          { value: "2",      label: "Battery Families" },
          { value: "Canada", label: "& USA Coverage"   },
        ],
    reasons: reasonsRaw.length > 0
      ? reasonsRaw.map((r) => ({
          icon:        val(r.icon)        ?? "",
          title:       val(r.title)       ?? "",
          description: val(r.description) ?? "",
        }))
      : [
          { icon: "📐", title: "Spec-Ready Documentation",  description: "Every document is formatted for immediate use in project manuals, RFQ packages, and design submissions — no reformatting required." },
          { icon: "🤝", title: "Direct Engineer Support",   description: "Our technical team responds directly to engineers, specifiers, and consultants — not a sales layer — for fast, accurate answers." },
          { icon: "⚡", title: "Two Product Families",      description: "Axion supplies both VRLA and flooded wet cell batteries — so your specification doesn't need to change suppliers based on technology." },
          { icon: "✅", title: "Compliance-First Approach", description: "Basis-of-design documents are written to align with NEC, NFPA, and IEEE standards, reducing AHJ review risk." },
        ],
  };
}

// ============================================================================
// CTA
// ============================================================================
export interface CECtaData {
  bgColor?: string;
  label: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  btn1Label: string; btn1Url: string;
  btn2Label: string; btn2Url: string;
  trustLine: string;
}
export async function getCECtaData(): Promise<CECtaData> {
  const raw: Raw = (await getAxionSection<Raw>("consulting-engineer-hub", "cta")) ?? {};
  return {
    bgColor:      val(raw.bg_color),
    label:        val(raw.label)         ?? "READY TO SPECIFY?",
    headingLine1: val(raw.heading_line1) ?? "Partner With Axion on",
    headingLine2: val(raw.heading_line2) ?? "Your Next Critical Power Project",
    description:  val(raw.description)   ?? "Whether you need a datasheet, a CSI specification section, or a full basis-of-design package — our engineering support team is ready to assist.",
    btn1Label:    val(raw.btn1_label)    ?? "Request Spec Support",
    btn1Url:      val(raw.btn1_url)      ?? "/contact",
    btn2Label:    val(raw.btn2_label)    ?? "Download Resources →",
    btn2Url:      val(raw.btn2_url)      ?? "/contact",
    trustLine:    val(raw.trust_line)    ?? "No-cost specification support for consulting engineers — VRLA and wet cell battery systems",
  };
}
