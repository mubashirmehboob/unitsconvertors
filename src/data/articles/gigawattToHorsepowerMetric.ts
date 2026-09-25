import { CustomArticleData } from "./types";

export const gigawattToHorsepowerMetric: CustomArticleData = {
  fromUnitId: "gigawatt",
  toUnitId: "horsepower-metric",
  seoTitle: "Gigawatt to Metric Horsepower Converter (GW to PS)",
  metaDescription: "Convert gigawatts to metric horsepower (GW to PS/cv). Exact DIN 66036 conversion factor, calculation steps, power plant tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/gigawatt-to-metric-horsepower",
  h1: "Gigawatt to Metric Horsepower Converter",
  introduction: [
    "The gigawatt (GW) and metric horsepower (commonly abbreviated as PS from German Pferdestärke, cv from French cheval-vapeur, or ch) represent power across the modern SI framework and continental European engineering traditions. While gigawatts quantify the output of national electrical grids, regional transmission corridors, and massive hydroelectric schemes, metric horsepower is widely recognized in European and Asian machinery and automotive engineering.",
    "Converting gigawatts to metric horsepower requires understanding the metric definition established under DIN 66036. One metric horsepower is defined as the power required to raise a 75-kilogram mass vertically against standard Earth gravity (9.80665 m/s²) at a speed of one meter per second. This yields exactly 75 × 9.80665 = 735.49875 watts. Because one gigawatt equals one billion watts (10⁹ W), one gigawatt equals 1,000,000,000 ÷ 735.49875 ≈ 1,359,621.62 metric horsepower.",
    "This technical guide explains the mathematical conversion between gigawatts and metric horsepower, provides step-by-step turbine calculation examples, includes a comprehensive grid-scale conversion table, highlights industrial machinery applications, and answers frequently asked engineering questions."
  ],
  quickAnswer: {
    text: "To convert gigawatts (GW) to metric horsepower (PS), multiply the gigawatt value by 1,359,621.62 (or divide by 7.3549875 × 10⁻⁷). For instance, a 1 GW power station generates approximately 1,359,621.6 PS of equivalent mechanical shaft power.",
    formulaDisplay: "PS = GW × 1,359,621.62",
    subtext: "1 gigawatt is approximately equal to 1,359,622 metric horsepower (PS / cv)."
  },
  aboutSourceUnit: {
    title: "Understanding the Gigawatt (GW)",
    text: "The gigawatt (symbol: GW) is an SI decimal multiple equal to 1,000,000,000 watts (10⁹ W). It is the standard worldwide unit for rating national power networks, regional interconnect capacity, base-load nuclear power stations, and continental renewable energy targets."
  },
  aboutTargetUnit: {
    title: "Understanding Metric Horsepower (PS / cv)",
    text: "Metric horsepower (symbols: PS, cv, ch, pk) is defined as exactly 75 meter-kilograms-force per second (75 kgf·m/s), which equates to exactly 735.49875 watts. Established across continental Europe during the metrication era, it remains prevalent in European vehicle ratings, heavy industrial engines, and industrial pump specifications."
  },
  relationship: "Because 1 GW = 1,000,000,000 W and 1 metric horsepower = 735.49875 W, dividing 10⁹ by 735.49875 yields exactly 1,359,621.617 metric horsepower. Conversely, 1 metric horsepower equals 735.49875 × 10⁻⁹ GW = 0.00000073549875 GW.",
  relationshipTitle: "Gigawatt to Metric Horsepower Equivalence",
  relationshipItems: [
    { label: "0.0007355 GW", value: "1,000 PS (Marine propulsion diesel engine)" },
    { label: "0.01 GW", value: "13,596.22 PS (Heavy industrial gas compressor train)" },
    { label: "0.1 GW", value: "135,962.16 PS (Peak tractive power of high-speed rail lines)" },
    { label: "0.5 GW", value: "679,810.81 PS (Utility thermal generation unit)" },
    { label: "1.0 GW", value: "1,359,621.62 PS (Standard commercial nuclear power unit)" }
  ],
  formula: {
    text: "Multiply the power in gigawatts by 1,359,621.62 to obtain metric horsepower.",
    math: "PS = GW * 1359621.62",
    subtext: "Alternatively: PS = (GW × 1,000,000,000) ÷ 735.49875"
  },
  formulaTitle: "Gigawatt to Metric Horsepower Conversion Formula",
  practicalTip: {
    title: "The 1.36 Million Rule",
    text: "For rapid mental estimates, multiply gigawatts by 1.36 to get millions of metric horsepower (PS). For example, 2 GW × 1.36 ≈ 2.72 million PS (exact: 2.719 million PS), which is within 0.03% accuracy."
  },
  expertNote: {
    title: "Metric Horsepower (PS) vs Imperial Horsepower (hp)",
    text: "Metric horsepower (735.5 W) produces slightly higher numerical values than imperial horsepower (745.7 W). 1 GW equals 1,359,622 PS compared to 1,341,022 imperial hp—a difference of 18,600 units (approx. 1.39%). Always confirm whether technical tender specifications demand DIN PS or imperial hp."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: European Hydroelectric Facility",
        subtitle: "Convert a 1.25 GW Alpine pumped-storage hydroelectric facility into metric horsepower.",
        steps: [
          "Identify the power value: 1.25 GW.",
          "Apply the formula: PS = 1.25 × 1,359,621.62.",
          "Multiply: 1.25 × 1,359,621.62 = 1,699,527.02 PS.",
          "Result: 1.25 GW equals approximately 1,699,527 metric horsepower (PS)."
        ]
      },
      {
        title: "Example 2: Nuclear Power Block Shaft Output",
        subtitle: "Convert a 0.9 GW nuclear turbine shaft output into metric horsepower.",
        steps: [
          "State the capacity: 0.9 GW.",
          "Calculate: 0.9 × 1,359,621.62 = 1,223,659.46 PS.",
          "Result: 0.9 GW corresponds to approximately 1,223,659 PS."
        ]
      },
      {
        title: "Example 3: Utility Gas Turbine Combined Cycle",
        subtitle: "Determine the metric horsepower equivalent of a 0.45 GW combined-cycle power block.",
        steps: [
          "State the power: 0.45 GW.",
          "Compute: 0.45 × 1,359,621.62 = 611,829.73 PS.",
          "Result: 0.45 GW equals approximately 611,830 PS."
        ]
      }
    ]
  },
  table: {
    title: "Gigawatt to Metric Horsepower Conversion Table",
    headers: ["Gigawatts (GW)", "Metric Horsepower (PS / cv)", "Megawatts (MW)", "Engineering Reference"],
    rows: [
      { fromVal: "0.001 GW", toVal: "1,359.62 PS", extra: "1 MW", extra2: "Heavy mining excavator motor" },
      { fromVal: "0.005 GW", toVal: "6,798.11 PS", extra: "5 MW", extra2: "Marine tugboat dual propulsion" },
      { fromVal: "0.01 GW", toVal: "13,596.22 PS", extra: "10 MW", extra2: "Container ship auxiliary engine" },
      { fromVal: "0.05 GW", toVal: "67,981.08 PS", extra: "50 MW", extra2: "Industrial gas turbine compressor drive" },
      { fromVal: "0.10 GW", toVal: "135,962.16 PS", extra: "100 MW", extra2: "Continental high-speed rail corridor load" },
      { fromVal: "0.25 GW", toVal: "339,905.40 PS", extra: "250 MW", extra2: "Thermal peaking plant unit" },
      { fromVal: "0.50 GW", toVal: "679,810.81 PS", extra: "500 MW", extra2: "Standard combined-cycle power block" },
      { fromVal: "0.75 GW", toVal: "1,019,716.21 PS", extra: "750 MW", extra2: "Large supercritical steam turbine unit" },
      { fromVal: "1.00 GW", toVal: "1,359,621.62 PS", extra: "1,000 MW", extra2: "Standard commercial pressurized water reactor" },
      { fromVal: "1.21 GW", toVal: "1,645,142.16 PS", extra: "1,210 MW", extra2: "Iconic cinematic power reference" },
      { fromVal: "2.00 GW", toVal: "2,719,243.23 PS", extra: "2,000 MW", extra2: "Hoover Dam full hydroelectric capacity" },
      { fromVal: "5.00 GW", toVal: "6,798,108.09 PS", extra: "5,000 MW", extra2: "Large river basin hydroelectric generation" }
    ]
  },
  applications: {
    title: "Practical Applications of GW to PS Conversion",
    items: [
      {
        title: "European Turbine Engineering Specifications",
        text: "European heavy equipment manufacturers (such as Siemens Energy or MAN Energy Solutions) specify steam and gas turbine shaft ratings in both megawatts and DIN Pferdestärke (PS)."
      },
      {
        title: "Rail Network Traction System Design",
        text: "TGV, ICE, and Shinkansen electrical engineers calculate aggregate tractive fleet power in metric horsepower to determine required electrical substation feeds in gigawatts."
      },
      {
        title: "Marine Propulsion Plant Sizing",
        text: "Naval engineers convert naval nuclear reactor output in gigawatts thermal/electrical into shaft metric horsepower to evaluate maximum vessel displacement and propeller torque."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Confusing metric horsepower (PS) with imperial horsepower (hp): 1 PS is 735.5 W, whereas 1 hp is 745.7 W. 1 GW equals 1,359,622 PS but only 1,341,022 hp.",
      "Dividing instead of multiplying: 1 GW produces over 1.35 million metric horsepower; the PS value must always be significantly larger than the GW value.",
      "Omitting standard gravity: Metric horsepower is based on standard acceleration of gravity (9.80665 m/s²). Approximating gravity as 9.8 m/s² leads to calculation drift."
    ]
  },
  faqs: [
    {
      question: "How many metric horsepower are in 1 gigawatt?",
      answer: "There are approximately 1,359,621.62 metric horsepower (PS / cv) in 1 gigawatt."
    },
    {
      question: "What is the formula to convert gigawatts to metric horsepower?",
      answer: "The formula is: PS = gigawatts × 1,359,621.62 (or PS = GW × 10⁹ ÷ 735.49875)."
    },
    {
      question: "How do I convert metric horsepower back to gigawatts?",
      answer: "Divide the metric horsepower value by 1,359,621.62 (or multiply by 7.3549875 × 10⁻⁷)."
    },
    {
      question: "What do the abbreviations PS and cv stand for?",
      answer: "PS stands for Pferdestärke (German for horsepower), and cv stands for cheval-vapeur (French for steam-horse). Both designate metric horsepower defined as 75 kgf·m/s (735.49875 W)."
    },
    {
      question: "Is metric horsepower larger or smaller than imperial horsepower?",
      answer: "Metric horsepower is slightly smaller in physical power (735.5 W vs 745.7 W). Therefore, the same power in gigawatts yields a higher numerical count in metric horsepower (1,359,622 PS vs 1,341,022 hp)."
    },
    {
      question: "What is 0.5 GW in metric horsepower?",
      answer: "0.5 GW × 1,359,621.62 = 679,810.81 PS (approx. 679,811 metric horsepower)."
    },
    {
      question: "What is 1.21 GW in metric horsepower?",
      answer: "1.21 GW equals approximately 1,645,142 metric horsepower (PS)."
    },
    {
      question: "Why is metric horsepower still used in industry?",
      answer: "Metric horsepower remains deeply rooted in automotive regulations, internal combustion engine marketing, and turbine engineering standards throughout Germany, France, Japan, and other metric nations."
    }
  ],
  relatedList: [
    { label: "Metric Horsepower to Gigawatt", from: "horsepower-metric", to: "gigawatt" },
    { label: "Gigawatt to Horsepower (Mechanical)", from: "gigawatt", to: "horsepower-mechanical" },
    { label: "Gigawatt to Megawatt", from: "gigawatt", to: "megawatt" },
    { label: "Gigawatt to Watt", from: "gigawatt", to: "watt" },
    { label: "Megawatt to Horsepower (Metric)", from: "megawatt", to: "horsepower-metric" }
  ],
  references: [
    "DIN 66036 - Measurement of power in mechanical engineering (Pferdestärke).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "BIPM - The International System of Units (SI), Appendix 1."
  ]
};
