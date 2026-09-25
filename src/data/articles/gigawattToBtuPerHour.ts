import { CustomArticleData } from "./types";

export const gigawattToBtuPerHour: CustomArticleData = {
  fromUnitId: "gigawatt",
  toUnitId: "btu-per-hour",
  seoTitle: "Gigawatt to BTU per Hour Converter (GW to BTU/h)",
  metaDescription: "Convert gigawatts to BTU per hour (GW to BTU/h) with exact thermodynamic accuracy. Grid heat rates, MMBTU/h equivalents, formulas, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/gigawatt-to-btu-per-hour",
  h1: "Gigawatt to BTU per Hour Converter",
  introduction: [
    "The gigawatt (GW) and the British Thermal Unit per hour (BTU/h, often measured in millions of BTU per hour as MMBTU/h) represent heat and power at utility and continental scales. While the gigawatt is the foundational SI unit for national electrical grids, bulk power plants, and renewable energy targets, BTU per hour remains the benchmark standard across North American natural gas procurement, refinery combustors, and utility boiler engineering.",
    "Converting gigawatts to BTU per hour bridges international SI energy metrics with imperial thermodynamic heat rates. By ISO 80000-5 international table definition, one BTU equals 1,055.05585 Joules. Because one gigawatt represents 1,000,000,000 Joules per second (3.6 × 10¹² Joules per hour), one gigawatt equals 3.6 × 10¹² ÷ 1,055.05585 ≈ 3,412,141,633 BTU/h (approximately 3,412.14 MMBTU/h).",
    "This engineering reference explains the mathematical conversion between gigawatts and BTU per hour, outlines district heating and utility fuel calculations, provides a comprehensive grid-scale lookup table, reviews industrial thermal applications, and answers technical questions."
  ],
  quickAnswer: {
    text: "To convert gigawatts (GW) to BTU per hour (BTU/h), multiply the gigawatt value by 3,412,141,633 (or multiply by 3,412.142 to find MMBTU/h). For example, 1 GW of thermal power equals approximately 3,412,141,633 BTU/h (3,412.14 MMBTU/h).",
    formulaDisplay: "BTU/h = GW × 3,412,141,633",
    subtext: "1 gigawatt is approximately equal to 3.412 billion BTU per hour (3,412.14 MMBTU/h)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gigawatt (GW)",
    text: "The gigawatt (symbol: GW) is an SI decimal multiple equal to one billion watts (10⁹ W or 1,000 MW). It is universally employed to quantify national electric demand, large nuclear and hydroelectric facilities, and inter-state transmission interconnect capacities."
  },
  aboutTargetUnit: {
    title: "Understanding BTU per Hour (BTU/h & MMBTU/h)",
    text: "BTU per hour (symbol: BTU/h) measures the rate of heat energy transfer, where one BTU raises the temperature of one pound of liquid water by one degree Fahrenheit. In utility and power plant operations, large values are denominated in MMBTU/h (one million BTU/h), which is standard for natural gas turbine firing and industrial boilers."
  },
  relationship: "Because 1 GW = 3.6 × 10¹² Joules per hour and 1 BTU = 1,055.05585 Joules, 1 GW = 3.6 × 10¹² / 1,055.05585 ≈ 3,412,141,633 BTU/h (3,412.1416 MMBTU/h). Conversely, 1 MMBTU/h ≈ 0.000293071 GW (293.071 kW).",
  relationshipTitle: "Gigawatt to BTU/h Thermal Equivalence",
  relationshipItems: [
    { label: "0.000293 GW", value: "1,000,000 BTU/h (1 MMBTU/h industrial boiler baseline)" },
    { label: "0.001 GW", value: "3,412,142 BTU/h (3.412 MMBTU/h - 1 MWth capacity)" },
    { label: "0.1 GW", value: "341,214,163 BTU/h (341.21 MMBTU/h peaker gas turbine)" },
    { label: "0.5 GW", value: "1,706,070,816 BTU/h (1,706.07 MMBTU/h combined-cycle unit)" },
    { label: "1.0 GW", value: "3,412,141,633 BTU/h (3,412.14 MMBTU/h commercial nuclear heat)" }
  ],
  formula: {
    text: "Multiply the power in gigawatts by 3,412,141,633 to calculate BTU per hour.",
    math: "BTU_per_hr = GW * 3412141633",
    subtext: "For million BTU per hour: MMBTU/h = GW × 3,412.141633"
  },
  formulaTitle: "Gigawatt to BTU per Hour Formula",
  practicalTip: {
    title: "The 3,412 MMBTU/h Rule",
    text: "To convert quickly in grid thermal calculations, multiply gigawatts by 3,412 to get MMBTU/h. For instance, a 2 GW thermal input boiler uses 2 × 3,412 ≈ 6,824 MMBTU/h."
  },
  expertNote: {
    title: "Thermal Input vs Electrical Output (Heat Rate)",
    text: "A 1 GWe (gigawatt electric) combined-cycle plant with an efficiency of 60% requires approximately 1.67 GWth of fuel heat input, which equates to roughly 5,690 MMBTU/h of natural gas firing."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Base-Load Nuclear Plant Heat Rejection",
        subtitle: "Convert 2.2 GW of condenser waste heat rejection into BTU per hour and MMBTU/h.",
        steps: [
          "Identify the thermal heat in gigawatts: 2.2 GW.",
          "Apply the MMBTU conversion factor: MMBTU/h = 2.2 × 3,412.1416.",
          "Multiply: 2.2 × 3,412.1416 = 7,506.71 MMBTU/h.",
          "Express in raw BTU/h: 7,506.71 × 1,000,000 = 7,506,711,593 BTU/h.",
          "Result: 2.2 GW equals approximately 7,506,711,593 BTU/h (7,506.71 MMBTU/h)."
        ]
      },
      {
        title: "Example 2: Regional District Heating Cogeneration",
        subtitle: "Calculate the BTU/h heat supply for a 0.35 GW municipal steam heating grid.",
        steps: [
          "State the capacity: 0.35 GW.",
          "Multiply by 3,412,141,633: 0.35 × 3,412,141,633 = 1,194,249,572 BTU/h.",
          "Convert to MMBTU/h: 1,194.25 MMBTU/h.",
          "Result: 0.35 GW equals approximately 1,194,249,572 BTU/h (1,194.25 MMBTU/h)."
        ]
      },
      {
        title: "Example 3: Utility Coal Boiler Thermal Rating",
        subtitle: "Convert an 0.8 GW thermal boiler furnace duty to BTU per hour.",
        steps: [
          "Identify power: 0.8 GW.",
          "Calculate: 0.8 × 3,412,141,633 = 2,729,713,306 BTU/h.",
          "Result: 0.8 GW corresponds to 2,729,713,306 BTU/h (2,729.71 MMBTU/h)."
        ]
      }
    ]
  },
  table: {
    title: "Gigawatt to BTU per Hour Conversion Table",
    headers: ["Gigawatts (GW)", "BTU per Hour (BTU/h)", "Million BTU/h (MMBTU/h)", "Utility Scale"],
    rows: [
      { fromVal: "0.001 GW", toVal: "3,412,141.63 BTU/h", extra: "3.41 MMBTU/h", extra2: "Small industrial steam plant" },
      { fromVal: "0.01 GW", toVal: "34,121,416.33 BTU/h", extra: "34.12 MMBTU/h", extra2: "Campus district heating substation" },
      { fromVal: "0.05 GW", toVal: "170,607,081.65 BTU/h", extra: "170.61 MMBTU/h", extra2: "Refinery cracking furnace duty" },
      { fromVal: "0.10 GW", toVal: "341,214,163.30 BTU/h", extra: "341.21 MMBTU/h", extra2: "Utility peaker gas turbine burner" },
      { fromVal: "0.25 GW", toVal: "853,035,408.25 BTU/h", extra: "853.04 MMBTU/h", extra2: "Mid-sized combined-cycle HRSG" },
      { fromVal: "0.50 GW", toVal: "1,706,070,816.50 BTU/h", extra: "1,706.07 MMBTU/h", extra2: "Major utility power boiler furnace" },
      { fromVal: "0.75 GW", toVal: "2,559,106,224.75 BTU/h", extra: "2,559.11 MMBTU/h", extra2: "Supercritical coal unit heat release" },
      { fromVal: "1.00 GW", toVal: "3,412,141,633.00 BTU/h", extra: "3,412.14 MMBTU/h", extra2: "1 GW base thermal generation benchmark" },
      { fromVal: "1.21 GW", toVal: "4,128,691,375.93 BTU/h", extra: "4,128.69 MMBTU/h", extra2: "Iconic cinematic energy rating" },
      { fromVal: "2.00 GW", toVal: "6,824,283,266.00 BTU/h", extra: "6,824.28 MMBTU/h", extra2: "Two-unit nuclear station steam thermal load" },
      { fromVal: "3.00 GW", toVal: "10,236,424,899.00 BTU/h", extra: "10,236.42 MMBTU/h", extra2: "Large nuclear thermal core fission output" },
      { fromVal: "5.00 GW", toVal: "17,060,708,165.00 BTU/h", extra: "17,060.71 MMBTU/h", extra2: "Major utility complex total fuel burn rate" }
    ]
  },
  applications: {
    title: "Practical Applications of GW to BTU/h Conversion",
    items: [
      {
        title: "Natural Gas Fuel Pipeline Sizing",
        text: "Pipeline transmission engineers convert power generation capacities in gigawatts to MMBTU/h to verify natural gas volumetric pipeline flow rates (in MCF/day)."
      },
      {
        title: "Thermal Power Plant Heat Balance",
        text: "Thermodynamicists calculate net plant heat rate (BTU/kWh) by comparing fuel firing rates in MMBTU/h with generator busbar electrical output in gigawatts."
      },
      {
        title: "Atmospheric Heat Emissions Permitting",
        text: "Environmental regulatory agencies evaluate total thermal pollution and cooling tower water vapor discharge by converting station ratings from gigawatts into billions of BTU/h."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Confusing BTU/h with MMBTU/h: 1 GW produces approximately 3,412 MMBTU/h, but over 3.41 billion raw BTU/h. Omitting the 1,000,000 factor causes severe specification errors.",
      "Dividing instead of multiplying: 1 GW yields billions of BTU/h; dividing produces a micro-fraction rather than the correct heat rate.",
      "Mixing electrical capacity (GWe) with thermal heat input (GWth): A power plant's electrical rating is roughly one-third of its thermal BTU/h fuel firing rate due to the Carnot efficiency limit."
    ]
  },
  faqs: [
    {
      question: "How many BTU per hour are in 1 gigawatt?",
      answer: "There are approximately 3,412,141,633 BTU per hour (or ~3,412.14 MMBTU/h) in 1 gigawatt."
    },
    {
      question: "What is the formula to convert gigawatts to BTU per hour?",
      answer: "The formula is: BTU/h = gigawatts × 3,412,141,633 (or MMBTU/h = GW × 3,412.141633)."
    },
    {
      question: "How do I convert BTU per hour back to gigawatts?",
      answer: "Divide the BTU/h value by 3,412,141,633 (or divide MMBTU/h by 3,412.141633)."
    },
    {
      question: "How many gigawatts are in 1 million BTU per hour (1 MMBTU/h)?",
      answer: "1 MMBTU/h equals approximately 0.000293071 gigawatts (293.071 kilowatts, or 0.293071 MW)."
    },
    {
      question: "What is 1 GW in MMBTU/h?",
      answer: "1 GW equals approximately 3,412.14 MMBTU/h (million BTU per hour)."
    },
    {
      question: "What is 0.5 GW in BTU per hour?",
      answer: "0.5 GW equals approximately 1,706,070,816.5 BTU/h (1,706.07 MMBTU/h)."
    },
    {
      question: "How does BTU per hour relate to tons of refrigeration for 1 GW?",
      answer: "1 ton of refrigeration equals 12,000 BTU/h. Therefore, 1 GW of cooling capacity equals approximately 3,412,141,633 ÷ 12,000 ≈ 284,345 Tons of Refrigeration."
    },
    {
      question: "Why do gas turbines use both GW and BTU/h?",
      answer: "Electric transmission networks dispatch electrical energy in GW (or MW), while gas suppliers and combustion engineers meter fuel delivery in MMBTU/h based on natural gas calorific content."
    }
  ],
  relatedList: [
    { label: "BTU per Hour to Gigawatt", from: "btu-per-hour", to: "gigawatt" },
    { label: "Megawatt to BTU per Hour", from: "megawatt", to: "btu-per-hour" },
    { label: "Kilowatt to BTU per Hour", from: "kilowatt", to: "btu-per-hour" },
    { label: "Gigawatt to Megawatt", from: "gigawatt", to: "megawatt" },
    { label: "Gigawatt to Watt", from: "gigawatt", to: "watt" }
  ],
  references: [
    "ASME PTC 4 - Fired Steam Generators Performance Test Codes.",
    "ASHRAE Handbook - HVAC Systems and Equipment.",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
