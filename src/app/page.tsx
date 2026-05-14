import { Metadata } from "next";
import { getPageBySlug } from "@/lib/services/pageService";
import { buildMetadata } from "@/lib/seo";
import SectionRenderer from "@/components/sections/SectionRenderer";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("home");
  return buildMetadata(
    page?.seo,
    "RiverPe — Payment Infrastructure for Forex, iGaming & Crypto Platforms",
    "RiverPe provides payment infrastructure across Asia, Africa & Latam."
  );
}

export default async function HomePage() {
  const page = await getPageBySlug("home");

  if (!page) {
    // Graceful fallback — Strapi may be unreachable during build
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-body-color">
          Unable to load page content. Please check your Strapi connection.
        </p>
      </main>
    );
  }

  return (
    <main>
      <SectionRenderer sections={page.sections} />
    </main>
  );
}
