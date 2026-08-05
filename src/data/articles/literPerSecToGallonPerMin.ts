import { CustomArticleData } from "./types";

export const literPerSecToGallonPerMin: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "gallon-per-min",
  seoTitle: "Liter per Second to Gallon per Minute Converter - L/s to GPM",
  metaDescription: "Convert liters per second to US gallons per minute (L/s to GPM) accurately. Learn the conversion formula (1 L/s ≈ 15.8503 GPM), fluid mechanics examples, and reference charts.",
  h1: "Liter per Second to Gallon per Minute Converter",
  introduction: [
    "Converting liters per second (L/s) to gallons per minute (GPM) is a frequent volumetric flow rate calculation across hydraulic engineering, fire protection systems, municipal water supply networks, and industrial piping design. While metric countries measure fluid displacement in liters per second, US plumbing standards and industrial equipment ratings rely heavily on US gallons per minute.",
    "Because one US liquid gallon contains exactly 3.785411784 liters and one minute contains 60 seconds, converting liters per second to US gallons per minute requires multiplying the liter per second value by approximately 15.8503. This guide provides step-by-step conversion instructions, mathematical formulas, worked engineering examples, and practical flow rate tables."
  ],
  quickAnswer: {
    text: "To convert liters per second to US gallons per minute, multiply the flow rate in L/s by 15.850323 (or multiply by 60 and divide by 3.785412). For example, a pump discharging 5 L/s delivers approximately 79.25 GPM.",
    formulaDisplay: "1 L/s ≈ 15.850323 GPM",
    subtext: "1 US gallon per minute equals exactly 3.785411784 / 60 ≈ 0.0630902 liters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate defined as the movement of one cubic decimeter (1 liter) of fluid past a reference plane every second. It is the primary metric metric used by civil engineers, hydrologists, and environmental scientists for pipeline flow, river discharge, and HVAC water circulation."
  },
  aboutTargetUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "The gallon per minute (symbol: GPM) is a US customary unit of volumetric flow rate representing the transfer of one US liquid gallon (231 cubic inches or 3.7854 liters) every minute. It serves as the standard rating unit for water pumps, irrigation heads, fire sprinkler systems, and residential plumbing fixtures across North America."
  },
  relationship: "The mathematical relationship between liters per second and US gallons per minute derives directly from time and volume definitions. Converting 1 L/s to a per-minute rate yields 60 liters per minute. Dividing 60 liters by the official definition of 1 US gallon (3.785411784 L) yields 60 / 3.785411784 ≈ 15.85032314 GPM.",
  relationshipTitle: "Metric Flow vs US Customary Flow Relationship",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "≈ 15.850323 Gallons per Minute (GPM)" },
    { label: "1 Gallon per Minute (GPM)", value: "≈ 0.063090 Liters per Second (L/s)" }
  ],
  formula: {
    text: "To calculate volumetric flow rate in gallons per minute from liters per second, multiply the L/s value by the conversion constant 15.850323.",
    math: "Flow (GPM) = Flow (L/s) × 15.850323",
    subtext: "Exact mathematical formula: Flow (GPM) = Flow (L/s) × (60 / 3.785411784)."
  },
  formulaTitle: "The Liter per Second to GPM Formula",
  practicalTip: {
    title: "Quick Field Calculation Tip",
    text: "For quick mental estimation on a job site, multiply the liters per second by 16. Subtract 1% from your result for greater precision. For instance, 10 L/s × 16 = 160 GPM, minus 1% (1.6) gives 158.4 GPM, extremely close to the exact 158.5 GPM."
  },
  expertNote: {
    title: "US GPM vs UK Imperial GPM",
    text: "Always verify whether a pump rating specifies US gallons per minute or UK Imperial gallons per minute. An Imperial gallon is larger (4.546 L), so 1 L/s equals 13.198 Imperial GPM compared to 15.850 US GPM."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Municipal Water Main Discharge",
        subtitle: "A water treatment plant measures a main line flow rate of 12 L/s. Determine the equivalent discharge in US GPM.",
        steps: [
          "Identify the flow rate in metric units: 12 L/s.",
          "Apply the conversion factor: Flow (GPM) = 12 × 15.850323.",
          "Perform the multiplication: 12 × 15.850323 = 190.203876 GPM.",
          "Result: 12 L/s corresponds to approximately 190.20 GPM."
        ]
      },
      {
        title: "Example 2: Commercial Cooling Tower Water Pump",
        subtitle: "A chilled water pump is rated to deliver 45 L/s. Convert this rating to GPM for equipment selection.",
        steps: [
          "Identify the flow rate: 45 L/s.",
          "Multiply by 60 to find liters per minute: 45 × 60 = 2,700 L/min.",
          "Divide by liters per US gallon: 2,700 / 3.785412 = 713.2645 GPM.",
          "Result: 45 L/s equals approximately 713.26 GPM."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Second to GPM Conversion Reference",
    headers: ["Liters / Second (L/s)", "Gallons / Minute (GPM)", "Typical Hydraulic & Industrial Application"],
    rows: [
      { fromVal: "0.1 L/s", toVal: "1.59 GPM", extra: "Residential faucet flow" },
      { fromVal: "0.5 L/s", toVal: "7.93 GPM", extra: "Commercial showerhead or garden hose" },
      { fromVal: "1.0 L/s", toVal: "15.85 GPM", extra: "Residential main supply line" },
      { fromVal: "2.5 L/s", toVal: "39.63 GPM", extra: "Small agricultural booster pump" },
      { fromVal: "5.0 L/s", toVal: "79.25 GPM", extra: "Commercial building water booster" },
      { fromVal: "10 L/s", toVal: "158.50 GPM", extra: "Fire sprinkler zone riser" },
      { fromVal: "25 L/s", toVal: "396.26 GPM", extra: "Industrial heat exchanger loop" },
      { fromVal: "50 L/s", toVal: "792.52 GPM", extra: "Municipal water distribution branch" },
      { fromVal: "100 L/s", toVal: "1,585.03 GPM", extra: "Major stormwater management pump" }
    ]
  },
  applications: {
    title: "Engineering & Industry Applications",
    items: [
      {
        title: "Fire Protection Engineering",
        text: "Hydraulic calculations for fire sprinkler risers and fire pump sizing frequently require converting metric flow meter readings into US GPM standard safety tables."
      },
      {
        title: "HVAC & Hydronic Systems",
        text: "Chillers and cooling towers manufactured in North America specify liquid circulation in GPM, requiring conversion when pairing with European flow meters."
      },
      {
        title: "Agricultural Irrigation",
        text: "Pivot irrigation systems and drip lines evaluate water allocation rates across international equipment lines by converting L/s pump output into GPM."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing US liquid GPM (15.85 L/s) with UK Imperial GPM (13.20 L/s).",
      "Dividing by 15.85 instead of multiplying when converting from L/s to GPM.",
      "Forgetting to factor in time unit conversion (seconds to minutes) when manually computing volume ratios.",
      "Rounding the conversion factor to 15 prematurely during multi-step pipe friction calculations."
    ]
  },
  faqs: [
    {
      question: "How many GPM are in 1 liter per second?",
      answer: "There are approximately 15.8503 US gallons per minute in 1 liter per second."
    },
    {
      question: "How do I convert L/s to GPM manually?",
      answer: "Multiply the liters per second value by 60 to convert seconds to minutes, then divide the result by 3.785412."
    },
    {
      question: "What is 5 liters per second in GPM?",
      answer: "5 L/s multiplied by 15.850323 equals approximately 79.25 US GPM."
    },
    {
      question: "What is 10 liters per second in GPM?",
      answer: "10 L/s multiplied by 15.850323 equals approximately 158.50 US GPM."
    },
    {
      question: "Is GPM always based on US liquid gallons?",
      answer: "Unless explicitly stated as Imperial GPM (used in the UK and Commonwealth countries), standard GPM ratings in North America refer to US liquid gallons."
    },
    {
      question: "Why does 1 L/s equal 15.85 GPM?",
      answer: "Because 1 L/s equals 60 liters per minute. Dividing 60 L/min by 3.785411784 L/gal gives 15.850323 GPM."
    },
    {
      question: "How do I convert GPM back to L/s?",
      answer: "To convert GPM back to liters per second, divide the GPM value by 15.850323 (or multiply by 0.0630902)."
    },
    {
      question: "What tool is used to measure liters per second in pipes?",
      answer: "Ultrasonic flow meters, electromagnetic flow meters, and orifice plate differential pressure sensors commonly measure pipeline flow in L/s."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Cubic meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" },
    { label: "Liter/sec to Cubic feet/min", from: "liter-per-sec", to: "cubic-feet-per-min" },
    { label: "Liter/sec to Liter/min", from: "liter-per-sec", to: "liter-per-min" },
    { label: "Liter/sec to Gallon/hour", from: "liter-per-sec", to: "gallon-per-hour" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)",
    "Hydraulic Institute Standards for Centrifugal and Vertical Pumps",
    "ISO 31-3: Quantities and Units — Mechanics"
  ]
};
