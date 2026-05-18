import type { CardGridSection } from "@/types/strapi";
import { IconBlock } from "@/components/ui/Icon";
import { StrapiBlockRenderer } from "@/components/Blog/StrapiBlockRenderer";

interface Props {
  data: CardGridSection;
}

/**
 * partner-feature variant:
 * Cards with icon, title, description, and bullet point list.
 * 3-column bordered card grid with subtle shadows and compact content.
 */
export default function PartnerFeatureGrid({ data }: Props) {
  const { title, subtitle, cards } = data;

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-dark">
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

        {/* Cards grid */}
        {cards && cards.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.id}
                className="partner-feature-card group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {/* Icon */}
                {card.icon && (
                  <div className="shrink-0">
                    <IconBlock
                      data={card.icon}
                      isMonochrome={true}
                      className="!bg-primary text-white !rounded-xl !w-12 !h-12"
                    />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-dark dark:text-white leading-snug">
                  {card.title}
                </h3>

                {/* Description (rich text) */}
                {card.description &&
                  Array.isArray(card.description) &&
                  card.description.length > 0 && (
                    <div className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                      <StrapiBlockRenderer blocks={card.description as any} />
                    </div>
                  )}

                {/* Bullet list */}
                {card.bullets && card.bullets.length > 0 && (
                  <ul className="mt-auto flex flex-col gap-2">
                    {card.bullets.map((bullet, idx) => (
                      <li
                        key={bullet.id ?? idx}
                        className="flex items-start gap-2 text-sm text-body-color dark:text-body-color-dark"
                      >
                        {/* Dot accent */}
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        {bullet.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
