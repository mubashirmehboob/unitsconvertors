import { CustomArticleData } from "./types";

export const celsiusToFahrenheit: CustomArticleData = {
  fromUnitId: "celsius",
  toUnitId: "fahrenheit",
  seoTitle: "Celsius to Fahrenheit Converter (°C to °F)",
  metaDescription: "Convert Celsius to Fahrenheit (°C to °F) accurately with our conversion formula, step-by-step calculation examples, and reference temperature table.",
  h1: "Celsius to Fahrenheit Converter",
  introduction: [
    "The Celsius and Fahrenheit scales represent the two most common temperature measurement systems used worldwide. Celsius serves as the primary standard across most countries and scientific disciplines, whereas Fahrenheit remains widely utilized in the United States and select Caribbean territories.",
    "Because both scales use different starting reference points—freezing water at 0 °C versus 32 °F—and different degree increments, converting between them requires both scaling and offsetting. This guide provides the exact mathematical formula, detailed calculation steps, and a practical conversion table."
  ],
  quickAnswer: {
    text: "To convert Celsius to Fahrenheit, multiply the temperature in Celsius by 1.8 (or 9/5) and then add 32. For example, 20 °C converts to 68 °F.",
    formulaDisplay: "°F = (°C × 1.8) + 32",
    subtext: "Freezing water sits at 0 °C (32 °F), while boiling water at standard sea-level pressure occurs at 100 °C (212 °F)."
  },
  aboutSourceUnit: {
    title: "Understanding the Celsius Scale (°C)",
    text: "Devised by Swedish astronomer Anders Celsius in 1742, the Celsius scale (formerly called centigrade) is derived from the metric system and SI standards. On this scale, 0 °C marks the freezing point of pure water at 1 atm, and 100 °C represents its boiling point. It is used globally in meteorology, medicine, engineering, and everyday life."
  },
  aboutTargetUnit: {
    title: "Understanding the Fahrenheit Scale (°F)",
    text: "Proposed in 1724 by German physicist Daniel Gabriel Fahrenheit, this scale defines 32 °F as the freezing point of water and 212 °F as its boiling point at standard atmospheric pressure. The interval between freezing and boiling is divided into 180 equal degrees, making a single Fahrenheit degree 5/9 the size of a Celsius degree."
  },
  relationship: "A span of 100 degrees Celsius corresponds to a span of 180 degrees Fahrenheit, establishing a ratio of 1.8 Fahrenheit degrees per Celsius degree. In addition, the Fahrenheit scale is shifted upward by 32 degrees relative to Celsius.",
  relationshipTitle: "Celsius vs Fahrenheit Thermal Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "-273.15 °C = -459.67 °F" },
    { label: "Water Freezing Point", value: "0 °C = 32 °F" },
    { label: "Average Human Body Temp", value: "37 °C = 98.6 °F" },
    { label: "Water Boiling Point", value: "100 °C = 212 °F" }
  ],
  formula: {
    text: "Multiply the Celsius temperature by 1.8 to expand the degree scale, then add 32 to adjust for the freezing point offset.",
    math: "°F = (°C × 1.8) + 32",
    subtext: "Alternatively expressed as °F = (°C × 9/5) + 32."
  },
  formulaTitle: "Celsius to Fahrenheit Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "For a quick estimate without a calculator, double the Celsius value and add 30. For instance, 25 °C doubled is 50, plus 30 equals 80 °F (actual exact value is 77 °F)."
  },
  expertNote: {
    title: "Scale Intersection Point",
    text: "Celsius and Fahrenheit intersect at exactly -40 degrees. That is, -40 °C is identical in temperature to -40 °F."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Room Temperature (20 °C)",
        subtitle: "Convert a comfortable indoor room temperature of 20 °C to Fahrenheit.",
        steps: [
          "Start with the Celsius temperature: 20 °C.",
          "Multiply by 1.8: 20 × 1.8 = 36.",
          "Add 32 to adjust for the baseline offset: 36 + 32 = 68.",
          "Result: 20 °C is equal to 68 °F."
        ]
      },
      {
        title: "Example 2: Body Temperature (37 °C)",
        subtitle: "Convert standard human body temperature of 37 °C to Fahrenheit.",
        steps: [
          "Start with the Celsius value: 37 °C.",
          "Multiply by 1.8: 37 × 1.8 = 66.6.",
          "Add 32: 66.6 + 32 = 98.6.",
          "Result: 37 °C corresponds to 98.6 °F."
        ]
      }
    ]
  },
  table: {
    title: "Celsius to Fahrenheit Quick Reference Table",
    headers: ["Celsius (°C)", "Fahrenheit (°F)", "Thermal Benchmark"],
    rows: [
      { fromVal: "-273.15 °C", toVal: "-459.67 °F", extra: "Absolute zero" },
      { fromVal: "-40 °C", toVal: "-40 °F", extra: "Intersection point of both scales" },
      { fromVal: "-10 °C", toVal: "14 °F", extra: "Freezing cold winter day" },
      { fromVal: "0 °C", toVal: "32 °F", extra: "Freezing point of pure water" },
      { fromVal: "10 °C", toVal: "50 °F", extra: "Cool spring morning" },
      { fromVal: "20 °C", toVal: "68 °F", extra: "Standard room temperature" },
      { fromVal: "25 °C", toVal: "77 °F", extra: "Warm ambient room temperature" },
      { fromVal: "30 °C", toVal: "86 °F", extra: "Hot summer day" },
      { fromVal: "37 °C", toVal: "98.6 °F", extra: "Normal human body temperature" },
      { fromVal: "100 °C", toVal: "212 °F", extra: "Boiling point of water at sea level" }
    ]
  },
  applications: {
    title: "Practical Applications of °C to °F",
    items: [
      {
        title: "International Travel & Weather Reports",
        text: "Travelers between North America and Europe frequently convert ambient forecast temperatures between Celsius and Fahrenheit to plan daily attire."
      },
      {
        title: "Culinary Arts & Baking Recipes",
        text: "Oven settings in recipes often list temperatures in Celsius (°C) for European appliances or Fahrenheit (°F) for American ovens."
      },
      {
        title: "HVAC & Climate Control",
        text: "Thermostats and building management systems require proper scale conversion when configuring hardware imported across regions."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Forgetting the 32-degree offset: Simply multiplying by 1.8 without adding 32 yields an incorrect temperature value.",
      "Reversing the operations: Adding 32 before multiplying by 1.8 is mathematically incorrect for converting °C to °F.",
      "Confusing scale intervals with static temperatures: A temperature change of 1 °C equals a 1.8 °F change, but 1 °C static is 33.8 °F."
    ]
  },
  faqs: [
    {
      question: "How do you convert Celsius to Fahrenheit?",
      answer: "Multiply the Celsius temperature by 1.8 and then add 32 to get the equivalent Fahrenheit temperature."
    },
    {
      question: "What is 0 °C in Fahrenheit?",
      answer: "0 °C is equal to 32 °F, which is the freezing point of water."
    },
    {
      question: "What is 100 °C in Fahrenheit?",
      answer: "100 °C is equal to 212 °F, which is the boiling point of water at sea level."
    },
    {
      question: "At what temperature are Celsius and Fahrenheit equal?",
      answer: "Celsius and Fahrenheit are equal at -40 degrees (-40 °C = -40 °F)."
    },
    {
      question: "Why is 32 added when converting °C to °F?",
      answer: "The number 32 accounts for the difference between the baseline freezing points of water on the two scales (0 °C vs 32 °F)."
    },
    {
      question: "How do you convert 25 °C to Fahrenheit?",
      answer: "Multiply 25 by 1.8 to get 45, then add 32. The result is 77 °F."
    },
    {
      question: "What is normal human body temperature in °C and °F?",
      answer: "Normal human body temperature is approximately 37 °C or 98.6 °F."
    },
    {
      question: "Is 1 degree Celsius bigger than 1 degree Fahrenheit?",
      answer: "Yes, 1 degree Celsius is equal to 1.8 degrees Fahrenheit, meaning a Celsius degree represents a larger temperature increment."
    }
  ],
  relatedList: [
    { label: "Celsius to Kelvin", from: "celsius", to: "kelvin" },
    { label: "Celsius to Rankine", from: "celsius", to: "rankine" },
    { label: "Celsius to Réaumur", from: "celsius", to: "reaumur" },
    { label: "Fahrenheit to Celsius", from: "fahrenheit", to: "celsius" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - Temperature Scale Conversions",
    "International Bureau of Weights and Measures (BIPM) - The International Temperature Scale of 1990 (ITS-90)"
  ]
};
