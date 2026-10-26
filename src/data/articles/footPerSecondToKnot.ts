import { CustomArticleData } from "./types";

export const footPerSecondToKnot: CustomArticleData = {
  fromUnitId: "foot-per-second",
  toUnitId: "knot",
  seoTitle: "Foot per Second to Knot (ft/s to kn)",
  metaDescription: "Convert feet per second to knots (ft/s to kn) with mathematical precision. Learn the exact 1097.28/1852 factor (0.592484), naval aviation formulas, and tables.",
  h1: "Foot per Second to Knot Converter",
  introduction: [
    "Converting feet per second to knots is a standard velocity conversion in naval architecture, marine engineering, flight testing, and coastal hydrology. While feet per second (ft/s or fps) is frequently used in American hydraulic modeling, wind tunnel testing, and aircraft carrier catapult physics, the knot (kn) is the universal operational speed metric for maritime shipping and aeronautical navigation.",
    "Because 1 international foot is defined as exactly 0.3048 meters and 1 international knot is 1,852 meters per hour, the conversion factor is exactly 1,097.28 / 1,852, which simplifies to approximately 0.592484 knots per foot per second (or 1 knot ≈ 1.68781 ft/s). This comprehensive guide explains the mathematical derivation, aircraft carrier takeoff scenarios, wind tunnel calculations, and conversion tables."
  ],
  quickAnswer: {
    text: "One foot per second (1 ft/s) is equal to approximately 0.592484 knots. To convert feet per second to knots, multiply the ft/s value by 0.592484 (or divide by 1.68781).",
    formulaDisplay: "kn = ft/s × 0.592484",
    subtext: "Exactly derived from (0.3048 m × 3,600 s) / 1,852 m per international nautical mile."
  },
  aboutSourceUnit: {
    title: "Understanding Feet per Second (ft/s)",
    text: "The foot per second (ft/s) is an imperial and US customary unit expressing linear distance in feet traveled over one second. Used extensively in fluid flow measurement, wind tunnel aerodynamics, catapult launch engineering, and ballistics, it is standard in US civil and mechanical engineering."
  },
  aboutTargetUnit: {
    title: "Understanding the Knot (kn)",
    text: "The knot is a non-SI unit accepted for use in maritime and aeronautical navigation worldwide. Equal to one nautical mile (1,852 meters) per hour, knots correspond directly to minutes of arc on Earth's geographic latitude grid, making it indispensable for sea navigation and flight flight plans."
  },
  relationship: "Because 1 foot equals 0.3048 meters, 1 ft/s equals 0.3048 × 3,600 = 1,097.28 meters per hour. Dividing by the 1,852 meters in an international nautical mile gives exactly 1,097.28 / 1,852 ≈ 0.592484 knots. Conversely, 1 knot equals 1.68781 ft/s.",
  relationshipTitle: "Conversion Ratio Breakdown",
  relationshipItems: [
    { label: "1.0 ft/s", value: "0.59248 kn (Exact 1097.28/1852 ratio)" },
    { label: "1.68781 ft/s", value: "1.00000 kn (Standard nautical unit)" },
    { label: "10 ft/s", value: "5.9248 kn (Small watercraft speed)" },
    { label: "50 ft/s", value: "29.6242 kn (Commercial ferry / fast cargo speed)" },
    { label: "100 ft/s", value: "59.2484 kn (Severe storm gust / light plane takeoff)" }
  ],
  formula: {
    text: "Multiply the velocity in feet per second by 0.592484 (or divide by 1.68781) to calculate the speed in knots.",
    math: "kn = ft/s × 0.592484",
    subtext: "To convert knots back into feet per second, multiply by 1.68781 (or divide by 0.592484)."
  },
  formulaTitle: "Foot per Second to Knot Formula",
  practicalTip: {
    title: "Mental Estimation Trick",
    text: "To estimate knots from ft/s in your head, multiply by 0.6 (take 60% of the ft/s value). For example, 100 ft/s × 0.6 = 60 knots (the exact value is 59.25 knots), providing an estimate accurate to within 1.3%."
  },
  expertNote: {
    title: "Naval Aircraft Catapult Physics",
    text: "Aircraft carrier steam and electromagnetic catapults (EMALS) accelerate carrier aircraft from 0 to roughly 250 ft/s (approx. 148 knots) in just 2.5 seconds across a 300-foot flight deck stroke."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Water Channel Current (5 ft/s)",
        subtitle: "Convert a tidal river current flowing at 5 ft/s into knots for marine navigation.",
        steps: [
          "Identify velocity: 5 ft/s.",
          "Apply formula: kn = 5 × 0.592484.",
          "Calculate: 5 × 0.592484 = 2.96242 kn.",
          "Result: 5 ft/s equals approximately 2.96 knots."
        ]
      },
      {
        title: "Example 2: Carrier Launch Speed (240 ft/s)",
        subtitle: "Convert a catapult launch end-speed of 240 ft/s into knots.",
        steps: [
          "Identify velocity: 240 ft/s.",
          "Multiply: 240 × 0.592484 = 142.196 kn.",
          "Result: 240 ft/s equals approximately 142.20 knots."
        ]
      },
      {
        title: "Example 3: Wind Tunnel Gust (80 ft/s)",
        subtitle: "Convert an aerodynamic test air velocity of 80 ft/s into knots.",
        steps: [
          "Identify velocity: 80 ft/s.",
          "Multiply: 80 × 0.592484 = 47.3987 kn.",
          "Result: 80 ft/s equals approximately 47.40 knots."
        ]
      }
    ]
  },
  table: {
    title: "Foot per Second to Knot Conversion Table",
    headers: ["Feet per Second (ft/s)", "Knots (kn)", "Maritime & Aviation Context"],
    rows: [
      { fromVal: "1.0 ft/s", toVal: "0.59 kn", extra: "Slow harbor drift" },
      { fromVal: "2.0 ft/s", toVal: "1.18 kn", extra: "Gentle river current" },
      { fromVal: "5.0 ft/s", toVal: "2.96 kn", extra: "Tidal estuary flow" },
      { fromVal: "10.0 ft/s", toVal: "5.92 kn", extra: "Sailboat cruising in moderate breeze" },
      { fromVal: "20.0 ft/s", toVal: "11.85 kn", extra: "Container ship standard economical transit" },
      { fromVal: "35.0 ft/s", toVal: "20.74 kn", extra: "Modern cruise liner cruising speed" },
      { fromVal: "50.0 ft/s", toVal: "29.62 kn", extra: "Naval destroyer top speed" },
      { fromVal: "88.0 ft/s", toVal: "52.14 kn", extra: "Gale-force maritime storm wind (60 mph)" },
      { fromVal: "100.0 ft/s", toVal: "59.25 kn", extra: "Tropical storm squall" },
      { fromVal: "150.0 ft/s", toVal: "88.87 kn", extra: "Light aircraft rotation takeoff speed" },
      { fromVal: "250.0 ft/s", toVal: "148.12 kn", extra: "Carrier jet launch end-speed" },
      { fromVal: "500.0 ft/s", toVal: "296.24 kn", extra: "Subsonic jet airliner low-altitude approach" }
    ]
  },
  applications: {
    title: "Practical Applications of ft/s to Knot Conversions",
    items: [
      {
        title: "Naval Architecture & Hydrodynamics",
        text: "Tow tank testing facilities measure model ship hull resistance at scale speeds in feet per second before translating results to full-scale ship speeds in knots."
      },
      {
        title: "Harbor & Estuary Current Monitoring",
        text: "Acoustic Doppler Current Profilers (ADCP) deployed in US waterways measure river discharge velocities in ft/s, which harbor pilots convert to knots for safe vessel docking."
      },
      {
        title: "Aeronautical Wind Tunnel Calibration",
        text: "Aerodynamicists converting test section air velocities recorded in ft/s into knots to calibrate pitot-static cockpit instrumentation."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1.68781 instead of dividing when converting ft/s to knots (multiplying results in an erroneously larger speed).",
      "Confusing knots (nautical miles per hour) with miles per hour (mph); 1 knot equals 1.1508 mph, so a knot is faster than a mph.",
      "Using the obsolete UK admiralty nautical mile (6,080 ft) instead of the international 1,852-meter knot (6,076.12 ft)."
    ]
  },
  faqs: [
    {
      question: "How do you convert feet per second to knots?",
      answer: "Multiply the velocity in feet per second by 0.592484 (or divide by 1.68781). For example, 100 ft/s × 0.592484 = 59.25 knots."
    },
    {
      question: "Is 1 ft/s faster or slower than 1 knot?",
      answer: "1 ft/s is slower than 1 knot. 1 ft/s equals approximately 0.5925 knots, whereas 1 knot equals approximately 1.6878 ft/s."
    },
    {
      question: "How many feet per second is 1 knot?",
      answer: "One knot is equal to approximately 1.68781 feet per second (1,852 meters / (0.3048 × 3,600))."
    },
    {
      question: "What is 88 ft/s in knots?",
      answer: "88 ft/s (which equals 60 mph) is equal to approximately 52.14 knots (88 × 0.592484)."
    },
    {
      question: "How do you convert knots back to feet per second?",
      answer: "Multiply the speed in knots by 1.68781 (or divide by 0.592484). For example, 30 knots × 1.68781 = 50.63 ft/s."
    },
    {
      question: "What is the exact mathematical ratio between ft/s and knots?",
      answer: "The exact ratio is 1,097.28 / 1,852, which simplifies to 274.32 / 463 (approximately 0.5924838)."
    },
    {
      question: "Why do aircraft carrier catapults measure in ft/s and knots?",
      answer: "Catapult engineering specifications and steam pressure curves use US customary ft/s, while the pilot's airspeed indicator and ship wind-over-deck requirements are in knots."
    },
    {
      question: "How can I quickly estimate ft/s to knots in my head?",
      answer: "Take 60% of the ft/s value (multiply by 0.6). For example, 50 ft/s × 0.6 = 30 knots (exact is 29.62 knots)."
    }
  ],
  relatedList: [
    { label: "Knot to Foot per Second", from: "knot", to: "foot-per-second" },
    { label: "Foot per Second to Mile per Hour", from: "foot-per-second", to: "mile-per-hour" },
    { label: "Foot per Second to Meter per Second", from: "foot-per-second", to: "meter-per-second" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "U.S. Naval Institute - Naval Shiphandling and Seamanship",
    "Federal Aviation Administration (FAA) - Aeronautical Information Manual"
  ]
};
