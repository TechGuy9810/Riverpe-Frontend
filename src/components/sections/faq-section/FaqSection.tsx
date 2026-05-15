"use client";

import { useState } from "react";
import type { FaqSection as FaqSectionData } from "@/types/strapi";
import { StrapiBlockRenderer } from "@/components/Blog/StrapiBlockRenderer";

interface Props {
  data: FaqSectionData;
}

export default function FaqSection({ data }: Props) {
  const { title, subtitle, faqs } = data;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            {title && (
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg text-body-color dark:text-body-color-dark">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* FAQs list */}
        {faqs && faqs.length > 0 && (
          <div className="mx-auto max-w-[800px] flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1C2136] transition-all duration-300 hover:shadow-sm"
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 text-left px-6 py-5 sm:px-8 sm:py-6"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-base sm:text-lg font-medium text-dark dark:text-white">
                      {faq.question}
                    </h3>
                    <span
                      className={`shrink-0 transition-transform duration-300 text-gray-500 dark:text-gray-400 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {faq.answer && (
                        <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 text-base text-body-color dark:text-body-color-dark prose dark:prose-invert max-w-none">
                          <StrapiBlockRenderer blocks={faq.answer as any} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
