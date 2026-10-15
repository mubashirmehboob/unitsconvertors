import { CustomArticleData } from "./types";

export const megacoulombToMilliampereHour: CustomArticleData = {
  fromUnitId: "megacoulomb",
  toUnitId: "milliampere-hour",
  seoTitle: "Megacoulomb to Milliampere-hour Converter (MC to mAh) | UnitsConvertors",
  metaDescription: "Convert Megacoulombs to Milliampere-hours (MC to mAh) accurately. Formula derivation, consumer battery calculations, worked examples, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/electric-charge/megacoulomb-to-milliampere-hour",
  h1: "Megacoulomb to Milliampere-hour Converter",
  introduction: [
    "In electrical systems analysis, electric charge is expressed in different units depending on scale. Macro-level processes—such as industrial electroplating vats, grid-scale battery arrays, and lightning research—measure electric charge in Megacoulombs (MC). Conversely, consumer battery capacity for smartphones, wearable sensors, and portable power banks is universally specified in Milliampere-hours (mAh).",
    "Converting from Megacoulombs to Milliampere-hours bridges the gap between fundamental SI charge definitions and practical battery runtime ratings. Because one milliampere-hour equals exactly 3.6 coulombs, one megacoulomb equals approximately 277,777.78 mAh. This guide provides exact conversion formulas, worked examples, common pitfalls, and reference charts."
  ],
  quickAnswer: {
    text: "One Megacoulomb equals approximately 277,777.78 Milliampere-hours (2,500,000 / 9 mAh). To convert Megacoulombs to Milliampere-hours, divide the megacoulomb value by 0.0000036 or multiply by 277,777.78.",
    formulaDisplay: "1 MC = 1,000,000 C / 3.6 C/mAh ≈ 277,777.78 mAh",
    subtext: "Multiply by 277,777.78 to convert Megacoulombs to Milliampere-hours."
  },
  aboutSourceUnit: {
    title: "About the Megacoulomb (MC)",
    text: "The Megacoulomb (symbol: MC) is an SI metric multiple representing one million coulombs (10⁶ C). It corresponds to the flow of one million amperes of current for one second, or 1,000 amperes for 1,000 seconds. It is used in large electrochemical industrial operations, lightning discharge research, and grid utility energy installations."
  },
  aboutTargetUnit: {
    title: "About the Milliampere-hour (mAh)",
    text: "The Milliampere-hour (symbol: mAh or mA·h) is a standard unit of electric charge used globally to quantify portable battery capacity. One milliampere-hour represents the electrical charge transferred by a continuous current of one milliampere flowing for one hour, equivalent to exactly 3.6 coulombs (0.001 A × 3,600 s = 3.6 C)."
  },
  relationship: "Because one milliampere-hour equals 3.6 coulombs, dividing one megacoulomb (1,000,000 coulombs) by 3.6 yields 277,777.7778 milliampere-hours per megacoulomb.",
  relationshipTitle: "Megacoulomb to Milliampere-hour Equivalence",
  relationshipItems: [
    { label: "Megacoulomb (MC) to Milliampere-hour (mAh)", value: "Multiply by 277,777.78 (or divide by 0.0000036)" },
    { label: "Milliampere-hour (mAh) to Megacoulomb (MC)", value: "Multiply by 0.0000036 (or divide by 277,777.78)" },
    { label: "Base Coulomb Reference", value: "1 MC = 1,000,000 C; 1 mAh = 3.6 C" }
  ],
  formula: {
    text: "To convert Megacoulombs (MC) to Milliampere-hours (mAh), multiply by 1,000,000 to convert to coulombs, then divide by 3.6.",
    math: "Charge (mAh) = (Charge (MC) × 1,000,000) / 3.6",
    subtext: "Simplified multiplier: mAh = MC × 277,777.7778"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Smartphone Battery Benchmark Tip",
    text: "A typical high-end smartphone battery has a capacity of around 5,000 mAh. In scientific terms, 5,000 mAh equals 18,000 Coulombs (5,000 × 3.6), which is exactly 0.018 Megacoulombs. A single 1.0 MC charge corresponds to the total capacity of roughly fifty-five 5,000 mAh smartphone batteries."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Solar Generator Battery Bank",
        subtitle: "A commercial solar battery pack stores 0.072 Megacoulombs of electric charge. Express this capacity in Milliampere-hours.",
        steps: [
          "State the given charge: 0.072 MC.",
          "Convert to coulombs: 0.072 × 1,000,000 = 72,000 C.",
          "Divide by coulombs per mAh: 72,000 / 3.6 = 20,000 mAh.",
          "Conclusion: The solar battery pack capacity equals exactly 20,000 mAh (20 Ah)."
        ]
      },
      {
        title: "Example 2: Industrial Drone Power Pod",
        subtitle: "A delivery drone battery module is rated at 0.054 MC. Calculate its capacity in Milliampere-hours.",
        steps: [
          "Given: 0.054 MC.",
          "Apply formula: (0.054 × 10⁶) / 3.6 = 54,000 / 3.6 = 15,000 mAh.",
          "Conclusion: The drone battery has a capacity of exactly 15,000 mAh."
        ]
      }
    ]
  },
  table: {
    title: "Megacoulomb to Milliampere-hour Conversion Table",
    headers: ["Megacoulombs (MC)", "Coulombs (C)", "Milliampere-hours (mAh)", "Representative Device"],
    rows: [
      { fromVal: "0.0036", toVal: "3,600", extra: "1,000", extra2: "Wearable smartwatch battery" },
      { fromVal: "0.0108", toVal: "10,800", extra: "3,000", extra2: "Standard smartphone battery" },
      { fromVal: "0.018", toVal: "18,000", extra: "5,000", extra2: "Flagship mobile phone battery" },
      { fromVal: "0.036", toVal: "36,000", extra: "10,000", extra2: "Compact portable power bank" },
      { fromVal: "0.072", toVal: "72,000", extra: "20,000", extra2: "High-capacity laptop power bank" },
      { fromVal: "0.18", toVal: "180,000", extra: "50,000", extra2: "Electric scooter battery pack" },
      { fromVal: "0.36", toVal: "360,000", extra: "100,000", extra2: "Light electric motorcycle module" },
      { fromVal: "1.0", toVal: "1,000,000", extra: "277,778", extra2: "1 MC industrial energy reference" }
    ]
  },
  expertNote: {
    title: "The 3.6 Factor Decoded",
    text: "Because 1 ampere = 1,000 milliamperes and 1 hour = 3,600 seconds, 1 mAh = (10⁻³ A) × (3,600 s) = 3.6 C. Consequently, any charge value in Megacoulombs that is a multiple of 0.036 yields clean round tens of thousands of mAh."
  },
  applications: {
    title: "Application Domains",
    items: [
      {
        title: "Consumer Electronics Battery Testing",
        text: "Battery test equipment frequently logs coulomb counts from high-frequency current sensors. Converting these measurements into mAh allows engineers to verify manufacturer battery label claims directly."
      },
      {
        title: "Medical Implantable Power Systems",
        text: "Implantable cardiac defibrillators and pacemakers require ultra-precise charge tracking. Bridging scientific coulomb data with microampere and milliampere-hour metrics ensures accurate battery replacement scheduling."
      },
      {
        title: "Portable Energy Storage Products",
        text: "Consumer power banks are sold using mAh ratings. Regulatory compliance testing uses coulomb counters that integrate megacoulomb totals over thousands of charge cycles to evaluate capacity loss."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes",
    items: [
      "Confusing mAh with Wh: Milliampere-hours measure electric charge, not energy. A 10,000 mAh battery at 3.7 V stores 37 Wh, while a 10,000 mAh battery at 12 V stores 120 Wh.",
      "Dividing by 3,600 Instead of 3.6: When converting coulombs to ampere-hours, divide by 3,600. When converting coulombs to milliampere-hours, divide by 3.6 (since milli adds a factor of 1,000).",
      "Prefix Misreading: Never confuse Megacoulombs (MC, 10⁶ C) with Millicoulombs (mC, 10⁻³ C). An incorrect prefix will introduce an error of nine orders of magnitude."
    ]
  },
  faqs: [
    {
      question: "How many Milliampere-hours are in 1 Megacoulomb?",
      answer: "One Megacoulomb equals approximately 277,777.78 Milliampere-hours (1,000,000 / 3.6 mAh)."
    },
    {
      question: "What is the formula to convert Megacoulombs to Milliampere-hours?",
      answer: "The formula is: Milliampere-hours = (Megacoulombs × 1,000,000) / 3.6, or mAh = MC × 277,777.78."
    },
    {
      question: "How do I convert 0.018 MC to mAh?",
      answer: "Multiply 0.018 by 1,000,000 to get 18,000 C, then divide by 3.6: 18,000 / 3.6 = 5,000 mAh."
    },
    {
      question: "How many Coulombs are in 1 mAh?",
      answer: "One Milliampere-hour equals exactly 3.6 Coulombs (0.001 A × 3,600 s = 3.6 C)."
    },
    {
      question: "What is 0.036 MC in mAh?",
      answer: "0.036 MC equals exactly 10,000 mAh (36,000 C / 3.6 = 10,000 mAh)."
    },
    {
      question: "Why is mAh widely used for consumer batteries?",
      answer: "Milliampere-hours provide intuitive numbers for portable electronics that draw milliampere currents. For example, a 3,000 mAh battery can deliver 300 mA for 10 hours."
    },
    {
      question: "What is the relationship between Ah and mAh?",
      answer: "One Ampere-hour (Ah) equals exactly 1,000 Milliampere-hours (mAh)."
    },
    {
      question: "How many smartphone charges is 1 Megacoulomb?",
      answer: "At approximately 5,000 mAh per smartphone battery, 1 Megacoulomb (277,778 mAh) equals roughly 55 full phone recharges."
    }
  ],
  relatedList: [
    { label: "Milliampere-hour to Megacoulomb", from: "milliampere-hour", to: "megacoulomb" },
    { label: "Megacoulomb to Ampere-hour", from: "megacoulomb", to: "ampere-hour" },
    { label: "Megacoulomb to Coulomb", from: "megacoulomb", to: "coulomb" },
    { label: "Megacoulomb to Kilocoulomb", from: "megacoulomb", to: "kilocoulomb" },
    { label: "Megacoulomb to Faraday", from: "megacoulomb", to: "faraday" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI)</em>, 9th edition, 2019.",
    "IEC 61960-3: <em>Secondary cells and batteries containing alkaline or other non-acid electrolytes - Portable secondary lithium cells and batteries</em>.",
    "NIST Special Publication 811: <em>Guide for the Use of the International System of Units (SI)</em>."
  ]
};
