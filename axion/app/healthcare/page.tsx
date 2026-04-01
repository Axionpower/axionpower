import { Metadata } from "next";
import {
    getHCHeroData,
    getHCApplicationsData,
    getHCBatteryTechData,
    getHCEngineeringData,
    getHCQualityData,
    getHCLifecycleData,
    getHCWhyData,
    getHCCtaData,
} from "@/lib/queries/healthcare";
import HCHeroSection from "@/components/HCHeroSection";
import HCApplicationsSection from "@/components/HCApplicationsSection";
import HCBatteryTechSection from "@/components/HCBatteryTechSection";
import HCEngineeringSection from "@/components/HCEngineeringSection";
import HCQualitySection from "@/components/HCQualitySection";
import HCLifecycleSection from "@/components/HCLifecycleSection";
import HCWhySection from "@/components/HCWhySection";
import HCCtaSection from "@/components/HCCtaSection";

export const revalidate = 300;

export const metadata: Metadata = {
    title: "Healthcare Power | Axion Critical Power Solutions",
    description:
        "Reliable VRLA and wet cell battery systems for hospitals, emergency suites, operating rooms, imaging centres, and long-term care facilities. NFPA 110 compliant, life-safety grade.",
};

export default async function HealthcarePage() {
    const [hero, applications, batteryTech, engineering, quality, lifecycle, why, cta] =
        await Promise.all([
            getHCHeroData(),
            getHCApplicationsData(),
            getHCBatteryTechData(),
            getHCEngineeringData(),
            getHCQualityData(),
            getHCLifecycleData(),
            getHCWhyData(),
            getHCCtaData(),
        ]);

    return (
        <main>
            <HCHeroSection data={hero} />
            <HCApplicationsSection data={applications} />
            <HCBatteryTechSection data={batteryTech} />
            <HCEngineeringSection data={engineering} />
            <HCQualitySection data={quality} />
            <HCLifecycleSection data={lifecycle} />
            <HCWhySection data={why} />
            <HCCtaSection data={cta} />
        </main>
    );
}
