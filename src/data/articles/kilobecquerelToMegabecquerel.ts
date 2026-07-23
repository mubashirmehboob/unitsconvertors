import { CustomArticleData } from "./types";

export const kilobecquerelToMegabecquerel: CustomArticleData = {
  fromUnitId: "kilobecquerel",
  toUnitId: "megabecquerel",
  seoTitle: "Kilobecquerel to Megabecquerel Converter - kBq to MBq",
  metaDescription: "Easily convert Kilobecquerels to Megabecquerels (kBq to MBq). Understand the metric prefix relationship, step-by-step math, and practical examples.",
  h1: "Kilobecquerel to Megabecquerel Conversion",
  introduction: [
    "In nuclear physics, biochemistry, and radiopharmacology, measuring radioactivity requires absolute mathematical precision. The International System of Units (SI) utilizes the Becquerel (Bq) as the base metric, which represents exactly one atomic disintegration per second.",
    "Because single decays are microscopically small, scientists scale the base unit using metric prefixes. The Kilobecquerel (kBq) represents one thousand decays per second, while the Megabecquerel (MBq) represents one million decays per second. Our conversion tool simplifies moving between these two standard scales, ensuring perfect mathematical accuracy in your logs."
  ],
  quickAnswer: {
    text: "To convert Kilobecquerels to Megabecquerels, divide the Kilobecquerel value by 1,000. For example, 2,500 Kilobecquerels equals 2.5 Megabecquerels.",
    formulaDisplay: "1 kBq = 0.001 MBq",
    subtext: "Simply divide the Kilobecquerel value by 1,000 or shift the decimal point three positions to the left to find the equivalent activity in Megabecquerels."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilobecquerel (kBq)",
    text: "The Kilobecquerel (kBq) represents 1,000 nuclear decays per second. It is commonly used to quantify mid-level radioactive sources, consumer diagnostics, and small quantities of medical tracers."
  },
  aboutTargetUnit: {
    title: "Understanding the Megabecquerel (MBq)",
    text: "The Megabecquerel (MBq) represents 1,000,000 nuclear decays per second. It is a vital unit of measurement in modern medicine, used to calibrate diagnostic imaging dosages (such as PET or SPECT scans) and track pharmaceutical isotopes."
  },
  relationship: "The relationship between Kilobecquerels and Megabecquerels is determined by the standard metric multiplier scale. Since a Kilobecquerel is 1,000 decays per second and a Megabecquerel is 1,000,000 decays per second, there are exactly 1,000 Kilobecquerels in one Megabecquerel.",
  relationshipTitle: "Sizing Up Radioactivity: kBq vs MBq",
  relationshipItems: [
    { label: "1 Kilobecquerel (kBq)", value: "0.001 Megabecquerels (MBq)" },
    { label: "1 Megabecquerel (MBq)", value: "1,000 Kilobecquerels (kBq)" }
  ],
  formula: {
    text: "Convert radioactivity values by dividing the Kilobecquerel value by 1,000.",
    math: "Activity in Megabecquerels (MBq) = Activity in Kilobecquerels (kBq) / 1,000",
    subtext: "To perform the reverse conversion, multiply the Megabecquerel value by 1,000."
  },
  formulaTitle: "The Kilobecquerel to Megabecquerel Formula",
  practicalTip: {
    title: "Simple Prefix Conversions",
    text: "Since both are standard metric prefixes (kilo- representing thousands and mega- representing millions), you can easily convert in your head by moving the decimal point three places to the left."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Radiomedicine Lab Calibration",
        subtitle: "A pharmaceutical lab measures a diagnostic tracer sample at 75,000 Kilobecquerels of activity. Convert this to Megabecquerels.",
        steps: [
          "Identify the starting activity in Kilobecquerels: 75,000 kBq.",
          "Write down the conversion formula: MBq = kBq / 1,000.",
          "Perform the division: 75,000 / 1,000 = 75.",
          "Conclude: The activity is exactly 75 Megabecquerels."
        ]
      },
      {
        title: "Example 2: Environmental Isotope Assay",
        subtitle: "A soil core assay yields a background radiation count of 450 Kilobecquerels. Express this value in Megabecquerels.",
        steps: [
          "Identify the starting activity: 450 kBq.",
          "Apply the conversion formula: MBq = kBq / 1,000.",
          "Perform the calculation: 450 / 1,000 = 0.45.",
          "Conclude: 450 Kilobecquerels is equal to exactly 0.45 Megabecquerels."
        ]
      }
    ]
  },
  table: {
    title: "Kilobecquerel to Megabecquerel Reference Table",
    headers: ["Kilobecquerels (kBq)", "Megabecquerels (MBq)", "Decays per Second"],
    rows: [
      { fromVal: "1", toVal: "0.001", extra: "1,000 decays per second" },
      { fromVal: "10", toVal: "0.01", extra: "10,000 decays per second" },
      { fromVal: "100", toVal: "0.1", extra: "100,000 decays per second" },
      { fromVal: "500", toVal: "0.5", extra: "500,000 decays per second" },
      { fromVal: "1,000", toVal: "1", extra: "1,000,000 decays per second" },
      { fromVal: "10,000", toVal: "10", extra: "10,000,000 decays per second" },
      { fromVal: "50,000", toVal: "50", extra: "50,000,000 decays per second" },
      { fromVal: "100,000", toVal: "100", extra: "100,000,000 decays per second" }
    ]
  },
  expertNote: {
    title: "Standardized SI Units in Medicine",
    text: "Modern hospitals and radiological centers almost exclusively utilize Kilobecquerels and Megabecquerels because they eliminate conversion errors inherent in non-SI systems. Staying within the metric system keeps calculations elegant and highly repeatable."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Nuclear Medicine Dosimetry",
        text: "Radiopharmacists prepare patient doses calibrated in Megabecquerels. They rely on kBq to MBq conversions to double-check smaller aliquot vials during preparation."
      },
      {
        title: "Regulatory Licensing Compliance",
        text: "Facilities that possess low-level radioactive materials report their total active inventory in Megabecquerels to radiation safety boards, converting small source logs from Kilobecquerels."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactivity Pitfalls",
    items: [
      "Multiplying instead of dividing: Since a Megabecquerel is a larger unit, your result must be smaller than the starting value in Kilobecquerels. If the number gets larger, you multiplied instead of dividing.",
      "Symbol capitalization errors: Be sure to capitalize the 'M' in MBq. A lowercase 'mBq' represents a millibecquerel, which is nine orders of magnitude smaller."
    ]
  },
  faqs: [
    {
      question: "How do I convert Kilobecquerels to Megabecquerels?",
      questionId: "kbq-to-mbq-convert",
      answer: "Divide the Kilobecquerel value by 1,000 to obtain the equivalent activity in Megabecquerels."
    },
    {
      question: "What is a Kilobecquerel?",
      questionId: "kbq-meaning-faq",
      answer: "A Kilobecquerel (kBq) is a metric unit representing exactly 1,000 nuclear decays per second."
    },
    {
      question: "What is a Megabecquerel?",
      questionId: "mbq-meaning-faq",
      answer: "A Megabecquerel (MBq) is a metric unit representing exactly 1,000,000 nuclear decays per second."
    },
    {
      question: "How many Kilobecquerels are in one Megabecquerel?",
      questionId: "kbq-in-mbq",
      answer: "There are exactly 1,000 Kilobecquerels in one Megabecquerel."
    },
    {
      question: "What is the abbreviation for Megabecquerel?",
      questionId: "mbq-abbrev",
      answer: "The abbreviation is 'MBq', with an uppercase 'M', uppercase 'B', and lowercase 'q'."
    },
    {
      question: "How do I convert Megabecquerels back to Kilobecquerels?",
      questionId: "mbq-to-kbq-reverse",
      answer: "Multiply your Megabecquerel value by 1,000 to convert back to Kilobecquerels."
    },
    {
      question: "Is kBq smaller than MBq?",
      questionId: "kbq-vs-mbq-size",
      answer: "Yes, a Kilobecquerel is 1,000 times smaller than a Megabecquerel."
    },
    {
      question: "How many decays per second is 1 MBq?",
      questionId: "mbq-decays-rate",
      answer: "Exactly 1,000,000 decays per second."
    },
    {
      question: "Does changing the unit affect the physical decay rate?",
      questionId: "physical-rate-change",
      answer: "No. The units of measurement are descriptive labels. The physical decay rate of the isotope sample remains unchanged."
    },
    {
      question: "Why does the medical industry prefer Megabecquerels?",
      questionId: "medical-preference",
      answer: "It allows clinicians to work with standard, human-scale numbers (e.g., a dose of 370 MBq) rather than long values like 370,000,000 Bq."
    }
  ],
  relatedList: [
    { label: "Megabecquerel to Kilobecquerel", from: "megabecquerel", to: "kilobecquerel" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" }
  ],
  references: [
    "BIPM. <em>The International System of Units (SI Brochure)</em>, 9th Edition.",
    "NIST Special Publication 811: <em>Guide for the Use of the International System of Units</em>."
  ]
};
