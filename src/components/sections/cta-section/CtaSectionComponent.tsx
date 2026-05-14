import { CtaSectionData } from "@/types/strapi";
import Button from "@/components/ui/Button";

interface Props {
  data: CtaSectionData;
}

/**
 * CtaSectionComponent — full-width call-to-action with rich blue→purple gradient.
 * Works identically in light and dark modes (gradient is self-contained).
 */
export default function CtaSectionComponent({ data }: Props) {
  const { title, subtitle, button } = data;

  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center md:p-20"
          style={{
            background: "linear-gradient(135deg, #2563EB 0%, #3B82F6 30%, #818CF8 65%, #6366F1 100%)",
          }}
        >
          {/* Background glow orbs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />
          </div>

          {/* Dot texture overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10">
            {title && (
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto mb-10 max-w-2xl text-base md:text-lg text-white/80">
                {subtitle}
              </p>
            )}

            {button && button.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-4">
                {button.map((btn, idx) => {
                  const adjustedBtn = {
                    ...btn,
                    variant: btn.variant ?? ("secondary" as const),
                  };
                  return (
                    <Button
                      key={btn.id ?? idx}
                      data={adjustedBtn}
                      className="!bg-white !text-primary hover:!bg-gray-100 !border-white"
                    />
                  );
                })}
              </div>
            )}

            {/* Fallback when no buttons from Strapi */}
            {(!button || button.length === 0) && (
              <a
                href="/contact"
                className="btn !bg-white !text-primary hover:!bg-gray-100 !border-white"
              >
                Get Started
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
