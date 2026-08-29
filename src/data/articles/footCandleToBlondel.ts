import { CustomArticleData } from "./types";

export const footCandleToBlondel: CustomArticleData = {
  fromUnitId: "foot-candle",
  toUnitId: "blondel",
  seoTitle: "Foot-candle to Blondel Converter & Optical Photometry | UnitsConvertors.com",
  metaDescription: "Convert Foot-candles to Blondels (fc to blondel) with exact optical formulas. Learn historical French luminance physics, Lambertian reflection math, and tables.",
  canonicalUrl: "https://unitsconvertors.com/en/foot-candle-to-blondel",
  h1: "Foot-candle (fc) to Blondel Converter",
  introduction: [
    "In the history of illumination engineering and international lighting metrology, surface brightness has been expressed in specialized units designed to simplify calculation from incident lighting levels.",
    "The foot-candle (symbol: fc) is the US customary unit of illuminance, defining one lumen of incident luminous flux distributed over one square foot (1 fc = 1 lm/ft² = 10.76391 lx). The blondel (symbol: blondel), named after French physicist André Blondel, is a non-SI unit of luminance defined as 1/π candela per square meter (1 blondel = 1/π cd/m² ≈ 0.318309886 cd/m²).",
    "Because 1 lux of illuminance produces exactly 1 blondel of luminance on an ideal, perfectly diffuse white reflector with 100% reflectance (ρ = 1.0), and 1 foot-candle equals exactly 10.76391 lux, 1 foot-candle produces exactly 10.76391 blondels on an ideal Lambertian surface (1 fc = 10.76391 blondels). This guide explains the optical reflection formulas, worked calculation examples, historical origins, and reference tables."
  ],
  quickAnswer: {
    text: "For a perfectly diffuse white surface with 100% reflectance (ρ = 1.0), 1 foot-candle produces exactly 10.76391 blondels of surface luminance. For real surfaces, multiply foot-candles by the surface reflectance factor ρ and by 10.76391 (blondel = fc × ρ × 10.76391).",
    formulaDisplay: "L_{\\text{blondel}} = E_{\\text{fc}} \\times 10.76391 \\times \\rho \\quad | \\quad 1 \\text{ blondel} = \\frac{1}{\\pi} \\text{ cd/m}^2 \\approx 0.318309886 \\text{ cd/m}^2",
    subtext: "E_fc is illuminance in foot-candles; ρ is the diffuse reflectance factor (0.0 to 1.0)."
  },
  aboutSourceUnit: {
    title: "Understanding Foot-candles (fc)",
    text: "The foot-candle (symbol: fc) measures illuminance—the density of light arriving across a one-square-foot surface plane (1 fc = 1 lm/ft²). It is the customary standard used across US architectural, commercial, and industrial lighting specifications."
  },
  aboutTargetUnit: {
    title: "Understanding the Blondel",
    text: "The blondel is a historical photometric unit of luminance named after French optical physicist André Blondel. It is defined as the luminance of a uniform Lambertian diffuser emitting one lumen per square meter (1 blondel = 1/π cd/m² ≈ 0.3183 cd/m²). It is functionally identical to the apostilb."
  },
  relationship: "Foot-candles measure incoming light (illuminance), while blondels measure outgoing diffuse light (luminance). Because 1 fc = 10.76391 lx and 1 lx = 1 blondel on an ideal diffuser (ρ = 1.0), 1 foot-candle generates exactly 10.76391 blondels. For a white page (80% reflectance) receiving 50 foot-candles, the resulting surface luminance is 430.56 blondels.",
  relationshipTitle: "Foot-candle to Blondel Photometric Scale (Ideal White Diffuser ρ = 1.0)",
  relationshipItems: [
    { label: "1.0 fc", value: "10.764 blondels = 3.426 cd/m²" },
    { label: "10.0 fc", value: "107.639 blondels = 34.263 cd/m²" },
    { label: "30.0 fc", value: "322.917 blondels = 102.790 cd/m²" },
    { label: "50.0 fc", value: "538.196 blondels = 171.313 cd/m²" },
    { label: "100.0 fc", value: "1,076.391 blondels = 342.626 cd/m²" }
  ],
  formula: {
    text: "Multiply illuminance in Foot-candles by 10.76391 and by the surface diffuse reflectance factor ρ to calculate luminance in Blondels.",
    math: "L_{\\text{blondel}} = E_{\\text{fc}} \\times 10.7639104 \\times \\rho \\qquad | \\qquad L_{\\text{cd/m}^2} = \\frac{L_{\\text{blondel}}}{\\pi}",
    subtext: "Where ρ is the diffuse reflectance factor between 0.0 (total absorption) and 1.0 (ideal white reflection)."
  },
  formulaTitle: "Foot-candle to Blondel Surface Luminance Formula",
  practicalTip: {
    title: "Blondel and Apostilb Equivalence",
    text: "Whenever encountering specifications written in blondels in classic French optical papers, you can treat them as identical to apostilbs (1 blondel = 1 asb = 0.3183 cd/m²)."
  },
  expertNote: {
    title: "Historical Photometry of André Blondel",
    text: "André Blondel proposed his unit system in 1896 to establish coherent relationships between luminous flux, intensity, illuminance, and luminance. The blondel unit was designed so that multiplying lux by reflectance directly gave surface brightness without requiring manual division by π."
  },
  examples: {
    title: "Step-by-Step Foot-candle to Blondel Worked Examples",
    items: [
      {
        title: "Example 1: Matte Wall Paint under 40 fc Ambient Light",
        subtitle: "Calculate wall luminance in blondels for a surface with 70% reflectance under 40 foot-candles.",
        steps: [
          "Identify incident illuminance: E = 40 fc.",
          "Identify wall diffuse reflectance: ρ = 0.70.",
          "Apply formula: L_blondel = 40 × 0.70 × 10.76391.",
          "Perform multiplication: 28 × 10.76391 = 301.3895.",
          "Final Result: The wall reflects approximately 301.39 blondels (95.94 cd/m²)."
        ]
      },
      {
        title: "Example 2: Commercial Office Desk Workspace (55 fc)",
        subtitle: "Determine paper luminance in blondels for white paper (ρ = 0.85) under 55 foot-candles desk lighting.",
        steps: [
          "Identify desktop illuminance: E = 55 fc.",
          "Identify paper reflectance: ρ = 0.85.",
          "Calculate: L_blondel = 55 × 0.85 × 10.76391 = 46.75 × 10.76391 = 503.2128.",
          "Final Result: The paper reflects approximately 503.21 blondels (160.18 cd/m²)."
        ]
      },
      {
        title: "Example 3: Architectural Drywall under 25 fc",
        subtitle: "Find drywall surface luminance in blondels for a 60% reflective beige finish.",
        steps: [
          "Identify illuminance: E = 25 fc.",
          "Identify reflectance: ρ = 0.60.",
          "Calculate: L_blondel = 25 × 0.60 × 10.76391 = 15 × 10.76391 = 161.4587.",
          "Final Result: The drywall exhibits approximately 161.46 blondels (51.39 cd/m²)."
        ]
      }
    ]
  },
  table: {
    title: "Foot-candle to Blondel Conversion Table across Common Materials",
    headers: ["Incident Illuminance (fc)", "Surface Finish", "Reflectance (ρ)", "Luminance (Blondel)", "SI Luminance (cd/m²)"],
    rows: [
      { fromVal: "1.0 fc", toVal: "Black Velvet Cloth", extra: "0.01 (1%)", extra2: "0.108 blondels", extra3: "0.034 cd/m²" },
      { fromVal: "5.0 fc", toVal: "Dark Concrete Pavement", extra: "0.15 (15%)", extra2: "8.073 blondels", extra3: "2.570 cd/m²" },
      { fromVal: "10.0 fc", toVal: "Polished Hardwood", extra: "0.30 (30%)", extra2: "32.292 blondels", extra3: "10.279 cd/m²" },
      { fromVal: "20.0 fc", toVal: "Tan Ceramic Flooring", extra: "0.50 (50%)", extra2: "107.639 blondels", extra3: "34.263 cd/m²" },
      { fromVal: "30.0 fc", toVal: "Classroom Whiteboard", extra: "0.75 (75%)", extra2: "242.188 blondels", extra3: "77.091 cd/m²" },
      { fromVal: "50.0 fc", toVal: "Standard White Office Paper", extra: "0.80 (80%)", extra2: "430.556 blondels", extra3: "137.050 cd/m²" },
      { fromVal: "75.0 fc", toVal: "Matte White Projection Screen", extra: "0.90 (90%)", extra2: "726.564 blondels", extra3: "231.272 cd/m²" },
      { fromVal: "100.0 fc", toVal: "Ideal Lambertian Diffuser Target", extra: "1.00 (100%)", extra2: "1,076.391 blondels", extra3: "342.626 cd/m²" },
      { fromVal: "500.0 fc", toVal: "High-Gloss Enamel Billboard", extra: "0.85 (85%)", extra2: "4,574.662 blondels", extra3: "1,456.160 cd/m²" },
      { fromVal: "1,000.0 fc", toVal: "Ideal White Target (Sunlight)", extra: "1.00 (100%)", extra2: "10,763.910 blondels", extra3: "3,426.259 cd/m²" }
    ]
  },
  applications: {
    title: "Key Applications of Foot-candle to Blondel Photometry",
    items: [
      {
        title: "Historical French Lighting Treatises",
        text: "Used when studying early 20th-century French architectural lighting specifications and comparing them with modern US foot-candle schedules."
      },
      {
        title: "Visual Contrast Analysis",
        text: "Human factors specialists calculate task-to-surround contrast ratios by converting luminaire foot-candles into surface blondels."
      },
      {
        title: "Optical Diffuser Standards Metrology",
        text: "Laboratories verify diffuse reflection standards illuminated by calibrated incandescent sources measured in foot-candles."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Foot-candle to Blondel Calculations",
    items: [
      "Assuming 1 foot-candle equals 1 blondel without including the 10.76391 conversion factor between square feet and square meters.",
      "Forgetting to multiply by the surface diffuse reflectance factor ρ.",
      "Confusing the blondel (1/π cd/m²) with the nit or candela per square meter (1 cd/m²).",
      "Applying diffuse equations to directional specular reflectors or mirrors."
    ]
  },
  faqs: [
    {
      question: "What is a Blondel in lighting?",
      answer: "A blondel is a historical unit of luminance equal to 1/π candela per square meter (approx. 0.318309886 cd/m²). It is identical to the apostilb."
    },
    {
      question: "How do I convert Foot-candles to Blondels?",
      answer: "Multiply the foot-candle reading by the surface diffuse reflectance factor ρ and by 10.76391 (Blondel = fc × ρ × 10.76391)."
    },
    {
      question: "How many Blondels is 1 Foot-candle on a 100% white surface?",
      answer: "1 foot-candle produces exactly 10.76391 blondels on an ideal, perfectly diffuse white surface."
    },
    {
      question: "Is the Blondel identical to the Apostilb?",
      answer: "Yes. Both the blondel and the apostilb represent the same physical luminance: 1/π cd/m² (approx. 0.3183 cd/m²)."
    },
    {
      question: "How many candelas per square meter is 1 Blondel?",
      answer: "1 blondel equals 1/π cd/m², which is approximately 0.318309886 cd/m² (or nits)."
    },
    {
      question: "What is the luminance of white paper (80% reflectance) under 50 foot-candles in blondels?",
      answer: "50 × 0.80 × 10.76391 = 430.56 blondels (approx. 137.05 cd/m²)."
    },
    {
      question: "Why was the Blondel named after André Blondel?",
      answer: "It was named in honor of the French engineer André Blondel, who played a pioneering role in establishing the international photometric unit system in 1896."
    },
    {
      question: "Is Blondel an SI unit?",
      answer: "No. The official SI unit for luminance is the candela per square meter (cd/m²). The blondel is an obsolete non-SI unit."
    }
  ],
  relatedList: [
    { label: "Foot-candle to Apostilb", from: "foot-candle", to: "apostilb" },
    { label: "Foot-candle to Foot-Lambert", from: "foot-candle", to: "foot-lambert" },
    { label: "Foot-candle to Candela/m²", from: "foot-candle", to: "candela-per-m2" },
    { label: "Lux to Blondel", from: "lux", to: "blondel" }
  ],
  references: [
    "Blondel, A. (1896). 'Sur les unités photométriques'. Congrès International des Électriciens, Genève.",
    "CIE S 017/E:2020: ILV: International Lighting Vocabulary (International Commission on Illumination).",
    "IESNA Lighting Handbook (10th Edition): Illuminating Engineering Society of North America."
  ]
};
