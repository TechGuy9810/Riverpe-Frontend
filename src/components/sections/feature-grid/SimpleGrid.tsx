import type { FeatureGridSection } from "@/types/strapi";
import { IconBlock } from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { StrapiBlockRenderer } from "@/components/Blog/StrapiBlockRenderer";

interface Props {
  data: FeatureGridSection;
}

/**
 * simple-grid variant:
 * - Soft blue-tinted section background (light) / dark navy (dark)
 * - Centered heading + description
 * - Feature cards with blue left-border accent
 */
export default function SimpleGrid({ data }: Props) {
  const { title, description, features } = data;

  return (
    <section className="section-tinted py-12 md:py-20">
      <div className="container">
        {/* Section header */}
        {(title || description) && (
          <div className="mb-10 md:mb-14 text-center">
            {title && (
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                <span className="gradient-text">{title}</span>
              </h2>
            )}
            {description && Array.isArray(description) && description.length > 0 && (
              <div className="mx-auto max-w-2xl text-base text-body-color dark:text-body-color-dark">
                <StrapiBlockRenderer blocks={description as any} />
              </div>
            )}
          </div>
        )}

        {/* Feature cards */}
        {features && features.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="feature-card group flex flex-col gap-4 p-6"
              >
                {/* Icon wrapper with gradient bg */}
                {feature.icon && (
                  <div className="w-fit rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-3 dark:from-primary/15 dark:to-accent/15">
                    <IconBlock data={feature.icon} />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold text-dark dark:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                {feature.descriptions && (
                  <p className="flex-1 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                    {feature.descriptions}
                  </p>
                )}

                {/* Link button */}
                {feature.link && (
                  <div className="mt-auto pt-2">
                    <Button data={feature.link} defaultVariant="outline" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
