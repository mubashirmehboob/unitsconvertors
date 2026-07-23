import { CustomArticleData } from "./types";

export const curieToRutherford: CustomArticleData = {
  fromUnitId: "curie",
  toUnitId: "rutherford",
  seoTitle: "Curie to Rutherford Converter - Ci to Rd",
  metaDescription: "Quickly convert Curies to Rutherfords (Ci to Rd). Master the math ratio of 37,000 Rutherfords per Curie, explore clinical radiotherapy contexts, and view step-by-step examples.",
  h1: "Curie to Rutherford Converter",
  introduction: [
    "Radioactivity quantifies the rate at which unstable atomic nuclei disintegrate over time. Over the last century, nuclear physics has introduced several legacy and modern units of measurement, which require careful conversion to prevent scientific and clinical errors.",
    "The Curie (Ci) represents a massive traditional unit historically anchored to radium's decay, whereas the Rutherford (Rd) represents a simpler, base-10 traditional unit defined as exactly one million decays per second. Understanding the relationship between Curies and Rutherfords helps nuclear researchers interpret historic medical and experimental publications."
  ],
  quickAnswer: {
    text: "To convert Curies to Rutherfords, multiply the Curie value by 37,000. For example, a radioactive source with an activity of 2 Curies contains exactly 74,000 Rutherfords.",
    formulaDisplay: "1 Ci = 37,000 Rd",
    subtext: "Simply multiply the Curie value by 37,000 or divide by 0.000027 to find the equivalent activity in Rutherfords."
  },
  aboutSourceUnit: {
    title: "Understanding the Curie (Ci)",
    text: "The Curie (Ci) represents exactly 3.7 × 10¹⁰ nuclear transitions per second. It is a very large unit, typically used to measure high-dose medical implants, reactor fuels, and industrial testing sources."
  },
  aboutTargetUnit: {
    title: "Understanding the Rutherford (Rd)",
    text: "Proposed in 1946, the Rutherford (Rd) represents exactly 1,000,000 disintegrations per second. It was designed to align with modern decimal prefixes and is mathematically identical to a Megabecquerel (MBq)."
  },
  relationship: "The ratio between Curies and Rutherfords is fixed. Since one Curie is defined as 37 billion decays per second and one Rutherford is one million decays per second, one Curie is equal to exactly 37,000 Rutherfords.",
  relationshipTitle: "The Radioactivity Scales: Ci vs Rd",
  relationshipItems: [
    { label: "1 Curie (Ci)", value: "37,000 Rutherfords (Rd)" },
    { label: "1 Rutherford (Rd)", value: "0.000027 Curies (Ci)" }
  ],
  formula: {
    text: "Convert radioactivity values by multiplying the Curie value by 37,000.",
    math: "Activity in Rutherfords (Rd) = Activity in Curies (Ci) × 37,000",
    subtext: "To convert back, divide your Rutherford value by 37,000."
  },
  formulaTitle: "The Curie to Rutherford Formula",
  practicalTip: {
    title: "Simple Mental Approximations",
    text: "When performing rapid mental calculations, remember that 1 millicurie (mCi) is equal to exactly 37 Rutherfords. This mental baseline makes it easy to evaluate lab inventories quickly."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Industrial Radiation Source",
        subtitle: "An industrial pipeline scanner uses an Iridium-192 capsule rated at 15 Curies. Convert this activity to Rutherfords.",
        steps: [
          "Identify the activity in Curies: 15 Ci.",
          "Write down the conversion formula: Rd = Ci × 37,000.",
          "Perform the multiplication: 15 × 37,000 = 555,000.",
          "Conclude the calculation: 15 Curies is exactly equal to 555,000 Rutherfords."
        ]
      },
      {
        title: "Example 2: Lab Calibration Standard",
        subtitle: "A weak medical calibration standard is rated at 0.0025 Curies. Convert this to Rutherfords.",
        steps: [
          "Identify the starting activity: 0.0025 Ci.",
          "Use the conversion factor of 37,000.",
          "Multiply: 0.0025 × 37,000 = 92.5.",
          "Conclude the calculation: 0.0025 Curies is equivalent to exactly 92.5 Rutherfords."
        ]
      }
    ]
  },
  table: {
    title: "Curie to Rutherford Reference Table",
    headers: ["Curies (Ci)", "Rutherfords (Rd)", "Typical Nuclear Contexts"],
    rows: [
      { fromVal: "0.000001", toVal: "0.037", extra: "1 Microcurie (µCi) calibration source" },
      { fromVal: "0.0001", toVal: "3.7", extra: "Trace isotope waste water discharge" },
      { fromVal: "0.001", toVal: "37", extra: "1 Millicurie (mCi) standard medical diagnostic dose" },
      { fromVal: "0.01", toVal: "370", extra: "Therapeutic radiopharmaceutical vial" },
      { fromVal: "0.1", toVal: "3,700", extra: "Weak industrial tracer fluid quantity" },
      { fromVal: "1", toVal: "37,000", extra: "Exactly 1 Curie base benchmark" },
      { fromVal: "5", toVal: "185,000", extra: "Medium industrial radiography container" },
      { fromVal: "20", toVal: "740,000", extra: "Clinical tumor therapy external beam capsule" }
    ]
  },
  expertNote: {
    title: "Understanding Historic Measurement Systems",
    text: "While the Rutherford was intended to replace the Curie because of its simpler base-10 structure, it was eventually bypassed when the SI system introduced the Becquerel. Today, researchers studying postwar scientific records frequently convert both legacy units to compare data."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Archival Research & Dose Reconstruction",
        text: "Health physicists studying environmental dose risks from postwar nuclear laboratories convert legacy measurements in Rutherfords (Rd) to Curies (Ci) to compare them with modern exposure limits."
      },
      {
        title: "Industrial Isotope Tracking",
        text: "Logistics coordinators managing radioactive sources convert older inventories labeled in Rutherfords into Curies to comply with transport manifests regulated by national transit agencies."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactivity Pitfalls",
    items: [
      "Dividing instead of multiplying: Because the Curie is a much larger unit than the Rutherford, converting to Rutherfords must yield a larger number. Check your calculations if the value gets smaller.",
      "Symbol capitalization error: The symbol for Rutherford is 'Rd'. Avoid using lowercase 'rd' to ensure compliance with professional scientific publications."
    ]
  },
  faqs: [
    {
      question: "How do I convert Curies to Rutherfords?",
      answer: "Multiply your Curie value by 37,000 to find the equivalent activity in Rutherfords."
    },
    {
      question: "What is a Rutherford in radioactive decay?",
      answer: "A Rutherford (Rd) is a legacy unit of radioactivity representing exactly one million (1,000,000) nuclear disintegrations per second."
    },
    {
      question: "How many Rutherfords are in one Curie?",
      answer: "There are exactly 37,000 Rutherfords in one Curie."
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
      question: "How many Rutherfords are in a millicurie?",
      answer: "A millicurie (mCi) is one-thousandth of a Curie. Multiplying 0.001 by 37,000 yields exactly 37 Rutherfords."
    },
    {
      question: "Does converting radioactivity units change its physical energy output?",
      answer: "No, the physical rate of atomic decay and radiation emission remains identical. You are only representing the measurement in a different unit scale."
    },
    {
      question: "How do I convert Rutherfords back to Curies?",
      answer: "To perform the reverse conversion, divide your Rutherford value by 37,000."
    }
  ],
  relatedList: [
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" },
    { label: "Megabecquerel to Rutherford", from: "megabecquerel", to: "rutherford" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" }
  ],
  references: [
    "National Research Council (USA). <em>A New Unit of Radioactivity: The Rutherford</em>, 1946.",
    "National Institute of Standards and Technology (NIST). <em>Radioactivity Definitions and Historical Unit Systems</em>."
  ]
};
