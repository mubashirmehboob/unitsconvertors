import { CustomArticleData } from "./types";

export const gigabecquerelToKilobecquerel: CustomArticleData = {
  fromUnitId: "gigabecquerel",
  toUnitId: "kilobecquerel",
  seoTitle: "Gigabecquerel to Kilobecquerel Converter - GBq to kBq",
  metaDescription: "Convert Gigabecquerels to Kilobecquerels (GBq to kBq) accurately. Includes conversion formula, worked examples, conversion table, and radiation protection applications.",
  canonicalUrl: "https://unitsconvertors.com/converters/radioactivity/gigabecquerel-to-kilobecquerel",
  h1: "Gigabecquerel to Kilobecquerel Converter",
  introduction: [
    "Radioactivity measures the rate of spontaneous nuclear transitions taking place within an unstable isotope. In radiation protection, radiochemistry research, and nuclear medicine facilities, practitioners routinely handle measurements that span many orders of magnitude.",
    "The Gigabecquerel (GBq) measures one billion disintegrations per second, a standard scale for commercial isotope orders and clinical cancer therapy doses. The Kilobecquerel (kBq) measures one thousand disintegrations per second, an ideal scale for environmental soil tests, drinking water surveys, and facility swipe tests. Converting from GBq to kBq scales values up by one million (10⁶)."
  ],
  quickAnswer: {
    text: "To convert Gigabecquerels to Kilobecquerels, multiply the Gigabecquerel value by 1,000,000 (one million) or by 10⁶. For example, 2.5 GBq equals exactly 2,500,000 kBq.",
    formulaDisplay: "1 GBq = 1,000,000 kBq = 10⁶ kBq",
    subtext: "Multiply by one million to scale from giga- (10⁹) down to kilo- (10³)."
  },
  aboutSourceUnit: {
    title: "About the Gigabecquerel (GBq)",
    text: "The Gigabecquerel (symbol: GBq) is an official metric unit of radioactive decay within the International System of Units (SI). Combining the base unit Becquerel (1 decay per second) with the prefix giga- (10⁹), one Gigabecquerel represents 1,000,000,000 atomic disintegrations per second. It is the international benchmark for cyclotron isotope output and medical radionuclide shipments."
  },
  aboutTargetUnit: {
    title: "About the Kilobecquerel (kBq)",
    text: "The Kilobecquerel (symbol: kBq) is an SI-derived metric unit representing 1,000 nuclear disintegrations per second. It is widely used in radiation hygiene and radioecology to quantify low-level radioactive contamination in food, environmental soil samples, and surface contamination swipes."
  },
  relationship: "Because giga- represents 10⁹ and kilo- represents 10³, the difference in magnitude is 10⁶ (one million). Exactly 1,000,000 Kilobecquerels equal one Gigabecquerel. Converting from GBq to kBq expands the numerical value by six decimal places.",
  relationshipTitle: "Ratio of Gigabecquerels to Kilobecquerels",
  relationshipItems: [
    { label: "1 Gigabecquerel (GBq)", value: "1,000,000 Kilobecquerels (10⁶ kBq)" },
    { label: "0.001 Gigabecquerel (1 MBq)", value: "1,000 Kilobecquerels (kBq)" },
    { label: "37 Gigabecquerels (1 Ci)", value: "37,000,000 Kilobecquerels (kBq)" },
    { label: "1 Kilobecquerel (kBq)", value: "0.000001 Gigabecquerel (10⁻⁶ GBq)" }
  ],
  formula: {
    text: "To convert radioactive activity from Gigabecquerels to Kilobecquerels, multiply the Gigabecquerel value by 1,000,000.",
    math: "Activity in kBq = Activity in GBq × 1,000,000",
    subtext: "Using scientific notation: Activity in kBq = Activity in GBq × 10⁶"
  },
  formulaTitle: "Gigabecquerel to Kilobecquerel Formula",
  practicalTip: {
    title: "Six-Digit Decimal Shift to the Right",
    text: "To convert GBq to kBq manually, move the decimal point six places to the right. For example, 0.045 GBq becomes 45,000 kBq."
  },
  expertNote: {
    title: "Surface Contamination Limits & Clearance Audits",
    text: "Health physicists checking laboratory glove boxes and fume hoods compare contamination readings in kBq against original isotope stock solutions received in GBq. Calculating the fraction of stock spilled during an incident requires this exact one-million conversion factor."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Radiopharmacy Spill Assessment",
        subtitle: "A micro-syringe containing 0.005 GBq of Technetium-99m leaks onto an absorbent bench pad. Express this spill activity in Kilobecquerels to evaluate decontamination procedures.",
        steps: [
          "Identify the activity: 0.005 GBq.",
          "State the conversion formula: kBq = GBq × 1,000,000.",
          "Perform the multiplication: 0.005 × 1,000,000 = 5,000 kBq.",
          "Final result: The spill activity is 5,000 kBq (or 5 MBq)."
        ]
      },
      {
        title: "Example 2: Diagnostic Radiotracer Inventory",
        subtitle: "A hospital receives a multi-dose vial containing 1.85 GBq of Gallium-68. Convert this inventory to Kilobecquerels.",
        steps: [
          "Identify the activity: 1.85 GBq.",
          "Apply the formula: kBq = 1.85 × 1,000,000.",
          "Compute the product: 1,850,000 kBq.",
          "Final result: The vial contains 1,850,000 kBq (equivalent to 50 mCi)."
        ]
      },
      {
        title: "Example 3: Trace Research Vial",
        subtitle: "A researcher synthesizes a labeled peptide batch of 0.037 GBq. Convert this to Kilobecquerels.",
        steps: [
          "Identify the starting activity: 0.037 GBq.",
          "Multiply by 1,000,000: 0.037 × 1,000,000.",
          "Compute the product: 37,000 kBq.",
          "Final result: The peptide activity is 37,000 kBq (1 mCi)."
        ]
      }
    ]
  },
  table: {
    title: "Gigabecquerel to Kilobecquerel Reference Table",
    headers: ["Gigabecquerels (GBq)", "Kilobecquerels (kBq)", "Practical Context"],
    rows: [
      { fromVal: "0.000001", toVal: "1", extra: "1 kBq — low-level environmental threshold" },
      { fromVal: "0.000100", toVal: "100", extra: "Surface contamination swipe survey threshold" },
      { fromVal: "0.001 (1 MBq)", toVal: "1,000", extra: "1,000 kBq — minimal laboratory tracer aliquot" },
      { fromVal: "0.010 (10 MBq)", toVal: "10,000", extra: "10,000 kBq — small diagnostic thyroid dose" },
      { fromVal: "0.037 (1 mCi)", toVal: "37,000", extra: "Equivalent to 1 millicurie (1 mCi)" },
      { fromVal: "0.100 (100 MBq)", toVal: "100,000", extra: "Pediatric diagnostic imaging procedure" },
      { fromVal: "0.370 (10 mCi)", toVal: "370,000", extra: "Standard adult oncology PET scan dose" },
      { fromVal: "0.740 (20 mCi)", toVal: "740,000", extra: "Standard adult bone SPECT scan dose" },
      { fromVal: "1.000", toVal: "1,000,000", extra: "Exactly 1,000,000 kBq (1 billion decays/s)" },
      { fromVal: "3.700 (100 mCi)", toVal: "3,700,000", extra: "High-dose thyroid ablation therapy dose" },
      { fromVal: "37.000 (1 Ci)", toVal: "37,000,000", extra: "Equivalent to exactly 1 Curie (1 Ci)" }
    ]
  },
  applications: {
    title: "Where GBq to kBq Conversions are Essential",
    items: [
      {
        title: "Radiation Protection & Wipe Test Audits",
        text: "Health physicists check laboratory benches using filter paper wipes, counting contamination in Kilobecquerels. To determine containment breach percentages, they divide wipe counts by the original Gigabecquerel source inventory."
      },
      {
        title: "Radionuclide Decay in Waste Storage",
        text: "Hospitals store short-lived radioisotopes (such as Technetium-99m with a 6-hour half-life) in decay rooms until activity drops from initial Gigabecquerel levels to clearance levels below a few Kilobecquerels, allowing disposal as non-radioactive medical waste."
      },
      {
        title: "Biological Environmental Modeling",
        text: "Environmental scientists modeling the dispersion of an accidental industrial radionuclide release translate initial source term inventories (in GBq) into regional deposition maps calculated in kBq per square meter."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting GBq to kBq",
    items: [
      "Multiplying by 1,000 instead of 1,000,000: Multiplying by 1,000 yields Megabecquerels (MBq), not Kilobecquerels. Remember that giga- (10⁹) to kilo- (10³) spans six orders of magnitude.",
      "Dividing instead of multiplying: Because the Kilobecquerel is a much smaller unit than the Gigabecquerel, converting from GBq to kBq requires multiplication. Dividing will yield an incorrect microscopic fraction.",
      "Losing track of zeros in manual calculations: Writing 1,000,000 requires six zeros. When using scientific calculators, use standard exponential notation (1e6) to avoid entering too few zeros."
    ]
  },
  faqs: [
    {
      question: "How do I convert Gigabecquerels to Kilobecquerels?",
      answer: "Multiply the Gigabecquerel value by 1,000,000 (one million) or by 10⁶. For example, 1.25 GBq multiplied by 1,000,000 equals 1,250,000 kBq."
    },
    {
      question: "What is the exact ratio between GBq and kBq?",
      answer: "One Gigabecquerel equals exactly 1,000,000 Kilobecquerels (1 GBq = 10⁶ kBq). The difference between giga- (10⁹) and kilo- (10³) is 10⁶."
    },
    {
      question: "How many Kilobecquerels are in 1 Curie?",
      answer: "One Curie (Ci) equals exactly 37,000,000 Kilobecquerels (37,000,000 kBq = 37 GBq)."
    },
    {
      question: "What is 0.37 GBq in Kilobecquerels?",
      answer: "0.37 GBq equals exactly 370,000 kBq (equivalent to 370 MBq or 10 millicuries)."
    },
    {
      question: "Why is the multiplier one million?",
      answer: "Because giga- represents 1,000,000,000 and kilo- represents 1,000. Dividing 1,000,000,000 by 1,000 leaves exactly 1,000,000."
    },
    {
      question: "Can I convert decimal Gigabecquerel values?",
      answer: "Yes, our converter effortlessly processes decimal values and scientific notation, multiplying any entered figure by 1,000,000 with complete mathematical accuracy."
    },
    {
      question: "How do I convert Kilobecquerels back to Gigabecquerels?",
      answer: "To convert Kilobecquerels to Gigabecquerels, divide the Kilobecquerel value by 1,000,000 (or multiply by 10⁻⁶)."
    },
    {
      question: "Are GBq and kBq both SI units?",
      answer: "Yes. Both are official SI units consisting of the base derived unit Becquerel paired with the CGPM metric prefixes giga- and kilo-."
    }
  ],
  relatedList: [
    { label: "Kilobecquerel to Gigabecquerel", from: "kilobecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Becquerel", from: "gigabecquerel", to: "becquerel" },
    { label: "Becquerel to Gigabecquerel", from: "becquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Megabecquerel", from: "gigabecquerel", to: "megabecquerel" },
    { label: "Megabecquerel to Gigabecquerel", from: "megabecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Curie", from: "gigabecquerel", to: "curie" },
    { label: "Curie to Gigabecquerel", from: "curie", to: "gigabecquerel" },
    { label: "Gigabecquerel to Rutherford", from: "gigabecquerel", to: "rutherford" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) — Guide for the Use of the International System of Units (SP 811).",
    "International Atomic Energy Agency (IAEA) — Categorization of Radioactive Sources (Safety Guide No. RS-G-1.9).",
    "International Commission on Radiation Units and Measurements (ICRU) — Report 90: Key Data for Ionizing Radiation Dosimetry."
  ]
};
