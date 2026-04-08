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
export interface ERHeroStat     { value: string; label: string; }
export interface ERHeroPanelRow { icon: string; type: string; format: string; }
export interface ERHeroData {
  breadcrumb: string;
  label: string;
  heading: string;
  subtitle: string;
  stats: ERHeroStat[];
  panelTitle: string;
  panelRows: ERHeroPanelRow[];
  btn1Label: string; btn1Url: string;
  btn2Label: string; btn2Url: string;
  bgImage?: string;
  bgVideoUrl?: string;
  accentColor: string;
}
export async function getERHeroData(): Promise<ERHeroData> {
  const raw: Raw = (await getAxionSection<Raw>("engineering-resources", "hero")) ?? {};
  const statsRaw = arr(raw.stats);
  const panelRowsRaw = arr(raw.panel_rows);
  return {
    breadcrumb:  val(raw.breadcrumb)   ?? "RESOURCES / ENGINEERING RESOURCES",
    label:       val(raw.label)        ?? "ENGINEERING RESOURCES",
    heading:     val(raw.heading)      ?? "Technical Documentation\nfor Critical Power Systems",
    subtitle:    val(raw.subtitle)     ?? "Access Axion's complete library of engineering resources — datasheets, technical guides, application notes, CAD files, and standards references — all tailored for specifiers, engineers, and facility managers working with VRLA and wet cell battery systems.",
    stats: statsRaw.length > 0
      ? statsRaw.map((s) => ({ value: val(s.value) ?? "", label: val(s.label) ?? "" }))
      : [
          { value: "50+",  label: "Documents Available" },
          { value: "2",    label: "Battery Technologies" },
          { value: "6+",   label: "Industry Applications" },
          { value: "Free", label: "Engineering Support"  },
        ],
    panelTitle: val(raw.panel_title) ?? "RESOURCE LIBRARY",
    panelRows: panelRowsRaw.length > 0
      ? panelRowsRaw.map((r) => ({ icon: val(r.icon) ?? "", type: val(r.type) ?? "", format: val(r.format) ?? "" }))
      : [
          { icon: "📄", type: "Datasheets & Cut Sheets",  format: "PDF"        },
          { icon: "📐", type: "CAD & BIM Files",          format: "DWG / RVT"  },
          { icon: "📋", type: "Technical Guides",          format: "PDF"        },
          { icon: "📊", type: "Application Notes",         format: "PDF"        },
          { icon: "📁", type: "Submittal Packages",        format: "Package"    },
          { icon: "📏", type: "Sizing Worksheets",         format: "XLSX / PDF" },
        ],
    btn1Label:   val(raw.btn1_label)   ?? "Browse All Resources →",
    btn1Url:     val(raw.btn1_url)     ?? "/contact",
    btn2Label:   val(raw.btn2_label)   ?? "Request a Document",
    btn2Url:     val(raw.btn2_url)     ?? "/contact",
    bgImage:     val(raw.bg_image),
    bgVideoUrl:  val(raw.bg_image_video_url),
    accentColor: val(raw.accent_color) ?? "rgba(251,146,60,1)",
  };
}

