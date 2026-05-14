import BlogCard from "@/components/Blog/BlogCard";
import { getBlogs } from "@/lib/services/blogService";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | RiverPe",
  description: "Insights on payment technology, API design, security best practices, and growing your business.",
};

import Link from "next/link";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Blog = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const pageStr = typeof params.page === 'string' ? params.page : '1';
  const currentPage = parseInt(pageStr, 10) || 1;
  
  const strapiResponse = await getBlogs(currentPage);
  const blogs = strapiResponse?.data || [];
  const pagination = strapiResponse?.meta?.pagination;
  const pageCount = pagination?.pageCount || 1;

  // Generate pagination links
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Insights on payment technology, API design, security best practices, and growing your business with RiverPe."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            ) : (
              <div className="col-span-full text-center">
                <p className="text-body-color dark:text-white">
                  No blogs found. Please check back later.
                </p>
              </div>
            )}
          </div>

          {pageCount > 0 && (
            <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
              <div className="w-full px-4">
                <ul className="flex items-center justify-center pt-8">
                  {/* Prev Button */}
                  <li className="mx-1">
                    {currentPage > 1 ? (
                      <Link
                        href={`/blog?page=${currentPage - 1}`}
                        className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                      >
                        Prev
                      </Link>
                    ) : (
                      <span className="bg-body-color/15 text-body-color/50 flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
                        Prev
                      </span>
                    )}
                  </li>
                  
                  {/* Page Numbers */}
                  {pages.map((p) => (
                    <li className="mx-1" key={p}>
                      <Link
                        href={`/blog?page=${p}`}
                        className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                          currentPage === p
                            ? "bg-primary text-white"
                            : "bg-body-color/15 text-body-color hover:bg-primary hover:text-white"
                        }`}
                      >
                        {p}
                      </Link>
                    </li>
                  ))}

                  {/* Next Button */}
                  <li className="mx-1">
                    {currentPage < pageCount ? (
                      <Link
                        href={`/blog?page=${currentPage + 1}`}
                        className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                      >
                        Next
                      </Link>
                    ) : (
                      <span className="bg-body-color/15 text-body-color/50 flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
                        Next
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
