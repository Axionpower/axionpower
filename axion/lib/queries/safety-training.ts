import { getAxionSection } from "@/lib/queries/axion-cms";

type Raw = Record<string, unknown>;
const val = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);
const arr = (v: unknown): Raw[] => (Array.isArray(v) && v.length > 0 ? (v as Raw[]) : []);

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
export interface STHeroStat { value: string; label: string; }
export interface STHeroData {
    breadcrumb: string;
    heading: string;
    subtitle: string;
    trustBadge: string;
    btn1Label: string; btn1Url: string;
    btn2Label: string; btn2Url: string;
    stats: STHeroStat[];
    bgImage?: string;
    bgVideoUrl?: string;
    accentColor: string;
}
export async function getSTHeroData(): Promise<STHeroData> {
    const sec = await getAxionSection<Raw>("safety-training", "hero");
    const cmsStats = arr(sec?.stats);
    return {
        breadcrumb: val(sec?.breadcrumb) ?? "SERVICES / SAFETY TRAINING",
        heading: val(sec?.heading) ?? "Safety Training &\nDocumentation",
        subtitle: val(sec?.subtitle) ?? "Empowering teams with expert knowledge, compliance records, and readiness for mission-critical battery environments.",
        trustBadge: val(sec?.trust_badge) ?? "✓  Trusted by 500+ engineering teams",
        btn1Label: val(sec?.btn1_label) ?? "Schedule Staff Training →",
        btn1Url: val(sec?.btn1_url) ?? "/contact",
        btn2Label: val(sec?.btn2_label) ?? "Request Documentation",
        btn2Url: val(sec?.btn2_url) ?? "/contact",
        stats: cmsStats.length > 0
            ? cmsStats.map((s) => ({ value: String(s.value || ""), label: String(s.label || "") }))
            : [
                { value: "20+",  label: "Years Experience" },
                { value: "500+", label: "Projects Delivered" },
                { value: "100%", label: "Compliance Focus" },
                { value: "24/7", label: "Emergency Support" },
            ],
        bgImage:     val(sec?.bg_image),
        bgVideoUrl:  val(sec?.bg_image_video_url),
        accentColor: val(sec?.accent_color) ?? "rgba(99,222,247,1)",
    };
}

/* ─── Intro ─────────────────────────────────────────────────────────────────── */
export interface STIntroData {
    label: string;
    heading: string;
    description: string;
    stats: STHeroStat[];
    btn1Label: string; btn1Url: string;
    btn2Label: string; btn2Url: string;
}
export async function getSTIntroData(): Promise<STIntroData> {
    const sec = await getAxionSection<Raw>("safety-training", "intro");
    const cmsStats = arr(sec?.stats);
    return {
        label: val(sec?.label) ?? "OUR SERVICES",
        heading: val(sec?.heading) ?? "Comprehensive\nSafety Training\n& Documentation",
        description: val(sec?.description) ?? "Axion Critical Power Solutions equips your team with the knowledge and records needed for safe, compliant operation of mission-critical battery systems.",
        stats: cmsStats.length > 0
            ? cmsStats.map((s) => ({ value: String(s.value || ""), label: String(s.label || "") }))
            : [
                { value: "500+", label: "Staff Trained" },
                { value: "20+",  label: "Years" },
                { value: "100%", label: "Compliance" },
            ],
        btn1Label: val(sec?.btn1_label) ?? "Schedule Training →",
        btn1Url: val(sec?.btn1_url) ?? "/contact",
        btn2Label: val(sec?.btn2_label) ?? "Request Docs",
        btn2Url: val(sec?.btn2_url) ?? "/contact",
    };
}

