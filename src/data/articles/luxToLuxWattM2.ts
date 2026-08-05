import { CustomArticleData } from "./types";

export const luxToLuxWattM2: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "lux-watt-m2",
  seoTitle: "Lux to Lux ↔ Watt/m² Engineering Calculation | UnitsConvertors.com",
  metaDescription: "Calculate Irradiance (W/m²) from Lux for solar radiation, LED lighting, and daylight spectra. Learn spectral conversion multipliers, solar AM1.5 standards, and FAQs.",
  h1: "Lux to Lux ↔ Watt/m² Engineering Calculation",
  introduction: [
    "Lux (lx) and Watts per Square Meter (W/m²) measure energy density at a target plane, but from fundamentally different spectral perspectives. Lux quantifies photopic illuminance—the human eye-weighted luminous flux per square meter (1 lx = 1 lm/m²), filtered by the CIE $V(\lambda)$ visual response curve. Watts per Square Meter quantify total radiometric irradiance—the total electromagnetic radiant energy per second striking a square meter across all optical wavelengths.",
    "Because lux measures eye-weighted visual intensity while W/m² measures total physical power density, converting between lux and W/m² depends on the light source's Spectral Power Distribution (SPD) and Color Temperature (CCT). For standard outdoor AM1.5 solar radiation, 1 W/m² corresponds to approximately 120 lux (or 1 lux ≈ 0.00833 W/m²). For a cool-white LED luminaire, 1 W/m² corresponds to ~300 lux (1 lux ≈ 0.00333 W/m²).",
    "This calculation represents a Type B conditional engineering transformation rather than a simple unit conversion. This guide details meteorological solar radiation monitoring, greenhouse thermal balance modeling, building envelope solar heat gain coefficients (SHGC), step-by-step calculations, and reference spectral conversion matrices."
  ],
  quickAnswer: {
    text: "Lux measures visual illuminance, while W/m² measures physical solar/radiometric irradiance. Therefore, there is no single fixed conversion factor. For standard sunlight (AM1.5 spectrum), 1 W/m² equals approximately 120 Lux (1 Lux ≈ 0.00833 W/m²). For cool-white LED light, 1 W/m² equals approximately 300 Lux (1 Lux ≈ 0.00333 W/m²).",
    formulaDisplay: "Irradiance (W/m²) = Lux ÷ Spectral Multiplier (lm/W)",
    subtext: "For sunlight (AM1.5), divide Lux by 120; for white LED, divide Lux by 250-300."
  },
  aboutSourceUnit: {
    title: "What is a Lux (lx)?",
    text: "The Lux (symbol: lx) is the SI unit of illuminance. It expresses photopically weighted visible light density arriving at a surface plane, where 1 lx = 1 lm/m²."
  },
  aboutTargetUnit: {
    title: "Understanding Watt per Square Meter (W/m²)",
    text: "Watt per Square Meter (symbol: W/m²) is the SI unit of radiant flux density or irradiance. It measures total physical power received per square meter across ultraviolet, visible, and infrared wavebands. It is the core metric in meteorology, photovoltaics, and building thermodynamics."
  },
  relationship: "The relationship between Lux and W/m² is defined by spectral luminous efficacy (lm/W). Irradiance (W/m²) = Lux / Multiplier. Sources rich in non-visible infrared (like sunlight or incandescent bulbs) require more W/m² per lux than narrow visible spectrum LEDs.",
  relationshipTitle: "Lux to W/m² Conversion Multipliers Across Light Spectra",
  relationshipItems: [
    { label: "1,000 lx Sunlight (AM1.5 Solar Spectrum)", value: "8.333 W/m² (Standard outdoor solar conversion factor ~120 lx per W/m²)" },
    { label: "1,000 lx Daylight (Clear Sky 5500K)", value: "8.696 W/m² (Natural daylight spectrum ~115 lx per W/m²)" },
    { label: "1,000 lx Commercial White LED (4000K)", value: "3.571 W/m² (Efficient solid-state visual spectrum ~280 lx per W/m²)" },
    { label: "1,000 lx Fluorescent Tri-Phosphor Tube", value: "4.167 W/m² (Commercial office fixture spectrum ~240 lx per W/m²)" },
    { label: "1,000 lx Incandescent Filament Bulb", value: "66.667 W/m² (High thermal infrared radiation ~15 lx per W/m²)" }
  ],
  formula: {
    text: "Divide illuminance in Lux by the light source's specific spectral conversion factor (in lumens per watt) to calculate Irradiance in Watts per square meter (W/m²).",
    math: "Irradiance (W/m²) = Lux / Spectral Conversion Factor",
    subtext: "For solar radiation (AM1.5): W/m² = Lux ÷ 120. For cool white LED: W/m² = Lux ÷ 300."
  },
  formulaTitle: "Lux to Irradiance (W/m²) Conversion Formula",
  practicalTip: {
    title: "Meteorological Solar Radiation Estimation",
    text: "Pyranometers directly measure solar W/m² across 300-2800nm. When only a lux meter is available outdoors, dividing horizontal daylight lux by 120 provides a reliable estimate of solar irradiance in W/m²."
  },
  expertNote: {
    title: "Greenhouse Energy & Thermal Balance Modeling",
    text: "Agricultural engineers calculating greenhouse thermal heat gain convert solar illuminance (lux) into thermal irradiance (W/m²) to determine HVAC cooling loads and shading curtain activation thresholds."
  },
  examples: {
    title: "Step-by-Step lx to W/m² Engineering Worked Examples",
    items: [
      {
        title: "Example 1: Solar Panel Field Measurement under Sunlight",
        subtitle: "A handheld light meter records 90,000 Lux under full outdoor daylight. Estimate solar irradiance in W/m² (AM1.5 factor ~120).",
        steps: [
          "Identify solar illuminance: 90,000 lx.",
          "Identify solar spectral factor: 120 lm/W.",
          "Apply formula: W/m² = 90,000 ÷ 120.",
          "Perform calculation: 90,000 ÷ 120 = 750.",
          "Final Result: Solar irradiance is approximately 750 W/m²."
        ]
      },
      {
        title: "Example 2: Commercial Office Desk under 4000K LED Lighting",
        subtitle: "Calculate optical irradiance in W/m² for an office desk receiving 500 Lux under 4000K LED luminaires (spectral factor ~280 lm/W).",
        steps: [
          "Identify desktop illuminance: 500 lx.",
          "LED spectral factor: 280 lm/W.",
          "Calculate: 500 ÷ 280 = 1.7857.",
          "Final Result: Desk optical irradiance is 1.79 W/m²."
        ]
      },
      {
        title: "Example 3: Overcast Sky Daylight Sensor Reading",
        subtitle: "Convert 12,000 Lux overcast sky daylight (spectral factor ~115) into W/m².",
        steps: [
          "Identify illuminance: 12,000 lx.",
          "Daylight factor: 115 lm/W.",
          "Calculate: 12,000 ÷ 115 = 104.347.",
          "Final Result: Overcast sky irradiance is 104.35 W/m²."
        ]
      }
    ]
  },
  table: {
    title: "Lux to W/m² Conversion Reference Table across Solar & Artificial Spectra",
    headers: ["Incident Lux", "Sunlight AM1.5 (120 lm/W)", "White LED (280 lm/W)", "Halogen (30 lm/W)", "Environmental Context"],
    rows: [
      { fromVal: "100 lx", toVal: "0.833 W/m²", extra: "0.357 W/m²", extra2: "3.333 W/m²", extra3: "Industrial warehouse storage aisles" },
      { fromVal: "300 lx", toVal: "2.500 W/m²", extra: "1.071 W/m²", extra2: "10.000 W/m²", extra3: "Classroom lecture hall desk space" },
      { fromVal: "500 lx", toVal: "4.167 W/m²", extra: "1.786 W/m²", extra2: "16.667 W/m²", extra3: "Standard commercial office computer desk" },
      { fromVal: "1,000 lx", toVal: "8.333 W/m²", extra: "3.571 W/m²", extra2: "33.333 W/m²", extra3: "Precision electronics assembly table" },
      { fromVal: "10,000 lx", toVal: "83.333 W/m²", extra: "35.714 W/m²", extra2: "333.333 W/m²", extra3: "Full indirect outdoor daylight in open shade" },
      { fromVal: "50,000 lx", toVal: "416.667 W/m²", extra: "178.571 W/m²", extra2: "1,666.667 W/m²", extra3: "Hazy noon solar illuminance" },
      { fromVal: "100,000 lx", toVal: "833.333 W/m²", extra: "357.143 W/m²", extra2: "3,333.333 W/m²", extra3: "Direct peak summer clear noon sunlight" }
    ]
  },
  applications: {
    title: "Industry Applications of Lux to W/m² Engineering Calculations",
    items: [
      {
        title: "Meteorology & Meteorological Solar Radiation",
        text: "Meteorologists convert light meter daylight readings into solar irradiance (W/m²) when dedicated pyranometers are unavailable."
      },
      {
        title: "Greenhouse HVAC Thermal Load & Shading Design",
        text: "Agricultural engineers convert interior greenhouse lux logs into thermal irradiance (W/m²) to automate shade curtain deployment."
      },
      {
        title: "Building Envelope Solar Heat Gain (SHGC) Modeling",
        text: "Architectural engineers estimate solar thermal gain through window glazing by converting outdoor daylight lux into incident W/m²."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Lux to W/m²",
    items: [
      "Applying a single conversion factor for all light sources: Solar spectrum (~120 lm/W) differs fundamentally from white LED (~280 lm/W) or incandescent (~15 lm/W).",
      "Ignoring infrared radiation in sunlight: Solar radiation includes massive IR energy that lux meters cannot see.",
      "Confusing electrical power density with optical irradiance: Electrical W/m² includes thermal waste power, while optical W/m² measures radiant light power."
    ]
  },
  faqs: [
    {
      question: "How do I convert Lux to W/m² for sunlight?",
      answer: "Divide illuminance in Lux by approximately 120 (e.g., 12,000 Lux ÷ 120 = 100 W/m²)."
    },
    {
      question: "Why is there no single conversion factor between Lux and W/m²?",
      answer: "Because Lux weights light by human visual sensitivity, whereas W/m² measures total physical radiant energy across all wavelengths. The conversion depends on the light spectrum."
    },
    {
      question: "How many Lux is 1 W/m² of sunlight?",
      answer: "1 W/m² of standard sunlight (AM1.5 spectrum) equals approximately 120 Lux."
    },
    {
      question: "How many W/m² is 100,000 Lux of direct sunlight?",
      answer: "100,000 Lux ÷ 120 ≈ 833.33 W/m²."
    },
    {
      question: "What is the conversion factor for white LED lights?",
      answer: "White LEDs produce ~250 to 300 Lux per W/m². To find W/m² from LED lux, divide by ~280."
    },
    {
      question: "What instrument measures solar W/m² directly?",
      answer: "A pyranometer measures broad-spectrum solar irradiance in W/m²."
    },
    {
      question: "Why do incandescent bulbs require high W/m² per Lux?",
      answer: "Incandescent filaments radiate over 85% of their energy as invisible infrared heat, yielding only ~15 Lux per optical W/m²."
    },
    {
      question: "How do I calculate solar heat gain on a window from Lux?",
      answer: "Convert outdoor Lux to W/m² (divide Lux by 120), then multiply by window area (m²) and Solar Heat Gain Coefficient (SHGC)."
    }
  ],
  relatedList: [
    { label: "Lux to Watt ↔ Lumen (efficacy)", from: "lux", to: "watt-lumen-efficacy" },
    { label: "Lux to Nit", from: "lux", to: "nit" },
    { label: "Lux to Foot-candle", from: "lux", to: "foot-candle" },
    { label: "Lux to Illuminance Converter", from: "lux", to: "illuminance-converter" }
  ],
  references: [
    "ASTM G173-03: Standard Tables for Reference Solar Spectral Irradiances (AM1.5).",
    "ISO 9060: Solar Energy — Specification of Instruments for Measuring Solar Radiation.",
    "CIE 015:2004 Colorimetry & Photometry Standards."
  ]
};
