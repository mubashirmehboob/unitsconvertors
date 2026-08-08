import { CustomArticleData } from "./types";

export const abampereToAmpere: CustomArticleData = {
  fromUnitId: "abampere",
  toUnitId: "ampere",
  seoTitle: "Abampere to Ampere Converter (abA to A)",
  metaDescription: "Convert Abamperes to Amperes (abA to A) instantly. Learn the exact 10 multiplication factor, cgs-emu history, worked physics examples, tables, and FAQs.",
  h1: "Abampere to Ampere Converter",
  introduction: [
    "The Abampere (abA or Biot) and Ampere (A) measure electric current across historical electrodynamics and modern electrical engineering. The abampere belongs to the centimeter-gram-second electromagnetic (cgs-emu) system, while the ampere is the base electric current unit of the International System of Units (SI).",
    "By international physical definition, one abampere equals exactly 10 amperes. Converting abamperes to amperes is straightforward: multiply the current value in abamperes by 10.",
    "This technical guide explains the conversion factor, classical electromagnetic force definitions, step-by-step physics calculations, reference tables, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Abamperes to Amperes, multiply the current in abamperes by 10. For example, 1 abA equals 10 A, and 2.5 abA converts to 25 A.",
    formulaDisplay: "A = abA × 10",
    subtext: "1 Abampere is equal to exactly 10 Amperes."
  },
  aboutSourceUnit: {
    title: "What is an Abampere (abA / Biot)?",
    text: "The Abampere (symbol: abA or Bi) is the cgs-emu unit of electric current. It is defined as the current which, flowing through two parallel thin conductors 1 centimeter apart in a vacuum, exerts a force of 2 dynes per centimeter of length on each conductor."
  },
  aboutTargetUnit: {
    title: "Understanding Amperes (A)",
    text: "The Ampere (symbol: A) is the base SI unit of electric current. Re-defined in 2019 via the fixed numerical value of the elementary charge e (1.602176634 × 10⁻¹⁹ C), 1 ampere represents the flow of one coulomb of charge per second."
  },
  relationship: "The metric scaling ratio between abamperes and amperes is exact and fixed by definition: 1 abA = 10 A, and 1 A = 0.1 abA.",
  relationshipTitle: "Abampere to Ampere Scale Comparisons",
  relationshipItems: [
    { label: "0.1 abA", value: "1 A (Base SI unit baseline)" },
    { label: "1 abA", value: "10 A (Standard residential appliance circuit)" },
    { label: "10 abA", value: "100 A (Residential main breaker panel service)" },
    { label: "100 abA", value: "1,000 A (Commercial building main power busbar)" },
    { label: "1,000 abA", value: "10,000 A (Industrial arc furnace smelting current)" }
  ],
  formula: {
    text: "Multiply the electric current value in Abamperes by 10 to determine the equivalent current in Amperes.",
    math: "A = abA × 10",
    subtext: "To convert amperes back to abamperes, divide the ampere value by 10."
  },
  formulaTitle: "Abampere to Ampere Formula",
  practicalTip: {
    title: "Simple Decimal Movement",
    text: "To convert abamperes to amperes mentally, shift the decimal point one position to the right. For instance, 4.2 abA becomes 42 A."
  },
  expertNote: {
    title: "Historical Context of the Biot (Bi)",
    text: "In 1934, the IEC recommended naming the abampere after French physicist Jean-Baptiste Biot. While modern engineering utilizes amperes, reading classical physics research papers often requires converting Biot (Bi) to amperes by multiplying by 10."
  },
  examples: {
    title: "Step-by-Step abA to A Worked Examples",
    items: [
      {
        title: "Example 1: Electromagnetic Coil Experiment",
        subtitle: "Convert a 3.5 Abampere laboratory coil current to Amperes.",
        steps: [
          "Identify current in Abamperes: 3.5 abA.",
          "Apply conversion formula: A = 3.5 × 10.",
          "Calculate: 3.5 × 10 = 35.",
          "Result: 3.5 Abamperes equals 35 Amperes."
        ]
      },
      {
        title: "Example 2: Historical Galvanometer Calibration",
        subtitle: "Convert 0.25 Abamperes into Amperes.",
        steps: [
          "Identify current: 0.25 abA.",
          "Multiply by 10: 0.25 × 10 = 2.5.",
          "Result: 0.25 Abamperes equals 2.5 A."
        ]
      },
      {
        title: "Example 3: High-Current Arc Discharge",
        subtitle: "Convert 50 Abamperes to Amperes.",
        steps: [
          "Identify current: 50 abA.",
          "Multiply by 10: 50 × 10 = 500.",
          "Result: 50 Abamperes equals 500 A."
        ]
      }
    ]
  },
  table: {
    title: "Abampere to Ampere Conversion Reference Table",
    headers: ["Abamperes (abA)", "Amperes (A)", "Physical Application Context"],
    rows: [
      { fromVal: "0.01 abA", toVal: "0.1 A", extra: "Low-power electronic sensor current" },
      { fromVal: "0.1 abA", toVal: "1.0 A", extra: "Base SI current unit threshold" },
      { fromVal: "0.5 abA", toVal: "5.0 A", extra: "Benchtop laboratory power supply load" },
      { fromVal: "1.0 abA", toVal: "10.0 A", extra: "10 Amperes small residential branch circuit" },
      { fromVal: "2.5 abA", toVal: "25.0 A", extra: "HVAC compressor branch circuit" },
      { fromVal: "5.0 abA", toVal: "50.0 A", extra: "EV fast charger station current" },
      { fromVal: "10.0 abA", toVal: "100.0 A", extra: "Residential main distribution panel service" },
      { fromVal: "25.0 abA", toVal: "250.0 A", extra: "Commercial building sub-panel feeder" },
      { fromVal: "50.0 abA", toVal: "500.0 A", extra: "Industrial motor starter supply line" },
      { fromVal: "100.0 abA", toVal: "1,000.0 A", extra: "1 Kiloampere commercial switchgear busbar" }
    ]
  },
  applications: {
    title: "Practical Applications of abA to A Conversion",
    items: [
      {
        title: "Classical Electrodynamics Literature Review",
        text: "Researchers reading 19th and early 20th century physics papers convert abampere currents to amperes to evaluate experimental results using modern instruments."
      },
      {
        title: "Physics Laboratory Demonstrations",
        text: "University physics students use absolute cgs electrometers to measure current in abamperes and convert to amperes to verify Ohm's law with SI multimeters."
      },
      {
        title: "Plasma Physics Equation Solving",
        text: "Converting cgs magnetic field equations into SI circuit analysis requires translating abamperes into amperes."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Abamperes to Amperes",
    items: [
      "Dividing by 10 instead of multiplying: Converting from abamperes to amperes requires multiplying by 10 because 1 abA is ten times larger than 1 A.",
      "Confusing Abamperes with Statamperes: Abamperes belong to the electromagnetic cgs system (emu), whereas statamperes belong to the electrostatic system (esu).",
      "Confusing Biot with Ampere: Remember that 1 Biot (Bi) = 1 abA = 10 A."
    ]
  },
  faqs: [
    {
      question: "How many Amperes are in 1 Abampere?",
      answer: "There are exactly 10 Amperes in 1 Abampere."
    },
    {
      question: "What is the formula to convert Abamperes to Amperes?",
      answer: "The formula is: Amperes = Abamperes × 10."
    },
    {
      question: "How many Amperes is 5 abA?",
      answer: "5 Abamperes equals 50 Amperes (5 × 10 = 50 A)."
    },
    {
      question: "What is 0.1 abA in Amperes?",
      answer: "0.1 Abamperes equals 1 Ampere."
    },
    {
      question: "Is Biot the same as Abampere?",
      answer: "Yes, Biot (Bi) is a recognized synonym for the abampere."
    },
    {
      question: "How do I convert 12 abA to A?",
      answer: "Multiply 12 by 10 to obtain 120 Amperes."
    },
    {
      question: "Which unit is larger, abA or A?",
      answer: "The Abampere is 10 times larger than the Ampere."
    },
    {
      question: "How do I convert Amperes back to Abamperes?",
      answer: "Divide the current in amperes by 10 to obtain abamperes."
    }
  ],
  relatedList: [
    { label: "Ampere to Abampere", from: "ampere", to: "abampere" },
    { label: "Abampere to Milliampere", from: "abampere", to: "milliampere" },
    { label: "Abampere to Microampere", from: "abampere", to: "microampere" },
    { label: "Abampere to Kiloampere", from: "abampere", to: "kiloampere" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Jackson, J. D. Classical Electrodynamics, 3rd Edition.",
    "BIPM SI Brochure Appendix 1."
  ]
};
