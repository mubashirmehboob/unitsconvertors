import { CustomArticleData } from "./types";

export const literPerSecToMillionGallonsPerDay: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "million-gallons-per-day",
  seoTitle: "Liter per Second to Million Gallons per Day Converter (L/s to MGD)",
  metaDescription: "Convert liters per second to million gallons per day (L/s to MGD) accurately. Learn the municipal water engineering formula, plant capacity examples, and reference tables.",
  h1: "Liter per Second to Million Gallons per Day Converter",
  introduction: [
    "Converting liters per second (L/s) to million gallons per day (MGD) is an essential flow rate calculation in municipal civil engineering, water treatment facility design, wastewater discharge monitoring, and environmental permitting.",
    "While process instrumentation, flow meters, and international pump specifications typically output readings in metric liters per second, North American regulatory bodies (such as the EPA) and municipal utilities evaluate drinking water supply and sewer plant capacities in million US gallons per day.",
    "Because one US liquid gallon contains exactly 3.785411784 liters and a day contains 86,400 seconds, converting liters per second to MGD requires multiplying the L/s value by approximately 0.0228245 (or dividing by 43.81264). This guide provides the exact formula, step-by-step worked calculations, practical engineering applications, and a complete conversion reference chart."
  ],
  quickAnswer: {
    text: "To convert liters per second to million gallons per day (MGD), multiply the flow rate in L/s by 0.0228245 (or divide by 43.81264). For example, a treatment plant intake flow of 100 L/s delivers approximately 2.282 MGD.",
    formulaDisplay: "\\text{MGD} = \\text{L/s} \\times 0.0228245 = \\frac{\\text{L/s}}{43.81264}",
    subtext: "1 MGD = 43.81264 Liters per Second; 1 Liter per Second ≈ 0.0228245 MGD."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric derived unit of volumetric flow rate. One L/s represents the continuous displacement of one cubic decimeter (1 liter) of liquid per second (equivalent to 0.001 m³/s or 3.6 m³/h). It is the worldwide standard for pipe sizing, pump performance curves, and municipal distribution networks."
  },
  aboutTargetUnit: {
    title: "Understanding Million Gallons per Day (MGD)",
    text: "The million gallons per day (symbol: MGD) is a US customary unit of large-scale volumetric flow rate. One MGD represents the transfer of 1,000,000 US liquid gallons (3,785,411.784 liters or 3,785.41 m³) over a 24-hour period. It is the definitive design and operational metric for municipal water treatment plants, wastewater treatment plants (WWTP), and industrial effluent discharge permits across the United States."
  },
  relationship: "One million US liquid gallons equals 3,785,411.784 liters. Spreading this volume evenly across the 86,400 seconds in a day yields: 3,785,411.784 L / 86,400 s = 43.81263639 L/s per 1 MGD. Conversely, 1 L/s flowing continuously for 24 hours produces 86,400 liters, which equals 86,400 / 3,785,411.784 ≈ 0.022824465 MGD.",
  relationshipTitle: "L/s to MGD Scale Comparison",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "≈ 0.022825 MGD" },
    { label: "10 Liters per Second (L/s)", value: "≈ 0.228245 MGD" },
    { label: "43.8126 Liters per Second", value: "1.000000 MGD" },
    { label: "100 Liters per Second (L/s)", value: "≈ 2.282447 MGD" },
    { label: "500 Liters per Second (L/s)", value: "≈ 11.41223 MGD" }
  ],
  formula: {
    text: "Multiply the flow rate in liters per second by 0.022824465, or divide by 43.812636, to determine the flow rate in million gallons per day.",
    math: "\\text{Flow (MGD)} = \\text{Flow (L/s)} \\times \\frac{86{,}400}{3{,}785{,}411.784} \\approx \\text{Flow (L/s)} \\times 0.022824465",
    subtext: "Inverse formula: Flow (L/s) = Flow (MGD) × 43.812636"
  },
  formulaTitle: "Liter per Second to MGD Conversion Formula",
  practicalTip: {
    title: "Quick Mental Calculation Rule",
    text: "To estimate MGD from L/s quickly in the field, divide the L/s flow rate by 44. For instance, an intake of 220 L/s divided by 44 gives approximately 5.0 MGD (the exact value is 5.02 MGD, accurate to within 0.4%)."
  },
  expertNote: {
    title: "NPDES Permit & Peak Hour Flow Rates",
    text: "Environmental regulatory permits under the US Clean Water Act often mandate peak hour and average monthly effluent compliance in MGD. Converting SCADA electromagnetic flow sensors (which log in L/s or m³/h) into MGD ensures real-time alerting before permit violations occur."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Wastewater Treatment Plant Influent",
        subtitle: "A wastewater treatment plant's ultrasonic flow meter registers an influent flow of 175 L/s. Convert this to MGD.",
        steps: [
          "State the flow rate in L/s: 175 L/s.",
          "Apply the conversion formula: MGD = 175 × 0.022824465.",
          "Perform calculation: 175 × 0.022824465 = 3.99428 MGD.",
          "Final Result: 175 L/s corresponds to approximately 3.994 MGD (roughly 4.0 MGD)."
        ]
      },
      {
        title: "Example 2: Potable Water Distribution Pump Station",
        subtitle: "A booster pump station delivers 50 L/s into a municipal grid. Express this capacity in MGD.",
        steps: [
          "Identify the flow rate: 50 L/s.",
          "Divide by the constant: 50 / 43.81264 = 1.14122 MGD.",
          "Final Result: 50 L/s equals approximately 1.141 MGD."
        ]
      },
      {
        title: "Example 3: Industrial Cooling Loop Effluent",
        subtitle: "An industrial facility discharges cooling water at a rate of 8.5 L/s. Determine the daily discharge in MGD.",
        steps: [
          "Identify the flow: 8.5 L/s.",
          "Calculate: 8.5 × 0.022824465 = 0.194008 MGD.",
          "Final Result: 8.5 L/s equals approximately 0.194 MGD (194,000 gallons per day)."
        ]
      }
    ]
  },
  table: {
    title: "Liter per Second to MGD Quick Reference Chart",
    headers: ["Liters / Second (L/s)", "Million Gallons / Day (MGD)", "Cubic Meters / Hour (m³/h)", "Municipal / Utility Scale"],
    rows: [
      { fromVal: "1 L/s", toVal: "0.0228 MGD", extra: "3.6 m³/h", extra2: "Small subdivision pump station" },
      { fromVal: "5 L/s", toVal: "0.1141 MGD", extra: "18.0 m³/h", extra2: "Commercial business park feeder" },
      { fromVal: "10 L/s", toVal: "0.2282 MGD", extra: "36.0 m³/h", extra2: "Small rural community water system" },
      { fromVal: "25 L/s", toVal: "0.5706 MGD", extra: "90.0 m³/h", extra2: "Town water treatment filter bed" },
      { fromVal: "43.81 L/s", toVal: "1.0000 MGD", extra: "157.7 m³/h", extra2: "Exact 1.0 MGD benchmark baseline" },
      { fromVal: "50 L/s", toVal: "1.1412 MGD", extra: "180.0 m³/h", extra2: "Standard municipal booster pump" },
      { fromVal: "100 L/s", toVal: "2.2824 MGD", extra: "360.0 m³/h", extra2: "Medium municipal water facility" },
      { fromVal: "250 L/s", toVal: "5.7061 MGD", extra: "900.0 m³/h", extra2: "City regional wastewater plant" },
      { fromVal: "500 L/s", toVal: "11.4122 MGD", extra: "1,800.0 m³/h", extra2: "Major metropolitan water supply" },
      { fromVal: "1,000 L/s", toVal: "22.8245 MGD", extra: "3,600.0 m³/h", extra2: "Large city water utility trunk" }
    ]
  },
  applications: {
    title: "Key Municipal & Industrial Engineering Applications",
    items: [
      {
        title: "Water Treatment Plant (WTP) Sizing",
        text: "Engineers translate metric filtration rates and backwash flow telemetry into overall daily plant design capacities specified in MGD."
      },
      {
        title: "Wastewater Discharge Permit Compliance",
        text: "Sanitary engineers ensure continuous outflow monitored by metric flumes complies with daily average and peak hour MGD discharge caps."
      },
      {
        title: "Industrial Chemical Dosing Calculations",
        text: "Water quality specialists use total daily throughput in MGD alongside milligrams per liter (mg/L) concentrations to calculate chemical feed rates in pounds per day."
      },
      {
        title: "Hydraulic Network Simulation Models",
        text: "Software modeling packages (like EPA-NET) frequently require translating international sensor feeds (L/s) into regional baseline demand nodes (MGD)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting L/s to MGD",
    items: [
      "Multiplying by 43.8126 instead of dividing (or multiplying by 0.022825), causing a massive overestimation of flow.",
      "Confusing US gallons (3.7854 L) with UK Imperial gallons (4.5461 L), which produces an 18% discrepancy.",
      "Confusing million gallons per day (MGD) with thousand gallons per day (gpd or kgpd).",
      "Failing to account for diurnal peak factor variations when comparing instantaneous L/s readings to daily average MGD design capacities."
    ]
  },
  faqs: [
    {
      question: "How many MGD is 1 liter per second?",
      answer: "One liter per second equals approximately 0.0228245 million gallons per day (MGD)."
    },
    {
      question: "How many liters per second are in 1 MGD?",
      answer: "There are exactly 43.812636 liters per second in 1 million gallons per day (approximately 43.81 L/s)."
    },
    {
      question: "What is the formula to convert L/s to MGD?",
      answer: "The formula is: MGD = L/s × 0.022824465, or MGD = (L/s × 86,400) / 3,785,411.784."
    },
    {
      question: "How do I convert 100 L/s to MGD?",
      answer: "Multiply 100 by 0.0228245: 100 × 0.0228245 = 2.28245 MGD."
    },
    {
      question: "What does MGD stand for in water engineering?",
      answer: "MGD stands for Million Gallons per Day, a standard unit of measurement used in the United States for water treatment and wastewater plant flow rates."
    },
    {
      question: "How many gallons per minute (GPM) are in 1 MGD?",
      answer: "There are approximately 694.44 gallons per minute in 1 MGD (1,000,000 gallons / 1,440 minutes in a day)."
    },
    {
      question: "How many cubic meters per day is 1 MGD?",
      answer: "One MGD equals exactly 3,785.411784 cubic meters per day (m³/day)."
    },
    {
      question: "Why do US water utilities use MGD instead of cubic meters?",
      answer: "MGD has been the historical standard established by US municipal water authorities, the AWWA (American Water Works Association), and the US EPA for facility permitting and infrastructure design."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Liter/sec to Acre-feet/day", from: "liter-per-sec", to: "acre-feet-per-day" },
    { label: "Liter/sec to Cubic Meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" },
    { label: "Gallon/min to Liter/sec", from: "gallon-per-min", to: "liter-per-sec" }
  ],
  references: [
    "AWWA (American Water Works Association) Manual M33: Flow Measurement in Water Treatment.",
    "US EPA: Wastewater Technology Fact Sheet — Package Plants & Flow Measurement.",
    "Metcalf & Eddy / AECOM: Wastewater Engineering: Treatment and Resource Recovery (5th Edition)."
  ]
};
