import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Building Resilient Payment Systems with Event-Driven Architecture",
    paragraph:
      "Learn how event-driven architecture can improve the reliability and scalability of your payment processing pipeline.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "RiverPe Team",
      image: "/images/blog/author-03.png",
      designation: "Engineering",
    },
    tags: ["engineering"],
    publishDate: "2026",
  },
  {
    id: 2,
    title: "PCI DSS Compliance: A Developer's Guide to Secure Payments",
    paragraph:
      "Everything you need to know about PCI DSS compliance and how RiverPe handles security so you don't have to.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "RiverPe Team",
      image: "/images/blog/author-02.png",
      designation: "Security",
    },
    tags: ["security"],
    publishDate: "2026",
  },
  {
    id: 3,
    title: "Reducing Payment Failures: Smart Retry Strategies for APIs",
    paragraph:
      "Discover how intelligent retry logic and failover routing can significantly reduce payment decline rates.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "RiverPe Team",
      image: "/images/blog/author-03.png",
      designation: "Product",
    },
    tags: ["product"],
    publishDate: "2026",
  },
];
export default blogData;
