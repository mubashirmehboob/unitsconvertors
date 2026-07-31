import { CustomArticleData } from "./types";

export const moleToNanomole: CustomArticleData = {
  fromUnitId: "mole",
  toUnitId: "nanomole",
  seoTitle: "Mole to Nanomole Converter (mol to nmol)",
  metaDescription: "Convert Moles to Nanomoles (mol to nmol) effortlessly. Learn the conversion formula, calculation steps, reference table, and common FAQs.",
  h1: "Mole to Nanomole Converter",
  introduction: [
    "The mole (mol) and nanomole (nmol) are metric measurements representing the total count of chemical particles. While moles quantify macroscopic masses in stoichiometry and bulk chemical manufacturing, nanomoles describe trace biological molecules, such as hormones, peptides, primers, and cellular neurotransmitters.",
    "The SI prefix 'nano-' denotes one-billionth (10⁻⁹). Consequently, one mole contains exactly 1,000,000,000 nanomoles. Converting moles to nanomoles involves multiplying the molar quantity by 1,000,000,000 (or 10⁹).",
    "Use our instant online tool above to perform conversions, or review the step-by-step mathematical guides, reference tables, and laboratory notes below."
  ],
  quickAnswer: {
    text: "To convert Moles to Nanomoles, multiply the quantity in moles by 1,000,000,000 (10⁹). For example, 0.000005 mol equals 5,000 nmol, and 0.0000001 mol equals 100 nmol.",
    formulaDisplay: "nmol = mol × 1,000,000,000",
    subtext: "1 Mole is equal to exactly 1,000,000,000 Nanomoles (10⁹ nmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Mole (mol)",
    text: "The mole (symbol: mol) is the fundamental SI base unit for amount of substance. One mole is defined as having exactly 6.02214076 × 10²³ elementary entities."
  },
  aboutTargetUnit: {
    title: "Understanding the Nanomole (nmol)",
    text: "The nanomole (symbol: nmol) is an SI decimal sub-multiple equal to one-billionth of a mole (10⁻⁹ mol). Nanomoles are the standard unit of measurement in molecular biology assays, genomic sequencing, receptor-ligand kinetics, and high-sensitivity clinical assays."
  },
  relationship: "The relationship between moles and nanomoles is based on the nano metric factor: 1 mol = 1,000,000,000 nmol, and 1 nmol = 0.000000001 mol.",
  relationshipTitle: "Molar to Nanomolar Scale Spectrum",
  relationshipItems: [
    { label: "0.000000001 mol", value: "1 nmol (Ultrasensitive assay detection limit)" },
    { label: "0.00000005 mol", value: "50 nmol (Synthetic DNA oligo scale)" },
    { label: "0.000001 mol", value: "1,000 nmol (1 Micromole equivalent)" },
    { label: "0.001 mol", value: "1,000,000 nmol (1 Millimole equivalent)" },
    { label: "1.0 mol", value: "1,000,000,000 nmol (1 Molar macroscopic benchmark)" }
  ],
  formula: {
    text: "Multiply the chemical amount in moles by 1,000,000,000 (10⁹) to determine the equivalent in nanomoles.",
    math: "nmol = mol × 1000000000",
    subtext: "To convert nanomoles back to moles, divide the nanomole value by 1,000,000,000."
  },
  formulaTitle: "Mole to Nanomole Conversion Formula",
  practicalTip: {
    title: "Scientific Notation Rule",
    text: "When converting moles expressed in scientific notation (e.g., 4.2 × 10⁻⁷ mol), add 9 to the exponent to convert directly to nanomoles: (4.2 × 10⁻⁷) × 10⁹ = 4.2 × 10² = 420 nmol."
  },
  expertNote: {
    title: "Genomics & Targeted Therapeutics",
    text: "Modern CRISPR guide RNA, siRNA duplexes, and PCR primers are ordered from biotechnology vendors in nanomolar yields (e.g., 25 nmol, 100 nmol). Converting macro molar calculations from precursor reactions into nanomoles helps geneticists quantify precise transfection titers."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Synthetic Oligonucleotide Yield",
        subtitle: "Convert 0.000000075 moles of synthesized custom primer into nanomoles.",
        steps: [
          "Identify the given molar quantity: 0.000000075 mol.",
          "Apply the conversion formula: nmol = 0.000000075 × 1,000,000,000.",
          "Calculate: 0.000000075 × 1,000,000,000 = 75 nmol.",
          "Result: 0.000000075 moles of primer equals 75 nanomoles."
        ]
      },
      {
        title: "Example 2: Pharmacological Receptor Binding",
        subtitle: "Convert 0.0000024 moles of a radiolabeled ligand into nanomoles.",
        steps: [
          "Identify the molar value: 0.0000024 mol (2.4 × 10⁻⁶ mol).",
          "Multiply by 1,000,000,000: 0.0000024 × 10⁹ = 2,400 nmol.",
          "Result: 0.0000024 moles equals 2,400 nanomoles."
        ]
      },
      {
        title: "Example 3: Endocrine Serum Analysis",
        subtitle: "Convert 0.00000035 moles of thyroid hormone (T4) into nanomoles.",
        steps: [
          "Identify the molar value: 0.00000035 mol.",
          "Multiply by 1,000,000,000: 0.00000035 × 1,000,000,000 = 350 nmol.",
          "Result: 0.00000035 moles equals 350 nanomoles."
        ]
      }
    ]
  },
  table: {
    title: "Mole to Nanomole Reference Table",
    headers: ["Moles (mol)", "Nanomoles (nmol)", "Application Context"],
    rows: [
      { fromVal: "0.000000001 mol", toVal: "1 nmol", extra: "Trace cytokine assay detection limit" },
      { fromVal: "0.00000001 mol", toVal: "10 nmol", extra: "Cellular messenger RNA pool" },
      { fromVal: "0.00000005 mol", toVal: "50 nmol", extra: "Commercial PCR primer tube yield" },
      { fromVal: "0.0000001 mol", toVal: "100 nmol", extra: "Standard RNA interference (siRNA) synthesis" },
      { fromVal: "0.000001 mol", toVal: "1,000 nmol", extra: "1 Micromole equivalent" },
      { fromVal: "0.00001 mol", toVal: "10,000 nmol", extra: "Micro-scale peptide purification" },
      { fromVal: "0.0001 mol", toVal: "100,000 nmol", extra: "Enzyme kinetics substrate stock" },
      { fromVal: "0.001 mol", toVal: "1,000,000 nmol", extra: "1 Millimole equivalent" }
    ]
  },
  applications: {
    title: "Practical Applications of mol to nmol Conversion",
    items: [
      {
        title: "Genomics & Nucleic Acid Chemistry",
        text: "Custom DNA oligonucleotides, RNA aptamers, and gene expression probes are quantified and sold in nanomole amounts to ensure precise molar ratios during PCR amplification."
      },
      {
        title: "Endocrinology & Clinical Diagnostics",
        text: "Steroid hormones, vitamin D metabolites, and pituitary peptide concentrations in human serum are evaluated in nanomoles per liter (nmol/L)."
      },
      {
        title: "High-Throughput Mass Spectrometry",
        text: "Proteomics laboratories use nano-LC mass spectrometry to identify intracellular protein expressions measured down to single nanomole and picomole levels."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Confusing nmol with µmol: A nanomole (nmol, 10⁻⁹ mol) is 1,000 times smaller than a micromole (µmol, 10⁻⁶ mol).",
      "Exponent miscalculations: Moving between moles and nanomoles requires an exponent adjustment of 9 orders of magnitude (10⁹).",
      "Unit mislabeling: Writing 'Nmol' with a capital N refers to Newton-moles, which is not a recognized SI unit."
    ]
  },
  faqs: [
    {
      question: "How many nanomoles are in 1 mole?",
      answer: "There are exactly 1,000,000,000 (1 billion) nanomoles in 1 mole."
    },
    {
      question: "What is the formula to convert moles to nanomoles?",
      answer: "The formula is: Nanomoles (nmol) = Moles (mol) × 1,000,000,000."
    },
    {
      question: "How do I convert 0.00000005 moles to nanomoles?",
      answer: "Multiply 0.00000005 by 1,000,000,000 to get 50 nanomoles (nmol)."
    },
    {
      question: "What is the difference between nmol/L and nM?",
      answer: "There is no difference; 1 nanomole per liter (nmol/L) is identical to 1 nanomolar (nM)."
    },
    {
      question: "How many nanomoles are in 1 micromole?",
      answer: "There are 1,000 nanomoles in 1 micromole (1 µmol = 1,000 nmol)."
    },
    {
      question: "How do I convert nanomoles back to moles?",
      answer: "Divide the nanomole value by 1,000,000,000 (e.g., 500 nmol ÷ 1,000,000,000 = 0.0000005 mol)."
    },
    {
      question: "How many molecules are contained in 1 nanomole?",
      answer: "One nanomole contains approximately 6.02214076 × 10¹⁴ molecules or ions."
    },
    {
      question: "Why do biotechs specify oligo yields in nmol?",
      answer: "Biological experiments require very small mass amounts of DNA/RNA. Specifying orders in nanomoles allows researchers to accurately dilute reagents into precise working volumes."
    }
  ],
  relatedList: [
    { label: "Mole to Millimole", from: "mole", to: "millimole" },
    { label: "Mole to Micromole", from: "mole", to: "micromole" },
    { label: "Millimole to Nanomole", from: "millimole", to: "nanomole" },
    { label: "Micromole to Nanomole", from: "micromole", to: "nanomole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry (Green Book).",
    "NIST Special Publication 330: The International System of Units."
  ]
};
