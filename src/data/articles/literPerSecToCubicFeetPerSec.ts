import { CustomArticleData } from "./types";

export const literPerSecToCubicFeetPerSec: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "cubic-feet-per-sec",
  seoTitle: "Liter per Second to Cubic Feet per Second Converter - L/s to cfs",
  metaDescription: "Convert liters per second to cubic feet per second (L/s to cfs). Learn the exact conversion factor (1 L/s ≈ 0.0353147 cfs), river hydrology formulas, and conversion tables.",
  h1: "Liter per Second to Cubic Feet per Second Converter",
  introduction: [
    "Converting liters per second (L/s) to cubic feet per second (cfs or ft³/s) is a critical volumetric flow rate conversion in civil engineering, stream gauging, open-channel hydraulics, and environmental impact assessments. While metric hydrology protocols measure discharge in liters per second, United States water resources agencies (such as the USGS and USACE) publish river flow and flood data in cubic feet per second.",
    "Because one cubic foot contains exactly 28.316846592 liters, converting liters per second to cubic feet per second requires dividing by 28.31685 (or multiplying by approximately 0.03531467). This guide provides step-by-step conversion instructions, river engineering context, worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert liters per second to cubic feet per second, divide the L/s flow rate by 28.316847 (or multiply by 0.03531467). For example, a stream discharging 100 L/s delivers approximately 3.53 cfs.",
    formulaDisplay: "1 L/s ≈ 0.03531467 cfs",
    subtext: "1 cubic foot per second (1 cfs) equals exactly 28.316846592 liters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate indicating the movement of one cubic decimeter of fluid per second. It is used internationally for urban drainage networks, pump discharge monitoring, and environmental stream monitoring."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Feet per Second (cfs)",
    text: "The cubic foot per second (symbol: cfs or ft³/s) is an imperial unit of volumetric flow rate representing one cubic foot of water passing a given location every second. It is the primary flow unit for US river gauging, whitewater kayaking reports, and dam release schedules."
  },
  relationship: "The relationship between L/s and cfs rests directly on the physical conversion between liters and cubic feet. One cubic foot is defined as exactly 28.316846592 liters. Because both units use the second as the base unit of time, 1 L/s divided by 28.316846592 L/ft³ equals 0.0353146667 cfs.",
  relationshipTitle: "Metric Streamflow vs US Imperial Streamflow",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "≈ 0.03531467 Cubic Feet per Second (cfs)" },
    { label: "1 Cubic Foot per Second (cfs)", value: "= 28.316846592 Liters per Second (L/s)" }
  ],
  formula: {
    text: "To calculate volumetric flow rate in cubic feet per second from liters per second, divide the L/s value by 28.3168466 (or multiply by 0.03531467).",
    math: "Flow (cfs) = Flow (L/s) / 28.3168466",
    subtext: "Equivalent multiplication formula: Flow (cfs) = Flow (L/s) × 0.0353146667."
  },
  formulaTitle: "The Liter per Second to cfs Formula",
  practicalTip: {
    title: "Quick Field Benchmark",
    text: "Remember that 1 cfs is roughly 28.3 L/s. To quickly convert L/s to cfs in the field, divide the L/s value by 30 and add 6% to your result. For example, 300 L/s / 30 = 10; 10 + 0.6 = 10.6 cfs (very close to 10.59 cfs)."
  },
  expertNote: {
    title: "USGS Streamflow Conventions",
    text: "When comparing USGS real-time stream gauge data (reported in cfs) with European or Canadian metric hydrological models (in L/s or m³/s), always maintain at least 4 significant figures during intermediate calculations."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Mountain Stream Gauge Comparison",
        subtitle: "A European environmental monitoring team measures a mountain stream discharge of 250 L/s. Convert this reading to cfs for US agency reporting.",
        steps: [
          "Identify the flow rate in L/s: 250 L/s.",
          "Apply the conversion formula: Flow (cfs) = 250 / 28.3168466.",
          "Perform the division: 250 / 28.3168466 = 8.828666 cfs.",
          "Result: 250 L/s corresponds to approximately 8.83 cfs."
        ]
      },
      {
        title: "Example 2: Irrigation Diversion Canal",
        subtitle: "An irrigation headgate diverts 1,500 L/s of river water. Calculate the equivalent flow in cfs.",
        steps: [
          "Identify the flow rate: 1,500 L/s.",
          "Multiply by 0.03531467: 1,500 × 0.03531467 = 52.972005 cfs.",
          "Result: 1,500 L/s equals approximately 52.97 cfs."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Second to Cubic Feet per Second Conversion Reference",
    headers: ["Liters / Second (L/s)", "Cubic Feet / Second (cfs)", "Typical Hydrological & River Scale"],
    rows: [
      { fromVal: "1 L/s", toVal: "0.035 cfs", extra: "Small spring discharge" },
      { fromVal: "5 L/s", toVal: "0.177 cfs", extra: "Residential storm drain outfall" },
      { fromVal: "10 L/s", toVal: "0.353 cfs", extra: "Agricultural drainage ditch" },
      { fromVal: "28.32 L/s", toVal: "1.000 cfs", extra: "Exactly 1.0 cfs benchmark flow" },
      { fromVal: "50 L/s", toVal: "1.766 cfs", extra: "Culvert discharge during rain event" },
      { fromVal: "100 L/s", toVal: "3.531 cfs", extra: "Small trout stream flow" },
      { fromVal: "250 L/s", toVal: "8.829 cfs", extra: "Creek feeder branch" },
      { fromVal: "500 L/s", toVal: "17.657 cfs", extra: "Whitewater stream section" },
      { fromVal: "1,000 L/s", toVal: "35.315 cfs", extra: "Small river baseline discharge" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "River Hydrology & USGS Gauge Analysis",
        text: "Hydrologists map international river basin studies by converting metric acoustic Doppler current profiler (ADCP) data into cfs."
      },
      {
        title: "Agricultural Water Rights",
        text: "In the Western US, agricultural water rights permits specify diversion allocations in cfs, requiring conversion from metric irrigation pump specs."
      },
      {
        title: "Stormwater Management & Culvert Design",
        text: "Civil engineers calculate peak runoff rates for culverts and retention ponds using regional cfs hydrology tables."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 28.32 instead of dividing when converting from L/s to cfs.",
      "Confusing cfs (Cubic Feet per Second) with CFM (Cubic Feet per Minute).",
      "Using truncated conversion factors (like 0.035) for large flood flow calculations, causing significant cumulative errors."
    ]
  },
  faqs: [
    {
      question: "How many cfs are in 1 liter per second?",
      answer: "There are approximately 0.0353147 cubic feet per second in 1 liter per second."
    },
    {
      question: "How many liters per second are in 1 cfs?",
      answer: "There are exactly 28.316846592 liters per second in 1 cubic foot per second (1 cfs)."
    },
    {
      question: "What is the formula to convert L/s to cfs?",
      answer: "The formula is: cfs = L/s / 28.3168466 (or cfs = L/s × 0.03531467)."
    },
    {
      question: "What is 100 L/s in cfs?",
      answer: "100 L/s divided by 28.3168466 equals approximately 3.53 cfs."
    },
    {
      question: "What is 1,000 L/s in cfs?",
      answer: "1,000 L/s divided by 28.3168466 equals approximately 35.31 cfs."
    },
    {
      question: "How do I convert cfs back to L/s?",
      answer: "Multiply the cfs value by 28.3168466."
    },
    {
      question: "Why does the US use cfs for river flow?",
      answer: "US government agencies (such as the USGS and Army Corps of Engineers) established river stream gauging networks based on imperial units prior to metric adoption."
    },
    {
      question: "Is cfs the same as ft³/s?",
      answer: "Yes, cfs is the standard acronym for cubic feet per second (ft³/s)."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Cubic feet/min", from: "liter-per-sec", to: "cubic-feet-per-min" },
    { label: "Liter/sec to Cubic meter/sec", from: "liter-per-sec", to: "cubic-meter-per-sec" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Liter/sec to Liter/min", from: "liter-per-sec", to: "liter-per-min" }
  ],
  references: [
    "USGS Water Data for the Nation: Streamflow Concepts and Measurement Units",
    "U.S. Bureau of Reclamation Water Measurement Manual",
    "ISO 748: Hydrometry — Measurement of Liquid Flow in Open Channels"
  ]
};
