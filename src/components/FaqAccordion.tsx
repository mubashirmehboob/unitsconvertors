import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "1. How accurate are the conversion formulas?",
      answer: "Extremely accurate. We use standardized double-precision IEEE-754 floating-point coefficients defined by NIST to guarantee results match scientific expectations."
    },
    {
      question: "2. Is there any limit to the number of conversions?",
      answer: "No limits at all. You can convert any metric or imperial unit as many times as you like, completely free, with no paywalls or registrations."
    },
    {
      question: "3. Can I use these conversion tools offline?",
      answer: "Yes, absolutely. Our application relies on local client-side computations. Once loaded, the calculations will continue working perfectly even when completely offline."
    },
    {
      question: "4. Does this website track or save my input numbers?",
      answer: "No. Data privacy is a core principle. No values, calculations, or session histories are ever transmitted to external servers. Everything is executed entirely within your browser."
    },
    {
      question: "5. What standards are used to define the unit factors?",
      answer: "Our coefficients are gathered from official mathematical standards published by NIST, ISO, and IEEE. This ensures conformity with scientific, medical, and aerospace guidelines."
    },
    {
      question: "6. How does temperature conversion handle negative numbers?",
      answer: "Temperature scales operate on absolute offsets. Our engine handles mathematical sign rules flawlessly, allowing deep negative sub-zero calculations for Celsius, Fahrenheit, and Kelvin."
    },
    {
      question: "7. Are US gallons different from Imperial gallons?",
      answer: "Yes. A US Liquid Gallon is equivalent to exactly 3.78541 liters, whereas an Imperial (UK) Gallon is exactly 4.54609 liters. We support separate options for US vs UK systems."
    },
    {
      question: "8. What is the difference between Weight and Mass?",
      answer: "Mass is a fundamental property of matter that remains constant (e.g. Kilograms), while Weight represents gravitational force (Newtons). Our tool handles the weights category easily."
    },
    {
      question: "9. Do you plan to support more scientific and local units?",
      answer: "Yes! We continuously update our database to include emerging technical data storage units, engineering metrics, electricity units, and historical cultural measurements."
    },
    {
      question: "10. Why is there a service worker registered on this site?",
      answer: "The service worker caches static assets locally, allowing the website to load instantly on repeat visits and enabling complete, seamless offline usability when internet is down."
    },
    {
      question: "11. Is this converter utility completely free?",
      answer: "Yes, 100% free with no registration, premium paywalls, or features locked behind payment systems. Our tools are designed for universal academic, personal, and professional access."
    },
    {
      question: "12. How can I bookmark my most frequently used converters?",
      answer: "You can easily bookmark any custom unit pairing by clicking the \"Favorite\" star/heart icon inside the active converter card. It will be saved instantly to your homepage bookmarked directory."
    }
  ];

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-8" id="faq-section">
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
        <div className="flex flex-col gap-4">
          {faqs.slice(0, 6).map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900/40 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isExpanded ? "max-h-[300px] border-t border-slate-100 dark:border-slate-800/60" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50/50 dark:bg-slate-900/20">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column FAQs */}
        <div className="flex flex-col gap-4">
          {faqs.slice(6, 12).map((faq, idx) => {
            const actualIdx = idx + 6;
            const isExpanded = expandedFaq === actualIdx;
            return (
              <div
                key={actualIdx}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900/40 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(actualIdx)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isExpanded ? "max-h-[300px] border-t border-slate-100 dark:border-slate-800/60" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50/50 dark:bg-slate-900/20">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
