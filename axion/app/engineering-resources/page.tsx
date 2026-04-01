import { Metadata } from "next";
import {
  getERHeroData,
  getERLibraryData,
  getERGuidesData,
  getERToolsData,
  getERAppNotesData,
  getERStandardsData,
  getERSupportData,
  getERCtaData,
} from "@/lib/queries/engineering-resources";
import ERHeroSection     from "@/components/ERHeroSection";
import ERLibrarySection  from "@/components/ERLibrarySection";
import ERGuidesSection   from "@/components/ERGuidesSection";
import ERToolsSection    from "@/components/ERToolsSection";
import ERAppNotesSection from "@/components/ERAppNotesSection";
import ERStandardsSection from "@/components/ERStandardsSection";
import ERSupportSection  from "@/components/ERSupportSection";
import ERCtaSection      from "@/components/ERCtaSection";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Engineering Resources | Axion Critical Power Solutions",
  description:
    "Download datasheets, CAD files, CSI specification templates, sizing worksheets, technical guides, and application notes for VRLA and wet cell battery systems — free for engineers and specifiers.",
};

export default async function EngineeringResourcesPage() {
  const [hero, library, guides, tools, appNotes, standards, support, cta] =
    await Promise.all([
      getERHeroData(),
      getERLibraryData(),
      getERGuidesData(),
      getERToolsData(),
      getERAppNotesData(),
      getERStandardsData(),
      getERSupportData(),
      getERCtaData(),
    ]);

  return (
    <main>
      <ERHeroSection      data={hero}     />
      <ERLibrarySection   data={library}  />
      <ERGuidesSection    data={guides}   />
      <ERToolsSection     data={tools}    />
      <ERAppNotesSection  data={appNotes} />
      <ERStandardsSection data={standards}/>
      <ERSupportSection   data={support}  />
      <ERCtaSection       data={cta}      />
    </main>
  );
}
