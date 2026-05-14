import Image from "next/image";
import Button from "@/components/ui/Button";
import type { HeroSection as HeroSectionData } from "@/types/strapi";
import { API_BASE_URL } from "@/lib/endpoints";
import { StrapiBlockRenderer } from "@/components/Blog/StrapiBlockRenderer";

interface Props {
  data: HeroSectionData;
}

export default function HeroSection({ data }: Props) {
  const { title, subTitle, description, image, layout = "center", button } = data;

  const isCenter = layout === "center";

  return (
    <section className="hero-gradient relative overflow-hidden pt-[120px] pb-[70px] md:pt-[200px] md:pb-[120px]">
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

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent dark:from-black/40" />

      <div className="container relative z-10">
        <div
          className={`flex flex-col gap-8 ${
            isCenter
              ? "items-center text-center"
              : "items-start text-left lg:flex-row lg:items-center lg:gap-16"
          }`}
        >
          {/* Text content */}
          <div className={isCenter ? "max-w-3xl" : "flex-1"}>
            {/* Eyebrow badge */}
            {subTitle && (
              <p className="badge-primary animate-fade-in-up mb-5">
                {/* Glowing dot */}
                <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                {subTitle}
              </p>
            )}

            {/* Main title */}
            <h1
              className={`animate-fade-in-up mb-6 font-bold leading-tight tracking-tight text-dark dark:text-white ${
                isCenter
                  ? "text-4xl sm:text-5xl lg:text-6xl"
                  : "text-3xl sm:text-4xl lg:text-5xl"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              {title}
            </h1>

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

          {/* Hero image — split layout */}
          {image && image.length > 0 && !isCenter && (
            <div className="flex-1 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-primary/10 dark:ring-primary/20">
                <Image
                  src={
                    image[0].url.startsWith("http")
                      ? image[0].url
                      : `${API_BASE_URL}${image[0].url}`
                  }
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
                  src={
                    image[0].url.startsWith("http")
                      ? image[0].url
                      : `${API_BASE_URL}${image[0].url}`
                  }
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
