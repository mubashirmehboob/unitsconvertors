import { CustomArticleData } from "./types";

export const literToCubicFoot: CustomArticleData = {
  fromUnitId: "liter",
  toUnitId: "cubic-foot",
  seoTitle: "Liter to Cubic Foot Converter - L to ft³",
  metaDescription: "Convert liters to cubic feet (L to ft³) accurately. Learn the conversion formula (1 L ≈ 0.035315 ft³), view HVAC and storage examples, and explore reference tables.",
  h1: "Liter to Cubic Foot Converter",
  introduction: [
    "Converting liquid capacity and geometric space between metric liters and imperial cubic feet is common in HVAC design, appliance manufacturing, cargo shipping, and construction. While liters measure fluid container capacities, cubic feet measure three-dimensional enclosed spaces like refrigerator interiors, trunk spaces, and room air volumes.",
    "Because one cubic foot is equal to approximately 28.3168 liters, converting liters to cubic feet requires dividing the liter value by 28.31685 (or multiplying by 0.035315). This guide covers the mathematical formula, worked calculations, and practical conversion charts."
  ],
  quickAnswer: {
    text: "To convert liters to cubic feet, divide the liter value by 28.31685 (or multiply by 0.035315). For example, 100 liters is equal to approximately 3.53 cubic feet.",
    formulaDisplay: "1 L ≈ 0.035315 ft³",
    subtext: "1 cubic foot contains approximately 28.31685 liters."
  },
  aboutSourceUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L) is a standard metric unit of volume equal to 1 cubic decimeter (dm³). It is used globally for consumer product packaging, liquid fuel capacities, and chemical volumes."
  },
  aboutTargetUnit: {
    title: "Understanding the Cubic Foot (ft³)",
    text: "The cubic foot (symbol: ft³ or cu ft) is an imperial and US customary unit of volume representing a cube measuring 1 foot (12 inches) on each side. It is standard in the United States and UK for measuring refrigerator capacities, storage box volumes, shipping containers, and gas flow rates."
  },
  relationship: "One foot equals 0.3048 meters (3.048 decimeters). Cubing this dimension gives 1 ft³ = (3.048 dm)³ = 28.316846592 cubic decimeters (liters). Reversing this yields 1 liter = 1 / 28.316846592 ≈ 0.0353146667 ft³.",
  relationshipTitle: "Metric vs Imperial Spatial Volume",
  relationshipItems: [
    { label: "1 Liter (L)", value: "≈ 0.035315 Cubic Feet (ft³)" },
    { label: "1 Cubic Foot (ft³)", value: "≈ 28.31685 Liters (L)" }
  ],
  formula: {
    text: "To find volume in cubic feet, divide the liter value by 28.31685, or multiply by 0.0353147.",
    math: "Volume in Cubic Feet (ft³) = Volume in Liters (L) / 28.31685",
    subtext: "Alternatively: ft³ = Liters × 0.0353147."
  },
  formulaTitle: "The Liter to Cubic Foot Formula",
  practicalTip: {
    title: "Quick Estimation Rule",
    text: "For a quick mental estimate, divide the liters by 28, or multiply by 0.035. 280 liters is roughly 10 cubic feet."
  },
  expertNote: {
    title: "Appliance Volume Specifications",
    text: "Refrigerator manufacturers in North America specify capacity in cubic feet, whereas European manufacturers use liters. A 500-liter European refrigerator equals about 17.6 cubic feet."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Refrigerator Capacity",
        subtitle: "A kitchen refrigerator is rated at 420 liters. Convert this capacity to cubic feet.",
        steps: [
          "Identify the volume in liters: 420 L.",
          "Apply the conversion formula: ft³ = L / 28.31685.",
          "Perform the division: 420 / 28.31685 = 14.832.",
          "Result: 420 liters is approximately 14.83 cubic feet."
        ]
      },
      {
        title: "Example 2: Vehicle Trunk Space",
        subtitle: "A sedan hatchback offers 550 liters of cargo trunk space. Calculate its capacity in cubic feet.",
        steps: [
          "Identify the volume: 550 L.",
          "Multiply by 0.035315: 550 × 0.035315 = 19.423.",
          "Result: 550 liters equals approximately 19.42 cubic feet."
        ]
      }
    ]
  },
  table: {
    title: "Liter to Cubic Foot Reference Table",
    headers: ["Liters (L)", "Cubic Feet (ft³)", "Common Appliance / Cargo Context"],
    rows: [
      { fromVal: "10 L", toVal: "0.35 ft³", extra: "Compact hiking backpack" },
      { fromVal: "50 L", toVal: "1.77 ft³", extra: "Large duffel bag" },
      { fromVal: "100 L", toVal: "3.53 ft³", extra: "Mini dorm refrigerator" },
      { fromVal: "200 L", toVal: "7.06 ft³", extra: "Chest freezer" },
      { fromVal: "350 L", toVal: "12.36 ft³", extra: "Apartment refrigerator" },
      { fromVal: "500 L", toVal: "17.66 ft³", extra: "Full-sized family refrigerator" },
      { fromVal: "750 L", toVal: "26.49 ft³", extra: "Large French-door refrigerator" },
      { fromVal: "1,000 L", toVal: "35.31 ft³", extra: "1 cubic meter container" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "Home Appliance Shopping",
        text: "Comparing international refrigerator and freezer models requires converting between European liter ratings and North American cubic foot specifications."
      },
      {
        title: "Automotive Cargo Sizing",
        text: "Automobile reviews compare luggage space across global vehicle models using liters and cubic feet."
      },
      {
        title: "HVAC & Air Handling",
        text: "Heating and air conditioning engineers convert air exchange rates and room volumes between cubic feet and liters per second."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 28.3168 instead of dividing: Liters are smaller than cubic feet, so the number of cubic feet must be smaller.",
      "Confusing fluid ounces with cubic feet: 1 ft³ contains 28.32 L, not 28.32 fl oz.",
      "Rounding the factor too early: Using 0.035 instead of 0.035315 can create significant errors when converting large industrial volumes."
    ]
  },
  faqs: [
    {
      question: "How many cubic feet are in one liter?",
      answer: "There are approximately 0.0353147 cubic feet in 1 liter."
    },
    {
      question: "How many liters are in one cubic foot?",
      answer: "One cubic foot contains approximately 28.31685 liters."
    },
    {
      question: "How do I convert 500 liters to cubic feet?",
      answer: "Divide 500 by 28.31685 to get approximately 17.66 cubic feet."
    },
    {
      question: "What is a 300-liter refrigerator in cubic feet?",
      answer: "300 liters divided by 28.31685 equals approximately 10.59 cubic feet."
    },
    {
      question: "Is 1 cubic foot larger than 1 liter?",
      answer: "Yes, 1 cubic foot is much larger than 1 liter (1 ft³ = ~28.32 L)."
    },
    {
      question: "How many cubic feet is 1,000 liters?",
      answer: "1,000 liters divided by 28.31685 equals approximately 35.31 cubic feet."
    },
    {
      question: "Why do appliances use cubic feet in the US and liters in Europe?",
      answer: "The United States uses US Customary units where room and cabinet dimensions are measured in feet, while Europe uses the metric system based on meters and liters."
    },
    {
      question: "What is 100 liters in cubic feet?",
      answer: "100 liters divided by 28.31685 equals approximately 3.53 cubic feet."
    }
  ],
  relatedList: [
    { label: "Liter to Cubic Meter", from: "liter", to: "cubic-meter" },
    { label: "Liter to Cubic Inch", from: "liter", to: "cubic-inch" },
    { label: "Liter to Gallon (US)", from: "liter", to: "gallon-us" },
    { label: "Liter to Milliliter", from: "liter", to: "milliliter" }
  ],
  references: [
    "NIST Handbook 44 - Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices",
    "ASHRAE Handbook - Fundamentals: Measurement Units and Conversions"
  ]
};
