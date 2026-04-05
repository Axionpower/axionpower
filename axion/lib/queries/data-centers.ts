import { getAxionSection } from "@/lib/queries/axion-cms";

type Raw = Record<string, unknown>;
const val = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);

// ============================================================================
// HERO
// ============================================================================
export interface DCHeroStatusRow { label: string; value: string; statusColor: string; }
export interface DCHeroData {
  breadcrumb: string; pill: string; heading: string; subtitle: string;
  features: string[];
  btn1Label: string; btn1Url: string;
  statValue: string; statLabel: string; statCaption: string;
  cardTag: string; cardSubtitle: string;
  statusRows: DCHeroStatusRow[];
  bgImage?: string;
  bgVideoUrl?: string;
  accentColor: string;
}
export async function getDCHeroData(): Promise<DCHeroData> {
  const sec = await getAxionSection<Raw>("data-centers", "hero");
  return {
    breadcrumb:  val(sec?.breadcrumb)   ?? "INDUSTRIES  /  DATA CENTERS & COLOCATION",
    pill:        val(sec?.pill)         ?? "🖥️  DATA CENTERS & COLOCATION",
    heading:     val(sec?.heading)      ?? "Always-On Power\nfor Always-On\nInfrastructure",
    subtitle:    val(sec?.subtitle)     ?? "Data centers and colocation facilities operate in a zero-tolerance environment. Even seconds of power disruption can lead to data loss, SLA violations, and reputational damage.",
    features: Array.isArray(sec?.features)
      ? (sec!.features as unknown[]).map(f => {
          if (typeof f === 'object' && f !== null && 'feature' in f) return val((f as Record<string,unknown>).feature) ?? "";
          return val(f) ?? "";
        }).filter(Boolean)
      : ["VRLA and wet cell batteries for critical infrastructure","Preventive maintenance, monitoring & lifecycle management","Compliance with electrical, safety & environmental standards","Integration with UPS, DC power plants & backup systems"],
    btn1Label:   val(sec?.btn1_label)   ?? "Explore Data Center Solutions",
    btn1Url:     val(sec?.btn1_url)     ?? "/contact",
    statValue:   val(sec?.stat_value)   ?? "99.999%",
    statLabel:   val(sec?.stat_label)   ?? "UPTIME SLA TARGET",
    statCaption: val(sec?.stat_caption) ?? "Five nines reliability",
    cardTag:     val(sec?.card_tag)     ?? "DATA CENTER — LIVE",
    cardSubtitle:val(sec?.card_subtitle)?? "SYSTEM STATUS",
    statusRows: Array.isArray(sec?.status_rows)
      ? (sec!.status_rows as Record<string,unknown>[]).map(r => ({
          label:       val(r.label)        ?? "",
          value:       val(r.value)        ?? "",
          statusColor: val(r.status_color) ?? "rgba(74,222,138,1)",
        })).filter(r => r.label)
      : [
          { label: "Power Load",   value: "84%",        statusColor: "rgba(255,191,69,1)"  },
          { label: "Temp Control", value: "NORMAL",     statusColor: "rgba(74,222,138,1)"  },
          { label: "UPS Status",   value: "ON BATTERY", statusColor: "rgba(0,217,255,1)"   },
          { label: "Network",      value: "ACTIVE",     statusColor: "rgba(74,222,138,1)"  },
        ],
    bgImage:     val(sec?.bg_image),
    bgVideoUrl:  val(sec?.bg_image_video_url),
    accentColor: val(sec?.accent_color) ?? "rgba(0,217,255,1)",
  };
}

