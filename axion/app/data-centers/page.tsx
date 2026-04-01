import { Metadata } from "next";
import {
    getDCHeroData,
    getDCApplicationsData,
    getDCBatteryTechData,
    getDCEngineeringData,
    getDCQualityData,
    getDCLifecycleData,
    getDCWhyData,
    getDCCtaData,
} from "@/lib/queries/data-centers";
import DCHeroSection        from "@/components/DCHeroSection";
import DCApplicationsSection from "@/components/DCApplicationsSection";
import DCBatteryTechSection  from "@/components/DCBatteryTechSection";
import DCEngineeringSection  from "@/components/DCEngineeringSection";
import DCQualitySection      from "@/components/DCQualitySection";
import DCLifecycleSection    from "@/components/DCLifecycleSection";
import DCWhySection          from "@/components/DCWhySection";
import DCCtaSection          from "@/components/DCCtaSection";

export const revalidate = 300;

export const metadata: Metadata = {
    title: "Data Centers & Colocation | Axion Critical Power Solutions",
    description:
        "Always-on VRLA and wet cell battery backup for hyperscale, enterprise, colocation, cloud, disaster recovery, and edge data centers. NEC, NFPA 110, Uptime Institute compliant.",
};

export default async function DataCentersPage() {
    const [hero, applications, batteryTech, engineering, quality, lifecycle, why, cta] =
        await Promise.all([
            getDCHeroData(),
            getDCApplicationsData(),
            getDCBatteryTechData(),
            getDCEngineeringData(),
            getDCQualityData(),
            getDCLifecycleData(),
            getDCWhyData(),
            getDCCtaData(),
        ]);

    return (
        <main>
            <DCHeroSection        data={hero} />
            <DCApplicationsSection data={applications} />
            <DCBatteryTechSection  data={batteryTech} />
            <DCEngineeringSection  data={engineering} />
            <DCQualitySection      data={quality} />
            <DCLifecycleSection    data={lifecycle} />
            <DCWhySection          data={why} />
            <DCCtaSection          data={cta} />
        </main>
    );
}
