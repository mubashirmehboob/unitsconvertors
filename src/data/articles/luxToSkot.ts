import { CustomArticleData } from "./types";

export const luxToSkot: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "skot",
  seoTitle: "Lux (lx) to Skot Converter & Low-Light Photometry | UnitsConvertors.com",
  metaDescription: "Convert Lux to Skot with precise optical formulas. Learn scotopic low-light luminance relationships, blackout lighting history, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/en/lux-to-skot",
  h1: "Lux (lx) to Skot Converter",
  introduction: [
    "In vision science, military history, and night-vision photometry, low-light levels operate in the scotopic regime, where the human eye relies on rod photoreceptors rather than daylight cone receptors.",
    "The lux (symbol: lx) is the standard SI derived unit of illuminance, defining an incident luminous flux of one lumen per square meter (1 lx = 1 lm/m²). The skot (symbol: skot, from the ancient Greek σκότος, meaning 'darkness') is an obsolete CGS-related unit of luminance defined as one-thousandth of an apostilb, or 10⁻³/π candela per square meter (1 skot = 10⁻³ asb ≈ 3.1831 × 10⁻⁴ cd/m²).",
    "On an ideal, perfectly diffuse (Lambertian) matte surface with 100% reflectance (ρ = 1.0), an incident illuminance of 1 lux produces a surface luminance of exactly 1,000 skots (1 lx = 1,000 skots). This guide details scotopic vision principles, conversion formulas, practical worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "On a perfectly diffuse white surface with 100% reflectance (ρ = 1.0), 1 lux produces exactly 1,000 skots of surface luminance. For real surfaces, multiply illuminance in lux by the surface reflectance factor ρ and then by 1,000 (skot = lx × ρ × 1,000).",
    formulaDisplay: "L_{\\text{skot}} = E_{\\text{lux}} \\times \\rho \\times 1{,}000 \\quad | \\quad 1 \\text{ skot} = \\frac{10^{-3}}{\\pi} \\text{ cd/m}^2 \\approx 3.18309886 \\times 10^{-4} \\text{ cd/m}^2",
    subtext: "E_lux is incident illuminance in lux; ρ is the surface diffuse reflectance factor (0.0 to 1.0)."
  },
  aboutSourceUnit: {
    title: "Understanding Lux (lx)",
    text: "The lux is the international standard (SI) metric for illuminance, measuring luminous flux falling across a one-square-meter surface (1 lx = 1 lm/m²). It applies across all lighting regimes, from bright daylight to dim moonlight."
  },
  aboutTargetUnit: {
    title: "Understanding the Skot (skot)",
    text: "The skot was introduced in Germany during the 1940s to quantify luminance under blackout regulations and night-vision conditions. Defined as 10⁻³ apostilbs (or 10⁻⁷ lamberts), it provides convenient integer values for measuring extremely dim, rod-dominated night vision where SI candelas per square meter produce tiny fractions."
  },
  relationship: "Lux measures incident light striking a surface, while skot measures extremely dim luminance emitted or reflected from that surface. On an ideal Lambertian diffuser (ρ = 1.0), 1 lux corresponds to 1,000 skots. For a dimly illuminated walkway under moonlight (0.1 lux) with 20% reflectance (ρ = 0.20), the resulting surface luminance is 20 skots.",
  relationshipTitle: "Lux to Skot Photometric Scale (Ideal White Diffuser ρ = 1.0)",
  relationshipItems: [
    { label: "0.001 Lux (lx)", value: "1.0 Skot (Overcast starlight night)" },
    { label: "0.01 Lux (lx)", value: "10.0 Skots (Quarter moon lighting)" },
    { label: "0.1 Lux (lx)", value: "100.0 Skots (Full moon clear night)" },
    { label: "1 Lux (lx)", value: "1,000.0 Skots = 1.0 Apostilb" },
    { label: "10 Lux (lx)", value: "10,000.0 Skots = 10.0 Apostilbs" }
  ],
  formula: {
    text: "Calculate luminance in skots by multiplying incident illuminance in lux by the surface reflectance factor ρ and by 1,000.",
    math: "L_{\\text{skot}} = E_{\\text{lux}} \\times \\rho \\times 1{,}000 \\qquad | \\qquad L_{\\text{cd/m}^2} = \\frac{L_{\\text{skot}} \\times 10^{-3}}{\\pi}",
    subtext: "Where ρ is the diffuse surface reflectance (0.0 to 1.0)."
  },
  formulaTitle: "Lux to Skot Low-Light Reflection Formula",
  practicalTip: {
    title: "Night Vision Threshold Landmark",
    text: "Human scotopic vision operates between approximately 10⁻³ skots (absolute vision threshold) and roughly 10 skots (mesopic transition boundary), above which cone photoreceptors begin responding."
  },
  expertNote: {
    title: "Historical Origin of Blackout Lighting Units",
    text: "During World War II, the German Standardization Committee (DIN 5035) introduced the skot to manage wartime blackout compliance, ensuring street signs and exterior markers remained readable to pedestrians while invisible to high-altitude aircraft."
  },
  examples: {
    title: "Step-by-Step Lux to Skot Worked Examples",
    items: [
      {
        title: "Example 1: Moonlight on Concrete Path (ρ = 0.25)",
        subtitle: "Determine surface luminance in skots when 0.2 lux of full moonlight strikes a concrete walkway.",
        steps: [
          "Identify incident illuminance: E = 0.2 lx.",
          "Identify surface reflectance: ρ = 0.25 (25% reflectance).",
          "Apply formula: L_skot = 0.2 × 0.25 × 1,000.",
          "Perform calculation: 0.05 × 1,000 = 50.",
          "Final Result: The pathway luminance is 50 skots (approx. 0.0159 cd/m²)."
        ]
      },
      {
        title: "Example 2: Military Night-Vision Marker (ρ = 0.80)",
        subtitle: "Calculate reflected skots from a reflective white tape illuminated by 0.05 lux dim red torchlight.",
        steps: [
          "Identify illuminance: E = 0.05 lx.",
          "Identify tape reflectance: ρ = 0.80.",
          "Apply formula: L_skot = 0.05 × 0.80 × 1,000.",
          "Perform calculation: 0.04 × 1,000 = 40.",
          "Final Result: The reflective marker exhibits 40 skots of luminance."
        ]
      },
      {
        title: "Example 3: Emergency Egress Sign (ρ = 0.90)",
        subtitle: "Find luminance in skots under 1 lux low-level backup illumination.",
        steps: [
          "Identify illuminance: E = 1.0 lx.",
          "Identify sign reflectance: ρ = 0.90.",
          "Calculate: L_skot = 1.0 × 0.90 × 1,000 = 900.",
          "Final Result: The emergency sign produces 900 skots."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Skot Conversion Table in Low-Light Environments",
    headers: ["Incident Illuminance (Lux)", "Surface Condition", "Reflectance (ρ)", "Luminance (Skot)", "SI Luminance (cd/m²)"],
    rows: [
      { fromVal: "0.001 lx", toVal: "Dark Forest Ground", extra: "0.10 (10%)", extra2: "0.10 skots", extra3: "3.183 × 10⁻⁵ cd/m²" },
      { fromVal: "0.005 lx", toVal: "Overcast Starlight Grass", extra: "0.20 (20%)", extra2: "1.00 skots", extra3: "3.183 × 10⁻⁴ cd/m²" },
      { fromVal: "0.02 lx", toVal: "Quarter Moon Dirt Track", extra: "0.15 (15%)", extra2: "3.00 skots", extra3: "9.549 × 10⁻⁴ cd/m²" },
      { fromVal: "0.10 lx", toVal: "Full Moon Asphalt Road", extra: "0.10 (10%)", extra2: "10.00 skots", extra3: "3.183 × 10⁻³ cd/m²" },
      { fromVal: "0.25 lx", toVal: "Full Moon Concrete Walkway", extra: "0.30 (30%)", extra2: "75.00 skots", extra3: "2.387 × 10⁻² cd/m²" },
      { fromVal: "0.50 lx", toVal: "Emergency Exit Floor Strip", extra: "0.60 (60%)", extra2: "300.00 skots", extra3: "9.549 × 10⁻² cd/m²" },
      { fromVal: "1.00 lx", toVal: "Standard Matte White Paper", extra: "0.80 (80%)", extra2: "800.00 skots", extra3: "2.546 × 10⁻¹ cd/m²" },
      { fromVal: "1.00 lx", toVal: "Ideal White Diffuser Standard", extra: "1.00 (100%)", extra2: "1,000.00 skots", extra3: "3.183 × 10⁻¹ cd/m²" },
      { fromVal: "5.00 lx", toVal: "Dim Parking Lot Walkway", extra: "0.25 (25%)", extra2: "1,250.00 skots", extra3: "3.979 × 10⁻¹ cd/m²" },
      { fromVal: "10.00 lx", toVal: "Emergency Stairwell Landing", extra: "0.50 (50%)", extra2: "5,000.00 skots", extra3: "1.592 cd/m²" }
    ]
  },
  applications: {
    title: "Practical Applications of the Skot Unit",
    items: [
      {
        title: "Historical Military Blackout Regulations",
        text: "Used during wartime Europe to specify maximum permissible surface brightness for external lanterns, vehicle slits, and civilian window shades."
      },
      {
        title: "Scotopic Vision & Ophthalmology Studies",
        text: "Vision scientists use the skot to map dark-adaptation curves and peripheral rod photoreceptor sensitivity in human eyes."
      },
      {
        title: "Astronomy & Dark Sky Environmental Audits",
        text: "Ecologists and stargazing reserves evaluate nocturnal ground glow and artificial light pollution thresholds using milli-lux and skot equivalents."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Lux to Skot Calculations",
    items: [
      "Forgetting the 1,000 multiplier between apostilbs and skots (1 apostilb = 1,000 skots).",
      "Confusing scotopic vision units with photopic daylight luminance.",
      "Omitting surface reflectance factor ρ when calculating reflected luminance from lux illuminance.",
      "Assuming the skot is part of the modern SI system (it is an obsolete German unit superseded by cd/m²)."
    ]
  },
  faqs: [
    {
      question: "What is a Skot?",
      answer: "The skot is a historical unit of luminance equal to 10⁻³ apostilbs, or approximately 3.1831 × 10⁻⁴ candelas per square meter (cd/m²). It was created for measuring low-level scotopic brightness."
    },
    {
      question: "How do I convert Lux to Skot?",
      answer: "Multiply the illuminance in lux by the surface reflectance factor ρ and then by 1,000. On a theoretical 100% white diffuse surface, 1 lux equals 1,000 skots."
    },
    {
      question: "How many Skots are in 1 Apostilb?",
      answer: "There are exactly 1,000 skots in 1 apostilb (1 skot = 0.001 apostilb)."
    },
    {
      question: "How many candelas per square meter is 1 Skot?",
      answer: "1 skot equals 10⁻³/π cd/m², which is approximately 0.000318309886 cd/m² (or 3.1831 × 10⁻⁴ cd/m²)."
    },
    {
      question: "What does the word 'skot' mean?",
      answer: "The name derives from the ancient Greek word 'skotos' (σκότος), which translates to darkness or gloom."
    },
    {
      question: "When was the Skot unit used?",
      answer: "It was officially standardized in Germany around 1940 (DIN 5035) during World War II to regulate blackout lighting and night-time visibility."
    },
    {
      question: "What is the luminance of a concrete path (20% reflectance) under 0.1 lux moonlight?",
      answer: "The luminance is 0.1 × 0.20 × 1,000 = 20 skots (approximately 0.00637 cd/m²)."
    },
    {
      question: "Is Skot recognized by the BIPM or CIE today?",
      answer: "No. Modern international standards from the CIE and BIPM exclusively recommend the SI unit candela per square meter (cd/m²) for all luminance measurements."
    }
  ],
  relatedList: [
    { label: "Lux to Apostilb", from: "lux", to: "apostilb" },
    { label: "Lux to Blondel", from: "lux", to: "blondel" },
    { label: "Lux to Candela/m²", from: "lux", to: "candela-per-m2" },
    { label: "Lux to Foot-candle", from: "lux", to: "foot-candle" }
  ],
  references: [
    "DIN 5035: Innenraumbeleuchtung mit künstlichem Licht (Deutsches Institut für Normung).",
    "CIE S 017/E:2020: ILV: International Lighting Vocabulary (International Commission on Illumination).",
    "Walsh, J. W. T. (1958). 'Photometry'. Dover Publications, New York."
  ]
};
