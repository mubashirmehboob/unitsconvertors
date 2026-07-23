import { CustomArticleData } from "./types";

export const kilometerPerHourToMach: CustomArticleData = {
  fromUnitId: "kilometer-per-hour",
  toUnitId: "mach",
  seoTitle: "Kilometer per Hour to Mach Converter (km/h to M)",
  metaDescription: "Convert kilometers per hour to Mach number (km/h to M) accurately. Learn the sonic velocity formula (km/h / 1234.8 at 15°C sea level), atmospheric acoustics, and high-speed flight regimes.",
  h1: "Kilometer per Hour to Mach Converter",
  introduction: [
    "Converting kilometers per hour to Mach number is a critical aerodynamic speed conversion in aerospace engineering, military flight planning, missile mechanics, and high-speed rail development. Mach number expresses speed relative to the local speed of sound in the atmosphere.",
    "Under standard International Standard Atmosphere (ISA) conditions at sea level (15 °C / 59 °F at 1 atm), the speed of sound is approximately 1,234.8 kilometers per hour (343 m/s). Converting km/h to Mach number under these sea-level conditions requires dividing the speed in km/h by 1,234.8. This guide explains atmospheric sonic speed, shockwave mechanics, calculation steps, and supersonic flight benchmarks."
  ],
  quickAnswer: {
    text: "To convert kilometers per hour to Mach number at standard sea level (15 °C), divide the speed in km/h by 1,234.8. For example, 1,234.8 km/h equals Mach 1.0 (the speed of sound), and 2,469.6 km/h equals Mach 2.0.",
    formulaDisplay: "M = km/h / 1234.8",
    subtext: "Mach 1 represents the local speed of sound (~1,234.8 km/h at 15 °C sea level)."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Hour (km/h)",
    text: "The kilometer per hour is the standard metric unit for terrestrial velocity, quantifying distance in kilometers covered in one hour. Used across global transit systems, km/h provides the reference ground speed before evaluating compressibility effects in Mach."
  },
  aboutTargetUnit: {
    title: "Understanding Mach Number (M)",
    text: "Mach number is a dimensionless quantity representing the ratio of flow velocity to the local speed of sound. Named after Austrian physicist Ernst Mach, it categorizes fluid flight regimes: Subsonic (M < 0.8), Transonic (0.8 < M < 1.2), Supersonic (1.2 < M < 5.0), and Hypersonic (M > 5.0)."
  },
  relationship: "Standard sea-level speed of sound is a₀ = 343 m/s. Multiplying by 3.6 yields 1,234.8 km/h. Dividing any velocity in km/h by 1,234.8 gives its corresponding sea-level Mach number.",
  relationshipTitle: "Kilometer per Hour vs Mach Scale Comparison (Standard Sea Level)",
  relationshipItems: [
    { label: "617.4 km/h", value: "Mach 0.50 (High-speed turboprop)" },
    { label: "1,049.58 km/h", value: "Mach 0.85 (Commercial jetliner cruise)" },
    { label: "1,234.8 km/h", value: "Mach 1.00 (Speed of sound threshold)" },
    { label: "2,469.6 km/h", value: "Mach 2.00 (Supersonic jet speed)" },
    { label: "6,174.0 km/h", value: "Mach 5.00 (Hypersonic threshold)" }
  ],
  formula: {
    text: "Divide the velocity in kilometers per hour by 1,234.8 (for standard 15 °C atmospheric conditions) to obtain the Mach number.",
    math: "M = km/h / 1234.8",
    subtext: "To convert Mach number back to km/h, multiply by local sonic speed (1,234.8 km/h at sea level; ~1,062 km/h at 35,000 ft altitude)."
  },
  formulaTitle: "Kilometer per Hour to Mach Formula",
  practicalTip: {
    title: "Altitude Temperature Compensation",
    text: "Because air temperature drops at high cruising altitudes (e.g., -56.5 °C at 35,000 ft), the speed of sound decreases from 1,234.8 km/h at sea level to ~1,062 km/h. Mach 1 at 35,000 ft corresponds to 1,062 km/h ground speed."
  },
  expertNote: {
    title: "Transonic Drag Rise",
    text: "As aircraft approach Mach 0.8 to 1.2 (approx. 980 to 1,480 km/h), shockwaves form over wing surfaces, causing a sharp rise in aerodynamic wave drag known as the drag divergence Mach number."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Concorde Cruise Velocity (2,179 km/h)",
        subtitle: "Convert the Concorde's peak supersonic cruising speed of 2,179 km/h into Mach number.",
        steps: [
          "Identify velocity in km/h: 2,179 km/h.",
          "Apply formula (sea level reference): M = 2,179 / 1,234.8.",
          "Calculate: 2,179 / 1,234.8 = 1.7646.",
          "Result: 2,179 km/h equals approximately Mach 1.76 at sea level (Mach 2.04 at cruising altitude)."
        ]
      },
      {
        title: "Example 2: Commercial Airliner Cruise Speed (900 km/h)",
        subtitle: "Convert a passenger jet speed of 900 km/h into Mach number.",
        steps: [
          "Identify velocity: 900 km/h.",
          "Divide by 1,234.8: 900 / 1,234.8 = 0.7288.",
          "Result: 900 km/h equals approximately Mach 0.73."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer per Hour to Mach Conversion Table (Standard 15°C Sea Level)",
    headers: ["Kilometers per Hour (km/h)", "Mach Number (M)", "Flight Regime / Aircraft Benchmark"],
    rows: [
      { fromVal: "350 km/h", toVal: "Mach 0.28", extra: "General aviation high-speed twin engine" },
      { fromVal: "600 km/h", toVal: "Mach 0.49", extra: "Military transport turboprop" },
      { fromVal: "900 km/h", toVal: "Mach 0.73", extra: "Commercial jetliner cruise (Boeing 777)" },
      { fromVal: "1,050 km/h", toVal: "Mach 0.85", extra: "High-subsonic business jet (Gulfstream G650)" },
      { fromVal: "1,234.8 km/h", toVal: "Mach 1.00", extra: "Speed of Sound (Sonic barrier)" },
      { fromVal: "1,500 km/h", toVal: "Mach 1.21", extra: "Supersonic jet acceleration" },
      { fromVal: "2,469.6 km/h", toVal: "Mach 2.00", extra: "F-15 Eagle / Su-27 supersonic dash" },
      { fromVal: "3,704.4 km/h", toVal: "Mach 3.00", extra: "SR-71 Blackbird maximum velocity" },
      { fromVal: "6,174.0 km/h", toVal: "Mach 5.00", extra: "Hypersonic flight regime threshold" },
      { fromVal: "28,440 km/h", toVal: "Mach 23.03", extra: "International Space Station orbital velocity" }
    ]
  },
  applications: {
    title: "Practical Applications of km/h to Mach Conversions",
    items: [
      {
        title: "Commercial Aviation Flight Management Systems (FMS)",
        text: "Avionics systems display ground speed in km/h or knots while monitoring structural airspeed limits in Mach during high-altitude climb."
      },
      {
        title: "Aerospace Defense & Missile Telemetry",
        text: "Radar tracking systems convert surface missile trajectory speeds from km/h to Mach numbers to predict shockwave compression."
      },
      {
        title: "Supersonic Transport (SST) Research",
        text: "Aeronautical researchers convert wind tunnel flow speeds (km/h) to Mach numbers to design low-boom supersonic aircraft bodies."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming Mach 1 is a fixed ground speed (1,234.8 km/h varies with altitude and temperature).",
      "Multiplying by 1,234.8 instead of dividing when converting km/h to Mach.",
      "Confusing Mach number with acceleration or distance."
    ]
  },
  faqs: [
    {
      question: "How do you convert km/h to Mach?",
      answer: "Divide the speed in kilometers per hour by 1,234.8 (at standard 15 °C sea level)."
    },
    {
      question: "What is 1,234.8 km/h in Mach?",
      answer: "1,234.8 km/h is equal to Mach 1.0 at standard sea level."
    },
    {
      question: "What is 1,000 km/h in Mach number?",
      answer: "1,000 km/h is equal to approximately Mach 0.81 at sea level."
    },
    {
      question: "What is Mach 2 in km/h?",
      answer: "Mach 2 is equal to 2,469.6 km/h at standard sea level."
    },
    {
      question: "What speed in km/h is Mach 5?",
      answer: "Mach 5 is equal to 6,174 km/h at standard sea level (the hypersonic threshold)."
    }
  ],
  relatedList: [
    { label: "Mach to Kilometer per Hour", from: "mach", to: "kilometer-per-hour" },
    { label: "Kilometer per Hour to Meter per Second", from: "kilometer-per-hour", to: "meter-per-second" },
    { label: "Kilometer per Hour to Mile per Hour", from: "kilometer-per-hour", to: "mile-per-hour" }
  ],
  references: [
    "ICAO - Manual of the ICAO Standard Atmosphere (Doc 7488)",
    "NASA Glenn Research Center - Aerodynamic Mach Equations"
  ]
};
