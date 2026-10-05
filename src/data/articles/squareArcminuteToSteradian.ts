import { CustomArticleData } from "./types";

export const squareArcminuteToSteradianArticle: CustomArticleData = {
  fromUnitId: "square-arcmin",
  toUnitId: "steradian",
  seoTitle: "Square Arcminute to Steradian Converter (arcmin² to sr) | UnitsConvertors.com",
  metaDescription: "Convert square arcminutes to steradians (arcmin² to sr) with high precision. Learn the exact geometric formula, telescope sensor examples, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/solid-angle/square-arcmin-to-steradian",
  h1: "Square Arcminute to Steradian Converter",
  introduction: [
    "Converting square arcminutes (arcmin² or sq arcmin) to steradians (sr) translates localized astronomical sky coverage into the fundamental SI unit of solid angle. While observational astronomers and astrophotographers routinely specify telescope instrument fields of view (FOV), planetary nebulae boundaries, and galaxy cluster angular dimensions in square arcminutes, radiometric and optical physics equations require solid angles expressed in steradians.",
    "Because one degree equals 60 arcminutes and one radian contains 10,800/π arcminutes, one steradian (which equals one square radian) encompasses (10,800/π)² or 116,640,000/π² square arcminutes (approximately 1.18181 × 10⁷ arcmin²). Converting square arcminutes to steradians therefore requires multiplying by π²/116,640,000 (approximately 8.461595 × 10⁻⁸ sr). Understanding this conversion allows researchers to seamlessly calculate spectral radiance, surface brightness, and photon flux density across celestial targets."
  ],
  quickAnswer: {
    text: "To convert square arcminutes (arcmin²) to steradians (sr), multiply the square arcminute value by π² / 116,640,000 (approximately 8.461595 × 10⁻⁸, or divide by 11,818,102.86). For example, 100 square arcminutes equals approximately 8.4616 × 10⁻⁶ steradians.",
    formulaDisplay: "Solid Angle (sr) = Area (arcmin²) × (π / 10,800)² ≈ Area (arcmin²) × 8.461595 × 10⁻⁸",
    subtext: "1 arcmin² ≈ 8.461595 × 10⁻⁸ sr | 1 sr ≈ 11,818,102.86 arcmin² ≈ 3,282.806 deg²"
  },
  aboutSourceUnit: {
    title: "About the Square Arcminute (arcmin²)",
    text: "The square arcminute (symbol: arcmin² or sq arcmin) is an angular area unit equal to a square measuring 1 arcminute by 1 arcminute (1/60 of a degree per side, or 1/3,600 of a square degree). It is the standard reference scale in optical astronomy for intermediate celestial structures such as planetary nebulae, open star clusters, and space telescope camera detector footprints."
  },
  aboutTargetUnit: {
    title: "About the Steradian (sr)",
    text: "The steradian (symbol: sr) is the coherent SI derived unit of solid angle. It is defined as the solid angle subtended at the center of a unit sphere by a surface patch equal in area to the square of the sphere's radius ($A = r^2$). A complete spherical shell encompasses exactly $4\\pi$ steradians (approximately 12.56637 sr)."
  },
  relationship: "Under spherical geometry, one radian contains exactly 180 × 60 / π = 10,800 / π arcminutes (approximately 3,437.7468 arcmin). Squaring this conversion ratio establishes that 1 steradian (1 rad²) equals exactly 116,640,000 / π² square arcminutes (≈ 11,818,102.86 arcmin²). Inverting this ratio yields the exact factor for converting square arcminutes into steradians: π² / 116,640,000 ≈ 8.461595 × 10⁻⁸ sr per square arcminute.",
  relationshipTitle: "Geometric Derivation & Scaling Ratios",
  relationshipItems: [
    { label: "1 arcmin² in sr", value: "≈ 8.461595 × 10⁻⁸ sr" },
    { label: "1 sr in arcmin²", value: "≈ 11,818,103 arcmin²" },
    { label: "Full Sphere (4π sr)", value: "≈ 148,510,661 arcmin²" },
    { label: "Full Moon Disk (≈700 arcmin²)", value: "≈ 5.923 × 10⁻⁵ sr" }
  ],
  formula: {
    text: "Multiply the area in square arcminutes by π² / 116,640,000 (or divide by 11,818,102.86) to determine the equivalent solid angle in steradians.",
    math: "\\Omega\\text{ (sr)} = \\text{Area (arcmin}^2\\text{)} \\times \\left(\\frac{\\pi}{10,800}\\right)^2 = \\text{Area (arcmin}^2\\text{)} \\times \\frac{\\pi^2}{116,640,000}",
    subtext: "Inverse formula: Area (arcmin²) = Ω (sr) × (116,640,000 / π²)"
  },
  formulaTitle: "Square Arcminute to Steradian Conversion Formula",
  practicalTip: {
    title: "Observational Astronomy Benchmark",
    text: "The apparent disk of the Moon and Sun as viewed from Earth spans roughly 31 to 32 arcminutes in diameter, corresponding to a projected solid angle of approximately 700 to 750 square arcminutes. In radiometric terms, this equals roughly 6.0 × 10⁻⁵ to 6.3 × 10⁻⁵ steradians."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Space Telescope Wide Field Detector",
        subtitle: "A wide-field survey camera covers an instantaneous field of view of 45 square arcminutes. Calculate its solid angle in steradians.",
        steps: [
          "State starting solid angle: 45 arcmin².",
          "Identify conversion factor: 1 arcmin² = π² / 116,640,000 ≈ 8.461595 × 10⁻⁸ sr.",
          "Multiply: 45 × 8.461595 × 10⁻⁸ sr.",
          "Calculate product: 3.8077 × 10⁻⁶ sr.",
          "Conclude: The camera detector covers 3.8077 × 10⁻⁶ steradians of sky."
        ]
      },
      {
        title: "Example 2: Messier Deep-Sky Nebula Angular Size",
        subtitle: "The Orion Nebula (M42) has an apparent visual boundary of roughly 4,200 square arcminutes. Convert this area into steradians.",
        steps: [
          "Identify angular area: 4,200 arcmin².",
          "Apply formula: 4,200 ÷ 11,818,102.86.",
          "Compute result: 0.00035539 sr (or 3.5539 × 10⁻⁴ sr).",
          "Final Result: The visual boundary subtends 3.5539 × 10⁻⁴ steradians."
        ]
      },
      {
        title: "Example 3: One Square Degree Patch",
        subtitle: "A galaxy survey tile spans 1 square degree, which equals 3,600 square arcminutes. Convert to steradians.",
        steps: [
          "Identify arcminute value: 3,600 arcmin².",
          "Multiply: 3,600 × 8.461595 × 10⁻⁸ sr.",
          "Calculate: 0.00030462 sr (or 3.0462 × 10⁻⁴ sr).",
          "Result: 3,600 square arcminutes equals exactly 1 square degree, or 3.0462 × 10⁻⁴ steradians."
        ]
      }
    ]
  },
  table: {
    title: "Square Arcminute to Steradian Conversion Reference Table",
    headers: ["Square Arcminutes (arcmin²)", "Steradians (sr)", "Square Degrees (deg²)", "Scientific Notation"],
    rows: [
      { fromVal: "1 arcmin²", toVal: "0.0000000846 sr", extra: "0.000278 deg²", extra2: "8.4616 × 10⁻⁸ sr" },
      { fromVal: "5 arcmin²", toVal: "0.0000004231 sr", extra: "0.001389 deg²", extra2: "4.2308 × 10⁻⁷ sr" },
      { fromVal: "10 arcmin²", toVal: "0.0000008462 sr", extra: "0.002778 deg²", extra2: "8.4616 × 10⁻⁷ sr" },
      { fromVal: "25 arcmin²", toVal: "0.0000021154 sr", extra: "0.006944 deg²", extra2: "2.1154 × 10⁻⁶ sr" },
      { fromVal: "50 arcmin²", toVal: "0.0000042308 sr", extra: "0.013889 deg²", extra2: "4.2308 × 10⁻⁶ sr" },
      { fromVal: "100 arcmin²", toVal: "0.0000084616 sr", extra: "0.027778 deg²", extra2: "8.4616 × 10⁻⁶ sr" },
      { fromVal: "250 arcmin²", toVal: "0.0000211540 sr", extra: "0.069444 deg²", extra2: "2.1154 × 10⁻⁵ sr" },
      { fromVal: "500 arcmin²", toVal: "0.0000423080 sr", extra: "0.138889 deg²", extra2: "4.2308 × 10⁻⁵ sr" },
      { fromVal: "700 arcmin² (Moon)", toVal: "0.0000592312 sr", extra: "0.194444 deg²", extra2: "5.9231 × 10⁻⁵ sr" },
      { fromVal: "1,000 arcmin²", toVal: "0.0000846159 sr", extra: "0.277778 deg²", extra2: "8.4616 × 10⁻⁵ sr" },
      { fromVal: "3,600 arcmin² (1 deg²)", toVal: "0.0003046174 sr", extra: "1.000000 deg²", extra2: "3.0462 × 10⁻⁴ sr" },
      { fromVal: "10,000 arcmin²", toVal: "0.0008461595 sr", extra: "2.777778 deg²", extra2: "8.4616 × 10⁻⁴ sr" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Telescope Sensor Radiometric Calibration",
        text: "Converting charge-coupled device (CCD) and complementary metal-oxide-semiconductor (CMOS) pixel array fields of view from arcmin² into steradians to calibrate photon flux per unit solid angle."
      },
      {
        title: "Cosmological Deep Field Surface Brightness",
        text: "Evaluating astronomical surface brightness (mag/arcsec² or nJy/arcmin²) into absolute physical surface brightness (W·m⁻²·sr⁻¹) required by astrophysical radiative transfer models."
      },
      {
        title: "Planetary & Solar Atmospheric Emission Modeling",
        text: "Calculating solar flare and coronal mass ejection geometric footprints on the solar disk to quantify total radiant emission."
      },
      {
        title: "Satellite Earth Remote Sensing & Ground Swaths",
        text: "Translating optical payload instantaneous fields of view into solid angle cones for terrestrial atmospheric backscatter monitoring."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting arcmin² to sr",
    items: [
      "Linear vs squared conversion error: Forgetting to square the linear arcminute-to-radian ratio ($3,437.75^2 = 11,818,103$). Multiplying by the linear ratio instead of the squared ratio produces an error of over three orders of magnitude.",
      "Confusing square arcminutes with square arcseconds: One square arcminute contains 3,600 square arcseconds ($60^2$). Ensure input values are not mistaken for arcsec².",
      "Premature rounding of conversion factors: Using 8.5 × 10⁻⁸ instead of 8.461595 × 10⁻⁸ introduces a ~0.45% systematic error across large astronomical survey datasets.",
      "Small angle planar approximation limits: Treating wide celestial angles as flat Euclidean rectangles. While valid for patches under a few square degrees, large sky surveys require true spherical integral calculations."
    ]
  },
  faqs: [
    {
      question: "How many steradians are in 1 square arcminute?",
      answer: "One square arcminute contains approximately 8.461595 × 10⁻⁸ steradians (or exactly π² / 116,640,000 sr)."
    },
    {
      question: "What is the formula to convert square arcminutes to steradians?",
      answer: "The formula is: Solid Angle (sr) = Area (arcmin²) × (π / 10,800)², which simplifies to Area (arcmin²) × (π² / 116,640,000) or Area (arcmin²) ÷ 11,818,102.86."
    },
    {
      question: "How many square arcminutes are in 1 steradian?",
      answer: "There are approximately 11,818,102.86 square arcminutes in 1 steradian (exactly 116,640,000 / π² arcmin²)."
    },
    {
      question: "What is the solid angle of 100 square arcminutes in steradians?",
      answer: "100 square arcminutes equals approximately 8.4616 × 10⁻⁶ steradians ($100 \\times 8.461595 \\times 10^{-8}\\text{ sr}$)."
    },
    {
      question: "How does a square arcminute relate to a square degree?",
      answer: "Because 1 degree equals 60 arcminutes, 1 square degree contains exactly $60 \\times 60 = 3,600$ square arcminutes. Therefore, 1 square arcminute equals 1/3,600 of a square degree."
    },
    {
      question: "What is the angular size of the Moon in steradians?",
      answer: "The angular disk of the full Moon covers roughly 700 to 750 square arcminutes, which corresponds to approximately 5.92 × 10⁻⁵ to 6.35 × 10⁻⁵ steradians."
    },
    {
      question: "Why do astronomers use square arcminutes instead of steradians?",
      answer: "Steradians are extremely large compared to practical telescopic fields of view. A typical telescope detector views an area spanning a fraction of a degree, making square arcminutes and square arcseconds far more intuitive everyday units."
    },
    {
      question: "How many square arcminutes cover the entire sky?",
      answer: "The complete celestial sphere encompasses 4π steradians, which equals exactly 466,560,000 / π square arcminutes, or approximately 148,510,660.5 square arcminutes."
    },
    {
      question: "How do I convert square arcminutes to square arcseconds?",
      answer: "Multiply the square arcminute value by 3,600 ($60^2$). For example, 2 square arcminutes equals 7,200 square arcseconds."
    },
    {
      question: "Is a steradian an SI base unit or a derived unit?",
      answer: "The steradian is an SI derived unit of solid angle ($m^2 / m^2$, dimensionless). It was previously classified as an SI supplementary unit until 1995."
    }
  ],
  relatedList: [
    { label: "Steradian to Square Arcminute", from: "steradian", to: "square-arcmin" },
    { label: "Square Arcminute to Square Degree", from: "square-arcmin", to: "square-degree" },
    { label: "Square Arcminute to Square Arcsecond", from: "square-arcmin", to: "square-arcsec" },
    { label: "Square Arcminute to Spat", from: "square-arcmin", to: "spat" },
    { label: "Square Arcminute to Square Radian", from: "square-arcmin", to: "square-radian" }
  ],
  references: [
    "BIPM: The International System of Units (SI), 9th Edition — Solid Angle & Steradian Definition.",
    "International Astronomical Union (IAU): Recommendations on Angular Measures and Astronomical Constants.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units."
  ]
};
