import { CustomArticleData } from "./types";

export const footCandleToLux: CustomArticleData = {
  fromUnitId: "foot-candle",
  toUnitId: "lux",
  seoTitle: "Foot-candle to Lux Converter (fc to lx) | UnitsConvertors.com",
  metaDescription: "Convert Foot-candles to Lux (fc to lx) with exact scientific precision. Learn US Customary to SI illuminance formulas, IESNA to ISO lighting codes, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/en/foot-candle-to-lux",
  h1: "Foot-candle (fc) to Lux (lx) Converter",
  introduction: [
    "In architectural engineering, commercial interior design, and environmental photometry, illuminance measures the intensity of light arriving at a given target surface area.",
    "The foot-candle (symbol: fc, or lm/ft²) is the customary unit of illuminance used extensively across North America, defined as one lumen of luminous flux distributed uniformly across one square foot. The lux (symbol: lx, or lm/m²) is the coherent derived unit of illuminance in the International System of Units (SI), defined as one lumen per square meter.",
    "Because one square meter contains approximately 10.76391 square feet, spreading light over a square meter produces a lower flux density than concentrating it on a square foot. Consequently, 1 foot-candle equals exactly 10.76391 lux. To convert foot-candles to lux, multiply the foot-candle value by 10.76391. This guide covers exact mathematical derivations, international lighting codes, step-by-step calculations, and reference tables."
  ],
  quickAnswer: {
    text: "To convert Foot-candles to Lux, multiply the foot-candle reading by 10.76391. For example, a target office desk lighting specification of 40 foot-candles equals approximately 430.56 lux.",
    formulaDisplay: "E_{\\text{lux}} = E_{\\text{fc}} \\times 10.76391",
    subtext: "1 Foot-candle equals exactly 10.7639104167 Lux (1 fc ≈ 10.764 lx)."
  },
  aboutSourceUnit: {
    title: "Understanding Foot-candles (fc)",
    text: "The foot-candle (symbol: fc or lm/ft²) represents the illuminance cast on a one-square-foot surface from a uniform point source of one candela at a distance of one foot. It remains the foundational metric in American National Standards Institute (ANSI) and Illuminating Engineering Society (IES) specifications."
  },
  aboutTargetUnit: {
    title: "Understanding Lux (lx)",
    text: "The lux (symbol: lx or lm/m²) is the official SI unit of illuminance. Equal to one lumen per square meter, it is the globally recognized standard across ISO 8995-1, European EN 12464-1, and international architectural blueprints."
  },
  relationship: "Foot-candles and lux measure the exact same physical dimension (luminous flux per unit area). Their relationship is defined by the exact ratio between square feet and square meters: 1 m² = (1 / 0.3048)² ft² ≈ 10.7639104167 ft². Therefore, 1 foot-candle equals 10.76391 lux.",
  relationshipTitle: "Foot-candle vs Lux Direct Scale Comparison",
  relationshipItems: [
    { label: "0.1 fc", value: "1.076 lx (Twilight ambient / parking lot perimeter)" },
    { label: "1.0 fc", value: "10.764 lx (Emergency stairwell egress minimum baseline)" },
    { label: "10.0 fc", value: "107.64 lx (Warehouse storage racking aisle)" },
    { label: "50.0 fc", value: "538.20 lx (Standard commercial office workstation)" },
    { label: "100.0 fc", value: "1,076.39 lx (Precision electronics assembly / drafting)" }
  ],
  formula: {
    text: "Multiply illuminance in Foot-candles by 10.76391 to obtain illuminance in Lux.",
    math: "E_{\\text{lux}} = E_{\\text{fc}} \\times 10.7639104 \\qquad | \\qquad E_{\\text{lux}} = \\frac{E_{\\text{fc}}}{0.09290304}",
    subtext: "Where E_fc is illuminance in foot-candles and E_lux is illuminance in lux."
  },
  formulaTitle: "Foot-candle to Lux Conversion Formula",
  practicalTip: {
    title: "Quick Mental Approximation in the Field",
    text: "To rapidly convert foot-candles to lux without a calculator, multiply by 10 and add roughly 7.6%. For example: 30 fc × 10 = 300; 300 + 23 = 323 lx (very close to the precise 322.92 lx value)."
  },
  expertNote: {
    title: "Reconciling IESNA and EN 12464-1 Specifications",
    text: "Multinational engineering projects frequently require translating US architectural lighting schedules (specified in foot-candles) into European and Asian submittals (specified in lux). Using the exact 10.76391 factor ensures luminaires meet regulatory compliance without over-lighting spaces."
  },
  examples: {
    title: "Step-by-Step fc to lx Worked Engineering Examples",
    items: [
      {
        title: "Example 1: Converting Office Desktop Lighting",
        subtitle: "Convert a US architectural specification of 45 foot-candles into SI lux.",
        steps: [
          "Identify source illuminance: E = 45 fc.",
          "Apply conversion formula: E_lux = 45 × 10.76391.",
          "Perform calculation: 45 × 10.76391 = 484.37595.",
          "Final Result: 45 Foot-candles equals approximately 484.38 Lux."
        ]
      },
      {
        title: "Example 2: Emergency Egress Corridor Compliance",
        subtitle: "Convert an OSHA minimum requirement of 1.0 foot-candle to lux.",
        steps: [
          "Identify minimum required illuminance: E = 1.0 fc.",
          "Multiply by conversion constant: 1.0 × 10.76391 = 10.76391.",
          "Final Result: 1.0 Foot-candle corresponds to 10.76 Lux."
        ]
      },
      {
        title: "Example 3: Greenhouse Horticultural Lighting Level",
        subtitle: "Convert a greenhouse grow-bed target of 250 foot-candles to lux.",
        steps: [
          "Identify target light level: E = 250 fc.",
          "Calculate: E_lux = 250 × 10.76391 = 2,690.9775.",
          "Final Result: 250 Foot-candles equals 2,690.98 Lux."
        ]
      }
    ]
  },
  table: {
    title: "Foot-candle to Lux Comprehensive Engineering Conversion Table",
    headers: ["Foot-candles (fc)", "Lux (lx)", "Architectural & Environmental Benchmark"],
    rows: [
      { fromVal: "0.01 fc", toVal: "0.108 lx", extra: "Clear night sky under full moon" },
      { fromVal: "0.10 fc", toVal: "1.076 lx", extra: "Deep twilight outdoors" },
      { fromVal: "1.00 fc", toVal: "10.764 lx", extra: "Minimum commercial building egress corridor lighting" },
      { fromVal: "5.00 fc", toVal: "53.820 lx", extra: "Parking garage driving lane & service stairwell" },
      { fromVal: "10.00 fc", toVal: "107.639 lx", extra: "Warehouse active storage & bulk staging" },
      { fromVal: "30.00 fc", toVal: "322.917 lx", extra: "Classroom general lighting & conference room" },
      { fromVal: "50.00 fc", toVal: "538.196 lx", extra: "Standard commercial office computer task workspace" },
      { fromVal: "75.00 fc", toVal: "807.293 lx", extra: "Technical drafting & detailed quality inspection" },
      { fromVal: "100.00 fc", toVal: "1,076.391 lx", extra: "Micro-electronics soldering & jewelry manufacturing" },
      { fromVal: "500.00 fc", toVal: "5,381.955 lx", extra: "High-intensity retail display & TV broadcast studio" },
      { fromVal: "1,000.00 fc", toVal: "10,763.910 lx", extra: "Overcast outdoor daylight at noon" },
      { fromVal: "10,000.00 fc", toVal: "107,639.104 lx", extra: "Direct clear summer noon sunlight" }
    ]
  },
  applications: {
    title: "Industry Applications of Foot-candle to Lux Conversions",
    items: [
      {
        title: "Commercial Architectural & Electrical Engineering",
        text: "Electrical engineers translate IESNA lighting schedules into DIALux and Relux lighting simulation models for international building certifications."
      },
      {
        title: "Workplace Health, Safety & OSHA Compliance",
        text: "Safety auditors evaluate facility light meters calibrated in foot-candles against European workplace safety regulations (EN 12464) specified in lux."
      },
      {
        title: "Film, Television & Studio Production",
        text: "Cinematographers convert incident light readings taken on handheld US light meters (fc) into camera sensor lux exposure curves."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Foot-candle to Lux Conversions",
    items: [
      "Dividing instead of multiplying: Foot-candles represent a larger flux density than lux, so foot-candles must be multiplied by 10.76391.",
      "Using a rounded 10.0 factor instead of 10.76391, which causes a 7.6% calculation error in professional lighting compliance reports.",
      "Confusing illuminance (foot-candles/lux) with luminous intensity (candelas) or total luminous flux (lumens)."
    ]
  },
  faqs: [
    {
      question: "How many Lux are in 1 Foot-candle?",
      answer: "There are exactly 10.7639104167 Lux in 1 Foot-candle (commonly rounded to 10.764 lx)."
    },
    {
      question: "What is the formula to convert Foot-candles to Lux?",
      answer: "The formula is: Lux = Foot-candles × 10.76391."
    },
    {
      question: "How do I convert 30 Foot-candles to Lux?",
      answer: "Multiply 30 by 10.76391 to get 322.92 Lux."
    },
    {
      question: "Why is 1 Foot-candle equal to roughly 10.76 Lux?",
      answer: "Because 1 square meter equals approximately 10.76391 square feet. Concentrating one lumen into a square foot is 10.76 times more dense than spreading it over a square meter."
    },
    {
      question: "What is the standard office desktop light level in Foot-candles and Lux?",
      answer: "Standard office task lighting typically ranges from 30 to 50 foot-candles, which corresponds to roughly 320 to 540 lux (standard design target: 500 lux)."
    },
    {
      question: "Is the Foot-candle an SI unit?",
      answer: "No. The foot-candle is a US Customary and Imperial unit. The International System of Units (SI) standard for illuminance is the Lux (lx)."
    },
    {
      question: "How do I convert Lux back to Foot-candles?",
      answer: "Divide the lux value by 10.76391 (or multiply by 0.09290304)."
    },
    {
      question: "Does light color or spectrum alter the conversion factor?",
      answer: "No. The conversion factor 10.76391 is purely geometric (ratio of m² to ft²) and remains identical across all light sources, LEDs, and color temperatures."
    }
  ],
  relatedList: [
    { label: "Lux to Foot-candle", from: "lux", to: "foot-candle" },
    { label: "Foot-candle to Phot", from: "foot-candle", to: "phot" },
    { label: "Foot-candle to Foot-Lambert", from: "foot-candle", to: "foot-lambert" },
    { label: "Foot-candle to Candela/m²", from: "foot-candle", to: "candela-per-m2" }
  ],
  references: [
    "IESNA Lighting Handbook (10th Edition): Illuminating Engineering Society of North America.",
    "ISO 8995-1:2002 / CIE S 008/E:2001: Lighting of Work Places - Part 1: Indoor.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
