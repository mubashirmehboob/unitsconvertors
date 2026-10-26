import { CustomArticleData } from "./types";

export const speedOfLightToFootPerSecond: CustomArticleData = {
  fromUnitId: "speed-of-light",
  toUnitId: "foot-per-second",
  seoTitle: "Speed of Light to Foot per Second (c to ft/s)",
  metaDescription: "Convert the speed of light to feet per second (c to ft/s). Learn the exact conversion factor (983,571,056.43 ft/s), Grace Hopper's nanosecond rule, formula, and tables.",
  h1: "Speed of Light to Foot per Second Converter",
  introduction: [
    "Converting the speed of light in vacuum to feet per second bridges the fundamental cosmic speed limit (<em>c</em>) with the standard kinematic velocity unit used throughout American civil engineering, ballistics, fluid dynamics, and computer architecture. Designated by the symbol <em>c</em>, light travels through a vacuum faster than any physical object or signal in the universe.",
    "Using the international yard and pound agreement defining 1 foot as exactly 0.3048 meters, dividing 299,792,458 m/s by 0.3048 yields an exact conversion rate: 1 c = 983,571,056.43 ft/s (nearly 1 billion feet per second). This leads directly to one of computer science's most famous practical rules of thumb: light travels almost exactly 1 foot in 1 nanosecond. This guide covers formulas, electronic latency examples, calculation workflows, and conversion tables."
  ],
  quickAnswer: {
    text: "One speed of light (1 c) is equal to approximately 983,571,056.43 feet per second (roughly 984 million ft/s). To convert from speed of light to feet per second, multiply the c value by 983,571,056.43.",
    formulaDisplay: "ft/s = c × 983,571,056.43",
    subtext: "Calculated from 299,792,458 m/s divided by 0.3048 meters per international foot."
  },
  aboutSourceUnit: {
    title: "Understanding the Speed of Light (c)",
    text: "The speed of light in vacuum (c) is an immutable universal constant in special relativity and quantum electrodynamics. It sets the maximum velocity for causality and electromagnetic wave transmission in free space."
  },
  aboutTargetUnit: {
    title: "Understanding Feet per Second (ft/s)",
    text: "The foot per second (ft/s or fps) is an imperial and US customary unit of speed expressing the distance in feet covered in one second. It is the primary velocity metric in US ballistics, structural dynamic impact analysis, rocket propulsion, and river streamflow hydraulics."
  },
  relationship: "Because 1 foot equals exactly 0.3048 meters, converting meters per second to feet per second requires dividing by 0.3048 (or multiplying by approximately 3.28084). Dividing the exact speed of light (299,792,458 m/s) by 0.3048 produces 983,571,056.4304 ft/s.",
  relationshipTitle: "Conversion Ratio Breakdown",
  relationshipItems: [
    { label: "1.0 c", value: "983,571,056.43 ft/s (Almost 1 billion ft/s)" },
    { label: "0.1 c", value: "98,357,105.64 ft/s (Relativistic boundary)" },
    { label: "0.01 c", value: "9,835,710.56 ft/s (High-velocity ion propulsion)" },
    { label: "0.001 c", value: "983,571.06 ft/s (Solar wind average)" },
    { label: "0.0001 c", value: "98,357.11 ft/s (Earth orbital velocity)" }
  ],
  formula: {
    text: "Multiply the velocity in speed of light units (c) by 983,571,056.43 to calculate the equivalent speed in feet per second.",
    math: "ft/s = c × 983,571,056.43",
    subtext: "To convert feet per second back into speed of light, divide by 983,571,056.43 (or multiply by 0.3048 / 299,792,458)."
  },
  formulaTitle: "Speed of Light to Foot per Second Formula",
  practicalTip: {
    title: "The Grace Hopper 1-Foot Nanosecond Rule",
    text: "Pioneering computer scientist Rear Admiral Grace Hopper famously carried 11.8-inch pieces of wire to demonstrate that electrical signals and light in a vacuum can travel at most ~0.984 feet in 1 nanosecond (10⁻⁹ seconds)."
  },
  expertNote: {
    title: "Microprocessor Clock Timing",
    text: "In a 3.0 GHz CPU, one clock cycle lasts roughly 0.33 nanoseconds. In that single tick, light can travel at most 3.9 inches (0.32 feet), setting physical miniaturization limits on microchip dies."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: 0.1 c (Relativistic Spacecraft Velocity)",
        subtitle: "Convert 10% of light speed into feet per second.",
        steps: [
          "Identify velocity: 0.1 c.",
          "Apply formula: ft/s = 0.1 × 983,571,056.43.",
          "Calculate: 0.1 × 983,571,056.43 = 98,357,105.64 ft/s.",
          "Result: 0.1 c equals approximately 98.36 million feet per second."
        ]
      },
      {
        title: "Example 2: 0.5 c (Relativistic Electron Beam)",
        subtitle: "Convert half the speed of light into feet per second.",
        steps: [
          "Identify velocity: 0.5 c.",
          "Multiply: 0.5 × 983,571,056.43 = 491,785,528.22 ft/s.",
          "Result: 0.5 c equals approximately 491.79 million feet per second."
        ]
      },
      {
        title: "Example 3: 0.0001 c (Interplanetary Probe Velocity)",
        subtitle: "Convert 0.0001 c into feet per second.",
        steps: [
          "Identify velocity: 0.0001 c.",
          "Multiply: 0.0001 × 983,571,056.43 = 98,357.11 ft/s.",
          "Result: 0.0001 c equals approximately 98,357 feet per second (roughly 18.6 miles per second)."
        ]
      }
    ]
  },
  table: {
    title: "Speed of Light to Foot per Second Conversion Table",
    headers: ["Speed of Light (c)", "Feet per Second (ft/s)", "Physical Reference"],
    rows: [
      { fromVal: "0.000001 c", toVal: "983.57 ft/s", extra: "Commercial jetliner cruising speed" },
      { fromVal: "0.000003 c", toVal: "2,950.71 ft/s", extra: "High-power rifle muzzle velocity" },
      { fromVal: "0.00001 c", toVal: "9,835.71 ft/s", extra: "Hypersonic test flight regime" },
      { fromVal: "0.000026 c", toVal: "25,600.00 ft/s", extra: "Low Earth orbit satellite velocity (~4.8 mi/s)" },
      { fromVal: "0.0001 c", toVal: "98,357.11 ft/s", extra: "Earth orbital speed (~18.6 mi/s)" },
      { fromVal: "0.001 c", toVal: "983,571.06 ft/s", extra: "High-speed solar coronal ejection" },
      { fromVal: "0.01 c", toVal: "9,835,710.56 ft/s", extra: "Interstellar fusion pulse propulsion target" },
      { fromVal: "0.05 c", toVal: "49,178,552.82 ft/s", extra: "5% light speed (~9,314 mi/s)" },
      { fromVal: "0.10 c", toVal: "98,357,105.64 ft/s", extra: "Relativistic kinetic energy divergence" },
      { fromVal: "0.50 c", toVal: "491,785,528.22 ft/s", extra: "Half the speed of light" },
      { fromVal: "1.00 c", toVal: "983,571,056.43 ft/s", extra: "Exact vacuum speed of light in ft/s" }
    ]
  },
  applications: {
    title: "Practical Applications of c to ft/s Conversions",
    items: [
      {
        title: "High-Speed Electronic Circuit & PCB Design",
        text: "Hardware engineers routing printed circuit board (PCB) traces use the ~1 ft/ns rule to calculate trace delay, ensuring clock signals arrive at memory chips within picosecond tolerances."
      },
      {
        title: "Aerospace Ballistics & Radar Tracking",
        text: "Military radar installations report target intercept velocities in feet per second while computing microwave pulse reflection times based on the speed of light."
      },
      {
        title: "High-Frequency Financial Trading (HFT)",
        text: "Trading networks calculate latency across microwave tower links between Chicago and New York by converting light speed in air into feet per microsecond."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing the international foot (0.3048 m) with the historical US survey foot (1200/3937 m), though the difference is only 2 parts per million.",
      "Rounding to 1 billion ft/s in precision microelectronics, where the 1.64% error leads to clock skew.",
      "Forgetting that electromagnetic signals in coaxial copper cables travel at only 66% to 85% of c (roughly 650 to 830 million ft/s)."
    ]
  },
  faqs: [
    {
      question: "How many feet per second is the speed of light?",
      answer: "The speed of light in vacuum is approximately 983,571,056.43 feet per second (roughly 984 million ft/s)."
    },
    {
      question: "How is the speed of light converted to feet per second?",
      answer: "Divide the defined speed of light (299,792,458 m/s) by 0.3048 meters per international foot. 299,792,458 / 0.3048 = 983,571,056.4304 ft/s."
    },
    {
      question: "How far does light travel in one nanosecond in feet?",
      answer: "In one nanosecond (10⁻⁹ seconds), light travels 983,571,056.43 × 10⁻⁹ feet, which is approximately 0.9836 feet (11.8 inches, or roughly 1 foot)."
    },
    {
      question: "What was Grace Hopper's famous nanosecond demonstration?",
      answer: "Rear Admiral Grace Hopper handed out 11.8-inch pieces of wire to explain why satellite communication and computer networks have latency: light and electricity cannot travel more than ~1 foot in one nanosecond."
    },
    {
      question: "What is 0.1 c in feet per second?",
      answer: "0.1 c is equal to approximately 98,357,105.64 feet per second (roughly 98.4 million ft/s)."
    },
    {
      question: "How fast is a bullet compared to the speed of light in ft/s?",
      answer: "A standard rifle bullet travels at about 3,000 ft/s. The speed of light is over 327,000 times faster than a rifle bullet."
    },
    {
      question: "How do you convert ft/s back into c?",
      answer: "Divide the speed in ft/s by 983,571,056.43 (or multiply by 0.3048 and divide by 299,792,458). For example, 1,000 ft/s divided by 983,571,056.43 equals 1.0167 × 10⁻⁶ c."
    },
    {
      question: "How fast does light travel in copper wire compared to vacuum in ft/s?",
      answer: "In standard copper coaxial cable or Ethernet twisted pair, the velocity factor is typically 0.66 to 0.70 c, meaning electrical signals travel at roughly 650 to 690 million feet per second (~8 inches per nanosecond)."
    }
  ],
  relatedList: [
    { label: "Foot per Second to Speed of Light", from: "foot-per-second", to: "speed-of-light" },
    { label: "Speed of Light to Meter per Second", from: "speed-of-light", to: "meter-per-second" },
    { label: "Speed of Light to Mile per Hour", from: "speed-of-light", to: "mile-per-hour" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "BIPM - SI Brochure: Definition of the Metre and Second",
    "IEEE Standard 100: Dictionary of Electrical and Electronics Terms"
  ]
};
