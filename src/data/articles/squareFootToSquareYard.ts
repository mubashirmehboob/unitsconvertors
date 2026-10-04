import { CustomArticleData } from "./types";

export const squareFootToSquareYard: CustomArticleData = {
  fromUnitId: "square-foot",
  toUnitId: "square-yard",
  seoTitle: "Square Foot to Square Yard Converter (ft² to yd²) | UnitsConvertors.com",
  metaDescription: "Convert square feet to square yards (ft² to yd²) instantly. Calculate carpet orders, artificial turf installations, and landscaping materials using 1 yd² = 9 ft².",
  canonicalUrl: "https://unitsconvertors.com/converters/area/square-foot-to-square-yard",
  h1: "Square Foot to Square Yard Converter",
  introduction: [
    "Converting square feet (ft²) to square yards (yd²) is an essential calculation in interior renovation, flooring procurement, landscaping, and civil construction. While residential rooms and building blueprints are measured and recorded in square feet, materials such as broadloom carpeting, synthetic turf, sod, and paving geotextiles are customarily priced and sold by the square yard across the United States and the United Kingdom.",
    "Because both units belong to the imperial and US customary systems of measurement, their relationship is governed by an exact integer ratio: exactly nine square feet make up one square yard. Mastering this conversion prevents overpaying for excess carpet rolls or ordering inadequate turf coverage."
  ],
  quickAnswer: {
    text: "To convert square feet to square yards, divide the square footage by 9 (or multiply by 0.111111). For example, a 450 square foot living room equals exactly 50 square yards of carpeting.",
    formulaDisplay: "Area (yd²) = Area (ft²) / 9",
    subtext: "1 square yard equals exactly 9 square feet. 1 square foot equals 1/9 (approximately 0.1111) square yards."
  },
  aboutSourceUnit: {
    title: "About the Square Foot (ft²)",
    text: "The square foot (symbol: ft² or sq ft) is a customary and imperial unit of area defined as a square measuring one linear foot (12 inches or 0.3048 meters) on each side. A single square foot contains exactly 144 square inches. In North America and the UK, residential architecture, rental leases, and room floor areas are universally quantified in square feet."
  },
  aboutTargetUnit: {
    title: "About the Square Yard (yd²)",
    text: "The square yard (symbol: yd² or sq yd) is a customary and imperial unit of area defined as a square measuring one yard (3 linear feet or 36 inches) on each side. One square yard equals exactly 9 square feet or 1,296 square inches. It remains the commercial benchmark unit for selling wall-to-wall carpet, synthetic sports turf, landscaping fabric, and bulk gravel ground cover."
  },
  relationship: "Because one linear yard equals exactly three linear feet, an area of one square yard forms a 3-foot by 3-foot grid. Multiplying 3 ft by 3 ft yields exactly 9 square feet. Therefore, each square foot represents exactly one-ninth (1/9) of a square yard.",
  relationshipTitle: "Exact Geometric Relationship: 9 ft² = 1 yd²",
  relationshipItems: [
    { label: "Exact Area Ratio", value: "1 yd² = 9 ft² (exact)" },
    { label: "Inverse Relationship", value: "1 ft² = 1/9 yd² ≈ 0.111111 yd²" },
    { label: "Linear Basis", value: "1 yd = 3 ft (exact)" },
    { label: "Square Derivation", value: "(3 ft)² = 9 ft²" }
  ],
  formula: {
    text: "To convert square feet into square yards, divide the total square footage by 9, or multiply by 0.11111111.",
    math: "Area (yd²) = Area (ft²) / 9",
    subtext: "Alternatively: Area (yd²) = Area (ft²) × 0.111111111"
  },
  formulaTitle: "Square Foot to Square Yard Conversion Formula",
  practicalTip: {
    title: "The Carpet Roll Cutting Allowance",
    text: "When converting room square footage to square yards for ordering broadloom carpet, dividing by 9 gives the theoretical net area. However, standard broadloom rolls come in fixed 12-foot or 15-foot widths. Always add a 10% to 15% cutting allowance to account for roll seams, pattern matching, and room alcoves."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Sizing Living Room Carpet",
        subtitle: "A homeowner measures their living room at 270 square feet. Determine the carpet required in square yards.",
        steps: [
          "State the measured room area: 270 ft².",
          "Identify the formula: Area (yd²) = Area (ft²) / 9.",
          "Divide by 9: 270 / 9.",
          "Calculate the result: exactly 30 yd².",
          "Conclude: The room requires 30 square yards of carpeting (before cutting waste)."
        ]
      },
      {
        title: "Example 2: Residential Backyard Sod Installation",
        subtitle: "A landscaper needs to turf a backyard measuring 1,800 square feet. Sizing pallet orders sold in square yards.",
        steps: [
          "State the turf area: 1,800 ft².",
          "Apply the conversion factor: 1,800 / 9.",
          "Perform calculation: 200 yd².",
          "Final Result: The landscaper requires 200 square yards of sod."
        ]
      },
      {
        title: "Example 3: Finished Basement Floor Plan",
        subtitle: "A basement recreation room has dimensions of 24 feet by 15 feet. Calculate square yardage.",
        steps: [
          "Calculate square footage: 24 ft × 15 ft = 360 ft².",
          "Divide by 9 to obtain square yards: 360 / 9 = 40 yd².",
          "Add 10% waste factor for irregular corners: 40 × 1.10 = 44 yd².",
          "Final Order: Purchase 44 square yards of flooring material."
        ]
      }
    ]
  },
  table: {
    title: "Square Feet to Square Yards Conversion Reference Table",
    headers: ["Square Feet (ft²)", "Square Yards (yd²)", "Square Inches (in²)", "Square Meters (m²)"],
    rows: [
      { fromVal: "9 ft²", toVal: "1.0000 yd²", extra: "1,296 in²", extra2: "0.8361 m²" },
      { fromVal: "18 ft²", toVal: "2.0000 yd²", extra: "2,592 in²", extra2: "1.6723 m²" },
      { fromVal: "45 ft²", toVal: "5.0000 yd²", extra: "6,480 in²", extra2: "4.1806 m²" },
      { fromVal: "90 ft²", toVal: "10.000 yd²", extra: "12,960 in²", extra2: "8.3613 m²" },
      { fromVal: "150 ft²", toVal: "16.667 yd²", extra: "21,600 in²", extra2: "13.935 m²" },
      { fromVal: "250 ft²", toVal: "27.778 yd²", extra: "36,000 in²", extra2: "23.226 m²" },
      { fromVal: "450 ft²", toVal: "50.000 yd²", extra: "64,800 in²", extra2: "41.806 m²" },
      { fromVal: "720 ft²", toVal: "80.000 yd²", extra: "103,680 in²", extra2: "66.890 m²" },
      { fromVal: "900 ft²", toVal: "100.00 yd²", extra: "129,600 in²", extra2: "83.613 m²" },
      { fromVal: "1,350 ft²", toVal: "150.00 yd²", extra: "194,400 in²", extra2: "125.42 m²" },
      { fromVal: "1,800 ft²", toVal: "200.00 yd²", extra: "259,200 in²", extra2: "167.23 m²" },
      { fromVal: "2,700 ft²", toVal: "300.00 yd²", extra: "388,800 in²", extra2: "250.84 m²" },
      { fromVal: "4,500 ft²", toVal: "500.00 yd²", extra: "648,000 in²", extra2: "418.06 m²" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Carpet & Padding Orders",
        text: "Converting room floor measurements taken in square feet into commercial broadloom roll orders priced per square yard."
      },
      {
        title: "Turf & Sod Landscaping",
        text: "Estimating lawn renovation requirements where yard turf or rolls of grass sod are invoiced per square yard."
      },
      {
        title: "Geotextile & Construction Fabrics",
        text: "Sizing erosion control fabrics, asphalt overlays, and gravel stabilization mats specified in square yards on civil plans."
      },
      {
        title: "Paving & Concrete Surface Finishing",
        text: "Calculating sealant, concrete resurfacing coats, and asphalt paving contracts quantified in square yards."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting ft² to yd²",
    items: [
      "Dividing by 3 instead of 9: A linear yard has 3 feet, but a square yard has 3 × 3 = 9 square feet. Dividing by 3 overstates your square yardage by 300%.",
      "Confusing square yards with cubic yards: A square yard measures two-dimensional surface area (yd²), while a cubic yard measures three-dimensional volume (yd³ = 27 ft³).",
      "Forgetting to order for cutting waste: When ordering carpeting or rolled goods, ordering exact net square yardage leaves zero allowance for roll alignment or trimming seams.",
      "Inverting the formula: Multiplying by 9 instead of dividing by 9 turns a 200 sq ft room into an erroneous 1,800 square yards."
    ]
  },
  faqs: [
    {
      question: "How many square feet are in 1 square yard?",
      answer: "There are exactly 9 square feet in 1 square yard. This is because 1 yard equals 3 feet, and 3 feet multiplied by 3 feet equals 9 square feet."
    },
    {
      question: "How do I convert square feet to square yards?",
      answer: "Divide your square footage by 9. For example, 450 square feet divided by 9 equals 50 square yards."
    },
    {
      question: "Why do you divide by 9 instead of 3 to convert square feet to square yards?",
      answer: "Linear conversion is one-dimensional ($1\\text{ yd} = 3\\text{ ft}$), but area is two-dimensional. A square yard is a square 3 feet wide and 3 feet long: $3\\text{ ft} \\times 3\\text{ ft} = 9\\text{ ft}^2$."
    },
    {
      question: "How many square yards is a 12x12 room?",
      answer: "A 12x12 foot room has an area of $12 \\times 12 = 144\\text{ square feet}$. Dividing 144 by 9 equals exactly 16 square yards."
    },
    {
      question: "How many square yards is a 10x10 room?",
      answer: "A 10x10 foot room is $100\\text{ square feet}$. Dividing 100 by 9 yields approximately 11.11 square yards."
    },
    {
      question: "What is 500 square feet in square yards?",
      answer: "500 square feet divided by 9 equals 55.56 square yards (or $55\\frac{5}{9}\\text{ yd}^2$)."
    },
    {
      question: "What is 1,000 square feet in square yards?",
      answer: "1,000 square feet divided by 9 equals approximately 111.11 square yards."
    },
    {
      question: "Is the conversion factor between square feet and square yards exact?",
      answer: "Yes, it is mathematically exact. By international definition, 1 yard is exactly 3 feet, making 1 square yard exactly 9 square feet with zero approximation error."
    },
    {
      question: "How much extra carpet should I order beyond the converted square yards?",
      answer: "Industry flooring professionals recommend adding 10% to 15% extra material to accommodate roll widths, pattern matching, door thresholds, and room alcoves."
    },
    {
      question: "How do I convert square yards back to square feet?",
      answer: "Multiply the number of square yards by 9. For example, 25 square yards multiplied by 9 equals 225 square feet."
    }
  ],
  relatedList: [
    { label: "Square Yard to Square Foot", from: "square-yard", to: "square-foot" },
    { label: "Square Foot to Square Meter", from: "square-foot", to: "square-meter" },
    { label: "Square Foot to Square Inch", from: "square-foot", to: "square-inch" },
    { label: "Square Yard to Square Meter", from: "square-yard", to: "square-meter" },
    { label: "Square Foot to Acre", from: "square-foot", to: "acre" }
  ],
  references: [
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices.",
    "ASTM E380: Standard Practice for Use of the International System of Units (SI).",
    "Carpet and Rug Institute (CRI): Carpet Installation Standard 104/105."
  ]
};
