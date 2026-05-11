"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Outfit } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>RiverPe — APIs Built for Modern Business</title>
        <meta
          name="description"
          content="RiverPe provides powerful payment APIs and developer tools for B2B businesses. Seamless integration, enterprise security, and world-class documentation."
        />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.variable} ${outfit.variable} ${inter.className}`}>
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

import { Providers } from "./providers";
