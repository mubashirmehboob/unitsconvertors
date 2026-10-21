import { CustomArticleData } from "./types";

export const centimeterToYard: CustomArticleData = {
  fromUnitId: "centimeter",
  toUnitId: "yard",
  seoTitle: "Centimeter to Yard Converter | cm to yd",
  metaDescription: "Convert centimeters to yards (cm to yd) with high accuracy. Discover the exact 91.44 cm yard standard, conversion formula, worked examples, table, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/length/centimeter-to-yard",
  h1: "Centimeter to Yard Converter",
  introduction: [
    "Converting centimeters (cm) to yards (yd) is a standard calculation in international textile trade, athletics, landscape architecture, and interior design. Fabric bolts manufactured in Europe or Asia using metric centimeters are regularly sold in the United States and the United Kingdom by the yard, requiring an exact mathematical translation.",
    "Under the 1959 International Yard and Pound Agreement, one international yard is defined as exactly 0.9144 meters, which equals exactly 91.44 centimeters. This guide explains the exact conversion relationship, manual calculation steps, practical fabric and athletic examples, and answers to frequently asked questions."
  ],
  quickAnswer: {
    text: "One centimeter is equal to approximately 0.010936 yards. Conversely, one international yard contains exactly 91.44 centimeters (36 inches).",
    formulaDisplay: "1 cm ≈ 0.010936 yd",
    subtext: "To convert centimeters to yards, divide the centimeter value by 91.44, or multiply by 0.010936."
  },
  aboutSourceUnit: {
    title: "Understanding the Centimeter (cm)",
    text: "The centimeter is an official SI unit of length equal to one hundredth of a meter (10⁻² meters). Widely adopted across retail merchandising, human ergonomics, and technical specifications, centimeters offer an intuitive, everyday measurement scale for smaller physical items."
  },
  aboutTargetUnit: {
    title: "Understanding the Yard (yd)",
    text: "The yard is an imperial and US customary unit of length equal to 3 feet or 36 inches. Standardized internationally in 1959 as exactly 0.9144 meters (91.44 cm), the yard is the standard measurement for American football fields, fabric and carpet retailing, golf course fairway markers, and landscape gravel/soil volumes."
  },
  relationship: "Because one yard is legally fixed at exactly 91.44 centimeters (36 inches × 2.54 cm/inch), converting centimeters to yards requires dividing by 91.44.",
  relationshipItems: [
    { label: "Centimeters to Yards", value: "1 cm ≈ 0.010936 yd" },
    { label: "Yards to Centimeters", value: "1 yd = 91.44 cm (exact)" },
    { label: "Exact Metric Definition", value: "1 yard = 0.9144 m" }
  ],
  formula: {
    text: "To convert centimeters to yards, divide the centimeter measurement by 91.44. Alternatively, multiply by 0.01093613.",
    math: "Yards (yd) = Centimeters (cm) / 91.44 ≈ Centimeters (cm) × 0.01093613",
    subtext: "The factor 91.44 is exact and derived directly from the definition of the international inch (2.54 cm × 36)."
  },
  practicalTip: {
    title: "Quick Estimation Rule",
    text: "Because 91.44 cm is close to 100 cm (1 meter), a yard is roughly 9% shorter than a meter. You can estimate yards by dividing centimeters by 100 and adding roughly 10%."
  },
  examples: {
    title: "Step-by-Step Conversion Scenarios",
    items: [
      {
        title: "Example 1: Buying Fabric by the Bolt",
        subtitle: "Convert a roll of imported linen measuring 450 centimeters into yards.",
        steps: [
          "State the starting length: 450 cm.",
          "Apply the formula: Divide by 91.44.",
          "Perform calculation: 450 / 91.44 ≈ 4.9213.",
          "Final result: 450 cm equals approximately 4.92 yards."
        ]
      },
      {
        title: "Example 2: Sizing an Athletic Field Clearance",
        subtitle: "Convert an athletic turf perimeter border of 1,828.8 centimeters to yards.",
        steps: [
          "State the starting length: 1,828.8 cm.",
          "Divide by 91.44: 1,828.8 / 91.44 = 20.",
          "Conclusion: 1,828.8 cm is exactly equal to 20 yards."
        ]
      },
      {
        title: "Example 3: Domestic Carpet Runner",
        subtitle: "Convert a hallway runner carpet measuring 274.32 cm into yards.",
        steps: [
          "State the starting length: 274.32 cm.",
          "Divide by 91.44: 274.32 / 91.44 = 3.",
          "Final answer: 274.32 cm corresponds to exactly 3 yards (9 feet)."
        ]
      }
    ]
  },
  table: {
    title: "Centimeter to Yard Reference Table",
    headers: ["Centimeters (cm)", "Yards (yd)", "Context / Common Application"],
    rows: [
      { fromVal: "10", toVal: "0.1094", extra: "10 cm (palm width)" },
      { fromVal: "25", toVal: "0.2734", extra: "Dinner plate diameter" },
      { fromVal: "50", toVal: "0.5468", extra: "Half a meter" },
      { fromVal: "91.44", toVal: "1.0000", extra: "Exactly 1 yard (36 inches)" },
      { fromVal: "100", toVal: "1.0936", extra: "1 full meter" },
      { fromVal: "182.88", toVal: "2.0000", extra: "Exactly 2 yards (6 feet)" },
      { fromVal: "274.32", toVal: "3.0000", extra: "Exactly 3 yards (9 feet)" },
      { fromVal: "500", toVal: "5.4681", extra: "5 meters (vehicle length)" },
      { fromVal: "914.4", toVal: "10.0000", extra: "Exactly 10 yards (first-down distance)" },
      { fromVal: "1,000", toVal: "10.9361", extra: "10 meters" }
    ]
  },
  applications: {
    title: "Real-World Contexts & Applications",
    items: [
      {
        title: "Textiles, Sewing & Upholstery",
        text: "Fabric wholesalers import textiles measured in metric centimeters (e.g., standard 140 cm or 150 cm bolt widths) and convert lengths into yards for retail tailoring and drapery sales in the US and UK."
      },
      {
        title: "Athletic Field Layouts & Golf Course Design",
        text: "International stadiums host both soccer (measured in meters) and American football or golf (marked in yards). Converting centimeter measurements into yards ensures accurate line painting and hazard yardages."
      },
      {
        title: "Landscape Architecture & Civil Paving",
        text: "Bulk materials such as mulch, sod, and topsoil are ordered by the cubic yard in North America, while structural curbing and paver patterns are engineered in centimeters."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming 1 yard equals 100 cm: A yard is 91.44 cm, while 100 cm is a meter. Confusing the two produces an error of over 9%.",
      "Using 91 instead of 91.44: Dropping the 0.44 cm creates cumulative discrepancies when ordering hundreds of yards of fabric or fencing.",
      "Dividing instead of multiplying when reversing: To convert yards to centimeters, multiply by 91.44; to convert centimeters to yards, divide by 91.44.",
      "Confusing yards with feet: A yard contains 3 feet (36 inches). 30.48 cm is 1 foot, whereas 91.44 cm is 1 yard."
    ]
  },
  faqs: [
    {
      question: "How many centimeters are in one yard?",
      answer: "There are exactly 91.44 centimeters in one international yard. This equals 36 inches × 2.54 cm per inch."
    },
    {
      question: "What is the formula to convert centimeters to yards?",
      answer: "The formula is: Yards = Centimeters / 91.44, or Yards = Centimeters × 0.01093613."
    },
    {
      question: "How many yards is 100 cm?",
      answer: "Dividing 100 cm by 91.44 gives approximately 1.0936 yards. Thus, 1 meter is about 1.094 yards."
    },
    {
      question: "How do you convert yards back to centimeters?",
      answer: "To convert yards back to centimeters, multiply the yard figure by 91.44. For instance, 5 yards multiplied by 91.44 equals 457.2 cm."
    },
    {
      question: "Is a yard longer or shorter than a meter?",
      answer: "A yard is shorter than a meter. One yard is 91.44 cm (0.9144 m), whereas a meter is exactly 100 cm."
    },
    {
      question: "What is the official symbol for yard?",
      answer: "The standard international abbreviation for yard is 'yd'."
    },
    {
      question: "How many centimeters is 10 yards?",
      answer: "Multiplying 10 yards by 91.44 equals exactly 914.4 centimeters (9.144 meters)."
    },
    {
      question: "Why was the yard defined as exactly 0.9144 meters?",
      answer: "In 1959, national standards laboratories from the US, UK, Canada, Australia, and New Zealand agreed to fix the yard to the metric meter to eliminate slight discrepancies between national definitions."
    }
  ],
  relatedList: [
    { label: "Yard to Centimeter", from: "yard", to: "centimeter" },
    { label: "Centimeter to Foot", from: "centimeter", to: "foot" },
    { label: "Centimeter to Inch", from: "centimeter", to: "inch" },
    { label: "Centimeter to Meter", from: "centimeter", to: "meter" },
    { label: "Centimeter to Mile", from: "centimeter", to: "mile" },
    { label: "Meter to Yard", from: "meter", to: "yard" },
    { label: "Foot to Yard", from: "foot", to: "yard" }
  ],
  references: [
    "BIPM (International Bureau of Weights and Measures) - The International System of Units (SI Brochure, 9th edition).",
    "NIST Handbook 44 - Appendix C: General Tables of Units of Measurement.",
    "1959 International Yard and Pound Agreement (US National Bureau of Standards)."
  ]
};
