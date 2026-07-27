import { CustomArticleData } from "./types";

export const milliliterToLiter: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "liter",
  seoTitle: "Milliliter to Liter Converter (mL to L) - UnitsConvertors",
  metaDescription: "Convert milliliters to liters (mL to L) instantly. Learn the 1,000 division formula, step-by-step conversion examples, reference tables, and FAQs.",
  h1: "Milliliter to Liter Converter",
  introduction: [
    "The milliliter and the liter are fundamental liquid volume units in the International System of Units (SI). From medical dosing and laboratory chemistry to culinary preparation and beverage manufacturing, converting volume from milliliters to liters is a daily requirement across scientific and practical fields.",
    "Because both units belong to the base-10 metric system, converting milliliters to liters involves dividing the milliliter count by exactly 1,000 (or multiplying by 0.001). This simple decimal shift transforms fine liquid measurements into standard volume capacities.",
    "This technical guide explains the mathematical relationship between milliliters and liters, provides step-by-step calculation examples, offers convenient lookup tables, and answers common measurement questions."
  ],
  quickAnswer: {
    text: "To convert milliliters to liters, divide the milliliter value by 1,000 (or multiply by 0.001). For example, 750 mL equals exactly 0.75 liters.",
    formulaDisplay: "L = mL ÷ 1,000",
    subtext: "Simply shift the decimal point three positions to the left."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL) represents one-thousandth of a liter (10⁻³ L). In geometric terms, 1 milliliter is physically identical to 1 cubic centimeter (1 cm³ or cc). Milliliters are used for small fluid volumes such as pharmaceutical doses, liquid spices, laboratory reagents, and beverage packaging."
  },
  aboutTargetUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L or l) is a metric unit of volume equal to 1 cubic decimeter (dm³) or 1,000 cubic centimeters. Accepted for use alongside the SI system, the liter is the worldwide benchmark for commercial beverage volumes, fuel capacity, and environmental fluid monitoring."
  },
  relationship: "The prefix 'milli-' indicates a factor of 10⁻³ (one-thousandth). Therefore, 1,000 milliliters equal exactly 1 liter. Converting from milliliters to liters scales the numerical value down by a factor of 1,000.",
  relationshipTitle: "Milliliter vs Liter Scale Comparison",
  relationshipItems: [
    { label: "100 mL", value: "0.1 L — Standard espresso cup volume" },
    { label: "250 mL", value: "0.25 L — Standard single drinking glass" },
    { label: "500 mL", value: "0.5 L — Bottled water capacity" },
    { label: "750 mL", value: "0.75 L — Standard wine bottle volume" },
    { label: "1,000 mL", value: "1.0 L — One full liter" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 1,000 to determine the equivalent volume in liters.",
    math: "Volume in Liters (L) = Volume in Milliliters (mL) ÷ 1,000",
    subtext: "To convert liters back to milliliters, multiply the liter value by 1,000."
  },
  formulaTitle: "Milliliter to Liter Conversion Formula",
  practicalTip: {
    title: "Decimal Point Shift Method",
    text: "To convert from mL to L in your head, move the decimal point three places to the left. For example, 1,250 mL becomes 1.25 L."
  },
  expertNote: {
    title: "Scientific Precision & Temperature",
    text: "While temperature causes subtle changes in fluid density, liquid volume conversions within the metric system remain strictly mathematical: 1,000 mL = 1 L regardless of temperature."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Beverage Bottle Conversion",
        subtitle: "Convert a 500 mL soft drink bottle into liters.",
        steps: [
          "Identify the volume in milliliters: 500 mL.",
          "Apply the formula: L = 500 ÷ 1,000.",
          "Calculate: 500 ÷ 1,000 = 0.5.",
          "Result: 500 mL equals exactly 0.5 liters."
        ]
      },
      {
        title: "Example 2: Intravenous Fluid Dosing",
        subtitle: "Convert a 1,500 mL saline IV bag into liters for medical records.",
        steps: [
          "Identify volume: 1,500 mL.",
          "Divide by 1,000: 1,500 ÷ 1,000 = 1.5.",
          "Result: 1,500 mL equals 1.5 liters."
        ]
      },
      {
        title: "Example 3: Industrial Batch Formula",
        subtitle: "Convert 250 mL of chemical solution into liters for master batch logging.",
        steps: [
          "Identify volume: 250 mL.",
          "Divide by 1,000: 250 ÷ 1,000 = 0.25.",
          "Result: 250 mL equals 0.25 liters."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to Liter Conversion Table",
    headers: ["Milliliters (mL)", "Liters (L)", "Common Household / Practical Reference"],
    rows: [
      { fromVal: "1 mL", toVal: "0.001 L", extra: "About 20 drops of water" },
      { fromVal: "5 mL", toVal: "0.005 L", extra: "1 standard teaspoon" },
      { fromVal: "15 mL", toVal: "0.015 L", extra: "1 standard tablespoon" },
      { fromVal: "100 mL", toVal: "0.10 L", extra: "Travel liquid container limit" },
      { fromVal: "250 mL", toVal: "0.25 L", extra: "1 metric cup" },
      { fromVal: "330 mL", toVal: "0.33 L", extra: "Standard soda can" },
      { fromVal: "500 mL", toVal: "0.50 L", extra: "Standard water bottle" },
      { fromVal: "750 mL", toVal: "0.75 L", extra: "Standard wine bottle" },
      { fromVal: "1,000 mL", toVal: "1.00 L", extra: "1 liter carton" },
      { fromVal: "2,000 mL", toVal: "2.00 L", extra: "2-liter soda bottle" }
    ]
  },
  applications: {
    title: "Practical Applications of mL to L Conversion",
    items: [
      {
        title: "Clinical Medicine & Pharmacy",
        text: "Healthcare workers calculate daily fluid intake and output logs by aggregating milliliter dosages into total liters."
      },
      {
        title: "Culinary Scaling & Catering",
        text: "Chefs scaling up small-batch recipes multiply milliliter ingredient measurements to state bulk prep needs in liters."
      },
      {
        title: "Chemical Manufacturing",
        text: "Lab technicians scale reaction volumes from milliliter bench trials up to liter-scale pilot plant reactors."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Remember that milliliters are smaller than liters, so the numerical value must decrease.",
      "Miscounting decimal places: Shifting two places instead of three results in a 10x calculation error.",
      "Confusing fluid ounces with milliliters: Ensure you convert to metric liters using 1,000 mL = 1 L, rather than US imperial conversion factors."
    ]
  },
  faqs: [
    {
      question: "How many liters is 500 mL?",
      answer: "500 mL equals exactly 0.5 liters (500 ÷ 1,000 = 0.5 L)."
    },
    {
      question: "What is the formula to convert mL to L?",
      answer: "The formula is: Liters = Milliliters ÷ 1,000."
    },
    {
      question: "How many milliliters are in 1 liter?",
      answer: "There are exactly 1,000 milliliters in 1 liter."
    },
    {
      question: "How do I convert 750 mL to liters?",
      answer: "Divide 750 by 1,000 to get 0.75 liters."
    },
    {
      question: "Is 1,000 mL equal to 1 L?",
      answer: "Yes, 1,000 milliliters equals exactly 1 liter."
    },
    {
      question: "How many liters is 250 mL?",
      answer: "250 mL equals 0.25 liters (250 ÷ 1,000 = 0.25 L)."
    },
    {
      question: "How many liters is 1,500 mL?",
      answer: "1,500 mL equals 1.5 liters."
    },
    {
      question: "Why does the metric system use 1,000 for mL to L?",
      answer: "The prefix 'milli-' signifies one-thousandth. Metric system unit steps scale by powers of ten, making 1,000 the fixed factor between milli- and base units."
    }
  ],
  relatedList: [
    { label: "Liter to Milliliter", from: "liter", to: "milliliter" },
    { label: "Milliliter to Cup (US)", from: "milliliter", to: "cup-us" },
    { label: "Milliliter to Fluid Ounce (US)", from: "milliliter", to: "fluid-ounce-us" },
    { label: "Milliliter to Teaspoon (US)", from: "milliliter", to: "teaspoon-us" }
  ],
  references: [
    "International Bureau of Weights and Measures (BIPM) — The International System of Units (SI) Guide",
    "NIST Special Publication 811 — Metric System Conversion Factors"
  ]
};