// ============================================================================
// RESOURCE LIBRARY
// ============================================================================
export interface ERResource {
  icon: string;
  category: string;
  title: string;
  description: string;
  format: string;
  tags: string[];
}
export interface ERLibraryData {
  bgColor?: string;
  label: string;
  heading: string;
  subtitle: string;
  requestUrl: string;
  requestLabel: string;
  resources: ERResource[];
}
export async function getERLibraryData(): Promise<ERLibraryData> {
  const raw: Raw = (await getAxionSection<Raw>("engineering-resources", "resource-library")) ?? {};
  const resourcesRaw = arr(raw.resources);
  return {
    bgColor:      val(raw.bg_color),
    label:        val(raw.label)         ?? "RESOURCE LIBRARY",
    heading:      val(raw.heading)       ?? "Download What You Need",
    subtitle:     val(raw.subtitle)      ?? "Every document is available upon request — formatted for immediate use in project specifications, submittals, and design packages.",
    requestUrl:   val(raw.request_url)   ?? "/contact",
    requestLabel: val(raw.request_label) ?? "Request →",
    resources: resourcesRaw.length > 0
      ? resourcesRaw.map((r) => ({
          icon:        val(r.icon)        ?? "",
          category:    val(r.category)    ?? "",
          title:       val(r.title)       ?? "",
          description: val(r.description) ?? "",
          format:      val(r.format)      ?? "",
          tags: typeof r.tags === "string" && (r.tags as string).trim()
            ? (r.tags as string).split(",").map((t) => t.trim()).filter(Boolean)
            : [],
        }))
      : [
          { icon: "📄", category: "Datasheet",     title: "VRLA Battery Series — Full Technical Datasheet",       description: "Complete electrical specifications, dimensions, terminal configurations, performance curves, and operating parameters for Axion VRLA batteries.",    format: "PDF",       tags: ["VRLA", "Specs"] },
          { icon: "📄", category: "Datasheet",     title: "Wet Cell Battery Series — Full Technical Datasheet",   description: "Detailed electrochemical data, capacity tables, charging profiles, and mechanical specifications for flooded lead-acid battery systems.",          format: "PDF",       tags: ["Wet Cell", "Specs"] },
          { icon: "✂",  category: "Cut Sheet",     title: "VRLA Battery — One-Page Cut Sheet",                   description: "Concise product summary for project submittals, RFQ packages, and owner review packages. Includes key specs and ordering information.",             format: "PDF",       tags: ["VRLA", "Submittal"] },
          { icon: "✂",  category: "Cut Sheet",     title: "Wet Cell Battery — One-Page Cut Sheet",               description: "One-page summary for flooded battery product lines — suitable for submittals, design team distribution, and pre-qualification packages.",          format: "PDF",       tags: ["Wet Cell", "Submittal"] },
          { icon: "📐", category: "CAD File",      title: "Battery Cabinet — 2D CAD Drawing Set",                description: "Dimensioned DWG drawings for stationary battery cabinets including plan, elevation, and section views with clearance zones.",                      format: "DWG",       tags: ["CAD", "Cabinet"] },
          { icon: "📐", category: "BIM File",      title: "Battery Cabinet — BIM / Revit Family",                description: "Revit family file for battery cabinet system integration in BIM models. Includes parametric properties for cabinet sizing.",                        format: "RVT",       tags: ["BIM", "Revit"] },
          { icon: "📋", category: "Spec Template", title: "CSI Division 26 — VRLA Battery System Specification", description: "MasterFormat-compliant specification section for VRLA battery systems — ready to insert directly into your project manual.",                        format: "DOCX",      tags: ["CSI", "Spec"] },
          { icon: "📋", category: "Spec Template", title: "CSI Division 26 — Wet Cell Battery System Spec",      description: "Complete MasterFormat specification language for flooded battery systems with basis-of-design, quality assurance, and execution provisions.",        format: "DOCX",      tags: ["CSI", "Spec"] },
          { icon: "📏", category: "Worksheet",     title: "Battery Sizing Worksheet — VRLA",                     description: "Structured IEEE 485-based worksheet for calculating VRLA battery string capacity based on load, voltage, and design margin requirements.",          format: "XLSX",      tags: ["Sizing", "IEEE 485"] },
          { icon: "📏", category: "Worksheet",     title: "Battery Sizing Worksheet — Wet Cell",                 description: "IEEE 485 sizing worksheet for flooded battery systems with electrolyte temperature correction factors and aging derating guidance.",                format: "XLSX",      tags: ["Sizing", "IEEE 485"] },
          { icon: "📁", category: "Package",       title: "Standard Submittal Package — VRLA",                   description: "Complete submittal package including cut sheet, datasheet, UL listing documentation, and installation notes for project approval.",                format: "Package",   tags: ["Submittal", "VRLA"] },
          { icon: "📊", category: "App Note",      title: "UPS Battery Selection — Application Note",            description: "Technical guidance for specifying VRLA and wet cell batteries in commercial and industrial UPS applications.",                                        format: "PDF",       tags: ["UPS", "App Note"] },
        ],
  };
}

