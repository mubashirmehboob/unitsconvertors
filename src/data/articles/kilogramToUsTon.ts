import { CustomArticleData } from "./types";

export const kilogramToUsTon: CustomArticleData = {
  fromUnitId: "kilogram",
  toUnitId: "us-ton",
  seoTitle: "Kilogram to US Ton Converter - kg to ton (Short Ton)",
  metaDescription: "Convert kilograms to US short tons (kg to ton) quickly. Learn the exact 907.18474 kg factor, formula, worked calculations, and North American freight tables.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-to-us-ton",
  h1: "Kilogram to US Ton Converter",
  introduction: [
    "The kilogram and the US short ton (commonly known simply as the 'ton' in the United States) represent mass in the metric and US Customary systems. While the kilogram is the base mass standard across international scientific, manufacturing, and global shipping operations, the US short ton remains the dominant commercial unit across North American domestic freight trucking, quarry material delivery, scrap recycling, and bridge weight limits.",
    "Converting kilograms to US short tons bridges the gap between metric export manifests and US domestic commerce regulations. Defined as exactly 2,000 avoirdupois pounds (907.18474 kilograms), the US ton is approximately 9.3% smaller than the international metric ton (1,000 kg)."
  ],
  quickAnswer: {
    text: "To convert kilograms to US short tons, divide the kilogram value by 907.18474 (or multiply by 0.00110231). For example, 10,000 kilograms is equal to approximately 11.02 US tons.",
    formulaDisplay: "1 kg ≈ 0.00110231 US ton",
    subtext: "Divide any weight in kilograms by 907.18474 to calculate the exact weight in US short tons (2,000 lbs)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the base unit of mass in the International System of Units (SI). Defined via the quantum Planck constant ($h$), the kilogram serves as the universal mass benchmark for all scientific research, global trade, industrial commodities, and vehicle specifications."
  },
  aboutTargetUnit: {
    title: "Understanding the US Ton (Short Ton)",
    text: "The US ton (symbol: ton, often designated as 'short ton' or 'ST') is a US customary unit of mass equal to exactly 2,000 avoirdupois pounds or 907.18474 kilograms. Widely used throughout the United States and Canada, the US short ton is the standard unit for highway gross vehicle weight ratings (GVWR), concrete aggregate billing, scrap steel recycling, and municipal waste management."
  },
  relationship: "Because 1 US short ton is defined as exactly 2,000 avoirdupois pounds ($2,000 \\times 0.45359237\\text{ kg}$), one US ton equals exactly 907.18474 kilograms. Inverting this relationship yields $1 / 907.18474 \\approx 0.00110231131$ US short tons per kilogram.",
  relationshipTitle: "Kilogram to US Short Ton Mathematical Basis",
  relationshipItems: [
    { label: "1 US Short Ton (ton)", value: "907.18474 Kilograms (kg)" },
    { label: "1 Kilogram (kg)", value: "≈ 0.00110231 US Tons" },
    { label: "1 US Short Ton (ton)", value: "2,000 Pounds (lbs)" },
    { label: "1 Metric Ton (tonne)", value: "1.10231 US Short Tons" }
  ],
  formula: {
    text: "To convert kilograms to US short tons, divide the kilogram value by 907.18474, or multiply by 0.00110231131.",
    math: "Mass in US Tons (ton) = Mass in Kilograms (kg) / 907.18474",
    subtext: "Or: ton = kg × 0.00110231131"
  },
  formulaTitle: "Kilogram to US Short Ton Conversion Formula",
  practicalTip: {
    title: "North American Trucking Tip",
    text: "US Department of Transportation (DOT) interstate highway regulations set the maximum legal gross vehicle weight at 80,000 lbs (40 US short tons). In kilograms, this corresponds to exactly $80,000 \\times 0.45359237 = 36,287.39\\text{ kg}$."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: US Freight Truck Axle Loading",
        subtitle: "A commercial tractor-trailer carrying imported metric steel coils weighs 24,500 kilograms at a highway weigh station. Convert this weight into US short tons.",
        steps: [
          "Identify the weight in kilograms: 24,500 kg.",
          "Apply the conversion formula: ton = 24,500 / 907.18474.",
          "Perform the calculation: 24,500 / 907.18474 ≈ 27.0066 US tons.",
          "Conclude the calculation: 24,500 kg corresponds to approximately 27.01 US short tons (54,013 lbs)."
        ]
      },
      {
        title: "Example 2: Scrap Metal Recycling Lot",
        subtitle: "A recycling yard processes 6,800 kilograms of shredded copper wire. Determine the payout weight in US short tons.",
        steps: [
          "Identify the scrap weight: 6,800 kg.",
          "Multiply by the conversion factor: 6,800 × 0.00110231131 = 7.4957 US tons.",
          "Conclude the calculation: 6,800 kg equals approximately 7.50 US short tons (14,991 lbs)."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram to US Short Ton Conversion Reference Table",
    headers: ["Kilograms (kg)", "US Short Tons (ton)", "Pounds (lbs)", "Commercial & Industrial Application"],
    rows: [
      { fromVal: "500", toVal: "0.551", extra: "1,102.3 lbs", extra2: "Light trailer payload" },
      { fromVal: "907.18", toVal: "1.000", extra: "2,000.0 lbs", extra2: "Exact definition of one US short ton" },
      { fromVal: "1,000", toVal: "1.102", extra: "2,204.6 lbs", extra2: "One standard metric ton (tonne)" },
      { fromVal: "2,500", toVal: "2.756", extra: "5,511.6 lbs", extra2: "Heavy-duty full-size pickup truck" },
      { fromVal: "5,000", toVal: "5.512", extra: "11,023.1 lbs", extra2: "Small commercial dump truck payload" },
      { fromVal: "10,000", toVal: "11.023", extra: "22,046.2 lbs", extra2: "Medium quarry haul truck load" },
      { fromVal: "20,000", toVal: "22.046", extra: "44,092.5 lbs", extra2: "Standard loaded semi-trailer freight" },
      { fromVal: "36,287", toVal: "40.000", extra: "80,000.0 lbs", extra2: "US Federal Interstate Highway maximum GVWR" },
      { fromVal: "50,000", toVal: "55.116", extra: "110,231.1 lbs", extra2: "Heavy railroad freight hopper car payload" }
    ]
  },
  expertNote: {
    title: "US Short Ton vs. Metric Ton vs. UK Long Ton",
    text: "• US Short Ton = 2,000 lbs = 907.185 kg (Standard US & Canada).\n• Metric Ton (Tonne) = 2,204.62 lbs = 1,000 kg (Global SI Standard).\n• UK Long Ton = 2,240 lbs = 1,016.05 kg (Traditional British Imperial).\nA US short ton is roughly 10% lighter than a metric ton."
  },
  applications: {
    title: "Common Applications of Kilogram to US Ton Conversions",
    items: [
      {
        title: "North American Interstate Trucking & Freight",
        text: "Logistics coordinators convert imported metric bills of lading (in kg) into US short tons to ensure compliance with state and federal highway axle weight limits."
      },
      {
        title: "Quarry Aggregates, Sand & Concrete Delivery",
        text: "Building material suppliers price and bill bulk gravel, sand, asphalt, and ready-mix materials in US short tons based on metric certified truck scales."
      },
      {
        title: "Civil Structural Engineering & Crane Rigging",
        text: "Mobile crane load charts and structural bridge capacity ratings in the US specify maximum lifting capacities in short tons, requiring equipment mass conversions from kilograms."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Kilogram to US Ton Conversions",
    items: [
      "Confusing US short tons with metric tons: Dividing by 1,000 gives metric tons (tonnes), not US tons. You must divide by 907.18474 to calculate US short tons.",
      "Assuming all 'tons' mean 2,000 pounds: International shipping contracts usually specify 1,000 kg metric tonnes, whereas US domestic road freight uses 2,000 lb short tons.",
      "Multiplication vs. division errors: Because a US ton is much larger than a kilogram, converting kg to tons must yield a smaller numerical value."
    ]
  },
  faqs: [
    {
      question: "How many kilograms are in one US short ton?",
      answer: "There are exactly 907.18474 kilograms in one US short ton (2,000 pounds)."
    },
    {
      question: "What is the formula to convert kg to US tons?",
      answer: "The formula is: Mass in US Tons (ton) = Mass in Kilograms (kg) / 907.18474 (or kg × 0.00110231)."
    },
    {
      question: "How many US tons is 1,000 kg (1 metric ton)?",
      answer: "1,000 kg (1 metric ton) is equal to approximately 1.10231 US short tons."
    },
    {
      question: "How many US tons is 5,000 kg?",
      answer: "5,000 kg is equal to approximately 5.512 US short tons (5,000 / 907.18474 = 5.51156 tons)."
    },
    {
      question: "What is the difference between a short ton and a long ton?",
      answer: "A US short ton is 2,000 pounds (907.18 kg), while a British imperial long ton is 2,240 pounds (1,016.05 kg)."
    },
    {
      question: "How many pounds are in a US short ton?",
      answer: "There are exactly 2,000 avoirdupois pounds in a US short ton."
    },
    {
      question: "How do I convert US short tons back to kilograms?",
      answer: "Multiply the US ton value by 907.18474 to calculate the mass in kilograms."
    },
    {
      question: "What is the maximum legal highway truck weight in US tons?",
      answer: "The standard US federal gross vehicle weight rating (GVWR) limit for interstate highways is 40 US tons (80,000 lbs or approx. 36,287 kg)."
    }
  ],
  relatedList: [
    { label: "Kilogram to Metric Ton", from: "kilogram", to: "metric-ton" },
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" },
    { label: "Kilogram to Gram", from: "kilogram", to: "gram" },
    { label: "Gram to US Ton", from: "gram", to: "us-ton" },
    { label: "Kilogram to Stone", from: "kilogram", to: "stone" }
  ],
  references: [
    "NIST Handbook 44 - Appendix C: General Tables of Units of Measurement",
    "U.S. Department of Transportation (DOT) - Federal Highway Administration Freight Management and Operations",
    "American Society for Testing and Materials (ASTM) - Standard Practice for Use of the International System of Units (SI)"
  ]
};