// ============================================================================
// APPLICATIONS
// ============================================================================
export interface DCApplication { tag: string; title: string; description: string; stat: string; }
export interface DCApplicationsData { label: string; heading: string; apps: DCApplication[]; }
export async function getDCApplicationsData(): Promise<DCApplicationsData> {
  const sec = await getAxionSection<Raw>("data-centers", "applications");
  return {
    label:   val(sec?.label)   ?? "APPLICATIONS",
    heading: val(sec?.heading) ?? "Data Center\nEnvironments We Serve",
    apps: Array.isArray(sec?.apps)
      ? (sec!.apps as Record<string,unknown>[]).map(a => ({
          tag:         val(a.tag)         ?? "",
          title:       val(a.title)       ?? "",
          description: val(a.description) ?? "",
          stat:        val(a.stat)        ?? "",
        })).filter(a => a.title)
      : [
          { tag: "01 — HYPERSCALE DATA CENTERS",  title: "Warehouse-Scale Power Resilience",             description: "Massive battery backup systems for hyperscale facilities with thousands of servers and MW-scale power demands.",         stat: "MW-Scale  |  N+1 & 2N  |  24/7 Monitoring" },
          { tag: "02 — ENTERPRISE ON-PREM",        title: "Enterprise DC Power Protection",               description: "Custom-engineered battery backup for on-premise enterprise data centres.",                                              stat: "Custom runtime  |  Redundancy" },
          { tag: "03 — COLOCATION FACILITIES",     title: "Multi-Tenant Battery Infrastructure",          description: "Battery infrastructure for colocation providers serving multiple tenants with shared UPS systems.",                      stat: "SLA-grade  |  Shared UPS" },
          { tag: "04 — CLOUD SERVICE PROVIDERS",   title: "Cloud Infrastructure Power Continuity",        description: "Battery backup for cloud infrastructure requiring geo-redundant, scalable power protection.",                           stat: "Geo-redundant  |  Scalable" },
          { tag: "05 — DISASTER RECOVERY SITES",   title: "Failover & Recovery Power Assurance",          description: "Reliable backup power for disaster recovery sites requiring RPO/RTO-ready hot standby.",                               stat: "RPO/RTO-ready  |  Hot standby" },
          { tag: "06 — EDGE & MICRO DATA CENTERS", title: "Distributed Power Backup for Edge Infrastructure", description: "Compact, ruggedized battery solutions for edge nodes, remote sites, and micro-DCs requiring reliable local backup.", stat: "<1ms Switchover  |  72h Runtime  |  IP65" },
        ],
  };
}

// ============================================================================
// BATTERY TECHNOLOGIES  (comparison table)
// ============================================================================
export interface DCBatteryRow { spec: string; vrla: string; wetCell: string; }
export interface DCBatteryTechData { label: string; heading: string; description: string; rows: DCBatteryRow[]; recommendation: string; }
export async function getDCBatteryTechData(): Promise<DCBatteryTechData> {
  const sec = await getAxionSection<Raw>("data-centers", "battery-technologies");
  return {
    label:          val(sec?.label)          ?? "BATTERY TECHNOLOGIES",
    heading:        val(sec?.heading)        ?? "Purpose-Built Batteries\nfor Data Center Demands",
    description:    val(sec?.description)    ?? "Two proven technologies, each optimized for specific data center applications.",
    rows: Array.isArray(sec?.rows)
      ? (sec!.rows as Record<string,unknown>[]).map(r => ({
          spec:    val(r.spec)     ?? "",
          vrla:    val(r.vrla)     ?? "",
          wetCell: val(r.wet_cell) ?? "",
        })).filter(r => r.spec)
      : [
          { spec: "Technology Type",    vrla: "Sealed, maintenance-free AGM/Gel",   wetCell: "Flooded, vented electrolyte"      },
          { spec: "Runtime",            vrla: "8–20 hours (optimized)",              wetCell: "20+ hours (extended)"             },
          { spec: "Maintenance",        vrla: "Low — annual inspections only",       wetCell: "Regular electrolyte checks required"},
          { spec: "DC Application",     vrla: "UPS systems & short-term bridging",   wetCell: "Long-duration critical backup"     },
          { spec: "Space Requirements", vrla: "Compact rack-mount or cabinet",       wetCell: "Dedicated battery room required"   },
          { spec: "Best For",           vrla: "Controlled environments, colo racks", wetCell: "Hyperscale, generator bridging"    },
        ],
    recommendation: val(sec?.recommendation) ?? "VRLA for dense colo & short-runtime UPS  ·  Wet Cell for hyperscale generator bridging & extended runtime applications",
  };
}

