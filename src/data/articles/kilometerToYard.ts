import { CustomArticleData } from "./types";

export const kilometerToYard: CustomArticleData = {
  fromUnitId: "kilometer",
  toUnitId: "yard",
  seoTitle: "Kilometer to Yard | km to yd Converter",
  metaDescription: "Convert kilometers to yards (km to yd) with high accuracy. Learn the conversion math, step-by-step calculations, reference tables, and FAQs.",
  h1: "Kilometer to Yard Converter",
  introduction: [
    "Whether laying out athletic facilities, managing forestry tracks, or organizing local land boundaries, civil engineers often transition between metric kilometers and imperial yards. Yards (yd) are standard in golf course design, American football stadiums, and traditional surveying, whereas kilometers (km) are standard for global geographic maps.",
    "This reference guide provides an accurate, complete analysis of the kilometer-to-yard conversion. It lists the exact conversion constants, demonstrates step-by-step manual calculation procedures, and addresses typical measurement errors."
  ],
  quickAnswer: {
    text: "One kilometer is equivalent to approximately 1,093.613298 yards. Conversely, one standard international yard is defined as exactly 0.9144 meters (or 0.0009144 kilometers).",
    formulaDisplay: "1 km ≈ 1,093.61 yd",
    subtext: "To convert kilometers to yards manually, multiply the kilometer value by 1093.613, or divide the value by 0.0009144."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilometer (km) Metric",
    text: "The kilometer is a metric unit of length defined as exactly one thousand meters. Used globally to track long travel paths, road signs, and flight paths, it provides a stable standard aligned with the SI base unit."
  },
  aboutTargetUnit: {
    title: "Understanding the Yard (yd) Metric",
    text: "The yard is an imperial unit of length common in traditional British and US Customary measurement systems. Historically modeled after physical objects, the yard was stabilized by the 1959 International Yard and Pound Agreement, establishing that one international yard is exactly equal to 0.9144 meters."
  },
  relationship: "Because the yard is legally defined as exactly 0.9144 meters, converting a kilometer (1,000 meters) to yards results in a repeating decimal. One kilometer equals exactly 1000 / 0.9144, or roughly 1,093.613 yards.",
  relationshipItems: [
    { label: "Kilometers to Yards", value: "1 km ≈ 1,093.613 yd" },
    { label: "Yards to Kilometers", value: "1 yd = 0.0009144 km" }
  ],
  formula: {
    text: "To switch kilometers to yards, divide the kilometer value by 0.0009144. Alternatively, multiply the kilometer measurement by the decimal coefficient of 1,093.6132983.",
    math: "Yards (yd) = Kilometers (km) / 0.0009144",
    subtext: "For estimating field distances, multiplying by 1,100 provides a simple mental approximation."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Mapping Golf Fairway Bounds",
        subtitle: "Convert a cross-country golf facility path of 1.2 kilometers to yards.",
        steps: [
          "State the starting distance: 1.2 kilometers.",
          "Apply the multiplier: Multiply the starting value by 1,093.6132983.",
          "Calculate the product: 1.2 × 1,093.6132983 = 1,312.335958.",
          "State the final result: 1.2 kilometers is equivalent to approximately 1,312.34 yards."
        ]
      },
      {
        title: "Example 2: Local Survey Path Mapping",
        subtitle: "Convert a survey route length of 0.8 kilometers into yards.",
        steps: [
          "State the starting distance: 0.8 kilometers.",
          "Apply the formula: Divide 0.8 by the constant 0.0009144.",
          "Perform the division: 0.8 / 0.0009144 = 874.890638.",
          "State the final result: 0.8 kilometers is equivalent to approximately 874.89 yards."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer to Yard Conversion Values",
    headers: ["Kilometers (km)", "Yards (yd)", "Practical Layout Use"],
    rows: [
      { fromVal: "0.1", toVal: "109.36", extra: "About 109 yards" },
      { fromVal: "0.5", toVal: "546.81", extra: "About 547 yards" },
      { fromVal: "1", toVal: "1,093.61", extra: "About 1,094 yards" },
      { fromVal: "2", toVal: "2,187.23", extra: "About 2,187 yards" },
      { fromVal: "5", toVal: "5,468.07", extra: "About 5,468 yards" },
      { fromVal: "10", toVal: "10,936.13", extra: "About 10,936 yards" }
    ]
  },
  applications: {
    title: "Real-World Contexts",
    items: [
      {
        title: "Athletics & Golf Facilities",
        text: "Sports complexes require distance calculations when aligning metric trail networks with standard yard markers on golf greens and sports fields."
      },
      {
        title: "Civil Surveying & Zoning",
        text: "Zoning regulations in older districts list boundary distances in yards, while modern topographic plans are drafted in metric units. Translating these values preserves legal consistency."
      },
      {
        title: "Infrastructure Contracting",
        text: "Material suppliers list pipeline conduit and gravel paths in yards, requiring construction contractors to convert metric track lengths to manage project costs."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls",
    items: [
      "Overestimating with mental short-cuts: Multiplying by 1,000 instead of 1,093 can cause an error of nearly 10% over larger spans. Always use the full multiplier for construction tasks.",
      "Early decimal truncation: Rounding the decimal factor too early in calculation sequences can introduce layout alignment problems in prefabricated sections.",
      "Confusing yards with meters: A yard is slightly shorter than a meter (1 yard = 0.9144 meters). Mixing them up causes significant distance errors."
    ]
  },
  faqs: [
    {
      question: "How many yards are in a kilometer?",
      answer: "There are approximately 1,093.613 yards in one kilometer. For rapid estimations, people often use the rounded factor of 1,094 yards."
    },
    {
      question: "What is the formula to convert km to yards?",
      answer: "The formula is: Yards (yd) = Kilometers (km) / 0.0009144. You can also multiply the kilometer value by 1,093.613298."
    },
    {
      question: "How do I convert kilometers to yards manually?",
      answer: "Multiply the kilometer number by 1,093.6. For example, 2 kilometers multiplied by 1,093.6 equals approximately 2,187.2 yards."
    },
    {
      question: "Is a yard longer than a meter?",
      answer: "No, a yard is slightly shorter than a meter. One yard is defined as exactly 0.9144 meters (or 91.44 centimeters)."
    },
    {
      question: "What is the abbreviation for kilometer and yard?",
      answer: "The official abbreviation for kilometer is 'km' and the abbreviation for yard is 'yd'. Both are written in lowercase."
    },
    {
      question: "How many yards is 5 kilometers?",
      answer: "5 kilometers is equivalent to approximately 5,468.07 yards."
    },
    {
      question: "Does the conversion factor ever change?",
      answer: "No. The relationship is permanently fixed under the 1959 International Yard and Pound Agreement, making the conversion exact and stable."
    },
    {
      question: "Are yards used in track and field?",
      answer: "Traditional running events in some regions used yards (e.g., the 100-yard dash), but modern international athletics track events are measured exclusively in meters."
    }
  ],
  relatedList: [
    { label: "Yard to Kilometer", from: "yard", to: "kilometer" },
    { label: "Kilometer to Meter", from: "kilometer", to: "meter" },
    { label: "Kilometer to Centimeter", from: "kilometer", to: "centimeter" },
    { label: "Kilometer to Millimeter", from: "kilometer", to: "millimeter" },
    { label: "Kilometer to Micrometer", from: "kilometer", to: "micrometer" },
    { label: "Kilometer to Nanometer", from: "kilometer", to: "nanometer" },
    { label: "Kilometer to Mile", from: "kilometer", to: "mile" },
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
    "International Yard and Pound Agreement of 1959.",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units.",
    "Royal Institution of Chartered Surveyors (RICS) - Land measurement standards."
  ]
};
