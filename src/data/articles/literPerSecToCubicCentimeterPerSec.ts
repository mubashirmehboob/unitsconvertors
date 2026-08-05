import { CustomArticleData } from "./types";

export const literPerSecToCubicCentimeterPerSec: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "cubic-centimeter-per-sec",
  seoTitle: "Liter per Second to Cubic Centimeter per Second Converter - L/s to cm³/s",
  metaDescription: "Convert liters per second to cubic centimeters per second (L/s to cm³/s or cc/s). Learn the exact conversion factor (1 L/s = 1,000 cm³/s), laboratory microfluidic formulas, and charts.",
  h1: "Liter per Second to Cubic Centimeter per Second Converter",
  introduction: [
    "Converting liters per second (L/s) to cubic centimeters per second (cm³/s, often written as cc/s) is a fundamental metric volumetric flow rate conversion in chemical engineering, biomedical engineering, microfluidics, and automotive fuel injection testing. Both units share the metric system and a per-second time base.",
    "Because one liter contains exactly 1,000 cubic centimeters (since 1 L = 1 dm³ = 1,000 cm³), converting liters per second to cubic centimeters per second requires multiplying by exactly 1,000. This article details the exact mathematical steps, laboratory applications, worked examples, and conversion reference tables."
  ],
  quickAnswer: {
    text: "To convert liters per second to cubic centimeters per second, multiply the flow rate in L/s by 1,000. For example, a flow rate of 0.25 L/s equals exactly 250 cm³/s.",
    formulaDisplay: "1 L/s = 1,000 cm³/s",
    subtext: "1 cubic centimeter per second (1 cm³/s) equals exactly 0.001 liters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate representing one cubic decimeter of fluid transferred per second. It is standard for industrial pipeline flow, pump output, and municipal water supply monitoring."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Centimeters per Second (cm³/s or cc/s)",
    text: "The cubic centimeter per second (symbol: cm³/s, cc/s, or cm³/s) is a metric unit of volumetric flow rate representing one milliliter (1 cm³) of fluid passing a point per second. It is widely used in laboratory analysis, engine fuel injector bench testing, and precision chemical dosing."
  },
  relationship: "The relationship between L/s and cm³/s is governed by metric volume geometry. One liter is defined as 1 cubic decimeter (10 cm × 10 cm × 10 cm = 1,000 cm³). Because both units measure flow over a one-second interval, 1 L/s equals exactly 1,000 cm³/s.",
  relationshipTitle: "Exact Metric Volume Ratio",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "= 1,000 Cubic Centimeters per Second (cm³/s)" },
    { label: "1 Cubic Centimeter per Second (cm³/s)", value: "= 0.001 Liters per Second (L/s)" }
  ],
  formula: {
    text: "To calculate volumetric flow rate in cubic centimeters per second from liters per second, multiply the L/s value by 1,000.",
    math: "Flow (cm³/s) = Flow (L/s) × 1,000",
    subtext: "Exact mathematical conversion based on 1 L = 1,000 cm³."
  },
  formulaTitle: "The Liter per Second to cm³/s Formula",
  practicalTip: {
    title: "Decimal Shift Trick",
    text: "To convert L/s to cm³/s instantly, move the decimal point three places to the right. For example, 0.075 L/s becomes 75 cm³/s."
  },
  expertNote: {
    title: "cm³/s vs mL/s",
    text: "In fluid dynamics and medicine, 1 cubic centimeter (cm³ or cc) is physically identical to 1 milliliter (mL). Therefore, 1 cm³/s equals 1 mL/s exactly."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Automotive Fuel Injector Testing",
        subtitle: "A high-performance fuel injector test bench measures a total delivery rate of 0.32 L/s. Convert this to cc/s (cm³/s).",
        steps: [
          "Identify the flow rate in L/s: 0.32 L/s.",
          "Apply the exact conversion factor: Flow (cm³/s) = 0.32 × 1,000.",
          "Calculate: 0.32 × 1,000 = 320 cm³/s.",
          "Result: 0.32 L/s equals exactly 320 cm³/s (or 320 cc/s)."
        ]
      },
      {
        title: "Example 2: Microfluidic Chemical Reactor Dosing",
        subtitle: "A chemical reagent dosing line pumps fluid at 0.015 L/s. Determine the rate in cm³/s.",
        steps: [
          "Identify the flow rate: 0.015 L/s.",
          "Multiply by 1,000: 0.015 × 1,000 = 15 cm³/s.",
          "Result: 0.015 L/s equals exactly 15 cm³/s."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Second to Cubic Centimeters per Second Conversion Reference",
    headers: ["Liters / Second (L/s)", "Cubic Centimeters / Second (cm³/s)", "Typical Laboratory & Industrial Application"],
    rows: [
      { fromVal: "0.001 L/s", toVal: "1 cm³/s", extra: "Micro-dosing peristaltic pump" },
      { fromVal: "0.005 L/s", toVal: "5 cm³/s", extra: "Medical IV infusion rapid flush" },
      { fromVal: "0.01 L/s", toVal: "10 cm³/s", extra: "Chromatography solvent delivery" },
      { fromVal: "0.05 L/s", toVal: "50 cm³/s", extra: "Automotive oil gallery test" },
      { fromVal: "0.10 L/s", toVal: "100 cm³/s", extra: "Precision chemical reagent feed" },
      { fromVal: "0.25 L/s", toVal: "250 cm³/s", extra: "High-flow fuel injector manifold" },
      { fromVal: "0.50 L/s", toVal: "500 cm³/s", extra: "Coolant pump bench test" },
      { fromVal: "1.0 L/s", toVal: "1,000 cm³/s", extra: "Standard metric baseline 1 L/s" },
      { fromVal: "5.0 L/s", toVal: "5,000 cm³/s", extra: "Hydraulic actuator displacement test" }
    ]
  },
  applications: {
    title: "Engineering & Science Applications",
    items: [
      {
        title: "Automotive & Aerospace Fuel Injection",
        text: "Engineers rate high-pressure fuel injectors and nozzle spray patterns in cc/s (cm³/s) and convert from L/s sensor feeds."
      },
      {
        title: "Biomedical Engineering & IV Dosing",
        text: "Infusion pumps and hemodialysis equipment monitor fluid delivery in cm³/s for precise dosage control."
      },
      {
        title: "Polymer Injection Molding",
        text: "Molding machine shot speeds evaluate plastic melt displacement in cm³/s during cavity filling phases."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 1,000 instead of multiplying when converting L/s to cm³/s.",
      "Confusing cm³/s (cubic centimeters per second) with cm³/min (cubic centimeters per minute).",
      "Treating cc/s and mL/s as different units (they are physically identical)."
    ]
  },
  faqs: [
    {
      question: "How many cm³/s are in 1 liter per second?",
      answer: "There are exactly 1,000 cm³/s in 1 liter per second."
    },
    {
      question: "Is cc/s the same as cm³/s?",
      answer: "Yes, 'cc' stands for cubic centimeter, which is identical to cm³."
    },
    {
      question: "Is 1 cm³/s equal to 1 mL/s?",
      answer: "Yes, 1 cubic centimeter is defined as exactly 1 milliliter."
    },
    {
      question: "What is the formula to convert L/s to cm³/s?",
      answer: "The formula is: cm³/s = L/s × 1,000."
    },
    {
      question: "What is 0.1 L/s in cm³/s?",
      answer: "0.1 L/s multiplied by 1,000 equals exactly 100 cm³/s."
    },
    {
      question: "How do I convert cm³/s back to L/s?",
      answer: "Divide the cm³/s value by 1,000."
    },
    {
      question: "What is 0.5 L/s in cc/s?",
      answer: "0.5 L/s multiplied by 1,000 equals 500 cc/s (cm³/s)."
    },
    {
      question: "Why is 1,000 the conversion factor?",
      answer: "Because 1 liter equals 1 cubic decimeter (dm³), and 1 dm³ contains 1,000 cubic centimeters (cm³)."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Milliliter/min", from: "liter-per-sec", to: "milliliter-per-min" },
    { label: "Liter/sec to Liter/min", from: "liter-per-sec", to: "liter-per-min" },
    { label: "Liter/sec to Cubic meter/sec", from: "liter-per-sec", to: "cubic-meter-per-sec" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" }
  ],
  references: [
    "ISO 80000-3: Quantities and Units — Space and time",
    "SAE J1832: Low Pressure Gasoline Fuel Injector Test Procedures",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)"
  ]
};
