import { CustomArticleData } from "./types";

export const squareArcminuteToSquareArcsecondArticle: CustomArticleData = {
  fromUnitId: "square-arcmin",
  toUnitId: "square-arcsec",
  seoTitle: "Square Arcminute to Square Arcsecond Converter (arcmin² to arcsec²) | UnitsConvertors.com",
  metaDescription: "Convert square arcminutes to square arcseconds (arcmin² to arcsec²) instantly. Learn the exact 1 arcmin² = 3,600 arcsec² formula, pixel scale examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/solid-angle/square-arcmin-to-square-arcsec",
  h1: "Square Arcminute to Square Arcsecond Converter",
  introduction: [
    "Converting square arcminutes (arcmin² or sq arcmin) to square arcseconds (arcsec² or sq arcsec) is a fundamental calculation in optical astronomy, astrophotography, and astronomical instrumentation design. While telescope sensor fields of view, diffuse nebulae dimensions, and planetary surfaces are frequently documented in square arcminutes, high-resolution telescope pixel scales, atmospheric seeing discs, and double-star separations are quantified in square arcseconds.",
    "Because angular sexagesimal measurement defines sixty arcseconds per arcminute ($1^\\prime = 60^{\\prime\\prime}$), squaring this linear relationship yields exactly $60 \\times 60 = 3,600$ square arcseconds in one square arcminute. Converting square arcminutes to square arcseconds requires multiplying the arcmin² value by 3,600. Because both units belong to the exact same sexagesimal division of the degree, the conversion is completely exact and free of rounding errors."
  ],
  quickAnswer: {
    text: "To convert square arcminutes (arcmin²) to square arcseconds (arcsec²), multiply the square arcminute value by 3,600. For example, 2.5 square arcminutes equals exactly 9,000 square arcseconds.",
    formulaDisplay: "Area (arcsec²) = Area (arcmin²) × 3,600",
    subtext: "1 arcmin² = 3,600 arcsec² (exact) | 1 arcsec² = 1/3,600 arcmin² ≈ 0.000277778 arcmin²"
  },
  aboutSourceUnit: {
    title: "About the Square Arcminute (arcmin²)",
    text: "The square arcminute (symbol: arcmin² or sq arcmin) is an angular area unit defined as a square measuring 1 arcminute by 1 arcminute (1/60 of a degree per side, or 1/3,600 of a square degree). It is commonly utilized in astronomy to quantify extended deep-sky objects and telescope detector footprints."
  },
  aboutTargetUnit: {
    title: "About the Square Arcsecond (arcsec²)",
    text: "The square arcsecond (symbol: arcsec² or sq arcsec) is a fine unit of angular area corresponding to a square patch of sky measuring 1 arcsecond by 1 arcsecond (1/3,600 of a degree per side, or 1/12,960,000 of a square degree). It is the premier standard for telescope pixel pitch scales, surface brightness ratings (magnitudes per square arcsecond), and adaptive optics resolution limits."
  },
  relationship: "One arcminute contains exactly 60 arcseconds. Squaring both sides yields $1\\text{ arcmin}^2 = (60\\text{ arcsec})^2 = 3,600\\text{ arcsec}^2$. Conversely, 1 square arcsecond represents exactly $1/3,600$ of a square arcminute ($0.0002\\overline{77}\\text{ arcmin}^2$). Because both units share the same integer sexagesimal baseline, the conversion factor is an exact integer.",
  relationshipTitle: "Exact 3,600-to-1 Integer Sexagesimal Scaling",
  relationshipItems: [
    { label: "1 arcmin² in arcsec²", value: "3,600 arcsec² (exact: 60²)" },
    { label: "1 arcsec² in arcmin²", value: "1/3,600 arcmin² (≈ 0.0002778 arcmin²)" },
    { label: "10 arcmin² in arcsec²", value: "36,000 arcsec²" },
    { label: "1 deg² in arcsec²", value: "12,960,000 arcsec² (3,600²)" }
  ],
  formula: {
    text: "Multiply the area in square arcminutes by 3,600 to obtain the equivalent area in square arcseconds.",
    math: "\\text{Area (arcsec}^2\\text{)} = \\text{Area (arcmin}^2\\text{)} \\times 3,600",
    subtext: "Inverse formula: Area (arcmin²) = Area (arcsec²) ÷ 3,600"
  },
  formulaTitle: "Square Arcminute to Square Arcsecond Conversion Formula",
  practicalTip: {
    title: "CCD Sensor Pixel Count Calculation",
    text: "If an astronomical camera has a pixel scale of 0.75 arcseconds per pixel, each pixel covers $0.75 \\times 0.75 = 0.5625\\text{ arcsec}^2$. For a target covering 2 square arcminutes ($2 \\times 3,600 = 7,200\\text{ arcsec}^2$), the target will span approximately $7,200 \\div 0.5625 = 12,800$ pixels on your detector."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Planetary Nebula Angular Area",
        subtitle: "The Ring Nebula (M57) covers an apparent area of approximately 1.8 square arcminutes. Convert this area to square arcseconds.",
        steps: [
          "State starting area: 1.8 arcmin².",
          "Identify conversion factor: 1 arcmin² = 3,600 arcsec².",
          "Multiply: 1.8 × 3,600.",
          "Calculate product: exactly 6,480 arcsec².",
          "Conclude: The Ring Nebula covers 6,480 square arcseconds."
        ]
      },
      {
        title: "Example 2: Telescope Guide Camera Field of View",
        subtitle: "An autoguider sensor has a field of view of 15 square arcminutes. Express this area in square arcseconds.",
        steps: [
          "Identify area: 15 arcmin².",
          "Multiply by 3,600: 15 × 3,600.",
          "Compute result: 54,000 arcsec².",
          "Final Result: The guide camera covers 54,000 square arcseconds of sky."
        ]
      },
      {
        title: "Example 3: Fractional Arcminute Target",
        subtitle: "A small planetary disk spans 0.25 square arcminutes. Convert to square arcseconds.",
        steps: [
          "State area: 0.25 arcmin².",
          "Multiply: 0.25 × 3,600 = 900 arcsec².",
          "Result: 0.25 square arcminutes equals exactly 900 square arcseconds."
        ]
      }
    ]
  },
  table: {
    title: "Square Arcminute to Square Arcsecond Conversion Reference Table",
    headers: ["Square Arcminutes (arcmin²)", "Square Arcseconds (arcsec²)", "Square Degrees (deg²)", "Steradians (sr)"],
    rows: [
      { fromVal: "0.1 arcmin²", toVal: "360 arcsec²", extra: "0.000028 deg²", extra2: "8.462 × 10⁻⁹ sr" },
      { fromVal: "0.25 arcmin²", toVal: "900 arcsec²", extra: "0.000069 deg²", extra2: "2.115 × 10⁻⁸ sr" },
      { fromVal: "0.5 arcmin²", toVal: "1,800 arcsec²", extra: "0.000139 deg²", extra2: "4.231 × 10⁻⁸ sr" },
      { fromVal: "1.0 arcmin²", toVal: "3,600 arcsec²", extra: "0.000278 deg²", extra2: "8.462 × 10⁻⁸ sr" },
      { fromVal: "2.0 arcmin²", toVal: "7,200 arcsec²", extra: "0.000556 deg²", extra2: "1.692 × 10⁻⁷ sr" },
      { fromVal: "5.0 arcmin²", toVal: "18,000 arcsec²", extra: "0.001389 deg²", extra2: "4.231 × 10⁻⁷ sr" },
      { fromVal: "10.0 arcmin²", toVal: "36,000 arcsec²", extra: "0.002778 deg²", extra2: "8.462 × 10⁻⁷ sr" },
      { fromVal: "25.0 arcmin²", toVal: "90,000 arcsec²", extra: "0.006944 deg²", extra2: "2.115 × 10⁻⁶ sr" },
      { fromVal: "50.0 arcmin²", toVal: "180,000 arcsec²", extra: "0.013889 deg²", extra2: "4.231 × 10⁻⁶ sr" },
      { fromVal: "100.0 arcmin²", toVal: "360,000 arcsec²", extra: "0.027778 deg²", extra2: "8.462 × 10⁻⁶ sr" },
      { fromVal: "500.0 arcmin²", toVal: "1,800,000 arcsec²", extra: "0.138889 deg²", extra2: "4.231 × 10⁻⁵ sr" },
      { fromVal: "3,600.0 arcmin² (1 deg²)", toVal: "12,960,000 arcsec²", extra: "1.000000 deg²", extra2: "3.046 × 10⁻⁴ sr" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Telescope Sensor Pixel Scale Mapping",
        text: "Translating camera sensor field of view from arcmin² down to arcsec² to compute pixel sampling densities and spatial resolution."
      },
      {
        title: "Astronomical Surface Brightness Photometry",
        text: "Converting surface photometry integrated fluxes from magnitudes per square arcminute into standard magnitudes per square arcsecond ($mag/arcsec^2$)."
      },
      {
        title: "Adaptive Optics Seeing Disk Characterization",
        text: "Relating point-spread function (PSF) core sizes and atmospheric speckle patterns in square arcseconds to the broader science field of view in square arcminutes."
      },
      {
        title: "Planetary Disk Measurement",
        text: "Measuring disk surface areas of Venus, Mars, and Jupiter during planetary oppositions."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting arcmin² to arcsec²",
    items: [
      "Multiplying by 60 instead of 3,600: Forgetting that area scaling requires squaring the linear conversion ratio ($60^2 = 3,600$). Multiplying by 60 leaves the value 60 times too small.",
      "Dividing instead of multiplying: Because an arcsecond is smaller than an arcminute, converting from arcmin² to arcsec² must yield a larger number.",
      "Confusing square arcseconds with square degrees: One square degree contains 12,960,000 square arcseconds ($3,600 \\times 3,600$), whereas 1 square arcminute contains 3,600.",
      "Confusing circular area with square area: A circular beam of diameter $D$ arcminutes spans $\\pi (D/2)^2 \\times 3,600$ square arcseconds, not $D^2 \\times 3,600$."
    ]
  },
  faqs: [
    {
      question: "How many square arcseconds are in 1 square arcminute?",
      answer: "There are exactly 3,600 square arcseconds in 1 square arcminute ($60 \\times 60 = 3,600$)."
    },
    {
      question: "What is the formula to convert square arcminutes to square arcseconds?",
      answer: "The formula is: Area (arcsec²) = Area (arcmin²) × 3,600. To reverse the conversion, divide square arcseconds by 3,600."
    },
    {
      question: "How many square arcseconds is 0.5 square arcminutes?",
      answer: "0.5 square arcminutes equals exactly 1,800 square arcseconds ($0.5 \\times 3,600 = 1,800$)."
    },
    {
      question: "What is 10 square arcminutes in square arcseconds?",
      answer: "10 square arcminutes equals exactly 36,000 square arcseconds ($10 \\times 3,600 = 36,000$)."
    },
    {
      question: "Is the conversion factor 3,600 exact?",
      answer: "Yes, exactly 3,600. Because 1 arcminute is defined as precisely 60 arcseconds in the sexagesimal system, the squared ratio $60^2 = 3,600$ contains no approximations."
    },
    {
      question: "How many square arcseconds are in 1 square degree?",
      answer: "There are exactly 12,960,000 square arcseconds in 1 square degree ($3,600 \\times 3,600$)."
    },
    {
      question: "How do I convert square arcseconds back to square arcminutes?",
      answer: "Divide the square arcsecond value by 3,600. For example, 7,200 arcsec² divided by 3,600 equals 2 arcmin²."
    },
    {
      question: "Why do astronomers use square arcseconds for surface brightness?",
      answer: "Square arcseconds match the angular resolution of ground-based optical telescopes operating under atmospheric turbulence (typically 0.5 to 2.0 arcseconds), making magnitudes per square arcsecond the natural unit for night sky background and galaxy surface brightness."
    },
    {
      question: "What is 1 arcmin² in steradians?",
      answer: "1 square arcminute equals approximately 8.461595 × 10⁻⁸ steradians, or 3,600 square arcseconds."
    },
    {
      question: "How many square arcseconds is the disk of the Moon?",
      answer: "With an area of roughly 720 square arcminutes, the full Moon covers approximately 2,592,000 square arcseconds ($720 \\times 3,600$)."
    }
  ],
  relatedList: [
    { label: "Square Arcsecond to Square Arcminute", from: "square-arcsec", to: "square-arcmin" },
    { label: "Square Arcminute to Square Degree", from: "square-arcmin", to: "square-degree" },
    { label: "Square Arcminute to Steradian", from: "square-arcmin", to: "steradian" },
    { label: "Square Arcsecond to Square Degree", from: "square-arcsec", to: "square-degree" },
    { label: "Square Arcsecond to Steradian", from: "square-arcsec", to: "steradian" }
  ],
  references: [
    "International Astronomical Union (IAU): Recommendations on Angular Measures and Astronomical Constants.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units.",
    "Birney, D. S., et al.: 'Observational Astronomy', Cambridge University Press."
  ]
};
