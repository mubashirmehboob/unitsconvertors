import { CustomArticleData } from "./types";

export const curieToGigabecquerel: CustomArticleData = {
  fromUnitId: "curie",
  toUnitId: "gigabecquerel",
  seoTitle: "Curie to Gigabecquerel Converter - Ci to GBq",
  metaDescription: "Convert Curies to Gigabecquerels (Ci to GBq) using the exact factor 1 Ci = 37 GBq. Features worked nuclear medicine examples, conversion table, and formulas.",
  canonicalUrl: "https://unitsconvertors.com/converters/radioactivity/curie-to-gigabecquerel",
  h1: "Curie to Gigabecquerel Converter",
  introduction: [
    "Radiation measurement bridges legacy terminology and modern SI metric standards. The Curie (Ci) was established historically to reflect the radioactivity of one gram of radium-226, serving as the dominant unit of radioactive decay throughout the twentieth century across North America and industrial engineering.",
    "Today, the International System of Units (SI) designates the Becquerel and its multiples as the official standard. The Gigabecquerel (GBq) represents one billion disintegrations per second. Because exactly one Curie equals 37 Gigabecquerels, converting between these systems is straightforward and mathematically exact. This guide explains the conversion relationship with clinical calculations and reference tables."
  ],
  quickAnswer: {
    text: "To convert Curies to Gigabecquerels, multiply the Curie value by exactly 37. For example, a 2 Ci radiation source equals exactly 74 GBq.",
    formulaDisplay: "1 Ci = 37 GBq (exact)",
    subtext: "Simply multiply the activity in Curies by 37 to obtain the equivalent in Gigabecquerels."
  },
  aboutSourceUnit: {
    title: "About the Curie (Ci)",
    text: "Named in honor of Marie and Pierre Curie for their foundational research on radioactivity, the Curie (symbol: Ci) was originally defined in 1910. In 1953, the International Commission on Radiological Units (ICRU) redefined the Curie strictly as 3.7 × 10¹⁰ spontaneous nuclear disintegrations per second. While superseded by the Becquerel in the SI framework, the Curie remains widely used in United States clinical oncology, radiography, and regulatory permits."
  },
  aboutTargetUnit: {
    title: "About the Gigabecquerel (GBq)",
    text: "The Gigabecquerel (symbol: GBq) is an official metric unit of radioactivity within the International System of Units, combining the SI derived unit Becquerel (1 disintegration per second) with the prefix giga- (10⁹). One Gigabecquerel corresponds to one billion decays per second. It is the international standard unit for specifying radiopharmaceutical inventory, bulk isotope orders, and medical therapy dosages."
  },
  relationship: "One Curie is defined as exactly 37,000,000,000 Becquerels, which translates to exactly 37 Gigabecquerels. This exact integer factor (37) eliminates rounding errors when translating between imperial-era nuclear records and modern metric specifications.",
  relationshipTitle: "The Exact Curie to Gigabecquerel Standard",
  relationshipItems: [
    { label: "1 Curie (Ci)", value: "37 Gigabecquerels (37 GBq) exactly" },
    { label: "1 Millicurie (1 mCi)", value: "0.037 Gigabecquerels (37 MBq)" },
    { label: "1 Microcurie (1 µCi)", value: "0.000037 Gigabecquerels (37 kBq)" },
    { label: "1 Gigabecquerel (GBq)", value: "0.027027 Curies (approx. 27.027 mCi)" }
  ],
  formula: {
    text: "To convert radioactive activity from Curies to Gigabecquerels, multiply the activity value by 37.",
    math: "Activity in GBq = Activity in Ci × 37",
    subtext: "For millicuries (mCi), multiply by 0.037: GBq = mCi × 0.037"
  },
  formulaTitle: "Curie to Gigabecquerel Conversion Formula",
  practicalTip: {
    title: "Quick Mental Math with the 37 Rule",
    text: "Remember that 10 mCi equals 0.37 GBq, and 100 mCi equals 3.7 GBq. In clinical environments, recognizing that 100 mCi maps to 3.7 GBq provides an immediate sanity check for nuclear medicine prescriptions."
  },
  expertNote: {
    title: "Regulatory Transition in Clinical Medicine",
    text: "The Nuclear Regulatory Commission (NRC) in the United States permits licenses in Curies, whereas the European Medicines Agency (EMA) and Health Canada require Gigabecquerels. Pharmaceutical package inserts commonly display both units side by side using the exact factor of 37."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Industrial Weld Inspection Camera",
        subtitle: "A pipeline inspection camera holds an Iridium-192 source rated at 45 Curies. Convert this source activity to Gigabecquerels for an international shipping manifest.",
        steps: [
          "Identify the starting activity: 45 Ci.",
          "State the conversion formula: GBq = Ci × 37.",
          "Perform the multiplication: 45 × 37 = 1,665 GBq.",
          "Final result: The source activity is 1,665 GBq (or 1.665 Terabecquerels, TBq)."
        ]
      },
      {
        title: "Example 2: Thyroid Cancer Treatment Dose",
        subtitle: "An endocrinologist prescribes an oral Sodium Iodide (I-131) capsule containing 0.15 Curies (150 mCi). Convert this treatment dose into Gigabecquerels.",
        steps: [
          "Identify the activity in Curies: 0.15 Ci.",
          "Apply the formula: GBq = 0.15 × 37.",
          "Compute the product: 0.15 × 37 = 5.55 GBq.",
          "Final result: The patient dose is 5.55 GBq."
        ]
      },
      {
        title: "Example 3: Small Check Source Calibration",
        subtitle: "A calibration check disc has an activity of 0.005 Curies (5 mCi) of Cesium-137. Convert this activity to Gigabecquerels.",
        steps: [
          "Identify the starting activity: 0.005 Ci.",
          "Apply the conversion factor: 0.005 × 37.",
          "Calculate the value: 0.185 GBq.",
          "Final result: The check source activity is 0.185 GBq (equivalent to 185 MBq)."
        ]
      }
    ]
  },
  table: {
    title: "Curie to Gigabecquerel Reference Table",
    headers: ["Curies (Ci)", "Gigabecquerels (GBq)", "Practical Benchmark"],
    rows: [
      { fromVal: "0.001 (1 mCi)", toVal: "0.037", extra: "37 MBq — diagnostic renal scan tracer" },
      { fromVal: "0.010 (10 mCi)", toVal: "0.370", extra: "370 MBq — standard bone scan Technetium-99m" },
      { fromVal: "0.027", toVal: "1.000", extra: "Exactly 1 Gigabecquerel threshold" },
      { fromVal: "0.050 (50 mCi)", toVal: "1.850", extra: "Outpatient therapeutic thyroid remnant dose" },
      { fromVal: "0.100 (100 mCi)", toVal: "3.700", extra: "Targeted radionuclide neuroendocrine therapy" },
      { fromVal: "0.200 (200 mCi)", toVal: "7.400", extra: "Standard single cycle of Lutetium-177 therapy" },
      { fromVal: "0.500 (500 mCi)", toVal: "18.500", extra: "Moderate laboratory research irradiator" },
      { fromVal: "1.000", toVal: "37.000", extra: "Exact base definition: activity of 1g of radium-226" },
      { fromVal: "5.000", toVal: "185.000", extra: "High-dose-rate (HDR) brachytherapy seed" },
      { fromVal: "10.000", toVal: "370.000", extra: "Gamma cell research sterilizer capsule" },
      { fromVal: "50.000", toVal: "1,850.000", extra: "Industrial radiography pipeline inspection source" },
      { fromVal: "100.000", toVal: "3,700.000", extra: "3.7 TBq — heavy commercial radiography projector" }
    ]
  },
  applications: {
    title: "Key Applications of the Ci to GBq Conversion",
    items: [
      {
        title: "International Radiopharmaceutical Shipping",
        text: "Radionuclide generators and bulk medical isotopes produced in North America often carry historical Curie labels. International air freight regulations (IATA) and IAEA transport safety documents strictly require radioactive contents to be listed in Gigabecquerels."
      },
      {
        title: "Hospital Oncology & Brachytherapy",
        text: "Brachytherapy seeds containing Iridium-192 or Iodine-125 are calibrated by manufacturers in Curies or millicuries. Medical physics software programs calculate dose distributions in SI units, converting seed activities directly into Gigabecquerels."
      },
      {
        title: "Industrial Non-Destructive Testing (NDT)",
        text: "Radiographic inspection teams use high-activity gamma cameras to check pipeline welds and cast steel valves. Field technicians use Curies on radiation work permits while reporting overall site activity to regulatory registries in Gigabecquerels."
      },
      {
        title: "Decommissioning & Waste Management",
        text: "Nuclear facility decommissioning logs transition legacy reactor waste inventories recorded in Curies into modern national environmental databases that require values in Gigabecquerels."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Ci to GBq",
    items: [
      "Dividing instead of multiplying: Because one Curie contains 37 Gigabecquerels, converting Curies to Gigabecquerels requires multiplication by 37. Dividing by 37 will yield a number 1,369 times too small.",
      "Forgetting the milli- prefix on millicuries: Converting 10 mCi requires multiplying 0.010 Ci by 37 to get 0.37 GBq. Multiplying 10 by 37 directly results in 370 GBq, an error of three orders of magnitude.",
      "Confusing GBq with MBq: 1 mCi equals 37 Megabecquerels (MBq), which is 0.037 Gigabecquerels (GBq). Make sure the metric prefix corresponds to the intended clinical order of magnitude.",
      "Approximating when exactness is required: The factor 37 is mathematically exact by international treaty. Never use rough approximations like 35 or 40 in safety-critical dosimetry calculations."
    ]
  },
  faqs: [
    {
      question: "How do I convert Curies to Gigabecquerels?",
      answer: "Multiply the value in Curies by exactly 37. For example, 3 Curies multiplied by 37 equals 111 Gigabecquerels (GBq)."
    },
    {
      question: "What is the exact conversion factor between Ci and GBq?",
      answer: "The conversion factor is exactly 37. By international definition, 1 Curie equals 3.7 × 10¹⁰ Becquerels, which equals exactly 37 × 10⁹ Becquerels, or 37 GBq."
    },
    {
      question: "How do I convert millicuries (mCi) to Gigabecquerels?",
      answer: "Since 1 millicurie is 0.001 Curies, multiply the millicurie value by 0.037. For example, 20 mCi × 0.037 = 0.74 GBq (740 MBq)."
    },
    {
      question: "How many Curies are in 1 Gigabecquerel?",
      answer: "One Gigabecquerel equals approximately 0.027027 Curies (or 27.027 millicuries), which is calculated by dividing 1 by 37."
    },
    {
      question: "Why did the scientific community transition from Curies to Gigabecquerels?",
      answer: "The Curie is based on an arbitrary empirical measurement of one gram of radium-226, which is difficult to reproduce precisely. The Becquerel is directly tied to the fundamental SI base unit of time (1 decay per second), making calculations with metric prefixes much cleaner and globally consistent."
    },
    {
      question: "Is the conversion factor of 37 an approximation?",
      answer: "No. The ICRU and CGPM officially defined 1 Curie as exactly 3.7 × 10¹⁰ Becquerels in 1953. Because 1 GBq is exactly 10⁹ Becquerels, dividing 3.7 × 10¹⁰ by 10⁹ yields precisely 37 with zero rounding."
    },
    {
      question: "How do I convert Gigabecquerels back to Curies?",
      answer: "To convert Gigabecquerels to Curies, divide the Gigabecquerel value by 37 (or multiply by approximately 0.027027)."
    },
    {
      question: "Can this tool convert decimal Curie values?",
      answer: "Yes, our converter accurately handles fractional values, microcuries, and large multi-curie numbers with full mathematical precision."
    }
  ],
  relatedList: [
    { label: "Gigabecquerel to Curie", from: "gigabecquerel", to: "curie" },
    { label: "Becquerel to Gigabecquerel", from: "becquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Becquerel", from: "gigabecquerel", to: "becquerel" },
    { label: "Megabecquerel to Gigabecquerel", from: "megabecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Megabecquerel", from: "gigabecquerel", to: "megabecquerel" },
    { label: "Kilobecquerel to Gigabecquerel", from: "kilobecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Kilobecquerel", from: "gigabecquerel", to: "kilobecquerel" },
    { label: "Rutherford to Gigabecquerel", from: "rutherford", to: "gigabecquerel" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) — Guide for the Use of the International System of Units (SP 811).",
    "International Commission on Radiation Units and Measurements (ICRU) — Report 90: Key Data for Ionizing Radiation Dosimetry.",
    "United States Nuclear Regulatory Commission (NRC) — Regulations on Units of Radioactivity (10 CFR Part 20)."
  ]
};
