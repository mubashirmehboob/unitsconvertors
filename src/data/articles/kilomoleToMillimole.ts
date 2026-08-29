import { CustomArticleData } from "./types";

export const kilomoleToMillimole: CustomArticleData = {
  fromUnitId: "kilomole",
  toUnitId: "millimole",
  seoTitle: "Kilomole to Millimole Converter (kmol to mmol)",
  metaDescription: "Convert Kilomoles to Millimoles (kmol to mmol) accurately. Learn the conversion formula, calculation steps, reference table, and industrial scaling examples.",
  h1: "Kilomole to Millimole Converter",
  introduction: [
    "The kilomole (kmol) and millimole (mmol) represent a one-million-fold (10⁶) scale transition in chemical substance measurement. While kilomoles are the primary molar unit utilized in bulk chemical manufacturing, petrochemical continuous processing, and industrial material balances, millimoles are ubiquitous in laboratory titrations, pharmaceutical formulations, and clinical chemistry panels.",
    "Because one kilomole equals 1,000 moles (10³ mol) and one millimole equals one-thousandth of a mole (10⁻³ mol), there are exactly one million millimoles (1,000,000 mmol) in a single kilomole. Converting kilomoles to millimoles is performed by multiplying the kilomole value by 1,000,000.",
    "Use our interactive online converter above for fast calculations, or explore the conversion formula, worked examples, reference conversion table, and process scale-up guidelines below."
  ],
  quickAnswer: {
    text: "To convert Kilomoles to Millimoles, multiply the quantity in kilomoles by 1,000,000 (10⁶). For example, 2 kmol equals 2,000,000 mmol, and 0.05 kmol equals 50,000 mmol.",
    formulaDisplay: "mmol = kmol × 1,000,000 = kmol × 10⁶",
    subtext: "1 Kilomole is equal to exactly 1,000,000 Millimoles (10⁶ mmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilomole (kmol)",
    text: "The kilomole (symbol: kmol) is an SI decimal multiple equal to 1,000 moles (10³ mol) or approximately 6.02214076 × 10²⁶ elementary entities. It is standard across chemical process engineering, bulk reactor design, and industrial stream enthalpy calculations."
  },
  aboutTargetUnit: {
    title: "Understanding the Millimole (mmol)",
    text: "The millimole (symbol: mmol) is an SI sub-multiple representing 10⁻³ moles (6.02214076 × 10²⁰ elementary particles). It is standard in analytical laboratory titrations, pharmaceutical active ingredient compounding, and clinical diagnostic panels."
  },
  relationship: "The relationship spans six orders of magnitude (10⁶): 1 kmol = 1,000,000 mmol, and 1 mmol = 0.000001 kmol (10⁻⁶ kmol).",
  relationshipTitle: "Kilomole to Millimole Scale Hierarchy",
  relationshipItems: [
    { label: "0.000001 kmol (1 mmol)", value: "1,000 mmol (1 Mole benchmark)" },
    { label: "0.001 kmol (1 mol)", value: "1,000 mmol (Benchtop reagent bottle)" },
    { label: "0.05 kmol (50 mol)", value: "50,000 mmol (Pilot plant charge)" },
    { label: "0.5 kmol (500 mol)", value: "500,000 mmol (Commercial batch charge)" },
    { label: "1.0 kmol (1,000 mol)", value: "1,000,000 mmol (1 Kilomole standard)" }
  ],
  formula: {
    text: "Multiply the amount of substance in kilomoles by 1,000,000 (10⁶) to determine the equivalent quantity in millimoles.",
    math: "mmol = kmol × 1000000",
    subtext: "To convert millimoles back to kilomoles, divide the millimole value by 1,000,000."
  },
  formulaTitle: "Kilomole to Millimole Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Rule for Process Engineers",
    text: "To convert kilomoles to millimoles manually, shift the decimal point six places to the right. For example, 0.035 kmol becomes 35,000 mmol."
  },
  expertNote: {
    title: "Scale-Down Chemistry and Pilot Modeling",
    text: "In industrial scale-down experiments, engineers replicate a commercial 1 kmol reactor stream inside a 1 liter bench reactor requiring 1,000 mmol of reactant, maintaining identical molar concentrations and residence times."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Pilot Batch Chemical Reconstitution",
        subtitle: "Convert 0.025 kilomoles of organic catalyst into millimoles.",
        steps: [
          "Identify the given kilomole value: 0.025 kmol.",
          "Apply the conversion formula: mmol = 0.025 × 1,000,000.",
          "Calculate: 0.025 × 10⁶ = 25,000 mmol.",
          "Result: 0.025 kmol equals 25,000 mmol."
        ]
      },
      {
        title: "Example 2: Industrial Wastewater Neutralization Stream",
        subtitle: "Convert 0.15 kilomoles of dissolved acid effluent into millimoles.",
        steps: [
          "Identify the value: 0.15 kmol.",
          "Multiply by 1,000,000: 0.15 × 1,000,000 = 150,000 mmol.",
          "Result: 0.15 kilomoles equals 150,000 millimoles."
        ]
      },
      {
        title: "Example 3: Continuous Fermentation Nutrient Stream",
        subtitle: "Convert 1.8 kilomoles of glucose feedstock into millimoles.",
        steps: [
          "Identify the value: 1.8 kmol.",
          "Multiply by 10⁶: 1.8 × 10⁶ = 1,800,000 mmol.",
          "Result: 1.8 kilomoles equals 1,800,000 millimoles."
        ]
      }
    ]
  },
  table: {
    title: "Kilomole to Millimole Reference Table",
    headers: ["Kilomoles (kmol)", "Millimoles (mmol)", "Equivalent Moles (mol)"],
    rows: [
      { fromVal: "0.001 kmol", toVal: "1,000 mmol", extra: "1 mol" },
      { fromVal: "0.005 kmol", toVal: "5,000 mmol", extra: "5 mol" },
      { fromVal: "0.01 kmol", toVal: "10,000 mmol", extra: "10 mol" },
      { fromVal: "0.05 kmol", toVal: "50,000 mmol", extra: "50 mol" },
      { fromVal: "0.1 kmol", toVal: "100,000 mmol", extra: "100 mol" },
      { fromVal: "0.25 kmol", toVal: "250,000 mmol", extra: "250 mol" },
      { fromVal: "0.5 kmol", toVal: "500,000 mmol", extra: "500 mol" },
      { fromVal: "1.0 kmol", toVal: "1,000,000 mmol", extra: "1,000 mol" },
      { fromVal: "2.5 kmol", toVal: "2,500,000 mmol", extra: "2,500 mol" },
      { fromVal: "5.0 kmol", toVal: "5,000,000 mmol", extra: "5,000 mol" }
    ]
  },
  applications: {
    title: "Practical Applications of kmol to mmol Conversion",
    items: [
      {
        title: "Pharmaceutical Active Ingredient Formulation",
        text: "Formulation scientists scale commercial bulk synthesis outputs (kmol) down to millimole dosage units when calculating per-vial active drug quantities."
      },
      {
        title: "Industrial Fermentation & Bioprocessing",
        text: "Bioprocess engineers convert large sugar feedstocks (kmol) into millimolar concentrations in bioreactor broth to monitor nutrient consumption rates."
      },
      {
        title: "Water Treatment Chemical Dosing",
        text: "Municipal treatment operators convert bulk coagulant inventory (kmol) into millimolar dosages for daily water purification streams."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Dividing instead of multiplying: Moving from a large unit (kilomoles) to a small sub-unit (millimoles) requires multiplying by 1,000,000 (10⁶).",
      "Multiplying by 1,000 instead of 1,000,000: Multiplying by 1,000 converts kmol to mol, not mmol.",
      "Symbol confusion: Ensure 'kmol' (kilomoles) is not confused with 'mmol' (millimoles) or 'µmol' (micromoles)."
    ]
  },
  faqs: [
    {
      question: "How many millimoles are in 1 kilomole?",
      answer: "There are exactly 1,000,000 (one million or 10⁶) millimoles in 1 kilomole."
    },
    {
      question: "What is the formula to convert kilomoles to millimoles?",
      answer: "The formula is: Millimoles (mmol) = Kilomoles (kmol) × 1,000,000."
    },
    {
      question: "How do you convert 0.05 kilomoles to millimoles?",
      answer: "Multiply 0.05 by 1,000,000 to get 50,000 millimoles (mmol)."
    },
    {
      question: "What is 1 kmol in mmol?",
      answer: "1 kmol equals exactly 1,000,000 mmol."
    },
    {
      question: "How do I convert millimoles back to kilomoles?",
      answer: "Divide the millimole value by 1,000,000 (e.g., 250,000 mmol ÷ 1,000,000 = 0.25 kmol)."
    },
    {
      question: "Why does 1 kmol equal 10⁶ mmol?",
      answer: "Because 1 kmol = 1,000 mol and 1 mol = 1,000 mmol; multiplying 1,000 × 1,000 yields 1,000,000 mmol."
    },
    {
      question: "How many particles are in 1 millimole compared to 1 kilomole?",
      answer: "1 millimole has 6.022 × 10²⁰ particles, while 1 kilomole has 6.022 × 10²⁶ particles (1 million times more)."
    },
    {
      question: "What is the mass of 1 kmol of water in millimole terms?",
      answer: "1 kmol of water is 18.015 kg, containing 1,000,000 mmol (each millimole being 0.018015 g or 18.015 mg)."
    }
  ],
  relatedList: [
    { label: "Kilomole to Mole", from: "kilomole", to: "mole" },
    { label: "Kilomole to Micromole", from: "kilomole", to: "micromole" },
    { label: "Millimole to Kilomole", from: "millimole", to: "kilomole" },
    { label: "Mole to Millimole", from: "mole", to: "millimole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "Perry's Chemical Engineers' Handbook (9th Edition, McGraw-Hill).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry."
  ]
};
