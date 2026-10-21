import { CustomArticleData } from "./types";

export const centimeterToMillimeter: CustomArticleData = {
  fromUnitId: "centimeter",
  toUnitId: "millimeter",
  seoTitle: "Centimeter to Millimeter Converter | cm to mm",
  metaDescription: "Convert centimeters to millimeters (cm to mm) instantly. Explore the exact metric formula, worked examples, millimeter reference table, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/length/centimeter-to-millimeter",
  h1: "Centimeter to Millimeter Converter",
  introduction: [
    "Switching between centimeters (cm) and millimeters (mm) is one of the most frequent conversions in engineering, carpentry, machining, crafting, and education. When precision tolerances require finer increments than whole centimeters can express, converting to millimeters provides immediate clarity without cumbersome fractions.",
    "Both units are fundamental submultiples of the International System of Units (SI) meter. Because one centimeter contains exactly 10 millimeters, converting between them is an effortless base-10 calculation. This comprehensive guide explains the exact mathematical formula, manual calculation steps, practical workshop applications, and answers to common measurement questions."
  ],
  quickAnswer: {
    text: "One centimeter is equal to exactly 10 millimeters. Conversely, one millimeter is equal to exactly 0.1 centimeters (one tenth of a centimeter).",
    formulaDisplay: "1 cm = 10 mm",
    subtext: "To convert centimeters to millimeters, multiply the centimeter value by 10, or move the decimal point one position to the right."
  },
  aboutSourceUnit: {
    title: "Understanding the Centimeter (cm)",
    text: "The centimeter is a decimal submultiple of the meter, representing 1/100 of the SI base unit (10⁻² meters). Widely adopted across retail, education, textiles, and everyday household measurement, the centimeter provides a convenient human-scale benchmark roughly equivalent to the width of an adult fingernail or pencil."
  },
  aboutTargetUnit: {
    title: "Understanding the Millimeter (mm)",
    text: "The millimeter is defined as one thousandth of a meter (10⁻³ meters) or one tenth of a centimeter. Millimeters are the premier dimensional unit for mechanical engineering, architectural manufacturing tolerances, electronics fabrication, optics, and 3D printing, where millimeter and sub-millimeter tolerances ensure perfect fit and function."
  },
  relationship: "Because the prefix 'centi-' means one hundredth (1/100) and 'milli-' means one thousandth (1/1000), there are exactly 10 millimeters in every centimeter.",
  relationshipItems: [
    { label: "Centimeters to Millimeters", value: "1 cm = 10 mm (exact)" },
    { label: "Millimeters to Centimeters", value: "1 mm = 0.1 cm (exact)" },
    { label: "Base-10 Shift", value: "Shift decimal point 1 place right" }
  ],
  formula: {
    text: "To convert centimeters to millimeters, multiply the number of centimeters by 10.",
    math: "Millimeters (mm) = Centimeters (cm) × 10",
    subtext: "This conversion is exact and integer-based, requiring no approximation or rounding."
  },
  practicalTip: {
    title: "Instant Mental Math",
    text: "To convert any centimeter measurement to millimeters instantly, simply append a zero if it is a whole number (e.g., 8 cm = 80 mm) or shift the decimal point one place to the right (e.g., 2.4 cm = 24 mm)."
  },
  examples: {
    title: "Step-by-Step Conversion Scenarios",
    items: [
      {
        title: "Example 1: Machining a Metal Bracket",
        subtitle: "Convert a bracket thickness of 3.8 centimeters into millimeters for CNC cutting.",
        steps: [
          "Identify the starting dimension: 3.8 cm.",
          "Apply the formula: Multiply by 10.",
          "Calculate: 3.8 × 10 = 38.",
          "Final result: 3.8 cm is exactly equal to 38 millimeters."
        ]
      },
      {
        title: "Example 2: School Stationery Ruler",
        subtitle: "Determine how many millimeters are on a standard 30-centimeter ruler.",
        steps: [
          "State the starting length: 30 cm.",
          "Multiply by 10: 30 × 10 = 300.",
          "Conclusion: A 30 cm ruler measures exactly 300 millimeters."
        ]
      },
      {
        title: "Example 3: Small Precision Component",
        subtitle: "Convert a tiny 0.45 cm electronic capacitor width to millimeters.",
        steps: [
          "State the starting width: 0.45 cm.",
          "Shift decimal one position right: 0.45 × 10 = 4.5.",
          "Final answer: 0.45 cm equals 4.5 millimeters."
        ]
      }
    ]
  },
  table: {
    title: "Centimeter to Millimeter Reference Table",
    headers: ["Centimeters (cm)", "Millimeters (mm)", "Context / Common Application"],
    rows: [
      { fromVal: "0.1", toVal: "1", extra: "Thickness of an ID badge or credit card" },
      { fromVal: "0.5", toVal: "5", extra: "Diameter of standard pencil lead casing" },
      { fromVal: "1", toVal: "10", extra: "Width of a standard staple" },
      { fromVal: "2.54", toVal: "25.4", extra: "Exact metric equivalent of 1 inch" },
      { fromVal: "5", toVal: "50", extra: "Standard business card height" },
      { fromVal: "10", toVal: "100", extra: "One decimeter" },
      { fromVal: "15", toVal: "150", extra: "Short pocket ruler length" },
      { fromVal: "20", toVal: "200", extra: "Width of standard letter / A4 paper" },
      { fromVal: "30", toVal: "300", extra: "Standard student desk ruler length" },
      { fromVal: "50", toVal: "500", extra: "Half a meter" },
      { fromVal: "100", toVal: "1,000", extra: "One full meter" }
    ]
  },
  applications: {
    title: "Real-World Contexts & Applications",
    items: [
      {
        title: "Mechanical Engineering & CAD Design",
        text: "Computer-aided design (CAD) files and technical blueprints almost universally specify part dimensions in millimeters to avoid decimal fractions and guarantee tight manufacturing tolerances."
      },
      {
        title: "Woodworking & Cabinetry",
        text: "Carpenters frequently convert architect measurements given in centimeters into millimeters to mark saw cut lines, dowel holes, and hinge mortises with extreme accuracy."
      },
      {
        title: "Medical Imaging & Surgery",
        text: "Ultrasound, CT, and MRI scans record anatomical lesions, surgical margins, and implant sizes in millimeters to monitor physiological changes at a microscopic scale."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Dividing by 10 converts millimeters to centimeters, not centimeters to millimeters.",
      "Confusing millimeters with micrometers: One centimeter contains 10 millimeters, but 10,000 micrometers. Do not confuse the prefixes.",
      "Misreading ruler markings: On a standard metric ruler, each small line between centimeter numbers represents 1 millimeter, with 10 divisions per centimeter.",
      "Omitting units in technical drawings: Always label whether dimensions are in centimeters (cm) or millimeters (mm); in architectural plans, unstated dimensions are typically millimeters."
    ]
  },
  faqs: [
    {
      question: "How many millimeters are in one centimeter?",
      answer: "There are exactly 10 millimeters in one centimeter. This is an exact definition established by the metric system."
    },
    {
      question: "What is the formula to convert cm to mm?",
      answer: "The formula is: Millimeters = Centimeters × 10. Simply multiply your centimeter value by 10."
    },
    {
      question: "How do you convert 5 cm to mm?",
      answer: "Multiply 5 by 10 to get 50 millimeters. Therefore, 5 cm equals 50 mm."
    },
    {
      question: "How do you convert millimeters back to centimeters?",
      answer: "To convert millimeters to centimeters, divide by 10. For instance, 45 mm divided by 10 equals 4.5 cm."
    },
    {
      question: "Is 1 cm bigger than 1 mm?",
      answer: "Yes, 1 centimeter is 10 times larger than 1 millimeter. Ten millimeters fit inside a single centimeter."
    },
    {
      question: "How many mm are in 2.54 cm?",
      answer: "Multiplying 2.54 by 10 gives 25.4 millimeters, which is the exact international length of one inch."
    },
    {
      question: "What are the standard symbols for centimeters and millimeters?",
      answer: "The official SI symbols are 'cm' for centimeter and 'mm' for millimeter, written in lowercase without periods."
    },
    {
      question: "Why do engineers prefer millimeters over centimeters?",
      answer: "Engineers prefer millimeters because it allows most mechanical parts and tolerances to be specified in whole numbers, reducing decimal errors on factory shop floors."
    }
  ],
  relatedList: [
    { label: "Millimeter to Centimeter", from: "millimeter", to: "centimeter" },
    { label: "Centimeter to Meter", from: "centimeter", to: "meter" },
    { label: "Centimeter to Micrometer", from: "centimeter", to: "micrometer" },
    { label: "Centimeter to Nanometer", from: "centimeter", to: "nanometer" },
    { label: "Centimeter to Inch", from: "centimeter", to: "inch" },
    { label: "Centimeter to Foot", from: "centimeter", to: "foot" },
    { label: "Centimeter to Yard", from: "centimeter", to: "yard" },
    { label: "Centimeter to Kilometer", from: "centimeter", to: "kilometer" }
  ],
  references: [
    "BIPM (International Bureau of Weights and Measures) - The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) Special Publication 811 - Guide for the Use of the International System of Units.",
    "ISO 80000-3 - Quantities and units — Space and time."
  ]
};
