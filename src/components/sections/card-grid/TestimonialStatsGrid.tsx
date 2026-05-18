import type { CardGridSection } from "@/types/strapi";
import { StrapiBlockRenderer } from "@/components/Blog/StrapiBlockRenderer";

interface Props {
  data: CardGridSection;
}

/**
 * testimonial-stats variant:
 * Large showcase cards with title, category label, description/quote text, and key statistics.
 * Spacious 2-column layout with highlighted numerical stats at the bottom.
 */
export default function TestimonialStatsGrid({ data }: Props) {
  const { title, subtitle, cards } = data;

  return (
    <section className="section-tinted py-12 md:py-20 dark:bg-gray-900">
      <div className="container">
        {/* Section header */}
        {(title || subtitle) && (
          <div className="mb-10 md:mb-14 text-center">
            {title && (
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-dark dark:text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto max-w-2xl text-base text-body-color dark:text-body-color-dark">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Cards grid — 2 columns */}
        {cards && cards.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.id}
                className="testimonial-stats-card group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {/* Decorative accent blob */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
                  }}
                />

                {/* Top section: label + title + description */}
                <div className="flex flex-col gap-3">
                  {/* Category label */}
                  {card.label && (
                    <span className="inline-block text-sm font-semibold text-primary dark:text-primary-light">
                      {card.label}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-dark dark:text-white leading-snug">
                    {card.title}
                  </h3>

                  {/* Description / quote */}
                  {card.description &&
                    Array.isArray(card.description) &&
                    card.description.length > 0 && (
                      <div className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                        <StrapiBlockRenderer blocks={card.description as any} />
                      </div>
                    )}
                </div>

                {/* Stats row at bottom */}
                {card.stats && card.stats.length > 0 && (
                  <div className="flex flex-wrap gap-6 border-t border-stroke-stroke dark:border-stroke-dark pt-5">
                    {card.stats.map((stat, idx) => (
                      <div key={stat.id ?? idx} className="flex flex-col gap-0.5">
                        <span className="text-2xl font-bold text-primary dark:text-primary-light leading-none">
                          {stat.value}
                        </span>
                        <span className="text-xs text-body-color dark:text-body-color-dark">
                          {stat.label}
                        </span>
                      </div>
                    ))}
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
