import SharePost from "@/components/Blog/SharePost";

import { StrapiBlockRenderer } from "@/components/Blog/StrapiBlockRenderer";
import { getBlogBySlug } from "@/lib/services/blogService";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Generate metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | RiverPe",
    };
  }

  return {
    title: blog.seoTitle || `${blog.title} | RiverPe Blog`,
    description: blog.seoDescription || blog.excerpt,
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const { title, excerpt, content, publishedDate } = blog;
  const dateObj = new Date(publishedDate);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  {title}
                </h2>
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 flex items-center">
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                          </svg>
                        </span>
                        {formattedDate}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed italic">
                    {excerpt}
                  </p>
                  
                  {/* Content from Strapi */}
                  <StrapiBlockRenderer blocks={content} />

                  <div className="items-center justify-between sm:flex mt-12">
                    <div className="mb-5">
                      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                        Share this post:
                      </h5>
                      <div className="flex items-center sm:justify-start">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
