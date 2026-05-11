import Link from "next/link";

const Integration = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Left: Text */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[520px]">
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Quick Start
              </span>
              <h2 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[42px] font-[family-name:var(--font-outfit)] leading-tight!">
                Seamless Integration in Minutes
              </h2>
              <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
                Our APIs are designed with developers in mind. Clean endpoints,
                comprehensive SDKs, and interactive documentation make integration
                effortless.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/docs"
                  className="rounded-lg bg-primary px-8 py-4 text-center text-base font-semibold text-white shadow-submit transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5"
                >
                  Start Integrating
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-stroke-stroke px-8 py-4 text-center text-base font-semibold text-dark transition-all duration-300 hover:border-primary hover:text-primary dark:border-stroke-dark dark:text-white dark:hover:border-primary dark:hover:text-primary"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Code snippet */}
          <div className="w-full px-4 lg:w-1/2 mt-12 lg:mt-0">
            <div className="code-block p-6 text-sm overflow-x-auto">
              {/* Tab bar */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs text-gray-500 ml-2">payment.js</span>
              </div>
              <pre className="text-gray-300 leading-7">
                <code>
                  <span className="code-comment">{"// Initialize RiverPe client"}</span>{"\n"}
                  <span className="code-keyword">{"const"}</span>{" "}
                  {"riverpe = "}
                  <span className="code-function">{"require"}</span>
                  {"("}
                  <span className="code-string">{'"riverpe"'}</span>
                  {")("}
                  <span className="code-string">{'"sk_live_..."'}</span>
                  {");"}{"\n\n"}
                  <span className="code-comment">{"// Create a payment intent"}</span>{"\n"}
                  <span className="code-keyword">{"const"}</span>
                  {" payment = "}
                  <span className="code-keyword">{"await"}</span>
                  {" riverpe.payments."}
                  <span className="code-function">{"create"}</span>
                  {"({"}{"\n"}
                  {"  amount: "}
                  <span className="text-amber-400">{"5000"}</span>
                  {","}{"\n"}
                  {"  currency: "}
                  <span className="code-string">{'"INR"'}</span>
                  {","}{"\n"}
                  {"  description: "}
                  <span className="code-string">{'"API subscription"'}</span>
                  {","}{"\n"}
                  {"  metadata: { order_id: "}
                  <span className="code-string">{'"ord_123"'}</span>
                  {" }"}{"\n"}
                  {"});"}{"\n\n"}
                  <span className="code-keyword">{"console"}</span>
                  {"."}
                  <span className="code-function">{"log"}</span>
                  {"(payment.id);"}
                  {" "}
                  <span className="code-comment">{"// pay_2x4k8..."}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* BG decoration */}
      <div className="absolute right-0 top-0 z-[-1] opacity-20">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-[100px]"></div>
      </div>
    </section>
  );
};

export default Integration;
