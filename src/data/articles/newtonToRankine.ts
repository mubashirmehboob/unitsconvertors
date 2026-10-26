import { CustomArticleData } from "./types";

export const newtonToRankine: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "rankine",
  seoTitle: "Newton to Rankine (N to R) Temperature Converter",
  metaDescription: "Convert Newton to Rankine (°N to °R) with exact precision. Learn the 60/11 ratio, 491.67 offset formula, thermodynamic origins, and conversion tables.",
  h1: "Newton to Rankine Converter",
  introduction: [
    "Converting temperature from degrees Newton to degrees Rankine connects Sir Isaac Newton's pioneering 1701 linseed-oil thermometry with William John Macquorn Rankine's 1859 absolute thermodynamic scale. While Newton was investigating empirical cooling laws and alloy melting points, Rankine was formulating the foundations of modern steam engineering and mechanical thermodynamics.",
    "On the Newton scale, pure water freezes at 0 °N and boils at 33 °N, spanning 33 equal degrees. On the Rankine scale, pure water freezes at 491.67 °R and boils at 671.67 °R, spanning 180 equal degrees. The ratio between their degree spans simplifies to an exact irreducible fraction: 180 / 33 = 60/11 (approximately 5.454545). Combining this ratio with the water-freezing zero offset yields the exact conversion formula: <strong>°R = (°N × 60/11) + 491.67</strong>. This guide explains the thermodynamic relationship, worked examples, formulas, and conversion tables."
  ],
  quickAnswer: {
    text: "To convert degrees Newton to degrees Rankine, multiply the Newton temperature by 60/11 (approx. 5.454545) and then add 491.67. For example, 0 °N equals 491.67 °R, and 33 °N equals 671.67 °R.",
    formulaDisplay: "°R = (°N × 60 / 11) + 491.67 ≈ (°N × 5.454545) + 491.67",
    subtext: "Combines the 60/11 degree ratio (180 / 33) with the water-freezing point on the absolute Rankine scale (491.67 °R)."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton Temperature Scale (°N)",
    text: "Devised around 1701 by Sir Isaac Newton, the Newton scale was designed to quantify heat and establish cooling rates using linseed oil in a glass tube. Newton set 0 °N at the freezing point of water and 33 °N at the boiling point of water, calibrating human body heat at approximately 12 °N."
  },
  aboutTargetUnit: {
    title: "Understanding the Rankine Scale (°R)",
    text: "Introduced in 1859 by Scottish physicist and engineer William John Macquorn Rankine, the Rankine scale is an absolute thermodynamic temperature scale using degree increments equal in size to Fahrenheit degrees (°F). Zero degrees Rankine (0 °R) represents absolute zero (-459.67 °F), making it standard in American aerospace and combustion engineering."
  },
  relationship: "Water freezes at 0 °N and 491.67 °R. Water boils at 33 °N and 671.67 °R. The physical span between freezing and boiling covers 33 degrees on the Newton scale and 180 degrees on the Rankine scale. Therefore, 1 °N = 180 / 33 °R = 60/11 °R ≈ 5.454545 °R. Adding 491.67 shifts the baseline origin from water's freezing point to absolute zero.",
  relationshipTitle: "Degree Ratio and Absolute Offset",
  relationshipItems: [
    { label: "0 °N", value: "491.67 °R (Water freezing point at 1 atm)" },
    { label: "6.6 °N", value: "527.67 °R (Standard room temperature 68 °F)" },
    { label: "12 °N", value: "557.12 °R (Newton's body heat benchmark ~97.5 °F)" },
    { label: "33 °N", value: "671.67 °R (Water boiling point at 1 atm)" },
    { label: "-90.14 °N", value: "0 °R (Absolute zero)" }
  ],
  formula: {
    text: "Multiply the temperature in degrees Newton by 60, divide by 11 (or multiply by approx. 5.454545), and then add 491.67 to calculate the temperature in degrees Rankine.",
    math: "°R = (°N × 60 / 11) + 491.67",
    subtext: "To convert degrees Rankine back to Newton, subtract 491.67 first, then multiply by 11/60 (approx. 0.183333): °N = (°R - 491.67) × (11 / 60)."
  },
  formulaTitle: "Newton to Rankine Formula",
  practicalTip: {
    title: "Calculation Workflow Tip",
    text: "To convert easily, multiply the Newton value by 60, divide by 11, and then add 491.67. For 11 °N: (11 × 60) / 11 = 60; 60 + 491.67 = 551.67 °R."
  },
  expertNote: {
    title: "Engineering Thermodynamics Contrast",
    text: "Newton's scale was empirical (relying on liquid expansion), whereas Rankine's scale is thermodynamic (relying on the ideal Carnot cycle). The conversion bridges early observation with formal thermodynamics."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Water Freezing Point (0 °N)",
        subtitle: "Convert the freezing point of water from Newton to Rankine.",
        steps: [
          "Identify temperature: 0 °N.",
          "Apply formula: °R = (0 × 60/11) + 491.67.",
          "Calculate: 0 + 491.67 = 491.67 °R.",
          "Result: 0 °N equals exactly 491.67 °R."
        ]
      },
      {
        title: "Example 2: Standard Room Temperature (6.6 °N)",
        subtitle: "Convert 6.6 °N (20 °C / 68 °F) to Rankine.",
        steps: [
          "Identify temperature: 6.6 °N.",
          "Multiply by 60/11: (6.6 × 60) / 11 = 396 / 11 = 36.",
          "Add 491.67: 36 + 491.67 = 527.67 °R.",
          "Result: 6.6 °N equals exactly 527.67 °R."
        ]
      },
      {
        title: "Example 3: Water Boiling Point (33 °N)",
        subtitle: "Convert the boiling point of pure water to Rankine.",
        steps: [
          "Identify temperature: 33 °N.",
          "Multiply by 60/11: (33 × 60) / 11 = 180.",
          "Add 491.67: 180 + 491.67 = 671.67 °R.",
          "Result: 33 °N equals exactly 671.67 °R."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Rankine Conversion Table",
    headers: ["Newton (°N)", "Rankine (°R)", "Physical Context"],
    rows: [
      { fromVal: "-90.14 °N", toVal: "0.00 °R", extra: "Absolute zero (0 K / -459.67 °F)" },
      { fromVal: "-33.00 °N", toVal: "311.67 °R", extra: "Cryogenic liquefied gas (-100 °C)" },
      { fromVal: "-16.50 °N", toVal: "401.67 °R", extra: "Severe polar cold (-50 °C)" },
      { fromVal: "-6.60 °N", toVal: "455.67 °R", extra: "Commercial freezer temperature (-20 °C)" },
      { fromVal: "0.00 °N", toVal: "491.67 °R", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "3.30 °N", toVal: "509.67 °R", extra: "Cool spring morning (10 °C / 50 °F)" },
      { fromVal: "6.60 °N", toVal: "527.67 °R", extra: "Standard room temperature (20 °C / 68 °F)" },
      { fromVal: "8.25 °N", toVal: "536.67 °R", extra: "Comfortable warm room (25 °C / 77 °F)" },
      { fromVal: "12.00 °N", toVal: "557.12 °R", extra: "Newton's human body heat benchmark (~97.5 °F)" },
      { fromVal: "16.50 °N", toVal: "581.67 °R", extra: "Hot bath / desert temperature (50 °C)" },
      { fromVal: "24.75 °N", toVal: "626.67 °R", extra: "Milk pasteurization heat (75 °C)" },
      { fromVal: "33.00 °N", toVal: "671.67 °R", extra: "Boiling point of pure water at sea level" }
    ]
  },
  applications: {
    title: "Practical Applications of Newton to Rankine Conversions",
    items: [
      {
        title: "Comparative History of Thermodynamics",
        text: "Historians analyzing English heat transfer manuscripts convert Newton's experimental cooling rates into Rankine to compare empirical early cooling with Victorian steam cycle thermodynamics."
      },
      {
        title: "Metrology & Engineering Education",
        text: "Engineering professors use the Newton-to-Rankine conversion to test student comprehension of affine mathematical mappings involving fractional scale multipliers (60/11) and absolute zero shifts (+491.67)."
      },
      {
        title: "Scientific Instrument Documentation",
        text: "Museum curators verify dual-scale antique English scientific instruments featuring Newton's 1701 graduation marks alongside Victorian Rankine calibrations."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Adding 459.67 instead of 491.67 (459.67 is the Fahrenheit zero-offset; pure water freezes at 491.67 °R).",
      "Confusing the degree Newton (°N) of temperature with the SI unit of force, the newton (N).",
      "Using the 100/33 ratio (belonging to Celsius/Kelvin) rather than the 60/11 ratio (belonging to Fahrenheit/Rankine)."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees Newton to Rankine?",
      answer: "Multiply the temperature in degrees Newton by 60/11 (approx. 5.454545) and add 491.67: °R = (°N × 60 / 11) + 491.67."
    },
    {
      question: "What is 0 °N in Rankine?",
      answer: "0 °N is the freezing point of water, which corresponds to exactly 491.67 °R."
    },
    {
      question: "What is 33 °N in Rankine?",
      answer: "33 °N is the boiling point of pure water at 1 atm, which corresponds to exactly 671.67 °R."
    },
    {
      question: "Why is the conversion multiplier 60/11?",
      answer: "The span between water freezing and boiling covers 33 degrees on the Newton scale and 180 degrees on the Rankine scale. 180 / 33 reduces to 60/11 (approximately 5.454545)."
    },
    {
      question: "What is room temperature (6.6 °N) in Rankine?",
      answer: "6.6 °N equals exactly 527.67 °R ((6.6 × 60/11) + 491.67 = 36 + 491.67 = 527.67 °R)."
    },
    {
      question: "How do you convert Rankine back to degrees Newton?",
      answer: "Subtract 491.67 from the Rankine temperature, multiply by 11, and divide by 60: °N = (°R - 491.67) × (11 / 60)."
    },
    {
      question: "What was Newton's body temperature benchmark in Rankine?",
      answer: "Newton's human body heat calibration of 12 °N corresponds to approximately 557.12 °R ((12 × 60/11) + 491.67)."
    },
    {
      question: "What is absolute zero in degrees Newton and Rankine?",
      answer: "Absolute zero is 0 °R, which corresponds to approximately -90.14 °N."
    }
  ],
  relatedList: [
    { label: "Rankine to Newton", from: "rankine", to: "newton" },
    { label: "Newton to Fahrenheit", from: "newton", to: "fahrenheit" },
    { label: "Newton to Kelvin", from: "newton", to: "kelvin" }
  ],
  references: [
    "Isaac Newton - Scala graduum Caloris (Philosophical Transactions of the Royal Society, 1701)",
    "William J. M. Rankine - A Manual of Applied Mechanics (1858)",
    "BIPM - SI Brochure: History of Temperature Measurement"
  ]
};
