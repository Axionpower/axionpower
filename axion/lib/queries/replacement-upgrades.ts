import { getAxionSection } from "@/lib/queries/axion-cms";

type Raw = Record<string, unknown>;
const val  = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);
const arr  = (v: unknown): Raw[] => (Array.isArray(v) && v.length > 0 ? (v as Raw[]) : []);
const num  = (v: unknown, fallback: number) => (typeof v === "string" && !isNaN(Number(v)) ? Number(v) : fallback);

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
export interface RUHeroStat    { value: string; label: string; }
export interface RUHeroDashBar { label: string; status: string; pct: number; color: string; }
export interface RUHeroUpcoming { sys: string; date: string; priority: string; }
export interface RUHeroData {
    breadcrumb: string;
    heading: string;
    subtitle: string;
    trustBadge: string;
    btn1Label: string; btn1Url: string;
    btn2Label: string; btn2Url: string;
    stats: RUHeroStat[];
    cardTitle: string;
    cardSubtitle: string;
    upcomingLabel: string;
    dashboardBars: RUHeroDashBar[];
    upcoming: RUHeroUpcoming[];
}
export async function getRUHeroData(): Promise<RUHeroData> {
    const sec        = await getAxionSection<Raw>("replacement-upgrades", "hero");
    const cmsBars    = arr(sec?.dashboard_bars);
    const cmsStats   = arr(sec?.stats);
    const cmsUpcoming = arr(sec?.upcoming);
    return {
        breadcrumb:    val(sec?.breadcrumb)    ?? "SERVICES / REPLACEMENT & UPGRADES",
        heading:       val(sec?.heading)       ?? "Battery Replacement &\nTechnology Upgrades",
        subtitle:      val(sec?.subtitle)      ?? "End-to-end battery replacement planning, technology upgrades, and certified disposal — keeping your critical systems current and compliant.",
        trustBadge:    val(sec?.trust_badge)   ?? "♻️  Certified disposal & compliant upgrades",
        btn1Label:     val(sec?.btn1_label)    ?? "Plan Your Replacement →",
        btn1Url:       val(sec?.btn1_url)      ?? "/contact",
        btn2Label:     val(sec?.btn2_label)    ?? "Explore Upgrades",
        btn2Url:       val(sec?.btn2_url)      ?? "/contact",
        cardTitle:     val(sec?.card_title)    ?? "Battery Replacement Planner",
        cardSubtitle:  val(sec?.card_subtitle) ?? "Fleet Health Overview",
        upcomingLabel: val(sec?.upcoming_label)?? "Upcoming Replacements",
        stats: cmsStats.length > 0
            ? cmsStats.map(s => ({ value: String(s.value ?? ""), label: String(s.label ?? "") }))
            : [
                { value: "500+", label: "Systems Replaced" },
                { value: "20+",  label: "Years Experience" },
                { value: "100%", label: "Certified Disposal" },
                { value: "24/7", label: "Emergency Support" },
            ],
        dashboardBars: cmsBars.length > 0
            ? cmsBars.map(b => ({
                label:  String(b.label  ?? ""),
                status: String(b.status ?? ""),
                pct:    num(b.pct, 50),
                color:  String(b.color  ?? "rgba(99,222,247,1)"),
            }))
            : [
                { label: "UPS System A — Data Hall 1", pct: 25, color: "rgba(255,80,80,1)",    status: "Replace Now" },
                { label: "UPS System B — Data Hall 2", pct: 55, color: "rgba(255,191,69,1)",   status: "Plan Soon"  },
                { label: "UPS System C — Network Hub", pct: 80, color: "rgba(99,222,247,1)",   status: "Healthy"    },
                { label: "UPS System D — Server Room", pct: 95, color: "rgba(166,227,161,1)",  status: "Optimal"    },
            ],
        upcoming: cmsUpcoming.length > 0
            ? cmsUpcoming.map(u => ({
                sys:      String(u.sys      ?? ""),
                date:     String(u.date     ?? ""),
                priority: String(u.priority ?? ""),
            }))
            : [
                { sys: "UPS System A", date: "Q1 2026", priority: "Critical" },
                { sys: "UPS System B", date: "Q3 2026", priority: "Planned"  },
            ],
    };
}

