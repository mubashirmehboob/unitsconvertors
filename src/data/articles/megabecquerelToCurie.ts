import { CustomArticleData } from "./types";

export const megabecquerelToCurie: CustomArticleData = {
  fromUnitId: "megabecquerel",
  toUnitId: "curie",
  seoTitle: "Megabecquerel to Curie Converter - MBq to Ci",
  metaDescription: "Quickly convert Megabecquerels to Curies (MBq to Ci) with our precise online converter. Learn the conversion formula, step-by-step math, and practical examples.",
  h1: "Megabecquerel to Curie Conversion",
  introduction: [
    "In the precise world of clinical dosimetry, nuclear engineering, and radioactive shipping logistics, translating activity values accurately is a daily necessity. The International System of Units (SI) represents radioactive decay rate in Becquerels, commonly scaled up to Megabecquerels (MBq) to handle real-world sources.",
    "The Curie (Ci) is a classical, highly powerful radioactivity unit defined by the decay of one gram of pure radium. Because the Curie represents a massive amount of disintegrations per second, smaller laboratory and medical samples are often measured in Megabecquerels. Our online converter provides an instant and reliable way to map Megabecquerels to Curies, protecting your calculations from manual division errors."
  ],
  quickAnswer: {
    text: "To convert Megabecquerels to Curies, divide the Megabecquerel value by 37,000. For example, 74,000 Megabecquerels equals exactly 2 Curies.",
    formulaDisplay: "1 MBq = 0.000027027 Ci",
    subtext: "Simply divide the Megabecquerel value by 37,000 or multiply by 0.000027027 to find the equivalent activity in Curies."
  },
  aboutSourceUnit: {
    title: "Understanding the Megabecquerel (MBq)",
    text: "The Megabecquerel (MBq) is a standard SI-derived unit representing exactly 1,000,000 atomic nuclear disintegrations per second. It is a very common unit of measure in modern hospitals to calibrate diagnostic doses and handle short-lived tracing isotopes."
  },
  aboutTargetUnit: {
    title: "Understanding the Curie (Ci)",
    text: "The Curie (Ci) is an extremely large legacy unit representing exactly 3.7 × 10¹⁰ (37 billion) decays per second. This scale is typical for industrial radiography capsules, nuclear reactor core inventories, and deep-tissue oncology beam sources."
  },
  relationship: "The relationship between Megabecquerels and Curies is defined by the baseline conversion of the Curie as exactly 37 billion Becquerels. Since a Megabecquerel represents one million Becquerels, there are exactly 37,000 Megabecquerels in one Curie. Therefore, a Megabecquerel is exactly 1/37,000 of a Curie.",
  relationshipTitle: "Sizing Up Radioactivity: MBq vs Ci",
  relationshipItems: [
    { label: "1 Megabecquerel (MBq)", value: "0.000027027 Curies (Ci)" },
    { label: "1 Curie (Ci)", value: "37,000 Megabecquerels (MBq)" }
  ],
  formula: {
    text: "Convert radioactivity values by dividing the Megabecquerel value by 37,000.",
    math: "Activity in Curies (Ci) = Activity in Megabecquerels (MBq) / 37,000",
    subtext: "To perform the reverse conversion, multiply your Curie value by 37,000."
  },
  formulaTitle: "The Megabecquerel to Curie Formula",
  practicalTip: {
    title: "Standard Hospital Baselines",
    text: "A highly useful mental reference is that 370 MBq is equal to exactly 10 millicuries (mCi), and 37 MBq is exactly 1 millicurie (mCi). Keeping this baseline in mind makes verifying medical inventories very simple."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Diagnostic Isotope Preparation",
        subtitle: "A hospital radiology department prepares an imaging tracer vial containing 185,000 Megabecquerels of activity. Express this value in Curies.",
        steps: [
          "Identify the starting activity: 185,000 MBq.",
          "Write down the conversion formula: Ci = MBq / 37,000.",
          "Divide: 185,000 / 37,000 = 5.",
          "Conclude: 185,000 Megabecquerels is equivalent to exactly 5 Curies."
        ]
      },
      {
        title: "Example 2: Medical Waste Audit",
        subtitle: "An environmental health officer audits a hospital storage room and logs an active waste container at 740 Megabecquerels. Convert this value to Curies.",
        steps: [
          "Identify the starting activity: 740 MBq.",
          "Use the formula: Ci = MBq / 37,000.",
          "Divide: 740 / 37,000 = 0.02.",
          "Conclude: 740 Megabecquerels is equivalent to exactly 0.02 Curies (or 20 millicuries)."
        ]
      }
    ]
  },
  table: {
    title: "Megabecquerel to Curie Reference Table",
    headers: ["Megabecquerels (MBq)", "Curies (Ci)", "Isotope Application Scale"],
    rows: [
      { fromVal: "37", toVal: "0.001", extra: "1 Millicurie (mCi) standard tracer capsule" },
      { fromVal: "100", toVal: "0.0027", extra: "Low therapeutic contrast trace" },
      { fromVal: "370", toVal: "0.01", extra: "10 Millicuries (mCi) localized cancer seed" },
      { fromVal: "1,000", toVal: "0.027", extra: "1 Gigabecquerel (GBq) base therapeutic check source" },
      { fromVal: "10,000", toVal: "0.27", extra: "Moderate diagnostic equipment check source" },
      { fromVal: "37,000", toVal: "1", extra: "Exactly 1 Curie radioactivity baseline" },
      { fromVal: "100,000", toVal: "2.7", extra: "Oncology radiotherapy device capsule" },
      { fromVal: "370,000", toVal: "10", extra: "High-power industrial gamma radiographer" }
    ]
  },
  expertNote: {
    title: "Dosimetry Calibration Integrity",
    text: "While legacy radiotherapy setups were built on the Curie standard, contemporary guidelines require reporting all research and clinic activity in SI Becquerels. Performing clean MBq to Ci conversions ensures both modern safety standards and legacy equipment tolerances are respected."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Nuclear Medicine Management",
        text: "Radiopharmacists often receive isotope bulk supplies labeled in Curies but must inventory, dilute, and syringe individual patient doses calculated in Megabecquerels."
      },
      {
        title: "Shipping Container Manifests",
        text: "Logistics operators transport radioactive materials across borders using custom manifests that require reporting isotopic activity in both SI Megabecquerels and traditional Curies."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactivity Pitfalls",
    items: [
      "Multiplying in the wrong direction: Remember that a Curie is a massive unit, so converting from Megabecquerels to Curies must yield a much smaller number. If your result is larger, you multiplied instead of dividing.",
      "Decimal placement error: Dividing by 37,000 manually is prone to precision loss. Using a digital conversion engine ensures absolute calibration integrity."
    ]
  },
  faqs: [
    {
      question: "How do I convert Megabecquerels to Curies?",
      questionId: "mbq-to-ci-conversion",
      answer: "Divide your Megabecquerel value by 37,000 to find the equivalent activity in Curies."
    },
    {
      question: "What is a Megabecquerel?",
      questionId: "mbq-definition-faq",
      answer: "A Megabecquerel (MBq) is an SI-derived unit representing exactly one million (1,000,000) atomic disintegrations per second."
    },
    {
      question: "How many Megabecquerels are in one Curie?",
      questionId: "mbq-in-one-curie",
      answer: "There are exactly 37,000 Megabecquerels in one Curie."
    },
    {
      question: "What is the official symbol for Megabecquerel and Curie?",
      questionId: "mbq-ci-symbols",
      answer: "The symbol for Megabecquerel is 'MBq' and the symbol for Curie is 'Ci'."
    },
    {
      question: "Is the Curie an official SI unit?",
      questionId: "is-curie-si-faq",
      answer: "No, the Curie is a legacy unit. The official, internationally accepted SI unit of radioactivity is the Becquerel (Bq)."
    },
    {
      question: "How do I convert Curies back to Megabecquerels?",
      questionId: "ci-to-mbq-reverse",
      answer: "Multiply the Curie value by 37,000 to convert it back into Megabecquerels."
    },
    {
      question: "How many Megabecquerels are in a millicurie?",
      questionId: "mbq-in-mci",
      answer: "A millicurie (mCi) is one-thousandth of a Curie. There are exactly 37 Megabecquerels in one millicurie."
    },
    {
      question: "Does converting the unit change physical radiation output?",
      questionId: "emissions-integrity",
      answer: "No, converting the unit of measure is merely mathematical and does not alter the physical decay rate or energy emitted by the radioactive sample."
    },
    {
      question: "What does MBq stand for?",
      questionId: "mbq-stands-for",
      answer: "MBq stands for Megabecquerel, where 'Mega' represents one million and 'Becquerel' represents one nuclear decay per second."
    },
    {
      question: "Why does converting Megabecquerels to Curies result in such small decimals?",
      questionId: "small-curie-decimals",
      answer: "Because the Curie is an incredibly large traditional unit defined by a whole gram of radium, whereas a Megabecquerel is a much smaller, human-scale metric unit."
    }
  ],
  relatedList: [
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Megabecquerel to Becquerel", from: "megabecquerel", to: "becquerel" },
    { label: "Megabecquerel to Rutherford", from: "megabecquerel", to: "rutherford" },
    { label: "Megabecquerel to Kilobecquerel", from: "megabecquerel", to: "kilobecquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" }
  ],
  references: [
    "International Bureau of Weights and Measures. <em>The International System of Units (SI Brochure)</em>.",
    "NIST Special Publication 1038: <em>Conversion Factors for Radioactive Units</em>."
  ]
};
