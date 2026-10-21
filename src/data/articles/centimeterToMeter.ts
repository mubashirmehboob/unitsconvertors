import { CustomArticleData } from "./types";

export const centimeterToMeter: CustomArticleData = {
  fromUnitId: "centimeter",
  toUnitId: "meter",
  seoTitle: "Centimeter to Meter Converter | cm to m",
  metaDescription: "Convert centimeters to meters (cm to m) with perfect decimal accuracy. Includes official SI definitions, formulas, worked examples, table, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/length/centimeter-to-meter",
  h1: "Centimeter to Meter Converter",
  introduction: [
    "Converting centimeters (cm) to meters (m) is one of the most common and fundamental mathematical operations in both daily life and technical disciplines. Whether you are measuring room dimensions for architectural plans, recording human height in a clinic, or preparing technical drawings for manufacturing, moving between centimeters and meters is essential.",
    "Because both centimeters and meters belong to the International System of Units (SI), they share a clean decimal relationship based on powers of ten. One centimeter represents one hundredth of a meter. This guide outlines the exact conversion factor, manual calculation techniques, practical real-world examples, and a standard reference table to ensure your calculations are fast and accurate."
  ],
  quickAnswer: {
    text: "One centimeter is equal to exactly 0.01 meters (1/100 of a meter). Conversely, one meter contains exactly 100 centimeters.",
    formulaDisplay: "1 cm = 0.01 m",
    subtext: "To convert centimeters to meters, divide the centimeter value by 100, or shift the decimal point two places to the left."
  },
  aboutSourceUnit: {
    title: "Understanding the Centimeter (cm)",
    text: "The centimeter is a decimal submultiple of the SI base unit of length, the meter. Derived from the Latin prefix 'centi-' meaning one hundredth, one centimeter is defined as exactly 1/100 of a meter (10⁻² meters). In everyday life, centimeters are widely used across Europe, Asia, Latin America, and Canada to describe personal height, clothing dimensions, consumer electronics, and construction material thicknesses."
  },
  aboutTargetUnit: {
    title: "Understanding the Meter (m)",
    text: "The meter is the primary base unit of length in the International System of Units (SI). Originally defined in 1793 as one ten-millionth of the distance from the equator to the North Pole, the meter was redefined in 1983 by the General Conference on Weights and Measures (CGPM) using fundamental physics: the distance traveled by light in a vacuum during a time interval of exactly 1/299,792,458 of a second. This makes the meter reproducible to extreme precision worldwide."
  },
  relationship: "The centimeter and the meter are linked by an exact decimal factor of 100. Because the metric system is base-10, converting from centimeters to meters simply requires dividing by 100.",
  relationshipItems: [
    { label: "Centimeters to Meters", value: "1 cm = 0.01 m (exact)" },
    { label: "Meters to Centimeters", value: "1 m = 100 cm (exact)" },
    { label: "Decimal Shift", value: "Shift decimal point 2 places left" }
  ],
  formula: {
    text: "To find meters from centimeters, divide the number of centimeters by 100, or multiply by the decimal multiplier 0.01.",
    math: "Meters (m) = Centimeters (cm) / 100 = Centimeters (cm) × 0.01",
    subtext: "Because 100 is an exact integer, this conversion never introduces repeating decimals or rounding errors."
  },
  practicalTip: {
    title: "Decimal Movement Rule",
    text: "Whenever converting centimeters to meters without a calculator, just move the decimal point two places to the left. For instance, 275.0 cm becomes 2.75 m instantly."
  },
  examples: {
    title: "Step-by-Step Conversion Scenarios",
    items: [
      {
        title: "Example 1: Measuring Human Height",
        subtitle: "Convert a person's height of 178 centimeters into meters.",
        steps: [
          "State the starting length: 178 cm.",
          "Apply the formula: Divide by 100.",
          "Perform the arithmetic: 178 / 100 = 1.78.",
          "State the final result: 178 cm is equal to exactly 1.78 meters."
        ]
      },
      {
        title: "Example 2: Sizing a Furniture Piece",
        subtitle: "Convert a 240 cm dining table length to meters.",
        steps: [
          "State the starting length: 240 cm.",
          "Multiply by 0.01: 240 × 0.01 = 2.40.",
          "State the final result: 240 cm equals exactly 2.4 meters."
        ]
      },
      {
        title: "Example 3: Small Component Dimension",
        subtitle: "Convert a 4.5 cm sensor casing width to meters.",
        steps: [
          "Identify the starting length: 4.5 cm.",
          "Shift the decimal two positions left: 4.5 / 100 = 0.045.",
          "Final answer: 4.5 cm is equivalent to exactly 0.045 meters."
        ]
      }
    ]
  },
  table: {
    title: "Centimeter to Meter Reference Table",
    headers: ["Centimeters (cm)", "Meters (m)", "Context / Common Application"],
    rows: [
      { fromVal: "1", toVal: "0.01", extra: "Width of an average adult fingernail" },
      { fromVal: "5", toVal: "0.05", extra: "Diameter of a standard beverage can" },
      { fromVal: "10", toVal: "0.10", extra: "One decimeter (palm width)" },
      { fromVal: "25", toVal: "0.25", extra: "Length of a standard dinner plate" },
      { fromVal: "50", toVal: "0.50", extra: "Half a meter (standard chair height)" },
      { fromVal: "100", toVal: "1.00", extra: "Exactly one meter (doorway width)" },
      { fromVal: "150", toVal: "1.50", extra: "Typical desk length" },
      { fromVal: "175", toVal: "1.75", extra: "Average adult human height" },
      { fromVal: "200", toVal: "2.00", extra: "Standard interior door height" },
      { fromVal: "500", toVal: "5.00", extra: "Standard passenger vehicle length" },
      { fromVal: "1,000", toVal: "10.00", extra: "Length of a swimming pool lap lane section" }
    ]
  },
  applications: {
    title: "Real-World Contexts & Applications",
    items: [
      {
        title: "Architecture & Interior Design",
        text: "Building blueprints and room floor plans typically specify overall wall lengths and room spans in meters, whereas cabinetry, trim, and doorway framing components are measured in centimeters."
      },
      {
        title: "Clinical Medicine & Ergonomics",
        text: "Healthcare providers routinely record patient height in centimeters on clinical scales and convert the measurement to meters to calculate Body Mass Index (BMI = kg / m²)."
      },
      {
        title: "Manufacturing & Quality Assurance",
        text: "Product packaging, cardboard carton sizing, and warehouse racking use centimeters for individual items and meters for freight pallets and container shipping volumes."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying instead of dividing: Remember that a meter is much larger than a centimeter; your result in meters must always be a smaller numeric value than the centimeter figure.",
      "Decimal shifting in the wrong direction: Moving the decimal to the right turns 150 cm into 15,000 m, which is a massive error. Always shift two places to the left.",
      "Confusing millimeters with centimeters: Millimeters divide by 1,000 to reach meters, whereas centimeters divide by 100.",
      "Omitting leading zeros for small values: When converting 3 cm, remember to place the leading zero correctly: 0.03 m, not 0.3 m (which would be 30 cm)."
    ]
  },
  faqs: [
    {
      question: "How many centimeters are in one meter?",
      answer: "There are exactly 100 centimeters in one meter. This definition is standardized by the International System of Units (SI)."
    },
    {
      question: "What is the simplest way to convert centimeters to meters?",
      answer: "To convert centimeters to meters, divide your centimeter value by 100, or move the decimal point two digits to the left. For example, 150 cm becomes 1.5 m."
    },
    {
      question: "Is 100 cm equal to 1 meter?",
      answer: "Yes, 100 cm is exactly equal to 1 meter. The prefix 'centi-' means one hundredth, meaning 100 hundredths make a whole meter."
    },
    {
      question: "How do you convert 175 cm to meters?",
      answer: "Divide 175 by 100 to obtain 1.75 meters. This is a common conversion used for human height."
    },
    {
      question: "What is the formula for converting centimeters to meters?",
      answer: "The formula is: Meters = Centimeters / 100, or Meters = Centimeters × 0.01."
    },
    {
      question: "How do you convert meters back to centimeters?",
      answer: "To convert meters back to centimeters, multiply the meter value by 100. For example, 2.5 meters multiplied by 100 equals 250 centimeters."
    },
    {
      question: "What are the official abbreviations for centimeter and meter?",
      answer: "The standard international symbols are 'cm' for centimeter and 'm' for meter, written in lowercase without periods."
    },
    {
      question: "Why does BMI calculation require height in meters instead of centimeters?",
      answer: "The Body Mass Index formula is defined in SI units as weight in kilograms divided by the square of height in meters (kg/m²). Using centimeters would produce an incorrect result by a factor of 10,000."
    }
  ],
  relatedList: [
    { label: "Meter to Centimeter", from: "meter", to: "centimeter" },
    { label: "Centimeter to Millimeter", from: "centimeter", to: "millimeter" },
    { label: "Centimeter to Kilometer", from: "centimeter", to: "kilometer" },
    { label: "Centimeter to Inch", from: "centimeter", to: "inch" },
    { label: "Centimeter to Foot", from: "centimeter", to: "foot" },
    { label: "Centimeter to Yard", from: "centimeter", to: "yard" },
    { label: "Centimeter to Micrometer", from: "centimeter", to: "micrometer" },
    { label: "Centimeter to Nanometer", from: "centimeter", to: "nanometer" },
    { label: "Centimeter to Mile", from: "centimeter", to: "mile" }
  ],
  references: [
    "BIPM (International Bureau of Weights and Measures) - The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) - Guide for the Use of the International System of Units (SP 811).",
    "ISO 80000-3:2019 - Quantities and units — Part 3: Space and time."
  ]
};
