import { getAxionSection } from "@/lib/queries/axion-cms";

type Raw = Record<string, unknown>;
const val = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);
const arr = (v: unknown): Raw[] => (Array.isArray(v) && v.length > 0 ? (v as Raw[]) : []);

// ============================================================================
// HERO SECTION
// ============================================================================

export interface IIHeroFacility {
  label: string;
  status: string;
  statusColor: string;
  pct: number;
  barColor: string;
}

export interface IIHeroStat {
  value: string;
  label: string;
}

export interface IIHeroData {
  breadcrumb: string;
  pill: string;
  headingLine1: string;
  headingLine2: string;
  headingAccent: string;
  subtitle: string;
  btn1Label: string;
  btn1Url: string;
  btn2Label: string;
  btn2Url: string;
  badges: string[];
  facilities: IIHeroFacility[];
  heroStats: IIHeroStat[];
}

export async function getIIHeroData(): Promise<IIHeroData> {
  const raw: Raw = (await getAxionSection<Raw>("industrial-infrastructure", "hero")) ?? {};

  return {
    breadcrumb:   val(raw.breadcrumb)     || "INDUSTRIES  /  INDUSTRIAL & INFRASTRUCTURE",
    pill:         val(raw.pill)           || "🏭  INDUSTRIAL & INFRASTRUCTURE",
    headingLine1: val(raw.heading_line1)  || "Reliable Battery Systems",
    headingLine2: val(raw.heading_line2)  || "for Industrial &",
    headingAccent:val(raw.heading_accent) || "Critical Infrastructure",
    subtitle:     val(raw.subtitle)       || "VRLA and wet cell battery solutions engineered for demanding industrial environments — durable, compliant, and reliable.",
    btn1Label:    val(raw.btn1_label)     || "Explore Solutions →",
    btn1Url:      val(raw.btn1_url)       || "/contact",
    btn2Label:    val(raw.btn2_label)     || "Talk to an Engineer ↗",
    btn2Url:      val(raw.btn2_url)       || "/contact",
    badges: arr(raw.badges).map((b) => val(b.text) ?? "").filter(Boolean),
    facilities: arr(raw.dashboard_systems).map((s) => ({
      label:       val(s.label)  ?? "",
      status:      val(s.status) ?? "ONLINE",
      statusColor: val(s.color)  ?? "rgba(74,222,138,1)",
      pct:         typeof s.pct === "number" ? s.pct : Number(s.pct) || 0,
      barColor:    val(s.color)  ?? "rgba(74,222,138,1)",
    })),
    heroStats: arr(raw.dashboard_stats).map((s) => ({
      value: val(s.value) ?? "",
      label: val(s.label) ?? "",
    })),
  };
}

// ============================================================================
// APPLICATIONS SECTION
// ============================================================================

export interface IIApp {
  icon: string;
  title: string;
  description: string;
}

export interface IIApplicationsData {
  label: string;
  headingLine1: string;
  headingAccent: string;
  description: string;
  apps: IIApp[];
}

export async function getIIApplicationsData(): Promise<IIApplicationsData> {
  const raw: Raw = (await getAxionSection<Raw>("industrial-infrastructure", "applications")) ?? {};

  return {
    label:        val(raw.label)          || "APPLICATIONS",
    headingLine1: val(raw.heading_line1)  || "Industrial Environments",
    headingAccent:val(raw.heading_accent) || "We Power Every Day",
    description:  val(raw.description)   || "From manufacturing floors to government infrastructure — Axion delivers proven power for the environments that cannot stop.",
    apps: arr(raw.apps).map((a) => ({
      icon:        val(a.icon)        ?? "",
      title:       val(a.title)       ?? "",
      description: val(a.description) ?? "",
    })),
  };
}

// ============================================================================
// BATTERY TECHNOLOGY SECTION
// ============================================================================

export interface IIBatteryTech {
  icon: string;
  name: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  features: string[];
  bestFor: string;
}

export interface IIBatteryTechData {
  label: string;
  headingLine1: string;
  headingAccent: string;
  description: string;
  techs: IIBatteryTech[];
}

