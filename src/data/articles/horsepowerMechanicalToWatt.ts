import { CustomArticleData } from "./types";

export const horsepowerMechanicalToWatt: CustomArticleData = {
  fromUnitId: "horsepower-mechanical",
  toUnitId: "watt",
  seoTitle: "Horsepower (Mechanical) to Watt Converter (hp to W)",
  metaDescription: "Convert mechanical horsepower to watts (hp to W) with exact engineering precision. Learn the 745.699872 W factor, formula, motor ratings, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/horsepower-mechanical-to-watt",
  h1: "Horsepower (Mechanical) to Watt Converter",
  introduction: [
    "Mechanical horsepower (hp, commonly referred to as imperial horsepower) and the watt (W) are standard units of mechanical and electrical power. While horsepower has been a cornerstone of mechanical machinery, automotive engines, industrial pumps, and compressor specifications since the Industrial Revolution, the watt is the foundational unit of power in the International System of Units (SI).",
    "Converting mechanical horsepower to watts connects traditional machine power with modern electrical engineering. Formulated by James Watt to compare the working output of draft horses against steam engines, one mechanical horsepower is defined as 550 foot-pounds of work per second. In standard SI units, this translates to exactly 550 × 0.3048 × 4.4482216152605 = 745.699872 watts (commonly rounded to 745.7 W in practical calculations).",
    "This technical guide explains the conversion relationship, provides step-by-step motor calculations, offers a comprehensive engineering lookup table, reviews industrial equipment applications, and answers frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert mechanical horsepower (hp) to watts (W), multiply the horsepower value by 745.699872 (or roughly 745.7). For example, a 5 hp industrial air compressor motor requires approximately 3,728.5 W (3.73 kW) of equivalent mechanical power.",
    formulaDisplay: "W = hp × 745.699872",
    subtext: "1 mechanical horsepower is equal to approximately 745.7 watts (745.699872 W)."
  },
  aboutSourceUnit: {
    title: "Understanding Mechanical Horsepower (hp)",
    text: "Mechanical horsepower (symbol: hp) is an imperial unit of power defined as 550 foot-pounds force per second (550 ft·lbf/s or 33,000 ft·lbf/min). Widely used in the United States, Canada, and the United Kingdom, it specifies the mechanical shaft output of electric motors, internal combustion engines, and hydraulic pumps."
  },
  aboutTargetUnit: {
    title: "Understanding the Watt (W)",
    text: "The watt (symbol: W) is the coherent SI unit of power, named in honor of James Watt. One watt represents a rate of energy conversion of one Joule per second (1 J/s). It is the universal standard for rating electrical consumption, heat dissipation, and mechanical energy transfer globally."
  },
  relationship: "Because 1 foot equals 0.3048 meters and 1 pound-force equals 4.4482216152605 Newtons, 550 ft·lbf/s converts to exactly 745.699872 Joules per second (watts). Conversely, 1 watt equals approximately 0.001341022 mechanical horsepower.",
  relationshipTitle: "Horsepower to Watt Power Benchmarks",
  relationshipItems: [
    { label: "0.25 hp", value: "186.42 W (Small appliance / ventilation fan motor)" },
    { label: "0.5 hp", value: "372.85 W (Domestic garbage disposal / pool pump)" },
    { label: "1.0 hp", value: "745.70 W (Standard workshop motor benchmark)" },
    { label: "5.0 hp", value: "3,728.50 W (Commercial air compressor / hydraulic pack)" },
    { label: "10.0 hp", value: "7,457.00 W (Industrial water booster pump station)" }
  ],
  formula: {
    text: "Multiply the power in mechanical horsepower by 745.699872 to calculate watts.",
    math: "W = hp * 745.699872",
    subtext: "For quick calculations: W ≈ hp × 745.7"
  },
  formulaTitle: "Mechanical Horsepower to Watt Conversion Formula",
  practicalTip: {
    title: "The 746 Watt Rule",
    text: "In electrical trades and National Electrical Code (NEC) calculations across North America, 1 hp is frequently rounded to 746 watts. Multiplying horsepower by 746 yields an estimate accurate to within 0.04% of the exact mechanical standard."
  },
  expertNote: {
    title: "Motor Nameplate Horsepower vs Electrical Input Watts",
    text: "An electric motor's nameplate rating in horsepower indicates mechanical shaft output, not electrical power consumed. Because electric motors have finite efficiency (η ≈ 85% to 95%), a 1 hp motor draws approximately 746 ÷ 0.88 ≈ 848 watts of electrical power from the grid."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Workshop Table Saw Motor",
        subtitle: "Convert a 2 hp woodworking table saw motor rating into watts.",
        steps: [
          "Identify horsepower: 2 hp.",
          "Apply the formula: W = 2 × 745.699872.",
          "Calculate: 2 × 745.699872 = 1,491.40 W.",
          "Result: 2 hp equals approximately 1,491.4 watts (approx. 1.49 kW)."
        ]
      },
      {
        title: "Example 2: Commercial Swimming Pool Pump",
        subtitle: "Determine the wattage of a 1.5 hp continuous-duty pool circulation pump.",
        steps: [
          "State the power: 1.5 hp.",
          "Multiply: 1.5 × 745.699872 = 1,118.55 W.",
          "Result: 1.5 hp corresponds to 1,118.55 watts."
        ]
      },
      {
        title: "Example 3: Heavy Industrial Hydraulic Power Pack",
        subtitle: "Convert a 25 hp hydraulic power unit to watts.",
        steps: [
          "State the horsepower: 25 hp.",
          "Compute: 25 × 745.699872 = 18,642.50 W.",
          "Result: 25 hp equals 18,642.5 watts (18.64 kW)."
        ]
      }
    ]
  },
  table: {
    title: "Mechanical Horsepower to Watt Conversion Table",
    headers: ["Horsepower (hp)", "Watts (W)", "Kilowatts (kW)", "Equipment Application"],
    rows: [
      { fromVal: "0.10 hp", toVal: "74.57 W", extra: "0.075 kW", extra2: "Small laboratory stirrer" },
      { fromVal: "0.25 hp", toVal: "186.42 W", extra: "0.186 kW", extra2: "Exhaust ventilation fan" },
      { fromVal: "0.33 hp", toVal: "248.57 W", extra: "0.249 kW", extra2: "Basement sump pump" },
      { fromVal: "0.50 hp", toVal: "372.85 W", extra: "0.373 kW", extra2: "Kitchen food waste disposer" },
      { fromVal: "0.75 hp", toVal: "559.27 W", extra: "0.559 kW", extra2: "Residential garage door opener" },
      { fromVal: "1.00 hp", toVal: "745.70 W", extra: "0.746 kW", extra2: "Standard industrial bench motor" },
      { fromVal: "1.50 hp", toVal: "1,118.55 W", extra: "1.119 kW", extra2: "Residential swimming pool pump" },
      { fromVal: "2.00 hp", toVal: "1,491.40 W", extra: "1.491 kW", extra2: "Commercial shop air compressor" },
      { fromVal: "3.00 hp", toVal: "2,237.10 W", extra: "2.237 kW", extra2: "Commercial lawn mower engine" },
      { fromVal: "5.00 hp", toVal: "3,728.50 W", extra: "3.729 kW", extra2: "Industrial water booster pump" },
      { fromVal: "10.00 hp", toVal: "7,457.00 W", extra: "7.457 kW", extra2: "Elevator traction drive machine" },
      { fromVal: "20.00 hp", toVal: "14,913.99 W", extra: "14.914 kW", extra2: "HVAC central air handler blower" }
    ]
  },
  applications: {
    title: "Practical Applications of hp to W Conversion",
    items: [
      {
        title: "Electric Motor Sizing and Wiring",
        text: "Electricians convert motor mechanical horsepower to watts and divide by supply voltage to determine full-load ampacity (FLA) for branch circuit breakers and wire gauges."
      },
      {
        title: "HVAC and Chiller Plant Engineering",
        text: "HVAC engineers convert cooling compressor motor ratings between horsepower and watts to model electrical power draw in commercial energy audits."
      },
      {
        title: "Industrial Machine Tool Specifications",
        text: "CNC machinists and tooling engineers convert spindle motor ratings from horsepower to watts to monitor peak cutting loads and prevent spindle stall."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Dividing instead of multiplying: 1 horsepower equals roughly 746 watts; dividing produces a small decimal fraction instead of the true power rating.",
      "Confusing mechanical hp (745.7 W) with metric hp (735.5 W): While very similar, using 735.5 W for an American imperial motor understates its power by about 1.4%.",
      "Ignoring motor efficiency and power factor: The mechanical output in watts does not equal the electrical input drawn from the electrical panel. Always factor in motor efficiency (η) and power factor (PF)."
    ]
  },
  faqs: [
    {
      question: "How many watts are in 1 mechanical horsepower?",
      answer: "There are exactly 745.699872 watts (commonly rounded to 745.7 W, or 746 W in US electrical practice) in 1 mechanical horsepower."
    },
    {
      question: "What is the formula to convert mechanical horsepower to watts?",
      answer: "The formula is: watts = horsepower × 745.699872 (or W ≈ hp × 745.7)."
    },
    {
      question: "How do I convert watts to mechanical horsepower?",
      answer: "Divide the wattage by 745.699872 (or multiply by 0.001341022). For example, 1,500 W ÷ 745.7 ≈ 2.01 hp."
    },
    {
      question: "Why is 746 W often cited instead of 745.7 W?",
      answer: "746 W is the standard electrical horsepower definition adopted by the National Electrical Manufacturers Association (NEMA) and the NEC for electric motors, rounding the mechanical 745.699872 W."
    },
    {
      question: "What is 0.5 hp in watts?",
      answer: "0.5 hp × 745.699872 = 372.85 watts."
    },
    {
      question: "What is 5 hp in watts?",
      answer: "5 hp × 745.699872 = 3,728.50 watts (3.73 kW)."
    },
    {
      question: "How many watts is 1 metric horsepower (PS)?",
      answer: "1 metric horsepower (PS) equals 735.49875 watts, about 10.2 watts less than mechanical horsepower (745.70 W)."
    },
    {
      question: "Can I run a 1 hp motor on a standard 15-amp, 120-volt household circuit?",
      answer: "A 1 hp motor produces 746 W of mechanical shaft power and typically draws around 1,000 W to 1,200 W of electrical input (approx. 9.5 to 11 amps at 120 V), which operates safely within a dedicated 15 A circuit, though motor startup surge may require a slow-blow breaker."
    }
  ],
  relatedList: [
    { label: "Watt to Horsepower (Mechanical)", from: "watt", to: "horsepower-mechanical" },
    { label: "Horsepower (Mechanical) to Kilowatt", from: "horsepower-mechanical", to: "kilowatt" },
    { label: "Horsepower (Metric) to Watt", from: "horsepower-metric", to: "watt" },
    { label: "Kilowatt to Horsepower (Mechanical)", from: "kilowatt", to: "horsepower-mechanical" },
    { label: "Megawatt to Horsepower (Mechanical)", from: "megawatt", to: "horsepower-mechanical" }
  ],
  references: [
    "NEMA Standards Publication MG 1 - Motors and Generators.",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
