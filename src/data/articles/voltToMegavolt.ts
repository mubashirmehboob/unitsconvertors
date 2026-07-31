import { CustomArticleData } from "./types";

export const voltToMegavolt: CustomArticleData = {
  fromUnitId: "volt",
  toUnitId: "megavolt",
  seoTitle: "Volt to Megavolt Converter (V to MV)",
  metaDescription: "Convert Volts to Megavolts (V to MV) quickly and accurately. Learn the conversion formula, practical examples, reference tables, and answers to common FAQs.",
  h1: "Volt to Megavolt Converter",
  introduction: [
    "Volts (V) and Megavolts (MV) are standard SI units used to measure electrical potential difference. While volts measure standard everyday electrical circuits, megavolts are used for large-scale electrical systems and high-voltage power lines.",
    "Because the SI prefix 'mega' represents one million (10⁶), one megavolt equals exactly 1,000,000 volts. To convert any potential value from volts to megavolts, divide the number of volts by 1,000,000.",
    "Use our instant converter above or follow the formula, step-by-step examples, and reference table below to perform your calculation."
  ],
  quickAnswer: {
    text: "To convert Volts to Megavolts, divide the voltage value by 1,000,000. For example, 500,000 V equals 0.5 MV, and 138,000 V equals 0.138 MV.",
    formulaDisplay: "MV = V ÷ 1,000,000",
    subtext: "1 Volt is equal to exactly 0.000001 Megavolts (10⁻⁶ MV)."
  },
  aboutSourceUnit: {
    title: "Understanding the Volt (V)",
    text: "The Volt (symbol: V) is the primary SI derived unit for electrical potential difference, voltage, and electromotive force. Named after Alessandro Volta, one volt drives one ampere of current through a resistance of one ohm."
  },
  aboutTargetUnit: {
    title: "Understanding the Megavolt (MV)",
    text: "The Megavolt (symbol: MV) is a metric multiple unit equal to 1,000,000 volts. Megavolts are commonly used in high-voltage power transmission, industrial insulation testing, and physics research equipment."
  },
  relationship: "The relationship between volts and megavolts is defined by the metric system prefix mega: 1 MV = 1,000,000 V, and 1 V = 0.000001 MV.",
  relationshipTitle: "Volt and Megavolt Scale Comparison",
  relationshipItems: [
    { label: "1,000 V", value: "0.001 MV (Standard industrial low-voltage limit)" },
    { label: "13,800 V", value: "0.0138 MV (City distribution power feeder)" },
    { label: "115,000 V", value: "0.115 MV (Regional power line)" },
    { label: "500,000 V", value: "0.5 MV (Extra-high-voltage transmission grid)" },
    { label: "1,000,000 V", value: "1.0 MV (1 Megavolt threshold)" }
  ],
  formula: {
    text: "Divide the electrical potential in Volts by 1,000,000 to get the value in Megavolts.",
    math: "MV = V / 1000000",
    subtext: "To convert megavolts back to volts, multiply by 1,000,000."
  },
  formulaTitle: "Volt to Megavolt Formula",
  practicalTip: {
    title: "Quick Mental Calculation",
    text: "To convert volts to megavolts without a calculator, move the decimal point six places to the left. For instance, 250,000 V becomes 0.25 MV."
  },
  expertNote: {
    title: "Engineering Notation Tip",
    text: "When documenting high-voltage calculations in engineering reports, converting large volt values into megavolts eliminates trailing zeros and reduces formatting errors in single-line power diagrams."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Industrial Service Boundary",
        subtitle: "Convert a 1,000 Volt equipment rating into Megavolts.",
        steps: [
          "Start with the voltage value: 1,000 V.",
          "Apply the formula: MV = 1,000 ÷ 1,000,000.",
          "Calculate: 1,000 ÷ 1,000,000 = 0.001.",
          "Result: 1,000 Volts equals 0.001 Megavolts."
        ]
      },
      {
        title: "Example 2: Utility Substation Feeder",
        subtitle: "Convert a 138,000 Volt regional power line into Megavolts.",
        steps: [
          "Start with the voltage value: 138,000 V.",
          "Divide by 1,000,000: 138,000 ÷ 1,000,000 = 0.138.",
          "Result: 138,000 Volts equals 0.138 Megavolts."
        ]
      },
      {
        title: "Example 3: Bulk Power Transmission Line",
        subtitle: "Convert a 500,000 Volt grid corridor rating into Megavolts.",
        steps: [
          "Start with the voltage value: 500,000 V.",
          "Divide by 1,000,000: 500,000 ÷ 1,000,000 = 0.5.",
          "Result: 500,000 Volts equals 0.5 Megavolts."
        ]
      }
    ]
  },
  table: {
    title: "Volt to Megavolt Reference Table",
    headers: ["Volts (V)", "Megavolts (MV)", "Common Application Context"],
    rows: [
      { fromVal: "230 V", toVal: "0.00023 MV", extra: "Standard single-phase household supply line" },
      { fromVal: "400 V", toVal: "0.0004 MV", extra: "Commercial 3-phase building supply" },
      { fromVal: "1,000 V", toVal: "0.001 MV", extra: "Low voltage standard upper limit" },
      { fromVal: "10,000 V", toVal: "0.01 MV", extra: "Commercial distribution feeder" },
      { fromVal: "100,000 V", toVal: "0.1 MV", extra: "High-voltage transmission line" },
      { fromVal: "230,000 V", toVal: "0.23 MV", extra: "Regional power transmission line" },
      { fromVal: "500,000 V", toVal: "0.5 MV", extra: "Extra-high-voltage grid line" },
      { fromVal: "1,000,000 V", toVal: "1.0 MV", extra: "1 Megavolt threshold" }
    ]
  },
  applications: {
    title: "Practical Uses of V to MV Conversion",
    items: [
      {
        title: "Power Transmission Networks",
        text: "Grid utility operators express major line ratings in megavolts to simplify power flow modeling across interconnected regional grids."
      },
      {
        title: "Medical & Radiation Equipment",
        text: "Linear accelerator systems in medical centers use megavolt levels to generate precise x-ray beams for oncology treatments."
      },
      {
        title: "High-Voltage Testing Laboratories",
        text: "Specialized testing facilities measure surge voltages in megavolts when checking circuit breaker and transformer insulation limits."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Confusing MV with mV: Remember that capital 'MV' stands for Megavolts (10⁶ V), while lowercase 'mV' stands for Millivolts (10⁻³ V).",
      "Multiplying instead of dividing: Converting from a smaller unit (V) to a larger unit (MV) always requires division.",
      "Confusing Megavolts with Megawatts: Megavolts (MV) measure electrical potential, whereas Megawatts (MW) measure power consumption or generation."
    ]
  },
  faqs: [
    {
      question: "How many Volts are in 1 Megavolt?",
      answer: "There are exactly 1,000,000 Volts in 1 Megavolt."
    },
    {
      question: "What is the formula to convert Volts to Megavolts?",
      answer: "The formula is: Megavolts = Volts ÷ 1,000,000."
    },
    {
      question: "How many Megavolts is 500,000 Volts?",
      answer: "500,000 Volts equals 0.5 Megavolts."
    },
    {
      question: "What is 1,000,000 V in Megavolts?",
      answer: "1,000,000 Volts equals exactly 1 Megavolt."
    },
    {
      question: "How do I convert 138,000 V to Megavolts?",
      answer: "Divide 138,000 by 1,000,000 to get 0.138 Megavolts."
    },
    {
      question: "What is the difference between kV and MV?",
      answer: "One Kilovolt (kV) is 1,000 Volts, while one Megavolt (MV) is 1,000,000 Volts."
    },
    {
      question: "How do I convert Megavolts back to Volts?",
      answer: "Multiply the Megavolt value by 1,000,000."
    }
  ],
  relatedList: [
    { label: "Volt to Kilovolt", from: "volt", to: "kilovolt" },
    { label: "Volt to Millivolt", from: "volt", to: "millivolt" },
    { label: "Kilovolt to Megavolt", from: "kilovolt", to: "megavolt" },
    { label: "Volt to Microvolt", from: "volt", to: "microvolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition)."
  ]
};
