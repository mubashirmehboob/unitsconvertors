import { CustomArticleData } from "./types";

export const megabecquerelToKilobecquerel: CustomArticleData = {
  fromUnitId: "megabecquerel",
  toUnitId: "kilobecquerel",
  seoTitle: "Megabecquerel to Kilobecquerel Converter - MBq to kBq",
  metaDescription: "Easily convert Megabecquerels to Kilobecquerels (MBq to kBq) with our precise online calculator. Learn the metric prefix relationship, step-by-step math, and practical examples.",
  h1: "Megabecquerel to Kilobecquerel Conversion",
  introduction: [
    "Radioactivity calculations require absolute precision across clinical medicine, safety engineering, and radiopharmacology. The International System of Units (SI) utilizes the Becquerel (Bq) as the baseline metric of radioactive decay, indicating exactly one atomic disintegration per second.",
    "Because single disintegrations are microscopically small, scientists employ standard metric prefixes to represent real-world samples. The Megabecquerel (MBq) represents one million decays per second, while the Kilobecquerel (kBq) represents one thousand decays per second. Our conversion tool simplifies moving between these standard scales, eliminating manual shifting errors."
  ],
  quickAnswer: {
    text: "To convert Megabecquerels to Kilobecquerels, multiply the Megabecquerel value by 1,000. For example, 4.5 Megabecquerels equals exactly 4,500 Kilobecquerels.",
    formulaDisplay: "1 MBq = 1,000 kBq",
    subtext: "Simply multiply your Megabecquerel value by 1,000 or shift the decimal point three places to the right to find the equivalent activity in Kilobecquerels."
  },
  aboutSourceUnit: {
    title: "Understanding the Megabecquerel (MBq)",
    text: "The Megabecquerel (MBq) represents exactly one million (1,000,000) spontaneous nuclear decays per second. It is a standard unit in hospital radiology departments to quantify active patient doses and handle short-lived tracing isotopes."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilobecquerel (kBq)",
    text: "The Kilobecquerel (kBq) represents exactly one thousand (1,000) spontaneous nuclear decays per second. It is commonly used to measure lower-intensity sources, domestic smoke alarms, or environmental geological assays."
  },
  relationship: "The relationship between Megabecquerels and Kilobecquerels is direct and is based on the standard SI metric prefix system. Since a Megabecquerel is 1,000,000 Bq and a Kilobecquerel is 1,000 Bq, there are exactly 1,000 Kilobecquerels in one Megabecquerel.",
  relationshipTitle: "Sizing Up Radioactivity: MBq vs kBq",
  relationshipItems: [
    { label: "1 Megabecquerel (MBq)", value: "1,000 Kilobecquerels (kBq)" },
    { label: "1 Kilobecquerel (kBq)", value: "0.001 Megabecquerels (MBq)" }
  ],
  formula: {
    text: "Convert radioactivity values by multiplying the Megabecquerel value by 1,000.",
    math: "Activity in Kilobecquerels (kBq) = Activity in Megabecquerels (MBq) * 1,000",
    subtext: "To perform the reverse conversion, divide the Kilobecquerel value by 1,000."
  },
  formulaTitle: "The Megabecquerel to Kilobecquerel Formula",
  practicalTip: {
    title: "Decimal Shifting Assistance",
    text: "Since both units belong to the standard metric system, you can easily convert in your head by moving the decimal point three positions to the right to get Kilobecquerels, or three positions to the left to get Megabecquerels."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Radiomedicine Dosimetry Check",
        subtitle: "A clinic prepares a PET imaging dose containing 370 Megabecquerels of radioactive activity. What is this value in Kilobecquerels?",
        steps: [
          "Identify the starting activity in Megabecquerels: 370 MBq.",
          "Write down the conversion formula: kBq = MBq * 1,000.",
          "Multiply: 370 * 1,000 = 370,000.",
          "Conclude: The active dose is equivalent to exactly 370,000 Kilobecquerels."
        ]
      },
      {
        title: "Example 2: Lab Aliquot Preparation",
        subtitle: "A researcher measures a low-level radioactive tracer aliquot at 0.15 Megabecquerels. Express this activity in Kilobecquerels.",
        steps: [
          "Identify the starting activity: 0.15 MBq.",
          "Apply the conversion formula: kBq = MBq * 1,000.",
          "Calculate: 0.15 * 1,000 = 150.",
          "Conclude: The tracer aliquot activity is equivalent to 150 Kilobecquerels."
        ]
      }
    ]
  },
  table: {
    title: "Megabecquerel to Kilobecquerel Reference Table",
    headers: ["Megabecquerels (MBq)", "Kilobecquerels (kBq)", "Decays per Second"],
    rows: [
      { fromVal: "0.001", toVal: "1", extra: "1,000 decays per second" },
      { fromVal: "0.01", toVal: "10", extra: "10,000 decays per second" },
      { fromVal: "0.1", toVal: "100", extra: "100,000 decays per second" },
      { fromVal: "1", toVal: "1,000", extra: "1,000,000 decays per second" },
      { fromVal: "10", toVal: "10,000", extra: "10,000,000 decays per second" },
      { fromVal: "50", toVal: "50,000", extra: "50,000,000 decays per second" },
      { fromVal: "100", toVal: "100,000", extra: "100,000,000 decays per second" },
      { fromVal: "1,000", toVal: "1,000,000", extra: "1,000,000,000 decays per second" }
    ]
  },
  expertNote: {
    title: "SI Prefix Consistency in Research",
    text: "Because both units use standard SI prefixes, converting between them is straightforward. Many laboratories and healthcare facilities switch between MBq and kBq depending on the activity level being recorded, while the underlying radioactive activity remains exactly the same."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Clinical Aliquot Tracking",
        text: "Radiopharmacists dilute diagnostic isotopes marked in Megabecquerels and log smaller therapeutic seeds or test tubes in Kilobecquerels to track decay histories."
      },
      {
        title: "Regulatory Waste Inventory",
        text: "Radiation safety officers compile radioactive waste files. They translate lower-activity logs written in Kilobecquerels into Megabecquerels to match regulatory reporting criteria."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactivity Pitfalls",
    items: [
      "Multiplying in the wrong direction: Since the Kilobecquerel is a smaller unit, your converted value must always be larger than the starting value in Megabecquerels.",
      "Symbol capitalization error: Be sure to write the 'M' in MBq as a capital letter. A lowercase 'm' represents millibecquerels, which is nine orders of magnitude smaller."
    ]
  },
  faqs: [
    {
      question: "Why are MBq and kBq both used in nuclear medicine?",
      questionId: "why-both-used-in-medicine",
      answer: "Clinicians and medical physicists select different SI prefixes to keep measurements easily readable and reduce dose entry mistakes. High-activity doses, such as those prepared for PET or SPECT imaging, are typically written in Megabecquerels (MBq). In contrast, low-activity samples, ambient laboratory contamination levels, or environmental monitoring results are recorded in Kilobecquerels (kBq)."
    },
    {
      question: "Can I convert MBq to kBq by moving the decimal point?",
      questionId: "convert-by-moving-decimal",
      answer: "Yes, because both units are part of the standard metric system and rely on powers of ten. Since one Megabecquerel is equal to exactly one thousand Kilobecquerels, you can perform the conversion by moving the decimal point three positions to the right. For example, 0.45 MBq becomes 450 kBq without any complex multiplication."
    },
    {
      question: "When should Megabecquerels (MBq) be used instead of Kilobecquerels (kBq)?",
      questionId: "when-to-use-mbq-vs-kbq",
      answer: "Megabecquerels (MBq) are preferred when documenting larger quantities of radioactive isotopes, such as radiopharmaceutical shipments, therapeutic patient doses, and industrial source strengths. Kilobecquerels (kBq) are better suited for trace quantities, radiation protection surveys, and educational laboratory demonstrations where decay rates are relatively low."
    },
    {
      question: "Does converting from MBq to kBq affect radiation exposure or hazard levels?",
      questionId: "exposure-or-hazard-impact",
      answer: "No, changing the measurement unit is purely a mathematical representation and has no physical impact on the sample. The actual rate of nuclear decay and the energy of emitted particles remain completely identical whether you write the value in Megabecquerels or Kilobecquerels."
    },
    {
      question: "Why do clinical reports use different SI prefixes for radioactivity?",
      questionId: "why-clinical-reports-different-prefixes",
      answer: "Using varied SI prefixes prevents errors associated with excessively long numbers or numerous trailing zeroes. A clinical report reading '185 MBq' is much easier to quickly scan and verify than '185,000 kBq' or '185,000,000 Bq,' thereby safeguarding patients against incorrect radiopharmaceutical administration."
    },
    {
      question: "Can this conversion produce rounding errors in lab logs?",
      questionId: "rounding-errors-in-logs",
      answer: "Because the relationship between MBq and kBq is a perfect integer multiplier of 1,000, the conversion itself is exact and does not introduce rounding errors. However, if your starting Megabecquerel value has a high level of decimal precision, care must be taken to maintain the correct number of significant figures in your final Kilobecquerel count."
    },
    {
      question: "When should I use scientific notation for MBq to kBq conversions?",
      questionId: "when-use-scientific-notation",
      answer: "Scientific notation is highly recommended when dealing with extremely small fractional values or huge activities to preserve precision and clarity. For instance, expressing a trace level of 0.000025 MBq as 2.5 × 10⁻⁵ MBq or 2.5 × 10⁻² kBq makes the values much easier to compare and compute in scientific modeling."
    },
    {
      question: "How accurate is the MBq to kBq conversion rate?",
      questionId: "conversion-rate-accuracy",
      answer: "The conversion rate is 100% accurate and mathematically absolute. By definition under the International System of Units (SI), 'mega-' always means exactly 10⁶ and 'kilo-' always means exactly 10³. Therefore, the factor of 1,000 between them is a physical constant that never fluctuates."
    }
  ],
  relatedList: [
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" },
    { label: "Megabecquerel to Becquerel", from: "megabecquerel", to: "becquerel" },
    { label: "Megabecquerel to Curie", from: "megabecquerel", to: "curie" },
    { label: "Megabecquerel to Rutherford", from: "megabecquerel", to: "rutherford" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" }
  ],
  references: [
    "BIPM. <em>The International System of Units (SI Brochure)</em>, 9th Edition.",
    "NIST Special Publication 811: <em>Guide for the Use of the International System of Units</em>."
  ]
};