/* ─── Training ──────────────────────────────────────────────────────────────── */
export interface STTrainingCard { icon: string; title: string; description: string; }
export interface STTrainingStep { number: string; title: string; }
export interface STTrainingStat { value: string; label: string; }
export interface STTrainingData {
    label: string;
    heading: string;
    description: string;
    trustBadge: string;
    steps: STTrainingStep[];
    cards: STTrainingCard[];
    stats: STTrainingStat[];
}
export async function getSTTrainingData(): Promise<STTrainingData> {
    const sec = await getAxionSection<Raw>("safety-training", "training");
    const cmsSteps = arr(sec?.steps);
    const cmsCards = arr(sec?.cards);
    const cmsStats = arr(sec?.stats);
    return {
        label: val(sec?.label) ?? "ON-SITE STAFF TRAINING",
        heading: val(sec?.heading) ?? "Expert Training\nfor Critical Teams",
        description: val(sec?.description) ?? "Axion delivers hands-on, expert-led training tailored to your specific battery systems and site requirements.",
        trustBadge: val(sec?.trust_badge) ?? "✓ Trusted by 500+ trained staff members",
        steps: cmsSteps.length > 0
            ? cmsSteps.map((s) => ({ number: String(s.number || ""), title: String(s.title || "") }))
            : [
                { number: "01", title: "Battery Handling & Inspection" },
                { number: "02", title: "Emergency Response Procedures" },
                { number: "03", title: "Safety Protocol Training" },
                { number: "04", title: "Hands-On Practical Exercises" },
            ],
        cards: cmsCards.length > 0
            ? cmsCards.map((c) => ({ icon: String(c.icon || ""), title: String(c.title || ""), description: String(c.description || "") }))
            : [
                { icon: "🎯", title: "Handling & Inspection",    description: "Safe battery handling, visual inspection, and maintenance best practices for VRLA and flooded systems." },
                { icon: "🚨", title: "Emergency Response",        description: "Protocols for alarms, system failures, and hazardous conditions — ensuring staff can respond fast." },
                { icon: "🛡️", title: "Safety Protocols",          description: "Comprehensive safety procedures for VRLA and wet cell battery systems, aligned with industry standards." },
                { icon: "🔧", title: "Hands-On Exercises",        description: "Real-world exercises to ensure practical understanding and build team confidence in system operation." },
            ],
        stats: cmsStats.length > 0
            ? cmsStats.map((s) => ({ value: String(s.value || ""), label: String(s.label || "") }))
            : [
                { value: "500+", label: "Staff Trained" },
                { value: "20+",  label: "Years Experience" },
                { value: "100%", label: "Compliance Rate" },
                { value: "24/7", label: "Ongoing Support" },
            ],
    };
}

/* ─── Documentation ─────────────────────────────────────────────────────────── */
export interface STDocCard { icon: string; number: string; title: string; description: string; features?: string[]; linkLabel: string; }
export interface STDocData {
    label: string;
    heading: string;
    description: string;
    cards: STDocCard[];
}
export async function getSTDocData(): Promise<STDocData> {
    const sec = await getAxionSection<Raw>("safety-training", "documentation");
    const cmsCards = arr(sec?.cards);
    return {
        label: val(sec?.label) ?? "DOCUMENTATION",
        heading: val(sec?.heading) ?? "Detailed Records for Safe\nOperation & Compliance",
        description: val(sec?.description) ?? "Axion provides detailed records to support system reliability, audits, and lifecycle management — giving your team access to critical information for effective maintenance.",
        cards: cmsCards.length > 0
            ? cmsCards.map((c) => ({
                icon: String(c.icon || ""),
                number: String(c.number || ""),
                title: String(c.title || ""),
                description: String(c.description || ""),
                features: typeof c.features === "string" && (c.features as string).trim()
                    ? (c.features as string).split("\n").map((f: string) => f.trim()).filter(Boolean)
                    : undefined,
                linkLabel: String(c.link_label || ""),
            }))
            : [
                {
                    icon: "📄", number: "01",
                    title: "Complete System Specifications",
                    description: "Detailed technical specifications for every battery system component and configuration.",
                    features: ["Battery system component details", "Configuration & wiring diagrams", "Capacity & performance ratings", "Warranty & service records"],
                    linkLabel: "View All Specifications →",
                },
                {
                    icon: "📊", number: "02",
                    title: "Maintenance History & Logs",
                    description: "Inspection records and maintenance history for tracking system condition over time.",
                    linkLabel: "View Logs →",
                },
                {
                    icon: "🔒", number: "03",
                    title: "Safety & Operational Protocols",
                    description: "Documented procedures to ensure safe, standard-aligned operation at all times.",
                    linkLabel: "View Protocols →",
                },
                {
                    icon: "✅", number: "04",
                    title: "Regulatory Compliance Guidance",
                    description: "Documentation supporting audits, reporting, and regulatory compliance requirements.",
                    linkLabel: "View Guidelines →",
                },
            ],
    };
}

