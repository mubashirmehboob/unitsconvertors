import { CustomArticleData } from "./types";

export const reaumurToKelvin: CustomArticleData = {
  fromUnitId: "reaumur",
  toUnitId: "kelvin",
  seoTitle: "Réaumur to Kelvin (Re to K) Temperature Converter",
  metaDescription: "Convert Réaumur to Kelvin (°Ré to K) accurately. Learn the exact formula K = (°Ré × 1.25) + 273.15, zero-point offset steps, historical thermometry, and tables.",
  h1: "Réaumur to Kelvin Converter",
  introduction: [
    "Converting temperature from the historic Réaumur scale to thermodynamic Kelvin connects 18th-century European thermometry with the modern International System of Units (SI). Proposed in 1730 by French naturalist René Antoine Ferchault de Réaumur, the Réaumur scale was widely used across continental Europe, Russia, and European cheese manufacturing before metric standardization.",
    "Because the Réaumur scale divides the freezing-to-boiling span of water into 80 degrees (0 °Ré to 80 °Ré) while Kelvin spans 100 kelvins between the same physical milestones (273.15 K to 373.15 K), each Réaumur degree equals exactly 1.25 kelvins (5/4). Combining this scaling factor with the absolute zero offset yields the exact conversion formula: <strong>K = (°Ré × 1.25) + 273.15</strong>. This comprehensive guide covers historical context, worked step-by-step examples, formulas, and conversion tables."
  ],
  quickAnswer: {
    text: "To convert Réaumur to Kelvin, multiply the temperature in Réaumur by 1.25 (or 5/4) and then add 273.15. For example, 0 °Ré equals 273.15 K, and 80 °Ré equals 373.15 K.",
    formulaDisplay: "K = (°Ré × 1.25) + 273.15",
    subtext: "Combines the 5/4 degree scaling ratio (100 / 80) with the absolute zero thermodynamic baseline shift (273.15 K)."
  },
  aboutSourceUnit: {
    title: "Understanding the Réaumur Scale (°Ré)",
    text: "The Réaumur scale (°Ré or °Re) is an 18th-century temperature scale calibrated by René Antoine Ferchault de Réaumur using an alcohol thermometer. Réaumur calibrated 0 °Ré at the freezing point of water and 80 °Ré at the boiling point of water under atmospheric pressure, chosen because his alcohol mixture expanded by 8% (80 parts per thousand) between ice melt and water boil. It was the standard thermometer scale in France, Germany, and Russia for over a century."
  },
  aboutTargetUnit: {
    title: "Understanding the Kelvin Scale (K)",
    text: "The kelvin (symbol: K, never °K) is the SI base unit of thermodynamic temperature. Defined since 2019 by fixing the Boltzmann constant (k = 1.380649 × 10⁻²³ J/K), the scale begins at absolute zero (0 K), the theoretical point where microscopic thermal energy reaches its quantum mechanical minimum."
  },
  relationship: "Pure water freezes at 0 °Ré and 273.15 K. Pure water boils at 80 °Ré and 373.15 K. Because 80 Réaumur degrees cover the same temperature interval as 100 kelvins, 1 °Ré = 100 / 80 K = 1.25 K (5/4 K). To shift the starting zero from water's freezing point to absolute zero, add 273.15 after multiplying by 1.25.",
  relationshipTitle: "Degree Interval and Baseline Comparison",
  relationshipItems: [
    { label: "0 °Ré", value: "273.15 K (Water freezing point at 1 atm)" },
    { label: "16 °Ré", value: "293.15 K (Standard room temperature 20 °C)" },
    { label: "29.6 °Ré", value: "310.15 K (Normal human body temperature 37 °C)" },
    { label: "80 °Ré", value: "373.15 K (Water boiling point at 1 atm)" },
    { label: "-218.52 °Ré", value: "0 K (Absolute zero)" }
  ],
  formula: {
    text: "Multiply the temperature in degrees Réaumur by 1.25 (or 5/4), and then add 273.15 to obtain the temperature in kelvins.",
    math: "K = (°Ré × 1.25) + 273.15",
    subtext: "To convert kelvins back into degrees Réaumur, subtract 273.15 first, then divide by 1.25 (or multiply by 0.8): °Ré = (K - 273.15) × 0.8."
  },
  formulaTitle: "Réaumur to Kelvin Formula",
  practicalTip: {
    title: "Two-Step Calculation Rule",
    text: "If converting manually without a calculator, multiply by 5, divide by 4, and add 273.15. For 20 °Ré: 20 × 5 = 100; 100 / 4 = 25; 25 + 273.15 = 298.15 K."
  },
  expertNote: {
    title: "Historical Industrial Legacy",
    text: "While obsolete in general science, the Réaumur scale persisted well into the late 20th century in traditional European Alpine cheese production (such as Parmigiano-Reggiano and Swiss Gruyère) and Bavarian brewing, where milk coagulating vats were monitored using copper Réaumur thermometers."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Water Freezing Point (0 °Ré)",
        subtitle: "Convert the freezing point of water from Réaumur to Kelvin.",
        steps: [
          "Identify temperature: 0 °Ré.",
          "Apply formula: K = (0 × 1.25) + 273.15.",
          "Calculate: 0 + 273.15 = 273.15 K.",
          "Result: 0 °Ré equals exactly 273.15 K."
        ]
      },
      {
        title: "Example 2: Traditional Cheese Curdling Vat (32 °Ré)",
        subtitle: "Convert a curd-cooking temperature of 32 °Ré into thermodynamic kelvins.",
        steps: [
          "Identify temperature: 32 °Ré.",
          "Multiply by 1.25: 32 × 1.25 = 40 (equivalent to 40 °C).",
          "Add 273.15: 40 + 273.15 = 313.15 K.",
          "Result: 32 °Ré equals exactly 313.15 K."
        ]
      },
      {
        title: "Example 3: Water Boiling Point (80 °Ré)",
        subtitle: "Convert the boiling point of pure water to Kelvin.",
        steps: [
          "Identify temperature: 80 °Ré.",
          "Multiply: 80 × 1.25 = 100.",
          "Add 273.15: 100 + 273.15 = 373.15 K.",
          "Result: 80 °Ré equals exactly 373.15 K."
        ]
      }
    ]
  },
  table: {
    title: "Réaumur to Kelvin Conversion Table",
    headers: ["Réaumur (°Ré)", "Kelvin (K)", "Physical Context"],
    rows: [
      { fromVal: "-218.52 °Ré", toVal: "0.00 K", extra: "Absolute zero (theoretical minimum)" },
      { fromVal: "-100.00 °Ré", toVal: "148.15 K", extra: "Cryogenic regime (-125 °C)" },
      { fromVal: "-40.00 °Ré", toVal: "223.15 K", extra: "Deep winter freeze (-50 °C)" },
      { fromVal: "-16.00 °Ré", toVal: "253.15 K", extra: "Commercial freezer temperature (-20 °C)" },
      { fromVal: "0.00 °Ré", toVal: "273.15 K", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "10.00 °Ré", toVal: "285.65 K", extra: "Cool spring cellar temperature (12.5 °C)" },
      { fromVal: "16.00 °Ré", toVal: "293.15 K", extra: "Standard room temperature (20 °C / 68 °F)" },
      { fromVal: "20.00 °Ré", toVal: "298.15 K", extra: "Comfortable warm room (25 °C / 77 °F)" },
      { fromVal: "29.60 °Ré", toVal: "310.15 K", extra: "Normal human core body temperature (37 °C)" },
      { fromVal: "40.00 °Ré", toVal: "323.15 K", extra: "Warm bath / hot summer desert (50 °C)" },
      { fromVal: "60.00 °Ré", toVal: "348.15 K", extra: "Pasteurization heating temperature (75 °C)" },
      { fromVal: "80.00 °Ré", toVal: "373.15 K", extra: "Boiling point of pure water at sea level" }
    ]
  },
  applications: {
    title: "Practical Applications of Réaumur to Kelvin Conversions",
    items: [
      {
        title: "Historical Science & Meteorological Archives",
        text: "Climate historians and meteorologists convert 18th- and 19th-century weather logs from Paris, Berlin, and Saint Petersburg from Réaumur into Kelvin to calibrate historical global warming baseline models."
      },
      {
        title: "Traditional European Dairy & Brewing Records",
        text: "Food science researchers analyzing historic cheese-making protocols and brewing manuscripts convert vat cooking temperatures from °Ré into SI kelvins to study enzymatic protein denaturation."
      },
      {
        title: "Antique Scientific Instrument Calibration",
        text: "Museum conservators and antiquarian restorers calibrate vintage brass Réaumur thermometers against modern digital laboratory temperature probes using exact Kelvin offsets."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Writing '°K' instead of 'K'; international standards discarded the degree symbol for Kelvin in 1967.",
      "Adding 273.15 before multiplying by 1.25; order of operations requires multiplying the Réaumur value by 1.25 first, then adding 273.15.",
      "Confusing Réaumur (°Ré, 0 to 80 span) with Rømer (°Rø, 7.5 to 60 span) or Rankine (°R, absolute Fahrenheit scale)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Réaumur to Kelvin?",
      answer: "Multiply the temperature in Réaumur by 1.25 and add 273.15: K = (°Ré × 1.25) + 273.15."
    },
    {
      question: "What is 0 °Ré in Kelvin?",
      answer: "0 °Ré is the freezing point of water, which equals exactly 273.15 K."
    },
    {
      question: "What is 80 °Ré in Kelvin?",
      answer: "80 °Ré is the boiling point of water at 1 atm, which equals exactly 373.15 K."
    },
    {
      question: "Why does the Réaumur scale have 80 degrees instead of 100?",
      answer: "René Antoine de Réaumur calibrated his thermometer using diluted alcohol that expanded by exactly 80 parts per thousand (8%) between the freezing and boiling points of pure water."
    },
    {
      question: "What is room temperature (20 °C) in Réaumur and Kelvin?",
      answer: "A standard room temperature of 20 °C corresponds to 16 °Ré (20 × 0.8) and 293.15 K (20 + 273.15)."
    },
    {
      question: "What is absolute zero on the Réaumur scale?",
      answer: "Absolute zero (0 K) equals -218.52 °Ré, calculated as -273.15 / 1.25."
    },
    {
      question: "How do you convert Kelvin back to Réaumur?",
      answer: "Subtract 273.15 from the Kelvin temperature and multiply by 0.8 (or 4/5): °Ré = (K - 273.15) × 0.8."
    },
    {
      question: "Is Réaumur still used anywhere today?",
      answer: "While replaced internationally by Celsius and Kelvin, traditional cheese makers in northern Italy (for Parmigiano-Reggiano) and Switzerland still occasionally use vintage copper Réaumur thermometers."
    }
  ],
  relatedList: [
    { label: "Kelvin to Réaumur", from: "kelvin", to: "reaumur" },
    { label: "Réaumur to Celsius", from: "reaumur", to: "celsius" },
    { label: "Réaumur to Fahrenheit", from: "reaumur", to: "fahrenheit" }
  ],
  references: [
    "BIPM - The International System of Units (SI): Base Unit of Thermodynamic Temperature",
    "René-Antoine Ferchault de Réaumur - Règle pour dresser des thermomètres (1730)",
    "NIST Special Publication 811: Temperature Scale Conversions"
  ]
};
