import { CustomArticleData } from "./types";

export const celsiusToReaumur: CustomArticleData = {
  fromUnitId: "celsius",
  toUnitId: "reaumur",
  seoTitle: "Celsius to Réaumur Converter (°C to °Ré)",
  metaDescription: "Convert Celsius to Réaumur (°C to °Ré) instantly. Learn the 0.8x multiplication formula, historical background, step-by-step examples, and conversion tables.",
  h1: "Celsius to Réaumur Converter",
  introduction: [
    "The Celsius scale and the Réaumur scale both select the freezing point of water as their zero mark (0 °C = 0 °Ré). However, while Celsius divides the temperature span between freezing and boiling water into 100 degrees, Réaumur divides that identical thermal span into 80 degrees.",
    "Because both scales share a common zero point, converting Celsius to Réaumur involves a straightforward scaling factor: multiplying the Celsius value by 0.8 (or 4/5). This guide details the formula, calculation steps, historical context, and practical reference values."
  ],
  quickAnswer: {
    text: "To convert Celsius to Réaumur, multiply the temperature in Celsius by 0.8 (or 4/5). For example, 100 °C converts to 80 °Ré.",
    formulaDisplay: "°Ré = °C × 0.8",
    subtext: "Freezing water is 0 °Ré and boiling water is 80 °Ré under standard pressure."
  },
  aboutSourceUnit: {
    title: "Understanding the Celsius Scale (°C)",
    text: "The Celsius scale is the universally accepted metric standard for temperature measurement. Based on 0 °C for water freezing and 100 °C for water boiling, it forms an integral part of modern international measurement standards."
  },
  aboutTargetUnit: {
    title: "Understanding the Réaumur Scale (°Ré)",
    text: "Introduced in 1730 by French scientist René Antoine Ferchault de Réaumur, this scale was historically constructed using a alcohol-water mixture designed to expand by 80 parts per thousand between freezing and boiling water. It was widely used in Europe (especially France, Germany, and Russia) through the 18th and 19th centuries."
  },
  relationship: "Both scales set water freezing at 0 degrees. However, 100 degrees Celsius equals 80 degrees Réaumur. Therefore, 1 degree Celsius equals 0.8 degrees Réaumur, making 1 °Ré equal to 1.25 °C.",
  relationshipTitle: "Celsius vs Réaumur Scale Comparison",
  relationshipItems: [
    { label: "Water Freezing Point", value: "0 °C = 0 °Ré" },
    { label: "Room Temperature", value: "20 °C = 16 °Ré" },
    { label: "Body Temperature", value: "37 °C = 29.6 °Ré" },
    { label: "Water Boiling Point", value: "100 °C = 80 °Ré" }
  ],
  formula: {
    text: "Multiply the Celsius temperature by 0.8 (or 4/5) to find the equivalent temperature in Réaumur.",
    math: "°Ré = °C × 0.8",
    subtext: "To reverse the conversion (°Ré to °C), multiply by 1.25 (or 5/4)."
  },
  formulaTitle: "Celsius to Réaumur Formula",
  practicalTip: {
    title: "Fractional Shortcut",
    text: "To calculate mentally, multiply the Celsius number by 4 and then divide by 5. For example, 25 × 4 = 100, and 100 / 5 = 20 °Ré."
  },
  expertNote: {
    title: "Traditional Cheesemaking & Culinary Use",
    text: "Although obsolete in general science, the Réaumur scale is still referenced traditionally in European artisan cheesemaking (such as Parmigiano-Reggiano production in Italy and Swiss alpine cheeses) to monitor milk coagulation temperature."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Milk Processing Temperature (40 °C)",
        subtitle: "Convert a milk heating temperature of 40 °C to Réaumur for artisan cheesemaking.",
        steps: [
          "Start with the Celsius temperature: 40 °C.",
          "Apply the formula: °Ré = °C × 0.8.",
          "Calculate: 40 × 0.8 = 32.",
          "Result: 40 °C equals 32 °Ré."
        ]
      },
      {
        title: "Example 2: Room Temperature (20 °C)",
        subtitle: "Convert a standard room temperature of 20 °C to Réaumur.",
        steps: [
          "Start with 20 °C.",
          "Multiply by 0.8: 20 × 0.8 = 16.",
          "Result: 20 °C equals 16 °Ré."
        ]
      }
    ]
  },
  table: {
    title: "Celsius to Réaumur Quick Reference Table",
    headers: ["Celsius (°C)", "Réaumur (°Ré)", "Reference Point"],
    rows: [
      { fromVal: "-20 °C", toVal: "-16 °Ré", extra: "Deep freezer temperature" },
      { fromVal: "0 °C", toVal: "0 °Ré", extra: "Freezing point of pure water" },
      { fromVal: "10 °C", toVal: "8 °Ré", extra: "Cool autumn day" },
      { fromVal: "20 °C", toVal: "16 °Ré", extra: "Standard room temperature" },
      { fromVal: "25 °C", toVal: "20 °Ré", extra: "Warm ambient temperature" },
      { fromVal: "30 °C", toVal: "24 °Ré", extra: "Hot summer day" },
      { fromVal: "37 °C", toVal: "29.6 °Ré", extra: "Human body temperature" },
      { fromVal: "50 °C", toVal: "40 °Ré", extra: "Hot bath temperature" },
      { fromVal: "100 °C", toVal: "80 °Ré", extra: "Boiling point of water at 1 atm" }
    ]
  },
  applications: {
    title: "Historical & Modern Uses of Celsius to Réaumur",
    items: [
      {
        title: "European Artisan Dairy & Cheesemaking",
        text: "Traditional Italian and Swiss copper-vat cheesemakers continue to log vat cooking temperatures using legacy Réaumur thermometers."
      },
      {
        title: "Historical Literature & Scientific Records",
        text: "Historians and archivists translating 18th-century European scientific journals, meteorological records, and medical logs regularly convert Réaumur entries to modern Celsius."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1.25 instead of 0.8: Remember that Réaumur degree numbers are smaller than Celsius numbers for positive temperatures above zero.",
      "Adding 32: Adding 32 is used for Fahrenheit, not Réaumur (since Réaumur zero is identical to Celsius zero)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Celsius to Réaumur?",
      answer: "Multiply the temperature in Celsius by 0.8 (or 4/5)."
    },
    {
      question: "What is 0 °C in Réaumur?",
      answer: "0 °C is equal to 0 °Ré."
    },
    {
      question: "What is 100 °C in Réaumur?",
      answer: "100 °C is equal to 80 °Ré."
    },
    {
      question: "Is Réaumur still used today?",
      answer: "It is largely obsolete in modern science, but retains niche traditional use in European artisan cheesemaking."
    },
    {
      question: "What is 20 °C in Réaumur?",
      answer: "20 °C is equal to 16 °Ré (20 × 0.8)."
    },
    {
      question: "Why does boiling water equal 80 °Ré?",
      answer: "Réaumur built his early thermometer so that his alcohol mixture expanded by 80 parts per thousand between freezing and boiling water."
    }
  ],
  relatedList: [
    { label: "Celsius to Fahrenheit", from: "celsius", to: "fahrenheit" },
    { label: "Celsius to Kelvin", from: "celsius", to: "kelvin" },
    { label: "Celsius to Newton", from: "celsius", to: "newton" }
  ],
  references: [
    "Encyclopædia Britannica - Réaumur Temperature Scale",
    "History of Thermometry & Scientific Instruments"
  ]
};
