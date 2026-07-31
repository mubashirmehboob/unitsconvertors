import { CustomArticleData } from "./types";

export const millimoleToMicromole: CustomArticleData = {
  fromUnitId: "millimole",
  toUnitId: "micromole",
  seoTitle: "Millimole to Micromole Converter (mmol to µmol)",
  metaDescription: "Convert Millimoles to Micromoles (mmol to µmol) effortlessly. Learn the conversion formula, calculation steps, reference table, and common FAQs.",
  h1: "Millimole to Micromole Converter",
  introduction: [
    "The millimole (mmol) and micromole (µmol) are SI metric sub-multiples used to measure amounts of chemical substances in laboratory diagnostics, cellular biology, and pharmacology. While millimoles express macroscopic biological concentrations like blood glucose and electrolytes, micromoles quantify micro-scale metabolites, cellular signals, and enzymatic reaction rates.",
    "Since one millimole contains 1,000 micromoles (derived from 10⁻³ mol vs 10⁻⁶ mol), converting millimoles to micromoles requires multiplying the millimole quantity by 1,000.",
    "Use our interactive converter above for quick calculations, or refer to the formula, worked examples, reference table, and laboratory guidelines below."
  ],
  quickAnswer: {
    text: "To convert Millimoles to Micromoles, multiply the quantity in millimoles by 1,000. For example, 2.5 mmol equals 2,500 µmol, and 0.1 mmol equals 100 µmol.",
    formulaDisplay: "µmol = mmol × 1,000",
    subtext: "1 Millimole is equal to exactly 1,000 Micromoles (10³ µmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Millimole (mmol)",
    text: "The millimole (symbol: mmol) is a metric sub-multiple of the mole equal to 0.001 moles (10⁻³ mol). It is the standard unit used in clinical medicine, routine blood chemistry panels, and pharmaceutical dosing calculations."
  },
  aboutTargetUnit: {
    title: "Understanding the Micromole (µmol)",
    text: "The micromole (symbol: µmol or umol) is a metric sub-multiple equal to one-millionth of a mole (10⁻⁶ mol). It is extensively used in biochemistry, cell culture assays, molecular biology, and high-sensitivity microplate assays."
  },
  relationship: "The relationship between millimoles and micromoles is determined by their metric exponents (10⁻³ vs 10⁻⁶): 1 mmol = 1,000 µmol, and 1 µmol = 0.001 mmol.",
  relationshipTitle: "Millimolar to Micromolar Sub-unit Scale",
  relationshipItems: [
    { label: "0.001 mmol", value: "1 µmol (Cellular metabolite assay threshold)" },
    { label: "0.05 mmol", value: "50 µmol (Clinical serum hormone fraction)" },
    { label: "0.1 mmol", value: "100 µmol (Microplate assay well concentration)" },
    { label: "1.0 mmol", value: "1,000 µmol (1 Millimole reference benchmark)" },
    { label: "5.0 mmol", value: "5,000 µmol (Blood glucose clinical concentration per liter)" }
  ],
  formula: {
    text: "Multiply the substance quantity in millimoles by 1,000 to obtain the value in micromoles.",
    math: "µmol = mmol × 1000",
    subtext: "To convert micromoles back to millimoles, divide the micromole value by 1,000."
  },
  formulaTitle: "Millimole to Micromole Conversion Formula",
  practicalTip: {
    title: "Quick Decimal Shift Rule",
    text: "To convert millimoles to micromoles without a calculator, shift the decimal point three places to the right. For example, 0.075 mmol becomes 75.0 µmol."
  },
  expertNote: {
    title: "Clinical & Cell Culture Assay Alignment",
    text: "When scaling up cellular assays from 96-well microplates (measured in micromoles) to benchtop bioreactors (measured in millimoles), converting mmol to µmol helps maintain accurate stoichiometric ratios for nutrient feeds and growth factor supplements."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Enzyme Activity Kinetics",
        subtitle: "Convert 0.35 millimoles of ATP substrate consumed during a reaction into micromoles.",
        steps: [
          "Identify the given millimole value: 0.35 mmol.",
          "Apply the conversion formula: µmol = 0.35 × 1,000.",
          "Calculate: 0.35 × 1,000 = 350 µmol.",
          "Result: 0.35 millimoles equals 350 micromoles."
        ]
      },
      {
        title: "Example 2: Clinical Serum Urate Diagnostic",
        subtitle: "Convert a patient's serum uric acid concentration of 0.42 mmol/L into µmol/L.",
        steps: [
          "Identify the value: 0.42 mmol.",
          "Multiply by 1,000: 0.42 × 1,000 = 420 µmol.",
          "Result: 0.42 mmol/L equals 420 µmol/L."
        ]
      },
      {
        title: "Example 3: Microbiological Culture Feed",
        subtitle: "Convert 1.8 millimoles of amino acid supplement into micromoles for a cell media preparation.",
        steps: [
          "Identify the value: 1.8 mmol.",
          "Multiply by 1,000: 1.8 × 1,000 = 1,800 µmol.",
          "Result: 1.8 millimoles equals 1,800 micromoles."
        ]
      }
    ]
  },
  table: {
    title: "Millimole to Micromole Reference Table",
    headers: ["Millimoles (mmol)", "Micromoles (µmol)", "Application Context"],
    rows: [
      { fromVal: "0.001 mmol", toVal: "1 µmol", extra: "Trace enzyme assay sensitivity" },
      { fromVal: "0.01 mmol", toVal: "10 µmol", extra: "High-throughput drug screening well" },
      { fromVal: "0.05 mmol", toVal: "50 µmol", extra: "Micro-fluidic cell reaction volume" },
      { fromVal: "0.1 mmol", toVal: "100 µmol", extra: "Biochemical cuvette substrate concentration" },
      { fromVal: "0.5 mmol", toVal: "500 µmol", extra: "Serum metabolite target range" },
      { fromVal: "1.0 mmol", toVal: "1,000 µmol", extra: "1 Millimole baseline benchmark" },
      { fromVal: "2.5 mmol", toVal: "2,500 µmol", extra: "Analytical chromatography fraction" },
      { fromVal: "5.0 mmol", toVal: "5,000 µmol", extra: "Physiological blood glucose reference level" }
    ]
  },
  applications: {
    title: "Practical Applications of mmol to µmol Conversion",
    items: [
      {
        title: "Clinical Pathology & Medical Reports",
        text: "Medical diagnostics convert metabolite measurements between mmol/L and µmol/L to compare patient results against internationally standardized reference ranges (e.g., serum creatinine in µmol/L vs glucose in mmol/L)."
      },
      {
        title: "Cellular Biology & Tissue Engineering",
        text: "Researchers convert nutrient media supplements from millimoles to micromoles when calculating per-cell consumption rates during cell proliferation studies."
      },
      {
        title: "Environmental Water Quality Monitoring",
        text: "Environmental chemists convert nutrient pollution indices (such as ammonium or phosphate) from millimolar to micromolar units for reporting trace contamination in river ecosystems."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Dividing instead of multiplying: Converting from a larger prefix (milli-) to a smaller prefix (micro-) requires multiplication by 1,000.",
      "Symbol confusion: Ensure 'µmol' is not mistyped as 'mmol' or 'nmol', as each step represents a 1,000-fold difference in quantity.",
      "Symbol input: If the Greek letter 'µ' is unsupportable on a laboratory terminal, use the recognized standard abbreviation 'umol'."
    ]
  },
  faqs: [
    {
      question: "How many micromoles are in 1 millimole?",
      answer: "There are exactly 1,000 micromoles in 1 millimole."
    },
    {
      question: "What is the formula to convert millimoles to micromoles?",
      answer: "The formula is: Micromoles (µmol) = Millimoles (mmol) × 1,000."
    },
    {
      question: "How do I convert 0.2 millimoles to micromoles?",
      answer: "Multiply 0.2 by 1,000 to get 200 micromoles (µmol)."
    },
    {
      question: "Is mmol/L larger than µmol/L?",
      answer: "Yes, 1 mmol/L is 1,000 times concentrated than 1 µmol/L (1 mmol/L = 1,000 µmol/L)."
    },
    {
      question: "How do I convert serum creatinine from mmol/L to µmol/L?",
      answer: "Multiply the mmol/L value by 1,000. For example, 0.09 mmol/L equals 90 µmol/L."
    },
    {
      question: "How do I convert micromoles back to millimoles?",
      answer: "Divide the micromole value by 1,000 (e.g., 4,500 µmol ÷ 1,000 = 4.5 mmol)."
    },
    {
      question: "What is the difference between mM and µM?",
      answer: "mM stands for millimolar (mmol/L), while µM stands for micromolar (µmol/L). 1 mM = 1,000 µM."
    },
    {
      question: "How many particles are in a micromole?",
      answer: "One micromole contains 6.02214076 × 10¹⁷ elementary entities."
    }
  ],
  relatedList: [
    { label: "Millimole to Mole", from: "millimole", to: "mole" },
    { label: "Millimole to Nanomole", from: "millimole", to: "nanomole" },
    { label: "Millimole to Kilomole", from: "millimole", to: "kilomole" },
    { label: "Micromole to Millimole", from: "micromole", to: "millimole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry (Green Book).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units."
  ]
};
