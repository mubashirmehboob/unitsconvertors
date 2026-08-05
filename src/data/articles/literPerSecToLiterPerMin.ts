import { CustomArticleData } from "./types";

export const literPerSecToLiterPerMin: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "liter-per-min",
  seoTitle: "Liter per Second to Liter per Minute Converter - L/s to L/min",
  metaDescription: "Convert liters per second to liters per minute (L/s to L/min or LPM). Learn the exact conversion factor (1 L/s = 60 L/min), hydraulic formulas, and reference tables.",
  h1: "Liter per Second to Liter per Minute Converter",
  introduction: [
    "Converting liters per second (L/s) to liters per minute (L/min, often abbreviated as LPM) is one of the most common volumetric flow rate conversions in fluid mechanics, medical oxygen delivery, laboratory equipment calibration, and domestic plumbing sizing. Both units share the metric liter as the volume base, differing only in the time interval.",
    "Because one minute contains exactly 60 seconds, converting liters per second to liters per minute involves multiplying by exactly 60. This article outlines the step-by-step mathematical conversion, practical engineering and medical applications, worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert liters per second to liters per minute, multiply the flow rate in L/s by 60. For example, a water faucet discharging 0.2 L/s delivers exactly 12 L/min.",
    formulaDisplay: "1 L/s = 60 L/min",
    subtext: "1 liter per minute equals exactly 1/60 ≈ 0.0166667 liters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate representing one liter (1 dm³) of liquid or gas passing a reference point every second. It is typically used for higher-rate continuous flows, such as main water service lines and pump discharge capacities."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per Minute (L/min or LPM)",
    text: "The liter per minute (symbol: L/min or LPM) is a metric unit of volumetric flow rate representing the transfer of one liter of fluid over a one-minute duration. It is widely used for residential plumbing fixtures, medical respiratory flow meters, and automotive fuel pumps."
  },
  relationship: "The relationship between L/s and L/min is defined strictly by time geometry. Since both units measure volume in liters, converting from a per-second rate to a per-minute rate requires scaling up by a factor of 60 (the number of seconds in one minute).",
  relationshipTitle: "Exact Metric Time Scale Relationship",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "= 60 Liters per Minute (L/min)" },
    { label: "1 Liter per Minute (L/min)", value: "≈ 0.0166667 Liters per Second (L/s)" }
  ],
  formula: {
    text: "To calculate volumetric flow rate in liters per minute from liters per second, multiply the L/s value by 60.",
    math: "Flow (L/min) = Flow (L/s) × 60",
    subtext: "Exact mathematical formula based on 60 seconds per minute."
  },
  formulaTitle: "The Liter per Second to L/min Formula",
  practicalTip: {
    title: "Instant Mental Math",
    text: "Converting L/s to L/min is simple mental math: multiply by 6, then add a zero. For example, 0.5 L/s × 6 = 3, add a zero = 30 L/min."
  },
  expertNote: {
    title: "100% Exact Conversion",
    text: "Because both units are metric and time scales are exact integer constants, converting L/s to L/min involves no approximation or rounding error."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Residential Showerhead Flow Rate",
        subtitle: "A modern eco-friendly showerhead delivers water at a rate of 0.15 L/s. Determine the equivalent flow in liters per minute.",
        steps: [
          "Identify the flow rate in L/s: 0.15 L/s.",
          "Apply the formula: Flow (L/min) = 0.15 × 60.",
          "Calculate: 0.15 × 60 = 9 L/min.",
          "Result: 0.15 L/s equals exactly 9 L/min."
        ]
      },
      {
        title: "Example 2: Medical Oxygen Concentrator Output",
        subtitle: "A hospital medical gas manifold measures an oxygen surge discharge of 0.8 L/s. Calculate the rate in L/min.",
        steps: [
          "Identify the flow rate: 0.8 L/s.",
          "Multiply by 60: 0.8 × 60 = 48 L/min.",
          "Result: 0.8 L/s corresponds to exactly 48 L/min."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Second to Liters per Minute Conversion Reference",
    headers: ["Liters / Second (L/s)", "Liters / Minute (L/min)", "Typical Application Context"],
    rows: [
      { fromVal: "0.01 L/s", toVal: "0.6 L/min", extra: "Laboratory chemical dosing pump" },
      { fromVal: "0.05 L/s", toVal: "3.0 L/min", extra: "Medical oxygen cannula therapy" },
      { fromVal: "0.10 L/s", toVal: "6.0 L/min", extra: "Low-flow bathroom sink aerator" },
      { fromVal: "0.20 L/s", toVal: "12.0 L/min", extra: "Standard residential kitchen faucet" },
      { fromVal: "0.50 L/s", toVal: "30.0 L/min", extra: "Residential main water meter" },
      { fromVal: "1.0 L/s", toVal: "60.0 L/min", extra: "Garden hose full open" },
      { fromVal: "2.5 L/s", toVal: "150 L/min", extra: "Commercial building booster pump" },
      { fromVal: "5.0 L/s", toVal: "300 L/min", extra: "Fire hose nozzle at medium pressure" },
      { fromVal: "10 L/s", toVal: "600 L/min", extra: "Industrial washdown station" }
    ]
  },
  applications: {
    title: "Real-World Engineering & Healthcare Applications",
    items: [
      {
        title: "Plumbing Fixture Compliance & Water Conservation",
        text: "Building codes set maximum flow limits for faucets and showerheads in L/min, which plumbers verify against L/s container catch tests."
      },
      {
        title: "Medical Respiratory & Oxygen Delivery",
        text: "Hospital gas distribution networks convert high-pressure manifold rates (L/s) into patient-bedside flow meter settings (L/min)."
      },
      {
        title: "Automotive Fuel & Cooling Systems",
        text: "Engine fuel pumps and radiator circulation systems rate volumetric delivery in L/min for thermal management modeling."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 60 instead of multiplying when converting L/s to L/min.",
      "Confusing L/min (Liters per Minute) with L/h (Liters per Hour).",
      "Forgetting to account for time when converting cumulative volume tests to instantaneous rate measurements."
    ]
  },
  faqs: [
    {
      question: "How many liters per minute is 1 liter per second?",
      answer: "1 liter per second is equal to exactly 60 liters per minute."
    },
    {
      question: "What is the formula to convert L/s to L/min?",
      answer: "The formula is: L/min = L/s × 60."
    },
    {
      question: "What is 0.5 L/s in L/min?",
      answer: "0.5 L/s multiplied by 60 equals exactly 30 L/min."
    },
    {
      question: "What is 2 L/s in L/min?",
      answer: "2 L/s multiplied by 60 equals exactly 120 L/min."
    },
    {
      question: "How do I convert L/min back to L/s?",
      answer: "To convert L/min back to L/s, divide the L/min value by 60."
    },
    {
      question: "Is LPM the same as L/min?",
      answer: "Yes, LPM is a common abbreviation for Liters Per Minute."
    },
    {
      question: "Why is 60 the conversion factor?",
      answer: "Because there are exactly 60 seconds in one minute."
    },
    {
      question: "What is 10 L/s in L/min?",
      answer: "10 L/s multiplied by 60 equals 600 L/min."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Cubic meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Liter/sec to Gallon/hour", from: "liter-per-sec", to: "gallon-per-hour" },
    { label: "Liter/sec to Milliliter/min", from: "liter-per-sec", to: "milliliter-per-min" }
  ],
  references: [
    "ISO 80000-3: Quantities and Units — Space and time",
    "International Association of Plumbing and Mechanical Officials (IAPMO) Uniform Plumbing Code",
    "ISO 15001: Medical devices — Compatibility with oxygen"
  ]
};
