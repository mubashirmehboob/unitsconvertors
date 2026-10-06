import { CustomArticleData } from "./types";

export const milligalAccelerationToMeterPerSecondSquared: CustomArticleData = {
  fromUnitId: "milligal-acceleration",
  toUnitId: "meter-per-second-squared",
  seoTitle: "Milligal to Meter/sec² Converter (mGal to m/s²) | UnitsConvertors.com",
  metaDescription: "Convert milligal (mGal) to meters per second squared (m/s²) with exact metric formulas, geodetic survey calculations, microgravity examples, and tables.",
  h1: "Milligal to Meter/sec² Converter",
  introduction: [
    "The milligal (symbol: mGal) and the meter per second squared (m/s²) measure acceleration across specialized geophysics and general International System of Units (SI) physics. Originating from the centimetre-gram-second (CGS) system, the gal is defined as 1 cm/s², making the milligal one-thousandth of a gal (10⁻³ Gal). In SI terms, 1 mGal equals exactly 10⁻⁵ meters per second squared (0.00001 m/s² or 10 micrometers per second squared).",
    "Converting from milligals to meters per second squared is essential when integrating terrestrial gravity anomaly surveys, borehole gravimetry, and airborne geodetic data into SI-based numerical simulation packages. Geodetic software, orbital satellite mechanics (such as the GRACE and GOCE gravity recovery missions), and structural finite element analysis (FEA) operate strictly in standard SI base units (meters, kilograms, and seconds). Dividing the surveyed mGal value by 100,000 provides the precise m/s² acceleration needed for SI dynamic equations.",
    "This technical guide explains the exact dimensional derivation connecting mGal to m/s², illustrates geodetic and geophysical calculations step by step, provides comprehensive reference tables, and answers common questions regarding gravity anomaly conversion."
  ],
  quickAnswer: {
    text: "To convert milligal (mGal) to meters per second squared (m/s²), multiply by exactly 0.00001 (10⁻⁵), or divide by 100,000. For example, a Bouguer gravity anomaly of 45 mGal equals exactly 0.00045 m/s².",
    formulaDisplay: "\\text{m/s}^2 = \\text{mGal} \\times 10^{-5} = \\frac{\\text{mGal}}{100000}",
    subtext: "1 mGal equals exactly 0.00001 m/s² (10 µm/s²). 1 m/s² equals exactly 100,000 mGal."
  },
  aboutSourceUnit: {
    title: "Understanding the Milligal (mGal)",
    text: "The milligal (symbol: mGal) is the standard geophysical unit for measuring terrestrial gravity anomalies. Defined as 10⁻³ Gal (10⁻⁵ m/s²), it represents approximately one part per million (~1 ppm) of Earth's nominal surface gravitational acceleration. It provides a convenient integer scale for regional gravity surveys without requiring scientific exponent notation."
  },
  aboutTargetUnit: {
    title: "Understanding the Meter per Second Squared (m/s²)",
    text: "The meter per second squared (symbol: m/s²) is the coherent derived unit of acceleration in the International System of Units (SI). It quantifies the rate of change of velocity in meters per second for each second of elapsed time. It is the fundamental acceleration unit used across Newtonian mechanics, structural dynamics, and aerospace engineering."
  },
  relationship: "The relationship between the milligal and the meter per second squared is an exact power of ten. Because 1 Gal = 1 cm/s² = 0.01 m/s² (10⁻² m/s²), one-thousandth of a Gal (1 mGal) equals 0.01 ÷ 1,000 = 0.00001 m/s² (10⁻⁵ m/s²). Inversely, 1 m/s² contains exactly 100,000 mGal.",
  relationshipTitle: "Milligal to SI Acceleration Exact Power Ratio",
  relationshipItems: [
    { label: "1 mGal", value: "0.00001 m/s² (10 µm/s², exact definition)" },
    { label: "10 mGal", value: "0.00010 m/s² (100 µm/s², moderate geological anomaly)" },
    { label: "100 mGal", value: "0.00100 m/s² (1.0 mm/s², prominent tectonic trench anomaly)" },
    { label: "1,000 mGal", value: "0.01000 m/s² (Exact 1.0 Gal equivalence)" },
    { label: "100,000 mGal", value: "1.00000 m/s² (Exact 1.0 m/s² benchmark)" },
    { label: "980,665 mGal", value: "9.80665 m/s² (Standard nominal Earth surface gravity)" }
  ],
  formula: {
    text: "Divide the acceleration in milligal by 100,000 (or multiply by 10⁻⁵ / 0.00001) to obtain meters per second squared.",
    math: "a_{(\\text{m/s}^2)} = \\frac{a_{(\\text{mGal})}}{100000} = a_{(\\text{mGal})} \\times 10^{-5}",
    subtext: "10⁻⁵ is an exact conversion factor derived from (10⁻³ Gal × 0.01 m/s² per Gal)."
  },
  formulaTitle: "Milligal to Meter/sec² Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Shortcut",
    text: "To convert mGal to m/s² manually, shift the decimal point five places to the left. For instance, 250 mGal becomes 0.0025 m/s², and 15 mGal becomes 0.00015 m/s²."
  },
  expertNote: {
    title: "Satellite Gravimetry and Geopotential Modeling",
    text: "In global geopotential spherical harmonic models (such as EGM2008 and EIGEN-6C4), gravity field coefficients are computed in SI units of m/s² and geopotential units (m²/s²). When comparing satellite gravity gradients or GRACE satellite mass anomalies with ground gravimeter observations recorded in mGal, scaling by 10⁻⁵ maintains absolute mathematical consistency."
  },
  examples: {
    title: "Step-by-Step Geodetic and Physical Calculations",
    items: [
      {
        title: "Example 1: Regional Sedimentary Basin Bouguer Anomaly",
        subtitle: "A regional exploration gravity map reveals a negative Bouguer anomaly of -64 mGal over a deep petroleum sedimentary basin. Convert this anomaly to meters per second squared for numerical mantle flow modeling.",
        steps: [
          "Identify the measured anomaly: Δg = -64 mGal.",
          "Apply the conversion formula: Δg(m/s²) = Δg(mGal) × 10⁻⁵.",
          "Compute: -64 × 0.00001 = -0.00064 m/s².",
          "Result: -64 mGal equals exactly -0.00064 m/s² (or -640 µm/s²)."
        ]
      },
      {
        title: "Example 2: Microgravity Void Detection Survey",
        subtitle: "An engineering geophysics survey using a relative gravimeter identifies a localized negative anomaly of -0.35 mGal over a suspected subsurface sinkhole. Express this anomaly in m/s².",
        steps: [
          "State the anomaly value: Δg = -0.35 mGal.",
          "Divide by 100,000: -0.35 ÷ 100,000 = -0.0000035 m/s².",
          "Result: -0.35 mGal corresponds to exactly -3.5 × 10⁻⁶ m/s² (-3.5 µm/s²)."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Milligal to Meter/sec²",
    headers: ["Acceleration (mGal)", "Acceleration (m/s²)", "Scientific & Geodetic Context"],
    rows: [
      { fromVal: "0.1", toVal: "0.000001", extra: "1 µm/s²; high-precision cavity detection limit" },
      { fromVal: "1.0", toVal: "0.000010", extra: "10 µm/s²; standard mineral gravimetry benchmark" },
      { fromVal: "5.0", toVal: "0.000050", extra: "50 µm/s²; buried fault or mineralized zone signature" },
      { fromVal: "10.0", toVal: "0.000100", extra: "100 µm/s²; prominent sedimentary basin anomaly" },
      { fromVal: "25.0", toVal: "0.000250", extra: "250 µm/s²; granitic batholith intrusive signature" },
      { fromVal: "50.0", toVal: "0.000500", extra: "500 µm/s²; major rift valley or salt province anomaly" },
      { fromVal: "100.0", toVal: "0.001000", extra: "1.0 mm/s²; continental collision zone signature" },
      { fromVal: "250.0", toVal: "0.002500", extra: "2.5 mm/s²; major oceanic trench gravity deficit" },
      { fromVal: "1,000.0", toVal: "0.010000", extra: "Exact 1.0 Gal (1.0 cm/s²)" },
      { fromVal: "980,665.0", toVal: "9.806650", extra: "Exact 1.0 g standard terrestrial surface gravity" }
    ]
  },
  applications: {
    title: "Real-World Engineering and Scientific Applications",
    items: [
      {
        title: "Global Geoid Computation and Height Modernization",
        text: "National geodetic agencies (NOAA/NGS, Ordnance Survey) convert terrestrial mGal surveys into m/s² to integrate with satellite geopotential coefficients for precise GNSS orthometric height models."
      },
      {
        title: "Subsurface Cavity and Sinkhole Detection",
        text: "Civil geophysicists convert micro-gravity surveys around highway and railway alignments from mGal to m/s² to compute subsurface mass deficits and soil subsidence risks."
      },
      {
        title: "Satellite Orbit Determination and Celestial Mechanics",
        text: "Orbital flight dynamics software converts spherical harmonic gravity perturbations from mGal into m/s² to compute gravitational drag and station-keeping burns for low-Earth satellites."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing the exponent 10⁻⁵ with 10⁻³: 1 mGal = 10⁻³ Gal, but because 1 Gal = 10⁻² m/s², 1 mGal = 10⁻⁵ m/s² (not 10⁻³ m/s²). A factor of 100 error occurs if the CGS-to-SI step is forgotten.",
      "Dividing by 1,000 instead of 100,000: Dividing by 1,000 converts mGal to Gal, not to m/s².",
      "Misinterpreting sign conventions in anomalies: Positive anomalies indicate mass excesses (e.g., dense mafic intrusions), while negative anomalies indicate mass deficits (e.g., salt domes, cavities). Preserve the algebraic sign during conversion.",
      "Confusing milligals with microgals (µGal): 1 mGal equals 1,000 µGal. High-precision absolute gravimeters report in µGal (10⁻⁸ m/s²)."
    ]
  },
  faqs: [
    {
      question: "How do you convert milligal (mGal) to m/s²?",
      answer: "Divide the milligal value by 100,000, or multiply by 0.00001 (10⁻⁵). For example, 50 mGal ÷ 100,000 = 0.0005 m/s²."
    },
    {
      question: "What is 1 mGal in m/s²?",
      answer: "1 mGal equals exactly 0.00001 m/s² (10⁻⁵ m/s²), which is equivalent to 10 micrometers per second squared (10 µm/s²)."
    },
    {
      question: "How do you convert m/s² back to milligal?",
      answer: "Multiply the m/s² value by 100,000. For example, 0.002 m/s² × 100,000 = 200 mGal."
    },
    {
      question: "Why does 1 mGal equal 10⁻⁵ m/s²?",
      answer: "1 Gal is defined as 1 cm/s², which equals 0.01 m/s² (10⁻² m/s²). Because 'milli-' means one-thousandth (10⁻³), 1 mGal equals 10⁻³ × 10⁻² = 10⁻⁵ m/s²."
    },
    {
      question: "How many milligals are in 1 m/s²?",
      answer: "There are exactly 100,000 milligals (mGal) in 1 m/s²."
    },
    {
      question: "What is the value of standard Earth gravity in milligals?",
      answer: "Standard Earth gravity (9.80665 m/s²) equals exactly 980,665 mGal."
    },
    {
      question: "Is milligal accepted for use with the SI?",
      answer: "The milligal is a CGS unit, but it is officially accepted by the BIPM for specialized use in geodesy and geophysics due to its entrenched status and convenience."
    },
    {
      question: "What is a microgal in m/s²?",
      answer: "1 microgal (µGal) is one-thousandth of a milligal, equal to 10⁻⁶ Gal or 10⁻⁸ m/s² (10 nm/s²). Modern absolute gravimeters achieve microgal accuracy."
    },
    {
      question: "Why do scientists use milligals instead of m/s² in field surveys?",
      answer: "Local gravitational variations caused by geological structures are minute (0.00001 to 0.0005 m/s²). Using milligals allows geologists to write '1 to 50 mGal' instead of dealing with five leading zeros."
    }
  ],
  relatedList: [
    { label: "Milligal to Gal", from: "milligal-acceleration", to: "gal-acceleration" },
    { label: "Milligal to Standard Gravity (g)", from: "milligal-acceleration", to: "gravity-acceleration" },
    { label: "Meter/sec² to Milligal", from: "meter-per-second-squared", to: "milligal-acceleration" },
    { label: "Gal to Meter/sec²", from: "gal-acceleration", to: "meter-per-second-squared" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "Hofmann-Wellenhof, B., & Moritz, H. - Physical Geodesy (Springer-Verlag Wien)",
    "Torge, W., & Müller, J. - Geodesy (Walter de Gruyter)",
    "National Geospatial-Intelligence Agency (NGA) - Department of Defense World Geodetic System 1984"
  ]
};
