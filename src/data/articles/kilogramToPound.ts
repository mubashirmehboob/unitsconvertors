import { CustomArticleData } from "./types";

export const kilogramToPound: CustomArticleData = {
  fromUnitId: "kilogram",
  toUnitId: "pound",
  seoTitle: "Kilogram to Pound Converter - kg to lbs",
  metaDescription: "Convert kilograms to pounds (kg to lbs) quickly and accurately. Learn the exact 2.20462262 conversion factor, formula, worked examples, and body weight charts.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-to-pound",
  h1: "Kilogram to Pound Converter",
  introduction: [
    "The kilogram and the pound are the primary units of mass and weight used across the metric and imperial systems. While the kilogram is the global scientific and commercial standard recognized under the International System of Units (SI), the pound remains the prevailing measure for body weight, grocery shopping, commercial freight, and aviation payload calculations throughout the United States and parts of the United Kingdom and Canada.",
    "Converting kilograms to pounds is one of the most frequent daily calculations in travel, international trade, athletic fitness, and medical triage. Under the 1959 International Yard and Pound Agreement, one avoirdupois pound is legally defined as exactly 0.45359237 kilograms, meaning one kilogram equals approximately 2.20462 pounds."
  ],
  quickAnswer: {
    text: "To convert kilograms to pounds, multiply the kilogram value by 2.20462262 (or divide by 0.45359237). For example, 70 kilograms is equal to approximately 154.32 pounds.",
    formulaDisplay: "1 kg ≈ 2.20462 lbs",
    subtext: "Multiply any kilogram value by 2.20462 (or multiply by 2.2 for quick mental estimation) to get the weight in pounds."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the base unit of mass in the International System of Units (SI). Standardized through the fundamental Planck constant ($h = 6.62607015 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$), the kilogram represents the international standard for mass across all scientific disciplines, global freight manifests, and metric consumer goods."
  },
  aboutTargetUnit: {
    title: "Understanding the Pound (lb / lbs)",
    text: "The avoirdupois pound (symbol: lb, plural: lbs) is the traditional unit of mass in the United States customary and British imperial systems. Standardized internationally in 1959, 1 pound equals exactly 16 avoirdupois ounces, 7,000 grains, or 0.45359237 kilograms. It is used daily for weighing produce, postal parcels, industrial equipment, and human body mass."
  },
  relationship: "By international treaty, 1 avoirdupois pound is defined as exactly 0.45359237 kilograms. Taking the reciprocal ($1 / 0.45359237$) gives approximately 2.20462262185 pounds per kilogram. Because the kilogram is more than twice as heavy as a pound, converting kilograms to pounds always yields a higher numerical value.",
  relationshipTitle: "Kilograms vs. Pounds Comparison",
  relationshipItems: [
    { label: "1 Kilogram (kg)", value: "≈ 2.20462262 Pounds (lbs)" },
    { label: "1 Pound (lb)", value: "0.45359237 Kilograms (kg)" },
    { label: "50 Kilograms (kg)", value: "110.231 Pounds (lbs)" },
    { label: "100 Kilograms (kg)", value: "220.462 Pounds (lbs)" }
  ],
  formula: {
    text: "To convert mass from kilograms to pounds, multiply the kilogram amount by 2.20462262, or divide kilograms by 0.45359237.",
    math: "Mass in Pounds (lbs) = Mass in Kilograms (kg) × 2.20462262",
    subtext: "Or: lbs = kg / 0.45359237"
  },
  formulaTitle: "Kilogram to Pound Conversion Formula",
  practicalTip: {
    title: "Fast Mental Approximation Trick",
    text: "To estimate kilograms to pounds in your head: double the kilogram number, then add 10% of that doubled value. For example, for 60 kg: double it to 120, then add 10% (12) to get 132 lbs (exact is 132.28 lbs)."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Airline Checked Baggage Weight",
        subtitle: "An international airline limits checked baggage to 23.0 kilograms. Determine the baggage allowance in pounds.",
        steps: [
          "Identify the weight in kilograms: 23.0 kg.",
          "Apply the conversion formula: lbs = 23.0 × 2.20462262.",
          "Perform the multiplication: 23.0 × 2.20462262 = 50.70632 lbs.",
          "Conclude the calculation: 23.0 kg is approximately equal to the standard 50.7-pound (or 50 lb nominal) airline luggage limit."
        ]
      },
      {
        title: "Example 2: Fitness & Bodyweight Conversion",
        subtitle: "An athlete weighs 82.5 kilograms on a metric scale. Calculate their weight in pounds.",
        steps: [
          "Identify the athlete's mass: 82.5 kg.",
          "Multiply by the conversion factor: 82.5 × 2.20462262.",
          "Calculate the product: 82.5 × 2.20462262 = 181.88136 lbs.",
          "Conclude the calculation: The athlete weighs approximately 181.88 pounds."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram to Pound Conversion Reference Table",
    headers: ["Kilograms (kg)", "Pounds (lbs)", "Common Practical Context"],
    rows: [
      { fromVal: "1", toVal: "2.2046", extra: "One standard 1-liter bottle of water" },
      { fromVal: "5", toVal: "11.0231", extra: "Small domestic house cat or dumbbell" },
      { fromVal: "10", toVal: "22.0462", extra: "Medium bag of pet food or carry-on bag" },
      { fromVal: "20", toVal: "44.0925", extra: "Olympic weightlifting barbell with collar" },
      { fromVal: "23", toVal: "50.7063", extra: "Standard international airline checked baggage limit" },
      { fromVal: "50", toVal: "110.2311", extra: "Commercial bag of concrete mix" },
      { fromVal: "60", toVal: "132.2774", extra: "Adult bodyweight benchmark" },
      { fromVal: "70", toVal: "154.3236", extra: "Standard clinical reference human weight" },
      { fromVal: "80", toVal: "176.3698", extra: "Adult fitness benchmark" },
      { fromVal: "90", toVal: "198.4160", extra: "Heavyweight athletic competitor" },
      { fromVal: "100", toVal: "220.4623", extra: "One metric quintal (220.46 lbs)" }
    ]
  },
  expertNote: {
    title: "Why 2.20462 Matters in Aviation Safety",
    text: "Aviation weight and balance manifests require exact fuel and passenger weight conversions. In 1983, a Boeing 767 (the 'Gimli Glider') ran out of fuel mid-flight because ground crew mixed up pounds and kilograms during manual refueling calculations. Always use verified automated calculators for safety-critical aviation mass planning."
  },
  applications: {
    title: "Everyday and Industrial Applications of kg to lbs",
    items: [
      {
        title: "International Aviation & Travel",
        text: "Passenger luggage limits, cargo payload distribution, and aircraft takeoff trim settings require converting metric airport scales into imperial weight charts."
      },
      {
        title: "Healthcare & Clinical Patient Dosing",
        text: "Emergency medical personnel often record patient weight in pounds from home scales, but clinical pharmacology formulas and IV drug infusion pumps require patient mass in kilograms."
      },
      {
        title: "Strength Sports & Gym Equipment",
        text: "Olympic weightlifting and powerlifting plates are manufactured in metric increments (e.g., 20 kg, 25 kg red discs), requiring athletes to convert to pounds for imperial training logs."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting kg to lbs",
    items: [
      "Dividing by 2.2 instead of multiplying: Because 1 kg is larger than 1 lb, converting kg to lbs must always produce a larger number. Dividing by 2.2 will cut your weight in half instead of doubling it.",
      "Over-rounding to 2.2 in commercial freight: Using 2.2 instead of 2.20462 introduces an error of 4.6 pounds per 1,000 kg, which accumulates significantly across multi-ton shipping containers.",
      "Confusing troy pounds with avoirdupois pounds: A troy pound contains only 12 troy ounces (approx. 0.373 kg); standard everyday weight conversions always use the 16-ounce avoirdupois pound (0.4536 kg)."
    ]
  },
  faqs: [
    {
      question: "How many pounds are in one kilogram?",
      answer: "There are approximately 2.20462262 pounds in one kilogram (exact definition: 1 lb = 0.45359237 kg)."
    },
    {
      question: "What is the formula to convert kg to lbs?",
      answer: "The formula is: Mass in Pounds (lbs) = Mass in Kilograms (kg) × 2.20462262."
    },
    {
      question: "How many pounds is 70 kg?",
      answer: "70 kg is equal to approximately 154.32 pounds (70 × 2.20462262 = 154.3236 lbs)."
    },
    {
      question: "How many pounds is 50 kg?",
      answer: "50 kg is equal to approximately 110.23 pounds (50 × 2.20462262 = 110.231 lbs)."
    },
    {
      question: "How do I do a quick mental calculation from kg to lbs?",
      answer: "Double the kilogram number and add 10% of the result. For example: 80 kg doubled is 160, plus 16 equals 176 lbs (exact is 176.37 lbs)."
    },
    {
      question: "How do I convert pounds back to kilograms?",
      answer: "Divide the pound value by 2.20462262 (or multiply by 0.45359237) to find the weight in kilograms."
    },
    {
      question: "Why is 'lb' the abbreviation for pound?",
      answer: "'lb' comes from the Latin word 'libra', which was the ancient Roman unit of weight corresponding to a pound balance scale."
    },
    {
      question: "What is the standard airline baggage weight limit in lbs and kg?",
      answer: "Most international airlines allow 23 kg per checked bag, which corresponds to 50.7 pounds (nominally 50 lbs in the US)."
    }
  ],
  relatedList: [
    { label: "Kilogram to Gram", from: "kilogram", to: "gram" },
    { label: "Gram to Pound", from: "gram", to: "pound" },
    { label: "Kilogram to Ounce", from: "kilogram", to: "ounce" },
    { label: "Kilogram to Stone", from: "kilogram", to: "stone" },
    { label: "Kilogram to Metric Ton", from: "kilogram", to: "metric-ton" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - Refinement of Values for the Yard and Pound",
    "Federal Aviation Administration (FAA) Advisory Circular 120-27F - Aircraft Weight and Balance Control",
    "BIPM - The International System of Units (SI Brochure, 9th Edition)"
  ]
};
