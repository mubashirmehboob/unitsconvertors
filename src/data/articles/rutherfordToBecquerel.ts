import { CustomArticleData } from "./types";

export const rutherfordToBecquerel: CustomArticleData = {
  fromUnitId: "rutherford",
  toUnitId: "becquerel",
  seoTitle: "Rutherford to Becquerel Converter - Rd to Bq",
  metaDescription: "Easily convert Rutherfords to Becquerels (Rd to Bq). Learn the mathematical ratio of 1 million decays per Rutherford, and view clear step-by-step calculations.",
  h1: "Rutherford to Becquerel Converter",
  introduction: [
    "Radioactivity quantifies the rate at which unstable atomic nuclei disintegrate, releasing radiation. Over the last century, nuclear physics has introduced several legacy and modern units of measurement, which require careful conversion to prevent scientific and clinical errors.",
    "The Rutherford (Rd) represents a simpler, base-10 traditional unit defined as exactly one million decays per second. The Becquerel (Bq) is the contemporary SI base unit representing one decay per second. Understanding how to scale Rutherford values back to base Becquerels helps nuclear researchers interpret historic medical and experimental publications."
  ],
  quickAnswer: {
    text: "To convert Rutherfords to Becquerels, multiply the Rutherford value by 1,000,000 (one million). For example, a radioactive source with an activity of 5 Rutherfords contains exactly 5,000,000 Becquerels.",
    formulaDisplay: "1 Rd = 1,000,000 Bq (10⁶ Bq)",
    subtext: "Simply multiply your Rutherford value by one million or shift the decimal point six places to the right."
  },
  aboutSourceUnit: {
    title: "Understanding the Rutherford (Rd)",
    text: "Proposed in 1946, the Rutherford (Rd) represents exactly 1,000,000 disintegrations per second. It was designed to align with modern decimal prefixes and is mathematically identical to a Megabecquerel (MBq)."
  },
  aboutTargetUnit: {
    title: "Understanding the Becquerel (Bq)",
    text: "Named after Henri Becquerel, the co-discoverer of radioactivity, one Becquerel is defined as exactly one nuclear disintegration per second. It is a microscopic unit of measure, which means typical physical samples (such as consumer smoke detectors or mineral ores) often register thousands or millions of Becquerels."
  },
  relationship: "The relationship between Rutherfords and Becquerels is base-10 and defined by a factor of exactly one million. Because one Rutherford is equal to one million disintegrations per second, converting from Rd to Bq involves multiplying by 1,000,000.",
  relationshipTitle: "Sizing Up Radioactivity: Rd vs Bq",
  relationshipItems: [
    { label: "1 Rutherford (Rd)", value: "1,000,000 Becquerels (Bq)" },
    { label: "1 Becquerel (Bq)", value: "0.000001 Rutherford (Rd)" }
  ],
  formula: {
    text: "Convert radioactivity values by multiplying the Rutherford value by 1,000,000.",
    math: "Activity in Becquerels (Bq) = Activity in Rutherfords (Rd) × 1,000,000",
    subtext: "To convert back, divide your Becquerel value by 1,000,000."
  },
  formulaTitle: "The Rutherford to Becquerel Formula",
  practicalTip: {
    title: "Equivalency in Modern Units",
    text: "If you are reading a modern research paper and see 'Megabecquerels' (MBq), you can read this value directly as Rutherfords. They are mathematically identical, making legacy literature easy to interpret."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Diagnostic Radiotracer",
        subtitle: "A standard clinical tracer dose contains 12.5 Rutherfords of activity. Convert this to Becquerels.",
        steps: [
          "Identify the activity in Rutherfords: 12.5 Rd.",
          "Write down the conversion formula: Bq = Rd × 1,000,000.",
          "Perform the multiplication: 12.5 × 1,000,000 = 12,500,000.",
          "Conclude the calculation: 12.5 Rutherfords is exactly equal to 12,500,000 Becquerels."
        ]
      },
      {
        title: "Example 2: Laboratory Tritium Sample",
        subtitle: "A small vial of tritium gas exhibits 0.35 Rutherfords of activity. Express this in Becquerels.",
        steps: [
          "Identify the starting value: 0.35 Rd.",
          "Multiply by the scale factor: 0.35 × 1,000,000.",
          "Perform the calculation: 350,000.",
          "Conclude the calculation: 0.35 Rutherfords is equivalent to 350,000 Becquerels."
        ]
      }
    ]
  },
  table: {
    title: "Rutherford to Becquerel Reference Table",
    headers: ["Rutherfords (Rd)", "Becquerels (Bq)", "Isotope Application Context"],
    rows: [
      { fromVal: "0.000001", toVal: "1", extra: "Individual isotope atomic decay" },
      { fromVal: "0.01", toVal: "10,000", extra: "Environmental air filter sample" },
      { fromVal: "0.1", toVal: "100,000", extra: "Weak radioactive mineral ore sample" },
      { fromVal: "1", toVal: "1,000,000", extra: "1 Megabecquerel (MBq) standard benchmark" },
      { fromVal: "5", toVal: "5,000,000", extra: "Low-level medical imaging tracers" },
      { fromVal: "10", toVal: "10,000,000", extra: "Standard laboratory calibration isotope vial" },
      { fromVal: "50", toVal: "50,000,000", extra: "Therapeutic radiopharmaceutical injectibles" },
      { fromVal: "1,000", toVal: "1,000,000,000", extra: "1 Gigabecquerel (GBq) industrial radiography dose" }
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
      "Dividing instead of multiplying: Because the Rutherford is a much larger unit than the Becquerel, converting to Becquerels must yield a larger number. Check your calculations if the value gets smaller.",
      "Symbol capitalization error: The symbol for Rutherford is 'Rd'. Avoid using lowercase 'rd' to ensure compliance with professional scientific publications."
    ]
  },
  faqs: [
    {
      question: "How do I convert Rutherfords to Becquerels?",
      answer: "Multiply your Rutherford value by 1,000,000 (one million) to find the equivalent activity in Becquerels."
    },
    {
      question: "What is a Rutherford in radioactive decay?",
      answer: "A Rutherford (Rd) is a legacy unit of radioactivity representing exactly one million (1,000,000) nuclear disintegrations per second."
    },
    {
      question: "Is a Rutherford identical to a Megabecquerel?",
      answer: "Yes, because one Megabecquerel (1 MBq) is defined as exactly one million decays per second, it is mathematically equal to one Rutherford (1 Rd)."
    },
    {
      question: "What are the official symbols for Curie and Rutherford?",
      answer: "The official symbol for the Curie is 'Ci' and the symbol for the Rutherford is 'Rd'."
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
      question: "Does converting radioactivity units change its physical energy output?",
      answer: "No, the physical rate of atomic decay and radiation emission remains identical. You are only changing how you represent the measurement."
    },
    {
      question: "How do I convert Becquerels back to Rutherfords?",
      answer: "To perform the reverse conversion, divide your Becquerel value by 1,000,000."
    }
  ],
  relatedList: [
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Megabecquerel to Becquerel", from: "megabecquerel", to: "becquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" }
  ],
  references: [
    "National Research Council (USA). <em>A New Unit of Radioactivity: The Rutherford</em>, 1946.",
    "BIPM. <em>The International System of Units (SI) Guide and Nuclear Standards</em>."
  ]
};
