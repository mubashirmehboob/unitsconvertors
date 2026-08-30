import { CustomArticleData } from "./types";

export const gallonPerMinToLiterPerSec: CustomArticleData = {
  fromUnitId: "gallon-per-min",
  toUnitId: "liter-per-sec",
  seoTitle: "Gallon per Minute to Liter per Second Converter (GPM to L/s)",
  metaDescription: "Convert US gallons per minute to liters per second (GPM to L/s) accurately. Learn the exact fluid dynamics formula (1 GPM ≈ 0.06309 L/s), pump examples, and tables.",
  h1: "Gallon per Minute to Liter per Second Converter",
  introduction: [
    "Converting US gallons per minute (GPM) to liters per second (L/s) is one of the most common volumetric flow rate conversions in international pump manufacturing, HVAC hydronic design, fire sprinkler engineering, and municipal water supply systems.",
    "While North American engineering practices, pump curves, and plumbing codes express liquid flow in US gallons per minute, international ISO standards and metric hydraulic equipment quantify fluid transport in liters per second.",
    "Because one US liquid gallon contains exactly 3.785411784 liters and one minute equals 60 seconds, converting GPM to L/s requires multiplying the GPM value by approximately 0.0630902 (or dividing by 15.85032). This guide details the mathematical derivation, step-by-step calculation examples, common conversion mistakes, and a complete reference conversion table."
  ],
  quickAnswer: {
    text: "To convert US gallons per minute to liters per second, multiply the flow rate in GPM by 0.0630902 (or divide by 15.85032). For example, a 100 GPM commercial booster pump delivers approximately 6.309 liters per second.",
    formulaDisplay: "\\text{L/s} = \\text{GPM} \\times 0.0630902 = \\frac{\\text{GPM}}{15.85032}",
    subtext: "1 US GPM ≈ 0.0630902 L/s; 1 Liter per Second ≈ 15.85032 US GPM."
  },
  aboutSourceUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "The gallon per minute (symbol: GPM) is a US customary unit of volumetric flow rate defined as the transfer of one US liquid gallon (231 cubic inches or 3.78541 liters) every minute. It is the primary rating standard used by American pump manufacturers, irrigation designers, and fire protection authorities (NFPA)."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric derived unit of volumetric flow rate representing the continuous movement of one cubic decimeter (1 liter or 0.001 m³) of fluid every second. It is the international benchmark in civil water engineering, environmental hydrology, and process plant piping design."
  },
  relationship: "One US gallon is officially defined as 3.785411784 liters. Dividing this volume by the 60 seconds in a minute gives the exact conversion factor: 3.785411784 L / 60 s = 0.0630901964 L/s per 1 GPM. Conversely, dividing 1 by 0.0630901964 gives 15.85032314 GPM per 1 L/s.",
  relationshipTitle: "US Customary Flow vs Metric Flow Scale Comparison",
  relationshipItems: [
    { label: "1 Gallon per Minute (GPM)", value: "≈ 0.063090 Liters/Second" },
    { label: "10 Gallons per Minute (GPM)", value: "≈ 0.630902 Liters/Second" },
    { label: "15.8503 Gallons per Minute", value: "1.000000 Liter/Second" },
    { label: "50 Gallons per Minute (GPM)", value: "≈ 3.154510 Liters/Second" },
    { label: "100 Gallons per Minute (GPM)", value: "≈ 6.309020 Liters/Second" },
    { label: "500 Gallons per Minute (GPM)", value: "≈ 31.54510 Liters/Second" }
  ],
  formula: {
    text: "Multiply the flow rate in gallons per minute by 0.063090196, or divide by 15.850323, to determine the flow rate in liters per second.",
    math: "\\text{Flow (L/s)} = \\text{Flow (GPM)} \\times \\frac{3.785411784}{60} \\approx \\text{Flow (GPM)} \\times 0.0630902",
    subtext: "Inverse formula: Flow (GPM) = Flow (L/s) × 15.850323"
  },
  formulaTitle: "Gallon per Minute to Liter per Second Conversion Formula",
  practicalTip: {
    title: "Quick Job-Site Approximation Rule",
    text: "To estimate L/s from GPM quickly without a calculator, divide the GPM value by 16. For example, 80 GPM / 16 = 5 L/s (the exact value is 5.047 L/s, accurate to within 1%)."
  },
  expertNote: {
    title: "US GPM vs UK Imperial GPM Caution",
    text: "UK Imperial gallons are 20% larger than US liquid gallons (4.54609 L vs 3.78541 L). If converting from UK Imperial GPM, the multiplier is 0.0757682 L/s per UK GPM (1 L/s = 13.1981 UK GPM)."
  },
  examples: {
    title: "Step-by-Step Practical Engineering Worked Examples",
    items: [
      {
        title: "Example 1: Commercial Fire Sprinkler Booster Pump",
        subtitle: "A fire pump is rated at 500 GPM at 100 psi discharge pressure. Convert this flow rating to liters per second for international project submittals.",
        steps: [
          "State given flow in US GPM: 500 GPM.",
          "Apply the conversion factor: Flow (L/s) = 500 × 0.063090196.",
          "Perform calculation: 500 × 0.063090196 = 31.5451 L/s.",
          "Final Result: A 500 GPM pump delivers approximately 31.55 L/s."
        ]
      },
      {
        title: "Example 2: Residential Water Supply Service Line",
        subtitle: "A residential master water meter registers a peak household demand of 24 GPM. Convert this rate to L/s.",
        steps: [
          "Identify flow rate: 24 GPM.",
          "Divide by the reciprocal constant: 24 / 15.85032 = 1.51416 L/s.",
          "Final Result: 24 GPM corresponds to approximately 1.514 L/s."
        ]
      },
      {
        title: "Example 3: Industrial Chiller Condenser Loop",
        subtitle: "An HVAC water chiller specifies a condenser water circulation rate of 1,200 GPM. Determine the equivalent metric flow.",
        steps: [
          "State flow: 1,200 GPM.",
          "Multiply: 1,200 × 0.0630902 = 75.7082 L/s.",
          "Final Result: The condenser circulation flow is approximately 75.71 L/s."
        ]
      }
    ]
  },
  table: {
    title: "GPM to Liter per Second Conversion Chart",
    headers: ["Gallons / Minute (GPM)", "Liters / Second (L/s)", "Cubic Meters / Hour (m³/h)", "Hydraulic Application"],
    rows: [
      { fromVal: "1 GPM", toVal: "0.0631 L/s", extra: "0.2271 m³/h", extra2: "Residential kitchen faucet" },
      { fromVal: "2.5 GPM", toVal: "0.1577 L/s", extra: "0.5678 m³/h", extra2: "Standard showerhead max rating" },
      { fromVal: "5 GPM", toVal: "0.3155 L/s", extra: "1.1356 m³/h", extra2: "Garden hose nozzle" },
      { fromVal: "10 GPM", toVal: "0.6309 L/s", extra: "2.2712 m³/h", extra2: "Residential supply branch" },
      { fromVal: "15.85 GPM", toVal: "1.0000 L/s", extra: "3.6000 m³/h", extra2: "Exact 1.0 L/s benchmark" },
      { fromVal: "25 GPM", toVal: "1.5773 L/s", extra: "5.6781 m³/h", extra2: "Commercial irrigation valve" },
      { fromVal: "50 GPM", toVal: "3.1545 L/s", extra: "11.356 m³/h", extra2: "Small booster pump" },
      { fromVal: "100 GPM", toVal: "6.3090 L/s", extra: "22.712 m³/h", extra2: "Commercial water service" },
      { fromVal: "250 GPM", toVal: "15.7725 L/s", extra: "56.781 m³/h", extra2: "Industrial process pump" },
      { fromVal: "500 GPM", toVal: "31.5451 L/s", extra: "113.56 m³/h", extra2: "Standard NFPA fire pump" },
      { fromVal: "1,000 GPM", toVal: "63.0902 L/s", extra: "227.12 m³/h", extra2: "Municipal water main booster" }
    ]
  },
  applications: {
    title: "Key Plumbing & Hydraulic Engineering Applications",
    items: [
      {
        title: "Fire Protection Engineering (NFPA)",
        text: "Hydraulic calculation software converts US fire pump test curves (250 to 1,500 GPM) into metric flow rates (L/s) for international building code approvals."
      },
      {
        title: "HVAC & Hydronic Pump Sizing",
        text: "Mechanical engineers pair US-manufactured chillers and cooling towers (rated in GPM) with European variable-frequency pumps and metric flow sensors (L/s)."
      },
      {
        title: "Agricultural Pivot & Drip Irrigation",
        text: "Irrigation designers verify well pump delivery against total nozzle emission requirements across metric agricultural plots."
      },
      {
        title: "Water Filtration & Softening Systems",
        text: "Industrial water treatment specialists translate media bed backwash rates between US GPM and metric distributor flux ratings."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting GPM to L/s",
    items: [
      "Multiplying by 15.85 instead of dividing (or multiplying by 0.06309), causing an answer 250 times too large.",
      "Confusing US liquid gallons (3.785 L) with Imperial gallons (4.546 L).",
      "Confusing gallons per minute (GPM) with gallons per hour (GPH) or gallons per day (GPD).",
      "Failing to convert pipe velocity units when sizing pipes using metric nominal diameters."
    ]
  },
  faqs: [
    {
      question: "How many liters per second is 1 GPM?",
      answer: "One US gallon per minute equals approximately 0.0630902 liters per second (0.0631 L/s)."
    },
    {
      question: "How many GPM are in 1 liter per second?",
      answer: "There are approximately 15.850323 US gallons per minute in 1 liter per second."
    },
    {
      question: "What is the formula to convert GPM to L/s?",
      answer: "The formula is: L/s = GPM × 0.063090196, or L/s = (GPM × 3.785411784) / 60."
    },
    {
      question: "How do I convert 100 GPM to L/s?",
      answer: "Multiply 100 by 0.0630902: 100 × 0.0630902 = 6.30902 liters per second."
    },
    {
      question: "How many cubic meters per hour (m³/h) is 100 GPM?",
      answer: "100 GPM equals approximately 22.7125 m³/h (multiply L/s by 3.6: 6.309 × 3.6 = 22.71 m³/h)."
    },
    {
      question: "What is the difference between US GPM and Imperial GPM?",
      answer: "1 US GPM = 0.06309 L/s, whereas 1 UK Imperial GPM = 0.07577 L/s because an Imperial gallon is approximately 20% larger than a US liquid gallon."
    },
    {
      question: "Why do US pump curves use GPM?",
      answer: "GPM has been the customary standard in North America for over a century, standardized by the Hydraulic Institute and NFPA for fire, industrial, and plumbing systems."
    },
    {
      question: "What is a typical household water flow in GPM and L/s?",
      answer: "A standard residential bathroom faucet flows at about 1.5 to 2.2 GPM (0.095 to 0.139 L/s), while an entire single-family home typically peaks at 10 to 20 GPM (0.63 to 1.26 L/s)."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Gallon/min to Cubic Meter/hour", from: "gallon-per-min", to: "cubic-meter-per-hour" },
    { label: "Liter/sec to Cubic Meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" },
    { label: "Liter/sec to Million Gallons/Day", from: "liter-per-sec", to: "million-gallons-per-day" }
  ],
  references: [
    "Hydraulic Institute (HI) Standards for Centrifugal and Vertical Pumps.",
    "NFPA 20: Standard for the Installation of Stationary Pumps for Fire Protection.",
    "ISO 5167: Measurement of fluid flow by means of pressure differential devices."
  ]
};