// ============================================================================
// TECHNICAL GUIDES
// ============================================================================
export interface ERGuide {
  number: string;
  tag: string;
  title: string;
  description: string;
  topics: string[];
  format: string;
}
export interface ERGuidesData {
  bgColor?: string;
  label: string;
  heading: string;
  subtitle: string;
  requestUrl: string;
  requestLabel: string;
  guides: ERGuide[];
}
export async function getERGuidesData(): Promise<ERGuidesData> {
  const raw: Raw = (await getAxionSection<Raw>("engineering-resources", "technical-guides")) ?? {};
  const guidesRaw = arr(raw.guides);
  return {
    bgColor:      val(raw.bg_color),
    label:        val(raw.label)         ?? "TECHNICAL GUIDES",
    heading:      val(raw.heading)       ?? "In-Depth Engineering Guides",
    subtitle:     val(raw.subtitle)      ?? "Comprehensive technical references written for engineers — covering battery selection, lifecycle planning, maintenance, and system design.",
    requestUrl:   val(raw.request_url)   ?? "/contact",
    requestLabel: val(raw.request_label) ?? "Request Guide →",
    guides: guidesRaw.length > 0
      ? guidesRaw.map((g) => ({
          number:      val(g.number)      ?? "",
          tag:         val(g.tag)         ?? "",
          title:       val(g.title)       ?? "",
          description: val(g.description) ?? "",
          format:      val(g.format)      ?? "",
          topics: typeof g.topics === "string" && (g.topics as string).trim()
            ? (g.topics as string).split("\n").map((t) => t.trim()).filter(Boolean)
            : [],
        }))
      : [
          {
            number: "01", tag: "Selection Guide", format: "PDF",
            title: "VRLA vs. Wet Cell — Engineering Selection Guide",
            description: "A comprehensive guide to selecting between VRLA and flooded battery technologies — covering application requirements, lifecycle cost, maintenance, and regulatory considerations.",
            topics: ["Application mapping", "Lifecycle cost analysis", "Maintenance comparison", "Regulatory alignment", "Decision framework"],
          },
          {
            number: "02", tag: "Design Guide", format: "PDF",
            title: "Battery Room Design Guide",
            description: "Engineering guidance for designing battery rooms and enclosures compliant with NEC Article 480, NFPA 70E, and ASHRAE ventilation requirements.",
            topics: ["Ventilation calculations", "NEC 480 compliance", "Arc flash zoning", "Containment design", "Access and clearances"],
          },
          {
            number: "03", tag: "Maintenance Guide", format: "PDF",
            title: "Battery Maintenance & Inspection Protocol",
            description: "A structured guide to VRLA and wet cell battery maintenance programs — including inspection intervals, testing procedures, and capacity assessment criteria.",
            topics: ["Inspection intervals", "Float voltage testing", "Capacity trending", "Wet cell equalization", "Record keeping"],
          },
          {
            number: "04", tag: "Lifecycle Guide", format: "PDF",
            title: "Battery Lifecycle Planning Guide",
            description: "Strategic guidance for planning battery replacement cycles, managing end-of-life transitions, and minimizing downtime in critical power installations.",
            topics: ["Replacement triggers", "EoL indicators", "Upgrade planning", "Disposal compliance", "Budget forecasting"],
          },
        ],
  };
}

