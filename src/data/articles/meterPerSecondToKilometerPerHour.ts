import { CustomArticleData } from "./types";

export const meterPerSecondToKilometerPerHour: CustomArticleData = {
  fromUnitId: "meter-per-second",
  toUnitId: "kilometer-per-hour",
  seoTitle: "Meter per Second to Kilometer per Hour (m/s to km/h)",
  metaDescription: "Convert meters per second to kilometers per hour (m/s to km/h) instantly. Learn the exact multiplication factor (× 3.6), calculation steps, and physics velocity benchmarks.",
  h1: "Meter per Second to Kilometer per Hour Converter",
  introduction: [
    "Converting meters per second to kilometers per hour is one of the most fundamental speed conversions in physics, automotive engineering, meteorology, and athletic performance tracking. While meters per second (m/s) is the official SI unit for velocity, kilometers per hour (km/h) is the standard speed metric used on road transport signage and vehicle speedometers worldwide.",
    "Converting meters per second to kilometers per hour is remarkably straightforward: simply multiply the velocity in meters per second by 3.6. This guide details the mathematical derivation behind the 3.6 conversion factor, worked calculation examples, athletic and vehicular speed comparisons, and handy lookup tables."
  ],
  quickAnswer: {
    text: "To convert meters per second to kilometers per hour, multiply the speed value by 3.6. For example, 10 m/s equals 36 km/h, and 25 m/s equals 90 km/h.",
    formulaDisplay: "km/h = m/s × 3.6",
    subtext: "One meter per second equals exactly 3.6 kilometers per hour."
  },
  aboutSourceUnit: {
    title: "Understanding Meters per Second (m/s)",
    text: "The meter per second is the coherent derived unit of speed and velocity in the International System of Units (SI). Defined as traveling a distance of one meter over a time interval of one second, m/s is the standard measurement unit in scientific research, aerodynamics, orbital mechanics, and wind speed recording."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Hour (km/h)",
    text: "The kilometer per hour is a metric unit of speed representing the distance in kilometers covered in one hour. Recognized globally alongside SI units, km/h is the primary legal measurement for highway speed limits, rail transport schedules, and everyday automotive navigation in metric countries."
  },
  relationship: "The exact relationship between m/s and km/h comes from unit scaling: 1 kilometer equals 1,000 meters, and 1 hour equals 3,600 seconds. Dividing 3,600 seconds by 1,000 meters yields exactly 3.6. Thus, 1 m/s = 3.6 km/h.",
  relationshipTitle: "Meter per Second vs Kilometer per Hour Scale Comparison",
  relationshipItems: [
    { label: "1 m/s", value: "3.6 km/h (Brisk walking pace)" },
    { label: "5 m/s", value: "18.0 km/h (Cycling velocity)" },
    { label: "10 m/s", value: "36.0 km/h (Elite sprinter speed)" },
    { label: "27.78 m/s", value: "100.0 km/h (Highway speed limit)" },
    { label: "50 m/s", value: "180.0 km/h (High-speed rail velocity)" }
  ],
  formula: {
    text: "Multiply the velocity in meters per second by 3.6 to obtain the speed in kilometers per hour.",
    math: "km/h = m/s × 3.6",
    subtext: "To convert kilometers per hour back to meters per second, divide by 3.6."
  },
  formulaTitle: "Meter per Second to Kilometer per Hour Formula",
  practicalTip: {
    title: "Quick Mental Math Rule",
    text: "To estimate m/s to km/h in your head, multiply the m/s value by 4 and subtract 10% of that result (e.g., 20 m/s × 4 = 80; 80 - 8 = 72 km/h)."
  },
  expertNote: {
    title: "Derivation of the 3.6 Conversion Factor",
    text: "Speed = Distance / Time. Replacing units: (1 m / 1 s) = (0.001 km / [1/3600 h]) = 0.001 × 3600 km/h = 3.6 km/h. The factor 3.6 is mathematically exact."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Usain Bolt's Top Sprint Speed (12.42 m/s)",
        subtitle: "Convert Usain Bolt's peak sprint velocity of 12.42 m/s into kilometers per hour.",
        steps: [
          "Identify velocity in m/s: 12.42 m/s.",
          "Apply formula: km/h = m/s × 3.6.",
          "Calculate: 12.42 × 3.6 = 44.712.",
          "Result: 12.42 m/s equals approximately 44.71 km/h."
        ]
      },
      {
        title: "Example 2: Severe Hurricane Wind Speed (40 m/s)",
        subtitle: "Convert a meteorological wind measurement of 40 m/s into kilometers per hour.",
        steps: [
          "Identify wind speed: 40 m/s.",
          "Multiply by 3.6: 40 × 3.6 = 144.",
          "Result: 40 m/s equals 144 km/h."
        ]
      }
    ]
  },
  table: {
    title: "Meter per Second to Kilometer per Hour Conversion Table",
    headers: ["Meters per Second (m/s)", "Kilometers per Hour (km/h)", "Real-World Context"],
    rows: [
      { fromVal: "1 m/s", toVal: "3.6 km/h", extra: "Brisk walking pace" },
      { fromVal: "2.5 m/s", toVal: "9 km/h", extra: "Light jogging pace" },
      { fromVal: "5 m/s", toVal: "18 km/h", extra: "Moderate bicycle speed" },
      { fromVal: "10 m/s", toVal: "36 km/h", extra: "100-meter track sprint" },
      { fromVal: "13.89 m/s", toVal: "50 km/h", extra: "Urban city driving speed limit" },
      { fromVal: "20 m/s", toVal: "72 km/h", extra: "Gale-force wind threshold" },
      { fromVal: "27.78 m/s", toVal: "100 km/h", extra: "Expressway speed limit" },
      { fromVal: "33.33 m/s", toVal: "120 km/h", extra: "Fast highway traffic" },
      { fromVal: "50 m/s", toVal: "180 km/h", extra: "Category 5 hurricane wind speed" },
      { fromVal: "100 m/s", toVal: "360 km/h", extra: "Commercial bullet train cruising speed" }
    ]
  },
  applications: {
    title: "Practical Applications of m/s to km/h Conversions",
    items: [
      {
        title: "Automotive Safety & Braking Distance",
        text: "Engineers calculate vehicle kinetic energy in m/s before translating stopping distance metrics into driver-friendly km/h values."
      },
      {
        title: "Meteorology & Weather Forecasting",
        text: "Anemometers record atmospheric wind speeds in m/s, which meteorologists convert to km/h for public severe storm advisories."
      },
      {
        title: "Sports Biomechanics & Athletics",
        text: "GPS performance trackers log athlete movement in m/s and convert velocity data into km/h for coaching analysis."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 3.6 instead of multiplying when converting m/s to km/h.",
      "Confusing kilometers per hour (km/h) with miles per hour (mph).",
      "Confusing meters per second (m/s) with meters per minute."
    ]
  },
  faqs: [
    {
      question: "How do you convert m/s to km/h?",
      answer: "Multiply the velocity in meters per second by 3.6."
    },
    {
      question: "Why do you multiply by 3.6 to get km/h?",
      answer: "There are 3,600 seconds in an hour and 1,000 meters in a kilometer. 3,600 divided by 1,000 equals exactly 3.6."
    },
    {
      question: "What is 10 m/s in km/h?",
      answer: "10 m/s is equal to 36 km/h (10 × 3.6)."
    },
    {
      question: "What is 20 m/s in km/h?",
      answer: "20 m/s is equal to 72 km/h (20 × 3.6)."
    },
    {
      question: "What is 25 m/s in km/h?",
      answer: "25 m/s is equal to 90 km/h."
    },
    {
      question: "Is 1 m/s faster than 1 km/h?",
      answer: "Yes, 1 m/s equals 3.6 km/h, making 1 m/s 3.6 times faster than 1 km/h."
    },
    {
      question: "What is 30 m/s in km/h?",
      answer: "30 m/s is equal to 108 km/h."
    }
  ],
  relatedList: [
    { label: "Meter per Second to Mile per Hour", from: "meter-per-second", to: "mile-per-hour" },
    { label: "Kilometer per Hour to Meter per Second", from: "kilometer-per-hour", to: "meter-per-second" },
    { label: "Meter per Second to Knot", from: "meter-per-second", to: "knot" }
  ],
  references: [
    "BIPM - SI derived units for velocity",
    "ISO 80000-3: Quantities and units — Space and time"
  ]
};
