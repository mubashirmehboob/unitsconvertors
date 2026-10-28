import { CustomArticleData } from "./types";

export const wattHourToKilojoule: CustomArticleData = {
  fromUnitId: "watt-hour",
  toUnitId: "kilojoule",
  seoTitle: "Watt Hour to Kilojoule Converter (Wh to kJ)",
  metaDescription: "Convert Watt Hours to Kilojoules (Wh to kJ) with exact conversion factors. Discover formulas, battery energy comparisons, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/watt-hour-to-kilojoule",
  h1: "Watt Hour to Kilojoule Converter",
  introduction: [
    "The Watt Hour (Wh) and the Kilojoule (kJ) provide clean, manageable numerical values for everyday energetic processes in electrical hardware, battery systems, and mechanical work. While the Watt Hour measures electrical storage and equipment usage, the Kilojoule is the primary SI multiple used across physical chemistry, mechanical dynamics, and international nutritional labeling.",
    "Because one Watt Hour contains exactly 3,600 base Joules and one Kilojoule consists of exactly 1,000 Joules, the conversion between Watt Hours and Kilojoules is simple and mathematically exact: one Watt Hour equals exactly 3.6 Kilojoules.",
    "This guide explains the derivation between electrical Watt Hours and thermodynamic Kilojoules, provides step-by-step conversion examples for batteries and solar panels, includes an extensive reference lookup table, and answers common engineering questions."
  ],
  quickAnswer: {
    text: "To convert Watt Hours (Wh) to Kilojoules (kJ), multiply the Watt Hour value by exactly 3.6. For example, a 10 Wh phone battery stores exactly 36 kJ of energy.",
    formulaDisplay: "kJ = Wh × 3.6",
    subtext: "1 Watt Hour = exactly 3.6 Kilojoules; 1 Kilojoule ≈ 0.277778 Watt Hours."
  },
  aboutSourceUnit: {
    title: "Understanding the Watt Hour (Wh)",
    text: "The Watt Hour (symbol: Wh) is an energy unit representing one Watt of electrical power consumed or generated continuously for one hour. Since 1 Watt equals 1 Joule per second and there are 3,600 seconds in an hour, 1 Wh equals 3,600 Joules. It is the universal standard for rating portable consumer batteries, electric bicycle battery modules, and small solar generators."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilojoule (kJ)",
    text: "The Kilojoule (symbol: kJ) is an SI decimal multiple of the Joule equal to exactly 1,000 Joules (10³ J). Widely adopted internationally for reporting dietary energy on nutrition facts panels outside North America, the kilojoule also measures chemical reaction heats, enthalpy changes, and mechanical braking absorption."
  },
  relationship: "The relationship between Watt Hours and Kilojoules is exact: 1 Wh contains 3,600 Joules, which equals exactly 3.6 Kilojoules (3.6 kJ). Conversely, 1 Kilojoule equals 1 / 3.6 Watt Hours, or approximately 0.277778 Wh (277.78 milliwatt hours).",
  relationshipTitle: "Watt Hour to Kilojoule Equivalence Values",
  relationshipItems: [
    { label: "1 Wh", value: "3.6 kJ (exact)" },
    { label: "5 Wh", value: "18.0 kJ (exact)" },
    { label: "10 Wh", value: "36.0 kJ (exact)" },
    { label: "50 Wh", value: "180.0 kJ (exact)" },
    { label: "100 Wh", value: "360.0 kJ (exact)" },
    { label: "1,000 Wh (1 kWh)", value: "3,600.0 kJ (3.6 MJ)" }
  ],
  formula: {
    text: "Multiply the energy in Watt Hours by 3.6 to obtain Kilojoules.",
    math: "kJ = Wh * 3.6",
    subtext: "Inverse formula: Wh = kJ ÷ 3.6 (or Wh = kJ × 0.277778)."
  },
  formulaTitle: "Watt Hour to Kilojoule Conversion Formula",
  practicalTip: {
    title: "Mental Math Trick with 3.6",
    text: "To multiply by 3.6 in your head, multiply the number by 3, then add half the number plus one-tenth of the number (e.g., 20 Wh × 3 = 60; half is 10; one-tenth of 20 is 2; 60 + 10 + 2 = 72 kJ). To reverse, divide by 3.6."
  },
  expertNote: {
    title: "Nutritional kJ vs. Battery Wh",
    text: "On European and Australian nutrition labels, energy is printed in kilojoules (kJ). A typical 2,000 kcal diet equals approximately 8,368 kJ. Dividing 8,368 kJ by 3.6 yields roughly 2,324.4 Wh (2.324 kWh). This makes direct comparisons between biological daily intake and home electrical appliance consumption straightforward."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Drone Flight Battery Energy",
        subtitle: "Convert a 77.4 Wh drone battery (e.g., 15.2 V, 5,090 mAh) into kilojoules.",
        steps: [
          "State the energy in Watt Hours: 77.4 Wh.",
          "Multiply by 3.6: 77.4 × 3.6 = 278.64 kJ.",
          "Result: A 77.4 Wh battery contains 278.64 Kilojoules of energy."
        ]
      },
      {
        title: "Example 2: Laptop Battery Full Charge",
        subtitle: "Convert a 56 Wh laptop battery capacity into kilojoules.",
        steps: [
          "State the capacity: 56 Wh.",
          "Multiply by the exact factor: 56 × 3.6 = 201.6 kJ.",
          "Result: 56 Wh equals exactly 201.6 Kilojoules."
        ]
      },
      {
        title: "Example 3: Solar Garden Light Daily Energy Storage",
        subtitle: "Convert a rechargeable AA battery storing 2.4 Wh into kilojoules.",
        steps: [
          "State the energy: 2.4 Wh (1.2 V × 2.0 Ah).",
          "Calculate: 2.4 × 3.6 = 8.64 kJ.",
          "Result: 2.4 Wh equals 8.64 Kilojoules."
        ]
      }
    ]
  },
  table: {
    title: "Watt Hour to Kilojoule Conversion Table",
    headers: ["Watt Hours (Wh)", "Kilojoules (kJ)", "Joules (J)", "Kilocalories (kcal)"],
    rows: [
      { fromVal: "0.5 Wh", toVal: "1.8 kJ", extra: "1,800 J", extra2: "0.430 kcal" },
      { fromVal: "1 Wh", toVal: "3.6 kJ", extra: "3,600 J", extra2: "0.860 kcal" },
      { fromVal: "2 Wh", toVal: "7.2 kJ", extra: "7,200 J", extra2: "1.721 kcal" },
      { fromVal: "5 Wh", toVal: "18.0 kJ", extra: "18,000 J", extra2: "4.302 kcal" },
      { fromVal: "10 Wh", toVal: "36.0 kJ", extra: "36,000 J", extra2: "8.604 kcal" },
      { fromVal: "20 Wh", toVal: "72.0 kJ", extra: "72,000 J", extra2: "17.208 kcal" },
      { fromVal: "50 Wh", toVal: "180.0 kJ", extra: "180,000 J", extra2: "43.021 kcal" },
      { fromVal: "100 Wh", toVal: "360.0 kJ", extra: "360,000 J", extra2: "86.042 kcal" },
      { fromVal: "250 Wh", toVal: "900.0 kJ", extra: "900,000 J", extra2: "215.105 kcal" },
      { fromVal: "500 Wh", toVal: "1,800.0 kJ", extra: "1,800,000 J", extra2: "430.210 kcal" },
      { fromVal: "750 Wh", toVal: "2,700.0 kJ", extra: "2,700,000 J", extra2: "645.316 kcal" },
      { fromVal: "1,000 Wh", toVal: "3,600.0 kJ", extra: "3,600,000 J", extra2: "860.421 kcal" }
    ]
  },
  applications: {
    title: "Practical Applications of Wh to kJ Conversion",
    items: [
      {
        title: "Renewable Energy and Microgrid Storage",
        text: "Clean tech engineers evaluate battery bank capacities (in Wh and kWh) against thermal energy demands of water heaters and district heat pumps (in kJ and MJ)."
      },
      {
        title: "Consumer Electronics Compliance Testing",
        text: "Safety laboratories test lithium cell puncture and short-circuit energy release in kilojoules against stated battery label ratings in Watt Hours."
      },
      {
        title: "Metabolic and Exercise Equipment Modeling",
        text: "Cardiovascular exercise machines display work performed in kilojoules alongside total electrical energy generated by self-powered dynamos in Watt Hours."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 3,600 instead of 3.6: 3,600 converts Watt Hours to base Joules; converting to kilojoules requires 3.6.",
      "Confusing power (Watts or Kilowatts) with energy (Watt Hours or Kilojoules): A 3.6 kW motor consumes 3.6 kJ of energy every second it operates.",
      "Dividing by 3.6 when converting Wh to kJ: Dividing produces an answer 13 times smaller than the true value."
    ]
  },
  faqs: [
    {
      question: "How many kilojoules are in 1 Watt Hour?",
      answer: "One Watt Hour equals exactly 3.6 Kilojoules (3.6 kJ)."
    },
    {
      question: "How many Watt Hours are in 1 Kilojoule?",
      answer: "One Kilojoule equals approximately 0.277778 Watt Hours (or 277.78 milliwatt hours)."
    },
    {
      question: "What is the formula to convert Wh to kJ?",
      answer: "kJ = Wh × 3.6."
    },
    {
      question: "Why is the conversion factor exactly 3.6?",
      answer: "Because 1 Wh equals 3,600 Joules, and 1 kJ equals 1,000 Joules. Dividing 3,600 by 1,000 gives exactly 3.6."
    },
    {
      question: "How many kilojoules are in a 100 Wh battery?",
      answer: "100 Wh × 3.6 = 360 Kilojoules (360 kJ or 0.36 MJ)."
    },
    {
      question: "How many Watt Hours are in 1,000 kilojoules (1 MJ)?",
      answer: "1,000 kJ ÷ 3.6 ≈ 277.78 Watt Hours."
    },
    {
      question: "How many kilojoules are in 50 Wh?",
      answer: "50 Wh × 3.6 = 180 Kilojoules."
    },
    {
      question: "Is the conversion factor of 3.6 exact?",
      answer: "Yes. Both the definition of the hour (3,600 seconds) and the kilo prefix (1,000) are exact constants, making 1 Wh = 3.6 kJ exact."
    }
  ],
  relatedList: [
    { label: "Kilojoule to Watt Hour", from: "kilojoule", to: "watt-hour" },
    { label: "Watt Hour to Joule", from: "watt-hour", to: "joule" },
    { label: "Watt Hour to Kilowatt Hour", from: "watt-hour", to: "kilowatt-hour" },
    { label: "Watt Hour to Kilocalorie", from: "watt-hour", to: "kilocalorie" },
    { label: "Kilojoule to Kilocalorie", from: "kilojoule", to: "kilocalorie" }
  ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th edition).",
    "IEC 60050: International Electrotechnical Vocabulary — Energy and Power.",
    "ISO 80000-1:2022 Quantities and units — Part 1: General."
  ]
};
