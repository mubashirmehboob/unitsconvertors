import { CustomArticleData } from "./types";

export const gravityAccelerationToKilometerPerHourSecond: CustomArticleData = {
  fromUnitId: "gravity-acceleration",
  toUnitId: "kilometer-per-hour-second",
  seoTitle: "Standard Gravity (g) to KM/h/s Converter (g to km/h/s)",
  metaDescription: "Convert standard gravity (g) to kilometers per hour per second (g to km/h/s) with exact velocity-gain formulas, automotive 0-100 km/h times, and worked examples.",
  h1: "Standard Gravity (g) to KM/h/s Converter",
  introduction: [
    "Standard gravity (symbol: g) and the kilometer per hour per second (km/h/s) connect fundamental physical acceleration with practical road vehicle velocity gain. While g is the universal dimensionless load factor used in aerospace engineering, flight dynamics, and cornering telemetry, km/h/s is the intuitive metric benchmark used by automotive test drivers, railway transportation engineers, and vehicle manufacturers to describe how quickly an instrumented speedometer reading changes.",
    "Converting g-force to kilometers per hour per second provides an immediate, tangible understanding of dynamic acceleration. Standard acceleration of gravity is internationally defined as exactly 9.80665 m/s². Because 1 meter per second equals exactly 3.6 kilometers per hour, an acceleration of 1 g causes a vehicle's speed to increase by exactly 35.30394 km/h every second (9.80665 × 3.6).",
    "This engineering guide explains the exact mathematical derivation, demonstrates how to compute 0–100 km/h sprint times from g-forces, provides worked racing and transit examples, and features comprehensive reference tables."
  ],
  quickAnswer: {
    text: "To convert standard gravity (g) to kilometers per hour per second (km/h/s), multiply the g-value by exactly 35.30394. For example, a 1 g acceleration launch corresponds to a speed increase of exactly 35.30394 km/h every second.",
    formulaDisplay: "\\text{km/h/s} = g \\times 35.30394",
    subtext: "1 g is equal to exactly 35.30394 km/h/s (9.80665 m/s² × 3.6 (km/h)/(m/s))."
  },
  aboutSourceUnit: {
    title: "Understanding Standard Gravity (g)",
    text: "Standard gravity (symbol: g, or g₀) is an internationally agreed constant established by the 3rd CGPM in 1901, fixed at exactly 9.80665 m/s². It represents nominal Earth gravity at sea level. In automotive testing and aerospace, inertial forces are universally reported in g's to compare cornering, braking, and launch capabilities independent of vehicle mass."
  },
  aboutTargetUnit: {
    title: "Understanding KM/h/s (km/h/s)",
    text: "The kilometer per hour per second (symbol: km/h/s or (km/h)/s) is a metric unit of acceleration that indicates how many kilometers per hour an object's velocity changes during each elapsed second. It is the primary metric metric used in European rail transport passenger comfort criteria and road vehicle testing."
  },
  relationship: "The relationship between standard gravity and kilometers per hour per second is exact: 1 g = 9.80665 m/s², and 1 m/s = 3.6 km/h. Multiplying 9.80665 by 3.6 yields exactly 35.30394 km/h/s per g. Inversely, 1 km/h/s corresponds to 1 / 35.30394 ≈ 0.028325 g.",
  relationshipTitle: "G-Force to Speed Gain Benchmarks",
  relationshipItems: [
    { label: "0.02833 g", value: "1.00000 km/h/s (1 km/h/s benchmark in g-units)" },
    { label: "0.10000 g", value: "3.53039 km/h/s (Comfortable passenger train acceleration limit)" },
    { label: "0.30000 g", value: "10.59118 km/h/s (Normal commuter car brisk departure)" },
    { label: "0.50000 g", value: "17.65197 km/h/s (Aggressive passenger car braking)" },
    { label: "1.00000 g", value: "35.30394 km/h/s (Supercar full-throttle launch, 0–100 km/h in 2.83s)" },
    { label: "5.00000 g", value: "176.51970 km/h/s (Formula 1 carbon-brake maximum deceleration)" }
  ],
  formula: {
    text: "Multiply the acceleration in standard gravity units (g) by the exact constant 35.30394 to calculate kilometers per hour per second.",
    math: "a_{(\\text{km/h/s})} = a_{(g)} \\times 35.30394",
    subtext: "35.30394 is an exact constant: 9.80665 m/s² × 3.6 (km/h)/(m/s)."
  },
  formulaTitle: "g to km/h/s Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To approximate km/h/s from g in your head, multiply by 35 (or multiply by 70 and halve it). For example, 2 g is approximately 2 × 35 = 70 km/h/s, exceptionally close to the exact 70.61 km/h/s."
  },
  expertNote: {
    title: "Calculating 0–100 km/h Acceleration Times",
    text: "Under constant acceleration a in g's, the time t required to reach 100 km/h from a standstill is t = 100 ÷ (a × 35.30394) = 2.8325 ÷ a seconds. For an electric hypercar pulling an average of 1.4 g off the line, 0–100 km/h takes just 2.8325 ÷ 1.4 ≈ 2.02 seconds."
  },
  examples: {
    title: "Step-by-Step Automotive Performance Calculations",
    items: [
      {
        title: "Example 1: Formula 1 Heavy Braking Zone",
        subtitle: "At the end of a high-speed straight, a Formula 1 racing car sheds speed under maximum aerodynamic downforce and carbon braking at 4.8 g. What is this deceleration rate in km/h/s?",
        steps: [
          "Identify the braking g-load: a = 4.8 g.",
          "Multiply by the exact conversion factor: 4.8 × 35.30394.",
          "Compute: 4.8 × 35.30394 = 169.458912.",
          "Result: The car decelerates at a rate of approximately 169.46 km/h every second."
        ]
      },
      {
        title: "Example 2: High-Speed Electric Train Departure",
        subtitle: "A modern bullet train limits passenger acceleration to 0.12 g to ensure standing passenger safety. Convert this limit to km/h/s.",
        steps: [
          "State the acceleration rate: a = 0.12 g.",
          "Multiply by 35.30394: 0.12 × 35.30394.",
          "Compute: 0.12 × 35.30394 = 4.2364728.",
          "Result: The train accelerates at approximately 4.24 km/h per second."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: g to km/h/s",
    headers: ["G-Force (g)", "Acceleration (km/h/s)", "Automotive & Transit Context"],
    rows: [
      { fromVal: "0.05", toVal: "1.7652", extra: "Gentle passenger train departure" },
      { fromVal: "0.10", toVal: "3.5304", extra: "Typical European commuter train target limit" },
      { fromVal: "0.20", toVal: "7.0608", extra: "Relaxed urban car acceleration" },
      { fromVal: "0.30", toVal: "10.5912", extra: "Standard highway on-ramp merge" },
      { fromVal: "0.50", toVal: "17.6520", extra: "Firm emergency braking maneuver" },
      { fromVal: "0.75", toVal: "26.4780", extra: "Sports car aggressive launch" },
      { fromVal: "1.00", toVal: "35.3039", extra: "Supercar 1.0 g launch (0–100 km/h in 2.83s)" },
      { fromVal: "1.50", toVal: "52.9559", extra: "All-wheel-drive electric hypercar launch" },
      { fromVal: "3.00", toVal: "105.9118", extra: "Manned rocket booster initial acceleration" },
      { fromVal: "5.00", toVal: "176.5197", extra: "Formula 1 maximum braking corner apex" }
    ]
  },
  applications: {
    title: "Real-World Automotive & Transit Applications",
    items: [
      {
        title: "Automotive Track Telemetry & Dyno Testing",
        text: "Data acquisition systems record triaxial accelerometer channels in g's, which race engineers convert to km/h/s to analyze traction control slip ratios and corner-exit speeds."
      },
      {
        title: "High-Speed Rail Traction & Braking Systems",
        text: "Railway safety standards specify passenger comfort thresholds in fractions of g. Converting to km/h/s allows traction software to program smooth variable-frequency inverter acceleration curves."
      },
      {
        title: "Autonomous Vehicle Motion Planning",
        text: "Self-driving car trajectory generators impose comfort limits (typically <0.2 g) and convert these constraints to km/h/s to modulate electric throttle and regenerative braking."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 36 instead of 35.30394: Approximating 9.80665 × 3.6 as 10 × 3.6 = 36 introduces a 2.0% error, which leads to noticeable inaccuracies in timed acceleration modeling.",
      "Confusing speed with acceleration: 35.3 km/h is a velocity, while 35.3 km/h/s is an acceleration rate. Always verify that time appears in the denominator.",
      "Dividing instead of multiplying: To convert g to km/h/s, multiply by 35.30394. Dividing converts km/h/s back into g."
    ]
  },
  faqs: [
    {
      question: "How do you convert g to km/h/s?",
      answer: "Multiply the g-value by exactly 35.30394. For example, 0.5 g × 35.30394 = 17.65197 km/h/s."
    },
    {
      question: "What is 1 g in km/h/s?",
      answer: "1 g is equal to exactly 35.30394 km/h/s."
    },
    {
      question: "Where does the factor 35.30394 come from?",
      answer: "It is the product of standard gravity (9.80665 m/s²) and the conversion from m/s to km/h (3.6 (km/h)/(m/s)): 9.80665 × 3.6 = 35.30394."
    },
    {
      question: "How do you convert km/h/s back to g?",
      answer: "Divide the km/h/s value by 35.30394, or multiply by approximately 0.028325. For example, 70.61 km/h/s ÷ 35.30394 ≈ 2.0 g."
    },
    {
      question: "How fast is 1 g in terms of 0–100 km/h sprint time?",
      answer: "Under a constant 1 g acceleration, a vehicle accelerates from 0 to 100 km/h in exactly 100 ÷ 35.30394 ≈ 2.83 seconds."
    },
    {
      question: "What acceleration rate do passenger trains use?",
      answer: "Commuter and high-speed passenger trains typically accelerate at 0.08 to 0.12 g, which corresponds to 2.8 to 4.2 km/h/s, ensuring passenger comfort and standing safety."
    },
    {
      question: "How many km/h/s is a 5 g Formula 1 braking event?",
      answer: "A 5 g deceleration corresponds to exactly 176.5197 km/h/s (5 × 35.30394). The car sheds over 176 km/h of speed for every second of hard braking."
    },
    {
      question: "Is the conversion factor 35.30394 exact?",
      answer: "Yes. Both 9.80665 m/s² (standard gravity) and 3.6 (seconds per hour divided by meters per kilometer) are exact by definition, making 35.30394 exact."
    }
  ],
  relatedList: [
    { label: "Standard Gravity (g) to MPH/s", from: "gravity-acceleration", to: "mile-per-hour-second" },
    { label: "Standard Gravity (g) to Meter/sec²", from: "gravity-acceleration", to: "meter-per-second-squared" },
    { label: "Meter/sec² to KM/h/s", from: "meter-per-second-squared", to: "kilometer-per-hour-second" },
    { label: "Foot/sec² to KM/h/s", from: "foot-per-second-squared", to: "kilometer-per-hour-second" }
  ],
  references: [
    "International Organization for Standardization (ISO) - ISO 80000-3:2019 Quantities and Units — Space and Time",
    "Fédération Internationale de l'Automobile (FIA) - Formula 1 Technical and Telemetry Regulations",
    "International Union of Railways (UIC) - Railway Passenger Comfort Criteria Leaflet 513"
  ]
};
