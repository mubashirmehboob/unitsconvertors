import { CustomArticleData } from "./types";

export const machToKilometerPerHour: CustomArticleData = {
  fromUnitId: "mach",
  toUnitId: "kilometer-per-hour",
  seoTitle: "Mach to Kilometer per Hour Converter (M to km/h) - Speed of Sound",
  metaDescription: "Convert Mach numbers to kilometers per hour (M to km/h) accurately. Master the 1,234.8 multiplier formula, supersonic transport speeds, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/mach-to-kilometer-per-hour",
  h1: "Mach to Kilometer per Hour Converter",
  introduction: [
    "Converting Mach numbers to kilometers per hour translates aerodynamic dimensionless flow velocities into the standard terrestrial speed unit used on roadways, high-speed rail systems, and civil aviation dashboards throughout the metric world. While aeronautical engineers and fighter pilots monitor flight regimes by Mach number to navigate aerodynamic shockwaves, passengers, air traffic authorities, and international news media report aircraft travel speeds in kilometers per hour.",
    "The Mach number (M) represents the ratio of true flight velocity to the local speed of sound in air ($M = v / a$). At standard sea-level atmospheric conditions (20 °C, 1 atm), the speed of sound in dry air is approximately 343 meters per second. Because there are exactly 3.6 kilometers per hour in one meter per second, multiplying 343 by 3.6 yields exactly 1,234.8 kilometers per hour for Mach 1.0 at standard sea-level temperature.",
    "To convert Mach to kilometers per hour at standard conditions, multiply the Mach number by 1,234.8 (or divide by 0.00080985). For example, a commercial airliner cruising at Mach 0.85 travels at approximately 1,049.58 km/h, while a Mach 2.0 supersonic jet reaches 2,469.6 km/h. This technical guide explains the conversion mathematics, altitude temperature effects, practical examples, and an extensive speed reference table."
  ],
  quickAnswer: {
    text: "To convert Mach to kilometers per hour at standard sea-level temperature (20 °C, 1 atm), multiply the Mach number by 1,234.8. For example, Mach 0.8 equals 987.84 km/h, and Mach 1.5 equals 1,852.2 km/h.",
    formulaDisplay: "km/h = Mach × 1,234.8",
    subtext: "Standard sea-level sound speed = 1,234.8 km/h | 1 km/h ≈ 0.00080985 Mach"
  },
  aboutSourceUnit: {
    title: "Understanding the Mach Number (M)",
    text: "Named after Austrian physicist Ernst Mach, the Mach number is a dimensionless velocity ratio comparing an object's speed to the acoustic speed in the surrounding air. It defines key aerodynamic boundaries: subsonic (M < 0.8), transonic (0.8 ≤ M ≤ 1.2), supersonic (1.2 < M < 5.0), and hypersonic (M ≥ 5.0)."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilometer per Hour (km/h)",
    text: "The kilometer per hour (km/h) is an internationally recognized metric unit of speed defined as the number of kilometers traveled in one hour. It is the primary legal speed limit unit across most countries and the benchmark metric for bullet trains, supercars, and transport logistics."
  },
  relationship: "At standard sea-level atmospheric temperature (20 °C), Mach 1.0 equals exactly 1,234.8 kilometers per hour. Conversely, one kilometer per hour equals approximately 0.00080985 Mach. Multiplying any Mach value by 1,234.8 converts it into kilometers per hour.",
  relationshipTitle: "Mach to Kilometer per Hour Speed Milestones",
  relationshipItems: [
    { label: "Mach 0.3 (High-speed train / Maglev scale)", value: "370.44 km/h" },
    { label: "Mach 0.80 (Commercial airliner cruise)", value: "987.84 km/h" },
    { label: "Mach 0.85 (Long-haul wide-body jet)", value: "1,049.58 km/h" },
    { label: "Mach 1.0 (Sonic threshold / Sea level)", value: "1,234.80 km/h" },
    { label: "Mach 2.0 (Concorde cruise velocity)", value: "2,469.60 km/h" },
    { label: "Mach 5.0 (Hypersonic boundary)", value: "6,174.00 km/h" }
  ],
  formula: {
    text: "Multiply the Mach number by 1,234.8 (the standard sea-level speed of sound in km/h) to determine kilometers per hour.",
    math: "\\text{km/h} = M \\times 343 \\times 3.6 = M \\times 1,234.8",
    subtext: "To convert kilometers per hour back to Mach, divide the km/h value by 1,234.8 (or multiply by 0.00080985)."
  },
  formulaTitle: "Mach to Kilometer per Hour Calculation Formula",
  practicalTip: {
    title: "1,200 Plus 35 Mental Estimation",
    text: "For rapid mental calculation: multiply the Mach value by 1,200 and add a small correction of about 35 km/h per Mach. For example, Mach 0.5 × 1,200 = 600; add ~17 = 617 km/h (exact is 617.4 km/h)."
  },
  expertNote: {
    title: "High-Altitude Temperature Correction",
    text: "Because air temperature drops to approximately -56.5 °C at 36,000 feet, the speed of sound at cruise altitude decreases from 1,234.8 km/h (at sea level) to approximately 1,062 km/h. Consequently, an airliner cruising at Mach 0.82 at 36,000 feet travels at approximately 871 km/h true airspeed, rather than 1,012 km/h."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Long-Range Commercial Jetliner Cruise",
        subtitle: "An Airbus A350 cruises at Mach 0.85 over the Atlantic. Convert this velocity into kilometers per hour at standard sea-level reference sound speed.",
        steps: [
          "State starting Mach number: M = 0.85.",
          "Apply conversion multiplier: km/h = 0.85 × 1,234.8.",
          "Calculate: 0.85 × 1,234.8 = 1,049.58.",
          "Result: Mach 0.85 corresponds to 1,049.58 km/h."
        ]
      },
      {
        title: "Example 2: Concorde Supersonic Passenger Transport",
        subtitle: "The historic Concorde cruised across the ocean at Mach 2.04. Calculate this speed in kilometers per hour at standard sea-level sound speed.",
        steps: [
          "Identify Mach value: M = 2.04.",
          "Multiply by 1,234.8: 2.04 × 1,234.8 = 2,518.992.",
          "Result: Mach 2.04 corresponds to approximately 2,519.0 km/h."
        ]
      },
      {
        title: "Example 3: SR-71 Blackbird Reconnaissance Velocity",
        subtitle: "The Lockheed SR-71 Blackbird established a sustained speed record of Mach 3.2. Express this velocity in kilometers per hour.",
        steps: [
          "State starting value: M = 3.2.",
          "Multiply by 1,234.8: 3.2 × 1,234.8 = 3,951.36.",
          "Result: Mach 3.2 equals 3,951.36 km/h."
        ]
      }
    ]
  },
  table: {
    title: "Mach to Kilometer per Hour Reference Table (Standard Sea Level)",
    headers: ["Mach Number (M)", "Speed (km/h)", "Speed (m/s)", "Flight Context & Speed Benchmark"],
    rows: [
      { fromVal: "0.1 M", toVal: "123.5 km/h", extra: "34.3 m/s", extra2: "Standard highway driving speed" },
      { fromVal: "0.2 M", toVal: "247.0 km/h", extra: "68.6 m/s", extra2: "Sports car track velocity" },
      { fromVal: "0.3 M", toVal: "370.4 km/h", extra: "102.9 m/s", extra2: "High-speed rail (TGV / Shinkansen)" },
      { fromVal: "0.5 M", toVal: "617.4 km/h", extra: "171.5 m/s", extra2: "Experimental Maglev train record" },
      { fromVal: "0.7 M", toVal: "864.4 km/h", extra: "240.1 m/s", extra2: "Short-haul regional jet cruise" },
      { fromVal: "0.8 M", toVal: "987.8 km/h", extra: "274.4 m/s", extra2: "Standard narrow-body jet cruise" },
      { fromVal: "0.85 M", toVal: "1,049.6 km/h", extra: "291.6 m/s", extra2: "Modern wide-body jetliner cruise" },
      { fromVal: "1.0 M", toVal: "1,234.8 km/h", extra: "343.0 m/s", extra2: "Sound barrier (Standard Sea Level)" },
      { fromVal: "1.5 M", toVal: "1,852.2 km/h", extra: "514.5 m/s", extra2: "Fighter jet supersonic dash" },
      { fromVal: "2.0 M", toVal: "2,469.6 km/h", extra: "686.0 m/s", extra2: "Concorde supersonic transport" },
      { fromVal: "3.0 M", toVal: "3,704.4 km/h", extra: "1,029.0 m/s", extra2: "SR-71 Blackbird high-altitude cruise" },
      { fromVal: "5.0 M", toVal: "6,174.0 km/h", extra: "1,715.0 m/s", extra2: "Hypersonic boundary threshold" }
    ]
  },
  applications: {
    title: "Industry & Aviation Applications",
    items: [
      {
        title: "Aviation Journalism & Public Communication",
        text: "Media reports and airline passenger displays convert cockpit Mach flight plan numbers into kilometers per hour to convey travel velocity clearly to global audiences."
      },
      {
        title: "Commercial High-Speed Rail Comparisons",
        text: "Transportation planners compare next-generation vacuum-tube maglev concepts (aiming for 1,000 km/h) against subsonic aircraft Mach figures."
      },
      {
        title: "Military Flight Route Timetable Planning",
        text: "Mission planners convert supersonic transit segments from Mach numbers into ground kilometers per hour to estimate mission waypoint arrival times."
      },
      {
        title: "Aerospace Propulsion & Rocket Sled Testing",
        text: "Test engineers evaluate hypersonic track sleds by converting target Mach milestones into km/h for telemetry radar tracking systems."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: To convert Mach to km/h, multiply by 1,234.8. Dividing by 1,234.8 is used when converting km/h back into Mach.",
      "Overlooking altitude temperature drops: At 35,000 feet, the speed of sound is roughly 1,065 km/h, not 1,234.8 km/h. True airspeed in km/h is significantly lower at high altitude for a given Mach.",
      "Confusing km/h with mph: 1 Mach is 1,234.8 km/h, but approximately 767.3 mph. Mixing up the two scales produces an error of over 60%.",
      "Assuming ground speed equals airspeed: A tailwind or headwind changes the aircraft's ground speed in km/h even when flying at a constant Mach number in the airmass."
    ]
  },
  faqs: [
    {
      question: "How do you convert Mach to kilometers per hour?",
      answer: "Multiply the Mach number by the speed of sound in km/h (1,234.8 km/h at standard sea-level temperature): km/h = Mach × 1,234.8."
    },
    {
      question: "How many km/h is Mach 1?",
      answer: "At standard sea level (20 °C, 1 atm), Mach 1 is exactly 1,234.8 km/h (or 1,225 km/h at standard ISA 15 °C). At 36,000 feet, Mach 1 is approximately 1,062 km/h."
    },
    {
      question: "What is Mach 0.85 in km/h?",
      answer: "Mach 0.85 multiplied by 1,234.8 equals approximately 1,049.58 km/h."
    },
    {
      question: "What is Mach 2 in km/h?",
      answer: "Mach 2 multiplied by 1,234.8 equals exactly 2,469.6 km/h."
    },
    {
      question: "What is Mach 5 (hypersonic) in km/h?",
      answer: "Mach 5 multiplied by 1,234.8 equals exactly 6,174.0 km/h."
    },
    {
      question: "How do you convert km/h back to Mach?",
      answer: "Divide the speed in kilometers per hour by 1,234.8: Mach = km/h ÷ 1,234.8."
    },
    {
      question: "What is 1,000 km/h in Mach?",
      answer: "1,000 km/h divided by 1,234.8 equals approximately Mach 0.81."
    },
    {
      question: "Why does the km/h equivalent of Mach decrease at high altitude?",
      answer: "The speed of sound is proportional to the square root of absolute temperature. Because air temperature drops from ~20 °C at sea level to -56.5 °C in the upper troposphere, sound travels slower at higher altitudes."
    },
    {
      question: "What is Mach 3 in km/h?",
      answer: "Mach 3 at standard sea level equals 3 × 1,234.8 = 3,704.4 km/h."
    },
    {
      question: "How fast was the Concorde in km/h?",
      answer: "The Concorde cruised at approximately Mach 2.04, which translated to roughly 2,180 km/h at its cruising altitude of 60,000 feet (or ~2,519 km/h if evaluated at sea-level sound speed)."
    }
  ],
  relatedList: [
    { label: "Mach to Meter per Second", from: "mach", to: "meter-per-second" },
    { label: "Mach to Mile per Hour", from: "mach", to: "mile-per-hour" },
    { label: "Mach to Knot", from: "mach", to: "knot" },
    { label: "Mach to Foot per Second", from: "mach", to: "foot-per-second" },
    { label: "Kilometer per Hour to Mach", from: "kilometer-per-hour", to: "mach" }
  ],
  references: [
    "ICAO Doc 7488 — Manual of the ICAO Standard Atmosphere",
    "ISO 2533:1975 — Standard Atmosphere",
    "BIPM — The International System of Units (SI)"
  ]
};
