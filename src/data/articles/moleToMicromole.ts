import { CustomArticleData } from "./types";

export const moleToMicromole: CustomArticleData = {
  fromUnitId: "mole",
  toUnitId: "micromole",
  seoTitle: "Mole to Micromole Converter (mol to µmol)",
  metaDescription: "Convert Moles to Micromoles (mol to µmol) quickly and accurately. Learn the conversion formula, step-by-step examples, reference tables, and common FAQs.",
  h1: "Mole to Micromole Converter",
  introduction: [
    "The mole (mol) and micromole (µmol) are SI metrics used to measure the quantity of chemical entities, such as molecules, ions, or free radicals. While moles describe macroscopic chemical reactions in laboratory synthesis, micromoles measure microscopic biological amounts, cellular metabolites, and enzyme activities.",
    "Because the SI prefix 'micro-' denotes one-millionth (10⁻⁶), one mole contains exactly 1,000,000 micromoles. To convert any molar value into micromoles, multiply the number of moles by 1,000,000.",
    "Use our online converter above for immediate results, or read through the step-by-step mathematical examples, conversion table, and expert context below."
  ],
  quickAnswer: {
    text: "To convert Moles to Micromoles, multiply the molar quantity by 1,000,000. For example, 0.002 mol equals 2,000 µmol, and 0.0001 mol equals 100 µmol.",
    formulaDisplay: "µmol = mol × 1,000,000",
    subtext: "1 Mole is equal to exactly 1,000,000 Micromoles (10⁶ µmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Mole (mol)",
    text: "The mole (symbol: mol) is the base SI unit for the amount of substance. Defined by the International Committee for Weights and Measures (CIPM), one mole contains fixed 6.02214076 × 10²³ elementary particles."
  },
  aboutTargetUnit: {
    title: "Understanding the Micromole (µmol)",
    text: "The micromole (symbol: µmol or umol) is a sub-multiple SI unit equal to one-millionth of a mole (10⁻⁶ mol). Micromoles are extensively used in clinical diagnostics, cellular biology, molecular genetics, and trace analytical assays."
  },
  relationship: "The relationship between moles and micromoles stems directly from the metric scale: 1 mol = 1,000,000 µmol, and 1 µmol = 0.000001 mol.",
  relationshipTitle: "Macro to Micro Molar Quantity Scale",
  relationshipItems: [
    { label: "0.000001 mol", value: "1 µmol (Single cell assay threshold)" },
    { label: "0.00005 mol", value: "50 µmol (Clinical serum hormone level)" },
    { label: "0.001 mol", value: "1,000 µmol (Micro-fluidic reaction volume)" },
    { label: "0.01 mol", value: "10,000 µmol (Analytical chromatography injection)" },
    { label: "1.0 mol", value: "1,000,000 µmol (1 Molar macroscopic standard)" }
  ],
  formula: {
    text: "Multiply the amount in moles by 1,000,000 (10⁶) to find the equivalent quantity in micromoles.",
    math: "µmol = mol × 1000000",
    subtext: "To reverse the calculation from micromoles to moles, divide by 1,000,000."
  },
  formulaTitle: "Mole to Micromole Formula",
  practicalTip: {
    title: "Scientific Notation & Decimal Rule",
    text: "To convert moles to micromoles manually, move the decimal point six places to the right. In scientific notation, a value of 3.5 × 10⁻⁴ mol becomes 350 µmol."
  },
  expertNote: {
    title: "Biotechnology & Clinical Biochemistry Insight",
    text: "Enzyme activity and metabolic substrate consumption in cell culture media are routinely monitored in µmol/min or µmol/L. Converting macro molar concentrations to micromoles eliminates scientific notation in routine assay reports and clinical patient charts."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Clinical Endocrinology Assay",
        subtitle: "Convert 0.00045 moles of cortisol substrate into micromoles for a diagnostic immunoassay.",
        steps: [
          "Identify the given molar value: 0.00045 mol.",
          "Apply the conversion formula: µmol = 0.00045 × 1,000,000.",
          "Calculate: 0.00045 × 1,000,000 = 450 µmol.",
          "Result: 0.00045 moles equals 450 micromoles."
        ]
      },
      {
        title: "Example 2: Environmental Water Toxicology",
        subtitle: "Convert 0.0032 moles of heavy metal contaminant per liter into micromoles.",
        steps: [
          "Identify the molar value: 0.0032 mol.",
          "Multiply by 1,000,000: 0.0032 × 1,000,000 = 3,200 µmol.",
          "Result: 0.0032 moles corresponds to 3,200 micromoles."
        ]
      },
      {
        title: "Example 3: Enzyme Kinetics Experiment",
        subtitle: "Convert 0.012 moles of NADH co-factor into micromoles for a spectrophotometric assay.",
        steps: [
          "Identify the molar value: 0.012 mol.",
          "Multiply by 1,000,000: 0.012 × 1,000,000 = 12,000 µmol.",
          "Result: 0.012 moles equals 12,000 micromoles."
        ]
      }
    ]
  },
  table: {
    title: "Mole to Micromole Reference Table",
    headers: ["Moles (mol)", "Micromoles (µmol)", "Application Context"],
    rows: [
      { fromVal: "0.000001 mol", toVal: "1 µmol", extra: "Trace biomarker detection sensitivity" },
      { fromVal: "0.00001 mol", toVal: "10 µmol", extra: "Intracellular metabolite pool size" },
      { fromVal: "0.0001 mol", toVal: "100 µmol", extra: "High-throughput drug screening well" },
      { fromVal: "0.0005 mol", toVal: "500 µmol", extra: "Standard biochemical assay cuvette" },
      { fromVal: "0.001 mol", toVal: "1,000 µmol", extra: "1 Millimole equivalent" },
      { fromVal: "0.01 mol", toVal: "10,000 µmol", extra: "Preparative HPLC fraction volume" },
      { fromVal: "0.1 mol", toVal: "100,000 µmol", extra: "Benchtop synthesis reagent charge" },
      { fromVal: "1.0 mol", toVal: "1,000,000 µmol", extra: "Standard 1 Mole reference scale" }
    ]
  },
  applications: {
    title: "Practical Applications of mol to µmol Conversion",
    items: [
      {
        title: "Medical Pathology & Diagnostics",
        text: "Pathology labs express serum uric acid, bilirubin, and creatinine concentrations in micromoles per liter (µmol/L) to monitor kidney function and liver health."
      },
      {
        title: "Biotechnology & Genomic Sequencing",
        text: "Oligonucleotide synthesis and PCR primer concentrations are measured in micromoles to calculate precise hybridization stoichiometries during DNA amplification."
      },
      {
        title: "Neurochemistry & Brain Research",
        text: "Neuroscientists measure neurotransmitter turnover rates (such as dopamine and glutamate) in brain tissue samples in micromolar quantities."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Confusing µmol with mmol: One micromole (µmol, 10⁻⁶ mol) is 1,000 times smaller than one millimole (mmol, 10⁻³ mol).",
      "Character encoding errors: In digital systems where the Greek letter 'µ' is unavailable, write 'umol' rather than omitting the prefix.",
      "Decimal precision errors: Shifting the decimal point five places instead of six results in a 10-fold calculation error."
    ]
  },
  faqs: [
    {
      question: "How many micromoles are in 1 mole?",
      answer: "There are exactly 1,000,000 micromoles in 1 mole."
    },
    {
      question: "What is the formula to convert moles to micromoles?",
      answer: "The formula is: Micromoles (µmol) = Moles (mol) × 1,000,000."
    },
    {
      question: "How do I convert 0.0005 moles to micromoles?",
      answer: "Multiply 0.0005 by 1,000,000 to get 500 micromoles (µmol)."
    },
    {
      question: "What is the symbol for micromole?",
      answer: "The official SI symbol is µmol. In ASCII text environments, it is commonly written as umol."
    },
    {
      question: "How many micromoles are in 0.001 mol?",
      answer: "0.001 moles equals 1,000 micromoles (which is also equal to 1 millimole)."
    },
    {
      question: "Is µmol/L the same as micromolar (µM)?",
      answer: "Yes, one micromole per liter (1 µmol/L) is identical to a concentration of one micromolar (1 µM)."
    },
    {
      question: "How do I convert micromoles back to moles?",
      answer: "Divide the micromole value by 1,000,000 (e.g., 2,500 µmol ÷ 1,000,000 = 0.0025 mol)."
    },
    {
      question: "How many molecules are in one micromole?",
      answer: "One micromole contains approximately 6.02214076 × 10¹⁷ molecules or ions."
    }
  ],
  relatedList: [
    { label: "Mole to Millimole", from: "mole", to: "millimole" },
    { label: "Mole to Nanomole", from: "mole", to: "nanomole" },
    { label: "Micromole to Mole", from: "micromole", to: "mole" },
    { label: "Micromole to Millimole", from: "micromole", to: "millimole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry (Green Book).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units."
  ]
};
