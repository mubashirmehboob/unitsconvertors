import { CustomArticleData } from "./types";

export const jouleToKilojoule: CustomArticleData = {
  fromUnitId: "joule",
  toUnitId: "kilojoule",
  seoTitle: "Joule to Kilojoule Converter (J to kJ)",
  metaDescription: "Convert Joules to kilojoules (J to kJ) with precise SI accuracy. Learn the conversion factor, step-by-step math, reference tables, and FAQs.",
  h1: "Joule to Kilojoule Converter",
  introduction: [
    "The Joule (J) and kilojoule (kJ) are standard units of energy, work, and heat in the International System of Units (SI). While the Joule measures basic mechanical work or heat transfer at a fundamental scale, the kilojoule is used to express larger quantities, such as food energy values on nutritional labels, industrial heating loads, and mechanical engine outputs.",
    "Because both units belong to the metric system, converting Joules to kilojoules is direct and exact. One kilojoule consists of exactly 1,000 Joules. Converting J to kJ simply requires dividing the value in Joules by 1,000 or shifting the decimal point three places to the left.",
    "This reference guide provides the mathematical formula, manual step-by-step calculations, a detailed conversion lookup table, practical scientific applications, and solutions to common conversion errors."
  ],
  quickAnswer: {
    text: "To convert Joules to kilojoules, divide the energy value in Joules by 1,000. For example, 2,500 Joules equals 2.5 kilojoules, and 50,000 Joules equals 50 kilojoules.",
    formulaDisplay: "kJ = J ÷ 1,000",
    subtext: "One Joule is equal to exactly 0.001 kilojoule."
  },
  aboutSourceUnit: {
    title: "Understanding the Joule (J)",
    text: "Named after the English physicist James Prescott Joule, the Joule (symbol: J) is the derived SI unit of energy, work, and heat. One Joule is defined as the work done when a force of one Newton moves an object through a distance of one meter in the direction of the force (1 J = 1 N·m = 1 kg·m²/s²). It is also equal to the energy dissipated as heat when an electric current of one ampere passes through a resistance of one ohm for one second."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilojoule (kJ)",
    text: "The kilojoule (symbol: kJ) is a decimal multiple of the Joule, equal to 1,000 Joules (10³ J). The SI prefix 'kilo-' signifies a factor of one thousand. Kilojoules are widely used globally in nutritional science, biochemistry, thermodynamics, and HVAC engineering to express metabolic energy intake and thermal capacities without using excessively large numbers."
  },
  relationship: "The relationship between Joules and kilojoules is fixed by SI metric definition: 1 kJ = 1,000 J, or 1 J = 0.001 kJ. This conversion involves zero rounding error or empirical approximation.",
  relationshipTitle: "Joule vs Kilojoule Scale Comparison",
  relationshipItems: [
    { label: "1 J", value: "0.001 kJ (Lifting a small apple 1 meter)" },
    { label: "100 J", value: "0.1 kJ (Energy of a light hand clap)" },
    { label: "1,000 J", value: "1 kJ (Energy released by a 100W light bulb in 10 seconds)" },
    { label: "4,184 J", value: "4.184 kJ (Energy to heat 1 gram of water by 1°C × 1,000 = 1 kcal)" },
    { label: "1,000,000 J", value: "1,000 kJ (Kinetic energy of a 1.2-ton car at 140 km/h)" }
  ],
  formula: {
    text: "Divide the energy value in Joules by 1,000 to determine the equivalent in kilojoules.",
    math: "kJ = J / 1000",
    subtext: "To convert kilojoules back to Joules, multiply the kJ value by 1,000."
  },
  formulaTitle: "Joule to Kilojoule Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Rule",
    text: "Because 'kilo' means one thousand, move the decimal point three places to the left to convert Joules to kilojoules (e.g., 8,400 J becomes 8.4 kJ)."
  },
  expertNote: {
    title: "Thermodynamic Standardization",
    text: "Under ISO 80000-5 definitions, express thermal energy measurements in kilojoules or megajoules when documenting system enthalpy or calorimetry, as raw Joules often result in inconveniently long digits."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Nutritional Energy Calculation",
        subtitle: "Convert 8,368 Joules of dietary energy into kilojoules.",
        steps: [
          "Identify the energy in Joules: 8,368 J.",
          "Apply the formula: kJ = J ÷ 1,000.",
          "Calculate: 8,368 ÷ 1,000 = 8.368.",
          "Result: 8,368 J equals exactly 8.368 kJ (equivalent to 2 kcal)."
        ]
      },
      {
        title: "Example 2: Physics Lab Kinetic Energy",
        subtitle: "Convert 45,000 Joules of kinetic energy to kilojoules.",
        steps: [
          "Identify the energy: 45,000 J.",
          "Divide by 1,000: 45,000 ÷ 1,000 = 45.",
          "Result: 45,000 J equals 45 kJ."
        ]
      },
      {
        title: "Example 3: Solar Radiation Absorption",
        subtitle: "Convert 1,200 Joules of absorbed light energy into kilojoules.",
        steps: [
          "Identify the energy: 1,200 J.",
          "Divide by 1,000: 1,200 ÷ 1,000 = 1.2.",
          "Result: 1,200 J equals 1.2 kJ."
        ]
      }
    ]
  },
  table: {
    title: "Joule to Kilojoule Conversion Table",
    headers: ["Joules (J)", "Kilojoules (kJ)", "Real-World Equivalent"],
    rows: [
      { fromVal: "1 J", toVal: "0.001 kJ", extra: "Lifting a small apple up by 1 meter" },
      { fromVal: "10 J", toVal: "0.01 kJ", extra: "Energy of a gentle basketball bounce" },
      { fromVal: "100 J", toVal: "0.1 kJ", extra: "Work performed in a single human heartbeat" },
      { fromVal: "500 J", toVal: "0.5 kJ", extra: "Impact energy of a dropped bowling ball" },
      { fromVal: "1,000 J", toVal: "1 kJ", extra: "1 Watt of power delivered for 1,000 seconds" },
      { fromVal: "2,500 J", toVal: "2.5 kJ", extra: "Small camera flash tube output" },
      { fromVal: "4,184 J", toVal: "4.184 kJ", extra: "Exactly 1 food Calorie (kcal)" },
      { fromVal: "10,000 J", toVal: "10 kJ", extra: "Energy burned in 1 minute of light walking" },
      { fromVal: "50,000 J", toVal: "50 kJ", extra: "Kinetic energy of a sprinting athlete" },
      { fromVal: "100,000 J", toVal: "100 kJ", extra: "Heat energy released burning 2.5g of gasoline" },
      { fromVal: "1,000,000 J", toVal: "1,000 kJ", extra: "1 Megajoule (MJ)" }
    ]
  },
  applications: {
    title: "Applications of J to kJ Conversion",
    items: [
      {
        title: "Nutritional Science & Labeling",
        text: "Food packaging across Europe, Australia, and Asia lists energy content in kilojoules alongside kilocalories. Laboratory bomb calorimeters measure heat in Joules, requiring conversion to kilojoules for consumer nutrition panels."
      },
      {
        title: "Chemical Thermodynamics & Enthalpy",
        text: "Reaction enthalpies and Gibbs free energy changes are calculated in Joules per mole in molecular modeling software, then scaled to kilojoules per mole (kJ/mol) for textbook tables and safety documentation."
      },
      {
        title: "Mechanical Engineering",
        text: "Flywheel energy storage systems and braking systems record absorbed kinetic energy in Joules, which engineers express in kilojoules when auditing thermal dissipation rates."
      },
      {
        title: "Electrical & Power Auditing",
        text: "Transient surge suppressors (VARISTOR/MOV components) are rated in Joules to define spike absorption limits, while building management software aggregates total surge energy in kilojoules."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1,000 instead of dividing: Kilojoules are larger units than Joules, so the numeric value in kJ must be smaller than in J.",
      "Confusing kilojoules with kilocalories: 1 kJ equals ~0.239 kcal. Do not assume 1 kJ equals 1 Calorie.",
      "Misplacing the decimal point: Ensure you shift the decimal three places to the left when converting from J to kJ.",
      "Incorrect symbol capitalization: The correct symbol for Joules is uppercase 'J' and kilojoules is 'kJ' (lowercase k, uppercase J)."
    ]
  },
  faqs: [
    {
      question: "How many Joules are in 1 kilojoule?",
      answer: "There are exactly 1,000 Joules in 1 kilojoule. The metric prefix 'kilo-' denotes a factor of 1,000."
    },
    {
      question: "What is the formula to convert J to kJ?",
      answer: "The formula is: kJ = J ÷ 1,000. Alternatively, multiply the Joule value by 0.001."
    },
    {
      question: "Is 4,184 Joules equal to 4.184 kJ?",
      answer: "Yes, exactly. Dividing 4,184 J by 1,000 yields 4.184 kJ, which corresponds to 1 thermochemical kilocalorie."
    },
    {
      question: "Why do we use kilojoules instead of Joules?",
      answer: "Because 1 Joule represents a small amount of energy, using kilojoules keeps numerical values concise and readable when analyzing food, weather, or machinery."
    },
    {
      question: "How do I convert kJ back to Joules?",
      answer: "To convert kilojoules to Joules, multiply the kilojoule value by 1,000 (e.g., 12.5 kJ × 1,000 = 12,500 J)."
    },
    {
      question: "Is kilojoule an official SI unit?",
      answer: "Yes. The Joule is the derived SI unit for energy, and the kilojoule is an officially accepted decimal multiple within the International System of Units."
    },
    {
      question: "How many kilojoules are in a megajoule?",
      answer: "There are 1,000 kilojoules in 1 megajoule (MJ), or 1,000,000 Joules."
    },
    {
      question: "What is the difference between a Joule and a Watt?",
      answer: "A Joule measures total energy or work, whereas a Watt measures power (the rate of energy transfer). One Watt equals one Joule per second (1 W = 1 J/s)."
    }
  ],
  relatedList: [
    { label: "Kilojoule to Joule", from: "kilojoule", to: "joule" },
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
