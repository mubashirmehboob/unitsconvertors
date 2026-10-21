import { CustomArticleData } from "./types";

export const centimeterToMile: CustomArticleData = {
  fromUnitId: "centimeter",
  toUnitId: "mile",
  seoTitle: "Centimeter to Mile Converter | cm to mi",
  metaDescription: "Convert centimeters to miles (cm to mi) with precision. Learn the exact 160,934.4 ratio, manual calculation steps, conversion table, and common mistakes.",
  canonicalUrl: "https://unitsconvertors.com/converters/length/centimeter-to-mile",
  h1: "Centimeter to Mile Converter",
  introduction: [
    "Converting centimeters (cm) to miles (mi) crosses the boundary between the metric system's everyday small-scale unit and the imperial/US customary system's primary long-distance benchmark. While centimeters quantify product dimensions, clothing sizes, and laboratory glassware, miles measure highway journeys, marathon race routes, and flight corridors.",
    "Under the 1959 International Yard and Pound Agreement, the international mile is defined as exactly 1,609.344 meters, which translates to exactly 160,934.4 centimeters. This guide presents the exact mathematical ratio, step-by-step conversion examples, a practical reference table, and expert advice for handling large decimal calculations without error."
  ],
  quickAnswer: {
    text: "One centimeter is equal to approximately 0.0000062137 miles (6.2137 × 10⁻⁶ mi). Conversely, one international mile contains exactly 160,934.4 centimeters.",
    formulaDisplay: "1 cm ≈ 0.0000062137 mi",
    subtext: "To convert centimeters to miles, divide the centimeter value by 160,934.4, or multiply by 0.0000062137."
  },
  aboutSourceUnit: {
    title: "Understanding the Centimeter (cm)",
    text: "The centimeter is a metric submultiple equal to one hundredth of a meter (10⁻² meters). As part of the International System of Units (SI), centimeters are universally used across science, industry, and daily life in nearly every country, offering a manageable scale for measuring everyday physical objects."
  },
  aboutTargetUnit: {
    title: "Understanding the Mile (mi)",
    text: "The statute or international mile is an imperial and US customary unit of length equal to 5,280 feet, 1,760 yards, or exactly 1,609.344 meters. Historically derived from the Roman 'mille passus' (a thousand paces), the modern mile serves as the primary standard for road travel, vehicular speedometers, and territorial mapping in the United States, the United Kingdom, and several Caribbean nations."
  },
  relationship: "Because 1 mile equals 1,609.344 meters and each meter contains 100 centimeters, exactly 160,934.4 centimeters make up one statute mile.",
  relationshipItems: [
    { label: "Centimeters to Miles", value: "1 cm ≈ 0.0000062137 mi" },
    { label: "Miles to Centimeters", value: "1 mi = 160,934.4 cm (exact)" },
    { label: "Exact Metric Basis", value: "1 mile = 1,609.344 m" }
  ],
  formula: {
    text: "To convert centimeters to miles, divide the centimeter measurement by 160,934.4. Alternatively, multiply centimeters by the reciprocal factor 0.000006213712.",
    math: "Miles (mi) = Centimeters (cm) / 160,934.4 ≈ Centimeters (cm) × 0.000006213712",
    subtext: "The divisor 160,934.4 is exact by international treaty (5,280 feet × 12 inches/foot × 2.54 cm/inch)."
  },
  practicalTip: {
    title: "Two-Step Conversion Strategy",
    text: "When converting mentally or checking with a calculator, first divide centimeters by 100 to get meters, then divide by 1,609.344 to get miles. This prevents losing track of decimal zeros."
  },
  examples: {
    title: "Step-by-Step Conversion Scenarios",
    items: [
      {
        title: "Example 1: Topographic Map Scale Translation",
        subtitle: "Convert a mapped route length of 500,000 centimeters into miles.",
        steps: [
          "State the starting length: 500,000 cm.",
          "Apply the formula: Divide by 160,934.4.",
          "Calculate: 500,000 / 160,934.4 ≈ 3.106856.",
          "Final result: 500,000 cm equals approximately 3.11 miles (which corresponds to 5 kilometers)."
        ]
      },
      {
        title: "Example 2: A 1,000,000 Centimeter Highway Section",
        subtitle: "Convert 1 million centimeters (10 km) to statute miles.",
        steps: [
          "State the starting length: 1,000,000 cm.",
          "Perform the division: 1,000,000 / 160,934.4 ≈ 6.213712.",
          "Conclusion: 1,000,000 cm is equivalent to approximately 6.21 miles."
        ]
      },
      {
        title: "Example 3: Small Distance of 25,000 Centimeters",
        subtitle: "Convert 25,000 cm (250 meters) into miles.",
        steps: [
          "Identify the starting length: 25,000 cm.",
          "Divide by 160,934.4: 25,000 / 160,934.4 ≈ 0.155343.",
          "Final answer: 25,000 cm corresponds to roughly 0.155 miles."
        ]
      }
    ]
  },
  table: {
    title: "Centimeter to Mile Reference Table",
    headers: ["Centimeters (cm)", "Miles (mi)", "Context / Common Application"],
    rows: [
      { fromVal: "10,000", toVal: "0.0621", extra: "100 meters (athletic sprint track length)" },
      { fromVal: "50,000", toVal: "0.3107", extra: "500 meters (half kilometer park walk)" },
      { fromVal: "100,000", toVal: "0.6214", extra: "1 kilometer (standard metric distance)" },
      { fromVal: "160,934.4", toVal: "1.0000", extra: "Exactly 1 statute mile" },
      { fromVal: "300,000", toVal: "1.8641", extra: "3 kilometers (community fun run)" },
      { fromVal: "500,000", toVal: "3.1069", extra: "5 kilometers (standard 5K race)" },
      { fromVal: "1,000,000", toVal: "6.2137", extra: "10 kilometers (standard 10K road race)" },
      { fromVal: "2,000,000", toVal: "12.4274", extra: "20 kilometers (half marathon stage)" },
      { fromVal: "5,000,000", toVal: "31.0686", extra: "50 kilometers (ultra-marathon course)" }
    ]
  },
  applications: {
    title: "Real-World Contexts & Applications",
    items: [
      {
        title: "Cartography & Scale Translation",
        text: "International map analysts frequently read metric survey maps with scales like 1:100,000 and convert measured map centimeters into imperial statute miles for UK and US transportation reports."
      },
      {
        title: "Civil Infrastructure & Pipeline Planning",
        text: "Cross-border engineering projects convert metric pipeline, fiber optic, or rail segment specifications (measured in cm and m) into miles for Anglo-American leasing and environmental impact assessments."
      },
      {
        title: "Athletics & Marathon Course Certification",
        text: "Course measurers using calibrated bicycles record wheel revolutions in centimeters per turn and convert total counts into miles to certify Boston or Olympic marathon qualifying routes."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing statute miles with nautical miles: An international nautical mile is 1,852 meters (185,200 cm), whereas a statute mile is 1,609.344 meters (160,934.4 cm). Using the wrong mile produces an error of over 15%.",
      "Dividing by 1609 instead of 160,934.4: 1,609.344 is the number of meters in a mile; because there are 100 cm per meter, you must divide centimeters by 160,934.4.",
      "Premature decimal rounding: Rounding 160,934.4 to 160,000 creates a substantial 0.6% error over long road projects.",
      "Multiplying instead of dividing: Multiplying by 160,934.4 converts miles to centimeters, not centimeters to miles."
    ]
  },
  faqs: [
    {
      question: "How many centimeters are in one mile?",
      answer: "There are exactly 160,934.4 centimeters in one statute mile. This derives from 5,280 feet × 12 inches × 2.54 centimeters per inch."
    },
    {
      question: "What is the formula to convert centimeters to miles?",
      answer: "The formula is: Miles = Centimeters / 160,934.4, or Miles = Centimeters × 0.000006213712."
    },
    {
      question: "How do you convert 100,000 cm to miles?",
      answer: "Dividing 100,000 by 160,934.4 gives approximately 0.62137 miles, which equals exactly 1 kilometer."
    },
    {
      question: "How do you convert miles back to centimeters?",
      answer: "To convert miles to centimeters, multiply the mile figure by 160,934.4. For example, 2 miles multiplied by 160,934.4 equals 321,868.8 centimeters."
    },
    {
      question: "Why is the conversion factor 160,934.4 exact?",
      answer: "Under the 1959 International Yard and Pound Agreement, one inch was defined as exactly 2.54 cm. Since a mile has 63,360 inches, 63,360 × 2.54 = 160,934.4 cm exactly."
    },
    {
      question: "Is a nautical mile the same as a statute mile in centimeters?",
      answer: "No. A nautical mile equals exactly 185,200 centimeters (1,852 meters), whereas a statute mile equals 160,934.4 centimeters."
    },
    {
      question: "What are the standard abbreviations for centimeters and miles?",
      answer: "The official abbreviation for centimeter is 'cm' and for mile is 'mi', both written in lowercase."
    },
    {
      question: "How many miles is 500,000 centimeters?",
      answer: "Dividing 500,000 by 160,934.4 gives approximately 3.1069 miles (which equals 5 kilometers)."
    }
  ],
  relatedList: [
    { label: "Mile to Centimeter", from: "mile", to: "centimeter" },
    { label: "Centimeter to Meter", from: "centimeter", to: "meter" },
    { label: "Centimeter to Kilometer", from: "centimeter", to: "kilometer" },
    { label: "Centimeter to Yard", from: "centimeter", to: "yard" },
    { label: "Centimeter to Foot", from: "centimeter", to: "foot" },
    { label: "Centimeter to Inch", from: "centimeter", to: "inch" },
    { label: "Kilometer to Mile", from: "kilometer", to: "mile" }
  ],
  references: [
    "BIPM (International Bureau of Weights and Measures) - The International System of Units (SI Brochure, 9th edition).",
    "National Institute of Standards and Technology (NIST) Handbook 44 - Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices.",
    "1959 International Yard and Pound Agreement (Ref: US Federal Register Doc. 59-5442)."
  ]
};
