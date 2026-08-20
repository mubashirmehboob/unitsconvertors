import { CustomArticleData } from "./types";

export const kelvinToCelsius: CustomArticleData = {
  fromUnitId: "kelvin",
  toUnitId: "celsius",
  seoTitle: "Kelvin to Celsius Converter (K to °C)",
  metaDescription: "Convert Kelvin to Celsius (K to °C) instantly with exact SI formulas. Learn thermodynamic definitions, cryogenic benchmarks, step-by-step math, and reference tables.",
  h1: "Kelvin to Celsius Converter",
  introduction: [
    "Converting Kelvin to Celsius (K to °C) is one of the most fundamental calculations in modern physics, chemistry, thermodynamics, and atmospheric science. While Kelvin is the base unit of thermodynamic temperature in the International System of Units (SI), the Celsius scale is the universally preferred standard for everyday meteorology, manufacturing, medicine, and engineering.",
    "Because both scales share identical unit increments—where a temperature change of 1 Kelvin equals an exact temperature change of 1 degree Celsius ($\Delta 1\\text{ K} = \\Delta 1\\text{ }^\\circ\\text{C}$)—converting between them requires only a simple subtraction of 273.15. This offset accounts for the distance between absolute zero (0 K) and the freezing point of pure water (0 °C). This guide provides the official BIPM definitions, step-by-step conversion examples, cryogenic benchmarks, and reference tables."
  ],
  quickAnswer: {
    text: "To convert Kelvin to Celsius, subtract 273.15 from the Kelvin temperature. For example, 300 K converts to 26.85 °C.",
    formulaDisplay: "°C = K - 273.15",
    subtext: "Absolute zero is 0 K (-273.15 °C), water freezes at 273.15 K (0 °C), and water boils at 373.15 K (100 °C) at 1 atm."
  },
  aboutSourceUnit: {
    title: "Understanding the Kelvin Scale (K)",
    text: "Named in honor of Scottish physicist William Thomson, 1st Baron Kelvin, the Kelvin is the SI base unit of thermodynamic temperature (symbol K, written without a degree symbol). Kelvin is an absolute scale starting at absolute zero (0 K), the hypothetical state where classical molecular kinetic motion reaches its theoretical minimum. Following the 2019 redefinition of SI base units, the Kelvin is defined by fixing the numerical value of the Boltzmann constant $k$ to exactly $1.380649 \\times 10^{-23}\\text{ J}\\cdot\\text{K}^{-1}$."
  },
  aboutTargetUnit: {
    title: "Understanding the Celsius Scale (°C)",
    text: "Conceived in 1742 by Swedish astronomer Anders Celsius, the Celsius scale (formerly known as centigrade) is an SI derived unit. It defines 0 °C as the freezing point of water and 100 °C as the boiling point of pure water under standard atmospheric pressure (101.325 kPa). It is used globally across consumer meteorology, scientific research, and industrial manufacturing."
  },
  relationship: "The Kelvin and Celsius scales possess the exact same degree magnitude: an increase of 1 K represents the identical thermal energy increase as an increase of 1 °C. The only difference is the choice of origin: the Kelvin scale begins at absolute zero (0 K), while the Celsius scale sets its zero at the freezing point of water, which sits exactly 273.15 units above absolute zero.",
  relationshipTitle: "Kelvin vs Celsius Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "0 K = -273.15 °C" },
    { label: "Liquid Nitrogen Boiling Point", value: "77.36 K = -195.79 °C" },
    { label: "Water Freezing Point", value: "273.15 K = 0.00 °C" },
    { label: "Water Triple Point", value: "273.16 K = 0.01 °C" },
    { label: "Standard Room Temperature", value: "293.15 K = 20.00 °C" },
    { label: "Water Boiling Point", value: "373.15 K = 100.00 °C" }
  ],
  formula: {
    text: "Subtract the exact thermodynamic offset of 273.15 from the Kelvin value.",
    math: "°C = K - 273.15",
    subtext: "For rapid mental estimates, subtracting 273 is often used in non-critical situations."
  },
  formulaTitle: "Kelvin to Celsius Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To approximate °C quickly from Kelvin, subtract 273. For example, 310 K - 273 = 37 °C (exact is 36.85 °C). This mental trick is accurate within 0.15 °C."
  },
  expertNote: {
    title: "The Triple Point of Water Distinction",
    text: "The triple point of water—where solid ice, liquid water, and water vapor coexist in thermodynamic equilibrium—is defined at exactly 273.16 K (0.01 °C), which is 0.01 K above the normal freezing point at 1 atmosphere (273.15 K)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Standard Laboratory Ambient Temperature (298.15 K)",
        subtitle: "Convert the standard IUPAC thermodynamic reference temperature of 298.15 K to Celsius.",
        steps: [
          "Start with the Kelvin temperature: 298.15 K.",
          "Apply the conversion formula: °C = K - 273.15.",
          "Perform the subtraction: 298.15 - 273.15 = 25.00.",
          "Result: 298.15 K is exactly 25.00 °C."
        ]
      },
      {
        title: "Example 2: Cryogenic Liquid Nitrogen (77.36 K)",
        subtitle: "Determine the Celsius boiling point of liquid nitrogen at atmospheric pressure.",
        steps: [
          "Identify the Kelvin temperature: 77.36 K.",
          "Subtract 273.15: 77.36 - 273.15 = -195.79.",
          "Result: Liquid nitrogen boils at -195.79 °C."
        ]
      },
      {
        title: "Example 3: Human Body Temperature (310.15 K)",
        subtitle: "Convert physiological core body temperature from Kelvin to Celsius.",
        steps: [
          "Take the temperature: 310.15 K.",
          "Subtract 273.15: 310.15 - 273.15 = 37.00.",
          "Result: 310.15 K corresponds to normal human body temperature of 37.00 °C."
        ]
      }
    ]
  },
  table: {
    title: "Kelvin to Celsius Scientific Reference Table",
    headers: ["Kelvin (K)", "Celsius (°C)", "Physical & Astronomical Phenomenon"],
    rows: [
      { fromVal: "0.00 K", toVal: "-273.15 °C", extra: "Absolute zero (minimum thermodynamic kinetic state)" },
      { fromVal: "2.73 K", toVal: "-270.42 °C", extra: "Cosmic Microwave Background (CMB) radiation" },
      { fromVal: "4.22 K", toVal: "-268.93 °C", extra: "Liquid helium boiling point (1 atm)" },
      { fromVal: "77.36 K", toVal: "-195.79 °C", extra: "Liquid nitrogen boiling point" },
      { fromVal: "194.65 K", toVal: "-78.50 °C", extra: "Dry ice sublimation point (CO₂ solid)" },
      { fromVal: "233.15 K", toVal: "-40.00 °C", extra: "Mercury solidification / °C and °F parity" },
      { fromVal: "273.15 K", toVal: "0.00 °C", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "273.16 K", toVal: "0.01 °C", extra: "Triple point of water (V-SMOW standard)" },
      { fromVal: "293.15 K", toVal: "20.00 °C", extra: "Standard room temperature" },
      { fromVal: "298.15 K", toVal: "25.00 °C", extra: "Standard ambient temperature for thermodynamic tables (NIST)" },
      { fromVal: "310.15 K", toVal: "37.00 °C", extra: "Normal human core body temperature" },
      { fromVal: "373.15 K", toVal: "100.00 °C", extra: "Boiling point of pure water at sea level" },
      { fromVal: "5778.00 K", toVal: "5504.85 °C", extra: "Solar photosphere effective surface temperature" }
    ]
  },
  applications: {
    title: "Scientific, Engineering & Space Applications",
    items: [
      {
        title: "Cryogenics & Superconductivity Research",
        text: "Low-temperature laboratories operating liquid helium cryostats and superconducting quantum interference devices record temperature sensors in Kelvin and convert them to Celsius for engineering specifications."
      },
      {
        title: "Atmospheric Modeling & Meteorology",
        text: "Numerical weather prediction models and thermodynamic sounding diagrams calculate potential temperature and lapse rates in Kelvin before outputting ground-level forecasts in Celsius."
      },
      {
        title: "Chemical Thermodynamics & Gas Laws",
        text: "Calculating equilibrium constants, Gibbs free energy ($\Delta G = \Delta H - T\Delta S$), and the ideal gas equation ($PV = nRT$) requires Kelvin inputs, which are subsequently converted back to Celsius for laboratory reactor monitoring."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Adding a degree symbol to Kelvin: Kelvin is written as 'K' (e.g., 300 K), never '°K'. Celsius always uses the degree symbol '°C'.",
      "Using 273 instead of 273.15 in precision engineering: Omitting the 0.15 decimal fraction leads to a 0.15 °C discrepancy, which is significant in calorimetry and thermochemistry.",
      "Attempting negative Kelvin values in classical contexts: Temperature in Kelvin cannot drop below 0 K (absolute zero represents zero thermal kinetic energy).",
      "Confusing temperature intervals with absolute values: A temperature difference $\Delta T$ of 10 K equals $\Delta T$ of 10 °C (do NOT subtract 273.15 when converting temperature differences)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Kelvin to Celsius?",
      answer: "Subtract 273.15 from the temperature in Kelvin. The formula is °C = K - 273.15."
    },
    {
      question: "What is 0 Kelvin in Celsius?",
      answer: "0 K is equal to -273.15 °C, which is absolute zero."
    },
    {
      question: "What is 273.15 K in Celsius?",
      answer: "273.15 K is exactly 0.00 °C, the freezing point of pure water."
    },
    {
      question: "What is 300 K in Celsius?",
      answer: "300 K is equal to 26.85 °C (300 - 273.15 = 26.85)."
    },
    {
      question: "What is 373.15 K in Celsius?",
      answer: "373.15 K is exactly 100.00 °C, the boiling point of pure water at 1 atm."
    },
    {
      question: "Why is there no degree symbol on Kelvin?",
      answer: "Kelvin is an absolute thermodynamic scale representing energy directly, established by SI convention without the degree symbol (written 'K' rather than '°K')."
    },
    {
      question: "Is a degree Celsius the same size as a Kelvin?",
      answer: "Yes. Both scales have identical increments: a 1 K change is exactly equal to a 1 °C change ($\Delta 1\\text{ K} = \\Delta 1\\text{ }^\\circ\\text{C}$)."
    },
    {
      question: "What is room temperature in Kelvin?",
      answer: "Standard room temperature (20 °C) is 293.15 K, while standard ambient temperature (25 °C) is 298.15 K."
    }
  ],
  relatedList: [
    { label: "Celsius to Kelvin", from: "celsius", to: "kelvin" },
    { label: "Kelvin to Fahrenheit", from: "kelvin", to: "fahrenheit" },
    { label: "Kelvin to Rankine", from: "kelvin", to: "rankine" },
    { label: "Fahrenheit to Celsius", from: "fahrenheit", to: "celsius" }
  ],
  references: [
    "BIPM - SI Brochure: The International System of Units (9th Edition, 2019)",
    "NIST Special Publication 330 - The International System of Units (SI)",
    "CODATA Recommended Values of the Fundamental Physical Constants (2018/2022)"
  ]
};
