import type { BlogGridSection as BlogGridSectionData } from "@/types/strapi";
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
  const { title, description, limit = 3, showFeaturedOnly = false } = data;

  const blogsResponse = await getBlogs(1, limit, showFeaturedOnly);
  const blogs = blogsResponse.data ?? [];

  return (
    <section className="section-tinted py-12 md:py-20">
      <div className="container">
        {/* Section header */}
        <div className="mb-10 md:mb-14 flex flex-col items-center text-center">
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
        </div>

        {/* Blog cards */}
        {blogs.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[400px]">
                <BlogCard blog={blog} />
              </div>
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
