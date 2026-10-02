import { CustomArticleData } from "./types";

export const gallonPerMinToCubicMeterPerSec: CustomArticleData = {
  fromUnitId: "gallon-per-min",
  toUnitId: "cubic-meter-per-sec",
  seoTitle: "Gallon/min to Cubic meter/sec Converter (GPM to m³/s) | UnitsConvertors.com",
  metaDescription: "Convert gallons per minute to cubic meters per second (GPM to m³/s / cumec) accurately. Explore exact SI flow formulas, step-by-step examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/flow/gallon-per-min-to-cubic-meter-per-sec",
  h1: "Gallon/min to Cubic meter/sec Converter",
  introduction: [
    "Gallons per minute (GPM) and cubic meters per second (m³/s, often referred to as cumecs in international hydrology) represent the standard fluid flow rate units of the US customary and International System of Units (SI), respectively. While GPM is the standard metric for commercial pumps, piping networks, and building water supplies across North America, the cubic meter per second is the fundamental SI coherent unit used globally for major rivers, hydroelectric turbine penstocks, and international hydraulic engineering.",
    "Because one US liquid gallon is defined as exactly 0.003785411784 cubic meters and one minute contains exactly 60 seconds, one gallon per minute equals exactly 0.003785411784 / 60 = 0.0000630901964 m³/s (approx. 6.30902 × 10⁻⁵ m³/s). Conversely, one cubic meter per second is an immense flow rate equivalent to approximately 15,850.32 GPM.",
    "To convert from gallons per minute to cubic meters per second, multiply the GPM value by 0.0000630901964 (or divide by 15,850.323). This engineering reference presents the mathematical derivations, large-scale civil engineering examples, and an authoritative conversion table."
  ],
  quickAnswer: {
    text: "To convert GPM to m³/s, divide the flow rate by 15,850.323 or multiply by 0.0000630902 (6.30902 × 10⁻⁵). For example, 1,000 GPM equals approximately 0.06309 m³/s.",
    formulaDisplay: "m³/s = GPM × (0.003785411784 / 60) = GPM / 15,850.323 ≈ GPM × 6.30902 × 10⁻⁵",
    subtext: "1 m³/s = 15,850.323 GPM; 1 GPM ≈ 0.00006309 m³/s."
  },
  aboutSourceUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "Gallons per minute is the primary unit of liquid volumetric flow in the United States customary system. Defined as the displacement of one US liquid gallon (231 in³, or ~3.785412 liters) per sixty seconds, it is the universal standard for rating municipal water distribution mains, agricultural center-pivot irrigation, commercial HVAC chillers, and industrial chemical processing pumps."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Meters per Second (m³/s / cumec)",
    text: "The cubic meter per second is the coherent derived unit of volumetric flow rate in the International System of Units (SI). Representing the passage of one thousand liters (1 m³) of fluid every second, the cumec is applied in river hydrology, flood control channel design, hydroelectric dam discharge monitoring, and large-diameter marine cooling water aqueducts."
  },
  relationship: "One cubic meter per second equals exactly 60 / 0.003785411784 ≈ 15,850.32314 gallons per minute. Conversely, 1 GPM equals exactly 0.0000630901964 m³/s. It requires nearly 16,000 GPM to equal a single cubic meter per second.",
  relationshipTitle: "GPM to m³/s Scale Comparison",
  relationshipItems: [
    { label: "1 GPM", value: "0.00006309 m³/s (6.31 × 10⁻⁵)" },
    { label: "100 GPM", value: "0.006309 m³/s (6.31 L/s)" },
    { label: "1,000 GPM", value: "0.063090 m³/s (63.09 L/s)" },
    { label: "5,000 GPM", value: "0.315451 m³/s" },
    { label: "10,000 GPM", value: "0.630902 m³/s" },
    { label: "15,850.32 GPM", value: "1.000000 m³/s (1 cumec)" }
  ],
  formula: {
    text: "Multiply the flow rate in GPM by 0.0000630901964, or divide by 15,850.323, to obtain cubic meters per second.",
    math: "\\text{m}^3/\\text{s} = \\text{GPM} \\times \\frac{0.003785411784}{60} \\approx \\frac{\\text{GPM}}{15{,}850.323}",
    subtext: "Inverse formula: GPM = m³/s × 15,850.323"
  },
  formulaTitle: "GPM to m³/s Conversion Formula",
  practicalTip: {
    title: "Two-Step Shortcut via Liters per Second",
    text: "If converting directly to m³/s involves too many decimals, convert GPM to liters per second (L/s) first by multiplying by 0.06309, then simply divide by 1,000 to get m³/s (e.g., 500 GPM × 0.06309 = 31.55 L/s = 0.03155 m³/s)."
  },
  expertNote: {
    title: "Scale Disparity in Fluid Dynamics",
    text: "Engineers should note the large scale disparity: m³/s is typically used for river-scale flow, whereas GPM is pipe-scale flow. Most industrial and commercial pumps operate below 0.1 m³/s. Working in scientific notation prevents zero-dropping errors."
  },
  examples: {
    title: "Step-by-Step GPM to m³/s Worked Examples",
    items: [
      {
        title: "Example 1: Municipal Water Treatment Plant High-Service Pump",
        subtitle: "A regional water facility high-service pump discharges 4,500 GPM into a distribution trunk. Express this in m³/s.",
        steps: [
          "State the pump capacity: Q = 4,500 GPM.",
          "Apply the conversion factor: m³/s = 4,500 / 15,850.323.",
          "Calculate: 4,500 / 15,850.323 ≈ 0.283906.",
          "Final Result: 4,500 GPM equals approximately 0.2839 m³/s (283.9 L/s)."
        ]
      },
      {
        title: "Example 2: Nuclear Power Plant Circulating Cooling Water",
        subtitle: "A condenser cooling loop circulates 35,000 GPM of intake seawater. Convert this flow rate to cubic meters per second.",
        steps: [
          "Identify the flow rate: Q = 35,000 GPM.",
          "Multiply by 6.30901964 × 10⁻⁵: 35,000 × 0.0000630901964 ≈ 2.208157.",
          "Final Result: 35,000 GPM corresponds to approximately 2.208 m³/s."
        ]
      },
      {
        title: "Example 3: Stormwater Drainage Culvert Runoff",
        subtitle: "A peak urban storm event generates an estimated hydrograph peak of 1,200 GPM in a drainage channel. Convert this to m³/s.",
        steps: [
          "Identify the flow rate: 1,200 GPM.",
          "Divide by 15,850.323: 1,200 / 15,850.323 ≈ 0.075708.",
          "Final Result: 1,200 GPM equals approximately 0.0757 m³/s."
        ]
      }
    ]
  },
  table: {
    title: "GPM to m³/s Conversion Reference Table",
    headers: ["Gallons/min (GPM)", "Cubic meters/sec (m³/s)", "Liters/sec (L/s)", "Cubic feet/sec (cfs)"],
    rows: [
      { fromVal: "50 GPM", toVal: "0.00315 m³/s", extra: "3.15 L/s", extra2: "0.111 cfs" },
      { fromVal: "100 GPM", toVal: "0.00631 m³/s", extra: "6.31 L/s", extra2: "0.223 cfs" },
      { fromVal: "250 GPM", toVal: "0.01577 m³/s", extra: "15.77 L/s", extra2: "0.557 cfs" },
      { fromVal: "500 GPM", toVal: "0.03155 m³/s", extra: "31.55 L/s", extra2: "1.114 cfs" },
      { fromVal: "1,000 GPM", toVal: "0.06309 m³/s", extra: "63.09 L/s", extra2: "2.228 cfs" },
      { fromVal: "2,500 GPM", toVal: "0.15773 m³/s", extra: "157.73 L/s", extra2: "5.570 cfs" },
      { fromVal: "5,000 GPM", toVal: "0.31545 m³/s", extra: "315.45 L/s", extra2: "11.140 cfs" },
      { fromVal: "10,000 GPM", toVal: "0.63090 m³/s", extra: "630.90 L/s", extra2: "22.280 cfs" },
      { fromVal: "15,850 GPM", toVal: "1.00000 m³/s", extra: "1,000.00 L/s", extra2: "35.315 cfs" },
      { fromVal: "50,000 GPM", toVal: "3.15451 m³/s", extra: "3,154.51 L/s", extra2: "111.400 cfs" }
    ]
  },
  applications: {
    title: "Engineering Applications of GPM to m³/s Conversions",
    items: [
      {
        title: "Hydroelectric Dam & Turbine Penstocks",
        text: "Converting equipment flow specifications from American turbine manufacturers in GPM to international IEC hydraulic turbine test standards formatted in m³/s."
      },
      {
        title: "Thermal Power Station Cooling Systems",
        text: "Assessing cooling tower and river withdrawal permits where environmental regulatory caps are issued in m³/s while circulating pumps operate in GPM."
      },
      {
        title: "Regional Flood Hydrology & Aqueducts",
        text: "Translating urban drainage master plans between US customary hydraulic model inputs (GPM) and international watershed GIS hydrological models (m³/s)."
      },
      {
        title: "Desalination Plant High-Pressure RO Trains",
        text: "Rating sea intake pumping stations and high-pressure reverse osmosis feed lines across international EPC engineering contracts."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in GPM to m³/s Conversions",
    items: [
      "Confusing m³/s (cubic meters per second) with m³/h (cubic meters per hour), which differ by a factor of 3,600.",
      "Misplacing leading zeros: 1 GPM is 0.00006309 m³/s (four zeros after the decimal point).",
      "Using the UK imperial gallon (4.546 L) instead of the US gallon (3.785 L), resulting in an error of ~20%.",
      "Confusing volume rate with mass rate without accounting for fluid density variations."
    ]
  },
  faqs: [
    {
      question: "How many cubic meters per second are in 1 GPM?",
      answer: "There are approximately 0.00006309 m³/s in 1 GPM (6.30902 × 10⁻⁵ m³/s)."
    },
    {
      question: "How many GPM are in 1 cubic meter per second?",
      answer: "There are approximately 15,850.323 GPM in 1 cubic meter per second (1 cumec)."
    },
    {
      question: "What is the formula to convert GPM to m³/s?",
      answer: "The formula is: m³/s = GPM / 15,850.323, or m³/s = GPM × 0.0000630902."
    },
    {
      question: "What is a cumec?",
      answer: "'Cumec' is the standard international engineering contraction for cubic meter per second (1 cumec = 1 m³/s = 1,000 L/s)."
    },
    {
      question: "How do I convert 1,000 GPM to m³/s?",
      answer: "Divide 1,000 by 15,850.323 to get approximately 0.06309 m³/s (63.09 L/s)."
    },
    {
      question: "Is m³/s an official SI unit?",
      answer: "Yes, the cubic meter per second (m³/s) is the coherent derived unit of volumetric flow rate in the International System of Units."
    },
    {
      question: "How does 1 m³/s compare to 1 cfs?",
      answer: "One cubic meter per second equals approximately 35.3147 cubic feet per second (cfs)."
    },
    {
      question: "Why is the conversion factor between GPM and m³/s so large?",
      answer: "Because 1 cubic meter is large (264.172 gallons) and 1 second is short (1/60th of a minute). Multiplying 264.172 × 60 gives 15,850.32 GPM."
    }
  ],
  relatedList: [
    { label: "Gallon/min to Cubic meter/hour", from: "gallon-per-min", to: "cubic-meter-per-hour" },
    { label: "Gallon/min to Liter/sec", from: "gallon-per-min", to: "liter-per-sec" },
    { label: "Cubic meter/sec to Gallon/min", from: "cubic-meter-per-sec", to: "gallon-per-min" },
    { label: "Gallon/min to Cubic feet/sec", from: "gallon-per-min", to: "cubic-feet-per-sec" }
  ],
  references: [
    "ISO 80000-4: Quantities and units — Part 4: Mechanics.",
    "BIPM: The International System of Units (SI Brochure, 9th Edition).",
    "USGS Techniques of Water-Resources Investigations: Measurement of River Discharge."
  ]
};
