import { CustomArticleData } from "./types";

export const machToKnot: CustomArticleData = {
  fromUnitId: "mach",
  toUnitId: "knot",
  seoTitle: "Mach to Knot Converter (M to kn) - Speed of Sound to Knots",
  metaDescription: "Convert Mach numbers to knots (M to kn) accurately. Master the 666.739 multiplier formula, aviation crossover altitude, true airspeed calculations, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/mach-to-knot",
  h1: "Mach to Knot Converter",
  introduction: [
    "Converting Mach numbers to knots bridges theoretical compressible aerodynamics with practical aviation navigation and naval operations. While aircraft flight computers, jet engine intake designs, and wing shockwave simulations operate on Mach numbers, cockpit airspeed indicators, air traffic control radars, and global flight plans navigate in knots.",
    "The Mach number (M) represents the ratio of true flight speed to the local acoustic sound speed in the ambient air ($M = v / a$). At standard sea-level atmospheric conditions (20 °C or 293.15 K, 1 atm), sound propagates through dry air at approximately 343 meters per second. A knot (kn) is defined internationally as one nautical mile per hour, or exactly 1,852 meters per 3,600 seconds (approximately 0.514444 m/s). Dividing 343 by (1,852 / 3,600) reveals that Mach 1.0 corresponds to approximately 666.739 knots at standard sea-level temperature.",
    "To convert a Mach number to knots at standard sea-level conditions, multiply the Mach value by approximately 666.739 (or divide by 0.0014998). For example, a modern jetliner cruising at Mach 0.82 travels at approximately 546.73 knots true airspeed at sea level, while a Mach 2.0 supersonic jet reaches 1,333.48 knots. This technical reference guide explains the mathematical conversion, temperature and altitude factors, step-by-step practical examples, and an extensive velocity lookup table."
  ],
  quickAnswer: {
    text: "To convert Mach to knots at standard sea level (20 °C, 1 atm), multiply the Mach number by 666.739 (or divide by 0.0014998). For example, Mach 0.8 equals approximately 533.39 knots, and Mach 1.5 equals approximately 1,000.11 knots.",
    formulaDisplay: "kn = Mach × 666.739",
    subtext: "Standard sea-level sound speed = 666.739 kn | 1 knot ≈ 0.0014998 Mach"
  },
  aboutSourceUnit: {
    title: "Understanding the Mach Number (M)",
    text: "Named after Austrian physicist Ernst Mach, the Mach number is a dimensionless velocity ratio comparing an aircraft's speed to the local acoustic sound speed in air. It is the primary flight metric used above 28,000 feet to manage aerodynamic compressibility and structural shockwave boundaries."
  },
  aboutTargetUnit: {
    title: "Understanding the Knot (kn)",
    text: "The knot (kn or kt) is an internationally standardized speed unit equal to one nautical mile per hour (1.852 km/h or ~1.15078 mph). It is the mandatory speed metric for worldwide civil and military aviation air traffic management, maritime voyages, and oceanic weather reporting."
  },
  relationship: "Under standard sea-level atmospheric conditions (20 °C), Mach 1.0 equals approximately 666.73866 knots. Conversely, one knot equals approximately 0.00149984 Mach. Multiplying any Mach value by 666.739 converts it directly into knots.",
  relationshipTitle: "Mach to Knot Aeronautical Flight Milestones",
  relationshipItems: [
    { label: "Mach 0.3 (Terminal approach speed)", value: "200.02 kn" },
    { label: "Mach 0.78 (Regional jet cruise)", value: "520.06 kn" },
    { label: "Mach 0.85 (Wide-body airliner cruise)", value: "566.73 kn" },
    { label: "Mach 1.0 (Sonic threshold / Sea level)", value: "666.74 kn" },
    { label: "Mach 2.0 (Concorde cruise velocity)", value: "1,333.48 kn" },
    { label: "Mach 3.0 (SR-71 Blackbird cruise)", value: "2,000.22 kn" }
  ],
  formula: {
    text: "Multiply the Mach number by 666.739 (the standard sea-level speed of sound in knots) to calculate knots.",
    math: "\\text{kn} = M \\times \\frac{343 \\times 3,600}{1,852} = M \\times \\frac{1,234,800}{1,852} \\approx M \\times 666.739",
    subtext: "To convert knots back to Mach, divide the knot value by 666.739 (or multiply by 0.00149984)."
  },
  formulaTitle: "Mach to Knot Calculation Formula",
  practicalTip: {
    title: "Two-Thirds Multiplier Mental Shortcut",
    text: "For rapid cockpit or mental estimation: multiply the Mach value by 1,000 and multiply by two-thirds (multiply by 667). For example, Mach 0.6 × 667 ≈ 400 knots (exact is 400.04 kn); Mach 0.9 × 667 ≈ 600 knots (exact is 600.06 kn)."
  },
  expertNote: {
    title: "Aviation Crossover Altitude & True Airspeed",
    text: "During airliner climb, pilots transition from indicated airspeed in knots (KIAS) to Mach number at the 'crossover altitude' (around 28,000 to 30,000 feet). Because stratospheric air temperature is cold (-56.5 °C), Mach 1.0 at cruise altitude drops from 666.7 knots to approximately 573 knots true airspeed (KTAS). Therefore, an airliner flying at Mach 0.80 at 36,000 feet travels at roughly 458 knots true airspeed."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Transatlantic Airliner Cruise (Mach 0.84)",
        subtitle: "A Boeing 787 cruises at Mach 0.84. Convert this speed into knots at standard sea-level reference sound speed.",
        steps: [
          "State starting Mach number: M = 0.84.",
          "Apply conversion multiplier: kn = 0.84 × 666.739.",
          "Calculate: 0.84 × 666.739 ≈ 560.06.",
          "Result: Mach 0.84 corresponds to approximately 560.06 knots."
        ]
      },
      {
        title: "Example 2: Concorde Supersonic Cruise (Mach 2.04)",
        subtitle: "Calculate the cruising speed in knots of the Concorde flying at Mach 2.04 at standard sea-level sound speed.",
        steps: [
          "Identify Mach value: M = 2.04.",
          "Multiply by 666.739: 2.04 × 666.739 ≈ 1,360.15.",
          "Result: Mach 2.04 corresponds to approximately 1,360.15 knots."
        ]
      },
      {
        title: "Example 3: Low-Altitude Fighter Dash (Mach 1.2)",
        subtitle: "A multi-role fighter executes a low-altitude supersonic run at Mach 1.2. Convert this velocity into knots.",
        steps: [
          "State starting value: M = 1.2.",
          "Multiply by 666.739: 1.2 × 666.739 ≈ 800.09.",
          "Result: Mach 1.2 equals approximately 800.09 knots."
        ]
      }
    ]
  },
  table: {
    title: "Mach to Knot Reference Table (Standard Sea Level)",
    headers: ["Mach Number (M)", "Speed (kn)", "Speed (km/h)", "Aeronautical Regime & Flight Context"],
    rows: [
      { fromVal: "0.1 M", toVal: "66.67 kn", extra: "123.5 km/h", extra2: "Light general aviation approach" },
      { fromVal: "0.3 M", toVal: "200.02 kn", extra: "370.4 km/h", extra2: "Terminal area maneuver speed" },
      { fromVal: "0.5 M", toVal: "333.37 kn", extra: "617.4 km/h", extra2: "High-speed turboprop cruise" },
      { fromVal: "0.7 M", toVal: "466.72 kn", extra: "864.4 km/h", extra2: "Subsonic descent velocity" },
      { fromVal: "0.8 M", toVal: "533.39 kn", extra: "987.8 km/h", extra2: "Standard commercial jet cruise" },
      { fromVal: "0.85 M", toVal: "566.73 kn", extra: "1,049.6 km/h", extra2: "Modern wide-body jetliner cruise" },
      { fromVal: "1.0 M", toVal: "666.74 kn", extra: "1,234.8 km/h", extra2: "Sound barrier (Standard Sea Level)" },
      { fromVal: "1.5 M", toVal: "1,000.11 kn", extra: "1,852.2 km/h", extra2: "Tactical fighter supersonic cruise" },
      { fromVal: "2.0 M", toVal: "1,333.48 kn", extra: "2,469.6 km/h", extra2: "Concorde supersonic transport" },
      { fromVal: "2.5 M", toVal: "1,666.85 kn", extra: "3,087.0 km/h", extra2: "MiG-25 interceptor high-speed dash" },
      { fromVal: "3.0 M", toVal: "2,000.22 kn", extra: "3,704.4 km/h", extra2: "SR-71 Blackbird sustained cruise" },
      { fromVal: "5.0 M", toVal: "3,333.69 kn", extra: "6,174.0 km/h", extra2: "Hypersonic boundary threshold" }
    ]
  },
  applications: {
    title: "Flight Planning & Aerospace Applications",
    items: [
      {
        title: "Flight Management System (FMS) Waypoint Navigation",
        text: "Airline FMS computers convert planned Mach cruise schedules into true airspeed in knots to calculate ground speed and fuel burn across oceanic waypoints."
      },
      {
        title: "Air Traffic Control (ATC) Separation Standards",
        text: "Oceanic controllers instruct international jetliners to fly designated Mach numbers (e.g., Mach 0.82) to maintain constant longitudinal spacing in knots between aircraft."
      },
      {
        title: "Aircraft Coffin Corner & Buffet Margin Analysis",
        text: "Pilots monitor the shrinking margin between stall speed in knots and critical Mach number (MMO) as aircraft climb to high cruising altitudes."
      },
      {
        title: "Naval Fighter Strike Package Coordination",
        text: "Naval strike packages synchronize target time-on-target (TOT) by translating high-altitude supersonic dash Mach numbers into ingress speeds in knots."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing True Airspeed (TAS) with Indicated Airspeed (IAS): Cockpit airspeed indicators display dynamic pressure in knots (KIAS), not true speed. At 36,000 ft, Mach 0.82 is roughly 470 knots true airspeed, but only ~260 knots indicated airspeed.",
      "Dividing instead of multiplying: To convert Mach to knots, multiply by 666.739. Dividing by 666.739 converts knots back to Mach.",
      "Ignoring temperature drop at altitude: Mach 1 is 666.7 knots at sea level (20 °C), but only about 573 knots in the cold upper atmosphere (-56.5 °C).",
      "Using the mph multiplier (767) instead of the knot multiplier (667): Knots are about 15% larger than miles per hour. Using 767 produces an overestimated knot speed."
    ]
  },
  faqs: [
    {
      question: "How do you convert Mach to knots?",
      answer: "Multiply the Mach number by the speed of sound in knots (approximately 666.739 knots at standard sea level): kn = Mach × 666.739."
    },
    {
      question: "How many knots is Mach 1?",
      answer: "At standard sea level (20 °C, 1 atm), Mach 1 is approximately 666.74 knots (or 661.5 knots at standard ISA 15 °C). At 36,000 feet, Mach 1 is roughly 573 knots."
    },
    {
      question: "What is Mach 0.8 in knots?",
      answer: "Mach 0.8 multiplied by 666.739 equals approximately 533.39 knots."
    },
    {
      question: "What is Mach 0.85 in knots?",
      answer: "Mach 0.85 multiplied by 666.739 equals approximately 566.73 knots."
    },
    {
      question: "What is Mach 2 in knots?",
      answer: "Mach 2 multiplied by 666.739 equals approximately 1,333.48 knots."
    },
    {
      question: "How do you convert knots back to Mach?",
      answer: "Divide the speed in knots by 666.739: Mach = kn ÷ 666.739."
    },
    {
      question: "What speed is 500 knots in Mach?",
      answer: "500 knots divided by 666.739 equals approximately Mach 0.75."
    },
    {
      question: "Why do pilots fly Mach instead of knots at high altitude?",
      answer: "At high altitudes, aerodynamic compressibility and shockwave formation depend directly on Mach number rather than indicated airspeed in knots."
    },
    {
      question: "What is Mach 3 in knots?",
      answer: "Mach 3 at standard sea level equals 3 × 666.739 = 2,000.22 knots."
    },
    {
      question: "What is the speed of sound in knots at standard cruising altitude?",
      answer: "At 36,000 feet and higher in the standard atmosphere (-56.5 °C), the speed of sound is approximately 573 knots true airspeed."
    }
  ],
  relatedList: [
    { label: "Knot to Mach", from: "knot", to: "mach" },
    { label: "Mach to Kilometer per Hour", from: "mach", to: "kilometer-per-hour" },
    { label: "Mach to Mile per Hour", from: "mach", to: "mile-per-hour" },
    { label: "Mach to Meter per Second", from: "mach", to: "meter-per-second" },
    { label: "Mach to Foot per Second", from: "mach", to: "foot-per-second" }
  ],
  references: [
    "ICAO Annex 2 — Rules of the Air",
    "FAA Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25B)",
    "ISO 2533:1975 — Standard Atmosphere"
  ]
};
