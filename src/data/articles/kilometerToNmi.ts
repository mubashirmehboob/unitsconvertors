import { CustomArticleData } from "./types";

export const kilometerToNmi: CustomArticleData = {
  fromUnitId: "kilometer",
  toUnitId: "nautical-mile",
  seoTitle: "Kilometer to Nautical Mile | km to nmi Converter",
  metaDescription: "Convert kilometers to nautical miles (km to nmi) with precision. Understand standard sea calculations, manual formulas, worked examples, and FAQs.",
  h1: "Kilometer to Nautical Mile Converter",
  introduction: [
    "Navigating across open oceans or tracking flight paths requires length standards that correspond to the curvature of the Earth. While kilometers (km) are standard on roads and topographic maps, nautical miles (nmi) are standard in international shipping and aviation. Translating kilometers into nautical miles is critical for flight crews, ship captains, and oceanographers.",
    "Converting kilometers to nautical miles is straightforward once you know the fixed relationship between the two units. The sections below explain the formula, provide worked examples, and show where this conversion is commonly used."
  ],
  quickAnswer: {
    text: "One kilometer is equivalent to approximately 0.539956803 nautical miles. Conversely, one standard international nautical mile is defined as exactly 1.852 kilometers (or 1,852 meters).",
    formulaDisplay: "1 km ≈ 0.539957 nmi",
    subtext: "To convert kilometers to nautical miles, divide your kilometer value by 1.852, or multiply by the decimal conversion coefficient."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilometer (km)",
    text: "The kilometer is an officially recognized metric unit of length defined as exactly 1,000 meters. Symbolized by 'km', it is used internationally to measure road networks, train lines, and civilian boundary lines on land."
  },
  aboutTargetUnit: {
    title: "Understanding the Nautical Mile (nmi)",
    text: "The nautical mile is an international unit of length equal to exactly 1,852 meters. Historically, a nautical mile was defined as one minute of arc along a meridian of latitude (1/60th of a degree), linking map calculations directly to the Earth's circumference. While not an official SI unit, it is accepted globally for aviation and sea travel."
  },
  relationship: "Because the international nautical mile is fixed at exactly 1,852 meters and a kilometer contains exactly 1,000 meters, their conversion ratio is defined as 1,000 / 1,852. This gives an exact fractional ratio of 250 / 463, or approximately 0.539957 nautical miles per kilometer.",
  relationshipItems: [
    { label: "Kilometers to Nautical Miles", value: "1 km ≈ 0.539957 nmi" },
    { label: "Nautical Miles to Kilometers", value: "1 nmi = 1.852 km" }
  ],
  formula: {
    text: "To convert kilometers to nautical miles, divide the kilometer distance value by the constant 1.852.",
    math: "Nautical Miles (nmi) = Kilometers (km) / 1.852",
    subtext: "For rapid marine estimates, dividing the kilometers by 1.8 or multiplying by 0.54 provides a reliable mental conversion."
  },
  examples: {
    title: "Practical Navigation Examples",
    items: [
      {
        title: "Example 1: Plotting a Ship's Course",
        subtitle: "Convert a coastguard search range of 75 kilometers into nautical miles.",
        steps: [
          "State the starting distance: 75 kilometers.",
          "Apply the formula: Divide the kilometer value by 1.852.",
          "Perform the division: 75 / 1.852 = 40.4967602.",
          "State the final result: 75 kilometers is equivalent to approximately 40.50 nautical miles."
        ]
      },
      {
        title: "Example 2: Aviation Route Alignment",
        subtitle: "Convert a radar runway approach offset of 12.5 kilometers to nautical miles.",
        steps: [
          "State the starting distance: 12.5 kilometers.",
          "Apply the multiplier: Multiply 12.5 by the decimal coefficient 0.539956803.",
          "Calculate the product: 12.5 × 0.539956803 = 6.74946003.",
          "State the final result: 12.5 kilometers is equivalent to approximately 6.75 nautical miles."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer to Nautical Mile Conversion Chart",
    headers: ["Kilometers (km)", "Nautical Miles (nmi)", "Practical Maritime Meaning"],
    rows: [
      { fromVal: "1", toVal: "0.5400", extra: "About 1/2 of a nautical mile" },
      { fromVal: "5", toVal: "2.6998", extra: "About 2 and 7/10 nautical miles" },
      { fromVal: "10", toVal: "5.3996", extra: "About 5 and 2/5 nautical miles" },
      { fromVal: "20", toVal: "10.7991", extra: "About 10 and 4/5 nautical miles" },
      { fromVal: "50", toVal: "26.9978", extra: "About 27 nautical miles" },
      { fromVal: "100", toVal: "53.9957", extra: "About 54 nautical miles" }
    ]
  },
  applications: {
    title: "Where This Conversion is Used",
    items: [
      {
        title: "Maritime Navigation & Logistics",
        text: "Global shipping companies plot paths in nautical miles to calculate vessel travel hours and fuel usage, but must convert coordinates to kilometers when communicating with land-bound port agencies."
      },
      {
        title: "Aviation & Weather Tracking",
        text: "Aircraft speeds and flight vectors are defined in knots (nautical miles per hour). Pilots convert regional weather reports, which list wind fronts in kilometers, to coordinate navigation vectors."
      },
      {
        title: "Coast Guard Search & Rescue",
        text: "Search patterns utilize radar screens calibrated in kilometers, but coordinators translate search tracks to nautical miles to direct sea patrol vessels."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls",
    items: [
      "Confusing statute miles with nautical miles: Nautical miles are longer than statute miles (1 nmi = 1.852 km vs 1 statute mile = 1.609344 km). Mixing them up causes significant drift errors during navigation.",
      "Over-simplifying with mental factors: Dividing kilometers by 2 simplifies math but introduces an error of up to 10%. Always divide by exactly 1.852 for flight planning.",
      "Misidentifying speed units: Knots represent nautical miles per hour. Avoid converting kilometer speeds directly to knots without dividing by the 1.852 constant."
    ]
  },
  faqs: [
    {
      question: "How many nautical miles are in a kilometer?",
      answer: "There are approximately 0.539957 nautical miles in one kilometer. It is roughly equal to slightly more than half a nautical mile."
    },
    {
      question: "What is the formula to convert km to nautical miles?",
      answer: "The formula is: Nautical Miles (nmi) = Kilometers (km) / 1.852. Divide your kilometer value by 1.852 to convert."
    },
    {
      question: "Why is a nautical mile exactly 1,852 meters?",
      answer: "By international agreement in 1929, standardizers unified varying definitions of sea miles. They established the international nautical mile at exactly 1,852 meters, aligning it with the metric system."
    },
    {
      question: "Is a nautical mile different from a normal mile?",
      answer: "Yes, a nautical mile is longer than a standard land mile (1 nmi = 1.852 km, whereas 1 statute mile = 1.609344 km). A nautical mile corresponds to Earth's latitude lines."
    },
    {
      question: "What is the official symbol for a nautical mile?",
      answer: "The widely accepted symbols are 'nmi' or 'NM'. Alternatively, some maritime agencies use 'M'."
    },
    {
      question: "How many nautical miles is 10 kilometers?",
      answer: "10 kilometers is equivalent to approximately 5.40 nautical miles."
    },
    {
      question: "Why do planes and ships use nautical miles?",
      answer: "Because nautical miles are modeled after coordinates of latitude (one minute of arc), navigating along the Earth's spherical surface is much simpler to compute with nautical miles than land miles."
    },
    {
      question: "Is the conversion factor different in the southern hemisphere?",
      answer: "No. The international nautical mile standard of 1,852 meters is an absolute, fixed constant used identically across all regions and airspace."
    }
  ],
  relatedList: [
    { label: "Nautical Mile to Kilometer", from: "nautical-mile", to: "kilometer" },
    { label: "Kilometer to Meter", from: "kilometer", to: "meter" },
    { label: "Kilometer to Centimeter", from: "kilometer", to: "centimeter" },
    { label: "Kilometer to Millimeter", from: "kilometer", to: "millimeter" },
    { label: "Kilometer to Micrometer", from: "kilometer", to: "micrometer" },
    { label: "Kilometer to Nanometer", from: "kilometer", to: "nanometer" },
    { label: "Kilometer to Mile", from: "kilometer", to: "mile" },
    { label: "Kilometer to Yard", from: "kilometer", to: "yard" },
    { label: "Kilometer to Foot", from: "kilometer", to: "foot" },
    { label: "Kilometer to Inch", from: "kilometer", to: "inch" },
    { label: "Kilometer to Rod", from: "kilometer", to: "rod" },
    { label: "Kilometer to Chain", from: "kilometer", to: "chain" },
    { label: "Kilometer to Furlong", from: "kilometer", to: "furlong" },
    { label: "Kilometer to League", from: "kilometer", to: "league" },
    { label: "Kilometer to Hand", from: "kilometer", to: "hand" },
    { label: "Kilometer to Cubit", from: "kilometer", to: "cubit" }
  ],
  references: [
    "First Extraordinary International Hydrographic Conference, Monaco, 1929.",
    "BIPM SI Brochure - Non-SI units accepted for use with the SI.",
    "International Civil Aviation Organization (ICAO) - Annex 5 - Units of Measurement."
  ]
};
