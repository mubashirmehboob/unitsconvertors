import { CustomArticleData } from "./types";

export const megacoulombToAmpereHour: CustomArticleData = {
  fromUnitId: "megacoulomb",
  toUnitId: "ampere-hour",
  seoTitle: "Megacoulomb to Ampere-hour Converter (MC to Ah) | UnitsConvertors",
  metaDescription: "Convert Megacoulombs to Ampere-hours (MC to Ah) with exact formulas. Explore battery storage calculations, electrochemistry charge scaling, and conversion tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/electric-charge/megacoulomb-to-ampere-hour",
  h1: "Megacoulomb to Ampere-hour Converter",
  introduction: [
    "Electrical power engineers and electrochemists regularly translate charge measurements between physical scientific units and practical industrial metrics. While fundamental physics formulas and electro-winning research express electric charge in Megacoulombs (MC), battery manufacturers, grid energy storage integrators, and electric vehicle designers specify capacity in Ampere-hours (Ah).",
    "Converting from Megacoulombs to Ampere-hours requires accounting for the conversion from seconds to hours (3,600 seconds per hour). Because one ampere-hour equals exactly 3,600 coulombs, one megacoulomb equals approximately 277.78 ampere-hours. This guide details the mathematical derivation, worked conversion examples, battery sizing scenarios, and reference tables."
  ],
  quickAnswer: {
    text: "One Megacoulomb equals approximately 277.78 Ampere-hours (2500/9 Ah). To convert Megacoulombs to Ampere-hours, divide the megacoulomb value by 0.0036 or multiply by 277.7778.",
    formulaDisplay: "1 MC = 1,000,000 C / 3,600 s ≈ 277.78 Ah",
    subtext: "Multiply by 277.7778 to convert Megacoulombs to Ampere-hours."
  },
  aboutSourceUnit: {
    title: "About the Megacoulomb (MC)",
    text: "The Megacoulomb (symbol: MC) is an SI metric multiple representing one million coulombs (10⁶ C). It represents the charge delivered by a steady current of one million amperes flowing for one second. It is commonly used in high-energy physics, heavy chemical electrolysis, and utility substation transient analysis."
  },
  aboutTargetUnit: {
    title: "About the Ampere-hour (Ah)",
    text: "The Ampere-hour (symbol: Ah or A·h) is a non-SI unit of electric charge widely used in electrochemistry and battery manufacturing. One ampere-hour represents the total charge accumulated when a steady current of one ampere flows for one hour, equivalent to exactly 3,600 coulombs (1 A × 3,600 s = 3,600 C)."
  },
  relationship: "One megacoulomb corresponds to 1,000,000 ampere-seconds. Dividing by 3,600 seconds per hour yields 277.7778 ampere-hours per megacoulomb.",
  relationshipTitle: "Megacoulomb to Ampere-hour Relationship",
  relationshipItems: [
    { label: "Megacoulomb (MC) to Ampere-hour (Ah)", value: "Multiply by 277.7778 (or divide by 0.0036)" },
    { label: "Ampere-hour (Ah) to Megacoulomb (MC)", value: "Multiply by 0.0036 (or divide by 277.7778)" },
    { label: "Exact Fraction", value: "1 MC = 2,500 / 9 Ah = 277.777... Ah" }
  ],
  formula: {
    text: "To convert Megacoulombs (MC) to Ampere-hours (Ah), multiply by 1,000,000 to convert to coulombs, then divide by 3,600.",
    math: "Charge (Ah) = (Charge (MC) × 1,000,000) / 3,600",
    subtext: "Simplified multiplier: Ah = MC × 277.777778"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Battery Pack C-Rate Sizing Tip",
    text: "When evaluating battery capacity from scientific reports quoting megacoulombs, converting to ampere-hours allows direct calculation of discharge rates. For example, a 1.0 MC battery pack provides 277.78 Ah. Discharging this pack at a 1C rate corresponds to a continuous output of 277.78 amperes for one hour."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Utility Battery Energy Storage Sizing",
        subtitle: "A grid-level battery module is recorded as having delivered 0.72 Megacoulombs of electric charge. What is its capacity in Ampere-hours?",
        steps: [
          "State the given charge: 0.72 MC.",
          "Convert to coulombs: 0.72 × 1,000,000 = 720,000 C.",
          "Divide by seconds in an hour: 720,000 / 3,600 = 200 Ah.",
          "Conclusion: The battery module delivered exactly 200 Ampere-hours."
        ]
      },
      {
        title: "Example 2: Electric Bus Fast Charging Session",
        subtitle: "An automated pantograph charging station transfers 0.36 Megacoulombs into a transit bus battery. Convert this to Ampere-hours.",
        steps: [
          "Given: 0.36 MC.",
          "Apply formula: 0.36 × 277.7778 = 100 Ah.",
          "Check via coulombs: (0.36 × 10⁶) / 3,600 = 360,000 / 3,600 = 100 Ah.",
          "Conclusion: The fast charging session transferred exactly 100 Ah."
        ]
      }
    ]
  },
  table: {
    title: "Megacoulomb to Ampere-hour Conversion Table",
    headers: ["Megacoulombs (MC)", "Coulombs (C)", "Ampere-hours (Ah)", "Typical Engineering System"],
    rows: [
      { fromVal: "0.018", toVal: "18,000", extra: "5", extra2: "Heavy drone flight pack" },
      { fromVal: "0.036", toVal: "36,000", extra: "10", extra2: "Home energy storage module" },
      { fromVal: "0.18", toVal: "180,000", extra: "50", extra2: "Commercial delivery van battery" },
      { fromVal: "0.36", toVal: "360,000", extra: "100", extra2: "Long-range EV battery pack" },
      { fromVal: "0.72", toVal: "720,000", extra: "200", extra2: "Commercial truck propulsion battery" },
      { fromVal: "1.0", toVal: "1,000,000", extra: "277.78", extra2: "1 MC electrochemical baseline" },
      { fromVal: "1.8", toVal: "1,800,000", extra: "500", extra2: "Electric locomotive battery buffer" },
      { fromVal: "3.6", toVal: "3,600,000", extra: "1,000", extra2: "Substation utility energy block" }
    ]
  },
  expertNote: {
    title: "The 3.6 Conversion Multiplier",
    text: "Because there are 3,600 seconds in an hour, multiples of 0.36 or 3.6 Megacoulombs convert into clean, round numbers of Ampere-hours: exactly 100 Ah for 0.36 MC, and exactly 1,000 Ah for 3.6 MC. Remembering the 3.6 factor makes mental verification effortless."
  },
  applications: {
    title: "Engineering Applications",
    items: [
      {
        title: "Electric Vehicle Battery Modeling",
        text: "Battery management systems (BMS) integrate sensor currents over time in coulombs and megacoulombs, converting to ampere-hours to display remaining driving range and state of charge (SOC)."
      },
      {
        title: "Industrial Chlor-Alkali & Hydrogen Plants",
        text: "Hydrogen generation through water electrolysis requires tracking massive charge flows. Converting power supply megacoulombs into ampere-hours allows facility operators to correlate current usage with volumetric gas production."
      },
      {
        title: "Renewable Microgrid Optimization",
        text: "Balancing solar photovoltaic current with battery storage requires converting scientific charge measurements into ampere-hours to calculate commercial storage lifespan and depth-of-discharge (DOD)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Forgetting the 3,600 Factor: Simply multiplying by 1,000,000 converts to coulombs (A·s), not ampere-hours (A·h). You must divide by 3,600 to account for seconds per hour.",
      "Rounding Too Early: Using 277 or 278 instead of 277.7778 produces significant errors when converting multi-megacoulomb energy storage quantities.",
      "Confusing Ampere-hours with Watt-hours: Ampere-hours measure electric charge (current × time). Watt-hours measure electrical energy (charge × voltage). Always multiply Ah by nominal voltage to obtain Wh."
    ]
  },
  faqs: [
    {
      question: "How many Ampere-hours are in 1 Megacoulomb?",
      answer: "One Megacoulomb equals approximately 277.78 Ampere-hours (10⁶ / 3,600 Ah = 2500/9 Ah)."
    },
    {
      question: "What is the formula to convert Megacoulombs to Ampere-hours?",
      answer: "The formula is: Ampere-hours = (Megacoulombs × 1,000,000) / 3,600, which simplifies to Ah = MC × 277.7778."
    },
    {
      question: "What is 0.36 Megacoulombs in Ampere-hours?",
      answer: "0.36 MC equals exactly 100 Ampere-hours (360,000 Coulombs / 3,600 = 100 Ah)."
    },
    {
      question: "Why divide by 3,600 when converting Coulombs to Ampere-hours?",
      answer: "One Coulomb is one Ampere-second (A·s). Because there are 3,600 seconds in an hour, dividing coulombs by 3,600 converts ampere-seconds into ampere-hours."
    },
    {
      question: "How many Megacoulombs are in a 100 Ah battery?",
      answer: "A 100 Ah battery stores 360,000 Coulombs of charge, which equals exactly 0.36 Megacoulombs."
    },
    {
      question: "What is 3.6 MC in Ah?",
      answer: "3.6 MC equals exactly 1,000 Ampere-hours (3,600,000 C / 3,600 = 1,000 Ah)."
    },
    {
      question: "What is the difference between Ah and mAh?",
      answer: "One Ampere-hour (Ah) contains 1,000 Milliampere-hours (mAh). Thus, 1 MC equals 277.78 Ah, or 277,778 mAh."
    },
    {
      question: "Is Ampere-hour an official SI unit?",
      answer: "No. The Ampere-hour is not an SI coherent unit, but it is an accepted non-SI unit widely used in commercial battery and transportation standards."
    }
  ],
  relatedList: [
    { label: "Ampere-hour to Megacoulomb", from: "ampere-hour", to: "megacoulomb" },
    { label: "Megacoulomb to Coulomb", from: "megacoulomb", to: "coulomb" },
    { label: "Megacoulomb to Milliampere-hour", from: "megacoulomb", to: "milliampere-hour" },
    { label: "Megacoulomb to Kilocoulomb", from: "megacoulomb", to: "kilocoulomb" },
    { label: "Megacoulomb to Faraday", from: "megacoulomb", to: "faraday" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI)</em>, 9th edition, 2019.",
    "IEC 60050: <em>International Electrotechnical Vocabulary - Secondary cells and batteries</em>.",
    "IEEE Standard 485: <em>Recommended Practice for Sizing Lead-Acid Batteries for Stationary Applications</em>."
  ]
};
