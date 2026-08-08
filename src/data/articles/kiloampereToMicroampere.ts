import { CustomArticleData } from "./types";

export const kiloampereToMicroampere: CustomArticleData = {
  fromUnitId: "kiloampere",
  toUnitId: "microampere",
  seoTitle: "Kiloampere to Microampere Converter (kA to µA)",
  metaDescription: "Convert Kiloamperes to Microamperes (kA to µA) accurately. Learn the 1,000,000,000 scale multiplication formula, multi-range power system tables, and FAQs.",
  h1: "Kiloampere to Microampere Converter",
  introduction: [
    "The Kiloampere (kA) and Microampere (µA) represent opposite ends of electrical current measurement. Kiloamperes measure massive power currents like lightning strokes, substation transformer faults, and industrial arc furnaces. Microamperes measure tiny currents like microchip gate leakage, photodiode light responses, and biosensor signals.",
    "Because 'kilo' represents 10³ and 'micro' represents 10⁻⁶, the metric scaling ratio between kiloamperes and microamperes spans one billion units (10⁹). One kiloampere equals exactly 1,000,000,000 microamperes. Converting kiloamperes to microamperes requires multiplying the value in kiloamperes by 1,000,000,000.",
    "This conversion guide covers the 10⁹ mathematical factor, multi-scale power grid insulation analysis, reference conversion charts, scientific notation rules, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Kiloamperes to Microamperes, multiply the current in kiloamperes by 1,000,000,000. For instance, 1 kA equals 1,000,000,000 µA, and 0.5 kA converts to 500,000,000 µA.",
    formulaDisplay: "µA = kA × 1,000,000,000",
    subtext: "1 Kiloampere is equal to exactly 1,000,000,000 Microamperes."
  },
  aboutSourceUnit: {
    title: "What is a Kiloampere (kA)?",
    text: "The Kiloampere (symbol: kA) is a metric multiple equal to 1,000 amperes (10³ A). Kiloamperes measure high-voltage power transmission current, substation transformer fault capacity, and atmospheric lightning discharges."
  },
  aboutTargetUnit: {
    title: "Understanding Microamperes (µA)",
    text: "The Microampere (symbol: µA) is a decimal metric submultiple equal to one-millionth of an ampere (10⁻⁶ A). Microamperes measure semiconductor leakage, optical photodiode signals, and biosensor outputs."
  },
  relationship: "The metric scaling ratio between kiloamperes and microamperes spans nine decimal orders of magnitude: 1 kA = 1,000,000,000 µA, and 1 µA = 0.000000001 kA.",
  relationshipTitle: "Kiloampere to Microampere Scale Comparisons",
  relationshipItems: [
    { label: "0.001 kA", value: "1,000,000 µA (1 Ampere base current)" },
    { label: "0.1 kA", value: "100,000,000 µA (100 Amperes residential main panel feed)" },
    { label: "1.0 kA", value: "1,000,000,000 µA (Commercial building main busbar current)" },
    { label: "10.0 kA", value: "10,000,000,000 µA (Residential breaker AIC rating limit)" },
    { label: "30.0 kA", value: "30,000,000,000 µA (Average atmospheric lightning stroke)" }
  ],
  formula: {
    text: "Multiply the electric current value in Kiloamperes by 1,000,000,000 to determine the equivalent current in Microamperes.",
    math: "µA = kA × 1000000000",
    subtext: "To convert microamperes back to kiloamperes, divide the microampere value by 1,000,000,000."
  },
  formulaTitle: "Kiloampere to Microampere Formula",
  practicalTip: {
    title: "Scientific Notation Formatting",
    text: "Because converting kiloamperes to microamperes introduces 9 decimal places, express large values as kA × 10⁹ µA to maintain legibility."
  },
  expertNote: {
    title: "Insulation Leakage vs Fault Rating Analysis",
    text: "High-voltage surge diverter design involves calculating microampere standby leakage currents (e.g., 50 µA) while certifying the device to absorb impulse currents rated at 50 kA (50,000,000,000 µA)."
  },
  examples: {
    title: "Step-by-Step kA to µA Worked Examples",
    items: [
      {
        title: "Example 1: Transformer Low-Voltage Busbar",
        subtitle: "Convert a 1.2 Kiloampere busbar current to Microamperes.",
        steps: [
          "Identify current in Kiloamperes: 1.2 kA.",
          "Apply conversion formula: µA = 1.2 × 1,000,000,000.",
          "Calculate: 1.2 × 1,000,000,000 = 1,200,000,000.",
          "Result: 1.2 Kiloamperes equals 1,200,000,000 Microamperes."
        ]
      },
      {
        title: "Example 2: Commercial Switchgear Feeder",
        subtitle: "Convert 0.5 Kiloamperes into Microamperes.",
        steps: [
          "Identify current: 0.5 kA.",
          "Multiply by 1,000,000,000: 0.5 × 1,000,000,000 = 500,000,000.",
          "Result: 0.5 Kiloamperes equals 500,000,000 µA."
        ]
      },
      {
        title: "Example 3: Substation Short-Circuit Level",
        subtitle: "Convert 10 Kiloamperes to Microamperes.",
        steps: [
          "Identify current: 10 kA.",
          "Multiply by 1,000,000,000: 10 × 1,000,000,000 = 10,000,000,000.",
          "Result: 10 Kiloamperes equals 10,000,000,000 µA."
        ]
      }
    ]
  },
  table: {
    title: "Kiloampere to Microampere Conversion Reference Table",
    headers: ["Kiloamperes (kA)", "Microamperes (µA)", "Electrical Power Context"],
    rows: [
      { fromVal: "0.001 kA", toVal: "1,000,000 µA", extra: "1 Ampere standard appliance draw" },
      { fromVal: "0.01 kA", toVal: "10,000,000 µA", extra: "10 Amperes residential branch circuit" },
      { fromVal: "0.1 kA", toVal: "100,000,000 µA", extra: "100 Amperes residential main panel service feed" },
      { fromVal: "0.5 kA", toVal: "500,000,000 µA", extra: "500 Amperes industrial motor drive feed" },
      { fromVal: "1.0 kA", toVal: "1,000,000,000 µA", extra: "Commercial building main distribution busbar" },
      { fromVal: "5.0 kA", toVal: "5,000,000,000 µA", extra: "Medium-voltage transformer secondary current" },
      { fromVal: "10.0 kA", toVal: "10,000,000,000 µA", extra: "Residential breaker interrupting capacity limit" },
      { fromVal: "25.0 kA", toVal: "25,000,000,000 µA", extra: "Substation short-circuit fault current" },
      { fromVal: "50.0 kA", toVal: "50,000,000,000 µA", extra: "High-voltage transmission line fault limit" },
      { fromVal: "100.0 kA", toVal: "100,000,000,000 µA", extra: "Electric arc furnace smelting operating current" }
    ]
  },
  applications: {
    title: "Practical Applications of kA to µA Conversion",
    items: [
      {
        title: "Multi-Scale Power Grid Simulation",
        text: "Grid simulation engines maintain dynamic range by scaling bus parameters between microampere sensor signals and kiloampere fault currents."
      },
      {
        title: "High-Voltage Insulation Telemetry",
        text: "Diagnostic devices measure insulation leakage currents in microamperes to predict failure points on transmission lines carrying kiloamperes."
      },
      {
        title: "Surge Protection Diverter Calibration",
        text: "Surge arrester testers convert impulse current ratings in kiloamperes to microampere residual leakage parameters for safety compliance."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Kiloamperes to Microamperes",
    items: [
      "Dividing by 1,000,000,000 instead of multiplying: Converting from a larger unit (kA) to a smaller unit (µA) requires multiplying by 10⁹.",
      "Miscounting zeros when writing values manually: Use exponential notation (e.g., 1.5 × 10⁹ µA) to avoid digit dropping.",
      "Confusing kiloamperes (kA) with kilovolts (kV): Kiloamperes measure electric current, whereas kilovolts measure electrical potential."
    ]
  },
  faqs: [
    {
      question: "How many Microamperes are in 1 Kiloampere?",
      answer: "There are exactly 1,000,000,000 Microamperes in 1 Kiloampere."
    },
    {
      question: "What is the formula to convert Kiloamperes to Microamperes?",
      answer: "The formula is: Microamperes = Kiloamperes × 1,000,000,000."
    },
    {
      question: "How many Microamperes is 0.5 kA?",
      answer: "0.5 Kiloamperes equals 500,000,000 Microamperes (0.5 × 1,000,000,000 = 500,000,000 µA)."
    },
    {
      question: "What is 2 kA in Microamperes?",
      answer: "2 Kiloamperes equals 2,000,000,000 Microamperes."
    },
    {
      question: "Why does the conversion factor equal 1 billion?",
      answer: "Kilo is 10³ and Micro is 10⁻⁶; the difference is 10³ - (-6) = 10⁹ (1 billion)."
    },
    {
      question: "How do I convert 0.01 kA to µA?",
      answer: "Multiply 0.01 by 1,000,000,000 to obtain 10,000,000 Microamperes."
    },
    {
      question: "Is µA smaller than kA?",
      answer: "Yes, 1 Microampere is one billion times smaller than 1 Kiloampere."
    },
    {
      question: "How do I convert Microamperes back to Kiloamperes?",
      answer: "Divide the current in microamperes by 1,000,000,000 to obtain kiloamperes."
    }
  ],
  relatedList: [
    { label: "Microampere to Kiloampere", from: "microampere", to: "kiloampere" },
    { label: "Kiloampere to Ampere", from: "kiloampere", to: "ampere" },
    { label: "Kiloampere to Milliampere", from: "kiloampere", to: "milliampere" },
    { label: "Kiloampere to Abampere", from: "kiloampere", to: "abampere" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI).",
    "IEEE Std 1584: Guide for Performing Arc-Flash Hazard Calculations.",
    "BIPM SI Brochure Documentation."
  ]
};