/* ─── Intro ─────────────────────────────────────────────────────────────────── */
export interface RUServicePanel { accentColor: string; icon: string; title: string; description: string; }
export interface RUIntroData {
    label: string;
    heading: string;
    description: string;
    stats: { value: string; label: string; }[];
    btn1Label: string; btn1Url: string;
    btn2Label: string; btn2Url: string;
    panels: RUServicePanel[];
}
export async function getRUIntroData(): Promise<RUIntroData> {
    const sec        = await getAxionSection<Raw>("replacement-upgrades", "intro");
    const cmsPanels  = arr(sec?.services);
    const cmsStats   = arr(sec?.stats);
    return {
        label:       val(sec?.label)       ?? "OUR SERVICES",
        heading:     val(sec?.heading)     ?? "Complete Battery\nReplacement &\nUpgrade Services",
        description: val(sec?.description) ?? "Axion Critical Power Solutions delivers expert battery replacement planning, technology upgrade pathways, and certified disposal — ensuring your mission-critical systems always operate at peak performance.",
        btn1Label:   val(sec?.btn1_label)  ?? "Plan Replacement →",
        btn1Url:     val(sec?.btn1_url)    ?? "/contact",
        btn2Label:   val(sec?.btn2_label)  ?? "Explore Upgrades",
        btn2Url:     val(sec?.btn2_url)    ?? "/contact",
        stats: cmsStats.length > 0
            ? cmsStats.map(s => ({ value: String(s.value ?? ""), label: String(s.label ?? "") }))
            : [
                { value: "500+", label: "Systems Replaced" },
                { value: "20+",  label: "Years" },
                { value: "100%", label: "Certified" },
            ],
        panels: cmsPanels.length > 0
            ? cmsPanels.map(p => ({
                accentColor: val(p.accent_color) ?? "rgba(99,222,247,1)",
                icon:        String(p.icon        ?? "🔋"),
                title:       String(p.title       ?? ""),
                description: String(p.description ?? ""),
            }))
            : [
                { accentColor: "rgba(255,191,69,1)",  icon: "🔋", title: "Battery Replacement",  description: "Planned and emergency battery replacement with zero downtime, handled by certified engineers." },
                { accentColor: "rgba(99,222,247,1)",  icon: "⚡", title: "Technology Upgrades",  description: "Upgrade from VRLA or wet cell to modern lithium-ion or AGM systems for enhanced performance." },
                { accentColor: "rgba(166,227,161,1)", icon: "♻️", title: "Disposal & Recycling", description: "Fully certified, environmentally compliant battery disposal and recycling for all system types." },
            ],
    };
}

/* ─── Planning ──────────────────────────────────────────────────────────────── */
export interface RUPlanningCard    { icon: string; title: string; description: string; }
export interface RUChecklistItem   { text: string; }
export interface RUPlanningData {
    label: string;
    heading: string;
    description: string;
    trustBadge: string;
    cards: RUPlanningCard[];
    checklistTitle: string;
    checklistItems: RUChecklistItem[];
}
export async function getRUPlanningData(): Promise<RUPlanningData> {
    const sec         = await getAxionSection<Raw>("replacement-upgrades", "planning");
    const cmsCards    = arr(sec?.cards);
    const cmsChecklist = arr(sec?.checklist);
    return {
        label:          val(sec?.label)           ?? "REPLACEMENT PLANNING",
        heading:        val(sec?.heading)         ?? "Expert Battery\nReplacement Planning",
        description:    val(sec?.description)     ?? "Axion's systematic approach ensures every battery replacement is planned, executed, and commissioned with minimal disruption to your operations.",
        trustBadge:     val(sec?.trust_badge)     ?? "✓ Zero-downtime replacement guaranteed",
        checklistTitle: val(sec?.checklist_title) ?? "Replacement Checklist",
        cards: cmsCards.length > 0
            ? cmsCards.map(c => ({
                icon:        String(c.icon        ?? ""),
                title:       String(c.title       ?? ""),
                description: String(c.description ?? ""),
            }))
            : [
                { icon: "🔍", title: "Health Assessment",         description: "Comprehensive battery health evaluation to determine optimal replacement timing and system requirements." },
                { icon: "📋", title: "Replacement Planning",      description: "Detailed project planning including procurement, scheduling, and resource coordination for seamless execution." },
                { icon: "🔧", title: "Professional Installation",  description: "Expert installation by certified engineers, ensuring safety and compliance with all industry standards." },
                { icon: "✅", title: "Testing & Commissioning",   description: "Full system testing and commissioning to verify performance and reliability post-replacement." },
            ],
        checklistItems: cmsChecklist.length > 0
            ? cmsChecklist.map(c => ({ text: String(c.text ?? "") }))
            : [
                { text: "Battery health assessment & lifecycle analysis" },
                { text: "Replacement scheduling & procurement" },
                { text: "Safe removal & certified disposal" },
                { text: "Professional installation & integration" },
                { text: "Load testing & commissioning" },
                { text: "Documentation & compliance sign-off" },
            ],
    };
}

