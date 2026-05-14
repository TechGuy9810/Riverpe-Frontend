import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/services/pageService";
import { buildMetadata } from "@/lib/seo";
import SectionRenderer from "@/components/sections/SectionRenderer";

// ─── Params type (Next.js 15 async params) ────────────────────────────────────
type Params = Promise<{ slug: string }>;

// ─── Static params (optional — tells Next.js which slugs to pre-render) ───────
// Uncomment and populate if you want SSG for known page slugs.
// export async function generateStaticParams() {
//   return [{ slug: "pricing" }, { slug: "solutions" }];
// }

// ─── Per-page SEO metadata ────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    return { title: "Page Not Found | RiverPe" };
  }

  return buildMetadata(page.seo, `${page.title} | RiverPe`);
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function DynamicPage({ params }: { params: Params }) {
  const { slug } = await params;

  // NOTE: Next.js gives precedence to static routes over this dynamic segment.
  // e.g. /blog, /about, /contact all use their own page.tsx files.
  // This component only handles Strapi-managed top-level pages (e.g. /pricing).
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <main>
      <SectionRenderer sections={page.sections} />
    </main>
  );
}
