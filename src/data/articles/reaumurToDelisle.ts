import { CustomArticleData } from "./types";

export const reaumurToDelisle: CustomArticleData = {
  fromUnitId: "reaumur",
  toUnitId: "delisle",
  seoTitle: "Réaumur to Delisle (Re to De) Temperature Converter",
  metaDescription: "Convert Réaumur to Delisle (°Ré to °De) with exact precision. Learn the inverted formula °De = (80 - °Ré) × 1.875, Imperial Russian thermometry, and tables.",
  h1: "Réaumur to Delisle Converter",
  introduction: [
    "Converting temperature from the Réaumur scale to the Delisle scale explores one of the most distinctive thermometric relationships in scientific history. While the Réaumur scale (°Ré)—created by French naturalist René Antoine Ferchault de Réaumur in 1730—runs in the conventional direction from freezing (0 °Ré) to boiling (80 °Ré), the Delisle scale (°De)—invented in 1732 by French astronomer Joseph-Nicolas Delisle in Saint Petersburg—is an <strong>inverted temperature scale</strong> where higher numbers indicate colder temperatures.",
    "On the Delisle scale, pure water boils at 0 °De and freezes at 150 °De. Because the 80-degree interval of Réaumur corresponds to a 150-degree interval on Delisle, each Réaumur degree represents 150 / 80 = 1.875 (or 15/8) Delisle degrees. Because Delisle counts downwards from boiling, the exact conversion formula is: <strong>°De = (80 - °Ré) × 1.875</strong>. This guide details the historical context in Imperial Russia, step-by-step calculations, worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert Réaumur to Delisle, subtract the Réaumur temperature from 80 and multiply the result by 1.875 (or 15/8). For example, 80 °Ré equals 0 °De (boiling), and 0 °Ré equals 150 °De (freezing).",
    formulaDisplay: "°De = (80 - °Ré) × 1.875 = (80 - °Ré) × (15 / 8)",
    subtext: "An inverted scale conversion where higher Delisle numbers indicate colder temperatures."
  },
  aboutSourceUnit: {
    title: "Understanding the Réaumur Scale (°Ré)",
    text: "The Réaumur scale (°Ré or °Re) was created in 1730 by René Antoine Ferchault de Réaumur. With 0 °Ré set at the freezing point of water and 80 °Ré at the boiling point of water, it was widely used across continental Europe, Russia, and the food industry for over a century."
  },
  aboutTargetUnit: {
    title: "Understanding the Delisle Scale (°De)",
    text: "Created in 1732 by French astronomer Joseph-Nicolas Delisle while serving Tsar Peter the Great at the Saint Petersburg Academy of Sciences, the Delisle scale (°De) used mercury contraction from the boiling point of water. Delisle set 0 °De at boiling and 150 °De at the freezing point of water. It was the official thermometric standard across the Russian Empire for nearly a century."
  },
  relationship: "Water boils at 80 °Ré and 0 °De. Water freezes at 0 °Ré and 150 °De. The physical span between freezing and boiling covers 80 degrees on the Réaumur scale and 150 degrees on the Delisle scale. Because Delisle counts downward from boiling, subtracting the Réaumur reading from 80 and multiplying by 150 / 80 = 1.875 gives the exact Delisle equivalent.",
  relationshipTitle: "Inverted Scale Comparison",
  relationshipItems: [
    { label: "80 °Ré", value: "0 °De (Boiling point of pure water at 1 atm)" },
    { label: "60 °Ré", value: "37.5 °De (Pasteurization temperature 75 °C)" },
    { label: "29.6 °Ré", value: "94.5 °De (Normal human body temperature 37 °C)" },
    { label: "16 °Ré", value: "120.0 °De (Standard room temperature 20 °C)" },
    { label: "0 °Ré", value: "150.0 °De (Freezing point of pure water at 1 atm)" },
    { label: "-218.52 °Ré", value: "559.725 °De (Absolute zero 0 K)" }
  ],
  formula: {
    text: "Subtract the temperature in degrees Réaumur from 80 and multiply the difference by 1.875 (or 15/8) to find the temperature in degrees Delisle.",
    math: "°De = (80 - °Ré) × 1.875",
    subtext: "To convert degrees Delisle back to Réaumur, divide the Delisle reading by 1.875 and subtract that value from 80: °Ré = 80 - (°De / 1.875)."
  },
  formulaTitle: "Réaumur to Delisle Formula",
  practicalTip: {
    title: "Fractional Arithmetic Rule",
    text: "To convert manually, subtract the Réaumur reading from 80, multiply the result by 15, and divide by 8. For 16 °Ré: 80 - 16 = 64; 64 × 15 = 960; 960 / 8 = 120 °De."
  },
  expertNote: {
    title: "Imperial Russian Thermometry",
    text: "Delisle thermometers were praised by Mikhail Lomonosov and remained standard throughout the Russian Empire from 1735 to roughly 1830. When reviewing 18th-century Siberian climate diaries, meteorological researchers frequently translate Delisle readings into Réaumur and Celsius."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Water Boiling Point (80 °Ré)",
        subtitle: "Convert the boiling point of pure water from Réaumur to Delisle.",
        steps: [
          "Identify temperature: 80 °Ré.",
          "Apply formula: °De = (80 - 80) × 1.875.",
          "Calculate: 0 × 1.875 = 0 °De.",
          "Result: 80 °Ré equals exactly 0 °De."
        ]
      },
      {
        title: "Example 2: Water Freezing Point (0 °Ré)",
        subtitle: "Convert the freezing point of water to Delisle.",
        steps: [
          "Identify temperature: 0 °Ré.",
          "Apply formula: °De = (80 - 0) × 1.875.",
          "Calculate: 80 × 1.875 = 150 °De.",
          "Result: 0 °Ré equals exactly 150 °De."
        ]
      },
      {
        title: "Example 3: Standard Room Temperature (16 °Ré)",
        subtitle: "Convert 16 °Ré (20 °C) into degrees Delisle.",
        steps: [
          "Identify temperature: 16 °Ré.",
          "Subtract from 80: 80 - 16 = 64.",
          "Multiply by 1.875: 64 × 1.875 = 120 °De.",
          "Result: 16 °Ré equals exactly 120 °De."
        ]
      }
    ]
  },
  table: {
    title: "Réaumur to Delisle Conversion Table",
    headers: ["Réaumur (°Ré)", "Delisle (°De)", "Physical Milestone"],
    rows: [
      { fromVal: "80.00 °Ré", toVal: "0.00 °De", extra: "Boiling point of pure water at sea level" },
      { fromVal: "60.00 °Ré", toVal: "37.50 °De", extra: "High-temperature pasteurization (75 °C)" },
      { fromVal: "40.00 °Ré", toVal: "75.00 °De", extra: "Hot bath / desert temperature (50 °C)" },
      { fromVal: "29.60 °Ré", toVal: "94.50 °De", extra: "Normal human core body temperature (37 °C)" },
      { fromVal: "20.00 °Ré", toVal: "112.50 °De", extra: "Comfortable warm room (25 °C / 77 °F)" },
      { fromVal: "16.00 °Ré", toVal: "120.00 °De", extra: "Standard room temperature (20 °C / 68 °F)" },
      { fromVal: "8.00 °Ré", toVal: "135.00 °De", extra: "Chilly morning (10 °C / 50 °F)" },
      { fromVal: "0.00 °Ré", toVal: "150.00 °De", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "-16.00 °Ré", toVal: "180.00 °De", extra: "Commercial freezer storage (-20 °C)" },
      { fromVal: "-40.00 °Ré", toVal: "225.00 °De", extra: "Harsh Siberian winter cold (-50 °C)" },
      { fromVal: "-80.00 °Ré", toVal: "300.00 °De", extra: "Extreme cryogenic cold (-100 °C)" },
      { fromVal: "-218.52 °Ré", toVal: "559.73 °De", extra: "Absolute zero (0 K / -273.15 °C)" }
    ]
  },
  applications: {
    title: "Practical Applications of Réaumur to Delisle Conversions",
    items: [
      {
        title: "Russian Meteorological & Naval History",
        text: "Historians studying 18th-century naval expedition logs from the Bering Sea and Siberian meteorological posts translate historical Delisle measurements into Réaumur and Celsius."
      },
      {
        title: "History of Enlightenment Thermometer Standardization",
        text: "Scientific historians examine the transition in Saint Petersburg and Moscow from French-influenced Delisle instruments to European Réaumur and Celsius standards during the 19th century."
      },
      {
        title: "Inverted Scale Mathematical Modeling",
        text: "Educators utilize the Delisle-to-Réaumur conversion to illustrate negative temperature slopes and linear inversions in physical science curricula."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Forgetting that the Delisle scale is inverted: as temperatures get colder, Delisle numbers increase.",
      "Multiplying °Ré directly by 1.875 without first subtracting from 80.",
      "Confusing Delisle (°De) with Delisle-Celsius or Rømer (°Rø), which starts at 7.5 rather than 150."
    ]
  },
  faqs: [
    {
      question: "How do you convert Réaumur to Delisle?",
      answer: "Subtract the Réaumur value from 80 and multiply the result by 1.875 (or 15/8): °De = (80 - °Ré) × 1.875."
    },
    {
      question: "Why is the Delisle scale inverted?",
      answer: "Joseph-Nicolas Delisle calibrated his thermometer by filling it with mercury at the boiling point of water (0 °De) and tracking its contraction as it cooled. Therefore, colder temperatures produce greater mercury contraction and higher degree numbers."
    },
    {
      question: "What is 0 °Ré in degrees Delisle?",
      answer: "0 °Ré is the freezing point of water, which corresponds to exactly 150.0 °De ((80 - 0) × 1.875)."
    },
    {
      question: "What is 80 °Ré in degrees Delisle?",
      answer: "80 °Ré is the boiling point of water, which corresponds to exactly 0.0 °De ((80 - 80) × 1.875)."
    },
    {
      question: "What is room temperature (16 °Ré) in degrees Delisle?",
      answer: "16 °Ré (20 °C) equals exactly 120.0 °De ((80 - 16) × 1.875 = 64 × 1.875 = 120)."
    },
    {
      question: "What is human body temperature (29.6 °Ré) in degrees Delisle?",
      answer: "29.6 °Ré (37 °C) equals exactly 94.5 °De ((80 - 29.6) × 1.875 = 50.4 × 1.875 = 94.5)."
    },
    {
      question: "How do you convert degrees Delisle back to Réaumur?",
      answer: "Divide the Delisle value by 1.875 and subtract that from 80: °Ré = 80 - (°De / 1.875)."
    },
    {
      question: "What is absolute zero in degrees Delisle?",
      answer: "Absolute zero (0 K / -273.15 °C / -218.52 °Ré) corresponds to approximately 559.73 °De."
    }
  ],
  relatedList: [
    { label: "Delisle to Réaumur", from: "delisle", to: "reaumur" },
    { label: "Réaumur to Celsius", from: "reaumur", to: "celsius" },
    { label: "Delisle to Celsius", from: "delisle", to: "celsius" }
  ],
  references: [
    "Joseph-Nicolas Delisle - Mémoires pour servir à l'histoire et au progrès de l'Astronomie, de la Géographie et de la Physique (1738)",
    "René-Antoine Ferchault de Réaumur - Mémoires de l'Académie Royale des Sciences (1730)",
    "W. E. Knowles Middleton - A History of the Thermometer and Its Uses in Meteorology"
  ]
};
