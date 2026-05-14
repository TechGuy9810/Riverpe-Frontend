import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Outfit } from "next/font/google";
import { Metadata } from "next";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

/**
 * Site-wide default metadata — overridden per-page via generateMetadata().
 * Remove the hardcoded <head> from the previous "use client" layout so
 * Next.js can inject per-page <title> and <meta> correctly.
 */
export const metadata: Metadata = {
  title: {
    default: "RiverPe — Payment Infrastructure for Forex, iGaming & Crypto",
    template: "%s | RiverPe",
  },
  description:
    "RiverPe provides payment infrastructure for Forex, iGaming & Crypto platforms across Africa & Asia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        suppressHydrationWarning
        className={`bg-[#FCFCFC] dark:bg-[#0B1120] ${inter.variable} ${outfit.variable} ${inter.className}`}
      >
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
