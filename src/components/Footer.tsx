import React, { useState, useEffect } from "react";
import { Instagram, Linkedin, ChevronUp } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onNavigate: (category: string, fromUnit?: string, toUnit?: string, extraPage?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility(); // Initial check

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (cat: string, fromUnit?: string, toUnit?: string, extraPage?: string) => {
    onNavigate(cat, fromUnit, toUnit, extraPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#f8fafc] dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* 1. Left Brand Section */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col gap-4 pr-0 lg:pr-6">
            <div 
              onClick={() => handleNav("home")} 
              className="flex items-center gap-2.5 cursor-pointer group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-0.5"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleNav("home");
                }
              }}
              aria-label="UnitsConvertors Home"
            >
              <Logo size="sm" />
              <span className="font-sans text-lg font-bold tracking-tight text-slate-900 dark:text-white select-none">
                Units<span className="text-blue-600 dark:text-blue-500">Convertors</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              UnitsConvertors.com provides fast, accurate, and free online unit conversion tools for students, engineers, scientists, developers, businesses, and everyday users. Convert thousands of measurement units instantly with precision and confidence.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 mt-1 flex-wrap" aria-label="Social media links">
              <a 
                href="https://www.facebook.com/profile.php?id=61593682002256" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-2xs"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.594 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              <a 
                href="https://x.com/UnitsConvertor" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-2xs"
                aria-label="X (formerly Twitter)"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a 
                href="https://www.instagram.com/unitsconvertors/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-2xs"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a 
                href="https://www.pinterest.com/unitsconvertors/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-[#E60023] hover:text-white hover:border-[#E60023] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-2xs"
                aria-label="Pinterest"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>

              <a 
                href="https://www.linkedin.com/in/units-convertors-361288432/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-2xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a 
                href="https://bsky.app/profile/unitsconvertors.bsky.social" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-[#1185FE] hover:text-white hover:border-[#1185FE] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-2xs"
                aria-label="Bluesky"
                title="Bluesky"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.002 2.01-4.002 6.415 3.076 4.515 7.076 1.705 8.995-1.526 1.92 3.23 5.919 6.041 8.995 1.526 3-4.405-.09-5.835-4.002-6.415-.139-.016-.277-.034-.415-.056.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Company & Support */}
          <div className="sm:col-span-1 lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-display text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Company & Support
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <button 
                  type="button" 
                  onClick={() => handleNav("home")} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => handleNav("home", undefined, undefined, "about")} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => handleNav("home", undefined, undefined, "contact")} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => handleNav("home", undefined, undefined, "privacy")} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => handleNav("home", undefined, undefined, "terms")} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => handleNav("home", undefined, undefined, "disclaimer")} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Disclaimer Notice
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Resources */}
          <div className="sm:col-span-1 lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-display text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Resources
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a 
                  href="/calculators" 
                  onClick={(e) => { e.preventDefault(); handleNav("calculators"); }} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Engineering Calculators
                </a>
              </li>
              <li>
                <a 
                  href="/guides" 
                  onClick={(e) => { e.preventDefault(); handleNav("guides"); }} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Guides
                </a>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => handleNav("home")} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Categories Directory
                </button>
              </li>
              <li>
                <a 
                  href="/converters" 
                  onClick={(e) => { e.preventDefault(); handleNav("converters"); }} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  All Converters
                </a>
              </li>
              <li>
                <a 
                  href="/resources/unit-conversion-reference" 
                  onClick={(e) => { e.preventDefault(); handleNav("/resources/unit-conversion-reference"); }} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Unit Conversion Reference
                </a>
              </li>
            </ul>
          </div>

          {/* 4. References */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-display text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              References
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a 
                  href="/resources/si-units-reference" 
                  onClick={(e) => { e.preventDefault(); handleNav("/resources/si-units-reference"); }} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  SI Units & Metric Prefixes
                </a>
              </li>
              <li>
                <a 
                  href="/resources/engineering-units-reference" 
                  onClick={(e) => { e.preventDefault(); handleNav("/resources/engineering-units-reference"); }} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Engineering Units Reference
                </a>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => handleNav("home", undefined, undefined, "sitemap")} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  HTML Sitemap
                </button>
              </li>
              <li>
                <a 
                  href="/sitemap.xml" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  XML Sitemap
                </a>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => handleNav("home", undefined, undefined, "validator")} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Validation Report
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => handleNav("home", undefined, undefined, "favorites")} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Bookmarked Favorites
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p className="text-center sm:text-left">
            &copy; 2026 UnitsConvertors. All rights reserved.
          </p>
          
          <p className="text-center sm:text-right font-medium text-slate-500 dark:text-slate-400">
            Fast &bull; Accurate &bull; Privacy-Friendly
          </p>
        </div>

      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-600/25 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition-all duration-300 ease-in-out ${
          isVisible ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-75 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
        id="back-to-top"
      >
        <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
      </button>
    </footer>
  );
}
