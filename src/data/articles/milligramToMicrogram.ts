import { CustomArticleData } from "./types";

export const milligramToMicrogram: CustomArticleData = {
  fromUnitId: "milligram",
  toUnitId: "microgram",
  seoTitle: "Milligram to Microgram Converter - mg to mcg",
  metaDescription: "Convert milligrams to micrograms (mg to mcg/µg) instantly. Learn the 1,000 multiplier rule, clinical dosage safety, worked examples, and conversion tables.",
  canonicalUrl: "https://unitsconvertors.com/milligram-to-microgram",
  h1: "Milligram to Microgram Converter",
  introduction: [
    "In clinical medicine, endocrinology, biochemistry, and air quality analysis, mass is routinely measured in milligrams (mg) and micrograms (µg or mcg). While common over-the-counter painkillers and antibiotics are prescribed in milligrams, highly potent pharmaceuticals—such as levothyroxine, digoxin, and fentanyl—as well as dietary vitamins like B12 and D3 are dosed strictly in micrograms.",
    "Because both units are standard metric submultiples of the gram, converting milligrams to micrograms is exact. Since the prefix 'milli-' represents $10^{-3}$ and 'micro-' represents $10^{-6}$, one milligram contains exactly 1,000 micrograms. Mastering this conversion with absolute accuracy is a fundamental requirement for patient safety, laboratory research, and environmental toxicology."
  ],
  quickAnswer: {
    text: "To convert milligrams to micrograms, multiply the milligram value by 1,000 (or move the decimal point three places to the right). For example, 0.05 milligrams equals exactly 50 micrograms (50 mcg).",
    formulaDisplay: "Micrograms (µg/mcg) = Milligrams (mg) × 1,000",
    subtext: "1 milligram is equal to exactly 1,000 micrograms (1 µg = 0.001 mg)."
  },
  aboutSourceUnit: {
    title: "Understanding the Milligram (mg)",
    text: "The milligram (symbol: mg) is a metric unit of mass equal to one-thousandth of a gram ($10^{-3}\\text{ g}$) or one-millionth of a kilogram ($10^{-6}\\text{ kg}$). It is the primary unit for medication dosages in everyday healthcare, nutritional facts panels for sodium and potassium, and analytical chemistry reagent preparation."
  },
  aboutTargetUnit: {
    title: "Understanding the Microgram (µg or mcg)",
    text: "The microgram (symbol: µg in scientific contexts, standardly written as 'mcg' in clinical medicine and pharmacology) is a metric unit of mass equal to one-millionth of a gram ($10^{-6}\\text{ g}$) or one-thousandth of a milligram ($10^{-3}\\text{ mg}$). The microgram is standard for measuring ultra-potent therapeutic drugs, thyroid hormones, blood serum biomarkers, and airborne particulate matter concentrations (PM2.5 and PM10)."
  },
  relationship: "The relationship between milligrams and micrograms is governed by decimal metric scaling: 1 milligram = 0.001 grams, and 1 microgram = 0.000001 grams. Dividing 0.001 by 0.000001 yields exactly 1,000. Therefore, 1 milligram equals 1,000 micrograms, and 1 microgram equals 0.001 milligrams.",
  relationshipTitle: "Metric Decimal Factor: Milligrams vs. Micrograms",
  relationshipItems: [
    { label: "1 Milligram (mg)", value: "1,000 Micrograms (µg or mcg)" },
    { label: "1 Microgram (µg/mcg)", value: "0.001 Milligrams (mg)" },
    { label: "0.1 Milligrams (mg)", value: "100 Micrograms (µg)" },
    { label: "0.025 Milligrams (mg)", value: "25 Micrograms (µg)" }
  ],
  formula: {
    text: "To convert mass from milligrams to micrograms, multiply the milligram value by 1,000.",
    math: "\\text{Mass (mcg/µg)} = \\text{Mass (mg)} \\times 1,000",
    subtext: "To convert micrograms back to milligrams: Mass (mg) = Mass (mcg/µg) ÷ 1,000"
  },
  formulaTitle: "Milligram to Microgram Conversion Formula",
  practicalTip: {
    title: "The Three-Place Right Decimal Shift",
    text: "To convert milligrams to micrograms mentally without a calculator, shift the decimal point three places to the right: 0.125 mg becomes 125 mcg; 0.05 mg becomes 50 mcg; and 2.5 mg becomes 2,500 mcg."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Thyroid Hormone Dosage Verification",
        subtitle: "A clinical pharmacy order indicates 0.088 milligrams of levothyroxine sodium daily. Determine the equivalent dose in micrograms (mcg) for tablet dispensing.",
        steps: [
          "State prescribed dose: 0.088 mg.",
          "Apply conversion formula: mcg = mg × 1,000.",
          "Calculate: 0.088 × 1,000 = 88.",
          "Conclusion: 0.088 mg equals an 88 mcg levothyroxine tablet."
        ]
      },
      {
        title: "Example 2: Vitamin D3 Potency Conversion",
        subtitle: "A liquid vitamin D3 dropper bottle contains 0.025 milligrams of cholecalciferol per drop. Express this mass in micrograms.",
        steps: [
          "Identify value: 0.025 mg.",
          "Multiply by 1,000: 0.025 × 1,000 = 25.",
          "Conclusion: 0.025 milligrams corresponds to 25 micrograms (1,000 IU)."
        ]
      },
      {
        title: "Example 3: Cardiac Glycoside Digoxin Administration",
        subtitle: "A patient receives 0.25 milligrams of digoxin oral solution. How many micrograms is this dose?",
        steps: [
          "Given: 0.25 mg.",
          "Calculate: 0.25 × 1,000 = 250.",
          "Conclusion: 0.25 mg is equal to 250 mcg."
        ]
      }
    ]
  },
  table: {
    title: "Milligram to Microgram Quick Reference Table",
    headers: ["Milligrams (mg)", "Micrograms (µg / mcg)", "Grams (g)", "International Units Vitamin D3 (IU)"],
    rows: [
      { fromVal: "0.005 mg", toVal: "5 mcg", extra: "0.000005 g", extra2: "200 IU" },
      { fromVal: "0.010 mg", toVal: "10 mcg", extra: "0.000010 g", extra2: "400 IU" },
      { fromVal: "0.025 mg", toVal: "25 mcg", extra: "0.000025 g", extra2: "1,000 IU" },
      { fromVal: "0.050 mg", toVal: "50 mcg", extra: "0.000050 g", extra2: "2,000 IU" },
      { fromVal: "0.100 mg", toVal: "100 mcg", extra: "0.000100 g", extra2: "4,000 IU" },
      { fromVal: "0.250 mg", toVal: "250 mcg", extra: "0.000250 g", extra2: "10,000 IU" },
      { fromVal: "0.500 mg", toVal: "500 mcg", extra: "0.000500 g", extra2: "20,000 IU" },
      { fromVal: "1.000 mg", toVal: "1,000 mcg", extra: "0.001000 g", extra2: "40,000 IU" },
      { fromVal: "2.500 mg", toVal: "2,500 mcg", extra: "0.002500 g", extra2: "100,000 IU" },
      { fromVal: "5.000 mg", toVal: "5,000 mcg", extra: "0.005000 g", extra2: "200,000 IU" }
    ]
  },
  expertNote: {
    title: "Clinical Prescribing Safety: The 'mcg' vs. 'µg' Rule",
    text: "The Institute for Safe Medication Practices (ISMP) and the Joint Commission strictly designate 'µg' on their 'Do Not Use' list of dangerous abbreviations. In handwritten or poorly rendered digital prescriptions, the Greek letter mu (µ) is easily misread as 'm', transforming a microgram order into a milligram order—a catastrophic 1,000-fold overdose. In clinical environments, always write 'mcg' or 'micrograms' instead of 'µg'."
  },
  applications: {
    title: "Practical Healthcare, Biochemical & Environmental Scenarios",
    items: [
      {
        title: "Clinical Pharmacology and Narrow-Therapeutic-Index Drugs",
        text: "Drugs like digoxin, fentanyl, and synthetic thyroid hormones have extremely narrow therapeutic windows. Pharmacists convert physician orders in milligrams into microgram unit doses to prevent fatal cardiac arrhythmias or respiratory depression."
      },
      {
        title: "Nutritional Vitamin and Mineral Supplementation",
        text: "Dietary supplement formulators convert bulk raw vitamin B12 (cyanocobalamin) or vitamin D3 powders weighed in milligrams into consumer label microgram servings ($1\\text{ mcg vitamin D3} = 40\\text{ IU}$)."
      },
      {
        title: "Air Quality Particulate Matter Analysis",
        text: "Environmental scientists collect particulate matter on quartz fiber filters weighed in milligrams, converting net filter mass gains to microgram concentrations per cubic meter of ambient air (µg/m³)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000 instead of multiplying: Micrograms are 1,000 times smaller than milligrams. Converting milligrams to micrograms must always produce a 1,000-fold larger number.",
      "Misplacing the decimal on fractions of a milligram: Writing 0.05 mg as 5 mcg instead of the correct 50 mcg introduces a 10-fold under-dosing error.",
      "Using 'µg' in handwritten medical charts: Handwritten 'µg' frequently looks like 'mg', leading to fatal 1,000-fold overdoses. Always write 'mcg'.",
      "Confusing vitamin D international units (IU) with micrograms: For Vitamin D3, 1 mcg equals 40 IU, not 1 IU. A 50 mcg dose equals 2,000 IU."
    ]
  },
  faqs: [
    {
      question: "How do I convert milligrams to micrograms?",
      answer: "To convert milligrams (mg) to micrograms (mcg or µg), multiply the milligram value by 1,000 (or move the decimal point three places to the right). For example, 0.5 mg multiplied by 1,000 equals 500 mcg."
    },
    {
      question: "How many micrograms are in 1 milligram?",
      answer: "There are exactly 1,000 micrograms in 1 milligram (1 mg = 1,000 µg/mcg)."
    },
    {
      question: "Is mcg the same as µg?",
      answer: "Yes, 'mcg' and 'µg' are identical units representing the microgram (one-millionth of a gram). The abbreviation 'mcg' is required in medicine to prevent handwritten 'µg' from being misread as 'mg'."
    },
    {
      question: "What is 0.25 mg in mcg?",
      answer: "0.25 milligrams equals exactly 250 micrograms (0.25 × 1,000 = 250 mcg)."
    },
    {
      question: "What is 0.1 mg in mcg?",
      answer: "0.1 milligrams equals exactly 100 micrograms (0.1 × 1,000 = 100 mcg)."
    },
    {
      question: "What is 0.05 mg in mcg?",
      answer: "0.05 milligrams equals exactly 50 micrograms (0.05 × 1,000 = 50 mcg)."
    },
    {
      question: "How do I convert micrograms back to milligrams?",
      answer: "To convert micrograms back to milligrams, divide the microgram value by 1,000. For instance, 400 mcg divided by 1,000 equals 0.4 mg."
    },
    {
      question: "What is 1,000 mcg in mg?",
      answer: "1,000 micrograms equals exactly 1.0 milligram."
    },
    {
      question: "How many micrograms of vitamin D are in 1,000 IU?",
      answer: "For Vitamin D3, 40 International Units (IU) equals 1 microgram. Therefore, 1,000 IU contains exactly 25 micrograms (0.025 mg)."
    }
  ],
  relatedList: [
    { label: "Microgram to Milligram", from: "microgram", to: "milligram" },
    { label: "Milligram to Gram", from: "milligram", to: "gram" },
    { label: "Gram to Microgram", from: "gram", to: "microgram" },
    { label: "Milligram to Kilogram", from: "milligram", to: "kilogram" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "Institute for Safe Medication Practices (ISMP). <em>ISMP's List of Error-Prone Abbreviations, Symbols, and Dose Designations</em>.",
    "United States Pharmacopeial Convention (USP). <em>USP–NF General Notices and Requirements</em>."
  ]
};
