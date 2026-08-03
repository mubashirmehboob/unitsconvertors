import { CustomArticleData } from "./types";

export const luxToFootLambert: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "foot-lambert",
  seoTitle: "Lux to Foot-Lambert Engineering Calculation (lx to fL) | UnitsConvertors.com",
  metaDescription: "Calculate Foot-Lamberts from Lux using surface reflectance parameters. Learn customary luminance reflection formulas, cinema projection SMPTE standards, worked examples, and FAQs.",
  h1: "Lux to Foot-Lambert Engineering Calculation",
  introduction: [
    "Lux (lx) and Foot-Lamberts (fL) connect metric incident light with US customary reflected brightness. Lux quantifies metric illuminance—the density of luminous flux striking a surface per square meter (1 lx = 1 lm/m²). The Foot-Lambert quantifies customary luminance—the surface brightness of a perfect diffuse reflector emitting or reflecting one lumen per square foot (1 fL = 1 lm/ft² = 1/π cd/ft² ≈ 3.426259 cd/m²).",
    "Because lux measures light arriving per square meter while Foot-Lamberts measure light reflecting per square foot, converting between them requires specifying the surface reflectance factor ($R$, where $0 \le R \le 1$) and dividing by the square meter to square foot area conversion factor ($10.76391$). For a 100% white diffuse surface ($R = 1.0$), luminance in Foot-Lamberts ($L_{\text{fL}}$) is calculated by dividing incident illuminance in lux ($E$) by 10.76391: $L_{\text{fL}} = (E \times R) / 10.76391 \approx E \times R \times 0.092903$.",
    "This calculation represents a Type B conditional engineering transformation rather than a direct unit conversion. This guide covers cinema screen projection calibration (SMPTE ST 2095), flight simulator visual dome displays, architectural glare evaluation, step-by-step calculations, and practical engineering examples."
  ],
  quickAnswer: {
    text: "Lux measures incident light falling on a surface, while Foot-Lamberts (fL) measure surface brightness reflected into the eye. Therefore, there is no fixed conversion factor between lux and foot-lamberts. For a diffuse surface with reflectance R, Foot-Lamberts = (Lux × R) ÷ 10.76391. For a 100% white surface (R = 1.0), 1 Lux produces ~0.0929 Foot-Lamberts.",
    formulaDisplay: "Foot-Lamberts = (lx × R) ÷ 10.76391 ≈ lx × R × 0.092903",
    subtext: "For a 100% white surface (R = 1.0), 1 Foot-Candle of incident illuminance yields 1 Foot-Lambert."
  },
  aboutSourceUnit: {
    title: "What is a Lux (lx)?",
    text: "The Lux (symbol: lx) is the SI unit of illuminance. Defined as 1 lm/m², it measures the density of luminous flux falling onto a target surface plane."
  },
  aboutTargetUnit: {
    title: "Understanding the Foot-Lambert (fL)",
    text: "The Foot-Lambert (symbol: fL) is a US customary unit of luminance defined as 1 lumen per square foot emitted or reflected by a perfectly diffuse surface. It is the legacy standard for movie theater projection screen brightness (SMPTE) and avionics cockpits."
  },
  relationship: "Foot-Lamberts and Lux are linked by surface reflectance R and the area factor 10.76391 ft²/m². If illuminance is expressed in Foot-candles (fc = lx / 10.76391), then Foot-Lamberts = Foot-candles × R. For a 100% white surface, 1 fc produces 1 fL.",
  relationshipTitle: "Lux to Foot-Lambert Scale Ratios (for 100% White Cinema Screen vs 80% Paper)",
  relationshipItems: [
    { label: "10.76 lx on 100% Screen (R = 1.0)", value: "1.000 fL (1 Foot-candle incident yields 1 Foot-Lambert)" },
    { label: "172.2 lx on 100% Screen (R = 1.0)", value: "16.000 fL (SMPTE standard movie theater screen target)" },
    { label: "500 lx on 85% Paper (R = 0.85)", value: "39.484 fL (Standard printed document desk brightness)" },
    { label: "1,000 lx on 100% Diffuser (R = 1.0)", value: "92.903 fL (High-intensity drafting examination table)" },
    { label: "10,000 lx on 100% Diffuser (R = 1.0)", value: "929.030 fL (Full indirect outdoor daylight ambient)" }
  ],
  formula: {
    text: "Multiply incident illuminance in Lux by surface reflectance R (0.0 to 1.0) and divide by 10.76391 (or multiply by 0.09290304).",
    math: "fL = (lx × R) / 10.76391",
    subtext: "If illuminance is in Foot-candles (fc): fL = fc × R."
  },
  formulaTitle: "Lux to Foot-Lambert Conversion Formula",
  practicalTip: {
    title: "SMPTE Movie Theater Screen Calibration Target",
    text: "The Society of Motion Picture and Television Engineers (SMPTE ST 2095) specifies standard theater screen center luminance as 16 fL (approx. 54.8 cd/m²) open-gate. Projector technicians measure incident lux/fc at the screen to calibrate output."
  },
  expertNote: {
    title: "Converting Foot-Lamberts to SI Nits (cd/m²)",
    text: "To convert Foot-Lamberts to modern SI Candela per square meter (nits), multiply fL by 3.426259 (1 fL = 3.426259 cd/m²)."
  },
  examples: {
    title: "Step-by-Step lx to fL Engineering Worked Examples",
    items: [
      {
        title: "Example 1: Cinema Projection Screen SMPTE Verification",
        subtitle: "A projector delivers 172.2 Lux to a matte white projection screen (reflectance R = 1.0). Calculate screen luminance in Foot-Lamberts.",
        steps: [
          "Identify incident illuminance: 172.2 lx.",
          "Identify screen reflectance: R = 1.0.",
          "Apply formula: fL = (172.2 × 1.0) ÷ 10.76391.",
          "Perform calculation: 172.2 ÷ 10.76391 = 15.998.",
          "Final Result: The projection screen produces 16.0 Foot-Lamberts."
        ]
      },
      {
        title: "Example 2: Flight Simulator Visual Dome Display",
        subtitle: "A visual dome projection system delivers 300 Lux to a curved screen with R = 0.85. Calculate reflected Foot-Lamberts.",
        steps: [
          "Identify illuminance: 300 lx.",
          "Identify screen reflectance: R = 0.85.",
          "Multiply illuminance by reflectance: 300 × 0.85 = 255.",
          "Divide by 10.76391: 255 ÷ 10.76391 = 23.690.",
          "Final Result: The simulator screen produces 23.69 Foot-Lamberts."
        ]
      },
      {
        title: "Example 3: Commercial Office Desk Plane",
        subtitle: "Calculate Foot-Lamberts for white paper (R = 0.80) under 500 Lux desktop illumination.",
        steps: [
          "Identify illuminance: 500 lx.",
          "Reflectance R = 0.80.",
          "Calculate: (500 × 0.80) ÷ 10.76391 = 400 ÷ 10.76391 = 37.161.",
          "Final Result: The paper reflects 37.16 Foot-Lamberts."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Foot-Lambert Reflection Reference Table",
    headers: ["Incident Lux", "100% White (R=1.0)", "85% Screen (R=0.85)", "50% Gray (R=0.50)", "Environmental & Cinema Context"],
    rows: [
      { fromVal: "1 lx", toVal: "0.093 fL", extra: "0.079 fL", extra2: "0.046 fL", extra3: "Full moon night screen ambient" },
      { fromVal: "10.76 lx", toVal: "1.000 fL", extra: "0.850 fL", extra2: "0.500 fL", extra3: "1 Foot-candle incident benchmark" },
      { fromVal: "50 lx", toVal: "4.645 fL", extra: "3.948 fL", extra2: "2.323 fL", extra3: "Dim residential home theater ambient" },
      { fromVal: "100 lx", toVal: "9.290 fL", extra: "7.897 fL", extra2: "4.645 fL", extra3: "Emergency exits and low-level displays" },
      { fromVal: "172.2 lx", toVal: "16.000 fL", extra: "13.600 fL", extra2: "8.000 fL", extra3: "SMPTE ST 2095 cinema theater screen target" },
      { fromVal: "300 lx", toVal: "27.871 fL", extra: "23.690 fL", extra2: "13.935 fL", extra3: "Classroom lecture projection screen" },
      { fromVal: "500 lx", toVal: "46.452 fL", extra: "39.484 fL", extra2: "23.226 fL", extra3: "Commercial office desk white document" },
      { fromVal: "1,000 lx", toVal: "92.903 fL", extra: "78.968 fL", extra2: "46.452 fL", extra3: "High-intensity industrial drafting table" }
    ]
  },
  applications: {
    title: "Industry Applications of Lux to Foot-Lambert Calculations",
    items: [
      {
        title: "Commercial Cinema & Home Theater Projection (SMPTE)",
        text: "Projection engineers calculate screen Foot-Lamberts by multiplying projector screen lux by gain/reflectance to comply with SMPTE 16 fL standards."
      },
      {
        title: "Avionics Cockpit Display Ergonomics",
        text: "Flight deck display engineers measure incident cockpit lighting (lux) to ensure multifunction display (MFD) brightness in fL prevents pilot glare."
      },
      {
        title: "Flight & Military Vehicle Dome Simulators",
        text: "Visual systems engineers calculate dome projection luminance in fL from channel projector illuminance (lux)."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Calculating Foot-Lamberts from Lux",
    items: [
      "Assuming 1 Lux equals 1 Foot-Lambert: Converting from lux (metric) to Foot-Lambert (customary) requires dividing by 10.76391 and multiplying by reflectance R.",
      "Confusing Foot-candle (illuminance) with Foot-Lambert (luminance): Foot-candle is incident light; Foot-Lambert is reflected light.",
      "Ignoring screen gain: Front projection screen gains (>1.0) concentrate light forward, increasing center fL beyond standard Lambertian calculations."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Lux to Foot-Lamberts?",
      answer: "The formula is: Foot-Lamberts = (Lux × Reflectance R) ÷ 10.76391."
    },
    {
      question: "How many Foot-Lamberts does 1 Lux produce on a 100% white surface?",
      answer: "1 Lux produces approximately 0.092903 Foot-Lamberts (1 ÷ 10.76391)."
    },
    {
      question: "What is the SMPTE cinema screen standard in Foot-Lamberts?",
      answer: "SMPTE ST 2095 specifies 16 fL (approx. 54.8 cd/m²) center screen luminance for commercial cinema projection."
    },
    {
      question: "What is the relationship between Foot-candles and Foot-Lamberts?",
      answer: "For a 100% white diffuse surface (R = 1.0), 1 Foot-candle of incident illuminance produces exactly 1 Foot-Lambert of surface luminance."
    },
    {
      question: "How do I convert Foot-Lamberts to Nits (cd/m²)?",
      answer: "Multiply Foot-Lamberts by 3.426259."
    },
    {
      question: "How many Lux are needed for 16 Foot-Lamberts on a 100% screen?",
      answer: "16 fL × 10.76391 = 172.2 Lux incident on the screen."
    },
    {
      question: "Does screen gain change the Foot-Lambert calculation?",
      answer: "Yes. For a directional screen with Gain G, Foot-Lamberts = (Lux × G) ÷ 10.76391."
    },
    {
      question: "Is Foot-Lambert an SI unit?",
      answer: "No, Foot-Lambert is a US Customary / Imperial unit of luminance. The SI unit is Candela per square meter (cd/m²)."
    }
  ],
  relatedList: [
    { label: "Lux to Foot-candle", from: "lux", to: "foot-candle" },
    { label: "Lux to Nit", from: "lux", to: "nit" },
    { label: "Lux to Lambert", from: "lux", to: "lambert" },
    { label: "Lux to Luminance Converter", from: "lux", to: "luminance-converter" }
  ],
  references: [
    "SMPTE ST 2095-1:2015: Cinema D-Cinema Light Levels and Colorimetry.",
    "IESNA Lighting Handbook (10th Edition): Projection & Display Optics.",
    "ANSI/IES RP-16-17: Nomenclature and Definitions for Illuminating Engineering."
  ]
};
