import { getAxionSection } from "@/lib/queries/axion-cms";

type Raw = Record<string, unknown>;
const val = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
export interface TCHeroNode { label: string; color: string; }
export interface TCHeroStat { value: string; label: string; color: string; }
export interface TCHeroData {
    breadcrumb: string;
    pill: string;
    headingLine1: string;
    headingAccent: string;
    headingLine2: string;
    subtitle: string;
    btn1Label: string; btn1Url: string;
    btn2Label: string; btn2Url: string;
    badges: string[];
    networkNodes: TCHeroNode[];
    heroStats: TCHeroStat[];
}
export async function getTCHeroData(): Promise<TCHeroData> {
    const sec = await getAxionSection<Raw>("telecommunications", "hero");
    return {
        breadcrumb: val(sec?.breadcrumb) ?? "INDUSTRIES  /  TELECOMMUNICATIONS",
        pill: val(sec?.pill) ?? "📡  TELECOMMUNICATIONS",
        headingLine1: val(sec?.heading_line1) ?? "Reliable Battery\nSystems for",
        headingAccent: val(sec?.heading_accent) ?? "Mission-Critical",
        headingLine2: val(sec?.heading_line2) ?? "Telecom Networks",
        subtitle: val(sec?.subtitle) ?? "VRLA and flooded battery systems, engineering support, and lifecycle management for uninterrupted telecom uptime.",
        btn1Label: val(sec?.btn1_label) ?? "Explore Telecom Solutions →",
        btn1Url: val(sec?.btn1_url) ?? "/contact",
        btn2Label: val(sec?.btn2_label) ?? "Talk to an Engineer ↗",
        btn2Url: val(sec?.btn2_url) ?? "/contact",
        badges: ["VRLA + Flooded", "IEEE Compliant", "24/7 Response", "99.97% Uptime"],
        networkNodes: [
            { label: "Central Office", color: "rgba(99,222,247,1)" },
            { label: "Cell Site A",    color: "rgba(30,136,229,1)" },
            { label: "Cell Site B",    color: "rgba(30,136,229,1)" },
            { label: "Data Hub",       color: "rgba(255,191,69,1)" },
            { label: "Fiber Node",     color: "rgba(74,222,138,1)" },
            { label: "Base Station",   color: "rgba(204,166,255,1)" },
        ],
        heroStats: [
            { value: "142",    label: "VRLA Sites",  color: "rgba(99,222,247,1)" },
            { value: "38",     label: "Flooded DC",  color: "rgba(255,191,69,1)" },
            { value: "99.97%", label: "Uptime",      color: "rgba(74,222,138,1)" },
        ],
    };
}

/* ─── Applications ──────────────────────────────────────────────────────────── */
export interface TCApp { icon: string; title: string; description: string; }
export interface TCApplicationsData {
    label: string;
    headingLine1: string;
    headingAccent: string;
    description: string;
    apps: TCApp[];
}
export async function getTCApplicationsData(): Promise<TCApplicationsData> {
    const sec = await getAxionSection<Raw>("telecommunications", "applications");
    return {
        label: val(sec?.label) ?? "APPLICATIONS",
        headingLine1: val(sec?.heading_line1) ?? "Where Axion Powers",
        headingAccent: val(sec?.heading_accent) ?? "Telecom Infrastructure",
        description: val(sec?.description) ?? "From cell towers to data centers — reliable backup power for every node in your network.",
        apps: [
            { icon: "📡", title: "Central Offices",     description: "Critical power for switching and routing hubs serving thousands of subscribers." },
            { icon: "🗼", title: "Cell Tower Sites",    description: "Remote backup ensuring 99.99% uptime for 4G/5G cellular networks." },
            { icon: "🏢", title: "Data Centers",        description: "Tier IV rated UPS solutions for hyperscale and colocation facilities." },
            { icon: "📻", title: "Broadcast Stations",  description: "Uninterrupted power for FM, AM, TV, and emergency broadcast transmitters." },
            { icon: "🔗", title: "Fiber Hubs & POPs",   description: "Reliable backup for Points of Presence and fiber distribution nodes." },
            { icon: "🚨", title: "E-911 Centers",       description: "Life-safety grade batteries for emergency dispatch and PSAP facilities." },
        ],
    };
}