/* ─── Benefits ──────────────────────────────────────────────────────────────── */
export interface STBenefit { number: string; accentColor: string; title: string; description: string; }
export interface STBenefitStat { value: string; label: string; }
export interface STBenefitsData {
    label: string;
    heading: string;
    description: string;
    benefits: STBenefit[];
    stats: STBenefitStat[];
    ctaTitle: string;
    ctaDesc: string;
}
export async function getSTBenefitsData(): Promise<STBenefitsData> {
    const sec = await getAxionSection<Raw>("safety-training", "benefits");
    const cmsBenefits = arr(sec?.benefits);
    const cmsStats = arr(sec?.stats);
    return {
        label: val(sec?.label) ?? "WHY CHOOSE AXION",
        heading: val(sec?.heading) ?? "Benefits of\nSafety Training &\nDocumentation",
        description: val(sec?.description) ?? "Trusted by engineers & operators across mission-critical industries to deliver comprehensive safety solutions.",
        benefits: cmsBenefits.length > 0
            ? cmsBenefits.map((b) => ({
                number: String(b.number || ""),
                accentColor: String(b.accent_color || "rgba(99,222,247,1)"),
                title: String(b.title || ""),
                description: String(b.description || ""),
            }))
            : [
                { number: "01", accentColor: "rgba(99,222,247,1)",   title: "Enhanced Personnel Safety",       description: "Reduced risk of incidents through expert training and documented procedures." },
                { number: "02", accentColor: "rgba(143,194,255,1)",  title: "Improved Operational Readiness",  description: "Better emergency response and system uptime across all critical scenarios." },
                { number: "03", accentColor: "rgba(166,227,161,1)",  title: "Clear Compliance Records",        description: "Organized records for maintenance, audits, and regulatory reporting." },
                { number: "04", accentColor: "rgba(255,209,102,1)",  title: "Long-Term System Reliability",    description: "Support for mission-critical battery systems throughout their lifecycle." },
                { number: "05", accentColor: "rgba(204,166,255,1)",  title: "Peace of Mind",                   description: "Confidence knowing your team and systems are fully prepared." },
            ],
        stats: cmsStats.length > 0
            ? cmsStats.map((s) => ({ value: String(s.value || ""), label: String(s.label || "") }))
            : [
                { value: "99.9%", label: "Safety Compliance" },
                { value: "500+",  label: "Teams Trained" },
            ],
        ctaTitle: val(sec?.cta_title) ?? "Ready to Get Started?",
        ctaDesc: val(sec?.cta_desc) ?? "Contact our team to schedule\na training session today.",
    };
}

/* ─── Industries ────────────────────────────────────────────────────────────── */
export interface STIndustry { icon: string; title: string; description: string; }
export interface STIndustriesData {
    label: string;
    heading: string;
    description: string;
    industries: STIndustry[];
}
export async function getSTIndustriesData(): Promise<STIndustriesData> {
    const sec = await getAxionSection<Raw>("safety-training", "industries");
    const cmsIndustries = arr(sec?.industries);
    return {
        label: val(sec?.label) ?? "INDUSTRIES SUPPORTED",
        heading: val(sec?.heading) ?? "Training & Documentation\nfor Every Critical Sector",
        description: val(sec?.description) ?? "Our services are tailored for organizations where battery system reliability and personnel safety are mission-critical.",
        industries: cmsIndustries.length > 0
            ? cmsIndustries.map((i) => ({ icon: String(i.icon || ""), title: String(i.title || ""), description: String(i.description || "") }))
            : [
                { icon: "🖥️", title: "Data Centers & Colocation",     description: "Protect IT operations and staff with compliant procedures." },
                { icon: "⚡",  title: "Utilities & Substations",        description: "Safe handling of DC power systems in high-voltage environments." },
                { icon: "📡", title: "Telecommunications",             description: "Reduce downtime and emergency risks across network infrastructure." },
                { icon: "🏥", title: "Healthcare Facilities",           description: "Protect life-safety power systems and clinical personnel." },
                { icon: "🏭", title: "Industrial & Infrastructure",     description: "Operational safety and compliance for heavy industry systems." },
            ],
    };
}

