import { CustomArticleData } from "./types";

export const gallonPerMinToGallonPerHour: CustomArticleData = {
  fromUnitId: "gallon-per-min",
  toUnitId: "gallon-per-hour",
  seoTitle: "Gallon/min to Gallon/hour Converter (GPM to GPH) | UnitsConvertors.com",
  metaDescription: "Convert gallons per minute to gallons per hour (GPM to GPH) with exact mathematical precision. Explore boiler, irrigation, and fuel delivery calculations.",
  canonicalUrl: "https://unitsconvertors.com/converters/flow/gallon-per-min-to-gallon-per-hour",
  h1: "Gallon/min to Gallon/hour Converter",
  introduction: [
    "Gallons per minute (GPM) and gallons per hour (GPH) are two ubiquitous flow rate units within the United States customary measurement system. While high-volume mechanical devices such as water utility pumps, residential well systems, and fire protection systems are rated in gallons per minute, low-to-medium volume systems—such as residential oil burner nozzles, pond filtration pumps, chemical metering injectors, and agricultural drip irrigation emitters—are traditionally rated in gallons per hour.",
    "Because both units measure the exact same volume (the US liquid gallon of 231 cubic inches), the conversion between them depends strictly on the time interval. With exactly sixty minutes in one hour, one gallon per minute is identical to sixty gallons per hour.",
    "To convert gallons per minute to gallons per hour, simply multiply the GPM value by 60. Inversely, to convert from gallons per hour to gallons per minute, divide by 60. This clear technical guide provides straightforward formulas, real-world heating and irrigation examples, and a quick-lookup conversion table."
  ],
  quickAnswer: {
    text: "To convert GPM to GPH, multiply the flow rate in GPM by 60. For example, a 5 GPM pump delivers exactly 300 GPH.",
    formulaDisplay: "GPH = GPM × 60",
    subtext: "1 GPM = 60 GPH; 1 GPH = 0.016667 GPM (1/60 GPM)."
  },
  aboutSourceUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "Gallons per minute is the primary US customary unit for rapid liquid volumetric throughput. Defined as the delivery of one US gallon (231 in³, or ~3.7854 liters) over sixty seconds, GPM is standard across residential plumbing, fire sprinkler systems, municipal water distribution, and heavy industrial pumping."
  },
  aboutTargetUnit: {
    title: "Understanding Gallons per Hour (GPH)",
    text: "Gallons per hour measures steady, lower-velocity liquid displacement over an extended 60-minute duration. GPH is standard in heating, ventilation, and air conditioning (HVAC) for residential furnace fuel oil nozzles, aquarium canisters, reverse osmosis drinking water production, pond fountains, and commercial beverage dispensers."
  },
  relationship: "One gallon per minute equals exactly 60 gallons per hour, reflecting the 60 minutes in an hour. Conversely, 1 gallon per hour equals exactly 1/60 of a gallon per minute (approximately 0.0166667 GPM).",
  relationshipTitle: "GPM to GPH Conversion Scale",
  relationshipItems: [
    { label: "0.1 GPM", value: "6.0 GPH" },
    { label: "0.5 GPM", value: "30.0 GPH" },
    { label: "1.0 GPM", value: "60.0 GPH" },
    { label: "2.0 GPM", value: "120.0 GPH" },
    { label: "5.0 GPM", value: "300.0 GPH" },
    { label: "10.0 GPM", value: "600.0 GPH" },
    { label: "25.0 GPM", value: "1,500.0 GPH" }
  ],
  formula: {
    text: "Multiply the flow rate in GPM by 60 to determine gallons per hour.",
    math: "\\text{GPH} = \\text{GPM} \\times 60",
    subtext: "Inverse formula: GPM = GPH / 60 = GPH × 0.0166667"
  },
  formulaTitle: "GPM to GPH Conversion Formula",
  practicalTip: {
    title: "Simple Mental Multiplication",
    text: "To convert GPM to GPH in your head, multiply the number by 6 and add a zero. For example, 7.5 GPM × 6 = 45; adding a zero gives 450 GPH immediately."
  },
  expertNote: {
    title: "Fuel Oil Nozzle Sizing & Boiler Firing Rates",
    text: "Residential heating oil burner nozzles are explicitly stamped with their rating in GPH at 100 psi pump pressure (e.g., 0.85 GPH). Knowing that 1 GPH equals 140,000 BTU/hr (for No. 2 fuel oil) allows heating technicians to size burner nozzles directly from GPM pump delivery specs."
  },
  examples: {
    title: "Step-by-Step GPM to GPH Worked Examples",
    items: [
      {
        title: "Example 1: Pond Aeration Fountain Pump",
        subtitle: "A decorative garden pond pump has an output rating of 8.5 GPM. Express this flow rate in gallons per hour.",
        steps: [
          "State the pump flow rate: Q = 8.5 GPM.",
          "Apply the conversion formula: GPH = 8.5 × 60.",
          "Calculate: 8.5 × 60 = 510.",
          "Final Result: 8.5 GPM equals exactly 510 GPH."
        ]
      },
      {
        title: "Example 2: Drip Irrigation Zone Delivery",
        subtitle: "A drip irrigation pressure regulator supplies a vineyard lateral line at 2.25 GPM. Find the delivery in GPH.",
        steps: [
          "Identify the flow rate: Q = 2.25 GPM.",
          "Multiply by 60: 2.25 × 60 = 135.",
          "Final Result: 2.25 GPM corresponds to exactly 135 GPH."
        ]
      },
      {
        title: "Example 3: Chemical Metering Diaphragm Pump",
        subtitle: "A water purification chemical pump meters sodium hypochlorite at 0.15 GPM. Express this in GPH.",
        steps: [
          "Identify the metering rate: 0.15 GPM.",
          "Multiply by 60: 0.15 × 60 = 9.0.",
          "Final Result: 0.15 GPM equals exactly 9.0 GPH."
        ]
      }
    ]
  },
  table: {
    title: "GPM to GPH Conversion Reference Table",
    headers: ["Gallons/min (GPM)", "Gallons/hour (GPH)", "Liters/hour (L/h)", "Cubic feet/min (CFM)"],
    rows: [
      { fromVal: "0.25 GPM", toVal: "15 GPH", extra: "56.78 L/h", extra2: "0.0334 CFM" },
      { fromVal: "0.50 GPM", toVal: "30 GPH", extra: "113.56 L/h", extra2: "0.0668 CFM" },
      { fromVal: "1.00 GPM", toVal: "60 GPH", extra: "227.12 L/h", extra2: "0.1337 CFM" },
      { fromVal: "2.00 GPM", toVal: "120 GPH", extra: "454.25 L/h", extra2: "0.2674 CFM" },
      { fromVal: "3.50 GPM", toVal: "210 GPH", extra: "794.94 L/h", extra2: "0.4679 CFM" },
      { fromVal: "5.00 GPM", toVal: "300 GPH", extra: "1,135.62 L/h", extra2: "0.6684 CFM" },
      { fromVal: "10.00 GPM", toVal: "600 GPH", extra: "2,271.25 L/h", extra2: "1.3368 CFM" },
      { fromVal: "15.00 GPM", toVal: "900 GPH", extra: "3,406.87 L/h", extra2: "2.0052 CFM" },
      { fromVal: "25.00 GPM", toVal: "1,500 GPH", extra: "5,678.12 L/h", extra2: "3.3420 CFM" },
      { fromVal: "50.00 GPM", toVal: "3,000 GPH", extra: "11,356.24 L/h", extra2: "6.6840 CFM" }
    ]
  },
  applications: {
    title: "Practical Applications of GPM to GPH Conversions",
    items: [
      {
        title: "Agricultural Drip Irrigation Design",
        text: "Converting main manifold supply capacities in GPM into individual drip emitter discharge budgets rated in GPH (such as 0.5, 1.0, or 2.0 GPH emitters)."
      },
      {
        title: "Aquarium & Aquaculture Water Circulation",
        text: "Rating aquarium external canister filters and sump return pumps where turnover requirements are specified in GPH."
      },
      {
        title: "Fuel Oil Heating & Burner Nozzle Sizing",
        text: "Translating bulk fuel oil supply line flows into heating appliance nozzle capacities specified in GPH."
      },
      {
        title: "Water Treatment Chemical Metering",
        text: "Sizing diaphragm and peristaltic chemical feed pumps for chlorination, pH neutralization, and polymer dosing."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in GPM to GPH Conversions",
    items: [
      "Dividing by 60 instead of multiplying by 60 when converting from GPM to GPH.",
      "Confusing gallons per hour (GPH) with liters per hour (LPH), which differs by a factor of 3.7854.",
      "Overlooking pump head loss curves: a pump rated for 600 GPH at zero feet of head will flow significantly less at elevated head pressure.",
      "Assuming 24-hour daily output without multiplying GPH by 24."
    ]
  },
  faqs: [
    {
      question: "How many gallons per hour are in 1 GPM?",
      answer: "There are exactly 60 gallons per hour in 1 gallon per minute."
    },
    {
      question: "How many GPM are in 1 gallon per hour?",
      answer: "There are approximately 0.016667 GPM in 1 GPH (exactly 1/60 GPM)."
    },
    {
      question: "What is the formula to convert GPM to GPH?",
      answer: "The formula is: GPH = GPM × 60."
    },
    {
      question: "How do I convert 4 GPM to GPH?",
      answer: "Multiply 4 by 60 to get exactly 240 GPH."
    },
    {
      question: "Why do drip emitters use GPH instead of GPM?",
      answer: "Because drip irrigation supplies water very slowly (typically 0.5 to 2 gallons per hour), using GPH avoids awkward fractions like 0.0083 GPM."
    },
    {
      question: "How do I convert 300 GPH to GPM?",
      answer: "Divide 300 by 60 to get exactly 5 GPM."
    },
    {
      question: "Does temperature affect the GPM to GPH conversion?",
      answer: "No. Because both units share the same volume unit (US gallon) and the conversion factor (60) is purely a time ratio, temperature does not affect the calculation."
    },
    {
      question: "How many liters per hour equal 1 GPM?",
      answer: "One GPM equals 60 GPH, which equals 60 × 3.785412 ≈ 227.12 liters per hour (L/h)."
    }
  ],
  relatedList: [
    { label: "Gallon/min to Liter/min", from: "gallon-per-min", to: "liter-per-min" },
    { label: "Gallon/min to Barrel/day", from: "gallon-per-min", to: "barrel-per-day" },
    { label: "Gallon/hour to Gallon/min", from: "gallon-per-hour", to: "gallon-per-min" },
    { label: "Gallon/min to Cubic feet/min", from: "gallon-per-min", to: "cubic-feet-per-min" }
  ],
  references: [
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices.",
    "Irrigation Association: Principles of Irrigation Practice.",
    "Hydraulic Institute: Standards for Centrifugal and Positive Displacement Pumps."
  ]
};
