import { CustomArticleData } from "./types";

export const meterToCentimeter: CustomArticleData = {
  fromUnitId: "meter",
  toUnitId: "centimeter",
  seoTitle: "Meter to Centimeter Converter - m to cm",
  metaDescription: "Convert meters to centimeters (m to cm) with maximum precision. Learn the conversion formula, step-by-step calculations, reference table, and helpful FAQs.",
  h1: "Meter to Centimeter Converter",
  introduction: [
    "Converting meters (m) to centimeters (cm) is one of the most frequently performed measurements in classrooms, design workshops, and scientific laboratories. Because both units belong to the International System of Units (SI), translating between them is a highly clean, base-10 calculation that requires no complex fractional conversions.",
    "This educational reference outlines the precise relationship between meters and centimeters. It provides practical manual calculation steps, real-world examples, a reference table, and common mistakes to avoid to ensure your design, scientific, or construction work is accurate and efficient."
  ],
  quickAnswer: {
    text: "One meter is exactly equal to 100 centimeters. Conversely, one centimeter is defined as exactly 0.01 meters.",
    formulaDisplay: "1 m = 100 cm",
    subtext: "To convert meters to centimeters, multiply the meter value by 100, or shift the decimal point two places to the right."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter (m)",
    text: "The meter is the base unit of length in the International System of Units (SI). Established during the French Revolution, the meter was originally defined as one ten-millionth of the distance from the Earth's equator to the North Pole. Today, physicists define the meter using universal constants: the distance light travels in a vacuum during a time interval of exactly 1/299,792,458 of a second. This absolute definition guarantees consistent measurements in modern laboratories, engineering projects, and manufacturing facilities across the globe."
  },
  aboutTargetUnit: {
    title: "Understanding the Centimeter (cm)",
    text: "The centimeter is a decimal submultiple of the meter, designed for measuring small household items, paper dimensions, textiles, and human heights. The term combines the Latin word 'centum' (meaning hundred) with the French 'mètre'. One centimeter is exactly equal to one-hundredth of a meter. It serves as a highly practical unit in design, tailoring, construction, and educational settings worldwide, bridging the gap between millimeter-level precision and meter-level span."
  },
  relationship: "The centimeter is directly proportional to the meter by a factor of one hundred. Because the metric system uses a decimal base (base-10), you can convert meters to centimeters by shifting the decimal point exactly two places to the right.",
  relationshipItems: [
    { label: "Meters to Centimeters", value: "1 m = 100 cm" },
    { label: "Centimeters to Meters", value: "1 cm = 0.01 m" }
  ],
  formula: {
    text: "To find centimeters from meters manually, multiply the value in meters by 1,000. Alternatively, you can divide the meter value by the decimal scale factor of 0.01.",
    math: "Centimeters (cm) = Meters (m) * 100",
    subtext: "Since the conversion factor is exactly 100, there is no rounding error or repeating decimal in this metric calculation."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Measuring Furniture in a Living Room",
        subtitle: "Convert the length of a dining table that is 2.4 meters long into centimeters.",
        steps: [
          "Identify the starting length: 2.4 meters.",
          "Apply the formula: Multiply the meter value by 100.",
          "Calculate the product: 2.4 × 100 = 240.",
          "State the final result: 2.4 meters is equivalent to exactly 240 centimeters."
        ]
      },
      {
        title: "Example 2: Recording a Person's Height",
        subtitle: "Convert a medical height measurement of 1.75 meters into centimeters.",
        steps: [
          "Identify the starting length: 1.75 meters.",
          "Apply the formula: Multiply the meter value by 100.",
          "Calculate the product: 1.75 × 100 = 175.",
          "State the final result: 1.75 meters is equivalent to exactly 175 centimeters."
        ]
      }
    ]
  },
  table: {
    title: "Meter to Centimeter Reference Table",
    headers: ["Meters (m)", "Centimeters (cm)", "Context / Common Use"],
    rows: [
      { fromVal: "0.01", toVal: "1", extra: "Exactly one centimeter" },
      { fromVal: "0.1", toVal: "10", extra: "Width of a typical smartphone" },
      { fromVal: "0.5", toVal: "50", extra: "Length of a standard computer monitor" },
      { fromVal: "1", toVal: "100", extra: "Base conversion / Height of a standard kitchen counter" },
      { fromVal: "1.5", toVal: "150", extra: "Width of a double mattress" },
      { fromVal: "2", toVal: "200", extra: "Length of a standard bed" },
      { fromVal: "5", toVal: "500", extra: "Approximate length of a sedan passenger car" },
      { fromVal: "10", toVal: "1,000", extra: "Height of a standard three-story building" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Carpentry & DIY Home Improvement",
        text: "Woodworkers and home remodelers measure materials in centimeters for high-precision cuts. Converting floor plans from meters to centimeters ensures furniture fits perfectly in a layout."
      },
      {
        title: "Textiles & Fashion Design",
        text: "Fabric rolls are manufactured in meter lengths, but individual pattern cuts, sleeve lengths, and waist sizes are measured in centimeters. Fashion designers constantly switch between these units to maintain fit."
      },
      {
        title: "Science & Laboratories",
        text: "Scientific instruments, pipettes, and microscopic specimens are measured in millimeters and centimeters, while the experimental apparatus space is recorded in meters. Lab reports must combine these units correctly."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Dividing instead of multiplying: Users sometimes divide by 100 instead of multiplying, resulting in a tiny decimal (e.g., writing 2 meters as 0.02 cm instead of 200 cm).",
      "Confusing millimeters with centimeters: Millimeters are ten times smaller than centimeters. A meter has 1,000 millimeters but only 100 centimeters.",
      "Incorrect decimal point shifting: When converting values like 0.05 meters, miscalculating the shift can lead to writing 50 cm or 0.5 cm instead of the correct 5 cm."
    ]
  },
  faqs: [
    {
      question: "How many centimeters are in a meter?",
      answer: "There are exactly 100 centimeters in one meter. This factor is mathematically constant across all metric measurements."
    },
    {
      question: "What is the fastest way to convert meters to centimeters?",
      answer: "The quickest method is to multiply your meter value by 100, which is equivalent to shifting the decimal point two places to the right."
    },
    {
      question: "What does the prefix centi- mean?",
      answer: "The prefix 'centi-' comes from the Latin word for hundred. In measurements, it denotes one-hundredth of the base unit."
    },
    {
      question: "Is a centimeter smaller than an inch?",
      answer: "Yes, a centimeter is smaller than an inch. One inch is exactly equal to 2.54 centimeters, making a centimeter roughly 40% of an inch."
    },
    {
      question: "How do I convert 1.8 meters into centimeters?",
      answer: "To convert 1.8 meters to centimeters, multiply 1.8 by 100. This calculation results in exactly 180 centimeters."
    },
    {
      question: "What is the official abbreviation for meters and centimeters?",
      answer: "The standard abbreviation for meter is 'm' and for centimeter is 'cm'. Both must be written in lowercase letters without trailing punctuation."
    },
    {
      question: "How do you convert centimeters back to meters?",
      answer: "To convert centimeters to meters, divide the centimeter value by 100. For example, 350 centimeters divided by 100 equals 3.5 meters."
    },
    {
      question: "Why is the metric system so easy to use for these conversions?",
      answer: "The metric system is entirely base-10, meaning all conversions are simple powers of ten. This eliminates the need to remember odd conversion ratios like 12 inches to a foot or 3 feet to a yard."
    }
  ],
  relatedList: [
    { label: "Centimeter to Meter", from: "centimeter", to: "meter" },
    { label: "Meter to Kilometer", from: "meter", to: "kilometer" },
    { label: "Meter to Millimeter", from: "meter", to: "millimeter" },
    { label: "Meter to Micrometer", from: "meter", to: "micrometer" },
    { label: "Meter to Nanometer", from: "meter", to: "nanometer" },
    { label: "Meter to Mile", from: "meter", to: "mile" },
    { label: "Meter to Yard", from: "meter", to: "yard" },
    { label: "Meter to Foot", from: "meter", to: "foot" },
    { label: "Meter to Inch", from: "meter", to: "inch" },
    { label: "Meter to Nautical Mile", from: "meter", to: "nautical-mile" },
    { label: "Meter to Rod", from: "meter", to: "rod" },
    { label: "Meter to Chain", from: "meter", to: "chain" },
    { label: "Meter to Furlong", from: "meter", to: "furlong" },
    { label: "Meter to League", from: "meter", to: "league" },
    { label: "Meter to Hand", from: "meter", to: "hand" },
    { label: "Meter to Cubit", from: "meter", to: "cubit" }
  ],
  references: [
    "BIPM (International Bureau of Weights and Measures) - The International System of Units (SI).",
    "National Institute of Standards and Technology (NIST) - Metric Conversion Guide.",
    "ISO 80000-3 - Quantities and units - Space and time."
  ]
};
