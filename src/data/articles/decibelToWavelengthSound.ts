import { CustomArticleData } from "./types";

export const decibelToWavelengthSound: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "wavelength-sound",
  seoTitle: "Decibel to Wavelength (Sound) Analysis Guide | UnitsConvertors.com",
  metaDescription: "Understand the relationship between acoustic Decibels (amplitude) and Wavelength (spatial size in meters). Learn wave speed c = λ × f, barrier diffraction, quarter-wave acoustic design, and formulas.",
  h1: "Decibel to Wavelength (Sound) Analysis Guide",
  introduction: [
    "In physics and acoustic engineering, decibels (dB) and acoustic wavelength (symbol: λ, measured in meters or feet) describe two fundamental physical attributes of sound waves traveling through a medium.",
    "Decibels quantify acoustic amplitude or pressure level (how loud the wave is), whereas wavelength measures the physical spatial distance between two successive compressional peaks of the sound wave in space.",
    "Because decibels and wavelength represent independent dimensions, there is no direct numeric equivalence. However, acoustic wavelength directly governs how sound decibels diffract around noise barriers, reflect off walls, and resonate inside room enclosures. This guide explains wave physics (λ = c / f), speed of sound in air (343 m/s), barrier shielding equations, and room acoustic design."
  ],
  quickAnswer: {
    text: "Decibels (dB) measure sound level amplitude, while Wavelength (λ = c / f) measures physical spatial wave size in meters. They are independent dimensions. Wavelength dictates how sound decibels diffract around obstacles: long wavelengths (bass) easily wrap around walls, while short wavelengths (treble) are easily blocked.",
    formulaDisplay: "\\lambda = \\frac{c}{f} \\quad (c \\approx 343 \\text{ m/s at } 20^\\circ\\text{C})",
    subtext: "Wavelength determines acoustic diffraction, reflection, and barrier attenuation."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB) in Acoustics?",
    text: "The decibel (dB SPL) is a logarithmic unit measuring root-mean-square sound pressure relative to 20 micropascals. It determines wave intensity and perceived volume regardless of physical wave length."
  },
  aboutTargetUnit: {
    title: "Understanding Acoustic Wavelength (λ)",
    text: "Acoustic wavelength (λ) is the physical distance between consecutive peak compression points in a acoustic wave. Calculated as λ = c / f, at 20°C in air (c = 343 m/s), a 20 Hz sub-bass wave is 17.15 meters (56.3 ft) long, while a 20,000 Hz treble wave is only 1.71 centimeters (0.67 inches) long."
  },
  relationship: "Acoustic wavelength directly impacts decibel attenuation. When sound encounters an obstacle, if the barrier dimension is smaller than the acoustic wavelength (λ), the wave diffracts smoothly around it with minimal dB drop. If the barrier is larger than λ, a acoustic shadow (dB reduction) is created.",
  relationshipTitle: "Acoustic Wavelength & Frequency in Air (20°C)",
  relationshipItems: [
    { label: "20 Hz (Sub-Bass)", value: "λ = 17.15 meters (56.3 ft) / Requires giant barriers for dB reduction" },
    { label: "100 Hz (Low Bass)", value: "λ = 3.43 meters (11.25 ft) / Quarter-wave resonance at 0.86 meters" },
    { label: "1,000 Hz (1 kHz Midrange)", value: "λ = 0.343 meters (34.3 cm / 13.5 inches) / Typical vocal wavelength" },
    { label: "4,000 Hz (Presence)", value: "λ = 0.0858 meters (8.58 cm / 3.38 inches) / Easily blocked by thin panels" },
    { label: "10,000 Hz (10 kHz Treble)", value: "λ = 0.0343 meters (3.43 cm / 1.35 inches) / Easily absorbed by curtains" }
  ],
  formula: {
    text: "Acoustic wavelength λ is calculated from sound velocity c divided by frequency f. Decibel barrier diffraction attenuation ΔL_dB is computed using Maekawa's Fresnel number N = 2δ / λ.",
    math: "\\lambda = \\frac{c}{f}, \\quad \\Delta L_{\\text{dB}} \\approx 10 \\log_{10}(20N) \\quad \\text{for } N > 0.2",
    subtext: "Where c = 343 m/s in air at 20°C, and δ is the path difference over a noise barrier."
  },
  formulaTitle: "Acoustic Wavelength & Barrier Diffraction Formula",
  practicalTip: {
    title: "Quarter-Wavelength Acoustic Treatment Rule",
    text: "A porous acoustic absorber (like fiberglass or rockwool) achieves maximum decibel sound absorption when its thickness or distance from a hard wall equals one-quarter of the acoustic wavelength (λ / 4)."
  },
  expertNote: {
    title: "Maekawa Barrier Attenuation Physics",
    text: "Maekawa's sound barrier model proves that barrier decibel reduction depends entirely on the ratio between path difference δ and wavelength λ. Low-frequency highway noise (long λ) diffracts over barriers much more effectively than high-frequency noise."
  },
  examples: {
    title: "Practical Examples of Wavelength & Decibel Interactions",
    items: [
      {
        title: "Example 1: Highway Noise Barrier Shadow Zone",
        subtitle: "Calculate wavelength for 100 Hz truck engine noise diffracted over a highway barrier.",
        steps: [
          "Identify frequency: f = 100 Hz.",
          "Speed of sound in air at 20°C: c = 343 m/s.",
          "Calculate wavelength: λ = 343 ÷ 100 = 3.43 meters.",
          "Acoustic Impact: Because λ (3.43 m) is large compared to typical 3m barriers, the 100 Hz sound diffracts over the top with only minor dB reduction."
        ]
      },
      {
        title: "Example 2: Vocal Studio Acoustic Absorber Panel Sizing",
        subtitle: "Determine required panel depth for 250 Hz vocal warmth reflection absorption.",
        steps: [
          "Identify target vocal frequency: f = 250 Hz.",
          "Calculate wavelength: λ = 343 ÷ 250 = 1.372 meters.",
          "Apply quarter-wavelength rule: λ / 4 = 1.372 ÷ 4 = 0.343 meters (34.3 cm).",
          "Result: Placing an absorber 34.3 cm from the wall yields maximum decibel attenuation at 250 Hz."
        ]
      },
      {
        title: "Example 3: High-Frequency Cymbal Noise Isolation",
        subtitle: "Calculate wavelength for 10,000 Hz cymbal sizzle.",
        steps: [
          "Identify frequency: 10,000 Hz (10 kHz).",
          "Calculate wavelength: λ = 343 ÷ 10,000 = 0.0343 meters (3.43 cm).",
          "Acoustic Impact: Because λ is tiny (3.43 cm), even a thin 5 mm acrylic drum shield creates a massive >20 dB sound shadow."
        ]
      }
    ]
  },
  table: {
    title: "Acoustic Wavelength vs Frequency in Air (20°C / 343 m/s)",
    headers: ["Frequency (Hz)", "Wavelength λ (Meters)", "Wavelength λ (Feet)", "Quarter-Wave λ/4 Depth", "Acoustic Barrier / Room Behavior"],
    rows: [
      { fromVal: "20 Hz", toVal: "17.15 m", extra: "56.27 ft", extra2: "4.29 m", extra3: "Sub-bass wave; wraps around almost all barriers" },
      { fromVal: "50 Hz", toVal: "6.86 m", extra: "22.51 ft", extra2: "1.72 m", extra3: "Low bass room mode region; requires giant bass traps" },
      { fromVal: "100 Hz", toVal: "3.43 m", extra: "11.25 ft", extra2: "0.86 m", extra3: "Bass guitar / kick drum; diffractions over walls" },
      { fromVal: "250 Hz", toVal: "1.37 m", extra: "4.50 ft", extra2: "0.34 m", extra3: "Vocal fundamentals; easily absorbed by 10cm panels" },
      { fromVal: "500 Hz", toVal: "0.686 m", extra: "2.25 ft", extra2: "0.17 m", extra3: "Speech clarity region; standard barrier testing" },
      { fromVal: "1,000 Hz", toVal: "0.343 m", extra: "1.125 ft", extra2: "0.086 m", extra3: "1 kHz reference tone; 34.3 cm spatial wave" },
      { fromVal: "2,000 Hz", toVal: "0.1715 m", extra: "0.563 ft", extra2: "0.0429 m", extra3: "Ear canal resonance; specular reflection begins" },
      { fromVal: "5,000 Hz", toVal: "0.0686 m", extra: "0.225 ft", extra2: "0.0172 m", extra3: "Treble; highly directional acoustic beam" },
      { fromVal: "10,000 Hz", toVal: "0.0343 m", extra: "0.1125 ft", extra2: "0.0086 m", extra3: "High treble; blocked by glass / thin plastic shields" },
      { fromVal: "20,000 Hz", toVal: "0.01715 m", extra: "0.0563 ft", extra2: "0.00429 m", extra3: "Upper human hearing threshold (1.7 cm wave)" }
    ]
  },
  applications: {
    title: "Real-World Applications of Acoustic Wavelength",
    items: [
      {
        title: "Highway & Industrial Noise Barrier Engineering",
        text: "Civil engineers use wavelength equations to design acoustic wall heights, calculating expected decibel shadow zones for traffic rumble vs engine whine."
      },
      {
        title: "Recording Studio Room Mode & Bass Trap Design",
        text: "Acousticians map standing wave room modes based on room dimensions matching half-wavelengths (L = λ/2) to treat decibel peaks and nulls."
      },
      {
        title: "Loudspeaker Horn & Waveguide Array Design",
        text: "Speaker designers size horn mouths to exceed one full wavelength at the crossover frequency to maintain constant directivity control in decibels."
      }
    ]
  },
  pitfalls: {
    title: "Common Misconceptions in Wavelength and Decibels",
    items: [
      "Assuming decibel sound level alters acoustic wavelength (wavelength depends solely on speed of sound and frequency, not volume).",
      "Forgetting that speed of sound varies with air temperature (c = 331.3 + 0.606 × T °C).",
      "Expecting thin foam sheets to absorb low bass decibels (absorption requires panel thickness comparable to λ/4).",
      "Confusing acoustic wavelength in air with electromagnetic radio wavelength."
    ]
  },
  faqs: [
    {
      question: "How do you calculate acoustic wavelength?",
      answer: "Use λ = c / f, where c is the speed of sound in air (~343 m/s at 20°C) and f is frequency in Hertz. For example, at 1,000 Hz, λ = 343 / 1000 = 0.343 meters."
    },
    {
      question: "Does increasing sound volume in decibels change the wavelength?",
      answer: "No. Increasing volume in decibels increases wave pressure amplitude, but physical wavelength remains strictly unchanged."
    },
    {
      question: "Why is wavelength important for noise barriers?",
      answer: "Sound waves with wavelengths larger than the barrier height bend (diffract) over the barrier easily, reducing the barrier's decibel noise reduction performance for bass sounds."
    },
    {
      question: "What is the speed of sound in air at room temperature?",
      answer: "At 20°C (68°F) at sea level, the speed of sound in dry air is approximately 343 meters per second (1,125 feet per second)."
    },
    {
      question: "What is the quarter-wavelength rule?",
      answer: "Porous acoustic materials achieve maximum decibel sound absorption when placed at a distance from a boundary equal to one-quarter of the wave's length (λ/4), where air particle velocity is at its maximum."
    },
    {
      question: "What is the wavelength of a 20 Hz sub-bass tone?",
      answer: "In air at 20°C, a 20 Hz sound wave is 17.15 meters (56.3 feet) long from peak to peak."
    },
    {
      question: "What is the wavelength of a 10 kHz treble tone?",
      answer: "A 10,000 Hz sound wave is 0.0343 meters (3.43 cm or 1.35 inches) long."
    },
    {
      question: "How does temperature affect acoustic wavelength?",
      answer: "Higher air temperatures increase sound velocity c, which increases acoustic wavelength λ for a given frequency."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Frequency (Sound)", from: "decibel", to: "frequency-sound" },
    { label: "Decibel to Octave Ratio", from: "decibel", to: "octave-ratio" }
  ],
  references: [
    "Kinsler, L. E., Frey, A. R., Coppens, A. B., & Sanders, J. V. (2000). Fundamentals of Acoustics (4th ed.). Wiley.",
    "Maekawa, Z. (1968). Noise reduction by screens. Applied Acoustics, 1(3), 157-173.",
    "ISO 9613-2:1996 Acoustics — Attenuation of sound during propagation outdoors."
  ]
};
