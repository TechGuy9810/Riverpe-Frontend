import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-[600px] text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Why RiverPe
            </span>
            <SectionTitle
              title="Built for Scale, Designed for Developers"
              paragraph="Everything you need to integrate, manage, and scale payment processing with confidence."
              center
              mb="0px"
            />
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
