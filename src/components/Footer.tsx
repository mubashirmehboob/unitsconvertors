import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, ChevronUp, Link as LinkIcon } from "lucide-react";
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

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Initial check

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePopularNavigate = (catId: string, fromId: string, toId: string) => {
    onNavigate(catId, fromId, toId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      {/* Upper Border Accent Grid Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-3">
            <div onClick={() => onNavigate("home")} className="flex items-center gap-2 cursor-pointer group w-fit">
              <Logo size="sm" />
              <span className="font-sans text-lg font-bold tracking-tight text-slate-900 dark:text-white select-none">
                Units<span className="text-blue-600 dark:text-blue-500">Convertors</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Units Convertors makes unit conversion simple, fast, and accurate for everyone. Whether you're studying, building, cooking, coding, or working on professional projects, our tools are here to help. Get precise results instantly with a clean, distraction-free experience that's always free to use.
            </p>

            {/* Social Media Links with Custom Brand Coloring */}
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer referrer" 
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 dark:border-blue-950 bg-blue-50/50 dark:bg-blue-950/20 text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-lg hover:shadow-blue-500/15 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer referrer" 
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-slate-100 hover:shadow-lg transition-all duration-300"
                aria-label="X (formerly Twitter)"
              >
                <span className="font-black text-sm">𝕏</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer referrer" 
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-pink-100 dark:border-pink-950 bg-pink-50/50 dark:bg-pink-950/20 text-[#E1306C] hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-[#E1306C] hover:shadow-lg hover:shadow-pink-500/15 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer referrer" 
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/50 dark:bg-sky-950/20 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-lg hover:shadow-blue-600/15 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Legal & Support */}
          <div className="flex flex-col gap-4 sm:col-span-1 lg:col-span-1">
            <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
              Company & Support
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <button onClick={() => { onNavigate("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-blue-500 hover:underline transition-colors text-left font-medium">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("home", undefined, undefined, "about")} className="hover:text-blue-500 hover:underline transition-colors text-left font-medium">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("home", undefined, undefined, "contact")} className="hover:text-blue-500 hover:underline transition-colors text-left font-medium">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("home", undefined, undefined, "privacy")} className="hover:text-blue-500 hover:underline transition-colors text-left font-medium">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("home", undefined, undefined, "terms")} className="hover:text-blue-500 hover:underline transition-colors text-left font-medium">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("home", undefined, undefined, "disclaimer")} className="hover:text-blue-500 hover:underline transition-colors text-left font-medium">
                  Disclaimer Notice
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Sitemaps & Directories */}
          <div className="flex flex-col gap-4 sm:col-span-1 lg:col-span-1">
            <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
              Sitemaps & Indexes
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <button onClick={() => onNavigate("home", undefined, undefined, "sitemap")} className="hover:text-blue-500 hover:underline transition-colors text-left font-medium">
                  HTML Sitemap
                </button>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" className="hover:text-blue-500 hover:underline transition-colors text-left font-medium block">
                  XML Sitemap
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate("home")} className="hover:text-blue-500 hover:underline transition-colors text-left font-medium">
                  Categories Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("home", undefined, undefined, "sitemap")} className="hover:text-blue-500 hover:underline transition-colors text-left font-medium">
                  All 500+ Converters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("home", undefined, undefined, "favorites")} className="hover:text-blue-500 hover:underline transition-colors text-left font-medium">
                  Bookmarked Favorites
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("home", undefined, undefined, "validator")} className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline transition-colors text-left font-bold flex items-center gap-1.5 whitespace-nowrap"><span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse" />NIST Engine Validator</button>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Divider & Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center relative min-h-[44px] gap-4">
          <span className="text-xs text-slate-400 dark:text-slate-500 text-center max-w-xl">
            &copy; {new Date().getFullYear()} Units Convertors. All rights reserved. Precise metrics computed natively in the browser.
          </span>
          
          {/* Back to Top button */}
          <button
            onClick={scrollToTop}
            className={`group fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-lg shadow-blue-600/20 dark:shadow-cyan-500/15 hover:shadow-xl hover:shadow-blue-600/30 dark:hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-cyan-400 dark:focus:ring-offset-slate-900 hover:scale-108 hover:brightness-110 duration-300 transition-all ease-in-out ${
              isVisible ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-75 translate-y-4 pointer-events-none"
            }`}
            aria-label="Back to top"
            id="back-to-top"
          >
            <ChevronUp className="h-5 w-5 md:h-6 md:w-6 stroke-[2.5] transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
