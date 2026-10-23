import { CustomArticleData } from "./types";

export const squareMillimeterToSquareKilometer: CustomArticleData = {
  fromUnitId: "square-millimeter",
  toUnitId: "square-kilometer",
  seoTitle: "Square Millimeter to Square Kilometer Converter - mm² to km²",
  metaDescription: "Convert square millimeters to square kilometers (mm² to km²) with exact scientific notation, quadratic scaling equations, geographic examples, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/square-millimeter-to-square-kilometer",
  h1: "Square Millimeter to Square Kilometer Converter",
  introduction: [
    "In geographic information systems (GIS), satellite remote sensing, materials science, and macro-environmental modeling, researchers must frequently reconcile microscopic measurement resolutions with macroscopic territorial surface areas. High-resolution satellite multispectral sensor pixels, soil erosion pin-drop apertures, and meteorological hail impact indentations are measured in square millimeters (mm²), while national forest reserves, river drainage basins, and geographic land boundaries are recorded in square kilometers (km²).",
    "Because area expands as the square of linear distance, bridging millimeters and kilometers spans twelve decimal orders of magnitude. One linear kilometer contains 1,000 meters or 1,000,000 millimeters ($10^6\\text{ mm}$). Squaring this dimension reveals that one square kilometer contains exactly 1,000,000,000,000 square millimeters (one trillion mm², or $10^{12}\\text{ mm}^2$). Converting from square millimeters to square kilometers requires dividing by $10^{12}$ (or multiplying by $10^{-12}$)."
  ],
  quickAnswer: {
    text: "To convert square millimeters to square kilometers, divide the square millimeter value by 1,000,000,000,000 (10¹²), or multiply by 10⁻¹². For example, 500,000,000,000 mm² equals exactly 0.5 km².",
    formulaDisplay: "Square Kilometers (km²) = Square Millimeters (mm²) ÷ 10¹²",
    subtext: "1 square kilometer equals exactly 1,000,000,000,000 square millimeters (1 mm² = 10⁻¹² km²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Millimeter (mm²)",
    text: "The square millimeter (symbol: mm²) is an SI-derived metric unit of surface area representing the space inside a square measuring one millimeter (0.001 m) on each side. Equal to $10^{-6}$ square meters, it serves as the foundational unit for mechanical engineering tolerances, electrical wire gauges (IEC 60228), microchip die dimensions, and precision material fracture testing."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Kilometer (km²)",
    text: "The square kilometer (symbol: km²) is the multiple SI derived unit of area representing the space inside a square with sides of one kilometer (1,000 m). Equal to 1,000,000 square meters (100 hectares), it is the global standard for geographic territorial mapping, cartographic surveying, environmental catchment basins, and geopolitical country size comparisons."
  },
  relationship: "The relationship between square millimeters and square kilometers is governed by metric prefix compounding. One kilometer equals $10^6$ millimeters ($1,000,000\\text{ mm}$). When calculating two-dimensional area, this factor is squared: $(10^6\\text{ mm})^2 = 10^{12}\\text{ mm}^2$. Thus, 1 square kilometer contains one trillion square millimeters, and 1 square millimeter equals exactly $10^{-12}$ square kilometers.",
  relationshipTitle: "Twelve-Order Decimal Scale: mm² vs. km²",
  relationshipItems: [
    { label: "1,000,000,000,000 mm² (10¹²)", value: "1.000000 Square Kilometer (km²)" },
    { label: "500,000,000,000 mm²", value: "0.500000 Square Kilometer (km²)" },
    { label: "100,000,000,000 mm²", value: "0.100000 Square Kilometer (km²)" },
    { label: "1,000,000,000 mm²", value: "0.001000 Square Kilometer (km²)" },
    { label: "1 Square Millimeter (mm²)", value: "10⁻¹² Square Kilometer (km²)" }
  ],
  formula: {
    text: "To convert area from square millimeters to square kilometers, divide the square millimeter value by 1,000,000,000,000 (10¹²), or multiply by 10⁻¹².",
    math: "\\text{Area (km}^2\\text{)} = \\frac{\\text{Area (mm}^2\\text{)}}{10^{12}} = \\text{Area (mm}^2\\text{)} \\times 10^{-12}",
    subtext: "To convert square kilometers back to square millimeters: Area (mm²) = Area (km²) × 10¹²"
  },
  formulaTitle: "Square Millimeter to Square Kilometer Conversion Formula",
  practicalTip: {
    title: "The Twelve-Place Decimal Shift",
    text: "Because the conversion factor is 10¹², you convert mm² to km² by moving the decimal point 12 places to the left. When using scientific calculators or coding environments, multiplying by 1e-12 prevents floating-point overflow and maintains precision."
  },
  examples: {
    title: "Step-by-Step Remote Sensing & GIS Calculation Examples",
    items: [
      {
        title: "Example 1: High-Resolution Satellite Pixel Ground Array",
        subtitle: "A synthetic aperture radar (SAR) satellite processes a calibrated urban footprint comprising 450,000,000,000 square millimeters. Express this monitored ground zone in square kilometers.",
        steps: [
          "Identify the surface area in square millimeters: 450,000,000,000 mm².",
          "Apply the conversion formula: km² = mm² ÷ 10¹².",
          "Calculate: 450,000,000,000 ÷ 1,000,000,000,000 = 0.45 km².",
          "Conclusion: The urban monitored ground zone equals exactly 0.45 square kilometers."
        ]
      },
      {
        title: "Example 2: Drone Photogrammetry Forest Canopy Patch",
        subtitle: "An environmental research team creates a micro-orthomosaic of a coastal mangrove restoration plot totaling 1,200,000,000,000 mm². Convert this area to square kilometers.",
        steps: [
          "State value: 1.2 × 10¹² mm².",
          "Multiply by 10⁻¹²: 1.2 × 10¹² × 10⁻¹² = 1.2 km².",
          "Conclusion: The mangrove plot measures exactly 1.2 square kilometers."
        ]
      },
      {
        title: "Example 3: Solar Farm Photovoltaic Panel Total Active Area",
        subtitle: "A utility-scale solar generation facility installs 1,800,000 photovoltaic modules, each having an active surface of 2,000,000 mm² (totaling 3,600,000,000,000 mm²). Find the total collector surface in square kilometers.",
        steps: [
          "Identify total panel area: 3.6 × 10¹² mm².",
          "Divide by 10¹²: 3.6 × 10¹² ÷ 10¹² = 3.6 km².",
          "Conclusion: The aggregate photovoltaic collector surface equals exactly 3.6 square kilometers."
        ]
      }
    ]
  },
  table: {
    title: "Square Millimeter to Square Kilometer Reference Table",
    headers: ["Square Millimeters (mm²)", "Square Kilometers (km²)", "Hectares (ha)", "Square Meters (m²)"],
    rows: [
      { fromVal: "10,000,000,000 mm²", toVal: "0.010 km²", extra: "1.0 ha", extra2: "10,000 m²" },
      { fromVal: "50,000,000,000 mm²", toVal: "0.050 km²", extra: "5.0 ha", extra2: "50,000 m²" },
      { fromVal: "100,000,000,000 mm²", toVal: "0.100 km²", extra: "10.0 ha", extra2: "100,000 m²" },
      { fromVal: "250,000,000,000 mm²", toVal: "0.250 km²", extra: "25.0 ha", extra2: "250,000 m²" },
      { fromVal: "500,000,000,000 mm²", toVal: "0.500 km²", extra: "50.0 ha", extra2: "500,000 m²" },
      { fromVal: "750,000,000,000 mm²", toVal: "0.750 km²", extra: "75.0 ha", extra2: "750,000 m²" },
      { fromVal: "1,000,000,000,000 mm²", toVal: "1.000 km²", extra: "100.0 ha", extra2: "1,000,000 m²" },
      { fromVal: "2,000,000,000,000 mm²", toVal: "2.000 km²", extra: "200.0 ha", extra2: "2,000,000 m²" },
      { fromVal: "5,000,000,000,000 mm²", toVal: "5.000 km²", extra: "500.0 ha", extra2: "5,000,000 m²" },
      { fromVal: "10,000,000,000,000 mm²", toVal: "10.000 km²", extra: "1,000.0 ha", extra2: "10,000,000 m²" }
    ]
  },
  expertNote: {
    title: "Scientific Computing: Managing Trillion-Scale Magnitudes",
    text: "When converting between square millimeters and square kilometers in geospatial raster software or scientific simulations, integer overflow can occur in 32-bit systems (which overflow at ~2.14 × 10⁹). Always utilize 64-bit double-precision floating-point numbers or scientific notation (such as 1e-12) to ensure numbers with twelve decimal zeros are computed without truncated rounding or register overflow errors."
  },
  applications: {
    title: "Remote Sensing, GIS, and Geospatial Applications",
    items: [
      {
        title: "Satellite Sensor Pixel Ground Sampling Distance (GSD)",
        text: "Remote sensing scientists convert ultra-high-resolution sub-millimeter aerial camera sensor detector cells into ground footprint coverage expressed in square kilometers."
      },
      {
        title: "Micro-Meteorological Precipitation Catchments",
        text: "Hydrologists scale laboratory droplet impact catch plates (measured in mm²) to regional river basin watershed flood discharge models recorded in square kilometers."
      },
      {
        title: "Large-Scale Agro-Photovoltaic Surface Analysis",
        text: "Renewable energy engineers sum individual solar cell silicon wafer apertures in mm² to determine total land area occupancy in square kilometers for grid interconnect permits."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000,000 instead of 10¹²: 1,000,000 is the factor for linear millimeters per kilometer, or square millimeters per square meter. The correct factor for mm² to km² is $(10^6)^2 = 10^{12}$ (one trillion).",
      "Confusing square kilometers with hectares: 1 square kilometer contains 100 hectares. Converting directly to hectares requires dividing by 10¹⁰, not 10¹².",
      "Miscounting zeros in floating-point outputs: 0.000000000001 contains 11 leading zeros after the decimal point before the digit 1. Using standard scientific notation ($10^{-12}$) prevents transcription mistakes.",
      "Software 32-bit integer overflow: Calculating areas in mm² exceeding 2,147,483,647 requires 64-bit integer or double-precision datatypes in automated scripts."
    ]
  },
  faqs: [
    {
      question: "How do I convert square millimeters to square kilometers?",
      answer: "To convert square millimeters (mm²) to square kilometers (km²), divide the square millimeter value by 1,000,000,000,000 (10¹²), or multiply by 10⁻¹². For example, 2,000,000,000,000 mm² divided by 10¹² equals exactly 2 km²."
    },
    {
      question: "How many square millimeters are in one square kilometer?",
      answer: "There are exactly 1,000,000,000,000 (one trillion) square millimeters in one square kilometer. This is because 1 kilometer equals 1,000,000 millimeters, and (1,000,000)² = 10¹²."
    },
    {
      question: "What is 1,000,000,000 mm² in km²?",
      answer: "One billion square millimeters equals 0.001 square kilometers (which equals 1,000 square meters or 0.1 hectares)."
    },
    {
      question: "What is 100,000,000,000 mm² in km²?",
      answer: "One hundred billion square millimeters equals exactly 0.1 square kilometers (equivalent to 10 hectares or 100,000 square meters)."
    },
    {
      question: "Why is the conversion factor 10¹²?",
      answer: "Because 1 kilometer equals 1,000 meters, and each meter equals 1,000 millimeters, making 1 km = 1,000,000 mm. Squaring both sides to find area gives (10⁶ mm)² = 10¹² mm²."
    },
    {
      question: "How do I convert square kilometers back to square millimeters?",
      answer: "Multiply the square kilometer value by 1,000,000,000,000 (10¹²). For example, 0.75 km² multiplied by 10¹² equals 750,000,000,000 mm²."
    },
    {
      question: "Can I convert mm² to km² in stages?",
      answer: "Yes. First divide mm² by 1,000,000 to get square meters (m²), then divide that result by 1,000,000 to get square kilometers (km²)."
    },
    {
      question: "How many square millimeters are in one hectare?",
      answer: "Since 1 hectare equals 10,000 m² and each m² equals 1,000,000 mm², one hectare contains exactly 10,000,000,000 mm² (10 billion mm²), which is 0.01 km²."
    },
    {
      question: "What scientific notation is used for mm² to km²?",
      answer: "The conversion is written as: km² = mm² × 10⁻¹²."
    },
    {
      question: "Is square kilometer an official SI unit?",
      answer: "Yes, the square kilometer is an official SI multiple derived unit combining the SI prefix 'kilo' (10³) with the coherent derived unit of area, the square meter."
    }
  ],
  relatedList: [
    { label: "Square Kilometer to Square Millimeter", from: "square-kilometer", to: "square-millimeter" },
    { label: "Square Millimeter to Square Meter", from: "square-millimeter", to: "square-meter" },
    { label: "Square Meter to Square Kilometer", from: "square-meter", to: "square-kilometer" },
    { label: "Square Millimeter to Square Mile", from: "square-millimeter", to: "square-mile" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "International Organization for Standardization (ISO). <em>ISO 80000-3: Space and Time</em>.",
    "National Geospatial-Intelligence Agency (NGA). <em>Geodetic and Measurement Standards Reference Guide</em>."
  ]
};
