import { CustomArticleData } from "./types";

export const kilobecquerelToGigabecquerel: CustomArticleData = {
  fromUnitId: "kilobecquerel",
  toUnitId: "gigabecquerel",
  seoTitle: "Kilobecquerel to Gigabecquerel Converter - kBq to GBq",
  metaDescription: "Convert Kilobecquerels to Gigabecquerels (kBq to GBq) accurately. Includes conversion formula, worked examples, conversion table, and nuclear medicine applications.",
  canonicalUrl: "https://unitsconvertors.com/converters/radioactivity/kilobecquerel-to-gigabecquerel",
  h1: "Kilobecquerel to Gigabecquerel Converter",
  introduction: [
    "Radioactivity quantifies the number of spontaneous nuclear disintegrations occurring within a radioactive sample per unit of time. Across radiation protection, environmental isotope tracing, and clinical radiopharmacy, measurements span many orders of magnitude.",
    "The Kilobecquerel (kBq) measures one thousand decays per second, an ideal scale for low-level soil contamination, food testing, and laboratory check sources. The Gigabecquerel (GBq) measures one billion decays per second, the standard unit for therapeutic radioisotopes and bulk commercial sources. Converting from kBq to GBq requires bridging six orders of magnitude: divide by 1,000,000."
  ],
  quickAnswer: {
    text: "To convert Kilobecquerels to Gigabecquerels, divide the Kilobecquerel value by 1,000,000 (one million) or multiply by 10⁻⁶ (0.000001). For example, 4,500,000 kBq equals exactly 4.5 GBq.",
    formulaDisplay: "1 kBq = 10⁻⁶ GBq = 0.000001 GBq",
    subtext: "Divide by 1,000,000 to scale from kilo- (10³) to giga- (10⁹)."
  },
  aboutSourceUnit: {
    title: "About the Kilobecquerel (kBq)",
    text: "The Kilobecquerel (symbol: kBq) is an SI-derived metric unit representing 1,000 spontaneous nuclear disintegrations per second. It is commonly employed when assessing environmental radioactivity, such as radon levels in groundwater, radioactive potassium in biological tissue, and surface swipe contamination in medical imaging facilities."
  },
  aboutTargetUnit: {
    title: "About the Gigabecquerel (GBq)",
    text: "The Gigabecquerel (symbol: GBq) represents 1,000,000,000 disintegrations per second (10⁹ Bq). It is the premier international standard for expressing high-potency radionuclide shipments, cyclotron production runs, and therapeutic cancer treatments. One Gigabecquerel equals approximately 27 millicuries."
  },
  relationship: "Because kilo- represents 10³ and giga- represents 10⁹, the difference between Kilobecquerels and Gigabecquerels is 10⁶ (one million). Exactly 1,000,000 Kilobecquerels make up one Gigabecquerel. Converting from kBq to GBq shifts the decimal place six positions to the left.",
  relationshipTitle: "Conversion Ratio: kBq to GBq",
  relationshipItems: [
    { label: "1 Kilobecquerel (kBq)", value: "10⁻⁶ Gigabecquerels (0.000001 GBq)" },
    { label: "1,000,000 Kilobecquerels (kBq)", value: "1 Gigabecquerel (1 GBq) exactly" },
    { label: "1,000 Kilobecquerels (kBq)", value: "1 Megabecquerel (0.001 GBq)" },
    { label: "37,000,000 Kilobecquerels (kBq)", value: "37 Gigabecquerels (1 Curie)" }
  ],
  formula: {
    text: "To convert Kilobecquerels to Gigabecquerels, divide the activity value in kBq by 1,000,000, or multiply by 10⁻⁶.",
    math: "Activity in GBq = Activity in kBq / 1,000,000",
    subtext: "Scientific notation: Activity in GBq = Activity in kBq × 10⁻⁶"
  },
  formulaTitle: "Kilobecquerel to Gigabecquerel Conversion Formula",
  practicalTip: {
    title: "Six-Decimal Shift Rule",
    text: "To quickly convert kBq to GBq by hand, count six digits to the left. If a laboratory sample reads 250,000 kBq, shifting six places yields 0.25 GBq."
  },
  expertNote: {
    title: "Environmental Monitoring vs Clinical Doses",
    text: "Radiation safety laws typically set permissible workplace contamination in kBq/m², while waste storage permits limit total room inventory in GBq. Safety officers frequently use this conversion to verify that aggregated swipe tests do not breach facility license thresholds."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Aggregated Nuclear Medicine Laboratory Waste",
        subtitle: "A hospital waste decay closet accumulates radioactive syringe shields containing a total of 18,500,000 kBq of Technetium-99m. Express this waste activity in Gigabecquerels.",
        steps: [
          "Identify the starting activity: 18,500,000 kBq.",
          "State the conversion formula: GBq = kBq / 1,000,000.",
          "Perform the division: 18,500,000 / 1,000,000 = 18.5 GBq.",
          "Final result: The total waste inventory is 18.5 GBq (equivalent to 500 mCi)."
        ]
      },
      {
        title: "Example 2: Cyclotron Target Preparation",
        subtitle: "A radiochemist measures an irradiated zinc target with an activity of 3,700,000 kBq. Convert this yield into Gigabecquerels.",
        steps: [
          "Identify the measured activity: 3,700,000 kBq.",
          "Apply the formula: GBq = 3,700,000 / 1,000,000.",
          "Compute the quotient: 3.7 GBq.",
          "Final result: The target yield is exactly 3.7 GBq (100 mCi)."
        ]
      },
      {
        title: "Example 3: Environmental Water Sample",
        subtitle: "An environmental research basin contains 45,000 kBq of dissolved tritium activity. Express this value in Gigabecquerels.",
        steps: [
          "Identify the starting value: 45,000 kBq.",
          "Divide by one million: 45,000 / 1,000,000.",
          "Compute the result: 0.045 GBq.",
          "Final result: The basin activity is 0.045 GBq (or 45 MBq)."
        ]
      }
    ]
  },
  table: {
    title: "Kilobecquerel to Gigabecquerel Reference Table",
    headers: ["Kilobecquerels (kBq)", "Gigabecquerels (GBq)", "Practical Context"],
    rows: [
      { fromVal: "1", toVal: "0.000001", extra: "10⁻⁶ GBq — low-level environmental detector limit" },
      { fromVal: "100", toVal: "0.000100", extra: "Commercial building radon screening threshold" },
      { fromVal: "1,000", toVal: "0.001", extra: "1 Megabecquerel (1 MBq) benchmark" },
      { fromVal: "10,000", toVal: "0.010", extra: "10 MBq — minor diagnostic thyroid uptake dose" },
      { fromVal: "100,000", toVal: "0.100", extra: "100 MBq — pediatric renal scintigraphy dose" },
      { fromVal: "370,000", toVal: "0.370", extra: "Equivalent to 10 millicuries (10 mCi)" },
      { fromVal: "1,000,000", toVal: "1.000", extra: "Exactly 1 Gigabecquerel (1 GBq)" },
      { fromVal: "3,700,000", toVal: "3.700", extra: "Equivalent to 100 millicuries (100 mCi)" },
      { fromVal: "10,000,000", toVal: "10.000", extra: "10 Gigabecquerels — high-potency cancer therapy dose" },
      { fromVal: "37,000,000", toVal: "37.000", extra: "Equivalent to 1 full Curie (1 Ci)" },
      { fromVal: "100,000,000", toVal: "100.000", extra: "100 Gigabecquerels — commercial food irradiation check" }
    ]
  },
  applications: {
    title: "Real-World Applications for kBq to GBq Conversions",
    items: [
      {
        title: "Nuclear Medicine Dose Aggregation",
        text: "Individual patient injection remnants and syringe washings are tracked in Kilobecquerels on contamination logs. When logging weekly radiopharmacy waste holding tanks, technicians sum these readings and convert them to Gigabecquerels for institutional license compliance."
      },
      {
        title: "Environmental Remediation & Soil Surveys",
        text: "Radioactive contamination across brownfield mining sites is measured in kBq per kilogram of soil. Environmental engineers calculating total site remediation liabilities sum soil volumes and express overall site radioactivity in Gigabecquerels."
      },
      {
        title: "Radiation Safety License Audits",
        text: "University and biotech research licenses specify possession limits in Gigabecquerels. Laboratory managers auditing dozens of individual kBq inventory vials convert their totals to Gigabecquerels to prove they stay well within allowable legal limits."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting kBq to GBq",
    items: [
      "Dividing by 1,000 instead of 1,000,000: Dividing by 1,000 converts Kilobecquerels to Megabecquerels (MBq), not Gigabecquerels. You must account for the full six orders of magnitude between kilo- (10³) and giga- (10⁹).",
      "Multiplying instead of dividing: Converting from a smaller unit (kBq) to a larger unit (GBq) must yield a smaller numerical value. If your answer has more digits, multiplication was applied by error.",
      "Losing significant digits with leading zeros: Small kBq values result in numbers with multiple decimal zeros (e.g., 50 kBq = 0.00005 GBq). In software code, using standard floating-point numbers without precision formatting can introduce rounding errors."
    ]
  },
  faqs: [
    {
      question: "How do I convert Kilobecquerels to Gigabecquerels?",
      answer: "Divide the activity value in Kilobecquerels by 1,000,000 (one million) or multiply by 10⁻⁶. For example, 7,200,000 kBq divided by 1,000,000 equals 7.2 GBq."
    },
    {
      question: "How many Kilobecquerels are in 1 Gigabecquerel?",
      answer: "There are exactly 1,000,000 Kilobecquerels in 1 Gigabecquerel, because kilo- represents 10³ and giga- represents 10⁹ (a difference of 10⁶)."
    },
    {
      question: "What is the relationship between kBq, MBq, and GBq?",
      answer: "1 Gigabecquerel (GBq) = 1,000 Megabecquerels (MBq) = 1,000,000 Kilobecquerels (kBq) = 1,000,000,000 Becquerels (Bq)."
    },
    {
      question: "How many kBq make up 1 Curie?",
      answer: "One Curie (Ci) equals exactly 37,000,000 Kilobecquerels (37,000,000 kBq = 37 GBq)."
    },
    {
      question: "Why does converting kBq to GBq require dividing by one million?",
      answer: "The prefix kilo- stands for 1,000 (10³) while giga- stands for 1,000,000,000 (10⁹). Dividing 10⁹ by 10³ leaves 10⁶, which is one million."
    },
    {
      question: "Can I convert decimal Kilobecquerels?",
      answer: "Yes, our converter accurately processes decimal numbers and scientific notation, dividing any entered figure by 1,000,000 with complete mathematical accuracy."
    },
    {
      question: "How do I convert Gigabecquerels back to Kilobecquerels?",
      answer: "To convert Gigabecquerels back to Kilobecquerels, multiply the Gigabecquerel value by 1,000,000."
    },
    {
      question: "Are both kBq and GBq recognized SI units?",
      answer: "Yes. Both units are approved SI units formed by combining the base SI derived unit Becquerel with the official CGPM metric prefixes kilo- and giga-."
    }
  ],
  relatedList: [
    { label: "Gigabecquerel to Kilobecquerel", from: "gigabecquerel", to: "kilobecquerel" },
    { label: "Becquerel to Gigabecquerel", from: "becquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Becquerel", from: "gigabecquerel", to: "becquerel" },
    { label: "Megabecquerel to Gigabecquerel", from: "megabecquerel", to: "gigabecquerel" },
    { label: "Gigabecquerel to Megabecquerel", from: "gigabecquerel", to: "megabecquerel" },
    { label: "Curie to Gigabecquerel", from: "curie", to: "gigabecquerel" },
    { label: "Gigabecquerel to Curie", from: "gigabecquerel", to: "curie" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) — Guide for the Use of the International System of Units (SP 811).",
    "International Atomic Energy Agency (IAEA) — Categorization of Radioactive Sources (Safety Guide No. RS-G-1.9).",
    "International Commission on Radiation Units and Measurements (ICRU) — Report 90: Key Data for Ionizing Radiation Dosimetry."
  ]
};
