import { CustomArticleData } from "./types";

export const micromoleToKilomole: CustomArticleData = {
  fromUnitId: "micromole",
  toUnitId: "kilomole",
  seoTitle: "Micromole to Kilomole Converter (µmol to kmol)",
  metaDescription: "Convert Micromoles to Kilomoles (µmol to kmol) accurately. Learn the conversion formula, calculation steps, reference table, and industrial scaling applications.",
  h1: "Micromole to Kilomole Converter",
  introduction: [
    "The micromole (µmol) and kilomole (kmol) represent opposite extremes on the metric scale for measuring the amount of chemical substance. While micromoles are utilized in micro-volume biochemistry, enzyme assays, and trace bio-analytical research, kilomoles are the primary engineering unit used in large-scale industrial chemical synthesis, petrochemical refining, and continuous reactor stoichiometry.",
    "Because one kilomole equals 1,000 moles (10³ mol) and one micromole equals one-millionth of a mole (10⁻⁶ mol), there are exactly one billion (10⁹ or 1,000,000,000) micromoles in one single kilomole. Converting micromoles to kilomoles requires dividing the micromole value by 1,000,000,000 (or multiplying by 10⁻⁹).",
    "Use our interactive online converter above for fast calculations, or study the exact mathematical formula, worked examples, scaling table, and industrial chemical engineering insights below."
  ],
  quickAnswer: {
    text: "To convert Micromoles to Kilomoles, divide the quantity in micromoles by 1,000,000,000 (or multiply by 10⁻⁹). For example, 1,000,000,000 µmol equals exactly 1 kmol, and 500,000,000 µmol equals 0.5 kmol.",
    formulaDisplay: "kmol = µmol ÷ 1,000,000,000 = µmol × 10⁻⁹",
    subtext: "1 Micromole is equal to exactly 10⁻⁹ Kilomoles (0.000000001 kmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Micromole (µmol)",
    text: "The micromole (symbol: µmol or umol) is an SI sub-multiple representing 10⁻⁶ moles (6.02214076 × 10¹⁷ elementary entities). It is standard in laboratory-scale molecular biology, trace catalyst screening, analytical spectroscopy, and biomedical metabolite assays."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilomole (kmol)",
    text: "The kilomole (symbol: kmol) is a decimal multiple of the mole representing 1,000 moles (10³ mol) or 6.02214076 × 10²⁶ particles. It is the core molar unit used in chemical process engineering, bulk chemical manufacturing, gas pipeline flow calculations, and plant-scale material balances."
  },
  relationship: "The relationship spans nine orders of magnitude (10⁹): 1 kmol = 1,000,000,000 µmol, and 1 µmol = 0.000000001 kmol (10⁻⁹ kmol).",
  relationshipTitle: "Micromolar to Kilomolar Scale Hierarchy",
  relationshipItems: [
    { label: "1 µmol", value: "10⁻⁹ kmol (Microplate biochemical well charge)" },
    { label: "1,000 µmol (1 mmol)", value: "10⁻⁶ kmol (Laboratory reaction flask charge)" },
    { label: "1,000,000 µmol (1 mol)", value: "10⁻³ kmol (Standard benchtop reagent bottle)" },
    { label: "100,000,000 µmol (100 mol)", value: "0.1 kmol (Pilot plant batch reactor feed)" },
    { label: "1,000,000,000 µmol (1,000 mol)", value: "1.0 kmol (Industrial railcar / tank reactor standard)" }
  ],
  formula: {
    text: "Divide the amount of substance in micromoles by 1,000,000,000 (10⁹) to determine the equivalent quantity in kilomoles.",
    math: "kmol = µmol / 1000000000",
    subtext: "To convert kilomoles back to micromoles, multiply the kilomole value by 1,000,000,000."
  },
  formulaTitle: "Micromole to Kilomole Conversion Formula",
  practicalTip: {
    title: "Scientific Notation in Engineering Calculations",
    text: "Because of the large numerical difference, expressing values in scientific notation prevents transcription errors: write 4.5 × 10⁸ µmol as 0.45 kmol."
  },
  expertNote: {
    title: "Bridging Discovery Chemistry to Industrial Scale-Up",
    text: "When translating high-throughput micro-fluidic screening catalysts (measured in µmol) to continuous bulk production reactors (rated in kmol/hour), chemical engineers utilize molar scaling factors to adjust catalyst-to-feed stoichiometric ratios accurately."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Pilot-Scale Homogeneous Catalyst Batch",
        subtitle: "Convert 250,000,000 micromoles of organometallic catalyst into kilomoles.",
        steps: [
          "Identify the given micromole value: 250,000,000 µmol (2.5 × 10⁸ µmol).",
          "Apply the conversion formula: kmol = 250,000,000 ÷ 1,000,000,000.",
          "Calculate: 250,000,000 × 10⁻⁹ = 0.25 kmol.",
          "Result: 250,000,000 µmol equals 0.25 kmol."
        ]
      },
      {
        title: "Example 2: Benchtop Analytical Assay Cumulative Total",
        subtitle: "Convert 15,000,000 micromoles of organic reagent into kilomoles.",
        steps: [
          "Identify the value: 15,000,000 µmol (1.5 × 10⁷ µmol).",
          "Divide by 10⁹: 1.5 × 10⁷ ÷ 10⁹ = 0.015 kmol.",
          "Result: 15,000,000 micromoles equals 0.015 kilomoles (15 moles)."
        ]
      },
      {
        title: "Example 3: Trace Impurity in Petrochemical Feedstock",
        subtitle: "Convert 50,000 micromoles of dissolved sulfur compound into kilomoles.",
        steps: [
          "Identify the value: 50,000 µmol (5.0 × 10⁴ µmol).",
          "Divide by 10⁹: 5.0 × 10⁴ ÷ 10⁹ = 5.0 × 10⁻⁵ kmol (0.00005 kmol).",
          "Result: 50,000 micromoles equals 0.00005 kilomoles."
        ]
      }
    ]
  },
  table: {
    title: "Micromole to Kilomole Reference Table",
    headers: ["Micromoles (µmol)", "Kilomoles (kmol)", "Scientific Notation (kmol)"],
    rows: [
      { fromVal: "1,000,000 µmol", toVal: "0.001 kmol", extra: "1.0 × 10⁻³ kmol (1 mol)" },
      { fromVal: "10,000,000 µmol", toVal: "0.01 kmol", extra: "1.0 × 10⁻² kmol (10 mol)" },
      { fromVal: "50,000,000 µmol", toVal: "0.05 kmol", extra: "5.0 × 10⁻² kmol (50 mol)" },
      { fromVal: "100,000,000 µmol", toVal: "0.1 kmol", extra: "1.0 × 10⁻¹ kmol (100 mol)" },
      { fromVal: "250,000,000 µmol", toVal: "0.25 kmol", extra: "2.5 × 10⁻¹ kmol (250 mol)" },
      { fromVal: "500,000,000 µmol", toVal: "0.5 kmol", extra: "5.0 × 10⁻¹ kmol (500 mol)" },
      { fromVal: "1,000,000,000 µmol", toVal: "1.0 kmol", extra: "1.0 × 10⁰ kmol (1,000 mol)" },
      { fromVal: "2,500,000,000 µmol", toVal: "2.5 kmol", extra: "2.5 × 10⁰ kmol (2,500 mol)" },
      { fromVal: "5,000,000,000 µmol", toVal: "5.0 kmol", extra: "5.0 × 10⁰ kmol (5,000 mol)" },
      { fromVal: "10,000,000,000 µmol", toVal: "10.0 kmol", extra: "1.0 × 10¹ kmol (10,000 mol)" }
    ]
  },
  applications: {
    title: "Practical Applications of µmol to kmol Conversion",
    items: [
      {
        title: "Chemical Process Scale-Up Modeling",
        text: "Process development teams scale laboratory micro-reactions to industrial continuous stirred-tank reactors (CSTRs), converting micro-molar kinetic data into kilomoles per hour feedstock specifications."
      },
      {
        title: "Environmental Trace Contaminant Mass Balance",
        text: "Environmental engineers measure water contaminant concentrations in µmol/L and convert to kmol of pollutant load per day discharged across municipal treatment plants."
      },
      {
        title: "Petroleum & Natural Gas Refining",
        text: "Refinery engineers calculate trace additive dosages and inhibitor consumption by converting micromoles of additive per kilogram of crude into kilomoles for tank-scale blending."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Missing orders of magnitude: A kilomole is 10⁹ times larger than a micromole (not 10⁶), because 1 kmol = 1,000 mol and 1 mol = 1,000,000 µmol.",
      "Decimal zero placement: When calculating manually, ensure you divide by 10⁹ (9 zeros) rather than 10⁶ (6 zeros).",
      "Confusing molar mass: Converting from µmol to kmol changes the molar unit scale, but the molar mass (g/mol or kg/kmol) remains numerically identical."
    ]
  },
  faqs: [
    {
      question: "How many micromoles are in 1 kilomole?",
      answer: "There are exactly 1,000,000,000 (1 billion or 10⁹) micromoles in 1 kilomole."
    },
    {
      question: "What is the formula to convert micromoles to kilomoles?",
      answer: "The formula is: Kilomoles (kmol) = Micromoles (µmol) ÷ 1,000,000,000."
    },
    {
      question: "What is 500,000,000 µmol in kmol?",
      answer: "500,000,000 µmol equals 0.5 kmol (500 moles)."
    },
    {
      question: "How many moles are in 1 kmol?",
      answer: "There are 1,000 moles in 1 kilomole (1 kmol = 1,000 mol)."
    },
    {
      question: "How do I convert kilomoles back to micromoles?",
      answer: "Multiply the kilomole value by 1,000,000,000 (e.g., 0.02 kmol × 10⁹ = 20,000,000 µmol)."
    },
    {
      question: "Why do chemical engineers use kilomoles?",
      answer: "Kilomoles align naturally with SI mass in kilograms: 1 kmol of a substance with molecular weight M has a mass of exactly M kilograms."
    },
    {
      question: "Is kmol an official SI unit?",
      answer: "The mole is the base SI unit; the kilomole is the standard decimal multiple with the SI prefix 'kilo-'."
    },
    {
      question: "How many elementary entities are in 1 kilomole?",
      answer: "One kilomole contains 6.02214076 × 10²⁶ elementary particles."
    }
  ],
  relatedList: [
    { label: "Micromole to Mole", from: "micromole", to: "mole" },
    { label: "Micromole to Millimole", from: "micromole", to: "millimole" },
    { label: "Kilomole to Micromole", from: "kilomole", to: "micromole" },
    { label: "Kilomole to Mole", from: "kilomole", to: "mole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "Perry's Chemical Engineers' Handbook (9th Edition, McGraw-Hill).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry."
  ]
};