/* ─── Battery Technologies ──────────────────────────────────────────────────── */
export interface TCBatteryTech { accentColor: string; title: string; tag: string; description: string; }
export interface TCBatteryTechData {
    label: string;
    headingLine1: string;
    headingAccent: string;
    description: string;
    imageCaption: string;
    techs: TCBatteryTech[];
}
export async function getTCBatteryTechData(): Promise<TCBatteryTechData> {
    const sec = await getAxionSection<Raw>("telecommunications", "battery-technologies");
    return {
        label: val(sec?.label) ?? "BATTERY TECHNOLOGIES",
        headingLine1: val(sec?.heading_line1) ?? "The Right Battery",
        headingAccent: val(sec?.heading_accent) ?? "for Every Telecom Need",
        description: val(sec?.description) ?? "A complete range of telecom-grade battery technologies — engineered for the demanding reliability standards of mission-critical communications infrastructure.",
        imageCaption: val(sec?.image_caption) ?? "Axion VRLA Installation — Telecom Central Office",
        techs: [
            { accentColor: "rgba(30,136,229,1)",  title: "VRLA AGM",          tag: "Most Common",  description: "Valve-regulated lead-acid for cabinets, UPS rooms, and standard telecom deployments. Low maintenance, proven reliability." },
            { accentColor: "rgba(20,128,178,1)",  title: "Flooded Lead-Acid", tag: "High Capacity", description: "For large central offices requiring maximum amp-hour capacity and long float life at scale." },
            { accentColor: "rgba(153,77,229,1)",  title: "Lithium-Ion",       tag: "Next Gen",      description: "Compact Li-ion for 5G edge sites, rooftop installations, and space-constrained densification nodes." },
        ],
    };
}

/* ─── Engineering Support ───────────────────────────────────────────────────── */
export interface TCEngStep { number: string; title: string; description: string; }
export interface TCWorksheetRow { label: string; value: string; tag?: string; tagColor?: string; highlight?: boolean; }
export interface TCEngineeringData {
    label: string;
    headingLine1: string;
    headingAccent: string;
    description: string;
    steps: TCEngStep[];
    worksheetTitle: string;
    worksheetSubtitle: string;
    worksheetRows: TCWorksheetRow[];
}
export async function getTCEngineeringData(): Promise<TCEngineeringData> {
    const sec = await getAxionSection<Raw>("telecommunications", "engineering-support");
    return {
        label: val(sec?.label) ?? "ENGINEERING SUPPORT",
        headingLine1: val(sec?.heading_line1) ?? "Technical Expertise",
        headingAccent: val(sec?.heading_accent) ?? "From Design to Deployment",
        description: val(sec?.description) ?? "Our telecom engineering team provides end-to-end support — from initial site survey and battery sizing to installation guidance and long-term maintenance programs.",
        steps: [
            { number: "01", title: "Site Survey",          description: "RF, power, and environmental assessment of telecom facility" },
            { number: "02", title: "Load Calculation",     description: "Precise battery sizing based on real load profiles and runtime requirements" },
            { number: "03", title: "System Design",        description: "Custom battery room layout, string configuration, and thermal management" },
            { number: "04", title: "Installation Support", description: "On-site technical supervision and commissioning testing" },
            { number: "05", title: "Ongoing Monitoring",   description: "Remote telemetry, capacity testing, and predictive maintenance alerts" },
        ],
        worksheetTitle: "BATTERY SIZING WORKSHEET",
        worksheetSubtitle: "Central Office Sizing Calculator",
        worksheetRows: [
            { label: "Site Classification",    value: "Class A — Central Office", tag: "CO",   tagColor: "rgba(99,222,247,1)" },
            { label: "Equipment Load (kW)",    value: "12.4 kW peak",            tag: "CALC", tagColor: "rgba(99,222,247,1)" },
            { label: "Required Runtime",       value: "4 hours @ full load",     tag: "REQ",  tagColor: "rgba(99,222,247,1)" },
            { label: "Battery Chemistry",      value: "VRLA AGM (Recommended)",  tag: "OPT",  tagColor: "rgba(99,222,247,1)" },
            { label: "String Voltage",         value: "48V DC bus",              tag: "STD",  tagColor: "rgba(99,222,247,1)" },
            { label: "Recommended Capacity",   value: "1,240 Ah @ C/8 rate",    tag: "RESULT", tagColor: "rgba(99,222,247,1)", highlight: true },
            { label: "Battery Strings",        value: "6 × 200Ah strings (2V cells)", tag: "RESULT", tagColor: "rgba(99,222,247,1)", highlight: true },
            { label: "Floor Space Required",   value: "~18.4 m² (rack configuration)", tag: "INFO", tagColor: "rgba(99,222,247,1)" },
        ],
    };
}

