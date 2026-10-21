import { CustomArticleData } from "./types";

export const megabecquerelToGigabecquerel: CustomArticleData = {
  fromUnitId: "megabecquerel",
  toUnitId: "gigabecquerel",
  seoTitle: "Megabecquerel to Gigabecquerel Converter - MBq to GBq",
  metaDescription: "Convert Megabecquerels to Gigabecquerels (MBq to GBq) accurately. Includes conversion formula, nuclear medicine worked examples, and reference charts.",
  canonicalUrl: "https://unitsconvertors.com/converters/radioactivity/megabecquerel-to-gigabecquerel",
  h1: "Megabecquerel to Gigabecquerel Converter",
  introduction: [
    "In nuclear medicine, clinical oncology, and isotope manufacturing, the Megabecquerel (MBq) and Gigabecquerel (GBq) are the two most frequently encountered units of radioactive activity. Diagnostic imaging procedures generally administer radiopharmaceuticals in Megabecquerels, while bulk pharmaceutical shipments and high-intensity therapeutic treatments are measured in Gigabecquerels.",
    "Because both units belong to the metric International System of Units (SI), converting between them is clean and exact. The prefix mega- denotes 10⁶ (one million), while giga- denotes 10⁹ (one billion). As a result, exactly 1,000 Megabecquerels make up one Gigabecquerel. This guide explains the conversion relationship with step-by-step calculations and clinical reference data."
  ],
  quickAnswer: {
    text: "To convert Megabecquerels to Gigabecquerels, divide the Megabecquerel value by 1,000 (or multiply by 0.001). For instance, 3,700 MBq equals exactly 3.7 GBq.",
    formulaDisplay: "1 MBq = 0.001 GBq = 10⁻³ GBq",
    subtext: "Simply divide the Megabecquerel value by 1,000 to convert to Gigabecquerels."
  },
  aboutSourceUnit: {
    title: "About the Megabecquerel (MBq)",
    text: "The Megabecquerel (symbol: MBq) represents 1,000,000 (one million) spontaneous nuclear disintegrations per second. It is the workhorse unit of diagnostic nuclear imaging. Common diagnostic procedures, including bone scans with Technetium-99m (typically 740 MBq) and cardiac imaging with Thallium-201 (typically 110 MBq), are prescribed directly in Megabecquerels."
  },
  aboutTargetUnit: {
    title: "About the Gigabecquerel (GBq)",
    text: "The Gigabecquerel (symbol: GBq) represents 1,000,000,000 (one billion) spontaneous nuclear disintegrations per second. It is the primary international unit used for bulk radiochemical production, high-dose radionuclide therapy (such as Lutetium-177 and Iodine-131), and international radionuclide transport packaging."
  },
  relationship: "One Gigabecquerel is equal to exactly 1,000 Megabecquerels. Conversely, one Megabecquerel is one thousandth of a Gigabecquerel (0.001 GBq). Converting from MBq to GBq requires dividing by 1,000, which corresponds to shifting the decimal point three places to the left.",
  relationshipTitle: "The Metric Ratio: MBq to GBq",
  relationshipItems: [
    { label: "1 Megabecquerel (MBq)", value: "0.001 Gigabecquerels (10⁻³ GBq)" },
    { label: "1,000 Megabecquerels (MBq)", value: "1 Gigabecquerel (GBq) exactly" },
    { label: "370 Megabecquerels (MBq)", value: "0.37 Gigabecquerels (10 mCi)" },
    { label: "37,000 Megabecquerels (MBq)", value: "37 Gigabecquerels (1 Ci)" }
  ],
  formula: {
    text: "To convert radioactive activity from Megabecquerels to Gigabecquerels, divide the Megabecquerel value by 1,000.",
    math: "Activity in GBq = Activity in MBq / 1,000",
    subtext: "Or multiply by 0.001: Activity in GBq = Activity in MBq × 10⁻³"
  },
  formulaTitle: "Megabecquerel to Gigabecquerel Formula",
  practicalTip: {
    title: "Three-Digit Decimal Shift",
    text: "Because the conversion factor is 1,000, simply move the decimal point three places to the left. For example, a 740 MBq scan dose becomes 0.74 GBq."
  },
  expertNote: {
    title: "Standardization Across Hospital Dispensaries",
    text: "Nuclear medicine departments often receive bulk eluate from Molybdenum-99/Technetium-99m generators labeled in Gigabecquerels (e.g., 50 GBq), then draw individual patient syringes labeled in Megabecquerels (e.g., 740 MBq). Dose calibrators switch between MBq and GBq modes automatically using this exact 1,000:1 ratio."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Diagnostic Bone Scintigraphy Dose",
        subtitle: "A patient is scheduled for a whole-body bone scan requiring 740 MBq of Technetium-99m methylene diphosphonate (MDP). Express this dose in Gigabecquerels.",
        steps: [
          "Identify the dose in Megabecquerels: 740 MBq.",
          "Write the conversion formula: GBq = MBq / 1,000.",
          "Perform the division: 740 / 1,000 = 0.74 GBq.",
          "Final result: The administered dose is 0.74 GBq (equivalent to 20 mCi)."
        ]
      },
      {
        title: "Example 2: PET Oncology Scan (FDG)",
        subtitle: "A PET-CT center dispenses 370 MBq of Fluorine-18 Fluorodeoxyglucose (FDG) for an oncology patient. Express this activity in Gigabecquerels.",
        steps: [
          "Identify the activity: 370 MBq.",
          "Apply the formula: GBq = 370 / 1,000.",
          "Compute the quotient: 0.37 GBq.",
          "Final result: The dispensed dose is 0.37 GBq (equivalent to 10 mCi)."
        ]
      },
      {
        title: "Example 3: Radionuclide Generator Yield Verification",
        subtitle: "A radiopharmacist elutes a sterile generator and records a total yield of 48,500 MBq. Convert this yield into Gigabecquerels for the master inventory log.",
        steps: [
          "Identify the measured yield: 48,500 MBq.",
          "Divide by the conversion factor: 48,500 / 1,000.",
          "Compute the result: 48.5 GBq.",
          "Final result: The generator yield is 48.5 GBq."
        ]
      }
    ]
  },
  table: {
    title: "Megabecquerel to Gigabecquerel Conversion Table",
    headers: ["Megabecquerels (MBq)", "Gigabecquerels (GBq)", "Clinical & Research Context"],
    rows: [
      { fromVal: "1", toVal: "0.001", extra: "1,000 kBq — minimal laboratory tracer aliquot" },
      { fromVal: "37", toVal: "0.037", extra: "Equivalent to 1 millicurie (1 mCi)" },
      { fromVal: "100", toVal: "0.100", extra: "Pediatric diagnostic imaging dose" },
      { fromVal: "185", toVal: "0.185", extra: "Equivalent to 5 millicuries (5 mCi)" },
      { fromVal: "370", toVal: "0.370", extra: "Standard 10 mCi adult PET scan dose" },
      { fromVal: "740", toVal: "0.740", extra: "Standard 20 mCi adult bone SPECT scan dose" },
      { fromVal: "1,000", toVal: "1.000", extra: "Exactly 1 Gigabecquerel base milestone" },
      { fromVal: "3,700", toVal: "3.700", extra: "Equivalent to 100 millicuries (100 mCi)" },
      { fromVal: "7,400", toVal: "7.400", extra: "Standard 200 mCi Lutetium-177 therapy dose" },
      { fromVal: "37,000", toVal: "37.000", extra: "Equivalent to exactly 1 Curie (1 Ci)" },
      { fromVal: "100,000", toVal: "100.000", extra: "100 GBq — industrial radiography weld inspection source" }
    ]
  },
  applications: {
    title: "Everyday Clinical & Industrial Applications",
    items: [
      {
        title: "Nuclear Medicine Dose Calibrator Verification",
        text: "Dose calibrators measure ionization currents and display results in either MBq or GBq. Radiologic technologists verify that measured patient syringe activities in Megabecquerels align with multi-dose vial logs recorded in Gigabecquerels."
      },
      {
        title: "Radiopharmaceutical Manufacturing & Quality Control",
        text: "Cyclotron facilities produce radioisotopes like Gallium-68, Carbon-11, and Fluorine-18 in multi-gigabecquerel batches. Quality assurance teams calculate decay-corrected yield fractions in Megabecquerels per patient vial."
      },
      {
        title: "Radionuclide Transport Placarding",
        text: "International transport regulations (ADR, IATA, and DOT) classify radioactive shipments as Type A or Type B packages based on radionuclide activity thresholds expressed in Gigabecquerels. Shippers sum individual Megabecquerel vials to determine proper exterior labeling."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting MBq to GBq",
    items: [
      "Multiplying instead of dividing: Converting from Megabecquerels to Gigabecquerels scales from a smaller multiple to a larger multiple, requiring division by 1,000. Multiplying will make the answer 1,000,000 times too large relative to the correct quotient.",
      "Confusing Mega (10⁶) with Giga (10⁹): Misunderstanding the metric ladder can lead to using 100 or 10,000 rather than the correct factor of 1,000.",
      "Misplacing the decimal point on two-digit MBq values: 50 MBq divided by 1,000 is 0.05 GBq, not 0.5 GBq. Keep track of leading zeros carefully when dealing with values under 100 MBq."
    ]
  },
  faqs: [
    {
      question: "How do I convert Megabecquerels to Gigabecquerels?",
      answer: "Divide the Megabecquerel value by 1,000 (or multiply by 0.001). For instance, 5,500 MBq divided by 1,000 equals 5.5 GBq."
    },
    {
      question: "How many Megabecquerels are in one Gigabecquerel?",
      answer: "There are exactly 1,000 Megabecquerels in one Gigabecquerel. The metric prefix mega- represents 10⁶, and giga- represents 10⁹, creating an exact 1,000-fold ratio."
    },
    {
      question: "How many Megabecquerels equal 1 Curie?",
      answer: "One Curie (Ci) equals exactly 37,000 Megabecquerels (37,000 MBq), which is also equal to 37 Gigabecquerels."
    },
    {
      question: "What is 740 MBq in Gigabecquerels?",
      answer: "740 MBq is equal to exactly 0.74 GBq. This is the standard adult diagnostic dosage for Technetium-99m bone scans (20 mCi)."
    },
    {
      question: "What is 370 MBq in Gigabecquerels?",
      answer: "370 MBq is equal to exactly 0.37 GBq. This corresponds to a standard 10 mCi dose of Fluorine-18 FDG used in PET cancer imaging."
    },
    {
      question: "Can I convert decimal Megabecquerel numbers?",
      answer: "Yes, our converter seamlessly handles decimal values, fractions, and scientific notation, dividing any entered number by 1,000 with complete mathematical accuracy."
    },
    {
      question: "How do I convert Gigabecquerels back to Megabecquerels?",
      answer: "To convert Gigabecquerels back to Megabecquerels, multiply the Gigabecquerel value by 1,000."
    },
    {
      question: "Are MBq and GBq both official SI units?",
      answer: "Yes. Both are official SI units, consisting of the derived unit Becquerel (Bq) combined with the standard CGPM decimal prefixes mega- (10⁶) and giga- (10⁹)."
    }
  ],
  relatedList: [
    { label: "Gigabecquerel to Megabecquerel", from: "gigabecquerel", to: "megabecquerel" },
    { label: "Becquerel to Gigabecquerel", from: "becquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Becquerel", from: "gigabecquerel", to: "becquerel" },
    { label: "Curie to Gigabecquerel", from: "curie", to: "gigabecquerel" },
    { label: "Gigabecquerel to Curie", from: "gigabecquerel", to: "curie" },
    { label: "Kilobecquerel to Gigabecquerel", from: "kilobecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Kilobecquerel", from: "gigabecquerel", to: "kilobecquerel" },
    { label: "Megabecquerel to Becquerel", from: "megabecquerel", to: "becquerel" },
    { label: "Megabecquerel to Curie", from: "megabecquerel", to: "curie" },
    { label: "Megabecquerel to Kilobecquerel", from: "megabecquerel", to: "kilobecquerel" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) — Guide for the Use of the International System of Units (SP 811).",
    "Society of Nuclear Medicine and Molecular Imaging (SNMMI) — Procedure Standards for Diagnostic and Therapeutic Procedures.",
    "International Atomic Energy Agency (IAEA) — Quality Assurance for Radioactivity Measurement in Nuclear Medicine (Technical Reports Series No. 454)."
  ]
};
