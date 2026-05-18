"use client";

import type { CtaBannerSection as CtaBannerSectionData } from "@/types/strapi";
import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl } from "@/lib/imageUrl";
import { useRef, useState, useEffect } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [cards]);

  const scrollBy = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const clientWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

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

        {/* Cards slider */}
        {cards && cards.length > 0 && (
          <div className="relative group">
            {/* Left Button */}
            {canScrollLeft && (
              <button
                onClick={() => scrollBy("left")}
                className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-primary hover:bg-gray-50 border border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white"
                aria-label="Scroll left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {cards.map((card) => {
                const cardUrl = card.button?.href || "#";
                return (
                  <Link
                    href={cardUrl}
                    key={card.id}
                    className="w-full sm:w-[calc(50%-12px)] shrink-0 snap-start flex flex-row items-center overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-800/60"
                  >
                    {/* Card image */}
                    {card.image?.url && (
                      <div className="relative h-28 w-28 shrink-0 overflow-hidden sm:h-32 sm:w-32 my-4 ml-4 sm:my-5 sm:ml-5">
                        <Image
                          src={getStrapiImageUrl(card.image.url)}
                          alt={card.image.alternativeText ?? card.title ?? ""}
                          fill
                          className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Card content */}
                    <div className="flex flex-1 flex-col justify-center gap-2 p-4 sm:p-5">
                      {card.title && (
                        <h3 className="text-base font-semibold text-dark dark:text-white">
                          {card.title}
                        </h3>
                      )}
                      {card.description && (
                        <p className="text-xs sm:text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                          {card.description}
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Right Button */}
            {canScrollRight && (
              <button
                onClick={() => scrollBy("right")}
                className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-primary hover:bg-gray-50 border border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white"
                aria-label="Scroll right"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
