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
export interface FAQTopicNav  { number: string; label: string; sublabel: string; color: string; }
export interface FAQHeroStat  { value: string; label: string; }
export interface FAQHeroData  {
  breadcrumb: string;
  label: string;
  heading: string;
  subtitle: string;
  topicsTitle: string;
  stats: FAQHeroStat[];
  topics: FAQTopicNav[];
  btnLabel: string; btnUrl: string;
  bgImage?: string;
  accentColor: string;
  bgColor?: string;
}
export async function getFAQHeroData(): Promise<FAQHeroData> {
  const raw: Raw = (await getAxionSection<Raw>("faqs", "hero")) ?? {};
  const statsRaw  = arr(raw.stats);
  const topicsRaw = arr(raw.topics);
  return {
    breadcrumb:   val(raw.breadcrumb)    ?? "HOME / FAQs",
    label:        val(raw.label)         ?? "CRITICAL POWER BATTERY SYSTEMS",
    heading:      val(raw.heading)       ?? "Answers for\nCritical Power\nBattery Systems",
    subtitle:     val(raw.subtitle)      ?? "Clear, reliable answers to common questions about battery performance, maintenance, warranties, and end-of-life management — for engineers, consultants, and facility managers.",
    topicsTitle:  val(raw.topics_title)  ?? "FAQ TOPICS",
    stats: statsRaw.length > 0
      ? statsRaw.map((s) => ({ value: val(s.value) ?? "", label: val(s.label) ?? "" }))
      : [
          { value: "5",    label: "FAQ Topics" },
          { value: "15+",  label: "Q&A Answers" },
          { value: "VRLA", label: "& Wet Cell" },
          { value: "Free", label: "Technical Support" },
        ],
    topics: topicsRaw.length > 0
      ? topicsRaw.map((t) => ({
          number:   val(t.number)   ?? "",
          label:    val(t.label)    ?? "",
          sublabel: val(t.sublabel) ?? "",
          color:    val(t.color)    ?? "rgba(245,199,20,1)",
        }))
      : [
          { number: "01", label: "Battery Lifespan", sublabel: "VRLA vs Wet Cell",     color: "rgba(245,199,20,1)"  },
          { number: "02", label: "Maintenance",       sublabel: "Inspection & upkeep",  color: "rgba(77,204,255,1)"  },
          { number: "03", label: "Lead Times",         sublabel: "Delivery schedules",   color: "rgba(56,214,138,1)"  },
          { number: "04", label: "Warranties",         sublabel: "Coverage & claims",    color: "rgba(199,158,255,1)" },
          { number: "05", label: "End-of-Life",        sublabel: "Recycling & disposal", color: "rgba(245,199,20,1)"  },
        ],
    btnLabel:    val(raw.btn_label)    ?? "View Full FAQs for Engineers & Buyers →",
    btnUrl:      val(raw.btn_url)      ?? "/contact",
    bgImage:     val(raw.bg_image),
    accentColor: val(raw.accent_color) ?? "rgba(245,199,20,1)",
    bgColor:     val(raw.bg_color),
  };
}

