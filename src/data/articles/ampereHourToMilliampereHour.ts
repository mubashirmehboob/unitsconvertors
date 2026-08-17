import { CustomArticleData } from "./types";

export const ampereHourToMilliampereHour: CustomArticleData = {
  fromUnitId: "ampere-hour",
  toUnitId: "milliampere-hour",
  seoTitle: "Ampere-hour to Milliampere-hour Converter (Ah to mAh)",
  metaDescription: "Convert Ampere-hours to Milliampere-hours (Ah to mAh) with exact battery capacity formulas, worked electronics calculations, comparison tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/ampere-hour-to-milliampere-hour",
  h1: "Ampere-hour to Milliampere-hour Converter",
  introduction: [
    "Battery specifications across modern electronics range from heavy-duty automotive energy banks rated in Ampere-hours to compact wearable sensors rated in Milliampere-hours. Bridging these metrics is essential when comparing cell capacities or designing power distribution architectures.",
    "The Ampere-hour (Ah) is the primary commercial unit of electric charge capacity for large energy storage systems, representing one ampere of current delivered for one hour. The Milliampere-hour (mAh) represents one thousandth of an ampere-hour (10⁻³ Ah), serving as the universal standard for smartphones, drones, tablets, and portable electronics.",
    "This converter provides exact decimal conversions between Ampere-hours and Milliampere-hours, worked battery conversion examples, standard reference tables, and runtime calculation formulas for hardware engineers."
  ],
  quickAnswer: {
    text: "To convert Ampere-hours to Milliampere-hours, multiply the capacity in Ampere-hours by 1,000. For example, a 5.0 Ah power tool battery equals 5,000 mAh, and a 2.2 Ah cell equals 2,200 mAh.",
    formulaDisplay: "mAh = Ah × 1,000",
    subtext: "1 Ampere-hour is equal to exactly 1,000 Milliampere-hours (10³ mAh)."
  },
  aboutSourceUnit: {
    title: "Understanding Ampere-hours (Ah)",
    text: "An Ampere-hour (symbol: Ah or A·h) is a unit of electric charge indicating that a power source can provide a steady current of one ampere for a duration of one hour (3,600 seconds). Equal to exactly 3,600 coulombs, ampere-hours are standard in marine deep-cycle batteries, electric vehicle packs, and solar energy storage banks."
  },
  aboutTargetUnit: {
    title: "Understanding Milliampere-hours (mAh)",
    text: "A Milliampere-hour (symbol: mAh or mA·h) is a decimal fraction of the ampere-hour based on the SI prefix 'milli-' (10⁻³). One milliampere-hour equals 0.001 Ampere-hours or exactly 3.6 Coulombs. It is the dominant capacity rating for smartphone lithium-polymer pouches, 18650 cylindrical cells, and wireless consumer gadgets."
  },
  relationship: "The relationship between ampere-hours and milliampere-hours follows the metric system prefix 'milli-', which equals 1/1,000: 1 Ah = 1,000 mAh, and 1 mAh = 0.001 Ah. The conversion requires multiplying by 1,000 when moving from Ah to mAh.",
  relationshipTitle: "Ampere-hour to Milliampere-hour Common Benchmark Values",
  relationshipItems: [
    { label: "0.25 Ah", value: "250 mAh (Smart fitness band battery)" },
    { label: "1.0 Ah", value: "1,000 mAh (Base 1,000× decimal multiplier)" },
    { label: "3.5 Ah", value: "3,500 mAh (Standard 18650 high-capacity cell)" },
    { label: "5.0 Ah", value: "5,000 mAh (Flagship smartphone battery)" },
    { label: "20.0 Ah", value: "20,000 mAh (Heavy-duty USB-C power bank)" }
  ],
  formula: {
    text: "Multiply the capacity in Ampere-hours by 1,000 to determine the equivalent capacity in Milliampere-hours.",
    math: "Q_{(mAh)} = Q_{(Ah)} \\times 1000",
    subtext: "To convert milliampere-hours back to ampere-hours, divide the milliampere-hour value by 1,000."
  },
  formulaTitle: "Ampere-hour to Milliampere-hour Mathematical Formula",
  practicalTip: {
    title: "Three-Place Decimal Shift Right",
    text: "To convert Ah to mAh quickly without a calculator, shift the decimal point three places to the right. For example, 4.2 Ah becomes 4,200 mAh, and 0.85 Ah becomes 850 mAh."
  },
  expertNote: {
    title: "Evaluating Battery Pack Configurations",
    text: "When lithium cells are connected in series (S), the pack voltage increases while the Ah/mAh rating remains constant. When cells are wired in parallel (P), the voltage remains constant while the Ah/mAh capacities add together."
  },
  examples: {
    title: "Step-by-Step Ah to mAh Worked Calculations",
    items: [
      {
        title: "Example 1: Cordless Tool Battery Rating",
        subtitle: "A cordless drill battery is labeled with a capacity of 4.0 Ah. Convert this capacity to Milliampere-hours.",
        steps: [
          "Identify the capacity in Ampere-hours: Q = 4.0 Ah.",
          "Apply conversion formula: Q_(mAh) = 4.0 × 1,000.",
          "Perform calculation: 4.0 × 1,000 = 4,000.",
          "Result: 4.0 Ah equals exactly 4,000 mAh."
        ]
      },
      {
        title: "Example 2: Drone Flight Battery Pack",
        subtitle: "A quadcopter LiPo battery pack is rated at 2.2 Ah. Convert this to Milliampere-hours.",
        steps: [
          "Identify the capacity in Ampere-hours: Q = 2.2 Ah.",
          "Apply conversion formula: Q_(mAh) = 2.2 × 1,000.",
          "Perform calculation: 2.2 × 1,000 = 2,200.",
          "Result: 2.2 Ah equals exactly 2,200 mAh."
        ]
      },
      {
        title: "Example 3: Portable Field Radiometer Cell",
        subtitle: "A field instrument draws power from a 0.75 Ah internal battery. Convert this to Milliampere-hours.",
        steps: [
          "Identify the capacity in Ampere-hours: Q = 0.75 Ah.",
          "Apply conversion formula: Q_(mAh) = 0.75 × 1,000.",
          "Perform calculation: 0.75 × 1,000 = 750.",
          "Result: 0.75 Ah equals exactly 750 mAh."
        ]
      }
    ]
  },
  table: {
    title: "Ampere-hour to Milliampere-hour Conversion Table",
    headers: ["Capacity (Ampere-hours, Ah)", "Capacity (Milliampere-hours, mAh)", "Standard Consumer / Industrial Device"],
    rows: [
      { fromVal: "0.05 Ah", toVal: "50 mAh", extra: "TWS earbud rechargeable button cell" },
      { fromVal: "0.10 Ah", toVal: "100 mAh", extra: "Smart ring / stylus pen battery" },
      { fromVal: "0.25 Ah", toVal: "250 mAh", extra: "Fitness band / activity tracker cell" },
      { fromVal: "0.50 Ah", toVal: "500 mAh", extra: "Smartwatch / wearable biometric monitor" },
      { fromVal: "1.00 Ah", toVal: "1,000 mAh", extra: "Action camera rechargeable battery" },
      { fromVal: "2.00 Ah", toVal: "2,000 mAh", extra: "Entry-level 18650 cylindrical cell" },
      { fromVal: "3.50 Ah", toVal: "3,500 mAh", extra: "High-capacity Panasonic/Sanyo 18650 cell" },
      { fromVal: "5.00 Ah", toVal: "5,000 mAh", extra: "Flagship Android smartphone / 21700 cell" },
      { fromVal: "10.00 Ah", toVal: "10,000 mAh", extra: "Compact pocket travel power bank" },
      { fromVal: "20.00 Ah", toVal: "20,000 mAh", extra: "High-output USB-C laptop power bank" },
      { fromVal: "50.00 Ah", toVal: "50,000 mAh", extra: "Camping portable power station battery" },
      { fromVal: "100.00 Ah", toVal: "100,000 mAh", extra: "12V 100Ah LiFePO4 RV deep-cycle battery" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Consumer Electronics Sourcing & Procurement",
        text: "Product engineers convert cell data sheets specified in Ah (e.g., 3.2 Ah) to mAh (3,200 mAh) to align with standard consumer packaging and marketing specifications."
      },
      {
        title: "Device Operating Runtime Estimation",
        text: "Converting Ah to mAh allows developers to calculate runtime directly against microcontroller average current draw in mA: Runtime (h) = Capacity (mAh) ÷ Current (mA)."
      },
      {
        title: "Battery Charger Current Setting (C-Rate)",
        text: "Setting charging currents on programmable bench chargers requires converting pack ratings: A 2.5 Ah (2,500 mAh) cell charged at 0.5C requires exactly 1,250 mA of charge current."
      },
      {
        title: "Power Bank Airline Compliance (FAA / TSA)",
        text: "Aviation rules restrict carry-on power banks to 100 Watt-hours (Wh). Engineers convert power bank mAh ratings (e.g., 26,800 mAh at 3.7V = 99.16 Wh) to verify regulatory compliance."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Converting 5 Ah to mAh requires multiplying by 1,000 (5,000 mAh), not dividing into 0.005 mAh.",
      "Assuming equivalent energy across voltages: A 10,000 mAh power bank at 3.7V (37 Wh) holds much less energy than a 10 Ah motorcycle battery at 12V (120 Wh).",
      "Ignoring usable Depth of Discharge (DoD): Lead-acid batteries should only discharge 50% of rated mAh, whereas LiFePO4 can safely discharge 80% to 90%.",
      "Confusing nominal cell voltage with USB output voltage: A 20,000 mAh internal 3.7V cell bank provides roughly 14,800 mAh when stepped up to 5V (accounting for DC-DC converter efficiency)."
    ]
  },
  faqs: [
    {
      question: "How many Milliampere-hours (mAh) are in one Ampere-hour (Ah)?",
      answer: "There are exactly 1,000 Milliampere-hours in one Ampere-hour (1 Ah = 1,000 mAh). Conversely, 1 mAh equals 0.001 Ah."
    },
    {
      question: "What is the formula to convert Ah to mAh?",
      answer: "The formula is: Capacity in mAh = Capacity in Ah × 1,000. For example, 4.5 Ah × 1,000 = 4,500 mAh."
    },
    {
      question: "Is a 5 Ah battery the same as a 5000 mAh battery?",
      answer: "Yes, 5 Ah and 5,000 mAh are identical charge capacities (5 × 1,000 = 5,000)."
    },
    {
      question: "How do I calculate device battery life from mAh?",
      answer: "Divide the battery capacity in mAh by the average current consumption in mA: Battery Life (hours) = Battery Capacity (mAh) ÷ Average Current (mA)."
    },
    {
      question: "How do I convert mAh to Watt-hours (Wh)?",
      answer: "Multiply the capacity in mAh by the battery voltage in Volts (V), then divide by 1,000: Wh = (mAh × V) ÷ 1,000. For example, a 5,000 mAh cell at 3.7V equals (5,000 × 3.7) ÷ 1,000 = 18.5 Wh."
    },
    {
      question: "Why do phone batteries use mAh while car batteries use Ah?",
      answer: "Phone batteries draw low currents in milliamperes (mA), making mAh the convenient numerical scale (e.g., 4,000 mAh). Car batteries supply tens or hundreds of amperes, making Ah the practical scale (e.g., 70 Ah)."
    },
    {
      question: "How many Coulombs are in 1,000 mAh?",
      answer: "Because 1 mAh = 3.6 Coulombs, 1,000 mAh (1 Ah) contains exactly 3,600 Coulombs."
    },
    {
      question: "What is the C-rate of a battery?",
      answer: "The C-rate measures discharge rate relative to maximum capacity. A 1C discharge rate on a 3,000 mAh (3 Ah) battery equals a continuous discharge current of 3,000 mA (3 A), discharging the battery in 1 hour."
    }
  ],
  relatedList: [
    { label: "Milliampere-hour to Ampere-hour", from: "milliampere-hour", to: "ampere-hour" },
    { label: "Ampere-hour to Coulomb", from: "ampere-hour", to: "coulomb" },
    { label: "Coulomb to Milliampere-hour", from: "coulomb", to: "milliampere-hour" },
    { label: "Ampere-hour to Kilocoulomb", from: "ampere-hour", to: "kilocoulomb" },
    { label: "Ampere-hour to Faraday", from: "ampere-hour", to: "faraday" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition (2019)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "IEC 61960 - Secondary cells and batteries containing alkaline or other non-acid electrolytes",
    "IEEE Std 1625 - Standard for Rechargeable Batteries for Multi-Cell Mobile Computing Devices"
  ]
};
