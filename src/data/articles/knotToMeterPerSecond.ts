import { CustomArticleData } from "./types";

export const knotToMeterPerSecond: CustomArticleData = {
  fromUnitId: "knot",
  toUnitId: "meter-per-second",
  seoTitle: "Knot to Meter per Second Converter (kn to m/s)",
  metaDescription: "Convert knots to meters per second (kn to m/s) with exact nautical accuracy. Exact 1852/3600 formula, wind speed Beaufort tables, and worked examples.",
  h1: "Knot to Meter per Second Converter",
  introduction: [
    "Converting knots to meters per second translates maritime navigation speeds, ocean current measurements, and aviation airspeed indicators into the fundamental SI base-derived unit of velocity required for hydrodynamic simulation, aerodynamic research, and international scientific reporting. While sea vessels and aircraft operate using knots, physical wave mechanics and atmospheric turbulence models require velocities in meters per second.",
    "By international hydrographic agreement, one international nautical mile is defined as exactly 1,852 meters. Because an hour contains 3,600 seconds, dividing 1,852 by 3,600 yields the exact rational conversion fraction of $\\frac{463}{900}$ (or approximately 0.514444 m/s). Therefore, one knot equals approximately 0.514444 meters per second, while one meter per second equals approximately 1.943844 knots. To convert knots to meters per second, multiply the speed by $\\frac{463}{900}$ (or divide by 1.943844). This guide details the exact conversion mathematics, step-by-step calculation examples, maritime engineering applications, and comprehensive speed tables."
  ],
  quickAnswer: {
    text: "To convert knots to meters per second, multiply the speed in knots by 1,852/3,600 (approximately 0.514444) or divide by 1.943844. For example, 20 knots equals approximately 10.29 m/s.",
    formulaDisplay: "m/s = kn × (1,852 / 3,600)",
    subtext: "Exact ratio: 1 knot = 1,852 m / 3,600 s = 463/900 m/s ≈ 0.514444 m/s.\n1 m/s = 3,600 / 1,852 kn ≈ 1.943844 kn."
  },
  aboutSourceUnit: {
    title: "Understanding the Knot (kn)",
    text: "The knot (kn or kt) is a specialized unit of speed equal to one international nautical mile per hour (1.852 km/h). Standardized in 1929, it remains the universal speed unit for worldwide maritime voyages, naval operations, and civil aviation airspeeds."
  },
  aboutTargetUnit: {
    title: "Understanding the Meter per Second (m/s)",
    text: "The meter per second (m/s) is the coherent SI unit of velocity and speed, measuring the distance in meters traversed in one second. It forms the foundational velocity term in fluid dynamics equations, Navier-Stokes simulations, and kinetic energy formulas."
  },
  relationship: "One knot equals exactly 463/900 meters per second (approx. 0.514444 m/s), and one meter per second equals approximately 1.943844 knots. Multiplying any knot value by 0.514444 converts it directly into meters per second.",
  relationshipTitle: "Knot to Meter per Second Comparison Milestones",
  relationshipItems: [
    { label: "Light Breeze (6 kn)", value: "3.0867 m/s" },
    { label: "Moderate Breeze (15 kn)", value: "7.7167 m/s" },
    { label: "Gale Force Wind (34 kn)", value: "17.4911 m/s" },
    { label: "Hurricane Force (64 kn)", value: "32.9244 m/s" },
    { label: "Aviation 100 kn Benchmark", value: "51.4444 m/s" }
  ],
  formula: {
    text: "Multiply the speed in knots by the exact fraction 1,852/3,600 (or 0.5144444) to calculate meters per second.",
    math: "\\text{m/s} = \\text{kn} \\times \\frac{1,852}{3,600} = \\text{kn} \\times \\frac{463}{900} \\approx \\text{kn} \\times 0.514444",
    subtext: "To convert meters per second back to knots, multiply the m/s value by 1.943844 (or divide by 0.514444)."
  },
  formulaTitle: "Knot to Meter per Second Calculation Formula",
  practicalTip: {
    title: "Quick Half-Rule Mental Approximation",
    text: "For a quick estimate: divide the knot value in half (e.g., 20 knots ÷ 2 = 10 m/s, very close to the true 10.29 m/s; 50 knots ÷ 2 = 25 m/s vs true 25.72 m/s)."
  },
  expertNote: {
    title: "Hydrodynamic Wave Resistance & Froude Number",
    text: "Naval architects convert vessel speed from knots to m/s when computing the dimensionless Froude number ($Fn = v / \\sqrt{gL}$), which governs wave-making resistance on hull designs."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Cargo Vessel Cruising Speed (22 knots)",
        subtitle: "Convert a container ship speed of 22 knots into meters per second for propulsion power calculations.",
        steps: [
          "State starting velocity: 22 knots.",
          "Apply conversion constant: m/s = 22 × (1,852 / 3,600).",
          "Calculate: (22 × 1,852) / 3,600 = 40,744 / 3,600 = 11.3178.",
          "Result: 22 knots equals approximately 11.32 m/s."
        ]
      },
      {
        title: "Example 2: Severe Storm Wind Gust (50 knots)",
        subtitle: "Convert a marine storm wind gust of 50 knots into m/s for coastal structural engineering load modeling.",
        steps: [
          "Identify wind speed: 50 knots.",
          "Apply formula: m/s = 50 × (463 / 900).",
          "Calculate: (50 × 463) / 900 = 23,150 / 900 = 25.7222.",
          "Result: 50 knots equals approximately 25.72 m/s."
        ]
      }
    ]
  },
  table: {
    title: "Knot to Meter per Second Reference Table",
    headers: ["Speed (kn)", "Speed (m/s)", "Speed (km/h)", "Beaufort Scale / Maritime Context"],
    rows: [
      { fromVal: "1 kn", toVal: "0.5144 m/s", extra: "1.8520 km/h", extra2: "Light air drift" },
      { fromVal: "5 kn", toVal: "2.5722 m/s", extra: "9.2600 km/h", extra2: "Harbor maneuvering speed" },
      { fromVal: "10 kn", toVal: "5.1444 m/s", extra: "18.5200 km/h", extra2: "Gentle sailing breeze" },
      { fromVal: "15 kn", toVal: "7.7167 m/s", extra: "27.7800 km/h", extra2: "Moderate breeze (Beaufort 4)" },
      { fromVal: "20 kn", toVal: "10.2889 m/s", extra: "37.0400 km/h", extra2: "Fresh breeze (Container ship cruise)" },
      { fromVal: "30 kn", toVal: "15.4333 m/s", extra: "55.5600 km/h", extra2: "Near gale / Fast ferry cruise" },
      { fromVal: "40 kn", toVal: "20.5778 m/s", extra: "74.0800 km/h", extra2: "Gale force storm winds" },
      { fromVal: "50 kn", toVal: "25.7222 m/s", extra: "92.6000 km/h", extra2: "Storm force / High-speed craft" },
      { fromVal: "64 kn", toVal: "32.9244 m/s", extra: "118.5280 km/h", extra2: "Hurricane-force wind threshold" },
      { fromVal: "100 kn", toVal: "51.4444 m/s", extra: "185.2000 km/h", extra2: "Aviation approach speed" }
    ]
  },
  applications: {
    title: "Primary Oceanographic & Aerospace Use Cases",
    items: [
      {
        title: "Naval Architecture & Hydrodynamics",
        text: "Tow tank facilities test scaled ship hull models by converting full-scale vessel knot velocities into m/s to calculate dynamic Reynolds numbers and boundary layer skin friction."
      },
      {
        title: "Oceanography & Tidal Current Profiling",
        text: "Acoustic Doppler Current Profilers (ADCP) measure sub-surface ocean stream velocities in m/s, which are converted to knots for maritime navigation publications."
      },
      {
        title: "Wind Turbine Energy Production",
        text: "Offshore wind farm operators convert marine anemometer readings from knots into m/s to calculate wind power density ($P = \\frac{1}{2}\\rho A v^3$)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 0.514444 instead of multiplying when converting from knots to m/s.",
      "Using the statute mile ratio (1,609.344 m) rather than the international nautical mile (1,852 m).",
      "Confusing knot velocity with distance (nautical miles)."
    ]
  },
  faqs: [
    {
      question: "How do you convert knots to meters per second?",
      answer: "Multiply the speed in knots by 1,852/3,600 (or approximately 0.514444)."
    },
    {
      question: "What is 1 knot in meters per second?",
      answer: "1 knot equals exactly 1,852 / 3,600 = 463/900 ≈ 0.514444 m/s."
    },
    {
      question: "What is 20 knots in m/s?",
      answer: "20 knots equals approximately 10.29 m/s (20 × 0.514444 = 10.2889 m/s)."
    },
    {
      question: "How do you convert m/s back to knots?",
      answer: "Multiply the speed in m/s by 1.943844 (or divide by 0.514444)."
    },
    {
      question: "What is 10 m/s in knots?",
      answer: "10 m/s equals approximately 19.44 knots (10 × 1.943844 = 19.4384 kn)."
    },
    {
      question: "What is hurricane-force wind speed in m/s?",
      answer: "Hurricane-force wind speed begins at 64 knots, which corresponds to approximately 32.92 m/s (118.53 km/h or 73.65 mph)."
    },
    {
      question: "What is 50 knots in m/s?",
      answer: "50 knots equals approximately 25.72 meters per second."
    },
    {
      question: "Why is 1 nautical mile exactly 1,852 meters?",
      answer: "In 1929, the First International Extraordinary Hydrographic Conference adopted 1,852 meters as the standardized international nautical mile, closely matching one minute of arc of latitude."
    }
  ],
  relatedList: [
    { label: "Meter per Second to Knot", from: "meter-per-second", to: "knot" },
    { label: "Knot to Kilometer per Hour", from: "knot", to: "kilometer-per-hour" },
    { label: "Knot to Mile per Hour", from: "knot", to: "mile-per-hour" }
  ],
  references: [
    "International Hydrographic Organization (IHO): Standards for Nautical Measurements",
    "BIPM: The International System of Units (SI Brochure)"
  ]
};
