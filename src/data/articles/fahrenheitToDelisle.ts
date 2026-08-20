import { CustomArticleData } from "./types";

export const fahrenheitToDelisle: CustomArticleData = {
  fromUnitId: "fahrenheit",
  toUnitId: "delisle",
  seoTitle: "Fahrenheit to Delisle Converter (°F to °De)",
  metaDescription: "Convert Fahrenheit to Delisle (°F to °De) with accurate thermal formulas. Discover the inverted Russian temperature scale, calculation steps, and tables.",
  h1: "Fahrenheit to Delisle Converter",
  introduction: [
    "Converting Fahrenheit to Delisle (°F to °De) provides a fascinating look into thermometric history and the unique concept of inverted temperature scales. Invented in 1732 by French astronomer Joseph-Nicolas Delisle, the Delisle scale became the preeminent scientific and meteorological standard throughout the Russian Empire for more than a century.",
    "Unlike nearly all modern temperature scales, the Delisle scale runs in reverse: numbers increase as the environment gets colder and decrease as temperatures rise. Pure water boils at 0 °De and freezes at 150 °De (a 150-degree interval), compared to 212 °F and 32 °F on the Fahrenheit scale (a 180-degree interval). Converting between the two requires subtracting the Fahrenheit temperature from 212 and scaling by a factor of 5/6 (approximately 0.83333). This guide explains the exact inverted mathematics, worked examples, reference charts, and historical background."
  ],
  quickAnswer: {
    text: "To convert Fahrenheit to Delisle, subtract the Fahrenheit temperature from 212 and multiply the result by 5/6 (or 0.83333). For example, 68 °F converts to 120 °De.",
    formulaDisplay: "°De = (212 - °F) × (5 / 6)",
    subtext: "On the inverted Delisle scale, pure water boils at 0 °De (212 °F) and freezes at 150 °De (32 °F)."
  },
  aboutSourceUnit: {
    title: "Understanding the Fahrenheit Scale (°F)",
    text: "Introduced in 1724 by Daniel Gabriel Fahrenheit, the Fahrenheit scale was the first widely adopted mercury-based measurement system. Standardized around water freezing at 32 °F, body temperature at 98.6 °F, and water boiling at 212 °F, Fahrenheit is the primary scale used for domestic meteorology, cooking, and consumer engineering in the United States."
  },
  aboutTargetUnit: {
    title: "Understanding the Delisle Scale (°De)",
    text: "Devised in 1732 by Joseph-Nicolas Delisle upon his appointment by Tsar Peter the Great to found the Saint Petersburg Academy of Sciences, the Delisle scale used mercury contraction rather than expansion. Initially calibrated from boiling water (0 °De) down to room temperature, it was standardized in 1738 by Josias Weitbrecht, who fixed the freezing point of water at exactly 150 °De."
  },
  relationship: "The Fahrenheit scale has 180 degrees between the freezing and boiling points of pure water (212 - 32 = 180), while the Delisle scale spans 150 degrees across the identical physical interval. Because Delisle is an inverted scale where 0 °De represents boiling water (212 °F), the conversion formula calculates the distance downward from 212 °F and multiplies by the ratio 150/180 (which simplifies to 5/6). Higher Delisle values indicate colder temperatures.",
  relationshipTitle: "Fahrenheit vs Delisle Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "-459.67 °F = 559.73 °De" },
    { label: "Water Freezing Point", value: "32 °F = 150.00 °De" },
    { label: "Room Temperature (68 °F)", value: "68 °F = 120.00 °De" },
    { label: "Normal Body Temperature", value: "98.6 °F = 94.50 °De" },
    { label: "Water Boiling Point", value: "212 °F = 0.00 °De" }
  ],
  formula: {
    text: "Subtract the Fahrenheit temperature from 212 to measure the thermal distance from the boiling point, then multiply by 5/6.",
    math: "°De = (212 - °F) × (5 / 6)",
    subtext: "Expressed in terms of Celsius intermediate: °De = (100 - °C) × 1.5, where °C = (°F - 32) / 1.8"
  },
  formulaTitle: "Fahrenheit to Delisle Conversion Formula",
  practicalTip: {
    title: "Understanding the Inverted Direction",
    text: "Remember that higher Delisle numbers mean colder temperatures. If your result increases, the temperature is dropping. For quick mental estimates, take (212 - °F), subtract one-sixth (approx. 16.7%), and you obtain °De."
  },
  expertNote: {
    title: "Scale Crossing Point",
    text: "Fahrenheit and Delisle scales intersect at approximately 96.36° (meaning 96.36 °F = 96.36 °De), which is close to human body temperature, derived from F = (212 - F) × (5/6) → 11F = 1060 → F = 96.3636..."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Standard Room Temperature (68 °F)",
        subtitle: "Convert an ambient living room reading of 68 °F to degrees Delisle.",
        steps: [
          "Start with the Fahrenheit temperature: 68 °F.",
          "Subtract from the boiling reference (212): 212 - 68 = 144.",
          "Multiply by 5/6: 144 × (5 / 6) = 720 / 6 = 120.",
          "Result: 68 °F equals exactly 120 °De."
        ]
      },
      {
        title: "Example 2: Warm Summer Afternoon (86 °F)",
        subtitle: "Convert a summer weather reading of 86 °F into degrees Delisle.",
        steps: [
          "Identify the starting temperature: 86 °F.",
          "Subtract from 212: 212 - 86 = 126.",
          "Multiply by 5/6: 126 × (5 / 6) = 630 / 6 = 105.",
          "Result: 86 °F corresponds exactly to 105 °De."
        ]
      },
      {
        title: "Example 3: Freezing Water (32 °F)",
        subtitle: "Verify the freezing point of water in degrees Delisle.",
        steps: [
          "Take the freezing temperature: 32 °F.",
          "Subtract from 212: 212 - 32 = 180.",
          "Multiply by 5/6: 180 × 5 / 6 = 900 / 6 = 150.",
          "Result: 32 °F is exactly 150 °De."
        ]
      }
    ]
  },
  table: {
    title: "Fahrenheit to Delisle Reference Table",
    headers: ["Fahrenheit (°F)", "Delisle (°De)", "Thermal Benchmark"],
    rows: [
      { fromVal: "-459.67 °F", toVal: "559.73 °De", extra: "Absolute zero (coldest possible state)" },
      { fromVal: "-40.00 °F", toVal: "210.00 °De", extra: "Mercury freezing point (-40 °C)" },
      { fromVal: "0.00 °F", toVal: "176.67 °De", extra: "Fahrenheit original brine zero" },
      { fromVal: "32.00 °F", toVal: "150.00 °De", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "50.00 °F", toVal: "135.00 °De", extra: "Cool spring morning (10 °C)" },
      { fromVal: "68.00 °F", toVal: "120.00 °De", extra: "Standard room temperature (20 °C)" },
      { fromVal: "77.00 °F", toVal: "112.50 °De", extra: "Comfortable room temperature (25 °C)" },
      { fromVal: "86.00 °F", toVal: "105.00 °De", extra: "Warm summer day (30 °C)" },
      { fromVal: "96.36 °F", toVal: "96.36 °De", extra: "Mathematical intersection point of °F and °De" },
      { fromVal: "98.60 °F", toVal: "94.50 °De", extra: "Normal human internal body temperature" },
      { fromVal: "140.00 °F", toVal: "60.00 °De", extra: "Hot water scalding threshold (60 °C)" },
      { fromVal: "212.00 °F", toVal: "0.00 °De", extra: "Boiling point of pure water at sea level" }
    ]
  },
  applications: {
    title: "Historical & Climatological Applications of °F to °De",
    items: [
      {
        title: "Russian Imperial Scientific & Climatological Archives",
        text: "Nineteenth-century meteorological logs kept across the Russian Empire, Siberia, and early Arctic expeditions recorded daily temperatures in Delisle, requiring conversion when digitized into modern databases."
      },
      {
        title: "Early Modern Chemistry & Metallurgy Manuscripts",
        text: "Historical research papers by Russian chemist Mikhail Lomonosov and European contemporaries in St. Petersburg referenced Delisle degrees to track reaction temperatures."
      },
      {
        title: "Thermodynamic Pedagogy & Scale Inversion Studies",
        text: "University physics lectures use the Delisle scale as an instructive example of inverted affine coordinate systems, demonstrating how mathematical sign conventions function in thermometry."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Subtracting 32 instead of from 212: Using (°F - 32) × 5/6 fails because Delisle is an inverted scale anchored at the boiling point (212 °F = 0 °De).",
      "Assuming larger numbers mean hotter temperatures: In Delisle, larger positive numbers indicate colder temperatures.",
      "Misinterpreting negative Delisle values: A negative Delisle value (e.g., -15 °De) represents a temperature hotter than boiling water (> 212 °F)."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Fahrenheit to Delisle?",
      answer: "The formula is °De = (212 - °F) × (5 / 6)."
    },
    {
      question: "What is 32 °F in Delisle?",
      answer: "32 °F is exactly 150 °De, which is the freezing point of pure water on the Delisle scale."
    },
    {
      question: "What is 212 °F in Delisle?",
      answer: "212 °F is exactly 0 °De, representing the boiling point of pure water."
    },
    {
      question: "What is 68 °F in Delisle?",
      answer: "68 °F equals exactly 120 °De [(212 - 68) × 5/6 = 144 × 5/6 = 120]."
    },
    {
      question: "What is human body temperature (98.6 °F) in Delisle?",
      answer: "98.6 °F converts to 94.50 °De [(212 - 98.6) × 5/6 = 113.4 × 5/6 = 94.50]."
    },
    {
      question: "Why is the Delisle scale inverted?",
      answer: "Joseph-Nicolas Delisle designed his thermometer to track how much mercury contracted upon cooling from boiling water, setting the boiling point as zero and counting degrees of contraction downwards."
    },
    {
      question: "Where was the Delisle scale primarily used?",
      answer: "The Delisle scale was the official thermometric standard throughout the Russian Empire and Northern Europe for over 100 years, from the 1730s until the mid-nineteenth century."
    },
    {
      question: "At what temperature do Fahrenheit and Delisle equal each other?",
      answer: "Fahrenheit and Delisle intersect at approximately 96.36° (96.36 °F = 96.36 °De)."
    }
  ],
  relatedList: [
    { label: "Delisle to Fahrenheit", from: "delisle", to: "fahrenheit" },
    { label: "Fahrenheit to Celsius", from: "fahrenheit", to: "celsius" },
    { label: "Fahrenheit to Réaumur", from: "fahrenheit", to: "reaumur" },
    { label: "Celsius to Delisle", from: "celsius", to: "delisle" }
  ],
  references: [
    "Weitbrecht, Josias (1738) - 'De Thermometris', Commentarii Academiae Scientiarum Imperialis Petropolitanae",
    "BIPM - Evolution of Thermometric Standards",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units"
  ]
};
