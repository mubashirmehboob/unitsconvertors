import { CustomArticleData } from "./types";

export const kilometerToCentimeter: CustomArticleData = {
  fromUnitId: "kilometer",
  toUnitId: "centimeter",
  seoTitle: "Kilometer to Centimeter | km to cm Converter",
  metaDescription: "Convert kilometers to centimeters (km to cm) with precision. Learn the conversion relationship, manual formulas, worked calculations, and FAQs.",
  h1: "Kilometer to Centimeter Converter",
  introduction: [
    "How does a large-scale geographical distance relate to a tiny unit like the centimeter? When drafting topographic maps, designing highway scaling models, or conducting geological surveys, cartographers frequently translate kilometers (km) into centimeters (cm). This conversion bridges macroscopic real-world distances with precise paper plans.",
    "This reference explains the mathematical transition from kilometers to centimeters. It outlines the direct multipliers, step-by-step arithmetic steps, and the metric system definitions that govern this scaling process."
  ],
  quickAnswer: {
    text: "One kilometer is equivalent to exactly 100,000 centimeters. This relationship is fixed and exact because one kilometer consists of 1,000 meters, and each meter contains exactly 100 centimeters.",
    formulaDisplay: "1 km = 100,000 cm",
    subtext: "To change kilometers to centimeters, multiply the value by 100,000, or move the decimal point five places to the right."
  },
  aboutSourceUnit: {
    title: "The Kilometer (km) Overview",
    text: "The kilometer is an officially recognized SI derived unit of length. Primarily used to represent geographical distances, route travel times, and airspace ranges, the kilometer is defined as exactly 1,000 meters. Its symbol is lowercase 'km'."
  },
  aboutTargetUnit: {
    title: "The Centimeter (cm) Overview",
    text: "The centimeter is a metric unit of length equal to one-hundredth of a meter. Widely used for everyday measurements, fabric sizes, household items, and technical design documents, it provides a highly legible scale for items too small to be described cleanly in meters."
  },
  relationship: "The metric system is built on powers of ten. Since one kilometer is 1,000 meters, and each meter is 100 centimeters, the calculation to find the total number of centimeters in a kilometer is 1,000 × 100 = 100,000.",
  relationshipItems: [
    { label: "Kilometers to Centimeters", value: "1 km = 100,000 cm" },
    { label: "Centimeters to Kilometers", value: "1 cm = 0.00001 km" }
  ],
  formula: {
    text: "To translate kilometers to centimeters, multiply your distance value by 100,000. This scaling factor is exact.",
    math: "Centimeters (cm) = Kilometers (km) × 100,000",
    subtext: "For inverse calculations, divide the centimeter value by 100,000 to find the equivalent distance in kilometers."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Map Scale Calibration",
        subtitle: "Convert a real-world distance of 2.5 kilometers into centimeters for drafting.",
        steps: [
          "State the starting distance: 2.5 kilometers.",
          "Apply the formula: Multiply 2.5 by 100,000.",
          "Perform the calculation: 2.5 × 100,000 = 250,000.",
          "State the final result: 2.5 kilometers is exactly equal to 250,000 centimeters."
        ]
      },
      {
        title: "Example 2: Precision Pipeline Survey",
        subtitle: "Convert a 0.015-kilometer pipeline segment to centimeters.",
        steps: [
          "State the starting distance: 0.015 kilometers.",
          "Apply the formula: Multiply 0.015 by 100,000.",
          "Perform the calculation: 0.015 × 100,000 = 1,500.",
          "State the final result: 0.015 kilometers is equivalent to 1,500 centimeters."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer to Centimeter Reference Values",
    headers: ["Kilometers (km)", "Centimeters (cm)", "Scientific Notation"],
    rows: [
      { fromVal: "0.01", toVal: "1,000", extra: "1 × 10³ cm" },
      { fromVal: "0.1", toVal: "10,000", extra: "1 × 10⁴ cm" },
      { fromVal: "0.5", toVal: "50000", extra: "5 × 10⁴ cm" },
      { fromVal: "1", toVal: "100,000", extra: "1 × 10⁵ cm" },
      { fromVal: "2", toVal: "200,000", extra: "2 × 10⁵ cm" },
      { fromVal: "5", toVal: "500,000", extra: "5 × 10⁵ cm" },
      { fromVal: "10", toVal: "1,000,000", extra: "1 × 10⁶ cm" }
    ]
  },
  applications: {
    title: "Practical Situations",
    items: [
      {
        title: "Cartography & Scale Maps",
        text: "Paper map drawings use scale ratios like 1:50,000 or 1:100,000. Understanding how many real-world kilometers translate to paper centimeters is key to reading route maps and topographical charts."
      },
      {
        title: "Civil Engineering & Design",
        text: "Urban planners outline municipal zones in kilometers, but standard technical drawing files map pipelines, powerlines, and pavement sections down to the centimeter to assure fit."
      },
      {
        title: "Scientific Modeling & Ecology",
        text: "Biologists tracking animal migratory corridors study habitats covering multiple kilometers, but measure nesting structures and physical terrain details in centimeters."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls",
    items: [
      "Adding or omitting zeros: A common error is multiplying by 10,000 instead of 100,000. Always verify the fifth decimal place to prevent large calculation errors.",
      "Misinterpreting map scale: Scaling errors occur when cartographic ratios are misaligned with actual terrain centimeters. Double-check your starting values before final drafting.",
      "Early rounding: Do not round values during intermediate steps, as small decimal errors multiply rapidly over large geographic scales."
    ]
  },
  faqs: [
    {
      question: "How many centimeters make one kilometer?",
      answer: "One kilometer is equivalent to exactly 100,000 centimeters. This factor is derived directly from SI length definitions."
    },
    {
      question: "What is the fastest way to convert km to cm manually?",
      answer: "The easiest way is to multiply the kilometer value by 100,000. Alternatively, shift the decimal point five places to the right."
    },
    {
      question: "How many centimeters are in 0.5 kilometers?",
      answer: "0.5 kilometers equals exactly 50,000 centimeters, which represents half of a full kilometer."
    },
    {
      question: "Why do topographic maps use centimeters and kilometers?",
      answer: "Maps represent long terrain distances (kilometers) on portable paper sheets. Ratios convert real-world kilometers into printable centimeters."
    },
    {
      question: "Are centimeters and kilometers both part of the metric system?",
      answer: "Yes, both units are part of the metric system and are legally anchored to the standard SI base unit of length, the meter."
    },
    {
      question: "How many centimeters is 10 kilometers?",
      answer: "10 kilometers is equivalent to exactly 1,000,000 centimeters (one million centimeters)."
    },
    {
      question: "What are the standard abbreviations for these units?",
      answer: "The symbol for kilometer is 'km' and the symbol for centimeter is 'cm'. Both are lowercase."
    },
    {
      question: "Does the conversion factor ever change?",
      answer: "No. The SI definition of the meter is absolute, meaning the relationship between kilometers and centimeters remains permanently constant."
    }
  ],
  relatedList: [
    { label: "Centimeter to Kilometer", from: "centimeter", to: "kilometer" },
    { label: "Kilometer to Meter", from: "kilometer", to: "meter" },
    { label: "Kilometer to Millimeter", from: "kilometer", to: "millimeter" },
    { label: "Kilometer to Micrometer", from: "kilometer", to: "micrometer" },
    { label: "Kilometer to Nanometer", from: "kilometer", to: "nanometer" },
    { label: "Kilometer to Mile", from: "kilometer", to: "mile" },
    { label: "Kilometer to Yard", from: "kilometer", to: "yard" },
    { label: "Kilometer to Foot", from: "kilometer", to: "foot" },
    { label: "Kilometer to Inch", from: "kilometer", to: "inch" },
    { label: "Kilometer to Nautical Mile", from: "kilometer", to: "nautical-mile" },
    { label: "Kilometer to Rod", from: "kilometer", to: "rod" },
    { label: "Kilometer to Chain", from: "kilometer", to: "chain" },
    { label: "Kilometer to Furlong", from: "kilometer", to: "furlong" },
    { label: "Kilometer to League", from: "kilometer", to: "league" },
    { label: "Kilometer to Hand", from: "kilometer", to: "hand" },
    { label: "Kilometer to Cubit", from: "kilometer", to: "cubit" }
  ],
  references: [
    "NIST Special Publication 330 - The International System of Units (SI).",
    "ISO 80000-3 Quantities and units - Space and time.",
    "BIPM SI Brochure - Table of SI prefixes."
  ]
};
