import { CustomArticleData } from "./types";

export const meterPerSecondSquaredToGravityAcceleration: CustomArticleData = {
  fromUnitId: "meter-per-second-squared",
  toUnitId: "gravity-acceleration",
  seoTitle: "Meter/sec² to Standard Gravity (g) Converter (m/s² to g)",
  metaDescription: "Convert meters per second squared to standard gravity g-force (m/s² to g) with standard NIST conversion constants, physics formulas, aerospace examples, and FAQs.",
  h1: "Meter/sec² to Standard Gravity (g) Converter",
  introduction: [
    "The meter per second squared (m/s²) and standard gravity (symbol: g or g₀) represent the two most common measures of acceleration in engineering, aerospace mechanics, and human physiology. While m/s² expresses acceleration in absolute coherent SI base units, the dimensionless g-unit (often described as g-force) expresses dynamic acceleration as a multiple of Earth's standard gravitational pull at sea level.",
    "Converting meters per second squared to g-force is fundamental when evaluating human physiological limits in fighter aircraft, designing automotive occupant safety restraint systems, and assessing satellite launch vibration tolerances. Under international agreement (CGPM 1901 and ISO 80000-3), standard gravity g₀ is defined as exactly 9.80665 m/s². Therefore, converting from m/s² to g requires dividing by 9.80665.",
    "This guide provides exact scientific standards, step-by-step calculation methods, aerospace and racing dynamics examples, standard reference charts, and guidance on avoiding common gravitational misconceptions."
  ],
  quickAnswer: {
    text: "To convert meters per second squared (m/s²) to standard gravity (g), divide the acceleration in m/s² by 9.80665 (or multiply by 0.101972). For example, an acceleration of 29.42 m/s² equals approximately 3.0 g.",
    formulaDisplay: "g = \\frac{\\text{m/s}^2}{9.80665}",
    subtext: "1 standard gravity (g₀) is defined as exactly 9.80665 m/s² (32.17405 ft/s²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter per Second Squared (m/s²)",
    text: "The meter per second squared (m/s²) is the coherent SI unit for acceleration. Formally defined as an acceleration that changes velocity by one meter per second every second, it represents absolute physical acceleration independent of local gravitational variations across celestial bodies."
  },
  aboutTargetUnit: {
    title: "Understanding Standard Gravity (g)",
    text: "Standard gravity (symbol: g or g₀, often referred to colloquially as g-force) is a nominal acceleration defined as exactly 9.80665 m/s² (approximately 32.17405 ft/s²). Adopted at the 3rd General Conference on Weights and Measures (CGPM) in 1901, it provides a universal benchmark for human tolerance, flight load factors, and structural inertial loading."
  },
  relationship: "The relationship between meters per second squared and standard gravity is defined by the fixed physical constant g₀ = 9.80665 m/s². Thus, an acceleration a in m/s² corresponds to a/9.80665 g. Conversely, 1 g equals exactly 9.80665 m/s².",
  relationshipTitle: "Gravitational Load Scale",
  relationshipItems: [
    { label: "1 m/s²", value: "0.10197 g (Gentle passenger train deceleration)" },
    { label: "4.903 m/s²", value: "0.50000 g (Brisk automotive highway cornering)" },
    { label: "9.80665 m/s²", value: "1.00000 g (Nominal Earth gravitational surface pull)" },
    { label: "29.420 m/s²", value: "3.00000 g (Space capsule re-entry deceleration peak)" },
    { label: "49.033 m/s²", value: "5.00000 g (Aerobatic pilot sustained high-G turn)" }
  ],
  formula: {
    text: "Divide the acceleration in meters per second squared by the standard gravity constant 9.80665 to calculate the equivalent g-force value.",
    math: "a_{(g)} = \\frac{a_{(\\text{m/s}^2)}}{9.80665} = a_{(\\text{m/s}^2)} \\times 0.10197162",
    subtext: "9.80665 is an exact definition established by international metrological treaties."
  },
  formulaTitle: "m/s² to g Conversion Formula",
  practicalTip: {
    title: "Quick Decimal Shift Estimation",
    text: "For quick mental estimation, divide the m/s² value by 10 and add 2% to the result. For example, 50 m/s² ÷ 10 = 5.0; adding 2% gives 5.10 g, which is within 0.04% of the exact 5.0986 g."
  },
  expertNote: {
    title: "g-Force is an Acceleration, Not a Force",
    text: "Despite the common term 'g-force', g is a measure of acceleration (m/s²) or inertial load factor. To calculate the actual physical force in Newtons (N) felt by a body, multiply the acceleration in m/s² by the object's mass in kilograms (F = m × a)."
  },
  examples: {
    title: "Step-by-Step Conversion Calculations",
    items: [
      {
        title: "Example 1: High-Performance Sports Car Cornering",
        subtitle: "Convert a lateral skidpad cornering acceleration of 12.2 m/s² into standard g-force.",
        steps: [
          "Record the measured acceleration: a = 12.2 m/s².",
          "Apply the standard gravity conversion formula: g = 12.2 ÷ 9.80665.",
          "Calculate the quotient: 12.2 ÷ 9.80665 = 1.2440538...",
          "Result: 12.2 m/s² equals approximately 1.244 g."
        ]
      },
      {
        title: "Example 2: Rocket Booster Separation Shock",
        subtitle: "A satellite payload experiences a transient acceleration of 58.84 m/s² during stage separation. Convert this to g-force.",
        steps: [
          "Identify the peak acceleration: a = 58.84 m/s².",
          "Divide by 9.80665: 58.84 ÷ 9.80665.",
          "Calculate: 58.84 ÷ 9.80665 = 6.000010...",
          "Result: 58.84 m/s² corresponds to an inertial load of 6.0 g."
        ]
      }
    ]
  },
  table: {
    title: "Quick Reference Conversion Table",
    headers: ["Input Value", "Converted Result", "Physical Context"],
    rows: [
      { fromVal: "1", toVal: "0.101972", extra: "Light transit subway braking" },
      { fromVal: "2", toVal: "0.203943", extra: "Standard elevator gentle deceleration" },
      { fromVal: "5", toVal: "0.509858", extra: "Brisk passenger car highway acceleration" },
      { fromVal: "9.80665", toVal: "1.000000", extra: "Exact standard Earth surface gravity" },
      { fromVal: "15", toVal: "1.529574", extra: "Roller coaster steep transition loop" },
      { fromVal: "20", toVal: "2.039432", extra: "Space shuttle peak ascent stage load" },
      { fromVal: "30", toVal: "3.059149", extra: "Aerobatic aircraft sustained pull-up" },
      { fromVal: "50", toVal: "5.098581", extra: "Military fighter jet sustained turn limit" },
      { fromVal: "100", toVal: "10.197162", extra: "Extreme motorsport impact deceleration" },
      { fromVal: "250", toVal: "25.492905", extra: "Artillery shell projectile internal launch shock" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "Aerospace Human Bio-Mechanics",
        text: "Flight surgeons and cockpit engineers convert accelerometer m/s² readings into g-units to monitor physiological stress and avoid G-induced Loss of Consciousness (G-LOC) in combat pilots."
      },
      {
        title: "Automotive Crash Safety Restraint Design",
        text: "Crash test dummy accelerometers log deceleration in m/s², which safety engineers convert into g levels to certify airbag deployment thresholds and compliance with FMVSS standards."
      },
      {
        title: "Electronics Packaging Drop Testing",
        text: "Consumer electronics manufacturers drop-test smartphones and tablets, converting shock telemetry from m/s² to peak g-ratings to ensure solid-state solder joints survive impacts."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Using Local Gravity Instead of Standard g₀: Local gravitational acceleration varies from 9.78 m/s² at the equator to 9.83 m/s² at the poles. The conversion unit 'g' is strictly defined as the invariant constant 9.80665 m/s².",
      "Confusing g (Gravity) with g (Grams): In technical documents, lowercase 'g' can represent the mass unit gram or gravitational acceleration. In acceleration contexts, standard gravity is denoted as g or g₀.",
      "Approximating g as 10 m/s² in Precise Calculations: Rounding g₀ to 10 m/s² introduces an automatic error of +1.97%, which can cause structural overstress or flight compliance failures."
    ]
  },
  faqs: [
    {
      question: "How do I convert m/s² to g-force?",
      answer: "Divide the acceleration in m/s² by exactly 9.80665. For example, 19.6133 m/s² ÷ 9.80665 = 2.0 g."
    },
    {
      question: "What is 1 m/s² in g?",
      answer: "1 m/s² is equal to 1 / 9.80665 g, which is approximately 0.101972 g."
    },
    {
      question: "What is standard gravity (g₀) exactly?",
      answer: "Standard gravity (g₀) is defined internationally as exactly 9.80665 m/s² (32.17405 ft/s²), representing nominal Earth sea-level acceleration at 45° latitude."
    },
    {
      question: "Is g-force a real force?",
      answer: "No, g-force is a dimensionless acceleration ratio (acceleration divided by standard gravity). It creates a perceived weight or inertial force equal to mass times acceleration."
    },
    {
      question: "How many g's can a human survive?",
      answer: "Trained pilots with G-suits can withstand 9 g sustained for several seconds along the vertical axis, while momentary impacts of 30 g to 50 g can be survived if restrained properly."
    },
    {
      question: "What is Earth's gravitational acceleration at sea level?",
      answer: "Earth's actual gravity varies between 9.78 m/s² at the equator and 9.83 m/s² at the poles, but the standard engineering benchmark is 9.80665 m/s²."
    },
    {
      question: "How do I convert g back to m/s²?",
      answer: "Multiply the g value by 9.80665. For example, 4 g × 9.80665 = 39.2266 m/s²."
    },
    {
      question: "Why is 9.80665 m/s² used as standard gravity?",
      answer: "The 3rd CGPM in 1901 adopted 9.80665 m/s² to create a uniform, reproducible reference standard for barometry, engineering, and metrology worldwide."
    }
  ],
  relatedList: [
    { label: "Foot/sec² to Standard Gravity (g)", from: "foot-per-second-squared", to: "gravity-acceleration" },
    { label: "Meter/sec² to Foot/sec²", from: "meter-per-second-squared", to: "foot-per-second-squared" },
    { label: "Meter/sec² to Gal", from: "meter-per-second-squared", to: "gal-acceleration" },
    { label: "Meter/sec² to Milligal", from: "meter-per-second-squared", to: "milligal-acceleration" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - CGPM Resolution on the Standard Acceleration Due to Gravity (1901)",
    "National Institute of Standards and Technology (NIST) - NIST Guide for the Use of the International System of Units (SI)",
    "International Organization for Standardization (ISO) - ISO 80000-3:2019 Quantities and Units — Part 3: Space and Time"
  ]
};
