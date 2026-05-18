import Image from "next/image";
import Button from "@/components/ui/Button";
import type { HeroSection as HeroSectionData } from "@/types/strapi";
import { getStrapiImageUrl } from "@/lib/imageUrl";
import { StrapiBlockRenderer } from "@/components/Blog/StrapiBlockRenderer";

interface Props {
  data: HeroSectionData;
  /** Optional right-column content (e.g. payment carousel). Shown only on split layouts. */
  rightSlot?: React.ReactNode;
}

export default function HeroSection({ data, rightSlot }: Props) {
  const { title, subTitle, description, image, layout = "center", variant = "long", button } = data;

  // We respect explicit layout, but if rightSlot is provided and layout is center, fallback to left to avoid breaking design
  const resolvedLayout = layout === "center" && rightSlot ? "left" : layout;
  const isCenter = resolvedLayout === "center";
  const isRight = resolvedLayout === "right";
  
  const isLong = variant === "long";

  return (
    <section 
      className={`hero-gradient relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20 ${
        isLong ? "min-h-[100svh] flex flex-col justify-center" : ""
      }`}
    >
      {/* Dot-grid texture */}
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />

      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Primary blue orb — top-left */}
        <div className="animate-float absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[110px]" />
        {/* Accent purple orb — top-right */}
        <div className="animate-float-reverse absolute -right-20 top-10 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[100px]" />
        {/* Deep indigo orb — bottom-center */}
        <div className="animate-pulse-glow absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-accent-dark/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 w-full">
        <div
          className={`flex flex-col gap-8 ${
            isCenter
              ? "items-center text-center"
              : `items-start text-left ${isRight ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center lg:gap-16`
          }`}
        >
          {/* Text content */}
          <div className={isCenter ? "max-w-3xl" : "flex-1"}>
            {/* Main title */}
            <h1
              className={`animate-fade-in-up mb-6 font-bold leading-tight tracking-tight text-dark dark:text-white ${
                isCenter
                  ? "text-4xl sm:text-5xl lg:text-6xl"
                  : "text-4xl sm:text-5xl lg:text-6xl"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              {title}
            </h1>

            {/* Subtitle as standard text below title */}
            {subTitle && (
              <p 
                className="animate-fade-in-up mb-8 text-lg md:text-xl text-body-color dark:text-body-color-dark"
                style={{ animationDelay: "0.15s" }}
              >
                {subTitle}
              </p>
            )}

            {/* Rich-text description */}
            {description && Array.isArray(description) && description.length > 0 && (
              <div
                className="animate-fade-in-up mb-8 text-base md:text-lg leading-relaxed text-body-color dark:text-body-color-dark"
                style={{ animationDelay: "0.2s" }}
              >
                <StrapiBlockRenderer blocks={description as any} />
              </div>
            )}

            {/* CTA Buttons */}
            {button && button.length > 0 && (
              <div
                className="animate-fade-in-up flex flex-wrap gap-4"
                style={{
                  animationDelay: "0.3s",
                  justifyContent: isCenter ? "center" : "flex-start",
                }}
              >
                {button.map((btn, idx) => (
                  <Button key={btn.id ?? idx} data={btn} />
                ))}
              </div>
            )}
          </div>

          {/* Right column: carousel slot takes priority over image on split layouts */}
          {!isCenter && rightSlot && (
            <div className="flex-1 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              {rightSlot}
            </div>
          )}

          {/* Hero image — split layout (only when no rightSlot is provided) */}
          {image && image.length > 0 && !isCenter && !rightSlot && (
            <div className="flex-1 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-primary/10 dark:ring-primary/20">
                <Image
                  src={getStrapiImageUrl(image[0].url)}
                  alt={image[0].alternativeText ?? title}
                  width={image[0].width ?? 800}
                  height={image[0].height ?? 600}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* Hero image — center layout */}
          {image && image.length > 0 && isCenter && (
            <div className="mt-8 w-full animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-primary/10 dark:ring-primary/20">
                {/* Decorative glow behind image */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/10 to-accent/10 blur-2xl" />
                <Image
                  src={getStrapiImageUrl(image[0].url)}
                  alt={image[0].alternativeText ?? title}
                  width={image[0].width ?? 1200}
                  height={image[0].height ?? 700}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
