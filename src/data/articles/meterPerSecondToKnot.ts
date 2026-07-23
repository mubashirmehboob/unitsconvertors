import { CustomArticleData } from "./types";

export const meterPerSecondToKnot: CustomArticleData = {
  fromUnitId: "meter-per-second",
  toUnitId: "knot",
  seoTitle: "Meter per Second to Knot Converter (m/s to kn)",
  metaDescription: "Convert meters per second to knots (m/s to kn) easily. Learn the conversion formula (m/s × 1.943844), calculation steps, maritime & aviation velocity standards.",
  h1: "Meter per Second to Knot Converter",
  introduction: [
    "Converting meters per second to knots is an indispensable speed conversion across maritime navigation, aviation flight planning, meteorology, and marine engineering. While m/s serves as the official metric SI velocity unit, the knot (kn or kt) is the internationally recognized standard unit for nautical speed and air navigation.",
    "Converting meters per second to knots requires multiplying the speed in m/s by approximately 1.943844. This guide explains the maritime history of the knot, the mathematical conversion derivation, practical calculation examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert meters per second to knots, multiply the velocity in m/s by 1.943844. For example, 10 m/s equals approximately 19.44 knots, and 25 m/s equals roughly 48.60 knots.",
    formulaDisplay: "kn = m/s × 1.943844",
    subtext: "One knot is defined as one nautical mile per hour (1.852 km/h)."
  },
  aboutSourceUnit: {
    title: "Understanding Meters per Second (m/s)",
    text: "The meter per second is the coherent derived unit of velocity in the International System of Units (SI). Used extensively in physics research, fluid dynamics, atmospheric modeling, and missile trajectory calculations, m/s measures distance moved in meters over one second."
  },
  aboutTargetUnit: {
    title: "Understanding the Knot (kn / kt)",
    text: "A knot is a unit of speed defined as one nautical mile (1,852 meters) per hour. Historically measured by trailing a log line with knotted rope behind sailing vessels, the knot remains the global standard unit for maritime shipping speed, commercial flight velocity, and ocean current tracking."
  },
  relationship: "One nautical mile equals exactly 1,852 meters, and 1 hour equals 3,600 seconds. Dividing 3,600 by 1,852 yields the exact ratio 1.943844492. Therefore, 1 m/s = 1.943844 kn.",
  relationshipTitle: "Meter per Second vs Knot Scale Comparison",
  relationshipItems: [
    { label: "1 m/s", value: "1.94 kn (Gentle ocean swell)" },
    { label: "5 m/s", value: "9.72 kn (Sailing yacht speed)" },
    { label: "10 m/s", value: "19.44 kn (Cargo vessel speed)" },
    { label: "25 m/s", value: "48.60 kn (High-speed ferry)" },
    { label: "51.44 m/s", value: "100.00 kn (Aviation takeoff roll)" }
  ],
  formula: {
    text: "Multiply the velocity in meters per second by 1.943844 to find the speed in knots.",
    math: "kn = m/s × 1.943844",
    subtext: "To convert knots back to meters per second, multiply by 0.514444 (or divide by 1.943844)."
  },
  formulaTitle: "Meter per Second to Knot Formula",
  practicalTip: {
    title: "Quick Mental Math Rule",
    text: "To estimate m/s to knots in your head, double the m/s value and subtract 3% (e.g., 20 m/s × 2 = 40; 40 - 1.2 = 38.8 knots; exact is 38.88 knots)."
  },
  expertNote: {
    title: "Why Maritime & Aviation Use Knots",
    text: "One nautical mile corresponds to one minute of arc (1/60th of a degree) along Earth's latitude lines. Measuring speed in knots allows navigators to calculate chart positions directly from latitude markings without conversion."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Tropical Storm Wind Speed (33 m/s)",
        subtitle: "Convert a meteorological wind velocity of 33 m/s into knots.",
        steps: [
          "Identify wind velocity in m/s: 33 m/s.",
          "Apply formula: kn = m/s × 1.943844.",
          "Calculate: 33 × 1.943844 = 64.14685.",
          "Result: 33 m/s equals approximately 64.15 knots (Category 1 hurricane threshold)."
        ]
      },
      {
        title: "Example 2: Commercial Container Ship Speed (12.5 m/s)",
        subtitle: "Convert a vessel cruising speed of 12.5 m/s into knots.",
        steps: [
          "Identify speed: 12.5 m/s.",
          "Multiply by 1.943844: 12.5 × 1.943844 = 24.298.",
          "Result: 12.5 m/s equals approximately 24.3 knots."
        ]
      }
    ]
  },
  table: {
    title: "Meter per Second to Knot Conversion Table",
    headers: ["Meters per Second (m/s)", "Knots (kn)", "Aviation / Marine Context"],
    rows: [
      { fromVal: "0.514 m/s", toVal: "1 kn", extra: "1 knot benchmark" },
      { fromVal: "1 m/s", toVal: "1.94 kn", extra: "Light breeze" },
      { fromVal: "2.5 m/s", toVal: "4.86 kn", extra: "Harbor maneuvering speed" },
      { fromVal: "5 m/s", toVal: "9.72 kn", extra: "Coastal tugboat cruising speed" },
      { fromVal: "10 m/s", toVal: "19.44 kn", extra: "Container ship cruising speed" },
      { fromVal: "15 m/s", toVal: "29.16 kn", extra: "Cruise liner cruising speed" },
      { fromVal: "25 m/s", toVal: "48.60 kn", extra: "High-speed catamaran ferry" },
      { fromVal: "33 m/s", toVal: "64.15 kn", extra: "Hurricane force wind threshold" },
      { fromVal: "50 m/s", toVal: "97.19 kn", extra: "Light aircraft landing approach" },
      { fromVal: "100 m/s", toVal: "194.38 kn", extra: "Jet airliner climb airspeed" }
    ]
  },
  applications: {
    title: "Practical Applications of m/s to Knot Conversions",
    items: [
      {
        title: "Aviation Air Traffic Control & Avionics",
        text: "Radar telemetry captures aircraft ground tracks in m/s and converts vector data into knots for air traffic control displays."
      },
      {
        title: "Naval Operations & Oceanography",
        text: "Ocean current sensor arrays log underwater flow speeds in m/s before oceanic research reports map currents in knots."
      },
      {
        title: "Meteorology & Marine Weather Warnings",
        text: "Weather satellites record sea surface gale vectors in m/s and broadcast shipping forecasts in knots."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing knots (nautical miles per hour) with land miles per hour (mph).",
      "Writing 'knots per hour' (a knot is already a unit of speed, not acceleration).",
      "Dividing by 1.943844 instead of multiplying when converting m/s to knots."
    ]
  },
  faqs: [
    {
      question: "How do you convert m/s to knots?",
      answer: "Multiply the velocity in meters per second by 1.943844."
    },
    {
      question: "What is 10 m/s in knots?",
      answer: "10 m/s is equal to approximately 19.44 knots."
    },
    {
      question: "What is 20 m/s in knots?",
      answer: "20 m/s is equal to approximately 38.88 knots."
    },
    {
      question: "Why is speed at sea measured in knots?",
      answer: "One knot equals one nautical mile per hour, which directly corresponds to one minute of arc along Earth's geographic latitude lines."
    },
    {
      question: "What is 25 m/s in knots?",
      answer: "25 m/s is equal to approximately 48.60 knots."
    },
    {
      question: "Is 1 knot faster than 1 m/s?",
      answer: "No, 1 m/s equals roughly 1.94 knots, so 1 m/s is nearly twice as fast as 1 knot."
    }
  ],
  relatedList: [
    { label: "Meter per Second to Kilometer per Hour", from: "meter-per-second", to: "kilometer-per-hour" },
    { label: "Knot to Meter per Second", from: "knot", to: "meter-per-second" },
    { label: "Meter per Second to Mile per Hour", from: "meter-per-second", to: "mile-per-hour" }
  ],
  references: [
    "ICAO Annex 5 - Units of Measurement in Air and Ground Operations",
    "NOAA - National Ocean Service: What is a Knot?"
  ]
};