// ============================================================================
// ENGINEERING / SOLUTIONS
// ============================================================================
export interface DCSolution { number: string; title: string; subtitle: string; bullets: string[]; }
export interface DCEngineeringData { label: string; heading: string; solutions: DCSolution[]; }
export async function getDCEngineeringData(): Promise<DCEngineeringData> {
  const sec = await getAxionSection<Raw>("data-centers", "engineering-support");
  return {
    label:   val(sec?.label)   ?? "SOLUTIONS",
    heading: val(sec?.heading) ?? "Axion Solutions for\nData Centers & Colocation",
    solutions: Array.isArray(sec?.solutions)
      ? (sec!.solutions as Record<string,unknown>[]).map(s => ({
          number:   val(s.number)   ?? "",
          title:    val(s.title)    ?? "",
          subtitle: val(s.subtitle) ?? "",
          bullets:  typeof s.bullets === "string"
            ? s.bullets.split("\n").map((b: string) => b.trim()).filter(Boolean)
            : Array.isArray(s.bullets) ? (s.bullets as unknown[]).map(b => val(b) ?? "").filter(Boolean) : [],
        })).filter(s => s.title)
      : [
          { number: "01", title: "Battery Backup Systems",                subtitle: "Engineered for mission-critical DC environments",       bullets: ["High-performance VRLA and wet cell batteries for UPS and DC power plants","Optimized runtime for controlled shutdowns or generator bridging","Remote monitoring, preventive maintenance, and lifecycle management"] },
          { number: "02", title: "Integration with UPS & Load Management",subtitle: "N+1 & 2N redundancy with seamless failover",              bullets: ["Support for N+1 and 2N redundancy architectures across all DC tiers","Load balancing and seamless integration with generators and PDUs","Coordination with UPS and DC power systems for continuous operation"] },
          { number: "03", title: "Maintenance & Emergency Support",        subtitle: "24/7 response with proactive lifecycle management",       bullets: ["Preventive maintenance programs, regular inspections, and battery testing","Replacement planning and environmentally responsible battery disposal","24/7 emergency response and uptime assurance services"] },
        ],
  };
}

// ============================================================================
// QUALITY & COMPLIANCE
// ============================================================================
export interface DCQualityStat { value: string; label: string; }
export interface DCQualityCard { standard: string; badge: string; title: string; subtitle: string; description: string; }
export interface DCQualityData { label: string; heading: string; stats: DCQualityStat[]; cards: DCQualityCard[]; }
export async function getDCQualityData(): Promise<DCQualityData> {
  const sec = await getAxionSection<Raw>("data-centers", "quality-compliance");
  return {
    label:   val(sec?.label)   ?? "COMPLIANCE, SAFETY & SUSTAINABILITY",
    heading: val(sec?.heading) ?? "Zero Compromise on\nSafety & Standards",
    stats: Array.isArray(sec?.stats)
      ? (sec!.stats as Record<string,unknown>[]).map(s => ({
          value: val(s.value) ?? "",
          label: val(s.label) ?? "",
        })).filter(s => s.value)
      : [
          { value: "100%",     label: "Electrical Compliance" },
          { value: "ESG",      label: "Sustainability Ready" },
          { value: "ISO 9001", label: "Quality Certified" },
          { value: "Zero",     label: "Tolerance for Failure" },
        ],
    cards: Array.isArray(sec?.cards)
      ? (sec!.cards as Record<string,unknown>[]).map(c => ({
          standard:    val(c.standard)    ?? "",
          badge:       val(c.badge)       ?? "CERTIFIED",
          title:       val(c.title)       ?? "",
          subtitle:    val(c.subtitle)    ?? "",
          description: val(c.description) ?? "",
        })).filter(c => c.title)
      : [
          { standard: "NEC Article 480",  badge: "VERIFIED",  title: "Electrical Safety",  subtitle: "Battery Systems",     description: "Full compliance with National Electrical Code requirements for stationary battery installations." },
          { standard: "NFPA 110/111",     badge: "COMPLIANT", title: "Fire & Life Safety", subtitle: "Emergency Power",      description: "Adherence to stored energy equipment standards for emergency and standby power in data center facilities." },
          { standard: "EPA / RCRA",       badge: "CERTIFIED", title: "Environmental",      subtitle: "Battery Disposal",     description: "Environmentally responsible recycling and disposal programs for VRLA and wet cell batteries." },
          { standard: "ISO 9001:2015",    badge: "CERTIFIED", title: "Quality Management", subtitle: "Operations",           description: "International quality management system certification ensuring consistent service excellence." },
          { standard: "Uptime Institute", badge: "ALIGNED",   title: "Uptime Standards",   subtitle: "Tier Classification", description: "Solutions aligned with Tier I–IV data center infrastructure standards for power redundancy." },
          { standard: "ESG Framework",    badge: "ACTIVE",    title: "Sustainability",      subtitle: "Green Operations",    description: "Energy-efficient battery solutions and sustainable practices supporting enterprise ESG goals." },
        ],
  };
}

