import { CustomArticleData } from "./types";

export const gigawattToMegawatt: CustomArticleData = {
  fromUnitId: "gigawatt",
  toUnitId: "megawatt",
  seoTitle: "Gigawatt to Megawatt Converter (GW to MW)",
  metaDescription: "Convert gigawatts to megawatts (GW to MW) with ease. Discover the exact 1,000× factor, utility grid applications, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/gigawatt-to-megawatt",
  h1: "Gigawatt to Megawatt Converter",
  introduction: [
    "The gigawatt (GW) and the megawatt (MW) are the primary units used to describe utility-scale electric power. While individual power generation facilities, such as combined-cycle natural gas stations and wind parks, are universally rated in megawatts, national grids, transmission interconnects, and regional supply-demand balances are reported in gigawatts.",
    "Converting gigawatts to megawatts is a clean metric calculation. Under the International System of Units (SI), 'giga-' represents 10⁹ (one billion) and 'mega-' represents 10⁶ (one million). The ratio between these two SI prefixes is exactly 1,000. As a result, one gigawatt equals exactly 1,000 megawatts. This simple factor allows power traders, grid operators, and electrical engineers to translate system-wide forecasts into plant-level generator dispatches.",
    "This guide covers the conversion formula, walks through real-world power dispatch examples, provides an engineering lookup table, reviews utility use cases, and addresses common questions."
  ],
  quickAnswer: {
    text: "To convert gigawatts (GW) to megawatts (MW), multiply the gigawatt value by 1,000. For example, a 2.4 GW regional solar fleet produces exactly 2,400 MW of power.",
    formulaDisplay: "MW = GW × 1,000",
    subtext: "1 gigawatt is equal to exactly 1,000 megawatts."
  },
  aboutSourceUnit: {
    title: "Understanding the Gigawatt (GW)",
    text: "The gigawatt (symbol: GW) equals 1,000,000,000 watts (10⁹ W). It is the preferred unit for assessing macro-scale energy systems, including national generation portfolios, inter-regional transmission lines, and country-level peak electricity consumption records."
  },
  aboutTargetUnit: {
    title: "Understanding the Megawatt (MW)",
    text: "The megawatt (symbol: MW) equals 1,000,000 watts (10⁶ W). It serves as the standard nameplate capacity unit for commercial power plants, utility-scale battery energy storage systems (BESS), and heavy industrial smelting operations."
  },
  relationship: "Because 1 GW = 10⁹ W and 1 MW = 10⁶ W, the ratio is 10⁹ / 10⁶ = 10³ = 1,000. Thus, 1 GW = 1,000 MW. Conversely, 1 MW = 0.001 GW (10⁻³ GW).",
  relationshipTitle: "Gigawatt to Megawatt Relationship",
  relationshipItems: [
    { label: "0.001 GW", value: "1 MW (Large industrial manufacturing load)" },
    { label: "0.05 GW", value: "50 MW (Mid-sized solar farm)" },
    { label: "0.1 GW", value: "100 MW (Utility peaker gas turbine)" },
    { label: "0.5 GW", value: "500 MW (Standard combined-cycle power block)" },
    { label: "1.0 GW", value: "1,000 MW (Typical commercial nuclear reactor unit)" }
  ],
  formula: {
    text: "Multiply the power in gigawatts by 1,000 to obtain megawatts.",
    math: "MW = GW * 1000",
    subtext: "Shift the decimal point 3 positions to the right."
  },
  formulaTitle: "Gigawatt to Megawatt Conversion Formula",
  practicalTip: {
    title: "The Three-Zero Shift",
    text: "Converting between GW and MW requires moving the decimal point three places. Multiply by 1,000 to go from GW to MW, and divide by 1,000 to go from MW to GW."
  },
  expertNote: {
    title: "Grid Reserve Margins",
    text: "Transmission system operators (TSOs) maintain operating reserves in megawatts (e.g., 800 MW of spinning reserve) to absorb unexpected trips of 1 GW or larger base-load power units without causing grid frequency collapse."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Regional Wind Power Production",
        subtitle: "Convert 3.75 GW of regional wind power production into megawatts.",
        steps: [
          "Identify the power value: 3.75 GW.",
          "Apply the formula: MW = 3.75 × 1,000.",
          "Multiply: 3.75 × 1,000 = 3,750 MW.",
          "Result: 3.75 GW equals 3,750 megawatts."
        ]
      },
      {
        title: "Example 2: Nuclear Power Station Capacity",
        subtitle: "Convert a 2.2 GW two-unit nuclear power plant to megawatts.",
        steps: [
          "State the capacity: 2.2 GW.",
          "Multiply by 1,000: 2.2 × 1,000 = 2,200 MW.",
          "Result: 2.2 GW equals 2,200 MW (1,100 MW per reactor unit)."
        ]
      },
      {
        title: "Example 3: High-Voltage Direct Current (HVDC) Line",
        subtitle: "Convert a 0.6 GW undersea HVDC transmission interconnector to megawatts.",
        steps: [
          "Identify the line capacity: 0.6 GW.",
          "Calculate: 0.6 × 1,000 = 600 MW.",
          "Result: 0.6 GW corresponds to 600 megawatts."
        ]
      }
    ]
  },
  table: {
    title: "Gigawatt to Megawatt Conversion Table",
    headers: ["Gigawatts (GW)", "Megawatts (MW)", "Kilowatts (kW)", "Utility Context"],
    rows: [
      { fromVal: "0.01 GW", toVal: "10 MW", extra: "10,000 kW", extra2: "Small town power demand" },
      { fromVal: "0.05 GW", toVal: "50 MW", extra: "50,000 kW", extra2: "Utility battery storage installation" },
      { fromVal: "0.10 GW", toVal: "100 MW", extra: "100,000 kW", extra2: "Onshore wind farm cluster" },
      { fromVal: "0.25 GW", toVal: "250 MW", extra: "250,000 kW", extra2: "Mid-scale thermal power unit" },
      { fromVal: "0.50 GW", toVal: "500 MW", extra: "500,000 kW", extra2: "Standard combined-cycle plant" },
      { fromVal: "1.00 GW", toVal: "1,000 MW", extra: "1,000,000 kW", extra2: "Standard large nuclear reactor unit" },
      { fromVal: "1.21 GW", toVal: "1,210 MW", extra: "1,210,000 kW", extra2: "Iconic cinematic power reference" },
      { fromVal: "2.00 GW", toVal: "2,000 MW", extra: "2,000,000 kW", extra2: "Major multi-unit hydro dam" },
      { fromVal: "5.00 GW", toVal: "5,000 MW", extra: "5,000,000 kW", extra2: "State-wide peak power swing" },
      { fromVal: "10.00 GW", toVal: "10,000 MW", extra: "10,000,000 kW", extra2: "Country-level baseline demand" },
      { fromVal: "15.00 GW", toVal: "15,000 MW", extra: "15,000,000 kW", extra2: "Itaipu Dam total generation" },
      { fromVal: "22.50 GW", toVal: "22,500 MW", extra: "22,500,000 kW", extra2: "Three Gorges Dam maximum rating" }
    ]
  },
  applications: {
    title: "Practical Applications of GW to MW Conversion",
    items: [
      {
        title: "Wholesale Electricity Trading",
        text: "Energy traders monitor national forecasts published in gigawatts and bid contracts on electricity exchanges in blocks of 1 MW to 50 MW."
      },
      {
        title: "Grid Interconnection Queues",
        text: "Independent system operators (ISOs) track tens of gigawatts of proposed clean energy projects and break down submissions into individual 100 MW or 250 MW project filings."
      },
      {
        title: "Disaster Preparedness and Outage Tracking",
        text: "Emergency response teams convert headline grid deficits in gigawatts to plant outages in megawatts to coordinate emergency diesel generators and mobile substations."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Dividing instead of multiplying: 1 gigawatt equals 1,000 megawatts, never 0.001 megawatts. The MW figure is always larger than the GW figure.",
      "Confusing MW with kW: If you multiply by 1,000,000, you obtain kilowatts, not megawatts.",
      "Mixing up capacity (GW) with generation (GWh): A plant rated at 1 GW operating for 10 hours delivers 10 GWh of energy, not 10 GW."
    ]
  },
  faqs: [
    {
      question: "How many megawatts are in 1 gigawatt?",
      answer: "There are exactly 1,000 megawatts (MW) in 1 gigawatt (GW)."
    },
    {
      question: "What is the formula to convert gigawatts to megawatts?",
      answer: "The formula is: MW = GW × 1,000 (megawatts = gigawatts × 1,000)."
    },
    {
      question: "How do I convert megawatts to gigawatts?",
      answer: "Divide the megawatt value by 1,000. For instance, 2,400 MW ÷ 1,000 = 2.4 GW."
    },
    {
      question: "What is 1.21 GW in megawatts?",
      answer: "1.21 GW equals exactly 1,210 megawatts (1,210 MW)."
    },
    {
      question: "What is 0.8 GW in MW?",
      answer: "0.8 GW × 1,000 = 800 megawatts (800 MW)."
    },
    {
      question: "Why do grid operators use both GW and MW?",
      answer: "GW is used for macro-level system totals (national demand, regional interconnection limits), while MW is the practical scale for individual generating stations and heavy industrial customers."
    },
    {
      question: "Are GW and MW SI units?",
      answer: "Yes, both are standard SI decimal multiples of the watt, using the prefixes 'giga-' (10⁹) and 'mega-' (10⁶)."
    },
    {
      question: "How many 2 MW wind turbines make up 1 GW?",
      answer: "Because 1 GW equals 1,000 MW, it takes exactly 500 wind turbines rated at 2 MW each to equal 1 GW of nameplate capacity."
    }
  ],
  relatedList: [
    { label: "Megawatt to Gigawatt", from: "megawatt", to: "gigawatt" },
    { label: "Gigawatt to Watt", from: "gigawatt", to: "watt" },
    { label: "Gigawatt to Kilowatt", from: "gigawatt", to: "kilowatt" },
    { label: "Megawatt to Kilowatt", from: "megawatt", to: "kilowatt" },
    { label: "Kilowatt to Megawatt", from: "kilowatt", to: "megawatt" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition.",
    "North American Electric Reliability Corporation (NERC) - Reliability Standards.",
    "European Network of Transmission System Operators for Electricity (ENTSO-E) - Grid Statistics."
  ]
};