// ============================================================================
// SIZING & SELECTION TOOLS
// ============================================================================
export interface ERTool {
  icon: string;
  title: string;
  description: string;
  standard: string;
  inputs: string[];
  outputLabel: string;
}
export interface ERToolsData {
  bgColor?: string;
  label: string;
  heading: string;
  subtitle: string;
  inputsLabel: string;
  outputPrefixLabel: string;
  requestUrl: string;
  requestLabel: string;
  tools: ERTool[];
  disclaimer: string;
}
export async function getERToolsData(): Promise<ERToolsData> {
  const raw: Raw = (await getAxionSection<Raw>("engineering-resources", "sizing-tools")) ?? {};
  const toolsRaw = arr(raw.tools);
  return {
    bgColor:           val(raw.bg_color),
    label:             val(raw.label)              ?? "SIZING & SELECTION TOOLS",
    heading:           val(raw.heading)            ?? "Engineering Tools & Worksheets",
    subtitle:          val(raw.subtitle)           ?? "Axion provides structured sizing worksheets and selection tools based on IEEE and IEC standards — available for download or completion with Axion engineering support.",
    inputsLabel:       val(raw.inputs_label)       ?? "Required Inputs",
    outputPrefixLabel: val(raw.output_prefix_label) ?? "Output:",
    requestUrl:        val(raw.request_url)        ?? "/contact",
    requestLabel:      val(raw.request_label)      ?? "Download Worksheet →",
    disclaimer:        val(raw.disclaimer)         ?? "All worksheets are based on published IEEE / IEC standards. Axion engineering support is available at no charge to validate results for your project.",
    tools: toolsRaw.length > 0
      ? toolsRaw.map((t) => ({
          icon:        val(t.icon)         ?? "",
          title:       val(t.title)        ?? "",
          description: val(t.description)  ?? "",
          standard:    val(t.standard)     ?? "",
          outputLabel: val(t.output_label) ?? "",
          inputs: typeof t.inputs === "string" && (t.inputs as string).trim()
            ? (t.inputs as string).split("\n").map((i) => i.trim()).filter(Boolean)
            : [],
        }))
      : [
          {
            icon: "📏",
            title: "VRLA Battery String Sizing",
            description: "Calculate VRLA battery string capacity using the IEEE 485 method. Accounts for load profile, design margin, aging factor, and temperature correction.",
            standard: "IEEE 485",
            inputs: ["Load current (amperes)", "Discharge time (minutes/hours)", "Minimum terminal voltage", "Design margin (%)", "Ambient temperature"],
            outputLabel: "Recommended Ah capacity",
          },
          {
            icon: "📐",
            title: "Wet Cell Battery Sizing",
            description: "IEEE 485-based sizing worksheet for flooded lead-acid systems with electrolyte temperature correction, specific gravity derating, and cell equalization requirements.",
            standard: "IEEE 485 / 1187",
            inputs: ["Load profile", "Discharge duration", "Electrolyte temperature", "Specific gravity target", "Aging derating factor"],
            outputLabel: "Recommended string capacity",
          },
          {
            icon: "🔌",
            title: "Charger Sizing Calculator",
            description: "Determine appropriate charger current output to fully recharge a battery system within the required recharge time following a full discharge event.",
            standard: "IEEE 485",
            inputs: ["Battery Ah capacity", "Required recharge time (hours)", "Charger efficiency (%)", "Float voltage", "Number of cells"],
            outputLabel: "Charger output current (A)",
          },
          {
            icon: "💨",
            title: "Battery Room Ventilation",
            description: "Calculate minimum ventilation airflow requirements for battery rooms based on hydrogen off-gassing rates during charging, per NEC 480 and ASHRAE.",
            standard: "NEC 480 / ASHRAE",
            inputs: ["Number of cells", "Battery type", "Charge rate", "Room volume (m³/ft³)", "Local code requirements"],
            outputLabel: "Minimum CFM / L/s airflow",
          },
        ],
  };
}

