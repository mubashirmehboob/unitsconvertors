import { CustomArticleData } from "./types";

export const reaumurToCelsius: CustomArticleData = {
  fromUnitId: "reaumur",
  toUnitId: "celsius",
  seoTitle: "Réaumur to Celsius Converter (°Ré to °C) - UnitsConvertors",
  metaDescription: "Convert Réaumur to Celsius (°Ré to °C) accurately. Learn the direct 1.25x multiplication formula, European dairy science, worked examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/reaumur-to-celsius",
  h1: "Réaumur to Celsius Converter",
  introduction: [
    "Converting temperature from Réaumur to Celsius translates historical European measurements and traditional culinary data into the modern metric standard. Both scales share a common zero point at the freezing temperature of pure water (0 °Ré = 0 °C), making the conversion straightforward and mathematically elegant.",
    "The difference between the two systems lies in how they divide the temperature span between freezing and boiling water under standard atmospheric pressure. While the Réaumur scale divides this fundamental thermal interval into 80 degrees, the Celsius scale divides it into 100 degrees. Because 80 degrees Réaumur corresponds to 100 degrees Celsius, each degree Réaumur is exactly 1.25 times larger than a degree Celsius (100 ÷ 80 = 1.25 or 5/4). To convert Réaumur to Celsius, simply multiply the Réaumur reading by 1.25.",
    "This technical guide explains the historical calibration of both scales, provides step-by-step examples across dairy processing and historical meteorology, and features a detailed conversion reference table."
  ],
  quickAnswer: {
    text: "To convert Réaumur to Celsius, multiply the temperature in Réaumur by 1.25 (or 5/4). Because both scales share zero at water's freezing point, no addition or subtraction is needed. For example, 16 °Ré converts to 20 °C (room temperature), and 80 °Ré converts to 100 °C (water boiling).",
    formulaDisplay: "°C = °Ré × 1.25",
    subtext: "0 °Ré = 0 °C (Water Freezing) | 80 °Ré = 100 °C (Water Boiling) | Direct 5/4 Scaling"
  },
  aboutSourceUnit: {
    title: "Understanding the Réaumur Scale (°Ré)",
    text: "Introduced in 1730 by French natural philosopher René Antoine Ferchault de Réaumur, this scale was calibrated using an alcohol-water mixture designed to expand by 80 parts per thousand between the freezing and boiling points of pure water. Widely adopted across France, Germany, Russia, and Central Europe during the 18th and 19th centuries, it remains a traditional standard in specific European artisan industries, particularly Italian and Swiss cheesemaking."
  },
  aboutTargetUnit: {
    title: "Understanding the Celsius Scale (°C)",
    text: "Devised in 1742 by Swedish astronomer Anders Celsius and internationally standardized by the General Conference on Weights and Measures (CGPM), the Celsius scale is the primary metric temperature scale used worldwide. It defines 0 °C as the freezing point of water and 100 °C as the boiling point of water at 1 atm, directly connecting to the SI base unit kelvin via 0 °C = 273.15 K."
  },
  relationship: "Both scales anchor their zero point at the freezing point of pure water (0 °Ré = 0 °C). However, the Celsius scale divides the liquid water range into 100 increments compared to Réaumur's 80 increments. Consequently, 1 degree Réaumur equals exactly 1.25 degrees Celsius, making Réaumur degrees larger.",
  relationshipTitle: "Réaumur to Celsius Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "-218.52 °Ré = -273.15 °C" },
    { label: "Deep Freeze Temperature", value: "-16.00 °Ré = -20.00 °C" },
    { label: "Pure Water Freezing Point", value: "0.00 °Ré = 0.00 °C" },
    { label: "Standard Room Temperature", value: "16.00 °Ré = 20.00 °C" },
    { label: "Laboratory Ambient Reference (25 °C)", value: "20.00 °Ré = 25.00 °C" },
    { label: "Parmigiano Curd Cooking Target (45 °C)", value: "36.00 °Ré = 45.00 °C" },
    { label: "Average Human Body Temperature", value: "29.60 °Ré = 37.00 °C" },
    { label: "Pure Water Boiling Point (1 atm)", value: "80.00 °Ré = 100.00 °C" }
  ],
  formula: {
    text: "Multiply the temperature in Réaumur by 1.25, or equivalently multiply by 5 and divide by 4.",
    math: "T_{(^\\circ\\text{C})} = T_{(^\\circ\\text{Ré})} \\times 1.25 = T_{(^\\circ\\text{Ré})} \\times \\frac{5}{4}",
    subtext: "To convert in reverse (°C to °Ré): Multiply °C by 0.8 (or 4/5)."
  },
  formulaTitle: "Réaumur to Celsius Conversion Formula",
  practicalTip: {
    title: "Quarter-Addition Mental Trick",
    text: "To calculate mentally: take the Réaumur value and add one-quarter (25%) of itself. For example, to convert 32 °Ré: one-quarter of 32 is 8; 32 + 8 = 40 °C. For 16 °Ré: one-quarter is 4; 16 + 4 = 20 °C."
  },
  expertNote: {
    title: "Traditional European Dairy & Sugar Confectionery",
    text: "In Northern Italy, master cheese artisans crafting Parmigiano-Reggiano and Grana Padano utilize copper-encased Réaumur thermometers to monitor milk vat curdling (typically 26.5 to 28 °Ré) and curd cooking (up to 44 °Ré). Converting these targets to Celsius allows modern dairies to validate temperature compliance against international food safety standards (HACCP)."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Artisan Cheese Vat Temperature",
        subtitle: "A traditional copper cheese vat recipe in Emilia-Romagna calls for scalding curd at 44.00 °Ré. Convert this temperature to Celsius.",
        steps: [
          "State starting Réaumur temperature: 44.00 °Ré.",
          "Apply the conversion formula: °C = °Ré × 1.25.",
          "Calculate: 44.00 × 1.25 = 55.00 °C.",
          "Result: 44.00 °Ré equals exactly 55.00 °C."
        ]
      },
      {
        title: "Example 2: 19th-Century European Weather Observation",
        subtitle: "An archivist reviewing an 1845 German meteorological register encounters a winter recording of -12.00 °Ré. Find the temperature in Celsius.",
        steps: [
          "State the temperature: -12.00 °Ré.",
          "Multiply by 1.25: -12.00 × 1.25 = -15.00 °C.",
          "Result: -12.00 °Ré corresponds to -15.00 °C (5.00 °F)."
        ]
      },
      {
        title: "Example 3: Standard Room Temperature",
        subtitle: "Convert a comfortable indoor ambient temperature of 16.00 °Ré into Celsius.",
        steps: [
          "State the value: 16.00 °Ré.",
          "Multiply by 1.25: 16.00 × 1.25 = 20.00 °C.",
          "Result: 16.00 °Ré equals exactly 20.00 °C (68.00 °F)."
        ]
      }
    ]
  },
  table: {
    title: "Réaumur to Celsius Reference Table",
    headers: ["Réaumur (°Ré)", "Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Physical Benchmark"],
    rows: [
      { fromVal: "-218.52 °Ré", toVal: "-273.15 °C", extra: "-459.67 °F", extra2: "0.00 K", extra3: "Absolute zero (ground thermodynamic limit)" },
      { fromVal: "-80.00 °Ré", toVal: "-100.00 °C", extra: "-148.00 °F", extra2: "173.15 K", extra3: "Extreme cryogenic testing" },
      { fromVal: "-40.00 °Ré", toVal: "-50.00 °C", extra: "-58.00 °F", extra2: "223.15 K", extra3: "Severe polar winter freeze" },
      { fromVal: "-32.00 °Ré", toVal: "-40.00 °C", extra: "-40.00 °F", extra2: "233.15 K", extra3: "Point of equality for °C and °F" },
      { fromVal: "-16.00 °Ré", toVal: "-20.00 °C", extra: "-4.00 °F", extra2: "253.15 K", extra3: "Commercial food freezing" },
      { fromVal: "0.00 °Ré", toVal: "0.00 °C", extra: "32.00 °F", extra2: "273.15 K", extra3: "Freezing point of pure water" },
      { fromVal: "8.00 °Ré", toVal: "10.00 °C", extra: "50.00 °F", extra2: "283.15 K", extra3: "Cool wine cellar storage" },
      { fromVal: "16.00 °Ré", toVal: "20.00 °C", extra: "68.00 °F", extra2: "293.15 K", extra3: "Standard room temperature" },
      { fromVal: "20.00 °Ré", toVal: "25.00 °C", extra: "77.00 °F", extra2: "298.15 K", extra3: "Standard laboratory temperature" },
      { fromVal: "27.20 °Ré", toVal: "34.00 °C", extra: "93.20 °F", extra2: "307.15 K", extra3: "Milk coagulation temperature" },
      { fromVal: "29.60 °Ré", toVal: "37.00 °C", extra: "98.60 °F", extra2: "310.15 K", extra3: "Average human core body temperature" },
      { fromVal: "40.00 °Ré", toVal: "50.00 °C", extra: "122.00 °F", extra2: "323.15 K", extra3: "Hot water bath delivery" },
      { fromVal: "44.00 °Ré", toVal: "55.00 °C", extra: "131.00 °F", extra2: "328.15 K", extra3: "Parmigiano curd scalding target" },
      { fromVal: "60.00 °Ré", toVal: "75.00 °C", extra: "167.00 °F", extra2: "348.15 K", extra3: "Milk pasteurization temperature" },
      { fromVal: "80.00 °Ré", toVal: "100.00 °C", extra: "212.00 °F", extra2: "373.15 K", extra3: "Boiling point of pure water (1 atm)" }
    ]
  },
  applications: {
    title: "Practical & Historical Applications of °Ré to °C",
    items: [
      {
        title: "Artisan European Cheesemaking",
        text: "Specialty cheese producers in Italy and Switzerland using traditional copper cauldrons log milk coagulation, curd cutting, and cooking in Réaumur. Modern dairies convert these readings to Celsius for HACCP food safety documentation."
      },
      {
        title: "Historical Climatology & Meteorology",
        text: "Climate scientists digitizing 18th- and 19th-century weather logs from Russian, French, and German weather stations convert historical Réaumur records into Celsius to model long-term historical temperature trends."
      },
      {
        title: "Brewing & Distillation Archives",
        text: "Historic European brewing treatises, particularly German lager mashing manuals from the 1800s, specified mash rest temperatures in Réaumur, requiring conversion to Celsius for modern brewhouse execution."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 0.8 instead of 1.25: Multiplying by 0.8 converts Celsius to Réaumur. To convert Réaumur to Celsius, you must multiply by 1.25 (or divide by 0.8).",
      "Adding 32: Adding 32 is used when converting to Fahrenheit. Because both Réaumur and Celsius share 0 at water's freezing point, no offset is added.",
      "Confusing Réaumur with Rømer: Réaumur (°Ré) has 80 degrees between freezing and boiling water with freezing at 0. Rømer (°Rø) has freezing at 7.5 and boiling at 60.",
      "Rounding prematurely: In precision dairy and laboratory work, keep exact decimal fractions (e.g., 29.6 °Ré × 1.25 = 37.0 °C)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Réaumur to Celsius?",
      answer: "Multiply the temperature in Réaumur by 1.25 (or 5/4): °C = °Ré × 1.25."
    },
    {
      question: "What is 0 degrees Réaumur in Celsius?",
      answer: "0 °Ré equals exactly 0.00 °C, the freezing point of pure water."
    },
    {
      question: "What is 80 degrees Réaumur in Celsius?",
      answer: "80 °Ré equals exactly 100.00 °C, the boiling point of pure water at standard atmospheric pressure."
    },
    {
      question: "Why does 1 degree Réaumur equal 1.25 degrees Celsius?",
      answer: "Between the freezing and boiling points of water, there are 80 degrees on the Réaumur scale and 100 degrees on the Celsius scale. The ratio 100 ÷ 80 simplifies to 1.25 (or 5/4)."
    },
    {
      question: "What is room temperature (16 °Ré) in Celsius?",
      answer: "16 × 1.25 = 20.00 °C (equivalent to 68.00 °F)."
    },
    {
      question: "What is human body temperature in Réaumur?",
      answer: "Normal human core body temperature (37.00 °C) equals 29.60 °Ré (37 ÷ 1.25 = 29.6)."
    },
    {
      question: "Is the Réaumur scale still used anywhere today?",
      answer: "While obsolete in international science, it is still used traditionally in European artisan cheese production, notably for Parmigiano-Reggiano in Italy and alpine cheeses in Switzerland."
    },
    {
      question: "What is 40 degrees Réaumur in Celsius?",
      answer: "40 × 1.25 = 50.00 °C."
    },
    {
      question: "What is absolute zero in Réaumur?",
      answer: "Absolute zero (-273.15 °C) equals -218.52 °Ré (-273.15 × 0.8)."
    },
    {
      question: "How do you convert a temperature change from Réaumur to Celsius?",
      answer: "Multiply the temperature difference by 1.25: Δ°C = Δ°Ré × 1.25."
    }
  ],
  relatedList: [
    { label: "Celsius to Réaumur", from: "celsius", to: "reaumur" },
    { label: "Réaumur to Fahrenheit", from: "reaumur", to: "fahrenheit" },
    { label: "Réaumur to Kelvin", from: "reaumur", to: "kelvin" },
    { label: "Réaumur to Rankine", from: "reaumur", to: "rankine" },
    { label: "Fahrenheit to Celsius", from: "fahrenheit", to: "celsius" }
  ],
  references: [
    "Encyclopædia Britannica — René Antoine Ferchault de Réaumur and Thermometry",
    "Consorzio del Formaggio Parmigiano-Reggiano — Traditional Production Standards",
    "BIPM — Historical Evolution of Temperature Measurement Scales"
  ]
};
