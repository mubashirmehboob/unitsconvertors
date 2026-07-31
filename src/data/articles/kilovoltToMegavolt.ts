import { CustomArticleData } from "./types";

export const kilovoltToMegavolt: CustomArticleData = {
  fromUnitId: "kilovolt",
  toUnitId: "megavolt",
  seoTitle: "Kilovolt to Megavolt Converter (kV to MV)",
  metaDescription: "Convert Kilovolts to Megavolts (kV to MV) instantly. Learn the exact 1,000 ratio division formula, high-voltage power transmission examples, reference tables, and FAQs.",
  h1: "Kilovolt to Megavolt Converter",
  introduction: [
    "High-voltage electrical engineers and power system designers frequently convert potential measurements between Kilovolts (kV) and Megavolts (MV). When evaluating extra-high-voltage (EHV) transmission corridors, step-up transformers, or impulse generator test levels, converting kilovolts into megavolts simplifies technical documentation.",
    "Both kilovolts and megavolts are SI metric multiples based on the volt. The prefix 'kilo' represents 1,000 (10³), while 'mega' represents 1,000,000 (10⁶). Because one megavolt equals 1,000 kilovolts, converting kilovolts to megavolts requires dividing the kilovolt value by 1,000.",
    "This reference guide provides the mathematical formula for converting kV to MV, step-by-step EHV transmission line examples, reference conversion tables, grid engineering standards, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Kilovolts to Megavolts, divide the potential difference in Kilovolts by 1,000. For example, 500 kV equals 0.5 MV, and 1,000 kV equals 1.0 MV.",
    formulaDisplay: "MV = kV ÷ 1,000",
    subtext: "1 Kilovolt is equal to exactly 0.001 Megavolts."
  },
  aboutSourceUnit: {
    title: "Kilovolt (kV) Standard Definition",
    text: "The Kilovolt (symbol: kV) is a multiple unit of electric potential equal to 1,000 volts. It is the primary unit used to specify medium and high voltage ratings across utility distribution networks, industrial feeds, and regional substations."
  },
  aboutTargetUnit: {
    title: "Megavolt (MV) Standard Definition",
    text: "The Megavolt (symbol: MV) is a metric multiple equal to 1,000,000 volts or 1,000 kilovolts. Megavolts are used in ultra-high-voltage (UHV) electrical grids, linear particle accelerators, high-energy physics research, and Marx impulse generators."
  },
  relationship: "The metric ratio between kilovolts and megavolts is exact: 1 MV = 1,000 kV, and 1 kV = 0.001 MV (10⁻³ MV).",
  relationshipTitle: "Kilovolt vs Megavolt Potential Comparison",
  relationshipItems: [
    { label: "13.8 kV", value: "0.0138 MV (Distribution substation feeder line)" },
    { label: "115 kV", value: "0.115 MV (High-voltage regional transmission line)" },
    { label: "500 kV", value: "0.5 MV (Extra-high-voltage / EHV bulk grid line)" },
    { label: "765 kV", value: "0.765 MV (Standard 765 kV long-distance AC corridor)" },
    { label: "1,100 kV", value: "1.1 MV (Ultra-high-voltage / UHV direct current line)" }
  ],
  formula: {
    text: "Divide the electrical potential in Kilovolts by 1,000 to convert to Megavolts.",
    math: "MV = kV / 1000",
    subtext: "To convert megavolts back to kilovolts, multiply the megavolt value by 1,000."
  },
  formulaTitle: "Kilovolt to Megavolt Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Rule for Megavolts",
    text: "Shift the decimal point three positions to the left to convert kilovolts to megavolts. For instance, 765 kV becomes 0.765 MV."
  },
  expertNote: {
    title: "Extra-High Voltage Grid Designations",
    text: "Electrical standards classify voltages above 230 kV up to 800 kV as Extra-High Voltage (EHV), equal to 0.23 MV to 0.8 MV. Voltages exceeding 800 kV (0.8 MV) are designated as Ultra-High Voltage (UHV)."
  },
  examples: {
    title: "Step-by-Step Kilovolt to Megavolt Worked Examples",
    items: [
      {
        title: "Example 1: EHV Bulk Power Transmission Line",
        subtitle: "Convert a 500 kV regional transmission line voltage into Megavolts.",
        steps: [
          "Identify voltage in Kilovolts: 500 kV.",
          "Apply conversion formula: MV = 500 ÷ 1,000.",
          "Calculate: 500 ÷ 1,000 = 0.5.",
          "Result: 500 Kilovolts equals 0.5 Megavolts."
        ]
      },
      {
        title: "Example 2: Highest North American AC Grid Line",
        subtitle: "Convert a 765 kV transmission line rating into Megavolts.",
        steps: [
          "Identify voltage: 765 kV.",
          "Divide by 1,000: 765 ÷ 1,000 = 0.765.",
          "Result: 765 Kilovolts equals 0.765 MV."
        ]
      },
      {
        title: "Example 3: UHV DC Inter-Grid Corridor",
        subtitle: "Convert an 1,100 kV UHVDC transmission line potential to Megavolts.",
        steps: [
          "Identify voltage: 1,100 kV.",
          "Divide by 1,000: 1,100 ÷ 1,000 = 1.1.",
          "Result: 1,100 Kilovolts equals 1.1 Megavolts."
        ]
      }
    ]
  },
  table: {
    title: "Kilovolt to Megavolt Reference Table",
    headers: ["Kilovolts (kV)", "Megavolts (MV)", "High-Voltage Power & Physics Context"],
    rows: [
      { fromVal: "10 kV", toVal: "0.01 MV", extra: "Medium-voltage commercial distribution line" },
      { fromVal: "69 kV", toVal: "0.069 MV", extra: "Sub-transmission regional line" },
      { fromVal: "115 kV", toVal: "0.115 MV", extra: "High-voltage regional grid" },
      { fromVal: "230 kV", toVal: "0.23 MV", extra: "230 kV transmission standard" },
      { fromVal: "345 kV", toVal: "0.345 MV", extra: "345 kV EHV transmission line" },
      { fromVal: "500 kV", toVal: "0.5 MV", extra: "500 kV EHV regional grid backbone" },
      { fromVal: "765 kV", toVal: "0.765 MV", extra: "765 kV highest AC line voltage in North America" },
      { fromVal: "1,000 kV", toVal: "1.0 MV", extra: "1 Megavolt UHV threshold" },
      { fromVal: "1,100 kV", toVal: "1.1 MV", extra: "1,100 kV UHVDC long-distance power line" },
      { fromVal: "3,000 kV", toVal: "3.0 MV", extra: "3 MV impulse generator flashover rating" }
    ]
  },
  applications: {
    title: "Applications of kV to MV Conversion",
    items: [
      {
        title: "Ultra-High Voltage (UHV) Grid Infrastructure",
        text: "Utility planning studies report long-distance transmission capacities in megavolts when designing 800 kV and 1,100 kV UHV power corridors."
      },
      {
        title: "Linear Accelerator (LINAC) Beam Calibration",
        text: "Medical physics departments verify radiation therapy LINAC microwave electron energy levels in megavolts (e.g., 6 MV to 18 MV)."
      },
      {
        title: "High-Voltage Laboratory Impulse Testing",
        text: "Transformer insulation testing uses multi-stage Marx impulse generators rated in megavolts to simulate lightning strikes on power grid equipment."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1,000 instead of dividing: Converting from a smaller unit (kV) to a larger unit (MV) requires dividing by 1,000.",
      "Confusing Megavolts (MV) with Megawatts (MW): Megavolts measure electric potential difference, whereas Megawatts measure electric power rate.",
      "Confusing MV (Megavolts) with mV (Millivolts): Capitalization is critical—MV is 10⁶ V, whereas mV is 10⁻³ V."
    ]
  },
  faqs: [
    {
      question: "How many Kilovolts make 1 Megavolt?",
      answer: "There are exactly 1,000 Kilovolts in 1 Megavolt."
    },
    {
      question: "What is the formula to convert Kilovolts to Megavolts?",
      answer: "The formula is: Megavolts = Kilovolts ÷ 1,000."
    },
    {
      question: "How many Megavolts is 500 kV?",
      answer: "500 Kilovolts equals 0.5 Megavolts (500 ÷ 1,000 = 0.5 MV)."
    },
    {
      question: "What is 1,000 kV in Megavolts?",
      answer: "1,000 Kilovolts equals exactly 1 Megavolt."
    },
    {
      question: "How do I convert 765 kV to Megavolts?",
      answer: "Divide 765 by 1,000 to get 0.765 Megavolts."
    },
    {
      question: "What is the difference between kV and MV?",
      answer: "1 Kilovolt (kV) is 1,000 Volts, whereas 1 Megavolt (MV) is 1,000,000 Volts (or 1,000 kV)."
    },
    {
      question: "Is 230 kV equal to 0.23 MV?",
      answer: "Yes, 230 Kilovolts divided by 1,000 equals 0.23 Megavolts."
    },
    {
      question: "How do I convert Megavolts back to Kilovolts?",
      answer: "Multiply the Megavolt value by 1,000."
    }
  ],
  relatedList: [
    { label: "Volt to Megavolt", from: "volt", to: "megavolt" },
    { label: "Kilovolt to Volt", from: "kilovolt", to: "volt" },
    { label: "Kilovolt to Millivolt", from: "kilovolt", to: "millivolt" },
    { label: "Kilovolt to Microvolt", from: "kilovolt", to: "microvolt" }
  ],
  references: [
    "CIGRE Technical Brochure 580: Development of Ultra High Voltage AC & DC Transmission Systems.",
    "IEEE Std 4: IEEE Standard Techniques for High-Voltage Testing.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
