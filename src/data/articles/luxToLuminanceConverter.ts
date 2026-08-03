import { CustomArticleData } from "./types";

export const luxToLuminanceConverter: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "luminance-converter",
  seoTitle: "Lux to Luminance Converter Hub | Complete Conversion Guide",
  metaDescription: "Universal Lux to Luminance Converter Hub. Convert Lux (lx) to Nits, cd/m², Foot-Lamberts, Lamberts, and Stilbs. Optical formulas, tables, and FAQs.",
  h1: "Lux to Luminance Conversion Hub",
  introduction: [
    "In optical physics, photometric engineering, and display technology, Lux (lx) and Luminance units govern how light interacts with surfaces and human vision. Lux quantifies illuminance—the density of incoming luminous flux incident on a surface area plane (1 lx = 1 lm/m²). Luminance units (such as Nits, cd/m², Foot-Lamberts, Lamberts, and Stilbs) quantify outgoing surface brightness emitted or reflected toward an observer per unit projected area.",
    "Bridging incoming illuminance (lux) and reflected surface luminance requires evaluating the material surface's diffuse reflectance factor (R) and Lambert's cosine law. For a perfectly white matte diffuse surface (R = 1.0), 1 lux of illuminance produces 1 / π cd/m² (approximately 0.31831 Nits or cd/m²). Across standardized photometric software unit factors, 1 lux maps directly to luminance units according to SI and customary scale definitions.",
    "This master technical guide explains the optical conversion equations connecting incident lux to surface luminance across all major units (Nit, cd/m², Foot-Lambert, Lambert, Stilb, Apostilb, Skot), offering reference tables, practical engineering applications, and frequently asked questions."
  ],
  quickAnswer: {
    text: "For a 100% diffuse surface (R = 1), surface Luminance in cd/m² (Nits) equals Lux divided by π (cd/m² = Lux ÷ π ≈ Lux × 0.31831). Equivalent Foot-Lamberts equal Lux ÷ 3.426259.",
    formulaDisplay: "Luminance (cd/m²) = (Lux × Reflectance R) ÷ π",
    subtext: "1 Lux of illuminance on a 100% white diffuse surface yields 0.31831 Nits (cd/m²)."
  },
  aboutSourceUnit: {
    title: "What is Lux (lx)?",
    text: "Lux (symbol: lx) is the SI unit of illuminance, equal to 1 lumen per square meter (1 lx = 1 lm/m²). It measures light arriving at a surface plane, such as sunlight on a desk or streetlight on a roadway."
  },
  aboutTargetUnit: {
    title: "Understanding Luminance Units",
    text: "Luminance measures perceived surface brightness per unit projected area. Official SI unit is Candela per Square Meter (cd/m² or Nit). Regional and historical units include the Foot-Lambert (US cinema/avionics), Lambert and Stilb (CGS physics), Apostilb (European optics), and Skot (scotopic low-light luminance)."
  },
  relationship: "Illuminance (Lux) and Luminance (cd/m²) are related by diffuse surface reflectance R: L (cd/m²) = (Lux × R) / π. Direct conversion factors map lx to cd/m² (0.31831), Foot-Lamberts (0.29186), Lamberts (0.00031416), and Stilbs (0.0001).",
  relationshipTitle: "Master Lux to Luminance Unit Scale (100% Diffuse Reflection)",
  relationshipItems: [
    { label: "1 Lux incident", value: "0.31831 cd/m² (Nit) = 0.29186 fL = 0.000314 L = 0.0001 sb" },
    { label: "10 Lux incident", value: "3.18310 cd/m² (Nit) = 2.91864 fL = 0.003142 L = 0.0010 sb" },
    { label: "100 Lux incident", value: "31.83099 cd/m² (Nit) = 29.18635 fL = 0.031416 L = 0.0100 sb" },
    { label: "500 Lux incident", value: "159.1549 cd/m² (Nit) = 145.9318 fL = 0.15708 L = 0.0500 sb" },
    { label: "1,000 Lux incident", value: "318.3099 cd/m² (Nit) = 291.8635 fL = 0.31416 L = 0.1000 sb" }
  ],
  formula: {
    text: "Calculate reflected surface Luminance from Lux using surface reflectance R (0 to 1) and unit conversion factors.",
    math: "Luminance (cd/m²) = (Lux × R) / π",
    subtext: "Factors for 100% reflectance: cd/m² (× 0.31831), Foot-Lambert (× 0.29186), Lambert (× 0.00031416)."
  },
  formulaTitle: "Lux to Luminance Master Conversion Formula",
  practicalTip: {
    title: "Display Sun-Legibility Ratio",
    text: "To remain legible under 100,000 lux outdoor sunlight, display screens must deliver high luminance (1,000 to 2,000 Nits) or use anti-reflective polarizers to minimize reflected ambient nits."
  },
  expertNote: {
    title: "Emissive vs Reflective Luminance",
    text: "Emissive sources (LED displays, OLED TV panels) output luminance directly in cd/m² (Nits) without ambient light. Reflective objects (paper, signs) generate luminance strictly proportional to incoming lux multiplied by surface reflectance R."
  },
  examples: {
    title: "Step-by-Step Lux to Luminance Worked Examples",
    items: [
      {
        title: "Example 1: Office Paper Document Luminance (Lux to cd/m²)",
        subtitle: "White paper (R = 0.85) receives 500 Lux under office fluorescent lighting. Calculate document luminance in cd/m².",
        steps: [
          "Identify illuminance: 500 lx.",
          "Identify reflectance: R = 0.85.",
          "Apply formula: cd/m² = (500 × 0.85) / 3.14159.",
          "Calculate numerator: 500 × 0.85 = 425.",
          "Divide by π: 425 ÷ 3.14159 = 135.28.",
          "Result: Document luminance is 135.28 cd/m² (Nits)."
        ]
      },
      {
        title: "Example 2: Movie Theater Screen (Lux to Foot-Lamberts)",
        subtitle: "A cinema projector delivers 55 Lux to a theater screen center. Calculate screen luminance in Foot-Lamberts.",
        steps: [
          "Identify illuminance: 55 lx.",
          "Apply conversion: fL = 55 / 3.426259.",
          "Calculate: 55 ÷ 3.426259 = 16.05.",
          "Result: Screen luminance is 16.05 Foot-Lamberts (meets SMPTE spec)."
        ]
      },
      {
        title: "Example 3: Sunlight Wall Reflectance (Lux to Lamberts)",
        subtitle: "Convert 10,000 Lux daylight wall illuminance into Lamberts.",
        steps: [
          "Identify illuminance: 10,000 lx.",
          "Divide by 3,183.09886: 10,000 ÷ 3,183.09886 = 3.14159.",
          "Result: 10,000 Lux equals 3.1416 Lamberts."
        ]
      }
    ]
  },
  table: {
    title: "Universal Lux to Luminance Conversion Matrix (100% Reflectance)",
    headers: ["Incident Lux", "Candela/m² (Nit)", "Foot-Lambert (fL)", "Lambert (L)"],
    rows: [
      { fromVal: "1 lx", toVal: "0.3183 cd/m²", extra: "0.2919 fL", extra2: "0.000314 L" },
      { fromVal: "10 lx", toVal: "3.1831 cd/m²", extra: "2.9186 fL", extra2: "0.003142 L" },
      { fromVal: "50 lx", toVal: "15.9155 cd/m²", extra: "14.5932 fL", extra2: "0.015708 L" },
      { fromVal: "100 lx", toVal: "31.8310 cd/m²", extra: "29.1864 fL", extra2: "0.031416 L" },
      { fromVal: "300 lx", toVal: "95.4930 cd/m²", extra: "87.5591 fL", extra2: "0.094248 L" },
      { fromVal: "500 lx", toVal: "159.1549 cd/m²", extra: "145.9318 fL", extra2: "0.157080 L" },
      { fromVal: "1,000 lx", toVal: "318.3099 cd/m²", extra: "291.8635 fL", extra2: "0.314159 L" },
      { fromVal: "10,000 lx", toVal: "3,183.0989 cd/m²", extra: "2,918.635 fL", extra2: "3.141593 L" }
    ]
  },
  applications: {
    title: "Practical Applications of Lux to Luminance Conversions",
    items: [
      {
        title: "Display & Monitor Auto-Brightness Calibration",
        text: "Consumer electronic displays measure ambient room lux with integrated sensors and dynamically adjust panel nits to balance readability with power savings."
      },
      {
        title: "Architectural Visual Comfort & Glare Control",
        text: "Daylighting design software evaluates Unified Glare Rating (UGR) by converting window solar lux into wall and ceiling surface luminance in cd/m²."
      },
      {
        title: "Roadway Sign & Pavement Safety Design",
        text: "Traffic safety engineers convert headlight illuminance lux into retroreflective sign luminance (cd/m²) to ensure night driving visibility compliance."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Lux to Luminance Conversion",
    items: [
      "Confusing Illuminance (Lux) with Luminance (Nits/cd/m²): Lux is incoming light per area; Luminance is outgoing reflected/emitted surface brightness.",
      "Forgetting the 1/π factor for diffuse Lambertian surfaces: Incident light scatters into a 3D hemisphere (2π steradians), introducing π into the equation.",
      "Ignoring surface reflectance R: Dark materials reflect significantly less luminance than white materials under identical lux."
    ]
  },
  faqs: [
    {
      question: "What is the difference between Lux and Luminance?",
      answer: "Lux measures light arriving at a surface (illuminance); Luminance measures surface brightness emitted or reflected toward an observer."
    },
    {
      question: "How do I convert Lux to Nits (cd/m²)?",
      answer: "For a 100% white diffuse surface, multiply Lux by 0.31831 (or Nits = (Lux × Reflectance) ÷ π)."
    },
    {
      question: "How do I convert Lux to Foot-Lamberts?",
      answer: "Divide Lux by 3.426259 (Foot-Lamberts = Lux ÷ 3.426259)."
    },
    {
      question: "What is 500 Lux in cd/m² on a 100% white surface?",
      answer: "500 ÷ 3.14159 = approximately 159.15 cd/m² (Nits)."
    },
    {
      question: "What is 1 Foot-Lambert in Nits?",
      answer: "1 Foot-Lambert equals approximately 3.426259 Nits (cd/m²)."
    },
    {
      question: "Why does the formula divide by π?",
      answer: "Because a perfectly diffuse (Lambertian) surface reflects light uniformly across a 3D hemisphere, integrating over π steradians."
    },
    {
      question: "What is a Stilb?",
      answer: "The Stilb is a CGS unit of luminance equal to 1 candela per square centimeter (10,000 cd/m²)."
    },
    {
      question: "How many Nits does a smartphone screen need in direct sunlight?",
      answer: "In outdoor direct sunlight (100,000 lux), a screen needs at least 1,000 to 1,500 Nits to maintain visual contrast."
    }
  ],
  relatedList: [
    { label: "Lux to Nit", from: "lux", to: "nit" },
    { label: "Lux to Candela/m²", from: "lux", to: "candela-per-m2" },
    { label: "Lux to Foot-Lambert", from: "lux", to: "foot-lambert" },
    { label: "Lux to Illuminance Converter", from: "lux", to: "illuminance-converter" }
  ],
  references: [
    "CIE e-ILV: International Lighting Vocabulary (Terms 17-21-060 & 17-21-050).",
    "ISO 9241-307: Ergonomics of Human-System Interaction—Visual Display Requirements.",
    "BIPM SI Brochure: Units for Photometry and Radiometry."
  ]
};
