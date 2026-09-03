import { CustomArticleData } from "./types";

export const gravityAccelerationToGalAcceleration: CustomArticleData = {
  fromUnitId: "gravity-acceleration",
  toUnitId: "gal-acceleration",
  seoTitle: "Standard Gravity (g) to Gal Converter (g to Gal)",
  metaDescription: "Convert standard gravity (g) to gal (Gal) with exact geodetic definitions, seismology peak ground acceleration formulas, and step-by-step examples.",
  h1: "Standard Gravity (g) to Gal Converter",
  introduction: [
    "Standard gravity (symbol: g) and the gal (symbol: Gal) are primary units utilized in gravitational physics, geodesy, and earthquake engineering. While standard gravity represents the nominal planetary baseline of 9.80665 m/s² commonly referenced in aerospace and mechanics, the gal—named in honor of the Italian astronomer and physicist Galileo Galilei—is the non-SI unit of acceleration in the centimetre-gram-second (CGS) system, defined as exactly one centimeter per second squared (1 Gal = 1 cm/s² = 0.01 m/s²).",
    "Converting standard gravity to gals is standard in geophysics, seismic hazard mapping, structural foundation engineering, and borehole gravimetry. Because 1 meter contains 100 centimeters, standard gravity of 9.80665 m/s² converts to exactly 980.665 Gal. In seismic instrumentation, strong-motion earthquake accelerograms often record peak ground acceleration (PGA) in gals, which civil engineers convert to fractional g-loads to calculate lateral shear forces on buildings.",
    "This technical guide explains the exact physical relationship between standard gravity and the gal, provides worked seismological examples, reference conversion tables, and answers common questions from geophysicists and structural engineers."
  ],
  quickAnswer: {
    text: "To convert standard gravity (g) to gal (Gal), multiply the g-value by exactly 980.665. For example, a strong seismic tremor of 0.25 g corresponds to exactly 245.16625 Gal.",
    formulaDisplay: "\\text{Gal} = g \\times 980.665",
    subtext: "1 g is equal to exactly 980.665 Gal (derived from 9.80665 m/s² × 100 cm/m)."
  },
  aboutSourceUnit: {
    title: "Understanding Standard Gravity (g)",
    text: "Standard gravity (symbol: g, or g₀) is an internationally recognized conventional constant established by the 3rd CGPM in 1901. Set at exactly 9.80665 m/s², it provides an invariant baseline representing nominal gravity at sea level. In civil and seismic engineering, seismic forces are commonly expressed as a percentage of gravity (%g)."
  },
  aboutTargetUnit: {
    title: "Understanding the Gal (Gal)",
    text: "The gal (symbol: Gal, sometimes termed galileo) is the CGS unit of acceleration, defined as one centimeter per second squared (1 Gal = 1 cm/s² = 10⁻² m/s²). Although not an official SI unit, the gal is universally accepted across gravimetry, geophysics, and seismology to measure terrestrial gravity variations and earthquake ground motions."
  },
  relationship: "The relationship between standard gravity and the gal is exact. Since standard gravity is 9.80665 m/s² and 1 Gal is 0.01 m/s² (1 cm/s²), dividing 9.80665 by 0.01 yields exactly 980.665 Gal per g. Conversely, 1 Gal equals 1 / 980.665 ≈ 0.001019716 g (approximately 1.02 milli-g).",
  relationshipTitle: "Gravitational & Seismic Benchmark Equivalence",
  relationshipItems: [
    { label: "0.00102 g", value: "1.00000 Gal (Exact 1 Gal baseline, ~1 m/s² / 100)" },
    { label: "0.01 g", value: "9.80665 Gal (Noticeable earthquake shaking threshold)" },
    { label: "0.10 g", value: "98.06650 Gal (Moderate earthquake ground motion)" },
    { label: "0.50 g", value: "490.33250 Gal (Severe earthquake ground acceleration)" },
    { label: "1.00 g", value: "980.66500 Gal (Standard planetary surface gravity)" },
    { label: "2.00 g", value: "1961.33000 Gal (Extreme near-fault earthquake PGA)" }
  ],
  formula: {
    text: "Multiply the acceleration in standard gravity units (g) by 980.665 to calculate the acceleration in gal.",
    math: "a_{(\\text{Gal})} = a_{(g)} \\times 980.665",
    subtext: "980.665 is an exact constant: 9.80665 m/s² × 100 cm/m."
  },
  formulaTitle: "g to Gal Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To approximate Gal from g in your head, multiply by 1,000 and subtract 2%. For example, 0.4 g → 0.4 × 1,000 = 400; subtracting 2% (8) yields 392 Gal, very close to the exact 392.27 Gal."
  },
  expertNote: {
    title: "Seismic Intensity and Peak Ground Acceleration",
    text: "In earthquake engineering, peak ground acceleration (PGA) recorded by strong-motion accelerographs is commonly reported in Gal. A ground acceleration of 100 to 250 Gal (~0.1 to 0.25 g) corresponds roughly to Modified Mercalli Intensity (MMI) VII (Very Strong), causing architectural cracking in unreinforced masonry."
  },
  examples: {
    title: "Step-by-Step Geodetic & Seismic Calculations",
    items: [
      {
        title: "Example 1: Strong-Motion Earthquake Shaking",
        subtitle: "A seismic station records a peak horizontal ground acceleration of 0.35 g during an earthquake. Express this motion in Gal.",
        steps: [
          "State the recorded seismic value: a = 0.35 g.",
          "Multiply by the exact conversion factor: 0.35 × 980.665.",
          "Compute: 0.35 × 980.665 = 343.23275.",
          "Result: 0.35 g corresponds to exactly 343.23 Gal."
        ]
      },
      {
        title: "Example 2: Centrifuge Gravitational Calibration",
        subtitle: "A geotechnical geotechnical centrifuge subjects a soil model to an artificial field of 25.0 g. Convert this field intensity to Gal.",
        steps: [
          "Identify the g-multiplier: a = 25.0 g.",
          "Apply the formula: 25.0 × 980.665.",
          "Compute: 25.0 × 980.665 = 24,516.625.",
          "Result: 25.0 g equals exactly 24,516.63 Gal."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: g to Gal",
    headers: ["G-Force (g)", "Acceleration (Gal)", "Seismic / Geophysical Context"],
    rows: [
      { fromVal: "0.001", toVal: "0.9807", extra: "Perceptible building ambient micro-vibration" },
      { fromVal: "0.010", toVal: "9.8067", extra: "MMI IV: Light felt earthquake vibration" },
      { fromVal: "0.050", toVal: "49.0333", extra: "MMI VI: Moderate shaking, small objects move" },
      { fromVal: "0.100", toVal: "98.0665", extra: "MMI VII: Strong shaking, building damage begins" },
      { fromVal: "0.200", toVal: "196.1330", extra: "MMI VIII: Severe structural damage" },
      { fromVal: "0.500", toVal: "490.3325", extra: "MMI IX: Violent destructive shaking" },
      { fromVal: "1.000", toVal: "980.6650", extra: "Standard Earth surface gravity (1 g)" },
      { fromVal: "1.500", toVal: "1470.9975", extra: "Super-critical seismic vertical thrust" },
      { fromVal: "2.000", toVal: "1961.3300", extra: "Extreme near-fault earthquake record peak" },
      { fromVal: "5.000", toVal: "4903.3250", extra: "Geotechnical test centrifuge model field" }
    ]
  },
  applications: {
    title: "Real-World Geophysical & Engineering Applications",
    items: [
      {
        title: "Earthquake Hazard Assessment & ShakeMaps",
        text: "Geological survey agencies (such as the USGS and JMA) capture ground accelerations in Gal from digital seismometer networks and publish ShakeMaps used by emergency response planners."
      },
      {
        title: "Structural Seismic Building Codes",
        text: "Civil engineers design base isolation systems and damping struts using spectral acceleration parameters converted between fractional g (%g) and Gal to meet building seismic codes."
      },
      {
        title: "Geodetic Gravimetry & Earth Crustal Dynamics",
        text: "Gravitational exploration instruments measure variations in Earth's gravitational pull relative to the nominal 980.665 Gal baseline to detect sub-surface density anomalies."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing Gal with Milligal (mGal): 1 Gal equals 1,000 mGal. Standard gravity is 980.665 Gal, but 980,665 mGal. Confusing the prefix creates a 1,000-fold error.",
      "Dividing by 980.665 instead of multiplying: 1 g is 980.665 Gal, so multiplying g by 980.665 yields Gal. Dividing Gal by 980.665 converts back to g.",
      "Confusing Gal with Gallon (gal): The unit of acceleration is capitalized as 'Gal' (or 'gal' in lowercase text), while the volumetric unit gallon is abbreviated 'gal'. Keep contexts distinct."
    ]
  },
  faqs: [
    {
      question: "How do you convert g to Gal?",
      answer: "Multiply the g-value by exactly 980.665. For example, 0.2 g × 980.665 = 196.133 Gal."
    },
    {
      question: "What is 1 g in Gal?",
      answer: "1 g is equal to exactly 980.665 Gal."
    },
    {
      question: "What is the physical definition of a Gal?",
      answer: "A Gal is defined in the CGS metric system as exactly 1 centimeter per second squared (1 cm/s²), which equals 0.01 m/s²."
    },
    {
      question: "How do you convert Gal back to g?",
      answer: "Divide the Gal value by 980.665, or multiply by approximately 0.00101972. For example, 490.33 Gal ÷ 980.665 ≈ 0.5 g."
    },
    {
      question: "Why do seismologists use Gal instead of m/s²?",
      answer: "Gal has deep historical roots in seismology and gravimetry. Because 1 Gal is roughly 1/1,000th of Earth's gravity (1 mGal is one-millionth), it conveniently scales ground vibrations."
    },
    {
      question: "How many Gal is an earthquake of 0.5 g?",
      answer: "An earthquake ground motion of 0.5 g equals exactly 490.3325 Gal."
    },
    {
      question: "Is Gal an official SI unit?",
      answer: "No. The Gal is a CGS unit, but it is officially accepted by the BIPM for use alongside the SI in specialized fields like geodesy and geophysics."
    },
    {
      question: "What is the relationship between Gal and m/s²?",
      answer: "1 m/s² equals exactly 100 Gal, and 1 Gal equals exactly 0.01 m/s²."
    }
  ],
  relatedList: [
    { label: "Standard Gravity (g) to Milligal", from: "gravity-acceleration", to: "milligal-acceleration" },
    { label: "Standard Gravity (g) to Meter/sec²", from: "gravity-acceleration", to: "meter-per-second-squared" },
    { label: "Gal to Meter/sec²", from: "gal-acceleration", to: "meter-per-second-squared" },
    { label: "Gal to Foot/sec²", from: "gal-acceleration", to: "foot-per-second-squared" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "United States Geological Survey (USGS) - ShakeMap Technical Manual: Ground Motion Measurement and Interpolation",
    "International Association of Geodesy (IAG) - Fundamental Geodetic Parameters and Gravimetric Reference Systems"
  ]
};
