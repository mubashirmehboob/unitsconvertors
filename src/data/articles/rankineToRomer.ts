import { CustomArticleData } from "./types";

export const rankineToRomer: CustomArticleData = {
  fromUnitId: "rankine",
  toUnitId: "romer",
  seoTitle: "Rankine to Rømer Converter (°R to °Rø) - UnitsConvertors",
  metaDescription: "Convert Rankine to Rømer (°R to °Rø) with exact historical and thermodynamic precision. Discover the (°R - 491.67) × 7/24 + 7.5 formula, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/rankine-to-romer",
  h1: "Rankine to Rømer Converter",
  introduction: [
    "Converting temperature from Rankine to Rømer connects modern thermodynamic absolute measurement with the early Scandinavian roots of precision thermometry. While Rankine measures thermal energy upward from absolute zero in Fahrenheit-sized increments, the historical Rømer scale was calibrated in Copenhagen in 1701 using freezing brine, pure water, and boiling water.",
    "Ole Rømer designated the freezing point of pure water as exactly 7.5 °Rø (corresponding to 491.67 °R) and set the boiling point of pure water at 60 °Rø (corresponding to 671.67 °R). This spans 52.5 degrees Rømer across a thermal interval of 180 degrees Rankine. The resulting scale factor simplifies to 52.5/180, which reduces to the rational fraction 7/24. To convert Rankine to Rømer, subtract 491.67 from the Rankine reading, multiply by 7/24, and then add 7.5.",
    "This technical guide explains the historical calibration of the Rømer scale, provides step-by-step mathematical examples, illustrates key physics benchmarks, and features an exhaustive conversion lookup table."
  ],
  quickAnswer: {
    text: "To convert Rankine to Rømer, subtract 491.67 from the Rankine temperature, multiply by 7/24 (or divide by approximately 3.4286), and add 7.5. For example, 491.67 °R converts to 7.5 °Rø (water freezing), 527.67 °R converts to 18 °Rø (room temperature), and 671.67 °R converts to 60 °Rø (water boiling).",
    formulaDisplay: "°Rø = [(°R - 491.67) × 7 ÷ 24] + 7.5",
    subtext: "0 °R ≈ -135.90 °Rø (Absolute Zero) | 491.67 °R = 7.5 °Rø | 671.67 °R = 60 °Rø"
  },
  aboutSourceUnit: {
    title: "Understanding the Rankine Scale (°R)",
    text: "Proposed in 1859 by Scottish civil engineer and physicist William John Macquorn Rankine, the Rankine scale is an absolute thermodynamic temperature scale. With its zero benchmark positioned at absolute zero (0 °R), it serves as the absolute temperature reference for US Customary and Imperial engineering, sharing identical degree increments with the Fahrenheit scale."
  },
  aboutTargetUnit: {
    title: "Understanding the Rømer Scale (°Rø)",
    text: "Invented in 1701 by Danish astronomer Ole Christensen Rømer (famed for calculating the speed of light), the Rømer scale established an early calibrated thermometer based on two fixed points: freezing ammonium chloride brine (0 °Rø) and boiling water (60 °Rø). Pure water froze at 7.5 °Rø, which was one-eighth of the total span. Daniel Gabriel Fahrenheit visited Rømer in 1708, adopting Rømer's fundamental calibration methodology to develop the Fahrenheit scale."
  },
  relationship: "Between the freezing point (491.67 °R) and boiling point (671.67 °R) of pure water, there are 180 degrees Rankine. On the Rømer scale, this exact thermal distance is divided into 52.5 degrees (from 7.5 °Rø to 60 °Rø). Thus, each degree Rømer equals exactly 24/7 degrees Rankine (approximately 3.4286 °R).",
  relationshipTitle: "Rankine to Rømer Key Thermal Reference Points",
  relationshipItems: [
    { label: "Absolute Zero", value: "0.00 °R ≈ -135.90 °Rø" },
    { label: "Rømer Zero Point (Freezing Brine)", value: "465.96 °R = 0.00 °Rø" },
    { label: "Pure Water Freezing Point", value: "491.67 °R = 7.50 °Rø" },
    { label: "Standard Room Temperature (20 °C)", value: "527.67 °R = 18.00 °Rø" },
    { label: "Average Human Body Temperature (37 °C)", value: "558.27 °R ≈ 26.93 °Rø" },
    { label: "Pure Water Boiling Point (1 atm)", value: "671.67 °R = 60.00 °Rø" }
  ],
  formula: {
    text: "Subtract 491.67 from the Rankine reading, multiply by the fraction 7/24, and add the water freezing offset of 7.5.",
    math: "T_{(^\\circ\\text{Rø})} = \\left(T_{(^\\circ\\text{R})} - 491.67\\right) \\times \\frac{7}{24} + 7.5",
    subtext: "To reverse the conversion (°Rø to °R): T_{(^\\circ\\text{R})} = (T_{(^\\circ\\text{Rø})} - 7.5) × (24 ÷ 7) + 491.67."
  },
  formulaTitle: "Rankine to Rømer Mathematical Formula",
  practicalTip: {
    title: "Celsius Intermediary Route",
    text: "If working mentally, convert Rankine to Celsius first (°C = (°R - 491.67) ÷ 1.8). Then calculate Rømer using: °Rø = (°C × 0.525) + 7.5."
  },
  expertNote: {
    title: "The Historical Lineage from Rømer to Fahrenheit",
    text: "Daniel Gabriel Fahrenheit multiplied Rømer's degree divisions by four to eliminate awkward fractions (turning 7.5 into 30 and 60 into 240), then adjusted water freezing to 32 and body temperature to 96. Translating between Rankine (Fahrenheit's absolute partner) and Rømer reveals the direct historical lineage of American temperature standards."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Room Temperature Conversion",
        subtitle: "Convert a comfortable indoor ambient temperature of 527.67 °R (68.00 °F / 20.00 °C) into Rømer degrees.",
        steps: [
          "State starting Rankine temperature: 527.67 °R.",
          "Subtract the water freezing baseline: 527.67 - 491.67 = 36.00.",
          "Multiply by 7/24: 36.00 × (7/24) = 10.50.",
          "Add the Rømer water freezing baseline: 10.50 + 7.5 = 18.00 °Rø.",
          "Result: 527.67 °R equals exactly 18.00 °Rø."
        ]
      },
      {
        title: "Example 2: Liquid Nitrogen Boiling Point",
        subtitle: "Convert the boiling point of liquid nitrogen (139.34 °R / -195.74 °C) to Rømer.",
        steps: [
          "State starting reading: 139.34 °R.",
          "Subtract 491.67: 139.34 - 491.67 = -352.33.",
          "Multiply by 7/24: -352.33 × (7/24) ≈ -102.76.",
          "Add 7.5: -102.76 + 7.5 = -95.26 °Rø.",
          "Result: 139.34 °R corresponds to approximately -95.26 °Rø."
        ]
      },
      {
        title: "Example 3: Boiling Water Verification",
        subtitle: "Convert the boiling point of pure water at standard pressure (671.67 °R) to Rømer.",
        steps: [
          "State starting temperature: 671.67 °R.",
          "Subtract 491.67: 671.67 - 491.67 = 180.00.",
          "Multiply by 7/24: 180.00 × (7/24) = 52.50.",
          "Add 7.5: 52.50 + 7.5 = 60.00 °Rø.",
          "Result: 671.67 °R equals exactly 60.00 °Rø."
        ]
      }
    ]
  },
  table: {
    title: "Rankine to Rømer Reference Table",
    headers: ["Rankine (°R)", "Rømer (°Rø)", "Celsius (°C)", "Fahrenheit (°F)", "Thermal Benchmark"],
    rows: [
      { fromVal: "0.00 °R", toVal: "-135.90 °Rø", extra: "-273.15 °C", extra2: "-459.67 °F", extra3: "Absolute zero (ground kinetic state)" },
      { fromVal: "139.34 °R", toVal: "-95.26 °Rø", extra: "-195.74 °C", extra2: "-320.33 °F", extra3: "Liquid nitrogen boiling point" },
      { fromVal: "400.00 °R", toVal: "-19.24 °Rø", extra: "-50.93 °C", extra2: "-59.67 °F", extra3: "Extreme polar cold" },
      { fromVal: "419.67 °R", toVal: "-13.50 °Rø", extra: "-40.00 °C", extra2: "-40.00 °F", extra3: "Point of equality for °C and °F" },
      { fromVal: "459.67 °R", toVal: "-1.83 °Rø", extra: "-17.78 °C", extra2: "0.00 °F", extra3: "Zero degrees Fahrenheit benchmark" },
      { fromVal: "465.96 °R", toVal: "0.00 °Rø", extra: "-14.29 °C", extra2: "6.29 °F", extra3: "Rømer scale zero point (freezing brine)" },
      { fromVal: "491.67 °R", toVal: "7.50 °Rø", extra: "0.00 °C", extra2: "32.00 °F", extra3: "Freezing point of pure water" },
      { fromVal: "500.00 °R", toVal: "9.93 °Rø", extra: "4.63 °C", extra2: "40.33 °F", extra3: "Commercial food refrigeration" },
      { fromVal: "527.67 °R", toVal: "18.00 °Rø", extra: "20.00 °C", extra2: "68.00 °F", extra3: "Standard room temperature" },
      { fromVal: "536.67 °R", toVal: "20.63 °Rø", extra: "25.00 °C", extra2: "77.00 °F", extra3: "Standard ambient laboratory temperature" },
      { fromVal: "558.27 °R", toVal: "26.93 °Rø", extra: "37.00 °C", extra2: "98.60 °F", extra3: "Average human body temperature" },
      { fromVal: "600.00 °R", toVal: "39.10 °Rø", extra: "60.19 °C", extra2: "140.33 °F", extra3: "Domestic hot water temperature" },
      { fromVal: "671.67 °R", toVal: "60.00 °Rø", extra: "100.00 °C", extra2: "212.00 °F", extra3: "Boiling point of pure water (1 atm)" },
      { fromVal: "761.67 °R", toVal: "86.25 °Rø", extra: "150.00 °C", extra2: "302.00 °F", extra3: "Confectionery syrup processing" }
    ]
  },
  applications: {
    title: "Historical & Scientific Significance",
    items: [
      {
        title: "History of Scandinavian Science",
        text: "Researchers studying 18th-century Danish and North European astronomical observatories and meteorology logs translate Ole Rømer's original observation logs into modern absolute thermodynamic scales."
      },
      {
        title: "Thermodynamic Metrology Education",
        text: "University physics curricula compare Rømer's fractional division of temperature spans against modern SI Kelvin and absolute Rankine standards to demonstrate scale derivation."
      },
      {
        title: "Antiquarian Instrument Calibration",
        text: "Museum curators and historical scientific societies calibrate rare 18th-century Northern European glass spirit thermometers marked in Rømer degrees."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Forgetting to add 7.5 at the end: Because water freezes at 7.5 °Rø (not 0 °Rø), you must add 7.5 after multiplying by 7/24.",
      "Confusing Rømer with Réaumur: The symbol for Rømer is °Rø (or °R), and its boiling point is 60. Réaumur uses °Ré, with a boiling point of 80 and a freezing point of 0.",
      "Incorrect order of operations: Always subtract 491.67 first, multiply by 7/24 second, and add 7.5 last.",
      "Applying the formula to temperature differentials (ΔT): For a temperature change, the offset of 7.5 does not apply: Δ°Rø = Δ°R × (7/24)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Rankine to Rømer?",
      answer: "Subtract 491.67 from the Rankine reading, multiply by 7/24, and add 7.5: °Rø = [(°R - 491.67) × 7 ÷ 24] + 7.5."
    },
    {
      question: "What is 0 degrees Rankine in Rømer?",
      answer: "0 °R equals approximately -135.90 °Rø, which represents absolute zero."
    },
    {
      question: "What is 491.67 Rankine in Rømer?",
      answer: "491.67 °R equals exactly 7.50 °Rø, the freezing point of pure water."
    },
    {
      question: "What is 671.67 Rankine in Rømer?",
      answer: "671.67 °R equals exactly 60.00 °Rø, the boiling point of pure water under standard atmospheric pressure."
    },
    {
      question: "Why does pure water freeze at 7.5 degrees on the Rømer scale?",
      answer: "Ole Rømer set 0 °Rø at the freezing point of brine and 60 °Rø at boiling water. Pure water froze at one-eighth of that total span, which corresponds to 7.5 °Rø."
    },
    {
      question: "Who invented the Rømer scale?",
      answer: "Danish astronomer Ole Christensen Rømer invented the scale in 1701 in Copenhagen."
    },
    {
      question: "What is room temperature (527.67 °R) in Rømer?",
      answer: "527.67 - 491.67 = 36.00. Multiplying by 7/24 gives 10.50, and adding 7.5 yields exactly 18.00 °Rø."
    },
    {
      question: "How many degrees Rankine are in 1 degree Rømer?",
      answer: "One degree Rømer equals exactly 24/7 degrees Rankine, or approximately 3.4286 °R."
    },
    {
      question: "How did Rømer influence the Fahrenheit scale?",
      answer: "Daniel Gabriel Fahrenheit visited Ole Rømer in 1708 and adapted Rømer's method, multiplying his intervals by four to eliminate fractions and refine the scale."
    },
    {
      question: "How do you convert a temperature interval from Rankine to Rømer?",
      answer: "For temperature differences, multiply the change in Rankine by 7/24 directly without adding 7.5: Δ°Rø = Δ°R × (7/24)."
    }
  ],
  relatedList: [
    { label: "Rømer to Rankine", from: "romer", to: "rankine" },
    { label: "Rankine to Celsius", from: "rankine", to: "celsius" },
    { label: "Rankine to Fahrenheit", from: "rankine", to: "fahrenheit" },
    { label: "Celsius to Rømer", from: "celsius", to: "romer" },
    { label: "Rømer to Celsius", from: "romer", to: "celsius" }
  ],
  references: [
    "Danish Royal Academy of Sciences — Historical Papers of Ole Rømer",
    "History of Thermometry (W.E. Knowles Middleton)",
    "Encyclopædia Britannica — Ole Rømer and the Invention of Thermometry"
  ]
};
