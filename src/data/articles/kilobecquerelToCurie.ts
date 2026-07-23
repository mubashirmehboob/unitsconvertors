import { CustomArticleData } from "./types";

export const kilobecquerelToCurie: CustomArticleData = {
  fromUnitId: "kilobecquerel",
  toUnitId: "curie",
  seoTitle: "Kilobecquerel to Curie Converter - kBq to Ci",
  metaDescription: "Quickly convert Kilobecquerels to Curies (kBq to Ci) with our precise online converter. Learn the conversion formula, step-by-step math, and practical examples.",
  h1: "Kilobecquerel to Curie Conversion",
  introduction: [
    "Navigating nuclear physics measurements often involves translating between the modern International System of Units (SI) and legacy non-SI metrics. The Kilobecquerel (kBq) is a standard metric unit representing one thousand nuclear decay events per second.",
    "The Curie (Ci) is a traditional unit representing a massive decay rate of 37 billion disintegrations per second, based on the historical activity of one gram of pure Radium-226. Because Curies are so large, low-to-mid-level measurements in Kilobecquerels yield very small Curie fractions, making a reliable conversion tool essential for health physicists and medical technicians."
  ],
  quickAnswer: {
    text: "To convert Kilobecquerels to Curies, divide the Kilobecquerel value by 37,000,000 (37 million). For example, 74,000,000 Kilobecquerels equals exactly 2 Curies.",
    formulaDisplay: "1 kBq = 2.7027e-8 Ci",
    subtext: "Simply divide the Kilobecquerel value by 37,000,000 or multiply by 2.7027027 × 10⁻⁸ to find the equivalent activity in Curies."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilobecquerel (kBq)",
    text: "The Kilobecquerel (kBq) is an SI-derived unit representing exactly 1,000 nuclear decay events per second. It is commonly used to measure human-scale isotopes, such as low-level therapeutic radioactive seeds and clinical radioisotopes used in diagnostics."
  },
  aboutTargetUnit: {
    title: "Understanding the Curie (Ci)",
    text: "Named in honor of Marie and Pierre Curie, the Curie (Ci) is a legacy unit representing exactly 3.7 × 10¹⁰ (37 billion) decays per second. It is a highly powerful unit, characteristic of reactor fuel cores, powerful medical accelerators, and radiotherapy machines."
  },
  relationship: "The ratio between Kilobecquerels and Curies is defined by the baseline definition of the Curie as exactly 37 billion Becquerels. Scaling down to the kilobecquerel level, there are exactly 37,000,000 Kilobecquerels in one Curie. Therefore, one Kilobecquerel is equal to 1/37,000,000 of a Curie.",
  relationshipTitle: "Sizing Up Radioactivity: kBq vs Ci",
  relationshipItems: [
    { label: "1 Kilobecquerel (kBq)", value: "0.000000027027 Curies (Ci)" },
    { label: "1 Curie (Ci)", value: "37,000,000 Kilobecquerels (kBq)" }
  ],
  formula: {
    text: "Convert radioactivity values by dividing the Kilobecquerel value by 37,000,000.",
    math: "Activity in Curies (Ci) = Activity in Kilobecquerels (kBq) / 37,000,000",
    subtext: "To perform the reverse conversion, multiply the Curie value by 37,000,000."
  },
  formulaTitle: "The Kilobecquerel to Curie Formula",
  practicalTip: {
    title: "Scientific Notation Assistance",
    text: "Because the numbers involved are extremely large or small, you will often find it easier to work with scientific notation. Expressing 1 kBq as 10³ Bq and 1 Ci as 3.7 × 10¹⁰ Bq helps track decimal places during complex conversions."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Radiomedicine Tracer Dose",
        subtitle: "A medical shipment contains a radioactive isotope tracer with a certified activity of 185,000 Kilobecquerels. Express this activity in Curies.",
        steps: [
          "Identify the starting activity: 185,000 kBq.",
          "Write down the conversion formula: Ci = kBq / 37,000,000.",
          "Perform the division: 185,000 / 37,000,000 = 0.005.",
          "Conclude: 185,000 Kilobecquerels is equivalent to exactly 0.005 Curies (or 5 millicuries)."
        ]
      },
      {
        title: "Example 2: Lab Spill Assessment",
        subtitle: "An environmental health team detects a local contamination event recording 1,110,000 Kilobecquerels of activity. Convert this to Curies.",
        steps: [
          "Identify the starting activity: 1,110,000 kBq.",
          "Apply the formula: Ci = kBq / 37,000,000.",
          "Divide the values: 1,110,000 / 37,000,000 = 0.03.",
          "Conclude: The contamination level is equivalent to exactly 0.03 Curies (or 30 millicuries)."
        ]
      }
    ]
  },
  table: {
    title: "Kilobecquerel to Curie Reference Table",
    headers: ["Kilobecquerels (kBq)", "Curies (Ci)", "Common Scale References"],
    rows: [
      { fromVal: "1,000", toVal: "0.000027", extra: "1 Megabecquerel (MBq) diagnostic contrast marker" },
      { fromVal: "37,000", toVal: "0.001", extra: "1 Millicurie (mCi) standard tracer capsule" },
      { fromVal: "370,000", toVal: "0.01", extra: "10 Millicuries (mCi) localized cancer seed" },
      { fromVal: "1,000,000", toVal: "0.027", extra: "Weak therapeutic tracer volume" },
      { fromVal: "10,000,000", toVal: "0.27", extra: "Medium medical diagnostic check source" },
      { fromVal: "37,000,000", toVal: "1", extra: "Exactly 1 Curie radioactivity benchmark" },
      { fromVal: "100,000,000", toVal: "2.703", extra: "High-intensity clinical radiotherapy source" },
      { fromVal: "370,000,000", toVal: "10", extra: "Industrial radiography calibration equipment" }
    ]
  },
  expertNote: {
    title: "Historical Significance of the Radium Benchmark",
    text: "The Curie was originally defined based on the emissions of one gram of radium. As nuclear science became more precise, scientists established the exact equivalence of 3.7 × 10¹⁰ disintegrations per second. Our modern metric system uses Kilobecquerels as a standardized, prefix-based alternative for everyday calculations."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Medical Physics Dosimetry",
        text: "Clinical technicians often receive radiotherapy seed listings marked in metric units like Kilobecquerels but must convert them to Curies to verify legacy equipment calibration specs."
      },
      {
        title: "Isotope Shipping Compliance",
        text: "Logistics managers handling radioactive packages use conversions to fill out shipping documents that require both SI (kBq) and traditional (Ci) values."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactivity Pitfalls",
    items: [
      "Decimal placement error: Dividing by 37,000,000 requires careful digit counting. Using a digital converter prevents decimal shift errors.",
      "Unit size misunderstanding: A Curie is a massive unit. If you convert a Kilobecquerel value and end up with a much larger number, you have multiplied instead of dividing."
    ]
  },
  faqs: [
    {
      question: "How do I convert Kilobecquerels to Curies?",
      questionId: "kbq-to-ci-conversion",
      answer: "Divide your Kilobecquerel value by 37,000,000 to find the equivalent activity in Curies."
    },
    {
      question: "What is a Kilobecquerel?",
      questionId: "what-is-a-kbq",
      answer: "A Kilobecquerel (kBq) is an SI unit of radioactive decay defined as exactly one thousand (1,000) atomic disintegrations per second."
    },
    {
      question: "How many Kilobecquerels are in one Curie?",
      questionId: "kbq-in-one-curie",
      answer: "There are exactly 37,000,000 Kilobecquerels in one Curie."
    },
    {
      question: "What are the official symbols for Curie and Kilobecquerel?",
      questionId: "curie-kbq-symbols",
      answer: "The symbol for the Curie is 'Ci' and the symbol for the Kilobecquerel is 'kBq'."
    },
    {
      question: "Is Curie an SI unit?",
      questionId: "is-curie-si",
      answer: "No. The Curie is a legacy unit of radioactivity. The official SI unit is the Becquerel (Bq)."
    },
    {
      question: "How do I convert Curies back to Kilobecquerels?",
      questionId: "curie-to-kbq-conversion",
      answer: "Multiply the Curie value by 37,000,000 to obtain the equivalent in Kilobecquerels."
    },
    {
      question: "How many Kilobecquerels are in a millicurie?",
      questionId: "kbq-in-mci",
      answer: "A millicurie (mCi) is one-thousandth of a Curie. There are exactly 37,000 Kilobecquerels in one millicurie."
    },
    {
      question: "What is the relationship between kBq, Bq, and Ci?",
      questionId: "kbq-bq-ci-relationship",
      answer: "1 kBq equals 1,000 Bq, and 1 Ci equals 37,000,000 kBq (or 37,000,000,000 Bq)."
    },
    {
      question: "Does converting the unit change physical radiation safety?",
      questionId: "dosimetry-safety",
      answer: "No, changing units is a mathematical representation and does not alter the physical radiation rate of the isotope sample."
    },
    {
      question: "Why does converting kBq to Ci yield such small numbers?",
      questionId: "small-curie-numbers",
      answer: "A Curie represents a massive amount of radioactivity (the decay of 1 gram of radium), whereas a Kilobecquerel is a small, human-scale metric unit."
    }
  ],
  relatedList: [
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Megabecquerel to Curie", from: "megabecquerel", to: "curie" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" }
  ],
  references: [
    "International Bureau of Weights and Measures. <em>The International System of Units (SI Brochure)</em>.",
    "NIST Special Publication 1038: <em>The International System of Units (SI) - Conversion Factors</em>."
  ]
};
