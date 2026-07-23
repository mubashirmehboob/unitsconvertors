import React, { useState, useEffect, useRef } from "react";
import { 
  Ruler, Weight, Grid, Box, Thermometer, Clock, Gauge, ArrowDownCircle, 
  Zap, Activity, Droplet, ChefHat, Database, Cpu, Lightbulb, Atom,
  Search, Moon, Sun, Menu, X, Heart, Info, Mail, ChevronDown, Sparkles,
  Volume2, Hammer, Waves, Compass, HardHat, Wifi, Shield, Orbit,
  RotateCw, Battery, Radio, TrendingUp, Layers
} from "lucide-react";
import Logo from "./Logo";
import { categoriesData } from "../data/convertersData";
import { Category, Unit } from "../types";

// Icon mapper for categories
export const categoryIconMap: Record<string, React.ComponentType<any>> = {
  "length": Ruler,
  "weight-mass": Weight,
  "area": Grid,
  "volume": Box,
  "temperature": Thermometer,
  "time": Clock,
  "speed": Gauge,
  "pressure": ArrowDownCircle,
  "energy": Zap,
  "power": Activity,
  "fuel-economy": Droplet,
  "cooking": ChefHat,
  "data-storage": Database,
  "engineering": Layers, // repurposed as Density
  "electrical": Zap, // repurposed as Voltage
  "scientific": Atom, // repurposed as Amount of Substance
  "light": Sun,
  "sound": Volume2,
  "force": Hammer,
  "flow": Waves,
  "angle": Compass,
  "electricity": Activity, // repurposed as Electric Current
  "construction": HardHat,
  "data-transfer": Wifi,
  "solid-angle": Orbit,
  "torque": RotateCw,
  "acceleration": TrendingUp,
  "electric-resistance": Shield,
  "capacitance": Cpu,
  "inductance": Waves,
  "electric-charge": Battery,
  "radioactivity": Radio
};

export interface CategoryStyle {
  bg: string;
  text: string;
  border: string;
  hoverBg: string;
  hoverText: string;
  badgeBg: string;
  gradient: string;
}

