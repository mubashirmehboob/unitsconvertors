import { CustomArticleData } from "./types";

export const decibelToSoundIntensity: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "sound-intensity",
  seoTitle: "Decibel to Sound Intensity Converter (dB to W/m²) | UnitsConvertors.com",
  metaDescription: "Convert acoustic Decibels to Sound Intensity in Watts per square meter (W/m²). Learn the I = I₀ × 10^(dB/10) power formula, 1 pW/m² reference baseline, examples, and tables.",
  h1: "Decibel to Sound Intensity Converter",
  introduction: [
    "Sound intensity is a vector physical quantity that measures the rate of acoustic energy flow passing per unit area perpendicular to the direction of wave propagation.",
    "While sound level meters display acoustic levels logarithmically in decibels (dB), acoustic energy balance calculations, noise enclosure insulation design, and acoustic intensity probe measurements rely on linear sound intensity in Watts per square meter (W/m²).",
    "Converting sound intensity level in decibels (dB SIL) to sound intensity in Watts per square meter is calculated using the power exponent equation: I = I₀ × 10^(dB / 10), where I₀ = 10⁻¹² W/m² (1 picowatt per square meter). This guide covers mathematical derivations, acoustic power calculations, step-by-step examples, and practical engineering tables."
  ],
  quickAnswer: {
    text: "To convert Decibels to Sound Intensity in Watts per square meter (W/m²), divide the decibel value by 10, raise 10 to that power, and multiply by 10⁻¹² W/m² (1 pW/m²). For example, 60 dB corresponds to 0.000001 W/m² (1 µW/m²).",
    formulaDisplay: "I (W/m²) = 10⁻¹² × 10^(dB / 10)",
    subtext: "0 dB = 10⁻¹² W/m² (1 pW/m² threshold); 120 dB = 1.0 W/m²."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB SIL)?",
    text: "In acoustic intensity measurements, the decibel (dB SIL) represents a logarithmic ratio of sound intensity relative to the reference threshold I₀ = 1 picowatt per square meter (10⁻¹² W/m²). It compresses the immense range of audible acoustic power into a practical 0 to 140 dB scale."
  },
  aboutTargetUnit: {
    title: "Understanding Sound Intensity (W/m²)",
    text: "Sound intensity (symbol: I) is the acoustic power flux density measured in Watts per square meter (W/m²). In a free spherical wave field, sound intensity decreases with distance following the inverse-square law (I ∝ 1/r²)."
  },
  relationship: "Because sound intensity is a power-density quantity, every 10 dB increase multiplies acoustic energy flux in W/m² by a factor of 10. A 3 dB increase doubles the acoustic energy intensity.",
  relationshipTitle: "Decibel vs Sound Intensity Power Scale",
  relationshipItems: [
    { label: "0 dB", value: "0.000000000001 W/m² (1 pW/m² / Auditory threshold at 1 kHz)" },
    { label: "30 dB", value: "0.000000001 W/m² (1 nW/m² / Quiet bedroom atmosphere)" },
    { label: "60 dB", value: "0.000001 W/m² (1 µW/m² / Normal conversational speech)" },
    { label: "90 dB", value: "0.001 W/m² (1 mW/m² / Heavy industrial machinery)" },
    { label: "120 dB", value: "1.0 W/m² (1,000,000 µW/m² / Human pain threshold)" }
  ],
  formula: {
    text: "Multiply the reference sound intensity I₀ (10⁻¹² W/m²) by 10 raised to the power of (dB / 10).",
    math: "I \\text{ (W/m²)} = 10^{-12} \\times 10^{\\frac{\\text{dB}}{10}}",
    subtext: "Where I₀ = 10⁻¹² W/m² = 1 pW/m²."
  },
  formulaTitle: "Decibel to Sound Intensity Formula",
  practicalTip: {
    title: "Rule of Tens and Threes for Sound Power",
    text: "For sound intensity (power quantity): +10 dB multiplies intensity by 10, while +3 dB multiplies intensity by approximately 2 (doubles sound energy)."
  },
  expertNote: {
    title: "Power Quantity vs Field Quantity Exponent",
    text: "Sound intensity is a power quantity (proportional to squared pressure, I = p² / ρc). Therefore, decibels use 10 log₁₀(I / I₀) rather than 20 log₁₀(p / p₀), and converting back to W/m² requires dividing dB by 10 in the exponent."
  },
  examples: {
    title: "Step-by-Step dB to Sound Intensity Worked Examples",
    items: [
      {
        title: "Example 1: Normal Human Conversation",
        subtitle: "Convert a conversational speech level of 60 dB to sound intensity in W/m².",
        steps: [
          "Identify acoustic sound level: 60 dB.",
          "Calculate exponent: 60 ÷ 10 = 6.",
          "Compute power of 10: 10⁶ = 1,000,000.",
          "Multiply by reference I₀: 10⁻¹² × 1,000,000 = 10⁻⁶ W/m² = 0.000001 W/m².",
          "Final Result: 60 dB corresponds to 0.000001 W/m² (1 µW/m²)."
        ]
      },
      {
        title: "Example 2: Industrial Concert Sound Level",
        subtitle: "Convert an amplified music sound level of 100 dB to sound intensity.",
        steps: [
          "Identify sound level: 100 dB.",
          "Calculate exponent: 100 ÷ 10 = 10.",
          "Compute power of 10: 10¹⁰ = 10,000,000,000.",
          "Multiply by I₀: 10⁻¹² × 10¹⁰ = 10⁻² W/m² = 0.01 W/m².",
          "Final Result: 100 dB corresponds to 0.01 W/m² (10 mW/m²)."
        ]
      },
      {
        title: "Example 3: Pain Threshold Sound Level",
        subtitle: "Convert 120 dB sound intensity level to Watts per square meter.",
        steps: [
          "Identify sound level: 120 dB.",
          "Calculate exponent: 120 ÷ 10 = 12.",
          "Compute power of 10: 10¹².",
          "Multiply by reference I₀: 10⁻¹² × 10¹² = 1.0 W/m².",
          "Final Result: 120 dB corresponds to exactly 1.0 W/m²."
        ]
      }
    ]
  },
  table: {
    title: "Decibel to Sound Intensity Reference Table",
    headers: ["Decibels (dB)", "Sound Intensity (W/m²)", "Sound Intensity (µW/m²)", "Typical Acoustic Context"],
    rows: [
      { fromVal: "0 dB", toVal: "0.000000000001 W/m²", extra: "0.000001 µW/m²", extra2: "Human hearing threshold at 1 kHz" },
      { fromVal: "20 dB", toVal: "0.000000000100 W/m²", extra: "0.0001 µW/m²", extra2: "Quiet recording booth background" },
      { fromVal: "40 dB", toVal: "0.000000010000 W/m²", extra: "0.01 µW/m²", extra2: "Quiet residential bedroom at night" },
      { fromVal: "60 dB", toVal: "0.000001000000 W/m²", extra: "1.0 µW/m²", extra2: "Conversational speech at 1 meter" },
      { fromVal: "80 dB", toVal: "0.000100000000 W/m²", extra: "100.0 µW/m²", extra2: "Busy city traffic street corner" },
      { fromVal: "90 dB", toVal: "0.001000000000 W/m²", extra: "1,000.0 µW/m²", extra2: "Heavy lawn mower / industrial machinery" },
      { fromVal: "100 dB", toVal: "0.010000000000 W/m²", extra: "10,000.0 µW/m²", extra2: "Pneumatic jackhammer at 1 meter" },
      { fromVal: "120 dB", toVal: "1.000000000000 W/m²", extra: "1,000,000.0 µW/m²", extra2: "Human physical pain threshold" },
      { fromVal: "130 dB", toVal: "10.000000000000 W/m²", extra: "10,000,000.0 µW/m²", extra2: "Immediate acoustic injury risk" },
      { fromVal: "140 dB", toVal: "100.000000000000 W/m²", extra: "100,000,000.0 µW/m²", extra2: "Jet engine takeoff at 30 meters" }
    ]
  },
  applications: {
    title: "Real-World Applications of dB to Sound Intensity Conversion",
    items: [
      {
        title: "Acoustic Power Mapping & Sound Intensity Probes",
        text: "Acousticians use dual-microphone sound intensity probes to map noise radiation patterns across engine blocks and industrial machinery, locating specific noise sources."
      },
      {
        title: "Building Noise Insulation & Enclosure Design",
        text: "Building engineers calculate sound energy transmission loss (TL) through walls and windows by computing sound intensity vectors on both sides of partition assemblies."
      },
      {
        title: "Environmental Sound Propagation & Inverse-Square Law",
        text: "Environmental noise assessors calculate acoustic energy drop-off over distance across open farmland, highways, and wind turbine installations."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Sound Intensity Calculations",
    items: [
      "Dividing dB by 20 instead of 10 when calculating sound intensity (intensity is a power density, requiring 10^(dB/10)).",
      "Confusing sound intensity (W/m²) with sound power (Watts) or sound pressure (Pascals).",
      "Assuming sound intensity probes only measure sound pressure scalar rather than directional acoustic energy flux.",
      "Adding sound intensities by simply adding decibel values linearly."
    ]
  },
  faqs: [
    {
      question: "How do you convert dB to sound intensity in W/m²?",
      answer: "Use the formula I = 10⁻¹² × 10^(dB / 10). Divide the decibel value by 10, raise 10 to that power, and multiply by 10⁻¹² W/m²."
    },
    {
      question: "What is 0 dB in sound intensity?",
      answer: "0 dB corresponds to 10⁻¹² Watts per square meter (0.000000000001 W/m² or 1 pW/m²)."
    },
    {
      question: "What is 120 dB in W/m²?",
      answer: "120 dB corresponds to exactly 1.0 Watt per square meter (1 W/m²)."
    },
    {
      question: "Why do sound intensity decibels divide by 10 while pressure decibels divide by 20?",
      answer: "Sound intensity is a power quantity (linear in energy flux). Sound pressure is an amplitude field quantity (proportional to square root of power). Therefore 10 log₁₀(I) = 20 log₁₀(p)."
    },
    {
      question: "How much intensity is added by +3 dB?",
      answer: "An increase of +3 dB doubles the physical acoustic energy intensity in W/m²."
    },
    {
      question: "How much intensity is added by +10 dB?",
      answer: "An increase of +10 dB multiplies physical sound intensity in W/m² by a factor of 10."
    },
    {
      question: "What is the sound intensity of 90 dB?",
      answer: "90 dB equals 0.001 Watts per square meter (1 mW/m²)."
    },
    {
      question: "Can sound intensity be negative?",
      answer: "Sound intensity vector magnitude is positive, but in vector probes, net energy flow away from a source is positive, while flow toward a source can be assigned a negative direction."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Pascal (Sound)", from: "decibel", to: "pascal-sound" },
    { label: "Decibel to Watt/m²", from: "decibel", to: "watt-m2-sound" }
  ],
  references: [
    "ISO 9614-1:1993 Acoustics — Determination of sound power levels of noise sources using sound intensity.",
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics.",
    "Fahy, F. J. (1995). Sound Intensity (2nd ed.). E & FN Spon."
  ]
};