/* ─── Technology Upgrades ───────────────────────────────────────────────────── */
export interface RUTechCard {
    icon: string; title: string; subtitle: string;
    percentage: number; barColor: string;
    recommended?: boolean; features: string[];
}
export interface RUUpgradesData {
    label: string;
    heading: string;
    description: string;
    btn1Label: string; btn1Url: string;
    btn2Label: string; btn2Url: string;
    cards: RUTechCard[];
}
export async function getRUUpgradesData(): Promise<RUUpgradesData> {
    const sec      = await getAxionSection<Raw>("replacement-upgrades", "upgrades");
    const cmsTechs = arr(sec?.techs);
    return {
        label:       val(sec?.label)       ?? "TECHNOLOGY UPGRADES",
        heading:     val(sec?.heading)     ?? "Upgrade to the\nLatest Battery Technology",
        description: val(sec?.description) ?? "Axion provides clear upgrade pathways from legacy battery systems to modern, high-performance technologies — improving reliability, runtime, and total cost of ownership.",
        btn1Label:   val(sec?.btn1_label)  ?? "Discuss Upgrade Options →",
        btn1Url:     val(sec?.btn1_url)    ?? "/contact",
        btn2Label:   val(sec?.btn2_label)  ?? "Compare Technologies",
        btn2Url:     val(sec?.btn2_url)    ?? "/contact",
        cards: cmsTechs.length > 0
            ? cmsTechs.map(c => ({
                icon:        String(c.icon     ?? "🔋"),
                title:       String(c.name     ?? ""),
                subtitle:    String(c.subtitle ?? ""),
                percentage:  num(c.progress, 50),
                barColor:    val(c.color) ?? "rgba(99,222,247,1)",
                recommended: c.recommended === "yes" || c.recommended === true,
                features:    typeof c.features === "string" && c.features.trim()
                    ? c.features.split("\n").map((f: string) => f.trim()).filter(Boolean)
                    : [],
            }))
            : [
                { icon: "🔋", title: "VRLA / AGM",  subtitle: "Valve-Regulated Lead Acid",    percentage: 55, barColor: "rgba(150,150,150,1)", recommended: false, features: ["Sealed, maintenance-free", "Established technology", "Cost-effective entry point", "5–10 year lifecycle"] },
                { icon: "💧", title: "Wet Cell",    subtitle: "Flooded Lead Acid",             percentage: 70, barColor: "rgba(30,136,229,1)",  recommended: false, features: ["High capacity options", "Proven reliability", "Requires maintenance", "10–20 year lifecycle"] },
                { icon: "⚡", title: "Lithium-Ion", subtitle: "Advanced Li-Ion Technology",   percentage: 98, barColor: "rgba(99,222,247,1)",  recommended: true,  features: ["Superior energy density", "Minimal maintenance", "Longest lifecycle 15–20yr", "Smart BMS monitoring"] },
            ],
    };
}

