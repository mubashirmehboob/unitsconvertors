import { CustomArticleData } from "./types";

export const galAccelerationToMeterPerSecondSquared: CustomArticleData = {
  fromUnitId: "gal-acceleration",
  toUnitId: "meter-per-second-squared",
  seoTitle: "Gal to Meter/sec² Converter (Gal to m/s²)",
  metaDescription: "Convert gal (Gal) to meters per second squared (m/s²) with exact CGS to SI conversion formulas, earthquake PGA calculations, and worked engineering examples.",
  h1: "Gal to Meter/sec² Converter",
  introduction: [
    "The gal (symbol: Gal) and the meter per second squared (m/s²) are metric units of acceleration representing two distinct historical standards: the centimetre-gram-second (CGS) system and the modern International System of Units (SI). Named in honor of Galileo Galilei, the gal is defined as exactly one centimeter per second squared (1 Gal = 1 cm/s²), while the meter per second squared is the coherent derived SI unit utilized across global engineering and physics.",
    "Converting gal to meters per second squared is a daily task in earthquake engineering, structural dynamics, and geophysics. Strong-motion accelerographs installed in high-seismic zones routinely record peak ground acceleration (PGA) in gals. To input these ground motion histories into structural finite element analysis (FEA) software or calculate inertial forces in newtons, civil engineers convert the values into m/s² by dividing by 100.",
    "This technical guide explains the exact mathematical derivation, demonstrates seismic data processing steps, provides practical conversion tables, and answers common questions from structural and geodetic engineers."
  ],
  quickAnswer: {
    text: "To convert gal (Gal) to meters per second squared (m/s²), multiply by exactly 0.01 (or divide by 100). For example, an earthquake ground acceleration of 250 Gal corresponds to exactly 2.5 m/s².",
    formulaDisplay: "\\text{m/s}^2 = \\text{Gal} \\times 0.01 = \\frac{\\text{Gal}}{100}",
    subtext: "1 Gal is equal to exactly 0.01 m/s² (1 cm/s² = 10⁻² m/s²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gal (Gal)",
    text: "The gal (symbol: Gal, sometimes written as galileo) is the CGS unit of acceleration, defined as exactly one centimeter per second squared (1 cm/s²). Widely adopted in gravimetry and seismology, it is accepted by the BIPM for specialized use alongside the SI. 1 Gal represents roughly 1/1,000th of Earth's surface gravity."
  },
  aboutTargetUnit: {
    title: "Understanding the Meter per Second Squared (m/s²)",
    text: "The meter per second squared (symbol: m/s²) is the coherent derived unit of acceleration in the International System of Units (SI). It denotes an acceleration where velocity increases by one meter per second in one second, serving as the universal standard for Newtonian dynamics (F = m × a)."
  },
  relationship: "The relationship between the gal and the meter per second squared is an exact power of ten. Because 1 meter equals exactly 100 centimeters, 1 Gal = 1 cm/s² = 1/100 m/s² = 0.01 m/s². Inversely, 1 m/s² equals exactly 100 Gal.",
  relationshipTitle: "CGS to SI Acceleration Equivalence",
  relationshipItems: [
    { label: "1 Gal", value: "0.01000 m/s² (Exact definition baseline)" },
    { label: "10 Gal", value: "0.10000 m/s² (Perceptible earthquake ground vibration)" },
    { label: "100 Gal", value: "1.00000 m/s² (Moderate earthquake ground motion)" },
    { label: "250 Gal", value: "2.50000 m/s² (Significant structural shaking threshold)" },
    { label: "500 Gal", value: "5.00000 m/s² (Violent destructive ground motion, ~0.51 g)" },
    { label: "980.665 Gal", value: "9.80665 m/s² (Standard nominal terrestrial gravity, 1.0 g)" }
  ],
  formula: {
    text: "Multiply the acceleration in gal by 0.01 (or divide by 100) to calculate meters per second squared.",
    math: "a_{(\\text{m/s}^2)} = a_{(\\text{Gal})} \\times 0.01 = \\frac{a_{(\\text{Gal})}}{100}",
    subtext: "0.01 is an exact conversion factor (1 centimeter = 0.01 meters)."
  },
  formulaTitle: "Gal to m/s² Conversion Formula",
  practicalTip: {
    title: "Instant Mental Decimal Shift",
    text: "Because the conversion factor is exactly 0.01, you can convert Gal to m/s² instantly in your head by moving the decimal point two places to the left. For example, 380 Gal becomes 3.80 m/s²."
  },
  expertNote: {
    title: "Seismic Design and Inertial Force Modeling",
    text: "When modeling building response under earthquake loading, structural analysis software (e.g., SAP2000, ETABS) requires input ground acceleration time histories in m/s² to integrate dynamic equations with mass in kilograms. If a seismic station reports a record in Gal, scaling the time history by 0.01 preserves exact numerical fidelity."
  },
  examples: {
    title: "Step-by-Step Earthquake Engineering Calculations",
    items: [
      {
        title: "Example 1: Strong-Motion Accelerograph Record",
        subtitle: "A borehole seismograph records a horizontal peak ground acceleration of 345 Gal during a major subduction earthquake. Convert this peak acceleration to m/s².",
        steps: [
          "Identify the recorded Gal value: a = 345 Gal.",
          "Apply the exact formula: 345 × 0.01 (or 345 ÷ 100).",
          "Compute: 345 ÷ 100 = 3.45.",
          "Result: 345 Gal equals exactly 3.45 m/s² (approximately 0.352 g)."
        ]
      },
      {
        title: "Example 2: Lab Shaking Table Dynamic Test",
        subtitle: "A civil engineering shake table is programmed to subject a bridge column specimen to an initial excitation of 82 Gal. Express this excitation in m/s².",
        steps: [
          "State the acceleration: a = 82 Gal.",
          "Divide by 100: 82 ÷ 100.",
          "Compute: 82 ÷ 100 = 0.82.",
          "Result: The test excitation equals exactly 0.82 m/s²."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Gal to m/s²",
    headers: ["Acceleration (Gal)", "Acceleration (m/s²)", "Seismic & Geophysical Context"],
    rows: [
      { fromVal: "1.0", toVal: "0.01000", extra: "Precise dimensional definition baseline" },
      { fromVal: "5.0", toVal: "0.05000", extra: "Light perceptible seismic shaking" },
      { fromVal: "10.0", toVal: "0.10000", extra: "Felt by most indoor occupants" },
      { fromVal: "25.0", toVal: "0.25000", extra: "Dishes rattle, parked cars rock" },
      { fromVal: "50.0", toVal: "0.50000", extra: "Difficult to stand; minor plaster cracks" },
      { fromVal: "100.0", toVal: "1.00000", extra: "Moderate structural damage threshold (~0.1 g)" },
      { fromVal: "250.0", toVal: "2.50000", extra: "Severe structural damage to masonry" },
      { fromVal: "500.0", toVal: "5.00000", extra: "Violent shaking (~0.51 g); major structural collapse" },
      { fromVal: "980.665", toVal: "9.80665", extra: "Standard Earth gravity baseline (1.0 g)" },
      { fromVal: "1500.0", toVal: "15.00000", extra: "Extreme near-fault earthquake record peak" }
    ]
  },
  applications: {
    title: "Real-World Engineering & Scientific Applications",
    items: [
      {
        title: "Civil Structural Seismic Design",
        text: "Engineers convert seismic ground motions recorded in Gal into m/s² to compute base shear and floor acceleration response spectra according to ASCE 7 and Eurocode 8."
      },
      {
        title: "Geotechnical Shake Table Experiments",
        text: "Soil liquefaction test rigs measure lateral shear box vibrations in Gal, converting to m/s² to integrate pore water pressure generation curves."
      },
      {
        title: "Tsunami Early Warning & Seismology",
        text: "National meteorological and seismic agencies monitor coastal strong-motion networks reporting in Gal, standardizing to m/s² for automated moment magnitude calculations."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 100 instead of dividing: Multiplying converts m/s² to Gal. To convert Gal to m/s², you must divide by 100 (or multiply by 0.01).",
      "Confusing Gal with Milligal (mGal): 1 mGal equals 0.001 Gal or 0.00001 m/s² (10⁻⁵ m/s²). Confusing the two causes a 1,000-fold order-of-magnitude error.",
      "Misinterpreting Gal as g-force: 1 Gal is NOT 1 g. 1 g equals approximately 980.665 Gal. 1 Gal is roughly 1.02 milli-g (~0.00102 g)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Gal to m/s²?",
      answer: "Divide the Gal value by 100, or multiply by exactly 0.01. For example, 150 Gal ÷ 100 = 1.5 m/s²."
    },
    {
      question: "What is 1 Gal in m/s²?",
      answer: "1 Gal is equal to exactly 0.01 m/s² (or 1 centimeter per second squared)."
    },
    {
      question: "How do you convert m/s² back to Gal?",
      answer: "Multiply the m/s² value by 100. For example, 9.81 m/s² × 100 = 981 Gal."
    },
    {
      question: "What does Gal stand for?",
      answer: "Gal is named in honor of Galileo Galilei, who conducted the earliest systematic experiments measuring terrestrial gravitational acceleration."
    },
    {
      question: "How many Gal is Earth's gravity?",
      answer: "Standard Earth gravity of 9.80665 m/s² equals exactly 980.665 Gal."
    },
    {
      question: "Is Gal an SI unit?",
      answer: "No, Gal is a CGS (centimetre-gram-second) unit. However, it is officially accepted by the BIPM for specialized use in geodesy and geophysics."
    },
    {
      question: "How many Gal is an earthquake PGA of 0.2 g?",
      answer: "0.2 g equals approximately 196.133 Gal (0.2 × 980.665), which converts to exactly 1.96133 m/s²."
    },
    {
      question: "What is the difference between a Gal and a Milligal?",
      answer: "1 Gal equals 1,000 milligals (mGal). Therefore, 1 mGal equals 0.001 Gal, or 0.00001 m/s² (10⁻⁵ m/s²)."
    }
  ],
  relatedList: [
    { label: "Gal to Foot/sec²", from: "gal-acceleration", to: "foot-per-second-squared" },
    { label: "Standard Gravity (g) to Gal", from: "gravity-acceleration", to: "gal-acceleration" },
    { label: "Meter/sec² to Gal", from: "meter-per-second-squared", to: "gal-acceleration" },
    { label: "Meter/sec² to Milligal", from: "meter-per-second-squared", to: "milligal-acceleration" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "American Society of Civil Engineers (ASCE) - Minimum Design Loads and Associated Criteria for Buildings and Other Structures (ASCE/SEI 7-22)",
    "European Committee for Standardization - Eurocode 8: Design of structures for earthquake resistance (EN 1998-1)"
  ]
};
