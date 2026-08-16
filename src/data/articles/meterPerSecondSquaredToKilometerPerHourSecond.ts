import { CustomArticleData } from "./types";

export const meterPerSecondSquaredToKilometerPerHourSecond: CustomArticleData = {
  fromUnitId: "meter-per-second-squared",
  toUnitId: "kilometer-per-hour-second",
  seoTitle: "Meter/sec² to KM/h/s Converter (m/s² to km/h/s)",
  metaDescription: "Convert meters per second squared to kilometers per hour per second (m/s² to km/h/s) with exact speed-rate formulas, automotive acceleration benchmarks, and FAQs.",
  h1: "Meter/sec² to KM/h/s Converter",
  introduction: [
    "The meter per second squared (m/s²) and the kilometer per hour per second (km/h/s) are metric rates of acceleration. While the meter per second squared is the coherent derived unit of acceleration in pure physics, the kilometer per hour per second provides an intuitive, real-world metric used by automotive road testers, railway transport authorities, and commercial vehicle engineers to express how quickly a vehicle gains road speed.",
    "Converting meters per second squared to kilometers per hour per second is standard when interpreting vehicle telemetry, benchmarking 0–100 km/h acceleration figures, or assessing passenger train braking comfort. Because 1 m/s equals exactly 3.6 km/h, an acceleration of 1 m/s² causes a vehicle's speedometer to increase by exactly 3.6 km/h every second (1 m/s² = 3.6 km/h/s).",
    "This technical guide details the relationship between SI acceleration and speedometer gain rates, provides worked automotive calculation examples, and includes practical engineering reference tables."
  ],
  quickAnswer: {
    text: "To convert meters per second squared (m/s²) to kilometers per hour per second (km/h/s), multiply the acceleration value by exactly 3.6. For example, an acceleration of 2.5 m/s² translates to a gain of exactly 9 km/h every second.",
    formulaDisplay: "\\text{km/h/s} = \\text{m/s}^2 \\times 3.6",
    subtext: "1 m/s² is exactly equal to 3.6 km/h/s (since 1 m/s = 3.6 km/h)."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter per Second Squared (m/s²)",
    text: "The meter per second squared (symbol: m/s²) is the SI coherent unit of acceleration. It measures the change in linear velocity of one meter per second occurring over a one-second interval, serving as the benchmark for physics equations, sensor calibration, and dynamics modeling."
  },
  aboutTargetUnit: {
    title: "Understanding KM/h/s (km/h/s)",
    text: "The kilometer per hour per second (symbol: km/h/s or km/(h·s)) is a practical metric acceleration unit. It indicates the number of kilometers per hour an object's speed increases or decreases each second (1 km/h/s = 1/3.6 m/s² ≈ 0.277778 m/s²). It is extensively used in automotive testing and railway traction design."
  },
  relationship: "The mathematical relationship between m/s² and km/h/s is exact and derived from the ratio of kilometers to meters (1,000 m/km) and seconds to hours (3,600 s/h): (1 m/s²) = (1 m / 1 s²) × (1 km / 1,000 m) × (3,600 s / 1 h) = 3.6 (km/h)/s. Conversely, 1 km/h/s = 1 / 3.6 m/s² ≈ 0.27777778 m/s².",
  relationshipTitle: "Vehicle Acceleration Rate Equivalence",
  relationshipItems: [
    { label: "0.5 m/s²", value: "1.8 km/h/s (Smooth high-speed passenger train cruising acceleration)" },
    { label: "1.0 m/s²", value: "3.6 km/h/s (Comfortable city bus standard acceleration)" },
    { label: "2.78 m/s²", value: "10.0 km/h/s (Modern family passenger car typical acceleration)" },
    { label: "5.0 m/s²", value: "18.0 km/h/s (High-performance sports vehicle acceleration)" },
    { label: "9.81 m/s²", value: "35.3 km/h/s (1 g equivalent, sports car braking maximum)" }
  ],
  formula: {
    text: "Multiply the acceleration in meters per second squared by 3.6 to calculate the rate in kilometers per hour per second.",
    math: "a_{(\\text{km/h/s})} = a_{(\\text{m/s}^2)} \\times 3.6",
    subtext: "3.6 is an exact conversion factor (3,600 seconds per hour ÷ 1,000 meters per kilometer)."
  },
  formulaTitle: "m/s² to km/h/s Formula",
  practicalTip: {
    title: "Quick Mental Calculation",
    text: "To find km/h/s quickly without a calculator, triple the m/s² value and add 60% of the original value (e.g., 4 m/s² → 4 × 3 = 12; 12 + 2.4 = 14.4 km/h/s)."
  },
  expertNote: {
    title: "0–100 km/h Time Estimation",
    text: "For a constant acceleration rate a in m/s², the time required to accelerate from zero to 100 km/h is simply t = 100 ÷ (a × 3.6) = 27.78 ÷ a seconds. For an acceleration of 5.56 m/s² (20 km/h/s), 0–100 km/h takes exactly 5.0 seconds."
  },
  examples: {
    title: "Step-by-Step Automotive Calculations",
    items: [
      {
        title: "Example 1: Electric Vehicle Launch Performance",
        subtitle: "An electric car accelerates from a standstill with an initial average acceleration of 6.5 m/s². Determine its speed gain per second in km/h/s.",
        steps: [
          "State the measured acceleration: a = 6.5 m/s².",
          "Multiply by the conversion factor 3.6: 6.5 × 3.6.",
          "Compute: 6.5 × 3.6 = 23.4.",
          "Result: The vehicle gains speed at a rate of exactly 23.4 km/h every second."
        ]
      },
      {
        title: "Example 2: Metro Transit Service Braking",
        subtitle: "A modern underground subway train applies service brakes providing 1.2 m/s² of deceleration. Convert this to km/h/s.",
        steps: [
          "Identify the deceleration rate: a = 1.2 m/s².",
          "Multiply by 3.6: 1.2 × 3.6.",
          "Compute: 1.2 × 3.6 = 4.32.",
          "Result: The subway train slows down at a rate of 4.32 km/h per second."
        ]
      }
    ]
  },
  table: {
    title: "Quick Reference Conversion Table",
    headers: ["Input Value", "Converted Result", "Physical Context"],
    rows: [
      { fromVal: "0.2", toVal: "0.72", extra: "Heavy freight train gradual start" },
      { fromVal: "0.5", toVal: "1.80", extra: "High-speed rail passenger comfort limit" },
      { fromVal: "1.0", toVal: "3.60", extra: "Urban transit bus standard acceleration" },
      { fromVal: "1.5", toVal: "5.40", extra: "Subway train brisk departure" },
      { fromVal: "2.0", toVal: "7.20", extra: "Standard economy passenger car" },
      { fromVal: "3.0", toVal: "10.80", extra: "Brisk highway ramp merge" },
      { fromVal: "5.0", toVal: "18.00", extra: "Sports performance vehicle launch" },
      { fromVal: "8.0", toVal: "28.80", extra: "Supercar aggressive acceleration" },
      { fromVal: "9.80665", toVal: "35.3039", extra: "1 g standard gravity equivalence" },
      { fromVal: "12.0", toVal: "43.20", extra: "High-downforce racing vehicle braking" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "Automotive Benchmarking & Track Telemetry",
        text: "Automotive testing engineers convert accelerometer data logged in m/s² into km/h/s to directly correlate g-forces with speed curve graphs and quarter-mile split times."
      },
      {
        title: "Rail Transit System Passenger Comfort Standards",
        text: "Urban transit standards (such as EN 12299) regulate service braking and acceleration jerk limits in m/s² and km/h/s to ensure standing passengers maintain balance."
      },
      {
        title: "Autonomous Vehicle Path Planning",
        text: "Self-driving car motion planning controllers calculate speed profile ramps in km/h/s before converting them to actuator torque commands governed in m/s²."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Dividing by 3.6 Instead of Multiplying: To convert m/s to km/h (or m/s² to km/h/s), you must multiply by 3.6. Dividing by 3.6 converts km/h back into m/s.",
      "Confusing km/h/s with km/h²: km/h/s has mixed time units (hours in the velocity term, seconds in the time interval). Converting to kilometers per hour squared (km/h²) requires multiplying by 3,600² / 1,000 = 12,960.",
      "Assuming Acceleration Remains Constant Across Speed: Internal combustion engines produce non-linear acceleration curves; converting an instantaneous m/s² reading gives the instantaneous km/h/s rate, not the overall 0–100 km/h average."
    ]
  },
  faqs: [
    {
      question: "How do I convert m/s² to km/h/s?",
      answer: "Multiply the acceleration value in m/s² by exactly 3.6. For example, 3 m/s² × 3.6 = 10.8 km/h/s."
    },
    {
      question: "What is 1 m/s² in km/h/s?",
      answer: "1 m/s² is exactly equal to 3.6 km/h/s."
    },
    {
      question: "Why is the conversion factor exactly 3.6?",
      answer: "There are 3,600 seconds in an hour and 1,000 meters in a kilometer. 3,600 ÷ 1,000 = 3.6, making the conversion factor exact."
    },
    {
      question: "What is 1 g in km/h/s?",
      answer: "1 g (9.80665 m/s²) equals approximately 35.304 km/h/s, meaning an object falling under 1 g gravity gains about 35.3 km/h of speed every second (neglecting air resistance)."
    },
    {
      question: "How do I convert km/h/s back to m/s²?",
      answer: "Divide the km/h/s value by 3.6. For example, 18 km/h/s ÷ 3.6 = 5.0 m/s²."
    },
    {
      question: "How is km/h/s related to 0 to 100 km/h time?",
      answer: "If acceleration is constant, divide 100 by the acceleration in km/h/s to find the 0–100 km/h time in seconds. For instance, 20 km/h/s gives 100 ÷ 20 = 5.0 seconds."
    },
    {
      question: "Where is km/h/s commonly used?",
      answer: "km/h/s is standard in automotive engineering, passenger train specifications, traffic engineering, and motor sport telemetry across metric-using countries."
    },
    {
      question: "What is comfortable passenger acceleration on trains?",
      answer: "A comfortable acceleration rate for standing passengers in transit trains is typically between 0.8 m/s² and 1.2 m/s² (approx. 2.9 to 4.3 km/h/s)."
    }
  ],
  relatedList: [
    { label: "Meter/sec² to MPH/s", from: "meter-per-second-squared", to: "mile-per-hour-second" },
    { label: "Meter/sec² to Foot/sec²", from: "meter-per-second-squared", to: "foot-per-second-squared" },
    { label: "Meter/sec² to Standard Gravity (g)", from: "meter-per-second-squared", to: "gravity-acceleration" },
    { label: "Foot/sec² to Meter/sec²", from: "foot-per-second-squared", to: "meter-per-second-squared" }
  ],
  references: [
    "International Organization for Standardization (ISO) - ISO 80000-3:2019 Quantities and Units — Space and Time",
    "Society of Automotive Engineers (SAE) - SAE J1213: Glossary of Automotive Electronic Terms",
    "European Committee for Standardization (CEN) - EN 12299: Railway Applications — Ride Comfort for Passengers"
  ]
};
