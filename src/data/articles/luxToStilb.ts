import { CustomArticleData } from "./types";

export const luxToStilb: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "stilb",
  seoTitle: "Lux to Stilb Engineering Calculation (lx to sb) | UnitsConvertors.com",
  metaDescription: "Calculate Stilb (cd/cm²) from Lux using surface reflectance parameters. Learn CGS luminance formulas, high-power arc welding safety, laser optics, and FAQs.",
  h1: "Lux to Stilb Engineering Calculation",
  introduction: [
    "Lux (lx) and Stilb (sb) are photometric units operating across vastly different intensity scales. Lux is the SI unit of illuminance, measuring luminous flux incident on a surface per square meter (1 lx = 1 lm/m²). The Stilb is the historic CGS (centimeter-gram-second) unit of luminance, defined as one candela per square centimeter (1 sb = 1 cd/cm² = 10,000 cd/m²).",
    "Because lux measures light arriving per square meter while the Stilb measures extreme directional intensity emitted or reflected per square centimeter, converting between them requires specifying the surface reflectance factor ($R$, where $0 \le R \le 1$) and incorporating both Lambertian scattering ($1/\pi$) and CGS area scaling ($10,000\text{ cm}^2/\text{m}^2$). For a 100% white diffuse surface ($R = 1.0$), luminance in Stilbs ($L_{\text{Stilb}}$) is calculated by dividing incident illuminance in lux ($E$) by $10,000 \times \pi$ ($\approx 31,415.93$): $L_{\text{Stilb}} = (E \times R) / (10,000 \times \pi) \approx E \times R \times 3.1831 \times 10^{-5}$.",
    "This calculation represents a Type B conditional engineering transformation rather than a direct unit conversion. This guide details high-power electric arc welding safety, solar concentrator optics, laser plasma characterization, step-by-step calculations, and reference tables."
  ],
  quickAnswer: {
    text: "Lux measures incident illuminance, while Stilb measures high-intensity CGS surface luminance (1 sb = 1 cd/cm² = 10,000 cd/m²). Therefore, there is no fixed conversion ratio between lux and stilbs. For a diffuse surface with reflectance R, Stilb = (Lux × R) ÷ (10,000 × π). For a 100% white surface (R = 1.0), 1 Lux produces ~0.00003183 Stilbs (3.183 × 10⁻⁵ sb).",
    formulaDisplay: "Stilb = (lx × R) ÷ (10,000 × π) ≈ lx × R × 3.1831 × 10⁻⁵",
    subtext: "For a 100% white diffuse surface (R = 1.0), 31,415.9 Lux yields 1.0 Stilb."
  },
  aboutSourceUnit: {
    title: "What is a Lux (lx)?",
    text: "The Lux (symbol: lx) is the official SI unit of illuminance. Defined as 1 lm/m², it quantifies light density arriving at a target surface plane."
  },
  aboutTargetUnit: {
    title: "Understanding the Stilb (sb)",
    text: "The Stilb (symbol: sb) is a CGS unit of luminance introduced by André-Eugène Blondel. Defined as one candela per square centimeter (1 sb = 1 cd/cm² = 10,000 cd/m²), it is used to quantify extremely bright light sources (the sun, carbon arc lamps, electric welding arcs, plasma filaments)."
  },
  relationship: "The transformation combines surface reflectance R, Lambertian solid angle scattering (1/π), and the CGS area factor of 10,000 cm²/m². Reflected Stilbs = (Lux × R) / (10,000 × π).",
  relationshipTitle: "Lux to Stilb Scale Ratios across Extreme Photometric Environments",
  relationshipItems: [
    { label: "1 lx on 100% Diffuser (R = 1.0)", value: "0.0000318 sb (3.183 × 10⁻⁵ sb - Lunar night baseline)" },
    { label: "10,000 lx on 100% Diffuser (R = 1.0)", value: "0.3183 sb (Open daylight indirect shade surface)" },
    { label: "31,416 lx on 100% Diffuser (R = 1.0)", value: "1.0000 sb (Exact 1.0 Stilb reference benchmark)" },
    { label: "100,000 lx on White Target (R = 0.90)", value: "2.8648 sb (Direct summer noon sun reflection on white surface)" },
    { label: "Solar Disc Surface Core (Direct Source)", value: "150,000 sb (Direct sun disk luminance baseline)" }
  ],
  formula: {
    text: "Multiply incident illuminance in Lux by surface reflectance R (0.0 to 1.0) and divide by 31,415.9265 (or multiply by 0.00003183099).",
    math: "Stilb (sb) = (lx × R) / (10000 × π)",
    subtext: "To convert Stilbs to SI cd/m²: cd/m² = sb × 10,000."
  },
  formulaTitle: "Lux to Stilb Conversion Formula",
  practicalTip: {
    title: "Stilb to SI Nit Conversion Rule",
    text: "Because 1 Stilb equals 10,000 Nits (cd/m²), 1 Stilb is an extraordinarily bright surface luminance. The surface of a clear sun disc is ~150,000 sb, while carbon arc welding reaches ~10,000 sb to 50,000 sb."
  },
  expertNote: {
    title: "ISO 80000-7 Deprecation of CGS Stilb",
    text: "Modern international standards deprecate the Stilb in favor of SI Candela per Square Meter (cd/m²). To convert Stilb to cd/m², multiply by 10,000."
  },
  examples: {
    title: "Step-by-Step lx to sb Engineering Worked Examples",
    items: [
      {
        title: "Example 1: Solar Concentrator Target Plane",
        subtitle: "A solar concentrator mirror delivers 100,000 Lux to a ceramic receiver plate (reflectance R = 0.90). Calculate surface luminance in Stilbs.",
        steps: [
          "Identify illuminance: 100,000 lx.",
          "Identify reflectance: R = 0.90.",
          "Multiply: 100,000 × 0.90 = 90,000.",
          "Divide by 31,415.9265: 90,000 ÷ 31,415.9265 = 2.86478.",
          "Final Result: The receiver surface exhibits 2.86 Stilbs."
        ]
      },
      {
        title: "Example 2: Industrial Laser Inspection White Tile",
        subtitle: "Calculate surface luminance in Stilbs for a white calibration tile (R = 1.0) under 31,415.9 Lux illuminance.",
        steps: [
          "Identify illuminance: 31,415.93 lx.",
          "Identify reflectance: R = 1.0.",
          "Calculate: 31,415.93 ÷ 31,415.93 = 1.0.",
          "Final Result: 31,415.9 Lux yields exactly 1.0 Stilb."
        ]
      },
      {
        title: "Example 3: Indoor High-Bay Industrial Lighting",
        subtitle: "Calculate Stilbs for a white floor surface (R = 0.50) illuminated to 1,000 Lux.",
        steps: [
          "Identify illuminance: 1,000 lx.",
          "Reflectance R = 0.50.",
          "Calculate: (1,000 × 0.50) ÷ 31,415.9265 = 500 ÷ 31,415.9265 = 0.015915.",
          "Final Result: The floor reflects 0.0159 Stilbs."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Stilb Reflection Reference Table",
    headers: ["Incident Lux", "100% White (R=1.0)", "90% Target (R=0.90)", "Equivalent cd/m² (R=1.0)", "High-Intensity Context"],
    rows: [
      { fromVal: "1 lx", toVal: "0.0000318 sb", extra: "0.0000286 sb", extra2: "0.318 cd/m²", extra3: "Full moon clear sky surface" },
      { fromVal: "100 lx", toVal: "0.003183 sb", extra: "0.002865 sb", extra2: "31.831 cd/m²", extra3: "Warehouse floor reflection" },
      { fromVal: "1,000 lx", toVal: "0.031831 sb", extra: "0.028648 sb", extra2: "318.310 cd/m²", extra3: "Precision inspection bench" },
      { fromVal: "10,000 lx", toVal: "0.318310 sb", extra: "0.286479 sb", extra2: "3,183.099 cd/m²", extra3: "Indirect open daylight in shade" },
      { fromVal: "31,415.9 lx", toVal: "1.000000 sb", extra: "0.900000 sb", extra2: "10,000.00 cd/m²", extra3: "1.0 Stilb reference benchmark" },
      { fromVal: "100,000 lx", toVal: "3.183099 sb", extra: "2.864789 sb", extra2: "31,830.989 cd/m²", extra3: "Direct clear noon tropical sunlight" },
      { fromVal: "1,000,000 lx", toVal: "31.830989 sb", extra: "28.647889 sb", extra2: "318,309.89 cd/m²", extra3: "Concentrated solar furnace focal plane" }
    ]
  },
  applications: {
    title: "Industry Applications of Lux to Stilb Calculations",
    items: [
      {
        title: "High-Power Arc Welding & Eye Protection Filters",
        text: "Safety engineers evaluate arc welding glare in Stilbs to specify shade numbers for auto-darkened welding helmets."
      },
      {
        title: "Concentrated Solar Power (CSP) Tower Optics",
        text: "Solar thermal engineers calculate target central receiver brightness in Stilbs from heliostat field lux focus."
      },
      {
        title: "Ultra-High Intensity Laser Plasma Research",
        text: "Plasma physicists characterize high-luminance spark filaments in Stilbs during high-energy laser pulse experiments."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Calculating Stilbs from Lux",
    items: [
      "Assuming 1 Lux equals 1 Stilb: 1 Stilb equals 10,000 cd/m² (equal to 31,415.9 lux on a 100% white surface).",
      "Confusing Stilb (luminance cd/cm²) with Phot (illuminance lm/cm²): Phot is incident flux; Stilb is emitted/reflected directional intensity.",
      "Forgetting surface reflectance R: Omitting R leads to massive over-calculation on non-white targets."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Lux to Stilbs?",
      answer: "The formula is: Stilbs = (Lux × Reflectance R) ÷ (10,000 × π)."
    },
    {
      question: "How many Stilbs does 1 Lux yield on a 100% white surface?",
      answer: "On a 100% white diffuse surface, 1 Lux yields approximately 0.00003183 Stilbs (3.183 × 10⁻⁵ sb)."
    },
    {
      question: "What is a Stilb?",
      answer: "The Stilb (sb) is a CGS unit of luminance equal to one candela per square centimeter (1 sb = 1 cd/cm² = 10,000 cd/m²)."
    },
    {
      question: "How many Lux are needed to produce 1 Stilb on a 100% white surface?",
      answer: "Exactly 10,000 × π ≈ 31,415.93 Lux."
    },
    {
      question: "How do I convert Stilbs to SI Nits (cd/m²)?",
      answer: "Multiply Stilbs by 10,000 (e.g., 1.5 sb = 15,000 cd/m²)."
    },
    {
      question: "Why is the Stilb used for arc welding and solar research?",
      answer: "Because high-energy sources emit thousands of cd/cm², making the Stilb a convenient scale compared to millions of cd/m²."
    },
    {
      question: "Is Stilb an official SI unit?",
      answer: "No, Stilb is a non-SI CGS metric unit. The official SI unit is Candela per Square Meter (cd/m²)."
    },
    {
      question: "How many Stilbs is 100,000 Lux sunlight on a white surface (R = 0.90)?",
      answer: "Stilbs = (100,000 × 0.90) ÷ 31,415.9265 = 90,000 ÷ 31,415.9265 ≈ 2.86 Stilbs."
    }
  ],
  relatedList: [
    { label: "Lux to Lambert", from: "lux", to: "lambert" },
    { label: "Lux to Nit", from: "lux", to: "nit" },
    { label: "Lux to Candela/m²", from: "lux", to: "candela-per-m2" },
    { label: "Lux to Luminance Converter", from: "lux", to: "luminance-converter" }
  ],
  references: [
    "ISO 80000-7: Quantities and Units — Light and Radiation.",
    "BIPM SI Brochure: Non-SI CGS Units.",
    "CIE International Lighting Vocabulary (CIE e-ILV)."
  ]
};
