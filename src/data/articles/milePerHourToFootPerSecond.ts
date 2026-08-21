import { CustomArticleData } from "./types";

export const milePerHourToFootPerSecond: CustomArticleData = {
  fromUnitId: "mile-per-hour",
  toUnitId: "foot-per-second",
  seoTitle: "Mile per Hour to Foot per Second Converter (mph to ft/s)",
  metaDescription: "Convert miles per hour to feet per second (mph to ft/s) with exact precision. Clean 22/15 ratio formula, stopping distance physics, and worked examples.",
  h1: "Mile per Hour to Foot per Second Converter",
  introduction: [
    "Converting miles per hour to feet per second translates automotive and highway velocities into the foundational foot-pound-second (FPS) unit essential for traffic collision reconstruction, ballistic trajectories, structural wind pressure calculations, and sports biomechanics. While vehicle speedometers and public road signage display speed in miles per hour, kinetic kinematic equations and stopping distance physics require velocity in feet per second.",
    "Because one mile contains exactly 5,280 feet and one hour contains 3,600 seconds, the ratio simplifies cleanly to $\\frac{5,280}{3,600} = \\frac{22}{15}$ (or approximately 1.46667). Therefore, one mile per hour equals exactly $1.46\\overline{6}$ feet per second, meaning a car traveling at 60 mph covers exactly 88 feet every single second. To convert miles per hour to feet per second, multiply the speed by $\\frac{22}{15}$ (or 1.466667). This guide covers the exact mathematical derivation, practical conversion shortcuts, traffic engineering applications, and comprehensive velocity lookup tables."
  ],
  quickAnswer: {
    text: "To convert miles per hour to feet per second, multiply the speed in mph by 22/15 (approximately 1.466667). For example, 60 mph equals exactly 88 ft/s.",
    formulaDisplay: "ft/s = mph × (22 / 15)",
    subtext: "Exact ratio: 1 mph = 5,280 ft / 3,600 s = 22/15 ft/s ≈ 1.466667 ft/s.\n1 ft/s = 15/22 mph ≈ 0.681818 mph."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Hour (mph)",
    text: "The mile per hour (mph) is an imperial and US customary unit of speed indicating the distance in statute miles (5,280 feet or 1,609.344 meters) traversed in one hour. It is standard for US and UK automotive road regulations and weather reporting."
  },
  aboutTargetUnit: {
    title: "Understanding Feet per Second (ft/s)",
    text: "The foot per second (ft/s or fps) is an imperial unit of velocity expressing distance in feet covered in one second. It is standard in American ballistics, hydraulic flow pipe calculations, and vehicle accident crash analysis."
  },
  relationship: "One mile per hour equals exactly 22/15 feet per second (1.466667 ft/s), and one foot per second equals exactly 15/22 miles per hour (0.681818 mph). Multiplying any mph speed by 22/15 yields its exact equivalent in feet per second.",
  relationshipTitle: "Mile per Hour to Foot per Second Exact Milestones",
  relationshipItems: [
    { label: "15 mph (Exact)", value: "22.0 ft/s (Exact)" },
    { label: "30 mph (Exact)", value: "44.0 ft/s (Exact)" },
    { label: "45 mph (Exact)", value: "66.0 ft/s (Exact)" },
    { label: "60 mph (Exact)", value: "88.0 ft/s (Exact)" },
    { label: "75 mph (Exact)", value: "110.0 ft/s (Exact)" }
  ],
  formula: {
    text: "Multiply the velocity in miles per hour by the exact fraction 22/15 (or 1.466667) to calculate feet per second.",
    math: "\\text{ft/s} = \\text{mph} \\times \\frac{22}{15} \\approx \\text{mph} \\times 1.466667",
    subtext: "To convert feet per second back to miles per hour, multiply the ft/s value by 15/22 (or divide by 1.466667)."
  },
  formulaTitle: "Mile per Hour to Foot per Second Calculation Formula",
  practicalTip: {
    title: "Mental Math 1.5× Approximation Shortcut",
    text: "For a rapid mental estimate: multiply mph by 1.5 and subtract a tiny fraction (e.g., 60 mph × 1.5 = 90, subtract 2 = 88 ft/s exactly; 40 mph × 1.5 = 60, minus ~1.3 = 58.67 ft/s)."
  },
  expertNote: {
    title: "Driver Reaction Time & Perception-Response Distance",
    text: "Driver safety analysts use ft/s to calculate perception-reaction distance. At a standard 1.5-second human reaction time, a vehicle traveling at 60 mph (88 ft/s) travels 132 feet before the driver's foot even touches the brake pedal."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Highway Vehicle Emergency Stopping (65 mph)",
        subtitle: "Convert a highway speed of 65 mph into feet per second to evaluate total braking distance.",
        steps: [
          "State starting velocity: 65 mph.",
          "Apply exact ratio: ft/s = 65 × (22 / 15).",
          "Calculate: (65 × 22) / 15 = 1,430 / 15 = 95.3333.",
          "Result: 65 mph equals exactly 95.33 ft/s ($95\\frac{1}{3}$ ft/s)."
        ]
      },
      {
        title: "Example 2: Baseball Pitch Velocity (90 mph)",
        subtitle: "Convert a 90 mph baseball fastball into ft/s to determine how fast it reaches the catcher 60.5 feet away.",
        steps: [
          "Identify pitch speed: 90 mph.",
          "Apply formula: ft/s = 90 × (22 / 15).",
          "Calculate: 90 / 15 = 6, and 6 × 22 = 132.0.",
          "Result: 90 mph equals exactly 132.0 ft/s (traveling 60.5 feet in just 0.458 seconds)."
        ]
      }
    ]
  },
  table: {
    title: "Mile per Hour to Foot per Second Reference Table",
    headers: ["Speed (mph)", "Speed (ft/s)", "Speed (m/s)", "Road Safety & Physical Context"],
    rows: [
      { fromVal: "15 mph", toVal: "22.0000 ft/s", extra: "6.7056 m/s", extra2: "School zone / parking garage" },
      { fromVal: "25 mph", toVal: "36.6667 ft/s", extra: "11.1760 m/s", extra2: "Residential street speed limit" },
      { fromVal: "30 mph", toVal: "44.0000 ft/s", extra: "13.4112 m/s", extra2: "Standard urban speed limit" },
      { fromVal: "45 mph", toVal: "66.0000 ft/s", extra: "20.1168 m/s", extra2: "Suburban arterial road" },
      { fromVal: "55 mph", toVal: "80.6667 ft/s", extra: "24.5872 m/s", extra2: "Two-lane rural highway" },
      { fromVal: "60 mph", toVal: "88.0000 ft/s", extra: "26.8224 m/s", extra2: "Standard highway benchmark" },
      { fromVal: "65 mph", toVal: "95.3333 ft/s", extra: "29.0576 m/s", extra2: "Interstate highway limit" },
      { fromVal: "70 mph", toVal: "102.6667 ft/s", extra: "31.2928 m/s", extra2: "Freeway upper speed limit" },
      { fromVal: "75 mph", toVal: "110.0000 ft/s", extra: "33.5280 m/s", extra2: "Rural western interstate" },
      { fromVal: "100 mph", toVal: "146.6667 ft/s", extra: "44.7040 m/s", extra2: "High-speed track benchmark" }
    ]
  },
  applications: {
    title: "Key Industry & Engineering Applications",
    items: [
      {
        title: "Traffic Engineering & Accident Reconstruction",
        text: "Forensic crash reconstructionists calculate skid marks, perception-reaction delays, and vehicle collision impulse dynamics using ft/s velocities."
      },
      {
        title: "Civil Ballistics & Firearm Dynamics",
        text: "Ammunition manufacturers and ballistic chronographs measure projectile muzzle velocity in ft/s, which is converted to mph for commercial sports marketing."
      },
      {
        title: "Sports Biomechanics & Track Athletics",
        text: "Biomechanics researchers analyze sprinters, baseball pitches, and tennis serves in ft/s to calculate limb angular velocity and impact acceleration."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1.46 instead of 22/15, which introduces a 0.45% error in vehicle kinetic energy equations.",
      "Dividing by 1.466667 when converting from mph to ft/s instead of multiplying.",
      "Confusing feet per second (ft/s) with meters per second (m/s), which differs by a factor of 3.28084."
    ]
  },
  faqs: [
    {
      question: "How do you convert mph to ft/s?",
      answer: "Multiply the speed in miles per hour by the exact fraction 22/15 (or approximately 1.466667)."
    },
    {
      question: "What is 60 mph in feet per second?",
      answer: "60 mph equals exactly 88 feet per second (60 × 22/15 = 88 ft/s)."
    },
    {
      question: "Why does 60 mph equal exactly 88 ft/s?",
      answer: "Because 1 mile = 5,280 ft and 1 hour = 3,600 s. Thus, (60 × 5,280) / 3,600 = 316,800 / 3,600 = 88 ft/s exactly."
    },
    {
      question: "What is 30 mph in ft/s?",
      answer: "30 mph equals exactly 44 feet per second."
    },
    {
      question: "What is 70 mph in ft/s?",
      answer: "70 mph equals approximately 102.67 feet per second (exactly 102 2/3 ft/s)."
    },
    {
      question: "How do you convert feet per second back to mph?",
      answer: "Multiply the speed in ft/s by 15/22 (or divide by 1.466667). For example, 88 ft/s × 15/22 = 60 mph."
    },
    {
      question: "What is 100 mph in ft/s?",
      answer: "100 mph equals approximately 146.67 feet per second (exactly 146 2/3 ft/s)."
    },
    {
      question: "How far does a car travel at 45 mph in one second?",
      answer: "At 45 mph, a car travels exactly 66 feet in one second (45 × 22/15 = 66 ft/s)."
    }
  ],
  relatedList: [
    { label: "Foot per Second to Mile per Hour", from: "foot-per-second", to: "mile-per-hour" },
    { label: "Mile per Hour to Meter per Second", from: "mile-per-hour", to: "meter-per-second" },
    { label: "Kilometer per Hour to Foot per Second", from: "kilometer-per-hour", to: "foot-per-second" }
  ],
  references: [
    "NIST Handbook 44: Units of Measurement Tables",
    "AASHTO: A Policy on Geometric Design of Highways and Streets (Perception-Reaction Distances)"
  ]
};
