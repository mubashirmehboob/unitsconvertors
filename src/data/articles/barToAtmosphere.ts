import { CustomArticleData } from "./types";

export const barToAtmosphere: CustomArticleData = {
  fromUnitId: "bar",
  toUnitId: "atmosphere",
  seoTitle: "Bar to Atmosphere Converter (bar to atm)",
  metaDescription: "Convert bar to standard atmospheres (bar to atm) with exact mathematical precision. Includes the 0.986923 conversion factor, worked problems, comparison tables, and FAQs.",
  h1: "Bar to Atmosphere Converter",
  introduction: [
    "Converting bar to standard atmospheres (atm) is a routine calculation in chemical engineering, oceanography, hyperbaric medicine, geology, and thermodynamics. Both units are widely recognized benchmarks for ambient and elevated pressures. While the bar is an exact decimal metric unit (100,000 Pa) popular in industrial automation and fluid power, the standard atmosphere is an internationally agreed meteorological baseline (101,325 Pa) representing nominal sea-level pressure.",
    "Because standard atmospheric pressure was defined in 1954 as exactly 101,325 Pascals (1.01325 bar), one bar represents approximately 0.986923 standard atmospheres. In practical terms, 1 bar is just 1.3% lower than 1 standard atmosphere. To convert any pressure from bar to standard atmospheres, divide the value by 1.01325 (or multiply by 0.986923).",
    "This technical guide explains the mathematical relationship, step-by-step conversion examples, pressure benchmarks spanning high-altitude aviation to deep ocean diving, a comprehensive comparison table, and answers to frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert bar to standard atmospheres, divide the pressure in bar by 1.01325 (or multiply by 0.986923). For example, a scuba tank pressure of 200 bar equals approximately 197.38 atmospheres.",
    formulaDisplay: "atm = bar ÷ 1.01325",
    subtext: "Exact definition: 1 atm = 101,325 Pa = 1.01325 bar.\nTherefore, 1 bar = (100,000 / 101,325) atm ≈ 0.98692327 atm."
  },
  aboutSourceUnit: {
    title: "Understanding the Bar (bar)",
    text: "The bar (symbol: bar) is a metric unit of pressure defined as exactly 100,000 Pascals (100 kPa or 0.1 MPa). Widely used in industrial pneumatics, hydraulic test benches, compressed gas cylinders, and European automotive tire ratings, 1 bar was intentionally chosen to approximate atmospheric pressure."
  },
  aboutTargetUnit: {
    title: "Understanding the Standard Atmosphere (atm)",
    text: "The standard atmosphere (symbol: atm) is a non-SI unit of pressure defined during the 10th Conférence Générale des Poids et Mesures (CGPM) in 1954 as exactly 101,325 Pascals. It serves as the baseline for standard temperature and pressure (STP) in chemical reaction thermodynamics, physical gas laws, and barometric calculations."
  },
  relationship: "One standard atmosphere is defined as exactly 1.01325 bar (101,325 Pa). Therefore, 1 bar equals exactly 100,000 / 101,325 atmospheres, or approximately 0.986923 atm. The difference between 1 bar and 1 atm is approximately 1.325%.",
  relationshipTitle: "Bar to Atmosphere Pressure Benchmarks",
  relationshipItems: [
    { label: "1.000 bar", value: "0.987 atm (Nominal metric atmospheric reference)" },
    { label: "1.013 bar", value: "1.000 atm (Standard international mean sea-level pressure)" },
    { label: "2.000 bar", value: "1.974 atm (Pressure at ~10 meters seawater depth)" },
    { label: "10.000 bar", value: "9.869 atm (Pressure at ~90 meters seawater depth)" },
    { label: "50.000 bar", value: "49.346 atm (Commercial compressed gas line)" },
    { label: "200.000 bar", value: "197.385 atm (Standard 3,000 psi diving cylinder fill)" },
    { label: "1,000.000 bar", value: "986.923 atm (Deep ocean trench hydrostatic pressure)" }
  ],
  formula: {
    text: "Divide the pressure in bar by 1.01325, or multiply by 0.986923.",
    math: "\\text{atm} = \\frac{\\text{bar} \\times 100\\,000}{101\\,325} = \\frac{\\text{bar}}{1.01325} \\approx \\text{bar} \\times 0.986923",
    subtext: "To convert atmospheres back to bar, multiply the atmosphere value by 1.01325 (exact)."
  },
  formulaTitle: "Bar to Atmosphere Conversion Formula",
  practicalTip: {
    title: "The 1.3% Difference Approximation",
    text: "For quick calculations, 1 bar and 1 atm are nearly interchangeable: 1 bar is roughly 1 atmosphere minus 1.3%. For example, 100 bar equals approximately 98.7 atm, and 50 bar equals approximately 49.3 atm."
  },
  expertNote: {
    title: "Standard Atmosphere (atm) vs. Technical Atmosphere (at)",
    text: "Distinguish between the standard atmosphere (atm = 1.01325 bar = 101,325 Pa) and the technical atmosphere (at = 1 kgf/cm² = 0.980665 bar = 98,066.5 Pa). 1 bar equals 0.98692 atm, but 1.01972 at. Modern standards universally refer to standard atmospheres."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Scuba Diving Depth Pressure (4.0 bar)",
        subtitle: "A scuba diver descends to a depth of 30 meters (100 feet) in seawater. The absolute ambient pressure is measured at 4.0 bar (1 bar surface + 3 bar water column). Express this ambient load in atmospheres.",
        steps: [
          "State starting pressure: 4.0 bar.",
          "Apply conversion formula: atm = 4.0 / 1.01325.",
          "Calculate: 4.0 / 1.01325 = 3.94769.",
          "Round to sensible precision: 3.95 atm.",
          "Result: 4.0 bar corresponds to approximately 3.95 standard atmospheres."
        ]
      },
      {
        title: "Example 2: Chemical Autoclave Operating Pressure (15.0 bar)",
        subtitle: "A chemical synthesis autoclave has an internal operating pressure of 15.0 bar. Convert this to standard atmospheres.",
        steps: [
          "Identify autoclave pressure: 15.0 bar.",
          "Apply formula: atm = 15.0 × 0.986923.",
          "Calculate: 15.0 × 0.986923 = 14.8038.",
          "Result: 15.0 bar equals approximately 14.80 atmospheres."
        ]
      },
      {
        title: "Example 3: Compressed Gas Cylinder (200 bar)",
        subtitle: "A nitrogen gas cylinder is filled to 200 bar. Convert this value to standard atmospheres.",
        steps: [
          "Identify cylinder pressure: 200 bar.",
          "Divide by 1.01325: atm = 200 / 1.01325.",
          "Calculate: 200 / 1.01325 = 197.3847.",
          "Result: 200 bar equals approximately 197.38 atmospheres."
        ]
      }
    ]
  },
  table: {
    title: "Bar to Standard Atmosphere Conversion Table",
    headers: ["Bar (bar)", "Atmospheres (atm)", "Kilopascals (kPa)", "PSI Equivalent", "Physical Context"],
    rows: [
      { fromVal: "0.50 bar", toVal: "0.493 atm", extra: "50 kPa", extra2: "7.25 psi", extra3: "High-altitude plateau atmospheric pressure" },
      { fromVal: "0.90 bar", toVal: "0.888 atm", extra: "90 kPa", extra2: "13.05 psi", extra3: "Moderate altitude (1,000 m above sea level)" },
      { fromVal: "1.00 bar", toVal: "0.987 atm", extra: "100 kPa", extra2: "14.50 psi", extra3: "Nominal metric atmospheric reference" },
      { fromVal: "1.013 bar", toVal: "1.000 atm", extra: "101.325 kPa", extra2: "14.70 psi", extra3: "Standard mean sea-level atmosphere" },
      { fromVal: "1.50 bar", toVal: "1.480 atm", extra: "150 kPa", extra2: "21.76 psi", extra3: "Domestic heating boiler pressure" },
      { fromVal: "2.00 bar", toVal: "1.974 atm", extra: "200 kPa", extra2: "29.01 psi", extra3: "Seawater pressure at 10 meters depth" },
      { fromVal: "3.00 bar", toVal: "2.961 atm", extra: "300 kPa", extra2: "43.51 psi", extra3: "Seawater pressure at 20 meters depth" },
      { fromVal: "5.00 bar", toVal: "4.935 atm", extra: "500 kPa", extra2: "72.52 psi", extra3: "Commercial building water booster" },
      { fromVal: "10.00 bar", toVal: "9.869 atm", extra: "1,000 kPa", extra2: "145.04 psi", extra3: "Municipal water distribution main" },
      { fromVal: "25.00 bar", toVal: "24.673 atm", extra: "2,500 kPa", extra2: "362.59 psi", extra3: "CO2 refrigeration storage receiver" },
      { fromVal: "100.00 bar", toVal: "98.692 atm", extra: "10,000 kPa", extra2: "1,450.38 psi", extra3: "Seawater pressure at 1,000 m ocean depth" },
      { fromVal: "200.00 bar", toVal: "197.385 atm", extra: "20,000 kPa", extra2: "2,900.75 psi", extra3: "Commercial breathing gas cylinder fill" },
      { fromVal: "300.00 bar", toVal: "296.077 atm", extra: "30,000 kPa", extra2: "4,351.13 psi", extra3: "High-pressure industrial storage tank" }
    ]
  },
  applications: {
    title: "Practical Applications Across Fields",
    items: [
      {
        title: "Diving Physiology and Decompression Calculations",
        text: "Dive computers and decompression algorithms (such as the Bühlmann ZH-L16 model) model tissue inert gas saturation based on ambient partial pressures expressed in atmospheres or bar, increasing by approximately 1 atm for every 10 meters of seawater depth."
      },
      {
        title: "Chemical Reaction Engineering and Equilibrium",
        text: "Gas equilibrium constants ($K_p$) and phase transition equations frequently incorporate pressures in standard atmospheres, requiring engineers to convert process measurements recorded on plant gauges in bar."
      },
      {
        title: "Hyperbaric Oxygen Therapy (HBOT)",
        text: "Clinical medical hyperbaric chambers treat decompression sickness and wound healing at 2.0 to 3.0 atmospheres absolute (ATA), while chamber pneumatic pressurization lines are monitored in bar."
      },
      {
        title: "Meteorology and Atmospheric Science",
        text: "Atmospheric research connects surface weather station barometric data (often reported in millibars or bars) to normalized standard atmosphere references for climate modeling."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming 1 bar equals 1 atmosphere: 1 bar equals 0.986923 atm, meaning 1 bar is roughly 1.3% less than 1 standard atmosphere. For high-pressure gas calculations, assuming they are identical introduces meaningful error.",
      "Confusing standard atmospheres (atm) with technical atmospheres (at): 1 technical atmosphere equals 1 kgf/cm² (0.980665 bar), while 1 standard atmosphere equals 1.01325 bar.",
      "Gauge pressure vs. Absolute pressure: Gauges measuring in bar gauge (barg) indicate pressure above ambient atmosphere. To obtain total absolute atmospheres, add 1.01325 bar (or 1 atm) to the gauge reading.",
      "Multiplying instead of dividing: Converting bar to atm reduces the numeric value slightly. Dividing by 1.01325 reduces it; multiplying increases it erroneously."
    ]
  },
  faqs: [
    {
      question: "How many atmospheres are in 1 bar?",
      answer: "There are approximately 0.986923 standard atmospheres in 1 bar. To convert, divide the bar value by 1.01325 (or multiply by 0.986923)."
    },
    {
      question: "What is the exact formula to convert bar to atm?",
      answer: "The exact formula is: atm = (bar × 100,000) / 101,325 = bar / 1.01325. Numerically: atm ≈ bar × 0.986923."
    },
    {
      question: "How do you convert atmospheres back to bar?",
      answer: "Multiply the atmosphere value by 1.01325. For example, 1 atm × 1.01325 = 1.01325 bar (or 1,013.25 mbar)."
    },
    {
      question: "Is 1 bar equal to 1 atm?",
      answer: "No, but they are very close. 1 standard atmosphere is defined as exactly 101,325 Pascals (1.01325 bar). Thus, 1 bar is approximately 1.3% less than 1 standard atmosphere."
    },
    {
      question: "What is 200 bar in atmospheres?",
      answer: "200 bar equals approximately 197.38 atmospheres (200 ÷ 1.01325 ≈ 197.38 atm)."
    },
    {
      question: "What is 10 bar in atmospheres?",
      answer: "10 bar equals approximately 9.87 atmospheres (10 ÷ 1.01325 ≈ 9.869 atm)."
    },
    {
      question: "Why was 1.01325 bar chosen as the standard atmosphere?",
      answer: "The 10th CGPM in 1954 adopted 101,325 Pa (1.01325 bar) as the international definition of 1 standard atmosphere because it accurately reflected the mean sea-level air pressure measured in Paris."
    },
    {
      question: "How does pressure increase underwater in atmospheres and bar?",
      answer: "Every 10 meters (33 feet) of sea water depth adds approximately 1 bar of hydrostatic pressure, which is roughly equal to 0.987 atm (or 1.0 atm of additional pressure)."
    }
  ],
  relatedList: [
    { label: "Atmosphere to Bar", from: "atmosphere", to: "bar" },
    { label: "Bar to Kilopascal", from: "bar", to: "kilopascal" },
    { label: "Bar to Megapascal", from: "bar", to: "megapascal" },
    { label: "Bar to PSI", from: "bar", to: "psi" },
    { label: "Bar to Pascal", from: "bar", to: "pascal" }
  ],
  references: [
    "10th Conférence Générale des Poids et Mesures (CGPM, 1954), Resolution 4",
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics",
    "U.S. Navy Diving Manual (Revision 7, 2016) - Diving Physics and Pressure Relationships"
  ]
};
