import { CustomArticleData } from "./types";

export const centimeterToFoot: CustomArticleData = {
  fromUnitId: "centimeter",
  toUnitId: "foot",
  seoTitle: "Centimeter to Foot Converter | cm to ft",
  metaDescription: "Convert centimeters to feet (cm to ft) with exact mathematical precision. Includes the 30.48 cm standard, worked height examples, conversion table, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/length/centimeter-to-foot",
  h1: "Centimeter to Foot Converter",
  introduction: [
    "Converting centimeters (cm) to feet (ft) is one of the most frequently searched measurement conversions worldwide. It is central to translating personal height on passports and medical records, converting room dimensions for home renovation, and adapting international architectural plans for US construction standards.",
    "Since the 1959 International Yard and Pound Agreement, one international foot is defined as exactly 0.3048 meters, which corresponds to exactly 30.48 centimeters. This educational guide breaks down the conversion formula, provides clear step-by-step examples (including human height in feet and inches), details a practical reference table, and answers common conversion questions."
  ],
  quickAnswer: {
    text: "One centimeter is equal to approximately 0.0328084 feet. Conversely, one international foot contains exactly 30.48 centimeters (12 inches).",
    formulaDisplay: "1 cm ≈ 0.0328084 ft",
    subtext: "To convert centimeters to feet, divide the centimeter value by 30.48, or multiply by 0.0328084."
  },
  aboutSourceUnit: {
    title: "Understanding the Centimeter (cm)",
    text: "The centimeter is an official decimal fraction of the meter in the International System of Units (SI), equal to 1/100 of a meter (10⁻² meters). Centimeters are the universal standard for measuring human body height, clothing sizes, furniture dimensions, and consumer goods across almost all countries outside the United States."
  },
  aboutTargetUnit: {
    title: "Understanding the Foot (ft)",
    text: "The international foot is a traditional unit of length in the imperial and US customary systems, defined as exactly 12 inches or 0.3048 meters (30.48 cm). Historically derived from the length of a human foot in ancient Greece and Rome, the modern foot is the standard unit for personal height, building ceiling heights, and aviation altitudes in the United States and the United Kingdom."
  },
  relationship: "Because one international foot contains 12 inches and each inch is defined as exactly 2.54 centimeters, 1 foot equals 12 × 2.54 = 30.48 centimeters exactly.",
  relationshipItems: [
    { label: "Centimeters to Feet", value: "1 cm ≈ 0.0328084 ft" },
    { label: "Feet to Centimeters", value: "1 ft = 30.48 cm (exact)" },
    { label: "Inches in a Foot", value: "1 ft = 12 in = 30.48 cm" }
  ],
  formula: {
    text: "To convert centimeters to decimal feet, divide the centimeter value by 30.48. Alternatively, multiply by 0.0328084.",
    math: "Feet (ft) = Centimeters (cm) / 30.48 ≈ Centimeters (cm) × 0.0328084",
    subtext: "The divisor 30.48 is exact by international treaty (12 inches × 2.54 cm/inch)."
  },
  practicalTip: {
    title: "Converting to Feet and Inches",
    text: "To convert decimal feet to feet and inches: take the whole number as feet, multiply the remaining decimal part by 12 to get inches. For example, 180 cm / 30.48 = 5.9055 ft. 0.9055 × 12 ≈ 10.87 inches (roughly 5 feet 11 inches)."
  },
  examples: {
    title: "Step-by-Step Conversion Scenarios",
    items: [
      {
        title: "Example 1: Converting Human Height (175 cm)",
        subtitle: "Convert a personal height of 175 centimeters to decimal feet and feet/inches.",
        steps: [
          "State the starting length: 175 cm.",
          "Apply the formula: Divide by 30.48.",
          "Calculate decimal feet: 175 / 30.48 ≈ 5.7415 ft.",
          "Convert remainder to inches: 0.7415 × 12 ≈ 8.9 inches.",
          "Final result: 175 cm is approximately 5.74 feet, or roughly 5 feet 9 inches."
        ]
      },
      {
        title: "Example 2: Sizing an Interior Doorway",
        subtitle: "Convert a door height of 203.2 centimeters to feet.",
        steps: [
          "State the starting height: 203.2 cm.",
          "Divide by 30.48: 203.2 / 30.48 = 6.6667 ft.",
          "Multiply 0.6667 by 12: exactly 8 inches.",
          "Conclusion: 203.2 cm is equal to exactly 6 feet 8 inches (6.67 ft)."
        ]
      },
      {
        title: "Example 3: Room Dimension Clearance",
        subtitle: "Convert a ceiling height of 300 centimeters into feet.",
        steps: [
          "Identify the starting length: 300 cm.",
          "Divide by 30.48: 300 / 30.48 ≈ 9.8425 ft.",
          "Convert remainder: 0.8425 × 12 ≈ 10.1 inches.",
          "Final answer: 300 cm equals approximately 9.84 feet (or 9 feet 10 inches)."
        ]
      }
    ]
  },
  table: {
    title: "Centimeter to Foot Reference Table",
    headers: ["Centimeters (cm)", "Decimal Feet (ft)", "Feet & Inches (approx.)", "Context / Common Application"],
    rows: [
      { fromVal: "30.48", toVal: "1.0000", extra: "1 ft 0 in", extra2: "Standard ruler length (12 inches)" },
      { fromVal: "60.96", toVal: "2.0000", extra: "2 ft 0 in", extra2: "Standard kitchen counter depth" },
      { fromVal: "91.44", toVal: "3.0000", extra: "3 ft 0 in", extra2: "Exactly 1 yard / kitchen counter height" },
      { fromVal: "150", toVal: "4.9213", extra: "4 ft 11 in", extra2: "Petite adult human height" },
      { fromVal: "160", toVal: "5.2493", extra: "5 ft 3 in", extra2: "Average adult female height (global)" },
      { fromVal: "170", toVal: "5.5774", extra: "5 ft 7 in", extra2: "Common adult height" },
      { fromVal: "175", toVal: "5.7415", extra: "5 ft 9 in", extra2: "Average adult male height (US/UK)" },
      { fromVal: "180", toVal: "5.9055", extra: "5 ft 11 in", extra2: "Tall adult height" },
      { fromVal: "182.88", toVal: "6.0000", extra: "6 ft 0 in", extra2: "Exactly 6 feet threshold" },
      { fromVal: "200", toVal: "6.5617", extra: "6 ft 7 in", extra2: "Standard interior door frame" },
      { fromVal: "304.8", toVal: "10.0000", extra: "10 ft 0 in", extra2: "Standard basketball hoop height" }
    ]
  },
  applications: {
    title: "Real-World Contexts & Applications",
    items: [
      {
        title: "Medical Records & Immigration Documents",
        text: "Passports, driver's licenses, and international clinical charts routinely require translating personal height between centimeters (used in Europe, Asia, and Latin America) and feet/inches (used in the US)."
      },
      {
        title: "Architecture & Construction Blueprints",
        text: "Building components manufactured abroad (such as metric doors, windows, and tiles) must be converted into feet and fractional inches for framing and installation by North American contractors."
      },
      {
        title: "Aviation & Aerodynamics",
        text: "While aircraft manufacturing blueprints often use metric millimeters and centimeters, cockpit altimeters and flight level clearances are globally calibrated in thousands of feet."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing decimal feet with inches: 5.8 feet does not mean 5 feet 8 inches. 0.8 feet is 0.8 × 12 = 9.6 inches, so 5.8 ft is roughly 5 feet 10 inches.",
      "Using 30 cm instead of 30.48 cm: Approximating 1 foot as 30 cm causes an error of nearly 0.5 cm per foot, accumulating to over 5 cm of error across a 10-foot room.",
      "Multiplying instead of dividing: To convert cm to ft, divide by 30.48. Multiplying by 30.48 converts feet to centimeters.",
      "Confusing survey feet with international feet: The US survey foot differs by 2 parts per million (1 m = 39.37 in), but the international foot (30.48 cm exactly) is the standard for all consumer and engineering calculations."
    ]
  },
  faqs: [
    {
      question: "How many centimeters are in one foot?",
      answer: "There are exactly 30.48 centimeters in one international foot. This derives from 12 inches × 2.54 cm per inch."
    },
    {
      question: "What is the formula to convert centimeters to feet?",
      answer: "The formula is: Feet = Centimeters / 30.48, or Feet = Centimeters × 0.0328084."
    },
    {
      question: "How do you convert 170 cm to feet and inches?",
      answer: "Divide 170 by 30.48 to get 5.577 feet. Take the decimal remainder 0.577 and multiply by 12 to get approximately 6.9 inches. Thus, 170 cm is roughly 5 feet 7 inches."
    },
    {
      question: "How do you convert 180 cm to feet and inches?",
      answer: "Divide 180 by 30.48 to get 5.9055 feet. Multiplying 0.9055 by 12 yields approximately 10.87 inches, which rounds to 5 feet 11 inches."
    },
    {
      question: "How do you convert feet back to centimeters?",
      answer: "To convert feet back to centimeters, multiply the foot value by 30.48. For example, 6 feet multiplied by 30.48 equals exactly 182.88 cm."
    },
    {
      question: "Is 1 foot equal to 30 cm?",
      answer: "No, 1 foot is exactly 30.48 cm. While 30 cm is a common rough estimate, using it causes an error of almost half a centimeter per foot."
    },
    {
      question: "What is the official abbreviation for feet?",
      answer: "The standard international abbreviation is 'ft'. In informal writing, the prime symbol (′) is also used."
    },
    {
      question: "Why was 30.48 cm chosen as the international foot standard?",
      answer: "In 1959, English-speaking nations harmonized their standards by defining the international inch as exactly 25.4 mm (2.54 cm). Twelve inches therefore equals exactly 30.48 cm."
    }
  ],
  relatedList: [
    { label: "Foot to Centimeter", from: "foot", to: "centimeter" },
    { label: "Centimeter to Inch", from: "centimeter", to: "inch" },
    { label: "Centimeter to Meter", from: "centimeter", to: "meter" },
    { label: "Centimeter to Yard", from: "centimeter", to: "yard" },
    { label: "Centimeter to Millimeter", from: "centimeter", to: "millimeter" },
    { label: "Centimeter to Mile", from: "centimeter", to: "mile" },
    { label: "Meter to Foot", from: "meter", to: "foot" }
  ],
  references: [
    "BIPM (International Bureau of Weights and Measures) - The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) Handbook 44 - Appendix C: General Tables of Units of Measurement.",
    "1959 International Yard and Pound Agreement (US National Bureau of Standards, Federal Register Doc. 59-5442)."
  ]
};
