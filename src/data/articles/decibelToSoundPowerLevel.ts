import { CustomArticleData } from "./types";

export const decibelToSoundPowerLevel: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "sound-power-level",
  seoTitle: "Decibel to Sound Power Level Converter (dB to dB SWL / L_W) | UnitsConvertors.com",
  metaDescription: "Convert generic Decibels to Sound Power Level (dB to dB SWL) with acoustic engineering precision. Learn L_W formulas, 10⁻¹² W reference power baseline, ISO 3744 standards, and examples.",
  h1: "Decibel to Sound Power Level Converter",
  introduction: [
    "In noise control engineering, it is crucial to distinguish between the sound created by an acoustic source and the sound heard at a specific location. Sound Pressure Level (L_p, measured in dB SPL) depends on distance and room acoustics, whereas Sound Power Level (symbol: L_W or SWL) measures the total acoustic energy emitted per unit time by the source itself, regardless of environment.",
    "Sound Power Level is expressed in decibels (dB SWL or dB re 1 pW) relative to the reference sound power W₀ = 10⁻¹² Watts (1 picowatt).",
    "When a decibel reading represents acoustic source power relative to 1 picowatt, the level maps 1:1 to Sound Power Level (1 dB = 1 dB SWL). This guide explains sound power physics, measurement standards (ISO 3741 / ISO 3744), formulas, worked examples, and engineering applications."
  ],
  quickAnswer: {
    text: "When converting a decibel value representing acoustic source power referenced to W₀ = 1 picowatt (10⁻¹² W), 1 dB maps 1:1 to 1 dB SWL (Sound Power Level).",
    formulaDisplay: "L_W (dB SWL) = 10 log₁₀(W / 10⁻¹² W)",
    subtext: "L_W is an intrinsic property of the noise source, independent of distance."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB) in Acoustic Power?",
    text: "The decibel (dB) is a logarithmic ratio. When applied to acoustic power emitted by a machine or speaker, 0 dB SWL represents the reference acoustic power W₀ = 10⁻¹² Watts (1 pW)."
  },
  aboutTargetUnit: {
    title: "Understanding Sound Power Level (L_W / dB SWL)",
    text: "Sound Power Level (L_W, measured in dB re 1 pW or dB SWL) quantifies the total acoustic wattage radiated by a noise-generating machine into space. Unlike sound pressure, L_W does not decrease with distance."
  },
  relationship: "Sound Power Level (L_W) is the cause; Sound Pressure Level (L_p) is the effect. A heater with an intrinsic sound power level of 85 dB SWL will create different sound pressure levels (e.g. 70 dB SPL at 1m vs 58 dB SPL at 4m) depending on distance and room absorption.",
  relationshipTitle: "Sound Power vs Sound Pressure Level Comparison",
  relationshipItems: [
    { label: "0 dB SWL", value: "10⁻¹² W (1 picowatt / Threshold sound power)" },
    { label: "60 dB SWL", value: "10⁻⁶ W (1 microwatt / Normal conversational speech power)" },
    { label: "90 dB SWL", value: "0.001 W (1 milliwatt / Household lawn mower power output)" },
    { label: "120 dB SWL", value: "1.0 W (1 Watt total acoustic radiated power)" },
    { label: "160 dB SWL", value: "10,000 W (10 kW total acoustic power / Jet engine takeoff)" }
  ],
  formula: {
    text: "Sound Power Level L_W in decibels is calculated from total acoustic power W in Watts divided by reference power W₀ (10⁻¹² W).",
    math: "L_W \\text{ (dB SWL)} = 10 \\log_{10}\\left(\\frac{W}{10^{-12} \\text{ W}}\\right)",
    subtext: "Where W₀ = 1 picowatt (10⁻¹² W)."
  },
  formulaTitle: "Sound Power Level Formula",
  practicalTip: {
    title: "Heater Analogy (Power vs Pressure)",
    text: "Think of Sound Power Level (L_W) like a 1,000 Watt space heater rating, and Sound Pressure Level (L_p) like the temperature felt at 2 meters. The heater rating (L_W) stays constant anywhere."
  },
  expertNote: {
    title: "ISO 3744 Hemisphere Measurement Standards",
    text: "Engineering determinations of L_W under ISO 3744 integrate sound pressure measurements over a reflecting hemisphere enclosure using L_W = L_p_avg + 10 log₁₀(S / S₀)."
  },
  examples: {
    title: "Step-by-Step Sound Power Worked Examples",
    items: [
      {
        title: "Example 1: Air Conditioner Unit Sound Power",
        subtitle: "Convert a manufacturer acoustic source power rating of 68 dB to Sound Power Level.",
        steps: [
          "Identify acoustic power rating: 68 dB.",
          "Verify baseline reference: W₀ = 1 picowatt (10⁻¹² W).",
          "Map level 1:1: 68 dB = 68 dB SWL.",
          "Final Result: The unit sound power level is 68 dB SWL."
        ]
      },
      {
        title: "Example 2: Industrial Exhaust Fan Audit",
        subtitle: "Calculate sound power level for a fan emitting 0.01 Watts of total acoustic power.",
        steps: [
          "Identify total acoustic power: W = 0.01 W = 10⁻² W.",
          "Divide by W₀: 10⁻² / 10⁻¹² = 10¹⁰.",
          "Take log₁₀: log₁₀(10¹⁰) = 10.",
          "Multiply by 10: 10 × 10 = 100 dB SWL.",
          "Final Result: The fan sound power level is 100 dB SWL."
        ]
      },
      {
        title: "Example 3: Emergency Generator Sound Rating",
        subtitle: "Convert an emergency diesel generator source rating of 115 dB to dB SWL.",
        steps: [
          "Identify acoustic power level: 115 dB.",
          "Confirm reference baseline is 1 pW.",
          "Map 1:1: 115 dB = 115 dB SWL.",
          "Final Result: Generator sound power level is 115 dB SWL."
        ]
      }
    ]
  },
  table: {
    title: "Sound Power Level Reference Table",
    headers: ["Sound Power Level (dB SWL)", "Total Radiated Power (Watts)", "Total Radiated Power (pW)", "Acoustic Source Example"],
    rows: [
      { fromVal: "0 dB SWL", toVal: "0.000000000001 W", extra: "1 pW", extra2: "Barely audible acoustic power" },
      { fromVal: "40 dB SWL", toVal: "0.000000010000 W", extra: "10,000 pW", extra2: "Whispering human voice total power" },
      { fromVal: "60 dB SWL", toVal: "0.000001000000 W", extra: "1,000,000 pW", extra2: "Conversational human speech total power" },
      { fromVal: "80 dB SWL", toVal: "0.000100000000 W", extra: "100,000,000 pW", extra2: "Vacuum cleaner / loud blender source" },
      { fromVal: "90 dB SWL", toVal: "0.001000000000 W", extra: "1,000,000,000 pW", extra2: "Gasoline lawn mower total acoustic power" },
      { fromVal: "100 dB SWL", toVal: "0.010000000000 W", extra: "10,000,000,000 pW", extra2: "Industrial pneumatic drill source" },
      { fromVal: "120 dB SWL", toVal: "1.000000000000 W", extra: "1,000,000,000,000 pW", extra2: "Large rock concert PA speaker stack" },
      { fromVal: "140 dB SWL", toVal: "100.000000000000 W", extra: "100,000,000,000,000 pW", extra2: "Siren system / industrial turbo-compressor" },
      { fromVal: "160 dB SWL", toVal: "10,000.000000000 W", extra: "10,000,000,000,000,000 pW", extra2: "Jet engine takeoff total acoustic power" }
    ]
  },
  applications: {
    title: "Real-World Applications of Sound Power Level Measurement",
    items: [
      {
        title: "Machinery Noise Labeling & EU Directives",
        text: "Under EU Machinery Directive 2006/42/EC and outdoor equipment regulations, manufacturers must state guaranteed Sound Power Levels (L_WA) on equipment labels."
      },
      {
        title: "HVAC System Acoustic Design & Duct Calculation",
        text: "Building services engineers use fan Sound Power Levels in ASHRAE duct calculations to compute room noise criterion (NC/RC) curves."
      },
      {
        title: "Acoustic Simulation & Noise Mapping",
        text: "Environmental acoustic software (like SoundPLAN or CadnaA) requires machine source inputs in Sound Power Levels to compute noise propagation maps across cities."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Sound Power vs Pressure",
    items: [
      "Confusing Sound Power Level (L_W) with Sound Pressure Level (L_p) measured at a specific distance.",
      "Comparing equipment noise ratings without checking whether the spec is L_W or L_p at 1 meter.",
      "Attempting to measure L_W with a single microphone position without integrating over an enclosing surface.",
      "Forgetting that doubling acoustic power increases L_W by +3 dB."
    ]
  },
  faqs: [
    {
      question: "What is the difference between dB SPL and dB SWL?",
      answer: "dB SPL (Sound Pressure Level) measures acoustic pressure at a specific distance from a source. dB SWL (Sound Power Level) measures total acoustic energy emitted by the source itself."
    },
    {
      question: "What is the reference sound power for 0 dB SWL?",
      answer: "The reference sound power for 0 dB SWL is W₀ = 10⁻¹² Watts (1 picowatt)."
    },
    {
      question: "Does Sound Power Level change with distance?",
      answer: "No. Sound Power Level is an intrinsic property of the noise source and does not change with distance or environment."
    },
    {
      question: "How do you calculate Sound Power Level from Watts?",
      answer: "Use L_W = 10 log₁₀(W / 10⁻¹² W). Divide acoustic power in Watts by 10⁻¹², take the log base 10, and multiply by 10."
    },
    {
      question: "Why do HVAC equipment datasheets list L_WA?",
      answer: "L_WA indicates A-weighted Sound Power Level, which adjusts source power output to match human ear frequency sensitivity."
    },
    {
      question: "What happens to L_W when acoustic power doubles?",
      answer: "Doubling the total acoustic power output in Watts increases the Sound Power Level by approximately +3 dB SWL."
    },
    {
      question: "Can Sound Power Level be converted to Sound Pressure Level?",
      answer: "Yes, if the distance r and environment radiation factor Q are known: L_p = L_W + 10 log₁₀(Q / 4πr²)."
    },
    {
      question: "What ISO standard governs Sound Power Level measurement?",
      answer: "ISO 3744 and ISO 3741 govern the acoustic determination of sound power levels of noise sources."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Sound Intensity Level", from: "decibel", to: "sound-intensity-level" },
    { label: "Decibel to Watt/m²", from: "decibel", to: "watt-m2-sound" }
  ],
  references: [
    "ISO 3744:2010 Acoustics — Determination of sound power levels and sound energy levels of noise sources using sound pressure.",
    "ISO 3741:2010 Acoustics — Determination of sound power levels of noise sources using reverberation rooms.",
    "Bies, D. A., & Hansen, C. H. (2017). Engineering Noise Control."
  ]
};
