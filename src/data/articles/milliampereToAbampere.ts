import { CustomArticleData } from "./types";

export const milliampereToAbampere: CustomArticleData = {
  fromUnitId: "milliampere",
  toUnitId: "abampere",
  seoTitle: "Milliampere to Abampere Converter (mA to abA)",
  metaDescription: "Convert Milliamperes to Abamperes (mA to abA) instantly. Learn the 10,000 division formula, cgs-emu unit history, worked examples, tables, and FAQs.",
  h1: "Milliampere to Abampere Converter",
  introduction: [
    "The Milliampere (mA) and Abampere (abA) measure electric current across two different system frameworks: the modern International System of Units (SI) and the historical electromagnetic centimeter-gram-second (cgs-emu) system.",
    "By physical definition, one abampere equals 10 base SI amperes, which corresponds to exactly 10,000 milliamperes. Converting milliamperes to abamperes requires dividing the milliampere current value by 10,000 (or multiplying by 0.0001).",
    "This conversion guide details the exact mathematical factor between milliamperes and abamperes, cgs electromagnetic principles, unit conversion tables, and common technical questions."
  ],
  quickAnswer: {
    text: "To convert Milliamperes to Abamperes, divide the current in milliamperes by 10,000. For instance, 10,000 mA equals 1 abA, and 2,500 mA converts to 0.25 abA.",
    formulaDisplay: "abA = mA / 10,000",
    subtext: "1 Abampere is equal to exactly 10,000 Milliamperes."
  },
  aboutSourceUnit: {
    title: "What is a Milliampere (mA)?",
    text: "The milliampere (mA) is an SI decimal submultiple of the ampere, commonly used to express relatively small electric currents in electronics, instrumentation, and electrical testing."
  },
  aboutTargetUnit: {
    title: "Understanding Abamperes (abA / Biot)",
    text: "The abampere (symbol: abA or Bi) is a historical cgs electromagnetic unit of electric current. In SI terms, 1 abampere is exactly equal to 10 amperes."
  },
  relationship: "The exact metric relationship between milliamperes and abamperes is fixed by system definitions: 1 abA = 10,000 mA, and 1 mA = 0.0001 abA (10⁻⁴ abA).",
  relationshipTitle: "Milliampere to Abampere Scale Comparisons",
  relationshipItems: [
    { label: "100 mA", value: "0.01 abA (0.1 Ampere)" },
    { label: "1,000 mA", value: "0.1 abA (1 Ampere)" },
    { label: "10,000 mA", value: "1 abA (10 Amperes)" },
    { label: "50,000 mA", value: "5 abA (50 Amperes)" },
    { label: "100,000 mA", value: "10 abA (100 Amperes)" }
  ],
  formula: {
    text: "Divide the electric current value in Milliamperes by 10,000 to obtain the equivalent current in Abamperes.",
    math: "abA = mA / 10000",
    subtext: "To convert abamperes back to milliamperes, multiply the abampere value by 10,000."
  },
  formulaTitle: "Milliampere to Abampere Formula",
  practicalTip: {
    title: "Decimal Displacement Rule",
    text: "Converting milliamperes to abamperes mentally requires shifting the decimal point four positions to the left. For example, 500 mA becomes 0.05 abA."
  },
  expertNote: {
    title: "The Biot in Electrodynamics Literature",
    text: "The abampere is primarily encountered in historical cgs-emu physics literature and electromagnetic calculations. When reviewing classical electrodynamics equations, dividing milliampere measurements by 10,000 yields exact cgs-emu current parameters."
  },
  examples: {
    title: "Step-by-Step mA to abA Worked Examples",
    items: [
      {
        title: "Example 1: Converting 2,500 Milliamperes",
        subtitle: "Convert a 2,500 Milliampere current into Abamperes.",
        steps: [
          "Identify current in Milliamperes: 2,500 mA.",
          "Apply formula: abA = 2,500 / 10,000.",
          "Calculate: 2,500 / 10,000 = 0.25.",
          "Result: 2,500 Milliamperes equals 0.25 Abamperes."
        ]
      },
      {
        title: "Example 2: Converting 100 Milliamperes",
        subtitle: "Convert 100 Milliamperes to Abamperes.",
        steps: [
          "Identify current: 100 mA.",
          "Divide by 10,000: 100 / 10,000 = 0.01.",
          "Result: 100 Milliamperes equals 0.01 abA."
        ]
      },
      {
        title: "Example 3: Converting 15,000 Milliamperes",
        subtitle: "Convert 15,000 Milliamperes into Abamperes.",
        steps: [
          "Identify current: 15,000 mA.",
          "Divide by 10,000: 15,000 / 10,000 = 1.5.",
          "Result: 15,000 Milliamperes equals 1.5 abA."
        ]
      }
    ]
  },
  table: {
    title: "Milliampere to Abampere Conversion Reference Table",
    headers: ["Milliamperes (mA)", "Abamperes (abA)", "Equivalent Base Amperes (A)"],
    rows: [
      { fromVal: "10 mA", toVal: "0.001 abA", extra: "0.01 A" },
      { fromVal: "100 mA", toVal: "0.01 abA", extra: "0.1 A" },
      { fromVal: "500 mA", toVal: "0.05 abA", extra: "0.5 A" },
      { fromVal: "1,000 mA", toVal: "0.1 abA", extra: "1.0 A" },
      { fromVal: "2,500 mA", toVal: "0.25 abA", extra: "2.5 A" },
      { fromVal: "5,000 mA", toVal: "0.5 abA", extra: "5.0 A" },
      { fromVal: "10,000 mA", toVal: "1.0 abA", extra: "10.0 A" },
      { fromVal: "25,000 mA", toVal: "2.5 abA", extra: "25.0 A" },
      { fromVal: "50,000 mA", toVal: "5.0 abA", extra: "50.0 A" },
      { fromVal: "100,000 mA", toVal: "10.0 abA", extra: "100.0 A" }
    ]
  },
  applications: {
    title: "Context and Usage of mA to abA Conversion",
    items: [
      {
        title: "Historical Physics Literature Analysis",
        text: "Analyzing 19th and early 20th-century physics papers that used the cgs-emu system requires converting milliampere values into abamperes or vice versa."
      },
      {
        title: "Academic & Physics Education",
        text: "University physics courses use conversions between cgs and SI units to help students understand unit dimensions and historical measurement developments."
      },
      {
        title: "Comparative Electromagnetic Analysis",
        text: "Comparing theoretical electromagnetic formulas expressed in cgs units with modern SI unit specifications."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Milliamperes to Abamperes",
    items: [
      "Multiplying by 10,000 instead of dividing: Moving from milliamperes to abamperes requires division by 10,000 because 1 abA equals 10,000 mA.",
      "Confusing Abamperes with Statamperes: Abamperes belong to the electromagnetic cgs system, while statamperes belong to the electrostatic cgs system.",
      "Modern SI context: The abampere is a historical cgs-emu unit and is not part of the modern SI system."
    ]
  },
  faqs: [
    {
      question: "How many Milliamperes are in 1 Abampere?",
      answer: "There are exactly 10,000 Milliamperes in 1 Abampere."
    },
    {
      question: "What is the formula to convert Milliamperes to Abamperes?",
      answer: "The formula is: Abamperes = Milliamperes / 10,000."
    },
    {
      question: "How many Abamperes is 1,000 mA?",
      answer: "1,000 Milliamperes equals 0.1 Abampere (1,000 / 10,000 = 0.1 abA)."
    },
    {
      question: "What is 10,000 mA in Abamperes?",
      answer: "10,000 Milliamperes equals exactly 1 Abampere."
    },
    {
      question: "Why is 1 abA equal to 10,000 mA?",
      answer: "Because 1 abA = 10 amperes, and 1 ampere = 1,000 milliamperes; therefore, 10 × 1,000 = 10,000 mA."
    },
    {
      question: "How do I convert 500 mA to abA?",
      answer: "Divide 500 by 10,000 to get 0.05 Abamperes."
    },
    {
      question: "Is Biot another name for Abampere?",
      answer: "Yes, Biot (Bi) is a recognized alternative name for the abampere in the cgs-emu unit system."
    },
    {
      question: "How do I convert Abamperes back to Milliamperes?",
      answer: "Multiply the current in abamperes by 10,000 to get milliamperes."
    }
  ],
  relatedList: [
    { label: "Abampere to Milliampere", from: "abampere", to: "milliampere" },
    { label: "Milliampere to Ampere", from: "milliampere", to: "ampere" },
    { label: "Milliampere to Microampere", from: "milliampere", to: "microampere" },
    { label: "Milliampere to Kiloampere", from: "milliampere", to: "kiloampere" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Jackson, J. D. Classical Electrodynamics, 3rd Edition.",
    "BIPM SI Brochure Appendix 1."
  ]
};
