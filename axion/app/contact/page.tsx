import type { Metadata } from "next";
import ContactHeroSection from "@/components/ContactHeroSection";
import ContactFormSection from "@/components/ContactFormSection";
import ContactWhySection from "@/components/ContactWhySection";
import ContactCtaSection from "@/components/ContactCtaSection";
import {
    getContactPageHeroData,
    getContactPageInfoData,
    getContactPageWhyData,
    getContactFormLabels,
} from "@/lib/queries/contact-page";

export const metadata: Metadata = {
    title: "Contact Axion Critical Power Solutions",
    description:
        "Connect with our battery systems experts. Get guidance on VRLA and flooded battery technologies, request a quote, or ask about compliance and lifecycle management.",
};

export default async function ContactPage() {
    const [hero, info, why, formLabels] = await Promise.all([
        getContactPageHeroData(),
        getContactPageInfoData(),
        getContactPageWhyData(),
        getContactFormLabels(),
    ]);

    return (
        <main>
            <ContactHeroSection data={hero} />
            <ContactFormSection contactInfo={info} labels={formLabels} />
            <ContactWhySection data={why} />
            <ContactCtaSection data={why} />
        </main>
    );
}
