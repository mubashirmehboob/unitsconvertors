import { CustomArticleData } from "./types";

export const litersPer100kmToKmPerLiter: CustomArticleData = {
  fromUnitId: "liters-per-100km",
  toUnitId: "km-per-liter",
  seoTitle: "Liters per 100km to Kilometers per Liter Converter (L/100km to km/L)",
  metaDescription: "Convert Liters per 100 Kilometers to Kilometers per Liter (L/100km to km/L) instantly. Learn the 100 / (L/100km) inverse formula, calculation steps, tables, and FAQs.",
  h1: "Liters per 100km to Kilometers per Liter Converter",
  introduction: [
    "Liters per 100 kilometers (L/100km) and kilometers per liter (km/L) are the two primary metric measurement standards used globally to quantify automobile fuel economy. Both metrics rely exclusively on International System of Units (SI) measures—liters for liquid volume and kilometers for length—yet they express vehicle efficiency in reciprocal formats.",
    "Liters per 100 kilometers is a fuel consumption standard (lower values indicate superior efficiency), commonly utilized across Europe, Canada, and Australia. Kilometers per liter is a distance-per-volume economy metric (higher values indicate superior efficiency), standard in Japan, India, and Latin America. Converting between them requires dividing the baseline distance factor of 100 by the given rating.",
    "Whether evaluating foreign vehicle imports, interpreting automotive spec sheets, or calibrating dashboard instrumentation, this conversion provides a fast and reliable bridge between international metric fuel standards."
  ],
  quickAnswer: {
    text: "To convert Liters per 100 Kilometers (L/100km) to Kilometers per Liter (km/L), divide 100 by the L/100km value. For example, a car with a rating of 6.25 L/100km achieves exactly 16.0 km/L.",
    formulaDisplay: "km/L = 100 ÷ (L/100km)",
    subtext: "Note: This is an exact inverse conversion. A lower L/100km consumption yields a higher km/L economy."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100 Kilometers (L/100km)",
    text: "Liters per 100 kilometers (L/100km) measures the exact volume of fuel consumed in liters over a standard road trip of 100 kilometers. Regulated by the UNECE and used widely throughout Europe and the Commonwealth, lower numbers reflect greater fuel efficiency."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per liter (km/L) measures the total driving distance in kilometers achieved on one liter of fuel. Standardized in the Japanese JC08/WLTC test procedures and popular across Asia and South America, higher numbers signify greater range per tank."
  },
  relationship: "Because L/100km measures fuel volume consumed per 100 km and km/L measures kilometers traveled per 1 liter, they are inverse reciprocals scaled by 100. The relationship is mathematically defined as: km/L = (100 km) / (Liters consumed for 100 km) = 100 / (L/100km).",
  relationshipTitle: "L/100km to km/L Benchmark Scale",
  relationshipItems: [
    { label: "15.0 L/100km", value: "6.67 km/L — Heavy pickup truck / High-performance V8" },
    { label: "10.0 L/100km", value: "10.00 km/L — Midsize crossover / Large family SUV" },
    { label: "7.5 L/100km", value: "13.33 km/L — Standard 4-cylinder passenger car" },
    { label: "5.0 L/100km", value: "20.00 km/L — Modern compact hybrid / Efficient diesel" },
    { label: "4.0 L/100km", value: "25.00 km/L — Ultra-efficient full hybrid / Subcompact" }
  ],
  formula: {
    text: "Divide 100 by the fuel consumption value in liters per 100 kilometers.",
    math: "km/L = 100 / (L/100km)",
    subtext: "To convert in reverse from km/L to L/100km, use the exact same formula: L/100km = 100 / (km/L)."
  },
  formulaTitle: "L/100km to km/L Inverse Formula",
  practicalTip: {
    title: "Quick Mental Math",
    text: "Dividing 100 by common L/100km values is simple: 10 L/100km = 10 km/L; 5 L/100km = 20 km/L; 4 L/100km = 25 km/L; 8 L/100km = 12.5 km/L."
  },
  expertNote: {
    title: "Regional Testing Standard Differences",
    text: "When converting official window sticker figures, remember that Japanese WLTC/JC08 test cycles measure city stop-and-go differently from European WLTP cycles. While the mathematical conversion is exact, real-world mileage will reflect local driving conditions."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: European Commuter Hatchback",
        subtitle: "Convert a European combined rating of 5.5 L/100km into km/L.",
        steps: [
          "State the fuel consumption: 5.5 L/100km.",
          "Apply the reciprocal formula: km/L = 100 ÷ 5.5.",
          "Perform the calculation: 100 ÷ 5.5 = 18.1818...",
          "Result: 5.5 L/100km equals approximately 18.18 km/L."
        ]
      },
      {
        title: "Example 2: All-Wheel Drive Compact SUV",
        subtitle: "Convert an official rating of 8.4 L/100km to km/L.",
        steps: [
          "State the fuel consumption: 8.4 L/100km.",
          "Apply the formula: km/L = 100 ÷ 8.4.",
          "Perform the calculation: 100 ÷ 8.4 = 11.9047...",
          "Result: 8.4 L/100km equals approximately 11.90 km/L."
        ]
      },
      {
        title: "Example 3: High-Efficiency Hybrid",
        subtitle: "Convert a European hybrid rating of 3.8 L/100km into km/L.",
        steps: [
          "State the fuel consumption: 3.8 L/100km.",
          "Apply the formula: km/L = 100 ÷ 3.8.",
          "Perform the calculation: 100 ÷ 3.8 = 26.3157...",
          "Result: 3.8 L/100km equals approximately 26.32 km/L."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100km to Kilometers per Liter Conversion Table",
    headers: ["Liters per 100km (L/100km)", "Kilometers per Liter (km/L)", "Vehicle Efficiency Profile"],
    rows: [
      { fromVal: "3.5 L/100km", toVal: "28.57 km/L", extra: "Ultra Efficient (Plug-in Hybrid / Micro Diesel)" },
      { fromVal: "4.0 L/100km", toVal: "25.00 km/L", extra: "Outstanding (Full Hybrid Compact)" },
      { fromVal: "5.0 L/100km", toVal: "20.00 km/L", extra: "Excellent (Subcompact / Mild Hybrid)" },
      { fromVal: "6.0 L/100km", toVal: "16.67 km/L", extra: "Very Good (Compact Sedan / 1.0T)" },
      { fromVal: "7.0 L/100km", toVal: "14.29 km/L", extra: "Good (Midsize Sedan / Small SUV)" },
      { fromVal: "8.0 L/100km", toVal: "12.50 km/L", extra: "Average (Family Crossover AWD)" },
      { fromVal: "10.0 L/100km", toVal: "10.00 km/L", extra: "Moderate (Large SUV / V6 Engine)" },
      { fromVal: "12.0 L/100km", toVal: "8.33 km/L", extra: "Low Efficiency (Performance Saloon)" },
      { fromVal: "15.0 L/100km", toVal: "6.67 km/L", extra: "High Consumption (Full-Size 4x4)" },
      { fromVal: "20.0 L/100km", toVal: "5.00 km/L", extra: "Very High Consumption (Heavy Truck)" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Japanese Used Vehicle Importation",
        text: "Importers buying vehicles from Europe into Asian or Latin American markets convert Euro Certificate of Conformity L/100km figures into km/L for buyer comparison."
      },
      {
        title: "International Driver Trip Cost Estimation",
        text: "Tourists and drivers traveling in countries that sell petrol by the liter and post road distances in kilometers convert L/100km dashboard figures to km/L to quickly compute remaining range."
      },
      {
        title: "Vehicle Comparison Platforms",
        text: "Automotive review websites standardize vehicle database entries to display both L/100km and km/L for international readership."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Multiplying by 100 instead of dividing: Multiplying produces invalid results because of the inverse relationship between consumption and distance.",
      "Misunderstanding value direction: In L/100km, lower values indicate better economy. In km/L, higher values indicate better economy.",
      "Confusing with miles per gallon: km/L uses kilometers and liters, while MPG uses miles and gallons."
    ]
  },
  faqs: [
    {
      question: "How do you convert L/100km to km/L?",
      answer: "Divide 100 by the L/100km rating: km/L = 100 ÷ (L/100km). For example, 5.0 L/100km equals 100 ÷ 5.0 = 20.0 km/L."
    },
    {
      question: "What is 8 L/100km in km/L?",
      answer: "8 L/100km equals exactly 12.50 km/L (100 ÷ 8 = 12.5)."
    },
    {
      question: "What is 6 L/100km in km/L?",
      answer: "6 L/100km equals approximately 16.67 km/L (100 ÷ 6 = 16.6667)."
    },
    {
      question: "What is 10 L/100km in km/L?",
      answer: "10 L/100km equals exactly 10.00 km/L (100 ÷ 10 = 10)."
    },
    {
      question: "What is 4 L/100km in km/L?",
      answer: "4 L/100km equals exactly 25.00 km/L (100 ÷ 4 = 25)."
    },
    {
      question: "Why is the formula for converting L/100km to km/L inverse?",
      answer: "It is inverse because L/100km represents fuel volume consumed per unit distance, whereas km/L represents distance traveled per unit volume."
    },
    {
      question: "Is 15 km/L better than 7 L/100km?",
      answer: "Yes. 15 km/L equals 6.67 L/100km, which uses less fuel per 100 km than 7.0 L/100km (14.29 km/L)."
    },
    {
      question: "How many km/L is 12 L/100km?",
      answer: "12 L/100km equals approximately 8.33 km/L (100 ÷ 12 = 8.3333)."
    }
  ],
  relatedList: [
    { label: "km/L to L/100km", from: "km-per-liter", to: "liters-per-100km" },
    { label: "L/100km to MPG (US)", from: "liters-per-100km", to: "mpg-us" },
    { label: "L/100km to MPG (UK)", from: "liters-per-100km", to: "mpg-uk" },
    { label: "L/100km to L/km", from: "liters-per-100km", to: "liters-per-km" }
  ],
  references: [
    "International Organization for Standardization (ISO 7111) — Measurement of Fuel Consumption of Motor Vehicles",
    "United Nations Economic Commission for Europe (UNECE Regulation 101) — Emissions and Fuel Consumption",
    "Japanese Ministry of Land, Infrastructure, Transport and Tourism (MLIT) — Energy Conservation Act Guidelines"
  ]
};
