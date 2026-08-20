import { CustomArticleData } from "./types";

export const kelvinToRankine: CustomArticleData = {
  fromUnitId: "kelvin",
  toUnitId: "rankine",
  seoTitle: "Kelvin to Rankine Converter (K to °R)",
  metaDescription: "Convert Kelvin to Rankine (K to °R) with exact thermodynamic formulas. Explore absolute temperature scale conversions, engineering applications, and tables.",
  h1: "Kelvin to Rankine Converter",
  introduction: [
    "Converting Kelvin to Rankine (K to °R) is a pure scaling calculation between the two primary absolute temperature scales used in global physics and thermal engineering. While the Kelvin scale is the absolute thermodynamic unit for the metric/SI system, the Rankine scale serves as the absolute thermodynamic counterpart to the Fahrenheit system, widely employed in American mechanical and aerospace engineering.",
    "Because both Kelvin and Rankine originate at absolute zero (0 K = 0 °R), there is no additive offset in the conversion formula. The relationship depends entirely on the ratio of the Fahrenheit degree size to the Celsius/Kelvin degree size. Specifically, 1 Kelvin equals exactly 1.8 degrees Rankine. Multiplying any temperature in Kelvin by 1.8 (or 9/5) yields its exact Rankine value. This guide provides the thermodynamic background, worked engineering examples, and complete reference tables."
  ],
  quickAnswer: {
    text: "To convert Kelvin to Rankine, multiply the Kelvin temperature by 1.8 (or 9/5). For example, 300 K converts to 540 °R.",
    formulaDisplay: "°R = K × 1.8 = K × (9 / 5)",
    subtext: "Both scales share absolute zero as 0 (0 K = 0 °R). Water freezes at 273.15 K (491.67 °R) and boils at 373.15 K (671.67 °R)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kelvin Scale (K)",
    text: "Formulated in 1848 by William Thomson (Lord Kelvin), the Kelvin scale is the base unit of thermodynamic temperature in the International System of Units (SI). Written without a degree symbol as 'K', it begins at absolute zero (0 K)—the point of minimum thermal motion—and is defined by the Boltzmann constant ($1.380649 \\times 10^{-23}\\text{ J/K}$)."
  },
  aboutTargetUnit: {
    title: "Understanding the Rankine Scale (°R)",
    text: "Proposed in 1859 by Scottish civil engineer and physicist William John Macquorn Rankine, the Rankine scale (symbol °R or °Ra) is the absolute temperature scale of the English Engineering and US Customary systems. Like Kelvin, it starts at absolute zero (0 °R), but its unit step is identical to the Fahrenheit degree ($1\\text{ }^\\circ\\text{R} = 1\\text{ }^\\circ\\text{F}$)."
  },
  relationship: "Because both Kelvin and Rankine are absolute scales, 0 K is identical to 0 °R. The fundamental conversion ratio is determined by the size of the unit degrees: the Fahrenheit scale has 180 degrees between the freezing and boiling points of water, whereas the Kelvin scale has 100 increments across the same physical range. Consequently, $180 / 100 = 1.8$, meaning that $1\\text{ K} = 1.8\\text{ }^\\circ\\text{R}$.",
  relationshipTitle: "Kelvin vs Rankine Absolute Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "0 K = 0 °R" },
    { label: "Liquid Helium Boiling Point", value: "4.22 K = 7.60 °R" },
    { label: "Liquid Nitrogen Boiling Point", value: "77.36 K = 139.25 °R" },
    { label: "Water Freezing Point", value: "273.15 K = 491.67 °R" },
    { label: "Standard Room Temp (20 °C)", value: "293.15 K = 527.67 °R" },
    { label: "Water Boiling Point", value: "373.15 K = 671.67 °R" }
  ],
  formula: {
    text: "Multiply the Kelvin temperature directly by 1.8 (or 9/5).",
    math: "°R = K × 1.8",
    subtext: "Equivalent fractional formula: °R = K × (9 / 5)"
  },
  formulaTitle: "Kelvin to Rankine Conversion Formula",
  practicalTip: {
    title: "Mental Calculation Method",
    text: "To convert K to °R in your head, double the Kelvin number and subtract 10% of that doubled value. For example, for 300 K: double 300 to get 600; subtract 10% (60) to get 540 °R."
  },
  expertNote: {
    title: "The Zero-Offset Advantage",
    text: "Unlike conversions involving Celsius or Fahrenheit, converting between absolute scales (Kelvin and Rankine) requires no additive subtraction or addition because both scales share absolute zero as their origin."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Standard Ambient Temperature (298.15 K)",
        subtitle: "Convert the standard IUPAC laboratory temperature of 298.15 K to degrees Rankine.",
        steps: [
          "Start with the Kelvin temperature: 298.15 K.",
          "Apply the formula: °R = K × 1.8.",
          "Multiply: 298.15 × 1.8 = 536.67.",
          "Result: 298.15 K equals exactly 536.67 °R."
        ]
      },
      {
        title: "Example 2: Cryogenic Liquid Methane (111.67 K)",
        subtitle: "Convert the boiling point of LNG (liquid natural gas) from Kelvin to Rankine.",
        steps: [
          "Identify the starting temperature: 111.67 K.",
          "Multiply by 1.8: 111.67 × 1.8 = 201.006.",
          "Result: 111.67 K is approximately 201.01 °R."
        ]
      },
      {
        title: "Example 3: Freezing Water (273.15 K)",
        subtitle: "Convert the freezing point of pure water to Rankine.",
        steps: [
          "Take the temperature: 273.15 K.",
          "Multiply by 1.8: 273.15 × 1.8 = 491.67.",
          "Result: 273.15 K corresponds to exactly 491.67 °R."
        ]
      }
    ]
  },
  table: {
    title: "Kelvin to Rankine Engineering Reference Table",
    headers: ["Kelvin (K)", "Rankine (°R)", "Thermodynamic Benchmark"],
    rows: [
      { fromVal: "0.00 K", toVal: "0.00 °R", extra: "Absolute zero (complete thermodynamic rest)" },
      { fromVal: "4.22 K", toVal: "7.60 °R", extra: "Liquid helium-4 atmospheric boiling point" },
      { fromVal: "20.28 K", toVal: "36.50 °R", extra: "Liquid hydrogen atmospheric boiling point" },
      { fromVal: "77.36 K", toVal: "139.25 °R", extra: "Liquid nitrogen boiling point" },
      { fromVal: "90.19 K", toVal: "162.34 °R", extra: "Liquid oxygen boiling point" },
      { fromVal: "194.65 K", toVal: "350.37 °R", extra: "Dry ice sublimation temperature (-78.5 °C)" },
      { fromVal: "255.37 K", toVal: "459.67 °R", extra: "0 °F baseline point" },
      { fromVal: "273.15 K", toVal: "491.67 °R", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "293.15 K", toVal: "527.67 °R", extra: "Standard room temperature (20 °C / 68 °F)" },
      { fromVal: "298.15 K", toVal: "536.67 °R", extra: "NIST standard reference state (25 °C / 77 °F)" },
      { fromVal: "310.15 K", toVal: "558.27 °R", extra: "Human core body temperature (37 °C / 98.6 °F)" },
      { fromVal: "373.15 K", toVal: "671.67 °R", extra: "Boiling point of pure water at 1 atm" }
    ]
  },
  applications: {
    title: "Aerospace, Power Plants & Thermodynamic Applications",
    items: [
      {
        title: "Thermal Power Plant Rankine Cycle Modeling",
        text: "US power generation engineers modeling steam turbine efficiency and Rankine cycles use absolute temperatures in °R for enthalpy and entropy equations ($s = c_p \\ln(T_2/T_1)$)."
      },
      {
        title: "Gas Turbine & Rocket Propulsion Thermodynamics",
        text: "Combustion chamber analysis, nozzle expansion ratios, and Mach number stagnation temperature calculations in US aerospace defense programs frequently require converting scientific Kelvin data to Rankine."
      },
      {
        title: "Petrochemical Process Engineering",
        text: "Equation of state calculations (Peng-Robinson, Redlich-Kwong) implemented in American refinery simulators use absolute temperatures in Rankine."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Adding 459.67 to the formula: 459.67 is added when converting from Fahrenheit to Rankine (°R = °F + 459.67). When converting from Kelvin, you simply multiply by 1.8 with no additive term.",
      "Confusing Rankine (°R) with Réaumur (°Ré): Rankine is an absolute scale starting at 0 °R (-459.67 °F), whereas Réaumur is an 80-degree scale where water freezes at 0 °Ré.",
      "Adding a degree symbol to Kelvin: Kelvin is properly written as 'K', while Rankine is customarily written as '°R'."
    ]
  },
  faqs: [
    {
      question: "How do you convert Kelvin to Rankine?",
      answer: "Multiply the Kelvin temperature by 1.8 (or 9/5). The formula is °R = K × 1.8."
    },
    {
      question: "What is 0 Kelvin in Rankine?",
      answer: "0 K is exactly 0 °R, as both systems start at absolute zero."
    },
    {
      question: "What is 273.15 K in Rankine?",
      answer: "273.15 K is exactly 491.67 °R, which is the freezing point of pure water."
    },
    {
      question: "What is 300 K in Rankine?",
      answer: "300 K equals exactly 540.00 °R (300 × 1.8 = 540)."
    },
    {
      question: "What is 373.15 K in Rankine?",
      answer: "373.15 K is exactly 671.67 °R, which is the boiling point of pure water at 1 atm."
    },
    {
      question: "Why is there no addition or subtraction in the K to °R formula?",
      answer: "Because both Kelvin and Rankine are absolute thermodynamic temperature scales starting at absolute zero, they only differ by the scaling factor of their unit degrees (1.8)."
    },
    {
      question: "What is the relationship between Rankine and Fahrenheit?",
      answer: "The Rankine degree is identical in size to the Fahrenheit degree ($\Delta 1\\text{ }^\\circ\\text{R} = \\Delta 1\\text{ }^\\circ\\text{F}$), with °R = °F + 459.67."
    },
    {
      question: "What is room temperature in Rankine?",
      answer: "Standard room temperature (20 °C / 293.15 K / 68 °F) equals 527.67 °R."
    }
  ],
  relatedList: [
    { label: "Rankine to Kelvin", from: "rankine", to: "kelvin" },
    { label: "Kelvin to Celsius", from: "kelvin", to: "celsius" },
    { label: "Kelvin to Fahrenheit", from: "kelvin", to: "fahrenheit" },
    { label: "Fahrenheit to Rankine", from: "fahrenheit", to: "rankine" }
  ],
  references: [
    "Rankine, William J. M. (1859) - 'A Manual of the Steam Engine and Other Prime Movers'",
    "BIPM SI Brochure - The International System of Units (9th Edition)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units"
  ]
};
