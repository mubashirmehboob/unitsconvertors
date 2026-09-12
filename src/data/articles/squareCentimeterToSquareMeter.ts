import { CustomArticleData } from "./types";

export const squareCentimeterToSquareMeter: CustomArticleData = {
  fromUnitId: "square-centimeter",
  toUnitId: "square-meter",
  seoTitle: "Square Centimeter to Square Meter Converter - cm² to m²",
  metaDescription: "Convert square centimeters to square meters (cm² to m²) instantly. Learn the 10,000 division rule, dimensional area scaling, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/square-centimeter-to-square-meter",
  h1: "Square Centimeter to Square Meter Converter",
  introduction: [
    "In architectural drafting, civil engineering, material science, and mechanical design, surface area is frequently measured in square centimeters (cm²) and square meters (m²). While component specifications—such as tile dimensions, solar cell apertures, sheet metal coupons, and structural cross-sections—are dimensioned in square centimeters, building floor plans, international material codes, and thermodynamic heat transfer rates require square meters.",
    "Because area scales quadratically with length, converting square centimeters to square meters requires accounting for both dimensions. Since 1 linear meter contains 100 centimeters, one square meter contains $100 \\times 100 = 10,000$ square centimeters. Therefore, one square centimeter equals exactly 0.0001 square meters ($10^{-4}\\text{ m}^2$)."
  ],
  quickAnswer: {
    text: "To convert square centimeters to square meters, divide the square centimeter value by 10,000 (or multiply by 0.0001). For example, 25,000 cm² equals exactly 2.5 m².",
    formulaDisplay: "Square Meters (m²) = Square Centimeters (cm²) ÷ 10,000",
    subtext: "1 square centimeter equals exactly 0.0001 square meters (1 m² = 10,000 cm²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Centimeter (cm²)",
    text: "The square centimeter (symbol: cm²) is a metric unit of area representing the space enclosed by a square with sides of one centimeter ($10^{-2}\\text{ m}$). Equal to 0.0001 square meters or 100 square millimeters, it is universally used for measuring consumer electronics display sizes, printed packaging, anatomical cross-sections in medical imaging, and laboratory specimen plates."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Meter (m²)",
    text: "The square meter (symbol: m²) is the coherent SI derived unit of area, defined as the area enclosed by a square whose sides each measure exactly one meter. It is the primary global standard for real estate floor space, architectural design, construction material estimation, solar irradiance collection ratings, and scientific heat-flux calculations."
  },
  relationship: "The relationship between square centimeters and square meters stems directly from the definition of the meter in linear space: 1 m = 100 cm. Squaring both sides yields $(1\\text{ m})^2 = (100\\text{ cm})^2 = 10,000\\text{ cm}^2$. Inverting this relationship demonstrates that 1 square centimeter equals exactly $1/10,000$ or $0.0001$ square meters ($10^{-4}\\text{ m}^2$).",
  relationshipTitle: "Quadratic Dimensional Ratio: cm² vs. m²",
  relationshipItems: [
    { label: "1 Square Meter (m²)", value: "Exactly 10,000 Square Centimeters (cm²)" },
    { label: "1 Square Centimeter (cm²)", value: "Exactly 0.0001 Square Meters (10⁻⁴ m²)" },
    { label: "1,000 Square Centimeters (cm²)", value: "0.1 Square Meters (m²)" },
    { label: "5,000 Square Centimeters (cm²)", value: "0.5 Square Meters (m²)" }
  ],
  formula: {
    text: "To convert area from square centimeters to square meters, divide the square centimeter value by 10,000 (or move the decimal point four places to the left).",
    math: "\\text{Area (m}^2\\text{)} = \\frac{\\text{Area (cm}^2\\text{)}}{10,000} = \\text{Area (cm}^2\\text{)} \\times 0.0001",
    subtext: "To convert square meters back to square centimeters: Area (cm²) = Area (m²) × 10,000"
  },
  formulaTitle: "Square Centimeter to Square Meter Conversion Formula",
  practicalTip: {
    title: "The Four-Place Left Decimal Shift",
    text: "Because 10,000 has four zeros, you can convert cm² to m² mentally by shifting the decimal point four positions to the left: 8,500 cm² becomes 0.85 m²; 45,000 cm² becomes 4.5 m²; and 1,200 cm² becomes 0.12 m²."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Ceramic Floor Tile Coverage Calculation",
        subtitle: "A builder orders 150 ceramic porcelain floor tiles. Each tile measures 60 cm by 60 cm, covering 3,600 cm². Calculate the total area of one tile and the entire batch in square meters.",
        steps: [
          "State single tile area: 3,600 cm².",
          "Apply conversion formula: m² = cm² ÷ 10,000.",
          "Calculate single tile: 3,600 ÷ 10,000 = 0.36 m².",
          "Multiply by 150 tiles: 0.36 m² × 150 = 54.0 m².",
          "Conclusion: One tile is 0.36 m², and the 150 tiles cover 54 square meters."
        ]
      },
      {
        title: "Example 2: Photovoltaic Solar Panel Cell Aperture",
        subtitle: "A monocrystalline solar panel consists of 72 silicon cells. Each cell has an active surface of 244 square centimeters. What is the total active solar area in square meters?",
        steps: [
          "Find total cm²: 72 × 244 cm² = 17,568 cm².",
          "Divide by 10,000: 17,568 ÷ 10,000 = 1.7568 m².",
          "Conclusion: The total active cell surface is approximately 1.757 m²."
        ]
      },
      {
        title: "Example 3: Thermal Window Glazing Heat-Loss Audit",
        subtitle: "An energy inspector measures a skylight aperture of 8,200 cm². Express this opening in square meters for U-value calculations.",
        steps: [
          "Given: 8,200 cm².",
          "Shift decimal 4 places left: 8,200 ÷ 10,000 = 0.82.",
          "Conclusion: The skylight area is 0.82 square meters."
        ]
      }
    ]
  },
  table: {
    title: "Square Centimeter to Square Meter Quick Reference Table",
    headers: ["Square Centimeters (cm²)", "Square Meters (m²)", "Square Millimeters (mm²)", "Square Feet (ft²)"],
    rows: [
      { fromVal: "100 cm²", toVal: "0.0100 m²", extra: "10,000 mm²", extra2: "0.1076 ft²" },
      { fromVal: "500 cm²", toVal: "0.0500 m²", extra: "50,000 mm²", extra2: "0.5382 ft²" },
      { fromVal: "1,000 cm²", toVal: "0.1000 m²", extra: "100,000 mm²", extra2: "1.0764 ft²" },
      { fromVal: "2,500 cm²", toVal: "0.2500 m²", extra: "250,000 mm²", extra2: "2.6910 ft²" },
      { fromVal: "5,000 cm²", toVal: "0.5000 m²", extra: "500,000 mm²", extra2: "5.3820 ft²" },
      { fromVal: "7,500 cm²", toVal: "0.7500 m²", extra: "750,000 mm²", extra2: "8.0730 ft²" },
      { fromVal: "10,000 cm²", toVal: "1.0000 m²", extra: "1,000,000 mm²", extra2: "10.7639 ft²" },
      { fromVal: "25,000 cm²", toVal: "2.5000 m²", extra: "2,500,000 mm²", extra2: "26.9098 ft²" },
      { fromVal: "50,000 cm²", toVal: "5.0000 m²", extra: "5,000,000 mm²", extra2: "53.8196 ft²" },
      { fromVal: "100,000 cm²", toVal: "10.0000 m²", extra: "10,000,000 mm²", extra2: "107.6391 ft²" }
    ]
  },
  expertNote: {
    title: "Engineering Stress Mechanics: Converting N/cm² to Pascals (N/m²)",
    text: "In structural mechanics and material testing, pressure and stress are frequently given in newtons per square centimeter (N/cm²). Because pressure equals force divided by area ($P = F / A$), dividing by an area that is 10,000 times smaller causes the pressure unit to be 10,000 times larger. Therefore, $1\\text{ N/cm}^2 = 10,000\\text{ N/m}^2 = 10,000\\text{ Pa} = 10\\text{ kPa} = 0.01\\text{ MPa}$. Keeping the 10,000 area factor clear prevents catastrophic errors in load-bearing calculations."
  },
  applications: {
    title: "Practical Architecture, Manufacturing & Engineering Scenarios",
    items: [
      {
        title: "Architectural Flooring and Tiling Estimations",
        text: "Quantity surveyors take tile dimensions manufactured in centimeters (e.g., 30 cm × 60 cm = 1,800 cm²), convert them to square meters (0.18 m²), and divide the total room floor area (m²) by the unit tile area to order correct quantities with wastage allowances."
      },
      {
        title: "Solar Photovoltaic Efficiency and Power Density",
        text: "Renewable energy engineers calculate solar cell performance by measuring small lab cell areas in square centimeters and converting to square meters to evaluate standard irradiance compliance ($1,000\\text{ W/m}^2$ under AM1.5 standard test conditions)."
      },
      {
        title: "HVAC Ventilation Duct Airflow Sizing",
        text: "HVAC engineers measure rectangular duct internal cross-sections in square centimeters and convert to square meters to multiply by air velocity (m/s) to compute volumetric airflow rates in cubic meters per second (m³/s)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 100 instead of 10,000: The most widespread area mistake. While 1 meter has 100 centimeters, 1 square meter has 100 × 100 = 10,000 square centimeters. Dividing by 100 results in an answer that is 100 times too large.",
      "Multiplying by 10,000 instead of dividing: Converting from a small unit (cm²) to a larger unit (m²) must always produce a smaller numerical figure.",
      "Forgetting to square both dimensions: Converting a 50 cm × 50 cm table top as 50 × 50 ÷ 100 = 25 m² instead of 2,500 ÷ 10,000 = 0.25 m².",
      "Confusing square centimeters with cubic centimeters: cm² measures surface area, whereas cm³ (or mL) measures three-dimensional volume."
    ]
  },
  faqs: [
    {
      question: "How do I convert square centimeters to square meters?",
      answer: "To convert square centimeters (cm²) to square meters (m²), divide the square centimeter value by 10,000 (or multiply by 0.0001). For instance, 5,000 cm² divided by 10,000 equals 0.5 m²."
    },
    {
      question: "How many square centimeters are in 1 square meter?",
      answer: "There are exactly 10,000 square centimeters in 1 square meter (100 cm × 100 cm = 10,000 cm²)."
    },
    {
      question: "Why do we divide by 10,000 instead of 100?",
      answer: "Area is two-dimensional. Because 1 meter equals 100 centimeters in length and 100 centimeters in width, the total area is 100 × 100 = 10,000 square centimeters."
    },
    {
      question: "What is 10,000 cm² in square meters?",
      answer: "10,000 square centimeters equals exactly 1 square meter (1.0 m²)."
    },
    {
      question: "What is 1,000 cm² in square meters?",
      answer: "1,000 square centimeters equals 0.1 square meters (1,000 ÷ 10,000 = 0.1 m²)."
    },
    {
      question: "What is 25,000 cm² in square meters?",
      answer: "25,000 square centimeters equals 2.5 square meters (25,000 ÷ 10,000 = 2.5 m²)."
    },
    {
      question: "How do I convert square meters back to square centimeters?",
      answer: "To convert square meters back to square centimeters, multiply the square meter value by 10,000. For example, 3.2 m² × 10,000 = 32,000 cm²."
    },
    {
      question: "What is 1 cm² in square meters?",
      answer: "1 square centimeter equals exactly 0.0001 square meters (10⁻⁴ m²)."
    },
    {
      question: "How many square feet are in 10,000 cm²?",
      answer: "Since 10,000 cm² equals 1 square meter, it equals approximately 10.7639 square feet."
    }
  ],
  relatedList: [
    { label: "Square Meter to Square Centimeter", from: "square-meter", to: "square-centimeter" },
    { label: "Square Centimeter to Square Millimeter", from: "square-centimeter", to: "square-millimeter" },
    { label: "Square Centimeter to Square Inch", from: "square-centimeter", to: "square-inch" },
    { label: "Square Centimeter to Square Foot", from: "square-centimeter", to: "square-foot" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units (SI)</em>, Special Publication 811.",
    "ISO 80000-3:2019. <em>Quantities and units — Part 3: Space and time</em>."
  ]
};
