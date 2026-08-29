import { CustomArticleData } from "./types";

export const nanomoleToMillimole: CustomArticleData = {
  fromUnitId: "nanomole",
  toUnitId: "millimole",
  seoTitle: "Nanomole to Millimole Converter (nmol to mmol)",
  metaDescription: "Convert Nanomoles to Millimoles (nmol to mmol) accurately. Learn the conversion formula, calculation steps, reference table, and clinical laboratory guidelines.",
  h1: "Nanomole to Millimole Converter",
  introduction: [
    "The nanomole (nmol) and millimole (mmol) are metric sub-multiples representing amounts of chemical substance across a one-million-fold scale difference. While millimoles are standard for clinical blood electrolyte panels, glucose measurements, and routine chemical preparation, nanomoles quantify trace biological analytes such as vitamin D metabolites, peptide hormones, steroid levels, and synthetic oligonucleotides.",
    "Because a millimole represents 10⁻³ moles and a nanomole represents 10⁻⁹ moles, there are exactly 1,000,000 (one million) nanomoles in a single millimole. Converting nanomoles to millimoles requires dividing the nanomole value by 1,000,000 (or multiplying by 10⁻⁶).",
    "Use our interactive online calculator above for rapid laboratory calculations, or review the conversion formula, step-by-step examples, reference table, and clinical biochemistry tips below."
  ],
  quickAnswer: {
    text: "To convert Nanomoles to Millimoles, divide the quantity in nanomoles by 1,000,000 (or multiply by 10⁻⁶). For example, 500,000 nmol equals 0.5 mmol, and 1,000,000 nmol equals exactly 1 mmol.",
    formulaDisplay: "mmol = nmol ÷ 1,000,000 = nmol × 10⁻⁶",
    subtext: "1 Nanomole is equal to exactly 0.000001 Millimoles (10⁻⁶ mmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Nanomole (nmol)",
    text: "The nanomole (symbol: nmol) is an SI-derived sub-multiple equal to 10⁻⁹ moles (6.02214076 × 10¹⁴ elementary particles). It is the standard unit used in molecular biology, clinical endocrinology (e.g., serum testosterone, 25-hydroxyvitamin D), and micro-fluidic drug screening."
  },
  aboutTargetUnit: {
    title: "Understanding the Millimole (mmol)",
    text: "The millimole (symbol: mmol) is an SI-derived sub-multiple representing 10⁻³ moles (6.02214076 × 10²⁰ elementary particles). It is the standard unit for clinical biochemistry reports (such as blood glucose, sodium, potassium, and cholesterol) and benchtop chemical reagent preparation."
  },
  relationship: "The relationship spans six orders of magnitude (10⁶): 1 mmol = 1,000,000 nmol, and 1 nmol = 0.000001 mmol (10⁻⁶ mmol).",
  relationshipTitle: "Nanomole to Millimole Scale Hierarchy",
  relationshipItems: [
    { label: "1 nmol", value: "0.000001 mmol (10⁻⁶ mmol)" },
    { label: "1,000 nmol (1 µmol)", value: "0.001 mmol (10⁻³ mmol)" },
    { label: "100,000 nmol", value: "0.1 mmol (10⁻¹ mmol)" },
    { label: "500,000 nmol", value: "0.5 mmol (Half millimole standard)" },
    { label: "1,000,000 nmol", value: "1.0 mmol (1 Millimole standard)" }
  ],
  formula: {
    text: "Divide the substance amount in nanomoles by 1,000,000 (10⁶) to determine the equivalent quantity in millimoles.",
    math: "mmol = nmol / 1000000",
    subtext: "To convert millimoles back to nanomoles, multiply the millimole value by 1,000,000."
  },
  formulaTitle: "Nanomole to Millimole Conversion Formula",
  practicalTip: {
    title: "Two-Step Shift via Micromoles",
    text: "When calculating mentally, you can divide by 1,000 to get micromoles (µmol), and then divide by 1,000 again to get millimoles (mmol). For example, 45,000 nmol = 45 µmol = 0.045 mmol."
  },
  expertNote: {
    title: "Clinical Reference Ranges and Units Alignment",
    text: "Serum vitamin D [25(OH)D] is reported in nmol/L (normal range ~50–125 nmol/L), whereas serum calcium is reported in mmol/L (~2.15–2.55 mmol/L). When balancing endocrine feedback equations, understanding this 1,000,000:1 ratio is essential."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Diagnostic Reagent Stock Batch",
        subtitle: "Convert 750,000 nanomoles of analyte calibrator into millimoles.",
        steps: [
          "Identify the given nanomole value: 750,000 nmol.",
          "Apply the conversion formula: mmol = 750,000 ÷ 1,000,000.",
          "Calculate: 750,000 × 10⁻⁶ = 0.75 mmol.",
          "Result: 750,000 nmol equals 0.75 mmol."
        ]
      },
      {
        title: "Example 2: Oligonucleotide Pooled Library Yield",
        subtitle: "Convert 25,000 nanomoles of synthesized oligo pool into millimoles.",
        steps: [
          "Identify the value: 25,000 nmol.",
          "Divide by 1,000,000: 25,000 ÷ 10⁶ = 0.025 mmol.",
          "Result: 25,000 nanomoles equals 0.025 millimoles (25 µmol)."
        ]
      },
      {
        title: "Example 3: Trace Metabolic Excretion Measurement",
        subtitle: "Convert 3,200 nanomoles of urinary metabolite into millimoles.",
        steps: [
          "Identify the value: 3,200 nmol.",
          "Divide by 1,000,000: 3,200 ÷ 1,000,000 = 0.0032 mmol.",
          "Result: 3,200 nanomoles equals 0.0032 millimoles (3.2 µmol)."
        ]
      }
    ]
  },
  table: {
    title: "Nanomole to Millimole Reference Table",
    headers: ["Nanomoles (nmol)", "Millimoles (mmol)", "Micromole Equivalent (µmol)"],
    rows: [
      { fromVal: "100 nmol", toVal: "0.0001 mmol", extra: "0.1 µmol" },
      { fromVal: "1,000 nmol", toVal: "0.001 mmol", extra: "1 µmol" },
      { fromVal: "10,000 nmol", toVal: "0.01 mmol", extra: "10 µmol" },
      { fromVal: "50,000 nmol", toVal: "0.05 mmol", extra: "50 µmol" },
      { fromVal: "100,000 nmol", toVal: "0.1 mmol", extra: "100 µmol" },
      { fromVal: "250,000 nmol", toVal: "0.25 mmol", extra: "250 µmol" },
      { fromVal: "500,000 nmol", toVal: "0.5 mmol", extra: "500 µmol" },
      { fromVal: "1,000,000 nmol", toVal: "1.0 mmol", extra: "1,000 µmol" },
      { fromVal: "2,500,000 nmol", toVal: "2.5 mmol", extra: "2,500 µmol" },
      { fromVal: "5,000,000 nmol", toVal: "5.0 mmol", extra: "5,000 µmol" }
    ]
  },
  applications: {
    title: "Practical Applications of nmol to mmol Conversion",
    items: [
      {
        title: "Clinical Pathology & Diagnostic Assays",
        text: "Medical lab scientists convert high-sensitivity hormone measurements from nanomoles to millimolar baseline scales for multi-analyte comprehensive panels."
      },
      {
        title: "Biopharmaceutical Formulation",
        text: "Formulators scale up micro-synthesized active pharmaceutical ingredients (APIs) from nanomoles to millimole batch compounding recipes."
      },
      {
        title: "Enzyme Kinetics & Substrate Titrations",
        text: "Biochemists measure trace catalytic turnover rates in nanomoles and scale to millimolar standard reaction media."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Dividing by 1,000 instead of 1,000,000: A millimole is 10⁶ times larger than a nanomole (dividing by 1,000 yields micromoles, not millimoles).",
      "Prefix confusion: Ensure 'nmol' (10⁻⁹ mol) is not mistaken for 'µmol' (10⁻⁶ mol) or 'pmol' (10⁻¹² mol).",
      "Units consistency: Check whether you are working with total substance amount (nmol, mmol) or concentration (nmol/L, mmol/L)."
    ]
  },
  faqs: [
    {
      question: "How many millimoles are in 1 nanomole?",
      answer: "There are exactly 0.000001 (10⁻⁶ or one-millionth) millimoles in 1 nanomole."
    },
    {
      question: "What is the formula to convert nanomoles to millimoles?",
      answer: "The formula is: Millimoles (mmol) = Nanomoles (nmol) ÷ 1,000,000 (or nmol × 10⁻⁶)."
    },
    {
      question: "How do I convert 50,000 nanomoles to millimoles?",
      answer: "Divide 50,000 by 1,000,000 to get 0.05 millimoles (mmol)."
    },
    {
      question: "How many nanomoles make 1 millimole?",
      answer: "There are exactly 1,000,000 (one million) nanomoles in 1 millimole."
    },
    {
      question: "What is 1,000,000 nmol in mmol?",
      answer: "1,000,000 nanomoles equals exactly 1.0 millimole."
    },
    {
      question: "How do I convert millimoles back to nanomoles?",
      answer: "Multiply the millimole value by 1,000,000 (e.g., 2.5 mmol × 1,000,000 = 2,500,000 nmol)."
    },
    {
      question: "What is the difference between nM and mM?",
      answer: "nM is nanomolar (10⁻⁹ mol/L) and mM is millimolar (10⁻³ mol/L); 1 mM is 1,000,000 times more concentrated than 1 nM."
    },
    {
      question: "How many particles are in 1 nanomole vs 1 millimole?",
      answer: "1 nanomole contains 6.022 × 10¹⁴ particles, while 1 millimole contains 6.022 × 10²⁰ particles (1,000,000 times more)."
    }
  ],
  relatedList: [
    { label: "Millimole to Nanomole", from: "millimole", to: "nanomole" },
    { label: "Nanomole to Micromole", from: "nanomole", to: "micromole" },
    { label: "Nanomole to Mole", from: "nanomole", to: "mole" },
    { label: "Micromole to Millimole", from: "micromole", to: "millimole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC Compendium of Chemical Terminology (Gold Book).",
    "NIST Guide for the Use of the International System of Units (SP 811)."
  ]
};
