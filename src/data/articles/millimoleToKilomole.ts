import { CustomArticleData } from "./types";

export const millimoleToKilomole: CustomArticleData = {
  fromUnitId: "millimole",
  toUnitId: "kilomole",
  seoTitle: "Millimole to Kilomole Converter (mmol to kmol)",
  metaDescription: "Convert Millimoles to Kilomoles (mmol to kmol) accurately. Learn the conversion formula, calculation steps, reference tables, and expert FAQs.",
  h1: "Millimole to Kilomole Converter",
  introduction: [
    "The millimole (mmol) and kilomole (kmol) are SI units representing different scales of chemical substance quantity. While millimoles are standard for micro-scale lab experiments, analytical chemistry titrations, and clinical pathology, kilomoles are used for plant-scale chemical engineering, industrial mass balances, and environmental emissions reporting.",
    "Because one kilomole equals 1,000 moles (10³ mol) and one millimole equals 0.001 moles (10⁻³ mol), one kilomole contains exactly 1,000,000 millimoles. To convert millimoles to kilomoles, divide the millimole quantity by 1,000,000.",
    "Use our online conversion tool above for instant calculations, or consult the formula, engineering examples, reference table, and industrial tips below."
  ],
  quickAnswer: {
    text: "To convert Millimoles to Kilomoles, divide the quantity in millimoles by 1,000,000 (10⁶). For example, 500,000 mmol equals 0.5 kmol, and 10,000 mmol equals 0.01 kmol.",
    formulaDisplay: "kmol = mmol ÷ 1,000,000",
    subtext: "1 Millimole is equal to exactly 0.000001 Kilomoles (10⁻⁶ kmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Millimole (mmol)",
    text: "The millimole (symbol: mmol) is a metric sub-multiple equal to one-thousandth of a mole (10⁻³ mol). It is the standard unit used in clinical medicine, pharmaceutical formulation, and analytical chemistry."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilomole (kmol)",
    text: "The kilomole (symbol: kmol) is a metric multiple unit equal to 1,000 moles (10³ mol). It is extensively used in bulk chemical manufacturing, petrochemical process modeling, combustion thermodynamics, and heavy industrial plant calculations."
  },
  relationship: "The relationship between millimoles and kilomoles spans six orders of magnitude: 1 kmol = 1,000,000 mmol, and 1 mmol = 0.000001 kmol.",
  relationshipTitle: "Millimolar to Industrial Kilomolar Scale",
  relationshipItems: [
    { label: "1,000 mmol", value: "0.001 kmol (1 Mole baseline equivalent)" },
    { label: "50,000 mmol", value: "0.05 kmol (Pilot plant reagent charge)" },
    { label: "100,000 mmol", value: "0.1 kmol (Specialty chemical vessel addition)" },
    { label: "500,000 mmol", value: "0.5 kmol (Intermediate chemical reactor charge)" },
    { label: "1,000,000 mmol", value: "1.0 kmol (1 Kilomole industrial baseline)" }
  ],
  formula: {
    text: "Divide the substance amount in millimoles by 1,000,000 (10⁶) to determine the equivalent in kilomoles.",
    math: "kmol = mmol / 1000000",
    subtext: "To convert kilomoles back to millimoles, multiply the kilomole value by 1,000,000."
  },
  formulaTitle: "Millimole to Kilomole Conversion Formula",
  practicalTip: {
    title: "Engineering Decimal Shift Rule",
    text: "To convert millimoles to kilomoles quickly, move the decimal point six places to the left. For example, 250,000 mmol becomes 0.25 kmol."
  },
  expertNote: {
    title: "Pilot Plant Scaling & Industrial Process Modeling",
    text: "When chemical process engineers scale laboratory pilot reaction data (recorded in millimoles per liter per minute) to full-scale manufacturing facilities, converting mmol directly to kmol ensures seamless integration with plant simulation software like Aspen Plus or HYSYS."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Pilot Plant Catalyst Addition",
        subtitle: "Convert 250,000 millimoles of catalyst active agent into kilomoles for a commercial reactor balance.",
        steps: [
          "Identify the given millimole value: 250,000 mmol.",
          "Apply the conversion formula: kmol = 250,000 ÷ 1,000,000.",
          "Calculate: 250,000 ÷ 1,000,000 = 0.25 kmol.",
          "Result: 250,000 millimoles equals 0.25 kilomoles."
        ]
      },
      {
        title: "Example 2: Industrial Effluent Treatment",
        subtitle: "Convert 1,500,000 millimoles of dissolved acid contaminant in a wastewater holding tank into kilomoles.",
        steps: [
          "Identify the value: 1,500,000 mmol.",
          "Divide by 1,000,000: 1,500,000 ÷ 1,000,000 = 1.5 kmol.",
          "Result: 1,500,000 millimoles equals 1.5 kilomoles."
        ]
      },
      {
        title: "Example 3: Flue Gas Emission Scrubbing",
        subtitle: "Convert 80,000 millimoles of sulfur dioxide per second into kilomoles per second.",
        steps: [
          "Identify the value: 80,000 mmol.",
          "Divide by 1,000,000: 80,000 ÷ 1,000,000 = 0.08 kmol.",
          "Result: 80,000 millimoles equals 0.08 kilomoles."
        ]
      }
    ]
  },
  table: {
    title: "Millimole to Kilomole Reference Table",
    headers: ["Millimoles (mmol)", "Kilomoles (kmol)", "Industrial Application Context"],
    rows: [
      { fromVal: "1,000 mmol", toVal: "0.001 kmol", extra: "1 Mole benchmark scale" },
      { fromVal: "10,000 mmol", toVal: "0.01 kmol", extra: "Benchtop synthesis vessel max charge" },
      { fromVal: "50,000 mmol", toVal: "0.05 kmol", extra: "Pilot plant batch addition" },
      { fromVal: "100,000 mmol", toVal: "0.1 kmol", extra: "Specialty chemical reactor feed" },
      { fromVal: "250,000 mmol", toVal: "0.25 kmol", extra: "Intermediate processing step" },
      { fromVal: "500,000 mmol", toVal: "0.5 kmol", extra: "Commercial batch reactor solvent charge" },
      { fromVal: "1,000,000 mmol", toVal: "1.0 kmol", extra: "1 Kilomole industrial baseline" },
      { fromVal: "5,000,000 mmol", toVal: "5.0 kmol", extra: "Continuous distillation stream throughput" }
    ]
  },
  applications: {
    title: "Practical Applications of mmol to kmol Conversion",
    items: [
      {
        title: "Process Scale-Up & Plant Design",
        text: "Chemical engineers scale laboratory titration data (mmol) up to full-scale chemical plants (kmol) to dimension pumps, heat exchangers, and distillation columns."
      },
      {
        title: "Industrial Wastewater Management",
        text: "Environmental facilities convert heavy metal and organic solute readings from millimoles per liter to total kilomoles to determine mass neutralization requirements."
      },
      {
        title: "Bulk Specialty Chemical Manufacturing",
        text: "Plant operators monitoring stoichiometry during exothermic polymer reactions convert reagent flow rates from millimoles per minute to kilomoles per hour."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Order of magnitude error: Converting millimoles (10⁻³ mol) to kilomoles (10³ mol) requires dividing by 1,000,000 (10⁶), not 1,000 (10³).",
      "Multiplying instead of dividing: Moving from a smaller unit (mmol) to a larger unit (kmol) always requires division.",
      "Symbol confusion: Do not confuse kmol (kilomoles, 10³ mol) with mmol (millimoles, 10⁻³ mol)."
    ]
  },
  faqs: [
    {
      question: "How many millimoles are in 1 kilomole?",
      answer: "There are exactly 1,000,000 millimoles in 1 kilomole."
    },
    {
      question: "What is the formula to convert millimoles to kilomoles?",
      answer: "The formula is: Kilomoles (kmol) = Millimoles (mmol) ÷ 1,000,000."
    },
    {
      question: "How do I convert 500,000 millimoles to kilomoles?",
      answer: "Divide 500,000 by 1,000,000 to get 0.5 kilomoles (kmol)."
    },
    {
      question: "What is 1,000,000 mmol in kmol?",
      answer: "1,000,000 millimoles equals exactly 1 kilomole."
    },
    {
      question: "How do I convert kilomoles back to millimoles?",
      answer: "Multiply the kilomole value by 1,000,000 (e.g., 2.5 kmol × 1,000,000 = 2,500,000 mmol)."
    },
    {
      question: "Why convert millimoles to kilomoles in engineering?",
      answer: "Laboratory results are measured in millimoles, but industrial plant software and mass flow meters operate in kilomoles or metric tons."
    },
    {
      question: "How many moles is 1,000 mmol?",
      answer: "1,000 millimoles equals 1 mole, which is equal to 0.001 kilomoles."
    },
    {
      question: "How many particles are in a kilomole?",
      answer: "One kilomole contains 6.02214076 × 10²⁶ elementary entities."
    }
  ],
  relatedList: [
    { label: "Millimole to Mole", from: "millimole", to: "mole" },
    { label: "Millimole to Micromole", from: "millimole", to: "micromole" },
    { label: "Millimole to Nanomole", from: "millimole", to: "nanomole" },
    { label: "Mole to Kilomole", from: "mole", to: "kilomole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry (Green Book).",
    "Perry's Chemical Engineers' Handbook (9th Edition)."
  ]
};
