import { CustomArticleData } from "./types";

export const barToTorr: CustomArticleData = {
  fromUnitId: "bar",
  toUnitId: "torr",
  seoTitle: "Bar to Torr Converter (bar to Torr)",
  metaDescription: "Convert bar to Torr accurately with formulas, vacuum engineering benchmarks, step-by-step examples, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/bar-to-torr",
  h1: "Bar to Torr Converter",
  introduction: [
    "Converting bar to Torr bridges industrial fluid power, compressed gas distribution, and vacuum technology. While the bar serves as a primary metric pressure unit in hydraulics, pneumatics, and chemical processing, the Torr remains standard in high-vacuum systems, thin-film deposition, physical chemistry, and analytical spectrometry.",
    "One bar is defined as exactly 100,000 Pascals (10⁵ Pa), whereas one standard atmosphere is defined as exactly 101,325 Pascals and corresponds to 760 Torr. Consequently, one bar equals 76,000,000 / 101,325 Torr, which evaluates to approximately 750.061683 Torr (or roughly 750.062 Torr). To convert bar to Torr, multiply the value in bar by 750.061683.",
    "This technical guide explains the mathematical relationship between the metric bar and the historical barometric Torr, presents worked engineering calculations for vacuum evacuation and leak testing, outlines practical applications across semiconductor fabrication, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert bar to Torr, multiply the pressure value in bar by 750.061683 (or approximately 750.062). For example, 1 bar equals approximately 750.062 Torr, and 0.05 bar (a rough vacuum) equals approximately 37.503 Torr.",
    formulaDisplay: "Torr = bar × 750.061683",
    subtext: "1 bar = 750.061683 Torr | 1 Torr = 0.001333224 bar (1.333224 mbar)"
  },
  aboutSourceUnit: {
    title: "Understanding the Bar (bar)",
    text: "The bar is a metric unit of pressure introduced in 1909 by British meteorologist William Napier Shaw. Officially defined as exactly 100,000 Pascals (100 kPa or 0.1 MPa), it closely approximates normal sea-level atmospheric pressure (1.01325 bar). Its convenient scale makes it a mainstay in industrial hydraulics, gas cylinder storage, and European process engineering."
  },
  aboutTargetUnit: {
    title: "Understanding the Torr (Torr)",
    text: "The Torr is a non-SI unit of pressure named in honour of Italian physicist Evangelista Torricelli, inventor of the mercury barometer in 1643. Modern international metrology defines 1 Torr as exactly 1/760 of a standard atmosphere (101,325 / 760 Pa ≈ 133.322368 Pa). It is widely utilized in vacuum metallurgy, mass spectrometry, and semiconductor manufacturing."
  },
  relationship: "Because 1 bar equals exactly 100,000 Pa and 1 Torr equals 101,325 / 760 Pa (approx. 133.3224 Pa), 1 bar equals approximately 750.061683 Torr. Conversely, 1 Torr equals approximately 0.001333224 bar (1.333224 mbar).",
  relationshipTitle: "Bar to Torr Physical Benchmarks",
  relationshipItems: [
    { label: "1 µbar (10⁻⁶ bar)", value: "0.00075 Torr (Rough vacuum boundary)" },
    { label: "1 mbar (0.001 bar)", value: "0.75006 Torr (Laboratory foreline vacuum)" },
    { label: "0.05 bar", value: "37.503 Torr (Freeze-drying drying chamber)" },
    { label: "0.50 bar", value: "375.031 Torr (High-altitude cabin equivalent)" },
    { label: "1.00 bar", value: "750.062 Torr (Standard metric barometric baseline)" },
    { label: "1.01325 bar", value: "760.000 Torr (Standard atmosphere at sea level)" },
    { label: "2.50 bar", value: "1,875.154 Torr (Passenger car tire gauge pressure equivalent)" },
    { label: "10.00 bar", value: "7,500.617 Torr (Industrial pneumatic pipeline pressure)" }
  ],
  formula: {
    text: "Multiply the pressure in bar by 750.061683 to find the equivalent pressure in Torr.",
    math: "\\text{Torr} = \\text{bar} \\times 750.061683",
    subtext: "To convert Torr back to bar: divide by 750.061683 (or multiply by 0.001333224)."
  },
  formulaTitle: "Bar to Torr Mathematical Formula",
  practicalTip: {
    title: "The Three-Quarter Scaling Rule",
    text: "For quick estimations on the job, remember that 1 mbar is roughly 0.75 Torr (3/4 of a Torr), and 1 bar is roughly 750 Torr. Multiplying a bar value by 750 provides an answer within 0.008% of the exact figure, sufficient for rough vacuum checks."
  },
  expertNote: {
    title: "Torr vs. Millimeter of Mercury Distinction",
    text: "While Torr and conventional mmHg are often treated as identical in casual discussions, modern standards distinguish them. One Torr is mathematically defined as exactly 101,325 / 760 Pa, whereas 1 mmHg is based on the hydrostatic pressure of mercury under standard gravity (133.322387 Pa). The difference is less than 0.000014%, but precision vacuum calibration protocols require strictly using the Torr definition."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Vacuum Chamber Evacuation",
        subtitle: "A vacuum furnace pump draws the chamber pressure down from 1.00 bar to 0.0025 bar. Express this target pressure in Torr.",
        steps: [
          "Identify the starting pressure: 0.0025 bar.",
          "Apply the conversion formula: Torr = bar × 750.061683.",
          "Calculate: 0.0025 × 750.061683 = 1.87515 Torr.",
          "Round to significant digits: 0.0025 bar equals 1.875 Torr."
        ]
      },
      {
        title: "Example 2: Industrial Gas Cylinder Regulator",
        subtitle: "A laboratory gas regulator delivers specialty argon at 1.40 bar absolute pressure. Calculate this pressure in Torr.",
        steps: [
          "Identify the delivery pressure: 1.40 bar.",
          "Apply the conversion formula: Torr = 1.40 × 750.061683.",
          "Calculate: 1.40 × 750.061683 = 1,050.086 Torr.",
          "Round appropriately: 1.40 bar equals 1,050.09 Torr."
        ]
      },
      {
        title: "Example 3: Chemical Distillation Column",
        subtitle: "A reduced-pressure distillation process operates at 0.12 bar to prevent thermal decomposition of an organic compound. Find the pressure in Torr.",
        steps: [
          "Identify the vacuum pressure: 0.12 bar.",
          "Calculate: 0.12 × 750.061683 = 90.0074 Torr.",
          "State final value: 0.12 bar equals 90.01 Torr."
        ]
      }
    ]
  },
  table: {
    title: "Bar to Torr Conversion Lookup Table",
    headers: ["Bar (bar)", "Torr (Torr)", "Millibar (mbar)", "Kilopascals (kPa)", "Operating Environment"],
    rows: [
      { fromVal: "0.0001 bar", toVal: "0.075 Torr", extra: "0.1 mbar", extra2: "0.01 kPa", extra3: "Mechanical backing pump baseline" },
      { fromVal: "0.001 bar", toVal: "0.750 Torr", extra: "1 mbar", extra2: "0.1 kPa", extra3: "Chemical rotary evaporator" },
      { fromVal: "0.01 bar", toVal: "7.501 Torr", extra: "10 mbar", extra2: "1.0 kPa", extra3: "Industrial freeze drying" },
      { fromVal: "0.05 bar", toVal: "37.503 Torr", extra: "50 mbar", extra2: "5.0 kPa", extra3: "Vacuum packaging equipment" },
      { fromVal: "0.1 bar", toVal: "75.006 Torr", extra: "100 mbar", extra2: "10.0 kPa", extra3: "Low-pressure chemical vapor deposition" },
      { fromVal: "0.2 bar", toVal: "150.012 Torr", extra: "200 mbar", extra2: "20.0 kPa", extra3: "High-altitude simulation tank" },
      { fromVal: "0.5 bar", toVal: "375.031 Torr", extra: "500 mbar", extra2: "50.0 kPa", extra3: "Half-atmosphere vacuum level" },
      { fromVal: "0.8 bar", toVal: "600.049 Torr", extra: "800 mbar", extra2: "80.0 kPa", extra3: "Mountain weather station pressure" },
      { fromVal: "1.0 bar", toVal: "750.062 Torr", extra: "1,000 mbar", extra2: "100.0 kPa", extra3: "Standard metric atmospheric pressure" },
      { fromVal: "1.01325 bar", toVal: "760.000 Torr", extra: "1,013.25 mbar", extra2: "101.325 kPa", extra3: "Standard 1 atm sea-level air" },
      { fromVal: "1.5 bar", toVal: "1,125.09 Torr", extra: "1,500 mbar", extra2: "150.0 kPa", extra3: "Commercial autoclave cycle" },
      { fromVal: "2.0 bar", toVal: "1,500.12 Torr", extra: "2,000 mbar", extra2: "200.0 kPa", extra3: "Municipal water distribution line" }
    ]
  },
  applications: {
    title: "Engineering & Scientific Applications",
    items: [
      {
        title: "Vacuum Metallurgy & Heat Treatment",
        text: "Specialty titanium and nickel alloy furnaces require controlled atmospheres to prevent oxidation. Vacuum sensors calibrated in Torr monitor evacuation from initial ambient levels measured in bar."
      },
      {
        title: "Semiconductor Thin-Film Deposition",
        text: "Sputtering and chemical vapor deposition chambers transition between atmospheric purging (measured in bar) and high-vacuum processing steps recorded in millitorr and Torr."
      },
      {
        title: "Pharmaceutical Lyophilization",
        text: "Freeze-drying vaccines and biologics requires sublimating ice under reduced pressure. Operators track secondary drying vacuum in Torr while condenser coolant circuits operate in bar."
      },
      {
        title: "Mass Spectrometry Instrumentation",
        text: "Analytical spectrometers operate ion sources at atmospheric pressure (roughly 1 bar) while collision cells and detectors function below 10⁻³ Torr, demanding precise cross-scale conversion."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing gauge pressure (barg) with absolute pressure (bara); vacuum measurements in Torr are almost always absolute.",
      "Assuming 1 bar equals 760 Torr; 760 Torr is exactly 1 atmosphere (1.01325 bar), whereas 1 bar equals 750.062 Torr.",
      "Overlooking temperature corrections when using raw liquid mercury column readings instead of modern electronic capacitance manometers.",
      "Rounding the conversion factor to 750 too early during multi-stage vacuum calculation workflows."
    ]
  },
  faqs: [
      {
        question: "How many Torr are in 1 bar?",
        answer: "There are approximately 750.061683 Torr in 1 bar. This factor derives directly from the definition of 1 bar (100,000 Pascals) divided by the definition of 1 Torr (101,325 / 760 Pascals)."
      },
      {
        question: "Why is 1 bar not exactly equal to 760 Torr?",
        answer: "The value 760 Torr corresponds by definition to one standard atmosphere (101,325 Pa). Because 1 bar is defined as exactly 100,000 Pa, it represents about 98.69% of a standard atmosphere, yielding roughly 750.062 Torr."
      },
      {
        question: "What is the simplest formula to convert bar to Torr?",
        answer: "The exact formula is <strong>Torr = bar × 750.061683</strong>. For rapid mental calculations, multiplying bar by 750 yields an estimate accurate within 0.008%."
      },
      {
        question: "Is Torr identical to millimeters of mercury (mmHg)?",
        answer: "In practical applications they are nearly identical, but metrologically they differ slightly. One Torr is exactly 101,325 / 760 Pa, whereas 1 mmHg is based on mercury density at 0 °C (133.322387 Pa). The discrepancy is less than 0.000014%."
      },
      {
        question: "How do I convert Torr back to bar?",
        answer: "Divide the pressure value in Torr by 750.061683, or multiply by 0.001333224. For example, 760 Torr divided by 750.061683 equals 1.01325 bar."
      },
      {
        question: "What does 0 bar absolute mean in Torr?",
        answer: "Zero bar absolute corresponds to 0 Torr, representing a complete, perfect vacuum where no molecular pressure is exerted on the container walls."
      },
      {
        question: "Why do vacuum gauges use Torr instead of bar?",
        answer: "Historically, vacuum pumps and manometers measured mercury column displacement directly. Torr provides convenient whole numbers for moderate and high vacuum regimes without requiring negative exponents or excessive decimals."
      },
      {
        question: "What is 1 millibar in Torr?",
        answer: "One millibar (0.001 bar) equals approximately 0.750062 Torr. Technicians frequently approximate 1 mbar as 3/4 of a Torr for quick diagnostics."
      }
    ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th Edition)",
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics",
    "American Vacuum Society (AVS): Recommended Vacuum Terminology Standards"
  ]
};
