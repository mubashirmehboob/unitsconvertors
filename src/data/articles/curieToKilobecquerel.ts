import { CustomArticleData } from "./types";

export const curieToKilobecquerel: CustomArticleData = {
  fromUnitId: "curie",
  toUnitId: "kilobecquerel",
  seoTitle: "Curie to Kilobecquerel Converter - Ci to kBq",
  metaDescription: "Easily convert Curies to Kilobecquerels (Ci to kBq). Master the ratio of 37 million kBq per Curie, read therapeutic dose guidelines, and explore worked examples.",
  h1: "Curie to Kilobecquerel Converter",
  introduction: [
    "Radioactivity measures how quickly unstable atomic nuclei disintegrate, releasing radiation. Standardizing these values is critical across nuclear oncology, geology, environmental shielding, and reactor engineering.",
    "The Curie (Ci) represents a traditional unit indicating a massive concentration of radioactive decay, originally defined based on radium. The Kilobecquerel (kBq) is an official SI unit indicating exactly one thousand decays per second. Because clinic logs and environmental safety files often combine these scales, converting between them requires precise mathematical models."
  ],
  quickAnswer: {
    text: "To convert Curies to Kilobecquerels, multiply your Curie value by 37,000,000 (37 million). For example, a radioactive source with an activity of 0.5 Curies contains exactly 18,500,000 kBq.",
    formulaDisplay: "1 Ci = 37,000,000 kBq (3.7 × 10⁷ kBq)",
    subtext: "Simply multiply the Curie value by 37,000,000 or shift the decimal point seven places to the right."
  },
  aboutSourceUnit: {
    title: "Understanding the Curie (Ci)",
    text: "The Curie (Ci) represents exactly 3.7 × 10¹⁰ decays per second. It is an extremely large unit, typical of reactor-grade isotopes, nuclear plant fuels, and high-intensity industrial radiotherapy capsules."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilobecquerel (kBq)",
    text: "The Kilobecquerel (kBq) is a standard SI unit representing exactly 1,000 disintegrations per second. It is formed by combining the metric prefix 'kilo-' with the base unit, the Becquerel."
  },
  relationship: "The ratio between Curies and Kilobecquerels is fixed. Since one Curie is defined as 37 billion decays per second and one Kilobecquerel is 1,000 decays per second, one Curie is equal to exactly 37,000,000 Kilobecquerels.",
  relationshipTitle: "Sizing Up Radioactivity: Ci vs kBq",
  relationshipItems: [
    { label: "1 Curie (Ci)", value: "37,000,000 Kilobecquerels (kBq)" },
    { label: "1 Kilobecquerel (kBq)", value: "0.000000027 Curies (Ci)" }
  ],
  formula: {
    text: "Convert radioactivity values by multiplying the Curie value by 37,000,000.",
    math: "Activity in Kilobecquerels (kBq) = Activity in Curies (Ci) × 37,000,000",
    subtext: "To convert back, divide your Kilobecquerel value by 37,000,000."
  },
  formulaTitle: "The Curie to Kilobecquerel Formula",
  practicalTip: {
    title: "Handling High Zero Counts",
    text: "Multiplying by 37 million requires careful attention to the number of zeroes. In scientific calculators, you can write the conversion multiplier as 3.7e7 to prevent input errors."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Clinical Iodine Capsule",
        subtitle: "A therapeutic capsule of Iodine-131 is rated at 0.005 Curies. Convert this activity to Kilobecquerels.",
        steps: [
          "Identify the activity in Curies: 0.005 Ci (5 millicuries).",
          "Write down the conversion formula: kBq = Ci × 37,000,000.",
          "Perform the multiplication: 0.005 × 37,000,000 = 185,000.",
          "Conclude the calculation: 0.005 Curies is exactly equal to 185,000 kBq (or 185 megabecquerels)."
        ]
      },
      {
        title: "Example 2: Lab Calibration Standard",
        subtitle: "A microcurie test capsule has an activity of 0.000002 Curies. Convert this to Kilobecquerels.",
        steps: [
          "Identify the starting activity: 0.000002 Ci (2 µCi).",
          "Use the conversion factor of 37,000,000.",
          "Multiply: 0.000002 × 37,000,000 = 74.",
          "Conclude the calculation: 0.000002 Curies is equivalent to exactly 74 kBq."
        ]
      }
    ]
  },
  table: {
    title: "Curie to Kilobecquerel Reference Table",
    headers: ["Curies (Ci)", "Kilobecquerels (kBq)", "Typical Environmental Scales"],
    rows: [
      { fromVal: "0.000000027", toVal: "1", extra: "Microscopic check source emissions" },
      { fromVal: "0.000001", toVal: "37", extra: "1 Microcurie (µCi) laboratory standard" },
      { fromVal: "0.00005", toVal: "1,850", extra: "Trace isotope environmental air monitor" },
      { fromVal: "0.0001", toVal: "3,700", extra: "Low-activity diagnostic contrast trace" },
      { fromVal: "0.001", toVal: "37,000", extra: "1 Millicurie (mCi) typical medical tracer dose" },
      { fromVal: "0.01", toVal: "370,000", extra: "Localized therapeutic tumor implant seed" },
      { fromVal: "0.1", toVal: "3,700,000", extra: "Medium laboratory isotope waste vial" },
      { fromVal: "1", toVal: "37,000,000", extra: "Exactly 1 Curie base benchmark" }
    ]
  },
  expertNote: {
    title: "Regulatory Compliance Standards",
    text: "Modern environmental safety boards (such as EPA, WHO, and Euratom) specify isotope limits in foodstuffs and aquifers in terms of Kilobecquerels (kBq). This replaces non-metric Curie-based guidelines to streamline international compliance tracking."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Medical Diagnostic Logistics",
        text: "US radiopharmaceutical suppliers manufacture contrast agents measured in Millicuries. Health physics teams convert these values to Kilobecquerels or Megabecquerels to log patient doses."
      },
      {
        title: "Agricultural Contamination Tests",
        text: "Customs authorities screen imported crops for radioactive cesium. Safety limits are regulated in kBq per kilogram, meaning cargo logs written in Curies require fast conversion."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactivity Pitfalls",
    items: [
      "Dividing instead of multiplying: Because the Curie is a massive unit, converting to Kilobecquerels must yield a larger number. Check your calculations if the value gets smaller.",
      "Decimal placement error: Shifting the decimal point seven places requires careful attention. Count your zeroes to ensure you do not make a tenfold error."
    ]
  },
  faqs: [
    {
      question: "How do I convert Curies to Kilobecquerels?",
      answer: "Multiply your Curie value by 37,000,000 (37 million) to find the equivalent activity in Kilobecquerels."
    },
    {
      question: "What is a Kilobecquerel in radioactive decay?",
      answer: "A Kilobecquerel (kBq) is an official SI unit representing exactly one thousand (1,000) nuclear disintegrations per second."
    },
    {
      question: "How many Kilobecquerels are in one Curie?",
      answer: "There are exactly 37,000,000 Kilobecquerels in one Curie."
    },
    {
      question: "What are the official symbols for Curie and Kilobecquerel?",
      answer: "The official symbol for the Curie is 'Ci' and the symbol for the Kilobecquerel is 'kBq'."
    },
    {
      question: "How many Kilobecquerels are in a millicurie?",
      answer: "A millicurie (mCi) is one-thousandth of a Curie. Multiplying 0.001 by 37 million yields exactly 37,000 kBq."
    },
    {
      question: "How many Kilobecquerels are in a microcurie?",
      answer: "A microcurie (µCi) is one-millionth of a Curie. Multiplying 10⁻⁶ by 37 million yields exactly 37 kBq."
    },
    {
      question: "Does converting radioactivity units change its physical energy output?",
      answer: "No, you are only changing how you represent the measurement. The rate of physical atomic decay remains identical."
    },
    {
      question: "How do I convert Kilobecquerels back to Curies?",
      answer: "To perform the reverse conversion, divide your Kilobecquerel value by 37,000,000 (37 million)."
    }
  ],
  relatedList: [
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Megabecquerel to Kilobecquerel", from: "megabecquerel", to: "kilobecquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" }
  ],
  references: [
    "International Atomic Energy Agency (IAEA). <em>Radiation Protection and Safety of Radiation Sources</em>.",
    "National Institute of Standards and Technology (NIST). <em>Radioactivity Definitions and SI Conversions</em>."
  ]
};
