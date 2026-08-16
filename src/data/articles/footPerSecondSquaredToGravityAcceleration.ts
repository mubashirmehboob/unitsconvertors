import { CustomArticleData } from "./types";

export const footPerSecondSquaredToGravityAcceleration: CustomArticleData = {
  fromUnitId: "foot-per-second-squared",
  toUnitId: "gravity-acceleration",
  seoTitle: "Foot/sec² to Standard Gravity (g) Converter (ft/s² to g)",
  metaDescription: "Convert feet per second squared to standard gravity g-force (ft/s² to g) with exact conversion constants, aerospace formulas, worked examples, and FAQs.",
  h1: "Foot/sec² to Standard Gravity (g) Converter",
  introduction: [
    "The foot per second squared (ft/s²) and standard gravity (g or g₀) represent two fundamental acceleration metrics widely used in US aerospace engineering, flight test evaluation, and structural vibration analysis. While ft/s² expresses acceleration in US customary dimensional units, g expresses dynamic acceleration as a dimensionless multiple of Earth's nominal sea-level gravitational pull.",
    "Converting feet per second squared to g-force is essential when determining aircraft maneuvering load factors, analyzing catapult launch stresses on naval airframes, or assessing human physiological tolerances during centrifuge testing. Because standard gravity g₀ is defined internationally as exactly 9.80665 m/s², which equals approximately 32.1740485564 ft/s², converting from ft/s² to g requires dividing by approximately 32.17405.",
    "This technical guide explains standard gravitational constants, outlines step-by-step conversion mathematics, provides real-world aerospace examples, and presents comprehensive reference tables."
  ],
  quickAnswer: {
    text: "To convert feet per second squared (ft/s²) to standard gravity (g), divide the acceleration value by 32.17405 (or multiply by 0.031081). For example, an aircraft pulling an acceleration of 96.52 ft/s² is experiencing approximately 3.0 g of load factor.",
    formulaDisplay: "g = \\frac{\\text{ft/s}^2}{32.17405}",
    subtext: "1 standard gravity (g₀) equals exactly 9.80665 / 0.3048 ft/s² (approx. 32.17405 ft/s²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Foot per Second Squared (ft/s²)",
    text: "The foot per second squared (symbol: ft/s² or ft/sec²) is the US customary and imperial unit of acceleration. Defined as an increase in speed of one foot per second every second (1 ft/s² = 0.3048 m/s²), it serves as the core acceleration unit in North American civil, mechanical, and aerospace engineering."
  },
  aboutTargetUnit: {
    title: "Understanding Standard Gravity (g)",
    text: "Standard gravity (symbol: g or g₀) is an internationally agreed constant equal to exactly 9.80665 m/s² (~32.17405 ft/s²). Established by the 3rd CGPM in 1901, it is used worldwide to express inertial load factors, human acceleration tolerances, and structural stress multiples."
  },
  relationship: "The relationship between feet per second squared and standard gravity is defined by the international definitions of the foot (0.3048 m) and standard gravity (9.80665 m/s²): g₀ = 9.80665 / 0.3048 ft/s² = 32.17404855643044 ft/s². Therefore, an acceleration a in ft/s² converts to g by dividing by 32.17405. Conversely, 1 g equals 32.17405 ft/s².",
  relationshipTitle: "Aerospace Load Factor Scale",
  relationshipItems: [
    { label: "1 ft/s²", value: "0.03108 g (Gentle commercial elevator ascent)" },
    { label: "16.087 ft/s²", value: "0.50000 g (Moderate vehicle cornering load)" },
    { label: "32.174 ft/s²", value: "1.00000 g (Standard Earth surface gravity pull)" },
    { label: "64.348 ft/s²", value: "2.00000 g (Steep 60-degree banked aircraft turn)" },
    { label: "160.870 ft/s²", value: "5.00000 g (High-performance aerobatic maneuver)" }
  ],
  formula: {
    text: "Divide the acceleration in feet per second squared by 32.174049 to determine the equivalent g-force value.",
    math: "a_{(g)} = \\frac{a_{(\\text{ft/s}^2)}}{32.174049} = a_{(\\text{ft/s}^2)} \\times 0.03108095",
    subtext: "32.17404856 ft/s² is derived from 9.80665 m/s² ÷ 0.3048 m/ft."
  },
  formulaTitle: "ft/s² to g Conversion Formula",
  practicalTip: {
    title: "Quick Mental Division Rule",
    text: "To rapidly estimate g from ft/s² without a calculator, divide the ft/s² value by 32 (e.g., 64 ft/s² ÷ 32 = 2.0 g; 160 ft/s² ÷ 32 = 5.0 g)."
  },
  expertNote: {
    title: "Weight vs Mass in US Customary Units",
    text: "In US engineering, an object with a weight W of 100 lbf has a mass of 100/32.174 = 3.108 slugs. When accelerated at a ft/s², the resulting inertial force in pounds-force is F = (W / 32.174) × a = W × (a in g)."
  },
  examples: {
    title: "Step-by-Step Aerospace & Ballistics Examples",
    items: [
      {
        title: "Example 1: Fighter Jet High-G Turn",
        subtitle: "A combat aircraft executes a high-rate pull-up with a measured normal acceleration of 193.0 ft/s². Convert this to g-force.",
        steps: [
          "State the measured acceleration: a = 193.0 ft/s².",
          "Apply the standard conversion divisor: 193.0 ÷ 32.17405.",
          "Calculate: 193.0 ÷ 32.17405 = 5.99862...",
          "Result: 193.0 ft/s² corresponds to a load factor of approximately 6.0 g."
        ]
      },
      {
        title: "Example 2: Rocket Stage Boost Acceleration",
        subtitle: "A sounding rocket booster accelerates at 112.6 ft/s². Determine the g-load experienced by onboard instruments.",
        steps: [
          "Identify the acceleration rate: a = 112.6 ft/s².",
          "Divide by 32.17405: 112.6 ÷ 32.17405.",
          "Calculate: 112.6 ÷ 32.17405 = 3.499715...",
          "Result: 112.6 ft/s² equals approximately 3.50 g."
        ]
      }
    ]
  },
  table: {
    title: "Quick Reference Conversion Table",
    headers: ["Input Value", "Converted Result", "Physical Context"],
    rows: [
      { fromVal: "1", toVal: "0.031081", extra: "Light structural vibration level" },
      { fromVal: "5", toVal: "0.155405", extra: "Comfortable passenger elevator start" },
      { fromVal: "10", toVal: "0.310810", extra: "Brisk passenger car acceleration" },
      { fromVal: "20", toVal: "0.621619", extra: "High-speed highway ramp merge" },
      { fromVal: "32.174", toVal: "0.999998", extra: "Standard 1 g terrestrial gravity" },
      { fromVal: "50", toVal: "1.554048", extra: "Theme park roller coaster descent" },
      { fromVal: "100", toVal: "3.108095", extra: "Space launch vehicle boost phase" },
      { fromVal: "150", toVal: "4.662143", extra: "High-performance air combat turn" },
      { fromVal: "250", toVal: "7.770238", extra: "Aerobatic championship extreme snap" },
      { fromVal: "500", toVal: "15.540476", extra: "Aircraft crash barrier engagement" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "US Military & Commercial Aircraft Certification",
        text: "Flight test telemetry recorded in ft/s² is converted to g load factor multiples to demonstrate compliance with FAA FAR Part 25 structural limit requirements."
      },
      {
        title: "Spacecraft Structural & Payload Qualification",
        text: "NASA and commercial space launch providers convert accelerometer readings from ft/s² into quasi-static g loads to certify satellite payload structures against acoustic and launch vibration."
      },
      {
        title: "Amusement Ride & Roller Coaster Dynamics",
        text: "Ride design engineers convert kinetic accelerations from ft/s² into vertical and lateral g-limits (ASTM F2291 standards) to protect riders from excessive G-forces."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Using 32.2 Instead of Precise 32.17405 in Critical Code: Using 32.2 creates an error of +0.08%, which accumulates into significant structural stress estimation errors in long-duration vibration simulations.",
      "Confusing Acceleration g with Grams g: Ensure that 'g' represents gravitational acceleration (32.174 ft/s²) rather than the mass unit gram (0.002205 lb).",
      "Forgetting to Subtract 1 g for Net Accelerometer Readings: Physical accelerometers measure total proper acceleration including the 1 g upward Earth reaction force; subtracting 1 g gives kinematic acceleration relative to the ground."
    ]
  },
  faqs: [
    {
      question: "How do I convert ft/s² to g?",
      answer: "Divide the acceleration in ft/s² by 32.17405 (or multiply by 0.031081). For example, 64.35 ft/s² ÷ 32.17405 ≈ 2.0 g."
    },
    {
      question: "What is 1 ft/s² in g?",
      answer: "1 ft/s² is approximately equal to 0.031081 g."
    },
    {
      question: "How many ft/s² is 1 g?",
      answer: "1 g (standard gravity) equals approximately 32.17405 ft/s² (derived from exactly 9.80665 m/s² ÷ 0.3048 m/ft)."
    },
    {
      question: "Why is 32.174 ft/s² used as standard gravity?",
      answer: "Standard gravity was fixed internationally at 9.80665 m/s² in 1901. Converting meters to international feet (0.3048 m/ft) yields 32.17404856 ft/s²."
    },
    {
      question: "How do I convert g back to ft/s²?",
      answer: "Multiply the g value by 32.17405. For example, 4 g × 32.17405 = 128.696 ft/s²."
    },
    {
      question: "What is the difference between g-force and ft/s²?",
      answer: "ft/s² is a dimensional measure of acceleration (distance per second squared), whereas g is a dimensionless ratio comparing that acceleration to Earth's standard gravity."
    },
    {
      question: "What g-force limit is allowed for commercial aircraft?",
      answer: "Commercial airliners are typically certified for positive load factors up to +2.5 g (approx. 80.4 ft/s²) under normal clean flight configuration."
    },
    {
      question: "How does ft/s² relate to slug mass units?",
      answer: "One slug of mass accelerated at 1 ft/s² produces exactly one pound-force (1 lbf) of force (F = m × a)."
    }
  ],
  relatedList: [
    { label: "Meter/sec² to Standard Gravity (g)", from: "meter-per-second-squared", to: "gravity-acceleration" },
    { label: "Foot/sec² to Meter/sec²", from: "foot-per-second-squared", to: "meter-per-second-squared" },
    { label: "Foot/sec² to Gal", from: "foot-per-second-squared", to: "gal-acceleration" },
    { label: "Foot/sec² to Milligal", from: "foot-per-second-squared", to: "milligal-acceleration" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - NIST Special Publication 811: Guide for the Use of the International System of Units",
    "Federal Aviation Administration (FAA) - FAA Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25B)",
    "International Organization for Standardization (ISO) - ISO 80000-3:2019 Quantities and Units — Space and Time"
  ]
};
