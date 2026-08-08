import { CustomArticleData } from "./types";

export const ampereToKiloampere: CustomArticleData = {
  fromUnitId: "ampere",
  toUnitId: "kiloampere",
  seoTitle: "Ampere to Kiloampere Converter (A to kA)",
  metaDescription: "Convert Amperes to Kiloamperes (A to kA) instantly. Learn the 1,000 division conversion formula, reference tables, worked examples, and FAQs.",
  h1: "Ampere to Kiloampere Converter",
  introduction: [
    "The Ampere (A) and Kiloampere (kA) are standard SI units representing electric current at different orders of magnitude.",
    "Because the SI prefix 'kilo' represents one thousand units, one kiloampere equals exactly 1,000 amperes. Converting amperes to kiloamperes is calculated by dividing the current in amperes by 1,000.",
    "This conversion guide explains the mathematical relationship between amperes and kiloamperes, step-by-step calculation examples, reference conversion tables, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Amperes to Kiloamperes, divide the current in amperes by 1,000. For example, 5,000 A equals 5 kA, and 12,000 A converts to 12 kA.",
    formulaDisplay: "kA = A / 1,000",
    subtext: "1 Kiloampere is equal to exactly 1,000 Amperes."
  },
  aboutSourceUnit: {
    title: "What is an Ampere (A)?",
    text: "The Ampere (symbol: A) is the fundamental SI base unit of electric current. It measures the rate of charge flow equal to one coulomb per second (1 A = 1 C/s)."
  },
  aboutTargetUnit: {
    title: "Understanding Kiloamperes (kA)",
    text: "The Kiloampere (symbol: kA) is a metric multiple equal to 1,000 amperes (10³ A). Kiloamperes are commonly used in power systems, heavy machinery, and electrical engineering to express large current magnitudes concisely."
  },
  relationship: "The metric scaling ratio between amperes and kiloamperes is fixed: 1 kA = 1,000 A, and 1 A = 0.001 kA.",
  relationshipTitle: "Ampere to Kiloampere Scale Comparisons",
  relationshipItems: [
    { label: "100 A", value: "0.1 kA" },
    { label: "1,000 A", value: "1.0 kA" },
    { label: "10,000 A", value: "10.0 kA" },
    { label: "30,000 A", value: "30.0 kA" },
    { label: "100,000 A", value: "100.0 kA" }
  ],
  formula: {
    text: "Divide the current value in Amperes by 1,000 to determine the equivalent current in Kiloamperes.",
    math: "kA = A / 1000",
    subtext: "To convert kiloamperes back to amperes, multiply the kiloampere value by 1,000."
  },
  formulaTitle: "Ampere to Kiloampere Formula",
  practicalTip: {
    title: "Leftward Decimal Shift",
    text: "To convert amperes to kiloamperes mentally, move the decimal point three places to the left. For instance, 2,500 A becomes 2.5 kA."
  },
  expertNote: {
    title: "Circuit Breaker Interrupting Rating (AIC)",
    text: "Circuit breaker interrupting ratings specify the maximum short-circuit fault-current level that a circuit breaker is designed and tested to interrupt safely under specified conditions."
  },
  examples: {
    title: "Step-by-Step A to kA Worked Examples",
    items: [
      {
        title: "Example 1: Converting 25,000 Amperes",
        subtitle: "Convert a 25,000 Ampere current value to Kiloamperes.",
        steps: [
          "Identify current in Amperes: 25,000 A.",
          "Apply conversion formula: kA = 25,000 / 1,000.",
          "Calculate: 25,000 / 1,000 = 25.",
          "Result: 25,000 Amperes equals 25 Kiloamperes."
        ]
      },
      {
        title: "Example 2: Converting 4,800 Amperes",
        subtitle: "Convert 4,800 Amperes into Kiloamperes.",
        steps: [
          "Identify current: 4,800 A.",
          "Divide by 1,000: 4,800 / 1,000 = 4.8.",
          "Result: 4,800 Amperes equals 4.8 kA."
        ]
      },
      {
        title: "Example 3: Converting 60,000 Amperes",
        subtitle: "Convert a 60,000 Ampere current value to Kiloamperes.",
        steps: [
          "Identify current: 60,000 A.",
          "Divide by 1,000: 60,000 / 1,000 = 60.",
          "Result: 60,000 Amperes equals 60 kA."
        ]
      }
    ]
  },
  table: {
    title: "Ampere to Kiloampere Conversion Reference Table",
    headers: ["Amperes (A)", "Kiloamperes (kA)", "Equivalent Base Value"],
    rows: [
      { fromVal: "100 A", toVal: "0.1 kA", extra: "100 Amperes" },
      { fromVal: "500 A", toVal: "0.5 kA", extra: "500 Amperes" },
      { fromVal: "1,000 A", toVal: "1.0 kA", extra: "1,000 Amperes" },
      { fromVal: "2,500 A", toVal: "2.5 kA", extra: "2,500 Amperes" },
      { fromVal: "5,000 A", toVal: "5.0 kA", extra: "5,000 Amperes" },
      { fromVal: "10,000 A", toVal: "10.0 kA", extra: "10,000 Amperes" },
      { fromVal: "22,000 A", toVal: "22.0 kA", extra: "22,000 Amperes" },
      { fromVal: "50,000 A", toVal: "50.0 kA", extra: "50,000 Amperes" },
      { fromVal: "100,000 A", toVal: "100.0 kA", extra: "100,000 Amperes" },
      { fromVal: "200,000 A", toVal: "200.0 kA", extra: "200,000 Amperes" }
    ]
  },
  applications: {
    title: "Practical Applications of A to kA Conversion",
    items: [
      {
        title: "High-Current Equipment Specifications",
        text: "Engineers may express an already-calculated electrical current in kiloamperes when working with switchgear, power systems, industrial equipment, or high-current applications."
      },
      {
        title: "Documentation Simplification",
        text: "Electrical equipment manufacturers express heavy current ratings in kiloamperes for clarity and simplified record-keeping."
      },
      {
        title: "Comparative Standardization",
        text: "Converting amperes to kiloamperes standardizes electrical specifications across power generation and distribution literature."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Amperes to Kiloamperes",
    items: [
      "Multiplying by 1,000 instead of dividing: Moving from a smaller base unit (A) to a larger unit (kA) requires division by 1,000.",
      "Confusing current with potential: Kiloamperes (kA) measure electric current, whereas kilovolts (kV) measure electrical potential difference.",
      "Decimal placement errors: Ensure 500 A becomes 0.5 kA, not 0.05 kA."
    ]
  },
  faqs: [
    {
      question: "How many Amperes are in 1 Kiloampere?",
      answer: "There are exactly 1,000 Amperes in 1 Kiloampere."
    },
    {
      question: "What is the formula to convert Amperes to Kiloamperes?",
      answer: "The formula is: Kiloamperes = Amperes / 1,000."
    },
    {
      question: "How many Kiloamperes is 10,000 Amperes?",
      answer: "10,000 Amperes equals 10 Kiloamperes (10,000 / 1,000 = 10 kA)."
    },
    {
      question: "What does 22 kA mean on a circuit breaker?",
      answer: "A 22 kA rating specifies the maximum short-circuit current (22,000 Amperes) the breaker is rated to safely interrupt under standard testing conditions."
    },
    {
      question: "How do I convert 500 Amperes to Kiloamperes?",
      answer: "Divide 500 by 1,000 to get 0.5 Kiloamperes."
    },
    {
      question: "Is kA an official SI unit?",
      answer: "Yes, the kiloampere is a standard SI unit combining the metric prefix 'kilo-' (10³) with 'ampere'."
    },
    {
      question: "How do I convert Kiloamperes back to Amperes?",
      answer: "Multiply the current in kiloamperes by 1,000 to obtain amperes."
    }
  ],
  relatedList: [
    { label: "Kiloampere to Ampere", from: "kiloampere", to: "ampere" },
    { label: "Ampere to Milliampere", from: "ampere", to: "milliampere" },
    { label: "Ampere to Microampere", from: "ampere", to: "microampere" },
    { label: "Ampere to Abampere", from: "ampere", to: "abampere" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI).",
    "BIPM SI Brochure: The International System of Units.",
    "IEC 60050: International Electrotechnical Vocabulary - Electric and Magnetic Circuits."
  ]
};
