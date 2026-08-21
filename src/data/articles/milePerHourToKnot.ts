import { CustomArticleData } from "./types";

export const milePerHourToKnot: CustomArticleData = {
  fromUnitId: "mile-per-hour",
  toUnitId: "knot",
  seoTitle: "Mile per Hour to Knot Converter (mph to kn)",
  metaDescription: "Convert miles per hour to knots (mph to kn) with nautical precision. Nautical vs statute mile formulas, aviation airspeed charts, and worked examples.",
  h1: "Mile per Hour to Knot Converter",
  introduction: [
    "Converting miles per hour to knots translates standard land-based vehicle and weather velocities into the universal speed unit of maritime navigation, naval architecture, and global aeronautics. While road speed limits and surface weather forecasts in the United States and the United Kingdom are expressed in miles per hour, all international air traffic control, maritime shipping routes, and marine weather advisories operate strictly in knots.",
    "A statute mile represents 5,280 feet (1,609.344 meters), whereas an international nautical mile is based on one minute of latitude across Earth's surface and is defined as exactly 1,852 meters. Consequently, one knot (one nautical mile per hour) is faster than one mile per hour, with 1 knot equaling approximately 1.15078 mph. Conversely, one mile per hour equals approximately 0.868976 knots. To convert miles per hour to knots, multiply the speed by 0.868976 (or divide by 1.150779). This guide details the mathematical relationship, step-by-step conversion examples, aviation applications, and comprehensive velocity lookup tables."
  ],
  quickAnswer: {
    text: "To convert miles per hour to knots, multiply the speed in mph by 0.868976 (or divide by 1.150779). For example, 60 mph equals approximately 52.14 knots.",
    formulaDisplay: "kn = mph × 0.868976",
    subtext: "Exact ratio: 1 mph = 1,609.344 / 1,852 kn ≈ 0.868976 kn.\n1 knot = 1.852 / 1.609344 mph ≈ 1.150779 mph."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Hour (mph)",
    text: "The mile per hour (mph) is an imperial and US customary unit measuring distance in statute miles (1,609.344 m) traveled in one hour. It is standard for US and UK terrestrial road travel and surface meteorology."
  },
  aboutTargetUnit: {
    title: "Understanding the Knot (kn)",
    text: "The knot (kn or kt) is a non-SI unit of speed equal to one nautical mile per hour (exactly 1.852 km/h or ~0.5144 m/s). It is the mandatory international standard for aircraft airspeed indicators and maritime navigation charts."
  },
  relationship: "One mile per hour equals approximately 0.868976 knots (exact ratio 1,609.344 / 1,852), and one knot equals approximately 1.150779 miles per hour. Multiplying any mph speed by 0.868976 yields its exact nautical equivalent in knots.",
  relationshipTitle: "Mile per Hour to Knot Comparison Milestones",
  relationshipItems: [
    { label: "Brisk Sailing Breeze (15 mph)", value: "13.0346 kn" },
    { label: "Coastal Gale Force (40 mph)", value: "34.7590 kn" },
    { label: "US Highway Speed (65 mph)", value: "56.4835 kn" },
    { label: "Tropical Storm Threshold (74 mph)", value: "64.3042 kn (~64 kn)" },
    { label: "Aviation 100 Knot Benchmark", value: "115.0779 mph" }
  ],
  formula: {
    text: "Multiply the velocity in miles per hour by the ratio 1,609.344 / 1,852 (approximately 0.868976) to convert to knots.",
    math: "\\text{kn} = \\text{mph} \\times \\frac{1,609.344}{1,852} \\approx \\text{mph} \\times 0.868976",
    subtext: "To convert knots back to miles per hour, multiply the knot value by 1.150779 (or divide by 0.868976)."
  },
  formulaTitle: "Mile per Hour to Knot Calculation Formula",
  practicalTip: {
    title: "Quick 13% Reduction Mental Math",
    text: "To approximate knots quickly from mph: subtract about 13% from the mph value (e.g., 100 mph minus 13 = 87 kn, nearly identical to the true 86.90 kn)."
  },
  expertNote: {
    title: "Geodesy & Nautical Origins",
    text: "The nautical mile originated as the meridional distance along Earth's surface spanning one minute of arc ($1/60^\\circ$). Standardized at 1,852 meters by the First International Extraordinary Hydrographic Conference in 1929, it remains directly tied to navigational latitude coordinates."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Aircraft Indicated Airspeed (140 mph)",
        subtitle: "Convert a light aircraft cruise speed of 140 mph into knots for an international flight plan.",
        steps: [
          "State starting velocity: 140 mph.",
          "Apply conversion ratio: kn = 140 × (1,609.344 / 1,852).",
          "Calculate: 140 × 0.86897624 = 121.6567.",
          "Result: 140 mph equals approximately 121.66 knots."
        ]
      },
      {
        title: "Example 2: Hurricane Maximum Sustained Winds (115 mph)",
        subtitle: "Convert a Category 3 hurricane's 115 mph sustained winds into knots for maritime advisories.",
        steps: [
          "Identify wind velocity: 115 mph.",
          "Apply formula: kn = 115 × 0.86897624.",
          "Calculate: 115 × 0.86897624 = 99.9323.",
          "Result: 115 mph corresponds to approximately 100 knots (Category 3 threshold on the Saffir-Simpson scale)."
        ]
      }
    ]
  },
  table: {
    title: "Mile per Hour to Knot Reference Table",
    headers: ["Speed (mph)", "Speed (kn)", "Speed (km/h)", "Maritime & Aviation Context"],
    rows: [
      { fromVal: "10 mph", toVal: "8.6898 kn", extra: "16.0934 km/h", extra2: "Gentle breeze (Beaufort 3)" },
      { fromVal: "20 mph", toVal: "17.3795 kn", extra: "32.1869 km/h", extra2: "Moderate sailing breeze" },
      { fromVal: "30 mph", toVal: "26.0693 kn", extra: "48.2803 km/h", extra2: "Strong breeze (Beaufort 6)" },
      { fromVal: "40 mph", toVal: "34.7590 kn", extra: "64.3738 km/h", extra2: "Gale force advisory threshold" },
      { fromVal: "50 mph", toVal: "43.4488 kn", extra: "80.4672 km/h", extra2: "Severe gale storm winds" },
      { fromVal: "60 mph", toVal: "52.1386 kn", extra: "96.5606 km/h", extra2: "Storm force surface winds" },
      { fromVal: "74 mph", toVal: "64.3042 kn", extra: "119.0915 km/h", extra2: "Hurricane-force wind speed" },
      { fromVal: "100 mph", toVal: "86.8976 kn", extra: "160.9344 km/h", extra2: "Aviation pattern approach speed" },
      { fromVal: "150 mph", toVal: "130.3464 kn", extra: "241.4016 km/h", extra2: "Twin-engine turboprop cruise" },
      { fromVal: "500 mph", toVal: "434.4881 kn", extra: "804.6720 km/h", extra2: "Commercial jetliner cruise" }
    ]
  },
  applications: {
    title: "Primary Maritime & Aviation Applications",
    items: [
      {
        title: "Aeronautical Flight Planning & Airspeed Calibration",
        text: "Pilots and avionics convert between statute mile groundspeeds and calibrated airspeed (CAS/TAS) in knots to compute fuel burn, true heading, and headwind components."
      },
      {
        title: "Maritime Shipping & Nautical Cartography",
        text: "Navigators plotting courses on Mercator projection charts measure distances directly in nautical miles where 1 knot equals 1 nautical mile per hour (1 minute of latitude)."
      },
      {
        title: "Meteorological Cyclone Tracking",
        text: "The National Hurricane Center and World Meteorological Organization report tropical storm sustained winds in knots, which are converted to mph for domestic public advisories."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming 1 knot equals 1 mph (a knot is ~15.08% faster than a mile per hour).",
      "Confusing the statute mile (1,609.344 m) with the nautical mile (1,852 m).",
      "Using 'knots per hour' (a knot is already a rate of speed, namely nautical miles per hour)."
    ]
  },
  faqs: [
    {
      question: "How do you convert mph to knots?",
      answer: "Multiply the speed in mph by 0.868976 (or divide by 1.150779)."
    },
    {
      question: "What is 60 mph in knots?",
      answer: "60 mph equals approximately 52.14 knots (60 × 0.868976 = 52.1386 kn)."
    },
    {
      question: "Is 1 knot faster than 1 mph?",
      answer: "Yes. 1 knot is approximately 1.15078 mph, making 1 knot roughly 15.08% faster than 1 mile per hour."
    },
    {
      question: "What is 100 mph in knots?",
      answer: "100 mph equals approximately 86.90 knots."
    },
    {
      question: "How do you convert knots back to mph?",
      answer: "Multiply the speed in knots by 1.150779 (e.g., 50 kn × 1.150779 = 57.54 mph)."
    },
    {
      question: "Why is the unit called a 'knot'?",
      answer: "Historically, sailors measured vessel speed by tossing a wooden chip log tied to a knotted rope overboard and counting the number of knots that passed through their hands during a 30-second sandglass timer."
    },
    {
      question: "What is hurricane-force speed in mph and knots?",
      answer: "Hurricane strength begins at 74 mph, which corresponds to 64.3 knots (rounded to 64 knots in marine weather advisories)."
    },
    {
      question: "What is 500 mph in knots?",
      answer: "500 mph equals approximately 434.49 knots."
    }
  ],
  relatedList: [
    { label: "Knot to Mile per Hour", from: "knot", to: "mile-per-hour" },
    { label: "Mile per Hour to Kilometer per Hour", from: "mile-per-hour", to: "kilometer-per-hour" },
    { label: "Knot to Meter per Second", from: "knot", to: "meter-per-second" }
  ],
  references: [
    "NOAA National Ocean Service: What is the difference between a nautical mile and a knot?",
    "ICAO Annex 5: Units of Measurement to be Used in Air and Ground Operations"
  ]
};
