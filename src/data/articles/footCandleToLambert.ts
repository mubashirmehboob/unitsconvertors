import { CustomArticleData } from "./types";

export const footCandleToLambert: CustomArticleData = {
  fromUnitId: "foot-candle",
  toUnitId: "lambert",
  seoTitle: "Foot-candle to Lambert Converter & CGS Luminance Formula | UnitsConvertors.com",
  metaDescription: "Convert Foot-candles to Lamberts (fc to L) with optical accuracy. Learn CGS luminance physics, Lambertian diffuse reflection math, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/en/foot-candle-to-lambert",
  h1: "Foot-candle (fc) to Lambert (L) Converter",
  introduction: [
    "In optical physics, historical photometry, and astronomical research, surface brightness has traditionally been quantified using CGS units alongside customary imperial metrics.",
    "The foot-candle (symbol: fc) is the imperial unit of illuminance, representing one lumen of incident luminous flux per square foot (1 fc = 1 lm/ft² = 10.76391 lx). The lambert (symbol: L), named after Swiss polymath Johann Heinrich Lambert, is a CGS unit of luminance defined as 1/π candela per square centimeter, or exactly 10⁴/π candelas per square meter (1 L ≈ 3,183.09886 cd/m²).",
    "On an ideal, perfectly diffuse (Lambertian) matte surface with 100% reflectance (ρ = 1.0), an illuminance of 1 phot (1 lm/cm² = 929.0304 fc) produces a surface luminance of exactly 1 lambert. Consequently, 1 foot-candle produces approximately 0.00107639 lamberts (or 1.076391 × 10⁻³ L). This guide covers the mathematical derivation, optical scattering laws, worked calculation examples, and comprehensive conversion tables."
  ],
  quickAnswer: {
    text: "On an ideal 100% white diffuse surface (ρ = 1.0), 1 foot-candle produces approximately 0.00107639 lamberts (1.076391 × 10⁻³ L). For real surfaces, multiply foot-candles by the surface reflectance factor ρ and then by 0.001076391 (L = fc × ρ × 0.001076391).",
    formulaDisplay: "L_{\\text{lambert}} = \\frac{E_{\\text{fc}} \\times \\rho}{929.0304} \\approx E_{\\text{fc}} \\times \\rho \\times 1.076391 \\times 10^{-3} \\text{ L}",
    subtext: "E_fc is illuminance in foot-candles; ρ is the surface diffuse reflectance factor (0.0 to 1.0)."
  },
  aboutSourceUnit: {
    title: "Understanding Foot-candles (fc)",
    text: "The foot-candle is the imperial measure of illuminance, defining luminous flux density arriving across one square foot (1 fc = 1 lm/ft²). It is equivalent to 10.76391 lux or approximately 1.076391 × 10⁻³ phot."
  },
  aboutTargetUnit: {
    title: "Understanding the Lambert (L)",
    text: "The lambert (symbol: L) is a non-SI CGS unit of luminance equal to the brightness of a perfectly diffuse surface emitting or reflecting one lumen per square centimeter. In SI terms, 1 lambert equals 10,000/π cd/m² (approx. 3,183.10 cd/m²)."
  },
  relationship: "Foot-candles measure incident light in imperial units, while lamberts measure reflected or emitted light in CGS units. Since 1 square foot equals 929.0304 square centimeters, 1 phot equals 929.0304 foot-candles. On an ideal diffuser (ρ = 1.0), 1 foot-candle generates 1 / 929.0304 ≈ 0.001076391 lamberts (approx. 1.0764 millilamberts).",
  relationshipTitle: "Foot-candle to Lambert Scale Comparison (Ideal White Diffuser ρ = 1.0)",
  relationshipItems: [
    { label: "1 fc", value: "1.0764 × 10⁻³ L = 1.0764 mL (3.426 cd/m²)" },
    { label: "10 fc", value: "1.0764 × 10⁻² L = 10.764 mL (34.26 cd/m²)" },
    { label: "100 fc", value: "0.10764 L = 107.64 mL (342.63 cd/m²)" },
    { label: "929.03 fc", value: "1.0000 L (Exact equivalent of 1 Phot illuminance)" },
    { label: "1,000 fc", value: "1.07639 L (Direct summer sunlight on white diffuser)" }
  ],
  formula: {
    text: "Divide illuminance in foot-candles by 929.0304 (or multiply by 0.001076391) and multiply by the surface reflectance factor ρ to obtain luminance in lamberts.",
    math: "L_{\\text{lambert}} = \\frac{E_{\\text{fc}} \\times \\rho}{929.0304} = E_{\\text{fc}} \\times \\rho \\times 0.001076391",
    subtext: "Where ρ is the diffuse reflectance factor between 0.0 and 1.0."
  },
  formulaTitle: "Foot-candle to Lambert Surface Luminance Formula",
  practicalTip: {
    title: "The Millilambert Connection",
    text: "Because 1 lambert is an intensely bright luminance (3,183 cd/m²), optical engineers frequently worked in millilamberts (1 mL = 0.001 L). On an ideal white diffuser, 1 foot-candle produces approximately 1.0764 millilamberts."
  },
  expertNote: {
    title: "Johann Heinrich Lambert and Cosine Emission",
    text: "Johann Heinrich Lambert formulated Lambert's Cosine Law in his 1760 treatise 'Photometria'. The lambert unit was created in the CGS system so that an ideal diffuse surface receiving 1 phot of light would emit 1 lambert of luminance without needing a π factor."
  },
  examples: {
    title: "Step-by-Step Foot-candle to Lambert Worked Examples",
    items: [
      {
        title: "Example 1: Studio Whiteboard Reflection under 80 fc",
        subtitle: "Calculate whiteboard luminance in lamberts for a surface with 85% reflectance under 80 foot-candles.",
        steps: [
          "Identify incident illuminance: E = 80 fc.",
          "Identify diffuse reflectance: ρ = 0.85.",
          "Apply conversion formula: L = (80 × 0.85) ÷ 929.0304.",
          "Calculate numerator: 80 × 0.85 = 68.",
          "Divide by constant: 68 ÷ 929.0304 = 0.0731945.",
          "Final Result: The whiteboard reflects approximately 0.07319 lamberts (73.19 millilamberts, or 233.00 cd/m²)."
        ]
      },
      {
        title: "Example 2: Commercial Office Paper (ρ = 0.80) under 50 fc",
        subtitle: "Determine paper luminance in lamberts under 50 foot-candles desktop task lighting.",
        steps: [
          "Identify illuminance: E = 50 fc.",
          "Identify paper reflectance: ρ = 0.80.",
          "Calculate: L = 50 × 0.80 × 0.001076391 = 40 × 0.001076391 = 0.0430556.",
          "Final Result: The paper has a luminance of approximately 0.04306 lamberts (43.06 mL)."
        ]
      },
      {
        title: "Example 3: High-Intensity Floodlight on Concrete (ρ = 0.35)",
        subtitle: "Calculate pavement luminance under 300 foot-candles high-mast lighting.",
        steps: [
          "Identify illuminance: E = 300 fc.",
          "Identify concrete reflectance: ρ = 0.35.",
          "Calculate: L = 300 × 0.35 × 0.001076391 = 105 × 0.001076391 = 0.113021.",
          "Final Result: The pavement exhibits a luminance of approximately 0.1130 lamberts."
        ]
      }
    ]
  },
  table: {
    title: "Foot-candle to Lambert Conversion Table across Materials",
    headers: ["Incident Illuminance (fc)", "Surface Material", "Reflectance (ρ)", "Luminance (Lambert)", "Luminance (Millilambert)"],
    rows: [
      { fromVal: "1 fc", toVal: "Black Velvet Fabric", extra: "0.01 (1%)", extra2: "1.076 × 10⁻⁵ L", extra3: "0.011 mL" },
      { fromVal: "5 fc", toVal: "Dark Asphalt Road", extra: "0.10 (10%)", extra2: "5.382 × 10⁻⁴ L", extra3: "0.538 mL" },
      { fromVal: "10 fc", toVal: "Polished Oak Parquet", extra: "0.30 (30%)", extra2: "3.229 × 10⁻³ L", extra3: "3.229 mL" },
      { fromVal: "25 fc", toVal: "Tan Ceramic Tile", extra: "0.50 (50%)", extra2: "1.345 × 10⁻² L", extra3: "13.455 mL" },
      { fromVal: "50 fc", toVal: "Matte White Office Paper", extra: "0.80 (80%)", extra2: "4.306 × 10⁻² L", extra3: "43.056 mL" },
      { fromVal: "75 fc", toVal: "Matte Projection Screen", extra: "0.90 (90%)", extra2: "7.266 × 10⁻² L", extra3: "72.656 mL" },
      { fromVal: "100 fc", toVal: "Ideal Lambertian Diffuser", extra: "1.00 (100%)", extra2: "0.1076 L", extra3: "107.639 mL" },
      { fromVal: "500 fc", toVal: "White Billboard Vinyl", extra: "0.85 (85%)", extra2: "0.4575 L", extra3: "457.466 mL" },
      { fromVal: "929.03 fc", toVal: "Ideal White Target (1 Phot)", extra: "1.00 (100%)", extra2: "1.0000 L", extra3: "1,000.000 mL" },
      { fromVal: "5,000 fc", toVal: "Fresh Mountain Snowpack", extra: "0.90 (90%)", extra2: "4.8438 L", extra3: "4,843.760 mL" }
    ]
  },
  applications: {
    title: "Historical and Scientific Applications of Foot-candle & Lambert",
    items: [
      {
        title: "Historical Optical Physics Treatises",
        text: "Used in early 20th-century American and European optical literature before the international adoption of the SI candela per square meter."
      },
      {
        title: "Astrophysics & Lunar Surface Photometry",
        text: "Planetary astronomers historically quantified lunar and planetary albedo brightness in millilamberts under solar illumination."
      },
      {
        title: "Visual Threshold Research",
        text: "Psychophysics and sensory adaptation research frequently referenced millilamberts when establishing the human eye's rod and cone activation thresholds."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Foot-candle to Lambert Conversions",
    items: [
      "Confusing the lambert (CGS luminance, cm-based) with the foot-lambert (customary luminance, foot-based).",
      "Forgetting that 1 square foot contains 929.0304 square centimeters when scaling between imperial and CGS systems.",
      "Omitting surface reflectance factor ρ when calculating reflected luminance from incident illuminance.",
      "Confusing the lambert (luminance) with the phot (illuminance)."
    ]
  },
  faqs: [
    {
      question: "What is a Lambert in photometry?",
      answer: "A lambert (symbol: L) is a non-SI CGS unit of luminance equal to 1/π candela per square centimeter, or approximately 3,183.09886 cd/m²."
    },
    {
      question: "How do I convert Foot-candles to Lamberts?",
      answer: "Multiply the foot-candles by the surface reflectance factor ρ and divide by 929.0304 (or multiply by 0.001076391)."
    },
    {
      question: "How many Lamberts is 1 Foot-candle on a 100% white surface?",
      answer: "On an ideal 100% diffuse reflector, 1 foot-candle produces approximately 0.001076391 lamberts (1.076391 millilamberts)."
    },
    {
      question: "What is the difference between a Lambert and a Foot-Lambert?",
      answer: "A lambert is based on one lumen emitted per square centimeter (CGS system), while a foot-lambert is based on one lumen emitted per square foot (imperial system). 1 lambert equals exactly 929.0304 foot-lamberts."
    },
    {
      question: "How many candelas per square meter is 1 Lambert?",
      answer: "1 lambert equals 10,000/π cd/m², which is approximately 3,183.09886 candelas per square meter (nits)."
    },
    {
      question: "How many foot-candles are required to produce 1 Lambert on a white surface?",
      answer: "Exactly 929.0304 foot-candles (equivalent to 1 phot, or 10,000 lux) on an ideal 100% diffuse surface produces 1 lambert."
    },
    {
      question: "What is a Millilambert?",
      answer: "A millilambert (mL) is one-thousandth of a lambert (10⁻³ L ≈ 3.1831 cd/m²). It is roughly equal to 0.929 foot-lamberts."
    },
    {
      question: "Is Lambert an active SI unit?",
      answer: "No. The lambert is an obsolete CGS unit. The International System of Units (SI) standard for luminance is the candela per square meter (cd/m²)."
    }
  ],
  relatedList: [
    { label: "Foot-candle to Foot-Lambert", from: "foot-candle", to: "foot-lambert" },
    { label: "Foot-candle to Phot", from: "foot-candle", to: "phot" },
    { label: "Foot-candle to Lux", from: "foot-candle", to: "lux" },
    { label: "Lux to Lambert", from: "lux", to: "lambert" }
  ],
  references: [
    "Lambert, J. H. (1760). 'Photometria, sive de mensura et gradibus luminis, colorum et umbrae'. Augsburg.",
    "CIE S 017/E:2020: ILV: International Lighting Vocabulary.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
