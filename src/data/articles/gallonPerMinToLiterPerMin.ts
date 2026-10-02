import { CustomArticleData } from "./types";

export const gallonPerMinToLiterPerMin: CustomArticleData = {
  fromUnitId: "gallon-per-min",
  toUnitId: "liter-per-min",
  seoTitle: "Gallon/min to Liter/min Converter (GPM to L/min) | UnitsConvertors.com",
  metaDescription: "Convert gallons per minute to liters per minute (GPM to L/min / LPM) accurately. Learn the exact 3.7854 conversion factor, formulas, examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/converters/flow/gallon-per-min-to-liter-per-min",
  h1: "Gallon/min to Liter/min Converter",
  introduction: [
    "Gallons per minute (GPM) and liters per minute (L/min, also commonly abbreviated as LPM) are the two most frequently converted liquid flow rate units in global trade, industrial manufacturing, and engineering. While GPM is the standard metric used in the United States and Canada for plumbing fixtures, swimming pool filters, and fire pumps, liters per minute is the accepted international metric standard across Europe, Asia, Latin America, and Oceania.",
    "Because both units share the same time base of sixty seconds, the conversion relies solely on the international volume definition of the US liquid gallon, which equals exactly 3.785411784 liters (231 cubic inches). Consequently, a steady flow rate of one gallon per minute delivers precisely 3.785412 liters per minute.",
    "To convert gallons per minute to liters per minute, multiply the GPM value by 3.785412. Conversely, to convert from liters per minute to GPM, multiply by approximately 0.264172 (or divide by 3.785412). This practical guide explains the conversion relationship, provides worked examples for pump sizing and plumbing fixtures, and includes an extensive comparison table."
  ],
  quickAnswer: {
    text: "To convert GPM to L/min, multiply the GPM value by 3.785412. For example, a 10 GPM flow rate equals approximately 37.85 L/min.",
    formulaDisplay: "L/min = GPM × 3.785411784 ≈ GPM × 3.7854",
    subtext: "1 GPM = 3.785412 L/min (LPM); 1 L/min ≈ 0.264172 GPM."
  },
  aboutSourceUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "Gallons per minute is the primary unit of liquid volumetric flow in the United States customary system. Defined as the passage of one US liquid gallon (3.785412 liters, or 231 in³) every sixty seconds, GPM is standard across building codes (such as the Uniform Plumbing Code), fire sprinkler ratings (NFPA 13), well pump specifications, and agricultural irrigation equipment."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per Minute (L/min / LPM)",
    text: "Liters per minute is the primary metric unit for commercial and industrial fluid flow rate, derived from the SI-accepted unit of volume, the liter (1 dm³ = 10⁻³ m³). L/min is used globally for medical gas delivery (oxygen flowmeters), automotive fuel pump ratings, domestic showerhead water conservation standards, machine tool coolant delivery, and hydraulic equipment specifications."
  },
  relationship: "One US gallon per minute equals exactly 3.785411784 liters per minute. Inversely, 1 liter per minute equals approximately 0.264172052 GPM. Roughly 3.79 liters of liquid flow every minute for each GPM.",
  relationshipTitle: "GPM to L/min Direct Ratio",
  relationshipItems: [
    { label: "1 GPM", value: "3.7854 L/min" },
    { label: "2.6417 GPM", value: "10.000 L/min" },
    { label: "5 GPM", value: "18.927 L/min" },
    { label: "10 GPM", value: "37.854 L/min" },
    { label: "25 GPM", value: "94.635 L/min" },
    { label: "50 GPM", value: "189.271 L/min" },
    { label: "100 GPM", value: "378.541 L/min" }
  ],
  formula: {
    text: "Multiply the flow rate in GPM by 3.785412 to obtain liters per minute.",
    math: "\\text{L/min} = \\text{GPM} \\times 3.785411784",
    subtext: "Inverse formula: GPM = L/min / 3.785411784 ≈ L/min × 0.264172"
  },
  formulaTitle: "GPM to L/min Conversion Formula",
  practicalTip: {
    title: "Quick Mental Math: The 3.8 Rule",
    text: "For quick field estimates, multiply GPM by 3.8 (or multiply by 4 and subtract 5%). For example, 20 GPM × 3.8 = 76 L/min (the exact value is 75.71 L/min, giving less than a 0.4% discrepancy)."
  },
  expertNote: {
    title: "Plumbing Fixture Standards: US vs International",
    text: "US water conservation codes (EPA WaterSense) mandate showerheads not exceed 2.0 GPM. In international metric jurisdictions, this corresponds to approximately 7.6 L/min (often rounded to 7.5 or 8.0 L/min in European EN 1112 standards)."
  },
  examples: {
    title: "Step-by-Step GPM to L/min Worked Examples",
    items: [
      {
        title: "Example 1: Residential Water Heater Recirculation",
        subtitle: "A domestic hot water booster pump maintains a continuous recirculation flow of 3.5 GPM. Express this in liters per minute.",
        steps: [
          "State the flow rate in GPM: Q = 3.5 GPM.",
          "Apply the conversion factor: L/min = 3.5 × 3.785411784.",
          "Calculate: 3.5 × 3.785411784 ≈ 13.24894.",
          "Final Result: 3.5 GPM equals approximately 13.25 L/min."
        ]
      },
      {
        title: "Example 2: Commercial Swimming Pool Filtration Rate",
        subtitle: "A commercial pool turnover pump operates at 85 GPM. Convert this rate to liters per minute for an international resort design.",
        steps: [
          "Identify the flow rate: Q = 85 GPM.",
          "Multiply by 3.785412: 85 × 3.785412 ≈ 321.760.",
          "Final Result: 85 GPM corresponds to approximately 321.76 L/min."
        ]
      },
      {
        title: "Example 3: CNC Machine Spindle Coolant Delivery",
        subtitle: "A machine tool spindle flood coolant nozzle delivers 12.0 GPM. Express this throughput in LPM.",
        steps: [
          "State the nozzle flow: 12.0 GPM.",
          "Multiply by 3.785412: 12.0 × 3.785412 ≈ 45.4249.",
          "Final Result: 12.0 GPM equals approximately 45.42 L/min."
        ]
      }
    ]
  },
  table: {
    title: "GPM to L/min Conversion Reference Table",
    headers: ["Gallons/min (GPM)", "Liters/min (L/min)", "Cubic meters/hr (m³/h)", "Liters/sec (L/s)"],
    rows: [
      { fromVal: "1 GPM", toVal: "3.79 L/min", extra: "0.227 m³/h", extra2: "0.063 L/s" },
      { fromVal: "2 GPM", toVal: "7.57 L/min", extra: "0.454 m³/h", extra2: "0.126 L/s" },
      { fromVal: "5 GPM", toVal: "18.93 L/min", extra: "1.136 m³/h", extra2: "0.315 L/s" },
      { fromVal: "10 GPM", toVal: "37.85 L/min", extra: "2.271 m³/h", extra2: "0.631 L/s" },
      { fromVal: "15 GPM", toVal: "56.78 L/min", extra: "3.407 m³/h", extra2: "0.946 L/s" },
      { fromVal: "25 GPM", toVal: "94.64 L/min", extra: "5.678 m³/h", extra2: "1.577 L/s" },
      { fromVal: "50 GPM", toVal: "189.27 L/min", extra: "11.356 m³/h", extra2: "3.155 L/s" },
      { fromVal: "75 GPM", toVal: "283.91 L/min", extra: "17.034 m³/h", extra2: "4.732 L/s" },
      { fromVal: "100 GPM", toVal: "378.54 L/min", extra: "22.712 m³/h", extra2: "6.309 L/s" },
      { fromVal: "250 GPM", toVal: "946.35 L/min", extra: "56.781 m³/h", extra2: "15.773 L/s" }
    ]
  },
  applications: {
    title: "Everyday & Engineering Applications of GPM to L/min",
    items: [
      {
        title: "Plumbing Fixture Efficiency & Green Building",
        text: "Converting US Energy Policy Act showerhead and faucet maximum flow limits (GPM) to international LEED and BREEAM metric standards (L/min)."
      },
      {
        title: "Industrial & Agricultural Pump Export",
        text: "Translating pump performance curves between American GPM ratings and European/Asian metric catalog specifications."
      },
      {
        title: "Automotive & Aerospace Fuel Delivery",
        text: "Calibrating high-flow fuel injectors, lift pumps, and aircraft refueling nozzle flows between GPM and L/min."
      },
      {
        title: "Medical & Cryogenic Gas Flow Systems",
        text: "Validating clinical oxygen therapy devices, anesthesia ventilators, and cryogenic gas vaporizers where flow meters display LPM."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in GPM to L/min Conversions",
    items: [
      "Confusing the US liquid gallon (3.785 L) with the UK imperial gallon (4.546 L), causing a 20.1% calculation error.",
      "Dividing by 3.785 instead of multiplying when converting from GPM to L/min.",
      "Confusing liters per minute (L/min) with liters per second (L/s), which differs by a factor of 60.",
      "Overlooking fluid viscosity changes when measuring dense or non-Newtonian sluries."
    ]
  },
  faqs: [
    {
      question: "How many liters per minute are in 1 GPM?",
      answer: "There are exactly 3.785411784 liters per minute in 1 US gallon per minute."
    },
    {
      question: "How many GPM are in 1 liter per minute?",
      answer: "There are approximately 0.264172 GPM in 1 liter per minute (1 / 3.785412 GPM)."
    },
    {
      question: "What is the formula to convert GPM to L/min?",
      answer: "The formula is: L/min = GPM × 3.785412."
    },
    {
      question: "Is LPM the same as L/min?",
      answer: "Yes, 'LPM' is a widely used engineering abbreviation for liters per minute (L/min)."
    },
    {
      question: "How do I convert 15 GPM to L/min?",
      answer: "Multiply 15 by 3.785412 to obtain approximately 56.78 L/min."
    },
    {
      question: "What is the flow rate of a typical shower in GPM and L/min?",
      answer: "A standard water-efficient showerhead flows at 2.0 GPM, which equals approximately 7.57 L/min."
    },
    {
      question: "Why is the US gallon different from the Imperial gallon?",
      answer: "The US gallon is based on the 1707 Queen Anne wine gallon (231 cubic inches = 3.785 L), while the British Imperial gallon was redefined in 1824 as the volume of 10 pounds of pure water (4.546 L)."
    },
    {
      question: "Can this formula be used for oil and chemicals?",
      answer: "Yes, volumetric conversion between GPM and L/min is purely geometric and applies to any fluid regardless of density or viscosity."
    }
  ],
  relatedList: [
    { label: "Gallon/min to Liter/sec", from: "gallon-per-min", to: "liter-per-sec" },
    { label: "Gallon/min to Milliliter/min", from: "gallon-per-min", to: "milliliter-per-min" },
    { label: "Liter/min to Gallon/min", from: "liter-per-min", to: "gallon-per-min" },
    { label: "Gallon/min to Cubic meter/hour", from: "gallon-per-min", to: "cubic-meter-per-hour" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics.",
    "EPA WaterSense: Specification for Showerheads."
  ]
};
