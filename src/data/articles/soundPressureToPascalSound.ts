import { CustomArticleData } from "./types";

export const soundPressureToPascalSound: CustomArticleData = {
  fromUnitId: "sound-pressure",
  toUnitId: "pascal-sound",
  seoTitle: "Sound Pressure to Pascal (Sound) Converter | Pa to Pa",
  metaDescription: "Convert Sound Pressure to Pascal (Sound) (Pa to Pa) with scientific precision. Master the 1:1 ratio, RMS acoustic definitions, sensor calibration, and standards.",
  canonicalUrl: "https://unitsconvertors.com/sound-pressure-to-pascal-sound",
  h1: "Sound Pressure to Pascal (Sound) Converter",
  introduction: [
    "In the physical sciences, acoustics, and audio transducer testing, 'Sound Pressure' and 'Pascal (Sound)' represent the exact same physical property: the root-mean-square (RMS) fluctuating pressure wave superimposed on the static atmospheric background. Both quantities share the SI derived unit of the pascal (symbol: Pa), defined as one newton of force per square meter (1 N/m²).",
    "Because both terms express identical mechanical phenomena, their mathematical conversion factor is strictly 1:1. However, acoustic engineers and software packages use both terms to maintain clear context. 'Sound Pressure' designates the formal physical state variable (p), while 'Pascal (Sound)' serves as an explicit unit label that distinguishes dynamic acoustic pressures from static barometric or hydraulic pressures.",
    "This reference explains the mechanical equivalence, the mathematical definitions of RMS acoustic pressure, microphone calibration certificates, and standardized acoustic reporting conventions."
  ],
  quickAnswer: {
    text: "Sound Pressure and Pascal (Sound) are identical physical quantities sharing the same SI unit (Pa). The conversion factor is exactly 1:1. For example, 1.0 Pascal of Sound Pressure equals exactly 1.0 Pascal (Sound).",
    formulaDisplay: "Pascal (Sound) (Pa) = 1 × Sound Pressure (Pa)",
    subtext: "Both quantities represent root-mean-square (RMS) acoustic pressure deviations measured in newtons per square meter (N/m²)."
  },
  aboutSourceUnit: {
    title: "Understanding Sound Pressure (p)",
    text: "Sound Pressure (symbol: p) is the dynamic, alternating local pressure variation caused by a propagating acoustic wave, measured in pascals (Pa = 1 N/m²). Audible acoustic pressures in air range from 0.00002 Pa (20 µPa) at the human threshold of hearing, to 0.02 Pa (20 mPa) for normal conversation, and up to 20 Pa (120 dB) at the threshold of physical discomfort."
  },
  aboutTargetUnit: {
    title: "What is Pascal (Sound)?",
    text: "The term 'Pascal (Sound)' denotes the pascal (Pa) applied exclusively to dynamic acoustic pressure variations. It distinguishes acoustic oscillations from total static atmospheric pressure (roughly 101,325 Pa at sea level). When microphone specifications declare a sensitivity rating such as -38 dBV/Pa, 'Pa' refers directly to an RMS dynamic acoustic pressure amplitude of 1.0 Pascal."
  },
  relationship: "Sound Pressure and Pascal (Sound) are completely identical in unit magnitude and dimensional analysis: 1 Pa of Sound Pressure = 1 Pascal (Sound) = 1 N/m² = 1 kg/(m·s²). The numerical value remains completely unchanged during conversion, with both representing the same RMS acoustic pressure amplitude.",
  relationshipTitle: "Direct Acoustic Pressure Equivalence",
  relationshipItems: [
    { label: "0.00002 Pa (20 µPa)", value: "0.00002 Pa (Sound) (Hearing threshold / 0 dB SPL)" },
    { label: "0.0002 Pa (200 µPa)", value: "0.0002 Pa (Sound) (Faint whisper / 20 dB SPL)" },
    { label: "0.002 Pa (2 mPa)", value: "0.002 Pa (Sound) (Quiet study room / 40 dB SPL)" },
    { label: "0.02 Pa (20 mPa)", value: "0.02 Pa (Sound) (Conversational speech / 60 dB SPL)" },
    { label: "0.2 Pa (200 mPa)", value: "0.2 Pa (Sound) (Heavy curbside traffic / 80 dB SPL)" },
    { label: "1.0 Pa (1,000 mPa)", value: "1.0 Pa (Sound) (Standard acoustic calibrator / 94 dB SPL)" },
    { label: "2.0 Pa", value: "2.0 Pa (Sound) (Pneumatic jackhammer / 100 dB SPL)" },
    { label: "20.0 Pa", value: "20.0 Pa (Sound) (Threshold of acoustic pain / 120 dB SPL)" },
    { label: "200.0 Pa", value: "200.0 Pa (Sound) (Immediate acoustic trauma / 140 dB SPL)" }
  ],
  formula: {
    text: "Because both parameters measure acoustic pressure in Pascals, multiply the input value by 1.",
    math: "Pascal (Sound) (Pa) = Sound Pressure (Pa) × 1",
    subtext: "Both quantities represent root-mean-square (RMS) pressure amplitudes."
  },
  formulaTitle: "Formula: Sound Pressure to Pascal (Sound)",
  practicalTip: {
    title: "RMS versus Peak Pressure Values",
    text: "Always confirm whether an acoustic pressure reading is expressed as RMS (root-mean-square) or peak amplitude. For a pure sinusoidal tone: p_peak = p_rms × √2 ≈ 1.414 × p_rms. Standard sound level meters and calibration specifications almost universally express pressure in RMS terms."
  },
  expertNote: {
    title: "Microphone Sensitivity Ratings",
    text: "Microphone datasheets rate open-circuit sensitivity in millivolts per pascal (mV/Pa). A studio microphone specified at 20 mV/Pa produces 20 mV RMS of electrical signal when subjected to 1.0 Pascal of Sound Pressure (94 dB SPL)."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Acoustic Calibrator Signal",
        subtitle: "Convert a 1.0 Pascal Sound Pressure signal into Pascal (Sound).",
        steps: [
          "Identify source quantity: 1.0 Pascal Sound Pressure.",
          "Apply the identity factor: 1.0 × 1 = 1.0.",
          "Final Result: 1.0 Pascal Sound Pressure equals exactly 1.0 Pascal (Sound) (equivalent to 94 dB SPL)."
        ]
      },
      {
        title: "Example 2: Acoustic Speech Level",
        subtitle: "Convert 0.02 Pascal Sound Pressure into Pascal (Sound).",
        steps: [
          "Identify source quantity: 0.02 Pascal Sound Pressure.",
          "Apply the 1:1 relationship: 0.02 × 1 = 0.02.",
          "Final Result: 0.02 Pascal Sound Pressure equals 0.02 Pascal (Sound) (equivalent to 60 dB SPL)."
        ]
      },
      {
        title: "Example 3: Industrial High-Intensity Noise",
        subtitle: "Convert an acoustic wave of 6.325 Pascals Sound Pressure into Pascal (Sound).",
        steps: [
          "Identify source quantity: 6.325 Pascals Sound Pressure.",
          "Apply the direct identity: 6.325 × 1 = 6.325.",
          "Final Result: 6.325 Pascals Sound Pressure equals exactly 6.325 Pascals (Sound) (equivalent to 110 dB SPL)."
        ]
      }
    ]
  },
  table: {
    title: "Sound Pressure to Pascal (Sound) Equivalence Table",
    headers: ["Sound Pressure (Pa)", "Pascal (Sound)", "Equivalent Sound Level (dB SPL)", "Environmental Context"],
    rows: [
      { fromVal: "0.00002 Pa", toVal: "0.00002 Pa", extra: "0.00 dB SPL", extra2: "Human hearing threshold at 1 kHz" },
      { fromVal: "0.000063 Pa", toVal: "0.000063 Pa", extra: "10.00 dB SPL", extra2: "Calm breathing in quiet room" },
      { fromVal: "0.0002 Pa", toVal: "0.0002 Pa", extra: "20.00 dB SPL", extra2: "Whisper at 1 meter, leaves rustling" },
      { fromVal: "0.000632 Pa", toVal: "0.000632 Pa", extra: "30.00 dB SPL", extra2: "Quiet bedroom at night" },
      { fromVal: "0.002 Pa", toVal: "0.002 Pa", extra: "40.00 dB SPL", extra2: "Quiet library reading room" },
      { fromVal: "0.006325 Pa", toVal: "0.006325 Pa", extra: "50.00 dB SPL", extra2: "Moderate rainfall, quiet office" },
      { fromVal: "0.02 Pa", toVal: "0.02 Pa", extra: "60.00 dB SPL", extra2: "Normal conversational speech at 1 meter" },
      { fromVal: "0.06325 Pa", toVal: "0.06325 Pa", extra: "70.00 dB SPL", extra2: "Busy restaurant dining area" },
      { fromVal: "0.2 Pa", toVal: "0.2 Pa", extra: "80.00 dB SPL", extra2: "Curbside city traffic, noisy food blender" },
      { fromVal: "0.3557 Pa", toVal: "0.3557 Pa", extra: "85.00 dB SPL", extra2: "OSHA 8-hour occupational action threshold" },
      { fromVal: "0.6325 Pa", toVal: "0.6325 Pa", extra: "90.00 dB SPL", extra2: "Heavy diesel truck pass-by at 10 meters" },
      { fromVal: "1.0 Pa", toVal: "1.0 Pa", extra: "93.98 dB SPL", extra2: "Standard 94 dB microphone calibrator tone" },
      { fromVal: "2.0 Pa", toVal: "2.0 Pa", extra: "100.00 dB SPL", extra2: "Pneumatic jackhammer at 3 meters" },
      { fromVal: "6.325 Pa", toVal: "6.325 Pa", extra: "110.00 dB SPL", extra2: "Live rock concert, car horn at 1 meter" },
      { fromVal: "10.0 Pa", toVal: "10.0 Pa", extra: "113.98 dB SPL", extra2: "Secondary 114 dB calibrator reference" },
      { fromVal: "20.0 Pa", toVal: "20.0 Pa", extra: "120.00 dB SPL", extra2: "Threshold of human acoustic pain" },
      { fromVal: "63.25 Pa", toVal: "63.25 Pa", extra: "130.00 dB SPL", extra2: "Pneumatic riveting hammer at operator ear" },
      { fromVal: "200.0 Pa", toVal: "200.0 Pa", extra: "140.00 dB SPL", extra2: "Jet aircraft takeoff at 30 meters" }
    ]
  },
  applications: {
    title: "Engineering & Scientific Use Cases",
    items: [
      {
        title: "Acoustic Transducer Calibration",
        text: "Ensuring uniform units when entering sensor sensitivities from calibration sheets into digital signal processing (DSP) engines."
      },
      {
        title: "Computational Aeroacoustics (CAA)",
        text: "Verifying that fluctuating aerodynamic surface pressures in finite volume solvers correspond precisely to acoustic sound pressure field metrics."
      },
      {
        title: "Noise Barrier & Enclosure Engineering",
        text: "Analyzing mechanical acoustic wave transmission through architectural partitions before converting to transmission loss decibels."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Misconceptions",
    items: [
      "Confusing acoustic pressure with total atmospheric pressure: Sound pressure is a micro-fluctuation (0.00002 to 20 Pa) around static atmospheric pressure (101,325 Pa).",
      "Confusing RMS pressure with peak pressure: For sinusoids, peak pressure is 1.414 times greater than RMS pressure.",
      "Conflating sound pressure with sound power: Sound pressure is a field property measured at a specific point, whereas sound power (in Watts) is the total acoustic energy output of the source.",
      "Misinterpreting sound pressure as sound intensity: Sound intensity is power flow per unit area (W/m²), which is proportional to sound pressure squared."
    ]
  },
  faqs: [
    {
      question: "Is Sound Pressure different from Pascal (Sound)?",
      answer: "No. Both represent the same physical quantity: the acoustic pressure wave amplitude measured in Pascals (N/m²). The conversion factor between them is exactly 1."
    },
    {
      question: "Why do some software programs list both terms?",
      answer: "Some engineering platforms list 'Pascal (Sound)' to distinguish acoustic dynamic pressure from static barometric or hydraulic pressure, while listing 'Sound Pressure' as the formal physical variable."
    },
    {
      question: "Are these pressures measured as RMS or peak?",
      answer: "In acoustics and sound level metering standards (IEC 61672), sound pressures are almost universally reported as root-mean-square (RMS) values unless explicitly labeled as peak (p_peak)."
    },
    {
      question: "What is the reference sound pressure in air?",
      answer: "The standardized reference sound pressure in air is 20 micropascals (0.00002 Pa or 20 µPa), which corresponds to 0 dB SPL."
    },
    {
      question: "How many pascals is a 94 dB SPL calibrator tone?",
      answer: "A standard 94 dB SPL acoustic calibration tone corresponds to exactly 1.0 Pascal RMS of sound pressure (specifically 93.98 dB SPL)."
    },
    {
      question: "What sound pressure produces auditory pain?",
      answer: "Sound pressure reaching approximately 20 Pascals RMS corresponds to 120 dB SPL, which marks the human threshold of physical discomfort and pain."
    },
    {
      question: "How does sound pressure relate to sound intensity?",
      answer: "In a free acoustic plane wave in air, sound intensity is proportional to sound pressure squared divided by the acoustic impedance of air: I = p² / (ρ·c)."
    },
    {
      question: "What is the SI definition of 1 Pascal of sound pressure?",
      answer: "1 Pascal is defined as one newton of dynamic force acting over an area of one square meter (1 N/m²)."
    }
  ],
  references: [
    "ISO 80000-8: Quantities and units — Part 8: Acoustics",
    "IEC 61672-1: Sound level meters — Specifications",
    "ANSI/ASA S1.1: Acoustical Terminology",
    "BIPM: The International System of Units (SI Brochure)"
  ]
};
