import { CustomArticleData } from "./types";

export const coulombToKilocoulomb: CustomArticleData = {
  fromUnitId: "coulomb",
  toUnitId: "kilocoulomb",
  seoTitle: "Coulomb to Kilocoulomb Converter (C to kC)",
  metaDescription: "Convert Coulombs to Kilocoulombs (C to kC) with exact electric charge formulas, worked physics and engineering examples, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/coulomb-to-kilocoulomb",
  h1: "Coulomb to Kilocoulomb Converter",
  introduction: [
    "In electrostatic physics, electrochemistry, and electrical power generation, quantities of electric charge often exceed tens of thousands of coulombs. To prevent cumbersome numerical notation, SI metric prefixes scale base units into practical working multiples.",
    "The Coulomb (C) is the fundamental derived SI unit of electric charge (1 C = 1 A·s), while the Kilocoulomb (kC) represents one thousand coulombs (10³ C). Kilocoulombs are frequently utilized in calculating large electrochemical cell outputs, industrial capacitor bank energy storage, and industrial DC traction networks.",
    "This converter provides exact decimal conversions between Coulombs and Kilocoulombs, worked engineering examples, reference tables, and standard SI dimensional guidance."
  ],
  quickAnswer: {
    text: "To convert Coulombs to Kilocoulombs, divide the value in Coulombs by 1,000 (or multiply by 0.001). For example, 15,000 Coulombs equals 15 Kilocoulombs (kC), and 1,000 C equals exactly 1.0 kC.",
    formulaDisplay: "kC = C ÷ 1,000",
    subtext: "1 Coulomb is equal to exactly 0.001 Kilocoulomb (10⁻³ kC)."
  },
  aboutSourceUnit: {
    title: "What is a Coulomb (C)?",
    text: "The Coulomb (symbol: C) is the International System of Units (SI) unit of electric charge. Defined in terms of the elementary charge e = 1.602176634 × 10⁻¹⁹ C, one coulomb corresponds to the collective charge of approximately 6.241509 × 10¹⁸ electrons or protons. In circuit dynamics, one coulomb represents the charge transported by a steady current of one ampere flowing for one second (1 C = 1 A·s)."
  },
  aboutTargetUnit: {
    title: "Understanding Kilocoulombs (kC)",
    text: "The Kilocoulomb (symbol: kC) is a decimal multiple of the coulomb based on the SI prefix 'kilo-', representing 10³ or 1,000 coulombs. It simplifies the quantification of large charge transfers such as the cumulative output of battery modules (1 Ah = 3.6 kC), large industrial electrolysis operations, and atmospheric lightning discharge pulses."
  },
  relationship: "The relationship between coulombs and kilocoulombs is governed by the standard SI metric prefix multiplier: 1 kC = 1,000 C, meaning 1 C = 0.001 kC (10⁻³ kC). The conversion is linear and exact.",
  relationshipTitle: "Coulomb to Kilocoulomb Common Benchmark Values",
  relationshipItems: [
    { label: "500 C", value: "0.5 kC (Pulse capacitor bank charge)" },
    { label: "1,000 C", value: "1.0 kC (Base metric prefix scale)" },
    { label: "3,600 C", value: "3.6 kC (Equivalent to 1.0 Ampere-hour)" },
    { label: "18,000 C", value: "18.0 kC (Equivalent to 5.0 Ampere-hours)" },
    { label: "360,000 C", value: "360.0 kC (Equivalent to 100.0 Ampere-hours)" }
  ],
  formula: {
    text: "Divide the electric charge in Coulombs by 1,000 to find the equivalent charge in Kilocoulombs.",
    math: "Q_{(kC)} = \\frac{Q_{(C)}}{1000} = Q_{(C)} \\times 10^{-3}",
    subtext: "To convert kilocoulombs back to coulombs, multiply the kilocoulomb value by 1,000."
  },
  formulaTitle: "Coulomb to Kilocoulomb Mathematical Formula",
  practicalTip: {
    title: "Three-Place Decimal Shift Rule",
    text: "To convert Coulombs to Kilocoulombs without a calculator, shift the decimal point three places to the left. For example, 45,000 C becomes 45.0 kC, and 850 C becomes 0.85 kC."
  },
  expertNote: {
    title: "Connection with Ampere-Hours",
    text: "In electrochemical engineering, 1 kC is approximately 0.27778 Ah. Conversely, multiplying an Ah value by 3.6 directly yields its equivalent in Kilocoulombs (e.g., 50 Ah × 3.6 = 180 kC)."
  },
  examples: {
    title: "Step-by-Step C to kC Worked Calculations",
    items: [
      {
        title: "Example 1: Industrial DC Motor Run Cycle",
        subtitle: "A 100 A industrial conveyor motor operates for 250 seconds, consuming 25,000 Coulombs. Convert this to Kilocoulombs.",
        steps: [
          "Identify the charge in Coulombs: Q = 25,000 C.",
          "Apply conversion formula: Q_(kC) = 25,000 ÷ 1,000.",
          "Perform calculation: 25,000 ÷ 1,000 = 25.0.",
          "Result: 25,000 C equals exactly 25.0 kC."
        ]
      },
      {
        title: "Example 2: Supercapacitor Energy Discharge",
        subtitle: "A 3,000 Farad supercapacitor charged to 2.7 V releases 8,100 Coulombs. Convert this to Kilocoulombs.",
        steps: [
          "Identify the charge in Coulombs: Q = 8,100 C.",
          "Apply conversion formula: Q_(kC) = 8,100 ÷ 1,000.",
          "Perform calculation: 8,100 ÷ 1,000 = 8.1.",
          "Result: 8,100 C equals 8.1 kC."
        ]
      },
      {
        title: "Example 3: Atmospheric Lightning Flash",
        subtitle: "A severe cloud-to-ground lightning stroke transfers 120 Coulombs of charge. Convert this to Kilocoulombs.",
        steps: [
          "Identify the charge in Coulombs: Q = 120 C.",
          "Apply conversion formula: Q_(kC) = 120 ÷ 1,000.",
          "Perform calculation: 120 ÷ 1,000 = 0.12.",
          "Result: 120 C equals 0.12 kC."
        ]
      }
    ]
  },
  table: {
    title: "Coulomb to Kilocoulomb Reference Table",
    headers: ["Charge (Coulombs, C)", "Charge (Kilocoulombs, kC)", "Equivalent in Ampere-hours (Ah)"],
    rows: [
      { fromVal: "100 C", toVal: "0.1 kC", extra: "0.0278 Ah" },
      { fromVal: "500 C", toVal: "0.5 kC", extra: "0.1389 Ah" },
      { fromVal: "1,000 C", toVal: "1.0 kC", extra: "0.2778 Ah" },
      { fromVal: "2,500 C", toVal: "2.5 kC", extra: "0.6944 Ah" },
      { fromVal: "3,600 C", toVal: "3.6 kC", extra: "1.0000 Ah" },
      { fromVal: "7,200 C", toVal: "7.2 kC", extra: "2.0000 Ah" },
      { fromVal: "10,000 C", toVal: "10.0 kC", extra: "2.7778 Ah" },
      { fromVal: "18,000 C", toVal: "18.0 kC", extra: "5.0000 Ah" },
      { fromVal: "36,000 C", toVal: "36.0 kC", extra: "10.0000 Ah" },
      { fromVal: "72,000 C", toVal: "72.0 kC", extra: "20.0000 Ah" },
      { fromVal: "180,000 C", toVal: "180.0 kC", extra: "50.0000 Ah" },
      { fromVal: "360,000 C", toVal: "360.0 kC", extra: "100.0000 Ah" },
      { fromVal: "1,000,000 C", toVal: "1,000.0 kC", extra: "277.7778 Ah (1.0 MC)" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Industrial Chlor-Alkali Electrolysis",
        text: "Chlorine and sodium hydroxide production plants calculate charge passage in kilocoulombs to verify chemical stoichiometric yield and power efficiency per batch."
      },
      {
        title: "Large-Scale Supercapacitor Energy Storage",
        text: "Utility grid voltage stabilization supercapacitors store tens of kilocoulombs of electric charge to provide sub-second primary frequency response."
      },
      {
        title: "Lightning Protection & Grounding Analysis",
        text: "Direct lightning strike test simulators (Marx generators) specify impulse charge transfer in fractions of kilocoulombs to test aircraft skin bonding and surge arresters."
      },
      {
        title: "Electric Locomotive Regenerative Braking",
        text: "Railway power systems monitor regenerated electrical charge transferred back into the 25 kV catenary in kilocoulombs during train deceleration."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Mistakes to Avoid",
    items: [
      "Multiplying instead of dividing: Converting 5,000 C to kC requires dividing by 1,000 (5 kC), not multiplying into 5,000,000 kC.",
      "Symbol capitalization errors: Using uppercase 'KC' or 'kc' instead of the standardized SI symbol 'kC' (lowercase k for kilo, uppercase C for Coulomb).",
      "Confusing with capacitance (kF): Kilocoulombs (kC) measure electric charge, not electrical capacitance (measured in Farads, F).",
      "Ignoring 3.6 scalar for battery capacity: 1 kC does NOT equal 1 Ah; 1 Ah equals exactly 3.6 kC."
    ]
  },
  faqs: [
    {
      question: "How many Coulombs are in a Kilocoulomb?",
      answer: "There are exactly 1,000 Coulombs in one Kilocoulomb (1 kC = 1,000 C). Conversely, 1 Coulomb equals 0.001 Kilocoulombs (10⁻³ kC)."
    },
    {
      question: "What is the formula to convert Coulombs to Kilocoulombs?",
      answer: "The formula is: Charge in kC = Charge in C ÷ 1,000. For example, 12,500 C ÷ 1,000 = 12.5 kC."
    },
    {
      question: "How many Kilocoulombs are in one Ampere-hour (Ah)?",
      answer: "There are exactly 3.6 Kilocoulombs in 1 Ampere-hour (1 Ah = 3,600 C = 3.6 kC)."
    },
    {
      question: "What is the symbol for Kilocoulomb?",
      answer: "The official SI symbol is 'kC', combining the lowercase metric prefix 'k' (kilo) with the uppercase unit symbol 'C' (Coulomb)."
    },
    {
      question: "How do I convert 50,000 Coulombs to Kilocoulombs?",
      answer: "Divide 50,000 by 1,000: 50,000 ÷ 1,000 = 50.0 kC."
    },
    {
      question: "How many electrons are in one Kilocoulomb?",
      answer: "Because one Coulomb contains approximately 6.2415 × 10¹⁸ electrons, one Kilocoulomb (1,000 C) contains approximately 6.2415 × 10²¹ electrons."
    },
    {
      question: "Is Kilocoulomb an official SI unit?",
      answer: "Yes, Kilocoulomb is a decimal multiple of the SI coherent derived unit (Coulomb) formed by adding the standard SI prefix 'kilo-'."
    },
    {
      question: "How does a Kilocoulomb relate to a Megacoulomb?",
      answer: "One Megacoulomb (MC) equals 1,000 Kilocoulombs (1 MC = 1,000 kC). Therefore, 1 kC = 0.001 MC."
    }
  ],
  relatedList: [
    { label: "Kilocoulomb to Coulomb", from: "kilocoulomb", to: "coulomb" },
    { label: "Coulomb to Ampere-hour", from: "coulomb", to: "ampere-hour" },
    { label: "Coulomb to Megacoulomb", from: "coulomb", to: "megacoulomb" },
    { label: "Coulomb to Milliampere-hour", from: "coulomb", to: "milliampere-hour" },
    { label: "Coulomb to Faraday", from: "coulomb", to: "faraday" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition (2019)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "ISO 80000-6 - Quantities and units — Part 6: Electromagnetism",
    "IEC 60050 - International Electrotechnical Vocabulary (IEV)"
  ]
};
