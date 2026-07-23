import { CustomArticleData } from "./types";

export const gramToCarat: CustomArticleData = {
  fromUnitId: "gram",
  toUnitId: "carat",
  seoTitle: "Gram to Carat Converter - g to ct",
  metaDescription: "Instantly convert grams to carats (g to ct). Master the conversion mathematics with step-by-step examples, a diamond-grading reference table, and jewelry insights.",
  h1: "Gram to Carat Converter",
  introduction: [
    "The gram and the carat are the premier units of mass used to express the weights of valuable elements. While the gram serves as the general metric standard for smaller everyday objects, the carat is the global language of precious gemstones, pearls, and diamonds.",
    "Our gram to carat converter provides a precise and immediate translation of mass values. This helps jewelers, gemologists, collectors, and hobbyists accurately analyze gemstone weight metrics and calculate market valuations."
  ],
  quickAnswer: {
    text: "To convert grams to carats, multiply the gram value by 5. For example, 2 grams is equal to exactly 10 carats.",
    formulaDisplay: "1 g = 5 ct",
    subtext: "Simply multiply your mass value in grams by 5 to find the equivalent weight in metric carats."
  },
  aboutSourceUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a fundamental unit of mass in the metric system. It is commonly used to measure food weights, retail packages, mailing weights, and school-lab chemical samples."
  },
  aboutTargetUnit: {
    title: "Understanding the Carat (ct)",
    text: "The carat (symbol: ct), often called the metric carat, is defined as exactly 200 milligrams (or 0.2 grams). It is the internationally recognized mass standard for weighing cut diamonds, emeralds, rubies, and other jewelry stones."
  },
  relationship: "Because one metric carat is defined as exactly 0.2 grams, there are exactly 5 carats in every single gram. Converting from grams to carats is a straightforward linear scaling where you multiply by five.",
  relationshipTitle: "The Gemological Scale: Grams vs Carats",
  relationshipItems: [
    { label: "1 Gram (g)", value: "5 Carats (ct)" },
    { label: "1 Carat (ct)", value: "0.2 Grams (g)" }
  ],
  formula: {
    text: "Convert mass by multiplying the gram value by the exact metric factor of five.",
    math: "Mass in Carats (ct) = Mass in Grams (g) × 5",
    subtext: "Since 1 divided by 0.2 is exactly 5, this calculation is always mathematically precise and does not require rounding."
  },
  formulaTitle: "The Gram to Carat Formula",
  practicalTip: {
    title: "Mental Math with Fives",
    text: "You can convert grams to carats in your head by doubling your gram value and moving the decimal point one place to the right (which is mathematically equivalent to multiplying by five). For example, 1.2 grams becomes 2.4, then 24 carats."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Large Raw Emerald",
        subtitle: "A geologist discovers an uncut raw emerald crystal weighing 12.4 grams. Convert this gemstone weight to carats.",
        steps: [
          "Identify the weight in grams: 12.4 g.",
          "Write down the conversion formula: ct = g × 5.",
          "Perform the multiplication: 12.4 × 5 = 62.",
          "Conclude the calculation: 12.4 grams of emerald is exactly equal to 62 carats."
        ]
      },
      {
        title: "Example 2: Designer Jewelry Setting",
        subtitle: "A luxury designer ring includes multiple diamond accents weighing a total of 1.8 grams. Determine the weight in carats.",
        steps: [
          "Identify the weight in grams: 1.8 g.",
          "Multiply by the metric factor: 1.8 × 5.",
          "Calculate the product: 9.",
          "Conclude the calculation: The diamond accent weight is equivalent to exactly 9 carats."
        ]
      }
    ]
  },
  table: {
    title: "Gram to Carat Reference Table",
    headers: ["Grams (g)", "Carats (ct)", "Typical Reference Object"],
    rows: [
      { fromVal: "0.1", toVal: "0.5", extra: "A small gemstone accent" },
      { fromVal: "0.2", toVal: "1.0", extra: "A standard 1-carat diamond solitaire" },
      { fromVal: "0.5", toVal: "2.5", extra: "A larger engagement ring diamond" },
      { fromVal: "1.0", toVal: "5.0", extra: "A standard paperclip weight" },
      { fromVal: "2.0", toVal: "10.0", extra: "A medium-sized pearl" },
      { fromVal: "5.0", toVal: "25.0", extra: "A heavy-duty wedding band metal" },
      { fromVal: "10.0", toVal: "50.0", extra: "A large raw mineral crystal" },
      { fromVal: "50.0", toVal: "250.0", extra: "The weight of a luxury pocket watch" }
    ]
  },
  expertNote: {
    title: "Carat vs Karat",
    text: "Be careful not to confuse 'carat' (ct) with 'karat' (k). Carat is a unit of absolute mass used for gemstones. Karat is a unit of gold purity, where 24-karat represents pure gold, and 18-karat is 75% pure gold."
  },
  applications: {
    title: "Real-World Gemological Applications",
    items: [
      {
        title: "Diamond and Gemstone Trading",
        text: "Wholesale gem markets operate on carat weights. Because scales weigh items in grams, dealers multiply the raw gram reading by five to establish carat counts for pricing."
      },
      {
        title: "Fine Jewelry Custom Manufacturing",
        text: "Jewelry designers combine heavy metals (weighed in grams) with accent gemstones (weighed in carats). Converting both to a common unit helps calculate the correct structural strength."
      },
      {
        title: "Historical Artifact Audits",
        text: "Archaeologists cataloging ancient royal crown treasures document overall crown weights in grams, then estimate gemstone weights in carats to compare with historical royal archives."
      }
    ]
  },
  pitfalls: {
    title: "Common Weight Conversion Mistakes",
    items: [
      "Dividing instead of multiplying: Since a carat is a smaller unit of mass than a gram, your carat value should always be larger than your gram value. If your number gets smaller, you divided by 5 instead of multiplying.",
      "Confusing Carats and Karats: Remember that a 14k gold band measures purity, whereas a 2ct diamond measures physical weight.",
      "Rounding the factor: Since the factor is exactly 5, never approximate this multiplication. Keep calculations exact to maintain financial integrity when trading precious stones."
    ]
  },
  faqs: [
    {
      question: "How do I convert grams to carats?",
      answer: "Multiply the weight in grams by 5 to find the equivalent value in carats."
    },
    {
      question: "How many carats are in a gram?",
      answer: "There are exactly 5 metric carats in one gram."
    },
    {
      question: "What is the difference between a carat and a gram?",
      answer: "A gram is a standard metric unit of mass, while a carat is a smaller unit of mass equal to exactly 0.2 grams (one-fifth of a gram), used specifically for gemstones."
    },
    {
      question: "What is the formula for converting g to ct?",
      answer: "The formula is: Carats (ct) = Grams (g) × 5."
    },
    {
      question: "Is 1 carat equal to 200 milligrams?",
      answer: "Yes, exactly 200 milligrams (or 0.2 grams) defines one metric carat."
    },
    {
      question: "What is the official symbol for the carat unit?",
      answer: "The official abbreviation for carat is 'ct'."
    },
    {
      question: "Can this converter process decimal values?",
      answer: "Yes, our tool handles fractional and decimal gram values instantly, providing accurate, high-precision carat weights."
    },
    {
      question: "How do I convert carats back to grams?",
      answer: "Divide the carat value by 5 (or multiply by 0.2) to perform the reverse calculation."
    }
  ],
  relatedList: [
    { label: "Gram to Kilogram", from: "gram", to: "kilogram" },
    { label: "Gram to Milligram", from: "gram", to: "milligram" },
    { label: "Gram to Pound", from: "gram", to: "pound" },
    { label: "Gram to Ounce", from: "gram", to: "ounce" },
    { label: "Carat to Gram", from: "carat", to: "gram" }
  ],
  references: [
    "CIBJO - The World Jewellery Confederation guidelines",
    "ISO 565 - Gemstone and diamond mass measurements standards"
  ]
};
