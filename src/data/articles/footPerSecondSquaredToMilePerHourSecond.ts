import { CustomArticleData } from "./types";

export const footPerSecondSquaredToMilePerHourSecond: CustomArticleData = {
  fromUnitId: "foot-per-second-squared",
  toUnitId: "mile-per-hour-second",
  seoTitle: "Foot/sec² to MPH/s Converter (ft/s² to mph/s)",
  metaDescription: "Convert feet per second squared to miles per hour per second (ft/s² to mph/s) with exact fractional derivations, automotive 0-60 calculations, and worked examples.",
  h1: "Foot/sec² to MPH/s Converter",
  introduction: [
    "The foot per second squared (ft/s²) and the mile per hour per second (mph/s) are the two primary imperial and US customary units used to measure linear acceleration. While the foot per second squared is the standard engineering unit in aeronautical dynamics, civil engineering, and structural vibration analysis, the mile per hour per second is the intuitive benchmark favored by North American automotive journalists, drag racers, and vehicle manufacturers.",
    "Converting feet per second squared to miles per hour per second directly translates kinematic physics into speedometer terms. Because one mile contains exactly 5,280 feet and one hour contains 3,600 seconds, one mile per hour equals exactly 22/15 feet per second (1.466667 ft/s). Consequently, an acceleration of one foot per second squared equals exactly 15/22 miles per hour per second, or approximately 0.681818 mph/s.",
    "This reference guide breaks down the exact fractional conversion, provides step-by-step automotive calculations including 0–60 mph acceleration times, and presents comprehensive reference tables and expert tips."
  ],
  quickAnswer: {
    text: "To convert feet per second squared (ft/s²) to miles per hour per second (mph/s), multiply the value by 15/22 (or approximately 0.681818). For example, an acceleration of 22 ft/s² corresponds to exactly 15 mph/s.",
    formulaDisplay: "\\text{mph/s} = \\text{ft/s}^2 \\times \\frac{15}{22} \\approx \\text{ft/s}^2 \\times 0.681818",
    subtext: "1 ft/s² is equal to exactly 15/22 (≈ 0.681818) mph/s, derived from 3,600 s/h ÷ 5,280 ft/mi."
  },
  aboutSourceUnit: {
    title: "Understanding the Foot per Second Squared (ft/s²)",
    text: "The foot per second squared (symbol: ft/s² or ft/sec²) is the standard unit of acceleration in the English engineering and US customary systems. It quantifies the rate at which velocity increases by one foot per second during each second of elapsed time. It is the core kinematic term used in US aerodynamic models, catapult launches, and ballistic equations."
  },
  aboutTargetUnit: {
    title: "Understanding MPH/s (mph/s)",
    text: "The mile per hour per second (symbol: mph/s or (mi/h)/s) is a rate of acceleration expressing how many miles per hour a vehicle's speed increases every second. It provides a direct, intuitive measurement for automotive performance testing and track telemetry across North America and the United Kingdom."
  },
  relationship: "The relationship between ft/s² and mph/s is defined by the fundamental constants of the imperial system: 5,280 feet per statute mile and 3,600 seconds per hour. Since 1 mph = 5,280 ft / 3,600 s = 22/15 ft/s, 1 mph/s = 22/15 ft/s² ≈ 1.466667 ft/s². Inverting this ratio yields 1 ft/s² = 15/22 mph/s ≈ 0.681818 mph/s.",
  relationshipTitle: "Acceleration Benchmark Equivalence",
  relationshipItems: [
    { label: "1.46667 ft/s²", value: "1.00000 mph/s (Exact 22/15 baseline)" },
    { label: "5 ft/s²", value: "3.40909 mph/s (Gentle city driving acceleration)" },
    { label: "10 ft/s²", value: "6.81818 mph/s (Standard highway merge acceleration)" },
    { label: "22 ft/s²", value: "15.00000 mph/s (Exact integer performance milestone)" },
    { label: "32.174 ft/s²", value: "21.93685 mph/s (Standard Earth gravity, 1 g)" },
    { label: "44 ft/s²", value: "30.00000 mph/s (High-performance sports car launch)" }
  ],
  formula: {
    text: "Multiply the acceleration in feet per second squared by 15 and divide by 22 (or multiply by approximately 0.681818) to calculate miles per hour per second.",
    math: "a_{(\\text{mph/s})} = a_{(\\text{ft/s}^2)} \\times \\frac{15}{22}",
    subtext: "15/22 is the exact reduced fraction of 3,600 s/h divided by 5,280 ft/mi."
  },
  formulaTitle: "ft/s² to mph/s Conversion Formula",
  practicalTip: {
    title: "Quick Mental Calculation Rule",
    text: "To approximate mph/s in your head, multiply the ft/s² value by 7 and divide by 10 (or subtract roughly 30%). For example, 20 ft/s² × 0.7 = 14 mph/s, which is exceptionally close to the exact 13.64 mph/s."
  },
  expertNote: {
    title: "Calculating 0–60 mph Acceleration Times",
    text: "Since 60 mph is equal to exactly 88 ft/s (60 × 22/15), the time required to accelerate from 0 to 60 mph under constant acceleration a in ft/s² is simply t = 88 ÷ a seconds. For instance, an acceleration of 22 ft/s² (15 mph/s) completes the 0–60 sprint in exactly 88 ÷ 22 = 4.0 seconds."
  },
  examples: {
    title: "Step-by-Step Automotive Calculations",
    items: [
      {
        title: "Example 1: Sports Sedan Passing Acceleration",
        subtitle: "A sports sedan accelerates during a highway overtaking maneuver at 14.5 ft/s². Convert this acceleration rate to mph/s.",
        steps: [
          "State the measured acceleration: a = 14.5 ft/s².",
          "Apply the exact fraction: 14.5 × (15 / 22).",
          "Multiply 14.5 by 15: 217.5.",
          "Divide by 22: 217.5 ÷ 22 ≈ 9.88636.",
          "Result: The vehicle gains speed at approximately 9.89 mph every second."
        ]
      },
      {
        title: "Example 2: Drag Strip Launch Rate",
        subtitle: "A professional dragster launches off the starting line with an average acceleration of 66 ft/s² over the initial 60 feet. Express this rate in mph/s.",
        steps: [
          "State the initial launch rate: a = 66 ft/s².",
          "Apply the fractional formula: 66 × (15 / 22).",
          "Simplify: (66 ÷ 22) × 15 = 3 × 15 = 45.",
          "Result: 66 ft/s² equals exactly 45.0 mph/s."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: ft/s² to mph/s",
    headers: ["Acceleration (ft/s²)", "Rate (mph/s)", "Automotive Context"],
    rows: [
      { fromVal: "1.467", toVal: "1.0000", extra: "Exact baseline (22/15 ft/s²)" },
      { fromVal: "3.000", toVal: "2.0455", extra: "Gradual neighborhood cruising acceleration" },
      { fromVal: "5.000", toVal: "3.4091", extra: "Relaxed suburban passenger car pace" },
      { fromVal: "10.000", toVal: "6.8182", extra: "Brisk traffic light departure" },
      { fromVal: "14.667", toVal: "10.0000", extra: "Strong passenger car acceleration" },
      { fromVal: "22.000", toVal: "15.0000", extra: "Performance car 0–60 in 4.0s" },
      { fromVal: "29.333", toVal: "20.0000", extra: "Supercar 0–60 in 3.0s" },
      { fromVal: "32.174", toVal: "21.9369", extra: "Standard Earth gravity (1.0 g)" },
      { fromVal: "44.000", toVal: "30.0000", extra: "Hypercar launch (0–60 in 2.0s)" },
      { fromVal: "88.000", toVal: "60.0000", extra: "Top Fuel dragster launch stage" }
    ]
  },
  applications: {
    title: "Real-World Automotive & Testing Applications",
    items: [
      {
        title: "Vehicle 0–60 and Quarter-Mile Telemetry",
        text: "Automotive data acquisition systems measuring triaxial accelerometer channels in ft/s² convert longitudinal readings to mph/s to analyze gear change intervals and traction limits."
      },
      {
        title: "Brake Testing & Deceleration Compliance",
        text: "Federal Motor Vehicle Safety Standards (FMVSS) specify passenger vehicle stopping distances. Converting deceleration rates from ft/s² to mph/s helps engineers verify pedal feel and ABS stopping thresholds."
      },
      {
        title: "Highway Ramp & Civil Geometry Design",
        text: "Civil highway engineers design freeway on-ramps using acceleration envelopes. Converting ft/s² to mph/s allows direct comparison against posted highway speed limits."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1.46667 instead of 0.681818: 1.466667 (22/15) converts mph/s to ft/s². To convert ft/s² to mph/s, you must multiply by 15/22 (0.681818).",
      "Treating 15/22 as 0.68 without decimals: Truncating to 0.68 introduces a 0.27% error, which compounds significantly in multi-second acceleration simulations.",
      "Confusing ft/s with ft/s²: Foot per second is velocity, whereas foot per second squared is acceleration. Ensure your input data represents rate of speed change."
    ]
  },
  faqs: [
    {
      question: "How do you convert ft/s² to mph/s?",
      answer: "Multiply the acceleration in ft/s² by 15/22, or by approximately 0.681818. For example, 22 ft/s² × (15/22) = 15 mph/s."
    },
    {
      question: "What is 1 foot per second squared in mph/s?",
      answer: "1 ft/s² is equal to exactly 15/22 mph/s, or approximately 0.681818 mph/s."
    },
    {
      question: "Why does 1 mph equal 1.46667 ft/s?",
      answer: "Because 1 statute mile equals 5,280 feet and 1 hour equals 3,600 seconds. 5,280 ÷ 3,600 = 22/15 = 1.466667 ft/s."
    },
    {
      question: "How do you convert mph/s back to ft/s²?",
      answer: "Multiply the mph/s value by 22/15 (or approximately 1.466667). For instance, 30 mph/s × (22/15) = 44 ft/s²."
    },
    {
      question: "What is standard Earth gravity (32.174 ft/s²) in mph/s?",
      answer: "Standard Earth gravity of 32.17405 ft/s² equals approximately 21.93685 mph/s. In free fall in a vacuum, an object accelerates downward by nearly 22 mph every second."
    },
    {
      question: "How fast is an acceleration of 10 ft/s² in mph/s?",
      answer: "10 ft/s² multiplied by 15/22 equals approximately 6.82 mph/s."
    },
    {
      question: "How does ft/s² relate to 0–60 mph time?",
      answer: "Under constant acceleration, 0–60 mph time in seconds equals 88 divided by acceleration in ft/s² (t = 88 / a)."
    },
    {
      question: "Can I use the fraction 15/22 for exact calculations?",
      answer: "Yes, 15/22 is the exact mathematical ratio between foot per second squared and mile per hour per second based on standard definitions."
    }
  ],
  relatedList: [
    { label: "Foot/sec² to Meter/sec²", from: "foot-per-second-squared", to: "meter-per-second-squared" },
    { label: "Foot/sec² to KM/h/s", from: "foot-per-second-squared", to: "kilometer-per-hour-second" },
    { label: "Meter/sec² to MPH/s", from: "meter-per-second-squared", to: "mile-per-hour-second" },
    { label: "Standard Gravity (g) to MPH/s", from: "gravity-acceleration", to: "mile-per-hour-second" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - NIST Guide to the SI (Special Publication 811)",
    "Society of Automotive Engineers (SAE) - Surface Vehicle Recommended Practice J670",
    "Federal Highway Administration (FHWA) - Manual on Uniform Traffic Control Devices (MUTCD)"
  ]
};