/* ─── Disposal & Recycling ──────────────────────────────────────────────────── */
export interface RUDisposalCard {
    icon: string; accentColor: string; number: string;
    title: string; description: string;
    features?: string[]; linkLabel: string;
}
export interface RUDisposalData {
    label: string;
    heading: string;
    description: string;
    cards: RUDisposalCard[];
}
export async function getRUDisposalData(): Promise<RUDisposalData> {
    const sec      = await getAxionSection<Raw>("replacement-upgrades", "disposal");
    const cmsCards = arr(sec?.cards);
    return {
        label:       val(sec?.label)       ?? "DISPOSAL & RECYCLING",
        heading:     val(sec?.heading)     ?? "Certified Battery\nDisposal & Recycling",
        description: val(sec?.description) ?? "Axion provides fully certified, environmentally responsible battery disposal and recycling services — ensuring compliance with all regulatory requirements.",
        cards: cmsCards.length > 0
            ? cmsCards.map((c, i) => ({
                icon:        String(c.icon         ?? "♻️"),
                accentColor: val(c.accent_color)   ?? "rgba(99,222,247,1)",
                number:      String(c.number       ?? String(i + 1).padStart(2, "0")),
                title:       String(c.title        ?? ""),
                description: String(c.description  ?? ""),
                linkLabel:   String(c.link_label   ?? "Learn More →"),
                features:    typeof c.features === "string" && c.features.trim()
                    ? c.features.split("\n").map((f: string) => f.trim()).filter(Boolean)
                    : undefined,
            }))
            : [
                { icon: "🏗️", number: "01", accentColor: "rgba(255,191,69,1)",  title: "Safe Removal & Transport",    description: "Professional battery removal and safe transport to certified recycling facilities, handled by trained engineers.", features: ["Certified removal procedures", "Compliant packaging & transport", "Full chain of custody documentation", "Emergency removal available"], linkLabel: "Learn More →" },
                { icon: "♻️", number: "02", accentColor: "rgba(99,222,247,1)",  title: "Certified Recycling",         description: "Environmentally responsible recycling through certified facilities, recovering valuable materials and minimising waste.", linkLabel: "View Certifications →" },
                { icon: "📄", number: "03", accentColor: "rgba(166,227,161,1)", title: "Compliance Documentation",    description: "Full disposal records and certificates for audits, regulatory reporting, and environmental compliance.", linkLabel: "Request Docs →" },
            ],
    };
}

/* ─── Benefits ──────────────────────────────────────────────────────────────── */
export interface RUBenefit { number: string; accentColor: string; title: string; description: string; }
export interface RUBenefitsData {
    label: string;
    heading: string;
    description: string;
    benefits: RUBenefit[];
    stats: { value: string; label: string; }[];
    ctaTitle: string;
    ctaDesc: string;
    ctaBtnLabel: string;
    ctaBtnUrl: string;
}
export async function getRUBenefitsData(): Promise<RUBenefitsData> {
    const sec         = await getAxionSection<Raw>("replacement-upgrades", "benefits");
    const cmsBenefits = arr(sec?.benefits);
    const cmsStats    = arr(sec?.stats);
    return {
        label:       val(sec?.label)        ?? "WHY CHOOSE AXION",
        heading:     val(sec?.heading)      ?? "Benefits of\nPlanned Replacement\n& Upgrades",
        description: val(sec?.description)  ?? "Trusted by engineers & operators across mission-critical industries to deliver seamless replacement and upgrade solutions.",
        ctaTitle:    val(sec?.cta_title)    ?? "Ready to Plan Your Replacement?",
        ctaDesc:     val(sec?.cta_desc)     ?? "Contact our team to start\nyour replacement assessment.",
        ctaBtnLabel: val(sec?.cta_btn_label)?? "Get Started →",
        ctaBtnUrl:   val(sec?.cta_btn_url)  ?? "/contact",
        stats: cmsStats.length > 0
            ? cmsStats.map(s => ({ value: String(s.value ?? ""), label: String(s.label ?? "") }))
            : [
                { value: "500+", label: "Systems Replaced" },
                { value: "100%", label: "Certified Disposal" },
            ],
        benefits: cmsBenefits.length > 0
            ? cmsBenefits.map((b, i) => ({
                number:      String(b.number       ?? String(i + 1).padStart(2, "0")),
                accentColor: val(b.accent_color)   ?? "rgba(99,222,247,1)",
                title:       String(b.title        ?? ""),
                description: String(b.description  ?? ""),
            }))
            : [
                { number: "01", accentColor: "rgba(255,191,69,1)",  title: "Maximised System Uptime",    description: "Zero-downtime replacement strategies to keep your critical systems always available." },
                { number: "02", accentColor: "rgba(99,222,247,1)",  title: "Improved Performance",       description: "Upgrade to modern battery technologies for superior runtime and reliability." },
                { number: "03", accentColor: "rgba(166,227,161,1)", title: "Regulatory Compliance",      description: "Certified disposal and documented processes for full audit-readiness." },
                { number: "04", accentColor: "rgba(204,166,255,1)", title: "Reduced Total Cost",         description: "Strategic planning reduces emergency replacement costs and extends asset life." },
                { number: "05", accentColor: "rgba(30,136,229,1)",  title: "Expert Project Management", description: "End-to-end project management from assessment through commissioning and sign-off." },
            ],
    };
}

