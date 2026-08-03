import { CustomArticleData } from "./types";

export const luxToIlluminanceConverter: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "illuminance-converter",
  seoTitle: "Lux to Illuminance Converter Hub | Complete Conversion Guide",
  metaDescription: "Universal Lux Illuminance Converter Hub. Convert Lux (lx) to Foot-candles, Phots, Nox, Flame, and metric units. Technical formulas, tables, and FAQs.",
  h1: "Lux Illuminance Conversion Hub",
  introduction: [
    "The Lux (lx) is the fundamental International System of Units (SI) measure of illuminance, representing one lumen of visible luminous flux distributed across one square meter of surface area (1 lx = 1 lm/m²). It quantifies the areal intensity of incoming light incident on work planes, roads, plant leaves, and architectural spaces.",
    "Illuminance is measured using different historical and regional unit systems worldwide, including Foot-candles (ft-c or fc in US customary lighting), Phots (ph in CGS physics), Nox (nx in low-light night-vision), and Flame (flame photometer baseline). Converting between Lux and these alternative units is essential for global architectural design, compliance auditing, and scientific measurement.",
    "This master illuminance guide presents standard conversion formulas across all major illuminance unit pairs, SI metric definitions, comparative reference tables, engineering applications, and frequently asked questions."
  ],
  quickAnswer: {
    text: "The Lux is the global SI benchmark for illuminance (1 lx = 1 lm/m²). Standard conversion factors include: 1 Foot-candle = 10.76391 Lux, 1 Phot = 10,000 Lux, 1 Nox = 0.001 Lux, and 1 Flame = 43.0556 Lux.",
    formulaDisplay: "Foot-candles = Lux ÷ 10.76391 | Phots = Lux ÷ 10,000",
    subtext: "1 Lux represents 1 lumen per square meter."
  },
  aboutSourceUnit: {
    title: "What is Lux (lx)?",
    text: "Lux (symbol: lx) is the SI derived unit of illuminance. It quantifies the photometric power per unit area impinging on a surface plane, weighted by the standard CIE 1931 human photopic eye response curve V(λ)."
  },
  aboutTargetUnit: {
    title: "Understanding Illuminance Unit Systems",
    text: "Illuminance unit systems differ based on unit area choice: metric Lux uses square meters (lm/m²), imperial Foot-candle uses square feet (lm/ft²), CGS Phot uses square centimeters (lm/cm²), and specialized units like Nox (10⁻³ lx) measure extreme low-light scotopic environments."
  },
  relationship: "Illuminance unit conversion relies directly on metric-to-customary area scale ratios: 1 m² = 10.76391 ft² = 10,000 cm². Therefore, 1 fc = 10.76391 lx, 1 ph = 10,000 lx, and 1 nx = 0.001 lx.",
  relationshipTitle: "Master Illuminance Unit Equivalence Scale",
  relationshipItems: [
    { label: "1 Lux (SI base)", value: "1.0000 lx = 0.092903 fc = 0.00010 ph = 1,000 nx" },
    { label: "1 Foot-candle", value: "10.76391 lx = 1.0000 fc = 0.001076 ph = 10,764 nx" },
    { label: "1 Phot (CGS)", value: "10,000 lx = 929.03 fc = 1.0000 ph = 10,000,000 nx" },
    { label: "1 Nox (Low-light)", value: "0.0010 lx = 0.000093 fc = 0.0000001 ph = 1.000 nx" },
    { label: "1 Flame (Historical)", value: "43.0556 lx = 4.0000 fc = 0.004306 ph = 43,056 nx" }
  ],
  formula: {
    text: "Convert Lux (lx) to any target illuminance unit by multiplying by the unit conversion scale factor.",
    math: "Target Unit = Lux × Conversion Factor",
    subtext: "Factors: Foot-candles (× 0.092903), Phots (× 0.0001), Nox (× 1000)."
  },
  formulaTitle: "Universal Illuminance Conversion Formula",
  practicalTip: {
    title: "Architectural Specification Rule",
    text: "When converting international building blueprints, divide Lux by 10 (or 10.76) to quickly approximate equivalent US Foot-candles (e.g., 500 Lux ≈ 50 Foot-candles)."
  },
  expertNote: {
    title: "Photopic vs Scotopic Illuminance",
    text: "Standard lux meters calibrate against daytime photopic vision V(λ). In near-dark environments, scotopic vision V'(λ) shifts human peak sensitivity from 555 nm to 507 nm green-blue light."
  },
  examples: {
    title: "Step-by-Step Illuminance Conversion Examples",
    items: [
      {
        title: "Example 1: Office Blueprint Conversion (Lux to Foot-candles)",
        subtitle: "Convert 500 Lux of open office desktop lighting into Foot-candles.",
        steps: [
          "Identify illuminance: 500 lx.",
          "Apply conversion factor: fc = 500 / 10.76391.",
          "Calculate: 500 ÷ 10.76391 = 46.4515.",
          "Result: 500 Lux equals 46.45 Foot-candles."
        ]
      },
      {
        title: "Example 2: CGS Physics Laboratory (Lux to Phots)",
        subtitle: "Convert 10,000 Lux of outdoor daylight into Phots.",
        steps: [
          "Identify illuminance: 10,000 lx.",
          "Apply conversion: ph = 10,000 / 10,000.",
          "Result: 10,000 Lux equals 1.0 Phot."
        ]
      },
      {
        title: "Example 3: Starlight Night-Vision Test (Lux to Nox)",
        subtitle: "Convert 0.002 Lux of starlight illumination into Nox.",
        steps: [
          "Identify illuminance: 0.002 lx.",
          "Multiply by 1,000: 0.002 × 1,000 = 2.0.",
          "Result: 0.002 Lux equals 2.0 Nox."
        ]
      }
    ]
  },
  table: {
    title: "Universal Illuminance Unit Conversion Matrix",
    headers: ["Lux (lx)", "Foot-candles (fc)", "Phots (ph)", "Typical Environment Context"],
    rows: [
      { fromVal: "0.001 lx", toVal: "0.000093 fc", extra: "0.0000001 ph", extra2: "Clear starlight night (1 Nox)" },
      { fromVal: "1 lx", toVal: "0.092903 fc", extra: "0.0001 ph", extra2: "Full moon clear sky night" },
      { fromVal: "10 lx", toVal: "0.92903 fc", extra: "0.0010 ph", extra2: "Suburban street lighting" },
      { fromVal: "50 lx", toVal: "4.64515 fc", extra: "0.0050 ph", extra2: "Residential hallway / stairwell" },
      { fromVal: "100 lx", toVal: "9.29030 fc", extra: "0.0100 ph", extra2: "Corridor / warehouse floor" },
      { fromVal: "300 lx", toVal: "27.8709 fc", extra: "0.0300 ph", extra2: "Classroom lecture workspace" },
      { fromVal: "500 lx", toVal: "46.4515 fc", extra: "0.0500 ph", extra2: "Standard commercial office desk" },
      { fromVal: "1,000 lx", toVal: "92.9030 fc", extra: "0.1000 ph", extra2: "Precision assembly workbench" },
      { fromVal: "10,000 lx", toVal: "929.030 fc", extra: "1.0000 ph", extra2: "Full indirect outdoor daylight" }
    ]
  },
  applications: {
    title: "Practical Applications of Illuminance Unit Conversions",
    items: [
      {
        title: "Global Building Code Compliance",
        text: "Architects convert international Lux specifications (EN 12464) to US Foot-candle standards (IESNA) for international commercial real estate projects."
      },
      {
        title: "Agricultural Greenhouse Management",
        text: "Horticultural growers convert sunlight lux into customary units to balance supplemental LED lighting schedules."
      },
      {
        title: "Defense & Night-Vision Optics",
        text: "Military electro-optical test labs convert low-level moon and starlight lux into Nox units when evaluating night-vision image intensifier tubes."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Illuminance Unit Conversion",
    items: [
      "Confusing Illuminance (Lux/Foot-candles) with Luminance (Nits/Foot-Lamberts): Illuminance is light falling on a surface; luminance is light leaving a surface.",
      "Confusing Lux with total Lumens: Lumens represent total light output; Lux represents light density per unit area.",
      "Forgetting area conversion ratios when moving between metric (m², cm²) and customary (ft²) units."
    ]
  },
  faqs: [
    {
      question: "What is the difference between Lux and Foot-candles?",
      answer: "Lux measures lumens per square meter, while Foot-candles measure lumens per square foot. 1 Foot-candle equals 10.76391 Lux."
    },
    {
      question: "How do I convert Lux to Foot-candles?",
      answer: "Divide the Lux value by 10.76391 (Foot-candles = Lux ÷ 10.76391)."
    },
    {
      question: "What is a Phot?",
      answer: "A Phot is the CGS unit of illuminance, equal to 1 lumen per square centimeter. 1 Phot equals 10,000 Lux."
    },
    {
      question: "What is a Nox?",
      answer: "A Nox is a low-light unit of illuminance equal to 0.001 Lux (10⁻³ lx), commonly used in night-vision research."
    },
    {
      question: "How many Foot-candles is 500 Lux?",
      answer: "500 Lux ÷ 10.76391 = approximately 46.45 Foot-candles."
    },
    {
      question: "What is standard office illuminance in Lux and Foot-candles?",
      answer: "Standard office desktop illuminance recommendations are 500 Lux, which equals approximately 46.5 Foot-candles."
    },
    {
      question: "Is Lux an SI unit?",
      answer: "Yes, the Lux (symbol: lx) is the official SI derived unit of illuminance."
    },
    {
      question: "How do I convert Foot-candles back to Lux?",
      answer: "Multiply the Foot-candle value by 10.76391 (Lux = Foot-candles × 10.76391)."
    }
  ],
  relatedList: [
    { label: "Lux to Foot-candle", from: "lux", to: "foot-candle" },
    { label: "Lux to Candela", from: "lux", to: "candela" },
    { label: "Lux to Lumen", from: "lux", to: "lumen" },
    { label: "Lux to Luminance Converter", from: "lux", to: "luminance-converter" }
  ],
  references: [
    "CIE S 017/E:2020: ILV: International Lighting Vocabulary.",
    "IESNA Lighting Handbook, 10th Edition: Illuminance Metrics.",
    "BIPM SI Brochure: Coherent Derived Units with Special Names."
  ]
};
