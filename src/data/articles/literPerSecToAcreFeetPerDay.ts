import { CustomArticleData } from "./types";

export const literPerSecToAcreFeetPerDay: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "acre-feet-per-day",
  seoTitle: "Liter per Second to Acre-Feet per Day Converter (L/s to ac-ft/d)",
  metaDescription: "Convert liters per second to acre-feet per day (L/s to ac-ft/d). Learn the conversion factor, agricultural hydrology formulas, worked examples, and reference tables.",
  h1: "Liter per Second to Acre-Feet per Day Converter",
  introduction: [
    "Converting liters per second (L/s) to acre-feet per day (ac-ft/d or AF/day) is a fundamental volumetric flow rate conversion in civil hydrology, reservoir management, agricultural irrigation, and regional water rights accounting.",
    "While modern stream gauges and international hydraulic equipment measure instantaneous discharge in metric liters per second, water management agencies and irrigation districts in the western United States quantify bulk water allocations and reservoir yields in acre-feet per day.",
    "Because one acre-foot equals approximately 1,233,482 liters and one day contains 86,400 seconds, converting liters per second to acre-feet per day requires multiplying by approximately 0.0700456 (or dividing by 14.27641). This guide provides the exact mathematical derivation, step-by-step calculation examples, common pitfalls, and an extensive conversion chart."
  ],
  quickAnswer: {
    text: "To convert liters per second to acre-feet per day, multiply the flow rate in L/s by 0.0700456 (or divide by 14.27641). For example, a river discharge of 50 L/s delivers approximately 3.502 acre-feet of water per day.",
    formulaDisplay: "\\text{ac-ft/d} = \\text{L/s} \\times 0.0700456 = \\frac{\\text{L/s}}{14.27641}",
    subtext: "1 Acre-Foot per Day = 14.27641 Liters per Second; 1 Liter per Second ≈ 0.0700456 Acre-Feet per Day."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate representing the transfer of one cubic decimeter (1 liter or 0.001 m³) of fluid past a given point every second. It is universally used in municipal water distribution, environmental runoff monitoring, and international hydraulic engineering."
  },
  aboutTargetUnit: {
    title: "Understanding Acre-Feet per Day (ac-ft/d)",
    text: "The acre-foot per day is a US customary unit of large-scale volumetric flow rate. One acre-foot represents the volume of water required to cover one acre of land to a depth of one foot (43,560 cubic feet, or approximately 325,851 US gallons / 1,233.48 cubic meters). Expressed per day, it measures bulk water movement across canals, river diversions, and municipal water districts."
  },
  relationship: "One acre-foot equals 43,560 ft³ × 28.316846592 L/ft³ = 1,233,481.8375 liters. Since there are 86,400 seconds in a standard 24-hour day, a continuous flow of 1 L/s delivers 86,400 liters per day. Dividing 86,400 L by 1,233,481.84 L yields exactly 86,400 / 1,233,481.8375 ≈ 0.070045624 ac-ft/d (or 1 ac-ft/d = 14.27641 L/s).",
  relationshipTitle: "Metric Discharge vs Bulk Hydrologic Flow Relationship",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "≈ 0.070046 Acre-Feet/Day" },
    { label: "10 Liters per Second (L/s)", value: "≈ 0.700456 Acre-Feet/Day" },
    { label: "14.2764 Liters per Second", value: "1.000000 Acre-Foot/Day" },
    { label: "50 Liters per Second (L/s)", value: "≈ 3.502281 Acre-Feet/Day" },
    { label: "100 Liters per Second (L/s)", value: "≈ 7.004562 Acre-Feet/Day" }
  ],
  formula: {
    text: "Multiply the flow rate in liters per second by 0.0700456, or divide by 14.27641, to determine the flow rate in acre-feet per day.",
    math: "\\text{Flow (ac-ft/d)} = \\text{Flow (L/s)} \\times \\frac{86{,}400}{1{,}233{,}481.8375} \\approx \\text{Flow (L/s)} \\times 0.07004562",
    subtext: "Inverse formula: Flow (L/s) = Flow (ac-ft/d) × 14.27641"
  },
  formulaTitle: "Liter per Second to Acre-Feet per Day Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To approximate in the field, multiply the flow in L/s by 7 and shift the decimal two places left (multiply by 0.07). For instance, 100 L/s × 0.07 = 7 ac-ft/d (exact value is 7.005 ac-ft/d, within 0.1% accuracy)."
  },
  expertNote: {
    title: "Water Rights & Canal Sizing Context",
    text: "In western US state water administration (e.g., California, Colorado, Arizona), irrigation water shares and storage releases from reservoirs are legally designated in acre-feet. Converting automated SCADA acoustic Doppler meter telemetry (recorded in L/s or m³/s) into ac-ft/d allows direct compliance reporting."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Irrigation Canal Delivery Gate",
        subtitle: "An irrigation canal headgate delivers a continuous discharge of 35 L/s. Calculate the total daily delivery in acre-feet.",
        steps: [
          "Identify the flow rate: 35 L/s.",
          "Apply the conversion factor: Flow (ac-ft/d) = 35 × 0.07004562.",
          "Perform calculation: 35 × 0.07004562 = 2.451597 ac-ft/d.",
          "Final Result: 35 L/s delivers approximately 2.452 acre-feet of water per day."
        ]
      },
      {
        title: "Example 2: Reservoir Environmental Release Spill",
        subtitle: "A dam control weir releases 120 L/s for downstream ecological flow. Convert this rate to acre-feet per day.",
        steps: [
          "Identify the discharge: 120 L/s.",
          "Divide by the reciprocal constant: 120 / 14.27641 = 8.40547.",
          "Final Result: 120 L/s corresponds to approximately 8.405 ac-ft/d."
        ]
      },
      {
        title: "Example 3: Deep Agricultural Groundwater Well",
        subtitle: "A high-capacity agricultural turbine pump pumps groundwater at 75 L/s. Determine the daily output in acre-feet.",
        steps: [
          "Identify the flow: 75 L/s.",
          "Calculate daily volume in liters: 75 × 86,400 = 6,480,000 L/day.",
          "Divide by liters per acre-foot: 6,480,000 / 1,233,481.84 = 5.25342 ac-ft/d.",
          "Final Result: The well produces approximately 5.253 acre-feet per day."
        ]
      }
    ]
  },
  table: {
    title: "Liter per Second to Acre-Feet per Day Reference Chart",
    headers: ["Liters / Second (L/s)", "Acre-Feet / Day (ac-ft/d)", "Cubic Meters / Day (m³/d)", "Hydrologic Application"],
    rows: [
      { fromVal: "1 L/s", toVal: "0.0700 ac-ft/d", extra: "86.4 m³/d", extra2: "Small spring discharge" },
      { fromVal: "5 L/s", toVal: "0.3502 ac-ft/d", extra: "432 m³/d", extra2: "Center pivot small nozzle zone" },
      { fromVal: "10 L/s", toVal: "0.7005 ac-ft/d", extra: "864 m³/d", extra2: "Commercial orchard drip supply" },
      { fromVal: "14.28 L/s", toVal: "1.0000 ac-ft/d", extra: "1,233.5 m³/d", extra2: "Exact 1 Acre-Foot per day line" },
      { fromVal: "20 L/s", toVal: "1.4009 ac-ft/d", extra: "1,728 m³/d", extra2: "Farm irrigation lateral" },
      { fromVal: "50 L/s", toVal: "3.5023 ac-ft/d", extra: "4,320 m³/d", extra2: "Community water supply well" },
      { fromVal: "100 L/s", toVal: "7.0046 ac-ft/d", extra: "8,640 m³/d", extra2: "Regional canal sub-branch" },
      { fromVal: "250 L/s", toVal: "17.5114 ac-ft/d", extra: "21,600 m³/d", extra2: "River diversion weir intake" },
      { fromVal: "500 L/s", toVal: "35.0228 ac-ft/d", extra: "43,200 m³/d", extra2: "Major agricultural canal trunk" },
      { fromVal: "1,000 L/s", toVal: "70.0456 ac-ft/d", extra: "86,400 m³/d", extra2: "Main river hydroelectric bypass" }
    ]
  },
  applications: {
    title: "Key Hydrology & Water Management Applications",
    items: [
      {
        title: "Irrigation District Accounting",
        text: "Water masters convert telemetry from automated flumes and electromagnetic pipe meters (measured in L/s) to acre-feet for billing agricultural water shares."
      },
      {
        title: "Reservoir Storage Balance & Yield",
        text: "Hydrologists calculating daily reservoir depletion or storage gains convert stream gauge inflow metrics from liters per second into acre-feet per day."
      },
      {
        title: "Groundwater Extraction Permits",
        text: "Environmental regulators monitor high-capacity well extraction limits by converting instantaneous pumping rates into annual and daily acre-feet quotas."
      },
      {
        title: "Environmental In-Stream Flow Standards",
        text: "Fisheries biologists and river conservationists track minimum required seasonal fish bypass flows between metric sensors and legal water decree standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting L/s to ac-ft/d",
    items: [
      "Multiplying by 14.2764 instead of dividing (or multiplying by 0.070046), resulting in an answer 200 times too large.",
      "Confusing acre-feet per day with acre-feet per year (1 ac-ft/d = 365.25 ac-ft/year).",
      "Using the US survey foot definition vs international foot without verifying regional legal definitions.",
      "Confusing instantaneous flow (L/s) with total cumulative volume (liters)."
    ]
  },
  faqs: [
    {
      question: "How many acre-feet per day is 1 liter per second?",
      answer: "One liter per second equals approximately 0.0700456 acre-feet per day (1 L/s ≈ 0.07 ac-ft/d)."
    },
    {
      question: "How many liters per second equal 1 acre-foot per day?",
      answer: "Exactly 1 acre-foot per day equals approximately 14.27641 liters per second (14.28 L/s)."
    },
    {
      question: "What is the formula to convert L/s to acre-feet/day?",
      answer: "The formula is: ac-ft/d = L/s × 0.07004562, or ac-ft/d = (L/s × 86,400) / 1,233,481.84."
    },
    {
      question: "How many gallons are in one acre-foot?",
      answer: "One acre-foot contains exactly 325,851.43 US liquid gallons (or 43,560 cubic feet / 1,233,482 liters)."
    },
    {
      question: "How do I convert 100 L/s to acre-feet per day?",
      answer: "Multiply 100 by 0.0700456: 100 × 0.0700456 = 7.00456 acre-feet per day."
    },
    {
      question: "Why do water managers use acre-feet instead of liters or gallons?",
      answer: "Because municipal and agricultural water volumes are enormous. Expressing annual reservoir storage or irrigation demand in millions of gallons or billions of liters is cumbersome, whereas acre-feet keeps numbers manageable."
    },
    {
      question: "How many cubic feet per second (cfs) is 1 acre-foot per day?",
      answer: "1 acre-foot per day equals approximately 0.50417 cubic feet per second (cfs). Conversely, 1 cfs flowing continuously for 24 hours produces approximately 1.9835 acre-feet."
    },
    {
      question: "What is the official abbreviation for acre-foot per day?",
      answer: "Commonly accepted abbreviations include ac-ft/d, AF/day, or ac·ft/day."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Liter/sec to Cubic Meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" },
    { label: "Liter/sec to Cubic Feet/sec", from: "liter-per-sec", to: "cubic-feet-per-sec" },
    { label: "Liter/sec to Million Gallons/Day", from: "liter-per-sec", to: "million-gallons-per-day" }
  ],
  references: [
    "USGS (U.S. Geological Survey): Techniques of Water-Resources Investigations, Book 3, Discharge Measurements.",
    "US Bureau of Reclamation: Water Measurement Manual (3rd Edition).",
    "ASCE (American Society of Civil Engineers) Manuals and Reports on Engineering Practice No. 97: Hydraulic Modeling."
  ]
};
