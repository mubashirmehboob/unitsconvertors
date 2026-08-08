import { CustomArticleData } from "./types";

export const milliampereToMicroampere: CustomArticleData = {
  fromUnitId: "milliampere",
  toUnitId: "microampere",
  seoTitle: "Milliampere to Microampere Converter (mA to µA)",
  metaDescription: "Convert Milliamperes to Microamperes (mA to µA) instantly. Learn the 1,000 multiplication formula, low-power circuit calculations, conversion tables, and FAQs.",
  h1: "Milliampere to Microampere Converter",
  introduction: [
    "The Milliampere (mA) and Microampere (µA) are decimal submultiples of the ampere, widely utilized across low-power embedded design, analog sensor signal conditioning, and semiconductor testing. When analyzing energy budgets in battery-powered IoT devices, active currents measured in milliamperes are routinely compared against microampere sleep-mode currents.",
    "Because 'milli' represents 10⁻³ and 'micro' represents 10⁻⁶, one milliampere equals exactly 1,000 microamperes. Converting milliamperes to microamperes is accomplished by multiplying the value in milliamperes by 1,000.",
    "This technical guide explains the mathematical conversion between mA and µA, sensor bias circuit examples, conversion reference charts, measurement best practices, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Milliamperes to Microamperes, multiply the current in milliamperes by 1,000. For example, 2.5 mA converts to 2,500 µA, and 0.1 mA equals 100 µA.",
    formulaDisplay: "µA = mA × 1,000",
    subtext: "1 Milliampere is equal to exactly 1,000 Microamperes."
  },
  aboutSourceUnit: {
    title: "What is a Milliampere (mA)?",
    text: "The Milliampere (symbol: mA) is an SI submultiple equal to one-thousandth of an ampere (0.001 A). It is used to express current draw in consumer electronics, status LEDs, operational amplifiers, and low-voltage relay circuits."
  },
  aboutTargetUnit: {
    title: "Understanding Microamperes (µA)",
    text: "The Microampere (symbol: µA) is a smaller metric submultiple equal to one-millionth of an ampere (0.000001 A or 10⁻⁶ A). Microamperes measure transistor leakage, photodiode sensor output, biomedical signals, and microcontroller sleep mode currents."
  },
  relationship: "The metric scaling ratio between milliamperes and microamperes is fixed: 1 mA = 1,000 µA, and 1 µA = 0.001 mA.",
  relationshipTitle: "Milliampere vs Microampere Scale Ratios",
  relationshipItems: [
    { label: "0.001 mA", value: "1 µA (Real-time clock backup current)" },
    { label: "0.01 mA", value: "10 µA (Semiconductor off-state leakage)" },
    { label: "0.1 mA", value: "100 µA (Low-noise sensor preamplifier bias)" },
    { label: "1.0 mA", value: "1,000 µA (Precision LED backlight current)" },
    { label: "10.0 mA", value: "10,000 µA (Active wireless microcontroller TX current)" }
  ],
  formula: {
    text: "Multiply the electric current value in Milliamperes by 1,000 to determine the equivalent current in Microamperes.",
    math: "µA = mA × 1000",
    subtext: "To convert microamperes back to milliamperes, divide the microampere value by 1,000."
  },
  formulaTitle: "Milliampere to Microampere Formula",
  practicalTip: {
    title: "Rightward Decimal Movement",
    text: "To convert milliamperes to microamperes mentally, shift the decimal point three places to the right. For instance, 0.075 mA becomes 75 µA."
  },
  expertNote: {
    title: "IoT Battery Budget Modeling",
    text: "In battery-powered sensor nodes, a microcontroller might draw 15 mA during active radio transmission and only 5 µA in sleep mode. Expressing all state currents in microamperes (15,000 µA active vs 5 µA sleep) simplifies weighted-average energy calculations."
  },
  examples: {
    title: "Step-by-Step mA to µA Worked Examples",
    items: [
      {
        title: "Example 1: Sensor Signal Preamplifier Current",
        subtitle: "Convert a 0.25 Milliampere bias current into Microamperes.",
        steps: [
          "Identify current in Milliamperes: 0.25 mA.",
          "Apply conversion formula: µA = 0.25 × 1,000.",
          "Calculate: 0.25 × 1,000 = 250.",
          "Result: 0.25 Milliamperes equals 250 Microamperes."
        ]
      },
      {
        title: "Example 2: Photodiode Conditioning Stage",
        subtitle: "Convert 0.04 Milliamperes to Microamperes.",
        steps: [
          "Identify current: 0.04 mA.",
          "Multiply by 1,000: 0.04 × 1,000 = 40.",
          "Result: 0.04 Milliamperes equals 40 µA."
        ]
      },
      {
        title: "Example 3: Active Bluetooth Beacon Current",
        subtitle: "Convert 8.5 Milliamperes into Microamperes.",
        steps: [
          "Identify current: 8.5 mA.",
          "Multiply by 1,000: 8.5 × 1,000 = 8,500.",
          "Result: 8.5 Milliamperes equals 8,500 µA."
        ]
      }
    ]
  },
  table: {
    title: "Milliampere to Microampere Conversion Reference Table",
    headers: ["Milliamperes (mA)", "Microamperes (µA)", "Application Context"],
    rows: [
      { fromVal: "0.001 mA", toVal: "1 µA", extra: "RTC backup battery current" },
      { fromVal: "0.01 mA", toVal: "10 µA", extra: "Integrated circuit sleep state" },
      { fromVal: "0.05 mA", toVal: "50 µA", extra: "Precision voltage reference bias" },
      { fromVal: "0.1 mA", toVal: "100 µA", extra: "Low-power operational amplifier quiescent current" },
      { fromVal: "0.5 mA", toVal: "500 µA", extra: "Phototransistor light response signal" },
      { fromVal: "1.0 mA", toVal: "1,000 µA", extra: "1 Milliampere baseline threshold" },
      { fromVal: "5.0 mA", toVal: "5,000 µA", extra: "Status indicator LED circuit" },
      { fromVal: "10.0 mA", toVal: "10,000 µA", extra: "Optocoupler input drive channel" },
      { fromVal: "20.0 mA", toVal: "20,000 µA", extra: "Industrial 4-20 mA loop full-scale current" },
      { fromVal: "50.0 mA", toVal: "50,000 µA", extra: "Small DC relay coil energizing current" }
    ]
  },
  applications: {
    title: "Practical Applications of mA to µA Conversion",
    items: [
      {
        title: "Microcontroller Sleep Mode Analysis",
        text: "Engineers convert active supply currents measured in milliamperes to microamperes to compare sleep-state efficiency across various microcontroller families."
      },
      {
        title: "Biomedical Telemetry Design",
        text: "Biosensor interface circuits convert sensor current levels from milliamperes down to microamperes to enforce patient safety isolation limits."
      },
      {
        title: "Analog Sensor Signal Scaling",
        text: "Precision instrumentation amplifiers condition input sensor signals in microamperes into milliampere output ranges for analog-to-digital converter processing."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Milliamperes to Microamperes",
    items: [
      "Dividing by 1,000 instead of multiplying: Moving from milliamperes (mA) to microamperes (µA) requires multiplying by 1,000 because microamperes are smaller.",
      "Confusing prefix symbols: 'm' represents milli (10⁻³), whereas 'µ' represents micro (10⁻⁶).",
      "Overlooking test instrument shunt loading: Measuring microamperes using multimeter milliampere ranges can introduce significant burden voltage drops."
    ]
  },
  faqs: [
    {
      question: "How many Microamperes are in 1 Milliampere?",
      answer: "There are exactly 1,000 Microamperes in 1 Milliampere."
    },
    {
      question: "What is the formula to convert Milliamperes to Microamperes?",
      answer: "The formula is: Microamperes = Milliamperes × 1,000."
    },
    {
      question: "How many Microamperes is 0.5 mA?",
      answer: "0.5 Milliamperes equals 500 Microamperes (0.5 × 1,000 = 500 µA)."
    },
    {
      question: "What is 4 mA in Microamperes?",
      answer: "4 Milliamperes equals 4,000 Microamperes."
    },
    {
      question: "Why convert mA to µA in battery design?",
      answer: "Expressing battery standby current in microamperes makes low-power sleep calculations clearer and avoids trailing decimal zeros."
    },
    {
      question: "How do I convert 0.02 mA to µA?",
      answer: "Multiply 0.02 by 1,000 to obtain 20 Microamperes."
    },
    {
      question: "Which unit is smaller, mA or µA?",
      answer: "Microamperes (µA) are 1,000 times smaller than milliamperes (mA)."
    },
    {
      question: "How do I convert Microamperes back to Milliamperes?",
      answer: "Divide the value in microamperes by 1,000 to convert back to milliamperes."
    }
  ],
  relatedList: [
    { label: "Microampere to Milliampere", from: "microampere", to: "milliampere" },
    { label: "Milliampere to Ampere", from: "milliampere", to: "ampere" },
    { label: "Milliampere to Kiloampere", from: "milliampere", to: "kiloampere" },
    { label: "Milliampere to Abampere", from: "milliampere", to: "abampere" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI).",
    "IEEE Standard 181: Standard on Transitions, Pulses, and Related Waveforms.",
    "BIPM Metric System Documentation."
  ]
};
