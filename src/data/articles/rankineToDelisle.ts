import { CustomArticleData } from "./types";

export const rankineToDelisle: CustomArticleData = {
  fromUnitId: "rankine",
  toUnitId: "delisle",
  seoTitle: "Rankine to Delisle Converter (°R to °De) - UnitsConvertors",
  metaDescription: "Convert Rankine to Delisle (°R to °De) with complete scientific accuracy. Learn the inverted (671.67 - °R) × 5/6 formula, Russian imperial science history, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/rankine-to-delisle",
  h1: "Rankine to Delisle Converter",
  introduction: [
    "Converting temperature from Rankine to Delisle brings together modern absolute engineering thermodynamics and one of the most fascinating inverted temperature scales in scientific history. While Rankine measures thermal energy upward from absolute zero (0 °R) in Fahrenheit-sized increments, the Delisle scale is inverted: its numbers increase as temperature becomes colder.",
    "Created in 1732 by French astronomer Joseph-Nicolas Delisle at the Russian Academy of Sciences in Saint Petersburg, the Delisle scale defines the boiling point of pure water as 0 °De (corresponding to 671.67 °R) and the freezing point of pure water as 150 °De (corresponding to 491.67 °R). Over this 180-degree Rankine interval, Delisle counts 150 degrees, establishing an exact conversion ratio of 150/180, which simplifies to 5/6. To convert Rankine to Delisle, subtract the Rankine reading from 671.67 and multiply the difference by 5/6.",
    "This technical guide explores the mathematical mechanics of inverted thermometry, provides step-by-step cryogenic and meteorological conversion examples, and features an exhaustive reference table."
  ],
  quickAnswer: {
    text: "To convert Rankine to Delisle, subtract the Rankine temperature from 671.67 and multiply the result by 5/6. Because the Delisle scale is inverted, higher Rankine temperatures yield lower Delisle numbers. For example, 671.67 °R converts to 0 °De (water boiling), 527.67 °R converts to 120 °De (room temperature), and 491.67 °R converts to 150 °De (water freezing).",
    formulaDisplay: "°De = (671.67 - °R) × (5 ÷ 6)",
    subtext: "671.67 °R = 0 °De (Water Boiling) | 491.67 °R = 150 °De (Water Freezing) | Inverted Direction"
  },
  aboutSourceUnit: {
    title: "Understanding the Rankine Scale (°R)",
    text: "Proposed in 1859 by Scottish civil engineer and physicist William John Macquorn Rankine, the Rankine scale is an absolute thermodynamic temperature scale. With 0 °R placed at absolute zero, it shares identical degree increments with the Fahrenheit scale, enabling US mechanical, aeronautical, and chemical engineers to perform gas law and thermodynamic cycle calculations directly in imperial units."
  },
  aboutTargetUnit: {
    title: "Understanding the Delisle Scale (°De)",
    text: "Devised in 1732 by French astronomer Joseph-Nicolas Delisle and recalibrated in 1738 by German polymath Josias Weitbrecht, the Delisle scale used mercury contraction from water's boiling point. Because water boils at 0 °De and freezes at 150 °De, it became the preeminent scientific and meteorological temperature scale throughout the Russian Empire for nearly a century, utilized extensively by Mikhail Lomonosov and Russian Arctic expeditions."
  },
  relationship: "Between the boiling point (671.67 °R) and freezing point (491.67 °R) of pure water, there are 180 degrees Rankine and 150 degrees Delisle. The scales run in opposite directions: as temperature rises, Rankine values increase while Delisle values decrease. Each degree Delisle equals exactly 6/5 (1.2) degrees Rankine.",
  relationshipTitle: "Rankine to Delisle Thermal Scale Comparison",
  relationshipItems: [
    { label: "Water Boiling Point (1 atm)", value: "671.67 °R = 0.00 °De" },
    { label: "Normal Human Body Temperature", value: "558.27 °R = 94.50 °De" },
    { label: "Standard Room Temperature (20 °C)", value: "527.67 °R = 120.00 °De" },
    { label: "Pure Water Freezing Point", value: "491.67 °R = 150.00 °De" },
    { label: "Mercury Freezing Point (-38.83 °C)", value: "421.78 °R ≈ 208.25 °De" },
    { label: "Dry Ice Sublimation (-78.5 °C)", value: "350.37 °R ≈ 267.75 °De" },
    { label: "Absolute Zero", value: "0.00 °R = 559.725 °De" }
  ],
  formula: {
    text: "Subtract the Rankine temperature from 671.67 (the boiling point of water), then multiply the resulting difference by the fraction 5/6.",
    math: "T_{(^\\circ\\text{De})} = \\left(671.67 - T_{(^\\circ\\text{R})}\\right) \\times \\frac{5}{6}",
    subtext: "To convert in reverse (°De to °R): T_{(^\\circ\\text{R})} = 671.67 - (T_{(^\\circ\\text{De})} × 1.2)."
  },
  formulaTitle: "Rankine to Delisle Conversion Formula",
  practicalTip: {
    title: "Celsius Intermediary Method",
    text: "If working mentally: first convert Rankine to Celsius (°C = (°R - 491.67) ÷ 1.8). Then calculate Delisle by subtracting the Celsius reading from 100 and multiplying by 1.5: °De = (100 - °C) × 1.5."
  },
  expertNote: {
    title: "The Inverted Logic of Mercury Contraction",
    text: "Delisle built his thermometers by filling a glass tube with mercury at water's boiling point, sealing it, and measuring the contraction of the mercury column as the temperature cooled. This optical design naturally produced an inverted scale that proved exceptionally durable in extreme Siberian cold where spirit thermometers failed."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Room Temperature Conversion",
        subtitle: "Convert standard indoor room temperature of 527.67 °R (68.00 °F / 20.00 °C) to Delisle.",
        steps: [
          "State starting Rankine value: 527.67 °R.",
          "Subtract from water boiling point: 671.67 - 527.67 = 144.00.",
          "Multiply by 5/6: 144.00 × (5/6) = 120.00 °De.",
          "Result: 527.67 °R equals exactly 120.00 °De."
        ]
      },
      {
        title: "Example 2: Water Freezing Point Verification",
        subtitle: "Convert the freezing point of pure water (491.67 °R) to Delisle.",
        steps: [
          "State the value: 491.67 °R.",
          "Subtract from 671.67: 671.67 - 491.67 = 180.00.",
          "Multiply by 5/6: 180.00 × (5/6) = 150.00 °De.",
          "Result: 491.67 °R corresponds to exactly 150.00 °De."
        ]
      },
      {
        title: "Example 3: Severe Siberian Winter Cold",
        subtitle: "An 18th-century Siberian winter weather record corresponds to 428.67 °R (-31.00 °F / -35.00 °C). Convert this value to Delisle.",
        steps: [
          "State starting temperature: 428.67 °R.",
          "Subtract from 671.67: 671.67 - 428.67 = 243.00.",
          "Multiply by 5/6: 243.00 × (5/6) = 202.50 °De.",
          "Result: 428.67 °R equals exactly 202.50 °De."
        ]
      }
    ]
  },
  table: {
    title: "Rankine to Delisle Reference Table",
    headers: ["Rankine (°R)", "Delisle (°De)", "Celsius (°C)", "Fahrenheit (°F)", "Thermal Benchmark"],
    rows: [
      { fromVal: "671.67 °R", toVal: "0.00 °De", extra: "100.00 °C", extra2: "212.00 °F", extra3: "Boiling point of pure water (1 atm)" },
      { fromVal: "600.00 °R", toVal: "59.73 °De", extra: "60.19 °C", extra2: "140.33 °F", extra3: "Domestic water heater temperature" },
      { fromVal: "558.27 °R", toVal: "94.50 °De", extra: "37.00 °C", extra2: "98.60 °F", extra3: "Normal human body temperature" },
      { fromVal: "536.67 °R", toVal: "112.50 °De", extra: "25.00 °C", extra2: "77.00 °F", extra3: "Standard laboratory temperature" },
      { fromVal: "527.67 °R", toVal: "120.00 °De", extra: "20.00 °C", extra2: "68.00 °F", extra3: "Standard room temperature" },
      { fromVal: "500.00 °R", toVal: "143.06 °De", extra: "4.63 °C", extra2: "40.33 °F", extra3: "Refrigerated food storage" },
      { fromVal: "491.67 °R", toVal: "150.00 °De", extra: "0.00 °C", extra2: "32.00 °F", extra3: "Freezing point of pure water" },
      { fromVal: "459.67 °R", toVal: "176.67 °De", extra: "-17.78 °C", extra2: "0.00 °F", extra3: "Zero degrees Fahrenheit benchmark" },
      { fromVal: "419.67 °R", toVal: "210.00 °De", extra: "-40.00 °C", extra2: "-40.00 °F", extra3: "Point of equality for °C and °F" },
      { fromVal: "350.00 °R", toVal: "268.06 °De", extra: "-78.71 °C", extra2: "-109.67 °F", extra3: "Dry ice (solid CO₂) sublimation" },
      { fromVal: "162.27 °R", toVal: "424.50 °De", extra: "-183.00 °C", extra2: "-297.40 °F", extra3: "Liquid oxygen boiling point" },
      { fromVal: "139.34 °R", toVal: "443.61 °De", extra: "-195.74 °C", extra2: "-320.33 °F", extra3: "Liquid nitrogen boiling point" },
      { fromVal: "0.00 °R", toVal: "559.73 °De", extra: "-273.15 °C", extra2: "-459.67 °F", extra3: "Absolute zero (coldest physical limit)" }
    ]
  },
  applications: {
    title: "Historical & Scientific Significance of °R to °De",
    items: [
      {
        title: "Russian Imperial Science & Meteorology",
        text: "Historians studying 18th-century Russian climate records and Arctic expeditions led by Vitus Bering translate historic Delisle measurements into modern absolute Rankine and Kelvin models."
      },
      {
        title: "Academic Analysis of Inverted Scales",
        text: "In university history of science programs, the Delisle scale is studied alongside Celsius (which was also originally inverted by Anders Celsius) to explore early thermometric design philosophies."
      },
      {
        title: "Antique Instrument Calibration",
        text: "Curators at Russian and European science museums use conversion formulas to verify the calibration of surviving 18th-century mercury thermometers marked in Delisle degrees."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Reversing the subtraction: Because Delisle is inverted, you must compute (671.67 - °R), NOT (°R - 671.67). Reversing this yields a negative number that violates the scale definition.",
      "Assuming larger numbers mean hotter temperatures: On the Delisle scale, higher numbers mean colder conditions (e.g., 150 °De is freezing water, while 0 °De is boiling water).",
      "Confusing Delisle with Réaumur: Delisle (°De) has 150 degrees between boiling and freezing. Réaumur (°Ré) has 80 degrees, runs in the normal direction, and sets freezing at 0.",
      "Treating temperature changes (ΔT) with the offset: A temperature change of 18 °R corresponds to a change of 15 °De (Δ°De = Δ°R × 5/6), without using the 671.67 offset."
    ]
  },
  faqs: [
    {
      question: "How do you convert Rankine to Delisle?",
      answer: "Subtract the Rankine reading from 671.67, then multiply the difference by 5/6: °De = (671.67 - °R) × (5 ÷ 6)."
    },
    {
      question: "Why is the Delisle scale inverted?",
      answer: "Joseph-Nicolas Delisle calibrated his thermometer using the contraction of mercury starting from the boiling point of water (0 °De), so numbers increase as temperature drops."
    },
    {
      question: "What is 0 degrees Rankine in Delisle?",
      answer: "0 °R equals exactly 559.725 °De, which represents absolute zero."
    },
    {
      question: "What is 491.67 Rankine in Delisle?",
      answer: "491.67 °R equals exactly 150.00 °De, the freezing point of pure water."
    },
    {
      question: "What is 671.67 Rankine in Delisle?",
      answer: "671.67 °R equals exactly 0.00 °De, the boiling point of pure water at 1 atm."
    },
    {
      question: "What is standard room temperature (527.67 °R) in Delisle?",
      answer: "671.67 - 527.67 = 144.00. Multiplying 144 by 5/6 yields exactly 120.00 °De."
    },
    {
      question: "Who used the Delisle scale historically?",
      answer: "The Delisle scale was widely used throughout the Russian Empire for nearly 100 years during the 18th and early 19th centuries."
    },
    {
      question: "How many degrees Rankine are in 1 degree Delisle?",
      answer: "One degree Delisle is equal to 1.2 degrees Rankine (or 6/5 °R)."
    },
    {
      question: "Can Delisle temperatures be negative?",
      answer: "Yes, temperatures above the boiling point of water (above 671.67 °R / 100 °C / 212 °F) produce negative numbers on the Delisle scale."
    },
    {
      question: "How do you convert a temperature interval (delta) from Rankine to Delisle?",
      answer: "To convert a temperature change, multiply the Rankine interval by 5/6: Δ°De = Δ°R × (5/6)."
    }
  ],
  relatedList: [
    { label: "Delisle to Rankine", from: "delisle", to: "rankine" },
    { label: "Rankine to Celsius", from: "rankine", to: "celsius" },
    { label: "Rankine to Fahrenheit", from: "rankine", to: "fahrenheit" },
    { label: "Celsius to Delisle", from: "celsius", to: "delisle" },
    { label: "Delisle to Celsius", from: "delisle", to: "celsius" }
  ],
  references: [
    "Memoirs of the Imperial Academy of Sciences of Saint Petersburg (1738)",
    "History of Thermometry and Meteorology (W.E. Knowles Middleton)",
    "Encyclopædia Britannica — Joseph-Nicolas Delisle and Thermometric Scales"
  ]
};
