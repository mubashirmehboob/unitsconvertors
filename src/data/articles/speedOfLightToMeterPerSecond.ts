import { CustomArticleData } from "./types";

export const speedOfLightToMeterPerSecond: CustomArticleData = {
  fromUnitId: "speed-of-light",
  toUnitId: "meter-per-second",
  seoTitle: "Speed of Light to Meter per Second (c to m/s)",
  metaDescription: "Convert speed of light in vacuum to meters per second (c to m/s). Learn the exact physical constant (299,792,458 m/s), BIPM definition, formula, and examples.",
  h1: "Speed of Light to Meter per Second Converter",
  introduction: [
    "Converting the speed of light in a vacuum to meters per second is one of the most foundational calculations in modern physics, astronomy, optics, and telecommunications. Designated by the symbol <em>c</em> (from the Latin <em>celeritas</em>, meaning swiftness), this universal physical constant represents the maximum speed at which all conventional energy, matter, and information can travel across space-time.",
    "Unlike empirical measurements that carry experimental uncertainty, the speed of light in meters per second is an exact defined number: exactly 299,792,458 m/s. This article covers the SI definition that fixes this constant, step-by-step conversion calculations, real-world relativistic applications, and reference tables."
  ],
  quickAnswer: {
    text: "One speed of light (1 c) is equal to exactly 299,792,458 meters per second. To convert any fraction or multiple of the speed of light into meters per second, multiply the value by 299,792,458.",
    formulaDisplay: "m/s = c × 299,792,458",
    subtext: "Defined as an exact universal constant by the 17th General Conference on Weights and Measures (CGPM) in 1983."
  },
  aboutSourceUnit: {
    title: "Understanding the Speed of Light (c)",
    text: "The speed of light in vacuum (c) is a fundamental invariant of nature in Albert Einstein's special theory of relativity. It governs the relationship between mass and energy (E = mc²) and remains constant for all observers regardless of their inertial frame of reference. In astrophysics, particle physics, and aerospace engineering, velocities of subatomic particles and relativistic spacecraft are routinely expressed as dimensionless fractions of c (such as 0.1 c or 0.99 c)."
  },
  aboutTargetUnit: {
    title: "Understanding Meters per Second (m/s)",
    text: "The meter per second is the coherent base-derived unit of speed and velocity in the International System of Units (SI). Defined directly from the distance light travels in vacuum during a time interval of 1 / 299,792,458 of a second, m/s is the universal standard for kinematic equations, engineering dynamics, and aerodynamic modeling."
  },
  relationship: "Because the SI meter was redefined in 1983 around the speed of light, the conversion factor is an exact integer with zero decimal uncertainty: 1 c = 299,792,458 m/s. To convert c to m/s, simply multiply by 299,792,458.",
  relationshipTitle: "Exact Physical Equivalence",
  relationshipItems: [
    { label: "1.0 c", value: "299,792,458 m/s (Speed of light in vacuum)" },
    { label: "0.75 c", value: "224,844,343.5 m/s (Speed of light in water)" },
    { label: "0.50 c", value: "149,896,229 m/s (Relativistic beta factor β = 0.5)" },
    { label: "0.10 c", value: "29,979,245.8 m/s (Relativistic threshold)" },
    { label: "0.001 c", value: "299,792.458 m/s (Roughly Earth orbital speed × 10)" }
  ],
  formula: {
    text: "Multiply the velocity expressed in speed of light units (c) by 299,792,458 to obtain the velocity in meters per second.",
    math: "m/s = c × 299,792,458",
    subtext: "To convert meters per second back into fractions of the speed of light, divide by 299,792,458."
  },
  formulaTitle: "Speed of Light to Meter per Second Formula",
  practicalTip: {
    title: "Everyday Physics Approximation",
    text: "In standard physics problem sets where three significant figures suffice, physicists routinely approximate c as 3.00 × 10⁸ m/s (300,000,000 m/s), introducing an error of less than 0.07%."
  },
  expertNote: {
    title: "Relativistic Particle Physics Context",
    text: "At particle accelerators like CERN's Large Hadron Collider, protons circulate at 0.999999991 c, which equates to 299,792,455.3 m/s—barely 2.7 meters per second slower than light itself."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: High-Energy Electron Velocity (0.25 c)",
        subtitle: "Convert a particle moving at 25% of the speed of light into meters per second.",
        steps: [
          "Identify velocity: 0.25 c.",
          "Apply formula: m/s = 0.25 × 299,792,458.",
          "Calculate: 0.25 × 299,792,458 = 74,948,114.5 m/s.",
          "Result: 0.25 c equals exactly 74,948,114.5 meters per second."
        ]
      },
      {
        title: "Example 2: Relativistic Particle Beam (0.9 c)",
        subtitle: "Convert 0.9 c into meters per second for Lorentz factor calculations.",
        steps: [
          "Identify velocity: 0.9 c.",
          "Multiply by 299,792,458: 0.9 × 299,792,458 = 269,813,212.2 m/s.",
          "Result: 0.9 c equals exactly 269,813,212.2 meters per second."
        ]
      },
      {
        title: "Example 3: Relativistic Spacecraft Concept (0.01 c)",
        subtitle: "Calculate the speed in m/s of a hypothetical interstellar probe traveling at 1% of the speed of light.",
        steps: [
          "Identify velocity: 0.01 c.",
          "Multiply: 0.01 × 299,792,458 = 2,997,924.58 m/s.",
          "Result: 0.01 c is approximately 2.998 × 10⁶ meters per second (about 3,000 km/s)."
        ]
      }
    ]
  },
  table: {
    title: "Speed of Light to Meter per Second Conversion Table",
    headers: ["Speed of Light (c)", "Meters per Second (m/s)", "Physical Context"],
    rows: [
      { fromVal: "0.0001 c", toVal: "29,979.25 m/s", extra: "Earth orbital speed (~30 km/s)" },
      { fromVal: "0.001 c", toVal: "299,792.46 m/s", extra: "Solar system escape velocity" },
      { fromVal: "0.01 c", toVal: "2,997,924.58 m/s", extra: "Project Daedalus interstellar probe concept" },
      { fromVal: "0.05 c", toVal: "14,989,622.90 m/s", extra: "5% light speed (15,000 km/s)" },
      { fromVal: "0.10 c", toVal: "29,979,245.80 m/s", extra: "Significant relativistic time dilation threshold" },
      { fromVal: "0.20 c", toVal: "59,958,491.60 m/s", extra: "Breakthrough Starshot target cruise velocity" },
      { fromVal: "0.50 c", toVal: "149,896,229.00 m/s", extra: "Half the speed of light" },
      { fromVal: "0.75 c", toVal: "224,844,343.50 m/s", extra: "Phase velocity of light in water" },
      { fromVal: "0.90 c", toVal: "269,813,212.20 m/s", extra: "Relativistic Lorentz gamma factor γ ≈ 2.29" },
      { fromVal: "0.99 c", toVal: "296,794,533.42 m/s", extra: "Cosmic ray protons / Relativistic gamma γ ≈ 7.09" },
      { fromVal: "1.00 c", toVal: "299,792,458.00 m/s", extra: "Exact speed of light in vacuum" }
    ]
  },
  applications: {
    title: "Practical Applications of c to m/s Conversions",
    items: [
      {
        title: "Satellite Navigation & GPS Timing",
        text: "GPS satellites require nanosecond-accurate clock synchronizations because radio signals travel at c (299,792,458 m/s). An error of just 1 microsecond causes a 300-meter positioning error on Earth."
      },
      {
        title: "Fiber Optic Communications",
        text: "Telecommunication engineers convert c into m/s and divide by the refractive index of glass (n ≈ 1.47) to determine latency across transcontinental submarine fiber cables (roughly 204,000,000 m/s)."
      },
      {
        title: "Particle Physics & Synchrotron Radiation",
        text: "Physicists design magnetic bending and RF cavity acceleration parameters by converting relativistic speeds (0.9999 c) into m/s to calculate Lorentz factors and synchrotron radiation losses."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming the speed of light has experimental measurement uncertainty; under the SI system, c is an exact defined integer (299,792,458 m/s).",
      "Confusing speed of light in vacuum with light speed in a medium like glass or water, where refractive indices slow light down significantly.",
      "Using 3 × 10⁸ m/s in high-precision aerospace or satellite timing calculations where the 207,542 m/s truncation error introduces massive drift."
    ]
  },
  faqs: [
    {
      question: "What is 1 c in meters per second?",
      answer: "One speed of light (1 c) equals exactly 299,792,458 meters per second."
    },
    {
      question: "Why is the speed of light exactly 299,792,458 m/s with no decimals?",
      answer: "In 1983, the 17th CGPM redefined the meter based on the speed of light. Because the second is defined by cesium atomic clocks, fixing the numerical value of c to 299,792,458 m/s mathematically defines the meter."
    },
    {
      question: "How do you convert 0.5 c to m/s?",
      answer: "Multiply 0.5 by 299,792,458 to obtain exactly 149,896,229 meters per second."
    },
    {
      question: "What is 0.1 c in meters per second?",
      answer: "0.1 c equals 29,979,245.8 meters per second, or approximately 30,000 kilometers per second."
    },
    {
      question: "Can anything travel faster than 299,792,458 m/s?",
      answer: "According to special relativity, no physical object with mass, and no signal carrying information, can exceed 299,792,458 m/s in vacuum. Particles can only travel faster than light when light travels through a medium (creating Cherenkov radiation)."
    },
    {
      question: "How far does light travel in one nanosecond?",
      answer: "In one nanosecond (10⁻⁹ seconds), light travels 299,792,458 × 10⁻⁹ meters, which is approximately 0.2998 meters (about 30 centimeters or roughly 1 foot)."
    },
    {
      question: "How do you convert m/s back to c?",
      answer: "Divide the speed in meters per second by 299,792,458. For example, 150,000,000 m/s divided by 299,792,458 equals approximately 0.5003 c."
    },
    {
      question: "How does the speed of light in water compare to m/s?",
      answer: "In pure water with a refractive index of n ≈ 1.333, light travels at c / 1.333, which is approximately 224,844,344 meters per second."
    }
  ],
  relatedList: [
    { label: "Meter per Second to Speed of Light", from: "meter-per-second", to: "speed-of-light" },
    { label: "Speed of Light to Kilometer per Hour", from: "speed-of-light", to: "kilometer-per-hour" },
    { label: "Speed of Light to Mile per Hour", from: "speed-of-light", to: "mile-per-hour" }
  ],
  references: [
    "BIPM - Resolution 1 of the 17th CGPM (1983): Definition of the Metre",
    "NIST Special Publication 330: The International System of Units (SI)",
    "CODATA Recommended Values of the Fundamental Physical Constants"
  ]
};
