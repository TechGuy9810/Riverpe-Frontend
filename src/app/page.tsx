import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import Products from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RiverPe — Payment APIs Built for Modern Business",
  description:
    "Seamless payment processing, intelligent routing, and developer-first tools. Integrate once, scale everywhere with RiverPe.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Products />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Integration />
      <Blog />
    </>
  );
}
