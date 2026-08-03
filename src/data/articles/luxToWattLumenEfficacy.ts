import { CustomArticleData } from "./types";

export const luxToWattLumenEfficacy: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "watt-lumen-efficacy",
  seoTitle: "Lux to Watt ↔ Lumen (Efficacy) Calculation | UnitsConvertors.com",
  metaDescription: "Calculate Radiometric Watts and Luminous Efficacy from Lux using spectral power distribution. Learn V(λ) photopic weighting, PAR horticultural light, worked examples, and FAQs.",
  h1: "Lux to Watt ↔ Lumen (Efficacy) Engineering Calculation",
  introduction: [
    "Lux (lx) and Watts (W) operate across two distinct domains of optical physics. Lux is a photometric unit that measures visual illuminance—the photopically weighted luminous flux incident on a surface per unit area (lumens per square meter), adjusted for human eye spectral sensitivity $V(\lambda)$. In contrast, the Watt is a radiometric unit that measures raw electromagnetic radiant power across all wavelengths without human eye filtering.",
    "Because lux measures eye-weighted visual brightness while watts measure physical radiant energy, there is no single universal conversion factor between lux and watts without specifying the light source's Spectral Power Distribution (SPD), dominant wavelength, and overall Luminous Efficacy ($\eta$ in lumens per watt, lm/W). At the peak human eye sensitivity wavelength of 555 nm (green light), 1 Watt of radiant flux equals exactly 683 lumens (683 lx over 1 m²). For broad-spectrum sources like white LEDs or sunlight, efficacy ranges from 90 to 350 lm/W.",
    "This calculation represents a Type B conditional engineering transformation rather than a direct unit conversion. This guide covers $V(\lambda)$ CIE photopic sensitivity curves, botanical horticultural PAR/PPFD lighting, solar photovoltaic energy balance, step-by-step calculations, and practical optical examples."
  ],
  quickAnswer: {
    text: "Lux measures photopically weighted visual brightness, while Watts measure physical radiant energy. Therefore, there is no single conversion factor between lux and watts. To calculate optical Irradiance (W/m²) from Lux, divide illuminance in Lux by the source's luminous efficacy in lumens per watt (lm/W). At peak eye sensitivity (555 nm monochromatic green), 683 Lux equals 1.0 W/m².",
    formulaDisplay: "Irradiance (W/m²) = Lux ÷ Luminous Efficacy (lm/W)",
    subtext: "Monochromatic 555nm peak green light has a maximum theoretical efficacy of 683 lm/W."
  },
  aboutSourceUnit: {
    title: "What is a Lux (lx)?",
    text: "The Lux (symbol: lx) is the SI unit of illuminance, defined as 1 lumen per square meter (1 lx = 1 lm/m²). It quantifies visible light density impinging upon a surface plane according to the CIE 1931 standard photopic eye observer curve $V(\lambda)$."
  },
  aboutTargetUnit: {
    title: "Understanding Radiant Power & Luminous Efficacy (W & lm/W)",
    text: "Radiant Power (Watts, W) measures total physical electromagnetic energy emitted or received per second. Luminous Efficacy ($\eta$, lm/W) describes how efficiently an optical source converts electrical or radiant watts into visible human photopic lumens."
  },
  relationship: "Photometric Lux and Radiometric W/m² are linked by luminous efficacy: Irradiance (W/m²) = Lux / Efficacy (lm/W). Standard cool-white LEDs yield ~300 lm/W optical efficacy (~100-150 lm/W electrical efficacy), while solar AM1.5 sunlight yields ~120 lx per W/m².",
  relationshipTitle: "Lux to Optical Irradiance (W/m²) Across Light Source Efficacies (at 1,000 Lux)",
  relationshipItems: [
    { label: "1,000 lx @ 555 nm Monochromatic (683 lm/W)", value: "1.464 W/m² (Maximum theoretical photopic efficiency peak)" },
    { label: "1,000 lx @ High-Efficacy White LED (300 lm/W)", value: "3.333 W/m² (Modern commercial LED optical spectrum)" },
    { label: "1,000 lx @ AM1.5 Daylight Spectrum (120 lm/W)", value: "8.333 W/m² (Natural solar spectral distribution)" },
    { label: "1,000 lx @ Halogen Filament Lamp (30 lm/W)", value: "33.333 W/m² (High infrared thermal emission lamp)" },
    { label: "1,000 lx @ Incandescent Bulb (15 lm/W)", value: "66.667 W/m² (Low-efficiency filament light source)" }
  ],
  formula: {
    text: "Divide illuminance in Lux by the light source's optical luminous efficacy in lumens per watt (lm/W) to calculate physical optical irradiance in Watts per square meter (W/m²).",
    math: "Irradiance (W/m²) = Lux / Luminous Efficacy (lm/W)",
    subtext: "To find total Radiant Watts over an area A (m²): Watts = (Lux × Area in m²) / Efficacy (lm/W)."
  },
  formulaTitle: "Lux to Radiant Power Conversion Formula",
  practicalTip: {
    title: "Horticultural PAR vs Photopic Lux Warning",
    text: "Plants absorb light via chlorophyll A & B (blue 450nm & red 660nm), whereas human eye photopic lux peaks at green 555nm. Green lux meters severely miscount plant-usable PAR energy. Horticultural engineers use PPFD (μmol/m²/s) instead of lux."
  },
  expertNote: {
    title: "CIE Standard Photopic Observer V(λ)",
    text: "The CIE 1931 photopic curve defines human visual response from 380 nm to 780 nm. At 555 nm, $V(555) = 1.0$ (683 lm/W). At 450 nm (blue) or 650 nm (red), $V(\lambda)$ drops significantly, requiring more radiant watts to produce the same lux level."
  },
  examples: {
    title: "Step-by-Step lx to W/m² Engineering Worked Examples",
    items: [
      {
        title: "Example 1: High-Efficiency Commercial LED Office Panel",
        subtitle: "A commercial LED panel with an optical efficacy of 250 lm/W delivers 500 Lux to a desk plane. Calculate optical irradiance in W/m².",
        steps: [
          "Identify target illuminance: 500 lx.",
          "Identify optical efficacy: 250 lm/W.",
          "Apply formula: Irradiance = 500 ÷ 250.",
          "Perform calculation: 500 ÷ 250 = 2.0.",
          "Final Result: The optical irradiance on the desk is 2.0 W/m²."
        ]
      },
      {
        title: "Example 2: Direct Summer Solar Irradiance Estimate",
        subtitle: "A weather station measures 100,000 Lux sunlight (solar efficacy ~120 lx per W/m²). Calculate solar irradiance in W/m².",
        steps: [
          "Identify solar illuminance: 100,000 lx.",
          "Solar spectrum efficacy: ~120 lm/W.",
          "Calculate: 100,000 ÷ 120 = 833.33.",
          "Final Result: The solar optical irradiance is approximately 833.33 W/m²."
        ]
      },
      {
        title: "Example 3: Monochromatic 555nm Laser Calibration Target",
        subtitle: "Calculate optical irradiance for a 555nm green laser beam producing 683 Lux.",
        steps: [
          "Identify illuminance: 683 lx.",
          "Efficacy at 555nm peak: 683 lm/W.",
          "Calculate: 683 ÷ 683 = 1.0.",
          "Final Result: 683 Lux of 555nm green light corresponds to 1.0 W/m²."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Optical Irradiance (W/m²) Engineering Matrix across Light Sources",
    headers: ["Target Lux", "555nm Green (683 lm/W)", "LED Panel (250 lm/W)", "Sunlight (120 lm/W)", "Application Context"],
    rows: [
      { fromVal: "10 lx", toVal: "0.015 W/m²", extra: "0.040 W/m²", extra2: "0.083 W/m²", extra3: "Night streetlight minimum ambient" },
      { fromVal: "100 lx", toVal: "0.146 W/m²", extra: "0.400 W/m²", extra2: "0.833 W/m²", extra3: "Industrial warehouse storage aisle" },
      { fromVal: "300 lx", toVal: "0.439 W/m²", extra: "1.200 W/m²", extra2: "2.500 W/m²", extra3: "Classroom lecture hall desk plane" },
      { fromVal: "500 lx", toVal: "0.732 W/m²", extra: "2.000 W/m²", extra2: "4.167 W/m²", extra3: "Standard commercial office computer desk" },
      { fromVal: "1,000 lx", toVal: "1.464 W/m²", extra: "4.000 W/m²", extra2: "8.333 W/m²", extra3: "Precision electronics micro-assembly" },
      { fromVal: "10,000 lx", toVal: "14.641 W/m²", extra: "40.000 W/m²", extra2: "83.333 W/m²", extra3: "Full indirect open-shade daylight" },
      { fromVal: "100,000 lx", toVal: "146.413 W/m²", extra: "400.000 W/m²", extra2: "833.333 W/m²", extra3: "Direct noon summer solar illuminance" }
    ]
  },
  applications: {
    title: "Industry Applications of Lux to Watt Luminous Efficacy Calculations",
    items: [
      {
        title: "Optical Sensor & Photodiode Calibration",
        text: "Electro-optical engineers convert photometric lux into radiometric radiant power (watts) to calibrate silicon photodiode responsivity curves."
      },
      {
        title: "Photobiology & UV/Visible Material Curing",
        text: "Industrial process engineers evaluate resin curing lamps by calculating optical irradiance in W/cm² from photopic lux measurements."
      },
      {
        title: "Solar PV Cell Spectral Efficiency Modeling",
        text: "Renewable energy engineers convert meteorological daylight lux logs into incident solar irradiance (W/m²) for PV system yield simulation."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Lux to Watts",
    items: [
      "Assuming a universal 683 lm/W conversion factor: 683 lm/W applies ONLY to monochromatic 555nm green light; broad-spectrum light is significantly lower.",
      "Using electrical lamp watts instead of optical radiant watts: A 100W electrical lamp emits only 15-30 optical watts due to heat dissipation.",
      "Confusing photopic human vision (lux) with plant PAR absorption: Lux meters cannot evaluate growth potential for red/blue horticultural LEDs."
    ]
  },
  faqs: [
    {
      question: "Is there a direct conversion factor between Lux and Watts?",
      answer: "No. Lux measures human visual brightness, while Watts measure physical radiant energy. Converting requires knowing the light source's luminous efficacy (lm/W)."
    },
    {
      question: "What is the formula to convert Lux to optical W/m²?",
      answer: "The formula is: Irradiance (W/m²) = Lux ÷ Luminous Efficacy (lm/W)."
    },
    {
      question: "Why is 683 lm/W famous in photometry?",
      answer: "Because 683 lm/W is the maximum theoretical luminous efficacy of monochromatic light at 555 nm (green), where human photopic vision is most sensitive."
    },
    {
      question: "How many W/m² is 100,000 Lux of sunlight?",
      answer: "Sunlight has an efficacy of ~120 lm/W. 100,000 Lux ÷ 120 ≈ 833.33 W/m² optical irradiance."
    },
    {
      question: "What is the difference between Photometric and Radiometric units?",
      answer: "Photometric units (Lux, Lumens, Candela) weight light by human eye sensitivity. Radiometric units (Watts, Joules, W/m²) measure raw physical energy."
    },
    {
      question: "Why can't I use Lux for plant growth lighting?",
      answer: "Plants absorb blue (450nm) and red (660nm) light, while lux meters favor green (555nm). Use Photosynthetic Photon Flux Density (PPFD) for plants."
    },
    {
      question: "What is the difference between electrical watts and optical watts?",
      answer: "Electrical watts measure power drawn from the wall outlet. Optical watts measure raw electromagnetic light power radiated into space."
    },
    {
      question: "How do I calculate total Watts needed to illuminate a room?",
      answer: "Total Electrical Watts = (Target Lux × Room Area in m²) ÷ Electrical Efficacy (lm/W)."
    }
  ],
  relatedList: [
    { label: "Lux to Lux ↔ Watt/m²", from: "lux", to: "lux-watt-m2" },
    { label: "Lux to Lumen", from: "lux", to: "lumen" },
    { label: "Lux to Foot-candle", from: "lux", to: "foot-candle" },
    { label: "Lux to Illuminance Converter", from: "lux", to: "illuminance-converter" }
  ],
  references: [
    "CIE 1931 Standard Colorimetric Observer & Photopic Curve V(λ).",
    "ISO 80000-7: Quantities and Units — Light and Radiation.",
    "NIST Special Publication 250-37: Photometric Calibrations."
  ]
};
