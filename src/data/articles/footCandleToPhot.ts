import { CustomArticleData } from "./types";

export const footCandleToPhot: CustomArticleData = {
  fromUnitId: "foot-candle",
  toUnitId: "phot",
  seoTitle: "Foot-candle to Phot Converter (fc to ph) | UnitsConvertors.com",
  metaDescription: "Convert Foot-candles to Phots (fc to ph) with exact mathematical precision. Learn US Customary to CGS illuminance formulas, scale ratios, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/en/foot-candle-to-phot",
  h1: "Foot-candle (fc) to Phot (ph) Converter",
  introduction: [
    "In optical metrology, sensor calibration, and optical physics, illuminance quantifies the total luminous flux arriving on a target surface area.",
    "The foot-candle (symbol: fc) is the US customary unit of illuminance, defining one lumen of luminous flux distributed over one square foot (1 fc = 1 lm/ft² = 10.76391 lx). The phot (symbol: ph, derived from the Greek φῶς, meaning 'light') is the CGS unit of illuminance, defined as one lumen per square centimeter (1 ph = 1 lm/cm² = 10,000 lx).",
    "Because both units measure the exact same physical dimension—luminous flux per unit area—their relationship is determined purely by the geometric conversion between square feet and square centimeters. Since one square foot equals exactly 929.0304 square centimeters, 1 foot-candle equals exactly 1/929.0304 phot, or approximately 0.00107639 phot (1.076391 × 10⁻³ ph). This guide explains the exact mathematical derivation, practical conversion examples, and comprehensive engineering tables."
  ],
  quickAnswer: {
    text: "To convert Foot-candles to Phots, divide the foot-candle value by 929.0304 (or multiply by 0.001076391). For example, 100 foot-candles equals approximately 0.10764 phot (107.64 milliphots).",
    formulaDisplay: "E_{\\text{phot}} = \\frac{E_{\\text{fc}}}{929.0304} \\approx E_{\\text{fc}} \\times 0.001076391 \\text{ ph}",
    subtext: "1 Phot equals exactly 929.0304 Foot-candles (1 ph = 10,000 lx)."
  },
  aboutSourceUnit: {
    title: "Understanding Foot-candles (fc)",
    text: "The foot-candle (symbol: fc or lm/ft²) is the customary unit of illuminance widely used across North America. It measures the intensity of light striking a one-square-foot surface from surrounding luminaires and ambient daylight."
  },
  aboutTargetUnit: {
    title: "Understanding the Phot (ph)",
    text: "The phot (symbol: ph) is the non-SI metric CGS unit of illuminance, representing one lumen per square centimeter (1 ph = 1 lm/cm²). Because a square centimeter is very small, 1 phot represents a massive illuminance of 10,000 lux."
  },
  relationship: "Both foot-candles and phots measure surface illuminance. The exact conversion factor comes directly from the definition of the international foot: 1 ft = 0.3048 m = 30.48 cm. Therefore, 1 ft² = (30.48)² cm² = 929.0304 cm². Concentrating 1 lumen on 1 cm² (1 phot) is 929.0304 times denser than spreading it over 1 ft² (1 foot-candle).",
  relationshipTitle: "Foot-candle to Phot Scale Ratio",
  relationshipItems: [
    { label: "1 fc", value: "1.0764 × 10⁻³ ph (1.0764 milliphots = 10.764 lx)" },
    { label: "10 fc", value: "0.010764 ph (10.764 milliphots = 107.64 lx)" },
    { label: "100 fc", value: "0.107639 ph (107.639 milliphots = 1,076.39 lx)" },
    { label: "500 fc", value: "0.538196 ph (538.196 milliphots = 5,381.96 lx)" },
    { label: "929.0304 fc", value: "1.000000 ph (Exact definition of 1 Phot)" }
  ],
  formula: {
    text: "Divide illuminance in Foot-candles by 929.0304 (or multiply by 0.00107639104) to obtain illuminance in Phots.",
    math: "E_{\\text{phot}} = \\frac{E_{\\text{fc}}}{929.0304} = E_{\\text{fc}} \\times 0.00107639104",
    subtext: "Where E_fc is illuminance in foot-candles and E_phot is illuminance in phots."
  },
  formulaTitle: "Foot-candle to Phot Direct Conversion Formula",
  practicalTip: {
    title: "Working with Milliphots in Optics",
    text: "Because 1 phot is such a large illuminance level (10,000 lux), optical physicists and military sensors historically used the milliphot (1 mph = 0.001 ph = 10 lux). 1 foot-candle equals approximately 1.0764 milliphots."
  },
  expertNote: {
    title: "Geometric Area Conversion Exactness",
    text: "Under the 1959 International Yard and Pound Agreement, 1 yard is exactly 0.9144 meters, making 1 foot exactly 30.48 cm. Consequently, the area ratio 929.0304 cm²/ft² is mathematically exact with zero rounding error."
  },
  examples: {
    title: "Step-by-Step Foot-candle to Phot Worked Examples",
    items: [
      {
        title: "Example 1: Precision Assembly Task Station (80 fc)",
        subtitle: "Convert a workstation illuminance of 80 foot-candles into CGS phots.",
        steps: [
          "Identify source illuminance: E = 80 fc.",
          "Apply conversion formula: E_phot = 80 ÷ 929.0304.",
          "Perform calculation: 80 ÷ 929.0304 = 0.08611128.",
          "Final Result: 80 Foot-candles equals approximately 0.08611 phot (or 86.11 milliphots)."
        ]
      },
      {
        title: "Example 2: Commercial Office Desk (50 fc)",
        subtitle: "Convert 50 foot-candles desktop illumination into phots.",
        steps: [
          "Identify illuminance: E = 50 fc.",
          "Multiply by conversion factor: 50 × 0.001076391 = 0.05381955.",
          "Final Result: 50 Foot-candles equals approximately 0.05382 phot (538.20 lux)."
        ]
      },
      {
        title: "Example 3: Sunlight Outdoor Illuminance (5,000 fc)",
        subtitle: "Convert 5,000 foot-candles bright daylight to phots.",
        steps: [
          "Identify daylight level: E = 5,000 fc.",
          "Calculate: E_phot = 5,000 ÷ 929.0304 = 5.381955.",
          "Final Result: 5,000 Foot-candles corresponds to approximately 5.382 phots (53,819.55 lux)."
        ]
      }
    ]
  },
  table: {
    title: "Foot-candle to Phot Comprehensive Engineering Conversion Table",
    headers: ["Foot-candles (fc)", "Phots (ph)", "Milliphots (mph)", "SI Lux (lx)", "Lighting Scenario"],
    rows: [
      { fromVal: "0.1 fc", toVal: "1.076 × 10⁻⁴ ph", extra: "0.108 mph", extra2: "1.076 lx", extra3: "Twilight outdoor baseline" },
      { fromVal: "1.0 fc", toVal: "1.076 × 10⁻³ ph", extra: "1.076 mph", extra2: "10.764 lx", extra3: "Emergency stairwell corridor" },
      { fromVal: "10.0 fc", toVal: "0.01076 ph", extra: "10.764 mph", extra2: "107.639 lx", extra3: "Warehouse storage racks" },
      { fromVal: "30.0 fc", toVal: "0.03229 ph", extra: "32.292 mph", extra2: "322.917 lx", extra3: "Classroom lecture hall" },
      { fromVal: "50.0 fc", toVal: "0.05382 ph", extra: "53.820 mph", extra2: "538.196 lx", extra3: "Standard commercial office desk" },
      { fromVal: "100.0 fc", toVal: "0.10764 ph", extra: "107.639 mph", extra2: "1,076.391 lx", extra3: "Precision electronics soldering" },
      { fromVal: "500.0 fc", toVal: "0.53820 ph", extra: "538.196 mph", extra2: "5,381.955 lx", extra3: "TV broadcast studio set" },
      { fromVal: "929.03 fc", toVal: "1.00000 ph", extra: "1,000.000 mph", extra2: "10,000.000 lx", extra3: "Overcast daylight (1 Phot exact)" },
      { fromVal: "5,000.0 fc", toVal: "5.38196 ph", extra: "5,381.955 mph", extra2: "53,819.552 lx", extra3: "Bright midday sunshine" },
      { fromVal: "10,000.0 fc", toVal: "10.76391 ph", extra: "10,763.910 mph", extra2: "107,639.104 lx", extra3: "Peak direct tropical noon sun" }
    ]
  },
  applications: {
    title: "Key Applications of Foot-candle to Phot Conversions",
    items: [
      {
        title: "Optical Sensor & Photodiode Characterization",
        text: "Sensor calibration laboratories convert customary lamp illuminance (fc) into CGS radiant/photometric specifications (ph) for semiconductor detectors."
      },
      {
        title: "Historical Scientific & Astronomy Literature",
        text: "Researchers reviewing early 20th-century astronomical and meteorological papers convert phot and milliphot values into modern foot-candle equivalents."
      },
      {
        title: "High-Intensity Lighting & Solar Simulation",
        text: "Solar simulator engineers test photovoltaic panels under intense illuminance measured in phots (1 phot = 10,000 lux = 929.03 fc)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Foot-candle to Phot Conversions",
    items: [
      "Multiplying instead of dividing: A phot is 929.0304 times larger than a foot-candle, so foot-candles must be divided by 929.0304.",
      "Confusing the phot (illuminance, lm/cm²) with the photon (quantum particle of light).",
      "Confusing the phot (illuminance) with the lambert (luminance).",
      "Using an approximate factor of 1,000 instead of the exact 929.0304 geometric factor, introducing a 7.6% error."
    ]
  },
  faqs: [
    {
      question: "How many Phots are in 1 Foot-candle?",
      answer: "1 Foot-candle is equal to exactly 1/929.0304 phot, which is approximately 0.001076391 phot (1.076391 milliphots)."
    },
    {
      question: "What is the exact formula to convert Foot-candles to Phots?",
      answer: "The exact formula is: Phot = Foot-candles ÷ 929.0304."
    },
    {
      question: "How many Foot-candles are in 1 Phot?",
      answer: "There are exactly 929.0304 Foot-candles in 1 Phot (1 phot = 10,000 lux)."
    },
    {
      question: "What is a Phot?",
      answer: "A phot (symbol: ph) is the CGS unit of illuminance, defined as one lumen per square centimeter (1 lm/cm² = 10,000 lux)."
    },
    {
      question: "What is the relationship between Phot and Lux?",
      answer: "1 phot equals exactly 10,000 lux (1 ph = 10⁴ lx)."
    },
    {
      question: "What is a Milliphot?",
      answer: "A milliphot (mph) is one-thousandth of a phot (0.001 ph = 10 lux). 1 foot-candle equals approximately 1.0764 milliphots."
    },
    {
      question: "How do I convert 50 Foot-candles to Phots?",
      answer: "50 ÷ 929.0304 ≈ 0.05382 phot (equivalent to 53.82 milliphots, or 538.20 lux)."
    },
    {
      question: "Is Phot an SI unit?",
      answer: "No. The phot is an obsolete CGS unit. The official SI unit for illuminance is the lux (lx)."
    }
  ],
  relatedList: [
    { label: "Foot-candle to Lux", from: "foot-candle", to: "lux" },
    { label: "Lux to Phot", from: "lux", to: "phot" },
    { label: "Foot-candle to Lambert", from: "foot-candle", to: "lambert" },
    { label: "Foot-candle to Foot-Lambert", from: "foot-candle", to: "foot-lambert" }
  ],
  references: [
    "CIE S 017/E:2020: ILV: International Lighting Vocabulary (International Commission on Illumination).",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "BIPM: The International System of Units (SI), 9th Edition."
  ]
};
