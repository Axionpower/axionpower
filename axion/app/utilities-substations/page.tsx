import { Metadata } from "next";
import {
    getUSHeroData,
    getUSApplicationsData,
    getUSBatteryTechData,
    getUSEngineeringData,
    getUSQualityData,
    getUSLifecycleData,
    getUSWhyData,
    getUSCtaData,
} from "@/lib/queries/utilities-substations";
import USHeroSection from "@/components/USHeroSection";
import USApplicationsSection from "@/components/USApplicationsSection";
import USBatteryTechSection from "@/components/USBatteryTechSection";
import USEngineeringSection from "@/components/USEngineeringSection";
import USQualitySection from "@/components/USQualitySection";
import USLifecycleSection from "@/components/USLifecycleSection";
import USWhySection from "@/components/USWhySection";
import USCtaSection from "@/components/USCtaSection";

export const metadata: Metadata = {
    title: "Utilities & Substations — Axion",
    description:
        "VRLA and flooded battery systems, engineering support, and full lifecycle services for mission-critical DC power in utility and substation environments.",
};

export const revalidate = 300;

export default async function UtilitiesSubstationsPage() {
    const [hero, apps, battech, engineering, quality, lifecycle, why, cta] =
        await Promise.all([
            getUSHeroData(),
            getUSApplicationsData(),
            getUSBatteryTechData(),
            getUSEngineeringData(),
            getUSQualityData(),
            getUSLifecycleData(),
            getUSWhyData(),
            getUSCtaData(),
        ]);

    return (
        <main>
            <USHeroSection data={hero} />
            <USApplicationsSection data={apps} />
            <USBatteryTechSection data={battech} />
            <USEngineeringSection data={engineering} />
            <USQualitySection data={quality} />
            <USLifecycleSection data={lifecycle} />
            <USWhySection data={why} />
            <USCtaSection data={cta} />
        </main>
    );
}
