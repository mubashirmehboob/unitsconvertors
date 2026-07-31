import { CustomArticleData } from "./types";

export const micromoleToMole: CustomArticleData = {
  fromUnitId: "micromole",
  toUnitId: "mole",
  seoTitle: "Micromole to Mole Converter (µmol to mol)",
  metaDescription: "Convert Micromoles to Moles (µmol to mol) accurately. Learn the conversion formula, step-by-step calculation examples, reference table, and expert FAQs.",
  h1: "Micromole to Mole Converter",
  introduction: [
    "The micromole (µmol) and mole (mol) are metric units used across analytical chemistry, clinical biochemistry, and molecular biology to express the amount of a chemical substance. While micromoles measure micro-scale cellular metabolites, enzyme activity rates, and trace biomarkers, moles serve as the base SI unit for chemical stoichiometry calculations.",
    "Because one micromole represents one-millionth of a mole (10⁻⁶ mol), converting micromoles to moles requires dividing the micromole value by 1,000,000.",
    "Use our online converter above for fast calculations, or consult the formula, worked examples, reference table, and scientific explanations below."
  ],
  quickAnswer: {
    text: "To convert Micromoles to Moles, divide the quantity in micromoles by 1,000,000 (10⁶). For example, 5,000 µmol equals 0.005 mol, and 250 µmol equals 0.00025 mol.",
    formulaDisplay: "mol = µmol ÷ 1,000,000",
    subtext: "1 Micromole is equal to exactly 0.000001 Moles (10⁻⁶ mol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Micromole (µmol)",
    text: "The micromole (symbol: µmol or umol) is a decimal fraction equal to one-millionth of a mole (10⁻⁶ mol). It is widely used in cellular biology, clinical diagnostic panels, pharmacology, and enzyme kinetics."
  },
  aboutTargetUnit: {
    title: "Understanding the Mole (mol)",
    text: "The mole (symbol: mol) is the base SI unit for amount of substance. Officially defined by BIPM as containing fixed 6.02214076 × 10²³ elementary entities, it is fundamental to all chemical calculations."
  },
  relationship: "The relationship between micromoles and moles is based on metric powers of ten: 1 µmol = 0.000001 mol, and 1 mol = 1,000,000 µmol.",
  relationshipTitle: "Micromolar to Base Molar Scale",
  relationshipItems: [
    { label: "1 µmol", value: "0.000001 mol (Trace biomarker detection level)" },
    { label: "100 µmol", value: "0.0001 mol (Microplate assay well amount)" },
    { label: "1,000 µmol", value: "0.001 mol (1 Millimole equivalent)" },
    { label: "50,000 µmol", value: "0.05 mol (Benchtop synthesis reactant charge)" },
    { label: "1,000,000 µmol", value: "1.0 mol (1 Mole baseline)" }
  ],
  formula: {
    text: "Divide the substance quantity in micromoles by 1,000,000 (10⁶) to find the equivalent value in moles.",
    math: "mol = µmol / 1000000",
    subtext: "To convert moles back to micromoles, multiply the molar value by 1,000,000."
  },
  formulaTitle: "Micromole to Mole Formula",
  practicalTip: {
    title: "Scientific Notation Rule",
    text: "To convert micromoles expressed as an integer to moles in scientific notation, multiply by 10⁻⁶. For example, 450 µmol becomes 4.5 × 10⁻⁴ mol (0.00045 mol)."
  },
  expertNote: {
    title: "Enzyme Catalysis & Mass Balance",
    text: "Biochemists monitoring substrate depletion rates recorded in µmol/min convert total substrate consumed into moles before calculating overall mass balance in grams using molar mass: Mass (g) = Moles × Molar Mass (g/mol)."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Clinical Pathology Serum Analysis",
        subtitle: "Convert 650 micromoles of serum uric acid per liter into moles per liter.",
        steps: [
          "Identify the given micromole value: 650 µmol.",
          "Apply the conversion formula: mol = 650 ÷ 1,000,000.",
          "Calculate: 650 ÷ 1,000,000 = 0.00065 mol.",
          "Result: 650 µmol equals 0.00065 moles (6.5 × 10⁻⁴ mol)."
        ]
      },
      {
        title: "Example 2: Neurotransmitter Extraction",
        subtitle: "Convert 12,500 micromoles of dopamine extracted from neural tissue into moles.",
        steps: [
          "Identify the value: 12,500 µmol.",
          "Divide by 1,000,000: 12,500 ÷ 1,000,000 = 0.0125 mol.",
          "Result: 12,500 micromoles equals 0.0125 moles."
        ]
      },
      {
        title: "Example 3: Enzymatic Substrate Consumption",
        subtitle: "Convert 2,400 micromoles of glucose consumed during fermentation into moles.",
        steps: [
          "Identify the value: 2,400 µmol.",
          "Divide by 1,000,000: 2,400 ÷ 1,000,000 = 0.0024 mol.",
          "Result: 2,400 micromoles equals 0.0024 moles."
        ]
      }
    ]
  },
  table: {
    title: "Micromole to Mole Reference Table",
    headers: ["Micromoles (µmol)", "Moles (mol)", "Application Context"],
    rows: [
      { fromVal: "1 µmol", toVal: "0.000001 mol", extra: "Micro-scale biomarker detection" },
      { fromVal: "10 µmol", toVal: "0.00001 mol", extra: "Intracellular messenger pool" },
      { fromVal: "100 µmol", toVal: "0.0001 mol", extra: "High-throughput drug screening well" },
      { fromVal: "500 µmol", toVal: "0.0005 mol", extra: "Spectrophotometric assay cuvette" },
      { fromVal: "1,000 µmol", toVal: "0.001 mol", extra: "1 Millimole equivalent" },
      { fromVal: "10,000 µmol", toVal: "0.01 mol", extra: "Preparative HPLC fraction" },
      { fromVal: "100,000 µmol", toVal: "0.1 mol", extra: "Benchtop synthesis reactant charge" },
      { fromVal: "1,000,000 µmol", toVal: "1.0 mol", extra: "1 Mole baseline benchmark" }
    ]
  },
  applications: {
    title: "Practical Applications of µmol to mol Conversion",
    items: [
      {
        title: "Clinical Diagnostics & Metabolic Panels",
        text: "Pathology labs convert blood metabolites (e.g., bilirubin, creatinine, triglycerides) from micromoles to moles when performing stoichiometric kinetic calculations in biochemical modeling."
      },
      {
        title: "Enzyme Kinetics & Assay Development",
        text: "Biochemists measuring initial reaction rates convert micro-scale product accumulation (µmol) into moles to calculate catalytic rate constants (kcat) and turnover numbers."
      },
      {
        title: "Pharmaceutical Quality Assurance",
        text: "Analytical chemists convert micro-gram assay impurities into micromoles, then to moles to verify stoichiometric compliance against regulatory specifications."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Multiplying instead of dividing: Moving from a smaller unit (micromoles) to a larger base unit (moles) requires dividing by 1,000,000.",
      "Decimal placement errors: A mistake of a single zero leads to a 10-fold calculation error; double-check leading zeros or use scientific notation.",
      "Symbol ambiguity: Ensure 'µmol' is not confused with 'mmol' (millimoles) or 'nmol' (nanomoles)."
    ]
  },
  faqs: [
    {
      question: "How many moles are in 1 micromole?",
      answer: "There are exactly 0.000001 moles (10⁻⁶ mol) in 1 micromole."
    },
    {
      question: "What is the formula to convert micromoles to moles?",
      answer: "The formula is: Moles (mol) = Micromoles (µmol) ÷ 1,000,000."
    },
    {
      question: "How do I convert 5,000 micromoles to moles?",
      answer: "Divide 5,000 by 1,000,000 to get 0.005 moles (mol)."
    },
    {
      question: "What is 1,000,000 µmol in moles?",
      answer: "1,000,000 micromoles equals exactly 1 mole."
    },
    {
      question: "How many moles is 1,000 µmol?",
      answer: "1,000 micromoles equals 0.001 moles (which is also equal to 1 millimole)."
    },
    {
      question: "How do I convert micromoles back to moles?",
      answer: "Divide the micromole value by 1,000,000 (e.g., 250,000 µmol ÷ 1,000,000 = 0.25 mol)."
    },
    {
      question: "What is the difference between µM and mol/L?",
      answer: "µM (micromolar) represents micromoles per liter. 1 µM = 0.000001 mol/L (10⁻⁶ M)."
    },
    {
      question: "How many molecules are in a micromole?",
      answer: "One micromole contains approximately 6.02214076 × 10¹⁷ elementary entities."
    }
  ],
  relatedList: [
    { label: "Mole to Micromole", from: "mole", to: "micromole" },
    { label: "Micromole to Millimole", from: "micromole", to: "millimole" },
    { label: "Micromole to Nanomole", from: "micromole", to: "nanomole" },
    { label: "Millimole to Mole", from: "millimole", to: "mole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry (Green Book).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units."
  ]
};