// ============================================================================
// APPLICATION NOTES
// ============================================================================
export interface ERAppNote {
  tag: string;
  tagColor: string;
  title: string;
  summary: string;
  keyPoints: string[];
  technology: string;
}
export interface ERAppNotesData {
  bgColor?: string;
  label: string;
  heading: string;
  subtitle: string;
  notes: ERAppNote[];
}
export async function getERAppNotesData(): Promise<ERAppNotesData> {
  const raw: Raw = (await getAxionSection<Raw>("engineering-resources", "application-notes")) ?? {};
  const notesRaw = arr(raw.notes);
  return {
    bgColor:  val(raw.bg_color),
    label:    val(raw.label)    ?? "APPLICATION NOTES",
    heading:  val(raw.heading)  ?? "Technical Notes by Application",
    subtitle: val(raw.subtitle) ?? "Application-specific technical guidance — written for engineers designing battery systems for distinct facility types and power continuity requirements.",
    notes: notesRaw.length > 0
      ? notesRaw.map((n) => ({
          tag:        val(n.tag)        ?? "",
          tagColor:   val(n.tag_color)  ?? "rgba(251,146,60,1)",
          title:      val(n.title)      ?? "",
          summary:    val(n.summary)    ?? "",
          technology: val(n.technology) ?? "",
          keyPoints: typeof n.key_points === "string" && (n.key_points as string).trim()
            ? (n.key_points as string).split("\n").map((k) => k.trim()).filter(Boolean)
            : [],
        }))
      : [
          {
            tag: "Healthcare", tagColor: "rgba(20,184,166,1)",
            title: "Battery Backup for Healthcare Facilities",
            summary: "Design criteria for life-safety UPS battery systems in hospitals, surgical centres, and medical imaging facilities — covering code requirements, discharge durations, and maintenance planning.",
            keyPoints: ["NFPA 99 life-safety system requirements", "UPS runtime design for ORs and ICUs", "VRLA preference for clean-environment installations", "Periodic inspection and capacity testing"],
            technology: "VRLA",
          },
          {
            tag: "Data Centers", tagColor: "rgba(0,217,255,1)",
            title: "UPS Battery Design for Data Centers",
            summary: "Technical guidance for specifying VRLA and wet cell battery strings in Tier I–IV data centers, including redundancy design, string sizing, and thermal management.",
            keyPoints: ["N+1 and 2N battery redundancy", "IEEE 485 string sizing methodology", "Thermal runaway prevention", "SNMP-based monitoring integration"],
            technology: "VRLA / Wet Cell",
          },
          {
            tag: "Utilities", tagColor: "rgba(245,199,20,1)",
            title: "DC Control Power for Utilities & Substations",
            summary: "Application guidance for flooded and VRLA batteries in utility DC control systems — covering protective relay backup, SCADA power, and breaker trip/close circuits.",
            keyPoints: ["IEEE 485 / 1115 compliance", "125 Vdc and 48 Vdc systems", "Wet cell preference for long-lifecycle sites", "Equalization charging protocols"],
            technology: "Wet Cell",
          },
          {
            tag: "Telecom", tagColor: "rgba(199,158,255,1)",
            title: "Battery Systems for Telecom Infrastructure",
            summary: "Design and specification guidance for VRLA batteries in telecom central offices, remote sites, and tower installations — including Telcordia GR-63 compliance and float life considerations.",
            keyPoints: ["Telcordia GR-63-CORE compliance", "48 Vdc string design", "High-density cabinet systems", "Float voltage and temperature management"],
            technology: "VRLA",
          },
        ],
  };
}

