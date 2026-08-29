import { CustomArticleData } from "./types";

export const footCandleToCandelaPerM2: CustomArticleData = {
  fromUnitId: "foot-candle",
  toUnitId: "candela-per-m2",
  seoTitle: "Foot-candle to Candela/m² Converter & Surface Luminance | UnitsConvertors.com",
  metaDescription: "Convert Foot-candles to Candela per square meter (cd/m²) with scientific precision. Master diffuse reflection math, photometric calculations, and engineering tables.",
  canonicalUrl: "https://unitsconvertors.com/en/foot-candle-to-candela-per-m2",
  h1: "Foot-candle (fc) to Candela/m² (cd/m²) Converter",
  introduction: [
    "In architectural illumination, visual ergonomics, and optical metrology, engineers frequently need to calculate the physical surface luminance in SI units resulting from incident light measured with customary light meters.",
    "The foot-candle (symbol: fc) is the US customary unit of illuminance, defining one lumen of luminous flux per square foot (1 fc = 1 lm/ft² = 10.76391 lx). The candela per square meter (symbol: cd/m²) is the coherent derived unit of luminance in the International System of Units (SI), measuring the luminous intensity emitted or reflected per unit of projected area in a given direction.",
    "Because foot-candles measure incident light arriving at a surface while candelas per square meter measure light radiating away from that surface, converting between them requires applying the principles of Lambertian diffuse scattering. On an ideal diffuse white surface with 100% reflectance (ρ = 1.0), 1 foot-candle produces approximately 3.42626 cd/m². This guide provides comprehensive formulas, reflection physics, practical worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "On an ideal 100% white diffuse surface (ρ = 1.0), 1 foot-candle produces approximately 3.42626 cd/m². For real physical materials, multiply the foot-candle reading by the surface diffuse reflectance factor ρ and by 3.426259 (cd/m² = fc × ρ × 3.426259).",
    formulaDisplay: "L_{\\text{cd/m}^2} = \\frac{E_{\\text{fc}} \\times 10.76391 \\times \\rho}{\\pi} \\approx E_{\\text{fc}} \\times \\rho \\times 3.426259 \\text{ cd/m}^2",
    subtext: "E_fc is illuminance in foot-candles; ρ is the surface diffuse reflectance (0.0 to 1.0)."
  },
  aboutSourceUnit: {
    title: "Understanding Foot-candles (fc)",
    text: "The foot-candle (symbol: fc) is a non-SI unit of illuminance used predominantly in the United States and Canada. It quantifies the density of light falling onto a plane from surrounding luminaires and daylight (1 fc = 1 lm/ft²)."
  },
  aboutTargetUnit: {
    title: "Understanding Candela per Square Meter (cd/m²)",
    text: "The candela per square meter (symbol: cd/m², also known colloquially as the nit) is the official SI unit of luminance. It quantifies the visible brightness of an emitting or reflecting surface as observed by the human visual system."
  },
  relationship: "Illuminance (foot-candles) quantifies light arriving at a surface, while luminance (cd/m²) quantifies light radiating outward. On a uniform Lambertian diffuser (ρ = 1.0), 1 foot-candle corresponds to 3.426259 cd/m². For a gray office partition with 30% reflectance (ρ = 0.30) under 40 foot-candles of light, the surface luminance is approximately 41.12 cd/m².",
  relationshipTitle: "Foot-candle to Candela/m² Scale Comparison (Ideal White Diffuser ρ = 1.0)",
  relationshipItems: [
    { label: "1 fc", value: "3.426 cd/m² (Subtle ambient room glow)" },
    { label: "10 fc", value: "34.263 cd/m² (Corridor wall surface brightness)" },
    { label: "50 fc", value: "171.313 cd/m² (Standard office paper under task lighting)" },
    { label: "100 fc", value: "342.626 cd/m² (Studio whiteboard surface)" },
    { label: "500 fc", value: "1,713.130 cd/m² (Sunlit concrete pavement)" }
  ],
  formula: {
    text: "Convert illuminance from foot-candles to lux by multiplying by 10.76391, multiply by the surface reflectance factor ρ, and divide by π.",
    math: "L_{\\text{cd/m}^2} = \\frac{E_{\\text{fc}} \\times 10.7639104 \\times \\rho}{\\pi} = E_{\\text{fc}} \\times \\rho \\times 3.426259",
    subtext: "Where ρ is the diffuse surface reflectance (0.0 to 1.0)."
  },
  formulaTitle: "Foot-candle to Candela/m² Diffuse Scattering Formula",
  practicalTip: {
    title: "Workplace Visual Ergonomics Rule",
    text: "To minimize eye strain, the luminance ratio between a computer monitor (typically 120 to 160 cd/m²) and the adjacent paper workspace should stay below 3:1. Under 40 foot-candles, standard 80% white paper reflects roughly 110 cd/m², achieving ideal visual balance."
  },
  expertNote: {
    title: "Why Lambertian Surfaces Require Division by Pi",
    text: "When a surface reflects light diffusely in all directions according to Lambert's cosine law, the total luminous exitance into a full hemisphere equals π times the central normal luminance (M = π × L). Converting lux or foot-candles to candelas per square meter therefore introduces the factor of 1/π."
  },
  examples: {
    title: "Step-by-Step Foot-candle to Candela/m² Worked Examples",
    items: [
      {
        title: "Example 1: Matte Wall Paint in an Office (ρ = 0.70)",
        subtitle: "Calculate wall luminance in cd/m² illuminated by 35 foot-candles of ambient ceiling light.",
        steps: [
          "Identify incident illuminance: E = 35 fc.",
          "Identify wall reflectance factor: ρ = 0.70 (70% reflectance).",
          "Apply formula: L = 35 × 0.70 × 3.426259.",
          "Perform multiplication: 24.5 × 3.426259 = 83.9433.",
          "Final Result: The wall luminance is approximately 83.94 cd/m²."
        ]
      },
      {
        title: "Example 2: Road Sign Retro-Reflective Sheeting (ρ = 0.85)",
        subtitle: "Determine sign surface brightness in cd/m² under 12 foot-candles of headlight illuminance.",
        steps: [
          "Identify illuminance: E = 12 fc.",
          "Identify diffuse component reflectance: ρ = 0.85.",
          "Apply formula: L = 12 × 0.85 × 3.426259 = 10.2 × 3.426259 = 34.9478.",
          "Final Result: The road sign diffuse surface luminance is approximately 34.95 cd/m²."
        ]
      },
      {
        title: "Example 3: Dark Wooden Conference Table (ρ = 0.22)",
        subtitle: "Calculate table surface luminance under 50 foot-candles meeting room illumination.",
        steps: [
          "Identify illuminance: E = 50 fc.",
          "Identify wood reflectance: ρ = 0.22.",
          "Calculate: L = 50 × 0.22 × 3.426259 = 11 × 3.426259 = 37.6888.",
          "Final Result: The table surface exhibits a luminance of approximately 37.69 cd/m²."
        ]
      }
    ]
  },
  table: {
    title: "Foot-candle to Candela/m² Reference Table for Common Materials",
    headers: ["Incident Illuminance (fc)", "Material / Surface", "Reflectance (ρ)", "Luminance (cd/m²)", "Equivalent Lux (lx)"],
    rows: [
      { fromVal: "1 fc", toVal: "Black Felt Fabric", extra: "0.02 (2%)", extra2: "0.069 cd/m²", extra3: "10.76 lx" },
      { fromVal: "5 fc", toVal: "Acoustic Ceiling Tile", extra: "0.65 (65%)", extra2: "11.135 cd/m²", extra3: "53.82 lx" },
      { fromVal: "10 fc", toVal: "Red Brick Facade", extra: "0.25 (25%)", extra2: "8.566 cd/m²", extra3: "107.64 lx" },
      { fromVal: "20 fc", toVal: "Polished Hardwood", extra: "0.35 (35%)", extra2: "23.984 cd/m²", extra3: "215.28 lx" },
      { fromVal: "30 fc", toVal: "Light Tan Drywall", extra: "0.55 (55%)", extra2: "56.533 cd/m²", extra3: "322.92 lx" },
      { fromVal: "50 fc", toVal: "Standard White Copy Paper", extra: "0.80 (80%)", extra2: "137.050 cd/m²", extra3: "538.20 lx" },
      { fromVal: "75 fc", toVal: "Matte White Projection Screen", extra: "0.90 (90%)", extra2: "231.272 cd/m²", extra3: "807.29 lx" },
      { fromVal: "100 fc", toVal: "Pure Barium Sulfate Target", extra: "0.98 (98%)", extra2: "335.773 cd/m²", extra3: "1,076.39 lx" },
      { fromVal: "500 fc", toVal: "White Concrete Sidewalk", extra: "0.40 (40%)", extra2: "685.252 cd/m²", extra3: "5,381.96 lx" },
      { fromVal: "1,000 fc", toVal: "Ideal Lambertian Diffuser", extra: "1.00 (100%)", extra2: "3,426.259 cd/m²", extra3: "10,763.91 lx" }
    ]
  },
  applications: {
    title: "Engineering Applications of Foot-candle to cd/m² Calculations",
    items: [
      {
        title: "LEED & WELL Building Environmental Audits",
        text: "Sustainability consultants convert foot-candle field surveys into SI luminance figures to evaluate daylight glare probability (DGP) and visual comfort."
      },
      {
        title: "Aviation & Roadway Signage Verification",
        text: "Transportation engineers verify that roadway signs receive sufficient foot-candles from luminaires to produce the minimum required cd/m² legibility levels."
      },
      {
        title: "Architectural Rendering & CGI Lighting",
        text: "3D visualizers convert photometric light schedules measured in foot-candles into physically based rendering (PBR) surface emission maps in cd/m²."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Foot-candle to Candela/m² Calculations",
    items: [
      "Ignoring the diffuse reflectance factor ρ and assuming 100% white reflection for all surfaces.",
      "Confusing candela per square meter (luminance, surface brightness) with lux or foot-candles (illuminance, incident flux density).",
      "Forgetting that 1 candela/m² is identical to 1 nit.",
      "Applying planar diffuse equations to specular metallic or glass surfaces where light reflects directionally."
    ]
  },
  faqs: [
    {
      question: "How do I convert Foot-candles to Candela per square meter (cd/m²)?",
      answer: "Multiply the illuminance in foot-candles by the surface diffuse reflectance factor ρ and then by 3.426259 (cd/m² = fc × ρ × 3.426259)."
    },
    {
      question: "How many cd/m² is 1 Foot-candle on a 100% white surface?",
      answer: "On an ideal 100% white diffuse surface (ρ = 1.0), 1 foot-candle produces approximately 3.426259 cd/m²."
    },
    {
      question: "Is Candela/m² the same as Nit?",
      answer: "Yes, 1 candela per square meter (cd/m²) is exactly equal to 1 nit (1 cd/m² = 1 nt)."
    },
    {
      question: "What is the difference between a Foot-candle and a Candela/m²?",
      answer: "A foot-candle measures incident light falling onto a surface (illuminance), whereas a candela/m² measures light emitted or reflected from a surface (luminance)."
    },
    {
      question: "How many candelas/m² are produced by 50 foot-candles on white paper (80% reflectance)?",
      answer: "50 fc × 0.80 × 3.426259 = 137.05 cd/m²."
    },
    {
      question: "What is the formula relating Foot-candles, Lux, and Candela/m²?",
      answer: "Lux = Foot-candles × 10.76391. Then Candela/m² = (Lux × ρ) / π = (Foot-candles × 10.76391 × ρ) / π."
    },
    {
      question: "Why do we divide by π in luminance calculations?",
      answer: "Because an ideal Lambertian surface reflects light throughout a hemisphere (2π steradians) with a cosine angular distribution, which integrates to π steradians."
    },
    {
      question: "What is a comfortable desk paper luminance in cd/m²?",
      answer: "In modern offices, a desktop paper luminance of 100 to 150 cd/m² (produced by 40 to 55 foot-candles on white paper) matches typical LCD computer monitor brightness."
    }
  ],
  relatedList: [
    { label: "Foot-candle to Nit", from: "foot-candle", to: "nit" },
    { label: "Foot-candle to Lux", from: "foot-candle", to: "lux" },
    { label: "Foot-candle to Foot-Lambert", from: "foot-candle", to: "foot-lambert" },
    { label: "Lux to Candela/m²", from: "lux", to: "candela-per-m2" }
  ],
  references: [
    "CIE S 017/E:2020: ILV: International Lighting Vocabulary (International Commission on Illumination).",
    "IESNA Lighting Handbook (10th Edition): Illuminating Engineering Society of North America.",
    "ISO 8995-1:2002: Lighting of Indoor Work Places."
  ]
};
