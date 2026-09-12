import { CustomArticleData } from "./types";

export const rankineToReaumur: CustomArticleData = {
  fromUnitId: "rankine",
  toUnitId: "reaumur",
  seoTitle: "Rankine to Réaumur Converter (°R to °Ré) - UnitsConvertors",
  metaDescription: "Convert Rankine to Réaumur (°R to °Ré) accurately. Learn the (°R - 491.67) × 4/9 formula, historical thermodynamic bridges, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/rankine-to-reaumur",
  h1: "Rankine to Réaumur Converter",
  introduction: [
    "Converting temperature from Rankine to Réaumur bridges modern thermodynamic gas modeling with historical European thermometry. While Rankine measures thermal states from absolute zero using imperial Fahrenheit-sized increments, the Réaumur scale anchors its zero at water's freezing point and divides the span to water's boiling point into exactly 80 degrees.",
    "Because the freezing point of water is 491.67 °R (0 °Ré) and the boiling point is 671.67 °R (80 °Ré), a thermal interval of 180 degrees Rankine corresponds to 80 degrees Réaumur. This yields a direct conversion ratio of 80/180, which simplifies to 4/9 (or 1/2.25). To convert Rankine to Réaumur, subtract the water freezing baseline of 491.67 from the Rankine reading and multiply the result by 4/9, or divide by 2.25.",
    "This technical guide explains the underlying thermodynamic principles, provides worked calculation examples for food science and archival research, and includes a comprehensive conversion lookup table."
  ],
  quickAnswer: {
    text: "To convert Rankine to Réaumur, subtract 491.67 from the Rankine reading and multiply the result by 4/9 (or divide by 2.25). For example, 491.67 °R equals 0 °Ré (water freezing), while 527.67 °R (standard room temperature) converts to 16 °Ré.",
    formulaDisplay: "°Ré = (°R - 491.67) × 4/9",
    subtext: "0 °R = -218.52 °Ré (Absolute Zero) | 491.67 °R = 0 °Ré | 671.67 °R = 80 °Ré"
  },
  aboutSourceUnit: {
    title: "Understanding the Rankine Scale (°R)",
    text: "Introduced in 1859 by Scottish physicist and civil engineer William John Macquorn Rankine, the Rankine scale is an absolute thermodynamic temperature scale. By placing its zero reference at absolute zero (0 °R) and sizing its degree increments to match Fahrenheit degrees exactly, Rankine enabled engineers to calculate gas expansions, steam cycles, and enthalpy values without encountering negative thermodynamic numbers."
  },
  aboutTargetUnit: {
    title: "Understanding the Réaumur Scale (°Ré)",
    text: "Formulated in 1730 by French entomologist and natural philosopher René Antoine Ferchault de Réaumur, this scale calibrated early thermometers using an alcohol-water solution calibrated to expand by 80 parts per thousand between the freezing and boiling points of pure water. Although superseded by Celsius in modern science, it was the dominant temperature scale across 18th- and 19th-century continental Europe and remains a cultural benchmark in traditional European artisan cheesemaking."
  },
  relationship: "Water freezes at 491.67 °R (0 °Ré) and boils at 671.67 °R (80 °Ré). The 180-degree Rankine interval between freezing and boiling corresponds to an 80-degree Réaumur interval, making 1 °Ré equal to exactly 2.25 °R (or 9/4 °R). Rankine degrees are significantly smaller than Réaumur degrees.",
  relationshipTitle: "Rankine to Réaumur Thermal Comparison Points",
  relationshipItems: [
    { label: "Absolute Zero", value: "0.00 °R = -218.52 °Ré" },
    { label: "Liquid Nitrogen Boiling", value: "139.34 °R ≈ -156.59 °Ré" },
    { label: "Water Freezing Point", value: "491.67 °R = 0.00 °Ré" },
    { label: "Parmigiano Milk Heating (34 °C)", value: "552.87 °R = 27.20 °Ré" },
    { label: "Standard Room Temperature (20 °C)", value: "527.67 °R = 16.00 °Ré" },
    { label: "Average Human Body Temperature", value: "558.27 °R = 29.60 °Ré" },
    { label: "Water Boiling Point (1 atm)", value: "671.67 °R = 80.00 °Ré" }
  ],
  formula: {
    text: "Subtract the water freezing offset of 491.67 from the Rankine temperature, then multiply by 4 and divide by 9 (or divide by 2.25).",
    math: "T_{(^\\circ\\text{Ré})} = \\left(T_{(^\\circ\\text{R})} - 491.67\\right) \\times \\frac{4}{9} = \\frac{T_{(^\\circ\\text{R})} - 491.67}{2.25}",
    subtext: "To convert in reverse (°Ré to °R): Multiply °Ré by 2.25 and add 491.67."
  },
  formulaTitle: "Rankine to Réaumur Conversion Formula",
  practicalTip: {
    title: "Celsius Stepping Stone Shortcut",
    text: "If you are comfortable converting to Celsius: first convert Rankine to Celsius (°C = (°R - 491.67) ÷ 1.8), then simply multiply the Celsius result by 0.8 to obtain Réaumur."
  },
  expertNote: {
    title: "European Archival Science & Dairy Production",
    text: "Modern thermodynamicists analyzing historic 18th-century French and Russian meteorological logs or industrial fermentation patents often encounter temperatures recorded in Réaumur. In parallel, northern Italian consortia producing Parmigiano-Reggiano continue to utilize calibrated copper-cased Réaumur thermometers to control curd temperature."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Artisan Cheese Vat Temperature",
        subtitle: "A digital dairy monitoring system calibrated in Rankine reads 555.57 °R during curd settling. Convert this temperature to Réaumur.",
        steps: [
          "State the temperature: 555.57 °R.",
          "Subtract 491.67: 555.57 - 491.67 = 63.90.",
          "Multiply by 4/9: 63.90 × (4/9) = 28.40 °Ré.",
          "Result: 555.57 °R corresponds to 28.40 °Ré (approximately 35.5 °C)."
        ]
      },
      {
        title: "Example 2: Historical Meteorological Analysis",
        subtitle: "A thermodynamic history paper compares an extreme winter record modeled as 446.67 °R against legacy European weather stations. Find the equivalent in Réaumur.",
        steps: [
          "State the value: 446.67 °R.",
          "Subtract 491.67: 446.67 - 491.67 = -45.00.",
          "Multiply by 4/9: -45.00 × 4/9 = -20.00 °Ré.",
          "Result: 446.67 °R equals exactly -20.00 °Ré (-25.00 °C or -13.00 °F)."
        ]
      },
      {
        title: "Example 3: Boiling Water Verification",
        subtitle: "Convert the boiling point of pure water under standard pressure (671.67 °R) to Réaumur.",
        steps: [
          "State the boiling temperature: 671.67 °R.",
          "Subtract 491.67: 671.67 - 491.67 = 180.00.",
          "Multiply by 4/9: 180.00 × 4/9 = 80.00 °Ré.",
          "Result: 671.67 °R equals exactly 80.00 °Ré."
        ]
      }
    ]
  },
  table: {
    title: "Rankine to Réaumur Reference Table",
    headers: ["Rankine (°R)", "Réaumur (°Ré)", "Celsius (°C)", "Fahrenheit (°F)", "Thermal Benchmark"],
    rows: [
      { fromVal: "0.00 °R", toVal: "-218.52 °Ré", extra: "-273.15 °C", extra2: "-459.67 °F", extra3: "Absolute zero (ground thermal state)" },
      { fromVal: "139.34 °R", toVal: "-156.59 °Ré", extra: "-195.74 °C", extra2: "-320.33 °F", extra3: "Liquid nitrogen boiling threshold" },
      { fromVal: "400.00 °R", toVal: "-40.74 °Ré", extra: "-50.93 °C", extra2: "-59.67 °F", extra3: "Severe polar condition" },
      { fromVal: "419.67 °R", toVal: "-32.00 °Ré", extra: "-40.00 °C", extra2: "-40.00 °F", extra3: "Parity between Celsius and Fahrenheit" },
      { fromVal: "459.67 °R", toVal: "-14.22 °Ré", extra: "-17.78 °C", extra2: "0.00 °F", extra3: "Zero degrees Fahrenheit baseline" },
      { fromVal: "491.67 °R", toVal: "0.00 °Ré", extra: "0.00 °C", extra2: "32.00 °F", extra3: "Freezing point of pure water (1 atm)" },
      { fromVal: "500.00 °R", toVal: "3.70 °Ré", extra: "4.63 °C", extra2: "40.33 °F", extra3: "Standard refrigerator temperature" },
      { fromVal: "527.67 °R", toVal: "16.00 °Ré", extra: "20.00 °C", extra2: "68.00 °F", extra3: "Standard room temperature" },
      { fromVal: "536.67 °R", toVal: "20.00 °Ré", extra: "25.00 °C", extra2: "77.00 °F", extra3: "Laboratory reference temperature" },
      { fromVal: "558.27 °R", toVal: "29.60 °Ré", extra: "37.00 °C", extra2: "98.60 °F", extra3: "Normal human body core temperature" },
      { fromVal: "600.00 °R", toVal: "48.15 °Ré", extra: "60.19 °C", extra2: "140.33 °F", extra3: "Domestic water heater delivery" },
      { fromVal: "671.67 °R", toVal: "80.00 °Ré", extra: "100.00 °C", extra2: "212.00 °F", extra3: "Boiling point of pure water (1 atm)" },
      { fromVal: "761.67 °R", toVal: "120.00 °Ré", extra: "150.00 °C", extra2: "302.00 °F", extra3: "Commercial confectionary cooking" },
      { fromVal: "851.67 °R", toVal: "160.00 °Ré", extra: "200.00 °C", extra2: "392.00 °F", extra3: "Industrial baking temperature" }
    ]
  },
  applications: {
    title: "Applications of Rankine and Réaumur",
    items: [
      {
        title: "European Dairy & Traditional Cheesemaking",
        text: "Specialized cheesemakers in Italy, France, and Switzerland continue to measure milk curdling and whey scalding in Réaumur. Engineers supplying modern thermal controls translate process metrics to and from digital Rankine and Celsius systems."
      },
      {
        title: "Historical Science & Meteorological Archives",
        text: "Archivists cross-referencing Russian Imperial meteorological data and French Enlightenment physics treatises convert historical Réaumur records into Rankine or Kelvin to evaluate climate trends."
      },
      {
        title: "Brewing & Distilling History",
        text: "Traditional German and Austrian brewing manuals from the 19th century specified fermentation and mashing temperatures in Réaumur, requiring conversion when digitized into modern thermodynamic brewing software."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying before subtracting the 491.67 offset: You must shift the zero datum first by subtracting 491.67 before applying the 4/9 scaling fraction.",
      "Confusing Réaumur with Rømer: Réaumur (°Ré) sets boiling water at 80 degrees with freezing at 0. Rømer (°Rø) sets boiling at 60 degrees with freezing at 7.5 degrees.",
      "Using 0.8 directly on Rankine: 0.8 is the ratio between Celsius and Réaumur (100:80). For Rankine (which has 180 degrees between freezing and boiling), the ratio is 80/180 = 4/9 ≈ 0.44444.",
      "Using 459.67 instead of 491.67: Subtracting 459.67 shifts to Fahrenheit, not to water's freezing point. You must subtract 491.67."
    ]
  },
  faqs: [
    {
      question: "How do you convert Rankine to Réaumur?",
      answer: "Subtract 491.67 from the Rankine reading, then multiply the result by 4/9 (or divide by 2.25): °Ré = (°R - 491.67) × 4/9."
    },
    {
      question: "What is 0 degrees Rankine in Réaumur?",
      answer: "0 °R equals -218.52 °Ré, which represents absolute zero on the Réaumur scale."
    },
    {
      question: "What is 491.67 Rankine in Réaumur?",
      answer: "491.67 °R equals exactly 0.00 °Ré, the freezing point of pure water."
    },
    {
      question: "What is 671.67 Rankine in Réaumur?",
      answer: "671.67 °R equals exactly 80.00 °Ré, the boiling point of pure water under standard atmospheric pressure."
    },
    {
      question: "Why does the formula use the fraction 4/9?",
      answer: "Between the freezing and boiling points of water, there are 80 degrees Réaumur and 180 degrees Rankine. The fraction 80 / 180 simplifies directly to 4 / 9 (or 1 / 2.25)."
    },
    {
      question: "What is room temperature (527.67 °R) in Réaumur?",
      answer: "Subtracting 491.67 leaves 36.00. Multiplying by 4/9 gives exactly 16.00 °Ré (corresponding to 20 °C or 68 °F)."
    },
    {
      question: "Is 1 degree Réaumur larger than 1 degree Rankine?",
      answer: "Yes, 1 degree Réaumur is equal to exactly 2.25 degrees Rankine. Réaumur degrees are more than twice as large."
    },
    {
      question: "Is the Réaumur scale still used anywhere in the world today?",
      answer: "It is obsolete in official science and meteorology, but remains in active traditional use in certain European artisan cheese factories (such as Parmigiano-Reggiano production in Italy)."
    },
    {
      question: "What is 500 Rankine in Réaumur?",
      answer: "Subtracting 491.67 gives 8.33. Multiplying by 4/9 gives approximately 3.70 °Ré."
    },
    {
      question: "How do you convert a temperature difference from Rankine to Réaumur?",
      answer: "To convert a temperature difference (ΔT), simply multiply the change in Rankine by 4/9 without adding or subtracting any offset: Δ°Ré = Δ°R × 4/9."
    }
  ],
  relatedList: [
    { label: "Réaumur to Rankine", from: "reaumur", to: "rankine" },
    { label: "Rankine to Celsius", from: "rankine", to: "celsius" },
    { label: "Rankine to Fahrenheit", from: "rankine", to: "fahrenheit" },
    { label: "Celsius to Réaumur", from: "celsius", to: "reaumur" },
    { label: "Réaumur to Celsius", from: "reaumur", to: "celsius" }
  ],
  references: [
    "Encyclopædia Britannica — René-Antoine Ferchault de Réaumur and Thermometry",
    "Consorzio del Formaggio Parmigiano-Reggiano — Production Specifications and Traditional Thermometry",
    "History of Early Modern Physical Science Instruments (Oxford University Press)"
  ]
};
