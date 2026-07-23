import { CustomArticleData } from "./types";

export const becquerelToCurie: CustomArticleData = {
  fromUnitId: "becquerel",
  toUnitId: "curie",
  seoTitle: "Becquerel to Curie Converter - Bq to Ci",
  metaDescription: "Quickly convert Becquerels to Curies (Bq to Ci). Learn the history of nuclear measurements, master the conversion math with step-by-step examples, and explore real-world radiopharmacy applications.",
  h1: "Becquerel to Curie Converter",
  introduction: [
    "Radioactivity represents the spontaneous decay of unstable atomic nuclei, releasing energy or particles. Measuring this rate of decay is essential across fields such as oncology, geology, nuclear power engineering, and environmental health monitoring.",
    "The Becquerel (Bq) is the official SI unit for nuclear activity, while the Curie (Ci) is a traditional unit historically based on the decay rate of pure radium. Navigating between these metric and traditional units requires precise conversion factors to ensure safety and precision in dose calculations."
  ],
  quickAnswer: {
    text: "To convert Becquerels to Curies, divide the Becquerel value by 37,000,000,000 (37 billion) or multiply by 2.7027e-11. For instance, 1,000,000,000 Bq is equivalent to approximately 0.027 Curies.",
    formulaDisplay: "1 Bq = 2.7027 × 10⁻¹¹ Ci",
    subtext: "Simply divide by 3.7 × 10¹⁰ to convert from the modern SI unit to the historic imperial-era unit."
  },
  aboutSourceUnit: {
    title: "Understanding the Becquerel (Bq)",
    text: "Named after Henri Becquerel, the co-discoverer of radioactivity, one Becquerel is defined as exactly one nuclear disintegration per second. It is a microscopic unit of measure, which means typical physical samples (such as consumer smoke detectors or mineral ores) often register thousands or millions of Becquerels."
  },
  aboutTargetUnit: {
    title: "Understanding the Curie (Ci)",
    text: "Named in honor of Marie and Pierre Curie, the Curie (Ci) represents a massive scale of nuclear activity. One Curie is defined as exactly 3.7 × 10¹⁰ disintegrations per second, which was originally intended to approximate the decay activity of one gram of the radium-226 isotope."
  },
  relationship: "Because one Curie is equal to exactly 37 billion Becquerels, the conversion scales reflect a large difference in magnitude. Converting from Bq to Ci involves scaling down from a single disintegration to a multi-billion disintegration standard.",
  relationshipTitle: "The Radioactivity Scales: Bq vs Ci",
  relationshipItems: [
    { label: "1 Becquerel (Bq)", value: "2.7027 × 10⁻¹¹ Curies (Ci)" },
    { label: "1 Curie (Ci)", value: "3.7 × 10¹⁰ Becquerels (Bq)" }
  ],
  formula: {
    text: "Convert radioactivity values by dividing the total disintegrations per second (Bq) by the standard definition of a Curie.",
    math: "Activity in Curies (Ci) = Activity in Becquerels (Bq) / 37,000,000,000",
    subtext: "For scientific calculators, you can multiply the Bq value by 2.7027 × 10⁻¹¹."
  },
  formulaTitle: "The Radioactivity Conversion Formula",
  practicalTip: {
    title: "Handling Tiny Decimals",
    text: "When converting common laboratory quantities of Bq to Ci, you will frequently encounter extremely small decimal values. Using scientific notation prevents rounding errors that could lead to incorrect radiation dose estimates in medical research settings."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Medical Iodine Dose",
        subtitle: "A therapeutic dosage of Iodine-131 contains 740,000,000 Becquerels. Convert this activity to Curies.",
        steps: [
          "Identify the activity in Becquerels: 740,000,000 Bq.",
          "Write down the conversion formula: Ci = Bq / 37,000,000,000.",
          "Perform the division: 740,000,000 / 37,000,000,000 = 0.02.",
          "Conclude the calculation: 740 megabecquerels is exactly equal to 0.02 Curies (or 20 millicuries)."
        ]
      },
      {
        title: "Example 2: Environmental Soil Sample",
        subtitle: "An environmental monitor detects a heavy isotope deposition of 37,000 Becquerels. Convert this to Curies.",
        steps: [
          "Identify the activity: 37,000 Bq.",
          "Divide by the conversion factor: 37,000 / 37,000,000,000.",
          "Perform the calculation: 0.000001 (or 1.0 × 10⁻⁶).",
          "Conclude the calculation: 37,000 Bq is equivalent to exactly 1 microcurie (1 µCi)."
        ]
      }
    ]
  },
  table: {
    title: "Becquerel to Curie Reference Table",
    headers: ["Becquerels (Bq)", "Curies (Ci)", "Typical Radiation Levels"],
    rows: [
      { fromVal: "1", toVal: "2.703 × 10⁻¹¹", extra: "Microscopic cosmic ray activity" },
      { fromVal: "1,000", toVal: "2.703 × 10⁻⁸", extra: "Natural potassium in standard bananas" },
      { fromVal: "37,000", toVal: "1.000 × 10⁻⁶", extra: "1 Microcurie (µCi) calibration check source" },
      { fromVal: "1,000,000", toVal: "2.703 × 10⁻⁵", extra: "Typical household smoke detector isotope" },
      { fromVal: "37,000,000", toVal: "0.001", extra: "1 Millicurie (mCi) typical medical tracer dose" },
      { fromVal: "1,000,000,000", toVal: "0.02703", extra: "Low-level diagnostic imaging dosage" },
      { fromVal: "37,000,000,000", toVal: "1.000", extra: "1 Curie (Ci) industrial radiography emitter" },
      { fromVal: "1,000,000,000,000", toVal: "27.027", extra: "Substantial radiotherapy tumor capsule" }
    ]
  },
  expertNote: {
    title: "Why the Curie Unit Persists",
    text: "Despite the Becquerel being the official SI unit since 1975, the Curie remains heavily used in American clinical medicine, military defense specifications, and older radiochemical inventories due to decades of deep institutional standards."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Nuclear Medicine & Radiopharmacy",
        text: "Doctors prescribe radioactive tracers such as Technetium-99m in millicuries, but suppliers manufacture and label bulk vials in Gigabecquerels. Radiopharmacists use this conversion daily to verify dosages."
      },
      {
        title: "Industrial Radiography",
        text: "Non-destructive testing teams use high-intensity gamma-ray sources like Iridium-192 to scan pipeline welds. These sources are categorized in Curies for structural thickness checks, but safety compliance logs require conversion to Becquerels."
      },
      {
        title: "Geological Age Verification",
        text: "Scientists use carbon-14 decay rates to date fossils. This trace activity is measured in Becquerels per gram, which researchers occasionally convert to Curies to align with historic archeological literature."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactive Conversion Mistakes",
    items: [
      "Mixing up division and multiplication: Because the Curie is a massive unit, dividing a small Bq value should result in a tiny decimal. If you end up with a huge number, you multiplied instead of dividing.",
      "Losing track of zeros: Dividing by 37 billion requires careful attention. Use scientific calculator notation (3.7e10) rather than typing 10 zeros manually.",
      "Confusing activity with dose: Activity (Bq and Ci) measures decay rate, whereas absorbed dose (Grays or Rads) measures energy transferred to biological tissue."
    ]
  },
  faqs: [
    {
      question: "How do I convert Becquerels to Curies?",
      answer: "Divide the value in Becquerels by 37,000,000,000 (37 billion) to find the equivalent value in Curies."
    },
    {
      question: "What is the exact ratio of a Curie to a Becquerel?",
      answer: "Exactly one Curie is defined as equal to 37,000,000,000 Becquerels (37 billion nuclear disintegrations per second)."
    },
    {
      question: "Why is the Becquerel preferred over the Curie in science?",
      answer: "The Becquerel is the official unit of the International System of Units (SI). It represents one disintegration per second, making it mathematically direct and easy to use in physics equations."
    },
    {
      question: "What is the symbol for Becquerel and Curie?",
      answer: "The symbol for Becquerel is 'Bq' and the symbol for Curie is 'Ci'. Both should be capitalized correctly."
    },
    {
      question: "Is 1 Bq a safe level of radiation?",
      answer: "Yes, 1 Bq is an incredibly small rate of decay. For perspective, a single human body naturally emits about 4,000 to 5,000 Bq from potassium-40 decay inside our bones."
    },
    {
      question: "How many microcuries are in a megabecquerel?",
      answer: "One Megabecquerel (1 MBq) is exactly 1,000,000 Bq. Dividing this by 37,000,000,000 yields 0.000027 Curies, which is equal to 27 microcuries (27 µCi)."
    },
    {
      question: "Can this calculator convert decimals?",
      answer: "Yes, our converter processes fractional and decimal values instantly, maintaining precision for laboratory-level measurement data."
    },
    {
      question: "How do I convert Curies back to Becquerels?",
      answer: "To perform the reverse conversion, multiply the Curie value by 37,000,000,000 (37 billion)."
    }
  ],
  relatedList: [
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Megabecquerel to Curie", from: "megabecquerel", to: "curie" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Radioactivity Definitions and SI Conversions</em>.",
    "International Commission on Radiation Units and Measurements (ICRU). <em>Report 85: Fundamental Quantities and Units for Ionizing Radiation</em>."
  ]
};
