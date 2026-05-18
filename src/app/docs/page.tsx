"use client";

import Link from "next/link";
import { useState } from "react";

const docsNavigation = [
  {
    title: "Getting Started",
    items: [
      { id: "welcome", label: "Welcome to RiverPe API Docs" },
      { id: "quickstart", label: "Quick Start Guide" },
      { id: "authentication", label: "Authentication" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { id: "payments", label: "Payments API" },
      { id: "refunds", label: "Refunds API" },
      { id: "webhooks", label: "Webhooks" },
      { id: "customers", label: "Customers API" },
    ],
  },
  {
    title: "Knowledge Base",
    items: [
      { id: "error-codes", label: "Error Codes" },
      { id: "testing", label: "Testing & Sandbox" },
      { id: "rate-limits", label: "Rate Limits" },
    ],
  },
];

const docsContent: Record<string, { title: string; content: React.ReactNode }> = {
  welcome: {
    title: "Welcome to RiverPe API Docs",
    content: (
      <div>
        <p className="mb-6 text-lg text-body-color dark:text-body-color-dark leading-relaxed">
          Welcome to the RiverPe API documentation. Here you will find everything you need
          to integrate our products and start processing payments.
        </p>
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-[family-name:var(--font-outfit)]">
          Payment Processing APIs
        </h3>
        <p className="mb-6 text-body-color dark:text-body-color-dark leading-relaxed">
          Our main Payment Processing APIs are listed below. Within each one you will find
          resourceful endpoints to consume and build a seamless integration.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {[
            { name: "Payments API", desc: "Create and manage payment intents", icon: "↓" },
            { name: "Refunds API", desc: "Process and track refunds", icon: "↑" },
            { name: "Webhooks", desc: "Real-time event notifications", icon: "⚡" },
          ].map((api) => (
            <div
              key={api.name}
              className="rounded-xl border border-gray-100 bg-gray-50 p-6 text-center shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md dark:border-gray-800 dark:bg-gray-dark"
            >
              <div className="mb-3 text-3xl">{api.icon}</div>
              <h4 className="mb-1 font-bold text-black dark:text-white">{api.name}</h4>
              <p className="text-sm text-body-color dark:text-body-color-dark">{api.desc}</p>
            </div>
          ))}
        </div>
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-[family-name:var(--font-outfit)]">
          Base URL
        </h3>
        <div className="code-block p-4 mb-6">
          <code className="text-green-400 text-sm">https://api.riverpe.com/v1</code>
        </div>
        <p className="text-body-color dark:text-body-color-dark leading-relaxed">
          All API requests should be made to this base URL. We use standard HTTP methods and
          return JSON responses.
        </p>
      </div>
    ),
  },
  quickstart: {
    title: "Quick Start Guide",
    content: (
      <div>
        <p className="mb-6 text-body-color dark:text-body-color-dark leading-relaxed">
          Get up and running with RiverPe in under 5 minutes. Follow these steps to process your first payment.
        </p>
        <h3 className="mb-4 text-lg font-bold text-black dark:text-white">Step 1: Get your API Keys</h3>
        <p className="mb-4 text-body-color dark:text-body-color-dark leading-relaxed">
          Sign up for a RiverPe account and navigate to the Dashboard → API Keys section.
          You&apos;ll receive a test key (sk_test_...) and a live key (sk_live_...).
        </p>
        <h3 className="mb-4 text-lg font-bold text-black dark:text-white">Step 2: Install the SDK</h3>
        <div className="code-block p-4 mb-6">
          <pre className="text-sm text-gray-300">
            <span className="code-comment"># Node.js</span>{"\n"}
            npm install riverpe{"\n\n"}
            <span className="code-comment"># Python</span>{"\n"}
            pip install riverpe{"\n\n"}
            <span className="code-comment"># Go</span>{"\n"}
            go get github.com/riverpe/riverpe-go
          </pre>
        </div>
        <h3 className="mb-4 text-lg font-bold text-black dark:text-white">Step 3: Create a Payment</h3>
        <div className="code-block p-4 mb-6">
          <pre className="text-sm text-gray-300">
            <span className="code-keyword">const</span> riverpe = <span className="code-function">require</span>(<span className="code-string">&quot;riverpe&quot;</span>)(<span className="code-string">&quot;sk_test_...&quot;</span>);{"\n\n"}
            <span className="code-keyword">const</span> payment = <span className="code-keyword">await</span> riverpe.payments.<span className="code-function">create</span>({"{"}
            {"\n  "}amount: <span className="text-amber-400">5000</span>,
            {"\n  "}currency: <span className="code-string">&quot;INR&quot;</span>,
            {"\n  "}description: <span className="code-string">&quot;Test payment&quot;</span>
            {"\n"}{"}"});
          </pre>
        </div>
      </div>
    ),
  },
  authentication: {
    title: "Authentication",
    content: (
      <div>
        <p className="mb-6 text-body-color dark:text-body-color-dark leading-relaxed">
          RiverPe uses API keys to authenticate requests. Include your API key in the
          Authorization header of every request.
        </p>
        <div className="code-block p-4 mb-6">
          <pre className="text-sm text-gray-300">
            Authorization: Bearer sk_live_your_api_key_here
          </pre>
        </div>
        <div className="rounded-xl border-l-4 border-yellow bg-yellow/5 p-4 mb-6">
          <p className="font-semibold text-black dark:text-white mb-1">⚠️ Important</p>
          <p className="text-sm text-body-color dark:text-body-color-dark">
            Never expose your secret API keys in client-side code, public repositories, or
            browser requests. Use server-side integrations only.
          </p>
        </div>
      </div>
    ),
  },
  payments: {
    title: "Payments API",
    content: (
      <div>
        <p className="mb-6 text-body-color dark:text-body-color-dark leading-relaxed">
          The Payments API allows you to create, retrieve, and manage payment intents.
        </p>
        <h3 className="mb-4 text-lg font-bold text-black dark:text-white">Create a Payment</h3>
        <div className="mb-2 inline-flex items-center gap-2">
          <span className="rounded bg-green-500/10 px-2 py-0.5 text-xs font-bold text-green-500">POST</span>
          <code className="text-sm text-body-color dark:text-body-color-dark">/v1/payments</code>
        </div>
        <div className="code-block p-4 mt-4 mb-6">
          <pre className="text-sm text-gray-300">
            {"{"}{"\n"}
            {"  "}<span className="code-string">&quot;amount&quot;</span>: <span className="text-amber-400">5000</span>,{"\n"}
            {"  "}<span className="code-string">&quot;currency&quot;</span>: <span className="code-string">&quot;INR&quot;</span>,{"\n"}
            {"  "}<span className="code-string">&quot;description&quot;</span>: <span className="code-string">&quot;Order #1234&quot;</span>,{"\n"}
            {"  "}<span className="code-string">&quot;metadata&quot;</span>: {"{"}{"\n"}
            {"    "}<span className="code-string">&quot;order_id&quot;</span>: <span className="code-string">&quot;ord_abc123&quot;</span>{"\n"}
            {"  "}{"}"}{"\n"}
            {"}"}
          </pre>
        </div>
        <h3 className="mb-4 text-lg font-bold text-black dark:text-white">Retrieve a Payment</h3>
        <div className="mb-2 inline-flex items-center gap-2">
          <span className="rounded bg-blue-500/10 px-2 py-0.5 text-xs font-bold text-blue-500">GET</span>
          <code className="text-sm text-body-color dark:text-body-color-dark">/v1/payments/:id</code>
        </div>
      </div>
    ),
  },
  refunds: {
    title: "Refunds API",
    content: (
      <div>
        <p className="mb-6 text-body-color dark:text-body-color-dark leading-relaxed">
          The Refunds API allows you to create full or partial refunds for completed payments.
        </p>
        <div className="mb-2 inline-flex items-center gap-2">
          <span className="rounded bg-green-500/10 px-2 py-0.5 text-xs font-bold text-green-500">POST</span>
          <code className="text-sm text-body-color dark:text-body-color-dark">/v1/refunds</code>
        </div>
        <div className="code-block p-4 mt-4 mb-6">
          <pre className="text-sm text-gray-300">
            {"{"}{"\n"}
            {"  "}<span className="code-string">&quot;payment_id&quot;</span>: <span className="code-string">&quot;pay_2x4k8...&quot;</span>,{"\n"}
            {"  "}<span className="code-string">&quot;amount&quot;</span>: <span className="text-amber-400">2500</span>,{"\n"}
            {"  "}<span className="code-string">&quot;reason&quot;</span>: <span className="code-string">&quot;customer_request&quot;</span>{"\n"}
            {"}"}
          </pre>
        </div>
      </div>
    ),
  },
  webhooks: {
    title: "Webhooks",
    content: (
      <div>
        <p className="mb-6 text-body-color dark:text-body-color-dark leading-relaxed">
          Webhooks allow you to receive real-time notifications about events in your RiverPe account.
          Configure webhook endpoints from your Dashboard.
        </p>
        <h3 className="mb-4 text-lg font-bold text-black dark:text-white">Supported Events</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stroke-stroke dark:border-stroke-dark">
                <th className="py-3 pr-4 text-left font-semibold text-black dark:text-white">Event</th>
                <th className="py-3 text-left font-semibold text-black dark:text-white">Description</th>
              </tr>
            </thead>
            <tbody className="text-body-color dark:text-body-color-dark">
              <tr className="border-b border-stroke-stroke/50 dark:border-stroke-dark/50">
                <td className="py-3 pr-4"><code className="text-primary text-xs">payment.completed</code></td>
                <td className="py-3">A payment was successfully completed</td>
              </tr>
              <tr className="border-b border-stroke-stroke/50 dark:border-stroke-dark/50">
                <td className="py-3 pr-4"><code className="text-primary text-xs">payment.failed</code></td>
                <td className="py-3">A payment attempt failed</td>
              </tr>
              <tr className="border-b border-stroke-stroke/50 dark:border-stroke-dark/50">
                <td className="py-3 pr-4"><code className="text-primary text-xs">refund.created</code></td>
                <td className="py-3">A refund was initiated</td>
              </tr>
              <tr>
                <td className="py-3 pr-4"><code className="text-primary text-xs">refund.completed</code></td>
                <td className="py-3">A refund was successfully processed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  customers: {
    title: "Customers API",
    content: (
      <div>
        <p className="mb-6 text-body-color dark:text-body-color-dark leading-relaxed">
          The Customers API allows you to create and manage customer records for recurring payments
          and saved payment methods.
        </p>
        <div className="mb-2 inline-flex items-center gap-2">
          <span className="rounded bg-green-500/10 px-2 py-0.5 text-xs font-bold text-green-500">POST</span>
          <code className="text-sm text-body-color dark:text-body-color-dark">/v1/customers</code>
        </div>
        <div className="code-block p-4 mt-4 mb-6">
          <pre className="text-sm text-gray-300">
            {"{"}{"\n"}
            {"  "}<span className="code-string">&quot;name&quot;</span>: <span className="code-string">&quot;Acme Corp&quot;</span>,{"\n"}
            {"  "}<span className="code-string">&quot;email&quot;</span>: <span className="code-string">&quot;billing@acme.com&quot;</span>,{"\n"}
            {"  "}<span className="code-string">&quot;metadata&quot;</span>: {"{"}{"\n"}
            {"    "}<span className="code-string">&quot;plan&quot;</span>: <span className="code-string">&quot;enterprise&quot;</span>{"\n"}
            {"  "}{"}"}{"\n"}
            {"}"}
          </pre>
        </div>
      </div>
    ),
  },
  "error-codes": {
    title: "Error Codes",
    content: (
      <div>
        <p className="mb-6 text-body-color dark:text-body-color-dark leading-relaxed">
          RiverPe uses conventional HTTP status codes to indicate success or failure of API requests.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stroke-stroke dark:border-stroke-dark">
                <th className="py-3 pr-4 text-left font-semibold text-black dark:text-white">Code</th>
                <th className="py-3 text-left font-semibold text-black dark:text-white">Description</th>
              </tr>
            </thead>
            <tbody className="text-body-color dark:text-body-color-dark">
              <tr className="border-b border-stroke-stroke/50 dark:border-stroke-dark/50">
                <td className="py-3 pr-4"><code className="text-green-500">200</code></td>
                <td className="py-3">Success</td>
              </tr>
              <tr className="border-b border-stroke-stroke/50 dark:border-stroke-dark/50">
                <td className="py-3 pr-4"><code className="text-yellow">400</code></td>
                <td className="py-3">Bad Request — Invalid parameters</td>
              </tr>
              <tr className="border-b border-stroke-stroke/50 dark:border-stroke-dark/50">
                <td className="py-3 pr-4"><code className="text-yellow">401</code></td>
                <td className="py-3">Unauthorized — Invalid API key</td>
              </tr>
              <tr className="border-b border-stroke-stroke/50 dark:border-stroke-dark/50">
                <td className="py-3 pr-4"><code className="text-red-500">429</code></td>
                <td className="py-3">Rate limit exceeded</td>
              </tr>
              <tr>
                <td className="py-3 pr-4"><code className="text-red-500">500</code></td>
                <td className="py-3">Internal server error</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  testing: {
    title: "Testing & Sandbox",
    content: (
      <div>
        <p className="mb-6 text-body-color dark:text-body-color-dark leading-relaxed">
          Use our sandbox environment to test your integration without processing real payments.
          All test API keys start with <code className="text-primary">sk_test_</code>.
        </p>
        <h3 className="mb-4 text-lg font-bold text-black dark:text-white">Test Card Numbers</h3>
        <div className="code-block p-4 mb-6">
          <pre className="text-sm text-gray-300">
            <span className="code-comment">{"// Successful payment"}</span>{"\n"}
            4242 4242 4242 4242{"\n\n"}
            <span className="code-comment">{"// Declined payment"}</span>{"\n"}
            4000 0000 0000 0002{"\n\n"}
            <span className="code-comment">{"// Requires authentication"}</span>{"\n"}
            4000 0025 0000 3155
          </pre>
        </div>
      </div>
    ),
  },
  "rate-limits": {
    title: "Rate Limits",
    content: (
      <div>
        <p className="mb-6 text-body-color dark:text-body-color-dark leading-relaxed">
          RiverPe enforces rate limits to ensure fair usage and platform stability.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stroke-stroke dark:border-stroke-dark">
                <th className="py-3 pr-4 text-left font-semibold text-black dark:text-white">Plan</th>
                <th className="py-3 pr-4 text-left font-semibold text-black dark:text-white">Requests/min</th>
                <th className="py-3 text-left font-semibold text-black dark:text-white">Burst</th>
              </tr>
            </thead>
            <tbody className="text-body-color dark:text-body-color-dark">
              <tr className="border-b border-stroke-stroke/50 dark:border-stroke-dark/50">
                <td className="py-3 pr-4">Sandbox</td>
                <td className="py-3 pr-4">100</td>
                <td className="py-3">20</td>
              </tr>
              <tr className="border-b border-stroke-stroke/50 dark:border-stroke-dark/50">
                <td className="py-3 pr-4">Growth</td>
                <td className="py-3 pr-4">1,000</td>
                <td className="py-3">100</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Enterprise</td>
                <td className="py-3 pr-4">Custom</td>
                <td className="py-3">Custom</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
};

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState("welcome");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentContent = docsContent[activeSection] || docsContent.welcome;

  return (
    <section className="pt-[120px] pb-16 lg:pt-[150px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          {/* Mobile sidebar toggle */}
          <div className="w-full px-4 lg:hidden mb-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-2 rounded-lg border border-stroke-stroke bg-white px-4 py-2.5 text-sm font-medium text-dark dark:border-stroke-dark dark:bg-gray-dark dark:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              Documentation Menu
            </button>
          </div>

          {/* Sidebar */}
          <div className={`w-full px-4 lg:w-3/12 ${sidebarOpen ? "block" : "hidden lg:block"}`}>
            <div className="sticky top-[100px] rounded-xl border border-stroke-stroke bg-white p-6 dark:border-stroke-dark dark:bg-gray-dark">
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search docs..."
                    className="w-full rounded-lg border border-stroke-stroke bg-gray-50 px-4 py-2.5 pl-10 text-sm text-dark outline-none focus:border-primary dark:border-stroke-dark dark:bg-bg-color-dark dark:text-white"
                  />
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-body-color"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>

              <nav>
                {docsNavigation.map((section) => (
                  <div key={section.title} className="mb-6">
                    <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-body-color dark:text-body-color-dark">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => {
                              setActiveSection(item.id);
                              setSidebarOpen(false);
                            }}
                            className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-all duration-200 ${
                              activeSection === item.id
                                ? "bg-primary/10 text-primary"
                                : "text-body-color hover:bg-gray-100 hover:text-dark dark:text-body-color-dark dark:hover:bg-gray-800 dark:hover:text-white"
                            }`}
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content */}
          <div className="w-full px-4 lg:w-9/12">
            <div className="max-w-[800px]">
              {/* Breadcrumb */}
              <div className="mb-6 flex items-center gap-2 text-sm text-body-color dark:text-body-color-dark">
                <Link href="/docs" className="hover:text-primary">Docs</Link>
                <span>/</span>
                <span className="text-dark dark:text-white">{currentContent.title}</span>
              </div>

              <h1 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl font-[family-name:var(--font-outfit)]">
                {currentContent.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                {currentContent.content}
              </div>

              {/* Page nav */}
              <div className="mt-12 flex items-center justify-between border-t border-stroke-stroke pt-8 dark:border-stroke-dark">
                <div>
                  <span className="text-xs text-body-color dark:text-body-color-dark">Previous</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-body-color dark:text-body-color-dark">Next</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsPage;
