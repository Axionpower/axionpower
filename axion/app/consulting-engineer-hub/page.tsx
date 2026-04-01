import { Metadata } from "next";
import {
  getCEHeroData,
  getCEResourcesData,
  getCESelectionData,
  getCESpecSupportData,
  getCEStandardsData,
  getCEApplicationsData,
  getCEWhyData,
  getCECtaData,
} from "@/lib/queries/consulting-engineer-hub";
import CEHeroSection        from "@/components/CEHeroSection";
import CEResourcesSection   from "@/components/CEResourcesSection";
import CESelectionSection   from "@/components/CESelectionSection";
import CESpecSupportSection from "@/components/CESpecSupportSection";
import CEStandardsSection   from "@/components/CEStandardsSection";
import CEApplicationsSection from "@/components/CEApplicationsSection";
import CEWhySection         from "@/components/CEWhySection";
import CECtaSection         from "@/components/CECtaSection";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Consulting Engineer Hub | Axion Critical Power Solutions",
  description:
    "Technical specification support for consulting engineers and specifiers — datasheets, CSI MasterFormat language, basis-of-design documents, CAD files, and compliance resources for VRLA and wet cell battery systems.",
};

export default async function ConsultingEngineerHubPage() {
  const [hero, resources, selection, specSupport, standards, applications, why, cta] =
    await Promise.all([
      getCEHeroData(),
      getCEResourcesData(),
      getCESelectionData(),
      getCESpecSupportData(),
      getCEStandardsData(),
      getCEApplicationsData(),
      getCEWhyData(),
      getCECtaData(),
    ]);

  return (
    <main>
      <CEHeroSection         data={hero}         />
      <CEResourcesSection    data={resources}    />
      <CESelectionSection    data={selection}    />
      <CESpecSupportSection  data={specSupport}  />
      <CEStandardsSection    data={standards}    />
      <CEApplicationsSection data={applications} />
      <CEWhySection          data={why}          />
      <CECtaSection          data={cta}          />
    </main>
  );
}
