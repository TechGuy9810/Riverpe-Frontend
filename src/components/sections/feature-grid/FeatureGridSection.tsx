import type { FeatureGridSection as FeatureGridSectionData } from "@/types/strapi";
import SimpleGrid from "@/components/sections/feature-grid/SimpleGrid";
import SplitStats from "@/components/sections/feature-grid/SplitStats";

interface Props {
  data: FeatureGridSectionData;
}

/**
 * Dispatcher — reads `variant` and renders the correct layout.
 * simple-grid → centered heading + equal feature cards grid
 * split-stats → big left content + right stats/features grid
 */
export default function FeatureGridSection({ data }: Props) {
  const variant = data.variant ?? "simple-grid";

  if (variant === "split-stats") {
    return <SplitStats data={data} />;
  }

  return <SimpleGrid data={data} />;
}
