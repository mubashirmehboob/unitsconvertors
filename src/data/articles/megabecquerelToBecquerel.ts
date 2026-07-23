import { CustomArticleData } from "./types";

export const megabecquerelToBecquerel: CustomArticleData = {
  fromUnitId: "megabecquerel",
  toUnitId: "becquerel",
  seoTitle: "Megabecquerel to Becquerel Converter - MBq to Bq",
  metaDescription: "Easily convert Megabecquerels to Becquerels (MBq to Bq) with our precise online calculator. Learn the conversion formula, step-by-step math, and practical examples.",
  h1: "Megabecquerel to Becquerel Conversion",
  introduction: [
    "Precision is paramount when analyzing nuclear medicine data, managing radioactive waste, or conducting environmental radiologic studies. The International System of Units (SI) uses the Becquerel (Bq) as the base metric to measure radioactive activity.",
    "Because a single nuclear disintegration per second represents an extremely small physical quantity, researchers typically express high-intensity samples using metric prefixes. The Megabecquerel (MBq) represents one million nuclear decay events per second. Our conversion tool makes it simple to convert these values back to the base unit, ensuring seamless integration into physics formulas and calculations."
  ],
  quickAnswer: {
    text: "To convert Megabecquerels to Becquerels, multiply the Megabecquerel value by 1,000,000. For example, 5 Megabecquerels equals exactly 5,000,000 Becquerels.",
    formulaDisplay: "1 MBq = 1,000,000 Bq",
    subtext: "Simply multiply your Megabecquerel value by 1,000,000 or shift the decimal point six places to the right to find the equivalent activity in Becquerels."
  },
  aboutSourceUnit: {
    title: "Understanding the Megabecquerel (MBq)",
    text: "The Megabecquerel (MBq) is an SI-derived unit representing one million decays per second. It is a standard unit for measuring diagnostic dosages in radiological medical imaging, tracing biological pathways, and describing industrial calibration sources."
  },
  aboutTargetUnit: {
    title: "Understanding the Becquerel (Bq)",
    text: "Named after French physicist Henri Becquerel, the Becquerel (Bq) is the base SI unit of radioactivity. It is defined as exactly one spontaneous nuclear transition (decay) per second. Since it represents a microscopic decay rate, typical physical sources often register thousands or millions of Bq."
  },
  relationship: "The relationship between Megabecquerels and Becquerels is defined by the standard metric multiplier prefix 'mega-', which denotes a factor of 1,000,000. Therefore, one Megabecquerel is exactly equal to one million Becquerels.",
  relationshipTitle: "Sizing Up Radioactivity: MBq vs Bq",
  relationshipItems: [
    { label: "1 Megabecquerel (MBq)", value: "1,000,000 Becquerels (Bq)" },
    { label: "1 Becquerel (Bq)", value: "0.000001 Megabecquerels (MBq)" }
  ],
  formula: {
    text: "Convert radioactivity values by multiplying the Megabecquerel value by 1,000,000.",
    math: "Activity in Becquerels (Bq) = Activity in Megabecquerels (MBq) * 1,000,000",
    subtext: "To perform the reverse conversion, divide the Becquerel value by 1,000,000."
  },
  formulaTitle: "The Megabecquerel to Becquerel Formula",
  practicalTip: {
    title: "Six-Decimal Shifting Rule",
    text: "Since 'mega-' stands for a factor of one million, you can easily handle calculations in your head by moving the decimal point six positions to the right to get Becquerels, or six positions to the left to get Megabecquerels."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Thyroid Uptake Test",
        subtitle: "A clinical dose of Iodine-131 used for diagnostic imaging is measured at 37 Megabecquerels. Express this activity in base Becquerels.",
        steps: [
          "Identify the starting activity in Megabecquerels: 37 MBq.",
          "Write down the conversion formula: Bq = MBq * 1,000,000.",
          "Multiply: 37 * 1,000,000 = 37,000,000.",
          "Conclude: The iodine source has an activity of exactly 37,000,000 Becquerels."
        ]
      },
      {
        title: "Example 2: Lab Calibration Standard",
        subtitle: "A radioactive check source on a calibration bench has an activity of 0.25 Megabecquerels. Convert this value to Becquerels.",
        steps: [
          "Identify the starting activity: 0.25 MBq.",
          "Apply the formula: Bq = MBq * 1,000,000.",
          "Calculate: 0.25 * 1,000,000 = 250,000.",
          "Conclude: The calibration source activity is equivalent to exactly 250,000 Becquerels."
        ]
      }
    ]
  },
  table: {
    title: "Megabecquerel to Becquerel Reference Table",
    headers: ["Megabecquerels (MBq)", "Becquerels (Bq)", "Isotope Reference Range"],
    rows: [
      { fromVal: "0.001", toVal: "1,000", extra: "1 Kilobecquerel (kBq) household smoke detector" },
      { fromVal: "0.01", toVal: "10,000", extra: "10 kBq low-level check source" },
      { fromVal: "0.1", toVal: "100,000", extra: "100 kBq biological tracer dose" },
      { fromVal: "1", toVal: "1,000,000", extra: "1 Rutherford (Rd) benchmark" },
      { fromVal: "10", toVal: "10,000,000", extra: "10 MBq nuclear medicine trace vial" },
      { fromVal: "37", toVal: "37,000,000", extra: "Exactly 1 Millicurie (mCi) standard dose" },
      { fromVal: "100", toVal: "100,000,000", extra: "100 MBq therapeutic injection contrast" },
      { fromVal: "1,000", toVal: "1,000,000,000", extra: "1 Gigabecquerel (GBq) high-level oncology capsule" }
    ]
  },
  expertNote: {
    title: "Decimal Alignment in SI",
    text: "The integration of standard prefixes into the SI system has greatly simplified scientific communication. Instead of converting with complex fractions as was required with the Curie scale, scaling MBq to Bq is a clean, base-10 shift that eliminates margin of error during dosage calibrations."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Calibrating Hospital Counters",
        text: "Radiology clinics receive radioactive isotopes labeled in Megabecquerels but must configure Geiger counters and ionization chambers in base Becquerels to perform background subtraction."
      },
      {
        title: "Environmental Soil Assessments",
        text: "Environmental scientists surveying soil or water samples around industrial plants report total active decay footprints in Becquerels, converting larger stockpile metrics from Megabecquerels."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactivity Pitfalls",
    items: [
      "Multiplying in the wrong direction: Since the Becquerel is a microscopic unit compared to the Megabecquerel, your conversion must result in a much larger number. If your value got smaller, you divided instead of multiplying.",
      "Symbol capitalization errors: Be careful to write 'MBq' with a capital 'M' for Mega. Writing 'mBq' represents millibecquerels, which is nine orders of magnitude smaller."
    ]
  },
  faqs: [
    {
      question: "How do I convert Megabecquerels to Becquerels?",
      questionId: "mbq-to-bq-conversion",
      answer: "Multiply the Megabecquerel value by 1,000,000 to find the equivalent activity in Becquerels."
    },
    {
      question: "What is a Megabecquerel?",
      questionId: "mbq-meaning-faq",
      answer: "A Megabecquerel (MBq) is an SI-derived unit representing exactly one million (1,000,000) spontaneous nuclear decay events per second."
    },
    {
      question: "How many Becquerels are in one Megabecquerel?",
      questionId: "bq-count-in-mbq",
      answer: "There are exactly 1,000,000 Becquerels in one Megabecquerel."
    },
    {
      question: "What is the relationship between MBq and Curie?",
      questionId: "mbq-curie-relationship",
      answer: "One Curie (Ci) is defined as exactly 37,000 Megabecquerels (37,000,000,000 Bq)."
    },
    {
      question: "What does Bq stand for?",
      questionId: "bq-stands-for",
      answer: "Bq stands for Becquerel, the base SI unit of radioactive activity."
    },
    {
      question: "How do I convert Becquerels back to Megabecquerels?",
      questionId: "bq-to-mbq-reverse",
      answer: "Divide your Becquerel value by 1,000,000 to convert it back to Megabecquerels."
    },
    {
      question: "Is Megabecquerel larger than Kilobecquerel?",
      questionId: "mbq-vs-kbq-size",
      answer: "Yes, a Megabecquerel (1,000,000 Bq) is 1,000 times larger than a Kilobecquerel (1,000 Bq)."
    },
    {
      question: "Does changing the unit alter the radioactive emissions?",
      questionId: "emissions-integrity",
      answer: "No, converting the unit is purely a descriptive change in labels and has no effect on the physical decay rate or emitted energy of the sample."
    },
    {
      question: "Why do nuclear medicine departments use MBq?",
      questionId: "medical-reasons",
      answer: "It allows clinicians to describe active doses with compact, readable numbers (like 150 MBq) rather than long values like 150,000,000 Bq."
    },
    {
      question: "What is 1 Becquerel equal to in decays?",
      questionId: "one-bq-event",
      answer: "Exactly one nuclear disintegration event per second."
    }
  ],
  relatedList: [
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Megabecquerel to Curie", from: "megabecquerel", to: "curie" },
    { label: "Megabecquerel to Rutherford", from: "megabecquerel", to: "rutherford" },
    { label: "Megabecquerel to Kilobecquerel", from: "megabecquerel", to: "kilobecquerel" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" }
  ],
  references: [
    "BIPM. <em>The International System of Units (SI Brochure)</em>.",
    "International Commission on Radiation Units and Measurements. <em>ICRU Report 85: Fundamental Quantities and Units for Ionizing Radiation</em>."
  ]
};