// ============================================================================
// STANDARDS QUICK REFERENCE
// ============================================================================
export interface ERStandardCard {
  code: string;
  body: string;
  title: string;
  scope: string;
  appliesTo: string;
}
export interface ERStandardsData {
  bgColor?: string;
  label: string;
  heading: string;
  subtitle: string;
  appliesToLabel: string;
  standards: ERStandardCard[];
}
export async function getERStandardsData(): Promise<ERStandardsData> {
  const raw: Raw = (await getAxionSection<Raw>("engineering-resources", "standards-reference")) ?? {};
  const standardsRaw = arr(raw.standards);
  return {
    bgColor:        val(raw.bg_color),
    label:          val(raw.label)           ?? "STANDARDS REFERENCE",
    heading:        val(raw.heading)         ?? "Key Standards for Battery System Design",
    subtitle:       val(raw.subtitle)        ?? "A quick-reference guide to the primary electrical, safety, and environmental standards that govern battery system specification in North America.",
    appliesToLabel: val(raw.applies_to_label) ?? "Applies to:",
    standards: standardsRaw.length > 0
      ? standardsRaw.map((s) => ({
          code:      val(s.code)       ?? "",
          body:      val(s.body)       ?? "",
          title:     val(s.title)      ?? "",
          scope:     val(s.scope)      ?? "",
          appliesTo: val(s.applies_to) ?? "",
        }))
      : [
          { code: "IEEE 485",  body: "IEEE",   title: "Battery Sizing",           scope: "Recommended practice for sizing lead-acid batteries for stationary applications",             appliesTo: "VRLA & Wet Cell" },
          { code: "IEEE 1188", body: "IEEE",   title: "VRLA Maintenance",         scope: "Recommended practice for maintenance, testing, and replacement of VRLA batteries",            appliesTo: "VRLA" },
          { code: "IEEE 1187", body: "IEEE",   title: "Wet Cell Installation",    scope: "Recommended practice for installation of vented nickel-cadmium and lead-acid batteries",     appliesTo: "Wet Cell" },
          { code: "NEC 480",   body: "NFPA",   title: "Battery Installations",    scope: "NEC Article 480 — requirements for stationary battery installations in all occupancies",      appliesTo: "All Types" },
          { code: "NFPA 70E",  body: "NFPA",   title: "Electrical Safety",        scope: "Standard for electrical safety in the workplace — arc flash and PPE requirements",            appliesTo: "All Types" },
          { code: "UL 924",    body: "UL",     title: "Emergency Lighting",       scope: "Emergency lighting and power equipment — battery backup listing requirements",                appliesTo: "VRLA" },
          { code: "UL 1778",   body: "UL",     title: "UPS Systems",              scope: "Uninterruptible power supply systems — battery performance and safety listing",               appliesTo: "VRLA" },
          { code: "IEC 60896", body: "IEC",    title: "Stationary Batteries",     scope: "Stationary lead-acid batteries — general requirements and methods of test",                   appliesTo: "VRLA & Wet Cell" },
          { code: "CSA C22.1", body: "CSA",    title: "Canadian Electrical Code", scope: "Canadian Electrical Code Part I — battery installation rules for Canadian projects",          appliesTo: "All Types" },
          { code: "ASHRAE",    body: "ASHRAE", title: "Battery Room Ventilation", scope: "HVAC and ventilation design for battery rooms — hydrogen off-gassing management",            appliesTo: "Wet Cell" },
        ],
  };
}

