import { CustomArticleData } from "./types";

export const squareRadianToSquareArcsecondArticle: CustomArticleData = {
  fromUnitId: "square-radian",
  toUnitId: "square-arcsec",
  seoTitle: "Square Radian to Square Arcsecond Converter (rad² to arcsec²) - UnitsConvertors",
  metaDescription: "Convert square radians to square arcseconds (rad² to arcsec²) with exact solid angle formulas (arcsec² = rad² × (648,000/π)²), worked astrophysics examples, tables, and FAQs.",
  h1: "Square Radian to Square Arcsecond Converter",
  introduction: [
    "Converting square radians (rad²) to square arcseconds (arcsec² or sq arcsec) scales continuous mathematical solid angles down into the micro-angular units used for high-resolution space astronomy, point-spread function (PSF) integration, and adaptive optics metrology.",
    "Because 1 radian contains 648,000 / π arcseconds (approximately 206,264.81''), a square radian spans (648,000 / π)² square arcseconds, which equals exactly 419,904,000,000 / π² (approximately 42,545,170,296.15 arcsec² or 4.255 × 10¹⁰ arcsec²). Because 1 square radian is dimensionally and physically identical to 1 steradian, this exact conversion factor also governs steradian-to-arcsecond conversions.",
    "This guide explains the high-resolution angular geometry, works through concrete examples from space telescope detectors and laser beam divergence, provides an extensive lookup table, and answers common astronomical questions."
  ],
  quickAnswer: {
    text: "To convert square radians (rad²) to square arcseconds (arcsec²), multiply the square radian value by (648,000 / π)², or approximately 42,545,170,296.15. For example, 0.000001 square radians (1 µrad²) equals approximately 42,545.17 square arcseconds.",
    formulaDisplay: "Square Arcseconds (arcsec²) = Square Radians (rad²) × (648,000 ÷ π)²",
    subtext: "1 rad² ≈ 42,545,170,296.15 arcsec² (1 arcsec² ≈ 2.3504 × 10⁻¹¹ rad²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Radian (rad²)",
    text: "The square radian (rad²) is the geometric solid-angle unit defined by two orthogonal 1-radian angular spans. Equal in dimension and magnitude to the SI steradian (1 rad² = 1 sr), it represents the natural solid-angle unit generated when solving wave equations, radiative transfer integrals, and diffraction equations in theoretical physics."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Arcsecond (arcsec²)",
    text: "The square arcsecond (arcsec² or sq arcsec) is a high-precision angular area unit representing a square patch measuring 1 arcsecond (1/3,600th of a degree) on each side. It is the international benchmark unit for measuring space telescope resolution limits (HST, JWST), galaxy surface brightness profiles, and astronomical camera pixel scales."
  },
  relationship: "One square radian contains exactly 419,904,000,000 / π² square arcseconds (≈ 4.254517 × 10¹⁰ arcsec²). One square arcsecond equals π² / 419,904,000,000 square radians (≈ 2.350443 × 10⁻¹¹ rad²). A full sphere of 4π square radians contains approximately 534,638,377,800 square arcseconds.",
  relationshipTitle: "Micro-Angular High-Precision Scaling",
  relationshipItems: [
    { label: "1 rad²", value: "≈ 42,545,170,296.15 arcsec² (4.255 × 10¹⁰ arcsec²)" },
    { label: "0.000001 rad² (1 µrad²)", value: "≈ 42,545.17 arcsec²" },
    { label: "0.001 rad²", value: "≈ 42,545,170.30 arcsec²" },
    { label: "0.01 rad²", value: "≈ 425,451,702.96 arcsec²" },
    { label: "2π rad² (Hemisphere)", value: "≈ 2.67319 × 10¹¹ arcsec²" },
    { label: "4π rad² (Full Sphere)", value: "≈ 5.34638 × 10¹¹ arcsec²" }
  ],
  formula: {
    text: "Multiply the solid angle in square radians by (648,000 / π)², or 419,904,000,000 / π² (approximately 42,545,170,296.15), to calculate square arcseconds.",
    math: "\\text{arcsec}^2 = \\text{rad}^2 \\times \\left(\\frac{648,000}{\\pi}\\right)^2 = \\text{rad}^2 \\times \\frac{419,904,000,000}{\\pi^2} \\approx \\text{rad}^2 \\times 4.25451703 \\times 10^{10}",
    subtext: "Where (648,000 / π)² ≈ 42,545,170,296.1522."
  },
  practicalTip: {
    title: "Micro-Radian Beam Divergence",
    text: "Laser divergence is frequently specified in micro-radians (µrad). A circular beam with a half-angle divergence of 100 µrad subtends a solid angle of Ω ≈ π θ² = π × (10⁻⁴)² = 3.1416 × 10⁻⁸ rad². Multiplying by 4.2545 × 10¹⁰ gives approximately 1,336.7 square arcseconds."
  },
  expertNote: {
    title: "Exact Rational Formulation",
    text: "Because 1 rad = 3,600 × 180 / π = 648,000 / π arcseconds, the 2D area scales as 648,000² / π² = 419,904,000,000 / π². Using this exact ratio in double-precision floating-point software ensures exactness down to the sub-milliarcsecond scale."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 10⁻⁶ Square Radians (1 µrad²) to Square Arcseconds",
        subtitle: "Convert a micro-radian solid angle into astronomical square arcseconds.",
        steps: [
          "Identify solid angle: 1.0 × 10⁻⁶ rad².",
          "Apply conversion formula: arcsec² = 10⁻⁶ × (419,904,000,000 / π²).",
          "Compute constant: 419,904,000,000 / 9.8696044 ≈ 42,545,170,296.15.",
          "Multiply: 10⁻⁶ × 42,545,170,296.15 = 42,545.17 arcsec².",
          "Result: 10⁻⁶ square radians equals approximately 42,545.17 square arcseconds."
        ]
      },
      {
        title: "Example 2: 1 Unit Square Radian (1 rad²)",
        subtitle: "Determine the total number of square arcseconds in one square radian.",
        steps: [
          "Identify solid angle: 1.0 rad².",
          "Apply formula: arcsec² = 1.0 × 42,545,170,296.15.",
          "Calculate: 42,545,170,296.15 arcsec².",
          "Result: 1 square radian contains approximately 42.55 billion square arcseconds."
        ]
      },
      {
        title: "Example 3: Space Telescope Focal Plane Field (2.5 × 10⁻⁷ rad²)",
        subtitle: "Convert a high-resolution space observatory detector field into square arcseconds.",
        steps: [
          "Identify solid angle: 2.5 × 10⁻⁷ rad².",
          "Apply formula: arcsec² = 2.5 × 10⁻⁷ × 4.25451703 × 10¹⁰.",
          "Calculate: 2.5 × 10⁻⁷ × 42,545,170,296.15 ≈ 10,636.29 arcsec².",
          "Result: 2.5 × 10⁻⁷ square radians equals approximately 10,636.29 square arcseconds (about 2.95 square arcminutes)."
        ]
      }
    ]
  },
  table: {
    title: "Square Radian to Square Arcsecond Conversion Table",
    headers: ["Square Radians (rad²)", "Square Arcseconds (arcsec²)", "Scientific Notation", "Observational Context"],
    rows: [
      { fromVal: "10⁻⁸ rad²", toVal: "425.45 arcsec²", extra: "4.2545 × 10² arcsec²", extra2: "JWST NIRSpec single aperture" },
      { fromVal: "10⁻⁷ rad²", toVal: "4,254.52 arcsec²", extra: "4.2545 × 10³ arcsec²", extra2: "Hubble WFPC2 PC chip" },
      { fromVal: "10⁻⁶ rad²", toVal: "42,545.17 arcsec²", extra: "4.2545 × 10⁴ arcsec²", extra2: "Hubble Ultra Deep Field (41,400 arcsec²)" },
      { fromVal: "10⁻⁵ rad²", toVal: "425,451.70 arcsec²", extra: "4.2545 × 10⁵ arcsec²", extra2: "Compact galaxy cluster core" },
      { fromVal: "0.0001 rad²", toVal: "4,254,517.03 arcsec²", extra: "4.2545 × 10⁶ arcsec²", extra2: "Full Moon total disc (≈ 2.54M arcsec²)" },
      { fromVal: "0.001 rad²", toVal: "42,545,170.30 arcsec²", extra: "4.2545 × 10⁷ arcsec²", extra2: "Extended nebula" },
      { fromVal: "0.01 rad²", toVal: "425,451,702.96 arcsec²", extra: "4.2545 × 10⁸ arcsec²", extra2: "Wide Schmidt camera mosaic" },
      { fromVal: "0.1 rad²", toVal: "4,254,517,029.62 arcsec²", extra: "4.2545 × 10⁹ arcsec²", extra2: "Medium constellation boundary" },
      { fromVal: "1.0 rad²", toVal: "42,545,170,296.15 arcsec²", extra: "4.2545 × 10¹⁰ arcsec²", extra2: "1 Unit Solid Angle (1 sr)" },
      { fromVal: "12.56637 rad² (4π)", toVal: "534,638,377,800 arcsec²", extra: "5.3464 × 10¹¹ arcsec²", extra2: "Full celestial sphere (100% / 1 Spat)" }
    ]
  },
  applications: {
    title: "Applications of Square Radian to Square Arcsecond Conversion",
    items: [
      {
        title: "High-Resolution Astrophysics and Space Telescopes",
        text: "Translating theoretical solid angles from diffraction integrals into square arcseconds to evaluate camera pixel sampling and point spread function (PSF) profiles."
      },
      {
        title: "Surface Brightness Profiling (mag/arcsec²)",
        text: "Converting continuous radiative flux per unit solid angle (W/sr) into photometric magnitude scales per square arcsecond to analyze galactic surface brightness."
      },
      {
        title: "Laser Satellite Communications & LIDAR",
        text: "Converting optical transceiver beam divergence solid angles calculated in square radians into square arcseconds for ground telescope tracking alignment."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Converting rad² to arcsec²",
    items: [
      "Multiplying by 206,264.8 instead of (206,264.8)²: 206,264.8 is the 1D planar conversion factor (arcseconds per radian). Solid angle requires the square: (648,000/π)² ≈ 4.2545 × 10¹⁰.",
      "Confusing square arcseconds with square arcminutes: 1 square arcminute equals 3,600 square arcseconds; multiplying by the arcminute factor underestimates by 3,600 times.",
      "Loss of precision in floating point math: Truncating 4.25451703 × 10¹⁰ to 4.25 × 10¹⁰ introduces an error of over 45 million square arcseconds per square radian."
    ]
  },
  faqs: [
    {
      question: "How do I convert square radians to square arcseconds?",
      answer: "Multiply the solid angle in square radians by (648,000 / π)², which is approximately 42,545,170,296.15."
    },
    {
      question: "How many square arcseconds are in 1 square radian?",
      answer: "There are approximately 42,545,170,296.15 square arcseconds in 1 square radian (exact: 419,904,000,000 / π² arcsec²)."
    },
    {
      question: "Why is 1 rad² equal to approximately 42.55 billion arcsec²?",
      answer: "Because 1 radian equals 648,000 / π ≈ 206,264.81 arcseconds. Squaring this value for a 2D angular area yields (206,264.81)² ≈ 42,545,170,296.15 arcsec²."
    },
    {
      question: "Is converting square radians to square arcseconds the same as steradians to square arcseconds?",
      answer: "Yes. Because 1 square radian equals exactly 1 steradian, both conversions use the identical multiplier of approximately 42.545 billion arcsec²/rad²."
    },
    {
      question: "How do I convert square arcseconds back to square radians?",
      answer: "Divide the square arcsecond value by 42,545,170,296.15 (or multiply by 2.350443 × 10⁻¹¹)."
    },
    {
      question: "How many square arcseconds are in the entire celestial sphere?",
      answer: "A complete sphere of 4π square radians contains approximately 534,638,377,800 square arcseconds (exact: 1,679,616,000,000 / π arcsec²)."
    },
    {
      question: "How many square arcseconds are in a hemisphere?",
      answer: "A hemisphere (2π square radians) contains approximately 267,319,188,900 square arcseconds."
    },
    {
      question: "What is the area of the full Moon in square radians and square arcseconds?",
      answer: "The full Moon has an angular area of approximately 2,545,000 square arcseconds (about 706.9 arcmin²), which corresponds to approximately 0.0000598 square radians."
    }
  ],
  relatedList: [
    { label: "Steradian to Square Arcsecond", from: "steradian", to: "square-arcsec" },
    { label: "Square Degree to Square Arcsecond", from: "square-degree", to: "square-arcsec" },
    { label: "Square Radian to Square Arcminute", from: "square-radian", to: "square-arcmin" },
    { label: "Square Radian to Square Degree", from: "square-radian", to: "square-degree" },
    { label: "Square Radian to Steradian", from: "square-radian", to: "steradian" }
  ],
  references: [
    "International Astronomical Union (IAU) — Standards of Fundamental Astronomy (SOFA)",
    "BIPM — The International System of Units (SI Brochure, 9th Edition), Solid Angle Units",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
