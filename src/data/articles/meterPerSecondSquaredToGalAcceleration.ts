import { CustomArticleData } from "./types";

export const meterPerSecondSquaredToGalAcceleration: CustomArticleData = {
  fromUnitId: "meter-per-second-squared",
  toUnitId: "gal-acceleration",
  seoTitle: "Meter/sec² to Gal Converter (m/s² to Gal)",
  metaDescription: "Convert meters per second squared to gal (m/s² to Gal) with exact CGS metric formulas, geodetic gravimetry examples, reference tables, and FAQs.",
  h1: "Meter/sec² to Gal Converter",
  introduction: [
    "The meter per second squared (m/s²) and the gal (symbol: Gal) are metric units of acceleration. The meter per second squared is the base acceleration standard in the modern SI framework, while the gal (named in honor of the Italian astronomer and physicist Galileo Galilei) is the standard unit of acceleration in the centimeter-gram-second (CGS) system.",
    "Converting meters per second squared to gal is common in geophysics, gravimetric surveying, mineral exploration, geodesy, and earthquake seismology. Because one gal is defined as exactly one centimeter per second squared (1 Gal = 1 cm/s² = 0.01 m/s²), one meter per second squared equals exactly 100 gal. This simple decimal factor allows instantaneous, loss-free conversions.",
    "This technical guide explores the historical evolution of the gal in gravitational research, outlines exact conversion formulas, provides real-world geological survey calculations, and presents comprehensive reference tables."
  ],
  quickAnswer: {
    text: "To convert meters per second squared (m/s²) to gal (Gal), multiply the acceleration value by exactly 100. For example, standard gravity of 9.80665 m/s² equals exactly 980.665 Gal.",
    formulaDisplay: "\\text{Gal} = \\text{m/s}^2 \\times 100",
    subtext: "1 m/s² is exactly equal to 100 Gal (where 1 Gal = 1 cm/s²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter per Second Squared (m/s²)",
    text: "The meter per second squared (m/s²) is the coherent derived unit of acceleration in the International System of Units (SI). It describes an increase or decrease in velocity of one meter per second over a one-second duration, serving as the foundational unit for classical kinematics, aerospace dynamics, and mechanical vibration analysis."
  },
  aboutTargetUnit: {
    title: "Understanding the Gal (Gal)",
    text: "The gal (symbol: Gal, previously called galileo) is the CGS unit of acceleration, defined as 1 centimeter per second squared (1 Gal = 1 cm/s² = 10⁻² m/s²). Although not an SI unit, it remains universally accepted and widely used in geodesy, marine geophysics, and planetary gravimetry."
  },
  relationship: "The relationship between meters per second squared and gal is purely decimal and exact: 1 Gal = 0.01 m/s² (1 cm/s²). Therefore, 1 m/s² = 100 Gal. Converting between these units requires shifting the decimal point two places to the right (from m/s² to Gal) or two places to the left (from Gal to m/s²).",
  relationshipTitle: "Gravimetric Acceleration Scale",
  relationshipItems: [
    { label: "0.01 m/s²", value: "1 Gal (Centimeter per second squared definition)" },
    { label: "1 m/s²", value: "100 Gal (SI base acceleration equivalent)" },
    { label: "9.780 m/s²", value: "978.000 Gal (Equatorial Earth surface gravity)" },
    { label: "9.80665 m/s²", value: "980.665 Gal (Standard nominal Earth gravity, g₀)" },
    { label: "9.832 m/s²", value: "983.200 Gal (Polar Earth surface gravity)" }
  ],
  formula: {
    text: "Multiply the acceleration in meters per second squared by 100 to obtain the acceleration in gal.",
    math: "a_{(\\text{Gal})} = a_{(\\text{m/s}^2)} \\times 100",
    subtext: "100 is an exact conversion factor by definition (1 m = 100 cm)."
  },
  formulaTitle: "m/s² to Gal Mathematical Formula",
  practicalTip: {
    title: "Instant Mental Conversion",
    text: "Because 1 m = 100 cm, simply shift the decimal point two places to the right to convert m/s² to Gal (e.g., 9.81 m/s² → 981 Gal)."
  },
  expertNote: {
    title: "Capitalization Standard (Gal vs gal)",
    text: "Under ISO and IUPAP conventions, the unit symbol is capitalized as 'Gal' to honor Galileo Galilei, while avoiding confusion with the US liquid unit gallon (symbol: gal)."
  },
  examples: {
    title: "Step-by-Step Gravimetry Examples",
    items: [
      {
        title: "Example 1: Regional Gravitational Anomaly Measurement",
        subtitle: "Convert a local surface gravitational acceleration of 9.8124 m/s² into gal for geophysical mapping.",
        steps: [
          "Record the measured acceleration: a = 9.8124 m/s².",
          "Multiply by the exact conversion factor: 9.8124 × 100.",
          "Calculate: 9.8124 × 100 = 981.24.",
          "Result: 9.8124 m/s² equals exactly 981.24 Gal."
        ]
      },
      {
        title: "Example 2: Seismic Peak Ground Acceleration (PGA)",
        subtitle: "Convert a strong earthquake peak horizontal ground acceleration of 3.45 m/s² into gal.",
        steps: [
          "State the peak ground acceleration: a = 3.45 m/s².",
          "Apply the multiplier: 3.45 × 100.",
          "Compute: 3.45 × 100 = 345.",
          "Result: 3.45 m/s² corresponds to a ground shake acceleration of 345 Gal."
        ]
      }
    ]
  },
  table: {
    title: "Quick Reference Conversion Table",
    headers: ["Input Value", "Converted Result", "Physical Context"],
    rows: [
      { fromVal: "0.01", toVal: "1.000", extra: "CGS base unit equivalence (1 cm/s²)" },
      { fromVal: "0.05", toVal: "5.000", extra: "Subtle seismic ground tremor" },
      { fromVal: "0.1", toVal: "10.000", extra: "Minor perceptible earthquake motion" },
      { fromVal: "0.5", toVal: "50.000", extra: "Moderate seismic shaking threshold" },
      { fromVal: "1", toVal: "100.000", extra: "1 m/s² SI reference baseline" },
      { fromVal: "2", toVal: "200.000", extra: "Severe earthquake structural shaking" },
      { fromVal: "5", toVal: "500.000", extra: "Violent near-fault seismic acceleration" },
      { fromVal: "9.80665", toVal: "980.665", extra: "Standard terrestrial gravity (1 g)" },
      { fromVal: "10", toVal: "1000.000", extra: "High dynamic acceleration test level" },
      { fromVal: "20", toVal: "2000.000", extra: "Aerospace centrifuge simulation" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "Geodetic & Satellite Gravimetry",
        text: "Geophysicists convert planetary gravity models and GRACE/GOCE satellite measurements between m/s² and Gal to track subsurface magma flows and ice sheet mass variations."
      },
      {
        title: "Seismology & Strong Motion Instrumentation",
        text: "Seismic stations log peak ground acceleration during earthquakes in Gal (and m/s²) to rapidly estimate Mercalli seismic intensity and structural damage risk."
      },
      {
        title: "Petroleum & Mineral Subsurface Exploration",
        text: "Gravimetric exploration crews survey subsurface rock density contrasts by converting microgravimeter readings from m/s² into Gal to identify salt domes and mineral deposits."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Confusing Gal with Gallon: In English documentation, 'Gal' (capital G) denotes the acceleration unit (cm/s²), whereas 'gal' (lowercase g) represents the US volume unit gallon (3.785 liters).",
      "Dividing by 100 Instead of Multiplying: Because 1 Gal is smaller than 1 m/s² (1 Gal = 0.01 m/s²), converting from m/s² to Gal requires multiplying by 100, not dividing.",
      "Confusing Gal with Milligal (mGal): 1 Gal = 1,000 mGal = 0.01 m/s². Gravitational anomaly maps often use milligals, which are 1,000 times smaller than a Gal."
    ]
  },
  faqs: [
    {
      question: "How do I convert m/s² to Gal?",
      answer: "Multiply the acceleration in m/s² by exactly 100. For example, 9.80665 m/s² × 100 = 980.665 Gal."
    },
    {
      question: "What is 1 Gal in m/s²?",
      answer: "1 Gal is equal to exactly 0.01 m/s² (or 1 cm/s²)."
    },
    {
      question: "What is Earth's gravity in Gal?",
      answer: "Standard Earth gravity is defined as 980.665 Gal (9.80665 m/s²). Actual surface gravity ranges from roughly 978 Gal at the equator to 983 Gal at the poles."
    },
    {
      question: "Who is the unit Gal named after?",
      answer: "The Gal is named in honor of Galileo Galilei, who conducted the first quantitative experiments on gravitational acceleration and falling bodies."
    },
    {
      question: "Is Gal an official SI unit?",
      answer: "The Gal is not an official SI unit, but it is a non-SI unit accepted for use in specialized fields like geophysics, geodesy, and seismology."
    },
    {
      question: "How many milligals are in one Gal?",
      answer: "There are exactly 1,000 milligals (mGal) in 1 Gal, and 100,000 milligals in 1 m/s²."
    },
    {
      question: "Why do seismologists use Gal for earthquake measurements?",
      answer: "Seismologists use Gal because acceleration in cm/s² provides intuitive numbers for ground motion; 1 Gal is roughly the threshold of human perception for shaking."
    },
    {
      question: "How do I convert Gal back to m/s²?",
      answer: "Divide the Gal value by 100 (or multiply by 0.01). For instance, 500 Gal ÷ 100 = 5 m/s²."
    }
  ],
  relatedList: [
    { label: "Meter/sec² to Milligal", from: "meter-per-second-squared", to: "milligal-acceleration" },
    { label: "Foot/sec² to Gal", from: "foot-per-second-squared", to: "gal-acceleration" },
    { label: "Meter/sec² to Standard Gravity (g)", from: "meter-per-second-squared", to: "gravity-acceleration" },
    { label: "Meter/sec² to Foot/sec²", from: "meter-per-second-squared", to: "foot-per-second-squared" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - NIST Special Publication 811: Guide for the Use of the SI (Appendix B.8)",
    "International Union of Geodesy and Geophysics (IUGG) - IUGG Geodetic Reference System Standards",
    "United States Geological Survey (USGS) - USGS Earthquake Hazards Program: Technical Glossary"
  ]
};
