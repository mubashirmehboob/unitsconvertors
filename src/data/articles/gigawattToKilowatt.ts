import { CustomArticleData } from "./types";

export const gigawattToKilowatt: CustomArticleData = {
  fromUnitId: "gigawatt",
  toUnitId: "kilowatt",
  seoTitle: "Gigawatt to Kilowatt Converter (GW to kW)",
  metaDescription: "Convert gigawatts to kilowatts (GW to kW) quickly and accurately. Formula, power generation examples, SI prefix conversions, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/gigawatt-to-kilowatt",
  h1: "Gigawatt to Kilowatt Converter",
  introduction: [
    "The gigawatt (GW) and the kilowatt (kW) are two ubiquitous multiples of the watt in the International System of Units (SI). While kilowatts represent everyday electrical ratings for industrial machinery, electric vehicle charging stations, and commercial building services, gigawatts measure entire national grid systems, nuclear generation fleets, and regional interconnect capacities.",
    "Converting gigawatts to kilowatts is governed by standard SI decimal prefixes. Because 'giga-' denotes 10⁹ and 'kilo-' denotes 10³, the ratio between them is 10⁹ ÷ 10³ = 10⁶. Therefore, one gigawatt equals exactly 1,000,000 kilowatts (one million kilowatts). This conversion enables engineers and power market participants to express bulk utility metrics in equipment-level ratings.",
    "This practical guide walks through the exact conversion formula, shows clear step-by-step utility calculations, provides a quick reference table, highlights industrial applications, and answers the most common technical questions."
  ],
  quickAnswer: {
    text: "To convert gigawatts (GW) to kilowatts (kW), multiply the gigawatt value by 1,000,000 (10⁶). For example, a 1.5 GW regional wind portfolio produces exactly 1,500,000 kW of generation capacity.",
    formulaDisplay: "kW = GW × 1,000,000",
    subtext: "1 gigawatt contains exactly 1,000,000 kilowatts (one million kW)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gigawatt (GW)",
    text: "The gigawatt (symbol: GW) is an SI power unit equal to one billion watts (10⁹ W) or one million kilowatts. It is predominantly used by national energy regulators, transmission system operators (TSOs), and power utility planners to quantify grid capacity and regional power flows."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilowatt (kW)",
    text: "The kilowatt (symbol: kW) is an SI unit equal to 1,000 watts (10³ W). It is the universal standard for rating commercial electrical appliances, rooftop solar photovoltaic arrays, HVAC chillers, and electric vehicle rapid chargers."
  },
  relationship: "Because 1 GW = 10⁹ W and 1 kW = 10³ W, dividing 10⁹ by 10³ leaves 10⁶ (one million). Thus, 1 GW = 1,000,000 kW. Conversely, 1 kW = 10⁻⁶ GW = 0.000001 GW.",
  relationshipTitle: "Gigawatt to Kilowatt Power Equivalences",
  relationshipItems: [
    { label: "0.00001 GW", value: "10 kW (Commercial rooftop solar installation)" },
    { label: "0.001 GW", value: "1,000 kW (1 MW - Heavy industrial manufacturing load)" },
    { label: "0.05 GW", value: "50,000 kW (Mid-sized municipal substation)" },
    { label: "0.5 GW", value: "500,000 kW (Combined-cycle gas turbine unit)" },
    { label: "1.0 GW", value: "1,000,000 kW (Standard utility nuclear reactor output)" }
  ],
  formula: {
    text: "Multiply the power in gigawatts by 1,000,000 to convert to kilowatts.",
    math: "kW = GW * 1000000",
    subtext: "Shift the decimal point 6 positions to the right."
  },
  formulaTitle: "Gigawatt to Kilowatt Conversion Formula",
  practicalTip: {
    title: "The Six-Zero Rule",
    text: "To switch between GW and kW in your head, simply add 6 zeros to a whole gigawatt number or move the decimal point six spaces to the right (e.g., 0.25 GW becomes 250,000 kW)."
  },
  expertNote: {
    title: "Peak Demand Sizing",
    text: "Grid operators balance grid-level gigawatt forecasts against individual feeder circuits rated in thousands of kilowatts. Factoring in line losses (typically 4% to 8%) ensures that generation dispatched in GW reliably covers aggregate end-user kilowatt demand."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Offshore Wind Farm Capacity",
        subtitle: "Convert a 1.4 GW offshore wind facility into kilowatts.",
        steps: [
          "Identify the power value in gigawatts: 1.4 GW.",
          "Apply the formula: kW = 1.4 × 1,000,000.",
          "Multiply: 1.4 × 1,000,000 = 1,400,000 kW.",
          "Result: 1.4 GW equals 1,400,000 kilowatts."
        ]
      },
      {
        title: "Example 2: Data Center Campus Power Feed",
        subtitle: "Determine the capacity in kW for a planned 0.35 GW hyper-scale data center park.",
        steps: [
          "State the capacity: 0.35 GW.",
          "Multiply by 10⁶: 0.35 × 1,000,000.",
          "Compute: 350,000 kW.",
          "Result: 0.35 GW equals 350,000 kW."
        ]
      },
      {
        title: "Example 3: Pumped-Storage Hydro Plant",
        subtitle: "Convert a 2.1 GW pumped-storage hydroelectric facility to kilowatts.",
        steps: [
          "Identify the rating: 2.1 GW.",
          "Calculate: 2.1 × 1,000,000 = 2,100,000 kW.",
          "Result: 2.1 GW equals 2,100,000 kilowatts."
        ]
      }
    ]
  },
  table: {
    title: "Gigawatt to Kilowatt Conversion Table",
    headers: ["Gigawatts (GW)", "Kilowatts (kW)", "Megawatts (MW)", "Grid Reference Example"],
    rows: [
      { fromVal: "0.001 GW", toVal: "1,000 kW", extra: "1 MW", extra2: "Industrial plant demand" },
      { fromVal: "0.005 GW", toVal: "5,000 kW", extra: "5 MW", extra2: "Small town solar farm" },
      { fromVal: "0.01 GW", toVal: "10,000 kW", extra: "10 MW", extra2: "Hospital district energy network" },
      { fromVal: "0.05 GW", toVal: "50,000 kW", extra: "50 MW", extra2: "Utility battery storage system" },
      { fromVal: "0.10 GW", toVal: "100,000 kW", extra: "100 MW", extra2: "Mid-scale peaker plant" },
      { fromVal: "0.25 GW", toVal: "250,000 kW", extra: "250 MW", extra2: "Large onshore wind installation" },
      { fromVal: "0.50 GW", toVal: "500,000 kW", extra: "500 MW", extra2: "Modern thermal generating unit" },
      { fromVal: "0.75 GW", toVal: "750,000 kW", extra: "750 MW", extra2: "Supercritical coal power unit" },
      { fromVal: "1.00 GW", toVal: "1,000,000 kW", extra: "1,000 MW", extra2: "Standard nuclear reactor" },
      { fromVal: "2.00 GW", toVal: "2,000,000 kW", extra: "2,000 MW", extra2: "Hoover Dam full output" },
      { fromVal: "5.00 GW", toVal: "5,000,000 kW", extra: "5,000 MW", extra2: "Large provincial grid capacity" },
      { fromVal: "10.00 GW", toVal: "10,000,000 kW", extra: "10,000 MW", extra2: "Medium-sized nation peak demand" }
    ]
  },
  applications: {
    title: "Practical Applications of GW to kW Conversion",
    items: [
      {
        title: "Utility Tariff and Power Invoicing",
        text: "Wholesale energy providers contract supply in gigawatts while end customers are billed and metered based on kilowatt demand and kilowatt-hour consumption."
      },
      {
        title: "Electric Vehicle (EV) Grid Impact Analysis",
        text: "Automotive researchers convert fleet charging demands from aggregate gigawatts down to hundreds of thousands of individual 7 kW or 150 kW charging ports."
      },
      {
        title: "Transmission Substation Sizing",
        text: "Electrical distribution engineers step down regional gigawatt transmission lines into local distribution feeder ratings expressed in thousands of kilowatts."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Confusing kilowatts with megawatts: 1 GW equals 1,000 MW, but 1,000,000 kW. Remember to multiply by 1,000,000 for kilowatts.",
      "Confusing instantaneous power (kW) with cumulative energy (kWh): Kilowatts measure rate of energy flow; kilowatt-hours measure total energy consumed.",
      "Mistyping the decimal place: Moving the decimal only 3 places converts to megawatts instead of kilowatts."
    ]
  },
  faqs: [
    {
      question: "How many kilowatts are in 1 gigawatt?",
      answer: "There are exactly 1,000,000 kilowatts (one million kW) in 1 gigawatt."
    },
    {
      question: "What is the formula to convert gigawatts to kilowatts?",
      answer: "The formula is: kW = GW × 1,000,000 (kilowatts = gigawatts × 10⁶)."
    },
    {
      question: "How do I convert kilowatts to gigawatts?",
      answer: "Divide the kilowatt value by 1,000,000 (or multiply by 0.000001). For instance, 2,500,000 kW equals 2.5 GW."
    },
    {
      question: "What is 0.5 GW in kilowatts?",
      answer: "0.5 GW × 1,000,000 = 500,000 kW (or 500 megawatts)."
    },
    {
      question: "How many 5 kW rooftop solar systems equal 1 gigawatt?",
      answer: "1 GW equals 1,000,000 kW. Dividing 1,000,000 kW by 5 kW per home equals exactly 200,000 residential rooftop solar systems."
    },
    {
      question: "What is the intermediate unit between kW and GW?",
      answer: "The megawatt (MW) sits directly between kW and GW: 1 GW = 1,000 MW = 1,000,000 kW."
    },
    {
      question: "Is gigawatt capitalized in symbols?",
      answer: "Yes, the symbol for gigawatt is GW (capital G and capital W), while kilowatt is kW (lowercase k and capital W)."
    },
    {
      question: "What is 1.21 GW in kilowatts?",
      answer: "1.21 GW equals exactly 1,210,000 kilowatts (1,210,000 kW)."
    }
  ],
  relatedList: [
    { label: "Kilowatt to Gigawatt", from: "kilowatt", to: "gigawatt" },
    { label: "Gigawatt to Watt", from: "gigawatt", to: "watt" },
    { label: "Gigawatt to Megawatt", from: "gigawatt", to: "megawatt" },
    { label: "Megawatt to Kilowatt", from: "megawatt", to: "kilowatt" },
    { label: "Kilowatt to Megawatt", from: "kilowatt", to: "megawatt" }
  ],
  references: [
    "BIPM - SI Brochure: The International System of Units (9th Edition).",
    "IEC 60027 - Letter symbols to be used in electrical technology.",
    "NIST Special Publication 330 - The International System of Units (SI)."
  ]
};
