import { CustomArticleData } from "./types";

export const knotToSpeedOfLight: CustomArticleData = {
  fromUnitId: "knot",
  toUnitId: "speed-of-light",
  seoTitle: "Knot to Speed of Light Converter (kn to c) - UnitsConvertors",
  metaDescription: "Convert knots to the speed of light (kn to c) accurately. Understand relativistic velocities, astrophysical scales, exact fractions, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/knot-to-speed-of-light",
  h1: "Knot to Speed of Light Converter",
  introduction: [
    "Converting knots to the speed of light bridges classical terrestrial navigation with modern relativistic physics, astrophysics, and aerospace velocity scales. While sea-going cargo vessels, naval destroyers, and commercial jetliners travel at velocities expressed in knots, cosmic phenomena, electromagnetic radiation, and interstellar mission designs are gauged as fractions of the speed of light.",
    "A knot (kn) is defined internationally as one nautical mile per hour, corresponding to exactly 1,852 meters per 3,600 seconds (approximately 0.514444 m/s). The speed of light in a vacuum, denoted by the universal constant $c$, is defined by the BIPM 17th General Conference on Weights and Measures as exactly 299,792,458 meters per second. Because the speed of light is astronomically fast compared to earthly speeds, one knot represents roughly $1.716 \\times 10^{-9}$ of the speed of light (about 1.7 billionths of $c$).",
    "To convert knots to fractions of the speed of light, multiply the speed in knots by approximately $1.7160015 \\times 10^{-9}$ (or divide by 582,753,246). For example, 1,000 knots equals approximately $1.716 \\times 10^{-6}\ c$. This technical reference guide explains the mathematical bridge between nautical speed and universal cosmic speed limits, provides worked scientific examples, and includes an extensive velocity reference table."
  ],
  quickAnswer: {
    text: "To convert knots to fractions of the speed of light (c), divide the speed in knots by 582,753,246 (or multiply by 1.7160015 × 10⁻⁹). For example, 10,000 knots equals approximately 1.716 × 10⁻⁵ c.",
    formulaDisplay: "c = kn ÷ 582,753,246",
    subtext: "1 speed of light (c) = 299,792,458 m/s = 582,753,246 kn | 1 knot ≈ 1.7160015 × 10⁻⁹ c"
  },
  aboutSourceUnit: {
    title: "Understanding the Knot (kn)",
    text: "The knot (kn or kt) is a maritime and aeronautical unit of speed equal to one international nautical mile per hour (1.852 km/h). Adopted globally in navigation charters, knots link angular nautical distances on Earth's ellipsoidal surface to elapsed time."
  },
  aboutTargetUnit: {
    title: "Understanding the Speed of Light (c)",
    text: "Denoted by the symbol 'c' (from Latin celeritas, meaning swiftness), the speed of light in vacuum is a fundamental physical constant defined as exactly 299,792,458 m/s. It represents the upper speed limit for matter, energy, and information in the universe according to Einstein's Special Relativity."
  },
  relationship: "One speed of light equals approximately 582,753,246 knots. Conversely, one knot equals approximately 1.7160015 × 10⁻⁹ c. Dividing any velocity in knots by 582,753,246 converts it into a dimensionless fraction of the speed of light.",
  relationshipTitle: "Knot to Speed of Light Cosmic Benchmarks",
  relationshipItems: [
    { label: "1 Knot (Maritime crawl)", value: "1.716 × 10⁻⁹ c" },
    { label: "500 Knots (Airliner cruise)", value: "8.580 × 10⁻⁷ c" },
    { label: "15,000 Knots (Low Earth Orbit satellite)", value: "2.574 × 10⁻⁵ c" },
    { label: "30,000 Knots (Apollo translunar injection)", value: "5.148 × 10⁻⁵ c" },
    { label: "582,753,246 Knots (Speed of Light)", value: "1.000 c" }
  ],
  formula: {
    text: "Multiply the velocity in knots by the exact fraction (1,852 / (3,600 × 299,792,458)) to express speed in units of c.",
    math: "c = \\text{kn} \\times \\frac{1,852}{3,600 \\times 299,792,458} \\approx \\text{kn} \\times 1.7160015 \\times 10^{-9}",
    subtext: "To convert fractions of c back to knots, multiply the c value by 582,753,246."
  },
  formulaTitle: "Knot to Speed of Light Calculation Formula",
  practicalTip: {
    title: "Scientific Notation Scaling",
    text: "Because human vehicle speeds are minuscule compared to the speed of light, results will always be in negative scientific notation. Remember that 1 knot ≈ 1.72 billionths of c ($1.72 \\times 10^{-9}\ c$)."
  },
  expertNote: {
    title: "Relativistic Time Dilation at Terrestrial Speeds",
    text: "According to Einstein's Lorentz factor $\\gamma = 1 / \\sqrt{1 - (v/c)^2}$, a jetliner traveling at 500 knots ($v/c \\approx 8.58 \\times 10^{-7}$) experiences a time dilation factor of $\\gamma \\approx 1 + 3.68 \\times 10^{-13}$. While this difference is imperceptible to human passengers (about 1.3 microseconds per year), atomic clocks on satellites must routinely account for it."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Commercial Jetliner at 500 Knots",
        subtitle: "Convert a passenger airliner cruising at 500 knots into a fraction of the speed of light.",
        steps: [
          "State starting velocity: 500 kn.",
          "Apply formula: c = 500 ÷ 582,753,246.",
          "Calculate: 500 ÷ 582,753,246 ≈ 8.57996 × 10⁻⁷.",
          "Result: 500 knots equals approximately 8.58 × 10⁻⁷ c (0.000000858 c)."
        ]
      },
      {
        title: "Example 2: International Space Station Orbit",
        subtitle: "The ISS travels at approximately 14,900 knots in low Earth orbit. Express this orbital speed as a fraction of c.",
        steps: [
          "Identify speed: 14,900 kn.",
          "Multiply by factor: 14,900 × (1.7160015 × 10⁻⁹).",
          "Calculate: 14,900 × 1.7160015 × 10⁻⁹ ≈ 2.5568 × 10⁻⁵.",
          "Result: 14,900 knots corresponds to approximately 2.56 × 10⁻⁵ c (0.00256% of light speed)."
        ]
      },
      {
        title: "Example 3: Solar System Escape Velocity",
        subtitle: "The Voyager 1 space probe departs the solar system at approximately 33,000 knots. Convert this velocity into c.",
        steps: [
          "State starting value: 33,000 kn.",
          "Divide by 582,753,246: 33,000 ÷ 582,753,246 ≈ 5.6628 × 10⁻⁵.",
          "Result: 33,000 knots corresponds to approximately 5.66 × 10⁻⁵ c."
        ]
      }
    ]
  },
  table: {
    title: "Knot to Speed of Light Reference Table",
    headers: ["Speed (kn)", "Speed of Light (c)", "Speed (m/s)", "Physical & Aerospace Context"],
    rows: [
      { fromVal: "1 kn", toVal: "1.716 × 10⁻⁹ c", extra: "0.5144 m/s", extra2: "Slow maritime drift" },
      { fromVal: "10 kn", toVal: "1.716 × 10⁻⁸ c", extra: "5.1444 m/s", extra2: "Sailboat cruising speed" },
      { fromVal: "100 kn", toVal: "1.716 × 10⁻⁷ c", extra: "51.4444 m/s", extra2: "Turboprop regional aircraft" },
      { fromVal: "500 kn", toVal: "8.580 × 10⁻⁷ c", extra: "257.2222 m/s", extra2: "Commercial passenger airliner" },
      { fromVal: "1,000 kn", toVal: "1.716 × 10⁻⁶ c", extra: "514.4444 m/s", extra2: "Supersonic military jet" },
      { fromVal: "2,000 kn", toVal: "3.432 × 10⁻⁶ c", extra: "1,028.8889 m/s", extra2: "Mach 3 reconnaissance aircraft" },
      { fromVal: "5,000 kn", toVal: "8.580 × 10⁻⁶ c", extra: "2,572.2222 m/s", extra2: "Hypersonic glide vehicle" },
      { fromVal: "15,000 kn", toVal: "2.574 × 10⁻⁵ c", extra: "7,716.6667 m/s", extra2: "Low Earth Orbit (LEO) velocity" },
      { fromVal: "30,000 kn", toVal: "5.148 × 10⁻⁵ c", extra: "15,433.3333 m/s", extra2: "Apollo moon mission injection" },
      { fromVal: "100,000 kn", toVal: "1.716 × 10⁻⁴ c", extra: "51,444.4444 m/s", extra2: "Fast deep-space probe trajectory" },
      { fromVal: "1,000,000 kn", toVal: "1.716 × 10⁻³ c", extra: "514,444.4444 m/s", extra2: "Solar wind proton stream" },
      { fromVal: "582,753,246 kn", toVal: "1.000 c", extra: "299,792,458 m/s", extra2: "Universal speed of light in vacuum" }
    ]
  },
  applications: {
    title: "Scientific & Aerospace Applications",
    items: [
      {
        title: "Astrophysical Velocity Comparison",
        text: "Astronomers and science communicators convert spacecraft velocities from nautical miles per hour into fractions of c to illustrate the vastness of interstellar distances."
      },
      {
        title: "Relativistic Satellite Navigation Offsets",
        text: "Navigation constellations (GPS/Galileo) traveling at thousands of knots compute relativistic Lorentz corrections based on their fraction of the speed of light to prevent clock drift."
      },
      {
        title: "Interplanetary Mission Trajectory Design",
        text: "Mission planners design gravity-assist slingshots converting vehicle velocities into fractions of light speed to calculate photon communication transit times back to mission control."
      },
      {
        title: "Cosmic Ray & Particle Physics Education",
        text: "Educators juxtapose everyday vessel knots against subatomic particle velocities in cyclotrons and synchrotrons operating at 0.9999 c."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing speed of light in air vs vacuum: The universal constant c refers to vacuum. In air or water, light travels slightly slower (c/n), where n is the refractive index.",
      "Dividing by 300,000,000 directly: While 300,000,000 m/s is a standard approximation for c, the true defined value is exactly 299,792,458 m/s.",
      "Multiplying instead of dividing: Converting knots to fractions of c requires dividing by roughly 582.75 million. Multiplying would produce an impossible figure exceeding light speed.",
      "Overlooking non-relativistic kinematics: At speeds below 0.1 c (which includes all human aircraft and spacecraft), classical Newtonian kinetic equations apply with negligible relativistic error."
    ]
  },
  faqs: [
    {
      question: "How do you convert knots to the speed of light?",
      answer: "Divide the velocity in knots by 582,753,246 (or multiply by 1.7160015 × 10⁻⁹): c = kn ÷ 582,753,246."
    },
    {
      question: "How many knots is the speed of light?",
      answer: "The speed of light in vacuum equals exactly 299,792,458 m/s, which corresponds to approximately 582,753,246 knots."
    },
    {
      question: "What fraction of the speed of light is 1 knot?",
      answer: "1 knot equals approximately 1.716 × 10⁻⁹ c (about 1.72 billionths of the speed of light)."
    },
    {
      question: "What fraction of light speed is a 500-knot airliner?",
      answer: "A 500-knot passenger airliner travels at approximately 8.58 × 10⁻⁷ c (about 0.0000858% of the speed of light)."
    },
    {
      question: "What fraction of light speed is the International Space Station?",
      answer: "At an orbital speed of roughly 14,900 knots (~7.66 km/s), the ISS travels at approximately 2.56 × 10⁻⁵ c (around 0.00256% of light speed)."
    },
    {
      question: "Can any vessel with mass travel at 1.0 c?",
      answer: "No. According to Einstein's Special Relativity, accelerating an object with rest mass to the speed of light would require infinite energy."
    },
    {
      question: "Why is the speed of light an exact integer?",
      answer: "In 1983, the General Conference on Weights and Measures defined the meter based on the distance light travels in vacuum in 1/299,792,458 of a second, fixing c as an exact constant."
    },
    {
      question: "How do you convert fractions of c back to knots?",
      answer: "Multiply the value in c by 582,753,246: kn = c × 582,753,246."
    },
    {
      question: "How many knots is 0.01 c (1% of the speed of light)?",
      answer: "1% of the speed of light (0.01 c) equals approximately 5,827,532 knots (~2,997.9 km/s)."
    },
    {
      question: "Why is the speed of light denoted by the letter c?",
      answer: "The letter 'c' comes from the Latin word 'celeritas', meaning speed or swiftness."
    }
  ],
  relatedList: [
    { label: "Knot to Mach", from: "knot", to: "mach" },
    { label: "Knot to Meter per Second", from: "knot", to: "meter-per-second" },
    { label: "Knot to Kilometer per Hour", from: "knot", to: "kilometer-per-hour" },
    { label: "Mach to Speed of Light", from: "mach", to: "speed-of-light" },
    { label: "Meter per Second to Speed of Light", from: "meter-per-second", to: "speed-of-light" }
  ],
  references: [
    "BIPM — Resolution 1 of the 17th CGPM (1983): Definition of the Metre",
    "CODATA Recommended Values of the Fundamental Physical Constants",
    "Einstein, A. (1905) — On the Electrodynamics of Moving Bodies (Annalen der Physik)"
  ]
};
