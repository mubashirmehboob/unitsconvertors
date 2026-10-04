import { CustomArticleData } from "./types";

export const squareInchToSquareFoot: CustomArticleData = {
  fromUnitId: "square-inch",
  toUnitId: "square-foot",
  seoTitle: "Square Inch to Square Foot Converter (in² to ft²) | UnitsConvertors.com",
  metaDescription: "Convert square inches to square feet (in² to ft²) instantly. Learn the in² / 144 formula, explore HVAC ventilation and tiling examples, and check the reference table.",
  canonicalUrl: "https://unitsconvertors.com/converters/area/square-inch-to-square-foot",
  h1: "Square Inch to Square Foot Converter",
  introduction: [
    "Converting square inches (in²) to square feet (ft²) is an essential everyday calculation in HVAC mechanical engineering, architectural code compliance, tile setting, carpentry, and metal fabrication. While components such as ventilation grilles, floor tiles, lumber cross-sections, and window panes are dimensioned in inches, overall room floor plans, roof decks, and building permits are evaluated in square feet.",
    "Because both units belong to the US customary and British imperial systems, their mathematical relationship is exact: exactly 144 square inches compose a single square foot. Understanding this conversion ensures you meet building code ventilation requirements, order correct tile quantities, and accurately compute structural load distributions."
  ],
  quickAnswer: {
    text: "To convert square inches to square feet, divide the square inch value by 144 (or multiply by 0.00694444). For example, 720 square inches equals exactly 5 square feet.",
    formulaDisplay: "Area (ft²) = Area (in²) / 144",
    subtext: "1 square foot contains exactly 144 square inches. 1 square inch equals 1/144 (approximately 0.006944) square feet."
  },
  aboutSourceUnit: {
    title: "About the Square Inch (in²)",
    text: "The square inch (symbol: in² or sq in) is an imperial and US customary unit of area defined as a square measuring one linear inch (2.54 centimeters) on each side. It is the standard unit for expressing mechanical component cross-sections, ventilation register openings, pressure ratings (psi), and small architectural finishes."
  },
  aboutTargetUnit: {
    title: "About the Square Foot (ft²)",
    text: "The square foot (symbol: ft² or sq ft) is a US customary and imperial unit of area defined as a square measuring one linear foot (12 inches or 0.3048 meters) on each side. Exactly 144 square inches make up one square foot. It is the universal standard for architectural blueprints, residential floor plans, commercial property leases, and construction specifications across North America."
  },
  relationship: "Because one linear foot equals exactly 12 linear inches, an area of one square foot forms a grid of 12 inches by 12 inches. Multiplying 12 in by 12 in yields exactly 144 square inches. Each square inch represents exactly one 144th (1/144) of a square foot.",
  relationshipTitle: "Exact Geometric Relationship: 144 in² = 1 ft²",
  relationshipItems: [
    { label: "Exact Area Ratio", value: "1 ft² = 144 in² (exact)" },
    { label: "Inverse Relationship", value: "1 in² = 1/144 ft² ≈ 0.006944 ft²" },
    { label: "Linear Basis", value: "1 ft = 12 in (exact)" },
    { label: "Area Formula", value: "(12 in)² = 144 in²" }
  ],
  formula: {
    text: "To convert square inches into square feet, divide the total number of square inches by 144, or multiply by 0.00694444.",
    math: "Area (ft²) = Area (in²) / 144",
    subtext: "Alternatively: Area (ft²) = Area (in²) × 0.006944444"
  },
  formulaTitle: "Square Inch to Square Foot Conversion Formula",
  practicalTip: {
    title: "The Double Division Shortcut",
    text: "When using a basic calculator, dividing by 144 in a single step can be mentally cumbersome. Because $144 = 12 \\times 12$, you can simply divide by 12 twice: $\\text{in}^2 \\div 12 \\div 12 = \\text{ft}^2$. For example, $2,880 \\div 12 = 240$; $240 \\div 12 = 20\\text{ ft}^2$."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Attic Ventilation Net Free Area",
        subtitle: "Building code requires a roof vent opening. An architect measures five soffit vents totaling 1,152 square inches.",
        steps: [
          "State the measured vent opening: 1,152 in².",
          "Identify the conversion formula: ft² = in² / 144.",
          "Divide 1,152 by 144: 1,152 / 144.",
          "Perform calculation: exactly 8 ft².",
          "Conclude: The vents provide exactly 8 square feet of net free ventilation area."
        ]
      },
      {
        title: "Example 2: Ceramic Backsplash Tile Sizing",
        subtitle: "A homeowner purchases 120 decorative tiles, each measuring 6 inches by 6 inches. Find the total square footage.",
        steps: [
          "Calculate area of one tile: 6 in × 6 in = 36 in².",
          "Multiply by quantity of tiles: 36 × 120 = 4,320 in².",
          "Divide by 144 to obtain square feet: 4,320 / 144 = 30 ft².",
          "Final Result: The tiles cover exactly 30 square feet of wall area."
        ]
      },
      {
        title: "Example 3: HVAC Return Air Grille Sizing",
        subtitle: "An air return grille measures 20 inches by 30 inches. Determine its face area in square feet.",
        steps: [
          "Compute area in square inches: 20 in × 30 in = 600 in².",
          "Apply conversion: 600 / 144 = 4.1667 ft².",
          "Result: The grille opening measures approximately 4.17 square feet."
        ]
      }
    ]
  },
  table: {
    title: "Square Inches to Square Feet Conversion Reference Table",
    headers: ["Square Inches (in²)", "Square Feet (ft²)", "Square Yards (yd²)", "Square Meters (m²)"],
    rows: [
      { fromVal: "36 in²", toVal: "0.2500 ft²", extra: "0.0278 yd²", extra2: "0.0232 m²" },
      { fromVal: "72 in²", toVal: "0.5000 ft²", extra: "0.0556 yd²", extra2: "0.0465 m²" },
      { fromVal: "144 in²", toVal: "1.0000 ft²", extra: "0.1111 yd²", extra2: "0.0929 m²" },
      { fromVal: "288 in²", toVal: "2.0000 ft²", extra: "0.2222 yd²", extra2: "0.1858 m²" },
      { fromVal: "432 in²", toVal: "3.0000 ft²", extra: "0.3333 yd²", extra2: "0.2787 m²" },
      { fromVal: "576 in²", toVal: "4.0000 ft²", extra: "0.4444 yd²", extra2: "0.3716 m²" },
      { fromVal: "720 in²", toVal: "5.0000 ft²", extra: "0.5556 yd²", extra2: "0.4645 m²" },
      { fromVal: "1,000 in²", toVal: "6.9444 ft²", extra: "0.7716 yd²", extra2: "0.6452 m²" },
      { fromVal: "1,440 in²", toVal: "10.000 ft²", extra: "1.1111 yd²", extra2: "0.9290 m²" },
      { fromVal: "2,160 in²", toVal: "15.000 ft²", extra: "1.6667 yd²", extra2: "1.3935 m²" },
      { fromVal: "2,880 in²", toVal: "20.000 ft²", extra: "2.2222 yd²", extra2: "1.8581 m²" },
      { fromVal: "7,200 in²", toVal: "50.000 ft²", extra: "5.5556 yd²", extra2: "4.6452 m²" },
      { fromVal: "14,400 in²", toVal: "100.00 ft²", extra: "11.111 yd²", extra2: "9.2903 m²" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "HVAC Return & Supply Duct Engineering",
        text: "Converting air register face dimensions measured in square inches into net free area in square feet to ensure proper system airflow velocity."
      },
      {
        title: "Building Code Attic & Crawlspace Ventilation",
        text: "Summing individual soffit, ridge, and gable vent openings in square inches to confirm total attic ventilation meets 1:150 or 1:300 square foot code ratios."
      },
      {
        title: "Ceramic & Stone Tile Installation",
        text: "Calculating the total square footage covered by decorative tiles, border strips, and mosaic sheets dimensioned in inches."
      },
      {
        title: "Structural Bearing & Foundation Pressure",
        text: "Converting concentrated foundation loads and post footings into square feet to match geotechnical soil bearing capacities (psf)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting in² to ft²",
    items: [
      "Dividing by 12 instead of 144: A linear foot has 12 inches, but a square foot has 12 × 12 = 144 square inches. Dividing by 12 overstates area by twelve times.",
      "Multiplying instead of dividing: Because a square foot is larger than a square inch, the numerical value must decrease. Multiplying by 144 produces a massively inflated, incorrect figure.",
      "Confusing square inches with cubic inches: A square inch measures flat surface area (in²), while a cubic inch measures three-dimensional displacement (in³).",
      "Forgetting grout joints in tile layouts: Summing tile surface areas in square inches without adding grout width margins will lead to material over-ordering."
    ]
  },
  faqs: [
    {
      question: "How many square feet are in 1 square inch?",
      answer: "There are approximately 0.00694444 square feet in 1 square inch ($1/144\\text{ ft}^2$). To convert square inches to square feet, divide by 144."
    },
    {
      question: "What is the formula to convert square inches to square feet?",
      answer: "The formula is: Area in ft² = Area in in² / 144. Alternatively, multiply the square inch value by 0.00694444."
    },
    {
      question: "Why do you divide by 144 instead of 12 to convert square inches to square feet?",
      answer: "A linear foot contains 12 inches. Because area represents two dimensions ($L \\times W$), a square foot contains $12\\text{ in} \\times 12\\text{ in} = 144\\text{ square inches}$."
    },
    {
      question: "How many square feet is 144 square inches?",
      answer: "144 square inches equals exactly 1 square foot."
    },
    {
      question: "How many square feet is 500 square inches?",
      answer: "500 square inches divided by 144 equals 3.4722 square feet (approximately 3.47 sq ft)."
    },
    {
      question: "How many square feet is 1,000 square inches?",
      answer: "1,000 square inches divided by 144 equals approximately 6.9444 square feet."
    },
    {
      question: "Is the 144 conversion factor exact?",
      answer: "Yes, it is mathematically exact. By international agreement, 1 foot contains exactly 12 inches, making $(12)^2 = 144$ an absolute constant."
    },
    {
      question: "How do I convert square feet back to square inches?",
      answer: "Multiply the number of square feet by 144. For example, 10 square feet multiplied by 144 equals 1,440 square inches."
    },
    {
      question: "What is a 20x30 inch area in square feet?",
      answer: "Multiply 20 by 30 to get 600 square inches. Then divide 600 by 144 to get approximately 4.167 square feet."
    },
    {
      question: "How does this relate to pressure conversion from psi to psf?",
      answer: "Because $1\\text{ ft}^2 = 144\\text{ in}^2$, one pound per square inch (psi) exerts a force of 144 pounds per square foot (psf)."
    }
  ],
  relatedList: [
    { label: "Square Foot to Square Inch", from: "square-foot", to: "square-inch" },
    { label: "Square Inch to Square Centimeter", from: "square-inch", to: "square-centimeter" },
    { label: "Square Foot to Square Meter", from: "square-foot", to: "square-meter" },
    { label: "Square Yard to Square Inch", from: "square-yard", to: "square-inch" },
    { label: "Square Foot to Square Yard", from: "square-foot", to: "square-yard" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "International Code Council (ICC): International Residential Code (IRC) Section R806 Roof Ventilation.",
    "ASHRAE Handbook - Fundamentals: Space Air Diffusion and Grille Sizing."
  ]
};
