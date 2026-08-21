import { CustomArticleData } from "./types";

export const kilometerPerHourToSpeedOfLight: CustomArticleData = {
  fromUnitId: "kilometer-per-hour",
  toUnitId: "speed-of-light",
  seoTitle: "Kilometer per Hour to Speed of Light Converter (km/h to c)",
  metaDescription: "Convert kilometers per hour to the speed of light (km/h to c) accurately. Explore relativistic velocity ratios, vacuum constants, and conversion tables.",
  h1: "Kilometer per Hour to Speed of Light Converter",
  introduction: [
    "Converting kilometers per hour to fractions of the speed of light translates terrestrial and orbital velocities into the universal cosmic speed limit established by special relativity. In standard vacuum physics, the speed of light in a vacuum ($c$) is defined as exactly 299,792,458 meters per second, which corresponds to exactly 1,079,252,848.8 kilometers per hour.",
    "While everyday vehicles, high-speed rail networks, and commercial aircraft operate at tiny fractions of a percent of light speed, astrophysicists, particle accelerator engineers, and satellite telecommunications specialists rely on this conversion to evaluate relativistic Doppler shifts, Lorentz time dilation, and momentum calculations. Converting kilometers per hour into light speed fractions requires dividing the velocity by 1,079,252,848.8. This guide provides exact mathematical relationships, step-by-step conversion examples, relativistic context, and reference tables."
  ],
  quickAnswer: {
    text: "To convert kilometers per hour to the speed of light (c), divide the velocity in km/h by 1,079,252,848.8. For example, 107,925,285 km/h equals approximately 0.1c (10% the speed of light).",
    formulaDisplay: "c = (km/h) / 1,079,252,848.8",
    subtext: "Exact speed of light in vacuum (c) = 299,792,458 m/s = 1,079,252,848.8 km/h.\n1 km/h ≈ 9.26567 × 10⁻¹⁰ c."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Hour (km/h)",
    text: "The kilometer per hour is a standard metric unit of speed measuring the distance in kilometers traveled over one hour. Widely used for global road traffic signage, rail transport, and automotive engineering, 1 km/h equals 1,000 meters per 3,600 seconds (approximately 0.2778 m/s)."
  },
  aboutTargetUnit: {
    title: "Understanding the Speed of Light (c)",
    text: "The speed of light in vacuum ($c$) is a fundamental physical constant defining the maximum speed at which all conventional energy, matter, and information in the universe can travel. Standardized by the SI system in 1983, $c$ is exactly 299,792,458 m/s."
  },
  relationship: "One speed of light (c) corresponds to exactly 1,079,252,848.8 kilometers per hour (approx. 1.079 billion km/h). Dividing any velocity in km/h by 1,079,252,848.8 yields its velocity expressed as a dimensionless fraction of c.",
  relationshipTitle: "Kilometer per Hour to Speed of Light Milestones",
  relationshipItems: [
    { label: "Highway Speed (100 km/h)", value: "9.2657 × 10⁻⁸ c" },
    { label: "Commercial Jet (900 km/h)", value: "8.3391 × 10⁻⁷ c" },
    { label: "Low Earth Orbit (27,600 km/h)", value: "2.5573 × 10⁻⁵ c (~0.0026% c)" },
    { label: "Solar Escape Speed (151,200 km/h)", value: "1.4010 × 10⁻⁴ c (~0.014% c)" },
    { label: "10% Speed of Light (0.1 c)", value: "107,925,284.88 km/h" }
  ],
  formula: {
    text: "Divide the speed in kilometers per hour by 1,079,252,848.8 (or multiply by 9.265669 × 10⁻¹⁰) to obtain the velocity as a fraction of light speed.",
    math: "c = \\frac{\\text{km/h}}{1,079,252,848.8}",
    subtext: "To convert from fractions of c back to kilometers per hour, multiply the value by 1,079,252,848.8."
  },
  formulaTitle: "Kilometer per Hour to Speed of Light Formula",
  practicalTip: {
    title: "Scientific Notation for Terrestrial Speeds",
    text: "Because terrestrial velocities are minuscule relative to light speed, express results using scientific notation (e.g., 100 km/h = 9.27 × 10⁻⁸ c) to avoid unwieldy decimal places."
  },
  expertNote: {
    title: "Relativistic Thresholds",
    text: "In classical Newtonian mechanics, velocities add linearly. However, when an object exceeds approximately 0.1c (107.9 million km/h), relativistic effects like Lorentz contraction and time dilation become significant, requiring Einsteinian kinematics."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Voyager 1 Spacecraft Velocity (61,200 km/h)",
        subtitle: "Convert the interstellar cruise velocity of Voyager 1 (approximately 61,200 km/h) into a fraction of light speed.",
        steps: [
          "Identify initial velocity: 61,200 km/h.",
          "Apply conversion constant: c = 61,200 / 1,079,252,848.8.",
          "Calculate: 61,200 / 1,079,252,848.8 = 0.0000567058.",
          "Result: Voyager 1 travels at approximately 5.67 × 10⁻⁵ c (0.00567% the speed of light)."
        ]
      },
      {
        title: "Example 2: Relativistic Particle Stream (500,000,000 km/h)",
        subtitle: "Convert a solar flare plasma ejection moving at 500,000,000 km/h into c.",
        steps: [
          "Identify velocity: 500,000,000 km/h.",
          "Apply formula: c = 500,000,000 / 1,079,252,848.8.",
          "Calculate: 500,000,000 / 1,079,252,848.8 = 0.46328.",
          "Result: The plasma stream travels at approximately 0.4633 c (46.33% of light speed)."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer per Hour to Speed of Light Reference Table",
    headers: ["Speed (km/h)", "Fraction of Light Speed (c)", "Percentage of c", "Physical Benchmark"],
    rows: [
      { fromVal: "100 km/h", toVal: "9.2657 × 10⁻⁸ c", extra: "0.00000927%", extra2: "Highway vehicle speed" },
      { fromVal: "1,000 km/h", toVal: "9.2657 × 10⁻⁷ c", extra: "0.00009266%", extra2: "Commercial passenger jet cruise" },
      { fromVal: "28,000 km/h", toVal: "2.5944 × 10⁻⁵ c", extra: "0.002594%", extra2: "International Space Station orbit" },
      { fromVal: "100,000 km/h", toVal: "9.2657 × 10⁻⁵ c", extra: "0.009266%", extra2: "Earth orbital speed around the Sun" },
      { fromVal: "1,000,000 km/h", toVal: "0.0009266 c", extra: "0.09266%", extra2: "Solar wind average velocity" },
      { fromVal: "10,000,000 km/h", toVal: "0.009266 c", extra: "0.9266%", extra2: "Fast coronal mass ejection" },
      { fromVal: "107,925,285 km/h", toVal: "0.1000 c", extra: "10.00%", extra2: "Relativistic mechanics threshold" },
      { fromVal: "539,626,424 km/h", toVal: "0.5000 c", extra: "50.00%", extra2: "Half the speed of light" },
      { fromVal: "1,079,252,849 km/h", toVal: "1.0000 c", extra: "100.00%", extra2: "Vacuum speed of light (exact c)" }
    ]
  },
  applications: {
    title: "Key Scientific & Engineering Applications",
    items: [
      {
        title: "High-Energy Particle Physics & Synchrotrons",
        text: "In facilities like CERN's Large Hadron Collider, protons accelerated across magnetic rings reach velocities exceeding 0.99999999 c, requiring conversion between beam telemetry and relativistic kinematic factors."
      },
      {
        title: "Astrophysics & Deep-Space Exploration",
        text: "Interstellar mission planners and astrophysicists studying pulsar jets and supernova remnants convert mega-kilometer velocities into fractions of light speed to model cosmic expansion and Doppler blueshifts."
      },
      {
        title: "Satellite Navigation & GPS Clock Corrections",
        text: "GPS satellites traveling at approximately 14,000 km/h experience both special relativistic time dilation (slowing clocks) and general relativistic gravitational blue-shifting, calculated via c ratios."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing speed of light in meters per second (299,792,458 m/s) with kilometers per hour (1,079,252,848.8 km/h).",
      "Using classical kinetic energy ($E_k = \\frac{1}{2}mv^2$) instead of relativistic energy ($E = \\gamma mc^2$) for speeds above 0.1c.",
      "Omitting negative exponents when writing scientific notation for everyday terrestrial speeds."
    ]
  },
  faqs: [
    {
      question: "How do you convert km/h to the speed of light (c)?",
      answer: "Divide the speed in km/h by 1,079,252,848.8 (the exact number of kilometers light travels in one hour in a vacuum)."
    },
    {
      question: "How fast is the speed of light in km/h?",
      answer: "The speed of light in a vacuum is exactly 1,079,252,848.8 kilometers per hour (approximately 1.079 billion km/h or 670.6 million mph)."
    },
    {
      question: "What fraction of light speed is 100 km/h?",
      answer: "100 km/h equals approximately 9.2657 × 10⁻⁸ c, which is less than one ten-millionth of the speed of light."
    },
    {
      question: "What is the orbital speed of the Space Station in terms of c?",
      answer: "The International Space Station travels at about 27,600 km/h, which is approximately 2.56 × 10⁻⁵ c (around 0.00256% the speed of light)."
    },
    {
      question: "How fast is 10% of the speed of light in km/h?",
      answer: "10% of light speed (0.1c) equals approximately 107,925,285 km/h (around 29,979 km/s)."
    },
    {
      question: "Does light travel at 1,079,252,849 km/h in all materials?",
      answer: "No. The speed of light c refers to light moving through a vacuum. In dense media like water or glass, light slows down due to the medium's refractive index."
    },
    {
      question: "Can any physical object with mass reach 1.0 c?",
      answer: "According to special relativity, accelerating an object with invariant rest mass to 1.0 c would require infinite energy, making 1.0 c an unattainable asymptote for massive bodies."
    },
    {
      question: "How do you convert fractions of c back to km/h?",
      answer: "Multiply the fraction of c by 1,079,252,848.8 (e.g., 0.05 c × 1,079,252,848.8 = 53,962,642.44 km/h)."
    }
  ],
  relatedList: [
    { label: "Meter per Second to Speed of Light", from: "meter-per-second", to: "speed-of-light" },
    { label: "Mile per Hour to Speed of Light", from: "mile-per-hour", to: "speed-of-light" },
    { label: "Kilometer per Hour to Mach", from: "kilometer-per-hour", to: "mach" }
  ],
  references: [
    "BIPM - SI Brochure: Fundamental Physical Constants and the Definition of the Metre",
    "CODATA - Recommended Values of the Fundamental Physical Constants: Speed of Light in Vacuum"
  ]
};
