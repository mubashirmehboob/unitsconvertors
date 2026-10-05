import { CustomArticleData } from "./types";

export const squareArcminuteToSquareRadianArticle: CustomArticleData = {
  fromUnitId: "square-arcmin",
  toUnitId: "square-radian",
  seoTitle: "Square Arcminute to Square Radian Converter (arcmin² to rad²) | UnitsConvertors.com",
  metaDescription: "Convert square arcminutes to square radians (arcmin² to rad²) with exact geometric precision. Learn the rad² = sr identity, conversion formulas, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/solid-angle/square-arcmin-to-square-radian",
  h1: "Square Arcminute to Square Radian Converter",
  introduction: [
    "Converting square arcminutes (arcmin² or sq arcmin) to square radians (rad² or sq rad) bridges telescopic sky measurements with analytical physics, laser beam divergence theory, and spherical harmonic integrals. While observational astronomers and optical engineers measure telescope sensor footprints and celestial targets in square arcminutes, theoretical physics equations and mathematical integration over spherical surfaces require solid angles expressed in dimensionless square radians.",
    "In geometry and SI metric conventions, one square radian is mathematically identical to one steradian ($1\\text{ rad}^2 \\equiv 1\\text{ sr}$). Because one radian contains exactly $10,800 / \\pi$ arcminutes, one square radian encompasses $(10,800 / \\pi)^2 = 116,640,000 / \\pi^2$ square arcminutes (approximately 11,818,102.86 arcmin²). Converting square arcminutes to square radians therefore requires multiplying by $\\pi^2 / 116,640,000$ (approximately $8.461595 \\times 10^{-8}\\text{ rad}^2$). This conversion provides the exact dimensionless scalar needed for theoretical wave-optics and radiative transport calculations."
  ],
  quickAnswer: {
    text: "To convert square arcminutes (arcmin²) to square radians (rad²), multiply the arcmin² value by π² / 116,640,000 (approximately 8.461595 × 10⁻⁸, or divide by 11,818,102.86). For example, 1,000 square arcminutes equals approximately 8.4616 × 10⁻⁵ square radians.",
    formulaDisplay: "Solid Angle (rad²) = Area (arcmin²) × (π / 10,800)² ≈ Area (arcmin²) × 8.461595 × 10⁻⁸",
    subtext: "1 rad² ≡ 1 sr ≈ 11,818,102.86 arcmin² | 1 arcmin² ≈ 8.461595 × 10⁻⁸ rad²"
  },
  aboutSourceUnit: {
    title: "About the Square Arcminute (arcmin²)",
    text: "The square arcminute (symbol: arcmin² or sq arcmin) is an angular area unit defined as a square measuring 1 arcminute by 1 arcminute (1/60 of a degree per side). It is the standard reference scale in optical astronomy for intermediate celestial structures such as planetary nebulae, open star clusters, and space telescope camera detector footprints."
  },
  aboutTargetUnit: {
    title: "About the Square Radian (rad²)",
    text: "The square radian (symbol: rad²) is the natural unit of solid angle formed by the product of two orthogonal radian angles. In the International System of Units (SI), the square radian is given the special derived name steradian (sr). Because radians are dimensionless ratios of arc length to radius ($m/m$), 1 square radian equals 1 steradian ($1\\text{ rad}^2 = 1\\text{ sr} = 1\\text{ m}^2/\\text{m}^2 = 1$)."
  },
  relationship: "A radian contains $180 \\times 60 / \\pi = 10,800 / \\pi$ arcminutes (≈ 3,437.7468 arcmin). Squaring this conversion ratio establishes that 1 square radian equals exactly $116,640,000 / \\pi^2$ square arcminutes (≈ 11,818,102.86 arcmin²). Conversely, each square arcminute represents exactly $\\pi^2 / 116,640,000 \\approx 8.461595 \\times 10^{-8}$ square radians. Because $1\\text{ rad}^2 = 1\\text{ sr}$, this factor is identical to the steradian factor.",
  relationshipTitle: "Exact Analytic & Dimensionless Scaling",
  relationshipItems: [
    { label: "1 rad² in arcmin²", value: "≈ 11,818,103 arcmin² (exact: (10,800/π)²)" },
    { label: "1 arcmin² in rad²", value: "≈ 8.461595 × 10⁻⁸ rad²" },
    { label: "1 rad² identity", value: "≡ 1 steradian (sr)" },
    { label: "Full Sphere (4π rad²)", value: "≈ 148,510,661 arcmin²" }
  ],
  formula: {
    text: "Multiply the area in square arcminutes by π² / 116,640,000 (or divide by 11,818,102.86) to determine the equivalent solid angle in square radians.",
    math: "\\Omega\\text{ (rad}^2\\text{)} = \\text{Area (arcmin}^2\\text{)} \\times \\left(\\frac{\\pi}{10,800}\\right)^2 = \\text{Area (arcmin}^2\\text{)} \\times \\frac{\\pi^2}{116,640,000}",
    subtext: "Inverse formula: Area (arcmin²) = Ω (rad²) × (116,640,000 / π²)"
  },
  formulaTitle: "Square Arcminute to Square Radian Conversion Formula",
  practicalTip: {
    title: "Theoretical Equation Substitution Tip",
    text: "When implementing computational algorithms or differential equation solvers in Python, MATLAB, or C++, solid angles are frequently represented as pure dimensionless floating-point numbers in rad² rather than using specialized units. Multiplying your arcmin² input by (math.pi / 10800)**2 allows seamless integration into standard trigonometric and calculus functions."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Small Astronomical Target Field",
        subtitle: "A galaxy core aperture covers 25 square arcminutes. Convert this solid angle into square radians.",
        steps: [
          "State given area: 25 arcmin².",
          "Identify conversion factor: 1 arcmin² ≈ 8.461595 × 10⁻⁸ rad².",
          "Multiply: 25 × 8.461595 × 10⁻⁸ rad².",
          "Calculate product: 2.1154 × 10⁻⁶ rad².",
          "Conclude: The target subtends 2.1154 × 10⁻⁶ square radians."
        ]
      },
      {
        title: "Example 2: 1 Square Degree Survey Field",
        subtitle: "A square degree contains 3,600 square arcminutes. Express this area in square radians.",
        steps: [
          "State value: 3,600 arcmin².",
          "Apply formula: 3,600 ÷ 11,818,102.86.",
          "Compute result: 0.00030462 rad² (or 3.0462 × 10⁻⁴ rad²).",
          "Final Result: 3,600 square arcminutes equals 3.0462 × 10⁻⁴ square radians (equivalent to (π/180)² rad²)."
        ]
      },
      {
        title: "Example 3: Space Telescope Optical Camera Footprint",
        subtitle: "An infrared camera array has a field of view of 120 square arcminutes. Determine its coverage in square radians.",
        steps: [
          "State area: 120 arcmin².",
          "Multiply: 120 × 8.461595 × 10⁻⁸.",
          "Calculate: 1.0154 × 10⁻⁵ rad².",
          "Result: The detector array subtends 1.0154 × 10⁻⁵ square radians."
        ]
      }
    ]
  },
  table: {
    title: "Square Arcminute to Square Radian Conversion Reference Table",
    headers: ["Square Arcminutes (arcmin²)", "Square Radians (rad²)", "Equivalent in Steradians (sr)", "Scientific Notation"],
    rows: [
      { fromVal: "1 arcmin²", toVal: "0.0000000846 rad²", extra: "8.4616 × 10⁻⁸ sr", extra2: "8.4616 × 10⁻⁸ rad²" },
      { fromVal: "5 arcmin²", toVal: "0.0000004231 rad²", extra: "4.2308 × 10⁻⁷ sr", extra2: "4.2308 × 10⁻⁷ rad²" },
      { fromVal: "10 arcmin²", toVal: "0.0000008462 rad²", extra: "8.4616 × 10⁻⁷ sr", extra2: "8.4616 × 10⁻⁷ rad²" },
      { fromVal: "50 arcmin²", toVal: "0.0000042308 rad²", extra: "4.2308 × 10⁻⁶ sr", extra2: "4.2308 × 10⁻⁶ rad²" },
      { fromVal: "100 arcmin²", toVal: "0.0000084616 rad²", extra: "8.4616 × 10⁻⁶ sr", extra2: "8.4616 × 10⁻⁶ rad²" },
      { fromVal: "500 arcmin²", toVal: "0.0000423080 rad²", extra: "4.2308 × 10⁻⁵ sr", extra2: "4.2308 × 10⁻⁵ rad²" },
      { fromVal: "1,000 arcmin²", toVal: "0.0000846159 rad²", extra: "8.4616 × 10⁻⁵ sr", extra2: "8.4616 × 10⁻⁵ rad²" },
      { fromVal: "3,600 arcmin² (1 deg²)", toVal: "0.0003046174 rad²", extra: "3.0462 × 10⁻⁴ sr", extra2: "3.0462 × 10⁻⁴ rad²" },
      { fromVal: "10,000 arcmin²", toVal: "0.0008461595 rad²", extra: "8.4616 × 10⁻⁴ sr", extra2: "8.4616 × 10⁻⁴ rad²" },
      { fromVal: "50,000 arcmin²", toVal: "0.0042307975 rad²", extra: "4.2308 × 10⁻³ sr", extra2: "4.2308 × 10⁻³ rad²" },
      { fromVal: "100,000 arcmin²", toVal: "0.0084615950 rad²", extra: "8.4616 × 10⁻³ sr", extra2: "8.4616 × 10⁻³ rad²" },
      { fromVal: "1,000,000 arcmin²", toVal: "0.0846159499 rad²", extra: "8.4616 × 10⁻² sr", extra2: "8.4616 × 10⁻² rad²" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Theoretical Astrophysics Radiative Transfer",
        text: "Integrating spectral radiance $I_\\nu$ over differential solid angles $d\\Omega$ expressed in dimensionless square radians."
      },
      {
        title: "Laser Beam Divergence & Spatial Profiling",
        text: "Modeling conical laser output envelopes and Gaussian beam waist expansion angles in pure square radians."
      },
      {
        title: "Spherical Harmonics and Multipole Expansions",
        text: "Evaluating orthonormal basis functions $Y_{lm}(\\theta, \\phi)$ over celestial sphere patches parameterized in radian angles."
      },
      {
        title: "Atmospheric Optical Scattering Calculations",
        text: "Quantifying Mie and Rayleigh phase scattering functions over forward and backward solid angle cones."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting arcmin² to rad²",
    items: [
      "Failing to square the conversion ratio: Converting using the linear factor $(10,800/\\pi)$ instead of the squared factor $(10,800/\\pi)^2$, causing an error factor of over 3,400.",
      "Thinking square radians and steradians are different units: In SI metric definitions, 1 square radian is identical to 1 steradian ($1\\text{ rad}^2 = 1\\text{ sr}$).",
      "Confusing square arcminutes with square degrees: Dividing by $(180/\\pi)^2$ instead of $(10,800/\\pi)^2$, resulting in a value that is 3,600 times too large.",
      "Precision degradation in floating-point code: Using an inaccurate constant such as 3.14 for $\\pi$, which compounds significantly when raised to the second power."
    ]
  },
  faqs: [
    {
      question: "Is 1 square radian the same as 1 steradian?",
      answer: "Yes, exactly. The steradian (sr) is simply the special SI derived name given to the square radian ($1\\text{ sr} = 1\\text{ rad}^2 = 1\\text{ m}^2/\\text{m}^2$). They represent the exact same physical quantity."
    },
    {
      question: "How many square radians are in 1 square arcminute?",
      answer: "One square arcminute contains approximately 8.461595 × 10⁻⁸ square radians (or exactly π² / 116,640,000 rad²)."
    },
    {
      question: "What is the formula to convert square arcminutes to square radians?",
      answer: "The formula is: Solid Angle (rad²) = Area (arcmin²) × (π / 10,800)², which equals Area (arcmin²) × (π² / 116,640,000) or Area (arcmin²) ÷ 11,818,102.86."
    },
    {
      question: "How many square arcminutes are in 1 square radian?",
      answer: "There are exactly 116,640,000 / π² square arcminutes in 1 square radian, which is approximately 11,818,102.86 arcmin²."
    },
    {
      question: "What is 3,600 square arcminutes in square radians?",
      answer: "3,600 square arcminutes (1 square degree) equals approximately 0.00030462 square radians (or 3.0462 × 10⁻⁴ rad²)."
    },
    {
      question: "Why do mathematical physics equations use rad² instead of sr?",
      answer: "In analytical mathematics and calculus, expressing angles in radians highlights their dimensionless nature ($m/m$), ensuring dimensional consistency across differential equations."
    },
    {
      question: "How many square radians cover a complete sphere?",
      answer: "A complete sphere encompasses exactly 4π square radians (approximately 12.56637 rad²), which equals 1 spat."
    },
    {
      question: "How do I convert square radians back to square arcminutes?",
      answer: "Multiply the square radian value by 116,640,000 / π² (approximately 11,818,102.86)."
    },
    {
      question: "What is 100 square arcminutes in square radians?",
      answer: "100 square arcminutes equals approximately 8.4616 × 10⁻⁶ square radians ($100 \\times 8.461595 \\times 10^{-8}\\text{ rad}^2$)."
    },
    {
      question: "What is the relationship between radians and arcminutes?",
      answer: "One radian equals 180 × 60 / π = 10,800 / π arcminutes, or approximately 3,437.7468 arcminutes."
    }
  ],
  relatedList: [
    { label: "Square Radian to Square Arcminute", from: "square-radian", to: "square-arcmin" },
    { label: "Square Arcminute to Steradian", from: "square-arcmin", to: "steradian" },
    { label: "Square Arcminute to Square Degree", from: "square-arcmin", to: "square-degree" },
    { label: "Square Arcminute to Square Arcsecond", from: "square-arcmin", to: "square-arcsec" },
    { label: "Square Arcminute to Spat", from: "square-arcmin", to: "spat" }
  ],
  references: [
    "BIPM: The International System of Units (SI) — Derived units and dimensionless quantities.",
    "ISO 80000-3: Quantities and units — Part 3: Space and time.",
    "NIST Guide for the Use of the International System of Units (SP 811)."
  ]
};
