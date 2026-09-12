import { CustomArticleData } from "./types";

export const reaumurToFahrenheit: CustomArticleData = {
  fromUnitId: "reaumur",
  toUnitId: "fahrenheit",
  seoTitle: "Réaumur to Fahrenheit Converter (°Ré to °F) - UnitsConvertors",
  metaDescription: "Convert Réaumur to Fahrenheit (°Ré to °F) accurately. Master the (°Ré × 2.25) + 32 formula, European dairy science, worked examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/reaumur-to-fahrenheit",
  h1: "Réaumur to Fahrenheit Converter",
  introduction: [
    "Converting temperature from Réaumur to Fahrenheit bridges 18th-century European thermometry with the modern American temperature system. While the Réaumur scale was once the standard temperature measurement across continental Europe—and remains in active use among traditional European cheesemakers—the Fahrenheit scale serves as the everyday and industrial standard across the United States.",
    "The two scales differ in both degree size and zero reference point. The Réaumur scale places zero at the freezing point of pure water (0 °Ré) and boiling at 80 °Ré. In contrast, the Fahrenheit scale defines the freezing point of water as 32 °F and boiling as 212 °F, spanning 180 degrees over the identical thermal interval. Because 80 degrees Réaumur equals 180 degrees Fahrenheit, each degree Réaumur equals exactly 2.25 degrees Fahrenheit (180 ÷ 80 = 2.25 or 9/4). To convert Réaumur to Fahrenheit, multiply the Réaumur reading by 2.25 and add 32.",
    "This technical guide explains the mathematical relationship connecting both scales, provides step-by-step practical examples for food production and historical archives, and features a detailed reference table."
  ],
  quickAnswer: {
    text: "To convert Réaumur to Fahrenheit, multiply the temperature in Réaumur by 2.25 (or 9/4) and add 32. For example, 16 °Ré converts to 68 °F (standard room temperature), and 80 °Ré converts to 212 °F (water boiling).",
    formulaDisplay: "°F = (°Ré × 2.25) + 32",
    subtext: "0 °Ré = 32 °F (Water Freezing) | 80 °Ré = 212 °F (Water Boiling) | 1 °Ré = 2.25 °F"
  },
  aboutSourceUnit: {
    title: "Understanding the Réaumur Scale (°Ré)",
    text: "Invented in 1730 by French natural philosopher René Antoine Ferchault de Réaumur, this scale was calibrated using an alcohol-water mixture designed to expand by 80 parts per thousand between the freezing and boiling points of pure water. It was the predominant temperature scale in France, Germany, Russia, and Central Europe through the 18th and 19th centuries, and remains respected today in specialized European artisan cheesemaking."
  },
  aboutTargetUnit: {
    title: "Understanding the Fahrenheit Scale (°F)",
    text: "Developed in 1724 by physicist Daniel Gabriel Fahrenheit, the Fahrenheit scale introduced precision mercury thermometry to modern science. It sets the freezing point of pure water at 32 °F and the boiling point at 212 °F under standard atmospheric pressure, dividing the thermal span into exactly 180 degrees. It is the primary official temperature standard in the United States and several Caribbean nations."
  },
  relationship: "Water freezes at 0 °Ré (32 °F) and boils at 80 °Ré (212 °F). Over this span, there are 80 degrees Réaumur and 180 degrees Fahrenheit. Consequently, 1 degree Réaumur is 2.25 times larger than 1 degree Fahrenheit (9/4 °F), requiring a scaling multiplier of 2.25 plus an offset of 32.",
  relationshipTitle: "Réaumur to Fahrenheit Key Benchmarks",
  relationshipItems: [
    { label: "Absolute Zero", value: "-218.52 °Ré = -459.67 °F" },
    { label: "Deep Freezer Temperature", value: "-16.00 °Ré = -4.00 °F" },
    { label: "Cross-Scale Parity Point", value: "-25.60 °Ré = -25.60 °F" },
    { label: "Pure Water Freezing Point", value: "0.00 °Ré = 32.00 °F" },
    { label: "Standard Room Temperature", value: "16.00 °Ré = 68.00 °F" },
    { label: "Standard Laboratory Ambient (25 °C)", value: "20.00 °Ré = 77.00 °F" },
    { label: "Average Human Body Temperature", value: "29.60 °Ré = 98.60 °F" },
    { label: "Pure Water Boiling Point (1 atm)", value: "80.00 °Ré = 212.00 °F" }
  ],
  formula: {
    text: "Multiply the temperature in Réaumur by 2.25 (or multiply by 9 and divide by 4), then add the freezing offset of 32.",
    math: "T_{(^\\circ\\text{F})} = \\left(T_{(^\\circ\\text{Ré})} \\times 2.25\\right) + 32 = \\left(T_{(^\\circ\\text{Ré})} \\times \\frac{9}{4}\\right) + 32",
    subtext: "To convert in reverse (°F to °Ré): Subtract 32 from °F, then divide by 2.25 (or multiply by 4/9)."
  },
  formulaTitle: "Réaumur to Fahrenheit Conversion Formula",
  practicalTip: {
    title: "Double-and-Quarter Shortcut",
    text: "To approximate mentally: Double the Réaumur number, add one-quarter of the original number, and add 32. For example, for 16 °Ré: (16 × 2) + 4 + 32 = 32 + 4 + 32 = 68 °F."
  },
  expertNote: {
    title: "Importing Traditional European Dairy Practices to the US",
    text: "American artisan cheese producers who study traditional European curd manufacturing techniques (such as Gruyère, Emmental, and Parmigiano-Reggiano) often consult historic Swiss and Italian operational manuals written in Réaumur. Converting these records into Fahrenheit allows US cheesemakers to calibrate modern digital vat sensors and comply with USDA and FDA dairy pasteurization guidelines."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Traditional Milk Vat Temperature",
        subtitle: "An Italian dairy production specification requires warming milk to 28.00 °Ré for starter culture inoculation. Find the equivalent Fahrenheit temperature.",
        steps: [
          "State starting Réaumur temperature: 28.00 °Ré.",
          "Multiply by 2.25: 28.00 × 2.25 = 63.00.",
          "Add 32: 63.00 + 32 = 95.00 °F.",
          "Result: 28.00 °Ré equals exactly 95.00 °F (35.00 °C)."
        ]
      },
      {
        title: "Example 2: Historical Weather Journal Entry",
        subtitle: "A historical researcher translating an 18th-century French meteorological log finds an outdoor winter recording of -8.00 °Ré. Convert this reading to Fahrenheit.",
        steps: [
          "State the value: -8.00 °Ré.",
          "Multiply by 2.25: -8.00 × 2.25 = -18.00.",
          "Add 32: -18.00 + 32 = 14.00 °F.",
          "Result: -8.00 °Ré corresponds to 14.00 °F (-10.00 °C)."
        ]
      },
      {
        title: "Example 3: Scalding Cheese Curd",
        subtitle: "A hard cheese recipe directs heating whey and curd to 44.00 °Ré. Convert this cooking temperature to Fahrenheit.",
        steps: [
          "State the temperature: 44.00 °Ré.",
          "Multiply by 2.25: 44.00 × 2.25 = 99.00.",
          "Add 32: 99.00 + 32 = 131.00 °F.",
          "Result: 44.00 °Ré corresponds to exactly 131.00 °F (55.00 °C)."
        ]
      }
    ]
  },
  table: {
    title: "Réaumur to Fahrenheit Reference Table",
    headers: ["Réaumur (°Ré)", "Fahrenheit (°F)", "Celsius (°C)", "Rankine (°R)", "Physical Benchmark"],
    rows: [
      { fromVal: "-218.52 °Ré", toVal: "-459.67 °F", extra: "-273.15 °C", extra2: "0.00 °R", extra3: "Absolute zero (theoretical lower limit)" },
      { fromVal: "-40.00 °Ré", toVal: "-58.00 °F", extra: "-50.00 °C", extra2: "401.67 °R", extra3: "Extreme Siberian freeze" },
      { fromVal: "-25.60 °Ré", toVal: "-25.60 °F", extra: "-32.00 °C", extra2: "434.07 °R", extra3: "Intersection parity point of °Ré and °F" },
      { fromVal: "-16.00 °Ré", toVal: "-4.00 °F", extra: "-20.00 °C", extra2: "455.67 °R", extra3: "Commercial deep freezer temperature" },
      { fromVal: "0.00 °Ré", toVal: "32.00 °F", extra: "0.00 °C", extra2: "491.67 °R", extra3: "Freezing point of pure water" },
      { fromVal: "8.00 °Ré", toVal: "50.00 °F", extra: "10.00 °C", extra2: "509.67 °R", extra3: "Cool cellar storage" },
      { fromVal: "16.00 °Ré", toVal: "68.00 °F", extra: "20.00 °C", extra2: "527.67 °R", extra3: "Standard indoor room temperature" },
      { fromVal: "20.00 °Ré", toVal: "77.00 °F", extra: "25.00 °C", extra2: "536.67 °R", extra3: "Standard laboratory ambient temperature" },
      { fromVal: "28.00 °Ré", toVal: "95.00 °F", extra: "35.00 °C", extra2: "554.67 °R", extra3: "Cheese vat starter temperature" },
      { fromVal: "29.60 °Ré", toVal: "98.60 °F", extra: "37.00 °C", extra2: "558.27 °R", extra3: "Normal human core body temperature" },
      { fromVal: "40.00 °Ré", toVal: "122.00 °F", extra: "50.00 °C", extra2: "581.67 °R", extra3: "Hot water bath delivery" },
      { fromVal: "44.00 °Ré", toVal: "131.00 °F", extra: "55.00 °C", extra2: "590.67 °R", extra3: "Curd cooking temperature (Parmigiano)" },
      { fromVal: "60.00 °Ré", toVal: "167.00 °F", extra: "75.00 °C", extra2: "626.67 °R", extra3: "Gentle milk pasteurization" },
      { fromVal: "80.00 °Ré", toVal: "212.00 °F", extra: "100.00 °C", extra2: "671.67 °R", extra3: "Boiling point of pure water (1 atm)" },
      { fromVal: "100.00 °Ré", toVal: "257.00 °F", extra: "125.00 °C", extra2: "716.67 °R", extra3: "Pressure cooking / autoclaving" }
    ]
  },
  applications: {
    title: "Practical & Historical Applications of °Ré to °F",
    items: [
      {
        title: "Artisan Dairy Manufacturing in the US",
        text: "Specialty American creamery operators recreating authentic alpine cheeses (such as Appenzeller or Gruyère) translate historical recipes calibrated in Réaumur to Fahrenheit for local regulatory inspections."
      },
      {
        title: "Historical Meteorological Translation",
        text: "US climate historians digitizing early colonial European scientific journals and Russian-American fur trade observation logs translate historical Réaumur records into Fahrenheit."
      },
      {
        title: "Confectionery & Sugar Boiling Archives",
        text: "Classic 19th-century French culinary and confectionery guides often measured sugar stages (soft ball, hard crack) in degrees Réaumur, which modern pastry chefs convert to Fahrenheit candy thermometer marks."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Adding 32 before multiplying by 2.25: Always multiply the Réaumur value by 2.25 first, then add 32. Adding 32 first alters the scale proportion and produces incorrect temperatures.",
      "Using 1.8 instead of 2.25: The factor 1.8 is used to convert Celsius to Fahrenheit. For Réaumur, which has 80 degrees between freezing and boiling (180 ÷ 80), the correct factor is 2.25.",
      "Confusing Réaumur with Rømer: Réaumur (°Ré) sets water boiling at 80 degrees, while Rømer (°Rø) sets water boiling at 60 degrees with freezing at 7.5 degrees.",
      "Applying the +32 offset to temperature intervals (ΔT): When converting a temperature change, only multiply by 2.25: Δ°F = Δ°Ré × 2.25."
    ]
  },
  faqs: [
    {
      question: "How do you convert Réaumur to Fahrenheit?",
      answer: "Multiply the Réaumur temperature by 2.25 and add 32: °F = (°Ré × 2.25) + 32."
    },
    {
      question: "What is 0 degrees Réaumur in Fahrenheit?",
      answer: "0 °Ré equals exactly 32.00 °F, the freezing point of pure water."
    },
    {
      question: "What is 80 degrees Réaumur in Fahrenheit?",
      answer: "80 °Ré equals exactly 212.00 °F, the boiling point of pure water under standard atmospheric pressure."
    },
    {
      question: "Why does 1 degree Réaumur equal 2.25 degrees Fahrenheit?",
      answer: "Between the freezing and boiling points of water, there are 80 degrees on the Réaumur scale and 180 degrees on the Fahrenheit scale. The ratio 180 ÷ 80 simplifies to 2.25 (or 9/4)."
    },
    {
      question: "What is room temperature (16 °Ré) in Fahrenheit?",
      answer: "16 × 2.25 = 36; 36 + 32 = 68.00 °F."
    },
    {
      question: "At what temperature are Réaumur and Fahrenheit equal?",
      answer: "Réaumur and Fahrenheit are equal at -25.60 °Ré and -25.60 °F."
    },
    {
      question: "What is human body temperature in Réaumur?",
      answer: "Normal human body temperature (98.60 °F) equals 29.60 °Ré."
    },
    {
      question: "What is 40 degrees Réaumur in Fahrenheit?",
      answer: "40 × 2.25 = 90; 90 + 32 = 122.00 °F."
    },
    {
      question: "What is absolute zero in Réaumur?",
      answer: "Absolute zero (-459.67 °F) equals -218.52 °Ré."
    },
    {
      question: "How do you convert a temperature change from Réaumur to Fahrenheit?",
      answer: "To convert a temperature interval (ΔT), multiply by 2.25 directly without adding 32: Δ°F = Δ°Ré × 2.25."
    }
  ],
  relatedList: [
    { label: "Fahrenheit to Réaumur", from: "fahrenheit", to: "reaumur" },
    { label: "Réaumur to Celsius", from: "reaumur", to: "celsius" },
    { label: "Réaumur to Kelvin", from: "reaumur", to: "kelvin" },
    { label: "Réaumur to Rankine", from: "reaumur", to: "rankine" },
    { label: "Celsius to Fahrenheit", from: "celsius", to: "fahrenheit" }
  ],
  references: [
    "Encyclopædia Britannica — René Antoine Ferchault de Réaumur and Thermometry",
    "History of Early Modern Physical Science Instruments (Oxford University Press)",
    "NIST Guide for the Use of the International System of Units (SI)"
  ]
};
