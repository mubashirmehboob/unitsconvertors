import { CustomArticleData } from "./types";

export const coulombToMegacoulomb: CustomArticleData = {
  fromUnitId: "coulomb",
  toUnitId: "megacoulomb",
  seoTitle: "Coulomb to Megacoulomb Converter (C to MC)",
  metaDescription: "Convert Coulombs to Megacoulombs (C to MC) with exact SI electric charge formulas, worked grid-scale storage calculations, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/coulomb-to-megacoulomb",
  h1: "Coulomb to Megacoulomb Converter",
  introduction: [
    "Large-scale energy infrastructure, industrial aluminum smelting, battery energy storage systems (BESS), and particle physics accelerators transfer colossal quantities of electric charge.",
    "The Coulomb (C) is the base derived SI unit of electric charge (1 C = 1 A·s), while the Megacoulomb (MC) denotes one million coulombs (10⁶ C). Expressing mega-scale charge in Megacoulombs streamlines calculations in utility grid battery installations, high-energy plasma physics experiments, and industrial electrometallurgy.",
    "This converter provides exact mathematical conversions between Coulombs and Megacoulombs, worked large-scale engineering calculations, reference conversion tables, and scientific reference data."
  ],
  quickAnswer: {
    text: "To convert Coulombs to Megacoulombs, divide the electric charge in Coulombs by 1,000,000 (or multiply by 10⁻⁶). For example, 5,000,000 Coulombs equals exactly 5.0 Megacoulombs (MC), and 1,000,000 C equals 1.0 MC.",
    formulaDisplay: "MC = C ÷ 1,000,000",
    subtext: "1 Coulomb is equal to exactly 0.000001 Megacoulomb (10⁻⁶ MC)."
  },
  aboutSourceUnit: {
    title: "What is a Coulomb (C)?",
    text: "The Coulomb (symbol: C) is the SI coherent derived unit of electric charge. It is formally defined through the elementary charge constant e = 1.602176634 × 10⁻¹⁹ C. One coulomb equals the charge transported across a conductor cross-section by a constant electric current of one ampere flowing for one second (1 C = 1 A·s), representing approximately 6.241509 × 10¹⁸ fundamental charges."
  },
  aboutTargetUnit: {
    title: "Understanding Megacoulombs (MC)",
    text: "The Megacoulomb (symbol: MC) is a decimal multiple of the coulomb corresponding to one million coulombs (10⁶ C or 1,000 kC). In terms of commercial battery capacity, 1 Megacoulomb is approximately equal to 277.78 Ampere-hours (Ah). Megacoulombs are standard in evaluating large industrial chemical reactors, utility substation power banks, and magnetohydrodynamic energy research."
  },
  relationship: "The relationship between coulombs and megacoulombs is defined by the standard SI prefix 'mega-', denoting a factor of 10⁶: 1 MC = 1,000,000 C, meaning 1 C = 0.000001 MC (10⁻⁶ MC).",
  relationshipTitle: "Coulomb to Megacoulomb Common Benchmark Values",
  relationshipItems: [
    { label: "100,000 C", value: "0.1 MC (Equivalent to 27.78 Ah)" },
    { label: "500,000 C", value: "0.5 MC (Equivalent to 138.89 Ah)" },
    { label: "1,000,000 C", value: "1.0 MC (Base 10⁶ C SI unit multiple)" },
    { label: "3,600,000 C", value: "3.6 MC (Equivalent to 1,000.0 Ah / 1.0 kAh)" },
    { label: "36,000,000 C", value: "36.0 MC (Equivalent to 10,000.0 Ah)" }
  ],
  formula: {
    text: "Divide the electric charge in Coulombs by 1,000,000 to obtain the equivalent charge in Megacoulombs.",
    math: "Q_{(MC)} = \\frac{Q_{(C)}}{10^6} = Q_{(C)} \\times 10^{-6}",
    subtext: "To convert megacoulombs back to coulombs, multiply the megacoulomb value by 1,000,000."
  },
  formulaTitle: "Coulomb to Megacoulomb Mathematical Formula",
  practicalTip: {
    title: "Six-Place Decimal Shift Rule",
    text: "To convert Coulombs to Megacoulombs instantly, shift the decimal point six places to the left. For example, 12,500,000 C becomes 12.5 MC, and 750,000 C becomes 0.75 MC."
  },
  expertNote: {
    title: "Prefix Symbol Case Sensitivity",
    text: "Always use uppercase 'M' for Megacoulomb (MC = 10⁶ C). Using lowercase 'm' denotes Millicoulomb (mC = 10⁻³ C), which is a difference of nine orders of magnitude (10⁹ or one billion times)."
  },
  examples: {
    title: "Step-by-Step C to MC Worked Calculations",
    items: [
      {
        title: "Example 1: Utility Grid BESS Module Charge",
        subtitle: "A commercial 500 kWh battery storage bank delivers 14,400,000 Coulombs during evening peak discharge. Convert this to Megacoulombs.",
        steps: [
          "Identify the charge in Coulombs: Q = 14,400,000 C.",
          "Apply conversion formula: Q_(MC) = 14,400,000 ÷ 1,000,000.",
          "Perform calculation: 14,400,000 ÷ 1,000,000 = 14.4.",
          "Result: 14,400,000 C equals exactly 14.4 MC (equivalent to 4,000 Ah)."
        ]
      },
      {
        title: "Example 2: Industrial Aluminum Smelting Potline",
        subtitle: "An electrolysis smelting pot draws 300,000 A for 100 seconds, passing 30,000,000 Coulombs. Convert this to Megacoulombs.",
        steps: [
          "Identify the charge in Coulombs: Q = 30,000,000 C.",
          "Apply conversion formula: Q_(MC) = 30,000,000 ÷ 1,000,000.",
          "Perform calculation: 30,000,000 ÷ 1,000,000 = 30.0.",
          "Result: 30,000,000 C equals exactly 30.0 MC."
        ]
      },
      {
        title: "Example 3: Electric Train Substation Hourly Load",
        subtitle: "A regional rail traction substation supplies 7,200,000 Coulombs during morning commute hours. Convert this to Megacoulombs.",
        steps: [
          "Identify the charge in Coulombs: Q = 7,200,000 C.",
          "Apply conversion formula: Q_(MC) = 7,200,000 ÷ 1,000,000.",
          "Perform calculation: 7,200,000 ÷ 1,000,000 = 7.2.",
          "Result: 7,200,000 C equals 7.2 MC (equivalent to 2,000 Ah)."
        ]
      }
    ]
  },
  table: {
    title: "Coulomb to Megacoulomb Reference Table",
    headers: ["Charge (Coulombs, C)", "Charge (Megacoulombs, MC)", "Equivalent in Ampere-hours (Ah)"],
    rows: [
      { fromVal: "100,000 C", toVal: "0.1 MC", extra: "27.78 Ah" },
      { fromVal: "250,000 C", toVal: "0.25 MC", extra: "69.44 Ah" },
      { fromVal: "500,000 C", toVal: "0.5 MC", extra: "138.89 Ah" },
      { fromVal: "1,000,000 C", toVal: "1.0 MC", extra: "277.78 Ah" },
      { fromVal: "2,000,000 C", toVal: "2.0 MC", extra: "555.56 Ah" },
      { fromVal: "3,600,000 C", toVal: "3.6 MC", extra: "1,000.00 Ah (1.0 kAh)" },
      { fromVal: "7,200,000 C", toVal: "7.2 MC", extra: "2,000.00 Ah (2.0 kAh)" },
      { fromVal: "10,000,000 C", toVal: "10.0 MC", extra: "2,777.78 Ah" },
      { fromVal: "18,000,000 C", toVal: "18.0 MC", extra: "5,000.00 Ah (5.0 kAh)" },
      { fromVal: "36,000,000 C", toVal: "36.0 MC", extra: "10,000.00 Ah (10.0 kAh)" },
      { fromVal: "72,000,000 C", toVal: "72.0 MC", extra: "20,000.00 Ah (20.0 kAh)" },
      { fromVal: "100,000,000 C", toVal: "100.0 MC", extra: "27,777.78 Ah" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Grid-Scale Battery Energy Storage Systems (BESS)",
        text: "Multi-megawatt containerized BESS installations integrate millions of coulombs during charging and discharging cycles, utilizing Megacoulomb metrics to evaluate cell degradation."
      },
      {
        title: "Primary Metal Electrowinning & Refining",
        text: "Industrial copper, zinc, and aluminum refineries operate massive electrolytic cell banks passing Megacoulombs of electric charge continuously to precipitate pure elemental metals."
      },
      {
        title: "Synchrotron & High-Energy Particle Accelerators",
        text: "Relativistic proton and electron storage rings quantify cumulative beam current integration over long running periods in Megacoulombs."
      },
      {
        title: "Large-Scale Hydrogen Water Electrolyzers",
        text: "Industrial alkaline and proton-exchange membrane (PEM) electrolyzers calculate hydrogen gas mass generation directly from total Megacoulombs delivered."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Mistakes to Avoid",
    items: [
      "Prefix confusion: Confusing Megacoulomb (MC = 10⁶ C) with Millicoulomb (mC = 10⁻³ C) or Microcoulomb (µC = 10⁻⁶ C).",
      "Multiplying instead of dividing: Converting 2,000,000 C to MC requires dividing by 1,000,000 (2 MC), rather than multiplying.",
      "Ignoring battery voltage when calculating energy: 1 MC of charge stores vastly different energy amounts depending on system voltage (E = Q × V).",
      "Decimal precision truncation: Omitting fractional megacoulombs in large-scale metering can hide thousands of coulombs of unbilled energy."
    ]
  },
  faqs: [
    {
      question: "How many Coulombs are in one Megacoulomb?",
      answer: "There are exactly 1,000,000 Coulombs in 1 Megacoulomb (1 MC = 10⁶ C). Conversely, 1 Coulomb equals 0.000001 Megacoulombs (10⁻⁶ MC)."
    },
    {
      question: "What is the formula to convert Coulombs to Megacoulombs?",
      answer: "The formula is: Charge in MC = Charge in C ÷ 1,000,000. For example, 8,500,000 C ÷ 1,000,000 = 8.5 MC."
    },
    {
      question: "How many Ampere-hours are in one Megacoulomb?",
      answer: "One Megacoulomb equals approximately 277.78 Ampere-hours (1 MC = 1,000,000 C ÷ 3,600 s ≈ 277.7778 Ah)."
    },
    {
      question: "What is the difference between MC and mC?",
      answer: "MC (uppercase M) stands for Megacoulomb (1,000,000 C), whereas mC (lowercase m) stands for Millicoulomb (0.001 C). They differ by a factor of 1,000,000,000 (one billion)."
    },
    {
      question: "How many Kilocoulombs make up one Megacoulomb?",
      answer: "There are exactly 1,000 Kilocoulombs in one Megacoulomb (1 MC = 1,000 kC = 1,000,000 C)."
    },
    {
      question: "How many electrons correspond to one Megacoulomb?",
      answer: "Because 1 Coulomb is approximately 6.2415 × 10¹⁸ electrons, 1 Megacoulomb (10⁶ C) corresponds to approximately 6.2415 × 10²⁴ electrons."
    },
    {
      question: "Where are Megacoulombs typically encountered?",
      answer: "Megacoulombs are used in commercial battery energy storage plants (BESS), industrial chlor-alkali electrolysis, aluminum smelting potlines, and particle physics research."
    },
    {
      question: "How do I convert 3.6 Megacoulombs to Ampere-hours?",
      answer: "Multiply by 1,000,000 to get Coulombs (3,600,000 C), then divide by 3,600: 3,600,000 ÷ 3,600 = 1,000 Ah (1 kAh)."
    }
  ],
  relatedList: [
    { label: "Megacoulomb to Coulomb", from: "megacoulomb", to: "coulomb" },
    { label: "Coulomb to Kilocoulomb", from: "coulomb", to: "kilocoulomb" },
    { label: "Coulomb to Ampere-hour", from: "coulomb", to: "ampere-hour" },
    { label: "Ampere-hour to Megacoulomb", from: "ampere-hour", to: "megacoulomb" },
    { label: "Coulomb to Faraday", from: "coulomb", to: "faraday" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition (2019)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "ISO 80000-6 - Quantities and units — Part 6: Electromagnetism",
    "IEC 60050 - International Electrotechnical Vocabulary (IEV)"
  ]
};
