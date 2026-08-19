import { CustomArticleData } from "./types";

export const squareKilometerToSquareMillimeter: CustomArticleData = {
  fromUnitId: "square-kilometer",
  toUnitId: "square-millimeter",
  seoTitle: "Square Kilometer to Square Millimeter Converter - km² to mm²",
  metaDescription: "Convert square kilometers to square millimeters (km² to mm²). Get the exact SI metric formula, trillion-factor scale, scientific notation, tables, and examples.",
  h1: "Square Kilometer to Square Millimeter Converter",
  introduction: [
    "Converting from square kilometers to square millimeters represents one of the widest dimensional scale spans in applied physical measurement and computational geometry. It connects macroscopic terrestrial landforms—such as river basins, agricultural valleys, and national parks—with high-precision microscopic units used in optical wafer fabrication, precision fluidics, mechanical tolerance analysis, and micro-scale meteorological precipitation modeling.",
    "Because the kilometer and millimeter are both standard metric derivatives of the base SI meter, their relationship is mathematically exact. One square kilometer contains precisely one trillion (10¹²) square millimeters. This guide explains the mathematical derivation, standard scientific notation formatting, practical step-by-step conversions, and essential engineering contexts."
  ],
  quickAnswer: {
    text: "To convert square kilometers to square millimeters, multiply the area in square kilometers by 1,000,000,000,000 (one trillion, or 10¹²). For example, 0.25 square kilometers equals exactly 250,000,000,000 square millimeters (2.5 × 10¹¹ mm²).",
    formulaDisplay: "1 km² = 1,000,000,000,000 mm² | Area (mm²) = Area (km²) × 10¹²",
    subtext: "Since 1 linear kilometer equals 1,000,000 linear millimeters (10⁶ mm), squaring this dimension gives 1 km² = (10⁶ mm)² = 10¹² mm²."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Kilometer (km²)",
    text: "The square kilometer (symbol: km²) is the premier large-scale SI derived unit of surface area. Corresponding to the area bounded by a square measuring 1,000 meters on each side, it is standard for geographic mapping, regional zoning, forest management, and global climate simulations."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Millimeter (mm²)",
    text: "The square millimeter (symbol: mm²) is an SI derived unit representing the surface area of a square measuring exactly one millimeter (0.001 meters) on each side. It is the primary unit of measurement in mechanical engineering, electronics packaging, wire cross-sectional areas, and material tensile testing."
  },
  relationship: "A single linear kilometer contains 1,000 meters, and each meter contains 1,000 millimeters, resulting in exactly 1,000,000 (10⁶) linear millimeters in one kilometer. Squaring this value for two-dimensional area produces (10⁶)² = 10¹², meaning exactly one trillion square millimeters constitute one square kilometer.",
  relationshipTitle: "SI Metric Area Scale: km² vs mm²",
  relationshipItems: [
    { label: "1 Square Kilometer (km²)", value: "exactly 1,000,000,000,000 Square Millimeters (mm²)" },
    { label: "1 Square Millimeter (mm²)", value: "10⁻¹² Square Kilometers (km²)" },
    { label: "1 Square Kilometer (km²)", value: "1,000,000 Square Meters (m²)" },
    { label: "1 Square Meter (m²)", value: "1,000,000 Square Millimeters (mm²)" }
  ],
  formula: {
    text: "Convert square kilometers to square millimeters by multiplying the square kilometer value by 1,000,000,000,000 (one trillion), or simply multiplying by 10¹² in scientific notation.",
    math: "Area in Square Millimeters (mm²) = Area in Square Kilometers (km²) × 1,000,000,000,000",
    subtext: "In scientific notation: A_mm² = A_km² × 10¹²"
  },
  formulaTitle: "Square Kilometer to Square Millimeter Formula",
  practicalTip: {
    title: "Using Scientific Notation for Trillion-Scale Factors",
    text: "Because handling 12 zeros manually easily introduces transcription errors, write and calculate values in scientific notation (e.g., 4.2 km² = 4.2 × 10¹² mm²). Most scientific calculators and coding languages (JavaScript, Python) process `4.2e12` effortlessly."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Atmospheric Precipitation Flux Calculation",
        subtitle: "A meteorologist computes the total raindrop kinetic energy across a 0.08 square kilometer storm cloud footprint.",
        steps: [
          "State the initial area: Area = 0.08 km².",
          "Apply the SI formula: Area (mm²) = Area (km²) × 10¹².",
          "Substitute the value: Area (mm²) = 0.08 × 1,000,000,000,000.",
          "Calculate the result: Area (mm²) = 80,000,000,000 mm² (8.0 × 10¹⁰ mm²).",
          "Conclude: The storm cloud footprint equals 80 billion square millimeters."
        ]
      },
      {
        title: "Example 2: Semiconductor Fabrication Facility Cleanroom",
        subtitle: "A microelectronics manufacturing complex has a total zoned parcel area of 0.35 square kilometers. Express this in square millimeters.",
        steps: [
          "Identify the given area: Area = 0.35 km².",
          "Multiply by the trillion factor: 0.35 × 10¹² mm².",
          "Compute the product: 350,000,000,000 mm² (3.5 × 10¹¹ mm²).",
          "Conclude: The parcel equals exactly 350 billion square millimeters."
        ]
      },
      {
        title: "Example 3: Subsurface Hydrological Fracture Modeling",
        subtitle: "Geological simulation software models fluid flow through micro-fractures across a 2.5 square kilometer aquifer basin.",
        steps: [
          "Identify the given area: Area = 2.5 km².",
          "Set up the calculation: Area (mm²) = 2.5 × 10¹².",
          "Perform the multiplication: 2.5 × 1,000,000,000,000 = 2,500,000,000,000 mm².",
          "Conclude: The aquifer basin equals 2.5 trillion square millimeters."
        ]
      }
    ]
  },
  table: {
    title: "Square Kilometer to Square Millimeter Conversion Table",
    headers: ["Square Kilometers (km²)", "Square Millimeters (mm²)", "Scientific Notation", "Square Meters (m²)"],
    rows: [
      { fromVal: "0.00001 km²", toVal: "10,000,000 mm²", extra: "1.0 × 10⁷ mm²", extra2: "10 m²" },
      { fromVal: "0.0001 km²", toVal: "100,000,000 mm²", extra: "1.0 × 10⁸ mm²", extra2: "100 m²" },
      { fromVal: "0.001 km²", toVal: "1,000,000,000 mm²", extra: "1.0 × 10⁹ mm²", extra2: "1,000 m²" },
      { fromVal: "0.01 km²", toVal: "10,000,000,000 mm²", extra: "1.0 × 10¹⁰ mm²", extra2: "10,000 m² (1 ha)" },
      { fromVal: "0.1 km²", toVal: "100,000,000,000 mm²", extra: "1.0 × 10¹¹ mm²", extra2: "100,000 m²" },
      { fromVal: "0.5 km²", toVal: "500,000,000,000 mm²", extra: "5.0 × 10¹¹ mm²", extra2: "500,000 m²" },
      { fromVal: "1.0 km²", toVal: "1,000,000,000,000 mm²", extra: "1.0 × 10¹² mm²", extra2: "1,000,000 m²" },
      { fromVal: "5.0 km²", toVal: "5,000,000,000,000 mm²", extra: "5.0 × 10¹² mm²", extra2: "5,000,000 m²" },
      { fromVal: "10.0 km²", toVal: "10,000,000,000,000 mm²", extra: "1.0 × 10¹³ mm²", extra2: "10,000,000 m²" }
    ]
  },
  applications: {
    title: "Engineering, Meteorology & Scientific Applications",
    items: [
      {
        title: "Precipitation & Cloud Physics Modeling",
        text: "Atmospheric scientists simulate rainfall volume and droplet impact distribution across regional weather radars (km²) by integrating droplet cross-sectional areas measured in square millimeters."
      },
      {
        title: "High-Resolution Geotechnical & Porosity Analysis",
        text: "Hydrologists and petroleum engineers calculating pore-throat cross sections and hydraulic conductivity scale regional reservoir boundaries (km²) down to square millimeters to model fluid mechanics."
      },
      {
        title: "Optical & Sensor Grid Mapping",
        text: "Photovoltaic panel silicon wafer layouts and lidar sensor detection arrays bridge large-scale solar farm parcels (km²) with millimeter-scale active sensor elements."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Using linear millimeter scaling (1,000,000) instead of area scaling (1,000,000,000,000): Linear scale is 10⁶, but two-dimensional area requires squaring the factor: (10⁶)² = 10¹².",
      "Confusing square millimeters with square centimeters: 1 cm² = 100 mm². Therefore, square millimeters are 100 times smaller (yielding a factor of 10¹² compared to 10¹⁰ for cm²).",
      "Floating-point precision truncation: In computational software, ensure that 64-bit IEEE 754 floating point numbers or arbitrary precision mathematical libraries are used when working with numbers exceeding 10¹²."
    ]
  },
  faqs: [
    {
      question: "How many square millimeters are in 1 square kilometer?",
      answer: "There are exactly 1,000,000,000,000 (one trillion, or 10¹²) square millimeters in 1 square kilometer."
    },
    {
      question: "What is the formula to convert km² to mm²?",
      answer: "The formula is: Area (mm²) = Area (km²) × 1,000,000,000,000 (or Area (km²) × 10¹²)."
    },
    {
      question: "Why does 1 km² equal 10¹² mm²?",
      answer: "Because 1 km = 1,000,000 mm. Squaring both sides to find area gives (1,000,000 mm)² = 1,000,000,000,000 mm² = 10¹² mm²."
    },
    {
      question: "How do I convert square millimeters back to square kilometers?",
      answer: "To convert mm² to km², divide the value by 1,000,000,000,000 (or multiply by 10⁻¹²)."
    },
    {
      question: "How many square millimeters are in 0.01 square kilometers?",
      answer: "0.01 square kilometers equals exactly 10,000,000,000 (10 billion) square millimeters (0.01 × 10¹² = 10¹⁰ mm²)."
    },
    {
      question: "What is the relationship between mm², m², and km²?",
      answer: "1 m² = 1,000,000 mm² (10⁶ mm²), and 1 km² = 1,000,000 m² (10⁶ m²). Multiplying these gives 1 km² = 10⁶ × 10⁶ = 10¹² mm²."
    },
    {
      question: "How do I express this conversion in computer programming?",
      answer: "In languages like JavaScript or Python, use exponential notation: `const mm2 = km2 * 1e12;` or `mm2 = km2 * (10**12)`."
    },
    {
      question: "Is square millimeter an official SI unit?",
      answer: "Yes, the square millimeter is an officially sanctioned SI decimal submultiple of the square meter."
    }
  ],
  relatedList: [
    { label: "Square Kilometer to Square Meter", from: "square-kilometer", to: "square-meter" },
    { label: "Square Kilometer to Square Centimeter", from: "square-kilometer", to: "square-centimeter" },
    { label: "Square Meter to Square Millimeter", from: "square-meter", to: "square-millimeter" },
    { label: "Square Kilometer to Hectare", from: "square-kilometer", to: "hectare" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — SI Brochure, 9th Edition",
    "ISO 80000-3:2019 — Quantities and Units — Space and Time",
    "IEEE Standard for Metric Practice (IEEE/ASTM SI 10)"
  ]
};
