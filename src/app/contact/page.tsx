import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sales | RiverPe",
  description: "Get in touch with the RiverPe team. We'd love to help you integrate our payment APIs.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Sales"
        description="Have questions about RiverPe? Our team is here to help. Reach out and we'll get back to you within 24 hours."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
