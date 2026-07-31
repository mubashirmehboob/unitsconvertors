import { CustomArticleData } from "./types";

export const moleToMillimole: CustomArticleData = {
  fromUnitId: "mole",
  toUnitId: "millimole",
  seoTitle: "Mole to Millimole Converter (mol to mmol)",
  metaDescription: "Convert Moles to Millimoles (mol to mmol) accurately. Learn the conversion formula, step-by-step examples, reference table, and answers to common FAQs.",
  h1: "Mole to Millimole Converter",
  introduction: [
    "The mole (mol) and millimole (mmol) are standard SI units used across chemistry, biochemistry, and clinical medicine to measure the amount of a chemical substance. While moles quantify larger bulk chemical quantities in reaction stoichiometry, millimoles are widely used for biological fluids, drug dosages, and laboratory reagents.",
    "Because the SI prefix 'milli-' indicates one-thousandth (10⁻³), one mole contains exactly 1,000 millimoles. Converting from moles to millimoles simply requires multiplying the molar amount by 1,000.",
    "Use our interactive converter above for instant calculations, or consult the formula, practical examples, reference table, and expert notes below."
  ],
  quickAnswer: {
    text: "To convert Moles to Millimoles, multiply the quantity in moles by 1,000. For example, 0.05 mol equals 50 mmol, and 2.5 mol equals 2,500 mmol.",
    formulaDisplay: "mmol = mol × 1,000",
    subtext: "1 Mole is equal to exactly 1,000 Millimoles."
  },
  aboutSourceUnit: {
    title: "Understanding the Mole (mol)",
    text: "The mole (symbol: mol) is the base SI unit for the amount of substance. Since the 2019 redefinition of SI base units, one mole contains exactly 6.02214076 × 10²³ elementary entities (Avogadro's number), such as atoms, molecules, ions, or electrons."
  },
  aboutTargetUnit: {
    title: "Understanding the Millimole (mmol)",
    text: "The millimole (symbol: mmol) is a decimal fraction of a mole, representing one-thousandth of a mole (10⁻³ mol). Millimoles are standard in clinical blood chemistry, pharmacology, and routine analytical titrations where working quantities are smaller than a full mole."
  },
  relationship: "The relationship between moles and millimoles is derived directly from the SI prefix system: 1 mol = 1,000 mmol, and 1 mmol = 0.001 mol.",
  relationshipTitle: "Molar to Millimolar Quantity Scale",
  relationshipItems: [
    { label: "0.001 mol", value: "1 mmol (Standard physiological trace level)" },
    { label: "0.05 mol", value: "50 mmol (Routine laboratory reagent charge)" },
    { label: "0.1 mol", value: "100 mmol (Typical aqueous solution solute amount)" },
    { label: "1.0 mol", value: "1,000 mmol (1 Molar baseline benchmark)" },
    { label: "5.0 mol", value: "5,000 mmol (Industrial batch reactor scale)" }
  ],
  formula: {
    text: "Multiply the substance amount in moles by 1,000 to determine the amount in millimoles.",
    math: "mmol = mol × 1000",
    subtext: "To convert millimoles back to moles, divide the millimole value by 1,000."
  },
  formulaTitle: "Mole to Millimole Conversion Formula",
  practicalTip: {
    title: "Quick Decimal Shift Rule",
    text: "To convert moles to millimoles without a calculator, shift the decimal point three positions to the right. For example, 0.025 mol becomes 25.0 mmol."
  },
  expertNote: {
    title: "Clinical & Solution Chemistry Application",
    text: "In clinical biochemistry, serum electrolyte concentrations (such as glucose, sodium, and potassium) are expressed in mmol/L. When preparing stock solutions from pure solid reagents weighed in grams (via moles), converting to millimoles helps align molarity calculations directly with clinical reference ranges."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Pharmaceutical Solution Preparation",
        subtitle: "Convert 0.015 moles of sodium chloride (NaCl) into millimoles for a parenteral formulation.",
        steps: [
          "Identify the given value: 0.015 mol.",
          "Apply the conversion formula: mmol = 0.015 × 1,000.",
          "Calculate the result: 0.015 × 1,000 = 15 mmol.",
          "Result: 0.015 moles of NaCl is equal to 15 millimoles."
        ]
      },
      {
        title: "Example 2: Academic Chemistry Titration",
        subtitle: "Convert 0.25 moles of hydrochloric acid (HCl) into millimoles for a volumetric analysis exercise.",
        steps: [
          "Identify the given value: 0.25 mol.",
          "Multiply by 1,000: 0.25 × 1,000 = 250 mmol.",
          "Result: 0.25 moles of HCl equals 250 millimoles."
        ]
      },
      {
        title: "Example 3: Chemical Process Engineering",
        subtitle: "Convert 4.8 moles of acetic acid in a pilot plant process stream into millimoles.",
        steps: [
          "Identify the given value: 4.8 mol.",
          "Multiply by 1,000: 4.8 × 1,000 = 4,800 mmol.",
          "Result: 4.8 moles equals 4,800 millimoles."
        ]
      }
    ]
  },
  table: {
    title: "Mole to Millimole Reference Table",
    headers: ["Moles (mol)", "Millimoles (mmol)", "Typical Application Context"],
    rows: [
      { fromVal: "0.001 mol", toVal: "1 mmol", extra: "Micro-scale organic synthesis solute" },
      { fromVal: "0.005 mol", toVal: "5 mmol", extra: "Clinical blood glucose total pool equivalent" },
      { fromVal: "0.01 mol", toVal: "10 mmol", extra: "Analytical chemistry titration standard" },
      { fromVal: "0.05 mol", toVal: "50 mmol", extra: "Biochemical buffer formulation" },
      { fromVal: "0.1 mol", toVal: "100 mmol", extra: "Benchtop reaction substrate charge" },
      { fromVal: "0.5 mol", toVal: "500 mmol", extra: "Pilot scale reagent addition" },
      { fromVal: "1.0 mol", toVal: "1,000 mmol", extra: "1 Molar baseline per liter of solution" },
      { fromVal: "2.5 mol", toVal: "2,500 mmol", extra: "Industrial catalyst preparation" },
      { fromVal: "5.0 mol", toVal: "5,000 mmol", extra: "Bulk chemical neutralization vessel" }
    ]
  },
  applications: {
    title: "Practical Applications of mol to mmol Conversion",
    items: [
      {
        title: "Clinical Medicine & Medical Laboratories",
        text: "Medical diagnostics report blood gas, metabolite, and electrolyte levels in mmol/L. Converting patient dosing calculations from moles to millimoles ensures seamless alignment with laboratory blood panels."
      },
      {
        title: "Pharmaceutical Development & Formulation",
        text: "Pharmacologists convert drug quantities from moles to millimoles when measuring receptor binding affinities, enzyme kinetics, and active pharmaceutical ingredient (API) concentrations in vitro."
      },
      {
        title: "Environmental & Water Chemistry",
        text: "Water quality technicians measure dissolved mineral ions, alkalinity, and hardness in millimoles to evaluate treatment parameters and environmental compliance."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Confusing moles with molarity: A mole (mol) measures the total amount of substance, whereas molarity (mol/L or M) measures concentration per liter.",
      "Dividing instead of multiplying: Moving from a larger unit (moles) to a smaller metric subunit (millimoles) requires multiplication by 1,000, not division.",
      "Symbol capitalization errors: Always write 'mmol' with lowercase letters; capitalizing to 'Mmol' can cause confusion with Megamoles (10⁶ mol)."
    ]
  },
  faqs: [
    {
      question: "How many millimoles are in 1 mole?",
      answer: "There are exactly 1,000 millimoles in 1 mole."
    },
    {
      question: "What is the formula to convert moles to millimoles?",
      answer: "The formula is: Millimoles (mmol) = Moles (mol) × 1,000."
    },
    {
      question: "How do I convert 0.05 moles to millimoles?",
      answer: "Multiply 0.05 by 1,000 to get 50 millimoles (mmol)."
    },
    {
      question: "Why do medical labs use millimoles instead of moles?",
      answer: "Biological fluids contain small concentrations of dissolved substances. Expressing values in millimoles (e.g., 5.5 mmol/L blood glucose) avoids unwieldy leading zeros like 0.0055 mol/L."
    },
    {
      question: "Is mmol/L the same as molarity?",
      answer: "Yes, mmol/L represents millimolar concentration (mM), which equals 0.001 moles per liter (0.001 M)."
    },
    {
      question: "How do I convert 2.5 moles of NaCl into mmol?",
      answer: "Multiply 2.5 by 1,000 to obtain 2,500 mmol of NaCl."
    },
    {
      question: "How do I convert millimoles back to moles?",
      answer: "Divide the millimole quantity by 1,000 (e.g., 750 mmol ÷ 1,000 = 0.75 mol)."
    },
    {
      question: "What is Avogadro's number for a millimole?",
      answer: "One millimole contains 6.02214076 × 10²⁰ elementary entities (atoms, molecules, or ions)."
    }
  ],
  relatedList: [
    { label: "Mole to Micromole", from: "mole", to: "micromole" },
    { label: "Mole to Nanomole", from: "mole", to: "nanomole" },
    { label: "Mole to Kilomole", from: "mole", to: "kilomole" },
    { label: "Millimole to Mole", from: "millimole", to: "mole" }
  ],
  references: [
    "BIPM: Le Système international d'unités (SI Brochure, 9th Edition, 2019).",
    "IUPAC: Quantities, Units and Symbols in Physical Chemistry (Green Book, 3rd Edition).",
    "NIST Special Publication 330: The International System of Units (SI)."
  ]
};
