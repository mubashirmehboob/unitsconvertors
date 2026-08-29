import { CustomArticleData } from "./types";

export const kilomoleToNanomole: CustomArticleData = {
  fromUnitId: "kilomole",
  toUnitId: "nanomole",
  seoTitle: "Kilomole to Nanomole Converter (kmol to nmol)",
  metaDescription: "Convert Kilomoles to Nanomoles (kmol to nmol) accurately. Learn the conversion formula, calculation steps, reference table, and industrial to molecular scaling.",
  h1: "Kilomole to Nanomole Converter",
  introduction: [
    "The kilomole (kmol) and nanomole (nmol) bridge twelve orders of magnitude (10¹²) across the spectrum of chemical measurement. While the kilomole is the standard unit for plant-scale chemical engineering, industrial bulk reagents, and petrochemical refining, the nanomole is the fundamental unit for molecular biology, oligonucleotide synthesis, and hormone immunoassays.",
    "Because one kilomole equals 1,000 moles (10³ mol) and one nanomole equals one-billionth of a mole (10⁻⁹ mol), one single kilomole contains exactly one trillion nanomoles (1,000,000,000,000 nmol or 10¹² nmol). Converting kilomoles to nanomoles is performed by multiplying the kilomole value by 1,000,000,000,000.",
    "Use our interactive online converter above for instantaneous conversions, or explore the exact conversion formula, worked examples, reference conversion table, and multi-scale chemical guidelines below."
  ],
  quickAnswer: {
    text: "To convert Kilomoles to Nanomoles, multiply the quantity in kilomoles by 1,000,000,000,000 (10¹²). For example, 1 kmol equals exactly 1,000,000,000,000 nmol, and 0.0001 kmol equals 100,000,000 nmol.",
    formulaDisplay: "nmol = kmol × 1,000,000,000,000 = kmol × 10¹²",
    subtext: "1 Kilomole is equal to exactly 1,000,000,000,000 Nanomoles (10¹² nmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilomole (kmol)",
    text: "The kilomole (symbol: kmol) is an SI decimal multiple equal to 1,000 moles (10³ mol) or approximately 6.02214076 × 10²⁶ elementary particles. It is the primary molar unit used in chemical process simulation, refinery operations, and large-scale industrial stoichiometry."
  },
  aboutTargetUnit: {
    title: "Understanding the Nanomole (nmol)",
    text: "The nanomole (symbol: nmol) is an SI sub-multiple representing 10⁻⁹ moles (6.02214076 × 10¹⁴ elementary entities). It is standard in molecular biology, PCR primer synthesis, ligand-receptor binding assays, and clinical endocrine diagnostics."
  },
  relationship: "The relationship spans 12 orders of magnitude (10¹²): 1 kmol = 1,000,000,000,000 nmol, and 1 nmol = 10⁻¹² kmol.",
  relationshipTitle: "Kilomole to Nanomole Scale Hierarchy",
  relationshipItems: [
    { label: "10⁻¹² kmol", value: "1 nmol (Single PCR primer dry pellet)" },
    { label: "10⁻⁹ kmol", value: "1,000 nmol (1 µmol benchtop assay standard)" },
    { label: "10⁻⁶ kmol", value: "1,000,000 nmol (1 mmol laboratory flask standard)" },
    { label: "10⁻³ kmol", value: "1,000,000,000 nmol (1 mol standard reagent bottle)" },
    { label: "1.0 kmol", value: "1,000,000,000,000 nmol (1 Kilomole industrial unit)" }
  ],
  formula: {
    text: "Multiply the amount of substance in kilomoles by 1,000,000,000,000 (10¹²) to determine the equivalent quantity in nanomoles.",
    math: "nmol = kmol × 1000000000000",
    subtext: "To convert nanomoles back to kilomoles, divide the nanomole value by 1,000,000,000,000."
  },
  formulaTitle: "Kilomole to Nanomole Conversion Formula",
  practicalTip: {
    title: "Scientific Notation Multipliers",
    text: "Always use scientific notation ($10^{12}$) to perform calculations across this wide dynamic range. For example, $3.2 \\times 10^{-4}$ kmol becomes $3.2 \\times 10^8$ nmol (320,000,000 nmol)."
  },
  expertNote: {
    title: "Ultra-Trace Catalyst Contaminant Tolerances",
    text: "In industrial polymer plants, trace catalyst poisons measured in nanomoles per ton of feedstock are multiplied across thousands of kilomoles of bulk monomer to determine cumulative catalyst lifetime and regeneration cycles."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: High-Purity Specialty Reagent Synthesis",
        subtitle: "Convert 0.000045 kilomoles of synthetic peptide precursor into nanomoles.",
        steps: [
          "Identify the given kilomole value: 0.000045 kmol (4.5 × 10⁻⁵ kmol).",
          "Apply the conversion formula: nmol = 4.5 × 10⁻⁵ × 10¹².",
          "Calculate: 4.5 × 10⁷ = 45,000,000 nmol.",
          "Result: 0.000045 kmol equals 45,000,000 nanomoles (45,000 µmol)."
        ]
      },
      {
        title: "Example 2: Scale-Down High-Throughput Oligo Library",
        subtitle: "Convert 0.000001 kilomoles of nucleotide reagent into nanomoles.",
        steps: [
          "Identify the value: 0.000001 kmol (1.0 × 10⁻⁶ kmol = 1 mmol).",
          "Multiply by 10¹²: 1.0 × 10⁻⁶ × 10¹² = 1,000,000 nmol.",
          "Result: 0.000001 kilomoles equals 1,000,000 nanomoles."
        ]
      },
      {
        title: "Example 3: Trace Fluorescent Tracer Addition",
        subtitle: "Convert 0.00025 kilomoles of tracer dye into nanomoles.",
        steps: [
          "Identify the value: 0.00025 kmol (2.5 × 10⁻⁴ kmol).",
          "Multiply by 10¹²: 2.5 × 10⁻⁴ × 10¹² = 250,000,000 nmol.",
          "Result: 0.00025 kilomoles equals 250,000,000 nanomoles."
        ]
      }
    ]
  },
  table: {
    title: "Kilomole to Nanomole Reference Table",
    headers: ["Kilomoles (kmol)", "Nanomoles (nmol)", "Scientific Notation (nmol)"],
    rows: [
      { fromVal: "0.000001 kmol (1 mmol)", toVal: "1,000,000 nmol", extra: "1.0 × 10⁶ nmol" },
      { fromVal: "0.00001 kmol (10 mmol)", toVal: "10,000,000 nmol", extra: "1.0 × 10⁷ nmol" },
      { fromVal: "0.0001 kmol (100 mmol)", toVal: "100,000,000 nmol", extra: "1.0 × 10⁸ nmol" },
      { fromVal: "0.001 kmol (1 mol)", toVal: "1,000,000,000 nmol", extra: "1.0 × 10⁹ nmol" },
      { fromVal: "0.01 kmol (10 mol)", toVal: "10,000,000,000 nmol", extra: "1.0 × 10¹⁰ nmol" },
      { fromVal: "0.1 kmol (100 mol)", toVal: "100,000,000,000 nmol", extra: "1.0 × 10¹¹ nmol" },
      { fromVal: "0.5 kmol (500 mol)", toVal: "500,000,000,000 nmol", extra: "5.0 × 10¹¹ nmol" },
      { fromVal: "1.0 kmol (1,000 mol)", toVal: "1,000,000,000,000 nmol", extra: "1.0 × 10¹² nmol" },
      { fromVal: "2.5 kmol (2,500 mol)", toVal: "2,500,000,000,000 nmol", extra: "2.5 × 10¹² nmol" },
      { fromVal: "5.0 kmol (5,000 mol)", toVal: "5,000,000,000,000 nmol", extra: "5.0 × 10¹² nmol" }
    ]
  },
  applications: {
    title: "Practical Applications of kmol to nmol Conversion",
    items: [
      {
        title: "Industrial Petrochemical Catalyst Poisoning",
        text: "Refinery engineers multiply trace impurity ratios (ppb / nmol/kg) across continuous feed streams (kmol/h) to predict catalyst poisoning rates."
      },
      {
        title: "Biotech High-Throughput Synthesis Scale-Down",
        text: "Biotech engineers scale industrial bulk chemical inventories (kmol) down to nanomole-level dispensing on robotic screening arrays."
      },
      {
        title: "Environmental Trace Contaminant Mass Balance",
        text: "Environmental scientists model mega-ton river basin discharges (kmol) down to nanomolar ecotoxicological exposure levels for aquatic organisms."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Dividing instead of multiplying: Moving from a large unit (kilomoles) to a small sub-multiple (nanomoles) requires multiplying by 10¹².",
      "Multiplying by 10⁹ instead of 10¹²: Multiplying by 10⁹ gives micromoles (µmol), not nanomoles (nmol).",
      "Symbol confusion: Ensure 'kmol' (10³ mol) is distinct from 'nmol' (10⁻⁹ mol) and 'pmol' (10⁻¹² mol)."
    ]
  },
  faqs: [
    {
      question: "How many nanomoles are in 1 kilomole?",
      answer: "There are exactly 1,000,000,000,000 (one trillion or 10¹²) nanomoles in 1 kilomole."
    },
    {
      question: "What is the formula to convert kilomoles to nanomoles?",
      answer: "The formula is: Nanomoles (nmol) = Kilomoles (kmol) × 1,000,000,000,000."
    },
    {
      question: "How do you convert 0.0005 kilomoles to nanomoles?",
      answer: "Multiply 0.0005 by 1,000,000,000,000 to get 500,000,000 nanomoles (500 million nmol)."
    },
    {
      question: "What is 1 kmol in nmol?",
      answer: "1 kmol equals 10¹² (1,000,000,000,000) nanomoles."
    },
    {
      question: "How do I convert nanomoles back to kilomoles?",
      answer: "Divide the nanomole value by 1,000,000,000,000 (e.g., 250,000,000,000 nmol ÷ 10¹² = 0.25 kmol)."
    },
    {
      question: "Why does 1 kmol equal 10¹² nmol?",
      answer: "Because 1 kmol = 10³ mol and 1 mol = 10⁹ nmol, multiplying them gives 10³ × 10⁹ = 10¹² nmol."
    },
    {
      question: "How many molecules are in 1 kilomole?",
      answer: "One kilomole contains 6.02214076 × 10²⁶ elementary entities."
    },
    {
      question: "What is the difference between nmol and kmol?",
      answer: "A nanomole (10⁻⁹ mol) is one-trillionth of a kilomole (10³ mol), representing a 10¹² dynamic range."
    }
  ],
  relatedList: [
    { label: "Nanomole to Kilomole", from: "nanomole", to: "kilomole" },
    { label: "Kilomole to Mole", from: "kilomole", to: "mole" },
    { label: "Kilomole to Millimole", from: "kilomole", to: "millimole" },
    { label: "Kilomole to Micromole", from: "kilomole", to: "micromole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "Perry's Chemical Engineers' Handbook (9th Edition, McGraw-Hill).",
    "IUPAC Compendium of Chemical Terminology (Gold Book)."
  ]
};
