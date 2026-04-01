import VrlaHeroSection from "@/components/VrlaHeroSection";
import VrlaAboutSection from "@/components/VrlaAboutSection";
import VrlaApplicationsSection from "@/components/VrlaApplicationsSection";
import VrlaKeyBenefitsSection from "@/components/VrlaKeyBenefitsSection";
import VrlaWhyChooseSection from "@/components/VrlaWhyChooseSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import {
    getVrlaHeroData,
    getVrlaAboutData,
    getVrlaApplicationsData,
    getVrlaKeyBenefitsData,
    getVrlaWhyChooseData,
} from "@/lib/queries/vrla-batteries";
import { getGetInTouchData } from "@/lib/queries/contact-page";

export const metadata = {
    title: "VRLA Batteries | Axion Critical Power Solutions",
    description:
        "High-performance, low-maintenance VRLA (Valve-Regulated Lead-Acid) batteries for mission-critical applications. Ideal for UPS, DC power plants, and standby systems.",
};

export default async function VrlaBatteriesPage() {
    const [hero, about, applications, keyBenefits, whyChoose, gitData] = await Promise.all([
        getVrlaHeroData(),
        getVrlaAboutData(),
        getVrlaApplicationsData(),
        getVrlaKeyBenefitsData(),
        getVrlaWhyChooseData(),
        getGetInTouchData(),
    ]);

    return (
        <main>
            <VrlaHeroSection data={hero} />
            <VrlaAboutSection
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
            <VrlaApplicationsSection
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
            <VrlaKeyBenefitsSection
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
            <VrlaWhyChooseSection
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
