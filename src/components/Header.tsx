import React, { useState, useEffect, useRef } from "react";
import { 
  Ruler, Weight, Grid, Box, Thermometer, Clock, Gauge, ArrowDownCircle, 
  Zap, Activity, Droplet, ChefHat, Database, Cpu, Lightbulb, Atom,
  Search, Moon, Sun, Menu, X, Heart, Info, Mail, ChevronDown, ArrowRight,
  Volume2, Hammer, Waves, Compass, HardHat, Wifi, Shield, Orbit,
  RotateCw, Battery, Radio, TrendingUp, Layers, Calculator, MapPin, Navigation, Globe
} from "lucide-react";
import Logo from "./Logo";
import { categoriesData } from "../data/convertersData";
import { engineeringCalculatorsData, getCategorySlugForDiscipline } from "../data/calculatorsData";
import { Category, Unit } from "../types";
import { isValidPair } from "../utils/conversionEngine";

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
  "density": Layers, // Density
  "voltage": Zap, // Voltage
  "amount-of-substance": Atom, // Amount of Substance
  "light": Sun,
  "sound": Volume2,
  "force": Hammer,
  "flow": Waves,
  "angle": Compass,
  "electricity": Activity, // Electric Current
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

// Icon mapper for engineering calculator disciplines
export const calcIconMap: Record<string, React.ComponentType<any>> = {
  "Zap": Zap,
  "RotateCw": RotateCw,
  "HardHat": HardHat,
  "Atom": Atom,
  "Sun": Sun,
  "Thermometer": Thermometer,
  "Droplet": Droplet,
  "Waves": Waves,
  "Cpu": Cpu,
  "Grid": Grid,
  "Compass": Compass,
  "MapPin": MapPin,
  "Navigation": Navigation,
  "Globe": Globe
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
  "density": {
    bg: "bg-fuchsia-50 dark:bg-fuchsia-950/30",
    text: "text-fuchsia-600 dark:text-fuchsia-400",
    border: "border-fuchsia-100 dark:border-fuchsia-900/30",
    hoverBg: "group-hover:bg-fuchsia-600 group-hover:text-white",
    hoverText: "group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400",
    badgeBg: "bg-fuchsia-100 dark:bg-fuchsia-950/50 text-fuchsia-600 dark:text-fuchsia-400",
    gradient: "from-fuchsia-600/10 to-purple-500/10"
  },
  "voltage": {
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    text: "text-yellow-600 dark:text-yellow-400",
    border: "border-yellow-100 dark:border-yellow-900/30",
    hoverBg: "group-hover:bg-yellow-500 group-hover:text-white",
    hoverText: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400",
    badgeBg: "bg-yellow-100 dark:bg-yellow-950/50 text-yellow-600 dark:text-yellow-400",
    gradient: "from-yellow-600/10 to-amber-500/10"
  },
  "amount-of-substance": {
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
  const [unitConvertersOpen, setUnitConvertersOpen] = useState(false);
  const [engCalculatorsOpen, setEngCalculatorsOpen] = useState(false);
  const [mobileUnitConvertersOpen, setMobileUnitConvertersOpen] = useState(true);
  const [mobileEngCalculatorsOpen, setMobileEngCalculatorsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{
    category: Category;
    from: Unit;
    to: Unit;
    title: string;
    slug: string;
  }[]>([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const searchRef = useRef<HTMLDivElement>(null);
  const unitConvertersRef = useRef<HTMLDivElement>(null);
  const engCalculatorsRef = useRef<HTMLDivElement>(null);

  // Close search and dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
        if (!searchQuery) {
          setSearchExpanded(false);
        }
      }
      if (unitConvertersRef.current && !unitConvertersRef.current.contains(event.target as Node)) {
        setUnitConvertersOpen(false);
      }
      if (engCalculatorsRef.current && !engCalculatorsRef.current.contains(event.target as Node)) {
        setEngCalculatorsOpen(false);
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
          if (unitA.id === unitB.id || !isValidPair(cat.id, unitA.id, unitB.id)) return;

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

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const isConverters = pathname === "/converters" || pathname.startsWith("/converters/") || categoriesData.some(c => c.id === currentCategory);
  const isCalculators = pathname === "/calculators" || pathname.startsWith("/calculators/") || currentCategory === "calculators" || currentCategory === "engineering-calculators" || currentCategory === "engineering-category";
  const isAbout = pathname === "/about" || currentCategory === "about";
  const isContact = pathname === "/contact" || currentCategory === "contact";
  const isPrivacy = pathname === "/privacy-policy" || pathname === "/privacy" || currentCategory === "privacy" || currentCategory === "privacy-policy";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 sm:gap-6">
          
          {/* Logo & Website Name */}
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }} 
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            id="logo-container"
            aria-label="UnitsConvertors Home"
          >
            <Logo size="md" />
            <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white select-none">
              Units<span className="text-blue-600 dark:text-blue-500">Convertors</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4" id="desktop-nav" aria-label="Main navigation">
            <a
              href="/converters"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("converters");
              }}
              className={`text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg px-3 py-1.5 ${
                isConverters
                  ? "text-blue-600 dark:text-blue-400 font-bold bg-blue-50/80 dark:bg-blue-950/40"
                  : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
              }`}
            >
              Converters
            </a>

            <a
              href="/calculators"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("calculators");
              }}
              className={`text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg px-3 py-1.5 ${
                isCalculators
                  ? "text-blue-600 dark:text-blue-400 font-bold bg-blue-50/80 dark:bg-blue-950/40"
                  : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
              }`}
            >
              Calculators
            </a>

            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("about");
              }}
              className={`text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg px-3 py-1.5 ${
                isAbout
                  ? "text-blue-600 dark:text-blue-400 font-bold bg-blue-50/80 dark:bg-blue-950/40"
                  : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
              }`}
            >
              About
            </a>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("contact");
              }}
              className={`text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg px-3 py-1.5 ${
                isContact
                  ? "text-blue-600 dark:text-blue-400 font-bold bg-blue-50/80 dark:bg-blue-950/40"
                  : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
              }`}
            >
              Contact
            </a>

            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("privacy-policy");
              }}
              className={`text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg px-3 py-1.5 ${
                isPrivacy
                  ? "text-blue-600 dark:text-blue-400 font-bold bg-blue-50/80 dark:bg-blue-950/40"
                  : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
              }`}
            >
              Privacy
            </a>
          </nav>

          {/* Right Utilities Section */}
          <div className="flex items-center gap-2 shrink-0 ml-auto md:ml-0">
            
            {/* Search Bar / Icon */}
            <div ref={searchRef} className="relative flex items-center justify-end" id="desktop-search">
              {!searchExpanded && !searchQuery ? (
                <button
                  type="button"
                  onClick={() => {
                    setSearchExpanded(true);
                    setSearchFocused(true);
                  }}
                  aria-label="Search unit converters"
                  title="Search converters"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Search className="h-4 w-4" />
                </button>
              ) : (
                <div className="relative w-[210px] sm:w-[250px] animate-in fade-in zoom-in-95 duration-150">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search unit converters..."
                    aria-label="Search unit converters"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onKeyDown={handleSearchKeyDown}
                    className="w-full h-9 pl-9 pr-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSearchExpanded(false);
                      setSearchFocused(false);
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded-md"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              {/* Live Search Results */}
              {searchFocused && searchResults.length > 0 && (
                <div className="absolute top-full right-0 w-[280px] sm:w-[320px] mt-2 max-h-96 overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2 shadow-xl shadow-slate-900/10 dark:shadow-black/40 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  {searchResults.map((res, idx) => {
                    const Icon = categoryIconMap[res.category.id] || Ruler;
                    const style = getCategoryStyle(res.category.id);
                    return (
                      <div
                        key={`${res.category.id}-${res.slug}`}
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          onNavigate(res.category.id, res.from.id, res.to.id);
                          setSearchFocused(false);
                          setSearchQuery("");
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            onNavigate(res.category.id, res.from.id, res.to.id);
                            setSearchFocused(false);
                            setSearchQuery("");
                          }
                        }}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
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
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Favorites Count */}
            {favorites.length > 0 && (
              <button 
                type="button"
                onClick={() => onNavigate("home", undefined, undefined, "favorites")}
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg px-2 py-1 bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/30"
                title="View my bookmarked favorites"
                aria-label={`View my bookmarked favorites (${favorites.length})`}
              >
                <Heart className="h-3.5 w-3.5 fill-rose-600 dark:fill-rose-400" />
                ({favorites.length})
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 h-[calc(100vh-4rem)] w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 overflow-y-auto animate-in slide-in-from-right duration-200" id="mobile-drawer">
          
          {/* Mobile Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search all units & calculators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
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

          {/* Navigation Items in Exact Order */}
          <div className="flex flex-col gap-2 mb-6">
            <a
              href="/converters"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("converters");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-colors ${
                isConverters
                  ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50"
                  : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
            >
              <Ruler className="h-5 w-5 text-blue-500" />
              Converters
            </a>

            <a
              href="/calculators"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("calculators");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-colors ${
                isCalculators
                  ? "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50"
                  : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
            >
              <Calculator className="h-5 w-5 text-amber-500" />
              Calculators
            </a>

            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("about");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-colors ${
                isAbout
                  ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50"
                  : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
            >
              <Info className="h-5 w-5 text-slate-500" />
              About
            </a>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("contact");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-colors ${
                isContact
                  ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50"
                  : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
            >
              <Mail className="h-5 w-5 text-slate-500" />
              Contact
            </a>

            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("privacy-policy");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-colors ${
                isPrivacy
                  ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50"
                  : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
            >
              <Shield className="h-5 w-5 text-slate-500" />
              Privacy
            </a>

            {favorites.length > 0 && (
              <a
                href="/favorites"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("home", undefined, undefined, "favorites");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 p-3 rounded-xl text-sm font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30"
              >
                <Heart className="h-5 w-5 fill-rose-600" />
                My Favorites ({favorites.length})
              </a>
            )}
          </div>

        </div>
      )}
    </header>
  );
}
