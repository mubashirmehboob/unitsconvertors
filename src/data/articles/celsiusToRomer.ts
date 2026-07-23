import { CustomArticleData } from "./types";

export const celsiusToRomer: CustomArticleData = {
  fromUnitId: "celsius",
  toUnitId: "romer",
  seoTitle: "Celsius to Rømer Converter (°C to °Rø)",
  metaDescription: "Convert Celsius to Rømer (°C to °Rø) accurately. Learn Ole Rømer's historical thermometric formula, calculation steps, and examples.",
  h1: "Celsius to Rømer Converter",
  introduction: [
    "The Celsius scale and the Rømer scale are historically connected thermometric systems. Invented in 1701 by Danish astronomer Ole Christensen Rømer, the Rømer scale is historically celebrated as one of the first calibrated temperature scales to establish two fixed reference points.",
    "Because Rømer set 7.5 °Rø at the freezing point of water (0 °C) and 60 °Rø at the boiling point of water (100 °C), converting Celsius to Rømer requires both multiplying by a scaling ratio of 21/40 (0.525) and adding an offset of 7.5. This guide details the formula, calculation steps, and historical context."
  ],
  quickAnswer: {
    text: "To convert Celsius to Rømer, multiply the temperature in Celsius by 0.525 (21/40) and add 7.5. For example, 0 °C converts to 7.5 °Rø and 100 °C converts to 60 °Rø.",
    formulaDisplay: "°Rø = (°C × 0.525) + 7.5",
    subtext: "Freezing water sits at 7.5 °Rø, while boiling water is 60 °Rø."
  },
  aboutSourceUnit: {
    title: "Understanding the Celsius Scale (°C)",
    text: "The Celsius scale is the standard metric temperature scale used around the globe, defining 0 °C as water freezing and 100 °C as water boiling under 1 atmosphere of pressure."
  },
  aboutTargetUnit: {
    title: "Understanding the Rømer Scale (°Rø)",
    text: "Proposed in 1701 by Ole Rømer, this scale originally set zero at the freezing point of a salt brine mixture. Rømer noticed that water froze at 7.5 degrees on his scale and boiled at 60 degrees. Daniel Gabriel Fahrenheit later visited Rømer and adapted his scale idea into what became the Fahrenheit scale."
  },
  relationship: "Between water freezing (0 °C) and boiling (100 °C), Celsius spans 100 degrees whereas Rømer spans 52.5 degrees (from 7.5 °Rø to 60 °Rø). Thus, 1 degree Celsius equals 0.525 degrees Rømer, offset by 7.5.",
  relationshipTitle: "Celsius vs Rømer Thermal Comparison",
  relationshipItems: [
    { label: "Water Freezing Point", value: "0 °C = 7.5 °Rø" },
    { label: "Room Temperature", value: "20 °C = 18 °Rø" },
    { label: "Body Temperature", value: "37 °C = 26.925 °Rø" },
    { label: "Water Boiling Point", value: "100 °C = 60 °Rø" }
  ],
  formula: {
    text: "Multiply the Celsius temperature by 0.525 (or 21/40), then add 7.5 to adjust for Rømer's freezing baseline.",
    math: "°Rø = (°C × 0.525) + 7.5",
    subtext: "To convert in reverse (°Rø to °C), subtract 7.5 and divide by 0.525."
  },
  formulaTitle: "Celsius to Rømer Formula",
  practicalTip: {
    title: "Exact Mental Calculation for 20 °C",
    text: "At 20 °C (standard room temp), 20 × 0.525 = 10.5. Adding 7.5 gives an exact whole number: 18 °Rø."
  },
  expertNote: {
    title: "Influence on Fahrenheit",
    text: "When Fahrenheit visited Rømer in Copenhagen in 1708, he adopted Rømer's method of using fixed calibration points, but multiplied Rømer's numbers by 4 to avoid fractional degrees, eventually refining it into the modern Fahrenheit scale."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Room Temperature (20 °C)",
        subtitle: "Convert standard indoor room temperature of 20 °C into degrees Rømer.",
        steps: [
          "Start with the Celsius value: 20 °C.",
          "Multiply by 0.525: 20 × 0.525 = 10.5.",
          "Add 7.5: 10.5 + 7.5 = 18.",
          "Result: 20 °C is equal to 18 °Rø."
        ]
      },
      {
        title: "Example 2: Body Temperature (37 °C)",
        subtitle: "Convert human body temperature of 37 °C into degrees Rømer.",
        steps: [
          "Start with 37 °C.",
          "Multiply by 0.525: 37 × 0.525 = 19.425.",
          "Add 7.5: 19.425 + 7.5 = 26.925.",
          "Result: 37 °C equals 26.925 °Rø."
        ]
      }
    ]
  },
  table: {
    title: "Celsius to Rømer Quick Reference Table",
    headers: ["Celsius (°C)", "Rømer (°Rø)", "Thermal Benchmark"],
    rows: [
      { fromVal: "-14.29 °C", toVal: "0 °Rø", extra: "Rømer's zero point (freezing salt brine)" },
      { fromVal: "0 °C", toVal: "7.5 °Rø", extra: "Freezing point of pure water" },
      { fromVal: "10 °C", toVal: "12.75 °Rø", extra: "Cool spring morning" },
      { fromVal: "20 °C", toVal: "18 °Rø", extra: "Standard room temperature" },
      { fromVal: "25 °C", toVal: "20.625 °Rø", extra: "Warm indoor temperature" },
      { fromVal: "30 °C", toVal: "23.25 °Rø", extra: "Hot summer day" },
      { fromVal: "37 °C", toVal: "26.925 °Rø", extra: "Human body temperature" },
      { fromVal: "100 °C", toVal: "60 °Rø", extra: "Boiling point of water at 1 atm" }
    ]
  },
  applications: {
    title: "Historical Context & Applications",
    items: [
      {
        title: "Danish Astronomical & Historical Records",
        text: "Archivists studying early 18th-century Scandinavian scientific logs convert Rømer readings into modern Celsius."
      },
      {
        title: "History of Metrology & Thermometry",
        text: "Studying Rømer's pioneering work illuminates the evolution from arbitrary qualitative temperature descriptions to modern scientific thermometry."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Forgetting the 7.5-degree offset: Freezing water is 7.5 °Rø, not 0 °Rø.",
      "Confusing Rømer (°Rø) with Réaumur (°Ré) or Rankine (°R)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Celsius to Rømer?",
      answer: "Multiply the Celsius value by 0.525 and then add 7.5."
    },
    {
      question: "What is 0 °C in Rømer?",
      answer: "0 °C is equal to 7.5 °Rø."
    },
    {
      question: "What is 100 °C in Rømer?",
      answer: "100 °C is equal to 60 °Rø."
    },
    {
      question: "Who invented the Rømer temperature scale?",
      answer: "Danish astronomer Ole Christensen Rømer created the scale in 1701."
    }
  ],
  relatedList: [
    { label: "Celsius to Fahrenheit", from: "celsius", to: "fahrenheit" },
    { label: "Celsius to Réaumur", from: "celsius", to: "reaumur" },
    { label: "Celsius to Delisle", from: "celsius", to: "delisle" }
  ],
  references: [
    "Meyer, K. - Ole Rømer's Thermometer (Copenhagen, 1910)",
    "Danish Royal Academy of Sciences Archives"
  ]
};
