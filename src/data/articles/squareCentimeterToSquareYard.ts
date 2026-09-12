import { CustomArticleData } from "./types";

export const squareCentimeterToSquareYard: CustomArticleData = {
  fromUnitId: "square-centimeter",
  toUnitId: "square-yard",
  seoTitle: "Square Centimeter to Square Yard Converter - cm² to yd²",
  metaDescription: "Convert square centimeters to square yards (cm² to yd²). Learn the 8,361.27 conversion factor, textile fabric conversions, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/square-centimeter-to-square-yard",
  h1: "Square Centimeter to Square Yard Converter",
  introduction: [
    "In textile manufacturing, interior design, commercial flooring installation, and international fabric trade, surface measurements frequently transition between the metric square centimeter (cm²) and the imperial square yard (yd²). While laboratory fabric swatch samples, ceramic tile dimensions, and printed apparel pattern markers are measured in square centimeters, bulk carpet rolls, artificial turf, and upholstery fabrics in the United States and the United Kingdom are sold by the square yard.",
    "Because area scales with the square of linear length, calculating the relationship requires squaring the international yard definition. Under the 1959 international agreement, 1 yard equals exactly 0.9144 meters (91.44 centimeters). Squaring 91.44 yields exactly 8,361.2736 square centimeters per square yard. Therefore, one square centimeter equals approximately 0.0001196 square yards."
  ],
  quickAnswer: {
    text: "To convert square centimeters to square yards, divide the square centimeter value by 8,361.2736 (or multiply by approximately 0.0001196). For example, 50,000 cm² equals approximately 5.98 square yards.",
    formulaDisplay: "Square Yards (yd²) = Square Centimeters (cm²) ÷ 8,361.2736",
    subtext: "1 square yard is equal to exactly 8,361.2736 square centimeters (1 cm² ≈ 0.0001196 yd²)."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Centimeter (cm²)",
    text: "The square centimeter (symbol: cm²) is a metric unit of area representing the space enclosed by a square with sides of one centimeter ($10^{-2}\\text{ m}$). Equal to 0.0001 square meters ($10^{-4}\\text{ m}^2$) or 100 square millimeters, it is standard for apparel pattern pieces, laboratory textile swatches, tile sizes, and consumer goods packaging."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Yard (yd²)",
    text: "The square yard (symbol: yd² or sq yd) is an imperial and US customary unit of area representing the space enclosed by a square with sides of one yard (3 feet or 36 inches). Defined as exactly 0.83612736 square meters or 9 square feet, it is the standard retail and commercial measurement for residential carpeting, upholstery fabrics, landscaping turf, and asphalt paving."
  },
  relationship: "The relationship between square centimeters and square yards is established through the legal definition of the international yard: 1 yd = 36 inches = 36 × 2.54 cm = 91.44 cm. Squaring both sides produces $(1\\text{ yd})^2 = (91.44\\text{ cm})^2 = 8,361.2736\\text{ cm}^2$. Inverting this figure reveals that 1 square centimeter equals exactly $1 / 8,361.2736 \\approx 0.000119599$ square yards.",
  relationshipTitle: "Exact Mathematical Area Equivalence",
  relationshipItems: [
    { label: "1 Square Yard (yd²)", value: "Exactly 8,361.2736 Square Centimeters (cm²)" },
    { label: "1 Square Centimeter (cm²)", value: "≈ 0.000119599 Square Yards (yd²)" },
    { label: "10,000 Square Centimeters (cm²)", value: "≈ 1.19599 Square Yards (1 m²)" },
    { label: "1 Square Foot (ft²)", value: "929.0304 cm² (1/9 yd²)" }
  ],
  formula: {
    text: "To convert area from square centimeters to square yards, divide the square centimeter value by 8,361.2736 (or multiply by 0.000119599).",
    math: "\\text{Area (yd}^2\\text{)} = \\frac{\\text{Area (cm}^2\\text{)}}{8,361.2736} = \\text{Area (cm}^2\\text{)} \\times 0.000119599",
    subtext: "To convert square yards back to square centimeters: Area (cm²) = Area (yd²) × 8,361.2736"
  },
  formulaTitle: "Square Centimeter to Square Yard Conversion Formula",
  practicalTip: {
    title: "The Square Meter Bridge",
    text: "For fast mental estimates: first divide square centimeters by 10,000 to get square meters, then multiply the square meters by 1.2 (since 1 m² ≈ 1.196 yd²). For example, 40,000 cm² = 4 m²; 4 × 1.2 ≈ 4.8 square yards (exact: 4.784 yd²)."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Luxury Vinyl Tile Flooring Installation",
        subtitle: "An interior renovation specifies 250 vinyl planks. Each plank measures 20 cm by 120 cm, covering 2,400 cm². Determine the total flooring required in square yards.",
        steps: [
          "Calculate total cm²: 250 planks × 2,400 cm² = 600,000 cm².",
          "Apply conversion formula: yd² = cm² ÷ 8,361.2736.",
          "Calculate: 600,000 ÷ 8,361.2736 ≈ 71.7594.",
          "Conclusion: The 250 planks cover approximately 71.76 square yards of flooring."
        ]
      },
      {
        title: "Example 2: Upholstery Fabric Roll Yield",
        subtitle: "A furniture maker cuts several armchair cushions requiring a combined fabric area of 85,000 square centimeters. Express this area in square yards.",
        steps: [
          "State area: 85,000 cm².",
          "Multiply by 0.0001196: 85,000 × 0.000119599 ≈ 10.1659.",
          "Conclusion: The cushions require approximately 10.17 square yards of fabric."
        ]
      },
      {
        title: "Example 3: Ceramic Wall Mosaic Tile Order",
        subtitle: "A backsplash pattern covers 20,900 cm². How many square yards is this?",
        steps: [
          "Given: 20,900 cm².",
          "Calculate: 20,900 ÷ 8,361.2736 ≈ 2.4996.",
          "Conclusion: 20,900 cm² equals approximately 2.50 square yards."
        ]
      }
    ]
  },
  table: {
    title: "Square Centimeter to Square Yard Quick Reference Table",
    headers: ["Square Centimeters (cm²)", "Square Yards (yd²)", "Square Meters (m²)", "Square Feet (ft²)"],
    rows: [
      { fromVal: "1,000 cm²", toVal: "0.1196 yd²", extra: "0.1000 m²", extra2: "1.0764 ft²" },
      { fromVal: "2,500 cm²", toVal: "0.2990 yd²", extra: "0.2500 m²", extra2: "2.6910 ft²" },
      { fromVal: "5,000 cm²", toVal: "0.5980 yd²", extra: "0.5000 m²", extra2: "5.3820 ft²" },
      { fromVal: "8,361 cm²", toVal: "1.0000 yd²", extra: "0.8361 m²", extra2: "9.0000 ft²" },
      { fromVal: "10,000 cm²", toVal: "1.1960 yd²", extra: "1.0000 m²", extra2: "10.7639 ft²" },
      { fromVal: "25,000 cm²", toVal: "2.9900 yd²", extra: "2.5000 m²", extra2: "26.9098 ft²" },
      { fromVal: "50,000 cm²", toVal: "5.9799 yd²", extra: "5.0000 m²", extra2: "53.8196 ft²" },
      { fromVal: "83,613 cm²", toVal: "10.0000 yd²", extra: "8.3613 m²", extra2: "90.0000 ft²" },
      { fromVal: "100,000 cm²", toVal: "11.9599 yd²", extra: "10.0000 m²", extra2: "107.6391 ft²" },
      { fromVal: "250,000 cm²", toVal: "29.8997 yd²", extra: "25.0000 m²", extra2: "269.0978 ft²" }
    ]
  },
  expertNote: {
    title: "Textile Fabric Weight: Converting g/m² (GSM) to oz/yd²",
    text: "In global apparel manufacturing, fabric density is tested in laboratory swatches measured in grams per square meter (g/m² or GSM). Because 1 square meter contains 10,000 cm² and 1 square yard contains 8,361.27 cm² (meaning 1 yd² = 0.836127 m²), converting GSM to US ounces per square yard (oz/yd²) requires dividing GSM by 33.906. Understanding the 8,361.27 cm² area baseline is essential for ensuring fabric weight specifications match overseas procurement contracts."
  },
  applications: {
    title: "Practical Flooring, Textile & Landscaping Scenarios",
    items: [
      {
        title: "Commercial Carpeting and Rug Fabrication",
        text: "Flooring contractors take architectural floor dimension measurements recorded in centimeters (cm²), convert to square yards, and add standard 10% cutting waste allowances to order broadloom carpet rolls."
      },
      {
        title: "Textile Apparel and Upholstery Yardage",
        text: "Garment pattern designers sum pattern piece surface areas in square centimeters to determine linear fabric yardage needed from bolt rolls standardly dimensioned in yards."
      },
      {
        title: "Athletic Turf and Landscaping Sod Installation",
        text: "Landscape architects convert small metric garden bed sections (cm²) into square yards to order palletized turfgrass sod and mulch supplies priced per square yard."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 91.44 instead of 8,361.27: 91.44 is the linear number of centimeters in a yard. Dividing area by a linear factor results in massive errors.",
      "Confusing square yards with square feet: 1 square yard contains 9 square feet (8,361.27 cm² vs. 929.03 cm²).",
      "Dividing by 10,000 and forgetting the yard factor: 10,000 cm² equals 1 square meter, which is 1.196 square yards, not 1.0 square yard.",
      "Overlooking linear fabric bolt widths: When ordering fabric, total area in square yards must be matched against roll width (e.g., 54-inch or 60-inch rolls)."
    ]
  },
  faqs: [
    {
      question: "How do I convert square centimeters to square yards?",
      answer: "To convert square centimeters (cm²) to square yards (yd²), divide the square centimeter value by 8,361.2736 (or multiply by 0.0001196). For example, 25,000 cm² divided by 8,361.2736 equals approximately 2.99 square yards."
    },
    {
      question: "How many square centimeters are in 1 square yard?",
      answer: "There are exactly 8,361.2736 square centimeters in 1 square yard (91.44 cm × 91.44 cm)."
    },
    {
      question: "What is 10,000 cm² in square yards?",
      answer: "10,000 square centimeters (which equals 1 square meter) equals approximately 1.196 square yards."
    },
    {
      question: "What is 50,000 cm² in square yards?",
      answer: "50,000 square centimeters equals approximately 5.98 square yards (50,000 ÷ 8,361.2736 ≈ 5.9799 yd²)."
    },
    {
      question: "How many square feet are in 1 square yard?",
      answer: "There are exactly 9 square feet in 1 square yard (3 feet × 3 feet = 9 ft²)."
    },
    {
      question: "How do I convert square yards back to square centimeters?",
      answer: "To convert square yards back to square centimeters, multiply the square yard value by 8,361.2736. For example, 4 yd² × 8,361.2736 = 33,445.09 cm²."
    },
    {
      question: "Is a square meter bigger than a square yard?",
      answer: "Yes, 1 square meter (10,000 cm²) is approximately 19.6% larger than 1 square yard (8,361.27 cm²). Specifically, 1 m² = 1.19599 yd²."
    },
    {
      question: "What is 1 cm² in square yards?",
      answer: "1 square centimeter equals approximately 0.0001196 square yards (1.196 × 10⁻⁴ yd²)."
    },
    {
      question: "How many square centimeters are in 1 square foot?",
      answer: "There are exactly 929.0304 square centimeters in 1 square foot (30.48 cm × 30.48 cm)."
    }
  ],
  relatedList: [
    { label: "Square Yard to Square Centimeter", from: "square-yard", to: "square-centimeter" },
    { label: "Square Centimeter to Square Foot", from: "square-centimeter", to: "square-foot" },
    { label: "Square Centimeter to Square Meter", from: "square-centimeter", to: "square-meter" },
    { label: "Square Yard to Square Meter", from: "square-yard", to: "square-meter" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST). <em>Units of Area and General Tables of Weights and Measures</em>.",
    "ASTM D3776 / D3776M-20. <em>Standard Test Methods for Mass Per Unit Area (Weight) of Fabric</em>.",
    "ISO 80000-3:2019. <em>Quantities and units — Part 3: Space and time</em>."
  ]
};
