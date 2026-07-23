import { CustomArticleData } from "./types";

export const gramToMicrogram: CustomArticleData = {
  fromUnitId: "gram",
  toUnitId: "microgram",
  seoTitle: "Gram to Microgram Converter - g to µg",
  metaDescription: "Quickly convert grams to micrograms (g to µg). Master the conversion math with step-by-step examples, a complete conversion table, and key laboratory insights.",
  h1: "Gram to Microgram Converter",
  introduction: [
    "The gram and the microgram are metric mass units representing different scales of precision. While a gram is suited for everyday objects, the microgram is used for microscopic measurements where tiny variances make a substantial difference.",
    "Understanding how to convert grams to micrograms is standard practice in toxicology, genetics, molecular chemistry, and neuropharmacology. Since both units belong to the metric system, they scale predictably using powers of ten."
  ],
  quickAnswer: {
    text: "To convert grams to micrograms, multiply the gram value by 1,000,000 (one million). For example, 0.005 grams is equivalent to exactly 5,000 micrograms.",
    formulaDisplay: "1 g = 1,000,000 µg",
    subtext: "Simply multiply by 1,000,000 to convert from the standard base unit to the microscopic metric unit."
  },
  aboutSourceUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a metric unit of mass defined as one-thousandth of the SI base unit, the kilogram. It is typically used to measure food portions, mailing weights, and school-lab solid chemical samples."
  },
  aboutTargetUnit: {
    title: "Understanding the Microgram (µg / mcg)",
    text: "The microgram (symbols: µg or mcg) is one-millionth of a gram. It measures ultra-fine materials like airborne particulate matter, hormones, toxicological residues, and highly potent medical compound doses."
  },
  relationship: "Because the prefix 'micro' represents one-millionth (10⁻⁶), one gram is equal to exactly one million micrograms. Moving from grams to micrograms requires multiplying the gram amount by one million.",
  relationshipTitle: "The Metric Scaling: Grams vs Micrograms",
  relationshipItems: [
    { label: "1 Gram (g)", value: "1,000,000 Micrograms (µg)" },
    { label: "1 Microgram (µg)", value: "0.000001 Grams (g)" }
  ],
  formula: {
    text: "Convert radioactivity or compound weights by multiplying the gram value by one million.",
    math: "Mass in Micrograms (µg) = Mass in Grams (g) × 1,000,000",
    subtext: "For scientific software, you can also write this as multiplying by 10⁶."
  },
  formulaTitle: "The Gram to Microgram Formula",
  practicalTip: {
    title: "Moving Six Decimal Spaces",
    text: "Since there are six zeros in one million, you can convert grams to micrograms by moving the decimal point six spaces to the right, adding placeholder zeros if necessary."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Hormone Concentration",
        subtitle: "A blood serum vial containing a hormone extract lists 0.00025 grams of active solute. Convert this to micrograms.",
        steps: [
          "Identify the weight in grams: 0.00025 g.",
          "Write down the conversion formula: µg = g × 1,000,000.",
          "Perform the multiplication: 0.00025 × 1,000,000 = 250.",
          "Conclude the calculation: 0.00025 grams is exactly equal to 250 micrograms."
        ]
      },
      {
        title: "Example 2: Powder Residue",
        subtitle: "An environmental air filter collects 0.015 grams of micro-debris. Determine the weight in micrograms.",
        steps: [
          "Identify the weight: 0.015 g.",
          "Multiply by the metric factor: 0.015 × 1,000,000.",
          "Perform the calculation: 15,000.",
          "Conclude the calculation: 0.015 grams is equivalent to 15,000 micrograms."
        ]
      }
    ]
  },
  table: {
    title: "Gram to Microgram Reference Table",
    headers: ["Grams (g)", "Micrograms (µg)", "Typical Reference Levels"],
    rows: [
      { fromVal: "0.000001", toVal: "1", extra: "Approximate weight of a single human cell" },
      { fromVal: "0.00001", toVal: "10", extra: "Trace dosage of vitamin B12" },
      { fromVal: "0.0001", toVal: "100", extra: "Average dosage of thyroid hormone medication" },
      { fromVal: "0.001", toVal: "1,000", extra: "1 Milligram (mg), a tiny grain of sugar" },
      { fromVal: "0.01", toVal: "10,000", extra: "A very small eyelash hair" },
      { fromVal: "0.1", toVal: "100,000", extra: "Weight of a tiny drop of dew" },
      { fromVal: "0.5", toVal: "500,000", extra: "Half a standard paperclip weight" },
      { fromVal: "1", toVal: "1,000,000", extra: "One full standard paperclip" }
    ]
  },
  expertNote: {
    title: "Note on symbols: µg vs mcg",
    text: "While 'µg' is the official SI abbreviation, hospitals and pharmacies often use 'mcg' in handwritten prescriptions to prevent confusing the Greek letter mu (µ) with 'm' (milli), which could lead to a catastrophic thousandfold overdose."
  },
  applications: {
    title: "Real-World Microscopic Applications",
    items: [
      {
        title: "Medical Drug Prescriptions",
        text: "Hormone replacements, vitamins, and specialized cardiovascular drugs are administered in micrograms. Lab manufacturing begins with bulk gram quantities that must scale down precisely."
      },
      {
        title: "Water Quality Testing",
        text: "Environmental scientists measure water impurities, lead content, and organic pesticides in micrograms per liter, converting from gram measures during analytical trials."
      },
      {
        title: "Forensic Analysis",
        text: "Forensic labs detect trace amounts of chemical substances on clothing or physical fibers. These tiny samples are registered in micrograms for criminal evidence."
      }
    ]
  },
  pitfalls: {
    title: "Common Micro-Conversion Mistakes",
    items: [
      "Multiplying by 1,000 instead of 1,000,000: Confusing milligrams with micrograms is extremely common. Milligrams require a factor of 1,000, while micrograms require a factor of 1,000,000.",
      "Miscounting zeros: When multiplying decimals by one million, it is easy to misalign the numbers. Always write down your calculation or use a digital scientific tool to verify.",
      "Misreading Mu (µ): In fast-paced clinical environments, ensure the 'µg' symbol is clearly distinguished from 'mg' (milligrams)."
    ]
  },
  faqs: [
    {
      question: "How do I convert grams to micrograms?",
      answer: "Multiply the gram value by 1,000,000 to convert to micrograms."
    },
    {
      question: "How many micrograms are in a gram?",
      answer: "There are exactly 1,000,000 (one million) micrograms in one gram."
    },
    {
      question: "What is the difference between µg and mcg?",
      answer: "There is no difference in weight. Both represent micrograms (one-millionth of a gram). 'µg' is the official scientific abbreviation, while 'mcg' is used in medicine to prevent clinical errors."
    },
    {
      question: "What is the formula for converting g to µg?",
      answer: "The formula is: Micrograms (µg) = Grams (g) × 1,000,000."
    },
    {
      question: "Is 0.001 grams equal to 1,000 micrograms?",
      answer: "Yes, 0.001 multiplied by one million is exactly 1,000 micrograms (which is also equivalent to 1 milligram)."
    },
    {
      question: "Why does this converter use the symbol µg?",
      answer: "'µg' is the internationally recognized SI symbol for microgram, where 'µ' is the Greek letter mu representing micro."
    },
    {
      question: "Can I convert small decimal values?",
      answer: "Yes, our scientific engine accurately handles minute decimal inputs and outputs them clearly."
    },
    {
      question: "How do I convert micrograms back to grams?",
      answer: "Divide the microgram value by 1,000,000 to perform the reverse calculation."
    }
  ],
  relatedList: [
    { label: "Gram to Kilogram", from: "gram", to: "kilogram" },
    { label: "Gram to Milligram", from: "gram", to: "milligram" },
    { label: "Gram to Pound", from: "gram", to: "pound" },
    { label: "Gram to Ounce", from: "gram", to: "ounce" },
    { label: "Microgram to Gram", from: "microgram", to: "gram" }
  ],
  references: [
    "BIPM - SI Unit Prefixes Guide",
    "FDA Guidelines for Preventing Drug Name and Abbreviation Confusion"
  ]
};
