import { CustomArticleData } from "./types";

export const microampereToAbampere: CustomArticleData = {
  fromUnitId: "microampere",
  toUnitId: "abampere",
  seoTitle: "Microampere to Abampere Converter (µA to abA)",
  metaDescription: "Convert Microamperes to Abamperes (µA to abA) accurately. Learn the 10,000,000 scale conversion factor, cgs-emu principles, tables, and FAQs.",
  h1: "Microampere to Abampere Converter",
  introduction: [
    "The Microampere (µA) and Abampere (abA) represent electric current in two distinct measurement systems: the modern International System of Units (SI) and the historical electromagnetic centimeter-gram-second (cgs-emu) system.",
    "Because one abampere equals 10 base amperes, and one ampere contains 1,000,000 microamperes, one abampere equals exactly 10,000,000 microamperes (10⁷ µA). Converting microamperes to abamperes requires dividing the microampere value by 10,000,000 (or multiplying by 10⁻⁷).",
    "This conversion guide presents the 10⁻⁷ mathematical relationship, historical cgs context, step-by-step calculations, reference tables, and common FAQs."
  ],
  quickAnswer: {
    text: "To convert Microamperes to Abamperes, divide the current in microamperes by 10,000,000. For instance, 10,000,000 µA equals 1 abA, and 1,000,000 µA converts to 0.1 abA.",
    formulaDisplay: "abA = µA / 10,000,000",
    subtext: "1 Abampere is equal to exactly 10,000,000 Microamperes."
  },
  aboutSourceUnit: {
    title: "What is a Microampere (µA)?",
    text: "The Microampere (symbol: µA) is a decimal metric submultiple equal to one-millionth of an ampere (10⁻⁶ A). It is commonly used in microelectronics, sensor measurements, and low-power circuits."
  },
  aboutTargetUnit: {
    title: "Understanding Abamperes (abA / Biot)",
    text: "The Abampere (symbol: abA or Bi) is a historical cgs electromagnetic unit of electric current. In SI terms, 1 abampere is exactly equal to 10 amperes."
  },
  relationship: "The conversion factor between microamperes and abamperes is 10⁻⁷: 1 abA = 10,000,000 µA, and 1 µA = 0.0000001 abA (10⁻⁷ abA).",
  relationshipTitle: "Microampere to Abampere Scale Comparisons",
  relationshipItems: [
    { label: "100,000 µA", value: "0.01 abA (0.1 Ampere)" },
    { label: "1,000,000 µA", value: "0.1 abA (1 Ampere)" },
    { label: "10,000,000 µA", value: "1 abA (10 Amperes)" },
    { label: "50,000,000 µA", value: "5 abA (50 Amperes)" },
    { label: "100,000,000 µA", value: "10 abA (100 Amperes)" }
  ],
  formula: {
    text: "Divide the electric current value in Microamperes by 10,000,000 to determine the equivalent current in Abamperes.",
    math: "abA = µA / 10000000",
    subtext: "To convert abamperes back to microamperes, multiply the abampere value by 10,000,000."
  },
  formulaTitle: "Microampere to Abampere Formula",
  practicalTip: {
    title: "Scientific Exponential Shift",
    text: "When converting microamperes to abamperes in scientific calculations, express the current as µA × 10⁻⁷ abA to maintain clean dimensional analysis."
  },
  expertNote: {
    title: "Historical Unit Context",
    text: "The abampere is primarily encountered in historical cgs electromagnetic literature. This conversion is mainly useful when interpreting historical literature, legacy cgs equations, or performing educational comparisons with SI units."
  },
  examples: {
    title: "Step-by-Step µA to abA Calculation Examples",
    items: [
      {
        title: "Example 1: Converting 2,500,000 Microamperes",
        subtitle: "Convert 2,500,000 Microamperes to Abamperes.",
        steps: [
          "Identify current in Microamperes: 2,500,000 µA.",
          "Apply conversion formula: abA = 2,500,000 / 10,000,000.",
          "Calculate: 2,500,000 / 10,000,000 = 0.25.",
          "Result: 2,500,000 Microamperes equals 0.25 Abamperes."
        ]
      },
      {
        title: "Example 2: Converting 10,000,000 Microamperes",
        subtitle: "Convert 10,000,000 Microamperes into Abamperes.",
        steps: [
          "Identify current: 10,000,000 µA.",
          "Divide by 10,000,000: 10,000,000 / 10,000,000 = 1.",
          "Result: 10,000,000 Microamperes equals 1 abA."
        ]
      },
      {
        title: "Example 3: Converting 50,000 Microamperes",
        subtitle: "Convert 50,000 Microamperes into Abamperes.",
        steps: [
          "Identify current: 50,000 µA.",
          "Divide by 10,000,000: 50,000 / 10,000,000 = 0.005.",
          "Result: 50,000 Microamperes equals 0.005 abA."
        ]
      }
    ]
  },
  table: {
    title: "Microampere to Abampere Conversion Reference Table",
    headers: ["Microamperes (µA)", "Abamperes (abA)", "Equivalent Base Amperes (A)"],
    rows: [
      { fromVal: "10,000 µA", toVal: "0.001 abA", extra: "0.01 A" },
      { fromVal: "100,000 µA", toVal: "0.01 abA", extra: "0.1 A" },
      { fromVal: "500,000 µA", toVal: "0.05 abA", extra: "0.5 A" },
      { fromVal: "1,000,000 µA", toVal: "0.1 abA", extra: "1.0 A" },
      { fromVal: "2,500,000 µA", toVal: "0.25 abA", extra: "2.5 A" },
      { fromVal: "5,000,000 µA", toVal: "0.5 abA", extra: "5.0 A" },
      { fromVal: "10,000,000 µA", toVal: "1.0 abA", extra: "10.0 A" },
      { fromVal: "25,000,000 µA", toVal: "2.5 abA", extra: "25.0 A" },
      { fromVal: "50,000,000 µA", toVal: "5.0 abA", extra: "50.0 A" },
      { fromVal: "100,000,000 µA", toVal: "10.0 abA", extra: "100.0 A" }
    ]
  },
  applications: {
    title: "Context and Usage of µA to abA Conversion",
    items: [
      {
        title: "Historical Physics Literature Analysis",
        text: "Analyzing 19th and early 20th-century physics papers that used the cgs-emu system requires converting microampere values into abamperes or vice versa."
      },
      {
        title: "Academic & Physics Education",
        text: "University physics courses use conversions between cgs and SI units to help students understand unit dimensions and historical measurement developments."
      },
      {
        title: "Comparative Dimensional Analysis",
        text: "Comparing theoretical electromagnetic formulas expressed in Gaussian or cgs units with modern SI unit specifications."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Microamperes to Abamperes",
    items: [
      "Multiplying by 10,000,000 instead of dividing: Converting from microamperes to abamperes requires dividing by 10,000,000 because 1 abA equals 10,000,000 µA.",
      "Confusing Abamperes with Statamperes: Abamperes belong to the electromagnetic cgs system (emu), whereas statamperes belong to the electrostatic cgs system (esu).",
      "Losing track of scientific exponent signs: Remember that 1 µA = 10⁻⁷ abA."
    ]
  },
  faqs: [
    {
      question: "How many Microamperes are in 1 Abampere?",
      answer: "There are exactly 10,000,000 Microamperes in 1 Abampere."
    },
    {
      question: "What is the formula to convert Microamperes to Abamperes?",
      answer: "The formula is: Abamperes = Microamperes / 10,000,000."
    },
    {
      question: "How many Abamperes is 1,000,000 µA?",
      answer: "1,000,000 Microamperes equals 0.1 Abamperes (1,000,000 / 10,000,000 = 0.1 abA)."
    },
    {
      question: "What is 10,000,000 µA in Abamperes?",
      answer: "10,000,000 Microamperes equals 1 Abampere."
    },
    {
      question: "Why is the scale factor equal to 10,000,000?",
      answer: "Because 1 abA = 10 A, and 1 A = 1,000,000 µA; multiplying 10 by 1,000,000 yields 10,000,000 µA."
    },
    {
      question: "How do I convert 500,000 µA to abA?",
      answer: "Divide 500,000 by 10,000,000 to get 0.05 Abamperes."
    },
    {
      question: "Is Biot another name for Abampere?",
      answer: "Yes, Biot (Bi) is a recognized alternative name for the abampere in the cgs-emu unit system."
    },
    {
      question: "How do I convert Abamperes back to Microamperes?",
      answer: "Multiply the value in abamperes by 10,000,000 to obtain microamperes."
    }
  ],
  relatedList: [
    { label: "Abampere to Microampere", from: "abampere", to: "microampere" },
    { label: "Microampere to Ampere", from: "microampere", to: "ampere" },
    { label: "Microampere to Milliampere", from: "microampere", to: "milliampere" },
    { label: "Microampere to Kiloampere", from: "microampere", to: "kiloampere" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Jackson, J. D. Classical Electrodynamics, 3rd Edition.",
    "BIPM SI Brochure Appendix 1."
  ]
};
