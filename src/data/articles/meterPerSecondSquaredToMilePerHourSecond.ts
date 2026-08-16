import { CustomArticleData } from "./types";

export const meterPerSecondSquaredToMilePerHourSecond: CustomArticleData = {
  fromUnitId: "meter-per-second-squared",
  toUnitId: "mile-per-hour-second",
  seoTitle: "Meter/sec² to MPH/s Converter (m/s² to mph/s)",
  metaDescription: "Convert meters per second squared to miles per hour per second (m/s² to mph/s) with exact conversion factors, automotive 0-60 mph formulas, and FAQs.",
  h1: "Meter/sec² to MPH/s Converter",
  introduction: [
    "The meter per second squared (m/s²) and the mile per hour per second (mph/s) bridge international physics standards and North American automotive performance metrics. While the meter per second squared is the coherent SI unit for all scientific acceleration calculations, the mile per hour per second expresses the direct rate at which a vehicle's speedometer advances in miles per hour each second.",
    "Converting meters per second squared to miles per hour per second is standard practice when evaluating vehicle 0–60 mph acceleration times, analyzing North American highway merging dynamics, or converting sensor accelerometer readings into consumer-friendly performance data. Because one international mile is defined as exactly 1,609.344 meters, an acceleration of 1 m/s² translates to approximately 2.236936 mph/s (or 1 ÷ 0.44704).",
    "This guide covers exact mathematical derivation, practical automotive calculation workflows, 0–60 mph correlation formulas, comprehensive conversion tables, and answers to common kinematics questions."
  ],
  quickAnswer: {
    text: "To convert meters per second squared (m/s²) to miles per hour per second (mph/s), multiply the acceleration figure by 2.236936 (or divide by 0.44704). For example, a sports car launching at 6.0 m/s² gains speed at a rate of approximately 13.42 mph every second.",
    formulaDisplay: "\\text{mph/s} = \\text{m/s}^2 \\times 2.236936",
    subtext: "1 m/s² is exactly equal to 3.6 / 1.609344 mph/s (approx. 2.236936292 mph/s)."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter per Second Squared (m/s²)",
    text: "The meter per second squared (m/s²) is the SI coherent derived unit of acceleration. Defined as an increase in linear speed of one meter per second over a duration of one second, it is the universal benchmark in mechanical dynamics, aerospace engineering, and physics research worldwide."
  },
  aboutTargetUnit: {
    title: "Understanding MPH/s (mph/s)",
    text: "The mile per hour per second (symbol: mph/s or mi/(h·s)) is a US customary and imperial acceleration unit. It indicates how many miles per hour an object's speed increases every second (1 mph/s = 0.44704 m/s² = 1.466667 ft/s²). It is the standard metric used in US automotive media, drag racing telemetry, and traffic engineering."
  },
  relationship: "The exact relationship between meters per second squared and miles per hour per second derives from the international definitions of the statute mile (1,609.344 m) and the hour (3,600 s): 1 m/s² = (1 m / 1 s²) × (1 mi / 1,609.344 m) × (3,600 s / 1 h) = 3,600 / 1,609.344 mph/s ≈ 2.2369362920544 mph/s. Conversely, 1 mph/s = 0.44704 m/s² exactly.",
  relationshipTitle: "Automotive Acceleration Equivalence",
  relationshipItems: [
    { label: "0.447 m/s²", value: "1.000 mph/s (Very gentle urban rolling start)" },
    { label: "1.000 m/s²", value: "2.237 mph/s (Comfortable city driving acceleration)" },
    { label: "2.682 m/s²", value: "6.000 mph/s (Standard passenger car 0–60 in 10s)" },
    { label: "4.470 m/s²", value: "10.000 mph/s (Quick passenger car 0–60 in 6s)" },
    { label: "9.807 m/s²", value: "21.937 mph/s (1 g standard gravity equivalence)" }
  ],
  formula: {
    text: "Multiply the acceleration in meters per second squared by 2.2369363 (or divide by 0.44704) to obtain the value in miles per hour per second.",
    math: "a_{(\\text{mph/s})} = a_{(\\text{m/s}^2)} \\times 2.2369363 = \\frac{a_{(\\text{m/s}^2)}}{0.44704}",
    subtext: "0.44704 is an exact definition (1.609344 km/mi ÷ 3.6)."
  },
  formulaTitle: "m/s² to mph/s Mathematical Formula",
  practicalTip: {
    title: "Quick Field Rule of Thumb",
    text: "To rapidly estimate mph/s in your head, double the m/s² value and add 10% (e.g., 5 m/s² → 5 × 2 = 10; 10 + 1 = 11 mph/s, very close to the exact 11.18 mph/s)."
  },
  expertNote: {
    title: "0–60 mph Acceleration Time Correlation",
    text: "Under uniform acceleration a (in m/s²), the time t required to reach 60 mph from a dead stop is t = 60 / a(mph/s) = (60 × 0.44704) / a = 26.8224 / a seconds. For example, an average acceleration of 8.94 m/s² achieves 0–60 mph in exactly 3.0 seconds."
  },
  examples: {
    title: "Step-by-Step Automotive Performance Examples",
    items: [
      {
        title: "Example 1: High-Performance Sports Sedan Launch",
        subtitle: "A performance electric car launches with an average initial acceleration of 7.2 m/s². Determine its speed increase rate in mph/s.",
        steps: [
          "State the SI acceleration rate: a = 7.2 m/s².",
          "Apply the exact division formula: 7.2 ÷ 0.44704.",
          "Compute: 7.2 ÷ 0.44704 = 16.10594...",
          "Result: 7.2 m/s² equals approximately 16.11 mph/s (reaching 60 mph in roughly 3.73 seconds)."
        ]
      },
      {
        title: "Example 2: Passenger Car Emergency Stop",
        subtitle: "A vehicle achieves an emergency braking deceleration of 9.0 m/s². Convert this stopping rate into mph/s.",
        steps: [
          "Record the deceleration: a = 9.0 m/s².",
          "Multiply by the conversion factor: 9.0 × 2.2369363.",
          "Calculate: 9.0 × 2.2369363 = 20.13242...",
          "Result: The car scrubs off speed at a rate of 20.13 mph per second."
        ]
      }
    ]
  },
  table: {
    title: "Quick Reference Conversion Table",
    headers: ["Input Value", "Converted Result", "Physical Context"],
    rows: [
      { fromVal: "0.5", toVal: "1.118468", extra: "Gentle highway cruising adjustment" },
      { fromVal: "1.0", toVal: "2.236936", extra: "Base unit conversion standard" },
      { fromVal: "2.0", toVal: "4.473873", extra: "Moderate suburban acceleration" },
      { fromVal: "3.0", toVal: "6.710809", extra: "Brisk highway on-ramp merge" },
      { fromVal: "4.5", toVal: "10.066213", extra: "Standard 0–60 mph in 6.0 seconds" },
      { fromVal: "6.0", toVal: "13.421618", extra: "0–60 mph in 4.5 seconds" },
      { fromVal: "8.0", toVal: "17.895490", extra: "Supercar launch control" },
      { fromVal: "9.80665", toVal: "21.936854", extra: "1 g Earth gravity equivalence" },
      { fromVal: "12.0", toVal: "26.843236", extra: "Racing car high-downforce braking" },
      { fromVal: "15.0", toVal: "33.554044", extra: "Drag racing top-fuel launch spike" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "Automotive Magazine Benchmarking & Dyno Testing",
        text: "Test engineers convert chassis dynamometer and VBOX GPS accelerometer readings in m/s² into mph/s to produce standardized 0–60 mph and quarter-mile acceleration curve graphs."
      },
      {
        title: "Traffic Engineering & Highway Ramp Design",
        text: "Civil engineers design highway entrance ramp lengths by modeling driver acceleration profiles in mph/s, converted from vehicle dynamics simulations run in m/s²."
      },
      {
        title: "Commercial Fleet Driver Telematics",
        text: "Fleet tracking devices log harsh acceleration and harsh braking events in m/s², converting the data into mph/s for driver safety scorecards."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Confusing mph/s with ft/s²: Both units are common in US engineering, but 1 mph/s = 1.46667 ft/s² = 0.44704 m/s². They cannot be used interchangeably.",
      "Using 2.24 Instead of Exact Factors in Data Logging: Rounding 2.236936 to 2.24 introduces a +0.14% error that compounds significantly when integrating acceleration to calculate vehicle velocity and distance over time.",
      "Confusing km/h/s with mph/s: Remember that 1 km/h/s is roughly 0.621 mph/s. Applying metric 3.6 to calculate mph/s creates an error of over 60%."
    ]
  },
  faqs: [
    {
      question: "How do I convert m/s² to mph/s?",
      answer: "Divide the acceleration value in m/s² by 0.44704, or multiply it by 2.2369363. For example, 5 m/s² divided by 0.44704 equals 11.1847 mph/s."
    },
    {
      question: "What is 1 m/s² in mph/s?",
      answer: "1 m/s² is exactly equal to 3.6 / 1.609344 mph/s, which is approximately 2.236936 mph/s."
    },
    {
      question: "What is 1 g of acceleration in mph/s?",
      answer: "1 g of acceleration (9.80665 m/s²) equals approximately 21.937 mph/s."
    },
    {
      question: "How do I calculate 0–60 mph time from acceleration in m/s²?",
      answer: "Assuming constant acceleration, divide 26.8224 by your acceleration in m/s². For example, an acceleration of 6.7 m/s² gives 26.8224 ÷ 6.7 ≈ 4.0 seconds to reach 60 mph."
    },
    {
      question: "How do I convert mph/s back to m/s²?",
      answer: "Multiply the mph/s value by exactly 0.44704. For example, 20 mph/s × 0.44704 = 8.9408 m/s²."
    },
    {
      question: "Why is 0.44704 used in the conversion?",
      answer: "One international statute mile is exactly 1,609.344 meters, and one hour is 3,600 seconds. 1,609.344 ÷ 3,600 = 0.44704 m/s per 1 mph."
    },
    {
      question: "What is a typical passenger car acceleration in mph/s?",
      answer: "A standard passenger car accelerates under normal throttle at roughly 3 to 6 mph/s (1.3 to 2.7 m/s²), while full throttle acceleration is typically 8 to 12 mph/s."
    },
    {
      question: "How does mph/s relate to feet per second squared (ft/s²)?",
      answer: "1 mph/s equals exactly 22/15 ft/s² (1.466667 ft/s²), because 1 mph equals 1.466667 ft/s."
    }
  ],
  relatedList: [
    { label: "Meter/sec² to KM/h/s", from: "meter-per-second-squared", to: "kilometer-per-hour-second" },
    { label: "Meter/sec² to Foot/sec²", from: "meter-per-second-squared", to: "foot-per-second-squared" },
    { label: "Foot/sec² to Meter/sec²", from: "foot-per-second-squared", to: "meter-per-second-squared" },
    { label: "Meter/sec² to Standard Gravity (g)", from: "meter-per-second-squared", to: "gravity-acceleration" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - NIST Guide to the SI, Chapter B.8: Factors for Units Listed by System",
    "Society of Automotive Engineers (SAE) - SAE J2807: Performance Requirements for Determining Tow-Vehicle Gross Ratings",
    "International Organization for Standardization (ISO) - ISO 80000-3:2019 Quantities and Units — Space and Time"
  ]
};
