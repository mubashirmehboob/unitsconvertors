import { CustomArticleData } from "./types";

export const gigabecquerelToBecquerel: CustomArticleData = {
  fromUnitId: "gigabecquerel",
  toUnitId: "becquerel",
  seoTitle: "Gigabecquerel to Becquerel Converter - GBq to Bq",
  metaDescription: "Convert Gigabecquerels to Becquerels (GBq to Bq) accurately. Includes conversion formula, worked examples, conversion table, and nuclear physics applications.",
  canonicalUrl: "https://unitsconvertors.com/converters/radioactivity/gigabecquerel-to-becquerel",
  h1: "Gigabecquerel to Becquerel Converter",
  introduction: [
    "Radioactivity quantifies the number of spontaneous nuclear disintegrations occurring within an unstable atomic sample each second. In atomic physics, radiological engineering, and medical isotope management, calculations often span immense dynamic ranges, from single nuclear decays to trillions of disintegrations.",
    "The Gigabecquerel (GBq) represents one billion nuclear disintegrations per second, a standard scale for commercial radiopharmaceuticals and sealed industrial gamma emitters. The Becquerel (Bq) is the fundamental International System of Units (SI) base derived unit for radioactivity, representing exactly one disintegration per second. Converting from GBq to Bq scales values up by a factor of one billion (10⁹)."
  ],
  quickAnswer: {
    text: "To convert Gigabecquerels to Becquerels, multiply the Gigabecquerel value by 1,000,000,000 (one billion) or by 10⁹. For example, 3.7 GBq equals exactly 3,700,000,000 Bq.",
    formulaDisplay: "1 GBq = 1,000,000,000 Bq = 10⁹ Bq",
    subtext: "Simply multiply the activity in Gigabecquerels by 10⁹ to convert to base Becquerels."
  },
  aboutSourceUnit: {
    title: "About the Gigabecquerel (GBq)",
    text: "The Gigabecquerel (symbol: GBq) combines the SI unit Becquerel with the metric multiplier prefix giga- (10⁹). One Gigabecquerel corresponds to exactly 1,000,000,000 spontaneous atomic transformations per second. It is the international standard unit for specifying cyclotron radionuclide yields, brachytherapy seed activities, and commercial isotope inventories."
  },
  aboutTargetUnit: {
    title: "About the Becquerel (Bq)",
    text: "Named in honor of French physicist Henri Becquerel for his 1896 discovery of natural radioactivity, the Becquerel (symbol: Bq) is the fundamental SI derived unit of activity. Defined as exactly one spontaneous nuclear transition per second, it provides a direct, unscaled measure of atomic decay."
  },
  relationship: "One Gigabecquerel equals exactly 1,000,000,000 Becquerels. Converting from GBq to Bq expands the numeric value by nine decimal places, scaling from bulk industrial quantities down to the base atomic decay rate.",
  relationshipTitle: "Ratio of Gigabecquerels to Becquerels",
  relationshipItems: [
    { label: "1 Gigabecquerel (GBq)", value: "1,000,000,000 Becquerels (10⁹ Bq)" },
    { label: "0.001 Gigabecquerel (1 MBq)", value: "1,000,000 Becquerels (10⁶ Bq)" },
    { label: "0.000001 Gigabecquerel (1 kBq)", value: "1,000 Becquerels (10³ Bq)" },
    { label: "37 Gigabecquerels (GBq)", value: "37,000,000,000 Becquerels (1 Curie)" }
  ],
  formula: {
    text: "To convert from Gigabecquerels to Becquerels, multiply the activity value in GBq by 1,000,000,000, or by 10⁹.",
    math: "Activity in Bq = Activity in GBq × 1,000,000,000",
    subtext: "Using scientific notation: Activity in Bq = Activity in GBq × 10⁹"
  },
  formulaTitle: "Gigabecquerel to Becquerel Formula",
  practicalTip: {
    title: "Nine-Digit Shift to the Right",
    text: "Because one billion has nine zeros, you can perform manual conversions by shifting the decimal point nine places to the right. A value of 0.74 GBq becomes 740,000,000 Bq."
  },
  expertNote: {
    title: "Computer Modeling & Monte Carlo Simulations",
    text: "Radiation transport simulation codes (such as MCNP, Geant4, and FLUKA) require source particle emission rates defined strictly in base SI units (Becquerels). Nuclear engineers must convert facility source licenses specified in GBq into base Bq before entering values into input cards."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Diagnostic Radiopharmaceutical Injection",
        subtitle: "A patient receives 0.37 GBq of Fluorine-18 FDG for a PET oncology scan. Convert this activity into base Becquerels.",
        steps: [
          "Identify the activity in Gigabecquerels: 0.37 GBq.",
          "State the conversion formula: Bq = GBq × 1,000,000,000.",
          "Perform the multiplication: 0.37 × 1,000,000,000 = 370,000,000 Bq.",
          "Final result: The dose is 370,000,000 Bq (370 MBq or 10 mCi)."
        ]
      },
      {
        title: "Example 2: Industrial Gamma Projector Source",
        subtitle: "A non-destructive testing company loads an Iridium-192 source rated at 2.5 GBq into an exposure device. Express this activity in base Becquerels.",
        steps: [
          "Identify the activity: 2.5 GBq.",
          "Apply the formula: Bq = 2.5 × 1,000,000,000.",
          "Compute the product: 2,500,000,000 Bq.",
          "Final result: The source produces 2,500,000,000 nuclear decays per second."
        ]
      },
      {
        title: "Example 3: Trace Radionuclide Inventory",
        subtitle: "A laboratory safety record shows an inventory aliquot of 0.005 GBq. Convert this into base Becquerels.",
        steps: [
          "Identify the value: 0.005 GBq.",
          "Multiply by one billion: 0.005 × 1,000,000,000.",
          "Compute the product: 5,000,000 Bq.",
          "Final result: The aliquot contains exactly 5,000,000 Bq (5 MBq)."
        ]
      }
    ]
  },
  table: {
    title: "Gigabecquerel to Becquerel Conversion Table",
    headers: ["Gigabecquerels (GBq)", "Becquerels (Bq)", "Practical Benchmark"],
    rows: [
      { fromVal: "0.000001 (1 kBq)", toVal: "1,000", extra: "Environmental soil background limit" },
      { fromVal: "0.001 (1 MBq)", toVal: "1,000,000", extra: "Laboratory check source disc" },
      { fromVal: "0.037 (1 mCi)", toVal: "37,000,000", extra: "Diagnostic cardiac imaging tracer dose" },
      { fromVal: "0.100", toVal: "100,000,000", extra: "Pediatric diagnostic imaging procedure" },
      { fromVal: "0.370 (10 mCi)", toVal: "370,000,000", extra: "Standard adult oncology PET scan" },
      { fromVal: "0.740 (20 mCi)", toVal: "740,000,000", extra: "Standard adult bone SPECT scan" },
      { fromVal: "1.000", toVal: "1,000,000,000", extra: "Exactly 1 billion decays per second (10⁹ Bq)" },
      { fromVal: "3.700 (100 mCi)", toVal: "3,700,000,000", extra: "Outpatient thyroid ablation treatment dose" },
      { fromVal: "7.400 (200 mCi)", toVal: "7,400,000,000", extra: "Standard cycle of Lutetium-177 therapy" },
      { fromVal: "37.000 (1 Ci)", toVal: "37,000,000,000", extra: "Exact equivalent of 1 traditional Curie (Ci)" },
      { fromVal: "100.000", toVal: "100,000,000,000", extra: "100 billion decays per second — high-activity emitter" }
    ]
  },
  applications: {
    title: "Real-World Engineering & Medical Applications",
    items: [
      {
        title: "Monte Carlo Radiation Dosimetry Codes",
        text: "Nuclear computational engineers setting up radiation shielding models in MCNP or Geant4 enter absolute source decay numbers. When sources are cataloged in Gigabecquerels, engineers convert them to base Becquerels so tally normalization factors yield true absorbed dose rates."
      },
      {
        title: "Shielding Thickness & Barrier Design",
        text: "Architectural shielding calculations for hospital radiopharmacy hot cells require raw photon emission rates calculated from total disintegrations per second (Bq). Shielding designers multiply GBq source specifications by 10⁹ to calculate required lead and concrete wall thicknesses."
      },
      {
        title: "Regulatory Waste Clearance Calculations",
        text: "Decommissioning guidelines establish radioactive waste clearance thresholds in Becquerels per gram. Radiation safety technicians calculate decay over multiple half-lives from original Gigabecquerel batch certificates down to base Becquerel residual levels."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting GBq to Bq",
    items: [
      "Dividing instead of multiplying: Converting from a large prefix unit (GBq) to a smaller base unit (Bq) requires multiplication by 1,000,000,000. Dividing will yield an infinitesimally small number.",
      "Miscounting zeros in nine orders of magnitude: A common typographic error is multiplying by 1,000,000 (which yields Megabecquerels) rather than 1,000,000,000. Ensure all nine zeros are entered.",
      "Integer overflow in legacy software: 1 GBq equals 10⁹ Bq, which exceeds 32-bit signed integers (max ~2.14 × 10⁹) for values over 2.14 GBq. Use 64-bit integers or floating-point variables in calculation scripts."
    ]
  },
  faqs: [
    {
      question: "How do I convert Gigabecquerels to Becquerels?",
      answer: "Multiply the Gigabecquerel value by 1,000,000,000 (one billion) or by 10⁹. For instance, 4.2 GBq multiplied by 1,000,000,000 equals 4,200,000,000 Bq."
    },
    {
      question: "What is the exact ratio between GBq and Bq?",
      answer: "One Gigabecquerel equals exactly 1,000,000,000 Becquerels (10⁹ Bq). The metric prefix giga- represents a factor of 10⁹."
    },
    {
      question: "How many Becquerels are in 1 Curie?",
      answer: "One Curie (Ci) equals exactly 37,000,000,000 Becquerels (3.7 × 10¹⁰ Bq), which corresponds to exactly 37 Gigabecquerels."
    },
    {
      question: "What is 0.37 GBq in Becquerels?",
      answer: "0.37 GBq equals exactly 370,000,000 Bq (370 Megabecquerels or 10 millicuries), which is the standard adult diagnostic PET scan dose."
    },
    {
      question: "Why does 1 GBq equal one billion Becquerels?",
      answer: "The prefix giga- is derived from the Greek word 'gigas' (meaning giant) and is standardized in the SI metric system to represent 10⁹, or 1,000,000,000."
    },
    {
      question: "Can I convert decimal Gigabecquerel values?",
      answer: "Yes, our converter accurately processes decimal values and scientific notation, multiplying any entered figure by 1,000,000,000 with complete mathematical accuracy."
    },
    {
      question: "How do I convert Becquerels back into Gigabecquerels?",
      answer: "To convert Becquerels to Gigabecquerels, divide the Becquerel value by 1,000,000,000 (or multiply by 10⁻⁹)."
    },
    {
      question: "Is the Becquerel an internationally accepted unit?",
      answer: "Yes, the Becquerel is the official base derived unit of radioactivity within the International System of Units (SI), adopted worldwide by the CGPM in 1975."
    }
  ],
  relatedList: [
    { label: "Becquerel to Gigabecquerel", from: "becquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Curie", from: "gigabecquerel", to: "curie" },
    { label: "Curie to Gigabecquerel", from: "curie", to: "gigabecquerel" },
    { label: "Gigabecquerel to Megabecquerel", from: "gigabecquerel", to: "megabecquerel" },
    { label: "Megabecquerel to Gigabecquerel", from: "megabecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Kilobecquerel", from: "gigabecquerel", to: "kilobecquerel" },
    { label: "Kilobecquerel to Gigabecquerel", from: "kilobecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Rutherford", from: "gigabecquerel", to: "rutherford" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) — Guide for the Use of the International System of Units (SP 811).",
    "International Atomic Energy Agency (IAEA) — Radiation Protection and Safety of Radiation Sources (GSR Part 3).",
    "International Commission on Radiation Units and Measurements (ICRU) — Report 90: Key Data for Ionizing Radiation Dosimetry."
  ]
};
