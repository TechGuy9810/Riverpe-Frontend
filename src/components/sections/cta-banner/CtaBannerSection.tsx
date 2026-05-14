import type { CtaBannerSection as CtaBannerSectionData } from "@/types/strapi";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { getStrapiImageUrl } from "@/lib/imageUrl";

interface Props {
  data: CtaBannerSectionData;
}

/**
 * CtaBannerSection — product/use-case cards.
 * Light: white bg with blue-tinted cards and primary accents.
 * Dark: deeper surface with glass-style cards.
 */
export default function CtaBannerSection({ data }: Props) {
  const { title, description, cards } = data;

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20 dark:bg-gray-900">
      {/* Subtle mesh orbs — purely decorative */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 right-1/4 h-64 w-64 rounded-full bg-primary/8 blur-[80px] dark:bg-primary/12" />
        <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-accent/8 blur-[60px] dark:bg-accent/12" />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        {(title || description) && (
          <div className="mb-10 md:mb-14 text-center">
            {title && (
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                <span className="gradient-text">{title}</span>
              </h2>
            )}
            {description && (
              <p className="mx-auto max-w-2xl text-base text-body-color dark:text-body-color-dark">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Cards grid */}
        {cards && cards.length > 0 && (
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover dark:border-white/8 dark:bg-gray-800/60 dark:hover:border-primary/30"
              >
                {/* Top gradient accent line */}
                <div className="h-[3px] w-full bg-gradient-to-r from-primary via-accent to-accent-dark" />

                {/* Card image */}
                {card.image?.url && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={getStrapiImageUrl(card.image.url)}
                      alt={card.image.alternativeText ?? card.title ?? ""}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Card content */}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  {card.title && (
                    <h3 className="text-lg font-semibold text-dark dark:text-white">
                      {card.title}
                    </h3>
                  )}
                  {card.description && (
                    <p className="flex-1 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                      {card.description}
                    </p>
                  )}
                  {card.button && (
                    <div className="mt-2">
                      <Button data={card.button} defaultVariant="outline" />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
