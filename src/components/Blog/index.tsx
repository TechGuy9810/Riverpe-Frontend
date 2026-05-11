import SectionTitle from "../Common/SectionTitle";
import SingleStrapiBlog from "./SingleStrapiBlog";
import { getBlogs } from "@/lib/services/blogService";

const Blog = async () => {
  const strapiResponse = await getBlogs();
  // Only take first 3 for the home page
  const blogs = strapiResponse?.data?.slice(0, 3) || [];
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="mx-auto mb-16 max-w-[600px] text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Blog
          </span>
          <SectionTitle
            title="Latest from RiverPe"
            paragraph="Insights on payment technology, API design, security best practices, and growing your business."
            center
            mb="0px"
          />
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleStrapiBlog blog={blog} />
              </div>
            ))
          ) : (
            <div className="w-full col-span-full text-center">
              <p className="text-body-color dark:text-white">
                No blogs found.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
