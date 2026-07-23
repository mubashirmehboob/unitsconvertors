import { CustomArticleData } from "./types";

export const meterPerSecondToMilePerHour: CustomArticleData = {
  fromUnitId: "meter-per-second",
  toUnitId: "mile-per-hour",
  seoTitle: "Meter per Second to Mile per Hour Converter (m/s to mph)",
  metaDescription: "Convert meters per second to miles per hour (m/s to mph) accurately. Learn the conversion formula (m/s × 2.236936), step-by-step examples, and speed benchmarks.",
  h1: "Meter per Second to Mile per Hour Converter",
  introduction: [
    "Converting meters per second to miles per hour is a crucial velocity conversion when translating scientific, athletic, or meteorological data into United States and United Kingdom customary speed units. While m/s is the standard international metric unit for speed, miles per hour (mph) is used on speed limit signs and vehicle speedometers across the US and UK.",
    "Converting meters per second to miles per hour requires multiplying the m/s value by approximately 2.236936. This guide outlines the exact mathematical conversion, practical step-by-step calculation examples, mental calculation shortcuts, and reference speed tables."
  ],
  quickAnswer: {
    text: "To convert meters per second to miles per hour, multiply the speed in m/s by 2.236936. For example, 10 m/s equals approximately 22.37 mph, and 25 m/s equals roughly 55.92 mph.",
    formulaDisplay: "mph = m/s × 2.236936",
    subtext: "One meter per second is equal to approximately 2.237 miles per hour."
  },
  aboutSourceUnit: {
    title: "Understanding Meters per Second (m/s)",
    text: "The meter per second is the official SI unit of speed and velocity. Defined by the distance traveled in meters per second of elapsed time, m/s is used in physics equations, wind speed recording, ballistic trajectories, and aerospace engineering."
  },
  aboutTargetUnit: {
    title: "Understanding Miles per Hour (mph)",
    text: "The mile per hour is a customary unit of speed expressing the number of international statute miles covered in one hour. Used predominantly in the United States, the United Kingdom, and various island territories, mph regulates road traffic and aviation speed gauges."
  },
  relationship: "One international mile is standardized as 1,609.344 meters, and 1 hour contains 3,600 seconds. Dividing 3,600 by 1,609.344 gives the exact factor 2.236936292. Thus, 1 m/s ≈ 2.236936 mph.",
  relationshipTitle: "Meter per Second vs Mile per Hour Scale Comparison",
  relationshipItems: [
    { label: "1 m/s", value: "2.24 mph (Brisk walk)" },
    { label: "5 m/s", value: "11.18 mph (Running pace)" },
    { label: "10 m/s", value: "22.37 mph (100m sprint)" },
    { label: "26.82 m/s", value: "60.00 mph (Highway driving speed)" },
    { label: "44.70 m/s", value: "100.00 mph (High-speed vehicle)" }
  ],
  formula: {
    text: "Multiply the velocity in meters per second by 2.236936 to find the speed in miles per hour.",
    math: "mph = m/s × 2.236936",
    subtext: "To convert miles per hour back to meters per second, multiply by 0.44704."
  },
  formulaTitle: "Meter per Second to Mile per Hour Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To approximate m/s to mph in your head, double the m/s value and add 10% (e.g., 20 m/s × 2 = 40; 40 + 4 = 44 mph; exact value is 44.74 mph)."
  },
  expertNote: {
    title: "International Yard and Pound Agreement (1959)",
    text: "Since the 1959 international agreement, 1 yard is defined as exactly 0.9144 meters, making 1 mile exactly 1,609.344 meters. This anchors the exact conversion ratio between m/s and mph."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Baseball Fastball Velocity (42.5 m/s)",
        subtitle: "Convert a professional pitcher's 42.5 m/s fastball into miles per hour.",
        steps: [
          "Identify velocity in m/s: 42.5 m/s.",
          "Apply formula: mph = m/s × 2.236936.",
          "Calculate: 42.5 × 2.236936 = 95.06978.",
          "Result: 42.5 m/s equals approximately 95.07 mph."
        ]
      },
      {
        title: "Example 2: US Interstate Speed Limit (29.06 m/s)",
        subtitle: "Convert a highway speed of 29.06 m/s into miles per hour.",
        steps: [
          "Identify m/s speed: 29.06 m/s.",
          "Multiply by 2.236936: 29.06 × 2.236936 = 65.0059.",
          "Result: 29.06 m/s equals approximately 65 mph."
        ]
      }
    ]
  },
  table: {
    title: "Meter per Second to Mile per Hour Reference Table",
    headers: ["Meters per Second (m/s)", "Miles per Hour (mph)", "Practical Context"],
    rows: [
      { fromVal: "1 m/s", toVal: "2.24 mph", extra: "Walking velocity" },
      { fromVal: "2 m/s", toVal: "4.47 mph", extra: "Brisk walking pace" },
      { fromVal: "5 m/s", toVal: "11.18 mph", extra: "Marathon runner pace" },
      { fromVal: "10 m/s", toVal: "22.37 mph", extra: "Olympic track sprint" },
      { fromVal: "15 m/s", toVal: "33.55 mph", extra: "Urban driving speed" },
      { fromVal: "20 m/s", toVal: "44.74 mph", extra: "Suburban road speed" },
      { fromVal: "26.82 m/s", toVal: "60.00 mph", extra: "60 mph US highway speed" },
      { fromVal: "31.29 m/s", toVal: "70.00 mph", extra: "70 mph US interstate speed" },
      { fromVal: "40 m/s", toVal: "89.48 mph", extra: "Gale wind gust" },
      { fromVal: "50 m/s", toVal: "111.85 mph", extra: "Category 3 hurricane speed" }
    ]
  },
  applications: {
    title: "Real-World Applications of m/s to mph Conversions",
    items: [
      {
        title: "Ballistics & Sports Equipment Design",
        text: "Pitching velocity guns, golf launch monitors, and tennis serve trackers measure initial ball departure in m/s and display output in mph."
      },
      {
        title: "Tropical Cyclone Weather Warning Systems",
        text: "The US National Hurricane Center converts international meteorological m/s wind speed forecasts into mph for public safety announcements."
      },
      {
        title: "Vehicle Drag & Aerodynamics Testing",
        text: "Automotive wind tunnels measure airflow around chassis models in m/s before correlating drag figures with highway mph speeds."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1.609 instead of 2.237 (confusing distance conversion with velocity conversion).",
      "Confusing miles per hour (mph) with kilometers per hour (km/h).",
      "Dividing by 2.237 instead of multiplying when converting m/s to mph."
    ]
  },
  faqs: [
    {
      question: "How do you convert m/s to mph?",
      answer: "Multiply the velocity in meters per second by 2.236936."
    },
    {
      question: "What is 10 m/s in mph?",
      answer: "10 m/s is equal to approximately 22.37 mph."
    },
    {
      question: "What is 20 m/s in mph?",
      answer: "20 m/s is equal to approximately 44.74 mph."
    },
    {
      question: "What is 25 m/s in mph?",
      answer: "25 m/s is equal to approximately 55.92 mph."
    },
    {
      question: "What is 30 m/s in mph?",
      answer: "30 m/s is equal to approximately 67.11 mph."
    },
    {
      question: "Is 1 m/s faster than 1 mph?",
      answer: "Yes, 1 m/s equals roughly 2.24 mph, making 1 m/s more than twice as fast as 1 mph."
    },
    {
      question: "How many m/s is 60 mph?",
      answer: "60 mph is equal to exactly 26.8224 meters per second."
    }
  ],
  relatedList: [
    { label: "Meter per Second to Kilometer per Hour", from: "meter-per-second", to: "kilometer-per-hour" },
    { label: "Mile per Hour to Meter per Second", from: "mile-per-hour", to: "meter-per-second" },
    { label: "Meter per Second to Foot per Second", from: "meter-per-second", to: "foot-per-second" }
  ],
  references: [
    "NIST Handbook 44 - Metric to US Customary Conversions",
    "ISO 80000-3 - Quantities and Units of Space and Time"
  ]
};
