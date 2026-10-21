import { CustomArticleData } from "./types";

export const becquerelToGigabecquerel: CustomArticleData = {
  fromUnitId: "becquerel",
  toUnitId: "gigabecquerel",
  seoTitle: "Becquerel to Gigabecquerel Converter - Bq to GBq",
  metaDescription: "Convert Becquerels to Gigabecquerels (Bq to GBq) accurately. Includes conversion formula, step-by-step calculations, conversion chart, and nuclear medicine applications.",
  canonicalUrl: "https://unitsconvertors.com/converters/radioactivity/becquerel-to-gigabecquerel",
  h1: "Becquerel to Gigabecquerel Converter",
  introduction: [
    "Radioactivity measures the spontaneous rate at which unstable atomic nuclei disintegrate, emitting ionizing particles or electromagnetic rays. In physics laboratories, environmental radiation surveys, and nuclear medicine clinics, expressing activity accurately helps technicians quantify isotope quantities safely.",
    "The Becquerel (Bq) is the fundamental International System of Units (SI) measure for radioactive decay, defined as one disintegration per second. Because a single disintegration is a microscopic event, clinical doses and industrial radiation emitters often operate in billions of decays per second. This converter scales base Becquerels into Gigabecquerels (GBq) so you can convert values without decimal misplacement."
  ],
  quickAnswer: {
    text: "To convert Becquerels to Gigabecquerels, divide the Becquerel value by 1,000,000,000 (one billion) or multiply by 10⁻⁹ (0.000000001). For example, 5,000,000,000 Bq equals exactly 5 GBq.",
    formulaDisplay: "1 Bq = 10⁻⁹ GBq = 0.000000001 GBq",
    subtext: "Divide by 10⁹ to move from the base SI unit to the gigametric multiple."
  },
  aboutSourceUnit: {
    title: "About the Becquerel (Bq)",
    text: "Named after French physicist Henri Becquerel, who shared the 1903 Nobel Prize in Physics for discovering radioactivity, the Becquerel (symbol: Bq) is the SI base derived unit of radioactive activity. One Becquerel corresponds to exactly one spontaneous nuclear transformation per second. Because background radiation in ordinary soil, water, and food routinely produces hundreds of disintegrations per second, a single Becquerel is an exceptionally delicate quantity."
  },
  aboutTargetUnit: {
    title: "About the Gigabecquerel (GBq)",
    text: "The Gigabecquerel (symbol: GBq) combines the SI unit Becquerel with the metric multiplier giga-, representing 10⁹ (one billion) disintegrations per second. Radiopharmacies and cancer therapy centers frequently dispense medical radioisotopes like Technetium-99m, Fluorine-18, and Iodine-131 in Gigabecquerel quantities, making GBq the everyday working unit of modern molecular imaging."
  },
  relationship: "One Gigabecquerel equals exactly 1,000,000,000 Becquerels. Conversely, one Becquerel is one billionth of a Gigabecquerel (10⁻⁹ GBq). Converting from Bq to GBq shifts the magnitude down by nine decimal places.",
  relationshipTitle: "Conversion Ratio: Bq to GBq",
  relationshipItems: [
    { label: "1 Becquerel (Bq)", value: "10⁻⁹ Gigabecquerels (0.000000001 GBq)" },
    { label: "1 Gigabecquerel (GBq)", value: "1,000,000,000 Becquerels (10⁹ Bq)" },
    { label: "1,000,000 Becquerels (1 MBq)", value: "0.001 Gigabecquerels (10⁻³ GBq)" },
    { label: "37,000,000,000 Becquerels (1 Ci)", value: "37 Gigabecquerels exactly" }
  ],
  formula: {
    text: "Calculate Gigabecquerels by dividing the number of Becquerels by one billion, or by multiplying by ten to the negative ninth power.",
    math: "Activity in GBq = Activity in Bq / 1,000,000,000",
    subtext: "Alternatively: Activity in GBq = Activity in Bq × 10⁻⁹"
  },
  formulaTitle: "Becquerel to Gigabecquerel Formula",
  practicalTip: {
    title: "Counting Decimal Places",
    text: "Because you are dividing by 1,000,000,000, move the decimal point nine places to the left. If a reading displays 350,000,000 Bq, moving the point nine positions produces 0.35 GBq."
  },
  expertNote: {
    title: "SI Standardization in Radiopharmacy",
    text: "The International Commission on Radiation Units and Measurements (ICRU) and the World Health Organization (WHO) mandate the Gigabecquerel as the standard replacement for legacy millicurie prescriptions. A standard 10 mCi diagnostic dose corresponds to 0.37 GBq."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting a Diagnostic PET Tracer Dose",
        subtitle: "A positron emission tomography (PET) scanner requires 370,000,000 Bq of Fluorine-18. Convert this dose into Gigabecquerels.",
        steps: [
          "Identify the starting activity: 370,000,000 Bq.",
          "State the conversion formula: GBq = Bq / 1,000,000,000.",
          "Perform the calculation: 370,000,000 / 1,000,000,000 = 0.37 GBq.",
          "Final result: The administered dose is exactly 0.37 GBq (equivalent to 10 millicuries)."
        ]
      },
      {
        title: "Example 2: Nuclear Power Plant Coolant Activity",
        subtitle: "A primary coolant monitoring sensor detects 85,000,000,000 Bq of total volatile isotope activity. Express this reading in Gigabecquerels.",
        steps: [
          "Identify the starting activity: 85,000,000,000 Bq.",
          "Apply the conversion factor: 85,000,000,000 / 1,000,000,000.",
          "Compute the quotient: 85 GBq.",
          "Final result: The coolant sample contains 85 GBq of activity."
        ]
      },
      {
        title: "Example 3: Trace Research Sample",
        subtitle: "A carbon-14 tracer solution has a measured activity of 2,500,000 Bq. Convert this to Gigabecquerels.",
        steps: [
          "Identify the measured value: 2,500,000 Bq.",
          "Apply the formula: 2,500,000 / 1,000,000,000.",
          "Compute the value: 0.0025 GBq (or 2.5 × 10⁻³ GBq).",
          "Final result: The sample activity is 0.0025 GBq (2.5 MBq)."
        ]
      }
    ]
  },
  table: {
    title: "Becquerel to Gigabecquerel Conversion Table",
    headers: ["Becquerels (Bq)", "Gigabecquerels (GBq)", "Common Scientific Benchmark"],
    rows: [
      { fromVal: "1", toVal: "1.000 × 10⁻⁹", extra: "Single atomic nucleus disintegration per second" },
      { fromVal: "1,000", toVal: "1.000 × 10⁻⁶", extra: "1 kBq — consumer smoke detector background" },
      { fromVal: "1,000,000", toVal: "0.001", extra: "1 MBq — university biochemistry tracer vial" },
      { fromVal: "10,000,000", toVal: "0.010", extra: "10 MBq — low-dose laboratory reference check" },
      { fromVal: "100,000,000", toVal: "0.100", extra: "100 MBq — cardiac SPECT imaging dose" },
      { fromVal: "370,000,000", toVal: "0.370", extra: "370 MBq — standard 10 mCi diagnostic PET dose" },
      { fromVal: "1,000,000,000", toVal: "1.000", extra: "1 GBq exact base metric threshold" },
      { fromVal: "5,000,000,000", toVal: "5.000", extra: "5 GBq — therapeutic thyroid ablation dose" },
      { fromVal: "37,000,000,000", toVal: "37.000", extra: "Exact equivalent of 1 traditional Curie (Ci)" },
      { fromVal: "100,000,000,000", toVal: "100.000", extra: "100 GBq — industrial radiography weld inspection source" }
    ]
  },
  applications: {
    title: "Where Bq to GBq Conversions Matter",
    items: [
      {
        title: "Nuclear Medicine & Radiopharmacy",
        text: "Radiochemists synthesize radionuclides in multi-gigabecquerel batches. Clinical dispensing systems track stock in Becquerels to maintain precision, requiring conversion to Gigabecquerels for physician packaging and shipment documentation."
      },
      {
        title: "Radiation Protection & Dosimetry",
        text: "Health physicists establish regulatory contamination limits in Becquerels per square meter. When evaluating high-level source inventories or transport packaging, they convert cumulative activity into Gigabecquerels to check compliance with IAEA transport safety rules."
      },
      {
        title: "Industrial Gamma Radiography",
        text: "Non-destructive testing teams use sealed sources like Iridium-192 and Cobalt-60. Source manufacturers certify raw decay rates in billions of Becquerels, which inspectors record as Gigabecquerels on job permits."
      },
      {
        title: "Nuclear Reactor Core Monitoring",
        text: "Coolant sampling programs measure fission product activity in Becquerels per milliliter. Plant engineers aggregate these counts to calculate total reactor inventory in Gigabecquerels for licensing reports."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Bq to GBq",
    items: [
      "Multiplying instead of dividing: Converting from a small base unit (Bq) to a large prefix unit (GBq) requires division. If the resulting number is larger than the starting value, multiplication was mistakenly applied.",
      "Confusing Mega (10⁶) with Giga (10⁹): Dividing by 1,000,000 produces Megabecquerels (MBq), not Gigabecquerels. Ensure nine zeros are used in the divisor, not six.",
      "Conflating radioactivity with absorbed radiation dose: Activity (Bq and GBq) measures the rate of nuclear disintegrations, whereas absorbed dose (Gray, Gy) measures energy absorbed per kilogram of matter.",
      "Dropping scientific notation exponents: In spreadsheets, entering 1e9 versus 1e-9 determines whether the calculation scales up or down by nine orders of magnitude."
    ]
  },
  faqs: [
    {
      question: "How do I convert Becquerels to Gigabecquerels?",
      answer: "Divide the activity value in Becquerels by 1,000,000,000 (one billion) or multiply by 10⁻⁹. For instance, 2,500,000,000 Bq divided by 1,000,000,000 yields 2.5 GBq."
    },
    {
      question: "What is the exact mathematical ratio between Bq and GBq?",
      answer: "One Gigabecquerel is equal to exactly 1,000,000,000 Becquerels. Therefore, 1 Bq equals 10⁻⁹ GBq (0.000000001 GBq)."
    },
    {
      question: "Why is the Gigabecquerel used instead of the base Becquerel?",
      answer: "Because one Becquerel represents a single disintegration per second, measuring practical medical and industrial radiation sources in Bq results in unwieldy 10-digit to 12-digit numbers. Prefixing with giga- makes numbers concise and easier to record without transcription errors."
    },
    {
      question: "How many Megabecquerels are in one Gigabecquerel?",
      answer: "There are exactly 1,000 Megabecquerels (MBq) in one Gigabecquerel (GBq), because mega- represents 10⁶ and giga- represents 10⁹."
    },
    {
      question: "How does 1 GBq compare to 1 Curie?",
      answer: "One Curie (Ci) equals exactly 37 Gigabecquerels (37 GBq). Conversely, 1 GBq equals approximately 0.027027 Curies (27.027 millicuries)."
    },
    {
      question: "What is a typical medical dose in Gigabecquerels?",
      answer: "Diagnostic PET scans typically use 0.2 to 0.4 GBq of Fluorine-18, while targeted radiotherapy treatments (such as Lutetium-177 peptide therapies) often administer 7.4 GBq per cycle."
    },
    {
      question: "Can I convert decimal Becquerel values to Gigabecquerels?",
      answer: "Yes. The conversion factor remains 10⁻⁹ for any real number, whether fractional, integer, or expressed in scientific notation."
    },
    {
      question: "Is Gigabecquerel an official SI unit?",
      answer: "Yes. The Becquerel is an official SI derived unit, and the prefix giga- is an official SI metric multiplier authorized by the General Conference on Weights and Measures (CGPM)."
    }
  ],
  relatedList: [
    { label: "Gigabecquerel to Becquerel", from: "gigabecquerel", to: "becquerel" },
    { label: "Curie to Gigabecquerel", from: "curie", to: "gigabecquerel" },
    { label: "Gigabecquerel to Curie", from: "gigabecquerel", to: "curie" },
    { label: "Megabecquerel to Gigabecquerel", from: "megabecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Megabecquerel", from: "gigabecquerel", to: "megabecquerel" },
    { label: "Kilobecquerel to Gigabecquerel", from: "kilobecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Kilobecquerel", from: "gigabecquerel", to: "kilobecquerel" },
    { label: "Rutherford to Gigabecquerel", from: "rutherford", to: "gigabecquerel" },
    { label: "Gigabecquerel to Rutherford", from: "gigabecquerel", to: "rutherford" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) — Guide for the Use of the International System of Units (Special Publication 811).",
    "International Atomic Energy Agency (IAEA) — Radiation Protection and Safety of Radiation Sources: International Basic Safety Standards (GSR Part 3).",
    "International Commission on Radiation Units and Measurements (ICRU) — Fundamental Quantities and Units for Ionizing Radiation (Report 90)."
  ]
};
