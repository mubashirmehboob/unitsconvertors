import { CustomArticleData } from "./types";

export const microgramToGram: CustomArticleData = {
  fromUnitId: "microgram",
  toUnitId: "gram",
  seoTitle: "Microgram to Gram Converter - µg to g",
  metaDescription: "Convert micrograms to grams (µg to g) with exact SI decimal formulas, clinical dosage calculations, chemistry examples, conversion tables, and step-by-step guidance.",
  canonicalUrl: "https://unitsconvertors.com/microgram-to-gram",
  h1: "Microgram to Gram Converter",
  introduction: [
    "The microgram (µg or mcg) and the gram (g) are two foundational metric units of mass widely used throughout medicine, biochemistry, analytical chemistry, and nutritional science. The microgram measures microscopic quantities of ultra-potent therapeutic drugs, peptide hormones, vitamins, and environmental toxins. The gram serves as the primary everyday metric unit for culinary ingredients, dietary macronutrients, and chemical bench reagents.",
    "Because both units belong directly to the coherent International System of Units (SI) and follow standard decimal prefixes, converting micrograms to grams is mathematically exact. The SI prefix 'micro-' denotes one-millionth (10⁻⁶). Therefore, dividing any microgram measurement by 1,000,000 (or moving the decimal point six places to the left) yields its exact equivalent in grams without fractional error or rounding."
  ],
  quickAnswer: {
    text: "To convert micrograms to grams, divide the microgram value by 1,000,000 (or multiply by 10⁻⁶). For example, 500,000 micrograms equals exactly 0.5 grams.",
    formulaDisplay: "Grams (g) = Micrograms (µg) ÷ 1,000,000",
    subtext: "1 gram equals exactly 1,000,000 micrograms (1 µg = 0.000001 g)."
  },
  aboutSourceUnit: {
    title: "Understanding the Microgram (µg / mcg)",
    text: "The microgram (symbol: µg, often written as mcg in clinical and pharmaceutical settings to prevent medical charting errors) is an SI unit of mass equal to one-millionth of a gram (10⁻⁶ g) or one-billionth of a kilogram (10⁻⁹ kg). It represents the standard scale for high-potency pharmaceuticals where therapeutic windows are narrow. For example, a daily replacement dose of levothyroxine for thyroid regulation is typically 50 to 125 µg, the recommended adult intake of vitamin B12 is 2.4 µg, and the lethal dose of botulinum toxin is measured in sub-microgram quantities."
  },
  aboutTargetUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is an SI-recognized metric unit of mass defined as exactly one-thousandth of the SI base unit, the kilogram (10⁻³ kg). First defined in 1795 as the mass of one cubic centimeter of water at ice melting point, the gram is the universal standard for nutritional macronutrient labeling (proteins, carbohydrates, fats), laboratory reagent compounding, and parcel weighing."
  },
  relationship: "The relationship between micrograms and grams is governed by the SI prefix 'micro-', which signifies an exact multiplier of 10⁻⁶ (one-millionth). Exactly one million micrograms constitute one gram, and one microgram is equal to 0.000001 grams. Converting from micrograms to grams requires shifting the decimal point six positions to the left.",
  relationshipTitle: "SI Decimal Scaling: Micrograms to Grams",
  relationshipItems: [
    { label: "1,000,000 Micrograms (µg)", value: "1.000000 Gram (g)" },
    { label: "500,000 Micrograms (µg)", value: "0.500000 Gram (g)" },
    { label: "1,000 Micrograms (1 mg)", value: "0.001000 Gram (g)" },
    { label: "1 Microgram (µg)", value: "0.000001 Gram (10⁻⁶ g)" }
  ],
  formula: {
    text: "To convert mass from micrograms to grams, divide the microgram value by 1,000,000, or multiply by 0.000001 (10⁻⁶).",
    math: "\\text{Mass (g)} = \\frac{\\text{Mass (µg)}}{1{,}000{,}000} = \\text{Mass (µg)} \\times 10^{-6}",
    subtext: "To reverse the conversion: Mass (µg) = Mass (g) × 1,000,000"
  },
  formulaTitle: "Microgram to Gram Mathematical Formula",
  practicalTip: {
    title: "The Six-Place Left Decimal Shift",
    text: "To convert micrograms to grams mentally, move the decimal point six places to the left: 250,000 µg becomes 0.25 g; 50,000 µg becomes 0.05 g; and 1,500 µg becomes 0.0015 g. Alternatively, divide by 1,000 to get milligrams, then divide by 1,000 again to get grams."
  },
  examples: {
    title: "Practical Clinical & Laboratory Calculation Examples",
    items: [
      {
        title: "Example 1: Pharmaceutical Active Batch Synthesis",
        subtitle: "A pharmaceutical compounding facility prepares a batch containing 850,000 micrograms of fentanyl citrate. Express this active pharmaceutical ingredient mass in grams.",
        steps: [
          "Identify the microgram quantity: 850,000 µg.",
          "Apply conversion formula: g = µg ÷ 1,000,000.",
          "Calculate: 850,000 ÷ 1,000,000 = 0.85 g.",
          "Conclusion: The batch contains exactly 0.85 grams of fentanyl citrate."
        ]
      },
      {
        title: "Example 2: Dietary Folate Supplement Tablet Analysis",
        subtitle: "A prenatal nutritional multivitamin contains 800 micrograms of dietary folate. Determine the mass of folate in grams for packaging total compliance.",
        steps: [
          "State value: 800 µg.",
          "Shift decimal six places left: 800 × 10⁻⁶ = 0.0008 g.",
          "Conclusion: 800 micrograms of folate equals exactly 0.0008 grams (0.8 mg)."
        ]
      },
      {
        title: "Example 3: Analytical Chemistry Sample Extraction",
        subtitle: "A soil testing laboratory detects 4,200 micrograms of cadmium in an agricultural soil core. Convert this heavy metal mass into grams.",
        steps: [
          "State value: 4,200 µg.",
          "Divide by 1,000,000: 4,200 ÷ 1,000,000 = 0.0042 g.",
          "Conclusion: The cadmium content equals exactly 0.0042 grams (4.2 mg)."
        ]
      }
    ]
  },
  table: {
    title: "Microgram to Gram Quick Reference Table",
    headers: ["Micrograms (µg / mcg)", "Grams (g)", "Milligrams (mg)", "Ounces (oz)"],
    rows: [
      { fromVal: "1 µg", toVal: "0.000001 g", extra: "0.001 mg", extra2: "0.000000035 oz" },
      { fromVal: "10 µg", toVal: "0.000010 g", extra: "0.010 mg", extra2: "0.000000353 oz" },
      { fromVal: "100 µg", toVal: "0.000100 g", extra: "0.100 mg", extra2: "0.000003527 oz" },
      { fromVal: "500 µg", toVal: "0.000500 g", extra: "0.500 mg", extra2: "0.000017637 oz" },
      { fromVal: "1,000 µg", toVal: "0.001000 g", extra: "1.000 mg", extra2: "0.000035274 oz" },
      { fromVal: "10,000 µg", toVal: "0.010000 g", extra: "10.000 mg", extra2: "0.000352740 oz" },
      { fromVal: "50,000 µg", toVal: "0.050000 g", extra: "50.000 mg", extra2: "0.001763698 oz" },
      { fromVal: "100,000 µg", toVal: "0.100000 g", extra: "100.000 mg", extra2: "0.003527396 oz" },
      { fromVal: "500,000 µg", toVal: "0.500000 g", extra: "500.000 mg", extra2: "0.017636981 oz" },
      { fromVal: "1,000,000 µg", toVal: "1.000000 g", extra: "1,000.000 mg", extra2: "0.035273962 oz" }
    ]
  },
  expertNote: {
    title: "Clinical Safety: The 'mcg' vs 'µg' Rule",
    text: "The Institute for Safe Medication Practices (ISMP) and the Joint Commission strictly recommend using the abbreviation 'mcg' rather than the Greek symbol 'µg' in handwritten medical charts, prescriptions, and pharmacy orders. When written quickly by hand, the Greek letter 'µ' can easily be mistaken for an 'm', transforming a microgram order into a milligram order—a catastrophic 1,000-fold drug overdose. In digital typography and international SI standards, however, 'µg' remains the official scientific symbol."
  },
  applications: {
    title: "Clinical, Environmental, and Biochemical Applications",
    items: [
      {
        title: "Pharmaceutical Manufacturing & Quality Control",
        text: "Quality assurance chemists verify tablet content uniformity by converting microgram active ingredient readings from HPLC chromatography into gram-based batch formulations."
      },
      {
        title: "Environmental Water Quality & Trace Toxicology",
        text: "Municipal water authorities convert heavy metal trace limits (lead, cadmium, mercury measured in µg/L) into cumulative grams of pollutant extracted by treatment resin beds."
      },
      {
        title: "Biochemistry & Recombinant Protein Research",
        text: "Molecular biologists purify recombinant enzymes and antibodies measured in micrograms before compiling total yield metrics in grams for pilot clinical trials."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000 instead of 1,000,000: Dividing by 1,000 converts micrograms to milligrams, not grams. 1 gram contains 1,000,000 micrograms.",
      "Miscounting zeros in fractional numbers: A value of 50 µg is 0.00005 g, not 0.0005 g (which is 500 µg). Careful decimal placement is critical.",
      "Omitting leading zeros: Writing '.0005 g' instead of '0.0005 g' risks visual misinterpretation in clinical documentation, potentially leading to fatal dosing errors.",
      "Confusing nanograms with micrograms: 1 microgram equals 1,000 nanograms (ng). Confusing ng and µg introduces a 1,000-fold calculation discrepancy."
    ]
  },
  faqs: [
    {
      question: "How do I convert micrograms to grams?",
      answer: "To convert micrograms (µg or mcg) to grams (g), divide the microgram value by 1,000,000, or multiply by 10⁻⁶. For example, 250,000 micrograms divided by 1,000,000 equals exactly 0.25 grams."
    },
    {
      question: "How many micrograms are in one gram?",
      answer: "There are exactly 1,000,000 (one million) micrograms in one gram. This is because the SI prefix 'micro-' denotes one-millionth (10⁻⁶)."
    },
    {
      question: "What is 1,000 micrograms in grams?",
      answer: "One thousand micrograms equals 0.001 grams (which is exactly 1 milligram)."
    },
    {
      question: "Is 'mcg' the same as 'µg'?",
      answer: "Yes, 'mcg' and 'µg' represent the exact same unit: the microgram. 'µg' is the official SI scientific symbol, while 'mcg' is mandated by medical safety organizations to prevent confusing the Greek letter 'µ' with 'm' (milligram)."
    },
    {
      question: "What is 500 micrograms in grams?",
      answer: "500 micrograms equals exactly 0.0005 grams (or 0.5 milligrams). Dividing 500 by 1,000,000 gives 0.0005 g."
    },
    {
      question: "How do I convert grams back to micrograms?",
      answer: "To convert grams back to micrograms, multiply the gram value by 1,000,000. For instance, 0.02 grams × 1,000,000 = 20,000 micrograms."
    },
    {
      question: "What is 100 µg in grams?",
      answer: "One hundred micrograms equals 0.0001 grams (or 0.1 milligrams)."
    },
    {
      question: "Why do vitamin supplements list doses in mcg instead of grams?",
      answer: "Certain vitamins (such as vitamin B12, vitamin D, and biotin) and trace minerals are physiologically active in tiny amounts. Expressing a dose as '50 mcg' is much easier to read and less prone to clerical error than writing '0.00005 g'."
    },
    {
      question: "How many micrograms are in 0.01 grams?",
      answer: "0.01 grams equals exactly 10,000 micrograms (or 10 milligrams)."
    },
    {
      question: "Can I convert micrograms to grams on a simple phone calculator?",
      answer: "Yes, enter your microgram value, press divide, enter 1000, press divide again, enter 1000, and press equals. This two-stage division by 1,000 safely divides by 1,000,000."
    }
  ],
  relatedList: [
    { label: "Gram to Microgram", from: "gram", to: "microgram" },
    { label: "Milligram to Microgram", from: "milligram", to: "microgram" },
    { label: "Milligram to Gram", from: "milligram", to: "gram" },
    { label: "Microgram to Milligram", from: "microgram", to: "milligram" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "Institute for Safe Medication Practices (ISMP). <em>List of Error-Prone Abbreviations, Symbols, and Dose Designations</em>.",
    "United States Pharmacopeia (USP). <em>General Chapter <1051> Cleaning and Sanitizing Procedures for Balances</em>."
  ]
};
