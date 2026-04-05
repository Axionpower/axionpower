import React from "react";
import { getAxionSection } from "@/lib/queries/axion-cms";
import { HiWrenchScrewdriver, HiScale, HiChartBar, HiBolt, HiTrophy, HiArrowPath, HiLockClosed } from "react-icons/hi2";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Raw = any;

function val<T>(v: T): T | undefined {
    if (v === null || v === undefined) return undefined;
    if (typeof v === "string" && !v.trim()) return undefined;
    if (Array.isArray(v) && v.length === 0) return undefined;
    return v;
}

// ══════════════════════════════════
// APPROACH (How We Work)
// ══════════════════════════════════
export interface AboutApproachCard {
    number: string;
    title: string;
    description: string;
    accentColor: string;
}

export interface AboutApproachData {
    label: string;
    heading: string;
    subtext: string;
    cards: AboutApproachCard[];
  headingTag?: string;
  subheadingTag?: string;
  cardHeadingTag?: string;
  headingColor?: string;
  headingFontWeight?: string;
  headingFontFamily?: string;
  bodyColor?: string;
  bodyFontSize?: string;
  accentColor?: string;
  labelColor?: string;
  cardTitleColor?: string;
  cardBgColor?: string;
}

const DEFAULT_APPROACH_CARDS: AboutApproachCard[] = [
    {
        number: "01",
        title: "Reliability\nFirst Mindset",
        description:
            "Mission-critical systems must stay operational. We build every solution with maximum uptime as the primary goal.",
        accentColor: "#1e88e5",
    },
    {
        number: "02",
        title: "Technical\nAccuracy",
        description:
            "Clear, transparent guidance throughout the full battery lifecycle — no guesswork, no ambiguity.",
        accentColor: "#1565c0",
    },
    {
        number: "03",
        title: "Long-Term\nPartnerships",
        description:
            "Building lasting relationships with every client — your consistent technical resource across multi-year projects, expansions, and planned replacements.",
        accentColor: "#0d47a1",
    },
    {
        number: "04",
        title: "Safety &\nCompliance",
        description:
            "Adhering to all industry standards and safe operational practices across every project and application.",
        accentColor: "#1976d2",
    },
];

export async function getAboutApproachData(): Promise<AboutApproachData> {
    const [sec, cardsSec] = await Promise.all([
        getAxionSection<Raw>("about", "approach"),
        getAxionSection<Raw>("about", "approach-cards"),
    ]);

    const rawCards = cardsSec?.cards;
    const cards: AboutApproachCard[] =
        Array.isArray(rawCards) && rawCards.length > 0
            ? rawCards.map((c: Raw, i: number) => ({
                number:       String(c.number       ?? DEFAULT_APPROACH_CARDS[i]?.number       ?? `0${i + 1}`),
                title:        String(c.title        ?? DEFAULT_APPROACH_CARDS[i]?.title        ?? ""),
                description:  String(c.description  ?? DEFAULT_APPROACH_CARDS[i]?.description  ?? ""),
                accentColor:  String(c.accent_color ?? DEFAULT_APPROACH_CARDS[i]?.accentColor  ?? "#1e88e5"),
            }))
            : DEFAULT_APPROACH_CARDS;

    return {
        label:   val(sec?.label)   ?? "OUR APPROACH",
        heading: val(sec?.heading) ?? "How We Work",
        subtext: val(sec?.subtext) ??
            "Practical, technically sound, and reliability-driven — ensuring uninterrupted power.",
        cards,
    };
}

// ══════════════════════════════════
// MISSION
// ══════════════════════════════════
export interface AboutMissionFeature {
    icon: React.ReactNode;
    label: string;
    desc: string;
}

export interface AboutMissionData {
    imageUrl?: string;
    videoUrl?: string;
    imageAlt?: string;
    quote: string;
    label: string;
    heading: string;
    body: string;
    features: AboutMissionFeature[];
  headingTag?: string;
  subheadingTag?: string;
  cardHeadingTag?: string;
  headingColor?: string;
  headingFontWeight?: string;
  headingFontFamily?: string;
  bodyColor?: string;
  bodyFontSize?: string;
  accentColor?: string;
  labelColor?: string;
  cardTitleColor?: string;
  cardBgColor?: string;
}

