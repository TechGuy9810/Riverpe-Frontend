import Link from "next/link";
import type { BlogGridSection as BlogGridSectionData } from "@/types/strapi";
import Button from "@/components/ui/Button";
import { getBlogs } from "@/lib/services/blogService";

import BlogCard from "@/components/Blog/BlogCard";

interface Props {
  data: BlogGridSectionData;
}

/**
 * BlogGridSection — tinted blue-wash section with gradient heading.
 * Light: #F0F4FF bg. Dark: #0F172A bg.
 */
export default async function BlogGridSection({ data }: Props) {
  const { title, description, limit = 3, showFeaturedOnly = false, viewAllLink } = data;

  const blogsResponse = await getBlogs(1, limit, showFeaturedOnly);
  const blogs = blogsResponse.data ?? [];

  return (
    <section className="section-tinted py-12 md:py-20">
      <div className="container">
        {/* Section header */}
        <div className="mb-10 md:mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            {title && (
              <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
                <span className="gradient-text">{title}</span>
              </h2>
            )}
            {description && (
              <p className="text-base text-body-color dark:text-body-color-dark">
                {description}
              </p>
            )}
          </div>

          {/* View all link */}
          {viewAllLink ? (
            <div className="shrink-0">
              <Button data={viewAllLink} defaultVariant="outline" />
            </div>
          ) : (
            <Link
              href="/blog"
              className="btn btn-outline shrink-0"
            >
              View all posts →
            </Link>
          )}
        </div>

        {/* Blog cards */}
        {blogs.length > 0 ? (
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-center text-body-color dark:text-body-color-dark">
            No posts yet. Check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
