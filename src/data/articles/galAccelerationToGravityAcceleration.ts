import { CustomArticleData } from "./types";

export const galAccelerationToGravityAcceleration: CustomArticleData = {
  fromUnitId: "gal-acceleration",
  toUnitId: "gravity-acceleration",
  seoTitle: "Gal to Standard Gravity (g) Converter | UnitsConvertors.com",
  metaDescription: "Convert Gal to Standard Gravity (g) with exact CGS to g-force formulas, seismic PGA calculations, conversion tables, and worked geophysical examples.",
  h1: "Gal to Standard Gravity (g) Converter",
  introduction: [
    "The gal (symbol: Gal) and standard gravity (symbol: g, or g₀) quantify gravitational and kinematic acceleration across two essential scientific frameworks. Named after the Italian astronomer and physicist Galileo Galilei, the gal is the base acceleration unit in the centimetre-gram-second (CGS) system, defined as exactly 1 centimeter per second squared (1 cm/s² or 0.01 m/s²). Standard gravity, by international agreement, represents the nominal acceleration experienced by an object at sea level on Earth, defined as exactly 9.80665 meters per second squared.",
    "Converting from Gal to standard gravity is a standard requirement in earthquake engineering, geophysics, structural dynamics, and aerospace instrumentation. Strong-motion seismographs record peak ground acceleration (PGA) in Gal or cm/s². Structural design codes (such as ASCE 7, Eurocode 8, and the International Building Code), however, specify seismic lateral force coefficients as dimensionless fractions or multiples of standard gravity (g). Civil engineers divide the recorded Gal value by 980.665 to convert ground shaking into equivalent g-force for structural stress modeling.",
    "This technical guide details the dimensional relationship between the CGS gal and standard gravitational acceleration, provides verified step-by-step calculation routines, showcases reference tables, and answers practical questions frequently encountered by seismologists and civil engineers."
  ],
  quickAnswer: {
    text: "To convert gal (Gal) to standard gravity (g), divide the value by 980.665 (or multiply by approximately 0.00101972). For example, an earthquake peak ground acceleration of 245 Gal equals approximately 0.2498 g (roughly 25% of standard gravity).",
    formulaDisplay: "g = \\frac{\\text{Gal}}{980.665} = \\text{Gal} \\times 0.0010197162",
    subtext: "1 standard gravity (g) equals exactly 980.665 Gal. 1 Gal equals approximately 0.00101972 g (or 1.0197 milli-g)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gal (Gal)",
    text: "The gal (symbol: Gal, often referred to historically as the galileo) is the CGS unit of acceleration, defined as exactly 1 cm/s² (10⁻² m/s²). Established in the late nineteenth century to support precise gravimetric and geodetic measurements, it remains widely used in terrestrial gravimetry, mineral exploration, and seismology. In earthquake studies, peak ground acceleration (PGA) during seismic shaking is almost universally reported in Gal."
  },
  aboutTargetUnit: {
    title: "Understanding Standard Gravity (g)",
    text: "Standard gravity (symbol: g or g₀, standard acceleration of free fall) is defined by the 3rd General Conference on Weights and Measures (CGPM in 1901) as exactly 9.80665 m/s² (equivalent to 980.665 Gal or approximately 32.174 ft/s²). It serves as the standard reference benchmark for terrestrial weight, g-force in aeronautics, and lateral base shear calculations in structural earthquake engineering."
  },
  relationship: "The relationship between Gal and standard gravity stems from the international definition of g₀ = 9.80665 m/s². Because 1 Gal = 0.01 m/s², standard gravity corresponds to exactly 980.665 Gal. Consequently, 1 Gal represents 1 / 980.665 g, which is approximately 0.0010197162 g (or 1.019716 milli-g).",
  relationshipTitle: "CGS Gal to Gravitational Acceleration Ratio",
  relationshipItems: [
    { label: "1 Gal", value: "0.00101972 g (~1.02 milli-g)" },
    { label: "10 Gal", value: "0.010197 g (~1.02% g, perceptible earthquake shaking)" },
    { label: "50 Gal", value: "0.050986 g (~5.1% g, threshold of structural concern)" },
    { label: "100 Gal", value: "0.101972 g (~10.2% g, moderate structural shaking)" },
    { label: "250 Gal", value: "0.254929 g (~25.5% g, significant building damage in unreinforced masonry)" },
    { label: "500 Gal", value: "0.509858 g (~51.0% g, violent earthquake ground motion)" },
    { label: "980.665 Gal", value: "1.000000 g (Exact standard terrestrial gravity)" }
  ],
  formula: {
    text: "Divide the acceleration in Gal by 980.665 to calculate the equivalent acceleration in standard gravity (g). Alternatively, multiply by 0.0010197162.",
    math: "a_{(g)} = \\frac{a_{(\\text{Gal})}}{980.665} = a_{(\\text{Gal})} \\times 0.0010197162",
    subtext: "980.665 is the exact constant based on the BIPM definition of standard free fall acceleration (9.80665 m/s²)."
  },
  formulaTitle: "Gal to Standard Gravity (g) Conversion Formula",
  practicalTip: {
    title: "Quick Mental Approximation for Field Engineers",
    text: "Because 980.665 is close to 1,000, 1 Gal is approximately 1 milli-g (0.001 g) with an error of about 2%. To get a fast rough estimate during a seismic event, divide the Gal reading by 1,000 (e.g., 200 Gal ≈ 0.20 g). For formal engineering reports or code-based response spectra, always use the exact divisor 980.665."
  },
  expertNote: {
    title: "Seismic Design Base Shear vs. Recorded Accelerograms",
    text: "Building codes express seismic base shear as V = Cs × W, where Cs is the seismic response coefficient (expressed in terms of g) and W is the building's effective seismic weight. When strong-motion stations near a building site report a seismic acceleration time-history in Gal, multiplying each recorded time step by (1 / 980.665) converts the acceleration trace into dimensionless g-units, allowing direct comparison with design response spectra."
  },
  examples: {
    title: "Step-by-Step Practical Engineering Calculations",
    items: [
      {
        title: "Example 1: Converting Peak Ground Acceleration (PGA) from an Accelerograph",
        subtitle: "A digital strong-motion instrument at a foundation level records a peak horizontal ground acceleration of 320 Gal during an earthquake. Express this PGA in terms of standard gravity (g).",
        steps: [
          "Identify the measured value: a = 320 Gal.",
          "Write the conversion formula: a(g) = a(Gal) ÷ 980.665.",
          "Perform the division: 320 ÷ 980.665 = 0.326309 g.",
          "Result: 320 Gal corresponds to approximately 0.3263 g (or 32.63% g)."
        ]
      },
      {
        title: "Example 2: Dynamic Shake Table Verification",
        subtitle: "A structural dynamics testing facility subjects a scaled precast concrete frame to a peak horizontal excitation of 75 Gal. What is the equivalent g-force applied to the model?",
        steps: [
          "State the test acceleration: a = 75 Gal.",
          "Apply the conversion formula: 75 ÷ 980.665.",
          "Calculate: 75 ÷ 980.665 = 0.076479 g.",
          "Result: The test excitation equals approximately 0.0765 g (or 76.48 milli-g)."
        ]
      }
    ]
  },
  table: {
    title: "Reference Conversion Table: Gal to Standard Gravity (g)",
    headers: ["Acceleration (Gal)", "Acceleration (g)", "Seismic & Engineering Context"],
    rows: [
      { fromVal: "1.0", toVal: "0.001020", extra: "Micro-seismic background motion (~1.02 milli-g)" },
      { fromVal: "5.0", toVal: "0.005099", extra: "Weak shaking; felt indoors by sensitive observers" },
      { fromVal: "10.0", toVal: "0.010197", extra: "Perceptible vibration (~1.02% g)" },
      { fromVal: "25.0", toVal: "0.025493", extra: "Light shaking; hanging objects swing visibly" },
      { fromVal: "50.0", toVal: "0.050986", extra: "Moderate shaking (~5.1% g); felt by everyone indoors" },
      { fromVal: "100.0", toVal: "0.101972", extra: "Strong shaking (~10.2% g); minor non-structural damage" },
      { fromVal: "200.0", toVal: "0.203943", extra: "Very strong shaking (~20.4% g); chimney damage threshold" },
      { fromVal: "350.0", toVal: "0.356901", extra: "Severe shaking (~35.7% g); structural damage to older masonry" },
      { fromVal: "500.0", toVal: "0.509858", extra: "Violent shaking (~51.0% g); major structural distress" },
      { fromVal: "980.665", toVal: "1.000000", extra: "Exact 1.0 g standard Earth surface gravity" },
      { fromVal: "1200.0", toVal: "1.223659", extra: "Extreme near-fault pulse (>1.2 g); ground throw possible" }
    ]
  },
  applications: {
    title: "Real-World Engineering and Scientific Applications",
    items: [
      {
        title: "Civil and Structural Earthquake Engineering",
        text: "Building code requirements (ASCE 7, Eurocode 8) specify spectral response accelerations as fractions of g (such as SDS and SD1). Accelerograph networks monitor structural performance by recording Gal and converting directly to g."
      },
      {
        title: "Seismic Hazard Mapping and USGS ShakeMaps",
        text: "Geological surveys generate automated ShakeMaps immediately following major ruptures. Instrumental intensities recorded in Gal are converted to fractional g values to estimate structural damage patterns across affected regions."
      },
      {
        title: "Geotechnical Liquefaction Analysis",
        text: "Geotechnical engineers evaluate cyclic stress ratios (CSR) in saturated sandy soils using peak ground acceleration normalized by gravity (PGA / g) to determine liquefaction susceptibility."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming 1 Gal equals 1 g: A Gal is 1 cm/s², while 1 g is 980.665 cm/s². Confusing Gal with g produces a severe 980-fold error in force calculations.",
      "Rounding 980.665 to 1,000 for compliance calculations: While dividing by 1,000 is handy for quick field estimates, official structural load calculations require the exact constant 980.665 to avoid a 1.97% systematic underestimation.",
      "Confusing Gal with Milligal (mGal): 1 Gal equals 1,000 mGal. A reading of 500 mGal is 0.5 Gal, which equals only 0.00051 g.",
      "Overlooking horizontal vs. vertical components: Strong-motion stations record three orthogonal components (North-South, East-West, and Up-Down). Ensure that individual directional Gal measurements are converted before vector summation."
    ]
  },
  faqs: [
    {
      question: "How do you convert Gal to standard gravity (g)?",
      answer: "Divide the acceleration in Gal by 980.665, or multiply by 0.0010197162. For example, a seismic acceleration of 196.13 Gal divided by 980.665 equals exactly 0.20 g."
    },
    {
      question: "What is 1 Gal in terms of g?",
      answer: "1 Gal equals approximately 0.00101972 g, which is roughly 1.0197 milli-g (or about 0.102% of Earth's standard gravitational acceleration)."
    },
    {
      question: "Why is 1 g equal to 980.665 Gal?",
      answer: "Standard gravity is internationally defined as 9.80665 m/s². Because 1 meter equals 100 centimeters, 9.80665 m/s² equals 980.665 cm/s². Since 1 Gal is defined as 1 cm/s², 1 g equals exactly 980.665 Gal."
    },
    {
      question: "How do you convert g back into Gal?",
      answer: "Multiply the acceleration in g by 980.665. For instance, an aircraft experiencing a 2.5 g maneuver experiences an acceleration of 2.5 × 980.665 = 2,451.66 Gal."
    },
    {
      question: "What is the difference between Gal and g?",
      answer: "Gal is a CGS metric unit equal to 1 cm/s² (0.01 m/s²), named after Galileo Galilei. Standard gravity (g) is a standard reference constant representing nominal terrestrial gravitational acceleration (9.80665 m/s²)."
    },
    {
      question: "How many Gal is considered a strong earthquake?",
      answer: "In seismology, ground accelerations exceeding 100 Gal (roughly 0.10 g) represent strong shaking capable of causing structural damage to masonry buildings. Ground motions exceeding 300 to 500 Gal (roughly 0.31 g to 0.51 g) represent severe to violent shaking."
    },
    {
      question: "Is Gal an official SI unit?",
      answer: "No, Gal belongs to the centimetre-gram-second (CGS) system. However, the International Bureau of Weights and Measures (BIPM) officially accepts the Gal for specialized use in geodesy, geophysics, and seismology."
    },
    {
      question: "Can an earthquake exceed 980.665 Gal (1.0 g)?",
      answer: "Yes, near-fault ground motions during severe earthquakes have repeatedly exceeded 1,000 Gal (1.02 g). For instance, during the 1994 Northridge and 2011 Tohoku earthquakes, localized accelerations reached 1,700 to 2,900 Gal (1.7 g to nearly 3.0 g)."
    },
    {
      question: "What is 100 Gal in g-force?",
      answer: "100 Gal equals 100 / 980.665 ≈ 0.10197 g, which is slightly more than one-tenth of standard gravitational acceleration (10.2% g)."
    }
  ],
  relatedList: [
    { label: "Gal to Meter/sec²", from: "gal-acceleration", to: "meter-per-second-squared" },
    { label: "Gal to Milligal", from: "gal-acceleration", to: "milligal-acceleration" },
    { label: "Standard Gravity (g) to Gal", from: "gravity-acceleration", to: "gal-acceleration" },
    { label: "Meter/sec² to Standard Gravity (g)", from: "meter-per-second-squared", to: "gravity-acceleration" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "3rd General Conference on Weights and Measures (CGPM 1901) - Declaration on the unit of mass and the definition of standard gravity (g₀)",
    "United States Geological Survey (USGS) - Technical ShakeMap Manual: Ground Motion and Intensity Calculation",
    "American Society of Civil Engineers (ASCE) - ASCE/SEI 7-22: Minimum Design Loads and Associated Criteria for Buildings and Other Structures"
  ]
};
