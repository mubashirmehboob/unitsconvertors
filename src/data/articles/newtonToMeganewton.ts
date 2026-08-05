import { CustomArticleData } from "./types";

export const newtonToMeganewton: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "meganewton",
  seoTitle: "Newton to Meganewton Converter (N to MN)",
  metaDescription: "Convert newtons to meganewtons (N to MN) accurately. Learn SI mega-prefix scaling, exact formulas, structural engineering examples, and load reference tables.",
  h1: "Newton to Meganewton Converter",
  introduction: [
    "The newton (N) and meganewton (MN) are metric units of force in the International System of Units (SI), related by a factor of 1,000,000 (10⁶).",
    "While the newton handles everyday physical forces, the meganewton is utilized in heavy civil engineering, rocket propulsion, naval architecture, and seismic testing to express massive structural loads concisely.",
    "Converting newtons to meganewtons requires dividing by 1,000,000 (moving the decimal point six places to the left)."
  ],
  quickAnswer: {
    text: "To convert newtons to meganewtons, divide the value by 1,000,000. For example, 5,000,000 N equals exactly 5 MN.",
    formulaDisplay: "MN = N / 1,000,000",
    subtext: "The SI prefix 'mega-' denotes 1,000,000 (10⁶). Thus, 1 MN = 1,000,000 N = 1,000 kN."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the fundamental SI derived unit of force. Defined by Sir Isaac Newton's second law of motion (F = ma), 1 newton is the force necessary to accelerate a 1-kilogram mass at 1 meter per second squared (1 N = 1 kg·m/s²)."
  },
  aboutTargetUnit: {
    title: "Understanding the Meganewton (MN)",
    text: "The meganewton (MN) is a multiple SI unit of force equal to 1,000,000 newtons (10⁶ N). One meganewton represents the weight force of roughly 102 metric tons under standard Earth gravity."
  },
  relationship: "Because 1 meganewton equals 1,000,000 newtons (and 1,000 kilonewtons), 1 newton equals 0.000001 meganewtons (10⁻⁶ MN). Converting between these units simplifies managing massive structural load figures.",
  relationshipTitle: "Newton vs Meganewton Load Scale",
  relationshipItems: [
    { label: "1 Newton (N)", value: "0.000001 MN (10⁻⁶ MN)" },
    { label: "1 Kilonewton (kN)", value: "0.001 MN" },
    { label: "1 Meganewton (MN)", value: "1,000,000 N (1,000 kN)" },
    { label: "1 Meganewton in lbf", value: "≈ 224,808.94 lbf (~224.8 kips)" }
  ],
  formula: {
    text: "Divide the force in newtons by 1,000,000 to convert to meganewtons.",
    math: "MN = N / 1,000,000",
    subtext: "In scientific notation: MN = N × 10⁻⁶."
  },
  formulaTitle: "Newton to Meganewton Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Shortcut",
    text: "To convert N to MN instantly, move the decimal point six places to the left. For example, 12,000,000 N becomes 12 MN."
  },
  expertNote: {
    title: "Rocket Engine & Aerospace Thrust",
    text: "Heavy launch vehicles describe total liftoff thrust in meganewtons. For example, the SpaceX Falcon 9 rocket generates approximately 7.6 MN (~7,600,000 N) of sea-level thrust."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 3,500,000 Newtons",
        subtitle: "Convert a bridge pier foundation test load of 3,500,000 N into meganewtons.",
        steps: [
          "Identify the load in newtons: 3,500,000 N.",
          "Apply the formula: MN = 3,500,000 / 1,000,000.",
          "Perform the division: 3,500,000 / 1,000,000 = 3.5.",
          "Result: 3,500,000 N equals exactly 3.5 MN."
        ]
      },
      {
        title: "Example 2: Rocket Engine Thrust (22,000,000 N)",
        subtitle: "Express a rocket booster thrust of 22,000,000 N in meganewtons.",
        steps: [
          "Identify the force: 22,000,000 N.",
          "Divide by 1,000,000: 22,000,000 / 1,000,000 = 22.",
          "Result: 22,000,000 N corresponds to 22 MN."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Meganewton Quick Reference Table",
    headers: ["Newtons (N)", "Meganewtons (MN)", "Kilonewtons (kN)", "Engineering Context"],
    rows: [
      { fromVal: "10,000 N", toVal: "0.01 MN", extra: "10 kN", extra2: "Heavy truck axle weight" },
      { fromVal: "100,000 N", toVal: "0.10 MN", extra: "100 kN", extra2: "Commercial crane hook load" },
      { fromVal: "500,000 N", toVal: "0.50 MN", extra: "500 kN", extra2: "Hydraulic press capacity" },
      { fromVal: "1,000,000 N", toVal: "1.00 MN", extra: "1,000 kN", extra2: "Weight force of ~102 metric tons" },
      { fromVal: "2,500,000 N", toVal: "2.50 MN", extra: "2,500 kN", extra2: "Skyscraper column axial load" },
      { fromVal: "5,000,000 N", toVal: "5.00 MN", extra: "5,000 kN", extra2: "Heavy dam sluice gate pressure" },
      { fromVal: "7,600,000 N", toVal: "7.60 MN", extra: "7,600 kN", extra2: "Falcon 9 rocket liftoff thrust" },
      { fromVal: "10,000,000 N", toVal: "10.00 MN", extra: "10,000 kN", extra2: "Suspension bridge cable tension" },
      { fromVal: "34,000,000 N", toVal: "34.00 MN", extra: "34,000 kN", extra2: "Saturn V rocket liftoff thrust (~34 MN)" },
      { fromVal: "100,000,000 N", toVal: "100.00 MN", extra: "100,000 kN", extra2: "Tectonic fault shear load model" }
    ]
  },
  applications: {
    title: "Practical Applications of N to MN Conversion",
    items: [
      {
        title: "Aerospace & Rocket Propulsion",
        text: "Rocket engine thrust, booster stage separation forces, and launch vehicle dynamics are reported in meganewtons."
      },
      {
        title: "Large-Scale Civil & Structural Engineering",
        text: "Designing high-rise skyscraper foundations, suspension bridge anchorages, and hydroelectric dam walls."
      },
      {
        title: "Industrial Forging Presses",
        text: "Heavy manufacturing forging machinery and hydraulic extruders state clamping capacities in meganewtons (e.g., a 50 MN press)."
      },
      {
        title: "Geology & Earthquake Research",
        text: "Modeling plate tectonics, fault line stress accumulation, and underground nuclear test shockwaves."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing meganewton (MN, 10⁶ N) with millinewton (mN, 10⁻³ N); the upper case 'M' denotes mega, whereas lowercase 'm' denotes milli.",
      "Miscounting zeros when working with million-unit values; using scientific notation prevents zero errors.",
      "Confusing meganewton (MN, force) with megapascal (MPa, pressure/stress)."
    ]
  },
  faqs: [
    {
      question: "How many meganewtons are in 1 newton?",
      answer: "One newton equals 0.000001 meganewtons (10⁻⁶ MN)."
    },
    {
      question: "How many newtons are in 1 meganewton?",
      answer: "There are exactly 1,000,000 newtons in 1 meganewton."
    },
    {
      question: "How many kilonewtons (kN) make 1 MN?",
      answer: "1 meganewton equals exactly 1,000 kilonewtons (kN)."
    },
    {
      question: "What is 1 meganewton in pounds-force?",
      answer: "1 meganewton equals approximately 224,808.94 pounds-force (or ~224.8 kips)."
    },
    {
      question: "How much mass weight on Earth produces 1 MN of force?",
      answer: "Under standard Earth gravity (9.80665 m/s²), 1 MN equals the weight force of approximately 101,971.6 kilograms (~102 metric tons)."
    },
    {
      question: "What is the correct symbol for meganewton?",
      answer: "The correct symbol is 'MN' (capital M for mega, capital N for Newton)."
    },
    {
      question: "Where are meganewtons used in real life?",
      answer: "They are used to measure rocket thrust, bridge pier loads, skyscraper foundation forces, and heavy forging presses."
    },
    {
      question: "How do I convert MN to N?",
      answer: "Multiply the value in MN by 1,000,000. For example, 2.5 MN = 2,500,000 N."
    }
  ],
  relatedList: [
    { label: "Newton to Kilonewton", from: "newton", to: "kilonewton" },
    { label: "Newton to Kip-force", from: "newton", to: "kip-force" },
    { label: "Newton to Ton-force US", from: "newton", to: "ton-force-us" },
    { label: "Newton to Ton-force Metric", from: "newton", to: "ton-force-metric" },
    { label: "Newton to Pound-force", from: "newton", to: "pound-force" },
    { label: "Newton to Sthene", from: "newton", to: "sthene" }
  ],
  references: [
    "BIPM - SI Brochure: The International System of Units (9th Edition)",
    "ISO 80000-4: Quantities and units — Mechanics",
    "NASA Space Flight Systems Engineering Standards"
  ]
};
