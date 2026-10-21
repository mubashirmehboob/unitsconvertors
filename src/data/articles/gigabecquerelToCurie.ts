import { CustomArticleData } from "./types";

export const gigabecquerelToCurie: CustomArticleData = {
  fromUnitId: "gigabecquerel",
  toUnitId: "curie",
  seoTitle: "Gigabecquerel to Curie Converter - GBq to Ci",
  metaDescription: "Convert Gigabecquerels to Curies (GBq to Ci) using the exact ratio 1 Ci = 37 GBq. Includes worked medical examples, conversion table, and formulas.",
  canonicalUrl: "https://unitsconvertors.com/converters/radioactivity/gigabecquerel-to-curie",
  h1: "Gigabecquerel to Curie Converter",
  introduction: [
    "Radiation dose calculations and medical isotope prescriptions frequently require converting between international metric standards and traditional units. The Gigabecquerel (GBq) is the official SI unit for medium-to-high activity radioactive sources, widely used across Europe, Asia, and international regulatory frameworks.",
    "The Curie (Ci), historically based on the radioactivity of one gram of radium-226, remains common in United States medical centers, nuclear pharmacy dispensaries, and industrial radiography permits. Because one Curie equals exactly 37 Gigabecquerels, converting Gigabecquerels to Curies simply involves dividing by 37. This guide covers the mathematical relationship, step-by-step clinical examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert Gigabecquerels to Curies, divide the Gigabecquerel value by 37 (or multiply by approximately 0.027027). For example, 74 GBq equals exactly 2 Curies.",
    formulaDisplay: "1 GBq = 1/37 Ci ≈ 0.027027 Ci",
    subtext: "Divide by 37 to convert from the modern SI unit (GBq) to the traditional unit (Ci)."
  },
  aboutSourceUnit: {
    title: "About the Gigabecquerel (GBq)",
    text: "The Gigabecquerel (symbol: GBq) is an SI-derived metric unit representing 1,000,000,000 (one billion) spontaneous nuclear disintegrations per second. It is the international standard unit for quantifying bulk radiopharmaceutical shipments, hospital cyclotron production batches, and sealed industrial radiation sources."
  },
  aboutTargetUnit: {
    title: "About the Curie (Ci)",
    text: "Named after pioneering physicists Marie and Pierre Curie, the Curie (symbol: Ci) was defined in 1953 by the ICRU as exactly 3.7 × 10¹⁰ nuclear disintegrations per second. While superseded in the International System of Units by the Becquerel, the Curie remains heavily utilized across US healthcare, military defense specifications, and industrial radiography."
  },
  relationship: "One Curie is defined as exactly 37 Gigabecquerels (37,000,000,000 Becquerels). Therefore, one Gigabecquerel equals exactly 1/37 of a Curie (approximately 0.027027 Ci, or 27.027 millicuries). Converting from GBq to Ci scales down the numerical value by a factor of 37.",
  relationshipTitle: "The Exact Conversion Ratio: GBq to Ci",
  relationshipItems: [
    { label: "1 Gigabecquerel (GBq)", value: "0.027027 Curies (approx. 27.027 mCi)" },
    { label: "37 Gigabecquerels (GBq)", value: "1 Curie (1 Ci) exactly" },
    { label: "0.37 Gigabecquerel (GBq)", value: "0.01 Curie (10 mCi) exactly" },
    { label: "3.7 Gigabecquerels (GBq)", value: "0.10 Curie (100 mCi) exactly" }
  ],
  formula: {
    text: "To convert radioactive activity from Gigabecquerels to Curies, divide the Gigabecquerel value by 37.",
    math: "Activity in Ci = Activity in GBq / 37",
    subtext: "To find millicuries (mCi), divide by 0.037: Activity in mCi = Activity in GBq / 0.037"
  },
  formulaTitle: "Gigabecquerel to Curie Formula",
  practicalTip: {
    title: "The 37 Factor in Mental Arithmetic",
    text: "Because 37 is the exact conversion constant, multiples of 37 map to clean decimal numbers: 0.37 GBq = 10 mCi, 0.74 GBq = 20 mCi, 1.85 GBq = 50 mCi, 3.7 GBq = 100 mCi, and 7.4 GBq = 200 mCi."
  },
  expertNote: {
    title: "Radiopharmacy Labeling Requirements",
    text: "The United States Pharmacopeia (USP) General Chapter <825> on Radiopharmaceuticals recommends recording both SI units (GBq/MBq) and traditional units (Ci/mCi) on prescription transfer documents to minimize clinical administration errors during transatlantic radionuclide shipments."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Lutetium-177 Targeted Radionuclide Therapy",
        subtitle: "A cancer clinic receives a patient vial of Lu-177 dotatate labeled as 7.4 GBq. Convert this activity into Curies (or millicuries) for a US electronic health record system.",
        steps: [
          "Identify the activity in Gigabecquerels: 7.4 GBq.",
          "State the conversion formula: Ci = GBq / 37.",
          "Perform the division: 7.4 / 37 = 0.20 Ci.",
          "Final result: The treatment dose is 0.20 Curies, which corresponds to exactly 200 millicuries (200 mCi)."
        ]
      },
      {
        title: "Example 2: Industrial Radiography Weld Source",
        subtitle: "An offshore pipeline testing contractor orders a Cobalt-60 source certified at 185 GBq. Express this source activity in Curies.",
        steps: [
          "Identify the source activity: 185 GBq.",
          "Apply the formula: Ci = 185 / 37.",
          "Compute the quotient: 185 / 37 = 5.0 Ci.",
          "Final result: The Cobalt-60 camera source has an activity of exactly 5.0 Curies."
        ]
      },
      {
        title: "Example 3: Diagnostic PET Tracer Vial",
        subtitle: "A radiopharmacy vial contains 0.37 GBq of Fluorine-18. Convert this activity into Curies.",
        steps: [
          "Identify the starting activity: 0.37 GBq.",
          "Apply the conversion factor: 0.37 / 37.",
          "Compute the quotient: 0.01 Ci.",
          "Final result: The activity is 0.01 Curies, exactly 10 millicuries (10 mCi)."
        ]
      }
    ]
  },
  table: {
    title: "Gigabecquerel to Curie Reference Table",
    headers: ["Gigabecquerels (GBq)", "Curies (Ci)", "Clinical & Industrial Context"],
    rows: [
      { fromVal: "0.037", toVal: "0.001 (1 mCi)", extra: "1 Millicurie — diagnostic thyroid scan dose" },
      { fromVal: "0.185", toVal: "0.005 (5 mCi)", extra: "5 Millicuries — cardiac SPECT perfusion tracer" },
      { fromVal: "0.370", toVal: "0.010 (10 mCi)", extra: "10 Millicuries — standard adult PET scan dose" },
      { fromVal: "0.740", toVal: "0.020 (20 mCi)", extra: "20 Millicuries — standard adult bone scan dose" },
      { fromVal: "1.000", toVal: "0.02703 (27 mCi)", extra: "1 Gigabecquerel exact SI metric baseline" },
      { fromVal: "1.850", toVal: "0.050 (50 mCi)", extra: "50 Millicuries — outpatient thyroid ablation dose" },
      { fromVal: "3.700", toVal: "0.100 (100 mCi)", extra: "100 Millicuries — high-dose thyroid carcinoma therapy" },
      { fromVal: "7.400", toVal: "0.200 (200 mCi)", extra: "200 Millicuries — standard Lutetium-177 therapy cycle" },
      { fromVal: "37.000", toVal: "1.000", extra: "1 Full Curie (1 Ci) exact international equivalence" },
      { fromVal: "74.000", toVal: "2.000", extra: "2 Curies — HDR brachytherapy afterloader source" },
      { fromVal: "185.000", toVal: "5.000", extra: "5 Curies — pipeline weld radiography projector" },
      { fromVal: "370.000", toVal: "10.000", extra: "10 Curies — commercial blood irradiator canister" }
    ]
  },
  applications: {
    title: "Where GBq to Ci Conversions are Used",
    items: [
      {
        title: "Clinical Radiopharmacy in the United States",
        text: "Radiopharmacies import medical radioisotopes synthesized in European or Canadian cyclotrons calibrated in Gigabecquerels. Clinical technicians convert these measurements into millicuries or Curies to align with hospital pharmacy software and physician orders."
      },
      {
        title: "Industrial Radiography & Pipeline Inspection",
        text: "Non-destructive testing technicians use sealed gamma sources containing Iridium-192 or Selenium-75. While source certificates list activities in Gigabecquerels, American operating procedures and exposure slide rules use Curies."
      },
      {
        title: "International Radiation Safety Licensing",
        text: "Companies applying for dual-jurisdiction radioactive material licenses (e.g., both NRC and Euratom) must submit material inventories in both Curies and Gigabecquerels to satisfy varying legal standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting GBq to Ci",
    items: [
      "Multiplying by 37 instead of dividing: Because 1 Curie contains 37 Gigabecquerels, converting from GBq to Ci requires dividing by 37. Multiplying will result in an answer that is 1,369 times too large.",
      "Confusing Curies with millicuries: 0.37 GBq equals 0.01 Curies, which is 10 millicuries. In clinical environments, confusing Curies with millicuries represents a dangerous 1,000-fold dose error.",
      "Using imprecise conversion factors: Never round 37 to 35 or 40. The factor 37 is an exact mathematical definition established by international scientific agreement."
    ]
  },
  faqs: [
    {
      question: "How do I convert Gigabecquerels to Curies?",
      answer: "Divide the Gigabecquerel value by 37 (or multiply by approximately 0.027027). For example, 18.5 GBq divided by 37 equals exactly 0.5 Curies."
    },
    {
      question: "What is the exact conversion factor from GBq to Ci?",
      answer: "The factor is exactly 37. By definition, 1 Curie = 3.7 × 10¹⁰ Becquerels = 37 Gigabecquerels. Therefore, 1 GBq = 1/37 Ci."
    },
    {
      question: "How many millicuries are in 1 Gigabecquerel?",
      answer: "There are approximately 27.027 millicuries (mCi) in 1 Gigabecquerel (1,000 / 37 ≈ 27.027 mCi)."
    },
    {
      question: "What is 7.4 GBq in Curies and millicuries?",
      answer: "7.4 GBq equals exactly 0.20 Curies (or 200 millicuries). This is a widely used dosage in targeted radionuclide cancer therapy."
    },
    {
      question: "What is 3.7 GBq in Curies?",
      answer: "3.7 GBq equals exactly 0.10 Curies (or 100 millicuries)."
    },
    {
      question: "Can this calculator convert decimal Gigabecquerel values?",
      answer: "Yes, our converter accurately processes decimals, fractions, and scientific notation with high numerical precision."
    },
    {
      question: "How do I convert Curies back to Gigabecquerels?",
      answer: "To convert Curies to Gigabecquerels, multiply the Curie value by 37."
    },
    {
      question: "Why is the conversion factor an exact integer (37)?",
      answer: "In 1953, the ICRU formally redefined 1 Curie as exactly 3.7 × 10¹⁰ Becquerels. Dividing 3.7 × 10¹⁰ by 10⁹ (1 GBq) yields exactly 37."
    }
  ],
  relatedList: [
    { label: "Curie to Gigabecquerel", from: "curie", to: "gigabecquerel" },
    { label: "Gigabecquerel to Becquerel", from: "gigabecquerel", to: "becquerel" },
    { label: "Becquerel to Gigabecquerel", from: "becquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Megabecquerel", from: "gigabecquerel", to: "megabecquerel" },
    { label: "Megabecquerel to Gigabecquerel", from: "megabecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Kilobecquerel", from: "gigabecquerel", to: "kilobecquerel" },
    { label: "Kilobecquerel to Gigabecquerel", from: "kilobecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Rutherford", from: "gigabecquerel", to: "rutherford" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) — Guide for the Use of the International System of Units (SP 811).",
    "International Commission on Radiation Units and Measurements (ICRU) — Report 90: Key Data for Ionizing Radiation Dosimetry.",
    "United States Pharmacopeial Convention (USP) — General Chapter <825> Radiopharmaceuticals."
  ]
};
