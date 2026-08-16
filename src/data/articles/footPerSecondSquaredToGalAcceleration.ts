import { CustomArticleData } from "./types";

export const footPerSecondSquaredToGalAcceleration: CustomArticleData = {
  fromUnitId: "foot-per-second-squared",
  toUnitId: "gal-acceleration",
  seoTitle: "Foot/sec² to Gal Converter (ft/s² to Gal)",
  metaDescription: "Convert feet per second squared to gal (ft/s² to Gal) with exact imperial-to-CGS conversion factors, seismology examples, reference tables, and FAQs.",
  h1: "Foot/sec² to Gal Converter",
  introduction: [
    "The foot per second squared (ft/s²) and the gal (symbol: Gal) bridge US customary civil engineering and international geophysical gravimetry. While ft/s² is the standard acceleration unit in United States building codes and structural dynamics, the gal (defined as 1 centimeter per second squared) is the universal metric standard used by seismologists, earthquake geophysicists, and gravimetric surveyors.",
    "Converting feet per second squared to gal is frequently necessary when translating US building shake-table test data into international seismic hazard maps, analyzing earthquake peak ground acceleration (PGA), or comparing structural vibration limits. Because 1 international foot is defined as exactly 30.48 centimeters, an acceleration of 1 ft/s² translates directly to exactly 30.48 Gal (30.48 cm/s²).",
    "This technical reference provides exact conversion coefficients, worked seismic calculation examples, comprehensive range tables, and expert guidelines for structural and geological analyses."
  ],
  quickAnswer: {
    text: "To convert feet per second squared (ft/s²) to gal (Gal), multiply the acceleration value by exactly 30.48. For example, a floor vibration acceleration of 0.5 ft/s² converts to exactly 15.24 Gal.",
    formulaDisplay: "\\text{Gal} = \\text{ft/s}^2 \\times 30.48",
    subtext: "1 ft/s² is exactly equal to 30.48 Gal (since 1 ft = 30.48 cm and 1 Gal = 1 cm/s²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Foot per Second Squared (ft/s²)",
    text: "The foot per second squared (symbol: ft/s² or ft/sec²) is the US customary and imperial unit of acceleration. It represents a velocity change of one foot per second every second (1 ft/s² = 0.3048 m/s²), serving as a core metric in North American structural dynamics, elevator engineering, and aerospace mechanics."
  },
  aboutTargetUnit: {
    title: "Understanding the Gal (Gal)",
    text: "The gal (symbol: Gal, named after Galileo Galilei) is the CGS unit of acceleration, defined as 1 centimeter per second squared (1 Gal = 1 cm/s² = 10⁻² m/s²). It is the standard unit used globally to describe earthquake ground shaking intensity and gravimetric field strength."
  },
  relationship: "The exact relationship between feet per second squared and gal is established by the definition of the international foot: 1 ft = 0.3048 m = 30.48 cm. Since 1 Gal = 1 cm/s², 1 ft/s² = 30.48 Gal exactly. Conversely, 1 Gal = 1 / 30.48 ft/s² ≈ 0.032808399 ft/s².",
  relationshipTitle: "Seismic Ground Shaking & Structural Load Equivalence",
  relationshipItems: [
    { label: "0.0328 ft/s²", value: "1.000 Gal (Human perception threshold for ground vibration)" },
    { label: "1.0000 ft/s²", value: "30.480 Gal (Moderate perceptible earthquake motion)" },
    { label: "5.0000 ft/s²", value: "152.400 Gal (Strong ground shaking, minor structural damage threshold)" },
    { label: "10.000 ft/s²", value: "304.800 Gal (Severe earthquake peak ground acceleration)" },
    { label: "32.174 ft/s²", value: "980.665 Gal (Standard 1 g terrestrial gravity)" }
  ],
  formula: {
    text: "Multiply the acceleration in feet per second squared by 30.48 to obtain the value in gal.",
    math: "a_{(\\text{Gal})} = a_{(\\text{ft/s}^2)} \\times 30.48",
    subtext: "30.48 is an exact conversion factor by definition (1 ft = 30.48 cm)."
  },
  formulaTitle: "ft/s² to Gal Mathematical Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To quickly approximate Gal from ft/s² in your head, multiply by 30 and add roughly 1.5% (e.g., 2 ft/s² → 2 × 30 = 60; 60 + 1 = 61 Gal, very close to 60.96 Gal)."
  },
  expertNote: {
    title: "Seismic Intensity Scale Correlation",
    text: "In earthquake engineering, ground accelerations measured on US structures in ft/s² are converted to Gal to correlate with the Modified Mercalli Intensity (MMI) scale: 1–2 Gal represents MMI I–II (barely felt), while >300 Gal represents MMI VIII–IX (severe structural damage)."
  },
  examples: {
    title: "Step-by-Step Structural & Earthquake Calculations",
    items: [
      {
        title: "Example 1: Earthquake Shake Table Test",
        subtitle: "A civil engineering shake table in California subjects a model building frame to a peak acceleration of 8.5 ft/s². Convert this to gal.",
        steps: [
          "Record the acceleration value: a = 8.5 ft/s².",
          "Multiply by the exact factor: 8.5 × 30.48.",
          "Compute: 8.5 × 30.48 = 259.08.",
          "Result: 8.5 ft/s² corresponds to a ground shaking intensity of exactly 259.08 Gal."
        ]
      },
      {
        title: "Example 2: US High-Rise Floor Vibration Tolerance",
        subtitle: "A sensitive medical laboratory floor vibration spec allows a maximum acceleration of 0.08 ft/s². Express this in gal.",
        steps: [
          "State the acceleration limit: a = 0.08 ft/s².",
          "Multiply by 30.48: 0.08 × 30.48.",
          "Compute: 0.08 × 30.48 = 2.4384.",
          "Result: 0.08 ft/s² equals approximately 2.44 Gal."
        ]
      }
    ]
  },
  table: {
    title: "Quick Reference Conversion Table",
    headers: ["Input Value", "Converted Result", "Physical Context"],
    rows: [
      { fromVal: "0.05", toVal: "1.524", extra: "Barely perceptible floor tremor" },
      { fromVal: "0.1", toVal: "3.048", extra: "Light perceptible building sway" },
      { fromVal: "0.5", toVal: "15.240", extra: "Noticeable indoor shaking" },
      { fromVal: "1.0", toVal: "30.480", extra: "1 ft/s² exact baseline" },
      { fromVal: "2.5", toVal: "76.200", extra: "Moderate earthquake ground motion" },
      { fromVal: "5.0", toVal: "152.400", extra: "Strong earthquake acceleration" },
      { fromVal: "10.0", toVal: "304.800", extra: "Major earthquake destructive shaking" },
      { fromVal: "15.0", toVal: "457.200", extra: "Severe near-fault ground rupture" },
      { fromVal: "32.174", toVal: "980.663", extra: "Standard 1 g Earth gravity (approx.)" },
      { fromVal: "50.0", toVal: "1524.000", extra: "Extreme dynamic structural impact" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "Earthquake Hazard Mapping & ShakeMap Analysis",
        text: "US Geological Survey (USGS) accelerometer networks convert sensor readings logged in ft/s² into Gal to generate real-time ShakeMaps used by emergency responders."
      },
      {
        title: "Micro-Vibration Sensitive Facility Design",
        text: "Structural engineers designing semiconductor cleanrooms convert vibration criteria between ft/s² and Gal to verify that laser lithography tools remain within optical vibration tolerances."
      },
      {
        title: "Mining & Blast Vibration Monitoring",
        text: "Quarry and tunnel blast monitoring rigs convert peak particle accelerations from ft/s² into Gal to ensure compliance with international blast vibration limits."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Dividing by 30.48 Instead of Multiplying: Because 1 foot is 30.48 centimeters, an acceleration of 1 ft/s² equals 30.48 Gal (cm/s²). Multiplying converts ft/s² to Gal; dividing converts Gal back to ft/s².",
      "Confusing Gal with Gallon: Galileo acceleration 'Gal' must not be confused with the US volume unit gallon (symbol: gal).",
      "Confusing Gal with Milligal (mGal): 1 Gal = 1,000 mGal. Using mGal when Gal is required results in an error of three orders of magnitude (1,000×)."
    ]
  },
  faqs: [
    {
      question: "How do I convert ft/s² to Gal?",
      answer: "Multiply the acceleration in ft/s² by exactly 30.48. For example, 2 ft/s² × 30.48 = 60.96 Gal."
    },
    {
      question: "What is 1 ft/s² in Gal?",
      answer: "1 ft/s² is exactly equal to 30.48 Gal."
    },
    {
      question: "What is 1 Gal in ft/s²?",
      answer: "1 Gal is equal to 1 / 30.48 ft/s², which is approximately 0.0328084 ft/s²."
    },
    {
      question: "Why is 30.48 the exact multiplier?",
      answer: "1 international foot equals exactly 0.3048 meters, which equals 30.48 centimeters. Since 1 Gal = 1 cm/s², the multiplier is 30.48."
    },
    {
      question: "How do I convert Gal back to ft/s²?",
      answer: "Divide the Gal value by 30.48 (or multiply by 0.0328084). For example, 100 Gal ÷ 30.48 ≈ 3.2808 ft/s²."
    },
    {
      question: "What is Earth's gravity in Gal?",
      answer: "Standard Earth gravity is 980.665 Gal, which equals approximately 32.17405 ft/s²."
    },
    {
      question: "What ground acceleration in Gal causes structural damage in earthquakes?",
      answer: "Ground acceleration above 100 to 150 Gal (approx. 3.3 to 5.0 ft/s²) generally begins to cause structural cracks in unreinforced masonry buildings."
    },
    {
      question: "Is Gal an SI unit?",
      answer: "The Gal is a CGS unit, not an official SI unit, but it is internationally recognized for seismology, geophysics, and geodesy."
    }
  ],
  relatedList: [
    { label: "Foot/sec² to Milligal", from: "foot-per-second-squared", to: "milligal-acceleration" },
    { label: "Meter/sec² to Gal", from: "meter-per-second-squared", to: "gal-acceleration" },
    { label: "Foot/sec² to Meter/sec²", from: "foot-per-second-squared", to: "meter-per-second-squared" },
    { label: "Foot/sec² to Standard Gravity (g)", from: "foot-per-second-squared", to: "gravity-acceleration" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - NIST Guide to the SI, Appendix B.8: Factors for Units Listed by System",
    "United States Geological Survey (USGS) - USGS ShakeMap Technical Manual",
    "American Society of Civil Engineers (ASCE) - ASCE 7-22: Minimum Design Loads and Associated Criteria for Buildings"
  ]
};
