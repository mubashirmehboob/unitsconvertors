import { CustomArticleData } from "./types";

export const megawattToKilowatt: CustomArticleData = {
  fromUnitId: "megawatt",
  toUnitId: "kilowatt",
  seoTitle: "Megawatt to Kilowatt Converter (MW to kW)",
  metaDescription: "Convert megawatts to kilowatts (MW to kW) with exact decimal precision. Grid formulas, power generation calculations, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/megawatt-to-kilowatt",
  h1: "Megawatt to Kilowatt Converter",
  introduction: [
    "The megawatt (MW) and the kilowatt (kW) are two standard metric units of power within the International System of Units (SI). While the kilowatt is the standard measurement unit for commercial electrical services, residential solar arrays, HVAC equipment, and industrial motors, the megawatt is the international benchmark for utility-scale electrical generation, transmission networks, and heavy grid infrastructure.",
    "Converting megawatts to kilowatts is an exact base-10 SI metric scaling operation. By international standard definition, one megawatt equals 1,000,000 Watts (10⁶ W), and one kilowatt equals 1,000 Watts (10³ W). Therefore, one megawatt equals exactly 1,000 kilowatts (10³ kW). Converting megawatts to kilowatts requires multiplying the megawatt value by 1,000.",
    "This engineering reference explains the conversion formula, provides step-by-step substation and generator sizing calculations, presents a comprehensive grid lookup table, covers power engineering applications, and answers frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert megawatts to kilowatts, multiply the megawatt value by 1,000. For example, a 5 MW commercial solar array produces exactly 5,000 kilowatts (5,000 kW).",
    formulaDisplay: "kW = MW × 1,000",
    subtext: "1 megawatt is equal to exactly 1,000 kilowatts (SI standard)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megawatt (MW)",
    text: "The megawatt (symbol: MW) is an official decimal multiple of the SI unit of power, the Watt, representing 1,000,000 Watts (10⁶ W) or 1,000,000 Joules per second. Widely used in power station ratings, high-voltage substations, marine propulsion turbines, and regional electrical grid dispatching, the megawatt quantifies bulk power transfer."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilowatt (kW)",
    text: "The kilowatt (symbol: kW) is an official SI decimal multiple representing 1,000 Watts (10³ W) or 1,000 Joules of energy transferred per second. It is the universal standard for measuring commercial building peak power demands, industrial machinery ratings, electric vehicle charging stations, and distributed renewable energy."
  },
  relationship: "Because 'mega-' represents 10⁶ and 'kilo-' represents 10³, 1 MW = 10⁶ / 10³ = 1,000 kW exactly. Conversely, 1 kilowatt equals 0.001 megawatts (10⁻³ MW).",
  relationshipTitle: "Megawatt to Kilowatt Power Hierarchy",
  relationshipItems: [
    { label: "0.001 MW", value: "1.0 kW (Standard small home generator)" },
    { label: "0.05 MW", value: "50.0 kW (Fast DC EV charging station)" },
    { label: "0.5 MW", value: "500.0 kW (Large commercial rooftop solar system)" },
    { label: "1.0 MW", value: "1,000.0 kW (Standard 1 MW utility generation unit)" },
    { label: "10.0 MW", value: "10,000.0 kW (District heating cogeneration plant)" }
  ],
  formula: {
    text: "Multiply the power in megawatts by 1,000 to determine the power in kilowatts.",
    math: "kW = MW * 1000",
    subtext: "To convert kilowatts back to megawatts, divide by 1,000."
  },
  formulaTitle: "Megawatt to Kilowatt Conversion Formula",
  practicalTip: {
    title: "Quick Decimal Shift Rule",
    text: "To convert MW to kW instantly, move the decimal point three places to the right (e.g., 2.35 MW becomes 2,350 kW)."
  },
  expertNote: {
    title: "Utility Interconnection Rules",
    text: "Most electrical utilities classify distributed generation below 1 MW (1,000 kW) under simplified net metering rules, whereas projects exceeding 1 MW require full transmission interconnection studies."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Utility Solar Farm Output",
        subtitle: "Convert a 7.5 MW utility-scale solar photovoltaic plant capacity into kilowatts.",
        steps: [
          "Identify the megawatt value: 7.5 MW.",
          "Apply the formula: kW = 7.5 × 1,000.",
          "Calculate: 7.5 × 1,000 = 7,500 kW.",
          "Result: 7.5 MW equals exactly 7,500 kilowatts."
        ]
      },
      {
        title: "Example 2: Commercial Microgrid Battery Storage",
        subtitle: "Convert a 2.4 MW grid-stabilization battery storage system into kilowatts.",
        steps: [
          "Identify power in MW: 2.4 MW.",
          "Multiply by 1,000: 2.4 × 1,000 = 2,400 kW.",
          "Result: 2.4 MW equals 2,400 kilowatts."
        ]
      },
      {
        title: "Example 3: Hydroelectric Turbine Rating",
        subtitle: "Convert a 15 MW run-of-the-river hydro turbine capacity into kilowatts.",
        steps: [
          "Identify power: 15 MW.",
          "Calculate: 15 × 1,000 = 15,000 kW.",
          "Result: 15 MW equals 15,000 kilowatts."
        ]
      }
    ]
  },
  table: {
    title: "Megawatt to Kilowatt Conversion Table",
    headers: ["Megawatts (MW)", "Kilowatts (kW)", "Watts (W)", "Electrical Grid Scale"],
    rows: [
      { fromVal: "0.01 MW", toVal: "10.0 kW", extra: "10,000 W", extra2: "Large residential solar installation" },
      { fromVal: "0.05 MW", toVal: "50.0 kW", extra: "50,000 W", extra2: "Commercial DC fast charger" },
      { fromVal: "0.10 MW", toVal: "100.0 kW", extra: "100,000 W", extra2: "Supermarket / small warehouse peak load" },
      { fromVal: "0.25 MW", toVal: "250.0 kW", extra: "250,000 W", extra2: "Industrial manufacturing line feed" },
      { fromVal: "0.50 MW", toVal: "500.0 kW", extra: "500,000 W", extra2: "500 kW commercial backup diesel generator" },
      { fromVal: "1.00 MW", toVal: "1,000.0 kW", extra: "1,000,000 W", extra2: "1 MW base utility generation block" },
      { fromVal: "2.00 MW", toVal: "2,000.0 kW", extra: "2,000,000 W", extra2: "Utility wind turbine generator" },
      { fromVal: "5.00 MW", toVal: "5,000.0 kW", extra: "5,000,000 W", extra2: "Community solar farm distribution feeder" },
      { fromVal: "10.00 MW", toVal: "10,000.0 kW", extra: "10,000,000 W", extra2: "Regional distribution substation capacity" },
      { fromVal: "25.00 MW", toVal: "25,000.0 kW", extra: "25,000,000 W", extra2: "Large industrial paper mill power plant" },
      { fromVal: "50.00 MW", toVal: "50,000.0 kW", extra: "50,000,000 W", extra2: "Utility gas peaker turbine station" },
      { fromVal: "100.00 MW", toVal: "100,000.0 kW", extra: "100,000,000 W", extra2: "Utility combined-cycle block" }
    ]
  },
  applications: {
    title: "Practical Applications of MW to kW Conversion",
    items: [
      {
        title: "Renewable Energy Inverter Sizing and String Design",
        text: "Solar engineers convert overall plant MW capacity into strings of 100 kW to 250 kW commercial string inverters for balance-of-system electrical architecture."
      },
      {
        title: "Electric Utility Peak Demand Billing and Dispatch",
        text: "Grid operators dispatch generation in megawatts (MW), while commercial customers are metered and billed on peak 15-minute demand intervals in kilowatts (kW)."
      },
      {
        title: "Industrial Facility Grid Interconnection",
        text: "Plant electrical engineers convert heavy equipment motor loads from kilowatts into total plant megawatt capacity to request utility transformer service upgrades."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000 instead of multiplying: Because a megawatt is 1,000 times larger than a kilowatt, the value in kilowatts is always 1,000 times higher.",
      "Confusing power (MW/kW) with energy (MWh/kWh): Power represents instantaneous rate of flow, while energy represents accumulated consumption over time.",
      "Confusing Apparent Power (MVA/kVA) with Real Power (MW/kW): Real power in kW equals kVA multiplied by the power factor (PF)."
    ]
  },
  faqs: [
    {
      question: "How many kilowatts are in 1 megawatt?",
      answer: "There are exactly 1,000 kilowatts in 1 megawatt."
    },
    {
      question: "What is the formula to convert megawatts to kilowatts?",
      answer: "The formula is: kilowatts = megawatts × 1,000 (or kW = MW × 1,000)."
    },
    {
      question: "How many megawatts are in 1 kilowatt?",
      answer: "There are exactly 0.001 megawatts (10⁻³ MW) in 1 kilowatt."
    },
    {
      question: "How do I convert 3.5 MW to kW?",
      answer: "3.5 MW × 1,000 = 3,500 kW."
    },
    {
      question: "How many homes can 1,000 kW (1 MW) power?",
      answer: "1,000 kW provides continuous electricity for approximately 750 to 1,000 average North American homes under normal load conditions."
    },
    {
      question: "How do I convert kilowatts back to megawatts?",
      answer: "Divide the kilowatt value by 1,000 (for example: 25,000 kW ÷ 1,000 = 25 MW)."
    },
    {
      question: "What is the difference between MW and kW in solar panels?",
      answer: "A single residential rooftop solar system is typically rated between 5 kW and 15 kW, whereas a commercial or utility solar farm is rated from 1 MW (1,000 kW) to several hundred MW."
    },
    {
      question: "How many kW are in a Gigawatt?",
      answer: "One Gigawatt (GW) equals 1,000 Megawatts or 1,000,000 Kilowatts."
    }
  ],
  relatedList: [
    { label: "Kilowatt to Megawatt", from: "kilowatt", to: "megawatt" },
    { label: "Megawatt to Watt", from: "megawatt", to: "watt" },
    { label: "Megawatt to Gigawatt", from: "megawatt", to: "gigawatt" },
    { label: "Megawatt to Horsepower (Mechanical)", from: "megawatt", to: "horsepower-mechanical" },
    { label: "Kilowatt to Watt", from: "kilowatt", to: "watt" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Standard 100: The Authoritative Dictionary of IEEE Standards Terms."
  ]
};
