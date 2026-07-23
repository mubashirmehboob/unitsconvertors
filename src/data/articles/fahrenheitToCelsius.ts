import { CustomArticleData } from "./types";

export const fahrenheitToCelsius: CustomArticleData = {
  fromUnitId: "fahrenheit",
  toUnitId: "celsius",
  seoTitle: "Fahrenheit to Celsius Converter (°F to °C)",
  metaDescription: "Convert Fahrenheit to Celsius (°F to °C) with precision. Learn the step-by-step formula, calculation examples, quick mental estimation tricks, and temperature tables.",
  h1: "Fahrenheit to Celsius Converter",
  introduction: [
    "Converting Fahrenheit to Celsius (°F to °C) is one of the most common everyday temperature conversions. While the United States and a few territories use Fahrenheit for weather reports, cooking, and medicine, the vast majority of the world and the scientific community rely on the Celsius scale.",
    "Because the Fahrenheit scale sets water freezing at 32 °F and boiling at 212 °F (a 180-degree interval), whereas Celsius sets freezing at 0 °C and boiling at 100 °C (a 100-degree interval), converting °F to °C requires subtracting 32 and dividing by 1.8. This guide provides the formula, calculation steps, and reference tables."
  ],
  quickAnswer: {
    text: "To convert Fahrenheit to Celsius, subtract 32 from the Fahrenheit temperature and divide the result by 1.8 (or multiply by 5/9). For example, 68 °F converts to 20 °C.",
    formulaDisplay: "°C = (°F - 32) / 1.8",
    subtext: "Freezing water sits at 32 °F (0 °C), and boiling water occurs at 212 °F (100 °C)."
  },
  aboutSourceUnit: {
    title: "Understanding the Fahrenheit Scale (°F)",
    text: "Formulated in 1724 by Daniel Gabriel Fahrenheit, this scale defines 32 °F as the freezing point of water and 212 °F as its boiling point. It remains widely used in consumer applications across the United States, Liberia, and select Caribbean island nations."
  },
  aboutTargetUnit: {
    title: "Understanding the Celsius Scale (°C)",
    text: "Devised in 1742 by Anders Celsius, the Celsius scale is part of the metric system and International System of Units (SI). It anchors 0 °C to the freezing point of water and 100 °C to its boiling point under 1 standard atmosphere."
  },
  relationship: "The Fahrenheit scale has 180 degrees between freezing and boiling, whereas Celsius has 100 degrees. This makes 1 degree Celsius equal to 1.8 degrees Fahrenheit. Converting °F to °C requires removing the 32-degree offset first, then scaling by 1.8.",
  relationshipTitle: "Fahrenheit vs Celsius Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "-459.67 °F = -273.15 °C" },
    { label: "Water Freezing Point", value: "32 °F = 0 °C" },
    { label: "Normal Body Temp", value: "98.6 °F = 37 °C" },
    { label: "Water Boiling Point", value: "212 °F = 100 °C" }
  ],
  formula: {
    text: "Subtract 32 from the Fahrenheit value to adjust for the freezing offset, then divide by 1.8.",
    math: "°C = (°F - 32) / 1.8",
    subtext: "Alternatively expressed as °C = (°F - 32) × 5/9."
  },
  formulaTitle: "Fahrenheit to Celsius Formula",
  practicalTip: {
    title: "Quick Mental Estimation Trick",
    text: "For a quick mental estimate, subtract 30 from the Fahrenheit number and divide by 2. For instance, 70 °F minus 30 is 40; divided by 2 gives 20 °C (exact value is 21.11 °C)."
  },
  expertNote: {
    title: "The -40 Scale Crossing Point",
    text: "At -40 degrees, both scales read identically: -40 °F is equal to -40 °C."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Room Temperature (68 °F)",
        subtitle: "Convert a room temperature reading of 68 °F to Celsius.",
        steps: [
          "Start with the Fahrenheit value: 68 °F.",
          "Subtract 32: 68 - 32 = 36.",
          "Divide by 1.8: 36 / 1.8 = 20.",
          "Result: 68 °F is equal to 20 °C."
        ]
      },
      {
        title: "Example 2: Oven Baking Temperature (350 °F)",
        subtitle: "Convert a standard baking temperature of 350 °F to Celsius for a European recipe.",
        steps: [
          "Start with 350 °F.",
          "Subtract 32: 350 - 32 = 318.",
          "Divide by 1.8: 318 / 1.8 = 176.67.",
          "Result: 350 °F equals approximately 177 °C (or 175 °C rounded for ovens)."
        ]
      }
    ]
  },
  table: {
    title: "Fahrenheit to Celsius Quick Reference Table",
    headers: ["Fahrenheit (°F)", "Celsius (°C)", "Thermal Benchmark"],
    rows: [
      { fromVal: "-459.67 °F", toVal: "-273.15 °C", extra: "Absolute zero" },
      { fromVal: "-40 °F", toVal: "-40 °C", extra: "Intersection point of both scales" },
      { fromVal: "0 °F", toVal: "-17.78 °C", extra: "Frigid winter temperature" },
      { fromVal: "32 °F", toVal: "0 °C", extra: "Freezing point of pure water" },
      { fromVal: "50 °F", toVal: "10 °C", extra: "Cool spring morning" },
      { fromVal: "68 °F", toVal: "20 °C", extra: "Standard room temperature" },
      { fromVal: "77 °F", toVal: "25 °C", extra: "Warm indoor temperature" },
      { fromVal: "86 °F", toVal: "30 °C", extra: "Hot summer day" },
      { fromVal: "98.6 °F", toVal: "37 °C", extra: "Normal human body temperature" },
      { fromVal: "212 °F", toVal: "100 °C", extra: "Boiling point of water at sea level" },
      { fromVal: "350 °F", toVal: "176.67 °C", extra: "Standard baking temperature" },
      { fromVal: "400 °F", toVal: "204.44 °C", extra: "High roasting oven temperature" }
    ]
  },
  applications: {
    title: "Everyday & Professional Applications of °F to °C",
    items: [
      {
        title: "International Travel & Meteorology",
        text: "Travelers from the United States converting weather forecasts abroad rely on °F to °C calculations to understand local conditions."
      },
      {
        title: "International Recipes & Cooking",
        text: "American cookbook recipes listing oven temperatures in °F are translated into °C for kitchens using metric appliances."
      },
      {
        title: "Medical & Health Care",
        text: "Clinical body temperature readings taken with American Fahrenheit thermometers are converted to Celsius for standard medical reporting."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing before subtracting 32: Always subtract 32 first before dividing by 1.8.",
      "Multiplying by 1.8 instead of dividing: Multiplying by 1.8 is used when going from °C to °F, not °F to °C."
    ]
  },
  faqs: [
    {
      question: "How do you convert Fahrenheit to Celsius?",
      answer: "Subtract 32 from the Fahrenheit temperature and divide the result by 1.8."
    },
    {
      question: "What is 32 °F in Celsius?",
      answer: "32 °F is equal to 0 °C."
    },
    {
      question: "What is 212 °F in Celsius?",
      answer: "212 °F is equal to 100 °C."
    },
    {
      question: "What is 70 °F in Celsius?",
      answer: "70 °F is equal to 21.11 °C [(70 - 32) / 1.8]."
    },
    {
      question: "What is 98.6 °F in Celsius?",
      answer: "98.6 °F is equal to 37 °C, which represents normal human body temperature."
    },
    {
      question: "What is a quick way to convert °F to °C in your head?",
      answer: "Subtract 30 from the Fahrenheit temperature and divide by 2 for a rough estimate."
    }
  ],
  relatedList: [
    { label: "Celsius to Fahrenheit", from: "celsius", to: "fahrenheit" },
    { label: "Fahrenheit to Kelvin", from: "fahrenheit", to: "kelvin" },
    { label: "Fahrenheit to Rankine", from: "fahrenheit", to: "rankine" }
  ],
  references: [
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "BIPM - Thermometric Scales & Conversions"
  ]
};
