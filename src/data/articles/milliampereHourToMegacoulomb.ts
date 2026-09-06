import { CustomArticleData } from "./types";

export const milliampereHourToMegacoulomb: CustomArticleData = {
  fromUnitId: "milliampere-hour",
  toUnitId: "megacoulomb",
  seoTitle: "Milliampere-hour to Megacoulomb Converter - mAh to MC",
  metaDescription: "Convert milliampere-hours to megacoulombs (mAh to MC) with precision. Learn the 3.6 × 10⁻⁶ scaling rule, grid-scale energy modeling, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/milliampere-hour-to-megacoulomb",
  h1: "Milliampere-hour to Megacoulomb Converter",
  introduction: [
    "Converting milliampere-hours (mAh) to megacoulombs (MC) bridges the vast dimensional divide between miniature consumer battery cells and utility-scale charge transport. While single lithium-ion cells in smartphones and portable electronics are specified in thousands of milliampere-hours, grid-level Battery Energy Storage Systems (BESS) and electrochemical manufacturing plants deal with millions of coulombs.",
    "Understanding how thousands of individual battery cells aggregate into megacoulomb-scale installations is critical for energy engineers, electrical grid modelers, and battery factory designers. This engineering converter and comprehensive technical guide provides the exact mathematical formulas, scientific notation conversions, and worked real-world examples."
  ],
  quickAnswer: {
    text: "To convert milliampere-hours to megacoulombs, multiply the milliampere-hour value by 0.0000036 (or 3.6 × 10⁻⁶), or divide by 277,778. For example, 1,000,000 mAh (1,000 Ah) equals exactly 3.6 megacoulombs (3.6 MC).",
    formulaDisplay: "Charge (MC) = Charge (mAh) × 3.6 × 10⁻⁶",
    subtext: "1 milliampere-hour equals 0.0000036 megacoulombs (3.6 µC)."
  },
  aboutSourceUnit: {
    title: "About the Milliampere-hour (mAh)",
    text: "The milliampere-hour (symbol: mAh or mA·h) is a metric unit of electric charge representing one-thousandth of an ampere-hour (10⁻³ Ah). It corresponds to the total charge delivered by a current of one milliampere (0.001 A) sustained over one hour (3,600 seconds), equivalent to exactly 3.6 coulombs. It is the international standard for rating small rechargeable batteries."
  },
  aboutTargetUnit: {
    title: "About the Megacoulomb (MC)",
    text: "The megacoulomb (symbol: MC) is a decimal multiple of the SI base derived unit of electric charge, equal to one million coulombs (10⁶ C). One megacoulomb represents the charge transferred by a continuous current of one million amperes flowing for one second (10⁶ A·s), or approximately 6.2415 × 10²⁴ elementary charges. It is used in large-scale electrochemistry, grid-scale energy storage, and particle accelerator physics."
  },
  relationship: "The relationship between milliampere-hours and megacoulombs is derived from the conversion to base coulombs: 1 mAh = 3.6 C. Since 1 MC = 1,000,000 C (10⁶ C), dividing 3.6 C by 1,000,000 yields 0.0000036 MC (3.6 × 10⁻⁶ MC). Conversely, one megacoulomb contains approximately 277,778 milliampere-hours.",
  relationshipTitle: "Scale Comparison and Mathematical Relationship",
  relationshipItems: [
    { label: "Milliampere-hours (mAh) to Megacoulombs (MC)", value: "Multiply by 0.0000036 (or 3.6 × 10⁻⁶)" },
    { label: "Megacoulombs (MC) to Milliampere-hours (mAh)", value: "Multiply by ~277,777.78" },
    { label: "One Megacoulomb Baseline", value: "1 MC = 1,000,000 C = 277.78 Ah = 277,778 mAh" },
    { label: "One Million mAh Benchmark", value: "1,000,000 mAh = 1,000 Ah = 3.6 MC" }
  ],
  formula: {
    text: "To convert electric charge from milliampere-hours into megacoulombs, multiply the number of milliampere-hours by 3.6 × 10⁻⁶.",
    math: "Charge (MC) = Charge (mAh) × 3.6 × 10⁻⁶ = Charge (mAh) ÷ 277,777.78",
    subtext: "To convert megacoulombs back to milliampere-hours: Charge (mAh) = Charge (MC) ÷ (3.6 × 10⁻⁶)"
  },
  formulaTitle: "The Conversion Equation",
  practicalTip: {
    title: "Convert via Ampere-hours First",
    text: "To avoid managing multiple leading zeros in calculations, convert mAh to Ah first (divide by 1,000), then multiply Ah by 0.0036 to obtain megacoulombs: for 500,000 mAh → 500 Ah → 500 × 0.0036 = 1.8 MC."
  },
  examples: {
    title: "Step-by-Step Worked Calculation Examples",
    items: [
      {
        title: "Example 1: Utility Battery Storage Module Aggregation",
        subtitle: "A commercial battery rack consists of 200 individual lithium-iron-phosphate cells connected in parallel, each rated at 5,000 mAh. Calculate the total charge capacity of the rack in megacoulombs.",
        steps: [
          "Calculate total mAh capacity: 200 cells × 5,000 mAh = 1,000,000 mAh.",
          "Apply the conversion formula: MC = mAh × (3.6 × 10⁻⁶).",
          "Calculate: 1,000,000 × 0.0000036 = 3.6.",
          "Conclusion: The battery rack stores exactly 3.6 megacoulombs (3.6 MC)."
        ]
      },
      {
        title: "Example 2: Portable Power Station Fleet Evaluation",
        subtitle: "A warehouse stores 50 portable power stations, each with an internal battery pack capacity of 80,000 mAh. Express their combined charge in megacoulombs.",
        steps: [
          "Find total capacity in mAh: 50 × 80,000 mAh = 4,000,000 mAh.",
          "Convert to Ah: 4,000,000 ÷ 1,000 = 4,000 Ah.",
          "Convert to MC: 4,000 × 0.0036 = 14.4.",
          "Conclusion: The fleet stores 14.4 megacoulombs of electric charge."
        ]
      },
      {
        title: "Example 3: Electric Vehicle Pack Charge Sizing",
        subtitle: "An electric city delivery van pack has a capacity equivalent to 150,000 mAh. Convert this to megacoulombs.",
        steps: [
          "Identify value: Q = 150,000 mAh.",
          "Calculate: 150,000 × 0.0000036 = 0.54.",
          "Conclusion: 150,000 mAh equals 0.54 MC (540 kC)."
        ]
      }
    ]
  },
  table: {
    title: "Milliampere-hour to Megacoulomb Quick Reference Table",
    headers: ["Milliampere-hours (mAh)", "Megacoulombs (MC)", "Kilocoulombs (kC)", "Engineering Context"],
    rows: [
      { fromVal: "10,000 mAh", toVal: "0.036 MC", extra: "36 kC", extra2: "Standard USB power bank" },
      { fromVal: "50,000 mAh", toVal: "0.18 MC", extra: "180 kC", extra2: "Heavy-duty outdoor power pack" },
      { fromVal: "100,000 mAh", toVal: "0.36 MC", extra: "360 kC", extra2: "Electric moped / e-scooter battery" },
      { fromVal: "250,000 mAh", toVal: "0.90 MC", extra: "900 kC", extra2: "Residential solar backup module" },
      { fromVal: "500,000 mAh", toVal: "1.80 MC", extra: "1,800 kC", extra2: "Commercial telecom backup bank" },
      { fromVal: "1,000,000 mAh", toVal: "3.60 MC", extra: "3,600 kC", extra2: "1,000 Ah industrial battery bank" },
      { fromVal: "2,500,000 mAh", toVal: "9.00 MC", extra: "9,000 kC", extra2: "Light commercial EV battery pack" },
      { fromVal: "5,000,000 mAh", toVal: "18.00 MC", extra: "18,000 kC", extra2: "Electric city bus energy pack" },
      { fromVal: "10,000,000 mAh", toVal: "36.00 MC", extra: "36,000 kC", extra2: "Containerized 10,000 Ah BESS system" },
      { fromVal: "50,000,000 mAh", toVal: "180.00 MC", extra: "180,000 kC", extra2: "Substation grid stabilization facility" }
    ]
  },
  expertNote: {
    title: "Bridging Cell-Level Specifications with Grid-Level Physics",
    text: "Battery manufacturers test individual cylindrical and pouch cells in milliampere-hours on automated formation cyclers. When these cells are packaged into megawatt-hour grid storage installations, grid operators and electrochemical modelers convert total throughput to megacoulombs to model cumulative electrode chemical flux and state-of-health (SoH) degradation over decades of service."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Utility-Scale Battery Energy Storage Systems (BESS)",
        text: "Grid engineers modeling mega-installations convert cell-level mAh specs into megacoulombs to compute total charge transfer during frequency-regulation dispatch cycles."
      },
      {
        title: "Battery Gigafactory Cell Formation Telemetry",
        text: "Automated formation and aging lines cycle hundreds of thousands of cells simultaneously. Data aggregation servers convert individual cell mAh logs into megacoulombs to monitor plant-wide chemical throughput."
      },
      {
        title: "Industrial Metal Smelting and Electro-Refining",
        text: "Large-scale aluminum smelting and copper electrowinning facilities draw millions of amperes. Quantifying total daily charge in megacoulombs correlates directly with metal tonnage deposited per Faraday's law."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Losing track of decimal places: Because the multiplier is 0.0000036 (six decimal places), manual calculations are prone to orders-of-magnitude errors without scientific notation.",
      "Confusing megacoulombs (MC) with millicoulombs (mC): Capital 'M' denotes mega (10⁶), whereas lowercase 'm' denotes milli (10⁻³)—a difference of nine orders of magnitude (10⁹).",
      "Treating charge as stored energy: Converting mAh to MC yields electric charge, not energy. Multiplying megacoulombs by average voltage yields energy in megajoules (1 MJ = 1 MC·V).",
      "Overlooking battery degradation: Quoting nominal cell mAh ratings across large packs ignores capacity fading, causing real-world megacoulomb delivery to decline over time."
    ]
  },
  faqs: [
    {
      question: "How do I convert milliampere-hours to megacoulombs?",
      answer: "To convert milliampere-hours (mAh) to megacoulombs (MC), multiply the mAh value by 0.0000036 (3.6 × 10⁻⁶), or divide by 277,778. For example, 1,000,000 mAh × 0.0000036 = 3.6 MC."
    },
    {
      question: "How many megacoulombs is 1,000,000 mAh?",
      answer: "1,000,000 mAh (which equals 1,000 Ah) is equal to exactly 3.6 megacoulombs (3.6 MC)."
    },
    {
      question: "What is 10,000,000 mAh in megacoulombs?",
      answer: "10,000,000 mAh equals exactly 36.0 megacoulombs (36 MC)."
    },
    {
      question: "How many milliampere-hours are in 1 megacoulomb?",
      answer: "One megacoulomb contains approximately 277,778 milliampere-hours (1,000,000 ÷ 3.6 ≈ 277,777.78 mAh, or 277.78 Ah)."
    },
    {
      question: "How do I convert megacoulombs back to milliampere-hours?",
      answer: "To convert megacoulombs back to milliampere-hours, multiply the megacoulomb value by 277,777.78 (or divide by 3.6 × 10⁻⁶). For instance, 2 MC × 277,777.78 ≈ 555,556 mAh."
    },
    {
      question: "What is the difference between MC and mC?",
      answer: "MC stands for megacoulomb (1,000,000 C or 10⁶ C), while mC stands for millicoulomb (0.001 C or 10⁻³ C). Capitalization represents a one-billion-fold difference."
    },
    {
      question: "What is 500,000 mAh in megacoulombs?",
      answer: "500,000 mAh equals 1.8 MC (1,800 kC)."
    },
    {
      question: "Why do grid storage engineers use megacoulombs?",
      answer: "Grid-scale battery systems move millions of coulombs of charge daily. Expressing these enormous figures in megacoulombs simplifies system-level mathematical modeling."
    },
    {
      question: "How many coulombs are in one megacoulomb?",
      answer: "There are exactly 1,000,000 (one million) coulombs in one megacoulomb."
    }
  ],
  relatedList: [
    { label: "Milliampere-hour to Kilocoulomb", from: "milliampere-hour", to: "kilocoulomb" },
    { label: "Milliampere-hour to Coulomb", from: "milliampere-hour", to: "coulomb" },
    { label: "Milliampere-hour to Ampere-hour", from: "milliampere-hour", to: "ampere-hour" },
    { label: "Kilocoulomb to Megacoulomb", from: "kilocoulomb", to: "megacoulomb" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units</em>.",
    "Whittingham, M. S. <em>Lithium Batteries and Cathode Materials</em>. Chemical Reviews."
  ]
};