// ============================================================================
// LIFECYCLE SUPPORT
// ============================================================================
export interface DCLifecycleStep { number: string; title: string; description: string; }
export interface DCLifecycleStat { value: string; label: string; }
export interface DCLifecycleData { label: string; heading: string; steps: DCLifecycleStep[]; stats: DCLifecycleStat[]; }
export async function getDCLifecycleData(): Promise<DCLifecycleData> {
  const sec = await getAxionSection<Raw>("data-centers", "lifecycle-support");
  return {
    label:   val(sec?.label)   ?? "LIFECYCLE SUPPORT",
    heading: val(sec?.heading) ?? "End-to-End Lifecycle\nManagement",
    steps: Array.isArray(sec?.steps)
      ? (sec!.steps as Record<string,unknown>[]).map(s => ({
          number:      val(s.number)      ?? "",
          title:       val(s.title)       ?? "",
          description: val(s.description) ?? "",
        })).filter(s => s.title)
      : [
          { number: "01", title: "Site Assessment & Design",  description: "Evaluate power requirements, load analysis, and battery system architecture for your facility." },
          { number: "02", title: "Battery Sourcing",           description: "VRLA and wet cell battery procurement optimized for your runtime and redundancy requirements." },
          { number: "03", title: "Installation & Integration", description: "Expert installation with UPS, DC power plants, generators, and PDU coordination." },
          { number: "04", title: "Monitoring & Maintenance",   description: "Remote monitoring, preventive maintenance programs, and performance health checks." },
          { number: "05", title: "Replacement & Disposal",     description: "Battery replacement planning and environmentally responsible recycling programs." },
        ],
    stats: Array.isArray(sec?.stats)
      ? (sec!.stats as Record<string,unknown>[]).map(s => ({
          value: val(s.value) ?? "",
          label: val(s.label) ?? "",
        })).filter(s => s.value)
      : [
          { value: "5-Step", label: "Lifecycle Process" },
          { value: "24/7",   label: "Monitoring Available" },
          { value: "99.5%",  label: "Lead Recovery Rate" },
          { value: "<24hr",  label: "Emergency Dispatch" },
        ],
  };
}

