import { CustomArticleData } from "./types";

export const meterToLeague: CustomArticleData = {
  fromUnitId: "meter",
  toUnitId: "league",
  seoTitle: "Meter to League Converter - m to lea",
  metaDescription: "Convert meters to leagues (m to lea) with high precision. See the traditional conversion factor, manual formula, table, and FAQs.",
  h1: "Meter to League Converter",
  introduction: [
    "Translating length measurements from meters (m) to leagues (lea) bridges modern scientific metric units with historical maritime and military charting practices. Famous in literature and classical oceanography, the league represents a traditional measure of long-distance navigation that remains relevant in historical studies, coastal legal claims, and cartography.",
    "This reference guide provides a scientifically accurate breakdown of the meter-to-league conversion. It includes the exact conversion factor established by international standardizers, details manual calculation steps, provides worked examples, and addresses common mistakes in analyzing historical deeds."
  ],
  quickAnswer: {
    text: "One meter is exactly equivalent to 0.0002071237299 leagues. Conversely, one standard international league is defined as exactly 4,828.032 meters (or exactly 3 miles).",
    formulaDisplay: "1 m = 0.0002071237299 lea",
    subtext: "To convert meters to leagues, divide the metric value by 4,828.032, or multiply by the decimal conversion coefficient."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter (m)",
    text: "The meter is the SI base unit of length, defined in modern quantum physics by the speed of light in a vacuum. Light covers exactly one meter in a duration of 1/299,792,458 of a second. This absolute definition guarantees that the meter is stable, highly reproducible, and independent of any physical artifact."
  },
  aboutTargetUnit: {
    title: "Understanding the League (lea)",
    text: "The league is an ancient unit of length that historically represented the distance a person could walk in one hour (defined in the Anglo-American tradition as exactly three statute miles). Originally used by ancient Celtic and Roman armies, the league has varied significantly across European history. Under the International Yard and Pound Agreement of 1959, which fixed the statute mile, the standard international league was locked at exactly 4,828.032 meters, linking historical ocean charts directly to the metric system."
  },
  relationship: "The standard league is a multiple of the meter. Because a league contains exactly 3 standard statute miles, and each mile contains exactly 1,609.344 meters, a league is equal to exactly 3 × 1,609.344 = 4,828.032 meters.",
  relationshipItems: [
    { label: "Meters to Leagues", value: "1 m = 0.0002071237299 lea" },
    { label: "Leagues to Meters", value: "1 lea = 4,828.032 m" }
  ],
  formula: {
    text: "To find leagues from meters manually, divide your metric value by 4,828.032. Alternatively, multiply the meter value by the decimal factor of 0.0002071237299.",
    math: "Leagues (lea) = Meters (m) / 4,828.032",
    subtext: "Using 4,828.032 as the divisor guarantees that your calculations align precisely with historical naval standards."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting a Coastline Distance",
        subtitle: "Convert a shoreline boundary of 15,000 meters into leagues.",
        steps: [
          "Identify the starting length: 15,000 meters.",
          "Apply the standard formula: Divide the meter value by 4,828.032.",
          "Perform the division: 15,000 / 4,828.032 = 3.106855961.",
          "State the final result: 15,000 meters is equivalent to approximately 3.11 leagues."
        ]
      },
      {
        title: "Example 2: Analyzing Historical Naval Records",
        subtitle: "Convert 24,140.16 meters of a historic ship route to leagues.",
        steps: [
          "Identify the starting length: 24,140.16 meters.",
          "Apply the divisor: Divide by 4,828.032.",
          "Perform the arithmetic: 24,140.16 / 4,828.032 = 5.",
          "State the final result: 24,140.16 meters is exactly equal to 5 leagues."
        ]
      }
    ]
  },
  table: {
    title: "Meter to League Reference Table",
    headers: ["Meters (m)", "Leagues (lea)", "Imperial Statute Miles Equivalent"],
    rows: [
      { fromVal: "100", toVal: "0.0207", extra: "Approx. 328.1 feet" },
      { fromVal: "1,000", toVal: "0.2071", extra: "Exactly 1 kilometer" },
      { fromVal: "4,828.032", toVal: "1.0000", extra: "Exactly 3 statute miles" },
      { fromVal: "10,000", toVal: "2.0712", extra: "Approx. 6.2 statute miles" },
      { fromVal: "14,484.096", toVal: "3.0000", extra: "Exactly 9 statute miles (three-mile limit)" },
      { fromVal: "20,000", toVal: "4.1425", extra: "Approx. 12.4 statute miles" },
      { fromVal: "50,000", toVal: "10.3562", extra: "Approx. 31.1 statute miles" },
      { fromVal: "100,000", toVal: "20.7124", extra: "Approx. 62.1 statute miles" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Maritime History & Cartography",
        text: "Navigational charts from the seventeenth to nineteenth centuries record sea boundaries in leagues (such as the historic 'three-mile limit' for territorial seas). Translating metric data to leagues helps historians understand old ship logs."
      },
      {
        title: "Historical Literature Analysis",
        text: "In classical adventure literature, such as Jules Verne's 'Twenty Thousand Leagues Under the Sea', distances are described in leagues. Converting these literary distances to meters helps readers visualize the true scale of the journey."
      },
      {
        title: "Military Terrain Studies",
        text: "Military historians analyze old battle plans that mapped troop movements in leagues. Converting these to metric lengths is necessary to place these maneuvers onto modern topographic maps."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Confusing the land league with the marine league: A land league is based on three statute miles (4,828.032 meters), whereas a marine league is based on three nautical miles (5,556 meters). Always verify which standard is used in your context.",
      "Early decimal rounding: Rounding the divisor to 4,800 simplifies mental calculations, but introduces an error of over 0.58%. Always use 4,828.032 for precise legal work.",
      "Assuming the league is a metric unit: The league is a traditional unit of length, but its official definition is internationally anchored to the metric system for precise consistency."
    ]
  },
  faqs: [
    {
      question: "Are leagues still used today?",
      answer: "No. The league is considered an obsolete unit and is no longer used in daily navigation or science, but remains highly relevant in historical, legal, and literary studies."
    },
    {
      question: "How many feet are in a standard league?",
      answer: "There are exactly 15,840 feet (or 5,280 yards) in a standard international land league."
    },
    {
      question: "How do I convert meters to leagues manually?",
      answer: "To convert meters to leagues manually, divide the meter value by 4,828.032. For example, 10,000 meters divided by 4,828.032 is approximately 2.071 leagues."
    },
    {
      question: "What is Jules Verne's league?",
      answer: "In 'Twenty Thousand Leagues Under the Sea', Verne used the French metric league (approx. 4,000 meters). The title refers to the total distance traveled under water, not the depth of the submarine."
    },
    {
      question: "How many leagues make a mile?",
      answer: "A standard league is equal to exactly 3 statute miles."
    },
    {
      question: "Does this conversion work for decimal values?",
      answer: "Yes, the exact same mathematical divisor of 4,828.032 applies to all decimal values. For instance, 500.5 meters is equal to approximately 0.104 leagues."
    },
    {
      question: "What is the abbreviation for the league unit?",
      answer: "The standard abbreviation for the league is 'lea', written in lowercase without any punctuation."
    },
    {
      question: "Why was the league defined as 3 miles?",
      answer: "The length of 3 miles was standardized because it represented the average walking distance of a healthy person in one hour under standard conditions."
    }
  ],
  relatedList: [
    { label: "League to Meter", from: "league", to: "meter" },
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
    { label: "Meter to Furlong", from: "meter", to: "furlong" },
    { label: "Meter to Hand", from: "meter", to: "hand" },
    { label: "Meter to Cubit", from: "meter", to: "cubit" }
  ],
  references: [
    "International Yard and Pound Agreement (1959).",
    "National Institute of Standards and Technology (NIST) - Land Surveying Guide.",
    "English Weights and Measures Act of 1824."
  ]
};
