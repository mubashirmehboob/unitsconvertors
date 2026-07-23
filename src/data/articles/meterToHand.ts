import { CustomArticleData } from "./types";

export const meterToHand: CustomArticleData = {
  fromUnitId: "meter",
  toUnitId: "hand",
  seoTitle: "Meter to Hand Converter - m to hd",
  metaDescription: "Convert meters to hands (m to hd) with high precision. See the traditional equestrian conversion factor, manual formula, table, and FAQs.",
  h1: "Meter to Hand Converter",
  introduction: [
    "Translating measurements from meters (m) to hands (hd) is an essential task in equestrian sports, veterinary medicine, and horse breeding. The hand is an ancient unit of length that remains the universal legal standard for measuring the height of horses and ponies in English-speaking nations.",
    "This reference guide provides a scientifically accurate breakdown of the meter-to-hand conversion. It includes the exact conversion factor established by international standardizers, details manual calculation steps, provides worked examples, and addresses common mistakes in measuring horses."
  ],
  quickAnswer: {
    text: "One meter is exactly equivalent to 9.842519685 hands. Conversely, one standard international hand is defined as exactly 4 inches, which is exactly 0.1016 meters (or 10.16 centimeters).",
    formulaDisplay: "1 m = 9.842519685 hd",
    subtext: "To convert meters to hands, divide the metric value by 0.1016, or multiply by the decimal conversion coefficient."
  },
  aboutSourceUnit: {
    title: "Understanding the Meter (m)",
    text: "The meter is the SI base unit of length, defined in modern quantum physics by the speed of light in a vacuum. Light covers exactly one meter in a duration of 1/299,792,458 of a second. This absolute definition guarantees that the meter is stable, highly reproducible, and independent of any physical artifact."
  },
  aboutTargetUnit: {
    title: "Understanding the Hand (hd)",
    text: "The hand, historically modeled after the width of a human hand (including the thumb), has been used to measure horses since ancient Egypt. In 1540, King Henry VIII of England standardized the hand at exactly 4 inches. Under the International Yard and Pound Agreement of 1959, which fixed the inch, the standard hand was locked at exactly 10.16 centimeters (or 0.1016 meters), linking traditional equestrian records directly to the metric system."
  },
  relationship: "The standard hand is a fraction of the meter. Because a hand contains exactly 4 inches, and each inch is exactly 0.0254 meters, a hand is equal to exactly 4 × 0.0254 = 0.1016 meters.",
  relationshipItems: [
    { label: "Meters to Hands", value: "1 m = 9.842519685 hd" },
    { label: "Hands to Meters", value: "1 hd = 0.1016 m" }
  ],
  formula: {
    text: "To find hands from meters manually, divide your metric value by 0.1016. Alternatively, multiply the meter value by the decimal factor of 9.842519685.",
    math: "Hands (hd) = Meters (m) / 0.1016",
    subtext: "Using 0.1016 as the divisor guarantees that your calculations align precisely with Gunter's surveying standards."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Measuring a Warmblood Horse",
        subtitle: "Convert a horse height of 1.7 meters into hands.",
        steps: [
          "Identify the starting length: 1.7 meters.",
          "Apply the standard formula: Divide the meter value by 0.1016.",
          "Perform the division: 1.7 / 0.1016 = 16.73228346.",
          "State the final result: 1.7 meters is equivalent to approximately 16.73 hands. In traditional equestrian notation, this is written as 16.2 hands (16 hands and 2 inches)."
        ]
      },
      {
        title: "Example 2: Measuring a Pony",
        subtitle: "Convert 1.4 meters of a Welsh pony height to hands.",
        steps: [
          "Identify the starting length: 1.4 meters.",
          "Apply the multiplier: Multiply 1.4 by 9.842519685.",
          "Perform the arithmetic: 1.4 × 9.842519685 = 13.77952756.",
          "State the final result: 1.4 meters is equivalent to approximately 13.78 hands. In traditional notation, this is written as 13.3 hands."
        ]
      }
    ]
  },
  table: {
    title: "Meter to Hand Reference Table",
    headers: ["Meters (m)", "Decimal Hands (hd)", "Traditional Equestrian Notation"],
    rows: [
      { fromVal: "1.0", toVal: "9.84", extra: "9.3 hands (9 hands, 3.4 inches)" },
      { fromVal: "1.2", toVal: "11.81", extra: "11.3 hands" },
      { fromVal: "1.4", toVal: "13.78", extra: "13.3 hands" },
      { fromVal: "1.4732", toVal: "14.50", extra: "14.2 hands (pony cutoff threshold)" },
      { fromVal: "1.5", toVal: "14.76", extra: "14.3 hands" },
      { fromVal: "1.6", toVal: "15.75", extra: "15.3 hands" },
      { fromVal: "1.7", toVal: "16.73", extra: "16.29 hands" },
      { fromVal: "1.8", toVal: "17.72", extra: "17.28 hands" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Equestrian Competitions & Registry",
        text: "Equestrian federations (like the USEF and FEI) use hands to classify horses into different competitive height categories. When importing horses documented in metric centimeters/meters, coordinators convert these values to hands."
      },
      {
        title: "Veterinary Medicine & Dosages",
        text: "Equine veterinarians measure horse height and body weight to calculate medical dosages. While clinical records are kept in metric units, veterinarians discuss the horse's size in hands with the owners."
      },
      {
        title: "Horse Sales & Trade",
        text: "In horse advertisements, height is always listed in hands. Since standard measuring tapes in continental Europe use meters, buyers convert these measurements to make informed purchases."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Misunderstanding traditional hand notation: The decimal in hand notation represents inches, not tenths. For example, 15.2 hands means 15 hands and 2 inches, not 15 and two-tenths. Since there are 4 inches in a hand, the decimal part can only be .0, .1, .2, or .3.",
      "Early decimal rounding: Rounding the divisor to 0.1 simplifies mental calculations, but introduces an error of over 1.6%. Always use 0.1016 for precise legal work.",
      "Measuring from the wrong point: Horse height must be measured from the ground to the top of the withers (the ridge between the shoulder blades), not to the top of the head."
    ]
  },
  faqs: [
    {
      question: "Are hands still used to measure horses?",
      answer: "Yes. The hand remains the universal standard for measuring horse height in the United States, Canada, United Kingdom, and Australia."
    },
    {
      question: "How many inches are in a standard hand?",
      answer: "There are exactly 4 inches in a standard international hand."
    },
    {
      question: "How do I convert meters to hands manually?",
      answer: "To convert meters to hands manually, divide the meter value by 0.1016. For example, 1.6 meters divided by 0.1016 is approximately 15.75 hands."
    },
    {
      question: "What is the pony cutoff height in hands?",
      answer: "In competitive equestrian sports, any horse measuring under 14.2 hands (14 hands and 2 inches, or 147.32 cm) is classified as a pony."
    },
    {
      question: "What does '16.2 hands' mean?",
      answer: "It means 16 hands and 2 inches. Since a hand is 4 inches, 16 hands equals 64 inches, plus 2 inches, which is 66 inches (or 167.64 cm)."
    },
    {
      question: "Does this conversion work for decimal values?",
      answer: "Yes, the exact same mathematical divisor of 0.1016 applies to all decimal values. For instance, 1.55 meters is equal to approximately 15.26 hands."
    },
    {
      question: "What is the abbreviation for the hand unit?",
      answer: "The standard abbreviation for the hand is 'hd', though in equine circles it is often written as 'hh' (hands high)."
    },
    {
      question: "Why was the hand defined as 4 inches?",
      answer: "King Henry VIII standardized the hand at exactly 4 inches in 1540 to create a uniform measurement for trade, representing the average width of a human hand across the knuckles."
    }
  ],
  relatedList: [
    { label: "Hand to Meter", from: "hand", to: "meter" },
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
    { label: "Meter to League", from: "meter", to: "league" },
    { label: "Meter to Cubit", from: "meter", to: "cubit" }
  ],
  references: [
    "International Yard and Pound Agreement (1959).",
    "Royal Decree of King Henry VIII (1540).",
    "Fédération Équestre Internationale (FEI) - Veterinary Regulations."
  ]
};
