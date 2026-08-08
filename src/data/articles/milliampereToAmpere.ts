import { CustomArticleData } from "./types";

export const milliampereToAmpere: CustomArticleData = {
  fromUnitId: "milliampere",
  toUnitId: "ampere",
  seoTitle: "Milliampere to Ampere Converter (mA to A)",
  metaDescription: "Convert Milliamperes to Amperes (mA to A) easily. Learn the 1,000 division formula, circuit analysis calculations, conversion tables, and FAQs.",
  h1: "Milliampere to Ampere Converter",
  introduction: [
    "The Milliampere (mA) and Ampere (A) are core units for measuring electric current rate of flow. When designing electronic circuits, troubleshooting sensor signals, or analyzing battery discharge rates, low-level currents expressed in milliamperes frequently need conversion into base amperes for Ohm's law and power calculations.",
    "Because 'milli' denotes one-thousandth, one milliampere equals exactly 0.001 amperes (10⁻³ A). Converting milliamperes to amperes is calculated by dividing the current in milliamperes by 1,000.",
    "This conversion article details the step-by-step mathematical method, circuit troubleshooting examples, reference conversion charts, common measurement errors, and technical FAQs."
  ],
  quickAnswer: {
    text: "To convert Milliamperes to Amperes, divide the current in milliamperes by 1,000. For example, 500 mA converts to 0.5 A, and 2,500 mA equals 2.5 A.",
    formulaDisplay: "A = mA / 1,000",
    subtext: "1 Milliampere is equal to exactly 0.001 Amperes."
  },
  aboutSourceUnit: {
    title: "What is a Milliampere (mA)?",
    text: "The Milliampere (symbol: mA) is a metric submultiple equal to one-thousandth of an ampere (0.001 A). It is the standard unit for measuring component-level current consumption in microcontrollers, sensors, operational amplifiers, and handheld gadgets."
  },
  aboutTargetUnit: {
    title: "Understanding Amperes (A)",
    text: "The Ampere (symbol: A) is the base SI unit of electric current. Defined by the fundamental physical constant of elementary electron charge per second, amperes measure macro-scale charge flow across power rails, motor drives, household appliances, and electrical switchgear."
  },
  relationship: "The metric scale relationship between milliamperes and amperes is defined by 1 A = 1,000 mA, and 1 mA = 0.001 A.",
  relationshipTitle: "Milliampere to Ampere Scale Ratios",
  relationshipItems: [
    { label: "10 mA", value: "0.01 A (Standard LED indicator operating current)" },
    { label: "100 mA", value: "0.1 A (Small DC fan supply current)" },
    { label: "500 mA", value: "0.5 A (Legacy USB bus current specification)" },
    { label: "1,000 mA", value: "1.0 A (Standard 1-Ampere power supply rating)" },
    { label: "5,000 mA", value: "5.0 A (High-capacity power bank discharge rate)" }
  ],
  formula: {
    text: "Divide the electric current value in Milliamperes by 1,000 to determine the equivalent value in Amperes.",
    math: "A = mA / 1000",
    subtext: "To convert amperes back to milliamperes, multiply the ampere value by 1,000."
  },
  formulaTitle: "Milliampere to Ampere Formula",
  practicalTip: {
    title: "Leftward Decimal Movement",
    text: "To convert milliamperes to amperes mentally, shift the decimal point three places to the left. For example, 450 mA becomes 0.45 A."
  },
  expertNote: {
    title: "Ohm's Law Calculation Requirement",
    text: "In electrical engineering formulas like V = I × R or P = I × V, the current variable 'I' must be expressed in base amperes (A). Converting milliampere component ratings to amperes first prevents severe calculation errors."
  },
  examples: {
    title: "Step-by-Step mA to A Worked Examples",
    items: [
      {
        title: "Example 1: Circuit Board Power Draw",
        subtitle: "Convert a 350 Milliampere microcontroller current draw to Amperes.",
        steps: [
          "Identify current in Milliamperes: 350 mA.",
          "Apply formula: A = 350 / 1,000.",
          "Calculate: 350 / 1,000 = 0.35.",
          "Result: 350 Milliamperes equals 0.35 Amperes."
        ]
      },
      {
        title: "Example 2: Industrial Process Sensor Signal",
        subtitle: "Convert a 20 Milliampere current loop signal into Amperes.",
        steps: [
          "Identify current: 20 mA.",
          "Divide by 1,000: 20 / 1,000 = 0.02.",
          "Result: 20 Milliamperes equals 0.02 A."
        ]
      },
      {
        title: "Example 3: Smartphone Battery Discharge Current",
        subtitle: "Convert 1,800 Milliamperes into Amperes.",
        steps: [
          "Identify current: 1,800 mA.",
          "Divide by 1,000: 1,800 / 1,000 = 1.8.",
          "Result: 1,800 Milliamperes equals 1.8 A."
        ]
      }
    ]
  },
  table: {
    title: "Milliampere to Ampere Conversion Reference Table",
    headers: ["Milliamperes (mA)", "Amperes (A)", "Circuit & Hardware Context"],
    rows: [
      { fromVal: "1 mA", toVal: "0.001 A", extra: "Precision op-amp bias current" },
      { fromVal: "10 mA", toVal: "0.01 A", extra: "Status LED indicator forward current" },
      { fromVal: "20 mA", toVal: "0.02 A", extra: "Industrial 4-20 mA loop full-scale signal" },
      { fromVal: "50 mA", toVal: "0.05 A", extra: "Optocoupler isolation channel drive" },
      { fromVal: "100 mA", toVal: "0.1 A", extra: "Small DC relay coil actuation current" },
      { fromVal: "250 mA", toVal: "0.25 A", extra: "Solderless breadboard circuit total draw" },
      { fromVal: "500 mA", toVal: "0.5 A", extra: "Standard USB 2.0 port power ceiling" },
      { fromVal: "1,000 mA", toVal: "1.0 A", extra: "1 Ampere bench power supply baseline" },
      { fromVal: "2,000 mA", toVal: "2.0 A", extra: "Tablet fast charger rating" },
      { fromVal: "10,000 mA", toVal: "10.0 A", extra: "10 Ampere digital multimeter fused current jack" }
    ]
  },
  applications: {
    title: "Practical Applications of mA to A Conversion",
    items: [
      {
        title: "Electrical Power Calculations",
        text: "Engineers convert load current measured in milliamperes into amperes before multiplying by voltage to determine circuit power dissipation in watts (W = V × A)."
      },
      {
        title: "Multimeter Range Selection",
        text: "Technicians measuring low-power subcircuits switch between mA and A multimeter jacks, converting values to confirm circuit tolerance safety."
      },
      {
        title: "Battery Operating Time Calculations",
        text: "Calculating system runtime requires dividing total battery energy capacity by load current converted into amperes or fractions of amperes."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Milliamperes to Amperes",
    items: [
      "Multiplying by 1,000 instead of dividing: Converting from a smaller unit (mA) to a larger unit (A) requires division by 1,000.",
      "Misplacing the decimal point: Ensure that 25 mA becomes 0.025 A, not 0.25 A.",
      "Confusing milliampere-hours (mAh) with milliamperes (mA): mA measures rate of electric current flow, whereas mAh measures total charge stored."
    ]
  },
  faqs: [
    {
      question: "How many Amperes are in 1 Milliampere?",
      answer: "There are exactly 0.001 Amperes in 1 Milliampere."
    },
    {
      question: "What is the formula to convert Milliamperes to Amperes?",
      answer: "The formula is: Amperes = Milliamperes / 1,000."
    },
    {
      question: "How many Amperes is 500 mA?",
      answer: "500 Milliamperes equals 0.5 Amperes (500 / 1,000 = 0.5 A)."
    },
    {
      question: "What is 20 mA in Amperes?",
      answer: "20 Milliamperes equals 0.02 Amperes (20 / 1,000 = 0.02 A)."
    },
    {
      question: "Why must mA be converted to A for Ohm's Law?",
      answer: "Standard SI physical formulas require base units (Amperes, Volts, Ohms) to produce correct mathematical results in Watts or Joules."
    },
    {
      question: "How do I convert 1,500 mA to A?",
      answer: "Divide 1,500 by 1,000 to obtain 1.5 Amperes."
    },
    {
      question: "Is mA smaller than A?",
      answer: "Yes, 1 Milliampere is 1,000 times smaller than 1 Ampere."
    },
    {
      question: "How do I convert Amperes back to Milliamperes?",
      answer: "Multiply the current in amperes by 1,000 to get milliamperes."
    }
  ],
  relatedList: [
    { label: "Ampere to Milliampere", from: "ampere", to: "milliampere" },
    { label: "Milliampere to Microampere", from: "milliampere", to: "microampere" },
    { label: "Milliampere to Kiloampere", from: "milliampere", to: "kiloampere" },
    { label: "Milliampere to Abampere", from: "milliampere", to: "abampere" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI).",
    "IEC 60050: International Electrotechnical Vocabulary.",
    "BIPM Metric System Standards."
  ]
};