/* ─── Lifecycle ─────────────────────────────────────────────────────────────── */
export interface STLifecycleStep { number: string; title: string; description: string; active?: boolean; }
export interface STLifecycleFeature { accentColor: string; icon: string; pillColor: string; number: string; title: string; description: string; linkLabel: string; }
export interface STLifecycleData {
    label: string;
    heading: string;
    accentNote: string;
    description: string;
    features: STLifecycleFeature[];
    steps: STLifecycleStep[];
    bottomNote: string;
}
export async function getSTLifecycleData(): Promise<STLifecycleData> {
    const sec = await getAxionSection<Raw>("safety-training", "lifecycle");
    const cmsFeatures = arr(sec?.features);
    const cmsSteps = arr(sec?.steps);
    return {
        label: val(sec?.label) ?? "INTEGRATED APPROACH",
        heading: val(sec?.heading) ?? "Integrated\nLifecycle Support",
        accentNote: "",
        description: val(sec?.description) ?? "Safety training and documentation are core to Axion's lifecycle approach. From specification through replacement, we ensure your team and records are always ready.",
        features: cmsFeatures.length > 0
            ? cmsFeatures.map((f) => ({
                accentColor: String(f.accent_color || "rgba(99,222,247,1)"),
                pillColor: String(f.pill_color || "rgba(99,222,247,1)"),
                icon: String(f.icon || ""),
                number: String(f.number || ""),
                title: String(f.title || ""),
                description: String(f.description || ""),
                linkLabel: String(f.link_label || "Explore →"),
            }))
            : [
                { accentColor: "rgba(99,222,247,1)",  pillColor: "rgba(99,222,247,1)",  icon: "📋", number: "03", title: "Documentation", description: "Full system specs, maintenance logs, safety protocols, and compliance records — organised and accessible.", linkLabel: "Explore →" },
                { accentColor: "rgba(143,194,255,1)", pillColor: "rgba(143,194,255,1)", icon: "🎓", number: "04", title: "Training",       description: "Expert-led, hands-on staff training programs tailored for battery handling, safety protocols, and emergency response.", linkLabel: "Explore →" },
            ],
        steps: cmsSteps.length > 0
            ? cmsSteps.map((s) => ({
                number: String(s.number || ""),
                title: String(s.title || ""),
                description: String(s.description || ""),
                active: s.active === "yes" || s.active === true,
            }))
            : [
                { number: "01", title: "Specification",  description: "System specs & requirements" },
                { number: "02", title: "Installation",   description: "Professional setup & integration" },
                { number: "03", title: "Documentation",  description: "Full records & protocols",      active: true },
                { number: "04", title: "Training",        description: "Expert-led staff training",    active: true },
                { number: "05", title: "Monitoring",      description: "Live performance tracking" },
                { number: "06", title: "Maintenance",     description: "Scheduled service & upkeep" },
                { number: "07", title: "Replacement",     description: "End-of-life system renewal" },
            ],
        bottomNote: val(sec?.bottom_note) ?? "★  Training & Documentation highlighted as core lifecycle stages essential to every mission-critical deployment.",
    };
}

/* ─── CTA ───────────────────────────────────────────────────────────────────── */
export interface STCtaData {
    label: string;
    heading: string;
    description: string;
    btn1Label: string; btn1Url: string;
    btn2Label: string; btn2Url: string;
    phone: string;
}
export async function getSTCtaData(): Promise<STCtaData> {
    const sec = await getAxionSection<Raw>("safety-training", "cta");
    return {
        label: val(sec?.label) ?? "GET STARTED",
        heading: val(sec?.heading) ?? "Ready to Protect\nYour Team &\nSystems?",
        description: val(sec?.description) ?? "Contact our technical team to schedule on-site training or request comprehensive system documentation.",
        btn1Label: val(sec?.btn1_label) ?? "Schedule Training →",
        btn1Url: val(sec?.btn1_url) ?? "/contact",
        btn2Label: val(sec?.btn2_label) ?? "Request Docs",
        btn2Url: val(sec?.btn2_url) ?? "/contact",
        phone: val(sec?.phone) ?? "📞  24/7 Emergency: 245 445 34352",
    };
}
