import type { CardGridSection as CardGridSectionData } from "@/types/strapi";
import PartnerFeatureGrid from "@/components/sections/card-grid/PartnerFeatureGrid";
import TestimonialStatsGrid from "@/components/sections/card-grid/TestimonialStatsGrid";

interface Props {
  data: CardGridSectionData;
}

/**
 * Dispatcher — reads `variant` and renders the correct card-grid layout.
 *
 * partner-feature  → 3-column bordered card grid with icon, title, description & bullets
 * testimonial-stats → 2-column spacious cards with label, quote & key stats
 */
export default function CardGridSection({ data }: Props) {
  const variant = data.variant ?? "partner-feature";

  if (variant === "testimonial-stats") {
    return <TestimonialStatsGrid data={data} />;
  }

  return <PartnerFeatureGrid data={data} />;
}
