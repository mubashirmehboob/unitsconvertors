import { CustomArticleData } from "./types";

export const megawattToGigawatt: CustomArticleData = {
  fromUnitId: "megawatt",
  toUnitId: "gigawatt",
  seoTitle: "Megawatt to Gigawatt Converter (MW to GW)",
  metaDescription: "Convert megawatts to gigawatts (MW to GW) with exact grid-scale decimal precision. National grid formulas, calculation examples, power tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/megawatt-to-gigawatt",
  h1: "Megawatt to Gigawatt Converter",
  introduction: [
    "The megawatt (MW) and the gigawatt (GW) are large-scale metric units of power within the International System of Units (SI). While the megawatt is the standard unit for individual thermal power plants, industrial manufacturing facilities, and wind farms, the gigawatt is the macroscopic unit used to quantify regional transmission grids, national peak electrical demands, nuclear power generation stations, and country-wide renewable energy targets.",
    "Converting megawatts to gigawatts is an exact base-10 SI metric prefix scaling operation. By international standard definition, 'mega-' denotes one million (10⁶) and 'giga-' denotes one billion (10⁹). Therefore, one gigawatt equals exactly 1,000 megawatts (10³ MW), and one megawatt equals exactly 0.001 gigawatts (10⁻³ GW). Converting megawatts to gigawatts is achieved by dividing the megawatt value by 1,000.",
    "This national energy infrastructure guide explains the conversion relationship, provides step-by-step grid capacity calculations, presents a high-voltage reference table, explores bulk energy applications, and answers frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert megawatts to gigawatts, divide the megawatt value by 1,000 (or multiply by 0.001). For example, 1,200 MW (the output of a large nuclear reactor unit) equals exactly 1.2 gigawatts (GW).",
    formulaDisplay: "GW = MW ÷ 1,000 = MW × 0.001",
    subtext: "1 megawatt is equal to exactly 0.001 gigawatts (SI standard)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megawatt (MW)",
    text: "The megawatt (symbol: MW) is an official SI decimal multiple representing 1,000,000 Watts (10⁶ W) or 1,000,000 Joules of energy transferred per second. It is the primary rating unit for commercial combined-cycle gas turbines, utility battery storage installations, and regional distribution substations."
  },
  aboutTargetUnit: {
    title: "Understanding the Gigawatt (GW)",
    text: "The gigawatt (symbol: GW) is an official decimal multiple representing 1,000,000,000 Watts (10⁹ W), equivalent to 1,000 Megawatts or 1,000,000 Kilowatts. As the scale for state and national energy planning, gigawatts quantify regional electrical grids, massive hydroelectric dams (such as the 22.5 GW Three Gorges Dam), and intercontinental high-voltage DC interconnectors."
  },
  relationship: "Because 1 GW = 10⁹ W and 1 MW = 10⁶ W, 1 MW = 10⁶ / 10⁹ = 0.001 GW exactly. Conversely, 1 GW contains exactly 1,000 MW.",
  relationshipTitle: "Megawatt to Gigawatt Scale Relationship",
  relationshipItems: [
    { label: "1 MW", value: "0.001 GW (Single commercial wind turbine)" },
    { label: "100 MW", value: "0.1 GW (Utility peaker gas turbine plant)" },
    { label: "500 MW", value: "0.5 GW (Large thermal coal or gas generating unit)" },
    { label: "1,000 MW", value: "1.0 GW (Standard commercial nuclear reactor unit)" },
    { label: "22,500 MW", value: "22.5 GW (Three Gorges Dam hydroelectric capacity)" }
  ],
  formula: {
    text: "Divide the power in megawatts by 1,000 to obtain the power in gigawatts.",
    math: "GW = MW / 1000",
    subtext: "Alternatively: GW = MW × 0.001"
  },
  formulaTitle: "Megawatt to Gigawatt Conversion Formula",
  practicalTip: {
    title: "Quick Decimal Shift Rule",
    text: "To convert MW to GW instantly, move the decimal point three spots to the left (e.g., 4,500 MW becomes 4.5 GW)."
  },
  expertNote: {
    title: "National Grid Peak Load Benchmarks",
    text: "To contextualize gigawatts: the total UK national electrical grid demand typically peaks between 40 GW and 50 GW in winter, whereas the Texas ERCOT grid peaks around 85 GW in summer."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Offshore Wind Farm Cluster",
        subtitle: "Convert a 3,600 MW offshore wind farm development zone into gigawatts.",
        steps: [
          "Identify the megawatt value: 3,600 MW.",
          "Apply the formula: GW = 3,600 ÷ 1,000.",
          "Calculate: 3,600 ÷ 1,000 = 3.6 GW.",
          "Result: 3,600 MW equals exactly 3.6 gigawatts."
        ]
      },
      {
        title: "Example 2: Nuclear Power Plant Total Capacity",
        subtitle: "Convert a 4-reactor nuclear power station rated at 4,800 MW into GW.",
        steps: [
          "Identify power in MW: 4,800 MW.",
          "Multiply by 0.001: 4,800 × 0.001 = 4.8 GW.",
          "Result: 4,800 MW equals exactly 4.8 gigawatts."
        ]
      },
      {
        title: "Example 3: Regional Grid Battery Storage Pipeline",
        subtitle: "Convert an 850 MW energy storage pipeline into gigawatts.",
        steps: [
          "Identify power: 850 MW.",
          "Calculate: 850 ÷ 1,000 = 0.85 GW.",
          "Result: 850 MW equals 0.85 gigawatts."
        ]
      }
    ]
  },
  table: {
    title: "Megawatt to Gigawatt Conversion Table",
    headers: ["Megawatts (MW)", "Gigawatts (GW)", "Kilowatts (kW)", "Grid Infrastructure Level"],
    rows: [
      { fromVal: "10 MW", toVal: "0.01 GW", extra: "10,000 kW", extra2: "Small utility solar farm" },
      { fromVal: "50 MW", toVal: "0.05 GW", extra: "50,000 kW", extra2: "Medium grid battery storage system" },
      { fromVal: "100 MW", toVal: "0.10 GW", extra: "100,000 kW", extra2: "Gas turbine peaker plant" },
      { fromVal: "250 MW", toVal: "0.25 GW", extra: "250,000 kW", extra2: "Major onshore wind installation" },
      { fromVal: "500 MW", toVal: "0.50 GW", extra: "500,000 kW", extra2: "Utility combined-cycle gas turbine" },
      { fromVal: "1,000 MW", toVal: "1.00 GW", extra: "1,000,000 kW", extra2: "1 Gigawatt base utility benchmark" },
      { fromVal: "1,500 MW", toVal: "1.50 GW", extra: "1,500,000 kW", extra2: "Large AP1000 nuclear reactor unit" },
      { fromVal: "2,000 MW", toVal: "2.00 GW", extra: "2,000,000 kW", extra2: "Hoover Dam maximum capacity (2.08 GW)" },
      { fromVal: "5,000 MW", toVal: "5.00 GW", extra: "5,000,000 kW", extra2: "Major regional generation hub" },
      { fromVal: "10,000 MW", toVal: "10.00 GW", extra: "10,000,000 kW", extra2: "Guri Hydroelectric Dam (Venezuela)" },
      { fromVal: "14,000 MW", toVal: "14.00 GW", extra: "14,000,000 kW", extra2: "Itaipu Hydroelectric Dam (Brazil/Paraguay)" },
      { fromVal: "22,500 MW", toVal: "22.50 GW", extra: "22,500,000 kW", extra2: "Three Gorges Dam (World's largest power station)" }
    ]
  },
  applications: {
    title: "Practical Applications of MW to GW Conversion",
    items: [
      {
        title: "National Grid Transmission and Dispatch Planning",
        text: "Independent System Operators (like PJM, CAISO, and ENTSO-E) aggregate thousands of megawatt-scale power generation resources to manage total instantaneous demand in gigawatts."
      },
      {
        title: "National Clean Energy Capacity Targets",
        text: "Government energy ministries establish statutory renewable development goals (such as installing 50 GW of offshore wind or 100 GW of solar PV) evaluated against MW procurement contracts."
      },
      {
        title: "High-Voltage Direct Current (HVDC) Interconnectors",
        text: "Subsea and cross-border HVDC power transmission links are rated between 1 GW and 3 GW (1,000 MW to 3,000 MW) to wheel bulk electricity between distinct national grids."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1,000 instead of dividing: Because a gigawatt is 1,000 times larger than a megawatt, the value in GW is always 1,000 times smaller.",
      "Confusing instantaneous power (MW/GW) with annual energy production (MWh/GWh or TWh): Energy equals power multiplied by operating hours and capacity factor.",
      "Losing precision when handling decimals: Always maintain appropriate significant figures when converting sub-1,000 MW figures (e.g., 345 MW = 0.345 GW)."
    ]
  },
  faqs: [
    {
      question: "How many gigawatts are in 1 megawatt?",
      answer: "There are exactly 0.001 gigawatts (10⁻³ GW) in 1 megawatt."
    },
    {
      question: "What is the formula to convert megawatts to gigawatts?",
      answer: "The formula is: gigawatts = megawatts ÷ 1,000 (or GW = MW × 0.001)."
    },
    {
      question: "How many megawatts are in 1 gigawatt?",
      answer: "There are exactly 1,000 megawatts in 1 gigawatt."
    },
    {
      question: "How many homes can 1 gigawatt power?",
      answer: "One gigawatt (1,000 MW) can supply continuous electricity to approximately 750,000 to 1,000,000 average homes."
    },
    {
      question: "How do I convert 2,500 MW to GW?",
      answer: "2,500 MW ÷ 1,000 = 2.5 gigawatts."
    },
    {
      question: "How do I convert gigawatts back to megawatts?",
      answer: "Multiply the gigawatt value by 1,000 (for example: 3.2 GW × 1,000 = 3,200 MW)."
    },
    {
      question: "What is the largest power station in gigawatts?",
      answer: "The Three Gorges Dam in China is the world's largest power station, with an installed nameplate capacity of 22,500 MW (22.5 GW)."
    },
    {
      question: "What unit comes after Gigawatt?",
      answer: "The Terawatt (TW), which equals 1,000 Gigawatts or 1,000,000 Megawatts (10¹² Watts)."
    }
  ],
  relatedList: [
    { label: "Gigawatt to Megawatt", from: "gigawatt", to: "megawatt" },
    { label: "Megawatt to Kilowatt", from: "megawatt", to: "kilowatt" },
    { label: "Megawatt to Watt", from: "megawatt", to: "watt" },
    { label: "Megawatt to Horsepower (Mechanical)", from: "megawatt", to: "horsepower-mechanical" },
    { label: "Kilowatt to Megawatt", from: "kilowatt", to: "megawatt" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "International Energy Agency (IEA) - World Energy Outlook & Power Statistics.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
