import { CustomArticleData } from "./types";

export const meterPerSecondToSpeedOfLight: CustomArticleData = {
  fromUnitId: "meter-per-second",
  toUnitId: "speed-of-light",
  seoTitle: "Meter per Second to Speed of Light Converter (m/s to c)",
  metaDescription: "Convert meters per second to fractions of the speed of light (m/s to c). Learn the relativistic constant (299,792,458 m/s), cosmic velocity scales, and calculation steps.",
  h1: "Meter per Second to Speed of Light Converter",
  introduction: [
    "Converting meters per second to the speed of light is a fundamental calculation in theoretical physics, astrophysics, particle acceleration, and special relativity. The speed of light in a vacuum—denoted by the universal physical constant c—is the ultimate speed limit of the universe.",
    "Defined as exactly 299,792,458 meters per second, converting m/s to fractions of the speed of light (c) requires dividing the m/s value by 299,792,458. This guide covers Einstein's relativistic speed limits, particle accelerator velocities, cosmological measurements, and worked mathematical examples."
  ],
  quickAnswer: {
    text: "To convert meters per second to fractions of the speed of light (c), divide the velocity in m/s by 299,792,458. For example, 29,979,245.8 m/s equals 0.10 c (10% the speed of light).",
    formulaDisplay: "c = m/s / 299,792,458",
    subtext: "The speed of light c is defined as exactly 299,792,458 meters per second in a vacuum."
  },
  aboutSourceUnit: {
    title: "Understanding Meters per Second (m/s)",
    text: "The meter per second is the base unit of velocity in the SI system. It provides the reference measurement from which cosmic speeds, planetary orbits, and subatomic particle motions are quantified before normalizing against c."
  },
  aboutTargetUnit: {
    title: "Understanding the Speed of Light Constant (c)",
    text: "The speed of light in a vacuum (c) is an exact physical constant equal to 299,792,458 m/s. In Einstein's special theory of relativity, c connects space and time in spacetime, governs mass-energy equivalence (E = mc²), and bounds causality throughout the cosmos."
  },
  relationship: "Because the SI meter itself is defined as the distance traveled by light in a vacuum during 1/299,792,458 of a second, the relationship between m/s and c is exact and unvarying.",
  relationshipTitle: "Meter per Second vs Speed of Light Scale Comparison",
  relationshipItems: [
    { label: "29,979 m/s", value: "0.0001 c (Earth orbital velocity ~30 km/s)" },
    { label: "2,997,925 m/s", value: "0.01 c (Solar wind speed)" },
    { label: "29,979,246 m/s", value: "0.10 c (Relativistic threshold)" },
    { label: "149,896,229 m/s", value: "0.50 c (Half the speed of light)" },
    { label: "299,792,458 m/s", value: "1.00 c (Speed of light constant)" }
  ],
  formula: {
    text: "Divide the velocity in meters per second by 299,792,458 to calculate velocity as a fraction of c.",
    math: "c = m/s / 299,792,458",
    subtext: "To convert fraction of c back to meters per second, multiply by 299,792,458."
  },
  formulaTitle: "Meter per Second to Speed of Light Formula",
  practicalTip: {
    title: "Scientific Notation Formatting",
    text: "Because Everyday human speeds are minute fractions of c, express values using scientific notation or percentage of c (e.g., 30,000 m/s = 3 × 10⁴ m/s = 1.00069 × 10⁻⁴ c)."
  },
  expertNote: {
    title: "Why Nothing With Mass Reaches 1.0 c",
    text: "According to special relativity, as an object with rest mass approaches 1.0 c, its relativistic kinetic energy approaches infinity, requiring infinite work to reach c."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Large Hadron Collider Proton Speed (299,792,455 m/s)",
        subtitle: "Convert the LHC proton beam velocity of 299,792,455 m/s into fraction of c.",
        steps: [
          "Identify velocity in m/s: 299,792,455 m/s.",
          "Apply formula: c = 299,792,455 / 299,792,458.",
          "Calculate: 299,792,455 / 299,792,458 = 0.9999999899 c.",
          "Result: Protons in the LHC travel at 0.99999999 c (99.999999% c)."
        ]
      },
      {
        title: "Example 2: Earth's Orbital Speed Around Sun (29,780 m/s)",
        subtitle: "Convert Earth's solar orbital speed into fraction of c.",
        steps: [
          "Identify velocity: 29,780 m/s.",
          "Divide by 299,792,458: 29,780 / 299,792,458 = 0.000099335.",
          "Result: Earth orbits the Sun at approximately 0.0000993 c (9.93 × 10⁻⁵ c)."
        ]
      }
    ]
  },
  table: {
    title: "Meter per Second to Speed of Light Conversion Table",
    headers: ["Meters per Second (m/s)", "Fraction of c", "Percentage of c (% c)", "Cosmic Benchmark"],
    rows: [
      { fromVal: "343 m/s", toVal: "1.144 × 10⁻⁶ c", extra: "0.000114%", extra2: "Speed of sound at sea level" },
      { fromVal: "11,186 m/s", toVal: "3.731 × 10⁻⁵ c", extra: "0.00373%", extra2: "Earth escape velocity" },
      { fromVal: "29,780 m/s", toVal: "9.934 × 10⁻⁵ c", extra: "0.00993%", extra2: "Earth orbital speed" },
      { fromVal: "170,000 m/s", toVal: "5.671 × 10⁻⁴ c", extra: "0.0567%", extra2: "Parker Solar Probe peak speed" },
      { fromVal: "3,000,000 m/s", toVal: "0.010 c", extra: "1.00%", extra2: "Solar flare particle ejection" },
      { fromVal: "29,979,246 m/s", toVal: "0.100 c", extra: "10.00%", extra2: "Relativistic electron beam" },
      { fromVal: "149,896,229 m/s", toVal: "0.500 c", extra: "50.00%", extra2: "Half speed of light" },
      { fromVal: "269,813,212 m/s", toVal: "0.900 c", extra: "90.00%", extra2: "Relativistic cosmic ray" },
      { fromVal: "296,794,533 m/s", toVal: "0.990 c", extra: "99.00%", extra2: "Cosmic ray muon beam" },
      { fromVal: "299,792,458 m/s", toVal: "1.000 c", extra: "100.00%", extra2: "Photon speed in vacuum" }
    ]
  },
  applications: {
    title: "Applications of m/s to c Conversions",
    items: [
      {
        title: "Particle Physics & Synchrotron Design",
        text: "Physicists at CERN convert particle velocities in m/s to ultra-precise relativistic beta values (v/c) to configure magnetic containment fields."
      },
      {
        title: "Astrophysics & Active Galactic Nuclei",
        text: "Astronomers convert Doppler spectral shifts from m/s to fractions of c to calculate the speed of relativistic plasma jets emitted by supermassive black holes."
      },
      {
        title: "Deep Space Communications",
        text: "Interplanetary mission controllers express light-travel delays by comparing probe distance against light speed constant c."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 299,792,458 instead of dividing when converting m/s to c.",
      "Confusing speed of light in a vacuum with reduced light speed through denser media (like glass or water).",
      "Treating c as a variable rather than an exact defined physical constant."
    ]
  },
  faqs: [
    {
      question: "How do you convert m/s to speed of light (c)?",
      answer: "Divide the velocity in m/s by 299,792,458."
    },
    {
      question: "What is the exact speed of light in m/s?",
      answer: "The speed of light in a vacuum is defined as exactly 299,792,458 meters per second."
    },
    {
      question: "What percentage of the speed of light is 30,000 m/s?",
      answer: "30,000 m/s is approximately 0.01% of the speed of light (0.00010007 c)."
    },
    {
      question: "Can anything travel faster than c?",
      answer: "No matter or information can travel faster than c in a vacuum, according to the laws of special relativity."
    },
    {
      question: "How fast is 0.1 c in m/s?",
      answer: "0.1 c is equal to 29,979,245.8 meters per second (approx. 30,000 km/s)."
    }
  ],
  relatedList: [
    { label: "Speed of Light to Meter per Second", from: "speed-of-light", to: "meter-per-second" },
    { label: "Meter per Second to Mach", from: "meter-per-second", to: "mach" },
    { label: "Meter per Second to Kilometer per Hour", from: "meter-per-second", to: "kilometer-per-hour" }
  ],
  references: [
    "BIPM - Resolution 1 of the 17th CGPM (Definition of the Meter)",
    "NIST Physical Measurement Laboratory - Speed of Light in Vacuum"
  ]
};
