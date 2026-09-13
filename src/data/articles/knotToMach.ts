import { CustomArticleData } from "./types";

export const knotToMach: CustomArticleData = {
  fromUnitId: "knot",
  toUnitId: "mach",
  seoTitle: "Knot to Mach Converter (kn to M) - Speed of Sound",
  metaDescription: "Convert knots to Mach numbers (kn to M) accurately. Master the 666.739 divisor formula, supersonic flight regimes, aeronautical airspeed, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/knot-to-mach",
  h1: "Knot to Mach Converter",
  introduction: [
    "Converting knots to Mach numbers connects classical nautical navigation and aeronautical indicated airspeed with high-speed compressible aerodynamics. While pilots monitor indicated airspeed in knots during takeoff, climb, and approach, high-altitude cruising commercial jetliners and military fighter aircraft navigate according to Mach number to avoid aerodynamic shockwaves and structural buffet limits.",
    "A knot (kn) represents one international nautical mile per hour, equal to exactly 1,852 meters per 3,600 seconds (approximately 0.514444 m/s). The Mach number (M) is a dimensionless ratio comparing the velocity of an object to the local speed of sound in the surrounding fluid. At standard sea-level atmospheric conditions (15 °C to 20 °C, 1 atm), sound propagates through dry air at approximately 343 meters per second (1,234.8 km/h or 666.739 knots).",
    "To convert knots to Mach at standard conditions, divide the speed in knots by approximately 666.739 (or multiply by 0.00149984). For example, 300 knots equals approximately Mach 0.450, while the sound barrier (Mach 1.0) occurs at approximately 666.74 knots at standard sea-level temperature. This technical guide outlines the conversion mathematics, altitude temperature effects, practical calculation examples, and a comprehensive velocity reference table."
  ],
  quickAnswer: {
    text: "To convert knots to Mach at standard sea-level temperature (20 °C, 343 m/s), divide the speed in knots by 666.739 (or multiply by 0.00149984). For example, 250 knots equals Mach 0.375, and 500 knots equals Mach 0.750.",
    formulaDisplay: "Mach = kn ÷ 666.739",
    subtext: "Standard sea-level speed of sound = 343 m/s = 666.739 kn | 1 knot ≈ 0.00149984 Mach"
  },
  aboutSourceUnit: {
    title: "Understanding the Knot (kn)",
    text: "The knot (kn or kt) is a unit of speed equal to one nautical mile per hour (1.852 km/h or ~1.15078 mph). Standardized internationally in 1929, knots remain the mandatory velocity metric across global aviation flight plans, air traffic control radars, and maritime navigation."
  },
  aboutTargetUnit: {
    title: "Understanding the Mach Number (M)",
    text: "Named after Austrian physicist Ernst Mach, the Mach number is a dimensionless velocity ratio representing true airspeed divided by the local acoustic sound speed ($M = v / a$). Because air temperature drops with altitude, the acoustic velocity decreases as an aircraft ascends, altering the knot equivalent of Mach 1."
  },
  relationship: "At standard sea-level conditions (sound speed of 343 m/s), one Mach equals approximately 666.73866 knots. Conversely, one knot equals approximately 0.00149984 Mach. Dividing any knot airspeed by 666.739 yields its standard Mach equivalent.",
  relationshipTitle: "Knot to Mach Flight Regime Milestones",
  relationshipItems: [
    { label: "100 Knots (Turboprop approach)", value: "Mach 0.150" },
    { label: "250 Knots (FAA terminal limit below 10,000 ft)", value: "Mach 0.375" },
    { label: "500 Knots (Commercial airliner cruise)", value: "Mach 0.750" },
    { label: "666.74 Knots (Sonic threshold / Mach 1.0)", value: "Mach 1.000" },
    { label: "1,333.48 Knots (Mach 2.0 supersonic cruise)", value: "Mach 2.000" },
    { label: "3,333.69 Knots (Hypersonic boundary / Mach 5.0)", value: "Mach 5.000" }
  ],
  formula: {
    text: "Divide the speed in knots by 666.739 (standard sea-level sound speed) to obtain the Mach number.",
    math: "M = \\frac{\\text{kn}}{666.73866} = \\text{kn} \\times \\frac{1,852}{3,600 \\times 343} \\approx \\text{kn} \\times 0.00149984",
    subtext: "To convert Mach back into knots, multiply the Mach number by 666.739."
  },
  formulaTitle: "Knot to Mach Calculation Formula",
  practicalTip: {
    title: "Two-Thirds Mental Shortcut",
    text: "To estimate Mach quickly from knots: divide by 1,000 and multiply by 1.5 (or divide by 667). For example, 400 kn ÷ 1,000 = 0.4; 0.4 × 1.5 = Mach 0.60 (very close to the precise 0.600 Mach)."
  },
  expertNote: {
    title: "Altitude Temperature Dependency (ISA Standard)",
    text: "The local speed of sound depends strictly on absolute ambient temperature ($a = \\sqrt{\\gamma R T}$), not air pressure or density. While the sea-level speed of sound is 666.7 kn (at 20 °C) or 661.5 kn (at 15 °C ISA), at a typical cruising altitude of 36,000 feet (-56.5 °C), sound speed falls to approximately 573 knots. Commercial flight management systems (FMS) compute Mach using onboard total air temperature probes."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Jetliner High-Speed Cruise",
        subtitle: "A Boeing 787 Dreamliner cruises at an equivalent true airspeed of 485 knots. Convert this velocity into a standard Mach number.",
        steps: [
          "State starting airspeed: 485 knots.",
          "Apply conversion divisor: Mach = kn ÷ 666.739.",
          "Calculate: 485 ÷ 666.739 ≈ 0.7274.",
          "Result: 485 knots corresponds to approximately Mach 0.727."
        ]
      },
      {
        title: "Example 2: Military Interceptor Dash Speed",
        subtitle: "A naval fighter jet achieves an airspeed of 1,200 knots during an afterburner climb. Convert this speed to Mach.",
        steps: [
          "Identify knots: 1,200 kn.",
          "Divide by 666.739: 1,200 ÷ 666.739 ≈ 1.7998.",
          "Result: 1,200 knots corresponds to approximately Mach 1.80."
        ]
      },
      {
        title: "Example 3: Terminal Airspace Speed Limit",
        subtitle: "Federal aviation regulations mandate a maximum indicated airspeed of 250 knots below 10,000 feet. Calculate the Mach equivalent at standard conditions.",
        steps: [
          "State starting value: 250 kn.",
          "Divide by 666.739: 250 ÷ 666.739 ≈ 0.37496.",
          "Result: 250 knots equals approximately Mach 0.375."
        ]
      }
    ]
  },
  table: {
    title: "Knot to Mach Reference Table (Standard Sea Level)",
    headers: ["Speed (kn)", "Mach Number (M)", "Speed (km/h)", "Aeronautical Regime & Context"],
    rows: [
      { fromVal: "50 kn", toVal: "0.075 M", extra: "92.6 km/h", extra2: "Light aircraft stall boundary" },
      { fromVal: "100 kn", toVal: "0.150 M", extra: "185.2 km/h", extra2: "General aviation climb speed" },
      { fromVal: "150 kn", toVal: "0.225 M", extra: "277.8 km/h", extra2: "Commercial transport approach speed" },
      { fromVal: "200 kn", toVal: "0.300 M", extra: "370.4 km/h", extra2: "Turboprop cruise speed" },
      { fromVal: "250 kn", toVal: "0.375 M", extra: "463.0 km/h", extra2: "Low-altitude civil speed restriction" },
      { fromVal: "350 kn", toVal: "0.525 M", extra: "648.2 km/h", extra2: "High-speed regional jet climb" },
      { fromVal: "450 kn", toVal: "0.675 M", extra: "833.4 km/h", extra2: "Subsonic long-range cruise" },
      { fromVal: "500 kn", toVal: "0.750 M", extra: "926.0 km/h", extra2: "Transonic transport cruise regime" },
      { fromVal: "550 kn", toVal: "0.825 M", extra: "1,018.6 km/h", extra2: "Modern wide-body cruise (B777/A350)" },
      { fromVal: "666.74 kn", toVal: "1.000 M", extra: "1,234.8 km/h", extra2: "Sonic boundary (Standard Sea Level)" },
      { fromVal: "1,000 kn", toVal: "1.500 M", extra: "1,852.0 km/h", extra2: "Supersonic tactical fighter cruise" },
      { fromVal: "1,333.48 kn", toVal: "2.000 M", extra: "2,469.6 km/h", extra2: "Concorde supersonic transport cruise" }
    ]
  },
  applications: {
    title: "Aviation & Aerodynamic Applications",
    items: [
      {
        title: "Cockpit Airspeed & Mach Meter Transition",
        text: "During airliner climb, pilots transition from indicated airspeed in knots (KIAS) to Mach number around 28,000 to 30,000 feet, known as the crossover altitude."
      },
      {
        title: "Transonic Compressibility Wave Drag",
        text: "Aerodynamicists convert wind tunnel knot airspeeds into Mach numbers to locate shockwave inception on supercritical wing profiles."
      },
      {
        title: "Sonic Boom Footprint Prediction",
        text: "Flight operations planners calculate ground sonic boom overpressures by translating supersonic climb knot profiles into local Mach trajectories."
      },
      {
        title: "Aircraft Performance & Buffet Margin Analysis",
        text: "High-altitude flight manuals plot aerodynamic stall speed (in knots) against maximum operating Mach ($M_{MO}$) to maintain safe flight margins (the 'coffin corner')."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Ignoring altitude temperature: The speed of sound drops from ~667 kn at sea level to ~573 kn at 36,000 ft. A speed of 480 knots is Mach 0.72 at sea level, but Mach 0.84 at 36,000 ft.",
      "Confusing Indicated Airspeed (IAS) with True Airspeed (TAS): An aircraft cockpit gauge showing 250 knots indicated at 35,000 ft is actually traveling at roughly 450 knots true airspeed, which converts to about Mach 0.78.",
      "Multiplying instead of dividing: Converting knots to Mach requires dividing by ~666.739. Multiplying creates an astronomically incorrect number.",
      "Assuming Mach is a fixed speed unit: Mach is a dimensionless ratio that varies with temperature; it is not an absolute constant speed like knots or km/h."
    ]
  },
  faqs: [
    {
      question: "How do you convert knots to Mach?",
      answer: "Divide the speed in knots by the local speed of sound in knots (approximately 666.739 at standard sea level): Mach = kn ÷ 666.739."
    },
    {
      question: "How many knots is Mach 1?",
      answer: "At standard sea level (20 °C), Mach 1 is approximately 666.74 knots (or 661.5 knots at standard ISA 15 °C). At high cruising altitudes (-56.5 °C), Mach 1 is about 573 knots."
    },
    {
      question: "What is 500 knots in Mach?",
      answer: "At standard sea level, 500 knots divided by 666.739 equals approximately Mach 0.75."
    },
    {
      question: "What is 250 knots in Mach?",
      answer: "250 knots divided by 666.739 equals approximately Mach 0.375."
    },
    {
      question: "What is 1,000 knots in Mach?",
      answer: "1,000 knots divided by 666.739 equals approximately Mach 1.50."
    },
    {
      question: "Why does Mach 1 change with altitude?",
      answer: "The speed of sound depends directly on air temperature. As an aircraft climbs into the colder stratosphere, the temperature drops, reducing the speed of sound from ~667 knots at sea level to ~573 knots above 36,000 feet."
    },
    {
      question: "What is the crossover altitude in aviation?",
      answer: "The crossover altitude (typically between 26,000 and 30,000 feet) is where an aircraft climbs at a constant indicated airspeed (in knots) until reaching a predetermined target Mach number, after which climb continues at a constant Mach."
    },
    {
      question: "How do you convert Mach back to knots?",
      answer: "Multiply the Mach number by the speed of sound in knots: kn = Mach × 666.739."
    },
    {
      question: "What is the typical cruise Mach for a commercial airliner?",
      answer: "Most modern commercial jetliners cruise between Mach 0.78 and Mach 0.85, which corresponds to true airspeeds of roughly 450 to 500 knots at cruise altitude."
    },
    {
      question: "Is Mach a unit of measurement?",
      answer: "Mach is a dimensionless number representing the ratio of speed to the local acoustic velocity, rather than an absolute unit of measurement."
    }
  ],
  relatedList: [
    { label: "Mach to Knot", from: "mach", to: "knot" },
    { label: "Knot to Kilometer per Hour", from: "knot", to: "kilometer-per-hour" },
    { label: "Knot to Mile per Hour", from: "knot", to: "mile-per-hour" },
    { label: "Knot to Foot per Second", from: "knot", to: "foot-per-second" },
    { label: "Knot to Speed of Light", from: "knot", to: "speed-of-light" }
  ],
  references: [
    "ICAO Doc 7488 — Manual of the ICAO Standard Atmosphere (extended to 80 kilometres)",
    "FAA Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25B)",
    "ISO 2533:1975 — Standard Atmosphere"
  ]
};
