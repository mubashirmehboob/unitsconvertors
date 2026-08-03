import { CustomArticleData } from "./types";

export const luxToLambert: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "lambert",
  seoTitle: "Lux to Lambert Engineering Calculation (lx to L) | UnitsConvertors.com",
  metaDescription: "Calculate Lamberts from Lux using surface reflectance parameters. Learn CGS luminance reflection formulas, radar CRT optics, worked examples, and FAQs.",
  h1: "Lux to Lambert Engineering Calculation",
  introduction: [
    "Lux (lx) and Lambert (L) quantify different aspects of photopic radiation. Lux is the SI unit of incident illuminance, representing one lumen per square meter (1 lx = 1 lm/m²). The Lambert is a traditional CGS (centimeter-gram-second) unit of luminance, defined as the surface brightness of a perfect diffuse reflector emitting or reflecting one lumen per square centimeter (1 L = 1 lm/cm² = 10,000/π cd/m² ≈ 3,183.10 cd/m²).",
    "Because lux measures light hitting a surface per square meter while the Lambert measures light leaving a surface per square centimeter, converting between them requires specifying the surface reflectance factor ($R$, where $0 \le R \le 1$) and accounting for the metric area scaling factor of 10,000 ($1\text{ m}^2 = 10,000\text{ cm}^2$). For a 100% white diffuse surface ($R = 1.0$), luminance in Lamberts ($L_{\text{Lambert}}$) equals incident illuminance in lux ($E$) divided by 10,000: $L_{\text{Lambert}} = (E \times R) / 10,000$.",
    "This calculation represents a Type B conditional engineering transformation rather than a direct unit conversion. This guide details CGS photometric history, legacy radar CRT display optics, night-vision goggle cathode calibration, step-by-step calculations, and reference tables."
  ],
  quickAnswer: {
    text: "Lux measures incident light falling on a surface, while Lambert measures CGS surface brightness reflected or emitted from a surface. Therefore, there is no fixed conversion factor between lux and Lamberts. For a diffuse surface with reflectance R, Lamberts = (Lux × R) ÷ 10,000. For a 100% white surface (R = 1.0), 1 Lux produces exactly 0.0001 Lamberts (10⁻⁴ L).",
    formulaDisplay: "Lamberts = (lx × R) ÷ 10,000 = lx × R × 10⁻⁴",
    subtext: "For a 100% white diffuse surface (R = 1.0), 1 Lux equals 0.0001 Lambert (10,000 lx = 1.0 L)."
  },
  aboutSourceUnit: {
    title: "What is a Lux (lx)?",
    text: "The Lux (symbol: lx) is the SI derived unit of illuminance. Defined as 1 lm/m², it measures how much luminous flux strikes a surface area of one square meter."
  },
  aboutTargetUnit: {
    title: "Understanding the Lambert (L)",
    text: "The Lambert (symbol: L) is a non-SI CGS metric unit of luminance named after Johann Heinrich Lambert. Defined as 1 lm/cm², it represents the brightness of a surface emitting or reflecting one lumen per square centimeter. 1 Lambert equals 10,000/π cd/m² (approx. 3,183.1 cd/m²)."
  },
  relationship: "The relationship combines surface reflectance R with metric area conversion (1 m² = 10,000 cm²). 1 Phot (1 lm/cm²) incident on a 100% white surface yields 1 Lambert. Since 1 Lux = 0.0001 Phot, 1 Lux incident on a 100% white surface yields 0.0001 Lambert (10⁻⁴ L).",
  relationshipTitle: "Lux to Lambert Scale Ratios across Reflectance Values (at 10,000 Lux Outdoor Daylight)",
  relationshipItems: [
    { label: "10,000 lx on 100% White Diffuser (R = 1.0)", value: "1.0000 L (Exact 1.0 Lambert reference baseline)" },
    { label: "10,000 lx on White Paper (R = 0.80)", value: "0.8000 L (800 millilamberts / mL)" },
    { label: "10,000 lx on Neutral Gray Card (R = 0.18)", value: "0.1800 L (180 millilamberts / mL)" },
    { label: "10,000 lx on Dry Road Asphalt (R = 0.10)", value: "0.1000 L (100 millilamberts / mL)" },
    { label: "1,000 lx on 100% White Diffuser (R = 1.0)", value: "0.1000 L (100 millilamberts / mL)" }
  ],
  formula: {
    text: "Multiply incident illuminance in Lux by surface reflectance R (0.0 to 1.0) and divide by 10,000.",
    math: "Lamberts (L) = (lx × R) / 10000",
    subtext: "For millilamberts (mL): mL = (lx × R) / 10."
  },
  formulaTitle: "Lux to Lambert Conversion Formula",
  practicalTip: {
    title: "The Millilambert (mL) Engineering Rule",
    text: "Because 1 Lambert is a very intense CGS luminance, early optics literature frequently used the millilambert (1 mL = 0.001 L). For a 100% white surface, Millilamberts = Lux ÷ 10 (e.g., 500 lx = 50 mL)."
  },
  expertNote: {
    title: "CGS vs SI Unit Standardization",
    text: "ISO 80000-7 deprecates the Lambert in favor of the SI unit Candela per Square Meter (cd/m²). To convert Lamberts to SI cd/m², multiply Lamberts by 10,000/π (≈ 3,183.0989)."
  },
  examples: {
    title: "Step-by-Step lx to L Engineering Worked Examples",
    items: [
      {
        title: "Example 1: Open Outdoor Daylight Baseline",
        subtitle: "Calculate surface brightness in Lamberts for a 100% white reference card (R = 1.0) receiving 10,000 Lux of indirect daylight.",
        steps: [
          "Identify illuminance: 10,000 lx.",
          "Identify reflectance: R = 1.0.",
          "Apply formula: L = (10,000 × 1.0) ÷ 10,000.",
          "Perform calculation: 10,000 ÷ 10,000 = 1.0.",
          "Final Result: 10,000 Lux produces 1.0 Lambert."
        ]
      },
      {
        title: "Example 2: Commercial Office Desk Task Plane",
        subtitle: "Calculate surface luminance in Lamberts for white paper (R = 0.85) under 500 Lux desk illumination.",
        steps: [
          "Identify illuminance: 500 lx.",
          "Identify reflectance: R = 0.85.",
          "Multiply: 500 × 0.85 = 425.",
          "Divide by 10,000: 425 ÷ 10,000 = 0.0425.",
          "Final Result: The paper exhibits 0.0425 Lamberts (42.5 millilamberts)."
        ]
      },
      {
        title: "Example 3: Direct Summer Noon Sunlight on White Target",
        subtitle: "Convert 100,000 Lux direct solar illuminance on a white target (R = 0.90) into Lamberts.",
        steps: [
          "Identify illuminance: 100,000 lx.",
          "Reflectance: R = 0.90.",
          "Calculate: (100,000 × 0.90) ÷ 10,000 = 90,000 ÷ 10,000 = 9.0.",
          "Final Result: Direct sunlight produces 9.0 Lamberts."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Lambert Reflection Reference Table",
    headers: ["Incident Lux", "100% White (R=1.0)", "85% Paper (R=0.85)", "Millilamberts (mL, R=1.0)", "Environmental Context"],
    rows: [
      { fromVal: "1 lx", toVal: "0.00010 L", extra: "0.000085 L", extra2: "0.10 mL", extra3: "Full moon clear sky outdoor ambient" },
      { fromVal: "10 lx", toVal: "0.00100 L", extra: "0.000850 L", extra2: "1.00 mL", extra3: "Streetlight walkway minimum ambient" },
      { fromVal: "50 lx", toVal: "0.00500 L", extra: "0.004250 L", extra2: "5.00 mL", extra3: "Residential lounge relaxation lighting" },
      { fromVal: "100 lx", toVal: "0.01000 L", extra: "0.008500 L", extra2: "10.00 mL", extra3: "Industrial warehouse storage aisles" },
      { fromVal: "300 lx", toVal: "0.03000 L", extra: "0.025500 L", extra2: "30.00 mL", extra3: "Classroom lecture hall desk space" },
      { fromVal: "500 lx", toVal: "0.05000 L", extra: "0.042500 L", extra2: "50.00 mL", extra3: "Standard commercial office desk plane" },
      { fromVal: "1,000 lx", toVal: "0.10000 L", extra: "0.085000 L", extra2: "100.00 mL", extra3: "Precision laboratory electronics assembly" },
      { fromVal: "10,000 lx", toVal: "1.00000 L", extra: "0.850000 L", extra2: "1,000.00 mL", extra3: "Full indirect outdoor daylight in open shade" }
    ]
  },
  applications: {
    title: "Industry Applications of Lux to Lambert Calculations",
    items: [
      {
        title: "Legacy Analog Radar & CRT Scope Calibration",
        text: "Military radar technicians convert scope illuminance (lux) into millilamberts to verify phosphor screen sweep visibility."
      },
      {
        title: "Historical Photographic & Film Optics Research",
        text: "Archivists converting early 20th-century optics papers translate Lambert luminance metrics into modern SI cd/m² and lux."
      },
      {
        title: "Night-Vision Goggle (NVG) Cathode Phosphor Testing",
        text: "Electro-optical engineers calibrate image intensifier output screens in millilamberts based on input light lux levels."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Calculating Lamberts from Lux",
    items: [
      "Assuming 1 Lux equals 1 Lambert: 1 Lambert is a massive CGS unit equal to 10,000 lux on a 100% white surface.",
      "Confusing Lambert (luminance) with Phot (illuminance): Phot measures flux arriving at a surface (lm/cm²); Lambert measures flux leaving a surface.",
      "Forgetting surface reflectance R: Omitting reflectance overestimates Lambert luminance for dark surfaces."
    ]
  },
  faqs: [
    {
      question: "Is there a direct conversion factor between Lux and Lamberts?",
      answer: "No. Lux measures incident illuminance, while Lambert measures CGS surface luminance. Converting requires surface reflectance R and dividing by 10,000."
    },
    {
      question: "What is the formula to calculate Lamberts from Lux?",
      answer: "The formula is: Lamberts = (Lux × Reflectance R) ÷ 10,000."
    },
    {
      question: "How many Lamberts does 1 Lux yield on a 100% white surface?",
      answer: "On a 100% white diffuse surface (R = 1.0), 1 Lux produces exactly 0.0001 Lamberts (10⁻⁴ L)."
    },
    {
      question: "How many Lux is 1 Lambert?",
      answer: "1 Lambert equals the surface brightness produced by 10,000 Lux incident on a 100% white diffuse surface."
    },
    {
      question: "What is a Millilambert?",
      answer: "A Millilambert (mL) is one-thousandth of a Lambert (0.001 L). For R = 1.0, 10 Lux produces 1 Millilambert."
    },
    {
      question: "How do I convert Lamberts to SI Candela/m²?",
      answer: "Multiply Lamberts by 10,000 ÷ π (approx. 3,183.1 cd/m² per Lambert)."
    },
    {
      question: "Why is the unit called a Lambert?",
      answer: "It is named after Johann Heinrich Lambert, the Swiss polymath who formulated Lambert's Cosine Law of diffuse emission in 1760."
    },
    {
      question: "How many Lamberts is 500 Lux on white paper (R = 0.85)?",
      answer: "Lamberts = (500 × 0.85) ÷ 10,000 = 425 ÷ 10,000 = 0.0425 Lamberts (42.5 mL)."
    }
  ],
  relatedList: [
    { label: "Lux to Foot-Lambert", from: "lux", to: "foot-lambert" },
    { label: "Lux to Nit", from: "lux", to: "nit" },
    { label: "Lux to Stilb", from: "lux", to: "stilb" },
    { label: "Lux to Luminance Converter", from: "lux", to: "luminance-converter" }
  ],
  references: [
    "ISO 80000-7: Quantities and Units — Light and Radiation.",
    "BIPM SI Brochure: Non-SI CGS Units.",
    "CIE e-ILV: International Lighting Vocabulary."
  ]
};
