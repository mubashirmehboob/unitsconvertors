import { CustomArticleData } from "./types";

export const kilocoulombToMegacoulomb: CustomArticleData = {
  fromUnitId: "kilocoulomb",
  toUnitId: "megacoulomb",
  seoTitle: "Kilocoulomb to Megacoulomb Converter - kC to MC",
  metaDescription: "Convert kilocoulombs to megacoulombs (kC to MC) with precision. Learn the 1,000 division rule, grid storage calculations, and worked engineering examples.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/kilocoulomb-to-megacoulomb",
  h1: "Kilocoulomb to Megacoulomb Converter",
  introduction: [
    "The kilocoulomb (kC) and megacoulomb (MC) represent adjacent metric multiples of the coulomb within the International System of Units (SI), separated by a factor of 1,000. While kilocoulombs quantify the charge stored in automotive batteries, heavy industrial capacitors, and electric vehicle modules, megacoulombs measure utility-scale grid storage installations, large particle accelerator beam dumps, and regional atmospheric lightning transfer.",
    "Converting from kilocoulombs to megacoulombs is a straightforward three-decade metric scaling calculation. This engineering converter and comprehensive technical guide provides the conversion equations, scientific notation rules, and practical worked calculation examples."
  ],
  quickAnswer: {
    text: "To convert kilocoulombs to megacoulombs, divide the kilocoulomb value by 1,000, or multiply by 0.001. For example, 3,600 kilocoulombs equals exactly 3.6 megacoulombs (3.6 MC).",
    formulaDisplay: "Charge (MC) = Charge (kC) ÷ 1,000",
    subtext: "1,000 kilocoulombs is equal to exactly 1.0 megacoulomb (10⁶ C)."
  },
  aboutSourceUnit: {
    title: "About the Kilocoulomb (kC)",
    text: "The kilocoulomb (symbol: kC) is a decimal multiple of the SI base derived unit of electric charge, equal to one thousand coulombs (10³ C). It represents the charge transferred by a steady current of 1,000 amperes flowing for one second (1,000 A·s), or 1 ampere flowing for 1,000 seconds. It is standardly used in electrochemistry, battery pack capacity modeling, and industrial DC power equipment."
  },
  aboutTargetUnit: {
    title: "About the Megacoulomb (MC)",
    text: "The megacoulomb (symbol: MC) is a decimal multiple of the SI unit of electric charge, equal to one million coulombs (10⁶ C). One megacoulomb represents the charge transferred by a continuous current of one million amperes flowing for one second (10⁶ A·s), or approximately 6.2415 × 10²⁴ elementary charges. It is used in large-scale electrochemistry, grid-scale energy storage, and particle accelerator physics."
  },
  relationship: "The relationship between kilocoulombs and megacoulombs is established by the SI metric prefixes 'kilo-' (10³) and 'mega-' (10⁶). Dividing 10³ by 10⁶ yields 10⁻³ (0.001). Therefore, one kilocoulomb equals 0.001 megacoulombs, and 1,000 kilocoulombs equal one megacoulomb.",
  relationshipTitle: "Prefix Ratio and Metric Scaling",
  relationshipItems: [
    { label: "Kilocoulombs (kC) to Megacoulombs (MC)", value: "Divide by 1,000 (or multiply by 0.001)" },
    { label: "Megacoulombs (MC) to Kilocoulombs (kC)", value: "Multiply by 1,000" },
    { label: "Decimal Shift", value: "3 places to the left" },
    { label: "Coulomb Equivalence", value: "1,000 kC = 1 MC = 1,000,000 C" }
  ],
  formula: {
    text: "To convert any electric charge value from kilocoulombs into megacoulombs, divide the kilocoulomb measurement by 1,000.",
    math: "Charge (MC) = Charge (kC) ÷ 1,000 = Charge (kC) × 0.001",
    subtext: "To convert megacoulombs back to kilocoulombs: Charge (kC) = Charge (MC) × 1,000"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Three-Digit Decimal Shift Rule",
    text: "Because the conversion factor is exactly 1,000, simply move the decimal point three places to the left: 250 kC becomes 0.25 MC; 3,600 kC becomes 3.6 MC; and 18,000 kC becomes 18.0 MC."
  },
  examples: {
    title: "Step-by-Step Practical Worked Examples",
    items: [
      {
        title: "Example 1: Utility Battery Energy Storage Charge Calculation",
        subtitle: "A grid-scale battery installation consists of multiple containerized units with an aggregated charge capacity of 7,200 kilocoulombs. Express this total charge in megacoulombs.",
        steps: [
          "Identify the charge: Q = 7,200 kC.",
          "Apply the conversion formula: MC = kC ÷ 1,000.",
          "Calculate: 7,200 ÷ 1,000 = 7.2.",
          "Conclusion: 7,200 kC equals exactly 7.2 megacoulombs (7.2 MC)."
        ]
      },
      {
        title: "Example 2: Industrial Smelting Daily Charge Delivery",
        subtitle: "An aluminum reduction potline operates at 150,000 A. Over a 100-second run, it transfers 15,000 kilocoulombs. Convert this value to megacoulombs.",
        steps: [
          "State value: Q = 15,000 kC.",
          "Multiply by 0.001: 15,000 × 0.001 = 15.0.",
          "Conclusion: The potline transfers 15.0 MC."
        ]
      },
      {
        title: "Example 3: Electric Locomotive Substation Buffer",
        subtitle: "Convert 850 kilocoulombs into megacoulombs.",
        steps: [
          "Given: Q = 850 kC.",
          "Calculate: 850 ÷ 1,000 = 0.85.",
          "Conclusion: 850 kC is equal to 0.85 MC."
        ]
      }
    ]
  },
  table: {
    title: "Kilocoulomb to Megacoulomb Quick Reference Table",
    headers: ["Kilocoulombs (kC)", "Megacoulombs (MC)", "Ampere-hours (Ah)", "Engineering Context"],
    rows: [
      { fromVal: "100 kC", toVal: "0.10 MC", extra: "27.78 Ah", extra2: "Small electric forklift battery" },
      { fromVal: "360 kC", toVal: "0.36 MC", extra: "100.00 Ah", extra2: "12V 100 Ah deep-cycle marine battery" },
      { fromVal: "500 kC", toVal: "0.50 MC", extra: "138.89 Ah", extra2: "Commercial telecom backup module" },
      { fromVal: "1,000 kC", toVal: "1.00 MC", extra: "277.78 Ah", extra2: "Base 1.0 megacoulomb benchmark" },
      { fromVal: "1,800 kC", toVal: "1.80 MC", extra: "500.00 Ah", extra2: "Industrial mining vehicle battery" },
      { fromVal: "3,600 kC", toVal: "3.60 MC", extra: "1,000.00 Ah", extra2: "Substation 1,000 Ah DC battery bank" },
      { fromVal: "7,200 kC", toVal: "7.20 MC", extra: "2,000.00 Ah", extra2: "Containerized 2 MWh BESS rack" },
      { fromVal: "10,000 kC", toVal: "10.00 MC", extra: "2,777.78 Ah", extra2: "Heavy rail traction storage bank" },
      { fromVal: "36,000 kC", toVal: "36.00 MC", extra: "10,000.00 Ah", extra2: "Utility grid stabilization facility" },
      { fromVal: "100,000 kC", toVal: "100.00 MC", extra: "27,777.78 Ah", extra2: "Regional energy storage plant" }
    ]
  },
  expertNote: {
    title: "Metric Prefixes in High-Energy Physics and Power Grids",
    text: "In particle accelerator physics (such as at CERN or Fermilab), beam charge is integrated over operating runs. While instantaneous beam pulses are measured in nanocoulombs, the cumulative proton fluence dumped into target absorbers over weeks of operation accumulates into kilocoulombs and megacoulombs, dictating radiation damage and target heating."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Grid-Scale Energy Storage Architecture",
        text: "Energy engineers design containerized battery storage facilities. Converting module ratings from kilocoulombs to megacoulombs allows concise system-level charge accounting across multi-megawatt installations."
      },
      {
        title: "Electrowinning and Metallurgical Refining",
        text: "Industrial copper electrowinning facilities monitor rectifier banks that transfer hundreds of thousands of amperes continuously. Integrating charge in megacoulombs rather than kilocoulombs simplifies daily accounting."
      },
      {
        title: "High-Power Pulse Testing Facilities",
        text: "Facilities evaluating lightning arrestors and pulsed magnetic field coils discharge bank energy in fast pulses. Converting total cumulative test energy from kC to MC aids in assessing electrode erosion."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting from a smaller unit (kC) to a larger unit (MC) must produce a 1,000-fold smaller numeric value.",
      "Confusing megacoulombs (MC) with millicoulombs (mC): Capital 'M' signifies mega (10⁶), while lowercase 'm' signifies milli (10⁻³)—a factor of one billion (10⁹).",
      "Treating charge as energy: Charge in megacoulombs represents electrons. Total stored energy in megajoules requires multiplying charge by operating voltage (MJ = MC × V).",
      "Ignoring transmission line losses: In large DC systems, resistance causes energy dissipation as heat even when total transferred charge (coulombs) is conserved."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilocoulombs to megacoulombs?",
      answer: "To convert kilocoulombs (kC) to megacoulombs (MC), divide the kilocoulomb value by 1,000, or multiply by 0.001. For example, 5,000 kC divided by 1,000 equals 5.0 MC."
    },
    {
      question: "How many kilocoulombs are in 1 megacoulomb?",
      answer: "There are exactly 1,000 kilocoulombs in 1 megacoulomb (1 MC = 1,000 kC = 1,000,000 C)."
    },
    {
      question: "What is 3,600 kC in megacoulombs?",
      answer: "3,600 kC equals exactly 3.6 MC (which is also equal to 1,000 ampere-hours or 1,000,000 mAh)."
    },
    {
      question: "How do I convert megacoulombs back to kilocoulombs?",
      answer: "To convert megacoulombs back to kilocoulombs, multiply the megacoulomb value by 1,000. For instance, 2.5 MC × 1,000 = 2,500 kC."
    },
    {
      question: "What is 10,000 kC in megacoulombs?",
      answer: "10,000 kC equals exactly 10.0 MC."
    },
    {
      question: "What is 360 kC in megacoulombs?",
      answer: "360 kC equals 0.36 MC (corresponding to 100 Ah)."
    },
    {
      question: "How many ampere-hours is 1 megacoulomb?",
      answer: "One megacoulomb equals approximately 277.78 ampere-hours (1,000,000 ÷ 3,600 ≈ 277.778 Ah)."
    },
    {
      question: "Why are SI prefixes useful for electric charge?",
      answer: "Electric charge spans enormous physical scales: from single electron charges (1.6 × 10⁻¹⁹ C) to grid storage installations moving megacoulombs (10⁶ C). SI prefixes eliminate cumbersome scientific exponents."
    },
    {
      question: "What is the symbol for megacoulomb?",
      answer: "The official symbol is MC, combining capital 'M' for the mega- prefix (10⁶) with capital 'C' for coulomb."
    }
  ],
  relatedList: [
    { label: "Milliampere-hour to Megacoulomb", from: "milliampere-hour", to: "megacoulomb" },
    { label: "Kilocoulomb to Coulomb", from: "kilocoulomb", to: "coulomb" },
    { label: "Kilocoulomb to Ampere-hour", from: "kilocoulomb", to: "ampere-hour" },
    { label: "Coulomb to Megacoulomb", from: "coulomb", to: "megacoulomb" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units</em>.",
    "Whittingham, M. S. <em>Lithium Batteries and Cathode Materials</em>. Chemical Reviews."
  ]
};
