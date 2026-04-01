import { Metadata } from "next";
import {
    getMtHeroData,
    getMtIntroData,
    getMtPreventiveData,
    getMtRemoteData,
    getMtPredictiveData,
    getMtBenefitsData,
    getMtCtaData,
} from "@/lib/queries/maintenance";
import MtHeroSection from "@/components/MtHeroSection";
import MtIntroSection from "@/components/MtIntroSection";
import MtPreventiveSection from "@/components/MtPreventiveSection";
import MtRemoteSection from "@/components/MtRemoteSection";
import MtPredictiveSection from "@/components/MtPredictiveSection";
import MtBenefitsSection from "@/components/MtBenefitsSection";
import MtCtaSection from "@/components/MtCtaSection";

export const metadata: Metadata = {
    title: "Maintenance & Monitoring — Axion",
    description:
        "Comprehensive maintenance and real-time monitoring solutions designed to keep your mission-critical battery systems operating at peak performance.",
};

export const revalidate = 300;

export default async function MaintenanceMonitoringPage() {
    const [hero, intro, preventive, remote, predictive, benefits, cta] =
        await Promise.all([
            getMtHeroData(),
            getMtIntroData(),
            getMtPreventiveData(),
            getMtRemoteData(),
            getMtPredictiveData(),
            getMtBenefitsData(),
            getMtCtaData(),
        ]);

    return (
        <main>
            <MtHeroSection data={hero} />
            <MtIntroSection data={intro} />
            <MtPreventiveSection data={preventive} />
            <MtRemoteSection data={remote} />
            <MtPredictiveSection data={predictive} />
            <MtBenefitsSection data={benefits} />
            <MtCtaSection data={cta} />
        </main>
    );
}
