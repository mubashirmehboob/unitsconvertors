import { CustomArticleData } from "./types";

export const squareMeterToBigha: CustomArticleData = {
  fromUnitId: "square-meter",
  toUnitId: "bigha",
  seoTitle: "Square Meter to Bigha Converter - m² to bigha",
  metaDescription: "Convert square meters to bigha (m² to bigha). Learn the regional Indian and Nepalese land formulas, step-by-step calculations, and reference table.",
  h1: "Square Meter to Bigha Converter",
  introduction: [
    "When conducting land registry searches, managing family-owned estates, or investing in real estate across South Asia, you will frequently encounter traditional land units. The bigha is one of the most prominent historic units of land area used across India, Nepal, and Bangladesh, while square meters serve as the modern metric standard for official government records.",
    "Because the exact size of a bigha varies significantly by state and country, converting square meters to bigha requires careful attention to regional standards. This guide explains how to convert square meters to the standard bigha measurements used across different regions."
  ],
  quickAnswer: {
    text: "In standard Indian states like Bihar and West Bengal, 1 bigha is approximately 2,529 square meters. Therefore, to convert square meters to bigha, you divide your area value by 2,529.3. In Nepal, 1 bigha is exactly 6,772.63 square meters.",
    formulaDisplay: "1 m² ≈ 0.000395 bigha (Standard Bihar/Bengal)",
    subtext: "Since a bigha represents a major farming plot, it is a large traditional unit containing thousands of square meters, depending on local state legislation."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Meter (m²)",
    text: "The square meter (symbol: m²) is the primary SI derived unit of area. It represents the space enclosed by a square with sides that are exactly one meter long. It is the modern global standard for representing housing sizes, commercial footprints, and localized municipal zoning parcels."
  },
  aboutTargetUnit: {
    title: "Understanding the Bigha",
    text: "The bigha is a traditional unit of land measurement popular in India, Nepal, and Bangladesh. Unlike standardized SI units, the bigha's value is highly regional. It is commonly divided into smaller units called Katha and Dhur, and is the primary unit for agricultural trade in rural South Asia."
  },
  relationship: "Historically, the bigha represented the area of land that could be plowed by a team of oxen in a single day. Today, state governments have formalized the unit. In West Bengal and Bihar, a bigha is set at 27,000 square feet (approx. 2,529.3 square meters). In Nepal, it is equivalent to 6,772.63 square meters.",
  relationshipTitle: "The Regional Standard: m² vs Bigha",
  relationshipItems: [
    { label: "1 Square Meter (m²)", value: "approx. 0.000395 Bigha (Bihar/Bengal Standard)" },
    { label: "1 Bigha (West Bengal/Bihar)", value: "exactly 2,529.285 square meters" },
    { label: "1 Bigha (Nepal Standard)", value: "exactly 6,772.63 square meters" }
  ],
  formula: {
    text: "Calculate the equivalent area in bigha by dividing the total number of square meters by the regional bigha factor (using 2,529.285 for the standard Indian bigha).",
    math: "Area in Bigha = Area in Square Meters (m²) / 2,529.285",
    subtext: "For Nepal, the formula is: Area in Bigha = Area in Square Meters (m²) / 6,772.63."
  },
  formulaTitle: "The Square Meter to Bigha Formula",
  practicalTip: {
    title: "Check Your State Guidelines First",
    text: "Always confirm the exact geographic location of the property before performing a conversion. A bigha in Rajasthan is different from a bigha in Uttar Pradesh, West Bengal, or Nepal."
  },
  examples: {
    title: "Practical Step-by-Step Examples",
    items: [
      {
        title: "Example 1: Sizing an Agricultural Estate in Bihar",
        subtitle: "A land deed in Bihar, India lists an agricultural plot with an area of 12,500 square meters. Convert this plot size to bigha.",
        steps: [
          "State the starting area in square meters: 12,500 m².",
          "Identify the regional conversion factor for Bihar: 1 bigha = 2,529.285 m².",
          "Apply the area conversion formula: Bigha = 12,500 / 2,529.285.",
          "Complete the division: approx. 4.942 Bigha.",
          "Conclude: The agricultural estate covers approximately 4.94 bigha."
        ]
      },
      {
        title: "Example 2: Farming Plot in Nepal",
        subtitle: "A farmer in Nepal owns a flat farming plot measuring 20,000 square meters. Find this farming plot size in Nepalese bigha.",
        steps: [
          "Identify the starting area: 20,000 m².",
          "Identify the conversion factor for Nepal: 1 bigha = 6,772.63 m².",
          "Apply the formula: Bigha = 20,000 / 6,772.63.",
          "Divide to find the result: approx. 2.953 Bigha.",
          "Conclude: The Nepalese farming plot is equivalent to approximately 2.95 bigha."
        ]
      }
    ]
  },
  table: {
    title: "Square Meter to Bigha Reference Table (Bihar/West Bengal Standard)",
    headers: ["Square Meters (m²)", "Bigha (Standard)", "Relative Comparison"],
    rows: [
      { fromVal: "500 m²", toVal: "0.198 Bigha", extra: "A large rural family home footprint" },
      { fromVal: "1,000 m²", toVal: "0.395 Bigha", extra: "A standard neighborhood playground footprint" },
      { fromVal: "2,529 m²", toVal: "1.000 Bigha", extra: "Exactly one full standard bigha of land" },
      { fromVal: "5,000 m²", toVal: "1.977 Bigha", extra: "A medium-sized livestock pasture paddock" },
      { fromVal: "10,000 m²", toVal: "3.953 Bigha", extra: "Exactly one metric hectare of land" },
      { fromVal: "25,000 m²", toVal: "9.884 Bigha", extra: "A major commercial farming field" }
    ]
  },
  applications: {
    title: "Real-World Land Applications",
    items: [
      {
        title: "Agricultural Real Estate Transactions",
        text: "Rural land buyers and sellers in India and Nepal negotiate crop fields, tea estates, and family lands in bigha, which must be converted to square meters for official government land registration deeds."
      },
      {
        title: "Government Taxation and Land Records",
        text: "Municipal revenue offices and state tax agencies record agricultural lands using modern square meter measurements while communicating with farmers using bigha terms."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting m² to Bigha",
    items: [
      "Using the wrong regional factor: Because a bigha can range from 1,337 m² in some states to 6,772 m² in Nepal, using a single generalized converter factor can lead to massive financial and legal errors. Always check state-specific definitions.",
      "Confusing Bigha, Katha, and Dhur: Land measures are hierarchical. Ensure you are converting directly to bigha rather than intermediate local subdivisions like Katha or Dhur."
    ]
  },
  faqs: [
    {
      question: "Why is the bigha not a standardized unit of area?",
      answer: "The bigha is a traditional unit that originated before modern scientific standards. It was historically defined by local cultural practices, such as the area of land a farmer could cultivate in a day. Modern state governments have standardized the unit within their own borders, leading to different regional values."
    },
    {
      question: "How many square meters are in a standard Indian bigha?",
      answer: "In Bihar, West Bengal, and Assam, a standard bigha is defined as 27,000 square feet, which is equivalent to exactly 2,529.285 square meters."
    },
    {
      question: "How many square meters are in a Nepalese bigha?",
      answer: "In Nepal, a bigha is defined as 6,772.63 square meters (or approximately 72,900 square feet)."
    },
    {
      question: "How do I convert bigha back to square meters?",
      answer: "To convert bigha to square meters, multiply the bigha value by the regional conversion factor (e.g., multiply by 2,529.285 for the Bihar/West Bengal standard)."
    },
    {
      question: "Can I use this converter for urban property plots?",
      answer: "While modern urban properties are registered in square meters, square feet, or square yards, rural agricultural lands in South Asia are almost exclusively managed using bigha."
    },
    {
      question: "Is a bigha larger than an acre?",
      answer: "In Bihar and West Bengal, an acre (4,046.85 m²) is larger than a bigha (2,529.28 m²). However, in Nepal and some parts of India like Uttar Pradesh, a bigha is much larger than an acre."
    },
    {
      question: "How many Katha are in one bigha?",
      answer: "Across most South Asian systems, one bigha is divided into exactly 20 Katha."
    },
    {
      question: "What is 10,000 square meters in standard Indian bigha?",
      answer: "Using the standard factor of 2,529.285, dividing 10,000 by 2,529.285 gives approximately 3.95 bigha."
    }
  ],
  relatedList: [
    { label: "Bigha to Square Meter", from: "bigha", to: "square-meter" },
    { label: "Square Meter to Acre", from: "square-meter", to: "acre" }
  ],
  references: [
    "Government of West Bengal - Land & Land Reforms Department Guidelines",
    "Ministry of Land Reform and Management, Government of Nepal - Survey Specifications"
  ]
};
