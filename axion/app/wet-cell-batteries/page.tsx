import WetCellHeroSection from "@/components/WetCellHeroSection";
import WetCellAboutSection from "@/components/WetCellAboutSection";
import WetCellApplicationsSection from "@/components/WetCellApplicationsSection";
import WetCellKeyBenefitsSection from "@/components/WetCellKeyBenefitsSection";
import WetCellWhyChooseSection from "@/components/WetCellWhyChooseSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import {
    getWetCellHeroData,
    getWetCellAboutData,
    getWetCellApplicationsData,
    getWetCellKeyBenefitsData,
    getWetCellWhyChooseData,
} from "@/lib/queries/wet-cell-batteries";
import { getGetInTouchData } from "@/lib/queries/contact-page";

export const metadata = {
    title: "Wet Cell (Flooded) Batteries | Axion Critical Power Solutions",
    description:
        "High-capacity Wet Cell (Flooded) batteries for utility substations, industrial DC power plants, and large-scale UPS systems. Extended service life and superior deep-discharge recovery.",
};

export default async function WetCellBatteriesPage() {
    const [hero, about, applications, keyBenefits, whyChoose, gitData] = await Promise.all([
        getWetCellHeroData(),
        getWetCellAboutData(),
        getWetCellApplicationsData(),
        getWetCellKeyBenefitsData(),
        getWetCellWhyChooseData(),
        getGetInTouchData(),
    ]);

    return (
        <main>
            <WetCellHeroSection data={hero} />
            <WetCellAboutSection
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
            <WetCellApplicationsSection
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
            <WetCellKeyBenefitsSection
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
            <WetCellWhyChooseSection
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
