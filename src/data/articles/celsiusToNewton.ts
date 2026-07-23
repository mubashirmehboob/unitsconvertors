import { CustomArticleData } from "./types";

export const celsiusToNewton: CustomArticleData = {
  fromUnitId: "celsius",
  toUnitId: "newton",
  seoTitle: "Celsius to Newton Converter (°C to °N)",
  metaDescription: "Convert Celsius to Newton temperature scale (°C to °N). Learn Isaac Newton's historical thermometric formula, calculation steps, and examples.",
  h1: "Celsius to Newton Converter",
  introduction: [
    "The Celsius scale and the Newton temperature scale are both centigrade-like thermometric systems that choose the freezing point of water as their zero reference point (0 °C = 0 °N). However, while Celsius defines the boiling point of water as 100 °C, Isaac Newton defined boiling water at 33 °N.",
    "Because both scales share a common zero point, converting Celsius to Newton requires scaling by a simple factor of 33/100 (0.33). This guide outlines the conversion formula, calculation examples, and historical background behind Sir Isaac Newton's early thermometer."
  ],
  quickAnswer: {
    text: "To convert Celsius to Newton, multiply the Celsius temperature by 0.33 (or 33/100). For example, 100 °C equals 33 °N.",
    formulaDisplay: "°N = °C × 0.33",
    subtext: "Freezing water is 0 °N and boiling water is 33 °N on Newton's scale."
  },
  aboutSourceUnit: {
    title: "Understanding the Celsius Scale (°C)",
    text: "The Celsius scale is the primary international scale for temperature measurement across modern science, meteorology, and industry, featuring 100 equal degrees between the freezing and boiling points of water."
  },
  aboutTargetUnit: {
    title: "Understanding the Newton Scale (°N)",
    text: "Devised around 1700 by Sir Isaac Newton, this scale was one of the earliest quantitative temperature scales. Newton used linseed oil in his thermometer and set 0 °N at 'heat of winter air' (freezing water) and 33 °N at boiling water. It represents an important milestone in the history of thermodynamics."
  },
  relationship: "Both scales set freezing water at 0 degrees. Since boiling water occurs at 100 °C and 33 °N, 1 degree Newton is equivalent to approximately 3.03 degrees Celsius (100 / 33).",
  relationshipTitle: "Celsius vs Newton Scale Comparison",
  relationshipItems: [
    { label: "Water Freezing Point", value: "0 °C = 0 °N" },
    { label: "Room Temperature", value: "20 °C = 6.6 °N" },
    { label: "Human Body Temp", value: "37 °C = 12.21 °N" },
    { label: "Water Boiling Point", value: "100 °C = 33 °N" }
  ],
  formula: {
    text: "Multiply the Celsius temperature by 0.33 (or 33/100) to find the equivalent temperature in degrees Newton.",
    math: "°N = °C × 33 / 100",
    subtext: "To reverse the conversion (°N to °C), multiply by 100/33 (approximately 3.0303)."
  },
  formulaTitle: "Celsius to Newton Formula",
  practicalTip: {
    title: "Fractional Calculation Shortcut",
    text: "Multiply the Celsius value by 33 and divide by 100. For example, 50 °C × 33 = 1650; 1650 / 100 = 16.5 °N."
  },
  expertNote: {
    title: "Newton's Qualitative Benchmarks",
    text: "In his 1701 publication 'Scala graduum caloris', Newton defined other intermediate benchmarks such as 12 °N for 'heat of human blood' and 24 °N for 'melting red lead'."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Room Temperature (20 °C)",
        subtitle: "Convert standard ambient room temperature of 20 °C into degrees Newton.",
        steps: [
          "Start with the Celsius value: 20 °C.",
          "Multiply by 33: 20 × 33 = 660.",
          "Divide by 100: 660 / 100 = 6.6.",
          "Result: 20 °C is equal to 6.6 °N."
        ]
      },
      {
        title: "Example 2: Boiling Water (100 °C)",
        subtitle: "Convert the boiling point of water into degrees Newton.",
        steps: [
          "Start with 100 °C.",
          "Apply formula: 100 × (33 / 100) = 33.",
          "Result: 100 °C equals 33 °N."
        ]
      }
    ]
  },
  table: {
    title: "Celsius to Newton Reference Table",
    headers: ["Celsius (°C)", "Newton (°N)", "Historical Reference"],
    rows: [
      { fromVal: "-10 °C", toVal: "-3.3 °N", extra: "Freezing winter day" },
      { fromVal: "0 °C", toVal: "0 °N", extra: "Freezing point of pure water" },
      { fromVal: "10 °C", toVal: "3.3 °N", extra: "Cool spring air" },
      { fromVal: "20 °C", toVal: "6.6 °N", extra: "Standard room temperature" },
      { fromVal: "30 °C", toVal: "9.9 °N", extra: "Warm summer day" },
      { fromVal: "36.36 °C", toVal: "12 °N", extra: "Newton's human blood heat benchmark" },
      { fromVal: "50 °C", toVal: "16.5 °N", extra: "Hot water bath" },
      { fromVal: "100 °C", toVal: "33 °N", extra: "Boiling point of water" }
    ]
  },
  applications: {
    title: "Historical & Educational Context",
    items: [
      {
        title: "History of Science Research",
        text: "Studying Isaac Newton's original thermodynamic papers and early 18th-century scientific correspondence requires converting Newton scale values to modern Celsius degrees."
      },
      {
        title: "Physics & History Curricula",
        text: "Educational courses on thermometry use Newton's scale to illustrate how early scientists established fixed calibration points."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing the Newton unit of force (N) with the Newton unit of temperature (°N).",
      "Dividing by 33 instead of multiplying by 0.33 when converting from Celsius.",
      "Assuming Newton degree intervals are smaller than Celsius degrees—in fact, 1 °N is more than 3 times larger than 1 °C."
    ]
  },
  faqs: [
    {
      question: "How do you convert Celsius to Newton?",
      answer: "Multiply the Celsius temperature by 33 and divide by 100 (or multiply by 0.33)."
    },
    {
      question: "What is 0 °C in Newton?",
      answer: "0 °C is equal to 0 °N."
    },
    {
      question: "What is 100 °C in Newton?",
      answer: "100 °C is equal to 33 °N."
    },
    {
      question: "Who invented the Newton temperature scale?",
      answer: "Sir Isaac Newton formulated the scale around 1700 using linseed oil thermometry."
    },
    {
      question: "Is Newton temperature the same as Newtons of force?",
      answer: "No, the Newton temperature scale (°N) measures thermal state, whereas the Newton (N) is the SI unit of force."
    }
  ],
  relatedList: [
    { label: "Celsius to Fahrenheit", from: "celsius", to: "fahrenheit" },
    { label: "Celsius to Réaumur", from: "celsius", to: "reaumur" },
    { label: "Celsius to Rømer", from: "celsius", to: "romer" }
  ],
  references: [
    "Newton, Isaac - Scala graduum caloris (Philosophical Transactions, 1701)",
    "History of Early Thermometry - Royal Society Archives"
  ]
};
