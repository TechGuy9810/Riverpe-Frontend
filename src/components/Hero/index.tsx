import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[860px] text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 dark:border-primary/30 dark:bg-primary/10">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-sm font-medium text-primary">
                    Now accepting early access partners
                  </span>
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl lg:text-[68px] font-[family-name:var(--font-outfit)]">
                  Payment APIs{" "}
                  <span className="gradient-text">Built for</span>{" "}
                  Modern Business
                </h1>
                <p className="mx-auto mb-10 max-w-[620px] text-lg leading-relaxed text-body-color dark:text-body-color-dark md:text-xl">
                  Seamless payment processing, intelligent routing, and
                  developer-first tools. Integrate once, scale everywhere.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-submit transition-all duration-300 hover:bg-primary-dark hover:shadow-submit-dark hover:-translate-y-0.5"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/docs"
                    className="group inline-flex items-center gap-2 rounded-lg border border-stroke-stroke bg-white px-8 py-4 text-base font-semibold text-dark transition-all duration-300 hover:border-primary hover:text-primary dark:border-stroke-dark dark:bg-transparent dark:text-white dark:hover:border-primary dark:hover:text-primary"
                  >
                    Read the Docs
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Stats row */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-black dark:text-white font-[family-name:var(--font-outfit)]">99.9%</p>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Uptime SLA</p>
                  </div>
                  <div className="h-10 w-px bg-stroke-stroke dark:bg-stroke-dark"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-black dark:text-white font-[family-name:var(--font-outfit)]">&lt;50ms</p>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Avg Latency</p>
                  </div>
                  <div className="h-10 w-px bg-stroke-stroke dark:bg-stroke-dark"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-black dark:text-white font-[family-name:var(--font-outfit)]">200+</p>
                    <p className="text-sm text-body-color dark:text-body-color-dark">Businesses</p>
                  </div>
                  <div className="h-10 w-px bg-stroke-stroke dark:bg-stroke-dark hidden md:block"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-black dark:text-white font-[family-name:var(--font-outfit)]">50M+</p>
                    <p className="text-sm text-body-color dark:text-body-color-dark">API Calls/Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-50">
          <div className="animate-float h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-[100px]"></div>
        </div>
        <div className="absolute left-0 bottom-0 z-[-1] opacity-30 lg:opacity-50">
          <div className="animate-float-reverse h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-primary/20 to-primary-light/30 blur-[100px]"></div>
        </div>
        <div className="absolute left-1/2 top-1/4 z-[-1] -translate-x-1/2 opacity-20">
          <div className="animate-pulse-glow h-[300px] w-[600px] rounded-full bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-[80px]"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
