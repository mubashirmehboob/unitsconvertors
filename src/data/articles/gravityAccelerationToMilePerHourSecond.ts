import { CustomArticleData } from "./types";

export const gravityAccelerationToMilePerHourSecond: CustomArticleData = {
  fromUnitId: "gravity-acceleration",
  toUnitId: "mile-per-hour-second",
  seoTitle: "Standard Gravity (g) to MPH/s Converter (g to mph/s)",
  metaDescription: "Convert standard gravity (g) to miles per hour per second (g to mph/s) with exact velocity derivations, automotive 0-60 mph formulas, and worked examples.",
  h1: "Standard Gravity (g) to MPH/s Converter",
  introduction: [
    "Standard gravity (symbol: g) and the mile per hour per second (mph/s) bridge the gap between aerospace inertial load factors and intuitive North American automotive performance. While g is the universal scientific load factor representing acceleration relative to Earth's gravity, mph/s directly communicates how many miles per hour a vehicle's speedometer needle sweeps upward with every passing second.",
    "Converting g-force to miles per hour per second is widely used by drag racers, automotive journalists, dynamicists, and tire testing engineers. Standard gravity is fixed by international agreement at exactly 9.80665 m/s². Because 1 mile per hour equals exactly 0.44704 m/s (or 22/15 ft/s), an acceleration of 1 g corresponds to an acceleration rate of approximately 21.93685 mph/s (9.80665 ÷ 0.44704).",
    "This technical guide explains the conversion mechanics, explores the direct mathematical relationship to 0–60 mph acceleration benchmarks, provides worked performance examples, and presents comprehensive reference tables."
  ],
  quickAnswer: {
    text: "To convert standard gravity (g) to miles per hour per second (mph/s), multiply the g-value by approximately 21.93685 (or 9.80665 ÷ 0.44704). For example, a 1.0 g launch accelerates a vehicle at roughly 21.94 mph every second.",
    formulaDisplay: "\\text{mph/s} = g \\times \\frac{9.80665}{0.44704} \\approx g \\times 21.93685",
    subtext: "1 g is equal to approximately 21.93685 mph/s (derived from 9.80665 m/s² ÷ 0.44704 m/s per mph)."
  },
  aboutSourceUnit: {
    title: "Understanding Standard Gravity (g)",
    text: "Standard gravity (symbol: g, or g₀) is an internationally standardized acceleration constant defined as exactly 9.80665 m/s². Established in 1901 by the 3rd CGPM, it denotes nominal terrestrial sea-level gravity. In vehicle dynamics, g provides a standardized metric to compare vehicle launches, lateral skidpad grip, and braking."
  },
  aboutTargetUnit: {
    title: "Understanding MPH/s (mph/s)",
    text: "The mile per hour per second (symbol: mph/s or (mi/h)/s) is an imperial rate of acceleration that measures the number of miles per hour by which velocity changes during each second. Widely referenced in North American automotive media, it provides an immediate measure of road acceleration and braking performance."
  },
  relationship: "The relationship between standard gravity and miles per hour per second is determined by the ratio of standard SI gravity (9.80665 m/s²) to the statute mile velocity constant (0.44704 m/s per mph): 9.80665 / 0.44704 = 21.936851288... mph/s per g. Inversely, 1 mph/s equals approximately 0.045585 g.",
  relationshipTitle: "G-Force to Speed Gain Benchmarks",
  relationshipItems: [
    { label: "0.04559 g", value: "1.00000 mph/s (1 mph/s benchmark in g-units)" },
    { label: "0.20000 g", value: "4.38737 mph/s (Gentle suburban commuting acceleration)" },
    { label: "0.50000 g", value: "10.96843 mph/s (Firm highway merging acceleration)" },
    { label: "0.80000 g", value: "17.54948 mph/s (Emergency dry-pavement passenger car braking)" },
    { label: "1.00000 g", value: "21.93685 mph/s (Supercar launch, 0–60 mph in 2.73 seconds)" },
    { label: "4.00000 g", value: "87.74741 mph/s (Top Fuel dragster launch stage)" }
  ],
  formula: {
    text: "Multiply the acceleration in standard gravity units (g) by 21.93685 to calculate miles per hour per second.",
    math: "a_{(\\text{mph/s})} = a_{(g)} \\times 21.93685",
    subtext: "Exact ratio: a(mph/s) = a(g) × (9.80665 ÷ 0.44704)."
  },
  formulaTitle: "g to mph/s Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To approximate mph/s from g in your head, multiply by 22 (or multiply by 20 and add 10%). For example, 1.5 g is roughly 1.5 × 22 = 33 mph/s, which is exceptionally close to the exact 32.91 mph/s."
  },
  expertNote: {
    title: "Calculating 0–60 mph Acceleration Times",
    text: "Under a constant acceleration a in g's, the time t required to reach 60 mph from rest is t = 60 ÷ (a × 21.93685) = 2.7351 ÷ a seconds. For a sports car averaging 1.0 g across its launch, 0–60 mph takes exactly 2.74 seconds. For an electric hypercar pulling 1.35 g, 0–60 mph drops to just 2.03 seconds."
  },
  examples: {
    title: "Step-by-Step Automotive Performance Calculations",
    items: [
      {
        title: "Example 1: Production Sports Car Launch",
        subtitle: "A performance electric vehicle records a launch acceleration of 1.25 g during its initial sprint. What is this speed gain rate in mph/s?",
        steps: [
          "State the launch g-load: a = 1.25 g.",
          "Multiply by the conversion factor: 1.25 × 21.93685.",
          "Compute: 1.25 × 21.93685 = 27.4210625.",
          "Result: The vehicle gains speed at approximately 27.42 mph every second."
        ]
      },
      {
        title: "Example 2: Passenger Car Emergency Stop",
        subtitle: "During a brake test from 70 mph, a passenger vehicle generates a sustained deceleration of 0.85 g. Convert this braking rate to mph/s.",
        steps: [
          "Identify the deceleration value: a = 0.85 g.",
          "Multiply by 21.93685: 0.85 × 21.93685.",
          "Compute: 0.85 × 21.93685 = 18.6463225.",
          "Result: The vehicle decelerates at approximately 18.65 mph every second."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: g to mph/s",
    headers: ["G-Force (g)", "Acceleration (mph/s)", "Automotive & Aerodynamic Context"],
    rows: [
      { fromVal: "0.05", toVal: "1.0968", extra: "Subway train gentle acceleration" },
      { fromVal: "0.10", toVal: "2.1937", extra: "Standard commuter train departure" },
      { fromVal: "0.25", toVal: "5.4842", extra: "Relaxed suburban driving acceleration" },
      { fromVal: "0.50", toVal: "10.9684", extra: "Brisk highway ramp merge" },
      { fromVal: "0.75", toVal: "16.4526", extra: "High-performance sports car brisk launch" },
      { fromVal: "1.00", toVal: "21.9369", extra: "1.0 g baseline (0–60 mph in 2.74s)" },
      { fromVal: "1.25", toVal: "27.4211", extra: "AWD electric hypercar launch" },
      { fromVal: "2.00", toVal: "43.8737", extra: "Pro-stock drag racing launch" },
      { fromVal: "4.00", toVal: "87.7474", extra: "Top Fuel dragster launch stage" },
      { fromVal: "5.00", toVal: "109.6843", extra: "Formula 1 maximum aerodynamic braking" }
    ]
  },
  applications: {
    title: "Real-World Automotive & Engineering Applications",
    items: [
      {
        title: "Drag Racing & 0–60 Sprint Calibration",
        text: "Drag strip telemetry systems utilize optical beams and onboard accelerometers to record g-forces, converting them into mph/s to track tire slip, clutch lockup, and aerodynamic drag."
      },
      {
        title: "Brake System Certification & FMVSS Compliance",
        text: "Automotive manufacturers certify ABS systems against Federal Motor Vehicle Safety Standards (FMVSS 135) by verifying that emergency deceleration exceeds specific g-thresholds, converted to mph/s stopping rates."
      },
      {
        title: "Ride Quality & Fleet Telematics Monitoring",
        text: "Commercial fleet telematics devices flag aggressive driving events when longitudinal g-forces exceed 0.35 g (~7.7 mph/s), alerting dispatchers to harsh braking or abrupt acceleration."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Using 22 without accounting for decimal precision: While 22 is an excellent mental approximation, using it introduces a 0.29% error in precise timing calculations.",
      "Confusing mph with mph/s: A speed of 60 mph is velocity, whereas 21.9 mph/s is acceleration. Ensure dynamic equations retain time in the denominator.",
      "Dividing instead of multiplying: Multiply g by 21.93685 to obtain mph/s. Dividing mph/s by 21.93685 converts the rate back into g-units."
    ]
  },
  faqs: [
    {
      question: "How do you convert g to mph/s?",
      answer: "Multiply the g-value by approximately 21.93685 (9.80665 ÷ 0.44704). For example, 1.5 g × 21.93685 ≈ 32.91 mph/s."
    },
    {
      question: "What is 1 g in mph/s?",
      answer: "1 g is equal to approximately 21.93685 mph/s."
    },
    {
      question: "How fast is 1 g in terms of 0–60 mph time?",
      answer: "Under constant 1.0 g acceleration, a car accelerates from 0 to 60 mph in approximately 2.74 seconds (60 ÷ 21.93685)."
    },
    {
      question: "How do you convert mph/s back to g?",
      answer: "Divide the mph/s value by 21.93685, or multiply by approximately 0.045585. For example, 43.87 mph/s ÷ 21.93685 ≈ 2.0 g."
    },
    {
      question: "How many mph/s is an acceleration of 2 g?",
      answer: "2 g corresponds to approximately 43.8737 mph/s (2 × 21.93685)."
    },
    {
      question: "Why is 1 g equal to 21.93685 mph/s?",
      answer: "Standard gravity is 9.80665 m/s². 1 mph is defined as exactly 0.44704 m/s (1,609.344 m ÷ 3,600 s). Dividing 9.80665 by 0.44704 yields 21.93685129... mph/s."
    },
    {
      question: "What is the peak acceleration of a Top Fuel dragster?",
      answer: "A Top Fuel dragster can peak at over 4.5 to 5.0 g during launch, accelerating at over 100 to 110 mph/s to achieve 0–60 mph in under 0.8 seconds."
    },
    {
      question: "What is considered comfortable acceleration in passenger vehicles?",
      answer: "Normal comfortable passenger car acceleration is around 0.15 to 0.25 g, corresponding to a speed gain of 3.3 to 5.5 mph every second."
    }
  ],
  relatedList: [
    { label: "Standard Gravity (g) to KM/h/s", from: "gravity-acceleration", to: "kilometer-per-hour-second" },
    { label: "Standard Gravity (g) to Foot/sec²", from: "gravity-acceleration", to: "foot-per-second-squared" },
    { label: "Standard Gravity (g) to Meter/sec²", from: "gravity-acceleration", to: "meter-per-second-squared" },
    { label: "Foot/sec² to MPH/s", from: "foot-per-second-squared", to: "mile-per-hour-second" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - NIST Guide to the SI (Special Publication 811)",
    "Society of Automotive Engineers (SAE) - SAE J670 Vehicle Dynamics Terminology",
    "National Highway Traffic Safety Administration (NHTSA) - FMVSS No. 135: Light Vehicle Brake Systems"
  ]
};