// ============================================================================
// WHY CHOOSE AXION
// ============================================================================
export interface DCWhyReason { title: string; description: string; }
export interface DCWhyStat   { value: string; label: string; }
export interface DCWhyData   { label: string; heading: string; reasons: DCWhyReason[]; stats: DCWhyStat[]; }
export async function getDCWhyData(): Promise<DCWhyData> {
  const sec = await getAxionSection<Raw>("data-centers", "why-axion");
  return {
    label:   val(sec?.label)   ?? "WHY CHOOSE AXION",
    heading: val(sec?.heading) ?? "The Critical Power Partner\nData Centers Trust",
    reasons: Array.isArray(sec?.reasons)
      ? (sec!.reasons as Record<string,unknown>[]).map(r => ({
          title:       val(r.title)       ?? "",
          description: val(r.description) ?? "",
        })).filter(r => r.title)
      : [
          { title: "Data center-focused expertise",    description: "Deep specialization in mission-critical power for hyperscale, enterprise, colocation, and edge DC environments." },
          { title: "Proven track record",              description: "Trusted by facility managers, consulting engineers, and contractors across hundreds of data center deployments." },
          { title: "Scalable architecture support",    description: "Battery systems designed to grow with your facility, from single-rack colos to multi-campus hyperscale campuses." },
          { title: "Multi-vendor flexibility",         description: "Technology-agnostic approach with access to leading VRLA and wet cell manufacturers for optimal fit." },
          { title: "Dedicated account management",     description: "A single point of contact who understands your facility, your SLAs, and your long-term power roadmap." },
        ],
    stats: Array.isArray(sec?.stats)
      ? (sec!.stats as Record<string, unknown>[]).map((s) => ({
          value: val(s.value) ?? "",
          label: val(s.label) ?? "",
        })).filter((s) => s.value)
      : [
          { value: "30+",       label: "Years of Industry Experience" },
          { value: "500+",      label: "Facilities Powered" },
          { value: "Tier I–IV", label: "All DC Tiers Supported" },
          { value: "Multi-OEM", label: "Vendor-Neutral Sourcing" },
          { value: "1 Source",  label: "Single Point of Accountability" },
        ],
  };
}
// ============================================================================
// CTA
// ============================================================================
export interface DCCtaValueProp { title: string; caption: string; }
export interface DCCtaField     { label: string; placeholder: string; }
export interface DCCtaData {
  label: string;
  headingLine1: string; headingLine2: string;
  description: string;
  btn1Label: string; btn1Url: string;
  btn2Label: string; btn2Url: string;
  formHeading: string; formSubheading: string; formBtnLabel: string;
  valueProps: DCCtaValueProp[];
  fields: DCCtaField[];
  bgColor?: string;
}
export async function getDCCtaData(): Promise<DCCtaData> {
  const sec = await getAxionSection<Raw>("data-centers", "cta");
  const vpRaw     = Array.isArray(sec?.value_props) ? (sec!.value_props as Raw[]) : [];
  const fieldsRaw = Array.isArray(sec?.fields)      ? (sec!.fields      as Raw[]) : [];
  return {
    label:          val(sec?.label)           ?? "POWER YOUR UPTIME",
    headingLine1:   val(sec?.heading_line1)   ?? "Power Your Uptime",
    headingLine2:   val(sec?.heading_line2)   ?? "with Confidence",
    description:    val(sec?.description)     ?? "Whether you operate a single colocation site or a multi-facility data center, Axion delivers the reliability, redundancy, and compliance your infrastructure demands.",
    btn1Label:      val(sec?.btn1_label)      ?? "Contact Axion Today",
    btn1Url:        val(sec?.btn1_url)        ?? "/contact",
    btn2Label:      val(sec?.btn2_label)      ?? "Explore Solutions",
    btn2Url:        val(sec?.btn2_url)        ?? "/contact",
    formHeading:    val(sec?.form_heading)    ?? "Design Your Power Solution",
    formSubheading: val(sec?.form_subheading) ?? "Tell us about your facility — we'll build the right solution.",
    formBtnLabel:   val(sec?.form_btn_label)  ?? "Get a Custom Power Solution →",
    valueProps: vpRaw.length > 0
      ? vpRaw.map((vp) => ({ title: val(vp.title) ?? "", caption: val(vp.caption) ?? "" }))
      : [
          { title: "Zero Downtime", caption: "Designed from day one" },
          { title: "24/7 Support",  caption: "Emergency response ready" },
          { title: "End-to-End",    caption: "Design through disposal" },
        ],
    fields: fieldsRaw.length > 0
      ? fieldsRaw.map((f) => ({ label: val(f.label) ?? "", placeholder: val(f.placeholder) ?? "" }))
      : [
          { label: "Facility Type",     placeholder: "Hyperscale / Enterprise / Colo / Cloud" },
          { label: "Data Center Tier",  placeholder: "Tier I — Tier IV (Uptime Institute)" },
          { label: "Power Requirement", placeholder: "UPS capacity in kVA" },
          { label: "Contact Email",     placeholder: "your@company.com" },
        ],
    bgColor: val(sec?.bg_color),
  };
}
