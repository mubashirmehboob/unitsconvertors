import { CustomArticleData } from "./types";

export const gravityAccelerationToMeterPerSecondSquared: CustomArticleData = {
  fromUnitId: "gravity-acceleration",
  toUnitId: "meter-per-second-squared",
  seoTitle: "Standard Gravity (g) to Meter/sec² Converter (g to m/s²)",
  metaDescription: "Convert standard gravity (g) to meters per second squared (m/s²) with exact international definitions, aerospace g-load physics, and step-by-step examples.",
  h1: "Standard Gravity (g) to Meter/sec² Converter",
  introduction: [
    "Standard gravity (symbol: g, or g₀ / gₙ) and the meter per second squared (m/s²) are fundamental units for quantifying gravitational field intensity and inertial dynamic loads. While the meter per second squared is the coherent derived unit of acceleration in the International System of Units (SI), standard gravity is an internationally standardized reference value representing the nominal acceleration experienced by a free-falling body at Earth's surface.",
    "Converting g-force to meters per second squared is essential across aerospace engineering, flight simulation, roller coaster structural design, and human tolerance biomechanics. Established by the 3rd General Conference on Weights and Measures (CGPM) in 1901, standard acceleration of gravity is legally defined as exactly 9.80665 m/s². Therefore, any acceleration given in g multiples is converted to SI units by multiplying by 9.80665.",
    "This comprehensive reference guide details the formal metrological history, explains how g-force relates to true weight and apparent weight, provides worked calculation examples, and includes extensive reference tables."
  ],
  quickAnswer: {
    text: "To convert standard gravity (g) to meters per second squared (m/s²), multiply the g-value by exactly 9.80665. For example, a pilot executing a 4 g turn experiences an acceleration of exactly 39.2266 m/s².",
    formulaDisplay: "\\text{m/s}^2 = g \\times 9.80665",
    subtext: "1 g is defined by international agreement as exactly 9.80665 m/s²."
  },
  aboutSourceUnit: {
    title: "Understanding Standard Gravity (g)",
    text: "Standard gravity (symbol: g, also denoted g₀ or gₙ) is a conventional constant representing standard nominal acceleration at sea level at 45° latitude. Adopted by the CGPM in 1901 and codified in ISO 80000-3, 1 g equals exactly 9.80665 m/s². In everyday engineering and aviation parlance, it is commonly termed 'g-force', although it strictly represents acceleration rather than force."
  },
  aboutTargetUnit: {
    title: "Understanding the Meter per Second Squared (m/s²)",
    text: "The meter per second squared (symbol: m/s²) is the coherent derived unit of acceleration in the International System of Units (SI). It specifies an acceleration where velocity increases by one meter per second every second. It forms the core kinematic parameter across all Newtonian mechanical equations (F = m × a)."
  },
  relationship: "The relationship between standard gravity and meters per second squared is fixed by international metrological definition. Exactly 1 g is defined as 9.80665 m/s². Conversely, one meter per second squared corresponds to 1 / 9.80665 ≈ 0.1019716 g.",
  relationshipTitle: "G-Force to SI Acceleration Benchmarks",
  relationshipItems: [
    { label: "0.102 g", value: "1.00000 m/s² (1 m/s² benchmark in g-units)" },
    { label: "0.5 g", value: "4.90333 m/s² (Emergency braking in a passenger vehicle)" },
    { label: "1.0 g", value: "9.80665 m/s² (Standard nominal terrestrial gravity)" },
    { label: "3.0 g", value: "29.41995 m/s² (Typical manned space capsule launch peak)" },
    { label: "5.0 g", value: "49.03325 m/s² (High-intensity stunt aircraft loop)" },
    { label: "9.0 g", value: "88.25985 m/s² (Modern jet fighter pilot operational limit)" }
  ],
  formula: {
    text: "Multiply the acceleration in standard gravity units (g) by 9.80665 to calculate the acceleration in meters per second squared.",
    math: "a_{(\\text{m/s}^2)} = a_{(g)} \\times 9.80665",
    subtext: "9.80665 is an exact constant established by the 3rd CGPM in 1901."
  },
  formulaTitle: "g to m/s² Conversion Formula",
  practicalTip: {
    title: "Mental Estimation in the Field",
    text: "To approximate m/s² from g in your head, multiply by 10 and subtract 2%. For example, 5 g → 5 × 10 = 50; subtracting 2% (1.0) yields 49.0 m/s², which is within 0.07% of the exact 49.033 m/s²."
  },
  expertNote: {
    title: "Gravitational vs Inertial Acceleration",
    text: "In aerospace telemetry, accelerometers measure proper acceleration (apparent g-load). When a fighter jet pulls +9 g in a turn, the pilot feels an apparent downward force 9 times their Earth weight. To integrate trajectory position, engineers subtract local gravity vector components before calculating velocity in m/s."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Space Shuttle Ascent G-Load",
        subtitle: "During atmospheric ascent, a crewed spacecraft throttles its main engines to limit crew acceleration to 3.0 g. Convert this limit to m/s².",
        steps: [
          "Identify the g-value: a = 3.0 g.",
          "Multiply by the exact constant 9.80665: 3.0 × 9.80665.",
          "Compute: 3.0 × 9.80665 = 29.41995.",
          "Result: 3.0 g corresponds to an acceleration of approximately 29.42 m/s²."
        ]
      },
      {
        title: "Example 2: Commercial Roller Coaster Element",
        subtitle: "The vertical loop on a thrill roller coaster imposes a peak vertical load of 4.5 g on riders. Determine the acceleration in meters per second squared.",
        steps: [
          "State the g-load: a = 4.5 g.",
          "Apply the formula: 4.5 × 9.80665.",
          "Calculate: 4.5 × 9.80665 = 44.129925.",
          "Result: 4.5 g equals approximately 44.13 m/s²."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: g to m/s²",
    headers: ["G-Force (g)", "Acceleration (m/s²)", "Physical / Biomechanical Context"],
    rows: [
      { fromVal: "0.1", toVal: "0.980665", extra: "Commercial jetliner cruising turbulence" },
      { fromVal: "0.5", toVal: "4.903325", extra: "Firm automotive braking" },
      { fromVal: "1.0", toVal: "9.806650", extra: "Standard Earth surface gravity baseline" },
      { fromVal: "1.5", toVal: "14.709975", extra: "Elevator rapid emergency arrest" },
      { fromVal: "2.0", toVal: "19.613300", extra: "Brisk aircraft aerobatic pitch" },
      { fromVal: "3.0", toVal: "29.419950", extra: "Apollo spacecraft re-entry nominal peak" },
      { fromVal: "4.0", toVal: "39.226600", extra: "Severe stunt aircraft aerial turn" },
      { fromVal: "6.0", toVal: "58.839900", extra: "Formula 1 braking cornering combination" },
      { fromVal: "9.0", toVal: "88.259850", extra: "F-16 fighter pilot turn sustained threshold" },
      { fromVal: "25.0", toVal: "245.166250", extra: "Severe automotive crash barrier impact peak" }
    ]
  },
  applications: {
    title: "Real-World Aerospace & Engineering Applications",
    items: [
      {
        title: "Aerospace Flight Testing & G-Suit Engineering",
        text: "Avionics software records airframe loads in g-units, which flight control computers convert to m/s² to compute state vectors and automate anti-G strain system pressurization."
      },
      {
        title: "Crash Safety Testing & Dummy Telemetry",
        text: "Automotive crash tests measure impact severity in g-forces (up to 50 g). Engineers convert these sensor readings to m/s² to compute Head Injury Criterion (HIC) impulse integrals."
      },
      {
        title: "Sensors & MEMS Accelerometer Calibration",
        text: "MEMS accelerometers in consumer smartphones and industrial robots are calibrated on 1 g tilt tables and convert voltage outputs into m/s² for inertial navigation."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Using 9.8 or 9.81 instead of 9.80665: In high-precision ballistic or orbital mechanics, approximating g as 9.8 introduces a 0.07% error that accumulates significantly over time.",
      "Confusing standard gravity (g) with local gravity: Local gravity varies from 9.78 m/s² at the equator to 9.83 m/s² at the poles. Standard gravity is a defined constant (9.80665 m/s²), not a measured local field.",
      "Confusing g with grams (g): In text notation, ensure the context clearly specifies standard gravity acceleration (g) rather than mass in grams (g)."
    ]
  },
  faqs: [
    {
      question: "How do you convert g to m/s²?",
      answer: "Multiply the number of g's by exactly 9.80665. For example, 2.5 g × 9.80665 = 24.516625 m/s²."
    },
    {
      question: "What is 1 g in m/s²?",
      answer: "1 g is defined by international convention as exactly 9.80665 m/s²."
    },
    {
      question: "Why is standard gravity defined as 9.80665 m/s²?",
      answer: "In 1901, the 3rd CGPM established 9.80665 m/s² as the conventional nominal value for Earth gravity at sea level and 45° latitude, creating a universal metrological benchmark."
    },
    {
      question: "How do you convert m/s² back to g?",
      answer: "Divide the acceleration in m/s² by 9.80665, or multiply by approximately 0.101972. For example, 19.62 m/s² ÷ 9.80665 ≈ 2.0 g."
    },
    {
      question: "How many m/s² is 5 g?",
      answer: "5 g equals exactly 49.03325 m/s² (5 × 9.80665)."
    },
    {
      question: "Is g a unit of force or acceleration?",
      answer: "Standard gravity (g) is a unit of acceleration. When multiplied by a body's mass (F = m × a), it determines the resulting gravitational or inertial force."
    },
    {
      question: "What is the maximum g-force a human can survive?",
      answer: "With specialized anti-g suits and positive pressure breathing, trained fighter pilots can sustain 9 g (88.26 m/s²) for several seconds. Untrained humans typically experience blackout between 4 g and 6 g."
    },
    {
      question: "Does Earth's actual gravity equal 9.80665 m/s² everywhere?",
      answer: "No. Actual gravity varies between approximately 9.78 m/s² at the equator and 9.83 m/s² at the poles due to Earth's centrifugal bulge and varying local density. 9.80665 m/s² is a conventional standard."
    }
  ],
  relatedList: [
    { label: "Standard Gravity (g) to Foot/sec²", from: "gravity-acceleration", to: "foot-per-second-squared" },
    { label: "Standard Gravity (g) to Gal", from: "gravity-acceleration", to: "gal-acceleration" },
    { label: "Standard Gravity (g) to Milligal", from: "gravity-acceleration", to: "milligal-acceleration" },
    { label: "Meter/sec² to Standard Gravity (g)", from: "meter-per-second-squared", to: "gravity-acceleration" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - Comptes Rendus des Séances de la 3e Conférence Générale des Poids et Mesures (1901)",
    "International Organization for Standardization (ISO) - ISO 80000-3:2019 Quantities and Units — Space and Time",
    "National Aeronautics and Space Administration (NASA) - Human Integration Design Handbook (HIDH)"
  ]
};
