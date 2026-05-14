import Link from "next/link";
import Image from "next/image";
import { StrapiBlog } from "@/types/strapi";
import { API_BASE_URL } from "@/lib/endpoints";

interface BlogCardProps {
  blog: StrapiBlog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const coverUrl = blog.coverImage?.url
    ? blog.coverImage.url.startsWith("http")
      ? blog.coverImage.url
      : `${API_BASE_URL}${blog.coverImage.url}`
    : "";

  const date = blog.publishedDate
    ? new Date(blog.publishedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-dark">
      {/* Image Area */}
      <Link href={`/blog/${blog.slug}`} className="relative block h-48 w-full shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={blog.coverImage?.alternativeText || blog.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          /* Fallback Gray Background with Initial */
          <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-gray-300 dark:text-gray-600">
            {blog.title.charAt(0)}
          </div>
        )}
      </Link>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category */}
        {blog.category && (
          <span className="mb-2 block text-sm font-medium text-teal-600 dark:text-teal-400">
            {blog.category.name}
          </span>
        )}

        {/* Title */}
        <Link href={`/blog/${blog.slug}`} className="mb-3 block">
          <h3 className="text-xl font-bold text-dark transition-colors hover:text-primary dark:text-white dark:hover:text-primary">
            {blog.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="mb-6 line-clamp-3 flex-1 text-base text-body-color dark:text-body-color-dark">
          {blog.excerpt}
        </p>

        {/* Footer / Meta Data */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-body-color dark:border-gray-800 dark:text-body-color-dark">
          {/* Date */}
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{date}</span>
          </div>

          {/* Reading Time */}
          {blog.readingTime && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{blog.readingTime} min read</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
