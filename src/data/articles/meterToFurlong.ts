import { CustomArticleData } from "./types";

export const meterToFurlong: CustomArticleData = {
  fromUnitId: "meter",
  toUnitId: "furlong",
  seoTitle: "Meter to Furlong Converter - m to fur",
  metaDescription: "Convert meters to furlongs (m to fur) with high precision. Access Gunter's agrarian conversion factor, manual formula, table, and FAQs.",
  h1: "Meter to Furlong Converter",
  introduction: [
    "Translating measurements from meters (m) to furlongs (fur) bridges modern scientific metric units with historical Anglo-Saxon agricultural and sporting standards. The furlong is a traditional unit of length that remains highly visible in horse racing, city grid systems, and historical agricultural deeds.",
    "This reference guide provides a scientifically accurate breakdown of the meter-to-furlong conversion. It includes the exact conversion factor established by international standardizers, details manual calculation steps, provides worked examples, and addresses common mistakes in analyzing historical deeds."
  ],
  quickAnswer: {
    text: "One meter is exactly equivalent to 0.0049709695 furlongs. Conversely, one standard international furlong is defined as exactly 201.168 meters (or exactly 660 feet).",
    formulaDisplay: "1 m = 0.0049709695 fur",
    subtext: "To convert meters to furlongs, divide the metric value by 201.168, or multiply by the decimal conversion coefficient."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter (m)",
    text: "The meter is the SI base unit of length, defined in modern quantum physics by the speed of light in a vacuum. Light covers exactly one meter in a duration of 1/299,792,458 of a second. This absolute definition guarantees that the meter is stable, highly reproducible, and independent of any physical artifact."
  },
  aboutTargetUnit: {
    title: "Understanding the Furlong (fur)",
    text: "The furlong, derived from the Old English words 'furh' (furrow) and 'lang' (long), was historically modeled after the distance a team of oxen could plow without stopping to rest. Standardized as exactly 660 feet (or 220 yards), the furlong is a traditional unit of length in the British Imperial and US Customary systems. Under the International Yard and Pound Agreement of 1959, the furlong was locked at exactly 201.168 meters, linking historical land records directly to the metric system."
  },
  relationship: "The standard furlong is a multiple of the meter. Because a furlong contains exactly 660 feet, and each foot is exactly 0.3048 meters, a furlong is equal to exactly 660 × 0.3048 = 201.168 meters.",
  relationshipItems: [
    { label: "Meters to Furlongs", value: "1 m = 0.0049709695 fur" },
    { label: "Furlongs to Meters", value: "1 fur = 201.168 m" }
  ],
  formula: {
    text: "To find furlongs from meters manually, divide your metric value by 201.168. Alternatively, multiply the meter value by the decimal factor of 0.0049709695.",
    math: "Furlongs (fur) = Meters (m) / 201.168",
    subtext: "Using 201.168 as the divisor guarantees that your calculations align precisely with Gunter's surveying standards."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Analyzing Horse Racing Distance",
        subtitle: "Convert a race track length of 1,000 meters into furlongs.",
        steps: [
          "Identify the starting length: 1,000 meters.",
          "Apply the standard formula: Divide the meter value by 201.168.",
          "Perform the division: 1,000 / 201.168 = 4.970969537.",
          "State the final result: 1,000 meters is equivalent to approximately 4.97 furlongs."
        ]
      },
      {
        title: "Example 2: Restoring Land Records",
        subtitle: "Convert 500 meters of an old roadway easement to furlongs.",
        steps: [
          "Identify the starting length: 500 meters.",
          "Apply the multiplier: Multiply 500 by 0.0049709695.",
          "Perform the arithmetic: 500 × 0.0049709695 = 2.48548475.",
          "State the final result: 500 meters is equivalent to approximately 2.49 furlongs."
        ]
      }
    ]
  },
  table: {
    title: "Meter to Furlong Reference Table",
    headers: ["Meters (m)", "Furlongs (fur)", "Imperial Feet Equivalent"],
    rows: [
      { fromVal: "10", toVal: "0.0497", extra: "Approx. 32.8 feet" },
      { fromVal: "50", toVal: "0.2485", extra: "Approx. 164.0 feet" },
      { fromVal: "100", toVal: "0.4971", extra: "Approx. 328.1 feet" },
      { fromVal: "201.168", toVal: "1.0000", extra: "Exactly 660 feet" },
      { fromVal: "402.336", toVal: "2.0000", extra: "Exactly 1,320 feet" },
      { fromVal: "804.672", toVal: "4.0000", extra: "Exactly 1/2 mile" },
      { fromVal: "1,000", toVal: "4.9710", extra: "Exactly 1 kilometer" },
      { fromVal: "1,609.344", toVal: "8.0000", extra: "Exactly 1 standard mile" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Equestrian Sports & Horse Racing",
        text: "In horse racing across the United States and United Kingdom, distances are measured and published in furlongs (e.g., the Kentucky Derby is a 10-furlong race). Sports analysts convert metric lengths to compare equine performance."
      },
      {
        title: "Historical Agricultural Records",
        text: "Many older agricultural maps and land registry deeds describe farm boundaries in furlongs. When surveyors map these sites using modern metric GPS receivers, they convert meters to furlongs to verify historic boundaries."
      },
      {
        title: "City Grid Planning",
        text: "Some older American cities were designed around blocks measuring exactly one furlong on each side (or eight blocks to a mile). Converting metric coordinates to furlongs helps municipal historians map downtown centers."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Confusing furlongs with yards: A furlong (220 yards) is much longer than a yard. Confusing these two units leads to an error of over 21,900% in land measurements.",
      "Early decimal rounding: Rounding the divisor to 200.0 simplifies mental calculations, but introduces an error of over 0.58%. Always use 201.168 for precision work.",
      "Assuming the furlong is a metric unit: The furlong is a traditional unit of length, but its official definition is internationally anchored to the metric system for precise consistency."
    ]
  },
  faqs: [
    {
      question: "Are furlongs still used today?",
      answer: "Yes. While rare in daily conversation, the furlong is still widely used in horse racing, historic property deeds, and farm boundaries throughout North America."
    },
    {
      question: "How many feet are in a standard furlong?",
      answer: "There are exactly 660 feet (or 220 yards) in a standard international furlong."
    },
    {
      question: "How do I convert meters to furlongs manually?",
      answer: "To convert meters to furlongs manually, divide the meter value by 201.168. For example, 100 meters divided by 201.168 is approximately 0.497 furlongs."
    },
    {
      question: "What is Gunter's furlong?",
      answer: "A furlong contains exactly 10 chains or 40 rods. The term 'furlong' was standardized under Edmund Gunter's system to represent exactly 1/8th of a standard mile."
    },
    {
      question: "How many furlongs make a mile?",
      answer: "There are exactly 8 furlongs in one standard statute mile."
    },
    {
      question: "Does this conversion work for decimal values?",
      answer: "Yes, the exact same mathematical divisor of 201.168 applies to all decimal values. For instance, 50.5 meters is equal to approximately 0.251 furlongs."
    },
    {
      question: "What is the abbreviation for the furlong unit?",
      answer: "The standard abbreviation for the furlong is 'fur', written in lowercase without any punctuation."
    },
    {
      question: "Why was the furlong defined as 660 feet?",
      answer: "The length of 660 feet was standardized in medieval England because it represented the ideal furrow distance a team of oxen could plow in a single day without resting."
    }
  ],
  relatedList: [
    { label: "Furlong to Meter", from: "furlong", to: "meter" },
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
    { label: "Meter to Rod", from: "meter", to: "rod" },
    { label: "Meter to Chain", from: "meter", to: "chain" },
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
