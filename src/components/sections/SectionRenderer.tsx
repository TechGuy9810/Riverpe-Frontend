import type { PageSection, HeroSection as HeroSectionData, CarouselPaymentMethodSection as CarouselPaymentMethodSectionData } from "@/types/strapi";
import HeroSection from "@/components/sections/hero/HeroSection";
import FeatureGridSection from "@/components/sections/feature-grid/FeatureGridSection";
import CtaBannerSection from "@/components/sections/cta-banner/CtaBannerSection";
import CtaSectionComponent from "@/components/sections/cta-section/CtaSectionComponent";
import BlogGridSection from "@/components/sections/blog-grid/BlogGridSection";
import CardGridSection from "@/components/sections/card-grid/CardGridSection";
import FaqSection from "@/components/sections/faq-section/FaqSection";
import CarouselPaymentMethodSection from "@/components/sections/carousel-payment-method/CarouselPaymentMethodSection";

interface Props {
  sections: PageSection[];
}

/**
 * Maps each Strapi __component string to its React component.
 *
 * Special pairing logic:
 *   When `sections.hero` (layout: left/right) is immediately followed by
 *   `sections.carousel-payment-method`, both are rendered inside a single
 *   HeroSection container — hero text on the left, carousel on the right.
 *   The carousel section is then skipped in the main loop to avoid duplication.
 *
 * Add new section types here as the Strapi schema grows.
 */
export default function SectionRenderer({ sections }: Props) {
  if (!sections || sections.length === 0) return null;

  const output: React.ReactNode[] = [];
  const skip = new Set<number>();

  sections.forEach((section, i) => {
    // Already consumed by a previous pairing — skip
    if (skip.has(i)) return;

    // ── Hero + Carousel pairing ─────────────────────────────────────────────
    if (section.__component === "sections.hero") {
      const next = sections[i + 1];
      if (next?.__component === "sections.carousel-payment-method") {
        skip.add(i + 1);
        output.push(
          <HeroSection
            key={`hero-${section.id}`}
            data={section as HeroSectionData}
            rightSlot={
              <CarouselPaymentMethodSection
                data={next as CarouselPaymentMethodSectionData}
              />
            }
          />
        );
        return;
      }
      // Standalone hero (no carousel sibling)
      output.push(
        <HeroSection key={`hero-${section.id}`} data={section as HeroSectionData} />
      );
      return;
    }

    // ── Standalone carousel (not paired with hero) ──────────────────────────
    if (section.__component === "sections.carousel-payment-method") {
      output.push(
        <section key={`carousel-${section.id}`} className="py-12 md:py-20">
          <div className="container">
            <CarouselPaymentMethodSection
              data={section as CarouselPaymentMethodSectionData}
            />
          </div>
        </section>
      );
      return;
    }

    // ── All other section types ─────────────────────────────────────────────
    switch (section.__component) {
      case "sections.feature-grid":
        output.push(
          <FeatureGridSection key={`feature-grid-${section.id}`} data={section} />
        );
        break;

      case "sections.cta-banner":
        output.push(
          <CtaBannerSection key={`cta-banner-${section.id}`} data={section} />
        );
        break;

      case "sections.cta-section":
        output.push(
          <CtaSectionComponent key={`cta-section-${section.id}`} data={section} />
        );
        break;

      case "sections.blog-grid":
        output.push(
          <BlogGridSection key={`blog-grid-${section.id}`} data={section} />
        );
        break;

      case "sections.card-grid":
        output.push(
          <CardGridSection key={`card-grid-${section.id}`} data={section} />
        );
        break;

      case "sections.faq-section":
        output.push(
          <FaqSection key={`faq-section-${section.id}`} data={section} />
        );
        break;

      default:
        if (process.env.NODE_ENV === "development") {
          console.warn(
            `[SectionRenderer] Unknown section component: "${(section as any).__component}"`
          );
        }
        break;
    }
  });

  return <>{output}</>;
}
