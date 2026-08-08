import { CustomArticleData } from "./types";

export const abampereToMilliampere: CustomArticleData = {
  fromUnitId: "abampere",
  toUnitId: "milliampere",
  seoTitle: "Abampere to Milliampere Converter (abA to mA)",
  metaDescription: "Convert Abamperes to Milliamperes (abA to mA) instantly. Learn the 10,000 multiplication formula, cgs-emu principles, tables, and FAQs.",
  h1: "Abampere to Milliampere Converter",
  introduction: [
    "The Abampere (abA or Biot) and Milliampere (mA) represent electric current in two distinct measurement systems: the electromagnetic centimeter-gram-second (cgs-emu) system and the modern International System of Units (SI). While cgs electrodynamics formulas use abamperes, electronic current meters and microchip datasheets express low-power currents in milliamperes.",
    "Because 1 abampere equals 10 base amperes, and 1 ampere contains 1,000 milliamperes, 1 abampere equals exactly 10,000 milliamperes. Converting abamperes to milliamperes requires multiplying the abampere current value by 10,000.",
    "This technical article details the 10,000 multiplication factor, cgs electromagnetic principles, step-by-step conversion examples, reference tables, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Abamperes to Milliamperes, multiply the current in abamperes by 10,000. For instance, 1 abA equals 10,000 mA, and 0.25 abA converts to 2,500 mA.",
    formulaDisplay: "mA = abA × 10,000",
    subtext: "1 Abampere is equal to exactly 10,000 Milliamperes."
  },
  aboutSourceUnit: {
    title: "What is an Abampere (abA / Biot)?",
    text: "The Abampere (symbol: abA or Bi) is the cgs-emu unit of electric current. Defined through magnetic force between conductors, 1 abampere produces 2 dynes per centimeter of force across parallel conductors separated by 1 cm in a vacuum."
  },
  aboutTargetUnit: {
    title: "Understanding Milliamperes (mA)",
    text: "The Milliampere (symbol: mA) is an SI decimal submultiple equal to one-thousandth of an ampere (0.001 A or 10⁻³ A). Milliamperes measure current draw in operational amplifiers, status LEDs, microcontrollers, and 4–20 mA industrial loops."
  },
  relationship: "The exact scaling factor between abamperes and milliamperes is fixed: 1 abA = 10,000 mA, and 1 mA = 0.0001 abA.",
  relationshipTitle: "Abampere to Milliampere Scale Comparisons",
  relationshipItems: [
    { label: "0.01 abA", value: "100 mA (Small circuit board power draw)" },
    { label: "0.1 abA", value: "1,000 mA (1 Ampere base SI unit)" },
    { label: "1.0 abA", value: "10,000 mA (cgs-emu fundamental baseline)" },
    { label: "5.0 abA", value: "50,000 mA (High-current laboratory magnet coil)" },
    { label: "10.0 abA", value: "100,000 mA (Industrial arc welder current)" }
  ],
  formula: {
    text: "Multiply the electric current value in Abamperes by 10,000 to determine the equivalent current in Milliamperes.",
    math: "mA = abA × 10000",
    subtext: "To convert milliamperes back to abamperes, divide the milliampere value by 10,000."
  },
  formulaTitle: "Abampere to Milliampere Formula",
  practicalTip: {
    title: "Decimal Shift Rule",
    text: "To convert abamperes to milliamperes mentally, move the decimal point four places to the right. For example, 0.15 abA becomes 1,500 mA."
  },
  expertNote: {
    title: "Electrodynamics Instrumentation",
    text: "When comparing cgs electromagnetic coil calculations with modern electronic milliammeters, multiplying cgs values in abamperes by 10,000 aligns cgs calculations with SI milliampere instrument displays."
  },
  examples: {
    title: "Step-by-Step abA to mA Worked Examples",
    items: [
      {
        title: "Example 1: Precision Electromagnet Coil",
        subtitle: "Convert 0.25 Abamperes to Milliamperes.",
        steps: [
          "Identify current in Abamperes: 0.25 abA.",
          "Apply conversion formula: mA = 0.25 × 10,000.",
          "Calculate: 0.25 × 10,000 = 2,500.",
          "Result: 0.25 Abamperes equals 2,500 Milliamperes."
        ]
      },
      {
        title: "Example 2: Physics Lab Current Sensor",
        subtitle: "Convert 0.01 Abamperes into Milliamperes.",
        steps: [
          "Identify current: 0.01 abA.",
          "Multiply by 10,000: 0.01 × 10,000 = 100.",
          "Result: 0.01 Abamperes equals 100 mA."
        ]
      },
      {
        title: "Example 3: High-Power Coil Supply",
        subtitle: "Convert 1.5 Abamperes to Milliamperes.",
        steps: [
          "Identify current: 1.5 abA.",
          "Multiply by 10,000: 1.5 × 10,000 = 15,000.",
          "Result: 1.5 Abamperes equals 15,000 mA."
        ]
      }
    ]
  },
  table: {
    title: "Abampere to Milliampere Conversion Reference Table",
    headers: ["Abamperes (abA)", "Milliamperes (mA)", "Physical Application Context"],
    rows: [
      { fromVal: "0.001 abA", toVal: "10 mA", extra: "Indicator LED forward current" },
      { fromVal: "0.01 abA", toVal: "100 mA", extra: "Small cooling fan supply current" },
      { fromVal: "0.05 abA", toVal: "500 mA", extra: "Standard USB 2.0 bus power limit" },
      { fromVal: "0.1 abA", toVal: "1,000 mA", extra: "1 Ampere bench power supply baseline" },
      { fromVal: "0.25 abA", toVal: "2,500 mA", extra: "Tablet USB fast charger rating" },
      { fromVal: "0.5 abA", toVal: "5,000 mA", extra: "High-density LED driver channel" },
      { fromVal: "1.0 abA", toVal: "10,000 mA", extra: "Fundamental cgs-emu unit equivalency" },
      { fromVal: "2.5 abA", toVal: "25,000 mA", extra: "Residential appliance branch circuit" },
      { fromVal: "5.0 abA", toVal: "50,000 mA", extra: "Industrial motor control coil current" },
      { fromVal: "10.0 abA", toVal: "100,000 mA", extra: "Industrial DC welding arc current" }
    ]
  },
  applications: {
    title: "Practical Applications of abA to mA Conversion",
    items: [
      {
        title: "Physics Educational Apparatus Design",
        text: "Educators designing tangent galvanometers calibrated in cgs abamperes convert sensor currents to milliamperes to interface with digital data loggers."
      },
      {
        title: "Historical Instrument Restoration",
        text: "Restoring antique 19th-century cgs electrometers requires converting historical abampere current ratings into modern milliamperes for digital calibration."
      },
      {
        title: "Electromagnetic Force Demonstration",
        text: "Converting cgs force calculations in dynes back to milliampere digital ammeter displays validates physical force equations."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Abamperes to Milliamperes",
    items: [
      "Dividing by 10,000 instead of multiplying: Converting from abamperes to milliamperes requires multiplying by 10,000 because 1 abA = 10,000 mA.",
      "Confusing Abamperes with Statamperes: Abamperes belong to the electromagnetic cgs system, whereas statamperes belong to the electrostatic cgs system.",
      "Miscounting zeros during mental calculations: Remember that 0.1 abA = 1,000 mA."
    ]
  },
  faqs: [
    {
      question: "How many Milliamperes are in 1 Abampere?",
      answer: "There are exactly 10,000 Milliamperes in 1 Abampere."
    },
    {
      question: "What is the formula to convert Abamperes to Milliamperes?",
      answer: "The formula is: Milliamperes = Abamperes × 10,000."
    },
    {
      question: "How many Milliamperes is 0.1 abA?",
      answer: "0.1 Abamperes equals 1,000 Milliamperes (0.1 × 10,000 = 1,000 mA)."
    },
    {
      question: "What is 1 abA in Milliamperes?",
      answer: "1 Abampere equals 10,000 Milliamperes."
    },
    {
      question: "Why does 1 abA equal 10,000 mA?",
      answer: "Because 1 abA = 10 amperes, and 1 ampere = 1,000 milliamperes; multiplying 10 by 1,000 equals 10,000 mA."
    },
    {
      question: "How do I convert 0.05 abA to mA?",
      answer: "Multiply 0.05 by 10,000 to get 500 Milliamperes."
    },
    {
      question: "Is Biot another name for Abampere?",
      answer: "Yes, Biot (Bi) is a recognized synonym for the abampere in cgs-emu physics."
    },
    {
      question: "How do I convert Milliamperes back to Abamperes?",
      answer: "Divide the current in milliamperes by 10,000 to obtain abamperes."
    }
  ],
  relatedList: [
    { label: "Milliampere to Abampere", from: "milliampere", to: "abampere" },
    { label: "Abampere to Ampere", from: "abampere", to: "ampere" },
    { label: "Abampere to Microampere", from: "abampere", to: "microampere" },
    { label: "Abampere to Kiloampere", from: "abampere", to: "kiloampere" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Jackson, J. D. Classical Electrodynamics, 3rd Edition.",
    "BIPM SI Brochure Appendix 1."
  ]
};