const DEFAULT_MISSION_FEATURES: AboutMissionFeature[] = [
    { icon: <HiWrenchScrewdriver size={22} color="#1e88e5" />, label: "Practical",          desc: "Real-world performance" },
    { icon: <HiScale size={22} color="#1e88e5" />,             label: "Standards-Aligned",  desc: "Industry best practices" },
    { icon: <HiChartBar size={22} color="#1e88e5" />,           label: "Long-Term",           desc: "Reliability & uptime focus" },
];

export async function getAboutMissionData(): Promise<AboutMissionData> {
    const [sec, featSec] = await Promise.all([
        getAxionSection<Raw>("about", "mission"),
        getAxionSection<Raw>("about", "mission-features"),
    ]);

    const rawFeats = featSec?.features;
    const features: AboutMissionFeature[] =
        Array.isArray(rawFeats) && rawFeats.length > 0
            ? rawFeats.map((f: Raw, i: number) => ({
                icon:  DEFAULT_MISSION_FEATURES[i]?.icon ?? <HiWrenchScrewdriver size={22} color="#1e88e5" />,
                label: String(f.label ?? ""),
                desc:  String(f.desc  ?? ""),
            }))
            : DEFAULT_MISSION_FEATURES;

    return {
        imageUrl: val(sec?.image_url),
        videoUrl: val(sec?.image_video_url),
        imageAlt: val(sec?.image_alt) ?? "Technician at work",
        quote:    val(sec?.quote)     ?? '"Reliability first. Every system. Every client. Every time."',
        label:    val(sec?.label)     ?? "OUR MISSION",
        heading:  val(sec?.heading)   ?? "Powering What\nMatters Most",
        body:     val(sec?.body)      ??
            "To provide mission-critical power solutions that combine reliability, technical excellence, and lifecycle support for long-term operational value.",
        features,
    };
}

// ══════════════════════════════════
// INTRO
// ══════════════════════════════════
export interface AboutIntroData {
    label: string;
    heading: string;
    body1: string;
    body2: string;
    badge1?: string;
    badge2?: string;
    imageUrl?: string;
    imageAlt?: string;
    badgeSince: string;
    badgeYears: string;
  headingTag?: string;
  subheadingTag?: string;
  cardHeadingTag?: string;
  headingColor?: string;
  headingFontWeight?: string;
  headingFontFamily?: string;
  bodyColor?: string;
  bodyFontSize?: string;
  accentColor?: string;
  labelColor?: string;
  cardTitleColor?: string;
  cardBgColor?: string;
}

export async function getAboutIntroData(): Promise<AboutIntroData> {
    const ax = await getAxionSection<Raw>("about", "intro");
    return {
        label:      val(ax?.label)       ?? "WHO WE ARE",
        heading:    val(ax?.heading)     ?? "Specialists in\nCritical Battery Supply",
        body1:      val(ax?.body1)       ??
            "Founded to address the technical gap in critical power battery supply, Axion serves consulting engineers, contractors, and facility managers who demand accuracy, compliance, and reliability from every battery solution.",
        body2:      val(ax?.body2)       ??
            "Our focus is on VRLA and wet cell batteries used in UPS systems, DC power plants, and standby power environments — built to perform when it matters most.",
        badge1:     val(ax?.badge1)      ?? "DC Power Systems Expert",
        badge2:     val(ax?.badge2)      ?? "Industry Compliant Solutions",
        imageUrl:   val(ax?.image_url),
        imageAlt:   val(ax?.image_alt)   ?? "Battery room installation",
        badgeSince: val(ax?.badge_since) ?? "Since 2004",
        badgeYears: val(ax?.badge_years) ?? "20+ Years",
    };
}

// ══════════════════════════════════
// HERO
// ══════════════════════════════════
export interface AboutHeroStat {
    value: string;
    label: string;
}

export interface AboutHeroData {
    backgroundImageUrl?: string;
    backgroundVideoUrl?: string;
    breadcrumb: string;
    heading: string;
    subtext: string;
    btnPrimaryLabel: string;
    btnPrimaryUrl: string;
    btnGhostLabel: string;
    btnGhostUrl: string;
    stats: AboutHeroStat[];
    headingTag?: string;
    headingColor?: string;
    headingFontSize?: string;
    headingFontWeight?: string;
    headingFontFamily?: string;
    bodyColor?: string;
    bodyFontSize?: string;
    bodyFontWeight?: string;
}

