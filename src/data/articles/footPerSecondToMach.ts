import { CustomArticleData } from "./types";

export const footPerSecondToMach: CustomArticleData = {
  fromUnitId: "foot-per-second",
  toUnitId: "mach",
  seoTitle: "Foot per Second to Mach (ft/s to M)",
  metaDescription: "Convert feet per second to Mach (ft/s to M) accurately. Learn the speed of sound in dry air (1,125.33 ft/s), ballistics formulas, supersonic examples, and tables.",
  h1: "Foot per Second to Mach Converter",
  introduction: [
    "Converting feet per second to the Mach number is one of the most critical calculations in aeronautical engineering, ballistics, rocketry, and firearm ammunition development. While feet per second (ft/s or fps) is the universal ballistic chronograph measurement in the United States, the Mach number (M) dictates whether a projectile travels in the subsonic, transonic, supersonic, or hypersonic aerodynamic regime.",
    "Because the speed of sound in dry air at 20 °C (68 °F) at sea level is approximately 1,125.33 feet per second (343 m/s), dividing any velocity in ft/s by 1,125.33 gives its corresponding Mach number. In standard international atmosphere conditions (15 °C / 59 °F, where sound travels at 1,116.44 ft/s), sound barrier thresholds shift slightly. This guide explains aerodynamic regimes, worked projectile examples, atmospheric equations, and conversion tables."
  ],
  quickAnswer: {
    text: "At standard sea-level temperature (20 °C in dry air), one Mach (Mach 1) is equal to approximately 1,125.33 feet per second. To convert feet per second to Mach, divide the ft/s value by 1,125.33 (or multiply by 0.00088863).",
    formulaDisplay: "Mach = ft/s / 1,125.33 ≈ ft/s × 0.00088863",
    subtext: "Calculated based on standard atmospheric speed of sound in air at 20 °C (343 m/s / 0.3048 m per foot)."
  },
  aboutSourceUnit: {
    title: "Understanding Feet per Second (ft/s)",
    text: "The foot per second (ft/s or fps) is an imperial and US customary unit quantifying linear velocity. It is standard for US firearm chronograph testing, wind tunnel exit velocities, and rocket booster stage burnout speeds."
  },
  aboutTargetUnit: {
    title: "Understanding the Mach Number (M)",
    text: "The Mach number is a dimensionless ratio named after Austrian physicist Ernst Mach, defined as the speed of an object relative to the local speed of sound (M = v / a). It classifies aerodynamic flight regimes: subsonic (M < 0.8), transonic (0.8 < M < 1.2), supersonic (1.2 < M < 5.0), and hypersonic (M > 5.0)."
  },
  relationship: "Because sound in air at 20 °C travels at 343 m/s, dividing by 0.3048 gives 1,125.328 ft/s for Mach 1. Converting any ft/s velocity into Mach simply requires dividing by 1,125.33. For example, 2,250 ft/s is approximately Mach 2, and 3,375 ft/s is approximately Mach 3.",
  relationshipTitle: "Acoustic Flight Regime Boundaries",
  relationshipItems: [
    { label: "1,125.33 ft/s", value: "Mach 1.00 (Speed of sound / sonic barrier)" },
    { label: "900.26 ft/s", value: "Mach 0.80 (Subsonic commercial cruise ceiling)" },
    { label: "1,350.40 ft/s", value: "Mach 1.20 (Supersonic regime threshold)" },
    { label: "2,250.66 ft/s", value: "Mach 2.00 (Twice the speed of sound / Concorde)" },
    { label: "5,626.64 ft/s", value: "Mach 5.00 (Hypersonic aerodynamic boundary)" }
  ],
  formula: {
    text: "Divide the velocity in feet per second by 1,125.33 (the speed of sound in air at 20 °C) to calculate the Mach number.",
    math: "Mach = ft/s / 1,125.33",
    subtext: "To convert Mach back into feet per second, multiply the Mach number by 1,125.33."
  },
  formulaTitle: "Foot per Second to Mach Formula",
  practicalTip: {
    title: "Rule of Thumb for Shooters & Pilots",
    text: "Think of 1,125 ft/s as the sound barrier. Bullets below 1,100 ft/s (subsonic) will not produce a loud sonic crack, making them ideal for suppressed shooting. Bullets above 1,150 ft/s are supersonic."
  },
  expertNote: {
    title: "High Altitude Temperature Effect",
    text: "At standard jet airliner cruising altitude (36,000 feet in the tropopause), air temperature plunges to -56.5 °C (-69.7 °F). Sound slows to roughly 968 ft/s (295 m/s). An aircraft flying at 800 ft/s at that altitude is already at Mach 0.826."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Handgun Bullet Velocity (1,150 ft/s)",
        subtitle: "Determine the Mach number of a 9mm Parabellum bullet leaving the barrel at 1,150 ft/s.",
        steps: [
          "Identify velocity: 1,150 ft/s.",
          "Apply formula: Mach = 1,150 / 1,125.33.",
          "Calculate: 1,150 / 1,125.33 = 1.0219.",
          "Result: 1,150 ft/s equals approximately Mach 1.02 (transonic, just breaking the sound barrier)."
        ]
      },
      {
        title: "Example 2: High-Power Hunting Rifle (3,000 ft/s)",
        subtitle: "Convert a 3,000 ft/s rifle projectile into Mach.",
        steps: [
          "Identify velocity: 3,000 ft/s.",
          "Divide by 1,125.33: 3,000 / 1,125.33 = 2.6659.",
          "Result: 3,000 ft/s equals approximately Mach 2.67 (well into the supersonic regime)."
        ]
      },
      {
        title: "Example 3: Subsonic Archery Arrow (300 ft/s)",
        subtitle: "Calculate the Mach number of a compound bow arrow flying at 300 ft/s.",
        steps: [
          "Identify velocity: 300 ft/s.",
          "Divide: 300 / 1,125.33 = 0.2666.",
          "Result: 300 ft/s equals approximately Mach 0.27 (deeply subsonic)."
        ]
      }
    ]
  },
  table: {
    title: "Foot per Second to Mach Conversion Table (at 20 °C Air)",
    headers: ["Feet per Second (ft/s)", "Mach Number (M)", "Flight Regime & Phenomenon"],
    rows: [
      { fromVal: "100 ft/s", toVal: "Mach 0.089", extra: "Highway automobile traffic (~68 mph)" },
      { fromVal: "300 ft/s", toVal: "Mach 0.267", extra: "Compound bow arrow / paintball marker" },
      { fromVal: "500 ft/s", toVal: "Mach 0.444", extra: "General aviation light propeller aircraft" },
      { fromVal: "850 ft/s", toVal: "Mach 0.755", extra: "Commercial jetliner economy cruise" },
      { fromVal: "1,000 ft/s", toVal: "Mach 0.889", extra: "Transonic shockwave formation on wings" },
      { fromVal: "1,125 ft/s", toVal: "Mach 1.000", extra: "Speed of sound at sea level (Sonic boom)" },
      { fromVal: "1,500 ft/s", toVal: "Mach 1.333", extra: "Supersonic fighter jet low-altitude sprint" },
      { fromVal: "2,250 ft/s", toVal: "Mach 1.999", extra: "Mach 2 supersonic flight / Concorde cruise" },
      { fromVal: "3,000 ft/s", toVal: "Mach 2.666", extra: "Centerfire hunting rifle muzzle velocity" },
      { fromVal: "3,500 ft/s", toVal: "Mach 3.110", extra: "SR-71 Blackbird top speed" },
      { fromVal: "5,627 ft/s", toVal: "Mach 5.000", extra: "Hypersonic flight threshold" },
      { fromVal: "10,000 ft/s", toVal: "Mach 8.886", extra: "Atmospheric re-entry glide test vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of ft/s to Mach Conversions",
    items: [
      {
        title: "Firearm Ballistics & Sound Suppressor Design",
        text: "Gunsmiths convert chronograph ft/s readings to Mach to design subsonic loads (under Mach 0.95) that eliminate the loud acoustic crack generated by supersonic shockwaves."
      },
      {
        title: "Aviation Wind Tunnel Testing",
        text: "Aerodynamicists converting model tunnel velocities from ft/s to Mach to predict wave drag, boundary layer separation, and shock-stall characteristics."
      },
      {
        title: "Rocket Stage Burnout & Re-entry",
        text: "Flight telemetry converts booster staging velocities from ft/s into Mach to assess aerodynamic heating and dynamic pressure (Max-Q) during ascent."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming Mach 1 is always 1,125 ft/s; at cold cruising altitudes (-56 °C), sound slows to roughly 968 ft/s.",
      "Treating Mach as a unit with dimensions; Mach is a dimensionless ratio (M = v/a).",
      "Multiplying by 1,125.33 instead of dividing when converting ft/s to Mach."
    ]
  },
  faqs: [
    {
      question: "How do you convert feet per second to Mach?",
      answer: "Divide the velocity in feet per second by the local speed of sound (approximately 1,125.33 ft/s at 20 °C in dry air). For example, 2,250 ft/s / 1,125.33 = Mach 2.0."
    },
    {
      question: "How many feet per second is Mach 1?",
      answer: "In dry air at standard sea-level temperature (20 °C / 68 °F), Mach 1 is approximately 1,125.33 feet per second (about 767 mph or 343 m/s). At 15 °C, it is roughly 1,116.44 ft/s."
    },
    {
      question: "What is 3,000 ft/s in Mach?",
      answer: "3,000 ft/s is equal to approximately Mach 2.67 (3,000 / 1,125.33)."
    },
    {
      question: "What is 1,000 ft/s in Mach?",
      answer: "1,000 ft/s is equal to approximately Mach 0.89 (transonic speed)."
    },
    {
      question: "How do you convert Mach back to feet per second?",
      answer: "Multiply the Mach number by the speed of sound (1,125.33 ft/s at 20 °C). For example, Mach 3 × 1,125.33 = 3,376 ft/s."
    },
    {
      question: "Why does the speed of sound in ft/s change with altitude?",
      answer: "The speed of sound depends directly on air temperature (a = √(γ·R·T)). As an aircraft climbs into colder air, sound travels slower, so fewer feet per second are needed to reach Mach 1."
    },
    {
      question: "What is a subsonic bullet in feet per second?",
      answer: "A subsonic bullet travels below Mach 1, typically under 1,050 to 1,100 ft/s depending on temperature. Subsonic rounds do not generate a sonic boom."
    },
    {
      question: "What is the hypersonic speed threshold in ft/s?",
      answer: "Hypersonic flight begins at Mach 5, which corresponds to approximately 5,627 feet per second (over 3,800 mph) at sea level."
    }
  ],
  relatedList: [
    { label: "Mach to Foot per Second", from: "mach", to: "foot-per-second" },
    { label: "Foot per Second to Mile per Hour", from: "foot-per-second", to: "mile-per-hour" },
    { label: "Foot per Second to Meter per Second", from: "foot-per-second", to: "meter-per-second" }
  ],
  references: [
    "NASA Glenn Research Center - Mach Number Equations and Sound Speed",
    "SAAMI (Sporting Arms and Ammunition Manufacturers' Institute) - Technical Standards for Velocity and Pressure",
    "ISO 2533: Standard Atmosphere"
  ]
};
