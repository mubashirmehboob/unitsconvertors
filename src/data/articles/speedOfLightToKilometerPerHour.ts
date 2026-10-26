import { CustomArticleData } from "./types";

export const speedOfLightToKilometerPerHour: CustomArticleData = {
  fromUnitId: "speed-of-light",
  toUnitId: "kilometer-per-hour",
  seoTitle: "Speed of Light to Kilometer per Hour (c to km/h)",
  metaDescription: "Convert the speed of light to kilometers per hour (c to km/h). Learn the exact conversion factor (1,079,252,848.8 km/h), formula, astronomy examples, and tables.",
  h1: "Speed of Light to Kilometer per Hour Converter",
  introduction: [
    "Converting the speed of light in vacuum to kilometers per hour bridges the fundamental velocity limit of theoretical physics with the familiar metric unit used on highway speedometers and aviation dashboards. Designated by the symbol <em>c</em>, light moves through empty space faster than any other physical entity.",
    "Because the speed of light is defined as exactly 299,792,458 meters per second, multiplying by 3.6 yields an exact conversion factor: 1 c = 1,079,252,848.8 km/h. That is nearly 1.08 billion kilometers per hour. This comprehensive guide details the conversion formula, planetary and solar-system scale examples, calculations, and practical reference tables."
  ],
  quickAnswer: {
    text: "One speed of light (1 c) is equal to exactly 1,079,252,848.8 kilometers per hour (approximately 1.079 billion km/h). To convert any fraction of the speed of light to km/h, multiply the value by 1,079,252,848.8.",
    formulaDisplay: "km/h = c × 1,079,252,848.8",
    subtext: "Derived exactly from 299,792,458 m/s multiplied by 3.6 (the ratio of seconds per hour to meters per kilometer)."
  },
  aboutSourceUnit: {
    title: "Understanding the Speed of Light (c)",
    text: "The speed of light in a vacuum is an immutable universal constant in Einsteinian relativity. In astronomy, astrophysics, and space exploration, velocities of high-energy relativistic jets, pulsar emissions, and deep-space communication signals are expressed in terms of c."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Hour (km/h)",
    text: "The kilometer per hour is the standard worldwide metric unit for ground transport and automotive travel. It quantifies the number of kilometers an object traverses in one hour (3,600 seconds) and is widely used for planetary orbital velocities and space probe trajectories."
  },
  relationship: "Because 1 km/h equals 1 / 3.6 meters per second, converting light speed into kilometers per hour requires multiplying 299,792,458 m/s by 3.6. This results in the exact finite decimal 1,079,252,848.8 km/h.",
  relationshipTitle: "Exact Mathematical Relationship",
  relationshipItems: [
    { label: "1.0 c", value: "1,079,252,848.8 km/h (Over 1.079 billion km/h)" },
    { label: "0.1 c", value: "107,925,284.88 km/h (Relativistic threshold)" },
    { label: "0.01 c", value: "10,792,528.49 km/h (Hypothetical fusion probe)" },
    { label: "0.001 c", value: "1,079,252.85 km/h (About 1.08 million km/h)" },
    { label: "0.0001 c", value: "107,925.28 km/h (Comparable to Earth's orbit)" }
  ],
  formula: {
    text: "Multiply the speed expressed in units of light speed (c) by 1,079,252,848.8 to obtain the speed in kilometers per hour.",
    math: "km/h = c × 1,079,252,848.8",
    subtext: "To convert kilometers per hour back into speed of light, divide by 1,079,252,848.8."
  },
  formulaTitle: "Speed of Light to Kilometer per Hour Formula",
  practicalTip: {
    title: "Astronomy Approximation Rule",
    text: "For quick mental estimates in planetary science, remember that light travels roughly 1.08 billion km/h. At this speed, light travels 300,000 kilometers in a single second."
  },
  expertNote: {
    title: "Cosmic Distance Context",
    text: "The average distance from the Earth to the Sun is approximately 149.6 million kilometers (1 Astronomical Unit). At 1,079,252,848.8 km/h, sunlight requires approximately 8.3 minutes (499 seconds) to reach Earth."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: 0.1 c (Sub-Relativistic Space Probe)",
        subtitle: "Convert 10% of the speed of light into kilometers per hour.",
        steps: [
          "Identify velocity: 0.1 c.",
          "Apply formula: km/h = 0.1 × 1,079,252,848.8.",
          "Calculate: 0.1 × 1,079,252,848.8 = 107,925,284.88 km/h.",
          "Result: 0.1 c equals approximately 107.93 million kilometers per hour."
        ]
      },
      {
        title: "Example 2: 0.5 c (High-Relativistic Particle)",
        subtitle: "Convert half the speed of light into km/h.",
        steps: [
          "Identify velocity: 0.5 c.",
          "Multiply: 0.5 × 1,079,252,848.8 = 539,626,424.4 km/h.",
          "Result: 0.5 c equals exactly 539,626,424.4 kilometers per hour."
        ]
      },
      {
        title: "Example 3: 0.0001 c (Fast Interplanetary Probe)",
        subtitle: "Calculate the km/h equivalent of 0.0001 c.",
        steps: [
          "Identify velocity: 0.0001 c.",
          "Multiply: 0.0001 × 1,079,252,848.8 = 107,925.28 km/h.",
          "Result: 0.0001 c equals approximately 107,925 km/h (comparable to the Parker Solar Probe at perihelion)."
        ]
      }
    ]
  },
  table: {
    title: "Speed of Light to Kilometer per Hour Reference Table",
    headers: ["Speed of Light (c)", "Kilometers per Hour (km/h)", "Cosmic Phenomenon"],
    rows: [
      { fromVal: "0.00001 c", toVal: "10,792.53 km/h", extra: "Low Earth orbit satellite velocity (~7.8 km/s)" },
      { fromVal: "0.0001 c", toVal: "107,925.28 km/h", extra: "Earth orbital velocity around the Sun (~29.8 km/s)" },
      { fromVal: "0.0005 c", toVal: "539,626.42 km/h", extra: "Milky Way galactic rotation velocity (~230 km/s)" },
      { fromVal: "0.001 c", toVal: "1,079,252.85 km/h", extra: "Solar wind top speeds (~300–800 km/s)" },
      { fromVal: "0.01 c", toVal: "10,792,528.49 km/h", extra: "Project Orion nuclear pulse propulsion target" },
      { fromVal: "0.05 c", toVal: "53,962,642.44 km/h", extra: "Fast supernova remnant shockwaves" },
      { fromVal: "0.10 c", toVal: "107,925,284.88 km/h", extra: "Relativistic kinetic energy calculations required" },
      { fromVal: "0.20 c", toVal: "215,850,569.76 km/h", extra: "Breakthrough Starshot laser sail velocity" },
      { fromVal: "0.50 c", toVal: "539,626,424.40 km/h", extra: "Half the speed of light" },
      { fromVal: "0.90 c", toVal: "971,327,563.92 km/h", extra: "Relativistic astrophysical plasma jets" },
      { fromVal: "1.00 c", toVal: "1,079,252,848.80 km/h", extra: "Vacuum speed of light (universal speed limit)" }
    ]
  },
  applications: {
    title: "Practical Applications of c to km/h Conversions",
    items: [
      {
        title: "Planetary Science & Telemetry Latency",
        text: "NASA and ESA flight controllers convert c to km/h to calculate communication delays with probes around Mars, Jupiter, and Saturn, matching distances measured in millions of kilometers."
      },
      {
        title: "Relativistic Astrophysics",
        text: "Astronomers observing blazar jets and active galactic nuclei (AGN) convert relativistic Doppler velocities to km/h to compare emission speeds against galactic rotation curves."
      },
      {
        title: "Educational Outreach & Science Communication",
        text: "Museum curators and educators convert the speed of light to km/h to help the general public grasp cosmic scales using everyday vehicular terms."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Forgetting the 3.6 multiplier when converting from m/s to km/h (multiplying only by 3600 or dividing by 1000 improperly).",
      "Confusing light-hours or light-years (units of distance) with light speed (a unit of velocity).",
      "Rounding to 1 billion km/h in mission-critical trajectory calculations where the ~7.9% omission leads to errors of 79 million km/h."
    ]
  },
  faqs: [
    {
      question: "How many kilometers per hour is the speed of light?",
      answer: "The speed of light in vacuum is exactly 1,079,252,848.8 kilometers per hour, which is approximately 1.079 billion km/h."
    },
    {
      question: "How is the speed of light in km/h calculated?",
      answer: "Multiply the defined speed of light in meters per second (299,792,458 m/s) by 3.6 (since 1 m/s = 3.6 km/h). 299,792,458 × 3.6 = 1,079,252,848.8 km/h."
    },
    {
      question: "How long does light take to travel 1 million kilometers?",
      answer: "At 1,079,252,848.8 km/h, light travels 1,000,000 km in approximately 3.336 seconds (1,000,000 / 299,792.458)."
    },
    {
      question: "What is 0.1 c in kilometers per hour?",
      answer: "0.1 c is equal to 107,925,284.88 km/h (approximately 107.9 million kilometers per hour)."
    },
    {
      question: "How fast is Earth moving compared to light speed?",
      answer: "Earth orbits the Sun at approximately 107,200 km/h (29.78 km/s), which is roughly 0.0000993 c (about 0.01% of the speed of light)."
    },
    {
      question: "How fast is the fastest man-made spacecraft compared to light speed?",
      answer: "The Parker Solar Probe reaches peak speeds around 692,000 km/h (192 km/s) near the Sun, which is approximately 0.000641 c (0.064% of light speed)."
    },
    {
      question: "How do you convert km/h back to speed of light?",
      answer: "Divide the speed in km/h by 1,079,252,848.8. For example, 100 km/h divided by 1,079,252,848.8 equals 9.2657 × 10⁻⁸ c."
    },
    {
      question: "Does light travel at 1,079,252,848.8 km/h through Earth's atmosphere?",
      answer: "No. Air has a refractive index of approximately 1.000293, so light travels through sea-level air at approximately 1,078,936,800 km/h, slightly slower than in vacuum."
    }
  ],
  relatedList: [
    { label: "Kilometer per Hour to Speed of Light", from: "kilometer-per-hour", to: "speed-of-light" },
    { label: "Speed of Light to Meter per Second", from: "speed-of-light", to: "meter-per-second" },
    { label: "Speed of Light to Mile per Hour", from: "speed-of-light", to: "mile-per-hour" }
  ],
  references: [
    "BIPM - SI Brochure: Physical Constants and Units of Velocity",
    "NASA Jet Propulsion Laboratory - Planetary Constants and Ephemerides",
    "IAU (International Astronomical Union) - Standards of Fundamental Astronomy"
  ]
};