export const categoryStyleMap: Record<string, CategoryStyle> = {
  "length": {
    bg: "bg-rose-50 dark:bg-rose-950/30",
    text: "text-rose-600 dark:text-rose-400",
    border: "border-rose-100 dark:border-rose-900/30",
    hoverBg: "group-hover:bg-rose-600 group-hover:text-white",
    hoverText: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
    badgeBg: "bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400",
    gradient: "from-rose-600/10 to-pink-500/10"
  },
  "weight-mass": {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-100 dark:border-blue-900/30",
    hoverBg: "group-hover:bg-blue-600 group-hover:text-white",
    hoverText: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    badgeBg: "bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400",
    gradient: "from-blue-600/10 to-indigo-500/10"
  },
  "area": {
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-100 dark:border-emerald-900/30",
    hoverBg: "group-hover:bg-emerald-600 group-hover:text-white",
    hoverText: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    badgeBg: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400",
    gradient: "from-emerald-600/10 to-teal-500/10"
  },
  "volume": {
    bg: "bg-violet-50 dark:bg-violet-950/30",
    text: "text-violet-600 dark:text-violet-400",
    border: "border-violet-100 dark:border-violet-900/30",
    hoverBg: "group-hover:bg-violet-600 group-hover:text-white",
    hoverText: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
    badgeBg: "bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400",
    gradient: "from-violet-600/10 to-fuchsia-500/10"
  },
  "temperature": {
    bg: "bg-orange-50 dark:bg-orange-950/30",
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-100 dark:border-orange-900/30",
    hoverBg: "group-hover:bg-orange-600 group-hover:text-white",
    hoverText: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
    badgeBg: "bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400",
    gradient: "from-orange-600/10 to-red-500/10"
  },
  "time": {
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-100 dark:border-indigo-900/30",
    hoverBg: "group-hover:bg-indigo-600 group-hover:text-white",
    hoverText: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
    badgeBg: "bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400",
    gradient: "from-indigo-600/10 to-sky-500/10"
  },
  "speed": {
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-100 dark:border-cyan-900/30",
    hoverBg: "group-hover:bg-cyan-600 group-hover:text-white",
    hoverText: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
    badgeBg: "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400",
    gradient: "from-cyan-600/10 to-blue-500/10"
  },
  "pressure": {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-100 dark:border-purple-900/30",
    hoverBg: "group-hover:bg-purple-600 group-hover:text-white",
    hoverText: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
    badgeBg: "bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400",
    gradient: "from-purple-600/10 to-pink-500/10"
  },
  "energy": {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-100 dark:border-amber-900/30",
    hoverBg: "group-hover:bg-amber-500 group-hover:text-white",
    hoverText: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
    badgeBg: "bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400",
    gradient: "from-amber-600/10 to-yellow-500/10"
  },
  "power": {
    bg: "bg-red-50 dark:bg-red-950/30",
    text: "text-red-600 dark:text-red-400",
    border: "border-red-100 dark:border-red-900/30",
    hoverBg: "group-hover:bg-red-600 group-hover:text-white",
    hoverText: "group-hover:text-red-600 dark:group-hover:text-red-400",
    badgeBg: "bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400",
    gradient: "from-red-600/10 to-orange-500/10"
  },
  "fuel-economy": {
    bg: "bg-teal-50 dark:bg-teal-950/30",
    text: "text-teal-600 dark:text-teal-400",
    border: "border-teal-100 dark:border-teal-900/30",
    hoverBg: "group-hover:bg-teal-600 group-hover:text-white",
    hoverText: "group-hover:text-teal-600 dark:group-hover:text-teal-400",
    badgeBg: "bg-teal-100 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400",
    gradient: "from-teal-600/10 to-emerald-500/10"
  },
  "cooking": {
    bg: "bg-pink-50 dark:bg-pink-950/30",
    text: "text-pink-600 dark:text-pink-400",
    border: "border-pink-100 dark:border-pink-900/30",
    hoverBg: "group-hover:bg-pink-600 group-hover:text-white",
    hoverText: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
    badgeBg: "bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400",
    gradient: "from-pink-600/10 to-rose-500/10"
  },
  "data-storage": {
    bg: "bg-sky-50 dark:bg-sky-950/30",
    text: "text-sky-600 dark:text-sky-400",
    border: "border-sky-100 dark:border-sky-900/30",
    hoverBg: "group-hover:bg-sky-600 group-hover:text-white",
    hoverText: "group-hover:text-sky-600 dark:group-hover:text-sky-400",
    badgeBg: "bg-sky-100 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400",
    gradient: "from-sky-600/10 to-blue-500/10"
  },
  "engineering": {
    bg: "bg-fuchsia-50 dark:bg-fuchsia-950/30",
    text: "text-fuchsia-600 dark:text-fuchsia-400",
    border: "border-fuchsia-100 dark:border-fuchsia-900/30",
    hoverBg: "group-hover:bg-fuchsia-600 group-hover:text-white",
    hoverText: "group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400",
    badgeBg: "bg-fuchsia-100 dark:bg-fuchsia-950/50 text-fuchsia-600 dark:text-fuchsia-400",
    gradient: "from-fuchsia-600/10 to-purple-500/10"
  },
  "electrical": {
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    text: "text-yellow-600 dark:text-yellow-400",
    border: "border-yellow-100 dark:border-yellow-900/30",
    hoverBg: "group-hover:bg-yellow-500 group-hover:text-white",
    hoverText: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400",
    badgeBg: "bg-yellow-100 dark:bg-yellow-950/50 text-yellow-600 dark:text-yellow-400",
    gradient: "from-yellow-600/10 to-amber-500/10"
  },
  "scientific": {
    bg: "bg-lime-50 dark:bg-lime-950/30",
    text: "text-lime-600 dark:text-lime-400",
    border: "border-lime-100 dark:border-lime-900/30",
    hoverBg: "group-hover:bg-lime-600 group-hover:text-white",
    hoverText: "group-hover:text-lime-600 dark:group-hover:text-lime-400",
    badgeBg: "bg-lime-100 dark:bg-lime-950/50 text-lime-600 dark:text-lime-400",
    gradient: "from-lime-600/10 to-emerald-500/10"
  },
  "light": {
    bg: "bg-orange-50 dark:bg-orange-950/30",
    text: "text-orange-500 dark:text-orange-400",
    border: "border-orange-100 dark:border-orange-900/30",
    hoverBg: "group-hover:bg-orange-500 group-hover:text-white",
    hoverText: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
    badgeBg: "bg-orange-100 dark:bg-orange-950/50 text-orange-500 dark:text-orange-400",
    gradient: "from-orange-500/10 to-amber-500/10"
  },
  "sound": {
    bg: "bg-zinc-100 dark:bg-zinc-900",
    text: "text-zinc-600 dark:text-zinc-400",
    border: "border-zinc-200 dark:border-zinc-800",
    hoverBg: "group-hover:bg-zinc-600 group-hover:text-white",
    hoverText: "group-hover:text-zinc-600 dark:group-hover:text-zinc-400",
    badgeBg: "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
    gradient: "from-zinc-500/10 to-slate-500/10"
  },
  "force": {
    bg: "bg-red-50 dark:bg-red-950/30",
    text: "text-red-500 dark:text-red-400",
    border: "border-red-100 dark:border-red-900/30",
    hoverBg: "group-hover:bg-red-500 group-hover:text-white",
    hoverText: "group-hover:text-red-500 dark:group-hover:text-red-400",
    badgeBg: "bg-red-100 dark:bg-red-950/50 text-red-500 dark:text-red-400",
    gradient: "from-red-500/10 to-pink-500/10"
  },
  "flow": {
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    text: "text-cyan-500 dark:text-cyan-400",
    border: "border-cyan-100 dark:border-cyan-900/30",
    hoverBg: "group-hover:bg-cyan-500 group-hover:text-white",
    hoverText: "group-hover:text-cyan-500 dark:group-hover:text-cyan-400",
    badgeBg: "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-500 dark:text-cyan-400",
    gradient: "from-cyan-500/10 to-indigo-500/10"
  },
  "angle": {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    text: "text-purple-500 dark:text-purple-400",
    border: "border-purple-100 dark:border-purple-900/30",
    hoverBg: "group-hover:bg-purple-500 group-hover:text-white",
    hoverText: "group-hover:text-purple-500 dark:group-hover:text-purple-400",
    badgeBg: "bg-purple-100 dark:bg-purple-950/50 text-purple-500 dark:text-purple-400",
    gradient: "from-purple-500/10 to-fuchsia-500/10"
  },
  "electricity": {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    text: "text-amber-500 dark:text-amber-400",
    border: "border-amber-100 dark:border-amber-900/30",
    hoverBg: "group-hover:bg-amber-500 group-hover:text-white",
    hoverText: "group-hover:text-amber-500 dark:group-hover:text-amber-400",
    badgeBg: "bg-amber-100 dark:bg-amber-950/50 text-amber-500 dark:text-amber-400",
    gradient: "from-amber-500/10 to-yellow-500/10"
  },
  "construction": {
    bg: "bg-orange-50 dark:bg-orange-950/30",
    text: "text-orange-500 dark:text-orange-400",
    border: "border-orange-100 dark:border-orange-900/30",
    hoverBg: "group-hover:bg-orange-500 group-hover:text-white",
    hoverText: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
    badgeBg: "bg-orange-100 dark:bg-orange-950/50 text-orange-500 dark:text-orange-400",
    gradient: "from-orange-500/10 to-red-500/10"
  },
  "data-transfer": {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-500 dark:text-blue-400",
    border: "border-blue-100 dark:border-blue-900/30",
    hoverBg: "group-hover:bg-blue-500 group-hover:text-white",
    hoverText: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
    badgeBg: "bg-blue-100 dark:bg-blue-950/50 text-blue-500 dark:text-blue-400",
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  "solid-angle": {
    bg: "bg-sky-50 dark:bg-sky-950/30",
    text: "text-sky-600 dark:text-sky-400",
    border: "border-sky-100 dark:border-sky-900/30",
    hoverBg: "group-hover:bg-sky-600 group-hover:text-white",
    hoverText: "group-hover:text-sky-600 dark:group-hover:text-sky-400",
    badgeBg: "bg-sky-100 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400",
    gradient: "from-sky-600/10 to-blue-500/10"
  },
  "torque": {
    bg: "bg-fuchsia-50 dark:bg-fuchsia-950/30",
    text: "text-fuchsia-600 dark:text-fuchsia-400",
    border: "border-fuchsia-100 dark:border-fuchsia-900/30",
    hoverBg: "group-hover:bg-fuchsia-600 group-hover:text-white",
    hoverText: "group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400",
    badgeBg: "bg-fuchsia-100 dark:bg-fuchsia-950/50 text-fuchsia-600 dark:text-fuchsia-400",
    gradient: "from-fuchsia-600/10 to-purple-500/10"
  },
  "acceleration": {
    bg: "bg-lime-50 dark:bg-lime-950/30",
    text: "text-lime-600 dark:text-lime-400",
    border: "border-lime-100 dark:border-lime-900/30",
    hoverBg: "group-hover:bg-lime-600 group-hover:text-white",
    hoverText: "group-hover:text-lime-600 dark:group-hover:text-lime-400",
    badgeBg: "bg-lime-100 dark:bg-lime-950/50 text-lime-600 dark:text-lime-400",
    gradient: "from-lime-600/10 to-emerald-500/10"
  },
  "electric-resistance": {
    bg: "bg-zinc-100 dark:bg-zinc-800",
    text: "text-zinc-600 dark:text-zinc-400",
    border: "border-zinc-200 dark:border-zinc-800",
    hoverBg: "group-hover:bg-zinc-600 group-hover:text-white",
    hoverText: "group-hover:text-zinc-600 dark:group-hover:text-zinc-400",
    badgeBg: "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
    gradient: "from-zinc-500/10 to-slate-500/10"
  },
  "capacitance": {
    bg: "bg-pink-50 dark:bg-pink-950/30",
    text: "text-pink-600 dark:text-pink-400",
    border: "border-pink-100 dark:border-pink-900/30",
    hoverBg: "group-hover:bg-pink-600 group-hover:text-white",
    hoverText: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
    badgeBg: "bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400",
    gradient: "from-pink-600/10 to-rose-500/10"
  },
  "inductance": {
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-100 dark:border-indigo-900/30",
    hoverBg: "group-hover:bg-indigo-600 group-hover:text-white",
    hoverText: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
    badgeBg: "bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400",
    gradient: "from-indigo-600/10 to-sky-500/10"
  },
  "electric-charge": {
    bg: "bg-teal-50 dark:bg-teal-950/30",
    text: "text-teal-600 dark:text-teal-400",
    border: "border-teal-100 dark:border-teal-900/30",
    hoverBg: "group-hover:bg-teal-600 group-hover:text-white",
    hoverText: "group-hover:text-teal-600 dark:group-hover:text-teal-400",
    badgeBg: "bg-teal-100 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400",
    gradient: "from-teal-600/10 to-emerald-500/10"
  },
  "radioactivity": {
    bg: "bg-orange-50 dark:bg-orange-950/30",
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-100 dark:border-orange-900/30",
    hoverBg: "group-hover:bg-orange-600 group-hover:text-white",
    hoverText: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
    badgeBg: "bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400",
    gradient: "from-orange-600/10 to-red-500/10"
  }
};

export function getCategoryStyle(catId: string): CategoryStyle {
  return categoryStyleMap[catId] || {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-100 dark:border-blue-900/30",
    hoverBg: "group-hover:bg-blue-600 group-hover:text-white",
    hoverText: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    badgeBg: "bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400",
    gradient: "from-blue-600/10 to-indigo-500/10"
  };
}

interface HeaderProps {
  currentCategory: string;
  currentFromUnit: string;
  currentToUnit: string;
  onNavigate: (category: string, fromUnit?: string, toUnit?: string, extraPage?: string) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({
  currentCategory,
  currentFromUnit,
  currentToUnit,
  onNavigate,
  favorites,
  darkMode,
  setDarkMode
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{
    category: Category;
    from: Unit;
    to: Unit;
    title: string;
    slug: string;
  }[]>([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const searchRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Close search/mega-menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync dark mode class with documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Live search calculation
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const words = query.split(/\s+to\s+|\s+-\s+|\s+/); // split by 'to', '-' or spaces

    const results: typeof searchResults = [];

    // Scan all categories and units
    categoriesData.forEach(cat => {
      // Find units that match the query
      cat.units.forEach(unitA => {
        cat.units.forEach(unitB => {
          if (unitA.id === unitB.id) return;

          const title = `${unitA.name} to ${unitB.name}`;
          const titlePlural = `${unitA.plural} to ${unitB.plural}`;
          const code = `${unitA.symbol} to ${unitB.symbol}`;
          const slug = `${unitA.id}-to-${unitB.id}`;

          // Check if both words are matched or title matches
          let score = 0;
          const fullString = `${title} ${titlePlural} ${code} ${cat.name}`.toLowerCase();
          
          if (words.every(word => fullString.includes(word))) {
            score += 10;
            // Exact match boosts score
            if (fullString.startsWith(query)) score += 5;
            
            results.push({
              category: cat,
              from: unitA,
              to: unitB,
              title: `${unitA.name} ↔ ${unitB.name}`,
              slug
            });
          }
        });
      });
    });

    // Limit to 8 highly relevant results
    setSearchResults(results.slice(0, 8));
    setSelectedIndex(0);
  }, [searchQuery]);

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (searchResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % searchResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = searchResults[selectedIndex];
      onNavigate(selected.category.id, selected.from.id, selected.to.id);
      setSearchFocused(false);
      setSearchQuery("");
    } else if (e.key === "Escape") {
      setSearchFocused(false);
    }
  };

  return (
    <header className="relative z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo & Website Name */}
          <div 
            onClick={() => onNavigate("home")} 
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group"
            id="logo-container"
          >
            <Logo size="md" />
            <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white select-none">
              Units<span className="text-blue-600 dark:text-blue-500">Convertors</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 ml-auto" id="desktop-nav">
            {/* Mega Menu Toggle (Categories) */}
            <div ref={megaMenuRef} className="relative">
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                Categories
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${megaMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {megaMenuOpen && (
                <div className="absolute top-full -left-[120px] mt-2 w-[390px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 shadow-xl shadow-slate-900/10 dark:shadow-black/40 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  {categoriesData.map(cat => {
                    const Icon = categoryIconMap[cat.id] || Ruler;
                    const style = getCategoryStyle(cat.id);
                    return (
                      <div
                        key={cat.id}
                        onClick={() => {
                          onNavigate(cat.id);
                          setMegaMenuOpen(false);
                        }}
                        className={`flex items-center gap-3 p-2.5 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 transition-all ${
                          currentCategory === cat.id ? `${style.bg} ${style.text}` : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${style.bg} ${style.text}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{cat.name}</span>
                          <span className="text-xs text-slate-400 line-clamp-1">{cat.units.length} units available</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <button 
              onClick={() => onNavigate("home", undefined, undefined, "about")}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </button>

            <button 
              onClick={() => onNavigate("home", undefined, undefined, "contact")}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </button>

            <button 
              onClick={() => onNavigate("home", undefined, undefined, "privacy")}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy
            </button>

            {/* Desktop Search Bar */}
            <div ref={searchRef} className="relative w-[220px]" id="desktop-search">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search 500+ converters..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onKeyDown={handleSearchKeyDown}
                  className="w-full h-10 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              {/* Live Search Results */}
              {searchFocused && searchResults.length > 0 && (
                <div className="absolute top-full right-0 w-[280px] mt-2 max-h-96 overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2 shadow-xl shadow-slate-900/10 dark:shadow-black/40 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  {searchResults.map((res, idx) => {
                    const Icon = categoryIconMap[res.category.id] || Ruler;
                    const style = getCategoryStyle(res.category.id);
                    return (
                      <div
                        key={`${res.category.id}-${res.slug}`}
                        onClick={() => {
                          onNavigate(res.category.id, res.from.id, res.to.id);
                          setSearchFocused(false);
                          setSearchQuery("");
                        }}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                          idx === selectedIndex 
                            ? "bg-slate-100 dark:bg-slate-900 text-blue-600 dark:text-blue-400" 
                            : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${style.bg} ${style.text}`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold">{res.title}</span>
                            <span className="text-xs text-slate-400">{res.category.name} Converter</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 uppercase">
                          {res.from.symbol} → {res.to.symbol}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Favorites Count */}
            {favorites.length > 0 && (
              <button 
                onClick={() => onNavigate("home", undefined, undefined, "favorites")}
                className="flex items-center gap-1.5 text-sm font-medium text-rose-600 dark:text-rose-400 hover:opacity-80 transition-opacity"
                title="Favorites"
                aria-label="Favorites"
              >
                <Heart className="h-4 w-4 fill-rose-600 dark:fill-rose-400" />
                ({favorites.length})
              </button>
            )}
          </nav>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 h-[calc(100vh-4rem)] w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 overflow-y-auto animate-in slide-in-from-right duration-200" id="mobile-drawer">
          
          {/* Mobile Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search all units..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />

            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 max-h-60 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1 shadow-lg z-50">
                {searchResults.map(res => (
                  <div
                    key={`${res.category.id}-${res.slug}-mob`}
                    onClick={() => {
                      onNavigate(res.category.id, res.from.id, res.to.id);
                      setMobileMenuOpen(false);
                      setSearchQuery("");
                    }}
                    className="flex items-center justify-between p-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  >
                    <span>{res.title}</span>
                    <span className="text-xs text-slate-400">{res.category.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Categories List */}
          <div className="mb-6">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Categories
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {categoriesData.map(cat => {
                const Icon = categoryIconMap[cat.id] || Ruler;
                const style = getCategoryStyle(cat.id);
                return (
                  <div
                    key={cat.id}
                    onClick={() => {
                      onNavigate(cat.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 p-2 rounded-xl border text-sm font-semibold cursor-pointer transition-all ${
                      currentCategory === cat.id 
                        ? `${style.bg} border-blue-500 ${style.text}` 
                        : `border-slate-100 dark:border-slate-900 text-slate-700 dark:text-slate-300 hover:${style.bg} hover:${style.text}`
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${style.text}`} />
                    <span className="truncate">{cat.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Information
            </h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onNavigate("home", undefined, undefined, "about");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                <Info className="h-4 w-4" />
                About Us
              </button>
              <button
                onClick={() => {
                  onNavigate("home", undefined, undefined, "contact");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </button>
              <button
                onClick={() => {
                  onNavigate("home", undefined, undefined, "privacy");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                <Shield className="h-4 w-4" />
                Privacy Policy
              </button>
              {favorites.length > 0 && (
                <button
                  onClick={() => {
                    onNavigate("home", undefined, undefined, "favorites");
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400"
                >
                  <Heart className="h-4 w-4 fill-rose-600" />
                  My Favorites ({favorites.length})
                </button>
              )}
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
