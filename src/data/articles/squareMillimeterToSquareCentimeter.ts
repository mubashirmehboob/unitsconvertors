import { CustomArticleData } from "./types";

export const squareMillimeterToSquareCentimeter: CustomArticleData = {
  fromUnitId: "square-millimeter",
  toUnitId: "square-centimeter",
  seoTitle: "Square Millimeter to Square Centimeter Converter - mm² to cm²",
  metaDescription: "Convert square millimeters to square centimeters (mm² to cm²) instantly with exact quadratic scaling rules, electronics PCB calculations, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/square-millimeter-to-square-centimeter",
  h1: "Square Millimeter to Square Centimeter Converter",
  introduction: [
    "In precision electronics design, micro-mechanical engineering, additive manufacturing, and laboratory histology, technicians routinely convert between millimeter and centimeter planar dimensions. While surface-mount technology (SMT) component footprints, microfluidic channel gates, wire conductor cross-sections, and laser weld spots are measured in square millimeters (mm²), printed circuit board (PCB) overall board areas, thermal heatsink bases, display glass screens, and biological tissue slides are specified in square centimeters (cm²).",
    "Because area is a two-dimensional geometric quantity, conversion factors follow the square of their linear metric prefix relationship. One linear centimeter contains exactly 10 millimeters. Squaring this relationship demonstrates that $(10\\text{ mm})^2 = 100\\text{ mm}^2$ inside one square centimeter. Therefore, one square millimeter equals exactly 0.01 square centimeters ($10^{-2}\\text{ cm}^2$). Converting from square millimeters to square centimeters is as simple as dividing by 100 or shifting the decimal point two places to the left."
  ],
  quickAnswer: {
    text: "To convert square millimeters to square centimeters, divide the square millimeter value by 100 (or multiply by 0.01). For example, 1,250 mm² equals exactly 12.5 cm².",
    formulaDisplay: "Square Centimeters (cm²) = Square Millimeters (mm²) ÷ 100",
    subtext: "1 square centimeter equals exactly 100 square millimeters (1 mm² = 0.01 cm²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Millimeter (mm²)",
    text: "The square millimeter (symbol: mm²) is an SI-derived metric unit of planar area equal to the space bounded by a square measuring one millimeter (0.001 m) on each side. Equal to 0.01 square centimeters or 10⁻⁶ square meters, it is the worldwide standard for specifying electrical conductor gauges, semiconductor microchip surface dies, mechanical fastener shear stresses, and high-precision laser optics beam profiles."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Centimeter (cm²)",
    text: "The square centimeter (symbol: cm²) is a metric unit of area representing the space inside a square measuring one centimeter (0.01 m) on each side. Equal to 100 square millimeters or 0.0001 square meters (10⁻⁴ m²), it is standard across electronics packaging, diagnostic radiography, cosmetic surface areas, and consumer product label dimensions."
  },
  relationship: "The relationship between square millimeters and square centimeters follows directly from metric prefix scaling: 1 cm = 10 mm. Squaring both sides yields $(1\\text{ cm})^2 = (10\\text{ mm})^2 = 100\\text{ mm}^2$. Inverting this relationship proves that 1 square millimeter equals exactly 1/100 or 0.01 square centimeters ($10^{-2}\\text{ cm}^2$).",
  relationshipTitle: "Quadratic Prefix Metric Scaling: mm² to cm²",
  relationshipItems: [
    { label: "100 Square Millimeters (mm²)", value: "1.00 Square Centimeter (cm²)" },
    { label: "50 Square Millimeters (mm²)", value: "0.50 Square Centimeter (cm²)" },
    { label: "25 Square Millimeters (mm²)", value: "0.25 Square Centimeter (cm²)" },
    { label: "10 Square Millimeters (mm²)", value: "0.10 Square Centimeter (cm²)" },
    { label: "1 Square Millimeter (mm²)", value: "0.01 Square Centimeter (10⁻² cm²)" }
  ],
  formula: {
    text: "To convert area from square millimeters to square centimeters, divide the square millimeter value by 100, or multiply by 0.01.",
    math: "\\text{Area (cm}^2\\text{)} = \\frac{\\text{Area (mm}^2\\text{)}}{100} = \\text{Area (mm}^2\\text{)} \\times 0.01",
    subtext: "To reverse the conversion: Area (mm²) = Area (cm²) × 100"
  },
  formulaTitle: "Square Millimeter to Square Centimeter Conversion Formula",
  practicalTip: {
    title: "The Two-Place Decimal Shift",
    text: "Because 100 has two zeros, mental conversion requires shifting the decimal point two positions to the left: 450 mm² becomes 4.5 cm²; 1,800 mm² becomes 18 cm²; and 25 mm² becomes 0.25 cm²."
  },
  examples: {
    title: "Step-by-Step Electronics & Fabrication Calculation Examples",
    items: [
      {
        title: "Example 1: Printed Circuit Board (PCB) IC Package",
        subtitle: "A micro-controller surface mount integrated circuit (QFP-64) measures 14 mm by 14 mm, covering an area of 196 mm². Convert this chip footprint into square centimeters for PCB layout heat-sink sizing.",
        steps: [
          "Identify the surface area: 196 mm².",
          "Apply the conversion formula: cm² = mm² ÷ 100.",
          "Calculate: 196 ÷ 100 = 1.96 cm².",
          "Conclusion: The IC package footprint covers exactly 1.96 square centimeters."
        ]
      },
      {
        title: "Example 2: Laser Cutting Machine Nozzle Slit",
        subtitle: "An industrial fiber laser cutting head features an exhaust suction slit measuring 3,500 square millimeters. Determine the opening area in square centimeters.",
        steps: [
          "State value: 3,500 mm².",
          "Shift the decimal point two places left: 3,500 × 0.01 = 35 cm².",
          "Conclusion: The suction slit area equals exactly 35 square centimeters."
        ]
      },
      {
        title: "Example 3: Medical Biopsy Specimen Section",
        subtitle: "A pathology laboratory cuts a dermatological punch biopsy tissue slice measuring 48 square millimeters. Express this specimen area in square centimeters.",
        steps: [
          "State value: 48 mm².",
          "Divide by 100: 48 ÷ 100 = 0.48 cm².",
          "Conclusion: The biopsy section area equals exactly 0.48 square centimeters."
        ]
      }
    ]
  },
  table: {
    title: "Square Millimeter to Square Centimeter Reference Table",
    headers: ["Square Millimeters (mm²)", "Square Centimeters (cm²)", "Square Inches (in²)", "Square Meters (m²)"],
    rows: [
      { fromVal: "10 mm²", toVal: "0.10 cm²", extra: "0.0155 in²", extra2: "0.000010 m²" },
      { fromVal: "25 mm²", toVal: "0.25 cm²", extra: "0.0388 in²", extra2: "0.000025 m²" },
      { fromVal: "50 mm²", toVal: "0.50 cm²", extra: "0.0775 in²", extra2: "0.000050 m²" },
      { fromVal: "100 mm²", toVal: "1.00 cm²", extra: "0.1550 in²", extra2: "0.000100 m²" },
      { fromVal: "250 mm²", toVal: "2.50 cm²", extra: "0.3875 in²", extra2: "0.000250 m²" },
      { fromVal: "500 mm²", toVal: "5.00 cm²", extra: "0.7750 in²", extra2: "0.000500 m²" },
      { fromVal: "1,000 mm²", toVal: "10.00 cm²", extra: "1.5500 in²", extra2: "0.001000 m²" },
      { fromVal: "2,500 mm²", toVal: "25.00 cm²", extra: "3.8750 in²", extra2: "0.002500 m²" },
      { fromVal: "5,000 mm²", toVal: "50.00 cm²", extra: "7.7500 in²", extra2: "0.005000 m²" },
      { fromVal: "10,000 mm²", toVal: "100.00 cm²", extra: "15.5000 in²", extra2: "0.010000 m²" }
    ]
  },
  expertNote: {
    title: "Linear vs. Planar Confusion: Why 10 Becomes 100",
    text: "Because 1 centimeter equals 10 millimeters in 1D length, novice students and technicians often mistakenly divide area measurements by 10. In two dimensions, length and width are both scaled: 10 mm × 10 mm = 100 mm². Dividing by 10 instead of 100 produces an answer that is ten times larger than reality, leading to thermal calculations that underestimate heatsink requirements by 90%."
  },
  applications: {
    title: "Electronics, Manufacturing, and Materials Applications",
    items: [
      {
        title: "Thermal Management & Heatsink Sizing",
        text: "Thermal engineers sum microscopic CPU die hotspots and thermal interface material (TIM) contact surfaces in mm² before sizing aluminum heatsink baseplates in square centimeters."
      },
      {
        title: "Additive Manufacturing & 3D Printing Cross-Sections",
        text: "Stereolithography (SLA) resin printers calculate layer slice cross-sectional areas in mm² before computing total curing vat exposure surfaces in square centimeters."
      },
      {
        title: "Medical Imaging & Histopathology Analysis",
        text: "Clinical laboratory microscopes measure cellular tissue margins in mm² before summarizing pathological excised lesion boundaries in cm² for surgical pathology reports."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 10 instead of 100: Linear conversions use 10, but planar area requires $10^2 = 100$. A component of 500 mm² is 5 cm², not 50 cm².",
      "Multiplying instead of dividing: Converting from a smaller unit (mm²) to a larger unit (cm²) requires division. Multiplying 200 mm² by 100 produces 20,000, which is incorrect.",
      "Misidentifying cubic millimeter units: Converting volume (mm³) to cm³ requires dividing by 1,000 ($10^3$), not 100 ($10^2$). Keep volume and area formulas distinct.",
      "Confusing square millimeters with circular mils: Circular mils are an imperial wire measurement. 1 mm² equals approximately 1,973.5 circular mils, which requires an entirely different formula."
    ]
  },
  faqs: [
    {
      question: "How do I convert square millimeters to square centimeters?",
      answer: "To convert square millimeters (mm²) to square centimeters (cm²), divide the square millimeter value by 100, or multiply by 0.01. For example, 350 mm² divided by 100 equals exactly 3.5 cm²."
    },
    {
      question: "How many square millimeters are in one square centimeter?",
      answer: "There are exactly 100 square millimeters in one square centimeter. This is because 1 centimeter equals 10 millimeters, and 10 mm × 10 mm = 100 mm²."
    },
    {
      question: "What is 500 square millimeters in square centimeters?",
      answer: "500 square millimeters equals exactly 5 square centimeters (5 cm²)."
    },
    {
      question: "What is 50 mm² in cm²?",
      answer: "50 square millimeters equals exactly 0.5 square centimeters (half a square centimeter)."
    },
    {
      question: "Why do we divide by 100 instead of 10?",
      answer: "Because area is measured in two dimensions (length × width). While 1 cm has 10 mm, a square centimeter measures 10 mm long by 10 mm wide, which equals 100 mm²."
    },
    {
      question: "How do I convert square centimeters back to square millimeters?",
      answer: "To convert square centimeters to square millimeters, multiply the square centimeter value by 100. For instance, 12.8 cm² multiplied by 100 equals 1,280 mm²."
    },
    {
      question: "Can I convert mm² to cm² by shifting the decimal point?",
      answer: "Yes, simply move the decimal point two places to the left. For example, 825.0 mm² shifted two places left becomes 8.25 cm²."
    },
    {
      question: "What is 1,000 mm² in cm²?",
      answer: "1,000 square millimeters equals exactly 10 square centimeters."
    },
    {
      question: "What is 1 mm² in cm²?",
      answer: "One square millimeter equals exactly 0.01 square centimeters ($10^{-2}\\text{ cm}^2$)."
    },
    {
      question: "Are square millimeters and square centimeters SI units?",
      answer: "Yes, both are metric units derived from the SI base unit of length (the meter), utilizing the standard SI prefixes 'milli' (10⁻³) and 'centi' (10⁻²)."
    }
  ],
  relatedList: [
    { label: "Square Centimeter to Square Millimeter", from: "square-centimeter", to: "square-millimeter" },
    { label: "Square Millimeter to Square Meter", from: "square-millimeter", to: "square-meter" },
    { label: "Square Centimeter to Square Meter", from: "square-centimeter", to: "square-meter" },
    { label: "Square Millimeter to Square Inch", from: "square-millimeter", to: "square-inch" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "International Organization for Standardization (ISO). <em>ISO 80000-3: Space and Time</em>.",
    "IPC — Association Connecting Electronics Industries. <em>IPC-7351 Generic Requirements for Surface Mount Design and Land Pattern Standard</em>."
  ]
};
