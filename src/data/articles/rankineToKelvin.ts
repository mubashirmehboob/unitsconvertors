import { CustomArticleData } from "./types";

export const rankineToKelvin: CustomArticleData = {
  fromUnitId: "rankine",
  toUnitId: "kelvin",
  seoTitle: "Rankine to Kelvin Converter (°R to K) - UnitsConvertors",
  metaDescription: "Convert Rankine to Kelvin (°R to K) with exact thermodynamic accuracy. Direct 5/9 absolute scaling formula, cryogenic benchmarks, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/rankine-to-kelvin",
  h1: "Rankine to Kelvin Converter",
  introduction: [
    "Converting temperature from Rankine to Kelvin connects the two foundational absolute thermodynamic scales used in modern physics and international aerospace engineering. Both scales share a common origin at absolute zero (0 °R = 0 K), the theoretical state where classical molecular kinetic motion stops.",
    "Because both scales start at absolute zero, there is no temperature offset to add or subtract. The conversion depends entirely on the difference in degree increments: the Kelvin scale adopts the larger Celsius-sized degree, while the Rankine scale adopts the smaller Fahrenheit-sized degree. Between the freezing point of water and its boiling point under standard pressure, there are exactly 100 kelvins and exactly 180 degrees Rankine. Consequently, 1 kelvin equals exactly 1.8 degrees Rankine. To convert Rankine to Kelvin, simply divide the Rankine reading by 1.8 (or multiply by the rational fraction 5/9).",
    "This technical guide explains the thermodynamic relationship between metric and imperial absolute temperature, provides worked calculation examples across cryogenic and aerospace domains, and presents an extensive conversion lookup table."
  ],
  quickAnswer: {
    text: "To convert Rankine to Kelvin, divide the Rankine value by 1.8 (or multiply by 5/9). Because both scales begin at absolute zero (0 °R = 0 K), no addition or subtraction is required. For example, 491.67 °R equals exactly 273.15 K (the freezing point of water), and 540 °R equals 300 K.",
    formulaDisplay: "K = °R ÷ 1.8",
    subtext: "0 °R = 0 K (Absolute Zero) | 1 K = 1.8 °R (Exact) | Direct Proportional Scaling"
  },
  aboutSourceUnit: {
    title: "Understanding the Rankine Scale (°R)",
    text: "Established in 1859 by Scottish engineer and physicist William John Macquorn Rankine, the Rankine scale is the absolute thermodynamic temperature scale aligned with the US Customary and British Imperial systems. Because each Rankine degree is identical in magnitude to a Fahrenheit degree, engineers working with British Thermal Units (BTU), foot-pounds, and imperial gas laws can perform fundamental thermodynamic calculations without converting into metric units."
  },
  aboutTargetUnit: {
    title: "Understanding the Kelvin Scale (K)",
    text: "Named after British physicist William Thomson, 1st Baron Kelvin, the kelvin (symbol: K) is the base unit of thermodynamic temperature in the International System of Units (SI). Standardized by the BIPM, the kelvin has been formally defined since the 2019 redefinition of SI base units by fixing the Boltzmann constant k to exactly 1.380649 × 10⁻²³ J/K. It is the primary temperature scale used across international physics, astronomy, and chemistry."
  },
  relationship: "Rankine and Kelvin share an identical zero point at absolute zero (0 °R = 0 K). Their relationship is purely proportional, determined by the ratio of degree sizes: 1 K = 1.8 °R, and 1 °R = 5/9 K (approximately 0.55556 K). Converting between them requires only multiplying by 5/9 or dividing by 1.8.",
  relationshipTitle: "Rankine to Kelvin Proportional Scaling Points",
  relationshipItems: [
    { label: "Absolute Zero", value: "0.00 °R = 0.00 K" },
    { label: "Liquid Helium Boiling Point", value: "7.56 °R = 4.20 K" },
    { label: "Liquid Nitrogen Boiling Point", value: "139.25 °R ≈ 77.36 K" },
    { label: "Water Freezing Point", value: "491.67 °R = 273.15 K" },
    { label: "Standard Room Temperature", value: "527.67 °R = 293.15 K" },
    { label: "Standard Laboratory Ambient (25 °C)", value: "536.67 °R = 298.15 K" },
    { label: "Normal Body Temperature", value: "558.27 °R = 310.15 K" },
    { label: "Water Boiling Point", value: "671.67 °R = 373.15 K" }
  ],
  formula: {
    text: "Divide the temperature in Rankine by 1.8, or multiply by the exact fraction 5/9.",
    math: "T_{(\\text{K})} = \\frac{T_{(^\\circ\\text{R})}}{1.8} = T_{(^\\circ\\text{R})} \\times \\frac{5}{9}",
    subtext: "To convert from Kelvin to Rankine: Multiply K by 1.8 (T_{(^\\circ\\text{R})} = T_{(\\text{K})} × 1.8)."
  },
  formulaTitle: "Rankine to Kelvin Mathematical Formula",
  practicalTip: {
    title: "Fractional Mental Shortcut",
    text: "To approximate Kelvin mentally, divide the Rankine figure by 2, then add 10% to your result. For example, for 500 °R: 500 ÷ 2 = 250; 250 + 25 = 275 K (true value is 277.78 K), achieving within 1% accuracy."
  },
  expertNote: {
    title: "Thermodynamic State Equations & Boltzmann Relations",
    text: "Because both Kelvin and Rankine are absolute scales, thermodynamic ratios (such as Carnot engine efficiency η = 1 - T_C / T_H) yield the exact same numerical result whether computed entirely in kelvins or entirely in degrees Rankine."
  },
  examples: {
    title: "Step-by-Step Practical Calculations",
    items: [
      {
        title: "Example 1: Cryogenic Liquid Hydrogen Storage",
        subtitle: "A space launch vehicle upper stage stores liquid hydrogen (LH₂) at an absolute temperature of 36.50 °R. Convert this temperature to Kelvin.",
        steps: [
          "State the given Rankine reading: 36.50 °R.",
          "Apply the conversion formula: K = °R ÷ 1.8.",
          "Perform calculation: 36.50 ÷ 1.8 = 20.28 K.",
          "Result: 36.50 °R equals approximately 20.28 K (the boiling point of liquid hydrogen at 1 atm)."
        ]
      },
      {
        title: "Example 2: Deep Space Cosmic Microwave Background",
        subtitle: "Cosmic microwave background radiation permeates the universe at an energy density corresponding to 4.905 °R. Express this in kelvins.",
        steps: [
          "State the value: 4.905 °R.",
          "Divide by 1.8: 4.905 ÷ 1.8 = 2.725 K.",
          "Result: 4.905 °R corresponds to 2.725 K."
        ]
      },
      {
        title: "Example 3: Aerodynamic Stagnation Temperature",
        subtitle: "A hypersonic flight vehicle experiences a nose cone stagnation gas temperature of 3,600.00 °R. Convert this aerodynamic heating condition to Kelvin.",
        steps: [
          "State the temperature: 3,600.00 °R.",
          "Divide by 1.8: 3,600.00 ÷ 1.8 = 2,000.00 K.",
          "Result: 3,600.00 °R equals exactly 2,000.00 K."
        ]
      }
    ]
  },
  table: {
    title: "Rankine to Kelvin Conversion Reference Table",
    headers: ["Rankine (°R)", "Kelvin (K)", "Celsius (°C)", "Fahrenheit (°F)", "Thermodynamic Benchmark"],
    rows: [
      { fromVal: "0.00 °R", toVal: "0.00 K", extra: "-273.15 °C", extra2: "-459.67 °F", extra3: "Absolute zero (ground state)" },
      { fromVal: "7.56 °R", toVal: "4.20 K", extra: "-268.95 °C", extra2: "-452.11 °F", extra3: "Boiling point of liquid helium" },
      { fromVal: "36.50 °R", toVal: "20.28 K", extra: "-252.87 °C", extra2: "-423.17 °F", extra3: "Boiling point of liquid hydrogen" },
      { fromVal: "139.34 °R", toVal: "77.41 K", extra: "-195.74 °C", extra2: "-320.33 °F", extra3: "Boiling point of liquid nitrogen" },
      { fromVal: "162.27 °R", toVal: "90.15 K", extra: "-183.00 °C", extra2: "-297.40 °F", extra3: "Boiling point of liquid oxygen" },
      { fromVal: "350.00 °R", toVal: "194.44 K", extra: "-78.71 °C", extra2: "-109.67 °F", extra3: "Sublimation point of dry ice (CO₂)" },
      { fromVal: "459.67 °R", toVal: "255.37 K", extra: "-17.78 °C", extra2: "0.00 °F", extra3: "Zero degrees Fahrenheit datum" },
      { fromVal: "491.67 °R", toVal: "273.15 K", extra: "0.00 °C", extra2: "32.00 °F", extra3: "Freezing point of pure water" },
      { fromVal: "527.67 °R", toVal: "293.15 K", extra: "20.00 °C", extra2: "68.00 °F", extra3: "Standard room temperature" },
      { fromVal: "536.67 °R", toVal: "298.15 K", extra: "25.00 °C", extra2: "77.00 °F", extra3: "IUPAC standard ambient temperature" },
      { fromVal: "558.27 °R", toVal: "310.15 K", extra: "37.00 °C", extra2: "98.60 °F", extra3: "Average human body temperature" },
      { fromVal: "671.67 °R", toVal: "373.15 K", extra: "100.00 °C", extra2: "212.00 °F", extra3: "Boiling point of pure water (1 atm)" },
      { fromVal: "1,000.00 °R", toVal: "555.56 K", extra: "282.41 °C", extra2: "540.33 °F", extra3: "Industrial heat-treating process" },
      { fromVal: "1,800.00 °R", toVal: "1,000.00 K", extra: "726.85 °C", extra2: "1,340.33 °F", extra3: "1,000 Kelvin benchmark" },
      { fromVal: "3,600.00 °R", toVal: "2,000.00 K", extra: "1,726.85 °C", extra2: "3,140.33 °F", extra3: "Gas turbine combustion flame zone" }
    ]
  },
  applications: {
    title: "Cross-Discipline Applications of °R to K",
    items: [
      {
        title: "International Spacecraft & Rocket Engineering",
        text: "Joint space exploration programs (such as NASA and ESA partnerships) convert cryogenic propellant thermodynamic states and radiative cooling models between US Customary Rankine and SI Kelvin."
      },
      {
        title: "Superconductivity & Quantum Computing",
        text: "Dilution refrigerator cooling stages operating below 1 K are integrated with US-manufactured vacuum instrumentation, requiring precise fractional conversion between micro-kelvin and Rankine units."
      },
      {
        title: "Astrophysics & Radiation Modeling",
        text: "Stellar surface radiation, blackbody radiation curves, and thermal emissivity calculations applying Planck's law bridge American astronomical references with international SI Kelvin datasets."
      },
      {
        title: "Industrial Cryogenic Air Separation",
        text: "Plants distilling atmospheric gases into liquid nitrogen, oxygen, and argon cross-reference US equipment documentation in Rankine with European process controllers calibrated in Kelvin."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Adding or subtracting 273.15: Because both Rankine and Kelvin already originate at absolute zero, adding or subtracting 273.15 is incorrect. Offsets apply only when converting to or from relative scales (Celsius and Fahrenheit).",
      "Multiplying by 1.8 instead of dividing: Remember that Kelvin degrees are larger than Rankine degrees (1 K = 1.8 °R). Dividing by 1.8 produces the correct, smaller numerical Kelvin value.",
      "Using the symbol '°K': The kelvin is an SI base unit and is written simply as 'K' without a degree symbol (°), whereas Rankine uses '°R'.",
      "Confusing thermal intervals with absolute points: For these two scales, the ratio for temperature differences (ΔK = Δ°R ÷ 1.8) is identical to the ratio for absolute temperatures because both scales share the 0 datum."
    ]
  },
  faqs: [
    {
      question: "How do you convert Rankine to Kelvin?",
      answer: "Divide the Rankine temperature by 1.8, or multiply by 5/9: K = °R ÷ 1.8."
    },
    {
      question: "What is 0 degrees Rankine in Kelvin?",
      answer: "0 °R equals exactly 0 K, representing absolute zero."
    },
    {
      question: "What is 491.67 Rankine in Kelvin?",
      answer: "491.67 °R divided by 1.8 equals exactly 273.15 K, the freezing point of pure water."
    },
    {
      question: "What is 671.67 Rankine in Kelvin?",
      answer: "671.67 °R divided by 1.8 equals exactly 373.15 K, the boiling point of pure water at 1 atm."
    },
    {
      question: "Why is there no addition or subtraction when converting Rankine to Kelvin?",
      answer: "Both Rankine and Kelvin are absolute thermodynamic scales that place zero at absolute zero (0 °R = 0 K). Because their starting points are identical, the conversion only scales the degree size by the ratio 5/9."
    },
    {
      question: "How many degrees Rankine are in 1 Kelvin?",
      answer: "One kelvin equals exactly 1.8 degrees Rankine (or 9/5 °R)."
    },
    {
      question: "What is 500 Rankine in Kelvin?",
      answer: "500 divided by 1.8 equals approximately 277.78 K."
    },
    {
      question: "What is room temperature (527.67 °R) in Kelvin?",
      answer: "527.67 divided by 1.8 equals exactly 293.15 K (20 °C or 68 °F)."
    },
    {
      question: "Is the symbol for Kelvin °K or K?",
      answer: "Since the 13th General Conference on Weights and Measures (CGPM) in 1967, the official SI unit is the kelvin, denoted by a capital K without the degree symbol."
    },
    {
      question: "What is 1,800 Rankine in Kelvin?",
      answer: "1,800 divided by 1.8 equals exactly 1,000.00 K."
    }
  ],
  relatedList: [
    { label: "Kelvin to Rankine", from: "kelvin", to: "rankine" },
    { label: "Rankine to Celsius", from: "rankine", to: "celsius" },
    { label: "Rankine to Fahrenheit", from: "rankine", to: "fahrenheit" },
    { label: "Kelvin to Celsius", from: "kelvin", to: "celsius" },
    { label: "Kelvin to Fahrenheit", from: "kelvin", to: "fahrenheit" }
  ],
  references: [
    "BIPM — The International System of Units (SI Brochure, 9th Edition)",
    "NIST Special Publication 330 — The International System of Units (SI)",
    "CODATA Recommended Values of the Fundamental Physical Constants"
  ]
};
