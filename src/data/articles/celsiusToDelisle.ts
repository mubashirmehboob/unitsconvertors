import { CustomArticleData } from "./types";

export const celsiusToDelisle: CustomArticleData = {
  fromUnitId: "celsius",
  toUnitId: "delisle",
  seoTitle: "Celsius to Delisle Converter (°C to °De)",
  metaDescription: "Convert Celsius to Delisle (°C to °De). Understand Joseph-Nicolas Delisle's inverted temperature formula, step-by-step examples, and historical Russian thermometry.",
  h1: "Celsius to Delisle Converter",
  introduction: [
    "The Celsius scale and the Delisle scale present a fascinating contrast in thermal measurement design. Created in 1732 by French astronomer Joseph-Nicolas Delisle, the Delisle scale is an inverted temperature scale: higher numbers represent colder temperatures, while lower numbers represent warmer temperatures.",
    "Because Delisle defined 0 °De at the boiling point of water (100 °C) and 150 °De at the freezing point of water (0 °C), converting Celsius to Delisle requires subtracting the Celsius temperature from 100 and multiplying by 1.5. This guide details the formula, worked examples, and historical background."
  ],
  quickAnswer: {
    text: "To convert Celsius to Delisle, subtract the Celsius temperature from 100, then multiply the result by 1.5. For example, 0 °C converts to 150 °De and 100 °C converts to 0 °De.",
    formulaDisplay: "°De = (100 - °C) × 1.5",
    subtext: "Delisle is an inverted scale where 0 °De is boiling water and 150 °De is freezing water."
  },
  aboutSourceUnit: {
    title: "Understanding the Celsius Scale (°C)",
    text: "The Celsius scale is the standard metric temperature scale used worldwide. It defines 0 °C as the freezing point of water and 100 °C as the boiling point under standard atmospheric pressure."
  },
  aboutTargetUnit: {
    title: "Understanding the Delisle Scale (°De)",
    text: "Invented in 1732 by astronomer Joseph-Nicolas Delisle during his work in St. Petersburg, Russia, the Delisle scale measured the contraction of mercury as it cooled from boiling water. Consequently, as temperatures drop, Delisle values increase. It remained the dominant temperature scale across Imperial Russia for over a century."
  },
  relationship: "The Delisle scale runs inversely to Celsius. The 100 °C span between boiling and freezing water is divided into 150 Delisle degrees. Each Delisle degree represents 2/3 of a Celsius degree, anchored backwards from boiling water.",
  relationshipTitle: "Celsius vs Delisle Inverted Scale Comparison",
  relationshipItems: [
    { label: "Water Boiling Point", value: "100 °C = 0 °De" },
    { label: "Human Body Temp", value: "37 °C = 94.5 °De" },
    { label: "Room Temperature", value: "20 °C = 120 °De" },
    { label: "Water Freezing Point", value: "0 °C = 150 °De" }
  ],
  formula: {
    text: "Subtract the Celsius reading from 100 (water boiling point offset), then multiply by 1.5.",
    math: "°De = (100 - °C) × 1.5",
    subtext: "To reverse the conversion (°De to °C), use: °C = 100 - (°De / 1.5)."
  },
  formulaTitle: "Celsius to Delisle Formula",
  practicalTip: {
    title: "Remember the Inversion",
    text: "A lower Delisle reading means hotter conditions. For example, 0 °De is boiling water, whereas 150 °De is freezing water."
  },
  expertNote: {
    title: "Russian Imperial Adoption",
    text: "Empress Anna of Russia invited Delisle to found the St. Petersburg Observatory. Delisle's thermometers were manufactured locally, making Delisle the standard scale throughout 18th-century Russian science and medicine."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Room Temperature (20 °C)",
        subtitle: "Convert standard indoor room temperature of 20 °C into degrees Delisle.",
        steps: [
          "Start with the Celsius value: 20 °C.",
          "Subtract from 100: 100 - 20 = 80.",
          "Multiply by 1.5: 80 × 1.5 = 120.",
          "Result: 20 °C is equal to 120 °De."
        ]
      },
      {
        title: "Example 2: Water Freezing Point (0 °C)",
        subtitle: "Convert the freezing temperature of water (0 °C) into degrees Delisle.",
        steps: [
          "Start with 0 °C.",
          "Subtract from 100: 100 - 0 = 100.",
          "Multiply by 1.5: 100 × 1.5 = 150.",
          "Result: 0 °C equals 150 °De."
        ]
      }
    ]
  },
  table: {
    title: "Celsius to Delisle Quick Reference Table",
    headers: ["Celsius (°C)", "Delisle (°De)", "Thermal Benchmark"],
    rows: [
      { fromVal: "100 °C", toVal: "0 °De", extra: "Boiling point of pure water" },
      { fromVal: "80 °C", toVal: "30 °De", extra: "Very hot liquid / pasteurization" },
      { fromVal: "50 °C", toVal: "75 °De", extra: "Hot bath temperature" },
      { fromVal: "37 °C", toVal: "94.5 °De", extra: "Human body temperature" },
      { fromVal: "20 °C", toVal: "120 °De", extra: "Standard room temperature" },
      { fromVal: "10 °C", toVal: "135 °De", extra: "Cool autumn day" },
      { fromVal: "0 °C", toVal: "150 °De", extra: "Freezing point of water" },
      { fromVal: "-20 °C", toVal: "180 °De", extra: "Severe winter frost" }
    ]
  },
  applications: {
    title: "Historical Context & Applications",
    items: [
      {
        title: "Russian History & Literature Research",
        text: "Translating historical Russian medical logs, weather records, and 18th-century literature requires converting Delisle thermometer readings to Celsius."
      },
      {
        title: "History of Science & Thermometer Design",
        text: "Delisle's inverted scale serves as a prime example of contractive liquid thermometry before standardizing on positive-going scales."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Forgetting that the scale is inverted: Higher Delisle numbers mean colder temperatures.",
      "Subtracting after multiplying: Always perform (100 - °C) first before multiplying by 1.5."
    ]
  },
  faqs: [
    {
      question: "How do you convert Celsius to Delisle?",
      answer: "Subtract the Celsius value from 100, then multiply the result by 1.5."
    },
    {
      question: "What is 0 °C in Delisle?",
      answer: "0 °C is equal to 150 °De."
    },
    {
      question: "What is 100 °C in Delisle?",
      answer: "100 °C is equal to 0 °De."
    },
    {
      question: "Why does 0 °De mean boiling water?",
      answer: "Delisle designed his thermometer to measure mercury contraction as it cooled down from boiling water, setting zero at the boiling point."
    }
  ],
  relatedList: [
    { label: "Celsius to Fahrenheit", from: "celsius", to: "fahrenheit" },
    { label: "Celsius to Rømer", from: "celsius", to: "romer" },
    { label: "Celsius to Réaumur", from: "celsius", to: "reaumur" }
  ],
  references: [
    "Russian Academy of Sciences Archives - St. Petersburg Observatory Logs",
    "Delisle, J.-N. - Mémoires pour servir à l'histoire et au progrès de l'Astronomie (1738)"
  ]
};
