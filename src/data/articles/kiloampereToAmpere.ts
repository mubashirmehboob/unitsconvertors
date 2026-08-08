import { CustomArticleData } from "./types";

export const kiloampereToAmpere: CustomArticleData = {
  fromUnitId: "kiloampere",
  toUnitId: "ampere",
  seoTitle: "Kiloampere to Ampere Converter (kA to A)",
  metaDescription: "Convert Kiloamperes to Amperes (kA to A) instantly. Learn the 1,000 multiplication formula, fault current calculations, reference tables, and FAQs.",
  h1: "Kiloampere to Ampere Converter",
  introduction: [
    "The Kiloampere (kA) and Ampere (A) measure electric current across high-voltage electrical utilities and standard circuit loads. Power system engineers, electrician technicians, and surge protection specialists frequently convert high-level currents specified in kiloamperes into base amperes to perform load calculations, evaluate cable ampacity, and configure circuit breakers.",
    "Because the metric prefix 'kilo' designates one thousand units, one kiloampere equals exactly 1,000 amperes. Converting kiloamperes to amperes is calculated by multiplying the current value in kiloamperes by 1,000.",
    "This technical guide explains the conversion ratio between kA and A, substation short-circuit evaluation steps, interrupting capacity charts, safety standards, and technical FAQs."
  ],
  quickAnswer: {
    text: "To convert Kiloamperes to Amperes, multiply the current in kiloamperes by 1,000. For example, 5 kA equals 5,000 A, and 22 kA converts to 22,000 A.",
    formulaDisplay: "A = kA × 1,000",
    subtext: "1 Kiloampere is equal to exactly 1,000 Amperes."
  },
  aboutSourceUnit: {
    title: "What is a Kiloampere (kA)?",
    text: "The Kiloampere (symbol: kA) is a metric multiple equal to 1,000 amperes (10³ A). Kiloamperes are used in electrical utility engineering, switchgear short-circuit ratings, lightning protection testing, and industrial aluminum smelting."
  },
  aboutTargetUnit: {
    title: "Understanding Amperes (A)",
    text: "The Ampere (symbol: A) is the base SI unit of electric current, defined by the rate of elementary electron charge movement per second (1 A = 1 C/s). Amperes quantify standard electrical circuit currents, motor loads, and household power feeds."
  },
  relationship: "The metric relationship between kiloamperes and amperes is 1 kA = 1,000 A, and 1 A = 0.001 kA.",
  relationshipTitle: "Kiloampere to Ampere Scale Comparisons",
  relationshipItems: [
    { label: "0.1 kA", value: "100 A (Standard residential service entrance)" },
    { label: "1 kA", value: "1,000 A (Commercial building main switchboard bus)" },
    { label: "10 kA", value: "10,000 A (Residential circuit breaker AIC capacity limit)" },
    { label: "30 kA", value: "30,000 A (Average atmospheric lightning stroke)" },
    { label: "100 kA", value: "100,000 A (Industrial arc furnace steelmaking current)" }
  ],
  formula: {
    text: "Multiply the electric current value in Kiloamperes by 1,000 to determine the equivalent current in Amperes.",
    math: "A = kA × 1000",
    subtext: "To convert amperes back to kiloamperes, divide the ampere value by 1,000."
  },
  formulaTitle: "Kiloampere to Ampere Formula",
  practicalTip: {
    title: "Rightward Decimal Shift",
    text: "To convert kiloamperes to amperes mentally, shift the decimal point three places to the right. For example, 2.5 kA becomes 2,500 A."
  },
  expertNote: {
    title: "Circuit Breaker Interrupting Ratings (AIC)",
    text: "Commercial circuit breakers list interrupting ratings in kiloamperes (e.g., 10 kA, 65 kA). Converting these values to amperes (10,000 A, 65,000 A) allows engineers to compare breaking capacity against calculated prospective short-circuit currents."
  },
  examples: {
    title: "Step-by-Step kA to A Worked Examples",
    items: [
      {
        title: "Example 1: Transformer Secondary Current",
        subtitle: "Convert a 4.5 Kiloampere substation transformer output to Amperes.",
        steps: [
          "Identify current in Kiloamperes: 4.5 kA.",
          "Apply conversion formula: A = 4.5 × 1,000.",
          "Calculate: 4.5 × 1,000 = 4,500.",
          "Result: 4.5 Kiloamperes equals 4,500 Amperes."
        ]
      },
      {
        title: "Example 2: Commercial Switchgear Fault Rating",
        subtitle: "Convert 22 Kiloamperes into Amperes.",
        steps: [
          "Identify current: 22 kA.",
          "Multiply by 1,000: 22 × 1,000 = 22,000.",
          "Result: 22 Kiloamperes equals 22,000 A."
        ]
      },
      {
        title: "Example 3: Lightning Protection Surge Pulse",
        subtitle: "Convert a 50 Kiloampere surge pulse into Amperes.",
        steps: [
          "Identify current: 50 kA.",
          "Multiply by 1,000: 50 × 1,000 = 50,000.",
          "Result: 50 Kiloamperes equals 50,000 A."
        ]
      }
    ]
  },
  table: {
    title: "Kiloampere to Ampere Conversion Reference Table",
    headers: ["Kiloamperes (kA)", "Amperes (A)", "Electrical Power Context"],
    rows: [
      { fromVal: "0.1 kA", toVal: "100 A", extra: "Residential electrical main breaker feed" },
      { fromVal: "0.5 kA", toVal: "500 A", extra: "Heavy industrial motor drive supply line" },
      { fromVal: "1.0 kA", toVal: "1,000 A", extra: "Commercial building main distribution busbar" },
      { fromVal: "2.5 kA", toVal: "2,500 A", extra: "Data center UPS main feeder channel" },
      { fromVal: "5.0 kA", toVal: "5,000 A", extra: "Substation low-voltage distribution bus" },
      { fromVal: "10.0 kA", toVal: "10,000 A", extra: "Standard residential circuit breaker AIC rating" },
      { fromVal: "22.0 kA", toVal: "22,000 A", extra: "Commercial building panelboard fault withstand rating" },
      { fromVal: "50.0 kA", toVal: "50,000 A", extra: "High-voltage transmission substation fault level" },
      { fromVal: "100.0 kA", toVal: "100,000 A", extra: "Electric arc furnace smelting current" },
      { fromVal: "200.0 kA", toVal: "200,000 A", extra: "Severe atmospheric lightning discharge peak" }
    ]
  },
  applications: {
    title: "Practical Applications of kA to A Conversion",
    items: [
      {
        title: "Power Substation Protection Engineering",
        text: "Protection engineers convert calculated short-circuit levels from kiloamperes into amperes when setting trip thresholds for overcurrent relays."
      },
      {
        title: "Arc-Flash Safety Calculations",
        text: "NFPA 70E arc-flash software converts system fault currents in kA to base amperes to compute incident energy values in calories per square centimeter."
      },
      {
        title: "Industrial Cable Sizing",
        text: "Electrical designers convert switchgear fault ratings in kA to amperes to check cable short-circuit withstand time limits per ICEA standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Kiloamperes to Amperes",
    items: [
      "Dividing by 1,000 instead of multiplying: Converting from a larger unit (kA) to a smaller base unit (A) requires multiplying by 1,000.",
      "Confusing kiloamperes (kA) with kilovolts (kV): Kiloamperes measure electric current, whereas kilovolts measure electrical potential difference.",
      "Ignoring AC current waveform definitions: Always confirm whether a kA value represents RMS symmetrical current or peak asymmetrical current."
    ]
  },
  faqs: [
    {
      question: "How many Amperes are in 1 Kiloampere?",
      answer: "There are exactly 1,000 Amperes in 1 Kiloampere."
    },
    {
      question: "What is the formula to convert Kiloamperes to Amperes?",
      answer: "The formula is: Amperes = Kiloamperes × 1,000."
    },
    {
      question: "How many Amperes is 10 kA?",
      answer: "10 Kiloamperes equals 10,000 Amperes (10 × 1,000 = 10,000 A)."
    },
    {
      question: "What is 0.5 kA in Amperes?",
      answer: "0.5 Kiloamperes equals 500 Amperes."
    },
    {
      question: "What does AIC mean on a circuit breaker?",
      answer: "AIC stands for Ampere Interrupting Capacity, expressed in kA, which indicates the maximum short-circuit current the breaker can safely interrupt."
    },
    {
      question: "How do I convert 2.5 kA to A?",
      answer: "Multiply 2.5 by 1,000 to get 2,500 Amperes."
    },
    {
      question: "Is kA a standard SI unit?",
      answer: "Yes, the kiloampere is a standard metric unit combining the prefix 'kilo-' with 'ampere'."
    },
    {
      question: "How do I convert Amperes back to Kiloamperes?",
      answer: "Divide the current in amperes by 1,000 to obtain kiloamperes."
    }
  ],
  relatedList: [
    { label: "Ampere to Kiloampere", from: "ampere", to: "kiloampere" },
    { label: "Kiloampere to Milliampere", from: "kiloampere", to: "milliampere" },
    { label: "Kiloampere to Microampere", from: "kiloampere", to: "microampere" },
    { label: "Kiloampere to Abampere", from: "kiloampere", to: "abampere" }
  ],
  references: [
    "IEEE Std 1584: IEEE Guide for Performing Arc-Flash Hazard Calculations.",
    "NFPA 70E: Standard for Electrical Safety in the Workplace.",
    "NIST Special Publication 330: The International System of Units (SI)."
  ]
};
