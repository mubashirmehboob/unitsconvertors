import { CustomArticleData } from "./types";

export const decibelToWattM2: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "watt-m2-sound",
  seoTitle: "Decibel to Watt/m² Converter (dB to W/m²) | UnitsConvertors.com",
  metaDescription: "Convert acoustic Decibels to Watts per Square Meter (dB to W/m²) with exact precision. Understand sound energy flux density, 10⁻¹² W/m² reference, formulas, and worked examples.",
  h1: "Decibel to Watt/m² Converter",
  introduction: [
    "The decibel (dB) is a convenient logarithmic scale used to express sound levels over a broad dynamic range. However, acoustic power flux density—the physical acoustic power transmitted across a surface area—is measured in Watts per square meter (W/m²).",
    "In acoustic engineering, transducer design, and thermal acoustic dissipation studies, converting decibel sound intensity level (dB SIL) into absolute Watts per square meter (W/m²) is essential for energy conservation calculations.",
    "Converting decibels to W/m² uses the power exponent equation: I (W/m²) = 10⁻¹² × 10^(dB / 10), referenced to the standard threshold I₀ = 10⁻¹² W/m². This guide provides mathematical derivations, conversion formulas, practical engineering examples, and complete reference tables."
  ],
  quickAnswer: {
    text: "To convert Decibels to Watts per square meter (W/m²), divide the decibel value by 10, raise 10 to that exponent, and multiply by 10⁻¹² W/m² (0.000000000001 W/m²). For example, 90 dB corresponds to 0.001 W/m² (1 mW/m²).",
    formulaDisplay: "I (W/m²) = 10⁻¹² × 10^(dB / 10)",
    subtext: "0 dB = 10⁻¹² W/m²; 120 dB = 1.0 W/m²."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB) in Acoustic Power Flux?",
    text: "The decibel (dB) is a logarithmic ratio. In sound intensity level (SIL), 0 dB SIL corresponds to the reference intensity threshold of human hearing I₀ = 10⁻¹² W/m² (1 picowatt per square meter)."
  },
  aboutTargetUnit: {
    title: "Understanding Watt per Square Meter (W/m²)",
    text: "Watt per square meter (symbol: W/m²) is the SI derived unit of acoustic power intensity and solar irradiance. In acoustics, 1 W/m² represents one Joule of sound energy crossing a one-square-meter boundary every second."
  },
  relationship: "The decibel scale compresses power flux logarithmically. Adding 10 dB multiplies physical energy density in W/m² by 10. Adding 3 dB doubles the acoustic flux density in W/m².",
  relationshipTitle: "Decibel vs Watt/m² Power Flux Comparison",
  relationshipItems: [
    { label: "0 dB", value: "0.000000000001 W/m² (1 pW/m² / Hearing threshold)" },
    { label: "30 dB", value: "0.000000001 W/m² (1 nW/m² / Soft bedroom ambience)" },
    { label: "60 dB", value: "0.000001 W/m² (1 µW/m² / Conversational speech at 1m)" },
    { label: "90 dB", value: "0.001 W/m² (1 mW/m² / Heavy lawn mower at 1m)" },
    { label: "120 dB", value: "1.0 W/m² (1 W/m² / Auditory discomfort threshold)" }
  ],
  formula: {
    text: "Multiply the reference sound intensity I₀ = 10⁻¹² W/m² by 10 raised to the power of (dB / 10).",
    math: "I \\text{ (W/m²)} = 10^{-12} \\times 10^{\\frac{\\text{dB}}{10}}",
    subtext: "Where 10⁻¹² W/m² = 0.000000000001 W/m²."
  },
  formulaTitle: "Decibel to Watt/m² Conversion Formula",
  practicalTip: {
    title: "Decimal Movement Trick for Watt/m²",
    text: "Notice that every 10 dB moves the decimal point of 10⁻¹² W/m² one position to the right: 0 dB = 10⁻¹² W/m², 10 dB = 10⁻¹¹ W/m², 20 dB = 10⁻¹⁰ W/m², ..., 120 dB = 1 W/m²."
  },
  expertNote: {
    title: "SI Coherent Power Intensity Units",
    text: "Under ISO 80000-8, W/m² is the coherent SI unit for acoustic surface power density. Using W/m² allows direct integration with thermodynamic heat loss and electrical power equations."
  },
  examples: {
    title: "Step-by-Step dB to W/m² Worked Examples",
    items: [
      {
        title: "Example 1: Quiet Suburban Office Ambient",
        subtitle: "Convert an ambient sound level of 50 dB to W/m².",
        steps: [
          "Identify sound level: 50 dB.",
          "Calculate exponent: 50 ÷ 10 = 5.",
          "Compute 10⁵ = 100,000.",
          "Multiply by 10⁻¹² W/m²: 10⁻¹² × 100,000 = 10⁻⁷ W/m² = 0.0000001 W/m².",
          "Final Result: 50 dB equals 0.0000001 W/m² (0.1 µW/m²)."
        ]
      },
      {
        title: "Example 2: Industrial Machine Shop Level",
        subtitle: "Convert a factory floor noise measurement of 90 dB to W/m².",
        steps: [
          "Identify sound level: 90 dB.",
          "Calculate exponent: 90 ÷ 10 = 9.",
          "Compute 10⁹ = 1,000,000,000.",
          "Multiply by 10⁻¹² W/m²: 10⁻¹² × 10⁹ = 10⁻³ W/m² = 0.001 W/m².",
          "Final Result: 90 dB corresponds to 0.001 W/m² (1 mW/m²)."
        ]
      },
      {
        title: "Example 3: Rock Concert Front Row Speaker",
        subtitle: "Convert a concert sound level of 110 dB to W/m².",
        steps: [
          "Identify sound level: 110 dB.",
          "Calculate exponent: 110 ÷ 10 = 11.",
          "Compute 10¹¹ = 100,000,000,000.",
          "Multiply by 10⁻¹² W/m²: 10⁻¹² × 10¹¹ = 0.1 W/m².",
          "Final Result: 110 dB corresponds to 0.1 W/m² (100 mW/m²)."
        ]
      }
    ]
  },
  table: {
    title: "Decibel to Watt/m² Reference Table",
    headers: ["Decibels (dB)", "Power Flux (W/m²)", "Power Flux (µW/m²)", "Acoustic Context / Environment"],
    rows: [
      { fromVal: "0 dB", toVal: "0.000000000001 W/m²", extra: "0.000001 µW/m²", extra2: "Human hearing threshold at 1 kHz" },
      { fromVal: "20 dB", toVal: "0.000000000100 W/m²", extra: "0.000100 µW/m²", extra2: "Quiet recording booth background" },
      { fromVal: "40 dB", toVal: "0.000000010000 W/m²", extra: "0.010000 µW/m²", extra2: "Quiet residential bedroom at night" },
      { fromVal: "60 dB", toVal: "0.000001000000 W/m²", extra: "1.000000 µW/m²", extra2: "Normal conversational speech at 1 meter" },
      { fromVal: "80 dB", toVal: "0.000100000000 W/m²", extra: "100.000000 µW/m²", extra2: "Busy city traffic street corner" },
      { fromVal: "90 dB", toVal: "0.001000000000 W/m²", extra: "1,000.000000 µW/m²", extra2: "Heavy lawn mower / industrial machinery" },
      { fromVal: "100 dB", toVal: "0.010000000000 W/m²", extra: "10,000.000000 µW/m²", extra2: "Pneumatic jackhammer at 1 meter" },
      { fromVal: "120 dB", toVal: "1.000000000000 W/m²", extra: "1,000,000.000000 µW/m²", extra2: "Human physical pain threshold" },
      { fromVal: "130 dB", toVal: "10.000000000000 W/m²", extra: "10,000,000.000000 µW/m²", extra2: "Immediate risk of acoustic injury" },
      { fromVal: "140 dB", toVal: "100.000000000000 W/m²", extra: "100,000,000.000000 µW/m²", extra2: "Jet engine takeoff at 30 meters distance" }
    ]
  },
  applications: {
    title: "Real-World Applications of dB to Watt/m² Conversion",
    items: [
      {
        title: "Loudspeaker Efficiency & Acoustic Power Radiation",
        text: "Audio hardware engineers convert measured sound output in dB into W/m² to determine acoustic conversion efficiency relative to electrical amplifier input wattage."
      },
      {
        title: "Acoustic Shielding & Barrier Enclosure Design",
        text: "Industrial noise control engineers evaluate thermal and acoustic energy density passing through soundproofing barriers."
      },
      {
        title: "Ultrasound & Biomedical Energy Density Audits",
        text: "Medical ultrasound engineers convert decibel acoustic pressure levels into W/m² intensity to verify FDA tissue heating safety limits."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in dB to Watt/m² Calculations",
    items: [
      "Dividing decibels by 20 instead of 10 when calculating power intensity quantities in W/m².",
      "Confusing total acoustic power output in Watts (W) with acoustic power flux density in W/m².",
      "Assuming 0 dB means zero acoustic energy (0 dB = 10⁻¹² W/m²).",
      "Adding W/m² values by adding decibel values directly."
    ]
  },
  faqs: [
    {
      question: "How do I convert decibels to W/m²?",
      answer: "Use I = 10⁻¹² × 10^(dB / 10). Divide the decibels by 10, compute 10 to that power, and multiply by 10⁻¹² W/m²."
    },
    {
      question: "What is 0 dB in W/m²?",
      answer: "0 dB corresponds to 10⁻¹² Watts per square meter (0.000000000001 W/m² or 1 picowatt/m²)."
    },
    {
      question: "What is 120 dB in W/m²?",
      answer: "120 dB is equal to exactly 1.0 Watt per square meter (1.0 W/m²)."
    },
    {
      question: "Why is 10⁻¹² W/m² used as the reference baseline?",
      answer: "10⁻¹² W/m² is the international standard reference intensity because it corresponds to the average threshold of human hearing for a 1 kHz pure tone."
    },
    {
      question: "How many W/m² is 60 dB?",
      answer: "60 dB equals 0.000001 Watts per square meter (1 µW/m²)."
    },
    {
      question: "What is 90 dB in W/m²?",
      answer: "90 dB equals 0.001 Watts per square meter (1 mW/m²)."
    },
    {
      question: "How does a 10 dB increase affect W/m²?",
      answer: "A +10 dB increase multiplies the physical sound power intensity in W/m² by 10."
    },
    {
      question: "How does a 3 dB increase affect W/m²?",
      answer: "A +3 dB increase doubles the physical sound power intensity in W/m²."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Pascal (Sound)", from: "decibel", to: "pascal-sound" },
    { label: "Decibel to Sound Intensity", from: "decibel", to: "sound-intensity" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics.",
    "Bies, D. A., Hansen, C. H., & Howard, C. Q. (2017). Engineering Noise Control (5th ed.). CRC Press.",
    "ANSI/ASA S1.1-2013 Acoustical Terminology."
  ]
};
