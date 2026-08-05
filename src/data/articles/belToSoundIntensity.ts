import { CustomArticleData } from "./types";

export const belToSoundIntensity: CustomArticleData = {
  fromUnitId: "bel",
  toUnitId: "sound-intensity",
  seoTitle: "Bel to Sound Intensity Converter (B to W/m²) | UnitsConvertors.com",
  metaDescription: "Convert Bels to Sound Intensity in Watts per square meter (B to W/m²) with scientific accuracy. Learn energy flux equations, 10⁻¹² W/m² baseline, formulas, and examples.",
  h1: "Bel to Sound Intensity Converter",
  introduction: [
    "Sound intensity quantifies the rate at which acoustic energy flows through a unit surface area perpendicular to the direction of sound wave propagation. While declared noise emission ratings for equipment specify sound power level in Bels (B), physical transducer engineering and acoustic hazard assessments measure energy flux in Watts per square meter (W/m²).",
    "Because 1 Bel represents a tenfold (10:1) power ratio (1 B = 10 dB), converting a sound intensity level in Bels to absolute sound intensity in W/m² follows a direct exponential formula: I = I₀ × 10^B, where I₀ = 10⁻¹² W/m² (1 picowatt per square meter). On this scale, 0 Bels corresponds to 10⁻¹² W/m², 6 Bels equals 10⁻⁶ W/m², and 12 Bels equals 1.0 W/m².",
    "This guide explains the fundamental physical principles governing acoustic energy flux, logarithmic-to-linear intensity equations, practical environmental benchmarks, and step-by-step worked examples."
  ],
  quickAnswer: {
    text: "To convert Bels to Sound Intensity in Watts per square meter, calculate: I = 10⁻¹² × 10^B. For example, 9 Bels corresponds to 0.001 W/m² of acoustic intensity.",
    formulaDisplay: "I (W/m²) = 10⁻¹² × 10^B",
    subtext: "Based on international reference intensity I₀ = 10⁻¹² W/m²."
  },
  aboutSourceUnit: {
    title: "What is a Bel (B)?",
    text: "The bel (symbol: B) is the fundamental logarithmic unit created by Bell System engineers to quantify power ratios. One bel corresponds to an order of magnitude (10:1) power ratio or 10 decibels."
  },
  aboutTargetUnit: {
    title: "Understanding Sound Intensity (W/m²)",
    text: "Sound intensity (symbol: I) is a vector quantity defined as the rate of sound energy flow per unit area, measured in Watts per square meter (W/m²). It measures acoustic power passing through a surface."
  },
  relationship: "Sound intensity level in Bels relates to physical energy flux I in W/m² via L_I = log₁₀(I / I₀). Reversing this equation yields physical sound intensity: I = 10⁻¹² × 10^B, where I₀ = 10⁻¹² W/m².",
  relationshipTitle: "Bel to Sound Intensity Mapping",
  relationshipItems: [
    { label: "0.0 B", value: "10⁻¹² W/m² (0.000000000001 W/m² / hearing threshold)" },
    { label: "3.0 B", value: "10⁻⁹ W/m² (0.000000001 W/m² / quiet bedroom)" },
    { label: "6.0 B", value: "10⁻⁶ W/m² (0.000001 W/m² / normal spoken voice)" },
    { label: "9.0 B", value: "10⁻³ W/m² (0.001 W/m² / heavy lawn mower)" },
    { label: "12.0 B", value: "1.0 W/m² (Threshold of auditory pain)" }
  ],
  formula: {
    text: "Multiply the baseline acoustic reference intensity I₀ (10⁻¹² W/m²) by 10 raised to the power of B (bels).",
    math: "I = 10⁻¹² × 10^B",
    subtext: "Where I is sound intensity in W/m², and I₀ = 10⁻¹² W/m²."
  },
  formulaTitle: "Bel to Sound Intensity Conversion Formula",
  practicalTip: {
    title: "Simple Power of 10 Rule",
    text: "Because Bels represent power ratios directly, every 1 Bel increase multiplies physical acoustic intensity in W/m² by exactly 10. For instance, 4 B = 10⁻⁸ W/m², 5 B = 10⁻⁷ W/m², and 6 B = 10⁻⁶ W/m²."
  },
  expertNote: {
    title: "ISO 80000-8 Energy Quantity Rule",
    text: "Under ISO 80000-8 specifications, sound intensity is an energy flux quantity. In Bels, L_I = lg(I / I₀). The power of 10 directly equals the Bel value B without needing any fractional exponent."
  },
  examples: {
    title: "Step-by-Step Bel to Sound Intensity Calculations",
    items: [
      {
        title: "Example 1: Spoken Speech (6.0 Bels)",
        subtitle: "Calculate sound intensity in W/m² for a 6.0 Bel conversational voice.",
        steps: [
          "Identify sound level in bels: 6.0 B.",
          "Apply formula: I = 10⁻¹² × 10⁶.",
          "Calculate 10⁶ = 1,000,000.",
          "Multiply: 10⁻¹² × 1,000,000 = 10⁻⁶ W/m² = 0.000001 W/m².",
          "Final Result: 6.0 Bels corresponds to 0.000001 W/m² (1 µW/m²)."
        ]
      },
      {
        title: "Example 2: Industrial Compressor Noise (9.5 Bels)",
        subtitle: "Find sound intensity in W/m² for an industrial machine rating 9.5 Bels.",
        steps: [
          "Identify sound level in bels: 9.5 B.",
          "Apply formula: I = 10⁻¹² × 10^9.5.",
          "Calculate 10^9.5 ≈ 3,162,277,660.17.",
          "Multiply: 10⁻¹² × 3,162,277,660.17 ≈ 0.003162 W/m².",
          "Final Result: 9.5 Bels yields approximately 0.003162 W/m² (3.162 mW/m²)."
        ]
      },
      {
        title: "Example 3: Concert Hall Sound System (11.0 Bels)",
        subtitle: "Determine sound intensity in W/m² for an 11.0 Bel audio system output.",
        steps: [
          "Identify sound level: 11.0 B.",
          "Apply formula: I = 10⁻¹² × 10¹¹.",
          "Calculate: 10⁻¹² × 10¹¹ = 10⁻¹ W/m² = 0.1 W/m².",
          "Final Result: 11.0 Bels equals 0.1 W/m²."
        ]
      }
    ]
  },
  table: {
    title: "Bel to Sound Intensity Reference Table",
    headers: ["Bels (B)", "Decibels (dB)", "Sound Intensity (W/m²)", "Environmental Context"],
    rows: [
      { fromVal: "0.0 B", toVal: "0 dB", extra: "0.000000000001 W/m²", extra2: "Threshold of human hearing" },
      { fromVal: "2.0 B", toVal: "20 dB", extra: "0.0000000001 W/m²", extra2: "Rustling leaves in a calm forest" },
      { fromVal: "4.0 B", toVal: "40 dB", extra: "0.00000001 W/m²", extra2: "Quiet residential bedroom" },
      { fromVal: "6.0 B", toVal: "60 dB", extra: "0.000001 W/m²", extra2: "Normal spoken conversation" },
      { fromVal: "8.0 B", toVal: "80 dB", extra: "0.0001 W/m²", extra2: "Busy city traffic street" },
      { fromVal: "10.0 B", toVal: "100 dB", extra: "0.01 W/m²", extra2: "Pneumatic jackhammer at 1m" },
      { fromVal: "12.0 B", toVal: "120 dB", extra: "1.0 W/m²", extra2: "Threshold of auditory pain" },
      { fromVal: "14.0 B", toVal: "140 dB", extra: "100.0 W/m²", extra2: "Jet engine at 30 meters distance" }
    ]
  },
  applications: {
    title: "Applications of Bel to Sound Intensity Conversion",
    items: [
      {
        title: "ISO 9296 Machinery Noise Declarations",
        text: "Computer hardware and industrial equipment manufacturers declare sound power in Bels, which engineers convert to physical intensity in W/m² for environmental noise modelling."
      },
      {
        title: "Acoustic Partition & Wall Design",
        text: "Architectural acousticians calculate sound energy transmission across structural barriers comparing sound intensity in W/m²."
      },
      {
        title: "Medical Ultrasound Safety Monitoring",
        text: "Diagnostic equipment operators monitor energy flux in W/m² to comply with FDA acoustic output safety limits."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Dividing by 10 when calculating intensity from Bels (Bels already incorporate the factor of 10).",
      "Confusing sound intensity in W/m² with total sound power in Watts."
    ]
  },
  faqs: [
    {
      question: "How do you convert Bels to Sound Intensity in W/m²?",
      answer: "Use the formula I = 10⁻¹² × 10^B, where B is sound level in Bels."
    },
    {
      question: "What is 0 Bels in W/m²?",
      answer: "0 Bels corresponds to 10⁻¹² W/m² (1 picowatt per square meter)."
    },
    {
      question: "What is 6 Bels in W/m²?",
      answer: "6 Bels corresponds to 0.000001 W/m² (1 microwatt per square meter)."
    },
    {
      question: "What is 12 Bels in W/m²?",
      answer: "12 Bels corresponds to 1.0 W/m²."
    },
    {
      question: "Why is 10^B used directly when converting Bels to intensity?",
      answer: "Because Bels represent log₁₀ power ratios directly without requiring division by 10."
    },
    {
      question: "What is 9 Bels in W/m²?",
      answer: "9 Bels corresponds to 0.001 W/m² (1 milliwatt per square meter)."
    },
    {
      question: "How much does intensity increase per Bel?",
      answer: "Every 1 Bel increase multiplies physical acoustic intensity by 10."
    },
    {
      question: "Is Watt per square meter an SI unit?",
      answer: "Yes, W/m² is the coherent SI unit of sound intensity."
    }
  ],
  relatedList: [
    { label: "Bel to Decibel", from: "bel", to: "decibel" },
    { label: "Bel to Decibel SPL", from: "bel", to: "decibel-spl" },
    { label: "Decibel to Sound Intensity", from: "decibel", to: "sound-intensity" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics, ISO.",
    "ISO 9614-1:1993 Determination of sound power levels using sound intensity.",
    "Fahy, F. J. (1995). Sound Intensity (2nd ed.). E & FN Spon."
  ]
};
