import { CustomArticleData } from "./types";

export const millimoleToNanomole: CustomArticleData = {
  fromUnitId: "millimole",
  toUnitId: "nanomole",
  seoTitle: "Millimole to Nanomole Converter (mmol to nmol)",
  metaDescription: "Convert Millimoles to Nanomoles (mmol to nmol) accurately. Learn the conversion formula, step-by-step examples, reference table, and common FAQs.",
  h1: "Millimole to Nanomole Converter",
  introduction: [
    "The millimole (mmol) and nanomole (nmol) are SI metric sub-units used to quantify amounts of chemical and biological substances. While millimoles describe laboratory reagent preparations and bulk metabolic solute pools, nanomoles measure ultra-trace biological samples, oligonucleotide primers, and hormone receptor ligands.",
    "Because a millimole represents 10⁻³ moles and a nanomole represents 10⁻⁹ moles, one millimole contains exactly 1,000,000 nanomoles. To convert millimoles to nanomoles, multiply the millimole quantity by 1,000,000.",
    "Use our instant converter above to perform calculations, or consult the conversion formula, worked examples, reference table, and laboratory notes below."
  ],
  quickAnswer: {
    text: "To convert Millimoles to Nanomoles, multiply the quantity in millimoles by 1,000,000 (10⁶). For example, 0.05 mmol equals 50,000 nmol, and 0.001 mmol equals 1,000 nmol.",
    formulaDisplay: "nmol = mmol × 1,000,000",
    subtext: "1 Millimole is equal to exactly 1,000,000 Nanomoles (10⁶ nmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Millimole (mmol)",
    text: "The millimole (symbol: mmol) is a decimal fraction equal to one-thousandth of a mole (10⁻³ mol). It is widely used in clinical blood panels, biochemistry stock solution preparation, and pharmaceutical compounding."
  },
  aboutTargetUnit: {
    title: "Understanding the Nanomole (nmol)",
    text: "The nanomole (symbol: nmol) is a sub-multiple equal to one-billionth of a mole (10⁻⁹ mol). Nanomoles are the standard unit for gene synthesis, nucleic acid quantification, fluorometric assays, and high-sensitivity immunoassay protocols."
  },
  relationship: "The relationship between millimoles and nanomoles spans six orders of magnitude (10⁶): 1 mmol = 1,000,000 nmol, and 1 nmol = 0.000001 mmol.",
  relationshipTitle: "Millimolar to Nanomolar Magnitude Scale",
  relationshipItems: [
    { label: "0.000001 mmol", value: "1 nmol (Single DNA oligo synthesis yield)" },
    { label: "0.001 mmol", value: "1,000 nmol (1 Micromole equivalent)" },
    { label: "0.05 mmol", value: "50,000 nmol (Microplate assay stock aliquot)" },
    { label: "0.1 mmol", value: "100,000 nmol (Routine biochemical substrate feed)" },
    { label: "1.0 mmol", value: "1,000,000 nmol (1 Millimole baseline benchmark)" }
  ],
  formula: {
    text: "Multiply the chemical amount in millimoles by 1,000,000 (10⁶) to find the equivalent in nanomoles.",
    math: "nmol = mmol × 1000000",
    subtext: "To convert nanomoles back to millimoles, divide the nanomole value by 1,000,000."
  },
  formulaTitle: "Millimole to Nanomole Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Shortcut",
    text: "To convert millimoles to nanomoles manually, shift the decimal point six positions to the right. For example, 0.004 mmol becomes 4,000 nmol."
  },
  expertNote: {
    title: "Molecular Biology Reagent Preparation",
    text: "When preparing working dilutions of synthetic peptide stock solutions from millimolar concentrations for nanoscale cell signaling experiments, multiplying millimoles by 1,000,000 allows direct calculation of required nanomolar pipetting aliquots."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Oligonucleotide Primer Dilution",
        subtitle: "Convert 0.025 millimoles of a master stock DNA primer into nanomoles.",
        steps: [
          "Identify the given millimole value: 0.025 mmol.",
          "Apply the conversion formula: nmol = 0.025 × 1,000,000.",
          "Calculate: 0.025 × 1,000,000 = 25,000 nmol.",
          "Result: 0.025 millimoles equals 25,000 nanomoles."
        ]
      },
      {
        title: "Example 2: Targeted Drug Formulation",
        subtitle: "Convert 0.003 millimoles of targeted peptide conjugate into nanomoles.",
        steps: [
          "Identify the value: 0.003 mmol.",
          "Multiply by 1,000,000: 0.003 × 1,000,000 = 3,000 nmol.",
          "Result: 0.003 millimoles equals 3,000 nanomoles."
        ]
      },
      {
        title: "Example 3: Endocrine Diagnostic Standard",
        subtitle: "Convert 0.15 millimoles of hormone calibrator into nanomoles.",
        steps: [
          "Identify the value: 0.15 mmol.",
          "Multiply by 1,000,000: 0.15 × 1,000,000 = 150,000 nmol.",
          "Result: 0.15 millimoles equals 150,000 nanomoles."
        ]
      }
    ]
  },
  table: {
    title: "Millimole to Nanomole Reference Table",
    headers: ["Millimoles (mmol)", "Nanomoles (nmol)", "Application Context"],
    rows: [
      { fromVal: "0.000001 mmol", toVal: "1 nmol", extra: "Trace assay sensitivity threshold" },
      { fromVal: "0.00001 mmol", toVal: "10 nmol", extra: "Micro-scale siRNA transfection pool" },
      { fromVal: "0.0001 mmol", toVal: "100 nmol", extra: "High-sensitivity fluorometric assay well" },
      { fromVal: "0.001 mmol", toVal: "1,000 nmol", extra: "1 Micromole equivalent" },
      { fromVal: "0.01 mmol", toVal: "10,000 nmol", extra: "Synthetic peptide purification fraction" },
      { fromVal: "0.1 mmol", toVal: "100,000 nmol", extra: "Biochemical enzyme stock aliquot" },
      { fromVal: "0.5 mmol", toVal: "500,000 nmol", extra: "Preparative chromatography feed" },
      { fromVal: "1.0 mmol", toVal: "1,000,000 nmol", extra: "1 Millimole baseline benchmark" }
    ]
  },
  applications: {
    title: "Practical Applications of mmol to nmol Conversion",
    items: [
      {
        title: "Genomics & PCR Assay Setup",
        text: "Geneticists convert stock solution concentrations from millimoles to nanomoles to calculate precise working volumes for high-throughput PCR and Next-Generation Sequencing (NGS) libraries."
      },
      {
        title: "Targeted Cancer Therapeutics",
        text: "Pharmacologists measuring antibody-drug conjugate (ADC) binding convert payload quantities from millimoles to nanomoles to optimize therapeutic efficacy and cellular internalizations."
      },
      {
        title: "Proteomics Mass Spectrometry",
        text: "Proteomics specialists convert digestive enzyme substrates from millimoles to nanomoles when digesting protein samples for tandem mass spectrometry (MS/MS)."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Order of magnitude error: Moving from millimoles (10⁻³ mol) to nanomoles (10⁻⁹ mol) requires multiplying by 1,000,000 (10⁶), not 1,000 (10³).",
      "Confusing nmol with µmol: A nanomole (nmol) is 1,000 times smaller than a micromole (µmol).",
      "Prefix confusion: Ensure 'mmol' is not confused with 'mol' when entering values into calculation software."
    ]
  },
  faqs: [
    {
      question: "How many nanomoles are in 1 millimole?",
      answer: "There are exactly 1,000,000 nanomoles in 1 millimole."
    },
    {
      question: "What is the formula to convert millimoles to nanomoles?",
      answer: "The formula is: Nanomoles (nmol) = Millimoles (mmol) × 1,000,000."
    },
    {
      question: "How do I convert 0.01 millimoles to nanomoles?",
      answer: "Multiply 0.01 by 1,000,000 to get 10,000 nanomoles (nmol)."
    },
    {
      question: "How many nanomoles are in 0.001 mmol?",
      answer: "0.001 millimoles equals 1,000 nanomoles (which is also equal to 1 micromole)."
    },
    {
      question: "Is mmol/L the same as nmol/L?",
      answer: "No, 1 mmol/L is 1,000,000 times more concentrated than 1 nmol/L (1 mmol/L = 1,000,000 nmol/L)."
    },
    {
      question: "How do I convert nanomoles back to millimoles?",
      answer: "Divide the nanomole value by 1,000,000 (e.g., 50,000 nmol ÷ 1,000,000 = 0.05 mmol)."
    },
    {
      question: "What is 1 mmol written in scientific notation in nanomoles?",
      answer: "1 mmol equals 1.0 × 10⁶ nmol."
    },
    {
      question: "How many molecules are in 1 nanomole?",
      answer: "One nanomole contains 6.02214076 × 10¹⁴ elementary entities."
    }
  ],
  relatedList: [
    { label: "Millimole to Mole", from: "millimole", to: "mole" },
    { label: "Millimole to Micromole", from: "millimole", to: "micromole" },
    { label: "Millimole to Kilomole", from: "millimole", to: "kilomole" },
    { label: "Mole to Nanomole", from: "mole", to: "nanomole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry (Green Book).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units."
  ]
};
