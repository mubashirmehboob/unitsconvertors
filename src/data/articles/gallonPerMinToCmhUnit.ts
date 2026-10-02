import { CustomArticleData } from "./types";

export const gallonPerMinToCmhUnit: CustomArticleData = {
  fromUnitId: "gallon-per-min",
  toUnitId: "cmh-unit",
  seoTitle: "Gallon/min to CMH Converter (GPM to m³/h) | UnitsConvertors.com",
  metaDescription: "Convert gallons per minute to CMH (cubic meters per hour / m³/h) accurately. Discover exact pump conversion formulas, worked examples, and lookup tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/flow/gallon-per-min-to-cmh-unit",
  h1: "Gallon/min to CMH Converter",
  introduction: [
    "Gallons per minute (GPM) and cubic meters per hour (CMH, commonly written as m³/h) are the two primary volumetric flow rate standards used in global pump manufacturing, hydronic heating, and industrial ventilation. While GPM is the standard engineering unit across North America, CMH is the universal metric benchmark across Europe, Asia, Latin America, and the Middle East.",
    "The conversion between GPM and CMH bridges both volume and time dimensions. One US liquid gallon equals exactly 0.003785411784 cubic meters (3.785412 liters), and one hour contains 60 minutes. Therefore, a continuous flow rate of one gallon per minute delivers exactly 60 × 0.003785411784 = 0.227124707 cubic meters per hour.",
    "To convert gallons per minute to CMH, multiply the GPM value by 0.2271247 (or divide by approximately 4.402875). This comprehensive technical guide details the underlying mathematical derivation, pump curve translation methods, practical engineering examples, and a complete lookup table."
  ],
  quickAnswer: {
    text: "To convert GPM to CMH (m³/h), multiply the GPM value by 0.2271247 or divide by 4.402875. For example, 100 GPM equals approximately 22.71 CMH.",
    formulaDisplay: "CMH = GPM × (60 × 0.003785411784) = GPM × 0.2271247 ≈ GPM / 4.402875",
    subtext: "1 GPM = 0.227125 CMH (m³/h); 1 CMH ≈ 4.402875 GPM."
  },
  aboutSourceUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "Gallons per minute is the dominant US customary unit for liquid volumetric displacement, representing one US liquid gallon (231 cubic inches, or ~3.7854 liters) flowing every sixty seconds. Used by organizations such as the Hydraulic Institute (HI) and the American Water Works Association (AWWA), GPM is the standard metric for commercial pump head-capacity curves, fire hydrant flows, and residential water supply lines."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Meters per Hour (CMH / m³/h)",
    text: "Cubic meters per hour is the primary metric engineering unit for fluid throughput. Representing the displacement of one thousand liters (1 m³) every sixty minutes, CMH is the standard unit for European and Asian centrifugal pump curves, municipal wastewater treatment plant flows, industrial boiler feedwaters, and building HVAC ventilation exhaust volumes."
  },
  relationship: "One US gallon per minute equals exactly 0.22712470704 cubic meters per hour. Inversely, 1 cubic meter per hour equals approximately 4.40287455 GPM. Approximately 4.40 GPM is required to generate one CMH of flow.",
  relationshipTitle: "GPM to CMH Conversion Ratio",
  relationshipItems: [
    { label: "1 GPM", value: "0.227125 CMH" },
    { label: "4.4029 GPM", value: "1.000000 CMH" },
    { label: "10 GPM", value: "2.271247 CMH" },
    { label: "25 GPM", value: "5.678118 CMH" },
    { label: "50 GPM", value: "11.356235 CMH" },
    { label: "100 GPM", value: "22.712471 CMH" },
    { label: "500 GPM", value: "113.562354 CMH" }
  ],
  formula: {
    text: "Multiply the flow rate in GPM by 0.227124707, or divide by 4.402875, to obtain cubic meters per hour.",
    math: "\\text{CMH} = \\text{GPM} \\times 60 \\times 0.003785411784 \\approx \\text{GPM} \\times 0.2271247",
    subtext: "Inverse formula: GPM = CMH × 4.40287455 ≈ CMH / 0.227125"
  },
  formulaTitle: "GPM to CMH Conversion Formula",
  practicalTip: {
    title: "Quick 4.4 Divisor Rule of Thumb",
    text: "For quick mental estimation on international job sites, divide GPM by 4.4. For instance, a 220 GPM pump delivers approximately 50 CMH (the exact calculation is 49.97 CMH, representing less than a 0.07% discrepancy)."
  },
  expertNote: {
    title: "Pump Curve & Impeller Trim Translations",
    text: "When translating pump performance curves between US engineering catalogs (GPM vs head in feet) and international metric catalogs (CMH vs head in meters), convert GPM to CMH by multiplying by 0.2271, and convert feet of head to meters by multiplying by 0.3048."
  },
  examples: {
    title: "Step-by-Step GPM to CMH Worked Examples",
    items: [
      {
        title: "Example 1: Centrifugal Water Pump Export Rating",
        subtitle: "An American industrial pump rated at 320 GPM is being specified for a factory in Germany. Convert its capacity to CMH.",
        steps: [
          "State the pump capacity: Q = 320 GPM.",
          "Apply the conversion factor: CMH = 320 × 0.2271247.",
          "Calculate: 320 × 0.2271247 ≈ 72.6799.",
          "Final Result: 320 GPM equals approximately 72.68 CMH (m³/h)."
        ]
      },
      {
        title: "Example 2: Commercial HVAC Chiller Evaporator Flow",
        subtitle: "A central chiller evaporator requires 450 GPM of chilled water circulation. Express this flow rate in CMH.",
        steps: [
          "Identify the flow rate: Q = 450 GPM.",
          "Divide by 4.402875: 450 / 4.402875 ≈ 102.2059.",
          "Final Result: 450 GPM corresponds to approximately 102.21 CMH."
        ]
      },
      {
        title: "Example 3: Swimming Pool Filtration Turnover",
        subtitle: "A municipal aquatic center filtration loop circulates 125 GPM. Find the turnover rate in CMH.",
        steps: [
          "State the flow: 125 GPM.",
          "Multiply by 0.2271247: 125 × 0.2271247 ≈ 28.3906.",
          "Final Result: 125 GPM is equal to approximately 28.39 CMH."
        ]
      }
    ]
  },
  table: {
    title: "GPM to CMH Conversion Reference Table",
    headers: ["Gallons/min (GPM)", "CMH (m³/h)", "Liters/min (L/min)", "Liters/sec (L/s)"],
    rows: [
      { fromVal: "5 GPM", toVal: "1.14 CMH", extra: "18.93 L/min", extra2: "0.315 L/s" },
      { fromVal: "10 GPM", toVal: "2.27 CMH", extra: "37.85 L/min", extra2: "0.631 L/s" },
      { fromVal: "25 GPM", toVal: "5.68 CMH", extra: "94.64 L/min", extra2: "1.577 L/s" },
      { fromVal: "50 GPM", toVal: "11.36 CMH", extra: "189.27 L/min", extra2: "3.155 L/s" },
      { fromVal: "75 GPM", toVal: "17.03 CMH", extra: "283.91 L/min", extra2: "4.732 L/s" },
      { fromVal: "100 GPM", toVal: "22.71 CMH", extra: "378.54 L/min", extra2: "6.309 L/s" },
      { fromVal: "250 GPM", toVal: "56.78 CMH", extra: "946.35 L/min", extra2: "15.773 L/s" },
      { fromVal: "500 GPM", toVal: "113.56 CMH", extra: "1,892.71 L/min", extra2: "31.545 L/s" },
      { fromVal: "750 GPM", toVal: "170.34 CMH", extra: "2,839.06 L/min", extra2: "47.318 L/s" },
      { fromVal: "1,000 GPM", toVal: "227.12 CMH", extra: "3,785.41 L/min", extra2: "63.090 L/s" }
    ]
  },
  applications: {
    title: "Practical Applications of GPM to CMH Conversions",
    items: [
      {
        title: "International EPC Pump Procurement",
        text: "Translating pump schedule flow requirements between American GPM standards and European/Asian manufacturer bids formatted in CMH."
      },
      {
        title: "Commercial Chiller & Boiler Hydronics",
        text: "Balancing central plant chilled and hot water distribution headers across multi-national facility portfolios."
      },
      {
        title: "Municipal Wastewater Treatment Design",
        text: "Converting aeration tank influent pumping rates and clarifier sludge return volumes between GPM and m³/h."
      },
      {
        title: "Industrial Ventilation & Scrubber Systems",
        text: "Matching wet scrubber liquid spray pump rates (GPM) with flue gas volumetric handling requirements (CMH)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in GPM to CMH Conversions",
    items: [
      "Confusing CMH (cubic meters per hour) with m³/s (cubic meters per second), which differ by a factor of 3,600.",
      "Using the UK imperial gallon (4.546 L = 0.2728 CMH) instead of the US gallon (3.785 L = 0.2271 CMH).",
      "Dividing by 0.2271 instead of multiplying when converting GPM to CMH.",
      "Confusing CMH (m³/h) with CFM (ft³/min), which represents a different volume scale."
    ]
  },
  faqs: [
    {
      question: "How many CMH are in 1 GPM?",
      answer: "There are approximately 0.227125 CMH (m³/h) in 1 US gallon per minute."
    },
    {
      question: "How many GPM are in 1 CMH?",
      answer: "There are approximately 4.402875 GPM in 1 CMH (cubic meter per hour)."
    },
    {
      question: "What is the formula to convert GPM to CMH?",
      answer: "The formula is: CMH = GPM × 0.2271247, or CMH = GPM / 4.402875."
    },
    {
      question: "What does CMH stand for?",
      answer: "CMH stands for Cubic Meters per Hour (m³/h), the standard metric unit for fluid flow and ventilation volume."
    },
    {
      question: "How do I convert 100 GPM to CMH?",
      answer: "Multiply 100 by 0.2271247 to obtain approximately 22.71 CMH (m³/h)."
    },
    {
      question: "How do I convert 50 CMH to GPM?",
      answer: "Multiply 50 by 4.402875 to get approximately 220.14 GPM."
    },
    {
      question: "Is CMH the same as m³/h?",
      answer: "Yes, 'CMH' and 'm³/h' are completely synonymous notations for cubic meters per hour."
    },
    {
      question: "Why is 4.4 used as a field rule of thumb?",
      answer: "Because 1 CMH is roughly 4.403 GPM. Dividing GPM by 4.4 provides a rapid field estimate with less than 0.1% error."
    }
  ],
  relatedList: [
    { label: "Gallon/min to Cubic meter/hour", from: "gallon-per-min", to: "cubic-meter-per-hour" },
    { label: "Gallon/min to CFM", from: "gallon-per-min", to: "cfm-unit" },
    { label: "CMH to Gallon/min", from: "cmh-unit", to: "gallon-per-min" },
    { label: "Gallon/min to Liter/min", from: "gallon-per-min", to: "liter-per-min" }
  ],
  references: [
    "ISO 80000-4: Quantities and units — Part 4: Mechanics.",
    "Hydraulic Institute: Standards for Centrifugal Pumps.",
    "Europump: Guide to the Application of European Pump Standards."
  ]
};
