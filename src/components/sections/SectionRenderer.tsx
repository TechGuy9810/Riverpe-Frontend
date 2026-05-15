import { PageSection } from "@/types/strapi";
import HeroSection from "@/components/sections/hero/HeroSection";
import FeatureGridSection from "@/components/sections/feature-grid/FeatureGridSection";
import CtaBannerSection from "@/components/sections/cta-banner/CtaBannerSection";
import CtaSectionComponent from "@/components/sections/cta-section/CtaSectionComponent";
import BlogGridSection from "@/components/sections/blog-grid/BlogGridSection";
import CardGridSection from "@/components/sections/card-grid/CardGridSection";
import FaqSection from "@/components/sections/faq-section/FaqSection";

interface Props {
  sections: PageSection[];
}

/**
 * Maps each Strapi __component string to its React component.
 * Add new section types here as the Strapi schema grows.
 */
export default function SectionRenderer({ sections }: Props) {
  if (!sections || sections.length === 0) return null;

  return (
    <>
      {sections.map((section) => {
        switch (section.__component) {
          case "sections.hero":
            return <HeroSection key={`hero-${section.id}`} data={section} />;

          case "sections.feature-grid":
            return (
              <FeatureGridSection
                key={`feature-grid-${section.id}`}
                data={section}
              />
            );

          case "sections.cta-banner":
            return (
              <CtaBannerSection
                key={`cta-banner-${section.id}`}
                data={section}
              />
            );

          case "sections.cta-section":
            return (
              <CtaSectionComponent
                key={`cta-section-${section.id}`}
                data={section}
              />
            );

          case "sections.blog-grid":
            return (
              <BlogGridSection
                key={`blog-grid-${section.id}`}
                data={section}
              />
            );

          case "sections.card-grid":
            return (
              <CardGridSection
                key={`card-grid-${section.id}`}
                data={section}
              />
            );

          case "sections.faq-section":
            return (
              <FaqSection
                key={`faq-section-${section.id}`}
                data={section}
              />
            );

          default:
            // Unknown section — log in dev, render nothing in prod
            if (process.env.NODE_ENV === "development") {
              console.warn(
                `[SectionRenderer] Unknown section component: "${(section as any).__component}"`
              );
            }
            return null;
        }
      })}
    </>
  );
}
