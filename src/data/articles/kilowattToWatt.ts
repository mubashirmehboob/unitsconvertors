import { CustomArticleData } from "./types";

export const kilowattToWatt: CustomArticleData = {
  fromUnitId: "kilowatt",
  toUnitId: "watt",
  seoTitle: "Kilowatt to Watt Converter (kW to W)",
  metaDescription: "Convert Kilowatts to Watts (kW to W) instantly. Learn the 1,000 multiplier formula, electrical engineering examples, calculation steps, and FAQs.",
  h1: "Kilowatt to Watt Converter",
  introduction: [
    "The Kilowatt (kW) and Watt (W) are fundamental electrical power units in the International System of Units (SI). While utility bills, generator ratings, and electric vehicle specs are stated in Kilowatts, detailed circuit calculations, individual component power budgets, fuse ratings, and electronic design operate directly in Watts.",
    "Converting Kilowatts to Watts scales a power measurement down from the kilo level to basic single units. Because the metric prefix kilo represents a factor of 1,000, one Kilowatt equals exactly 1,000 Watts. Therefore, converting Kilowatts to Watts requires multiplying the kilowatt value by 1,000.",
    "This technical guide explains the mathematical conversion formula, provides step-by-step electrical calculation examples, offers structured reference tables, and covers practical circuit sizing applications."
  ],
  quickAnswer: {
    text: "To convert Kilowatts to Watts, multiply the power value in Kilowatts by 1,000. For example, a 2.5 kW appliance converts to 2,500 W, and a 0.75 kW motor equals 750 W.",
    formulaDisplay: "W = kW × 1,000",
    subtext: "1 Kilowatt is equal to exactly 1,000 Watts."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilowatt (kW)",
    text: "The Kilowatt (symbol: kW) is an SI multiple unit equal to 1,000 Watts or 1,000 Joules per second. It is the primary power rating unit used by electrical utilities, generator manufacturers, HVAC engineers, and EV designers."
  },
  aboutTargetUnit: {
    title: "Understanding the Watt (W)",
    text: "The Watt (symbol: W) is the standard SI derived unit of power, defined as one Joule of energy transferred per second (1 J/s). In direct current (DC) circuits, 1 Watt equals 1 Volt multiplied by 1 Ampere (1 W = 1 V × 1 A)."
  },
  relationship: "The relationship between kilowatts and watts is an exact metric scale: 1 kW = 1,000 W, and 1 W = 0.001 kW.",
  relationshipTitle: "Kilowatt vs Watt Scale Comparison",
  relationshipItems: [
    { label: "0.001 kW", value: "1 W (Small indicator LED)" },
    { label: "0.1 kW", value: "100 W (Incandescent bulb or computer load)" },
    { label: "1.0 kW", value: "1,000 W (Standard kitchen toaster or microwave)" },
    { label: "3.5 kW", value: "3,500 W (Residential air conditioner compressor)" },
    { label: "10.0 kW", value: "10,000 W (Whole-house emergency generator)" }
  ],
  formula: {
    text: "Multiply the electrical power in Kilowatts by 1,000 to obtain the equivalent power in Watts.",
    math: "W = kW * 1000",
    subtext: "To convert Watts back to Kilowatts, divide the Watt value by 1,000."
  },
  formulaTitle: "Kilowatt to Watt Conversion Formula",
  practicalTip: {
    title: "Decimal Movement Rule",
    text: "To convert Kilowatts to Watts quickly without a calculator, move the decimal point three positions to the right (e.g., 1.25 kW becomes 1,250 W)."
  },
  expertNote: {
    title: "Ohm's Law Integration",
    text: "Once you convert kW to W, you can easily find electric current in Amperes using Ohm's Law: Amps = Watts ÷ Volts. For example, 2,400 W on a 120 V line draws 20 Amperes."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Solar Inverter Output",
        subtitle: "Convert a 6.5 kW residential solar inverter rating into Watts.",
        steps: [
          "Identify power in Kilowatts: 6.5 kW.",
          "Apply formula: W = 6.5 × 1,000.",
          "Calculate: 6.5 × 1,000 = 6,500.",
          "Result: 6.5 Kilowatts equals 6,500 Watts."
        ]
      },
      {
        title: "Example 2: Portable Backup Generator",
        subtitle: "Convert a 5.0 kW generator power output to Watts.",
        steps: [
          "Identify power: 5.0 kW.",
          "Multiply by 1,000: 5.0 × 1,000 = 5,000.",
          "Result: 5.0 Kilowatts equals 5,000 Watts."
        ]
      },
      {
        title: "Example 3: Electric Heat Pump",
        subtitle: "Convert a 3.2 kW heat pump compressor draw to Watts.",
        steps: [
          "Identify power: 3.2 kW.",
          "Multiply by 1,000: 3.2 × 1,000 = 3,200.",
          "Result: 3.2 Kilowatts equals 3,200 Watts."
        ]
      }
    ]
  },
  table: {
    title: "Kilowatt to Watt Conversion Table",
    headers: ["Kilowatts (kW)", "Watts (W)", "Electrical & Appliance Context"],
    rows: [
      { fromVal: "0.001 kW", toVal: "1 W", extra: "Micro standby device load" },
      { fromVal: "0.01 kW", toVal: "10 W", extra: "LED light bulb draw" },
      { fromVal: "0.1 kW", toVal: "100 W", extra: "Laptop charger under load" },
      { fromVal: "0.5 kW", toVal: "500 W", extra: "Desktop gaming workstation" },
      { fromVal: "1.0 kW", toVal: "1,000 W", extra: "Standard 1 kW portable heater" },
      { fromVal: "1.5 kW", toVal: "1,500 W", extra: "120V household wall outlet max load" },
      { fromVal: "2.0 kW", toVal: "2,000 W", extra: "Electric clothes dryer element" },
      { fromVal: "3.5 kW", toVal: "3,500 W", extra: "Residential EV Level 1/2 charger" },
      { fromVal: "7.2 kW", toVal: "7,200 W", extra: "240V Level 2 EV wall connector" },
      { fromVal: "12.0 kW", toVal: "12,000 W", extra: "Whole-home electric tankless water heater" }
    ]
  },
  applications: {
    title: "Applications of kW to W Conversion",
    items: [
      {
        title: "Circuit Breaker & Wire Sizing",
        text: "Electricians convert total appliance kilowatt specs into watts, then divide by voltage (120V or 240V) to calculate current draw in Amperes for wire gauge selection."
      },
      {
        title: "Uninterruptible Power Supply (UPS) Sizing",
        text: "IT technicians convert server room equipment power ratings from kW to Watts to ensure battery backup UPS systems match total connected load wattage."
      },
      {
        title: "Off-Grid Solar Battery System Sizing",
        text: "Solar installers convert total daily load kW specifications into Watts to calculate battery amp-hour (Ah) requirements."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000 instead of multiplying: Moving from a larger unit (kW) to a smaller unit (W) requires multiplication by 1,000.",
      "Misplacing the decimal point when converting decimal kW values (e.g. 0.05 kW = 50 W, not 500 W).",
      "Confusing kW (power capacity) with kWh (energy consumption)."
    ]
  },
  faqs: [
    {
      question: "How many Watts are in 1 Kilowatt?",
      answer: "There are exactly 1,000 Watts in 1 Kilowatt."
    },
    {
      question: "What is the formula to convert Kilowatts to Watts?",
      answer: "The formula is: Watts = Kilowatts × 1,000."
    },
    {
      question: "How many Watts is 2.5 kW?",
      answer: "2.5 Kilowatts equals 2,500 Watts (2.5 × 1,000 = 2,500 W)."
    },
    {
      question: "How many Watts is a 0.75 kW motor?",
      answer: "A 0.75 kW motor draws 750 Watts."
    },
    {
      question: "How do I calculate Amps from kW?",
      answer: "First convert kW to Watts (multiply by 1,000), then divide by Voltage: Amps = (kW × 1,000) ÷ Volts."
    },
    {
      question: "How many Watts is a 10 kW generator?",
      answer: "A 10 kW generator produces 10,000 Watts of continuous power capacity."
    },
    {
      question: "Is 1 kW equal to 1,000 Joules per second?",
      answer: "Yes. Since 1 Watt equals 1 Joule per second, 1 Kilowatt equals 1,000 Joules per second."
    },
    {
      question: "How many Watts is 0.5 kW?",
      answer: "0.5 Kilowatts equals 500 Watts."
    }
  ],
  relatedList: [
    { label: "Watt to Kilowatt", from: "watt", to: "kilowatt" },
    { label: "Kilowatt to Megawatt", from: "kilowatt", to: "megawatt" },
    { label: "Kilowatt to Gigawatt", from: "kilowatt", to: "gigawatt" },
    { label: "Watt to Horsepower (Mechanical)", from: "watt", to: "horsepower-mechanical" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEEE Standard 268: Metric Practice Standards."
  ]
};
