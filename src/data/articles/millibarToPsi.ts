import { CustomArticleData } from "./types";

export const millibarToPsi: CustomArticleData = {
  fromUnitId: "millibar",
  toUnitId: "psi",
  seoTitle: "Millibar to PSI Converter (mbar to psi)",
  metaDescription: "Convert millibar to PSI (mbar to psi) with precise engineering factors. Review formulas, HVAC and tire examples, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/millibar-to-psi",
  h1: "Millibar to PSI Converter",
  introduction: [
    "Converting millibar to pounds per square inch (PSI) is a routine requirement in trans-Atlantic aviation maintenance, offshore oil and gas engineering, automotive manufacturing, and HVAC diagnostics. While European equipment, marine weather forecasts, and international flight altimeters operate in millibars (or hectopascals), North American pneumatic tools, tire inflators, and hydraulic systems specify pressure in PSI.",
    "One millibar is defined as exactly 100 Pascals (100 N/m²). One pound per square inch represents the force of one pound-force applied over an area of one square inch, defined internationally as approximately 6,894.757293 Pascals. Dividing 100 by 6,894.757293 reveals that one millibar equals approximately 0.01450377 PSI. Conversely, one PSI equals approximately 68.947573 millibars. To convert millibars to PSI, multiply the value by 0.01450377.",
    "This technical guide explains the conversion derivation, provides worked examples for tire inflation and cleanroom differentials, presents a comprehensive conversion reference table, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert millibar to PSI, multiply the pressure value in millibar by 0.01450377 (or divide by 68.947573). For example, standard atmospheric pressure of 1,013.25 mbar equals approximately 14.696 PSI, and 1,000 mbar equals approximately 14.504 PSI.",
    formulaDisplay: "psi = mbar × 0.01450377",
    subtext: "1 mbar = 0.01450377 psi | 1 psi = 68.947573 mbar | Standard sea level = 14.696 psi"
  },
  aboutSourceUnit: {
    title: "Understanding the Millibar (mbar)",
    text: "The millibar (symbol: mbar) is a metric unit equal to 1/1,000 of a bar (100 Pascals or 1 hectopascal). Widely used across global meteorology, aviation barometry, and European gas distribution, it provides clean, manageable numbers for atmospheric and low differential pressures."
  },
  aboutTargetUnit: {
    title: "Understanding Pounds per Square Inch (PSI)",
    text: "Pound-force per square inch (symbol: psi or lb/in²) is the primary pressure unit in the Imperial and US Customary systems. Defined as the force of one pound-force exerted over an area of one square inch (6,894.757 Pa), it dominates North American automotive, aerospace, oil refining, and industrial fluid power applications."
  },
  relationship: "One millibar equals 100 Pascals, while 1 PSI equals approximately 6,894.757 Pascals. Thus, 1 millibar equals approximately 0.01450377 PSI, and 1 PSI equals approximately 68.947573 millibars.",
  relationshipTitle: "Millibar to PSI Physical Benchmarks",
  relationshipItems: [
    { label: "1 mbar", value: "0.0145 psi (Base conversion ratio)" },
    { label: "25 mbar", value: "0.3626 psi (Residential natural gas line)" },
    { label: "50 mbar", value: "0.7252 psi (Commercial ventilation supply plenum)" },
    { label: "500 mbar", value: "7.2519 psi (Half an atmosphere)" },
    { label: "1,000 mbar", value: "14.5038 psi (1 bar exact metric milestone)" },
    { label: "1,013.25 mbar", value: "14.6959 psi (Standard sea-level atmospheric pressure)" },
    { label: "2,200 mbar", value: "31.9083 psi (Passenger car tire cold pressure)" },
    { label: "6,000 mbar", value: "87.0226 psi (Standard workshop compressed air line)" }
  ],
  formula: {
    text: "Multiply the pressure in millibar by 0.01450377 to calculate pounds per square inch (PSI).",
    math: "\\text{psi} = \\text{mbar} \\times 0.01450377 = \\frac{\\text{mbar}}{68.947573}",
    subtext: "To convert PSI back to millibar: multiply the PSI value by 68.947573."
  },
  formulaTitle: "Millibar to PSI Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "For fast field estimates without a calculator, divide the millibar value by 70 (or multiply by 0.015). For example, 2,100 mbar divided by 70 equals 30 psi (exact value is 30.46 psi). This approximation is accurate within 1.5%."
  },
  expertNote: {
    title: "Gauge vs. Absolute Reference in PSI",
    text: "Millibar readings in meteorology are absolute pressures (referenced to zero). In contrast, shop gauges and tire chucks measure gauge pressure (psig), reading 0 at local ambient atmosphere. When converting absolute millibars to gauge PSI, subtract atmospheric pressure (approx. 14.7 psi) from the converted absolute PSI value."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Automobile Tire Pressure Conversion",
        subtitle: "A European vehicle door placard recommends inflating front tires to 2,400 mbar. A technician uses an American pressure gauge calibrated in PSI. What is the target pressure?",
        steps: [
          "State starting pressure: 2,400 mbar.",
          "Apply conversion: psi = mbar × 0.01450377.",
          "Calculate: 2,400 × 0.01450377 = 34.809 psi.",
          "Round appropriately: 2,400 mbar corresponds to approximately 35 psi."
        ]
      },
      {
        title: "Example 2: Commercial Gas Burner Pressure",
        subtitle: "A heating technician checks a natural gas manifold operating at 35.0 mbar. Find the pressure in PSI.",
        steps: [
          "State value: 35.0 mbar.",
          "Calculate: 35.0 × 0.01450377 = 0.5076 psi.",
          "Result: 35.0 mbar equals approximately 0.51 psi (or roughly 8.2 ounces per square inch)."
        ]
      },
      {
        title: "Example 3: Sea-Level Barometric Pressure",
        subtitle: "Convert standard atmospheric pressure of 1,013.25 mbar into PSI.",
        steps: [
          "State starting value: 1,013.25 mbar.",
          "Multiply: 1,013.25 × 0.01450377 = 14.6959 psi.",
          "Result: 1,013.25 mbar equals 14.696 psi."
        ]
      }
    ]
  },
  table: {
    title: "Millibar to PSI Conversion Reference Table",
    headers: ["Millibar (mbar)", "PSI (psi)", "Kilopascals (kPa)", "Bar (bar)", "Operational Benchmark"],
    rows: [
      { fromVal: "10 mbar", toVal: "0.145 psi", extra: "1.00 kPa", extra2: "0.010 bar", extra3: "Plenum airflow static differential" },
      { fromVal: "20 mbar", toVal: "0.290 psi", extra: "2.00 kPa", extra2: "0.020 bar", extra3: "Domestic low-pressure gas line" },
      { fromVal: "50 mbar", toVal: "0.725 psi", extra: "5.00 kPa", extra2: "0.050 bar", extra3: "Industrial burner regulator setpoint" },
      { fromVal: "100 mbar", toVal: "1.450 psi", extra: "10.00 kPa", extra2: "0.100 bar", extra3: "Blower discharge port" },
      { fromVal: "500 mbar", toVal: "7.252 psi", extra: "50.00 kPa", extra2: "0.500 bar", extra3: "Partial vacuum hold testing" },
      { fromVal: "900 mbar", toVal: "13.053 psi", extra: "90.00 kPa", extra2: "0.900 bar", extra3: "Severe hurricane eye core" },
      { fromVal: "1,000 mbar", toVal: "14.504 psi", extra: "100.00 kPa", extra2: "1.000 bar", extra3: "1 bar exact metric benchmark" },
      { fromVal: "1,013.25 mbar", toVal: "14.696 psi", extra: "101.325 kPa", extra2: "1.013 bar", extra3: "Standard atmosphere at sea level" },
      { fromVal: "2,000 mbar", toVal: "29.008 psi", extra: "200.00 kPa", extra2: "2.000 bar", extra3: "Compact car tire inflation" },
      { fromVal: "2,500 mbar", toVal: "36.259 psi", extra: "250.00 kPa", extra2: "2.500 bar", extra3: "SUV tire cold inflation" },
      { fromVal: "6,000 mbar", toVal: "87.023 psi", extra: "600.00 kPa", extra2: "6.000 bar", extra3: "Pneumatic air tools" },
      { fromVal: "10,000 mbar", toVal: "145.038 psi", extra: "1,000.00 kPa", extra2: "10.000 bar", extra3: "High-pressure shop compressor main" }
    ]
  },
  applications: {
    title: "Industry & Field Applications",
    items: [
      {
        title: "Automotive Import Servicing",
        text: "European vehicle service manuals specify tire, fuel rail, and turbocharger boost pressures in mbar or bar, requiring technicians in the United States to convert to PSI for shop tools."
      },
      {
        title: "Aerospace Maintenance & Altimetry",
        text: "Avionics ground support consoles frequently test pitot-static instrumentation by converting barometric pressures between international mbar settings and North American PSI calibrations."
      },
      {
        title: "HVAC & Combustion Diagnostics",
        text: "Gas valve inlet and manifold pressures are monitored with digital manometers reading in millibars, while gas appliance rating plates in North America specify water column or PSI limits."
      },
      {
        title: "Scuba & Hyperbaric Equipment",
        text: "Diving regulators and hyperbaric support modules bridge metric cylinder pressures (mbar and bar) with Imperial submersible pressure gauges calibrated in PSI."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Failing to distinguish between absolute PSI (psia) and gauge PSI (psig).",
      "Using rough factor 0.014 instead of 0.01450377 during precision pneumatic leak calculations.",
      "Inverting the conversion by dividing by 0.0145 instead of multiplying.",
      "Assuming 1 bar equals 15 psi exactly; 1 bar is 14.504 psi, while 1 standard atmosphere is 14.696 psi."
    ]
  },
  faqs: [
      {
        question: "How many PSI are in 1 millibar?",
        answer: "There are approximately 0.01450377 PSI in 1 millibar. Conversely, 1 PSI equals approximately 68.947573 millibars."
      },
      {
        question: "How do you convert millibar to PSI?",
        answer: "To convert millibar to PSI, multiply the millibar value by 0.01450377 (or divide by 68.947573): <strong>psi = mbar × 0.01450377</strong>. For example, 1,000 mbar equals 14.504 psi."
      },
      {
        question: "How do you convert PSI to millibar?",
        answer: "Multiply the pressure in PSI by 68.947573: <strong>mbar = psi × 68.947573</strong>. For example, 32 psi equals approximately 2,206.3 mbar."
      },
      {
        question: "What is 1,000 mbar in PSI?",
        answer: "One thousand millibars (1 bar) equals approximately 14.5038 PSI."
      },
      {
        question: "What is standard atmospheric pressure in mbar and PSI?",
        answer: "Standard sea-level atmospheric pressure is exactly 1,013.25 mbar, which equals approximately 14.6959 PSI (commonly rounded to 14.7 psi)."
      },
      {
        question: "What is 2,400 mbar in tire PSI?",
        answer: "Two thousand four hundred millibars equals approximately 34.81 PSI (often rounded to 35 psi on automotive tire pressure gauges)."
      },
      {
        question: "Why is 1 bar not 15 PSI?",
        answer: "One bar is exactly 100,000 Pa, which evaluates to 14.5038 psi. People sometimes approximate 1 bar as 14.5 or 15 psi for rough estimates, but precision work requires 14.5038 psi."
      },
      {
        question: "What is the difference between psia and psig?",
        answer: "Psia is absolute pressure referenced to a perfect vacuum, while psig is gauge pressure referenced to ambient atmospheric pressure (psig = psia - 14.7 psi)."
      }
    ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "ISO 80000-4: Quantities and Units — Mechanics",
    "ASME B40.100: Pressure Gauges and Gauge Attachments",
    "SAE J2412: Automotive Instrumentation Pressure Standards"
  ]
};
