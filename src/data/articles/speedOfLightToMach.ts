import { CustomArticleData } from "./types";

export const speedOfLightToMach: CustomArticleData = {
  fromUnitId: "speed-of-light",
  toUnitId: "mach",
  seoTitle: "Speed of Light to Mach (c to M)",
  metaDescription: "Convert the speed of light to Mach (c to M). Learn the exact conversion factor (approx. Mach 874,030.49), speed of sound physics, aerodynamic formulas, and tables.",
  h1: "Speed of Light to Mach Converter",
  introduction: [
    "Converting the speed of light in vacuum to the Mach number compares the two most celebrated speed thresholds in physics and aeronautics: the cosmic speed limit of the universe (<em>c</em>) and the acoustic sound barrier (Mach 1). While Mach numbers describe compressible fluid flow and sonic shockwaves in planetary atmospheres, the speed of light represents the ultimate speed limit of space-time itself.",
    "Because the speed of sound in dry air at 20 °C (68 °F) is 343 meters per second, the speed of light (299,792,458 m/s) is equal to approximately Mach 874,030.49. In standard international atmospheric conditions (15 °C / 59 °F at sea level, where sound travels at 340.29 m/s), light corresponds to roughly Mach 881,000. This guide explains the acoustic and relativistic mechanics, conversion formulas, atmospheric variations, and conversion tables."
  ],
  quickAnswer: {
    text: "One speed of light (1 c) is equal to approximately Mach 874,030.49 (under standard room conditions of 20 °C in air, where the speed of sound is 343 m/s). To convert from speed of light to Mach, multiply the c value by 874,030.49.",
    formulaDisplay: "Mach = c × 874,030.49",
    subtext: "Calculated by dividing 299,792,458 m/s by the standard speed of sound in air at 20 °C (343 m/s)."
  },
  aboutSourceUnit: {
    title: "Understanding the Speed of Light (c)",
    text: "The speed of light in vacuum (c) is a universal physical constant equal to exactly 299,792,458 meters per second. In Einstein's special theory of relativity, it is the invariant velocity at which photons, gluons, and gravitational waves travel."
  },
  aboutTargetUnit: {
    title: "Understanding the Mach Number (M)",
    text: "The Mach number is a dimensionless quantity named after Austrian physicist Ernst Mach. It represents the ratio of the speed of an object moving through a fluid to the local speed of sound in that same fluid (M = v / a). Because the speed of sound depends on temperature and gas composition, Mach is a medium-dependent relative metric."
  },
  relationship: "Under standard ambient atmospheric conditions (dry air at 20 °C, 1 atm, sound speed a = 343 m/s), dividing light speed (299,792,458 m/s) by sound speed yields M ≈ 874,030.49. Light travels over 874,000 times faster than sound.",
  relationshipTitle: "Acoustic vs Electromagnetic Comparison",
  relationshipItems: [
    { label: "1.0 c", value: "Mach 874,030.49 (Vacuum light speed)" },
    { label: "0.1 c", value: "Mach 87,403.05 (Relativistic flight)" },
    { label: "0.01 c", value: "Mach 8,740.30 (Fast planetary escape)" },
    { label: "0.001 c", value: "Mach 874.03 (Hypervelocity space debris)" },
    { label: "0.0001 c", value: "Mach 87.40 (Extreme atmospheric re-entry)" }
  ],
  formula: {
    text: "Multiply the velocity in speed of light units (c) by 874,030.49 to find the Mach number in standard dry air at 20 °C (343 m/s).",
    math: "Mach = c × 874,030.49",
    subtext: "To convert Mach back into speed of light (c), divide by 874,030.49 (or multiply by 343 / 299,792,458)."
  },
  formulaTitle: "Speed of Light to Mach Formula",
  practicalTip: {
    title: "Thunder and Lightning Observation",
    text: "Because light travels at roughly Mach 874,000 while thunder travels at Mach 1, lightning is seen almost instantly, while thunder takes approximately 3 seconds to travel 1 kilometer (about 5 seconds per mile)."
  },
  expertNote: {
    title: "Medium Dependence of Mach",
    text: "Unlike c, which is invariant in vacuum, Mach 1 changes with ambient temperature. In the freezing upper stratosphere (-56.5 °C), sound drops to 295 m/s, making light equivalent to roughly Mach 1,016,000 in that specific air layer."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: 0.1 c (Sub-Relativistic Interstellar Velocity)",
        subtitle: "Convert 10% of light speed into a Mach number in air at 20 °C.",
        steps: [
          "Identify velocity: 0.1 c.",
          "Apply formula: Mach = 0.1 × 874,030.49.",
          "Calculate: 0.1 × 874,030.49 = 87,403.05.",
          "Result: 0.1 c is approximately Mach 87,403."
        ]
      },
      {
        title: "Example 2: 0.01 c (Fast Nuclear Pulse Probe)",
        subtitle: "Convert 1% of the speed of light into Mach.",
        steps: [
          "Identify velocity: 0.01 c.",
          "Multiply: 0.01 × 874,030.49 = 8,740.30.",
          "Result: 0.01 c equals approximately Mach 8,740 (more than 300 times faster than orbital re-entry)."
        ]
      },
      {
        title: "Example 3: 0.0001 c (Earth Orbital Motion)",
        subtitle: "Calculate Earth's orbital speed in Mach number.",
        steps: [
          "Identify velocity: 0.0001 c (approx. 29.98 km/s).",
          "Multiply: 0.0001 × 874,030.49 = 87.40.",
          "Result: 0.0001 c equals approximately Mach 87.4."
        ]
      }
    ]
  },
  table: {
    title: "Speed of Light to Mach Conversion Table (at 20 °C Air)",
    headers: ["Speed of Light (c)", "Mach Number (M)", "Flight & Physical Regime"],
    rows: [
      { fromVal: "0.000001 c", toVal: "Mach 0.87", extra: "Commercial jetliner cruising speed (transonic)" },
      { fromVal: "0.000005 c", toVal: "Mach 4.37", extra: "Supersonic reconnaissance aircraft (SR-71)" },
      { fromVal: "0.00001 c", toVal: "Mach 8.74", extra: "Hypersonic glide vehicle (X-43A class)" },
      { fromVal: "0.00003 c", toVal: "Mach 26.22", extra: "Orbital re-entry speed (spacecraft returning from LEO)" },
      { fromVal: "0.0001 c", toVal: "Mach 87.40", extra: "Solar system planetary orbital velocity" },
      { fromVal: "0.001 c", toVal: "Mach 874.03", extra: "Solar coronal shockwave velocity" },
      { fromVal: "0.01 c", toVal: "Mach 8,740.30", extra: "Advanced fusion propulsion concept velocity" },
      { fromVal: "0.05 c", toVal: "Mach 43,701.52", extra: "Interstellar probe cruise speed" },
      { fromVal: "0.10 c", toVal: "Mach 87,403.05", extra: "Relativistic flight threshold" },
      { fromVal: "0.50 c", toVal: "Mach 437,015.24", extra: "Half the speed of light" },
      { fromVal: "1.00 c", toVal: "Mach 874,030.49", extra: "Vacuum speed of light in 20 °C air equivalent" }
    ]
  },
  applications: {
    title: "Practical Applications of c to Mach Conversions",
    items: [
      {
        title: "Aerospace Hypersonic Re-entry Analysis",
        text: "NASA and military engineers compare spacecraft plasma sheath ionization thresholds against relativistic particle impacts using Mach numbers and c fractions."
      },
      {
        title: "Astrophysical Shock Wave Dynamics",
        text: "In supernova remnants, blast waves propagate into interstellar gas at speeds exceeding Mach 10,000 (roughly 0.01 c to 0.05 c), driving cosmic ray acceleration."
      },
      {
        title: "Comparative Physics & Education",
        text: "Physics educators contrast sound waves (mechanical longitudinal waves requiring a medium) with light waves (electromagnetic transverse waves requiring no medium) to illustrate why light travels nearly 900,000 times faster than sound."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming Mach is a fixed absolute speed; Mach 1 varies significantly with gas temperature and molecular composition.",
      "Thinking sound can travel through the vacuum of space; Mach number is meaningful only within a material fluid medium.",
      "Confusing Mach at 20 °C (343 m/s) with Mach at 15 °C (340.29 m/s) or high altitude (295 m/s)."
    ]
  },
  faqs: [
    {
      question: "What is the speed of light in Mach?",
      answer: "In dry air at standard room temperature (20 °C / 68 °F, where sound travels at 343 m/s), the speed of light is equal to approximately Mach 874,030.49."
    },
    {
      question: "How is the speed of light converted to Mach?",
      answer: "Divide the speed of light (299,792,458 m/s) by the local speed of sound in air (typically 343 m/s at 20 °C), which yields approximately Mach 874,030.49."
    },
    {
      question: "Why does the Mach equivalent of light vary with temperature?",
      answer: "The speed of light in vacuum is constant, but the speed of sound in air depends on temperature (a = √(γ·R·T)). As air temperature drops at high altitude, sound slows down, increasing the Mach number of light."
    },
    {
      question: "What is 0.1 c in Mach?",
      answer: "0.1 c is equal to approximately Mach 87,403 in air at 20 °C."
    },
    {
      question: "Can sound ever travel as fast as light?",
      answer: "No. Sound is a mechanical vibration transmitted by atom-to-atom collisions. The absolute theoretical maximum speed of sound in any material condensed matter is approximately 36 km/s (roughly 0.00012 c)."
    },
    {
      question: "What is the speed of light at standard sea level temperature (15 °C) in Mach?",
      answer: "At 15 °C (sound speed 340.29 m/s), 1 c equals approximately Mach 881,000 (299,792,458 / 340.29)."
    },
    {
      question: "How do you convert Mach back to c?",
      answer: "Multiply the Mach number by the speed of sound (343 m/s) and divide by 299,792,458. For example, Mach 1 divided by 874,030.49 equals approximately 1.144 × 10⁻⁶ c."
    },
    {
      question: "What is Cherenkov radiation in relation to Mach and light?",
      answer: "Cherenkov radiation is the optical equivalent of a sonic boom. When a charged particle travels through a medium (like water) faster than the phase velocity of light in that medium, it emits a blue glow similar to a Mach cone."
    }
  ],
  relatedList: [
    { label: "Mach to Speed of Light", from: "mach", to: "speed-of-light" },
    { label: "Speed of Light to Meter per Second", from: "speed-of-light", to: "meter-per-second" },
    { label: "Speed of Light to Kilometer per Hour", from: "speed-of-light", to: "kilometer-per-hour" }
  ],
  references: [
    "ISO 2533: Standard Atmosphere - Acoustic Velocities and Thermodynamic Data",
    "Ernst Mach - Contributions to the Analysis of the Sensations (1886)",
    "NASA Glenn Research Center - Speed of Sound and Mach Number Equations"
  ]
};
