import { CustomArticleData } from "./types";

export const micromoleToMillimole: CustomArticleData = {
  fromUnitId: "micromole",
  toUnitId: "millimole",
  seoTitle: "Micromole to Millimole Converter (µmol to mmol)",
  metaDescription: "Convert Micromoles to Millimoles (µmol to mmol) accurately. Learn the conversion formula, calculation steps, reference table, and common FAQs.",
  h1: "Micromole to Millimole Converter",
  introduction: [
    "The micromole (µmol) and millimole (mmol) are metric sub-multiples used to measure amounts of chemical substance. While micromoles measure micro-scale biological samples, cellular metabolites, and enzyme kinetics, millimoles express clinical solute concentrations, blood gas electrolyte panels, and laboratory reagent charges.",
    "Because one millimole contains 1,000 micromoles (10⁻³ mol vs 10⁻⁶ mol), converting micromoles to millimoles requires dividing the micromole value by 1,000.",
    "Use our interactive online calculator above for instant conversions, or review the formula, step-by-step examples, reference table, and laboratory notes below."
  ],
  quickAnswer: {
    text: "To convert Micromoles to Millimoles, divide the quantity in micromoles by 1,000. For example, 2,500 µmol equals 2.5 mmol, and 500 µmol equals 0.5 mmol.",
    formulaDisplay: "mmol = µmol ÷ 1,000",
    subtext: "1 Micromole is equal to exactly 0.001 Millimoles (10⁻³ mmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Micromole (µmol)",
    text: "The micromole (symbol: µmol or umol) is a metric sub-multiple equal to one-millionth of a mole (10⁻⁶ mol). It is standard in biochemistry, cell culture research, enzyme kinetics, and micro-fluidic assays."
  },
  aboutTargetUnit: {
    title: "Understanding the Millimole (mmol)",
    text: "The millimole (symbol: mmol) is a metric sub-multiple equal to one-thousandth of a mole (10⁻³ mol). It is widely used in clinical blood panels, pharmacy compounding, and routine analytical chemistry titrations."
  },
  relationship: "The relationship between micromoles and millimoles is derived from their metric prefix ratio (10⁻⁶ vs 10⁻³): 1 mmol = 1,000 µmol, and 1 µmol = 0.001 mmol.",
  relationshipTitle: "Micromolar to Millimolar Sub-unit Scale",
  relationshipItems: [
    { label: "1 µmol", value: "0.001 mmol (Microplate assay well amount)" },
    { label: "50 µmol", value: "0.05 mmol (Trace metabolic solute level)" },
    { label: "100 µmol", value: "0.1 mmol (Cuvette assay concentration)" },
    { label: "1,000 µmol", value: "1.0 mmol (1 Millimole baseline benchmark)" },
    { label: "5,000 µmol", value: "5.0 mmol (Blood glucose clinical level per liter)" }
  ],
  formula: {
    text: "Divide the substance quantity in micromoles by 1,000 to determine the equivalent in millimoles.",
    math: "mmol = µmol / 1000",
    subtext: "To convert millimoles back to micromoles, multiply the millimole value by 1,000."
  },
  formulaTitle: "Micromole to Millimole Conversion Formula",
  practicalTip: {
    title: "Quick Decimal Shift Rule",
    text: "To convert micromoles to millimoles manually, shift the decimal point three places to the left. For example, 450 µmol becomes 0.45 mmol."
  },
  expertNote: {
    title: "Clinical Diagnostics & Assay Scaling",
    text: "Pathology labs converting high-sensitivity micro-assay results (µmol) into standardized diagnostic blood panel reports (mmol/L) divide by 1,000 to maintain alignment with international reference intervals."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Serum Creatinine Laboratory Diagnostic",
        subtitle: "Convert a measured serum creatinine value of 180 micromoles per liter into millimoles per liter.",
        steps: [
          "Identify the given micromole value: 180 µmol.",
          "Apply the conversion formula: mmol = 180 ÷ 1,000.",
          "Calculate: 180 ÷ 1,000 = 0.18 mmol.",
          "Result: 180 µmol/L equals 0.18 mmol/L."
        ]
      },
      {
        title: "Example 2: Cell Culture Nutrient Feed",
        subtitle: "Convert 4,500 micromoles of glutamine supplement into millimoles for a bioreactor media batch.",
        steps: [
          "Identify the value: 4,500 µmol.",
          "Divide by 1,000: 4,500 ÷ 1,000 = 4.5 mmol.",
          "Result: 4,500 micromoles equals 4.5 millimoles."
        ]
      },
      {
        title: "Example 3: Analytical Chromatography Fraction",
        subtitle: "Convert 750 micromoles of purified peptide fraction into millimoles.",
        steps: [
          "Identify the value: 750 µmol.",
          "Divide by 1,000: 750 ÷ 1,000 = 0.75 mmol.",
          "Result: 750 micromoles equals 0.75 millimoles."
        ]
      }
    ]
  },
  table: {
    title: "Micromole to Millimole Reference Table",
    headers: ["Micromoles (µmol)", "Millimoles (mmol)", "Application Context"],
    rows: [
      { fromVal: "1 µmol", toVal: "0.001 mmol", extra: "Trace microplate assay sensitivity" },
      { fromVal: "10 µmol", toVal: "0.01 mmol", extra: "High-throughput drug screening well" },
      { fromVal: "50 µmol", toVal: "0.05 mmol", extra: "Micro-fluidic reaction volume" },
      { fromVal: "100 µmol", toVal: "0.1 mmol", extra: "Biochemical cuvette substrate concentration" },
      { fromVal: "500 µmol", toVal: "0.5 mmol", extra: "Serum metabolite reference target" },
      { fromVal: "1,000 µmol", toVal: "1.0 mmol", extra: "1 Millimole baseline benchmark" },
      { fromVal: "2,500 µmol", toVal: "2.5 mmol", extra: "Analytical chromatography fraction" },
      { fromVal: "5,000 µmol", toVal: "5.0 mmol", extra: "Physiological blood glucose reference level" }
    ]
  },
  applications: {
    title: "Practical Applications of µmol to mmol Conversion",
    items: [
      {
        title: "Clinical Biochemistry & Diagnostics",
        text: "Medical diagnostics convert trace cellular metabolite assays from micromoles into millimoles to present clear, scannable pathology charts."
      },
      {
        title: "Biopharmaceutical Media Preparation",
        text: "Bioprocess engineers scale up microplate screening quantities (µmol) to pilot-scale bioreactor formulations (mmol) when optimizing cell growth media."
      },
      {
        title: "Environmental Microbial Ecology",
        text: "Environmental scientists measure microbial nitrate and phosphate consumption rates in micromoles and convert to millimoles for watershed nitrogen cycle modeling."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Multiplying instead of dividing: Converting from a smaller unit (micromoles) to a larger unit (millimoles) requires dividing by 1,000.",
      "Symbol confusion: Ensure 'µmol' (micromoles) is not confused with 'nmol' (nanomoles) or 'mmol' (millimoles).",
      "Units consistency: Always check whether the volume unit is liters (L) or deciliters (dL) when converting concentrations."
    ]
  },
  faqs: [
    {
      question: "How many millimoles are in 1 micromole?",
      answer: "There are exactly 0.001 millimoles in 1 micromole."
    },
    {
      question: "What is the formula to convert micromoles to millimoles?",
      answer: "The formula is: Millimoles (mmol) = Micromoles (µmol) ÷ 1,000."
    },
    {
      question: "How do I convert 1,500 micromoles to millimoles?",
      answer: "Divide 1,500 by 1,000 to get 1.5 millimoles (mmol)."
    },
    {
      question: "What is 1,000 µmol in mmol?",
      answer: "1,000 micromoles equals exactly 1 millimole."
    },
    {
      question: "Is µmol/L smaller than mmol/L?",
      answer: "Yes, 1 µmol/L is 1,000 times less concentrated than 1 mmol/L (1 µmol/L = 0.001 mmol/L)."
    },
    {
      question: "How do I convert millimoles back to micromoles?",
      answer: "Multiply the millimole value by 1,000 (e.g., 3.2 mmol × 1,000 = 3,200 µmol)."
    },
    {
      question: "What is the difference between µM and mM?",
      answer: "µM stands for micromolar (µmol/L), while mM stands for millimolar (mmol/L). 1 µM = 0.001 mM."
    },
    {
      question: "How many particles are in a micromole?",
      answer: "One micromole contains 6.02214076 × 10¹⁷ elementary entities."
    }
  ],
  relatedList: [
    { label: "Mole to Micromole", from: "mole", to: "micromole" },
    { label: "Millimole to Micromole", from: "millimole", to: "micromole" },
    { label: "Micromole to Mole", from: "micromole", to: "mole" },
    { label: "Micromole to Nanomole", from: "micromole", to: "nanomole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry (Green Book).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units."
  ]
};
