import { CustomArticleData } from "./types";

export const rutherfordToCurie: CustomArticleData = {
  fromUnitId: "rutherford",
  toUnitId: "curie",
  seoTitle: "Rutherford to Curie Converter - Rd to Ci",
  metaDescription: "Easily convert Rutherfords to Curies (Rd to Ci). Understand the division-by-37,000 ratio, discover historical nuclear standards, and view clear math examples.",
  h1: "Rutherford to Curie Converter",
  introduction: [
    "In nuclear physics, tracking the rate of atomic decay is vital for calculating clinical radiation treatments and managing nuclear fuel components. Over the past century, a variety of traditional and SI units have been introduced to quantify disintegrations per second.",
    "The Rutherford (Rd) represents a traditional, base-10 unit defined as exactly one million decays per second. The Curie (Ci) is a massive traditional unit representing 37 billion decays per second. Understanding the relationship between these two classic units is essential for researchers digitizing historical research logs."
  ],
  quickAnswer: {
    text: "To convert Rutherfords to Curies, divide your Rutherford value by 37,000. For example, a radiation source emitting 74,000 Rutherfords has an activity of exactly 2 Curies.",
    formulaDisplay: "1 Rd = 0.00002703 Ci",
    subtext: "Simply divide the Rutherford value by 37,000 or multiply by 0.000027027 to find the equivalent activity in Curies."
  },
  aboutSourceUnit: {
    title: "Understanding the Rutherford (Rd)",
    text: "Proposed in 1946, the Rutherford (Rd) represents exactly 1,000,000 disintegrations per second. It was designed to align with modern decimal prefixes and is mathematically identical to a Megabecquerel (MBq)."
  },
  aboutTargetUnit: {
    title: "Understanding the Curie (Ci)",
    text: "The Curie (Ci) represents exactly 3.7 × 10¹⁰ decays per second. It is an extremely large unit, typical of reactor-grade isotopes, nuclear plant fuels, and high-intensity industrial radiotherapy capsules."
  },
  relationship: "The ratio between Rutherfords and Curies is fixed. Since one Curie is defined as 37 billion decays per second and one Rutherford is one million decays per second, one Curie is equal to exactly 37,000 Rutherfords. Therefore, a Rutherford is 1/37,000 of a Curie.",
  relationshipTitle: "Sizing Up Radioactivity: Rd vs Ci",
  relationshipItems: [
    { label: "1 Rutherford (Rd)", value: "0.000027027 Curies (Ci)" },
    { label: "1 Curie (Ci)", value: "37,000 Rutherfords (Rd)" }
  ],
  formula: {
    text: "Convert radioactivity values by dividing the Rutherford value by 37,000.",
    math: "Activity in Curies (Ci) = Activity in Rutherfords (Rd) / 37,000",
    subtext: "To convert back, multiply your Curie value by 37,000."
  },
  formulaTitle: "The Rutherford to Curie Formula",
  practicalTip: {
    title: "Simple Mental Equivalencies",
    text: "To make mental approximations quick, remember that 37 Rutherfords is equal to exactly 1 millicurie (mCi). This simple reference point is extremely useful for verifying lab inventories."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Industrial Radiography Check",
        subtitle: "An industrial gamma source capsule is labeled with an activity of 185,000 Rutherfords. Convert this activity to Curies.",
        steps: [
          "Identify the activity in Rutherfords: 185,000 Rd.",
          "Write down the conversion formula: Ci = Rd / 37,000.",
          "Perform the division: 185,000 / 37,000 = 5.",
          "Conclude the calculation: 185,000 Rutherfords is exactly equal to 5 Curies."
        ]
      },
      {
        title: "Example 2: Medical Tracer Dilution",
        subtitle: "A clinical tracer vial has a diluted activity of 740 Rutherfords. Convert this value to Curies.",
        steps: [
          "Identify the starting activity: 740 Rd.",
          "Use the conversion division: 740 / 37,000.",
          "Calculate: 0.02.",
          "Conclude the calculation: 740 Rutherfords is equivalent to exactly 0.02 Curies (or 20 millicuries)."
        ]
      }
    ]
  },
  table: {
    title: "Rutherford to Curie Reference Table",
    headers: ["Rutherfords (Rd)", "Curies (Ci)", "Isotope Reference Scale"],
    rows: [
      { fromVal: "1", toVal: "0.000027", extra: "1 Megabecquerel (MBq) standard check source" },
      { fromVal: "37", toVal: "0.001", extra: "1 Millicurie (mCi) typical medical tracer dose" },
      { fromVal: "100", toVal: "0.0027", extra: "Weak therapeutic contrast trace" },
      { fromVal: "370", toVal: "0.01", extra: "Localized therapeutic tumor implant seed" },
      { fromVal: "1,000", toVal: "0.027", extra: "Low-level diagnostic imaging dosage" },
      { fromVal: "10,000", toVal: "0.27", extra: "Medium laboratory isotope waste quantity" },
      { fromVal: "37,000", toVal: "1", extra: "Exactly 1 Curie base benchmark" },
      { fromVal: "100,000", toVal: "2.7", extra: "High-intensity industrial radiographic scanner" }
    ]
  },
  expertNote: {
    title: "Understanding Historic Measurement Systems",
    text: "While the Rutherford was intended to replace the Curie because of its simpler base-10 structure, it was eventually bypassed when the SI system introduced the Becquerel. Today, researchers studying postwar scientific records frequently convert both legacy units to compare data."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Archival Research & Dose Reconstruction",
        text: "Health physicists studying environmental dose risks from postwar nuclear laboratories convert legacy measurements in Rutherfords (Rd) to Curies (Ci) to compare them with modern exposure limits."
      },
      {
        title: "Industrial Isotope Tracking",
        text: "Logistics coordinators managing radioactive sources convert older inventories labeled in Rutherfords into Curies to comply with transport manifests regulated by national transit agencies."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactivity Pitfalls",
    items: [
      "Multiplying instead of dividing: Because the Rutherford is a much smaller unit than the Curie, converting to Curies must yield a much smaller number. Check your calculations if the value gets larger.",
      "Symbol capitalization error: The symbol for Rutherford is 'Rd'. Avoid using lowercase 'rd' to ensure compliance with professional scientific publications."
    ]
  },
  faqs: [
    {
      question: "How do I convert Rutherfords to Curies?",
      answer: "Divide your Rutherford value by 37,000 to find the equivalent activity in Curies."
    },
    {
      question: "What is a Rutherford in radioactive decay?",
      answer: "A Rutherford (Rd) is a legacy unit of radioactivity representing exactly one million (1,000,000) nuclear disintegrations per second."
    },
    {
      question: "How many Rutherfords are in one Curie?",
      answer: "There are exactly 37,000 Rutherfords in one Curie."
    },
    {
      question: "Is a Rutherford identical to a Megabecquerel?",
      answer: "Yes, because one Megabecquerel (1 MBq) is defined as exactly one million decays per second, it is mathematically equal to one Rutherford (1 Rd)."
    },
    {
      question: "What are the official symbols for Curie and Rutherford?",
      answer: "The official symbol for the Curie is 'Ci' and the symbol for the Rutherford is 'Rd'."
    },
    {
      question: "How many Rutherfords are in a millicurie?",
      answer: "A millicurie (mCi) is one-thousandth of a Curie. Multiplying 0.001 by 37,000 yields exactly 37 Rutherfords."
    },
    {
      question: "Does converting radioactivity units change its physical energy output?",
      answer: "No, you are only changing how you represent the measurement. The rate of physical atomic decay remains identical."
    },
    {
      question: "How do I convert Curies back to Rutherfords?",
      answer: "To perform the reverse conversion, multiply your Curie value by 37,000."
    }
  ],
  relatedList: [
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Megabecquerel to Curie", from: "megabecquerel", to: "curie" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Kilobecquerel", from: "becquerel", to: "kilobecquerel" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" }
  ],
  references: [
    "National Research Council (USA). <em>A New Unit of Radioactivity: The Rutherford</em>, 1946.",
    "National Institute of Standards and Technology (NIST). <em>Radioactivity Definitions and Historical Unit Systems</em>."
  ]
};
