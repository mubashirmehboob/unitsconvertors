import { CustomArticleData } from "./types";

export const luxToLumen: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "lumen",
  seoTitle: "Lux to Lumen Engineering Calculation (lx to lm) | UnitsConvertors.com",
  metaDescription: "Calculate Lumens from Lux (lx to lm) using illuminated surface area. Learn luminous flux formulas, room lighting calculations, worked examples, and FAQs.",
  h1: "Lux to Lumen Engineering Calculation",
  introduction: [
    "Lux (lx) and Lumens (lm) are closely related photometric units, but they measure fundamentally different physical properties of light. Lumens quantify total luminous flux emitted by a light source in all directions. In contrast, Lux quantifies illuminance—the density of luminous flux striking a specific surface area (defined as one lumen per square meter: 1 lx = 1 lm/m²).",
    "Because lux measures light concentration per unit area while lumens measure total light output, there is no single universal conversion factor between lux and lumens without specifying the illuminated surface area ($A$ in square meters). Under uniform illumination, total luminous flux in lumens ($\Phi$) is calculated by multiplying illuminance in lux ($E$) by surface area in square meters ($A$): $\Phi = E \times A$.",
    "This calculation represents a Type B conditional engineering transformation rather than a direct unit conversion. This guide explains architectural lumen planning, greenhouse canopy flux integration, room utilization factors, step-by-step calculations, and practical lighting engineering examples."
  ],
  quickAnswer: {
    text: "Lux measures light density per square meter, while Lumens measure total light output. Therefore, there is no fixed conversion ratio between lux and lumens. To calculate Lumens from Lux, multiply illuminance in Lux by the illuminated surface area in square meters: Lumens = Lux × Area (m²).",
    formulaDisplay: "lm = lx × (surface area in m²)",
    subtext: "If a surface area of 1 square meter receives uniform illuminance of 1 Lux, the total luminous flux is 1 Lumen."
  },
  aboutSourceUnit: {
    title: "What is a Lux (lx)?",
    text: "The Lux (symbol: lx) is the SI unit of illuminance. It expresses how much luminous flux covers a given surface area, where 1 lux equals 1 lumen per square meter (1 lx = 1 lm/m²). Lux indicates how bright a surface actually feels to the human eye."
  },
  aboutTargetUnit: {
    title: "Understanding the Lumen (lm)",
    text: "The Lumen (symbol: lm) is the SI derived unit of luminous flux. It measures the total amount of visible light emitted by a lamp or light source in all directions per unit time. Light bulb packaging rates total light output in lumens."
  },
  relationship: "Lux and Lumens are related by surface area: 1 Lux = 1 Lumen / 1 m². Consequently, Total Lumens = Lux × Area (m²). For non-uniform beam spreads, integration over the surface geometry or incorporating coefficient of utilization (CU) factors is required.",
  relationshipTitle: "Lux to Lumen Area Scaling Examples (at 500 Lux Target Illuminance)",
  relationshipItems: [
    { label: "500 lx over 1 m²", value: "500 lm (Single desk work area)" },
    { label: "500 lx over 10 m²", value: "5,000 lm (Small office room / study space)" },
    { label: "500 lx over 50 m²", value: "25,000 lm (Open commercial office floor area)" },
    { label: "500 lx over 200 m²", value: "100,000 lm (School gymnasium or retail hall floor)" },
    { label: "500 lx over 1,000 m²", value: "500,000 lm (Industrial logistics warehouse floor)" }
  ],
  formula: {
    text: "Multiply illuminance in Lux by the surface area in square meters (or convert area from square feet by dividing sq ft by 10.76391) to determine total luminous flux in Lumens.",
    math: "lm = lx × (area in m²)",
    subtext: "For imperial areas: lm = lx × (area in sq ft / 10.76391) or lm = fc × (area in sq ft)."
  },
  formulaTitle: "Lux to Lumen Flux Integration Formula",
  practicalTip: {
    title: "Architectural Coefficient of Utilization (CU)",
    text: "In actual room fixture design, not all lumens emitted by a fixture reach the work plane due to wall absorption and fixture optics. Engineers apply a Coefficient of Utilization (CU ~ 0.5 - 0.7): Required Fixture Lumens = (Target Lux × Room Area) / CU."
  },
  expertNote: {
    title: "Greenhouse Horticultural Canopy Integration",
    text: "Horticultural engineers converting photopic illuminance (lux) to total canopy flux (lumens) multiply desk sensor readings by total bench square meters to evaluate overall light capture across crop beds."
  },
  examples: {
    title: "Step-by-Step lx to lm Engineering Worked Examples",
    items: [
      {
        title: "Example 1: Commercial Office Suite Design",
        subtitle: "Calculate total raw lumens needed to illuminate a 40 square meter office room to a target level of 500 Lux.",
        steps: [
          "Identify target illuminance: 500 lx.",
          "Identify room floor area: A = 40 m².",
          "Apply formula: lm = 500 × 40.",
          "Perform calculation: 500 × 40 = 20,000.",
          "Final Result: 20,000 raw Lumens are required across the 40 m² area."
        ]
      },
      {
        title: "Example 2: Sports Stadium Indoor Basketball Court",
        subtitle: "A basketball court measuring 28m × 15m (420 m²) requires 1,000 Lux for HDTV broadcast. Calculate total court lumens.",
        steps: [
          "Calculate surface area: 28m × 15m = 420 m².",
          "Identify target illuminance: 1,000 lx.",
          "Apply formula: lm = 1,000 × 420 = 420,000.",
          "Final Result: 420,000 Lumens must reach the court surface."
        ]
      },
      {
        title: "Example 3: Residential Kitchen Countertop",
        subtitle: "Calculate lumens required for a 3 m² countertop illuminated to 300 Lux.",
        steps: [
          "Identify illuminance: 300 lx.",
          "Identify countertop area: 3 m².",
          "Multiply: 300 × 3 = 900.",
          "Final Result: 900 Lumens are required on the countertop."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Lumen Engineering Area Matrix",
    headers: ["Target Lux", "Area (m²)", "Area (sq ft)", "Calculated Lumens (lm)", "Application Context"],
    rows: [
      { fromVal: "100 lx", toVal: "10 m²", extra: "107.6 sq ft", extra2: "1,000 lm", extra3: "Storage hallway circulation" },
      { fromVal: "300 lx", toVal: "15 m²", extra: "161.5 sq ft", extra2: "4,500 lm", extra3: "Elementary school classroom space" },
      { fromVal: "500 lx", toVal: "20 m²", extra: "215.3 sq ft", extra2: "10,000 lm", extra3: "Private executive office room" },
      { fromVal: "500 lx", toVal: "50 m²", extra: "538.2 sq ft", extra2: "25,000 lm", extra3: "Open-plan corporate desk zone" },
      { fromVal: "750 lx", toVal: "30 m²", extra: "322.9 sq ft", extra2: "22,500 lm", extra3: "Engineering drafting workstation room" },
      { fromVal: "1,000 lx", toVal: "100 m²", extra: "1,076 sq ft", extra2: "100,000 lm", extra3: "High-tech cleanroom laboratory floor" },
      { fromVal: "1,000 lx", toVal: "420 m²", extra: "4,521 sq ft", extra2: "420,000 lm", extra3: "Indoor sports arena floor target" },
      { fromVal: "500 lx", toVal: "1,000 m²", extra: "10,764 sq ft", extra2: "500,000 lm", extra3: "Commercial distribution logistics warehouse" }
    ]
  },
  applications: {
    title: "Industry Applications of Lux to Lumen Engineering Calculations",
    items: [
      {
        title: "Architectural Lighting Layout & Fixture Selection",
        text: "Lighting engineers calculate total room lumens by multiplying target lux by area, then divide by individual fixture lumen output to determine fixture count."
      },
      {
        title: "Agricultural Greenhouse Canopy Design",
        text: "Growers evaluate crop light capture by converting target lux across greenhouse floor square meters into total lumen flux requirements."
      },
      {
        title: "Industrial Logistics & Warehouse Planning",
        text: "Facility managers audit high-bay LED installations by multiplying floor lux measurements by warehouse area to confirm lumen depreciation rates."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Calculating Lumens from Lux",
    items: [
      "Forgetting surface area: Lux cannot be converted to lumens without multiplying by total square meters.",
      "Ignoring room surface reflection losses: Lumens reaching the floor are less than total lamp lumens due to wall absorption.",
      "Using area in square feet directly with lux: Square feet must be converted to square meters (m² = sq ft / 10.76391) when calculating lumens from lux."
    ]
  },
  faqs: [
    {
      question: "Can I convert Lux directly to Lumens without area?",
      answer: "No. Lux measures flux density per square meter, while Lumens measure total flux output. You must specify illuminated area in square meters."
    },
    {
      question: "What is the formula to convert Lux to Lumens?",
      answer: "The formula is: Lumens = Lux × (Area in square meters)."
    },
    {
      question: "How many Lumens equal 500 Lux?",
      answer: "It depends on the area. Over 1 m², 500 Lux equals 500 Lumens. Over 10 m², 500 Lux equals 5,000 Lumens."
    },
    {
      question: "How do I calculate Lumens if my room size is in square feet?",
      answer: "Divide area in sq ft by 10.76391 to get m², then multiply by Lux. Or multiply Foot-candles by area in sq ft."
    },
    {
      question: "What is the difference between Lumens and Lux?",
      answer: "Lumens measure total light emitted by a source; Lux measures how much of that light strikes a specific surface area."
    },
    {
      question: "Why do LED light bulbs list Lumens instead of Lux?",
      answer: "Because a light bulb emits lumens into space; the lux it creates depends on where you install it and how large the room is."
    },
    {
      question: "How many Lumens do I need for a 20 m² office at 500 Lux?",
      answer: "You need 10,000 net Lumens reaching the desk plane (20 m² × 500 lx)."
    },
    {
      question: "What is Coefficient of Utilization (CU) in lumen calculations?",
      answer: "CU accounts for light lost to fixture optics and wall absorption. Required lamp lumens = (Lux × Area) / CU."
    }
  ],
  relatedList: [
    { label: "Lux to Foot-candle", from: "lux", to: "foot-candle" },
    { label: "Lux to Candela", from: "lux", to: "candela" },
    { label: "Lux to Candela ↔ Lux (at 1m)", from: "lux", to: "candela-lux-inverse" },
    { label: "Lux to Illuminance Converter", from: "lux", to: "illuminance-converter" }
  ],
  references: [
    "IESNA Lighting Handbook (10th Edition): Luminous Flux & Illuminance Integration.",
    "CIE 015:2004 Colorimetry & Photometry Standards.",
    "ISO 8995-1:2002 Lighting of Indoor Work Places."
  ]
};
