import { CustomArticleData } from "./types";

export const machToFootPerSecond: CustomArticleData = {
  fromUnitId: "mach",
  toUnitId: "foot-per-second",
  seoTitle: "Mach to Foot per Second Converter (M to ft/s) - Speed of Sound",
  metaDescription: "Convert Mach numbers to feet per second (M to ft/s) accurately. Master the 1,125.33 multiplier formula, ballistics muzzle velocities, acoustics, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/mach-to-foot-per-second",
  h1: "Mach to Foot per Second Converter",
  introduction: [
    "Converting Mach numbers to feet per second translates dimensionless aerodynamic compressibility metrics into the standard velocity unit of U.S. customary aerospace engineering, projectile ballistics, and acoustical engineering. While aerodynamicists classify aircraft performance into subsonic, transonic, and supersonic regimes using Mach numbers, American wind tunnels, firearm ballistic software, and shock tube laboratories record flow velocities, muzzle velocities, and shockwave propagation in feet per second.",
    "The Mach number (M) measures true vehicle airspeed relative to the local speed of sound in the ambient atmosphere ($M = v / a$). At standard sea-level atmospheric conditions (20 °C or 293.15 K, 1 atm), the speed of sound in dry air is approximately 343 meters per second. In the U.S. customary system, one international foot is defined as exactly 0.3048 meters. Dividing 343 by 0.3048 reveals that Mach 1.0 corresponds to approximately 1,125.328 feet per second under standard sea-level conditions.",
    "To convert a Mach number to feet per second at standard conditions, multiply the Mach value by approximately 1,125.328 (or divide by 0.00088863). For example, a commercial transport cruising at Mach 0.82 travels at approximately 922.77 ft/s, while a Mach 2.0 military fighter reaches 2,250.66 ft/s. This technical reference guide explains the conversion mathematics, ballistic sound thresholds, practical examples, and an extensive velocity lookup table."
  ],
  quickAnswer: {
    text: "To convert Mach to feet per second at standard sea level (20 °C, 1 atm), multiply the Mach number by 1,125.328 (or divide by 0.00088863). For example, Mach 0.8 equals approximately 900.26 ft/s, and Mach 2.0 equals 2,250.66 ft/s.",
    formulaDisplay: "ft/s = Mach × 1,125.328",
    subtext: "Standard sea-level sound speed = 1,125.328 ft/s | 1 ft/s ≈ 0.00088863 Mach"
  },
  aboutSourceUnit: {
    title: "Understanding the Mach Number (M)",
    text: "The Mach number is a dimensionless velocity ratio comparing true airspeed to the local acoustic sound speed in the ambient fluid. Named after Austrian physicist Ernst Mach, it defines critical aerodynamic compressibility boundaries: subsonic (M < 0.8), transonic (0.8 ≤ M ≤ 1.2), supersonic (1.2 < M < 5.0), and hypersonic (M ≥ 5.0)."
  },
  aboutTargetUnit: {
    title: "Understanding the Foot per Second (ft/s)",
    text: "The foot per second (ft/s or fps) is the fundamental speed unit in the U.S. customary and British imperial systems, measuring the distance in feet traveled in one second. It is the universal standard for American firearms ammunition velocity ratings, ballistics tables, aerodynamic drag coefficients, and blast wave physics."
  },
  relationship: "Under standard sea-level atmospheric conditions (20 °C), Mach 1.0 equals approximately 1,125.328 feet per second. Conversely, one foot per second equals approximately 0.00088863 Mach. Multiplying any Mach value by 1,125.328 converts it directly into feet per second.",
  relationshipTitle: "Mach to Foot per Second Ballistic & Aviation Milestones",
  relationshipItems: [
    { label: "Mach 0.3 (Incompressible aerodynamic flow)", value: "337.60 ft/s" },
    { label: "Mach 0.82 (Commercial jetliner cruise)", value: "922.77 ft/s" },
    { label: "Mach 0.95 (Subsonic rimfire rifle ceiling)", value: "1,069.06 ft/s" },
    { label: "Mach 1.0 (Sonic threshold / Sea level)", value: "1,125.33 ft/s" },
    { label: "Mach 2.0 (Concorde cruise velocity)", value: "2,250.66 ft/s" },
    { label: "Mach 2.75 (5.56mm rifle muzzle velocity)", value: "3,094.65 ft/s" }
  ],
  formula: {
    text: "Multiply the Mach number by 1,125.328 (the standard sea-level speed of sound in ft/s) to calculate feet per second.",
    math: "\\text{ft/s} = M \\times \\frac{343}{0.3048} \\approx M \\times 1,125.328",
    subtext: "To convert feet per second back to Mach, divide the ft/s value by 1,125.328 (or multiply by 0.00088863)."
  },
  formulaTitle: "Mach to Foot per Second Calculation Formula",
  practicalTip: {
    title: "1,125 Multiplier Mental Shortcut",
    text: "For rapid mental calculation, multiply the Mach number by 1,125. For example, Mach 0.5 × 1,125 ≈ 562.5 ft/s; Mach 2 × 1,125 = 2,250 ft/s (virtually identical to the precise 2,250.66 ft/s)."
  },
  expertNote: {
    title: "Small Arms Subsonic vs Supersonic Ballistics",
    text: "In firearms and suppressor engineering, ammunition rated below ~1,100 ft/s at sea level is classified as 'subsonic'. Subsonic bullets avoid creating the loud ballistic crack of a supersonic shockwave (Mach wave). For instance, standard .45 ACP ammunition leaves the barrel around 850 ft/s (Mach 0.76, naturally subsonic), while high-velocity rifle cartridges exceed 3,000 ft/s (Mach 2.67), generating a distinctive supersonic crack."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Transonic Airliner Cruise (Mach 0.80)",
        subtitle: "A commercial jet cruises at Mach 0.80. Convert this velocity into feet per second at standard sea-level sound speed.",
        steps: [
          "State starting Mach number: M = 0.80.",
          "Apply conversion multiplier: ft/s = 0.80 × 1,125.328.",
          "Calculate: 0.80 × 1,125.328 ≈ 900.262.",
          "Result: Mach 0.80 equals approximately 900.26 feet per second."
        ]
      },
      {
        title: "Example 2: Supersonic Fighter Dash (Mach 1.6)",
        subtitle: "A military interceptor dashes at Mach 1.6 during a training exercise. Calculate the flight speed in feet per second.",
        steps: [
          "Identify Mach value: M = 1.6.",
          "Multiply by 1,125.328: 1.6 × 1,125.328 ≈ 1,800.525.",
          "Result: Mach 1.6 corresponds to approximately 1,800.52 feet per second."
        ]
      },
      {
        title: "Example 3: Rocket Sled Track Run (Mach 3.5)",
        subtitle: "A hypersonic test sled accelerates to Mach 3.5 along a desert track. Express this velocity in feet per second.",
        steps: [
          "State starting value: M = 3.5.",
          "Multiply by 1,125.328: 3.5 × 1,125.328 ≈ 3,938.648.",
          "Result: Mach 3.5 equals approximately 3,938.65 feet per second."
        ]
      }
    ]
  },
  table: {
    title: "Mach to Foot per Second Reference Table (Standard Sea Level)",
    headers: ["Mach Number (M)", "Speed (ft/s)", "Speed (mph)", "Ballistic & Aeronautical Context"],
    rows: [
      { fromVal: "0.1 M", toVal: "112.53 ft/s", extra: "76.73 mph", extra2: "Subsonic wind tunnel calibration" },
      { fromVal: "0.3 M", toVal: "337.60 ft/s", extra: "230.18 mph", extra2: "Incompressible aerodynamic flow limit" },
      { fromVal: "0.5 M", toVal: "562.66 ft/s", extra: "383.64 mph", extra2: "Subsonic propeller tip speed" },
      { fromVal: "0.7 M", toVal: "787.73 ft/s", extra: "537.09 mph", extra2: "Subsonic jet approach descent" },
      { fromVal: "0.8 M", toVal: "900.26 ft/s", extra: "613.82 mph", extra2: "Standard commercial airliner cruise" },
      { fromVal: "0.9 M", toVal: "1,012.80 ft/s", extra: "690.54 mph", extra2: "Subsonic rifle cartridge upper limit" },
      { fromVal: "1.0 M", toVal: "1,125.33 ft/s", extra: "767.27 mph", extra2: "Sound barrier (Standard Sea Level)" },
      { fromVal: "1.2 M", toVal: "1,350.39 ft/s", extra: "920.72 mph", extra2: "Supersonic transition / Handgun cartridge" },
      { fromVal: "1.5 M", toVal: "1,687.99 ft/s", extra: "1,150.90 mph", extra2: "Supersonic tactical fighter cruise" },
      { fromVal: "2.0 M", toVal: "2,250.66 ft/s", extra: "1,534.54 mph", extra2: "Concorde cruise / Shotgun slug speed" },
      { fromVal: "3.0 M", toVal: "3,375.98 ft/s", extra: "2,301.81 mph", extra2: "Centerfire rifle bullet muzzle velocity" },
      { fromVal: "5.0 M", toVal: "5,626.64 ft/s", extra: "3,836.35 mph", extra2: "Hypersonic regime threshold" }
    ]
  },
  applications: {
    title: "Ballistics & Aerospace Applications",
    items: [
      {
        title: "Firearm Ballistics & Suppressor Engineering",
        text: "Ballisticians design suppressed ammunition to remain under 1,080–1,120 ft/s to avoid the sonic crack, converting chronograph ft/s readings to local Mach numbers."
      },
      {
        title: "Supersonic Wind Tunnel Aerodynamics",
        text: "Aerodynamic researchers convert test section flow velocities from Mach numbers into ft/s to calculate dynamic pressure ($q = 0.5 \\rho v^2$) on scaled wing models."
      },
      {
        title: "Rocket Acoustic & Blast Wave Overpressure",
        text: "Launch pad acoustic suppression engineers model rocket exhaust shear velocities by converting Mach numbers into feet per second to mitigate sound levels."
      },
      {
        title: "Aircraft Propeller Tip Speed Analysis",
        text: "Aeronautical engineers calculate rotating blade tip velocities in ft/s, checking against Mach 1.0 to prevent severe propeller noise and blade stalling."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming Mach 1 is always 1,125 ft/s: The speed of sound depends on air temperature. On a hot summer day (35 °C), sound travels at ~1,155 ft/s; on a freezing day (-10 °C), it drops to ~1,067 ft/s.",
      "Dividing instead of multiplying: To convert Mach to ft/s, multiply by 1,125.328. Dividing converts ft/s back into Mach.",
      "Confusing ft/s with mph: 1 Mach is approximately 1,125 ft/s, but only 767 mph. Mixing up these units produces an error of over 46%.",
      "Overlooking altitude temperature effects: In the cold upper troposphere (-56.5 °C), Mach 1 is only about 968 ft/s, compared to 1,125 ft/s at sea level."
    ]
  },
  faqs: [
    {
      question: "How do you convert Mach to feet per second?",
      answer: "Multiply the Mach number by the speed of sound in feet per second (approximately 1,125.328 ft/s at standard sea level): ft/s = Mach × 1,125.328."
    },
    {
      question: "How many feet per second is Mach 1?",
      answer: "At standard sea level (20 °C, 1 atm), Mach 1 is approximately 1,125.33 feet per second (or 1,116.4 ft/s at standard ISA 15 °C)."
    },
    {
      question: "What is Mach 0.8 in feet per second?",
      answer: "Mach 0.8 multiplied by 1,125.328 equals approximately 900.26 feet per second."
    },
    {
      question: "What is Mach 2 in feet per second?",
      answer: "Mach 2 multiplied by 1,125.328 equals approximately 2,250.66 feet per second."
    },
    {
      question: "What is Mach 3 in feet per second?",
      answer: "Mach 3 multiplied by 1,125.328 equals approximately 3,375.98 feet per second."
    },
    {
      question: "How do you convert feet per second back to Mach?",
      answer: "Divide the speed in feet per second by 1,125.328: Mach = ft/s ÷ 1,125.328."
    },
    {
      question: "What speed in ft/s is considered subsonic for ammunition?",
      answer: "Ammunition traveling below roughly 1,100 ft/s at sea level is generally considered subsonic, preventing the loud sonic boom crack."
    },
    {
      question: "What is 3,000 ft/s in Mach?",
      answer: "3,000 ft/s divided by 1,125.328 equals approximately Mach 2.67 (common for high-velocity rifle rounds)."
    },
    {
      question: "Why does the ft/s speed of sound change with temperature?",
      answer: "Sound propagates through molecular collisions in gas. Warmer molecules have higher kinetic energy and collide faster, increasing acoustic velocity."
    },
    {
      question: "What is Mach 5 (hypersonic) in feet per second?",
      answer: "Mach 5 multiplied by 1,125.328 equals approximately 5,626.64 feet per second (over a mile every second)."
    }
  ],
  relatedList: [
    { label: "Mach to Meter per Second", from: "mach", to: "meter-per-second" },
    { label: "Mach to Kilometer per Hour", from: "mach", to: "kilometer-per-hour" },
    { label: "Mach to Mile per Hour", from: "mach", to: "mile-per-hour" },
    { label: "Mach to Knot", from: "mach", to: "knot" },
    { label: "Foot per Second to Mach", from: "foot-per-second", to: "mach" }
  ],
  references: [
    "SAAMI (Sporting Arms and Ammunition Manufacturers' Institute) Standards",
    "ISO 2533:1975 — Standard Atmosphere",
    "Anderson, J.D. (2017) — Fundamentals of Aerodynamics (McGraw-Hill)"
  ]
};
