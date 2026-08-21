import { CustomArticleData } from "./types";

export const knotToMilePerHour: CustomArticleData = {
  fromUnitId: "knot",
  toUnitId: "mile-per-hour",
  seoTitle: "Knot to Mile per Hour Converter (kn to mph)",
  metaDescription: "Convert knots to miles per hour (kn to mph) with nautical precision. Exact 1.150779 ratio formula, wind speed comparisons, and worked examples.",
  h1: "Knot to Mile per Hour Converter",
  introduction: [
    "Converting knots to miles per hour translates specialized maritime vessel speeds, offshore current velocities, and aviation airspeeds into standard land-based customary speed units familiar to drivers, sports enthusiasts, and coastal communities in the United States and the United Kingdom. While all ocean-going ships and aircraft worldwide operate in knots, domestic public weather advisories and shoreline emergency notices express velocity in miles per hour.",
    "The conversion between knots and miles per hour is governed by the difference between an international nautical mile (exactly 1,852 meters) and a statute land mile (exactly 1,609.344 meters). Because one nautical mile is longer than one statute mile, one knot equals approximately 1.150779 miles per hour (roughly a 15.08% increase). Conversely, one mile per hour equals approximately 0.868976 knots. To convert knots into miles per hour, multiply the speed value by 1.150779 (or divide by 0.868976). This guide details the mathematical derivation, step-by-step conversion examples, aviation flight planning applications, and comprehensive velocity lookup tables."
  ],
  quickAnswer: {
    text: "To convert knots to miles per hour, multiply the speed in knots by 1.150779 (or divide by 0.868976). For example, 20 knots equals approximately 23.02 mph.",
    formulaDisplay: "mph = kn × 1.150779",
    subtext: "Exact ratio: 1 knot = 1,852 / 1,609.344 mph ≈ 1.150779 mph.\n1 mph = 1,609.344 / 1,852 kn ≈ 0.868976 kn."
  },
  aboutSourceUnit: {
    title: "Understanding the Knot (kn)",
    text: "The knot (kn or kt) is a unit of speed equal to one international nautical mile per hour (1.852 km/h). Standardized in 1929, it remains the universal operational speed metric across world maritime shipping, naval fleets, and civil aviation."
  },
  aboutTargetUnit: {
    title: "Understanding Miles per Hour (mph)",
    text: "The mile per hour (mph) is an imperial and US customary unit of speed indicating the distance in statute miles (1,609.344 meters or 5,280 feet) traveled in one hour. Widely used in the United States and United Kingdom, 1 mph equals 0.44704 m/s."
  },
  relationship: "One knot equals approximately 1.150779 miles per hour (exact ratio 1,852 / 1,609.344), and one mile per hour equals approximately 0.868976 knots. Multiplying any knot speed by 1.150779 produces its equivalent in miles per hour.",
  relationshipTitle: "Knot to Mile per Hour Milestones",
  relationshipItems: [
    { label: "Harbor Maneuvering (10 kn)", value: "11.5078 mph" },
    { label: "Sailing Yacht Speed (15 kn)", value: "17.2617 mph" },
    { label: "Gale Advisory (34 kn)", value: "39.1265 mph (~39 mph)" },
    { label: "Hurricane Force (64 kn)", value: "73.6499 mph (~74 mph)" },
    { label: "Aviation 100 kn Benchmark", value: "115.0779 mph" }
  ],
  formula: {
    text: "Multiply the speed in knots by the ratio 1,852 / 1,609.344 (approximately 1.150779) to obtain miles per hour.",
    math: "\\text{mph} = \\text{kn} \\times \\frac{1,852}{1,609.344} \\approx \\text{kn} \\times 1.150779",
    subtext: "To convert miles per hour back into knots, multiply the mph value by 0.868976 (or divide by 1.150779)."
  },
  formulaTitle: "Knot to Mile per Hour Formula",
  practicalTip: {
    title: "Quick 15% Addition Mental Math",
    text: "To estimate mph quickly from knots: add about 15% to the knot value (e.g., 20 kn plus 15% = 23 mph, virtually identical to the true 23.02 mph; 100 kn plus 15% = 115 mph vs true 115.08 mph)."
  },
  expertNote: {
    title: "Hurricane Scale Derivation",
    text: "On the Saffir-Simpson Hurricane Wind Scale, Category 1 hurricane threshold is defined as 64 knots. When converted into miles per hour ($64 \\times 1.150779 = 73.65\\text{ mph}$), it is rounded up to 74 mph for public broadcast consistency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: High-Speed Ferry Transit (28 knots)",
        subtitle: "Convert a catamaran passenger ferry speed of 28 knots into mph for a tourist travel brochure.",
        steps: [
          "State starting velocity: 28 knots.",
          "Apply conversion ratio: mph = 28 × (1,852 / 1,609.344).",
          "Calculate: 28 × 1.1507794 = 32.2218.",
          "Result: 28 knots equals approximately 32.22 mph."
        ]
      },
      {
        title: "Example 2: Tropical Storm Gust (55 knots)",
        subtitle: "Convert a 55-knot offshore wind gust into miles per hour for a local TV news weather advisory.",
        steps: [
          "Identify wind velocity: 55 knots.",
          "Apply formula: mph = 55 × 1.1507794.",
          "Calculate: 55 × 1.1507794 = 63.2929.",
          "Result: 55 knots corresponds to approximately 63.29 mph (tropical storm force)."
        ]
      }
    ]
  },
  table: {
    title: "Knot to Mile per Hour Reference Table",
    headers: ["Speed (kn)", "Speed (mph)", "Speed (km/h)", "Marine & Aviation Applications"],
    rows: [
      { fromVal: "5 kn", toVal: "5.7539 mph", extra: "9.2600 km/h", extra2: "Marina no-wake zone" },
      { fromVal: "10 kn", toVal: "11.5078 mph", extra: "18.5200 km/h", extra2: "Gentle sailing breeze" },
      { fromVal: "15 kn", toVal: "17.2617 mph", extra: "27.7800 km/h", extra2: "Moderate sailing breeze" },
      { fromVal: "20 kn", toVal: "23.0156 mph", extra: "37.0400 km/h", extra2: "Container vessel cruising speed" },
      { fromVal: "30 kn", toVal: "34.5234 mph", extra: "55.5600 km/h", extra2: "Near gale / Fast patrol boat" },
      { fromVal: "34 kn", toVal: "39.1265 mph", extra: "62.9680 km/h", extra2: "Gale force warning threshold" },
      { fromVal: "50 kn", toVal: "57.5390 mph", extra: "92.6000 km/h", extra2: "Storm force surface wind" },
      { fromVal: "64 kn", toVal: "73.6499 mph", extra: "118.5280 km/h", extra2: "Category 1 hurricane threshold" },
      { fromVal: "100 kn", toVal: "115.0779 mph", extra: "185.2000 km/h", extra2: "Light aircraft pattern cruise" },
      { fromVal: "250 kn", toVal: "287.6949 mph", extra: "463.0000 km/h", extra2: "Terminal area maximum jet speed" }
    ]
  },
  applications: {
    title: "Key Marine, Aviation & Weather Applications",
    items: [
      {
        title: "Aviation True Airspeed & Flight Planning",
        text: "General aviation pilots flying US aircraft calculate ground distance in statute miles (mph) when comparing visual flight rules (VFR) sectional checkpoints against knot-based indicated airspeed (KIAS)."
      },
      {
        title: "National Weather Service Tropical Advisories",
        text: "Forecasters convert maritime ocean surface wind analyses from knots to mph for broadcast across public storm surge and hurricane landfall warning zones."
      },
      {
        title: "Sailing Competitions & Regatta Strategy",
        text: "Yacht racing strategists correlate true wind speed (TWS) in knots with coastal shore weather reports given in mph to optimize sail selection and tacking angles."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming 1 knot equals 1 mph (1 knot is roughly 15% faster than 1 mph).",
      "Dividing by 1.150779 instead of multiplying when converting from knots to mph.",
      "Using the terms 'knots per hour' (which measures acceleration, not speed)."
    ]
  },
  faqs: [
    {
      question: "How do you convert knots to mph?",
      answer: "Multiply the speed in knots by 1.150779 (or divide by 0.868976)."
    },
    {
      question: "What is 20 knots in mph?",
      answer: "20 knots equals approximately 23.02 mph (20 × 1.150779 = 23.0156 mph)."
    },
    {
      question: "Is 1 knot faster than 1 mph?",
      answer: "Yes, 1 knot is approximately 1.1508 mph, which means 1 knot is about 15.08% faster than 1 mile per hour."
    },
    {
      question: "What is 100 knots in mph?",
      answer: "100 knots equals approximately 115.08 mph."
    },
    {
      question: "How do you convert mph back to knots?",
      answer: "Multiply the speed in mph by 0.868976 (or divide by 1.150779). For example, 60 mph × 0.868976 ≈ 52.14 knots."
    },
    {
      question: "What is 30 knots in mph?",
      answer: "30 knots equals approximately 34.52 mph."
    },
    {
      question: "What is hurricane-force speed in knots and mph?",
      answer: "Hurricane-force wind begins at 64 knots, which corresponds to approximately 73.65 mph (rounded to 74 mph in public weather bulletins)."
    },
    {
      question: "What is 50 knots in mph?",
      answer: "50 knots equals approximately 57.54 mph."
    }
  ],
  relatedList: [
    { label: "Mile per Hour to Knot", from: "mile-per-hour", to: "knot" },
    { label: "Knot to Kilometer per Hour", from: "knot", to: "kilometer-per-hour" },
    { label: "Knot to Meter per Second", from: "knot", to: "meter-per-second" }
  ],
  references: [
    "NOAA National Hurricane Center: Saffir-Simpson Hurricane Wind Scale",
    "FAA Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25B)"
  ]
};
