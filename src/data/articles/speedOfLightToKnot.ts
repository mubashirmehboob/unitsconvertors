import { CustomArticleData } from "./types";

export const speedOfLightToKnot: CustomArticleData = {
  fromUnitId: "speed-of-light",
  toUnitId: "knot",
  seoTitle: "Speed of Light to Knot (c to kn)",
  metaDescription: "Convert the speed of light to knots (c to kn). Learn the exact conversion factor (582,749,918.36 knots), nautical physics formula, calculations, and tables.",
  h1: "Speed of Light to Knot Converter",
  introduction: [
    "Converting the speed of light in vacuum to knots translates the fundamental velocity limit of modern physics into the primary velocity unit of international maritime shipping and commercial aeronautics. Designated by the symbol <em>c</em>, light moves through vacuum at an unchanging speed regardless of the motion of the source or the observer.",
    "The international knot (kn) is defined as one international nautical mile per hour (exactly 1,852 meters per hour). When we divide the speed of light (299,792,458 m/s) by this rate, we find that one speed of light equals approximately 582,749,918.36 knots—over 582 million knots. This article explains the maritime and aerospace relationship, conversion formulas, worked examples, and comprehensive tables."
  ],
  quickAnswer: {
    text: "One speed of light (1 c) is equal to approximately 582,749,918.36 knots. To convert from speed of light to knots, multiply the c value by 582,749,918.36.",
    formulaDisplay: "kn = c × 582,749,918.36",
    subtext: "Calculated from (299,792,458 m/s × 3,600 s) / 1,852 m per international nautical mile."
  },
  aboutSourceUnit: {
    title: "Understanding the Speed of Light (c)",
    text: "The speed of light in a vacuum (c) is a universal constant defining the relationship between space and time in special relativity. In physics, all massless particles and gauge bosons—including photons and gravitons—propagate at exactly c."
  },
  aboutTargetUnit: {
    title: "Understanding the Knot (kn)",
    text: "The knot is a non-SI unit of speed legally accepted for use in maritime and aeronautical navigation worldwide. Equal to one nautical mile (1,852 meters) per hour, knots correspond directly to minutes of latitude on Earth's geographic coordinate system (1 nautical mile ≈ 1 minute of arc along a meridian)."
  },
  relationship: "Because 1 knot equals exactly 1,852 / 3,600 m/s (approx. 0.514444 m/s), converting from light speed to knots requires multiplying by 3,600 / 1,852. Multiplying 299,792,458 m/s yields 582,749,918.3585 knots.",
  relationshipTitle: "Nautical and Physical Equivalence",
  relationshipItems: [
    { label: "1.0 c", value: "582,749,918.36 knots (Universal velocity limit)" },
    { label: "0.1 c", value: "58,274,991.84 knots (Relativistic threshold)" },
    { label: "0.01 c", value: "5,827,499.18 knots (Interstellar flight regime)" },
    { label: "0.001 c", value: "582,749.92 knots (Fast solar flares)" },
    { label: "0.0001 c", value: "58,274.99 knots (Planetary orbital speeds)" }
  ],
  formula: {
    text: "Multiply the velocity in speed of light units (c) by 582,749,918.36 to find the velocity in knots.",
    math: "kn = c × 582,749,918.36",
    subtext: "To convert knots back into speed of light (c), divide by 582,749,918.36."
  },
  formulaTitle: "Speed of Light to Knot Formula",
  practicalTip: {
    title: "Aviation & Marine Perspective",
    text: "Commercial jetliners cruise at roughly 450 to 500 knots. At 582.75 million knots, light travels more than 1.16 million times faster than a standard commercial passenger airliner."
  },
  expertNote: {
    title: "Navigational Geodesy Connection",
    text: "Because one nautical mile equals one minute of latitude, light traveling at 582.75 million knots would traverse 582.75 million nautical miles per hour—equivalent to circling Earth's 21,600-nautical-mile meridian circumference over 26,900 times an hour."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: 0.1 c (Relativistic Spacecraft Velocity)",
        subtitle: "Convert 10% of light speed into knots for an interstellar navigational chart.",
        steps: [
          "Identify velocity: 0.1 c.",
          "Apply formula: kn = 0.1 × 582,749,918.36.",
          "Calculate: 0.1 × 582,749,918.36 = 58,274,991.84 kn.",
          "Result: 0.1 c equals approximately 58.27 million knots."
        ]
      },
      {
        title: "Example 2: 0.05 c (Fusion Rocket Speed)",
        subtitle: "Convert 5% light speed to knots.",
        steps: [
          "Identify velocity: 0.05 c.",
          "Multiply: 0.05 × 582,749,918.36 = 29,137,495.92 kn.",
          "Result: 0.05 c equals approximately 29.14 million knots."
        ]
      },
      {
        title: "Example 3: 0.0001 c (Earth Orbital Motion)",
        subtitle: "Calculate Earth's orbital speed around the Sun in knots.",
        steps: [
          "Identify velocity: 0.0001 c.",
          "Multiply: 0.0001 × 582,749,918.36 = 58,274.99 kn.",
          "Result: 0.0001 c equals approximately 58,275 knots (comparable to Earth's orbital speed of ~57,800 knots)."
        ]
      }
    ]
  },
  table: {
    title: "Speed of Light to Knot Conversion Table",
    headers: ["Speed of Light (c)", "Knots (kn)", "Navigation Milestone"],
    rows: [
      { fromVal: "0.00001 c", toVal: "5,827.50 kn", extra: "Military hypersonic aircraft test velocity" },
      { fromVal: "0.00003 c", toVal: "17,482.50 kn", extra: "Low Earth orbit satellite velocity" },
      { fromVal: "0.0001 c", toVal: "58,274.99 kn", extra: "Earth orbital speed (~57,900 kn)" },
      { fromVal: "0.001 c", toVal: "582,749.92 kn", extra: "Interplanetary coronal plasma ejection" },
      { fromVal: "0.01 c", toVal: "5,827,499.18 kn", extra: "1% light speed (high-energy ion drive)" },
      { fromVal: "0.05 c", toVal: "29,137,495.92 kn", extra: "Interstellar probe cruise speed" },
      { fromVal: "0.10 c", toVal: "58,274,991.84 kn", extra: "Relativistic kinematic regime" },
      { fromVal: "0.25 c", toVal: "145,687,479.59 kn", extra: "One-quarter speed of light" },
      { fromVal: "0.50 c", toVal: "291,374,959.18 kn", extra: "Half the speed of light" },
      { fromVal: "0.75 c", toVal: "437,062,438.77 kn", extra: "Speed of light in liquid water" },
      { fromVal: "1.00 c", toVal: "582,749,918.36 kn", extra: "Vacuum speed of light in knots" }
    ]
  },
  applications: {
    title: "Practical Applications of c to Knot Conversions",
    items: [
      {
        title: "Maritime Marine Radar & LORAN Systems",
        text: "Marine navigation radar devices calculate target vessel distances by measuring nanosecond pulse returns traveling at 582.75 million knots across nautical miles."
      },
      {
        title: "Aviation GPS Time-of-Arrival (TOA)",
        text: "Aircraft flight management systems (FMS) compute GPS satellite signal flight paths using nautical miles and knots to update cockpit real-time waypoints."
      },
      {
        title: "Space Navigation Astrodynamics",
        text: "Astrodynamicists working with international naval and air forces convert spacecraft velocities between nautical knots and fractions of the speed of light."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing statute miles per hour (mph) with nautical knots (kn), which differ by approximately 15% (1 knot = 1.15078 mph).",
      "Using the obsolete British admiralty knot (6,080 feet) instead of the international standard 1,852-meter knot.",
      "Forgetting that radar pulses in the atmosphere travel slightly slower than in pure vacuum due to atmospheric refractivity."
    ]
  },
  faqs: [
    {
      question: "How many knots is the speed of light?",
      answer: "The speed of light in vacuum is approximately 582,749,918.36 knots (about 582.75 million knots)."
    },
    {
      question: "How is the speed of light in knots calculated?",
      answer: "Multiply the defined speed of light (299,792,458 m/s) by 3,600 seconds per hour and divide by 1,852 meters per international nautical mile. 299,792,458 × 3,600 / 1,852 = 582,749,918.3585 knots."
    },
    {
      question: "Why do aviation and shipping use knots instead of m/s or km/h?",
      answer: "Knots are directly connected to the coordinate grid of planet Earth: one nautical mile equals approximately one minute of latitude on a navigational nautical chart, simplifying celestial and dead-reckoning navigation."
    },
    {
      question: "What is 0.1 c in knots?",
      answer: "0.1 c is equal to approximately 58,274,991.84 knots (about 58.27 million knots)."
    },
    {
      question: "How fast is a typical cruise ship compared to the speed of light?",
      answer: "A modern cruise ship travels at about 20 to 24 knots. At 582.75 million knots, light travels roughly 26 million times faster than a cruise ship."
    },
    {
      question: "How do you convert knots back into speed of light?",
      answer: "Divide the speed in knots by 582,749,918.36. For example, 500 knots divided by 582,749,918.36 equals 8.58 × 10⁻⁷ c."
    },
    {
      question: "How far does light travel in one nautical mile?",
      answer: "Light travels one nautical mile (1,852 meters) in approximately 6.177 microseconds (1,852 / 299,792,458 seconds)."
    },
    {
      question: "Is a knot faster or slower than a mile per hour?",
      answer: "A knot is faster than a statute mile per hour. 1 knot equals 1.150779 mph, because a nautical mile (1,852 m) is longer than a statute mile (1,609.344 m)."
    }
  ],
  relatedList: [
    { label: "Knot to Speed of Light", from: "knot", to: "speed-of-light" },
    { label: "Speed of Light to Mile per Hour", from: "speed-of-light", to: "mile-per-hour" },
    { label: "Speed of Light to Meter per Second", from: "speed-of-light", to: "meter-per-second" }
  ],
  references: [
    "BIPM - SI Brochure: Non-SI Units Accepted for Use with the International System",
    "International Hydrographic Organization (IHO) - Standards of Nautical Measurement",
    "FAA Pilot's Handbook of Aeronautical Knowledge - Navigation and Airspeed"
  ]
};
