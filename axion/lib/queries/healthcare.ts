import { getAxionSection } from "@/lib/queries/axion-cms";

type Raw = Record<string, unknown>;
const val = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);

// ============================================================================
// HERO SECTION
// ============================================================================

export interface HCHeroLiveStat { label: string; value: string; }
export interface HCHeroData {
  breadcrumb: string;
  pill: string;
  headingLine1: string;
  headingLine2: string;
  headingLine3: string;
  subtitle: string;
  btn1Label: string; btn1Url: string;
  btn2Label: string; btn2Url: string;
  badges: string[];
  liveStats: HCHeroLiveStat[];
  bgImage?: string;
  bgVideoUrl?: string;
  accentColor: string;
}
export async function getHCHeroData(): Promise<HCHeroData> {
  const sec = await getAxionSection<Raw>("healthcare", "hero");
  return {
    breadcrumb: val(sec?.breadcrumb) ?? "INDUSTRIES  /  HEALTHCARE POWER",
    pill: val(sec?.pill) ?? "🏥  HEALTHCARE POWER",
    headingLine1: val(sec?.heading_line1) ?? "Reliable Battery Systems",
    headingLine2: val(sec?.heading_line2) ?? "for Healthcare",
    headingLine3: val(sec?.heading_line3) ?? "Facilities",
    subtitle: val(sec?.subtitle) ?? "Power interruptions are not acceptable in healthcare. Life-safety systems depend on Axion.",
    btn1Label: val(sec?.btn1_label) ?? "Explore Solutions →",
    btn1Url: val(sec?.btn1_url) ?? "/contact",
    btn2Label: val(sec?.btn2_label) ?? "Talk to a Specialist ↗",
    btn2Url: val(sec?.btn2_url) ?? "/contact",
    badges: Array.isArray(sec?.badges)
      ? (sec!.badges as unknown[]).map(b => {
          if (typeof b === 'object' && b !== null && 'badge' in b) return val((b as Record<string,unknown>).badge) ?? "";
          return val(b) ?? "";
        }).filter(Boolean)
      : ["VRLA + Wet Cell", "NFPA 110 Ready", "24/7 Support", "Life-Safety Grade"],
    liveStats: Array.isArray(sec?.live_stats)
      ? (sec!.live_stats as Record<string,unknown>[]).map(s => ({
          label: val(s.label) ?? "",
          value: val(s.value) ?? "",
        })).filter(s => s.label)
      : [
          { label: "Battery Health",    value: "98.4%" },
          { label: "UPS Runtime",       value: "4+ hrs" },
          { label: "Facilities Online", value: "847" },
        ],
    bgImage:     val(sec?.bg_image),
    bgVideoUrl:  val(sec?.bg_image_video_url),
    accentColor: val(sec?.accent_color) ?? "rgba(20,184,166,1)",
  };
}

// ============================================================================
// APPLICATIONS SECTION
// ============================================================================

export interface HCApplication {
  tag: string;
  title: string;
  description: string;
  statValue: string;
  statLabel: string;
}
export interface HCApplicationsData {
  label: string;
  countLabel: string;
  heading: string;
  apps: HCApplication[];
}
export async function getHCApplicationsData(): Promise<HCApplicationsData> {
  const sec = await getAxionSection<Raw>("healthcare", "applications");
  return {
    label: val(sec?.label) ?? "APPLICATIONS",
    countLabel: val(sec?.count_label) ?? "06",
    heading: val(sec?.heading) ?? "Healthcare\nEnvironments\nWe Power",
    apps: Array.isArray(sec?.apps)
      ? (sec!.apps as Record<string,unknown>[]).map(a => ({
          tag:         val(a.tag)         ?? "",
          title:       val(a.title)       ?? "",
          description: val(a.description) ?? "",
          statValue:   val(a.stat_value)  ?? "",
          statLabel:   val(a.stat_label)  ?? "",
        })).filter(a => a.title)
      : [
          { tag: "HOSPITALS & MEDICAL CENTERS",  title: "Campus-Wide Power Continuity",       description: "Large-scale UPS & DC battery systems ensuring campus-wide continuity across all departments.", statValue: "99.9%", statLabel: "Uptime Guaranteed" },
          { tag: "EMERGENCY & TRAUMA",            title: "Instant-Response Backup Systems",    description: "Zero-delay battery backup for life-critical emergency suites and trauma bays.", statValue: "<4ms",  statLabel: "Transfer Response Time" },
          { tag: "OPERATING ROOMS",               title: "Surgical Suite Power Shield",        description: "Zero-interruption power for OR lighting, equipment, and patient monitoring.", statValue: "0ms",   statLabel: "Interruption Time" },
          { tag: "DIAGNOSTIC & IMAGING",          title: "Imaging System Stability",           description: "Clean, stable power for MRI, CT, X-ray, and sensitive diagnostic equipment.", statValue: "3T MRI", statLabel: "Compatible" },
          { tag: "RESEARCH LABORATORIES",         title: "Lab-Grade Backup Power",             description: "Reliable standby for freezers, analyzers, and controlled-environment research.", statValue: "-80°C", statLabel: "Sample Protected" },
          { tag: "LONG-TERM CARE FACILITIES",     title: "24/7 Resident Safety Power Assurance", description: "Extended backup for resident life-safety, HVAC, nursing stations, and all critical resident monitoring systems.", statValue: "24h+", statLabel: "Backup Duration" },
        ],
  };
}

