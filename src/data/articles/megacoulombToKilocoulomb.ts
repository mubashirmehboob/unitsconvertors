import { CustomArticleData } from "./types";

export const megacoulombToKilocoulomb: CustomArticleData = {
  fromUnitId: "megacoulomb",
  toUnitId: "kilocoulomb",
  seoTitle: "Megacoulomb to Kilocoulomb Converter (MC to kC) | UnitsConvertors",
  metaDescription: "Convert Megacoulombs to Kilocoulombs (MC to kC) with precision. Formula derivation, decimal scaling rules, worked engineering examples, and conversion tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/electric-charge/megacoulomb-to-kilocoulomb",
  h1: "Megacoulomb to Kilocoulomb Converter",
  introduction: [
    "In electrical power systems, electrochemical processing, and physical science research, quantifying electric charge requires selecting units suited to the physical magnitude under observation. When dealing with grid-scale energy storage throughput, multi-megawatt electrolyzers, or lightning impulse testing, measurements are frequently quoted in Megacoulombs (MC). Conversely, industrial battery module monitoring, electric vehicle pack specifications, and substation capacitor banks standardly operate in Kilocoulombs (kC).",
    "Converting from Megacoulombs to Kilocoulombs is a straightforward metric prefix transition within the International System of Units (SI). Because the mega- prefix represents 10⁶ and kilo- represents 10³, one megacoulomb equals exactly one thousand kilocoulombs. This guide provides exact mathematical formulas, practical step-by-step calculation examples, industry context, and comprehensive reference charts."
  ],
  quickAnswer: {
    text: "One Megacoulomb equals exactly 1,000 Kilocoulombs (10³ kC). To convert Megacoulombs to Kilocoulombs, multiply the megacoulomb value by 1,000, or shift the decimal point three positions to the right.",
    formulaDisplay: "1 MC = 1,000 kC = 1,000,000 C",
    subtext: "Multiply by 1,000 to convert Megacoulombs directly into Kilocoulombs."
  },
  aboutSourceUnit: {
    title: "About the Megacoulomb (MC)",
    text: "The Megacoulomb (symbol: MC) is an SI metric decimal multiple of electric charge corresponding to one million coulombs (10⁶ C). One megacoulomb represents the charge transported by a continuous electrical current of one megampere (1,000,000 A) flowing for one second, or 1,000 amperes sustained for 1,000 seconds. It is applied in utility grid storage analytics, commercial electro-winning, and high-voltage surge phenomena."
  },
  aboutTargetUnit: {
    title: "About the Kilocoulomb (kC)",
    text: "The Kilocoulomb (symbol: kC) is an SI metric multiple representing one thousand coulombs (10³ C). One kilocoulomb corresponds to the electric charge transferred by a continuous current of one ampere flowing for 1,000 seconds, or 1,000 amperes flowing for one second. It is frequently used in electric vehicle traction battery management systems (BMS), industrial plating vats, and electrochemical cell modeling."
  },
  relationship: "The relationship between megacoulombs and kilocoulombs is defined by the three-order-of-magnitude difference between the SI prefixes mega- (10⁶) and kilo- (10³). One megacoulomb contains exactly 1,000 kilocoulombs.",
  relationshipTitle: "Megacoulomb to Kilocoulomb Scaling",
  relationshipItems: [
    { label: "Megacoulomb (MC) to Kilocoulomb (kC)", value: "Multiply by 1,000" },
    { label: "Kilocoulomb (kC) to Megacoulomb (MC)", value: "Divide by 1,000 (or multiply by 0.001)" },
    { label: "Base Coulomb Equivalence", value: "1 MC = 1,000 kC = 1,000,000 C" },
    { label: "Ampere-hour Equivalence", value: "1 MC = 1,000 kC ≈ 277.78 Ah" }
  ],
  formula: {
    text: "To convert electric charge from Megacoulombs (MC) to Kilocoulombs (kC), multiply the megacoulomb measurement by 1,000.",
    math: "Charge (kC) = Charge (MC) × 1,000",
    subtext: "Inverse formula: Charge (MC) = Charge (kC) ÷ 1,000"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Three-Place Decimal Shift Technique",
    text: "Because the conversion factor is exactly 1,000, manual calculation requires only moving the decimal point three places to the right. For instance, 0.045 MC becomes 45 kC; 0.36 MC becomes 360 kC; and 2.75 MC becomes 2,750 kC."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Utility Substation Battery Bank",
        subtitle: "A regional substation battery energy storage installation logs a cumulative daily charge throughput of 0.54 Megacoulombs. Convert this throughput to Kilocoulombs.",
        steps: [
          "Identify the given value: 0.54 MC.",
          "State the conversion equation: kC = MC × 1,000.",
          "Execute the calculation: 0.54 × 1,000 = 540 kC.",
          "Conclusion: The daily battery throughput is exactly 540 Kilocoulombs (equal to 150 Ampere-hours)."
        ]
      },
      {
        title: "Example 2: Commercial EV Charging Hub",
        subtitle: "A high-power electric truck megawatt charging depot dispenses 1.25 MC over a four-hour logistics window. Express this charge in Kilocoulombs.",
        steps: [
          "Identify the starting charge: 1.25 MC.",
          "Multiply by the metric scaling factor: 1.25 × 1,000.",
          "Calculate the result: 1,250 kC.",
          "Conclusion: The total charge delivered equals 1,250 Kilocoulombs."
        ]
      },
      {
        title: "Example 3: Hydrogen Electrolyzer Shift Log",
        subtitle: "An industrial proton-exchange membrane (PEM) electrolyzer operates at continuous current, transferring 0.086 MC of charge. Convert this to Kilocoulombs.",
        steps: [
          "State the starting charge: 0.086 MC.",
          "Apply the formula: 0.086 × 1,000 = 86 kC.",
          "Conclusion: The electrolyzer processed exactly 86 Kilocoulombs."
        ]
      }
    ]
  },
  table: {
    title: "Megacoulomb to Kilocoulomb Conversion Table",
    headers: ["Megacoulombs (MC)", "Kilocoulombs (kC)", "Ampere-hour Equivalent (Ah)", "Engineering Application"],
    rows: [
      { fromVal: "0.01", toVal: "10", extra: "2.78 Ah", extra2: "Small commercial backup battery discharge" },
      { fromVal: "0.05", toVal: "50", extra: "13.89 Ah", extra2: "Heavy automated forklift charging segment" },
      { fromVal: "0.1", toVal: "100", extra: "27.78 Ah", extra2: "Substation emergency control reserve" },
      { fromVal: "0.25", toVal: "250", extra: "69.44 Ah", extra2: "Electric delivery van battery recharge" },
      { fromVal: "0.36", toVal: "360", extra: "100.00 Ah", extra2: "Standard 100 Ah industrial battery pack" },
      { fromVal: "0.5", toVal: "500", extra: "138.89 Ah", extra2: "Copper electro-refining cell shift run" },
      { fromVal: "1.0", toVal: "1,000", extra: "277.78 Ah", extra2: "1 MC baseline electrochemical reference" },
      { fromVal: "2.5", toVal: "2,500", extra: "694.44 Ah", extra2: "Containerized grid storage rack cycle" },
      { fromVal: "5.0", toVal: "5,000", extra: "1,388.89 Ah", extra2: "Chlor-alkali electrolysis bank daily run" },
      { fromVal: "10.0", toVal: "10,000", extra: "2,777.78 Ah", extra2: "Primary aluminum reduction potline schedule" }
    ]
  },
  expertNote: {
    title: "Coulomb Counting in Battery Management Systems",
    text: "Modern utility-scale battery management systems (BMS) implement continuous coulomb counting (current integration) to compute state of charge (SOC). Integrating current in kiloamperes across time intervals produces raw measurements in kilocoulombs, which supervisory SCADA systems aggregate into megacoulombs for long-term health degradation analytics."
  },
  applications: {
    title: "Industrial & Scientific Engineering Contexts",
    items: [
      {
        title: "Grid Energy Storage Systems (BESS)",
        text: "Large multi-megawatt-hour lithium iron phosphate (LFP) installations monitor cumulative charge throughput in megacoulombs. Converting to kilocoulombs helps align pack telemetry with cell-level string monitoring systems."
      },
      {
        title: "Industrial Electrochemistry & Metal Winning",
        text: "Facilities extracting copper, zinc, and aluminum through electrolysis process thousands of amperes continuously. Shift supervisors convert megacoulomb totalizers into kilocoulombs to calculate chemical yields via Faraday's laws."
      },
      {
        title: "High-Voltage Surge Testing & Lightning Simulation",
        text: "Lightning simulation laboratories discharge impulse capacitor banks storing hundreds of kilocoulombs. Aggregating multiple test impulses over research campaigns yields cumulative charge totals expressed in megacoulombs."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing Instead of Multiplying: Because a megacoulomb is larger than a kilocoulomb, converting from MC to kC must yield a numerical value that is 1,000 times larger. Dividing by 1,000 is an inversion error.",
      "Prefix Confusion (MC vs. mC): Always ensure capital 'M' is used for mega- (10⁶) and not lowercase 'm' for milli- (10⁻³). Confusing the two introduces a factor of 1,000,000,000 (10⁹) error.",
      "Treating Charge as Energy: Charge (kC or MC) measures electron quantity, not energy. Converting charge to energy requires multiplying by operating voltage (Joules = Coulombs × Volts)."
    ]
  },
  faqs: [
    {
      question: "How many Kilocoulombs are in 1 Megacoulomb?",
      answer: "There are exactly 1,000 Kilocoulombs in 1 Megacoulomb (1 MC = 1,000 kC = 10⁶ C)."
    },
    {
      question: "What is the formula to convert Megacoulombs to Kilocoulombs?",
      answer: "The formula is: Kilocoulombs = Megacoulombs × 1,000 (or kC = MC × 10³)."
    },
    {
      question: "How do I convert 0.36 MC to Kilocoulombs?",
      answer: "Multiply 0.36 by 1,000: 0.36 × 1,000 = 360 kC, which equals exactly 100 Ampere-hours."
    },
    {
      question: "What is the decimal shift rule from MC to kC?",
      answer: "Move the decimal point three positions to the right to convert from Megacoulombs to Kilocoulombs."
    },
    {
      question: "How many Coulombs are in 1 Kilocoulomb?",
      answer: "There are exactly 1,000 Coulombs in 1 Kilocoulomb (1 kC = 1,000 C)."
    },
    {
      question: "How many Ampere-hours is 1 Kilocoulomb?",
      answer: "One Kilocoulomb equals approximately 0.2778 Ampere-hours (1,000 C ÷ 3,600 s/h = 5/18 Ah)."
    },
    {
      question: "Is Kilocoulomb an official SI unit?",
      answer: "Yes. The Kilocoulomb is an official coherent decimal multiple of the SI unit of electric charge (coulomb), formed by combining the SI prefix kilo- with coulomb."
    },
    {
      question: "What is 2.5 MC in Kilocoulombs?",
      answer: "2.5 MC multiplied by 1,000 equals exactly 2,500 Kilocoulombs (2,500,000 Coulombs)."
    }
  ],
  relatedList: [
    { label: "Kilocoulomb to Megacoulomb", from: "kilocoulomb", to: "megacoulomb" },
    { label: "Megacoulomb to Coulomb", from: "megacoulomb", to: "coulomb" },
    { label: "Megacoulomb to Ampere-hour", from: "megacoulomb", to: "ampere-hour" },
    { label: "Megacoulomb to Milliampere-hour", from: "megacoulomb", to: "milliampere-hour" },
    { label: "Megacoulomb to Faraday", from: "megacoulomb", to: "faraday" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI)</em>, 9th edition, 2019.",
    "NIST Special Publication 811: <em>Guide for the Use of the International System of Units (SI)</em>.",
    "IEEE Standard 485: <em>Recommended Practice for Sizing Lead-Acid Batteries for Stationary Applications</em>."
  ]
};
