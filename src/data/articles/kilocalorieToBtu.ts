import { CustomArticleData } from "./types";

export const kilocalorieToBtu: CustomArticleData = {
  fromUnitId: "kilocalorie",
  toUnitId: "btu",
  seoTitle: "Kilocalorie to BTU Converter (kcal to BTU)",
  metaDescription: "Convert kilocalories to British Thermal Units (kcal to BTU) with exact formulas. Explore heating calculations, HVAC sizing examples, and comprehensive tables.",
  canonicalUrl: "https://unitsconvertors.com/kilocalorie-to-btu",
  h1: "Kilocalorie to BTU Converter",
  introduction: [
    "The kilocalorie (kcal) and the British Thermal Unit (BTU) are the twin cornerstones of thermal energy engineering across metric and imperial domains. While metric thermodynamics, chemistry, and international food science quantify heat in kilocalories, North American HVAC systems, natural gas utilities, and industrial combustion equipment measure heating capacities in BTUs.",
    "Transitioning thermal equipment designs between global metric standards and American equipment catalogs requires accurate conversion. One thermochemical kilocalorie contains 4,184 Joules, while one standard British Thermal Unit contains approximately 1,055.056 Joules. Consequently, one kilocalorie equals approximately 3.96567 BTUs (or 3.96832 BTUs under International Steam Table conventions).",
    "This guide provides the scientific definitions for both units, explains the mathematical conversion, supplies real-world HVAC and combustion examples, and presents a complete reference lookup table."
  ],
  quickAnswer: {
    text: "To convert kilocalories (kcal) to British Thermal Units (BTU), multiply the kilocalorie value by 3.96567 (or roughly 3.968). For example, 1,000 kcal equals approximately 3,965.7 BTU.",
    formulaDisplay: "BTU = kcal × (4,184 ÷ 1,055.05585) ≈ kcal × 3.96567",
    subtext: "1 kilocalorie ≈ 3.96567 BTU; 1 British Thermal Unit ≈ 0.252164 kilocalories."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilocalorie (kcal)",
    text: "The kilocalorie (symbol: kcal), or large calorie, is the metric unit of heat defined as the thermal energy necessary to raise the temperature of one kilogram of water by one degree Celsius at normal atmospheric pressure. In the thermochemical system established by NIST and IUPAC, one kilocalorie is defined as exactly 4,184 Joules (4.184 kJ). It is standard across European heating specifications, scientific calorimetry, and global dietary nutrition."
  },
  aboutTargetUnit: {
    title: "Understanding the British Thermal Unit (BTU)",
    text: "The British Thermal Unit (symbol: BTU) is an imperial unit of thermal energy representing the quantity of heat required to raise the temperature of one pound of liquid water by one degree Fahrenheit at standard pressure. Under the International Steam Table standard, one BTU is equivalent to approximately 1,055.056 Joules (1.055 kJ). It is the predominant rating for air conditioners, furnaces, gas grills, and heating fuels in North America."
  },
  relationship: "Both units measure thermal energy through fundamental Joules: 1 kcal = 4,184 J, and 1 BTU ≈ 1,055.05585 J. Dividing 4,184 by 1,055.05585 establishes the conversion ratio: 1 kcal ≈ 3.96567 BTU, and 1 BTU ≈ 0.252164 kcal (roughly one-quarter of a kilocalorie).",
  relationshipTitle: "Kilocalorie to BTU Equivalence Values",
  relationshipItems: [
    { label: "1 kcal", value: "≈ 3.96567 BTU" },
    { label: "10 kcal", value: "≈ 39.6567 BTU" },
    { label: "100 kcal", value: "≈ 396.567 BTU" },
    { label: "252.16 kcal", value: "1,000.00 BTU (1.00 kBTU)" },
    { label: "1,000 kcal", value: "≈ 3,965.67 BTU" },
    { label: "2,500 kcal", value: "≈ 9,914.17 BTU" }
  ],
  formula: {
    text: "Multiply the energy in kilocalories by 4,184 to find Joules, then divide by 1,055.05585 to calculate British Thermal Units.",
    math: "BTU = (kcal * 4184) / 1055.05585",
    subtext: "Standard multiplier: BTU = kcal × 3.96567 (or 3.96832 for International Table BTU)."
  },
  formulaTitle: "Kilocalorie to BTU Conversion Formula",
  practicalTip: {
    title: "The Four-to-One Quick Estimate",
    text: "For quick field estimates in plumbing and boiler rooms, multiply kilocalories by 4 to estimate BTUs (e.g., 2,500 kcal × 4 ≈ 10,000 BTU; exact is 9,914 BTU). Conversely, divide BTUs by 4 to estimate kilocalories."
  },
  expertNote: {
    title: "Power Ratings: kcal/h vs. BTU/h",
    text: "When selecting heating and cooling appliances, energy units are frequently divided by time. A European boiler rated at 25,000 kcal/h corresponds directly to an American boiler rated at approximately 100,000 BTU/h (often listed as 100 MBH, where 1 MBH = 1,000 BTU/h)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Residential Gas Water Heater Sizing",
        subtitle: "Convert a Japanese boiler rating of 18,000 kcal into BTUs.",
        steps: [
          "State the heat output: 18,000 kcal.",
          "Multiply by the standard conversion factor: 18,000 × 3.96567 = 71,382.06 BTU.",
          "Round to common equipment ratings: 71,400 BTU.",
          "Result: 18,000 kcal corresponds to approximately 71,400 BTU."
        ]
      },
      {
        title: "Example 2: Commercial Cooking Burner Heat Release",
        subtitle: "Convert 6,500 kcal released by a wok burner into BTUs.",
        steps: [
          "State the thermal value: 6,500 kcal.",
          "Convert to Joules: 6,500 × 4,184 = 27,196,000 J.",
          "Divide by Joules per BTU: 27,196,000 ÷ 1,055.05585 = 25,776.84 BTU.",
          "Result: 6,500 kcal equals approximately 25,777 BTU."
        ]
      },
      {
        title: "Example 3: Dietary Calorie Thermal Equivalent",
        subtitle: "Convert 2,000 kcal of human metabolic daily intake into BTUs.",
        steps: [
          "State the daily energy: 2,000 kcal.",
          "Multiply: 2,000 × 3.96567 = 7,931.34 BTU.",
          "Result: A 2,000 kcal daily diet contains 7,931.3 BTU of thermal energy."
        ]
      }
    ]
  },
  table: {
    title: "Kilocalorie to BTU Conversion Table",
    headers: ["Kilocalories (kcal)", "BTU", "kBTU (1,000 BTU)", "Megajoules (MJ)"],
    rows: [
      { fromVal: "1 kcal", toVal: "3.9657 BTU", extra: "0.00397 kBTU", extra2: "0.00418 MJ" },
      { fromVal: "10 kcal", toVal: "39.657 BTU", extra: "0.03966 kBTU", extra2: "0.04184 MJ" },
      { fromVal: "50 kcal", toVal: "198.28 BTU", extra: "0.19828 kBTU", extra2: "0.20920 MJ" },
      { fromVal: "100 kcal", toVal: "396.57 BTU", extra: "0.39657 kBTU", extra2: "0.41840 MJ" },
      { fromVal: "250 kcal", toVal: "991.42 BTU", extra: "0.99142 kBTU", extra2: "1.04600 MJ" },
      { fromVal: "252.16 kcal", toVal: "1,000.0 BTU", extra: "1.00000 kBTU", extra2: "1.05506 MJ" },
      { fromVal: "500 kcal", toVal: "1,982.8 BTU", extra: "1.98283 kBTU", extra2: "2.09200 MJ" },
      { fromVal: "1,000 kcal", toVal: "3,965.7 BTU", extra: "3.96567 kBTU", extra2: "4.18400 MJ" },
      { fromVal: "2,500 kcal", toVal: "9,914.2 BTU", extra: "9.91417 kBTU", extra2: "10.4600 MJ" },
      { fromVal: "5,000 kcal", toVal: "19,828 BTU", extra: "19.8283 kBTU", extra2: "20.9200 MJ" },
      { fromVal: "10,000 kcal", toVal: "39,657 BTU", extra: "39.6567 kBTU", extra2: "41.8400 MJ" },
      { fromVal: "25,000 kcal", toVal: "99,142 BTU", extra: "99.1417 kBTU", extra2: "104.600 MJ" }
    ]
  },
  applications: {
    title: "Practical Applications of kcal to BTU Conversion",
    items: [
      {
        title: "HVAC and Air Conditioner Replacement",
        text: "Contractors importing European or Asian ductless mini-split heat pumps rated in kcal/h convert the figures to BTU/h (or tons of refrigeration, where 1 ton = 12,000 BTU/h) to meet local building codes."
      },
      {
        title: "Natural Gas and Liquefied Petroleum Gas (LPG) Billing",
        text: "Energy suppliers convert fuel heating calorific values given in kcal/m³ or kcal/kg into BTUs or therms (1 therm = 100,000 BTU) for utility rate calculations."
      },
      {
        title: "Industrial Kiln and Furnace Design",
        text: "Ceramic and metallurgy kiln engineers specify burner firing rates and thermal insulation conductivities across metric kcal and imperial BTU standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing BTU with BTU per hour (BTU/h): BTU is a static measure of energy, whereas BTU/h is a rate of heat transfer (power).",
      "Treating small calories as kilocalories: 1 kcal = 1,000 cal. Using gram calories will underestimate the result by a factor of 1,000.",
      "Overlooking minor standards variations: The difference between thermochemical (3.9657 BTU/kcal) and International Table (3.9683 BTU/kcal) is approximately 0.07%, which can impact massive commercial gas contracts if unstated."
    ]
  },
  faqs: [
    {
      question: "How many BTUs are in 1 kilocalorie?",
      answer: "One thermochemical kilocalorie equals approximately 3.96567 BTUs (roughly 3.97 BTU)."
    },
    {
      question: "How many kilocalories are in 1 BTU?",
      answer: "One British Thermal Unit equals approximately 0.252164 kilocalories (or roughly 252 small calories)."
    },
    {
      question: "What is the formula to convert kcal to BTU?",
      answer: "BTU = kcal × 3.96567 (or BTU = kcal × 4,184 ÷ 1,055.056)."
    },
    {
      question: "How many BTUs are in 1,000 kilocalories?",
      answer: "1,000 kcal equals approximately 3,965.67 BTUs."
    },
    {
      question: "How do you convert 2,000 food Calories into BTUs?",
      answer: "2,000 food Calories (kcal) × 3.96567 = 7,931.34 BTUs."
    },
    {
      question: "How many BTUs are in 25,000 kcal/h boiler rating?",
      answer: "25,000 kcal/h × 3.96567 = 99,142 BTU/h (essentially a standard 100,000 BTU/h furnace rating)."
    },
    {
      question: "Is a kilocalorie larger than a BTU?",
      answer: "Yes. One kilocalorie is nearly four times larger than one BTU (1 kcal ≈ 3.97 BTU)."
    },
    {
      question: "Why do some sources state 1 kcal = 3.968 BTU instead of 3.9657?",
      answer: "The value 3.968 BTU/kcal arises from the International Steam Table calorie (4,186.8 J), whereas 3.9657 comes from the thermochemical calorie (4,184 J). Both are accepted in their respective technical domains."
    }
  ],
  relatedList: [
    { label: "Kilocalorie to Watt Hour", from: "kilocalorie", to: "watt-hour" },
    { label: "Kilocalorie to Kilowatt Hour", from: "kilocalorie", to: "kilowatt-hour" },
    { label: "BTU to Kilocalorie", from: "btu", to: "kilocalorie" },
    { label: "Kilocalorie to Joule", from: "kilocalorie", to: "joule" },
    { label: "BTU to Joule", from: "btu", to: "joule" }
  ],
  references: [
    "ASHRAE Handbook of Fundamentals: Measurement and Units.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-5: Quantities and Units — Part 5: Thermodynamics."
  ]
};
