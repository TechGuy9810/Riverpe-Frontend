import type { CarouselPaymentMethodSection as CarouselPaymentMethodSectionData } from '@/types/strapi';
import PaymentMethodCarousel from './PaymentMethodCarousel';

interface Props {
  data: CarouselPaymentMethodSectionData;
}

/**
 * CarouselPaymentMethodSection — server wrapper.
 * Renders the optional title/subtitle header and delegates carousel
 * rendering to the 'use client' PaymentMethodCarousel component.
 *
 * Intended to be slotted into HeroSection's rightSlot when the two
 * sections appear consecutively in the Strapi dynamic zone.
 */
export default function CarouselPaymentMethodSection({ data }: Props) {
  const { title, subtitle, countryGroups } = data;

  if (!countryGroups || countryGroups.length === 0) return null;

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Optional heading — shown when the carousel renders standalone */}
      {(title || subtitle) && (
        <div className="mb-1">
          {title && (
            <h2 className="text-2xl font-bold text-dark dark:text-white md:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-base text-body-color dark:text-body-color-dark">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <PaymentMethodCarousel countryGroups={countryGroups} />
    </div>
  );
}
