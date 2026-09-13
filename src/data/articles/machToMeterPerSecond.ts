import { CustomArticleData } from "./types";

export const machToMeterPerSecond: CustomArticleData = {
  fromUnitId: "mach",
  toUnitId: "meter-per-second",
  seoTitle: "Mach to Meter per Second Converter (M to m/s) - Speed of Sound",
  metaDescription: "Convert Mach numbers to meters per second (M to m/s) accurately. Master the 343 m/s acoustic factor, transonic flight regimes, shockwave physics, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/mach-to-meter-per-second",
  h1: "Mach to Meter per Second Converter",
  introduction: [
    "Converting Mach numbers to meters per second translates dimensionless aerodynamic flow velocity ratios into the foundational SI base-derived unit of speed required for fluid dynamics modeling, wind tunnel instrumentation, rocket propulsion analysis, and missile trajectory calculation. While aeronautical engineers and test pilots classify aircraft speeds into subsonic, transonic, supersonic, and hypersonic regimes using Mach numbers, numerical flight computers and Navier-Stokes simulations compute kinetic energy, aerodynamic drag, and shockwave propagation in meters per second.",
    "The Mach number (M) represents the ratio of an object's speed to the local acoustic sound speed in the ambient fluid medium ($M = v / a$). At standard international sea-level atmospheric temperature (20 °C or 293.15 K, 1 atm), sound propagates through dry air at approximately 343 meters per second. Therefore, Mach 1.0 corresponds to exactly 343 m/s under standard atmospheric conditions.",
    "To convert a Mach number to meters per second at standard sea-level temperature, multiply the Mach value by 343. For example, Mach 0.85 equals 291.55 m/s, Mach 2.0 equals 686.0 m/s, and hypersonic Mach 5.0 equals 1,715 m/s. This technical reference guide explains the mathematical relationship, altitude temperature variations, step-by-step calculation examples, and a comprehensive velocity lookup table."
  ],
  quickAnswer: {
    text: "To convert Mach to meters per second at standard sea level (20 °C, 1 atm), multiply the Mach number by 343 (or divide by 0.002915). For example, Mach 0.8 equals 274.4 m/s, and Mach 2.5 equals 857.5 m/s.",
    formulaDisplay: "m/s = Mach × 343",
    subtext: "Standard sea-level sound speed = 343 m/s | 1 m/s ≈ 0.00291545 Mach"
  },
  aboutSourceUnit: {
    title: "Understanding the Mach Number (M)",
    text: "The Mach number is a dimensionless quantity named in honor of Austrian physicist and philosopher Ernst Mach. Defined as the ratio of flow velocity to the local speed of sound, Mach numbers categorize aerodynamic compressibility: subsonic (M < 0.8), transonic (0.8 ≤ M ≤ 1.2), supersonic (1.2 < M < 5.0), and hypersonic (M ≥ 5.0)."
  },
  aboutTargetUnit: {
    title: "Understanding the Meter per Second (m/s)",
    text: "The meter per second (m/s) is the coherent SI derived unit of velocity and speed, defined as the distance of one meter traversed per second of time. It is the universal standard for physical equations, aerodynamic drag formulations, and scientific computations."
  },
  relationship: "Under standard sea-level atmospheric conditions (20 °C), Mach 1.0 equals exactly 343 meters per second. Conversely, one meter per second equals approximately 0.00291545 Mach. Multiplying any Mach value by 343 converts it into meters per second.",
  relationshipTitle: "Mach to Meter per Second Aeronautical Regimes",
  relationshipItems: [
    { label: "Mach 0.3 (Incompressibility limit)", value: "102.9 m/s" },
    { label: "Mach 0.85 (Commercial jetliner cruise)", value: "291.55 m/s" },
    { label: "Mach 1.0 (Sonic threshold / Sea level)", value: "343.0 m/s" },
    { label: "Mach 2.0 (Concorde supersonic cruise)", value: "686.0 m/s" },
    { label: "Mach 3.2 (SR-71 Blackbird maximum)", value: "1,097.6 m/s" },
    { label: "Mach 5.0 (Hypersonic boundary)", value: "1,715.0 m/s" }
  ],
  formula: {
    text: "Multiply the Mach number by the standard speed of sound (343 m/s) to obtain meters per second.",
    math: "\\text{m/s} = M \\times 343",
    subtext: "To convert meters per second back to Mach, divide the m/s value by 343 (or multiply by 0.00291545)."
  },
  formulaTitle: "Mach to Meter per Second Calculation Formula",
  practicalTip: {
    title: "Mental Estimation via One-Third Factor",
    text: "To estimate m/s quickly from Mach, multiply by 1,000 and divide by 3 (or multiply by 340). For example, Mach 0.6 × 1,000 ÷ 3 ≈ 200 m/s (very close to the precise 205.8 m/s); Mach 1.5 × 1,000 ÷ 3 = 500 m/s (actual is 514.5 m/s)."
  },
  expertNote: {
    title: "Acoustic Velocity and Ambient Temperature",
    text: "In an ideal gas such as air, the speed of sound is governed solely by absolute temperature: $a = \\sqrt{\\gamma R T}$, where $\\gamma = 1.4$ (specific heat ratio for diatomic gases), $R = 287.05 \\text{ J/(kg}\\cdot\\text{K)}$ (gas constant for air), and $T$ is temperature in Kelvin. At 15 °C (288.15 K, standard ISA sea level), $a \\approx 340.3$ m/s; at 20 °C (293.15 K), $a \\approx 343.2$ m/s; and at 36,000 feet in the stratosphere (-56.5 °C or 216.65 K), $a \\approx 295.1$ m/s."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Transonic Airliner Cruise (Mach 0.82)",
        subtitle: "A modern commercial transport cruises at Mach 0.82. Convert this velocity into meters per second at standard sea-level sound speed.",
        steps: [
          "State starting Mach number: M = 0.82.",
          "Apply formula: m/s = 0.82 × 343.",
          "Calculate: 0.82 × 343 = 281.26.",
          "Result: Mach 0.82 equals 281.26 meters per second."
        ]
      },
      {
        title: "Example 2: Supersonic Fighter Interceptor (Mach 2.2)",
        subtitle: "A military interceptor dashes at Mach 2.2 during an altitude interception run. Convert this velocity into meters per second.",
        steps: [
          "Identify Mach value: M = 2.2.",
          "Multiply by 343: 2.2 × 343 = 754.6.",
          "Result: Mach 2.2 equals 754.6 meters per second."
        ]
      },
      {
        title: "Example 3: Hypersonic Cruise Missile (Mach 6.5)",
        subtitle: "A scramjet-powered hypersonic demonstrator vehicle reaches Mach 6.5 in a flight test. Calculate the speed in meters per second.",
        steps: [
          "State starting value: M = 6.5.",
          "Multiply by 343: 6.5 × 343 = 2,229.5.",
          "Result: Mach 6.5 equals 2,229.5 meters per second."
        ]
      }
    ]
  },
  table: {
    title: "Mach to Meter per Second Reference Table (Standard Sea Level)",
    headers: ["Mach Number (M)", "Speed (m/s)", "Speed (km/h)", "Aerodynamic Flight Regime"],
    rows: [
      { fromVal: "0.1 M", toVal: "34.3 m/s", extra: "123.5 km/h", extra2: "Low-speed subsonic flow" },
      { fromVal: "0.3 M", toVal: "102.9 m/s", extra: "370.4 km/h", extra2: "Incompressible flow limit" },
      { fromVal: "0.5 M", toVal: "171.5 m/s", extra: "617.4 km/h", extra2: "Subsonic high-speed turboprop" },
      { fromVal: "0.7 M", toVal: "240.1 m/s", extra: "864.4 km/h", extra2: "Regional transport cruise" },
      { fromVal: "0.85 M", toVal: "291.6 m/s", extra: "1,049.6 km/h", extra2: "Long-haul passenger jet cruise" },
      { fromVal: "1.0 M", toVal: "343.0 m/s", extra: "1,234.8 km/h", extra2: "Sonic boundary (Mach 1.0)" },
      { fromVal: "1.2 M", toVal: "411.6 m/s", extra: "1,481.8 km/h", extra2: "Supersonic flow transition" },
      { fromVal: "1.5 M", toVal: "514.5 m/s", extra: "1,852.2 km/h", extra2: "Tactical fighter sustained supersonic" },
      { fromVal: "2.0 M", toVal: "686.0 m/s", extra: "2,469.6 km/h", extra2: "Mach 2 supersonic transport cruise" },
      { fromVal: "3.0 M", toVal: "1,029.0 m/s", extra: "3,704.4 km/h", extra2: "Titanium skin thermal limit regime" },
      { fromVal: "5.0 M", toVal: "1,715.0 m/s", extra: "6,174.0 km/h", extra2: "Hypersonic threshold (Mach 5.0)" },
      { fromVal: "10.0 M", toVal: "3,430.0 m/s", extra: "12,348.0 km/h", extra2: "Atmospheric re-entry glide velocity" }
    ]
  },
  applications: {
    title: "Aerospace & Scientific Applications",
    items: [
      {
        title: "Computational Fluid Dynamics (CFD)",
        text: "Aerodynamic software calculates shockwave angles, boundary layer turbulence, and total pressure loss by converting free-stream Mach numbers into m/s vector fields."
      },
      {
        title: "Supersonic Wind Tunnel Testing",
        text: "Tunnel operators set nozzle expansion contours to achieve target test section Mach numbers, converting laser Doppler velocimetry readings in m/s back to Mach."
      },
      {
        title: "Ammunition & Ordnance Ballistics",
        text: "Military ballisticians compare projectile muzzle velocities in m/s against local Mach thresholds to evaluate supersonic shock drag and acoustic signature."
      },
      {
        title: "Rocket Stage Separation Dynamics",
        text: "Launch vehicle mission control monitors vehicle velocity in m/s, translating flight speed into Mach to time stage separation outside high aerodynamic pressure zones."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming the speed of sound is a constant 343 m/s everywhere: The speed of sound depends on ambient temperature. At high altitude (e.g., -56.5 °C), sound travels at ~295 m/s, making Mach 1.0 slower in m/s than at sea level.",
      "Dividing instead of multiplying: To convert Mach to meters per second, multiply by 343. Dividing by 343 is only done when converting m/s to Mach.",
      "Ignoring air composition and humidity: While temperature dominates, extreme humidity or non-air gas mixtures (e.g., pure carbon dioxide in Mars entry) alter the speed of sound.",
      "Confusing Mach with Indicated Airspeed: Mach represents true aerodynamic flow speed relative to the local speed of sound, not indicated dynamic pressure."
    ]
  },
  faqs: [
    {
      question: "How do you convert Mach to meters per second?",
      answer: "Multiply the Mach number by the speed of sound in meters per second (343 m/s at standard sea-level temperature): m/s = Mach × 343."
    },
    {
      question: "What is Mach 1 in meters per second?",
      answer: "At standard sea-level conditions (20 °C, 1 atm), Mach 1 is exactly 343 meters per second (or 340.3 m/s at 15 °C ISA standard)."
    },
    {
      question: "What is Mach 2 in meters per second?",
      answer: "Mach 2 at standard sea level equals 2 × 343 = 686 meters per second."
    },
    {
      question: "What is Mach 0.8 in meters per second?",
      answer: "Mach 0.8 multiplied by 343 equals 274.4 meters per second."
    },
    {
      question: "What is Mach 5 (hypersonic) in meters per second?",
      answer: "Mach 5 multiplied by 343 equals 1,715 meters per second (over 1.7 km per second)."
    },
    {
      question: "Why does the m/s equivalent of Mach change with altitude?",
      answer: "Because temperature decreases with altitude through the troposphere, the speed of sound drops from 343 m/s at sea level to approximately 295 m/s at cruising altitude (36,000 feet)."
    },
    {
      question: "How do you convert meters per second back to Mach?",
      answer: "Divide the speed in meters per second by 343: Mach = m/s ÷ 343."
    },
    {
      question: "What is the speed of sound in dry air formula?",
      answer: "The speed of sound in air is calculated as a = √(γ × R × T), where γ = 1.4, R = 287.05 J/(kg·K), and T is the absolute temperature in Kelvin."
    },
    {
      question: "What speed is Mach 3 in m/s?",
      answer: "Mach 3 at standard sea level equals 3 × 343 = 1,029 meters per second."
    },
    {
      question: "Is Mach 1 the same speed in water as in air?",
      answer: "No. Sound travels at approximately 1,480 m/s in fresh water and 1,530 m/s in seawater—more than 4 times faster than in air."
    }
  ],
  relatedList: [
    { label: "Mach to Kilometer per Hour", from: "mach", to: "kilometer-per-hour" },
    { label: "Mach to Mile per Hour", from: "mach", to: "mile-per-hour" },
    { label: "Mach to Knot", from: "mach", to: "knot" },
    { label: "Mach to Foot per Second", from: "mach", to: "foot-per-second" },
    { label: "Meter per Second to Mach", from: "meter-per-second", to: "mach" }
  ],
  references: [
    "ISO 2533:1975 — Standard Atmosphere",
    "Anderson, J.D. (2017) — Fundamentals of Aerodynamics (6th ed., McGraw-Hill)",
    "BIPM — The International System of Units (SI): Coherent Derived Units"
  ]
};
