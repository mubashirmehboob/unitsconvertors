import { CustomArticleData } from "./types";

export const kilojouleToJoule: CustomArticleData = {
  fromUnitId: "kilojoule",
  toUnitId: "joule",
  seoTitle: "Kilojoule to Joule Converter (kJ to J)",
  metaDescription: "Convert kilojoules to Joules (kJ to J) with exact SI precision. Learn the conversion factor, formula, step-by-step examples, tables, and FAQs.",
  h1: "Kilojoule to Joule Converter",
  introduction: [
    "The kilojoule (kJ) and the Joule (J) are standard metric units of work, thermal energy, and mechanical energy defined within the International System of Units (SI). While kilojoules are widely used on global food nutrition panels, HVAC engineering reports, and chemistry tables, the base Joule is required for fundamental scientific equations, physics modeling, and electrical calculations.",
    "Converting kilojoules to Joules is straightforward because both units belong to the decimal metric system. Since the SI prefix 'kilo-' denotes a factor of exactly 1,000, one kilojoule contains exactly 1,000 Joules. Converting kJ to J simply requires multiplying the kilojoule value by 1,000 or moving the decimal point three places to the right.",
    "This comprehensive guide details the mathematical formula, provides manual step-by-step calculation examples, presents a complete conversion lookup table, explains real-world scientific applications, and addresses common measurement questions."
  ],
  quickAnswer: {
    text: "To convert kilojoules to Joules, multiply the energy value in kilojoules by 1,000. For example, 2.5 kilojoules equals 2,500 Joules, and 50 kilojoules equals 50,000 Joules.",
    formulaDisplay: "J = kJ × 1,000",
    subtext: "One kilojoule is equal to exactly 1,000 Joules."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilojoule (kJ)",
    text: "The kilojoule (symbol: kJ) is a decimal multiple of the Joule, defined as 1,000 Joules (10³ J). Widely adopted across international food labeling standards (in Europe, Australia, and Asia), chemical thermodynamics tables, and thermal engineering reports, the kilojoule provides a convenient scale for expressing everyday energy quantities."
  },
  aboutTargetUnit: {
    title: "Understanding the Joule (J)",
    text: "Named after the English physicist James Prescott Joule, the Joule (symbol: J) is the fundamental derived SI unit for energy, work, and heat. Defined in classical mechanics as 1 Newton applied across 1 meter (1 J = 1 N·m = 1 kg·m²/s²), or in electrical terms as 1 Watt flowing for 1 second (1 W·s), the Joule is the universal metric unit used in scientific research."
  },
  relationship: "The relationship between kilojoules and Joules is exact by SI metric definition: 1 kJ = 1,000 J exactly. No empirical constants or rounding factors are required.",
  relationshipTitle: "Kilojoule vs Joule Scale Comparison",
  relationshipItems: [
    { label: "0.001 kJ", value: "1 J (Minimal mechanical work / lifting 1 apple 1m)" },
    { label: "0.1 kJ", value: "100 J (Single human heartbeat work)" },
    { label: "1 kJ", value: "1,000 J (100W light bulb running for 10 seconds)" },
    { label: "4.184 kJ", value: "4,184 J (1 food Calorie / kilocalorie)" },
    { label: "1,000 kJ", value: "1,000,000 J (1 Megajoule / 1 MJ)" }
  ],
  formula: {
    text: "Multiply the energy value in kilojoules by 1,000 to determine the equivalent in Joules.",
    math: "J = kJ * 1000",
    subtext: "To convert Joules back to kilojoules, divide the Joule value by 1,000."
  },
  formulaTitle: "Kilojoule to Joule Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Shortcut",
    text: "To convert kJ to J instantly, shift the decimal point three positions to the right (e.g., 4.2 kJ becomes 4,200 J)."
  },
  expertNote: {
    title: "SI Coherence",
    text: "In scientific formulas such as E = ½mv² or Q = mcΔT, all inputs must be converted to base SI units (Joules) rather than multiples (kilojoules) to maintain mathematical consistency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Nutritional Labeling to Physics Input",
        subtitle: "Convert a snack energy content of 8.368 kilojoules into Joules.",
        steps: [
          "Identify the energy in kilojoules: 8.368 kJ.",
          "Apply the formula: J = 8.368 × 1,000.",
          "Calculate: 8.368 × 1,000 = 8,368.",
          "Result: 8.368 kJ equals exactly 8,368 Joules."
        ]
      },
      {
        title: "Example 2: Enthalpy Reaction Energy",
        subtitle: "Convert a chemical enthalpy release of 45 kilojoules to Joules.",
        steps: [
          "Identify the energy: 45 kJ.",
          "Multiply by 1,000: 45 × 1,000 = 45,000.",
          "Result: 45 kJ equals 45,000 J."
        ]
      },
      {
        title: "Example 3: Solar Array Energy Harvest",
        subtitle: "Convert a daily solar collector yield of 1,200 kilojoules into Joules.",
        steps: [
          "Identify the energy: 1,200 kJ.",
          "Multiply by 1,000: 1,200 × 1,000 = 1,200,000.",
          "Result: 1,200 kJ equals 1,200,000 J (1.2 Megajoules)."
        ]
      }
    ]
  },
  table: {
    title: "Kilojoule to Joule Conversion Table",
    headers: ["Kilojoules (kJ)", "Joules (J)", "Scientific / Real-World Context"],
    rows: [
      { fromVal: "0.001 kJ", toVal: "1 J", extra: "Lifting 100 grams up by 1 meter" },
      { fromVal: "0.01 kJ", toVal: "10 J", extra: "10 Watt-seconds of power" },
      { fromVal: "0.1 kJ", toVal: "100 J", extra: "Energy in a single human heartbeat" },
      { fromVal: "0.5 kJ", toVal: "500 J", extra: "0.5 Newton-kilometers of work" },
      { fromVal: "1 kJ", toVal: "1,000 J", extra: "Base kilojoule unit (1,000 J)" },
      { fromVal: "2.5 kJ", toVal: "2,500 J", extra: "Camera flash discharge" },
      { fromVal: "4.184 kJ", toVal: "4,184 J", extra: "1 thermochemical kilocalorie (1 kcal)" },
      { fromVal: "10 kJ", toVal: "10,000 J", extra: "Energy burned in 1 minute of light walking" },
      { fromVal: "50 kJ", toVal: "50,000 J", extra: "Kinetic energy of a sprinting athlete" },
      { fromVal: "100 kJ", toVal: "100,000 J", extra: "Heat released burning 2.5g of fuel" },
      { fromVal: "1,000 kJ", toVal: "1,000,000 J", extra: "1 Megajoule (MJ)" }
    ]
  },
  applications: {
    title: "Applications of kJ to J Conversion",
    items: [
      {
        title: "Physical Chemistry & Physics Calculations",
        text: "Thermochemistry tables record standard enthalpy of formation in kJ/mol. When substituting values into kinetic or thermodynamic equations, researchers convert kJ to Joules."
      },
      {
        title: "Dietary Science & Human Physiology",
        text: "Exercise physiologists convert respiratory gas analysis data from kilojoules into Joules to calculate precise mechanical efficiency during treadmill stress tests."
      },
      {
        title: "HVAC & Thermal Systems Engineering",
        text: "Engineers auditing chiller or boiler heat exchangers convert overall heat transfer rates from kilojoules per second (kW) into Joules for micro-level fluid dynamic simulations."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000 instead of multiplying: Kilojoules are larger units than Joules, so the numeric value in Joules must be larger.",
      "Misplacing the decimal point: Ensure you shift the decimal point three positions to the right when converting from kJ to J.",
      "Confusing kilojoules with kilocalories: 1 kJ = 1,000 J, whereas 1 kcal = 4,184 J."
    ]
  },
  faqs: [
    {
      question: "How many Joules are in 1 kilojoule?",
      answer: "There are exactly 1,000 Joules in 1 kilojoule."
    },
    {
      question: "What is the formula to convert kJ to J?",
      answer: "The formula is: J = kJ × 1,000."
    },
    {
      question: "Is 4.184 kJ equal to 4,184 Joules?",
      answer: "Yes, exactly. 4.184 × 1,000 = 4,184 Joules, which equals 1 food Calorie (kcal)."
    },
    {
      question: "How do I convert Joules back to kilojoules?",
      answer: "To convert Joules to kilojoules, divide the Joule value by 1,000 (e.g., 25,000 J ÷ 1,000 = 25 kJ)."
    },
    {
      question: "Is kilojoule an official SI unit?",
      answer: "Yes. The Joule is the derived SI unit for energy, and the kilojoule is an official decimal multiple using the standard SI prefix 'kilo-'."
    },
    {
      question: "How many Joules are in 1 Megajoule (MJ)?",
      answer: "There are 1,000,000 Joules (or 1,000 kilojoules) in 1 Megajoule."
    }
  ],
  relatedList: [
    { label: "Joule to Kilojoule", from: "joule", to: "kilojoule" },
    { label: "Joule to Calorie", from: "joule", to: "calorie" },
    { label: "Joule to Kilocalorie", from: "joule", to: "kilocalorie" },
    { label: "Joule to Watt Hour", from: "joule", to: "watt-hour" },
    { label: "Joule to Kilowatt Hour", from: "joule", to: "kilowatt-hour" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
