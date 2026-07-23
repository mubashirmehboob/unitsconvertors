import { CustomArticleData } from "./types";

export const meterToRod: CustomArticleData = {
  fromUnitId: "meter",
  toUnitId: "rod",
  seoTitle: "Meter to Rod Converter - m to rd",
  metaDescription: "Convert meters to rods (m to rd) easily. Find the historical conversion factor, exact manual formula, reference table, and FAQs.",
  h1: "Meter to Rod Converter",
  introduction: [
    "Converting meters (m) to rods (rd) bridges modern scientific measurement standards with historical Anglo-Saxon land-surveying practices. Also known as a pole or perch, the rod is a traditional unit of length that remains highly relevant in property deeds, canal surveying, and agricultural fence construction in North America.",
    "This reference guide provides a clear, mathematically precise explanation of the meter-to-rod conversion. It includes the exact conversion factor established by international standardizers, details step-by-step manual calculations, provides practical examples, and addresses common mistakes in analyzing historical deeds."
  ],
  quickAnswer: {
    text: "One meter is exactly equivalent to 0.198838785 rods. Conversely, one standard international rod is defined as exactly 5.0292 meters (or exactly 16.5 feet).",
    formulaDisplay: "1 m = 0.198838785 rd",
    subtext: "To convert meters to rods, divide the metric value by 5.0292, or multiply by the decimal conversion coefficient."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter (m)",
    text: "The meter is the SI base unit of length, defined in modern quantum physics by the speed of light in a vacuum. Light covers exactly one meter in a duration of 1/299,792,458 of a second. This physical standard is identical worldwide and serves as the baseline for calibrating all other units of length."
  },
  aboutTargetUnit: {
    title: "Understanding the Rod (rd)",
    text: "The rod, historically called a pole or perch, is a traditional unit of length in the British Imperial and US Customary systems. Derived in medieval England from the length of a wooden rod used to guide teams of oxen, the unit was standardized as exactly 16.5 feet (or 5.5 yards). Under the International Yard and Pound Agreement of 1959, the rod was locked at exactly 5.0292 meters, linking traditional real estate records to the metric system."
  },
  relationship: "The standard rod is a multiple of the meter. Because a rod contains exactly 16.5 feet, and each foot is exactly 0.3048 meters, a rod is equal to exactly 16.5 × 0.3048 = 5.0292 meters.",
  relationshipItems: [
    { label: "Meters to Rods", value: "1 m = 0.198838785 rd" },
    { label: "Rods to Meters", value: "1 rd = 5.0292 m" }
  ],
  formula: {
    text: "To find rods from meters manually, divide your metric value by 5.0292. Alternatively, multiply the meter value by the decimal factor of 0.198838785.",
    math: "Rods (rd) = Meters (m) / 5.0292",
    subtext: "Using 5.0292 as the divisor guarantees that your calculations align precisely with historical property deeds."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Analyzing Property Fencing",
        subtitle: "Convert a boundary line of 100 meters into rods.",
        steps: [
          "Identify the starting length: 100 meters.",
          "Apply the standard formula: Divide the meter value by 5.0292.",
          "Perform the division: 100 / 5.0292 = 19.88387855.",
          "State the final result: 100 meters is equivalent to approximately 19.88 rods."
        ]
      },
      {
        title: "Example 2: Restoring Historic Blueprints",
        subtitle: "Convert 25 meters of a canal lock channel to rods.",
        steps: [
          "Identify the starting length: 25 meters.",
          "Apply the multiplier: Multiply 25 by 0.198838785.",
          "Perform the arithmetic: 25 × 0.198838785 = 4.970969625.",
          "State the final result: 25 meters is equivalent to approximately 4.97 rods."
        ]
      }
    ]
  },
  table: {
    title: "Meter to Rod Reference Table",
    headers: ["Meters (m)", "Rods (rd)", "Imperial Feet Equivalent"],
    rows: [
      { fromVal: "1", toVal: "0.1988", extra: "Approx. 3.28 feet" },
      { fromVal: "5.0292", toVal: "1.0000", extra: "Exactly 16.5 feet" },
      { fromVal: "10", toVal: "1.9884", extra: "Approx. 32.8 feet" },
      { fromVal: "20", toVal: "3.9768", extra: "Approx. 65.6 feet" },
      { fromVal: "50", toVal: "9.9419", extra: "Approx. 164.0 feet" },
      { fromVal: "100", toVal: "19.8839", extra: "Approx. 328.1 feet" },
      { fromVal: "201.168", toVal: "40.0000", extra: "Exactly 1 furlong" },
      { fromVal: "500", toVal: "99.4194", extra: "Approx. 1,640.4 feet" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Property Deed & Land Surveys",
        text: "Many older property deeds and boundary descriptions list land borders in rods, poles, or perches. When land surveyors map these sites using modern metric GPS receivers, they convert meters to rods to verify legal boundaries."
      },
      {
        title: "Agricultural Fencing",
        text: "Farmers and ranchers often measure paddock fencing in rods because traditional fencing rolls are sold in lengths of 40 rods (one furlong). Converting metric pasture blueprints to rods helps estimate roll counts."
      },
      {
        title: "Canal & Waterway Mapping",
        text: "The banks of historic canal systems are legally defined in rods. Park authorities use these conversions to align modern environmental conservation tracts with historic easements."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Confusing the rod with the yard: A rod (16.5 feet) is much longer than a yard (3 feet). Confusing these two units leads to an error of over 450% in land measurements.",
      "Early decimal rounding: Rounding the divisor to 5.0 or 5.03 is acceptable for quick estimates, but over large distances, this introduces significant errors. Always use 5.0292 for legal surveying work.",
      "Mixing up poles, perches, and rods: In historic texts, poles, perches, and rods represent the exact same physical length. Treat them as identical."
    ]
  },
  faqs: [
    {
      question: "Are rods, poles, and perches the same unit?",
      answer: "Yes. In traditional Anglo-American measurement, the terms 'rod', 'pole', and 'perch' refer to the exact same physical length: 16.5 feet, or exactly 5.0292 meters."
    },
    {
      question: "How many feet are in a rod?",
      answer: "There are exactly 16.5 feet (or 5.5 yards) in a standard international rod."
    },
    {
      question: "How do I convert meters to rods manually?",
      answer: "To convert meters to rods manually, divide the meter value by 5.0292. For example, 10 meters divided by 5.0292 is approximately 1.988 rods."
    },
    {
      question: "What is the abbreviation for the rod unit?",
      answer: "The standard abbreviation for the rod is 'rd', written in lowercase without any punctuation."
    },
    {
      question: "Why was the rod defined as 16.5 feet?",
      answer: "The rod was historically modeled after the length of a wooden pole used to guide a team of four oxen, which was standardized in medieval England as 16.5 feet."
    },
    {
      question: "Does this conversion work for decimal values?",
      answer: "Yes, the exact same mathematical divisor of 5.0292 applies to all decimal values. For instance, 1.5 meters is equal to approximately 0.298 rods."
    },
    {
      question: "How many rods are in a mile?",
      answer: "There are exactly 320 rods in one standard statute mile."
    },
    {
      question: "Is the rod still used today?",
      answer: "Yes. While rare in daily conversation, the rod is still widely used in real estate land surveying, property deeds, and farm fence planning across North America."
    }
  ],
  relatedList: [
    { label: "Rod to Meter", from: "rod", to: "meter" },
    { label: "Meter to Kilometer", from: "meter", to: "kilometer" },
    { label: "Meter to Centimeter", from: "meter", to: "centimeter" },
    { label: "Meter to Millimeter", from: "meter", to: "millimeter" },
    { label: "Meter to Micrometer", from: "meter", to: "micrometer" },
    { label: "Meter to Nanometer", from: "meter", to: "nanometer" },
    { label: "Meter to Mile", from: "meter", to: "mile" },
    { label: "Meter to Yard", from: "meter", to: "yard" },
    { label: "Meter to Foot", from: "meter", to: "foot" },
    { label: "Meter to Inch", from: "meter", to: "inch" },
    { label: "Meter to Nautical Mile", from: "meter", to: "nautical-mile" },
    { label: "Meter to Chain", from: "meter", to: "chain" },
    { label: "Meter to Furlong", from: "meter", to: "furlong" },
    { label: "Meter to League", from: "meter", to: "league" },
    { label: "Meter to Hand", from: "meter", to: "hand" },
    { label: "Meter to Cubit", from: "meter", to: "cubit" }
  ],
  references: [
    "International Yard and Pound Agreement (1959).",
    "National Institute of Standards and Technology (NIST) - Land Surveying Guide.",
    "English Weights and Measures Act of 1824."
  ]
};
