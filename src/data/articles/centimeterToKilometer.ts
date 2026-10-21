import { CustomArticleData } from "./types";

export const centimeterToKilometer: CustomArticleData = {
  fromUnitId: "centimeter",
  toUnitId: "kilometer",
  seoTitle: "Centimeter to Kilometer Converter | cm to km",
  metaDescription: "Convert centimeters to kilometers (cm to km) accurately. Learn the base-10 formula, step-by-step calculations, standard conversion table, and key FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/length/centimeter-to-kilometer",
  h1: "Centimeter to Kilometer Converter",
  introduction: [
    "Switching between centimeters (cm) and kilometers (km) bridges small, handheld object measurements with expansive geographical distances. While centimeters are the standard for product blueprints, human dimensions, and laboratory glassware, kilometers represent road networks, national borders, and long-range aerospace trajectories.",
    "Because both centimeters and kilometers stem from the metric base unit—the meter—their mathematical relationship is governed entirely by powers of ten. One kilometer contains exactly 100,000 centimeters. This educational guide provides the exact conversion formula, manual calculation steps, practical applications across surveying and GIS mapping, and helpful FAQs."
  ],
  quickAnswer: {
    text: "One centimeter is equal to exactly 0.00001 kilometers (10⁻⁵ km). Conversely, one kilometer contains exactly 100,000 centimeters.",
    formulaDisplay: "1 cm = 0.00001 km",
    subtext: "To convert centimeters to kilometers, divide the centimeter value by 100,000, or shift the decimal point five places to the left."
  },
  aboutSourceUnit: {
    title: "Understanding the Centimeter (cm)",
    text: "The centimeter is an official decimal fraction of the meter in the International System of Units (SI). Defined by the SI prefix 'centi-' (meaning 1/100), one centimeter represents 0.01 meters. It is the universal unit for recording human body proportions, furniture dimensions, architectural elevations, and mechanical parts in metric-standard nations worldwide."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilometer (km)",
    text: "The kilometer is an SI decimal multiple of the meter, defined as exactly 1,000 meters. Combining the Greek prefix 'kilo-' (meaning 1,000) with the base meter, the kilometer is the global benchmark for terrestrial travel, road speed regulations, civil highway engineering, and aerial navigation."
  },
  relationship: "Because there are 100 centimeters in a meter and 1,000 meters in a kilometer, one kilometer contains 100 × 1,000 = 100,000 centimeters. Therefore, 1 cm equals exactly 1/100,000 of a kilometer.",
  relationshipItems: [
    { label: "Centimeters to Kilometers", value: "1 cm = 0.00001 km (exact)" },
    { label: "Kilometers to Centimeters", value: "1 km = 100,000 cm (exact)" },
    { label: "Scientific Notation", value: "1 cm = 1 × 10⁻⁵ km" }
  ],
  formula: {
    text: "To convert centimeters to kilometers, divide the centimeter measurement by 100,000, or multiply by the factor 0.00001 (10⁻⁵).",
    math: "Kilometers (km) = Centimeters (cm) / 100,000 = Centimeters (cm) × 0.00001",
    subtext: "Since the conversion ratio is an integer power of ten, there is no truncation or rounding inaccuracy."
  },
  practicalTip: {
    title: "Mental Math Technique",
    text: "To convert centimeters to kilometers without a calculator, first divide by 100 to find meters (shift two places left), then divide by 1,000 to find kilometers (shift three more places left), for a total shift of five decimal places."
  },
  examples: {
    title: "Step-by-Step Conversion Scenarios",
    items: [
      {
        title: "Example 1: Converting a Map Distance to Real Ground Distance",
        subtitle: "A topographic survey map scale shows a road segment measuring 250,000 centimeters. Find this distance in kilometers.",
        steps: [
          "State the starting length: 250,000 cm.",
          "Apply the formula: Divide by 100,000.",
          "Perform the division: 250,000 / 100,000 = 2.5.",
          "Final result: 250,000 cm is exactly equal to 2.5 kilometers."
        ]
      },
      {
        title: "Example 2: Civil Pipeline Segment",
        subtitle: "Convert a municipal water pipe installation length of 75,000 cm into kilometers.",
        steps: [
          "State the starting length: 75,000 cm.",
          "Multiply by 0.00001: 75,000 × 0.00001 = 0.75.",
          "Conclusion: 75,000 cm corresponds to 0.75 kilometers."
        ]
      },
      {
        title: "Example 3: Small Value Conversion",
        subtitle: "Convert 500 centimeters into kilometers.",
        steps: [
          "Identify the starting length: 500 cm.",
          "Shift the decimal point five places left: 500 / 100,000 = 0.005.",
          "Final answer: 500 cm equals 0.005 kilometers (5 meters)."
        ]
      }
    ]
  },
  table: {
    title: "Centimeter to Kilometer Reference Table",
    headers: ["Centimeters (cm)", "Kilometers (km)", "Context / Common Application"],
    rows: [
      { fromVal: "100", toVal: "0.001", extra: "1 meter (standard doorway clearance)" },
      { fromVal: "500", toVal: "0.005", extra: "5 meters (passenger vehicle length)" },
      { fromVal: "1,000", toVal: "0.010", extra: "10 meters (utility pole height)" },
      { fromVal: "5,000", toVal: "0.050", extra: "50 meters (Olympic swimming pool length)" },
      { fromVal: "10,000", toVal: "0.100", extra: "100 meters (athletic sprint track)" },
      { fromVal: "50,000", toVal: "0.500", extra: "500 meters (city boulevard block)" },
      { fromVal: "100,000", toVal: "1.000", extra: "Exactly 1 kilometer" },
      { fromVal: "250,000", toVal: "2.500", extra: "2.5 km cross-country loop" },
      { fromVal: "500,000", toVal: "5.000", extra: "5 km community park run" },
      { fromVal: "1,000,000", toVal: "10.000", extra: "10 km highway section" }
    ]
  },
  applications: {
    title: "Real-World Contexts & Applications",
    items: [
      {
        title: "Topographic Mapping & GIS Systems",
        text: "Geographic Information Systems (GIS) and cartographers record map features in centimeters or millimeters and convert them using scale ratios (such as 1:50,000) into real-world kilometers."
      },
      {
        title: "Civil Infrastructure & Pipeline Engineering",
        text: "Underground utilities, sewer conduits, and telecommunication fiber runs are manufactured and measured in centimeters, while transit right-of-ways and trenching routes are budgeted in kilometers."
      },
      {
        title: "Geodesy & Satellite Remote Sensing",
        text: "Earth observation satellites and GPS ground survey stations track land subsidence and seismic crustal shifts with centimeter-level precision across kilometer-scale fault zones."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 1,000 instead of 100,000: Dividing centimeters by 1,000 gives decameters or ten-meter increments, not kilometers. Remember that 100,000 centimeters make a kilometer.",
      "Miscounting leading zeros: Shifting five places left on 350 cm yields 0.0035 km, not 0.035 km. A missing zero introduces a tenfold error.",
      "Multiplying when converting to a larger unit: Since the kilometer is much larger than a centimeter, the number of kilometers must always be smaller than the starting centimeters.",
      "Confusing millimeters with centimeters: Millimeters require dividing by 1,000,000 to convert to kilometers, whereas centimeters require dividing by 100,000."
    ]
  },
  faqs: [
    {
      question: "How many centimeters are in one kilometer?",
      answer: "There are exactly 100,000 centimeters in one kilometer. This is derived from 100 centimeters per meter multiplied by 1,000 meters per kilometer."
    },
    {
      question: "What is the formula to convert centimeters to kilometers?",
      answer: "The formula is: Kilometers = Centimeters / 100,000, or Kilometers = Centimeters × 0.00001 (10⁻⁵)."
    },
    {
      question: "How do you convert 100,000 cm to km?",
      answer: "Dividing 100,000 by 100,000 gives exactly 1 kilometer."
    },
    {
      question: "How do you convert kilometers back to centimeters?",
      answer: "To convert kilometers to centimeters, multiply the kilometer figure by 100,000. For example, 3.5 kilometers multiplied by 100,000 equals 350,000 centimeters."
    },
    {
      question: "How many decimal places do you move from cm to km?",
      answer: "You move the decimal point five places to the left to convert from centimeters to kilometers."
    },
    {
      question: "What does 50,000 cm equal in km?",
      answer: "Dividing 50,000 by 100,000 yields exactly 0.5 kilometers (or 500 meters)."
    },
    {
      question: "What are the standard symbols for centimeters and kilometers?",
      answer: "The official SI symbols are 'cm' for centimeters and 'km' for kilometers, written in lowercase without punctuation."
    },
    {
      question: "Can this conversion result in rounding error?",
      answer: "No. Because 100,000 is an exact power of ten, converting centimeters to kilometers is mathematically exact in decimal notation."
    }
  ],
  relatedList: [
    { label: "Kilometer to Centimeter", from: "kilometer", to: "centimeter" },
    { label: "Centimeter to Meter", from: "centimeter", to: "meter" },
    { label: "Centimeter to Millimeter", from: "centimeter", to: "millimeter" },
    { label: "Centimeter to Mile", from: "centimeter", to: "mile" },
    { label: "Centimeter to Foot", from: "centimeter", to: "foot" },
    { label: "Centimeter to Yard", from: "centimeter", to: "yard" },
    { label: "Centimeter to Inch", from: "centimeter", to: "inch" },
    { label: "Meter to Kilometer", from: "meter", to: "kilometer" }
  ],
  references: [
    "BIPM (International Bureau of Weights and Measures) - The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) Special Publication 811 - Guide for the Use of the International System of Units.",
    "ISO 80000-3 - Quantities and units — Space and time."
  ]
};
