import { CustomArticleData } from "./types";

export const cupUsToPintUs: CustomArticleData = {
  fromUnitId: "cup-us",
  toUnitId: "pint-us",
  seoTitle: "Cup (US) to Pint (US) Converter (cup to pt)",
  metaDescription: "Convert US Customary cups to US pints (cup to pt). Exact 2 cups = 1 pint ratio, kitchen measurement tables, worked recipe examples, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/cup-us-to-pint-us",
  h1: "Cup (US) to Pint (US) Converter",
  introduction: [
    "Converting culinary volume from US Customary cups to US pints is a staple calculation in home cooking, commercial food prep, canning, and brewing. Whether scaling a stew recipe that calls for multiple cups of broth or purchasing fresh cream at the supermarket, knowing how cups translate into pints keeps ingredient proportions balanced.",
    "Under the United States Customary System, the relationship between cups and pints is exact and straightforward: one US liquid pint equals exactly 2 US Customary cups. Therefore, one cup represents exactly one-half (0.5) of a US pint. Converting cups to pints simply requires dividing the cup value by 2 (or multiplying by 0.5).",
    "This culinary reference guide details the mathematical conversion, offers a clear kitchen lookup table, presents step-by-step cooking examples, highlights practical applications in dairy and home brewing, and answers common measurement questions."
  ],
  quickAnswer: {
    text: "To convert US Customary cups to US liquid pints (pt), divide the cup value by 2 (or multiply by 0.5). For example, 2 cups equal exactly 1 US pint, 4 cups equal 2 pints (1 quart), and 1 cup equals 0.5 pint.",
    formulaDisplay: "US Pints (pt) = US Cups ÷ 2 = US Cups × 0.5",
    subtext: "1 US Liquid Pint = 2 US Customary Cups (1 US Cup = 0.5 US Pint)."
  },
  aboutSourceUnit: {
    title: "Understanding the US Customary Cup (cup)",
    text: "The US Customary cup (symbol: cup) is a traditional unit of volume equal to 8 US fluid ounces, 16 tablespoons, or 236.5882365 milliliters. It is the primary volumetric standard for American kitchen recipes."
  },
  aboutTargetUnit: {
    title: "Understanding the US Liquid Pint (pt)",
    text: "The US liquid pint (symbol: pt) is a customary unit of liquid volume defined as 16 US fluid ounces, 2 US cups, or 1/8 of a US liquid gallon. It equals exactly 473.176473 milliliters. It is standard for dairy packaging, craft beers, and beverage bottling."
  },
  relationship: "Because one standard US liquid pint contains exactly 16 US fluid ounces and one US cup contains 8 US fluid ounces, dividing 16 by 8 establishes that exactly 2 US cups make up 1 US pint. Inversely, 1 US cup is equal to 0.5 US pints.",
  relationshipTitle: "US Cup to Pint Volume Breakdown",
  relationshipItems: [
    { label: "1.00 US Cup (8 fl oz)", value: "= 0.50 US Pint (236.59 mL)" },
    { label: "2.00 US Cups (16 fl oz)", value: "= 1.00 US Pint (473.18 mL - standard cream tub)" },
    { label: "3.00 US Cups (24 fl oz)", value: "= 1.50 US Pints (709.76 mL)" },
    { label: "4.00 US Cups (32 fl oz)", value: "= 2.00 US Pints (1 US Quart / 946.35 mL)" },
    { label: "8.00 US Cups (64 fl oz)", value: "= 4.00 US Pints (1/2 US Gallon / 1.89 L)" }
  ],
  formula: {
    text: "Divide the volume in US Customary cups by 2 (or multiply by 0.5) to obtain US pints.",
    math: "pints = cups / 2",
    subtext: "To reverse the conversion: cups = pints × 2"
  },
  formulaTitle: "US Cup to Pint Conversion Formula",
  practicalTip: {
    title: "The Rhyme: A Pint's a Pound the World Around",
    text: "In the American kitchen, 1 pint of water weighs approximately 1 pound (16.7 oz) and equals exactly 2 cups. Remember: 2 cups = 1 pint = 16 fluid ounces."
  },
  expertNote: {
    title: "US Liquid Pint vs Imperial Pint",
    text: "Be mindful when reading British recipes: a UK Imperial pint contains 20 Imperial fluid ounces (568.26 mL), which equals approximately 2.4 US cups, whereas a US pint is only 16 US fluid ounces (473.18 mL) and equals exactly 2 US cups."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Buying Heavy Cream for Clam Chowder",
        subtitle: "A chowder recipe requires 3 cups of heavy whipping cream. How many pints should you buy?",
        steps: [
          "State the required volume: 3 cups.",
          "Apply the conversion formula: pints = 3 ÷ 2.",
          "Calculate: 3 ÷ 2 = 1.5 pints.",
          "Result: 3 US cups equals 1.5 US pints (one 1-pint tub plus one 1/2-pint tub)."
        ]
      },
      {
        title: "Example 2: Commercial Soup Stock Scaling",
        subtitle: "A commercial recipe calls for 6 cups of vegetable stock. Convert this into pints.",
        steps: [
          "Identify the volume: 6 cups.",
          "Divide by 2: 6 ÷ 2 = 3.0 pints.",
          "Result: 6 US cups equals exactly 3 US pints (or 1.5 quarts)."
        ]
      },
      {
        title: "Example 3: Home Canning Pickling Brine",
        subtitle: "A pickling brine recipe calls for 5 cups of white vinegar. Find the equivalent in pints.",
        steps: [
          "State the volume: 5 cups.",
          "Calculate: 5 × 0.5 = 2.5 pints.",
          "Result: 5 US cups equals 2.5 US pints."
        ]
      }
    ]
  },
  table: {
    title: "US Cup to Pint Conversion Table",
    headers: ["US Cups (cup)", "US Pints (pt)", "US Fluid Ounces (fl oz)", "Culinary & Kitchen Context"],
    rows: [
      { fromVal: "0.5 cup", toVal: "0.25 pt", extra: "4.0 fl oz", extra2: "Quarter pint (half cup measuring line)" },
      { fromVal: "1.0 cup", toVal: "0.50 pt", extra: "8.0 fl oz", extra2: "Half pint (small sour cream container)" },
      { fromVal: "1.5 cups", toVal: "0.75 pt", extra: "12.0 fl oz", extra2: "Standard soda can equivalent volume" },
      { fromVal: "2.0 cups", toVal: "1.00 pt", extra: "16.0 fl oz", extra2: "1 full US liquid pint (standard cream tub)" },
      { fromVal: "2.5 cups", toVal: "1.25 pt", extra: "20.0 fl oz", extra2: "Medium mixing bowl liquid measure" },
      { fromVal: "3.0 cups", toVal: "1.50 pt", extra: "24.0 fl oz", extra2: "Large mason jar volume" },
      { fromVal: "3.5 cups", toVal: "1.75 pt", extra: "28.0 fl oz", extra2: "Medium stew liquid portion" },
      { fromVal: "4.0 cups", toVal: "2.00 pt", extra: "32.0 fl oz", extra2: "1 US quart (pitcher capacity)" },
      { fromVal: "5.0 cups", toVal: "2.50 pt", extra: "40.0 fl oz", extra2: "Large stockpot simmering volume" },
      { fromVal: "6.0 cups", toVal: "3.00 pt", extra: "48.0 fl oz", extra2: "1.5 US quarts" },
      { fromVal: "8.0 cups", toVal: "4.00 pt", extra: "64.0 fl oz", extra2: "Half gallon (2 quarts)" },
      { fromVal: "16.0 cups", toVal: "8.00 pt", extra: "128.0 fl oz", extra2: "1 full US liquid gallon" }
    ]
  },
  applications: {
    title: "Practical Applications of Cup to Pint Conversion",
    items: [
      {
        title: "Grocery Shopping and Container Sizing",
        text: "Cooks convert cup-based ingredient quantities from internet recipes to pints to purchase the correct commercial package sizes of milk, cream, sour cream, and buttermilk."
      },
      {
        title: "Home Canning and Jar Selection",
        text: "Home preservers convert recipes written in cups to determine how many pint-sized mason jars are required for canning jams, salsas, and pickles."
      },
      {
        title: "Homebrewing and Fermentation Batches",
        text: "Small-batch homebrewers scale yeast starters and liquid extract recipes between cups and pints to fit standard Erlenmeyer flasks and carboys."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: A pint is twice as large as a cup, so the number of pints is always half the number of cups.",
      "Confusing US liquid pints with US dry pints: Dry pints measure agricultural produce (like berries) and equal 550.61 mL (approx. 2.33 cups), whereas liquid pints equal 473.18 mL (2.0 cups).",
      "Confusing US pints with British Imperial pints: The UK Imperial pint is 20 Imperial fl oz (568.26 mL), which equals roughly 2.4 US cups."
    ]
  },
  faqs: [
    {
      question: "How many cups are in 1 US pint?",
      answer: "There are exactly 2 US Customary cups in 1 US liquid pint."
    },
    {
      question: "What is the formula to convert US cups to pints?",
      answer: "The formula is: pints = cups ÷ 2 (or pints = cups × 0.5)."
    },
    {
      question: "How many pints is 4 cups?",
      answer: "4 cups ÷ 2 = 2 US pints (which also equals exactly 1 US quart)."
    },
    {
      question: "How many pints is 1 cup?",
      answer: "1 cup equals exactly 0.5 US pints (half a pint)."
    },
    {
      question: "How do I convert pints back to cups?",
      answer: "Multiply the number of pints by 2. For example, 3 pints × 2 = 6 cups."
    },
    {
      question: "Is a pint of milk the same as 2 cups?",
      answer: "Yes, in the United States, a 1-pint carton of milk contains exactly 2 cups (16 fluid ounces)."
    },
    {
      question: "What is 3 cups in pints?",
      answer: "3 cups ÷ 2 = 1.5 US pints (1 1/2 pints)."
    },
    {
      question: "Are dry pints the same size as liquid pints?",
      answer: "No. A US dry pint (used for berries and grain) is approximately 33.60 cubic inches (550.61 mL), while a liquid pint is 28.875 cubic inches (473.18 mL)."
    }
  ],
  relatedList: [
    { label: "Pint (US) to Cup (US)", from: "pint-us", to: "cup-us" },
    { label: "Cup (US) to Fluid Ounce (US)", from: "cup-us", to: "fluid-ounce-us" },
    { label: "Cup (US) to Quart (US)", from: "cup-us", to: "quart-us" },
    { label: "Cup (US) to Gallon (US)", from: "cup-us", to: "gallon-us" },
    { label: "Cup (US) to Tablespoon (US)", from: "cup-us", to: "tablespoon-us" }
  ],
  references: [
    "NIST Special Publication 811 - Guide for the Use of the International System of Units (SI).",
    "USDA Food Data Central - Measurement Standards for Domestic Recipes.",
    "ISO 80000-3:2019 Quantities and units — Part 3: Space and time."
  ]
};
