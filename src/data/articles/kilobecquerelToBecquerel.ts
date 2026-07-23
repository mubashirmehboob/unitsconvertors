import { CustomArticleData } from "./types";

export const kilobecquerelToBecquerel: CustomArticleData = {
  fromUnitId: "kilobecquerel",
  toUnitId: "becquerel",
  seoTitle: "Kilobecquerel to Becquerel Converter - kBq to Bq",
  metaDescription: "Easily convert Kilobecquerels to Becquerels (kBq to Bq) with our precise calculator. Learn the base-10 prefix conversion, step-by-step math, and practical examples.",
  h1: "Kilobecquerel to Becquerel Conversion",
  introduction: [
    "In fields ranging from nuclear medicine to environmental monitoring and health physics, representing radiation activity accurately is crucial. The Becquerel (Bq) is the fundamental International System of Units (SI) unit of radioactivity, denoting exactly one atomic decay per second.",
    "Because a single disintegration per second is a microscopically small measurement, scientists frequently scale the base unit using metric prefixes. The Kilobecquerel (kBq) represents one thousand decays per second. Our conversion tool makes it simple to convert these values back and forth, ensuring flawless scaling in reports and research databases."
  ],
  quickAnswer: {
    text: "To convert Kilobecquerels to Becquerels, multiply the Kilobecquerel value by 1,000. For example, 3.5 Kilobecquerels equals 3,500 Becquerels.",
    formulaDisplay: "1 kBq = 1,000 Bq",
    subtext: "Simply multiply your Kilobecquerel value by 1,000 or shift the decimal point three positions to the right to obtain the value in Becquerels."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilobecquerel (kBq)",
    text: "The Kilobecquerel (kBq) is a metric unit representing 1,000 nuclear decays per second. It is a common scale for representing low-to-moderate radioactivity, such as the activity of medical isotopes, consumer smoke detectors, or ambient geological samples."
  },
  aboutTargetUnit: {
    title: "Understanding the Becquerel (Bq)",
    text: "Named after Henri Becquerel, one of the co-discoverers of radioactivity, the Becquerel (Bq) is the base SI unit of radioactive activity. It is defined as exactly one atomic disintegration per second. It is a very small quantity, which is why metric prefixes like kilo-, mega-, and giga- are frequently employed."
  },
  relationship: "The relationship between Kilobecquerels and Becquerels is based on the standard metric system prefix 'kilo-', which denotes a factor of 1,000. Therefore, one Kilobecquerel is precisely equivalent to one thousand Becquerels.",
  relationshipTitle: "Sizing Up Radioactivity: kBq vs Bq",
  relationshipItems: [
    { label: "1 Kilobecquerel (kBq)", value: "1,000 Becquerels (Bq)" },
    { label: "1 Becquerel (Bq)", value: "0.001 Kilobecquerels (kBq)" }
  ],
  formula: {
    text: "Convert radioactivity values by multiplying the Kilobecquerel value by 1,000.",
    math: "Activity in Becquerels (Bq) = Activity in Kilobecquerels (kBq) * 1,000",
    subtext: "To perform the reverse conversion, divide the Becquerel value by 1,000."
  },
  formulaTitle: "The Kilobecquerel to Becquerel Formula",
  practicalTip: {
    title: "Converting Decimal Values",
    text: "When dealing with fractional values, remember that 0.01 kBq is exactly 10 Bq, and 0.001 kBq is exactly 1 Bq. Moving the decimal point to the right makes mental conversions incredibly rapid."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Smoke Detector Check",
        subtitle: "A household ionization smoke detector contains an Americium-241 source with an activity of approximately 37 Kilobecquerels. What is this activity in Becquerels?",
        steps: [
          "Identify the activity in Kilobecquerels: 37 kBq.",
          "Write down the formula: Bq = kBq * 1,000.",
          "Multiply the starting value: 37 * 1,000 = 37,000.",
          "The smoke detector Americium source has an activity of 37,000 Becquerels."
        ]
      },
      {
        title: "Example 2: Nuclear Medicine Calibration",
        subtitle: "A clinical dose of a diagnostic radioisotope is calibrated at 450 Kilobecquerels. Convert this value to the base unit of Becquerels.",
        steps: [
          "Identify the starting activity: 450 kBq.",
          "Apply the conversion formula: Bq = kBq * 1,000.",
          "Calculate: 450 * 1,000 = 450,000.",
          "The medical tracer dosage is equivalent to 450,000 Becquerels."
        ]
      }
    ]
  },
  table: {
    title: "Kilobecquerel to Becquerel Reference Table",
    headers: ["Kilobecquerels (kBq)", "Becquerels (Bq)", "Alternative Metric Scales"],
    rows: [
      { fromVal: "0.001", toVal: "1", extra: "1 Bq (Base Unit)" },
      { fromVal: "0.01", toVal: "10", extra: "10 Bq" },
      { fromVal: "0.1", toVal: "100", extra: "100 Bq" },
      { fromVal: "1", toVal: "1,000", extra: "1 kBq (Thousand)" },
      { fromVal: "10", toVal: "10,000", extra: "10 kBq" },
      { fromVal: "50", toVal: "50,000", extra: "50 kBq" },
      { fromVal: "100", toVal: "100,000", extra: "100 kBq" },
      { fromVal: "1,000", toVal: "1,000,000", extra: "1 MBq (Million)" }
    ]
  },
  expertNote: {
    title: "Prefix Scaling and the SI standard",
    text: "Using metric prefixes is the standard way to express wide ranges of radioactivity. The Becquerel is a very simple base unit because it maps exactly to one decay event. Understanding metric conversions prevents arithmetic mistakes when programming dosimetry calculation software."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Environmental Radiation Monitoring",
        text: "Radon gas concentrations in houses and geological radiation levels are often measured in Becquerels per cubic meter. Converting kBq to Bq ensures correct assessment of exposure guidelines."
      },
      {
        title: "Nuclear Medicine Dosimetry",
        text: "Medical physicists calculate exact radiopharmaceutical doses using the standardized SI framework. Converting from kBq to Bq ensures that exposure equations use the appropriate base metrics."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactivity Pitfalls",
    items: [
      "Multiplying in the wrong direction: Remember that the Becquerel is the smaller unit, so your converted value must always be larger than the starting value in Kilobecquerels.",
      "Prefix confusion: Do not confuse Kilobecquerels (kBq) with Megabecquerels (MBq) or Millibecquerels (mBq). Megabecquerels are 1,000 times larger than kBq, while millibecquerels are 1,000,000 times smaller."
    ]
  },
  faqs: [
    {
      question: "How do I convert Kilobecquerels to Becquerels?",
      questionId: "kbq-to-bq-convert",
      answer: "Multiply the Kilobecquerel value by 1,000 to find the equivalent activity in Becquerels."
    },
    {
      question: "What does the unit 'Becquerel' measure?",
      questionId: "bq-measurement-type",
      answer: "The Becquerel (Bq) measures radioactivity, which represents the rate of spontaneous nuclear disintegration or decay in a sample per second."
    },
    {
      question: "How many Becquerels are in 1 Kilobecquerel?",
      questionId: "how-many-bq-in-kbq",
      answer: "There are exactly 1,000 Becquerels in 1 Kilobecquerel."
    },
    {
      question: "What is the difference between kBq and MBq?",
      questionId: "difference-kbq-and-mbq",
      answer: "A Kilobecquerel (kBq) is 1,000 Becquerels, while a Megabecquerel (MBq) is 1,000,000 Becquerels. Therefore, 1 MBq is equal to 1,000 kBq."
    },
    {
      question: "What is the abbreviation for Kilobecquerel?",
      questionId: "kbq-abbreviation",
      answer: "The abbreviation for Kilobecquerel is 'kBq', with a lowercase 'k', capital 'B', and lowercase 'q'."
    },
    {
      question: "How do I convert Becquerels back to Kilobecquerels?",
      questionId: "bq-to-kbq-convert",
      answer: "Divide your Becquerel value by 1,000 to convert it back into Kilobecquerels."
    },
    {
      question: "Is kBq an SI unit?",
      questionId: "is-kbq-si",
      answer: "Yes. The Kilobecquerel is an official SI unit of radioactivity, combining the SI base unit 'Becquerel' with the standard metric multiplier prefix 'kilo-'."
    },
    {
      question: "Does converting the unit change the level of radioactive emissions?",
      questionId: "does-it-affect-emissions",
      answer: "No, converting the unit of measure is purely a mathematical shift and does not affect the physical rate of radioactive decay in the source."
    },
    {
      question: "What is 1 Becquerel equal to in disintegrations per second?",
      questionId: "one-bq-definition",
      answer: "1 Becquerel is equal to exactly one atomic disintegration (decay event) per second."
    },
    {
      question: "Why do scientists use kBq instead of just Bq?",
      questionId: "why-use-kbq",
      answer: "A single Becquerel represents an incredibly small quantity of decay. Using Kilobecquerels (kBq) avoids extremely long numbers in standard lab inventories."
    }
  ],
  relatedList: [
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Megabecquerel to Becquerel", from: "megabecquerel", to: "becquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" }
  ],
  references: [
    "BIPM. <em>The International System of Units (SI)</em>, Section 2.2.4: Units with special names.",
    "NIST. <em>Guide for the Use of the International System of Units (SI)</em>, Special Publication 811."
  ]
};
