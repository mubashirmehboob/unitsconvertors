import { CustomArticleData } from "./types";

export const kilowattToBtuPerHour: CustomArticleData = {
  fromUnitId: "kilowatt",
  toUnitId: "btu-per-hour",
  seoTitle: "Kilowatt to BTU per Hour Converter (kW to BTU/h)",
  metaDescription: "Convert kilowatts to BTU per hour (kW to BTU/h) with exact HVAC precision. Learn the 3,412.142 factor, cooling and heating formulas, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilowatt-to-btu-per-hour",
  h1: "Kilowatt to BTU per Hour Converter",
  introduction: [
    "The kilowatt (kW) and British Thermal Unit per hour (BTU/h or BTU/hr) are standard units of thermal and mechanical power used globally to rate heating, ventilation, and air conditioning (HVAC) systems, heat pumps, boilers, and industrial chillers. While the kilowatt is the official International System of Units (SI) metric standard, BTU per hour remains the dominant rating unit across North American and UK residential and commercial building services.",
    "Converting kilowatts to BTU per hour connects modern metric thermal capacity with imperial climate control engineering. By international standard (ISO 80000-5 International Table definition), one BTU equals 1,055.05585 Joules. Because one kilowatt equals 1,000 Joules per second (3,600,000 Joules per hour), one kilowatt equals exactly 3,600,000 ÷ 1,055.05585 ≈ 3,412.14163 BTU/h.",
    "This comprehensive HVAC engineering guide provides the exact conversion formulas, step-by-step air conditioner and boiler sizing calculations, reference tables across residential and industrial capacities, and answers to common thermal engineering questions."
  ],
  quickAnswer: {
    text: "To convert kilowatts to BTU per hour (BTU/h), multiply the kilowatt value by 3,412.142 (or divide by 0.000293071). For example, a 3.5 kW mini-split air conditioner produces approximately 11,942.5 BTU/h (standard 12,000 BTU/h / 1 Ton rating).",
    formulaDisplay: "BTU/h = kW × 3,412.14163 = kW ÷ 0.000293071",
    subtext: "1 kilowatt is equal to approximately 3,412.142 BTU per hour (International Table standard)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilowatt (kW)",
    text: "The kilowatt (symbol: kW) is an SI decimal multiple representing 1,000 Joules of thermal or electrical energy transferred per second (1,000 J/s). In HVAC and refrigeration engineering, kilowatts represent continuous heat rejection or heat addition rate. 1 kW of thermal power sustained for one hour delivers 3.6 Megajoules (MJ) of heat."
  },
  aboutTargetUnit: {
    title: "Understanding BTU per Hour (BTU/h)",
    text: "BTU per hour (symbol: BTU/h, BTU/hr, or Btuh) is an imperial unit of thermal power indicating the rate of heat energy transfer. Defined as the rate of transferring one British Thermal Unit of heat per hour (approx. 0.293071 Watts), it is the standard rating unit for room air conditioners, residential gas furnaces, and cooling towers in the United States."
  },
  relationship: "Because 1 kilowatt = 3,600,000 Joules per hour and 1 BTU = 1,055.05585 Joules, 1 kW = 3,600,000 / 1,055.05585 ≈ 3,412.14163 BTU/h. Conversely, 1 BTU/h ≈ 0.000293071 kW.",
  relationshipTitle: "Kilowatt to BTU/h Power Equivalence",
  relationshipItems: [
    { label: "0.2931 kW", value: "1,000 BTU/h (Small space heater element)" },
    { label: "1.0 kW", value: "3,412.14 BTU/h (1 kW electric baseboard heater)" },
    { label: "3.517 kW", value: "12,000 BTU/h (1 Ton of Refrigeration)" },
    { label: "7.034 kW", value: "24,000 BTU/h (2 Ton residential AC unit)" },
    { label: "29.31 kW", value: "100,000 BTU/h (Residential gas furnace rating)" }
  ],
  formula: {
    text: "Multiply the power in kilowatts by 3,412.14163 to calculate BTU per hour.",
    math: "BTU_per_hr = kW * 3412.14163",
    subtext: "Alternatively: BTU/h = kW ÷ 0.000293071"
  },
  formulaTitle: "Kilowatt to BTU per Hour Conversion Formula",
  practicalTip: {
    title: "Quick HVAC Sizing Rule (3.5 kW ≈ 12k BTU/h)",
    text: "Every 3.5 kW of cooling capacity equals roughly 12,000 BTU/h (1 Ton of AC). For rough calculations, multiply kW by 3,400 to estimate BTU/h instantly."
  },
  expertNote: {
    title: "Cooling kW vs Electrical Power kW (COP / EER)",
    text: "A 5 kW cooling output air conditioner does not draw 5 kW of electricity. Modern heat pumps have a Coefficient of Performance (COP) of 3.5 to 4.5, drawing only 1.1 to 1.4 kW of electrical power to move 5 kW of thermal heat (17,060 BTU/h)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Mini-Split Air Conditioner Sizing",
        subtitle: "Convert a European mini-split heat pump cooling output of 5.2 kW into BTU/h.",
        steps: [
          "Identify the cooling capacity: 5.2 kW.",
          "Apply the conversion factor: BTU/h = 5.2 × 3,412.14163.",
          "Calculate: 5.2 × 3,412.14163 = 17,743.14 BTU/h.",
          "Result: 5.2 kW corresponds to an 18,000 BTU/h (1.5 Ton) class air conditioner."
        ]
      },
      {
        title: "Example 2: Residential Gas Boiler Heating Output",
        subtitle: "Convert a 24 kW combi-boiler rating into BTU per hour.",
        steps: [
          "Identify heating power: 24 kW.",
          "Multiply by 3,412.142: 24 × 3,412.142 = 81,891.4 BTU/h.",
          "Result: 24 kW equals approximately 81,891 BTU/h (approx. 80,000–85,000 BTU/h nominal)."
        ]
      },
      {
        title: "Example 3: Server Room Computer Equipment Heat Load",
        subtitle: "Convert a 15 kW data center rack power consumption into heat rejection in BTU/h.",
        steps: [
          "Identify continuous power: 15 kW.",
          "Calculate: 15 × 3,412.14163 = 51,182.12 BTU/h.",
          "Result: 15 kW of electrical load rejects 51,182 BTU/h of heat into the server room."
        ]
      }
    ]
  },
  table: {
    title: "Kilowatt to BTU per Hour Conversion Table",
    headers: ["Kilowatts (kW)", "BTU per Hour (BTU/h)", "Tons of Refrigeration (TR)", "HVAC Equipment Sizing"],
    rows: [
      { fromVal: "0.50 kW", toVal: "1,706.07 BTU/h", extra: "0.14 TR", extra2: "Small personal ceramic desk heater" },
      { fromVal: "1.00 kW", toVal: "3,412.14 BTU/h", extra: "0.28 TR", extra2: "1,000 Watt standard electric baseboard" },
      { fromVal: "2.00 kW", toVal: "6,824.28 BTU/h", extra: "0.57 TR", extra2: "Small bedroom space heater" },
      { fromVal: "2.50 kW", toVal: "8,530.35 BTU/h", extra: "0.71 TR", extra2: "9,000 BTU/h mini-split cooling unit" },
      { fromVal: "3.52 kW", toVal: "12,000.00 BTU/h", extra: "1.00 TR", extra2: "1.0 Ton of Refrigeration benchmark" },
      { fromVal: "5.00 kW", toVal: "17,060.71 BTU/h", extra: "1.42 TR", extra2: "18,000 BTU/h living room AC unit" },
      { fromVal: "7.03 kW", toVal: "24,000.00 BTU/h", extra: "2.00 TR", extra2: "2.0 Ton central residential heat pump" },
      { fromVal: "10.55 kW", toVal: "36,000.00 BTU/h", extra: "3.00 TR", extra2: "3.0 Ton whole-home air conditioner" },
      { fromVal: "14.07 kW", toVal: "48,000.00 BTU/h", extra: "4.00 TR", extra2: "4.0 Ton residential HVAC system" },
      { fromVal: "17.58 kW", toVal: "60,000.00 BTU/h", extra: "5.00 TR", extra2: "5.0 Ton large residential system" },
      { fromVal: "29.31 kW", toVal: "100,000.00 BTU/h", extra: "8.33 TR", extra2: "100,000 BTU/h high-efficiency furnace" },
      { fromVal: "70.34 kW", toVal: "240,000.00 BTU/h", extra: "20.00 TR", extra2: "Commercial rooftop package unit (RTU)" }
    ]
  },
  applications: {
    title: "Practical Applications of kW to BTU/h Conversion",
    items: [
      {
        title: "HVAC Sizing and Heat Pump Selection",
        text: "Contractors convert European heat pump output ratings published in kilowatts (EN 14511 standard) into BTU/h and Tons of Refrigeration for North American duct and coil sizing."
      },
      {
        title: "Data Center Thermal Management and Cooling Design",
        text: "Facility managers convert IT server power draw (measured in kW by smart PDUs) directly into heat rejection (BTU/h) to size computer room air handling (CRAH) units."
      },
      {
        title: "Commercial Kitchen and Boiler Plant Engineering",
        text: "Plumbing engineers calculate gas burner thermal capacities by converting boiler ratings between kW and thousands of BTU/h (MBH)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 3,412 instead of multiplying: Because 1 kW produces over 3,412 BTU/h, the BTU/h value is always thousands of times larger.",
      "Confusing BTU (energy) with BTU/h (power rate): BTU represents total accumulated heat, while BTU/h represents continuous heat rate (power).",
      "Confusing thermal cooling kilowatts (kWth) with electrical input kilowatts (kWe): Electrical power multiplied by COP gives thermal cooling output."
    ]
  },
  faqs: [
    {
      question: "How many BTU per hour are in 1 kilowatt?",
      answer: "There are approximately 3,412.142 BTU per hour in 1 kilowatt."
    },
    {
      question: "What is the formula to convert kilowatts to BTU per hour?",
      answer: "The formula is: BTU/h = kilowatts × 3,412.14163 (or BTU/h = kW ÷ 0.000293071)."
    },
    {
      question: "How many kilowatts are in 12,000 BTU/h (1 Ton AC)?",
      answer: "12,000 BTU/h equals approximately 3.51685 kilowatts of continuous cooling power."
    },
    {
      question: "How do I convert 3.5 kW to BTU/h?",
      answer: "3.5 kW × 3,412.142 = 11,942.5 BTU/h (nominally rated as a 12,000 BTU/h unit)."
    },
    {
      question: "What is the difference between kW and BTU/h?",
      answer: "The kilowatt is the SI metric unit of power (1,000 Joules per second), while BTU/h is the imperial unit of heat transfer rate (1 BTU per hour = ~0.293071 W)."
    },
    {
      question: "How do I convert BTU/h back to kilowatts?",
      answer: "Divide the BTU/h value by 3,412.142 (or multiply by 0.000293071). For example: 24,000 BTU/h ÷ 3,412.142 = 7.034 kW."
    },
    {
      question: "How many BTU/h are in 100,000 BTU gas furnace in kW?",
      answer: "A 100,000 BTU/h furnace has an equivalent thermal heat rating of approximately 29.31 kilowatts."
    },
    {
      question: "Does 1 kW of electrical heat equal 3,412 BTU/h of heat?",
      answer: "Yes. In resistive electric heating (100% efficiency), every 1 kW of electrical power converts directly into 3,412.14 BTU/h of heat."
    }
  ],
  relatedList: [
    { label: "BTU per Hour to Kilowatt", from: "btu-per-hour", to: "kilowatt" },
    { label: "Kilowatt to Calorie per Second", from: "kilowatt", to: "calorie-per-second" },
    { label: "Kilowatt to Horsepower (Mechanical)", from: "kilowatt", to: "horsepower-mechanical" },
    { label: "Kilowatt to Watt", from: "kilowatt", to: "watt" },
    { label: "Megawatt to BTU per Hour", from: "megawatt", to: "btu-per-hour" }
  ],
  references: [
    "ASHRAE Handbook - Fundamentals (SI and IP Editions).",
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
