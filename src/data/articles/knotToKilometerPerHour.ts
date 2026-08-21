import { CustomArticleData } from "./types";

export const knotToKilometerPerHour: CustomArticleData = {
  fromUnitId: "knot",
  toUnitId: "kilometer-per-hour",
  seoTitle: "Knot to Kilometer per Hour Converter (kn to km/h)",
  metaDescription: "Convert knots to kilometers per hour (kn to km/h) instantly. Exact 1.852 conversion factor, maritime and aviation airspeed charts, and worked examples.",
  h1: "Knot to Kilometer per Hour Converter",
  introduction: [
    "Converting knots to kilometers per hour bridges the gap between international maritime and aeronautical navigation and global land-based metric transportation systems. While ship captains, naval architects, and aircraft pilots calibrate airspeed and groundspeed instruments in knots, terrestrial meteorologists, civil emergency agencies, and port transport logistics across Europe, Asia, and Latin America communicate velocities in kilometers per hour.",
    "By international definition established in 1929, one international nautical mile equals exactly 1,852 meters (1.852 kilometers). Because both units measure rate over one hour, one knot equals exactly 1.852 kilometers per hour. To convert knots into kilometers per hour, multiply the speed value by 1.852 (or divide by approximately 0.539957). This guide provides the exact conversion formula, step-by-step calculation examples, maritime storm classification tables, and practical reference guides."
  ],
  quickAnswer: {
    text: "To convert knots to kilometers per hour, multiply the speed in knots by exactly 1.852. For example, 20 knots equals exactly 37.04 km/h.",
    formulaDisplay: "km/h = kn × 1.852",
    subtext: "Exact conversion factor: 1 knot = 1.852 km/h (exact terminating decimal).\n1 km/h = 1 / 1.852 kn ≈ 0.539957 kn."
  },
  aboutSourceUnit: {
    title: "Understanding the Knot (kn)",
    text: "The knot (kn or kt) is a non-SI unit of speed equal to one international nautical mile per hour (1.852 km/h). Used worldwide in civil and military aviation, ocean shipping, and marine meteorology, it is tied directly to geographic latitude coordinates."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Hour (km/h)",
    text: "The kilometer per hour (km/h) is the worldwide standard metric unit of velocity, measuring the distance in kilometers covered in one hour. Used across global highway networks, railway systems, and civilian weather reports, 1 km/h equals 0.27778 m/s."
  },
  relationship: "One knot equals exactly 1.852 kilometers per hour, and one kilometer per hour equals approximately 0.539957 knots. Multiplying any knot value by 1.852 yields its exact metric speed in km/h.",
  relationshipTitle: "Knot to Kilometer per Hour Benchmarks",
  relationshipItems: [
    { label: "Harbor Speed Limit (6 kn)", value: "11.1120 km/h" },
    { label: "Ferry Cruise Speed (20 kn)", value: "37.0400 km/h" },
    { label: "Gale Warning Threshold (34 kn)", value: "62.9680 km/h" },
    { label: "Hurricane Force (64 kn)", value: "118.5280 km/h" },
    { label: "Aviation 100 kn Benchmark", value: "185.2000 km/h" }
  ],
  formula: {
    text: "Multiply the velocity in knots by the exact factor 1.852 to determine kilometers per hour.",
    math: "\\text{km/h} = \\text{kn} \\times 1.852",
    subtext: "To convert kilometers per hour back to knots, divide the km/h value by 1.852 (or multiply by ~0.539957)."
  },
  formulaTitle: "Knot to Kilometer per Hour Formula",
  practicalTip: {
    title: "Mental Math 2× Minus 7% Approximation",
    text: "To estimate km/h quickly in your head: double the knots and subtract about 7% (e.g., 20 kn × 2 = 40, minus ~3 = 37 km/h, nearly identical to the true 37.04 km/h)."
  },
  expertNote: {
    title: "Exact Terminating Decimal Conversion",
    text: "Because 1 nautical mile is legally defined as exactly 1,852 meters, the multiplier 1.852 is exact and requires no rounding. Standard calculations produce terminating decimals without floating-point error."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Cruise Liner Service Speed (24 knots)",
        subtitle: "Convert a modern cruise ship speed of 24 knots into km/h for passenger itinerary displays.",
        steps: [
          "State starting velocity: 24 knots.",
          "Apply exact conversion factor: km/h = 24 × 1.852.",
          "Calculate: 24 × 1.852 = 44.448.",
          "Result: 24 knots equals exactly 44.45 km/h."
        ]
      },
      {
        title: "Example 2: Tropical Cyclone Wind Advisory (85 knots)",
        subtitle: "Convert an 85-knot marine hurricane wind advisory into km/h for public civilian emergency broadcasts.",
        steps: [
          "Identify wind velocity: 85 knots.",
          "Apply formula: km/h = 85 × 1.852.",
          "Calculate: 85 × 1.852 = 157.42.",
          "Result: 85 knots equals exactly 157.42 km/h."
        ]
      }
    ]
  },
  table: {
    title: "Knot to Kilometer per Hour Reference Table",
    headers: ["Speed (kn)", "Speed (km/h)", "Speed (mph)", "Maritime / Meteorological Context"],
    rows: [
      { fromVal: "5 kn", toVal: "9.2600 km/h", extra: "5.7539 mph", extra2: "Marina maneuvering limit" },
      { fromVal: "10 kn", toVal: "18.5200 km/h", extra: "11.5078 mph", extra2: "Gentle sailing breeze" },
      { fromVal: "15 kn", toVal: "27.7800 km/h", extra: "17.2617 mph", extra2: "Moderate breeze" },
      { fromVal: "20 kn", toVal: "37.0400 km/h", extra: "23.0156 mph", extra2: "Merchant freighter speed" },
      { fromVal: "25 kn", toVal: "46.3000 km/h", extra: "28.7695 mph", extra2: "Fast catamaran ferry" },
      { fromVal: "34 kn", toVal: "62.9680 km/h", extra: "39.1265 mph", extra2: "Gale force threshold" },
      { fromVal: "50 kn", toVal: "92.6000 km/h", extra: "57.5390 mph", extra2: "Storm force surface winds" },
      { fromVal: "64 kn", toVal: "118.5280 km/h", extra: "73.6499 mph", extra2: "Hurricane-force wind minimum" },
      { fromVal: "100 kn", toVal: "185.2000 km/h", extra: "115.0779 mph", extra2: "Aviation light aircraft cruise" },
      { fromVal: "250 kn", toVal: "463.0000 km/h", extra: "287.6949 mph", extra2: "Low-altitude jet terminal speed" }
    ]
  },
  applications: {
    title: "Primary Maritime & Aviation Applications",
    items: [
      {
        title: "Civil Protection & Public Storm Advisories",
        text: "Meteorological agencies convert offshore hurricane and typhoon wind alerts reported in knots into km/h so civilian emergency responders understand expected land-based impact."
      },
      {
        title: "Maritime Port Operations & Harbor Vessel Traffic",
        text: "Port authorities enforce harbor channel speed limits by converting radar-tracked vessel knots into local km/h safety regulatory thresholds."
      },
      {
        title: "Aviation Flight Simulation & Navigation Systems",
        text: "Flight deck avionics convert indicated airspeed (knots) into ground track velocities (km/h or mph) to calculate estimated time of arrival (ETA) over waypoints."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing knots with kilometers per hour (1 knot is 85.2% faster than 1 km/h).",
      "Dividing by 1.852 instead of multiplying when converting from knots to km/h.",
      "Using statute mile conversions (1.609344) instead of nautical mile definitions (1.852)."
    ]
  },
  faqs: [
    {
      question: "How do you convert knots to km/h?",
      answer: "Multiply the speed in knots by exactly 1.852 (or divide by approximately 0.539957)."
    },
    {
      question: "What is 1 knot in km/h?",
      answer: "1 knot equals exactly 1.852 kilometers per hour."
    },
    {
      question: "What is 20 knots in km/h?",
      answer: "20 knots equals exactly 37.04 km/h (20 × 1.852 = 37.04 km/h)."
    },
    {
      question: "How do you convert km/h back to knots?",
      answer: "Divide the speed in km/h by 1.852 (or multiply by approximately 0.539957). For example, 100 km/h ÷ 1.852 ≈ 53.996 knots."
    },
    {
      question: "What is 50 knots in km/h?",
      answer: "50 knots equals exactly 92.60 km/h."
    },
    {
      question: "What is 100 knots in km/h?",
      answer: "100 knots equals exactly 185.20 km/h."
    },
    {
      question: "Is a knot faster than a km/h?",
      answer: "Yes, 1 knot (1.852 km/h) is nearly twice as fast as 1 km/h (specifically 85.2% faster)."
    },
    {
      question: "What is hurricane-force speed in knots and km/h?",
      answer: "Hurricane strength starts at 64 knots, which equals exactly 118.528 km/h (commonly rounded to 119 km/h in weather bulletins)."
    }
  ],
  relatedList: [
    { label: "Kilometer per Hour to Knot", from: "kilometer-per-hour", to: "knot" },
    { label: "Knot to Mile per Hour", from: "knot", to: "mile-per-hour" },
    { label: "Knot to Meter per Second", from: "knot", to: "meter-per-second" }
  ],
  references: [
    "International Hydrographic Organization (IHO): Definition of the International Nautical Mile",
    "ISO 80000-3: Quantities and Units — Space and Time"
  ]
};
