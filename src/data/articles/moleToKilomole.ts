import { CustomArticleData } from "./types";

export const moleToKilomole: CustomArticleData = {
  fromUnitId: "mole",
  toUnitId: "kilomole",
  seoTitle: "Mole to Kilomole Converter (mol to kmol)",
  metaDescription: "Convert Moles to Kilomoles (mol to kmol) accurately. Learn the conversion formula, step-by-step examples, industrial application reference tables, and FAQs.",
  h1: "Mole to Kilomole Converter",
  introduction: [
    "The mole (mol) and kilomole (kmol) are SI units used to quantify the amount of chemical substance. While moles are standard for laboratory chemistry and benchtop experiment stoichiometry, kilomoles are used in large-scale industrial chemical engineering, petrochemical processing, and plant mass balances.",
    "Because the metric prefix 'kilo-' represents one thousand (10³), one kilomole equals exactly 1,000 moles. To convert any substance quantity from moles to kilomoles, divide the number of moles by 1,000.",
    "Use our interactive converter above to perform quick calculations, or refer to the formula, step-by-step engineering examples, reference table, and industrial tips below."
  ],
  quickAnswer: {
    text: "To convert Moles to Kilomoles, divide the quantity in moles by 1,000. For example, 2,500 mol equals 2.5 kmol, and 500 mol equals 0.5 kmol.",
    formulaDisplay: "kmol = mol ÷ 1,000",
    subtext: "1 Mole is equal to exactly 0.001 Kilomoles (10⁻³ kmol)."
  },
  aboutSourceUnit: {
    title: "Understanding the Mole (mol)",
    text: "The mole (symbol: mol) is the SI base unit for amount of substance. Defined by the BIPM, one mole contains exactly 6.02214076 × 10²³ elementary entities (atoms, molecules, or formula units)."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilomole (kmol)",
    text: "The kilomole (symbol: kmol) is a multiple SI unit equal to 1,000 moles (10³ mol). It is widely used in chemical plant design, combustion thermodynamics, fluid dynamics, and environmental process engineering where substance amounts are measured in metric tons."
  },
  relationship: "The relationship between moles and kilomoles is defined by the metric system scale factor: 1 kmol = 1,000 mol, and 1 mol = 0.001 kmol.",
  relationshipTitle: "Benchtop to Industrial Molar Scale",
  relationshipItems: [
    { label: "100 mol", value: "0.1 kmol (Large laboratory glass reactor)" },
    { label: "1,000 mol", value: "1.0 kmol (1 Kilomole baseline threshold)" },
    { label: "5,000 mol", value: "5.0 kmol (Pilot plant batch synthesis)" },
    { label: "25,000 mol", value: "25 kmol (Commercial distillation column hourly throughput)" },
    { label: "100,000 mol", value: "100 kmol (Industrial ammonia plant daily feed)" }
  ],
  formula: {
    text: "Divide the substance amount in moles by 1,000 to determine the equivalent in kilomoles.",
    math: "kmol = mol / 1000",
    subtext: "To convert kilomoles back to moles, multiply the kilomole value by 1,000."
  },
  formulaTitle: "Mole to Kilomole Formula",
  practicalTip: {
    title: "Decimal Shift Rule for Engineers",
    text: "To quickly convert moles to kilomoles without a calculator, move the decimal point three positions to the left. For example, 14,500 mol becomes 14.5 kmol."
  },
  expertNote: {
    title: "Industrial Mass Balance & Molar Mass Correlation",
    text: "In chemical engineering, kilomoles directly correlate molecular weight in grams to total mass in kilograms. For instance, 1 kmol of water (H₂O, molecular weight 18.015 g/mol) has a mass of exactly 18.015 kilograms. Converting moles to kilomoles simplifies plant mass-energy balances."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Petrochemical Refinery Feedstock",
        subtitle: "Convert 15,000 moles of ethylene feedstock into kilomoles for a polymerization reactor.",
        steps: [
          "Identify the given molar quantity: 15,000 mol.",
          "Apply the conversion formula: kmol = 15,000 ÷ 1,000.",
          "Calculate: 15,000 ÷ 1,000 = 15 kmol.",
          "Result: 15,000 moles of ethylene equals 15 kilomoles."
        ]
      },
      {
        title: "Example 2: Industrial Ammonia Synthesis",
        subtitle: "Convert 85,400 moles of nitrogen gas into kilomoles for an industrial Haber-Bosch reactor.",
        steps: [
          "Identify the molar quantity: 85,400 mol.",
          "Divide by 1,000: 85,400 ÷ 1,000 = 85.4 kmol.",
          "Result: 85,400 moles equals 85.4 kilomoles."
        ]
      },
      {
        title: "Example 3: Power Plant Flue Gas Neutralization",
        subtitle: "Convert 3,200 moles of calcium hydroxide (lime) into kilomoles.",
        steps: [
          "Identify the molar value: 3,200 mol.",
          "Divide by 1,000: 3,200 ÷ 1,000 = 3.2 kmol.",
          "Result: 3,200 moles of lime equals 3.2 kilomoles."
        ]
      }
    ]
  },
  table: {
    title: "Mole to Kilomole Reference Table",
    headers: ["Moles (mol)", "Kilomoles (kmol)", "Industrial Application Context"],
    rows: [
      { fromVal: "100 mol", toVal: "0.1 kmol", extra: "Pilot facility batch test charge" },
      { fromVal: "500 mol", toVal: "0.5 kmol", extra: "Specialty chemical reactor charge" },
      { fromVal: "1,000 mol", toVal: "1.0 kmol", extra: "1 Kilomole baseline threshold" },
      { fromVal: "2,500 mol", toVal: "2.5 kmol", extra: "Intermediate storage tank transfer" },
      { fromVal: "5,000 mol", toVal: "5.0 kmol", extra: "Industrial solvent recovery charge" },
      { fromVal: "10,000 mol", toVal: "10 kmol", extra: "Polymerization vessel hourly feed" },
      { fromVal: "50,000 mol", toVal: "50 kmol", extra: "Refinery cracking unit throughput" },
      { fromVal: "100,000 mol", toVal: "100 kmol", extra: "Bulk industrial gas generation" }
    ]
  },
  applications: {
    title: "Practical Applications of mol to kmol Conversion",
    items: [
      {
        title: "Chemical Process Engineering",
        text: "Process engineers express continuous mass flow rates in kilomoles per hour (kmol/h) on Piping and Instrumentation Diagrams (P&IDs) to simplify heat exchanger and reactor sizing."
      },
      {
        title: "Petrochemical & Polymer Manufacturing",
        text: "Refineries convert large-scale monomer input quantities from moles to kilomoles when designing catalytic cracking and resin polymerization processes."
      },
      {
        title: "Flue Gas & Environmental Scrubbing",
        text: "Environmental engineers calculate sulfur dioxide and nitrous oxide emissions in kilomoles to design limestone flue-gas desulfurization scrubbers for power stations."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Multiplying instead of dividing: Converting from a smaller unit (moles) to a larger unit (kilomoles) requires division by 1,000.",
      "Confusing kilomoles with kilograms: Kilomoles (kmol) measure particle count, whereas kilograms (kg) measure mass. They are related via molar mass (kg = kmol × Molar Mass in g/mol).",
      "Prefix confusion: Do not confuse kmol (10³ mol) with mmol (10⁻³ mol)."
    ]
  },
  faqs: [
    {
      question: "How many moles are in 1 kilomole?",
      answer: "There are exactly 1,000 moles in 1 kilomole."
    },
    {
      question: "What is the formula to convert moles to kilomoles?",
      answer: "The formula is: Kilomoles (kmol) = Moles (mol) ÷ 1,000."
    },
    {
      question: "How do I convert 5,000 moles to kilomoles?",
      answer: "Divide 5,000 by 1,000 to get 5 kilomoles (kmol)."
    },
    {
      question: "How does 1 kmol relate to mass in kilograms?",
      answer: "One kilomole of any substance has a mass in kilograms equal to its molecular weight in grams per mole. For example, 1 kmol of O₂ (molecular weight 32 g/mol) weighs exactly 32 kg."
    },
    {
      question: "What is 1,000 moles in kmol?",
      answer: "1,000 moles equals exactly 1 kilomole."
    },
    {
      question: "How do I convert kilomoles back to moles?",
      answer: "Multiply the kilomole value by 1,000 (e.g., 12.5 kmol × 1,000 = 12,500 mol)."
    },
    {
      question: "What is Avogadro's number for a kilomole?",
      answer: "One kilomole contains 6.02214076 × 10²⁶ elementary entities (atoms, molecules, or formula units)."
    },
    {
      question: "Why do chemical engineers use kilomoles?",
      answer: "Using kilomoles keeps numerical values manageable when modeling industrial processes that involve metric tons of materials."
    }
  ],
  relatedList: [
    { label: "Mole to Millimole", from: "mole", to: "millimole" },
    { label: "Mole to Micromole", from: "mole", to: "micromole" },
    { label: "Mole to Nanomole", from: "mole", to: "nanomole" },
    { label: "Millimole to Kilomole", from: "millimole", to: "kilomole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry (Green Book).",
    "Perry's Chemical Engineers' Handbook (9th Edition)."
  ]
};
