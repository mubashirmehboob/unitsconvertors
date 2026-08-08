import { CustomArticleData } from "./types";

export const ampereToMicroampere: CustomArticleData = {
  fromUnitId: "ampere",
  toUnitId: "microampere",
  seoTitle: "Ampere to Microampere Converter (A to µA)",
  metaDescription: "Convert Amperes to Microamperes (A to µA) accurately. Learn the 1,000,000 conversion ratio, semiconductor leakage analysis, conversion tables, and FAQs.",
  h1: "Ampere to Microampere Converter",
  introduction: [
    "The Ampere (A) and Microampere (µA) quantify the magnitude of electric current across macro-scale electrical systems and microscopic electronic components. In semiconductor physics, ultra-low-power IoT design, and biomedical telemetry, current measurements span several orders of magnitude.",
    "Because the SI prefix 'micro' denotes one-millionth of a base unit, one ampere contains exactly 1,000,000 microamperes. Converting amperes to microamperes requires multiplying the current in amperes by 1,000,000.",
    "This technical guide explains the conversion between A and µA, sensor bias calculations, precision current measurement techniques, conversion tables, and technical FAQs."
  ],
  quickAnswer: {
    text: "To convert Amperes to Microamperes, multiply the current in amperes by 1,000,000. For instance, 0.001 A converts to 1,000 µA, and 0.05 A equals 50,000 µA.",
    formulaDisplay: "µA = A × 1,000,000",
    subtext: "1 Ampere is equal to exactly 1,000,000 Microamperes."
  },
  aboutSourceUnit: {
    title: "What is an Ampere (A)?",
    text: "The Ampere (symbol: A) is the base SI unit of electric current, measuring the rate of electron flow through a conductor. One ampere represents one coulomb of electrical charge passing a given point per second (1 A = 1 C/s)."
  },
  aboutTargetUnit: {
    title: "Understanding Microamperes (µA)",
    text: "The Microampere (symbol: µA) is a decimal submultiple equal to one-millionth of an ampere (0.000001 A or 10⁻⁶ A). Microamperes are used to measure transistor reverse-leakage currents, CMOS sleep currents, photodiode light response currents, and bio-potential signals."
  },
  relationship: "The metric relationship between amperes and microamperes is governed by the 10⁶ factor: 1 A = 1,000,000 µA, and 1 µA = 0.000001 A.",
  relationshipTitle: "Ampere to Microampere Scale Ratios",
  relationshipItems: [
    { label: "0.000001 A", value: "1 µA (Deep sleep microcontroller current)" },
    { label: "0.00005 A", value: "50 µA (Precision photodiode output current)" },
    { label: "0.001 A", value: "1,000 µA (1 mA indicator LED low-power baseline)" },
    { label: "0.01 A", value: "10,000 µA (Biomedical sensor amplifier bias)" },
    { label: "0.1 A", value: "100,000 µA (Small relay coil energizing current)" }
  ],
  formula: {
    text: "Multiply the electric current value in Amperes by 1,000,000 to determine the equivalent current in Microamperes.",
    math: "µA = A × 1000000",
    subtext: "To convert microamperes back to amperes, divide the microampere value by 1,000,000."
  },
  formulaTitle: "Ampere to Microampere Formula",
  practicalTip: {
    title: "Decimal Displacement Rule",
    text: "To convert amperes to microamperes mentally, shift the decimal point six places to the right. For example, 0.00025 A becomes 250 µA."
  },
  expertNote: {
    title: "CMOS Leakage Measurement",
    text: "Modern integrated circuits operate with microampere standby currents. When evaluating battery standby performance, expressing supply currents in µA avoids unwieldy scientific notation like 2.5 × 10⁻⁵ A."
  },
  examples: {
    title: "Step-by-Step A to µA Worked Examples",
    items: [
      {
        title: "Example 1: Photodiode Light Response",
        subtitle: "Convert a 0.00008 Ampere sensor output into Microamperes.",
        steps: [
          "Identify current in Amperes: 0.00008 A.",
          "Apply conversion formula: µA = 0.00008 × 1,000,000.",
          "Calculate: 0.00008 × 1,000,000 = 80.",
          "Result: 0.00008 Amperes equals 80 Microamperes."
        ]
      },
      {
        title: "Example 2: Microcontroller Sleep Mode Current",
        subtitle: "Convert 0.000005 Amperes to Microamperes.",
        steps: [
          "Identify current: 0.000005 A.",
          "Multiply by 1,000,000: 0.000005 × 1,000,000 = 5.",
          "Result: 0.000005 Amperes equals 5 µA."
        ]
      },
      {
        title: "Example 3: Analog Operational Amplifier Bias",
        subtitle: "Convert 0.002 Amperes into Microamperes.",
        steps: [
          "Identify current: 0.002 A.",
          "Multiply by 1,000,000: 0.002 × 1,000,000 = 2,000.",
          "Result: 0.002 Amperes equals 2,000 µA."
        ]
      }
    ]
  },
  table: {
    title: "Ampere to Microampere Conversion Reference Table",
    headers: ["Amperes (A)", "Microamperes (µA)", "Electronics Application Context"],
    rows: [
      { fromVal: "0.000001 A", toVal: "1 µA", extra: "RTC real-time clock battery backup draw" },
      { fromVal: "0.00001 A", toVal: "10 µA", extra: "Silicon transistor reverse collector leakage" },
      { fromVal: "0.0001 A", toVal: "100 µA", extra: "Low-noise JFET input stage bias current" },
      { fromVal: "0.001 A", toVal: "1,000 µA", extra: "1 mA precision current loop baseline" },
      { fromVal: "0.005 A", toVal: "5,000 µA", extra: "Optocoupler phototransistor output signal" },
      { fromVal: "0.01 A", toVal: "10,000 µA", extra: "Low-power microcontroller active current" },
      { fromVal: "0.05 A", toVal: "50,000 µA", extra: "Sub-1GHz RF transceiver transmit current" },
      { fromVal: "0.1 A", toVal: "100,000 µA", extra: "Small electromechanical relay coil current" },
      { fromVal: "0.5 A", toVal: "500,000 µA", extra: "USB 2.0 port maximum continuous load" },
      { fromVal: "1.0 A", toVal: "1,000,000 µA", extra: "Base SI unit equivalent value" }
    ]
  },
  applications: {
    title: "Practical Applications of A to µA Conversion",
    items: [
      {
        title: "Semiconductor Device Characterization",
        text: "Engineers convert wafer probe current measurements from amperes to microamperes when evaluating gate oxide leakage and off-state transistor currents."
      },
      {
        title: "Optical Communications Telemetry",
        text: "Photodetector responsivity testing requires converting small photocurrents measured in amperes to microamperes for amplifier gain calibration."
      },
      {
        title: "Ultra-Low-Power Embedded Design",
        text: "Firmware designers convert battery budget current models from amperes to microamperes to estimate device shelf life under deep-sleep operating modes."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Amperes to Microamperes",
    items: [
      "Confusing microamperes (µA) with milliamperes (mA): Remember that 1 mA = 1,000 µA, so microamperes are 1,000 times smaller than milliamperes.",
      "Misreading scientific notation: 1 × 10⁻⁶ A equals 1 µA, whereas 1 × 10⁻³ A equals 1,000 µA.",
      "Neglecting measurement noise: Measuring microampere currents requires shielded cables to prevent ambient electrostatic interference."
    ]
  },
  faqs: [
    {
      question: "How many Microamperes are in 1 Ampere?",
      answer: "There are exactly 1,000,000 Microamperes in 1 Ampere."
    },
    {
      question: "What is the formula to convert Amperes to Microamperes?",
      answer: "The formula is: Microamperes = Amperes × 1,000,000."
    },
    {
      question: "How many Microamperes is 0.001 A?",
      answer: "0.001 Amperes equals 1,000 Microamperes (0.001 × 1,000,000 = 1,000 µA)."
    },
    {
      question: "What is 0.00005 A in Microamperes?",
      answer: "0.00005 Amperes equals 50 Microamperes."
    },
    {
      question: "Why are photodiode currents expressed in µA?",
      answer: "Photodiodes generate very small currents proportional to incident light power, making microamperes a practical unit of measurement."
    },
    {
      question: "How do I convert Microamperes back to Amperes?",
      answer: "Divide the current in microamperes by 1,000,000 to obtain amperes."
    },
    {
      question: "Is µA an official SI unit symbol?",
      answer: "Yes, µA combines the SI prefix 'micro-' (10⁻⁶) with the symbol 'A' for ampere."
    },
    {
      question: "What is 0.1 A in µA?",
      answer: "0.1 Amperes equals 100,000 Microamperes."
    }
  ],
  relatedList: [
    { label: "Microampere to Ampere", from: "microampere", to: "ampere" },
    { label: "Ampere to Milliampere", from: "ampere", to: "milliampere" },
    { label: "Ampere to Kiloampere", from: "ampere", to: "kiloampere" },
    { label: "Ampere to Abampere", from: "ampere", to: "abampere" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI).",
    "IEEE Standard 181: IEEE Standard on Transitions, Pulses, and Related Waveforms.",
    "BIPM Metric System Documentation."
  ]
};