// ============================================================================
// ENGINEERING SUPPORT PROGRAMS
// ============================================================================
export interface ERSupportProgram {
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
  turnaround: string;
}
export interface ERSupportData {
  bgColor?: string;
  label: string;
  heading: string;
  subtitle: string;
  deliverablesLabel: string;
  turnaroundLabel: string;
  noteUrl: string;
  noteBtnLabel: string;
  programs: ERSupportProgram[];
  noteHeading: string;
  noteText: string;
}
export async function getERSupportData(): Promise<ERSupportData> {
  const raw: Raw = (await getAxionSection<Raw>("engineering-resources", "engineering-support")) ?? {};
  const programsRaw = arr(raw.programs);
  return {
    bgColor:           val(raw.bg_color),
    label:             val(raw.label)              ?? "ENGINEERING SUPPORT",
    heading:           val(raw.heading)            ?? "Direct Support for Engineers & Specifiers",
    subtitle:          val(raw.subtitle)           ?? "Axion's engineering team provides no-cost technical support to consulting engineers, specifiers, and facility managers throughout the project lifecycle.",
    deliverablesLabel: val(raw.deliverables_label) ?? "Deliverables",
    turnaroundLabel:   val(raw.turnaround_label)   ?? "Typical turnaround:",
    noteUrl:           val(raw.note_url)           ?? "/contact",
    noteBtnLabel:      val(raw.note_btn_label)     ?? "Start a Request →",
    noteHeading:       val(raw.note_heading)       ?? "All Support is Provided at No Charge",
    noteText:          val(raw.note_text)          ?? "Axion's engineering support programs are available at no cost to consulting engineers, specifiers, and project managers. Contact us to initiate a support request.",
    programs: programsRaw.length > 0
      ? programsRaw.map((p) => ({
          icon:        val(p.icon)        ?? "",
          title:       val(p.title)       ?? "",
          description: val(p.description) ?? "",
          turnaround:  val(p.turnaround)  ?? "",
          deliverables: typeof p.deliverables === "string" && (p.deliverables as string).trim()
            ? (p.deliverables as string).split("\n").map((d) => d.trim()).filter(Boolean)
            : [],
        }))
      : [
          {
            icon: "📋",
            title: "Specification Writing Support",
            description: "We prepare or review CSI MasterFormat specification language for VRLA and wet cell battery systems — tailored to your project's code jurisdiction and owner requirements.",
            deliverables: ["Division 26 spec section (DOCX)", "Substitution clauses", "Performance requirements language", "Warranty provisions"],
            turnaround: "2–3 business days",
          },
          {
            icon: "📊",
            title: "Basis-of-Design Preparation",
            description: "Axion prepares basis-of-design narratives and comparative analysis documents — suitable for inclusion in design development or design-build RFP packages.",
            deliverables: ["BoD narrative (PDF)", "VRLA vs wet cell comparison", "Site-specific design criteria", "Lifecycle cost summary"],
            turnaround: "3–5 business days",
          },
          {
            icon: "📐",
            title: "Battery Sizing & Design Review",
            description: "Submit your load profile and design parameters — Axion's engineering team will validate sizing calculations and provide a stamped review memo.",
            deliverables: ["IEEE 485 sizing worksheet", "Sizing validation memo", "String configuration recommendation", "Charger sizing guidance"],
            turnaround: "2–4 business days",
          },
          {
            icon: "📁",
            title: "Submittal Package Preparation",
            description: "Axion prepares complete submittal packages for project approval — including product data, shop drawings, and certification documentation.",
            deliverables: ["Product data sheets", "Dimensional drawings", "UL/cUL listings", "O&M excerpts"],
            turnaround: "3–5 business days",
          },
        ],
  };
}

// ============================================================================
// CTA
// ============================================================================
export interface ERCtaData {
  bgColor?: string;
  label: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  btn1Label: string; btn1Url: string;
  btn2Label: string; btn2Url: string;
  trustLine: string;
}
export async function getERCtaData(): Promise<ERCtaData> {
  const raw: Raw = (await getAxionSection<Raw>("engineering-resources", "cta")) ?? {};
  return {
    bgColor:      val(raw.bg_color),
    label:        val(raw.label)         ?? "GET STARTED",
    headingLine1: val(raw.heading_line1) ?? "Access the Resources",
    headingLine2: val(raw.heading_line2) ?? "Your Project Needs",
    description:  val(raw.description)   ?? "Request any document from the library, initiate an engineering support request, or contact Axion directly — our technical team responds fast.",
    btn1Label:    val(raw.btn1_label)    ?? "Request Documents",
    btn1Url:      val(raw.btn1_url)      ?? "/contact",
    btn2Label:    val(raw.btn2_label)    ?? "Contact Engineering Support →",
    btn2Url:      val(raw.btn2_url)      ?? "/contact",
    trustLine:    val(raw.trust_line)    ?? "No-cost resources for engineers, specifiers & facility managers — VRLA and wet cell battery systems",
  };
}
