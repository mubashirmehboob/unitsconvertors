import { CustomArticleData } from "./types";

export const kilomoleToMole: CustomArticleData = {
  fromUnitId: "kilomole",
  toUnitId: "mole",
  seoTitle: "Kilomole to Mole Converter (kmol to mol)",
  metaDescription: "Convert Kilomoles to Moles (kmol to mol) accurately. Learn the conversion formula, calculation steps, reference table, and chemical engineering applications.",
  h1: "Kilomole to Mole Converter",
  introduction: [
    "The kilomole (kmol) and mole (mol) are fundamental metric units used to quantify the amount of chemical substance in scientific and engineering calculations. While the mole is the standard SI base unit used for benchtop laboratory reactions, analytical chemistry, and chemical stoichiometry, the kilomole is the foundational unit used in chemical process engineering, industrial reactors, and mass balances.",
    "Because the prefix kilo- indicates a factor of one thousand (10³), exactly 1,000 moles constitute one kilomole. Converting kilomoles to moles is performed simply by multiplying the kilomole value by 1,000.",
    "Use our interactive online converter above for fast calculations, or explore the conversion formula, worked examples, reference conversion table, and industrial chemical engineering notes below."
  ],
  quickAnswer: {
    text: "To convert Kilomoles to Moles, multiply the quantity in kilomoles by 1,000. For example, 2.5 kmol equals 2,500 mol, and 0.75 kmol equals 750 mol.",
    formulaDisplay: "mol = kmol × 1,000",
    subtext: "1 Kilomole is equal to exactly 1,000 Moles (10³ mol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilomole (kmol)",
    text: "The kilomole (symbol: kmol) is an SI decimal multiple equal to 1,000 moles (10³ mol). It represents approximately 6.02214076 × 10²⁶ elementary particles. In chemical engineering, the mass of 1 kmol of any chemical substance in kilograms is numerically equal to its molecular weight."
  },
  aboutTargetUnit: {
    title: "Understanding the Mole (mol)",
    text: "The mole (symbol: mol) is the base SI unit for the amount of substance. Since the 2019 redefinition of SI base units, one mole contains exactly 6.02214076 × 10²³ elementary entities (Avogadro's constant, $N_A$). It is used across all branches of chemistry and physics."
  },
  relationship: "The relationship between kilomoles and moles is based on the SI prefix kilo- (10³): 1 kmol = 1,000 mol, and 1 mol = 0.001 kmol.",
  relationshipTitle: "Kilomole to Mole Scale Benchmark",
  relationshipItems: [
    { label: "0.001 kmol", value: "1 mol (Standard laboratory reagent scale)" },
    { label: "0.05 kmol", value: "50 mol (Benchtop 20-liter synthesis run)" },
    { label: "0.1 kmol", value: "100 mol (Pilot plant batch reactor feed)" },
    { label: "1.0 kmol", value: "1,000 mol (Industrial process baseline benchmark)" },
    { label: "10 kmol", value: "10,000 mol (Commercial continuous distillation column flow)" }
  ],
  formula: {
    text: "Multiply the amount of substance in kilomoles by 1,000 to determine the equivalent quantity in moles.",
    math: "mol = kmol × 1000",
    subtext: "To convert moles back to kilomoles, divide the mole value by 1,000."
  },
  formulaTitle: "Kilomole to Mole Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Rule for Process Plants",
    text: "To convert kilomoles to moles quickly, shift the decimal point three places to the right. For example, 1.45 kmol becomes 1,450 mol."
  },
  expertNote: {
    title: "The Kilogram-Kilomole Mass Rule",
    text: "A key advantage of the kilomole in industrial engineering is direct mass compatibility: 1 kmol of water ($H_2O$, MW = 18.015) equals exactly 18.015 kg, whereas 1 mol of water equals 18.015 g. Converting kmol to mol scales your mass calculations directly from kilograms to grams."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Continuous Gas Reactor Feed Rate",
        subtitle: "Convert a natural gas feed rate of 3.6 kilomoles per hour of methane ($CH_4$) into moles per hour.",
        steps: [
          "Identify the given kilomole value: 3.6 kmol.",
          "Apply the conversion formula: mol = 3.6 × 1,000.",
          "Calculate: 3.6 × 1,000 = 3,600 mol.",
          "Result: 3.6 kmol/h equals 3,600 mol/h."
        ]
      },
      {
        title: "Example 2: Pilot Plant Batch Synthesis",
        subtitle: "Convert 0.45 kilomoles of reactant ester into moles.",
        steps: [
          "Identify the value: 0.45 kmol.",
          "Multiply by 1,000: 0.45 × 1,000 = 450 mol.",
          "Result: 0.45 kilomoles equals 450 moles."
        ]
      },
      {
        title: "Example 3: Bulk Reagent Tank Inventory",
        subtitle: "Convert 12.8 kilomoles of sodium hydroxide ($NaOH$) into moles.",
        steps: [
          "Identify the value: 12.8 kmol.",
          "Multiply by 1,000: 12.8 × 1,000 = 12,800 mol.",
          "Result: 12.8 kilomoles equals 12,800 moles."
        ]
      }
    ]
  },
  table: {
    title: "Kilomole to Mole Reference Table",
    headers: ["Kilomoles (kmol)", "Moles (mol)", "Mass of Water Equivalent (kg)"],
    rows: [
      { fromVal: "0.01 kmol", toVal: "10 mol", extra: "0.180 kg" },
      { fromVal: "0.05 kmol", toVal: "50 mol", extra: "0.901 kg" },
      { fromVal: "0.1 kmol", toVal: "100 mol", extra: "1.802 kg" },
      { fromVal: "0.25 kmol", toVal: "250 mol", extra: "4.504 kg" },
      { fromVal: "0.5 kmol", toVal: "500 mol", extra: "9.008 kg" },
      { fromVal: "1.0 kmol", toVal: "1,000 mol", extra: "18.015 kg" },
      { fromVal: "2.5 kmol", toVal: "2,500 mol", extra: "45.038 kg" },
      { fromVal: "5.0 kmol", toVal: "5,000 mol", extra: "90.075 kg" },
      { fromVal: "10.0 kmol", toVal: "10,000 mol", extra: "180.150 kg" },
      { fromVal: "25.0 kmol", toVal: "25,000 mol", extra: "450.375 kg" }
    ]
  },
  applications: {
    title: "Practical Applications of kmol to mol Conversion",
    items: [
      {
        title: "Chemical Process Engineering & Reactor Design",
        text: "Process engineers convert bulk plant-scale feedstocks (kmol) to standard stoichiometric reaction rates (mol/s) when sizing plug flow reactors and continuous stirred tanks."
      },
      {
        title: "Industrial Combustion & Flue Gas Analysis",
        text: "Combustion engineers convert fuel gas flow rates (kmol/h) into molar balances to determine exact oxygen demand and emissions compliance."
      },
      {
        title: "Bulk Pharmaceutical Scale-Up",
        text: "Development chemists translate pilot plant batch tickets (kmol) into standard laboratory formulations (mol) to cross-check purity and percent yields."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Dividing instead of multiplying: Moving from a larger multiple (kilomoles) to the base unit (moles) requires multiplying by 1,000.",
      "Prefix confusion: Do not confuse kmol (kilomoles, 10³ mol) with mmol (millimoles, 10⁻³ mol).",
      "Mass units alignment: Remember that 1 kmol corresponds to mass in kilograms, while 1 mol corresponds to mass in grams."
    ]
  },
  faqs: [
    {
      question: "How many moles are in 1 kilomole?",
      answer: "There are exactly 1,000 moles in 1 kilomole."
    },
    {
      question: "What is the formula to convert kilomoles to moles?",
      answer: "The formula is: Moles (mol) = Kilomoles (kmol) × 1,000."
    },
    {
      question: "How do you convert 4.5 kilomoles to moles?",
      answer: "Multiply 4.5 by 1,000 to get 4,500 moles (mol)."
    },
    {
      question: "What is 0.02 kmol in moles?",
      answer: "0.02 kmol equals 20 moles (0.02 × 1,000 = 20)."
    },
    {
      question: "How do I convert moles back to kilomoles?",
      answer: "Divide the mole value by 1,000 (e.g., 7,500 mol ÷ 1,000 = 7.5 kmol)."
    },
    {
      question: "What is the relationship between kmol, mol, and mass?",
      answer: "Mass in kilograms equals kmol × Molar Mass (g/mol), while mass in grams equals mol × Molar Mass (g/mol)."
    },
    {
      question: "How many molecules are in 1 kilomole?",
      answer: "One kilomole contains 6.02214076 × 10²⁶ elementary particles (1,000 times Avogadro's constant)."
    },
    {
      question: "Is kmol widely used in industry?",
      answer: "Yes, chemical process simulators (such as Aspen Plus and HYSYS) standardly use kmol and kmol/h for stream flow rates."
    }
  ],
  relatedList: [
    { label: "Mole to Kilomole", from: "mole", to: "kilomole" },
    { label: "Kilomole to Millimole", from: "kilomole", to: "millimole" },
    { label: "Kilomole to Micromole", from: "kilomole", to: "micromole" },
    { label: "Kilomole to Nanomole", from: "kilomole", to: "nanomole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "Perry's Chemical Engineers' Handbook (9th Edition, McGraw-Hill).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry (Green Book)."
  ]
};
