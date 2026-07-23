import { CustomArticleData } from "./types";

export const meterPerSecondToMach: CustomArticleData = {
  fromUnitId: "meter-per-second",
  toUnitId: "mach",
  seoTitle: "Meter per Second to Mach Converter (m/s to M)",
  metaDescription: "Convert meters per second to Mach number (m/s to M) accurately. Learn the sonic velocity formula (m/s / 343 at 15°C sea level), aeronautical atmospheric standards, and supersonic speed tiers.",
  h1: "Meter per Second to Mach Converter",
  introduction: [
    "Converting meters per second to Mach number is an essential aerodynamic calculation in aeronautics, ballistics, rocket propulsion, and high-altitude flight dynamics. Mach number expresses the speed of an object relative to the local speed of sound in the surrounding fluid or atmosphere.",
    "Under standard International Standard Atmosphere (ISA) sea-level conditions (15 °C / 59 °F at 1 atm), the speed of sound is approximately 343 meters per second. Converting meters per second to Mach number under these sea-level conditions requires dividing the m/s velocity by 343. This guide explains sonic atmospheric conditions, shockwave dynamics, conversion formulas, and high-speed aviation benchmarks."
  ],
  quickAnswer: {
    text: "To convert meters per second to Mach number at standard sea level (15 °C), divide the velocity in m/s by 343. For example, 343 m/s equals Mach 1.0 (the speed of sound), and 686 m/s equals Mach 2.0.",
    formulaDisplay: "M = m/s / 343",
    subtext: "Mach 1 represents the local speed of sound (~343 m/s or 1,234.8 km/h at 15 °C)."
  },
  aboutSourceUnit: {
    title: "Understanding Meters per Second (m/s)",
    text: "The meter per second is the foundational SI unit for speed and velocity. In aerodynamics, m/s measures true airspeed (TAS), wind tunnel airflow, jet exhaust velocity, and artillery muzzle velocity."
  },
  aboutTargetUnit: {
    title: "Understanding Mach Number (M)",
    text: "Mach number is a dimensionless ratio in fluid mechanics named after Austrian physicist Ernst Mach. Expressed as M = v / a (where v is object velocity and a is local sonic speed), Mach number classifies flight regimes: Subsonic (M < 0.8), Transonic (0.8 < M < 1.2), Supersonic (1.2 < M < 5.0), and Hypersonic (M > 5.0)."
  },
  relationship: "Because the speed of sound varies with temperature (a = √(γ · R · T)), standard sea-level atmosphere (T = 288.15 K) sets sonic velocity at a₀ = 343.0 m/s (1,234.8 km/h or 767.2 mph). Dividing m/s velocity by 343 yields the Mach number at standard sea level.",
  relationshipTitle: "Meter per Second vs Mach Scale Comparison (Standard Sea Level)",
  relationshipItems: [
    { label: "171.5 m/s", value: "Mach 0.5 (Subsonic jetliner)" },
    { label: "291.55 m/s", value: "Mach 0.85 (Commercial jet cruise)" },
    { label: "343.0 m/s", value: "Mach 1.0 (Sound barrier threshold)" },
    { label: "686.0 m/s", value: "Mach 2.0 (Supersonic fighter speed)" },
    { label: "1,715.0 m/s", value: "Mach 5.0 (Hypersonic threshold)" }
  ],
  formula: {
    text: "Divide the velocity in meters per second by 343 (for standard 15 °C atmospheric conditions) to obtain the Mach number.",
    math: "M = m/s / 343",
    subtext: "To convert Mach number back to m/s, multiply by local sonic speed (343 m/s at sea level; ~295 m/s at 35,000 ft altitude)."
  },
  formulaTitle: "Meter per Second to Mach Formula",
  practicalTip: {
    title: "Altitude Temperature Dependency",
    text: "Because air temperature drops at higher altitudes, the speed of sound decreases from 343 m/s at sea level to ~295 m/s in the stratosphere (35,000 ft). Mach 1 at 35,000 ft occurs at 295 m/s."
  },
  expertNote: {
    title: "Sonic Boom Generation",
    text: "When an aircraft accelerates past Mach 1.0 (343 m/s at sea level), compressed acoustic pressure waves coalesce into a conical shockwave, creating a audible sonic boom on the ground."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Concorde Supersonic Cruise Velocity (600 m/s)",
        subtitle: "Convert the Concorde's high-speed cruise velocity of 600 m/s into Mach number at sea level.",
        steps: [
          "Identify velocity in m/s: 600 m/s.",
          "Apply formula (standard sea level): M = 600 / 343.",
          "Calculate: 600 / 343 = 1.749.",
          "Result: 600 m/s equals approximately Mach 1.75 at sea-level temperature."
        ]
      },
      {
        title: "Example 2: Rocket Sled Acceleration (1,029 m/s)",
        subtitle: "Convert a ground rocket test sled speed of 1,029 m/s into Mach number.",
        steps: [
          "Identify velocity: 1,029 m/s.",
          "Divide by 343: 1,029 / 343 = 3.0.",
          "Result: 1,029 m/s equals Mach 3.0 (3 times the speed of sound)."
        ]
      }
    ]
  },
  table: {
    title: "Meter per Second to Mach Conversion Table (Standard 15°C Atmosphere)",
    headers: ["Meters per Second (m/s)", "Mach Number (M)", "Flight Regime / Aircraft Benchmark"],
    rows: [
      { fromVal: "100 m/s", toVal: "Mach 0.29", extra: "General aviation propeller aircraft" },
      { fromVal: "200 m/s", toVal: "Mach 0.58", extra: "Regional turboprop airline cruise" },
      { fromVal: "274 m/s", toVal: "Mach 0.80", extra: "Commercial jetliner cruise (Boeing 787)" },
      { fromVal: "343 m/s", toVal: "Mach 1.00", extra: "Sonic barrier (Speed of Sound)" },
      { fromVal: "412 m/s", toVal: "Mach 1.20", extra: "Low-supersonic fighter dash" },
      { fromVal: "686 m/s", toVal: "Mach 2.00", extra: "Concorde supersonic cruise / F-22 Raptor" },
      { fromVal: "1,029 m/s", toVal: "Mach 3.00", extra: "SR-71 Blackbird maximum speed" },
      { fromVal: "1,715 m/s", toVal: "Mach 5.00", extra: "Hypersonic flight threshold" },
      { fromVal: "3,430 m/s", toVal: "Mach 10.00", extra: "Experimental scramjet vehicle" },
      { fromVal: "7,900 m/s", toVal: "Mach 23.03", extra: "Low Earth Orbit (LEO) orbital speed" }
    ]
  },
  applications: {
    title: "Aerospace Applications of m/s to Mach Conversions",
    items: [
      {
        title: "High-Altitude Jet Fighter Flight Control",
        text: "Avionics computers compute pitot tube pressure differential to determine true air velocity in m/s and display Mach number on HUD screens."
      },
      {
        title: "Spacecraft Re-entry & Heat Shielding",
        text: "NASA and SpaceX telemetry converts orbital velocity in m/s to Mach numbers to evaluate plasma ionization drag during atmospheric entry."
      },
      {
        title: "Wind Tunnel Aerodynamic Testing",
        text: "Aerospace engineers test scale model wings in pressurized wind tunnels at specific Mach numbers by regulating m/s fan speed."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming the speed of sound is constant regardless of altitude or air temperature.",
      "Multiplying by 343 instead of dividing when converting m/s to Mach number.",
      "Treating Mach as a distance unit (Mach measures velocity ratio, not length)."
    ]
  },
  faqs: [
    {
      question: "How do you convert m/s to Mach?",
      answer: "Divide the velocity in meters per second by 343 (under standard 15 °C atmospheric conditions)."
    },
    {
      question: "What is Mach 1 in m/s?",
      answer: "Mach 1 is equal to 343 meters per second at standard sea level (15 °C)."
    },
    {
      question: "What is 500 m/s in Mach number?",
      answer: "500 m/s is equal to approximately Mach 1.46 at standard sea level."
    },
    {
      question: "Does the speed of sound change with altitude?",
      answer: "Yes, the speed of sound depends on temperature. At higher, colder altitudes (like 35,000 ft), the speed of sound drops to approximately 295 m/s."
    },
    {
      question: "What is Mach 2 in m/s?",
      answer: "Mach 2 is equal to 686 meters per second at standard sea level."
    },
    {
      question: "What is Mach 5?",
      answer: "Mach 5 is 1,715 m/s at sea level, marking the start of the hypersonic speed regime."
    }
  ],
  relatedList: [
    { label: "Meter per Second to Kilometer per Hour", from: "meter-per-second", to: "kilometer-per-hour" },
    { label: "Mach to Meter per Second", from: "mach", to: "meter-per-second" },
    { label: "Meter per Second to Speed of Light", from: "meter-per-second", to: "speed-of-light" }
  ],
  references: [
    "ICAO - Standard Atmosphere (Doc 7488)",
    "NASA Glenn Research Center - Mach Number Equations"
  ]
};