export async function getIIBatteryTechData(): Promise<IIBatteryTechData> {
  const raw: Raw = (await getAxionSection<Raw>("industrial-infrastructure", "battery-technologies")) ?? {};

  return {
    label:        val(raw.label)          || "BATTERY TECHNOLOGIES",
    headingLine1: val(raw.heading_line1)  || "Two Battle-Tested Technologies,",
    headingAccent:val(raw.heading_accent) || "One Trusted Partner",
    description:  val(raw.description)   || "Axion provides guidance to select the right battery technology based on operational demands, maintenance capacity, and lifecycle requirements.",
    techs: arr(raw.techs).map((t) => ({
      icon:        val(t.icon)         ?? "🔋",
      name:        val(t.name)         ?? "",
      subtitle:    val(t.subtitle)     ?? "",
      badge:       val(t.badge)        ?? "",
      badgeColor:  val(t.accent_color) ?? "rgba(30,136,229,1)",
      accentColor: val(t.accent_color) ?? "rgba(30,136,229,1)",
      features:
        typeof t.features === "string" && (t.features as string).trim()
          ? (t.features as string).split("\n").map((f) => f.trim()).filter(Boolean)
          : arr(t.features).map((f) => val(f.text) ?? "").filter(Boolean),
      bestFor: val(t.best_for) ?? "",
    })),
  };
}

// ============================================================================
// ENGINEERING & SPECIFICATION SUPPORT SECTION
// ============================================================================

export interface IIEngStep {
  num: string;
  title: string;
  actor: string;
  output: string;
  color: string;
}

export interface IIEngService {
  icon: string;
  title: string;
  description: string;
}

export interface IIEngineeringData {
  label: string;
  headingLine1: string;
  headingAccent: string;
  description: string;
  services: IIEngService[];
  steps: IIEngStep[];
}

export async function getIIEngineeringData(): Promise<IIEngineeringData> {
  const raw: Raw = (await getAxionSection<Raw>("industrial-infrastructure", "engineering-support")) ?? {};

  return {
    label:        val(raw.label)          || "ENGINEERING & SPECIFICATION SUPPORT",
    headingLine1: val(raw.heading_line1)  || "Engineering-Driven,",
    headingAccent:val(raw.heading_accent) || "Specification-Focused",
    description:  val(raw.description)   || "Industrial power systems require careful coordination between electrical design, operational requirements, and safety standards. Our team supports projects from planning through commissioning.",
    services: arr(raw.services).map((s) => ({
      icon:        val(s.icon)        ?? "",
      title:       val(s.title)       ?? "",
      description: val(s.description) ?? "",
    })),
    steps: arr(raw.steps).map((s) => ({
      num:    val(s.num)    ?? "",
      title:  val(s.title)  ?? "",
      actor:  val(s.actor)  ?? "",
      output: val(s.output) ?? "",
      color:  val(s.color)  ?? "rgba(99,222,247,1)",
    })),
  };
}

// ============================================================================
// QUALITY, SAFETY & COMPLIANCE SECTION
// ============================================================================

export interface IIComplianceCard {
  icon: string;
  title: string;
  description: string;
}

export interface IIQualityStat {
  value: string;
  label: string;
}

export interface IIQualityData {
  label: string;
  headingLine1: string;
  headingAccent: string;
  description: string;
  cards: IIComplianceCard[];
  stats: IIQualityStat[];
}

export async function getIIQualityData(): Promise<IIQualityData> {
  const raw: Raw = (await getAxionSection<Raw>("industrial-infrastructure", "quality-compliance")) ?? {};

  return {
    label:        val(raw.label)          || "QUALITY, SAFETY & COMPLIANCE",
    headingLine1: val(raw.heading_line1)  || "Industrial Environments",
    headingAccent:val(raw.heading_accent) || "Demand Higher Standards",
    description:  val(raw.description)   || "Axion partners with trusted manufacturers and follows industry best practices to ensure safe, compliant battery installations in challenging industrial environments.",
    cards: arr(raw.cards).map((c) => ({
      icon:        val(c.icon)        ?? "",
      title:       val(c.title)       ?? "",
      description: val(c.description) ?? "",
    })),
    stats: arr(raw.stats).map((s) => ({
      value: val(s.value) ?? "",
      label: val(s.label) ?? "",
    })),
  };
}

// ============================================================================
// LIFECYCLE SUPPORT SECTION
// ============================================================================

export interface IILifecycleStat {
  icon: string;
  value: string;
  description: string;
  accentColor: string;
}

export interface IILifecycleService {
  icon: string;
  title: string;
  description: string;
  accentColor: string;
}

export interface IILifecycleData {
  label: string;
  headingLine1: string;
  headingAccent: string;
  description: string;
  lifecycleLink: string;
  lifecycleLinkLabel: string;
  stats: IILifecycleStat[];
  services: IILifecycleService[];
  quote: string;
  quoteAuthor: string;
}

