import { Metadata } from "next";
import {
    getSustainHeroData,
    getSustainIntroData,
    getSustainRecyclingData,
    getSustainComplianceData,
    getSustainSourcingData,
    getSustainSafetyData,
    getSustainCtaData,
} from "@/lib/queries/sustainability";
import SustainHeroSection from "@/components/SustainHeroSection";
import SustainIntroSection from "@/components/SustainIntroSection";
import SustainRecyclingSection from "@/components/SustainRecyclingSection";
import SustainComplianceSection from "@/components/SustainComplianceSection";
import SustainSourcingSection from "@/components/SustainSourcingSection";
import SustainSafetySection from "@/components/SustainSafetySection";
import SustainCtaSection from "@/components/SustainCtaSection";

export const metadata: Metadata = {
    title: "Sustainability & Compliance — Axion",
    description:
        "Environmental responsibility and regulatory compliance are central to Axion's approach — integrated throughout the entire battery lifecycle.",
};

export const revalidate = 300;

export default async function SustainabilityCompliancePage() {
    const [hero, intro, recycling, compliance, sourcing, safety, cta] =
        await Promise.all([
            getSustainHeroData(),
            getSustainIntroData(),
            getSustainRecyclingData(),
            getSustainComplianceData(),
            getSustainSourcingData(),
            getSustainSafetyData(),
            getSustainCtaData(),
        ]);

    return (
        <main>
            <SustainHeroSection data={hero} />
            <SustainIntroSection data={intro} />
            <SustainRecyclingSection data={recycling} />
            <SustainComplianceSection data={compliance} />
            <SustainSourcingSection data={sourcing} />
            <SustainSafetySection data={safety} />
            <SustainCtaSection data={cta} />
        </main>
    );
}