// ============================================================================
// LIFESPAN & MAINTENANCE
// ============================================================================
export interface FAQLifespanBar   { type: string; range: string; minYr: string; maxYr: string; width: string; color: string; }
export interface FAQMaintenanceCard {
  badge: string; badgeColor: string;
  title: string; subtitle: string;
  items: string[];
}
export interface FAQLifespanData {
  label: string;
  q1Num: string;
  q1:    string;
  q1Bullets: string[];
  lifespanBars: FAQLifespanBar[];
  q2Num: string;
  q2: string;
  maintenanceCards: FAQMaintenanceCard[];
  bgColor?: string;
}
export async function getFAQLifespanData(): Promise<FAQLifespanData> {
  const raw: Raw = (await getAxionSection<Raw>("faqs", "lifespan-maintenance")) ?? {};
  const bulletsRaw = arr(raw.q1_bullets);
  const barsRaw    = arr(raw.lifespan_bars);
  const cardsRaw   = arr(raw.maintenance_cards);
  return {
    label:  val(raw.label)  ?? "BATTERY LIFESPAN & MAINTENANCE",
    q1Num:  val(raw.q1_num) ?? "Q1",
    q1:     val(raw.q1)     ?? "How long do VRLA and flooded (wet cell) batteries last?",
    q1Bullets: bulletsRaw.length > 0
      ? bulletsRaw.map((b) => val(b.text) ?? "").filter(Boolean)
      : [
          "VRLA batteries generally last 5–12 years, depending on load, temperature, and operating conditions.",
          "Flooded (wet cell) batteries typically last 10–20 years with proper maintenance and monitoring.",
          "Lifecycle planning, periodic testing, and environmental controls help maximize performance.",
        ],
    lifespanBars: barsRaw.length > 0
      ? barsRaw.map((r) => ({
          type:  val(r.type)   ?? "",
          range: val(r.range)  ?? "",
          minYr: val(r.min_yr) ?? "",
          maxYr: val(r.max_yr) ?? "",
          width: val(r.width)  ?? "55%",
          color: val(r.color)  ?? "rgba(30,136,229,1)",
        }))
      : [
          { type: "VRLA",     range: "5 – 12 years",  minYr: "5yr",  maxYr: "12yr", width: "55%",  color: "rgba(30,136,229,1)" },
          { type: "WET CELL", range: "10 – 20 years", minYr: "10yr", maxYr: "20yr", width: "100%", color: "rgba(245,199,20,1)" },
        ],
    q2Num: val(raw.q2_num) ?? "Q2",
    q2:    val(raw.q2)     ?? "What maintenance is required for VRLA and wet cell batteries?",
    maintenanceCards: cardsRaw.length > 0
      ? cardsRaw.map((c) => ({
          badge:      val(c.badge)       ?? "",
          badgeColor: val(c.badge_color) ?? "rgba(30,136,229,1)",
          title:      val(c.title)       ?? "",
          subtitle:   val(c.subtitle)    ?? "",
          items: typeof c.items === "string" && (c.items as string).trim()
            ? (c.items as string).split("\n").map((x) => x.trim()).filter(Boolean)
            : [],
        }))
      : [
          {
            badge: "LOW MAINTENANCE", badgeColor: "rgba(30,136,229,1)",
            title: "VRLA Batteries", subtitle: "Largely Maintenance-Free",
            items: [
              "Periodic inspections for voltage, temperature, and visual wear",
              "Check float voltage and charging parameters annually",
              "Monitor for swelling, leakage, or terminal corrosion",
              "Replace when capacity drops below 80% of rated capacity",
            ],
          },
          {
            badge: "ACTIVE MAINTENANCE", badgeColor: "rgba(245,199,20,1)",
            title: "Wet Cell Batteries", subtitle: "Regular Active Maintenance Required",
            items: [
              "Regular electrolyte level checks and distilled water top-ups",
              "Terminal cleaning to prevent corrosion buildup",
              "Periodic equalization charging to balance cells",
              "Monitor specific gravity with a hydrometer quarterly",
            ],
          },
        ],
    bgColor: val(raw.bg_color),
  };
}