export async function getIILifecycleData(): Promise<IILifecycleData> {
  const raw: Raw = (await getAxionSection<Raw>("industrial-infrastructure", "lifecycle-support")) ?? {};

  return {
    label:              val(raw.label)               || "LIFECYCLE SUPPORT",
    headingLine1:       val(raw.heading_line1)       || "End-to-End Support",
    headingAccent:      val(raw.heading_accent)      || "From Day One to End of Life",
    description:        val(raw.description)         || "Axion provides end-to-end lifecycle support to help industrial operators manage battery assets effectively — ensuring operational continuity, regulatory compliance, and long-term asset planning.",
    lifecycleLink:      val(raw.lifecycle_link)      || "/contact",
    lifecycleLinkLabel: val(raw.lifecycle_link_label)|| "Learn About Lifecycle Services →",
    quote:              val(raw.quote)               || "\"We've relied on Axion for over a decade across six processing facilities.\"",
    quoteAuthor:        val(raw.quote_author)        || "— Director of Facilities, Global Manufacturing Co.",
    stats: arr(raw.stats).map((s) => ({
      icon:        val(s.icon)         ?? "",
      value:       val(s.value)        ?? "",
      description: val(s.description) ?? "",
      accentColor: val(s.accent_color) ?? "rgba(30,136,229,1)",
    })),
    services: arr(raw.services).map((s) => ({
      icon:        val(s.icon)         ?? "",
      title:       val(s.title)        ?? "",
      description: val(s.description)  ?? "",
      accentColor: val(s.accent_color) ?? "rgba(30,136,229,1)",
    })),
  };
}

// ============================================================================
// WHY CHOOSE AXION SECTION
// ============================================================================

export interface IIWhyReason {
  num: string;
  title: string;
  description: string;
}

export interface IIWhyStat {
  value: string;
  label: string;
  color: string;
}

export interface IIWhyData {
  label: string;
  headingLine1: string;
  headingAccent: string;
  description: string;
  reasons: IIWhyReason[];
  stats: IIWhyStat[];
}

export async function getIIWhyData(): Promise<IIWhyData> {
  const raw: Raw = (await getAxionSection<Raw>("industrial-infrastructure", "why-axion")) ?? {};

  return {
    label:        val(raw.label)          || "WHY CHOOSE AXION",
    headingLine1: val(raw.heading_line1)  || "Industrial operations can't afford",
    headingAccent:val(raw.heading_accent) || "power failures. Neither can you.",
    description:  val(raw.description)   || "Process shutdowns, safety system failures, and regulatory violations all stem from unreliable battery power. Axion ensures your industrial infrastructure stays online.",
    reasons: arr(raw.reasons).map((r) => ({
      num:         val(r.num)         ?? "",
      title:       val(r.title)       ?? "",
      description: val(r.description) ?? "",
    })),
    stats: arr(raw.track_stats).map((s) => ({
      value: val(s.value) ?? "",
      label: val(s.label) ?? "",
      color: val(s.color) ?? "rgba(255,191,69,1)",
    })),
  };
}

// ============================================================================
// CTA SECTION
// ============================================================================

export interface IICtaCard {
  badge: string;
  badgeColor: string;
  icon: string;
  title: string;
  description: string;
}

export interface IICtaData {
  label: string;
  headingLine1: string;
  headingAccent: string;
  description: string;
  btn1Label: string;
  btn1Url: string;
  btn2Label: string;
  btn2Url: string;
  btn3Label: string;
  btn3Url: string;
  cards: IICtaCard[];
}

export async function getIICtaData(): Promise<IICtaData> {
  const raw: Raw = (await getAxionSection<Raw>("industrial-infrastructure", "cta")) ?? {};

  return {
    label:        val(raw.label)          || "CONTACT AXION",
    headingLine1: val(raw.heading_line1)  || "Ensure Reliable Power for Your",
    headingAccent:val(raw.heading_accent) || "Industrial Infrastructure",
    description:  val(raw.description)   || "Our team of industrial battery specialists is ready to help you specify, supply, and support the right solution for your critical facility.",
    btn1Label:    val(raw.btn1_label)     || "Contact Axion Today",
    btn1Url:      val(raw.btn1_url)       || "/contact",
    btn2Label:    val(raw.btn2_label)     || "Request Engineering Review",
    btn2Url:      val(raw.btn2_url)       || "/contact",
    btn3Label:    val(raw.btn3_label)     || "Download Product Catalog →",
    btn3Url:      val(raw.btn3_url)       || "/contact",
    cards: arr(raw.cards).map((c) => ({
      badge:       val(c.badge)       ?? "",
      badgeColor:  val(c.badge_color) ?? "rgba(255,191,69,1)",
      icon:        val(c.icon)        ?? "",
      title:       val(c.title)       ?? "",
      description: val(c.description) ?? "",
    })),
  };
}
