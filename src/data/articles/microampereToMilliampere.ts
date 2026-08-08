import { CustomArticleData } from "./types";

export const microampereToMilliampere: CustomArticleData = {
  fromUnitId: "microampere",
  toUnitId: "milliampere",
  seoTitle: "Microampere to Milliampere Converter (µA to mA)",
  metaDescription: "Convert Microamperes to Milliamperes (µA to mA) instantly. Learn the 1,000 division conversion formula, low-power electronic calculations, tables, and FAQs.",
  h1: "Microampere to Milliampere Converter",
  introduction: [
    "The microampere (µA) and milliampere (mA) are SI-derived decimal submultiples of the ampere used to measure electrical current. Converting microamperes to milliamperes is a routine step when evaluating low-power circuit designs, analyzing sensor outputs, and configuring laboratory multimeters.",
    "Because 'milli' represents 10⁻³ and 'micro' represents 10⁻⁶, one microampere is equal to exactly 0.001 milliamperes. Converting microamperes to milliamperes is calculated by dividing the value in microamperes by 1,000.",
    "This technical guide details the conversion formula, step-by-step worked examples, reference tables, common measurement errors, and technical FAQs."
  ],
  quickAnswer: {
    text: "To convert Microamperes to Milliamperes, divide the current in microamperes by 1,000. For example, 500 µA equals 0.5 mA, and 2,500 µA converts to 2.5 mA.",
    formulaDisplay: "mA = µA / 1,000",
    subtext: "1 Microampere is equal to exactly 0.001 Milliamperes."
  },
  aboutSourceUnit: {
    title: "What is a Microampere (µA)?",
    text: "The Microampere (symbol: µA) is a metric submultiple equal to one-millionth of an ampere (0.000001 A or 10⁻⁶ A). It is used to quantify small leakage currents, sensor signals, real-time clock backup currents, and photodiode outputs."
  },
  aboutTargetUnit: {
    title: "Understanding Milliamperes (mA)",
    text: "The Milliampere (symbol: mA) is a metric submultiple equal to one-thousandth of an ampere (0.001 A or 10⁻³ A). Milliamperes measure current draw in operational amplifiers, status LEDs, microcontrollers, and 4–20 mA industrial current loops."
  },
  relationship: "The metric scaling ratio between microamperes and milliamperes is fixed: 1 mA = 1,000 µA, and 1 µA = 0.001 mA.",
  relationshipTitle: "Microampere vs Milliampere Scale Ratios",
  relationshipItems: [
    { label: "1 µA", value: "0.001 mA (RTC backup current draw)" },
    { label: "10 µA", value: "0.01 mA (Semiconductor leakage level)" },
    { label: "100 µA", value: "0.1 mA (Low-power sensor preamplifier current)" },
    { label: "1,000 µA", value: "1.0 mA (1 Milliampere baseline threshold)" },
    { label: "10,000 µA", value: "10.0 mA (Active LED indicator operating current)" }
  ],
  formula: {
    text: "Divide the electric current value in Microamperes by 1,000 to determine the equivalent current in Milliamperes.",
    math: "mA = µA / 1000",
    subtext: "To convert milliamperes back to microamperes, multiply the milliampere value by 1,000."
  },
  formulaTitle: "Microampere to Milliampere Formula",
  practicalTip: {
    title: "Leftward Decimal Move",
    text: "To convert microamperes to milliamperes mentally, shift the decimal point three places to the left. For instance, 350 µA becomes 0.35 mA."
  },
  expertNote: {
    title: "Multimeter Scale Selection",
    text: "Digital multimeters frequently have separate mA and µA measurement jacks or range settings. When switching ranges during current profiling, dividing µA readings by 1,000 provides immediate conversion to the mA range."
  },
  examples: {
    title: "Step-by-Step µA to mA Worked Examples",
    items: [
      {
        title: "Example 1: Sensor Signal Preamplifier Output",
        subtitle: "Convert a 450 Microampere sensor current to Milliamperes.",
        steps: [
          "Identify current in Microamperes: 450 µA.",
          "Apply conversion formula: mA = 450 / 1,000.",
          "Calculate: 450 / 1,000 = 0.45.",
          "Result: 450 Microamperes equals 0.45 Milliamperes."
        ]
      },
      {
        title: "Example 2: Photodiode Conditioning Output",
        subtitle: "Convert 80 Microamperes to Milliamperes.",
        steps: [
          "Identify current: 80 µA.",
          "Divide by 1,000: 80 / 1,000 = 0.08.",
          "Result: 80 Microamperes equals 0.08 mA."
        ]
      },
      {
        title: "Example 3: Microcontroller Active Burst Current",
        subtitle: "Convert 12,500 Microamperes into Milliamperes.",
        steps: [
          "Identify current: 12,500 µA.",
          "Divide by 1,000: 12,500 / 1,000 = 12.5.",
          "Result: 12,500 Microamperes equals 12.5 mA."
        ]
      }
    ]
  },
  table: {
    title: "Microampere to Milliampere Conversion Reference Table",
    headers: ["Microamperes (µA)", "Milliamperes (mA)", "Equivalent Base Amperes (A)"],
    rows: [
      { fromVal: "1 µA", toVal: "0.001 mA", extra: "0.000001 A" },
      { fromVal: "10 µA", toVal: "0.01 mA", extra: "0.00001 A" },
      { fromVal: "50 µA", toVal: "0.05 mA", extra: "0.00005 A" },
      { fromVal: "100 µA", toVal: "0.1 mA", extra: "0.0001 A" },
      { fromVal: "250 µA", toVal: "0.25 mA", extra: "0.00025 A" },
      { fromVal: "500 µA", toVal: "0.5 mA", extra: "0.0005 A" },
      { fromVal: "1,000 µA", toVal: "1.0 mA", extra: "0.001 A" },
      { fromVal: "5,000 µA", toVal: "5.0 mA", extra: "0.005 A" },
      { fromVal: "10,000 µA", toVal: "10.0 mA", extra: "0.01 A" },
      { fromVal: "20,000 µA", toVal: "20.0 mA", extra: "0.02 A" }
    ]
  },
  applications: {
    title: "Practical Applications of µA to mA Conversion",
    items: [
      {
        title: "Embedded System Current Monitoring",
        text: "Designers convert sleep-mode current logs recorded in microamperes into milliamperes to evaluate power consumption across active and idle system states."
      },
      {
        title: "Industrial Sensor Calibration",
        text: "Calibration technicians convert low-level sensor leakage currents in microamperes into milliamperes when verifying 4–20 mA transmitter zero-point offsets."
      },
      {
        title: "Low-Power Electronics Testing",
        text: "Microampere measurements are commonly used when evaluating low-current electronic circuits, sensors, and other low-power devices."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Microamperes to Milliamperes",
    items: [
      "Multiplying by 1,000 instead of dividing: Converting from a smaller unit (µA) to a larger unit (mA) requires division by 1,000.",
      "Misplacing decimal points: Ensure 25 µA becomes 0.025 mA, not 0.25 mA.",
      "Confusing microamperes (µA) with microvolts (µV): µA measures electric current, whereas µV measures electric potential difference."
    ]
  },
  faqs: [
    {
      question: "How many Milliamperes are in 1 Microampere?",
      answer: "There are exactly 0.001 Milliamperes in 1 Microampere."
    },
    {
      question: "What is the formula to convert Microamperes to Milliamperes?",
      answer: "The formula is: Milliamperes = Microamperes / 1,000."
    },
    {
      question: "How many Milliamperes is 1,000 µA?",
      answer: "1,000 Microamperes equals 1 Milliampere (1,000 / 1,000 = 1 mA)."
    },
    {
      question: "What is 500 µA in mA?",
      answer: "500 Microamperes equals 0.5 Milliamperes."
    },
    {
      question: "Which unit is larger, mA or µA?",
      answer: "The Milliampere (mA) is 1,000 times larger than the Microampere (µA)."
    },
    {
      question: "How do I convert 250 µA to mA?",
      answer: "Divide 250 by 1,000 to get 0.25 Milliamperes."
    },
    {
      question: "Are both µA and mA official SI units?",
      answer: "Yes, both are standard metric submultiples of the base unit ampere."
    },
    {
      question: "How do I convert Milliamperes back to Microamperes?",
      answer: "Multiply the current in milliamperes by 1,000 to convert to microamperes."
    }
  ],
  relatedList: [
    { label: "Milliampere to Microampere", from: "milliampere", to: "microampere" },
    { label: "Microampere to Ampere", from: "microampere", to: "ampere" },
    { label: "Microampere to Kiloampere", from: "microampere", to: "kiloampere" },
    { label: "Microampere to Abampere", from: "microampere", to: "abampere" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "BIPM SI Brochure: International Bureau of Weights and Measures."
  ]
};
