import React from "react";
import { 
  BookOpen, 
  ChevronRight, 
  Ruler, 
  Calculator, 
  Atom, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Compass,
  Clock,
  Sparkles
} from "lucide-react";
import { publishedGuides, getGuideBySlug, GuideItem } from "../data/guidesData";
import { renderGuideHtml } from "../utils/guideRenderer";

interface GuidesPageProps {
  onNavigate: (route: string, fromUnit?: string, toUnit?: string, extraPage?: string) => void;
  currentGuideSlug?: string;
}

export default function GuidesPage({ onNavigate, currentGuideSlug }: GuidesPageProps) {
  const activeGuide: GuideItem | undefined = currentGuideSlug 
    ? getGuideBySlug(currentGuideSlug) 
    : undefined;

  // Single Guide View (Architecture for future published guides: /guides/{guide-slug})
  if (currentGuideSlug) {
    if (activeGuide) {
      return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
          {/* Breadcrumbs */}
          <div className="border-none bg-transparent">
            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("home");
                  }}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
                <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                <a
                  href="/guides"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("guides");
                  }}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Guides
                </a>
                <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                <span className="font-semibold text-slate-900 dark:text-white truncate">
                  {activeGuide.title}
                </span>
              </nav>
            </div>
          </div>

          <article className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <header className="mb-8">
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                {activeGuide.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeGuide.description}
              </p>
            </header>

            {activeGuide.content && (
              <div 
                className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: renderGuideHtml(activeGuide.content) }}
                onClick={(e) => {
                  const target = (e.target as HTMLElement).closest("a");
                  if (target) {
                    const href = target.getAttribute("href");
                    if (href && href.startsWith("/")) {
                      e.preventDefault();
                      if (href === "/guides") {
                        onNavigate("guides");
                      } else if (href.startsWith("/guides/")) {
                        const guideSlug = href.replace("/guides/", "");
                        onNavigate("guides", guideSlug);
                      } else {
                        window.history.pushState({}, "", href);
                        window.dispatchEvent(new PopStateEvent("popstate"));
                      }
                    }
                  }
                }}
              />
            )}
          </article>
        </div>
      );
    }

    // Guide Not Found / Pending Publication
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900">
        {/* Breadcrumbs */}
        <div className="border-none bg-transparent">
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("home");
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </a>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <a
                href="/guides"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("guides");
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Guides
              </a>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="font-semibold text-slate-900 dark:text-white truncate">
                Pending Guide
              </span>
            </nav>
          </div>
        </div>

        <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 mb-4">
            <BookOpen className="h-6 w-6" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Guide In Preparation
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
            This guide topic is currently being researched and written by the UnitsConvertors.com editorial and science standards team.
          </p>
          <a
            href="/guides"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("guides");
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span>Return to Guides Hub</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  // Guides Hub Index View (/guides)
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      
      {/* Breadcrumb Bar */}
      <div className="border-none bg-transparent">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("home");
              }}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white truncate">
              Guides
            </span>
          </nav>
          
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>SI & International Measurement Standards</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Page Hero Header */}
        <header className="mb-10 sm:mb-12 space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Guides
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Welcome to the UnitsConvertors.com guides hub. This section contains practical, in-depth educational guides covering unit conversion principles, physical measurement systems, SI base and derived units, mathematical formulas, and scientific standards.
          </p>
        </header>

        {/* Guides Listing Area (Ready to populate) */}
        <section aria-labelledby="guides-listing-heading" className="space-y-6">
          <h2 id="guides-listing-heading" className="sr-only">
            Published Guides
          </h2>

          {publishedGuides.length > 0 ? (
            /* Populated guide grid (activates when guides are added to guidesData.ts) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedGuides.map((guide) => (
                <article
                  key={guide.slug}
                  className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200"
                >
                  <div className="space-y-2.5">
                    {guide.category && (
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        {guide.category}
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      <a
                        href={`/guides/${guide.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("guides", guide.slug);
                        }}
                        className="hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                      >
                        {guide.title}
                      </a>
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                      {guide.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    {guide.readTimeMinutes && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {guide.readTimeMinutes} min read
                      </span>
                    )}
                    <a
                      href={`/guides/${guide.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate("guides", guide.slug);
                      }}
                      className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline ml-auto"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Clean Empty/Ready-to-Populate Area without fake articles or placeholders */
            <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-8 sm:p-12 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mb-4 shadow-xs">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                Educational Guides in Development
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
                Practical reference guides covering unit conversion mechanics, SI base and derived units, metric prefixes, and physical measurement systems are currently being compiled and peer-reviewed for publication.
              </p>

              {/* Exploration Links to Related Real Site Sections */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                  Explore Active Reference & Conversion Tools
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="/converters"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("converters");
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs"
                  >
                    <Ruler className="h-4 w-4 text-blue-500" />
                    <span>Unit Converters Hub</span>
                  </a>

                  <a
                    href="/calculators"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("calculators");
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs"
                  >
                    <Calculator className="h-4 w-4 text-amber-500" />
                    <span>Engineering Calculators</span>
                  </a>

                  <a
                    href="/resources/si-units-reference"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("/resources/si-units-reference");
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs"
                  >
                    <Atom className="h-4 w-4 text-cyan-500" />
                    <span>SI Units & Metric Prefixes</span>
                  </a>

                  <a
                    href="/resources/unit-conversion-reference"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("/resources/unit-conversion-reference");
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs"
                  >
                    <Compass className="h-4 w-4 text-emerald-500" />
                    <span>Unit Conversion Reference</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
