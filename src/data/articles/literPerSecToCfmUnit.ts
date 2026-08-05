import { CustomArticleData } from "./types";

export const literPerSecToCfmUnit: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "cfm-unit",
  seoTitle: "Liter per Second to CFM Unit Converter - L/s to CFM",
  metaDescription: "Convert liters per second to CFM (Cubic Feet per Minute) airflow units. Learn the exact conversion factor (1 L/s ≈ 2.11888 CFM), HVAC duct design equations, and reference tables.",
  h1: "Liter per Second to CFM Unit Converter",
  introduction: [
    "Converting liters per second (L/s) to Cubic Feet per Minute (CFM) is a essential calculation across building mechanical design, ventilation engineering, air conditioning, and industrial fan specification. International building codes (such as ISO, CIBSE, and Australian Standards) specify outdoor air intake in liters per second, whereas North American equipment manufacturers and HVAC contractors rate fans and blowers in CFM.",
    "Because one cubic foot contains 28.316846592 liters and one minute contains 60 seconds, converting liters per second to CFM requires multiplying by approximately 2.11888. This article provides step-by-step conversion guidance, engineering principles, practical calculations, and conversion tables."
  ],
  quickAnswer: {
    text: "To convert liters per second to CFM units, multiply the flow rate in L/s by 2.11888. For example, a commercial ventilation intake of 200 L/s equals approximately 423.78 CFM.",
    formulaDisplay: "1 L/s ≈ 2.11888 CFM",
    subtext: "1 CFM unit equals approximately 0.471947 liters per second."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Second (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate indicating the movement of one cubic decimeter of air or gas per second. It is the international standard unit for indoor ventilation rates and building fresh air requirements."
  },
  aboutTargetUnit: {
    title: "Understanding the CFM Unit (Cubic Feet per Minute)",
    text: "The CFM unit (symbol: CFM or ft³/min) is an imperial unit of volumetric airflow rate representing the displacement of one cubic foot of air every minute. It is the primary rating unit for air handlers, blowers, air filters, and compressors across North America."
  },
  relationship: "The relationship between L/s and CFM derives from volume and time conversions between metric and imperial systems. 1 L/s delivers 60 liters per minute. Dividing 60 L/min by 28.316846592 liters per cubic foot yields 2.1188800033 CFM.",
  relationshipTitle: "Airflow Metric vs Imperial Relationship",
  relationshipItems: [
    { label: "1 Liter per Second (L/s)", value: "≈ 2.11888 CFM" },
    { label: "1 CFM Unit", value: "≈ 0.471947 Liters per Second (L/s)" }
  ],
  formula: {
    text: "To calculate volumetric airflow in CFM from liters per second, multiply the L/s value by 2.11888.",
    math: "Flow (CFM) = Flow (L/s) × 2.11888",
    subtext: "Exact mathematical formula: Flow (CFM) = Flow (L/s) × (60 / 28.316846592)."
  },
  formulaTitle: "The Liter per Second to CFM Unit Formula",
  practicalTip: {
    title: "Quick HVAC Field Estimation",
    text: "To estimate CFM from L/s quickly without a calculator: double the L/s value and add 10%. For example, 150 L/s × 2 = 300; plus 10% (30) gives 330 CFM (very close to 317.83 CFM)."
  },
  expertNote: {
    title: "Standard vs Actual Air Density",
    text: "In high-altitude or high-temperature duct calculations, check whether airflow is expressed as Standard CFM (SCFM) or Actual CFM (ACFM). The geometric unit conversion factor 2.11888 remains constant."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Commercial Kitchen Exhaust Fan",
        subtitle: "A commercial kitchen hood exhaust rate is specified as 350 L/s. Determine the fan capacity requirement in CFM.",
        steps: [
          "Identify the flow rate in L/s: 350 L/s.",
          "Apply the conversion formula: Flow (CFM) = 350 × 2.11888.",
          "Calculate: 350 × 2.11888 = 741.608 CFM.",
          "Result: 350 L/s corresponds to approximately 741.61 CFM."
        ]
      },
      {
        title: "Example 2: Cleanroom HEPA Filtration Unit",
        subtitle: "A pharmaceutical cleanroom laminar flow hood operates at 80 L/s. Convert this to CFM.",
        steps: [
          "Identify the flow rate: 80 L/s.",
          "Multiply by 2.11888: 80 × 2.11888 = 169.5104 CFM.",
          "Result: 80 L/s equals approximately 169.51 CFM."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Second to CFM Unit Conversion Reference",
    headers: ["Liters / Second (L/s)", "CFM Unit (CFM)", "Typical Mechanical & Ventilation Application"],
    rows: [
      { fromVal: "10 L/s", toVal: "21.19 CFM", extra: "Residential bathroom spot exhaust fan" },
      { fromVal: "25 L/s", toVal: "52.97 CFM", extra: "Individual office fresh air supply diffuser" },
      { fromVal: "50 L/s", toVal: "105.94 CFM", extra: "Commercial conference room ventilation" },
      { fromVal: "100 L/s", toVal: "211.89 CFM", extra: "Classroom dedicated outdoor air system" },
      { fromVal: "250 L/s", toVal: "529.72 CFM", extra: "Retail shop supply branch duct" },
      { fromVal: "500 L/s", toVal: "1,059.44 CFM", extra: "Rooftop packaged AC unit" },
      { fromVal: "1,000 L/s", toVal: "2,118.88 CFM", extra: "Large commercial air handling unit (AHU)" },
      { fromVal: "2,500 L/s", toVal: "5,297.20 CFM", extra: "Industrial dust collector blower" },
      { fromVal: "5,000 L/s", toVal: "10,594.40 CFM", extra: "Hospital surgical suite central air system" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "HVAC Duct Sizing & Air Distribution",
        text: "Mechanical engineers convert metric ventilation rates (L/s) into CFM for duct friction loss calculations using SMACNA charts."
      },
      {
        title: "Building Code Air Exchange Compliance",
        text: "ASHRAE and European ventilation standards require transforming outdoor air rates between L/s per person and CFM per square foot."
      },
      {
        title: "Industrial Dust & Fume Extraction",
        text: "Safety engineers evaluate woodworking and chemical fume hood exhaust performance by converting sensor outputs from L/s to CFM."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 2.11888 instead of multiplying when converting L/s to CFM.",
      "Confusing CFM (Cubic Feet per Minute) with CFS (Cubic Feet per Second).",
      "Omitting air density corrections when working at high altitudes or elevated air temperatures."
    ]
  },
  faqs: [
    {
      question: "How many CFM are in 1 liter per second?",
      answer: "There are approximately 2.11888 CFM in 1 liter per second."
    },
    {
      question: "How do I convert L/s to CFM?",
      answer: "Multiply the flow rate in liters per second by 2.11888."
    },
    {
      question: "What is 100 L/s in CFM?",
      answer: "100 L/s multiplied by 2.11888 equals approximately 211.89 CFM."
    },
    {
      question: "What is 250 L/s in CFM?",
      answer: "250 L/s multiplied by 2.11888 equals approximately 529.72 CFM."
    },
    {
      question: "How do I convert CFM back to L/s?",
      answer: "Divide the CFM value by 2.11888 (or multiply by 0.471947)."
    },
    {
      question: "Why do HVAC specs use both L/s and CFM?",
      answer: "Metric-based countries (UK, Australia, Europe) use L/s, whereas North America uses CFM."
    },
    {
      question: "What is 1,000 L/s in CFM?",
      answer: "1,000 L/s multiplied by 2.11888 equals approximately 2,118.88 CFM."
    },
    {
      question: "Is CFM the same for liquid and gas flow?",
      answer: "CFM measures geometric volume per minute. While identical mathematically, CFM is predominantly applied to gas and air flow in HVAC."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Cubic feet/min", from: "liter-per-sec", to: "cubic-feet-per-min" },
    { label: "Liter/sec to Cubic meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" },
    { label: "Liter/sec to CMH", from: "liter-per-sec", to: "cmh-unit" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" }
  ],
  references: [
    "ASHRAE Handbook — Fundamentals: Space Air Diffusion",
    "SMACNA HVAC Systems Testing, Adjusting & Balancing",
    "ISO 5801: Industrial Fans — Performance Testing"
  ]
};
