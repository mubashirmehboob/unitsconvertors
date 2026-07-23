import { CustomArticleData } from "./types";

export const meterToNmi: CustomArticleData = {
  fromUnitId: "meter",
  toUnitId: "nautical-mile",
  seoTitle: "Meter to Nautical Mile Converter - m to nmi",
  metaDescription: "Convert meters to nautical miles (m to nmi) with absolute accuracy. See the official maritime conversion factor, formulas, tables, and FAQs.",
  h1: "Meter to Nautical Mile Converter",
  introduction: [
    "Converting meters (m) to nautical miles (nmi) is a fundamental task in marine navigation, aviation, cartography, and military logistics. Because marine routes, flight clearances, and international territorial borders are defined by nautical miles, translating standard metric surveying data is essential for safe global transit.",
    "This reference guide provides a scientifically rigorous explanation of the meter-to-nautical-mile conversion. It explains the physical background of both units, details the exact conversion factors standardized by international convention, provides worked examples, and addresses common mathematical pitfalls in coordinates calculation."
  ],
  quickAnswer: {
    text: "One meter is exactly equivalent to 1/1852 of a nautical mile (approximately 0.000539956803 nautical miles). Conversely, one standard international nautical mile is defined as exactly 1,852 meters.",
    formulaDisplay: "1 m = 0.000539956803 nmi",
    subtext: "To convert meters to nautical miles, divide the value by 1,852, or multiply by the decimal conversion coefficient."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter (m)",
    text: "The meter is the base unit of length in the International System of Units (SI). Pinned by modern physics to absolute universal constants, the meter is defined as the distance traveled by light in a vacuum in 1/299,792,458 of a second. This ensures that a meter is stable, reproducible, and independent of geographical variation."
  },
  aboutTargetUnit: {
    title: "Understanding the Nautical Mile (nmi)",
    text: "The nautical mile is a traditional unit of length used primarily in marine and air navigation. Historically, it was defined as the length of one minute of arc along a meridian of the Earth, which corresponds to roughly 1/60th of a degree of latitude. Because the Earth is not a perfect sphere, this definition resulted in slight variations depending on latitude. To resolve this, the First International Extraordinary Hydrographic Conference in Monaco in 1929 established the international nautical mile as exactly equal to 1,852 meters."
  },
  relationship: "The international nautical mile is mathematically locked to the metric system. Because a nautical mile is defined as exactly 1,852 meters, the inverse conversion factor results in an infinite decimal: 1 / 1852 = 0.0005399568034557...",
  relationshipItems: [
    { label: "Meters to Nautical Miles", value: "1 m = 0.000539956803 nmi" },
    { label: "Nautical Miles to Meters", value: "1 nmi = 1,852 m" }
  ],
  formula: {
    text: "To find nautical miles from meters manually, divide your metric value by the standardized scale factor of 1,852. Alternatively, multiply by the decimal conversion factor.",
    math: "Nautical Miles (nmi) = Meters (m) / 1,852",
    subtext: "Using 1,852 as the divisor guarantees that your marine distance maps exactly to international maritime charts."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Mapping Coastal Waters",
        subtitle: "Convert a distance of 10,000 meters into nautical miles.",
        steps: [
          "Identify the starting length: 10,000 meters.",
          "Apply the standard formula: Divide the meter value by 1,852.",
          "Perform the division: 10,000 / 1,852 = 5.399568035.",
          "State the final result: 10,000 meters is equivalent to approximately 5.40 nautical miles."
        ]
      },
      {
        title: "Example 2: Analyzing Flight Plans",
        subtitle: "Convert a radar altitude clearance distance of 3,704 meters to nautical miles.",
        steps: [
          "Identify the starting length: 3,704 meters.",
          "Apply the standard formula: Divide by 1,852.",
          "Perform the arithmetic: 3,704 / 1,852 = 2.",
          "State the final result: 3,704 meters is exactly equal to 2 nautical miles."
        ]
      }
    ]
  },
  table: {
    title: "Meter to Nautical Mile Reference Table",
    headers: ["Meters (m)", "Nautical Miles (nmi)", "Decimal Approximation"],
    rows: [
      { fromVal: "500", toVal: "0.2700", extra: "Approx. 1/4 nautical mile" },
      { fromVal: "1,000", toVal: "0.53995", extra: "Exactly 1 kilometer" },
      { fromVal: "1,852", toVal: "1.0000", extra: "Exactly 1 international nautical mile" },
      { fromVal: "5,000", toVal: "2.6998", extra: "Approx. 2.7 nautical miles" },
      { fromVal: "10,000", toVal: "5.3996", extra: "Approx. 5.4 nautical miles" },
      { fromVal: "18,520", toVal: "10.0000", extra: "Exactly 10 nautical miles" },
      { fromVal: "50,000", toVal: "26.9978", extra: "Approx. 27 nautical miles" },
      { fromVal: "100,000", toVal: "53.9957", extra: "Approx. 54 nautical miles" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Maritime Shipping & Navigation",
        text: "Navigational charts use nautical miles because they correspond directly to degrees of latitude on standard maps. Since modern sonar systems measure sea depths and local distances in meters, deck officers convert these values to map ship positions."
      },
      {
        title: "Aviation & Air Traffic Control",
        text: "Pilots and air traffic controllers measure cruising distances in nautical miles (and speed in knots, which is nautical miles per hour). Ground radar systems report local runway coordinates in meters, requiring accurate translation."
      },
      {
        title: "Oceanography & Marine Biology",
        text: "Scientists tracking marine migrations or mapping continental shelves collect coordinates in meters. Converting these datasets to nautical miles allows them to align biological ranges with maritime boundaries."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Confusing statute miles with nautical miles: A statute land mile is exactly 1,609.344 meters, whereas a nautical mile is longer at exactly 1,852 meters. Mixing up these two units leads to a navigation error of approximately 15%.",
      "Assuming a nautical mile changes depending on location: Historically, nautical miles varied depending on where they were measured on the Earth. However, the modern international standard is fixed at exactly 1,852 meters, regardless of latitude.",
      "Decimal placement error: Since 1 meter is a very small fraction of a nautical mile (approx. 0.00054), make sure you include all leading zeros when performing calculations with the multiplier."
    ]
  },
  faqs: [
    {
      question: "Is a nautical mile the same as a normal mile?",
      answer: "No. A land mile (statute mile) is exactly 1,609.344 meters, while a nautical mile is exactly 1,852 meters. This means a nautical mile is approximately 1.15 times longer than a standard mile."
    },
    {
      question: "Why is a nautical mile exactly 1,852 meters?",
      answer: "In 1929, the First International Extraordinary Hydrographic Conference standardized the nautical mile to resolve variations. They chose 1,852 meters as a precise, rounded metric representation of one minute of arc of latitude."
    },
    {
      question: "How do I convert meters to nautical miles manually?",
      answer: "To convert meters to nautical miles manually, divide the value in meters by 1,852. For example, 3,704 meters divided by 1,852 equals 2 nautical miles."
    },
    {
      question: "What is the abbreviation for a nautical mile?",
      answer: "The most common and internationally accepted abbreviations for a nautical mile are 'nmi' and 'NM'."
    },
    {
      question: "How is a knot related to a nautical mile?",
      answer: "A knot is a unit of speed defined as one nautical mile per hour. If a vessel is traveling at 15 knots, it is covering 15 nautical miles per hour."
    },
    {
      question: "Does this conversion work for decimal values?",
      answer: "Yes, the exact same mathematical divisor of 1,852 applies to all decimal values. For instance, 150.5 meters divided by 1,852 equals approximately 0.081 nautical miles."
    },
    {
      question: "Is there an easy way to approximate meters to nautical miles in my head?",
      answer: "Yes. For a quick mental estimate, you can double the meter value and shift the decimal four places to the left. For example, 2,000 meters doubled is 4,000, and shifting the decimal four spots left gives 0.4 nautical miles (the exact value is 1.08 nautical miles)."
    },
    {
      question: "Is a nautical mile defined by the metric system?",
      answer: "No, the nautical mile is a non-SI unit, but its official definition is internationally anchored to the metric system for precise consistency."
    }
  ],
  relatedList: [
    { label: "Nautical Mile to Meter", from: "nautical-mile", to: "meter" },
    { label: "Meter to Kilometer", from: "meter", to: "kilometer" },
    { label: "Meter to Centimeter", from: "meter", to: "centimeter" },
    { label: "Meter to Millimeter", from: "meter", to: "millimeter" },
    { label: "Meter to Micrometer", from: "meter", to: "micrometer" },
    { label: "Meter to Nanometer", from: "meter", to: "nanometer" },
    { label: "Meter to Mile", from: "meter", to: "mile" },
    { label: "Meter to Yard", from: "meter", to: "yard" },
    { label: "Meter to Foot", from: "meter", to: "foot" },
    { label: "Meter to Inch", from: "meter", to: "inch" },
    { label: "Meter to Rod", from: "meter", to: "rod" },
    { label: "Meter to Chain", from: "meter", to: "chain" },
    { label: "Meter to Furlong", from: "meter", to: "furlong" },
    { label: "Meter to League", from: "meter", to: "league" },
    { label: "Meter to Hand", from: "meter", to: "hand" },
    { label: "Meter to Cubit", from: "meter", to: "cubit" }
  ],
  references: [
    "First International Extraordinary Hydrographic Conference (Monaco, 1929).",
    "National Institute of Standards and Technology (NIST) - Special Publication 811.",
    "International Hydrographic Organization (IHO) - Standards of Accuracy."
  ]
};
