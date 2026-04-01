import { Metadata } from "next";
import {
    getSTHeroData,
    getSTIntroData,
    getSTTrainingData,
    getSTDocData,
    getSTBenefitsData,
    getSTIndustriesData,
    getSTLifecycleData,
    getSTCtaData,
} from "@/lib/queries/safety-training";
import STHeroSection from "@/components/STHeroSection";
import STIntroSection from "@/components/STIntroSection";
import STTrainingSection from "@/components/STTrainingSection";
import STDocSection from "@/components/STDocSection";
import STBenefitsSection from "@/components/STBenefitsSection";
import STIndustriesSection from "@/components/STIndustriesSection";
import STLifecycleSection from "@/components/STLifecycleSection";
import STCtaSection from "@/components/STCtaSection";

export const metadata: Metadata = {
    title: "Safety Training & Documentation — Axion",
    description:
        "Axion Critical Power Solutions delivers expert on-site safety training and comprehensive documentation for mission-critical battery systems. Equip your team with the knowledge and compliance records they need.",
};

export const revalidate = 300;

export default async function SafetyTrainingPage() {
    const [hero, intro, training, doc, benefits, industries, lifecycle, cta] =
        await Promise.all([
            getSTHeroData(),
            getSTIntroData(),
            getSTTrainingData(),
            getSTDocData(),
            getSTBenefitsData(),
            getSTIndustriesData(),
            getSTLifecycleData(),
            getSTCtaData(),
        ]);

    return (
        <main>
            <STHeroSection data={hero} />
            <STIntroSection data={intro} />
            <STTrainingSection data={training} />
            <STDocSection data={doc} />
            <STBenefitsSection data={benefits} />
            <STIndustriesSection data={industries} />
            <STLifecycleSection data={lifecycle} />
            <STCtaSection data={cta} />
        </main>
    );
}