// ============================================================================
// BATTERY TECHNOLOGIES SECTION
// ============================================================================

export interface HCBatteryTech {
  badge: string;
  name: string;
  subtitle: string;
  features: string[];
  bestFor: string;
  accentColor: string;
}
export interface HCBatteryTechData {
  label: string;
  headingLine1: string;
  headingLine2: string;
  techs: HCBatteryTech[];
}
export async function getHCBatteryTechData(): Promise<HCBatteryTechData> {
  const sec = await getAxionSection<Raw>("healthcare", "battery-technologies");
  return {
    label: val(sec?.label) ?? "BATTERY TECHNOLOGIES",
    headingLine1: val(sec?.heading_line1) ?? "Two Technologies.",
    headingLine2: val(sec?.heading_line2) ?? "One Mission: Uninterrupted Care.",
    techs: Array.isArray(sec?.techs)
      ? (sec!.techs as Record<string,unknown>[]).map(t => ({
          badge:       val(t.badge)        ?? "",
          name:        val(t.name)         ?? "",
          subtitle:    val(t.subtitle)     ?? "",
          features:    typeof t.features === "string"
            ? t.features.split("\n").map((f: string) => f.trim()).filter(Boolean)
            : Array.isArray(t.features) ? (t.features as unknown[]).map(f => val(f) ?? "").filter(Boolean) : [],
          bestFor:     val(t.best_for)     ?? "",
          accentColor: val(t.accent_color) ?? "rgba(20,184,166,1)",
        })).filter(t => t.name)
      : [
          { badge: "VRLA",     name: "Valve-Regulated Lead-Acid", subtitle: "Maintenance-free sealed design",   features: ["Maintenance-free sealed design", "Compact for equipment rooms", "Predictable UPS standby performance", "Minimal maintenance footprint"], bestFor: "Best for: Hospitals, clinics, imaging facilities, labs",                      accentColor: "rgba(20,184,166,1)" },
          { badge: "WET CELL", name: "Flooded Lead-Acid",         subtitle: "Long service life for large facilities", features: ["Long service life for large facilities", "Robust extended backup performance", "Field-proven in critical infrastructure", "High-capacity DC and emergency power"],  bestFor: "Best for: Large hospitals, central power systems, long-care facilities", accentColor: "rgba(30,136,229,1)" },
        ],
  };
}

// ============================================================================
// ENGINEERING SUPPORT SECTION
// ============================================================================

export interface HCEngineeringStep { number: string; title: string; description: string; }
export interface HCEngineeringData {
  label: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  steps: HCEngineeringStep[];
  features: string[];
}
export async function getHCEngineeringData(): Promise<HCEngineeringData> {
  const sec = await getAxionSection<Raw>("healthcare", "engineering-support");
  return {
    label: val(sec?.label) ?? "ENGINEERING & SPECIFICATION SUPPORT",
    headingLine1: val(sec?.heading_line1) ?? "Healthcare Power Systems",
    headingLine2: val(sec?.heading_line2) ?? "Require Zero Compromise",
    description: val(sec?.description) ?? "We assist from early design through implementation, ensuring compliance with NFPA 110, NEC, and healthcare codes.",
    steps: Array.isArray(sec?.steps)
      ? (sec!.steps as Record<string,unknown>[]).map(s => ({
          number:      val(s.number)      ?? "",
          title:       val(s.title)       ?? "",
          description: val(s.description) ?? "",
        })).filter(s => s.title)
      : [
          { number: "01", title: "Site Assessment", description: "Load profiles & environment" },
          { number: "02", title: "Battery Sizing",  description: "Runtime & redundancy calc" },
          { number: "03", title: "System Design",   description: "UPS & DC integration" },
          { number: "04", title: "Installation",    description: "Commissioning & testing" },
          { number: "05", title: "Lifecycle Mgmt",  description: "Monitoring & replacement" },
        ],
    features: Array.isArray(sec?.features)
      ? (sec!.features as unknown[]).map(f => {
          if (typeof f === 'object' && f !== null && 'feature' in f) return val((f as Record<string,unknown>).feature) ?? "";
          return val(f) ?? "";
        }).filter(Boolean)
      : [
          "↗ Compliance with NFPA 110, NEC, JCAHO",
          "↗ Integration with generator transfer systems",
          "↗ Ventilation & environmental assessments",
          "↗ EPC, contractor & consulting engineer support",
        ],
  };
}

