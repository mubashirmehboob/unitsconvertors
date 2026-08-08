import { CustomArticleData } from "./types";

export const microampereToAmpere: CustomArticleData = {
  fromUnitId: "microampere",
  toUnitId: "ampere",
  seoTitle: "Microampere to Ampere Converter (µA to A)",
  metaDescription: "Convert Microamperes to Amperes (µA to A) accurately. Learn the 1,000,000 division formula, circuit leakage calculations, reference tables, and FAQs.",
  h1: "Microampere to Ampere Converter",
  introduction: [
    "The Microampere (µA) and Ampere (A) quantify the rate of electric charge movement across sub-microscopic and macro-scale electrical networks. In semiconductor research, biomedical monitoring, and ultra-low-power electronic design, tiny currents expressed in microamperes must often be converted to base amperes for physical circuit equations and power calculations.",
    "Because the SI prefix 'micro' designates one-millionth, one microampere equals exactly 0.000001 amperes (10⁻⁶ A). Converting microamperes to amperes is calculated by dividing the value in microamperes by 1,000,000.",
    "This technical guide details the conversion method, circuit debugging examples, conversion reference charts, common measurement errors, and technical FAQs."
  ],
  quickAnswer: {
    text: "To convert Microamperes to Amperes, divide the current in microamperes by 1,000,000. For instance, 1,000 µA equals 0.001 A, and 50,000 µA converts to 0.05 A.",
    formulaDisplay: "A = µA / 1,000,000",
    subtext: "1 Microampere is equal to exactly 0.000001 Amperes."
  },
  aboutSourceUnit: {
    title: "What is a Microampere (µA)?",
    text: "The Microampere (symbol: µA) is a decimal metric submultiple equal to one-millionth of an ampere (10⁻⁶ A). Microamperes are widely used to measure transistor leakage, biosensor signals, battery standby current, and photodiode response."
  },
  aboutTargetUnit: {
    title: "Understanding Amperes (A)",
    text: "The Ampere (symbol: A) is the base SI unit of electric current. It represents the flow of one coulomb of electrical charge per second (1 A = 1 C/s). Amperes measure primary power rail loads, household appliances, industrial motor drives, and power line capacity."
  },
  relationship: "The metric scale factor between microamperes and amperes spans six decimal orders of magnitude: 1 A = 1,000,000 µA, and 1 µA = 0.000001 A.",
  relationshipTitle: "Microampere to Ampere Scale Comparisons",
  relationshipItems: [
    { label: "1 µA", value: "0.000001 A (Microcontroller real-time clock backup)" },
    { label: "10 µA", value: "0.00001 A (Silicon diode reverse leakage)" },
    { label: "100 µA", value: "0.0001 A (Preamplifier bias current)" },
    { label: "1,000 µA", value: "0.001 A (1 Milliampere baseline signal)" },
    { label: "1,000,000 µA", value: "1 A (Standard base SI current unit)" }
  ],
  formula: {
    text: "Divide the electric current value in Microamperes by 1,000,000 to determine the equivalent value in Amperes.",
    math: "A = µA / 1000000",
    subtext: "To convert amperes back to microamperes, multiply the ampere value by 1,000,000."
  },
  formulaTitle: "Microampere to Ampere Formula",
  practicalTip: {
    title: "Leftward Decimal Shift",
    text: "To convert microamperes to amperes mentally, shift the decimal point six positions to the left. For example, 2,500 µA becomes 0.0025 A."
  },
  expertNote: {
    title: "Formula Compatibility in Electronics",
    text: "When calculating power dissipation (P = I² × R) or voltage drops (V = I × R), input current 'I' must be converted into amperes. Entering microamperes directly without converting will result in answers off by a factor of one million or more."
  },
  examples: {
    title: "Step-by-Step µA to A Worked Examples",
    items: [
      {
        title: "Example 1: Photodiode Conditioning Sensor",
        subtitle: "Convert a 250 Microampere photodiode output current to Amperes.",
        steps: [
          "Identify current in Microamperes: 250 µA.",
          "Apply conversion formula: A = 250 / 1,000,000.",
          "Calculate: 250 / 1,000,000 = 0.00025.",
          "Result: 250 Microamperes equals 0.00025 Amperes."
        ]
      },
      {
        title: "Example 2: RTC Battery Backup Current",
        subtitle: "Convert 15 Microamperes to Amperes.",
        steps: [
          "Identify current: 15 µA.",
          "Divide by 1,000,000: 15 / 1,000,000 = 0.000015.",
          "Result: 15 Microamperes equals 0.000015 A."
        ]
      },
      {
        title: "Example 3: Low-Power Sensor Module",
        subtitle: "Convert 5,000 Microamperes into Amperes.",
        steps: [
          "Identify current: 5,000 µA.",
          "Divide by 1,000,000: 5,000 / 1,000,000 = 0.005.",
          "Result: 5,000 Microamperes equals 0.005 A."
        ]
      }
    ]
  },
  table: {
    title: "Microampere to Ampere Conversion Reference Table",
    headers: ["Microamperes (µA)", "Amperes (A)", "Electronics Application Context"],
    rows: [
      { fromVal: "1 µA", toVal: "0.000001 A", extra: "RTC backup battery leakage" },
      { fromVal: "10 µA", toVal: "0.00001 A", extra: "Semiconductor off-state collector leakage" },
      { fromVal: "50 µA", toVal: "0.00005 A", extra: "Precision photodiode light current" },
      { fromVal: "100 µA", toVal: "0.0001 A", extra: "Low-noise JFET preamplifier bias" },
      { fromVal: "500 µA", toVal: "0.0005 A", extra: "Optocoupler phototransistor output" },
      { fromVal: "1,000 µA", toVal: "0.001 A", extra: "1 Milliampere baseline threshold" },
      { fromVal: "5,000 µA", toVal: "0.005 A", extra: "Low-power LED status indicator" },
      { fromVal: "10,000 µA", toVal: "0.01 A", extra: "Microcontroller active core state" },
      { fromVal: "100,000 µA", toVal: "0.1 A", extra: "Small DC cooling fan current draw" },
      { fromVal: "1,000,000 µA", toVal: "1.0 A", extra: "Base SI unit equivalent value" }
    ]
  },
  applications: {
    title: "Practical Applications of µA to A Conversion",
    items: [
      {
        title: "Transistor Parameter Characterization",
        text: "Engineers convert transistor base bias and collector leakage currents from microamperes to amperes when populating SPICE circuit simulation models."
      },
      {
        title: "Battery Self-Discharge Modeling",
        text: "Calculating battery shelf life requires converting microampere self-discharge rates into amperes to compute capacity loss over time in ampere-hours."
      },
      {
        title: "Biomedical Equipment Safety Testing",
        text: "Medical device safety standards restrict chassis leakage currents to microamperes. Technicians convert test currents to amperes to verify compliance."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Microamperes to Amperes",
    items: [
      "Multiplying by 1,000,000 instead of dividing: Converting from a smaller unit (µA) to a larger base unit (A) requires division by 1,000,000.",
      "Miscounting zeros in fractional numbers: Always double check decimal place alignment (0.000001 vs 0.00001).",
      "Confusing microamperes (µA) with milliamperes (mA): Remember that 1,000 µA = 1 mA."
    ]
  },
  faqs: [
    {
      question: "How many Amperes are in 1 Microampere?",
      answer: "There are exactly 0.000001 Amperes in 1 Microampere."
    },
    {
      question: "What is the formula to convert Microamperes to Amperes?",
      answer: "The formula is: Amperes = Microamperes / 1,000,000."
    },
    {
      question: "How many Amperes is 1,000 µA?",
      answer: "1,000 Microamperes equals 0.001 Amperes (1 mA)."
    },
    {
      question: "What is 50 µA in Amperes?",
      answer: "50 Microamperes equals 0.00005 Amperes."
    },
    {
      question: "Why convert µA to A for Ohm's Law?",
      answer: "Standard physical formulas require base SI units (A) to return accurate results in Volts or Watts."
    },
    {
      question: "How do I convert 100,000 µA to A?",
      answer: "Divide 100,000 by 1,000,000 to obtain 0.1 Amperes."
    },
    {
      question: "Is µA smaller than A?",
      answer: "Yes, 1 Microampere is one million times smaller than 1 Ampere."
    },
    {
      question: "How do I convert Amperes back to Microamperes?",
      answer: "Multiply the current in amperes by 1,000,000 to obtain microamperes."
    }
  ],
  relatedList: [
    { label: "Ampere to Microampere", from: "ampere", to: "microampere" },
    { label: "Microampere to Milliampere", from: "microampere", to: "milliampere" },
    { label: "Microampere to Kiloampere", from: "microampere", to: "kiloampere" },
    { label: "Microampere to Abampere", from: "microampere", to: "abampere" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI).",
    "IEEE Standard 181: Standard on Transitions and Waveforms.",
    "BIPM Metric System Standards."
  ]
};
