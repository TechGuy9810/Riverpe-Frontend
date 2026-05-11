import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 5C20 2.24 17.76 0 15 0H5C2.24 0 0 2.24 0 5V15C0 17.76 2.24 20 5 20H15C17.76 20 20 17.76 20 15V5Z"
        />
        <path d="M40 25C40 22.24 37.76 20 35 20H25C22.24 20 20 22.24 20 25V35C20 37.76 22.24 40 25 40H35C37.76 40 40 37.76 40 35V25ZM18 25C18 22.24 15.76 20 13 20H5C2.24 20 0 22.24 0 25V35C0 37.76 2.24 40 5 40H13C15.76 40 18 37.76 18 35V25ZM40 5C40 2.24 37.76 0 35 0H25C22.24 0 20 2.24 20 5V13C20 15.76 22.24 18 25 18H35C37.76 18 40 15.76 40 13V5Z" />
      </svg>
    ),
    title: "Seamless Integration",
    paragraph:
      "RESTful APIs with comprehensive SDKs for Node.js, Python, Go, and more. Get up and running in minutes with our developer-friendly documentation.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.18 36 4 28.82 4 20C4 11.18 11.18 4 20 4C28.82 4 36 11.18 36 20C36 28.82 28.82 36 20 36Z"
        />
        <path d="M20 8C13.38 8 8 13.38 8 20C8 26.62 13.38 32 20 32C26.62 32 32 26.62 32 20C32 13.38 26.62 8 20 8ZM28 21H21V28H19V21H12V19H19V12H21V19H28V21Z" />
      </svg>
    ),
    title: "24/7 Dedicated Support",
    paragraph:
      "Enterprise-grade support with dedicated account managers. Average response time under 15 minutes for critical issues, around the clock.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M35 0H5C2.24 0 0 2.24 0 5V25C0 27.76 2.24 30 5 30H15L20 36L25 30H35C37.76 30 40 27.76 40 25V5C40 2.24 37.76 0 35 0Z"
        />
        <path d="M20 6L22.5 13H30L24 17.5L26 25L20 20.5L14 25L16 17.5L10 13H17.5L20 6Z" />
      </svg>
    ),
    title: "Scalable Infrastructure",
    paragraph:
      "Auto-scaling infrastructure handling millions of transactions. Multi-region deployment with intelligent load balancing and zero downtime updates.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 0L2 10V30L20 40L38 30V10L20 0ZM20 4L34 12V28L20 36L6 28V12L20 4Z"
        />
        <path d="M20 8L8 14.5V25.5L20 32L32 25.5V14.5L20 8ZM20 12L28 16.5V23.5L20 28L12 23.5V16.5L20 12Z" />
      </svg>
    ),
    title: "Enterprise Security",
    paragraph:
      "PCI DSS Level 1 compliant with end-to-end encryption, tokenization, and advanced fraud detection. Your data security is our top priority.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M32 0H8C5.8 0 4 1.8 4 4V36C4 38.2 5.8 40 8 40H32C34.2 40 36 38.2 36 36V4C36 1.8 34.2 0 32 0Z"
        />
        <path d="M28 8H12V12H28V8ZM28 16H12V20H28V16ZM20 24H12V28H20V24Z" />
      </svg>
    ),
    title: "Rich Documentation",
    paragraph:
      "Interactive API reference, step-by-step guides, code samples in every language, and a thriving developer community to help you succeed.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M36 8H4C1.8 8 0 9.8 0 12V28C0 30.2 1.8 32 4 32H36C38.2 32 40 30.2 40 28V12C40 9.8 38.2 8 36 8Z"
        />
        <path d="M12 0H8V8H12V0ZM32 0H28V8H32V0ZM12 32H8V40H12V32ZM32 32H28V40H32V32ZM6 16H14V24H6V16ZM26 16H34V24H26V16ZM16 14H24V26H16V14Z" />
      </svg>
    ),
    title: "Compliance & Regulations",
    paragraph:
      "We handle the complexity of local market regulations, tax compliance, and cross-border payments so you can focus on building your core product.",
  },
];
export default featuresData;