/* ─── Industries ────────────────────────────────────────────────────────────── */
export interface RUIndustry { icon: string; iconColor: string; title: string; description: string; }
export interface RUIndustriesData {
    label: string;
    heading: string;
    description: string;
    industries: RUIndustry[];
}
export async function getRUIndustriesData(): Promise<RUIndustriesData> {
    const sec          = await getAxionSection<Raw>("replacement-upgrades", "industries");
    const cmsIndustries = arr(sec?.industries);
    return {
        label:       val(sec?.label)       ?? "INDUSTRIES SUPPORTED",
        heading:     val(sec?.heading)     ?? "Replacement & Upgrade\nServices for Every Sector",
        description: val(sec?.description) ?? "Axion delivers battery replacement and upgrade services across all mission-critical industries, ensuring compliance and continuity.",
        industries: cmsIndustries.length > 0
            ? cmsIndustries.map(ind => ({
                icon:      String(ind.icon        ?? "🏭"),
                iconColor: val(ind.icon_color)    ?? "rgba(99,222,247,1)",
                title:     String(ind.title       ?? ""),
                description: String(ind.description ?? ""),
            }))
            : [
                { icon: "🖥️", iconColor: "rgba(99,222,247,1)",  title: "Data Centers & Colocation",   description: "Zero-downtime UPS battery replacement for continuous IT operations." },
                { icon: "⚡",  iconColor: "rgba(255,191,69,1)",  title: "Utilities & Substations",     description: "High-capacity replacement for DC power systems in utility environments." },
                { icon: "📡", iconColor: "rgba(30,136,229,1)",   title: "Telecommunications",          description: "Network infrastructure battery upgrades for maximum uptime." },
                { icon: "🏥", iconColor: "rgba(166,227,161,1)",  title: "Healthcare Facilities",       description: "Life-safety UPS replacements with full compliance documentation." },
                { icon: "🏭", iconColor: "rgba(204,166,255,1)",  title: "Industrial & Infrastructure", description: "Heavy-duty battery systems for industrial power reliability." },
                { icon: "🚀", iconColor: "rgba(255,120,120,1)",  title: "Defence & Government",        description: "Secure, mission-critical replacements for government and defence sites." },
            ],
    };
}

