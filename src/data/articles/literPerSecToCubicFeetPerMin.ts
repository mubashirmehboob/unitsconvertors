import { CustomArticleData } from "./types";

export const literPerSecToCubicFeetPerMin: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "cubic-feet-per-min",
  seoTitle: "Liter per Second to Cubic Feet per Minute Converter - L/s to CFM",
  metaDescription: "Convert liters per second to cubic feet per minute (L/s to CFM). Learn the conversion factor (1 L/s ≈ 2.11888 CFM), HVAC duct design formulas, and air flow tables.",
  h1: "Liter per Second to Cubic Feet per Minute Converter",
  introduction: [
    "Converting liters per second (L/s) to cubic feet per minute (CFM) is an essential flow rate conversion in HVAC engineering, cleanroom design, industrial ventilation, and pneumatic system sizing. Metric ventilation specifications state airflow in liters per second, whereas North American mechanical codes and equipment catalogs rate fans, blowers, and air compressors in CFM.",
    "Because one cubic foot equals approximately 28.3168 liters and one minute contains 60 seconds, converting liters per second to cubic feet per minute requires multiplying by approximately 2.11888. This article provides step-by-step conversion instructions, engineering context, worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert liters per second to cubic feet per minute, multiply the flow rate in L/s by 2.11888 (or multiply by 60 and divide by 28.31685). For example, a ventilation fan moving 50 L/s delivers approximately 105.94 CFM.",
    formulaDisplay: "1 L/s ≈ 2.11888 CFM",
    subtext: "1 cubic foot per minute equals approximately 0.471947 liters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate representing the movement of one cubic decimeter of fluid or gas per second. It is the primary metric unit for indoor air quality compliance, fresh air supply requirements, and exhaust fan ratings."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Feet per Minute (CFM)",
    text: "The cubic foot per minute (symbol: CFM or ft³/min) is an imperial unit of volumetric flow rate measuring the transfer of one cubic foot of gas or liquid every minute. It is universally used across North America for HVAC air balancing, dust collection, and air compressor capacity."
  },
  relationship: "The relationship between L/s and CFM connects metric volume and time with imperial volume and time. One liter per second equals 60 liters per minute. Since 1 cubic foot contains 28.316846592 liters, 60 liters per minute divided by 28.316846592 liters per cubic foot yields 2.1188800033 CFM.",
  relationshipTitle: "Metric Ventilation vs Imperial Ventilation Flow",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "≈ 2.11888 Cubic Feet per Minute (CFM)" },
    { label: "1 Cubic Foot per Minute (CFM)", value: "≈ 0.471947 Liters per Second (L/s)" }
  ],
  formula: {
    text: "To calculate volumetric airflow in cubic feet per minute from liters per second, multiply the L/s value by 2.11888.",
    math: "Flow (CFM) = Flow (L/s) × 2.11888",
    subtext: "Exact mathematical formula: Flow (CFM) = Flow (L/s) × (60 / 28.316846592)."
  },
  formulaTitle: "The Liter per Second to CFM Formula",
  practicalTip: {
    title: "Quick HVAC Field Rule of Thumb",
    text: "To estimate CFM from L/s in the field without a calculator, double the L/s figure and add 10%. For example, 100 L/s × 2 = 200, plus 10% (20) = 220 CFM (very close to the exact 211.89 CFM)."
  },
  expertNote: {
    title: "Standard CFM (ACFM vs SCFM)",
    text: "In industrial compressed air and gas calculations, verify whether flow is expressed at actual operating temperature/pressure (ACFM) or standard reference conditions (SCFM). The geometric volume conversion constant 2.11888 applies identically."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Office Building Fresh Air Supply",
        subtitle: "An HVAC blueprint requires an outdoor air intake of 250 L/s for an open office area. Convert this airflow to CFM for fan selection.",
        steps: [
          "Identify the metric airflow rate: 250 L/s.",
          "Apply the conversion formula: Flow (CFM) = 250 × 2.11888.",
          "Perform the multiplication: 250 × 2.11888 = 529.72 CFM.",
          "Result: 250 L/s corresponds to approximately 529.72 CFM."
        ]
      },
      {
        title: "Example 2: Server Room Exhaust Hood",
        subtitle: "A server enclosure exhaust fan is rated at 120 L/s. Determine its capacity in CFM.",
        steps: [
          "Identify the flow rate: 120 L/s.",
          "Multiply by 2.11888: 120 × 2.11888 = 254.2656 CFM.",
          "Result: 120 L/s equals approximately 254.27 CFM."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Second to CFM Conversion Reference",
    headers: ["Liters / Second (L/s)", "Cubic Feet / Minute (CFM)", "Typical Ventilation & Airflow Application"],
    rows: [
      { fromVal: "5 L/s", toVal: "10.59 CFM", extra: "Residential bathroom spot exhaust fan" },
      { fromVal: "10 L/s", toVal: "21.19 CFM", extra: "Individual office room supply diffuser" },
      { fromVal: "25 L/s", toVal: "52.97 CFM", extra: "Kitchen range hood low speed" },
      { fromVal: "50 L/s", toVal: "105.94 CFM", extra: "Commercial restroom exhaust fan" },
      { fromVal: "100 L/s", toVal: "211.89 CFM", extra: "Small classroom ventilation unit" },
      { fromVal: "250 L/s", toVal: "529.72 CFM", extra: "Medium air handler supply branch" },
      { fromVal: "500 L/s", toVal: "1,059.44 CFM", extra: "Rooftop packaged unit fan" },
      { fromVal: "1,000 L/s", toVal: "2,118.88 CFM", extra: "Large commercial air handling unit" },
      { fromVal: "2,500 L/s", toVal: "5,297.20 CFM", extra: "Industrial dust collector exhaust" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "HVAC Duct Sizing & Air Balancing",
        text: "Test and balance (TAB) technicians convert airflow measurements between metric anemometers (L/s) and imperial duct design charts (CFM)."
      },
      {
        title: "Pneumatic Tools & Air Compressors",
        text: "Factory compressed air systems evaluate tool air consumption specifications by converting metric compressor outputs into CFM."
      },
      {
        title: "Cleanroom Environmental Control",
        text: "Pharmaceutical cleanroom air exchange rates convert HEPA filter discharge in L/s to CFM air changes per hour (ACH)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 2.11888 instead of multiplying when converting L/s to CFM.",
      "Conflating mass flow rates (e.g. kg/s) with volumetric flow rates without accounting for air density.",
      "Confusing CFM (Cubic Feet per Minute) with CFS (Cubic Feet per Second)."
    ]
  },
  faqs: [
    {
      question: "How many CFM are in 1 liter per second?",
      answer: "There are approximately 2.11888 cubic feet per minute in 1 liter per second."
    },
    {
      question: "How do I convert L/s to CFM?",
      answer: "Multiply the flow rate in liters per second by 2.11888 to get CFM."
    },
    {
      question: "What is 100 L/s in CFM?",
      answer: "100 L/s multiplied by 2.11888 equals approximately 211.89 CFM."
    },
    {
      question: "What is 500 L/s in CFM?",
      answer: "500 L/s multiplied by 2.11888 equals approximately 1,059.44 CFM."
    },
    {
      question: "How do I convert CFM back to L/s?",
      answer: "Divide the CFM value by 2.11888 (or multiply by 0.471947)."
    },
    {
      question: "Is CFM a unit of liquid or air flow?",
      answer: "CFM measures volumetric flow rate for both gases (air) and liquids, though it is most widely applied to air and gas flow in HVAC."
    },
    {
      question: "Why do HVAC engineers use both L/s and CFM?",
      answer: "Metric building codes (such as ISO, CIBSE, and Australian Standards) use L/s, whereas North American standards (ASHRAE, SMACNA) use CFM."
    },
    {
      question: "What is the difference between CFM and m³/h?",
      answer: "1 CFM is equal to approximately 1.699 m³/h. Both measure volumetric flow over different volume and time bases."
    }
  ],
  relatedList: [
    { label: "Liter/sec to CFM (unit)", from: "liter-per-sec", to: "cfm-unit" },
    { label: "Liter/sec to Cubic meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Liter/sec to Cubic feet/sec", from: "liter-per-sec", to: "cubic-feet-per-sec" }
  ],
  references: [
    "ASHRAE Standard 62.1: Ventilation for Acceptable Indoor Air Quality",
    "SMACNA HVAC Duct Construction Standards — Metal and Flexible",
    "ISO 5801: Industrial fans — Performance testing using standardized airways"
  ]
};
