import { CustomArticleData } from "./types";

export const gravityAccelerationToMilligalAcceleration: CustomArticleData = {
  fromUnitId: "gravity-acceleration",
  toUnitId: "milligal-acceleration",
  seoTitle: "Standard Gravity (g) to Milligal Converter (g to mGal)",
  metaDescription: "Convert standard gravity (g) to milligals (mGal) with exact geodetic constants, geophysical gravity anomaly formulas, and worked gravimetry examples.",
  h1: "Standard Gravity (g) to Milligal Converter",
  introduction: [
    "Standard gravity (symbol: g) and the milligal (symbol: mGal) represent acceleration across vastly different physical scales. While standard gravity represents the nominal average gravitational acceleration at Earth's surface (9.80665 m/s²), the milligal—one-thousandth of a gal, or 10⁻⁵ m/s²—is the precision unit used by exploration geophysicists, geodesists, and satellite gravimetry missions to detect micro-variations in Earth's gravitational field.",
    "Converting standard gravity to milligals is fundamental when establishing baseline references for terrestrial gravity surveys, satellite orbital tracking (such as GRACE and GOCE), and subsurface mineral exploration. Because one gal equals 0.01 m/s² and one milligal equals 10⁻³ Gal, standard gravity of 9.80665 m/s² converts to exactly 980,665 mGal. Earth's actual gravity varies globally by roughly 5,000 mGal between the equator and the poles, making the milligal the ideal working unit.",
    "This reference guide explains the physical definition of the milligal, demonstrates how local gravity anomalies and lunar tides are measured against standard gravity, provides worked calculations, and presents comprehensive data tables."
  ],
  quickAnswer: {
    text: "To convert standard gravity (g) to milligals (mGal), multiply the g-value by exactly 980,665. For example, 1 g corresponds to exactly 980,665 mGal, while a micro-anomaly of 0.00001 g equals 9.80665 mGal.",
    formulaDisplay: "\\text{mGal} = g \\times 980{,}665",
    subtext: "1 g is equal to exactly 980,665 mGal (since 1 mGal = 10⁻⁵ m/s² and 1 g = 9.80665 m/s²)."
  },
  aboutSourceUnit: {
    title: "Understanding Standard Gravity (g)",
    text: "Standard gravity (symbol: g, or g₀) is an internationally defined constant established in 1901 by the 3rd CGPM, set at exactly 9.80665 m/s². It represents the nominal gravitational acceleration at Earth sea level at 45° latitude, serving as the macroscopic reference baseline for aerospace flight loads and physical constants."
  },
  aboutTargetUnit: {
    title: "Understanding the Milligal (mGal)",
    text: "The milligal (symbol: mGal) is a metric derivative of the gal, defined as one-thousandth of a gal (1 mGal = 10⁻³ Gal = 10⁻⁵ m/s² = 10 µm/s²). Because 1 mGal represents roughly one-millionth of Earth's total gravitational pull (~1.02 µg), it is the global standard unit for expressing Bouguer anomalies, tidal variations, and geodetic surveys."
  },
  relationship: "The relationship between standard gravity and the milligal is exact: 1 g = 9.80665 m/s², and 1 mGal = 0.00001 m/s² (10⁻⁵ m/s²). Dividing 9.80665 by 0.00001 gives exactly 980,665 mGal per standard g. Conversely, 1 mGal = 1 / 980,665 ≈ 1.0197162 × 10⁻⁶ g (approximately 1.0197 micro-g).",
  relationshipTitle: "Gravimetry & Anomaly Scale Benchmarks",
  relationshipItems: [
    { label: "1.0197 × 10⁻⁶ g", value: "1.00000 mGal (1 µm/s² / 0.1, fundamental survey unit)" },
    { label: "0.0001 g", value: "98.06650 mGal (Major regional crustal gravity anomaly)" },
    { label: "0.005 g", value: "4,903.325 mGal (Approximate equator-to-pole gravity delta)" },
    { label: "0.01 g", value: "9,806.650 mGal (Strong earthquake seismic acceleration)" },
    { label: "0.1 g", value: "98,066.500 mGal (Severe seismic ground acceleration)" },
    { label: "1.0 g", value: "980,665.000 mGal (Standard Earth surface gravity baseline)" }
  ],
  formula: {
    text: "Multiply the acceleration in standard gravity units (g) by exactly 980,665 to calculate the value in milligals.",
    math: "a_{(\\text{mGal})} = a_{(g)} \\times 980{,}665",
    subtext: "980,665 is an exact constant: 9.80665 m/s² ÷ 10⁻⁵ m/s²/mGal."
  },
  formulaTitle: "g to mGal Conversion Formula",
  practicalTip: {
    title: "Rule of Thumb for Gravity Variations",
    text: "Remember that 1 mGal is approximately equal to 1 micro-g (1 µg = 10⁻⁶ g). For example, a local elevation change of 3 meters in air alters measured gravity by roughly 1 mGal due to the free-air gradient (~0.3086 mGal/m)."
  },
  expertNote: {
    title: "Bouguer Anomalies and Subsurface Exploration",
    text: "In mineral and petroleum exploration, relative gravimeters (like Scintrex or LaCoste & Romberg instruments) measure gravity differences to within 0.01 mGal (10 micro-gals). Subsurface salt domes produce negative gravity anomalies (-10 to -30 mGal), while dense metallic ore bodies produce positive anomalies (+2 to +15 mGal)."
  },
  examples: {
    title: "Step-by-Step Gravimetric Calculations",
    items: [
      {
        title: "Example 1: Regional Bouguer Anomaly Measurement",
        subtitle: "A geophysicist surveying an ancient volcanic crater detects a positive gravity anomaly of 0.000035 g. Convert this anomaly to milligals.",
        steps: [
          "State the anomaly value: a = 0.000035 g.",
          "Multiply by the exact factor 980,665: 0.000035 × 980,665.",
          "Compute: 0.000035 × 980,665 = 34.323275.",
          "Result: The anomaly equals approximately +34.32 mGal."
        ]
      },
      {
        title: "Example 2: Lunar Tidal Fluctuation",
        subtitle: "Tidal forces exerted by the Moon and Sun alter the local gravitational acceleration by up to 0.00000025 g over a 12-hour cycle. Express this tidal range in mGal.",
        steps: [
          "Identify the tidal delta: a = 0.00000025 g (2.5 × 10⁻⁷ g).",
          "Apply the formula: (2.5 × 10⁻⁷) × 980,665.",
          "Compute: 0.00000025 × 980,665 = 0.24516625.",
          "Result: The tidal gravity variation corresponds to approximately 0.25 mGal."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: g to mGal",
    headers: ["G-Force (g)", "Acceleration (mGal)", "Geophysical / Survey Context"],
    rows: [
      { fromVal: "0.000001", toVal: "0.9807", extra: "Approx. 1 µg, local gravity elevation drift" },
      { fromVal: "0.000010", toVal: "9.8067", extra: "Moderate mineral deposit Bouguer anomaly" },
      { fromVal: "0.000100", toVal: "98.0665", extra: "Deep ocean trench gravity anomaly" },
      { fromVal: "0.001000", toVal: "980.6650", extra: "1 Gal exact equivalent" },
      { fromVal: "0.005000", toVal: "4,903.3250", extra: "Equator vs Polar centrifugal gravity variation" },
      { fromVal: "0.010000", toVal: "9,806.6500", extra: "Noticeable seismic ground motion" },
      { fromVal: "0.100000", toVal: "98,066.5000", extra: "Strong earthquake ground acceleration" },
      { fromVal: "0.500000", toVal: "490,332.5000", extra: "Severe destructive seismic PGA" },
      { fromVal: "1.000000", toVal: "980,665.0000", extra: "Nominal standard Earth gravity (1 g)" },
      { fromVal: "2.000000", toVal: "1,961,330.0000", extra: "Extreme near-fault earthquake record peak" }
    ]
  },
  applications: {
    title: "Real-World Geodetic & Exploration Applications",
    items: [
      {
        title: "Oil, Gas, and Mineral Exploration",
        text: "Exploration geologists map sub-surface salt domes, anticlines, and mineral veins by measuring micro-anomalies of 0.1 to 10 mGal against regional background gravity."
      },
      {
        title: "Satellite Geodesy & Global Geoid Modeling",
        text: "Missions such as GRACE and GOCE map Earth's dynamic gravity field in milligals to monitor polar ice sheet mass loss, ocean currents, and groundwater depletion."
      },
      {
        title: "Civil Tunneling & Underground Cavity Detection",
        text: "Microgravimetry surveys on the surface detect subtle negative gravity signatures (0.05 to 0.5 mGal) caused by hidden subterranean sinkholes, voids, or abandoned mines."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing mGal with Gal: 1 Gal = 1,000 mGal. Standard gravity is 980.665 Gal, but 980,665 mGal. A factor of 1,000 mistake invalidates geodetic anomaly data.",
      "Assuming 1 mGal = 1 µg exactly: While 1 mGal is often approximated as 1 µg, 1 mGal is actually 1.0197 µg (a 1.97% difference). Precision geodetic corrections require the exact 980,665 factor.",
      "Omitting elevation and latitude corrections: When comparing field measurements in mGal to standard gravity, failing to apply the free-air correction (+0.3086 mGal/m) and Bouguer slab correction produces false anomaly readings."
    ]
  },
  faqs: [
    {
      question: "How do you convert g to mGal?",
      answer: "Multiply the g-value by exactly 980,665. For example, 0.001 g × 980,665 = 980.665 mGal (exactly 1 Gal)."
    },
    {
      question: "What is 1 g in milligals?",
      answer: "1 g is equal to exactly 980,665 mGal."
    },
    {
      question: "What is the physical size of 1 milligal?",
      answer: "1 milligal is defined as 10⁻³ Gal, which equals 10⁻⁵ m/s² (or 10 micrometers per second squared). It represents roughly one-millionth of Earth's surface gravity."
    },
    {
      question: "How do you convert mGal back to g?",
      answer: "Divide the mGal value by 980,665, or multiply by approximately 1.019716 × 10⁻⁶. For instance, 980,665 mGal ÷ 980,665 = 1.0 g."
    },
    {
      question: "Is 1 mGal roughly equal to 1 micro-g?",
      answer: "Yes, 1 mGal is approximately 1.02 micro-g (µg). The two units are frequently used interchangeably in informal field discussions."
    },
    {
      question: "How many mGal does Earth's gravity vary between the equator and the poles?",
      answer: "Earth's surface gravity increases by approximately 5,186 mGal (~5.2 Gal, or 0.052 m/s²) from the equator (~978,032 mGal) to the geographic poles (~983,218 mGal)."
    },
    {
      question: "What is a gravity anomaly in mGal?",
      answer: "A gravity anomaly is the difference between the observed local gravitational acceleration (corrected for latitude, elevation, and terrain) and the theoretical standard gravity, expressed in mGal."
    },
    {
      question: "What instrument measures gravity in milligals?",
      answer: "A gravimeter (such as a spring-based LaCoste & Romberg instrument, or a superconducting or falling-atom absolute gravimeter) measures gravity in milligals and microgals."
    }
  ],
  relatedList: [
    { label: "Standard Gravity (g) to Gal", from: "gravity-acceleration", to: "gal-acceleration" },
    { label: "Standard Gravity (g) to Meter/sec²", from: "gravity-acceleration", to: "meter-per-second-squared" },
    { label: "Foot/sec² to Milligal", from: "foot-per-second-squared", to: "milligal-acceleration" },
    { label: "Meter/sec² to Milligal", from: "meter-per-second-squared", to: "milligal-acceleration" }
  ],
  references: [
    "International Association of Geodesy (IAG) - The Geodetic Reference System 1980 (GRS80)",
    "Bureau Gravimétrique International (BGI) - Terrestrial and Airborne Gravimetry Standards",
    "U.S. Geological Survey (USGS) - Potential-Field Geophysical Software and Anomaly Reduction Guidelines"
  ]
};
