import { Metadata } from "next";
import {
    getEsHeroData,
    getEsResponseData,
    getEsSlaData,
    getEsTechData,
    getEsBenefitsData,
    getEsLifecycleData,
    getEsCtaData,
} from "@/lib/queries/emergency-support";
import EsHeroSection from "@/components/EsHeroSection";
import EsResponseSection from "@/components/EsResponseSection";
import EsSlaSection from "@/components/EsSlaSection";
import EsTechniciansSection from "@/components/EsTechniciansSection";
import EsBenefitsSection from "@/components/EsBenefitsSection";
import EsLifecycleSection from "@/components/EsLifecycleSection";
import EsCtaSection from "@/components/EsCtaSection";

export const metadata: Metadata = {
    title: "Emergency Support & Service Contracts — Axion",
    description:
        "Round-the-clock emergency response and comprehensive service contracts to ensure your critical power systems never fail when you need them most.",
};

export const revalidate = 300;

export default async function EmergencySupportPage() {
    const [hero, response, sla, technicians, benefits, lifecycle, cta] =
        await Promise.all([
            getEsHeroData(),
            getEsResponseData(),
            getEsSlaData(),
            getEsTechData(),
            getEsBenefitsData(),
            getEsLifecycleData(),
            getEsCtaData(),
        ]);

    return (
        <main>
            <EsHeroSection data={hero} />
            <EsResponseSection data={response} />
            <EsSlaSection data={sla} />
            <EsTechniciansSection data={technicians} />
            <EsBenefitsSection data={benefits} />
            <EsLifecycleSection data={lifecycle} />
            <EsCtaSection data={cta} />
        </main>
    );
}
