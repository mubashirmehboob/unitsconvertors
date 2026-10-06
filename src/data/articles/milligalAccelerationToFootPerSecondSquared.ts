import { CustomArticleData } from "./types";

export const milligalAccelerationToFootPerSecondSquared: CustomArticleData = {
  fromUnitId: "milligal-acceleration",
  toUnitId: "foot-per-second-squared",
  seoTitle: "Milligal to Foot/sec² Converter (mGal to ft/s²) | UnitsConvertors.com",
  metaDescription: "Convert milligal (mGal) to feet per second squared (ft/s²) with exact gravimetric formulas, oilfield geophysics examples, conversion tables, and calculations.",
  h1: "Milligal to Foot/sec² Converter",
  introduction: [
    "The milligal (symbol: mGal) and the foot per second squared (ft/s²) quantify acceleration across geophysical exploration and traditional United States customary engineering. Originating from the centimetre-gram-second (CGS) system, one gal represents 1 cm/s², with the milligal defined as one-thousandth of a gal (10⁻³ Gal or 10⁻⁵ m/s²). The foot per second squared is the standard acceleration unit in the Imperial and US customary systems, defined relative to the international foot (0.3048 meters).",
    "Converting from milligals to feet per second squared is a standard operational procedure in North American petroleum geophysics, groundwater exploration, and mining engineering. While borehole gravimeters and airborne survey systems record density anomalies in milligals, reservoir simulation models and geotechnical foundation software across the United States frequently operate using imperial units (feet, pounds, and seconds). Dividing the surveyed mGal value by 30,480 converts gravity anomalies into equivalent ft/s² values.",
    "This reference guide explains the mathematical relationship linking the metric milligal to imperial feet per second squared, demonstrates practical petroleum and geodetic calculations, provides reference tables, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert milligal (mGal) to feet per second squared (ft/s²), divide by 30,480 (or multiply by approximately 0.0000328084). For example, a gravity anomaly of 100 mGal equals approximately 0.0032808 ft/s².",
    formulaDisplay: "\\text{ft/s}^2 = \\frac{\\text{mGal}}{30480} = \\text{mGal} \\times 3.28084 \\times 10^{-5}",
    subtext: "1 ft/s² equals exactly 30,480 mGal (0.3048 m/s²). 1 mGal equals approximately 0.0000328084 ft/s²."
  },
  aboutSourceUnit: {
    title: "Understanding the Milligal (mGal)",
    text: "The milligal (symbol: mGal) is the standard unit of gravitational anomaly measurement in geodesy and geophysics. Equal to 10⁻³ Gal or 10⁻⁵ m/s² (10 µm/s²), it represents roughly one part per million of Earth's total gravitational field. It allows geologists to express subtle subsurface density contrasts using convenient decimal numbers."
  },
  aboutTargetUnit: {
    title: "Understanding the Foot per Second Squared (ft/s²)",
    text: "The foot per second squared (symbol: ft/s² or ft/sec²) is the US customary and Imperial unit of acceleration. It represents a rate of change of velocity of one foot per second every second. Based on the international foot of 0.3048 meters, 1 ft/s² equals exactly 0.3048 m/s² (or 30,480 mGal). Standard Earth gravity in imperial units is approximately 32.174 ft/s²."
  },
  relationship: "The relationship between milligal and foot per second squared is derived from the exact definition of the international foot (0.3048 m). Because 1 m/s² = 100,000 mGal, 1 ft/s² equals 0.3048 × 100,000 = 30,480 mGal (an exact integer). Inversely, 1 mGal equals 1 / 30,480 ft/s² ≈ 0.000032808399 ft/s².",
  relationshipTitle: "Milligal to Imperial Acceleration Equivalents",
  relationshipItems: [
    { label: "1 mGal", value: "0.00003281 ft/s² (Exact factor 1 / 30,480)" },
    { label: "10 mGal", value: "0.00032808 ft/s² (Standard sedimentary basin anomaly)" },
    { label: "100 mGal", value: "0.00328084 ft/s² (Prominent tectonic gravity signature)" },
    { label: "1,000 mGal", value: "0.03280840 ft/s² (Exact 1.0 Gal equivalence)" },
    { label: "30,480 mGal", value: "1.00000000 ft/s² (Exact 1.0 ft/s² benchmark)" },
    { label: "980,665 mGal", value: "32.17404856 ft/s² (Standard nominal Earth surface gravity)" }
  ],
  formula: {
    text: "Divide the acceleration in milligal by 30,480 (or multiply by approximately 0.0000328084) to calculate feet per second squared.",
    math: "a_{(\\text{ft/s}^2)} = \\frac{a_{(\\text{mGal})}}{30480} = a_{(\\text{mGal})} \\times 3.2808399 \\times 10^{-5}",
    subtext: "30,480 is an exact integer constant derived from (0.3048 m/ft × 100,000 mGal/(m/s²))."
  },
  formulaTitle: "Milligal to Foot/sec² Conversion Formula",
  practicalTip: {
    title: "Exact Fraction Shortcut",
    text: "For high-precision scientific calculations, use the exact rational fraction (mGal / 30,480). For quick field estimates, remember that 30 mGal is approximately 0.001 ft/s² (1 milli-ft/s²), with an error under 1.6%."
  },
  expertNote: {
    title: "Borehole Gravity Logging in Petroleum Reservoirs",
    text: "Borehole gravity meters (BHGM) deployed down oil and gas wells measure vertical gravity gradients in mGal/ft. By converting mGal to ft/s², petroleum engineers calculate apparent bulk formation density (ρb) using Smith's equation: Δg/Δz = 4πGρ, allowing detection of bypassed gas pockets and deep oil-water contacts through steel well casing."
  },
  examples: {
    title: "Step-by-Step Exploration Geophysics Calculations",
    items: [
      {
        title: "Example 1: Gulf Coast Salt Dome Gravity Anomaly",
        subtitle: "A regional gravity survey over an offshore Texas salt dome detects a local Bouguer gravity low of -24 mGal. Express this anomaly in feet per second squared for an imperial geotechnical model.",
        steps: [
          "Identify the anomaly value: Δg = -24 mGal.",
          "Apply the conversion formula: Δg(ft/s²) = Δg(mGal) ÷ 30,480.",
          "Compute: -24 ÷ 30,480 = -0.00078740 ft/s².",
          "Result: -24 mGal equals approximately -0.0007874 ft/s²."
        ]
      },
      {
        title: "Example 2: Deep Borehole Gravimeter Survey Step",
        subtitle: "A borehole gravimeter logs a depth interval Δz of 100 feet and records a gravity change of 5.2 mGal. What is the gravity difference in ft/s²?",
        steps: [
          "State the measured gravity change: Δg = 5.2 mGal.",
          "Divide by 30,480: 5.2 ÷ 30,480 = 0.00017060 ft/s².",
          "Result: 5.2 mGal corresponds to approximately 0.0001706 ft/s²."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Milligal to Foot/sec²",
    headers: ["Acceleration (mGal)", "Acceleration (ft/s²)", "Geological & Engineering Context"],
    rows: [
      { fromVal: "1.0", toVal: "0.0000328", extra: "Micro-gravity survey detection threshold" },
      { fromVal: "5.0", toVal: "0.0001640", extra: "Buried bedrock valley or gravel channel anomaly" },
      { fromVal: "10.0", toVal: "0.0003281", extra: "Local fault displacement signature" },
      { fromVal: "25.0", toVal: "0.0008202", extra: "Moderate oilfield salt dome signature" },
      { fromVal: "50.0", toVal: "0.0016404", extra: "Major sedimentary basin anomaly" },
      { fromVal: "100.0", toVal: "0.0032808", extra: "Prominent regional tectonic anomaly" },
      { fromVal: "500.0", toVal: "0.0164042", extra: "Large crustal subduction zone signature" },
      { fromVal: "1,000.0", toVal: "0.0328084", extra: "Exact 1.0 Gal equivalence" },
      { fromVal: "30,480.0", toVal: "1.0000000", extra: "Exact 1.0 ft/s² benchmark definition" },
      { fromVal: "980,665.0", toVal: "32.1740486", extra: "Standard Earth surface gravity (1.0 g)" }
    ]
  },
  applications: {
    title: "Real-World Engineering and Geological Applications",
    items: [
      {
        title: "Petroleum Reservoir Simulation in US Oilfields",
        text: "Exploration geoscientists convert airborne and ground mGal gravity maps into ft/s² to integrate with imperial seismic depth migration and reservoir modeling software."
      },
      {
        title: "Mining Geotechnical Slope Stability",
        text: "Geotechnical consultants in North America analyze regional gravitational variations and bedrock mass distributions, converting mGal to ft/s² to compute imperial slope stability safety factors."
      },
      {
        title: "Civil Foundation Cavity Detection",
        text: "Microgravimetric surveys identifying limestone karst sinkholes convert localized negative mGal readings into imperial accelerations for foundation soil-structure interaction analysis."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 30,480 instead of dividing: Multiplying converts ft/s² to mGal. To convert mGal to ft/s², you must divide by 30,480.",
      "Confusing the international foot with the US survey foot: The international foot is exactly 0.3048 m (30,480 mGal/ft/s²). The historical US survey foot (1200/3937 m) differs by 2 ppm, but for standard acceleration, the international definition is standard.",
      "Losing precision with small decimal values: Because 1 mGal is roughly 3.28 × 10⁻⁵ ft/s², using single-precision floating point numbers can lead to numerical underflow. Always use double-precision math in engineering code.",
      "Confusing mGal with Gal: 1 Gal is 1,000 mGal. 1 Gal = 0.032808 ft/s², whereas 1 mGal = 0.000032808 ft/s²."
    ]
  },
  faqs: [
    {
      question: "How do you convert milligal (mGal) to ft/s²?",
      answer: "Divide the milligal value by 30,480, or multiply by approximately 0.0000328084. For example, 100 mGal ÷ 30,480 = 0.0032808 ft/s²."
    },
    {
      question: "What is 1 mGal in ft/s²?",
      answer: "1 mGal equals approximately 0.0000328084 ft/s² (or exactly 1 / 30,480 ft/s²)."
    },
    {
      question: "How many milligals are in 1 ft/s²?",
      answer: "There are exactly 30,480 milligals (mGal) in 1 ft/s². This integer relationship comes from 0.3048 m/ft multiplied by 100,000 mGal/(m/s²)."
    },
    {
      question: "How do you convert ft/s² back to milligals?",
      answer: "Multiply the ft/s² value by 30,480. For example, 0.05 ft/s² × 30,480 = 1,524 mGal."
    },
    {
      question: "Why is the conversion factor an exact integer 30,480?",
      answer: "The international foot is defined as exactly 0.3048 meters. Since 1 m/s² equals exactly 100,000 mGal, 1 ft/s² = 0.3048 × 100,000 = 30,480 mGal exactly."
    },
    {
      question: "What is Earth's standard gravity in ft/s²?",
      answer: "Standard Earth gravity of 980,665 mGal (9.80665 m/s²) equals approximately 32.17405 ft/s²."
    },
    {
      question: "How many mGal is an acceleration of 1 milli-ft/s² (0.001 ft/s²)?",
      answer: "0.001 ft/s² equals exactly 30.48 mGal (30,480 ÷ 1,000)."
    },
    {
      question: "Where is this conversion primarily used?",
      answer: "It is widely used in the United States energy sector, mining industry, and civil engineering, where regional gravity survey data (collected in mGal) must interface with imperial engineering design software."
    },
    {
      question: "Is milligal a metric unit?",
      answer: "Yes, the milligal is a metric unit derived from the centimetre-gram-second (CGS) system, named after Galileo Galilei, while ft/s² belongs to the US customary and Imperial systems."
    }
  ],
  relatedList: [
    { label: "Milligal to Meter/sec²", from: "milligal-acceleration", to: "meter-per-second-squared" },
    { label: "Milligal to Gal", from: "milligal-acceleration", to: "gal-acceleration" },
    { label: "Foot/sec² to Milligal", from: "foot-per-second-squared", to: "milligal-acceleration" },
    { label: "Gal to Foot/sec²", from: "gal-acceleration", to: "foot-per-second-squared" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - Refinement of Values for the Yard and the Pound",
    "Society of Exploration Geophysicists (SEG) - Gravity and Magnetics in Exploration",
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "American Petroleum Institute (API) - Recommended Practices for Gravimetric Well Logging"
  ]
};
