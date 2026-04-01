import type { Metadata } from "next";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutIntroSection from "@/components/AboutIntroSection";
import AboutMissionSection from "@/components/AboutMissionSection";
import AboutApproachSection from "@/components/AboutApproachSection";
import AboutAdvantageSection from "@/components/AboutAdvantageSection";
import AboutCtaSection from "@/components/AboutCtaSection";
import {
    getAboutHeroData,
    getAboutIntroData,
    getAboutMissionData,
    getAboutApproachData,
    getAboutAdvantageData,
    getAboutCtaData,
} from "@/lib/queries/about-page";

export const metadata: Metadata = {
    title: "About Axion Critical Power Solutions",
    description:
        "Dedicated to supplying reliable battery systems for mission-critical power applications. VRLA, wet cell, and DC power solutions built for uptime.",
};

export default async function AboutPage() {
    const [hero, intro, mission, approach, advantage, cta] = await Promise.all([
        getAboutHeroData(),
        getAboutIntroData(),
        getAboutMissionData(),
        getAboutApproachData(),
        getAboutAdvantageData(),
        getAboutCtaData(),
    ]);

    return (
        <main>
            <AboutHeroSection data={hero} />
            <AboutIntroSection data={intro} />
            <AboutMissionSection data={mission} />
            <AboutApproachSection data={approach} />
            <AboutAdvantageSection data={advantage} />
            <AboutCtaSection data={cta} />
        </main>
    );
}
