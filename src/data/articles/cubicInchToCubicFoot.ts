import { CustomArticleData } from "./types";

export const cubicInchToCubicFoot: CustomArticleData = {
  fromUnitId: "cubic-inch",
  toUnitId: "cubic-foot",
  seoTitle: "Cubic Inches to Cubic Feet Converter (in³ to ft³) | UnitsConvertors.com",
  metaDescription: "Convert cubic inches to cubic feet (in³ to ft³) accurately. Learn the exact 1/1,728 formula, freight packaging worked examples, and conversion tables.",
  h1: "Cubic Inches to Cubic Feet Converter",
  introduction: [
    "Converting cubic inches to cubic feet scales detailed manufacturing and product packaging measurements into macroscopic storage, shipping freight, and HVAC airflow capacities.",
    "A cubic inch (in³ or cu in) is a primary unit of volume in the US customary and imperial measurement systems, defined as the volume of a cube with 1-inch edges. A cubic foot (ft³ or cu ft) represents a larger three-dimensional cube with edges measuring exactly one foot (12 inches).",
    "Because one linear foot contains 12 inches, cubing this dimension establishes that 1 cubic foot equals exactly $12 \\times 12 \\times 12 = 1,728$ cubic inches. Converting cubic inches to cubic feet requires dividing the cubic inch value by 1,728 (or multiplying by approximately $0.0005787037$). This calculation is essential for logistics parcel dimensional weight (DIM weight), refrigeration storage sizing, HVAC duct airflow analysis, and structural concrete estimation. This guide provides exact conversion formulas, worked cargo examples, comparison tables, and common calculation mistakes."
  ],
  quickAnswer: {
    text: "To convert cubic inches to cubic feet, divide the cubic inch volume by 1,728 (or multiply by 0.0005787). For example, a shipping carton measuring 8,640 cubic inches equals exactly 5.0 cubic feet.",
    formulaDisplay: "\\text{Cubic Feet (ft}^3\\text{)} = \\frac{\\text{Cubic Inches (in}^3\\text{)}}{1,728} = \\text{Cubic Inches} \\times 0.0005787037",
    subtext: "1 ft³ = 1,728 in³ | 1 in³ ≈ 0.0005787037 ft³ | 1 ft³ ≈ 28.3168 Liters | 1 ft³ = 12 Board Feet"
  },
  aboutSourceUnit: {
    title: "Understanding the Cubic Inch (in³)",
    text: "The cubic inch (symbol: in³) is a US customary and imperial unit of volume equal to the volume of a 1-inch cube ($1.6387064 \\times 10^{-5}\\text{ m}^3$ or $16.387064\\text{ cm}^3$). It is standard across North American mechanical component design, engine displacement, hydraulic valve capacities, and small product packaging."
  },
  aboutTargetUnit: {
    title: "Understanding the Cubic Foot (ft³)",
    text: "The cubic foot (symbol: ft³ or cu ft) is a US customary and imperial volumetric unit equal to the volume of a 1-foot cube ($1,728\\text{ in}^3$ or $0.028316846592\\text{ m}^3$). Widely used in shipping freight, refrigerator and freezer capacities, HVAC volumetric airflow (CFM), compressed gas storage, and construction materials."
  },
  relationship: "Because 1 foot equals 12 inches, one cubic foot equals $12\\text{ in} \\times 12\\text{ in} \\times 12\\text{ in} = 1,728\\text{ in}^3$. To convert from cubic inches to cubic feet, divide by 1,728. To convert from cubic feet to cubic inches, multiply by 1,728.",
  relationshipTitle: "Cubic Inch vs Cubic Foot Volumetric Equivalence",
  relationshipItems: [
    { label: "1 Cubic Inch (in³)", value: "≈ 0.0005787 ft³" },
    { label: "432 Cubic Inches (in³)", value: "0.2500000 ft³" },
    { label: "864 Cubic Inches (in³)", value: "0.5000000 ft³" },
    { label: "1,728 Cubic Inches (in³)", value: "1.0000000 ft³" },
    { label: "3,456 Cubic Inches (in³)", value: "2.0000000 ft³" },
    { label: "8,640 Cubic Inches (in³)", value: "5.0000000 ft³" }
  ],
  formula: {
    text: "Divide the volume in cubic inches by 1,728, or multiply by 0.000578703704.",
    math: "\\text{Volume (ft}^3\\text{)} = \\frac{\\text{Volume (in}^3\\text{)}}{1,728} = \\frac{\\text{Length (in)} \\times \\text{Width (in)} \\times \\text{Height (in)}}{1,728}",
    subtext: "Inverse formula: Volume (in³) = Volume (ft³) × 1,728"
  },
  formulaTitle: "Cubic Inch to Cubic Foot Conversion Formula",
  practicalTip: {
    title: "Shipping Dimensional Weight (DIM Weight) Rule",
    text: "Freight carriers (FedEx, UPS, DHL) calculate dimensional weight in cubic inches before billing. For domestic air freight, volume in cubic inches is divided by 139 (or 166) to determine billable weight in pounds. Knowing that 1 cubic foot equals 1,728 in³ allows you to quickly benchmark package densities."
  },
  expertNote: {
    title: "Linear vs Volumetric Scaling Factor",
    text: "Remember that volumetric scaling is cubic: doubling linear dimensions increases volume by a factor of $2^3 = 8$. A 12-inch cube has a volume of 1,728 in³ (1 ft³), while a 24-inch cube has a volume of 13,824 in³ (8 ft³)."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Shipping Box Freight Volume Calculation",
        subtitle: "An e-commerce fulfillment warehouse packs an order into a corrugated box measuring 24 inches long, 18 inches wide, and 12 inches high (5,184 cubic inches). Calculate the volume in cubic feet.",
        steps: [
          "Calculate cubic inch volume: 24 × 18 × 12 = 5,184 in³.",
          "Apply conversion formula: Volume (ft³) = 5,184 ÷ 1,728.",
          "Perform calculation: 5,184 ÷ 1,728 = 3.0 ft³.",
          "Final Result: The shipping box volume is exactly 3.0 cubic feet."
        ]
      },
      {
        title: "Example 2: Refrigerator Interior Storage Capacity",
        subtitle: "A compact bar refrigerator has an internal cavity measured at 7,776 cubic inches. Convert this volume to cubic feet.",
        steps: [
          "State volume: 7,776 in³.",
          "Divide by 1,728: 7,776 ÷ 1,728 = 4.5 ft³.",
          "Final Result: The refrigerator provides 4.5 cubic feet of internal storage."
        ]
      },
      {
        title: "Example 3: Subwoofer Enclosure Internal Air Space",
        subtitle: "An audio engineer builds an acoustic subwoofer box with internal dimensions yielding 2,160 cubic inches. Convert this to cubic feet.",
        steps: [
          "State volume: 2,160 in³.",
          "Divide by 1,728: 2,160 ÷ 1,728 = 1.25 ft³.",
          "Final Result: The internal air volume is exactly 1.25 cubic feet."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Inch to Cubic Foot Conversion Reference Table",
    headers: ["Cubic Inches (in³)", "Cubic Feet (ft³)", "Liters (L)", "Gallons (US)", "Common Practical Example"],
    rows: [
      { fromVal: "100 in³", toVal: "0.0579 ft³", extra: "1.64 L", extra2: "0.43 gal", extra3: "Small shoebox or tool pouch" },
      { fromVal: "432 in³", toVal: "0.2500 ft³", extra: "7.08 L", extra2: "1.87 gal", extra3: "Quarter cubic foot carton" },
      { fromVal: "864 in³", toVal: "0.5000 ft³", extra: "14.16 L", extra2: "3.74 gal", extra3: "Half cubic foot storage bin" },
      { fromVal: "1,728 in³", toVal: "1.0000 ft³", extra: "28.32 L", extra2: "7.48 gal", extra3: "12\" × 12\" × 12\" standard cube (1 ft³)" },
      { fromVal: "3,456 in³", toVal: "2.0000 ft³", extra: "56.63 L", extra2: "14.96 gal", extra3: "Standard airline carry-on luggage limit" },
      { fromVal: "5,184 in³", toVal: "3.0000 ft³", extra: "84.95 L", extra2: "22.44 gal", extra3: "Medium moving box (24\"×18\"×12\")" },
      { fromVal: "8,640 in³", toVal: "5.0000 ft³", extra: "141.58 L", extra2: "37.40 gal", extra3: "Large kitchen microwave or chest freezer" },
      { fromVal: "17,280 in³", toVal: "10.0000 ft³", extra: "283.17 L", extra2: "74.81 gal", extra3: "Apartment-size refrigerator" },
      { fromVal: "34,560 in³", toVal: "20.0000 ft³", extra: "566.34 L", extra2: "149.61 gal", extra3: "Full-size residential French-door fridge" },
      { fromVal: "46,656 in³", toVal: "27.0000 ft³", extra: "764.55 L", extra2: "201.97 gal", extra3: "Exactly 1 cubic yard (3 ft × 3 ft × 3 ft)" }
    ]
  },
  applications: {
    title: "Logistics Freight, HVAC Engineering, & Consumer Goods",
    items: [
      {
        title: "Logistics & Freight Cargo Packaging",
        text: "Converting product packaging measurements from inches to cubic feet to optimize palletization, container space, and dimensional freight billing."
      },
      {
        title: "Home Appliance Capacity Specifications",
        text: "Translating internal cubic inch cavity dimensions into cubic feet for consumer refrigerators, washing machine drums, and microwaves."
      },
      {
        title: "HVAC Ductwork & Airflow Sizing",
        text: "Calculating room volumetric air capacity in cubic feet to design heating and air conditioning CFM (cubic feet per minute) flow rates."
      },
      {
        title: "Acoustic Speaker Cabinet Engineering",
        text: "Tuning ported and sealed subwoofer box enclosure air volumes (cubic feet) derived from internal panel dimensions in inches."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in in³ to ft³ Conversions",
    items: [
      "Dividing by 12 or 144 instead of 1,728 (12³), creating huge calculation errors of 144× or 12× respectively.",
      "Confusing board feet (144 in³) with cubic feet (1,728 in³); remember 1 ft³ contains 12 board feet.",
      "Forgetting to multiply external wall thicknesses when calculating net internal cavity volume from outer dimensions.",
      "Mixing decimal inches with fractional inches before performing multiplication."
    ]
  },
  faqs: [
    {
      question: "How do I convert cubic inches to cubic feet?",
      answer: "Divide the volume in cubic inches by 1,728 (or multiply by 0.0005787037). For example, 3,456 in³ ÷ 1,728 = 2.0 ft³."
    },
    {
      question: "How many cubic inches are in 1 cubic foot?",
      answer: "There are exactly 1,728 cubic inches in 1 cubic foot (12 inches × 12 inches × 12 inches)."
    },
    {
      question: "Why do we divide by 1,728 to find cubic feet?",
      answer: "Because 1 foot equals 12 inches. Calculating the volume of a 1-foot cube in inches requires 12 × 12 × 12 = 1,728 cubic inches."
    },
    {
      question: "How many cubic feet is 10,000 cubic inches?",
      answer: "10,000 cubic inches divided by 1,728 equals approximately 5.787 cubic feet."
    },
    {
      question: "How many board feet are in a cubic foot?",
      answer: "One cubic foot equals 12 board feet (1,728 cubic inches ÷ 144 cubic inches per board foot = 12 FBM)."
    },
    {
      question: "How many gallons are in 1 cubic foot?",
      answer: "One cubic foot contains approximately 7.48052 US liquid gallons (or 28.3168 liters)."
    },
    {
      question: "How do I calculate cubic feet from dimensions in inches?",
      answer: "Multiply (Length in inches × Width in inches × Height in inches), then divide the total by 1,728."
    },
    {
      question: "What is 1 cubic yard in cubic feet and cubic inches?",
      answer: "1 cubic yard equals exactly 27 cubic feet, which corresponds to 46,656 cubic inches (27 × 1,728)."
    }
  ],
  relatedList: [
    { label: "Cubic Feet to Cubic Inches", from: "cubic-foot", to: "cubic-inch" },
    { label: "Cubic Inches to Board Feet", from: "cubic-inch", to: "board-foot" },
    { label: "Cubic Inches to Cubic Yards", from: "cubic-inch", to: "cubic-yard" },
    { label: "Cubic Inches to Cubic Meters", from: "cubic-inch", to: "cubic-meter" }
  ],
  references: [
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices.",
    "ASTM International: Standard Practice for Use of the International System of Units (SI).",
    "International Air Transport Association (IATA): Cargo Dimensional Weight Standards."
  ]
};
