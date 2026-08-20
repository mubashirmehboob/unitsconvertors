import { CustomArticleData } from "./types";

export const milliliterToCubicFoot: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "cubic-foot",
  seoTitle: "Milliliter to Cubic Foot Converter - mL to ft³",
  metaDescription: "Convert milliliters to cubic feet (mL to ft³). Exact conversion formula (1 ft³ = 28,316.85 mL), step-by-step calculations, HVAC & gas engineering tables.",
  h1: "Milliliter to Cubic Foot Converter",
  introduction: [
    "In HVAC engineering, compressed gas storage, laboratory ventilation design, and international shipping logistics, engineers frequently need to convert fine metric liquid volumes (milliliters) into imperial cubic feet (ft³). While laboratory chemistry, medical supplies, and reagent bottles are calibrated in milliliters or liters, building ventilation flow rates (CFM - cubic feet per minute), refrigerator internal capacities, and air compressor tank volumes across North America are specified in cubic feet.",
    "Because one cubic foot holds more than 28,000 milliliters, understanding this conversion factor ensures accurate sizing of environmental filtration systems, precise gas evaporation calculations, and reliable cargo cubic utilization. This technical guide explains the mathematical derivation, conversion formulas, worked engineering examples, reference tables, and real-world industrial applications."
  ],
  quickAnswer: {
    text: "To convert milliliters to cubic feet, divide the volume in milliliters by 28,316.85 (or multiply by 0.0000353147 / 3.5315 × 10⁻⁵). For example, 10,000 mL equals approximately 0.353 cubic feet.",
    formulaDisplay: "1 ft³ = 28,316.8466 mL | Volume (ft³) = Volume (mL) ÷ 28,316.8466",
    subtext: "One cubic foot equals exactly 1,728 cubic inches or 28.316846592 liters (28,316.8466 mL). Dividing 1 by 28,316.85 yields 0.0000353147 ft³ per mL."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL or ml) is a metric unit of liquid volume equal to one-thousandth of a liter (10⁻³ L) or 1 cubic centimeter (1 cm³ / cc). It is the global benchmark for chemical laboratory titrations, pharmaceutical liquid dosing, and consumer fluid packaging."
  },
  aboutTargetUnit: {
    title: "Understanding the Cubic Foot (ft³)",
    text: "The cubic foot (symbol: ft³ or cu ft) is an imperial and US customary unit of volume defined as the three-dimensional space enclosed by a cube with sides of exactly 1 foot (12 inches / 0.3048 meters). One cubic foot equals exactly 1,728 cubic inches, 28.316846592 liters (28,316.8466 mL), or approximately 7.48052 US liquid gallons."
  },
  relationship: "One international foot equals exactly 0.3048 meters. Cubing this length yields $(0.3048\\text{ m})^3 = 0.028316846592\\text{ m}^3$, which equals exactly 28.316846592 liters or 28,316.846592 milliliters. Therefore, dividing any milliliter volume by 28,316.85 converts it directly into cubic feet.",
  relationshipTitle: "Metric to Imperial Volume Hierarchy: mL vs ft³",
  relationshipItems: [
    { label: "1 Cubic Foot (ft³)", value: "exactly 28,316.8466 Milliliters (mL)" },
    { label: "1 Cubic Foot (ft³)", value: "exactly 28.31685 Liters (L)" },
    { label: "1 Milliliter (mL)", value: "approx. 0.0000353147 Cubic Feet (ft³)" },
    { label: "1 Liter (1,000 mL)", value: "approx. 0.0353147 Cubic Feet (ft³)" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 28,316.846592 to convert to cubic feet, or multiply by 0.00003531467.",
    math: "Volume in Cubic Feet (ft³) = Volume in Milliliters (mL) ÷ 28,316.846592",
    subtext: "Alternatively: Volume in Cubic Feet = (Volume in mL ÷ 1,000) ÷ 28.316847"
  },
  formulaTitle: "Milliliter to Cubic Foot Conversion Formula",
  practicalTip: {
    title: "The 28.3 Liters Rule",
    text: "To convert in your head, first convert milliliters to liters (divide by 1,000), then divide the liters by 28.3. For example, 56,600 mL = 56.6 L; dividing 56.6 by 28.3 gives approximately 2.0 cubic feet."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Laboratory Fume Hood Exhaust Scrubbing",
        subtitle: "A chemical experiment releases 14,150 mL of condensed acidic vapor. Convert this volume into cubic feet.",
        steps: [
          "State the given volume: Volume = 14,150 mL.",
          "Apply the conversion formula: Volume (ft³) = Volume (mL) ÷ 28,316.8466.",
          "Substitute the value: Volume (ft³) = 14,150 ÷ 28,316.846592.",
          "Perform the division: Volume (ft³) = 0.4997 ft³.",
          "Conclude: The vapor volume equals approximately 0.50 cubic feet (half a cubic foot)."
        ]
      },
      {
        title: "Example 2: Compressed Gas Cylinder Expansion",
        subtitle: "A pressurized liquid nitrogen cylinder holds 70,000 mL of cryogenic liquid. Find the liquid volume in cubic feet.",
        steps: [
          "State the initial volume: Volume = 70,000 mL.",
          "Multiply by the factor: 70,000 × 0.00003531467.",
          "Calculate the product: 70,000 × 0.00003531467 = 2.4720 ft³.",
          "Conclude: The liquid cylinder capacity is approximately 2.47 cubic feet."
        ]
      },
      {
        title: "Example 3: Refrigerator Internal Compartment Capacity",
        subtitle: "A specialized laboratory biomedical freezer has a compartment volume of 85,000 mL. Express this space in cubic feet.",
        steps: [
          "Identify the volume: Volume = 85,000 mL.",
          "Set up the equation: Volume (ft³) = 85,000 ÷ 28,316.846592.",
          "Compute the result: 85,000 ÷ 28,316.846592 = 3.0017 ft³.",
          "Conclude: The freezer volume is approximately 3.00 cubic feet."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to Cubic Foot Conversion Table",
    headers: ["Milliliters (mL)", "Cubic Feet (ft³)", "Liters (L)", "Engineering Benchmark"],
    rows: [
      { fromVal: "1,000 mL", toVal: "0.0353 ft³", extra: "1.0 L", extra2: "Standard 1-liter bottle volume" },
      { fromVal: "5,000 mL", toVal: "0.1766 ft³", extra: "5.0 L", extra2: "5-liter laboratory jug" },
      { fromVal: "10,000 mL", toVal: "0.3531 ft³", extra: "10.0 L", extra2: "Small benchtop ultrasonic cleaner" },
      { fromVal: "28,317 mL", toVal: "1.0000 ft³", extra: "28.32 L", extra2: "Exact definition of 1.0 Cubic Foot" },
      { fromVal: "50,000 mL", toVal: "1.7657 ft³", extra: "50.0 L", extra2: "Compact mini-refrigerator chamber" },
      { fromVal: "100,000 mL", toVal: "3.5315 ft³", extra: "100.0 L", extra2: "Standard undercounter cooler capacity" },
      { fromVal: "250,000 mL", toVal: "8.8287 ft³", extra: "250.0 L", extra2: "Apartment-size refrigerator interior" },
      { fromVal: "500,000 mL", toVal: "17.6573 ft³", extra: "500.0 L", extra2: "Full-size domestic French-door refrigerator" },
      { fromVal: "1,000,000 mL", toVal: "35.3147 ft³", extra: "1,000.0 L", extra2: "1 Cubic Meter (1 m³ / IBC Tote)" }
    ]
  },
  applications: {
    title: "HVAC, Cryogenics & Laboratory Engineering Applications",
    items: [
      {
        title: "HVAC Air Handling & Vapor Evaporation Models",
        text: "Building mechanical engineers calculate the room humidity contribution of liquid chemical spills and humidifier reservoirs (measured in mL) relative to room air change volume (CFM and total ft³)."
      },
      {
        title: "Cryogenic Gas Expansion & Cylinder Sizing",
        text: "Safety officers calculating room asphyxiation risks determine the volume of gas released when liquid nitrogen (mL) expands 694-fold into cubic feet of ambient air."
      },
      {
        title: "Cold Storage & Appliance Volume Rating",
        text: "Appliance manufacturers convert internal metric test chamber measurements (mL / L) into cubic feet (cu ft) for North American consumer energy ratings and sales specifications."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing cubic feet with cubic yards: 1 cubic yard contains 27 cubic feet (764,555 mL).",
      "Forgetting to divide by 1,000 when using liter conversion factors: If using 28.32, make sure your input is in liters, not milliliters (or divide by 28,316.85 directly).",
      "Using linear foot conversion factors: Remember that volume conversion requires cubing the linear factor ($0.3048^3$)."
    ]
  },
  faqs: [
    {
      question: "How many milliliters are in 1 cubic foot?",
      answer: "There are exactly 28,316.846592 milliliters (approximately 28,317 mL or 28.317 liters) in one cubic foot."
    },
    {
      question: "What is the formula to convert mL to ft³?",
      answer: "The formula is: Volume in ft³ = Volume in mL ÷ 28,316.846592 (or Volume in mL × 0.00003531467)."
    },
    {
      question: "How many cubic feet is 1,000 mL (1 liter)?",
      answer: "1,000 mL (1 liter) is equal to approximately 0.0353147 cubic feet."
    },
    {
      question: "How many cubic feet is 100,000 mL (100 liters)?",
      answer: "100,000 mL is equal to approximately 3.53147 cubic feet (100 ÷ 28.31685 = 3.53147 ft³)."
    },
    {
      question: "How do I convert cubic feet back to milliliters?",
      answer: "To convert cubic feet to milliliters, multiply the cubic foot value by 28,316.8466 (for example, 2 ft³ × 28,316.85 = 56,633.7 mL)."
    },
    {
      question: "How many gallons are in 1 cubic foot compared to milliliters?",
      answer: "One cubic foot equals approximately 7.4805 US liquid gallons, which equals 28,316.85 mL."
    },
    {
      question: "Why is the conversion factor 28,316.85?",
      answer: "One international foot is defined as 0.3048 meters. Cubing 0.3048 gives 0.028316846592 m³. Since 1 m³ = 1,000,000 mL, multiplying by 1,000,000 gives 28,316.846592 mL."
    },
    {
      question: "What is the abbreviation for cubic foot and milliliter?",
      answer: "Cubic feet is abbreviated as 'ft³' or 'cu ft', and milliliter is symbolized as 'mL'."
    }
  ],
  relatedList: [
    { label: "Cubic Foot to Milliliter", from: "cubic-foot", to: "milliliter" },
    { label: "Milliliter to Liter", from: "milliliter", to: "liter" },
    { label: "Liter to Cubic Foot", from: "liter", to: "cubic-foot" },
    { label: "Milliliter to Cubic Inch", from: "milliliter", to: "cubic-inch" }
  ],
  references: [
    "NIST Handbook 44 — Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices",
    "ASHRAE Handbook — Fundamentals: Units and Conversions",
    "ISO 80000-3:2019 — Quantities and Units (Space and Time)"
  ]
};
