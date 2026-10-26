import { CustomArticleData } from "./types";

export const footPerSecondToMilePerHour: CustomArticleData = {
  fromUnitId: "foot-per-second",
  toUnitId: "mile-per-hour",
  seoTitle: "Foot per Second to Mile per Hour (ft/s to mph)",
  metaDescription: "Convert feet per second to miles per hour (ft/s to mph) accurately. Learn the exact 15/22 ratio (0.681818), 88 ft/s to 60 mph rule, formulas, and tables.",
  h1: "Foot per Second to Mile per Hour Converter",
  introduction: [
    "Converting feet per second to miles per hour is one of the most frequently used conversions in American highway engineering, traffic accident reconstruction, automotive performance testing, and athletic sprinting. Both units belong to the US customary and imperial measurement systems, sharing identical underlying definitions of the foot, mile, and second.",
    "Because there are 5,280 feet in a statute mile and 3,600 seconds in an hour, the relationship simplifies to an exact irreducible fraction: 1 ft/s = 15/22 mph (approximately 0.681818 mph). The most famous landmark relationship in traffic engineering states that <strong>88 feet per second equals exactly 60 miles per hour</strong>. This guide explains the derivation, accident reconstruction calculations, ballistics examples, and conversion tables."
  ],
  quickAnswer: {
    text: "One foot per second (1 ft/s) is equal to exactly 15/22 of a mile per hour (approximately 0.681818 mph). To convert feet per second to miles per hour, multiply the ft/s value by 15/22 (or divide by 1.46667).",
    formulaDisplay: "mph = ft/s × (15 / 22) ≈ ft/s × 0.681818",
    subtext: "Exactly derived from 3,600 seconds per hour divided by 5,280 feet per statute mile."
  },
  aboutSourceUnit: {
    title: "Understanding Feet per Second (ft/s)",
    text: "The foot per second (ft/s or fps) measures the linear displacement in feet achieved over one second. Used heavily in sports science, ballistics, forensic accident reconstruction, and air conditioning ventilation, it quantifies short-interval velocities."
  },
  aboutTargetUnit: {
    title: "Understanding Miles per Hour (mph)",
    text: "The mile per hour is the standard legal velocity metric for road traffic speed limits, railway transit, and automotive speedometers in the United States and the United Kingdom. One mph equals 1.46667 feet per second."
  },
  relationship: "Because 1 statute mile equals 5,280 feet and 1 hour equals 3,600 seconds, 1 ft/s = 3,600 / 5,280 mph = 15/22 mph. Conversely, 1 mph = 5,280 / 3,600 ft/s = 22/15 ft/s = 1.46667 ft/s. Therefore, 88 ft/s equals exactly 60 mph.",
  relationshipTitle: "Exact Fractional Ratio",
  relationshipItems: [
    { label: "1.46667 ft/s", value: "1.00000 mph (Exact 22/15 ratio)" },
    { label: "14.6667 ft/s", value: "10.0000 mph (Bicycle speed)" },
    { label: "44.0 ft/s", value: "30.0 mph (City residential speed limit)" },
    { label: "88.0 ft/s", value: "60.0 mph (Highway speed limit benchmark)" },
    { label: "102.667 ft/s", value: "70.0 mph (Interstate highway cruising speed)" }
  ],
  formula: {
    text: "Multiply the velocity in feet per second by 15 and divide by 22 (or divide by 1.466667) to calculate the speed in miles per hour.",
    math: "mph = (ft/s × 15) / 22",
    subtext: "To convert miles per hour back into feet per second, multiply by 22 and divide by 15 (or multiply by 1.466667)."
  },
  formulaTitle: "Foot per Second to Mile per Hour Formula",
  practicalTip: {
    title: "The 88 ft/s = 60 mph Memory Anchor",
    text: "Remember that 60 mph equals exactly 88 ft/s. If you know a car is traveling at 60 mph, it is covering 88 feet every single second—roughly the length of two full bus lengths per second."
  },
  expertNote: {
    title: "Traffic Accident Skid Mark Analysis",
    text: "Crash reconstructionists convert calculated skid velocities from ft/s into mph using the formula v = √(30·d·f), where d is skid distance in feet, f is drag factor, and v outputs directly in mph based on the 1.4667 conversion."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Highway Vehicle at 88 ft/s",
        subtitle: "Convert 88 ft/s into miles per hour.",
        steps: [
          "Identify velocity: 88 ft/s.",
          "Apply formula: mph = (88 × 15) / 22.",
          "Divide 88 by 22: 88 / 22 = 4.",
          "Multiply by 15: 4 × 15 = 60 mph.",
          "Result: 88 ft/s equals exactly 60 miles per hour."
        ]
      },
      {
        title: "Example 2: Baseball Pitch (146.67 ft/s)",
        subtitle: "Convert a 146.67 ft/s pitch into miles per hour.",
        steps: [
          "Identify velocity: 146.6667 ft/s.",
          "Apply formula: mph = 146.6667 / 1.466667.",
          "Calculate: 146.6667 / 1.466667 = 100.0 mph.",
          "Result: 146.67 ft/s equals a 100 mph major league fastball."
        ]
      },
      {
        title: "Example 3: Sprinter Speed (36.67 ft/s)",
        subtitle: "Convert an Olympic sprint velocity of 36.67 ft/s into miles per hour.",
        steps: [
          "Identify velocity: 36.6667 ft/s.",
          "Multiply by 15/22: (36.6667 × 15) / 22 = 25.0 mph.",
          "Result: 36.67 ft/s equals exactly 25.0 miles per hour."
        ]
      }
    ]
  },
  table: {
    title: "Foot per Second to Mile per Hour Conversion Table",
    headers: ["Feet per Second (ft/s)", "Miles per Hour (mph)", "Everyday Traffic & Sports Context"],
    rows: [
      { fromVal: "1.47 ft/s", toVal: "1.00 mph", extra: "Slow crawl" },
      { fromVal: "4.40 ft/s", toVal: "3.00 mph", extra: "Standard pedestrian walking speed" },
      { fromVal: "7.33 ft/s", toVal: "5.00 mph", extra: "Brisk jog" },
      { fromVal: "14.67 ft/s", toVal: "10.00 mph", extra: "Casual bicycle riding speed" },
      { fromVal: "22.00 ft/s", toVal: "15.00 mph", extra: "Parking lot / school zone speed limit" },
      { fromVal: "29.33 ft/s", toVal: "20.00 mph", extra: "Neighborhood residential speed limit" },
      { fromVal: "44.00 ft/s", toVal: "30.00 mph", extra: "Standard urban commercial street speed" },
      { fromVal: "66.00 ft/s", toVal: "45.00 mph", extra: "Suburban multi-lane arterial speed" },
      { fromVal: "88.00 ft/s", toVal: "60.00 mph", extra: "Highway speed limit benchmark" },
      { fromVal: "95.33 ft/s", toVal: "65.00 mph", extra: "Rural highway speed" },
      { fromVal: "102.67 ft/s", toVal: "70.00 mph", extra: "Interstate expressway speed limit" },
      { fromVal: "146.67 ft/s", toVal: "100.00 mph", extra: "High-speed pursuit / 100 mph baseball fastball" }
    ]
  },
  applications: {
    title: "Practical Applications of ft/s to mph Conversions",
    items: [
      {
        title: "Traffic Engineering & Perception-Reaction Time",
        text: "Traffic safety designers calculate driver stopping sight distance by multiplying 1.4667 ft/s per mph by a standard 1.5 to 2.5-second driver reaction time."
      },
      {
        title: "Automotive Drag Racing & Performance",
        text: "Drag strips measure vehicle trap speed across the final 66 feet in feet per second before displaying official terminal speeds in miles per hour."
      },
      {
        title: "Athletic Performance Tracking",
        text: "Sports biomechanists convert radar-gun and motion-capture sprint speeds (ft/s) into mph for coaching analytics and broadcast television graphics."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1.4667 instead of dividing when converting ft/s to mph (multiplying will incorrectly inflate the speed).",
      "Forgetting that 1 ft/s is slower than 1 mph (1 ft/s is about 0.68 mph, while 1 mph is about 1.47 ft/s).",
      "Confusing statute miles (5,280 ft) with nautical miles (6,076.12 ft), which causes a ~15% calculation discrepancy."
    ]
  },
  faqs: [
    {
      question: "How do you convert feet per second to miles per hour?",
      answer: "Multiply the feet per second value by 15 and divide by 22 (or divide by 1.466667). For example, 88 ft/s × 15 / 22 = 60 mph."
    },
    {
      question: "How many feet per second is 60 mph?",
      answer: "60 mph equals exactly 88 feet per second (60 × 22 / 15 = 88 ft/s)."
    },
    {
      question: "Is 1 ft/s faster or slower than 1 mph?",
      answer: "1 ft/s is slower than 1 mph. One ft/s equals approximately 0.6818 mph, whereas 1 mph equals 1.4667 ft/s."
    },
    {
      question: "What is 100 ft/s in mph?",
      answer: "100 ft/s is equal to approximately 68.18 mph (100 × 15 / 22)."
    },
    {
      question: "Why is 88 ft/s equal to 60 mph?",
      answer: "Because 1 mile is 5,280 feet and 1 hour is 3,600 seconds. 60 miles = 60 × 5,280 = 316,800 feet. Dividing by 3,600 seconds yields exactly 88 feet per second."
    },
    {
      question: "How do you convert mph back to ft/s?",
      answer: "Multiply the speed in mph by 22 and divide by 15 (or multiply by 1.466667). For example, 30 mph × 22 / 15 = 44 ft/s."
    },
    {
      question: "What is a 100 mph baseball pitch in feet per second?",
      answer: "A 100 mph fastball travels at exactly 146.67 feet per second. Covering the 60.5 feet from the pitcher's mound to home plate takes approximately 0.41 seconds."
    },
    {
      question: "How many feet does a car travel in one second at 70 mph?",
      answer: "At 70 mph, a car travels 70 × 1.4667 = 102.67 feet per second (more than 34 yards every second)."
    }
  ],
  relatedList: [
    { label: "Mile per Hour to Foot per Second", from: "mile-per-hour", to: "foot-per-second" },
    { label: "Foot per Second to Kilometer per Hour", from: "foot-per-second", to: "kilometer-per-hour" },
    { label: "Foot per Second to Meter per Second", from: "foot-per-second", to: "meter-per-second" }
  ],
  references: [
    "NIST Handbook 44: General Tables of Units of Measurement",
    "Federal Highway Administration (FHWA) - Manual on Uniform Traffic Control Devices",
    "SAE International - Accident Reconstruction Ground Speed Standards"
  ]
};
