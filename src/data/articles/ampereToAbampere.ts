import { CustomArticleData } from "./types";

export const ampereToAbampere: CustomArticleData = {
  fromUnitId: "ampere",
  toUnitId: "abampere",
  seoTitle: "Ampere to Abampere Converter (A to abA)",
  metaDescription: "Convert Amperes to Abamperes (A to abA) instantly. Learn the electromagnetic CGS conversion factor, Biot unit history, formulas, tables, and FAQs.",
  h1: "Ampere to Abampere Converter",
  introduction: [
    "The Ampere (A) and Abampere (abA), also known as the Biot (Bi), represent electric current in the modern International System of Units (SI) and the historical electromagnetic centimeter-gram-second (cgs-emu) system, respectively.",
    "By definition, one abampere equals exactly 10 amperes. Consequently, converting amperes to abamperes requires dividing the current value in amperes by 10 (or multiplying by 0.1).",
    "This conversion guide covers the exact mathematical ratio between SI amperes and cgs-emu abamperes, historical electromagnetic definitions, conversion tables, physics laboratory applications, and technical FAQs."
  ],
  quickAnswer: {
    text: "To convert Amperes to Abamperes, divide the current in amperes by 10. For instance, 10 A equals 1 abA, and 50 A converts to 5 abA.",
    formulaDisplay: "abA = A / 10",
    subtext: "1 Abampere is equal to exactly 10 Amperes."
  },
  aboutSourceUnit: {
    title: "What is an Ampere (A)?",
    text: "The Ampere (symbol: A) is the fundamental SI base unit of electric current. Named after French physicist André-Marie Ampère, it measures the rate of charge flow equivalent to one coulomb per second (1 A = 1 C/s)."
  },
  aboutTargetUnit: {
    title: "Understanding Abamperes (abA / Biot)",
    text: "The Abampere (symbol: abA or Bi) is the derived electromagnetic unit of electric current in the cgs-emu system. One abampere is defined as the current which, flowing through two parallel thin conductors 1 centimeter apart in a vacuum, produces a force of 2 dynes per centimeter of length."
  },
  relationship: "The exact conversion ratio between SI amperes and cgs-emu abamperes is fixed by physics definition: 1 abA = 10 A, and 1 A = 0.1 abA.",
  relationshipTitle: "Ampere to Abampere Scale Comparisons",
  relationshipItems: [
    { label: "1 A", value: "0.1 abA (SI base unit of current)" },
    { label: "10 A", value: "1 abA (Fundamental cgs-emu current unit)" },
    { label: "50 A", value: "5 abA (High-current laboratory power supply output)" },
    { label: "100 A", value: "10 abA (Industrial DC welding current)" },
    { label: "1,000 A", value: "100 abA (Electromagnet excitation coil current)" }
  ],
  formula: {
    text: "Divide the electric current value in Amperes by 10 to obtain the equivalent value in Abamperes.",
    math: "abA = A / 10",
    subtext: "To convert abamperes back to amperes, multiply the abampere value by 10."
  },
  formulaTitle: "Ampere to Abampere Formula",
  practicalTip: {
    title: "Simple Mental Shift",
    text: "Converting amperes to abamperes requires moving the decimal point one position to the left. For example, 35 A equals 3.5 abA."
  },
  expertNote: {
    title: "The Biot and CGS Electromagnetics",
    text: "In older physics literature and specialized plasma physics papers, the abampere is referred to as the Biot (Bi) in honor of Jean-Baptiste Biot. While SI amperes are universal in modern engineering, cgs-emu units remain relevant when studying historical electromagnetic equations."
  },
  examples: {
    title: "Step-by-Step A to abA Worked Examples",
    items: [
      {
        title: "Example 1: High-Current DC Busbar",
        subtitle: "Convert a 250 Ampere DC current to Abamperes.",
        steps: [
          "Identify current in Amperes: 250 A.",
          "Apply conversion formula: abA = 250 / 10.",
          "Calculate: 250 / 10 = 25.",
          "Result: 250 Amperes equals 25 Abamperes."
        ]
      },
      {
        title: "Example 2: Arc Welder Output Current",
        subtitle: "Convert 120 Amperes into Abamperes.",
        steps: [
          "Identify current: 120 A.",
          "Divide by 10: 120 / 10 = 12.",
          "Result: 120 Amperes equals 12 abA."
        ]
      },
      {
        title: "Example 3: Physics Laboratory Solenoid Current",
        subtitle: "Convert 15 Amperes into Abamperes.",
        steps: [
          "Identify current: 15 A.",
          "Divide by 10: 15 / 10 = 1.5.",
          "Result: 15 Amperes equals 1.5 abA."
        ]
      }
    ]
  },
  table: {
    title: "Ampere to Abampere Conversion Reference Table",
    headers: ["Amperes (A)", "Abamperes (abA)", "Physical Context"],
    rows: [
      { fromVal: "1 A", toVal: "0.1 abA", extra: "Standard SI base unit current" },
      { fromVal: "5 A", toVal: "0.5 abA", extra: "Benchtop laboratory power supply output" },
      { fromVal: "10 A", toVal: "1.0 abA", extra: "cgs-emu unit baseline equivalency" },
      { fromVal: "25 A", toVal: "2.5 abA", extra: "Commercial appliance branch circuit current" },
      { fromVal: "50 A", toVal: "5.0 abA", extra: "EV home charger dedicated circuit feed" },
      { fromVal: "100 A", toVal: "10.0 abA", extra: "Industrial DC welding arc current" },
      { fromVal: "250 A", toVal: "25.0 abA", extra: "Low-voltage distribution busbar current" },
      { fromVal: "500 A", toVal: "50.0 abA", extra: "Heavy industrial motor starter current" },
      { fromVal: "1,000 A", toVal: "100.0 abA", extra: "High-field physics electromagnet coil" },
      { fromVal: "5,000 A", toVal: "500.0 abA", extra: "Substation short-circuit fault current fraction" }
    ]
  },
  applications: {
    title: "Practical Applications of A to abA Conversion",
    items: [
      {
        title: "Historical Physics Literature Review",
        text: "Researchers translating classic electrodynamics papers and early 20th-century electromagnetic calculations convert cgs-emu abamperes into standard SI amperes."
      },
      {
        title: "Plasma Physics Equations",
        text: "Certain specialized magnetic confinement and plasma physics formulations retain cgs unit notation. Converting current parameters between A and abA ensures dimensional consistency."
      },
      {
        title: "Electromechanical Force Analysis",
        text: "Understanding the force relationship (2 dynes/cm at 1 cm distance) helps educators explain the physical mechanics that historically linked electrical current to mechanical force."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Amperes to Abamperes",
    items: [
      "Multiplying by 10 instead of dividing: Remember that 1 abA is larger than 1 A (1 abA = 10 A), so 1 A = 0.1 abA.",
      "Confusing Abamperes with Statamperes: Abamperes belong to the electromagnetic cgs system (emu), whereas statamperes belong to the electrostatic cgs system (esu).",
      "Assuming cgs units use Volts and Ohms: The cgs-emu system uses abvolts and abohms, requiring careful unit consistency across full circuit equations."
    ]
  },
  faqs: [
    {
      question: "How many Amperes are in 1 Abampere?",
      answer: "There are exactly 10 Amperes in 1 Abampere."
    },
    {
      question: "What is the formula to convert Amperes to Abamperes?",
      answer: "The formula is: Abamperes = Amperes / 10."
    },
    {
      question: "How many Abamperes is 100 Amperes?",
      answer: "100 Amperes equals 10 Abamperes (100 / 10 = 10 abA)."
    },
    {
      question: "Is Abampere the same as Biot?",
      answer: "Yes, 'Biot' (symbol: Bi) is an alternative name for the abampere in the cgs-emu measurement system."
    },
    {
      question: "Why is 1 abA equal to 10 A?",
      answer: "The electromagnetic cgs unit of charge (abcoulomb) was defined based on force per unit length between conductors, resulting in 1 abcoulomb = 10 coulombs, making 1 abA = 10 A."
    },
    {
      question: "How do I convert 50 A to abA?",
      answer: "Divide 50 by 10 to obtain 5 abA."
    },
    {
      question: "Is abA still widely used today?",
      answer: "No, modern science and engineering almost exclusively use the SI base unit ampere, but abamperes appear in classical electrodynamics and physics education."
    },
    {
      question: "How do I convert Abamperes back to Amperes?",
      answer: "Multiply the current in abamperes by 10 to obtain amperes."
    }
  ],
  relatedList: [
    { label: "Abampere to Ampere", from: "abampere", to: "ampere" },
    { label: "Ampere to Milliampere", from: "ampere", to: "milliampere" },
    { label: "Ampere to Microampere", from: "ampere", to: "microampere" },
    { label: "Ampere to Kiloampere", from: "ampere", to: "kiloampere" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Jackson, J. D. Classical Electrodynamics, 3rd Edition.",
    "BIPM SI Brochure Appendix 1: Metric System Units."
  ]
};
