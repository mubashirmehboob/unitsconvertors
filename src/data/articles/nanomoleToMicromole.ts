import { CustomArticleData } from "./types";

export const nanomoleToMicromole: CustomArticleData = {
  fromUnitId: "nanomole",
  toUnitId: "micromole",
  seoTitle: "Nanomole to Micromole Converter (nmol to µmol)",
  metaDescription: "Convert Nanomoles to Micromoles (nmol to µmol) accurately. Learn the conversion formula, calculation steps, reference table, and molecular biology applications.",
  h1: "Nanomole to Micromole Converter",
  introduction: [
    "The nanomole (nmol) and micromole (µmol) are standard metric units used to quantify the amount of chemical and biochemical substance at micro- and nano-scales. In molecular biology and biochemistry, synthetic DNA/RNA primers, hormone assays, and fluorescent probes are commonly measured in nanomoles, whereas cellular metabolite levels, enzyme substrates, and stock reagent buffers are measured in micromoles.",
    "Because the nano- prefix denotes 10⁻⁹ and the micro- prefix denotes 10⁻⁶, one micromole equals exactly 1,000 nanomoles. Converting nanomoles to micromoles is achieved by dividing the nanomole value by 1,000.",
    "Use our interactive online calculator above for rapid lab calculations, or explore the conversion formula, step-by-step examples, reference table, and molecular biology protocols below."
  ],
  quickAnswer: {
    text: "To convert Nanomoles to Micromoles, divide the quantity in nanomoles by 1,000. For example, 500 nmol equals 0.5 µmol, and 2,500 nmol equals 2.5 µmol.",
    formulaDisplay: "µmol = nmol ÷ 1,000",
    subtext: "1 Nanomole is equal to exactly 0.001 Micromoles (10⁻³ µmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Nanomole (nmol)",
    text: "The nanomole (symbol: nmol) is an SI sub-multiple representing 10⁻⁹ moles (6.02214076 × 10¹⁴ elementary particles). It is standard in molecular biology for quantifying PCR primers, synthetic oligonucleotides, circulating hormones, and receptor-ligand binding kinetics."
  },
  aboutTargetUnit: {
    title: "Understanding the Micromole (µmol)",
    text: "The micromole (symbol: µmol or umol) is an SI sub-multiple equal to 10⁻⁶ moles (6.02214076 × 10¹⁷ elementary entities). It is widely used in enzyme kinetics, cellular biochemistry, clinical metabolite testing, and microplate reagent preparation."
  },
  relationship: "The relationship between nanomoles and micromoles follows a direct 1,000:1 ratio: 1 µmol = 1,000 nmol, and 1 nmol = 0.001 µmol (10⁻³ µmol).",
  relationshipTitle: "Nanomole to Micromole Scale Benchmark",
  relationshipItems: [
    { label: "1 nmol", value: "0.001 µmol (Ultrasensitive PCR primer scale)" },
    { label: "25 nmol", value: "0.025 µmol (Standard commercial oligo synthesis)" },
    { label: "50 nmol", value: "0.05 µmol (Medium-scale DNA primer synthesis)" },
    { label: "500 nmol", value: "0.5 µmol (Enzyme cofactor aliquot)" },
    { label: "1,000 nmol", value: "1.0 µmol (1 Micromole standard reference)" }
  ],
  formula: {
    text: "Divide the amount of substance in nanomoles by 1,000 to determine the equivalent quantity in micromoles.",
    math: "µmol = nmol / 1000",
    subtext: "To convert micromoles back to nanomoles, multiply the micromole value by 1,000."
  },
  formulaTitle: "Nanomole to Micromole Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Rule for Bench Work",
    text: "To convert nanomoles to micromoles without a calculator, shift the decimal point three places to the left. For example, 75 nmol becomes 0.075 µmol."
  },
  expertNote: {
    title: "Preparing 100 µM Primer Stock Solutions",
    text: "A universal molecular biology shortcut: to dissolve a lyophilized primer pellet to a standard 100 µM (100 µmol/L) master stock, add 10 times the nanomole yield in microliters of sterile TE buffer (e.g., 25 nmol dry oligo + 250 µL buffer = 100 µM stock)."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Lyophilized Oligo Synthesis Yield",
        subtitle: "Convert a custom synthesis yield of 35 nanomoles of DNA primer into micromoles.",
        steps: [
          "Identify the given nanomole value: 35 nmol.",
          "Apply the conversion formula: µmol = 35 ÷ 1,000.",
          "Calculate: 35 ÷ 1,000 = 0.035 µmol.",
          "Result: 35 nmol equals 0.035 µmol."
        ]
      },
      {
        title: "Example 2: Biochemical Substrate Dispensing",
        subtitle: "Convert 1,250 nanomoles of fluorescent substrate into micromoles.",
        steps: [
          "Identify the value: 1,250 nmol.",
          "Divide by 1,000: 1,250 ÷ 1,000 = 1.25 µmol.",
          "Result: 1,250 nanomoles equals 1.25 micromoles."
        ]
      },
      {
        title: "Example 3: Endocrine Hormone Level Calibration",
        subtitle: "Convert 85 nanomoles of thyroid hormone calibrator into micromoles.",
        steps: [
          "Identify the value: 85 nmol.",
          "Divide by 1,000: 85 ÷ 1,000 = 0.085 µmol.",
          "Result: 85 nanomoles equals 0.085 micromoles."
        ]
      }
    ]
  },
  table: {
    title: "Nanomole to Micromole Reference Table",
    headers: ["Nanomoles (nmol)", "Micromoles (µmol)", "Application Context"],
    rows: [
      { fromVal: "1 nmol", toVal: "0.001 µmol", extra: "Trace diagnostic assay sensitivity" },
      { fromVal: "10 nmol", toVal: "0.01 µmol", extra: "High-affinity ligand binding assay" },
      { fromVal: "25 nmol", toVal: "0.025 µmol", extra: "Standard PCR primer synthesis scale" },
      { fromVal: "50 nmol", toVal: "0.05 µmol", extra: "DNA sequencing oligonucleotide tube" },
      { fromVal: "100 nmol", toVal: "0.1 µmol", extra: "RNA fluorescent probe aliquot" },
      { fromVal: "250 nmol", toVal: "0.25 µmol", extra: "Micro-fluidic enzyme reaction" },
      { fromVal: "500 nmol", toVal: "0.5 µmol", extra: "Metabolic cofactor working aliquot" },
      { fromVal: "1,000 nmol", toVal: "1.0 µmol", extra: "1 Micromole standard benchmark" },
      { fromVal: "2,500 nmol", toVal: "2.5 µmol", extra: "Peptide synthesis cleavage fraction" },
      { fromVal: "5,000 nmol", toVal: "5.0 µmol", extra: "Bioprocess analytical HPLC sample" }
    ]
  },
  applications: {
    title: "Practical Applications of nmol to µmol Conversion",
    items: [
      {
        title: "Molecular Biology & PCR Primer Preparation",
        text: "Geneticists convert custom primer yields from nanomoles to micromoles to determine stock buffer volume dilutions for PCR master mixes."
      },
      {
        title: "Clinical Endocrinology Diagnostics",
        text: "Clinical lab scientists convert hormone and biomarker concentrations between nanomolar and micromolar scales when standardizing reporting formats."
      },
      {
        title: "Enzyme Kinetics & Pharmacology",
        text: "Biochemists measure sub-micromolar inhibition constants ($K_i$) and substrate consumption rates by converting nanomole outputs into micromole kinetic models."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Multiplying instead of dividing: Converting from smaller nanomoles to larger micromoles requires dividing by 1,000.",
      "Prefix confusion: Do not confuse nmol (10⁻⁹ mol) with pmol (10⁻¹² mol) or mmol (10⁻³ mol).",
      "Concentration vs amount: Ensure whether you are calculating total moles (nmol, µmol) or molarity (nM = nmol/L, µM = µmol/L)."
    ]
  },
  faqs: [
    {
      question: "How many micromoles are in 1 nanomole?",
      answer: "There are exactly 0.001 micromoles (10⁻³ µmol) in 1 nanomole."
    },
    {
      question: "What is the formula to convert nanomoles to micromoles?",
      answer: "The formula is: Micromoles (µmol) = Nanomoles (nmol) ÷ 1,000."
    },
    {
      question: "How do I convert 250 nanomoles to micromoles?",
      answer: "Divide 250 by 1,000 to get 0.25 micromoles (µmol)."
    },
    {
      question: "How many nanomoles are in 1 micromole?",
      answer: "There are exactly 1,000 nanomoles in 1 micromole."
    },
    {
      question: "What is 50 nmol in µmol?",
      answer: "50 nanomoles equals 0.05 micromoles (0.05 µmol)."
    },
    {
      question: "How do I convert micromoles back to nanomoles?",
      answer: "Multiply the micromole value by 1,000 (e.g., 0.8 µmol × 1,000 = 800 nmol)."
    },
    {
      question: "What is the difference between nM and µM?",
      answer: "nM is nanomolar (10⁻⁹ mol/L) and µM is micromolar (10⁻⁶ mol/L); 1 µM = 1,000 nM."
    },
    {
      question: "How many molecules are in 1 nanomole?",
      answer: "One nanomole contains approximately 6.02214076 × 10¹⁴ molecules."
    }
  ],
  relatedList: [
    { label: "Micromole to Nanomole", from: "micromole", to: "nanomole" },
    { label: "Nanomole to Millimole", from: "nanomole", to: "millimole" },
    { label: "Nanomole to Mole", from: "nanomole", to: "mole" },
    { label: "Mole to Nanomole", from: "mole", to: "nanomole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC Compendium of Chemical Terminology (Gold Book).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units."
  ]
};
