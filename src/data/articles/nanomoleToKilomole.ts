import { CustomArticleData } from "./types";

export const nanomoleToKilomole: CustomArticleData = {
  fromUnitId: "nanomole",
  toUnitId: "kilomole",
  seoTitle: "Nanomole to Kilomole Converter (nmol to kmol)",
  metaDescription: "Convert Nanomoles to Kilomoles (nmol to kmol) accurately. Learn the conversion formula, calculation steps, reference table, and chemical engineering scaling.",
  h1: "Nanomole to Kilomole Converter",
  introduction: [
    "The nanomole (nmol) and kilomole (kmol) bridge an astounding twelve orders of magnitude (10¹²) in chemical substance measurement. While the nanomole is the preferred unit in molecular biology, gene synthesis, and ultra-trace clinical endocrinology, the kilomole is the fundamental molar unit for industrial petrochemical refining, bulk chemical manufacturing, and plant-wide stoichiometric material balances.",
    "Because one kilomole equals 1,000 moles (10³ mol) and one nanomole equals one-billionth of a mole (10⁻⁹ mol), there are exactly one trillion (10¹² or 1,000,000,000,000) nanomoles in a single kilomole. Converting nanomoles to kilomoles is performed by dividing the nanomole value by 10¹² (or multiplying by 10⁻¹²).",
    "Use our interactive online calculator above for instant multi-scale conversions, or explore the mathematical formula, detailed examples, scaling table, and industrial engineering guidelines below."
  ],
  quickAnswer: {
    text: "To convert Nanomoles to Kilomoles, divide the quantity in nanomoles by 1,000,000,000,000 (10¹²) or multiply by 10⁻¹². For example, 1,000,000,000,000 nmol equals exactly 1 kmol, and 500,000,000,000 nmol equals 0.5 kmol.",
    formulaDisplay: "kmol = nmol ÷ 1,000,000,000,000 = nmol × 10⁻¹²",
    subtext: "1 Nanomole is equal to exactly 10⁻¹² Kilomoles (0.000000000001 kmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Nanomole (nmol)",
    text: "The nanomole (symbol: nmol) is an SI sub-multiple representing 10⁻⁹ moles (6.02214076 × 10¹⁴ elementary particles). It is standard in molecular biology, PCR primer synthesis, high-throughput drug screening, and hormonal immunoassays."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilomole (kmol)",
    text: "The kilomole (symbol: kmol) is a decimal multiple of the mole representing 1,000 moles (10³ mol) or 6.02214076 × 10²⁶ elementary entities. It is the primary molar unit used in chemical engineering, petrochemical continuous distillation, and bulk reactor design."
  },
  relationship: "The relationship spans 12 orders of magnitude (10¹²): 1 kmol = 1,000,000,000,000 nmol, and 1 nmol = 10⁻¹² kmol.",
  relationshipTitle: "Nanomole to Kilomole Scale Hierarchy",
  relationshipItems: [
    { label: "1 nmol", value: "10⁻¹² kmol (Single PCR primer tube)" },
    { label: "1,000,000 nmol (1 mmol)", value: "10⁻⁶ kmol (Laboratory flask reagent)" },
    { label: "1,000,000,000 nmol (1 mol)", value: "10⁻³ kmol (Standard benchtop reagent bottle)" },
    { label: "100,000,000,000 nmol (100 mol)", value: "0.1 kmol (Pilot plant reactor batch)" },
    { label: "1,000,000,000,000 nmol (1,000 mol)", value: "1.0 kmol (Industrial railcar / tank reactor standard)" }
  ],
  formula: {
    text: "Divide the amount of substance in nanomoles by 1,000,000,000,000 (10¹²) to determine the equivalent quantity in kilomoles.",
    math: "kmol = nmol / 1000000000000",
    subtext: "To convert kilomoles back to nanomoles, multiply the kilomole value by 1,000,000,000,000."
  },
  formulaTitle: "Nanomole to Kilomole Conversion Formula",
  practicalTip: {
    title: "Scientific Notation in Multi-Scale Modeling",
    text: "Always utilize scientific notation when performing multi-scale chemical calculations to avoid trailing-zero errors: write 2.5 × 10¹¹ nmol as 0.25 kmol."
  },
  expertNote: {
    title: "Ultra-Trace Catalyst Poisoning Calculations",
    text: "In industrial polymer plants, trace catalyst poisons (such as trace phosphines or acetylenes) measured at parts-per-billion (nanomole/kg) levels are converted to total kilomoles across millions of liters of reactor feed to evaluate catalyst deactivation rates."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Trace Contaminant in Industrial Ethylene Feed",
        subtitle: "Convert 250,000,000,000 nanomoles of trace impurity into kilomoles.",
        steps: [
          "Identify the given nanomole value: 250,000,000,000 nmol (2.5 × 10¹¹ nmol).",
          "Apply the conversion formula: kmol = 2.5 × 10¹¹ ÷ 10¹².",
          "Calculate: 2.5 × 10¹¹ × 10⁻¹² = 0.25 kmol.",
          "Result: 250,000,000,000 nmol equals 0.25 kmol."
        ]
      },
      {
        title: "Example 2: Pilot Bioreactor Cumulative Micronutrient Feed",
        subtitle: "Convert 50,000,000,000 nanomoles of vitamin cofactor into kilomoles.",
        steps: [
          "Identify the value: 50,000,000,000 nmol (5.0 × 10¹⁰ nmol).",
          "Divide by 10¹²: 5.0 × 10¹⁰ ÷ 10¹² = 0.05 kmol.",
          "Result: 50,000,000,000 nanomoles equals 0.05 kilomoles (50 moles)."
        ]
      },
      {
        title: "Example 3: High-Sensitivity Assay Standard Total Stock",
        subtitle: "Convert 10,000,000,000 nanomoles of synthesized peptide into kilomoles.",
        steps: [
          "Identify the value: 10,000,000,000 nmol (1.0 × 10¹⁰ nmol).",
          "Divide by 10¹²: 1.0 × 10¹⁰ ÷ 10¹² = 0.01 kmol (10 moles).",
          "Result: 10,000,000,000 nanomoles equals 0.01 kilomoles."
        ]
      }
    ]
  },
  table: {
    title: "Nanomole to Kilomole Reference Table",
    headers: ["Nanomoles (nmol)", "Kilomoles (kmol)", "Scientific Notation (kmol)"],
    rows: [
      { fromVal: "1,000,000,000 nmol (1 mol)", toVal: "0.001 kmol", extra: "1.0 × 10⁻³ kmol" },
      { fromVal: "10,000,000,000 nmol", toVal: "0.01 kmol", extra: "1.0 × 10⁻² kmol" },
      { fromVal: "50,000,000,000 nmol", toVal: "0.05 kmol", extra: "5.0 × 10⁻² kmol" },
      { fromVal: "100,000,000,000 nmol", toVal: "0.1 kmol", extra: "1.0 × 10⁻¹ kmol" },
      { fromVal: "250,000,000,000 nmol", toVal: "0.25 kmol", extra: "2.5 × 10⁻¹ kmol" },
      { fromVal: "500,000,000,000 nmol", toVal: "0.5 kmol", extra: "5.0 × 10⁻¹ kmol" },
      { fromVal: "1,000,000,000,000 nmol", toVal: "1.0 kmol", extra: "1.0 × 10⁰ kmol" },
      { fromVal: "2,500,000,000,000 nmol", toVal: "2.5 kmol", extra: "2.5 × 10⁰ kmol" },
      { fromVal: "5,000,000,000,000 nmol", toVal: "5.0 kmol", extra: "5.0 × 10⁰ kmol" },
      { fromVal: "10,000,000,000,000 nmol", toVal: "10.0 kmol", extra: "1.0 × 10¹ kmol" }
    ]
  },
  applications: {
    title: "Practical Applications of nmol to kmol Conversion",
    items: [
      {
        title: "Industrial Petrochemical Catalyst Poisoning",
        text: "Process engineers monitor trace catalyst poison concentrations (ppb / nmol/kg) and calculate cumulative catalyst exposure in kilomoles to predict maintenance shutdowns."
      },
      {
        title: "Environmental Watershed Contaminant Tracking",
        text: "Environmental scientists model agricultural pesticide runoff by converting nanomolar concentrations into total kilomoles of substance transported across river basins annually."
      },
      {
        title: "Biopharmaceutical Bioprocess Scaling",
        text: "Scale-up engineers bridge discovery-scale microplate screening data (nmol) to multi-ton commercial bioreactor nutrient feeding schedules (kmol)."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Missing orders of magnitude: 1 kmol = 10¹² nmol (one trillion nanomoles), not 10⁹ or 10⁶.",
      "Decimal zero errors: Avoid writing long strings of manual zeros; always use scientific notation ($10^{-12}$) for reliability.",
      "Unit prefix confusion: Ensure 'nmol' (10⁻⁹ mol) is not confused with 'µmol' (10⁻⁶ mol) or 'pmol' (10⁻¹² mol)."
    ]
  },
  faqs: [
    {
      question: "How many nanomoles are in 1 kilomole?",
      answer: "There are exactly 1,000,000,000,000 (1 trillion or 10¹²) nanomoles in 1 kilomole."
    },
    {
      question: "What is the formula to convert nanomoles to kilomoles?",
      answer: "The formula is: Kilomoles (kmol) = Nanomoles (nmol) ÷ 1,000,000,000,000 (or nmol × 10⁻¹²)."
    },
    {
      question: "What is 100,000,000,000 nmol in kmol?",
      answer: "100,000,000,000 nmol equals 0.1 kmol (100 moles)."
    },
    {
      question: "How many moles are in 1 kmol?",
      answer: "There are 1,000 moles in 1 kilomole."
    },
    {
      question: "How do I convert kilomoles back to nanomoles?",
      answer: "Multiply the kilomole value by 1,000,000,000,000 (e.g., 0.05 kmol × 10¹² = 50,000,000,000 nmol)."
    },
    {
      question: "Why does 1 kmol equal 10¹² nmol?",
      answer: "Because 1 kmol = 10³ mol and 1 mol = 10⁹ nmol, multiplying them gives 10³ × 10⁹ = 10¹² nmol."
    },
    {
      question: "How many particles are in 1 kilomole?",
      answer: "One kilomole contains 6.02214076 × 10²⁶ elementary particles."
    },
    {
      question: "What is the symbol for nanomoles and kilomoles?",
      answer: "The symbol for nanomole is 'nmol' and the symbol for kilomole is 'kmol'."
    }
  ],
  relatedList: [
    { label: "Nanomole to Mole", from: "nanomole", to: "mole" },
    { label: "Nanomole to Micromole", from: "nanomole", to: "micromole" },
    { label: "Kilomole to Nanomole", from: "kilomole", to: "nanomole" },
    { label: "Kilomole to Mole", from: "kilomole", to: "mole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "Perry's Chemical Engineers' Handbook (9th Edition, McGraw-Hill).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry."
  ]
};
