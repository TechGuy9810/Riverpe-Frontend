'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { CarouselCountryGroup } from '@/types/strapi';
import { IconBlock } from '@/components/ui/Icon';

interface Props {
  countryGroups: CarouselCountryGroup[];
}

/**
 * PaymentMethodCarousel — Embla-powered client carousel.
 * Each slide shows one country with all its supported payment methods.
 * Loops infinitely; dot-nav + prev/next arrow controls.
 */
export default function PaymentMethodCarousel({ countryGroups }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Sync state on slide change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
    
    // Auto-play interval
    let intervalId: NodeJS.Timeout;
    
    const stopAutoplay = () => clearInterval(intervalId);

    const startAutoplay = () => {
      stopAutoplay(); // Prevent overlapping intervals!
      intervalId = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }, 4000); // 4 seconds
    };

    startAutoplay();
    
    // Stop autoplay when user interacts
    emblaApi.on('pointerDown', stopAutoplay);
    // Restart when interaction ends
    emblaApi.on('pointerUp', startAutoplay);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('pointerDown', stopAutoplay);
      emblaApi.off('pointerUp', startAutoplay);
      stopAutoplay();
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo  = useCallback((idx: number) => emblaApi?.scrollTo(idx), [emblaApi]);

  if (!countryGroups || countryGroups.length === 0) return null;

  return (
    <div className="payment-carousel flex flex-col gap-5 w-full">
      {/* ── Viewport ── */}
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {countryGroups.map((group) => (
            <div key={group.id} className="min-w-0 flex-[0_0_100%]">
              <div className="glass-card rounded-2xl p-5 md:p-7 shadow-feature">

                {/* ── Slide header ── */}
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary dark:text-accent-light">
                      Country
                    </p>
                    <h3 className="text-xl font-bold leading-tight text-dark dark:text-white">
                      {group.country}
                    </h3>
                  </div>
                  {group.badge && (
                    <span className="badge-primary shrink-0 text-xs">
                      {group.badge}
                    </span>
                  )}
                </div>

                {/* ── Payment methods ── */}
                {group.methods && group.methods.length > 0 ? (
                  <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {group.methods.map((method, idx) => (
                      <li
                        key={method.id ?? idx}
                        className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-white/5 dark:hover:bg-primary/10"
                      >
                        {/* Icon */}
                        {method.icon && (
                          <IconBlock
                            data={method.icon}
                            isMonochrome={true}
                            className="!h-9 !w-9 shrink-0 !rounded-lg !bg-primary text-white"
                          />
                        )}

                        {/* Labels */}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-dark dark:text-white">
                            {method.name}
                          </p>
                          {method.subtitle && (
                            <p className="truncate text-xs text-body-color dark:text-body-color-dark">
                              {method.subtitle}
                            </p>
                          )}
                        </div>

                        {/* Tag badge */}
                        {method.tag && (
                          <span className="ml-auto shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary dark:bg-accent/15 dark:text-accent-light">
                            {method.tag}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    No payment methods listed.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Controls row: prev · dots · next ── */}
      <div className="flex items-center justify-between gap-3">
        {/* Prev */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Previous country"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stroke-stroke bg-white text-body-color shadow-card transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-card-hover disabled:opacity-30 dark:border-stroke-dark dark:bg-navy-surface dark:hover:border-primary"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {countryGroups.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === idx
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-gray-300 hover:bg-primary/50 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Next country"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stroke-stroke bg-white text-body-color shadow-card transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-card-hover disabled:opacity-30 dark:border-stroke-dark dark:bg-navy-surface dark:hover:border-primary"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
