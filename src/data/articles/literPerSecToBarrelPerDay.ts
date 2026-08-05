import { CustomArticleData } from "./types";

export const literPerSecToBarrelPerDay: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "barrel-per-day",
  seoTitle: "Liter per Second to Barrel per Day Converter - L/s to bbl/d",
  metaDescription: "Convert liters per second to barrels per day (L/s to bbl/d) accurately. Learn the oil barrel conversion formula (1 L/s ≈ 543.44 bbl/d), petroleum engineering examples, and tables.",
  h1: "Liter per Second to Barrel per Day Converter",
  introduction: [
    "Converting liters per second (L/s) to barrels per day (bbl/d or BPD) is a fundamental volumetric flow rate conversion in petroleum engineering, crude oil pipeline transport, refinery management, and international oil trade. While chemical process sensors and flow meters record instant fluid rate in liters per second, global oil market production statistics and pipeline capacities are reported in barrels per day.",
    "Because one standard petroleum oil barrel contains exactly 158.987294928 liters (42 US gallons) and one day contains 86,400 seconds, converting liters per second to barrels per day requires multiplying by approximately 543.43965. This guide provides step-by-step conversion instructions, petroleum industry context, worked examples, and conversion tables."
  ],
  quickAnswer: {
    text: "To convert liters per second to barrels per day, multiply the flow rate in L/s by 543.43965. For example, a pipeline flow rate of 10 L/s equates to approximately 5,434.40 barrels of oil per day.",
    formulaDisplay: "1 L/s ≈ 543.43965 bbl/d",
    subtext: "1 barrel per day equals approximately 0.00184013 liters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate representing the movement of one liter of liquid every second. In the oil and gas sector, high-precision Coriolis and turbine flow meters in metering skids log production data in metric liters per second."
  },
  aboutTargetUnit: {
    title: "Understanding Barrels per Day (bbl/d)",
    text: "The barrel per day (symbol: bbl/d or BPD) is the worldwide standard unit for measuring crude oil extraction, refinery throughput, and fuel consumption. One standard oil barrel equals 42 US gallons, 158.987 liters, or 34.97 imperial gallons."
  },
  relationship: "The relationship between L/s and bbl/d spans volume and daily duration. In 24 hours (86,400 seconds), a flow rate of 1 L/s discharges 86,400 liters. Dividing 86,400 liters by the 158.987294928 liters in a standard oil barrel yields 86,400 / 158.987294928 ≈ 543.43965056 barrels per day.",
  relationshipTitle: "Metric Flow vs Petroleum Production Flow",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "≈ 543.43965 Barrels per Day (bbl/d)" },
    { label: "1 Barrel per Day (bbl/d)", value: "≈ 0.00184013 Liters per Second (L/s)" }
  ],
  formula: {
    text: "To calculate production in barrels per day from liters per second, multiply the L/s flow rate by 543.43965.",
    math: "Production (bbl/d) = Flow (L/s) × 543.43965",
    subtext: "Exact mathematical formula: Production (bbl/d) = Flow (L/s) × (86,400 / 158.987294928)."
  },
  formulaTitle: "The Liter per Second to Barrel per Day Formula",
  practicalTip: {
    title: "Petroleum Engineer Shortcut",
    text: "For rapid mental estimation on offshore platforms, multiply L/s by 540 or divide by 0.00184. 5 L/s × 540 = 2,700 bbl/d (very close to the exact 2,717.2 bbl/d)."
  },
  expertNote: {
    title: "Oil Barrel vs Water/Beer Barrel",
    text: "Ensure you use the standard petroleum crude oil barrel (42 US gallons / 158.987 L). Do not confuse it with a US fluid barrel (31.5 US gallons) or a UK beer barrel (36 Imperial gallons)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Offshore Oil Well Production Monitoring",
        subtitle: "An offshore production platform's metering skid registers a continuous crude oil flow of 18.5 L/s. Calculate daily oil yield in bbl/d.",
        steps: [
          "Identify the flow rate in L/s: 18.5 L/s.",
          "Apply the conversion formula: Production (bbl/d) = 18.5 × 543.43965.",
          "Perform the multiplication: 18.5 × 543.43965 = 10,053.6335 bbl/d.",
          "Result: 18.5 L/s corresponds to approximately 10,053.63 barrels per day."
        ]
      },
      {
        title: "Example 2: Refinery Feedstock Transfer",
        subtitle: "A pump feeding a distillation tower operates at 50 L/s. Determine the daily volume in barrels.",
        steps: [
          "Identify the flow rate: 50 L/s.",
          "Multiply by 543.43965: 50 × 543.43965 = 27,171.9825 bbl/d.",
          "Result: 50 L/s equals approximately 27,171.98 bbl/d."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Second to Barrels per Day Conversion Reference",
    headers: ["Liters / Second (L/s)", "Barrels / Day (bbl/d)", "Petroleum Production & Refinery Scale"],
    rows: [
      { fromVal: "0.1 L/s", toVal: "54.34 bbl/d", extra: "Marginal stripper well production" },
      { fromVal: "0.5 L/s", toVal: "271.72 bbl/d", extra: "Small onshore pumpjack production" },
      { fromVal: "1.0 L/s", toVal: "543.44 bbl/d", extra: "Medium onshore oil well" },
      { fromVal: "2.5 L/s", toVal: "1,358.60 bbl/d", extra: "High-yield onshore shale well" },
      { fromVal: "5.0 L/s", toVal: "2,717.20 bbl/d", extra: "Offshore platform producer well" },
      { fromVal: "10 L/s", toVal: "5,434.40 bbl/d", extra: "Feeder pipeline connection" },
      { fromVal: "25 L/s", toVal: "13,585.99 bbl/d", extra: "Regional trunk line manifold" },
      { fromVal: "50 L/s", toVal: "27,171.98 bbl/d", extra: "Medium crude oil refinery intake" },
      { fromVal: "100 L/s", toVal: "54,343.97 bbl/d", extra: "Major cross-country crude pipeline" }
    ]
  },
  applications: {
    title: "Industry & Trading Applications",
    items: [
      {
        title: "Crude Oil Pipeline Management",
        text: "Pipeline dispatchers translate continuous flow rates from telemetry meters (L/s) into daily batch delivery schedules in barrels."
      },
      {
        title: "Refinery Crude Units",
        text: "Refinery process engineers verify daily feedstock processing capacity against instant pump flow meters."
      },
      {
        title: "Global Oil Trading & Financial Reporting",
        text: "Financial analysts convert metric production volumes reported by international national oil companies into barrels per day for commodity pricing."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 543.44 instead of multiplying when converting L/s to bbl/d.",
      "Using the wrong barrel definition (e.g., using 31.5 gallon liquid barrels instead of 42 gallon petroleum barrels).",
      "Forgetting that bbl/d reflects a 24-hour daily continuous operating rate."
    ]
  },
  faqs: [
    {
      question: "How many barrels per day are in 1 liter per second?",
      answer: "There are approximately 543.44 barrels per day in 1 liter per second."
    },
    {
      question: "What is the formula to convert L/s to bbl/d?",
      answer: "The formula is: bbl/d = L/s × 543.43965."
    },
    {
      question: "How many liters are in an oil barrel?",
      answer: "There are exactly 158.987294928 liters in one standard petroleum oil barrel (42 US gallons)."
    },
    {
      question: "What is 10 L/s in barrels per day?",
      answer: "10 L/s multiplied by 543.43965 equals approximately 5,434.40 bbl/d."
    },
    {
      question: "How do I convert bbl/d back to L/s?",
      answer: "Divide the bbl/d value by 543.43965 (or multiply by 0.00184013)."
    },
    {
      question: "Why is bbl the abbreviation for barrel?",
      answer: "In the 1860s Early Pennsylvania oil fields, standard blue 42-gallon wooden barrels were stamped 'bbl' (blue barrel) to guarantee full measure."
    },
    {
      question: "What is 100 L/s in bbl/d?",
      answer: "100 L/s multiplied by 543.43965 equals approximately 54,343.97 bbl/d."
    },
    {
      question: "Does temperature affect bbl/d measurement?",
      answer: "In commercial petroleum transactions, volumes are standardized to 60°F (15.56°C) API standards to account for thermal expansion."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Cubic meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Liter/sec to Gallon/hour", from: "liter-per-sec", to: "gallon-per-hour" },
    { label: "Liter/sec to Cubic meter/sec", from: "liter-per-sec", to: "cubic-meter-per-sec" }
  ],
  references: [
    "American Petroleum Institute (API) Manual of Petroleum Measurement Standards (MPMS)",
    "U.S. Energy Information Administration (EIA) International Energy Statistics Definitions",
    "ASTM D1250: Standard Guide for Use of the Petroleum Measurement Tables"
  ]
};
