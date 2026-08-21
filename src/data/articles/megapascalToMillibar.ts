import { CustomArticleData } from "./types";

export const megapascalToMillibar: CustomArticleData = {
  fromUnitId: "megapascal",
  toUnitId: "millibar",
  seoTitle: "Megapascal to Millibar Converter (MPa to mbar)",
  metaDescription: "Convert megapascals to millibars (MPa to mbar) with exact metric precision. Learn the 10,000× multiplier formula, geophysics & meteorology examples, tables, and FAQs.",
  h1: "Megapascal to Millibar Converter",
  introduction: [
    "Converting megapascals (MPa) to millibars (mbar) bridges the gap between deep-Earth geophysics, materials testing, high-pressure fluid engineering, and atmospheric meteorology. While planetary scientists, rock mechanics researchers, and high-pressure fluid engineers quantify immense lithospheric or subterranean fluid pressures in megapascals ($10^6\\text{ Pa}$), atmospheric models, barometric instruments, and synoptic weather forecasting systems operate in millibars (where $1\\text{ mbar} = 100\\text{ Pa}$).",
    "Because both units belong to the coherent metric decimal system, the conversion between megapascals and millibars is exact. One megapascal is defined as 1,000,000 Pascals, while one millibar is defined as 100 Pascals (1 hPa). Consequently, one megapascal contains exactly 10,000 millibars. To convert megapascals to millibars, simply multiply the megapascal value by 10,000 (or move the decimal point four places to the right).",
    "This comprehensive guide provides the exact conversion formula, step-by-step geophysics and atmospheric calculation examples, a detailed comparative pressure lookup table, and answers to common technical questions."
  ],
  quickAnswer: {
    text: "To convert megapascals to millibars, multiply the pressure value in megapascals by 10,000. For example, 0.1 MPa equals exactly 1,000 mbar (standard metric atmosphere), and 1 MPa equals 10,000 mbar.",
    formulaDisplay: "mbar = MPa × 10,000",
    subtext: "Exact conversion factor: 1 MPa = 10,000 mbar = 10 bar = 1,000,000 Pa.\n1 mbar = 0.0001 MPa (10⁻⁴ MPa)."
  },
  aboutSourceUnit: {
    title: "Understanding the Megapascal (MPa)",
    text: "The megapascal (symbol: MPa) is an official SI decimal multiple of the Pascal, defined as 1,000,000 Pascals ($10^6\\text{ N/m}^2$, equal to $1\\text{ N/mm}^2$). It is the primary international unit for measuring high hydraulic pressures, material yield strengths, and subterranean geological stresses."
  },
  aboutTargetUnit: {
    title: "Understanding the Millibar (mbar)",
    text: "The millibar (symbol: mbar or mb) is a metric unit of pressure equal to one-thousandth of a bar (100 Pascals or 1 hectopascal). Standardized for atmospheric weather forecasting, barometry, and aviation altimeter calibrations, 1 mbar is numerically identical to 1 hPa."
  },
  relationship: "The relationship between megapascals and millibars is exact by metric definition: 1 MPa = 10,000 mbar, and 1 mbar = 0.0001 MPa. Converting between them requires multiplying or dividing by 10,000.",
  relationshipTitle: "Megapascal to Millibar Pressure Milestones",
  relationshipItems: [
    { label: "0.001 MPa (1 kPa)", value: "10.0 mbar (Local HVAC duct static level)" },
    { label: "0.01 MPa (10 kPa)", value: "100.0 mbar (Upper troposphere flight level)" },
    { label: "0.1 MPa (100 kPa)", value: "1,000.0 mbar (1 bar exact metric baseline)" },
    { label: "0.101325 MPa", value: "1,013.25 mbar (Standard sea-level atmosphere)" },
    { label: "1.0 MPa", value: "10,000.0 mbar (Industrial compressed gas header)" },
    { label: "10.0 MPa", value: "100,000.0 mbar (Subterranean groundwater reservoir pressure)" }
  ],
  formula: {
    text: "Multiply the pressure in megapascals by 10,000 to determine the equivalent pressure in millibars.",
    math: "\\text{mbar} = \\text{MPa} \\times 10{,}000",
    subtext: "To convert millibars back to megapascals, divide the mbar value by 10,000 (or multiply by 0.0001)."
  },
  formulaTitle: "Megapascal to Millibar Formula",
  practicalTip: {
    title: "The 4-Decimal Right Shift Rule",
    text: "Because 1 MPa equals 10,000 mbar, move the decimal point four places to the right to convert MPa to mbar (e.g., 0.1025 MPa becomes 1,025 mbar, and 0.5 MPa becomes 5,000 mbar)."
  },
  expertNote: {
    title: "Planetary & Geothermal Modeling",
    text: "When modeling planetary atmospheres or volcanic magma chamber degassing, volatile pressures in magma chambers ($10\\text{–}100\\text{ MPa}$) are converted to millibars to model sudden surface atmospheric shockwave propagation ($1\\text{ MPa} = 10{,}000\\text{ mbar}$)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Atmospheric Sea-Level Benchmark (0.101325 MPa)",
        subtitle: "Convert standard atmospheric pressure expressed as 0.101325 MPa into millibars for meteorological synoptic charting.",
        steps: [
          "State initial pressure: 0.101325 MPa.",
          "Apply conversion formula: mbar = 0.101325 × 10,000.",
          "Calculate: 0.101325 × 10,000 = 1,013.25.",
          "Result: 0.101325 MPa equals exactly 1,013.25 mbar (standard sea-level pressure)."
        ]
      },
      {
        title: "Example 2: Compressed Gas Cylinder Manifold (0.8 MPa)",
        subtitle: "A medical gas header pipe regulates oxygen at 0.8 MPa. Express this in millibars.",
        steps: [
          "Identify header pressure: 0.8 MPa.",
          "Apply formula: mbar = 0.8 × 10,000.",
          "Calculate: 0.8 × 10,000 = 8,000.",
          "Result: 0.8 MPa corresponds to exactly 8,000 mbar (8 bar)."
        ]
      },
      {
        title: "Example 3: Geotechnical Groundwater Pore Pressure (2.5 MPa)",
        subtitle: "A deep geological bore sensor measures an artesian pore water pressure of 2.5 MPa. Convert to millibars.",
        steps: [
          "State pore pressure: 2.5 MPa.",
          "Apply conversion: mbar = 2.5 × 10,000.",
          "Calculate: 2.5 × 10,000 = 25,000.",
          "Result: 2.5 MPa equals exactly 25,000 mbar (25 bar)."
        ]
      }
    ]
  },
  table: {
    title: "Megapascal to Millibar Conversion Table",
    headers: ["Megapascals (MPa)", "Millibars (mbar)", "Kilopascals (kPa)", "Bar Equivalent", "Physical Context"],
    rows: [
      { fromVal: "0.01 MPa", toVal: "100 mbar", extra: "10 kPa", extra2: "0.10 bar", extra3: "Upper stratosphere atmosphere (~16 km)" },
      { fromVal: "0.05 MPa", toVal: "500 mbar", extra: "50 kPa", extra2: "0.50 bar", extra3: "500 mbar mid-troposphere weather level" },
      { fromVal: "0.1 MPa", toVal: "1,000 mbar", extra: "100 kPa", extra2: "1.00 bar", extra3: "1 Bar exact baseline" },
      { fromVal: "0.101325 MPa", toVal: "1,013.25 mbar", extra: "101.325 kPa", extra2: "1.01325 bar", extra3: "Standard sea-level atmosphere" },
      { fromVal: "0.2 MPa", toVal: "2,000 mbar", extra: "200 kPa", extra2: "2.00 bar", extra3: "Passenger vehicle tire pressure" },
      { fromVal: "0.5 MPa", toVal: "5,000 mbar", extra: "500 kPa", extra2: "5.00 bar", extra3: "Municipal water main pressure" },
      { fromVal: "1.0 MPa", toVal: "10,000 mbar", extra: "1,000 kPa", extra2: "10.00 bar", extra3: "Base megapascal (10 bar)" },
      { fromVal: "2.0 MPa", toVal: "20,000 mbar", extra: "2,000 kPa", extra2: "20.00 bar", extra3: "Industrial steam pipeline" },
      { fromVal: "5.0 MPa", toVal: "50,000 mbar", extra: "5,000 kPa", extra2: "50.00 bar", extra3: "High-pressure gas line" },
      { fromVal: "10.0 MPa", toVal: "100,000 mbar", extra: "10,000 kPa", extra2: "100.00 bar", extra3: "Deep groundwater reservoir pressure" }
    ]
  },
  applications: {
    title: "Key Scientific & Industrial Applications",
    items: [
      {
        title: "Atmospheric Science & Planetary Modeling",
        text: "Atmospheric physicists convert planetary surface pressures (e.g., Venus at ~9.3 MPa) into millibars (93,000 mbar) to compare cloud deck dynamics with Earth's 1,013.25 mbar atmosphere."
      },
      {
        title: "Volcanology & Geothermal Exploration",
        text: "Magma chamber overpressure data recorded in MPa is converted to millibars to model atmospheric acoustic pressure waves generated during explosive volcanic eruptions."
      },
      {
        title: "Process Plant Safety & Relief Sizing",
        text: "Plant safety engineers convert process vessel design limits from MPa into millibars when calibrating sensitive low-pressure rupture disks."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 10,000 instead of multiplying: Converting MPa to mbar increases the numeric value by four orders of magnitude.",
      "Confusing millibars with bars: 1 MPa = 10 bar, but 1 MPa = 10,000 mbar.",
      "Miscounting zeros when converting decimals (e.g., 0.05 MPa = 500 mbar, not 50 mbar)."
    ]
  },
  faqs: [
    {
      question: "How many millibars are in 1 megapascal?",
      answer: "There are exactly 10,000 millibars in 1 megapascal (1 MPa = 10,000 mbar)."
    },
    {
      question: "What is the formula to convert MPa to mbar?",
      answer: "The formula is: mbar = MPa × 10,000."
    },
    {
      question: "What is 0.1 MPa in millibars?",
      answer: "0.1 MPa equals exactly 1,000 mbar (0.1 × 10,000 = 1,000 mbar, which equals 1 bar)."
    },
    {
      question: "What is standard atmospheric pressure in MPa and mbar?",
      answer: "Standard sea-level atmospheric pressure is 0.101325 MPa, which converts to exactly 1,013.25 mbar."
    },
    {
      question: "How do you convert millibars back to megapascals?",
      answer: "Divide the millibar value by 10,000 (or multiply by 0.0001). For example, 1,013.25 mbar ÷ 10,000 = 0.101325 MPa."
    },
    {
      question: "What is 1 MPa in millibars and bars?",
      answer: "1 MPa equals exactly 10,000 millibars, which equals 10 bar."
    },
    {
      question: "Is 1 mbar equal to 1 hectopascal (hPa)?",
      answer: "Yes, exactly. 1 mbar = 1 hPa = 100 Pa = 0.0001 MPa."
    },
    {
      question: "What is 2.5 MPa in millibars?",
      answer: "2.5 MPa equals exactly 25,000 mbar (2.5 × 10,000 = 25,000)."
    }
  ],
  relatedList: [
    { label: "Megapascal to Bar", from: "megapascal", to: "bar" },
    { label: "Kilopascal to Millibar", from: "kilopascal", to: "millibar" },
    { label: "Pascal to Millibar", from: "pascal", to: "millibar" },
    { label: "Megapascal to Kilopascal", from: "megapascal", to: "kilopascal" },
    { label: "Megapascal to Pascal", from: "megapascal", to: "pascal" }
  ],
  references: [
    "World Meteorological Organization (WMO): Guide to Meteorological Instruments and Methods of Observation.",
    "Bureau International des Poids et Mesures (BIPM): The International System of Units (SI Brochure).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
