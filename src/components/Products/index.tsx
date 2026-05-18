import Link from "next/link";

const productsData = [
  {
    id: 1,
    title: "API Gateway",
    description:
      "Unified payment processing with intelligent routing across multiple providers. Accept cards, wallets, bank transfers, and more through a single integration.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="28" height="20" rx="3" />
        <path d="M2 12H30" />
        <path d="M8 18H16" />
        <path d="M8 22H12" />
      </svg>
    ),
    link: "/#products",
    accent: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Webhooks & Events",
    description:
      "Real-time event notifications for every transaction state change. Reliable delivery with automatic retries, signature verification, and detailed logs.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8L16 16L28 8" />
        <rect x="2" y="6" width="28" height="20" rx="3" />
      </svg>
    ),
    link: "/#products",
    accent: "from-indigo-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Developer Dashboard",
    description:
      "Full visibility into your payment operations with real-time analytics, transaction search, API key management, and team collaboration tools.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="28" height="24" rx="3" />
        <path d="M2 12H30" />
        <path d="M10 20L14 16L10 12" />
        <path d="M16 20H22" />
      </svg>
    ),
    link: "/#products",
    accent: "from-violet-500 to-violet-600",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[600px] text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Products
          </span>
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[42px] font-[family-name:var(--font-outfit)]">
            Everything You Need to Accept Payments
          </h2>
          <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
            Powerful tools designed for developers and businesses that demand reliability at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-md hover:border-primary/30 dark:border-gray-800 dark:bg-gray-dark dark:hover:border-primary/30"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${product.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}></div>
              
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                {product.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white font-[family-name:var(--font-outfit)]">
                {product.title}
              </h3>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {product.description}
              </p>
              <Link
                href={product.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
              >
                Discover More
                <svg
                  className="h-4 w-4"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
