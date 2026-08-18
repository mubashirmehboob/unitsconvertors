import { CustomArticleData } from "./types";

export const kilogramToStone: CustomArticleData = {
  fromUnitId: "kilogram",
  toUnitId: "stone",
  seoTitle: "Kilogram to Stone Converter - kg to st",
  metaDescription: "Convert kilograms to stone and pounds (kg to st) for British & Irish body weight. Learn the exact 6.35029318 kg factor, formula, worked examples, and conversion tables.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-to-stone",
  h1: "Kilogram to Stone Converter",
  introduction: [
    "The kilogram and the stone are units of mass and body weight rooted in the International System of Units (SI) and the British Imperial measurement system. While the kilogram is the global standard for science, medicine, and international athletic competitions, the stone (st) remains the customary and cultural standard for measuring human body weight throughout the United Kingdom and Ireland.",
    "Understanding how to convert kilograms to stone (and remaining pounds) allows healthcare providers, fitness coaches, jockeys, and international travelers to translate metric hospital and gym scales into familiar British body weight measurements. Standardized internationally under the Imperial system, one stone equals exactly 14 avoirdupois pounds, or 6.35029318 kilograms."
  ],
  quickAnswer: {
    text: "To convert kilograms to stone, divide the kilogram value by 6.35029318 (or multiply by 0.157473). For example, 70 kilograms is equal to approximately 11.02 stone (or 11 stone 0.3 pounds).",
    formulaDisplay: "1 kg ≈ 0.157473 st",
    subtext: "Divide the mass in kilograms by 6.35029318 to calculate the weight in stone (st)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the base unit of mass in the International System of Units (SI). Derived from the universal Planck constant, the kilogram is the recognized standard for medical clinical trials, athletic sports registries, aviation cargo, and everyday consumer measurements across Europe and the Commonwealth."
  },
  aboutTargetUnit: {
    title: "Understanding the Stone (st)",
    text: "The stone (symbol: st) is an imperial unit of mass equal to exactly 14 avoirdupois pounds (approx. 6.35029 kg). Originating from ancient agricultural trading stones, the British Weights and Measures Act of 1824 standardized the stone across the United Kingdom. It remains widely used in Britain and Ireland for expressing adult body weight (e.g., '12 stone 6 pounds') and equestrian jockey handicap weights."
  },
  relationship: "Because 1 stone is defined as exactly 14 avoirdupois pounds ($14 \\times 0.45359237\\text{ kg}$), 1 stone equals exactly 6.35029318 kilograms. Inverting this relationship yields $1 / 6.35029318 \\approx 0.157473044$ stone per kilogram.",
  relationshipTitle: "Kilograms to Stone & Pounds Relationship",
  relationshipItems: [
    { label: "1 Stone (st)", value: "6.35029318 Kilograms (kg)" },
    { label: "1 Kilogram (kg)", value: "≈ 0.157473 Stone (st)" },
    { label: "1 Stone (st)", value: "14 Pounds (lbs)" },
    { label: "70 Kilograms (kg)", value: "11 Stone 0.3 Pounds (11.02 st)" }
  ],
  formula: {
    text: "To calculate stone from kilograms, divide the mass in kilograms by 6.35029318, or multiply by 0.157473044.",
    math: "Mass in Stone (st) = Mass in Kilograms (kg) / 6.35029318",
    subtext: "Or: st = kg × 0.157473044"
  },
  formulaTitle: "Kilogram to Stone Conversion Formula",
  practicalTip: {
    title: "How to Calculate Stone and Pounds (st & lbs)",
    text: "To get British format (Stone and Pounds): Divide kg by 6.35029 to find total stone. The integer part is your Stone. Take the decimal remainder and multiply by 14 to find the leftover Pounds. For example, 75 kg / 6.35029 = 11.81 st. 0.81 × 14 = 11.3 lbs, giving 11 stone 11.3 lbs."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Converting Adult Body Weight",
        subtitle: "A person weighs 80.0 kilograms on a metric health clinic scale. Convert this weight into stone and pounds for a UK medical health record.",
        steps: [
          "Identify the weight in kilograms: 80.0 kg.",
          "Apply the formula: st = 80.0 / 6.35029318 = 12.5978 stone.",
          "Extract the whole number of stone: 12 stone.",
          "Convert the decimal remainder (0.5978) to pounds: 0.5978 × 14 = 8.37 lbs.",
          "Conclude the calculation: 80 kg equals 12 stone 8.4 pounds (12 st 8.4 lb)."
        ]
      },
      {
        title: "Example 2: Thoroughbred Jockey Weigh-In",
        subtitle: "A jockey's riding weight is required to be exactly 58.0 kilograms. Determine the equivalent weight in stone.",
        steps: [
          "Identify the mass: 58.0 kg.",
          "Multiply by 0.157473044: 58.0 × 0.157473044 = 9.1334 stone.",
          "Calculate remaining pounds: 0.1334 × 14 = 1.87 lbs.",
          "Conclude the calculation: 58 kg corresponds to 9 stone 1.9 pounds (9 st 2 lb)."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram to Stone & Pounds Conversion Chart",
    headers: ["Kilograms (kg)", "Decimal Stone (st)", "Stone & Pounds (st lb)", "Body Weight Category / Context"],
    rows: [
      { fromVal: "50", toVal: "7.87 st", extra: "7 st 12.2 lb", extra2: "Lightweight adult / adolescent benchmark" },
      { fromVal: "55", toVal: "8.66 st", extra: "8 st 9.2 lb", extra2: "Petite adult body weight" },
      { fromVal: "60", toVal: "9.45 st", extra: "9 st 6.3 lb", extra2: "Adult body weight benchmark" },
      { fromVal: "65", toVal: "10.24 st", extra: "10 st 3.3 lb", extra2: "Adult body weight benchmark" },
      { fromVal: "70", toVal: "11.02 st", extra: "11 st 0.3 lb", extra2: "Standard UK reference adult weight" },
      { fromVal: "75", toVal: "11.81 st", extra: "11 st 11.3 lb", extra2: "Adult body weight benchmark" },
      { fromVal: "80", toVal: "12.60 st", extra: "12 st 8.4 lb", extra2: "Adult body weight benchmark" },
      { fromVal: "85", toVal: "13.38 st", extra: "13 st 5.4 lb", extra2: "Athletic adult benchmark" },
      { fromVal: "90", toVal: "14.17 st", extra: "14 st 2.4 lb", extra2: "Heavyweight athletic competitor" },
      { fromVal: "100", toVal: "15.75 st", extra: "15 st 10.5 lb", extra2: "100 kg milestone (15 st 10.5 lb)" }
    ]
  },
  expertNote: {
    title: "UK Legal Status of the Stone",
    text: "Under the UK Units of Measurement Regulations 1995, the stone is classified as a supplementary indicator. While retail food trade must legally display kilograms and grams, the stone remains the standard cultural expression for human body mass in Britain and Ireland."
  },
  applications: {
    title: "Where Kilogram to Stone Conversions Are Used",
    items: [
      {
        title: "British & Irish Personal Health & Fitness",
        text: "Individuals in the UK and Ireland track weight-loss milestones, gym progress, and fitness app targets in stone and pounds, converting from metric electronic scales."
      },
      {
        title: "Horse Racing & Equestrian Sports",
        text: "The British Horseracing Authority (BHA) specifies handicap weight allowances for horses and jockeys in stone and pounds (e.g., 9 st 7 lb)."
      },
      {
        title: "Combat Sports & Boxing Divisions",
        text: "Traditional British boxing, rugby, and martial arts gyms document athlete weigh-ins in stone alongside international kilogram divisions."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting kg to Stone",
    items: [
      "Forgetting there are 14 pounds in a stone (not 10 or 16): A decimal of .5 stone equals 7 pounds, not 5 pounds or 8 pounds.",
      "Dividing pounds by 16 instead of 14: While there are 16 ounces in a pound, there are 14 pounds in a stone.",
      "Dividing by 6.35 when converting from stone to kg: To convert stone to kilograms, you must multiply by 6.35029; to convert kilograms to stone, divide by 6.35029."
    ]
  },
  faqs: [
    {
      question: "How many stone are in one kilogram?",
      answer: "There are approximately 0.157473 stone in one kilogram (1 kg ≈ 0.1575 st)."
    },
    {
      question: "How many kilograms are in one stone?",
      answer: "One stone is equal to exactly 6.35029318 kilograms (14 pounds)."
    },
    {
      question: "What is 70 kg in stone and pounds?",
      answer: "70 kg is equal to 11 stone and 0.3 pounds (11 st 0.3 lb)."
    },
    {
      question: "What is 80 kg in stone and pounds?",
      answer: "80 kg is equal to 12 stone and 8.4 pounds (12 st 8.4 lb)."
    },
    {
      question: "What is the formula to convert kg to stone?",
      answer: "Divide the mass in kilograms by 6.35029318 (or multiply by 0.157473)."
    },
    {
      question: "Why do British people measure weight in stone?",
      answer: "The stone is a traditional British imperial unit standardized in 1824 that remains culturally entrenched for human body weight across the UK and Ireland."
    },
    {
      question: "How many pounds are in one stone?",
      answer: "There are exactly 14 avoirdupois pounds in one stone."
    },
    {
      question: "How do I convert stone back to kilograms?",
      answer: "Multiply the stone value by 6.35029318 to obtain the weight in kilograms."
    }
  ],
  relatedList: [
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" },
    { label: "Kilogram to Gram", from: "kilogram", to: "gram" },
    { label: "Gram to Stone", from: "gram", to: "stone" },
    { label: "Kilogram to Ounce", from: "kilogram", to: "ounce" },
    { label: "Kilogram to Metric Ton", from: "kilogram", to: "metric-ton" }
  ],
  references: [
    "UK National Measurement and Regulation Office - Units of Measurement Regulations",
    "British Horseracing Authority (BHA) - Rules of Racing: Weight and Scale of Weights",
    "BIPM - International System of Units (SI)"
  ]
};
