import { CustomArticleData } from "./types";

export const footPerSecondSquaredToKilometerPerHourSecond: CustomArticleData = {
  fromUnitId: "foot-per-second-squared",
  toUnitId: "kilometer-per-hour-second",
  seoTitle: "Foot/sec² to KM/h/s Converter (ft/s² to km/h/s)",
  metaDescription: "Convert feet per second squared to kilometers per hour per second (ft/s² to km/h/s) with exact conversion factors, physics formulas, and step-by-step examples.",
  h1: "Foot/sec² to KM/h/s Converter",
  introduction: [
    "The foot per second squared (ft/s²) and the kilometer per hour per second (km/h/s) quantify acceleration across two distinct measurement paradigms. While ft/s² is the traditional imperial and US customary unit used in American aerospace dynamics, naval aviation catapults, and structural vibration testing, km/h/s is a practical metric unit commonly employed in European automotive benchmarking, rail transit acceleration profiles, and road safety engineering.",
    "Converting feet per second squared to kilometers per hour per second allows engineers and vehicle test analysts to translate kinematic acceleration directly into tangible road speedometer velocity gains. Under the 1959 International Yard and Pound Agreement, an international foot is legally fixed at exactly 0.3048 meters. Since 1 meter per second equals exactly 3.6 kilometers per hour, one foot per second squared converts to exactly 1.09728 kilometers per hour per second.",
    "This technical guide explains the underlying dimensional analysis, provides clear manual calculation procedures, worked vehicle performance examples, reference conversion tables, and answers the most frequent engineering questions."
  ],
  quickAnswer: {
    text: "To convert feet per second squared (ft/s²) to kilometers per hour per second (km/h/s), multiply the acceleration value by exactly 1.09728. For example, an acceleration of 10 ft/s² equals exactly 10.9728 km/h/s.",
    formulaDisplay: "\\text{km/h/s} = \\text{ft/s}^2 \\times 1.09728",
    subtext: "1 ft/s² is equal to exactly 1.09728 (km/h)/s (derived from 0.3048 m/s² × 3.6)."
  },
  aboutSourceUnit: {
    title: "Understanding the Foot per Second Squared (ft/s²)",
    text: "The foot per second squared (symbol: ft/s² or ft/sec²) is the imperial and US customary unit of acceleration. It represents a velocity increase of one foot per second every second. Widely utilized in American civil infrastructure, aeronautical flight telemetry, and ballistic weapon systems, it forms the standard acceleration basis in US customary mechanics alongside the slug and pound-force."
  },
  aboutTargetUnit: {
    title: "Understanding KM/h/s (km/h/s)",
    text: "The kilometer per hour per second (symbol: km/h/s or (km/h)/s) is a metric derivative unit that expresses how many kilometers per hour an object's velocity increases during each elapsed second. It is the primary metric metric used by rail transit engineers to specify commuter train station departures and by automotive publications to convey speed gain."
  },
  relationship: "The relationship between feet per second squared and kilometers per hour per second is mathematically exact. One international foot is defined as 0.3048 meters, and one meter per second equals 3.6 kilometers per hour. Multiplying 0.3048 by 3.6 yields exactly 1.09728 km/h/s per ft/s². Conversely, one kilometer per hour per second equals approximately 0.911344 ft/s².",
  relationshipTitle: "Acceleration Equivalence Across Systems",
  relationshipItems: [
    { label: "1 ft/s²", value: "1.09728 km/h/s (Exact conversion constant)" },
    { label: "3.28084 ft/s²", value: "3.60000 km/h/s (Equivalent to 1.0 m/s²)" },
    { label: "5 ft/s²", value: "5.48640 km/h/s (Moderate passenger train departure)" },
    { label: "10 ft/s²", value: "10.97280 km/h/s (Typical city automotive acceleration)" },
    { label: "32.174 ft/s²", value: "35.30394 km/h/s (Terrestrial standard 1 g gravity)" },
    { label: "50 ft/s²", value: "54.86400 km/h/s (High-performance sports car launch)" }
  ],
  formula: {
    text: "Multiply the acceleration in feet per second squared by the exact factor 1.09728 to calculate the rate in kilometers per hour per second.",
    math: "a_{(\\text{km/h/s})} = a_{(\\text{ft/s}^2)} \\times 1.09728",
    subtext: "1.09728 is exact: (0.3048 m/ft) × (3,600 s/h) ÷ (1,000 m/km)."
  },
  formulaTitle: "ft/s² to km/h/s Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation",
    text: "To approximate km/h/s from ft/s² in your head, simply add 10% to the ft/s² value. Because 1.09728 is less than 0.25% away from 1.10, adding one-tenth gives an immediate estimate accurate to within a quarter of a percent."
  },
  expertNote: {
    title: "Speed Gain vs Trajectory Calculation",
    text: "While ft/s² is ideal for physics equations involving distance (s = 1/2 a t²), km/h/s is optimized for driver feel and tachometer monitoring. Converting US flight recorder data from ft/s² to km/h/s gives international investigation teams an intuitive grasp of instantaneous airspeed trends."
  },
  examples: {
    title: "Step-by-Step Engineering Calculations",
    items: [
      {
        title: "Example 1: US Commuter Rail Departure",
        subtitle: "A diesel locomotive manufactured in the United States accelerates out of a suburban station at 3.5 ft/s². What is this acceleration expressed in km/h/s?",
        steps: [
          "Identify the given rate: a = 3.5 ft/s².",
          "Apply the exact multiplier: 3.5 × 1.09728.",
          "Calculate: 3.5 × 1.09728 = 3.84048.",
          "Result: The train gains speed at a rate of approximately 3.84 km/h per second."
        ]
      },
      {
        title: "Example 2: Carrier Catapult Initial Boost",
        subtitle: "A naval aircraft launch shuttle accelerates an airframe at an average of 95 ft/s². Convert this figure to km/h/s.",
        steps: [
          "State the value: a = 95 ft/s².",
          "Multiply by 1.09728: 95 × 1.09728.",
          "Compute: 95 × 1.09728 = 104.2416.",
          "Result: 95 ft/s² corresponds to a speed increase of 104.24 km/h every second."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: ft/s² to km/h/s",
    headers: ["Acceleration (ft/s²)", "Rate (km/h/s)", "Operational Context"],
    rows: [
      { fromVal: "1.0", toVal: "1.09728", extra: "Precise dimensional baseline" },
      { fromVal: "2.0", toVal: "2.19456", extra: "Gentle elevator acceleration" },
      { fromVal: "3.0", toVal: "3.29184", extra: "Comfortable urban bus departure" },
      { fromVal: "5.0", toVal: "5.48640", extra: "Standard passenger vehicle acceleration" },
      { fromVal: "10.0", toVal: "10.97280", extra: "Brisk highway ramp merge" },
      { fromVal: "15.0", toVal: "16.45920", extra: "Spirited electric vehicle launch" },
      { fromVal: "20.0", toVal: "21.94560", extra: "Performance sports car acceleration" },
      { fromVal: "32.174", toVal: "35.30394", extra: "Standard Earth gravity (1.0 g)" },
      { fromVal: "50.0", toVal: "54.86400", extra: "Track racing car acceleration" },
      { fromVal: "100.0", toVal: "109.72800", extra: "Aerospace rocket launch vehicle" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "International Automotive Road Testing",
        text: "Automotive testing laboratories that record telemetry in US customary units convert acceleration channels to km/h/s to verify 0–100 km/h sprint parameters for international markets."
      },
      {
        title: "Rail Transit Systems & Passenger Comfort",
        text: "Commuter rail authorities use km/h/s thresholds (typically 2.5 to 4.0 km/h/s) to evaluate jerk and passenger standing comfort when evaluating US-built rolling stock."
      },
      {
        title: "Aerospace & Flight Simulation",
        text: "Simulators translating US aerodynamic flight manuals into global pilot training displays convert longitudinal acceleration into speedometer gain rates."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing ft/s² with ft/s: Foot per second squared is acceleration, while foot per second is velocity. Multiplying ft/s by 1.09728 does not yield acceleration.",
      "Dividing instead of multiplying: To convert ft/s² to km/h/s, multiply by 1.09728. Dividing by 1.09728 converts km/h/s back to ft/s².",
      "Rounding the constant prematurely: In high-speed trajectory modeling, using 1.1 instead of 1.09728 creates a 0.25% compounding calculation error."
    ]
  },
  faqs: [
    {
      question: "How do you convert ft/s² to km/h/s?",
      answer: "Multiply the acceleration value in ft/s² by exactly 1.09728. For instance, 8 ft/s² multiplied by 1.09728 equals 8.77824 km/h/s."
    },
    {
      question: "What is 1 foot per second squared in km/h/s?",
      answer: "1 ft/s² is equal to exactly 1.09728 km/h/s."
    },
    {
      question: "Where does the factor 1.09728 come from?",
      answer: "It is the mathematical product of the foot-to-meter definition (0.3048 m/ft) and the meter-per-second to kilometer-per-hour factor (3.6 (km/h)/(m/s)). 0.3048 × 3.6 = 1.09728."
    },
    {
      question: "How many ft/s² are in 1 km/h/s?",
      answer: "1 km/h/s is equal to approximately 0.911344 ft/s² (calculated as 1 ÷ 1.09728)."
    },
    {
      question: "What is Earth's gravity in km/h/s?",
      answer: "Standard Earth gravity of 32.17405 ft/s² (9.80665 m/s²) corresponds to exactly 35.30394 km/h/s."
    },
    {
      question: "Why is km/h/s useful for vehicle dynamics?",
      answer: "It relates acceleration directly to the speedometer display. An acceleration of 10 km/h/s means the car's speedometer reading climbs by 10 km/h with every passing second."
    },
    {
      question: "How do I convert km/h/s back to ft/s²?",
      answer: "Divide the km/h/s value by 1.09728, or multiply by 0.911344. For example, 10.9728 km/h/s ÷ 1.09728 = 10 ft/s²."
    },
    {
      question: "Is ft/s² to km/h/s an exact conversion?",
      answer: "Yes, the factor 1.09728 is mathematically exact because both the international foot (0.3048 m) and the hour-to-second ratio (3,600 s) are exact constants."
    }
  ],
  relatedList: [
    { label: "Foot/sec² to Meter/sec²", from: "foot-per-second-squared", to: "meter-per-second-squared" },
    { label: "Foot/sec² to MPH/s", from: "foot-per-second-squared", to: "mile-per-hour-second" },
    { label: "Meter/sec² to KM/h/s", from: "meter-per-second-squared", to: "kilometer-per-hour-second" },
    { label: "Standard Gravity (g) to KM/h/s", from: "gravity-acceleration", to: "kilometer-per-hour-second" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - Special Publication 811: Guide for the Use of the International System of Units (SI)",
    "International Organization for Standardization (ISO) - ISO 80000-3:2019 Quantities and Units — Space and Time",
    "Society of Automotive Engineers (SAE) - Vehicle Acceleration and Performance Test Procedures"
  ]
};
