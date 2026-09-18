import { CustomArticleData } from "./types";

export const megapascalToAtmosphere: CustomArticleData = {
  fromUnitId: "megapascal",
  toUnitId: "atmosphere",
  seoTitle: "Megapascal to Atmosphere Converter (MPa to atm)",
  metaDescription: "Convert megapascals to standard atmospheres (MPa to atm) with exact conversion factors. Includes step-by-step calculations, worked examples, pressure benchmarks, and FAQs.",
  h1: "Megapascal to Atmosphere Converter",
  introduction: [
    "Converting megapascals (MPa) to standard atmospheres (atm) links modern SI metric engineering specifications with atmospheric and geophysical pressure scales. Megapascals represent mechanical stress and fluid pressure in heavy industrial hydraulics, deep-well oil exploration, rock mechanics, and materials testing. Meanwhile, the standard atmosphere remains a universally recognized reference in high-pressure physics, oceanography, geology, and chemical phase equilibria.",
    "Because the standard atmosphere is defined internationally as exactly 101,325 Pascals (0.101325 MPa), converting megapascals to atmospheres involves dividing by 0.101325, or multiplying by approximately 9.869233. This means that 1 megapascal represents just under ten standard sea-level atmospheres (approximately 9.87 atm).",
    "This technical guide provides the exact conversion formula, worked step-by-step engineering problems, practical benchmarks spanning deep-sea trenches to industrial autoclaves, a comprehensive lookup table, and detailed answers to common questions."
  ],
  quickAnswer: {
    text: "To convert megapascals to standard atmospheres, multiply the pressure value by 9.869233 (or divide by 0.101325). For example, a hydraulic test pressure of 10 MPa equals approximately 98.69 atm.",
    formulaDisplay: "atm = MPa × 9.869233",
    subtext: "Exact definition: 1 atm = 101,325 Pa = 0.101325 MPa. Therefore, 1 MPa = (1,000,000 / 101,325) atm ≈ 9.86923267 atm."
  },
  aboutSourceUnit: {
    title: "Understanding the Megapascal (MPa)",
    text: "The megapascal (symbol: MPa) is an SI decimal multiple of the Pascal, defined as exactly 1,000,000 Pascals (10⁶ N/m² or 1 N/mm²). It is the premier international metric unit for structural material strengths (such as steel yield strength and concrete compressive resistance), geological overburden pressures, and high-pressure fluid power circuits."
  },
  aboutTargetUnit: {
    title: "Understanding the Standard Atmosphere (atm)",
    text: "The standard atmosphere (symbol: atm) is a non-SI unit of pressure defined during the 10th Conférence Générale des Poids et Mesures (CGPM) in 1954 as exactly 101,325 Pascals. Originally derived from the average atmospheric pressure at sea level in Paris, it serves as the foundational baseline for standard temperature and pressure (STP) in chemistry, meteorology, and deep ocean exploration."
  },
  relationship: "The standard atmosphere is defined as exactly 101,325 Pa, which equals 0.101325 MPa. Consequently, 1 megapascal equals exactly 1,000,000 / 101,325 atmospheres, or approximately 9.869233 atm. One atmosphere corresponds to 0.101325 MPa.",
  relationshipTitle: "Megapascal to Atmosphere Pressure Benchmarks",
  relationshipItems: [
    { label: "0.101325 MPa", value: "1.000 atm (Nominal mean sea-level atmospheric pressure)" },
    { label: "1.00 MPa", value: "9.87 atm (Commercial espresso machine pump pressure)" },
    { label: "10.0 MPa", value: "98.69 atm (Ocean water pressure at ~1,000 meters depth)" },
    { label: "20.0 MPa", value: "197.38 atm (Standard 3,000 psi breathing gas cylinder)" },
    { label: "70.0 MPa", value: "690.85 atm (Automotive hydrogen fuel cell vehicle storage)" },
    { label: "108.6 MPa", value: "1,071.80 atm (Challenger Deep floor, Mariana Trench ~10,920 m)" }
  ],
  formula: {
    text: "Multiply the pressure in megapascals by 9.869233, or divide the value by 0.101325.",
    math: "\\text{atm} = \\frac{\\text{MPa} \\times 1\\,000\\,000}{101\\,325} \\approx \\text{MPa} \\times 9.869233",
    subtext: "To convert atmospheres back to megapascals: MPa = atm × 0.101325."
  },
  formulaTitle: "Megapascal to Atmosphere Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation",
    text: "Because 1 MPa is approximately 9.87 atm, you can quickly estimate atmospheres by multiplying the MPa value by 10 and subtracting about 1.3%. For example, 10 MPa × 10 = 100 atm, minus 1.3% gives approximately 98.7 atm."
  },
  expertNote: {
    title: "Standard Atmosphere (atm) vs. Technical Atmosphere (at)",
    text: "Never confuse the standard atmosphere (atm = 101,325 Pa) with the technical atmosphere (at = 1 kgf/cm² = 98,066.5 Pa). While 1 MPa equals 9.8692 atm, it equals 10.1972 at. Modern engineering documents exclusively mandate the standard atmosphere or direct SI Pascals."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Mariana Trench Ocean Floor Pressure (108.6 MPa)",
        subtitle: "A deep-sea submersible hull is rated to withstand external hydrostatic pressure at the bottom of the Challenger Deep, measured at 108.6 MPa. Convert this hydrostatic load to standard atmospheres.",
        steps: [
          "Identify the starting pressure: 108.6 MPa.",
          "Apply the conversion formula: atm = 108.6 × (1,000,000 / 101,325).",
          "Perform the calculation: 108.6 × 9.86923267 = 1,071.7987.",
          "Round to sensible engineering precision: 1,071.8 atm.",
          "Result: An ocean depth pressure of 108.6 MPa equals approximately 1,071.8 atmospheres."
        ]
      },
      {
        title: "Example 2: Industrial Hydrothermal Autoclave (25 MPa)",
        subtitle: "A crystal-growing hydrothermal autoclave operates at an internal working pressure of 25 MPa. Express this operating condition in atmospheres.",
        steps: [
          "State the initial pressure: 25 MPa.",
          "Use the conversion factor: atm = 25 / 0.101325.",
          "Calculate: 25 / 0.101325 = 246.7308.",
          "Result: 25 MPa corresponds to 246.73 atmospheres."
        ]
      },
      {
        title: "Example 3: Hydrogen Fuel Storage Vessel (70 MPa)",
        subtitle: "A carbon-fiber composite fuel tank on a zero-emission bus stores compressed hydrogen gas at 70 MPa. Convert this value to standard atmospheres.",
        steps: [
          "Identify starting value: 70 MPa.",
          "Apply the formula: atm = 70 × 9.869233.",
          "Calculate: 70 × 9.869233 = 690.8463.",
          "Result: 70 MPa equals approximately 690.85 atmospheres."
        ]
      }
    ]
  },
  table: {
    title: "Megapascal to Standard Atmosphere Lookup Table",
    headers: ["Megapascals (MPa)", "Atmospheres (atm)", "Bar Equivalent", "PSI Equivalent", "Physical Context"],
    rows: [
      { fromVal: "0.1013 MPa", toVal: "1.000 atm", extra: "1.013 bar", extra2: "14.70 psi", extra3: "Standard sea-level atmospheric pressure" },
      { fromVal: "0.5 MPa", toVal: "4.935 atm", extra: "5.000 bar", extra2: "72.52 psi", extra3: "Industrial plant compressed air header" },
      { fromVal: "1.0 MPa", toVal: "9.869 atm", extra: "10.000 bar", extra2: "145.04 psi", extra3: "Commercial building water booster system" },
      { fromVal: "2.0 MPa", toVal: "19.738 atm", extra: "20.000 bar", extra2: "290.08 psi", extra3: "Commercial HVAC high-pressure refrigerant test" },
      { fromVal: "5.0 MPa", toVal: "49.346 atm", extra: "50.000 bar", extra2: "725.19 psi", extra3: "Natural gas distribution pipeline" },
      { fromVal: "10.0 MPa", toVal: "98.692 atm", extra: "100.000 bar", extra2: "1,450.38 psi", extra3: "Ocean pressure at 1,000 m depth" },
      { fromVal: "20.0 MPa", toVal: "197.385 atm", extra: "200.000 bar", extra2: "2,900.75 psi", extra3: "Industrial argon/nitrogen gas cylinder" },
      { fromVal: "35.0 MPa", toVal: "345.423 atm", extra: "350.000 bar", extra2: "5,076.32 psi", extra3: "Heavy excavator main hydraulic relief pressure" },
      { fromVal: "50.0 MPa", toVal: "493.462 atm", extra: "500.000 bar", extra2: "7,251.89 psi", extra3: "Geothermal well injection testing" },
      { fromVal: "70.0 MPa", toVal: "690.846 atm", extra: "700.000 bar", extra2: "10,152.64 psi", extra3: "Type IV hydrogen fuel storage cylinder" },
      { fromVal: "100.0 MPa", toVal: "986.923 atm", extra: "1,000.000 bar", extra2: "14,503.77 psi", extra3: "Diamond synthesis anvil chamber baseline" },
      { fromVal: "200.0 MPa", toVal: "1,973.847 atm", extra: "2,000.000 bar", extra2: "29,007.55 psi", extra3: "Ultra-high-pressure waterjet cutting nozzle" }
    ]
  },
  applications: {
    title: "Key Scientific and Industrial Applications",
    items: [
      {
        title: "Deep-Sea Oceanography and Submersible Design",
        text: "Oceanographic sensors measure water depth pressure in megapascals (approximately 0.01 MPa per meter). Engineers convert these sensor readings into atmospheres to quantify the compressive physical burden relative to surface sea-level pressure."
      },
      {
        title: "Geology and Mineral Physics",
        text: "Geochemists examining rock metamorphism in Earth's crust express tectonic lithostatic pressures in megapascals and gigapascals, frequently translating them into atmospheres when consulting historical experimental mineral equilibrium literature."
      },
      {
        title: "High-Pressure Chemical Synthesis and Autoclaves",
        text: "Industrial chemical synthesis reactors for polyethylene polymerization or artificial quartz growth operate between 10 MPa and 300 MPa. Operators monitor pressure relief settings against historical batch recipes designated in atmospheres."
      },
      {
        title: "Alternative Fuel Vehicle Storage (CNG and Hydrogen)",
        text: "Compressed Natural Gas (CNG) cylinders operate at 20 to 25 MPa (~200 to 250 atm), while hydrogen storage operates at 35 to 70 MPa (~345 to 691 atm). Safety protocols require cross-referencing SI valve specifications with atmospheric ratings."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming 1 MPa equals 10 atm exactly: While 1 MPa equals 10 bar exactly, it equals 9.869233 atm. Using 10 instead of 9.87 introduces an approximate 1.3% error that can compromise safety margins in pressure vessels.",
      "Confusing standard atmospheres (atm) with technical atmospheres (at): 1 technical atmosphere equals 1 kgf/cm² (98.0665 kPa), whereas 1 standard atmosphere equals 101.325 kPa.",
      "Ignoring gauge pressure versus absolute pressure: Pressure sensors labeled in MPa gauge (MPag) record pressure above atmospheric zero. To obtain true physical atmospheres absolute (atm), add 0.101325 MPa before converting.",
      "Mishandling decimal places: 1 atmosphere is 0.101325 MPa, not 1.01325 MPa. Shifting the decimal incorrectly by one digit causes a tenfold calculation error."
    ]
  },
  faqs: [
    {
      question: "How many atmospheres are in 1 megapascal?",
      answer: "There are approximately 9.869233 standard atmospheres in 1 megapascal. To convert, multiply the megapascal figure by 9.869233 (or divide by 0.101325)."
    },
    {
      question: "What is the exact conversion formula from MPa to atm?",
      answer: "The exact conversion formula is: atm = (MPa × 1,000,000) / 101,325. Numerically, this is equivalent to: atm = MPa × 9.86923267."
    },
    {
      question: "Is a megapascal larger than an atmosphere?",
      answer: "Yes, a megapascal is roughly 9.87 times larger than a standard atmosphere. One megapascal equals 1,000,000 Pascals, whereas one standard atmosphere equals 101,325 Pascals."
    },
    {
      question: "How do I convert atmospheres back to megapascals?",
      answer: "To convert atmospheres to megapascals, multiply the atmosphere value by 0.101325. For example, 100 atm × 0.101325 = 10.1325 MPa."
    },
    {
      question: "Why is 1 MPa close to 10 atmospheres?",
      answer: "One atmosphere is approximately 100,000 Pascals (specifically 101,325 Pa). Since 1 megapascal is 1,000,000 Pascals, dividing 1,000,000 by 101,325 yields 9.869, which is just 1.3% below 10."
    },
    {
      question: "What is 20 MPa in standard atmospheres?",
      answer: "20 MPa equals approximately 197.38 atmospheres (20 × 9.869233 ≈ 197.38 atm). This is the standard storage pressure for commercial compressed gas cylinders."
    },
    {
      question: "What is 70 MPa in atmospheres for hydrogen fuel tanks?",
      answer: "70 MPa equals approximately 690.85 atmospheres (70 × 9.869233 ≈ 690.85 atm). This represents the internal storage pressure of hydrogen fuel cell vehicles."
    },
    {
      question: "What is the ocean pressure at the bottom of the Mariana Trench in atmospheres?",
      answer: "At the deepest known ocean depth (Challenger Deep, ~10,920 meters), hydrostatic pressure reaches approximately 108.6 MPa, which equals 1,071.8 standard atmospheres."
    },
    {
      question: "Does this conversion change with temperature or gravity?",
      answer: "No. Both the megapascal (defined via the SI unit of force and area) and the standard atmosphere (defined as exactly 101,325 Pa by international treaty) have fixed mathematical definitions that do not vary with local temperature or gravity."
    }
  ],
  relatedList: [
    { label: "Megapascal to Bar", from: "megapascal", to: "bar" },
    { label: "Megapascal to PSI", from: "megapascal", to: "psi" },
    { label: "Megapascal to Kilopascal", from: "megapascal", to: "kilopascal" },
    { label: "Atmosphere to Megapascal", from: "atmosphere", to: "megapascal" },
    { label: "Atmosphere to Bar", from: "atmosphere", to: "bar" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition",
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "10th Conférence Générale des Poids et Mesures (CGPM, 1954), Definition of the Standard Atmosphere",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics"
  ]
};
