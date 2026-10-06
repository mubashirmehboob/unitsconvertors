import { CustomArticleData } from "./types";

export const milligalAccelerationToGalAcceleration: CustomArticleData = {
  fromUnitId: "milligal-acceleration",
  toUnitId: "gal-acceleration",
  seoTitle: "Milligal to Gal Converter (mGal to Gal) | UnitsConvertors.com",
  metaDescription: "Convert milligal (mGal) to gal (Gal) with exact metric decimal conversion formulas, gravity anomaly calculations, reference tables, and survey examples.",
  h1: "Milligal to Gal Converter",
  introduction: [
    "The milligal (symbol: mGal) and the gal (symbol: Gal) are metric units of acceleration originating from the centimetre-gram-second (CGS) measurement system. Named in honor of the pioneer of experimental dynamics, Galileo Galilei, one gal is defined as exactly 1 centimeter per second squared (1 cm/s² or 0.01 m/s²). The milligal is the metric submultiple representing one-thousandth of a gal (10⁻³ Gal, 10⁻⁵ m/s², or 10 µm/s²).",
    "Converting from milligals to whole gals is a fundamental task across geodesy, regional geophysics, and strong-motion seismology. While localized gravimetric surveys for mineral prospecting, groundwater mapping, and oilfield reservoir monitoring are cataloged in milligals to keep anomaly values readable, regional tectonic databases, crustal geoid models, and earthquake strong-motion networks report baseline values in whole gals. Dividing the surveyed mGal value by 1,000 scales high-resolution survey grids into whole Gal units for broad geodetic mapping.",
    "This reference guide provides the exact mathematical relationship between the milligal and the gal, demonstrates step-by-step calculations for geodetic data processing, supplies comprehensive reference tables, and answers frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert milligal (mGal) to gal (Gal), divide by 1,000 (or multiply by 0.001). For example, a local gravity anomaly of 350 mGal converts to exactly 0.35 Gal.",
    formulaDisplay: "\\text{Gal} = \\frac{\\text{mGal}}{1000} = \\text{mGal} \\times 0.001",
    subtext: "1 mGal is equal to exactly 0.001 Gal (10⁻³ Gal). 1 Gal equals exactly 1,000 mGal."
  },
  aboutSourceUnit: {
    title: "Understanding the Milligal (mGal)",
    text: "The milligal (symbol: mGal) is the primary unit of gravitational variation used in exploratory geophysics. Equal to 10⁻³ Gal (10⁻⁵ m/s² or 10 µm/s²), it represents roughly one part per million of Earth's nominal surface gravitational acceleration. It allows geoscientists to express minute density differences caused by ore bodies, faults, and salt domes as simple, manageable numbers."
  },
  aboutTargetUnit: {
    title: "Understanding the Gal (Gal)",
    text: "The gal (symbol: Gal, historically also known as the galileo) is the CGS unit of acceleration equal to exactly 1 cm/s² (0.01 m/s²). It is the established unit for reporting peak ground acceleration (PGA) in earthquake engineering, as well as describing broad regional gravitational baselines across geodetic networks."
  },
  relationship: "The relationship between the milligal and the gal is an exact power-of-ten metric prefix ratio. By standard SI/metric definition, the prefix 'milli-' indicates one-thousandth (10⁻³). Therefore, 1 mGal equals exactly 0.001 Gal (1/1,000 Gal), and 1 Gal contains exactly 1,000 mGal.",
  relationshipTitle: "Milligal to Gal Metric Equivalence Ratios",
  relationshipItems: [
    { label: "1 mGal", value: "0.001 Gal (Standard gravimetric survey resolution)" },
    { label: "10 mGal", value: "0.010 Gal (Moderate geological density anomaly)" },
    { label: "100 mGal", value: "0.100 Gal (Major tectonic subduction or rift valley anomaly)" },
    { label: "500 mGal", value: "0.500 Gal (Large-scale crustal gravity signature)" },
    { label: "1,000 mGal", value: "1.000 Gal (Exact metric unit equivalence benchmark)" },
    { label: "980,665 mGal", value: "980.665 Gal (Standard nominal Earth surface gravity, 1.0 g)" }
  ],
  formula: {
    text: "Divide the acceleration in milligal by 1,000 (or multiply by 0.001) to obtain the value in gal.",
    math: "a_{(\\text{Gal})} = \\frac{a_{(\\text{mGal})}}{1000} = a_{(\\text{mGal})} \\times 0.001",
    subtext: "1,000 is an exact conversion factor defined by the metric prefix milli- (10⁻³)."
  },
  formulaTitle: "Milligal to Gal Conversion Formula",
  practicalTip: {
    title: "Decimal Point Shift to the Left",
    text: "Because the conversion factor is exactly 0.001, you can convert mGal to Gal instantly in your head by moving the decimal point three places to the left. For instance, 485 mGal becomes 0.485 Gal, and 50 mGal becomes 0.050 Gal."
  },
  expertNote: {
    title: "Integrating Exploration Grids with Seismic Baselines",
    text: "In earthquake-prone volcanic and geothermal zones, civil engineers often combine microgravity surveys (recorded in mGal to track fluid depletion) with nearby strong-motion accelerograph networks (recorded in Gal). Converting both datasets to a common unit ensures numerical consistency when calibrating structural risk models and seismic hazard maps."
  },
  examples: {
    title: "Step-by-Step Geophysical Survey Calculations",
    items: [
      {
        title: "Example 1: Regional Gravimeter Base Tie",
        subtitle: "A land gravity survey tied to an international reference station records a relative acceleration difference of 725 mGal. Convert this measurement to Gal.",
        steps: [
          "Identify the measured value: a = 725 mGal.",
          "Apply the conversion formula: a(Gal) = a(mGal) ÷ 1000.",
          "Compute: 725 ÷ 1000 = 0.725 Gal.",
          "Result: 725 mGal equals exactly 0.725 Gal."
        ]
      },
      {
        title: "Example 2: Volcanic Caldera Deflation Anomaly",
        subtitle: "A geothermal monitoring network detects an uncorrected gravity shift of -42.5 mGal over a caldera due to hydrothermal steam extraction. Express this shift in Gal.",
        steps: [
          "State the recorded gravity shift: a = -42.5 mGal.",
          "Multiply by 0.001: -42.5 × 0.001 = -0.0425 Gal.",
          "Result: -42.5 mGal corresponds to exactly -0.0425 Gal."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Milligal to Gal",
    headers: ["Acceleration (mGal)", "Acceleration (Gal)", "Geophysical & Tectonic Context"],
    rows: [
      { fromVal: "0.1", toVal: "0.0001", extra: "100 microgals; sensitive local void or tunnel detection" },
      { fromVal: "1.0", toVal: "0.0010", extra: "1 mGal; standard field gravimeter resolution" },
      { fromVal: "5.0", toVal: "0.0050", extra: "Buried salt dome or mineralized orebody signature" },
      { fromVal: "10.0", toVal: "0.0100", extra: "Sedimentary basin margin or fault throw signature" },
      { fromVal: "25.0", toVal: "0.0250", extra: "Moderate petroleum structural trap anomaly" },
      { fromVal: "50.0", toVal: "0.0500", extra: "Major rift valley or granitic batholith signature" },
      { fromVal: "100.0", toVal: "0.1000", extra: "Prominent regional tectonic anomaly" },
      { fromVal: "500.0", toVal: "0.5000", extra: "Continental subduction zone gravity deficit" },
      { fromVal: "1,000.0", toVal: "1.0000", extra: "Exact 1.0 Gal (1.0 cm/s²)" },
      { fromVal: "980,665.0", toVal: "980.6650", extra: "Standard nominal Earth surface gravity (1.0 g)" }
    ]
  },
  applications: {
    title: "Real-World Geological and Engineering Applications",
    items: [
      {
        title: "Geothermal Reservoir Mass Balance Monitoring",
        text: "Geophysicists monitor steam field fluid extraction by tracking microgravity shifts in mGal, converting to Gal for integration into regional crustal strain models."
      },
      {
        title: "Airborne and Marine Gravimetric Survey Standardization",
        text: "Exploration survey aircraft log continuous gravimetric profiles, converting mGal meter outputs to Gal to compare with national geodetic absolute gravity baselines."
      },
      {
        title: "Geoid and Orthometric Elevation Computing",
        text: "Geodesists combine terrestrial gravity anomaly grids in mGal with global satellite models, converting to Gal and m/s² to compute the precise geoid undulation for GPS heighting."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1,000 instead of dividing: Multiplying converts Gal to mGal. To convert mGal to Gal, you must divide by 1,000.",
      "Confusing Milligal with Microgal (µGal): 1 mGal = 1,000 µGal. Confusing the two leads to a 1,000-fold scaling error.",
      "Symbol capitalization errors: Write 'mGal' with a lowercase 'm' and uppercase 'G'. Do not write 'mgal' or 'Mgal'.",
      "Confusing Gal with standard gravity (g): 1 Gal is roughly 0.00102 g, not 1.0 g. 1,000 mGal equals 1 Gal, which is approximately 1.02 milli-g."
    ]
  },
  faqs: [
    {
      question: "How do you convert milligal (mGal) to Gal?",
      answer: "Divide the milligal value by 1,000, or multiply by 0.001. For example, 750 mGal ÷ 1,000 = 0.75 Gal."
    },
    {
      question: "What is 1 mGal in Gal?",
      answer: "1 mGal equals exactly 0.001 Gal (10⁻³ Gal). This is defined by the metric prefix milli-."
    },
    {
      question: "How many milligals are in 1 Gal?",
      answer: "There are exactly 1,000 milligals (mGal) in 1 Gal."
    },
    {
      question: "How do you convert Gal back to milligal?",
      answer: "Multiply the Gal value by 1,000. For example, 0.45 Gal × 1,000 = 450 mGal."
    },
    {
      question: "What does 1 mGal represent in SI units?",
      answer: "1 mGal equals exactly 0.00001 m/s² (10⁻⁵ m/s²), which is 10 micrometers per second squared (10 µm/s²)."
    },
    {
      question: "How many milligals and Gals is Earth's gravity?",
      answer: "Standard Earth gravity of 9.80665 m/s² equals exactly 980.665 Gal, which is 980,665 mGal."
    },
    {
      question: "Why are gravity anomalies expressed in mGal rather than Gal?",
      answer: "Terrestrial gravity anomalies typically range from 0.001 to 0.05 Gal. Working in milligals (1 to 50 mGal) provides convenient integer values without leading decimal zeros."
    },
    {
      question: "Can an earthquake ground acceleration be expressed in mGal?",
      answer: "Yes, but earthquakes produce accelerations typically measured in tens to hundreds of Gals (10,000 to 500,000 mGal). Whole Gals are far more practical for earthquake strong motion."
    },
    {
      question: "What is the difference between Gal and Galileo?",
      answer: "There is no difference in unit value; 'galileo' was the historical full name for the unit, officially abbreviated as Gal in honor of Galileo Galilei."
    }
  ],
  relatedList: [
    { label: "Gal to Milligal", from: "gal-acceleration", to: "milligal-acceleration" },
    { label: "Milligal to Meter/sec²", from: "milligal-acceleration", to: "meter-per-second-squared" },
    { label: "Milligal to Standard Gravity (g)", from: "milligal-acceleration", to: "gravity-acceleration" },
    { label: "Gal to Standard Gravity (g)", from: "gal-acceleration", to: "gravity-acceleration" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "International Association of Geodesy (IAG) - Standards and Conventions for Gravimetry",
    "Blakely, R. J. - Potential Theory in Gravity and Magnetic Applications (Cambridge University Press)",
    "National Geodetic Survey (NOAA / NGS) - Gravity Survey and Geoid Modeling Protocols"
  ]
};
