import { CustomArticleData } from "./types";

export const millibarToTorr: CustomArticleData = {
  fromUnitId: "millibar",
  toUnitId: "torr",
  seoTitle: "Millibar to Torr Converter (mbar to Torr)",
  metaDescription: "Convert millibar to Torr (mbar to Torr) with precision vacuum engineering formulas, step-by-step examples, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/millibar-to-torr",
  h1: "Millibar to Torr Converter",
  introduction: [
    "Converting millibar to Torr is a fundamental daily calculation in vacuum technology, thin-film deposition, physical chemistry, vacuum packaging, and leak detection. While European vacuum pump manufacturers, freeze-drying specs, and meteorological systems specify pressures in millibars (mbar), vacuum gauges in semiconductor cleanrooms and mass spectrometers commonly display pressures in Torr.",
    "One millibar is defined as exactly 100 Pascals. One standard atmosphere is defined as exactly 101,325 Pascals and corresponds to 760 Torr. Therefore, one Torr equals exactly 101,325 / 760 Pascals (approx. 133.322368 Pa). Calculating 100 ÷ (101,325 / 760) shows that one millibar equals exactly 76,000 / 101,325 Torr, or approximately 0.75006168 Torr (roughly 3/4 of a Torr). To convert millibars to Torr, multiply the value by 0.75006168.",
    "This guide explains the mathematical relationship, provides step-by-step worked examples across vacuum processing and chemical distillation, presents a comprehensive conversion table, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert millibar to Torr, multiply the pressure value in millibar by 0.75006168 (or divide by 1.3332237). For example, 1 mbar equals approximately 0.750 Torr, and standard atmospheric pressure of 1,013.25 mbar equals exactly 760 Torr.",
    formulaDisplay: "Torr = mbar × 0.75006168",
    subtext: "1 mbar ≈ 0.750062 Torr (approx 3/4 Torr) | 1 Torr ≈ 1.333224 mbar (approx 4/3 mbar)"
  },
  aboutSourceUnit: {
    title: "Understanding the Millibar (mbar)",
    text: "The millibar (symbol: mbar) is a metric unit of pressure equal to 1/1,000 of a bar (100 Pascals). Commonly used on European vacuum pump performance curves, roughing line monitors, and weather barometers, it is identical in magnitude to the hectopascal (hPa)."
  },
  aboutTargetUnit: {
    title: "Understanding the Torr (Torr)",
    text: "The Torr is a non-SI unit of pressure named after Italian physicist Evangelista Torricelli. Internationally defined as exactly 1/760 of a standard atmosphere (101,325 / 760 Pa ≈ 133.322368 Pa), it is the primary vacuum unit in North American semiconductor fabrication, vacuum metallurgy, and electron microscopy."
  },
  relationship: "One millibar equals 100 Pascals, while 1 Torr equals approximately 133.322368 Pascals. Therefore, 1 millibar equals approximately 0.75006168 Torr (about 3/4 of a Torr), and 1 Torr equals approximately 1.33322368 millibars (about 4/3 of a millibar).",
  relationshipTitle: "Millibar to Torr Vacuum Benchmarks",
  relationshipItems: [
    { label: "0.001 mbar (10⁻³ mbar)", value: "0.00075 Torr (Rough-to-medium vacuum boundary)" },
    { label: "0.01 mbar", value: "0.00750 Torr (Foreline vacuum pump level)" },
    { label: "1 mbar", value: "0.75006 Torr (Laboratory rotary vane pump limit)" },
    { label: "10 mbar", value: "7.5006 Torr (Industrial vacuum packaging chamber)" },
    { label: "100 mbar", value: "75.006 Torr (Low-pressure chemical vapor deposition)" },
    { label: "500 mbar", value: "375.031 Torr (Half an atmosphere)" },
    { label: "1,000 mbar", value: "750.062 Torr (1 bar metric milestone)" },
    { label: "1,013.25 mbar", value: "760.000 Torr (Standard atmospheric sea level)" }
  ],
  formula: {
    text: "Multiply the pressure in millibar by 0.75006168 to find equivalent Torr.",
    math: "\\text{Torr} = \\text{mbar} \\times 0.75006168 = \\frac{\\text{mbar} \\times 76\\,000}{101\\,325}",
    subtext: "To convert Torr to millibar: divide by 0.75006168 (or multiply by 1.33322368)."
  },
  formulaTitle: "Millibar to Torr Conversion Formula",
  practicalTip: {
    title: "The 3/4 and 4/3 Mental Shortcut",
    text: "To quickly convert mbar to Torr mentally, multiply by 3 and divide by 4 (0.75). For example, 80 mbar × 0.75 = 60 Torr (exact is 60.005 Torr). To convert Torr to mbar, multiply by 4 and divide by 3 (1.333). This mental rule is accurate to within 0.008%."
  },
  expertNote: {
    title: "Vacuum Pump Pumping Speed Curves",
    text: "European vacuum equipment catalogs (e.g. Leybold, Pfeiffer) publish pumping speed curves (S vs. P) in mbar and m³/h, whereas American process recipes specify chamber pressures in Torr and flow rates in sccm. Applying 1 mbar ≈ 0.75 Torr provides instant alignment during system design."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Rotary Vane Vacuum Pump Rating",
        subtitle: "A two-stage rotary vane vacuum pump achieves an ultimate partial pressure of 0.0020 mbar. Express this base pressure in Torr.",
        steps: [
          "State starting pressure: 0.0020 mbar.",
          "Apply conversion: Torr = mbar × 0.75006168.",
          "Calculate: 0.0020 × 0.75006168 = 0.00150012 Torr.",
          "Result: 0.0020 mbar corresponds to 1.50 × 10⁻³ Torr (1.50 millitorr)."
        ]
      },
      {
        title: "Example 2: Vacuum Distillation Setup",
        subtitle: "A pharmaceutical synthesis protocol specifies pulling vacuum down to 15.0 mbar. Find this target in Torr for an American vacuum controller.",
        steps: [
          "Record pressure: 15.0 mbar.",
          "Calculate: 15.0 × 0.75006168 = 11.2509 Torr.",
          "Conclusion: 15.0 mbar equals 11.25 Torr."
        ]
      },
      {
        title: "Example 3: Atmospheric Air Standardization",
        subtitle: "Convert standard atmospheric pressure of 1,013.25 mbar to Torr.",
        steps: [
          "State value: 1,013.25 mbar.",
          "Multiply: 1,013.25 × (76,000 / 101,325) = 760.000 Torr.",
          "Result: 1,013.25 mbar equals exactly 760 Torr."
        ]
      }
    ]
  },
  table: {
    title: "Millibar to Torr Conversion Table",
    headers: ["Millibar (mbar)", "Torr (Torr)", "Pascal (Pa)", "Kilopascals (kPa)", "Vacuum Level & Application"],
    rows: [
      { fromVal: "0.001 mbar", toVal: "0.00075 Torr", extra: "0.1 Pa", extra2: "0.0001 kPa", extra3: "High-vacuum turbopump crossover" },
      { fromVal: "0.01 mbar", toVal: "0.00750 Torr", extra: "1.0 Pa", extra2: "0.001 kPa", extra3: "Rotary pump ultimate vacuum" },
      { fromVal: "0.1 mbar", toVal: "0.07501 Torr", extra: "10.0 Pa", extra2: "0.01 kPa", extra3: "Freeze-drying sublimation phase" },
      { fromVal: "1.0 mbar", toVal: "0.75006 Torr", extra: "100.0 Pa", extra2: "0.1 kPa", extra3: "Plasma cleaning process chamber" },
      { fromVal: "5.0 mbar", toVal: "3.7503 Torr", extra: "500.0 Pa", extra2: "0.5 kPa", extra3: "Vacuum packaging sealing bar" },
      { fromVal: "10 mbar", toVal: "7.5006 Torr", extra: "1,000 Pa", extra2: "1.0 kPa", extra3: "Rotary evaporator solvent recovery" },
      { fromVal: "50 mbar", toVal: "37.503 Torr", extra: "5,000 Pa", extra2: "5.0 kPa", extra3: "Vacuum degassing of casting resin" },
      { fromVal: "100 mbar", toVal: "75.006 Torr", extra: "10,000 Pa", extra2: "10.0 kPa", extra3: "Coarse vacuum hold test" },
      { fromVal: "200 mbar", toVal: "150.012 Torr", extra: "20,000 Pa", extra2: "20.0 kPa", extra3: "High-altitude flight simulation" },
      { fromVal: "500 mbar", toVal: "375.031 Torr", extra: "50,000 Pa", extra2: "50.0 kPa", extra3: "Half-atmosphere pressure boundary" },
      { fromVal: "1,000 mbar", toVal: "750.062 Torr", extra: "100,000 Pa", extra2: "100.0 kPa", extra3: "1 bar metric baseline" },
      { fromVal: "1,013.25 mbar", toVal: "760.000 Torr", extra: "101,325 Pa", extra2: "101.325 kPa", extra3: "Standard sea-level atmosphere" }
    ]
  },
  applications: {
    title: "Practical Vacuum Applications",
    items: [
      {
        title: "Semiconductor Wafer Processing",
        text: "Etch and deposition tools transition between roughing vacuum (measured in mbar) and process plasma chambers held at controlled pressures measured in millitorr and Torr."
      },
      {
        title: "Pharmaceutical Lyophilization (Freeze Drying)",
        text: "Vial sublimation drying cycles require controlling vacuum between 0.05 and 0.5 mbar (approx. 0.038 to 0.38 Torr) to prevent melt-back of sensitive biological drugs."
      },
      {
        title: "Helium Mass Spectrometer Leak Detection",
        text: "Sniffer and hard-vacuum helium leak detectors measure background helium partial pressures where gauge calibrations convert between mbar·L/s and Torr·L/s leak rates."
      },
      {
        title: "Chemical Rotary Evaporators",
        text: "Distillation chemists lower boiling points of sensitive solvents by adjusting vacuum controller setpoints expressed in mbar or Torr."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls",
    items: [
      "Inverting the conversion: multiplying by 1.333 instead of 0.750 when converting from mbar to Torr.",
      "Assuming 1 mbar = 1 Torr (actual ratio is 1 mbar ≈ 0.75 Torr, a 25% discrepancy).",
      "Treating 1,000 mbar as 760 Torr (1,000 mbar is 750.062 Torr; 760 Torr is 1,013.25 mbar).",
      "Confusing millitorr (mTorr, 10⁻³ Torr) with millibar (mbar)."
    ]
  },
  faqs: [
      {
        question: "How many Torr are in 1 millibar?",
        answer: "There are approximately 0.75006168 Torr in 1 millibar (roughly 3/4 of a Torr). Conversely, 1 Torr equals approximately 1.33322368 millibars (roughly 4/3 of a millibar)."
      },
      {
        question: "How do you convert millibar to Torr?",
        answer: "To convert millibar to Torr, multiply the millibar value by 0.75006168: <strong>Torr = mbar × 0.75006168</strong>. For example, 100 mbar equals approximately 75.006 Torr."
      },
      {
        question: "How do you convert Torr to millibar?",
        answer: "Multiply the Torr value by 1.33322368 (or divide by 0.75006168): <strong>mbar = Torr × 1.33322368</strong>. For instance, 760 Torr equals exactly 1,013.25 mbar."
      },
      {
        question: "Is 1 mbar larger or smaller than 1 Torr?",
        answer: "One mbar is smaller than 1 Torr. Because 1 mbar equals 0.75 Torr, it takes approximately 1.333 mbar to equal 1 Torr."
      },
      {
        question: "What is standard atmospheric pressure in mbar and Torr?",
        answer: "Standard sea-level atmospheric pressure is exactly 1,013.25 mbar, which equals exactly 760 Torr."
      },
      {
        question: "What is 1,000 mbar in Torr?",
        answer: "One thousand millibars (1 bar) equals approximately 750.062 Torr."
      },
      {
        question: "Why do vacuum technicians use Torr?",
        answer: "Torr is deeply rooted in vacuum physics and mercury barometry. It provides whole numbers for intermediate vacuum levels (e.g. 10 to 100 Torr) and straightforward powers of ten for high vacuum (10⁻⁶ Torr)."
      },
      {
        question: "What is the difference between Torr and millitorr?",
        answer: "One millitorr (mTorr) is one-thousandth of a Torr (0.001 Torr, also called a micron of mercury). One millibar equals approximately 750.06 millitorr."
      }
    ],
  references: [
    "American Vacuum Society (AVS): Vacuum Technology Standards",
    "ISO 80000-4: Quantities and Units — Mechanics",
    "BIPM: The International System of Units (SI Brochure, 9th Edition)",
    "NIST Special Publication 811: Guide for the Use of the International System of Units"
  ]
};
