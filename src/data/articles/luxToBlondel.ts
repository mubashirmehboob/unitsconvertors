import { CustomArticleData } from "./types";

export const luxToBlondel: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "blondel",
  seoTitle: "Lux (lx) to Blondel Converter & Photometry Formula | UnitsConvertors.com",
  metaDescription: "Convert Lux (illuminance) to Blondel (luminance) with scientific precision. Explore Lambertian diffuse reflection formulas, SI to CGS luminance relations, and optical tables.",
  canonicalUrl: "https://unitsconvertors.com/en/lux-to-blondel",
  h1: "Lux (lx) to Blondel Converter",
  introduction: [
    "In optical photometry and lighting design, lighting engineers distinguish between incident light falling onto a surface (illuminance) and visible brightness emitted or reflected away from that surface (luminance).",
    "The lux (symbol: lx) is the standard SI derived unit of illuminance, defining a luminous flux density of one lumen per square meter (1 lx = 1 lm/m²). The blondel (symbol: blondel), named after French physicist and engineer André Blondel, is a non-SI unit of luminance identical to the apostilb, defined as 1/π candela per square meter (1 blondel = 1/π cd/m² ≈ 0.3183 cd/m²).",
    "On an ideal, perfectly diffuse (Lambertian) matte surface with 100% reflectance (reflectance factor ρ = 1.0), an incident illuminance of 1 lux produces a reflected surface luminance of exactly 1 blondel (1 lx = 1 blondel). This guide explains the optical principles of diffuse reflection, the exact mathematical conversion, step-by-step worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "For a perfectly diffuse white surface with 100% reflectance (ρ = 1.0), 1 lux produces exactly 1 blondel of surface luminance (1 lx = 1 blondel). For real surfaces, multiply illuminance in lux by the surface diffuse reflectance factor ρ (blondel = lx × ρ).",
    formulaDisplay: "L_{\\text{blondel}} = E_{\\text{lux}} \\times \\rho \\quad | \\quad 1 \\text{ blondel} = \\frac{1}{\\pi} \\text{ cd/m}^2 \\approx 0.318309886 \\text{ cd/m}^2",
    subtext: "E_lux is incident illuminance in lux; ρ is the surface diffuse reflectance factor (0.0 to 1.0)."
  },
  aboutSourceUnit: {
    title: "Understanding Lux (lx)",
    text: "The lux (symbol: lx) is the SI base-coherent unit of illuminance, quantifying the total luminous flux arriving on a one-square-meter area (1 lx = 1 lm/m²). It measures light incident on task surfaces regardless of whether the material absorbs, reflects, or transmits that light."
  },
  aboutTargetUnit: {
    title: "Understanding Blondel",
    text: "The blondel is a historical photometric unit of luminance named in honor of French physicist André Blondel. It is defined as the luminance of a uniform Lambertian diffuser emitting one lumen per square meter, which equals 1/π candela per square meter (0.318309886 cd/m²). The blondel is functionally identical to the apostilb."
  },
  relationship: "Lux measures incident light arriving at a plane (illuminance), whereas blondel measures reflected or emitted light leaving a surface (luminance). For an ideal Lambertian diffuser with 100% reflectance (ρ = 1.0), 1 lux of illuminance directly produces 1 blondel of luminance. If the surface reflects only 50% of incident light (ρ = 0.50), 100 lux produces 50 blondels.",
  relationshipTitle: "Lux to Blondel Equivalence Scale (Ideal White Diffuser ρ = 1.0)",
  relationshipItems: [
    { label: "1 Lux (lx)", value: "1.0 Blondel = 0.3183 cd/m²" },
    { label: "10 Lux (lx)", value: "10.0 Blondels = 3.183 cd/m²" },
    { label: "100 Lux (lx)", value: "100.0 Blondels = 31.83 cd/m²" },
    { label: "500 Lux (lx)", value: "500.0 Blondels = 159.15 cd/m²" },
    { label: "1,000 Lux (lx)", value: "1,000.0 Blondels = 318.31 cd/m²" }
  ],
  formula: {
    text: "To determine luminance in blondels, multiply incident illuminance in lux by the surface diffuse reflectance factor ρ.",
    math: "L_{\\text{blondel}} = E_{\\text{lux}} \\times \\rho \\qquad | \\qquad L_{\\text{cd/m}^2} = \\frac{E_{\\text{lux}} \\times \\rho}{\\pi}",
    subtext: "Where ρ is the dimensionless diffuse reflectance ratio between 0.0 (complete absorption) and 1.0 (total reflection)."
  },
  formulaTitle: "Lux to Blondel Diffuse Reflection Formula",
  practicalTip: {
    title: "Why Blondel and Apostilb Match Lux 1-to-1",
    text: "The blondel and apostilb were specifically designed so that on a 100% reflective diffuse surface, 1 lux of illuminance produces exactly 1 unit of luminance, removing the factor of π from everyday visual calculations."
  },
  expertNote: {
    title: "André Blondel's Photometric Contributions",
    text: "André Blondel pioneered the system of photometric units adopted at the International Electrical Congress of Geneva in 1896. His namesake unit incorporates the 1/π factor to simplify calculations for perfectly scattering matte surfaces."
  },
  examples: {
    title: "Step-by-Step Lux to Blondel Worked Examples",
    items: [
      {
        title: "Example 1: White Matte Wall under Interior Lighting",
        subtitle: "Calculate surface luminance in blondels for a matte painted wall (ρ = 0.75) under 400 lux ambient illumination.",
        steps: [
          "Identify incident illuminance: E = 400 lx.",
          "Identify wall reflectance factor: ρ = 0.75 (75% diffuse reflection).",
          "Apply formula: L_blondel = E_lux × ρ = 400 × 0.75.",
          "Perform multiplication: 400 × 0.75 = 300.",
          "Final Result: The wall exhibits a surface luminance of 300 blondels (approx. 95.49 cd/m²)."
        ]
      },
      {
        title: "Example 2: Reading Standard Book Page (ρ = 0.80)",
        subtitle: "Determine page brightness in blondels under 500 lux desk task lighting.",
        steps: [
          "Identify desktop illuminance: E = 500 lx.",
          "Identify paper reflectance: ρ = 0.80.",
          "Calculate: L_blondel = 500 × 0.80 = 400.",
          "Final Result: The book page has a luminance of 400 blondels (127.32 cd/m²)."
        ]
      },
      {
        title: "Example 3: Dark Granite Countertop (ρ = 0.15)",
        subtitle: "Find the surface luminance in blondels of dark granite under 600 lux kitchen illumination.",
        steps: [
          "Identify illuminance: E = 600 lx.",
          "Identify material reflectance: ρ = 0.15.",
          "Calculate: L_blondel = 600 × 0.15 = 90.",
          "Final Result: The countertop reflects 90 blondels (28.65 cd/m²)."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Blondel Conversion Table for Common Materials",
    headers: ["Incident Illuminance (Lux)", "Material & Finish", "Diffuse Reflectance (ρ)", "Luminance (Blondel)", "SI Luminance (cd/m²)"],
    rows: [
      { fromVal: "20 lx", toVal: "Black Velvet Cloth", extra: "0.01 (1%)", extra2: "0.20 blondels", extra3: "0.064 cd/m²" },
      { fromVal: "50 lx", toVal: "Dark Concrete Pavement", extra: "0.20 (20%)", extra2: "10.00 blondels", extra3: "3.183 cd/m²" },
      { fromVal: "100 lx", toVal: "Natural Oak Wood Flooring", extra: "0.35 (35%)", extra2: "35.00 blondels", extra3: "11.141 cd/m²" },
      { fromVal: "200 lx", toVal: "Light Gray Linoleum", extra: "0.50 (50%)", extra2: "100.00 blondels", extra3: "31.831 cd/m²" },
      { fromVal: "300 lx", toVal: "Classroom Whiteboard", extra: "0.80 (80%)", extra2: "240.00 blondels", extra3: "76.394 cd/m²" },
      { fromVal: "500 lx", toVal: "Standard Matte White Paper", extra: "0.85 (85%)", extra2: "425.00 blondels", extra3: "135.282 cd/m²" },
      { fromVal: "750 lx", toVal: "Pure Barium Sulfate Target", extra: "0.98 (98%)", extra2: "735.00 blondels", extra3: "233.958 cd/m²" },
      { fromVal: "1,000 lx", toVal: "Ideal Lambertian Diffuser", extra: "1.00 (100%)", extra2: "1,000.00 blondels", extra3: "318.310 cd/m²" },
      { fromVal: "5,000 lx", toVal: "Fresh Mountain Snowpack", extra: "0.88 (88%)", extra2: "4,400.00 blondels", extra3: "1,400.563 cd/m²" },
      { fromVal: "10,000 lx", toVal: "White Diffuse Target (Overcast Day)", extra: "1.00 (100%)", extra2: "10,000.00 blondels", extra3: "3,183.099 cd/m²" }
    ]
  },
  applications: {
    title: "Key Applications of Lux and Blondel Calculations",
    items: [
      {
        title: "Historical French Architectural & Optical Literature",
        text: "Classic European lighting treatises express surface brightness targets in blondels to directly correlate incident lux with perceived room luminance."
      },
      {
        title: "Visual Contrast & Ergonomic Task Design",
        text: "Human factors specialists evaluate contrast ratios between printed text and background paper by comparing reflected blondel values."
      },
      {
        title: "Photometric Instrument Calibration",
        text: "Metrologists calibrate optical luminance meters against calibrated diffuse reflectance standards under known illuminance levels."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Lux to Blondel Conversions",
    items: [
      "Assuming 1 lux equals 1 blondel for every surface without accounting for the diffuse reflectance factor ρ.",
      "Treating illuminance (lux, light landing on a surface) and luminance (blondel, light reflected off a surface) as interchangeable quantities.",
      "Confusing the blondel (1/π cd/m²) with the SI unit of luminance (candela per square meter, or nit).",
      "Applying Lambertian formulas to specular (glossy or mirror-like) surfaces where reflection is directional rather than diffuse."
    ]
  },
  faqs: [
    {
      question: "What is a Blondel in lighting?",
      answer: "A blondel is a non-SI unit of luminance named after André Blondel, equal to 1/π candela per square meter (approx. 0.3183 cd/m²). It is identical to the apostilb."
    },
    {
      question: "How do I convert Lux to Blondel?",
      answer: "Multiply the illuminance in lux by the surface diffuse reflectance factor ρ. For a 100% white diffuse surface (ρ = 1.0), 1 lux equals exactly 1 blondel."
    },
    {
      question: "Is the Blondel identical to the Apostilb?",
      answer: "Yes, both the blondel and the apostilb represent the same physical luminance: 1/π cd/m² (or 1 lumen per square meter emitted by a Lambertian surface)."
    },
    {
      question: "How many candelas per square meter is 1 Blondel?",
      answer: "1 blondel equals 1/π cd/m², which is approximately 0.318309886 candelas per square meter (or nits)."
    },
    {
      question: "Why was the Blondel unit created?",
      answer: "The blondel was introduced to simplify calculations by eliminating π when converting between illuminance in lux and reflected luminance from diffuse surfaces."
    },
    {
      question: "What is the luminance of white paper (80% reflectance) under 500 lux?",
      answer: "Under 500 lux, white paper with 80% reflectance produces 400 blondels (500 × 0.80), corresponding to approximately 127.32 cd/m²."
    },
    {
      question: "Can I convert Lux directly to Blondel without knowing the surface material?",
      answer: "Only for a theoretical 100% reflecting Lambertian surface. For physical materials, you must know the reflectance percentage to calculate true reflected luminance."
    },
    {
      question: "Is Blondel an official SI unit?",
      answer: "No. The official SI unit for luminance is the candela per square meter (cd/m²). The blondel is an obsolete historical unit."
    }
  ],
  relatedList: [
    { label: "Lux to Apostilb", from: "lux", to: "apostilb" },
    { label: "Lux to Candela/m²", from: "lux", to: "candela-per-m2" },
    { label: "Lux to Nit", from: "lux", to: "nit" },
    { label: "Lux to Foot-candle", from: "lux", to: "foot-candle" }
  ],
  references: [
    "CIE S 017/E:2020: ILV: International Lighting Vocabulary (International Commission on Illumination).",
    "BIPM: The International System of Units (SI), 9th Edition.",
    "Blondel, A. (1896). 'Sur les unités photométriques'. Congrès International des Électriciens, Genève."
  ]
};
