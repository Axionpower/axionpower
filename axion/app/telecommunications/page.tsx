import { Metadata } from "next";
import {
    getTCHeroData,
    getTCApplicationsData,
    getTCBatteryTechData,
    getTCEngineeringData,
    getTCQualityData,
    getTCLifecycleData,
    getTCWhyData,
    getTCCtaData,
} from "@/lib/queries/telecommunications";
import TCHeroSection from "@/components/TCHeroSection";
import TCApplicationsSection from "@/components/TCApplicationsSection";
import TCBatteryTechSection from "@/components/TCBatteryTechSection";
import TCEngineeringSection from "@/components/TCEngineeringSection";
import TCQualitySection from "@/components/TCQualitySection";
import TCLifecycleSection from "@/components/TCLifecycleSection";
import TCWhySection from "@/components/TCWhySection";
import TCCtaSection from "@/components/TCCtaSection";

export const revalidate = 300;

export const metadata: Metadata = {
    title: "Telecommunications | Axion Critical Power Solutions",
    description:
        "VRLA and flooded battery systems, engineering support, and lifecycle management for uninterrupted telecom uptime — central offices, cell towers, data centres and more.",
};

export default async function TelecommunicationsPage() {
    const [hero, applications, batteryTech, engineering, quality, lifecycle, why, cta] =
        await Promise.all([
            getTCHeroData(),
            getTCApplicationsData(),
            getTCBatteryTechData(),
            getTCEngineeringData(),
            getTCQualityData(),
            getTCLifecycleData(),
            getTCWhyData(),
            getTCCtaData(),
        ]);

    return (
        <main>
            <TCHeroSection data={hero} />
            <TCApplicationsSection data={applications} />
            <TCBatteryTechSection data={batteryTech} />
            <TCEngineeringSection data={engineering} />
            <TCQualitySection data={quality} />
            <TCLifecycleSection data={lifecycle} />
            <TCWhySection data={why} />
            <TCCtaSection data={cta} />
        </main>
    );
}
