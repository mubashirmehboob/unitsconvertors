import { CustomArticleData } from "./types";

export const kilowattToMegawatt: CustomArticleData = {
  fromUnitId: "kilowatt",
  toUnitId: "megawatt",
  seoTitle: "Kilowatt to Megawatt Converter (kW to MW)",
  metaDescription: "Convert Kilowatts to Megawatts (kW to MW) instantly. Learn the 1,000 ratio formula, utility power grid calculations, step-by-step examples, and FAQs.",
  h1: "Kilowatt to Megawatt Converter",
  introduction: [
    "The Kilowatt (kW) and Megawatt (MW) are standard metric units used to express electrical power, mechanical output, and thermal energy capacity in grid engineering and utility power generation. While Kilowatts quantify facility-level loads, large commercial buildings, solar installations, and generators, Megawatts measure utility power station capacities, regional transformer substations, and wind farms.",
    "Converting Kilowatts to Megawatts transitions power measurements from local equipment scales to macro grid scales. Governed by the metric prefix structure (where kilo = 1,000 and mega = 1,000,000), one Megawatt equals exactly 1,000 Kilowatts. Therefore, converting Kilowatts to Megawatts requires dividing the power in Kilowatts by 1,000.",
    "This reference guide provides the exact conversion formula, step-by-step engineering calculation examples, structured conversion tables, and real-world grid management applications."
  ],
  quickAnswer: {
    text: "To convert Kilowatts to Megawatts, divide the power rating in Kilowatts by 1,000. For example, a 2,500 kW diesel generator produces 2.5 MW, and 500 kW equals 0.5 MW.",
    formulaDisplay: "MW = kW ÷ 1,000",
    subtext: "1 Kilowatt is equal to exactly 0.001 Megawatts."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilowatt (kW)",
    text: "The Kilowatt (symbol: kW) is an SI multiple unit equal to 1,000 Watts or 1,000 Joules per second. It is the standard rating unit for commercial electrical panels, solar PV arrays, backup generators, and industrial motors."
  },
  aboutTargetUnit: {
    title: "Understanding the Megawatt (MW)",
    text: "The Megawatt (symbol: MW) is an SI multiple unit equal to 1,000,000 Watts or 1,000 Kilowatts. It is the primary unit for utility power plant capacities, grid interconnect limits, regional battery energy storage systems, and heavy industrial plant feeds."
  },
  relationship: "The metric relationship between kilowatts and megawatts is fixed by SI prefixes: 1 MW = 1,000 kW, and 1 kW = 0.001 MW (10⁻³ MW).",
  relationshipTitle: "Kilowatt vs Megawatt Scale Comparison",
  relationshipItems: [
    { label: "1 kW", value: "0.001 MW (1,000 Watts baseline load)" },
    { label: "100 kW", value: "0.1 MW (Commercial building peak power)" },
    { label: "1,000 kW", value: "1.0 MW (1 Megawatt utility power block)" },
    { label: "3,000 kW", value: "3.0 MW (3 Megawatt onshore wind turbine)" },
    { label: "50,000 kW", value: "50.0 MW (50 Megawatt solar farm generation)" }
  ],
  formula: {
    text: "Divide the power in Kilowatts by 1,000 to obtain the power in Megawatts.",
    math: "MW = kW / 1000",
    subtext: "To convert Megawatts back to Kilowatts, multiply the Megawatt value by 1,000."
  },
  formulaTitle: "Kilowatt to Megawatt Conversion Formula",
  practicalTip: {
    title: "Decimal Movement Shortcut",
    text: "To convert Kilowatts to Megawatts mentally, move the decimal point three positions to the left. For example, 4,200.0 kW becomes 4.2 MW."
  },
  expertNote: {
    title: "Utility Aggregation",
    text: "Grid operators aggregate thousands of commercial kilowatt-scale consumers into megawatt demand blocks to schedule daily power dispatch and maintain grid frequency stability."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Commercial Solar Farm Output",
        subtitle: "Convert a 4,500 kW commercial solar installation capacity into Megawatts.",
        steps: [
          "Identify power in Kilowatts: 4,500 kW.",
          "Apply formula: MW = 4,500 ÷ 1,000.",
          "Calculate: 4,500 ÷ 1,000 = 4.5.",
          "Result: 4,500 Kilowatts equals 4.5 Megawatts."
        ]
      },
      {
        title: "Example 2: Industrial Backup Generator",
        subtitle: "Convert a 2,000 kW emergency standby generator rating to Megawatts.",
        steps: [
          "Identify power: 2,000 kW.",
          "Divide by 1,000: 2,000 ÷ 1,000 = 2.0.",
          "Result: 2,000 Kilowatts equals 2.0 MW."
        ]
      },
      {
        title: "Example 3: Data Center Facility Load",
        subtitle: "Convert 8,400 kW of server facility power demand to Megawatts.",
        steps: [
          "Identify power: 8,400 kW.",
          "Divide by 1,000: 8,400 ÷ 1,000 = 8.4.",
          "Result: 8,400 Kilowatts equals 8.4 MW."
        ]
      }
    ]
  },
  table: {
    title: "Kilowatt to Megawatt Conversion Table",
    headers: ["Kilowatts (kW)", "Megawatts (MW)", "Real-World Power System Context"],
    rows: [
      { fromVal: "1 kW", toVal: "0.001 MW", extra: "Baseline 1,000 Watt load" },
      { fromVal: "10 kW", toVal: "0.01 MW", extra: "Residential rooftop solar system" },
      { fromVal: "100 kW", toVal: "0.1 MW", extra: "Fast EV charging station hub" },
      { fromVal: "250 kW", toVal: "0.25 MW", extra: "Commercial building peak demand" },
      { fromVal: "500 kW", toVal: "0.5 MW", extra: "Large supermarket electrical feed" },
      { fromVal: "1,000 kW", toVal: "1.0 MW", extra: "Standard 1 MW utility generator unit" },
      { fromVal: "2,500 kW", toVal: "2.5 MW", extra: "Utility onshore wind turbine" },
      { fromVal: "5,000 kW", toVal: "5.0 MW", extra: "Industrial manufacturing plant load" },
      { fromVal: "10,000 kW", toVal: "10.0 MW", extra: "Community solar energy project" },
      { fromVal: "100,000 kW", toVal: "100.0 MW", extra: "Regional utility battery storage facility" }
    ]
  },
  applications: {
    title: "Applications of kW to MW Conversion",
    items: [
      {
        title: "Power Purchase Agreement (PPA) Contracts",
        text: "Renewable project developers sum up individual inverter ratings in Kilowatts into Megawatts to fulfill wholesale power sales agreements with electric utilities."
      },
      {
        title: "Substation & Distribution Planning",
        text: "Electrical distribution engineers convert neighborhood peak demand totals from Kilowatts to Megawatts when specifying main transformer capacity."
      },
      {
        title: "Grid Interconnection Applications",
        text: "Independent power producers submit interconnection requests to transmission system operators (TSOs) in Megawatts, derived from cumulative equipment kW ratings."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1,000 instead of dividing: Converting smaller units (kW) to larger units (MW) requires dividing by 1,000.",
      "Confusing MW with MWh: Megawatt (MW) is capacity rate; Megawatt-hour (MWh) is total energy delivered.",
      "Misplacing the decimal point when dealing with fractional kW values."
    ]
  },
  faqs: [
    {
      question: "How many Kilowatts are in 1 Megawatt?",
      answer: "There are exactly 1,000 Kilowatts in 1 Megawatt."
    },
    {
      question: "What is the formula to convert Kilowatts to Megawatts?",
      answer: "The formula is: Megawatts = Kilowatts ÷ 1,000."
    },
    {
      question: "How many Megawatts is 2,500 kW?",
      answer: "2,500 Kilowatts equals 2.5 Megawatts (2,500 ÷ 1,000 = 2.5 MW)."
    },
    {
      question: "How many Megawatts is 500 kW?",
      answer: "500 Kilowatts equals 0.5 Megawatts."
    },
    {
      question: "How do I convert Megawatts back to Kilowatts?",
      answer: "Multiply the Megawatt value by 1,000 (e.g., 3.5 MW × 1,000 = 3,500 kW)."
    },
    {
      question: "What is the difference between kW and MW?",
      answer: "1 Kilowatt equals 1,000 Watts, whereas 1 Megawatt equals 1,000,000 Watts (or 1,000 kW)."
    },
    {
      question: "How many Watts is 1 Megawatt?",
      answer: "1 Megawatt equals 1,000,000 Watts."
    },
    {
      question: "How many homes can 1 MW of power supply?",
      answer: "1 Megawatt of power capacity is generally sufficient to supply 750 to 1,000 typical residential homes simultaneously."
    }
  ],
  relatedList: [
    { label: "Kilowatt to Watt", from: "kilowatt", to: "watt" },
    { label: "Kilowatt to Gigawatt", from: "kilowatt", to: "gigawatt" },
    { label: "Watt to Megawatt", from: "watt", to: "megawatt" },
    { label: "Watt to Kilowatt", from: "watt", to: "kilowatt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEEE Standard 141: Electric Power Distribution for Industrial Plants."
  ]
};
