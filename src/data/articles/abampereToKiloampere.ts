import { CustomArticleData } from "./types";

export const abampereToKiloampere: CustomArticleData = {
  fromUnitId: "abampere",
  toUnitId: "kiloampere",
  seoTitle: "Abampere to Kiloampere Converter (abA to kA)",
  metaDescription: "Convert Abamperes to Kiloamperes (abA to kA) accurately. Learn the 100 division formula, cgs-emu unit relationships, tables, and FAQs.",
  h1: "Abampere to Kiloampere Converter",
  introduction: [
    "The abampere (abA or Biot) and kiloampere (kA) represent electric current in two distinct measurement systems: the centimeter-gram-second electromagnetic (cgs-emu) system and the International System of Units (SI). The abampere is primarily encountered in historical cgs electromagnetic literature, while modern electrical engineering uses the SI ampere and its multiples such as the kiloampere.",
    "By definition, 1 abampere equals 10 amperes, and 1 kiloampere equals 1,000 amperes. Because 10 divided by 1,000 equals 0.01, 1 abampere is equal to exactly 0.01 kiloamperes. To convert abamperes to kiloamperes, divide the current value in abamperes by 100.",
    "This conversion guide details the mathematical relationship, cgs-emu to SI conversion formulas, step-by-step calculation examples, reference tables, and common technical questions."
  ],
  quickAnswer: {
    text: "To convert abamperes to kiloamperes, divide the current in abamperes by 100. For instance, 100 abA equals 1 kA, and 500 abA equals 5 kA.",
    formulaDisplay: "kA = abA / 100",
    subtext: "1 Abampere equals exactly 0.01 Kiloamperes."
  },
  aboutSourceUnit: {
    title: "What is an Abampere (abA / Biot)?",
    text: "The abampere (symbol: abA or Bi) is the unit of electric current in the cgs electromagnetic system. It is defined as the current that, flowing through two parallel straight conductors of infinite length and negligible circular cross-section separated by 1 centimeter in a vacuum, produces between them a force of 2 dynes per centimeter of length. One abampere corresponds to exactly 10 SI amperes."
  },
  aboutTargetUnit: {
    title: "Understanding Kiloamperes (kA)",
    text: "The kiloampere (symbol: kA) is a decimal multiple of the SI base unit for electric current, the ampere. One kiloampere equals 1,000 amperes (10³ A). The abampere is mainly encountered in historical cgs electromagnetic literature, while kiloamperes are used in modern SI-based electrical engineering for large currents."
  },
  relationship: "The mathematical conversion factor between abamperes and kiloamperes is exact: 1 abA = 0.01 kA, and 1 kA = 100 abA.",
  relationshipTitle: "Abampere to Kiloampere Exact Unit Equivalents",
  relationshipItems: [
    { label: "1 abA", value: "0.01 kA (10 Amperes)" },
    { label: "10 abA", value: "0.1 kA (100 Amperes)" },
    { label: "100 abA", value: "1.0 kA (1,000 Amperes)" },
    { label: "500 abA", value: "5.0 kA (5,000 Amperes)" },
    { label: "1,000 abA", value: "10.0 kA (10,000 Amperes)" }
  ],
  formula: {
    text: "Divide the current value in abamperes by 100 to convert to kiloamperes.",
    math: "kA = abA / 100",
    subtext: "To convert kiloamperes back to abamperes, multiply the value in kiloamperes by 100."
  },
  formulaTitle: "Abampere to Kiloampere Formula",
  practicalTip: {
    title: "Decimal Shift Rule",
    text: "To quickly convert abamperes to kiloamperes without a calculator, shift the decimal point two places to the left. For example, 250 abA becomes 2.5 kA."
  },
  expertNote: {
    title: "Unit System Transition Context",
    text: "When translating classical electromagnetic formulas from cgs-emu units into modern SI units, current values expressed in abamperes must be scaled to amperes (multiply by 10) or kiloamperes (divide by 100)."
  },
  examples: {
    title: "Step-by-Step abA to kA Calculation Examples",
    items: [
      {
        title: "Example 1: Converting 50 Abamperes",
        subtitle: "Convert 50 abA to Kiloamperes.",
        steps: [
          "Start with the value in abamperes: 50 abA.",
          "Apply the conversion formula: kA = 50 / 100.",
          "Perform the calculation: 50 / 100 = 0.5.",
          "Result: 50 abA equals 0.5 kA."
        ]
      },
      {
        title: "Example 2: Converting 250 Abamperes",
        subtitle: "Convert 250 abA to Kiloamperes.",
        steps: [
          "Start with the value in abamperes: 250 abA.",
          "Apply the conversion formula: kA = 250 / 100.",
          "Perform the calculation: 250 / 100 = 2.5.",
          "Result: 250 abA equals 2.5 kA."
        ]
      },
      {
        title: "Example 3: Converting 1,000 Abamperes",
        subtitle: "Convert 1,000 abA to Kiloamperes.",
        steps: [
          "Start with the value in abamperes: 1,000 abA.",
          "Apply the conversion formula: kA = 1,000 / 100.",
          "Perform the calculation: 1,000 / 100 = 10.",
          "Result: 1,000 abA equals 10 kA."
        ]
      }
    ]
  },
  table: {
    title: "Abampere to Kiloampere Conversion Table",
    headers: ["Abamperes (abA)", "Kiloamperes (kA)", "Equivalent Base Amperes (A)"],
    rows: [
      { fromVal: "1 abA", toVal: "0.01 kA", extra: "10 A" },
      { fromVal: "5 abA", toVal: "0.05 kA", extra: "50 A" },
      { fromVal: "10 abA", toVal: "0.1 kA", extra: "100 A" },
      { fromVal: "25 abA", toVal: "0.25 kA", extra: "250 A" },
      { fromVal: "50 abA", toVal: "0.5 kA", extra: "500 A" },
      { fromVal: "100 abA", toVal: "1.0 kA", extra: "1,000 A" },
      { fromVal: "250 abA", toVal: "2.5 kA", extra: "2,500 A" },
      { fromVal: "500 abA", toVal: "5.0 kA", extra: "5,000 A" },
      { fromVal: "1,000 abA", toVal: "10.0 kA", extra: "10,000 A" },
      { fromVal: "5,000 abA", toVal: "50.0 kA", extra: "50,000 A" }
    ]
  },
  applications: {
    title: "Context and Usage of abA to kA Conversion",
    items: [
      {
        title: "Electrodynamics & Physics Literature",
        text: "Historical physics textbooks and theoretical electrodynamics literature frequently use cgs electromagnetic units (abamperes). Converting these figures to kiloamperes helps contextualize large current values in modern SI terms."
      },
      {
        title: "Educational and Scientific Calculations",
        text: "Students and researchers working with comparative electromagnetism convert cgs units to SI metric multiples when evaluating magnetic forces and field intensity."
      },
      {
        title: "Inter-System Unit Standardization",
        text: "Data verification protocols between legacy laboratory records (expressed in abamperes) and modern SI instruments (calibrated in amperes or kiloamperes) rely on exact scaling factors."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying instead of dividing: Dividing by 100 is required when moving from abamperes to kiloamperes because 1 kA equals 100 abA.",
      "Confusing Abamperes with Statamperes: Abamperes are part of the cgs electromagnetic system (emu), whereas statamperes belong to the cgs electrostatic system (esu).",
      "Confusing the Biot symbol: The Biot (Bi) is an alternative name for the abampere, where 1 Bi = 1 abA = 0.01 kA."
    ]
  },
  faqs: [
    {
      question: "How many Kiloamperes are in 1 Abampere?",
      answer: "There are exactly 0.01 Kiloamperes in 1 Abampere."
    },
    {
      question: "What is the formula to convert Abamperes to Kiloamperes?",
      answer: "The formula is: Kiloamperes = Abamperes / 100."
    },
    {
      question: "How many Kiloamperes is 100 abA?",
      answer: "100 Abamperes equals 1 Kiloampere (100 / 100 = 1 kA)."
    },
    {
      question: "What is 50 abA in Kiloamperes?",
      answer: "50 Abamperes equals 0.5 Kiloamperes."
    },
    {
      question: "Why is 1 abA equal to 0.01 kA?",
      answer: "Because 1 abA equals 10 base amperes, and 1 kA equals 1,000 base amperes; 10 divided by 1,000 equals 0.01 kA."
    },
    {
      question: "How do I convert 250 abA to kA?",
      answer: "Divide 250 by 100 to get 2.5 Kiloamperes."
    },
    {
      question: "Is Biot another name for Abampere?",
      answer: "Yes, Biot (Bi) is an internationally recognized synonym for the abampere."
    },
    {
      question: "How do I convert Kiloamperes back to Abamperes?",
      answer: "Multiply the value in kiloamperes by 100 to convert to abamperes."
    },
    {
      question: "What system of units does the abampere belong to?",
      answer: "The abampere belongs to the electromagnetic centimeter-gram-second (cgs-emu) system, whereas the kiloampere belongs to the International System of Units (SI)."
    },
    {
      question: "What is the ratio between an abampere and an SI ampere?",
      answer: "1 abampere is equal to exactly 10 SI amperes."
    }
  ],
  relatedList: [
    { label: "Kiloampere to Abampere", from: "kiloampere", to: "abampere" },
    { label: "Abampere to Ampere", from: "abampere", to: "ampere" },
    { label: "Abampere to Milliampere", from: "abampere", to: "milliampere" },
    { label: "Abampere to Microampere", from: "abampere", to: "microampere" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Jackson, J. D. Classical Electrodynamics, 3rd Edition.",
    "BIPM SI Brochure Appendix 1."
  ]
};
