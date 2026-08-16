import { CustomArticleData } from "./types";

export const footPerSecondSquaredToMilligalAcceleration: CustomArticleData = {
  fromUnitId: "foot-per-second-squared",
  toUnitId: "milligal-acceleration",
  seoTitle: "Foot/sec² to Milligal Converter (ft/s² to mGal)",
  metaDescription: "Convert feet per second squared to milligals (ft/s² to mGal) with exact geodetic constants, geophysical survey formulas, and worked examples.",
  h1: "Foot/sec² to Milligal Converter",
  introduction: [
    "The foot per second squared (ft/s²) and the milligal (symbol: mGal) represent engineering and high-precision geophysical scales of acceleration. While the foot per second squared is the core unit of acceleration across US customary aerospace and civil structural engineering, the milligal represents one-thousandth of a Gal (10⁻⁵ m/s² or 10 µm/s²), which is the standard unit for mapping regional and localized gravitational anomalies.",
    "Converting feet per second squared to milligals is common when integrating US seismic sensor networks with international geophysical databases, assessing micro-vibration in high-precision laboratory foundations, or processing airborne gravimetry data. Because 1 foot is defined as exactly 0.3048 meters and 1 mGal is 0.00001 m/s², an acceleration of 1 ft/s² equals exactly 30,480 mGal.",
    "This guide covers exact mathematical derivations, real-world geophysical survey calculation workflows, sensitivity reference tables, and answers to common gravimetric conversion questions."
  ],
  quickAnswer: {
    text: "To convert feet per second squared (ft/s²) to milligals (mGal), multiply the value by exactly 30,480. For example, a minor structural vibration of 0.001 ft/s² equals exactly 30.48 mGal.",
    formulaDisplay: "\\text{mGal} = \\text{ft/s}^2 \\times 30{,}480",
    subtext: "1 ft/s² is equal to exactly 30,480 mGal (derived from 0.3048 m/ft × 100,000 mGal/(m/s²))."
  },
  aboutSourceUnit: {
    title: "Understanding the Foot per Second Squared (ft/s²)",
    text: "The foot per second squared (symbol: ft/s² or ft/sec²) is the imperial and US customary unit of acceleration. Defined as an increase in speed of one foot per second every second (1 ft/s² = 0.3048 m/s²), it is widely utilized across North American structural engineering, aerodynamics, and propulsion testing."
  },
  aboutTargetUnit: {
    title: "Understanding the Milligal (mGal)",
    text: "The milligal (symbol: mGal) is a submultiple of the CGS acceleration unit Gal, equal to 10⁻³ Gal, 10⁻⁵ m/s², or approximately 3.28084 × 10⁻⁵ ft/s². It is universally employed in geophysics, petroleum reservoir characterization, and satellite geoid mapping to measure subtle variations in Earth's gravitational field."
  },
  relationship: "The exact relationship between feet per second squared and milligals derives directly from the international definition of the foot (0.3048 m) and the definition of the milligal (10⁻⁵ m/s²): 1 ft/s² = 0.3048 m/s² × 100,000 mGal/(m/s²) = 30,480 mGal exactly. Conversely, 1 mGal = 1 / 30,480 ft/s² ≈ 0.000032808399 ft/s².",
  relationshipTitle: "Micro-Gravimetric & Vibration Sensitivity Scale",
  relationshipItems: [
    { label: "0.0000328 ft/s²", value: "1 mGal (Subsurface density anomaly detection limit)" },
    { label: "0.0010000 ft/s²", value: "30.480 mGal (Precision laboratory floor micro-vibration)" },
    { label: "0.0328084 ft/s²", value: "1,000 mGal (1 Gal, gentle perceptible tremor)" },
    { label: "1.0000000 ft/s²", value: "30,480 mGal (Noticeable seismic ground shaking)" },
    { label: "32.174049 ft/s²", value: "980,665 mGal (Standard 1 g Earth gravity)" }
  ],
  formula: {
    text: "Multiply the acceleration in feet per second squared by 30,480 to obtain the value in milligals.",
    math: "a_{(\\text{mGal})} = a_{(\\text{ft/s}^2)} \\times 30{,}480",
    subtext: "30,480 is an exact conversion factor by definition (30.48 cm/ft × 1,000 mGal/Gal)."
  },
  formulaTitle: "ft/s² to mGal Conversion Formula",
  practicalTip: {
    title: "Quick Mental Calculation Rule",
    text: "To rapidly estimate mGal from ft/s², multiply by 30,000 and add roughly 1.5% (e.g., 0.01 ft/s² → 0.01 × 30,000 = 300; 300 + 4.8 = 304.8 mGal)."
  },
  expertNote: {
    title: "Airborne Gravimetry Filtering",
    text: "Airborne gravimeters mounted on survey aircraft measure total inertial acceleration in ft/s² or m/s² using high-grade inertial navigation systems (INS), subsequently filtering out aircraft dynamic accelerations to isolate subterranean gravity signals on the order of 1 to 5 mGal."
  },
  examples: {
    title: "Step-by-Step Gravimetry & Vibration Calculations",
    items: [
      {
        title: "Example 1: Semiconductor Fab Floor Vibration Analysis",
        subtitle: "A structural sensor on a cleanroom foundation measures a low-frequency vibration acceleration of 0.00045 ft/s². Convert this to milligals.",
        steps: [
          "Record the measured acceleration: a = 0.00045 ft/s².",
          "Multiply by the exact factor 30,480: 0.00045 × 30,480.",
          "Calculate: 0.00045 × 30,480 = 13.716.",
          "Result: 0.00045 ft/s² equals exactly 13.716 mGal."
        ]
      },
      {
        title: "Example 2: Regional Fault Line Gravity Anomaly",
        subtitle: "A converted gravity anomaly reading from a legacy US geological survey records a local disturbance of 0.0028 ft/s². Express this in milligals.",
        steps: [
          "Identify the disturbance value: a = 0.0028 ft/s².",
          "Multiply by 30,480: 0.0028 × 30,480.",
          "Calculate: 0.0028 × 30,480 = 85.344.",
          "Result: 0.0028 ft/s² corresponds to a gravity anomaly of 85.344 mGal."
        ]
      }
    ]
  },
  table: {
    title: "Quick Reference Conversion Table",
    headers: ["Input Value", "Converted Result", "Physical Context"],
    rows: [
      { fromVal: "0.00001", toVal: "0.3048", extra: "High-precision micro-gravimeter baseline" },
      { fromVal: "0.0001", toVal: "3.048", extra: "Typical local mineral ore anomaly" },
      { fromVal: "0.0005", toVal: "15.240", extra: "Sedimentary basin boundary anomaly" },
      { fromVal: "0.001", toVal: "30.480", extra: "Regional geological fault anomaly" },
      { fromVal: "0.01", toVal: "304.800", extra: "Major tectonic trench anomaly" },
      { fromVal: "0.1", toVal: "3,048.000", extra: "100 Gal equivalence" },
      { fromVal: "1.0", toVal: "30,480.000", extra: "1 ft/s² exact baseline" },
      { fromVal: "5.0", toVal: "152,400.000", extra: "Moderate seismic earthquake shaking" },
      { fromVal: "10.0", toVal: "304,800.000", extra: "Severe earthquake ground acceleration" },
      { fromVal: "32.174", toVal: "980,663.5", extra: "Standard 1 g terrestrial gravity (approx.)" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "Airborne Mineral & Hydrocarbon Exploration",
        text: "Exploration geophysicists convert aircraft inertial sensor readings from ft/s² into mGal anomaly profiles to identify mineralized deposits and oil traps."
      },
      {
        title: "Cleanroom & Metrology Facility Isolation",
        text: "Acoustic and structural vibration consultants convert foundation accelerations from ft/s² to mGal to ensure nanotechnology fabrication tools meet stringent VC vibration criteria."
      },
      {
        title: "Geodetic Earth Geoid & Gravity Modeling",
        text: "Geodetic survey institutions combine historical US gravity observations recorded in ft/s² with global satellite grids calibrated in milligals."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Using 30.48 Instead of 30,480: Multiplying by 30.48 converts ft/s² to Gal. Because 1 Gal = 1,000 mGal, you must multiply by 30,480 to obtain mGal.",
      "Confusing mGal with Microgals (µGal): 1 mGal = 1,000 µGal. Mixing up prefix scales leads to a thousandfold error in gravity modeling.",
      "Rounding 30,480 to 30,000 in Survey Software: Using 30,000 introduces an immediate 1.57% error, which obscures subtle microgravity anomalies."
    ]
  },
  faqs: [
    {
      question: "How do I convert ft/s² to milligals (mGal)?",
      answer: "Multiply the acceleration in ft/s² by exactly 30,480. For example, 0.01 ft/s² × 30,480 = 304.8 mGal."
    },
    {
      question: "What is 1 ft/s² in mGal?",
      answer: "1 ft/s² is equal to exactly 30,480 mGal."
    },
    {
      question: "What is 1 mGal in ft/s²?",
      answer: "1 mGal is equal to 1 / 30,480 ft/s², which is approximately 0.0000328084 ft/s²."
    },
    {
      question: "Why is 30,480 the exact conversion factor?",
      answer: "1 foot is defined as exactly 0.3048 meters (30.48 cm). Since 1 Gal = 1 cm/s² and 1 mGal = 0.001 Gal, 1 ft/s² = 30.48 × 1,000 = 30,480 mGal."
    },
    {
      question: "How do I convert mGal back to ft/s²?",
      answer: "Divide the mGal value by 30,480 (or multiply by 0.0000328084). For example, 30,480 mGal ÷ 30,480 = 1.0 ft/s²."
    },
    {
      question: "What is Earth's standard gravity in mGal?",
      answer: "Standard Earth gravity (9.80665 m/s² or 32.17405 ft/s²) equals exactly 980,665 mGal."
    },
    {
      question: "What is the typical magnitude of a gravity anomaly?",
      answer: "Local gravity anomalies caused by subterranean geological features typically range between ±5 mGal and ±100 mGal."
    },
    {
      question: "What instruments measure milligals?",
      answer: "Relative gravimeters, absolute falling-corner-cube gravimeters, and superconducting gravimeters measure gravitational variations with milligal and microgal precision."
    }
  ],
  relatedList: [
    { label: "Foot/sec² to Gal", from: "foot-per-second-squared", to: "gal-acceleration" },
    { label: "Meter/sec² to Milligal", from: "meter-per-second-squared", to: "milligal-acceleration" },
    { label: "Foot/sec² to Meter/sec²", from: "foot-per-second-squared", to: "meter-per-second-squared" },
    { label: "Foot/sec² to Standard Gravity (g)", from: "foot-per-second-squared", to: "gravity-acceleration" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - NIST Guide for the Use of the SI (Special Publication 811)",
    "International Association of Geodesy (IAG) - International Association of Geodesy (IAG) Standards",
    "United States Geological Survey (USGS) - USGS Gravimetry and Subsurface Geophysics Manual"
  ]
};
