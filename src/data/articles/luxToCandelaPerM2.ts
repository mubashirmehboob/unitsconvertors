import { CustomArticleData } from "./types";

export const luxToCandelaPerM2: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "candela-per-m2",
  seoTitle: "Lux to Candela/m² Engineering Calculation (lx to cd/m²) | UnitsConvertors.com",
  metaDescription: "Calculate Candela/m² from Lux using surface reflectance parameters. Learn SI luminance reflection formulas, roadway lighting standards, worked examples, and FAQs.",
  h1: "Lux to Candela/m² Engineering Calculation",
  introduction: [
    "Lux (lx) and Candela per Square Meter (cd/m²) are fundamental optical quantities within the International System of Units (SI). Lux measures illuminance—the luminous flux incident on a target surface per unit area (lumens per square meter). Candela per Square Meter measures luminance—the directional luminous intensity emitted or reflected by a surface per unit projected area.",
    "Because lux measures light arriving at a surface while candela/m² measures light leaving a surface, there is no single universal conversion factor between lux and candela/m² without specifying the surface reflectance factor ($R$, where $0 \le R \le 1$) and assuming diffuse Lambertian scattering. For a perfect 100% white diffuse surface ($R = 1.0$), luminance in cd/m² ($L$) equals incident illuminance in lux ($E$) divided by $\pi$: $L = E / \pi \approx E \times 0.31831$.",
    "This calculation represents a Type B conditional engineering transformation rather than a direct unit conversion. This guide covers SI luminance standards, roadway pavement reflection metrics (CIE 115), architectural facade lighting, step-by-step calculations, and practical engineering examples."
  ],
  quickAnswer: {
    text: "Lux measures light striking a surface, while Candela/m² measures light reflecting off a surface. Therefore, there is no single fixed conversion factor between lux and candela/m². To calculate Candela/m² from Lux, use the formula: cd/m² = (Lux × Reflectance R) ÷ π. For a 100% white surface (R = 1.0), 1 Lux produces ~0.3183 cd/m².",
    formulaDisplay: "cd/m² = (lx × R) ÷ π ≈ lx × R × 0.31831",
    subtext: "For a 100% reflective white diffuse surface (R = 1.0), 1 Lux produces ~0.3183 cd/m²."
  },
  aboutSourceUnit: {
    title: "What is a Lux (lx)?",
    text: "The Lux (symbol: lx) is the official SI unit of illuminance. It expresses luminous flux striking a surface of one square meter (1 lx = 1 lm/m²). It is the standard metric used in building codes to quantify light levels delivered to floor and desk planes."
  },
  aboutTargetUnit: {
    title: "Understanding Candela per Square Meter (cd/m²)",
    text: "Candela per Square Meter (symbol: cd/m²) is the primary SI unit of luminance. It quantifies how bright a self-luminous light source (display panel, lamp lens) or illuminated secondary surface appears to the human visual system."
  },
  relationship: "The physical transformation between illuminance (lux) and luminance (cd/m²) is governed by the surface reflectance factor R and Lambertian solid angle scattering (1/π steradians). Reflected cd/m² = (Incident Lux × R) / π.",
  relationshipTitle: "Lux to Candela/m² Scale Ratios Across Roadway & Indoor Surface Reflectances (at 500 Lux)",
  relationshipItems: [
    { label: "500 lx on White Plaster Wall (R = 0.85)", value: "135.28 cd/m² (Standard brightly lit office interior wall)" },
    { label: "500 lx on Unfinished Concrete (R = 0.35)", value: "55.70 cd/m² (Industrial facility floor surface brightness)" },
    { label: "500 lx on Aged Asphalt Pavement (R = 0.10)", value: "15.92 cd/m² (Roadway surface under street lighting)" },
    { label: "500 lx on Fresh Wet Blacktop (R = 0.04)", value: "6.37 cd/m² (Low-reflectance wet road surface at night)" },
    { label: "500 lx on 100% White Reference Diffuser (R = 1.0)", value: "159.15 cd/m² (Maximum theoretical diffuse reflected luminance)" }
  ],
  formula: {
    text: "Multiply incident illuminance in Lux by surface reflectance R (0.0 to 1.0) and divide by π (3.14159265) to derive luminance in Candela/m².",
    math: "cd/m² = (lx × R) / π",
    subtext: "For a perfect white diffuse surface (R = 1.0): cd/m² = lx × 0.31831."
  },
  formulaTitle: "Lux to Candela/m² Reflection Formula",
  practicalTip: {
    title: "Roadway Lighting CIE 115 Compliance",
    text: "International roadway standards (CIE 115 / IES RP-8) specify highway lighting targets in pavement luminance (cd/m²) rather than lux, because driver visibility depends on light reflected off the road into the eyes."
  },
  expertNote: {
    title: "Bidirectional Reflectance Distribution Function (BRDF)",
    text: "While L = E·R/π assumes ideal Lambertian diffusion, actual road surfaces exhibit specular reflection under shallow headlight angles. Civil engineers use r-tables (pavement reflection matrices) for precise cd/m² modeling."
  },
  examples: {
    title: "Step-by-Step lx to cd/m² Engineering Worked Examples",
    items: [
      {
        title: "Example 1: Highway Asphalt Pavement under Streetlights",
        subtitle: "A streetlight installation delivers 30 Lux to dry asphalt pavement (reflectance R = 0.12). Calculate pavement luminance in cd/m².",
        steps: [
          "Identify illuminance: 30 lx.",
          "Identify asphalt reflectance: R = 0.12.",
          "Multiply illuminance by reflectance: 30 × 0.12 = 3.6.",
          "Divide by π: 3.6 ÷ 3.14159 = 1.1459.",
          "Final Result: Pavement luminance is approximately 1.15 cd/m²."
        ]
      },
      {
        title: "Example 2: Architectural White Facade Projection",
        subtitle: "Calculate surface luminance in cd/m² for a white matte building wall (R = 0.75) illuminated to 400 Lux.",
        steps: [
          "Identify illuminance: 400 lx.",
          "Identify reflectance: R = 0.75.",
          "Calculate: (400 × 0.75) ÷ 3.14159 = 300 ÷ 3.14159 = 95.493.",
          "Final Result: The building facade exhibits 95.49 cd/m²."
        ]
      },
      {
        title: "Example 3: Standard 100% Diffuse Calibration White Standard",
        subtitle: "Convert 1,000 Lux incident light on a 100% white reference tile into cd/m².",
        steps: [
          "Identify illuminance: 1,000 lx.",
          "Reflectance: R = 1.0.",
          "Calculate: 1,000 ÷ 3.14159 = 318.31.",
          "Final Result: 1,000 Lux produces 318.31 cd/m²."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Candela/m² Reflection Engineering Reference Matrix",
    headers: ["Incident Lux", "100% White (R=1.0)", "75% Matte Wall (R=0.75)", "12% Dry Road (R=0.12)", "Application Context"],
    rows: [
      { fromVal: "1 lx", toVal: "0.318 cd/m²", extra: "0.239 cd/m²", extra2: "0.038 cd/m²", extra3: "Clear full moon night surface ambient" },
      { fromVal: "10 lx", toVal: "3.183 cd/m²", extra: "2.387 cd/m²", extra2: "0.382 cd/m²", extra3: "Suburban street lighting pavement target" },
      { fromVal: "50 lx", toVal: "15.915 cd/m²", extra: "11.937 cd/m²", extra2: "1.910 cd/m²", extra3: "Urban main arterial road lighting level" },
      { fromVal: "100 lx", toVal: "31.831 cd/m²", extra: "23.873 cd/m²", extra2: "3.820 cd/m²", extra3: "Commercial parking structure drive aisles" },
      { fromVal: "300 lx", toVal: "95.493 cd/m²", extra: "71.620 cd/m²", extra2: "11.459 cd/m²", extra3: "Classroom desk & chalkboard environment" },
      { fromVal: "500 lx", toVal: "159.155 cd/m²", extra: "119.366 cd/m²", extra2: "19.099 cd/m²", extra3: "Commercial office open workspace desk" },
      { fromVal: "1,000 lx", toVal: "318.310 cd/m²", extra: "238.732 cd/m²", extra2: "38.197 cd/m²", extra3: "Precision industrial inspection table" },
      { fromVal: "10,000 lx", toVal: "3,183.099 cd/m²", extra: "2,387.324 cd/m²", extra2: "381.972 cd/m²", extra3: "Open outdoor daylight in light shade" }
    ]
  },
  applications: {
    title: "Industry Applications of Lux to Candela/m² Engineering Calculations",
    items: [
      {
        title: "Highway & Tunnel Lighting Design (CIE 115)",
        text: "Civil lighting engineers convert road surface lux into cd/m² pavement luminance to ensure driver contrast visibility and prevent night eye adaptation fatigue."
      },
      {
        title: "Architectural Exterior Projection & Facade Lighting",
        text: "Lighting designers calculate building surface cd/m² by multiplying floodlight lux by wall material reflectance to comply with urban light pollution ordinances."
      },
      {
        title: "Airport Runway Touchdown Zone Signage",
        text: "Aviation safety engineers evaluate reflective runway marking visibility in cd/m² under aircraft landing light illuminance (lux)."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Calculating Candela/m² from Lux",
    items: [
      "Assuming 1 Lux equals 1 cd/m²: Lux measures incident light, cd/m² measures reflected light; converting requires reflectance R and dividing by π.",
      "Omitting the 1/π steradian scattering factor: Forgetting π creates a 3.14x over-estimation error for diffuse surfaces.",
      "Ignoring wet road surface specular shifts: Wet pavement transitions from Lambertian reflection to specular sheen, reducing diffuse cd/m²."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Lux to Candela/m²?",
      answer: "The formula is: cd/m² = (Lux × Reflectance R) ÷ π. For a 100% white surface (R = 1.0), cd/m² = Lux ÷ 3.14159."
    },
    {
      question: "How many Candela/m² does 1 Lux yield on a white surface?",
      answer: "On a 100% white Lambertian surface, 1 Lux produces approximately 0.3183 cd/m²."
    },
    {
      question: "Why is Roadway Lighting specified in Candela/m² instead of Lux?",
      answer: "Because drivers see light reflecting off the road surface (cd/m²) into their eyes, not the incident light striking the pavement (lux)."
    },
    {
      question: "Is Candela/m² the same as Nits?",
      answer: "Yes, 1 Nit is defined as exactly 1 Candela per square meter (1 nit = 1 cd/m²)."
    },
    {
      question: "How many cd/m² is 30 Lux on dry asphalt (R = 0.12)?",
      answer: "cd/m² = (30 × 0.12) ÷ 3.14159 = 3.6 ÷ 3.14159 ≈ 1.15 cd/m²."
    },
    {
      question: "What is a Lambertian surface?",
      answer: "An ideal diffuse surface that reflects light equally in all directions, so its luminance in cd/m² equals (Lux × R) / π."
    },
    {
      question: "How do I convert Candela/m² back to Lux on a white surface?",
      answer: "For R = 1.0, multiply Candela/m² by π (3.14159)."
    },
    {
      question: "Does light wavelength change the Lux to cd/m² formula?",
      answer: "No. Both lux and cd/m² use the same V(λ) photopic spectral weighting curve, so the physical reflection factor R applies uniformly across visual wavelengths."
    }
  ],
  relatedList: [
    { label: "Lux to Nit", from: "lux", to: "nit" },
    { label: "Lux to Foot-Lambert", from: "lux", to: "foot-lambert" },
    { label: "Lux to Lambert", from: "lux", to: "lambert" },
    { label: "Lux to Luminance Converter", from: "lux", to: "luminance-converter" }
  ],
  references: [
    "CIE 115:2010 Lighting of Roads for Motor and Pedestrian Traffic.",
    "IES RP-8-18: Recommended Practice for Design and Maintenance of Roadway Lighting.",
    "ISO 80000-7: Quantities and Units — Light and Radiation."
  ]
};
