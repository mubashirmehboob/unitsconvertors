import { CustomArticleData } from "./types";

export const squareArcsecondToSpatArticle: CustomArticleData = {
  fromUnitId: "square-arcsec",
  toUnitId: "spat",
  seoTitle: "Square Arcsecond to Spat Converter (arcsec² to sp) | UnitsConvertors.com",
  metaDescription: "Convert square arcseconds to spats (arcsec² to sp) with astronomical precision. Learn the full-sphere solid angle formula, celestial fraction examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/solid-angle/square-arcsec-to-spat",
  h1: "Square Arcsecond to Spat Converter",
  introduction: [
    "Converting square arcseconds (arcsec² or sq arcsec) to spats (sp) expresses sub-arcminute telescopic angular resolution as an exact fractional portion of the entire celestial vault. While high-resolution imaging instruments (such as the James Webb Space Telescope NIRCam, Hubble WFC3, and adaptive optics systems) quantify camera detector pixels and point-spread functions in square arcseconds, the spat represents the complete $4\\pi$ solid angle of a closed spherical shell.",
    "Because a complete sphere encompasses $4\\pi$ steradians and one steradian equals $419,904,000,000/\\pi^2$ square arcseconds, one spat equals exactly $1,679,616,000,000/\\pi$ square arcseconds (approximately 5.346384 × 10¹¹ arcsec²). Converting square arcseconds to spats requires multiplying by $\\pi / 1,679,616,000,000$ (approximately $1.870446 \\times 10^{-12}\\text{ sp}$). This mathematical relationship allows observational cosmologists and space mission planners to compute the exact fraction of the universe sampled by deep pencil-beam core exposures."
  ],
  quickAnswer: {
    text: "To convert square arcseconds (arcsec²) to spats (sp), divide the square arcsecond value by 1,679,616,000,000 / π (approximately 534,638,377,788), or multiply by 1.870446 × 10⁻¹². For example, 1,000,000 square arcseconds equals approximately 1.8704 × 10⁻⁶ spats.",
    formulaDisplay: "Solid Angle (sp) = Area (arcsec²) × (π / 1,679,616,000,000) ≈ Area (arcsec²) × 1.870446 × 10⁻¹²",
    subtext: "1 spat = 4π sr ≈ 5.346384 × 10¹¹ arcsec² | 1 arcsec² ≈ 1.870446 × 10⁻¹² sp"
  },
  aboutSourceUnit: {
    title: "About the Square Arcsecond (arcsec²)",
    text: "The square arcsecond (symbol: arcsec² or sq arcsec) is a fine unit of angular area corresponding to a square patch of sky measuring 1 arcsecond by 1 arcsecond (1/3,600 of a degree per side, or 1/12,960,000 of a square degree). It is the premier standard for telescope pixel pitch scales, surface brightness ratings, and stellar resolving limits."
  },
  aboutTargetUnit: {
    title: "About the Spat (sp)",
    text: "The spat (symbol: sp) is a unit of solid angle corresponding to a full sphere, equal to exactly $4\\pi$ steradians (approximately 12.56637 sr, 41,252.96 square degrees, or 148,510,661 square arcminutes). A hemisphere equals 0.5 spats (2π sr), and an octant equals 0.125 spats (0.5π sr)."
  },
  relationship: "A full sphere covers $4\\pi$ steradians. Because 1 steradian contains $(648,000/\\pi)^2 = 419,904,000,000/\\pi^2$ square arcseconds, multiplying by $4\\pi$ demonstrates that 1 spat equals $1,679,616,000,000/\\pi$ square arcseconds (≈ 534,638,377,787.5 arcsec²). Conversely, each square arcsecond represents exactly $\\pi / 1,679,616,000,000 \\approx 1.870446 \\times 10^{-12}$ spats.",
  relationshipTitle: "Spherical Proportion & Exact Scaling",
  relationshipItems: [
    { label: "1 spat (Entire Sky)", value: "≈ 5.346384 × 10¹¹ arcsec²" },
    { label: "0.5 spat (Hemisphere)", value: "≈ 2.673192 × 10¹¹ arcsec²" },
    { label: "1 arcsec² in spat", value: "≈ 1.870446 × 10⁻¹² sp" },
    { label: "1 deg² in spat", value: "≈ 2.424036 × 10⁻⁵ sp" }
  ],
  formula: {
    text: "Multiply the area in square arcseconds by π / 1,679,616,000,000 (or divide by 534,638,377,787.5) to determine the equivalent solid angle in spats.",
    math: "\\Omega\\text{ (sp)} = \\text{Area (arcsec}^2\\text{)} \\times \\frac{\\pi}{1,679,616,000,000} = \\frac{\\text{Area (arcsec}^2\\text{)}}{534,638,377,787.5}",
    subtext: "Inverse formula: Area (arcsec²) = Ω (sp) × (1,679,616,000,000 / π)"
  },
  formulaTitle: "Square Arcsecond to Spat Conversion Formula",
  practicalTip: {
    title: "Cosmological Point Source Volume Tip",
    text: "Multiplying a spat value by 100 reveals the exact percentage of the entire celestial sphere covered. For instance, an ultra-deep telescope survey field spanning 534,638 square arcseconds equals $1.0 \\times 10^{-6}\\text{ spats}$, which corresponds to exactly one-millionth of one percent ($10^{-4}\\%$) of the sky."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: High-Resolution Telescope Aperture",
        subtitle: "A spectrograph fiber aperture covers an area of 3.5 square arcseconds. Determine what fraction of a spat this represents.",
        steps: [
          "State starting area: 3.5 arcsec².",
          "Identify conversion factor: 1 arcsec² ≈ 1.870446 × 10⁻¹² sp.",
          "Multiply: 3.5 × 1.870446 × 10⁻¹² sp.",
          "Calculate: 6.5466 × 10⁻¹² sp.",
          "Conclude: The fiber aperture spans 6.5466 × 10⁻¹² spats."
        ]
      },
      {
        title: "Example 2: 1 Square Arcminute Sky Region",
        subtitle: "A galaxy cluster core spans 3,600 square arcseconds (1 square arcminute). Calculate the area in spats.",
        steps: [
          "State area: 3,600 arcsec².",
          "Divide by full-sphere constant: 3,600 ÷ 534,638,377,787.5.",
          "Compute result: 6.7336 × 10⁻⁹ sp.",
          "Final Result: The core covers 6.7336 × 10⁻⁹ spats of the total sky."
        ]
      },
      {
        title: "Example 3: 1 Square Degree Survey Tile",
        subtitle: "A wide survey field covers 12,960,000 square arcseconds (1 square degree). Convert to spats.",
        steps: [
          "State area: 12,960,000 arcsec².",
          "Multiply: 12,960,000 × 1.870446 × 10⁻¹².",
          "Calculate: 2.4240 × 10⁻⁵ sp.",
          "Result: 1 square degree represents 2.424 × 10⁻⁵ spats (roughly 0.00242% of the sky)."
        ]
      }
    ]
  },
  table: {
    title: "Square Arcsecond to Spat Conversion Reference Table",
    headers: ["Square Arcseconds (arcsec²)", "Spats (sp)", "Fraction of Sky", "Steradians (sr)"],
    rows: [
      { fromVal: "1 arcsec²", toVal: "0.00000000000187 sp", extra: "1.87 × 10⁻¹⁰%", extra2: "2.350 × 10⁻¹¹ sr" },
      { fromVal: "100 arcsec²", toVal: "0.00000000018704 sp", extra: "1.87 × 10⁻⁸%", extra2: "2.350 × 10⁻⁹ sr" },
      { fromVal: "1,000 arcsec²", toVal: "0.00000000187045 sp", extra: "1.87 × 10⁻⁷%", extra2: "2.350 × 10⁻⁸ sr" },
      { fromVal: "3,600 arcsec² (1 arcmin²)", toVal: "0.00000000673361 sp", extra: "6.73 × 10⁻⁷%", extra2: "8.462 × 10⁻⁸ sr" },
      { fromVal: "10,000 arcsec²", toVal: "0.00000001870446 sp", extra: "1.87 × 10⁻⁶%", extra2: "2.350 × 10⁻⁷ sr" },
      { fromVal: "100,000 arcsec²", toVal: "0.00000018704460 sp", extra: "0.0000187%", extra2: "2.350 × 10⁻⁶ sr" },
      { fromVal: "1,000,000 arcsec²", toVal: "0.00000187044600 sp", extra: "0.0001870%", extra2: "2.350 × 10⁻⁵ sr" },
      { fromVal: "12,960,000 arcsec² (1 deg²)", toVal: "0.00002424036000 sp", extra: "0.0024240%", extra2: "3.046 × 10⁻⁴ sr" },
      { fromVal: "100,000,000 arcsec²", toVal: "0.00018704460000 sp", extra: "0.0187045%", extra2: "2.350 × 10⁻³ sr" },
      { fromVal: "1,000,000,000 arcsec²", toVal: "0.00187044600000 sp", extra: "0.1870446%", extra2: "2.350 × 10⁻² sr" },
      { fromVal: "10,000,000,000 arcsec²", toVal: "0.01870446000000 sp", extra: "1.8704460%", extra2: "0.2350 sr" },
      { fromVal: "534,638,377,788 arcsec² (Full Sphere)", toVal: "1.00000000000000 sp", extra: "100.0000000%", extra2: "12.5664 sr (4π)" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Gravitational Wave Event Sky Localization",
        text: "Computing the fractional sky probability containment volume ($sp$) from gravitational wave detection error ellipses specified in thousands of square arcseconds."
      },
      {
        title: "Deep Field Galaxy Volume Extrapolation",
        text: "Extrapolating cosmological galaxy count densities from sub-arcsecond pencil beams to the entire observable universe."
      },
      {
        title: "Space Debris Conjunction Warning Tracking",
        text: "Translating optical tracking error corridors into spherical coverage percentages to optimize collision avoidance burns."
      },
      {
        title: "Exoplanet Direct Imaging Contrast Limits",
        text: "Sizing coronagraph dark hole speckle clearance zones relative to the host star's celestial coordinates."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting arcsec² to sp",
    items: [
      "Exponent handling in numerical software: Because $1\\text{ arcsec}^2 \\approx 1.87 \\times 10^{-12}\\text{ sp}$, using single-precision 32-bit floats can cause catastrophic underflow. Always use double-precision 64-bit IEEE floats.",
      "Confusing square arcseconds with square arcminutes: One square arcminute contains 3,600 square arcseconds; confusing the two leads to an error factor of 3,600.",
      "Assuming 1 spat = 1 steradian: 1 spat equals $4\\pi$ steradians (≈ 12.56637 sr). Forgetting the $4\\pi$ factor leaves the answer off by more than a factor of 12.",
      "Misinterpreting circular beam areas: A circle with diameter $D$ arcseconds has area $\\pi (D/2)^2$, not $D^2$."
    ]
  },
  faqs: [
    {
      question: "How many spats are in 1 square arcsecond?",
      answer: "There are approximately 1.870446 × 10⁻¹² spats in 1 square arcsecond (or exactly π / 1,679,616,000,000 sp)."
    },
    {
      question: "How many square arcseconds are in 1 spat?",
      answer: "One spat contains exactly 1,679,616,000,000 / π square arcseconds, which is approximately 534,638,377,787.5 square arcseconds."
    },
    {
      question: "What does 1 spat represent?",
      answer: "1 spat represents the complete solid angle of a closed sphere, equal to 4π steradians, approximately 41,252.96 square degrees, or 148,510,661 square arcminutes."
    },
    {
      question: "What is the formula to convert square arcseconds to spats?",
      answer: "The formula is: Solid Angle (sp) = Area (arcsec²) × (π / 1,679,616,000,000), which equals Area (arcsec²) ÷ 534,638,377,787.5."
    },
    {
      question: "What is 1,000,000 square arcseconds in spats?",
      answer: "1,000,000 square arcseconds equals approximately 1.8704 × 10⁻⁶ spats (about 0.000187% of the entire sky)."
    },
    {
      question: "How many square arcseconds are in 1 square degree?",
      answer: "One square degree contains exactly 12,960,000 square arcseconds ($3,600 \\times 3,600$)."
    },
    {
      question: "How do I convert spats back to square arcseconds?",
      answer: "Multiply the spat value by 1,679,616,000,000 / π (approximately 534,638,377,788)."
    },
    {
      question: "How many spats are in 1 square arcminute?",
      answer: "One square arcminute contains 3,600 square arcseconds, which equals approximately 6.733606 × 10⁻⁹ spats."
    },
    {
      question: "Why do astronomers calculate sky coverage in spats?",
      answer: "Spats normalize spherical solid angle directly to the unit interval [0, 1], representing the exact fraction of the total universe surveyed without carrying factors of 4π."
    },
    {
      question: "Is the spat part of the International System of Units (SI)?",
      answer: "No. The spat is a non-SI geometric unit of solid angle. The only coherent SI unit of solid angle is the steradian (sr)."
    }
  ],
  relatedList: [
    { label: "Spat to Square Arcsecond", from: "spat", to: "square-arcsec" },
    { label: "Square Arcsecond to Steradian", from: "square-arcsec", to: "steradian" },
    { label: "Square Arcsecond to Square Degree", from: "square-arcsec", to: "square-degree" },
    { label: "Square Arcsecond to Square Arcminute", from: "square-arcsec", to: "square-arcmin" },
    { label: "Square Arcminute to Spat", from: "square-arcmin", to: "spat" }
  ],
  references: [
    "BIPM: The International System of Units (SI) — Non-SI Units Accepted for Use.",
    "International Astronomical Union (IAU): Sky Survey Geometrical Conventions.",
    "Meeus, Jean: 'Astronomical Algorithms', Willmann-Bell, Inc."
  ]
};
