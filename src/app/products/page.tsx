import { Metadata } from "next";
import { getPageBySlug } from "@/lib/services/pageService";
import { buildMetadata } from "@/lib/seo";
import SectionRenderer from "@/components/sections/SectionRenderer";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("products");
  return buildMetadata(
    page?.seo,
    "Products | RiverPe — Payment Solutions for Emerging Markets",
    "Local payment infrastructure across Asia & Africa. Accept deposits, send payouts, and settle in fiat or stablecoins."
  );
}

export default async function ProductsPage() {
  const page = await getPageBySlug("products");

  if (!page) {
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