// ============================================================================
// LEAD TIMES & WARRANTY
// ============================================================================
export interface FAQLeadFactor    { label: string; detail: string; }
export interface FAQLeadTimesData {
  label: string;
  q3Num: string;
  q3: string;
  leadTimeHeadline: string;
  leadTimeDesc: string;
  leadSteps: string[];
  factorsTitle: string;
  factors: FAQLeadFactor[];
  q4Num: string;
  q4: string;
  warrantyIntro: string;
  warrantyBadges: string[];
  warrantyPoints: string[];
  bgColor?: string;
}
export async function getFAQLeadTimesData(): Promise<FAQLeadTimesData> {
  const raw: Raw = (await getAxionSection<Raw>("faqs", "lead-times-warranty")) ?? {};
  const stepsRaw   = arr(raw.lead_steps);
  const factorsRaw = arr(raw.factors);
  const badgesRaw  = arr(raw.warranty_badges);
  const pointsRaw  = arr(raw.warranty_points);
  return {
    label:            val(raw.label)              ?? "LEAD TIMES & WARRANTY",
    q3Num:            val(raw.q3_num)             ?? "Q3",
    q3:               val(raw.q3)                 ?? "What are typical lead times for battery orders?",
    leadTimeHeadline: val(raw.lead_time_headline) ?? "2 – 8 WEEKS TYPICAL",
    leadTimeDesc:     val(raw.lead_time_desc)     ?? "Lead times depend on battery type, size, quantity, and project requirements. Axion coordinates directly with manufacturers to provide accurate delivery schedules.",
    leadSteps: stepsRaw.length > 0
      ? stepsRaw.map((s) => val(s.step) ?? "").filter(Boolean)
      : ["Order Placed", "Manufacturer Coordination", "Production & Shipping", "Delivery & Install"],
    factorsTitle: val(raw.factors_title) ?? "Factors Affecting Lead Times",
    factors: factorsRaw.length > 0
      ? factorsRaw.map((f) => ({ label: val(f.label) ?? "", detail: val(f.detail) ?? "" }))
      : [
          { label: "Battery Type:",      detail: "VRLA vs Wet Cell, capacity" },
          { label: "Quantity:",           detail: "Standard vs. large volume orders" },
          { label: "Availability:",       detail: "Stocked items ship faster" },
          { label: "Project Complexity:", detail: "Custom systems may require longer lead times" },
        ],
    q4Num:         val(raw.q4_num)        ?? "Q4",
    q4:            val(raw.q4)            ?? "What warranties are offered on batteries?",
    warrantyIntro: val(raw.warranty_intro) ?? "VRLA and wet cell batteries come with manufacturer warranties covering defects in materials and workmanship.",
    warrantyBadges: badgesRaw.length > 0
      ? badgesRaw.map((b) => val(b.badge) ?? "").filter(Boolean)
      : ["MANUFACTURER", "DEFECT COVERED", "LIFECYCLE SUPPORT"],
    warrantyPoints: pointsRaw.length > 0
      ? pointsRaw.map((p) => val(p.text) ?? "").filter(Boolean)
      : [
          "Manufacturer warranties cover defects in materials and workmanship",
          "Warranty periods vary by battery type, manufacturer, and application",
          "Axion ensures documentation and compliance are supported throughout lifecycle",
          "Warranty claims coordination managed by Axion on your behalf",
        ],
    bgColor: val(raw.bg_color),
  };
}

// ============================================================================
// END-OF-LIFE
// ============================================================================
export interface FAQRecyclingStep { number: string; title: string; description: string; }
export interface FAQComplianceRow { standard: string; detail: string; }
export interface FAQEndOfLifeData {
  label: string;
  q5Num: string;
  q5: string;
  q5Intro: string;
  recyclingSteps: FAQRecyclingStep[];
  complianceTitle: string;
  complianceRows: FAQComplianceRow[];
  bgColor?: string;
}
export async function getFAQEndOfLifeData(): Promise<FAQEndOfLifeData> {
  const raw: Raw = (await getAxionSection<Raw>("faqs", "end-of-life")) ?? {};
  const stepsRaw      = arr(raw.recycling_steps);
  const complianceRaw = arr(raw.compliance_rows);
  return {
    label:   val(raw.label)   ?? "END-OF-LIFE HANDLING",
    q5Num:   val(raw.q5_num)  ?? "Q5",
    q5:      val(raw.q5)      ?? "How should batteries be disposed of or recycled?",
    q5Intro: val(raw.q5_intro) ?? "Axion provides environmentally responsible battery recycling in coordination with certified partners, ensuring compliance with federal, provincial, and local regulations. This minimizes environmental impact while supporting safe disposal.",
    recyclingSteps: stepsRaw.length > 0
      ? stepsRaw.map((s) => ({
          number:      val(s.number)      ?? "",
          title:       val(s.title)       ?? "",
          description: val(s.description) ?? "",
        }))
      : [
          { number: "1", title: "Battery Collection",          description: "Schedule pickup through Axion — no customer effort required." },
          { number: "2", title: "Certified Partner Transport", description: "Coordinated with certified recycling and disposal partners." },
          { number: "3", title: "Safe Disassembly",            description: "Lead, acid, and plastics separated following strict protocols." },
          { number: "4", title: "Compliant Disposal",          description: "Federal, provincial, and local environmental regulations met." },
        ],
    complianceTitle: val(raw.compliance_title) ?? "Regulatory Compliance Coverage",
    complianceRows: complianceRaw.length > 0
      ? complianceRaw.map((r) => ({ standard: val(r.standard) ?? "", detail: val(r.detail) ?? "" }))
      : [
          { standard: "Federal Regulations",    detail: "Canadian Environmental Protection Act" },
          { standard: "Provincial Requirements", detail: "Province-specific disposal guidelines" },
          { standard: "Local Bylaws",            detail: "Municipal solid waste regulations" },
          { standard: "EPA / RCRA",              detail: "Battery recycling standards" },
          { standard: "Zero Landfill Policy",    detail: "Lead-acid batteries are fully recyclable" },
        ],
    bgColor: val(raw.bg_color),
  };
}

