import { CustomArticleData } from "./types";

export const megawattToWatt: CustomArticleData = {
  fromUnitId: "megawatt",
  toUnitId: "watt",
  seoTitle: "Megawatt to Watt Converter (MW to W)",
  metaDescription: "Convert megawatts to watts (MW to W) with exact SI decimal precision. Grid formulas, utility calculation examples, power lookup tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/megawatt-to-watt",
  h1: "Megawatt to Watt Converter",
  introduction: [
    "The megawatt (MW) and the watt (W) are standard metric units of power within the International System of Units (SI). While the watt is the fundamental base derived unit representing power across household electronics, lighting, and appliances, the megawatt is the industrial standard unit for electric utility power plants, utility-scale wind farms, solar arrays, and high-voltage transmission grids.",
    "Converting megawatts to watts is an exact base-10 SI metric prefix scaling operation. By international standard definition, the prefix 'mega-' denotes a factor of one million (10⁶). Therefore, one megawatt equals exactly 1,000,000 watts (10⁶ W). Converting megawatts to watts requires multiplying the megawatt value by 1,000,000.",
    "This technical guide explains the conversion relationship, provides step-by-step grid calculation examples, presents a comprehensive generation-to-appliance conversion table, covers electrical engineering applications, and answers common questions."
  ],
  quickAnswer: {
    text: "To convert megawatts to watts, multiply the megawatt value by 1,000,000 (10⁶). For example, 2.5 MW (the output of a modern commercial wind turbine) equals exactly 2,500,000 watts.",
    formulaDisplay: "W = MW × 1,000,000 = MW × 10⁶",
    subtext: "1 megawatt is equal to exactly 1,000,000 watts (SI standard)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megawatt (MW)",
    text: "The megawatt (symbol: MW) is an official SI decimal multiple of the Watt, representing 1,000,000 Watts (10⁶ W) or 1,000,000 Joules of energy transferred per second (1 MJ/s). It is the standard unit for quantifying power plant generation capacities, locomotive diesel-electric propulsion, grid substations, and large-scale industrial smelters."
  },
  aboutTargetUnit: {
    title: "Understanding the Watt (W)",
    text: "The Watt (symbol: W) is the SI base derived unit of power, named after Scottish engineer James Watt. One Watt is defined as one Joule of energy transferred or dissipated per second (1 J/s). Electrically, 1 Watt is produced by a current of one Ampere flowing across a potential difference of one Volt (1 W = 1 V × 1 A)."
  },
  relationship: "Because the prefix 'mega-' represents 10⁶, 1 MW = 1,000,000 W exactly. Conversely, 1 Watt equals 0.000001 MW (10⁻⁶ MW).",
  relationshipTitle: "Megawatt to Watt Scale Relationship",
  relationshipItems: [
    { label: "0.000001 MW", value: "1.0 W (Small LED nightlight)" },
    { label: "0.001 MW", value: "1,000 W (1 kW / Domestic microwave oven)" },
    { label: "0.1 MW", value: "100,000 W (Large commercial building peak load)" },
    { label: "1.0 MW", value: "1,000,000 W (Power for ~750 to 1,000 average homes)" },
    { label: "10.0 MW", value: "10,000,000 W (High-speed passenger electric train)" }
  ],
  formula: {
    text: "Multiply the power in megawatts by 1,000,000 to determine the power in watts.",
    math: "W = MW * 1000000",
    subtext: "Scientific notation: W = MW × 10⁶"
  },
  formulaTitle: "Megawatt to Watt Conversion Formula",
  practicalTip: {
    title: "Metric Prefix Shifting Rule",
    text: "To convert MW to W quickly, move the decimal point six positions to the right (e.g., 3.45 MW becomes 3,450,000 W)."
  },
  expertNote: {
    title: "Peak Generation vs Continuous Baseload",
    text: "Solar PV farms and wind turbines rate output in Megawatt-peak (MWp), indicating maximum nameplate wattage under optimal standard test conditions, whereas conventional thermal plants operate at continuous baseload megawatts."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Utility Wind Turbine Nameplate Rating",
        subtitle: "Convert a 3.2 MW offshore wind turbine capacity into watts.",
        steps: [
          "Identify the megawatt value: 3.2 MW.",
          "Apply the formula: W = 3.2 × 1,000,000.",
          "Calculate: 3.2 × 1,000,000 = 3,200,000 W.",
          "Result: 3.2 MW equals exactly 3,200,000 Watts (3.2 million Watts)."
        ]
      },
      {
        title: "Example 2: Data Center Total Power Capacity",
        subtitle: "Convert a hyperscale data center grid connection of 48 MW into watts.",
        steps: [
          "Identify power in MW: 48 MW.",
          "Multiply by 10⁶: 48 × 1,000,000 = 48,000,000 W.",
          "Result: 48 MW equals 48,000,000 Watts (48 million Watts)."
        ]
      },
      {
        title: "Example 3: Electric Locomotive Traction Power",
        subtitle: "Convert a 6.4 MW freight locomotive power rating into watts.",
        steps: [
          "Identify power: 6.4 MW.",
          "Calculate: 6.4 × 1,000,000 = 6,400,000 W.",
          "Result: 6.4 MW equals 6,400,000 Watts."
        ]
      }
    ]
  },
  table: {
    title: "Megawatt to Watt Conversion Table",
    headers: ["Megawatts (MW)", "Watts (W)", "Kilowatts (kW)", "Power System / Benchmark"],
    rows: [
      { fromVal: "0.0001 MW", toVal: "100 W", extra: "0.10 kW", extra2: "Traditional incandescent light bulb" },
      { fromVal: "0.001 MW", toVal: "1,000 W", extra: "1.00 kW", extra2: "1 kW domestic electric toaster" },
      { fromVal: "0.01 MW", toVal: "10,000 W", extra: "10.00 kW", extra2: "Residential rooftop solar PV system" },
      { fromVal: "0.05 MW", toVal: "50,000 W", extra: "50.00 kW", extra2: "Commercial fast DC EV charger" },
      { fromVal: "0.10 MW", toVal: "100,000 W", extra: "100.00 kW", extra2: "Midsize manufacturing facility load" },
      { fromVal: "0.50 MW", toVal: "500,000 W", extra: "500.00 kW", extra2: "Hospital emergency backup generator" },
      { fromVal: "1.00 MW", toVal: "1,000,000 W", extra: "1,000.00 kW", extra2: "1 Megawatt baseline benchmark" },
      { fromVal: "2.50 MW", toVal: "2,500,000 W", extra: "2,500.00 kW", extra2: "Standard commercial onshore wind turbine" },
      { fromVal: "5.00 MW", toVal: "5,000,000 W", extra: "5,000.00 kW", extra2: "Small municipal hydroelectric generator" },
      { fromVal: "10.00 MW", toVal: "10,000,000 W", extra: "10,000.00 kW", extra2: "High-speed rail trainset traction load" },
      { fromVal: "50.00 MW", toVal: "50,000,000 W", extra: "50,000.00 kW", extra2: "Utility-scale grid battery storage system" },
      { fromVal: "100.00 MW", toVal: "100,000,000 W", extra: "100,000.00 kW", extra2: "Combined cycle gas turbine peaker plant" }
    ]
  },
  applications: {
    title: "Practical Applications of MW to Watt Conversion",
    items: [
      {
        title: "Electrical Grid Interconnection Sizing",
        text: "Substation engineers convert utility-scale power plant outputs from megawatts to watts to calculate phase currents ($I = P / (\\sqrt{3} \\times V \\times \\text{PF})$) and size switchgear."
      },
      {
        title: "Renewable Energy Capacity Factor Analysis",
        text: "Wind and solar energy analysts convert plant nameplate MW ratings to individual component wattage to calculate per-inverter and per-module losses."
      },
      {
        title: "Heavy Industrial Smelting and Refining",
        text: "Aluminum and silicon smelters convert bulk megawatt power supplies to individual arc furnace wattages to regulate electrode currents."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000,000 instead of multiplying: Because a megawatt is one million times larger than a watt, the watt number is always one million times higher.",
      "Miscounting zeros: Ensure exactly six zeros (1,000,000) are used, not three (which converts to kW).",
      "Confusing power (MW/W) with energy (MWh/Wh): Megawatts measure instantaneous power flow, while megawatt-hours measure total energy consumed or produced over time."
    ]
  },
  faqs: [
    {
      question: "How many watts are in 1 megawatt?",
      answer: "There are exactly 1,000,000 watts (10⁶ watts) in 1 megawatt."
    },
    {
      question: "What is the formula to convert megawatts to watts?",
      answer: "The formula is: watts = megawatts × 1,000,000 (or W = MW × 10⁶)."
    },
    {
      question: "How many megawatts are in 1 watt?",
      answer: "There are 0.000001 megawatts (10⁻⁶ MW) in 1 watt."
    },
    {
      question: "How many homes can 1 megawatt power?",
      answer: "In North America, 1 megawatt of continuous capacity can power approximately 750 to 1,000 average residential homes depending on seasonal heating and cooling demand."
    },
    {
      question: "How do I convert 5.5 MW to watts?",
      answer: "5.5 MW × 1,000,000 = 5,500,000 watts."
    },
    {
      question: "How do I convert watts back to megawatts?",
      answer: "Divide the watt value by 1,000,000 (for example: 3,000,000 W ÷ 1,000,000 = 3 MW)."
    },
    {
      question: "What is the difference between MW and kW?",
      answer: "1 kilowatt (kW) equals 1,000 watts, while 1 megawatt (MW) equals 1,000,000 watts. Therefore, 1 MW equals exactly 1,000 kW."
    },
    {
      question: "How many watts are in 1 Gigawatt (GW)?",
      answer: "1 Gigawatt equals 1,000 Megawatts or 1,000,000,000 Watts (1 billion Watts)."
    }
  ],
  relatedList: [
    { label: "Watt to Megawatt", from: "watt", to: "megawatt" },
    { label: "Megawatt to Kilowatt", from: "megawatt", to: "kilowatt" },
    { label: "Megawatt to Gigawatt", from: "megawatt", to: "gigawatt" },
    { label: "Megawatt to Horsepower (Mechanical)", from: "megawatt", to: "horsepower-mechanical" },
    { label: "Megawatt to BTU per Hour", from: "megawatt", to: "btu-per-hour" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Standard 1459: Standard Definitions for the Measurement of Electric Power Quantities."
  ]
};
