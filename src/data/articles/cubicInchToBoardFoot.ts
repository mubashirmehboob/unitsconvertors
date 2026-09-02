import { CustomArticleData } from "./types";

export const cubicInchToBoardFoot: CustomArticleData = {
  fromUnitId: "cubic-inch",
  toUnitId: "board-foot",
  seoTitle: "Cubic Inches to Board Feet Converter (in³ to FBM) | UnitsConvertors.com",
  metaDescription: "Convert cubic inches to board feet (in³ to FBM) accurately. Learn the exact 1/144 division formula, timber volume worked examples, and lumber reference tables.",
  h1: "Cubic Inches to Board Feet Converter",
  introduction: [
    "Converting cubic inches to board feet bridges the gap between detailed CAD/CAM component modeling and commercial hardwood timber procurement.",
    "A cubic inch (in³ or cu in) is a standard US customary unit of volume defined by a cube with one-inch edges ($1\\text{ in} \\times 1\\text{ in} \\times 1\\text{ in}$). A board foot (symbol: FBM or BF, for 'foot, board measure') is the foundational unit of volume in the North American lumber and hardwood forestry industry, defined as the volume of a nominal one-foot long, one-foot wide, and one-inch thick plank ($12\\text{ in} \\times 12\\text{ in} \\times 1\\text{ in} = 144\\text{ in}^3$).",
    "Because one board foot contains exactly 144 cubic inches, converting cubic inches to board feet is performed by dividing the total cubic inch volume by 144 (or multiplying by approximately $0.00694444$). This conversion is indispensable for furniture makers, custom millworkers, architects, and sawmill operators estimating hardwood lumber yield and raw material costs. This guide provides exact conversion formulas, worked examples for timber components, nominal vs. actual dimension guidelines, and complete lumber conversion tables."
  ],
  quickAnswer: {
    text: "To convert cubic inches to board feet, divide the cubic inch volume by 144 (or multiply by 0.006944). For example, a solid timber beam measuring 1,440 cubic inches equals exactly 10.0 board feet.",
    formulaDisplay: "\\text{Board Feet (FBM)} = \\frac{\\text{Cubic Inches (in}^3\\text{)}}{144} = \\text{Cubic Inches} \\times 0.00694444",
    subtext: "1 Board Foot = 144 in³ | 1 in³ ≈ 0.006944 FBM | 1 ft³ = 1,728 in³ = 12 Board Feet"
  },
  aboutSourceUnit: {
    title: "Understanding the Cubic Inch (in³)",
    text: "The cubic inch (symbol: in³) is an imperial and US customary unit of volume representing a cube measuring 1 inch on each side. Equal to exactly 16.387064 cubic centimeters ($1.6387064 \\times 10^{-5}\\text{ m}^3$), it is commonly used in precision manufacturing, CNC woodworking, mechanical modeling, and custom cabinetry joinery."
  },
  aboutTargetUnit: {
    title: "Understanding the Board Foot (FBM)",
    text: "The board foot (symbol: FBM or BF) is a specialized unit of volumetric measurement used throughout the US and Canadian forestry, sawmilling, and lumber trade. One board foot represents the nominal volume of a board 12 inches wide, 12 inches long, and 1 inch thick ($144\\text{ in}^3$). A standard cubic foot ($1,728\\text{ in}^3$) contains exactly 12 board feet."
  },
  relationship: "By standard definition, 1 board foot equals $12\\text{ in} \\times 12\\text{ in} \\times 1\\text{ in} = 144\\text{ in}^3$. Therefore, dividing any cubic inch volume by 144 gives the exact equivalent in board feet. Conversely, multiplying board feet by 144 converts them back into cubic inches.",
  relationshipTitle: "Cubic Inch vs Board Foot Volumetric Comparison",
  relationshipItems: [
    { label: "1 Cubic Inch (in³)", value: "≈ 0.006944 FBM" },
    { label: "72 Cubic Inches (in³)", value: "0.500000 FBM" },
    { label: "144 Cubic Inches (in³)", value: "1.000000 FBM" },
    { label: "288 Cubic Inches (in³)", value: "2.000000 FBM" },
    { label: "720 Cubic Inches (in³)", value: "5.000000 FBM" },
    { label: "1,728 Cubic Inches (1 ft³)", value: "12.000000 FBM" }
  ],
  formula: {
    text: "Divide the volume in cubic inches by 144, or multiply by 0.006944444.",
    math: "\\text{Board Feet (FBM)} = \\frac{\\text{Volume (in}^3\\text{)}}{144} = \\frac{\\text{Thickness (in)} \\times \\text{Width (in)} \\times \\text{Length (in)}}{144}",
    subtext: "Inverse formula: Volume (in³) = Board Feet (FBM) × 144"
  },
  formulaTitle: "Cubic Inch to Board Foot Conversion Formula",
  practicalTip: {
    title: "Dimensional Lumber Formula",
    text: "If your lumber dimensions are given in inches for thickness ($T$), inches for width ($W$), and feet for length ($L_{\\text{ft}}$), calculate board footage directly using $(T \\times W \\times L_{\\text{ft}}) / 12$. If length is also in inches ($L_{\\text{in}}$), calculate $(T \\times W \\times L_{\\text{in}}) / 144$."
  },
  expertNote: {
    title: "Rough Lumber (Quarter System) vs Surfaced Lumber",
    text: "In hardwood trade, rough lumber thickness is quoted in 'quarters' of an inch (4/4 = 1\", 5/4 = 1.25\", 6/4 = 1.5\", 8/4 = 2\"). Board foot calculations are always based on nominal rough-sawn dimensions before planing (S4S), which typically removes 1/4\" to 1/2\" of thickness and width."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Walnut Dining Table Top Planks",
        subtitle: "A solid black walnut tabletop design consists of four planks, with a total combined volume of 4,320 cubic inches. Calculate the total board footage required.",
        steps: [
          "State given volume: 4,320 in³.",
          "Apply conversion formula: Board Feet = 4,320 ÷ 144.",
          "Perform calculation: 4,320 ÷ 144 = 30.0 FBM.",
          "Add 15% milling waste allowance: 30 × 1.15 = 34.5 FBM.",
          "Final Result: The table top requires 30.0 net board feet (order approximately 35 FBM rough lumber)."
        ]
      },
      {
        title: "Example 2: Hardwood Oak Turning Blank",
        subtitle: "A woodturner cuts a solid white oak turning blank measuring 4 inches × 4 inches × 18 inches (288 cubic inches). Convert this to board feet.",
        steps: [
          "State volume: 288 in³.",
          "Divide by 144: 288 ÷ 144 = 2.0 FBM.",
          "Final Result: The blank contains exactly 2.0 board feet."
        ]
      },
      {
        title: "Example 3: Timber Post Framing Member",
        subtitle: "A structural timber post measures 6 inches × 6 inches × 96 inches (8 feet long), yielding 3,456 cubic inches. Determine the board footage.",
        steps: [
          "State volume: 3,456 in³.",
          "Divide by 144: 3,456 ÷ 144 = 24.0 FBM.",
          "Final Result: The timber post contains exactly 24.0 board feet."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Inches to Board Feet Conversion Reference Table",
    headers: ["Cubic Inches (in³)", "Board Feet (FBM)", "Cubic Feet (ft³)", "Cubic Meters (m³)", "Lumber Dimension Example"],
    rows: [
      { fromVal: "36 in³", toVal: "0.25 FBM", extra: "0.0208 ft³", extra2: "0.00059 m³", extra3: "1\" × 3\" × 12\" craft strip" },
      { fromVal: "72 in³", toVal: "0.50 FBM", extra: "0.0417 ft³", extra2: "0.00118 m³", extra3: "1\" × 6\" × 12\" small board" },
      { fromVal: "144 in³", toVal: "1.00 FBM", extra: "0.0833 ft³", extra2: "0.00236 m³", extra3: "1\" × 12\" × 12\" standard unit board" },
      { fromVal: "288 in³", toVal: "2.00 FBM", extra: "0.1667 ft³", extra2: "0.00472 m³", extra3: "2\" × 6\" × 24\" framing cutoff" },
      { fromVal: "432 in³", toVal: "3.00 FBM", extra: "0.2500 ft³", extra2: "0.00708 m³", extra3: "1\" × 6\" × 72\" (6 ft) shelf board" },
      { fromVal: "576 in³", toVal: "4.00 FBM", extra: "0.3333 ft³", extra2: "0.00944 m³", extra3: "2\" × 4\" × 72\" (6 ft) 2x4 stud" },
      { fromVal: "1,152 in³", toVal: "8.00 FBM", extra: "0.6667 ft³", extra2: "0.01888 m³", extra3: "2\" × 6\" × 96\" (8 ft) framing joist" },
      { fromVal: "1,440 in³", toVal: "10.00 FBM", extra: "0.8333 ft³", extra2: "0.02360 m³", extra3: "5/4\" × 8\" × 144\" hardwood plank" },
      { fromVal: "1,728 in³", toVal: "12.00 FBM", extra: "1.0000 ft³", extra2: "0.02832 m³", extra3: "Exactly 1 cubic foot of solid wood" },
      { fromVal: "3,456 in³", toVal: "24.00 FBM", extra: "2.0000 ft³", extra2: "0.05663 m³", extra3: "6\" × 6\" × 96\" (8 ft) post" },
      { fromVal: "7,200 in³", toVal: "50.00 FBM", extra: "4.1667 ft³", extra2: "0.11799 m³", extra3: "Small furniture project lumber bundle" }
    ]
  },
  applications: {
    title: "Fine Woodworking, Sawmill Milling, & Timber Construction",
    items: [
      {
        title: "CAD & CNC Timber Takeoffs",
        text: "Converting 3D solid model volumes from cubic inches to board feet for accurate raw lumber procurement and job costing."
      },
      {
        title: "Sawmill Log Scale & Lumber Pricing",
        text: "Evaluating raw log yield and billing hardwood species (walnut, cherry, maple) priced per thousand board feet (MBF)."
      },
      {
        title: "Custom Cabinetry & Furniture Making",
        text: "Translating cutting lists of parts into total board footage while budgeting for jointing and planing waste."
      },
      {
        title: "Architectural Timber Truss Engineering",
        text: "Verifying heavy timber framing volumes and calculating dead load weights of Douglas fir and Southern yellow pine beams."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Cubic Inch to Board Foot Conversions",
    items: [
      "Dividing by 1,728 instead of 144, which calculates cubic feet rather than board feet (resulting in an answer 12× too small).",
      "Using actual surfaced dimensions instead of nominal rough dimensions when buying hardwood lumber from commercial sawmills.",
      "Forgetting to include standard milling waste (typically 10% to 20%) for knots, wane, and dimensional planing.",
      "Confusing square feet (surface area) with board feet (three-dimensional volume)."
    ]
  },
  faqs: [
    {
      question: "How do I convert cubic inches to board feet?",
      answer: "Divide the volume in cubic inches by 144 (or multiply by 0.006944). For instance, 720 cubic inches divided by 144 equals 5 board feet."
    },
    {
      question: "How many cubic inches are in 1 board foot?",
      answer: "There are exactly 144 cubic inches in 1 board foot (12 inches wide × 12 inches long × 1 inch thick)."
    },
    {
      question: "How many board feet are in 1 cubic foot?",
      answer: "There are exactly 12 board feet in 1 cubic foot (1,728 cubic inches ÷ 144 cubic inches per board foot = 12 FBM)."
    },
    {
      question: "What is the formula for calculating board feet from inches?",
      answer: "The formula is: Board Feet = (Thickness in inches × Width in inches × Length in inches) ÷ 144."
    },
    {
      question: "What does FBM stand for in lumber measurement?",
      answer: "FBM stands for 'Foot, Board Measure', which is the standard industry abbreviation for a board foot."
    },
    {
      question: "What does MBF mean on lumber price lists?",
      answer: "MBF stands for 'Thousand Board Feet' (using the Roman numeral M for 1,000), a standard wholesale volume unit for bulk lumber."
    },
    {
      question: "How many board feet are in a standard 2x4 stud that is 8 feet long?",
      answer: "A nominal 2x4 that is 8 feet long contains (2 in × 4 in × 96 in) ÷ 144 = 5.33 board feet."
    },
    {
      question: "Why is 144 used as the divisor for board feet?",
      answer: "Because 1 foot equals 12 inches. A nominal board 1 foot wide, 1 foot long, and 1 inch thick has a volume of 12 in × 12 in × 1 in = 144 cubic inches."
    }
  ],
  relatedList: [
    { label: "Board Feet to Cubic Inches", from: "board-foot", to: "cubic-inch" },
    { label: "Cubic Feet to Board Feet", from: "cubic-foot", to: "board-foot" },
    { label: "Board Feet to Cubic Feet", from: "board-foot", to: "cubic-foot" },
    { label: "Cubic Inches to Cubic Feet", from: "cubic-inch", to: "cubic-foot" }
  ],
  references: [
    "National Hardwood Lumber Association (NHLA): Rules for the Measurement & Inspection of Hardwood & Cypress.",
    "US Forest Products Laboratory: Wood Handbook — Wood as an Engineering Material (General Technical Report FPL-GTR-190).",
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices."
  ]
};
