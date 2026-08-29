import { CustomArticleData } from "./types";

export const nanomoleToMole: CustomArticleData = {
  fromUnitId: "nanomole",
  toUnitId: "mole",
  seoTitle: "Nanomole to Mole Converter (nmol to mol)",
  metaDescription: "Convert Nanomoles to Moles (nmol to mol) accurately. Learn the conversion formula, calculation steps, reference table, and molecular biology applications.",
  h1: "Nanomole to Mole Converter",
  introduction: [
    "The nanomole (nmol) and mole (mol) measure the amount of chemical substance across nine decimal orders of magnitude. While the mole is the fundamental SI base unit used for standard laboratory stoichiometry, thermodynamic equations, and bulk reagent preparations, the nanomole is widely used in molecular genetics, nucleic acid quantification, ligand-receptor binding assays, and endocrine hormone diagnostics.",
    "Because the nano- prefix denotes 10⁻⁹ (one-billionth), one mole contains exactly one billion nanomoles (1,000,000,000 nmol). Converting nanomoles to moles is performed by dividing the nanomole value by 1,000,000,000 (or multiplying by 10⁻⁹).",
    "Use our interactive online calculator above for rapid lab conversions, or read through the mathematical formula, detailed examples, reference table, and laboratory guidelines below."
  ],
  quickAnswer: {
    text: "To convert Nanomoles to Moles, divide the quantity in nanomoles by 1,000,000,000 (or multiply by 10⁻⁹). For example, 500,000,000 nmol equals 0.5 mol, and 25 nmol equals 2.5 × 10⁻⁸ mol.",
    formulaDisplay: "mol = nmol ÷ 1,000,000,000 = nmol × 10⁻⁹",
    subtext: "1 Nanomole is equal to exactly 10⁻⁹ Moles (0.000000001 mol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Nanomole (nmol)",
    text: "The nanomole (symbol: nmol) is an SI sub-multiple equal to one-billionth of a mole (10⁻⁹ mol). It represents approximately 6.02214076 × 10¹⁴ elementary particles (atoms, molecules, or ions). In life science laboratories, synthetic DNA/RNA primers, fluorescent molecular beacons, and picogram-level hormonal analytes are routinely quantified in nanomoles."
  },
  aboutTargetUnit: {
    title: "Understanding the Mole (mol)",
    text: "The mole (symbol: mol) is the base SI unit for amount of substance. Since the 2019 SI redefinition, one mole contains exactly 6.02214076 × 10²³ elementary entities (Avogadro's constant). It forms the stoichiometric foundation for all chemical reaction equations, molarity calculations, and thermodynamic properties."
  },
  relationship: "The relationship between nanomoles and moles is defined by the metric prefix nano- (10⁻⁹): 1 mol = 1,000,000,000 nmol, and 1 nmol = 10⁻⁹ mol (0.000000001 mol).",
  relationshipTitle: "Nanomole to Mole Scale Hierarchy",
  relationshipItems: [
    { label: "1 nmol", value: "10⁻⁹ mol (0.000000001 mol)" },
    { label: "1,000 nmol (1 µmol)", value: "10⁻⁶ mol (0.000001 mol)" },
    { label: "1,000,000 nmol (1 mmol)", value: "10⁻³ mol (0.001 mol)" },
    { label: "500,000,000 nmol", value: "0.5 mol (Half mole benchtop standard)" },
    { label: "1,000,000,000 nmol", value: "1.0 mol (1 Base Mole standard)" }
  ],
  formula: {
    text: "Divide the substance amount in nanomoles by 1,000,000,000 (10⁹) to determine the equivalent quantity in moles.",
    math: "mol = nmol / 1000000000",
    subtext: "To convert moles back to nanomoles, multiply the mole value by 1,000,000,000."
  },
  formulaTitle: "Nanomole to Mole Conversion Formula",
  practicalTip: {
    title: "Scientific Notation for Micro-Quantities",
    text: "When calculating stoichiometric ratios from nanomole primer stocks, expressing values in scientific notation (e.g., 50 nmol = 5.0 × 10⁻⁸ mol) prevents counting errors associated with long strings of leading decimal zeros."
  },
  expertNote: {
    title: "Mass and Molar Mass Calculations",
    text: "To find the mass of a nanomole quantity in grams, convert nmol to mol first (multiply by 10⁻⁹) and then multiply by the compound's molar mass (g/mol): Mass (g) = nmol × 10⁻⁹ × MW."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Oligonucleotide Synthesis Yield",
        subtitle: "Convert a synthesized DNA primer yield of 50 nanomoles into moles.",
        steps: [
          "Identify the given nanomole value: 50 nmol.",
          "Apply the conversion formula: mol = 50 ÷ 1,000,000,000.",
          "Calculate: 50 × 10⁻⁹ = 5.0 × 10⁻⁸ mol (0.00000005 mol).",
          "Result: 50 nmol equals 5.0 × 10⁻⁸ moles."
        ]
      },
      {
        title: "Example 2: Biochemical Assay Substrate Aliquot",
        subtitle: "Convert 250,000 nanomoles of enzymatic substrate into moles.",
        steps: [
          "Identify the value: 250,000 nmol (2.5 × 10⁵ nmol).",
          "Divide by 10⁹: 250,000 ÷ 1,000,000,000 = 0.00025 mol (2.5 × 10⁻⁴ mol).",
          "Result: 250,000 nanomoles equals 0.00025 moles."
        ]
      },
      {
        title: "Example 3: Recombinant Protein Expression Titration",
        subtitle: "Convert 4,500,000 nanomoles of purified recombinant protein into moles.",
        steps: [
          "Identify the value: 4,500,000 nmol.",
          "Divide by 1,000,000,000: 4,500,000 ÷ 10⁹ = 0.0045 mol (4.5 mmol).",
          "Result: 4,500,000 nanomoles equals 0.0045 moles."
        ]
      }
    ]
  },
  table: {
    title: "Nanomole to Mole Reference Table",
    headers: ["Nanomoles (nmol)", "Moles (mol)", "Scientific Notation (mol)"],
    rows: [
      { fromVal: "1 nmol", toVal: "0.000000001 mol", extra: "1.0 × 10⁻⁹ mol" },
      { fromVal: "10 nmol", toVal: "0.00000001 mol", extra: "1.0 × 10⁻⁸ mol" },
      { fromVal: "50 nmol", toVal: "0.00000005 mol", extra: "5.0 × 10⁻⁸ mol" },
      { fromVal: "100 nmol", toVal: "0.0000001 mol", extra: "1.0 × 10⁻⁷ mol" },
      { fromVal: "1,000 nmol (1 µmol)", toVal: "0.000001 mol", extra: "1.0 × 10⁻⁶ mol" },
      { fromVal: "10,000 nmol", toVal: "0.00001 mol", extra: "1.0 × 10⁻⁵ mol" },
      { fromVal: "100,000 nmol", toVal: "0.0001 mol", extra: "1.0 × 10⁻⁴ mol" },
      { fromVal: "1,000,000 nmol (1 mmol)", toVal: "0.001 mol", extra: "1.0 × 10⁻³ mol" },
      { fromVal: "100,000,000 nmol", toVal: "0.1 mol", extra: "1.0 × 10⁻¹ mol" },
      { fromVal: "1,000,000,000 nmol", toVal: "1.0 mol", extra: "1.0 × 10⁰ mol" }
    ]
  },
  applications: {
    title: "Practical Applications of nmol to mol Conversion",
    items: [
      {
        title: "Synthetic Biology & Oligo Resuspension",
        text: "Geneticists convert custom primer yields from nanomoles to moles to compute exact molar volumes when preparing 100 µM stock solutions."
      },
      {
        title: "Pharmacokinetics & Drug Receptor Binding",
        text: "Pharmacologists convert drug receptor dissociation constants ($K_d$) and bound ligand amounts from nanomoles to moles to solve standard thermodynamic equilibrium equations."
      },
      {
        title: "Clinical Diagnostics & Mass Spectrometry",
        text: "Analytical chemists converting mass spec peak integration areas into absolute substance quantities map nanomolar concentrations to molar calibrations."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Multiplying instead of dividing: Converting from a small sub-multiple (nanomoles) to the base unit (moles) requires dividing by 1,000,000,000 (10⁹).",
      "Confusing nanomoles with millimoles: A nanomole is 10⁻⁹ mol, whereas a millimole is 10⁻³ mol (a factor of one million difference).",
      "Misplacing decimal zeros: Always check scientific exponents when translating small values to standard decimal notation."
    ]
  },
  faqs: [
    {
      question: "How many moles are in 1 nanomole?",
      answer: "There are 10⁻⁹ (0.000000001 or one-billionth) moles in 1 nanomole."
    },
    {
      question: "What is the formula to convert nanomoles to moles?",
      answer: "The formula is: Moles (mol) = Nanomoles (nmol) ÷ 1,000,000,000 (or nmol × 10⁻⁹)."
    },
    {
      question: "How do I convert 25 nanomoles to moles?",
      answer: "25 nmol equals 25 × 10⁻⁹ mol, which is 2.5 × 10⁻⁸ mol (0.000000025 mol)."
    },
    {
      question: "How many nanomoles are in 1 mole?",
      answer: "There are exactly 1,000,000,000 (one billion) nanomoles in 1 mole."
    },
    {
      question: "What is 1,000,000 nmol in moles?",
      answer: "1,000,000 nanomoles equals 0.001 moles (1 millimole)."
    },
    {
      question: "How do I convert moles back to nanomoles?",
      answer: "Multiply the mole quantity by 1,000,000,000 (e.g., 0.005 mol × 10⁹ = 5,000,000 nmol)."
    },
    {
      question: "How many molecules are in 1 nanomole?",
      answer: "One nanomole contains 6.02214076 × 10¹⁴ elementary particles."
    },
    {
      question: "What is the difference between nmol/L and mol/L?",
      answer: "1 nmol/L (nanomolar, nM) is 10⁻⁹ mol/L (molar, M), representing a one-billion-fold dilution."
    }
  ],
  relatedList: [
    { label: "Mole to Nanomole", from: "mole", to: "nanomole" },
    { label: "Nanomole to Micromole", from: "nanomole", to: "micromole" },
    { label: "Nanomole to Millimole", from: "nanomole", to: "millimole" },
    { label: "Micromole to Mole", from: "micromole", to: "mole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC Compendium of Chemical Terminology (Gold Book).",
    "NIST Guide for the Use of the International System of Units (SP 811)."
  ]
};