// ============================================================================
// WHY FAQS MATTER
// ============================================================================
export interface FAQWhyCard  { icon: string; title: string; description: string; }
export interface FAQWhyData  { label: string; heading: string; cards: FAQWhyCard[]; bgColor?: string; }
export async function getFAQWhyData(): Promise<FAQWhyData> {
  const raw: Raw = (await getAxionSection<Raw>("faqs", "why-faqs-matter")) ?? {};
  const cardsRaw = arr(raw.cards);
  return {
    label:   val(raw.label)   ?? "WHY THIS MATTERS",
    heading: val(raw.heading) ?? "FAQs That Build\nConfidence & Clarity",
    cards: cardsRaw.length > 0
      ? cardsRaw.map((c) => ({
          icon:        val(c.icon)        ?? "",
          title:       val(c.title)       ?? "",
          description: val(c.description) ?? "",
        }))
      : [
          { icon: "?", title: "Reduces Confusion",  description: "Eliminates ambiguity during battery selection and specification for new projects." },
          { icon: "⚙", title: "Technical Clarity",  description: "Provides precise answers for engineers, consultants, and facility managers." },
          { icon: "✓", title: "Informed Decisions", description: "Supports better system decisions, enhancing overall reliability and safety." },
          { icon: "★", title: "Builds Trust",        description: "Establishes confidence with clients, contractors, and technical stakeholders." },
        ],
    bgColor: val(raw.bg_color),
  };
}

// ============================================================================
// CTA
// ============================================================================
export interface FAQCtaData {
  label: string;
  headingLine1: string; headingLine2: string;
  description: string;
  btn1Label: string; btn1Url: string;
  btn2Label: string; btn2Url: string;
  trustLine: string;
  bgColor?: string;
}
export async function getFAQCtaData(): Promise<FAQCtaData> {
  const raw: Raw = (await getAxionSection<Raw>("faqs", "cta")) ?? {};
  return {
    label:        val(raw.label)         ?? "HAVE MORE QUESTIONS?",
    headingLine1: val(raw.heading_line1) ?? "Get Expert Answers from",
    headingLine2: val(raw.heading_line2) ?? "Axion Critical Power Solutions",
    description:  val(raw.description)   ?? "Whether you're selecting batteries, planning maintenance, or managing end-of-life — our technical team is ready.",
    btn1Label:    val(raw.btn1_label)    ?? "Contact Axion Today",
    btn1Url:      val(raw.btn1_url)      ?? "/contact",
    btn2Label:    val(raw.btn2_label)    ?? "View All FAQs →",
    btn2Url:      val(raw.btn2_url)      ?? "/contact",
    trustLine:    val(raw.trust_line)    ?? "Technical support available for engineers, consultants & facility managers",
    bgColor:      val(raw.bg_color),
  };
}
