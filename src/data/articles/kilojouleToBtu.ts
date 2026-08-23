import { CustomArticleData } from "./types";

export const kilojouleToBtu: CustomArticleData = {
  fromUnitId: "kilojoule",
  toUnitId: "btu",
  seoTitle: "Kilojoule to BTU Converter (kJ to BTU)",
  metaDescription: "Convert kilojoules to British Thermal Units (kJ to BTU) with exact HVAC and thermodynamic precision. Formulas, step-by-step calculations, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilojoule-to-btu",
  h1: "Kilojoule to BTU Converter",
  introduction: [
    "The kilojoule (kJ) and the British Thermal Unit (BTU) are two standard units of thermal energy used extensively in heating, ventilation, air conditioning (HVAC), thermodynamics, and fuel engineering. While kilojoules represent the modern International System of Units (SI) standard across Europe and scientific research, BTUs remain the prevailing heating and cooling rating unit in the United States and the United Kingdom.",
    "Converting kilojoules to British Thermal Units allows mechanical engineers, HVAC technicians, and building energy auditors to interface metric equipment specifications with traditional imperial thermal ratings. Under the internationally standardized International Table (IT) definition, one BTU equals approximately 1.055056 kilojoules (1,055.056 Joules). Thus, one kilojoule equals approximately 0.947817 BTU.",
    "This technical guide details the mathematical formula, provides clear calculation examples, presents an extensive HVAC conversion table, discusses common engineering applications, and answers frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert kilojoules to British Thermal Units (BTU), divide the kilojoule value by 1.055056 (or multiply by approximately 0.947817). For example, 1,000 kilojoules equals approximately 947.82 BTU.",
    formulaDisplay: "BTU = kJ ÷ 1.055056 = kJ × 0.947817",
    subtext: "1 kilojoule is equal to approximately 0.947817 BTU (International Table standard)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilojoule (kJ)",
    text: "The kilojoule (symbol: kJ) is an SI decimal multiple of the Joule representing 1,000 Joules of energy. In thermal engineering, it quantifies the enthalpy of steam, refrigerants, and combustion gases. One kilojoule is equivalent to 1,000 Newtons of mechanical force exerted over a distance of one meter."
  },
  aboutTargetUnit: {
    title: "Understanding the British Thermal Unit (BTU)",
    text: "The British Thermal Unit (symbol: BTU) is a traditional imperial unit of heat defined as the amount of thermal energy required to raise the temperature of one pound of liquid water by one degree Fahrenheit at maximum water density (approx. 39.1°F). Under modern standard definitions (ISO 80000-5 / International Steam Table), 1 BTU is standardized as exactly 1,055.05585262 Joules."
  },
  relationship: "Because 1 standard BTU (IT) equals 1,055.05585 Joules (1.055056 kJ), 1 kilojoule is equivalent to 1,000 / 1,055.05585 = 0.94781712 BTU. The two units are very close in magnitude, with 1 kJ being roughly 5.2% smaller than 1 BTU.",
  relationshipTitle: "Kilojoule to BTU Scale Equivalence",
  relationshipItems: [
    { label: "1.055 kJ", value: "1 BTU (energy to heat 1 lb of water by 1°F)" },
    { label: "10 kJ", value: "9.478 BTU" },
    { label: "100 kJ", value: "94.782 BTU" },
    { label: "1,055 kJ", value: "1,000 BTU" },
    { label: "10,550 kJ", value: "10,000 BTU (cooling capacity benchmark)" }
  ],
  formula: {
    text: "Divide the energy in kilojoules by 1.055056 to convert to British Thermal Units.",
    math: "BTU = kJ / 1.055056",
    subtext: "Alternatively: BTU = kJ × 0.9478171"
  },
  formulaTitle: "Kilojoule to BTU Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "Because 1 kJ is nearly equal to 1 BTU (0.948 BTU), you can quickly estimate BTU by subtracting 5% from the kJ value. For example: 200 kJ - 5% (10) = 190 BTU (actual: 189.56 BTU)."
  },
  expertNote: {
    title: "Varieties of BTU Definitions",
    text: "While the International Table (IT) BTU (1,055.056 J) is standard in HVAC and engineering, the Thermochemical BTU equals 1,054.35 J, and the 59°F BTU equals 1,054.80 J. Our converter adheres to the official ISO 80000-5 IT standard."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Air Conditioner Cooling Rating",
        subtitle: "Convert a mini-split cooling output of 12,660 kilojoules into BTUs.",
        steps: [
          "Identify the kilojoules: 12,660 kJ.",
          "Apply the formula: BTU = 12,660 ÷ 1.055056.",
          "Calculate: 12,660 ÷ 1.055056 = 12,000 BTU.",
          "Result: 12,660 kJ equals approximately 12,000 BTU (1 Ton of refrigeration per hour)."
        ]
      },
      {
        title: "Example 2: Natural Gas Water Heater Energy",
        subtitle: "Convert 42,200 kJ of combustion heat into BTUs.",
        steps: [
          "Identify the thermal energy: 42,200 kJ.",
          "Multiply by 0.947817: 42,200 × 0.947817 = 39,997.88 BTU.",
          "Result: 42,200 kJ equals approximately 40,000 BTU."
        ]
      },
      {
        title: "Example 3: Solar Insolation Thermal Yield",
        subtitle: "Convert 5,000 kJ of collected solar heat into BTUs.",
        steps: [
          "Identify value in kJ: 5,000 kJ.",
          "Calculate: 5,000 × 0.947817 = 4,739.09 BTU.",
          "Result: 5,000 kJ equals approximately 4,739.1 BTU."
        ]
      }
    ]
  },
  table: {
    title: "Kilojoule to BTU Conversion Table",
    headers: ["Kilojoules (kJ)", "BTU (IT)", "Equivalent Joules", "HVAC / Thermal Application"],
    rows: [
      { fromVal: "1.055 kJ", toVal: "1.00 BTU", extra: "1,055 J", extra2: "Energy of burning one wooden match" },
      { fromVal: "5 kJ", toVal: "4.74 BTU", extra: "5,000 J", extra2: "Small thermal transfer experiment" },
      { fromVal: "10 kJ", toVal: "9.48 BTU", extra: "10,000 J", extra2: "Heating 1 cup of water by 40°F" },
      { fromVal: "50 kJ", toVal: "47.39 BTU", extra: "50,000 J", extra2: "Combustion of ~1 gram of propane" },
      { fromVal: "100 kJ", toVal: "94.78 BTU", extra: "100,000 J", extra2: "Portable camping stove output in 1 min" },
      { fromVal: "500 kJ", toVal: "473.91 BTU", extra: "500,000 J", extra2: "Domestic room space heater heat burst" },
      { fromVal: "1,055 kJ", toVal: "1,000.00 BTU", extra: "1,055,000 J", extra2: "1 kBtu (thousand BTU) unit mark" },
      { fromVal: "5,275 kJ", toVal: "5,000.00 BTU", extra: "5,275,000 J", extra2: "Small window air conditioner (5k BTU)" },
      { fromVal: "10,551 kJ", toVal: "10,000.00 BTU", extra: "10,550,560 J", extra2: "Medium bedroom air conditioner" },
      { fromVal: "12,661 kJ", toVal: "12,000.00 BTU", extra: "12,660,670 J", extra2: "1 Ton of Refrigeration (12k BTU/hr)" },
      { fromVal: "31,652 kJ", toVal: "30,000.00 BTU", extra: "31,651,675 J", extra2: "Residential gas furnace burner stage" },
      { fromVal: "105,506 kJ", toVal: "100,000.00 BTU", extra: "105,505,585 J", extra2: "1 Therm of Natural Gas (100,000 BTU)" }
    ]
  },
  applications: {
    title: "Practical Applications of kJ to BTU Conversion",
    items: [
      {
        title: "HVAC Sizing and Equipment Selection",
        text: "European heat pump manufacturers publish thermal capacity in kW and kJ/hr. US and UK contractors convert these to BTU/hr and Tons of Refrigeration to size residential systems."
      },
      {
        title: "Natural Gas and Propane Fuel Metering",
        text: "Combustion engineers convert higher heating values (HHV) of gaseous fuels from kJ/m³ or MJ/kg into BTU/ft³ or BTU/lb to calibrate industrial burners."
      },
      {
        title: "Building Energy Modeling (BEM)",
        text: "Architectural simulations (like EnergyPlus) calculate building heat gains in kilojoules, which mechanical contractors translate into BTUs for ductwork design."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1.055 instead of dividing: Since 1 BTU is slightly larger than 1 kJ, the numeric value in BTU must be slightly smaller than the value in kJ.",
      "Confusing BTU (energy) with BTU/hr (power rating): BTU is total accumulated heat, while BTU/hr (BTU per hour) represents thermal power rate (1 W = 3.412 BTU/hr).",
      "Overlooking BTU definition variations: Always specify the International Table (IT) standard in engineering contracts to prevent fractional discrepancies."
    ]
  },
  faqs: [
    {
      question: "How many BTUs are in 1 kilojoule?",
      answer: "There are approximately 0.947817 British Thermal Units (BTU) in 1 kilojoule."
    },
    {
      question: "What is the formula to convert kilojoules to BTUs?",
      answer: "The formula is: BTU = kilojoules ÷ 1.055056 (or BTU = kilojoules × 0.947817)."
    },
    {
      question: "How many kilojoules are in 1 BTU?",
      answer: "There are approximately 1.055056 kilojoules (1,055.056 Joules) in 1 British Thermal Unit."
    },
    {
      question: "How do I convert 10,000 kJ to BTU?",
      answer: "10,000 × 0.947817 = 9,478.17 BTU."
    },
    {
      question: "How many kilojoules are in 1 Ton of Refrigeration (12,000 BTU/hr)?",
      answer: "12,000 BTU equals approximately 12,660.67 kilojoules (or 3.517 kW of continuous cooling power)."
    },
    {
      question: "How many BTUs are in 1 Therm of natural gas?",
      answer: "One Therm contains exactly 100,000 BTUs, which is equal to 105,505.58 kilojoules (105.5 Megajoules)."
    },
    {
      question: "Can I convert BTU back to kJ easily?",
      answer: "Yes. To convert BTU back to kilojoules, multiply the BTU value by 1.055056 (e.g., 5,000 BTU × 1.055056 = 5,275.28 kJ)."
    },
    {
      question: "Why are kJ and BTU so close in value?",
      answer: "1 kJ is 1,000 Joules, while 1 BTU is approximately 1,055 Joules. Because 1,000 and 1,055 are very close, 1 kJ is about 95% of a BTU."
    }
  ],
  relatedList: [
    { label: "BTU to Kilojoule", from: "btu", to: "kilojoule" },
    { label: "Kilojoule to Kilowatt Hour", from: "kilojoule", to: "kilowatt-hour" },
    { label: "Kilojoule to Joule", from: "kilojoule", to: "joule" },
    { label: "Kilojoule to Calorie", from: "kilojoule", to: "calorie" },
    { label: "Kilojoule to Foot-Pound", from: "kilojoule", to: "foot-pound" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "ASHRAE Handbook - Fundamentals (SI and IP Editions).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
