import { CustomArticleData } from "./types";

export const gallonPerMinToCubicCentimeterPerSec: CustomArticleData = {
  fromUnitId: "gallon-per-min",
  toUnitId: "cubic-centimeter-per-sec",
  seoTitle: "Gallon/min to Cubic centimeter/sec Converter (GPM to cm³/s) | UnitsConvertors.com",
  metaDescription: "Convert gallons per minute to cubic centimeters per second (GPM to cm³/s / cc/s) accurately. Explore fluid mechanics formulas, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/flow/gallon-per-min-to-cubic-centimeter-per-sec",
  h1: "Gallon/min to Cubic centimeter/sec Converter",
  introduction: [
    "Gallons per minute (GPM) and cubic centimeters per second (cm³/s, or cc/s) represent two distinct operational scales in fluid mechanics and machinery engineering. While gallons per minute is the primary US customary unit for large-scale liquid handling, commercial pumps, and municipal water circuits, the cubic centimeter per second is a precision metric unit widely utilized in laboratory fluidics, automotive fuel injection, hydraulic valve leakage testing, and precision lubrication.",
    "Because one US liquid gallon equals exactly 3,785.411784 cubic centimeters (1 gallon = 3.785412 L) and one minute contains 60 seconds, one gallon per minute equals exactly 3,785.411784 / 60 ≈ 63.0901964 cm³/s (or mL/s).",
    "To convert gallons per minute to cubic centimeters per second, multiply the GPM value by 63.0901964. Inversely, to convert from cm³/s to GPM, multiply by approximately 0.01585032 (or divide by 63.090196). This comprehensive guide explains the derivation, provides step-by-step engineering calculations, and features a detailed conversion table."
  ],
  quickAnswer: {
    text: "To convert GPM to cm³/s (cc/s), multiply the GPM value by 63.0901964. For example, 2 GPM equals approximately 126.18 cm³/s.",
    formulaDisplay: "cm³/s = GPM × (3,785.411784 / 60) ≈ GPM × 63.090196",
    subtext: "1 GPM = 63.090196 cm³/s (cc/s); 1 cm³/s ≈ 0.015850 GPM."
  },
  aboutSourceUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "Gallons per minute is the dominant US customary volumetric flow rate unit, defined as the displacement of one US liquid gallon (231 cubic inches, or ~3.7854 liters) every sixty seconds. Used by pump manufacturers, civil engineers, and fire protection professionals, GPM rates plumbing fixtures, booster pumps, chilled water piping, and irrigation manifolds."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Centimeters per Second (cm³/s / cc/s)",
    text: "The cubic centimeter per second is a derived CGS and metric unit of volumetric flow rate. Because one cubic centimeter is physically identical to one milliliter (1 cm³ = 1 mL), cm³/s represents the passage of one milliliter of fluid every second. It is standard in automotive engineering for fuel injector flow benchmarks (cc/min or cc/s), internal combustion cylinder port flow testing, medical intravenous dosing, and hydraulic seal leakage audits."
  },
  relationship: "One US gallon per minute equals exactly 63.0901964 cubic centimeters per second. Inversely, 1 cm³/s equals approximately 0.015850323 GPM. Approximately 63.09 cc of fluid flow every second for each GPM.",
  relationshipTitle: "GPM to cm³/s Conversion Breakdown",
  relationshipItems: [
    { label: "0.1 GPM", value: "6.3090 cm³/s" },
    { label: "0.5 GPM", value: "31.5451 cm³/s" },
    { label: "1.0 GPM", value: "63.0902 cm³/s" },
    { label: "2.0 GPM", value: "126.1804 cm³/s" },
    { label: "5.0 GPM", value: "315.4510 cm³/s" },
    { label: "10.0 GPM", value: "630.9020 cm³/s" },
    { label: "50.0 GPM", value: "3,154.5098 cm³/s" }
  ],
  formula: {
    text: "Multiply the flow rate in GPM by 63.0901964 to determine cubic centimeters per second.",
    math: "\\text{cm}^3/\\text{s} = \\text{GPM} \\times \\frac{3{,}785.411784}{60} \\approx \\text{GPM} \\times 63.0901964",
    subtext: "Inverse formula: GPM = (cm³/s) / 63.0901964 ≈ (cm³/s) × 0.0158503"
  },
  formulaTitle: "GPM to cm³/s Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "For quick approximations on the shop floor, multiply GPM by 63. For instance, 4 GPM × 63 = 252 cm³/s (the exact value is 252.36 cm³/s, giving less than a 0.15% margin of error)."
  },
  expertNote: {
    title: "Equivalence to Milliliters per Second",
    text: "Because 1 cubic centimeter is defined as exactly 1 milliliter (1 cm³ = 1 mL), flow rates expressed in cm³/s and mL/s are identical (e.g., 50 cm³/s = 50 mL/s). This allows direct interchangeability across chemical, biological, and mechanical engineering documentation."
  },
  examples: {
    title: "Step-by-Step GPM to cm³/s Worked Examples",
    items: [
      {
        title: "Example 1: Automotive Fuel Rail Supply",
        subtitle: "A high-performance fuel pump supplies an engine fuel rail at a continuous rate of 1.25 GPM. Express this delivery in cm³/s.",
        steps: [
          "State the fuel pump delivery: Q = 1.25 GPM.",
          "Apply the conversion formula: cm³/s = 1.25 × 63.0901964.",
          "Calculate: 1.25 × 63.0901964 ≈ 78.8627.",
          "Final Result: 1.25 GPM equals approximately 78.86 cm³/s (78.86 cc/s)."
        ]
      },
      {
        title: "Example 2: Precision Hydraulic Valve Leakage Test",
        subtitle: "An aerospace servo-valve specification allows a maximum internal bypass leakage of 0.02 GPM. Convert this limit to cm³/s.",
        steps: [
          "Identify the flow rate: Q = 0.02 GPM.",
          "Multiply by 63.0901964: 0.02 × 63.0901964 ≈ 1.2618.",
          "Final Result: 0.02 GPM corresponds to approximately 1.26 cm³/s."
        ]
      },
      {
        title: "Example 3: Chemical Dosing Metering Skid",
        subtitle: "A municipal water fluoridation skid meters chemical solution at 0.5 GPM. Convert this rate to cm³/s.",
        steps: [
          "State the metering rate: 0.5 GPM.",
          "Multiply by 63.0901964: 0.5 × 63.0901964 = 31.5451.",
          "Final Result: 0.5 GPM is equal to approximately 31.55 cm³/s."
        ]
      }
    ]
  },
  table: {
    title: "GPM to cm³/s Conversion Reference Table",
    headers: ["Gallons/min (GPM)", "Cubic cm/sec (cm³/s)", "Milliliters/min (mL/min)", "Liters/min (L/min)"],
    rows: [
      { fromVal: "0.10 GPM", toVal: "6.31 cm³/s", extra: "378.54 mL/min", extra2: "0.38 L/min" },
      { fromVal: "0.25 GPM", toVal: "15.77 cm³/s", extra: "946.35 mL/min", extra2: "0.95 L/min" },
      { fromVal: "0.50 GPM", toVal: "31.55 cm³/s", extra: "1,892.71 mL/min", extra2: "1.89 L/min" },
      { fromVal: "1.00 GPM", toVal: "63.09 cm³/s", extra: "3,785.41 mL/min", extra2: "3.79 L/min" },
      { fromVal: "2.00 GPM", toVal: "126.18 cm³/s", extra: "7,570.82 mL/min", extra2: "7.57 L/min" },
      { fromVal: "5.00 GPM", toVal: "315.45 cm³/s", extra: "18,927.06 mL/min", extra2: "18.93 L/min" },
      { fromVal: "10.00 GPM", toVal: "630.90 cm³/s", extra: "37,854.12 mL/min", extra2: "37.85 L/min" },
      { fromVal: "15.00 GPM", toVal: "946.35 cm³/s", extra: "56,781.18 mL/min", extra2: "56.78 L/min" },
      { fromVal: "25.00 GPM", toVal: "1,577.25 cm³/s", extra: "94,635.30 mL/min", extra2: "94.64 L/min" },
      { fromVal: "50.00 GPM", toVal: "3,154.51 cm³/s", extra: "189,270.59 mL/min", extra2: "189.27 L/min" }
    ]
  },
  applications: {
    title: "Engineering Applications of GPM to cm³/s",
    items: [
      {
        title: "Automotive Fuel Injection & Engine Tuning",
        text: "Translating vehicle fuel pump delivery curves specified in GPM into fuel rail and injector flow benchmarks calibrated in cc/min or cc/s."
      },
      {
        title: "Precision Hydraulic Spool Valve Testing",
        text: "Measuring internal leakage rates, seal weeping, and pilot stage flow volumes during aerospace flight-control actuator qualification."
      },
      {
        title: "Polymer Extrusion & Adhesive Dispensing",
        text: "Rating gear pump volumetric outputs where thermoplastic resins and structural epoxies are metered in cubic centimeters per second."
      },
      {
        title: "Microfluidic & Analytical Chemical Instrumentation",
        text: "Interfacing laboratory pilot plants with industrial chemical supply lines to verify liquid reagent stoichiometry."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in GPM to cm³/s Conversions",
    items: [
      "Confusing cm³/s (cubic centimeters per second) with cm³/min (cubic centimeters per minute), which differ by a factor of 60.",
      "Dividing by 63.09 instead of multiplying when converting from GPM to cm³/s.",
      "Using the UK imperial gallon (4,546.09 cm³) rather than the US liquid gallon (3,785.41 cm³).",
      "Treating cubic centimeters per second as a mass flow rate without accounting for fluid density."
    ]
  },
  faqs: [
    {
      question: "How many cubic centimeters per second are in 1 GPM?",
      answer: "There are approximately 63.090196 cubic centimeters per second in 1 US gallon per minute (exactly 3,785.411784 / 60 cm³/s)."
    },
    {
      question: "How many GPM are in 1 cm³/s?",
      answer: "There are approximately 0.015850 GPM in 1 cm³/s (60 / 3,785.411784 GPM)."
    },
    {
      question: "What is the formula to convert GPM to cm³/s?",
      answer: "The formula is: cm³/s = GPM × 63.0901964."
    },
    {
      question: "Is cm³/s the same as cc/s and mL/s?",
      answer: "Yes, exactly. One cubic centimeter (cm³) equals one cc, which equals one milliliter (mL). Therefore, 1 cm³/s = 1 cc/s = 1 mL/s."
    },
    {
      question: "How do I convert 3 GPM to cm³/s?",
      answer: "Multiply 3 by 63.0901964 to get approximately 189.27 cm³/s."
    },
    {
      question: "How many cc per minute are in 1 GPM?",
      answer: "Since there are 60 seconds in a minute, 1 GPM = 63.0902 × 60 = 3,785.41 cc/min (equal to the number of milliliters in a gallon)."
    },
    {
      question: "Why do automotive engineers use cc/s or cc/min?",
      answer: "Because engine cylinder displacements and fuel injector pulses involve small volumes of fuel, measuring in cubic centimeters avoids cumbersome decimal fractions."
    },
    {
      question: "Does fluid temperature affect the volumetric conversion?",
      answer: "The geometric relationship between gallons and cubic centimeters is temperature-independent, although fluid density changes with temperature."
    }
  ],
  relatedList: [
    { label: "Gallon/min to Milliliter/min", from: "gallon-per-min", to: "milliliter-per-min" },
    { label: "Gallon/min to Liter/min", from: "gallon-per-min", to: "liter-per-min" },
    { label: "Cubic centimeter/sec to Gallon/min", from: "cubic-centimeter-per-sec", to: "gallon-per-min" },
    { label: "Gallon/min to Liter/sec", from: "gallon-per-min", to: "liter-per-sec" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "SAE J2715: Gasoline Fuel Injector Flow Measurement and Characterization.",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics."
  ]
};
