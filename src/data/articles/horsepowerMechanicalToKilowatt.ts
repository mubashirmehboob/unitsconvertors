import { CustomArticleData } from "./types";

export const horsepowerMechanicalToKilowatt: CustomArticleData = {
  fromUnitId: "horsepower-mechanical",
  toUnitId: "kilowatt",
  seoTitle: "Horsepower (Mechanical) to Kilowatt Converter (hp to kW)",
  metaDescription: "Convert mechanical horsepower to kilowatts (hp to kW) with precision. Formula, calculation steps, electric motor tables, automotive ratings, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/horsepower-mechanical-to-kilowatt",
  h1: "Horsepower (Mechanical) to Kilowatt Converter",
  introduction: [
    "Mechanical horsepower (hp) and the kilowatt (kW) are the two most prominent units used worldwide to rate the power of electric motors, automotive internal combustion engines, industrial pumps, and power transmission machinery. While mechanical horsepower remains standard in North America and parts of the automotive world, the kilowatt is the official International System of Units (SI) measure across global engineering and commerce.",
    "Converting mechanical horsepower to kilowatts is a foundational engineering calculation. Defined historically by James Watt as 550 foot-pounds per second, one imperial mechanical horsepower equals exactly 745.699872 watts, which equates to exactly 0.745699872 kilowatts (commonly rounded to 0.7457 kW or 0.746 kW in electrical trades). Conversely, one kilowatt equals approximately 1.341022 mechanical horsepower.",
    "This technical guide explains the conversion relationship, provides step-by-step motor sizing examples, presents a detailed reference table covering equipment from household pumps to multi-megawatt industrial drives, reviews practical applications, and answers frequent conversion questions."
  ],
  quickAnswer: {
    text: "To convert mechanical horsepower (hp) to kilowatts (kW), multiply the horsepower value by 0.745699872 (or roughly 0.7457). For example, a 10 hp industrial motor produces approximately 7.457 kW of mechanical shaft power.",
    formulaDisplay: "kW = hp × 0.745699872",
    subtext: "1 mechanical horsepower is equal to approximately 0.7457 kilowatts (or 0.746 kW in electrical motor sizing)."
  },
  aboutSourceUnit: {
    title: "Understanding Mechanical Horsepower (hp)",
    text: "Mechanical horsepower (symbol: hp), also known as imperial horsepower, is an imperial unit of power defined as 550 foot-pounds force per second (550 ft·lbf/s). It is the customary unit for rating automotive engines, outboard boat motors, lawn tractors, and commercial pump drives in the United States and Canada."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilowatt (kW)",
    text: "The kilowatt (symbol: kW) is an SI decimal multiple of the watt equal to 1,000 watts (1,000 Joules per second). It is the international standard for rating electrical motor power, electric vehicle (EV) drive units, renewable energy systems, and commercial HVAC equipment worldwide."
  },
  relationship: "Because 1 mechanical hp equals 745.699872 watts and 1 kilowatt equals 1,000 watts, dividing 745.699872 by 1,000 gives 0.745699872 kW per horsepower. Conversely, 1 kW = 1,000 ÷ 745.699872 ≈ 1.341022 hp.",
  relationshipTitle: "Horsepower to Kilowatt Power Benchmarks",
  relationshipItems: [
    { label: "1 hp", value: "0.7457 kW (Standard 1 hp workshop motor)" },
    { label: "5 hp", value: "3.7285 kW (Commercial air compressor / pressure washer)" },
    { label: "25 hp", value: "18.6425 kW (Agricultural irrigation pump)" },
    { label: "100 hp", value: "74.5700 kW (Industrial refrigeration screw compressor)" },
    { label: "300 hp", value: "223.7099 kW (Commercial truck or heavy marine diesel engine)" }
  ],
  formula: {
    text: "Multiply the power in mechanical horsepower by 0.745699872 (or divide by 1.341022) to obtain kilowatts.",
    math: "kW = hp * 0.745699872",
    subtext: "For everyday estimation: kW ≈ hp × 0.746"
  },
  formulaTitle: "Mechanical Horsepower to Kilowatt Formula",
  practicalTip: {
    title: "The Three-Quarters Rule (0.75 kW per hp)",
    text: "For quick mental calculations on job sites, remember that 1 horsepower is roughly 0.75 kW (three-quarters of a kilowatt). Multiply horsepower by 3 and divide by 4 to get a quick estimate within 0.5% (e.g., 20 hp × 0.75 = 15 kW; exact: 14.91 kW)."
  },
  expertNote: {
    title: "Shaft Power vs Electrical Infeed Power",
    text: "Remember that motor nameplates state mechanical output power at the shaft. Due to motor efficiency (typical IE3 premium efficiency is 91% to 94%), a 10 hp (7.46 kW shaft) motor draws about 7.46 ÷ 0.925 ≈ 8.06 kW of electrical power from the grid."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Agricultural Irrigation Pump",
        subtitle: "Convert a 15 hp diesel irrigation water pump to kilowatts.",
        steps: [
          "State the horsepower: 15 hp.",
          "Apply the conversion factor: kW = 15 × 0.745699872.",
          "Multiply: 15 × 0.745699872 = 11.1855 kW.",
          "Result: 15 hp equals approximately 11.19 kilowatts."
        ]
      },
      {
        title: "Example 2: Electric Vehicle Motor Comparison",
        subtitle: "Convert a 280 hp sports car motor rating into kilowatts.",
        steps: [
          "Identify horsepower: 280 hp.",
          "Multiply: 280 × 0.745699872 = 208.796 kW.",
          "Result: 280 hp equals approximately 208.8 kilowatts."
        ]
      },
      {
        title: "Example 3: Heavy Industrial Chiller Compressor",
        subtitle: "Convert a 150 hp HVAC centrifugal chiller compressor to kilowatts.",
        steps: [
          "Identify power: 150 hp.",
          "Calculate: 150 × 0.745699872 = 111.855 kW.",
          "Result: 150 hp corresponds to 111.855 kilowatts."
        ]
      }
    ]
  },
  table: {
    title: "Mechanical Horsepower to Kilowatt Conversion Table",
    headers: ["Horsepower (hp)", "Kilowatts (kW)", "Metric Horsepower (PS)", "Typical Machinery Application"],
    rows: [
      { fromVal: "0.5 hp", toVal: "0.373 kW", extra: "0.507 PS", extra2: "Small workshop drill press" },
      { fromVal: "1.0 hp", toVal: "0.746 kW", extra: "1.014 PS", extra2: "Standard industrial bench grinder" },
      { fromVal: "2.0 hp", toVal: "1.491 kW", extra: "2.028 PS", extra2: "Table saw or garage air compressor" },
      { fromVal: "3.0 hp", toVal: "2.237 kW", extra: "3.042 PS", extra2: "Pressure washer or dust collector" },
      { fromVal: "5.0 hp", toVal: "3.728 kW", extra: "5.069 PS", extra2: "Hydraulic car lift power pack" },
      { fromVal: "7.5 hp", toVal: "5.593 kW", extra: "7.604 PS", extra2: "Commercial paint booth exhaust fan" },
      { fromVal: "10.0 hp", toVal: "7.457 kW", extra: "10.139 PS", extra2: "Commercial car wash high-pressure pump" },
      { fromVal: "20.0 hp", toVal: "14.914 kW", extra: "20.277 PS", extra2: "Municipal wastewater lift station pump" },
      { fromVal: "50.0 hp", toVal: "37.285 kW", extra: "50.694 PS", extra2: "Rock crusher or industrial extruder" },
      { fromVal: "100.0 hp", toVal: "74.570 kW", extra: "101.387 PS", extra2: "Rotary screw air compressor station" },
      { fromVal: "200.0 hp", toVal: "149.140 kW", extra: "202.774 PS", extra2: "Mining slurry transport pump" },
      { fromVal: "500.0 hp", toVal: "372.850 kW", extra: "506.935 PS", extra2: "Large municipal water treatment main pump" }
    ]
  },
  applications: {
    title: "Practical Applications of hp to kW Conversion",
    items: [
      {
        title: "Electric Vehicle (EV) Powertrain Comparison",
        text: "Automotive engineers and consumers convert traditional internal combustion engine ratings in horsepower to electric drive ratings in kilowatts to assess performance parity."
      },
      {
        title: "Variable Frequency Drive (VFD) Inverter Selection",
        text: "Industrial automation specialists convert pump and fan motor horsepower ratings to kilowatts to select properly sized variable frequency drive inverters and thermal overload relays."
      },
      {
        title: "International Equipment Procurement",
        text: "Plant managers importing machinery between North America (NEMA standards in hp) and Europe/Asia (IEC standards in kW) convert shaft ratings to ensure cross-compatibility."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Multiplying by 1.341 instead of dividing: 1 hp is less than 1 kW (approx. 0.746 kW). Multiplying by 1.341 yields a larger number, which is the inverse conversion (kW to hp).",
      "Confusing mechanical horsepower with metric horsepower (PS): 1 mechanical hp = 0.7457 kW, whereas 1 metric hp = 0.7355 kW. Using the wrong factor causes a 1.4% error.",
      "Confusing electrical input kW with mechanical shaft kW: Mechanical shaft kW must be divided by motor efficiency to find the total electrical power drawn from the mains."
    ]
  },
  faqs: [
    {
      question: "How many kilowatts are in 1 mechanical horsepower?",
      answer: "There are approximately 0.745699872 kilowatts (commonly rounded to 0.7457 kW or 0.746 kW) in 1 mechanical horsepower."
    },
    {
      question: "What is the formula to convert horsepower to kilowatts?",
      answer: "The formula is: kilowatts = horsepower × 0.745699872 (or kW ≈ hp × 0.746)."
    },
    {
      question: "How do I convert kilowatts to horsepower?",
      answer: "Multiply kilowatts by 1.341022 (or divide by 0.745699872). For example, 15 kW × 1.341022 ≈ 20.12 hp."
    },
    {
      question: "What is 10 hp in kilowatts?",
      answer: "10 hp × 0.745699872 = 7.457 kilowatts (approx. 7.46 kW)."
    },
    {
      question: "What is 100 hp in kilowatts?",
      answer: "100 hp × 0.745699872 = 74.57 kilowatts."
    },
    {
      question: "Is 1 hp exactly equal to 0.75 kW?",
      answer: "No, 1 hp is approximately 0.7457 kW. Using 0.75 kW is a convenient rule of thumb that is within 0.58% of the exact value."
    },
    {
      question: "What is the difference between mechanical hp and metric hp in kilowatts?",
      answer: "1 mechanical hp equals 0.7457 kW (745.7 W), while 1 metric hp (PS) equals 0.7355 kW (735.5 W). Metric horsepower is roughly 1.37% smaller."
    },
    {
      question: "Why do European car specs list kW while American specs list hp?",
      answer: "European Union regulations require power to be stated in official SI units (kW), although PS is frequently mentioned alongside it. The United States continues to use mechanical horsepower as standard for automotive and industrial machinery."
    }
  ],
  relatedList: [
    { label: "Kilowatt to Horsepower (Mechanical)", from: "kilowatt", to: "horsepower-mechanical" },
    { label: "Horsepower (Mechanical) to Watt", from: "horsepower-mechanical", to: "watt" },
    { label: "Horsepower (Metric) to Kilowatt", from: "horsepower-metric", to: "kilowatt" },
    { label: "Horsepower (Mechanical) to Megawatt", from: "horsepower-mechanical", to: "megawatt" },
    { label: "Kilowatt to Horsepower (Metric)", from: "kilowatt", to: "horsepower-metric" }
  ],
  references: [
    "IEC 60034-1 - Rotating electrical machines - Rating and performance.",
    "NEMA MG 1 - Motors and Generators.",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
