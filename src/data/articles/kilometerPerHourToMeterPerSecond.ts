import { CustomArticleData } from "./types";

export const kilometerPerHourToMeterPerSecond: CustomArticleData = {
  fromUnitId: "kilometer-per-hour",
  toUnitId: "meter-per-second",
  seoTitle: "Kilometer per Hour to Meter per Second (km/h to m/s)",
  metaDescription: "Convert kilometers per hour to meters per second (km/h to m/s) accurately. Learn the exact division factor (/ 3.6), physics formula, calculation steps, and speed benchmarks.",
  h1: "Kilometer per Hour to Meter per Second Converter",
  introduction: [
    "Converting kilometers per hour to meters per second is one of the most common speed conversions performed in physics coursework, automotive safety engineering, athletics, and aerodynamics. While kilometers per hour (km/h) is the everyday measurement on vehicle speedometers and traffic signs, the meter per second (m/s) is the official SI unit for velocity in scientific calculations.",
    "Converting kilometers per hour to meters per second is simple and exact: divide the speed in km/h by 3.6. This guide details the mathematical derivation of the 3.6 conversion factor, worked step-by-step examples, practical application scenarios, and comprehensive conversion tables."
  ],
  quickAnswer: {
    text: "To convert kilometers per hour to meters per second, divide the speed value by 3.6. For example, 36 km/h equals exactly 10 m/s, and 100 km/h equals approximately 27.78 m/s.",
    formulaDisplay: "m/s = km/h / 3.6",
    subtext: "One kilometer per hour is equal to approximately 0.277778 meters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Hour (km/h)",
    text: "The kilometer per hour is a metric unit of speed quantifying the distance in kilometers covered in one hour. Accepted for use alongside SI units, km/h is the primary legal speed metric for road traffic and railways across most nations worldwide."
  },
  aboutTargetUnit: {
    title: "Understanding Meters per Second (m/s)",
    text: "The meter per second is the coherent SI unit for speed and velocity. Essential for physics equations (such as kinetic energy E_k = ½ mv² and momentum p = mv), m/s measures displacement in meters per single second."
  },
  relationship: "Because 1 kilometer equals 1,000 meters and 1 hour equals 3,600 seconds, 1 km/h = 1,000 m / 3,600 s = 1 / 3.6 m/s. Therefore, dividing any km/h value by 3.6 yields the exact equivalent speed in m/s.",
  relationshipTitle: "Kilometer per Hour vs Meter per Second Scale Comparison",
  relationshipItems: [
    { label: "3.6 km/h", value: "1.0 m/s (Brisk walk)" },
    { label: "18.0 km/h", value: "5.0 m/s (Cycling pace)" },
    { label: "36.0 km/h", value: "10.0 m/s (Track sprint)" },
    { label: "50.0 km/h", value: "13.89 m/s (Urban road limit)" },
    { label: "100.0 km/h", value: "27.78 m/s (Highway speed limit)" }
  ],
  formula: {
    text: "Divide the velocity in kilometers per hour by 3.6 to obtain the speed in meters per second.",
    math: "m/s = km/h / 3.6",
    subtext: "To convert meters per second back to kilometers per hour, multiply by 3.6."
  },
  formulaTitle: "Kilometer per Hour to Meter per Second Formula",
  practicalTip: {
    title: "Quick Mental Calculation Rule",
    text: "To estimate km/h to m/s in your head, divide the km/h value by 4 and add 10% back (e.g., 60 km/h / 4 = 15; 15 + 1.5 = 16.5 m/s; exact value is 16.67 m/s)."
  },
  expertNote: {
    title: "Physics Problem Solving Tip",
    text: "Always convert vehicle speeds from km/h to m/s before plugging values into physics kinematic formulas (v = u + at, s = ut + ½at², E_k = ½mv²), as SI formulas require m/s."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Urban Speed Limit (50 km/h)",
        subtitle: "Convert a city speed limit of 50 km/h into meters per second for braking distance calculations.",
        steps: [
          "Identify velocity in km/h: 50 km/h.",
          "Apply formula: m/s = 50 / 3.6.",
          "Calculate: 50 / 3.6 = 13.88889.",
          "Result: 50 km/h equals approximately 13.89 m/s."
        ]
      },
      {
        title: "Example 2: Highway Cruising Speed (120 km/h)",
        subtitle: "Convert a motorway cruising speed of 120 km/h into meters per second.",
        steps: [
          "Identify velocity: 120 km/h.",
          "Divide by 3.6: 120 / 3.6 = 33.33333.",
          "Result: 120 km/h equals approximately 33.33 m/s."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer per Hour to Meter per Second Conversion Table",
    headers: ["Kilometers per Hour (km/h)", "Meters per Second (m/s)", "Everyday Context"],
    rows: [
      { fromVal: "1 km/h", toVal: "0.28 m/s", extra: "Very slow crawl" },
      { fromVal: "3.6 km/h", toVal: "1.00 m/s", extra: "Walking speed" },
      { fromVal: "10 km/h", toVal: "2.78 m/s", extra: "Jogging pace" },
      { fromVal: "20 km/h", toVal: "5.56 m/s", extra: "Bicycle speed" },
      { fromVal: "36 km/h", toVal: "10.00 m/s", extra: "Professional sprinter speed" },
      { fromVal: "50 km/h", toVal: "13.89 m/s", extra: "City driving speed limit" },
      { fromVal: "80 km/h", toVal: "22.22 m/s", extra: "Country road speed limit" },
      { fromVal: "100 km/h", toVal: "27.78 m/s", extra: "Standard highway speed" },
      { fromVal: "130 km/h", toVal: "36.11 m/s", extra: "European Autobahn recommended speed" },
      { fromVal: "300 km/h", toVal: "83.33 m/s", extra: "High-speed train / Supercar" }
    ]
  },
  applications: {
    title: "Practical Applications of km/h to m/s Conversions",
    items: [
      {
        title: "Automotive Crash Testing & Collision Analysis",
        text: "Crash investigators convert impact velocities from km/h to m/s to calculate kinetic energy dissipation and occupant g-force acceleration."
      },
      {
        title: "Physics Education & Mechanics Problems",
        text: "Students routinely convert textbook vehicle speeds (km/h) into SI base units (m/s) before solving Newton's laws of motion."
      },
      {
        title: "Traffic Engineering & Reaction Distance",
        text: "Road safety analysts calculate how many meters a vehicle travels during a driver's 1.5-second perception-reaction time by converting km/h to m/s."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 3.6 instead of dividing when converting km/h to m/s.",
      "Forgetting that 1 m/s is much faster than 1 km/h (1 m/s = 3.6 km/h).",
      "Plugging raw km/h values directly into SI kinetic energy or momentum equations."
    ]
  },
  faqs: [
    {
      question: "How do you convert km/h to m/s?",
      answer: "Divide the speed in kilometers per hour by 3.6."
    },
    {
      question: "What is 100 km/h in m/s?",
      answer: "100 km/h is equal to approximately 27.78 m/s (100 / 3.6)."
    },
    {
      question: "What is 50 km/h in m/s?",
      answer: "50 km/h is equal to approximately 13.89 m/s."
    },
    {
      question: "Why do we divide by 3.6 to get m/s?",
      answer: "Because 1 km = 1,000 m and 1 hour = 3,600 s. 1,000 / 3,600 simplifies directly to 1 / 3.6."
    },
    {
      question: "What is 60 km/h in m/s?",
      answer: "60 km/h is equal to approximately 16.67 m/s."
    },
    {
      question: "What is 90 km/h in m/s?",
      answer: "90 km/h is equal to exactly 25 m/s."
    }
  ],
  relatedList: [
    { label: "Meter per Second to Kilometer per Hour", from: "meter-per-second", to: "kilometer-per-hour" },
    { label: "Kilometer per Hour to Mile per Hour", from: "kilometer-per-hour", to: "mile-per-hour" },
    { label: "Kilometer per Hour to Knot", from: "kilometer-per-hour", to: "knot" }
  ],
  references: [
    "BIPM - SI Brochure: Units of Measurement",
    "ISO 80000-3: Quantities and Units - Space and Time"
  ]
};