const DEFAULT_STATS: AboutHeroStat[] = [
    { value: "20+",  label: "Years Experience" },
    { value: "500+", label: "Projects Delivered" },
    { value: "100%", label: "Compliance Focus" },
    { value: "24/7", label: "Emergency Support" },
];

export async function getAboutHeroData(): Promise<AboutHeroData> {
    const [hero, statsSection] = await Promise.all([
        getAxionSection<Raw>("about", "hero"),
        getAxionSection<Raw>("about", "hero-stats"),
    ]);

    const rawStats = statsSection?.stats;
    const stats: AboutHeroStat[] =
        Array.isArray(rawStats) && rawStats.length > 0
            ? rawStats.map((s: Raw) => ({ value: String(s.value ?? ""), label: String(s.label ?? "") }))
            : DEFAULT_STATS;

    return {
        backgroundImageUrl: val(hero?.background_image_url),
        backgroundVideoUrl: val(hero?.background_image_video_url),
        breadcrumb:     val(hero?.breadcrumb)       ?? "HOME / ABOUT US",
        heading:        val(hero?.heading)          ?? "About Axion Critical Power\nSolutions",
        subtext:        val(hero?.subtext)          ??
            "Dedicated to supplying reliable battery systems for mission-critical power applications. VRLA, wet cell, and DC power solutions built for uptime.",
        btnPrimaryLabel: val(hero?.btn_primary_label) ?? "Our Story →",
        btnPrimaryUrl:   val(hero?.btn_primary_url)   ?? "/about/story",
        btnGhostLabel:   val(hero?.btn_ghost_label)   ?? "View Products",
        btnGhostUrl:     val(hero?.btn_ghost_url)     ?? "/products",
        stats,
        headingTag:        val(hero?.heading_tag),
        headingColor:      val(hero?.heading_color),
        headingFontSize:   val(hero?.heading_font_size),
        headingFontWeight: val(hero?.heading_font_weight),
        headingFontFamily: val(hero?.heading_font_family),
        bodyColor:         val(hero?.body_color),
        bodyFontSize:      val(hero?.body_font_size),
        bodyFontWeight:    val(hero?.body_font_weight),
    };
}

// ══════════════════════════════════
// ADVANTAGE (Why Choose Axion)
// ══════════════════════════════════
export interface AboutAdvantageStat {
    value: string;
    label: string;
}

