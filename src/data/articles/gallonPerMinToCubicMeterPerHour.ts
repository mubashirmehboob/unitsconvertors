import { CustomArticleData } from "./types";

export const gallonPerMinToCubicMeterPerHour: CustomArticleData = {
  fromUnitId: "gallon-per-min",
  toUnitId: "cubic-meter-per-hour",
  seoTitle: "Gallon per Minute to Cubic Meter per Hour Converter (GPM to m³/h)",
  metaDescription: "Convert US gallons per minute to cubic meters per hour (GPM to m³/h) accurately. Learn the conversion formula (1 GPM ≈ 0.2271 m³/h), pump curve examples, and tables.",
  h1: "Gallon per Minute to Cubic Meter per Hour Converter",
  introduction: [
    "Converting US gallons per minute (GPM) to cubic meters per hour (m³/h) is the central volumetric flow rate conversion connecting North American fluid machinery specifications with European and international industrial standards.",
    "While pump curves, cooling tower capacities, and piping schedules in the United States and Canada are specified in US gallons per minute, global chemical processing plants, municipal water treatment facilities, and European HVAC manufacturers rate equipment in cubic meters per hour (m³/h or CMH).",
    "Because one US liquid gallon equals 0.003785411784 cubic meters and one hour contains 60 minutes, converting GPM to m³/h requires multiplying the GPM value by approximately 0.2271247 (or dividing by 4.402868). This guide provides the exact mathematical derivation, pump curve translation examples, practical applications, and an extensive reference conversion table."
  ],
  quickAnswer: {
    text: "To convert US gallons per minute to cubic meters per hour, multiply the flow rate in GPM by 0.2271247 (or divide by 4.402868). For example, a 100 GPM water pump delivers approximately 22.712 m³/h.",
    formulaDisplay: "\\text{m}^3/\\text{h} = \\text{GPM} \\times 0.2271247 = \\frac{\\text{GPM}}{4.402868}",
    subtext: "1 US GPM ≈ 0.2271247 m³/h; 1 Cubic Meter per Hour ≈ 4.402868 US GPM."
  },
  aboutSourceUnit: {
    title: "Understanding Gallons per Minute (GPM)",
    text: "The gallon per minute (symbol: GPM) is a US customary unit of volumetric flow rate representing the delivery of one US liquid gallon (231 cubic inches or 3.7854 liters) every minute. It serves as the standard flow metric across the American waterworks industry, HVAC hydronic loops, and fire sprinkler systems."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Meters per Hour (m³/h)",
    text: "The cubic meter per hour (symbol: m³/h, often abbreviated in European industry as CMH) is a metric unit of volumetric flow rate representing the continuous passage of one cubic meter (1,000 liters or 35.3147 ft³) of fluid every hour. It is the international standard for sizing industrial pumps, municipal pipelines, and large ventilation fans."
  },
  relationship: "One US gallon contains exactly 3.785411784 liters (0.003785411784 m³). In 60 minutes (one hour), a continuous flow of 1 GPM delivers: 60 × 0.003785411784 m³ = 0.22712470704 m³/h. Conversely, dividing 1 by 0.22712470704 gives exactly 4.402867542 GPM per 1 m³/h.",
  relationshipTitle: "US GPM vs Metric m³/h Scale Comparison",
  relationshipItems: [
    { label: "1 Gallon per Minute (GPM)", value: "≈ 0.227125 m³/h" },
    { label: "4.4029 Gallons per Minute", value: "1.000000 m³/h" },
    { label: "10 Gallons per Minute (GPM)", value: "≈ 2.271247 m³/h" },
    { label: "50 Gallons per Minute (GPM)", value: "≈ 11.35624 m³/h" },
    { label: "100 Gallons per Minute (GPM)", value: "≈ 22.71247 m³/h" },
    { label: "500 Gallons per Minute (GPM)", value: "≈ 113.5624 m³/h" }
  ],
  formula: {
    text: "Multiply the flow rate in US gallons per minute by 0.2271247, or divide by 4.402868, to determine the flow rate in cubic meters per hour.",
    math: "\\text{Flow (m}^3/\\text{h)} = \\text{Flow (GPM)} \\times \\frac{3.785411784 \\times 60}{1000} \\approx \\text{Flow (GPM)} \\times 0.2271247",
    subtext: "Inverse formula: Flow (GPM) = Flow (m³/h) × 4.402868"
  },
  formulaTitle: "GPM to Cubic Meter per Hour Conversion Formula",
  practicalTip: {
    title: "Quick Mental Calculation Shortcut",
    text: "To estimate m³/h from GPM on a job site without a calculator, divide the GPM by 4.4 (or divide by 4 and subtract 10%). For example, 200 GPM / 4.4 ≈ 45.45 m³/h (the exact value is 45.42 m³/h, accurate to within 0.1%)."
  },
  expertNote: {
    title: "Pump Curve & Affinity Laws Translation",
    text: "When translating pump performance curves (head vs. flow) between US and European manufacturer catalogs, converting flow from GPM to m³/h while simultaneously converting total dynamic head from feet of head (ft) to meters of head (m) allows direct hydraulic overlay."
  },
  examples: {
    title: "Step-by-Step Practical Engineering Worked Examples",
    items: [
      {
        title: "Example 1: Industrial Cooling Tower Circulation Pump",
        subtitle: "A North American cooling tower circulation pump is rated to discharge 450 GPM. Determine the equivalent flow rate in m³/h for a European plant specification.",
        steps: [
          "State given flow rate: 450 GPM.",
          "Apply the conversion factor: Flow (m³/h) = 450 × 0.2271247.",
          "Perform the multiplication: 450 × 0.2271247 = 102.2061 m³/h.",
          "Final Result: A 450 GPM pump delivers approximately 102.21 m³/h."
        ]
      },
      {
        title: "Example 2: Commercial Reverse Osmosis Feed Skid",
        subtitle: "An RO desalination skid requires an influent feed of 75 GPM. Convert this flow to m³/h.",
        steps: [
          "Identify the flow: 75 GPM.",
          "Divide by the reciprocal constant: 75 / 4.402868 = 17.03435 m³/h.",
          "Final Result: 75 GPM equals approximately 17.03 m³/h."
        ]
      },
      {
        title: "Example 3: Municipal Booster Station Design",
        subtitle: "A municipal water booster station with three parallel pumps delivers a combined peak output of 2,500 GPM. Express this capacity in cubic meters per hour.",
        steps: [
          "State total flow: 2,500 GPM.",
          "Multiply by conversion factor: 2,500 × 0.2271247 = 567.8118 m³/h.",
          "Final Result: The booster station peak capacity is approximately 567.81 m³/h."
        ]
      }
    ]
  },
  table: {
    title: "GPM to Cubic Meter per Hour Reference Table",
    headers: ["Gallons / Minute (GPM)", "Cubic Meters / Hour (m³/h)", "Liters / Second (L/s)", "Typical Engineering System"],
    rows: [
      { fromVal: "1 GPM", toVal: "0.2271 m³/h", extra: "0.0631 L/s", extra2: "Residential fixture flow" },
      { fromVal: "4.40 GPM", toVal: "1.0000 m³/h", extra: "0.2778 L/s", extra2: "Exact 1.0 m³/h benchmark" },
      { fromVal: "10 GPM", toVal: "2.2712 m³/h", extra: "0.6309 L/s", extra2: "Residential main water service" },
      { fromVal: "25 GPM", toVal: "5.6781 m³/h", extra: "1.5773 L/s", extra2: "Commercial irrigation valve zone" },
      { fromVal: "50 GPM", toVal: "11.356 m³/h", extra: "3.1545 L/s", extra2: "Commercial domestic booster" },
      { fromVal: "100 GPM", toVal: "22.712 m³/h", extra: "6.3090 L/s", extra2: "Small industrial heat exchanger" },
      { fromVal: "250 GPM", toVal: "56.781 m³/h", extra: "15.773 L/s", extra2: "Process chemical feed pump" },
      { fromVal: "500 GPM", toVal: "113.56 m³/h", extra: "31.545 L/s", extra2: "Standard industrial fire pump" },
      { fromVal: "1,000 GPM", toVal: "227.12 m³/h", extra: "63.090 L/s", extra2: "HVAC central chiller condenser" },
      { fromVal: "2,500 GPM", toVal: "567.81 m³/h", extra: "157.73 L/s", extra2: "Municipal water treatment intake" },
      { fromVal: "5,000 GPM", toVal: "1,135.6 m³/h", extra: "315.45 L/s", extra2: "Major power plant cooling loop" }
    ]
  },
  applications: {
    title: "Key Industrial & Hydraulic Applications",
    items: [
      {
        title: "International Pump Procurement & Sizing",
        text: "Mechanical engineers convert US pump curves (GPM vs ft) into ISO metric curves (m³/h vs m) for overseas industrial equipment installation."
      },
      {
        title: "HVAC Chilled Water & Condenser Loops",
        text: "Thermal engineers size hydronic distribution piping, balancing valves, and heat exchangers across multinational project designs."
      },
      {
        title: "Water & Wastewater Treatment Plant Design",
        text: "Filtration loading rates, clarifier surface overflow rates, and sludge pumping capacities are unified between US GPM and metric m³/h metrics."
      },
      {
        title: "Oil & Gas Process Hydraulics",
        text: "Petrochemical process engineers convert produced water and chemical injection pump telemetry into standard plant flow sheets."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting GPM to m³/h",
    items: [
      "Confusing US liquid gallons (3.7854 L) with UK Imperial gallons (4.5461 L), which introduces an 18% sizing error.",
      "Multiplying by 4.4029 instead of dividing (or multiplying by 0.2271), resulting in a flow rate 20 times too large.",
      "Confusing cubic meters per hour (m³/h) with cubic meters per second (m³/s, where 1 m³/s = 3,600 m³/h).",
      "Failing to convert pipe friction loss coefficients when switching between Hazen-Williams imperial and Darcy-Weisbach metric formulas."
    ]
  },
  faqs: [
    {
      question: "How many m³/h is 1 GPM?",
      answer: "One US gallon per minute equals approximately 0.2271247 cubic meters per hour (0.2271 m³/h)."
    },
    {
      question: "How many GPM are in 1 cubic meter per hour?",
      answer: "There are approximately 4.402868 US gallons per minute in 1 cubic meter per hour."
    },
    {
      question: "What is the formula to convert GPM to m³/h?",
      answer: "The formula is: m³/h = GPM × 0.2271247, or m³/h = (GPM × 3.785411784 × 60) / 1,000."
    },
    {
      question: "How do I convert 100 GPM to m³/h?",
      answer: "Multiply 100 by 0.2271247: 100 × 0.2271247 = 22.71247 m³/h (approximately 22.71 m³/h)."
    },
    {
      question: "What is CMH in fluid flow?",
      answer: "CMH stands for Cubic Meters per Hour (m³/h), a common acronym in European and Asian HVAC and pump industries."
    },
    {
      question: "How do you convert UK Imperial GPM to m³/h?",
      answer: "Since 1 UK gallon = 4.54609 L, multiply UK GPM by 0.272765 to get m³/h (1 m³/h = 3.66615 UK GPM)."
    },
    {
      question: "How many liters per second (L/s) is 100 m³/h?",
      answer: "Divide 100 by 3.6: 100 / 3.6 ≈ 27.778 liters per second."
    },
    {
      question: "Why do European engineers use m³/h instead of GPM?",
      answer: "Cubic meters per hour is a coherent metric derived unit aligned with SI standards (cubic meters and seconds/hours), making mass and energy balance calculations straightforward."
    }
  ],
  relatedList: [
    { label: "Gallon/min to Liter/sec", from: "gallon-per-min", to: "liter-per-sec" },
    { label: "Liter/sec to Cubic Meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Liter/sec to Million Gallons/Day", from: "liter-per-sec", to: "million-gallons-per-day" }
  ],
  references: [
    "ISO 9906: Rotodynamic pumps — Hydraulic performance acceptance tests — Grades 1, 2 and 3.",
    "Hydraulic Institute: Engineering Data Book (3rd Edition).",
    "ASHRAE Handbook — HVAC Systems and Equipment."
  ]
};
