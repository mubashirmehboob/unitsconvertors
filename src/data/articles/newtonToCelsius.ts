import { CustomArticleData } from "./types";

export const newtonToCelsius: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "celsius",
  seoTitle: "Newton to Celsius (N to C) Temperature Converter",
  metaDescription: "Convert Newton to Celsius (°N to °C) with exact precision. Learn the 100/33 ratio (3.030303), Isaac Newton's 1701 thermometry, and tables.",
  h1: "Newton to Celsius Converter",
  introduction: [
    "Converting temperature from the Newton scale to degrees Celsius connects one of the earliest quantitative temperature scales in history with the modern worldwide metric standard. Devised around 1701 by English physicist and mathematician Sir Isaac Newton, the Newton scale was published in his seminal anonymous paper <em>Scala graduum Caloris</em> ('Scale of the Degrees of Heat') in the Royal Society's Philosophical Transactions.",
    "Remarkably, both Newton and modern Celsius share the exact same starting point: zero is defined as the freezing point of pure water (0 °N = 0 °C). However, while Celsius divides the interval between water freezing and boiling into 100 degrees, Newton divided it into 33 degrees. Because their zero baselines align, the conversion requires no additive shift—it is a pure scaling ratio: <strong>°C = °N × (100 / 33) ≈ °N × 3.030303</strong>. This guide details Newton's early thermometric insights, step-by-step calculations, worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert degrees Newton to degrees Celsius, multiply the Newton reading by 100/33 (or approximately 3.030303). For example, 0 °N equals exactly 0 °C, and 33 °N equals exactly 100 °C.",
    formulaDisplay: "°C = °N × (100 / 33) ≈ °N × 3.030303",
    subtext: "A direct ratio calculation because both scales define 0 as the freezing point of pure water."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton Temperature Scale (°N)",
    text: "Devised in 1701 by Sir Isaac Newton, the Newton scale was one of the earliest attempts to assign numbers to degrees of heat. Newton used a glass thermometer filled with linseed oil, tracking its volumetric expansion. He designated 0 °N as the temperature of melting snow, roughly 12 °N as human body heat, and 33 °N as the heat of boiling water. His observations led directly to the formulation of Newton's Law of Cooling."
  },
  aboutTargetUnit: {
    title: "Understanding the Celsius Scale (°C)",
    text: "The Celsius scale (historically called centigrade) is the SI derived unit of temperature used worldwide. Standardized in 1742 by Anders Celsius (and inverted into its modern format shortly thereafter), 0 °C represents the freezing point of water and 100 °C represents the boiling point of water at standard atmospheric pressure."
  },
  relationship: "Water freezes at 0 °N and 0 °C. Water boils at 33 °N and 100 °C. Because 33 Newton degrees span the exact same physical interval as 100 Celsius degrees, each degree Newton is roughly three times larger than a degree Celsius: 1 °N = 100 / 33 °C ≈ 3.030303 °C. No zero-offset addition is needed.",
  relationshipTitle: "Direct Proportional Scaling",
  relationshipItems: [
    { label: "0 °N", value: "0.00 °C (Freezing point of pure water)" },
    { label: "6.6 °N", value: "20.00 °C (Standard room temperature 68 °F)" },
    { label: "12 °N", value: "36.36 °C (Newton's historical human body calibration)" },
    { label: "33 °N", value: "100.00 °C (Boiling point of pure water at 1 atm)" },
    { label: "-90.14 °N", value: "-273.15 °C (Absolute zero 0 K)" }
  ],
  formula: {
    text: "Multiply the temperature in degrees Newton by 100 and divide by 33 (or multiply by approximately 3.030303) to obtain the temperature in degrees Celsius.",
    math: "°C = °N × (100 / 33)",
    subtext: "To convert degrees Celsius back to degrees Newton, multiply by 33 and divide by 100 (or multiply by 0.33): °N = °C × 0.33."
  },
  formulaTitle: "Newton to Celsius Formula",
  practicalTip: {
    title: "Mental Estimation Shortcut",
    text: "To estimate Celsius in your head from degrees Newton, multiply by 3 and add 1% to the result. For example, 10 °N × 3 = 30; plus 1% (0.3) = 30.3 °C (exact is 30.303 °C)."
  },
  expertNote: {
    title: "Newton's 1701 Law of Cooling",
    text: "Newton used his 0 to 33 degree scale to establish that the rate of heat loss of a hot body is directly proportional to the difference in temperatures between the body and its surrounding environment, a cornerstone of heat transfer engineering today."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Water Freezing Point (0 °N)",
        subtitle: "Convert the freezing point of water from Newton to Celsius.",
        steps: [
          "Identify temperature: 0 °N.",
          "Apply formula: °C = 0 × (100 / 33).",
          "Calculate: 0 × 3.0303 = 0 °C.",
          "Result: 0 °N equals exactly 0 °C."
        ]
      },
      {
        title: "Example 2: Newton's Body Temperature Benchmark (12 °N)",
        subtitle: "Convert Newton's historical human body milestone of 12 °N to Celsius.",
        steps: [
          "Identify temperature: 12 °N.",
          "Multiply by 100: 12 × 100 = 1,200.",
          "Divide by 33: 1,200 / 33 = 36.3636 °C.",
          "Result: 12 °N equals approximately 36.36 °C (very close to modern clinical 37 °C)."
        ]
      },
      {
        title: "Example 3: Water Boiling Point (33 °N)",
        subtitle: "Convert the boiling point of pure water to Celsius.",
        steps: [
          "Identify temperature: 33 °N.",
          "Multiply: 33 × (100 / 33) = 100 °C.",
          "Result: 33 °N equals exactly 100 °C."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Celsius Conversion Table",
    headers: ["Newton (°N)", "Celsius (°C)", "Physical Context"],
    rows: [
      { fromVal: "-90.14 °N", toVal: "-273.15 °C", extra: "Absolute zero (0 K)" },
      { fromVal: "-33.00 °N", toVal: "-100.00 °C", extra: "Cryogenic research cold" },
      { fromVal: "-16.50 °N", toVal: "-50.00 °C", extra: "Severe Siberian winter cold" },
      { fromVal: "-6.60 °N", toVal: "-20.00 °C", extra: "Deep freezer temperature" },
      { fromVal: "0.00 °N", toVal: "0.00 °C", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "3.30 °N", toVal: "10.00 °C", extra: "Chilly spring morning" },
      { fromVal: "6.60 °N", toVal: "20.00 °C", extra: "Standard room temperature (68 °F)" },
      { fromVal: "8.25 °N", toVal: "25.00 °C", extra: "Comfortable warm room (77 °F)" },
      { fromVal: "12.00 °N", toVal: "36.36 °C", extra: "Newton's human body temperature benchmark" },
      { fromVal: "16.50 °N", toVal: "50.00 °C", extra: "Hot bath / desert temperature" },
      { fromVal: "24.75 °N", toVal: "75.00 °C", extra: "High-temperature milk pasteurization" },
      { fromVal: "33.00 °N", toVal: "100.00 °C", extra: "Boiling point of pure water at sea level" }
    ]
  },
  applications: {
    title: "Practical Applications of Newton to Celsius Conversions",
    items: [
      {
        title: "History of Physics & Classical Mechanics",
        text: "Historians analyzing Newton's unpublished drafts and correspondence with contemporaries (such as Robert Hooke and Edmond Halley) convert °N into Celsius to verify the accuracy of his experimental thermometry."
      },
      {
        title: "Heat Transfer & Cooling Rate Laboratory Experiments",
        text: "University physics students reproduce Newton's 1701 calorimeter cooling curves, converting raw historical Newton degrees into modern Celsius to verify exponential decay constants."
      },
      {
        title: "Rare Scientific Instrument Authentication",
        text: "Museum curators evaluate antique British thermometers carrying Newton's 33-division linseed oil scale, cross-calibrating against Celsius master standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing the degree Newton (°N) of temperature with the SI unit of force, the newton (N = 1 kg·m/s²).",
      "Adding a zero offset (like 32 or 273.15); because both scales set 0 at the freezing point of water, no additive offset is needed.",
      "Dividing by 3.0303 instead of multiplying (degrees Newton are larger than degrees Celsius, so the Celsius value must be larger)."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees Newton to Celsius?",
      answer: "Multiply the temperature in degrees Newton by 100/33 (or approximately 3.030303): °C = °N × (100 / 33)."
    },
    {
      question: "What is 0 °N in Celsius?",
      answer: "0 °N is the freezing point of water, which corresponds to exactly 0 °C."
    },
    {
      question: "What is 33 °N in Celsius?",
      answer: "33 °N is the boiling point of pure water at 1 atm, which corresponds to exactly 100 °C."
    },
    {
      question: "Why did Isaac Newton choose 33 degrees for boiling water?",
      answer: "Newton tracked the thermal expansion of linseed oil in a glass tube. Linseed oil expanded by roughly 7.25% between freezing and boiling water. Newton divided this volume change into 33 equal parts, designating 0 for melting snow, roughly 12 for body heat, and 33 for boiling water."
    },
    {
      question: "What is room temperature (20 °C) in degrees Newton?",
      answer: "20 °C equals exactly 6.6 °N (20 × 33 / 100 = 6.6)."
    },
    {
      question: "How do you convert Celsius back to degrees Newton?",
      answer: "Multiply the Celsius temperature by 33/100 (or 0.33): °N = °C × 0.33. For example, 100 °C × 0.33 = 33 °N."
    },
    {
      question: "Is degrees Newton related to Isaac Newton's apple story?",
      answer: "Isaac Newton made groundbreaking contributions across gravitation, optics, mathematics, and heat. The temperature scale was published in 1701 while he served as Master of the Royal Mint and President of the Royal Society."
    },
    {
      question: "What is absolute zero in degrees Newton?",
      answer: "Absolute zero (-273.15 °C / 0 K) corresponds to approximately -90.14 °N (-273.15 × 0.33)."
    }
  ],
  relatedList: [
    { label: "Celsius to Newton", from: "celsius", to: "newton" },
    { label: "Newton to Fahrenheit", from: "newton", to: "fahrenheit" },
    { label: "Newton to Kelvin", from: "newton", to: "kelvin" }
  ],
  references: [
    "Isaac Newton - Scala graduum Caloris (Philosophical Transactions of the Royal Society, 1701)",
    "BIPM - SI Brochure: History of Temperature Measurement",
    "J. A. Ruffner - The Background and Early Development of Newton's Law of Cooling"
  ]
};
