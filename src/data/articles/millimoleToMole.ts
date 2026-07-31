import { CustomArticleData } from "./types";

export const millimoleToMole: CustomArticleData = {
  fromUnitId: "millimole",
  toUnitId: "mole",
  seoTitle: "Millimole to Mole Converter (mmol to mol)",
  metaDescription: "Convert Millimoles to Moles (mmol to mol) with instant precision. Learn the conversion formula, calculation steps, reference table, and expert FAQs.",
  h1: "Millimole to Mole Converter",
  introduction: [
    "The millimole (mmol) and mole (mol) are metric units used across analytical chemistry, clinical biochemistry, and pharmaceutical formulation to measure the amount of a chemical substance. While clinical laboratories measure electrolytes and blood metabolites in millimoles, stoichiometry calculations in synthesis recipes require base SI moles.",
    "Because one millimole is defined as one-thousandth of a mole (10⁻³ mol), converting millimoles to moles requires dividing the millimole quantity by 1,000.",
    "Utilize our online converter above for fast results, or consult the conversion formula, step-by-step examples, reference table, and clinical explanations below."
  ],
  quickAnswer: {
    text: "To convert Millimoles to Moles, divide the quantity in millimoles by 1,000. For example, 500 mmol equals 0.5 mol, and 25 mmol equals 0.025 mol.",
    formulaDisplay: "mol = mmol ÷ 1,000",
    subtext: "1 Millimole is equal to exactly 0.001 Moles (10⁻³ mol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Millimole (mmol)",
    text: "The millimole (symbol: mmol) is a decimal fraction of the SI base unit for amount of substance, equal to 0.001 moles. It is the primary unit used in medicine, clinical diagnostics, and trace solute biochemistry."
  },
  aboutTargetUnit: {
    title: "Understanding the Mole (mol)",
    text: "The mole (symbol: mol) is the SI base unit for amount of substance. Defined in 2019 by international consensus, one mole contains exactly 6.02214076 × 10²³ elementary entities."
  },
  relationship: "The relationship between millimoles and moles is fixed by the SI prefix system: 1 mmol = 0.001 mol, and 1 mol = 1,000 mmol.",
  relationshipTitle: "Millimolar to Molar Scale Conversion",
  relationshipItems: [
    { label: "1 mmol", value: "0.001 mol (Standard clinical electrolyte fraction)" },
    { label: "50 mmol", value: "0.05 mol (Biochemical buffer solute amount)" },
    { label: "250 mmol", value: "0.25 mol (Analytical titration charge)" },
    { label: "500 mmol", value: "0.5 mol (Half-mole benchmark)" },
    { label: "1,000 mmol", value: "1.0 mol (1 Mole baseline)" }
  ],
  formula: {
    text: "Divide the substance amount in millimoles by 1,000 to determine the equivalent in moles.",
    math: "mol = mmol / 1000",
    subtext: "To convert moles back to millimoles, multiply the molar value by 1,000."
  },
  formulaTitle: "Millimole to Mole Formula",
  practicalTip: {
    title: "Mental Calculation Shortcut",
    text: "To convert millimoles to moles quickly, move the decimal point three places to the left. For example, 150 mmol becomes 0.15 mol."
  },
  expertNote: {
    title: "Hospital Pharmacy & Solution Preparation",
    text: "Hospital pharmacists frequently convert IV electrolyte orders (e.g., 40 mmol Potassium Chloride) into moles to calculate total solute mass in grams using molar mass: Mass (g) = Moles × Molar Mass (g/mol)."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Intravenous Electrolyte Dosing",
        subtitle: "Convert 80 millimoles of sodium bicarbonate (NaHCO₃) into moles for a pharmaceutical solution calculation.",
        steps: [
          "Identify the given millimole value: 80 mmol.",
          "Apply the conversion formula: mol = 80 ÷ 1,000.",
          "Calculate: 80 ÷ 1,000 = 0.08 mol.",
          "Result: 80 millimoles equals 0.08 moles."
        ]
      },
      {
        title: "Example 2: Laboratory Buffer Preparation",
        subtitle: "Convert 450 millimoles of Tris base into moles to calculate mass needed for a 1-liter buffer solution.",
        steps: [
          "Identify the millimole value: 450 mmol.",
          "Divide by 1,000: 450 ÷ 1,000 = 0.45 mol.",
          "Result: 450 millimoles equals 0.45 moles."
        ]
      },
      {
        title: "Example 3: Food Quality Control Testing",
        subtitle: "Convert 12.5 millimoles of citric acid found in a fruit juice batch into moles.",
        steps: [
          "Identify the value: 12.5 mmol.",
          "Divide by 1,000: 12.5 ÷ 1,000 = 0.0125 mol.",
          "Result: 12.5 millimoles equals 0.0125 moles."
        ]
      }
    ]
  },
  table: {
    title: "Millimole to Mole Reference Table",
    headers: ["Millimoles (mmol)", "Moles (mol)", "Application Context"],
    rows: [
      { fromVal: "1 mmol", toVal: "0.001 mol", extra: "Clinical blood metabolite baseline" },
      { fromVal: "5 mmol", toVal: "0.005 mol", extra: "Physiological blood glucose pool" },
      { fromVal: "10 mmol", toVal: "0.01 mol", extra: "Micro-scale titration endpoint" },
      { fromVal: "50 mmol", toVal: "0.05 mol", extra: "Standard biochemical assay solute" },
      { fromVal: "100 mmol", toVal: "0.1 mol", extra: "0.1 Molar stock solution component" },
      { fromVal: "250 mmol", toVal: "0.25 mol", extra: "Benchtop synthesis reagent" },
      { fromVal: "500 mmol", toVal: "0.5 mol", extra: "Organic synthesis reactant charge" },
      { fromVal: "1,000 mmol", toVal: "1.0 mol", extra: "1 Mole reference baseline" }
    ]
  },
  applications: {
    title: "Practical Applications of mmol to mol Conversion",
    items: [
      {
        title: "Clinical Diagnostics & Renal Medicine",
        text: "Pathology reports present serum electrolytes, urea, and creatinine in mmol/L. Converting clinical assay results to moles allows research pharmacologists to evaluate drug-target binding stoichiometries."
      },
      {
        title: "Pharmaceutical Compounding",
        text: "Formulation scientists convert millimoles of active pharmaceutical ingredients (APIs) into moles to verify stoichiometric compliance before multiplying by molar mass to determine batch weights."
      },
      {
        title: "Food Science & Beverage Fermentation",
        text: "Enologists measure organic acid levels (titratable acidity) in millimoles per liter and convert to moles to determine precise sulfur dioxide treatment levels."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Multiplying instead of dividing: Moving from a smaller metric subunit (millimoles) to a larger unit (moles) requires division by 1,000.",
      "Confusing mmol/L with mg/dL: Millimoles measure chemical particle count, whereas milligrams per deciliter measure mass density. Conversion requires the molar mass of the compound.",
      "Symbol typos: Do not write 'Mmol' (Megamoles) when you intend to write 'mmol' (millimoles)."
    ]
  },
  faqs: [
    {
      question: "How many moles are in 1 millimole?",
      answer: "There are exactly 0.001 moles (10⁻³ mol) in 1 millimole."
    },
    {
      question: "What is the formula to convert millimoles to moles?",
      answer: "The formula is: Moles (mol) = Millimoles (mmol) ÷ 1,000."
    },
    {
      question: "How do I convert 250 millimoles to moles?",
      answer: "Divide 250 by 1,000 to get 0.25 moles (mol)."
    },
    {
      question: "What is 1,000 mmol in moles?",
      answer: "1,000 millimoles equals exactly 1 mole."
    },
    {
      question: "How do I convert mmol to grams?",
      answer: "First convert mmol to moles by dividing by 1,000, then multiply by the compound's molar mass (g/mol): Grams = (mmol ÷ 1,000) × Molar Mass."
    },
    {
      question: "Why convert millimoles to moles in chemical calculations?",
      answer: "Standard chemical equations and thermodynamic formulas use base SI moles. Converting clinical or laboratory millimoles to moles is essential for accurate stoichiometry."
    },
    {
      question: "How do I convert moles back to millimoles?",
      answer: "Multiply the mole quantity by 1,000 (e.g., 0.75 mol × 1,000 = 750 mmol)."
    },
    {
      question: "How many particles are in a millimole?",
      answer: "One millimole contains 6.02214076 × 10²⁰ elementary entities."
    }
  ],
  relatedList: [
    { label: "Mole to Millimole", from: "mole", to: "millimole" },
    { label: "Millimole to Micromole", from: "millimole", to: "micromole" },
    { label: "Millimole to Nanomole", from: "millimole", to: "nanomole" },
    { label: "Millimole to Kilomole", from: "millimole", to: "kilomole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry (Green Book).",
    "NIST Special Publication 330: The International System of Units."
  ]
};
