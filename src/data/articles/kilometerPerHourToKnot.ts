import { CustomArticleData } from "./types";

export const kilometerPerHourToKnot: CustomArticleData = {
  fromUnitId: "kilometer-per-hour",
  toUnitId: "knot",
  seoTitle: "Kilometer per Hour to Knot Converter (km/h to kn)",
  metaDescription: "Convert kilometers per hour to knots (km/h to kn) accurately. Learn the conversion formula (km/h / 1.852), maritime navigation standards, and flight planning speed calculations.",
  h1: "Kilometer per Hour to Knot Converter",
  introduction: [
    "Converting kilometers per hour to knots is a fundamental speed conversion across marine navigation, coastal logistics, commercial aviation, and maritime weather forecasting. While land transport relies on kilometers per hour (km/h), maritime vessels and aircraft measure speed in knots (kn or kt).",
    "Converting kilometers per hour to knots is exact and simple: divide the km/h speed by 1.852. This guide details the nautical definition of the knot, the mathematical derivation of the 1.852 conversion factor, worked step-by-step examples, and nautical speed lookup tables."
  ],
  quickAnswer: {
    text: "To convert kilometers per hour to knots, divide the speed in km/h by 1.852. For example, 18.52 km/h equals exactly 10 knots, and 100 km/h equals approximately 53.996 knots.",
    formulaDisplay: "kn = km/h / 1.852",
    subtext: "One knot is defined as exactly one nautical mile per hour (1.852 km/h)."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Hour (km/h)",
    text: "The kilometer per hour is the standard metric speed unit for land transport, highway motoring, and high-speed rail. It measures the distance in kilometers covered over an elapsed hour."
  },
  aboutTargetUnit: {
    title: "Understanding the Knot (kn / kt)",
    text: "The knot is an international unit of speed equal to one nautical mile per hour (1.852 km/h). Essential for nautical chart plotting and aviation flight management, 1 knot represents traveling 1/60th of a degree of latitude per hour."
  },
  relationship: "One international nautical mile was standardized in 1952 as exactly 1,852 meters (1.852 kilometers). Because 1 knot = 1 nautical mile / 1 hour = 1.852 km / 1 hour, dividing km/h by 1.852 yields knots directly.",
  relationshipTitle: "Kilometer per Hour vs Knot Scale Comparison",
  relationshipItems: [
    { label: "1.852 km/h", value: "1.0 kn (1 knot speed baseline)" },
    { label: "10.00 km/h", value: "5.40 kn (Harbor maneuver speed)" },
    { label: "37.04 km/h", value: "20.00 kn (Container ship cruising speed)" },
    { label: "50.00 km/h", value: "27.00 kn (Fast passenger ferry)" },
    { label: "100.00 km/h", value: "54.00 kn (High-speed naval craft)" }
  ],
  formula: {
    text: "Divide the velocity in kilometers per hour by 1.852 to determine speed in knots.",
    math: "kn = km/h / 1.852",
    subtext: "To convert knots back to kilometers per hour, multiply by 1.852."
  },
  formulaTitle: "Kilometer per Hour to Knot Formula",
  practicalTip: {
    title: "Quick Mental Calculation Rule",
    text: "To quickly approximate km/h to knots in your head, divide the km/h value by 2 and add 8% (e.g., 50 km/h / 2 = 25; 25 + 2 = 27 knots; exact is 27.00 kn)."
  },
  expertNote: {
    title: "Nautical Chart Distance Direct Link",
    text: "Navigators use knots because 1 knot = 1 nautical mile per hour = 1 minute of latitude per hour. On sea charts, distance in nautical miles equals latitude distance in arcminutes."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Cargo Vessel Speed (30 km/h)",
        subtitle: "Convert a coastal cargo vessel speed of 30 km/h into knots.",
        steps: [
          "Identify speed in km/h: 30 km/h.",
          "Apply formula: kn = 30 / 1.852.",
          "Calculate: 30 / 1.852 = 16.1987.",
          "Result: 30 km/h equals approximately 16.20 knots."
        ]
      },
      {
        title: "Example 2: Tropical Storm Wind Speed (120 km/h)",
        subtitle: "Convert a meteorological storm wind speed of 120 km/h into knots.",
        steps: [
          "Identify wind speed: 120 km/h.",
          "Divide by 1.852: 120 / 1.852 = 64.7948.",
          "Result: 120 km/h equals approximately 64.79 knots (Hurricane force)."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer per Hour to Knot Conversion Table",
    headers: ["Kilometers per Hour (km/h)", "Knots (kn)", "Aviation & Maritime Benchmark"],
    rows: [
      { fromVal: "1.852 km/h", toVal: "1.00 kn", extra: "1 knot benchmark" },
      { fromVal: "5 km/h", toVal: "2.70 kn", extra: "Tidal stream velocity" },
      { fromVal: "10 km/h", toVal: "5.40 kn", extra: "Port & harbor speed limit" },
      { fromVal: "20 km/h", toVal: "10.80 kn", extra: "Tugboat towing speed" },
      { fromVal: "37.04 km/h", toVal: "20.00 kn", extra: "Commercial cargo ship speed" },
      { fromVal: "50 km/h", toVal: "27.00 kn", extra: "Cruise ship cruising speed" },
      { fromVal: "70 km/h", toVal: "37.80 kn", extra: "Gale force wind speed" },
      { fromVal: "100 km/h", toVal: "54.00 kn", extra: "High-speed military patrol boat" },
      { fromVal: "185.2 km/h", toVal: "100.00 kn", extra: "Light aircraft climb speed" },
      { fromVal: "500 km/h", toVal: "269.98 kn", extra: "Commercial turboprop aircraft" }
    ]
  },
  applications: {
    title: "Practical Applications of km/h to Knot Conversions",
    items: [
      {
        title: "Aviation Operations & Flight Planning",
        text: "Pilots receiving meteorological radar reports in km/h convert wind vectors into knots to calculate headwind and crosswind components."
      },
      {
        title: "Maritime Shipping & Port Logistics",
        text: "Port authorities convert coastal patrol and land supply vehicle speeds from km/h to knots for unified vessel traffic management."
      },
      {
        title: "Offshore Wind Energy & Meteorology",
        text: "Offshore wind turbine operators convert coastal anemometer readings (km/h) into knots to evaluate rotor cutout thresholds."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1.852 instead of dividing when converting km/h to knots.",
      "Confusing nautical miles per hour (knots) with land miles per hour (mph).",
      "Using approximate factors (like 2.0) for navigational plotting."
    ]
  },
  faqs: [
    {
      question: "How do you convert km/h to knots?",
      answer: "Divide the speed in kilometers per hour by 1.852."
    },
    {
      question: "What is 100 km/h in knots?",
      answer: "100 km/h is equal to approximately 54.00 knots (100 / 1.852)."
    },
    {
      question: "What is 50 km/h in knots?",
      answer: "50 km/h is equal to approximately 27.00 knots."
    },
    {
      question: "Why is 1.852 used to convert km/h to knots?",
      answer: "Because 1 nautical mile is defined as exactly 1.852 kilometers."
    },
    {
      question: "What is 20 km/h in knots?",
      answer: "20 km/h is equal to approximately 10.80 knots."
    }
  ],
  relatedList: [
    { label: "Knot to Kilometer per Hour", from: "knot", to: "kilometer-per-hour" },
    { label: "Kilometer per Hour to Meter per Second", from: "kilometer-per-hour", to: "meter-per-second" },
    { label: "Kilometer per Hour to Mile per Hour", from: "kilometer-per-hour", to: "mile-per-hour" }
  ],
  references: [
    "International Hydrographic Organization (IHO) - Hydrographic Dictionary",
    "IMO - International Maritime Organization Standards"
  ]
};
