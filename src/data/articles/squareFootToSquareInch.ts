import { CustomArticleData } from "./types";

export const squareFootToSquareInch: CustomArticleData = {
  fromUnitId: "square-foot",
  toUnitId: "square-inch",
  seoTitle: "Square Foot to Square Inch Converter (ft² to in²) | UnitsConvertors.com",
  metaDescription: "Convert square feet to square inches (ft² to in²) instantly. Learn the 1 ft² = 144 in² formula, view step-by-step HVAC and tiling examples, and check the reference table.",
  canonicalUrl: "https://unitsconvertors.com/converters/area/square-foot-to-square-inch",
  h1: "Square Foot to Square Inch Converter",
  introduction: [
    "Converting square feet (ft²) to square inches (in²) is a foundational area conversion in carpentry, HVAC ventilation engineering, tile setting, structural drafting, and metal fabrication. While room floor plans, roof decks, and architectural footprints are quantified in square feet, components such as air supply registers, ceramic tiles, mechanical fasteners, and pipe cross-sections are detailed in square inches.",
    "Because both units belong to the US customary and imperial measurement systems, their mathematical relationship is exact: exactly 144 square inches compose a single square foot. Understanding this relationship ensures precision when sizing ductwork, calculating structural pressure, or laying mosaic floor patterns."
  ],
  quickAnswer: {
    text: "To convert square feet to square inches, multiply the area by 144. For example, a 5 square foot countertop surface contains exactly 720 square inches.",
    formulaDisplay: "Area (in²) = Area (ft²) × 144",
    subtext: "1 square foot contains exactly 144 square inches. Conversely, 1 square inch equals 1/144 (approx. 0.006944) square feet."
  },
  aboutSourceUnit: {
    title: "About the Square Foot (ft²)",
    text: "The square foot (symbol: ft² or sq ft) is a US customary and imperial unit of area defined as a square measuring one linear foot (12 inches or 0.3048 meters) on each side. It is the primary standard for architectural floor plans, residential living spaces, and construction area estimates across North America."
  },
  aboutTargetUnit: {
    title: "About the Square Inch (in²)",
    text: "The square inch (symbol: in² or sq in) is a unit of area representing a square with sides measuring exactly one linear inch (2.54 centimeters). It is the standard unit for expressing mechanical component cross-sections, HVAC air vent openings, hydraulic piston surfaces, and material stress ratings."
  },
  relationship: "Because one linear foot equals exactly 12 linear inches, an area of one square foot forms a grid of 12 inches by 12 inches. Multiplying 12 in by 12 in yields exactly 144 square inches. Each square foot contains exactly 144 square inches with zero approximation error.",
  relationshipTitle: "Exact Geometric Relationship: 1 ft² = 144 in²",
  relationshipItems: [
    { label: "Exact Area Factor", value: "1 ft² = 144 in² (exact)" },
    { label: "Inverse Factor", value: "1 in² = 1/144 ft² ≈ 0.006944 ft²" },
    { label: "Linear Basis", value: "1 ft = 12 in (exact)" },
    { label: "Area Derivation", value: "(12 in)² = 144 in²" }
  ],
  formula: {
    text: "To convert any area from square feet into square inches, multiply the number of square feet by 144.",
    math: "Area (in²) = Area (ft²) × 144",
    subtext: "To reverse the conversion, divide square inches by 144."
  },
  formulaTitle: "Square Foot to Square Inch Conversion Formula",
  practicalTip: {
    title: "Tile Count Calculation Tip",
    text: "When calculating how many small tiles you need for a given floor area, convert the room's square footage to square inches by multiplying by 144 first. Then divide by the area of one tile in square inches (e.g., a 4x4 inch tile is 16 in²; 144 / 16 = exactly 9 tiles per square foot)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Kitchen Countertop Sizing",
        subtitle: "A granite kitchen countertop has a surface area of 35 square feet. Determine its area in square inches.",
        steps: [
          "Identify the given area: 35 ft².",
          "State the conversion formula: in² = ft² × 144.",
          "Multiply 35 by 144: 35 × 144.",
          "Calculate the product: 5,040 in².",
          "Conclude: The countertop surface measures exactly 5,040 square inches."
        ]
      },
      {
        title: "Example 2: HVAC Attic Net Free Venting",
        subtitle: "Building code requires 8.5 square feet of net free ventilation area. Convert this requirement to square inches.",
        steps: [
          "State the requirement: 8.5 ft².",
          "Apply the formula: 8.5 × 144.",
          "Compute the calculation: 1,224 in².",
          "Final Result: The attic requires 1,224 square inches of vent opening."
        ]
      },
      {
        title: "Example 3: Ceramic Shower Wall Tiling",
        subtitle: "A shower accent wall measures 12.5 square feet. How many 3-inch by 6-inch subway tiles are needed?",
        steps: [
          "Convert wall to square inches: 12.5 × 144 = 1,800 in².",
          "Calculate area of one subway tile: 3 in × 6 in = 18 in².",
          "Divide total area by tile area: 1,800 / 18 = 100 tiles.",
          "Result: Exactly 100 tiles are needed (plus wastage)."
        ]
      }
    ]
  },
  table: {
    title: "Square Feet to Square Inches Conversion Reference Table",
    headers: ["Square Feet (ft²)", "Square Inches (in²)", "Square Yards (yd²)", "Square Meters (m²)"],
    rows: [
      { fromVal: "0.25 ft²", toVal: "36 in²", extra: "0.0278 yd²", extra2: "0.0232 m²" },
      { fromVal: "0.5 ft²", toVal: "72 in²", extra: "0.0556 yd²", extra2: "0.0465 m²" },
      { fromVal: "1 ft²", toVal: "144 in²", extra: "0.1111 yd²", extra2: "0.0929 m²" },
      { fromVal: "2 ft²", toVal: "288 in²", extra: "0.2222 yd²", extra2: "0.1858 m²" },
      { fromVal: "3 ft²", toVal: "432 in²", extra: "0.3333 yd²", extra2: "0.2787 m²" },
      { fromVal: "5 ft²", toVal: "720 in²", extra: "0.5556 yd²", extra2: "0.4645 m²" },
      { fromVal: "10 ft²", toVal: "1,440 in²", extra: "1.1111 yd²", extra2: "0.9290 m²" },
      { fromVal: "15 ft²", toVal: "2,160 in²", extra: "1.6667 yd²", extra2: "1.3935 m²" },
      { fromVal: "20 ft²", toVal: "2,880 in²", extra: "2.2222 yd²", extra2: "1.8581 m²" },
      { fromVal: "25 ft²", toVal: "3,600 in²", extra: "2.7778 yd²", extra2: "2.3226 m²" },
      { fromVal: "50 ft²", toVal: "7,200 in²", extra: "5.5556 yd²", extra2: "4.6452 m²" },
      { fromVal: "100 ft²", toVal: "14,400 in²", extra: "11.111 yd²", extra2: "9.2903 m²" },
      { fromVal: "500 ft²", toVal: "72,000 in²", extra: "55.556 yd²", extra2: "46.452 m²" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "HVAC Ductwork & Grille Engineering",
        text: "Translating volumetric airflow requirements from CFM per square foot into specific register grille areas measured in square inches."
      },
      {
        title: "Ceramic & Mosaic Tile Installation",
        text: "Determining exact tile counts for floors, backsplashes, and shower pans where small tiles are dimensioned in inches."
      },
      {
        title: "Structural Load Distribution (psf to psi)",
        text: "Translating foundation surface loads from pounds per square foot (psf) into localized bearing pressures in pounds per square inch (psi)."
      },
      {
        title: "Metal Fabrication & Sheet Material Yields",
        text: "Calculating laser-cut part nesting layouts on standard 4-foot by 8-foot metal sheets detailed in square inches."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting ft² to in²",
    items: [
      "Multiplying by 12 instead of 144: A linear foot has 12 inches, but a square foot has 12 × 12 = 144 square inches. Multiplying by 12 underestimates area by a factor of 12.",
      "Dividing instead of multiplying: When converting from a larger unit (ft²) to a smaller unit (in²), the number must increase. Dividing by 144 produces a drastically incorrect decimal.",
      "Confusing square inches with cubic inches: A square inch measures flat two-dimensional area, while a cubic inch measures three-dimensional volume.",
      "Mismatched unit operations in tile estimates: Adding room square footage directly to tile dimensions without converting both to square inches first."
    ]
  },
  faqs: [
    {
      question: "How many square inches are in 1 square foot?",
      answer: "There are exactly 144 square inches in 1 square foot. This is derived from multiplying 12 inches by 12 inches ($12 \\times 12 = 144$)."
    },
    {
      question: "How do I convert square feet to square inches?",
      answer: "Multiply the number of square feet by 144. For example, 10 square feet multiplied by 144 equals 1,440 square inches."
    },
    {
      question: "Why do you multiply by 144 instead of 12?",
      answer: "Linear feet convert by 12 ($1\\text{ ft} = 12\\text{ in}$), but area represents length multiplied by width. Because both dimensions are 12 inches, the area is $12\\text{ in} \\times 12\\text{ in} = 144\\text{ in}^2$."
    },
    {
      question: "How many square inches is a 2x2 foot square?",
      answer: "A 2x2 foot area equals 4 square feet. Multiplying 4 by 144 yields exactly 576 square inches."
    },
    {
      question: "How many 4x4 inch tiles fit in one square foot?",
      answer: "One 4x4 inch tile has an area of 16 square inches. Since 1 square foot has 144 square inches, $144 / 16 = 9$ tiles fit exactly into one square foot."
    },
    {
      question: "What is 20 square feet in square inches?",
      answer: "20 square feet multiplied by 144 equals 2,880 square inches."
    },
    {
      question: "What is 100 square feet in square inches?",
      answer: "100 square feet multiplied by 144 equals 14,400 square inches."
    },
    {
      question: "Is the 144 conversion factor exact?",
      answer: "Yes, it is mathematically exact. By international definition, 1 foot contains exactly 12 inches, making $(12)^2 = 144$ an absolute constant."
    },
    {
      question: "How do I convert square inches back to square feet?",
      answer: "Divide the square inch value by 144. For example, 720 square inches divided by 144 equals 5 square feet."
    },
    {
      question: "How does this relate to pressure conversion (psf vs psi)?",
      answer: "Because $1\\text{ ft}^2 = 144\\text{ in}^2$, one pound per square inch (psi) equals 144 pounds per square foot (psf)."
    }
  ],
  relatedList: [
    { label: "Square Inch to Square Foot", from: "square-inch", to: "square-foot" },
    { label: "Square Foot to Square Meter", from: "square-foot", to: "square-meter" },
    { label: "Square Foot to Square Yard", from: "square-foot", to: "square-yard" },
    { label: "Square Inch to Square Centimeter", from: "square-inch", to: "square-centimeter" },
    { label: "Square Foot to Acre", from: "square-foot", to: "acre" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ASHRAE Handbook - Fundamentals: Space Air Diffusion and Duct Design.",
    "Tile Council of North America (TCNA): Handbook for Ceramic, Glass, and Stone Tile Installation."
  ]
};
