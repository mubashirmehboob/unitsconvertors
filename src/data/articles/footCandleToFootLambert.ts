import { CustomArticleData } from "./types";

export const footCandleToFootLambert: CustomArticleData = {
  fromUnitId: "foot-candle",
  toUnitId: "foot-lambert",
  seoTitle: "Foot-candle to Foot-Lambert Converter (fc to fL) | UnitsConvertors.com",
  metaDescription: "Convert Foot-candles to Foot-Lamberts (fc to fL) with optical precision. Master Lambertian surface reflectance, SMPTE cinema screen targets, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/en/foot-candle-to-foot-lambert",
  h1: "Foot-candle (fc) to Foot-Lambert (fL) Converter",
  introduction: [
    "In North American architectural lighting, film production, and commercial cinema design, the relationship between incident light and reflected surface brightness is traditionally evaluated using the foot-candle and the foot-lambert.",
    "The foot-candle (symbol: fc) is the US customary unit of illuminance, representing one lumen of incident luminous flux distributed across one square foot (1 fc = 1 lm/ft²). The foot-lambert (symbol: fL) is the corresponding customary unit of luminance, defined as 1/π candela per square foot, or the luminance of a uniform Lambertian diffuser emitting one lumen per square foot.",
    "Because the foot-lambert was deliberately defined to match the foot-candle, an ideal, perfectly diffuse white surface with 100% reflectance (ρ = 1.0) illuminated by 1 foot-candle produces exactly 1 foot-lambert of surface luminance (1 fc = 1 fL). For any real surface, the reflected luminance in foot-lamberts is simply the incident illuminance in foot-candles multiplied by the surface reflectance factor ρ. This guide explains this optical unity relationship, worked calculation examples, industry standards, and reference tables."
  ],
  quickAnswer: {
    text: "For a perfectly diffuse white surface with 100% reflectance (ρ = 1.0), 1 foot-candle produces exactly 1 foot-lambert of luminance (1 fc = 1 fL). For real surfaces, multiply the foot-candle reading by the surface reflectance factor ρ (fL = fc × ρ).",
    formulaDisplay: "L_{\\text{fL}} = E_{\\text{fc}} \\times \\rho \\quad | \\quad 1 \\text{ fL} = \\frac{1}{\\pi} \\text{ cd/ft}^2 \\approx 3.426259 \\text{ cd/m}^2",
    subtext: "E_fc is illuminance in foot-candles; ρ is the diffuse reflectance factor (0.0 to 1.0)."
  },
  aboutSourceUnit: {
    title: "Understanding Foot-candles (fc)",
    text: "The foot-candle (symbol: fc or lm/ft²) is the customary unit of illuminance quantifying the total density of light falling onto a plane from surrounding light sources, independent of surface material properties."
  },
  aboutTargetUnit: {
    title: "Understanding Foot-Lamberts (fL)",
    text: "The foot-lambert (symbol: fL) is a customary unit of luminance representing the brightness of a surface that emits or scatters light uniformly at a rate of one lumen per square foot. It is equal to 1/π candela per square foot (approx. 3.426259 cd/m² or nits)."
  },
  relationship: "Foot-candles measure incoming light (illuminance), while foot-lamberts measure outgoing light (luminance). Because both units are based on the square foot, the conversion on an ideal Lambertian diffuser is exactly 1-to-1: 1 fc = 1 fL. If a wall with 60% reflectance receives 30 foot-candles of light, it reflects exactly 18 foot-lamberts.",
  relationshipTitle: "Foot-candle to Foot-Lambert Unity Scale (Ideal White Diffuser ρ = 1.0)",
  relationshipItems: [
    { label: "1.0 fc", value: "1.0 fL = 3.426 cd/m² (Subtle ambient room surface)" },
    { label: "16.0 fc", value: "16.0 fL = 54.82 cd/m² (SMPTE standard cinema screen target)" },
    { label: "30.0 fc", value: "30.0 fL = 102.79 cd/m² (Classroom whiteboard reflection)" },
    { label: "50.0 fc", value: "50.0 fL = 171.31 cd/m² (Standard office task lighting on white paper)" },
    { label: "100.0 fc", value: "100.0 fL = 342.63 cd/m² (Precision inspection drafting table)" }
  ],
  formula: {
    text: "Multiply incident illuminance in Foot-candles by the surface diffuse reflectance factor ρ to calculate surface luminance in Foot-Lamberts.",
    math: "L_{\\text{fL}} = E_{\\text{fc}} \\times \\rho \\qquad | \\qquad L_{\\text{cd/m}^2} = L_{\\text{fL}} \\times 3.426259",
    subtext: "Where ρ is the dimensionless diffuse reflectance factor (0.0 to 1.0)."
  },
  formulaTitle: "Foot-candle to Foot-Lambert Surface Reflectance Formula",
  practicalTip: {
    title: "Why Lighting Designers Love Foot-Lamberts",
    text: "The 1-to-1 relationship between foot-candles and foot-lamberts allows designers to compute surface brightness instantly in their heads: simply multiply incident foot-candles by the paint reflectance percentage."
  },
  expertNote: {
    title: "SMPTE 196M Cinema Projection Standard",
    text: "The Society of Motion Picture and Television Engineers (SMPTE 196M) specifies that a theatrical projection screen must deliver 16 fL (± 2 fL) at screen center in an open-gate condition. On a standard unity-gain matte screen (ρ = 1.0), the projector must produce exactly 16 foot-candles of incident illuminance."
  },
  examples: {
    title: "Step-by-Step Foot-candle to Foot-Lambert Worked Examples",
    items: [
      {
        title: "Example 1: SMPTE Cinema Screen Calibration",
        subtitle: "Determine screen luminance in foot-lamberts when a projector delivers 16 foot-candles onto a 1.0-gain matte screen.",
        steps: [
          "Identify incident illuminance: E = 16 fc.",
          "Identify screen gain / reflectance: ρ = 1.0.",
          "Apply conversion formula: L_fL = 16 × 1.0.",
          "Perform calculation: 16 × 1.0 = 16.",
          "Final Result: The screen has a luminance of exactly 16 Foot-Lamberts (approx. 54.82 cd/m²)."
        ]
      },
      {
        title: "Example 2: Commercial Office Desk Workspace (ρ = 0.80)",
        subtitle: "Calculate paper luminance in foot-lamberts under 45 foot-candles desk lighting.",
        steps: [
          "Identify desktop illuminance: E = 45 fc.",
          "Identify paper reflectance: ρ = 0.80.",
          "Calculate: L_fL = 45 × 0.80 = 36.",
          "Final Result: The white paper reflects 36 Foot-Lamberts."
        ]
      },
      {
        title: "Example 3: Photographic 18% Gray Target",
        subtitle: "Find surface luminance in foot-lamberts under 150 foot-candles studio illumination.",
        steps: [
          "Identify illuminance: E = 150 fc.",
          "Identify reflectance: ρ = 0.18.",
          "Calculate: L_fL = 150 × 0.18 = 27.",
          "Final Result: The 18% gray card exhibits 27 Foot-Lamberts."
        ]
      }
    ]
  },
  table: {
    title: "Foot-candle to Foot-Lambert Conversion Table across Typical Surfaces",
    headers: ["Incident Illuminance (fc)", "Surface Description", "Reflectance Factor (ρ)", "Luminance (Foot-Lambert)", "SI Luminance (cd/m²)"],
    rows: [
      { fromVal: "1 fc", toVal: "Black Velvet Backdrop", extra: "0.01 (1%)", extra2: "0.01 fL", extra3: "0.034 cd/m²" },
      { fromVal: "5 fc", toVal: "Dark Walnut Furniture", extra: "0.15 (15%)", extra2: "0.75 fL", extra3: "2.570 cd/m²" },
      { fromVal: "10 fc", toVal: "Tan Carpet Flooring", extra: "0.30 (30%)", extra2: "3.00 fL", extra3: "10.279 cd/m²" },
      { fromVal: "16 fc", toVal: "Standard Cinema Screen (Unity Gain)", extra: "1.00 (100%)", extra2: "16.00 fL", extra3: "54.820 cd/m²" },
      { fromVal: "30 fc", toVal: "Classroom Dry-Erase Board", extra: "0.75 (75%)", extra2: "22.50 fL", extra3: "77.091 cd/m²" },
      { fromVal: "50 fc", toVal: "Matte White Office Paper", extra: "0.80 (80%)", extra2: "40.00 fL", extra3: "137.050 cd/m²" },
      { fromVal: "75 fc", toVal: "White Vinyl Projection Screen", extra: "0.90 (90%)", extra2: "67.50 fL", extra3: "231.272 cd/m²" },
      { fromVal: "100 fc", toVal: "Ideal Lambertian Diffuser Target", extra: "1.00 (100%)", extra2: "100.00 fL", extra3: "342.626 cd/m²" },
      { fromVal: "250 fc", toVal: "High-Gloss Enamel Wall", extra: "0.85 (85%)", extra2: "212.50 fL", extra3: "728.080 cd/m²" },
      { fromVal: "1,000 fc", toVal: "Ideal White Target (Sunlit)", extra: "1.00 (100%)", extra2: "1,000.00 fL", extra3: "3,426.259 cd/m²" }
    ]
  },
  applications: {
    title: "Key Applications of Foot-candle and Foot-Lambert Metrics",
    items: [
      {
        title: "Theatrical Cinema & Projection Screen Standards",
        text: "Projector manufacturers and cinema technicians calibrate projector output (lumens / fc) to achieve SMPTE 16 fL screen brightness targets."
      },
      {
        title: "Architectural Visual Contrast & Glare Management",
        text: "Lighting engineers calculate wall and ceiling foot-lamberts from luminaire foot-candles to maintain comfortable visual brightness ratios."
      },
      {
        title: "Film & Television Lighting Set Design",
        text: "Cinematographers use spot meters measuring foot-lamberts on actors' faces alongside incident meters measuring foot-candles."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Foot-candle to Foot-Lambert Conversions",
    items: [
      "Assuming 1 foot-candle always equals 1 foot-lambert on physical materials without multiplying by the diffuse reflectance factor ρ.",
      "Confusing foot-candles (illuminance, light falling on a surface) with foot-lamberts (luminance, light leaving a surface).",
      "Confusing foot-lamberts with SI candelas per square meter (1 fL ≈ 3.426 cd/m²).",
      "Applying Lambertian diffuse calculations to high-gain retro-reflective screens or specular mirrors."
    ]
  },
  faqs: [
    {
      question: "What is the conversion factor between Foot-candles and Foot-Lamberts?",
      answer: "On an ideal 100% white diffuse surface (ρ = 1.0), 1 foot-candle produces exactly 1 foot-lambert (1 fc = 1 fL). For real surfaces, multiply foot-candles by the reflectance factor ρ."
    },
    {
      question: "What is the difference between a Foot-candle and a Foot-Lambert?",
      answer: "A foot-candle measures incoming light striking a surface (illuminance), whereas a foot-lambert measures light reflected or emitted from a diffuse surface (luminance)."
    },
    {
      question: "How many cd/m² is 1 Foot-Lambert?",
      answer: "1 foot-lambert equals approximately 3.426259 candelas per square meter (cd/m² or nits)."
    },
    {
      question: "What is the SMPTE standard screen brightness in Foot-Lamberts?",
      answer: "The SMPTE standard for commercial movie theaters is 16 foot-lamberts (acceptable range: 14 to 18 fL) at screen center."
    },
    {
      question: "How many foot-candles of projector light are needed for a 16 fL screen?",
      answer: "On a standard unity-gain screen (gain = 1.0), exactly 16 foot-candles of illuminance are required."
    },
    {
      question: "How do I convert Foot-Lamberts to candelas per square meter?",
      answer: "Multiply the foot-lambert value by 3.426259."
    },
    {
      question: "What is the luminance of white paper (80% reflectance) under 50 foot-candles?",
      answer: "Under 50 fc, the paper produces 50 × 0.80 = 40 foot-lamberts (approx. 137.05 cd/m²)."
    },
    {
      question: "Are Foot-candles and Foot-Lamberts SI units?",
      answer: "No. Both are non-SI US Customary units. The corresponding SI units are the lux (lx) for illuminance and the candela per square meter (cd/m²) for luminance."
    }
  ],
  relatedList: [
    { label: "Foot-candle to Nit", from: "foot-candle", to: "nit" },
    { label: "Foot-candle to Candela/m²", from: "foot-candle", to: "candela-per-m2" },
    { label: "Foot-candle to Lux", from: "foot-candle", to: "lux" },
    { label: "Lux to Foot-Lambert", from: "lux", to: "foot-lambert" }
  ],
  references: [
    "SMPTE 196M: Motion-Picture Film - Indoor Theater and Review Room Projection - Screen Luminance and Viewing Conditions.",
    "IESNA Lighting Handbook (10th Edition): Illuminating Engineering Society of North America.",
    "CIE S 017/E:2020: ILV: International Lighting Vocabulary."
  ]
};
