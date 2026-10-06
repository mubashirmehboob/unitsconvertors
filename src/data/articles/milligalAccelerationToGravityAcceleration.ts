import { CustomArticleData } from "./types";

export const milligalAccelerationToGravityAcceleration: CustomArticleData = {
  fromUnitId: "milligal-acceleration",
  toUnitId: "gravity-acceleration",
  seoTitle: "Milligal to Standard Gravity (g) Converter | UnitsConvertors.com",
  metaDescription: "Convert milligal (mGal) to standard gravity (g) with exact geophysical conversion formulas, micro-g calculations, satellite geodesy examples, and tables.",
  h1: "Milligal to Standard Gravity (g) Converter",
  introduction: [
    "The milligal (symbol: mGal) and standard gravity (symbol: g, or g₀) quantify gravitational acceleration at two vastly different operational scales. Derived from the CGS unit gal (1 cm/s²), one milligal represents one-thousandth of a gal (10⁻³ Gal or 10⁻⁵ m/s²). Standard gravity, internationally established at 9.80665 m/s², represents nominal Earth sea-level acceleration, serving as the universal reference benchmark for terrestrial weight and inertial g-force.",
    "Converting from milligals to standard gravity is essential in aerospace navigation, satellite gravimetry (such as the GRACE and GOCE missions), and high-precision inertial guidance systems. Modern quantum and MEMS gravimeters measure minute gravitational variations in milligals or microgals. However, aerospace flight control software, orbital trajectory simulators, and inertial navigation specifications quantify accelerometer drift and acceleration tolerances in parts per million of gravity (micro-g, or 10⁻⁶ g). Dividing the surveyed mGal value by 980,665 allows direct integration into g-based flight dynamics algorithms.",
    "This technical guide explains the exact dimensional derivation connecting mGal to standard gravity, provides step-by-step worked calculations, features reference tables, and answers common questions from geophysicists and aerospace engineers."
  ],
  quickAnswer: {
    text: "To convert milligal (mGal) to standard gravity (g), divide by 980,665 (or multiply by approximately 1.01972 × 10⁻⁶). For example, a local gravity anomaly of 100 mGal equals approximately 0.00010197 g (or roughly 102 micro-g).",
    formulaDisplay: "g = \\frac{\\text{mGal}}{980665} = \\text{mGal} \\times 1.0197162 \\times 10^{-6}",
    subtext: "1 standard gravity (g) equals exactly 980,665 mGal. 1 mGal equals approximately 1.01972 micro-g (1.02 ppm of g)."
  },
  aboutSourceUnit: {
    title: "Understanding the Milligal (mGal)",
    text: "The milligal (symbol: mGal) is the international standard unit for expressing local variations and anomalies in Earth's gravitational field. Defined as 10⁻³ Gal (10⁻⁵ m/s²), it represents roughly one part per million (~1 ppm) of Earth's total gravitational acceleration. It allows geophysicists to map dense mineral bodies, salt domes, and crustal thicknesses without writing cumbersome exponents."
  },
  aboutTargetUnit: {
    title: "Understanding Standard Gravity (g)",
    text: "Standard gravity (symbol: g or g₀) is defined by international standard (CGPM 1901) as exactly 9.80665 m/s² (equivalent to 980.665 Gal or 980,665 mGal). It serves as the baseline terrestrial acceleration of free fall, used universally to define the standard pound-force, kilogram-force, and aeronautical load factors."
  },
  relationship: "The relationship between milligal and standard gravity is established by the international standard gravity constant g₀ = 9.80665 m/s². Because 1 mGal = 10⁻⁵ m/s², 1 g contains exactly 9.80665 / 10⁻⁵ = 980,665 mGal (an exact integer). Inversely, 1 mGal equals 1 / 980,665 g ≈ 1.0197162 × 10⁻⁶ g (approximately 1.02 micro-g).",
  relationshipTitle: "Milligal to Standard Gravity Exact Equivalents",
  relationshipItems: [
    { label: "1 mGal", value: "0.00000102 g (~1.02 µg, micro-g)" },
    { label: "10 mGal", value: "0.00001020 g (~10.2 µg, typical mineral anomaly)" },
    { label: "100 mGal", value: "0.00010197 g (~102.0 µg, major tectonic anomaly)" },
    { label: "1,000 mGal", value: "0.00101972 g (~1.02 milli-g, exact 1.0 Gal)" },
    { label: "100,000 mGal", value: "0.10197162 g (~0.102 g, exact 1.0 m/s²)" },
    { label: "980,665 mGal", value: "1.00000000 g (Exact 1.0 g standard terrestrial gravity)" }
  ],
  formula: {
    text: "Divide the acceleration in milligal by 980,665 (or multiply by approximately 1.0197162 × 10⁻⁶) to obtain acceleration in standard gravity (g).",
    math: "a_{(g)} = \\frac{a_{(\\text{mGal})}}{980665} = a_{(\\text{mGal})} \\times 1.0197162 \\times 10^{-6}",
    subtext: "980,665 is an exact integer constant derived from (9.80665 m/s² ÷ 10⁻⁵ m/s² per mGal)."
  },
  formulaTitle: "Milligal to Standard Gravity (g) Conversion Formula",
  practicalTip: {
    title: "The 'Micro-g' Equivalence Rule of Thumb",
    text: "Because 980,665 is within 2% of 1,000,000 (10⁶), 1 mGal is very nearly equal to 1 micro-g (1 µg = 10⁻⁶ g). For rapid mental estimates, you can treat 1 mGal as 1.02 micro-g (e.g., 50 mGal ≈ 51 micro-g). For formal navigation and aerospace telemetry, always use the exact divisor 980,665."
  },
  expertNote: {
    title: "Inertial Navigation System (INS) Gravity Compensation",
    text: "Strategic-grade navigation systems on submarines, intercontinental ballistic missiles (ICBMs), and spacecraft require knowledge of the deflection of the vertical and gravity disturbances (Δg). A gravity anomaly of 10 mGal corresponds to approximately 10.2 µg of unaccounted inertial acceleration. If uncompensated by a geodetic gravity map, this induces position errors of over 1.8 kilometers after one hour of pure inertial dead reckoning."
  },
  examples: {
    title: "Step-by-Step Aerospace and Geodetic Calculations",
    items: [
      {
        title: "Example 1: Gravity Disturbance Input for Spacecraft Guidance",
        subtitle: "A low-Earth orbit satellite passes over a high-density subduction zone where the gravity disturbance vector has a vertical magnitude of 85 mGal. Express this acceleration in g-units for the attitude and orbit control system (AOCS).",
        steps: [
          "Identify the disturbance value: Δg = 85 mGal.",
          "Apply the conversion formula: Δg(g) = Δg(mGal) ÷ 980,665.",
          "Compute: 85 ÷ 980,665 = 0.0000866759 g.",
          "Result: 85 mGal equals approximately 8.6676 × 10⁻⁵ g (or ~86.68 micro-g)."
        ]
      },
      {
        title: "Example 2: Precision Accelerometer Bias Drift Verification",
        subtitle: "An aerospace grade quartz flexure accelerometer reports a zero-bias instability equivalent to 2.5 mGal during laboratory environmental testing. Express this bias drift in micro-g.",
        steps: [
          "State the bias in mGal: a = 2.5 mGal.",
          "Divide by 980,665: 2.5 ÷ 980,665 = 2.54929 × 10⁻⁶ g.",
          "Convert to micro-g: 2.54929 × 10⁻⁶ g = 2.549 µg.",
          "Result: 2.5 mGal corresponds to approximately 2.55 micro-g."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Milligal to Standard Gravity (g)",
    headers: ["Acceleration (mGal)", "Acceleration (g)", "Micro-g (µg)", "Application Context"],
    rows: [
      { fromVal: "0.1", toVal: "1.020 × 10⁻⁷", extra: "0.102 µg", extra2: "Quantum cold-atom gravimeter sensitivity" },
      { fromVal: "1.0", toVal: "1.020 × 10⁻⁶", extra: "1.020 µg", extra2: "Standard relative gravimeter survey benchmark" },
      { fromVal: "5.0", toVal: "5.099 × 10⁻⁶", extra: "5.099 µg", extra2: "Local mineralization or cavity anomaly" },
      { fromVal: "10.0", toVal: "1.020 × 10⁻⁵", extra: "10.197 µg", extra2: "Subsurface salt structure gravity signature" },
      { fromVal: "25.0", toVal: "2.549 × 10⁻⁵", extra: "25.493 µg", extra2: "Sedimentary basin margin gradient" },
      { fromVal: "50.0", toVal: "5.099 × 10⁻⁵", extra: "50.986 µg", extra2: "Major rift valley or crustal thinning anomaly" },
      { fromVal: "100.0", toVal: "1.020 × 10⁻⁴", extra: "101.972 µg", extra2: "Major tectonic trench gravity deficit" },
      { fromVal: "500.0", toVal: "5.099 × 10⁻⁴", extra: "509.858 µg", extra2: "Regional continental subduction anomaly" },
      { fromVal: "1,000.0", toVal: "1.020 × 10⁻³", extra: "1,019.716 µg", extra2: "Exact 1.0 Gal equivalence (~1.02 milli-g)" },
      { fromVal: "980,665.0", toVal: "1.000 × 10⁰", extra: "1,000,000.000 µg", extra2: "Standard Earth surface gravity (1.0 g)" }
    ]
  },
  applications: {
    title: "Real-World Engineering and Aerospace Applications",
    items: [
      {
        title: "Submarine and Missile Inertial Navigation (INS)",
        text: "Strategic navigation systems convert global gravity disturbance maps in mGal into micro-g accelerations to correct Ring Laser Gyro (RLG) and accelerometer drift over long endurance missions."
      },
      {
        title: "Satellite Orbit Perturbation Analysis",
        text: "Mission planners for Earth observation satellites (e.g., ESA Sentinel, NASA GRACE-FO) model spherical harmonic gravity anomalies in mGal, converting to g-units to compute orbital drag and altitude decay."
      },
      {
        title: "Microgravity Experiment Quality Verification",
        text: "Payload specialists on the International Space Station (ISS) and parabolic research flights monitor micro-vibrations in mGal, converting to micro-g to ensure protein crystallization experiments remain undisturbed."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 1,000,000 instead of 980,665: While 1 mGal is close to 1 micro-g, assuming 1 mGal = 10⁻⁶ g introduces a systematic 1.97% error that degrades precision geodetic calculations.",
      "Confusing Milligal with Gal: 1 Gal is 1,000 mGal. 1 Gal equals ~0.00102 g, whereas 1 mGal equals ~0.00000102 g (1.02 micro-g).",
      "Floating point underflow in software code: Because 1 mGal is on the order of 10⁻⁶ g, using standard single-precision floats in satellite navigation code can cause precision loss. Always use double-precision (float64) representations.",
      "Ignoring temporal gravity variations: Solid Earth tides and atmospheric pressure loading cause temporal gravity shifts of up to 0.3 mGal (~0.31 µg) that must be removed before static baseline comparison."
    ]
  },
  faqs: [
    {
      question: "How do you convert milligal (mGal) to standard gravity (g)?",
      answer: "Divide the acceleration in milligal by 980,665, or multiply by approximately 1.0197162 × 10⁻⁶. For example, 50 mGal ÷ 980,665 = 0.000050986 g."
    },
    {
      question: "What is 1 mGal in terms of g?",
      answer: "1 mGal equals approximately 1.019716 × 10⁻⁶ g, which is roughly 1.02 micro-g (1.02 parts per million of standard gravity)."
    },
    {
      question: "Why does 1 g equal 980,665 mGal?",
      answer: "Standard gravity is defined as 9.80665 m/s². Because 1 mGal equals exactly 10⁻⁵ m/s² (0.00001 m/s²), dividing 9.80665 by 0.00001 yields exactly 980,665 mGal."
    },
    {
      question: "How do you convert g back into milligal?",
      answer: "Multiply the acceleration in g by 980,665. For example, 0.001 g (1 milli-g) equals 0.001 × 980,665 = 980.665 mGal (exactly 1 Gal)."
    },
    {
      question: "Is 1 mGal the same as 1 micro-g?",
      answer: "They are very close, but not identical. 1 mGal equals approximately 1.0197 micro-g. The difference is roughly 1.97% due to standard gravity being 9.80665 m/s² rather than 10.0 m/s²."
    },
    {
      question: "How many mGal is 1 micro-g (1 µg)?",
      answer: "1 micro-g (10⁻⁶ g) equals 980,665 × 10⁻⁶ = 0.980665 mGal."
    },
    {
      question: "Where is the milligal to g conversion used?",
      answer: "It is widely used in aerospace engineering, satellite orbit modeling, microgravity research, and military inertial guidance systems where terrestrial gravimetric databases interface with g-based sensor systems."
    },
    {
      question: "What instrument measures gravity to milligal precision?",
      answer: "Relative gravimeters (such as Scintrex CG-6 and LaCoste & Romberg instruments) and absolute gravimeters (such as Micro-g LaCoste FG5) measure gravitational acceleration to milligal and microgal precision."
    },
    {
      question: "What is a typical gravity anomaly value on Earth?",
      answer: "Most terrestrial gravity anomalies range between -200 mGal and +200 mGal (approximately -0.0002 g to +0.0002 g, or ±200 µg), with extreme values reaching -400 mGal over oceanic trenches."
    }
  ],
  relatedList: [
    { label: "Milligal to Gal", from: "milligal-acceleration", to: "gal-acceleration" },
    { label: "Milligal to Meter/sec²", from: "milligal-acceleration", to: "meter-per-second-squared" },
    { label: "Standard Gravity (g) to Milligal", from: "gravity-acceleration", to: "milligal-acceleration" },
    { label: "Gal to Standard Gravity (g)", from: "gal-acceleration", to: "gravity-acceleration" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "Jekeli, C. - Inertial Navigation Systems with Geodetic Applications (Walter de Gruyter)",
    "3rd General Conference on Weights and Measures (CGPM 1901) - Definition of the standard acceleration of free fall (g₀)",
    "European Space Agency (ESA) - GOCE Gravity Mission Science Results and Data Products"
  ]
};
