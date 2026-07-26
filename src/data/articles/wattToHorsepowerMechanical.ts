import { CustomArticleData } from "./types";

export const wattToHorsepowerMechanical: CustomArticleData = {
  fromUnitId: "watt",
  toUnitId: "horsepower-mechanical",
  seoTitle: "Watt to Horsepower (Mechanical) Converter (W to hp)",
  metaDescription: "Convert Watts to Mechanical Horsepower (W to hp) accurately. Learn the 745.699872 W factor, engine power formulas, step-by-step examples, and FAQs.",
  h1: "Watt to Mechanical Horsepower Converter",
  introduction: [
    "The Watt (W) and Mechanical Horsepower (hp, also known as imperial or electric horsepower) are fundamental units used to quantify mechanical power, engine output, and electric motor capacity. While the Watt is the standard International System of Units (SI) measure equal to one Joule per second, Mechanical Horsepower is the traditional imperial power unit widely adopted in North America and the UK for rating automotive engines, industrial electric motors, and pumps.",
    "Converting Watts to Mechanical Horsepower bridges modern metric electrical specifications with imperial mechanical equipment ratings. By legal and physical definition, one mechanical horsepower equals exactly 745.6998715822702 Watts (commonly rounded to 745.7 W). Consequently, converting Watts to Mechanical Horsepower requires dividing the wattage value by 745.699872.",
    "This reference guide explains the physical definition of mechanical horsepower, presents the exact conversion formula, provides step-by-step motor sizing examples, offers comprehensive conversion tables, and clarifies technical distinctions between different horsepower definitions."
  ],
  quickAnswer: {
    text: "To convert Watts to Mechanical Horsepower (hp), divide the power value in Watts by 745.699872. For example, a 745.7 Watt motor equals 1.0 hp, and 3,728.5 Watts equals 5.0 hp.",
    formulaDisplay: "hp = W ÷ 745.699872",
    subtext: "1 Watt is equal to approximately 0.001341022 Mechanical Horsepower."
  },
  aboutSourceUnit: {
    title: "Understanding the Watt (W)",
    text: "The Watt (symbol: W) is the SI unit of power, defined as one Joule of energy expended per second (1 J/s). In electrical terms, 1 Watt is produced when a current of 1 Ampere flows across a potential difference of 1 Volt (1 W = 1 V × 1 A)."
  },
  aboutTargetUnit: {
    title: "Understanding Mechanical Horsepower (hp)",
    text: "Mechanical Horsepower (symbol: hp or hp(I)), originally defined by James Watt to compare steam engine output with draft horses, is standardized in the imperial system as 550 foot-pounds per second (550 ft·lbf/s). It equals exactly 745.6998715822702 Watts and is the standard rating unit for American automobiles, lawn care equipment, compressors, and industrial electric motors."
  },
  relationship: "The exact relationship between watts and mechanical horsepower is defined as 1 hp(I) = 745.699872 W (approx. 0.7457 kW). Conversely, 1 W ≈ 0.001341022 hp.",
  relationshipTitle: "Watt vs Mechanical Horsepower Scale",
  relationshipItems: [
    { label: "1 W", value: "0.001341 hp (Small electronic load)" },
    { label: "745.7 W", value: "1.0 hp (1 HP electric workshop motor)" },
    { label: "1,491.4 W", value: "2.0 hp (Heavy-duty air compressor motor)" },
    { label: "3,728.5 W", value: "5.0 hp (Commercial lawn tractor engine)" },
    { label: "74,570 W", value: "100.0 hp (Standard compact automobile engine)" }
  ],
  formula: {
    text: "Divide the power in Watts by 745.699872 to obtain the power in Mechanical Horsepower.",
    math: "hp = W / 745.699872",
    subtext: "To convert Mechanical Horsepower back to Watts, multiply the hp value by 745.699872."
  },
  formulaTitle: "Watt to Mechanical Horsepower Conversion Formula",
  practicalTip: {
    title: "Kilowatt Estimation Rule",
    text: "Since 1 hp is roughly 0.746 kW (or 3/4 kW), you can multiply a kilowatt rating by 1.341 to quickly estimate mechanical horsepower."
  },
  expertNote: {
    title: "Horsepower Variants Caution",
    text: "Mechanical Horsepower (745.7 W) differs slightly from Metric Horsepower (PS/ch, 735.5 W) and Boiler Horsepower (9,809.5 W). Always verify whether your specification uses imperial or metric horsepower."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Electric Motor Specification",
        subtitle: "Convert a 2,237 Watt electric water pump motor rating into Mechanical Horsepower.",
        steps: [
          "Identify power in Watts: 2,237 W.",
          "Apply formula: hp = 2,237 ÷ 745.699872.",
          "Calculate: 2,237 ÷ 745.699872 = 3.0000005.",
          "Result: 2,237 Watts equals exactly 3.0 Mechanical Horsepower."
        ]
      },
      {
        title: "Example 2: Electric Vehicle Motor Output",
        subtitle: "Convert a 150,000 Watt (150 kW) EV electric motor rating to Mechanical Horsepower.",
        steps: [
          "Identify power: 150,000 W.",
          "Divide by 745.699872: 150,000 ÷ 745.699872 = 201.153.",
          "Result: 150,000 Watts equals approximately 201.15 hp."
        ]
      },
      {
        title: "Example 3: Portable Generator Engine",
        subtitle: "Convert a 7,500 Watt generator output rating to Mechanical Horsepower.",
        steps: [
          "Identify power: 7,500 W.",
          "Divide by 745.699872: 7,500 ÷ 745.699872 = 10.0576.",
          "Result: 7,500 Watts equals approximately 10.06 hp."
        ]
      }
    ]
  },
  table: {
    title: "Watt to Mechanical Horsepower Conversion Table",
    headers: ["Watts (W)", "Mechanical Horsepower (hp)", "Kilowatt Equivalent (kW)"],
    rows: [
      { fromVal: "1 W", toVal: "0.001341 hp", extra: "0.001 kW" },
      { fromVal: "100 W", toVal: "0.134102 hp", extra: "0.1 kW" },
      { fromVal: "250 W", toVal: "0.335256 hp", extra: "0.25 kW (~1/3 hp electric bike motor)" },
      { fromVal: "500 W", toVal: "0.670511 hp", extra: "0.5 kW (~2/3 hp workshop tool)" },
      { fromVal: "745.7 W", toVal: "1.000000 hp", extra: "0.7457 kW (Standard 1 HP motor)" },
      { fromVal: "1,491.4 W", toVal: "2.000000 hp", extra: "1.4914 kW (2 HP compressor)" },
      { fromVal: "3,728.5 W", toVal: "5.000000 hp", extra: "3.7285 kW (5 HP industrial motor)" },
      { fromVal: "7,457.0 W", toVal: "10.00000 hp", extra: "7.457 kW (10 HP pump)" },
      { fromVal: "74,570 W", toVal: "100.0000 hp", extra: "74.57 kW (100 HP automotive engine)" },
      { fromVal: "372,850 W", toVal: "500.0000 hp", extra: "372.85 kW (500 HP sports car engine)" }
    ]
  },
  applications: {
    title: "Applications of W to hp Conversion",
    items: [
      {
        title: "Electric Vehicle (EV) Performance Metrics",
        text: "Automotive journalists and engineers convert battery electric vehicle motor power ratings from kilowatts/watts to horsepower to compare EV performance directly with internal combustion engines."
      },
      {
        title: "Industrial Motor Nameplate Sizing",
        text: "Electric motors manufactured under NEMA (National Electrical Manufacturers Association) standards list ratings in horsepower, requiring conversion when pairing with metric variable frequency drives (VFDs) rated in kW/W."
      },
      {
        title: "HVAC Chiller & Compressor Engineering",
        text: "Refrigeration and air conditioning compressors in North America use horsepower ratings, which mechanical engineers convert to watts to calculate electrical panel load demand."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Using Metric Horsepower (735.5 W) instead of Mechanical Horsepower (745.7 W): This introduces a ~1.4% calculation error.",
      "Confusing electrical motor input power with shaft output power: Electric motors have efficiency losses (e.g. 90% efficiency), so electrical input watts exceed shaft mechanical output watts.",
      "Dividing by 750 instead of 745.7: Using 750 as a rough shortcut is acceptable for quick estimations but unacceptable for precise engineering design."
    ]
  },
  faqs: [
    {
      question: "How many Watts are in 1 Mechanical Horsepower?",
      answer: "There are exactly 745.699872 Watts in 1 Mechanical (Imperial) Horsepower."
    },
    {
      question: "What is the formula to convert Watts to hp?",
      answer: "The formula is: hp = Watts ÷ 745.699872."
    },
    {
      question: "How many hp is 1,000 Watts (1 kW)?",
      answer: "1,000 Watts equals approximately 1.341022 Mechanical Horsepower (1,000 ÷ 745.699872)."
    },
    {
      question: "What is the difference between Mechanical hp and Metric hp?",
      answer: "Mechanical Horsepower (hp) equals 745.7 Watts (550 ft·lbf/s), whereas Metric Horsepower (PS or ch) equals 735.5 Watts (75 kgf·m/s)."
    },
    {
      question: "How many hp is a 750-Watt motor?",
      answer: "A 750-Watt motor produces approximately 1.0058 hp, which is nominally rated as a 1 HP motor."
    },
    {
      question: "How do I convert hp back to Watts?",
      answer: "Multiply the horsepower value by 745.699872 (e.g., 10 hp × 745.699872 = 7,457 W)."
    },
    {
      question: "Is 1 hp equal to 0.746 kW?",
      answer: "Yes, 1 Mechanical Horsepower is equal to approximately 0.7457 Kilowatts (745.7 W)."
    },
    {
      question: "Why are electric motors rated in both kW and hp?",
      answer: "Kilowatts follow international SI standards used in Europe and Asia, while Horsepower is traditional in North American NEMA standards."
    }
  ],
  relatedList: [
    { label: "Watt to Kilowatt", from: "watt", to: "kilowatt" },
    { label: "Watt to Horsepower (Metric)", from: "watt", to: "horsepower-metric" },
    { label: "Watt to BTU per Hour", from: "watt", to: "btu-per-hour" },
    { label: "Kilowatt to Watt", from: "kilowatt", to: "watt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "NEMA MG 1: Motors and Generators Standard."
  ]
};
