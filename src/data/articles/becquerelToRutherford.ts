import { CustomArticleData } from "./types";

export const becquerelToRutherford: CustomArticleData = {
  fromUnitId: "becquerel",
  toUnitId: "rutherford",
  seoTitle: "Becquerel to Rutherford Converter - Bq to Rd",
  metaDescription: "Easily convert Becquerels to Rutherfords (Bq to Rd). Discover the history of nuclear physicist Ernest Rutherford, learn the division formula, and read clear examples.",
  h1: "Becquerel to Rutherford Converter",
  introduction: [
    "In nuclear physics, tracking the rate at which unstable atomic nuclei disintegrate is crucial for protecting health, evaluating reactor fuel safety, and measuring laboratory tracers. Physicists have used various units of decay speed over the past century.",
    "The Becquerel (Bq) is the contemporary SI base unit representing one decay per second, whereas the Rutherford (Rd) is an elegant legacy unit created to represent exactly one million decays per second. Navigating the relationship between these two units is simple once you understand the metric scale factor."
  ],
  quickAnswer: {
    text: "To convert Becquerels to Rutherfords, divide the Becquerel value by 1,000,000 (one million). For example, a radiation source emitting 5,000,000 Becquerels possesses exactly 5 Rutherfords of activity.",
    formulaDisplay: "1 Bq = 0.000001 Rd (10⁻⁶ Rd)",
    subtext: "Simply divide by one million or shift the decimal point six places to the left."
  },
  aboutSourceUnit: {
    title: "The Metric Standard: Becquerel (Bq)",
    text: "The Becquerel (Bq) represents a microscopic unit where a single nucleus decays each second. Because atomic decay is highly common in physical materials, laboratories measure most active isotopes in mega- or giga-becquerels."
  },
  aboutTargetUnit: {
    title: "The Legacy Standard: Rutherford (Rd)",
    text: "Proposed in 1946 by the National Research Council, the Rutherford (Rd) is named after Ernest Rutherford, the father of nuclear physics. It represents one million decays per second, which aligns perfectly with modern megabecquerel (MBq) scales."
  },
  relationship: "The relationship between Becquerels and Rutherfords is base-10 and defined by a factor of exactly one million. Because one Rutherford is equal to one million disintegrations per second, a Rutherford is identical in size to a Megabecquerel.",
  relationshipTitle: "Sizing Up Radioactivity: Bq vs Rd",
  relationshipItems: [
    { label: "1 Becquerel (Bq)", value: "0.000001 Rutherford (Rd)" },
    { label: "1 Rutherford (Rd)", value: "1,000,000 Becquerels (Bq)" }
  ],
  formula: {
    text: "To calculate this conversion, divide the total disintegration count per second (Bq) by one million.",
    math: "Activity in Rutherfords (Rd) = Activity in Becquerels (Bq) / 1,000,000",
    subtext: "To convert back, multiply your Rutherford value by 1,000,000."
  },
  formulaTitle: "The Becquerel to Rutherford Formula",
  practicalTip: {
    title: "Equivalency in Modern Units",
    text: "If you are reading a modern research paper and see 'Megabecquerels' (MBq), you can read this value directly as Rutherfords. They are mathematically identical, making legacy literature easy to interpret."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Diagnostic Radiotracer",
        subtitle: "A standard clinical tracer dose contains 12,500,000 Becquerels of decay activity. Convert this to Rutherfords.",
        steps: [
          "Identify the activity in Becquerels: 12,500,000 Bq.",
          "Write down the conversion formula: Rd = Bq / 1,000,000.",
          "Perform the division: 12,500,000 / 1,000,000 = 12.5.",
          "Conclude the calculation: 12.5 million Becquerels is exactly equal to 12.5 Rutherfords."
        ]
      },
      {
        title: "Example 2: Laboratory Tritium Sample",
        subtitle: "A small vial of tritium gas exhibits 350,000 Becquerels of activity. Express this in Rutherfords.",
        steps: [
          "Identify the starting value: 350,000 Bq.",
          "Divide by the scale factor: 350,000 / 1,000,000.",
          "Perform the calculation: 0.35.",
          "Conclude the calculation: 350,000 Bq is equivalent to 0.35 Rutherfords."
        ]
      }
    ]
  },
  table: {
    title: "Becquerel to Rutherford Reference Table",
    headers: ["Becquerels (Bq)", "Rutherfords (Rd)", "Isotope Application Context"],
    rows: [
      { fromVal: "1", toVal: "0.000001", extra: "Individual isotope atomic decay" },
      { fromVal: "10,000", toVal: "0.01", extra: "Environmental air filter sample" },
      { fromVal: "100,000", toVal: "0.1", extra: "Weak radioactive mineral ore sample" },
      { fromVal: "1,000,000", toVal: "1", extra: "1 Megabecquerel (MBq) standard benchmark" },
      { fromVal: "5,000,000", toVal: "5", extra: "Low-level medical imaging tracers" },
      { fromVal: "10,000,000", toVal: "10", extra: "Standard laboratory calibration isotope vial" },
      { fromVal: "50,000,000", toVal: "50", extra: "Therapeutic radiopharmaceutical injectibles" },
      { fromVal: "1,000,000,000", toVal: "1,000", extra: "1 Gigabecquerel (GBq) industrial radiography dose" }
    ]
  },
  expertNote: {
    title: "Historical Significance of the Rutherford",
    text: "The Rutherford unit was introduced as a simpler alternative to the Curie, which was difficult to standardize due to tiny fluctuations in radium purity. The Rutherford's clean, base-10 definition of one million decays per second paved the way for the eventual adoption of prefixes in the SI system."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Legacy Document Digitization",
        text: "Health physicists digitizing cold-war era radiological studies must convert original records written in Rutherfords (Rd) into the modern SI standard of Becquerels or Megabecquerels."
      },
      {
        title: "Calibration Target Settings",
        text: "High-precision scintillation detectors used in physics research laboratories are calibrated using source emitters rated in Rutherfords, requiring conversion to Becquerels to align with computerized software logging."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactivity Pitfalls",
    items: [
      "Decimal placement error: Dividing by one million means shifting the decimal point six places to the left. Take care when counting zero placeholders to avoid a tenfold factor error.",
      "Symbol confusion: Do not write 'rd' in lowercase, as the official symbol is capitalized 'Rd' to honor Lord Rutherford."
    ]
  },
  faqs: [
    {
      question: "How do I convert Becquerels to Rutherfords?",
      answer: "Divide your Becquerel value by 1,000,000 (one million) to find the equivalent activity in Rutherfords."
    },
    {
      question: "What is a Rutherford in nuclear physics?",
      answer: "A Rutherford (Rd) is a legacy unit of radioactivity defined as exactly one million (1,000,000) nuclear disintegrations per second."
    },
    {
      question: "Is a Rutherford identical to a Megabecquerel?",
      answer: "Yes, because one Megabecquerel (1 MBq) represents exactly one million disintegrations per second, it is mathematically equal to one Rutherford (1 Rd)."
    },
    {
      question: "What is the symbol for the Rutherford unit?",
      answer: "The official symbol for the Rutherford is 'Rd', with a capital R and a lowercase d."
    },
    {
      question: "Why was the Rutherford abandoned in modern science?",
      answer: "To create a unified international measurement system, the General Conference on Weights and Measures adopted the Becquerel as the official SI unit for radioactivity, using metric prefixes instead of distinct unit names."
    },
    {
      question: "How many Rutherfords are in a Curie?",
      answer: "One Curie is 37 billion Becquerels. Dividing this by one million yields exactly 37,000 Rutherfords."
    },
    {
      question: "Does converting radioactivity affect the radiation output?",
      answer: "No, you are only changing the unit of representation. The physical rate of atomic decay and radiation emission remains unchanged."
    },
    {
      question: "How do I convert Rutherfords back to Becquerels?",
      answer: "To perform the reverse conversion, multiply your Rutherford value by 1,000,000."
    }
  ],
  relatedList: [
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" },
    { label: "Megabecquerel to Rutherford", from: "megabecquerel", to: "rutherford" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" }
  ],
  references: [
    "National Research Council (USA). <em>A New Unit of Radioactivity: The Rutherford</em>, 1946.",
    "BIPM. <em>The International System of Units (SI) Guide and Nuclear Standards</em>."
  ]
};
