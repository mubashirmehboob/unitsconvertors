import { CustomArticleData } from "./types";

export const galAccelerationToMilligalAcceleration: CustomArticleData = {
  fromUnitId: "gal-acceleration",
  toUnitId: "milligal-acceleration",
  seoTitle: "Gal to Milligal Converter (Gal to mGal) | UnitsConvertors.com",
  metaDescription: "Convert gal (Gal) to milligal (mGal) with exact metric decimal conversion formulas, gravity survey calculations, tables, and worked geophysical examples.",
  h1: "Gal to Milligal Converter",
  introduction: [
    "The gal (symbol: Gal) and the milligal (symbol: mGal) are metric units of acceleration fundamentally tied to terrestrial geodesy, exploration geophysics, and gravimetry. Defined in the centimetre-gram-second (CGS) system, one gal represents exactly one centimeter per second squared (1 cm/s² or 0.01 m/s²). The milligal is the metric submultiple representing one-thousandth of a gal (10⁻³ Gal, 10⁻⁵ m/s², or 10 µm/s²).",
    "While whole gals are commonly used in seismology to record peak ground acceleration during earthquakes, geophysicists surveying subsurface density variations work almost exclusively in milligals. Subsurface geological structures—such as oil and gas reservoirs, salt domes, mineral deposits, and subterranean cavities—produce minute local variations in Earth's gravitational field known as gravity anomalies. Converting regional gravimetric data from Gal to mGal allows exploration teams to isolate anomalies that often measure only a few milligals or fractions of a milligal.",
    "This reference guide provides the exact mathematical relationship between the gal and the milligal, demonstrates step-by-step calculations for geodetic gravity surveys, provides reference tables, and answers common questions regarding gravity anomaly reduction."
  ],
  quickAnswer: {
    text: "To convert gal (Gal) to milligal (mGal), multiply by exactly 1,000. For example, a baseline gravity measurement of 0.85 Gal equals exactly 850 mGal.",
    formulaDisplay: "\\text{mGal} = \\text{Gal} \\times 1000",
    subtext: "1 Gal is equal to exactly 1,000 mGal (1 mGal = 10⁻³ Gal = 0.001 Gal)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gal (Gal)",
    text: "The gal (symbol: Gal), named after Galileo Galilei, is the CGS unit of acceleration equal to 1 cm/s² (0.01 m/s²). It represents roughly 1/1,000th of Earth's nominal surface gravity (980.665 Gal). In earthquake engineering and regional geophysical data processing, whole gal units describe ground shaking intensity and broad baseline gravitational fields."
  },
  aboutTargetUnit: {
    title: "Understanding the Milligal (mGal)",
    text: "The milligal (symbol: mGal) is one-thousandth of a gal (10⁻³ Gal = 10⁻⁵ m/s² = 10 µm/s²). Because Earth's gravitational acceleration is roughly 9.8 m/s² (980 Gal), 1 mGal represents approximately one part per million (~1 ppm or ~1 µg) of normal terrestrial gravity. It is the international standard unit for expressing free-air, Bouguer, and isostatic gravity anomalies."
  },
  relationship: "The relationship between the gal and the milligal is an exact power-of-ten metric metric prefix definition. By international SI prefix convention, 'milli-' signifies one-thousandth (1/1,000). Therefore, 1 Gal contains exactly 1,000 mGal, and 1 mGal equals exactly 0.001 Gal.",
  relationshipTitle: "Gal to Milligal Exact Metric Multiples",
  relationshipItems: [
    { label: "0.001 Gal", value: "1 mGal (Typical local Bouguer anomaly resolution)" },
    { label: "0.010 Gal", value: "10 mGal (Moderate sedimentary basin gravity deficit)" },
    { label: "0.100 Gal", value: "100 mGal (Major tectonic subduction or rift valley anomaly)" },
    { label: "0.500 Gal", value: "500 mGal (Large regional crustal gravity signature)" },
    { label: "1.000 Gal", value: "1,000 mGal (Exact metric definition standard)" },
    { label: "980.665 Gal", value: "980,665 mGal (Standard Earth surface gravitational acceleration)" }
  ],
  formula: {
    text: "Multiply the acceleration in gal by 1,000 to obtain the equivalent acceleration in milligal.",
    math: "a_{(\\text{mGal})} = a_{(\\text{Gal})} \\times 1000",
    subtext: "1,000 is an exact conversion factor defined by the metric prefix milli- (10⁻³)."
  },
  formulaTitle: "Gal to Milligal Conversion Formula",
  practicalTip: {
    title: "Moving the Decimal Point Three Places",
    text: "Because the multiplier is exactly 1,000, you can convert Gal to mGal instantly by shifting the decimal point three positions to the right. For instance, a gravimeter drift correction of 0.047 Gal becomes 47 mGal."
  },
  expertNote: {
    title: "Microgal Precision in Relative Gravimetry",
    text: "Modern superconducting and spring-based relative gravimeters (such as Scintrex and LaCoste & Romberg instruments) achieve sensitivity down to 1 microgal (0.001 mGal, or 10⁻⁶ Gal). When importing regional geodetic datasets cataloged in Gal into GIS mapping software, scaling to mGal prevents numerical truncation and allows seamless integration with microgal-level field surveys."
  },
  examples: {
    title: "Step-by-Step Gravimetric Survey Calculations",
    items: [
      {
        title: "Example 1: Regional Gravimetric Base Station Tie",
        subtitle: "A geodetic survey team ties a local prospect baseline to a national gravity reference monument that reports an absolute acceleration of 0.428 Gal above the datum. Express this value in milligals.",
        steps: [
          "Identify the measured value: a = 0.428 Gal.",
          "Apply the conversion formula: a(mGal) = a(Gal) × 1000.",
          "Multiply: 0.428 × 1000 = 428 mGal.",
          "Result: 0.428 Gal equals exactly 428 mGal."
        ]
      },
      {
        title: "Example 2: Tidal Gravity Correction Factor",
        subtitle: "Solid Earth tides cause cyclical gravitational variations with a peak-to-peak amplitude of 0.00024 Gal at an observatory. What is this tidal variation in milligals?",
        steps: [
          "State the tidal variation: a = 0.00024 Gal.",
          "Multiply by 1,000: 0.00024 × 1000 = 0.24 mGal.",
          "Result: The tidal variation is exactly 0.24 mGal (or 240 microgals)."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Gal to Milligal",
    headers: ["Acceleration (Gal)", "Acceleration (mGal)", "Geophysical & Survey Context"],
    rows: [
      { fromVal: "0.0001", toVal: "0.100", extra: "100 microgals; sensitive mineral survey anomaly" },
      { fromVal: "0.0010", toVal: "1.000", extra: "1 mGal; standard gravimeter precision benchmark" },
      { fromVal: "0.0050", toVal: "5.000", extra: "Typical buried salt dome or bedrock trough anomaly" },
      { fromVal: "0.0100", toVal: "10.000", extra: "Prominent dense orebody or sedimentary basin signal" },
      { fromVal: "0.0500", toVal: "50.000", extra: "Regional crustal thickness variation anomaly" },
      { fromVal: "0.1000", toVal: "100.000", extra: "Major mountain root or oceanic trench anomaly" },
      { fromVal: "0.2500", toVal: "250.000", extra: "Large-scale continental margin gravity signature" },
      { fromVal: "0.5000", toVal: "500.000", extra: "Major tectonic suture zone gravity anomaly" },
      { fromVal: "1.0000", toVal: "1,000.000", extra: "Exact 1 Gal baseline definition" },
      { fromVal: "980.6650", toVal: "980,665.000", extra: "Standard nominal surface gravity of the Earth" }
    ]
  },
  applications: {
    title: "Real-World Geophysical and Survey Applications",
    items: [
      {
        title: "Mineral and Hydrocarbon Exploration",
        text: "Exploration geophysicists convert regional satellite and airborne gravity data into mGal grids to map subsurface salt diapirs, igneous intrusions, and hydrocarbon-trapping structural highs."
      },
      {
        title: "Geoid Modeling and Height Systems",
        text: "Geodesists combine terrestrial gravimetry in mGal with satellite altimetry to calculate the global gravimetric geoid, which defines mean sea level and orthometric heights for GPS/GNSS surveying."
      },
      {
        title: "Volcanology and Magma Chamber Monitoring",
        text: "Volcanic monitoring networks detect subsurface magma migration and hydrothermal fluid movement by tracking micro-gravity shifts of 0.01 to 0.1 mGal over active volcanic caldera stations."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 1,000 instead of multiplying: Dividing by 1,000 converts mGal to Gal. To convert Gal to mGal, you must multiply by 1,000.",
      "Confusing Milligal with Microgal: 1 Gal = 1,000 mGal = 1,000,000 µGal (microgals). Using microgals when milligals are expected introduces a 1,000-fold scaling error.",
      "Mixing absolute gravity with gravity anomalies: Absolute gravity is roughly 980,000 mGal, while Bouguer or free-air anomalies represent deviations that typically span -200 to +200 mGal relative to the reference ellipsoid.",
      "Capitalization of unit symbols: The symbol for gal is Gal (capital G), and milligal is mGal (lowercase m, capital G). Do not write 'mgal' or 'MGAL' in formal geodetic documentation."
    ]
  },
  faqs: [
    {
      question: "How do you convert Gal to milligal (mGal)?",
      answer: "Multiply the acceleration in Gal by 1,000. For example, 0.75 Gal × 1,000 = 750 mGal."
    },
    {
      question: "What is 1 Gal in milligals?",
      answer: "1 Gal is equal to exactly 1,000 milligals (mGal). This relationship is exact and defined by the metric prefix milli-."
    },
    {
      question: "How do you convert milligal back to Gal?",
      answer: "Divide the milligal value by 1,000, or multiply by 0.001. For example, 250 mGal ÷ 1,000 = 0.25 Gal."
    },
    {
      question: "Why do geophysicists use milligals instead of Gal?",
      answer: "Earth's total gravitational acceleration is about 980 Gal. Subsurface geological structures cause very small deviations—typically on the order of 0.001 to 0.05 Gal. Working in milligals (1 to 50 mGal) provides convenient, human-readable numbers without cumbersome leading decimal zeros."
    },
    {
      question: "How many milligals is Earth's gravity?",
      answer: "Standard Earth gravity (9.80665 m/s² or 980.665 Gal) equals exactly 980,665 mGal."
    },
    {
      question: "What is 1 mGal in SI units?",
      answer: "1 mGal equals exactly 10⁻⁵ m/s² (0.00001 m/s²), or 10 micrometers per second squared (10 µm/s²)."
    },
    {
      question: "What is a gravity anomaly?",
      answer: "A gravity anomaly is the difference between observed gravity at a location (corrected for elevation, terrain, and tides) and theoretical normal gravity calculated on a reference ellipsoid. Anomalies are expressed in milligals."
    },
    {
      question: "How does 1 mGal compare to standard gravity (g)?",
      answer: "1 mGal is approximately 1.0197 × 10⁻⁶ g (about 1.02 parts per million of standard gravity, or roughly 1 micro-g)."
    },
    {
      question: "Can an airborne gravimeter measure in milligals?",
      answer: "Yes, modern airborne gravimeters mounted in survey aircraft or helicopters achieve survey resolutions of 1 to 2 mGal after applying kinematic GPS velocity and acceleration corrections."
    }
  ],
  relatedList: [
    { label: "Gal to Standard Gravity (g)", from: "gal-acceleration", to: "gravity-acceleration" },
    { label: "Gal to Meter/sec²", from: "gal-acceleration", to: "meter-per-second-squared" },
    { label: "Milligal to Gal", from: "milligal-acceleration", to: "gal-acceleration" },
    { label: "Milligal to Meter/sec²", from: "milligal-acceleration", to: "meter-per-second-squared" }
  ],
  references: [
    "International Association of Geodesy (IAG) - The Geodetic Reference System 1980 (GRS 80)",
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "Telford, W. M., Geldart, L. P., & Sheriff, R. E. - Applied Geophysics (Cambridge University Press)",
    "National Geodetic Survey (NGS / NOAA) - Gravity and Geoid Modeling Guidelines"
  ]
};
