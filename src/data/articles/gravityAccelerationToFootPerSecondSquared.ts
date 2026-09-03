import { CustomArticleData } from "./types";

export const gravityAccelerationToFootPerSecondSquared: CustomArticleData = {
  fromUnitId: "gravity-acceleration",
  toUnitId: "foot-per-second-squared",
  seoTitle: "Standard Gravity (g) to Foot/sec² Converter (g to ft/s²)",
  metaDescription: "Convert standard gravity (g) to feet per second squared (ft/s²) with exact US customary engineering constants, aerospace flight load calculations, and worked examples.",
  h1: "Standard Gravity (g) to Foot/sec² Converter",
  introduction: [
    "Standard gravity (symbol: g) and the foot per second squared (ft/s²) are the central units used to represent gravitational acceleration and inertial load factors in US customary engineering. While g serves as an intuitive dimensionless multiple of Earth's gravity in aerospace flight testing and military aviation, ft/s² is the foundational dimensional kinematic unit required for mechanical calculations involving slugs, pounds-force, and trajectory kinematics.",
    "Converting g-force into feet per second squared is standard practice in American aeronautical design, structural vibration analysis, naval catapult validation, and ballistics modeling. Since standard gravity is defined as exactly 9.80665 m/s² and one international foot equals exactly 0.3048 meters, standard gravity converts to approximately 32.17405 ft/s² (9.80665 ÷ 0.3048).",
    "This engineering guide provides the exact mathematical derivation, practical rules for mental calculation, worked aerospace examples, comprehensive reference tables, and answers to common technical questions."
  ],
  quickAnswer: {
    text: "To convert standard gravity (g) to feet per second squared (ft/s²), multiply the g-value by approximately 32.17405 (or 9.80665 ÷ 0.3048). For example, an acceleration of 3 g equals approximately 96.522 ft/s².",
    formulaDisplay: "\\text{ft/s}^2 = g \\times \\frac{9.80665}{0.3048} \\approx g \\times 32.17405",
    subtext: "1 g is equal to approximately 32.17405 ft/s² (32.17404856... ft/s²)."
  },
  aboutSourceUnit: {
    title: "Understanding Standard Gravity (g)",
    text: "Standard gravity (symbol: g, or g₀) is an internationally agreed constant established by the 3rd CGPM in 1901. Defined as exactly 9.80665 m/s², it provides a universal benchmark representing standard nominal gravity at sea level. In aviation and defense, dynamic accelerations are routinely expressed as g-multiples ('pulling 5 g's')."
  },
  aboutTargetUnit: {
    title: "Understanding the Foot per Second Squared (ft/s²)",
    text: "The foot per second squared (symbol: ft/s² or ft/sec²) is the base unit of linear acceleration in the English engineering and US customary systems. It quantifies a rate of velocity change of one foot per second every second. In US dynamic equations (F = m × a), using mass in slugs and acceleration in ft/s² yields force directly in pounds-force (lbf)."
  },
  relationship: "The relationship between standard gravity and feet per second squared derives from the ratio of standard SI gravity (9.80665 m/s²) to the international foot definition (0.3048 m): 9.80665 / 0.3048 = 32.174048556... ft/s². Conversely, one foot per second squared equals 0.3048 / 9.80665 ≈ 0.031081 g.",
  relationshipTitle: "G-Force to Imperial Acceleration Milestones",
  relationshipItems: [
    { label: "0.03108 g", value: "1.00000 ft/s² (Exact 1 ft/s² equivalence)" },
    { label: "0.5 g", value: "16.08702 ft/s² (Moderate automotive braking)" },
    { label: "1.0 g", value: "32.17405 ft/s² (Standard terrestrial gravity baseline)" },
    { label: "2.0 g", value: "64.34810 ft/s² (Aerobatic aircraft sustained pull-up)" },
    { label: "4.0 g", value: "128.69619 ft/s² (High-intensity roller coaster inversion)" },
    { label: "7.0 g", value: "225.21834 ft/s² (Tactical air combat high-rate turn)" }
  ],
  formula: {
    text: "Multiply the acceleration in standard gravity units (g) by 32.17405 to calculate feet per second squared.",
    math: "a_{(\\text{ft/s}^2)} = a_{(g)} \\times 32.17405",
    subtext: "Exact ratio: a(ft/s²) = a(g) × (9.80665 ÷ 0.3048)."
  },
  formulaTitle: "g to ft/s² Conversion Formula",
  practicalTip: {
    title: "Rule-of-Thumb Estimation",
    text: "In quick workshop estimations, engineers frequently use 32.2 ft/s² for 1 g. For example, 4 g is approximately 4 × 32.2 = 128.8 ft/s², which is within 0.08% of the exact 128.70 ft/s²."
  },
  expertNote: {
    title: "Weight and Mass in US Customary Units",
    text: "In US customary mechanics, an object with a mass of 1 slug weighs exactly 32.174 pounds-force (lbf) at standard gravity: W = m × g = 1 slug × 32.174 ft/s² = 32.174 lbf. Alternatively, in the pound-mass (lbm) system, 1 lbf accelerates a 1 lbm body at 32.174 ft/s² (via the gravitational constant gc = 32.174 lbm·ft/(lbf·s²))."
  },
  examples: {
    title: "Step-by-Step Aerospace & Mechanical Calculations",
    items: [
      {
        title: "Example 1: Aerobatic Turn Structural Load",
        subtitle: "A military pilot pulls an sustained 6.0 g turn in an aerobatic demonstration. Calculate the airframe acceleration in feet per second squared.",
        steps: [
          "Identify the g-load: a = 6.0 g.",
          "Multiply by the conversion factor: 6.0 × 32.17405.",
          "Compute: 6.0 × 32.17405 = 193.0443.",
          "Result: 6.0 g corresponds to an acceleration of approximately 193.04 ft/s²."
        ]
      },
      {
        title: "Example 2: Rocket Sled Deceleration Test",
        subtitle: "A high-speed rocket sled braking test subjects a payload to an abrupt deceleration of 15.0 g. Express this deceleration in ft/s².",
        steps: [
          "State the deceleration value: a = 15.0 g.",
          "Multiply by 32.17405: 15.0 × 32.17405.",
          "Compute: 15.0 × 32.17405 = 482.61075.",
          "Result: The payload decelerates at approximately 482.61 ft/s²."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: g to ft/s²",
    headers: ["G-Force (g)", "Acceleration (ft/s²)", "Operational & Engineering Context"],
    rows: [
      { fromVal: "0.1", toVal: "3.2174", extra: "Commercial jetliner turbulence" },
      { fromVal: "0.25", toVal: "8.0435", extra: "Highway emergency stopping" },
      { fromVal: "0.5", toVal: "16.0870", extra: "Aggressive passenger car braking" },
      { fromVal: "1.0", toVal: "32.1740", extra: "Terrestrial gravity nominal standard" },
      { fromVal: "1.5", toVal: "48.2611", extra: "Elevator rapid stop deceleration" },
      { fromVal: "2.0", toVal: "64.3481", extra: "Space launch initial booster phase" },
      { fromVal: "3.0", toVal: "96.5221", extra: "Astronaut peak atmospheric ascent" },
      { fromVal: "5.0", toVal: "160.8702", extra: "Aerobatic loop entry point" },
      { fromVal: "8.0", toVal: "257.3924", extra: "Tactical air combat high-G turn" },
      { fromVal: "20.0", toVal: "643.4810", extra: "Automotive crash test barrier deceleration" }
    ]
  },
  applications: {
    title: "Real-World Aerospace & Engineering Applications",
    items: [
      {
        title: "Aircraft Stress & Airframe Structural Analysis",
        text: "US Federal Aviation Administration (FAA) aircraft design standards specify limit load factors in g's (+2.5 g to +3.8 g for transport aircraft). Structural engineers convert these factors to ft/s² to determine wing bending moments."
      },
      {
        title: "Rocket Propulsion & Trajectory Integration",
        text: "Aerospace navigation filters integrate accelerometer telemetry in ft/s² to track vehicle altitude, downrange velocity, and orbital insertion parameters."
      },
      {
        title: "Military Ejection Seat Qualification",
        text: "Escape system tests evaluate catapult spinal acceleration in g's (up to 18 g). Converting to ft/s² allows dynamic simulation of rocket pack burn profiles and stabilization drogue deployment."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Using 32 ft/s² instead of 32.174 ft/s²: While rounding to 32 is common in introductory school problems, doing so produces a 0.54% error, which is unacceptable in structural flight safety calculations.",
      "Inverting the conversion: Multiplying ft/s² by 32.174 instead of dividing will result in massive calculation errors. Remember: 1 g is 32.174 ft/s², so dividing ft/s² by 32.174 yields g.",
      "Confusing slugs with pounds-mass: Remember that if acceleration is in ft/s², force in lbf requires mass in slugs, not pounds-mass (1 slug = 32.174 lbm)."
    ]
  },
  faqs: [
    {
      question: "How do you convert g to ft/s²?",
      answer: "Multiply the g-value by approximately 32.17405 (9.80665 ÷ 0.3048). For example, 2 g × 32.17405 = 64.3481 ft/s²."
    },
    {
      question: "What is 1 g in feet per second squared?",
      answer: "1 g is equal to approximately 32.17405 ft/s² (commonly rounded to 32.174 ft/s²)."
    },
    {
      question: "Why does 1 g equal 32.174 ft/s²?",
      answer: "Standard gravity is defined as 9.80665 m/s². Since 1 foot is exactly 0.3048 meters, 9.80665 ÷ 0.3048 = 32.17404856... ft/s²."
    },
    {
      question: "How do you convert ft/s² back to g?",
      answer: "Divide the ft/s² value by 32.17405, or multiply by approximately 0.031081. For instance, 64.35 ft/s² ÷ 32.17405 ≈ 2.0 g."
    },
    {
      question: "What is 3 g in ft/s²?",
      answer: "3 g equals approximately 96.522 ft/s² (3 × 32.17405)."
    },
    {
      question: "Is 32.2 ft/s² accurate enough for engineering?",
      answer: "32.2 ft/s² is an acceptable approximation for rough field estimates (error ~0.08%), but precision aerospace and mechanical work requires at least 32.174 ft/s²."
    },
    {
      question: "How many g's is an acceleration of 100 ft/s²?",
      answer: "100 ft/s² divided by 32.17405 equals approximately 3.108 g."
    },
    {
      question: "How does this relate to the slug unit of mass?",
      answer: "One slug is defined as the mass that accelerates at 1 ft/s² when acted upon by 1 pound-force (1 slug = 1 lbf·s²/ft). Under standard gravity of 32.174 ft/s², 1 slug weighs 32.174 lbf."
    }
  ],
  relatedList: [
    { label: "Standard Gravity (g) to Meter/sec²", from: "gravity-acceleration", to: "meter-per-second-squared" },
    { label: "Standard Gravity (g) to MPH/s", from: "gravity-acceleration", to: "mile-per-hour-second" },
    { label: "Standard Gravity (g) to KM/h/s", from: "gravity-acceleration", to: "kilometer-per-hour-second" },
    { label: "Foot/sec² to Standard Gravity (g)", from: "foot-per-second-squared", to: "gravity-acceleration" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - Guide for the Use of the International System of Units (SI) SP 811",
    "Federal Aviation Administration (FAA) - Code of Federal Regulations Title 14 Part 25 (Airworthiness Standards)",
    "NASA Technical Reports Server (NTRS) - Atmospheric Flight Mechanics and Trajectory Constants"
  ]
};
