import { CustomArticleData } from "./types";

export const kilojouleToWattHour: CustomArticleData = {
  fromUnitId: "kilojoule",
  toUnitId: "watt-hour",
  seoTitle: "Kilojoule to Watt Hour Converter (kJ to Wh)",
  metaDescription: "Convert kilojoules to watt-hours (kJ to Wh) with exact electrical engineering precision. Calculation formulas, step-by-step examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilojoule-to-watt-hour",
  h1: "Kilojoule to Watt Hour Converter",
  introduction: [
    "The kilojoule (kJ) and the watt-hour (Wh) are standard units of energy that bridge mechanical thermodynamics and electrical power systems. While kilojoules quantify thermal and mechanical work across scientific disciplines, watt-hours express electrical energy consumption, battery capacities, and power generation metrics over time.",
    "Converting kilojoules to watt-hours is an exact mathematical transformation based on the definition of electrical power. Since one watt equals one Joule per second, and one hour contains 3,600 seconds, one watt-hour is equal to exactly 3,600 Joules, or 3.6 kilojoules. Consequently, dividing any kilojoule value by 3.6 yields its exact equivalent in watt-hours.",
    "This technical guide explains the conversion relationship between kJ and Wh, provides manual calculation examples, presents a comprehensive conversion table, illustrates real-world electrical applications, and answers common engineering questions."
  ],
  quickAnswer: {
    text: "To convert kilojoules to watt-hours, divide the energy in kilojoules by 3.6 (or multiply by approximately 0.277778). For example, 36 kilojoules equals exactly 10 watt-hours.",
    formulaDisplay: "Wh = kJ ÷ 3.6",
    subtext: "1 kilojoule is equal to exactly 1/3.6 (approx. 0.277778) watt-hours."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilojoule (kJ)",
    text: "The kilojoule (symbol: kJ) is an SI decimal multiple of the Joule representing 1,000 Joules of work or heat. In physics and mechanical engineering, it represents the work performed when an electrical current of 1,000 amperes passes through a resistance of 1 ohm for one thousandth of a second, or when 1 kilowatt of power operates for exactly 1 second."
  },
  aboutTargetUnit: {
    title: "Understanding the Watt Hour (Wh)",
    text: "The watt-hour (symbol: Wh) is a non-SI unit of energy commonly used in electrical engineering, electronics manufacturing, and consumer battery ratings. Defined as one watt of continuous power delivered over one hour (1 W × 3,600 s = 3,600 J), watt-hours provide a clear measure of energy storage for smartphones, laptops, power tools, and portable power stations."
  },
  relationship: "Because 1 hour has 3,600 seconds and 1 Watt is 1 Joule/second, 1 Wh = 3,600 J = 3.6 kJ. Dividing kilojoules by 3.6 provides the exact watt-hour equivalent without empirical approximations.",
  relationshipTitle: "Kilojoule to Watt-Hour Scale Equivalence",
  relationshipItems: [
    { label: "3.6 kJ", value: "1 Wh (1 Watt running for 1 hour)" },
    { label: "18 kJ", value: "5 Wh (typical small smartphone battery capacity)" },
    { label: "36 kJ", value: "10 Wh (standard USB power bank storage block)" },
    { label: "180 kJ", value: "50 Wh (typical modern laptop battery)" },
    { label: "3,600 kJ", value: "1,000 Wh (1 kilowatt-hour / 1 kWh)" }
  ],
  formula: {
    text: "Divide the energy in kilojoules by 3.6 to obtain the value in watt-hours.",
    math: "Wh = kJ / 3.6",
    subtext: "Alternatively: Wh = kJ × 0.2777778"
  },
  formulaTitle: "Kilojoule to Watt Hour Conversion Formula",
  practicalTip: {
    title: "Exact Fraction Shortcut",
    text: "To preserve decimal precision without repeating fractions, calculate Wh as (kJ × 10) ÷ 36 or (kJ × 5) ÷ 18."
  },
  expertNote: {
    title: "Battery Capacity Translations",
    text: "Battery manufacturers often rate capacities in milliampere-hours (mAh). To convert from kJ to mAh at a nominal voltage (V), first calculate Wh (kJ / 3.6), then multiply by 1,000 / V (mAh = [kJ / 3.6] × 1000 / V)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Smartphone Battery Chemistry Yield",
        subtitle: "Convert a lithium-ion cell energy output of 43.2 kilojoules into watt-hours.",
        steps: [
          "Identify the kilojoule value: 43.2 kJ.",
          "Apply the formula: Wh = 43.2 ÷ 3.6.",
          "Calculate: 43.2 ÷ 3.6 = 12 Wh.",
          "Result: 43.2 kJ equals exactly 12 watt-hours."
        ]
      },
      {
        title: "Example 2: Solar Panel Thermal Conversion",
        subtitle: "Convert 180 kilojoules of collected solar heat into equivalent electrical watt-hours.",
        steps: [
          "Identify the energy in kJ: 180 kJ.",
          "Divide by 3.6: 180 ÷ 3.6 = 50 Wh.",
          "Result: 180 kJ equals exactly 50 watt-hours."
        ]
      },
      {
        title: "Example 3: Dynamic Braking Energy Recovery",
        subtitle: "An electric scooter regenerative brake recaptures 7.2 kJ. Determine the watt-hours added to the battery.",
        steps: [
          "Identify energy: 7.2 kJ.",
          "Calculate: 7.2 ÷ 3.6 = 2.0 Wh.",
          "Result: 7.2 kJ equals 2.0 watt-hours."
        ]
      }
    ]
  },
  table: {
    title: "Kilojoule to Watt Hour Conversion Table",
    headers: ["Kilojoules (kJ)", "Watt Hours (Wh)", "Equivalent Joules", "Practical Application"],
    rows: [
      { fromVal: "0.36 kJ", toVal: "0.1 Wh", extra: "360 J", extra2: "Small Bluetooth earbud charge" },
      { fromVal: "1 kJ", toVal: "0.278 Wh", extra: "1,000 J", extra2: "Standard 1 kJ unit" },
      { fromVal: "3.6 kJ", toVal: "1.0 Wh", extra: "3,600 J", extra2: "1 Watt LED bulb lit for 1 hour" },
      { fromVal: "7.2 kJ", toVal: "2.0 Wh", extra: "7,200 J", extra2: "Smartwatch battery capacity" },
      { fromVal: "18 kJ", toVal: "5.0 Wh", extra: "18,000 J", extra2: "Entry-level smartphone battery" },
      { fromVal: "36 kJ", toVal: "10.0 Wh", extra: "36,000 J", extra2: "Flagship smartphone battery (approx. 2,700 mAh at 3.7V)" },
      { fromVal: "72 kJ", toVal: "20.0 Wh", extra: "72,000 J", extra2: "Tablet computer battery module" },
      { fromVal: "180 kJ", toVal: "50.0 Wh", extra: "180,000 J", extra2: "Ultrabook laptop battery" },
      { fromVal: "360 kJ", toVal: "100.0 Wh", extra: "360,000 J", extra2: "Maximum TSA airline carry-on battery limit" },
      { fromVal: "1,800 kJ", toVal: "500.0 Wh", extra: "1,800,000 J", extra2: "E-bike commuter battery pack" },
      { fromVal: "3,600 kJ", toVal: "1,000.0 Wh", extra: "3,600,000 J", extra2: "1 Kilowatt-Hour (1 kWh)" },
      { fromVal: "18,000 kJ", toVal: "5,000.0 Wh", extra: "18,000,000 J", extra2: "Residential solar battery backup module" }
    ]
  },
  applications: {
    title: "Practical Applications of kJ to Wh Conversion",
    items: [
      {
        title: "Battery Pack Engineering and Sizing",
        text: "Electrochemists measuring galvanic cell enthalpy in kilojoules per mole convert aggregate cell outputs to watt-hours to rate battery pack runtimes."
      },
      {
        title: "Solar and Renewable Microgrids",
        text: "Insolation sensors measure solar irradiance over time in kJ/m². Engineers convert this to Wh/m² to forecast photovoltaic panel power generation."
      },
      {
        title: "Thermal Management and Heat Dissipation",
        text: "Server room HVAC designers convert server heat rejection metrics (kJ/hr) into watt-hours of electrical equivalent load to balance power distribution."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Kilojoule to Watt Hour Conversions",
    items: [
      "Multiplying by 3.6 instead of dividing: Since 1 Wh is 3.6 kJ, converting from kJ to Wh requires dividing by 3.6.",
      "Confusing Watts (power rate) with Watt-Hours (total energy): Wh measures accumulated energy, while Watts represent instantaneous power (kJ/s vs Wh).",
      "Confusing watt-hours (Wh) with kilowatt-hours (kWh): 1 kWh = 1,000 Wh = 3,600 kJ."
    ]
  },
  faqs: [
    {
      question: "How many watt-hours are in 1 kilojoule?",
      answer: "There are exactly 1/3.6 (approximately 0.277778) watt-hours in 1 kilojoule."
    },
    {
      question: "What is the formula to convert kJ to Wh?",
      answer: "The formula is: Wh = kJ ÷ 3.6."
    },
    {
      question: "How many kilojoules are in 1 watt-hour?",
      answer: "There are exactly 3.6 kilojoules (3,600 Joules) in 1 watt-hour."
    },
    {
      question: "How do I convert 360 kJ to Wh?",
      answer: "360 ÷ 3.6 = 100 watt-hours (the legal limit for lithium-ion batteries on commercial airplanes)."
    },
    {
      question: "Why is the conversion factor exactly 3.6?",
      answer: "Because 1 Watt = 1 Joule/second and 1 hour = 3,600 seconds. Therefore, 1 Wh = 3,600 Joules = 3.6 kilojoules."
    },
    {
      question: "How do I convert Wh back to kJ?",
      answer: "Multiply the watt-hour value by 3.6 (e.g., 50 Wh × 3.6 = 180 kJ)."
    },
    {
      question: "What is the difference between a Watt and a Watt-hour?",
      answer: "A Watt (W) is a unit of power measuring the rate of energy flow (1 J/s), while a Watt-hour (Wh) is a unit of energy measuring the total work done over one hour."
    },
    {
      question: "How many watt-hours are in 1 Megajoule (1,000 kJ)?",
      answer: "1,000 kJ ÷ 3.6 = 277.78 watt-hours (or 0.2778 kWh)."
    }
  ],
  relatedList: [
    { label: "Watt Hour to Kilojoule", from: "watt-hour", to: "kilojoule" },
    { label: "Kilojoule to Kilowatt Hour", from: "kilojoule", to: "kilowatt-hour" },
    { label: "Kilojoule to Joule", from: "kilojoule", to: "joule" },
    { label: "Kilojoule to Calorie", from: "kilojoule", to: "calorie" },
    { label: "Kilojoule to BTU", from: "kilojoule", to: "btu" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "IEC 60027-1: Letter symbols to be used in electrical technology.",
    "IEEE Standard 268-2005: IEEE Standard for Metric Practice."
  ]
};
