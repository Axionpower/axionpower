import { Metadata } from "next";
import {
    getIIHeroData,
    getIIApplicationsData,
    getIIBatteryTechData,
    getIIEngineeringData,
    getIIQualityData,
    getIILifecycleData,
    getIIWhyData,
    getIICtaData,
} from "@/lib/queries/industrial-infrastructure";
import IIHeroSection from "@/components/IIHeroSection";
import IIApplicationsSection from "@/components/IIApplicationsSection";
import IIBatteryTechSection from "@/components/IIBatteryTechSection";
import IIEngineeringSection from "@/components/IIEngineeringSection";
import IIQualitySection from "@/components/IIQualitySection";
import IILifecycleSection from "@/components/IILifecycleSection";
import IIWhySection from "@/components/IIWhySection";
import IICtaSection from "@/components/IICtaSection";

export const revalidate = 300;

export const metadata: Metadata = {
    title: "Industrial & Infrastructure | Axion Critical Power Solutions",
    description:
        "VRLA and wet cell battery solutions engineered for demanding industrial environments — manufacturing, oil & gas, water treatment, transportation, and government infrastructure.",
};

export default async function IndustrialInfrastructurePage() {
    const [hero, applications, batteryTech, engineering, quality, lifecycle, why, cta] =
        await Promise.all([
            getIIHeroData(),
            getIIApplicationsData(),
            getIIBatteryTechData(),
            getIIEngineeringData(),
            getIIQualityData(),
            getIILifecycleData(),
            getIIWhyData(),
            getIICtaData(),
        ]);

    return (
        <main>
            <IIHeroSection data={hero} />
            <IIApplicationsSection data={applications} />
            <IIBatteryTechSection data={batteryTech} />
            <IIEngineeringSection data={engineering} />
            <IIQualitySection data={quality} />
            <IILifecycleSection data={lifecycle} />
            <IIWhySection data={why} />
            <IICtaSection data={cta} />
        </main>
    );
}
