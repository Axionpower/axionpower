import { Metadata } from "next";
import {
  getFAQHeroData,
  getFAQLifespanData,
  getFAQLeadTimesData,
  getFAQEndOfLifeData,
  getFAQWhyData,
  getFAQCtaData,
} from "@/lib/queries/faqs";
import FAQHeroSection     from "@/components/FAQHeroSection";
import FAQLifespanSection from "@/components/FAQLifespanSection";
import FAQLeadTimesSection from "@/components/FAQLeadTimesSection";
import FAQEndOfLifeSection from "@/components/FAQEndOfLifeSection";
import FAQWhySection      from "@/components/FAQWhySection";
import FAQCtaSection      from "@/components/FAQCtaSection";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "FAQs | Axion Critical Power Solutions",
  description:
    "Answers to common questions about VRLA and wet cell battery performance, maintenance, lead times, warranties, and environmentally responsible end-of-life handling.",
};

export default async function FAQsPage() {
  const [hero, lifespan, leadTimes, endOfLife, why, cta] = await Promise.all([
    getFAQHeroData(),
    getFAQLifespanData(),
    getFAQLeadTimesData(),
    getFAQEndOfLifeData(),
    getFAQWhyData(),
    getFAQCtaData(),
  ]);

  return (
    <main>
      <FAQHeroSection      data={hero}      />
      <FAQLifespanSection  data={lifespan}  />
      <FAQLeadTimesSection data={leadTimes} />
      <FAQEndOfLifeSection data={endOfLife} />
      <FAQWhySection       data={why}       />
      <FAQCtaSection       data={cta}       />
    </main>
  );
}
