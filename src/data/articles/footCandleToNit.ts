import { CustomArticleData } from "./types";

export const footCandleToNit: CustomArticleData = {
  fromUnitId: "foot-candle",
  toUnitId: "nit",
  seoTitle: "Foot-candle to Nit Converter & Optical Luminance Formula | UnitsConvertors.com",
  metaDescription: "Convert Foot-candles (illuminance) to Nits (luminance) with scientific accuracy. Learn Lambertian diffuse reflection math, screen brightness ratios, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/en/foot-candle-to-nit",
  h1: "Foot-candle (fc) to Nit (nt) Converter",
  introduction: [
    "In display engineering, projection screen calibration, and optical vision science, engineers must relate incident illumination falling on a display surface to the resulting surface brightness visible to the human eye.",
    "The foot-candle (symbol: fc) is the US customary unit of illuminance, representing one lumen of luminous flux per square foot (1 fc = 1 lm/ft² = 10.76391 lx). The nit (symbol: nt) is the standard non-SI name for the SI coherent unit of luminance, defined as one candela per square meter (1 nt = 1 cd/m²).",
    "Because illuminance measures arriving light flux and luminance measures emitted or reflected light per steradian, converting foot-candles to nits requires applying Lambertian diffuse scattering physics. For an ideal, perfectly diffuse reflector with 100% reflectance (ρ = 1.0), an illuminance of 1 foot-candle produces approximately 3.42626 nits of luminance. This guide explains the optical formulas, reflectance factors, step-by-step calculations, and practical engineering tables."
  ],
  quickAnswer: {
    text: "For an ideal 100% white diffuse surface (ρ = 1.0), 1 foot-candle produces approximately 3.42626 nits (cd/m²). For real-world surfaces, multiply foot-candles by the surface reflectance factor ρ and by 3.426259 (nit = fc × ρ × 3.426259).",
    formulaDisplay: "L_{\\text{nit}} = \\frac{E_{\\text{fc}} \\times 10.76391 \\times \\rho}{\\pi} \\approx E_{\\text{fc}} \\times \\rho \\times 3.426259 \\text{ nt}",
    subtext: "E_fc is illuminance in foot-candles; ρ is the surface diffuse reflectance (0.0 to 1.0)."
  },
  aboutSourceUnit: {
    title: "Understanding Foot-candles (fc)",
    text: "The foot-candle (symbol: fc) measures illuminance—the areal density of light falling onto a plane (1 fc = 1 lm/ft²). Widely used across North America, it quantifies ambient room lighting, projector output on screens, and architectural workplace illumination."
  },
  aboutTargetUnit: {
    title: "Understanding Nits (nt / cd/m²)",
    text: "The nit (symbol: nt) is the industry standard term for candela per square meter (1 nt = 1 cd/m²). It quantifies luminance—the perceived surface brightness of light sources, electronic displays (smartphones, TVs, monitors), and illuminated matte surfaces."
  },
  relationship: "Foot-candles quantify incident flux arriving at a plane, while nits measure luminous intensity radiating into a solid angle per unit projected area. On an ideal Lambertian matte surface (ρ = 1.0), 1 foot-candle generates 3.426259 nits. For a projection screen with a gain/reflectance of 0.85, 20 foot-candles of projector illuminance yields approximately 58.25 nits of screen luminance.",
  relationshipTitle: "Foot-candle vs Nit Photometric Scale (Ideal Diffuser ρ = 1.0)",
  relationshipItems: [
    { label: "1 fc", value: "3.426 nits (Overcast ambient wall reflection)" },
    { label: "10 fc", value: "34.263 nits (Dim cinema auditorium wall)" },
    { label: "50 fc", value: "171.313 nits (Office paper under 50 fc desk lighting)" },
    { label: "100 fc", value: "342.626 nits (Studio whiteboard reflection)" },
    { label: "500 fc", value: "1,713.130 nits (Outdoor shaded billboard reflection)" }
  ],
  formula: {
    text: "Multiply illuminance in foot-candles by 10.76391 to convert to lux, multiply by the surface reflectance factor ρ, and divide by π (approx. 3.14159265).",
    math: "L_{\\text{nit}} = \\frac{E_{\\text{fc}} \\times 10.7639104 \\times \\rho}{\\pi} = E_{\\text{fc}} \\times \\rho \\times 3.426259",
    subtext: "Where ρ is the diffuse reflectance factor between 0.0 (total black absorption) and 1.0 (pure white reflection)."
  },
  formulaTitle: "Foot-candle to Nit Surface Luminance Formula",
  practicalTip: {
    title: "Projector Screen Calibration Rule",
    text: "In commercial home theaters, the SMPTE standard recommends 16 foot-lamberts (approx. 54.8 nits) of screen brightness. To achieve this on a unity-gain matte white screen (ρ = 1.0), your projector must deliver 16 foot-candles of illuminance onto the screen surface."
  },
  expertNote: {
    title: "The Mathematical Derivation of 3.426259",
    text: "The constant factor 3.426259 derives from dividing the metric area conversion factor 10.7639104 (lx per fc) by π steradians for a uniform hemispherical Lambertian emission: 10.7639104 / 3.1415926535 = 3.4262590996."
  },
  examples: {
    title: "Step-by-Step Foot-candle to Nit Worked Examples",
    items: [
      {
        title: "Example 1: Matte White Cinema Projection Screen (Gain = 1.0)",
        subtitle: "Calculate screen luminance in nits when a digital cinema projector casts 14 foot-candles onto a matte screen.",
        steps: [
          "Identify incident illuminance: E = 14 fc.",
          "Identify screen reflectance / gain: ρ = 1.0.",
          "Apply conversion formula: L_nit = 14 × 1.0 × 3.426259.",
          "Perform multiplication: 14 × 3.426259 = 47.9676.",
          "Final Result: The projection screen produces approximately 47.97 nits of luminance."
        ]
      },
      {
        title: "Example 2: Commercial Office White Paper (80% Reflectance)",
        subtitle: "Determine paper luminance in nits under standard 40 foot-candles desk task illumination.",
        steps: [
          "Identify illuminance: E = 40 fc.",
          "Identify paper diffuse reflectance: ρ = 0.80.",
          "Apply formula: L_nit = 40 × 0.80 × 3.426259.",
          "Calculate: 32 × 3.426259 = 109.6403.",
          "Final Result: The white paper exhibits a luminance of approximately 109.64 nits."
        ]
      },
      {
        title: "Example 3: Photographic 18% Neutral Gray Target",
        subtitle: "Calculate target luminance under 100 foot-candles studio lighting.",
        steps: [
          "Identify illuminance: E = 100 fc.",
          "Identify reflectance: ρ = 0.18.",
          "Calculate: L_nit = 100 × 0.18 × 3.426259 = 18 × 3.426259 = 61.6727.",
          "Final Result: The 18% gray card has a surface luminance of 61.67 nits."
        ]
      }
    ]
  },
  table: {
    title: "Foot-candle to Nit Conversion Table across Reflectance Values",
    headers: ["Incident Illuminance (fc)", "Surface Material", "Reflectance (ρ)", "Luminance (Nits / cd/m²)", "Luminance (Foot-Lamberts)"],
    rows: [
      { fromVal: "1.0 fc", toVal: "Dark Slate Chalkboard", extra: "0.15 (15%)", extra2: "0.514 nt", extra3: "0.150 fL" },
      { fromVal: "5.0 fc", toVal: "Hardwood Floor Finish", extra: "0.30 (30%)", extra2: "5.139 nt", extra3: "1.500 fL" },
      { fromVal: "10.0 fc", toVal: "Beige Painted Drywall", extra: "0.60 (60%)", extra2: "20.558 nt", extra3: "6.000 fL" },
      { fromVal: "15.0 fc", toVal: "Cinema Screen (Unity Gain)", extra: "1.00 (100%)", extra2: "51.394 nt", extra3: "15.000 fL" },
      { fromVal: "30.0 fc", toVal: "Classroom Whiteboard", extra: "0.75 (75%)", extra2: "77.091 nt", extra3: "22.500 fL" },
      { fromVal: "50.0 fc", toVal: "Standard Matte Office Paper", extra: "0.85 (85%)", extra2: "145.616 nt", extra3: "42.500 fL" },
      { fromVal: "75.0 fc", toVal: "Architectural Drafting Paper", extra: "0.90 (90%)", extra2: "231.272 nt", extra3: "67.500 fL" },
      { fromVal: "100.0 fc", toVal: "Ideal Lambertian Diffuser Target", extra: "1.00 (100%)", extra2: "342.626 nt", extra3: "100.000 fL" },
      { fromVal: "250.0 fc", toVal: "White Vinyl Billboard", extra: "0.80 (80%)", extra2: "685.252 nt", extra3: "200.000 fL" },
      { fromVal: "1,000.0 fc", toVal: "Ideal White Target (Full Sun)", extra: "1.00 (100%)", extra2: "3,426.259 nt", extra3: "1,000.000 fL" }
    ]
  },
  applications: {
    title: "Practical Applications of Foot-candle to Nit Conversions",
    items: [
      {
        title: "Cinema Projection & Home Theater Engineering",
        text: "Audio-visual specialists convert projector illuminance in foot-candles into screen luminance in nits to calibrate HDR and SDR master targets."
      },
      {
        title: "Display Ergonomics & Workplace Glare Analysis",
        text: "Human factors engineers compare computer display output in nits with surrounding desktop reflection in nits (from ambient foot-candles) to ensure comfortable 3:1 contrast ratios."
      },
      {
        title: "Architectural Visual Contrast Audits",
        text: "Lighting consultants evaluate wall surface luminance in nits resulting from architectural downlights measured in foot-candles."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Foot-candle to Nit Calculations",
    items: [
      "Assuming a 1-to-1 conversion between foot-candles and nits without accounting for the 3.42626 conversion factor and surface reflectance.",
      "Confusing illuminance (foot-candles, incoming light) with luminance (nits, outgoing light per steradian).",
      "Forgetting to divide by π when calculating luminance from lux or foot-candle illuminance on diffuse surfaces.",
      "Applying diffuse Lambertian formulas to glossy or specular surfaces that have angular highlight peaks."
    ]
  },
  faqs: [
    {
      question: "What is the relationship between Foot-candles and Nits?",
      answer: "Foot-candles measure incident illuminance (lm/ft²), while nits measure emitted or reflected luminance (cd/m²). On an ideal 100% white diffuse surface, 1 foot-candle produces approximately 3.42626 nits."
    },
    {
      question: "How do I convert Foot-candles to Nits for a real surface?",
      answer: "Multiply the foot-candle value by the surface diffuse reflectance factor ρ and then by 3.426259 (Nit = fc × ρ × 3.426259)."
    },
    {
      question: "How many Nits is 1 Foot-candle on a 100% reflective surface?",
      answer: "1 foot-candle produces exactly 10.76391 / π ≈ 3.426259 nits on a perfectly diffuse white surface."
    },
    {
      question: "What is a Nit in display terms?",
      answer: "A nit is equivalent to one candela per square meter (1 nt = 1 cd/m²). It is the standard metric used to describe the brightness of phone screens, computer monitors, and televisions."
    },
    {
      question: "How do I convert Foot-candles to Foot-Lamberts?",
      answer: "On a 100% reflective Lambertian surface, 1 foot-candle produces exactly 1 foot-lambert. For other surfaces, multiply foot-candles by the reflectance factor ρ."
    },
    {
      question: "How many nits is 1 Foot-Lambert?",
      answer: "1 foot-lambert equals approximately 3.426259 nits (cd/m²)."
    },
    {
      question: "What is the luminance of white paper (85% reflectance) under 50 foot-candles?",
      answer: "Under 50 fc, the paper produces 50 × 0.85 × 3.426259 ≈ 145.62 nits (or 42.5 foot-lamberts)."
    },
    {
      question: "Why does the number 3.426259 appear in the conversion?",
      answer: "Because 1 foot-candle equals 10.76391 lux, and converting lux to candelas per square meter for a uniform hemisphere involves dividing by π (10.76391 / 3.14159265 = 3.426259)."
    }
  ],
  relatedList: [
    { label: "Foot-candle to Lux", from: "foot-candle", to: "lux" },
    { label: "Foot-candle to Foot-Lambert", from: "foot-candle", to: "foot-lambert" },
    { label: "Foot-candle to Candela/m²", from: "foot-candle", to: "candela-per-m2" },
    { label: "Lux to Nit", from: "lux", to: "nit" }
  ],
  references: [
    "IESNA Lighting Handbook (10th Edition): Illuminating Engineering Society of North America.",
    "SMPTE RP 94: Gain and Luminance of Projection Screens.",
    "CIE S 017/E:2020: ILV: International Lighting Vocabulary."
  ]
};
