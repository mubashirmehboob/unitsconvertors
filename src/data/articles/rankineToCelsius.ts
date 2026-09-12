import { CustomArticleData } from "./types";

export const rankineToCelsius: CustomArticleData = {
  fromUnitId: "rankine",
  toUnitId: "celsius",
  seoTitle: "Rankine to Celsius Converter (°R to °C) - UnitsConvertors",
  metaDescription: "Convert Rankine to Celsius (°R to °C) with exact scientific precision. Learn the (°R - 491.67) / 1.8 formula, cryogenic thermodynamics, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/rankine-to-celsius",
  h1: "Rankine to Celsius Converter",
  introduction: [
    "Converting temperature from Rankine to Celsius translates absolute thermodynamic readings from American aerospace and engineering literature into the global metric standard. While Rankine measures thermal energy from absolute zero using Fahrenheit-sized degree steps, Celsius benchmarks temperature against the physical freezing and boiling points of pure water at one standard atmosphere.",
    "Because the Rankine scale places water's freezing point at exactly 491.67 °R and boiling at 671.67 °R, a temperature span of 180 degrees Rankine corresponds to exactly 100 degrees Celsius. Therefore, each degree Celsius is exactly 1.8 times larger than a degree Rankine. To convert Rankine to Celsius, subtract 491.67 from the Rankine reading and divide the difference by 1.8, or equivalently multiply by 5/9.",
    "This technical reference provides the mathematical derivation connecting imperial absolute temperature with the metric scale, outlines step-by-step cryogenic and heat transfer examples, and delivers an extensive reference conversion table."
  ],
  quickAnswer: {
    text: "To convert Rankine to Celsius, subtract 491.67 from the Rankine temperature and divide the result by 1.8 (or multiply by 5/9). For example, 500 °R converts to approximately 4.63 °C, while water's boiling point of 671.67 °R equals exactly 100 °C.",
    formulaDisplay: "°C = (°R - 491.67) ÷ 1.8",
    subtext: "0 °R = -273.15 °C (Absolute Zero) | 491.67 °R = 0 °C (Water Freezing) | 671.67 °R = 100 °C (Water Boiling)"
  },
  aboutSourceUnit: {
    title: "Understanding the Rankine Scale (°R)",
    text: "Proposed in 1859 by Scottish civil engineer and physicist William John Macquorn Rankine, the Rankine scale is an absolute thermodynamic temperature scale. Its zero mark (0 °R) represents absolute zero, the state where molecular kinetic energy reaches its theoretical minimum. Because its degree increment matches the Fahrenheit degree exactly, it serves as the foundational absolute temperature scale for American mechanical, aerospace, and chemical engineers calculating gas laws and thermodynamic cycles using imperial units."
  },
  aboutTargetUnit: {
    title: "Understanding the Celsius Scale (°C)",
    text: "Originating from Swedish astronomer Anders Celsius in 1742 and standardized by the International Committee for Weights and Measures, the Celsius scale is the primary metric temperature scale used worldwide. It defines 0 °C as the freezing point of water and 100 °C as the boiling point of water at standard atmospheric pressure (101.325 kPa). It is directly linked to the thermodynamic Kelvin scale by the exact relation: 0 °C = 273.15 K."
  },
  relationship: "The Rankine and Celsius scales differ in both zero baseline and degree size. The Rankine zero lies at absolute zero (-273.15 °C), while the Celsius zero is 491.67 °R higher at the freezing point of water. Additionally, 1 °C equals exactly 1.8 °R, meaning Rankine degrees are smaller and more granular.",
  relationshipTitle: "Rankine to Celsius Fundamental Thermal Benchmarks",
  relationshipItems: [
    { label: "Absolute Zero", value: "0 °R = -273.15 °C" },
    { label: "Liquid Nitrogen Boiling", value: "139.34 °R ≈ -195.79 °C" },
    { label: "Fahrenheit / Celsius Parity", value: "419.67 °R = -40.00 °C" },
    { label: "Pure Water Freezing Point", value: "491.67 °R = 0.00 °C" },
    { label: "Standard Room Temperature", value: "527.67 °R = 20.00 °C" },
    { label: "Average Human Body Temperature", value: "558.27 °R = 37.00 °C" },
    { label: "Pure Water Boiling Point", value: "671.67 °R = 100.00 °C" }
  ],
  formula: {
    text: "Subtract the water freezing offset of 491.67 from the temperature in Rankine, then divide by 1.8 (or multiply by the rational fraction 5/9).",
    math: "T_{(^\\circ\\text{C})} = \\frac{T_{(^\\circ\\text{R})} - 491.67}{1.8} = \\left(T_{(^\\circ\\text{R})} - 491.67\\right) \\times \\frac{5}{9}",
    subtext: "To convert in reverse (°C to °R): Multiply °C by 1.8 and add 491.67."
  },
  formulaTitle: "Mathematical Formula: °R to °C",
  practicalTip: {
    title: "Two-Step Mental Calculation Method",
    text: "To approximate quickly: First subtract 460 to find Fahrenheit (e.g., 532 °R - 460 = 72 °F). Then subtract 32 and divide by 2 for a ballpark Celsius estimate (40 / 2 ≈ 20 °C; exact value is 22.41 °C)."
  },
  expertNote: {
    title: "Aerospace Propulsion & Heat Transfer",
    text: "Rocket engine combustor temperatures and turbine inlet gas dynamics are traditionally modeled in Rankine in NASA and US military technical reports. Converting to Celsius or Kelvin is mandatory when integrating international payload hardware or publishing in European aerothermodynamic symposiums."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Liquid Oxygen Storage Temperature",
        subtitle: "A rocket propellant tank stores liquid oxygen (LOX) at 162.27 °R. Convert this cryogenic reading to Celsius.",
        steps: [
          "State the starting Rankine reading: 162.27 °R.",
          "Subtract the water freezing offset: 162.27 - 491.67 = -329.40.",
          "Divide the result by 1.8: -329.40 ÷ 1.8 = -183.00 °C.",
          "Result: 162.27 °R equals exactly -183.00 °C (the normal boiling point of liquid oxygen)."
        ]
      },
      {
        title: "Example 2: Gas Turbine Exhaust Gas Temperature (EGT)",
        subtitle: "An industrial gas turbine monitoring gauge displays an exhaust reading of 1,481.67 °R. Determine the equivalent exhaust temperature in Celsius.",
        steps: [
          "State the temperature: 1,481.67 °R.",
          "Subtract 491.67: 1,481.67 - 491.67 = 990.00.",
          "Divide by 1.8: 990.00 ÷ 1.8 = 550.00 °C.",
          "Result: 1,481.67 °R corresponds to 550.00 °C."
        ]
      },
      {
        title: "Example 3: Standard Ambient Cleanroom",
        subtitle: "An aerospace cleanroom specification mandates an operating climate of 531.67 °R. Calculate the corresponding Celsius value.",
        steps: [
          "State the temperature: 531.67 °R.",
          "Subtract 491.67: 531.67 - 491.67 = 40.00.",
          "Divide by 1.8: 40.00 ÷ 1.8 = 22.22 °C.",
          "Result: 531.67 °R equals approximately 22.22 °C (72.00 °F)."
        ]
      }
    ]
  },
  table: {
    title: "Rankine to Celsius Reference Table",
    headers: ["Rankine (°R)", "Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Thermal State Benchmark"],
    rows: [
      { fromVal: "0.00 °R", toVal: "-273.15 °C", extra: "-459.67 °F", extra2: "0.00 K", extra3: "Absolute zero (zero kinetic state)" },
      { fromVal: "7.56 °R", toVal: "-268.95 °C", extra: "-452.11 °F", extra2: "4.20 K", extra3: "Liquid helium boiling point (1 atm)" },
      { fromVal: "139.34 °R", toVal: "-195.79 °C", extra: "-320.42 °F", extra2: "77.36 K", extra3: "Liquid nitrogen boiling point" },
      { fromVal: "162.27 °R", toVal: "-183.00 °C", extra: "-297.40 °F", extra2: "90.15 K", extra3: "Liquid oxygen boiling point" },
      { fromVal: "350.00 °R", toVal: "-78.71 °C", extra: "-109.67 °F", extra2: "194.44 K", extra3: "Sublimation point of dry ice (CO₂)" },
      { fromVal: "419.67 °R", toVal: "-40.00 °C", extra: "-40.00 °F", extra2: "233.15 K", extra3: "Cross-scale intersection of °C and °F" },
      { fromVal: "459.67 °R", toVal: "-17.78 °C", extra: "0.00 °F", extra2: "255.37 K", extra3: "Zero degrees Fahrenheit reference" },
      { fromVal: "491.67 °R", toVal: "0.00 °C", extra: "32.00 °F", extra2: "273.15 K", extra3: "Freezing point of pure water" },
      { fromVal: "500.00 °R", toVal: "4.63 °C", extra: "40.33 °F", extra2: "277.78 K", extra3: "Chilled refrigeration baseline" },
      { fromVal: "527.67 °R", toVal: "20.00 °C", extra: "68.00 °F", extra2: "293.15 K", extra3: "Standard room temperature" },
      { fromVal: "536.67 °R", toVal: "25.00 °C", extra: "77.00 °F", extra2: "298.15 K", extra3: "NIST standard reference temperature" },
      { fromVal: "558.27 °R", toVal: "37.00 °C", extra: "98.60 °F", extra2: "310.15 K", extra3: "Normal human core body temperature" },
      { fromVal: "671.67 °R", toVal: "100.00 °C", extra: "212.00 °F", extra2: "373.15 K", extra3: "Boiling point of pure water (1 atm)" },
      { fromVal: "1,000.00 °R", toVal: "282.41 °C", extra: "540.33 °F", extra2: "555.56 K", extra3: "High-temperature baking and curing oven" },
      { fromVal: "1,500.00 °R", toVal: "560.19 °C", extra: "1,040.33 °F", extra2: "833.33 K", extra3: "Industrial gas turbine exhaust flow" }
    ]
  },
  applications: {
    title: "Core Engineering & Industrial Applications",
    items: [
      {
        title: "Aerospace Propulsion & Rocketry",
        text: "Combustion chamber simulations developed in the United States using legacy codebases (such as CEA) output stagnation temperatures in Rankine. Test engineers convert these data points to Celsius when testing sensors fabricated to European metric standards."
      },
      {
        title: "Cryogenic Gas Liquefaction",
        text: "Industrial plants liquefying natural gas (LNG), helium, and hydrogen frequently bridge US mechanical equipment ratings in Rankine with international process safety instrumentation calibrated in Celsius."
      },
      {
        title: "HVAC & Thermal Building Analysis",
        text: "Multinational engineering firms convert psychrometric enthalpy calculations and heating degree standards between American IP (Inch-Pound) Rankine figures and metric building energy models."
      },
      {
        title: "Turbomachinery & Power Plants",
        text: "Steam and gas turbine cycle efficiencies (Brayton and Rankine thermodynamic cycles) rely on absolute temperature for Carnot efficiency evaluations, requiring conversion when reporting to global energy authorities."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1.8 before subtracting 491.67: Order of operations is critical. You must subtract 491.67 first, then divide by 1.8. Dividing first shifts the zero baseline improperly and produces erroneous results.",
      "Confusing Rankine with Kelvin: Both scales originate at absolute zero, but Kelvin uses Celsius-sized degree increments (1 K = 1.8 °R). Dividing Rankine directly by 1.8 gives Kelvin, not Celsius.",
      "Using 459.67 instead of 491.67: Subtracting 459.67 yields degrees Fahrenheit, not degrees Celsius. You must account for water's freezing point at 32 °F (459.67 + 32 = 491.67).",
      "Treating temperature differences as absolute points: When converting a temperature change (ΔT), do not subtract 491.67. A temperature rise of 18 °R corresponds exactly to a rise of 10 °C (Δ°C = Δ°R ÷ 1.8)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Rankine to Celsius?",
      answer: "Subtract 491.67 from the Rankine temperature, then divide the result by 1.8. As an equation: °C = (°R - 491.67) ÷ 1.8."
    },
    {
      question: "What is 0 degrees Rankine in Celsius?",
      answer: "0 °R equals exactly -273.15 °C, which represents absolute zero, the lowest theoretically attainable temperature in physics."
    },
    {
      question: "What is 491.67 Rankine in Celsius?",
      answer: "491.67 °R equals exactly 0.00 °C, the freezing point of pure water at standard atmospheric pressure."
    },
    {
      question: "What is 671.67 Rankine in Celsius?",
      answer: "671.67 °R equals exactly 100.00 °C, the boiling point of pure water under standard atmospheric conditions."
    },
    {
      question: "What is the difference between Rankine and Celsius?",
      answer: "Rankine is an absolute temperature scale starting at absolute zero, with degree intervals equal in size to Fahrenheit degrees. Celsius is a relative scale starting at the freezing point of water, with degree intervals 1.8 times larger than Rankine."
    },
    {
      question: "How do you convert a temperature interval (delta) from Rankine to Celsius?",
      answer: "To convert a temperature difference, simply divide the change in Rankine by 1.8 (Δ°C = Δ°R ÷ 1.8). Do not add or subtract 491.67."
    },
    {
      question: "What is 500 Rankine in Celsius?",
      answer: "Subtracting 491.67 yields 8.33. Dividing 8.33 by 1.8 results in approximately 4.63 °C."
    },
    {
      question: "What is 527.67 Rankine in Celsius?",
      answer: "Subtracting 491.67 from 527.67 leaves 36.00. Dividing 36.00 by 1.8 gives exactly 20.00 °C (standard room temperature)."
    },
    {
      question: "Why does the conversion formula divide by 1.8?",
      answer: "Between the freezing and boiling points of water, there are 180 degrees Rankine and 100 degrees Celsius. The ratio 180 / 100 simplifies to 1.8 (or 9/5), establishing that each Celsius degree contains 1.8 Rankine degrees."
    },
    {
      question: "Can Rankine have negative values?",
      answer: "No. Because 0 °R is defined as absolute zero—the thermodynamic floor of matter—negative Rankine temperatures do not exist in conventional physics."
    }
  ],
  relatedList: [
    { label: "Rankine to Fahrenheit", from: "rankine", to: "fahrenheit" },
    { label: "Rankine to Kelvin", from: "rankine", to: "kelvin" },
    { label: "Celsius to Rankine", from: "celsius", to: "rankine" },
    { label: "Fahrenheit to Celsius", from: "fahrenheit", to: "celsius" },
    { label: "Kelvin to Celsius", from: "kelvin", to: "celsius" }
  ],
  references: [
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)",
    "ASME Steam Tables — Thermodynamic Properties of Water and Steam",
    "BIPM — Consultative Committee for Thermometry (CCT) Guidelines"
  ]
};
