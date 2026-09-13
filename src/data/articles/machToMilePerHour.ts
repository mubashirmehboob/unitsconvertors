import { CustomArticleData } from "./types";

export const machToMilePerHour: CustomArticleData = {
  fromUnitId: "mach",
  toUnitId: "mile-per-hour",
  seoTitle: "Mach to Mile per Hour Converter (M to mph) - Speed of Sound",
  metaDescription: "Convert Mach numbers to miles per hour (M to mph) accurately. Master the 767.269 multiplier formula, sound barrier history, supersonic records, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/mach-to-mile-per-hour",
  h1: "Mach to Mile per Hour Converter",
  introduction: [
    "Converting Mach numbers to miles per hour translates aerodynamic flow compressibility ratios into the familiar speed metric used on United States and British highways, aviation speed records, and popular automotive engineering discussions. While aerospace engineers and military pilots utilize Mach numbers to evaluate aerodynamic wave drag, shockwave formation, and aerodynamic heating, the public, historians, and motorsport enthusiasts gauge record-breaking vehicles in miles per hour.",
    "The Mach number (M) measures true vehicle airspeed relative to the local acoustic sound speed in the ambient atmosphere ($M = v / a$). At standard sea-level atmospheric conditions (20 °C or 293.15 K, 1 atm), the speed of sound in dry air is approximately 343 meters per second. In the U.S. customary system, one mile per hour is defined as traveling one international statute mile (1,609.344 meters) in 3,600 seconds, equal to exactly 0.44704 meters per second. Dividing 343 by 0.44704 reveals that Mach 1.0 corresponds to approximately 767.269 miles per hour at standard sea-level temperature.",
    "To convert a Mach number to miles per hour at standard sea-level conditions, multiply the Mach value by approximately 767.269 (or divide by 0.0013033). For example, a modern commercial jetliner cruising at Mach 0.82 reaches approximately 629.16 mph, while a Mach 2.0 supersonic jet flies at 1,534.54 mph. This engineering guide details the mathematical derivation, historical sound barrier records, altitude temperature effects, and a comprehensive velocity lookup table."
  ],
  quickAnswer: {
    text: "To convert Mach to miles per hour at standard sea level (20 °C, 1 atm), multiply the Mach number by 767.269 (or divide by 0.0013033). For example, Mach 0.8 equals approximately 613.82 mph, and Mach 2.0 equals 1,534.54 mph.",
    formulaDisplay: "mph = Mach × 767.269",
    subtext: "Standard sea-level sound speed = 767.269 mph | 1 mph ≈ 0.0013033 Mach"
  },
  aboutSourceUnit: {
    title: "Understanding the Mach Number (M)",
    text: "Named in tribute to Austrian physicist Ernst Mach, the Mach number is a dimensionless velocity ratio comparing flight speed to the speed of sound in the surrounding atmosphere. It categorizes high-speed aerodynamics into subsonic, transonic, supersonic, and hypersonic regimes."
  },
  aboutTargetUnit: {
    title: "Understanding the Mile per Hour (mph)",
    text: "The mile per hour (mph) is the standard unit of speed in the U.S. customary and British imperial systems, equal to traversing 5,280 feet in one hour. It serves as the official speed limit unit for American roadways and is widely cited in motorsports, land speed records, and aviation journalism."
  },
  relationship: "Under standard sea-level atmospheric conditions (20 °C), Mach 1.0 equals approximately 767.269 miles per hour. Conversely, one mile per hour equals approximately 0.0013033 Mach. Multiplying any Mach value by 767.269 converts it directly into miles per hour.",
  relationshipTitle: "Mach to Mile per Hour Aviation Milestones",
  relationshipItems: [
    { label: "Mach 0.3 (NASCAR & land vehicle threshold)", value: "230.18 mph" },
    { label: "Mach 0.82 (Typical passenger jet cruise)", value: "629.16 mph" },
    { label: "Mach 1.0 (Sonic threshold / Sea level)", value: "767.27 mph" },
    { label: "Mach 1.02 (ThrustSSC supersonic car record)", value: "782.61 mph" },
    { label: "Mach 2.0 (Concorde cruise velocity)", value: "1,534.54 mph" },
    { label: "Mach 3.2 (SR-71 Blackbird sustained cruise)", value: "2,455.26 mph" }
  ],
  formula: {
    text: "Multiply the Mach number by 767.269 (the standard sea-level speed of sound in mph) to calculate miles per hour.",
    math: "\\text{mph} = M \\times \\frac{343}{0.44704} \\approx M \\times 767.269",
    subtext: "To convert miles per hour back to Mach, divide the mph value by 767.269 (or multiply by 0.0013033)."
  },
  formulaTitle: "Mach to Mile per Hour Calculation Formula",
  practicalTip: {
    title: "Three-Quarter Factor Mental Estimation",
    text: "For a rapid mental estimate: multiply the Mach value by 1,000 and take three-quarters (multiply by 750 or 770). For example, Mach 0.8 × 750 ≈ 600 mph (close to the exact 613.8 mph); Mach 2.0 × 770 = 1,540 mph (very close to 1,534.5 mph)."
  },
  expertNote: {
    title: "Altitude Temperature Dependency on Mach Speed",
    text: "Because sound speed drops as temperature falls, the mph equivalent of Mach 1 decreases at cruising altitude. While Mach 1 is roughly 767 mph at sea level (20 °C) and 761 mph at standard ISA sea level (15 °C), it falls to approximately 660 mph at 36,000 feet (-56.5 °C). A passenger airliner flying at Mach 0.85 at 35,000 feet is traveling at roughly 560 mph true airspeed."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Boeing 777 Commercial Cruise",
        subtitle: "A Boeing 777-300ER cruises at Mach 0.84. Convert this velocity into miles per hour at standard sea-level sound speed.",
        steps: [
          "State starting Mach number: M = 0.84.",
          "Apply conversion multiplier: mph = 0.84 × 767.269.",
          "Calculate: 0.84 × 767.269 ≈ 644.506.",
          "Result: Mach 0.84 equals approximately 644.51 mph."
        ]
      },
      {
        title: "Example 2: Chuck Yeager & Bell X-1 Sound Barrier",
        subtitle: "In 1947, Chuck Yeager piloted the Bell X-1 to Mach 1.06 at 43,000 feet. Calculate what Mach 1.06 equals at standard sea-level speed of sound.",
        steps: [
          "Identify Mach value: M = 1.06.",
          "Multiply by 767.269: 1.06 × 767.269 ≈ 813.305.",
          "Result: Mach 1.06 corresponds to approximately 813.31 mph at sea-level reference sound speed."
        ]
      },
      {
        title: "Example 3: North American X-15 Rocket Plane",
        subtitle: "The experimental X-15 rocket-powered aircraft achieved a piloted speed record of Mach 6.70. Convert this velocity to miles per hour.",
        steps: [
          "State starting value: M = 6.70.",
          "Multiply by 767.269: 6.70 × 767.269 ≈ 5,140.702.",
          "Result: Mach 6.70 corresponds to approximately 5,140.70 mph."
        ]
      }
    ]
  },
  table: {
    title: "Mach to Mile per Hour Reference Table (Standard Sea Level)",
    headers: ["Mach Number (M)", "Speed (mph)", "Speed (km/h)", "Aviation Milestone & Context"],
    rows: [
      { fromVal: "0.1 M", toVal: "76.73 mph", extra: "123.5 km/h", extra2: "Highway driving velocity" },
      { fromVal: "0.2 M", toVal: "153.45 mph", extra: "247.0 km/h", extra2: "High-performance sports car" },
      { fromVal: "0.4 M", toVal: "306.91 mph", extra: "493.9 km/h", extra2: "Turboprop regional airliner" },
      { fromVal: "0.6 M", toVal: "460.36 mph", extra: "740.9 km/h", extra2: "Subsonic jet descent speed" },
      { fromVal: "0.8 M", toVal: "613.82 mph", extra: "987.8 km/h", extra2: "Narrow-body jetliner cruise" },
      { fromVal: "0.85 M", toVal: "652.18 mph", extra: "1,049.6 km/h", extra2: "Wide-body international cruise" },
      { fromVal: "1.0 M", toVal: "767.27 mph", extra: "1,234.8 km/h", extra2: "Sound barrier (Standard Sea Level)" },
      { fromVal: "1.5 M", toVal: "1,150.90 mph", extra: "1,852.2 km/h", extra2: "Supersonic fighter dash" },
      { fromVal: "2.0 M", toVal: "1,534.54 mph", extra: "2,469.6 km/h", extra2: "Concorde cruising speed" },
      { fromVal: "3.0 M", toVal: "2,301.81 mph", extra: "3,704.4 km/h", extra2: "SR-71 Blackbird sustained cruise" },
      { fromVal: "5.0 M", toVal: "3,836.35 mph", extra: "6,174.0 km/h", extra2: "Hypersonic regime threshold" },
      { fromVal: "6.7 M", toVal: "5,140.70 mph", extra: "8,273.2 km/h", extra2: "X-15 manned aircraft record" }
    ]
  },
  applications: {
    title: "Aerospace & Automotive Applications",
    items: [
      {
        title: "Land Speed Record (LSR) Engineering",
        text: "In 1997, the twin-turbofan ThrustSSC car broke the sound barrier on land, achieving Mach 1.02, officially recorded at 763.035 mph across the Black Rock Desert."
      },
      {
        title: "Civil Aviation Passenger Displays",
        text: "In-flight entertainment screens on transatlantic flights convert cockpit Mach cruise targets into miles per hour to inform passengers of ground progress."
      },
      {
        title: "Aviation History & Record Documentation",
        text: "Historical archives document military speed runs and aerospace research milestones by converting Mach telemetry into miles per hour for American publications."
      },
      {
        title: "Aerodynamic Tunnel Speed Calibration",
        text: "Wind tunnel test engineers compare transducer dynamic pressures calibrated in Mach numbers against wind speeds recorded in miles per hour."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: To convert Mach to mph, multiply by 767.269. Dividing by 767.269 is only done when converting mph to Mach.",
      "Ignoring the 761 vs 767 mph difference: At standard ISA sea-level temperature (15 °C), Mach 1 is 761.2 mph, while at 20 °C it is 767.3 mph. Be aware of the baseline temperature used.",
      "Confusing miles per hour with knots: Mach 1 is roughly 767 mph, but only 667 knots. Mixing up mph and knots produces a 15% error.",
      "Assuming Mach speed is constant with altitude: Cruising at Mach 0.85 at 36,000 ft equals roughly 560 mph true airspeed, because cold stratospheric air lowers the speed of sound to ~660 mph."
    ]
  },
  faqs: [
    {
      question: "How do you convert Mach to miles per hour?",
      answer: "Multiply the Mach number by the speed of sound in miles per hour (approximately 767.269 mph at standard sea-level temperature): mph = Mach × 767.269."
    },
    {
      question: "How many mph is Mach 1?",
      answer: "At standard sea level (20 °C, 1 atm), Mach 1 is approximately 767.27 mph (or 761.2 mph at standard ISA 15 °C). At 36,000 feet, Mach 1 is roughly 660 mph."
    },
    {
      question: "What is Mach 0.8 in mph?",
      answer: "Mach 0.8 multiplied by 767.269 equals approximately 613.82 mph."
    },
    {
      question: "What is Mach 2 in mph?",
      answer: "Mach 2 multiplied by 767.269 equals approximately 1,534.54 mph."
    },
    {
      question: "What is Mach 3 in mph?",
      answer: "Mach 3 multiplied by 767.269 equals approximately 2,301.81 mph."
    },
    {
      question: "What is Mach 5 (hypersonic) in mph?",
      answer: "Mach 5 multiplied by 767.269 equals approximately 3,836.35 mph."
    },
    {
      question: "How do you convert mph back to Mach?",
      answer: "Divide the speed in miles per hour by 767.269: Mach = mph ÷ 767.269."
    },
    {
      question: "How fast is 700 mph in Mach?",
      answer: "700 mph divided by 767.269 equals approximately Mach 0.91."
    },
    {
      question: "What was the top speed of the Concorde in mph?",
      answer: "The Concorde had a cruising speed of Mach 2.04, which translated to approximately 1,350 mph at 60,000 feet cruise altitude (or ~1,565 mph at sea-level sound speed)."
    },
    {
      question: "Has a car ever driven faster than Mach 1?",
      answer: "Yes. On October 15, 1997, Andy Green drove the ThrustSSC jet car to Mach 1.02 (763.035 mph) in Nevada, setting the first supersonic land speed record."
    }
  ],
  relatedList: [
    { label: "Mach to Kilometer per Hour", from: "mach", to: "kilometer-per-hour" },
    { label: "Mach to Meter per Second", from: "mach", to: "meter-per-second" },
    { label: "Mach to Knot", from: "mach", to: "knot" },
    { label: "Mach to Foot per Second", from: "mach", to: "foot-per-second" },
    { label: "Mile per Hour to Mach", from: "mile-per-hour", to: "mach" }
  ],
  references: [
    "FAA Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25B)",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units",
    "Federation Aeronautique Internationale (FAI) — World Air Sports Federation Records"
  ]
};
