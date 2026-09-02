import { CustomArticleData } from "./types";

export const squareDegreeToSpatArticle: CustomArticleData = {
  fromUnitId: "square-degree",
  toUnitId: "spat",
  seoTitle: "Square Degree to Spat Converter (deg² to sp) - UnitsConvertors",
  metaDescription: "Convert square degrees to spats (deg² to sp) accurately. Discover the full-sphere solid angle formula (sp = deg² × π / 129,600), calculations, tables, and astrophysics FAQs.",
  h1: "Square Degree to Spat Converter",
  introduction: [
    "Converting square degrees (deg² or sq deg) to spats (sp) expresses an angular celestial area as a fraction of the complete 4π spherical solid angle.",
    "A spat is defined as the total solid angle of a complete sphere, equal to 4π steradians (approximately 12.56637 sr). Because a complete sphere also contains exactly 129,600 / π square degrees (approximately 41,252.96125 deg²), one square degree corresponds to π / 129,600 spats (approximately 2.424068 × 10⁻⁵ sp).",
    "This reference explains the mathematical connection between square degrees and spats, details the exact sphere-fraction formulas, works through practical astronomy calculations, and provides a comprehensive conversion table with expert notes."
  ],
  quickAnswer: {
    text: "To convert square degrees (deg²) to spats (sp), multiply the square degree value by π / 129,600, which is approximately 0.0000242407 (or divide by 41,252.96125). For example, 1,000 square degrees equals approximately 0.02424 spats (2.424% of the complete sphere).",
    formulaDisplay: "Spats (sp) = Square Degrees (deg²) × (π ÷ 129,600)",
    subtext: "1 deg² ≈ 0.0000242407 sp (1 sp = 1 full sphere = 41,252.96125 deg²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Degree (deg²)",
    text: "The square degree (deg² or sq deg) is a non-SI unit of solid angle widely used across observational astronomy and satellite imaging. It corresponds to an angular square area measuring 1° by 1° on a spherical projection, commonly used to quantify constellation boundaries and telescope survey fields."
  },
  aboutTargetUnit: {
    title: "Understanding the Spat (sp)",
    text: "The spat (symbol: sp) is a non-SI unit of solid angle representing the entirety of a closed spherical shell. One spat equals exactly 4π steradians (approximately 12.56637 sr) or 1 complete sphere. It provides an intuitive unit for expressing isotropic radiant emission and omnidirectional antenna radiation patterns."
  },
  relationship: "One spat corresponds to the entire spherical surface (4π sr), which equals exactly 129,600 / π square degrees (≈ 41,252.96125 deg²). Conversely, 1 square degree equals π / 129,600 spats (≈ 0.0000242407 sp or 0.002424% of the total sky).",
  relationshipTitle: "Square Degree to Spat Fractional Sky Metrics",
  relationshipItems: [
    { label: "1 deg²", value: "≈ 2.42407 × 10⁻⁵ sp (0.002424% sphere)" },
    { label: "100 deg²", value: "≈ 0.0024241 sp (0.2424% sphere)" },
    { label: "1,000 deg²", value: "≈ 0.0242407 sp (2.4241% sphere)" },
    { label: "10,313.24 deg²", value: "= 0.25 sp (1/4 sphere, π sr)" },
    { label: "20,626.48 deg²", value: "= 0.50 sp (Hemisphere, 2π sr)" },
    { label: "41,252.96 deg²", value: "= 1.00 sp (Full Sphere, 4π sr)" }
  ],
  formula: {
    text: "Multiply the solid angle in square degrees by π / 129,600 (approximately 0.000024240684), or divide by 129,600 / π (41,252.96125), to calculate spats.",
    math: "\\text{sp} = \\text{deg}^2 \\times \\frac{\\pi}{129,600} = \\frac{\\text{deg}^2}{41,252.96125}",
    subtext: "Where π / 129,600 ≈ 2.42406840554768 × 10⁻⁵."
  },
  practicalTip: {
    title: "Percentage of the Sky Rule",
    text: "Because 1 spat equals 100% of the celestial sphere, multiplying a spat value by 100 immediately gives the exact percentage of the entire sky covered by that object or survey."
  },
  expertNote: {
    title: "Exact Fraction",
    text: "The exact relationship between square degrees and spats derives from (180/π)² × 4π = 129,600 / π. Using this exact fractional coefficient eliminates rounding discrepancies in cosmological sky-fraction accounting."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 500 Square Degrees to Spats",
        subtitle: "Convert a medium constellation angular area into full-sphere fractions.",
        steps: [
          "Identify solid angle in square degrees: 500 deg².",
          "Apply the conversion formula: sp = 500 × (π / 129,600).",
          "Compute 500 × 2.4240684 × 10⁻⁵ = 0.0121203 sp.",
          "Express as a percentage: 0.0121203 × 100 ≈ 1.212% of the full sphere.",
          "Result: 500 square degrees equals approximately 0.01212 spats."
        ]
      },
      {
        title: "Example 2: Visible Sky Hemisphere (20,626.48 deg²)",
        subtitle: "Convert half the celestial sphere into spats.",
        steps: [
          "Identify the hemispherical area: 20,626.48 deg².",
          "Apply formula: sp = 20,626.48 ÷ 41,252.96125.",
          "Calculate: 20,626.48 / 41,252.96125 = 0.5000 sp.",
          "Result: 20,626.48 square degrees equals exactly 0.5 spats (one hemisphere)."
        ]
      },
      {
        title: "Example 3: Sloan Digital Sky Survey Footprint (14,555 deg²)",
        subtitle: "Convert a major cosmological survey area into spats.",
        steps: [
          "Identify SDSS survey area: 14,555 deg².",
          "Apply formula: sp = 14,555 × (π / 129,600).",
          "Calculate: 14,555 × 2.4240684 × 10⁻⁵ ≈ 0.352823 sp.",
          "Result: 14,555 square degrees equals approximately 0.3528 spats (about 35.28% of the entire universe sky)."
        ]
      }
    ]
  },
  table: {
    title: "Square Degree to Spat Conversion Table",
    headers: ["Square Degrees (deg²)", "Spats (sp)", "Exact Expression (sp)", "Sky Percentage"],
    rows: [
      { fromVal: "1 deg²", toVal: "0.00002424 sp", extra: "π / 129,600 sp", extra2: "0.00242% of sky" },
      { fromVal: "10 deg²", toVal: "0.00024241 sp", extra: "π / 12,960 sp", extra2: "0.02424% of sky" },
      { fromVal: "100 deg²", toVal: "0.00242407 sp", extra: "π / 1,296 sp", extra2: "0.24241% of sky" },
      { fromVal: "594 deg² (Orion)", toVal: "0.01439897 sp", extra: "594π / 129,600 sp", extra2: "1.43990% of sky" },
      { fromVal: "1,000 deg²", toVal: "0.02424068 sp", extra: "π / 129.6 sp", extra2: "2.42407% of sky" },
      { fromVal: "1,303 deg² (Hydra)", toVal: "0.03158561 sp", extra: "1303π / 129,600 sp", extra2: "3.15856% of sky" },
      { fromVal: "5,000 deg²", toVal: "0.12120342 sp", extra: "25π / 648 sp", extra2: "12.12034% of sky" },
      { fromVal: "10,313.24 deg²", toVal: "0.25000000 sp", extra: "1/4 sp", extra2: "25.00000% (Quarter sphere)" },
      { fromVal: "20,626.48 deg²", toVal: "0.50000000 sp", extra: "1/2 sp", extra2: "50.00000% (Hemisphere)" },
      { fromVal: "41,252.96 deg²", toVal: "1.00000000 sp", extra: "1 sp", extra2: "100.00000% (Full sphere)" }
    ]
  },
  applications: {
    title: "Applications of Square Degree to Spat Conversion",
    items: [
      {
        title: "Astrophysics and Cosmological Sky Coverage",
        text: "Cosmologists express multi-year sky survey allocations (e.g., Euclid, Vera Rubin Observatory) in spats to indicate what fraction of the full $4\\pi$ sphere has been mapped."
      },
      {
        title: "Omnidirectional Radiation & Antenna Modeling",
        text: "RF and radar engineers normalize directional beam patterns quoted in square degrees against 1 spat to evaluate directivity and total radiated power efficiency."
      },
      {
        title: "Planetary Science & Sphere Fraction Analysis",
        text: "Geophysicists convert regional crater field and terrain mapping areas into spats to compare regional coverage against planetary surface totals."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Converting deg² to sp",
    items: [
      "Confusing spat with steradian: 1 spat equals 4π (≈ 12.56637) steradians, representing an entire sphere, whereas 1 steradian is only 1/(4π) ≈ 0.07958 of a spat.",
      "Dividing by 360 instead of the solid angle constant: Solid angle requires spherical geometry where the full sphere is 41,252.96 deg², not 360 or 360².",
      "Decimal approximation errors: Using 41,253 instead of the exact fraction 129,600/π introduces numerical drift in cosmological simulation codes."
    ]
  },
  faqs: [
    {
      question: "How do I convert square degrees to spats?",
      answer: "Multiply the solid angle in square degrees by π / 129,600 (approximately 0.0000242407), or divide the value by 41,252.96125."
    },
    {
      question: "What is 1 spat equal to?",
      answer: "One spat (sp) is the solid angle of a full sphere, equal to 4π steradians (≈ 12.56637 sr) or 129,600 / π square degrees (≈ 41,252.96 deg²)."
    },
    {
      question: "How many spats are in 1 square degree?",
      answer: "One square degree contains approximately 0.00002424068 spats (or 2.424068 × 10⁻⁵ sp)."
    },
    {
      question: "How many square degrees are in half a spat?",
      answer: "Half a spat (0.5 sp, or 1 hemisphere) contains exactly 64,800 / π square degrees, which is approximately 20,626.48 square degrees."
    },
    {
      question: "Why is a spat useful in astronomy?",
      answer: "A spat represents 100% of the sky. Converting square degrees to spats instantly reveals what exact fraction or percentage of the universe's full celestial sphere a telescope survey covers."
    },
    {
      question: "How do I convert spats back to square degrees?",
      answer: "Multiply the spat value by 129,600 / π (approximately 41,252.96125 deg²/sp)."
    },
    {
      question: "Is the spat an official SI unit?",
      answer: "No. The spat is a non-SI unit of solid angle. The official SI derived unit for solid angle is the steradian (sr)."
    },
    {
      question: "What is the relationship between spat and steradian?",
      answer: "1 spat = 4π steradians ≈ 12.5663706 sr. Conversely, 1 steradian = 1 / (4π) spat ≈ 0.0795775 sp."
    }
  ],
  relatedList: [
    { label: "Spat to Square Degree", from: "spat", to: "square-degree" },
    { label: "Square Degree to Steradian", from: "square-degree", to: "steradian" },
    { label: "Square Degree to Square Radian", from: "square-degree", to: "square-radian" },
    { label: "Steradian to Spat", from: "steradian", to: "spat" },
    { label: "Square Radian to Spat", from: "square-radian", to: "spat" }
  ],
  references: [
    "BIPM — The International System of Units (SI Brochure, 9th Edition), Non-SI Units and Solid Angle",
    "International Astronomical Union (IAU) — Standards of Fundamental Astronomy",
    "CRC Handbook of Chemistry and Physics — Units and Conversion Factors"
  ]
};
