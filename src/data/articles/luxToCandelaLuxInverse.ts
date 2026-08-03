import { CustomArticleData } from "./types";

export const luxToCandelaLuxInverse: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "candela-lux-inverse",
  seoTitle: "Lux to Candela ↔ Lux (at 1m) Benchmark Calculation | UnitsConvertors.com",
  metaDescription: "Calculate Candela at 1 meter benchmark distance from Lux. Understand 1-meter photometric calibration baselines, goniophotometry standards, and worked examples.",
  h1: "Lux to Candela ↔ Lux (at 1m) Benchmark Calculation",
  introduction: [
    "In optical metrology and photometric darkroom testing, the 1-meter distance baseline serves as a standardized reference condition for evaluating directional beam intensity. Under the inverse square law of light ($I = E \times d^2$), when the distance ($d$) between an isotropic point source and a calibrated photometer detector is set to exactly 1 meter ($d = 1\text{ m}$), the distance multiplier ($d^2 = 1^2 = 1$) simplifies the physical relationship to an exact 1:1 scale.",
    "Therefore, at a standardized 1-meter distance, 1 Lux of illuminance received at the detector plane corresponds to exactly 1 Candela of directional luminous intensity emitted by the source (1 lx @ 1m = 1 cd).",
    "This calculation represents a Type B conditional benchmark transformation. It applies exclusively when measurement distance is fixed at 1.0 meter under point-source darkroom calibration conditions. This guide details optical laboratory standards, goniophotometer calibration baselines, flashlight beam evaluation, and step-by-step 1-meter benchmark calculations."
  ],
  quickAnswer: {
    text: "At a standardized distance baseline of exactly 1 meter, 1 Lux equals 1 Candela. This 1:1 equivalency holds strictly because 1 meter squared equals 1 (cd = lx × 1²).",
    formulaDisplay: "cd (at 1m) = lx × 1² = lx",
    subtext: "This 1:1 ratio applies only at a measurement distance of 1.0 meter."
  },
  aboutSourceUnit: {
    title: "What is a Lux (lx)?",
    text: "The Lux (symbol: lx) is the SI unit of illuminance, representing one lumen per square meter (1 lx = 1 lm/m²). It measures light density impinging upon a photometer sensor surface."
  },
  aboutTargetUnit: {
    title: "Understanding Candela (cd at 1m)",
    text: "The Candela (symbol: cd) measures directional luminous intensity (lumens per steradian). Normalizing candela to a 1-meter sensor reading provides a universal benchmark intensity rating for spotlights and LEDs."
  },
  relationship: "The 1-meter benchmark relationship is defined by setting d = 1 in the inverse square law equation (I = E × d²). Because 1² = 1, I (candela) equals E (lux) directly at 1 meter.",
  relationshipTitle: "1-Meter Benchmark Scale Equivalencies",
  relationshipItems: [
    { label: "1 lx at 1 m", value: "1 cd (Standard calibration baseline)" },
    { label: "10 lx at 1 m", value: "10 cd (Indicator LED lamp benchmark output)" },
    { label: "100 lx at 1 m", value: "100 cd (Low-power directional accent luminaire)" },
    { label: "500 lx at 1 m", value: "500 cd (Medium-intensity task spotlight beam)" },
    { label: "1,000 lx at 1 m", value: "1,000 cd (High-intensity narrow-beam LED reflector)" }
  ],
  formula: {
    text: "For a sensor positioned at a distance of exactly 1.0 meter from a point light source, Luminous Intensity in Candela equals Illuminance in Lux directly.",
    math: "cd = lx × (1 m)² = lx",
    subtext: "If measurement distance deviates from 1 meter, the general formula cd = lx × d² must be used."
  },
  formulaTitle: "1-Meter Benchmark Equivalence Formula",
  practicalTip: {
    title: "Optical Bench Darkroom Calibration",
    text: "Optical testing laboratories mount photometer heads on rails exactly 1.000 meter from the luminaire optical center. This eliminates mathematical distance conversion steps during sensor calibration runs."
  },
  expertNote: {
    title: "Goniophotometric Far-Field Requirements",
    text: "To maintain 1-meter benchmark validity, the light source dimensions must not exceed 0.2 meters (complying with the 5-times rule: 1.0m ≥ 5 × 0.2m). For larger luminaires, measurements are taken at 5m or 10m and mathematically scaled back to 1m."
  },
  examples: {
    title: "Step-by-Step 1m Benchmark Worked Examples",
    items: [
      {
        title: "Example 1: LED Spotlight Calibration Rail Test",
        subtitle: "A calibrated photometer placed 1.0 meter from an LED spotlight reads 750 Lux. Determine luminous intensity in Candela.",
        steps: [
          "Verify test distance: d = 1.0 meter.",
          "Apply 1-meter benchmark formula: cd = lx × 1².",
          "Perform calculation: 750 × 1 = 750.",
          "Final Result: 750 Lux at 1 meter equals 750 Candela."
        ]
      },
      {
        title: "Example 2: Micro-Reflector Flashlight Lab Run",
        subtitle: "A light meter records 3,200 Lux at 1.0 meter from a pocket flashlight reflector.",
        steps: [
          "Verify test distance: 1.0 m.",
          "Apply formula: cd = 3,200 × 1.",
          "Final Result: The flashlight beam produces 3,200 Candela."
        ]
      },
      {
        title: "Example 3: Low-Intensity Signal Lamp Verification",
        subtitle: "Convert 25 Lux measured at 1 meter into Candela.",
        steps: [
          "Identify illuminance: 25 lx.",
          "Distance: 1 m.",
          "Final Result: 25 Lux at 1 meter equals 25 Candela."
        ]
      }
    ]
  },
  table: {
    title: "1-Meter Photometric Benchmark Reference Table",
    headers: ["Lux Reading (at 1m)", "Calculated Intensity (cd)", "Photometric Application Context"],
    rows: [
      { fromVal: "1 lx", toVal: "1 cd", extra: "Emergency exit marker indicator LED" },
      { fromVal: "10 lx", toVal: "10 cd", extra: "Architectural landscape step light" },
      { fromVal: "50 lx", toVal: "50 cd", extra: "Marine navigation side marker light" },
      { fromVal: "100 lx", toVal: "100 cd", extra: "Automotive interior map reading light" },
      { fromVal: "250 lx", toVal: "250 cd", extra: "Commercial display accent spotlight" },
      { fromVal: "500 lx", toVal: "500 cd", extra: "Bicycle LED headlight city mode beam" },
      { fromVal: "1,000 lx", toVal: "1,000 cd", extra: "Surgical inspection headlight beam peak" },
      { fromVal: "5,000 lx", toVal: "5,000 cd", extra: "Tactical LED searchlight narrow spot" },
      { fromVal: "10,000 lx", toVal: "10,000 cd", extra: "High-bay industrial narrow reflector beam" }
    ]
  },
  applications: {
    title: "Industry Applications of 1-Meter Benchmark Calculations",
    items: [
      {
        title: "Goniophotometric Calibration Darkrooms",
        text: "Photometric laboratories standardize sensor rail arms at 1 meter to directly log candela beam profiles without post-processing scale conversions."
      },
      {
        title: "Flashlight ANSI FL1 Peak Beam Testing",
        text: "Manufacturers evaluate compact EDC flashlights at 1 meter darkroom baselines to establish published peak beam candela specs."
      },
      {
        title: "Optical LED Packaging & Die Evaluation",
        text: "Optoelectronics engineers test packaged surface-mount LED chips at 1 meter under pulsed electrical drives to measure axial luminous intensity."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in 1-Meter Benchmark Calculations",
    items: [
      "Applying the 1:1 rule at non-1m distances: At 2 meters, 1 lux equals 4 candelas; at 3 meters, 1 lux equals 9 candelas.",
      "Measuring near-field extended sources at 1 meter: Large troffers violate point-source approximations at 1 meter distance.",
      "Misaligning photometer sensor axis: Off-axis tilt angle reduces recorded lux, leading to under-calculated candela ratings."
    ]
  },
  faqs: [
    {
      question: "Is 1 Lux always equal to 1 Candela?",
      answer: "No. 1 Lux equals 1 Candela ONLY when measured at a distance of exactly 1.0 meter from a point light source."
    },
    {
      question: "Why does 1 Lux equal 1 Candela at 1 meter?",
      answer: "Because the inverse square law states Candela = Lux × Distance². When distance is 1 meter, 1² = 1, making Candela equal to Lux."
    },
    {
      question: "What happens if I measure at 2 meters instead of 1 meter?",
      answer: "At 2 meters, distance squared is 4. Therefore, 1 Lux at 2 meters equals 4 Candelas."
    },
    {
      question: "What is the 5-times rule for 1-meter photometric testing?",
      answer: "The distance (1m) must be at least 5 times the fixture size (≤0.2m) for the point-source inverse square law to remain accurate."
    },
    {
      question: "How do I convert Foot-candles at 1 foot to Candela?",
      answer: "At 1 foot distance, 1 Foot-candle equals 1 Candela, because (1 ft)² = 1."
    },
    {
      question: "Can I use 1-meter benchmark testing for streetlights?",
      answer: "Streetlights are too large for 1m near-field testing. They are tested at 10m or 25m and mathematically normalized to 1m equivalent candela."
    },
    {
      question: "What equipment is used for 1-meter benchmark tests?",
      answer: "A calibrated Class A photometer sensor head mounted on a precision optical rail inside a light-baffled darkroom."
    },
    {
      question: "How do I calculate Candela from Lux at 1 meter?",
      answer: "Simply take the Lux reading at 1 meter; that number is your Candela rating."
    }
  ],
  relatedList: [
    { label: "Lux to Candela", from: "lux", to: "candela" },
    { label: "Lux to Foot-candle", from: "lux", to: "foot-candle" },
    { label: "Lux to Lumen", from: "lux", to: "lumen" },
    { label: "Lux to Illuminance Converter", from: "lux", to: "illuminance-converter" }
  ],
  references: [
    "IES LM-79-19: Optical and Electrical Measurements of Solid-State Lighting Products.",
    "CIE 121-1996: The Photometry and Goniophotometry of Luminaires.",
    "ANSI/PLATO FL1 2019: Flashlight Basic Performance Standard."
  ]
};
