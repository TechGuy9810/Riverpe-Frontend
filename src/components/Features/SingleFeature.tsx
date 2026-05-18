import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div
        className="group rounded-xl border border-gray-100 bg-white shadow-sm p-8 transition-all duration-300 hover:shadow-md hover:border-primary/30 dark:border-gray-800 dark:bg-gray-dark dark:hover:border-primary/30"
      >
        <div className="mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-black dark:text-white font-[family-name:var(--font-outfit)]">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
