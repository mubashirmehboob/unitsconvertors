import { CustomArticleData } from "./types";

export const milePerHourToSpeedOfLight: CustomArticleData = {
  fromUnitId: "mile-per-hour",
  toUnitId: "speed-of-light",
  seoTitle: "Mile per Hour to Speed of Light Converter (mph to c)",
  metaDescription: "Convert miles per hour to the speed of light (mph to c) with scientific precision. Vacuum speed of light constant, relativistic velocity ratios, and tables.",
  h1: "Mile per Hour to Speed of Light Converter",
  introduction: [
    "Converting miles per hour to fractions of the speed of light translates everyday terrestrial and orbital velocities into the universal speed limit governing modern relativistic physics. In standard vacuum mechanics, the speed of light in a vacuum ($c$) is standardized at exactly 299,792,458 meters per second, which converts to approximately 670,616,629.38 miles per hour.",
    "While terrestrial vehicles, commercial jetliners, and orbital rockets travel at tiny fractions of a percent of light speed, astrophysicists, relativistic particle physicists, and deep-space mission designers frequently convert high-speed velocity vectors into fractions of $c$ to compute Lorentz factors ($\\gamma$), relativistic momentum, and gravitational time dilation. Converting miles per hour into light speed fractions requires dividing the speed by 670,616,629.38. This guide provides exact formulas, step-by-step calculation examples, relativistic velocity tables, and real-world cosmic benchmarks."
  ],
  quickAnswer: {
    text: "To convert miles per hour to the speed of light (c), divide the velocity in mph by 670,616,629.38. For example, 67,061,663 mph equals approximately 0.1c (10% the speed of light).",
    formulaDisplay: "c = mph / 670,616,629.38",
    subtext: "Exact speed of light in vacuum (c) = 299,792,458 m/s ≈ 670,616,629.38 mph.\n1 mph ≈ 1.491165 × 10⁻⁹ c."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Hour (mph)",
    text: "The mile per hour (mph) is an imperial and US customary unit of speed indicating the distance in international statute miles (1,609.344 m) traveled in one hour (3,600 s). Widely used in US and UK transportation, 1 mph equals exactly 0.44704 m/s."
  },
  aboutTargetUnit: {
    title: "Understanding the Speed of Light (c)",
    text: "The speed of light ($c$, from Latin *celeritas*) is a universal physical constant representing the invariant speed at which massless gauge bosons (photons and gravitational waves) propagate through vacuum. It anchors Einstein's mass-energy equivalence equation, $E = mc^2$."
  },
  relationship: "One speed of light (c) equals approximately 670,616,629.38 miles per hour (670.6 million mph). Dividing any speed in miles per hour by 670,616,629.38 yields its dimensionless relativistic fraction of c.",
  relationshipTitle: "Mile per Hour to Speed of Light Milestones",
  relationshipItems: [
    { label: "Highway Vehicle (60 mph)", value: "8.9470 × 10⁻⁸ c" },
    { label: "Boeing 777 Cruise (560 mph)", value: "8.3505 × 10⁻⁷ c" },
    { label: "ISS Orbital Speed (17,150 mph)", value: "2.5574 × 10⁻⁵ c (~0.0026% c)" },
    { label: "Earth Orbit around Sun (67,000 mph)", value: "9.9908 × 10⁻⁵ c (~0.01% c)" },
    { label: "10% Speed of Light (0.1 c)", value: "67,061,663 mph" }
  ],
  formula: {
    text: "Divide the speed in miles per hour by 670,616,629.38 (or multiply by 1.491165 × 10⁻⁹) to find the speed as a fraction of c.",
    math: "c = \\frac{\\text{mph}}{670,616,629.384}",
    subtext: "To convert fractions of c back to miles per hour, multiply the value by 670,616,629.38."
  },
  formulaTitle: "Mile per Hour to Speed of Light Formula",
  practicalTip: {
    title: "Scientific Notation for Everyday Speeds",
    text: "Because ordinary vehicular speeds are tiny fractions of c, always express results in scientific notation (e.g., 65 mph = 9.69 × 10⁻⁸ c) to prevent calculation errors from multiple leading zeros."
  },
  expertNote: {
    title: "The Lorentz Factor (γ)",
    text: "Relativistic effects like length contraction and time dilation scale with the Lorentz factor: $\\gamma = 1 / \\sqrt{1 - (v/c)^2}$. At 17,500 mph (orbital speed), $\\gamma \\approx 1.0000000003$, producing measurable nanosecond GPS clock drifts."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Apollo 10 Moon Mission Re-entry (24,791 mph)",
        subtitle: "Convert the highest crewed vehicle speed in history (Apollo 10 at 24,791 mph) into a fraction of light speed.",
        steps: [
          "State starting velocity: 24,791 mph.",
          "Apply conversion constant: c = 24,791 / 670,616,629.38.",
          "Calculate: 24,791 / 670,616,629.38 = 0.0000369675.",
          "Result: Apollo 10 traveled at approximately 3.70 × 10⁻⁵ c (0.0037% the speed of light)."
        ]
      },
      {
        title: "Example 2: Relativistic Electron Beam (600,000,000 mph)",
        subtitle: "Convert a 600,000,000 mph synchrotron particle beam into fraction of c.",
        steps: [
          "State beam velocity: 600,000,000 mph.",
          "Apply formula: c = 600,000,000 / 670,616,629.38.",
          "Calculate: 600,000,000 / 670,616,629.38 = 0.8947.",
          "Result: The electron beam moves at approximately 0.8947 c (89.47% the speed of light)."
        ]
      }
    ]
  },
  table: {
    title: "Mile per Hour to Speed of Light Reference Table",
    headers: ["Speed (mph)", "Fraction of c", "Percentage of c", "Physical Benchmark"],
    rows: [
      { fromVal: "60 mph", toVal: "8.9470 × 10⁻⁸ c", extra: "0.00000895%", extra2: "Standard highway vehicle" },
      { fromVal: "500 mph", toVal: "7.4558 × 10⁻⁷ c", extra: "0.00007456%", extra2: "Commercial jetliner" },
      { fromVal: "17,500 mph", toVal: "2.6095 × 10⁻⁵ c", extra: "0.0026095%", extra2: "Space Shuttle orbital velocity" },
      { fromVal: "38,000 mph", toVal: "5.6664 × 10⁻⁵ c", extra: "0.0056664%", extra2: "Voyager 1 solar escape speed" },
      { fromVal: "67,000 mph", toVal: "9.9908 × 10⁻⁵ c", extra: "0.0099908%", extra2: "Earth orbital speed" },
      { fromVal: "1,000,000 mph", toVal: "0.001491 c", extra: "0.1491%", extra2: "Fast stellar solar wind" },
      { fromVal: "67,061,663 mph", toVal: "0.1000 c", extra: "10.00%", extra2: "Relativistic mechanics threshold" },
      { fromVal: "335,308,315 mph", toVal: "0.5000 c", extra: "50.00%", extra2: "Half the speed of light" },
      { fromVal: "670,616,629 mph", toVal: "1.0000 c", extra: "100.00%", extra2: "Speed of light in vacuum (c)" }
    ]
  },
  applications: {
    title: "Key Astrophysics & Spaceflight Applications",
    items: [
      {
        title: "Relativistic Astrophysics & Black Hole Jets",
        text: "Astronomers observing plasma jets ejected from supermassive black holes convert measured radial velocities from millions of mph into fractions of c to calculate relativistic beaming."
      },
      {
        title: "Global Positioning System (GPS) Time Synchronization",
        text: "GPS satellites traveling at approximately 8,700 mph experience time dilation predicted by special relativity (speed ratio $v/c$), requiring algorithmic clock adjustments of 7 microseconds per day."
      },
      {
        title: "Interstellar Mission Trajectory Modeling",
        text: "Advanced propulsion concepts (such as laser-propelled light sails) target probe cruise velocities between 0.1c and 0.2c (~67 to 134 million mph) for voyages to Alpha Centauri."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Using kilometers per hour instead of miles per hour (dividing by 1.079 billion instead of 670.6 million).",
      "Assuming Newtonian kinetic energy equations apply when speeds exceed 0.1c (67 million mph).",
      "Confusing the speed of light in vacuum with light traveling through refractive media like glass or water."
    ]
  },
  faqs: [
    {
      question: "How do you convert mph to the speed of light (c)?",
      answer: "Divide the speed in mph by 670,616,629.38 (or multiply by 1.491165 × 10⁻⁹)."
    },
    {
      question: "What is the speed of light in mph?",
      answer: "The speed of light in a vacuum is approximately 670,616,629.38 miles per hour (about 670.6 million mph)."
    },
    {
      question: "What fraction of light speed is 60 mph?",
      answer: "60 mph is approximately 8.947 × 10⁻⁸ c, which is roughly 0.00000895% the speed of light."
    },
    {
      question: "How fast is orbital speed in terms of light speed?",
      answer: "Low Earth orbital speed (17,500 mph) is approximately 2.61 × 10⁻⁵ c, or about 0.00261% of the speed of light."
    },
    {
      question: "What speed is 10% of light speed in mph?",
      answer: "10% of light speed (0.1c) is approximately 67,061,663 miles per hour (around 107.9 million km/h)."
    },
    {
      question: "How long does light take to travel 1 mile?",
      answer: "Light in a vacuum travels 1 mile in approximately 5.37 microseconds (5.37 × 10⁻⁶ seconds)."
    },
    {
      question: "Can an object with mass reach 670,616,629 mph?",
      answer: "No. Special relativity establishes that as a massive object approaches the speed of light, its relativistic energy approaches infinity, preventing it from ever reaching 1.0c."
    },
    {
      question: "How do you convert fractions of c back to mph?",
      answer: "Multiply the fraction of c by 670,616,629.38 (e.g., 0.25c × 670,616,629.38 = 167,654,157.35 mph)."
    }
  ],
  relatedList: [
    { label: "Kilometer per Hour to Speed of Light", from: "kilometer-per-hour", to: "speed-of-light" },
    { label: "Meter per Second to Speed of Light", from: "meter-per-second", to: "speed-of-light" },
    { label: "Mile per Hour to Mach", from: "mile-per-hour", to: "mach" }
  ],
  references: [
    "CODATA: Recommended Values of Fundamental Physical Constants (c = 299,792,458 m/s)",
    "NIST: Fundamental Physical Constants & Special Relativity"
  ]
};
