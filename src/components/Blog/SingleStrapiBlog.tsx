import { StrapiBlog } from "@/types/strapi";
import Link from "next/link";

const SingleStrapiBlog = ({ blog }: { blog: StrapiBlog }) => {
  const { title, slug, excerpt, publishedDate } = blog;
  
  // Format the date nicely
  const dateObj = new Date(publishedDate);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
        <Link
          href={`/blog/${slug}`}
          className="relative block aspect-37/22 w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
        >

          {/* Placeholder for when no image is returned from Strapi payload */}
          <div className="text-body-color flex h-full w-full items-center justify-center font-semibold opacity-50">
            {title.charAt(0)}
          </div>
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/blog/${slug}`}
              className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
            >
              {title}
            </Link>
          </h3>
          <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
            {excerpt}
          </p>
          <div className="flex items-center">

            <div className="inline-block">
              <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                Date
              </h4>
              <p className="text-body-color text-xs">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleStrapiBlog;
