import { CustomArticleData } from "./types";

export const meterPerSecondSquaredToFootPerSecondSquared: CustomArticleData = {
  fromUnitId: "meter-per-second-squared",
  toUnitId: "foot-per-second-squared",
  seoTitle: "Meter/sec² to Foot/sec² Converter (m/s² to ft/s²)",
  metaDescription: "Convert meters per second squared to feet per second squared (m/s² to ft/s²) with exact conversion formulas, worked physics examples, conversion tables, and FAQs.",
  h1: "Meter/sec² to Foot/sec² Converter",
  introduction: [
    "Meters per second squared (m/s²) and feet per second squared (ft/s²) are the foundational units used to measure linear acceleration, gravitational pull, and dynamic kinematics. The meter per second squared serves as the official derived unit in the International System of Units (SI), whereas the foot per second squared remains the primary standard in United States customary engineering, aerospace design, and ballistics modeling.",
    "Converting meters per second squared to feet per second squared is a standard procedure when translating international physics simulations into US aerospace parameters, interpreting automotive track telemetry, or calibrating structural vibration sensors. Because an international foot is legally fixed at exactly 0.3048 meters, one meter equals approximately 3.280839895013123 feet. Consequently, an acceleration of 1 m/s² translates directly to approximately 3.28084 ft/s².",
    "This technical reference provides exact conversion coefficients, mathematical formulas, step-by-step practical calculations from automotive and structural dynamics, reference tables across standard kinematic ranges, and expert guidance to eliminate common rounding errors."
  ],
  quickAnswer: {
    text: "To convert meters per second squared (m/s²) to feet per second squared (ft/s²), multiply the acceleration figure by 3.28084 (or divide by 0.3048). For instance, standard Earth surface gravity of 9.80665 m/s² equals approximately 32.174 ft/s².",
    formulaDisplay: "\\text{ft/s}^2 = \\text{m/s}^2 \\times 3.28084",
    subtext: "1 m/s² is exactly equal to 1 / 0.3048 ft/s² (approx. 3.280839895 ft/s²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter per Second Squared (m/s²)",
    text: "The meter per second squared (symbol: m/s²) is the SI coherent derived unit of acceleration. It quantifies the rate at which an object's velocity changes by one meter per second over a time interval of one second (1 m/s² = 1 (m/s)/s). Formally recognized by the BIPM and ISO 80000-3, it is the universal benchmark in classical mechanics, robotics, orbital dynamics, and international automotive engineering."
  },
  aboutTargetUnit: {
    title: "Understanding the Foot per Second Squared (ft/s²)",
    text: "The foot per second squared (symbol: ft/s² or ft/sec²) is the imperial and US customary unit of acceleration. Defined as a velocity increase of one foot per second every second (1 ft/s² = 1 (ft/s)/s), it is widely utilized across North American civil engineering, aerospace thrust-to-weight calculations, defense ballistics, and mechanical vibration analysis."
  },
  relationship: "The exact relationship between meters per second squared and feet per second squared is derived directly from the 1959 International Yard and Pound Agreement, which set 1 foot equal to exactly 0.3048 meters. Because the time dimension (seconds) is identical in both systems, the acceleration ratio is strictly the length ratio: 1 m/s² = 1 / 0.3048 ft/s² ≈ 3.280839895013123 ft/s². Conversely, 1 ft/s² = 0.3048 m/s².",
  relationshipTitle: "Acceleration Equivalence Across Systems",
  relationshipItems: [
    { label: "1 m/s²", value: "3.28084 ft/s² (Moderate urban transit train departure)" },
    { label: "2.5 m/s²", value: "8.20210 ft/s² (Standard passenger elevator comfortable braking)" },
    { label: "5.0 m/s²", value: "16.40420 ft/s² (Brisk automotive highway ramp acceleration)" },
    { label: "9.80665 m/s²", value: "32.17405 ft/s² (Standard terrestrial gravity, 1 g)" },
    { label: "20 m/s²", value: "65.61680 ft/s² (High-performance Formula racing turn lateral load)" }
  ],
  formula: {
    text: "Multiply the acceleration in meters per second squared by 3.2808399 (or divide by 0.3048) to determine the value in feet per second squared.",
    math: "a_{(\\text{ft/s}^2)} = a_{(\\text{m/s}^2)} \\times 3.2808399 = \\frac{a_{(\\text{m/s}^2)}}{0.3048}",
    subtext: "For exact algebraic computation, always divide by 0.3048."
  },
  formulaTitle: "m/s² to ft/s² Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To rapidly estimate ft/s² on the field without a calculator, multiply the m/s² value by 3.3 (or triple the number and add 10%). For example, 10 m/s² becomes roughly 33 ft/s², which is within 0.6% of the exact 32.81 ft/s² value."
  },
  expertNote: {
    title: "Dimensional Invariance of Time",
    text: "Because both the metric and imperial systems share the second (s) as the base unit of time, converting acceleration between SI and imperial units requires transforming only the length dimension (m to ft). No time scale conversions are required."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: High-Speed Train Deceleration",
        subtitle: "Convert an emergency braking deceleration of 1.8 m/s² on a high-speed passenger train into feet per second squared.",
        steps: [
          "Identify the initial value in SI units: a = 1.8 m/s².",
          "Apply the exact definition formula: a = 1.8 ÷ 0.3048.",
          "Perform the division: 1.8 ÷ 0.3048 = 5.9055118...",
          "Round to four decimal places: 1.8 m/s² equals approximately 5.9055 ft/s²."
        ]
      },
      {
        title: "Example 2: Rocket Launch Initial Lift Acceleration",
        subtitle: "Convert a sounding rocket initial stage acceleration rate of 25.4 m/s² into US aerospace standard ft/s².",
        steps: [
          "State the acceleration rate: a = 25.4 m/s².",
          "Multiply by the imperial scaling factor: 25.4 × 3.2808399.",
          "Execute the calculation: 25.4 × 3.2808399 = 83.333333...",
          "Conclude: 25.4 m/s² equals 83.3333 ft/s²."
        ]
      }
    ]
  },
  table: {
    title: "Quick Reference Conversion Table",
    headers: ["Input Value", "Converted Result", "Physical Context"],
    rows: [
      { fromVal: "0.1", toVal: "0.328084", extra: "Micro-vibration testing baseline" },
      { fromVal: "0.5", toVal: "1.640420", extra: "Gentle cruise ship course correction" },
      { fromVal: "1", toVal: "3.280840", extra: "Standard base unit comparison" },
      { fromVal: "2", toVal: "6.561680", extra: "City bus typical acceleration" },
      { fromVal: "5", toVal: "16.404200", extra: "Electric sports sedan spirited launch" },
      { fromVal: "9.80665", toVal: "32.174049", extra: "Earth standard gravitational acceleration (1 g)" },
      { fromVal: "15", toVal: "49.212598", extra: "Amusement park roller coaster drop" },
      { fromVal: "25", toVal: "82.020997", extra: "Acrobatic airplane high-G maneuver" },
      { fromVal: "50", toVal: "164.041995", extra: "Automotive crash test deceleration peak" },
      { fromVal: "100", toVal: "328.083990", extra: "Aerospace ejection seat pulse" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "Aerospace & Flight Simulation Engineering",
        text: "Flight control computers and aerodynamic simulation algorithms frequently exchange sensor data across international alliances, requiring continuous conversion between metric telemetry (m/s²) and US FAA flight dynamics models (ft/s²)."
      },
      {
        title: "Automotive Dynamics & Braking Benchmarking",
        text: "Automotive journalists and test engineers benchmark stopping distance capabilities by measuring deceleration in m/s² (ISO standards) and converting to ft/s² for North American vehicle safety compliance documentation."
      },
      {
        title: "Structural Engineering & Earthquake Seismology",
        text: "Building codes model peak ground acceleration (PGA) during seismic events in m/s², which civil structural engineers in the United States convert into ft/s² when calculating dynamic lateral shear stresses on high-rise frames."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Confusing Velocity with Acceleration: Accelerations (m/s² and ft/s²) represent the rate of change of speed per second, not static speed (m/s and ft/s). Multiplying a velocity factor rather than an acceleration factor creates serious dimensional errors in kinematics formulas.",
      "Squaring the Linear Conversion Factor: A common mistake is squaring 3.28084 because the unit contains 'squared'. The exponent applies only to time (seconds), which is identical in both units; the length scaling factor (3.28084) is linear.",
      "Premature Truncation of 0.3048: Using an imprecise constant such as 3.28 introduces noticeable drift in long integration calculations (such as trajectory plotting). Always divide by the exact standard 0.3048."
    ]
  },
  faqs: [
    {
      question: "How do I convert meters per second squared to feet per second squared?",
      answer: "To convert m/s² to ft/s², divide the acceleration value by 0.3048, or multiply it by 3.2808399. For example, 10 m/s² divided by 0.3048 equals 32.8084 ft/s²."
    },
    {
      question: "What is 1 m/s² in ft/s²?",
      answer: "1 m/s² is exactly equal to 1 / 0.3048 ft/s², which is approximately 3.280839895 ft/s²."
    },
    {
      question: "What is Earth's gravity in m/s² and ft/s²?",
      answer: "Standard Earth gravity (1 g) is defined by international agreement as exactly 9.80665 m/s², which converts to approximately 32.17405 ft/s²."
    },
    {
      question: "Why do both units share the second squared unit?",
      answer: "Both the International System of Units (SI) and US Customary systems use the second (s) as the fundamental base unit of time, so acceleration in both frameworks measures change in distance per second per second."
    },
    {
      question: "Is m/s² larger than ft/s²?",
      answer: "Yes, 1 m/s² is approximately 3.28 times larger than 1 ft/s² because one meter is longer than one foot."
    },
    {
      question: "How is m/s² converted to g-force?",
      answer: "Divide the acceleration in m/s² by standard gravity (9.80665 m/s²). For example, an acceleration of 19.6133 m/s² equals exactly 2.0 g."
    },
    {
      question: "Where is ft/s² still commonly used today?",
      answer: "ft/s² is widely used in the United States in civil structural analysis, HVAC fluid flows, US military ballistics, and domestic aerospace specifications."
    },
    {
      question: "What is the dimensional formula for acceleration?",
      answer: "The dimensional formula of acceleration is [L T⁻²], representing length divided by time squared."
    }
  ],
  relatedList: [
    { label: "Foot/sec² to Meter/sec²", from: "foot-per-second-squared", to: "meter-per-second-squared" },
    { label: "Meter/sec² to Standard Gravity (g)", from: "meter-per-second-squared", to: "gravity-acceleration" },
    { label: "Meter/sec² to Gal", from: "meter-per-second-squared", to: "gal-acceleration" },
    { label: "Meter/sec² to KM/h/s", from: "meter-per-second-squared", to: "kilometer-per-hour-second" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - BIPM SI Brochure: The International System of Units (9th Edition)",
    "National Institute of Standards and Technology (NIST) - NIST Guide to the SI, Chapter B.8: Factors for Units Listed by System",
    "International Organization for Standardization (ISO) - ISO 80000-3:2019 Quantities and Units — Space and Time"
  ]
};
