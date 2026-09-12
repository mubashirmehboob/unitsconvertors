import { CustomArticleData } from "./types";

export const squareCentimeterToSquareMillimeter: CustomArticleData = {
  fromUnitId: "square-centimeter",
  toUnitId: "square-millimeter",
  seoTitle: "Square Centimeter to Square Millimeter Converter - cm² to mm²",
  metaDescription: "Convert square centimeters to square millimeters (cm² to mm²) instantly. Learn the 100 multiplier rule, microelectronics sizing, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/square-centimeter-to-square-millimeter",
  h1: "Square Centimeter to Square Millimeter Converter",
  introduction: [
    "In electrical engineering, mechanical manufacturing, semiconductor design, and biological histology, surface measurements frequently transition between square centimeters (cm²) and square millimeters (mm²). While small manufactured components—such as smartphone camera sensors, solar cell fragments, and surgical wound dressings—are sized in square centimeters, high-precision engineering drawings, wire conductor gauges, and microchip silicon dies are specified in square millimeters.",
    "Because area is a two-dimensional geometric quantity, converting square centimeters to square millimeters follows the square of the metric base-10 prefix. Since 1 linear centimeter equals exactly 10 millimeters, one square centimeter contains $10 \\times 10 = 100$ square millimeters. Multiplying any area in square centimeters by 100 yields its exact equivalent in square millimeters without approximation."
  ],
  quickAnswer: {
    text: "To convert square centimeters to square millimeters, multiply the square centimeter value by 100 (or move the decimal point two places to the right). For example, 4.5 cm² equals exactly 450 mm².",
    formulaDisplay: "Square Millimeters (mm²) = Square Centimeters (cm²) × 100",
    subtext: "1 square centimeter equals exactly 100 square millimeters (1 mm² = 0.01 cm²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Centimeter (cm²)",
    text: "The square centimeter (symbol: cm²) is a standard metric unit of area representing the surface of a square with sides of one centimeter ($10^{-2}\\text{ m}$). Equal to 0.0001 square meters or 100 square millimeters, it is universally used for measuring consumer product labels, small mechanical brackets, photographic film frames, and laboratory culture dishes."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Millimeter (mm²)",
    text: "The square millimeter (symbol: mm²) is an SI derived unit of area representing the surface enclosed by a square with sides of one millimeter ($10^{-3}\\text{ m}$). Equal to $10^{-6}$ square meters (one-millionth of a square meter) or 0.01 square centimeters, it is the worldwide standard for electrical wire conductor cross-sections, microchip silicon die areas, mechanical shear stress calculations, and optical fiber apertures."
  },
  relationship: "The relationship between square centimeters and square millimeters is derived directly from linear metric definitions: 1 cm = 10 mm. Squaring both sides yields $(1\\text{ cm})^2 = (10\\text{ mm})^2 = 100\\text{ mm}^2$. Conversely, 1 square millimeter equals exactly $1/100$ or $0.01$ square centimeters.",
  relationshipTitle: "Exact 1-to-100 Metric Area Scale",
  relationshipItems: [
    { label: "1 Square Centimeter (cm²)", value: "Exactly 100 Square Millimeters (mm²)" },
    { label: "1 Square Millimeter (mm²)", value: "Exactly 0.01 Square Centimeters (cm²)" },
    { label: "0.1 Square Centimeters (cm²)", value: "10 Square Millimeters (mm²)" },
    { label: "0.01 Square Centimeters (cm²)", value: "1 Square Millimeter (mm²)" }
  ],
  formula: {
    text: "To convert area from square centimeters to square millimeters, multiply the square centimeter value by 100.",
    math: "\\text{Area (mm}^2\\text{)} = \\text{Area (cm}^2\\text{)} \\times 100",
    subtext: "To convert square millimeters back to square centimeters: Area (cm²) = Area (mm²) ÷ 100"
  },
  formulaTitle: "Square Centimeter to Square Millimeter Conversion Formula",
  practicalTip: {
    title: "The Two-Place Right Decimal Shift",
    text: "Because the conversion factor is 100, you can convert cm² to mm² instantly by moving the decimal point two places to the right: 2.75 cm² becomes 275 mm²; 0.6 cm² becomes 60 mm²; and 15 cm² becomes 1,500 mm²."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Smartphone Camera Sensor Die Area",
        subtitle: "A high-end smartphone camera features an image sensor measuring 1.15 square centimeters. Express this active sensor surface in square millimeters for engineering comparison.",
        steps: [
          "State given sensor area: 1.15 cm².",
          "Apply formula: mm² = cm² × 100.",
          "Calculate: 1.15 × 100 = 115.",
          "Conclusion: The camera sensor active surface is 115 square millimeters."
        ]
      },
      {
        title: "Example 2: Precision CNC Laser Cutting Coupon",
        subtitle: "A medical device manufacturing shop cuts stainless steel bone plates with a surface area of 6.8 square centimeters. What is the surface area in square millimeters?",
        steps: [
          "Identify value: 6.8 cm².",
          "Multiply by 100: 6.8 × 100 = 680.",
          "Conclusion: The bone plate surface area is 680 square millimeters."
        ]
      },
      {
        title: "Example 3: Histology Pathology Tissue Biopsy",
        subtitle: "A pathology laboratory mounts a tissue specimen covering 0.42 cm² onto a microscope glass slide. Convert this area to mm².",
        steps: [
          "Given: 0.42 cm².",
          "Calculate: 0.42 × 100 = 42.",
          "Conclusion: The specimen area is exactly 42 square millimeters."
        ]
      }
    ]
  },
  table: {
    title: "Square Centimeter to Square Millimeter Reference Table",
    headers: ["Square Centimeters (cm²)", "Square Millimeters (mm²)", "Square Meters (m²)", "Square Inches (in²)"],
    rows: [
      { fromVal: "0.01 cm²", toVal: "1 mm²", extra: "0.000001 m²", extra2: "0.00155 in²" },
      { fromVal: "0.05 cm²", toVal: "5 mm²", extra: "0.000005 m²", extra2: "0.00775 in²" },
      { fromVal: "0.10 cm²", toVal: "10 mm²", extra: "0.000010 m²", extra2: "0.01550 in²" },
      { fromVal: "0.25 cm²", toVal: "25 mm²", extra: "0.000025 m²", extra2: "0.03875 in²" },
      { fromVal: "0.50 cm²", toVal: "50 mm²", extra: "0.000050 m²", extra2: "0.07750 in²" },
      { fromVal: "1.00 cm²", toVal: "100 mm²", extra: "0.000100 m²", extra2: "0.15500 in²" },
      { fromVal: "2.50 cm²", toVal: "250 mm²", extra: "0.000250 m²", extra2: "0.38750 in²" },
      { fromVal: "5.00 cm²", toVal: "500 mm²", extra: "0.000500 m²", extra2: "0.77500 in²" },
      { fromVal: "10.00 cm²", toVal: "1,000 mm²", extra: "0.001000 m²", extra2: "1.55000 in²" },
      { fromVal: "25.00 cm²", toVal: "2,500 mm²", extra: "0.002500 m²", extra2: "3.87501 in²" }
    ]
  },
  expertNote: {
    title: "Electrical Conductor Sizing: Cross-Sectional Area vs. Resistance",
    text: "Under IEC 60228 standards, electrical conductors (cables and busbars) are categorized strictly by cross-sectional area in square millimeters (e.g., 1.5 mm², 2.5 mm², 4 mm², 10 mm²). When technicians measure busbar dimensions using vernier calipers in centimeters (e.g., a copper strip 0.4 cm thick and 2.5 cm wide = 1.0 cm²), they must multiply by 100 to obtain 100 mm². Using the correct 100 factor is critical because electrical current carrying capacity (ampacity) and $I^2R$ resistive heating depend directly on conductor cross-section in square millimeters."
  },
  applications: {
    title: "Practical Semiconductor, Electrical & Mechanical Scenarios",
    items: [
      {
        title: "Semiconductor Silicon Wafer Yield and Die Sizing",
        text: "Microchip process engineers take raw circular 300 mm silicon wafer areas measured in square centimeters and calculate the number of individual integrated circuit microprocessor dies, which are dimensioned in square millimeters (e.g., a 120 mm² CPU die)."
      },
      {
        title: "Mechanical Shear Stress and Structural Fastener Design",
        text: "Engineers calculate the cross-sectional shear area of steel bolts and rivets in square millimeters to determine tensile and yield strength in megapascals ($1\\text{ MPa} = 1\\text{ N/mm}^2$)."
      },
      {
        title: "Biomedical Dermatology and Wound Healing Assessment",
        text: "Clinicians track skin lesion biopsy boundaries using planimetric centimeters, converting to square millimeters to report precise cellular proliferation and epithelialization rates."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 10 instead of 100: Forgetting that linear centimeters have 10 millimeters, but square centimeters have 10 × 10 = 100 square millimeters.",
      "Dividing by 100 instead of multiplying: Square millimeters are smaller units, so converting from cm² to mm² must always produce a 100-fold larger numerical value.",
      "Confusing cross-sectional area with diameter: For circular wires, the area is $\\pi r^2$, not diameter squared; measuring a 1 cm diameter gives $\\pi (0.5)^2 \\approx 0.785\\text{ cm}^2 = 78.54\\text{ mm}^2$, not 100 mm².",
      "Misreading engineering drawings: Confusing mm² cross-sections with linear gauge callouts."
    ]
  },
  faqs: [
    {
      question: "How do I convert square centimeters to square millimeters?",
      answer: "To convert square centimeters (cm²) to square millimeters (mm²), multiply the square centimeter value by 100 (or move the decimal point two places to the right). For example, 3.5 cm² × 100 = 350 mm²."
    },
    {
      question: "How many square millimeters are in 1 square centimeter?",
      answer: "There are exactly 100 square millimeters in 1 square centimeter (10 mm × 10 mm = 100 mm²)."
    },
    {
      question: "Why is 1 cm² equal to 100 mm² and not 10 mm²?",
      answer: "Area measures two dimensions: length and width. Because 1 centimeter equals 10 millimeters, a 1 cm by 1 cm square contains 10 mm × 10 mm = 100 square millimeters."
    },
    {
      question: "What is 0.5 cm² in mm²?",
      answer: "0.5 square centimeters equals exactly 50 square millimeters (0.5 × 100 = 50 mm²)."
    },
    {
      question: "What is 2.5 cm² in mm²?",
      answer: "2.5 square centimeters equals exactly 250 square millimeters (2.5 × 100 = 250 mm²)."
    },
    {
      question: "What is 10 cm² in mm²?",
      answer: "10 square centimeters equals exactly 1,000 square millimeters (10 × 100 = 1,000 mm²)."
    },
    {
      question: "How do I convert square millimeters back to square centimeters?",
      answer: "To convert square millimeters back to square centimeters, divide the square millimeter value by 100. For instance, 450 mm² ÷ 100 = 4.5 cm²."
    },
    {
      question: "What is 1 mm² in cm²?",
      answer: "1 square millimeter equals exactly 0.01 square centimeters (1/100 cm²)."
    },
    {
      question: "How many square millimeters are in a square meter?",
      answer: "One square meter contains exactly 1,000,000 square millimeters (1,000 mm × 1,000 mm)."
    }
  ],
  relatedList: [
    { label: "Square Millimeter to Square Centimeter", from: "square-millimeter", to: "square-centimeter" },
    { label: "Square Centimeter to Square Meter", from: "square-centimeter", to: "square-meter" },
    { label: "Square Millimeter to Square Meter", from: "square-millimeter", to: "square-meter" },
    { label: "Square Centimeter to Square Inch", from: "square-centimeter", to: "square-inch" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "International Electrotechnical Commission (IEC). <em>IEC 60228: Conductors of insulated cables</em>.",
    "ISO 80000-3:2019. <em>Quantities and units — Part 3: Space and time</em>."
  ]
};
