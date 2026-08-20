import { CustomArticleData } from "./types";

export const kelvinToReaumur: CustomArticleData = {
  fromUnitId: "kelvin",
  toUnitId: "reaumur",
  seoTitle: "Kelvin to Réaumur Converter (K to °Ré)",
  metaDescription: "Convert Kelvin to Réaumur (K to °Ré) with exact scientific formulas. Explore thermodynamic derivations, calculation steps, and historical reference tables.",
  h1: "Kelvin to Réaumur Converter",
  introduction: [
    "Converting Kelvin to Réaumur (K to °Ré) connects modern thermodynamic physics with one of the most prominent historic temperature scales of continental Europe. While Kelvin is the SI base unit used worldwide for absolute thermal energy, cryogenic research, and astrophysical modeling, the Réaumur scale was the standard across France, Germany, Russia, and Central Europe during the eighteenth and nineteenth centuries.",
    "Because the Celsius and Kelvin scales share the same 100-degree interval between the freezing and boiling points of water, while the Réaumur scale divides that exact range into 80 degrees, the scaling ratio between Kelvin and Réaumur is exactly 80/100 (which simplifies to 4/5 or 0.8). Converting from Kelvin to Réaumur requires subtracting the 273.15 freezing offset and multiplying by 0.8. This guide provides the complete mathematical framework, worked examples, and comparative reference tables."
  ],
  quickAnswer: {
    text: "To convert Kelvin to Réaumur, subtract 273.15 from the Kelvin temperature and multiply the result by 0.8 (or 4/5). For example, 300 K converts to 21.48 °Ré.",
    formulaDisplay: "°Ré = (K - 273.15) × 0.8 = (K - 273.15) × (4 / 5)",
    subtext: "Absolute zero is 0 K (-218.52 °Ré), water freezes at 273.15 K (0 °Ré), and water boils at 373.15 K (80 °Ré)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kelvin Scale (K)",
    text: "Introduced in 1848 by William Thomson (Lord Kelvin), the Kelvin scale is the base unit of thermodynamic temperature in the International System of Units (SI). Written as 'K' without a degree sign, it begins at absolute zero (0 K), where classical thermal kinetic motion ceases. Defined via the fundamental Boltzmann constant, Kelvin is essential in physics, astronomy, and chemistry."
  },
  aboutTargetUnit: {
    title: "Understanding the Réaumur Scale (°Ré)",
    text: "Devised in 1730 by French naturalist René Antoine Ferchault de Réaumur, the Réaumur scale was calibrated using an alcohol-water mixture that expanded by 80 parts per thousand between freezing and boiling. The scale defines 0 °Ré as the freezing point of pure water and 80 °Ré as its boiling point under standard atmospheric pressure."
  },
  relationship: "The Kelvin scale spans 100 kelvins between the freezing (273.15 K) and boiling (373.15 K) points of water, while the Réaumur scale spans 80 degrees across the identical physical interval. The ratio of degree sizes is 80/100 = 4/5 = 0.8. To convert from Kelvin, the 273.15 offset is subtracted to reach the Celsius freezing baseline, which is then multiplied by 0.8.",
  relationshipTitle: "Kelvin vs Réaumur Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "0 K = -218.52 °Ré" },
    { label: "Liquid Nitrogen Boiling Point", value: "77.36 K = -156.63 °Ré" },
    { label: "Water Freezing Point", value: "273.15 K = 0.00 °Ré" },
    { label: "Standard Room Temp (20 °C)", value: "293.15 K = 16.00 °Ré" },
    { label: "Normal Body Temperature", value: "310.15 K = 29.60 °Ré" },
    { label: "Water Boiling Point", value: "373.15 K = 80.00 °Ré" }
  ],
  formula: {
    text: "Subtract 273.15 from the Kelvin temperature to convert to Celsius, then multiply by 4/5 (0.8).",
    math: "°Ré = (K - 273.15) × 0.8",
    subtext: "Equivalent fractional formula: °Ré = (K - 273.15) × (4 / 5)"
  },
  formulaTitle: "Kelvin to Réaumur Conversion Formula",
  practicalTip: {
    title: "Mental Calculation Shortcut",
    text: "To approximate °Ré from Kelvin in your head: subtract 273 to get Celsius, multiply that number by 4, and divide by 5 (or multiply by 8 and move the decimal left one spot). For example: 298 K - 273 = 25 °C; 25 × 0.8 = 20 °Ré."
  },
  expertNote: {
    title: "Absolute Zero on the Réaumur Scale",
    text: "Absolute zero (0 K) translates to exactly -218.52 °Ré [calculated as -273.15 × 0.8 = -218.52]. No physically realizable temperature can drop below -218.52 °Ré."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Standard Room Temperature (293.15 K)",
        subtitle: "Convert 293.15 K (20 °C) into degrees Réaumur.",
        steps: [
          "Start with the Kelvin temperature: 293.15 K.",
          "Subtract 273.15: 293.15 - 273.15 = 20.00.",
          "Multiply by 0.8: 20.00 × 0.8 = 16.00.",
          "Result: 293.15 K corresponds exactly to 16.00 °Ré."
        ]
      },
      {
        title: "Example 2: Warm Laboratory Ambient (298.15 K)",
        subtitle: "Convert the standard IUPAC reference temperature of 298.15 K to Réaumur.",
        steps: [
          "Identify the Kelvin temperature: 298.15 K.",
          "Subtract 273.15: 298.15 - 273.15 = 25.00.",
          "Multiply by 4/5: 25.00 × (4 / 5) = 100 / 5 = 20.00.",
          "Result: 298.15 K is exactly 20.00 °Ré."
        ]
      },
      {
        title: "Example 3: Boiling Point of Water (373.15 K)",
        subtitle: "Verify the boiling point of pure water in degrees Réaumur.",
        steps: [
          "Take the temperature: 373.15 K.",
          "Subtract 273.15: 373.15 - 273.15 = 100.00.",
          "Multiply by 0.8: 100.00 × 0.8 = 80.00.",
          "Result: 373.15 K equals exactly 80.00 °Ré."
        ]
      }
    ]
  },
  table: {
    title: "Kelvin to Réaumur Scientific Reference Table",
    headers: ["Kelvin (K)", "Réaumur (°Ré)", "Thermodynamic Benchmark"],
    rows: [
      { fromVal: "0.00 K", toVal: "-218.52 °Ré", extra: "Absolute zero (complete thermodynamic minimum)" },
      { fromVal: "77.36 K", toVal: "-156.63 °Ré", extra: "Liquid nitrogen boiling point" },
      { fromVal: "194.65 K", toVal: "-62.80 °Ré", extra: "Dry ice sublimation point (-78.5 °C)" },
      { fromVal: "233.15 K", toVal: "-32.00 °Ré", extra: "Mercury freezing point (-40 °C / -40 °F)" },
      { fromVal: "273.15 K", toVal: "0.00 °Ré", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "283.15 K", toVal: "8.00 °Ré", extra: "Cool spring temperature (10 °C)" },
      { fromVal: "293.15 K", toVal: "16.00 °Ré", extra: "Standard room temperature (20 °C)" },
      { fromVal: "298.15 K", toVal: "20.00 °Ré", extra: "Standard laboratory reference state (25 °C)" },
      { fromVal: "303.15 K", toVal: "24.00 °Ré", extra: "Warm summer day (30 °C)" },
      { fromVal: "310.15 K", toVal: "29.60 °Ré", extra: "Normal human core body temperature (37 °C)" },
      { fromVal: "323.15 K", toVal: "40.00 °Ré", extra: "Hot desert ambient temperature (50 °C)" },
      { fromVal: "373.15 K", toVal: "80.00 °Ré", extra: "Boiling point of pure water at sea level" }
    ]
  },
  applications: {
    title: "Scientific, Historical & Industrial Applications",
    items: [
      {
        title: "Historical Climatology & European Meteorological Records",
        text: "Nineteenth-century scientific expeditions and European meteorological stations recorded atmospheric observations in Réaumur, which modern climate scientists convert to Kelvin for thermodynamic computer modeling."
      },
      {
        title: "Traditional Cheesemaking & Culinary Metrology",
        text: "Artisanal dairy producers in Alpine regions still consult historic cheese-making guides specifying milk coagulation and curd cooking temperatures in °Ré, translating modern sensor outputs from Kelvin."
      },
      {
        title: "Thermodynamic Physics History & Education",
        text: "Physics courses studying the historical transition from empiric thermometric scales to thermodynamic absolute temperature use the K to °Ré conversion to illustrate scale origins."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying before subtracting 273.15: You must subtract 273.15 first; multiplying K directly by 0.8 fails because the zero point of Réaumur is at water's freezing point, not absolute zero.",
      "Inverting the conversion ratio: Multiplying by 1.25 (5/4) instead of 0.8 (4/5) is used when converting from Réaumur to Celsius/Kelvin.",
      "Confusing Réaumur (°Ré) with Rankine (°R): Rankine starts at 0 for absolute zero, while Réaumur starts at 0 for water's freezing point."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Kelvin to Réaumur?",
      answer: "The formula is °Ré = (K - 273.15) × 0.8 (or °Ré = (K - 273.15) × 4/5)."
    },
    {
      question: "What is 0 Kelvin in Réaumur?",
      answer: "0 K is equal to -218.52 °Ré, corresponding to absolute zero."
    },
    {
      question: "What is 273.15 K in Réaumur?",
      answer: "273.15 K is exactly 0.00 °Ré, the freezing point of pure water."
    },
    {
      question: "What is 300 K in Réaumur?",
      answer: "300 K equals 21.48 °Ré [(300 - 273.15) × 0.8 = 26.85 × 0.8 = 21.48]."
    },
    {
      question: "What is 373.15 K in Réaumur?",
      answer: "373.15 K is exactly 80.00 °Ré, the boiling point of pure water at 1 atm."
    },
    {
      question: "What is body temperature (310.15 K) in Réaumur?",
      answer: "Normal human body temperature of 310.15 K (37 °C) converts to 29.60 °Ré [(310.15 - 273.15) × 0.8 = 29.60]."
    },
    {
      question: "Why is 1 degree Réaumur equal to 1.25 Kelvin?",
      answer: "Because the freezing-to-boiling span of water is 100 K and 80 °Ré, each degree Réaumur is 100/80 = 1.25 times larger than a Kelvin."
    },
    {
      question: "Is the degree symbol used on Kelvin and Réaumur?",
      answer: "Kelvin is written without a degree symbol ('K'), whereas Réaumur uses the degree symbol ('°Ré' or '°Re')."
    }
  ],
  relatedList: [
    { label: "Réaumur to Kelvin", from: "reaumur", to: "kelvin" },
    { label: "Kelvin to Celsius", from: "kelvin", to: "celsius" },
    { label: "Kelvin to Fahrenheit", from: "kelvin", to: "fahrenheit" },
    { label: "Celsius to Réaumur", from: "celsius", to: "reaumur" }
  ],
  references: [
    "BIPM SI Brochure - The International System of Units (9th Edition)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "Encyclopaedia Britannica - René Antoine Ferchault de Réaumur"
  ]
};
