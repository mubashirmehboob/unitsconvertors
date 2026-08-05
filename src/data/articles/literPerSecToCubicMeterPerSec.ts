import { CustomArticleData } from "./types";

export const literPerSecToCubicMeterPerSec: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "cubic-meter-per-sec",
  seoTitle: "Liter per Second to Cubic Meter per Second Converter - L/s to m³/s",
  metaDescription: "Convert liters per second to cubic meters per second (L/s to m³/s) instantly. Learn the exact metric conversion factor (1 L/s = 0.001 m³/s), hydraulic formulas, and reference tables.",
  h1: "Liter per Second to Cubic Meter per Second Converter",
  introduction: [
    "Converting liters per second (L/s) to cubic meters per second (m³/s or cumecs) is a routine calculation in hydraulic engineering, river hydrology, dam discharge management, and environmental fluid dynamics. Both L/s and m³/s belong to the International System of Units (SI), differing only by a factor of 1,000.",
    "Because one cubic meter consists of exactly 1,000 liters (or 1,000 cubic decimeters), converting liters per second to cubic meters per second simply requires dividing by 1,000 (or multiplying by 0.001). This article details the exact mathematical principles, engineering applications, worked examples, and quick conversion charts."
  ],
  quickAnswer: {
    text: "To convert liters per second to cubic meters per second, divide the flow rate in L/s by 1,000 (or multiply by 0.001). For example, a river discharge of 2,500 L/s is equal to exactly 2.5 m³/s.",
    formulaDisplay: "1 L/s = 0.001 m³/s",
    subtext: "1 cubic meter per second equals exactly 1,000 liters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate representing one liter (1 dm³) of liquid passing a cross-section every second. It is commonly used for urban water supply pipelines, pump capacities, and agricultural irrigation channels."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Meters per Second (m³/s)",
    text: "The cubic meter per second (symbol: m³/s, often called a 'cumec') is the official base SI unit for volumetric flow rate. It measures large-scale fluid flows, such as river discharges, spillway outflows, hydro-turbine intakes, and storm sewer main lines."
  },
  relationship: "The relationship between L/s and m³/s is an exact power-of-ten metric ratio based on the SI definition of volume. Since 1 m³ = 10 dm × 10 dm × 10 dm = 1,000 dm³ = 1,000 L, a flow rate of 1 m³/s is exactly 1,000 times greater than 1 L/s.",
  relationshipTitle: "Pure SI Volume Ratio",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "= 0.001 Cubic Meters per Second (m³/s)" },
    { label: "1 Cubic Meter per Second (m³/s)", value: "= 1,000 Liters per Second (L/s)" }
  ],
  formula: {
    text: "To calculate volumetric flow rate in cubic meters per second from liters per second, divide the L/s value by 1,000.",
    math: "Flow (m³/s) = Flow (L/s) / 1,000",
    subtext: "Equivalent multiplication formula: Flow (m³/s) = Flow (L/s) × 0.001."
  },
  formulaTitle: "The Liter per Second to m³/s Formula",
  practicalTip: {
    title: "Decimal Movement Trick",
    text: "To convert L/s to m³/s instantly without a calculator, simply move the decimal point three positions to the left. For instance, 4,500.0 L/s becomes 4.5 m³/s."
  },
  expertNote: {
    title: "Zero-Error Conversion",
    text: "Because both units share the second (s) as the time base and differ only by metric metric prefixes (dm³ vs m³), this conversion introduces zero rounding error, preserving full scientific precision."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: River Hydrological Surveying",
        subtitle: "A stream gauging station records a baseline creek discharge of 350 L/s. Convert this to the standard SI hydrology unit m³/s.",
        steps: [
          "Identify the flow rate: 350 L/s.",
          "Apply the conversion formula: Flow (m³/s) = 350 / 1,000.",
          "Calculate: 350 / 1,000 = 0.35 m³/s.",
          "Result: 350 L/s equals exactly 0.35 m³/s."
        ]
      },
      {
        title: "Example 2: Hydroelectric Turbine Penstock Intake",
        subtitle: "A hydro power generator operates at a design intake of 18,500 L/s. Determine the intake capacity in m³/s.",
        steps: [
          "Identify the flow rate: 18,500 L/s.",
          "Divide by 1,000: 18,500 / 1,000 = 18.5 m³/s.",
          "Result: 18,500 L/s equals exactly 18.5 m³/s."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Second to Cubic Meters per Second Conversion Reference",
    headers: ["Liters / Second (L/s)", "Cubic Meters / Second (m³/s)", "Hydraulic & Hydrological Scale"],
    rows: [
      { fromVal: "1 L/s", toVal: "0.001 m³/s", extra: "Residential water main line" },
      { fromVal: "10 L/s", toVal: "0.01 m³/s", extra: "Commercial building water booster" },
      { fromVal: "50 L/s", toVal: "0.05 m³/s", extra: "Industrial washdown manifold" },
      { fromVal: "100 L/s", toVal: "0.1 m³/s", extra: "Small stream baseline discharge" },
      { fromVal: "500 L/s", toVal: "0.5 m³/s", extra: "Irrigation canal headworks" },
      { fromVal: "1,000 L/s", toVal: "1.0 m³/s", extra: "1 Cumec — medium creek flow" },
      { fromVal: "2,500 L/s", toVal: "2.5 m³/s", extra: "Municipal stormwater diversion" },
      { fromVal: "5,000 L/s", toVal: "5.0 m³/s", extra: "Small river discharge" },
      { fromVal: "10,000 L/s", toVal: "10.0 m³/s", extra: "Hydroelectric penstock flow" }
    ]
  },
  applications: {
    title: "Engineering & Scientific Applications",
    items: [
      {
        title: "River Hydrology & Flood Modeling",
        text: "Hydrologists measure smaller tributaries in L/s and aggregate basin flood routing models using m³/s."
      },
      {
        title: "Civil Infrastructure & Storm Sewers",
        text: "Culvert and spillway hydraulic design calculations require inputting stormwater runoff volumes in m³/s."
      },
      {
        title: "Dam Spillway & Reservoir Management",
        text: "Dam engineers monitor emergency spillway discharge capacities in m³/s to ensure structural safety."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1,000 instead of dividing when converting L/s to m³/s.",
      "Misplacing the decimal point during manual hand calculations.",
      "Confusing m³/s (per second) with m³/h (per hour)."
    ]
  },
  faqs: [
    {
      question: "How many m³/s is 1 liter per second?",
      answer: "1 liter per second is equal to exactly 0.001 m³/s."
    },
    {
      question: "How do I convert L/s to m³/s?",
      answer: "Divide the L/s value by 1,000 (or multiply by 0.001)."
    },
    {
      question: "What is 1,000 L/s in m³/s?",
      answer: "1,000 L/s divided by 1,000 equals exactly 1.0 m³/s (also known as 1 cumec)."
    },
    {
      question: "What is a cumec?",
      answer: "'Cumec' is a shorthand term for cubic meter per second (m³/s), widely used by hydrologists."
    },
    {
      question: "How do I convert m³/s back to L/s?",
      answer: "Multiply the m³/s value by 1,000."
    },
    {
      question: "What is 500 L/s in m³/s?",
      answer: "500 L/s divided by 1,000 equals exactly 0.5 m³/s."
    },
    {
      question: "Why are both L/s and m³/s used in fluid mechanics?",
      answer: "L/s is convenient for smaller pipes and pumps to avoid small decimals, whereas m³/s is convenient for rivers and large infrastructure."
    },
    {
      question: "Does this conversion change with fluid density?",
      answer: "No, volumetric flow conversions depend only on volume ratios, independent of liquid density or temperature."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Cubic meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" },
    { label: "Liter/sec to Cubic feet/sec", from: "liter-per-sec", to: "cubic-feet-per-sec" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Liter/sec to Liter/min", from: "liter-per-sec", to: "liter-per-min" }
  ],
  references: [
    "ISO 80000-3: Quantities and Units — Part 3: Space and time",
    "USGS Office of Water Information: Hydrological Unit Definitions",
    "Chow, V. T., Open-Channel Hydraulics, McGraw-Hill Engineering"
  ]
};