export interface AboutAdvantageCard {
    number: string;
    numberColor: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface AboutAdvantageData {
    label: string;
    heading: string;
    subtext: string;
    stats: AboutAdvantageStat[];
    cards: AboutAdvantageCard[];
  headingTag?: string;
  subheadingTag?: string;
  cardHeadingTag?: string;
  headingColor?: string;
  headingFontWeight?: string;
  headingFontFamily?: string;
  bodyColor?: string;
  bodyFontSize?: string;
  accentColor?: string;
  labelColor?: string;
  cardTitleColor?: string;
  cardBgColor?: string;
}

const DEFAULT_ADVANTAGE_STATS: AboutAdvantageStat[] = [
    { value: "VRLA",  label: "& Wet Cell Ready" },
    { value: "UPS",   label: "DC & Standby Power" },
    { value: "IEEE",  label: "Standards Aligned" },
    { value: "Spec→EOL", label: "Full Project Coverage" },
];

const DEFAULT_ADVANTAGE_CARDS: AboutAdvantageCard[] = [
    {
        number: "01",
        numberColor: "#1e88e5",
        icon: <HiBolt size={24} color="#ffffff" />,
        title: "VRLA & Wet Cell Expertise",
        description:
            "Deep specialist knowledge in VRLA and wet cell battery solutions for every critical power application.",
    },
    {
        number: "02",
        numberColor: "#42a5f5",
        icon: <HiTrophy size={24} color="#ffffff" />,
        title: "Proven Track Record",
        description:
            "Trusted by consulting engineers, contractors, and users across industries for over two decades.",
    },
    {
        number: "03",
        numberColor: "#1565c0",
        icon: <HiArrowPath size={24} color="#ffffff" />,
        title: "Full Lifecycle Support",
        description:
            "From initial specification and procurement through to end-of-life replacement planning and beyond.",
    },
    {
        number: "04",
        numberColor: "#0d47a1",
        icon: <HiLockClosed size={24} color="#ffffff" />,
        title: "Reliable & Compliant",
        description:
            "Every solution is technically sound, standards-compliant, and engineered for maximum long-term uptime.",
    },
];

export async function getAboutAdvantageData(): Promise<AboutAdvantageData> {
    const [sec, cardsSec, statsSec] = await Promise.all([
        getAxionSection<Raw>("about", "advantage"),
        getAxionSection<Raw>("about", "advantage-cards"),
        getAxionSection<Raw>("about", "advantage-stats"),
    ]);

    const rawCards = cardsSec?.cards;
    const cards: AboutAdvantageCard[] =
        Array.isArray(rawCards) && rawCards.length > 0
            ? rawCards.map((c: Raw, i: number) => ({
                number:      String(c.number       ?? DEFAULT_ADVANTAGE_CARDS[i]?.number       ?? `0${i + 1}`),
                numberColor: String(c.number_color ?? DEFAULT_ADVANTAGE_CARDS[i]?.numberColor  ?? "#1e88e5"),
                icon:        DEFAULT_ADVANTAGE_CARDS[i]?.icon ?? <HiBolt size={24} color="#ffffff" />,
                title:       String(c.title        ?? DEFAULT_ADVANTAGE_CARDS[i]?.title        ?? ""),
                description: String(c.description  ?? DEFAULT_ADVANTAGE_CARDS[i]?.description  ?? ""),
            }))
            : DEFAULT_ADVANTAGE_CARDS;

    const rawStats = statsSec?.stats;
    const stats: AboutAdvantageStat[] =
        Array.isArray(rawStats) && rawStats.length > 0
            ? rawStats.map((s: Raw) => ({ value: String(s.value ?? ""), label: String(s.label ?? "") }))
            : DEFAULT_ADVANTAGE_STATS;

    return {
        label:   val(sec?.label)   ?? "WHY CHOOSE AXION",
        heading: val(sec?.heading) ?? "The Axion\nAdvantage",
        subtext: val(sec?.subtext) ?? "Trusted by engineers & contractors across mission-critical industries.",
        stats,
        cards,
    };
}

// ══════════════════════════════════
// CTA (Get In Touch)
// ══════════════════════════════════
export interface AboutCtaData {
    label: string;
    heading: string;
    body: string;
    btnPrimaryLabel: string;
    btnPrimaryUrl: string;
    btnGhostLabel: string;
    btnGhostUrl: string;
    imageUrl?: string;
    videoUrl?: string;
    imageAlt?: string;
    emergencyText: string;
  headingTag?: string;
  subheadingTag?: string;
  cardHeadingTag?: string;
  headingColor?: string;
  headingFontWeight?: string;
  headingFontFamily?: string;
  bodyColor?: string;
  bodyFontSize?: string;
  accentColor?: string;
  labelColor?: string;
  cardTitleColor?: string;
  cardBgColor?: string;
}

export async function getAboutCtaData(): Promise<AboutCtaData> {
    const sec = await getAxionSection<Raw>("about", "cta");
    return {
        label:           val(sec?.label)             ?? "GET IN TOUCH",
        heading:         val(sec?.heading)           ?? "Ready to Power Your\nInfrastructure?",
        body:            val(sec?.body)              ??
            "Speak with our technical team today and discover how Axion can support your mission-critical power requirements.",
        btnPrimaryLabel: val(sec?.btn_primary_label) ?? "Speak with an Expert →",
        btnPrimaryUrl:   val(sec?.btn_primary_url)   ?? "/contact",
        btnGhostLabel:   val(sec?.btn_ghost_label)   ?? "Request a Quote",
        btnGhostUrl:     val(sec?.btn_ghost_url)     ?? "/contact",
        imageUrl:        val(sec?.image_url),
        videoUrl:        val(sec?.image_video_url),
        imageAlt:        val(sec?.image_alt)         ?? "Axion technician at work",
        emergencyText:   val(sec?.emergency_text)    ?? "24/7 Emergency: 245 445 34352",
    };
}
