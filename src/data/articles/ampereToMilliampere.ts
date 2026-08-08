import { CustomArticleData } from "./types";

export const ampereToMilliampere: CustomArticleData = {
  fromUnitId: "ampere",
  toUnitId: "milliampere",
  seoTitle: "Ampere to Milliampere Converter (A to mA)",
  metaDescription: "Convert Amperes to Milliamperes (A to mA) instantly. Learn the 1,000 multiplication formula, conversion examples, tables, and FAQs.",
  h1: "Ampere to Milliampere Converter",
  introduction: [
    "The Ampere (A) and Milliampere (mA) are standard electrical units used to quantify the rate of electric charge flow through a conductor or circuit path. In power distribution, industrial electronics, and embedded systems, current measurements frequently shift between base amperes and fractional milliamperes.",
    "Because the SI prefix 'milli' designates one-thousandth of a unit, one ampere contains exactly 1,000 milliamperes. Converting amperes to milliamperes is accomplished by multiplying the electric current value in amperes by 1,000.",
    "This technical reference provides the mathematical conversion formula between A and mA, step-by-step conversion examples, reference tables for power supplies and sensor loops, common measurement pitfalls, and technical FAQs."
  ],
  quickAnswer: {
    text: "To convert Amperes to Milliamperes, multiply the current in amperes by 1,000. For example, 0.5 A converts to 500 mA, and 2.5 A equals 2,500 mA.",
    formulaDisplay: "mA = A × 1,000",
    subtext: "1 Ampere is equal to exactly 1,000 Milliamperes."
  },
  aboutSourceUnit: {
    title: "What is an Ampere (A)?",
    text: "The Ampere (symbol: A), often shortened to 'amp', is the SI base unit of electric current. Under the redefinition of SI base units, one ampere corresponds to a flow of 1 / (1.602176634 × 10⁻¹⁹) elementary charges per second. Under the relationship P = VI, a current of 1 ampere through a 1-volt potential difference corresponds to 1 watt of electrical power."
  },
  aboutTargetUnit: {
    title: "Understanding Milliamperes (mA)",
    text: "The Milliampere (symbol: mA) is a metric submultiple equal to one-thousandth of an ampere (0.001 A or 10⁻³ A). Milliamperes are widely used across low-power microcontrollers, LED bias circuits, 4–20 mA industrial process loops, power consumption specifications, and battery discharge testing."
  },
  relationship: "The relationship between amperes and milliamperes is defined by the SI metric prefix scale: 1 A = 1,000 mA, and 1 mA = 0.001 A.",
  relationshipTitle: "Ampere to Milliampere Current Scales",
  relationshipItems: [
    { label: "0.001 A", value: "1 mA (Low-power standby current)" },
    { label: "0.02 A", value: "20 mA (Standard indicator LED forward current)" },
    { label: "0.5 A", value: "500 mA (Typical USB port power allocation)" },
    { label: "1.0 A", value: "1,000 mA (Standard 1 A current rating)" },
    { label: "2.4 A", value: "2,400 mA (High-speed charging port current limit)" }
  ],
  formula: {
    text: "Multiply the electric current value in Amperes by 1,000 to obtain the equivalent current in Milliamperes.",
    math: "mA = A × 1000",
    subtext: "To convert milliamperes back to amperes, divide the milliampere value by 1,000."
  },
  formulaTitle: "Ampere to Milliampere Formula",
  practicalTip: {
    title: "Decimal Shift Rule",
    text: "Converting amperes to milliamperes manually involves shifting the decimal point three places to the right. For instance, 0.045 A becomes 45 mA."
  },
  expertNote: {
    title: "Industrial 4–20 mA Process Loops",
    text: "In industrial automation, sensor transmitters convert physical variables (pressure, temperature, flow) into 4–20 mA current signals. A signal reader measuring 0.012 A on a multimeter corresponds directly to a 12 mA process telemetry value."
  },
  examples: {
    title: "Step-by-Step A to mA Worked Examples",
    items: [
      {
        title: "Example 1: Microcontroller Quiescent Current",
        subtitle: "Convert a 0.015 Ampere operating current to Milliamperes.",
        steps: [
          "Identify current in Amperes: 0.015 A.",
          "Apply formula: mA = 0.015 × 1,000.",
          "Calculate: 0.015 × 1,000 = 15.",
          "Result: 0.015 Amperes equals 15 Milliamperes."
        ]
      },
      {
        title: "Example 2: USB Adapter Power Output",
        subtitle: "Convert a 2.1 Ampere output into Milliamperes.",
        steps: [
          "Identify current: 2.1 A.",
          "Multiply by 1,000: 2.1 × 1,000 = 2,100.",
          "Result: 2.1 Amperes equals 2,100 mA."
        ]
      },
      {
        title: "Example 3: Bias Network Current",
        subtitle: "Convert 0.25 Amperes to Milliamperes.",
        steps: [
          "Identify current: 0.25 A.",
          "Multiply by 1,000: 0.25 × 1,000 = 250.",
          "Result: 0.25 Amperes equals 250 mA."
        ]
      }
    ]
  },
  table: {
    title: "Ampere to Milliampere Conversion Reference Table",
    headers: ["Amperes (A)", "Milliamperes (mA)", "Practical Electrical Context"],
    rows: [
      { fromVal: "0.001 A", toVal: "1 mA", extra: "Precision sensor bias current" },
      { fromVal: "0.01 A", toVal: "10 mA", extra: "Low-power LED indicator circuit" },
      { fromVal: "0.02 A", toVal: "20 mA", extra: "Standard optocoupler drive current" },
      { fromVal: "0.1 A", toVal: "100 mA", extra: "Small DC cooling fan current draw" },
      { fromVal: "0.5 A", toVal: "500 mA", extra: "USB bus power supply threshold" },
      { fromVal: "1.0 A", toVal: "1,000 mA", extra: "Typical 1 A current rating" },
      { fromVal: "2.0 A", toVal: "2,000 mA", extra: "Single-board computer power supply" },
      { fromVal: "5.0 A", toVal: "5,000 mA", extra: "High-density LED strip power rail" },
      { fromVal: "10.0 A", toVal: "10,000 mA", extra: "Automotive accessory circuit fuse rating" },
      { fromVal: "15.0 A", toVal: "15,000 mA", extra: "Residential branch circuit rating" }
    ]
  },
  applications: {
    title: "Practical Applications of A to mA Conversion",
    items: [
      {
        title: "Electronics Bench Testing",
        text: "Engineers convert power supply current readouts from amperes to milliamperes when debugging PCB standby power consumption and current draw."
      },
      {
        title: "Industrial Instrumentation Telemetry",
        text: "Maintenance technicians verify 4–20 mA current loop outputs from pressure and flow transmitters against digital multimeter readings measured in amperes."
      },
      {
        title: "Battery Capacity Comparison",
        text: "Battery specifications are often expressed in milliampere-hours (mAh), so converting a measured load current from amperes to milliamperes can make current and capacity values easier to compare."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Amperes to Milliamperes",
    items: [
      "Dividing by 1,000 instead of multiplying: Moving from a base unit (A) to a smaller submultiple (mA) requires multiplication by 1,000.",
      "Confusing current with charge: Amperes measure charge flow rate per second, whereas milliampere-hours (mAh) measure total stored electrical capacity.",
      "Ignoring multimeter shunt burden voltage: Measuring small milliampere currents on high-ampere multimeter settings can introduce measurement errors."
    ]
  },
  faqs: [
    {
      question: "How many Milliamperes are in 1 Ampere?",
      answer: "There are exactly 1,000 Milliamperes in 1 Ampere."
    },
    {
      question: "What is the formula to convert Amperes to Milliamperes?",
      answer: "The formula is: Milliamperes = Amperes × 1,000."
    },
    {
      question: "How many Milliamperes is 0.5 A?",
      answer: "0.5 Amperes equals 500 Milliamperes (0.5 × 1,000 = 500 mA)."
    },
    {
      question: "What is 2.4 A in Milliamperes?",
      answer: "2.4 Amperes equals 2,400 Milliamperes (2.4 × 1,000 = 2,400 mA)."
    },
    {
      question: "Why are battery capacities rated in mAh instead of Ah?",
      answer: "Small electronic devices draw modest currents, making milliampere-hours (mAh) a more practical unit for consumer battery capacity ratings."
    },
    {
      question: "How do I convert 0.02 A to mA?",
      answer: "Multiply 0.02 by 1,000 to obtain 20 mA."
    },
    {
      question: "Is mA an official SI unit?",
      answer: "The milliampere (mA) is an SI-derived unit formed using the SI prefix milli- with the SI base unit ampere."
    },
    {
      question: "How do I convert Milliamperes back to Amperes?",
      answer: "Divide the current in milliamperes by 1,000 to get the equivalent value in amperes."
    }
  ],
  relatedList: [
    { label: "Milliampere to Ampere", from: "milliampere", to: "ampere" },
    { label: "Ampere to Microampere", from: "ampere", to: "microampere" },
    { label: "Ampere to Kiloampere", from: "ampere", to: "kiloampere" },
    { label: "Ampere to Abampere", from: "ampere", to: "abampere" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI).",
    "IEC 60050: International Electrotechnical Vocabulary - Electric and Magnetic Circuits.",
    "BIPM SI Brochure: The International System of Units."
  ]
};
