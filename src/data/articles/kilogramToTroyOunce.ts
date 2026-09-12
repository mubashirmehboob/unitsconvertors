import { CustomArticleData } from "./types";

export const kilogramToTroyOunce: CustomArticleData = {
  fromUnitId: "kilogram",
  toUnitId: "troy-ounce",
  seoTitle: "Kilogram to Troy Ounce Converter - kg to ozt",
  metaDescription: "Convert kilograms to troy ounces (kg to ozt) with bullion market precision. Learn the 32.1507 multiplier, gold bar weights, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-to-troy-ounce",
  h1: "Kilogram to Troy Ounce Converter",
  introduction: [
    "In the international bullion trade, commodity exchanges in London (LBMA), New York (COMEX), and Shanghai quote spot prices for gold, silver, platinum, and palladium in troy ounces (ozt). However, modern precious metal refineries, central bank vault inventories, and industrial minting presses cast, weigh, and certify bars in kilograms.",
    "Because a troy ounce is defined as exactly 31.1034768 grams—making it roughly 9.7% heavier than the standard grocery avoirdupois ounce (28.3495 g)—one kilogram contains approximately 32.1507 troy ounces. Converting kilograms to troy ounces with extreme precision is vital for precious metal investors, numismatists, jewelers, and vault managers."
  ],
  quickAnswer: {
    text: "To convert kilograms to troy ounces, multiply the kilogram value by approximately 32.150747, or divide by 0.0311034768. For example, a 1-kilogram fine gold bar equals approximately 32.151 troy ounces.",
    formulaDisplay: "Troy Ounces (ozt) = Kilograms (kg) × 32.150747",
    subtext: "1 troy ounce is defined as exactly 31.1034768 grams (480 grains)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the foundational base unit of mass in the International System of Units (SI). Defined since 2019 via the fundamental Planck constant h (6.62607015 × 10⁻³⁴ J·s), the kilogram is the standard unit used by sovereign mints and precious metal refiners to produce standard 1 kg investment cast bars of 99.99% fine gold and silver."
  },
  aboutTargetUnit: {
    title: "Understanding the Troy Ounce (ozt)",
    text: "The troy ounce (symbol: ozt) is an ancient unit of mass derived from the medieval trade fairs of Troyes, France. Standardized under the British Coinage Act and international legal standards, one troy ounce is defined as exactly 480 grains (31.1034768 grams). It is the sole legally recognized ounce for quoting precious metals on global spot and futures commodity exchanges."
  },
  relationship: "The relationship between kilograms and troy ounces is established through exact metric-to-grain conversions: 1 troy ounce = 480 grains. Since 1 grain = 0.06479891 grams, 1 ozt = 480 × 0.06479891 g = 31.1034768 grams = 0.0311034768 kilograms. Inverting this factor gives 1 kg = 1,000 ÷ 31.1034768 ≈ 32.1507465686 troy ounces.",
  relationshipTitle: "Troy Ounce vs. Avoirdupois Ounce & Metric Ratios",
  relationshipItems: [
    { label: "1 Kilogram (kg)", value: "≈ 32.150747 Troy Ounces (ozt)" },
    { label: "1 Troy Ounce (ozt)", value: "Exactly 31.1034768 Grams (480 grains)" },
    { label: "1 Standard Avoirdupois Ounce (oz)", value: "28.349523 Grams (437.5 grains)" },
    { label: "Troy vs. Standard Ounce", value: "1 ozt ≈ 1.09714 avoirdupois ounces (+9.7%)" }
  ],
  formula: {
    text: "To convert mass from kilograms into troy ounces, multiply the mass in kilograms by 32.150747 (or divide by 0.0311034768).",
    math: "\\text{Mass (ozt)} = \\text{Mass (kg)} \\times 32.1507466 = \\frac{\\text{Mass (kg)}}{0.0311034768}",
    subtext: "To convert troy ounces back to kilograms: Mass (kg) = Mass (ozt) × 0.0311034768"
  },
  formulaTitle: "Kilogram to Troy Ounce Conversion Formula",
  practicalTip: {
    title: "The 32.15 Multiplier Rule",
    text: "In the bullion industry, traders memorize the benchmark constant 32.15: a 1-kilogram gold bar ('kilo bar') contains 32.15 troy ounces. Multiply any kilogram mass by 32.15 for quick financial estimates: 5 kg of gold ≈ 160.75 ozt."
  },
  examples: {
    title: "Step-by-Step Precious Metals Calculation Examples",
    items: [
      {
        title: "Example 1: 1 kg Gold Bar Spot Valuation",
        subtitle: "An investor purchases a certified 1.000-kilogram 999.9 fine gold cast bar when the spot gold price is $2,400 per troy ounce. Calculate total troy ounces and bar value.",
        steps: [
          "State bar mass: 1.000 kg.",
          "Apply conversion formula: ozt = 1.000 × 32.150747 ≈ 32.1507 ozt.",
          "Calculate market valuation: 32.1507 ozt × $2,400/ozt = $77,161.68.",
          "Conclusion: A 1 kg gold bar contains 32.151 troy ounces, valued at $77,161.68."
        ]
      },
      {
        title: "Example 2: Industrial Silver Grain Lot Conversion",
        subtitle: "A jewelry manufacturer orders 15.5 kilograms of fine silver casting grain. Express the batch in troy ounces.",
        steps: [
          "Given mass: 15.5 kg.",
          "Multiply by 32.150747: 15.5 × 32.150747 ≈ 498.3366.",
          "Conclusion: The silver batch equals approximately 498.34 troy ounces."
        ]
      },
      {
        title: "Example 3: Central Bank Good Delivery Gold Bar",
        subtitle: "A standard London Good Delivery 400-ounce gold bar weighs approximately 12.441 kilograms. Convert 12.4414 kg into troy ounces to verify bar compliance.",
        steps: [
          "State value: 12.4414 kg.",
          "Calculate: 12.4414 × 32.150747 ≈ 399.999.",
          "Conclusion: 12.4414 kg corresponds to exactly 400.00 troy ounces."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram to Troy Ounce Quick Reference Table",
    headers: ["Kilograms (kg)", "Troy Ounces (ozt)", "Grams (g)", "Avoirdupois Ounces (oz)"],
    rows: [
      { fromVal: "0.10 kg", toVal: "3.2151 ozt", extra: "100 g", extra2: "3.527 oz" },
      { fromVal: "0.25 kg", toVal: "8.0377 ozt", extra: "250 g", extra2: "8.818 oz" },
      { fromVal: "0.50 kg", toVal: "16.0754 ozt", extra: "500 g", extra2: "17.637 oz" },
      { fromVal: "1.00 kg", toVal: "32.1507 ozt", extra: "1,000 g", extra2: "35.274 oz" },
      { fromVal: "2.00 kg", toVal: "64.3015 ozt", extra: "2,000 g", extra2: "70.548 oz" },
      { fromVal: "5.00 kg", toVal: "160.7537 ozt", extra: "5,000 g", extra2: "176.370 oz" },
      { fromVal: "10.00 kg", toVal: "321.5075 ozt", extra: "10,000 g", extra2: "352.740 oz" },
      { fromVal: "12.44 kg", toVal: "400.0000 ozt", extra: "12,441 g", extra2: "438.855 oz" },
      { fromVal: "25.00 kg", toVal: "803.7687 ozt", extra: "25,000 g", extra2: "881.849 oz" },
      { fromVal: "31.10 kg", toVal: "1,000.0000 ozt", extra: "31,103 g", extra2: "1,097.143 oz" }
    ]
  },
  expertNote: {
    title: "The Critical 10% Ounce Confusion Trap",
    text: "Confusing troy ounces (ozt) with standard grocery avoirdupois ounces (oz) is the most costly error in the precious metals industry. 1 troy ounce = 31.1035 grams, whereas 1 avoirdupois ounce = 28.3495 grams. If a seller prices a 1 kg gold bar using the avoirdupois conversion (35.27 oz) instead of the troy conversion (32.15 ozt), they miscalculate the gold content by nearly 10%, leading to massive financial losses or pricing disputes."
  },
  applications: {
    title: "Practical Bullion & Commodity Market Scenarios",
    items: [
      {
        title: "Gold and Silver Kilo Bar Trading",
        text: "Kilogram bars ('kilo bars') are the most popular retail and institutional investment vehicle in Asia and Europe. Spot desk traders convert metric scale weights into troy ounces to match exchange pricing quoted on COMEX and the London Bullion Market."
      },
      {
        title: "Sovereign Mint Bullion Coin Production",
        text: "Mints (such as the US Mint, Royal Canadian Mint, and Austrian Mint) purchase 99.99% gold and silver feedstocks in metric tonnes and kilograms, stamping out 1-ounce (31.103 g) legal tender coins."
      },
      {
        title: "Jewelry Scrap Refining and Assaying",
        text: "Scrap gold buyers weigh post-consumer jewelry lots in grams and kilograms. After fire-assay refining to pure 24K fine metal, the yielded weight is converted into troy ounces for wholesale liquidation."
      }
    ]
  },
  pitfalls: {
    title: "Common Industry Pitfalls",
    items: [
      "Using the avoirdupois factor (35.274): 1 kg equals 35.274 grocery ounces, but only 32.151 troy ounces. Never use 28.35 g for precious metals.",
      "Ignoring gold purity (fineness): A 1 kg bar of 18K gold contains only 750 grams of pure fine gold (24.11 ozt of pure gold), even though the total gross weight is 32.15 ozt.",
      "Rounding the factor prematurely: In high-value commodities like platinum or gold, using 32.15 instead of 32.150747 causes a variance of 0.000747 ozt per kilo ($1.80+ per bar on gold).",
      "Confusing troy pounds with avoirdupois pounds: A troy pound contains 12 troy ounces (373.24 g), whereas an avoirdupois pound contains 16 avoirdupois ounces (453.59 g)."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilograms to troy ounces?",
      answer: "To convert kilograms (kg) to troy ounces (ozt), multiply the kilogram value by 32.150747, or divide by 0.0311034768. For example, 1 kg multiplied by 32.1507 equals approximately 32.151 troy ounces."
    },
    {
      question: "How many troy ounces are in 1 kilogram?",
      answer: "There are approximately 32.150747 troy ounces in 1 kilogram (1,000 ÷ 31.1034768 ≈ 32.150747 ozt)."
    },
    {
      question: "How many grams is 1 troy ounce?",
      answer: "One troy ounce is defined as exactly 31.1034768 grams (or 480 grains)."
    },
    {
      question: "What is the difference between an ounce and a troy ounce?",
      answer: "A standard grocery ounce (avoirdupois ounce) equals 28.3495 grams. A troy ounce equals 31.1035 grams, making the troy ounce roughly 9.7% heavier. Troy ounces are used exclusively for precious metals like gold and silver."
    },
    {
      question: "How much is a 1 kg gold bar in troy ounces?",
      answer: "A standard 1-kilogram gold bar contains approximately 32.1507 troy ounces of gold."
    },
    {
      question: "How do I convert troy ounces back to kilograms?",
      answer: "To convert troy ounces back to kilograms, multiply the troy ounce value by 0.0311034768 (or divide by 32.150747). For instance, 100 ozt × 0.03110348 ≈ 3.1103 kg."
    },
    {
      question: "What is the weight of a standard London Good Delivery gold bar?",
      answer: "A standard Good Delivery gold bar weighs 400 troy ounces, which is approximately 12.441 kilograms (about 27.4 pounds)."
    },
    {
      question: "What is the symbol for troy ounce?",
      answer: "The internationally recognized symbol for troy ounce is 'ozt' (or 'oz. tr.')."
    },
    {
      question: "Why do precious metals use troy weight?",
      answer: "Troy weight was established in the Middle Ages in Troyes, France, and adopted by British and international coin mints for monetary standards, surviving to this day because of global consistency in bullion trade."
    }
  ],
  relatedList: [
    { label: "Kilogram to Gram", from: "kilogram", to: "gram" },
    { label: "Kilogram to Ounce", from: "kilogram", to: "ounce" },
    { label: "Gram to Troy Ounce", from: "gram", to: "troy-ounce" },
    { label: "Troy Ounce to Kilogram", from: "troy-ounce", to: "kilogram" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "London Bullion Market Association (LBMA). <em>The Good Delivery Rules for Gold and Silver Bars</em>.",
    "National Institute of Standards and Technology (NIST). <em>Units of Measurement: Weights and Measures</em>."
  ]
};
