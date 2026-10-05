import { CustomArticleData } from "./types";

export const squareArcminuteToSquareDegreeArticle: CustomArticleData = {
  fromUnitId: "square-arcmin",
  toUnitId: "square-degree",
  seoTitle: "Square Arcminute to Square Degree Converter (arcmin² to deg²) | UnitsConvertors.com",
  metaDescription: "Convert square arcminutes to square degrees (arcmin² to deg²) instantly. Learn the exact 1 deg² = 3,600 arcmin² relationship, telescope FOV examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/solid-angle/square-arcmin-to-square-degree",
  h1: "Square Arcminute to Square Degree Converter",
  introduction: [
    "Converting square arcminutes (arcmin² or sq arcmin) to square degrees (deg² or sq deg) is an everyday calculation in observational astronomy, astrophotography, and telescope optical design. While instrument focal plane detectors, CCD sensors, and deep-sky astronomical catalogs measure small target boundaries in square arcminutes, wide-field sky surveys, constellation maps, and space telescope mission plans quantify sky coverage in square degrees.",
    "Because angular measure defines sixty arcminutes per degree ($1^\\circ = 60^\\prime$), a square degree encompasses exactly $60 \\times 60 = 3,600$ square arcminutes. Converting square arcminutes to square degrees therefore requires dividing by 3,600 (or multiplying by $1/3,600 \\approx 0.000277778$). Because both units derive from the same sexagesimal division of the circle, this conversion factor is mathematically exact with zero rounding error."
  ],
  quickAnswer: {
    text: "To convert square arcminutes (arcmin²) to square degrees (deg²), divide the square arcminute value by 3,600 (or multiply by 0.000277778). For example, 1,800 square arcminutes equals exactly 0.5 square degrees.",
    formulaDisplay: "Area (deg²) = Area (arcmin²) / 3,600 = Area (arcmin²) × (1 / 3,600)",
    subtext: "1 deg² = 3,600 arcmin² (exact) | 1 arcmin² = 1/3,600 deg² ≈ 0.000277778 deg²"
  },
  aboutSourceUnit: {
    title: "About the Square Arcminute (arcmin²)",
    text: "The square arcminute (symbol: arcmin² or sq arcmin) is an angular area unit equal to a square region measuring 1 arcminute by 1 arcminute (1/60 of a degree per side). It is the preferred unit in observational astronomy for quantifying galaxy angular sizes, telescope fields of view, and planetary disk areas."
  },
  aboutTargetUnit: {
    title: "About the Square Degree (deg²)",
    text: "The square degree (symbol: deg² or sq deg) is a non-SI unit of solid angle representing the area of a square measuring 1 degree on each side on the celestial sphere. One square degree equals $(\\pi / 180)^2 \\approx 0.000304617$ steradians. The entire celestial sphere encompasses approximately 41,252.96 square degrees."
  },
  relationship: "Both units are part of the standard astronomical sexagesimal angular system. One degree contains exactly 60 arcminutes. Squaring both sides gives $1\\text{ deg}^2 = (60\\text{ arcmin})^2 = 3,600\\text{ arcmin}^2$. Conversely, 1 square arcminute equals exactly $1/3,600$ of a square degree ($0.0002\\overline{77}\\text{ deg}^2$). This relationship is purely geometric and exact.",
  relationshipTitle: "Exact 3,600-to-1 Sexagesimal Geometric Scale",
  relationshipItems: [
    { label: "1 deg² in arcmin²", value: "3,600 arcmin² (exact: 60²)" },
    { label: "1 arcmin² in deg²", value: "1/3,600 deg² (≈ 0.0002778 deg²)" },
    { label: "Full Moon (≈720 arcmin²)", value: "≈ 0.20 deg²" },
    { label: "Full Sphere (≈41,253 deg²)", value: "≈ 148,510,661 arcmin²" }
  ],
  formula: {
    text: "To convert square arcminutes to square degrees, divide the arcmin² value by 3,600.",
    math: "\\text{Area (deg}^2\\text{)} = \\frac{\\text{Area (arcmin}^2\\text{)}}{3,600}",
    subtext: "Inverse formula: Area (arcmin²) = Area (deg²) × 3,600"
  },
  formulaTitle: "Square Arcminute to Square Degree Conversion Formula",
  practicalTip: {
    title: "Focal Plane Sensor Sizing Benchmark",
    text: "A typical full-frame astronomical camera attached to a 1,000 mm focal length telescope provides a field of view of roughly 2° × 1.33°, or approximately 2.67 square degrees. To express this in square arcminutes for deep-sky object cataloging, multiply by 3,600: $2.67 \\times 3,600 \\approx 9,600\\text{ arcmin}^2$."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Full Moon Apparent Angular Area",
        subtitle: "The apparent disk of the full Moon has an average angular area of roughly 720 square arcminutes. Convert this to square degrees.",
        steps: [
          "State starting area: 720 arcmin².",
          "Identify conversion formula: Area (deg²) = Area (arcmin²) ÷ 3,600.",
          "Perform calculation: 720 ÷ 3,600 = 0.20 deg².",
          "Conclude: The full Moon disk covers exactly 0.2 square degrees (one-fifth of a square degree)."
        ]
      },
      {
        title: "Example 2: Wide-Field Astrophotography Lens",
        subtitle: "A wide-field astrophotography imaging setup captures an area of 54,000 square arcminutes. Express this in square degrees.",
        steps: [
          "Identify area: 54,000 arcmin².",
          "Divide by 3,600: 54,000 ÷ 3,600.",
          "Compute result: exactly 15.0 deg².",
          "Final Result: The imaging frame covers 15.0 square degrees of sky."
        ]
      },
      {
        title: "Example 3: Andromeda Galaxy (M31) Visual Extent",
        subtitle: "The major visual halo of the Andromeda Galaxy extends over approximately 10,800 square arcminutes. Convert to square degrees.",
        steps: [
          "State area: 10,800 arcmin².",
          "Divide by 3,600: 10,800 ÷ 3,600.",
          "Calculate: exactly 3.0 deg².",
          "Result: The Andromeda Galaxy covers 3.0 square degrees on the celestial sphere."
        ]
      }
    ]
  },
  table: {
    title: "Square Arcminute to Square Degree Conversion Reference Table",
    headers: ["Square Arcminutes (arcmin²)", "Square Degrees (deg²)", "Fractional Degree", "Steradians (sr)"],
    rows: [
      { fromVal: "60 arcmin²", toVal: "0.0167 deg²", extra: "1/60 deg²", extra2: "5.077 × 10⁻⁶ sr" },
      { fromVal: "180 arcmin²", toVal: "0.0500 deg²", extra: "1/20 deg²", extra2: "1.523 × 10⁻⁵ sr" },
      { fromVal: "360 arcmin²", toVal: "0.1000 deg²", extra: "1/10 deg²", extra2: "3.046 × 10⁻⁵ sr" },
      { fromVal: "720 arcmin² (Moon)", toVal: "0.2000 deg²", extra: "1/5 deg²", extra2: "6.092 × 10⁻⁵ sr" },
      { fromVal: "900 arcmin²", toVal: "0.2500 deg²", extra: "1/4 deg²", extra2: "7.615 × 10⁻⁵ sr" },
      { fromVal: "1,800 arcmin²", toVal: "0.5000 deg²", extra: "1/2 deg²", extra2: "1.523 × 10⁻⁴ sr" },
      { fromVal: "2,700 arcmin²", toVal: "0.7500 deg²", extra: "3/4 deg²", extra2: "2.285 × 10⁻⁴ sr" },
      { fromVal: "3,600 arcmin²", toVal: "1.0000 deg²", extra: "1 deg²", extra2: "3.046 × 10⁻⁴ sr" },
      { fromVal: "7,200 arcmin²", toVal: "2.0000 deg²", extra: "2 deg²", extra2: "6.092 × 10⁻⁴ sr" },
      { fromVal: "10,800 arcmin² (M31)", toVal: "3.0000 deg²", extra: "3 deg²", extra2: "9.139 × 10⁻⁴ sr" },
      { fromVal: "18,000 arcmin²", toVal: "5.0000 deg²", extra: "5 deg²", extra2: "1.523 × 10⁻³ sr" },
      { fromVal: "36,000 arcmin²", toVal: "10.0000 deg²", extra: "10 deg²", extra2: "3.046 × 10⁻³ sr" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Telescope Sensor & Eyepiece Field of View Modeling",
        text: "Converting camera sensor dimensions from square arcminutes to square degrees to plan astrophotography framing and mosaic tile overlaps."
      },
      {
        title: "Deep-Sky Object Cataloging",
        text: "Comparing extended celestial object dimensions (such as emission nebulae, supernova remnants, and galaxy clusters) listed in arcmin² with constellation boundary charts published in deg²."
      },
      {
        title: "Observational Survey Planning",
        text: "Sizing survey footprint grids for spectroscopic instruments (e.g., DESI, SDSS) moving between coarse degree-scale sky fields and fine arcminute-scale focal plane fiber positioners."
      },
      {
        title: "Solar & Lunar Eclipse Path Geometry",
        text: "Calculating the projected apparent solid angle of the lunar shadow during solar eclipses across terrestrial viewing corridors."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting arcmin² to deg²",
    items: [
      "Dividing by 60 instead of 3,600: A very frequent error is dividing by the linear ratio (60) rather than the squared ratio ($60^2 = 3,600$). 3,600 square arcminutes equal 1 square degree, not 60.",
      "Multiplying instead of dividing: Converting from a smaller unit (square arcminute) to a larger unit (square degree) must decrease the numerical value.",
      "Confusing square arcminutes with square arcseconds: One square degree contains 12,960,000 square arcseconds ($3,600^2$), not 3,600.",
      "Confusing circular vs square angles: The area of a circular disk of diameter $d$ arcminutes is $\\pi (d/2)^2$ arcmin², not $d^2$. For a 30 arcmin Moon disk, area is $\\approx 706.86\\text{ arcmin}^2$, not 900 arcmin²."
    ]
  },
  faqs: [
    {
      question: "How many square arcminutes are in 1 square degree?",
      answer: "There are exactly 3,600 square arcminutes in 1 square degree. This is derived from squaring the 60 arcminutes in 1 degree ($60 \\times 60 = 3,600$)."
    },
    {
      question: "What is the formula to convert square arcminutes to square degrees?",
      answer: "The formula is: Area (deg²) = Area (arcmin²) ÷ 3,600. To reverse the calculation, multiply square degrees by 3,600."
    },
    {
      question: "How many square degrees is 3,600 square arcminutes?",
      answer: "3,600 square arcminutes equals exactly 1.0 square degree."
    },
    {
      question: "What is 1,800 square arcminutes in square degrees?",
      answer: "1,800 square arcminutes equals exactly 0.5 square degrees (half a square degree), calculated as 1,800 ÷ 3,600."
    },
    {
      question: "What is the solid angle of the full Moon in square degrees?",
      answer: "The disk of the full Moon subtends approximately 700 to 720 square arcminutes, which corresponds to roughly 0.20 square degrees (about one-fifth of a square degree)."
    },
    {
      question: "Is the conversion factor 3,600 exact?",
      answer: "Yes, exactly 3,600. Because degrees and arcminutes are defined by sexagesimal integer division ($1^\\circ = 60^\\prime$), the squared conversion factor $60^2 = 3,600$ contains no approximations."
    },
    {
      question: "How do I convert square degrees to square arcseconds?",
      answer: "Multiply square degrees by 12,960,000 ($3,600 \\times 3,600$). For example, 1 square degree equals 12,960,000 square arcseconds."
    },
    {
      question: "How many square degrees are in the entire sky?",
      answer: "The complete celestial sphere contains approximately 41,252.96 square degrees (exactly $4\\pi \\times (180/\\pi)^2 = 129,600/\\pi\\text{ deg}^2$)."
    },
    {
      question: "What is 100 square arcminutes in square degrees?",
      answer: "100 square arcminutes equals $100 \\div 3,600 \\approx 0.02778\\text{ square degrees}$ (or 1/36 of a square degree)."
    },
    {
      question: "Why do astronomers prefer square degrees for large survey maps?",
      answer: "Constellations, galaxy survey tiles, and major sky regions span tens to thousands of square degrees. Using square arcminutes for these regions would result in unwieldy numbers in the millions."
    }
  ],
  relatedList: [
    { label: "Square Degree to Square Arcminute", from: "square-degree", to: "square-arcmin" },
    { label: "Square Arcminute to Steradian", from: "square-arcmin", to: "steradian" },
    { label: "Square Arcminute to Square Arcsecond", from: "square-arcmin", to: "square-arcsec" },
    { label: "Square Arcminute to Spat", from: "square-arcmin", to: "spat" },
    { label: "Square Degree to Steradian", from: "square-degree", to: "steradian" }
  ],
  references: [
    "International Astronomical Union (IAU): Recommendations on Astronomical Units and Constants.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units.",
    "Smart, W. M.: 'Text-Book on Spherical Astronomy', Cambridge University Press."
  ]
};
