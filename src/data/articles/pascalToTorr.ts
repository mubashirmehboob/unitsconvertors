import { CustomArticleData } from "./types";

export const pascalToTorr: CustomArticleData = {
  fromUnitId: "pascal",
  toUnitId: "torr",
  seoTitle: "Pascal to Torr Converter (Pa to Torr)",
  metaDescription: "Convert Pascals to Torr (Pa to Torr) with high-vacuum accuracy. Learn the exact 101,325/760 conversion ratio, formula, vacuum engineering examples, tables, and FAQs.",
  h1: "Pascal to Torr Converter",
  introduction: [
    "Converting Pascals (Pa) to Torr is essential in high-vacuum physics, semiconductor manufacturing, mass spectrometry, particle accelerator design, and freeze-drying technology. While the Pascal is the official SI unit for pressure, the Torr is a universally recognized unit in vacuum engineering defined as exactly 1/760th of a standard atmosphere.",
    "Because 1 standard atmosphere equals exactly 101,325 Pascals and 760 Torr, 1 Torr is defined mathematically as 101,325 / 760 Pascals (approximately 133.322368 Pa). Converting Pascals to Torr involves dividing the Pascal value by 133.322368 or multiplying by 0.0075006168.",
    "This comprehensive guide details the historical origin of the Torr, the exact mathematical conversion ratio, step-by-step vacuum system calculations, a reference table across vacuum regimes, semiconductor production applications, and answers to frequently asked vacuum questions."
  ],
  quickAnswer: {
    text: "To convert Pascals to Torr, multiply the pressure value in Pascals by 760 / 101,325 (or divide by 133.322368). For example, 1,000 Pa equals approximately 7.50 Torr, and standard atmospheric pressure of 101,325 Pa equals exactly 760 Torr.",
    formulaDisplay: "Torr = Pa × (760 ÷ 101,325)",
    subtext: "One Pascal is equal to approximately 0.0075006168 Torr."
  },
  aboutSourceUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "The Pascal (symbol: Pa) is the derived SI unit of pressure, defined as one Newton per square meter (1 N/m²). Named after French mathematician Blaise Pascal, it measures mechanical force on a surface. In vacuum science, sub-atmospheric pressures are expressed in Pascals or millibars, where 1 Pa represents a gentle pressure equivalent to 0.01 mbar."
  },
  aboutTargetUnit: {
    title: "Understanding the Torr (Torr)",
    text: "Named in honor of Evangelista Torricelli, the Italian physicist who invented the mercury barometer in 1643, the Torr (symbol: Torr) is a unit of pressure defined as exactly 1/760th of a standard atmosphere. Historically intended to be identical to 1 millimeter of mercury (mmHg), modern physical standards define 1 Torr as exactly 101,325 / 760 Pascals (~133.322 Pa). Torr remains the standard unit for vacuum gauge readings across North American semiconductor fabs and research labs."
  },
  relationship: "The exact relationship is anchored to the standard atmosphere: 1 atm = 760 Torr = 101,325 Pa. Therefore, 1 Torr = 101,325 / 760 Pa = 133.322368421 Pa, and 1 Pa = 760 / 101,325 Torr ≈ 0.0075006168 Torr.",
  relationshipTitle: "Pascal vs Torr Pressure & Vacuum Regime Scale",
  relationshipItems: [
    { label: "1 Pa", value: "0.0075006 Torr (Rough vacuum benchmark)" },
    { label: "133.322 Pa", value: "1.0000000 Torr (Exact 1 Torr baseline)" },
    { label: "1,000 Pa", value: "7.5006168 Torr (Rough vacuum line pressure)" },
    { label: "100,000 Pa", value: "750.06168 Torr (1 bar / near-ambient pressure)" },
    { label: "101,325 Pa", value: "760.00000 Torr (1 Standard Atmosphere)" }
  ],
  formula: {
    text: "Multiply the pressure value in Pascals by 760 and divide by 101,325 to convert to Torr.",
    math: "Torr = Pa × (760 / 101325)",
    subtext: "To convert Torr back to Pascals, multiply the Torr value by 101,325 / 760 (or ~133.322368)."
  },
  formulaTitle: "Pascal to Torr Formula",
  practicalTip: {
    title: "Quick Vacuum Calculation Rule",
    text: "For quick estimations in rough vacuum systems, 1 Torr is roughly 133 Pascals (or 1.33 mbar). Multiply Pascals by 0.0075 for an instant mental estimate in Torr."
  },
  expertNote: {
    title: "Torr vs Millimeter of Mercury (mmHg)",
    text: "While Torr and mmHg were originally synonymous, modern standards define 1 Torr as 101,325/760 Pa exact, whereas 1 mmHg is based on mercury density at 0 °C (1 mmHg = 133.322387415 Pa). The difference is less than 0.000014% and negligible for practical engineering."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Roughing Pump Chamber Pressure",
        subtitle: "Convert a mechanical vacuum pump pressure sensor reading of 100 Pa into Torr.",
        steps: [
          "Identify pressure in Pascals: 100 Pa.",
          "Apply conversion formula: Torr = Pa ÷ 133.322368.",
          "Calculate: 100 ÷ 133.322368 = 0.7500616.",
          "Result: 100 Pa equals approximately 0.7501 Torr."
        ]
      },
      {
        title: "Example 2: Semiconductor Sputtering Deposition Chamber",
        subtitle: "Convert an argon process gas chamber pressure of 0.5 Pa to Torr.",
        steps: [
          "Identify chamber pressure: 0.5 Pa.",
          "Multiply by 0.0075006168: 0.5 × 0.0075006168 = 0.0037503.",
          "Result: 0.5 Pa equals approximately 3.75 × 10⁻³ Torr (0.00375 Torr)."
        ]
      },
      {
        title: "Example 3: Freeze-Drying Sublimation Chamber",
        subtitle: "Convert a lyophilizator pressure rating of 10 Pa to Torr.",
        steps: [
          "Identify starting pressure: 10 Pa.",
          "Divide by 133.322368: 10 ÷ 133.322368 = 0.075006.",
          "Result: 10 Pa equals approximately 0.075 Torr (75 mTorr)."
        ]
      }
    ]
  },
  table: {
    title: "Pascal to Torr Conversion Reference Table",
    headers: ["Pascals (Pa)", "Torr (Torr)", "Millitorr (mTorr)", "Vacuum Classification & Context"],
    rows: [
      { fromVal: "0.0001 Pa", toVal: "0.00000075 Torr", extra: "0.00075 mTorr", extra2: "High vacuum regime (HV)" },
      { fromVal: "0.01 Pa", toVal: "0.000075 Torr", extra: "0.075 mTorr", extra2: "Electron microscope chamber" },
      { fromVal: "0.1 Pa", toVal: "0.00075 Torr", extra: "0.75 mTorr", extra2: "Semiconductor plasma etching" },
      { fromVal: "1 Pa", toVal: "0.00750 Torr", extra: "7.50 mTorr", extra2: "Medium vacuum threshold" },
      { fromVal: "10 Pa", toVal: "0.07501 Torr", extra: "75.01 mTorr", extra2: "Pharmaceutical freeze drying" },
      { fromVal: "100 Pa", toVal: "0.75006 Torr", extra: "750.06 mTorr", extra2: "Roughing pump transition" },
      { fromVal: "133.322 Pa", toVal: "1.00000 Torr", extra: "1,000 mTorr", extra2: "Exact 1 Torr baseline" },
      { fromVal: "1,000 Pa", toVal: "7.50062 Torr", extra: "7,500.6 mTorr", extra2: "Vacuum packaging machine" },
      { fromVal: "100,000 Pa", toVal: "750.062 Torr", extra: "750,062 mTorr", extra2: "1 bar pressure baseline" },
      { fromVal: "101,325 Pa", toVal: "760.000 Torr", extra: "760,000 mTorr", extra2: "Standard Sea-Level Atmosphere" }
    ]
  },
  applications: {
    title: "Real-World Applications of Pa to Torr Conversion",
    items: [
      {
        title: "Semiconductor Microchip Fabrication",
        text: "Photolithography, Chemical Vapor Deposition (CVD), and ion implantation occur inside vacuum chambers. Process recipes specify gas flows in Torr or mTorr, while digital pressure transducers record in Pascals."
      },
      {
        title: "Mass Spectrometry & Analytical Chemistry",
        text: "Mass spectrometers require ultra-high vacuum (UHV) to prevent ions from colliding with residual air molecules. Converting ion gauge readings between Pascals and Torr ensures correct analyzer operational conditions."
      },
      {
        title: "Pharmaceutical Freeze-Drying (Lyophilization)",
        text: "Biopharmaceutical vaccines and proteins are preserved by sublimation under controlled vacuum. Pressure sensors measure in Pascals, which operators monitor in mTorr or Torr."
      },
      {
        title: "Space Simulation Environmental Chambers",
        text: "Thermal vacuum chambers testing satellites simulate orbital low pressures down to 10⁻⁸ Pa (10⁻¹⁰ Torr). Converting sensor data allows engineers to benchmark environmental extreme survivability."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying instead of dividing by 133.322: Pascals produce a smaller numerical value when converted to Torr.",
      "Confusing millitorr (mTorr or micron) with Torr: 1 Torr = 1,000 mTorr.",
      "Assuming 1 Torr is exactly equal to 1 mbar: 1 Torr ≈ 1.33322 mbar (1 mbar ≈ 0.75006 Torr). Do not treat mbar and Torr as identical.",
      "Symbol capitalization errors: The symbol for Torr is 'Torr' (capital T, lowercase o-r-r)."
    ]
  },
  faqs: [
    {
      question: "How many Pascals are in 1 Torr?",
      answer: "There are exactly 101,325 / 760 Pascals in 1 Torr, which is approximately 133.322368 Pascals."
    },
    {
      question: "What is the formula to convert Pascals to Torr?",
      answer: "The formula is: Torr = Pa × (760 ÷ 101,325), or Torr = Pa ÷ 133.322368."
    },
    {
      question: "Is 1 Torr the same as 1 mmHg?",
      answer: "For all practical purposes, yes. 1 Torr is defined as 101,325/760 Pa (~133.322368 Pa), while 1 mmHg is defined as 133.322387 Pa. The difference is under 0.000014%."
    },
    {
      question: "How many Torr are in 1 standard atmosphere?",
      answer: "There are exactly 760 Torr in 1 standard atmosphere (atm)."
    },
    {
      question: "How do I convert Torr back to Pascals?",
      answer: "To convert Torr back to Pascals, multiply the Torr value by 133.322368 (e.g., 10 Torr × 133.322368 = 1,333.22 Pa)."
    },
    {
      question: "What is 1 millitorr (mTorr)?",
      answer: "One millitorr (mTorr) is 1/1,000th of a Torr, equal to approximately 0.133322 Pascals. In vacuum engineering, 1 mTorr is also called a micron."
    },
    {
      question: "Why is Torr used in vacuum technology?",
      answer: "Torr provides convenient whole-number and decimal ranges for measuring sub-atmospheric pressures without working with fractional Pascals."
    },
    {
      question: "Is Torr an official SI unit?",
      answer: "No. Torr is a non-SI unit, but it is widely accepted and standard in vacuum science, physics, and semiconductor technology."
    }
  ],
  relatedList: [
    { label: "Pascal to Millimeter of Mercury", from: "pascal", to: "mmhg" },
    { label: "Pascal to Atmosphere", from: "pascal", to: "atmosphere" },
    { label: "Pascal to Bar", from: "pascal", to: "bar" },
    { label: "Pascal to Millibar", from: "pascal", to: "millibar" },
    { label: "Pascal to Kilopascal", from: "pascal", to: "kilopascal" }
  ],
  references: [
    "American Vacuum Society (AVS) - Recommended Practice for Pressure Measurement.",
    "BIPM - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
