import { CustomArticleData } from "./types";

export const kilowattToGigawatt: CustomArticleData = {
  fromUnitId: "kilowatt",
  toUnitId: "gigawatt",
  seoTitle: "Kilowatt to Gigawatt Converter (kW to GW)",
  metaDescription: "Convert Kilowatts to Gigawatts (kW to GW) accurately. Learn the 1,000,000 conversion factor, macro-scale power grid formulas, and FAQs.",
  h1: "Kilowatt to Gigawatt Converter",
  introduction: [
    "The Kilowatt (kW) and Gigawatt (GW) are International System of Units (SI) power metrics spanning local equipment loads and continental electrical infrastructure. A Kilowatt quantifies local building demand, commercial equipment, and rooftop solar installations, whereas a Gigawatt measures regional power plant capacities, national grid loads, and mega-scale renewable energy developments.",
    "Converting Kilowatts to Gigawatts shifts power calculations across six orders of magnitude within the metric system prefix hierarchy (where kilo = 10³ and giga = 10⁹). Because one Gigawatt equals exactly 1,000,000 Kilowatts, converting Kilowatts to Gigawatts requires dividing the kilowatt value by 1,000,000.",
    "This technical guide explains the conversion formula, provides step-by-step macro energy calculation examples, offers structured conversion tables, and explores utility power grid planning applications."
  ],
  quickAnswer: {
    text: "To convert Kilowatts to Gigawatts, divide the power rating in Kilowatts by 1,000,000. For example, a 1,200,000 kW nuclear power station capacity equals 1.2 GW.",
    formulaDisplay: "GW = kW ÷ 1,000,000",
    subtext: "1 Kilowatt is equal to 0.000001 Gigawatts (1 × 10⁻⁶ GW)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilowatt (kW)",
    text: "The Kilowatt (symbol: kW) is an SI multiple unit equal to 1,000 Watts or 1,000 Joules per second. It is the universal baseline unit for utility customer metering, generator outputs, and HVAC equipment ratings."
  },
  aboutTargetUnit: {
    title: "Understanding the Gigawatt (GW)",
    text: "The Gigawatt (symbol: GW) is an SI multiple unit equal to 1,000,000,000 Watts, 1,000,000 Kilowatts, or 1,000 Megawatts. It serves as the standard unit in national energy policy, utility grid balancing, and large power station engineering."
  },
  relationship: "The relationship between kilowatts and gigawatts is defined by metric prefixes: 1 GW = 1,000,000 kW = 10⁶ kW. Conversely, 1 kW = 0.000001 GW = 10⁻⁶ GW.",
  relationshipTitle: "Kilowatt vs Gigawatt Scale Comparison",
  relationshipItems: [
    { label: "1 kW", value: "0.000001 GW (1,000 Watts baseline)" },
    { label: "100 kW", value: "0.0001 GW (100 Kilowatts commercial solar roof)" },
    { label: "1,000 kW", value: "0.001 GW (1 Megawatt utility block)" },
    { label: "1,000,000 kW", value: "1.0 GW (1,000 Megawatts / Large nuclear facility unit)" },
    { label: "5,000,000 kW", value: "5.0 GW (Large regional power generation complex)" }
  ],
  formula: {
    text: "Divide the electrical power in Kilowatts by 1,000,000 to compute the power in Gigawatts.",
    math: "GW = kW / 1000000",
    subtext: "To convert Gigawatts back to Kilowatts, multiply the Gigawatt value by 1,000,000."
  },
  formulaTitle: "Kilowatt to Gigawatt Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Shortcut",
    text: "To convert Kilowatts to Gigawatts mentally, move the decimal point six positions to the left. For example, 2,500,000.0 kW becomes 2.5 GW."
  },
  expertNote: {
    title: "Macro Energy Context",
    text: "In global energy strategy, 1 GW represents 1,000,000 kW of generating capacity, sufficient to power approximately 750,000 average homes simultaneously."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Hydroelectric Dam Capacity",
        subtitle: "Convert a 2,000,000 kW hydroelectric facility capacity into Gigawatts.",
        steps: [
          "Identify power in Kilowatts: 2,000,000 kW.",
          "Apply formula: GW = 2,000,000 ÷ 1,000,000.",
          "Calculate: 2,000,000 ÷ 1,000,000 = 2.0.",
          "Result: 2,000,000 Kilowatts equals 2.0 Gigawatts."
        ]
      },
      {
        title: "Example 2: Regional Offshore Wind Development",
        subtitle: "Convert 1,500,000 kW of planned offshore wind turbine capacity to Gigawatts.",
        steps: [
          "Identify power: 1,500,000 kW.",
          "Divide by 1,000,000: 1,500,000 ÷ 1,000,000 = 1.5.",
          "Result: 1,500,000 Kilowatts equals 1.5 GW."
        ]
      },
      {
        title: "Example 3: National Peak Power Load",
        subtitle: "Convert 60,000,000 kW of national grid peak load demand to Gigawatts.",
        steps: [
          "Identify power: 60,000,000 kW.",
          "Divide by 1,000,000: 60,000,000 ÷ 1,000,000 = 60.",
          "Result: 60,000,000 Kilowatts equals 60 GW."
        ]
      }
    ]
  },
  table: {
    title: "Kilowatt to Gigawatt Conversion Table",
    headers: ["Kilowatts (kW)", "Gigawatts (GW)", "Macro Utility Context"],
    rows: [
      { fromVal: "1 kW", toVal: "0.000001 GW", extra: "Baseline 1 kW load" },
      { fromVal: "10,000 kW", toVal: "0.01 GW", extra: "10 MW industrial solar farm" },
      { fromVal: "100,000 kW", toVal: "0.1 GW", extra: "100 MW utility power station" },
      { fromVal: "500,000 kW", toVal: "0.5 GW", extra: "500 MW combined-cycle gas plant" },
      { fromVal: "1,000,000 kW", toVal: "1.0 GW", extra: "1,000 MW nuclear reactor unit" },
      { fromVal: "2,000,000 kW", toVal: "2.0 GW", extra: "Hoover Dam total generation capacity" },
      { fromVal: "5,000,000 kW", toVal: "5.0 GW", extra: "Large state power generation fleet" },
      { fromVal: "10,000,000 kW", toVal: "10.0 GW", extra: "Regional power pool transmission capacity" },
      { fromVal: "22,500,000 kW", toVal: "22.5 GW", extra: "Three Gorges Dam maximum rating" },
      { fromVal: "50,000,000 kW", toVal: "50.0 GW", extra: "National power grid peak winter demand" }
    ]
  },
  applications: {
    title: "Applications of kW to GW Conversion",
    items: [
      {
        title: "National Grid Decarbonization Targets",
        text: "Energy ministries sum millions of rooftop and commercial solar kW installations into Gigawatt national capacity reports to track clean energy milestones."
      },
      {
        title: "Inter-State Power Transmission",
        text: "High-voltage transmission system operators convert cumulative regional generator kW outputs into Gigawatt inter-tie flow schedules."
      },
      {
        title: "Macro Economic Energy Modeling",
        text: "Economists convert country-wide electricity production figures from Kilowatts to Gigawatts to model industrial growth and energy intensity."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Miscounting zeros in division: Dividing by 100,000 instead of 1,000,000 produces a 10x calculation error.",
      "Confusing GW with GWh: Gigawatt (GW) measures power capacity rate; Gigawatt-hour (GWh) measures total electrical energy generated over time.",
      "Confusing Kilowatts (10³ W) with Megawatts (10⁶ W) or Gigawatts (10⁹ W)."
    ]
  },
  faqs: [
    {
      question: "How many Kilowatts are in 1 Gigawatt?",
      answer: "There are exactly 1,000,000 (one million) Kilowatts in 1 Gigawatt."
    },
    {
      question: "What is the formula to convert Kilowatts to Gigawatts?",
      answer: "The formula is: Gigawatts = Kilowatts ÷ 1,000,000."
    },
    {
      question: "How many Gigawatts is 2,000,000 kW?",
      answer: "2,000,000 Kilowatts equals 2.0 Gigawatts (2,000,000 ÷ 1,000,000 = 2.0 GW)."
    },
    {
      question: "How many Megawatts equal 1 Gigawatt?",
      answer: "1 Gigawatt equals 1,000 Megawatts (MW)."
    },
    {
      question: "How do I convert Gigawatts back to Kilowatts?",
      answer: "Multiply the Gigawatt value by 1,000,000 (e.g., 3.5 GW × 1,000,000 = 3,500,000 kW)."
    },
    {
      question: "How many Watts is 1 Gigawatt?",
      answer: "1 Gigawatt equals 1,000,000,000 (one billion) Watts."
    },
    {
      question: "What is 500,000 kW in Gigawatts?",
      answer: "500,000 Kilowatts equals 0.5 Gigawatts (500,000 ÷ 1,000,000 = 0.5 GW)."
    },
    {
      question: "Why do national energy reports use GW instead of kW?",
      answer: "Gigawatts keep regional and national power infrastructure numbers concise, avoiding multi-digit numbers with millions of kilowatts."
    }
  ],
  relatedList: [
    { label: "Kilowatt to Watt", from: "kilowatt", to: "watt" },
    { label: "Kilowatt to Megawatt", from: "kilowatt", to: "megawatt" },
    { label: "Watt to Gigawatt", from: "watt", to: "gigawatt" },
    { label: "Watt to Kilowatt", from: "watt", to: "kilowatt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "International Energy Agency (IEA): World Energy Statistics & Metric Guidelines."
  ]
};
