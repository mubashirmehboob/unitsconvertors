import { CustomArticleData } from "./types";

export const faradayToCoulomb: CustomArticleData = {
  fromUnitId: "faraday",
  toUnitId: "coulomb",
  seoTitle: "Faraday to Coulomb Converter (F to C) | UnitsConvertors",
  metaDescription: "Convert Faradays to Coulombs (F to C) accurately. Understand Faraday's constant, SI definitions, electrochemical stoichiometry, and conversion tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/electric-charge/faraday-to-coulomb",
  h1: "Faraday to Coulomb Converter",
  introduction: [
    "In physical chemistry, electrochemistry, and materials science, the Faraday (F) bridges microscopic atomic events with macroscopic electrical measurements. While chemical equations describe reactions in terms of moles of electrons transferred at an electrode, electrical instruments, power supplies, and digital coulometers record charge in Coulombs (C).",
    "One Faraday represents the electric charge carried by exactly one mole of electrons, governed by Faraday's constant (approximately 96,485.332 Coulombs). Converting from Faradays to Coulombs enables researchers and chemical engineers to determine the total electrical charge required to electroplate a target mass of metal, generate a volume of hydrogen gas, or charge an electrochemical battery. This guide provides exact formulas, SI redefinition values, worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "One Faraday equals approximately 96,485.332 Coulombs (C). To convert Faradays to Coulombs, multiply the Faraday value by 96,485.332.",
    formulaDisplay: "1 F = 96,485.33212 C",
    subtext: "Multiply by 96,485.332 to convert Faradays directly into Coulombs."
  },
  aboutSourceUnit: {
    title: "About the Faraday (F)",
    text: "The Faraday (symbol: F, often abbreviated as Fd to avoid confusion with the farad of capacitance) is an electrochemical unit of electric charge named after British physicist and chemist Michael Faraday. It represents the magnitude of electric charge carried by one mole of electrons. Under the 2019 revision of the SI system, 1 Faraday equals Avogadro's constant multiplied by the elementary charge: F = N_A × e = (6.02214076 × 10²³ mol⁻¹) × (1.602176634 × 10⁻¹⁹ C) ≈ 96,485.33212 Coulombs."
  },
  aboutTargetUnit: {
    title: "About the Coulomb (C)",
    text: "The Coulomb (symbol: C) is the coherent derived unit of electric charge in the International System of Units (SI). One coulomb represents the quantity of electricity carried in one second by a constant current of one ampere (1 C = 1 A·s). Under the current SI definition, exactly 1 Coulomb contains approximately 6.241509 × 10¹⁸ elementary charges (protons or electrons)."
  },
  relationship: "The relationship between Faradays and Coulombs is defined by Faraday's constant F ≈ 96,485.332 C/mol. Multiplying any quantity in Faradays by 96,485.332 yields its exact value in Coulombs.",
  relationshipTitle: "Fundamental Chemical Equivalence",
  relationshipItems: [
    { label: "Faraday (F) to Coulomb (C)", value: "Multiply by 96,485.332 (or divide by 0.0000103643)" },
    { label: "Coulomb (C) to Faraday (F)", value: "Divide by 96,485.332 (or multiply by 0.0000103643)" },
    { label: "CODATA 2018 Value", value: "F = 96,485.3321233... C/mol" },
    { label: "Ampere-hour Equivalent", value: "1 F ≈ 26.8015 Ah = 96.4853 kC" }
  ],
  formula: {
    text: "To convert electric charge from Faradays (F) to Coulombs (C), multiply the Faraday value by Faraday's constant (96,485.332 C/F).",
    math: "Charge (C) = Charge (F) × 96,485.33212",
    subtext: "Inverse formula: Charge (F) = Charge (C) ÷ 96,485.33212"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Laboratory Approximation Tip",
    text: "For quick calculations in academic coursework or routine bench chemistry, round Faraday's constant to 96,500 C. For high-precision metrology, battery testing, or industrial accounting, always employ the exact 96,485.332 C value."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Silver Electroplating Coulomb Requirement",
        subtitle: "An electrochemical bath requires 0.25 Faradays of charge to electroplate a precision silver coating (Ag⁺ + e⁻ → Ag). Convert this charge to Coulombs.",
        steps: [
          "Identify the given value: 0.25 F.",
          "Apply the conversion formula: C = F × 96,485.332.",
          "Multiply: 0.25 × 96,485.332 = 24,121.33 C.",
          "Conclusion: The electroplating bath requires 24,121.33 Coulombs of charge."
        ]
      },
      {
        title: "Example 2: Water Electrolysis for Hydrogen Gas",
        subtitle: "Producing one mole of diatomic hydrogen gas (H₂) requires two moles of electrons (2.0 Faradays). Express this in Coulombs to calibrate an industrial DC power supply.",
        steps: [
          "State the required Faradays: 2.0 F.",
          "Calculate coulombs: 2.0 × 96,485.332 = 192,970.66 C.",
          "Conclusion: Exactly 192,970.66 Coulombs are needed to liberate one mole (22.414 liters at STP) of hydrogen gas."
        ]
      },
      {
        title: "Example 3: Copper Refining Cathode Reaction",
        subtitle: "A copper electro-refining test cell passes 1.5 Faradays of charge. Calculate the equivalent charge in Coulombs.",
        steps: [
          "Identify the starting charge: 1.5 F.",
          "Multiply: 1.5 × 96,485.332 = 144,728.00 C.",
          "Conclusion: The refined cell passed 144,728.00 Coulombs of charge."
        ]
      }
    ]
  },
  table: {
    title: "Faraday to Coulomb Conversion Table",
    headers: ["Faradays (F)", "Coulombs (C)", "Ampere-hour Equivalent", "Chemical / Practical Benchmark"],
    rows: [
      { fromVal: "0.05", toVal: "4,824.27", extra: "1.34 Ah", extra2: "Micro-scale electrogravimetric test" },
      { fromVal: "0.1", toVal: "9,648.53", extra: "2.68 Ah", extra2: "0.1 mole electron transfer" },
      { fromVal: "0.25", toVal: "24,121.33", extra: "6.70 Ah", extra2: "Quarter-mole reaction charge" },
      { fromVal: "0.5", toVal: "48,242.67", extra: "13.40 Ah", extra2: "Half-mole stoichiometric charge" },
      { fromVal: "1.0", toVal: "96,485.33", extra: "26.80 Ah", extra2: "Exactly 1 mole of electrons (Faraday constant)" },
      { fromVal: "2.0", toVal: "192,970.66", extra: "53.60 Ah", extra2: "1 mole H₂ generation (2 e⁻ transfer)" },
      { fromVal: "3.0", toVal: "289,456.00", extra: "80.40 Ah", extra2: "1 mole Al deposition (3 e⁻ transfer)" },
      { fromVal: "4.0", toVal: "385,941.33", extra: "107.21 Ah", extra2: "1 mole O₂ liberation (4 e⁻ transfer)" },
      { fromVal: "5.0", toVal: "482,426.66", extra: "134.01 Ah", extra2: "Commercial electro-synthesis batch" },
      { fromVal: "10.0", toVal: "964,853.32", extra: "268.01 Ah", extra2: "10 moles electron transport reference" }
    ]
  },
  expertNote: {
    title: "Faraday's Laws and Coulometric Titration",
    text: "In analytical coulometry, electric current is maintained at a known value while the elapsed time is recorded to high precision. Because Q = I × t, measuring the coulombs directly allows the number of Faradays to be computed with zero standard reference materials, making coulometry an absolute analytical method."
  },
  applications: {
    title: "Everyday & Industrial Engineering Contexts",
    items: [
      {
        title: "Coulometric Titration & Karl Fischer Analysis",
        text: "Automated Karl Fischer moisture titrators generate iodine at an electrode via coulometry. The instrument converts recorded coulombs into Faradays and then moles of reacted water to determine trace moisture in pharmaceuticals and transformer oils."
      },
      {
        title: "Electroplating & Surface Finishing",
        text: "Electroplating decorative or protective coatings of gold, nickel, chrome, or zinc requires precise charge control. Plating managers convert theoretical Faradays derived from part surface area and target thickness into Coulombs to program DC rectifier controllers."
      },
      {
        title: "Battery Anode & Cathode Chemistry",
        text: "Lithium-ion battery researchers calculate theoretical specific capacity (mAh/g) from the molecular weight of cathode materials (such as LiCoO₂ or LiFePO₄) based on the charge of one Faraday per mole of exchanged lithium ions."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing Faraday with Farad: The Faraday is a unit of electric charge (96,485.33 C), while the Farad is the SI unit of capacitance (C/V). A 1 F capacitor stores 1 Coulomb per volt, not 1 Faraday.",
      "Valency Errors in Stoichiometry: A transfer of 1 Faraday deposits 1 mole of monovalent Ag⁺, but only 0.5 moles of divalent Cu²⁺ or Pb²⁺, and only 0.333 moles of trivalent Al³⁺.",
      "Over-Rounding Constants: In financial accounting of industrial electricity or battery capacity guarantees, using 96,500 C instead of 96,485.33 C introduces an error of approximately 0.015%, which accumulates over large megawatt installations."
    ]
  },
  faqs: [
    {
      question: "How many Coulombs are in 1 Faraday?",
      answer: "One Faraday equals approximately 96,485.332 Coulombs (under the 2019 SI redefinition: N_A × e ≈ 96,485.33212 C)."
    },
    {
      question: "What is the formula to convert Faradays to Coulombs?",
      answer: "The formula is: Coulombs = Faradays × 96,485.332 (or C = F × 96,485.332)."
    },
    {
      question: "Why does 1 Faraday equal 96,485 Coulombs?",
      answer: "Because 1 Faraday is defined as the charge of 1 mole of electrons: (6.02214076 × 10²³ electrons/mol) × (1.602176634 × 10⁻¹⁹ C/electron) ≈ 96,485.332 C."
    },
    {
      question: "How many Coulombs are in 2 Faradays?",
      answer: "Two Faradays equal exactly 192,970.66 Coulombs (2 × 96,485.332 C)."
    },
    {
      question: "Is 96,500 Coulombs accurate enough for 1 Faraday?",
      answer: "96,500 C is a standard convenient approximation for general classroom chemistry, but high-precision electrochemical engineering requires 96,485.332 C."
    },
    {
      question: "What is the difference between Farad and Faraday?",
      answer: "A Farad (F) measures capacitance (charge stored per volt). A Faraday (F) measures total electric charge (equivalent to 96,485.33 Coulombs)."
    },
    {
      question: "How many Ampere-hours is 1 Faraday?",
      answer: "One Faraday equals approximately 26.8015 Ampere-hours (96,485.33 C ÷ 3,600 s/h)."
    },
    {
      question: "How do I convert 0.5 Faradays to Coulombs?",
      answer: "Multiply 0.5 by 96,485.332: 0.5 × 96,485.332 = 48,242.67 Coulombs."
    }
  ],
  relatedList: [
    { label: "Coulomb to Faraday", from: "coulomb", to: "faraday" },
    { label: "Faraday to Ampere-hour", from: "faraday", to: "ampere-hour" },
    { label: "Faraday to Milliampere-hour", from: "faraday", to: "milliampere-hour" },
    { label: "Faraday to Kilocoulomb", from: "faraday", to: "kilocoulomb" },
    { label: "Faraday to Megacoulomb", from: "faraday", to: "megacoulomb" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI)</em>, 9th edition, 2019.",
    "IUPAC Compendium of Chemical Terminology: <em>Faraday Constant</em>.",
    "CODATA Recommended Values of the Fundamental Physical Constants: 2018/2022."
  ]
};
