import { Metadata } from "next";
import {
    getRUHeroData,
    getRUIntroData,
    getRUPlanningData,
    getRUUpgradesData,
    getRUDisposalData,
    getRUBenefitsData,
    getRUIndustriesData,
    getRULifecycleData,
    getRUCtaData,
} from "@/lib/queries/replacement-upgrades";
import RUHeroSection from "@/components/RUHeroSection";
import RUIntroSection from "@/components/RUIntroSection";
import RUPlanningSection from "@/components/RUPlanningSection";
import RUUpgradesSection from "@/components/RUUpgradesSection";
import RUDisposalSection from "@/components/RUDisposalSection";
import RUBenefitsSection from "@/components/RUBenefitsSection";
import RUIndustriesSection from "@/components/RUIndustriesSection";
import RULifecycleSection from "@/components/RULifecycleSection";
import RUCtaSection from "@/components/RUCtaSection";

export const metadata: Metadata = {
    title: "Battery Replacement & Upgrades — Axion",
    description:
        "Axion Critical Power Solutions delivers expert battery replacement planning, technology upgrade pathways, and certified disposal services for mission-critical systems.",
};

export const revalidate = 300;

export default async function ReplacementUpgradesPage() {
    const [hero, intro, planning, upgrades, disposal, benefits, industries, lifecycle, cta] =
        await Promise.all([
            getRUHeroData(),
            getRUIntroData(),
            getRUPlanningData(),
            getRUUpgradesData(),
            getRUDisposalData(),
            getRUBenefitsData(),
            getRUIndustriesData(),
            getRULifecycleData(),
            getRUCtaData(),
        ]);

    return (
        <main>
            <RUHeroSection data={hero} />
            <RUIntroSection data={intro} />
            <RUPlanningSection data={planning} />
            <RUUpgradesSection data={upgrades} />
            <RUDisposalSection data={disposal} />
            <RUBenefitsSection data={benefits} />
            <RUIndustriesSection data={industries} />
            <RULifecycleSection data={lifecycle} />
            <RUCtaSection data={cta} />
        </main>
    );
}