/* ─── Lifecycle ─────────────────────────────────────────────────────────────── */
export interface RULifecycleStep    { number: string; title: string; description: string; active?: boolean; }
export interface RULifecycleFeature { accentColor: string; icon: string; pillColor: string; number: string; title: string; description: string; linkLabel: string; }
export interface RULifecycleData {
    label: string;
    heading: string;
    description: string;
    features: RULifecycleFeature[];
    steps: RULifecycleStep[];
    bottomNote: string;
}
export async function getRULifecycleData(): Promise<RULifecycleData> {
    const sec         = await getAxionSection<Raw>("replacement-upgrades", "lifecycle");
    const cmsFeatures = arr(sec?.features);
    const cmsSteps    = arr(sec?.steps);
    return {
        label:       val(sec?.label)       ?? "INTEGRATED APPROACH",
        heading:     val(sec?.heading)     ?? "Integrated\nLifecycle Support",
        description: val(sec?.description) ?? "Replacement, upgrades, and disposal are the final stages of Axion's lifecycle approach — ensuring every system is responsibly retired and replaced with optimal technology.",
        bottomNote:  val(sec?.bottom_note) ?? "★  Replacement, Upgrade & Disposal highlighted as core lifecycle stages for mission-critical systems.",
        features: cmsFeatures.length > 0
            ? cmsFeatures.map((f, i) => ({
                accentColor: val(f.accent_color) ?? "rgba(255,191,69,1)",
                pillColor:   val(f.pill_color)   ?? "rgba(255,191,69,1)",
                icon:        String(f.icon        ?? ""),
                number:      String(f.number      ?? String(i + 1).padStart(2, "0")),
                title:       String(f.title       ?? ""),
                description: String(f.description ?? ""),
                linkLabel:   String(f.link_label  ?? "Explore →"),
            }))
            : [
                { accentColor: "rgba(255,191,69,1)", pillColor: "rgba(255,191,69,1)", icon: "🔋", number: "05", title: "Replacement", description: "Planned and emergency battery replacement, executed by certified engineers with zero downtime.", linkLabel: "Explore →" },
                { accentColor: "rgba(255,191,69,1)", pillColor: "rgba(255,191,69,1)", icon: "⚡", number: "06", title: "Upgrade",     description: "Clear technology upgrade pathways from legacy to modern high-performance battery systems.", linkLabel: "Explore →" },
                { accentColor: "rgba(255,191,69,1)", pillColor: "rgba(255,191,69,1)", icon: "♻️", number: "07", title: "Disposal",    description: "Certified, environmentally compliant disposal and recycling for all battery types.", linkLabel: "Explore →" },
            ],
        steps: cmsSteps.length > 0
            ? cmsSteps.map(s => ({
                number:      String(s.num         ?? s.number ?? ""),
                title:       String(s.label       ?? s.title  ?? ""),
                description: String(s.description ?? ""),
                active:      s.active === "1" || s.active === true || s.active === "yes",
            }))
            : [
                { number: "01", title: "Specification",  description: "System specs & requirements" },
                { number: "02", title: "Installation",   description: "Professional setup & integration" },
                { number: "03", title: "Documentation",  description: "Full records & protocols" },
                { number: "04", title: "Training",        description: "Expert-led staff training" },
                { number: "05", title: "Replacement",     description: "End-of-life system renewal",    active: true },
                { number: "06", title: "Upgrade",         description: "Technology advancement",        active: true },
                { number: "07", title: "Disposal",        description: "Certified recycling & disposal", active: true },
            ],
    };
}

/* ─── CTA ───────────────────────────────────────────────────────────────────── */
export interface RUCtaCard { icon: string; badge: string; badgeColor: string; title: string; description: string; linkLabel: string; linkUrl: string; }
export interface RUCtaData {
    label: string;
    heading: string;
    description: string;
    btn1Label: string; btn1Url: string;
    btn2Label: string; btn2Url: string;
    phone: string;
    cards: RUCtaCard[];
}
export async function getRUCtaData(): Promise<RUCtaData> {
    const sec      = await getAxionSection<Raw>("replacement-upgrades", "cta");
    const cmsCards = arr(sec?.cards);
    return {
        label:       val(sec?.label)       ?? "GET STARTED",
        heading:     val(sec?.heading)     ?? "Ready to Replace\nor Upgrade Your\nBattery Systems?",
        description: val(sec?.description) ?? "Contact our technical team to schedule a battery health assessment or discuss your upgrade options.",
        btn1Label:   val(sec?.btn1_label)  ?? "Plan Your Replacement →",
        btn1Url:     val(sec?.btn1_url)    ?? "/contact",
        btn2Label:   val(sec?.btn2_label)  ?? "Explore Upgrades",
        btn2Url:     val(sec?.btn2_url)    ?? "/contact",
        phone:       val(sec?.phone)       ?? "📞  24/7 Emergency: 245 445 34352",
        cards: cmsCards.length > 0
            ? cmsCards.map(c => ({
                icon:        String(c.icon        ?? "🔋"),
                badge:       String(c.badge       ?? ""),
                badgeColor:  String(c.badge_color ?? "rgba(99,222,247,1)"),
                title:       String(c.title       ?? ""),
                description: String(c.description ?? ""),
                linkLabel:   String(c.link_label  ?? "Learn More →"),
                linkUrl:     String(c.link_url    ?? "/contact"),
            }))
            : [
                { icon: "🔋", badge: "Most Popular", badgeColor: "rgba(255,191,69,1)",  title: "Replacement Consultation", description: "Schedule a battery health assessment and replacement planning session with our expert engineers.", linkLabel: "Book Assessment →",  linkUrl: "/contact" },
                { icon: "♻️", badge: "Eco Certified", badgeColor: "rgba(166,227,161,1)", title: "Disposal & Recycling",     description: "Arrange certified battery disposal and receive full compliance documentation for your records.",  linkLabel: "Arrange Disposal →", linkUrl: "/contact" },
            ],
    };
}
