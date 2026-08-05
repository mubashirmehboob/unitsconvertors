import { CustomArticleData } from "./types";

export const literPerSecToMilliliterPerMin: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "milliliter-per-min",
  seoTitle: "Liter per Second to Milliliter per Minute Converter - L/s to mL/min",
  metaDescription: "Convert liters per second to milliliters per minute (L/s to mL/min). Learn the exact conversion factor (1 L/s = 60,000 mL/min), laboratory HPLC formulas, and reference tables.",
  h1: "Liter per Second to Milliliter per Minute Converter",
  introduction: [
    "Converting liters per second (L/s) to milliliters per minute (mL/min) is a key conversion connecting macro-level fluid dynamics with micro-level chemical and medical liquid delivery. While main supply lines and industrial pumps measure discharge in liters per second, high-performance liquid chromatography (HPLC), medical IV pumps, and analytical chemical metering specify flow in milliliters per minute.",
    "Because one liter contains 1,000 milliliters and one minute contains 60 seconds, converting liters per second to milliliters per minute involves multiplying by exactly 60,000 (1,000 × 60). This guide provides step-by-step conversion steps, analytical chemistry examples, formulas, and reference charts."
  ],
  quickAnswer: {
    text: "To convert liters per second to milliliters per minute, multiply the flow rate in L/s by 60,000. For example, a small pump rate of 0.005 L/s delivers exactly 300 mL/min.",
    formulaDisplay: "1 L/s = 60,000 mL/min",
    subtext: "1 milliliter per minute equals 1/60,000 ≈ 0.0000166667 liters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate representing one liter (1,000 mL) transferred every second. It is the primary metric metric for pipeline flow, pump capacities, and hydraulic systems."
  },
  aboutTargetUnit: {
    title: "Understanding Milliliters per Minute (mL/min)",
    text: "The milliliter per minute (symbol: mL/min) is a metric unit of volumetric flow rate representing one-thousandth of a liter delivered over sixty seconds. It is the gold standard unit for HPLC solvent pumps, medical blood dialysis machines, and micro-reaction kinetics."
  },
  relationship: "The relationship between L/s and mL/min combines volume and time scaling. Scaling 1 L to milliliters multiplies by 1,000. Scaling 1 second to minutes multiplies by 60. Combining both factors gives 1,000 × 60 = 60,000 mL/min for every 1 L/s.",
  relationshipTitle: "Volume and Time Combination Scaling",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "= 60,000 Milliliters per Minute (mL/min)" },
    { label: "1 Milliliter per Minute (mL/min)", value: "≈ 0.0000166667 Liters per Second (L/s)" }
  ],
  formula: {
    text: "To calculate volumetric flow rate in milliliters per minute from liters per second, multiply the L/s value by 60,000.",
    math: "Flow (mL/min) = Flow (L/s) × 60,000",
    subtext: "Exact mathematical formula: Flow (mL/min) = Flow (L/s) × 1,000 × 60."
  },
  formulaTitle: "The Liter per Second to mL/min Formula",
  practicalTip: {
    title: "Quick Mental Math Shortcut",
    text: "To convert L/s to mL/min, multiply the L/s number by 6, then shift the decimal point 4 places to the right. For example, 0.01 L/s × 6 = 0.06; shift decimal 4 places = 600 mL/min."
  },
  expertNote: {
    title: "Exact SI Scaling",
    text: "This conversion relies strictly on integer definitions (1,000 mL/L and 60 s/min), yielding zero rounding error for precision laboratory calibration routines."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: HPLC Analytical Chromatography Calibration",
        subtitle: "A laboratory solvent feed line operates at a measured master rate of 0.002 L/s. Convert this to the standard column rating in mL/min.",
        steps: [
          "Identify the flow rate in L/s: 0.002 L/s.",
          "Apply the exact formula: Flow (mL/min) = 0.002 × 60,000.",
          "Calculate: 0.002 × 60,000 = 120 mL/min.",
          "Result: 0.002 L/s equals exactly 120 mL/min."
        ]
      },
      {
        title: "Example 2: Medical Dialysis Machine Blood Line",
        subtitle: "A hemodialysis machine pump circulates fluid at 0.006 L/s. Determine the rate in mL/min.",
        steps: [
          "Identify the flow rate: 0.006 L/s.",
          "Multiply by 60,000: 0.006 × 60,000 = 360 mL/min.",
          "Result: 0.006 L/s equals exactly 360 mL/min."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Second to Milliliters per Minute Conversion Reference",
    headers: ["Liters / Second (L/s)", "Milliliters / Minute (mL/min)", "Typical Laboratory & Medical Application"],
    rows: [
      { fromVal: "0.0001 L/s", toVal: "6 mL/min", extra: "Micro-bore HPLC column pump" },
      { fromVal: "0.0005 L/s", toVal: "30 mL/min", extra: "Preparative chromatography feed" },
      { fromVal: "0.001 L/s", toVal: "60 mL/min", extra: "Precision syringe dosing pump" },
      { fromVal: "0.005 L/s", toVal: "300 mL/min", extra: "Hemodialysis blood circulation line" },
      { fromVal: "0.010 L/s", toVal: "600 mL/min", extra: "Benchtop bioreactor nutrient feed" },
      { fromVal: "0.050 L/s", toVal: "3,000 mL/min", extra: "Medical suction canister pump" },
      { fromVal: "0.100 L/s", toVal: "6,000 mL/min", extra: "Pilot-scale chemical dosing" },
      { fromVal: "0.500 L/s", toVal: "30,000 mL/min", extra: "Commercial water filter test rig" },
      { fromVal: "1.000 L/s", toVal: "60,000 mL/min", extra: "Standard metric baseline 1 L/s" }
    ]
  },
  applications: {
    title: "Real-World Laboratory & Medical Applications",
    items: [
      {
        title: "HPLC & Analytical Chromatography",
        text: "Pharmaceutical chemists program HPLC pumps in mL/min, converting master flow sensor calibration outputs from L/s."
      },
      {
        title: "Medical Dialysis & Infusion Therapy",
        text: "Biomedical equipment technicians verify blood and saline pump flow rates in mL/min during safety inspections."
      },
      {
        title: "Fermentation & Bioreactor Nutrient Lines",
        text: "Bioprocess engineers regulate automated nutrient injection into fermentation tanks in mL/min."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1,000 instead of 60,000 when converting L/s to mL/min (forgetting the 60 s/min factor).",
      "Confusing mL/min (Milliliters per Minute) with mL/s (Milliliters per Second).",
      "Dividing by 60,000 instead of multiplying when converting L/s to mL/min."
    ]
  },
  faqs: [
    {
      question: "How many mL/min are in 1 liter per second?",
      answer: "There are exactly 60,000 mL/min in 1 liter per second."
    },
    {
      question: "What is the formula to convert L/s to mL/min?",
      answer: "The formula is: mL/min = L/s × 60,000."
    },
    {
      question: "What is 0.001 L/s in mL/min?",
      answer: "0.001 L/s multiplied by 60,000 equals exactly 60 mL/min."
    },
    {
      question: "What is 0.01 L/s in mL/min?",
      answer: "0.01 L/s multiplied by 60,000 equals exactly 600 mL/min."
    },
    {
      question: "How do I convert mL/min back to L/s?",
      answer: "Divide the mL/min value by 60,000 (or multiply by 0.0000166667)."
    },
    {
      question: "Why is the conversion factor 60,000?",
      answer: "Because 1 L = 1,000 mL and 1 min = 60 s. Multiplying 1,000 by 60 gives 60,000."
    },
    {
      question: "What is 0.1 L/s in mL/min?",
      answer: "0.1 L/s multiplied by 60,000 equals exactly 6,000 mL/min."
    },
    {
      question: "Is mL/min used in medical equipment?",
      answer: "Yes, medical IV pumps, blood dialysis machines, and anesthesia gas analyzers report flow rates primarily in mL/min."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Cubic centimeter/sec", from: "liter-per-sec", to: "cubic-centimeter-per-sec" },
    { label: "Liter/sec to Liter/min", from: "liter-per-sec", to: "liter-per-min" },
    { label: "Liter/sec to Gallon/hour", from: "liter-per-sec", to: "gallon-per-hour" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" }
  ],
  references: [
    "ISO 80000-3: Quantities and Units — Space and time",
    "USP <621> Chromatography: System Suitability and Flow Rate Specifications",
    "ISO 8637: Cardiovascular implants and extracorporeal systems — Haemodialysers"
  ]
};
