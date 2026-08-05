import { CustomArticleData } from "./types";

export const literPerSecToGallonPerHour: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "gallon-per-hour",
  seoTitle: "Liter per Second to Gallon per Hour Converter - L/s to GPH",
  metaDescription: "Convert liters per second to US gallons per hour (L/s to GPH). Learn the conversion factor (1 L/s ≈ 951.019 GPH), fuel system formulas, and reference tables.",
  h1: "Liter per Second to Gallon per Hour Converter",
  introduction: [
    "Converting liters per second (L/s) to US gallons per hour (GPH) is a key volumetric flow rate conversion used across marine propulsion engineering, aviation fuel management, chemical dosing, and industrial burner systems. While high-rate flow meters log instantaneous discharge in liters per second, fuel consumption charts and chemical pump ratings in North America are traditionally expressed in gallons per hour.",
    "Because one US liquid gallon contains exactly 3.785411784 liters and one hour contains 3,600 seconds, converting liters per second to gallons per hour requires multiplying by approximately 951.0194. This guide provides conversion formulas, practical fuel engineering examples, step-by-step calculations, and reference charts."
  ],
  quickAnswer: {
    text: "To convert liters per second to US gallons per hour, multiply the flow rate in L/s by 951.019388 (or multiply by 3,600 and divide by 3.785412). For example, a flow rate of 1 L/s corresponds to approximately 951.02 GPH.",
    formulaDisplay: "1 L/s ≈ 951.019388 GPH",
    subtext: "1 US gallon per hour equals approximately 0.0010515 liters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate representing one cubic decimeter of fluid transferred every second. It is the primary metric metric unit for high-speed liquid flow, pipeline hydraulics, and pump performance tests."
  },
  aboutTargetUnit: {
    title: "Understanding Gallons per Hour (GPH)",
    text: "The gallon per hour (symbol: GPH) is a US customary unit of volumetric flow rate representing the transfer of one US liquid gallon over an hour. It is widely used for rating residential heating oil burners, marine engine fuel consumption, and agricultural spray nozzles."
  },
  relationship: "The relationship between L/s and GPH bridges metric volume and time with US imperial volume and hourly duration. A flow rate of 1 L/s delivers 3,600 liters per hour. Dividing 3,600 liters by 3.785411784 liters per US gallon yields 3,600 / 3.785411784 ≈ 951.019388 GPH.",
  relationshipTitle: "Metric Flow vs US Hourly Flow",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "≈ 951.019388 Gallons per Hour (GPH)" },
    { label: "1 Gallon per Hour (GPH)", value: "≈ 0.0010515 Liters per Second (L/s)" }
  ],
  formula: {
    text: "To calculate flow rate in US gallons per hour from liters per second, multiply the L/s value by 951.019388.",
    math: "Flow (GPH) = Flow (L/s) × 951.019388",
    subtext: "Exact mathematical formula: Flow (GPH) = Flow (L/s) × (3,600 / 3.785411784)."
  },
  formulaTitle: "The Liter per Second to GPH Formula",
  practicalTip: {
    title: "Mental Calculation Shortcut",
    text: "To quickly approximate GPH from L/s without a calculator, multiply by 950. For example, 2 L/s × 950 = 1,900 GPH (extremely close to the exact 1,902.04 GPH)."
  },
  expertNote: {
    title: "US GPH vs UK Imperial GPH",
    text: "Confirm whether your application requires US liquid gallons per hour or UK Imperial gallons per hour. One UK Imperial gallon equals 4.54609 L, so 1 L/s equals 791.889 UK GPH compared to 951.019 US GPH."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Industrial Fuel Oil Burner Supply",
        subtitle: "A commercial boiler fuel pump delivers diesel at a rate of 0.45 L/s. Determine the hourly fuel consumption in US GPH.",
        steps: [
          "Identify the flow rate in L/s: 0.45 L/s.",
          "Apply the conversion factor: Flow (GPH) = 0.45 × 951.019388.",
          "Calculate: 0.45 × 951.019388 = 427.9587 GPH.",
          "Result: 0.45 L/s corresponds to approximately 427.96 GPH."
        ]
      },
      {
        title: "Example 2: Marine Diesel Generator Test",
        subtitle: "A ship generator fuel line test measures a flow rate of 1.2 L/s. Convert this to GPH.",
        steps: [
          "Identify the flow rate: 1.2 L/s.",
          "Multiply by 951.019388: 1.2 × 951.019388 = 1,141.223 GPH.",
          "Result: 1.2 L/s equals approximately 1,141.22 GPH."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Second to Gallons per Hour Conversion Reference",
    headers: ["Liters / Second (L/s)", "Gallons / Hour (GPH)", "Typical Industrial Application"],
    rows: [
      { fromVal: "0.01 L/s", toVal: "9.51 GPH", extra: "Residential oil furnace burner" },
      { fromVal: "0.05 L/s", toVal: "47.55 GPH", extra: "Commercial laundry boiler fuel line" },
      { fromVal: "0.10 L/s", toVal: "95.10 GPH", extra: "Agricultural chemical metering pump" },
      { fromVal: "0.25 L/s", toVal: "237.75 GPH", extra: "Small tugboat main engine" },
      { fromVal: "0.50 L/s", toVal: "475.51 GPH", extra: "Industrial standby diesel generator" },
      { fromVal: "1.0 L/s", toVal: "951.02 GPH", extra: "Large commercial chilled water chemical feed" },
      { fromVal: "2.5 L/s", toVal: "2,377.55 GPH", extra: "Regional fuel distribution pump" },
      { fromVal: "5.0 L/s", toVal: "4,755.10 GPH", extra: "Aviation hydrant refueling truck" },
      { fromVal: "10 L/s", toVal: "9,510.19 GPH", extra: "Refinery fuel blending branch" }
    ]
  },
  applications: {
    title: "Engineering & Industry Applications",
    items: [
      {
        title: "Fuel Systems & Engine Performance",
        text: "Automotive and marine performance engineers convert metric fuel sensor readings (L/s) into GPH to calculate brake specific fuel consumption (BSFC)."
      },
      {
        title: "Chemical Dosing & Water Treatment",
        text: "Water treatment plants use GPH metering pumps to inject coagulants, converting telemetry readings from L/s."
      },
      {
        title: "Industrial Heating & Oil Burners",
        text: "HVAC and power plant engineers evaluate heavy fuel oil (HFO) consumption by converting flow rates from L/s to GPH."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 951.02 instead of multiplying when converting L/s to GPH.",
      "Confusing US liquid GPH (951.02 GPH) with Imperial UK GPH (791.89 GPH).",
      "Confusing GPH (Gallons per Hour) with GPM (Gallons per Minute)."
    ]
  },
  faqs: [
    {
      question: "How many GPH are in 1 liter per second?",
      answer: "There are approximately 951.019 US gallons per hour in 1 liter per second."
    },
    {
      question: "What is the formula to convert L/s to GPH?",
      answer: "The formula is: GPH = L/s × 951.019388."
    },
    {
      question: "What is 0.5 L/s in GPH?",
      answer: "0.5 L/s multiplied by 951.019388 equals approximately 475.51 GPH."
    },
    {
      question: "What is 1 L/s in GPH?",
      answer: "1 L/s equals approximately 951.02 US GPH."
    },
    {
      question: "How do I convert GPH back to L/s?",
      answer: "Divide the GPH value by 951.019388 (or multiply by 0.0010515)."
    },
    {
      question: "Why is the conversion factor 951.019?",
      answer: "1 L/s = 3,600 liters per hour. Dividing 3,600 L by 3.785411784 L/gal gives 951.019388 GPH."
    },
    {
      question: "Is GPH used for water or fuel?",
      answer: "GPH is widely used for both liquid fuels (diesel, gasoline, heating oil) and lower-volume chemical water treatment injection."
    },
    {
      question: "What is 5 L/s in GPH?",
      answer: "5 L/s multiplied by 951.019388 equals approximately 4,755.10 GPH."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Liter/sec to Liter/min", from: "liter-per-sec", to: "liter-per-min" },
    { label: "Liter/sec to Barrel/day", from: "liter-per-sec", to: "barrel-per-day" },
    { label: "Liter/sec to Cubic meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" }
  ],
  references: [
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices",
    "SAE J1941: Fuel Economy Measurement Test Code — Fluid Flow",
    "ISO 31-3: Quantities and Units — Mechanics"
  ]
};
