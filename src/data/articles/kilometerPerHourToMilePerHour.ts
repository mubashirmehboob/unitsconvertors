import { CustomArticleData } from "./types";

export const kilometerPerHourToMilePerHour: CustomArticleData = {
  fromUnitId: "kilometer-per-hour",
  toUnitId: "mile-per-hour",
  seoTitle: "Kilometer per Hour to Mile per Hour (km/h to mph)",
  metaDescription: "Convert kilometers per hour to miles per hour (km/h to mph) easily. Learn the exact factor (× 0.621371), quick mental rules, road speed conversions, and reference tables.",
  h1: "Kilometer per Hour to Mile per Hour Converter",
  introduction: [
    "Converting kilometers per hour to miles per hour is one of the most practical speed conversions for international travelers, automotive enthusiasts, GPS navigation systems, and cross-border transport operators. While kilometers per hour (km/h) is the official road speed metric across continental Europe, Canada, and most of the world, miles per hour (mph) is the standard speed unit in the United States and the United Kingdom.",
    "Converting km/h to mph requires multiplying the speed in km/h by approximately 0.621371 (or dividing by 1.609344). This guide covers exact mathematical conversion methods, mental approximation shortcuts, vehicle speed limit comparisons, and reference conversion tables."
  ],
  quickAnswer: {
    text: "To convert kilometers per hour to miles per hour, multiply the speed value by 0.621371 (or divide by 1.609344). For example, 100 km/h equals approximately 62.14 mph, and 50 km/h equals roughly 31.07 mph.",
    formulaDisplay: "mph = km/h × 0.621371",
    subtext: "One kilometer per hour is equal to approximately 0.62137 miles per hour."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Hour (km/h)",
    text: "The kilometer per hour is the global metric unit for measuring road transport speed and railway velocity. It indicates how many kilometers an object covers in one hour of constant motion."
  },
  aboutTargetUnit: {
    title: "Understanding Miles per Hour (mph)",
    text: "The mile per hour is a customary speed unit representing international statute miles traveled in one hour. Standardized in the US and UK, mph is displayed on vehicle speedometers, highway limit posts, and radar speed guns."
  },
  relationship: "One international statute mile is defined as exactly 1.609344 kilometers. Taking the reciprocal (1 / 1.609344) gives approximately 0.621371192. Therefore, 1 km/h = 0.621371 mph.",
  relationshipTitle: "Kilometer per Hour vs Mile per Hour Scale Comparison",
  relationshipItems: [
    { label: "30 km/h", value: "18.64 mph (School zone / City center)" },
    { label: "50 km/h", value: "31.07 mph (Urban road limit)" },
    { label: "80 km/h", value: "49.71 mph (Rural highway)" },
    { label: "100 km/h", value: "62.14 mph (Standard highway)" },
    { label: "130 km/h", value: "80.78 mph (European motorway)" }
  ],
  formula: {
    text: "Multiply the velocity in kilometers per hour by 0.621371 to get the equivalent speed in miles per hour.",
    math: "mph = km/h × 0.621371",
    subtext: "To convert miles per hour back to kilometers per hour, multiply by 1.609344."
  },
  formulaTitle: "Kilometer per Hour to Mile per Hour Formula",
  practicalTip: {
    title: "Quick Mental Calculation Rule (60% Rule)",
    text: "To approximate km/h to mph quickly, take 60% of the km/h speed (e.g., 100 km/h × 0.60 = 60 mph; add 2% for 62.1 mph; exact is 62.14 mph)."
  },
  expertNote: {
    title: "Fibonacci Sequence Conversion Trick",
    text: "Because the ratio of consecutive Fibonacci numbers (5, 8, 13, 21, 34, 55, 89, 144) approaches the golden ratio (~1.618), adjacent numbers provide instant conversions: 50 km/h ≈ 31 mph; 80 km/h ≈ 50 mph; 130 km/h ≈ 80 mph!"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Driving a Rental Car in Europe (100 km/h)",
        subtitle: "Convert a French autoroute speed limit of 100 km/h into miles per hour for a US driver.",
        steps: [
          "Identify speed in km/h: 100 km/h.",
          "Apply formula: mph = 100 × 0.621371.",
          "Calculate: 100 × 0.621371 = 62.1371.",
          "Result: 100 km/h equals approximately 62.14 mph."
        ]
      },
      {
        title: "Example 2: German Autobahn Recommended Speed (130 km/h)",
        subtitle: "Convert 130 km/h into miles per hour.",
        steps: [
          "Identify speed: 130 km/h.",
          "Multiply by 0.621371: 130 × 0.621371 = 80.77823.",
          "Result: 130 km/h equals approximately 80.78 mph."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer per Hour to Mile per Hour Reference Table",
    headers: ["Kilometers per Hour (km/h)", "Miles per Hour (mph)", "International Driving Context"],
    rows: [
      { fromVal: "10 km/h", toVal: "6.21 mph", extra: "Parking lot / Pedestrian area" },
      { fromVal: "30 km/h", toVal: "18.64 mph", extra: "European 30 km/h zone (~20 mph)" },
      { fromVal: "50 km/h", toVal: "31.07 mph", extra: "Standard city limit (~30 mph)" },
      { fromVal: "70 km/h", toVal: "43.50 mph", extra: "Suburban arterial road (~45 mph)" },
      { fromVal: "80 km/h", toVal: "49.71 mph", extra: "Rural single-carriageway (~50 mph)" },
      { fromVal: "90 km/h", toVal: "55.92 mph", extra: "Standard truck limit (~55 mph)" },
      { fromVal: "100 km/h", toVal: "62.14 mph", extra: "Expressway speed limit (~60 mph)" },
      { fromVal: "110 km/h", toVal: "68.35 mph", extra: "Canadian dual carriageway (~70 mph)" },
      { fromVal: "120 km/h", toVal: "74.56 mph", extra: "Mexican / Spanish motorway (~75 mph)" },
      { fromVal: "130 km/h", toVal: "80.78 mph", extra: "German Autobahn Richtgeschwindigkeit (~80 mph)" }
    ]
  },
  applications: {
    title: "Real-World Applications of km/h to mph Conversions",
    items: [
      {
        title: "International Automotive Travel",
        text: "Drivers crossing borders between metric nations (Canada/Mexico) and non-metric nations (USA) convert road speed signage to avoid traffic citations."
      },
      {
        title: "Vehicle Dashboard Calibration",
        text: "Dual-scale speedometer displays and digital infotainment heads-up displays toggle between km/h and mph using internal conversion logic."
      },
      {
        title: "Global Motorsport Telemetry",
        text: "Formula 1 and World Rally Championship broadcasts convert telemetry between km/h and mph for international viewing audiences."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1.609 instead of 0.621 (confusing mph-to-km/h with km/h-to-mph).",
      "Assuming 100 km/h equals 100 mph (100 km/h is actually only ~62 mph).",
      "Confusing speedometer scale markings during international driving."
    ]
  },
  faqs: [
    {
      question: "How do you convert km/h to mph?",
      answer: "Multiply the speed in kilometers per hour by 0.621371 (or divide by 1.609344)."
    },
    {
      question: "What is 100 km/h in mph?",
      answer: "100 km/h is equal to approximately 62.14 mph."
    },
    {
      question: "What is 50 km/h in mph?",
      answer: "50 km/h is equal to approximately 31.07 mph."
    },
    {
      question: "What is 80 km/h in mph?",
      answer: "80 km/h is equal to approximately 49.71 mph."
    },
    {
      question: "What is 130 km/h in mph?",
      answer: "130 km/h is equal to approximately 80.78 mph."
    },
    {
      question: "Is 100 km/h fast in miles per hour?",
      answer: "100 km/h is 62.14 mph, which corresponds to standard highway cruising speed in North America and Europe."
    }
  ],
  relatedList: [
    { label: "Mile per Hour to Kilometer per Hour", from: "mile-per-hour", to: "kilometer-per-hour" },
    { label: "Kilometer per Hour to Meter per Second", from: "kilometer-per-hour", to: "meter-per-second" },
    { label: "Kilometer per Hour to Knot", from: "kilometer-per-hour", to: "knot" }
  ],
  references: [
    "NIST Handbook 44 - Appendix C: General Tables of Units of Measurement",
    "UK Department for Transport - Speed Limit Regulations"
  ]
};
