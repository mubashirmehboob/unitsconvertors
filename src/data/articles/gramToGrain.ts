import { CustomArticleData } from "./types";

export const gramToGrain: CustomArticleData = {
  fromUnitId: "gram",
  toUnitId: "grain",
  seoTitle: "Gram to Grain Converter - g to gr",
  metaDescription: "Convert grams to grains (g to gr) with our accurate weight converter. Learn the exact 15.4323584 conversion factor, formula, worked examples, and ballistic/reloading data.",
  canonicalUrl: "https://unitsconvertors.com/gram-to-grain",
  h1: "Gram to Grain Converter",
  introduction: [
    "The gram and the grain are two units of mass bridging the metric system and historical imperial measurement standards. While the gram is widely recognized across international science, medicine, and food packaging, the grain remains the foundational unit for firearms ballistics, gunpowder propellant measuring, arrow mass in archery, and specialized pharmacy compounding.",
    "Understanding how to convert grams to grains enables target shooters, handloaders, jewelers, and laboratory technicians to translate metric measurements into precise ballistic recipes. Because one grain is defined as exactly 64.79891 milligrams, the relationship between grams and grains is constant and scientifically exact."
  ],
  quickAnswer: {
    text: "To convert grams to grains, multiply the mass in grams by 15.43235835. For example, 5 grams is equal to approximately 77.16 grains.",
    formulaDisplay: "1 g ≈ 15.432358 gr",
    subtext: "Multiply any gram value by 15.43235835 to calculate the exact mass in grains (gr)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a standard metric unit of mass defined as one-thousandth of a kilogram (10⁻³ kg), the base unit of mass in the International System of Units (SI). Derived historically from the mass of one cubic centimeter of water at freezing point, the gram provides an intuitive, high-precision scale for everyday items, laboratory reagents, nutritional values, and culinary ingredients."
  },
  aboutTargetUnit: {
    title: "Understanding the Grain (gr)",
    text: "The grain (symbol: gr) is a traditional unit of mass originating from the average mass of a single cereal grain (such as barley or wheat). Standardized under the 1959 International Yard and Pound Agreement, one avoirdupois pound contains exactly 7,000 grains, establishing one grain as exactly 0.06479891 grams (64.79891 mg). It remains the global standard for firearm projectile weights, archery arrows, and gunpowder charges."
  },
  relationship: "Under international standards, 1 avoirdupois pound equals 7,000 grains and 453.59237 grams. Dividing 7,000 by 453.59237 yields approximately 15.4323583529 grains per gram. Conversely, 1 grain equals exactly 0.06479891 grams.",
  relationshipTitle: "Mathematical Relationship Between Grams and Grains",
  relationshipItems: [
    { label: "1 Gram (g)", value: "≈ 15.432358 Grains (gr)" },
    { label: "1 Grain (gr)", value: "0.06479891 Grams (g)" },
    { label: "1 Kilogram (kg)", value: "15,432.358 Grains (gr)" },
    { label: "7,000 Grains (gr)", value: "453.59237 Grams (1 lb)" }
  ],
  formula: {
    text: "To calculate grains from grams, multiply the mass in grams by the international conversion factor 15.43235835, or divide grams by 0.06479891.",
    math: "Mass in Grains (gr) = Mass in Grams (g) × 15.43235835",
    subtext: "Or: gr = g / 0.06479891"
  },
  formulaTitle: "Gram to Grain Conversion Formula",
  practicalTip: {
    title: "Handloading & Precision Tip",
    text: "In firearms reloading, never confuse grams with grains. Gunpowder charge weights are measured in grains (e.g., 25 gr), whereas European ammunition catalogs often state bullet projectile mass in grams (e.g., 8.0 g for a 9mm Parabellum projectile, which equals 123.46 gr)."
  },
  examples: {
    title: "Step-by-Step Gram to Grain Calculations",
    items: [
      {
        title: "Example 1: Converting a 9mm Bullet Weight",
        subtitle: "A European ammunition manufacturer lists a 9mm Luger bullet mass as 8.0 grams. Convert this projectile mass to grains.",
        steps: [
          "Identify the mass in grams: 8.0 g.",
          "Apply the conversion formula: gr = g × 15.43235835.",
          "Perform the multiplication: 8.0 × 15.43235835 = 123.458867 gr.",
          "Round to common reloading precision: 8.0 grams corresponds to a 124-grain bullet."
        ]
      },
      {
        title: "Example 2: Target Archery Arrow Point",
        subtitle: "An archer selects a field point weighing 6.48 grams. Determine the point weight in standard archery grains.",
        steps: [
          "Identify the weight in grams: 6.48 g.",
          "Apply the formula: gr = 6.48 / 0.06479891.",
          "Perform the calculation: 6.48 / 0.06479891 = 100.00168 gr.",
          "Conclude the calculation: The arrow tip is a standard 100-grain field point."
        ]
      }
    ]
  },
  table: {
    title: "Gram to Grain Conversion Reference Table",
    headers: ["Grams (g)", "Grains (gr)", "Common Ballistic / Practical Application"],
    rows: [
      { fromVal: "0.1", toVal: "1.5432", extra: "Micro-powder charges in match air pistols" },
      { fromVal: "0.5", toVal: "7.7162", extra: "Small medicinal powder doses" },
      { fromVal: "1", toVal: "15.4324", extra: "Baseline 1 gram reference mass" },
      { fromVal: "2.6", toVal: "40.1241", extra: "Standard .22 LR rimfire lead bullet (40 gr)" },
      { fromVal: "3.56", toVal: "54.9392", extra: "55-grain .223 Remington / 5.56 NATO projectile" },
      { fromVal: "7.45", toVal: "114.9711", extra: "Standard 115-grain 9mm Luger FMJ projectile" },
      { fromVal: "8.0", toVal: "123.4589", extra: "Standard 124-grain 9mm NATO target bullet" },
      { fromVal: "9.53", toVal: "147.0704", extra: "147-grain 9mm subsonic projectile" },
      { fromVal: "11.34", toVal: "175.0030", extra: "175-grain .308 Winchester match-grade bullet" },
      { fromVal: "14.9", toVal: "229.9421", extra: "230-grain .45 ACP military handgun bullet" }
    ]
  },
  expertNote: {
    title: "Exact Legal Definition",
    text: "The grain is identical across the avoirdupois, troy, and apothecaries' systems of measurement. In every historical system, 1 grain equals exactly 64.79891 milligrams. This makes the grain a universal constant among non-metric mass units."
  },
  applications: {
    title: "Key Industries Using Gram to Grain Conversions",
    items: [
      {
        title: "Firearms Ballistics & Reloading",
        text: "Gunsmiths and reloaders measure smokeless powder charges and bullet core masses in grains to ensure precise chamber pressures, muzzle velocities, and safe firing cycles."
      },
      {
        title: "Archery & Bowhunting Equipment",
        text: "Total arrow weight, broadhead mass, and grain-per-pound (GPP) draw weight ratios are calculated in grains to optimize kinetic energy and arrow trajectory."
      },
      {
        title: "Pharmaceutical Compounding & Gemology",
        text: "Specialty pharmacists and historical pearl traders use grain values to verify small doses of active powders and traditional pearl seed weights."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting Grams to Grains",
    items: [
      "Confusing grains (gr) with grams (g): Grains use the symbol 'gr', whereas grams use 'g'. A powder scale reading 5.0 grams contains over 77 grains, which could cause a catastrophic overpressure if loaded as a 5-grain recipe.",
      "Using approximate multipliers: Rounding 15.432 to 15 introduces a 2.8% error, which is significant in sensitive ballistic calculations.",
      "Confusing grains with drams: A dram is an older imperial unit equal to 27.34375 grains; always verify whether a historic recipe uses grains, drams, or grams."
    ]
  },
  faqs: [
    {
      question: "How many grains are in one gram?",
      answer: "There are approximately 15.43235835 grains in one gram (exact definition: 1 grain = 0.06479891 grams)."
    },
    {
      question: "What is the formula to convert grams to grains?",
      answer: "Multiply the mass in grams by 15.43235835 (or divide the mass in grams by 0.06479891)."
    },
    {
      question: "Why do reloaders use grains instead of grams?",
      answer: "The grain offers finer increment granularity without needing decimal places on traditional mechanical balance scales, where 0.1 grain equals roughly 0.0065 grams."
    },
    {
      question: "How many grains is a 124-gram weight?",
      answer: "124 grams equals approximately 1,913.61 grains (124 × 15.432358 = 1,913.61 gr). Note that a 124-grain bullet weighs about 8.035 grams."
    },
    {
      question: "Is a grain the same in troy weight and avoirdupois weight?",
      answer: "Yes, the grain is identical in avoirdupois, troy, and apothecaries' systems. 1 grain equals exactly 64.79891 milligrams in all systems."
    },
    {
      question: "How do I convert grains back to grams?",
      answer: "Multiply the grain value by 0.06479891 (or divide by 15.43235835) to find the equivalent mass in grams."
    },
    {
      question: "What is the symbol for grain and gram?",
      answer: "The official symbol for the grain is 'gr' (lowercase), and the symbol for the gram is 'g' (lowercase)."
    },
    {
      question: "How many grains are in one kilogram?",
      answer: "One kilogram (1,000 grams) contains exactly 15,432.3583529 grains."
    }
  ],
  relatedList: [
    { label: "Gram to Kilogram", from: "gram", to: "kilogram" },
    { label: "Gram to Troy Ounce", from: "gram", to: "troy-ounce" },
    { label: "Gram to Ounce", from: "gram", to: "ounce" },
    { label: "Gram to Milligram", from: "gram", to: "milligram" },
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) Handbook 44 - Specifications and Tolerances for Measuring Devices",
    "International Bureau of Weights and Measures (BIPM) - The International System of Units (SI Brochure, 9th Edition)",
    "Sporting Arms and Ammunition Manufacturers' Institute (SAAMI) - Technical Standards for Firearms and Ammunition"
  ]
};