/* ─── Quality & Compliance ──────────────────────────────────────────────────── */
export interface TCStandard { icon: string; title: string; description: string; }
export interface TCStat { value: string; label: string; }
export interface TCQualityData {
    label: string;
    headingLine1: string;
    headingAccent: string;
    description: string;
    standards: TCStandard[];
    stats: TCStat[];
}
export async function getTCQualityData(): Promise<TCQualityData> {
    const sec = await getAxionSection<Raw>("telecommunications", "quality-compliance");
    return {
        label: val(sec?.label) ?? "QUALITY & COMPLIANCE",
        headingLine1: val(sec?.heading_line1) ?? "Built to the Highest",
        headingAccent: val(sec?.heading_accent) ?? "Telecom Standards",
        description: val(sec?.description) ?? "Every Axion battery system is designed, tested, and certified to meet the rigorous standards of the telecommunications industry.",
        standards: [
            { icon: "🏆", title: "Telcordia GR-63-CORE", description: "Network Equipment Building System (NEBS) Level 3 certification for seismic, fire, and environmental resilience." },
            { icon: "⚡", title: "IEEE 1635 / ASHRAE",   description: "Battery room ventilation and thermal management standards for safe hydrogen management in enclosed spaces." },
            { icon: "🔒", title: "UL 1973 / UL 9540",   description: "Battery system safety and energy storage system integration standards for mission-critical applications." },
            { icon: "🌍", title: "IEC 62619",            description: "International safety standard for secondary lithium cells used in industrial and stationary applications." },
        ],
        stats: [
            { value: "100%",   label: "Lot Testing" },
            { value: "NEBS L3", label: "Certified" },
            { value: "<0.01%", label: "Failure Rate" },
            { value: "25 yr",  label: "Track Record" },
        ],
    };
}

/* ─── Lifecycle Support ─────────────────────────────────────────────────────── */
export interface TCLifecycleService { icon: string; accentColor: string; title: string; description: string; }
export interface TCLifecycleStat { icon: string; value: string; label: string; accentColor: string; }
export interface TCLifecycleData {
    label: string;
    headingLine1: string;
    headingAccent: string;
    description: string;
    ctaLabel: string;
    services: TCLifecycleService[];
    stats: TCLifecycleStat[];
    quote: string;
    quoteAuthor: string;
}
export async function getTCLifecycleData(): Promise<TCLifecycleData> {
    const sec = await getAxionSection<Raw>("telecommunications", "lifecycle-support");
    return {
        label: val(sec?.label) ?? "LIFECYCLE SUPPORT",
        headingLine1: val(sec?.heading_line1) ?? "Beyond Installation —",
        headingAccent: val(sec?.heading_accent) ?? "A Partner for Life",
        description: val(sec?.description) ?? "Axion provides comprehensive lifecycle services to ensure your telecom battery infrastructure performs reliably for its entire service life.",
        ctaLabel: val(sec?.cta_label) ?? "Explore Service Plans →",
        services: [
            { icon: "🔍", accentColor: "rgba(30,136,229,1)",  title: "Incoming Inspection",  description: "Every battery tested to IEEE 450 standards before installation at your telecom site." },
            { icon: "📊", accentColor: "rgba(99,222,247,1)",  title: "Capacity Testing",      description: "Annual IEEE discharge testing to verify actual capacity against rated specs." },
            { icon: "🔧", accentColor: "rgba(74,222,138,1)",  title: "Preventive Maintenance",description: "Scheduled thermal imaging, torque checks, and electrolyte analysis programs." },
            { icon: "📡", accentColor: "rgba(255,191,69,1)",  title: "Remote Monitoring",     description: "24/7 SNMP-based telemetry integration with your existing DCIM or NMS platform." },
            { icon: "🔄", accentColor: "rgba(178,128,255,1)", title: "Battery Replacement",   description: "Coordinated string replacement with zero downtime using hot-swap procedures." },
            { icon: "♻️", accentColor: "rgba(74,222,138,1)",  title: "Responsible Disposal",  description: "Full EPA and RCRA compliance. 99.5% lead recovery rate on all returned units." },
        ],
        stats: [
            { icon: "⏱", accentColor: "rgba(30,136,229,1)", value: "< 4hr", label: "Emergency response time" },
            { icon: "🔧", accentColor: "rgba(99,222,247,1)", value: "500+",  label: "Telecom sites maintained" },
            { icon: "📅", accentColor: "rgba(74,222,138,1)", value: "10 yr", label: "Average battery service life" },
        ],
        quote: "\"Axion is the only battery vendor that truly understands our network.\"",
        quoteAuthor: "— VP Infrastructure, Major US Carrier",
    };
}

