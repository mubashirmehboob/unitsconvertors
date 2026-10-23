import { CustomArticleData } from "./types";

export const squareMillimeterToSquareFoot: CustomArticleData = {
  fromUnitId: "square-millimeter",
  toUnitId: "square-foot",
  seoTitle: "Square Millimeter to Square Foot Converter - mm² to sq ft",
  metaDescription: "Convert square millimeters to square feet (mm² to sq ft) with exact mathematical formulas, architectural construction examples, worked calculations, and tables.",
  canonicalUrl: "https://unitsconvertors.com/square-millimeter-to-square-foot",
  h1: "Square Millimeter to Square Foot Converter",
  introduction: [
    "In architectural drafting, mechanical HVAC design, building envelope engineering, and structural fabrication, engineers frequently navigate between metric precision dimensions and imperial surface ratings. While fastener hole clearances, structural steel cross-sections, adhesive bonding tracks, and window glazing gaskets are dimensioned in square millimeters (mm²), building floor space, louver ventilation free areas, heat loss envelopes, and floor tile coverage across the United States and Canada are specified in square feet (sq ft or ft²).",
    "Because area scales quadratically relative to linear distance, converting square millimeters to square feet requires squaring the international definition of the foot. Under the 1959 International Yard and Pound Agreement, one international foot equals exactly 0.3048 meters, which is 304.8 millimeters. Squaring this distance reveals that $(304.8\\text{ mm})^2 = 92,903.04\\text{ mm}^2$ inside one square foot. Converting square millimeters to square feet requires dividing the measured area by 92,903.04."
  ],
  quickAnswer: {
    text: "To convert square millimeters to square feet, divide the square millimeter value by 92,903.04 (or multiply by approximately 1.07639 × 10⁻⁵). For example, 185,806.08 mm² equals exactly 2.0 square feet.",
    formulaDisplay: "Square Feet (sq ft) = Square Millimeters (mm²) ÷ 92,903.04",
    subtext: "1 square foot equals exactly 92,903.04 square millimeters (1 mm² ≈ 0.0000107639 sq ft)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Millimeter (mm²)",
    text: "The square millimeter (symbol: mm²) is an SI-derived metric unit of planar area equal to the space enclosed within a square with sides of one millimeter (0.001 m). Equal to 0.01 square centimeters or 10⁻⁶ square meters, it serves as the foundational unit for electrical wire gauges, micro-machining tolerances, structural bolt shear stress areas, and laser aperture optics."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Foot (sq ft / ft²)",
    text: "The square foot (symbol: sq ft or ft²) is an imperial and US customary unit of planar area equal to the space bounded by a square measuring one foot (12 inches or 0.3048 m) on each side. Equal to 144 square inches or 0.09290304 square meters, the square foot is the ubiquitous standard across North American residential real estate, commercial leasing, HVAC air velocity sizing (CFM per sq ft), and structural floor load ratings (psf)."
  },
  relationship: "The relationship between square millimeters and square feet is grounded in the international legal definition: 1 ft = 304.8 mm. Squaring both sides yields $(1\\text{ ft})^2 = (304.8\\text{ mm})^2 = 92,903.04\\text{ mm}^2$. Inverting this relationship shows that 1 square millimeter equals approximately $1.076391042 \\times 10^{-5}$ square feet.",
  relationshipTitle: "International Geometric Ratio: mm² to sq ft",
  relationshipItems: [
    { label: "1 Square Foot (sq ft)", value: "Exactly 92,903.04 mm²" },
    { label: "0.5 Square Foot (72 sq in)", value: "46,451.52 mm²" },
    { label: "0.25 Square Foot (36 sq in)", value: "23,225.76 mm²" },
    { label: "10,000 mm² (100 cm²)", value: "≈ 0.107639 Square Foot" },
    { label: "1 Square Millimeter (mm²)", value: "≈ 1.076391 × 10⁻⁵ Square Foot" }
  ],
  formula: {
    text: "To convert area from square millimeters to square feet, divide the square millimeter value by 92,903.04, or multiply by 1.076391042 × 10⁻⁵.",
    math: "\\text{Area (sq ft)} = \\frac{\\text{Area (mm}^2\\text{)}}{92,903.04} = \\text{Area (mm}^2\\text{)} \\times 1.076391042 \\times 10^{-5}",
    subtext: "To convert square feet back to square millimeters: Area (mm²) = Area (sq ft) × 92,903.04"
  },
  formulaTitle: "Square Millimeter to Square Foot Conversion Formula",
  practicalTip: {
    title: "Quick Estimating with the 93,000 Rule",
    text: "For rapid mental estimates on construction job sites, divide square millimeters by 93,000. For example, 465,000 mm² divided by 93,000 gives approximately 5.0 square feet (exact is 5.005 sq ft). For precise architectural fabrication, always retain the full 92,903.04 factor."
  },
  examples: {
    title: "Step-by-Step Architectural & Mechanical Calculation Examples",
    items: [
      {
        title: "Example 1: HVAC Ventilation Return Air Register",
        subtitle: "A mechanical building plan specifies a stamped aluminum return grille with an aggregate net free area (NFA) of 325,160.64 square millimeters. Express this opening area in square feet for CFM airflow capacity checks.",
        steps: [
          "State the measured free area: 325,160.64 mm².",
          "Apply the conversion formula: sq ft = mm² ÷ 92,903.04.",
          "Calculate: 325,160.64 ÷ 92,903.04 = 3.5 sq ft.",
          "Conclusion: The return air grille provides exactly 3.5 square feet of net free ventilation area."
        ]
      },
      {
        title: "Example 2: Structural Column Base Bearing Plate",
        subtitle: "A structural steel column bears on a heavy steel footing plate measuring 600 mm by 600 mm, covering 360,000 mm². Convert this contact surface to square feet to compute foundation soil bearing pressure.",
        steps: [
          "State value: 360,000 mm².",
          "Multiply by 1.076391 × 10⁻⁵: 360,000 × 1.076391 × 10⁻⁵ ≈ 3.875 sq ft.",
          "Conclusion: The column base plate contact area equals approximately 3.875 square feet."
        ]
      },
      {
        title: "Example 3: Solar Heat Collector Absorber Plate",
        subtitle: "A prototype solar water heater absorber plate has an active thermal surface of 1,858,060.8 square millimeters. Find its area in square feet.",
        steps: [
          "State value: 1,858,060.8 mm².",
          "Divide by 92,903.04: 1,858,060.8 ÷ 92,903.04 = 20.0 sq ft.",
          "Conclusion: The solar absorber plate area measures exactly 20.0 square feet."
        ]
      }
    ]
  },
  table: {
    title: "Square Millimeter to Square Foot Reference Table",
    headers: ["Square Millimeters (mm²)", "Square Feet (sq ft)", "Square Inches (in²)", "Square Meters (m²)"],
    rows: [
      { fromVal: "9,290 mm²", toVal: "0.100 sq ft", extra: "14.40 in²", extra2: "0.0093 m²" },
      { fromVal: "23,226 mm²", toVal: "0.250 sq ft", extra: "36.00 in²", extra2: "0.0232 m²" },
      { fromVal: "46,452 mm²", toVal: "0.500 sq ft", extra: "72.00 in²", extra2: "0.0465 m²" },
      { fromVal: "69,677 mm²", toVal: "0.750 sq ft", extra: "108.00 in²", extra2: "0.0697 m²" },
      { fromVal: "92,903 mm²", toVal: "1.000 sq ft", extra: "144.00 in²", extra2: "0.0929 m²" },
      { fromVal: "185,806 mm²", toVal: "2.000 sq ft", extra: "288.00 in²", extra2: "0.1858 m²" },
      { fromVal: "464,515 mm²", toVal: "5.000 sq ft", extra: "720.00 in²", extra2: "0.4645 m²" },
      { fromVal: "929,030 mm²", toVal: "10.000 sq ft", extra: "1,440.00 in²", extra2: "0.9290 m²" },
      { fromVal: "1,858,061 mm²", toVal: "20.000 sq ft", extra: "2,880.00 in²", extra2: "1.8581 m²" },
      { fromVal: "4,645,152 mm²", toVal: "50.000 sq ft", extra: "7,200.00 in²", extra2: "4.6452 m²" }
    ]
  },
  expertNote: {
    title: "HVAC & Envelope Standards: Avoiding Decimal Truncation in Airflow",
    text: "In building mechanical codes (such as ASHRAE 62.1 and the International Mechanical Code), airflow velocity through supply diffusers is calculated by dividing volumetric flow rate ($Q$ in CFM) by net free area ($A$ in sq ft). Grille manufacturers often provide open slot dimensions in millimeters or mm². Truncating 92,903.04 to 90,000 when converting mm² introduces a 3.2% error in calculated face velocity, potentially causing noise complaints or duct static pressure imbalance."
  },
  applications: {
    title: "Building Services, Structural Steel, and Glazing Applications",
    items: [
      {
        title: "HVAC Airflow Distribution & Grille Sizing",
        text: "Mechanical engineers convert ventilation perforation slot geometries from millimeter component drawings into square feet to ensure diffuser discharge velocities remain within acoustic NC criteria."
      },
      {
        title: "Structural Glazing & Wind Load Modeling",
        text: "Curtain wall engineers calculate structural silicone sealant joint bond contact areas in mm² before converting panel wind tributary loads into pounds per square foot (psf)."
      },
      {
        title: "Architectural Metal Ceiling & Cladding Panels",
        text: "Façade contractors convert CNC laser-cut architectural screen open areas in mm² to square feet to calculate building shading coefficients and daylighting factors."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 304.8 instead of 92,903.04: 304.8 is the linear millimeter count per foot. Planar area requires $(304.8)^2 = 92,903.04$. Dividing by 304.8 creates an answer over 300 times too large.",
      "Confusing square feet with square inches: 1 square foot contains 144 square inches. Dividing by 645.16 converts mm² to square inches, not square feet.",
      "Conflating square feet with square meters: 1 square meter contains approximately 10.7639 square feet. Using the 1,000,000 factor gives square meters, which must then be multiplied by 10.7639.",
      "Misplacing the decimal in small cross-sections: A fastener cross-section of 250 mm² equals 0.00269 sq ft. Careful attention to leading zeros is critical."
    ]
  },
  faqs: [
    {
      question: "How do I convert square millimeters to square feet?",
      answer: "To convert square millimeters (mm²) to square feet (sq ft), divide the square millimeter value by 92,903.04, or multiply by 1.07639 × 10⁻⁵. For example, 185,806.08 mm² divided by 92,903.04 equals exactly 2.0 square feet."
    },
    {
      question: "How many square millimeters are in one square foot?",
      answer: "There are exactly 92,903.04 square millimeters in one international square foot. This is calculated by squaring the linear millimeter length of one foot: (304.8 mm)² = 92,903.04 mm²."
    },
    {
      question: "What is 100,000 mm² in square feet?",
      answer: "100,000 square millimeters equals approximately 1.0764 square feet (or about 155 square inches)."
    },
    {
      question: "How many square inches make one square foot?",
      answer: "There are exactly 144 square inches in one square foot (12 inches × 12 inches = 144 in²)."
    },
    {
      question: "What is 1,000,000 mm² in square feet?",
      answer: "One million square millimeters (which equals exactly 1 square meter) equals approximately 10.7639 square feet."
    },
    {
      question: "How do I convert square feet back to square millimeters?",
      answer: "Multiply the square foot value by 92,903.04. For instance, 4.5 square feet multiplied by 92,903.04 equals 418,063.68 mm²."
    },
    {
      question: "Why is 1 sq ft equal to 92,903.04 mm²?",
      answer: "By international agreement, 1 foot equals exactly 12 inches, and 1 inch is exactly 25.4 millimeters. Therefore, 1 foot = 12 × 25.4 = 304.8 millimeters. Squaring 304.8 mm yields (304.8)² = 92,903.04 mm²."
    },
    {
      question: "What is 50,000 mm² in sq ft?",
      answer: "50,000 square millimeters equals approximately 0.5382 square feet (about 77.5 square inches)."
    },
    {
      question: "Can I convert mm² to sq ft using square meters?",
      answer: "Yes. First divide mm² by 1,000,000 to get square meters, then multiply by 10.76391 to obtain square feet."
    },
    {
      question: "Is square foot an official SI unit?",
      answer: "No, the square foot is an imperial and US customary unit. The coherent SI unit of area is the square meter (m²)."
    }
  ],
  relatedList: [
    { label: "Square Foot to Square Millimeter", from: "square-foot", to: "square-millimeter" },
    { label: "Square Millimeter to Square Inch", from: "square-millimeter", to: "square-inch" },
    { label: "Square Millimeter to Square Yard", from: "square-millimeter", to: "square-yard" },
    { label: "Square Millimeter to Square Meter", from: "square-millimeter", to: "square-meter" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Special Publication 811: Guide for the Use of the International System of Units (SI)</em>.",
    "ASHRAE. <em>Handbook of Fundamentals: Space Air Diffusion and Duct Design Standards</em>.",
    "International Organization for Standardization (ISO). <em>ISO 80000-3: Space and Time</em>."
  ]
};