// ============================================================================
// QUALITY & COMPLIANCE SECTION
// ============================================================================

export interface HCQualityCard { number: string; title: string; subtitle: string; description: string; badge: string; }
export interface HCQualityData {
  label: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  downloadLabel: string;
  downloadUrl: string;
  cards: HCQualityCard[];
}
export async function getHCQualityData(): Promise<HCQualityData> {
  const sec = await getAxionSection<Raw>("healthcare", "quality-compliance");
  return {
    label: val(sec?.label) ?? "QUALITY, SAFETY & COMPLIANCE",
    headingLine1: val(sec?.heading_line1) ?? "Zero Compromise",
    headingLine2: val(sec?.heading_line2) ?? "on Patient Safety",
    description: val(sec?.description) ?? "In healthcare, safety and compliance are the baseline. Every Axion system is specified, tested, and documented to meet the exacting standards of medical facilities.",
    downloadLabel: val(sec?.download_label) ?? "Download Full Compliance Documentation →",
    downloadUrl: val(sec?.download_url) ?? "/contact",
    cards: Array.isArray(sec?.cards)
      ? (sec!.cards as Record<string,unknown>[]).map(c => ({
          number:      val(c.number)      ?? "",
          title:       val(c.title)       ?? "",
          subtitle:    val(c.subtitle)    ?? "",
          description: val(c.description) ?? "",
          badge:       val(c.badge)       ?? "CERTIFIED",
        })).filter(c => c.title)
      : [
          { number: "01", title: "NFPA 110 / 111",  subtitle: "Emergency & Standby Power",     description: "Type 10, Class 1.5 and Class X systems. Emergency power supply design and installation.",                                  badge: "VERIFIED" },
          { number: "02", title: "NEC Article 480",  subtitle: "Storage Battery Standards",      description: "Electrical code compliance for battery rooms, ventilation, and wiring in healthcare settings.",                            badge: "CERTIFIED" },
          { number: "03", title: "ISO 9001 : 2015",  subtitle: "Manufacturer Quality System",    description: "All battery manufacturers are ISO 9001 certified with full traceability documentation.",                                   badge: "CERTIFIED" },
          { number: "04", title: "EPA / RCRA",       subtitle: "Environmental Compliance",        description: "Responsible battery disposal and recycling. 99.5% lead recovery. Zero landfill policy.",                                  badge: "COMPLIANT" },
        ],
  };
}

// ============================================================================
// LIFECYCLE SUPPORT SECTION
// ============================================================================

export interface HCLifecyclePhase { number: string; icon: string; title: string; description: string; }
export interface HCLifecycleStat  { value: string; label: string; }
export interface HCLifecycleData {
  label: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  phases: HCLifecyclePhase[];
  stats: HCLifecycleStat[];
}
export async function getHCLifecycleData(): Promise<HCLifecycleData> {
  const sec = await getAxionSection<Raw>("healthcare", "lifecycle-support");
  return {
    label: val(sec?.label) ?? "LIFECYCLE SUPPORT",
    headingLine1: val(sec?.heading_line1) ?? "Full Lifecycle Coverage",
    headingLine2: val(sec?.heading_line2) ?? "From Installation to End-of-Life",
    description: val(sec?.description) ?? "Axion supports the entire battery lifecycle to ensure predictable, compliant, and always-available healthcare power.",
    phases: Array.isArray(sec?.phases)
      ? (sec!.phases as Record<string,unknown>[]).map(p => ({
          number:      val(p.number)      ?? "",
          icon:        val(p.icon)        ?? "⚙️",
          title:       val(p.title)       ?? "",
          description: val(p.description) ?? "",
        })).filter(p => p.title)
      : [
          { number: "1", icon: "⚙️", title: "Commissioning",  description: "Acceptance testing & system verification" },
          { number: "2", icon: "🔬", title: "Routine Testing", description: "IEEE capacity tests & inspections" },
          { number: "3", icon: "📊", title: "Monitoring",      description: "Health tracking & trend analysis" },
          { number: "4", icon: "🔄", title: "Replacement",     description: "Proactive planning before failures" },
          { number: "5", icon: "♻️", title: "Disposal",        description: "EPA/RCRA compliant lead recovery" },
        ],
    stats: Array.isArray(sec?.stats)
      ? (sec!.stats as Record<string,unknown>[]).map(s => ({
          value: val(s.value) ?? "",
          label: val(s.label) ?? "",
        })).filter(s => s.value)
      : [
          { value: "< 24hr", label: "Emergency replacement dispatch" },
          { value: "Annual",  label: "IEEE 450 capacity testing" },
          { value: "10+ yr",  label: "Avg battery service life achieved" },
          { value: "99.5%",   label: "Lead recovery on disposed units" },
        ],
  };
}

