import type { FeatureGridSection } from "@/types/strapi";
import { IconBlock } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { StrapiBlockRenderer } from "@/components/Blog/StrapiBlockRenderer";

interface Props {
  data: FeatureGridSection;
}

/**
 * split-stats variant:
 * - Dark navy background — creates strong visual contrast in the page rhythm
 * - Left column: large heading + description (white text)
 * - Right column: stat cards with top blue/purple accent border
 */
export default function SplitStats({ data }: Props) {
  const { title, description, features } = data;

  return (
    <section className="section-navy py-12 md:py-20">
      {/* Subtle radial glow behind content */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[80px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-20 lg:items-stretch">
          {/* Left — feature-card (white background on all screens) */}
          <div className="feature-card p-6 sm:p-8 h-full">
            <div className="flex flex-col gap-6">
              {title && (
                <div className="flex gap-3 sm:gap-5">
                  <div className="mt-1.5 w-1 shrink-0 rounded-full bg-gradient-to-b from-primary via-accent to-accent-dark" />
                  <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
                    {title}
                  </h2>
                </div>
              )}

              {description && Array.isArray(description) && description.length > 0 && (
                <div className="text-base leading-relaxed text-gray-700 [&_*]:text-gray-700">
                  <StrapiBlockRenderer blocks={description as any} />
                </div>
              )}
            </div>
          </div>

          {/* Right — stats/features grid */}
          {features && features.length > 0 && (
            <div className="grid grid-cols-2 gap-5 auto-rows-fr h-full">
              {features.map((feature) => (
                <div key={feature.id} className="stat-card flex flex-col items-start gap-4 p-6 h-full w-full">
                  {/* Icon (top) */}
                  {feature.icon && (
                    <div className="mb-3">
                      <IconBlock data={feature.icon} className="rounded-md" />
                    </div>
                  )}

                  {/* Heading (bigger & bolder) */}
                  <h3 className="stat-value text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  {feature.descriptions && (
                    <p className="stat-desc mt-2 text-sm text-gray-600">
                      {feature.descriptions}
                    </p>
                  )}

                  {/* Optional link */}
                  {feature.link && (
                    <div className="mt-auto pt-1">
                      <Button data={feature.link} defaultVariant="outline" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
