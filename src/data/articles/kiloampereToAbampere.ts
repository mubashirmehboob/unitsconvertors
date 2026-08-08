import { CustomArticleData } from "./types";

export const kiloampereToAbampere: CustomArticleData = {
  fromUnitId: "kiloampere",
  toUnitId: "abampere",
  seoTitle: "Kiloampere to Abampere Converter (kA to abA)",
  metaDescription: "Convert Kiloamperes to Abamperes (kA to abA) instantly. Learn the 100 multiplication formula, cgs-emu unit relationships, tables, and FAQs.",
  h1: "Kiloampere to Abampere Converter",
  introduction: [
    "The Kiloampere (kA) and Abampere (abA) represent large-scale electric current flow across two distinct physics unit systems: the modern International System of Units (SI) and the historical electromagnetic centimeter-gram-second (cgs-emu) system.",
    "By definition, 1 kiloampere equals 1,000 base amperes, while 1 abampere equals 10 base amperes. As a result, one kiloampere equals exactly 100 abamperes. Converting kiloamperes to abamperes requires multiplying the current in kiloamperes by 100.",
    "This technical guide explains the 100 multiplication conversion factor, cgs electrodynamics equations, high-current power transmission examples, reference tables, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Kiloamperes to Abamperes, multiply the current in kiloamperes by 100. For instance, 1 kA equals 100 abA, and 5 kA converts to 500 abA.",
    formulaDisplay: "abA = kA × 100",
    subtext: "1 Kiloampere is equal to exactly 100 Abamperes."
  },
  aboutSourceUnit: {
    title: "What is a Kiloampere (kA)?",
    text: "The Kiloampere (symbol: kA) is a metric multiple equal to 1,000 amperes (10³ A). Kiloamperes measure electrical power utility transmission currents, substation transformer short-circuit capacities, and lightning discharges."
  },
  aboutTargetUnit: {
    title: "Understanding Abamperes (abA / Biot)",
    text: "The Abampere (symbol: abA or Bi) is the cgs-emu unit of electric current. Defined via the magnetic force between parallel current-carrying conductors, 1 abampere produces a force of 2 dynes per centimeter at a 1 cm distance in a vacuum."
  },
  relationship: "The exact conversion scale factor between kiloamperes and abamperes is fixed: 1 kA = 100 abA, and 1 abA = 0.01 kA.",
  relationshipTitle: "Kiloampere to Abampere Scale Comparisons",
  relationshipItems: [
    { label: "0.1 kA", value: "10 abA (100 Amperes residential main panel service)" },
    { label: "1.0 kA", value: "100 abA (Commercial building main distribution busbar)" },
    { label: "10.0 kA", value: "1,000 abA (Substation fault current withstand limit)" },
    { label: "30.0 kA", value: "3,000 abA (Average atmospheric lightning stroke)" },
    { label: "100.0 kA", value: "10,000 abA (Industrial arc furnace smelting current)" }
  ],
  formula: {
    text: "Multiply the electric current value in Kiloamperes by 100 to determine the equivalent current in Abamperes.",
    math: "abA = kA × 100",
    subtext: "To convert abamperes back to kiloamperes, divide the abampere value by 100."
  },
  formulaTitle: "Kiloampere to Abampere Formula",
  practicalTip: {
    title: "Simple Decimal Movement",
    text: "To convert kiloamperes to abamperes mentally, shift the decimal point two positions to the right. For example, 3.5 kA becomes 350 abA."
  },
  expertNote: {
    title: "Magnetohydrodynamics (MHD) Calculations",
    text: "High-current plasma physics and magnetohydrodynamics equations frequently employ the cgs-emu system. Converting generator current ratings in kA to abA enables direct calculation of magnetic forces in dynes."
  },
  examples: {
    title: "Step-by-Step kA to abA Worked Examples",
    items: [
      {
        title: "Example 1: Transformer Secondary Current",
        subtitle: "Convert a 2.5 Kiloampere substation transformer output to Abamperes.",
        steps: [
          "Identify current in Kiloamperes: 2.5 kA.",
          "Apply conversion formula: abA = 2.5 × 100.",
          "Calculate: 2.5 × 100 = 250.",
          "Result: 2.5 Kiloamperes equals 250 Abamperes."
        ]
      },
      {
        title: "Example 2: Commercial Switchgear Feeder Fault",
        subtitle: "Convert 10 Kiloamperes into Abamperes.",
        steps: [
          "Identify current: 10 kA.",
          "Multiply by 100: 10 × 100 = 1,000.",
          "Result: 10 Kiloamperes equals 1,000 abA."
        ]
      },
      {
        title: "Example 3: Atmospheric Lightning Strike",
        subtitle: "Convert 30 Kiloamperes into Abamperes.",
        steps: [
          "Identify current: 30 kA.",
          "Multiply by 100: 30 × 100 = 3,000.",
          "Result: 30 Kiloamperes equals 3,000 abA."
        ]
      }
    ]
  },
  table: {
    title: "Kiloampere to Abampere Conversion Reference Table",
    headers: ["Kiloamperes (kA)", "Abamperes (abA)", "Physical Application Context"],
    rows: [
      { fromVal: "0.1 kA", toVal: "10 abA", extra: "Residential electrical main panel feeder" },
      { fromVal: "0.5 kA", toVal: "50 abA", extra: "Heavy industrial motor drive supply line" },
      { fromVal: "1.0 kA", toVal: "100 abA", extra: "Commercial building main distribution busbar" },
      { fromVal: "2.5 kA", toVal: "250 abA", extra: "Data center UPS main feeder channel" },
      { fromVal: "5.0 kA", toVal: "500 abA", extra: "Medium-voltage transformer secondary current" },
      { fromVal: "10.0 kA", toVal: "1,000 abA", extra: "Residential circuit breaker interrupting threshold" },
      { fromVal: "22.0 kA", toVal: "2,200 abA", extra: "Substation short-circuit fault current" },
      { fromVal: "50.0 kA", toVal: "5,000 abA", extra: "High-voltage transmission line short-circuit limit" },
      { fromVal: "100.0 kA", toVal: "10,000 abA", extra: "Industrial arc furnace steelmaking current" },
      { fromVal: "200.0 kA", toVal: "20,000 abA", extra: "Severe atmospheric lightning surge discharge" }
    ]
  },
  applications: {
    title: "Practical Applications of kA to abA Conversion",
    items: [
      {
        title: "Plasma Physics & Thermonuclear Research",
        text: "Tokamak fusion reactor magnets operate at mega-ampere levels. Physicists converting magnet current in kA to abA easily evaluate cgs magnetic pinch forces."
      },
      {
        title: "Astrophysical Electrodynamics",
        text: "Modeling solar flare current sheets involves converting satellite current estimations in kiloamperes into cgs abamperes for solar magnetic energy equations."
      },
      {
        title: "High-Current Electromagnetic Launchers",
        text: "Railgun and pulse-power physics experiments express projectile pulse currents in kiloamperes while evaluating armature force equations using cgs abamperes."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Kiloamperes to Abamperes",
    items: [
      "Dividing by 100 instead of multiplying: Converting from kiloamperes to abamperes requires multiplying by 100 because 1 kA = 1,000 A and 1 abA = 10 A.",
      "Confusing Abamperes with Statamperes: Abamperes belong to the electromagnetic cgs system (emu), whereas statamperes belong to the electrostatic cgs system (esu).",
      "Forgetting SI unit dominance: While abA is valid in cgs physics, all modern power engineering uses SI amperes or kiloamperes."
    ]
  },
  faqs: [
    {
      question: "How many Abamperes are in 1 Kiloampere?",
      answer: "There are exactly 100 Abamperes in 1 Kiloampere."
    },
    {
      question: "What is the formula to convert Kiloamperes to Abamperes?",
      answer: "The formula is: Abamperes = Kiloamperes × 100."
    },
    {
      question: "How many Abamperes is 10 kA?",
      answer: "10 Kiloamperes equals 1,000 Abamperes (10 × 100 = 1,000 abA)."
    },
    {
      question: "What is 0.5 kA in Abamperes?",
      answer: "0.5 Kiloamperes equals 50 Abamperes."
    },
    {
      question: "Why is 1 kA equal to 100 abA?",
      answer: "Because 1 kA = 1,000 amperes, and 1 abA = 10 amperes; 1,000 / 10 = 100 abA."
    },
    {
      question: "How do I convert 2.5 kA to abA?",
      answer: "Multiply 2.5 by 100 to get 250 Abamperes."
    },
    {
      question: "Is Biot another name for Abampere?",
      answer: "Yes, Biot (Bi) is a recognized alternative name for the abampere in the cgs-emu unit system."
    },
    {
      question: "How do I convert Abamperes back to Kiloamperes?",
      answer: "Divide the current in abamperes by 100 to obtain kiloamperes."
    }
  ],
  relatedList: [
    { label: "Abampere to Kiloampere", from: "abampere", to: "kiloampere" },
    { label: "Kiloampere to Ampere", from: "kiloampere", to: "ampere" },
    { label: "Kiloampere to Milliampere", from: "kiloampere", to: "milliampere" },
    { label: "Kiloampere to Microampere", from: "kiloampere", to: "microampere" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Jackson, J. D. Classical Electrodynamics, 3rd Edition.",
    "BIPM SI Brochure Appendix 1."
  ]
};
