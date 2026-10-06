import { CustomArticleData } from "./types";

export const milligalAccelerationToMilePerHourSecond: CustomArticleData = {
  fromUnitId: "milligal-acceleration",
  toUnitId: "mile-per-hour-second",
  seoTitle: "Milligal to MPH/s Converter (mGal to mph/s) | UnitsConvertors.com",
  metaDescription: "Convert milligal (mGal) to miles per hour per second (mph/s) with exact acceleration formulas, transit dynamics examples, conversion tables, and calculations.",
  h1: "Milligal to MPH/s Converter",
  introduction: [
    "The milligal (symbol: mGal) and the mile per hour per second (mph/s) measure acceleration across geophysical research and American transportation engineering. The gal represents 1 cm/s² in the metric centimetre-gram-second (CGS) system, with the milligal defining one-thousandth of a gal (10⁻³ Gal or 10⁻⁵ m/s²). The mile per hour per second is the customary American unit measuring the rate of speed gained or lost each second, standard across United States railway operations, automated people movers, and automotive testing.",
    "Converting from milligals to miles per hour per second is vital when precision structural health monitoring, tunnel seismic arrays, and trackbed vibration sensors interface with American rail dispatch and automated train control (ATC) systems. Track geometry cars inspecting US passenger corridors (such as Amtrak's Northeast Corridor) log micro-vibrations in milligals to detect subtle rail foundation degradation. Converting these readings into mph/s allows train control engineers to model how rail irregularities impact vehicle acceleration, braking profiles, and passenger comfort.",
    "This technical guide details the mathematical derivation connecting the milligal to mph/s, illustrates transit and vehicle dynamics calculations step by step, provides comprehensive reference tables, and answers common engineering questions."
  ],
  quickAnswer: {
    text: "To convert milligal (mGal) to miles per hour per second (mph/s), divide by 44,704 (or multiply by approximately 2.23694 × 10⁻⁵). For example, a trackbed vibration of 10,000 mGal (10 Gal) equals approximately 0.22369 mph/s.",
    formulaDisplay: "\\text{mph/s} = \\frac{\\text{mGal}}{44704} = \\text{mGal} \\times 2.23694 \\times 10^{-5}",
    subtext: "1 mph/s equals exactly 44,704 mGal (0.44704 m/s²). 1 mGal equals approximately 0.0000223694 mph/s."
  },
  aboutSourceUnit: {
    title: "Understanding the Milligal (mGal)",
    text: "The milligal (symbol: mGal) is the standard geodetic unit for measuring variations in Earth's gravitational acceleration. Equal to 10⁻³ Gal (10⁻⁵ m/s²), it represents roughly one part per million of standard terrestrial gravity. It also serves as a sensitive unit for low-frequency structural vibration and seismic micro-tremor logging."
  },
  aboutTargetUnit: {
    title: "Understanding the Mile per Hour per Second (mph/s)",
    text: "The mile per hour per second (symbol: mph/s) is the customary American acceleration unit. An acceleration of 1 mph/s denotes an increase in speed of one mile per hour for each elapsed second. Defined by the international foot and hour, 1 mph/s equals exactly 0.44704 m/s² (or 44,704 mGal)."
  },
  relationship: "The relationship between milligal and mph/s is based on the international definition of the mile (1,609.344 meters) and the hour (3,600 seconds). One mph equals 1,609.344 / 3,600 = 0.44704 m/s. Because 1 m/s² = 100,000 mGal, 1 mph/s equals exactly 0.44704 × 100,000 = 44,704 mGal (an exact integer). Inversely, 1 mGal equals 1 / 44,704 mph/s ≈ 0.000022369363 mph/s.",
  relationshipTitle: "Milligal to MPH/s Exact Dimensional Equivalents",
  relationshipItems: [
    { label: "1 mGal", value: "0.00002237 mph/s (Exact factor 1 / 44,704)" },
    { label: "1,000 mGal", value: "0.02236936 mph/s (Exact 1.0 Gal equivalence)" },
    { label: "10,000 mGal", value: "0.22369363 mph/s (Light perceptible elevator vibration)" },
    { label: "44,704 mGal", value: "1.00000000 mph/s (Exact 1.0 mph/s benchmark)" },
    { label: "100,000 mGal", value: "2.23693629 mph/s (Exact 1.0 m/s² benchmark)" },
    { label: "134,112 mGal", value: "3.00000000 mph/s (Rapid transit emergency braking rate)" },
    { label: "980,665 mGal", value: "21.93685128 mph/s (Standard Earth gravity, 1.0 g)" }
  ],
  formula: {
    text: "Divide the acceleration in milligal by 44,704 (or multiply by approximately 2.2369363 × 10⁻⁵) to obtain miles per hour per second.",
    math: "a_{(\\text{mph/s})} = \\frac{a_{(\\text{mGal})}}{44704} = a_{(\\text{mGal})} \\times 2.2369363 \\times 10^{-5}",
    subtext: "44,704 is an exact integer constant derived from (1,609.344 m/mi ÷ 3,600 s/h × 100,000 mGal/(m/s²))."
  },
  formulaTitle: "Milligal to MPH/s Conversion Formula",
  practicalTip: {
    title: "Exact Fraction Shortcut",
    text: "For high-precision computer code, use the exact rational fraction (mGal / 44,704). For quick mental estimates in the field, remember that 45,000 mGal is approximately 1.0 mph/s (with an error under 0.7%)."
  },
  expertNote: {
    title: "Automated Guideway Transit (AGT) Micro-Jerk Limits",
    text: "In airport automated people movers and rubber-tired AGT systems, passenger ride quality specifications (such as ASCE 21) set strict limits on jerk and low-frequency vibrations. Micro-accelerometer telemetry recorded in milligals is scaled to mph/s to verify that lateral platform transitions stay below the comfort threshold of 0.10 mph/s (~4,470 mGal)."
  },
  examples: {
    title: "Step-by-Step Engineering Calculations",
    items: [
      {
        title: "Example 1: Commuter Rail Track Geometry Inspection",
        subtitle: "A laser-based track geometry car detects an irregular vertical trackbed impulse of 8,500 mGal along a ballasted track curve. Express this acceleration in mph/s.",
        steps: [
          "Identify the measured value: a = 8,500 mGal.",
          "Apply the conversion formula: a(mph/s) = a(mGal) ÷ 44,704.",
          "Compute: 8,500 ÷ 44,704 = 0.190140 mph/s.",
          "Result: 8,500 mGal equals approximately 0.1901 mph/s (or ~0.085 m/s²)."
        ]
      },
      {
        title: "Example 2: Seismic Tunnel Sensor Alarm Threshold",
        subtitle: "A subway tunnel seismic monitoring station sets a pre-trip warning threshold at 22,352 mGal (~22.35 Gal). What is this threshold in miles per hour per second?",
        steps: [
          "State the acceleration threshold: a = 22,352 mGal.",
          "Divide by 44,704: 22,352 ÷ 44,704 = 0.500000 mph/s.",
          "Result: 22,352 mGal corresponds to exactly 0.50 mph/s."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Milligal to MPH/s",
    headers: ["Acceleration (mGal)", "Acceleration (mph/s)", "Engineering & Transit Context"],
    rows: [
      { fromVal: "100.0", toVal: "0.00224", extra: "Sensitive laboratory structural vibration limit" },
      { fromVal: "1,000.0", toVal: "0.02237", extra: "Exact 1.0 Gal equivalence" },
      { fromVal: "5,000.0", toVal: "0.11185", extra: "Subtle vehicle body roll or gentle curve transition" },
      { fromVal: "10,000.0", toVal: "0.22369", extra: "Elevator comfortable start/stop acceleration" },
      { fromVal: "22,352.0", toVal: "0.50000", extra: "Exact 0.5 mph/s transit acceleration rate" },
      { fromVal: "44,704.0", toVal: "1.00000", extra: "Exact 1.0 mph/s benchmark definition" },
      { fromVal: "89,408.0", toVal: "2.00000", extra: "Exact 2.0 mph/s rapid transit acceleration" },
      { fromVal: "100,000.0", toVal: "2.23694", extra: "Exact 1.0 m/s² benchmark" },
      { fromVal: "134,112.0", toVal: "3.00000", extra: "Exact 3.0 mph/s emergency subway brake rate" },
      { fromVal: "980,665.0", toVal: "21.93685", extra: "Standard nominal Earth surface gravity (1.0 g)" }
    ]
  },
  applications: {
    title: "Real-World Engineering and Transit Applications",
    items: [
      {
        title: "Rail Transit Vehicle Dynamics and Ride Quality",
        text: "US transit authorities convert micro-accelerometer logs from mGal into mph/s to verify passenger comfort compliance according to ASCE 21 Automated People Mover standards."
      },
      {
        title: "Tunnel and Bridge Structural Health Monitoring",
        text: "Seismic monitoring networks on major suspension bridges and transit tunnels log low-frequency vibrations in mGal and convert to mph/s to evaluate structural fatigue."
      },
      {
        title: "High-Rise Elevator Motion Control",
        text: "Elevator ride quality analysis systems convert acceleration profiles into mph/s to optimize variable-frequency drive jerk profiles and reduce passenger vertigo."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 44,704 instead of dividing: Multiplying converts mph/s to mGal. To convert mGal to mph/s, you must divide by 44,704.",
      "Confusing mGal with Gal: 1 mph/s equals 44.704 Gal, but 44,704 mGal. Forgetting the factor of 1,000 produces an enormous 1,000-fold scaling error.",
      "Confusing mph/s with km/h/s: 1 mph/s equals 1.609344 km/h/s. Using 0.000036 instead of 1 / 44,704 results in a 37.9% discrepancy.",
      "Loss of numerical precision: Because 1 mGal is on the order of 10⁻⁵ mph/s, use double-precision floating point variables to prevent rounding artifacts."
    ]
  },
  faqs: [
    {
      question: "How do you convert milligal (mGal) to mph/s?",
      answer: "Divide the milligal value by 44,704, or multiply by approximately 2.2369363 × 10⁻⁵. For example, 22,352 mGal ÷ 44,704 = 0.50 mph/s."
    },
    {
      question: "What is 1 mGal in mph/s?",
      answer: "1 mGal equals approximately 0.0000223694 miles per hour per second (2.23694 × 10⁻⁵ mph/s)."
    },
    {
      question: "How many milligals are in 1 mph/s?",
      answer: "There are exactly 44,704 milligals in 1 mph/s. This exact integer relationship comes from 0.44704 m/s² per mph/s multiplied by 100,000 mGal/(m/s²)."
    },
    {
      question: "How do you convert mph/s back to milligal?",
      answer: "Multiply the mph/s value by 44,704. For example, a 2.5 mph/s brake application equals 2.5 × 44,704 = 111,760 mGal."
    },
    {
      question: "Why is the conversion factor an exact integer 44,704?",
      answer: "The international mile is defined as exactly 1,609.344 meters, and one hour has 3,600 seconds. Dividing 1,609.344 by 3,600 gives exactly 0.44704 m/s². Multiplying by 100,000 mGal per m/s² yields exactly 44,704 mGal."
    },
    {
      question: "How many mph/s is 1 Gal?",
      answer: "1 Gal (1,000 mGal) equals 1,000 / 44,704 ≈ 0.0223694 mph/s."
    },
    {
      question: "What does an acceleration of 1 mph/s mean?",
      answer: "1 mph/s means a vehicle's speed increases by one mile per hour every second. In SI units, this equals exactly 0.44704 m/s²."
    },
    {
      question: "How does 1.0 g compare to mph/s?",
      answer: "Standard Earth gravity of 980,665 mGal (9.80665 m/s²) equals approximately 21.9369 mph/s (or ~32.174 ft/s²)."
    },
    {
      question: "Where is this conversion primarily utilized?",
      answer: "It is utilized across North American transit systems, railway track geometry car telemetry, civil structural health monitoring, and elevator ride comfort engineering."
    }
  ],
  relatedList: [
    { label: "Milligal to KM/h/s", from: "milligal-acceleration", to: "kilometer-per-hour-second" },
    { label: "Gal to MPH/s", from: "gal-acceleration", to: "mile-per-hour-second" },
    { label: "Milligal to Foot/sec²", from: "milligal-acceleration", to: "foot-per-second-squared" },
    { label: "Milligal to Meter/sec²", from: "milligal-acceleration", to: "meter-per-second-squared" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - Special Publication 811: Guide for the Use of the International System of Units",
    "American Society of Civil Engineers (ASCE) - ASCE 21: Automated People Mover Standards",
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "American Public Transportation Association (APTA) - Manual of Recommended Practice for Rail Transit Vehicle Engineering"
  ]
};
