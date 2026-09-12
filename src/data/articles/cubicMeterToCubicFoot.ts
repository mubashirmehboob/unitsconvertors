import { CustomArticleData } from "./types";

export const cubicMeterToCubicFoot: CustomArticleData = {
  fromUnitId: "cubic-meter",
  toUnitId: "cubic-foot",
  seoTitle: "Cubic Meter to Cubic Foot Converter (m³ to ft³) - UnitsConvertors",
  metaDescription: "Convert cubic meters to cubic feet (m³ to ft³) with exact mathematical precision. HVAC airflow calculations, ocean shipping container volume, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/cubic-meter-to-cubic-foot",
  h1: "Cubic Meter to Cubic Foot Converter",
  introduction: [
    "Converting volume between cubic meters and cubic feet is a vital daily task in civil engineering, building construction, HVAC design, international freight logistics, and energy trading. While international building codes, European shipping standards, and scientific publications specify spatial capacities in cubic meters (m³), North American architects, American contractors, and maritime logistics operators measure volume in cubic feet (ft³ or cu ft).",
    "Under the 1959 International Yard and Pound Agreement, one international foot is defined as exactly 0.3048 meters. Cubing this exact linear relationship establishes that one cubic foot equals exactly 0.028316846592 cubic meters. Inversely, one cubic meter equals approximately 35.314667 cubic feet. To convert cubic meters to cubic feet, multiply the cubic meter figure by 35.31467, or divide by 0.02831685.",
    "This engineering reference explains the mathematical derivation connecting metric and imperial volume, details HVAC airflow and cargo container calculations, presents step-by-step worked examples, and includes an extensive conversion lookup table."
  ],
  quickAnswer: {
    text: "To convert cubic meters to cubic feet, multiply the volume in cubic meters by 35.314667 (or divide by 0.028316847). For example, 10 m³ equals approximately 353.15 cubic feet, while a standard 20-foot shipping container holds roughly 33.2 m³ (about 1,172 ft³).",
    formulaDisplay: "Cubic Feet (ft³) = Cubic Meters (m³) × 35.314667",
    subtext: "1 m³ ≈ 35.314667 ft³ | 1 ft³ = 0.028316846592 m³ (Exact) | 1 ft³ = 1,728 in³"
  },
  aboutSourceUnit: {
    title: "Understanding the Cubic Meter (m³)",
    text: "The cubic meter (symbol: m³) is the coherent derived unit of volume in the International System of Units (SI). It equals the volume enclosed by a cube with edges of exactly one meter. One cubic meter corresponds to 1,000 liters, 1,000,000 cubic centimeters, or approximately 1.308 cubic yards. It serves as the worldwide engineering standard for civil works, building envelopes, earthworks, and bulk industrial processing."
  },
  aboutTargetUnit: {
    title: "Understanding the Cubic Foot (ft³ / cu ft)",
    text: "The cubic foot (symbol: ft³ or cu ft) is a non-metric unit of volume in both the British Imperial and US Customary systems of measurement. Defined as the volume of a cube with sides of exactly one international foot (12 inches or 0.3048 m), one cubic foot contains exactly 1,728 cubic inches, approximately 28.3168 liters, or 7.48052 US liquid gallons. It is the dominant unit in North America for residential room volumes, natural gas metering, refrigerator capacities, and timber grading."
  },
  relationship: "Because one meter is longer than one foot (1 m ≈ 3.28084 ft), cubing this ratio produces a large volumetric expansion: 3.28084³ ≈ 35.3147. Therefore, one cubic meter occupies more than thirty-five times the physical space of a single cubic foot.",
  relationshipTitle: "Cubic Meter to Cubic Foot Volume Scale",
  relationshipItems: [
    { label: "0.02832 m³", value: "= 1.000 ft³ (exact 1,728 in³)" },
    { label: "0.1 m³", value: "≈ 3.531 ft³" },
    { label: "0.5 m³", value: "≈ 17.657 ft³ (standard residential refrigerator)" },
    { label: "1.0 m³", value: "≈ 35.315 ft³ (exact 1,000 L)" },
    { label: "2.0 m³", value: "≈ 70.629 ft³" },
    { label: "10.0 m³", value: "≈ 353.147 ft³" },
    { label: "33.2 m³", value: "≈ 1,172.45 ft³ (standard 20-ft shipping container)" },
    { label: "67.7 m³", value: "≈ 2,390.80 ft³ (standard 40-ft shipping container)" }
  ],
  formula: {
    text: "Multiply the volume in cubic meters by 35.31466672 to obtain the equivalent volume in cubic feet, or divide by the exact constant 0.028316846592.",
    math: "V_{ft^3} = V_{m^3} \\times 35.31466672 = \\frac{V_{m^3}}{0.028316846592}",
    subtext: "Conversely, to convert cubic feet to cubic meters: V_{m^3} = V_{ft^3} × 0.028316846592"
  },
  formulaTitle: "Mathematical Formula: m³ to ft³",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To mentally estimate cubic feet from cubic meters, multiply by 35 (e.g., 4 m³ × 35 = 140 ft³). To increase accuracy, add 1% to the result (140 + 1.4 = 141.4 ft³; true value is 141.26 ft³), yielding less than 0.1% error."
  },
  expertNote: {
    title: "HVAC Airflow Conversion Link",
    text: "HVAC engineers regularly convert between cubic meters per hour (m³/h) and cubic feet per minute (CFM). Because 1 m³ ≈ 35.3147 ft³ and 1 hour = 60 minutes, dividing 35.3147 by 60 gives: 1 m³/h ≈ 0.58858 CFM, or 1 CFM ≈ 1.6990 m³/h."
  },
  examples: {
    title: "Step-by-Step Engineering Examples",
    items: [
      {
        title: "Example 1: HVAC Room Ventilation Sizing",
        subtitle: "A commercial conference room measures 12 m long, 8 m wide, and 3 m high. Calculate the room air volume in cubic feet to select a US-manufactured air handler.",
        steps: [
          "Calculate volume in cubic meters: V = 12 m × 8 m × 3 m = 288 m³.",
          "Apply the conversion factor: multiply by 35.31467.",
          "Perform calculation: 288 × 35.31467 = 10,170.62 ft³.",
          "Result: The conference room envelope holds approximately 10,171 cubic feet of air space."
        ]
      },
      {
        title: "Example 2: Ocean Freight Container Utilization",
        subtitle: "A freight forwarder books 24.5 m³ (CBM) of palletized cargo in a 20-foot dry van container. Determine the volume in cubic feet.",
        steps: [
          "State the cubic meter volume: 24.5 m³.",
          "Multiply by 35.31467: 24.5 × 35.31467 = 865.209 ft³.",
          "Compare to container total capacity: A 20-ft container holds approximately 1,172 ft³ (utilization = 865.2 / 1,172 ≈ 73.8%).",
          "Result: 24.5 m³ equals approximately 865.21 cubic feet."
        ]
      },
      {
        title: "Example 3: Natural Gas Custody Transfer",
        subtitle: "A European gas pipeline terminal transfers 5,000 normal cubic meters (Nm³) of natural gas. Convert this volume to standard cubic feet (SCF).",
        steps: [
          "State the volume: 5,000 m³.",
          "Multiply by 35.31467: 5,000 × 35.31467 = 176,573.35 ft³.",
          "Result: 5,000 m³ equals approximately 176,573 cubic feet."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Meter to Cubic Foot Conversion Reference",
    headers: ["Cubic Meters (m³)", "Cubic Feet (ft³)", "US Liquid Gallons Equivalent", "Common Structural Benchmark"],
    rows: [
      { fromVal: "0.01 m³", toVal: "0.353 ft³", extra: "2.642 gal", extra2: "Small desktop computer case" },
      { fromVal: "0.05 m³", toVal: "1.766 ft³", extra: "13.209 gal", extra2: "Standard airline carry-on suitcase" },
      { fromVal: "0.1 m³", toVal: "3.531 ft³", extra: "26.417 gal", extra2: "Medium moving storage box" },
      { fromVal: "0.2 m³", toVal: "7.063 ft³", extra: "52.834 gal", extra2: "Large trunk cargo space" },
      { fromVal: "0.5 m³", toVal: "17.657 ft³", extra: "132.086 gal", extra2: "Standard residential refrigerator" },
      { fromVal: "1.0 m³", toVal: "35.315 ft³", extra: "264.172 gal", extra2: "One cubic meter (1 CBM pallet)" },
      { fromVal: "2.0 m³", toVal: "70.629 ft³", extra: "528.344 gal", extra2: "Two industrial pallets stacked" },
      { fromVal: "5.0 m³", toVal: "176.573 ft³", extra: "1,320.86 gal", extra2: "Small commercial delivery van" },
      { fromVal: "10.0 m³", toVal: "353.147 ft³", extra: "2,641.72 gal", extra2: "Compact bedroom volume" },
      { fromVal: "20.0 m³", toVal: "706.293 ft³", extra: "5,283.44 gal", extra2: "Single car garage storage bay" },
      { fromVal: "33.2 m³", toVal: "1,172.45 ft³", extra: "8,770.51 gal", extra2: "20-foot standard ocean shipping container" },
      { fromVal: "50.0 m³", toVal: "1,765.73 ft³", extra: "13,208.6 gal", extra2: "Semi-trailer partial cargo volume" },
      { fromVal: "67.7 m³", toVal: "2,390.80 ft³", extra: "17,884.4 gal", extra2: "40-foot standard ocean shipping container" },
      { fromVal: "76.4 m³", toVal: "2,698.04 ft³", extra: "20,182.7 gal", extra2: "40-foot high-cube shipping container" },
      { fromVal: "100.0 m³", toVal: "3,531.47 ft³", extra: "26,417.2 gal", extra2: "Full 53-foot North American dry van trailer" }
    ]
  },
  applications: {
    title: "Key Industry Applications",
    items: [
      {
        title: "HVAC Engineering & Building Services",
        text: "Building services engineers convert room architectural models designed in cubic meters into cubic feet to calculate volumetric air exchange rates (ACH) and fan airflow ratings in CFM."
      },
      {
        title: "Maritime Freight & Logistics",
        text: "International freight forwarders book cargo space in cubic meters (CBM) while American road hauliers, inland barge operators, and warehouses quote freight tariffs in cubic feet."
      },
      {
        title: "Natural Gas Custody Transfer",
        text: "Energy utilities convert pipeline metering between European normal cubic meters (Nm³) and North American standard cubic feet (SCF) to settle cross-border fuel supply contracts."
      },
      {
        title: "Civil Earthwork & Concrete Pouring",
        text: "Contractors working with multinational architectural firms convert concrete pour estimates and excavated soil bank volumes between cubic meters and cubic feet (or cubic yards)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Using linear foot conversion instead of volumetric: One meter equals 3.28084 feet, but one cubic meter equals 3.28084³ = 35.3147 cubic feet. Forgetting to cube the linear factor results in an error of more than 90%.",
      "Confusing cubic feet with cubic yards: One cubic yard equals exactly 27 cubic feet (0.76455 m³). Dividing by 27 is necessary when converting cubic feet into cubic yards for aggregate or ready-mix concrete.",
      "Overlooking standard temperature and pressure (STP) in gas calculations: Gas volumes in m³ (such as Nm³ at 0°C or Sm³ at 15°C) require thermodynamic pressure-temperature correction when converting to standard cubic feet (SCF at 60°F).",
      "Conflating gross internal cargo container dimensions with usable freight volume: While a 20-foot container has a gross internal volume of roughly 33.2 m³ (1,172 ft³), realistic palletized loading efficiency is typically 80% to 85% due to wall clearances and pallet geometry."
    ]
  },
  faqs: [
    {
      question: "How many cubic feet are in one cubic meter?",
      answer: "There are approximately 35.314667 cubic feet in one cubic meter. This derived value comes from the exact definition of 1 foot = 0.3048 meters: 1 / (0.3048)³ ≈ 35.3146667."
    },
    {
      question: "How do I convert cubic meters to cubic feet?",
      answer: "Multiply the volume in cubic meters by 35.314667 (or divide by 0.02831685). For example, 5 m³ multiplied by 35.314667 equals approximately 176.57 ft³."
    },
    {
      question: "How many cubic meters are in a 20-foot shipping container?",
      answer: "A standard 20-foot shipping container has an internal volume of approximately 33.2 cubic meters (CBM), which corresponds to roughly 1,172 cubic feet."
    },
    {
      question: "How many cubic feet are in a 40-foot shipping container?",
      answer: "A standard 40-foot shipping container has an internal capacity of approximately 67.7 cubic meters (about 2,391 cubic feet), while a 40-foot High Cube container holds about 76.4 cubic meters (roughly 2,698 cubic feet)."
    },
    {
      question: "What is 1 cubic foot in cubic meters?",
      answer: "One cubic foot equals exactly 0.028316846592 cubic meters (approximately 28.32 liters)."
    },
    {
      question: "How do I convert HVAC airflow from m³/h to CFM?",
      answer: "Divide the volume flow rate in m³/h by 1.699 (or multiply by 0.58858). For example, 1,000 m³/h equals approximately 588.6 CFM (cubic feet per minute)."
    },
    {
      question: "How many cubic feet of water are in 1,000 liters?",
      answer: "Because 1,000 liters equals exactly 1 cubic meter, 1,000 liters equals approximately 35.315 cubic feet."
    },
    {
      question: "How many gallons are in a cubic foot versus a cubic meter?",
      answer: "One cubic foot contains approximately 7.48 US liquid gallons, whereas one cubic meter contains approximately 264.17 US liquid gallons (about 35.3 times more)."
    },
    {
      question: "Why is 1 m³ not equal to 3.28 ft³?",
      answer: "3.28 feet is the linear measure of 1 meter. In three dimensions, you must multiply length × width × height: 3.28084 ft × 3.28084 ft × 3.28084 ft = 35.3147 ft³."
    },
    {
      question: "How many cubic feet are in 10 cubic meters?",
      answer: "10 cubic meters multiplied by 35.314667 equals approximately 353.15 cubic feet."
    }
  ],
  relatedList: [
    { label: "Cubic Foot to Cubic Meter", from: "cubic-foot", to: "cubic-meter" },
    { label: "Cubic Meter to Liter", from: "cubic-meter", to: "liter" },
    { label: "Cubic Meter to Cubic Inch", from: "cubic-meter", to: "cubic-inch" },
    { label: "Cubic Meter to Gallon (US)", from: "cubic-meter", to: "gallon-us" },
    { label: "Cubic Foot to Liter", from: "cubic-foot", to: "liter" }
  ],
  references: [
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)",
    "ISO 80000-3:2019 — Quantities and Units — Space and Time",
    "ASHRAE Handbook — Fundamentals (SI & I-P Editions)"
  ]
};
