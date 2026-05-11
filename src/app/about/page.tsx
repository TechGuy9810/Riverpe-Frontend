import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About RiverPe | Payment APIs for Modern Business",
  description: "Learn about RiverPe's mission to simplify payment integration for developers and businesses worldwide.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About RiverPe"
        description="We're on a mission to make payment infrastructure invisible — so you can focus on building products that matter."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
