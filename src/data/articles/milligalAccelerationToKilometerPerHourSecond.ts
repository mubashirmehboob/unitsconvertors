import { CustomArticleData } from "./types";

export const milligalAccelerationToKilometerPerHourSecond: CustomArticleData = {
  fromUnitId: "milligal-acceleration",
  toUnitId: "kilometer-per-hour-second",
  seoTitle: "Milligal to KM/h/s Converter (mGal to km/h/s) | UnitsConvertors.com",
  metaDescription: "Convert milligal (mGal) to kilometers per hour per second (km/h/s) with exact acceleration formulas, trackbed dynamics, maglev examples, and tables.",
  h1: "Milligal to KM/h/s Converter",
  introduction: [
    "The milligal (symbol: mGal) and the kilometer per hour per second (km/h/s) represent acceleration across micro-scale geodetic physics and macro-scale railway transport dynamics. Rooted in the centimetre-gram-second (CGS) system, the gal represents 1 cm/s², with the milligal defining one-thousandth of a gal (10⁻³ Gal or 10⁻⁵ m/s²). The kilometer per hour per second quantifies the rate of speed increase or decrease in kilometers per hour gained or lost each second, commonly used across European, Asian, and international railway engineering.",
    "Bridging milligals and km/h/s is essential in precision rail track geometry inspection, magnetic levitation (maglev) active suspension control, and seismic warning sensor calibration for high-speed rail lines. Modern track recording cars (such as the French TGV Iris 320 or Japanese Doctor Yellow) log micro-vibrations and rail cant irregularities with accelerometers sensitive to milligal levels. Converting these low-frequency acceleration signals into km/h/s allows vehicle dynamics engineers to predict how trackbed irregularities affect train speed regulation and passenger ride comfort.",
    "This engineering guide explains the exact mathematical derivation connecting the milligal to km/h/s, provides step-by-step worked transit calculations, supplies reference tables, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert milligal (mGal) to kilometers per hour per second (km/h/s), multiply by exactly 0.000036 (3.6 × 10⁻⁵), or divide by 27,777.78. For example, a trackbed vibration of 5,000 mGal (5 Gal) equals exactly 0.18 km/h/s.",
    formulaDisplay: "\\text{km/h/s} = \\text{mGal} \\times 0.000036 = \\frac{\\text{mGal} \\times 3.6}{100000}",
    subtext: "0.000036 is an exact conversion factor (1 mGal = 10⁻⁵ m/s² and 1 m/s² = 3.6 km/h/s)."
  },
  aboutSourceUnit: {
    title: "Understanding the Milligal (mGal)",
    text: "The milligal (symbol: mGal) is one-thousandth of a gal (10⁻³ Gal = 10⁻⁵ m/s² = 10 µm/s²). Primarily used in geodesy and gravimetry to measure localized variations in Earth's gravitational pull, it also serves as a sensitive unit for measuring low-amplitude vibrations and structural micro-tremors."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilometer per Hour per Second (km/h/s)",
    text: "The kilometer per hour per second (symbol: km/h/s) measures rate of velocity change in terms of kilometers per hour per second of elapsed time. Widely used in railway engineering and automotive dynamics, 1 km/h/s equals exactly 5/18 m/s² (~0.2778 m/s² or 27,778 mGal)."
  },
  relationship: "The relationship between milligal and km/h/s is derived directly from metric definitions. 1 mGal = 10⁻⁵ m/s². Because 1 m/s² equals 3.6 km/h/s, multiplying 10⁻⁵ by 3.6 gives exactly 0.000036 km/h/s (3.6 × 10⁻⁵ km/h/s) per milligal. Inversely, 1 km/h/s contains exactly 100,000 / 3.6 = 27,777.7777... mGal (250,000 / 9 mGal).",
  relationshipTitle: "Milligal to KM/h/s Exact Conversion Equivalents",
  relationshipItems: [
    { label: "1 mGal", value: "0.000036 km/h/s (Exact factor 3.6 × 10⁻⁵)" },
    { label: "100 mGal", value: "0.003600 km/h/s (Micro-vibration threshold on railway viaducts)" },
    { label: "1,000 mGal", value: "0.036000 km/h/s (Exact 1.0 Gal equivalence)" },
    { label: "10,000 mGal", value: "0.360000 km/h/s (Elevator ride vibration limit, 0.1 m/s²)" },
    { label: "27,777.78 mGal", value: "1.000000 km/h/s (Exact 1.0 km/h/s benchmark)" },
    { label: "100,000 mGal", value: "3.600000 km/h/s (Exact 1.0 m/s² benchmark)" },
    { label: "980,665 mGal", value: "35.303940 km/h/s (Standard 1.0 g terrestrial gravity)" }
  ],
  formula: {
    text: "Multiply the acceleration in milligal by 0.000036 (or multiply by 36 and divide by 1,000,000) to calculate kilometers per hour per second.",
    math: "a_{(\\text{km/h/s})} = a_{(\\text{mGal})} \\times 0.000036 = \\frac{a_{(\\text{mGal})} \\times 3.6}{100000}",
    subtext: "0.000036 is an exact conversion factor derived from (10⁻⁵ m/s² × 3,600 s / 1,000 m)."
  },
  formulaTitle: "Milligal to KM/h/s Conversion Formula",
  practicalTip: {
    title: "Mental Calculation Shortcut",
    text: "To convert mGal to km/h/s, multiply the number by 36 and move the decimal point six places to the left. For example, for 50,000 mGal: 50,000 × 36 = 1,800,000; shifting six decimal places gives exactly 1.8 km/h/s."
  },
  expertNote: {
    title: "Maglev Active Levitation and Micro-Jerk Mitigation",
    text: "High-speed magnetic levitation trains (such as the Shanghai Transrapid and the SCMaglev L0 series) use electromagnetic gap sensors and accelerometers sampling at kilohertz rates. Gap disturbances of tens to hundreds of milligals are translated into km/h/s velocity decay profiles in the active suspension control algorithms to maintain a steady 10 mm levitation gap at 500 km/h."
  },
  examples: {
    title: "Step-by-Step Transit Dynamics Calculations",
    items: [
      {
        title: "Example 1: High-Speed Track Inspection Car Telemetry",
        subtitle: "A laser track geometry inspection car detects a vertical acceleration ripple of 2,500 mGal over a bridge expansion joint. What is this acceleration in km/h/s?",
        steps: [
          "Identify the measured value: a = 2,500 mGal.",
          "Apply the exact conversion formula: a(km/h/s) = a(mGal) × 0.000036.",
          "Multiply: 2,500 × 0.000036 = 0.09 km/h/s.",
          "Result: 2,500 mGal equals exactly 0.09 km/h/s (0.025 m/s²)."
        ]
      },
      {
        title: "Example 2: Automated Metro Platform Vibration Limit",
        subtitle: "An automated subway tunnel specifies that structural vibrations transmitted to nearby sensitive laboratory facilities must not exceed 15,000 mGal. Express this limit in km/h/s.",
        steps: [
          "State the acceleration limit: a = 15,000 mGal.",
          "Multiply by 0.000036: 15,000 × 0.000036 = 0.54 km/h/s.",
          "Result: 15,000 mGal corresponds to exactly 0.54 km/h/s (0.15 m/s²)."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Milligal to KM/h/s",
    headers: ["Acceleration (mGal)", "Acceleration (km/h/s)", "Vibration & Rail Dynamic Context"],
    rows: [
      { fromVal: "10.0", toVal: "0.00036", extra: "Ambient foundation seismic micro-tremor" },
      { fromVal: "100.0", toVal: "0.00360", extra: "Sensitive laboratory vibration criterion (VC-A)" },
      { fromVal: "500.0", toVal: "0.01800", extra: "High-speed track recording car ride quality target" },
      { fromVal: "1,000.0", toVal: "0.03600", extra: "Exact 1.0 Gal equivalence" },
      { fromVal: "5,000.0", toVal: "0.18000", extra: "Subtle vehicle body roll or track curve transition" },
      { fromVal: "10,000.0", toVal: "0.36000", extra: "Elevator passenger comfortable start/stop acceleration" },
      { fromVal: "27,777.78", toVal: "1.00000", extra: "Exact 1.0 km/h/s benchmark definition" },
      { fromVal: "50,000.0", toVal: "1.80000", extra: "City transit bus service braking rate (0.50 m/s²)" },
      { fromVal: "100,000.0", toVal: "3.60000", extra: "Nominal rapid transit acceleration (1.0 m/s²)" },
      { fromVal: "980,665.0", toVal: "35.30394", extra: "Standard nominal Earth surface gravity (1.0 g)" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Track Geometry Car Data Processing",
        text: "Rail infrastructure managers convert accelerometer outputs from track recording cars from milligals into km/h/s to calculate dynamic ride quality indices (EN 12299 standard)."
      },
      {
        title: "Maglev Active Electromagnetic Suspension (EMS)",
        text: "Control engineers convert accelerometer gap sensor signals from mGal into km/h/s to compute current commands for magnetic guidance and levitation coils."
      },
      {
        title: "Semiconductor Cleanroom Transit Design",
        text: "Automated Material Handling Systems (AMHS) transporting 300 mm silicon wafers monitor cart accelerations in mGal and convert to km/h/s to prevent wafer micro-cracking."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing the conversion factor 0.036 (Gal) with 0.000036 (mGal): Because 1 mGal is 1/1,000th of a Gal, the conversion factor is 1,000 times smaller. Using 0.036 causes a 1,000-fold error.",
      "Dividing by 0.000036 instead of multiplying: To convert mGal to km/h/s, you must multiply by 0.000036. Dividing is used only when converting km/h/s back to mGal.",
      "Confusing km/h/s with meters per second squared: 1 km/h/s equals ~0.278 m/s², while 1 m/s² equals 3.6 km/h/s.",
      "Numerical underflow with small values: When processing micro-vibration datasets in mGal, use double-precision floating point numbers to avoid truncation errors."
    ]
  },
  faqs: [
    {
      question: "How do you convert milligal (mGal) to km/h/s?",
      answer: "Multiply the milligal value by 0.000036 (or multiply by 3.6 and divide by 100,000). For example, 50,000 mGal × 0.000036 = 1.8 km/h/s."
    },
    {
      question: "What is 1 mGal in km/h/s?",
      answer: "1 mGal equals exactly 0.000036 kilometers per hour per second (3.6 × 10⁻⁵ km/h/s)."
    },
    {
      question: "How do you convert km/h/s back to milligal?",
      answer: "Divide the km/h/s value by 0.000036, or multiply by 27,777.78 (250,000/9). For example, 3.6 km/h/s ÷ 0.000036 = 100,000 mGal."
    },
    {
      question: "Why does 1 mGal equal exactly 0.000036 km/h/s?",
      answer: "1 mGal is defined as 10⁻⁵ m/s² (0.00001 m/s²). Because 1 m/s equals 3.6 km/h, 10⁻⁵ × 3.6 = 0.000036 km/h/s exactly."
    },
    {
      question: "How many milligals are in 1 km/h/s?",
      answer: "There are exactly 27,777.78 milligals (250,000 / 9 mGal) in 1 km/h/s."
    },
    {
      question: "How many km/h/s is 1 Gal?",
      answer: "1 Gal (1,000 mGal) equals exactly 0.036 km/h/s."
    },
    {
      question: "What does an acceleration of 1 km/h/s mean in transit systems?",
      answer: "1 km/h/s means a train or vehicle increases its speed by 1 kilometer per hour every second. This corresponds to approximately 27,778 mGal (or 0.278 m/s²)."
    },
    {
      question: "How does Earth's gravity compare to km/h/s?",
      answer: "Standard Earth gravity of 980,665 mGal (9.80665 m/s²) equals approximately 35.304 km/h/s."
    },
    {
      question: "Where is the milligal to km/h/s conversion used?",
      answer: "It is used in railway engineering, maglev train dynamics, precision ride quality monitoring, and seismic early warning sensor integration."
    }
  ],
  relatedList: [
    { label: "Milligal to Meter/sec²", from: "milligal-acceleration", to: "meter-per-second-squared" },
    { label: "Gal to KM/h/s", from: "gal-acceleration", to: "kilometer-per-hour-second" },
    { label: "Milligal to MPH/s", from: "milligal-acceleration", to: "mile-per-hour-second" },
    { label: "Milligal to Gal", from: "milligal-acceleration", to: "gal-acceleration" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "European Standard EN 12299: Railway applications - Ride comfort for passengers",
    "International Union of Railways (UIC) - Track Geometry Measurement Guidelines",
    "ISO 2631-1: Mechanical vibration and shock - Evaluation of human exposure to whole-body vibration"
  ]
};
