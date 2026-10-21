import { CustomArticleData } from "./types";

export const gigabecquerelToMegabecquerel: CustomArticleData = {
  fromUnitId: "gigabecquerel",
  toUnitId: "megabecquerel",
  seoTitle: "Gigabecquerel to Megabecquerel Converter - GBq to MBq",
  metaDescription: "Convert Gigabecquerels to Megabecquerels (GBq to MBq) accurately. Includes conversion formula, nuclear medicine worked examples, and clinical reference tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/radioactivity/gigabecquerel-to-megabecquerel",
  h1: "Gigabecquerel to Megabecquerel Converter",
  introduction: [
    "Radioactivity measures the rate of spontaneous nuclear disintegrations occurring within an unstable radionuclide. In modern nuclear medicine dispensaries, cyclotron production suites, and radiopharmacies, technicians continuously work with both Gigabecquerels (GBq) and Megabecquerels (MBq).",
    "Radionuclide generators and bulk medical isotope shipments arrive labeled in Gigabecquerels (billions of decays per second), while individual patient diagnostic doses are drawn and administered in Megabecquerels (millions of decays per second). Because one Gigabecquerel equals exactly 1,000 Megabecquerels, converting from GBq to MBq simply requires multiplying by 1,000."
  ],
  quickAnswer: {
    text: "To convert Gigabecquerels to Megabecquerels, multiply the Gigabecquerel value by 1,000. For instance, 0.74 GBq equals exactly 740 MBq.",
    formulaDisplay: "1 GBq = 1,000 MBq (exact)",
    subtext: "Multiply by 1,000 to convert from the gigametric multiple to the megametric multiple."
  },
  aboutSourceUnit: {
    title: "About the Gigabecquerel (GBq)",
    text: "The Gigabecquerel (symbol: GBq) represents 1,000,000,000 (one billion) spontaneous nuclear disintegrations per second. It is the international standard unit for bulk radionuclide procurement, cyclotron target yield logging, and high-dose radionuclide therapies such as Iodine-131 and Lutetium-177."
  },
  aboutTargetUnit: {
    title: "About the Megabecquerel (MBq)",
    text: "The Megabecquerel (symbol: MBq) represents 1,000,000 (one million) spontaneous nuclear disintegrations per second. It is the primary clinical unit used to specify diagnostic imaging doses in PET, SPECT, and planar nuclear scintigraphy worldwide."
  },
  relationship: "One Gigabecquerel equals exactly 1,000 Megabecquerels. Converting from GBq to MBq expands the numerical value by a factor of 1,000, shifting the decimal point three places to the right.",
  relationshipTitle: "Ratio of Gigabecquerels to Megabecquerels",
  relationshipItems: [
    { label: "1 Gigabecquerel (GBq)", value: "1,000 Megabecquerels (MBq) exactly" },
    { label: "0.37 Gigabecquerel (GBq)", value: "370 Megabecquerels (10 mCi)" },
    { label: "0.74 Gigabecquerel (GBq)", value: "740 Megabecquerels (20 mCi)" },
    { label: "37 Gigabecquerels (GBq)", value: "37,000 Megabecquerels (1 Curie)" }
  ],
  formula: {
    text: "To convert radioactive activity from Gigabecquerels to Megabecquerels, multiply the Gigabecquerel value by 1,000.",
    math: "Activity in MBq = Activity in GBq × 1,000",
    subtext: "Equivalently: Activity in MBq = Activity in GBq × 10³"
  },
  formulaTitle: "Gigabecquerel to Megabecquerel Formula",
  practicalTip: {
    title: "Three-Digit Decimal Shift",
    text: "To convert GBq to MBq quickly by hand, shift the decimal point three places to the right. For example, 0.37 GBq becomes 370 MBq."
  },
  expertNote: {
    title: "Dose Calibrator Daily Operations",
    text: "Hospital isotope dose calibrators commonly report bulk generator elution vials in GBq and individual patient syringes in MBq. Radiopharmacists use this direct 1,000-to-1 conversion during daily morning quality control to calculate decay-corrected syringe fractions."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Bulk Technetium Generator Elution",
        subtitle: "A nuclear medicine laboratory elutes a Molybdenum-99 generator and measures a yield of 42.5 GBq. Convert this total activity into Megabecquerels to calculate how many 740 MBq patient doses can be drawn.",
        steps: [
          "Identify the activity: 42.5 GBq.",
          "State the conversion formula: MBq = GBq × 1,000.",
          "Perform the multiplication: 42.5 × 1,000 = 42,500 MBq.",
          "Final result: The total elution contains 42,500 MBq (enough for approximately 57 bone scan doses)."
        ]
      },
      {
        title: "Example 2: PET Cancer Diagnostic Dose",
        subtitle: "A delivery invoice from a cyclotron center lists a multi-dose vial of Fluorine-18 FDG containing 2.22 GBq. Express this activity in Megabecquerels.",
        steps: [
          "Identify the starting activity: 2.22 GBq.",
          "Apply the formula: MBq = 2.22 × 1,000.",
          "Compute the product: 2,220 MBq.",
          "Final result: The multi-dose vial contains 2,220 MBq (equivalent to 60 mCi)."
        ]
      },
      {
        title: "Example 3: Brachytherapy Seed Batch",
        subtitle: "A batch of brachytherapy seeds has an aggregate activity of 0.185 GBq. Convert this to Megabecquerels.",
        steps: [
          "Identify the activity: 0.185 GBq.",
          "Multiply by 1,000: 0.185 × 1,000.",
          "Compute the product: 185 MBq.",
          "Final result: The batch activity is 185 MBq (equivalent to 5 mCi)."
        ]
      }
    ]
  },
  table: {
    title: "Gigabecquerel to Megabecquerel Reference Table",
    headers: ["Gigabecquerels (GBq)", "Megabecquerels (MBq)", "Clinical Context & Equivalence"],
    rows: [
      { fromVal: "0.001", toVal: "1", extra: "1 Megabecquerel (1 MBq) base threshold" },
      { fromVal: "0.037 (1 mCi)", toVal: "37", extra: "Diagnostic thyroid uptake tracer dose" },
      { fromVal: "0.100", toVal: "100", extra: "Pediatric diagnostic imaging procedure" },
      { fromVal: "0.185 (5 mCi)", toVal: "185", extra: "Myocardial perfusion imaging dose" },
      { fromVal: "0.370 (10 mCi)", toVal: "370", extra: "Standard adult oncology PET scan dose" },
      { fromVal: "0.740 (20 mCi)", toVal: "740", extra: "Standard adult bone SPECT scan dose" },
      { fromVal: "1.000", toVal: "1,000", extra: "Exactly 1,000 MBq (1 billion decays/s)" },
      { fromVal: "3.700 (100 mCi)", toVal: "3,700", extra: "Outpatient thyroid ablation therapy dose" },
      { fromVal: "7.400 (200 mCi)", toVal: "7,400", extra: "Standard cycle of Lutetium-177 therapy" },
      { fromVal: "37.000 (1 Ci)", toVal: "37,000", extra: "Equivalent to exactly 1 Curie (1 Ci)" },
      { fromVal: "100.000", toVal: "100,000", extra: "100,000 MBq — industrial radiography weld inspection source" }
    ]
  },
  applications: {
    title: "Clinical & Industrial Applications of GBq to MBq",
    items: [
      {
        title: "Radiopharmacy Syringe Dispensing",
        text: "Cyclotrons deliver stock vials labeled in Gigabecquerels. Radiopharmacists convert these quantities to Megabecquerels to calculate exact unit syringe volumes based on patient body weight and diagnostic imaging protocol guidelines."
      },
      {
        title: "Radionuclide Decay Calculation Over Time",
        text: "When calculating decay corrections using the radioactive decay law N(t) = N₀ × e^(-λt), medical physicists routinely convert initial shipment stock from GBq to MBq to match hospital electronic prescription records."
      },
      {
        title: "Nuclear Medicine Waste Auditing",
        text: "Used gloves, empty vials, and injection tubing are collected in waste containers. Nuclear medicine technologists record initial vial activities in Megabecquerels, aggregating them over days to verify total decay storage room inventories in Gigabecquerels."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting GBq to MBq",
    items: [
      "Dividing instead of multiplying: Because the Megabecquerel is smaller than the Gigabecquerel, converting from GBq to MBq requires multiplication by 1,000. Dividing will produce a number 1,000,000 times smaller than the correct product.",
      "Confusing Mega (10⁶) with Kilo (10³): Multiplying by 1,000,000 converts to Kilobecquerels (kBq), not Megabecquerels. Use the factor 1,000 for MBq.",
      "Misplacing the decimal on values with leading decimals: 0.05 GBq multiplied by 1,000 is 50 MBq, not 500 MBq. Count decimal shifts carefully."
    ]
  },
  faqs: [
    {
      question: "How do I convert Gigabecquerels to Megabecquerels?",
      answer: "Multiply the Gigabecquerel value by 1,000. For example, 1.5 GBq multiplied by 1,000 equals 1,500 MBq."
    },
    {
      question: "What is the exact ratio between GBq and MBq?",
      answer: "One Gigabecquerel equals exactly 1,000 Megabecquerels (1 GBq = 1,000 MBq). The prefix giga- (10⁹) is 1,000 times larger than mega- (10⁶)."
    },
    {
      question: "How many Megabecquerels are in 1 Curie?",
      answer: "One Curie (Ci) equals exactly 37,000 Megabecquerels (37,000 MBq), which corresponds to exactly 37 Gigabecquerels."
    },
    {
      question: "What is 0.74 GBq in Megabecquerels?",
      answer: "0.74 GBq equals exactly 740 MBq (equivalent to 20 millicuries), which is the standard adult bone scan diagnostic dose."
    },
    {
      question: "What is 0.37 GBq in Megabecquerels?",
      answer: "0.37 GBq equals exactly 370 MBq (equivalent to 10 millicuries), which is the standard adult PET scan diagnostic dose."
    },
    {
      question: "Can I convert decimal Gigabecquerels to Megabecquerels?",
      answer: "Yes, our converter accurately processes decimals, fractions, and scientific notation, multiplying any entered figure by 1,000 with complete mathematical accuracy."
    },
    {
      question: "How do I convert Megabecquerels back to Gigabecquerels?",
      answer: "To convert Megabecquerels to Gigabecquerels, divide the Megabecquerel value by 1,000 (or multiply by 0.001)."
    },
    {
      question: "Are both GBq and MBq official SI units?",
      answer: "Yes, both units are approved SI units consisting of the base derived unit Becquerel paired with the standard CGPM metric prefixes giga- (10⁹) and mega- (10⁶)."
    }
  ],
  relatedList: [
    { label: "Megabecquerel to Gigabecquerel", from: "megabecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Becquerel", from: "gigabecquerel", to: "becquerel" },
    { label: "Becquerel to Gigabecquerel", from: "becquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Curie", from: "gigabecquerel", to: "curie" },
    { label: "Curie to Gigabecquerel", from: "curie", to: "gigabecquerel" },
    { label: "Gigabecquerel to Kilobecquerel", from: "gigabecquerel", to: "kilobecquerel" },
    { label: "Kilobecquerel to Gigabecquerel", from: "kilobecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Rutherford", from: "gigabecquerel", to: "rutherford" },
    { label: "Megabecquerel to Becquerel", from: "megabecquerel", to: "becquerel" },
    { label: "Megabecquerel to Curie", from: "megabecquerel", to: "curie" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) — Guide for the Use of the International System of Units (SP 811).",
    "Society of Nuclear Medicine and Molecular Imaging (SNMMI) — Procedure Standards for Diagnostic and Therapeutic Procedures.",
    "International Atomic Energy Agency (IAEA) — Quality Assurance for Radioactivity Measurement in Nuclear Medicine (Technical Reports Series No. 454)."
  ]
};
