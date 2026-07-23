import { CustomArticleData } from "./types";

export const becquerelToMegabecquerel: CustomArticleData = {
  fromUnitId: "becquerel",
  toUnitId: "megabecquerel",
  seoTitle: "Becquerel to Megabecquerel Converter - Bq to MBq",
  metaDescription: "Easily convert Becquerels to Megabecquerels (Bq to MBq). Understand the base-10 metric prefix scale, find exact step-by-step math examples, and explore radiology dosage standards.",
  h1: "Becquerel to Megabecquerel Converter",
  introduction: [
    "Modern diagnostic medicine and nuclear research rely on highly active radioisotopes that decay rapidly over hours or days. The standard base unit of radioactivity is the Becquerel (Bq), representing exactly one nuclear disintegration per second.",
    "Because clinical doses and industrial radiation emitters generate millions of decays every second, stating these values in base Becquerels results in massive, unreadable numbers. To solve this, scientists convert measurements to Megabecquerels (MBq), which represent one million decays per second."
  ],
  quickAnswer: {
    text: "To convert Becquerels to Megabecquerels, divide the Becquerel value by 1,000,000 (one million). For example, a radioactive source with an activity of 50,000,000 Becquerels has exactly 50 Megabecquerels.",
    formulaDisplay: "1 Bq = 0.000001 MBq (10⁻⁶ MBq)",
    subtext: "Simply divide the value by one million or shift the decimal point six positions to the left."
  },
  aboutSourceUnit: {
    title: "The Base SI Unit: Becquerel (Bq)",
    text: "The Becquerel (Bq) is the fundamental SI unit for radioactivity. It measures nuclear frequency, where one Becquerel is defined as one nuclear transition per second. It represents a microscopic quantity of decay."
  },
  aboutTargetUnit: {
    title: "The High-Activity Scale: Megabecquerel (MBq)",
    text: "Combining the metric prefix 'mega-' (meaning one million) with the base unit, the Megabecquerel (MBq) represents exactly 1,000,000 nuclear decays per second. It is the primary unit of measurement for radioactive doses in medical imaging."
  },
  relationship: "The relationship between Becquerels and Megabecquerels is based entirely on standard decimal-based metric prefixes. Because one Megabecquerel is equal to exactly one million Becquerels, converting from Bq to MBq involves dividing by 1,000,000.",
  relationshipTitle: "Scaling Radioactivity: Bq vs MBq",
  relationshipItems: [
    { label: "1 Becquerel (Bq)", value: "0.000001 Megabecquerel (MBq)" },
    { label: "1 Megabecquerel (MBq)", value: "1,000,000 Becquerels (Bq)" }
  ],
  formula: {
    text: "To perform this conversion, divide the total disintegration rate (Bq) by one million.",
    math: "Activity in Megabecquerels (MBq) = Activity in Becquerels (Bq) / 1,000,000",
    subtext: "For rapid manual calculation, shift the decimal point six places to the left."
  },
  formulaTitle: "The Bq to MBq Conversion Formula",
  practicalTip: {
    title: "Direct Conversion to Rutherford",
    text: "Because both the Megabecquerel (MBq) and the legacy Rutherford (Rd) represent exactly one million decays per second, you can swap them one-for-one. 50 MBq is exactly equal to 50 Rd."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: PET Scan Contrast Dosage",
        subtitle: "A clinical dose of Fluorodeoxyglucose (FDG) used in PET imaging contains 370,000,000 Becquerels of fluorine-18 activity. Convert this to Megabecquerels.",
        steps: [
          "Identify the activity in Becquerels: 370,000,000 Bq.",
          "Write down the conversion formula: MBq = Bq / 1,000,000.",
          "Perform the division: 370,000,000 / 1,000,000 = 370.",
          "Conclude the calculation: 370,000,000 Bq is equivalent to exactly 370 MBq (which is also equal to 10 millicuries)."
        ]
      },
      {
        title: "Example 2: Laboratory Tritium Sample",
        subtitle: "An environmental research lab stores a radioactive target emitting 4,500,000 Becquerels of beta particles. Convert this to Megabecquerels.",
        steps: [
          "Identify the activity: 4,500,000 Bq.",
          "Divide by the scale factor of one million.",
          "Calculate: 4,500,000 / 1,000,000 = 4.5.",
          "Conclude the calculation: 4,500,000 Bq is equivalent to exactly 4.5 MBq."
        ]
      }
    ]
  },
  table: {
    title: "Becquerel to Megabecquerel Reference Table",
    headers: ["Becquerels (Bq)", "Megabecquerels (MBq)", "Medical & Laboratory Reference Scales"],
    rows: [
      { fromVal: "1", toVal: "0.000001", extra: "Microscopic cosmic ray activity" },
      { fromVal: "100,000", toVal: "0.1", extra: "Trace radioactive calibration standard" },
      { fromVal: "500,000", toVal: "0.5", extra: "Weak environmental research isotope tracer" },
      { fromVal: "1,000,000", toVal: "1", extra: "Exactly one Megabecquerel benchmark" },
      { fromVal: "10,000,000", toVal: "10", extra: "Typical localized thyroid therapy dosage" },
      { fromVal: "100,000,000", toVal: "100", extra: "Standard bone scintigraphy imaging tracer dose" },
      { fromVal: "370,000,000", toVal: "370", extra: "Standard high-contrast diagnostic tracer level (10 mCi)" },
      { fromVal: "1,000,000,000", toVal: "1,000", extra: "1 Gigabecquerel (GBq) transition mark" }
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
        title: "Positron Emission Tomography (PET)",
        text: "PET scanners detect pairs of gamma rays emitted indirectly by a positron-emitting radionuclide. Imaging dosages are measured, logged, and injected based on Megabecquerel values."
      },
      {
        title: "Medical Radiation Waste Logistics",
        text: "Hospitals hold radioactive medical waste in secure rooms until its decay rate drops below a specific regulatory threshold, often defined in MBq, before safe disposal."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactive Scaling Errors",
    items: [
      "Decimal placement slip: Dividing by one million means shifting the decimal point six places to the left. Ensure you count your zeros carefully to avoid a major dose reporting error.",
      "Prefix Case Errors: The prefix 'mega-' must always be written with a capitalized 'M' ('MBq'). A lowercase 'm' would represent millibecquerels (one-thousandth of a Becquerel), which represents a scale error of one billion."
    ]
  },
  faqs: [
    {
      question: "How do I convert Becquerels to Megabecquerels?",
      answer: "Divide your Becquerel value by 1,000,000 (one million) to find the equivalent activity in Megabecquerels."
    },
    {
      question: "What is the relationship between Bq and MBq?",
      answer: "A Becquerel (Bq) represents one nuclear decay per second, while a Megabecquerel (MBq) represents exactly one million (1,000,000) nuclear decays per second."
    },
    {
      question: "How many Bq are in 1 MBq?",
      answer: "There are exactly 1,000,000 Becquerels in one Megabecquerel."
    },
    {
      question: "What is the symbol for Megabecquerel?",
      answer: "The official SI symbol is 'MBq', with a capital 'M' for Mega and capitalized 'Bq' for Becquerel."
    },
    {
      question: "Does converting from Bq to MBq affect the radiation output?",
      answer: "No, the physical rate of atomic decay and radiation emission remains identical. You are only representing the measurement in a different unit scale."
    },
    {
      question: "How do I convert 5,400,000 Bq to MBq?",
      answer: "Divide 5,400,000 by 1,000,000 to get exactly 5.4 MBq."
    },
    {
      question: "What is the reverse formula to convert MBq back to Bq?",
      answer: "To convert Megabecquerels back to Becquerels, multiply your MBq value by 1,000,000."
    },
    {
      question: "Is MBq an official unit of the International System (SI)?",
      answer: "Yes, the Megabecquerel is an official SI-derived unit formed by combining the standard metric prefix 'mega-' with the SI radioactivity base unit 'Becquerel'."
    }
  ],
  relatedList: [
    { label: "Megabecquerel to Becquerel", from: "megabecquerel", to: "becquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI)</em>.",
    "Society of Nuclear Medicine and Molecular Imaging (SNMMI). <em>Standard Unit Systems and Nuclear Medicine Dosing Guidelines</em>."
  ]
};
