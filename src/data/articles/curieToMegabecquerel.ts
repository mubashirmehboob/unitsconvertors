import { CustomArticleData } from "./types";

export const curieToMegabecquerel: CustomArticleData = {
  fromUnitId: "curie",
  toUnitId: "megabecquerel",
  seoTitle: "Curie to Megabecquerel Converter - Ci to MBq",
  metaDescription: "Easily convert Curies to Megabecquerels (Ci to MBq). Understand the direct 37,000 multiplier, check diagnostic imaging standards, and review calculations.",
  h1: "Curie to Megabecquerel Converter",
  introduction: [
    "Radioactivity measures how quickly unstable atomic nuclei decay and release energy. Standardizing these measurements is crucial for medical therapy, national defense shielding, and safe waste management.",
    "The Curie (Ci) represents a traditional unit indicating a massive level of radioactive activity, originally defined around the emissions of radium. The Megabecquerel (MBq) is an official SI unit indicating exactly one million decays per second. Because older records and US clinical systems frequently use Curies, converting to modern SI Megabecquerels is an essential daily calculation."
  ],
  quickAnswer: {
    text: "To convert Curies to Megabecquerels, multiply your Curie value by 37,000. For example, a 1 Curie industrial radiation source emits exactly 37,000 Megabecquerels.",
    formulaDisplay: "1 Ci = 37,000 MBq",
    subtext: "Simply multiply the Curie value by 37,000 or divide by 0.000027 to convert from the historic traditional unit to the modern SI unit."
  },
  aboutSourceUnit: {
    title: "Understanding the Curie (Ci)",
    text: "The Curie (Ci) represents exactly 3.7 × 10¹⁰ decays per second. It is a very large unit, typical of reactor-grade isotopes, nuclear plant fuels, and high-intensity industrial radiotherapy capsules."
  },
  aboutTargetUnit: {
    title: "Understanding the Megabecquerel (MBq)",
    text: "The Megabecquerel (MBq) is a standard SI unit representing exactly 1,000,000 disintegrations per second. It is formed by combining the metric prefix 'mega-' (meaning one million) with the base unit, the Becquerel."
  },
  relationship: "The ratio between Curies and Megabecquerels is fixed. Since one Curie is defined as 37 billion decays per second and one Megabecquerel is 1,000,000 decays per second, one Curie is equal to exactly 37,000 Megabecquerels.",
  relationshipTitle: "Sizing Up Radioactivity: Ci vs MBq",
  relationshipItems: [
    { label: "1 Curie (Ci)", value: "37,000 Megabecquerels (MBq)" },
    { label: "1 Megabecquerel (MBq)", value: "0.000027 Curies (Ci)" }
  ],
  formula: {
    text: "Convert radioactivity values by multiplying the Curie value by 37,000.",
    math: "Activity in Megabecquerels (MBq) = Activity in Curies (Ci) × 37,000",
    subtext: "To convert back, divide your Megabecquerel value by 37,000."
  },
  formulaTitle: "The Curie to Megabecquerel Formula",
  practicalTip: {
    title: "Simple Mental Conversions",
    text: "When performing rapid mental calculations, remember that 1 millicurie (mCi) is equal to exactly 37 Megabecquerels. This mental baseline makes it easy to evaluate lab inventories quickly."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Clinical Iodine Capsule",
        subtitle: "A therapeutic capsule of Iodine-131 is rated at 0.01 Curies. Convert this activity to Megabecquerels.",
        steps: [
          "Identify the activity in Curies: 0.01 Ci (10 millicuries).",
          "Write down the conversion formula: MBq = Ci × 37,000.",
          "Perform the multiplication: 0.01 × 37,000 = 370.",
          "Conclude the calculation: 0.01 Curies is exactly equal to 370 MBq."
        ]
      },
      {
        title: "Example 2: Lab Calibration Standard",
        subtitle: "A microcurie test capsule has an activity of 0.0025 Curies. Convert this to Megabecquerels.",
        steps: [
          "Identify the starting activity: 0.0025 Ci.",
          "Use the conversion factor of 37,000.",
          "Multiply: 0.0025 × 37,000 = 92.5.",
          "Conclude the calculation: 0.0025 Curies is equivalent to exactly 92.5 MBq."
        ]
      }
    ]
  },
  table: {
    title: "Curie to Megabecquerel Reference Table",
    headers: ["Curies (Ci)", "Megabecquerels (MBq)", "Typical Environmental Scales"],
    rows: [
      { fromVal: "0.000001", toVal: "0.037", extra: "1 Microcurie (µCi) calibration check source" },
      { fromVal: "0.000027", toVal: "1", extra: "Microscopic check source emissions" },
      { fromVal: "0.0001", toVal: "3.7", extra: "Low-activity diagnostic contrast trace" },
      { fromVal: "0.001", toVal: "37", extra: "1 Millicurie (mCi) typical medical tracer dose" },
      { fromVal: "0.01", toVal: "370", extra: "Localized therapeutic tumor implant seed" },
      { fromVal: "0.1", toVal: "3,700", extra: "Medium laboratory isotope waste vial" },
      { fromVal: "1", toVal: "37,000", extra: "Exactly 1 Curie base benchmark" },
      { fromVal: "10", toVal: "370,000", extra: "Typical cancer radiotherapy tumor-beam capsule" }
    ]
  },
  expertNote: {
    title: "Diagnostic Contrast Safety Standards",
    text: "Radiologists standardize imaging protocols around Megabecquerels to keep patient exposure logs clear. Typical scans range from 100 MBq to 800 MBq, depending on patient weight and the specific isotope's half-life."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Nuclear Medicine & Radiopharmacy",
        text: "Doctors prescribe radioactive tracers such as Technetium-99m in millicuries, but suppliers manufacture and label bulk vials in Gigabecquerels. Radiopharmacists use this conversion daily to verify dosages."
      },
      {
        title: "Industrial Radiography",
        text: "Non-destructive testing teams use high-intensity gamma-ray sources like Iridium-192 to scan pipeline welds. These sources are categorized in Curies for structural thickness checks, but safety compliance logs require conversion to Becquerels."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactivity Pitfalls",
    items: [
      "Dividing instead of multiplying: Because the Curie is a massive unit, converting to Megabecquerels must yield a larger number. Check your calculations if the value gets smaller.",
      "Decimal placement error: Shifting the decimal point requires careful attention. Count your zeroes to ensure you do not make a major reporting error."
    ]
  },
  faqs: [
    {
      question: "How do I convert Curies to Megabecquerels?",
      answer: "Multiply your Curie value by 37,000 to find the equivalent activity in Megabecquerels."
    },
    {
      question: "What is a Megabecquerel in radioactive decay?",
      answer: "A Megabecquerel (MBq) is an official SI unit representing exactly one million (1,000,000) nuclear disintegrations per second."
    },
    {
      question: "How many Megabecquerels are in one Curie?",
      answer: "There are exactly 37,000 Megabecquerels in one Curie."
    },
    {
      question: "What are the official symbols for Curie and Megabecquerel?",
      answer: "The official symbol for the Curie is 'Ci' and the symbol for the Megabecquerel is 'MBq'."
    },
    {
      question: "How many Megabecquerels are in a millicurie?",
      answer: "A millicurie (mCi) is one-thousandth of a Curie. Multiplying 0.001 by 37,000 yields exactly 37 MBq."
    },
    {
      question: "How many Megabecquerels are in a microcurie?",
      answer: "A microcurie (µCi) is one-millionth of a Curie. Multiplying 10⁻⁶ by 37,000 yields exactly 0.037 MBq (or 37 Kilobecquerels)."
    },
    {
      question: "Does converting radioactivity units change its physical energy output?",
      answer: "No, you are only changing how you represent the measurement. The rate of physical atomic decay remains identical."
    },
    {
      question: "How do I convert Megabecquerels back to Curies?",
      answer: "To perform the reverse conversion, divide your Megabecquerel value by 37,000."
    }
  ],
  relatedList: [
    { label: "Megabecquerel to Curie", from: "megabecquerel", to: "curie" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" }
  ],
  references: [
    "Society of Nuclear Medicine and Molecular Imaging (SNMMI). <em>Standard Unit Systems and Nuclear Medicine Dosing Guidelines</em>.",
    "National Institute of Standards and Technology (NIST). <em>Radioactivity Definitions and SI Conversions</em>."
  ]
};
