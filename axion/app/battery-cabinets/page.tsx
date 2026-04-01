import CabinetsHeroSection from "@/components/CabinetsHeroSection";
import CabinetsAboutSection from "@/components/CabinetsAboutSection";
import CabinetsEngineeredSection from "@/components/CabinetsEngineeredSection";
import CabinetsKeyBenefitsSection from "@/components/CabinetsKeyBenefitsSection";
import CabinetsFeaturesSection from "@/components/CabinetsFeaturesSection";
import CabinetsApplicationsSection from "@/components/CabinetsApplicationsSection";
import CabinetsApproachSection from "@/components/CabinetsApproachSection";
import CabinetsWhyChooseSection from "@/components/CabinetsWhyChooseSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import { ProductSchema, BreadcrumbSchema } from "@/components/JsonLd";
import {
    getCabinetsHeroData,
    getCabinetsAboutData,
    getCabinetsEngineeredData,
    getCabinetsKeyBenefitsData,
    getCabinetsFeaturesData,
    getCabinetsApplicationsData,
    getCabinetsApproachData,
    getCabinetsWhyChooseData,
} from "@/lib/queries/battery-cabinets";
import { getGetInTouchData } from "@/lib/queries/contact-page";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://axion.ahsan-aleem.dev";

export const metadata = {
    title: "Stationary Battery Cabinets | Axion Critical Power Solutions",
    description:
        "Purpose-built stationary battery cabinets engineered for safety, ventilation, and code compliance. Designed for VRLA, flooded, and lithium-ion installations.",
    keywords: [
        "battery cabinets",
        "stationary battery cabinets",
        "UPS battery cabinets",
        "seismic battery cabinets",
        "critical power cabinets",
        "battery enclosures",
        "Axion",
    ],
    openGraph: {
        title: "Stationary Battery Cabinets | Axion Critical Power Solutions",
        description:
            "Purpose-built stationary battery cabinets engineered for safety, ventilation, and code compliance.",
        url: `${SITE_URL}/battery-cabinets`,
        images: [
            {
                url: `${SITE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Axion Stationary Battery Cabinets",
            },
        ],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "Stationary Battery Cabinets | Axion",
        description:
            "Purpose-built battery cabinets for safety, ventilation, and code compliance.",
        images: [`${SITE_URL}/og-image.jpg`],
    },
    alternates: {
        canonical: `${SITE_URL}/battery-cabinets`,
    },
};

export default async function BatteryCabinetsPage() {
    const [hero, about, engineered, keyBenefits, features, applications, approach, whyChoose, gitData] =
        await Promise.all([
            getCabinetsHeroData(),
            getCabinetsAboutData(),
            getCabinetsEngineeredData(),
            getCabinetsKeyBenefitsData(),
            getCabinetsFeaturesData(),
            getCabinetsApplicationsData(),
            getCabinetsApproachData(),
            getCabinetsWhyChooseData(),
            getGetInTouchData(),
        ]);

    return (
        <main>
            <ProductSchema
                name="Stationary Battery Cabinets"
                description="Purpose-built stationary battery cabinets engineered for safety, ventilation, and code compliance. Designed for VRLA, flooded, and lithium-ion installations."
                url={`${SITE_URL}/battery-cabinets`}
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: SITE_URL },
                    { name: "Products", url: `${SITE_URL}/product` },
                    { name: "Battery Cabinets", url: `${SITE_URL}/battery-cabinets` },
                ]}
            />
            <CabinetsHeroSection data={hero} />
            <CabinetsAboutSection
                label={about?.label}
                description={about?.description}
                bgColor={about?.bgColor}
                labelColor={about?.labelColor}
                bodyColor={about?.bodyColor}
                labelFontSize={about?.labelFontSize}
                bodyFontSize={about?.bodyFontSize}
                marginTopOverlap={about?.marginTopOverlap}
                borderRadiusTop={about?.borderRadiusTop}
                paddingTop={about?.paddingTop}
                paddingBottom={about?.paddingBottom}
                paddingLeft={about?.paddingLeft}
                paddingRight={about?.paddingRight}
            />
            <CabinetsEngineeredSection
                label={engineered?.label}
                description={engineered?.description}
                image={engineered?.image || undefined}
                bgColor={engineered?.bgColor}
                labelColor={engineered?.labelColor}
                bodyColor={engineered?.bodyColor}
                accentColor={engineered?.accentColor}
                labelFontSize={engineered?.labelFontSize}
                bodyFontSize={engineered?.bodyFontSize}
                marginTopOverlap={engineered?.marginTopOverlap}
                borderRadiusTop={engineered?.borderRadiusTop}
                paddingTop={engineered?.paddingTop}
                paddingBottom={engineered?.paddingBottom}
                paddingLeft={engineered?.paddingLeft}
                paddingRight={engineered?.paddingRight}
            />
            <CabinetsKeyBenefitsSection
                heading={keyBenefits?.heading}
                cards={keyBenefits?.cards}
                headingTag={keyBenefits?.headingTag}
                cardHeadingTag={keyBenefits?.cardHeadingTag}
                headingColor={keyBenefits?.headingColor}
                headingFontSize={keyBenefits?.headingFontSize}
                headingFontWeight={keyBenefits?.headingFontWeight}
                bgColor={keyBenefits?.bgColor}
                marginTopOverlap={keyBenefits?.marginTopOverlap}
                borderRadiusTop={keyBenefits?.borderRadiusTop}
                paddingTop={keyBenefits?.paddingTop}
                paddingBottom={keyBenefits?.paddingBottom}
                paddingLeft={keyBenefits?.paddingLeft}
                paddingRight={keyBenefits?.paddingRight}
            />
            <CabinetsFeaturesSection
                label={features?.label}
                features={features?.features}
                image={features?.image || undefined}
                bgColor={features?.bgColor}
                labelColor={features?.labelColor}
                bodyColor={features?.bodyColor}
                iconColor={features?.iconColor}
                labelFontSize={features?.labelFontSize}
                bodyFontSize={features?.bodyFontSize}
                marginTopOverlap={features?.marginTopOverlap}
                borderRadiusTop={features?.borderRadiusTop}
                paddingTop={features?.paddingTop}
                paddingBottom={features?.paddingBottom}
                paddingLeft={features?.paddingLeft}
                paddingRight={features?.paddingRight}
            />
            <CabinetsApplicationsSection
                label={applications?.label}
                heading={applications?.heading}
                cards={applications?.cards}
                headingTag={applications?.headingTag}
                cardHeadingTag={applications?.cardHeadingTag}
                headingColor={applications?.headingColor}
                headingFontSize={applications?.headingFontSize}
                headingFontWeight={applications?.headingFontWeight}
                labelColor={applications?.labelColor}
                bgColor={applications?.bgColor}
                marginTopOverlap={applications?.marginTopOverlap}
                borderRadiusTop={applications?.borderRadiusTop}
                paddingTop={applications?.paddingTop}
                paddingBottom={applications?.paddingBottom}
                paddingLeft={applications?.paddingLeft}
                paddingRight={applications?.paddingRight}
            />
            <CabinetsApproachSection
                label={approach?.label}
                description={approach?.description}
                items={approach?.items}
                bgColor={approach?.bgColor}
                labelColor={approach?.labelColor}
                bodyColor={approach?.bodyColor}
                stepBgColor={approach?.stepBgColor}
                stepTextColor={approach?.stepTextColor}
                labelFontSize={approach?.labelFontSize}
                bodyFontSize={approach?.bodyFontSize}
                marginTopOverlap={approach?.marginTopOverlap}
                borderRadiusTop={approach?.borderRadiusTop}
                paddingTop={approach?.paddingTop}
                paddingBottom={approach?.paddingBottom}
                paddingLeft={approach?.paddingLeft}
                paddingRight={approach?.paddingRight}
            />
            <CabinetsWhyChooseSection
                headingLine1={whyChoose?.headingLine1}
                headingHighlight={whyChoose?.headingHighlight}
                headingLine3={whyChoose?.headingLine3}
                cards={whyChoose?.cards}
                headingTag={whyChoose?.headingTag}
                headingColor={whyChoose?.headingColor}
                headingFontSize={whyChoose?.headingFontSize}
                headingFontWeight={whyChoose?.headingFontWeight}
                bgColor={whyChoose?.bgColor}
                highlightColor={whyChoose?.highlightColor}
                marginTopOverlap={whyChoose?.marginTopOverlap}
                borderRadiusTop={whyChoose?.borderRadiusTop}
                paddingTop={whyChoose?.paddingTop}
                paddingBottom={whyChoose?.paddingBottom}
                paddingLeft={whyChoose?.paddingLeft}
                paddingRight={whyChoose?.paddingRight}
            />
            <GetInTouchSection data={gitData} />
        </main>
    );
}
