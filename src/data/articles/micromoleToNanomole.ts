import { CustomArticleData } from "./types";

export const micromoleToNanomole: CustomArticleData = {
  fromUnitId: "micromole",
  toUnitId: "nanomole",
  seoTitle: "Micromole to Nanomole Converter (µmol to nmol)",
  metaDescription: "Convert Micromoles to Nanomoles (µmol to nmol) accurately. Learn the conversion formula, step-by-step calculations, reference table, and laboratory applications.",
  h1: "Micromole to Nanomole Converter",
  introduction: [
    "The micromole (µmol) and nanomole (nmol) are metric sub-multiples of the mole, the fundamental SI unit for measuring the amount of substance. Micromoles quantify enzyme substrates, cellular metabolites, and micro-scale reagent solutions, whereas nanomoles are the preferred standard for oligonucleotide primers, hormone assays, pharmacological receptor binding studies, and gene sequencing reagents.",
    "Because the micro- prefix represents 10⁻⁶ and the nano- prefix represents 10⁻⁹, one micromole contains exactly 1,000 nanomoles. Converting micromoles to nanomoles is achieved by multiplying the micromole value by 1,000.",
    "Use our interactive online calculator above for instant laboratory calculations, or explore the detailed conversion formula, worked examples, reference conversion table, and biochemical guidelines below."
  ],
  quickAnswer: {
    text: "To convert Micromoles to Nanomoles, multiply the quantity in micromoles by 1,000. For example, 2.5 µmol equals 2,500 nmol, and 0.05 µmol equals 50 nmol.",
    formulaDisplay: "nmol = µmol × 1,000",
    subtext: "1 Micromole is equal to exactly 1,000 Nanomoles (10³ nmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Micromole (µmol)",
    text: "The micromole (symbol: µmol or umol) is an SI-derived unit representing one-millionth of a mole (10⁻⁶ mol) or 6.02214076 × 10¹⁷ elementary particles (atoms, molecules, or ions). It is the standard working unit for cellular biochemistry, clinical chemistry metabolite assays, and enzymatic rate measurements."
  },
  aboutTargetUnit: {
    title: "Understanding the Nanomole (nmol)",
    text: "The nanomole (symbol: nmol) is an SI-derived unit equal to one-billionth of a mole (10⁻⁹ mol) or 6.02214076 × 10¹⁴ elementary entities. It is essential in molecular biology for quantifying synthetic DNA/RNA oligonucleotides, PCR primers, circulating endocrine hormones, and receptor-ligand binding kinetics."
  },
  relationship: "The relationship between micromoles and nanomoles follows a direct 1,000:1 ratio derived from their metric decimal prefixes: 1 µmol = 1,000 nmol, and 1 nmol = 0.001 µmol.",
  relationshipTitle: "Micromole to Nanomole Scale Benchmark",
  relationshipItems: [
    { label: "0.001 µmol", value: "1 nmol (Single PCR primer tube scale)" },
    { label: "0.05 µmol", value: "50 nmol (Standard synthetic DNA synthesis yield)" },
    { label: "0.1 µmol", value: "100 nmol (Fluorescent probe hybridization aliquot)" },
    { label: "1.0 µmol", value: "1,000 nmol (Baseline 1 Micromole benchmark)" },
    { label: "10 µmol", value: "10,000 nmol (Microplate assay library master stock)" }
  ],
  formula: {
    text: "Multiply the amount of substance in micromoles by 1,000 to obtain the equivalent quantity in nanomoles.",
    math: "nmol = µmol × 1000",
    subtext: "To convert nanomoles back to micromoles, divide the nanomole value by 1,000."
  },
  formulaTitle: "Micromole to Nanomole Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Rule for Lab Reconstitution",
    text: "When converting micromoles to nanomoles on your lab bench, simply shift the decimal point three positions to the right. For example, 0.35 µmol becomes 350 nmol."
  },
  expertNote: {
    title: "Oligonucleotide Resuspension and Stock Calculations",
    text: "Custom primers ordered from oligonucleotide synthesis providers frequently specify dry yields in nanomoles (e.g., 25 nmol or 50 nmol) while stock buffer preparation recipes specify micromolar concentrations (µM or µmol/L). Converting between µmol and nmol ensures exact stoichiometric dilution without pipetting errors."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Lyophilized PCR Primer Resuspension",
        subtitle: "Convert a custom synthesis yield of 0.045 micromoles of primer into nanomoles.",
        steps: [
          "Identify the given micromole value: 0.045 µmol.",
          "Apply the conversion formula: nmol = 0.045 × 1,000.",
          "Calculate: 0.045 × 1,000 = 45 nmol.",
          "Result: 0.045 µmol equals 45 nmol."
        ]
      },
      {
        title: "Example 2: Enzyme Inhibitor Screening Assay",
        subtitle: "Convert 1.75 micromoles of small molecule candidate into nanomoles for micro-titer well dispensing.",
        steps: [
          "Identify the value: 1.75 µmol.",
          "Multiply by 1,000: 1.75 × 1,000 = 1,750 nmol.",
          "Result: 1.75 micromoles equals 1,750 nanomoles."
        ]
      },
      {
        title: "Example 3: Endocrine Hormone Immunoassay",
        subtitle: "Convert 0.008 micromoles of cortisol analyte standard into nanomoles.",
        steps: [
          "Identify the value: 0.008 µmol.",
          "Multiply by 1,000: 0.008 × 1,000 = 8 nmol.",
          "Result: 0.008 micromoles equals 8 nanomoles."
        ]
      }
    ]
  },
  table: {
    title: "Micromole to Nanomole Reference Table",
    headers: ["Micromoles (µmol)", "Nanomoles (nmol)", "Application Context"],
    rows: [
      { fromVal: "0.001 µmol", toVal: "1 nmol", extra: "Ultrasensitive biomarker threshold" },
      { fromVal: "0.01 µmol", toVal: "10 nmol", extra: "High-affinity receptor binding assay" },
      { fromVal: "0.025 µmol", toVal: "25 nmol", extra: "Standard scale PCR primer dry pellet" },
      { fromVal: "0.05 µmol", toVal: "50 nmol", extra: "Routine DNA sequencing primer synthesis" },
      { fromVal: "0.1 µmol", toVal: "100 nmol", extra: "Fluorescent RNA hybridization probe" },
      { fromVal: "0.5 µmol", toVal: "500 nmol", extra: "Enzymatic cofactor working stock" },
      { fromVal: "1.0 µmol", toVal: "1,000 nmol", extra: "1 Micromole standard reference point" },
      { fromVal: "2.5 µmol", toVal: "2,500 nmol", extra: "Peptide synthesis cleavage fraction" },
      { fromVal: "5.0 µmol", toVal: "5,000 nmol", extra: "Bioprocess analytical HPLC assay" },
      { fromVal: "10.0 µmol", toVal: "10,000 nmol", extra: "Synthetic chemistry reaction yield" }
    ]
  },
  applications: {
    title: "Practical Applications of µmol to nmol Conversion",
    items: [
      {
        title: "Molecular Biology & Next-Gen Sequencing (NGS)",
        text: "Researchers quantify adapter libraries and sequencing flow cell loading concentrations by converting micromolar stock buffers into exact nanomole and picomole library inputs."
      },
      {
        title: "Clinical Endocrinology & Toxicology",
        text: "Diagnostic laboratories express circulating thyroid hormones, steroids, and therapeutic drug levels in nanomoles per liter (nmol/L), requiring conversion from micromolar calibrator stocks."
      },
      {
        title: "High-Throughput Drug Discovery (HTS)",
        text: "Compound management facilities store screening libraries as micromole solutions and dilute them to nanomole aliquots for 384-well and 1536-well robotic microplate dispensing."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Dividing instead of multiplying: Moving from a larger unit (micromoles) to a smaller sub-multiple (nanomoles) requires multiplying by 1,000.",
      "Prefix confusion: Do not confuse the micro- prefix (µ, 10⁻⁶) with the pico- prefix (p, 10⁻¹²) or milli- prefix (m, 10⁻³).",
      "Volume vs. absolute amount: Ensure whether you are calculating total substance amount (µmol, nmol) or volumetric concentration (µM = µmol/L, nM = nmol/L)."
    ]
  },
  faqs: [
    {
      question: "How many nanomoles are in 1 micromole?",
      answer: "There are exactly 1,000 nanomoles in 1 micromole."
    },
    {
      question: "What is the formula to convert micromoles to nanomoles?",
      answer: "The formula is: Nanomoles (nmol) = Micromoles (µmol) × 1,000."
    },
    {
      question: "How do you convert 0.25 micromoles to nanomoles?",
      answer: "Multiply 0.25 by 1,000 to get 250 nanomoles (nmol)."
    },
    {
      question: "Is 1 µmol bigger than 1 nmol?",
      answer: "Yes, 1 micromole is 1,000 times larger than 1 nanomole."
    },
    {
      question: "How do I convert nanomoles back to micromoles?",
      answer: "Divide the nanomole value by 1,000 (e.g., 500 nmol ÷ 1,000 = 0.5 µmol)."
    },
    {
      question: "What does 50 nmol primer yield mean in micromoles?",
      answer: "A 50 nmol primer yield equals 0.05 µmol (50 ÷ 1,000)."
    },
    {
      question: "What is the difference between µmol/L and nmol/L?",
      answer: "1 µmol/L (1 micromolar, µM) is equal to 1,000 nmol/L (1,000 nanomolar, nM)."
    },
    {
      question: "How many molecules are in 1 nanomole compared to 1 micromole?",
      answer: "1 nanomole contains 6.022 × 10¹⁴ molecules, whereas 1 micromole contains 6.022 × 10¹⁷ molecules (1,000 times more)."
    }
  ],
  relatedList: [
    { label: "Micromole to Millimole", from: "micromole", to: "millimole" },
    { label: "Micromole to Mole", from: "micromole", to: "mole" },
    { label: "Nanomole to Micromole", from: "nanomole", to: "micromole" },
    { label: "Nanomole to Mole", from: "nanomole", to: "mole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC Compendium of Chemical Terminology (Gold Book).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units."
  ]
};
