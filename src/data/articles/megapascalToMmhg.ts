import { CustomArticleData } from "./types";

export const megapascalToMmhg: CustomArticleData = {
  fromUnitId: "megapascal",
  toUnitId: "mmhg",
  seoTitle: "Megapascal to Millimeter of Mercury Converter (MPa to mmHg)",
  metaDescription: "Convert megapascals to millimeters of mercury (MPa to mmHg) with accurate conversion factors. Features step-by-step math, industrial and medical examples, tables, and FAQs.",
  h1: "Megapascal to Millimeter of Mercury Converter",
  introduction: [
    "Converting megapascals (MPa) to millimeters of mercury (mmHg) connects high-magnitude SI mechanical pressure metrics with manometric pressure measurements. While modern mechanical systems, geotechnical engineering, and high-pressure fluid lines operate in megapascals ($1\\text{ N/mm}^2$), clinical physiology, medical gas delivery, barometric instrumentation, and vacuum systems routinely use millimeters of mercury.",
    "One conventional millimeter of mercury is defined internationally as the pressure exerted by a 1-millimeter-high column of pure mercury at 0 °C under standard acceleration of gravity ($9.80665\\text{ m/s}^2$), equal to exactly 133.322387 Pascals. Because one megapascal equals 1,000,000 Pascals, dividing 1,000,000 by 133.322387 demonstrates that 1 megapascal equals approximately 7,500.62 mmHg.",
    "This guide provides the formal conversion formula, manual step-by-step calculation walkthroughs, practical comparison tables, industry applications, and answers to frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert megapascals to millimeters of mercury, multiply the value in megapascals by 7,500.6158 (or divide by 0.0001333224). For example, a pressure of 0.1 MPa equals approximately 750.06 mmHg.",
    formulaDisplay: "mmHg = MPa × 7,500.6158",
    subtext: "Standard definition: 1 mmHg = 133.322387 Pa = 0.000133322387 MPa.\n1 MPa = 1,000,000 Pa ≈ 7,500.615758 mmHg."
  },
  aboutSourceUnit: {
    title: "Understanding the Megapascal (MPa)",
    text: "The megapascal (symbol: MPa) is an SI decimal multiple of the Pascal, representing exactly 1,000,000 Newtons per square meter ($1\\text{ N/mm}^2$). It is the universal standard for structural material specifications (such as yield strength and concrete grade), geotechnical rock mechanics, and hydraulic machinery."
  },
  aboutTargetUnit: {
    title: "Understanding the Millimeter of Mercury (mmHg)",
    text: "The millimeter of mercury (symbol: mmHg) is a manometric unit of pressure defined as the hydrostatic head exerted by a 1 mm column of mercury at 0 °C (density $13,595.1\\text{ kg/m}^3$) under standard gravity ($g = 9.80665\\text{ m/s}^2$). Standardized at exactly 133.322387 Pa, it remains the standard unit for human blood pressure and clinical physiological monitoring worldwide."
  },
  relationship: "One conventional millimeter of mercury equals exactly 133.322387 Pascals (0.0001333224 MPa). Therefore, 1 megapascal equals exactly 1,000,000 / 133.322387 mmHg, which rounds to 7,500.6158 mmHg. In the reverse direction, 1 mmHg equals approximately 0.0001333224 MPa.",
  relationshipTitle: "Megapascal to mmHg Comparison Benchmarks",
  relationshipItems: [
    { label: "0.016 MPa", value: "120 mmHg (Normal human systolic arterial blood pressure)" },
    { label: "0.10 MPa", value: "750.06 mmHg (Nominal barometric baseline)" },
    { label: "0.101325 MPa", value: "760.00 mmHg (Standard sea-level atmospheric pressure)" },
    { label: "0.50 MPa", value: "3,750.31 mmHg (Pneumatic shop line pressure)" },
    { label: "1.00 MPa", value: "7,500.62 mmHg (Municipal fire main pressure)" },
    { label: "10.00 MPa", value: "75,006.16 mmHg (Hydraulic circuit operating pressure)" }
  ],
  formula: {
    text: "Multiply the pressure in megapascals by 7,500.6158, or divide by 0.000133322387.",
    math: "\\text{mmHg} = \\frac{\\text{MPa} \\times 1\\,000\\,000}{133.322387} \\approx \\text{MPa} \\times 7\\,500.6158",
    subtext: "To convert mmHg back to megapascals, multiply the mmHg value by 0.0001333224 (or divide by 7,500.6158)."
  },
  formulaTitle: "Megapascal to Millimeter of Mercury Formula",
  practicalTip: {
    title: "Medical and Physiological Context",
    text: "Because human blood pressure is recorded in mmHg (e.g., 120/80 mmHg), 120 mmHg corresponds to only 0.016 MPa (16 kPa). Biomedical sensor engineers frequently scale raw MPa pressure transducer readings to mmHg for medical monitor displays."
  },
  expertNote: {
    title: "Conventional mmHg vs. Actual Manometer Height",
    text: "The conventional unit mmHg is a defined constant (133.322387 Pa) independent of ambient temperature. In a physical glass U-tube manometer, mercury density decreases with rising room temperature, requiring thermal density corrections if using raw liquid column measurements."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Medical Oxygen Pipeline Pressure (0.4 MPa)",
        subtitle: "A hospital centralized medical oxygen pipeline is regulated to a line pressure of 0.4 MPa. Express this supply line pressure in mmHg.",
        steps: [
          "State starting pressure: 0.4 MPa.",
          "Apply conversion formula: mmHg = 0.4 × 7,500.6158.",
          "Multiply: 0.4 × 7,500.6158 = 3,000.2463.",
          "Result: 0.4 MPa corresponds to approximately 3,000.25 mmHg."
        ]
      },
      {
        title: "Example 2: Blood Pressure Cuff Calibration Transducer (0.04 MPa)",
        subtitle: "A calibration gauge for non-invasive blood pressure monitors is tested at 0.04 MPa. Convert this calibration setpoint to mmHg.",
        steps: [
          "Identify initial reading: 0.04 MPa.",
          "Calculate: mmHg = 0.04 × 7,500.6158.",
          "Perform calculation: 0.04 × 7,500.6158 = 300.0246.",
          "Result: 0.04 MPa equals approximately 300.02 mmHg (covering the maximum diagnostic range of clinical sphygmomanometers)."
        ]
      },
      {
        title: "Example 3: Low-Pressure Hydraulic Valve Test (1.5 MPa)",
        subtitle: "A specialized test bench checks a low-pressure hydraulic valve at 1.5 MPa. Convert this test load into mmHg.",
        steps: [
          "Identify test load: 1.5 MPa.",
          "Apply multiplier: mmHg = 1.5 × 7,500.6158.",
          "Calculate: 1.5 × 7,500.6158 = 11,250.9237.",
          "Result: 1.5 MPa equals approximately 11,250.92 mmHg."
        ]
      }
    ]
  },
  table: {
    title: "Megapascal to Millimeter of Mercury Reference Table",
    headers: ["Megapascals (MPa)", "Millimeters of Mercury (mmHg)", "Kilopascals (kPa)", "Bar Equivalent", "Typical Application"],
    rows: [
      { fromVal: "0.016 MPa", toVal: "120.01 mmHg", extra: "16.0 kPa", extra2: "0.160 bar", extra3: "Standard systolic blood pressure" },
      { fromVal: "0.040 MPa", toVal: "300.02 mmHg", extra: "40.0 kPa", extra2: "0.400 bar", extra3: "Sphygmomanometer upper test limit" },
      { fromVal: "0.100 MPa", toVal: "750.06 mmHg", extra: "100.0 kPa", extra2: "1.000 bar", extra3: "1 bar nominal atmospheric baseline" },
      { fromVal: "0.1013 MPa", toVal: "760.00 mmHg", extra: "101.3 kPa", extra2: "1.013 bar", extra3: "1 standard atmosphere (760 mmHg)" },
      { fromVal: "0.200 MPa", toVal: "1,500.12 mmHg", extra: "200.0 kPa", extra2: "2.000 bar", extra3: "Commercial refrigeration backpressure" },
      { fromVal: "0.400 MPa", toVal: "3,000.25 mmHg", extra: "400.0 kPa", extra2: "4.000 bar", extra3: "Hospital medical gas distribution" },
      { fromVal: "0.600 MPa", toVal: "4,500.37 mmHg", extra: "600.0 kPa", extra2: "6.000 bar", extra3: "Pneumatic automation circuit" },
      { fromVal: "1.000 MPa", toVal: "7,500.62 mmHg", extra: "1,000.0 kPa", extra2: "10.000 bar", extra3: "High-pressure boiler steam main" },
      { fromVal: "2.000 MPa", toVal: "15,001.23 mmHg", extra: "2,000.0 kPa", extra2: "20.000 bar", extra3: "Carbon dioxide fire suppression tank" },
      { fromVal: "5.000 MPa", toVal: "37,503.08 mmHg", extra: "5,000.0 kPa", extra2: "50.000 bar", extra3: "Industrial process gas piping" },
      { fromVal: "10.000 MPa", toVal: "75,006.16 mmHg", extra: "10,000.0 kPa", extra2: "100.000 bar", extra3: "Heavy machinery hydraulic baseline" }
    ]
  },
  applications: {
    title: "Practical Applications Across Industries",
    items: [
      {
        title: "Biomedical Instrumentation and Dialysis",
        text: "Hemodialysis machines, cardiac bypass pumps, and infusion systems monitor arterial and venous line pressures in mmHg while fluid pump specifications are certified in MPa or bar."
      },
      {
        title: "Medical Gas Distribution Networks",
        text: "Centralized hospital oxygen, nitrous oxide, and medical air manifold pressures are regulated down from cylinder supply (15 to 20 MPa) to terminal delivery zones monitored against manometric pressure limits."
      },
      {
        title: "Barometric Meteorology and Aviation Altimetry",
        text: "Atmospheric weather research and barometric pressure calibration laboratories correlate sensor outputs recorded in SI megapascals or hectopascals with traditional mercury barometer standards."
      },
      {
        title: "Low-Pressure Gas regulators and Burners",
        text: "Gas burner supply lines and pilot ignition systems require technicians to translate pipeline supply pressures (in fractions of a megapascal) into manometric column heights for flow calibration."
      }
    ]
  },
  pitfalls: {
    title: "Important Verification Checkpoints",
    items: [
      "Confusing blood pressure mmHg ranges with industrial pressures: Normal human blood pressures are small fractions of a megapascal (0.01 to 0.02 MPa). Working in whole megapascals yields values in the thousands of mmHg.",
      "Gauge pressure vs absolute pressure: Medical and industrial gauges often read gauge pressure (relative to atmosphere). Standard sea-level atmosphere adds 760 mmHg (0.101325 MPa) to absolute pressure.",
      "Conflating mmHg with inches of mercury (inHg): 1 inHg equals 25.4 mmHg. Using inHg conversion constants when calculating mmHg will result in a 25.4-fold error.",
      "Temperature effects on physical mercury: When using an actual physical mercury column manometer rather than the theoretical unit, always apply temperature corrections for mercury's thermal expansion coefficient."
    ]
  },
  faqs: [
    {
      question: "How many mmHg are in 1 megapascal?",
      answer: "There are approximately 7,500.6158 millimeters of mercury in 1 megapascal. To convert, multiply the MPa value by 7,500.6158."
    },
    {
      question: "What is the exact formula for converting MPa to mmHg?",
      answer: "The formula is: mmHg = (MPa × 1,000,000) / 133.322387. Numerically, this simplifies to: mmHg ≈ MPa × 7,500.6158."
    },
    {
      question: "How do you convert mmHg back to MPa?",
      answer: "To convert mmHg to megapascals, multiply the mmHg value by 0.0001333224 (or divide by 7,500.6158). For example, 760 mmHg × 0.0001333224 ≈ 0.101325 MPa."
    },
    {
      question: "What is the difference between mmHg and Torr?",
      answer: "While originally designed to be identical, modern standards define them slightly differently: 1 Torr is exactly 101,325 / 760 Pa (133.322368 Pa), while 1 conventional mmHg is defined as 133.322387 Pa based on mercury density at 0 °C. The difference is less than 0.000014%."
    },
    {
      question: "What is 0.1 MPa in mmHg?",
      answer: "0.1 MPa equals approximately 750.06 mmHg (0.1 × 7,500.6158 ≈ 750.06 mmHg), representing nominal 1-bar atmospheric pressure."
    },
    {
      question: "What is normal human blood pressure in megapascals?",
      answer: "A standard blood pressure reading of 120/80 mmHg corresponds to approximately 0.0160 MPa systolic and 0.0107 MPa diastolic (or 16.0 kPa and 10.7 kPa)."
    },
    {
      question: "Why is mercury used as a historical pressure standard?",
      answer: "Mercury is an exceptionally dense liquid (13.595 g/cm³ at 0 °C), allowing a manageable 760 mm (about 30 inches) column height to balance atmospheric pressure, whereas water would require a column over 10 meters (33 feet) tall."
    },
    {
      question: "What is 1 MPa in mmHg?",
      answer: "1 MPa equals approximately 7,500.62 mmHg. This is about 9.87 times standard sea-level atmospheric pressure (760 mmHg)."
    }
  ],
  relatedList: [
    { label: "Megapascal to Torr", from: "megapascal", to: "torr" },
    { label: "Megapascal to Bar", from: "megapascal", to: "bar" },
    { label: "Megapascal to Atmosphere", from: "megapascal", to: "atmosphere" },
    { label: "Millimeter of Mercury to Megapascal", from: "mmhg", to: "megapascal" },
    { label: "Millimeter of Mercury to Kilopascal", from: "mmhg", to: "kilopascal" }
  ],
  references: [
    "ISO 80000-4: Quantities and units — Part 4: Mechanics",
    "BIPM: The International System of Units (SI) Brochure, 9th Edition",
    "NIST Special Publication 330: The International System of Units (SI)",
    "American Heart Association (AHA) Recommendations for Blood Pressure Measurement"
  ]
};
