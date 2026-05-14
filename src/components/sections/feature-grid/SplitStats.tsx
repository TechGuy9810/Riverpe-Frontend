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
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
          {/* Left — big content */}
          <div className="flex flex-col gap-6">
            {/* Blue vertical accent line */}
            {title && (
              <div className="flex gap-3 sm:gap-5">
                <div className="mt-1.5 w-1 shrink-0 rounded-full bg-gradient-to-b from-primary via-accent to-accent-dark" />
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
                  {title}
                </h2>
              </div>
            )}
            {description && Array.isArray(description) && description.length > 0 && (
              <div className="text-base leading-relaxed text-white/70">
                <StrapiBlockRenderer blocks={description as any} />
              </div>
            )}
          </div>

          {/* Right — stats/features grid */}
          {features && features.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="stat-card flex items-start gap-3 sm:gap-4 p-4 sm:p-5"
                >
                  {/* Icon */}
                  {feature.icon && (
                    <div className="shrink-0">
                      <IconBlock
                        data={feature.icon}
                        className="!bg-white/08 !rounded-lg"
                      />
                    </div>
                  )}

                  {/* Content stack */}
                  <div className="flex flex-1 flex-col gap-1 pt-0.5">
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    {feature.descriptions && (
                      <p className="text-xs sm:text-sm leading-relaxed text-white/60">
                        {feature.descriptions}
                      </p>
                    )}

                    {/* Optional link */}
                    {feature.link && (
                      <div className="mt-1 pt-1">
                        <Button data={feature.link} defaultVariant="outline" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
