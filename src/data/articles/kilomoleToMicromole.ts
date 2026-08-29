import { CustomArticleData } from "./types";

export const kilomoleToMicromole: CustomArticleData = {
  fromUnitId: "kilomole",
  toUnitId: "micromole",
  seoTitle: "Kilomole to Micromole Converter (kmol to µmol)",
  metaDescription: "Convert Kilomoles to Micromoles (kmol to µmol) accurately. Learn the conversion formula, calculation steps, reference table, and chemical engineering scale-down applications.",
  h1: "Kilomole to Micromole Converter",
  introduction: [
    "The kilomole (kmol) and micromole (µmol) span nine decimal orders of magnitude (10⁹) in chemical measurement. While the kilomole is the workhorse unit of large-scale chemical manufacturing, petrochemical refineries, and continuous flow engineering, the micromole is the standard unit for micro-scale enzyme assays, bio-analytical chromatography, and cellular biochemistry.",
    "Because one kilomole equals 1,000 moles (10³ mol) and one micromole equals one-millionth of a mole (10⁻⁶ mol), exactly one billion micromoles (1,000,000,000 µmol) make up one single kilomole. Converting kilomoles to micromoles is achieved by multiplying the kilomole value by 1,000,000,000 (or 10⁹).",
    "Use our interactive online converter above for instantaneous conversions, or explore the conversion formula, step-by-step examples, reference conversion table, and process scale-down tips below."
  ],
  quickAnswer: {
    text: "To convert Kilomoles to Micromoles, multiply the quantity in kilomoles by 1,000,000,000 (10⁹). For example, 1 kmol equals exactly 1,000,000,000 µmol, and 0.005 kmol equals 5,000,000 µmol.",
    formulaDisplay: "µmol = kmol × 1,000,000,000 = kmol × 10⁹",
    subtext: "1 Kilomole is equal to exactly 1,000,000,000 Micromoles (10⁹ µmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilomole (kmol)",
    text: "The kilomole (symbol: kmol) is an SI decimal multiple equal to 1,000 moles (10³ mol) or 6.02214076 × 10²⁶ elementary entities. It is standard across chemical process simulation, bulk chemical processing, and refinery mass balance calculations."
  },
  aboutTargetUnit: {
    title: "Understanding the Micromole (µmol)",
    text: "The micromole (symbol: µmol or umol) is an SI sub-multiple representing 10⁻⁶ moles (6.02214076 × 10¹⁷ elementary particles). It is standard in cellular biology, clinical diagnostic assays, enzyme kinetics, and micro-fluidic screening."
  },
  relationship: "The relationship spans nine orders of magnitude (10⁹): 1 kmol = 1,000,000,000 µmol, and 1 µmol = 10⁻⁹ kmol (0.000000001 kmol).",
  relationshipTitle: "Kilomole to Micromole Scale Hierarchy",
  relationshipItems: [
    { label: "0.000001 kmol (1 mmol)", value: "1,000 µmol (Laboratory cuvette charge)" },
    { label: "0.001 kmol (1 mol)", value: "1,000,000 µmol (1 Mole standard benchmark)" },
    { label: "0.01 kmol (10 mol)", value: "10,000,000 µmol (Pilot reactor batch)" },
    { label: "0.1 kmol (100 mol)", value: "100,000,000 µmol (Semi-works chemical feed)" },
    { label: "1.0 kmol (1,000 mol)", value: "1,000,000,000 µmol (1 Kilomole standard)" }
  ],
  formula: {
    text: "Multiply the amount of substance in kilomoles by 1,000,000,000 (10⁹) to determine the equivalent quantity in micromoles.",
    math: "µmol = kmol × 1000000000",
    subtext: "To convert micromoles back to kilomoles, divide the micromole value by 1,000,000,000."
  },
  formulaTitle: "Kilomole to Micromole Conversion Formula",
  practicalTip: {
    title: "Scientific Notation for Huge Multipliers",
    text: "When calculating multi-scale conversions, use scientific notation ($10^9$) to avoid losing or adding extraneous zeros. For instance, 0.004 kmol = 4.0 × 10⁻³ × 10⁹ = 4.0 × 10⁶ µmol (4,000,000 µmol)."
  },
  expertNote: {
    title: "Scale-Down Micro-Reactor Optimization",
    text: "Modern pharmaceutical process developers use micro-fluidic reactors requiring only micromoles (µmol) of expensive reagents to screen thousands of catalyst candidates before committing to commercial multi-kilomole (kmol) production campaigns."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: High-Value Homogeneous Catalyst Charge",
        subtitle: "Convert 0.0035 kilomoles of chiral rhodium catalyst into micromoles.",
        steps: [
          "Identify the given kilomole value: 0.0035 kmol.",
          "Apply the conversion formula: µmol = 0.0035 × 1,000,000,000.",
          "Calculate: 0.0035 × 10⁹ = 3,500,000 µmol.",
          "Result: 0.0035 kmol equals 3,500,000 µmol (3.5 moles)."
        ]
      },
      {
        title: "Example 2: Scale-Down Bioreactor Validation",
        subtitle: "Convert 0.00012 kilomoles of amino acid feed into micromoles.",
        steps: [
          "Identify the value: 0.00012 kmol (1.2 × 10⁻⁴ kmol).",
          "Multiply by 10⁹: 1.2 × 10⁻⁴ × 10⁹ = 120,000 µmol.",
          "Result: 0.00012 kilomoles equals 120,000 micromoles."
        ]
      },
      {
        title: "Example 3: Trace Additive Tank Inventory",
        subtitle: "Convert 0.05 kilomoles of corrosion inhibitor into micromoles.",
        steps: [
          "Identify the value: 0.05 kmol.",
          "Multiply by 1,000,000,000: 0.05 × 10⁹ = 50,000,000 µmol.",
          "Result: 0.05 kilomoles equals 50,000,000 micromoles (50 moles)."
        ]
      }
    ]
  },
  table: {
    title: "Kilomole to Micromole Reference Table",
    headers: ["Kilomoles (kmol)", "Micromoles (µmol)", "Scientific Notation (µmol)"],
    rows: [
      { fromVal: "0.0001 kmol", toVal: "100,000 µmol", extra: "1.0 × 10⁵ µmol" },
      { fromVal: "0.0005 kmol", toVal: "500,000 µmol", extra: "5.0 × 10⁵ µmol" },
      { fromVal: "0.001 kmol (1 mol)", toVal: "1,000,000 µmol", extra: "1.0 × 10⁶ µmol" },
      { fromVal: "0.005 kmol", toVal: "5,000,000 µmol", extra: "5.0 × 10⁶ µmol" },
      { fromVal: "0.01 kmol", toVal: "10,000,000 µmol", extra: "1.0 × 10⁷ µmol" },
      { fromVal: "0.05 kmol", toVal: "50,000,000 µmol", extra: "5.0 × 10⁷ µmol" },
      { fromVal: "0.1 kmol", toVal: "100,000,000 µmol", extra: "1.0 × 10⁸ µmol" },
      { fromVal: "0.5 kmol", toVal: "500,000,000 µmol", extra: "5.0 × 10⁸ µmol" },
      { fromVal: "1.0 kmol", toVal: "1,000,000,000 µmol", extra: "1.0 × 10⁹ µmol" },
      { fromVal: "2.5 kmol", toVal: "2,500,000,000 µmol", extra: "2.5 × 10⁹ µmol" }
    ]
  },
  applications: {
    title: "Practical Applications of kmol to µmol Conversion",
    items: [
      {
        title: "Pharmaceutical Process Scale-Down Modeling",
        text: "Process chemists scale down multi-kilomole manufacturing campaigns to benchtop micromole testing to optimize reaction yield, selectivity, and safety parameters."
      },
      {
        title: "Specialty Catalyst Batch Preparation",
        text: "Specialty chemical manufacturers convert bulk reactor catalyst feeds (kmol) to micromole microplate assay batches when evaluating turnover frequencies."
      },
      {
        title: "Environmental Contaminant Inventory Modeling",
        text: "Environmental scientists model total watershed chemical discharges (kmol) and translate them into micromolar concentrations for aquatic ecotoxicity studies."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Dividing instead of multiplying: Moving from a large unit (kilomoles) to a small sub-unit (micromoles) requires multiplying by 1,000,000,000 (10⁹).",
      "Multiplying by 10⁶ instead of 10⁹: Multiplying by 10⁶ gives millimoles (mmol), not micromoles (µmol).",
      "Symbol confusion: Ensure 'kmol' (10³ mol) is distinct from 'µmol' (10⁻⁶ mol) and 'nmol' (10⁻⁹ mol)."
    ]
  },
  faqs: [
    {
      question: "How many micromoles are in 1 kilomole?",
      answer: "There are exactly 1,000,000,000 (one billion or 10⁹) micromoles in 1 kilomole."
    },
    {
      question: "What is the formula to convert kilomoles to micromoles?",
      answer: "The formula is: Micromoles (µmol) = Kilomoles (kmol) × 1,000,000,000."
    },
    {
      question: "How do you convert 0.002 kilomoles to micromoles?",
      answer: "Multiply 0.002 by 1,000,000,000 to get 2,000,000 micromoles (2 million µmol)."
    },
    {
      question: "What is 1 kmol in µmol?",
      answer: "1 kmol equals exactly 1,000,000,000 µmol."
    },
    {
      question: "How do I convert micromoles back to kilomoles?",
      answer: "Divide the micromole value by 1,000,000,000 (e.g., 500,000,000 µmol ÷ 10⁹ = 0.5 kmol)."
    },
    {
      question: "Why does 1 kmol equal 10⁹ µmol?",
      answer: "Because 1 kmol = 1,000 mol (10³ mol) and 1 mol = 1,000,000 µmol (10⁶ µmol), yielding 10³ × 10⁶ = 10⁹ µmol."
    },
    {
      question: "How many molecules are in 1 kilomole?",
      answer: "One kilomole contains 6.02214076 × 10²⁶ elementary particles."
    },
    {
      question: "What is the symbol for micromoles?",
      answer: "The official SI symbol is 'µmol', often written as 'umol' in ASCII or plain text systems."
    }
  ],
  relatedList: [
    { label: "Micromole to Kilomole", from: "micromole", to: "kilomole" },
    { label: "Kilomole to Mole", from: "kilomole", to: "mole" },
    { label: "Kilomole to Millimole", from: "kilomole", to: "millimole" },
    { label: "Kilomole to Nanomole", from: "kilomole", to: "nanomole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "Perry's Chemical Engineers' Handbook (9th Edition, McGraw-Hill).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry."
  ]
};
