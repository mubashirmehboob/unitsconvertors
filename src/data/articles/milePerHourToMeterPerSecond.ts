import { CustomArticleData } from "./types";

export const milePerHourToMeterPerSecond: CustomArticleData = {
  fromUnitId: "mile-per-hour",
  toUnitId: "meter-per-second",
  seoTitle: "Mile per Hour to Meter per Second Converter (mph to m/s)",
  metaDescription: "Convert miles per hour to meters per second (mph to m/s) with exact precision. Official SI conversion factors, worked examples, and speed comparison tables.",
  h1: "Mile per Hour to Meter per Second Converter",
  introduction: [
    "Converting miles per hour to meters per second translates customary automotive and meteorological speeds into the foundational SI unit of velocity utilized across physics, aerodynamics, international sports, and scientific computing. While highway speed limits in the United States and the United Kingdom are posted in miles per hour, physics equations and global kinematic algorithms strictly require velocity inputs in meters per second.",
    "By international agreement (the 1959 International Yard and Pound Agreement), one international mile is defined as exactly 1,609.344 meters. Because an hour consists of 3,600 seconds, dividing 1,609.344 by 3,600 yields the exact conversion constant of 0.44704. Therefore, one mile per hour equals exactly 0.44704 meters per second. This guide provides exact conversion formulas, step-by-step calculation examples, scientific applications, and comprehensive lookup tables."
  ],
  quickAnswer: {
    text: "To convert miles per hour to meters per second, multiply the speed by exactly 0.44704 (or divide by 2.236936). For example, 60 mph equals exactly 26.8224 m/s.",
    formulaDisplay: "m/s = mph × 0.44704",
    subtext: "Exact relationship: 1 mph = 1,609.344 m / 3,600 s = 0.44704 m/s.\n1 m/s ≈ 2.236936 mph."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Hour (mph)",
    text: "The mile per hour (mph) is an imperial and US customary unit of speed expressing the number of statute miles traveled in one hour. It serves as the legal road speed measurement in the United States, the United Kingdom, and various Caribbean and oceanic territories."
  },
  aboutTargetUnit: {
    title: "Understanding Meters per Second (m/s)",
    text: "The meter per second (m/s) is the coherent SI base-derived unit of speed and velocity. Defined as traversing one meter of distance in one second of time, it forms the standard input for Newtonian mechanics ($F = ma$, kinetic energy $E_k = \\frac{1}{2}mv^2$, and aerodynamic drag calculations)."
  },
  relationship: "One mile per hour equals exactly 0.44704 meters per second, and one meter per second equals approximately 2.236936 miles per hour. Multiplying any mph value by 0.44704 yields its exact SI equivalent in meters per second.",
  relationshipTitle: "Mile per Hour to Meter per Second Milestones",
  relationshipItems: [
    { label: "Bicycle Commute (15 mph)", value: "6.7056 m/s" },
    { label: "Residential Zone (25 mph)", value: "11.1760 m/s" },
    { label: "US Highway Speed (65 mph)", value: "29.0576 m/s" },
    { label: "Fastball Pitch (100 mph)", value: "44.7040 m/s" },
    { label: "Category 5 Hurricane (157 mph)", value: "70.1853 m/s" }
  ],
  formula: {
    text: "Multiply the velocity in miles per hour by the exact factor 0.44704 to obtain the speed in meters per second.",
    math: "\\text{m/s} = \\text{mph} \\times 0.44704",
    subtext: "To convert meters per second back into miles per hour, divide the value by 0.44704 (or multiply by ~2.236936)."
  },
  formulaTitle: "Mile per Hour to Meter per Second Formula",
  practicalTip: {
    title: "Quick Halving Estimation Rule",
    text: "For a fast mental approximation: divide the mph value in half and subtract 10% of that half (e.g., 60 mph ÷ 2 = 30, minus 10% = 27 m/s, very close to the true 26.82 m/s)."
  },
  expertNote: {
    title: "Exact Fraction Representation",
    text: "In rational arithmetic, the exact conversion ratio is $\\frac{1397}{3125}$ or simplified as $\\frac{1.609344}{3.6} = \\frac{27.94}{62.5} = 0.44704$, which introduces zero recurring decimals or rounding error in computer floating-point calculations."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: US Interstate Highway Cruise (70 mph)",
        subtitle: "Convert a highway cruising speed of 70 mph into meters per second for aerodynamic vehicle drag simulation.",
        steps: [
          "State starting velocity: 70 mph.",
          "Apply conversion constant: m/s = 70 × 0.44704.",
          "Compute: 70 × 0.44704 = 31.2928.",
          "Result: 70 mph equals exactly 31.2928 m/s."
        ]
      },
      {
        title: "Example 2: Baseball Pitch Velocity (95 mph)",
        subtitle: "Convert a 95 mph fastball into SI velocity to analyze flight time across an 18.44-meter baseball diamond.",
        steps: [
          "Identify pitch speed: 95 mph.",
          "Apply formula: m/s = 95 × 0.44704.",
          "Compute: 95 × 0.44704 = 42.4688.",
          "Result: 95 mph equals exactly 42.4688 m/s (crossing the diamond in ~0.434 seconds)."
        ]
      }
    ]
  },
  table: {
    title: "Mile per Hour to Meter per Second Reference Table",
    headers: ["Speed (mph)", "Speed (m/s)", "Speed (km/h)", "Typical Context"],
    rows: [
      { fromVal: "5 mph", toVal: "2.2352 m/s", extra: "8.0467 km/h", extra2: "Brisk walking pace" },
      { fromVal: "15 mph", toVal: "6.7056 m/s", extra: "24.1402 km/h", extra2: "School zone speed limit" },
      { fromVal: "25 mph", toVal: "11.1760 m/s", extra: "40.2336 km/h", extra2: "Urban residential street" },
      { fromVal: "35 mph", toVal: "15.6464 m/s", extra: "56.3270 km/h", extra2: "Commercial suburban artery" },
      { fromVal: "45 mph", toVal: "20.1168 m/s", extra: "72.4205 km/h", extra2: "Rural two-lane highway" },
      { fromVal: "55 mph", toVal: "24.5872 m/s", extra: "88.5139 km/h", extra2: "National speed limit standard" },
      { fromVal: "65 mph", toVal: "29.0576 m/s", extra: "104.6074 km/h", extra2: "Dual-carriageway / Interstate" },
      { fromVal: "75 mph", toVal: "33.5280 m/s", extra: "120.7008 km/h", extra2: "Western US highway limit" },
      { fromVal: "100 mph", toVal: "44.7040 m/s", extra: "160.9344 km/h", extra2: "High-speed sports benchmark" },
      { fromVal: "150 mph", toVal: "67.0560 m/s", extra: "241.4016 km/h", extra2: "Civilian aircraft takeoff roll" }
    ]
  },
  applications: {
    title: "Primary Engineering & Scientific Use Cases",
    items: [
      {
        title: "Physics & Biomechanical Modeling",
        text: "Athletic performance labs convert radar-measured ball, runner, and vehicle speeds from mph to m/s to calculate kinetic energy dissipation and impact force vectors."
      },
      {
        title: "Automotive Aerodynamic Simulations (CFD)",
        text: "Computational fluid dynamics software accepts airflow velocities in m/s to evaluate vehicle drag coefficients ($C_d$) and downforce generation at standard highway speeds."
      },
      {
        title: "Meteorology & Extreme Weather Modeling",
        text: "Meteorologists convert National Hurricane Center gust advisories from mph into m/s when feeding wind stress parameters into global atmospheric climate models."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Using the nautical mile factor (1,852 m) instead of the statute mile factor (1,609.344 m).",
      "Dividing by 0.44704 instead of multiplying when converting from mph to m/s.",
      "Rounding the exact factor 0.44704 to 0.45 in high-precision aerospace calculations."
    ]
  },
  faqs: [
    {
      question: "How do you convert mph to m/s?",
      answer: "Multiply the speed in miles per hour by exactly 0.44704 (or divide by 2.236936)."
    },
    {
      question: "What is 60 mph in meters per second?",
      answer: "60 mph equals exactly 60 × 0.44704 = 26.8224 m/s."
    },
    {
      question: "Why is the conversion factor exactly 0.44704?",
      answer: "Because 1 international mile is defined as 1,609.344 meters, and 1 hour equals 3,600 seconds. 1,609.344 / 3,600 = 0.44704 exactly."
    },
    {
      question: "What is 100 mph in m/s?",
      answer: "100 mph equals exactly 44.704 meters per second."
    },
    {
      question: "How do you convert meters per second back to miles per hour?",
      answer: "Divide the velocity in m/s by 0.44704 (e.g., 20 m/s ÷ 0.44704 ≈ 44.74 mph)."
    },
    {
      question: "Is 1 m/s faster than 1 mph?",
      answer: "Yes, 1 m/s is more than twice as fast as 1 mph (1 m/s ≈ 2.237 mph)."
    },
    {
      question: "What is 30 mph in m/s?",
      answer: "30 mph equals exactly 13.4112 m/s."
    },
    {
      question: "What is the speed of sound in mph and m/s?",
      answer: "At standard sea level (20°C), the speed of sound is approximately 343 m/s, which corresponds to about 767.27 mph."
    }
  ],
  relatedList: [
    { label: "Meter per Second to Mile per Hour", from: "meter-per-second", to: "mile-per-hour" },
    { label: "Mile per Hour to Kilometer per Hour", from: "mile-per-hour", to: "kilometer-per-hour" },
    { label: "Mile per Hour to Foot per Second", from: "mile-per-hour", to: "foot-per-second" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI)",
    "BIPM: The International System of Units (SI Brochure)"
  ]
};
