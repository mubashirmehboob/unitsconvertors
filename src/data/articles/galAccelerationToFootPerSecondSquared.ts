import { CustomArticleData } from "./types";

export const galAccelerationToFootPerSecondSquared: CustomArticleData = {
  fromUnitId: "gal-acceleration",
  toUnitId: "foot-per-second-squared",
  seoTitle: "Gal to Foot/sec² Converter (Gal to ft/s²)",
  metaDescription: "Convert gal (Gal) to feet per second squared (ft/s²) with exact international conversion constants, earthquake shake table formulas, and worked examples.",
  h1: "Gal to Foot/sec² Converter",
  introduction: [
    "The gal (symbol: Gal) and the foot per second squared (ft/s²) connect the metric centimetre-gram-second (CGS) system with the imperial and US customary systems of acceleration. While the gal—defined as one centimeter per second squared (1 cm/s²) in honor of Galileo Galilei—is widely used across international seismology, gravimetry, and geophysics, the foot per second squared is the foundational kinematic unit utilized in United States civil engineering, structural dynamics, and building vibration codes.",
    "Converting gal to feet per second squared is frequently required when processing global earthquake accelerograms for US structural engineering software. Under the 1959 International Yard and Pound Agreement, one international foot equals exactly 0.3048 meters, which is exactly 30.48 centimeters. Therefore, one foot per second squared equals exactly 30.48 Gal, and one gal equals exactly 1/30.48 ft/s² (approximately 0.0328084 ft/s²).",
    "This technical guide details the dimensional relationship, provides step-by-step earthquake engineering calculations, includes practical reference tables, and answers the most frequent questions from structural and geodetic engineers."
  ],
  quickAnswer: {
    text: "To convert gal (Gal) to feet per second squared (ft/s²), divide the Gal value by exactly 30.48 (or multiply by approximately 0.0328084). For example, a seismic acceleration of 304.8 Gal corresponds to exactly 10 ft/s².",
    formulaDisplay: "\\text{ft/s}^2 = \\frac{\\text{Gal}}{30.48} \\approx \\text{Gal} \\times 0.0328084",
    subtext: "1 Gal is equal to exactly 1/30.48 ft/s² (derived from 1 ft = 30.48 cm)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gal (Gal)",
    text: "The gal (symbol: Gal) is the CGS unit of acceleration, defined as one centimeter per second squared (1 cm/s² = 0.01 m/s²). Widely adopted in seismology and gravimetry, it is accepted by the BIPM for specialized use alongside the SI. International strong-motion seismograph networks (such as Japan's K-NET) record earthquake ground accelerations directly in Gal."
  },
  aboutTargetUnit: {
    title: "Understanding the Foot per Second Squared (ft/s²)",
    text: "The foot per second squared (symbol: ft/s² or ft/sec²) is the base unit of linear acceleration in the US customary and imperial systems. It defines a velocity increase of one foot per second every second. In US civil engineering (ASCE 7, IBC), seismic ground accelerations and floor spectra are traditionally calculated using ft/s² alongside pounds-force and slugs."
  },
  relationship: "The relationship between the gal and the foot per second squared is exact based on the definition of the international foot: 1 foot = 0.3048 meters = 30.48 centimeters. Consequently, 1 ft/s² = 30.48 cm/s² = 30.48 Gal exactly. Inverting this yields 1 Gal = 1 / 30.48 ft/s² ≈ 0.03280839895 ft/s².",
  relationshipTitle: "Seismic & Kinematic Equivalence Benchmarks",
  relationshipItems: [
    { label: "1 Gal", value: "0.03281 ft/s² (1 cm/s² baseline in US customary units)" },
    { label: "30.48 Gal", value: "1.00000 ft/s² (Exact 1 ft/s² baseline)" },
    { label: "100 Gal", value: "3.28084 ft/s² (Moderate earthquake ground motion, ~0.102 g)" },
    { label: "250 Gal", value: "8.20210 ft/s² (Strong earthquake shaking threshold)" },
    { label: "500 Gal", value: "16.40420 ft/s² (Violent ground acceleration, ~0.51 g)" },
    { label: "980.665 Gal", value: "32.17405 ft/s² (Standard Earth gravity, 1.0 g)" }
  ],
  formula: {
    text: "Divide the acceleration in gal by 30.48 (or multiply by 0.0328084) to calculate feet per second squared.",
    math: "a_{(\\text{ft/s}^2)} = \\frac{a_{(\\text{Gal})}}{30.48} \\approx a_{(\\text{Gal})} \\times 0.0328084",
    subtext: "30.48 is an exact conversion factor (1 foot = 30.48 centimeters)."
  },
  formulaTitle: "Gal to ft/s² Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To approximate ft/s² from Gal in your head, divide by 30 (or divide by 3 and shift the decimal one place left). For example, 300 Gal ÷ 30 = 10 ft/s², which is within 1.6% of the exact 9.84 ft/s²."
  },
  expertNote: {
    title: "Seismic Shake Table Input Formatting",
    text: "Many US earthquake simulation laboratories (e.g., at UC Berkeley or UCSD) operate uni-axial or tri-axial shake tables programmed in US customary engineering units (ft/s² or in/s²). When applying international earthquake ground records originally digitized in Gal, converting time histories using the exact factor 1/30.48 guarantees exact preservation of dynamic frequency and amplitude."
  },
  examples: {
    title: "Step-by-Step Earthquake Engineering Calculations",
    items: [
      {
        title: "Example 1: Recorded Earthquake Ground Motion",
        subtitle: "A digital strong-motion accelerograph in an active fault zone registers a peak horizontal acceleration of 185 Gal. Convert this ground acceleration to ft/s².",
        steps: [
          "State the recorded seismic value: a = 185 Gal.",
          "Apply the exact division: 185 ÷ 30.48.",
          "Compute: 185 ÷ 30.48 ≈ 6.06955.",
          "Result: 185 Gal corresponds to approximately 6.07 ft/s²."
        ]
      },
      {
        title: "Example 2: Lab Shake Table Actuator Limit",
        subtitle: "A university earthquake testing rig has an actuator acceleration limit of 450 Gal. Express this limit in feet per second squared.",
        steps: [
          "State the actuator limit: a = 450 Gal.",
          "Divide by 30.48: 450 ÷ 30.48.",
          "Compute: 450 ÷ 30.48 ≈ 14.76378.",
          "Result: 450 Gal equals approximately 14.76 ft/s²."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Gal to ft/s²",
    headers: ["Acceleration (Gal)", "Acceleration (ft/s²)", "Seismic & Civil Engineering Context"],
    rows: [
      { fromVal: "1.0", toVal: "0.0328", extra: "Precise CGS to Imperial baseline" },
      { fromVal: "10.0", toVal: "0.3281", extra: "Light perceptible seismic shaking" },
      { fromVal: "30.48", toVal: "1.0000", extra: "Exact 1.0 ft/s² equivalence point" },
      { fromVal: "50.0", toVal: "1.6404", extra: "Moderate shaking, objects rattle" },
      { fromVal: "100.0", toVal: "3.2808", extra: "Felt strongly by everyone indoors" },
      { fromVal: "200.0", toVal: "6.5617", extra: "Structural cracks in older unreinforced walls" },
      { fromVal: "304.8", toVal: "10.0000", extra: "Exact 10.0 ft/s² engineering milestone" },
      { fromVal: "500.0", toVal: "16.4042", extra: "Severe structural damage (~0.51 g)" },
      { fromVal: "980.665", toVal: "32.1740", extra: "Standard Earth gravity baseline (1.0 g)" },
      { fromVal: "1500.0", toVal: "49.2126", extra: "Violent near-fault seismic ground motion" }
    ]
  },
  applications: {
    title: "Real-World Civil & Earthquake Applications",
    items: [
      {
        title: "US Building Code Dynamic Analysis",
        text: "Structural engineers designing high-rise buildings in seismic zones (ASCE 7) convert international accelerograms from Gal to ft/s² to perform non-linear time-history analyses."
      },
      {
        title: "Seismic Shake Table Testing",
        text: "Research universities run physical scale models of bridges and retrofitted structures on shake tables, translating digitized records in Gal into ft/s² hydraulic command signals."
      },
      {
        title: "Nuclear Facility Seismic Qualification",
        text: "Nuclear power plants in the United States calibrate emergency reactor trip sensors against design basis earthquakes (DBE), converting international ground motion records in Gal into ft/s²."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 30.48 instead of dividing: Multiplying by 30.48 converts ft/s² to Gal. To convert Gal to ft/s², divide by 30.48 (or multiply by 0.0328084).",
      "Using 30 instead of 30.48: While 30 is convenient for rough mental checks, it introduces a 1.6% systematic error that violates structural code precision requirements.",
      "Confusing Gal with g: 1 Gal is NOT 1 g. 1 g equals approximately 980.665 Gal. 1 Gal is roughly 0.032174 ft/s²."
    ]
  },
  faqs: [
    {
      question: "How do you convert Gal to ft/s²?",
      answer: "Divide the Gal value by exactly 30.48, or multiply by approximately 0.0328084. For example, 150 Gal ÷ 30.48 ≈ 4.921 ft/s²."
    },
    {
      question: "What is 1 Gal in ft/s²?",
      answer: "1 Gal is equal to exactly 1/30.48 ft/s², which is approximately 0.0328084 ft/s²."
    },
    {
      question: "Why is the factor 30.48 exact?",
      answer: "Under the 1959 International Yard and Pound Agreement, 1 international foot is legally defined as exactly 0.3048 meters, which equals exactly 30.48 centimeters. Since 1 Gal = 1 cm/s², 1 ft/s² = 30.48 Gal exactly."
    },
    {
      question: "How do you convert ft/s² back to Gal?",
      answer: "Multiply the acceleration in ft/s² by exactly 30.48. For instance, 10 ft/s² × 30.48 = 304.8 Gal."
    },
    {
      question: "How many Gal is 32.174 ft/s² (1 g)?",
      answer: "32.17405 ft/s² multiplied by 30.48 equals exactly 980.665 Gal, which is standard Earth gravity."
    },
    {
      question: "Why do earthquake records use Gal?",
      answer: "Seismologists historically used the CGS system. Because 1 Gal is approximately one-thousandth of Earth's gravity, it provides a convenient scale for seismic shaking without excessive decimals."
    },
    {
      question: "How many ft/s² is an earthquake shaking of 200 Gal?",
      answer: "200 Gal divided by 30.48 equals approximately 6.5617 ft/s²."
    },
    {
      question: "Is Gal related to gallons?",
      answer: "No. The Gal (capital G) is a unit of acceleration named after Galileo Galilei, while the gallon (gal) is a unit of fluid volume."
    }
  ],
  relatedList: [
    { label: "Gal to Meter/sec²", from: "gal-acceleration", to: "meter-per-second-squared" },
    { label: "Standard Gravity (g) to Foot/sec²", from: "gravity-acceleration", to: "foot-per-second-squared" },
    { label: "Foot/sec² to Gal", from: "foot-per-second-squared", to: "gal-acceleration" },
    { label: "Meter/sec² to Foot/sec²", from: "meter-per-second-squared", to: "foot-per-second-squared" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - Special Publication 811: Guide for the Use of the SI",
    "American Society of Civil Engineers (ASCE) - ASCE 7-22: Minimum Design Loads for Buildings and Other Structures",
    "Earthquake Engineering Research Institute (EERI) - Ground Motion Parameters and Seismological Instrumentation"
  ]
};
