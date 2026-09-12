import { CustomArticleData } from "./types";

export const rankineToNewton: CustomArticleData = {
  fromUnitId: "rankine",
  toUnitId: "newton",
  seoTitle: "Rankine to Newton Converter (°R to °N) - UnitsConvertors",
  metaDescription: "Convert Rankine to Newton (°R to °N) accurately. Master the (°R - 491.67) × 11/60 formula, Isaac Newton's thermometry, comparison tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/rankine-to-newton",
  h1: "Rankine to Newton Converter",
  introduction: [
    "Converting temperature from Rankine to Newton connects modern absolute engineering thermodynamics with the pioneering 18th-century work of Sir Isaac Newton. While Rankine measures thermal energy upward from absolute zero using fine-grained Fahrenheit-sized increments, the historical Newton scale benchmarks thermal conditions using linseed oil expansion calibrated between freezing and boiling water.",
    "Isaac Newton defined 0 °N as the temperature of freezing water (corresponding to 491.67 °R) and set the boiling point of pure water at exactly 33 °N (corresponding to 671.67 °R). Therefore, a span of 180 degrees Rankine equates to 33 degrees Newton, yielding an exact conversion ratio of 33/180, which reduces to the fraction 11/60. To convert Rankine to Newton, subtract 491.67 from the Rankine reading and multiply the result by 11/60 (or divide by approximately 5.4545).",
    "This guide explores the historical and mathematical foundations of both scales, presents step-by-step conversion examples, provides common reference benchmarks, and features an extensive reference table."
  ],
  quickAnswer: {
    text: "To convert Rankine to Newton, subtract 491.67 from the Rankine reading and multiply the result by 11/60 (or 33/180). For example, 491.67 °R converts to 0 °N (water freezing), 527.67 °R converts to 6.6 °N (room temperature), and 671.67 °R converts to exactly 33 °N.",
    formulaDisplay: "°N = (°R - 491.67) × (11 ÷ 60)",
    subtext: "0 °R ≈ -90.14 °N (Absolute Zero) | 491.67 °R = 0 °N | 671.67 °R = 33 °N"
  },
  aboutSourceUnit: {
    title: "Understanding the Rankine Scale (°R)",
    text: "Formulated in 1859 by Scottish civil engineer and thermodynamicist William John Macquorn Rankine, the Rankine scale is an absolute thermodynamic temperature scale. Its zero reference is absolute zero (0 °R), the state where matter possesses no extractable kinetic energy. By utilizing degree increments identical in size to the Fahrenheit degree, it allows US and British engineers to perform thermodynamic calculations without using metric units."
  },
  aboutTargetUnit: {
    title: "Understanding the Newton Temperature Scale (°N)",
    text: "Devised around 1701 by Sir Isaac Newton and published anonymously in the Royal Society's Philosophical Transactions under the title 'Scala graduum Caloris', this scale was one of the earliest systematic attempts at quantitative thermometry. Newton utilized linseed oil as the thermometric fluid and marked water freezing as 0 °N and water boiling as 33 °N. Although replaced by modern scales, Newton's scale was historically influential in inspiring Daniel Gabriel Fahrenheit's early work."
  },
  relationship: "Water freezes at 491.67 °R (0 °N) and boils at 671.67 °R (33 °N). The fundamental thermal interval between freezing and boiling water is 180 degrees Rankine versus 33 degrees Newton. Consequently, 1 degree Newton equals exactly 60/11 degrees Rankine (approximately 5.4545 °R).",
  relationshipTitle: "Rankine to Newton Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "0.00 °R ≈ -90.14 °N" },
    { label: "Water Freezing Point", value: "491.67 °R = 0.00 °N" },
    { label: "Standard Room Temperature (20 °C)", value: "527.67 °R = 6.60 °N" },
    { label: "Standard Ambient Laboratory (25 °C)", value: "536.67 °R = 8.25 °N" },
    { label: "Normal Human Body Temperature", value: "558.27 °R = 12.21 °N" },
    { label: "Water Boiling Point (1 atm)", value: "671.67 °R = 33.00 °N" },
    { label: "Melting Point of Tin (Historical benchmark)", value: "909.87 °R ≈ 76.67 °N" }
  ],
  formula: {
    text: "Subtract 491.67 from the temperature in Rankine, then multiply by the fraction 11/60 (or multiply by 33 and divide by 180).",
    math: "T_{(^\\circ\\text{N})} = \\left(T_{(^\\circ\\text{R})} - 491.67\\right) \\times \\frac{11}{60}",
    subtext: "To convert from Newton to Rankine in reverse: T_{(^\\circ\\text{R})} = (T_{(^\\circ\\text{N})} × 60/11) + 491.67."
  },
  formulaTitle: "Rankine to Newton Conversion Formula",
  practicalTip: {
    title: "Celsius Conversion Route",
    text: "An easy two-step shortcut is: first convert Rankine to Celsius (°C = (°R - 491.67) ÷ 1.8), then multiply the Celsius value by 0.33 to obtain Newton degrees."
  },
  expertNote: {
    title: "Newton's Law of Cooling & Early Thermometry",
    text: "Isaac Newton developed his temperature scale in conjunction with his famous Law of Cooling (rate of heat loss is proportional to temperature difference). Because linseed oil did not boil or freeze easily, Newton used it to estimate high temperatures, such as glowing coals and molten metals, which historians frequently recalculate into Rankine or Kelvin."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Room Temperature Conversion",
        subtitle: "A heating system maintains an indoor air temperature of 527.67 °R (68 °F or 20 °C). Determine this temperature on Newton's scale.",
        steps: [
          "Identify starting Rankine value: 527.67 °R.",
          "Subtract the water freezing baseline: 527.67 - 491.67 = 36.00.",
          "Multiply by 11/60: 36.00 × (11/60) = 6.60 °N.",
          "Result: 527.67 °R equals exactly 6.60 °N."
        ]
      },
      {
        title: "Example 2: Human Core Body Temperature",
        subtitle: "Convert average human body temperature (558.27 °R / 98.6 °F) to Newton degrees.",
        steps: [
          "State the temperature: 558.27 °R.",
          "Subtract 491.67: 558.27 - 491.67 = 66.60.",
          "Multiply by 11/60: 66.60 × (11/60) = 12.21 °N.",
          "Result: 558.27 °R corresponds to 12.21 °N (Newton originally estimated human blood at 12 °N)."
        ]
      },
      {
        title: "Example 3: Low-Temperature Winter Reading",
        subtitle: "Convert a frigid sub-zero reading of 437.12 °R (-22.55 °F) into Newton degrees.",
        steps: [
          "State the temperature: 437.12 °R.",
          "Subtract 491.67: 437.12 - 491.67 = -54.55.",
          "Multiply by 11/60: -54.55 × (11/60) ≈ -10.00 °N.",
          "Result: 437.12 °R equals approximately -10.00 °N."
        ]
      }
    ]
  },
  table: {
    title: "Rankine to Newton Reference Table",
    headers: ["Rankine (°R)", "Newton (°N)", "Celsius (°C)", "Fahrenheit (°F)", "Historical Benchmark"],
    rows: [
      { fromVal: "0.00 °R", toVal: "-90.14 °N", extra: "-273.15 °C", extra2: "-459.67 °F", extra3: "Absolute zero (ground thermodynamic state)" },
      { fromVal: "139.34 °R", toVal: "-64.61 °N", extra: "-195.74 °C", extra2: "-320.33 °F", extra3: "Liquid nitrogen boiling point" },
      { fromVal: "400.00 °R", toVal: "-16.81 °N", extra: "-50.93 °C", extra2: "-59.67 °F", extra3: "Arctic conditions" },
      { fromVal: "419.67 °R", toVal: "-13.20 °N", extra: "-40.00 °C", extra2: "-40.00 °F", extra3: "Point of equality between °C and °F" },
      { fromVal: "459.67 °R", toVal: "-5.87 °N", extra: "-17.78 °C", extra2: "0.00 °F", extra3: "Zero degrees Fahrenheit benchmark" },
      { fromVal: "491.67 °R", toVal: "0.00 °N", extra: "0.00 °C", extra2: "32.00 °F", extra3: "Freezing point of pure water" },
      { fromVal: "527.67 °R", toVal: "6.60 °N", extra: "20.00 °C", extra2: "68.00 °F", extra3: "Standard room temperature" },
      { fromVal: "536.67 °R", toVal: "8.25 °N", extra: "25.00 °C", extra2: "77.00 °F", extra3: "Standard ambient temperature" },
      { fromVal: "558.27 °R", toVal: "12.21 °N", extra: "37.00 °C", extra2: "98.60 °F", extra3: "Newton's estimate for human blood temperature (12 °N)" },
      { fromVal: "600.00 °R", toVal: "19.86 °N", extra: "60.19 °C", extra2: "140.33 °F", extra3: "Water heater temperature" },
      { fromVal: "671.67 °R", toVal: "33.00 °N", extra: "100.00 °C", extra2: "212.00 °F", extra3: "Boiling point of pure water (1 atm)" },
      { fromVal: "851.67 °R", toVal: "66.00 °N", extra: "200.00 °C", extra2: "392.00 °F", extra3: "Double boiling point reference" },
      { fromVal: "909.87 °R", toVal: "76.67 °N", extra: "232.06 °C", extra2: "449.71 °F", extra3: "Melting point of tin" }
    ]
  },
  applications: {
    title: "Academic & Historical Applications of °R to °N",
    items: [
      {
        title: "History of Physics & Science Education",
        text: "Physics historians studying Isaac Newton's early papers on the laws of heat transfer and thermometry convert his original experimental data into modern absolute Rankine and Kelvin values for comparison."
      },
      {
        title: "Museum Curation & Antique Instrument Restoration",
        text: "Curators examining rare 18th-century English scientific instruments, linseed-oil thermometers, and brass calculation scales calibrate historic markings against contemporary temperature standards."
      },
      {
        title: "Thermodynamic Pedagogy",
        text: "University physics courses use Newton's scale alongside Rankine and Kelvin to demonstrate the mathematical transition from arbitrary thermometric markers to absolute thermodynamic baselines."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying before subtracting 491.67: The offset to water's freezing point must always be subtracted before multiplying by the 11/60 ratio.",
      "Confusing the Newton temperature scale with the newton unit of force: The degree Newton (°N) measures temperature, whereas the newton (N) is the SI unit of force (1 N = 1 kg·m/s²).",
      "Using 0.33 directly on Rankine values: The factor 0.33 applies to Celsius (°N = °C × 0.33). For Rankine, the scale factor is 33/180 = 11/60 ≈ 0.18333.",
      "Assuming Newton's scale extends below absolute zero: Absolute zero occurs at -90.14 °N; lower temperatures are physically impossible."
    ]
  },
  faqs: [
    {
      question: "How do you convert Rankine to Newton?",
      answer: "Subtract 491.67 from the Rankine temperature and multiply the result by 11/60 (or 33/180): °N = (°R - 491.67) × (11 ÷ 60)."
    },
    {
      question: "What is 0 degrees Rankine in Newton?",
      answer: "0 °R equals approximately -90.14 °N, which corresponds to absolute zero (-273.15 °C or -459.67 °F)."
    },
    {
      question: "What is 491.67 Rankine in Newton?",
      answer: "491.67 °R equals exactly 0.00 °N, the freezing point of pure water."
    },
    {
      question: "What is 671.67 Rankine in Newton?",
      answer: "671.67 °R equals exactly 33.00 °N, the boiling point of pure water under standard atmospheric conditions."
    },
    {
      question: "Who invented the Newton temperature scale?",
      answer: "Sir Isaac Newton formulated the scale around 1701 using linseed oil expansion to quantify thermal gradations."
    },
    {
      question: "How many degrees Rankine are in 1 degree Newton?",
      answer: "One degree Newton equals exactly 60/11 degrees Rankine, or approximately 5.4545 °R."
    },
    {
      question: "What is standard room temperature (527.67 °R) in Newton?",
      answer: "527.67 - 491.67 = 36.00. Multiplying by 11/60 gives exactly 6.60 °N (equivalent to 20 °C or 68 °F)."
    },
    {
      question: "Why does boiling water equal 33 degrees on the Newton scale?",
      answer: "Newton calibrated the expansion of linseed oil between melting snow (0 °N) and boiling water, defining the boiling point as 33 degrees on his scale."
    },
    {
      question: "What is the difference between the degree Newton (°N) and the newton (N)?",
      answer: "The degree Newton (°N) is a historical temperature scale, whereas the newton (N) without a degree symbol is the modern SI unit of force."
    },
    {
      question: "How do you convert a temperature difference from Rankine to Newton?",
      answer: "To convert a temperature change (ΔT), multiply the Rankine change directly by 11/60 without subtracting 491.67: Δ°N = Δ°R × (11/60)."
    }
  ],
  relatedList: [
    { label: "Newton to Rankine", from: "newton", to: "rankine" },
    { label: "Rankine to Celsius", from: "rankine", to: "celsius" },
    { label: "Rankine to Fahrenheit", from: "rankine", to: "fahrenheit" },
    { label: "Celsius to Newton", from: "celsius", to: "newton" },
    { label: "Newton to Celsius", from: "newton", to: "celsius" }
  ],
  references: [
    "Philosophical Transactions of the Royal Society — 'Scala graduum Caloris' (Isaac Newton, 1701)",
    "History of the Thermometer and Its Use in Meteorology (W.E. Knowles Middleton)",
    "Encyclopædia Britannica — Isaac Newton and Early Thermometry"
  ]
};
