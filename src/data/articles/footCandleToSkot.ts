import { CustomArticleData } from "./types";

export const footCandleToSkot: CustomArticleData = {
  fromUnitId: "foot-candle",
  toUnitId: "skot",
  seoTitle: "Foot-candle to Skot Converter & Low-Light Photometry | UnitsConvertors.com",
  metaDescription: "Convert Foot-candles to Skots (fc to skot) with optical accuracy. Master scotopic vision luminance, wartime blackout lighting physics, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/en/foot-candle-to-skot",
  h1: "Foot-candle (fc) to Skot Converter",
  introduction: [
    "In low-light photometry, dark-adaptation studies, and historic military blackout engineering, surface brightness is evaluated in the scotopic vision regime where human rod photoreceptors dominate visual perception.",
    "The foot-candle (symbol: fc) is the US customary unit of illuminance, defining one lumen of incident luminous flux per square foot (1 fc = 1 lm/ft² = 10.76391 lx). The skot (symbol: skot, derived from the Greek σκότος, meaning 'darkness') is a historical unit of luminance defined as one-thousandth of an apostilb, or 10⁻³/π candela per square meter (1 skot = 10⁻³ asb ≈ 3.1831 × 10⁻⁴ cd/m²).",
    "Because 1 lux produces exactly 1,000 skots on an ideal, perfectly diffuse white reflector with 100% reflectance (ρ = 1.0), and 1 foot-candle equals exactly 10.76391 lux, 1 foot-candle produces exactly 10,763.91 skots on an ideal Lambertian surface (1 fc = 10,763.91 skots). This guide covers the mathematical derivation, night-vision lighting principles, worked calculation examples, and reference tables."
  ],
  quickAnswer: {
    text: "On a perfectly diffuse white surface with 100% reflectance (ρ = 1.0), 1 foot-candle produces exactly 10,763.91 skots of surface luminance. For real surfaces, multiply foot-candles by the surface reflectance factor ρ and by 10,763.91 (skot = fc × ρ × 10,763.91).",
    formulaDisplay: "L_{\\text{skot}} = E_{\\text{fc}} \\times 10{,}763.91 \\times \\rho \\quad | \\quad 1 \\text{ skot} = \\frac{10^{-3}}{\\pi} \\text{ cd/m}^2 \\approx 3.18309886 \\times 10^{-4} \\text{ cd/m}^2",
    subtext: "E_fc is illuminance in foot-candles; ρ is the diffuse reflectance factor (0.0 to 1.0)."
  },
  aboutSourceUnit: {
    title: "Understanding Foot-candles (fc)",
    text: "The foot-candle (symbol: fc) measures illuminance—the density of light arriving across a one-square-foot surface plane (1 fc = 1 lm/ft² = 10.76391 lx). It is used throughout North American lighting and architectural engineering."
  },
  aboutTargetUnit: {
    title: "Understanding the Skot",
    text: "The skot is a historical photometric unit of luminance standardized in Germany (DIN 5035) during the 1940s. Equal to 10⁻³ apostilb (3.1831 × 10⁻⁴ cd/m²), it provides convenient non-fractional values for measuring extremely dim nocturnal and blackout illumination."
  },
  relationship: "Foot-candles quantify incoming light, while skots measure extremely low-level outgoing diffuse luminance. On an ideal Lambertian diffuser (ρ = 1.0), 1 foot-candle produces 10,763.91 skots (or 10.76391 apostilbs). For a dim outdoor pathway receiving 0.01 foot-candles of moonlight with 20% reflectance (ρ = 0.20), the resulting surface luminance is approximately 21.53 skots.",
  relationshipTitle: "Foot-candle to Skot Low-Light Scale (Ideal White Diffuser ρ = 1.0)",
  relationshipItems: [
    { label: "0.0001 fc", value: "1.076 skots (Overcast night starlight)" },
    { label: "0.001 fc", value: "10.764 skots (Quarter moon lighting)" },
    { label: "0.01 fc", value: "107.639 skots (Full moon clear night)" },
    { label: "0.1 fc", value: "1,076.391 skots (Deep twilight outdoors)" },
    { label: "1.0 fc", value: "10,763.910 skots = 10.764 Apostilbs" }
  ],
  formula: {
    text: "Multiply illuminance in Foot-candles by 10,763.9104 and by the surface diffuse reflectance factor ρ to calculate luminance in Skots.",
    math: "L_{\\text{skot}} = E_{\\text{fc}} \\times 10{,}763.9104 \\times \\rho \\qquad | \\qquad L_{\\text{cd/m}^2} = \\frac{L_{\\text{skot}} \\times 10^{-3}}{\\pi}",
    subtext: "Where ρ is the diffuse surface reflectance (0.0 to 1.0)."
  },
  formulaTitle: "Foot-candle to Skot Low-Light Reflection Formula",
  practicalTip: {
    title: "Blackout Lighting Safety Thresholds",
    text: "Under historical wartime blackout standards, exterior ground fixtures were restricted to less than 10 to 50 skots of reflected surface luminance to prevent aerial detection while providing adequate scotopic vision for ground personnel."
  },
  expertNote: {
    title: "The Mathematical Derivation of 10,763.91",
    text: "Because 1 foot-candle equals 10.7639104 lux, and 1 lux produces 1 apostilb (1,000 skots) on an ideal Lambertian diffuser, the scaling constant is exactly 10.7639104 × 1,000 = 10,763.9104."
  },
  examples: {
    title: "Step-by-Step Foot-candle to Skot Worked Examples",
    items: [
      {
        title: "Example 1: Moonlight on Concrete Pathway (0.02 fc)",
        subtitle: "Determine pathway luminance in skots for concrete (ρ = 0.25) illuminated by 0.02 foot-candles of full moonlight.",
        steps: [
          "Identify incident illuminance: E = 0.02 fc.",
          "Identify concrete reflectance: ρ = 0.25 (25% reflectance).",
          "Apply formula: L_skot = 0.02 × 0.25 × 10,763.91.",
          "Perform calculation: 0.005 × 10,763.91 = 53.81955.",
          "Final Result: The pathway reflects approximately 53.82 skots (approx. 0.0171 cd/m²)."
        ]
      },
      {
        title: "Example 2: Military Night-Vision Marker (0.005 fc)",
        subtitle: "Calculate marker luminance in skots for white reflective tape (ρ = 0.80) under 0.005 foot-candles starlight.",
        steps: [
          "Identify illuminance: E = 0.005 fc.",
          "Identify tape reflectance: ρ = 0.80.",
          "Calculate: L_skot = 0.005 × 0.80 × 10,763.91 = 0.004 × 10,763.91 = 43.0556.",
          "Final Result: The marker produces approximately 43.06 skots."
        ]
      },
      {
        title: "Example 3: Emergency Egress Stairwell Strip (0.1 fc)",
        subtitle: "Find stair strip luminance in skots under 0.1 foot-candle low-level emergency backup lighting (ρ = 0.60).",
        steps: [
          "Identify illuminance: E = 0.1 fc.",
          "Identify surface reflectance: ρ = 0.60.",
          "Calculate: L_skot = 0.1 × 0.60 × 10,763.91 = 0.06 × 10,763.91 = 645.8346.",
          "Final Result: The stair strip exhibits approximately 645.83 skots."
        ]
      }
    ]
  },
  table: {
    title: "Foot-candle to Skot Low-Light Environmental Reference Table",
    headers: ["Incident Illuminance (fc)", "Condition / Surface", "Reflectance (ρ)", "Luminance (Skot)", "SI Luminance (cd/m²)"],
    rows: [
      { fromVal: "0.0001 fc", toVal: "Overcast Starlight Forest", extra: "0.10 (10%)", extra2: "0.108 skots", extra3: "3.426 × 10⁻⁵ cd/m²" },
      { fromVal: "0.0005 fc", toVal: "Clear Starlight Dirt Path", extra: "0.15 (15%)", extra2: "0.807 skots", extra3: "2.570 × 10⁻⁴ cd/m²" },
      { fromVal: "0.002 fc", toVal: "Quarter Moon Grass Lawn", extra: "0.20 (20%)", extra2: "4.306 skots", extra3: "1.371 × 10⁻³ cd/m²" },
      { fromVal: "0.01 fc", toVal: "Full Moon Asphalt Roadway", extra: "0.10 (10%)", extra2: "10.764 skots", extra3: "3.426 × 10⁻³ cd/m²" },
      { fromVal: "0.02 fc", toVal: "Full Moon Concrete Walkway", extra: "0.30 (30%)", extra2: "64.583 skots", extra3: "2.056 × 10⁻² cd/m²" },
      { fromVal: "0.05 fc", toVal: "Emergency Exit Floor Tape", extra: "0.60 (60%)", extra2: "322.917 skots", extra3: "1.028 × 10⁻¹ cd/m²" },
      { fromVal: "0.10 fc", toVal: "Matte White Sign (Twilight)", extra: "0.80 (80%)", extra2: "861.113 skots", extra3: "2.741 × 10⁻¹ cd/m²" },
      { fromVal: "0.10 fc", toVal: "Ideal White Diffuser Target", extra: "1.00 (100%)", extra2: "1,076.391 skots", extra3: "3.426 × 10⁻¹ cd/m²" },
      { fromVal: "0.50 fc", toVal: "Dim Parking Garage Floor", extra: "0.25 (25%)", extra2: "1,345.489 skots", extra3: "4.283 × 10⁻¹ cd/m²" },
      { fromVal: "1.00 fc", toVal: "Emergency Stairwell Landing", extra: "0.50 (50%)", extra2: "5,381.955 skots", extra3: "1.713 cd/m²" }
    ]
  },
  applications: {
    title: "Practical Applications of the Skot Unit",
    items: [
      {
        title: "Wartime Blackout Regulation & History",
        text: "Historical analysis of civil defense lighting codes during World War II that governed low-level public illumination."
      },
      {
        title: "Ophthalmology & Scotopic Rod Photoreceptor Mapping",
        text: "Vision researchers evaluate human dark adaptation thresholds and night-blindness (nyctalopia) testing."
      },
      {
        title: "Nocturnal Wildlife & Dark Sky Ecology",
        text: "Conservationists analyze the impact of artificial light trespass on nocturnal animal behavior and skyglow."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Foot-candle to Skot Calculations",
    items: [
      "Forgetting the 10,763.91 multiplier when converting directly from imperial foot-candles to skots.",
      "Confusing scotopic vision units (skot) with photopic daylight units (candela/m² or nit).",
      "Omitting the surface reflectance factor ρ when estimating reflected luminance from illuminance.",
      "Assuming the skot is an active SI unit (it is an obsolete German unit superseded by cd/m²)."
    ]
  },
  faqs: [
    {
      question: "What is a Skot?",
      answer: "The skot is an obsolete unit of luminance equal to 10⁻³ apostilbs, or approximately 3.18309886 × 10⁻⁴ candelas per square meter (cd/m²). It was designed for low-light night-vision measurements."
    },
    {
      question: "How do I convert Foot-candles to Skots?",
      answer: "Multiply the foot-candle reading by the surface diffuse reflectance factor ρ and then by 10,763.91 (Skot = fc × ρ × 10,763.91)."
    },
    {
      question: "How many Skots is 1 Foot-candle on a 100% white surface?",
      answer: "1 foot-candle produces exactly 10,763.91 skots on an ideal, perfectly diffuse white reflector."
    },
    {
      question: "How many Skots are in 1 Apostilb?",
      answer: "There are exactly 1,000 skots in 1 apostilb (1 skot = 0.001 apostilb)."
    },
    {
      question: "How many candelas per square meter is 1 Skot?",
      answer: "1 skot equals 10⁻³/π cd/m², which is approximately 0.000318309886 cd/m²."
    },
    {
      question: "What does the word 'skot' mean?",
      answer: "The term comes from the ancient Greek word 'skotos' (σκότος), meaning darkness or gloom."
    },
    {
      question: "What is the luminance of concrete (25% reflectance) under 0.02 foot-candles moonlight in skots?",
      answer: "0.02 × 0.25 × 10,763.91 = 53.82 skots (approx. 0.0171 cd/m²)."
    },
    {
      question: "Is Skot an SI unit?",
      answer: "No. The official SI unit for all luminance measurements is the candela per square meter (cd/m²)."
    }
  ],
  relatedList: [
    { label: "Foot-candle to Apostilb", from: "foot-candle", to: "apostilb" },
    { label: "Foot-candle to Blondel", from: "foot-candle", to: "blondel" },
    { label: "Foot-candle to Lux", from: "foot-candle", to: "lux" },
    { label: "Lux to Skot", from: "lux", to: "skot" }
  ],
  references: [
    "DIN 5035: Innenraumbeleuchtung mit künstlichem Licht (Deutsches Institut für Normung).",
    "CIE S 017/E:2020: ILV: International Lighting Vocabulary (International Commission on Illumination).",
    "Walsh, J. W. T. (1958). 'Photometry'. Dover Publications, New York."
  ]
};
