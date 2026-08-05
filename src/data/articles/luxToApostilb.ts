import { CustomArticleData } from "./types";

export const luxToApostilb: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "apostilb",
  seoTitle: "Lux (lx) to Apostilb (asb) Converter & Photometry Formula | UnitsConvertors.com",
  metaDescription: "Convert Lux (illuminance) to Apostilb (luminance) accurately. Learn Lambertian surface reflectance formulas, SI to CGS luminance relations, and optical tables.",
  h1: "Lux (lx) to Apostilb (asb) Converter",
  introduction: [
    "In optical photometry, vision science, and historic architectural lighting, surface illumination is measured in terms of both incident light flux and reflected surface brightness.",
    "The lux (symbol: lx) is the SI unit of illuminance, quantifying the total luminous flux incident on a surface per square meter (1 lx = 1 lm/m²). The apostilb (symbol: asb, also known as the blondel) is a CGS-derived unit of surface luminance defined as 1/π candela per square meter (1 asb = 0.3183 cd/m²).",
    "For an ideal, perfectly diffuse (Lambertian) reflecting surface with 100% reflectance (reflectance factor ρ = 1.0), an incident illuminance of 1 lux produces a reflected surface luminance of exactly 1 apostilb (1 lx = 1 asb). This guide explains Lambertian scattering physics, surface reflectance formulas, calculation examples, and complete photometric reference tables."
  ],
  quickAnswer: {
    text: "For a perfectly diffuse white surface with 100% reflectance (ρ = 1.0), 1 lux produces exactly 1 apostilb of surface luminance (1 lx = 1 asb). For real surfaces, multiply illuminance in lux by the surface reflectance factor ρ (asb = lx × ρ).",
    formulaDisplay: "L_{\\text{asb}} = E_{\\text{lux}} \\times \\rho \\quad | \\quad 1 \\text{ asb} = \\frac{1}{\\pi} \\text{ cd/m}^2 \\approx 0.318309886 \\text{ cd/m}^2",
    subtext: "E_lux is illuminance in lux; ρ is diffuse surface reflectance (0.0 to 1.0)."
  },
  aboutSourceUnit: {
    title: "Understanding Lux (lx)",
    text: "Lux is the standard SI derived unit of illuminance (1 lx = 1 lm/m²). It measures the total amount of eye-weighted visible light striking a given surface area, independent of the surface's material or color."
  },
  aboutTargetUnit: {
    title: "Understanding Apostilb (asb)",
    text: "The apostilb (symbol: asb) is an obsolete non-SI photometric unit of luminance, named after the Greek prefix 'apo-' (from/off) and 'stilb' (bright). Equal to 1/π candela per square meter (or 1 lumen per square meter emitted by a uniform Lambertian diffuser), it simplifies surface brightness calculations when illuminance is measured in lux."
  },
  relationship: "Lux measures incident light arriving at a surface (illuminance), whereas apostilb measures reflected light leaving a surface (luminance). On an ideal, perfectly reflecting Lambertian diffuser (ρ = 1.0), 1 lux of illuminance creates 1 apostilb of luminance. For a gray card with 18% reflectance (ρ = 0.18), an illuminance of 100 lux yields 18 apostilbs.",
  relationshipTitle: "Lux vs Apostilb Scale Comparison (Ideal White Diffuser ρ = 1.0)",
  relationshipItems: [
    { label: "1 Lux (lx)", value: "1.0 Apostilb (asb) = 0.3183 cd/m²" },
    { label: "10 Lux (lx)", value: "10.0 Apostilbs (asb) = 3.183 cd/m²" },
    { label: "100 Lux (lx)", value: "100.0 Apostilbs (asb) = 31.83 cd/m²" },
    { label: "500 Lux (lx)", value: "500.0 Apostilbs (asb) = 159.15 cd/m²" },
    { label: "1,000 Lux (lx)", value: "1,000.0 Apostilbs (asb) = 318.31 cd/m²" }
  ],
  formula: {
    text: "Calculate luminance L in apostilbs by multiplying incident illuminance E in lux by the surface diffuse reflectance factor ρ.",
    math: "L_{\\text{asb}} = E_{\\text{lux}} \\times \\rho \\qquad | \\qquad L_{\\text{cd/m}^2} = \\frac{E_{\\text{lux}} \\times \\rho}{\\pi}",
    subtext: "Where ρ is the dimensionless surface reflectance ratio between 0.0 (total absorption) and 1.0 (total reflection)."
  },
  formulaTitle: "Lux to Apostilb Surface Reflectance Formula",
  practicalTip: {
    title: "18% Neutral Gray Card Rule",
    text: "In photography, a standard 18% neutral gray calibration target illuminated by 1,000 lux produces a surface luminance of exactly 180 apostilbs (57.3 cd/m²)."
  },
  expertNote: {
    title: "Why Apostilb Simplified Historical Photometry",
    text: "Before modern digital computers, incorporating 1/π into the definition of the apostilb eliminated π from diffuse reflection equations, allowing optical engineers to calculate reflected luminance directly in apostilbs by simply multiplying lux by reflectance percentage."
  },
  examples: {
    title: "Step-by-Step Lux to Apostilb Worked Examples",
    items: [
      {
        title: "Example 1: Office Paper Reading Surface (80% Reflectance)",
        subtitle: "Calculate reflected luminance in apostilbs for white office paper (ρ = 0.80) under 500 lux illuminance.",
        steps: [
          "Identify incident illuminance: E = 500 lx.",
          "Identify surface reflectance: ρ = 0.80 (80% reflectance).",
          "Apply formula: L_asb = 500 × 0.80.",
          "Perform multiplication: 500 × 0.80 = 400.",
          "Final Result: The paper has a luminance of 400 apostilbs (equivalent to 127.32 cd/m²)."
        ]
      },
      {
        title: "Example 2: Photographic Neutral Gray Card (18% Reflectance)",
        subtitle: "Calculate surface luminance in apostilbs for an 18% gray target under 2,500 lux studio lighting.",
        steps: [
          "Identify illuminance: E = 2,500 lx.",
          "Identify reflectance: ρ = 0.18.",
          "Apply formula: L_asb = 2,500 × 0.18 = 450.",
          "Final Result: The gray card emits 450 apostilbs of surface luminance."
        ]
      },
      {
        title: "Example 3: Asphalt Road Surface (10% Reflectance)",
        subtitle: "Calculate road surface luminance in apostilbs illuminated by 30 lux streetlight fixtures.",
        steps: [
          "Identify streetlight illuminance: E = 30 lx.",
          "Identify asphalt pavement reflectance: ρ = 0.10.",
          "Calculate: L_asb = 30 × 0.10 = 3.0.",
          "Final Result: The road surface exhibits a luminance of 3.0 apostilbs (0.955 cd/m²)."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Apostilb Conversion Table across Typical Surface Reflectance Values",
    headers: ["Incident Illuminance (Lux)", "Surface Material", "Reflectance Factor (ρ)", "Reflected Luminance (Apostilb)", "SI Luminance (cd/m²)"],
    rows: [
      { fromVal: "10 lx", toVal: "Dark Velvet / Black Felt", extra: "0.02 (2%)", extra2: "0.20 asb", extra3: "0.064 cd/m²" },
      { fromVal: "50 lx", toVal: "Wet Asphalt Pavement", extra: "0.08 (8%)", extra2: "4.00 asb", extra3: "1.273 cd/m²" },
      { fromVal: "100 lx", toVal: "Acoustic Ceiling Tile", extra: "0.60 (60%)", extra2: "60.00 asb", extra3: "19.10 cd/m²" },
      { fromVal: "200 lx", toVal: "Natural Wood Desk Surface", extra: "0.40 (40%)", extra2: "80.00 asb", extra3: "25.46 cd/m²" },
      { fromVal: "500 lx", toVal: "Standard Office White Paper", extra: "0.80 (80%)", extra2: "400.00 asb", extra3: "127.32 cd/m²" },
      { fromVal: "750 lx", toVal: "Matte White Projection Screen", extra: "0.85 (85%)", extra2: "637.50 asb", extra3: "202.92 cd/m²" },
      { fromVal: "1,000 lx", toVal: "Ideal White Diffuser Target", extra: "1.00 (100%)", extra2: "1,000.00 asb", extra3: "318.31 cd/m²" },
      { fromVal: "2,500 lx", toVal: "High-Gloss White Enamel", extra: "0.90 (90%)", extra2: "2,250.00 asb", extra3: "716.20 cd/m²" },
      { fromVal: "5,000 lx", toVal: "Fresh Ground Snow Surface", extra: "0.85 (85%)", extra2: "4,250.00 asb", extra3: "1,352.82 cd/m²" },
      { fromVal: "10,000 lx", toVal: "Ideal White Target (Full Sun)", extra: "1.00 (100%)", extra2: "10,000.00 asb", extra3: "3,183.10 cd/m²" }
    ]
  },
  applications: {
    title: "Practical Applications of Lux & Apostilb Photometry",
    items: [
      {
        title: "Historical European Architectural Lighting",
        text: "European lighting codes originally specified desktop visual brightness targets directly in apostilbs to account for paper reflectance."
      },
      {
        title: "Display & Projection Screen Calibration",
        text: "Optical engineers convert projector illuminance (lux) into reflected screen luminance (apostilbs or nits) to optimize gain coefficients."
      },
      {
        title: "Roadway & Tunnel Lighting Safety",
        text: "Civil transportation engineers calculate pavement luminance in apostilbs (or cd/m²) from streetlight lux readings to eliminate driver glare."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Lux to Apostilb Calculations",
    items: [
      "Assuming 1 lux always equals 1 apostilb for all real-world materials (true ONLY for an ideal 100% white Lambertian surface).",
      "Confusing incident illuminance (lux) with emitted or reflected luminance (apostilb or candela per m²).",
      "Forgetting to multiply by surface reflectance factor ρ when calculating reflected apostilbs.",
      "Confusing apostilb (1/π cd/m²) with nit (1 cd/m²) or stilb (10,000 cd/m²)."
    ]
  },
  faqs: [
    {
      question: "What is an Apostilb (asb)?",
      answer: "The apostilb is a CGS-derived photometric unit of luminance equal to 1/π candela per square meter (approx. 0.3183 cd/m²)."
    },
    {
      question: "How do I convert Lux to Apostilb for a white surface?",
      answer: "For an ideal 100% white surface (reflectance ρ = 1.0), 1 lux equals 1 apostilb. For other surfaces, multiply lux by the reflectance factor (asb = lx × ρ)."
    },
    {
      question: "How many cd/m² is 1 Apostilb?",
      answer: "1 apostilb equals 1/π candela per square meter, or approximately 0.318309886 cd/m²."
    },
    {
      question: "What is another name for Apostilb?",
      answer: "The apostilb is also historically known as the blondel."
    },
    {
      question: "What is the difference between Lux and Apostilb?",
      answer: "Lux measures light arriving at a surface (illuminance), while apostilb measures light leaving a diffuse surface (luminance)."
    },
    {
      question: "What is 100 lux on an 80% white paper in apostilbs?",
      answer: "100 lux × 0.80 reflectance equals 80 apostilbs (25.46 cd/m²)."
    },
    {
      question: "Is the apostilb an official SI unit?",
      answer: "No. The apostilb is an obsolete non-SI unit. Modern SI photometry uses candela per square meter (cd/m² or nit) for luminance."
    },
    {
      question: "How does apostilb relate to lambert?",
      answer: "1 lambert (L) equals 10,000 apostilbs (1 L = 10,000 asb)."
    }
  ],
  relatedList: [
    { label: "Lux to Candela/m²", from: "lux", to: "candela-per-m2" },
    { label: "Lux to Lambert", from: "lux", to: "lambert" },
    { label: "Lux to Foot-candle", from: "lux", to: "foot-candle" },
    { label: "Lux to Nit", from: "lux", to: "nit" }
  ],
  references: [
    "CIE S 017/E:2011 ILV: International Lighting Vocabulary, Commission Internationale de l'Éclairage.",
    "ISO 80000-7:2019 Quantities and units — Part 7: Light and radiation.",
    "IESNA Lighting Handbook (10th Edition), Illuminating Engineering Society of North America."
  ]
};
