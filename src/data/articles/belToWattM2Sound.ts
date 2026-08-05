import { CustomArticleData } from "./types";

export const belToWattM2Sound: CustomArticleData = {
  fromUnitId: "bel",
  toUnitId: "watt-m2-sound",
  seoTitle: "Bel to Watt/m² Converter (B to W/m²) | UnitsConvertors.com",
  metaDescription: "Convert Bels to Watts per Square Meter (B to W/m²) with scientific precision. Calculate acoustic intensity from Bels using I = 10⁻¹² × 10^B with formulas and examples.",
  h1: "Bel to Watt/m² Converter",
  introduction: [
    "The bel (B) is a logarithmic acoustic ratio unit widely used in international equipment noise declarations, while the Watt per square meter (W/m²) is the coherent SI unit measuring physical acoustic energy flux per unit area. Converting sound level in Bels to W/m² allows engineers and acousticians to transform subjective noise ratings into physical power density.",
    "The international reference intensity for airborne sound is I₀ = 10⁻¹² W/m² (1 picowatt per square meter). Because one bel represents an order of magnitude (10:1) power ratio, converting Bels to W/m² uses the direct exponential formula I = 10⁻¹² × 10^B. For example, a 6 B sound level translates to 0.000001 W/m².",
    "This guide presents comprehensive mathematical principles, reference benchmarks, step-by-step worked examples, and conversion tables to calculate Watts per square meter from Bels."
  ],
  quickAnswer: {
    text: "To convert Bels to Watts per Square Meter (W/m²), calculate: I = 10⁻¹² × 10^B. For example, 8 Bels equals 0.0001 W/m².",
    formulaDisplay: "I (W/m²) = 10⁻¹² × 10^B",
    subtext: "Where baseline reference intensity I₀ = 10⁻¹² W/m²."
  },
  aboutSourceUnit: {
    title: "What is a Bel (B)?",
    text: "The bel (symbol: B) is a dimensionless logarithmic unit introduced by Bell System engineers to quantify signal loss and acoustic power ratios. One bel corresponds to a tenfold (10:1) increase in power."
  },
  aboutTargetUnit: {
    title: "Understanding Watt per Square Meter (W/m²)",
    text: "Watt per square meter (symbol: W/m²) is the SI derived unit of power density and sound intensity. It measures the acoustic power in Watts transmitted across a one square meter surface."
  },
  relationship: "Sound intensity level in Bels relates to physical power density I in W/m² via L_I = log₁₀(I / I₀). Inverting yields I = 10⁻¹² × 10^B, with I₀ = 10⁻¹² W/m².",
  relationshipTitle: "Bel to Watt/m² Scale Comparison",
  relationshipItems: [
    { label: "0.0 B", value: "1.0 × 10⁻¹² W/m² (Threshold of hearing)" },
    { label: "4.0 B", value: "1.0 × 10⁻⁸ W/m² (Quiet residential room)" },
    { label: "7.0 B", value: "1.0 × 10⁻⁵ W/m² (Vacuum cleaner / loud speech)" },
    { label: "10.0 B", value: "1.0 × 10⁻² W/m² (Pneumatic jackhammer at 1 meter)" },
    { label: "12.0 B", value: "1.0 W/m² (Threshold of auditory pain)" }
  ],
  formula: {
    text: "Multiply the baseline intensity I₀ (10⁻¹² W/m²) by 10 raised to the power of B (bels).",
    math: "I = 10⁻¹² × 10^B",
    subtext: "Where I is intensity in W/m², and I₀ = 10⁻¹² W/m²."
  },
  formulaTitle: "Bel to Watt/m² Conversion Formula",
  practicalTip: {
    title: "Understanding Order of Magnitude Scaling",
    text: "Because Bels are base-10 logarithms of power ratios, every 1 Bel addition multiplies physical acoustic intensity in W/m² by 10."
  },
  expertNote: {
    title: "ISO 80000-8 International Acoustics Compliance",
    text: "According to ISO 80000-8 standards, sound intensity is an energy quantity. When expressed in Bels, L_I = lg(I/I₀) B. Converting directly to W/m² requires taking 10^B."
  },
  examples: {
    title: "Step-by-Step Bel to W/m² Worked Examples",
    items: [
      {
        title: "Example 1: Quiet Office Environment (5.0 Bels)",
        subtitle: "Convert a 5.0 Bel background office noise level to Watts per square meter.",
        steps: [
          "Identify sound level in bels: 5.0 B.",
          "Apply formula: I = 10⁻¹² × 10⁵.",
          "Calculate 10⁵ = 100,000.",
          "Multiply: 10⁻¹² × 100,000 = 10⁻⁷ W/m² = 0.0000001 W/m².",
          "Final Result: 5.0 Bels is equivalent to 0.0000001 W/m² (0.1 µW/m²)."
        ]
      },
      {
        title: "Example 2: IT Server Rack Emission (8.5 Bels)",
        subtitle: "Calculate power density in W/m² for an IT server rack emitting 8.5 Bels of noise.",
        steps: [
          "Identify sound level in bels: 8.5 B.",
          "Apply formula: I = 10⁻¹² × 10^8.5.",
          "Compute 10^8.5 ≈ 316,227,766.02.",
          "Multiply: 10⁻¹² × 316,227,766.02 ≈ 0.0003162 W/m².",
          "Final Result: 8.5 Bels equals approximately 0.0003162 W/m² (316.2 µW/m²)."
        ]
      },
      {
        title: "Example 3: Stadium PA Array (11.5 Bels)",
        subtitle: "Convert 11.5 Bels sound energy level at a stadium PA system to W/m².",
        steps: [
          "Identify sound level in bels: 11.5 B.",
          "Apply formula: I = 10⁻¹² × 10^11.5.",
          "Compute 10^11.5 ≈ 316,227,766,016.84.",
          "Multiply: 10⁻¹² × 316,227,766,016.84 ≈ 0.3162 W/m².",
          "Final Result: 11.5 Bels corresponds to 0.3162 W/m²."
        ]
      }
    ]
  },
  table: {
    title: "Bel to Watt/m² Acoustic Intensity Conversion Table",
    headers: ["Bels (B)", "Acoustic Intensity (W/m²)", "MicroWatts/m² (µW/m²)", "Environmental Context"],
    rows: [
      { fromVal: "0.0 B", toVal: "0.000000000001 W/m²", extra: "0.000001 µW/m²", extra2: "Threshold of human hearing" },
      { fromVal: "2.0 B", toVal: "0.0000000001 W/m²", extra: "0.0001 µW/m²", extra2: "Quiet recording studio floor" },
      { fromVal: "4.0 B", toVal: "0.00000001 W/m²", extra: "0.01 µW/m²", extra2: "Quiet suburban living room" },
      { fromVal: "6.0 B", toVal: "0.000001 W/m²", extra: "1.0 µW/m²", extra2: "Normal conversational voice" },
      { fromVal: "8.0 B", toVal: "0.0001 W/m²", extra: "100.0 µW/m²", extra2: "Loud city traffic / vacuum cleaner" },
      { fromVal: "10.0 B", toVal: "0.01 W/m²", extra: "10,000.0 µW/m²", extra2: "Pneumatic jackhammer at 1 meter" },
      { fromVal: "12.0 B", toVal: "1.0 W/m²", extra: "1,000,000.0 µW/m²", extra2: "Threshold of human ear discomfort" },
      { fromVal: "14.0 B", toVal: "100.0 W/m²", extra: "100,000,000.0 µW/m²", extra2: "Jet engine takeoff at 30 meters" }
    ]
  },
  applications: {
    title: "Applications of Bel to W/m² Conversions",
    items: [
      {
        title: "ISO 9296 Noise Emission Declarations",
        text: "Computer hardware manufacturers report sound power in Bels, which engineers convert to W/m² for environmental noise modeling."
      },
      {
        title: "Audio Loudspeaker Transducer Design",
        text: "Speaker engineers evaluate acoustic conversion efficiency by measuring output intensity in W/m²."
      },
      {
        title: "Acoustic Partition & Shielding Analysis",
        text: "Building acousticians evaluate energy loss across walls using physical sound intensity."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Bel to W/m² Calculations",
    items: [
      "Dividing Bel values by 10 (Bels are already base-10 power ratios; division by 10 applies only to decibels)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Bels to W/m²?",
      answer: "Use the formula I = 10⁻¹² × 10^B, where I₀ = 10⁻¹² W/m² is the reference baseline."
    },
    {
      question: "What is 0 Bels in W/m²?",
      answer: "0 Bels equals 10⁻¹² W/m² (0.000000000001 W/m²)."
    },
    {
      question: "What is 6 Bels in W/m²?",
      answer: "6 Bels equals 0.000001 W/m² (1 microwatt per square meter)."
    },
    {
      question: "What is 12 Bels in W/m²?",
      answer: "12 Bels equals 1.0 W/m²."
    },
    {
      question: "Why is 10⁻¹² used as the reference baseline?",
      answer: "10⁻¹² W/m² is the international standard reference intensity corresponding to human auditory threshold at 1 kHz."
    },
    {
      question: "What is 9 Bels in W/m²?",
      answer: "9 Bels equals 0.001 W/m² (1 milliwatt per square meter)."
    },
    {
      question: "How does intensity change when sound level increases by 1 Bel?",
      answer: "A 1 Bel increase multiplies physical acoustic intensity by 10."
    },
    {
      question: "Is Watt per square meter an SI unit?",
      answer: "Yes, W/m² is the coherent SI unit of sound intensity."
    }
  ],
  relatedList: [
    { label: "Bel to Decibel", from: "bel", to: "decibel" },
    { label: "Bel to Decibel SPL", from: "bel", to: "decibel-spl" },
    { label: "Decibel to Watt/m²", from: "decibel", to: "watt-m2-sound" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics, ISO.",
    "ISO 9296:2017 Acoustics — Declared noise emission values of IT equipment.",
    "Bies, D. A., & Hansen, C. H. (2009). Engineering Noise Control. Spon Press."
  ]
};
