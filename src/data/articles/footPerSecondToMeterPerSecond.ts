import { CustomArticleData } from "./types";

export const footPerSecondToMeterPerSecond: CustomArticleData = {
  fromUnitId: "foot-per-second",
  toUnitId: "meter-per-second",
  seoTitle: "Foot per Second to Meter per Second (ft/s to m/s)",
  metaDescription: "Convert feet per second to meters per second (ft/s to m/s) with exact precision. Learn the official 0.3048 factor, physics formulas, ballistics examples, and tables.",
  h1: "Foot per Second to Meter per Second Converter",
  introduction: [
    "Converting feet per second to meters per second is one of the most essential velocity conversions in mechanical engineering, physics coursework, ballistics, and international aerospace manufacturing. While feet per second (ft/s or fps) is standard throughout the United States customary measurement system, the meter per second (m/s) is the official SI unit for velocity across all scientific disciplines.",
    "The conversion between feet per second and meters per second is exact: 1 foot per second equals exactly 0.3048 meters per second. This guide explains the international definition, calculation steps, ballistics and athletics examples, common mistakes, and comprehensive conversion tables."
  ],
  quickAnswer: {
    text: "One foot per second (1 ft/s) is equal to exactly 0.3048 meters per second. To convert feet per second to meters per second, multiply the ft/s value by 0.3048 (or divide by 3.28084).",
    formulaDisplay: "m/s = ft/s × 0.3048",
    subtext: "Defined as an exact conversion factor under the 1959 International Yard and Pound Agreement."
  },
  aboutSourceUnit: {
    title: "Understanding Feet per Second (ft/s)",
    text: "The foot per second (ft/s) is an imperial and US customary unit quantifying the distance in feet an object moves in one second. It is the universal standard in American firearm ballistics (muzzle velocities), projectile aerodynamics, and wind tunnel testing."
  },
  aboutTargetUnit: {
    title: "Understanding Meters per Second (m/s)",
    text: "The meter per second is the coherent derived SI unit for velocity and speed. Fundamental to SI mechanics formulas (including Newton's second law F = ma, kinetic energy E = ½mv², and momentum p = mv), m/s is required for peer-reviewed science and international engineering."
  },
  relationship: "Because 1 international foot is defined as exactly 0.3048 meters, the time base (1 second) is identical in both units. Consequently, 1 ft/s = 0.3048 m/s exactly, with zero repeating decimals or experimental uncertainty.",
  relationshipTitle: "Exact Mathematical Relationship",
  relationshipItems: [
    { label: "1 ft/s", value: "0.3048 m/s (Exact defined factor)" },
    { label: "3.28084 ft/s", value: "1.0000 m/s (SI base velocity unit)" },
    { label: "10 ft/s", value: "3.048 m/s (Jogging pace)" },
    { label: "100 ft/s", value: "30.48 m/s (Baseball fastball ~68 mph)" },
    { label: "1,000 ft/s", value: "304.8 m/s (Transonic velocity / handgun muzzle)" }
  ],
  formula: {
    text: "Multiply the velocity in feet per second by 0.3048 to obtain the velocity in meters per second.",
    math: "m/s = ft/s × 0.3048",
    subtext: "To convert meters per second back into feet per second, divide by 0.3048 (or multiply by approximately 3.28084)."
  },
  formulaTitle: "Foot per Second to Meter per Second Formula",
  practicalTip: {
    title: "Quick Mental Calculation Rule",
    text: "To estimate ft/s to m/s mentally, divide by 3 and subtract 10% from the result. For example, 30 ft/s / 3 = 10; 10 - 1 = 9 m/s (exact is 9.144 m/s)."
  },
  expertNote: {
    title: "Ballistics & Kinematics Practice",
    text: "Muzzle velocities are recorded in ft/s on US ammunition boxes (e.g., 3,000 ft/s). To calculate kinetic energy in joules (J = kg·m²/s²), always convert ft/s to m/s before squaring velocity."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Baseball Pitch (140 ft/s)",
        subtitle: "Convert a 95 mph fastball traveling at roughly 140 ft/s into meters per second.",
        steps: [
          "Identify velocity: 140 ft/s.",
          "Apply formula: m/s = 140 × 0.3048.",
          "Calculate: 140 × 0.3048 = 42.672 m/s.",
          "Result: 140 ft/s equals exactly 42.672 meters per second."
        ]
      },
      {
        title: "Example 2: Rifle Muzzle Velocity (3,200 ft/s)",
        subtitle: "Convert a high-velocity rifle projectile (3,200 ft/s) to m/s for kinetic energy analysis.",
        steps: [
          "Identify velocity: 3,200 ft/s.",
          "Multiply: 3,200 × 0.3048 = 975.36 m/s.",
          "Result: 3,200 ft/s equals exactly 975.36 meters per second."
        ]
      },
      {
        title: "Example 3: Indoor Airflow Duct Velocity (15 ft/s)",
        subtitle: "Convert commercial HVAC duct velocity from 15 ft/s to m/s.",
        steps: [
          "Identify velocity: 15 ft/s.",
          "Multiply: 15 × 0.3048 = 4.572 m/s.",
          "Result: 15 ft/s equals exactly 4.572 meters per second."
        ]
      }
    ]
  },
  table: {
    title: "Foot per Second to Meter per Second Conversion Table",
    headers: ["Feet per Second (ft/s)", "Meters per Second (m/s)", "Everyday & Technical Context"],
    rows: [
      { fromVal: "1 ft/s", toVal: "0.3048 m/s", extra: "Slow stroll" },
      { fromVal: "3 ft/s", toVal: "0.9144 m/s", extra: "Average pedestrian walking speed (~2 mph)" },
      { fromVal: "5 ft/s", toVal: "1.5240 m/s", extra: "Brisk walking pace" },
      { fromVal: "10 ft/s", toVal: "3.0480 m/s", extra: "Recreational running speed" },
      { fromVal: "20 ft/s", toVal: "6.0960 m/s", extra: "Bicycle speed in city traffic" },
      { fromVal: "33 ft/s", toVal: "10.0584 m/s", extra: "Olympic 100m sprint pace (~10 m/s)" },
      { fromVal: "50 ft/s", toVal: "15.2400 m/s", extra: "Urban car speed limit (~34 mph)" },
      { fromVal: "88 ft/s", toVal: "26.8224 m/s", extra: "Highway speed limit: exactly 60 mph" },
      { fromVal: "100 ft/s", toVal: "30.4800 m/s", extra: "Severe hurricane-force wind gust (~68 mph)" },
      { fromVal: "500 ft/s", toVal: "152.4000 m/s", extra: "Subsonic light aircraft cruise" },
      { fromVal: "1,125 ft/s", toVal: "342.9000 m/s", extra: "Speed of sound at sea level (Mach 1)" },
      { fromVal: "3,000 ft/s", toVal: "914.4000 m/s", extra: "Military rifle bullet muzzle velocity" }
    ]
  },
  applications: {
    title: "Practical Applications of ft/s to m/s Conversions",
    items: [
      {
        title: "Ballistics and Terminal Impact Physics",
        text: "Ballisticians convert chronograph chronograph muzzle velocities from ft/s to m/s to calculate projectile kinetic energy (E_k = ½mv²) in SI joules."
      },
      {
        title: "Civil & Hydraulic Engineering",
        text: "Hydrologists and civil engineers convert channel flow and stormwater runoff velocities between US customary (ft/s) and metric (m/s) for Manning's formula pipe sizing."
      },
      {
        title: "Aerospace & Wind Tunnel Testing",
        text: "Aeronautical engineers convert pitot-static tube airspeed data between ft/s and m/s when preparing aerodynamic lift and drag coefficients."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 0.3048 instead of multiplying (dividing yields a larger number, whereas meters are longer than feet so the m/s value must be smaller).",
      "Confusing feet per second (ft/s) with miles per hour (mph); 1 mph equals 1.4667 ft/s, not 1 ft/s.",
      "Using the historical US survey foot factor in precision engineering, which introduces unnecessary discrepancy from the international standard (0.3048 m)."
    ]
  },
  faqs: [
    {
      question: "How do you convert feet per second to meters per second?",
      answer: "Multiply the velocity in feet per second by exactly 0.3048. For example, 10 ft/s × 0.3048 = 3.048 m/s."
    },
    {
      question: "Is 1 ft/s faster or slower than 1 m/s?",
      answer: "1 ft/s is slower than 1 m/s. Because 1 meter is about 3.28 feet, 1 m/s equals 3.28084 ft/s, while 1 ft/s is only 0.3048 m/s."
    },
    {
      question: "What is 1,000 ft/s in m/s?",
      answer: "1,000 ft/s equals exactly 304.8 meters per second."
    },
    {
      question: "What is 88 ft/s in m/s?",
      answer: "88 ft/s equals exactly 26.8224 m/s (this corresponds to exactly 60 mph)."
    },
    {
      question: "How do you convert m/s back to ft/s?",
      answer: "Divide the speed in m/s by 0.3048 (or multiply by approximately 3.28084). For example, 10 m/s / 0.3048 = 32.8084 ft/s."
    },
    {
      question: "Why is 0.3048 an exact conversion factor?",
      answer: "Under the International Yard and Pound Agreement of 1959, the international yard was legally defined as exactly 0.9144 meters. Dividing by 3 yields 0.3048 meters per foot exactly."
    },
    {
      question: "What is the speed of sound in ft/s and m/s?",
      answer: "At standard sea level (20 °C), the speed of sound is approximately 1,125.33 ft/s, which equals approximately 343 m/s."
    },
    {
      question: "What is a fast baseball pitch (100 mph) in ft/s and m/s?",
      answer: "A 100 mph fastball travels at approximately 146.67 ft/s, which converts to approximately 44.70 m/s."
    }
  ],
  relatedList: [
    { label: "Meter per Second to Foot per Second", from: "meter-per-second", to: "foot-per-second" },
    { label: "Foot per Second to Kilometer per Hour", from: "foot-per-second", to: "kilometer-per-hour" },
    { label: "Foot per Second to Mile per Hour", from: "foot-per-second", to: "mile-per-hour" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI)",
    "ISO 80000-3: Space and Time Units and Conversion Ratios",
    "International Yard and Pound Agreement of 1959"
  ]
};
