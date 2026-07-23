import { CustomArticleData } from "./types";

export const meterPerSecondToFootPerSecond: CustomArticleData = {
  fromUnitId: "meter-per-second",
  toUnitId: "foot-per-second",
  seoTitle: "Meter per Second to Foot per Second Converter (m/s to ft/s)",
  metaDescription: "Convert meters per second to feet per second (m/s to ft/s) instantly. Learn the exact factor (3.28084), calculation steps, engineering mechanics, and ballistics applications.",
  h1: "Meter per Second to Foot per Second Converter",
  introduction: [
    "Converting meters per second to feet per second is a essential velocity conversion used widely in civil engineering, fluid mechanics, ballistics, architectural acoustics, and biomechanics. While m/s is the primary metric velocity unit, feet per second (ft/s or fps) is the standard engineering unit across the United States and Imperial structural calculations.",
    "Converting meters per second to feet per second requires multiplying the m/s value by approximately 3.2808399. This guide details the mathematical derivation, step-by-step conversion examples, structural engineering applications, and conversion reference tables."
  ],
  quickAnswer: {
    text: "To convert meters per second to feet per second, multiply the velocity in m/s by 3.28084. For example, 10 m/s equals approximately 32.81 ft/s, and 25 m/s equals roughly 82.02 ft/s.",
    formulaDisplay: "ft/s = m/s × 3.28084",
    subtext: "One meter per second is equal to exactly 3.280839895 feet per second."
  },
  aboutSourceUnit: {
    title: "Understanding Meters per Second (m/s)",
    text: "The meter per second is the coherent derived unit of velocity in the SI system. It quantifies the rate of displacement in meters over a period of one second in scientific, physical, and computational modeling."
  },
  aboutTargetUnit: {
    title: "Understanding Feet per Second (ft/s or fps)",
    text: "The foot per second is a unit of speed in the US Customary and Imperial measurement systems. Commonly used in projectile ballistics, pipe hydraulics, wind tunnel aerodynamic testing, and elevator speed specifications, 1 ft/s represents moving a distance of one international foot per second."
  },
  relationship: "By international agreement (1959), 1 foot equals exactly 0.3048 meters. Dividing 1 meter by 0.3048 meters per foot yields the exact conversion factor 3.280839895. Thus, 1 m/s = 3.28084 ft/s.",
  relationshipTitle: "Meter per Second vs Foot per Second Scale Comparison",
  relationshipItems: [
    { label: "1 m/s", value: "3.28 ft/s (Brisk walking step)" },
    { label: "5 m/s", value: "16.40 ft/s (Fluid velocity in pipe)" },
    { label: "9.81 m/s", value: "32.17 ft/s (Gravitational acceleration g)" },
    { label: "25 m/s", value: "82.02 ft/s (Elevator rapid transit speed)" },
    { label: "343 m/s", value: "1,125.33 ft/s (Speed of sound at sea level)" }
  ],
  formula: {
    text: "Multiply the velocity in meters per second by 3.28084 to find the velocity in feet per second.",
    math: "ft/s = m/s × 3.28084",
    subtext: "To convert feet per second back to meters per second, multiply by 0.3048."
  },
  formulaTitle: "Meter per Second to Foot per Second Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To quickly approximate m/s to ft/s, multiply the m/s value by 3.3 (e.g., 10 m/s × 3.3 = 33 ft/s; exact value is 32.81 ft/s)."
  },
  expertNote: {
    title: "Gravitational Acceleration Metric Benchmark",
    text: "Standard gravity g is 9.80665 m/s² in metric SI units, which converts directly to 32.174 ft/s² in US customary units using the 3.28084 conversion factor."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Airflow Velocity in HVAC Ducting (6.5 m/s)",
        subtitle: "Convert an HVAC air duct velocity measurement of 6.5 m/s into feet per second.",
        steps: [
          "Identify velocity in m/s: 6.5 m/s.",
          "Apply formula: ft/s = m/s × 3.28084.",
          "Calculate: 6.5 × 3.28084 = 21.32546.",
          "Result: 6.5 m/s equals approximately 21.33 ft/s."
        ]
      },
      {
        title: "Example 2: Muzzle Velocity of Archery Arrow (90 m/s)",
        subtitle: "Convert a high-performance hunting bow release speed of 90 m/s into feet per second.",
        steps: [
          "Identify velocity: 90 m/s.",
          "Multiply by 3.28084: 90 × 3.28084 = 295.2756.",
          "Result: 90 m/s equals approximately 295.28 ft/s."
        ]
      }
    ]
  },
  table: {
    title: "Meter per Second to Foot per Second Reference Table",
    headers: ["Meters per Second (m/s)", "Feet per Second (ft/s)", "Engineering / Physics Context"],
    rows: [
      { fromVal: "1 m/s", toVal: "3.28 ft/s", extra: "Pedestrian walking pace" },
      { fromVal: "2 m/s", toVal: "6.56 ft/s", extra: "Slow indoor water pipe velocity" },
      { fromVal: "5 m/s", toVal: "16.40 ft/s", extra: "HVAC ventilation air speed" },
      { fromVal: "9.81 m/s", toVal: "32.17 ft/s", extra: "Standard gravity acceleration (g)" },
      { fromVal: "15 m/s", toVal: "49.21 ft/s", extra: "High-rise elevator top speed" },
      { fromVal: "25 m/s", toVal: "82.02 ft/s", extra: "Suburban traffic velocity" },
      { fromVal: "50 m/s", toVal: "164.04 ft/s", extra: "Storm gust velocity" },
      { fromVal: "100 m/s", toVal: "328.08 ft/s", extra: "Paintball gun muzzle speed" },
      { fromVal: "343 m/s", toVal: "1,125.33 ft/s", extra: "Speed of sound in air (15°C)" },
      { fromVal: "1,000 m/s", toVal: "3,280.84 ft/s", extra: "High-power rifle bullet velocity" }
    ]
  },
  applications: {
    title: "Engineering Applications of m/s to ft/s Conversions",
    items: [
      {
        title: "Civil & Hydraulic Engineering",
        text: "Engineers design water distribution networks and wastewater channels by converting metric flow specifications (m/s) into Imperial pipe velocities (ft/s) to prevent scouring."
      },
      {
        title: "Firearms Ballistics & Chronograph Testing",
        text: "Chronographs measure bullet muzzle velocities; conversion between m/s and ft/s allows international ammunition performance comparison."
      },
      {
        title: "Architectural Acoustics & Sound Propagation",
        text: "Acoustic consultants calculate reverberation times by switching between metric sound speeds (343 m/s) and imperial sound speeds (1,125 ft/s)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 3.28084 instead of multiplying when converting m/s to ft/s.",
      "Confusing feet per second (ft/s) with feet per minute (ft/min or fpm).",
      "Using rounding approximations (like 3.0) for high-precision engineering calculations."
    ]
  },
  faqs: [
    {
      question: "How do you convert m/s to ft/s?",
      answer: "Multiply the velocity in meters per second by 3.28084."
    },
    {
      question: "What is 1 m/s in feet per second?",
      answer: "1 m/s is equal to approximately 3.28084 ft/s."
    },
    {
      question: "What is 10 m/s in ft/s?",
      answer: "10 m/s is equal to approximately 32.81 ft/s."
    },
    {
      question: "How many ft/s is the speed of sound (343 m/s)?",
      answer: "343 m/s equals approximately 1,125.33 ft/s."
    },
    {
      question: "What is 20 m/s in ft/s?",
      answer: "20 m/s is equal to approximately 65.62 ft/s."
    }
  ],
  relatedList: [
    { label: "Foot per Second to Meter per Second", from: "foot-per-second", to: "meter-per-second" },
    { label: "Meter per Second to Kilometer per Hour", from: "meter-per-second", to: "kilometer-per-hour" },
    { label: "Meter per Second to Mile per Hour", from: "meter-per-second", to: "mile-per-hour" }
  ],
  references: [
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "ISO 80000-3: Quantities and Units - Space and Time"
  ]
};
