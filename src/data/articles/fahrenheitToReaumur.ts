import { CustomArticleData } from "./types";

export const fahrenheitToReaumur: CustomArticleData = {
  fromUnitId: "fahrenheit",
  toUnitId: "reaumur",
  seoTitle: "Fahrenheit to Réaumur Converter (°F to °Ré)",
  metaDescription: "Convert Fahrenheit to Réaumur (°F to °Ré) with accurate thermal formulas. Discover step-by-step calculations, historic brewing context, and conversion tables.",
  h1: "Fahrenheit to Réaumur Converter",
  introduction: [
    "Converting Fahrenheit to Réaumur (°F to °Ré) bridges two historic temperature systems that shaped the early development of thermometry across North America and continental Europe. While Fahrenheit remains the customary standard in the United States, the Réaumur scale was once the dominant temperature measurement system across France, Germany, Russia, and Central Europe during the eighteenth and nineteenth centuries.",
    "Because the Fahrenheit scale places pure water freezing at 32 °F and boiling at 212 °F (a 180-degree span), whereas the Réaumur scale sets freezing at 0 °Ré and boiling at 80 °Ré (an 80-degree span), converting between the two requires subtracting the 32-degree Fahrenheit freezing offset and scaling by a 4/9 ratio (or dividing by 2.25). This guide outlines the exact mathematical derivation, practical examples, reference tables, and historical applications."
  ],
  quickAnswer: {
    text: "To convert Fahrenheit to Réaumur, subtract 32 from the Fahrenheit temperature and multiply the result by 4/9 (or divide by 2.25). For example, 68 °F converts to 16 °Ré.",
    formulaDisplay: "°Ré = (°F - 32) × 4/9 = (°F - 32) / 2.25",
    subtext: "Freezing water rests at 32 °F (0 °Ré), and boiling water occurs at 212 °F (80 °Ré) at standard atmospheric pressure."
  },
  aboutSourceUnit: {
    title: "Understanding the Fahrenheit Scale (°F)",
    text: "Proposed in 1724 by physicist Daniel Gabriel Fahrenheit, the Fahrenheit scale was the first standardized temperature scale to use mercury thermometers with high reproducibility. Fahrenheit defined 0 °F using an equal mixture of ice, water, and ammonium chloride salt, 32 °F as the freezing point of plain water, and 96 °F as healthy human body temperature (later refined to 98.6 °F). It remains the everyday temperature scale in the United States and several Caribbean island territories."
  },
  aboutTargetUnit: {
    title: "Understanding the Réaumur Scale (°Ré)",
    text: "Introduced in 1730 by French scientist René Antoine Ferchault de Réaumur, the Réaumur scale (also denoted as °Re or °R) was calibrated using diluted alcohol thermometers. Réaumur established that an alcohol-water mixture expanded by exactly 80 parts per thousand between the freezing and boiling points of water. Consequently, the scale sets 0 °Ré as water's freezing point and 80 °Ré as its boiling point. It was widely adopted in European cheesemaking, traditional beer brewing, and industrial distillation."
  },
  relationship: "The Fahrenheit scale has 180 degrees between the freezing and boiling points of pure water (212 - 32 = 180), while the Réaumur scale divides that identical physical span into 80 equal increments. The ratio of 80 to 180 simplifies to 4/9 (or 1/2.25). To convert from °F to °Ré, you first subtract 32 to align the freezing points at zero, and then multiply by 4/9.",
  relationshipTitle: "Fahrenheit vs Réaumur Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "-459.67 °F = -218.52 °Ré" },
    { label: "Water Freezing Point", value: "32 °F = 0 °Ré" },
    { label: "Room Temperature (68 °F)", value: "68 °F = 16 °Ré" },
    { label: "Normal Body Temperature", value: "98.6 °F = 29.60 °Ré" },
    { label: "Water Boiling Point", value: "212 °F = 80 °Ré" }
  ],
  formula: {
    text: "Subtract 32 from the Fahrenheit temperature to remove the freezing offset, then multiply the remainder by 4/9 (or divide by 2.25).",
    math: "°Ré = (°F - 32) × (4 / 9)",
    subtext: "Equivalent decimal formula: °Ré = (°F - 32) / 2.25"
  },
  formulaTitle: "Fahrenheit to Réaumur Conversion Formula",
  practicalTip: {
    title: "Mental Calculation Shortcut",
    text: "To approximate °Ré from °F quickly in your head, subtract 32 from the Fahrenheit value, divide by 2, and then subtract roughly 10% from that result. For example, 72 °F - 32 = 40; 40 / 2 = 20; 20 - 2 = 18 °Ré (exact value is 17.78 °Ré)."
  },
  expertNote: {
    title: "The -40 Degree Scale Convergence",
    text: "Unlike the Celsius-Fahrenheit crossover at -40°, Fahrenheit and Réaumur intersect at -25.6 °F, where -25.6 °F = -25.6 °Ré [derived from F = (F - 32) × 4/9 → 9F = 4F - 128 → 5F = -128 → F = -25.6]."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting Comfortable Room Temperature (68 °F)",
        subtitle: "Determine the Réaumur equivalent of a standard ambient living space at 68 °F.",
        steps: [
          "Identify the starting Fahrenheit value: 68 °F.",
          "Subtract 32 to adjust for the baseline offset: 68 - 32 = 36.",
          "Multiply by 4/9: 36 × (4 / 9) = 144 / 9 = 16.",
          "Conclude: 68 °F corresponds exactly to 16 °Ré."
        ]
      },
      {
        title: "Example 2: Traditional Brewing Mash Temperature (150 °F)",
        subtitle: "Convert a standard beer mashing temperature of 150 °F into degrees Réaumur for vintage brewery records.",
        steps: [
          "Start with the initial temperature: 150 °F.",
          "Subtract the freezing point offset: 150 - 32 = 118.",
          "Divide by 2.25 (or multiply by 4/9): 118 / 2.25 = 52.444...",
          "Result: 150 °F equals 52.44 °Ré."
        ]
      },
      {
        title: "Example 3: Hot Summer Afternoon (86 °F)",
        subtitle: "Convert a summer weather reading of 86 °F to Réaumur.",
        steps: [
          "Take the temperature reading: 86 °F.",
          "Subtract 32: 86 - 32 = 54.",
          "Multiply by 4/9: 54 × 4 / 9 = 216 / 9 = 24.",
          "Result: 86 °F equals exactly 24 °Ré."
        ]
      }
    ]
  },
  table: {
    title: "Fahrenheit to Réaumur Thermal Reference Table",
    headers: ["Fahrenheit (°F)", "Réaumur (°Ré)", "Physical Benchmark"],
    rows: [
      { fromVal: "-459.67 °F", toVal: "-218.52 °Ré", extra: "Absolute zero (thermodynamic minimum)" },
      { fromVal: "-40.00 °F", toVal: "-32.00 °Ré", extra: "Extreme polar cold (-40 °C)" },
      { fromVal: "-25.60 °F", toVal: "-25.60 °Ré", extra: "Exact mathematical intersection of °F and °Ré" },
      { fromVal: "0.00 °F", toVal: "-14.22 °Ré", extra: "Fahrenheit original brine freezing baseline" },
      { fromVal: "32.00 °F", toVal: "0.00 °Ré", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "50.00 °F", toVal: "8.00 °Ré", extra: "Crisp autumn morning" },
      { fromVal: "68.00 °F", toVal: "16.00 °Ré", extra: "Standard indoor ambient temperature" },
      { fromVal: "77.00 °F", toVal: "20.00 °Ré", extra: "Warm room temperature (25 °C)" },
      { fromVal: "86.00 °F", toVal: "24.00 °Ré", extra: "Warm summer day (30 °C)" },
      { fromVal: "98.60 °F", toVal: "29.60 °Ré", extra: "Normal human internal body temperature" },
      { fromVal: "122.00 °F", toVal: "40.00 °Ré", extra: "Very hot desert temperature (50 °C)" },
      { fromVal: "158.00 °F", toVal: "56.00 °Ré", extra: "Dairy pasteurization temperature" },
      { fromVal: "212.00 °F", toVal: "80.00 °Ré", extra: "Boiling point of pure water at sea level" }
    ]
  },
  applications: {
    title: "Historical & Contemporary Applications of °F to °Ré",
    items: [
      {
        title: "Artisanal European Cheesemaking",
        text: "Traditional cheese producers in Northern Italy (Parmigiano Reggiano) and Switzerland historically measured copper cauldron curdling temperatures in Réaumur, requiring conversion when interpreting US-sourced recipe specifications."
      },
      {
        title: "Historical Brewing & Distillation Archives",
        text: "Nineteenth-century Bavarian and Austrian beer brewing treatises recorded fermentation and wort boiling profiles in °Ré, which modern craft brewers operating US-built Fahrenheit systems frequently convert."
      },
      {
        title: "Confectionery & Sugar Refining History",
        text: "Early industrial French candy makers and sugar boilers calibrated hydrometers and thermometer columns to 80 °Ré boiling water, documenting syrup caramelization stages that historians correlate with modern °F."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Forgetting the 32-degree offset: Directly multiplying °F by 4/9 yields an erroneous value because the zero points do not coincide.",
      "Inverting the conversion factor: Multiplying by 9/4 (2.25) instead of 4/9 produces an inflated number; 9/4 is reserved for converting Réaumur to Fahrenheit.",
      "Confusing Réaumur (°Ré) with Rankine (°R): Both historical scales have used the letter 'R', but Rankine is an absolute scale starting at absolute zero (-459.67 °F), whereas Réaumur starts at water's freezing point."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Fahrenheit to Réaumur?",
      answer: "The formula is °Ré = (°F - 32) × 4/9, which can also be computed as °Ré = (°F - 32) / 2.25."
    },
    {
      question: "What is 32 °F in Réaumur?",
      answer: "32 °F is exactly 0 °Ré, corresponding to the freezing point of water."
    },
    {
      question: "What is 212 °F in Réaumur?",
      answer: "212 °F is exactly 80 °Ré, which represents the boiling point of pure water at 1 standard atmosphere."
    },
    {
      question: "What is 68 °F in Réaumur?",
      answer: "68 °F equals exactly 16 °Ré [(68 - 32) × 4/9 = 36 × 4/9 = 16]."
    },
    {
      question: "What is normal human body temperature in Réaumur?",
      answer: "Normal human body temperature (98.6 °F or 37 °C) equals 29.60 °Ré [(98.6 - 32) × 4/9 = 66.6 × 4/9 = 29.60]."
    },
    {
      question: "At what temperature are Fahrenheit and Réaumur equal?",
      answer: "Fahrenheit and Réaumur equal each other at -25.6° (so -25.6 °F = -25.6 °Ré)."
    },
    {
      question: "Why does the Réaumur scale use 80 degrees instead of 100?",
      answer: "René Antoine Ferchault de Réaumur designed his thermometer using an alcohol-water mixture that expanded by 80 parts per thousand between freezing and boiling, dividing the range into 80 equal increments."
    },
    {
      question: "Is the Réaumur scale still used today?",
      answer: "While largely replaced by Celsius in everyday life and Kelvin in science, Réaumur is still referenced in traditional European cheese manufacturing and historical brewing archives."
    }
  ],
  relatedList: [
    { label: "Réaumur to Fahrenheit", from: "reaumur", to: "fahrenheit" },
    { label: "Fahrenheit to Celsius", from: "fahrenheit", to: "celsius" },
    { label: "Fahrenheit to Kelvin", from: "fahrenheit", to: "kelvin" },
    { label: "Celsius to Réaumur", from: "celsius", to: "reaumur" }
  ],
  references: [
    "BIPM - Historical Evolution of Temperature Scales",
    "NIST Special Publication 811 - Conversion Factors for Temperature",
    "Encyclopaedia Britannica - René Antoine Ferchault de Réaumur & Thermometry"
  ]
};
