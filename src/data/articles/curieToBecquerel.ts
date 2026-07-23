import { CustomArticleData } from "./types";

export const curieToBecquerel: CustomArticleData = {
  fromUnitId: "curie",
  toUnitId: "becquerel",
  seoTitle: "Curie to Becquerel Converter - Ci to Bq",
  metaDescription: "Easily convert Curies to Becquerels (Ci to Bq). Read about the historical roots of Pierre and Marie Curie's experiments, understand the multiplication formula, and review calculation examples.",
  h1: "Curie to Becquerel Converter",
  introduction: [
    "Radioactivity measures how quickly unstable atomic nuclei decay and release energy. Standardizing these measurements is crucial for medical therapy, national defense shielding, and safe waste management.",
    "The Curie (Ci) is a traditional unit representing a massive level of radioactive activity, originally defined around the emissions of radium. The Becquerel (Bq) is the official SI unit, representing a single disintegration per second. Because older records and US clinical systems frequently use Curies, converting to modern SI Becquerels is an essential daily calculation."
  ],
  quickAnswer: {
    text: "To convert Curies to Becquerels, multiply your Curie value by 37,000,000,000 (37 billion). For example, a 1 Curie industrial radiation source emits exactly 37,000,000,000 Becquerels.",
    formulaDisplay: "1 Ci = 37,000,000,000 Bq (3.7 × 10¹⁰ Bq)",
    subtext: "Simply multiply the Curie value by 37 billion or shift the decimal point 10 places to the right."
  },
  aboutSourceUnit: {
    title: "The Legacy Standard: Curie (Ci)",
    text: "Established in 1910 to honor Marie and Pierre Curie, the Curie (Ci) is defined as exactly 3.7 × 10¹⁰ nuclear decays per second. It represents a extremely large concentration of radioactive material, typical of commercial isotopes and industrial emitters."
  },
  aboutTargetUnit: {
    title: "The SI Base Unit: Becquerel (Bq)",
    text: "Named after French physicist Henri Becquerel, one Becquerel (Bq) represents exactly one disintegration per second. Since single decay events are microscopic, base Becquerels are primarily used for low-activity trace isotopes."
  },
  relationship: "Because one Curie represents exactly 37 billion decays per second, the conversion scale is extremely large. To transition from Curie values down to the base SI standard, you must multiply by 37,000,000,000.",
  relationshipTitle: "Sizing Up Radioactivity: Ci vs Bq",
  relationshipItems: [
    { label: "1 Curie (Ci)", value: "37,000,000,000 Becquerels (Bq)" },
    { label: "1 Becquerel (Bq)", value: "2.7027 × 10⁻¹¹ Curies (Ci)" }
  ],
  formula: {
    text: "To calculate this conversion manually, multiply your starting Curie activity by 37 billion.",
    math: "Activity in Becquerels (Bq) = Activity in Curies (Ci) × 37,000,000,000",
    subtext: "For scientific calculators, express the multiplier as 3.7e10 or 3.7 × 10¹⁰."
  },
  formulaTitle: "The Curie to Becquerel Conversion Formula",
  practicalTip: {
    title: "Avoiding Zero Counting Errors",
    text: "Typing out ten zeros on standard calculator keypads is a common source of calculation errors. To ensure accuracy, we recommend using scientific notation (such as 3.7e10) or utilizing our automatic conversion tool."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Radioactive Medical Tracer",
        subtitle: "A therapeutic dose vial of Technetium-99m contains 0.015 Curies of activity. Convert this to Becquerels.",
        steps: [
          "Identify the activity in Curies: 0.015 Ci.",
          "Write down the conversion formula: Bq = Ci × 37,000,000,000.",
          "Multiply the values: 0.015 × 37,000,000,000 = 555,000,000.",
          "Conclude the calculation: 0.015 Curies is equivalent to exactly 555,000,000 Becquerels (or 555 megabecquerels)."
        ]
      },
      {
        title: "Example 2: Lab Calibration Standard",
        subtitle: "A microcurie calibration capsule is rated at 0.000002 Curies. Convert this to Becquerels.",
        steps: [
          "Identify the starting activity: 0.000002 Ci (2 µCi).",
          "Multiply by the scale factor: 0.000002 × 37,000,000,000.",
          "Perform the calculation: 74,000.",
          "Conclude the calculation: 0.000002 Curies is equivalent to exactly 74,000 Becquerels (or 74 kBq)."
        ]
      }
    ]
  },
  table: {
    title: "Curie to Becquerel Reference Table",
    headers: ["Curies (Ci)", "Becquerels (Bq)", "Common Biological & Physics Contexts"],
    rows: [
      { fromVal: "0.000000001", extra: "Natural potassium emissions in our bones", toVal: "37" },
      { fromVal: "0.000000027", extra: "Typical household smoke detector americium capsule", toVal: "1,000" },
      { fromVal: "0.000001", extra: "1 Microcurie (µCi) weak calibration check source", toVal: "37,000" },
      { fromVal: "0.001", extra: "1 Millicurie (mCi) standard cardiac scan tracer dose", toVal: "37,000,000" },
      { fromVal: "0.01", extra: "Localized therapeutic tumor implant seed", toVal: "370,000,000" },
      { fromVal: "1", extra: "1 Curie (Ci) industrial radiography source capsule", toVal: "37,000,000,000" },
      { fromVal: "10", extra: "Typical cancer radiotherapy tumor-beam capsule", toVal: "370,000,000,000" },
      { fromVal: "100", extra: "Commercial nuclear plant internal pipe deposition", toVal: "3,700,000,000,000" }
    ]
  },
  expertNote: {
    title: "The Physics of the Original Definition",
    text: "Marie Curie originally defined the Curie based on the volume of radon gas in equilibrium with one gram of radium-226. Because radium isotopes vary slightly in purity, the International Committee for Radionuclide Metrology eventually fixed the value at exactly 3.7 × 10¹⁰ disintegrations per second to ensure mathematical consistency."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Clinical Dosage Approvals",
        text: "US regulatory agencies and pharmaceutical companies approve cancer treatment formulas labeled in Curies. Medical physics teams convert these values to SI Becquerels to comply with international radiation safety logs."
      },
      {
        title: "Industrial Scrap Inspections",
        text: "Recycling facilities screen incoming scrap metal for hidden radioactive sources, often labeled in older Curie units. Safety procedures require converting these values to Becquerels to assess the required decontamination scope."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactivity Calculations Pitfalls",
    items: [
      "Dividing instead of multiplying: Because the Curie is a massive unit, converting to Becquerels should result in a much larger number. If you get a tiny decimal, you divided instead of multiplying.",
      "Decimal placement error: Moving the decimal point 10 places requires careful attention. Count your placeholders to ensure you do not make a tenfold error.",
      "Isotope Specificity: Remember that the Curie measure refers to the total disintegrations per second (Bq) and does not represent the biological damage (Sieverts/Rems) or energy absorption (Grays/Rads)."
    ]
  },
  faqs: [
    {
      question: "How do I convert Curies to Becquerels?",
      answer: "Multiply your Curie value by 37,000,000,000 (37 billion) to find the equivalent activity in Becquerels."
    },
    {
      question: "Why does 1 Curie equal 37 billion Becquerels?",
      answer: "This relationship is defined by international standards to approximate the radioactive decay rate of one gram of the radium-226 isotope."
    },
    {
      question: "What is the symbol for Curie and Becquerel?",
      answer: "The official symbol for the Curie is 'Ci' and the symbol for the Becquerel is 'Bq'. Both should be capitalized correctly."
    },
    {
      question: "Is Curie or Becquerel the official unit in physics?",
      answer: "The Becquerel is the official unit of the International System of Units (SI). The Curie is an older, non-SI unit that remains in use across specific medical and industrial applications."
    },
    {
      question: "How many Becquerels are in one millicurie?",
      answer: "A millicurie (mCi) is one-thousandth of a Curie. Multiplying 0.001 by 37 billion yields exactly 37,000,000 Becquerels (or 37 MBq)."
    },
    {
      question: "How many Becquerels are in one microcurie?",
      answer: "A microcurie (µCi) is one-millionth of a Curie. Multiplying 10⁻⁶ by 37 billion yields exactly 37,000 Becquerels (or 37 kBq)."
    },
    {
      question: "Does converting units affect the physical radioactivity?",
      answer: "No, you are only changing how you represent the measurement. The rate of physical atomic decay remains identical."
    },
    {
      question: "How do I convert Becquerels back to Curies?",
      answer: "To perform the reverse conversion, divide your Becquerel value by 37,000,000,000 (37 billion)."
    }
  ],
  relatedList: [
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Megabecquerel to Becquerel", from: "megabecquerel", to: "becquerel" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" }
  ],
  references: [
    "International Bureau of Weights and Measures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>."
  ]
};