/* ─── Why Choose Axion ──────────────────────────────────────────────────────── */
export interface TCReason { number: string; title: string; description: string; }
export interface TCUptimeStat { value: string; label: string; }
export interface TCWhyData {
    label: string;
    headingLine1: string;
    headingAccent: string;
    description: string;
    reasons: TCReason[];
    uptimeValue: string;
    uptimeLabel: string;
    uptimeStats: TCUptimeStat[];
}
export async function getTCWhyData(): Promise<TCWhyData> {
    const sec = await getAxionSection<Raw>("telecommunications", "why-axion");
    return {
        label: val(sec?.label) ?? "WHY CHOOSE AXION",
        headingLine1: val(sec?.heading_line1) ?? "Telecom networks can't afford",
        headingAccent: val(sec?.heading_accent) ?? "downtime. Neither can you.",
        description: val(sec?.description) ?? "Every second of battery failure can cost thousands in SLA penalties, regulatory fines, and brand damage. Axion is the partner that carriers trust when it matters most.",
        reasons: [
            { number: "01", title: "30+ Years of Telecom Experience",    description: "Deep knowledge in ILEC, CLEC, wireless carrier, and cable MSO battery applications." },
            { number: "02", title: "Nationwide Field Service Network",    description: "Factory-trained technicians in every major metro — same-day emergency response." },
            { number: "03", title: "Carrier-Grade Quality Assurance",     description: "100% lot testing, detailed certification docs, and ISO 9001:2015 quality management." },
            { number: "04", title: "24/7 Technical Support Hotline",      description: "Direct access to application engineers — not a call center — whenever issues arise." },
            { number: "05", title: "Competitive Pricing & Flexible Terms",description: "Volume pricing for network buildouts, consignment stocking, and flexible payment." },
        ],
        uptimeValue: "99.97%",
        uptimeLabel: "Average uptime across Axion-powered telecom sites",
        uptimeStats: [
            { value: "142",  label: "Active CO Sites" },
            { value: "4.2M", label: "Hours Protected" },
            { value: "0",    label: "Critical Failures" },
        ],
    };
}

/* ─── CTA ───────────────────────────────────────────────────────────────────── */
export interface TCCtaData {
    label: string;
    headingLine1: string;
    headingAccent: string;
    description: string;
    btn1Label: string; btn1Url: string;
    btn2Label: string; btn2Url: string;
    btn3Label: string; btn3Url: string;
    card1Icon: string; card1Badge: string; card1BadgeColor: string; card1Title: string; card1Desc: string;
    card2Icon: string; card2Badge: string; card2BadgeColor: string; card2Title: string; card2Desc: string;
}
export async function getTCCtaData(): Promise<TCCtaData> {
    const sec = await getAxionSection<Raw>("telecommunications", "cta");
    return {
        label: val(sec?.label) ?? "GET STARTED",
        headingLine1: val(sec?.heading_line1) ?? "Power Your Telecom Network",
        headingAccent: val(sec?.heading_accent) ?? "with Axion Today",
        description: val(sec?.description) ?? "Our team of telecom battery specialists is ready to help you design, supply, and support the right solution for your network.",
        btn1Label: val(sec?.btn1_label) ?? "Request a Quote",
        btn1Url: val(sec?.btn1_url) ?? "/contact",
        btn2Label: val(sec?.btn2_label) ?? "Talk to an Engineer",
        btn2Url: val(sec?.btn2_url) ?? "/contact",
        btn3Label: val(sec?.btn3_label) ?? "Download Spec Sheet →",
        btn3Url: val(sec?.btn3_url) ?? "/contact",
        card1Icon: "📞", card1Badge: "24/7", card1BadgeColor: "rgba(99,222,247,1)",
        card1Title: "Emergency Support",
        card1Desc: "24/7 hotline for critical failures. Average response: 4 hours.",
        card2Icon: "📋", card2Badge: "FREE", card2BadgeColor: "rgba(74,222,138,1)",
        card2Title: "Free Site Assessment",
        card2Desc: "Our engineers evaluate your facility at no cost to you.",
    };
}
