import { CustomArticleData } from "./types";

export const footPerSecondToSpeedOfLight: CustomArticleData = {
  fromUnitId: "foot-per-second",
  toUnitId: "speed-of-light",
  seoTitle: "Foot per Second to Speed of Light (ft/s to c)",
  metaDescription: "Convert feet per second to speed of light (ft/s to c). Learn the conversion formula (ft/s / 983,571,056.43), Grace Hopper's nanosecond rule, examples, and tables.",
  h1: "Foot per Second to Speed of Light Converter",
  introduction: [
    "Converting feet per second to the speed of light in a vacuum connects the terrestrial velocity unit of American ballistics, fluid mechanics, and rocketry with the ultimate cosmic speed limit of theoretical physics. Designated by the symbol <em>c</em>, light moves through empty space at exactly 299,792,458 meters per second.",
    "Because 1 international foot is defined as exactly 0.3048 meters, one speed of light is equal to approximately 983,571,056.43 feet per second. Consequently, one foot per second represents just 1.0167 × 10⁻⁹ c—roughly one billionth of the speed of light. This conversion is crucial in electrical engineering, high-frequency circuit design, and relativistic astrophysics. This guide covers formulas, worked calculations, computer hardware latency contexts, and conversion tables."
  ],
  quickAnswer: {
    text: "One foot per second (1 ft/s) is equal to approximately 1.0167 × 10⁻⁹ c (about 1.017 billionths of the speed of light). To convert feet per second to the speed of light, divide the ft/s value by 983,571,056.43 (or multiply by 1.0167 × 10⁻⁹).",
    formulaDisplay: "c = ft/s / 983,571,056.43 ≈ ft/s × 1.016703 × 10⁻⁹",
    subtext: "Calculated from 1 foot (0.3048 meters) divided by the defined vacuum speed of light (299,792,458 m/s)."
  },
  aboutSourceUnit: {
    title: "Understanding Feet per Second (ft/s)",
    text: "The foot per second (ft/s or fps) is an imperial and US customary unit quantifying linear velocity. Extensively used in firearm ballistics chronographs, aircraft carrier catapult engineering, and structural wind engineering in the United States, it measures distance in feet traveled per second."
  },
  aboutTargetUnit: {
    title: "Understanding the Speed of Light (c)",
    text: "The speed of light in vacuum (c) is the universal physical constant setting the maximum speed for mass, information, and causality in Einstein's special theory of relativity. Velocities of high-energy relativistic particles are expressed as dimensionless fractions of c (e.g., β = v/c)."
  },
  relationship: "Because 1 foot equals 0.3048 meters, converting feet per second to meters per second means multiplying by 0.3048. Dividing that by the speed of light (299,792,458 m/s) yields the exact fraction (0.3048 / 299,792,458), which equals approximately 1.016703 × 10⁻⁹ c per ft/s.",
  relationshipTitle: "Conversion Ratio Breakdown",
  relationshipItems: [
    { label: "1 ft/s", value: "1.0167 × 10⁻⁹ c (About 1.017 billionths of c)" },
    { label: "1,125.33 ft/s", value: "1.144 × 10⁻⁶ c (Speed of sound / Mach 1)" },
    { label: "25,600 ft/s", value: "2.603 × 10⁻⁵ c (Low Earth orbit orbital speed)" },
    { label: "98,357 ft/s", value: "1.000 × 10⁻⁴ c (Earth orbital speed around Sun)" },
    { label: "983,571,056 ft/s", value: "1.000 c (Exact vacuum speed of light)" }
  ],
  formula: {
    text: "Divide the velocity in feet per second by 983,571,056.43 (or multiply by 0.3048 and divide by 299,792,458) to calculate the fraction of the speed of light.",
    math: "c = ft/s / 983,571,056.43",
    subtext: "To convert speed of light back into feet per second, multiply by 983,571,056.43."
  },
  formulaTitle: "Foot per Second to Speed of Light Formula",
  practicalTip: {
    title: "Grace Hopper's 1-Foot Nanosecond Rule",
    text: "Because light travels roughly 984 million feet per second, it travels approximately 0.984 feet (11.8 inches) in 1 nanosecond. If a computer signal wire is 1 foot long, electricity takes approximately 1 nanosecond to traverse it."
  },
  expertNote: {
    title: "Relativistic Threshold in ft/s",
    text: "Special relativity corrections (Lorentz factor γ) become noticeable when velocity exceeds 10% of light speed (0.1 c), which corresponds to roughly 98.36 million feet per second."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Earth Orbital Velocity (~98,400 ft/s)",
        subtitle: "Convert Earth's orbital speed of roughly 98,400 ft/s into a fraction of light speed.",
        steps: [
          "Identify velocity: 98,400 ft/s.",
          "Apply formula: c = 98,400 / 983,571,056.43.",
          "Calculate: 98,400 / 983,571,056.43 = 0.00010004 c.",
          "Result: Earth orbits the Sun at approximately 0.0001 c (0.01% of the speed of light)."
        ]
      },
      {
        title: "Example 2: High-Power Rifle Bullet (3,000 ft/s)",
        subtitle: "Convert a 3,000 ft/s bullet into a fraction of light speed.",
        steps: [
          "Identify velocity: 3,000 ft/s.",
          "Divide: 3,000 / 983,571,056.43 = 3.0501 × 10⁻⁶ c.",
          "Result: A 3,000 ft/s bullet travels at approximately 3.05 millionths of the speed of light."
        ]
      },
      {
        title: "Example 3: Relativistic Target Speed (100,000,000 ft/s)",
        subtitle: "Convert 100 million ft/s into c.",
        steps: [
          "Identify velocity: 100,000,000 ft/s.",
          "Divide: 100,000,000 / 983,571,056.43 = 0.10167 c.",
          "Result: 100 million ft/s equals approximately 0.1017 c (roughly 10.2% of the speed of light)."
        ]
      }
    ]
  },
  table: {
    title: "Foot per Second to Speed of Light Conversion Table",
    headers: ["Feet per Second (ft/s)", "Speed of Light (c)", "Physical & Astronomical Context"],
    rows: [
      { fromVal: "88 ft/s", toVal: "8.947 × 10⁻⁸ c", extra: "Highway automobile traffic (60 mph)" },
      { fromVal: "1,125 ft/s", toVal: "1.144 × 10⁻⁶ c", extra: "Speed of sound at sea level (Mach 1)" },
      { fromVal: "3,000 ft/s", toVal: "3.050 × 10⁻⁶ c", extra: "High-power rifle projectile" },
      { fromVal: "10,000 ft/s", toVal: "1.017 × 10⁻⁵ c", extra: "Hypersonic test flight (Mach ~8.9)" },
      { fromVal: "25,600 ft/s", toVal: "2.603 × 10⁻⁵ c", extra: "Satellite low Earth orbit orbital speed" },
      { fromVal: "36,700 ft/s", toVal: "3.731 × 10⁻⁵ c", extra: "Apollo lunar mission Earth escape velocity" },
      { fromVal: "98,357 ft/s", toVal: "1.000 × 10⁻⁴ c", extra: "Earth orbital speed around the Sun" },
      { fromVal: "1,000,000 ft/s", toVal: "1.017 × 10⁻³ c", extra: "Solar coronal mass ejection (CME)" },
      { fromVal: "10,000,000 ft/s", toVal: "1.017 × 10⁻² c", extra: "1% light speed (high-energy fusion concept)" },
      { fromVal: "98,357,106 ft/s", toVal: "1.000 × 10⁻¹ c", extra: "10% light speed (relativistic threshold)" },
      { fromVal: "983,571,056 ft/s", toVal: "1.000 c", extra: "Vacuum speed of light in feet per second" }
    ]
  },
  applications: {
    title: "Practical Applications of ft/s to c Conversions",
    items: [
      {
        title: "High-Speed Microelectronics & Bus Routing",
        text: "Digital hardware engineers convert physical chip interconnect lengths into nanosecond propagation delays by comparing signal trace velocities against fractions of c."
      },
      {
        title: "Aerospace Radar & Lidar Sensor Design",
        text: "Radar engineers convert target closing velocities from ft/s to c to calculate relativistic Doppler frequency shifts in advanced phased-array systems."
      },
      {
        title: "Astrophysical Particle Simulation",
        text: "Computational astrophysicists convert particle velocities from laboratory US customary units into dimensionless beta factors (β = v/c) for relativistic fluid simulations."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 983,571,056.43 instead of dividing when converting ft/s to c (which produces an absurdly high number).",
      "Confusing speed of light in vacuum with propagation velocity in coaxial cables, which is typically 66% to 85% of c.",
      "Neglecting relativistic kinetic energy formulas when velocities exceed 100 million ft/s (0.1 c)."
    ]
  },
  faqs: [
    {
      question: "How do you convert feet per second to the speed of light?",
      answer: "Divide the velocity in feet per second by 983,571,056.43 (or multiply by 0.3048 and divide by 299,792,458). For example, 1,000,000 ft/s / 983,571,056.43 ≈ 0.001017 c."
    },
    {
      question: "How many feet per second is the speed of light?",
      answer: "The speed of light in vacuum is approximately 983,571,056.43 feet per second (roughly 984 million ft/s)."
    },
    {
      question: "What is 1 ft/s in terms of c?",
      answer: "One ft/s equals approximately 1.0167 × 10⁻⁹ c (about 1.017 billionths of the speed of light)."
    },
    {
      question: "How far does light travel in one nanosecond in feet?",
      answer: "Light in a vacuum travels approximately 0.9836 feet (11.8 inches, or almost exactly 1 foot) in one nanosecond."
    },
    {
      question: "What was Grace Hopper's famous nanosecond demonstration?",
      answer: "Rear Admiral Grace Hopper distributed 11.8-inch pieces of wire to visualize why computer signals take time to travel: electricity and light can travel at most ~1 foot per nanosecond."
    },
    {
      question: "What is the speed of sound in terms of c?",
      answer: "At 20 °C, the speed of sound (1,125.33 ft/s) is approximately 1.144 × 10⁻⁶ c (about 1.14 millionths of the speed of light)."
    },
    {
      question: "What is orbital speed (25,600 ft/s) in c?",
      answer: "Low Earth orbit satellite speed of 25,600 ft/s equals approximately 2.603 × 10⁻⁵ c (about 0.0026% of light speed)."
    },
    {
      question: "How do you convert c back into feet per second?",
      answer: "Multiply the value in c by 983,571,056.43. For example, 0.5 c × 983,571,056.43 = 491,785,528.22 ft/s."
    }
  ],
  relatedList: [
    { label: "Speed of Light to Foot per Second", from: "speed-of-light", to: "foot-per-second" },
    { label: "Foot per Second to Meter per Second", from: "foot-per-second", to: "meter-per-second" },
    { label: "Foot per Second to Mile per Hour", from: "foot-per-second", to: "mile-per-hour" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "BIPM - SI Brochure: Definition of the Metre and Second",
    "IEEE Computer Society - Historical Perspectives on Microprocessor Latency"
  ]
};
