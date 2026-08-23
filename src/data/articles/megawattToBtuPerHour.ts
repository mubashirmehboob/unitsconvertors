import { CustomArticleData } from "./types";

export const megawattToBtuPerHour: CustomArticleData = {
  fromUnitId: "megawatt",
  toUnitId: "btu-per-hour",
  seoTitle: "Megawatt to BTU per Hour Converter (MW to BTU/h)",
  metaDescription: "Convert megawatts to BTU per hour (MW to BTU/h) with exact thermodynamic precision. District heating, power plant heat rates, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/megawatt-to-btu-per-hour",
  h1: "Megawatt to BTU per Hour Converter",
  introduction: [
    "The megawatt (MW) and British Thermal Unit per hour (BTU/h, often expressed in millions of BTU per hour as MMBTU/h or MBtu/hr) are macroscopic units of thermal power and heat rate used in power generation stations, district heating networks, industrial steam boiler plants, and large absorption chiller facilities. While the megawatt is the standard International System of Units (SI) measure, BTU per hour remains widely used across North American thermal energy markets and fossil fuel combustor engineering.",
    "Converting megawatts to BTU per hour connects modern SI thermal capacity with large-scale imperial heat engineering. By international standard (ISO 80000-5 International Table definition), one BTU equals 1,055.05585 Joules. Because one megawatt equals 1,000,000 Joules per second (3.6 × 10⁹ Joules per hour), one megawatt equals exactly 3,600,000,000 ÷ 1,055.05585 ≈ 3,412,141.63 BTU/h (approx. 3.412 MMBTU/h).",
    "This thermal power engineering guide details the mathematical conversion formula, provides step-by-step district heating and boiler heat rate calculations, presents a comprehensive industrial lookup table, explores utility thermal applications, and answers common questions."
  ],
  quickAnswer: {
    text: "To convert megawatts to BTU per hour (BTU/h), multiply the megawatt value by 3,412,141.63 (or divide by 2.93071 × 10⁻⁷). For example, a 10 MW district heating boiler plant produces approximately 34,121,416 BTU/h (approx. 34.12 MMBTU/h).",
    formulaDisplay: "BTU/h = MW × 3,412,141.63",
    subtext: "1 megawatt is equal to approximately 3,412,142 BTU per hour (or ~3.412 MMBTU/h)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megawatt (MW)",
    text: "The megawatt (symbol: MW) is an official SI decimal multiple of the Watt, representing 1,000,000 Joules of thermal or electrical energy transferred per second (1 MJ/s). In thermal engineering and cogeneration (CHP) plants, megawatts quantify thermal heat output (MWth) and electric power generation (MWe)."
  },
  aboutTargetUnit: {
    title: "Understanding BTU per Hour (BTU/h & MMBTU/h)",
    text: "BTU per hour (symbol: BTU/h or Btuh) is an imperial unit of thermal power indicating heat transfer rate. In utility and oil & gas contexts, heat rates are frequently denominated in millions of BTU per hour (MMBTU/h, where 1 MMBTU/h = 1,000,000 BTU/h). It is the standard rating unit for industrial steam boilers and natural gas burners in the United States."
  },
  relationship: "Because 1 megawatt = 3.6 × 10⁹ Joules per hour and 1 BTU = 1,055.05585 Joules, 1 MW = 3.6 × 10⁹ / 1,055.05585 ≈ 3,412,141.63 BTU/h (3.41214 MMBTU/h). Conversely, 1 MMBTU/h ≈ 0.293071 MW.",
  relationshipTitle: "Megawatt to BTU/h Thermal Equivalence",
  relationshipItems: [
    { label: "0.2931 MW", value: "1,000,000 BTU/h (1 MMBTU/h commercial boiler)" },
    { label: "1.0 MW", value: "3,412,142 BTU/h (3.412 MMBTU/h thermal capacity)" },
    { label: "10.0 MW", value: "34,121,416 BTU/h (District heating plant branch)" },
    { label: "50.0 MW", value: "170,607,082 BTU/h (Large industrial steam boiler)" },
    { label: "100.0 MW", value: "341,214,163 BTU/h (Combined cycle heat recovery generator)" }
  ],
  formula: {
    text: "Multiply the power in megawatts by 3,412,141.63 to find BTU per hour.",
    math: "BTU_per_hr = MW * 3412141.63",
    subtext: "For MMBTU/h: MMBTU/h = MW × 3.41214163"
  },
  formulaTitle: "Megawatt to BTU per Hour Conversion Formula",
  practicalTip: {
    title: "Quick 3.41 MMBTU/h Mental Rule",
    text: "Multiply the megawatt thermal output by 3.41 to find million BTU per hour (MMBTU/h) directly (e.g., 20 MW × 3.41 = 68.2 MMBTU/h; exact: 68.24 MMBTU/h)."
  },
  expertNote: {
    title: "Thermal MW (MWth) vs Electrical MW (MWe)",
    text: "In combined heat and power (CHP) and nuclear plants, always distinguish thermal megawatts (MWth) from electrical megawatts (MWe). A 1,000 MWe nuclear plant operating at 33% efficiency generates approximately 3,000 MWth of heat (~10,236 MMBTU/h)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: District Heating Biomass Boiler",
        subtitle: "Convert a 12 MW thermal (MWth) district heating plant capacity into BTU per hour and MMBTU/h.",
        steps: [
          "Identify the thermal megawatt value: 12 MW.",
          "Apply the conversion formula: BTU/h = 12 × 3,412,141.63.",
          "Calculate: 12 × 3,412,141.63 = 40,945,699.56 BTU/h.",
          "Convert to MMBTU/h: 40,945,700 ÷ 1,000,000 = 40.95 MMBTU/h.",
          "Result: 12 MW equals approximately 40,945,700 BTU/h (40.95 MMBTU/h)."
        ]
      },
      {
        title: "Example 2: Industrial Heat Recovery Steam Generator (HRSG)",
        subtitle: "Convert a 45 MWth waste heat recovery steam generator capacity into BTU/h.",
        steps: [
          "Identify power in MW: 45 MW.",
          "Multiply by 3.412142 MMBTU/h per MW: 45 × 3.412142 = 153.546 MMBTU/h.",
          "Result: 45 MW equals approximately 153,546,373 BTU/h (153.55 MMBTU/h)."
        ]
      },
      {
        title: "Example 3: Central Campus Chilled Water Plant",
        subtitle: "Convert an 8.5 MW thermal cooling capacity into BTU/h.",
        steps: [
          "Identify cooling power: 8.5 MW.",
          "Calculate: 8.5 × 3,412,141.63 = 29,003,203.86 BTU/h.",
          "Result: 8.5 MW equals approximately 29,003,204 BTU/h (approx. 2,417 Tons of Refrigeration)."
        ]
      }
    ]
  },
  table: {
    title: "Megawatt to BTU per Hour Conversion Table",
    headers: ["Megawatts (MW)", "BTU per Hour (BTU/h)", "Million BTU/h (MMBTU/h)", "Utility / Plant Scale"],
    rows: [
      { fromVal: "0.10 MW", toVal: "341,214.16 BTU/h", extra: "0.34 MMBTU/h", extra2: "Small commercial heating boiler" },
      { fromVal: "0.293 MW", toVal: "1,000,000.00 BTU/h", extra: "1.00 MMBTU/h", extra2: "1 MMBTU/h baseline thermal benchmark" },
      { fromVal: "0.50 MW", toVal: "1,706,070.82 BTU/h", extra: "1.71 MMBTU/h", extra2: "Hospital auxiliary hot water system" },
      { fromVal: "1.00 MW", toVal: "3,412,141.63 BTU/h", extra: "3.41 MMBTU/h", extra2: "1 MWth base thermal generation unit" },
      { fromVal: "2.50 MW", toVal: "8,530,354.08 BTU/h", extra: "8.53 MMBTU/h", extra2: "Commercial district cooling chiller bank" },
      { fromVal: "5.00 MW", toVal: "17,060,708.15 BTU/h", extra: "17.06 MMBTU/h", extra2: "Industrial food processing steam plant" },
      { fromVal: "10.00 MW", toVal: "34,121,416.30 BTU/h", extra: "34.12 MMBTU/h", extra2: "Municipal district heating substation" },
      { fromVal: "25.00 MW", toVal: "85,303,540.75 BTU/h", extra: "85.30 MMBTU/h", extra2: "Pulp & paper mill chemical recovery boiler" },
      { fromVal: "50.00 MW", toVal: "170,607,081.50 BTU/h", extra: "170.61 MMBTU/h", extra2: "Refinery crude oil distillation furnace" },
      { fromVal: "100.00 MW", toVal: "341,214,163.00 BTU/h", extra: "341.21 MMBTU/h", extra2: "Combined-cycle gas turbine HRSG plant" },
      { fromVal: "250.00 MW", toVal: "853,035,407.50 BTU/h", extra: "853.04 MMBTU/h", extra2: "Coal-fired thermal boiler steam output" },
      { fromVal: "500.00 MW", toVal: "1,706,070,815.00 BTU/h", extra: "1,706.07 MMBTU/h", extra2: "Supercritical utility power boiler furnace" }
    ]
  },
  applications: {
    title: "Practical Applications of MW to BTU/h Conversion",
    items: [
      {
        title: "Power Plant Heat Rate and Efficiency Calculations",
        text: "Thermal engineers evaluate power plant heat rates by converting fuel heat input (in MMBTU/h or BTU/kWh) to net electrical power output (in MWe)."
      },
      {
        title: "District Energy and Cogeneration (CHP) Sizing",
        text: "Municipal district energy planners convert turbine exhaust thermal heat (in MWth) to BTU/h for distribution across city-wide steam and hot water loops."
      },
      {
        title: "Industrial Petrochemical Furnace Specification",
        text: "Petrochemical process engineers convert furnace firing duties between ISO megawatts and MMBTU/h when sizing natural gas burner management systems."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 3,412,142 instead of multiplying: 1 MW produces over 3.41 million BTU/h, so the BTU/h figure is always millions of times higher.",
      "Confusing BTU/h with MMBTU/h: 1 MMBTU/h = 1,000,000 BTU/h. Always double-check whether the specification requires raw BTU/h or MMBTU/h.",
      "Confusing thermal power (MWth) with electrical generation (MWe): In thermal power plants, thermal input MWth is roughly 2.5 to 3 times the electrical MWe output."
    ]
  },
  faqs: [
    {
      question: "How many BTU per hour are in 1 megawatt?",
      answer: "There are approximately 3,412,141.63 BTU per hour (or ~3.412 MMBTU/h) in 1 megawatt."
    },
    {
      question: "What is the formula to convert megawatts to BTU per hour?",
      answer: "The formula is: BTU/h = megawatts × 3,412,141.63."
    },
    {
      question: "How many megawatts are in 1 million BTU per hour (1 MMBTU/h)?",
      answer: "1 MMBTU/h equals approximately 0.293071 megawatts (293.071 kW)."
    },
    {
      question: "How do I convert 10 MW to MMBTU/h?",
      answer: "10 MW × 3.412142 = 34.12 MMBTU/h (34,121,416 BTU/h)."
    },
    {
      question: "How do I convert BTU per hour back to megawatts?",
      answer: "Divide the BTU/h value by 3,412,141.63 (or divide MMBTU/h by 3.412142)."
    },
    {
      question: "What is the difference between MWth and MWe?",
      answer: "MWth (megawatt thermal) measures raw heat output or rate of heat transfer, while MWe (megawatt electric) measures net electrical power produced after thermodynamic generator losses."
    },
    {
      question: "How many Tons of Refrigeration are in 1 megawatt?",
      answer: "1 megawatt of thermal cooling equals approximately 284.35 Tons of Refrigeration (TR)."
    },
    {
      question: "Why do gas turbine specs list both MW and MMBTU/hr?",
      answer: "Electrical output is rated in megawatts (MWe) for grid operators, while fuel consumption is rated in MMBTU/hr (Higher/Lower Heating Value) for natural gas procurement and emissions reporting."
    }
  ],
  relatedList: [
    { label: "BTU per Hour to Megawatt", from: "btu-per-hour", to: "megawatt" },
    { label: "Kilowatt to BTU per Hour", from: "kilowatt", to: "btu-per-hour" },
    { label: "Megawatt to Kilowatt", from: "megawatt", to: "kilowatt" },
    { label: "Megawatt to Horsepower (Mechanical)", from: "megawatt", to: "horsepower-mechanical" },
    { label: "Megawatt to Watt", from: "megawatt", to: "watt" }
  ],
  references: [
    "ASME PTC 4.4 - Gas Turbine Heat Recovery Steam Generators Performance Test Codes.",
    "ASHRAE Handbook - Fundamentals (SI and IP Editions).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
