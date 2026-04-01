import { Metadata } from "next";
import {
    getQSHeroData,
    getQSIntroData,
    getQSStandardsData,
    getQSManufacturerData,
    getQSHandlingData,
    getQSEnvironmentData,
    getQSCtaData,
} from "@/lib/queries/quality-safety";
import QSHeroSection from "@/components/QSHeroSection";
import QSIntroSection from "@/components/QSIntroSection";
import QSStandardsSection from "@/components/QSStandardsSection";
import QSManufacturerSection from "@/components/QSManufacturerSection";
import QSHandlingSection from "@/components/QSHandlingSection";
import QSEnvironmentSection from "@/components/QSEnvironmentSection";
import QSCtaSection from "@/components/QSCtaSection";

export const metadata: Metadata = {
    title: "Quality, Safety & Compliance — Axion",
    description:
        "Quality, safety, and compliance are integral to every Axion solution — from manufacturer selection through installation, maintenance, and end-of-life recycling.",
};

export const revalidate = 300;

export default async function QualitySafetyCompliancePage() {
    const [hero, intro, standards, manufacturer, handling, environment, cta] =
        await Promise.all([
            getQSHeroData(),
            getQSIntroData(),
            getQSStandardsData(),
            getQSManufacturerData(),
            getQSHandlingData(),
            getQSEnvironmentData(),
            getQSCtaData(),
        ]);

    return (
        <main>
            <QSHeroSection data={hero} />
            <QSIntroSection data={intro} />
            <QSStandardsSection data={standards} />
            <QSManufacturerSection data={manufacturer} />
            <QSHandlingSection data={handling} />
            <QSEnvironmentSection data={environment} />
            <QSCtaSection data={cta} />
        </main>
    );
}
