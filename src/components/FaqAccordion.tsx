import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HOME_FAQS } from "../data/homeFaqs";

export { HOME_FAQS };

export default function FaqAccordion() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const faqs = HOME_FAQS;

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-8" id="faq-section" aria-label="Frequently Asked Questions">
      <div className="text-center flex flex-col gap-2">
        <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Got questions about our metric coefficients or standards? We have compiled the answers below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column FAQs */}
        <div className="flex flex-col gap-3">
          {faqs.slice(0, 6).map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            const contentId = `faq-answer-${idx}`;
            return (
              <div
                key={idx}
                className="border border-[var(--border-subtle)] dark:border-slate-800 rounded-2xl bg-[var(--surface)] dark:bg-slate-900/40 overflow-hidden transition-all duration-200 shadow-xs hover:border-slate-300 dark:hover:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isExpanded}
                  aria-controls={contentId}
                  className="w-full min-h-[44px] flex items-center justify-between p-5 text-left font-display font-bold text-sm text-slate-900 dark:text-white hover:bg-[var(--surface-hover)] dark:hover:bg-slate-800/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180 text-blue-500" : ""}`} />
                </button>
                {isExpanded && (
                  <div id={contentId} role="region" className="p-5 border-t border-[var(--divider-subtle)] dark:border-slate-800/80 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-[var(--background-secondary)]/50 dark:bg-slate-900/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column FAQs */}
        <div className="flex flex-col gap-3">
          {faqs.slice(6, 12).map((faq, idx) => {
            const actualIdx = idx + 6;
            const isExpanded = expandedFaq === actualIdx;
            const contentId = `faq-answer-${actualIdx}`;
            return (
              <div
                key={actualIdx}
                className="border border-[var(--border-subtle)] dark:border-slate-800 rounded-2xl bg-[var(--surface)] dark:bg-slate-900/40 overflow-hidden transition-all duration-200 shadow-xs hover:border-slate-300 dark:hover:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(actualIdx)}
                  aria-expanded={isExpanded}
                  aria-controls={contentId}
                  className="w-full min-h-[44px] flex items-center justify-between p-5 text-left font-display font-bold text-sm text-slate-900 dark:text-white hover:bg-[var(--surface-hover)] dark:hover:bg-slate-800/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180 text-blue-500" : ""}`} />
                </button>
                {isExpanded && (
                  <div id={contentId} role="region" className="p-5 border-t border-[var(--divider-subtle)] dark:border-slate-800/80 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-[var(--background-secondary)]/50 dark:bg-slate-900/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
