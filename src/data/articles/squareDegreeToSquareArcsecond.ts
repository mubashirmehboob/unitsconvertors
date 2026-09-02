import { CustomArticleData } from "./types";

export const squareDegreeToSquareArcsecondArticle: CustomArticleData = {
  fromUnitId: "square-degree",
  toUnitId: "square-arcsec",
  seoTitle: "Square Degree to Square Arcsecond Converter (deg² to arcsec²) - UnitsConvertors",
  metaDescription: "Convert square degrees to square arcseconds (deg² to arcsec²) with exact integer formulas (1 deg² = 12,960,000 arcsec²), high-resolution astronomy examples, tables, and FAQs.",
  h1: "Square Degree to Square Arcsecond Converter",
  introduction: [
    "Converting square degrees (deg² or sq deg) to square arcseconds (arcsec² or sq arcsec) translates macroscopic sky survey areas into the microscopic solid-angle units used for high-resolution astrophysics, space telescope resolving powers, and CCD pixel scale determinations.",
    "Because 1 angular degree is divided into 3,600 arcseconds (3,600''), a square area measuring 1 degree by 1 degree contains exactly 3,600 × 3,600 = 12,960,000 square arcseconds (1.296 × 10⁷ arcsec²). Converting square degrees to square arcseconds is an exact integer multiplication by 12,960,000.",
    "This guide explains the fine-scale angular geometry, provides step-by-step conversion examples for space telescopes like Hubble and James Webb, offers a comprehensive conversion table, and answers key questions about high-precision astronomical imaging."
  ],
  quickAnswer: {
    text: "To convert square degrees (deg²) to square arcseconds (arcsec²), multiply the square degree value by 12,960,000. For example, 0.01 square degrees equals exactly 129,600 square arcseconds.",
    formulaDisplay: "Square Arcseconds (arcsec²) = Square Degrees (deg²) × 12,960,000",
    subtext: "1 deg² = 12,960,000 arcsec² (exact integer conversion factor)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Degree (deg²)",
    text: "The square degree (deg² or sq deg) is a traditional unit of solid angle representing an area of 1° by 1° on the celestial sphere. It serves as the primary metric for mapping regional sky surveys, planetary orbital fields, and large constellation boundaries."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Arcsecond (arcsec²)",
    text: "The square arcsecond (arcsec² or sq arcsec) is a high-resolution angular area unit representing a square patch measuring 1 arcsecond (1/3,600th of a degree) on each side. It is the gold-standard unit for measuring point-spread functions (PSF), space telescope fields of view (e.g., HST, JWST), galaxy surface brightness (magnitudes per square arcsecond), and camera pixel scale."
  },
  relationship: "One square degree contains exactly 12,960,000 square arcseconds (1.296 × 10⁷ arcsec²). One square arcsecond equals exactly 1 / 12,960,000 square degrees (≈ 7.71605 × 10⁻⁸ deg²). A complete sphere contains approximately 5.346 × 10¹¹ square arcseconds.",
  relationshipTitle: "High-Precision Angular Scaling",
  relationshipItems: [
    { label: "1 deg²", value: "= 12,960,000 arcsec² (1.296 × 10⁷ arcsec²)" },
    { label: "0.1 deg²", value: "= 1,296,000 arcsec²" },
    { label: "0.01 deg²", value: "= 129,600 arcsec²" },
    { label: "0.001 deg²", value: "= 12,960 arcsec²" },
    { label: "1 sr", value: "≈ 42,545,170,296 arcsec² (4.255 × 10¹⁰ arcsec²)" },
    { label: "Full Sphere", value: "≈ 5.34638 × 10¹¹ arcsec²" }
  ],
  formula: {
    text: "Multiply the solid angle in square degrees by 12,960,000 (3,600²) to calculate square arcseconds.",
    math: "\\text{arcsec}^2 = \\text{deg}^2 \\times 12,960,000 = \\text{deg}^2 \\times 3,600^2",
    subtext: "Exact conversion based on 1 degree = 3,600 arcseconds."
  },
  practicalTip: {
    title: "Surface Brightness Profiling",
    text: "Astrophysicists measure galaxy light distributions in 'magnitudes per square arcsecond' (mag/arcsec²). When converting broad survey catalogs quoted in square degrees, multiplying by 12,960,000 allows direct surface brightness integration."
  },
  expertNote: {
    title: "Exact Arithmetic",
    text: "Because 12,960,000 is an exact integer constant (60⁴), floating-point arithmetic across 64-bit platforms avoids rounding distortion when translating catalog metadata."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 0.005 Square Degrees to Square Arcseconds",
        subtitle: "Convert a compact astronomical survey field into square arcseconds.",
        steps: [
          "Identify solid angle: 0.005 deg².",
          "Apply conversion formula: arcsec² = 0.005 × 12,960,000.",
          "Compute: 0.005 × 12,960,000 = 64,800 arcsec².",
          "Result: 0.005 square degrees equals exactly 64,800 square arcseconds."
        ]
      },
      {
        title: "Example 2: Hubble Space Telescope ACS Wide Field Channel (0.0031 deg²)",
        subtitle: "Convert the HST Advanced Camera for Surveys field (approx. 202\" × 202\" = 40,804 arcsec²) to square arcseconds.",
        steps: [
          "Identify area in square degrees: 0.00314846 deg².",
          "Apply formula: arcsec² = 0.00314846 × 12,960,000.",
          "Compute: 0.00314846 × 12,960,000 ≈ 40,804 arcsec².",
          "Result: 0.003148 square degrees equals approximately 40,804 square arcseconds."
        ]
      },
      {
        title: "Example 3: 1 Square Degree Deep Survey Field",
        subtitle: "Calculate the exact number of square arcseconds in a standard 1 deg² cosmological survey tile.",
        steps: [
          "Identify area: 1.0 deg².",
          "Apply formula: arcsec² = 1.0 × 12,960,000.",
          "Calculate: 1.0 × 12,960,000 = 12,960,000 arcsec².",
          "Result: 1 square degree contains exactly 12,960,000 square arcseconds."
        ]
      }
    ]
  },
  table: {
    title: "Square Degree to Square Arcsecond Conversion Table",
    headers: ["Square Degrees (deg²)", "Square Arcseconds (arcsec²)", "Scientific Notation", "Astronomical Scale"],
    rows: [
      { fromVal: "0.0001 deg²", toVal: "1,296 arcsec²", extra: "1.296 × 10³ arcsec²", extra2: "JWST NIRCam subarray" },
      { fromVal: "0.001 deg²", toVal: "12,960 arcsec²", extra: "1.296 × 10⁴ arcsec²", extra2: "Hubble WFC3 single pointing" },
      { fromVal: "0.005 deg²", toVal: "64,800 arcsec²", extra: "6.480 × 10⁴ arcsec²", extra2: "Deep space galaxy cluster" },
      { fromVal: "0.01 deg²", toVal: "129,600 arcsec²", extra: "1.296 × 10⁵ arcsec²", extra2: "Compact star cluster core" },
      { fromVal: "0.05 deg²", toVal: "648,000 arcsec²", extra: "6.480 × 10⁵ arcsec²", extra2: "Globular cluster outskirts" },
      { fromVal: "0.10 deg²", toVal: "1,296,000 arcsec²", extra: "1.296 × 10⁶ arcsec²", extra2: "Medium telescope camera field" },
      { fromVal: "0.20 deg²", toVal: "2,592,000 arcsec²", extra: "2.592 × 10⁶ arcsec²", extra2: "Full Moon total disc (≈ 2.54M arcsec²)" },
      { fromVal: "0.50 deg²", toVal: "6,480,000 arcsec²", extra: "6.480 × 10⁶ arcsec²", extra2: "1/2 degree square patch" },
      { fromVal: "1.00 deg²", toVal: "12,960,000 arcsec²", extra: "1.296 × 10⁷ arcsec²", extra2: "Standard 1° × 1° sky tile" },
      { fromVal: "5.00 deg²", toVal: "64,800,000 arcsec²", extra: "6.480 × 10⁷ arcsec²", extra2: "Wide-field survey detector" }
    ]
  },
  applications: {
    title: "Applications of Square Degree to Square Arcsecond Conversion",
    items: [
      {
        title: "Space Telescope Exposure Pointings",
        text: "NASA and ESA mission planners convert telescope sky survey targets from square degrees into square arcseconds to determine detector mosaic tiling sequences."
      },
      {
        title: "Detector Pixel Scale & Sampling",
        text: "Astronomical instrument scientists convert detector angular areas into square arcseconds to evaluate pixel sampling rates (arcsec²/pixel) against atmospheric seeing limits."
      },
      {
        title: "Galaxy Surface Brightness Integration",
        text: "Cosmologists integrate total galactic flux across square degrees by summing flux calibrated in nanojanskies per square arcsecond."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Converting deg² to arcsec²",
    items: [
      "Multiplying by 3,600 instead of 12,960,000: 3,600 is the 1D linear angle conversion (arcseconds per degree). Angular area requires squaring: 3,600² = 12,960,000.",
      "Confusing square arcseconds with square arcminutes: 1 square arcminute equals 3,600 square arcseconds, whereas 1 square degree equals 12,960,000 square arcseconds.",
      "Neglecting spherical cosine convergence: Off the celestial equator, a 1-second step in Right Ascension subtends 15 × cos(δ) arcseconds, shrinking the true physical sky area."
    ]
  },
  faqs: [
    {
      question: "How do I convert square degrees to square arcseconds?",
      answer: "Multiply the solid angle in square degrees by 12,960,000. For example, 0.05 deg² × 12,960,000 = 648,000 arcsec²."
    },
    {
      question: "How many square arcseconds are in 1 square degree?",
      answer: "There are exactly 12,960,000 square arcseconds in 1 square degree (3,600 × 3,600 = 12,960,000)."
    },
    {
      question: "Why is the conversion factor 12,960,000?",
      answer: "There are 60 arcminutes in a degree and 60 arcseconds in an arcminute, making 3,600 arcseconds per degree. For a 2D square area, 3,600 × 3,600 = 12,960,000 arcsec²/deg²."
    },
    {
      question: "How do I convert square arcseconds back to square degrees?",
      answer: "Divide the square arcsecond value by 12,960,000 (or multiply by 7.71605 × 10⁻⁸)."
    },
    {
      question: "How many square arcseconds are in 1 steradian?",
      answer: "One steradian contains approximately 42,545,170,296 square arcseconds (about 4.255 × 10¹⁰ arcsec²)."
    },
    {
      question: "How many square arcseconds are in the entire sky?",
      answer: "A complete celestial sphere contains approximately 534,638,377,800 square arcseconds (exact: 1,679,616,000,000 / π arcsec²)."
    },
    {
      question: "What is the area of the Hubble Ultra Deep Field in square arcseconds?",
      answer: "The Hubble Ultra Deep Field covers approximately 11.5 square arcminutes, which equals exactly 41,400 square arcseconds (or about 0.003194 square degrees)."
    },
    {
      question: "Is square arcsecond used outside astronomy?",
      answer: "Yes. High-precision laser metrology, orbital guidance systems, and satellite geodesy use square arcseconds to define optical beam divergence and target tracking error zones."
    }
  ],
  relatedList: [
    { label: "Square Arcsecond to Square Degree", from: "square-arcsec", to: "square-degree" },
    { label: "Square Degree to Square Arcminute", from: "square-degree", to: "square-arcmin" },
    { label: "Square Degree to Steradian", from: "square-degree", to: "steradian" },
    { label: "Steradian to Square Arcsecond", from: "steradian", to: "square-arcsec" },
    { label: "Square Radian to Square Arcsecond", from: "square-radian", to: "square-arcsec" }
  ],
  references: [
    "International Astronomical Union (IAU) — Fundamental Astronomy & Precision Coordinate Systems",
    "Space Telescope Science Institute (STScI) — Instrument Handbooks (HST/JWST Field Geometry)",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
