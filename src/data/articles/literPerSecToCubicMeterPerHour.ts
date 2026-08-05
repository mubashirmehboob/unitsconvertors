import { CustomArticleData } from "./types";

export const literPerSecToCubicMeterPerHour: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "cubic-meter-per-hour",
  seoTitle: "Liter per Second to Cubic Meter per Hour Converter - L/s to m³/h",
  metaDescription: "Convert liters per second to cubic meters per hour (L/s to m³/h or CMH). Learn the exact conversion factor (1 L/s = 3.6 m³/h), step-by-step formulas, and fluid flow tables.",
  h1: "Liter per Second to Cubic Meter per Hour Converter",
  introduction: [
    "Converting liters per second (L/s) to cubic meters per hour (m³/h, often abbreviated as CMH) is a standard calculation in fluid dynamics, HVAC ventilation engineering, water treatment plant design, and industrial process monitoring. Both units belong to the metric system, making conversion exact and straightforward.",
    "Because 1 cubic meter contains exactly 1,000 liters and 1 hour contains 3,600 seconds, converting liters per second to cubic meters per hour involves multiplying by exactly 3.6. This guide details the exact mathematical derivation, practical engineering examples, conversion formulas, and comprehensive reference charts."
  ],
  quickAnswer: {
    text: "To convert liters per second to cubic meters per hour, multiply the flow rate in L/s by 3.6. For example, a water pump discharging 10 L/s delivers exactly 36 m³/h.",
    formulaDisplay: "1 L/s = 3.6 m³/h",
    subtext: "1 cubic meter per hour equals exactly 1/3.6 ≈ 0.277778 liters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate indicating one cubic decimeter of fluid passing a fixed point every second. It is commonly used for smaller pipeline rates, pump discharge specs, and open-channel water velocity measurements."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Meters per Hour (m³/h)",
    text: "The cubic meter per hour (symbol: m³/h or CMH) is an SI-derived metric unit of volumetric flow rate representing one cubic meter of fluid transferred per hour. It is the primary flow unit for municipal water distribution, industrial gas lines, and large HVAC air handlers across Europe and Asia."
  },
  relationship: "The relationship between L/s and m³/h is governed by exact SI volume and time ratios. One liter is 0.001 m³, so 1 L/s equals 0.001 m³/s. Multiplying 0.001 m³/s by 3,600 seconds in an hour yields exactly 3.6 m³/h.",
  relationshipTitle: "Exact Metric Volume Flow Relationship",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "= 3.6 Cubic Meters per Hour (m³/h)" },
    { label: "1 Cubic Meter per Hour (m³/h)", value: "≈ 0.277778 Liters per Second (L/s)" }
  ],
  formula: {
    text: "To calculate volumetric flow rate in cubic meters per hour from liters per second, multiply the L/s value by 3.6.",
    math: "Flow (m³/h) = Flow (L/s) × 3.6",
    subtext: "Exact mathematical formula: Flow (m³/h) = Flow (L/s) × 3,600 / 1,000."
  },
  formulaTitle: "The Liter per Second to m³/h Formula",
  practicalTip: {
    title: "Mental Calculation Shortcut",
    text: "To convert L/s to m³/h quickly in your head, multiply the number by 3 and then add 20% of the original number. For example, for 5 L/s: 5 × 3 = 15; plus 20% of 15 (or 20% of 5 × 3 = 3) gives 18 m³/h exactly."
  },
  expertNote: {
    title: "Exact SI Ratio Advantage",
    text: "Unlike conversions between metric and imperial units, L/s to m³/h is an exact 3.6 constant with no trailing decimals or rounding loss, making it ideal for precision engineering automated PLC control systems."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Wastewater Treatment Aeration Line",
        subtitle: "An air blower supplies oxygen to a biological basin at a rate of 25 L/s. Convert this flow rate to m³/h.",
        steps: [
          "Identify the flow rate in L/s: 25 L/s.",
          "Apply the exact formula: Flow (m³/h) = 25 × 3.6.",
          "Calculate: 25 × 3.6 = 90 m³/h.",
          "Result: 25 L/s is equal to exactly 90 m³/h."
        ]
      },
      {
        title: "Example 2: Industrial Cooling Tower Recirculation",
        subtitle: "A pump delivers 150 L/s of cooling water. Calculate the hourly volume in cubic meters.",
        steps: [
          "Identify the flow rate: 150 L/s.",
          "Multiply by 3.6: 150 × 3.6 = 540 m³/h.",
          "Result: 150 L/s equals exactly 540 m³/h."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Second to Cubic Meters per Hour Conversion Reference",
    headers: ["Liters / Second (L/s)", "Cubic Meters / Hour (m³/h)", "Typical Engineering Context"],
    rows: [
      { fromVal: "0.5 L/s", toVal: "1.8 m³/h", extra: "Commercial building water sub-meter" },
      { fromVal: "1.0 L/s", toVal: "3.6 m³/h", extra: "Residential water service entry line" },
      { fromVal: "2.5 L/s", toVal: "9.0 m³/h", extra: "Small swimming pool filtration pump" },
      { fromVal: "5.0 L/s", toVal: "18.0 m³/h", extra: "Agricultural drip irrigation zone" },
      { fromVal: "10 L/s", toVal: "36.0 m³/h", extra: "Commercial HVAC chilled water loop" },
      { fromVal: "25 L/s", toVal: "90.0 m³/h", extra: "Industrial washdown station" },
      { fromVal: "50 L/s", toVal: "180.0 m³/h", extra: "District heating circulation line" },
      { fromVal: "100 L/s", toVal: "360.0 m³/h", extra: "Municipal water treatment feeder" },
      { fromVal: "500 L/s", toVal: "1,800 m³/h", extra: "Major flood control pumping station" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Municipal Water Works",
        text: "Water utilities measure instantaneous pump capacity in L/s and convert to m³/h for hourly storage tank balancing and billing logs."
      },
      {
        title: "HVAC Ventilation & Duct Design",
        text: "Air handling units specify airflow in m³/h (CMH), while air velocity sensors in ducts often measure instantaneous discharge in L/s."
      },
      {
        title: "Chemical Process Piping",
        text: "Dosing pumps and process streams evaluate mass and volumetric balances by converting continuous L/s flow to m³/h."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 3.6 instead of multiplying when converting L/s to m³/h.",
      "Confusing m³/h (Cubic Meters per Hour) with m³/s (Cubic Meters per Second).",
      "Assuming gas compressibility effects change volumetric flow conversions (pressure and temperature corrections apply separately)."
    ]
  },
  faqs: [
    {
      question: "How many cubic meters per hour is 1 liter per second?",
      answer: "1 liter per second is equal to exactly 3.6 cubic meters per hour."
    },
    {
      question: "What is the formula to convert L/s to m³/h?",
      answer: "The formula is: m³/h = L/s × 3.6."
    },
    {
      question: "How do I convert 10 L/s to m³/h?",
      answer: "Multiply 10 by 3.6 to get exactly 36 m³/h."
    },
    {
      question: "Is L/s to CMH the same as L/s to m³/h?",
      answer: "Yes, CMH stands for Cubic Meters per Hour, which is identical to m³/h."
    },
    {
      question: "How do I convert m³/h back to L/s?",
      answer: "To convert m³/h back to L/s, divide the m³/h value by 3.6."
    },
    {
      question: "Why is the conversion factor exactly 3.6?",
      answer: "Because 1 L/s = 0.001 m³/s, and there are 3,600 seconds in an hour. 0.001 × 3,600 = 3.6."
    },
    {
      question: "What is 50 L/s in m³/h?",
      answer: "50 L/s multiplied by 3.6 equals 180 m³/h."
    },
    {
      question: "Is this conversion affected by temperature or liquid type?",
      answer: "No. Volumetric flow rate conversion depends solely on geometric volume and time ratios."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Liter/sec to CMH", from: "liter-per-sec", to: "cmh-unit" },
    { label: "Liter/sec to Cubic meter/sec", from: "liter-per-sec", to: "cubic-meter-per-sec" },
    { label: "Liter/sec to Liter/min", from: "liter-per-sec", to: "liter-per-min" }
  ],
  references: [
    "International Bureau of Weights and Measures (BIPM) - The International System of Units (SI)",
    "ASHRAE Handbook - Fundamentals: Space Air Diffusion and Flow Metrics",
    "ISO 80000-3: Quantities and units — Space and time"
  ]
};
