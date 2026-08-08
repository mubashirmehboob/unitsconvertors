import { CustomArticleData } from "./types";

export const kiloampereToMilliampere: CustomArticleData = {
  fromUnitId: "kiloampere",
  toUnitId: "milliampere",
  seoTitle: "Kiloampere to Milliampere Converter (kA to mA)",
  metaDescription: "Convert Kiloamperes to Milliamperes (kA to mA) accurately. Learn the 1,000,000 multiplication formula, power system calculations, tables, and FAQs.",
  h1: "Kiloampere to Milliampere Converter",
  introduction: [
    "The Kiloampere (kA) and Milliampere (mA) represent opposite tiers of the electrical current scale. While kiloamperes describe heavy utility currents, electric arc furnace loads, and power grid faults, milliamperes describe sensitive electronics, sensor current loops, and microcontroller signals.",
    "Because 'kilo' represents 10³ and 'milli' represents 10⁻³, one kiloampere contains exactly 1,000,000 milliamperes. Converting kiloamperes to milliamperes requires multiplying the current value in kiloamperes by 1,000,000.",
    "This technical article details the 1,000,000 multiplication ratio, sensor monitoring across utility transformers, conversion charts, scientific notation rules, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Kiloamperes to Milliamperes, multiply the current in kiloamperes by 1,000,000. For example, 1 kA equals 1,000,000 mA, and 0.5 kA converts to 500,000 mA.",
    formulaDisplay: "mA = kA × 1,000,000",
    subtext: "1 Kiloampere is equal to exactly 1,000,000 Milliamperes."
  },
  aboutSourceUnit: {
    title: "What is a Kiloampere (kA)?",
    text: "The Kiloampere (symbol: kA) is a metric multiple equal to 1,000 amperes (10³ A). Kiloamperes are used in electrical utility distribution, substation short-circuit ratings, lightning discharge testing, and heavy electro-metallurgy."
  },
  aboutTargetUnit: {
    title: "Understanding Milliamperes (mA)",
    text: "The Milliampere (symbol: mA) is a metric submultiple equal to one-thousandth of an ampere (0.001 A or 10⁻³ A). Milliamperes measure current draw in operational amplifiers, status LEDs, microcontrollers, and 4–20 mA industrial process loops."
  },
  relationship: "The metric scale relationship between kiloamperes and milliamperes spans six decimal orders of magnitude: 1 kA = 1,000,000 mA, and 1 mA = 0.000001 kA.",
  relationshipTitle: "Kiloampere to Milliampere Scale Comparisons",
  relationshipItems: [
    { label: "0.001 kA", value: "1,000 mA (1 Ampere baseline load)" },
    { label: "0.1 kA", value: "100,000 mA (100 Amperes residential main panel feed)" },
    { label: "1.0 kA", value: "1,000,000 mA (Commercial building main busbar current)" },
    { label: "10.0 kA", value: "10,000,000 mA (Residential breaker AIC capacity limit)" },
    { label: "30.0 kA", value: "30,000,000 mA (Average atmospheric lightning stroke)" }
  ],
  formula: {
    text: "Multiply the electric current value in Kiloamperes by 1,000,000 to determine the equivalent current in Milliamperes.",
    math: "mA = kA × 1000000",
    subtext: "To convert milliamperes back to kiloamperes, divide the milliampere value by 1,000,000."
  },
  formulaTitle: "Kiloampere to Milliampere Formula",
  practicalTip: {
    title: "Rightward Decimal Movement",
    text: "To convert kiloamperes to milliamperes mentally, move the decimal point six places to the right. For instance, 0.25 kA becomes 250,000 mA."
  },
  expertNote: {
    title: "Current Transformer (CT) Secondary Ratios",
    text: "High-voltage transmission lines carrying kiloamperes use Current Transformers (CTs) to step down primary current for telemetry meters that process milliampere-level sensor signals."
  },
  examples: {
    title: "Step-by-Step kA to mA Worked Examples",
    items: [
      {
        title: "Example 1: Industrial Substation Feeder",
        subtitle: "Convert a 2.5 Kiloampere primary feeder current into Milliamperes.",
        steps: [
          "Identify current in Kiloamperes: 2.5 kA.",
          "Apply conversion formula: mA = 2.5 × 1,000,000.",
          "Calculate: 2.5 × 1,000,000 = 2,500,000.",
          "Result: 2.5 Kiloamperes equals 2,500,000 Milliamperes."
        ]
      },
      {
        title: "Example 2: Commercial Switchgear Feeder",
        subtitle: "Convert 0.8 Kiloamperes to Milliamperes.",
        steps: [
          "Identify current: 0.8 kA.",
          "Multiply by 1,000,000: 0.8 × 1,000,000 = 800,000.",
          "Result: 0.8 Kiloamperes equals 800,000 mA."
        ]
      },
      {
        title: "Example 3: Electric Arc Furnace Operating Current",
        subtitle: "Convert 15 Kiloamperes into Milliamperes.",
        steps: [
          "Identify current: 15 kA.",
          "Multiply by 1,000,000: 15 × 1,000,000 = 15,000,000.",
          "Result: 15 Kiloamperes equals 15,000,000 mA."
        ]
      }
    ]
  },
  table: {
    title: "Kiloampere to Milliampere Conversion Reference Table",
    headers: ["Kiloamperes (kA)", "Milliamperes (mA)", "Electrical Power Context"],
    rows: [
      { fromVal: "0.001 kA", toVal: "1,000 mA", extra: "1 Ampere standard circuit current" },
      { fromVal: "0.01 kA", toVal: "10,000 mA", extra: "10 Amperes small appliance branch" },
      { fromVal: "0.1 kA", toVal: "100,000 mA", extra: "100 Amperes main panel service feed" },
      { fromVal: "0.5 kA", toVal: "500,000 mA", extra: "Industrial motor starter feeder" },
      { fromVal: "1.0 kA", toVal: "1,000,000 mA", extra: "Commercial building main distribution bus" },
      { fromVal: "2.5 kA", toVal: "2,500,000 mA", extra: "Data center UPS main feeder" },
      { fromVal: "5.0 kA", toVal: "5,000,000 mA", extra: "Medium-voltage transformer secondary" },
      { fromVal: "10.0 kA", toVal: "10,000,000 mA", extra: "Residential breaker AIC rating threshold" },
      { fromVal: "22.0 kA", toVal: "22,000,000 mA", extra: "Substation short-circuit fault current" },
      { fromVal: "50.0 kA", toVal: "50,000,000 mA", extra: "High-voltage transmission line fault limit" }
    ]
  },
  applications: {
    title: "Practical Applications of kA to mA Conversion",
    items: [
      {
        title: "Current Transformer Scaling Algorithms",
        text: "Power management software converts kiloampere primary grid currents down to milliampere secondary sensor outputs to compute real-time power metrics."
      },
      {
        title: "Arc-Flash Sensor Calibration",
        text: "Optical arc-flash relays detect light emission from fault arcs, converting primary arc currents in kA to milliampere photo-sensor trigger signals."
      },
      {
        title: "High-Current Calibration Standards",
        text: "Calibration laboratories measure precision shunt voltage drops in milliamperes to verify high-current generators outputting kiloamperes."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Kiloamperes to Milliamperes",
    items: [
      "Dividing by 1,000,000 instead of multiplying: Converting from a larger unit (kA) to a smaller unit (mA) requires multiplication by 10⁶.",
      "Miscounting zeros in long numbers: Use exponential formatting (e.g., 2.5 × 10⁶ mA) when entering values into software.",
      "Confusing kiloamperes (kA) with kilovolts (kV): kA measures current flow, whereas kV measures voltage."
    ]
  },
  faqs: [
    {
      question: "How many Milliamperes are in 1 Kiloampere?",
      answer: "There are exactly 1,000,000 Milliamperes in 1 Kiloampere."
    },
    {
      question: "What is the formula to convert Kiloamperes to Milliamperes?",
      answer: "The formula is: Milliamperes = Kiloamperes × 1,000,000."
    },
    {
      question: "How many Milliamperes is 0.5 kA?",
      answer: "0.5 Kiloamperes equals 500,000 Milliamperes (0.5 × 1,000,000 = 500,000 mA)."
    },
    {
      question: "What is 2 kA in Milliamperes?",
      answer: "2 Kiloamperes equals 2,000,000 Milliamperes."
    },
    {
      question: "Why use kA for grid current and mA for sensors?",
      answer: "Kiloamperes handle heavy power transmission without large numbers, while milliamperes suit delicate microelectronic circuitry."
    },
    {
      question: "How do I convert 0.05 kA to mA?",
      answer: "Multiply 0.05 by 1,000,000 to obtain 50,000 Milliamperes."
    },
    {
      question: "Is mA smaller than kA?",
      answer: "Yes, 1 Milliampere is one million times smaller than 1 Kiloampere."
    },
    {
      question: "How do I convert Milliamperes back to Kiloamperes?",
      answer: "Divide the current in milliamperes by 1,000,000 to obtain kiloamperes."
    }
  ],
  relatedList: [
    { label: "Milliampere to Kiloampere", from: "milliampere", to: "kiloampere" },
    { label: "Kiloampere to Ampere", from: "kiloampere", to: "ampere" },
    { label: "Kiloampere to Microampere", from: "kiloampere", to: "microampere" },
    { label: "Kiloampere to Abampere", from: "kiloampere", to: "abampere" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI).",
    "IEEE Std 1584: Guide for Performing Arc-Flash Hazard Calculations.",
    "BIPM Metric System Documentation."
  ]
};
