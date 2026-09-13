import { CustomArticleData } from "./types";

export const machToSpeedOfLight: CustomArticleData = {
  fromUnitId: "mach",
  toUnitId: "speed-of-light",
  seoTitle: "Mach to Speed of Light Converter (M to c) - Speed of Sound to c",
  metaDescription: "Convert Mach numbers to fractions of the speed of light (M to c) accurately. Compare acoustic vs electromagnetic speeds, lightning delay physics, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/mach-to-speed-of-light",
  h1: "Mach to Speed of Light Converter",
  introduction: [
    "Converting Mach numbers to fractions of the speed of light compares acoustic pressure wave propagation through molecular fluids with the universal electromagnetic speed limit of the cosmos. While high-speed aeronautical aircraft, hypersonic glide vehicles, and rocket fairings are measured against the local speed of sound in Mach numbers, astrophysical jets, relativistic particles in accelerators, and interplanetary photons operate as fractions of the speed of light.",
    "The Mach number (M) is defined as the velocity of an object divided by the local acoustic speed in the surrounding air. At standard international sea-level conditions (20 °C, 1 atm), sound propagates through dry air at approximately 343 meters per second. The speed of light in vacuum ($c$) is defined by international standard BIPM as exactly 299,792,458 meters per second. Dividing 343 by 299,792,458 reveals that Mach 1.0 represents approximately $1.144125 \\times 10^{-6}$ of the speed of light (roughly 1.14 millionths of $c$).",
    "To convert a Mach number to fractions of the speed of light, multiply the Mach value by approximately $1.144125 \\times 10^{-6}$ (or divide by 874,030.5). For example, hypersonic Mach 10 equals approximately $1.144 \\times 10^{-5}\ c$, while the speed of light itself is approximately 874,030 times faster than the speed of sound. This technical guide examines the acoustic-electromagnetic ratio, lightning flash-to-bang physics, relativistic consequences, and an extensive comparison reference table."
  ],
  quickAnswer: {
    text: "To convert Mach to fractions of the speed of light (c), divide the Mach number by 874,030.5 (or multiply by 1.144125 × 10⁻⁶). For example, Mach 1.0 equals approximately 1.144 × 10⁻⁶ c, and Mach 10 equals 1.144 × 10⁻⁵ c.",
    formulaDisplay: "c = Mach ÷ 874,030.5",
    subtext: "1 speed of light (c) = 299,792,458 m/s ≈ 874,030.5 Mach | 1 Mach ≈ 1.144125 × 10⁻⁶ c"
  },
  aboutSourceUnit: {
    title: "Understanding the Mach Number (M)",
    text: "The Mach number is a dimensionless ratio comparing the flow velocity of an object to the local acoustic sound speed in the ambient fluid. Because acoustic waves require physical molecular collisions to propagate, sound travels at a finite, medium-dependent rate (343 m/s in air at 20 °C)."
  },
  aboutTargetUnit: {
    title: "Understanding the Speed of Light (c)",
    text: "Denoted by the symbol 'c' (from Latin celeritas, meaning swiftness), the speed of light in vacuum is a fundamental physical constant defined as exactly 299,792,458 m/s. It represents the upper speed limit for matter, energy, and information transfer in the universe."
  },
  relationship: "One speed of light equals approximately 874,030.5 Mach at standard sea-level atmospheric conditions. Conversely, Mach 1.0 equals approximately 1.144125 × 10⁻⁶ c (1.144 millionths of c). Light travels nearly 874,000 times faster than sound in air.",
  relationshipTitle: "Mach to Speed of Light Velocity Milestones",
  relationshipItems: [
    { label: "Mach 1.0 (Speed of Sound at sea level)", value: "1.144 × 10⁻⁶ c" },
    { label: "Mach 3.0 (SR-71 Blackbird cruise)", value: "3.432 × 10⁻⁶ c" },
    { label: "Mach 10.0 (Hypersonic research vehicle)", value: "1.144 × 10⁻⁵ c" },
    { label: "Mach 25.0 (Spacecraft atmospheric re-entry)", value: "2.860 × 10⁻⁵ c" },
    { label: "Mach 100.0 (Fast meteor entry velocity)", value: "1.144 × 10⁻⁴ c" },
    { label: "Mach 874,030.5 (Speed of Light)", value: "1.000 c" }
  ],
  formula: {
    text: "Multiply the Mach number by 343 and divide by 299,792,458 (or multiply by 1.144125 × 10⁻⁶) to express velocity in fractions of c.",
    math: "c = M \\times \\frac{343}{299,792,458} \\approx M \\times 1.144125 \\times 10^{-6}",
    subtext: "To convert fractions of c back to Mach numbers, multiply the c value by 874,030.5."
  },
  formulaTitle: "Mach to Speed of Light Calculation Formula",
  practicalTip: {
    title: "One-Millionth Mental Rule of Thumb",
    text: "A quick mental rule: Mach 1 is approximately 1.14 millionths of the speed of light. To estimate c from Mach, multiply the Mach value by 1.14 and append $10^{-6}$. For example, Mach 5 ≈ 5 × 1.14 × 10⁻⁶ = 5.7 × 10⁻⁶ c."
  },
  expertNote: {
    title: "Thunder and Lightning Delay Physics",
    text: "Because light travels at approximately 300,000 km/s while sound travels at only 0.343 km/s (a ratio of roughly 874,000 to 1), the visual flash of lightning reaches an observer virtually instantaneously, while the sonic thunder rumble travels at Mach 1.0, taking approximately 2.9 seconds per kilometer (or about 4.7 seconds per mile)."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Sonic Threshold (Mach 1.0)",
        subtitle: "Convert Mach 1.0 at standard sea-level temperature into a fraction of the speed of light.",
        steps: [
          "State starting value: M = 1.0.",
          "Apply conversion formula: c = 1.0 × (343 / 299,792,458).",
          "Calculate: 343 ÷ 299,792,458 ≈ 1.144125 × 10⁻⁶.",
          "Result: Mach 1.0 equals approximately 1.144 × 10⁻⁶ c (0.000001144 c)."
        ]
      },
      {
        title: "Example 2: Hypersonic Scramjet (Mach 7.0)",
        subtitle: "An experimental scramjet vehicle reaches Mach 7.0. Express this velocity as a fraction of the speed of light.",
        steps: [
          "Identify Mach value: M = 7.0.",
          "Multiply by factor: 7.0 × (1.144125 × 10⁻⁶).",
          "Calculate: 7.0 × 1.144125 × 10⁻⁶ ≈ 8.0089 × 10⁻⁶.",
          "Result: Mach 7.0 corresponds to approximately 8.01 × 10⁻⁶ c."
        ]
      },
      {
        title: "Example 3: Space Shuttle Atmospheric Re-Entry (Mach 25)",
        subtitle: "The Space Shuttle orbiter enters the upper atmosphere at approximately Mach 25. Convert this re-entry velocity to c.",
        steps: [
          "State starting value: M = 25.",
          "Multiply by factor: 25 × 1.144125 × 10⁻⁶ ≈ 2.8603 × 10⁻⁵.",
          "Result: Mach 25 corresponds to approximately 2.86 × 10⁻⁵ c (0.00286% of the speed of light)."
        ]
      }
    ]
  },
  table: {
    title: "Mach to Speed of Light Reference Table",
    headers: ["Mach Number (M)", "Speed of Light (c)", "Speed (m/s)", "Physical & Aerospace Milestone"],
    rows: [
      { fromVal: "1 M", toVal: "1.144 × 10⁻⁶ c", extra: "343 m/s", extra2: "Speed of sound at sea level (20 °C)" },
      { fromVal: "2 M", toVal: "2.288 × 10⁻⁶ c", extra: "686 m/s", extra2: "Concorde supersonic cruising speed" },
      { fromVal: "3 M", toVal: "3.432 × 10⁻⁶ c", extra: "1,029 m/s", extra2: "SR-71 high-altitude dash" },
      { fromVal: "5 M", toVal: "5.721 × 10⁻⁶ c", extra: "1,715 m/s", extra2: "Hypersonic regime threshold" },
      { fromVal: "10 M", toVal: "1.144 × 10⁻⁵ c", extra: "3,430 m/s", extra2: "Hypersonic boost-glide vehicle" },
      { fromVal: "20 M", toVal: "2.288 × 10⁻⁵ c", extra: "6,860 m/s", extra2: "Intercontinental ballistic missile terminal" },
      { fromVal: "25 M", toVal: "2.860 × 10⁻⁵ c", extra: "8,575 m/s", extra2: "Orbital re-entry velocity" },
      { fromVal: "50 M", toVal: "5.721 × 10⁻⁵ c", extra: "17,150 m/s", extra2: "Planetary entry probe speed" },
      { fromVal: "100 M", toVal: "1.144 × 10⁻⁴ c", extra: "34,300 m/s", extra2: "Hypervelocity atmospheric meteor" },
      { fromVal: "1,000 M", toVal: "1.144 × 10⁻³ c", extra: "343,000 m/s", extra2: "Fast coronal mass ejection front" },
      { fromVal: "10,000 M", toVal: "1.144 × 10⁻² c", extra: "3,430,000 m/s", extra2: "1.14% of the speed of light" },
      { fromVal: "874,031 M", toVal: "1.000 c", extra: "299,792,458 m/s", extra2: "Universal speed of light in vacuum" }
    ]
  },
  applications: {
    title: "Astrophysics & Scientific Applications",
    items: [
      {
        title: "Cherenkov Radiation Analysis",
        text: "In dielectric media like water, charged particles can exceed the local phase speed of light ($c/n$), creating an optical shockwave analogous to a sonic boom (Mach cone)."
      },
      {
        title: "Astrophysical Relativistic Jets",
        text: "Astronomers observe plasma jets ejected from supermassive black holes traveling at 0.99 c, contrasting them with laboratory acoustic Mach shocks."
      },
      {
        title: "Planetary Defense & Meteor Entry Dynamics",
        text: "Impact scientists model incoming meteors traveling at Mach 40 to Mach 100, comparing plasma trail emission against speed of light laser ranging."
      },
      {
        title: "Physics Pedagogy & Cosmic Scales",
        text: "Educators juxtapose sound speed in air against light speed in vacuum to demonstrate the difference between mechanical pressure waves and electromagnetic waves."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming sound can travel in a vacuum: Sound is a mechanical pressure wave requiring a fluid or solid medium. Light is an electromagnetic wave that propagates unimpeded through vacuum.",
      "Dividing by 343 instead of light speed: Converting Mach to c requires dividing by roughly 874,031 (or multiplying by 1.144 × 10⁻⁶). Dividing by 343 does not give c.",
      "Ignoring the medium when comparing speeds: The speed of sound varies dramatically across media (343 m/s in air, 1,500 m/s in water, 5,000 m/s in steel), while c is a universal constant in vacuum.",
      "Confusing phase velocity of light in materials: While light travels at c in vacuum, its phase speed decreases in matter ($v = c/n$), but it remains hundreds of thousands of times faster than sound."
    ]
  },
  faqs: [
    {
      question: "How do you convert Mach to the speed of light?",
      answer: "Divide the Mach number by 874,030.5 (or multiply by 1.144125 × 10⁻⁶): c = Mach ÷ 874,030.5."
    },
    {
      question: "How many times faster is the speed of light than the speed of sound?",
      answer: "The speed of light in vacuum is approximately 874,030.5 times faster than the speed of sound in air at standard sea-level temperature (20 °C)."
    },
    {
      question: "How many Mach is the speed of light?",
      answer: "The speed of light in vacuum corresponds to approximately 874,030.5 Mach at standard sea-level conditions."
    },
    {
      question: "What fraction of the speed of light is Mach 1?",
      answer: "Mach 1 equals approximately 1.144 × 10⁻⁶ c (about 1.14 millionths of the speed of light)."
    },
    {
      question: "What fraction of the speed of light is Mach 10?",
      answer: "Mach 10 equals approximately 1.144 × 10⁻⁵ c (about 0.00114% of the speed of light)."
    },
    {
      question: "What fraction of the speed of light is Mach 25 (orbital re-entry)?",
      answer: "Mach 25 equals approximately 2.86 × 10⁻⁵ c (about 0.00286% of the speed of light)."
    },
    {
      question: "Can an object travel faster than the speed of light in air?",
      answer: "Nothing can travel faster than c in vacuum. However, in dense media, high-energy particles can exceed the local phase velocity of light (c/n), producing blue Cherenkov radiation."
    },
    {
      question: "How do you convert fractions of c back to Mach?",
      answer: "Multiply the value in c by 874,030.5: Mach = c × 874,030.5."
    },
    {
      question: "Why do we see lightning before hearing thunder?",
      answer: "Because light travels at nearly 300,000,000 m/s while sound travels at only 343 m/s, the light reaches you almost instantly, while sound takes about 3 seconds to travel 1 kilometer."
    },
    {
      question: "What is 1% of the speed of light in Mach?",
      answer: "1% of the speed of light (0.01 c) equals approximately 8,740.3 Mach (~2,998 km/s)."
    }
  ],
  relatedList: [
    { label: "Mach to Meter per Second", from: "mach", to: "meter-per-second" },
    { label: "Mach to Kilometer per Hour", from: "mach", to: "kilometer-per-hour" },
    { label: "Mach to Mile per Hour", from: "mach", to: "mile-per-hour" },
    { label: "Mach to Knot", from: "mach", to: "knot" },
    { label: "Speed of Light to Mach", from: "speed-of-light", to: "mach" }
  ],
  references: [
    "BIPM — Resolution 1 of the 17th CGPM: Definition of the Metre",
    "CODATA Recommended Values of the Fundamental Physical Constants",
    "Anderson, J.D. (2017) — Fundamentals of Aerodynamics (McGraw-Hill)"
  ]
};
