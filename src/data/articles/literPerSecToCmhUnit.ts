import { CustomArticleData } from "./types";

export const literPerSecToCmhUnit: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "cmh-unit",
  seoTitle: "Liter per Second to CMH Unit Converter - L/s to CMH",
  metaDescription: "Convert liters per second to CMH (Cubic Meters per Hour) airflow units. Learn the exact conversion factor (1 L/s = 3.6 CMH), HVAC ventilation formulas, and reference tables.",
  h1: "Liter per Second to CMH Unit Converter",
  introduction: [
    "Converting liters per second (L/s) to CMH (Cubic Meters per Hour, m³/h) is a fundamental metric volumetric flow rate conversion in HVAC engineering, industrial fan design, building management systems (BMS), and indoor air quality (IAQ) monitoring. Both units are metric and widely used across European, Asian, and international engineering projects.",
    "Because 1 cubic meter equals 1,000 liters and 1 hour contains 3,600 seconds, converting liters per second to CMH involves multiplying by exactly 3.6. This guide details the mathematical derivation, ventilation engineering applications, worked examples, and conversion tables."
  ],
  quickAnswer: {
    text: "To convert liters per second to CMH units, multiply the flow rate in L/s by 3.6. For example, an air handling unit moving 50 L/s delivers exactly 180 CMH.",
    formulaDisplay: "1 L/s = 3.6 CMH",
    subtext: "1 CMH unit equals exactly 1/3.6 ≈ 0.277778 liters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate representing one cubic decimeter of air or liquid passing a point per second. It is the standard unit for specifying fresh air intake and room ventilation rates in British and Commonwealth building standards."
  },
  aboutTargetUnit: {
    title: "Understanding the CMH Unit (Cubic Meters per Hour)",
    text: "The CMH unit (Cubic Meters per Hour, symbol: m³/h or CMH) is an SI metric unit representing the displacement of one cubic meter of fluid over an hour. It is the dominant airflow unit used by fan manufacturers and HVAC engineers across Europe and Asia."
  },
  relationship: "The relationship between L/s and CMH is based on exact SI definitions of volume and time. Since 1 liter is 0.001 m³, 1 L/s equals 0.001 m³/s. Multiplying by 3,600 seconds per hour yields 0.001 × 3,600 = 3.6 CMH.",
  relationshipTitle: "Exact SI Metric Relationship",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "= 3.6 CMH Units" },
    { label: "1 CMH Unit", value: "≈ 0.277778 Liters per Second (L/s)" }
  ],
  formula: {
    text: "To calculate volumetric flow rate in CMH units from liters per second, multiply the L/s value by 3.6.",
    math: "Flow (CMH) = Flow (L/s) × 3.6",
    subtext: "Exact mathematical formula: Flow (CMH) = Flow (L/s) × 3,600 / 1,000."
  },
  formulaTitle: "The Liter per Second to CMH Unit Formula",
  practicalTip: {
    title: "Instant Mental Math",
    text: "To calculate CMH from L/s in your head, multiply by 3 and add 20%. For example, for 20 L/s: 20 × 3 = 60; plus 20% (12) gives 72 CMH exactly."
  },
  expertNote: {
    title: "Zero Conversion Loss",
    text: "Because L/s and CMH are both metric units related by exact integer definitions, converting between them yields 100% mathematical precision with no rounding error."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Air Handling Unit Supply Fan",
        subtitle: "A building ventilation schedule specifies an outdoor air requirement of 120 L/s. Determine the equivalent fan capacity in CMH.",
        steps: [
          "Identify the flow rate in L/s: 120 L/s.",
          "Apply the exact formula: Flow (CMH) = 120 × 3.6.",
          "Calculate: 120 × 3.6 = 432 CMH.",
          "Result: 120 L/s corresponds to exactly 432 CMH."
        ]
      },
      {
        title: "Example 2: Commercial Restroom Exhaust",
        subtitle: "A restroom exhaust fan is rated at 45 L/s. Convert this rating to CMH.",
        steps: [
          "Identify the flow rate: 45 L/s.",
          "Multiply by 3.6: 45 × 3.6 = 162 CMH.",
          "Result: 45 L/s equals exactly 162 CMH."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Second to CMH Unit Conversion Reference",
    headers: ["Liters / Second (L/s)", "CMH Unit (CMH)", "Typical HVAC Ventilation Application"],
    rows: [
      { fromVal: "5 L/s", toVal: "18.0 CMH", extra: "Residential bathroom spot exhaust fan" },
      { fromVal: "10 L/s", toVal: "36.0 CMH", extra: "Individual office fresh air supply diffuser" },
      { fromVal: "25 L/s", toVal: "90.0 CMH", extra: "Commercial meeting room ventilation" },
      { fromVal: "50 L/s", toVal: "180 CMH", extra: "Small commercial kitchen exhaust" },
      { fromVal: "100 L/s", toVal: "360 CMH", extra: "Classroom dedicated outdoor air unit" },
      { fromVal: "250 L/s", toVal: "900 CMH", extra: "Retail store supply branch duct" },
      { fromVal: "500 L/s", toVal: "1,800 CMH", extra: "Medium commercial air handling unit" },
      { fromVal: "1,000 L/s", toVal: "3,600 CMH", extra: "Large commercial building AHU fan" },
      { fromVal: "2,500 L/s", toVal: "9,000 CMH", extra: "Industrial warehouse ventilation fan" }
    ]
  },
  applications: {
    title: "Real-World HVAC Applications",
    items: [
      {
        title: "HVAC Fan Selection & Cataloging",
        text: "European and Asian fan manufacturers list performance curves in CMH, requiring conversion when interpreting metric L/s specifications."
      },
      {
        title: "Building Management Systems (BMS)",
        text: "Central BMS control panels log duct airflow sensors in L/s and display hourly energy reports in CMH."
      },
      {
        title: "Cleanroom Air Change Rate Calculations",
        text: "Pharmaceutical cleanroom air change rates (ACH) divide total room volume (m³) by hourly airflow in CMH."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 3.6 instead of multiplying when converting L/s to CMH.",
      "Confusing CMH (Cubic Meters per Hour) with CFM (Cubic Feet per Minute).",
      "Confusing CMH (per hour) with CMS (Cubic Meters per Second)."
    ]
  },
  faqs: [
    {
      question: "How many CMH are in 1 liter per second?",
      answer: "There are exactly 3.6 CMH in 1 liter per second."
    },
    {
      question: "What is the formula to convert L/s to CMH?",
      answer: "The formula is: CMH = L/s × 3.6."
    },
    {
      question: "What is 100 L/s in CMH?",
      answer: "100 L/s multiplied by 3.6 equals exactly 360 CMH."
    },
    {
      question: "What is 500 L/s in CMH?",
      answer: "500 L/s multiplied by 3.6 equals exactly 1,800 CMH."
    },
    {
      question: "How do I convert CMH back to L/s?",
      answer: "Divide the CMH value by 3.6."
    },
    {
      question: "Is CMH the same as m³/h?",
      answer: "Yes, CMH stands for Cubic Meters per Hour, which is identical to m³/h."
    },
    {
      question: "Why is 3.6 the conversion factor?",
      answer: "Because 1 L/s = 0.001 m³/s, and there are 3,600 seconds in an hour. 0.001 × 3,600 = 3.6."
    },
    {
      question: "What is 1,000 L/s in CMH?",
      answer: "1,000 L/s multiplied by 3.6 equals 3,600 CMH."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Cubic meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" },
    { label: "Liter/sec to CFM", from: "liter-per-sec", to: "cfm-unit" },
    { label: "Liter/sec to Cubic feet/min", from: "liter-per-sec", to: "cubic-feet-per-min" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" }
  ],
  references: [
    "ISO 80000-3: Quantities and Units — Space and time",
    "CIBSE Guide B2: Ventilation and Ductwork Design",
    "ASHRAE Handbook — HVAC Applications"
  ]
};
