import { CustomArticleData } from "./types";

export const squareMeterToSquareYard: CustomArticleData = {
  fromUnitId: "square-meter",
  toUnitId: "square-yard",
  seoTitle: "Square Meter to Square Yard Converter - m² to yd²",
  metaDescription: "Easily convert square meters to square yards (m² to yd²). Learn the exact conversion formula, view step-by-step mathematical examples, and download the reference table.",
  h1: "Square Meter to Square Yard Converter",
  introduction: [
    "When sourcing textile fabrics, planning sports turf installations, or estimating carpet orders across international suppliers, converting between the metric and imperial systems is an everyday task. The square meter and the square yard are two standard units of area representing very similar scales of measurement.",
    "This guide explains the exact relationship between square meters and square yards. It offers a simple formula, clear step-by-step mathematical calculations, a comprehensive reference table, and practical real-world applications to help you avoid common calculation mistakes."
  ],
  quickAnswer: {
    text: "To convert square meters to square yards, multiply the square meter value by 1.19599. For example, 10 square meters is equal to approximately 11.96 square yards.",
    formulaDisplay: "1 m² ≈ 1.19599 yd²",
    subtext: "Since a yard is slightly shorter than a meter (0.9144 meters), a square yard is slightly smaller than a square meter, resulting in a conversion factor slightly greater than one."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Meter (m²)",
    text: "The square meter (symbol: m²) is the primary SI derived unit of area. It is defined as the area inside a square with sides measuring exactly one meter in length. It is the global standard for representing housing sizes, commercial footprints, and localized municipal zoning parcels."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Yard (yd²)",
    text: "The square yard (symbol: yd² or sq yd) is an imperial and US customary unit of area. It represents the space enclosed by a square with sides measuring exactly one yard (three feet, or 36 inches) in length. It is commonly used in sports fields, fabric trades, landscaping, and carpet installations."
  },
  relationship: "A yard is defined as exactly 0.9144 meters. When squared to calculate area, a square yard contains exactly 0.9144 multiplied by 0.9144, which equals 0.83612736 square meters. Taking the reciprocal, we find that one square meter is equivalent to approximately 1.195990046 square yards.",
  relationshipTitle: "Sizing Differences: m² vs yd²",
  relationshipItems: [
    { label: "1 Square Meter (m²)", value: "approx. 1.19599 Square Yards (yd²)" },
    { label: "1 Square Yard (yd²)", value: "exactly 0.83612736 Square Meters (m²)" }
  ],
  formula: {
    text: "Convert your surface area from square meters to square yards by multiplying the square meter value by 1.19599.",
    math: "Area in Square Yards (yd²) = Area in Square Meters (m²) × 1.195990046",
    subtext: "Conversely, to convert from square yards back to square meters, you multiply the value by 0.836127."
  },
  formulaTitle: "The Square Meter to Square Yard Formula",
  practicalTip: {
    title: "The Plus-Twenty Percent Rule of Thumb",
    text: "For a quick mental approximation, you can add 20% to your square meter value to estimate the equivalent square yardage. For example, 100 m² + 20% = 120 yd², which is extremely close to the actual value of 119.6 yd²."
  },
  examples: {
    title: "Practical Step-by-Step Examples",
    items: [
      {
        title: "Example 1: Sourcing Commercial Carpeting",
        subtitle: "An office floor plan specifies a room area of 150 square meters. Find the carpet order size in square yards.",
        steps: [
          "Identify the starting area in square meters: 150 m².",
          "Apply the area conversion formula: yd² = m² × 1.19599.",
          "Substitute the value into the equation: 150 × 1.19599.",
          "Complete the multiplication: 179.3985 yd².",
          "Conclude: The office requires approximately 179.4 square yards of carpeting."
        ]
      },
      {
        title: "Example 2: Sports Turf Installation",
        subtitle: "A landscaping team plans to cover a municipal park courtyard of 85 square meters with synthetic turf. Convert this turf area to square yards.",
        steps: [
          "State the starting area: 85 m².",
          "Multiply by the scaling factor: 85 × 1.195990046.",
          "Calculate the product: approx. 101.659 yd².",
          "Conclude: The landscaping project requires approximately 101.66 square yards of synthetic turf."
        ]
      },
      {
        title: "Example 3: Textile Fabric Ordering",
        subtitle: "A fabric buyer needs to purchase 45 square meters of vintage cotton fabric from a European supplier. What is this size in square yards?",
        steps: [
          "Identify the fabric area: 45 m².",
          "Apply the formula: yd² = 45 × 1.19599.",
          "Execute the math: 53.8195 yd².",
          "Conclude: The fabric buyer should order approximately 53.82 square yards."
        ]
      }
    ]
  },
  table: {
    title: "Square Meter to Square Yard Reference Table",
    headers: ["Square Meters (m²)", "Square Yards (yd²)", "Relative Comparison"],
    rows: [
      { fromVal: "1 m²", toVal: "1.20 yd²", extra: "One extra square yard with 20% leftover" },
      { fromVal: "5 m²", toVal: "5.98 yd²", extra: "A standard entrance rug size" },
      { fromVal: "10 m²", toVal: "11.96 yd²", extra: "A small garden shed footprint" },
      { fromVal: "20 m²", toVal: "23.92 yd²", extra: "A single-car garage floor" },
      { fromVal: "50 m²", toVal: "59.80 yd²", extra: "A medium-sized courtyard" },
      { fromVal: "100 m²", toVal: "119.60 yd²", extra: "A multi-room apartment floor plan" },
      { fromVal: "250 m²", toVal: "298.99 yd²", extra: "A large warehouse storage zone" }
    ]
  },
  applications: {
    title: "Real-World Industrial Applications",
    items: [
      {
        title: "Interior Design and Home Renovation",
        text: "Flooring, tiling, wallpapering, and carpeting manufacturers specify their bulk inventory yields in square yards in the US and UK, while design software blueprints are typically drawn in square meters."
      },
      {
        title: "Civil Landscaping and Turf Layouts",
        text: "Golf courses, athletics fields, and park planners buy bulk grass sod, loam, and synthetic turf in square yards, which they scale using site dimensions charted in square meters."
      },
      {
        title: "Textiles and Apparel Manufacturing",
        text: "Wholesale fabric bolts and garment yields are calculated in square yards by North American fashion brands, requiring conversions from European bulk rolls measured in square meters."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting m² to yd²",
    items: [
      "Using linear conversion ratios: The most common error is multiplying by 1.09361 (the linear meter to yard ratio) instead of 1.19599. Area requires multiplying length by width, so the ratio must be squared (1.093613 × 1.093613 = 1.19599).",
      "Confusing the direction of conversion: Because a square meter is larger than a square yard, your final number of square yards must always be larger than your starting number of square meters. If the number got smaller, you divided instead of multiplying."
    ]
  },
  faqs: [
    {
      question: "Why is a square meter larger than a square yard?",
      answer: "A meter is defined as 1.09361 yards linearly. When squared to calculate area, a square meter equals 1.09361 × 1.09361 ≈ 1.19599 square yards. Since this ratio is greater than one, a square meter is about 20% larger than a square yard."
    },
    {
      question: "How do I convert square yards to square meters?",
      answer: "To convert square yards to square meters, divide the square yard value by 1.19599, or multiply it by 0.836127."
    },
    {
      question: "What is 100 square meters in square yards?",
      answer: "To convert 100 m² to square yards, multiply by 1.19599. 100 × 1.19599 = 119.599 square yards."
    },
    {
      question: "What is 50 square yards in square meters?",
      answer: "Multiply 50 by 0.836127. 50 × 0.836127 = 41.806 square meters."
    },
    {
      question: "Is 'sq yd' the same as 'yd²'?",
      answer: "Yes. Both symbols refer to square yards. 'yd²' is the mathematical and scientific representation, while 'sq yd' is commonly used in business and commerce."
    },
    {
      question: "How do I calculate carpet orders with decimals?",
      answer: "Use our online converter for precise decimal calculations. It retains perfect precision to prevent under-ordering material."
    },
    {
      question: "Does the turf industry use square yards globally?",
      answer: "No. The turf industry uses square yards in the US, UK, and Canada, but uses square meters in most other countries that follow the metric system exclusively."
    },
    {
      question: "How many square feet are in a square yard?",
      answer: "There are exactly 9 square feet in one square yard (3 feet of length × 3 feet of width)."
    }
  ],
  relatedList: [
    { label: "Meter to Yard", from: "meter", to: "yard" },
    { label: "Square Yard to Square Meter", from: "square-yard", to: "square-meter" }
  ],
  references: [
    "International Bureau of Weights and Measures (BIPM) - The International System of Units (SI) Brochure",
    "National Institute of Standards and Technology (NIST) - Handbook 44: Specifications and Tolerances for Measuring Devices"
  ]
};
