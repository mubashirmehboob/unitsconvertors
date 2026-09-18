import { CustomArticleData } from "./types";

export const megapascalToTorr: CustomArticleData = {
  fromUnitId: "megapascal",
  toUnitId: "torr",
  seoTitle: "Megapascal to Torr Converter (MPa to Torr)",
  metaDescription: "Convert megapascals to Torr (MPa to Torr) with high-precision formulas. Learn conversion factors, vacuum and high-pressure physics calculations, tables, and FAQs.",
  h1: "Megapascal to Torr Converter",
  introduction: [
    "Converting megapascals (MPa) to Torr bridges the gap between high-pressure engineering and experimental vacuum or plasma physics. In mechanical systems, hydraulic circuits, and pressure vessel manufacturing, working loads are measured in megapascals ($1\\text{ N/mm}^2$). In contrast, semiconductor fabrication, particle accelerators, vacuum metallurgical processing, and gas kinetics rely on Torr to quantify partial pressures and gas containment levels.",
    "The Torr is defined internationally as exactly 1/760 of a standard atmosphere. Because one standard atmosphere equals 101,325 Pascals, one Torr equals approximately 133.3224 Pascals. Consequently, one megapascal (1,000,000 Pa) contains approximately 7,500.62 Torr. To convert megapascals to Torr, multiply the megapascal value by 7,500.6168.",
    "This comprehensive reference outlines the mathematical relationship between megapascals and Torr, step-by-step calculation examples, a detailed conversion chart, practical industrial use cases, and technical answers to common questions."
  ],
  quickAnswer: {
    text: "To convert megapascals to Torr, multiply the value in megapascals by 7,500.6168. For instance, a pressure of 0.1 MPa equals approximately 750.06 Torr, and 1 MPa equals approximately 7,500.62 Torr.",
    formulaDisplay: "Torr = MPa × 7,500.6168",
    subtext: "Exact relationship: 1 Torr = 101,325 / 760 Pa ≈ 133.322368 Pa.\nTherefore, 1 MPa = (760,000,000 / 101,325) Torr ≈ 7,500.616827 Torr."
  },
  aboutSourceUnit: {
    title: "Understanding the Megapascal (MPa)",
    text: "The megapascal (symbol: MPa) is an SI-derived decimal multiple of the Pascal, representing exactly 1,000,000 Pascals (1 N/mm² or 10⁶ N/m²). It is the standard international metric unit for expressing mechanical tensile strength, elastic modulus, fluid power hydraulic pressures, and deep geological stresses."
  },
  aboutTargetUnit: {
    title: "Understanding the Torr (Torr)",
    text: "The Torr (symbol: Torr) is a non-SI unit of pressure named in honor of Italian physicist Evangelista Torricelli, the inventor of the mercury barometer. Defined rigorously as exactly 1/760 of a standard atmosphere (101,325 / 760 Pa ≈ 133.3224 Pa), the Torr is widely employed in vacuum science, analytical mass spectrometry, and semiconductor sputtering equipment."
  },
  relationship: "One Torr is mathematically defined as 101,325 / 760 Pascals. Therefore, 1 megapascal (1,000,000 Pa) equals exactly 760,000,000 / 101,325 Torr, or approximately 7,500.616827 Torr. Conversely, 1 Torr equals approximately 0.0001333224 MPa (or 133.3224 Pa).",
  relationshipTitle: "Megapascal to Torr Comparative Benchmarks",
  relationshipItems: [
    { label: "0.000133 MPa", value: "1.00 Torr (Rough vacuum baseline)" },
    { label: "0.101325 MPa", value: "760.00 Torr (Standard sea-level atmospheric pressure)" },
    { label: "0.50 MPa", value: "3,750.31 Torr (Industrial compressed air header)" },
    { label: "1.00 MPa", value: "7,500.62 Torr (High-pressure steam boiler line)" },
    { label: "5.00 MPa", value: "37,503.08 Torr (Liquefied gas refrigeration receiver)" },
    { label: "20.00 MPa", value: "150,012.34 Torr (Compressed nitrogen storage tank)" }
  ],
  formula: {
    text: "Multiply the pressure in megapascals by 7,500.6168 (or multiply by 760,000,000 and divide by 101,325).",
    math: "\\text{Torr} = \\text{MPa} \\times \\frac{760\\,000\\,000}{101\\,325} \\approx \\text{MPa} \\times 7\\,500.6168",
    subtext: "To convert Torr back to megapascals, divide the Torr value by 7,500.6168 (or multiply by 0.0001333224)."
  },
  formulaTitle: "Megapascal to Torr Conversion Formula",
  practicalTip: {
    title: "The 7.5 × 1,000 Rule of Thumb",
    text: "For quick estimations, remember that 1 MPa is roughly 7,500 Torr. Multiplying your MPa value by 7.5 and adding three zeros gives an immediate estimate with less than 0.01% error."
  },
  expertNote: {
    title: "Torr vs. Millimeter of Mercury (mmHg)",
    text: "While 1 Torr was historically conceived to match 1 mmHg, modern metrology distinguishes them: 1 Torr is defined as exactly 101,325 / 760 Pa (133.322368 Pa), while 1 conventional mmHg is defined as 133.322387 Pa based on the density of mercury at 0 °C under standard gravity. For almost all engineering calculations, the difference is negligible (< 0.000014%)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Atmospheric Reference Pressure (0.101325 MPa)",
        subtitle: "Convert standard atmospheric pressure of 0.101325 MPa into Torr.",
        steps: [
          "State starting value: 0.101325 MPa.",
          "Apply conversion: Torr = 0.101325 × (760,000,000 / 101,325).",
          "Notice that 0.101325 × 1,000,000 = 101,325 Pascals.",
          "Divide by definition: 101,325 × (760 / 101,325) = 760.00.",
          "Result: 0.101325 MPa equals exactly 760.00 Torr."
        ]
      },
      {
        title: "Example 2: Industrial Gas Regulating Manifold (0.8 MPa)",
        subtitle: "A pharmaceutical synthesis vessel blanketed with inert gas operates at an absolute pressure of 0.8 MPa. Determine the pressure in Torr.",
        steps: [
          "Identify initial pressure: 0.8 MPa.",
          "Apply formula: Torr = 0.8 × 7,500.6168.",
          "Calculate: 0.8 × 7,500.6168 = 6,000.4934.",
          "Result: 0.8 MPa equals approximately 6,000.49 Torr."
        ]
      },
      {
        title: "Example 3: Autoclave Sterilization Pressure (2.2 MPa)",
        subtitle: "A hospital steam autoclave operates at 2.2 MPa during deep-cycle thermal treatment. Convert this to Torr.",
        steps: [
          "Identify starting pressure: 2.2 MPa.",
          "Calculate: Torr = 2.2 × 7,500.6168.",
          "Perform multiplication: 2.2 × 7,500.6168 = 16,501.357.",
          "Result: 2.2 MPa corresponds to approximately 16,501.36 Torr."
        ]
      }
    ]
  },
  table: {
    title: "Megapascal to Torr Conversion Table",
    headers: ["Megapascals (MPa)", "Torr (Torr)", "Atmospheres (atm)", "Bar Equivalent", "Engineering Context"],
    rows: [
      { fromVal: "0.01 MPa", toVal: "75.006 Torr", extra: "0.0987 atm", extra2: "0.100 bar", extra3: "Moderate vacuum vessel differential" },
      { fromVal: "0.05 MPa", toVal: "375.031 Torr", extra: "0.4935 atm", extra2: "0.500 bar", extra3: "Sub-atmospheric distillation column" },
      { fromVal: "0.10 MPa", toVal: "750.062 Torr", extra: "0.9869 atm", extra2: "1.000 bar", extra3: "Ambient barometric pressure baseline" },
      { fromVal: "0.1013 MPa", toVal: "760.000 Torr", extra: "1.0000 atm", extra2: "1.013 bar", extra3: "Standard atmospheric sea-level pressure" },
      { fromVal: "0.20 MPa", toVal: "1,500.123 Torr", extra: "1.9738 atm", extra2: "2.000 bar", extra3: "Pressurized beverage carbonation" },
      { fromVal: "0.50 MPa", toVal: "3,750.308 Torr", extra: "4.9346 atm", extra2: "5.000 bar", extra3: "Shop floor pneumatic tool supply" },
      { fromVal: "1.00 MPa", toVal: "7,500.617 Torr", extra: "9.8692 atm", extra2: "10.000 bar", extra3: "Municipal water distribution trunk line" },
      { fromVal: "2.00 MPa", toVal: "15,001.234 Torr", extra: "19.7385 atm", extra2: "20.000 bar", extra3: "High-pressure boiler feed pump" },
      { fromVal: "5.00 MPa", toVal: "37,503.084 Torr", extra: "49.3462 atm", extra2: "50.000 bar", extra3: "Natural gas transport pipeline" },
      { fromVal: "10.00 MPa", toVal: "75,006.168 Torr", extra: "98.6923 atm", extra2: "100.000 bar", extra3: "High-pressure hydraulic return line" },
      { fromVal: "20.00 MPa", toVal: "150,012.337 Torr", extra: "197.3847 atm", extra2: "200.000 bar", extra3: "Commercial breathing gas cylinder fill" },
      { fromVal: "50.00 MPa", toVal: "375,030.841 Torr", extra: "493.4616 atm", extra2: "500.000 bar", extra3: "Isostatic compaction press" }
    ]
  },
  applications: {
    title: "Engineering and Scientific Use Cases",
    items: [
      {
        title: "Vacuum Metallurgy and Sintering",
        text: "Specialty furnaces undergo cycles that range from high-pressure gas quenching (measured in MPa) to fine vacuum chamber degassing (measured in Torr or millitorr), requiring technicians to transition between both scales."
      },
      {
        title: "Semiconductor Chemical Vapor Deposition (CVD)",
        text: "Bulk precursor delivery manifolds store pressurized reactant gases at multiple megapascals, which are then precision-throttled into reaction chambers operating at sub-Torr levels."
      },
      {
        title: "Physical Chemistry and Equation of State Testing",
        text: "Gas compressibility experiments, supercritical CO₂ phase equilibria, and vapor pressure determination studies cross-correlate pressure readings in MPa and Torr to compare contemporary data with legacy literature."
      },
      {
        title: "Analytical Instrumentation and Mass Spectrometry",
        text: "High-pressure liquid chromatography (HPLC) pump heads operate at 10 to 40 MPa, interfacing with electrospray ionization nozzles that vent into mass spectrometer vacuum stages measured in Torr."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Using 750 instead of 7,500.62: A frequent typographical mistake is multiplying by 750 (which converts bars or atmospheres, not megapascals), producing an answer that is ten times too small.",
      "Conflating Torr with Millitorr (Microns): One Torr equals 1,000 millitorr. For high-vacuum work, verify whether specifications indicate Torr or mTorr.",
      "Failing to account for atmospheric zero: Gauge pressure in MPa (MPag) does not include ambient atmosphere. To obtain absolute pressure in Torr, add 0.101325 MPa before converting, or add 760 Torr to the converted result.",
      "Misidentifying unit symbols: The symbol for Torr is capitalized ('Torr'), whereas metric abbreviations like 'mbar' or 'bar' are lowercase."
    ]
  },
  faqs: [
    {
      question: "How many Torr are in 1 megapascal?",
      answer: "There are approximately 7,500.6168 Torr in 1 megapascal. To convert, multiply the MPa figure by 7,500.6168."
    },
    {
      question: "What is the exact mathematical formula to convert MPa to Torr?",
      answer: "The exact formula is: Torr = MPa × (760,000,000 / 101,325). Numerically, this equals: Torr ≈ MPa × 7,500.616827."
    },
    {
      question: "How do you convert Torr back to MPa?",
      answer: "Divide the value in Torr by 7,500.6168 (or multiply by 0.0001333224). For example, 760 Torr ÷ 7,500.6168 ≈ 0.101325 MPa."
    },
    {
      question: "Is Torr identical to millimeters of mercury (mmHg)?",
      answer: "For virtually all practical purposes, yes. Both represent ~133.322 Pa. Metrologically, 1 Torr is defined exactly as 101,325 / 760 Pa, whereas 1 conventional mmHg is defined as 133.322387415 Pa (a difference of less than 0.000014%)."
    },
    {
      question: "What is 0.1 MPa in Torr?",
      answer: "0.1 MPa equals approximately 750.06 Torr (0.1 × 7,500.6168 ≈ 750.06 Torr), which is slightly below standard sea-level atmospheric pressure (760 Torr)."
    },
    {
      question: "What is 10 MPa in Torr?",
      answer: "10 MPa equals approximately 75,006.17 Torr (10 × 7,500.6168 ≈ 75,006.17 Torr)."
    },
    {
      question: "Why is the Torr named after Evangelista Torricelli?",
      answer: "Evangelista Torricelli, a 17th-century Italian physicist and student of Galileo, invented the mercury barometer in 1643 and proved that air has weight and exerts atmospheric pressure."
    },
    {
      question: "Why is Torr still used when SI units exist?",
      answer: "Torr remains deeply established in vacuum science, freeze-drying technology, and semiconductor manufacturing because pressure gauges and calibration charts were historically standardized in millimeters of mercury."
    },
    {
      question: "How does 1 MPa compare to a high vacuum in Torr?",
      answer: "1 MPa is a very high pressure (7,500 Torr, or ~10 times atmospheric pressure). In contrast, a high vacuum is typically 10⁻³ to 10⁻⁷ Torr, representing a pressure difference of up to 10 orders of magnitude."
    }
  ],
  relatedList: [
    { label: "Megapascal to Bar", from: "megapascal", to: "bar" },
    { label: "Megapascal to Atmosphere", from: "megapascal", to: "atmosphere" },
    { label: "Megapascal to Millimeter of Mercury", from: "megapascal", to: "mmhg" },
    { label: "Torr to Megapascal", from: "torr", to: "megapascal" },
    { label: "Torr to Pascal", from: "torr", to: "pascal" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition",
    "NIST Guide to the SI, Chapter 4: Units and Quantities - Pressure and Vacuum",
    "American Vacuum Society (AVS) Recommended Practices for Vacuum Measurement",
    "ISO 3529-1: Vacuum technology — Vocabulary — Part 1: General terms"
  ]
};
