import { Metadata } from "next";
import { StrapiSeo } from "@/types/strapi";
import { API_BASE_URL } from "./endpoints";

/**
 * Converts a Strapi SEO component object into a Next.js Metadata object.
 * Falls back to `fallbackTitle` when metaTitle is absent.
 */
export function buildMetadata(
  seo: StrapiSeo | undefined | null,
  fallbackTitle: string,
  fallbackDescription?: string
): Metadata {
  if (!seo) {
    return {
      title: fallbackTitle,
      description: fallbackDescription,
    };
  }

  const ogImages = seo.ogImage?.map((img) => ({
    url: img.url.startsWith("http") ? img.url : `${API_BASE_URL}${img.url}`,
    width: img.width,
    height: img.height,
    alt: img.alternativeText ?? seo.ogTitle ?? seo.metaTitle,
  }));

  return {
    title: seo.metaTitle || fallbackTitle,
    description: seo.metaDescription || fallbackDescription,
    keywords: seo.keywords ? seo.keywords.split(",").map((k) => k.trim()) : undefined,
    alternates: seo.canonicalURL
      ? { canonical: seo.canonicalURL }
      : undefined,
    robots: seo.metaRobots
      ? {
          index: !seo.metaRobots.includes("noindex"),
          follow: !seo.metaRobots.includes("nofollow"),
        }
      : undefined,
    openGraph: {
      title: seo.ogTitle || seo.metaTitle || fallbackTitle,
      description: seo.metaDescription || fallbackDescription,
      images: ogImages?.length ? ogImages : undefined,
    },
  };
}