// ============================================================================
// WHY CHOOSE AXION SECTION
// ============================================================================

export interface HCWhyReason { title: string; description: string; }
export interface HCWhyData {
  label: string;
  headingLine1: string;
  headingLine2: string;
  headingLine3: string;
  description: string;
  statValue: string;
  statLabel: string;
  reasons: HCWhyReason[];
}

export async function getHCWhyData(): Promise<HCWhyData> {
  const sec = await getAxionSection<Raw>("healthcare", "why-axion");
  const reasonsRaw = Array.isArray(sec?.reasons) ? (sec!.reasons as Raw[]) : [];
  return {
    label:        val(sec?.label)         ?? "WHY CHOOSE AXION",
    headingLine1: val(sec?.heading_line1) ?? "When lives depend on power,",
    headingLine2: val(sec?.heading_line2) ?? "you need a partner",
    headingLine3: val(sec?.heading_line3) ?? "who never fails.",
    description:  val(sec?.description)  ?? "Every recommendation is made with patient safety and operational continuity as the priority.",
    statValue:    val(sec?.stat_value)   ?? "847+",
    statLabel:    val(sec?.stat_label)   ?? "Healthcare facilities powered nationwide",
    reasons: reasonsRaw.length > 0
      ? reasonsRaw.map((r) => ({ title: val(r.title) ?? "", description: val(r.description) ?? "" })).filter((r) => r.title)
      : [
          { title: "Mission-Critical Healthcare Expertise",   description: "Proven in hospitals, OR suites, trauma centers, and imaging facilities." },
          { title: "Proven VRLA and Wet Cell Solutions",      description: "Technologies matched to your facility size, runtime needs, and maintenance capacity." },
          { title: "Engineering-Focused, Compliance-Driven", description: "Full alignment with NFPA 110, NEC 480, and Joint Commission standards." },
          { title: "Commitment to Safety and Uptime",        description: "Every system designed with patient safety and 24/7 availability as the baseline." },
          { title: "Long-Term Partnership Mindset",          description: "From initial spec to eventual replacement — a relationship built on reliability." },
        ],
  };
}

// ============================================================================
// CTA
// ============================================================================
export interface HCCtaStat { value: string; label: string; }
export interface HCCtaData {
  label: string;
  headingLine1: string; headingLine2: string;
  description: string;
  btn1Label: string; btn1Url: string;
  btn2Label: string; btn2Url: string;
  linkLabel: string; linkUrl: string;
  stats: HCCtaStat[];
  bgColor?: string;
}
export async function getHCCtaData(): Promise<HCCtaData> {
  const sec = await getAxionSection<Raw>("healthcare", "cta");
  const statsRaw = Array.isArray(sec?.stats) ? (sec!.stats as Raw[]) : [];
  return {
    label:        val(sec?.label)         ?? "CONTACT AXION",
    headingLine1: val(sec?.heading_line1) ?? "Ensure Uninterrupted Power for",
    headingLine2: val(sec?.heading_line2) ?? "Your Healthcare Facility",
    description:  val(sec?.description)  ?? "Contact Axion Critical Power Solutions — your team of healthcare battery specialists is ready to design, supply, and support your mission-critical power infrastructure.",
    btn1Label:    val(sec?.btn1_label)   ?? "Contact Axion Today",
    btn1Url:      val(sec?.btn1_url)     ?? "/contact",
    btn2Label:    val(sec?.btn2_label)   ?? "Request Assessment",
    btn2Url:      val(sec?.btn2_url)     ?? "/contact",
    linkLabel:    val(sec?.link_label)   ?? "Download Spec Sheet \u2192",
    linkUrl:      val(sec?.link_url)     ?? "/contact",
    stats: statsRaw.length > 0
      ? statsRaw.map((s) => ({ value: val(s.value) ?? "", label: val(s.label) ?? "" })).filter((s) => s.value)
      : [
          { value: "847+",     label: "Healthcare Facilities" },
          { value: "NFPA 110", label: "Compliant Systems" },
          { value: "24/7",     label: "Emergency Support" },
        ],
    bgColor: val(sec?.bg_color),
  };
}
