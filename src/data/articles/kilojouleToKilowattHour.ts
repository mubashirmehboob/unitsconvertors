import { CustomArticleData } from "./types";

export const kilojouleToKilowattHour: CustomArticleData = {
  fromUnitId: "kilojoule",
  toUnitId: "kilowatt-hour",
  seoTitle: "Kilojoule to Kilowatt Hour Converter (kJ to kWh)",
  metaDescription: "Convert kilojoules to kilowatt-hours (kJ to kWh) with exact SI and grid electrical precision. Formulas, step-by-step calculations, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilojoule-to-kilowatt-hour",
  h1: "Kilojoule to Kilowatt Hour Converter",
  introduction: [
    "The kilojoule (kJ) and the kilowatt-hour (kWh) are fundamental units of energy used across engineering, environmental science, and power generation. Kilojoules measure thermodynamic work, combustion heat, and biochemical energy, while kilowatt-hours serve as the universal commercial billing standard for electrical grid consumption, industrial machinery, and electric vehicle (EV) battery systems.",
    "Converting kilojoules to kilowatt-hours represents an exact mathematical relationship. Because one kilowatt equals 1,000 Joules per second, and one hour contains 3,600 seconds, one kilowatt-hour equals exactly 3,600,000 Joules, or 3,600 kilojoules. Converting from kilojoules to kilowatt-hours is performed by dividing the kilojoule value by 3,600.",
    "This guide provides the exact conversion formula, step-by-step calculation examples, an industrial reference table, practical energy billing applications, and answers to common energy questions."
  ],
  quickAnswer: {
    text: "To convert kilojoules to kilowatt-hours, divide the kilojoule value by 3,600 (or multiply by approximately 0.000277778). For example, 36,000 kilojoules equals exactly 10 kilowatt-hours.",
    formulaDisplay: "kWh = kJ ÷ 3,600",
    subtext: "1 kilojoule is equal to exactly 1/3,600 (approx. 0.000277778) kilowatt-hours."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilojoule (kJ)",
    text: "The kilojoule (symbol: kJ) is an SI decimal multiple of the Joule, equal to 1,000 Joules (10³ J). In thermodynamics, it measures the thermal energy required to warm approximately 239 grams of water by one degree Celsius, or the mechanical work done by a force of 1,000 Newtons exerted over one meter."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilowatt Hour (kWh)",
    text: "The kilowatt-hour (symbol: kWh) is a composite unit of energy defined as one kilowatt of continuous electrical power delivered for a duration of one hour. Equivalent to 3.6 Megajoules (3,600,000 Joules), the kilowatt-hour is the standard metric used by utility companies worldwide to meter domestic and commercial electricity usage."
  },
  relationship: "By definition, 1 kilowatt is 1,000 Joules/second, and 1 hour contains 3,600 seconds. Therefore: 1 kWh = 1,000 J/s × 3,600 s = 3,600,000 J = 3,600 kJ. Dividing kilojoules by 3,600 yields the exact kilowatt-hour equivalent.",
  relationshipTitle: "Kilojoule vs Kilowatt-Hour Scale",
  relationshipItems: [
    { label: "3,600 kJ", value: "1 kWh (standard 1,000W appliance running for 1 hour)" },
    { label: "18,000 kJ", value: "5 kWh (typical daily apartment electricity consumption)" },
    { label: "36,000 kJ", value: "10 kWh (residential backup battery capacity)" },
    { label: "216,000 kJ", value: "60 kWh (compact electric vehicle battery pack)" },
    { label: "360,000 kJ", value: "100 kWh (long-range EV battery pack / large solar storage)" }
  ],
  formula: {
    text: "Divide the energy in kilojoules by 3,600 to find the equivalent in kilowatt-hours.",
    math: "kWh = kJ / 3600",
    subtext: "Alternatively: kWh = kJ × 0.0002777778"
  },
  formulaTitle: "Kilojoule to Kilowatt Hour Conversion Formula",
  practicalTip: {
    title: "Mental Estimation Trick",
    text: "To estimate kWh from large kJ values quickly in your head, divide by 36 and drop two zeros (divide by 3,600). For example, 72,000 kJ → 72 ÷ 36 = 2 → 20 kWh."
  },
  expertNote: {
    title: "Heat Pump COP & Energy Efficiency",
    text: "Heat pump and chiller performance ratings often compare thermal output (in kJ/hr) to electrical grid input (in kWh). Converting 3,600 kJ/hr of heat per 1 kWh of electricity establishes a baseline Coefficient of Performance (COP) of 1.0."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Natural Gas Furnace Heat Output",
        subtitle: "Convert a gas furnace thermal output of 72,000 kilojoules into kilowatt-hours of electrical equivalent.",
        steps: [
          "Identify the kilojoule value: 72,000 kJ.",
          "Apply the formula: kWh = 72,000 ÷ 3,600.",
          "Calculate: 72,000 ÷ 3,600 = 20 kWh.",
          "Result: 72,000 kJ is equivalent to exactly 20 kilowatt-hours."
        ]
      },
      {
        title: "Example 2: Industrial Boiler Enthalpy Yield",
        subtitle: "Convert 180,000 kJ of steam enthalpy into kWh.",
        steps: [
          "Identify the input: 180,000 kJ.",
          "Divide by 3,600: 180,000 ÷ 3,600 = 50 kWh.",
          "Result: 180,000 kJ equals exactly 50 kWh."
        ]
      },
      {
        title: "Example 3: Electric Vehicle Regenerative Braking Cycle",
        subtitle: "An electric bus recaptures 14,400 kJ during a descent. Calculate kWh returned to the battery.",
        steps: [
          "Identify energy in kJ: 14,400 kJ.",
          "Divide by 3,600: 14,400 ÷ 3,600 = 4 kWh.",
          "Result: 14,400 kJ equals 4.0 kWh."
        ]
      }
    ]
  },
  table: {
    title: "Kilojoule to Kilowatt Hour Conversion Table",
    headers: ["Kilojoules (kJ)", "Kilowatt Hours (kWh)", "Megajoules (MJ)", "Practical Benchmark"],
    rows: [
      { fromVal: "360 kJ", toVal: "0.10 kWh", extra: "0.36 MJ", extra2: "100W light bulb running for 1 hour" },
      { fromVal: "1,000 kJ", toVal: "0.278 kWh", extra: "1.00 MJ", extra2: "Base 1 Megajoule mark" },
      { fromVal: "3,600 kJ", toVal: "1.00 kWh", extra: "3.60 MJ", extra2: "1 kWh electrical base unit" },
      { fromVal: "7,200 kJ", toVal: "2.00 kWh", extra: "7.20 MJ", extra2: "1 load of electric clothes dryer cycle" },
      { fromVal: "10,800 kJ", toVal: "3.00 kWh", extra: "10.80 MJ", extra2: "1 hour of central air conditioning" },
      { fromVal: "18,000 kJ", toVal: "5.00 kWh", extra: "18.00 MJ", extra2: "Standard domestic solar array daily generation" },
      { fromVal: "36,000 kJ", toVal: "10.00 kWh", extra: "36.00 MJ", extra2: "Home energy storage battery (Tesla Powerwall)" },
      { fromVal: "72,000 kJ", toVal: "20.00 kWh", extra: "72.00 MJ", extra2: "Average US home daily electrical consumption" },
      { fromVal: "180,000 kJ", toVal: "50.00 kWh", extra: "180.00 MJ", extra2: "Standard EV battery capacity (Nissan Leaf)" },
      { fromVal: "360,000 kJ", toVal: "100.00 kWh", extra: "360.00 MJ", extra2: "Long-range EV battery (Tesla Model S/X)" },
      { fromVal: "720,000 kJ", toVal: "200.00 kWh", extra: "720.00 MJ", extra2: "Commercial rooftop solar daily production" },
      { fromVal: "3,600,000 kJ", toVal: "1,000.00 kWh", extra: "3,600.00 MJ", extra2: "1 Megawatt-Hour (1 MWh)" }
    ]
  },
  applications: {
    title: "Practical Applications of kJ to kWh Conversion",
    items: [
      {
        title: "Energy Auditing and Utility Bill Verification",
        text: "Industrial energy auditors compare fuel combustion data (measured in kJ or MJ from gas meters) with electrical billing statements (in kWh) to analyze facility efficiency."
      },
      {
        title: "Electric Vehicle Range and Efficiency",
        text: "Automotive engineers convert kinetic energy recovered during deceleration (in kJ) into battery kilowatt-hours to calculate regenerative braking efficiency."
      },
      {
        title: "Combined Heat and Power (CHP) Cogeneration",
        text: "Power plant operators convert thermal waste heat recovered from turbines (in kJ/s) into equivalent electric power potential (in kWh) for district heating networks."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 3,600 instead of dividing: Kilowatt-hours are much larger units than kilojoules, so the kWh number is always 3,600 times smaller.",
      "Confusing power (kW) with energy (kWh): kW is instantaneous power (kJ/s), whereas kWh is cumulative energy (3,600 kJ).",
      "Confusing watt-hours (Wh) with kilowatt-hours (kWh): 3,600 kJ equals 1,000 Wh, but exactly 1.0 kWh."
    ]
  },
  faqs: [
    {
      question: "How many kilowatt-hours are in 1 kilojoule?",
      answer: "There are exactly 1/3,600 (approximately 0.000277778) kilowatt-hours in 1 kilojoule."
    },
    {
      question: "What is the formula to convert kilojoules to kilowatt-hours?",
      answer: "The formula is: kWh = kJ ÷ 3,600."
    },
    {
      question: "How many kilojoules are in 1 kWh?",
      answer: "There are exactly 3,600 kilojoules (or 3.6 Megajoules) in 1 kilowatt-hour."
    },
    {
      question: "How do I convert 36,000 kJ to kWh?",
      answer: "36,000 ÷ 3,600 = 10 kWh."
    },
    {
      question: "Why is 1 kWh equal to 3,600 kJ?",
      answer: "1 kilowatt equals 1,000 Joules per second. In one hour, there are 3,600 seconds. Multiplying 1,000 J/s by 3,600 s gives 3,600,000 Joules, which equals 3,600 kilojoules."
    },
    {
      question: "How do I convert kWh back to kJ?",
      answer: "Multiply the kilowatt-hour value by 3,600 (e.g., 5 kWh × 3,600 = 18,000 kJ)."
    },
    {
      question: "How many kWh is a standard 8,700 kJ daily diet?",
      answer: "8,700 ÷ 3,600 = 2.417 kWh. This means a human body operates on the energetic equivalent of about 2.42 kWh of energy per day."
    },
    {
      question: "Is kWh an SI unit?",
      answer: "The kilowatt-hour is not an official SI unit, but it is an SI-accepted non-metric unit widely recognized for commercial and electrical energy metering."
    }
  ],
  relatedList: [
    { label: "Kilowatt Hour to Kilojoule", from: "kilowatt-hour", to: "kilojoule" },
    { label: "Kilojoule to Watt Hour", from: "kilojoule", to: "watt-hour" },
    { label: "Kilojoule to Joule", from: "kilojoule", to: "joule" },
    { label: "Kilojoule to BTU", from: "kilojoule", to: "btu" },
    { label: "Kilojoule to Kilocalorie", from: "kilojoule", to: "kilocalorie" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEC 60027-1: Letter symbols to be used in electrical technology."
  ]
};
