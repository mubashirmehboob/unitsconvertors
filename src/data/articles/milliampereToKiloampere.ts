import { CustomArticleData } from "./types";

export const milliampereToKiloampere: CustomArticleData = {
  fromUnitId: "milliampere",
  toUnitId: "kiloampere",
  seoTitle: "Milliampere to Kiloampere Converter (mA to kA)",
  metaDescription: "Convert Milliamperes to Kiloamperes (mA to kA) instantly. Learn the 1,000,000 conversion ratio, power system analysis formulas, tables, and FAQs.",
  h1: "Milliampere to Kiloampere Converter",
  introduction: [
    "The Milliampere (mA) and Kiloampere (kA) represent opposite extremes of the electric current measurement spectrum. Milliamperes quantify low-power electronic sensor currents and microcontroller logic draw, whereas kiloamperes quantify heavy industrial power currents, substation bus faults, and lightning protection impulse currents.",
    "Because the 'milli' prefix represents 10⁻³ and the 'kilo' prefix represents 10³, one kiloampere equals 1,000,000 milliamperes. Converting milliamperes to kiloamperes requires dividing the milliampere current by 1,000,000 (or multiplying by 10⁻⁶).",
    "This technical guide explains the conversion ratio between mA and kA, power system leakage vs fault analysis, unit comparison tables, scientific notation applications, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Milliamperes to Kiloamperes, divide the current in milliamperes by 1,000,000. For example, 1,000,000 mA equals 1 kA, and 500,000 mA converts to 0.5 kA.",
    formulaDisplay: "kA = mA / 1,000,000",
    subtext: "1 Kiloampere is equal to exactly 1,000,000 Milliamperes."
  },
  aboutSourceUnit: {
    title: "What is a Milliampere (mA)?",
    text: "The Milliampere (symbol: mA) is a metric submultiple equal to one-thousandth of an ampere (0.001 A). It is commonly used in electronic hardware design, battery telemetry, biomedical devices, and industrial control loops."
  },
  aboutTargetUnit: {
    title: "Understanding Kiloamperes (kA)",
    text: "The Kiloampere (symbol: kA) is a metric multiple equal to 1,000 amperes (10³ A). Kiloamperes are used in electrical utility distribution, high-voltage switchgear short-circuit ratings, arc furnace operations, and lightning protection engineering."
  },
  relationship: "The metric scaling factor between milliamperes and kiloamperes spans six orders of magnitude: 1 kA = 1,000,000 mA, and 1 mA = 0.000001 kA (10⁻⁶ kA).",
  relationshipTitle: "Milliampere to Kiloampere Scale Ratios",
  relationshipItems: [
    { label: "1,000 mA", value: "0.001 kA (1 Ampere baseline current)" },
    { label: "100,000 mA", value: "0.1 kA (100 Amperes residential service current)" },
    { label: "1,000,000 mA", value: "1 kA (Commercial building main power feed)" },
    { label: "10,000,000 mA", value: "10 kA (Substation fault current capacity)" },
    { label: "30,000,000 mA", value: "30 kA (Average atmospheric lightning discharge)" }
  ],
  formula: {
    text: "Divide the electric current value in Milliamperes by 1,000,000 to determine the equivalent current in Kiloamperes.",
    math: "kA = mA / 1000000",
    subtext: "To convert kiloamperes back to milliamperes, multiply the kiloampere value by 1,000,000."
  },
  formulaTitle: "Milliampere to Kiloampere Formula",
  practicalTip: {
    title: "Leftward Decimal Shift Rule",
    text: "Converting milliamperes to kiloamperes mentally requires shifting the decimal point six places to the left. For example, 250,000 mA becomes 0.25 kA."
  },
  expertNote: {
    title: "Ground Fault Protection Sensitivity",
    text: "Ground fault circuit interrupters (GFCIs) trip on tiny ground leakage currents of 4–6 mA. Electrical distribution study software converts these sensor trip levels into kA notation to analyze power grid balance."
  },
  examples: {
    title: "Step-by-Step mA to kA Worked Examples",
    items: [
      {
        title: "Example 1: High-Current Industrial Busbar",
        subtitle: "Convert 2,500,000 Milliamperes into Kiloamperes.",
        steps: [
          "Identify current in Milliamperes: 2,500,000 mA.",
          "Apply conversion formula: kA = 2,500,000 / 1,000,000.",
          "Calculate: 2,500,000 / 1,000,000 = 2.5.",
          "Result: 2,500,000 Milliamperes equals 2.5 Kiloamperes."
        ]
      },
      {
        title: "Example 2: Substation Short-Circuit Simulation",
        subtitle: "Convert 18,000,000 Milliamperes to Kiloamperes.",
        steps: [
          "Identify current: 18,000,000 mA.",
          "Divide by 1,000,000: 18,000,000 / 1,000,000 = 18.",
          "Result: 18,000,000 Milliamperes equals 18 kA."
        ]
      },
      {
        title: "Example 3: Electric Motor Inrush Current",
        subtitle: "Convert 450,000 Milliamperes to Kiloamperes.",
        steps: [
          "Identify current: 450,000 mA.",
          "Divide by 1,000,000: 450,000 / 1,000,000 = 0.45.",
          "Result: 450,000 Milliamperes equals 0.45 kA."
        ]
      }
    ]
  },
  table: {
    title: "Milliampere to Kiloampere Conversion Reference Table",
    headers: ["Milliamperes (mA)", "Kiloamperes (kA)", "Electrical Scale Context"],
    rows: [
      { fromVal: "1,000 mA", toVal: "0.001 kA", extra: "1 Ampere standard appliance load" },
      { fromVal: "10,000 mA", toVal: "0.01 kA", extra: "10 Amperes residential branch circuit" },
      { fromVal: "100,000 mA", toVal: "0.1 kA", extra: "100 Amperes main breaker panel feed" },
      { fromVal: "500,000 mA", toVal: "0.5 kA", extra: "500 Amperes industrial motor drive" },
      { fromVal: "1,000,000 mA", toVal: "1.0 kA", extra: "Commercial building main service entrance" },
      { fromVal: "5,000,000 mA", toVal: "5.0 kA", extra: "Medium-voltage substation transformer secondary" },
      { fromVal: "10,000,000 mA", toVal: "10.0 kA", extra: "Residential circuit breaker interrupting capacity limit" },
      { fromVal: "25,000,000 mA", toVal: "25.0 kA", extra: "Industrial switchgear fault current level" },
      { fromVal: "50,000,000 mA", toVal: "50.0 kA", extra: "High-voltage transmission grid fault rating" },
      { fromVal: "100,000,000 mA", toVal: "100.0 kA", extra: "Electric arc furnace smelting operating current" }
    ]
  },
  applications: {
    title: "Practical Applications of mA to kA Conversion",
    items: [
      {
        title: "Power System Modeling Software",
        text: "Grid simulation engines normalize power system variables between micro-leakage milliamperes and power grid kiloamperes to compute short-circuit withstand ratings."
      },
      {
        title: "High-Current Testing Laboratory Standards",
        text: "Test laboratories evaluate circuit breaker trip thresholds across 6 orders of magnitude, converting leakage test parameters in mA to main breaker surge capacity in kA."
      },
      {
        title: "Lightning Protection Array Evaluation",
        text: "Engineers evaluate surge diverter networks by comparing sensor telemetry leakage currents (mA) against peak lightning discharge currents (kA)."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Milliamperes to Kiloamperes",
    items: [
      "Multiplying by 1,000,000 instead of dividing: Moving from milliamperes to kiloamperes requires division because kiloamperes represent a much larger unit.",
      "Losing significant digits with leading zeros: Expressing small milliampere values in kA requires scientific notation (e.g., 50 mA = 5 × 10⁻⁵ kA) to prevent truncation errors.",
      "Confusing kiloamperes (kA) with kilovolts (kV): kA measures current flow, whereas kV measures electrical potential difference."
    ]
  },
  faqs: [
    {
      question: "How many Milliamperes are in 1 Kiloampere?",
      answer: "There are exactly 1,000,000 Milliamperes in 1 Kiloampere."
    },
    {
      question: "What is the formula to convert Milliamperes to Kiloamperes?",
      answer: "The formula is: Kiloamperes = Milliamperes / 1,000,000."
    },
    {
      question: "How many Kiloamperes is 1,000,000 mA?",
      answer: "1,000,000 Milliamperes equals 1 Kiloampere."
    },
    {
      question: "What is 500,000 mA in Kiloamperes?",
      answer: "500,000 Milliamperes equals 0.5 Kiloamperes."
    },
    {
      question: "Why is there such a large difference between mA and kA?",
      answer: "Milliamperes are designed for delicate electronic signal paths (10⁻³ A), while kiloamperes are designed for heavy electrical power distribution (10³ A)."
    },
    {
      question: "How do I convert 100,000 mA to kA?",
      answer: "Divide 100,000 by 1,000,000 to get 0.1 Kiloamperes."
    },
    {
      question: "Is kA an official metric unit?",
      answer: "Yes, the kiloampere is an official SI unit combining the prefix 'kilo-' with 'ampere'."
    },
    {
      question: "How do I convert Kiloamperes back to Milliamperes?",
      answer: "Multiply the current in kiloamperes by 1,000,000 to obtain milliamperes."
    }
  ],
  relatedList: [
    { label: "Kiloampere to Milliampere", from: "kiloampere", to: "milliampere" },
    { label: "Milliampere to Ampere", from: "milliampere", to: "ampere" },
    { label: "Milliampere to Microampere", from: "milliampere", to: "microampere" },
    { label: "Milliampere to Abampere", from: "milliampere", to: "abampere" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI).",
    "IEEE Std 1584: Guide for Performing Arc-Flash Hazard Calculations.",
    "BIPM SI Brochure Documentation."
  ]
};
