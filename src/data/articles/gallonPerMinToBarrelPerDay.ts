import { CustomArticleData } from "./types";

export const gallonPerMinToBarrelPerDay: CustomArticleData = {
  fromUnitId: "gallon-per-min",
  toUnitId: "barrel-per-day",
  seoTitle: "Gallon/min to Barrel/day Converter (GPM to BPD) | UnitsConvertors.com",
  metaDescription: "Convert gallons per minute to barrels per day (GPM to BPD / bbl/d) accurately. Explore petroleum industry flow formulas, calculations, examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/flow/gallon-per-min-to-barrel-per-day",
  h1: "Gallon/min to Barrel/day Converter",
  introduction: [
    "Gallons per minute (GPM) and barrels per day (BPD or bbl/d) are two essential volumetric flow rate units in the global petroleum, chemical, and energy sectors. While pump manufacturers and instrumentation engineers size field hardware, positive displacement pumps, and chemical injection skids in gallons per minute, oilfield reservoir managers, pipeline operators, and commodity traders universally quantify crude oil production and refinery intake in barrels per day.",
    "The standard petroleum barrel (bbl) is legally defined as exactly 42 US liquid gallons (approx. 158.987 liters). Because there are exactly 1,440 minutes in a standard 24-hour day (24 × 60), a constant flow rate of 1 GPM yields 1,440 gallons per day, which equals exactly 1,440 / 42 = 34.285714 barrels per day (240/7 bbl/d).",
    "To convert gallons per minute to barrels per day, multiply the GPM figure by 34.285714 (or 240/7). This engineering reference presents the mathematical foundation, oilfield extraction examples, custody transfer considerations, and an extensive conversion table."
  ],
  quickAnswer: {
    text: "To convert GPM to BPD (barrels per day), multiply the GPM value by 34.285714 (or multiply by 1,440 and divide by 42). For example, 100 GPM equals approximately 3,428.57 BPD.",
    formulaDisplay: "BPD = GPM × (1,440 / 42) = GPM × (240 / 7) ≈ GPM × 34.285714",
    subtext: "1 GPM = 34.285714 BPD; 1 BPD ≈ 0.029167 GPM."
  },
  aboutSourceUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "Gallons per minute is the dominant US customary unit for continuous fluid displacement, representing one US liquid gallon (231 cubic inches, or 3.785412 liters) passing through a measurement cross-section every sixty seconds. In upstream petroleum operations, GPM is standard for rating submersible pumps, waterflood injection wells, blowout preventer (BOP) accumulator lines, and mud circulation systems."
  },
  aboutTargetUnit: {
    title: "Understanding Barrels per Day (BPD / bbl/d)",
    text: "The barrel per day is the worldwide petroleum industry standard for crude oil, refined fuel, and produced water throughput. Tracing its origin to the Pennsylvania oil rush of the 1860s, one blue barrel (bbl) contains exactly 42 US gallons. Barrels per day (BPD) measures aggregate 24-hour output, providing reservoir engineers, OPEC analysts, and refinery dispatchers with a uniform commercial metric."
  },
  relationship: "Because 1 standard barrel equals 42 gallons and 1 day contains 1,440 minutes, the conversion ratio between GPM and BPD is 1,440 / 42 = 240 / 7 ≈ 34.285714. Conversely, 1 barrel per day equals 42 / 1,440 = 7 / 240 ≈ 0.029166667 GPM.",
  relationshipTitle: "GPM to BPD Production Scale",
  relationshipItems: [
    { label: "1 GPM", value: "34.2857 BPD" },
    { label: "2.9167 GPM", value: "100.000 BPD" },
    { label: "10 GPM", value: "342.857 BPD" },
    { label: "29.167 GPM", value: "1,000.00 BPD" },
    { label: "50 GPM", value: "1,714.29 BPD" },
    { label: "100 GPM", value: "3,428.57 BPD" },
    { label: "500 GPM", value: "17,142.86 BPD" }
  ],
  formula: {
    text: "Multiply the flow rate in GPM by 34.285714 (or 240/7) to obtain barrels per day.",
    math: "\\text{BPD} = \\text{GPM} \\times \\frac{1{,}440}{42} = \\text{GPM} \\times \\frac{240}{7} \\approx \\text{GPM} \\times 34.285714",
    subtext: "Inverse formula: GPM = BPD × (7 / 240) ≈ BPD × 0.0291667"
  },
  formulaTitle: "GPM to BPD Conversion Formula",
  practicalTip: {
    title: "Quick Mental Calculation: The 34x Multiplier",
    text: "For quick oilfield estimation, multiply GPM by 34 and add 1% of the product. For instance, for 20 GPM: 20 × 34 = 680; adding 1% (6.8) gives 686.8 BPD (the exact value is 685.7 BPD)."
  },
  expertNote: {
    title: "Petroleum Barrel vs Beer / Fluid Barrel",
    text: "In US trade, a federal fluid barrel for non-petroleum liquids is typically 31 or 31.5 gallons. The petroleum industry strictly uses the 42-gallon barrel (bbl). Always verify that you are calculating against the 42-gallon standard when converting for oil and gas systems."
  },
  examples: {
    title: "Step-by-Step GPM to BPD Worked Examples",
    items: [
      {
        title: "Example 1: Electric Submersible Pump (ESP) Production",
        subtitle: "An oil well ESP discharges crude emulsion at an instantaneous rate of 45 GPM. Calculate the 24-hour production in BPD.",
        steps: [
          "State the pump flow rate: Q = 45 GPM.",
          "Apply the conversion factor: BPD = 45 × (240 / 7).",
          "Calculate: 45 × 34.285714 ≈ 1,542.857.",
          "Final Result: 45 GPM equals approximately 1,542.86 barrels per day."
        ]
      },
      {
        title: "Example 2: Waterflood Secondary Recovery Injection",
        subtitle: "A reservoir pressure maintenance well injects saline produced water at 120 GPM. Express this in BPD.",
        steps: [
          "Identify the flow rate: Q = 120 GPM.",
          "Multiply by 34.285714: 120 × 34.285714 ≈ 4,114.286.",
          "Final Result: 120 GPM corresponds to approximately 4,114.29 BPD."
        ]
      },
      {
        title: "Example 3: Gathering Line Meter Skid Rate",
        subtitle: "A Coriolis flow meter skid records a steady stream of 350 GPM into a pipeline header. Determine the daily throughput in BPD.",
        steps: [
          "State the flow rate: 350 GPM.",
          "Calculate: 350 × (1,440 / 42) = 12,000.",
          "Final Result: Exactly 350 GPM equals exactly 12,000 barrels per day."
        ]
      }
    ]
  },
  table: {
    title: "GPM to BPD Conversion Reference Table",
    headers: ["Gallons/min (GPM)", "Barrels/day (BPD)", "Cubic meters/day (m³/d)", "Liters/min (L/min)"],
    rows: [
      { fromVal: "5 GPM", toVal: "171.43 BPD", extra: "27.25 m³/d", extra2: "18.93 L/min" },
      { fromVal: "10 GPM", toVal: "342.86 BPD", extra: "54.51 m³/d", extra2: "37.85 L/min" },
      { fromVal: "25 GPM", toVal: "857.14 BPD", extra: "136.27 m³/d", extra2: "94.64 L/min" },
      { fromVal: "50 GPM", toVal: "1,714.29 BPD", extra: "272.55 m³/d", extra2: "189.27 L/min" },
      { fromVal: "75 GPM", toVal: "2,571.43 BPD", extra: "408.82 m³/d", extra2: "283.91 L/min" },
      { fromVal: "100 GPM", toVal: "3,428.57 BPD", extra: "545.10 m³/d", extra2: "378.54 L/min" },
      { fromVal: "200 GPM", toVal: "6,857.14 BPD", extra: "1,090.20 m³/d", extra2: "757.08 L/min" },
      { fromVal: "350 GPM", toVal: "12,000.00 BPD", extra: "1,907.85 m³/d", extra2: "1,324.90 L/min" },
      { fromVal: "500 GPM", toVal: "17,142.86 BPD", extra: "2,725.50 m³/d", extra2: "1,892.71 L/min" },
      { fromVal: "1,000 GPM", toVal: "34,285.71 BPD", extra: "5,450.99 m³/d", extra2: "3,785.41 L/min" }
    ]
  },
  applications: {
    title: "Industry Applications of GPM to BPD Conversions",
    items: [
      {
        title: "Upstream Oilfield Production Monitoring",
        text: "Translating live Coriolis, turbine, or vortex flow meter rate readings (GPM) into cumulative daily field run-ticket figures (BPD)."
      },
      {
        title: "Produced Water Disposal & SWD Facilities",
        text: "Sizing high-pressure multi-stage centrifugal saltwater disposal (SWD) pumps in GPM to accommodate total commercial facility permits issued in BPD."
      },
      {
        title: "Refinery Processing Unit Feedstock Rates",
        text: "Balancing vacuum distillation, hydrocracker, and catalytic reformer charge pump rates with refinery gross crude processing capacity."
      },
      {
        title: "Pipeline Transmission & Tank Farm Transfers",
        text: "Converting pipeline custody transfer pump flow rates in GPM to inventory tank gauging volume increments in BPD."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting GPM to BPD",
    items: [
      "Using 31.5 gallons per barrel (fluid/beer barrel) instead of 42 gallons per petroleum barrel.",
      "Dividing by 34.2857 instead of multiplying when converting GPM to BPD.",
      "Ignoring the water-cut percentage in crude emulsion streams when calculating net oil barrels per day (BOPD).",
      "Overlooking thermal expansion when converting volume without temperature compensation (standard petroleum reference is 60°F / 15.56°C)."
    ]
  },
  faqs: [
    {
      question: "How many barrels per day are in 1 GPM?",
      answer: "There are exactly 34.285714 barrels per day (240 / 7 bbl/d) in 1 GPM."
    },
    {
      question: "How many GPM are in 1 barrel per day?",
      answer: "There are approximately 0.029167 GPM in 1 barrel per day (exactly 7 / 240 GPM)."
    },
    {
      question: "What is the formula to convert GPM to BPD?",
      answer: "The formula is: BPD = GPM × 34.285714 (or BPD = GPM × 1,440 / 42)."
    },
    {
      question: "Why are there 42 gallons in a petroleum barrel?",
      answer: "The 42-gallon standard was established by early Pennsylvania oil producers in 1866, modeled after British wine tierces, and officially adopted by the Petroleum Producers Association in 1872."
    },
    {
      question: "How do I convert 100 GPM to BPD?",
      answer: "Multiply 100 by 34.285714 to get approximately 3,428.57 barrels per day."
    },
    {
      question: "What does BOPD mean compared to BPD?",
      answer: "BPD refers to total liquid barrels per day, while BOPD specifies barrels of oil per day, excluding produced water and sediment."
    },
    {
      question: "How many gallons are in 1,000 BPD?",
      answer: "1,000 BPD equals 42,000 gallons per day, which corresponds to 42,000 / 1,440 ≈ 29.17 GPM."
    },
    {
      question: "Does temperature affect the GPM to BPD conversion?",
      answer: "The mathematical volumetric ratio (1,440 / 42) is exact, but in commercial custody transfer, volumes are standardized to 60°F (API MPMS Chapter 11)."
    }
  ],
  relatedList: [
    { label: "Gallon/min to Cubic meter/hour", from: "gallon-per-min", to: "cubic-meter-per-hour" },
    { label: "Gallon/min to Liter/min", from: "gallon-per-min", to: "liter-per-min" },
    { label: "Barrel/day to Gallon/min", from: "barrel-per-day", to: "gallon-per-min" },
    { label: "Gallon/min to Cubic feet/min", from: "gallon-per-min", to: "cubic-feet-per-min" }
  ],
  references: [
    "API Manual of Petroleum Measurement Standards (MPMS), Chapter 11 — Physical Properties Data.",
    "ASTM D1250: Standard Guide for the Use of the Petroleum Measurement Tables.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
