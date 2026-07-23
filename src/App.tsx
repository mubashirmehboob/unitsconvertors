import React, { useState, useEffect } from "react";
import { 
  Ruler, HelpCircle, ChevronRight, Check, History, Heart, 
  Trash2, Sparkles, Star, Award, Shield, CheckCircle, ArrowRight,
  TrendingUp, Compass, Mail, Phone, MapPin, List, Eye, ArrowUpDown, ChevronDown,
  Zap, Lock, Info, Search, Layers
} from "lucide-react";
import Header, { categoryIconMap, getCategoryStyle } from "./components/Header";
import Footer from "./components/Footer";
import CategoryCard from "./components/CategoryCard";
import ConverterTool from "./components/ConverterTool";
import SEOContent from "./components/SEOContent";
import AdPlaceholder from "./components/AdPlaceholder";
import FaqAccordion from "./components/FaqAccordion";
import FeaturedConverters from "./components/FeaturedConverters";
import InternalLinkingDirectory from "./components/InternalLinkingDirectory";
import ValidatorPage from "./components/ValidatorPage";
import { categoriesData } from "./data/convertersData";
import { ConversionHistoryItem, FavoriteTool } from "./types";
import { performConversion, runEngineAudit } from "./utils/conversionEngine";

export default function App() {
  // Routing State
  const [route, setRoute] = useState({
    page: "home", // "home", "about", "contact", "privacy", "terms", "disclaimer", "sitemap", "favorites", "category", "converter"
    category: "",
    fromUnit: "",
    toUnit: ""
  });

  // Quick Converter Widget States
  const [quickCatId, setQuickCatId] = useState("length");
  const [quickFromVal, setQuickFromVal] = useState("100");
  const [quickFromUnitId, setQuickFromUnitId] = useState("meter");
  const [quickToUnitId, setQuickToUnitId] = useState("foot");

  // Synchronize From/To unit defaults on Category change in Quick Widget
  useEffect(() => {
    const selectedCat = categoriesData.find(c => c.id === quickCatId);
    if (selectedCat && selectedCat.units.length >= 2) {
      setQuickFromUnitId(selectedCat.units[0].id);
      // Try to find a logical target that isn't the same as source, or pick the second unit
      setQuickToUnitId(selectedCat.units[1].id);
    }
  }, [quickCatId]);

  // Local Storage States
  const [history, setHistory] = useState<ConversionHistoryItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  
  // Newsletter Subscribe Modal/Alert Simulation
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Hero Section Search States
  const [heroSearchQuery, setHeroSearchQuery] = useState("");
  const [heroSearchFocused, setHeroSearchFocused] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Intelligent Search Autocompletion suggestions with full unit-to-unit path matching
  const heroSuggestions = React.useMemo(() => {
    if (!heroSearchQuery.trim()) return [];
    
    const query = heroSearchQuery.toLowerCase().trim();
    const queryClean = query.replace(/\s+to\s+/g, " ");
    const words = queryClean.split(/\s+/).filter(Boolean);
    
    if (words.length === 0) return [];
    
    const matches: any[] = [];
    
    // 1. Match category names
    categoriesData.forEach(cat => {
      if (cat.name.toLowerCase().includes(query)) {
        matches.push({
          type: "category",
          id: cat.id,
          name: cat.name,
          description: cat.description,
          badge: "Category"
        });
      }
    });
    
    // 2. Parse X to Y direct pairings (e.g. "inch to cm", "meter feet")
    if (words.length >= 2) {
      const w1 = words[0];
      const w2 = words[1];
      
      categoriesData.forEach(cat => {
        const matchingFrom = cat.units.filter(u => 
          u.name.toLowerCase().includes(w1) || 
          u.plural.toLowerCase().includes(w1) || 
          u.symbol.toLowerCase() === w1
        );
        const matchingTo = cat.units.filter(u => 
          u.name.toLowerCase().includes(w2) || 
          u.plural.toLowerCase().includes(w2) || 
          u.symbol.toLowerCase() === w2
        );
        
        if (matchingFrom.length > 0 && matchingTo.length > 0) {
          matchingFrom.forEach(f => {
            matchingTo.forEach(t => {
              if (f.id !== t.id) {
                matches.push({
                  type: "conversion",
                  categoryId: cat.id,
                  fromUnitId: f.id,
                  toUnitId: t.id,
                  name: `${f.name} to ${t.plural}`,
                  badge: cat.name
                });
              }
            });
          });
        }
      });
    }
    
    // 3. Match individual unit names to form relevant target conversions within category
    categoriesData.forEach(cat => {
      cat.units.forEach(unit => {
        if (
          unit.name.toLowerCase().includes(query) || 
          unit.plural.toLowerCase().includes(query) || 
          unit.symbol.toLowerCase() === query
        ) {
          const otherUnits = cat.units.filter(u => u.id !== unit.id);
          otherUnits.slice(0, 3).forEach(other => {
            matches.push({
              type: "conversion",
              categoryId: cat.id,
              fromUnitId: unit.id,
              toUnitId: other.id,
              name: `${unit.name} to ${other.plural}`,
              badge: cat.name
            });
          });
        }
      });
    });
    
    // Deduplicate suggestions
    const seen = new Set();
    const uniqueMatches = [];
    for (const m of matches) {
      const key = m.type === "category" ? `cat-${m.id}` : `conv-${m.categoryId}-${m.fromUnitId}-${m.toUnitId}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueMatches.push(m);
      }
    }
    
    return uniqueMatches.slice(0, 6);
  }, [heroSearchQuery]);

  // Load state from localStorage on init
  useEffect(() => {
    const savedHistory = localStorage.getItem("uc_history");
    if (savedHistory) setHistory(JSON.parse(savedHistory));

    const savedFavs = localStorage.getItem("uc_favs");
    if (savedFavs) setFavorites(JSON.parse(savedFavs));

    const savedTheme = localStorage.getItem("uc_theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    } else if (savedTheme === "light") {
      setDarkMode(false);
    } else {
      // Default to dark theme if user environment prefers it, else light
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem("uc_history", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem("uc_favs", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("uc_theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Dynamically reset Robots meta tag for non-converter pages
  useEffect(() => {
    if (route.page !== "converter") {
      const robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) {
        robotsTag.setAttribute("content", "index, follow");
      } else {
        const newRobots = document.createElement("meta");
        newRobots.name = "robots";
        newRobots.content = "index, follow";
        document.head.appendChild(newRobots);
      }
    }
  }, [route.page]);

  // Dynamically set homepage SEO metadata when returning to home page
  useEffect(() => {
    if (route.page === "home") {
      document.title = "Unit Converter | Free Online Unit Conversion Tools - UnitsConvertors.com";
      const metaDescTag = document.querySelector('meta[name="description"]');
      const homeDesc = "Convert length, weight, temperature, area, volume, pressure, energy, and hundreds of other units with fast, accurate, and easy-to-use online conversion tools.";
      if (metaDescTag) {
        metaDescTag.setAttribute("content", homeDesc);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = homeDesc;
        document.head.appendChild(newMeta);
      }
    }
  }, [route.page]);

  // Route Parser
  useEffect(() => {
    const parsePath = () => {
      const path = window.location.pathname;
      if (!path || path === "/") {
        setRoute({ page: "home", category: "", fromUnit: "", toUnit: "" });
        return;
      }

      const segments = path.split("/").filter(Boolean);
      if (segments.length === 0) {
        setRoute({ page: "home", category: "", fromUnit: "", toUnit: "" });
        return;
      }

      const first = segments[0];
      const supportPages = ["about", "contact", "privacy", "terms", "disclaimer", "sitemap", "favorites", "validator"];
      
      if (supportPages.includes(first)) {
        setRoute({ page: first, category: "", fromUnit: "", toUnit: "" });
      } else {
        const cat = categoriesData.find(c => c.id === first);
        if (cat) {
          if (segments.length > 1) {
            const pairSegment = segments[1];
            const parts = pairSegment.split("-to-");
            if (parts.length === 2) {
              setRoute({ page: "converter", category: first, fromUnit: parts[0], toUnit: parts[1] });
            } else {
              setRoute({ page: "category", category: first, fromUnit: "", toUnit: "" });
            }
          } else {
            setRoute({ page: "category", category: first, fromUnit: "", toUnit: "" });
          }
        } else {
          setRoute({ page: "home", category: "", fromUnit: "", toUnit: "" });
        }
      }
    };

    window.addEventListener("popstate", parsePath);
    parsePath(); // initial trigger

    return () => window.removeEventListener("popstate", parsePath);
  }, []);

  const handleNavigate = (category: string, fromUnit?: string, toUnit?: string, extraPage?: string) => {
    let targetPath = "/";
    if (extraPage) {
      targetPath = `/${extraPage}`;
    } else if (category === "home") {
      targetPath = "/";
    } else if (fromUnit && toUnit) {
      targetPath = `/${category}/${fromUnit}-to-${toUnit}`;
    } else {
      targetPath = `/${category}`;
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, "", targetPath);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddHistory = (item: Omit<ConversionHistoryItem, "id" | "timestamp">) => {
    const newItem: ConversionHistoryItem = {
      ...item,
      id: Date.now().toString(),
      timestamp: Date.now()
    };
    // keep max 10 recent conversions
    setHistory(prev => [newItem, ...prev.filter(h => !(h.category === item.category && h.fromUnit === item.fromUnit && h.toUnit === item.toUnit))].slice(0, 10));
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(f => f !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  // Helper to translate route to visual category and units
  const activeCategory = categoriesData.find(c => c.id === route.category);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="w-full bg-white dark:bg-slate-900 relative min-h-screen flex flex-col">
        
        {/* 1. Header component */}
        <Header
          currentCategory={route.category}
          currentFromUnit={route.fromUnit}
          currentToUnit={route.toUnit}
          onNavigate={handleNavigate}
          favorites={favorites}
          toggleFavorite={handleToggleFavorite}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* 2. Main content router with 1080px grid alignment */}
        <main className="flex-grow bg-white dark:bg-slate-900">
          <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-row gap-6">
            
            {/* Left Sticky Ad Banner (160px wide) - Hidden until ad scripts are integrated */}
            <aside className="hidden flex-col items-center justify-start w-[160px] flex-shrink-0 sticky top-24 self-start py-8">
              <div className="w-[160px] h-[600px] rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-4 flex flex-col items-center justify-between text-center select-none shadow-sm transition-all hover:border-blue-500/50 dark:hover:border-cyan-500/50">
                <span className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">ADVERTISEMENT</span>
                <div className="flex flex-col items-center gap-2.5">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-500 flex items-center justify-center border border-blue-100 dark:border-blue-900/30">
                    <Sparkles className="h-4 w-4 animate-pulse text-blue-500 dark:text-cyan-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">160 × 600</span>
                  <span className="text-[10px] text-slate-400">Wide Skyscraper</span>
                </div>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 font-mono">UnitsConvertors.com</span>
              </div>
            </aside>

            {/* Central Content Area (aligned to full max-w-7xl) */}
            <div className="flex-grow w-full min-w-0">
              
              {/* VIEW: HOME DASHBOARD */}
              {route.page === "home" && (
                <div className="flex flex-col gap-8 sm:gap-10 pb-[25px] animate-in fade-in duration-300">
                  
                  {/* HERO SECTION */}
                  <section 
                    className="relative overflow-hidden bg-slate-50/45 dark:bg-slate-950/45 rounded-b-3xl border-b border-x border-slate-100 dark:border-slate-900 py-5 flex flex-col items-center"
                    style={{ 
                      backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.08) 1.5px, transparent 1.5px)', 
                      backgroundSize: '24px 24px' 
                    }}
                  >
                    {/* Floating ambient subtle glow orbs */}
                    <div className="absolute top-12 left-10 h-96 w-96 rounded-full bg-blue-500/[0.08] dark:bg-blue-500/[0.12] blur-3xl pointer-events-none" />
                    <div className="absolute bottom-12 right-10 h-96 w-96 rounded-full bg-cyan-500/[0.08] dark:bg-cyan-500/[0.12] blur-3xl pointer-events-none" />
                     <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 relative z-10 text-center items-center">
                      
                      {/* Live Converter Tool Component */}
                      <div className="w-full mt-2">
                        <ConverterTool
                          category={categoriesData.find(c => c.id === quickCatId) || categoriesData[0]}
                          initialFromUnitId={quickFromUnitId}
                          initialToUnitId={quickToUnitId}
                          onAddHistory={handleAddHistory}
                          favorites={favorites}
                          onToggleFavorite={handleToggleFavorite}
                        />
                      </div>

                      {/* Row of 4 trust benefit badges */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 px-0 w-full max-w-[910px] border-t border-slate-200/50 dark:border-slate-800/50">
                        {/* Benefit 1 */}
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20">
                            <CheckCircle className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="font-bold text-[13px] text-slate-800 dark:text-slate-200 leading-snug">100% Accurate</span>
                            <span className="text-[11px] text-slate-400 dark:text-slate-500">NIST verified factors</span>
                          </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20">
                            <Lock className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="font-bold text-[13px] text-slate-800 dark:text-slate-200 leading-snug">100% Offline</span>
                            <span className="text-[11px] text-slate-400 dark:text-slate-500">No server delays</span>
                          </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20">
                            <Zap className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="font-bold text-[13px] text-slate-800 dark:text-slate-200 leading-snug">Instant Results</span>
                            <span className="text-[11px] text-slate-400 dark:text-slate-500">Real-time update</span>
                          </div>
                        </div>

                        {/* Benefit 4 */}
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20">
                            <Shield className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="font-bold text-[13px] text-slate-800 dark:text-slate-200 leading-snug">Privacy First</span>
                            <span className="text-[11px] text-slate-400 dark:text-slate-500">No database tracking</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </section>

                  {/* AD BANNER SLOT */}
                  <AdPlaceholder slotId="home-top-banner" className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 w-full" />

                  {/* CONVERTER CATEGORIES GRID */}
                  <section className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-10 py-4" id="categories-grid">
                    {/* Centered Heading and Subtitle */}
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3">
                      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-1 leading-none">
                        Find Your Converter
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                        Explore our collection of <span className="font-semibold text-slate-800 dark:text-slate-200">accurate measurement converters</span> designed by experts to solve everyday, scientific, and professional calculations.
                      </p>
                    </div>

                    {/* Integrated Centered Search Bar */}
                    <div className="relative w-full max-w-xl mx-auto z-40">
                      <div className="relative flex items-center">
                        <Search className="absolute left-4 h-5 w-5 text-slate-400 dark:text-slate-500 pointer-events-none" />
                        <input
                          type="text"
                          value={heroSearchQuery}
                          onChange={(e) => setHeroSearchQuery(e.target.value)}
                          onFocus={() => setHeroSearchFocused(true)}
                          onBlur={() => setTimeout(() => setHeroSearchFocused(false), 250)}
                          placeholder="Search for a unit or category (e.g., 'inch to cm', 'temperature')..."
                          className="w-full h-[52px] pl-12 pr-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-sans font-medium text-slate-800 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-cyan-500 dark:focus:ring-cyan-500/10 transition-all placeholder-slate-400 dark:placeholder-slate-500"
                        />
                        {heroSearchQuery && (
                          <button
                            onClick={() => setHeroSearchQuery("")}
                            className="absolute right-4 h-6 w-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 flex items-center justify-center text-xs transition-colors"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      {/* Suggestions Dropdown Overlay */}
                      {heroSearchFocused && heroSuggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden z-50 text-left animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="p-2 border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/30 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-4">
                            Suggested Results
                          </div>
                          <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/40">
                            {heroSuggestions.map((item, idx) => (
                              <button
                                key={idx}
                                onMouseDown={() => {
                                  if (item.type === "category") {
                                    handleNavigate(item.id);
                                  } else {
                                    handleNavigate(item.categoryId, item.fromUnitId, item.toUnitId);
                                  }
                                  setHeroSearchQuery("");
                                }}
                                className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-950/50 text-left transition-colors w-full group"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-cyan-400">
                                    {item.type === "category" ? (
                                      <Compass className="h-4 w-4" />
                                    ) : (
                                      <ArrowUpDown className="h-4 w-4" />
                                    )}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                                      {item.name}
                                    </span>
                                    {item.description && (
                                      <span className="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1">
                                        {item.description}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <span className="text-[9px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-md">
                                  {item.badge}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Highly Aligned 4-Column Responsive Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-6 mt-2">
                      {(() => {
                        const filtered = categoriesData.filter(category => {
                          if (!heroSearchQuery.trim()) return true;
                          const q = heroSearchQuery.toLowerCase().trim();
                          return (
                            category.name.toLowerCase().includes(q) ||
                            category.description.toLowerCase().includes(q) ||
                            category.units.some(u => 
                              u.name.toLowerCase().includes(q) || 
                              u.plural.toLowerCase().includes(q) || 
                              u.symbol.toLowerCase().includes(q)
                            )
                          );
                        });

                        // Limit to 16 (4 rows on lg:grid-cols-4) if collapsed and no query
                        const displayed = (!showAllCategories && !heroSearchQuery.trim())
                          ? filtered.slice(0, 16)
                          : filtered;

                        return displayed.map(category => (
                          <CategoryCard
                            key={category.id}
                            category={category}
                            onNavigate={handleNavigate}
                          />
                        ));
                      })()}
                    </div>

                    {/* Centered Large Solid CTA Button */}
                    {!heroSearchQuery.trim() && categoriesData.length > 16 && (
                      <div className="flex justify-center mt-4">
                        <button 
                          onClick={() => setShowAllCategories(!showAllCategories)}
                          className="inline-flex items-center justify-center h-12 px-10 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white font-sans text-sm font-bold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer text-center"
                        >
                          {showAllCategories ? "Show Fewer Converters" : "Discover More Converters"}
                        </button>
                      </div>
                    )}
                  </section>

                  {/* POPULAR CONVERTERS */}
                  <FeaturedConverters onNavigate={handleNavigate} />

                  {/* WHY CHOOSE US (6 PREMIUM FEATURE CARDS) */}
                  <section className="bg-slate-50/50 dark:bg-slate-900/10 border-y border-slate-200/80 dark:border-slate-800/80 py-[25px]">
                    <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
                      <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
                        <h2 className="font-display text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                          Why Choose Units Convertors?
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Trusted by students, developers, researchers, and professional engineers worldwide. Fast, private, and mathematically solid.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Card 1: Accurate Formula */}
                        <div className="flex gap-4 p-5 sm:p-6 bg-white dark:bg-slate-900/55 border border-slate-200/60 dark:border-slate-800/60 rounded-[24px] shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-cyan-400 border border-blue-100/10 flex-shrink-0">
                            <Ruler className="h-5.5 w-5.5" />
                          </div>
                          <div className="flex flex-col gap-1 text-left">
                            <h4 className="font-display font-bold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight">Accurate Formula</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              Uses official NIST standard coefficients and high-precision floating point math for exact calculations.
                            </p>
                          </div>
                        </div>

                        {/* Card 2: Instant Conversion */}
                        <div className="flex gap-4 p-5 sm:p-6 bg-white dark:bg-slate-900/55 border border-slate-200/60 dark:border-slate-800/60 rounded-[24px] shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-400 border border-cyan-100/10 flex-shrink-0">
                            <Zap className="h-5.5 w-5.5" />
                          </div>
                          <div className="flex flex-col gap-1 text-left">
                            <h4 className="font-display font-bold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight">Instant Conversion</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              No server-side waiting or processing lags. Computes offline directly in your browser instantly.
                            </p>
                          </div>
                        </div>

                        {/* Card 3: Mobile Friendly */}
                        <div className="flex gap-4 p-5 sm:p-6 bg-white dark:bg-slate-900/55 border border-slate-200/60 dark:border-slate-800/60 rounded-[24px] shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 border border-emerald-100/10 flex-shrink-0">
                            <Compass className="h-5.5 w-5.5" />
                          </div>
                          <div className="flex flex-col gap-1 text-left">
                            <h4 className="font-display font-bold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight">Mobile Friendly</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              Responsive touch-target layout optimized perfectly for mobile, tablet, and desktop screens.
                            </p>
                          </div>
                        </div>

                        {/* Card 4: Dark Mode Support */}
                        <div className="flex gap-4 p-5 sm:p-6 bg-white dark:bg-slate-900/55 border border-slate-200/60 dark:border-slate-800/60 rounded-[24px] shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400 border border-purple-100/10 flex-shrink-0">
                            <Sparkles className="h-5.5 w-5.5" />
                          </div>
                          <div className="flex flex-col gap-1 text-left">
                            <h4 className="font-display font-bold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight">Dark Mode Support</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              Seamless eye-safe dark theme support to reduce eye strain during midnight study or workspace calculations.
                            </p>
                          </div>
                        </div>

                        {/* Card 5: No Conversion Ads */}
                        <div className="flex gap-4 p-5 sm:p-6 bg-white dark:bg-slate-900/55 border border-slate-200/60 dark:border-slate-800/60 rounded-[24px] shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400 border border-rose-100/10 flex-shrink-0">
                            <Shield className="h-5.5 w-5.5" />
                          </div>
                          <div className="flex flex-col gap-1 text-left">
                            <h4 className="font-display font-bold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight">No Conversion Ads</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              Focus purely on calculations. We never obstruct your tools with annoying popups or video ads.
                            </p>
                          </div>
                        </div>

                        {/* Card 6: 500+ Pages */}
                        <div className="flex gap-4 p-5 sm:p-6 bg-white dark:bg-slate-900/55 border border-slate-200/60 dark:border-slate-800/60 rounded-[24px] shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400 border border-amber-100/10 flex-shrink-0">
                            <Award className="h-5.5 w-5.5" />
                          </div>
                          <div className="flex flex-col gap-1 text-left">
                            <h4 className="font-display font-bold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight">500+ Pages</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              Access an extensive mathematical directory covering almost all standard and scientific unit definitions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* FAQ ACCORDION SECTION */}
                  <FaqAccordion />

                  {/* DYNAMIC INTERNAL LINKING MATRIX */}
                  <InternalLinkingDirectory 
                    categories={categoriesData} 
                    onNavigate={handleNavigate} 
                    favorites={favorites}
                    onToggleFavorite={handleToggleFavorite}
                  />

            {/* NEWSLETTER SUBSCRIPTION CARD (Stay Updated with New Converter Tools) */}
            <section className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 w-full no-print">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12 text-center flex flex-col items-center gap-6 shadow-xl">
                {/* Visual elements */}
                <div className="absolute top-0 right-0 h-40 w-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 h-40 w-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Stay Updated with New Converter Tools
                </h3>
                <p className="text-sm text-slate-400 max-w-md">
                  Subscribe to our quarterly newsletter containing structural guides, conversion tips, and mathematical standards.
                </p>

                {subscribed ? (
                  <div className="text-emerald-400 font-bold text-sm animate-bounce">
                    Thank you! You have successfully subscribed to Units Convertors Updates.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <input
                      type="email"
                      required
                      placeholder="Enter your professional email..."
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="flex-grow h-12 px-4 rounded-xl border border-slate-800 bg-slate-900/60 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="h-12 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
                    >
                      Subscribe Free
                    </button>
                  </form>
                )}
              </div>
            </section>

          </div>
        )}

        {/* VIEW: CATEGORY VIEW */}
        {route.page === "category" && activeCategory && (
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4 animate-in fade-in duration-200">
            {/* Breadcrumbs */}
            <nav className="text-xs font-semibold text-slate-400 flex items-center gap-2">
              <span className="text-slate-600 dark:text-slate-300">{activeCategory.name} Converters</span>
            </nav>

            {/* Category Header Card */}
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="font-display text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                  {activeCategory.name} Converters Studio
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mt-1">
                  {activeCategory.description} Select any unit pairing below to load the customized SEO engine.
                </p>
              </div>
              <span className="flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 w-fit">
                {activeCategory.units.length} Core Units Configured
              </span>
            </div>

            {/* Inline standard converter tool pre-set */}
            <ConverterTool
              category={activeCategory}
              initialFromUnitId={activeCategory.units[0]?.id}
              initialToUnitId={activeCategory.units[1]?.id}
              onAddHistory={handleAddHistory}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />

            {/* Matrix of all possible units list combinations (strength of internal links!) */}
            <div className="flex flex-col gap-6">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                All Available {activeCategory.name} Converters ({activeCategory.units.length * (activeCategory.units.length - 1)} pairs)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {activeCategory.units.map(unitA => (
                  activeCategory.units.map(unitB => {
                    if (unitA.id === unitB.id) return null;
                    return (
                      <div
                        key={`${unitA.id}-to-${unitB.id}`}
                        onClick={() => handleNavigate(activeCategory.id, unitA.id, unitB.id)}
                        className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900 hover:border-blue-500 cursor-pointer transition-all flex items-center justify-between group"
                      >
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                          {unitA.name} to {unitB.name}
                        </span>
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    );
                  })
                ))}
              </div>
            </div>

          </div>
        )}

        {/* VIEW: CONVERTER VIEW */}
        {route.page === "converter" && activeCategory && (
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4 animate-in fade-in duration-200">
            {/* Breadcrumbs */}
            <nav className="text-xs font-semibold text-slate-400 flex items-center gap-2">
              <span onClick={() => handleNavigate(activeCategory.id)} className="hover:text-blue-500 cursor-pointer">{activeCategory.name}</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-slate-600 dark:text-slate-300">
                {activeCategory.units.find(u => u.id === route.fromUnit)?.name} to {activeCategory.units.find(u => u.id === route.toUnit)?.name}
              </span>
            </nav>

            {/* Dynamic H1 Heading */}
            <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
              <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                {activeCategory.units.find(u => u.id === route.fromUnit)?.name} to {activeCategory.units.find(u => u.id === route.toUnit)?.name} Converter
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Calculate live {activeCategory.units.find(u => u.id === route.fromUnit)?.plural} into {activeCategory.units.find(u => u.id === route.toUnit)?.plural} offline instantly.
              </p>
            </div>

            {/* Core interactive calculator */}
            <ConverterTool
              category={activeCategory}
              initialFromUnitId={route.fromUnit}
              initialToUnitId={route.toUnit}
              onAddHistory={handleAddHistory}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />

            {/* SEO Content Box */}
            <SEOContent
              category={activeCategory}
              fromUnit={activeCategory.units.find(u => u.id === route.fromUnit) || activeCategory.units[0]}
              toUnit={activeCategory.units.find(u => u.id === route.toUnit) || activeCategory.units[1] || activeCategory.units[0]}
              onNavigate={handleNavigate}
            />

          </div>
        )}

        {/* VIEW: ABOUT US */}
        {route.page === "about" && (
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 animate-in fade-in duration-200">
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              About Units Convertors
            </h1>
            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed flex flex-col gap-6">
              <p className="text-lg text-slate-700 dark:text-slate-200 font-medium">
                Welcome to Units Convertors — a simple, fast, and reliable platform built to make unit conversions easier for everyone.
              </p>
              <p>
                Whether you're a student solving homework, an engineer working on a project, a developer writing code, a builder planning construction, a chef following a recipe, or someone who simply needs a quick conversion, our goal is to provide accurate results in seconds.
              </p>
              <p>
                We believe that online conversion tools should be easy to use, accessible from any device, and completely free. That's why every converter on our website is designed with a clean interface, instant calculations, and trusted conversion formulas. There are no complicated steps, unnecessary downloads, or sign-ups required—just enter your value, choose the units, and get your result instantly.
              </p>
              <p>
                Our platform covers a wide range of conversion categories, including length, weight, temperature, area, volume, time, speed, pressure, energy, power, data storage, engineering, construction, cooking, electricity, and many more. As we continue to grow, new converters and categories will be added regularly to help meet the needs of students, professionals, businesses, and everyday users around the world.
              </p>
              <p>
                At Units Convertors, accuracy is one of our highest priorities. Every conversion is based on well-established measurement standards and mathematical formulas to ensure dependable results. While we work hard to keep our information accurate and up to date, we always encourage users to verify critical calculations for professional, scientific, or legal purposes.
              </p>
              <p>
                Our website is built with speed, privacy, and user experience in mind. It works smoothly on desktops, tablets, and mobile devices, allowing you to access your favorite conversion tools anytime, anywhere. We also keep the experience clean and distraction-free so you can focus on getting the information you need without unnecessary interruptions.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Our Mission
              </h3>
              <p>
                Our mission is to provide one of the most trusted and user-friendly unit conversion platforms on the web. We aim to simplify everyday calculations by offering fast, accurate, and free tools that anyone can use with confidence.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Why Choose Units Convertors?
              </h3>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-slate-600 dark:text-slate-300">
                <li><strong>Fast and accurate conversions</strong></li>
                <li><strong>Easy-to-use and mobile-friendly interface</strong></li>
                <li><strong>Completely free with no registration required</strong></li>
                <li><strong>Hundreds of converter tools across multiple categories</strong></li>
                <li><strong>Based on trusted conversion standards</strong></li>
                <li><strong>Designed for students, professionals, businesses, and everyday users</strong></li>
                <li><strong>Regularly updated with new tools and improvements</strong></li>
              </ul>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Our Vision
              </h3>
              <p>
                We want to become a trusted global resource for unit conversions by continuously expanding our collection of tools, improving user experience, and maintaining the highest standards of accuracy and reliability.
              </p>

              <p className="mt-4 font-medium text-slate-700 dark:text-slate-200">
                Thank you for choosing Units Convertors. We're committed to making measurements and conversions simple, accurate, and accessible for everyone.
              </p>
            </div>
          </div>
        )}

        {/* VIEW: CONTACT US */}
        {route.page === "contact" && (
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-200">
            
            {/* Left Column: Info & Text */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                Contact Units Convertors
              </h1>
              
              <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed flex flex-col gap-5 text-sm md:text-base">
                <p>
                  We're always happy to hear from our users. Whether you have a question, found an issue, want to suggest a new converter, or simply have feedback about our website, we'd love to hear from you.
                </p>
                <p>
                  At Units Convertors, we're committed to providing accurate, fast, and user-friendly conversion tools. Your feedback helps us improve our platform and create a better experience for everyone.
                </p>

                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mt-4 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-500" /> Get in Touch
                </h3>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                  <p className="m-0">
                    <strong>Email:</strong> <a href="mailto:unitsconvertors@gmail.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">unitsconvertors@gmail.com</a>
                  </p>
                  <p className="m-0 text-xs text-slate-500 dark:text-slate-400">
                    We aim to respond to all inquiries within 24–48 business hours.
                  </p>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mt-4">
                  How We Can Help
                </h3>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                  <li>General questions about our website</li>
                  <li>Report incorrect conversions or calculation errors</li>
                  <li>Suggest new converter tools or features</li>
                  <li>Report technical issues or bugs</li>
                  <li>Business partnerships and collaboration</li>
                  <li>Advertising and media inquiries</li>
                  <li>Feedback and improvement suggestions</li>
                </ul>

                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mt-4">
                  Before Contacting Us
                </h3>
                <p className="text-sm m-0">To help us resolve your issue quickly, please include:</p>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                  <li>The converter page or URL you're referring to</li>
                  <li>A brief description of the issue</li>
                  <li>Screenshots (if applicable)</li>
                  <li>Your device and browser (optional)</li>
                </ul>

                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mt-4">
                  Business Inquiries
                </h3>
                <p className="m-0">
                  For partnerships, advertising opportunities, or other business-related requests, please contact us at:
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <p className="m-0">
                    <strong>Email:</strong> <a href="mailto:unitsconvertors@gmail.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">unitsconvertors@gmail.com</a>
                  </p>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mt-4">
                  Our Commitment
                </h3>
                <p>
                  We value every message we receive and strive to provide helpful, timely, and professional support. Your feedback plays an important role in improving Units Convertors and helping us serve millions of users with accurate and reliable conversion tools.
                </p>
                <p className="font-medium text-slate-700 dark:text-slate-200 mt-2">
                  Thank you for visiting Units Convertors. We appreciate your support and look forward to hearing from you.
                </p>
              </div>
            </div>

            {/* Right Column: Simple Form */}
            <div className="lg:col-span-5">
              <form onSubmit={(e) => { e.preventDefault(); alert("Message sent! We will respond shortly."); }} className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-col gap-4 sticky top-6 shadow-sm">
                <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg">Send Feedback Message</h3>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">Your Name</label>
                  <input required type="text" className="h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Address</label>
                  <input required type="email" className="h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">Message</label>
                  <textarea required rows={4} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent dark:text-white"></textarea>
                </div>
                <button type="submit" className="h-11 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        )}

        {/* VIEW: PRIVACY POLICY */}
        {route.page === "privacy" && (
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 animate-in fade-in duration-200">
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              Privacy Policy
            </h1>
            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed flex flex-col gap-6">
              <p className="text-lg text-slate-700 dark:text-slate-200 font-medium">
                Welcome to Units Convertors. Your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and manage information when you use our website. By accessing or using Units Convertors, you agree to the practices described below.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Information We Collect
              </h3>
              <p>
                We collect only the information necessary to operate and improve our website.
              </p>
              <p>This may include:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-slate-600 dark:text-slate-300">
                <li>Basic device and browser information</li>
                <li>Anonymous usage statistics</li>
                <li>Pages visited and time spent on our website</li>
                <li>IP address (for security and analytics purposes)</li>
                <li>Cookies and similar technologies</li>
              </ul>
              <p>
                If you contact us by email, we may also receive the information you choose to provide, such as your name, email address, and message.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                How We Use Your Information
              </h3>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-slate-600 dark:text-slate-300">
                <li>Improve website performance and user experience</li>
                <li>Maintain website security</li>
                <li>Fix technical issues</li>
                <li>Analyze website traffic and usage trends</li>
                <li>Respond to customer inquiries</li>
                <li>Develop new converter tools and features</li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Cookies
              </h3>
              <p>
                Units Convertors uses cookies to enhance your browsing experience.
              </p>
              <p>Cookies help us:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-slate-600 dark:text-slate-300">
                <li>Remember your preferences</li>
                <li>Improve website performance</li>
                <li>Measure visitor traffic</li>
                <li>Provide relevant advertisements (where applicable)</li>
              </ul>
              <p>
                You can disable cookies at any time through your browser settings.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Third-Party Services
              </h3>
              <p>
                Our website may use trusted third-party services, including:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-slate-600 dark:text-slate-300">
                <li>Google Analytics</li>
                <li>Google AdSense</li>
                <li>Cloud hosting providers</li>
                <li>Website security services</li>
              </ul>
              <p>
                These services may collect information according to their own privacy policies.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Data Security
              </h3>
              <p>
                Protecting your information is one of our highest priorities.
              </p>
              <p>We follow industry-standard security practices, including:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-slate-600 dark:text-slate-300">
                <li>Secure HTTPS encryption</li>
                <li>Regular security updates</li>
                <li>Protected server infrastructure</li>
                <li>Access control and authentication</li>
                <li>Continuous monitoring for suspicious activity</li>
                <li>Secure data transmission</li>
              </ul>
              <p>
                While no website can guarantee absolute security, we take reasonable steps to safeguard your information.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Security Standards
              </h3>
              <p>
                Units Convertors is designed with security and reliability in mind.
              </p>
              <p>Our platform follows best practices such as:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-slate-600 dark:text-slate-300">
                <li>SSL/TLS encrypted connections</li>
                <li>Secure HTTP headers</li>
                <li>Protection against common web vulnerabilities</li>
                <li>Regular software maintenance</li>
                <li>Performance optimization</li>
                <li>Privacy-first design</li>
                <li>Minimal data collection</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Advertising
              </h3>
              <p>
                We may display advertisements through trusted advertising partners such as Google AdSense.
              </p>
              <p>
                These partners may use cookies to show relevant ads based on your interests. You can manage your advertising preferences through your browser or your Google account settings.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                External Links
              </h3>
              <p>
                Our website may contain links to third-party websites.
              </p>
              <p>
                We are not responsible for the privacy practices, content, or security of external websites. We encourage users to review their privacy policies before sharing personal information.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Children's Privacy
              </h3>
              <p>
                Units Convertors is intended for general audiences.
              </p>
              <p>
                We do not knowingly collect personal information from children under the age of 13. If you believe a child has provided personal information, please contact us so we can promptly remove it.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Your Rights
              </h3>
              <p>
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-slate-600 dark:text-slate-300">
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent where applicable</li>
                <li>Object to certain data processing activities</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the email below.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Changes to This Privacy Policy
              </h3>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or security practices.
              </p>
              <p>
                Any updates will be posted on this page with a revised Last Updated date.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Contact Us
              </h3>
              <p>
                If you have any questions about this Privacy Policy or our security practices, please contact us:
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col gap-1">
                <p className="m-0">
                  <strong>Email:</strong> <a href="mailto:unitsconvertors@gmail.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">unitsconvertors@gmail.com</a>
                </p>
                <p className="m-0 text-xs text-slate-500 dark:text-slate-400">
                  We aim to respond to all privacy-related inquiries within 24–48 business hours.
                </p>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Our Commitment
              </h3>
              <p>
                At Units Convertors, we are committed to providing a fast, secure, and trustworthy experience. We believe your privacy deserves respect, your data should be protected, and your experience should remain simple, reliable, and completely transparent.
              </p>
            </div>
          </div>
        )}

        {/* VIEW: TERMS & CONDITIONS */}
        {route.page === "terms" && (
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 animate-in fade-in duration-200">
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              Terms & Conditions
            </h1>
            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed flex flex-col gap-6">
              <p className="text-lg text-slate-700 dark:text-slate-200 font-medium">
                Welcome to Units Convertors. By accessing or using our website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using our website.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Acceptance of Terms
              </h3>
              <p>
                By using Units Convertors, you confirm that you have read, understood, and accepted these Terms & Conditions, along with our Privacy Policy.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Use of Our Website
              </h3>
              <p>
                You may use Units Convertors for personal, educational, and commercial reference purposes, provided that you use the website responsibly and lawfully.
              </p>
              <p>While using our website, you agree not to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-slate-600 dark:text-slate-300">
                <li>Use the website for any unlawful or fraudulent activity.</li>
                <li>Attempt to damage, disrupt, or interfere with our services or servers.</li>
                <li>Upload or distribute harmful software, viruses, or malicious code.</li>
                <li>Use automated bots or scraping tools that place excessive load on our website.</li>
                <li>Copy, reproduce, or republish substantial portions of our content without written permission.</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Accuracy of Information
              </h3>
              <p>
                We strive to provide accurate and up-to-date conversion tools based on internationally recognized measurement standards.
              </p>
              <p>
                However, while we make every effort to ensure accuracy, we cannot guarantee that every conversion or piece of information is completely free from errors. Users should independently verify results before making important financial, engineering, scientific, medical, legal, or business decisions.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Intellectual Property
              </h3>
              <p>
                All content available on Units Convertors, including but not limited to text, graphics, logos, icons, website design, software, databases, and original content, is the property of Units Convertors unless otherwise stated and is protected by applicable intellectual property laws.
              </p>
              <p>
                You may not reproduce, modify, distribute, or commercially exploit our content without prior written permission.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Third-Party Services
              </h3>
              <p>
                Our website may include links to third-party websites, services, or advertisements for your convenience.
              </p>
              <p>
                We do not control or endorse these third-party websites and are not responsible for their content, policies, products, or services. Your use of third-party websites is entirely at your own risk.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Advertisements
              </h3>
              <p>
                Units Convertors may display advertisements through trusted advertising partners, including Google AdSense and similar advertising networks.
              </p>
              <p>
                These advertisements help support the operation and maintenance of our free services.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Limitation of Liability
              </h3>
              <p>
                Units Convertors is provided on an "as is" and "as available" basis.
              </p>
              <p>
                To the fullest extent permitted by law, Units Convertors and its owners shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the website or its content.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Website Availability
              </h3>
              <p>
                We work to keep our website available at all times. However, we cannot guarantee uninterrupted access and may temporarily suspend or restrict services for maintenance, updates, technical issues, or unforeseen circumstances.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                User Feedback
              </h3>
              <p>
                We welcome suggestions, ideas, and feedback to improve our services.
              </p>
              <p>
                By submitting feedback, you grant Units Convertors the right to use, modify, and implement your suggestions without any obligation to provide compensation or acknowledgment.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Changes to These Terms
              </h3>
              <p>
                We reserve the right to update or modify these Terms & Conditions at any time. Any changes will become effective immediately after being published on this page. Continued use of the website after updates constitutes your acceptance of the revised Terms.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Governing Law
              </h3>
              <p>
                These Terms & Conditions shall be governed by and interpreted in accordance with the applicable laws of the jurisdiction in which Units Convertors operates, without regard to conflict of law principles.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Contact Us
              </h3>
              <p>
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col gap-1">
                <p className="m-0">
                  <strong>Email:</strong> <a href="mailto:unitsconvertors@gmail.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">unitsconvertors@gmail.com</a>
                </p>
                <p className="m-0 text-xs text-slate-500 dark:text-slate-400">
                  We aim to respond to all inquiries within 24–48 business hours.
                </p>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Final Note
              </h3>
              <p>
                Thank you for using Units Convertors. Our goal is to provide fast, accurate, and reliable conversion tools in a safe, secure, and user-friendly environment. By using our website responsibly, you help us maintain a trusted platform for millions of users worldwide.
              </p>
            </div>
          </div>
        )}

        {/* VIEW: DISCLAIMER */}
        {route.page === "disclaimer" && (
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 animate-in fade-in duration-200">
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              Disclaimer
            </h1>
            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed flex flex-col gap-6">
              <p className="text-lg text-slate-700 dark:text-slate-200 font-medium">
                Welcome to Units Convertors. This Disclaimer explains the limitations of the information and services provided on our website. By using Units Convertors, you acknowledge and agree to the terms outlined below.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                General Information
              </h3>
              <p>
                All content, converter tools, calculations, and information available on Units Convertors are provided for general informational and educational purposes only. While we make every effort to ensure that our conversion formulas and data are accurate and up to date, we do not guarantee that all information is complete, error-free, or suitable for every situation.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Accuracy of Conversions
              </h3>
              <p>
                Our converter tools are based on widely accepted mathematical formulas and international measurement standards. Although we regularly review and improve our calculators, conversion results should not be considered a substitute for professional advice or certified measurements.
              </p>
              <p>
                For engineering, scientific, medical, financial, legal, or other critical applications, we recommend independently verifying all results before making important decisions.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                No Professional Advice
              </h3>
              <p>
                The information provided on Units Convertors is not intended to replace professional advice. Nothing on this website should be interpreted as engineering, legal, financial, medical, scientific, or technical advice.
              </p>
              <p>
                Always consult a qualified professional when accuracy is essential for your work or personal decisions.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                External Links
              </h3>
              <p>
                Our website may contain links to third-party websites for your convenience. We do not own, control, or endorse the content, products, services, or privacy practices of these external websites.
              </p>
              <p>
                Visiting third-party websites is entirely at your own discretion and risk.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Advertisements
              </h3>
              <p>
                Units Convertors may display advertisements from trusted advertising partners, including Google AdSense. These advertisements help us maintain and improve our free services.
              </p>
              <p>
                We are not responsible for the products, services, or claims made by third-party advertisers.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Website Availability
              </h3>
              <p>
                We strive to keep Units Convertors available at all times. However, we cannot guarantee uninterrupted access. The website may occasionally experience maintenance, updates, technical issues, or temporary downtime.
              </p>
              <p>
                We are not responsible for any inconvenience or loss resulting from service interruptions.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Limitation of Liability
              </h3>
              <p>
                To the fullest extent permitted by applicable law, Units Convertors and its owners shall not be liable for any direct, indirect, incidental, consequential, or special damages resulting from the use of, or reliance on, the information, tools, or services provided on this website.
              </p>
              <p>
                Your use of this website is entirely at your own risk.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Copyright
              </h3>
              <p>
                All original content, graphics, logos, website design, and software on Units Convertors are protected by applicable copyright and intellectual property laws unless otherwise stated.
              </p>
              <p>
                Unauthorized copying, reproduction, or distribution of our content without prior written permission is prohibited.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Changes to This Disclaimer
              </h3>
              <p>
                We may update this Disclaimer from time to time to reflect changes in our services, legal requirements, or website policies. Any updates will be posted on this page with a revised Last Updated date.
              </p>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Contact Us
              </h3>
              <p>
                If you have any questions regarding this Disclaimer, please contact us:
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col gap-1">
                <p className="m-0">
                  <strong>Email:</strong> <a href="mailto:unitsconvertors@gmail.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">unitsconvertors@gmail.com</a>
                </p>
                <p className="m-0 text-xs text-slate-500 dark:text-slate-400">
                  We aim to respond to all inquiries within 24–48 business hours.
                </p>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2">
                Final Note
              </h3>
              <p>
                At Units Convertors, our mission is to provide fast, accurate, and easy-to-use conversion tools for everyone. While we work hard to maintain the quality and reliability of our platform, users are encouraged to verify important calculations independently whenever precision is critical.
              </p>
            </div>
          </div>
        )}

        {/* VIEW: SITEMAP */}
        {route.page === "sitemap" && (
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-10 animate-in fade-in duration-200">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <h1 className="font-display text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                HTML Sitemap & Directory
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                A complete catalog listing all converter pages, core informational entries, and links.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categoriesData.map(cat => {
                const Icon = categoryIconMap[cat.id] || List;
                const style = getCategoryStyle(cat.id);
                return (
                  <div key={cat.id} className="flex flex-col gap-3">
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-1 flex items-center gap-2">
                      <div className={`flex h-6 w-6 items-center justify-center rounded-md ${style.bg} ${style.text}`}>
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      {cat.name} Converters
                    </h3>
                    <ul className="flex flex-col gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <li>
                        <button onClick={() => handleNavigate(cat.id)} className="hover:text-blue-500 hover:underline font-semibold text-left">
                          {cat.name} Dashboard
                        </button>
                      </li>
                      {cat.units.slice(0, 8).map(unitA => (
                        cat.units.slice(0, 3).map(unitB => {
                          if (unitA.id === unitB.id) return null;
                          return (
                            <li key={`${unitA.id}-${unitB.id}`}>
                              <button onClick={() => handleNavigate(cat.id, unitA.id, unitB.id)} className="hover:text-blue-500 hover:underline text-left">
                                {unitA.name} to {unitB.name}
                              </button>
                            </li>
                          );
                        })
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW: BOOKMARKED FAVORITES */}
        {route.page === "favorites" && (
          <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-8 animate-in fade-in duration-200">
            <h1 className="font-display text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              <Heart className="h-8 w-8 fill-rose-600 text-rose-600" />
              My Favorite Converters
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Your bookmarked unit pairings are saved dynamically in your browser's Local Storage for fast, convenient future reference.
            </p>

            {favorites.length === 0 ? (
              <div className="p-10 text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/40 text-slate-400">
                You haven't bookmarked any converters yet. Click the "Favorite" button inside any active converter tool to populate this list.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {favorites.map(favId => {
                  const [catId, slug] = favId.split("/");
                  const [fromId, toId] = slug.split("-to-");
                  const cat = categoriesData.find(c => c.id === catId);
                  const fromU = cat?.units.find(u => u.id === fromId);
                  const toU = cat?.units.find(u => u.id === toId);
                  return (
                    <div 
                      key={favId}
                      className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between items-start gap-4 hover:shadow-lg transition-all"
                    >
                      <div onClick={() => handleNavigate(catId, fromId, toId)} className="cursor-pointer flex flex-col gap-1 w-full">
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                          {cat?.name || "Converter"}
                        </span>
                        <h4 className="font-display font-bold text-slate-900 dark:text-white text-base leading-snug hover:text-blue-600">
                          {fromU?.name} ↔ {toU?.name}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <button
                          onClick={() => handleNavigate(catId, fromId, toId)}
                          className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                        >
                          Open Tool
                          <ArrowRight className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => handleToggleFavorite(favId)}
                          className="text-xs font-semibold text-rose-500 hover:text-rose-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* VIEW: NIST ENGINE VALIDATION & REPORT */}
        {route.page === "validator" && (
          <ValidatorPage />
        )}

            </div>

            {/* Right Sticky Ad Banner (160px wide) - Hidden until ad scripts are integrated */}
            <aside className="hidden flex-col items-center justify-start w-[160px] flex-shrink-0 sticky top-24 self-start py-8">
              <div className="w-[160px] h-[600px] rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-4 flex flex-col items-center justify-between text-center select-none shadow-sm transition-all hover:border-blue-500/50 dark:hover:border-cyan-500/50">
                <span className="text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">ADVERTISEMENT</span>
                <div className="flex flex-col items-center gap-2.5">
                  <div className="h-10 w-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-500 flex items-center justify-center border border-cyan-100 dark:border-cyan-900/30">
                    <Sparkles className="h-4 w-4 animate-pulse text-cyan-500 dark:text-cyan-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">160 × 600</span>
                  <span className="text-[10px] text-slate-400">Wide Skyscraper</span>
                </div>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 font-mono">UnitsConvertors.com</span>
              </div>
            </aside>

          </div>
        </main>

        {/* 3. Footer component */}
        <Footer onNavigate={handleNavigate} />

      </div>
    </div>
  );
}
