import { CustomArticleData } from "./types";

export const footCandleToStilb: CustomArticleData = {
  fromUnitId: "foot-candle",
  toUnitId: "stilb",
  seoTitle: "Foot-candle to Stilb Converter & CGS Luminance Formula | UnitsConvertors.com",
  metaDescription: "Convert Foot-candles to Stilbs (fc to sb) with exact optical precision. Learn CGS luminance derivations, high-intensity surface reflection, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/en/foot-candle-to-stilb",
  h1: "Foot-candle (fc) to Stilb (sb) Converter",
  introduction: [
    "In optical engineering, laser physics, and high-intensity discharge (HID) lamp characterization, engineers frequently analyze surface brightness using the CGS unit of luminance, the stilb.",
    "The foot-candle (symbol: fc) is the US customary unit of illuminance, defining one lumen of incident luminous flux per square foot (1 fc = 1 lm/ft² = 10.76391 lx). The stilb (symbol: sb, derived from the Greek στίλβω, meaning 'to glisten' or 'shine') is the CGS unit of luminance, defined as exactly one candela per square centimeter (1 sb = 1 cd/cm² = 10,000 cd/m²).",
    "Because illuminance measures incoming flux and stilbs measure intensely concentrated luminous intensity per unit area, converting between them requires Lambertian diffuse scattering equations. On an ideal diffuse white reflector with 100% reflectance (ρ = 1.0), an illuminance of 1 foot-candle produces approximately 0.000342626 stilbs (or 3.426259 × 10⁻⁴ sb). This guide covers the mathematical derivation, practical conversion examples, and comprehensive photometric reference tables."
  ],
  quickAnswer: {
    text: "On an ideal 100% white diffuse surface (ρ = 1.0), 1 foot-candle produces approximately 0.000342626 stilbs (3.426259 × 10⁻⁴ sb). For real surfaces, multiply foot-candles by the surface reflectance factor ρ and then by 0.0003426259 (sb = fc × ρ × 0.0003426259).",
    formulaDisplay: "L_{\\text{stilb}} = \\frac{E_{\\text{fc}} \\times 10.76391 \\times \\rho}{\\pi \\times 10{,}000} \\approx E_{\\text{fc}} \\times \\rho \\times 3.426259 \\times 10^{-4} \\text{ sb}",
    subtext: "E_fc is illuminance in foot-candles; ρ is the diffuse reflectance factor (0.0 to 1.0)."
  },
  aboutSourceUnit: {
    title: "Understanding Foot-candles (fc)",
    text: "The foot-candle (symbol: fc) measures illuminance—the density of light arriving at a surface plane (1 fc = 1 lm/ft² = 10.76391 lx). It is used throughout North American lighting and architectural design."
  },
  aboutTargetUnit: {
    title: "Understanding the Stilb (sb)",
    text: "The stilb (symbol: sb) is a CGS unit of luminance equal to one candela per square centimeter. Because 1 square meter contains 10,000 square centimeters, 1 stilb equals exactly 10,000 candelas per square meter (10,000 nits)."
  },
  relationship: "Foot-candles quantify incident light density, while stilbs measure extremely high emitted or reflected luminance. On an ideal Lambertian diffuser (ρ = 1.0), 1 foot-candle produces 3.426259 × 10⁻⁴ stilbs. To produce 1 full stilb of surface luminance on a 100% reflective white surface requires approximately 2,918.64 foot-candles of intense illuminance.",
  relationshipTitle: "Foot-candle to Stilb Photometric Scale (Ideal Diffuser ρ = 1.0)",
  relationshipItems: [
    { label: "1 fc", value: "3.4263 × 10⁻⁴ sb (0.0343 centistilbs)" },
    { label: "10 fc", value: "3.4263 × 10⁻³ sb (0.3426 centistilbs)" },
    { label: "100 fc", value: "0.03426 sb (Standard 100 fc task illumination)" },
    { label: "1,000 fc", value: "0.34263 sb (Daylight illuminance on white diffuser)" },
    { label: "2,918.64 fc", value: "1.00000 sb = 10,000 cd/m²" }
  ],
  formula: {
    text: "Convert illuminance in foot-candles to lux (× 10.76391), multiply by surface reflectance ρ, divide by π to find cd/m², and divide by 10,000 to convert to stilbs.",
    math: "L_{\\text{stilb}} = \\frac{E_{\\text{fc}} \\times 10.7639104 \\times \\rho}{\\pi \\times 10{,}000} = E_{\\text{fc}} \\times \\rho \\times 3.426259 \\times 10^{-4}",
    subtext: "Where ρ is the diffuse surface reflectance (0.0 to 1.0)."
  },
  formulaTitle: "Foot-candle to Stilb Conversion Formula",
  practicalTip: {
    title: "Understanding the Magnitude of 1 Stilb",
    text: "One stilb represents intense luminance (10,000 cd/m²), typical of high-brightness LED arrays, xenon searchlights, or the surface of a frosted tungsten filament. Diffusely illuminated interior surfaces rarely exceed a fraction of a stilb."
  },
  expertNote: {
    title: "CGS Photometric System Architecture",
    text: "In the CGS system, the phot (1 lm/cm²) is the unit of illuminance, and the stilb (1 cd/cm²) is the unit of luminance. Because 1 foot contains 30.48 cm, 1 fc equals 1.076391 × 10⁻³ phot, yielding the direct 3.426259 × 10⁻⁴ conversion factor for stilbs."
  },
  examples: {
    title: "Step-by-Step Foot-candle to Stilb Worked Examples",
    items: [
      {
        title: "Example 1: Studio White Target under 500 fc High-Mast Lighting",
        subtitle: "Calculate surface luminance in stilbs for a matte white target (ρ = 0.90) under 500 foot-candles.",
        steps: [
          "Identify incident illuminance: E = 500 fc.",
          "Identify surface reflectance: ρ = 0.90.",
          "Apply conversion formula: L = 500 × 0.90 × 3.426259 × 10⁻⁴.",
          "Perform calculation: 450 × 3.426259 × 10⁻⁴ = 0.1541816.",
          "Final Result: The target reflects approximately 0.1542 stilbs (equivalent to 1,541.82 cd/m²)."
        ]
      },
      {
        title: "Example 2: Outdoor White Billboard in Direct Sunlight (8,000 fc)",
        subtitle: "Determine billboard luminance in stilbs for a white vinyl surface (ρ = 0.80) under 8,000 foot-candles sunlight.",
        steps: [
          "Identify daylight illuminance: E = 8,000 fc.",
          "Identify billboard reflectance: ρ = 0.80.",
          "Calculate: L = 8,000 × 0.80 × 3.426259 × 10⁻⁴ = 6,400 × 3.426259 × 10⁻⁴ = 2.1928.",
          "Final Result: The billboard exhibits a luminance of approximately 2.1928 stilbs (21,928 cd/m²)."
        ]
      },
      {
        title: "Example 3: Standard Office Desk Paper under 40 fc",
        subtitle: "Calculate paper luminance in stilbs under 40 foot-candles office lighting (ρ = 0.80).",
        steps: [
          "Identify illuminance: E = 40 fc.",
          "Identify paper reflectance: ρ = 0.80.",
          "Calculate: L = 40 × 0.80 × 3.426259 × 10⁻⁴ = 32 × 3.426259 × 10⁻⁴ = 0.010964.",
          "Final Result: The paper reflects approximately 0.01096 stilbs (109.64 cd/m²)."
        ]
      }
    ]
  },
  table: {
    title: "Foot-candle to Stilb Conversion Table across Lighting Regimes",
    headers: ["Incident Illuminance (fc)", "Reflectance (ρ)", "Luminance (Stilb)", "Luminance (cd/m²)", "Equivalent Lux (lx)"],
    rows: [
      { fromVal: "1 fc", toVal: "1.00 (100%)", extra: "3.426 × 10⁻⁴ sb", extra2: "3.426 cd/m²", extra3: "10.76 lx" },
      { fromVal: "10 fc", toVal: "0.80 (80%)", extra: "2.741 × 10⁻³ sb", extra2: "27.410 cd/m²", extra3: "107.64 lx" },
      { fromVal: "50 fc", toVal: "0.80 (80%)", extra: "0.01371 sb", extra2: "137.050 cd/m²", extra3: "538.20 lx" },
      { fromVal: "100 fc", toVal: "0.85 (85%)", extra: "0.02912 sb", extra2: "291.232 cd/m²", extra3: "1,076.39 lx" },
      { fromVal: "500 fc", toVal: "0.90 (90%)", extra: "0.15418 sb", extra2: "1,541.817 cd/m²", extra3: "5,381.96 lx" },
      { fromVal: "1,000 fc", toVal: "1.00 (100%)", extra: "0.34263 sb", extra2: "3,426.259 cd/m²", extra3: "10,763.91 lx" },
      { fromVal: "2,918.64 fc", toVal: "1.00 (100%)", extra: "1.00000 sb", extra2: "10,000.000 cd/m²", extra3: "31,415.93 lx" },
      { fromVal: "5,000 fc", toVal: "0.85 (85%)", extra: "1.45616 sb", extra2: "14,561.601 cd/m²", extra3: "53,819.55 lx" },
      { fromVal: "10,000 fc", toVal: "0.90 (90%)", extra: "3.08363 sb", extra2: "30,836.332 cd/m²", extra3: "107,639.10 lx" }
    ]
  },
  applications: {
    title: "Applications of Stilb Luminance Calculations",
    items: [
      {
        title: "High-Power Arc Lamp & Searchlight Engineering",
        text: "Optical designers use stilbs to evaluate the intense focal brightness produced when concentrated reflectors illuminate target surfaces."
      },
      {
        title: "Laser & Pyrotechnic Surface Glare Audits",
        text: "Military and industrial safety engineers calculate reflected surface brightness in stilbs to determine flash blindness thresholds for personnel."
      },
      {
        title: "Historical European Photometric Literature",
        text: "Classic 20th-century physics papers in Germany and France routinely specified source and surface luminance in stilbs and millistilbs."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Foot-candle to Stilb Conversions",
    items: [
      "Confusing stilb (1 cd/cm² = 10,000 cd/m²) with nit (1 cd/m²) or lambert (1/π cd/cm²).",
      "Forgetting the 10,000 factor when converting between SI candelas per square meter and CGS stilbs.",
      "Omitting surface reflectance factor ρ when estimating reflected luminance from illuminance.",
      "Applying planar diffuse reflection formulas to specular chrome or mirrored surfaces."
    ]
  },
  faqs: [
    {
      question: "What is a Stilb in photometry?",
      answer: "A stilb (symbol: sb) is a CGS unit of luminance equal to one candela per square centimeter, which corresponds to exactly 10,000 candelas per square meter (cd/m² or nits)."
    },
    {
      question: "How do I convert Foot-candles to Stilbs?",
      answer: "Multiply the foot-candles by the surface diffuse reflectance factor ρ and then by 0.0003426259 (or divide by 2,918.635)."
    },
    {
      question: "How many Stilbs is 1 Foot-candle on a 100% white surface?",
      answer: "1 foot-candle produces approximately 0.0003426259 stilbs (3.426259 × 10⁻⁴ sb) on an ideal diffuse white reflector."
    },
    {
      question: "How many Foot-candles are needed to produce 1 Stilb?",
      answer: "On an ideal 100% diffuse reflector, exactly 2,918.635 foot-candles (approx. 31,415.93 lux) are required to produce 1 stilb of luminance."
    },
    {
      question: "What is the relationship between Stilb and Nit?",
      answer: "1 stilb equals exactly 10,000 nits (1 sb = 10,000 cd/m²)."
    },
    {
      question: "What is the relationship between Stilb and Lambert?",
      answer: "1 stilb equals π lamberts (approx. 3.141593 L), because 1 stilb = 1 cd/cm² while 1 lambert = 1/π cd/cm²."
    },
    {
      question: "Why is the Stilb not commonly used in everyday lighting?",
      answer: "Because 1 stilb represents an extremely bright light level (10,000 cd/m²), ordinary indoor surfaces exhibit fractions of a stilb, making nits or cd/m² far more practical."
    },
    {
      question: "Is Stilb an official SI unit?",
      answer: "No. The official SI unit for luminance is the candela per square meter (cd/m²). The stilb is an obsolete CGS unit."
    }
  ],
  relatedList: [
    { label: "Foot-candle to Nit", from: "foot-candle", to: "nit" },
    { label: "Foot-candle to Lambert", from: "foot-candle", to: "lambert" },
    { label: "Foot-candle to Candela/m²", from: "foot-candle", to: "candela-per-m2" },
    { label: "Lux to Stilb", from: "lux", to: "stilb" }
  ],
  references: [
    "CIE S 017/E:2020: ILV: International Lighting Vocabulary (International Commission on Illumination).",
    "BIPM: The International System of Units (SI), 9th Edition.",
    "Walsh, J. W. T. (1958). 'Photometry'. Dover Publications, New York."
  ]
};
