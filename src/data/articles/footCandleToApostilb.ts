import { CustomArticleData } from "./types";

export const footCandleToApostilb: CustomArticleData = {
  fromUnitId: "foot-candle",
  toUnitId: "apostilb",
  seoTitle: "Foot-candle to Apostilb Converter & Photometry Formula | UnitsConvertors.com",
  metaDescription: "Convert Foot-candles to Apostilbs (fc to asb) with scientific precision. Master Lambertian surface reflection math, SI to CGS luminance relations, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/en/foot-candle-to-apostilb",
  h1: "Foot-candle (fc) to Apostilb (asb) Converter",
  introduction: [
    "In ophthalmology, visual ergonomics, and European architectural lighting history, surface luminance has frequently been evaluated using the apostilb alongside customary imperial lighting measurements.",
    "The foot-candle (symbol: fc) is the US customary unit of illuminance, defining one lumen of incident luminous flux per square foot (1 fc = 1 lm/ft² = 10.76391 lx). The apostilb (symbol: asb, also known historically as the blondel) is a non-SI unit of luminance defined as 1/π candela per square meter (1 asb = 1/π cd/m² ≈ 0.318309886 cd/m²).",
    "Because 1 lux of illuminance produces exactly 1 apostilb of luminance on an ideal, perfectly diffuse white reflector with 100% reflectance (ρ = 1.0), and 1 foot-candle equals exactly 10.76391 lux, 1 foot-candle produces exactly 10.76391 apostilbs on an ideal Lambertian surface (1 fc = 10.76391 asb). This guide explains the optical reflection formulas, worked calculation examples, visual field testing standards, and reference tables."
  ],
  quickAnswer: {
    text: "For a perfectly diffuse white surface with 100% reflectance (ρ = 1.0), 1 foot-candle produces exactly 10.76391 apostilbs of surface luminance. For real surfaces, multiply foot-candles by the surface reflectance factor ρ and by 10.76391 (asb = fc × ρ × 10.76391).",
    formulaDisplay: "L_{\\text{asb}} = E_{\\text{fc}} \\times 10.76391 \\times \\rho \\quad | \\quad 1 \\text{ asb} = \\frac{1}{\\pi} \\text{ cd/m}^2 \\approx 0.318309886 \\text{ cd/m}^2",
    subtext: "E_fc is illuminance in foot-candles; ρ is the surface diffuse reflectance factor (0.0 to 1.0)."
  },
  aboutSourceUnit: {
    title: "Understanding Foot-candles (fc)",
    text: "The foot-candle (symbol: fc) measures illuminance—the density of light arriving across a one-square-foot surface plane (1 fc = 1 lm/ft²). It is the standard unit used across US commercial and architectural lighting standards."
  },
  aboutTargetUnit: {
    title: "Understanding the Apostilb (asb)",
    text: "The apostilb (symbol: asb) is an obsolete photometric unit of luminance equal to the brightness of a uniform Lambertian diffuser emitting one lumen per square meter (1 asb = 1/π cd/m² ≈ 0.3183 cd/m²). It remains widely referenced in clinical visual field perimetry (e.g., Humphrey and Goldmann perimeters)."
  },
  relationship: "Foot-candles measure incoming light (illuminance), while apostilbs measure outgoing diffuse light (luminance). Because 1 fc = 10.76391 lx and 1 lx = 1 asb on an ideal diffuser (ρ = 1.0), 1 foot-candle generates exactly 10.76391 apostilbs. For a white page (80% reflectance) receiving 50 foot-candles, the resulting surface luminance is 430.56 apostilbs.",
  relationshipTitle: "Foot-candle to Apostilb Photometric Scale (Ideal White Diffuser ρ = 1.0)",
  relationshipItems: [
    { label: "1.0 fc", value: "10.764 asb = 3.426 cd/m² (Subtle ambient surface brightness)" },
    { label: "10.0 fc", value: "107.639 asb = 34.263 cd/m² (Dim corridor wall reflection)" },
    { label: "31.416 fc", value: "338.158 asb = 107.639 cd/m² (Standard 31.4 fc perimeter bowl)" },
    { label: "50.0 fc", value: "538.196 asb = 171.313 cd/m² (Office task lighting on white paper)" },
    { label: "100.0 fc", value: "1,076.391 asb = 342.626 cd/m² (Precision inspection drafting table)" }
  ],
  formula: {
    text: "Multiply illuminance in Foot-candles by 10.76391 and by the surface diffuse reflectance factor ρ to calculate luminance in Apostilbs.",
    math: "L_{\\text{asb}} = E_{\\text{fc}} \\times 10.7639104 \\times \\rho \\qquad | \\qquad L_{\\text{cd/m}^2} = \\frac{L_{\\text{asb}}}{\\pi}",
    subtext: "Where ρ is the diffuse reflectance factor between 0.0 (total absorption) and 1.0 (ideal white reflection)."
  },
  formulaTitle: "Foot-candle to Apostilb Surface Luminance Formula",
  practicalTip: {
    title: "Clinical Ophthalmology Perimeter Calibration",
    text: "Standard automated perimetry bowls (such as Humphrey Visual Field analyzers) maintain a calibrated background luminance of 31.5 apostilbs (approx. 10 cd/m²). Achieving this on a unity-reflectance bowl requires approximately 2.93 foot-candles (31.5 lux) of internal diffuse illuminance."
  },
  expertNote: {
    title: "Why Apostilb Eliminates Pi in Metric Lighting",
    text: "In European metric calculations, the apostilb eliminated the factor of π when working with lux (1 lx = 1 asb on an ideal diffuser). When starting from US foot-candles, the only required conversion factor is the metric area constant 10.76391."
  },
  examples: {
    title: "Step-by-Step Foot-candle to Apostilb Worked Examples",
    items: [
      {
        title: "Example 1: Commercial Office Desk Workspace (50 fc)",
        subtitle: "Calculate paper luminance in apostilbs for standard office paper (ρ = 0.80) under 50 foot-candles.",
        steps: [
          "Identify incident illuminance: E = 50 fc.",
          "Identify paper diffuse reflectance: ρ = 0.80.",
          "Apply formula: L_asb = 50 × 0.80 × 10.76391.",
          "Perform multiplication: 40 × 10.76391 = 430.5564.",
          "Final Result: The paper reflects approximately 430.56 apostilbs (137.05 cd/m²)."
        ]
      },
      {
        title: "Example 2: Visual Field Perimetry Background (ρ = 0.90)",
        subtitle: "Determine bowl luminance in apostilbs when internal LED fixtures deliver 3.5 foot-candles onto a 90% reflective hemisphere.",
        steps: [
          "Identify illuminance: E = 3.5 fc.",
          "Identify bowl reflectance: ρ = 0.90.",
          "Calculate: L_asb = 3.5 × 0.90 × 10.76391 = 3.15 × 10.76391 = 33.9063.",
          "Final Result: The perimetry bowl has a background luminance of approximately 33.91 apostilbs."
        ]
      },
      {
        title: "Example 3: Studio Whiteboard under 70 fc",
        subtitle: "Find whiteboard luminance in apostilbs for an 85% reflective surface.",
        steps: [
          "Identify illuminance: E = 70 fc.",
          "Identify reflectance: ρ = 0.85.",
          "Calculate: L_asb = 70 × 0.85 × 10.76391 = 59.5 × 10.76391 = 640.4526.",
          "Final Result: The whiteboard reflects approximately 640.45 apostilbs (203.86 cd/m²)."
        ]
      }
    ]
  },
  table: {
    title: "Foot-candle to Apostilb Conversion Table across Materials",
    headers: ["Incident Illuminance (fc)", "Surface Material", "Reflectance (ρ)", "Luminance (Apostilb)", "SI Luminance (cd/m²)"],
    rows: [
      { fromVal: "1.0 fc", toVal: "Black Felt Fabric", extra: "0.02 (2%)", extra2: "0.215 asb", extra3: "0.069 cd/m²" },
      { fromVal: "5.0 fc", toVal: "Dark Walnut Flooring", extra: "0.20 (20%)", extra2: "10.764 asb", extra3: "3.426 cd/m²" },
      { fromVal: "10.0 fc", toVal: "Beige Painted Drywall", extra: "0.50 (50%)", extra2: "53.820 asb", extra3: "17.131 cd/m²" },
      { fromVal: "20.0 fc", toVal: "Acoustic Ceiling Tile", extra: "0.65 (65%)", extra2: "139.931 asb", extra3: "44.542 cd/m²" },
      { fromVal: "30.0 fc", toVal: "Classroom Whiteboard", extra: "0.75 (75%)", extra2: "242.188 asb", extra3: "77.091 cd/m²" },
      { fromVal: "50.0 fc", toVal: "Standard White Copy Paper", extra: "0.80 (80%)", extra2: "430.556 asb", extra3: "137.050 cd/m²" },
      { fromVal: "75.0 fc", toVal: "Matte White Projection Screen", extra: "0.90 (90%)", extra2: "726.564 asb", extra3: "231.272 cd/m²" },
      { fromVal: "100.0 fc", toVal: "Ideal Lambertian Diffuser Standard", extra: "1.00 (100%)", extra2: "1,076.391 asb", extra3: "342.626 cd/m²" },
      { fromVal: "500.0 fc", toVal: "White Vinyl Signboard", extra: "0.85 (85%)", extra2: "4,574.662 asb", extra3: "1,456.160 cd/m²" },
      { fromVal: "1,000.0 fc", toVal: "Ideal White Target (Sunlight)", extra: "1.00 (100%)", extra2: "10,763.910 asb", extra3: "3,426.259 cd/m²" }
    ]
  },
  applications: {
    title: "Key Applications of Foot-candle to Apostilb Photometry",
    items: [
      {
        title: "Ophthalmology & Visual Field Perimetry",
        text: "Clinical perimetrists verify bowl background luminance specified in apostilbs (e.g., 31.5 asb) using incident light meters calibrated in foot-candles or lux."
      },
      {
        title: "Historical European Lighting Engineering",
        text: "Engineers reviewing historic German, French, and Russian architectural lighting schedules translate customary foot-candles into apostilbs."
      },
      {
        title: "Visual Contrast Sensitivity Testing",
        text: "Optometrists calibrate contrast charts (Pelli-Robson) under known room foot-candles to establish baseline optotype apostilb luminance."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Foot-candle to Apostilb Calculations",
    items: [
      "Assuming 1 foot-candle equals 1 apostilb (1 fc = 10.76391 asb on an ideal diffuser because of the ft² to m² area ratio).",
      "Forgetting to multiply by the surface diffuse reflectance factor ρ.",
      "Confusing apostilb (1/π cd/m²) with candela per square meter (1 cd/m²).",
      "Applying diffuse reflection formulas to glossy surfaces exhibiting mirror-like specular reflections."
    ]
  },
  faqs: [
    {
      question: "How do I convert Foot-candles to Apostilbs?",
      answer: "Multiply the foot-candle reading by the surface diffuse reflectance factor ρ and by 10.76391 (Apostilb = fc × ρ × 10.76391)."
    },
    {
      question: "How many Apostilbs is 1 Foot-candle on a 100% white surface?",
      answer: "1 foot-candle produces exactly 10.76391 apostilbs on an ideal, perfectly diffuse white surface."
    },
    {
      question: "What is an Apostilb?",
      answer: "An apostilb (asb) is an obsolete photometric unit of luminance equal to 1/π candela per square meter (approximately 0.318309886 cd/m²)."
    },
    {
      question: "Why does 1 fc equal 10.76391 asb on an ideal diffuser?",
      answer: "Because 1 foot-candle equals 10.76391 lux, and 1 lux produces exactly 1 apostilb of luminance on a 100% reflective Lambertian surface."
    },
    {
      question: "Is the Apostilb the same as the Blondel?",
      answer: "Yes, the apostilb and the blondel are completely identical units of luminance (1 asb = 1 blondel = 1/π cd/m²)."
    },
    {
      question: "What is the luminance of white paper (80% reflectance) under 50 foot-candles in apostilbs?",
      answer: "50 × 0.80 × 10.76391 = 430.56 apostilbs (approx. 137.05 cd/m²)."
    },
    {
      question: "Why is the Apostilb still used in ophthalmology?",
      answer: "Goldmann and Humphrey visual field perimeters were originally calibrated in apostilbs (standard background: 31.5 asb), and the standard decibel attenuation scale remains indexed to apostilbs."
    },
    {
      question: "Is Apostilb an SI unit?",
      answer: "No. The official SI unit for luminance is the candela per square meter (cd/m²). The apostilb is a historical non-SI unit."
    }
  ],
  relatedList: [
    { label: "Foot-candle to Blondel", from: "foot-candle", to: "blondel" },
    { label: "Foot-candle to Foot-Lambert", from: "foot-candle", to: "foot-lambert" },
    { label: "Foot-candle to Candela/m²", from: "foot-candle", to: "candela-per-m2" },
    { label: "Lux to Apostilb", from: "lux", to: "apostilb" }
  ],
  references: [
    "CIE S 017/E:2020: ILV: International Lighting Vocabulary (International Commission on Illumination).",
    "Goldmann, H. (1945). 'Ein selbstregistrierendes Projektionskugelperimeter'. Ophthalmologica, 109(2-3), 71-79.",
    "IESNA Lighting Handbook (10th Edition): Illuminating Engineering Society of North America."
  ]
};
