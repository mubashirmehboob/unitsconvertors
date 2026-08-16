import { CustomArticleData } from "./types";

export const footPerSecondSquaredToMeterPerSecondSquared: CustomArticleData = {
  fromUnitId: "foot-per-second-squared",
  toUnitId: "meter-per-second-squared",
  seoTitle: "Foot/sec² to Meter/sec² Converter (ft/s² to m/s²)",
  metaDescription: "Convert feet per second squared to meters per second squared (ft/s² to m/s²) with exact international conversion constants, physics formulas, and worked examples.",
  h1: "Foot/sec² to Meter/sec² Converter",
  introduction: [
    "The foot per second squared (ft/s²) and the meter per second squared (m/s²) are the foundational units of acceleration in the imperial/US customary and SI metric systems, respectively. While ft/s² is extensively utilized in United States aerospace engineering, structural dynamics, and legacy military ballistics, m/s² is the universally recognized SI coherent derived unit used across global scientific research, international automotive compliance, and kinematics modeling.",
    "Converting feet per second squared to meters per second squared is necessary when importing US aerodynamic flight test data into international simulation suites, calibrating triaxial accelerometers, or harmonizing structural vibration measurements. Under the 1959 International Yard and Pound Agreement, an international foot is legally fixed at exactly 0.3048 meters. Therefore, one foot per second squared equals exactly 0.3048 meters per second squared.",
    "This technical guide provides the exact mathematical derivation, step-by-step engineering calculation examples, reference conversion tables, and expert advice to ensure error-free dimensional analysis."
  ],
  quickAnswer: {
    text: "To convert feet per second squared (ft/s²) to meters per second squared (m/s²), multiply the acceleration value by exactly 0.3048. For instance, standard Earth gravity of 32.174 ft/s² equals approximately 9.80665 m/s².",
    formulaDisplay: "\\text{m/s}^2 = \\text{ft/s}^2 \\times 0.3048",
    subtext: "1 ft/s² is equal to exactly 0.3048 m/s² by international definition."
  },
  aboutSourceUnit: {
    title: "Understanding the Foot per Second Squared (ft/s²)",
    text: "The foot per second squared (symbol: ft/s² or ft/sec²) is the imperial and US customary unit of acceleration. It quantifies an acceleration rate where velocity changes by one foot per second every second (1 ft/s² = 1 (ft/s)/s), widely referenced in US civil engineering, aircraft performance documentation, and ballistics."
  },
  aboutTargetUnit: {
    title: "Understanding the Meter per Second Squared (m/s²)",
    text: "The meter per second squared (symbol: m/s²) is the SI coherent derived unit of acceleration. Formally defined as an acceleration producing a velocity change of one meter per second in one second, it is the international standard across classical mechanics, robotics, orbital astrodynamics, and ISO automotive testing."
  },
  relationship: "The relationship between feet per second squared and meters per second squared is exact: 1 international foot is defined as exactly 0.3048 meters. Since time (seconds) is identical in both systems, 1 ft/s² = 0.3048 m/s² exactly. Conversely, 1 m/s² = 1 / 0.3048 ≈ 3.280839895 ft/s².",
  relationshipTitle: "Acceleration Equivalence Across Systems",
  relationshipItems: [
    { label: "1 ft/s²", value: "0.30480 m/s² (Exact definition benchmark)" },
    { label: "5 ft/s²", value: "1.52400 m/s² (Comfortable passenger elevator motion)" },
    { label: "10 ft/s²", value: "3.04800 m/s² (Moderate automotive braking)" },
    { label: "32.174 ft/s²", value: "9.80665 m/s² (Standard Earth gravity, 1 g)" },
    { label: "100 ft/s²", value: "30.48000 m/s² (High-speed aircraft catapult launch)" }
  ],
  formula: {
    text: "Multiply the acceleration in feet per second squared by 0.3048 to obtain the value in meters per second squared.",
    math: "a_{(\\text{m/s}^2)} = a_{(\\text{ft/s}^2)} \\times 0.3048",
    subtext: "0.3048 is an exact conversion factor established by international treaty."
  },
  formulaTitle: "ft/s² to m/s² Conversion Formula",
  practicalTip: {
    title: "Quick Mental Calculation Rule",
    text: "To approximate m/s² from ft/s² in your head, multiply by 0.3 (or divide by 3 and subtract roughly 1.5%). For example, 30 ft/s² → 30 × 0.3 = 9.0; adding 1.5% gives ~9.14 m/s², very close to the exact 9.144 m/s²."
  },
  expertNote: {
    title: "US Customary vs Metric Engineering Systems",
    text: "In US customary structural calculations, weight is often given in pounds-force (lbf) and mass in slugs (where 1 slug = 1 lbf·s²/ft = 14.5939 kg). When converting dynamic equations (F = m × a) to SI, convert mass to kilograms and acceleration from ft/s² to m/s² to obtain force in Newtons."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: US Aircraft Catapult Acceleration",
        subtitle: "A naval aircraft catapult accelerates a jet down the deck at an average rate of 125 ft/s². Convert this to SI units (m/s²).",
        steps: [
          "State the acceleration in US units: a = 125 ft/s².",
          "Apply the exact multiplier: 125 × 0.3048.",
          "Compute: 125 × 0.3048 = 38.1.",
          "Result: 125 ft/s² equals exactly 38.1 m/s² (approximately 3.88 g)."
        ]
      },
      {
        title: "Example 2: Elevator Descent Deceleration Rate",
        subtitle: "A commercial high-rise elevator decelerates comfortably at 4.2 ft/s². Express this rate in meters per second squared.",
        steps: [
          "Identify the value: a = 4.2 ft/s².",
          "Multiply by 0.3048: 4.2 × 0.3048.",
          "Calculate: 4.2 × 0.3048 = 1.28016.",
          "Result: 4.2 ft/s² equals approximately 1.28 m/s²."
        ]
      }
    ]
  },
  table: {
    title: "Quick Reference Conversion Table",
    headers: ["Input Value", "Converted Result", "Physical Context"],
    rows: [
      { fromVal: "0.5", toVal: "0.152400", extra: "Light building floor vibration" },
      { fromVal: "1.0", toVal: "0.304800", extra: "Exact conversion baseline" },
      { fromVal: "2.0", toVal: "0.609600", extra: "Slow elevator motion" },
      { fromVal: "5.0", toVal: "1.524000", extra: "Standard passenger vehicle acceleration" },
      { fromVal: "10.0", toVal: "3.048000", extra: "Spirited automotive driving" },
      { fromVal: "20.0", toVal: "6.096000", extra: "High-performance sports car launch" },
      { fromVal: "32.174", toVal: "9.806635", extra: "Standard 1 g Earth gravity (approx.)" },
      { fromVal: "50.0", toVal: "15.240000", extra: "Stunt aircraft aerial loop" },
      { fromVal: "100.0", toVal: "30.480000", extra: "Aerospace rocket booster burn" },
      { fromVal: "250.0", toVal: "76.200000", extra: "Missile interceptor stage ignition" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "Aerospace Flight Dynamics & Avionics Calibration",
        text: "Flight data recorders from US-built aircraft record inertial acceleration in ft/s², which international investigation boards and simulation teams convert to m/s² for aerodynamic modeling."
      },
      {
        title: "Structural Engineering & Earthquake Shake Tables",
        text: "US seismic laboratory test rigs calibrate shake table actuators in ft/s², converting to m/s² to comply with international civil engineering performance standards."
      },
      {
        title: "Ballistics & Projectile Trajectory Computation",
        text: "Defense modeling programs convert initial muzzle acceleration and drag deceleration from ft/s² to m/s² for NATO-standard trajectory calculations."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Multiplying by 3.28084 Instead of 0.3048: Multiplying by 3.28084 converts m/s² to ft/s². To convert ft/s² to m/s², you must multiply by 0.3048 (or divide by 3.28084).",
      "Squaring 0.3048 Unnecessarily: Because only length changes (ft to m) while time remains in seconds, the conversion factor is linear (0.3048), not squared (0.0929).",
      "Confusing ft/s² with ft/min² or ft/s: Always confirm that the time base is seconds squared, rather than velocity in feet per second (ft/s)."
    ]
  },
  faqs: [
    {
      question: "How do I convert ft/s² to m/s²?",
      answer: "Multiply the acceleration in ft/s² by exactly 0.3048. For example, 10 ft/s² × 0.3048 = 3.048 m/s²."
    },
    {
      question: "What is 1 ft/s² in m/s²?",
      answer: "1 ft/s² is exactly equal to 0.3048 m/s²."
    },
    {
      question: "What is Earth's standard gravity in ft/s² and m/s²?",
      answer: "Standard gravity is defined as exactly 9.80665 m/s², which equals approximately 32.17405 ft/s²."
    },
    {
      question: "Why is the conversion factor exactly 0.3048?",
      answer: "Under the 1959 International Yard and Pound Agreement, the international foot was legally defined as exactly 0.3048 meters."
    },
    {
      question: "How do I convert m/s² back to ft/s²?",
      answer: "Divide the m/s² value by 0.3048, or multiply by 3.2808399. For example, 9.80665 m/s² ÷ 0.3048 ≈ 32.17405 ft/s²."
    },
    {
      question: "How many g's is 32.174 ft/s²?",
      answer: "32.174 ft/s² corresponds to exactly 1.0 g of standard terrestrial acceleration."
    },
    {
      question: "Is ft/s² used in scientific publications?",
      answer: "While international scientific journals require SI units (m/s²), ft/s² remains common in US civil, aerospace, and mechanical engineering literature."
    },
    {
      question: "What is the relationship between ft/s² and mph/s?",
      answer: "1 mph/s equals exactly 1.466667 ft/s² (22/15 ft/s²), since 1 mph = 1.466667 ft/s."
    }
  ],
  relatedList: [
    { label: "Meter/sec² to Foot/sec²", from: "meter-per-second-squared", to: "foot-per-second-squared" },
    { label: "Foot/sec² to Standard Gravity (g)", from: "foot-per-second-squared", to: "gravity-acceleration" },
    { label: "Foot/sec² to Gal", from: "foot-per-second-squared", to: "gal-acceleration" },
    { label: "Foot/sec² to Milligal", from: "foot-per-second-squared", to: "milligal-acceleration" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - NIST Guide to the SI (Special Publication 811)",
    "Bureau International des Poids et Mesures (BIPM) - BIPM SI Brochure: The International System of Units",
    "International Organization for Standardization (ISO) - ISO 80000-3:2019 Quantities and Units — Space and Time"
  ]
};
