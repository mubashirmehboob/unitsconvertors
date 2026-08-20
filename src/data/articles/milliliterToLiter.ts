import { CustomArticleData } from "./types";

export const milliliterToLiter: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "liter",
  seoTitle: "Milliliter to Liter Converter - mL to L",
  metaDescription: "Convert milliliters to liters (mL to L). Step-by-step division formula, decimal shift rules, worked medical & culinary examples, and conversion tables.",
  h1: "Milliliter to Liter Converter",
  introduction: [
    "From clinical pharmacology and intravenous fluid titration to chemical laboratory synthesis, food science, and everyday beverage manufacturing, converting volume from milliliters to liters is one of the most fundamental calculations in the metric system. Because both units belong directly to the International System of Units (SI) volume hierarchy, their conversion is mathematically exact and governed by a simple base-10 factor of 1,000.",
    "A milliliter provides precision for micro-dosing and analytical chemistry, while the liter serves as the macroscopic benchmark for consumer capacities, liquid inventory, and bulk industrial processing. This technical guide explains the exact conversion formula, the three-place decimal shift method, step-by-step worked examples, reference conversion tables, and real-world practical applications."
  ],
  quickAnswer: {
    text: "To convert milliliters to liters, divide the volume in milliliters by 1,000 (or shift the decimal point three places to the left). For example, 750 mL equals exactly 0.75 liters.",
    formulaDisplay: "1,000 mL = 1 L | Volume (L) = Volume (mL) ÷ 1,000",
    subtext: "Since 'milli-' denotes one-thousandth (10⁻³), there are exactly 1,000 milliliters in one liter. Inversely, 1 milliliter equals exactly 0.001 liters."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL or ml) is a metric unit of volume equal to one-thousandth of a liter (10⁻³ L) or exactly 1 cubic centimeter (1 cm³ / cc). Defined as the volume of a cube measuring 1 centimeter on each side, the milliliter is the universal benchmark for pharmaceutical dosing, clinical syringes, laboratory titrations, and personal care packaging."
  },
  aboutTargetUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L or l) is a metric unit of volume equal to 1 cubic decimeter (1 dm³), 1,000 cubic centimeters (cm³), or 0.001 cubic meters (m³). Officially accepted for use alongside the International System of Units (SI), the liter is the worldwide commercial benchmark for packaged beverages, automotive engine displacements, and industrial liquid capacities."
  },
  relationship: "The prefix 'milli-' mathematically signifies a factor of 10⁻³ (1/1,000). Therefore, exactly 1,000 milliliters constitute 1 liter. Converting from milliliters to liters scales the numerical value down by a factor of 1,000, while converting liters to milliliters scales the numerical value up by 1,000.",
  relationshipTitle: "Metric Fluid Volume Hierarchy: Milliliters vs Liters",
  relationshipItems: [
    { label: "1,000 Milliliters (mL)", value: "exactly 1.0 Liter (L)" },
    { label: "1 Milliliter (mL)", value: "exactly 0.001 Liters (10⁻³ L)" },
    { label: "1 Milliliter (mL)", value: "exactly 1.0 Cubic Centimeter (1 cm³ / cc)" },
    { label: "1 Liter (L)", value: "exactly 1.0 Cubic Decimeter (1 dm³ / 0.001 m³)" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 1,000 to obtain the equivalent volume in liters, or multiply by 0.001.",
    math: "Volume in Liters (L) = Volume in Milliliters (mL) ÷ 1,000",
    subtext: "Alternatively: Volume in Liters (L) = Volume in Milliliters (mL) × 0.001"
  },
  formulaTitle: "Milliliter to Liter Conversion Formula",
  practicalTip: {
    title: "The Three-Place Decimal Shift Method",
    text: "To convert milliliters to liters instantly in your head, simply move the decimal point three positions to the left. For example, 1,250 mL becomes 1.25 L, and 330 mL becomes 0.33 L."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Intravenous Saline Infusion Bag",
        subtitle: "A hospital patient receives an IV infusion of 1,500 mL normal saline over 12 hours. Express the total fluid volume in liters.",
        steps: [
          "State the given volume: Volume = 1,500 mL.",
          "Apply the conversion formula: Volume (L) = Volume (mL) ÷ 1,000.",
          "Substitute the value: Volume (L) = 1,500 ÷ 1,000.",
          "Perform the division: Volume (L) = 1.50 L.",
          "Conclude: The total infused fluid volume equals exactly 1.50 liters."
        ]
      },
      {
        title: "Example 2: Commercial Beverage Production Batch",
        subtitle: "A craft brewery packages cider in 330 mL cans. Calculate the total volume in liters for a 6-pack (1,980 mL).",
        steps: [
          "Identify the total milliliter volume: 6 × 330 mL = 1,980 mL.",
          "Apply the division factor: 1,980 ÷ 1,000 = 1.98 L.",
          "Conclude: The 6-pack contains exactly 1.98 liters of cider."
        ]
      },
      {
        title: "Example 3: Chemical Reagent Solution Preparation",
        subtitle: "A chemistry laboratory technician measures 250 mL of hydrochloric acid. Find the volume in liters for master batch records.",
        steps: [
          "State the initial volume: Volume = 250 mL.",
          "Set up the equation: Volume (L) = 250 × 0.001.",
          "Calculate the result: 250 × 0.001 = 0.25 L.",
          "Conclude: The measured reagent volume is exactly 0.25 liters."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to Liter Conversion Table",
    headers: ["Milliliters (mL)", "Liters (L)", "Cubic Centimeters (cm³)", "Everyday Household Benchmark"],
    rows: [
      { fromVal: "1 mL", toVal: "0.001 L", extra: "1 cm³", extra2: "Approximately 20 standard water drops" },
      { fromVal: "5 mL", toVal: "0.005 L", extra: "5 cm³", extra2: "1 standard medical teaspoon" },
      { fromVal: "15 mL", toVal: "0.015 L", extra: "15 cm³", extra2: "1 standard culinary tablespoon" },
      { fromVal: "100 mL", toVal: "0.100 L", extra: "100 cm³", extra2: "Airport security travel liquid bottle limit" },
      { fromVal: "250 mL", toVal: "0.250 L", extra: "250 cm³", extra2: "1 standard metric measuring cup" },
      { fromVal: "330 mL", toVal: "0.330 L", extra: "330 cm³", extra2: "Standard international aluminum soda can" },
      { fromVal: "500 mL", toVal: "0.500 L", extra: "500 cm³", extra2: "Standard commercial single-serve water bottle" },
      { fromVal: "750 mL", toVal: "0.750 L", extra: "750 cm³", extra2: "Standard international wine / spirits bottle" },
      { fromVal: "1,000 mL", toVal: "1.000 L", extra: "1,000 cm³", extra2: "1 standard milk or juice carton" },
      { fromVal: "2,000 mL", toVal: "2.000 L", extra: "2,000 cm³", extra2: "Standard 2-liter family soda bottle" }
    ]
  },
  applications: {
    title: "Healthcare, Pharmacology & Food Science Applications",
    items: [
      {
        title: "Clinical Fluid Intake & Output (I&O) Auditing",
        text: "Registered nurses record hourly urine output, enteral nutrition, and oral hydration in milliliters, aggregating the total into liters for 24-hour electrolyte and renal balance charts."
      },
      {
        title: "Pharmaceutical Compounding & Sterile Injectables",
        text: "Pharmacists compounding sterile IV bags and oral pediatric suspensions calculate active ingredient concentrations in milligrams per milliliter (mg/mL) and scale up to bulk liter stock solutions."
      },
      {
        title: "Culinary Recipe Scaling & Commercial Catering",
        text: "Executive chefs and food manufacturers scaling small-batch test kitchen formulas (measured in mL) convert volumes to liters to generate commercial batch preparation guides."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying instead of dividing: Because milliliters are smaller units than liters, converting mL to L must always yield a smaller numerical value (divide by 1,000).",
      "Miscounting decimal positions: Moving the decimal point two places instead of three (e.g., thinking 500 mL = 5.0 L instead of 0.5 L) causes a catastrophic 10x error.",
      "Confusing fluid ounces with milliliters: Remember that 1 US fluid ounce is approximately 29.574 mL, not 30 mL or 1 mL."
    ]
  },
  faqs: [
    {
      question: "How many liters is 500 mL?",
      answer: "500 mL is equal to exactly 0.5 liters (500 ÷ 1,000 = 0.5 L)."
    },
    {
      question: "What is the formula to convert mL to L?",
      answer: "The formula is: Volume in Liters (L) = Volume in Milliliters (mL) ÷ 1,000 (or Volume in mL × 0.001)."
    },
    {
      question: "How many milliliters are in 1 liter?",
      answer: "There are exactly 1,000 milliliters in 1 liter."
    },
    {
      question: "How many liters is 750 mL?",
      answer: "750 mL is equal to exactly 0.75 liters (750 ÷ 1,000 = 0.75 L)."
    },
    {
      question: "How many liters is 250 mL?",
      answer: "250 mL is equal to exactly 0.25 liters (250 ÷ 1,000 = 0.25 L)."
    },
    {
      question: "Is 1 mL the same as 1 cc (cubic centimeter)?",
      answer: "Yes, 1 milliliter (mL) is geometrically and physically identical to 1 cubic centimeter (cm³ or cc)."
    },
    {
      question: "How many liters is 1,500 mL?",
      answer: "1,500 mL is equal to exactly 1.5 liters (1,500 ÷ 1,000 = 1.5 L)."
    },
    {
      question: "Why is the conversion factor between mL and L exactly 1,000?",
      answer: "The metric prefix 'milli-' is defined in the International System of Units (SI) as 10⁻³ (one-thousandth). Therefore, 1,000 milli-units always equal 1 base unit."
    }
  ],
  relatedList: [
    { label: "Liter to Milliliter", from: "liter", to: "milliliter" },
    { label: "Milliliter to Cubic Centimeter", from: "milliliter", to: "cubic-centimeter" },
    { label: "Milliliter to Fluid Ounce", from: "milliliter", to: "fluid-ounce-us" },
    { label: "Milliliter to Gallon (US)", from: "milliliter", to: "gallon-us" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — The International System of Units (SI Brochure)",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units",
    "ISO 80000-3:2019 — Quantities and Units (Space and Time)"
  ]
};
