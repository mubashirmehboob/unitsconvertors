import { CustomArticleData } from "./types";

export const meterPerSecondSquaredToMilligalAcceleration: CustomArticleData = {
  fromUnitId: "meter-per-second-squared",
  toUnitId: "milligal-acceleration",
  seoTitle: "Meter/sec² to Milligal Converter (m/s² to mGal)",
  metaDescription: "Convert meters per second squared to milligals (m/s² to mGal) with exact geophysical conversion factors, gravimetric survey formulas, and FAQs.",
  h1: "Meter/sec² to Milligal Converter",
  introduction: [
    "The meter per second squared (m/s²) and the milligal (symbol: mGal) represent macro and micro scales of gravitational acceleration. While the meter per second squared is the SI standard unit used to describe everyday kinematics and gross gravitational fields, the milligal represents one-thousandth of a gal (1 mGal = 10⁻³ Gal = 10⁻⁵ m/s²), providing the ultra-fine resolution required to detect minute regional gravity anomalies.",
    "Converting meters per second squared to milligals is essential in subsurface geophysics, oil and gas basin modeling, tectonic plate boundary analysis, and geodesy. Because 1 milligal equals exactly 0.00001 m/s² (10 micrometers per second squared), converting from m/s² to mGal requires multiplying by exactly 100,000.",
    "This technical guide explains how gravitational anomalies are quantified, provides precise mathematical conversion steps, illustrates practical geological survey calculations, and includes complete conversion tables."
  ],
  quickAnswer: {
    text: "To convert meters per second squared (m/s²) to milligals (mGal), multiply the value by exactly 100,000 (10⁵). For example, a small local gravity variation of 0.00025 m/s² equals exactly 25 mGal.",
    formulaDisplay: "\\text{mGal} = \\text{m/s}^2 \\times 100{,}000",
    subtext: "1 m/s² equals exactly 100,000 mGal (1 mGal = 10⁻⁵ m/s²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter per Second Squared (m/s²)",
    text: "The meter per second squared (m/s²) is the SI coherent derived unit of acceleration. It represents a velocity change of one meter per second every second, providing the absolute measurement base for physical mechanics, orbital trajectories, and industrial motion control."
  },
  aboutTargetUnit: {
    title: "Understanding the Milligal (mGal)",
    text: "The milligal (symbol: mGal) is a submultiple of the CGS acceleration unit Gal, equal to one-thousandth of a Gal or 10⁻⁵ m/s² (10 µm/s²). Because Earth's surface gravity is approximately 980,000 mGal, an anomaly of 1 mGal represents roughly one part per million (1 ppm) of total terrestrial gravity, making it the ideal unit for detecting variations in subsurface rock densities."
  },
  relationship: "The relationship between meters per second squared and milligals is strictly decimal: 1 mGal = 10⁻³ Gal = 10⁻⁵ m/s² = 0.00001 m/s². Conversely, 1 m/s² = 100,000 mGal (10⁵ mGal). Converting from m/s² to mGal involves shifting the decimal point five places to the right.",
  relationshipTitle: "Gravimetric Sensitivity Scale",
  relationshipItems: [
    { label: "0.00001 m/s²", value: "1 mGal (Subsurface salt dome detection threshold)" },
    { label: "0.001 m/s²", value: "100 mGal (Major regional Bouguer gravity anomaly)" },
    { label: "0.01 m/s²", value: "1,000 mGal (1 Gal, large tectonic trench anomaly)" },
    { label: "1 m/s²", value: "100,000 mGal (SI base unit equivalence)" },
    { label: "9.80665 m/s²", value: "980,665 mGal (Standard Earth surface gravity, 1 g)" }
  ],
  formula: {
    text: "Multiply the acceleration in meters per second squared by 100,000 to obtain the acceleration in milligals.",
    math: "a_{(\\text{mGal})} = a_{(\\text{m/s}^2)} \\times 100{,}000 = a_{(\\text{m/s}^2)} \\times 10^5",
    subtext: "100,000 is an exact conversion factor by definition."
  },
  formulaTitle: "m/s² to mGal Conversion Formula",
  practicalTip: {
    title: "Decimal Movement Rule",
    text: "To convert m/s² to mGal, move the decimal point 5 places to the right (e.g., 0.0005 m/s² → 50 mGal). To convert mGal to m/s², move the decimal point 5 places to the left."
  },
  expertNote: {
    title: "Bouguer and Free-Air Anomalies",
    text: "Geophysicists isolate subsurface density variations by calculating Free-Air and Bouguer gravity anomalies in milligals (mGal). An anomaly of just +10 mGal often indicates dense mineralized ore bodies or volcanic basalt intrusions."
  },
  examples: {
    title: "Step-by-Step Geophysical Examples",
    items: [
      {
        title: "Example 1: Mineral Exploration Gravity Anomaly",
        subtitle: "A relative gravimeter measures an ore body gravitational anomaly of 0.00018 m/s². Convert this to milligals.",
        steps: [
          "State the measured acceleration in SI units: a = 0.00018 m/s².",
          "Multiply by the factor 100,000: 0.00018 × 100,000.",
          "Calculate: 0.00018 × 100,000 = 18.",
          "Result: 0.00018 m/s² equals exactly 18 mGal."
        ]
      },
      {
        title: "Example 2: Standard Earth Gravity in mGal",
        subtitle: "Convert standard gravity (9.80665 m/s²) into milligals for global geoid modeling.",
        steps: [
          "Identify the standard gravity value: g₀ = 9.80665 m/s².",
          "Multiply by 100,000: 9.80665 × 100,000.",
          "Calculate: 9.80665 × 100,000 = 980,665.",
          "Result: Standard gravity g₀ equals exactly 980,665 mGal."
        ]
      }
    ]
  },
  table: {
    title: "Quick Reference Conversion Table",
    headers: ["Input Value", "Converted Result", "Physical Context"],
    rows: [
      { fromVal: "0.00001", toVal: "1", extra: "1 mGal base definition (10 µm/s²)" },
      { fromVal: "0.0001", toVal: "10", extra: "Significant local mineral anomaly" },
      { fromVal: "0.0005", toVal: "50", extra: "Large subterranean fault boundary anomaly" },
      { fromVal: "0.001", toVal: "100", extra: "Substantial regional mountain root anomaly" },
      { fromVal: "0.01", toVal: "1,000", extra: "1 Gal equivalence" },
      { fromVal: "0.1", toVal: "10,000", extra: "10 Gal equivalence" },
      { fromVal: "1", toVal: "100,000", extra: "1 m/s² SI base unit" },
      { fromVal: "9.78032", toVal: "978,032", extra: "WGS84 theoretical equatorial gravity" },
      { fromVal: "9.80665", toVal: "980,665", extra: "Standard nominal Earth gravity" },
      { fromVal: "9.83218", toVal: "983,218", extra: "WGS84 theoretical polar gravity" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "Geothermal & Hydrocarbon Reservoir Mapping",
        text: "Exploration geophysicists convert sensor telemetry into milligals to map low-density porous sandstone reservoir traps and high-density basement rock formations."
      },
      {
        title: "Geodetic Geoid Determination & GPS Height Calibration",
        text: "Geodesists map Earth's gravimetric geoid in mGal to enable accurate conversion between GPS ellipsoidal heights and mean sea level elevations."
      },
      {
        title: "Volcanology & Magma Chamber Monitoring",
        text: "Continuous microgravity stations record micro-changes in milligals around active calderas to monitor the ascent of magma before volcanic eruptions."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Confusing mGal with Gal or µGal: 1 Gal = 1,000 mGal, and 1 mGal = 1,000 µGal (microgals). Misplacing three decimal places causes extreme distortion in subsurface inversion models.",
      "Miscounting Zeros in the 100,000 Factor: Because 1 Gal = 100 m/s² and 1 mGal = 10⁻³ Gal, the combined factor is 10² × 10³ = 10⁵ (100,000). Using 10,000 or 1,000,000 is a frequent manual arithmetic error.",
      "Confusing Absolute and Relative Gravity: Absolute gravity is roughly 980,000 mGal, while relative gravity survey data records anomalies typically between ±50 mGal relative to regional base stations."
    ]
  },
  faqs: [
    {
      question: "How do I convert m/s² to milligals (mGal)?",
      answer: "Multiply the acceleration in m/s² by 100,000 (10⁵). For example, 0.0001 m/s² × 100,000 = 10 mGal."
    },
    {
      question: "What is 1 mGal in m/s²?",
      answer: "1 mGal is equal to exactly 0.00001 m/s² (10⁻⁵ m/s² or 10 micrometers per second squared)."
    },
    {
      question: "Why is the milligal used in geophysics?",
      answer: "Earth's surface gravity is roughly 980,000 mGal. A change of 1 mGal represents approximately one part per million of Earth's field, making it the ideal scale to quantify variations caused by underground density changes."
    },
    {
      question: "How many milligals are in 1 Gal?",
      answer: "There are exactly 1,000 milligals (mGal) in 1 Gal."
    },
    {
      question: "What is Earth's standard gravity in milligals?",
      answer: "Standard gravity (9.80665 m/s²) equals exactly 980,665 mGal."
    },
    {
      question: "How do I convert mGal back to m/s²?",
      answer: "Divide the milligal figure by 100,000 (or multiply by 10⁻⁵). For example, 50 mGal ÷ 100,000 = 0.0005 m/s²."
    },
    {
      question: "What is the difference between a Gal and a Milligal?",
      answer: "A Gal is 1 cm/s² (0.01 m/s²), while a Milligal (mGal) is 0.001 Gal (0.00001 m/s²), representing a thousandfold increase in precision."
    },
    {
      question: "What instrument measures gravity in milligals?",
      answer: "Gravimeters (such as spring-based relative gravimeters and superconducting gravimeters) measure variations in gravity with sub-milligal and microgal precision."
    }
  ],
  relatedList: [
    { label: "Meter/sec² to Gal", from: "meter-per-second-squared", to: "gal-acceleration" },
    { label: "Foot/sec² to Milligal", from: "foot-per-second-squared", to: "milligal-acceleration" },
    { label: "Meter/sec² to Standard Gravity (g)", from: "meter-per-second-squared", to: "gravity-acceleration" },
    { label: "Meter/sec² to Foot/sec²", from: "meter-per-second-squared", to: "foot-per-second-squared" }
  ],
  references: [
    "International Association of Geodesy (IAG) - IAG International Association of Geodesy Standards",
    "National Institute of Standards and Technology (NIST) - NIST Guide for the Use of the SI (Special Publication 811)",
    "United States Geological Survey (USGS) - USGS Gravity Survey Techniques and Methods"
  ]
};
