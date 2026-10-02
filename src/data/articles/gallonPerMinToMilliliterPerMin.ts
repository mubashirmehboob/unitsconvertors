import { CustomArticleData } from "./types";

export const gallonPerMinToMilliliterPerMin: CustomArticleData = {
  fromUnitId: "gallon-per-min",
  toUnitId: "milliliter-per-min",
  seoTitle: "Gallon/min to Milliliter/min Converter (GPM to mL/min) | UnitsConvertors.com",
  metaDescription: "Convert gallons per minute to milliliters per minute (GPM to mL/min) accurately. Discover exact volumetric ratios, chemical dosing formulas, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/flow/gallon-per-min-to-milliliter-per-min",
  h1: "Gallon/min to Milliliter/min Converter",
  introduction: [
    "Gallons per minute (GPM) and milliliters per minute (mL/min) span macroscopic and microscopic volumetric flow regimes in fluid handling. While GPM is the standard US customary unit used for water mains, facility cooling loops, and high-volume industrial pumps, the milliliter per minute is the worldwide metric standard in analytical chemistry, pharmaceutical biomanufacturing, liquid chromatography, and precision chemical dosing.",
    "Because both units measure fluid flow over the same sixty-second duration, the conversion is derived directly from the definition of the US liquid gallon, which equals exactly 3,785.411784 milliliters (3.785412 liters). Therefore, one gallon per minute equals exactly 3,785.411784 milliliters per minute.",
    "To convert gallons per minute to milliliters per minute, multiply the GPM value by 3,785.411784. Inversely, to convert from milliliters per minute to GPM, divide by 3,785.411784 (or multiply by approximately 0.000264172). This engineering guide presents the conversion principles, pharmaceutical and water treatment worked examples, and an accessible lookup table."
  ],
  quickAnswer: {
    text: "To convert GPM to mL/min, multiply the GPM value by 3,785.411784. For example, 0.5 GPM equals approximately 1,892.71 mL/min.",
    formulaDisplay: "mL/min = GPM × 3,785.411784",
    subtext: "1 GPM = 3,785.411784 mL/min; 1 mL/min ≈ 0.000264172 GPM."
  },
  aboutSourceUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "Gallons per minute is the primary US customary unit for continuous fluid displacement, representing one US liquid gallon (231 cubic inches, or ~3.785412 liters) passing a cross-section every minute. Widely specified by the American Water Works Association (AWWA) and Hydraulic Institute (HI), GPM rates residential water service entries, HVAC hydronic heating loops, and agricultural irrigation pumps."
  },
  aboutTargetUnit: {
    title: "Understanding Milliliters per Minute (mL/min)",
    text: "The milliliter per minute is a standard decimal metric unit for low-volume fluid transfer. Because one milliliter equals one cubic centimeter (1 mL = 1 cm³ = 10⁻⁶ m³), mL/min is the universally accepted standard for HPLC chromatography column elutions, medical infusion pumps, fermenter nutrient feed additions, and laboratory peristaltic pumps."
  },
  relationship: "One US gallon per minute equals exactly 3,785.411784 milliliters per minute, directly reflecting the 3,785.41 milliliters contained within one US liquid gallon. Conversely, 1 mL/min equals approximately 0.000264172 GPM.",
  relationshipTitle: "GPM to mL/min Ratio Breakdown",
  relationshipItems: [
    { label: "0.01 GPM", value: "37.854 mL/min" },
    { label: "0.05 GPM", value: "189.271 mL/min" },
    { label: "0.10 GPM", value: "378.541 mL/min" },
    { label: "0.50 GPM", value: "1,892.706 mL/min" },
    { label: "1.00 GPM", value: "3,785.412 mL/min" },
    { label: "2.00 GPM", value: "7,570.824 mL/min" },
    { label: "5.00 GPM", value: "18,927.059 mL/min" }
  ],
  formula: {
    text: "Multiply the flow rate in GPM by 3,785.411784 to obtain milliliters per minute.",
    math: "\\text{mL/min} = \\text{GPM} \\times 3{,}785.411784",
    subtext: "Inverse formula: GPM = (mL/min) / 3,785.411784 ≈ (mL/min) × 0.000264172"
  },
  formulaTitle: "GPM to mL/min Conversion Formula",
  practicalTip: {
    title: "Quick Mental Math: The 3,785 Multiplier",
    text: "For quick calculations, multiply GPM by 3,785 (or multiply by 3.8 to get liters per minute, then multiply by 1,000). For example, 0.2 GPM × 3,785 = 757 mL/min."
  },
  expertNote: {
    title: "Precision in Chemical Injection Skids",
    text: "In industrial wastewater treatment and agricultural fertigation, main water lines flow at tens or hundreds of GPM, while coagulants, acids, or liquid fertilizers are dosed at mL/min. Accurate unit conversion ensures target parts-per-million (ppm) dosing tolerances are maintained without chemical waste."
  },
  examples: {
    title: "Step-by-Step GPM to mL/min Worked Examples",
    items: [
      {
        title: "Example 1: Peristaltic Chemical Feed Pump",
        subtitle: "A wastewater neutralization system requires a caustic soda feed rate of 0.08 GPM. Convert this rate to milliliters per minute.",
        steps: [
          "State the dosing rate: Q = 0.08 GPM.",
          "Apply the conversion formula: mL/min = 0.08 × 3,785.411784.",
          "Calculate: 0.08 × 3,785.411784 ≈ 302.8329.",
          "Final Result: 0.08 GPM equals approximately 302.83 mL/min."
        ]
      },
      {
        title: "Example 2: Reverse Osmosis Permeate Sampling Line",
        subtitle: "A pilot water desalination skid draws a membrane permeate sample stream at 0.25 GPM. Express this flow in mL/min.",
        steps: [
          "Identify the flow rate: Q = 0.25 GPM.",
          "Multiply by 3,785.411784: 0.25 × 3,785.411784 ≈ 946.3529.",
          "Final Result: 0.25 GPM corresponds to approximately 946.35 mL/min."
        ]
      },
      {
        title: "Example 3: Bioreactor Media Feed Rate",
        subtitle: "A bioprocessing nutrient feed pump delivers 0.015 GPM into a fermentation vessel. Find the feed rate in mL/min.",
        steps: [
          "State the rate: 0.015 GPM.",
          "Multiply by 3,785.411784: 0.015 × 3,785.411784 ≈ 56.7812.",
          "Final Result: 0.015 GPM equals approximately 56.78 mL/min."
        ]
      }
    ]
  },
  table: {
    title: "GPM to mL/min Conversion Reference Table",
    headers: ["Gallons/min (GPM)", "Milliliters/min (mL/min)", "Liters/min (L/min)", "Cubic cm/sec (cm³/s)"],
    rows: [
      { fromVal: "0.01 GPM", toVal: "37.85 mL/min", extra: "0.038 L/min", extra2: "0.63 cm³/s" },
      { fromVal: "0.05 GPM", toVal: "189.27 mL/min", extra: "0.189 L/min", extra2: "3.15 cm³/s" },
      { fromVal: "0.10 GPM", toVal: "378.54 mL/min", extra: "0.379 L/min", extra2: "6.31 cm³/s" },
      { fromVal: "0.20 GPM", toVal: "757.08 mL/min", extra: "0.757 L/min", extra2: "12.62 cm³/s" },
      { fromVal: "0.50 GPM", toVal: "1,892.71 mL/min", extra: "1.893 L/min", extra2: "31.55 cm³/s" },
      { fromVal: "1.00 GPM", toVal: "3,785.41 mL/min", extra: "3.785 L/min", extra2: "63.09 cm³/s" },
      { fromVal: "2.00 GPM", toVal: "7,570.82 mL/min", extra: "7.571 L/min", extra2: "126.18 cm³/s" },
      { fromVal: "3.00 GPM", toVal: "11,356.24 mL/min", extra: "11.356 L/min", extra2: "189.27 cm³/s" },
      { fromVal: "5.00 GPM", toVal: "18,927.06 mL/min", extra: "18.927 L/min", extra2: "315.45 cm³/s" },
      { fromVal: "10.00 GPM", toVal: "37,854.12 mL/min", extra: "37.854 L/min", extra2: "630.90 cm³/s" }
    ]
  },
  applications: {
    title: "Practical Applications of GPM to mL/min",
    items: [
      {
        title: "Pharmaceutical Bioprocessing & Fermentation",
        text: "Calibrating nutrient broth feeds, buffer solutions, and acid/base titration pumps where process recipes dictate mL/min."
      },
      {
        title: "Agricultural Fertigation & Chemical Injection",
        text: "Setting fertilizer injection rates (mL/min) into irrigation mainlines flowing at high rates (GPM) to achieve exact nutrient concentrations."
      },
      {
        title: "Water Treatment Coagulation Skids",
        text: "Sizing diaphragm metering pumps delivering liquid alum, chlorine, and flocculants into municipal raw water streams."
      },
      {
        title: "Automotive Paint & Sealant Dispensing",
        text: "Controlling automated robotic applicators dispensing primer, clear coat, and structural adhesives in assembly plants."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in GPM to mL/min Conversions",
    items: [
      "Confusing the US gallon (3,785.41 mL) with the UK imperial gallon (4,546.09 mL), resulting in a 20.1% dosing error.",
      "Dividing by 3,785 instead of multiplying when converting GPM to mL/min.",
      "Confusing mL/min with mL/sec, which differs by a factor of 60.",
      "Neglecting specific gravity when converting volumetric mL/min dosing rates into chemical mass recipes."
    ]
  },
  faqs: [
    {
      question: "How many milliliters per minute are in 1 GPM?",
      answer: "There are exactly 3,785.411784 milliliters per minute in 1 US gallon per minute."
    },
    {
      question: "How many GPM are in 1 milliliter per minute?",
      answer: "There are approximately 0.000264172 GPM in 1 mL/min (1 / 3,785.411784 GPM)."
    },
    {
      question: "What is the formula to convert GPM to mL/min?",
      answer: "The formula is: mL/min = GPM × 3,785.411784."
    },
    {
      question: "How do I convert 0.1 GPM to mL/min?",
      answer: "Multiply 0.1 by 3,785.411784 to obtain approximately 378.54 mL/min."
    },
    {
      question: "Is 1 mL/min equal to 1 cc/min?",
      answer: "Yes, exactly. One milliliter is defined as one cubic centimeter (1 mL = 1 cm³ = 1 cc). Therefore, 1 mL/min = 1 cc/min."
    },
    {
      question: "Why do chemical pumps use mL/min instead of GPM?",
      answer: "Because chemical dosing rates are often tiny fractions of a gallon. Using mL/min allows operators to set whole numbers (like 250 mL/min) rather than awkward decimals like 0.066 GPM."
    },
    {
      question: "How many liters per minute equal 3,785 mL/min?",
      answer: "3,785.41 mL/min equals exactly 3.78541 L/min (which equals 1 GPM)."
    },
    {
      question: "Does pressure affect the GPM to mL/min conversion?",
      answer: "No. For incompressible liquids like water and standard chemicals, volumetric flow conversion is purely geometric and independent of line pressure."
    }
  ],
  relatedList: [
    { label: "Gallon/min to Liter/min", from: "gallon-per-min", to: "liter-per-min" },
    { label: "Gallon/min to Cubic centimeter/sec", from: "gallon-per-min", to: "cubic-centimeter-per-sec" },
    { label: "Milliliter/min to Gallon/min", from: "milliliter-per-min", to: "gallon-per-min" },
    { label: "Gallon/min to Gallon/hour", from: "gallon-per-min", to: "gallon-per-hour" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics.",
    "American Water Works Association (AWWA): Water Treatment Plant Design."
  ]
};
