import { CustomArticleData } from "./types";

export const kilogramToMilligram: CustomArticleData = {
  fromUnitId: "kilogram",
  toUnitId: "milligram",
  seoTitle: "Kilogram to Milligram Converter - kg to mg",
  metaDescription: "Convert kilograms to milligrams (kg to mg) with our high-precision mass calculator. Learn the 1,000,000 multiplication formula, scientific notation, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-to-milligram",
  h1: "Kilogram to Milligram Converter",
  introduction: [
    "The kilogram and the milligram are metric units of mass that span six orders of magnitude within the International System of Units (SI). While the kilogram represents the macroscopic standard for human body mass, industrial raw materials, and agricultural harvests, the milligram is the global workhorse unit for pharmaceutical dosages, chemical additives, and toxicological thresholds.",
    "Because the prefix 'milli-' indicates one-thousandth ($10^{-3}$) and 'kilo-' indicates one thousand ($10^{3}$), one kilogram contains exactly one million milligrams ($10^{6}\\text{ mg}$). Converting between kilograms and milligrams is essential in clinical pharmacology, environmental water quality testing, food fortification, and analytical biochemistry."
  ],
  quickAnswer: {
    text: "To convert kilograms to milligrams, multiply the kilogram value by 1,000,000 (or $10^6$). For example, 0.005 kilograms equals exactly 5,000 milligrams.",
    formulaDisplay: "1 kg = 1,000,000 mg",
    subtext: "Multiply any kilogram amount by 1,000,000 (or shift the decimal point 6 places to the right) to calculate the equivalent milligrams."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the base unit of mass in the International System of Units (SI). Standardized through the Planck constant, the kilogram is the international benchmark for bulk physical quantities, manufacturing inputs, freight weights, and biomedical body mass indices."
  },
  aboutTargetUnit: {
    title: "Understanding the Milligram (mg)",
    text: "The milligram (symbol: mg) is an SI-derived unit of mass equal to one-thousandth of a gram ($10^{-3}\\text{ g}$) or one-millionth of a kilogram ($10^{-6}\\text{ kg}$). It is widely utilized in medical prescribing (e.g., 500 mg tablets), dietary supplement manufacturing, water contamination tracking, and precious chemical assays."
  },
  relationship: "Under SI metric scaling, 1 kilogram = 1,000 grams = 1,000,000 milligrams. Moving from kilograms to milligrams requires multiplying by a factor of $10^6$ (one million). Conversely, 1 milligram equals $0.000001\\text{ kg}$ ($10^{-6}\\text{ kg}$).",
  relationshipTitle: "Kilograms vs. Milligrams Metric Scale",
  relationshipItems: [
    { label: "1 Kilogram (kg)", value: "1,000,000 Milligrams (mg)" },
    { label: "1 Milligram (mg)", value: "0.000001 Kilograms (kg)" },
    { label: "1 Gram (g)", value: "1,000 Milligrams (mg)" },
    { label: "0.001 Kilograms (kg)", value: "1,000 Milligrams (1 g)" }
  ],
  formula: {
    text: "To convert kilograms to milligrams, multiply the mass in kilograms by 1,000,000.",
    math: "Mass in Milligrams (mg) = Mass in Kilograms (kg) × 1,000,000",
    subtext: "Or in scientific notation: mg = kg × 10⁶"
  },
  formulaTitle: "Kilogram to Milligram Conversion Formula",
  practicalTip: {
    title: "Clinical Dosage Calculation",
    text: "In medicine, dosages are frequently prescribed per kilogram of patient body weight (e.g., 15 mg/kg). For a 70 kg patient, total required medication is calculated as $70\\text{ kg} \\times 15\\text{ mg/kg} = 1,050\\text{ mg}$ (or 1.05 grams)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Bulk Vitamin C Packaging",
        subtitle: "A supplement manufacturer purchases 2.5 kilograms of pure ascorbic acid (Vitamin C). Determine how many 500 mg capsules can be manufactured.",
        steps: [
          "Identify the bulk weight in kilograms: 2.5 kg.",
          "Convert kilograms to milligrams: mg = 2.5 × 1,000,000 = 2,500,000 mg.",
          "Divide by individual capsule dose: 2,500,000 mg / 500 mg = 5,000 capsules.",
          "Conclude the calculation: 2.5 kilograms yields exactly 2,500,000 milligrams (5,000 full capsules)."
        ]
      },
      {
        title: "Example 2: Environmental Trace Analysis",
        subtitle: "An environmental water filter traps 0.00075 kilograms of particulate lead. Convert this mass to milligrams.",
        steps: [
          "Identify the filter mass: 0.00075 kg.",
          "Apply the formula: mg = 0.00075 × 1,000,000.",
          "Calculate the product: 0.00075 × 1,000,000 = 750 mg.",
          "Conclude the calculation: 0.00075 kg equals exactly 750 milligrams."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram to Milligram Reference Table",
    headers: ["Kilograms (kg)", "Milligrams (mg)", "Scientific / Clinical Reference"],
    rows: [
      { fromVal: "0.000001", toVal: "1", extra: "A single grain of fine table salt" },
      { fromVal: "0.00001", toVal: "10", extra: "Active dose of a standard antihistamine tablet" },
      { fromVal: "0.0001", toVal: "100", extra: "Standard caffeine content in one cup of coffee" },
      { fromVal: "0.0005", toVal: "500", extra: "One standard paracetamol / acetaminophen tablet" },
      { fromVal: "0.001", toVal: "1,000", extra: "1 gram standard metric calibration weight" },
      { fromVal: "0.01", toVal: "10,000", extra: "10 grams of table salt" },
      { fromVal: "0.1", toVal: "100,000", extra: "100 grams (a standard chocolate bar)" },
      { fromVal: "0.5", toVal: "500,000", extra: "500 grams (half a kilogram)" },
      { fromVal: "1", toVal: "1,000,000", extra: "1 kilogram (one million milligrams)" },
      { fromVal: "5", toVal: "5,000,000", extra: "5 kilograms of bulk active chemical reactant" }
    ]
  },
  expertNote: {
    title: "Safety in Medical Calculations",
    text: "Medication errors involving decimal place shifts between kilograms, grams, and milligrams can lead to 10-fold, 100-fold, or 1,000-fold overdoses. Standard medical protocol mandates writing leading zeros before decimals (e.g., '0.5 mg', never '.5 mg') to avoid misreading."
  },
  applications: {
    title: "Crucial Industries Using kg to mg Calculations",
    items: [
      {
        title: "Pharmaceutical Manufacturing & Quality Control",
        text: "Bulk chemical syntheses measuring hundreds of kilograms in industrial reactors must be formulated into unit tablets measured in tens or hundreds of milligrams."
      },
      {
        title: "Food Fortification & Nutrient Chemistry",
        text: "Industrial flour, milk, and cereal production requires adding precise milligram concentrations of micronutrients (such as folic acid and zinc) to multi-kilogram batches."
      },
      {
        title: "Toxicology & Environmental Safety",
        text: "Regulatory safety thresholds (such as allowable daily intake or LD50 lethal dose metrics) are universally tabulated as milligrams of chemical per kilogram of body weight ($\text{mg/kg}$). "
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in kg to mg Conversions",
    items: [
      "Multiplying by 1,000 instead of 1,000,000: Multiplying by 1,000 only converts kilograms to grams. Remember that there are 1,000 grams in a kilogram AND 1,000 milligrams in a gram, making the total factor 1,000,000.",
      "Miscounting zeros when working with decimals: When converting small values like 0.0003 kg, shift the decimal 6 positions right: 0.000300 becomes 300 mg.",
      "Confusing milligrams (mg) with micrograms (µg): A microgram is 1,000 times smaller than a milligram ($1\\text{ kg} = 10^9\\text{ µg}$)."
    ]
  },
  faqs: [
    {
      question: "How many milligrams are in one kilogram?",
      answer: "There are exactly 1,000,000 (one million) milligrams in one kilogram (1 kg = 1,000,000 mg)."
    },
    {
      question: "What is the formula to convert kg to mg?",
      answer: "The formula is: Mass in Milligrams (mg) = Mass in Kilograms (kg) × 1,000,000."
    },
    {
      question: "How many milligrams is 0.5 kg?",
      answer: "0.5 kg is equal to 500,000 milligrams (0.5 × 1,000,000 = 500,000 mg)."
    },
    {
      question: "How many milligrams is 0.002 kg?",
      answer: "0.002 kg equals 2,000 milligrams (0.002 × 1,000,000 = 2,000 mg or 2 grams)."
    },
    {
      question: "What does mg/kg mean in medicine?",
      answer: "The notation mg/kg denotes the ratio of milligrams of active medication administered per kilogram of patient body mass."
    },
    {
      question: "How do I convert milligrams back to kilograms?",
      answer: "Divide the milligram value by 1,000,000 (or multiply by 0.000001) to find the mass in kilograms."
    },
    {
      question: "What is the official symbol for milligram?",
      answer: "The official SI symbol for the milligram is 'mg' (all lowercase)."
    },
    {
      question: "How many milligrams are in 1 gram?",
      answer: "There are exactly 1,000 milligrams in one gram (1 g = 1,000 mg)."
    }
  ],
  relatedList: [
    { label: "Kilogram to Gram", from: "kilogram", to: "gram" },
    { label: "Kilogram to Microgram", from: "kilogram", to: "microgram" },
    { label: "Gram to Milligram", from: "gram", to: "milligram" },
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" },
    { label: "Kilogram to Metric Ton", from: "kilogram", to: "metric-ton" }
  ],
  references: [
    "World Health Organization (WHO) - Guidelines for Medical Dosage Calculations and Pharmacopeia Standards",
    "BIPM - The International System of Units (SI Brochure)",
    "United States Pharmacopeia (USP) - General Chapter on Balances and Volumetric Apparatus"
  ]
};
