import { CustomArticleData } from "./types";

export const megacoulombToCoulomb: CustomArticleData = {
  fromUnitId: "megacoulomb",
  toUnitId: "coulomb",
  seoTitle: "Megacoulomb to Coulomb Converter (MC to C) | UnitsConvertors",
  metaDescription: "Convert Megacoulombs to Coulombs (MC to C) with exact formulas and calculations. Discover electric charge scaling, lightning discharge data, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/converters/electric-charge/megacoulomb-to-coulomb",
  h1: "Megacoulomb to Coulomb Converter",
  introduction: [
    "In electrical physics and high-voltage power engineering, electric charge represents the fundamental physical property of matter that causes it to experience a force within an electromagnetic field. While conventional electronic circuits manipulate charge in microcoulombs or coulombs, large industrial electrochemical processes, grid-scale battery installations, and major atmospheric lightning phenomena involve vast quantities of charge measured in Megacoulombs (MC).",
    "Converting from Megacoulombs to Coulombs is a straightforward decimal scaling operation based on the standard SI metric prefix mega- (10⁶). Because one megacoulomb equals exactly one million coulombs, this guide provides exact conversion formulas, worked step-by-step engineering problems, practical application notes, and reference conversion tables."
  ],
  quickAnswer: {
    text: "One Megacoulomb equals exactly 1,000,000 Coulombs (10⁶ C). To convert Megacoulombs to Coulombs, multiply the megacoulomb value by 1,000,000.",
    formulaDisplay: "1 MC = 1,000,000 C = 10⁶ C",
    subtext: "Multiply by 1,000,000 to convert Megacoulombs directly into base Coulombs."
  },
  aboutSourceUnit: {
    title: "About the Megacoulomb (MC)",
    text: "The Megacoulomb (symbol: MC) is an SI metric multiple of electrical charge representing one million coulombs (10⁶ C). One megacoulomb corresponds to the electric charge transported by a constant electric current of one megampere flowing for one second, or 1,000 amperes flowing for 1,000 seconds. It is commonly used in industrial electro-winning, aluminum smelting plants, and utility power grid surge analysis."
  },
  aboutTargetUnit: {
    title: "About the Coulomb (C)",
    text: "The Coulomb (symbol: C) is the International System of Units (SI) coherent derived unit of electric charge, named after French physicist Charles-Augustin de Coulomb. Under the 2019 SI redefinition, the coulomb is defined in terms of the elementary charge e (1.602176634 × 10⁻¹⁹ C), meaning one coulomb equals approximately 6.241509 × 10¹⁸ elementary charges (protons or electrons)."
  },
  relationship: "A megacoulomb is one million times larger than a standard coulomb. Converting from megacoulombs to coulombs increases the numerical figure by six orders of magnitude.",
  relationshipTitle: "Megacoulomb to Coulomb Ratio",
  relationshipItems: [
    { label: "Megacoulomb (MC) to Coulomb (C)", value: "Multiply by 1,000,000 (10⁶)" },
    { label: "Coulomb (C) to Megacoulomb (MC)", value: "Divide by 1,000,000 (10⁻⁶)" },
    { label: "Current Definition", value: "1 MC = 1,000,000 A·s = 277.78 A·h" }
  ],
  formula: {
    text: "To convert electric charge from Megacoulombs (MC) to Coulombs (C), multiply the megacoulomb quantity by one million.",
    math: "Charge (C) = Charge (MC) × 1,000,000",
    subtext: "Equivalent scientific notation: C = MC × 10⁶"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Current-Time Integration Tip",
    text: "Electric charge is the integral of current over time (Q = ∫ I dt). In industrial direct-current systems, measuring coulombs directly from shunt voltage signals requires high-speed numeric integration to avoid accumulated drift errors during fluctuating loads."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Industrial Aluminum Potline Charge",
        subtitle: "An aluminum smelting potline operating at 300 kA transfers 1.8 Megacoulombs during a scheduled production shift. Express this charge in Coulombs.",
        steps: [
          "State the starting charge: 1.8 MC.",
          "Apply the conversion formula: C = MC × 1,000,000.",
          "Multiply: 1.8 × 1,000,000 = 1,800,000 C.",
          "Conclusion: The smelting potline transferred 1,800,000 Coulombs of charge."
        ]
      },
      {
        title: "Example 2: Commercial Battery Energy Storage Charge",
        subtitle: "A grid-tied 1 MWh lithium-ion battery system delivers a cumulative throughput of 0.25 MC. Convert this to Coulombs.",
        steps: [
          "Identify the value: 0.25 MC.",
          "Perform multiplication: 0.25 × 1,000,000 = 250,000 C.",
          "Conclusion: The battery throughput equals 250,000 Coulombs."
        ]
      }
    ]
  },
  table: {
    title: "Megacoulomb to Coulomb Conversion Table",
    headers: ["Megacoulombs (MC)", "Coulombs (C)", "Engineering Application"],
    rows: [
      { fromVal: "0.01", toVal: "10,000", extra: "Commercial EV fast-charging session" },
      { fromVal: "0.05", toVal: "50,000", extra: "Heavy forklift battery charging cycle" },
      { fromVal: "0.1", toVal: "100,000", extra: "Industrial electroplating vat daily turnover" },
      { fromVal: "0.25", toVal: "250,000", extra: "Substation utility battery reserve discharge" },
      { fromVal: "0.5", toVal: "500,000", extra: "Copper electro-refining cell shift charge" },
      { fromVal: "1.0", toVal: "1,000,000", extra: "1 MC baseline electrochemical reference" },
      { fromVal: "2.5", toVal: "2,500,000", extra: "Industrial chlor-alkali electrolysis run" },
      { fromVal: "5.0", toVal: "5,000,000", extra: "Commercial aluminum reduction potline cycle" }
    ]
  },
  expertNote: {
    title: "Charge Transport in Electrolysis",
    text: "Faraday's laws of electrolysis state that the mass of substance altered at an electrode is directly proportional to the total electric charge passed. In copper refining, 1 Megacoulomb of charge deposits approximately 329.3 grams of pure copper at the cathode."
  },
  applications: {
    title: "Real-World Engineering Contexts",
    items: [
      {
        title: "Electrochemical Smelting & Refining",
        text: "Metals like aluminum, copper, and zinc are produced and refined via molten salt electrolysis. These facilities draw hundreds of thousands of amperes continuously, transferring hundreds of megacoulombs daily."
      },
      {
        title: "Utility Battery Energy Storage Systems (BESS)",
        text: "Megawatt-scale battery banks stabilize electrical grids. Tracking charge throughput in megacoulombs enables battery management systems to assess state of health (SOH) and cyclic degradation."
      },
      {
        title: "Lightning Protection & Surge Arresters",
        text: "While an individual lightning stroke typically transfers 5 to 25 Coulombs, continuous positive superbolts can transfer hundreds of coulombs, and major thunderstorm complexes transfer megacoulombs across cloud layers."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing Instead of Multiplying: Because megacoulombs are one million times larger than coulombs, converting from MC to C must yield a larger number. Dividing by 1,000,000 is incorrect.",
      "Confusing Megacoulomb (MC) with Millicoulomb (mC): The capital 'M' designates mega- (10⁶), whereas lowercase 'm' designates milli- (10⁻³). Confusing the two introduces a factor of one billion (10⁹) error.",
      "Conflating Energy and Charge: Electric charge (Coulombs) multiplied by electric potential (Volts) yields energy in Joules (1 C × 1 V = 1 J). Charge alone does not indicate energy without voltage."
    ]
  },
  faqs: [
    {
      question: "How many Coulombs are in 1 Megacoulomb?",
      answer: "There are exactly 1,000,000 Coulombs in 1 Megacoulomb (1 MC = 10⁶ C)."
    },
    {
      question: "What is the formula to convert Megacoulombs to Coulombs?",
      answer: "The formula is: Coulombs = Megacoulombs × 1,000,000 (or C = MC × 10⁶)."
    },
    {
      question: "How do I convert 0.5 MC to Coulombs?",
      answer: "Multiply 0.5 by 1,000,000: 0.5 × 1,000,000 = 500,000 C."
    },
    {
      question: "What is the symbol for Megacoulomb?",
      answer: "The official SI symbol is 'MC', using a capital 'M' for the prefix mega- and a capital 'C' for coulomb."
    },
    {
      question: "How many ampere-hours are in 1 Megacoulomb?",
      answer: "One Megacoulomb equals approximately 277.78 Ampere-hours (1,000,000 C / 3,600 s/h)."
    },
    {
      question: "How many kilocoulombs equal 1 megacoulomb?",
      answer: "There are exactly 1,000 kilocoulombs (kC) in 1 megacoulomb."
    },
    {
      question: "Where are megacoulombs used in real engineering?",
      answer: "Megacoulomb quantities are used in heavy electrochemical refining, industrial aluminum potlines, utility-scale battery energy storage, and pulsed plasma experiments."
    },
    {
      question: "How many electrons are in 1 Megacoulomb?",
      answer: "One Megacoulomb contains approximately 6.2415 × 10²⁴ electrons (10⁶ / 1.602176634 × 10⁻¹⁹)."
    }
  ],
  relatedList: [
    { label: "Megacoulomb to Kilocoulomb", from: "megacoulomb", to: "kilocoulomb" },
    { label: "Megacoulomb to Ampere-hour", from: "megacoulomb", to: "ampere-hour" },
    { label: "Megacoulomb to Milliampere-hour", from: "megacoulomb", to: "milliampere-hour" },
    { label: "Megacoulomb to Faraday", from: "megacoulomb", to: "faraday" },
    { label: "Kilocoulomb to Coulomb", from: "kilocoulomb", to: "coulomb" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI)</em>, 9th edition, 2019.",
    "NIST Special Publication 330: <em>The International System of Units (SI)</em>.",
    "IUPAC Compendium of Chemical Terminology: <em>Quantity of Electricity and Electrochemical Reactions</em>."
  ]
};
