import { CustomArticleData } from "./types";

export const millibarToAtmosphere: CustomArticleData = {
  fromUnitId: "millibar",
  toUnitId: "atmosphere",
  seoTitle: "Millibar to Atmosphere Converter (mbar to atm)",
  metaDescription: "Convert millibar to standard atmospheres (mbar to atm) with exact physical factors. Explore formulas, aviation and diving examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/millibar-to-atmosphere",
  h1: "Millibar to Atmosphere Converter",
  introduction: [
    "Converting millibar to standard atmospheres (atm) connects regional barometric weather monitoring and flight instrument calibrations with thermodynamics, deep-sea diving physiology, chemical reaction engineering, and planetary science. While the millibar is widely used to report barometric trends and slight pressure changes, the standard atmosphere provides a benchmark anchored to Earth's mean sea-level pressure.",
    "The standard atmosphere (symbol: atm) was established by the 10th General Conference on Weights and Measures (CGPM) in 1954 as exactly 101,325 Pascals. Because one millibar equals exactly 100 Pascals, one standard atmosphere corresponds to exactly 1,013.25 millibars. Dividing 1 by 1,013.25 demonstrates that one millibar equals approximately 0.0009869233 atm. To convert millibars to atmospheres, divide the value by 1,013.25 (or multiply by 0.0009869233).",
    "This technical guide details the mathematical relationship, provides step-by-step calculation examples for hyperbaric medicine and sub-surface diving, presents a comprehensive conversion table, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert millibar to standard atmospheres (atm), divide the millibar value by 1,013.25 (or multiply by 0.0009869233). For example, 1,013.25 mbar equals exactly 1 atm, and 2,026.5 mbar equals exactly 2 atm.",
    formulaDisplay: "atm = mbar ÷ 1,013.25",
    subtext: "1 atm = 1,013.25 mbar (exact) | 1 mbar = 0.0009869233 atm | Standard sea level baseline"
  },
  aboutSourceUnit: {
    title: "Understanding the Millibar (mbar)",
    text: "The millibar (symbol: mbar) is a metric unit of pressure equal to 1/1,000 of a bar (100 Pascals or 1 hectopascal). Widely used across global meteorology, aviation altimetry, and atmospheric science, it provides convenient values for synoptic weather charts."
  },
  aboutTargetUnit: {
    title: "Understanding the Standard Atmosphere (atm)",
    text: "The standard atmosphere (symbol: atm) is an internationally recognized reference unit defined by the CGPM in 1954 as exactly 101,325 Pascals (1,013.25 mbar or 760 Torr). It serves as the primary environmental baseline for chemical equilibrium constants, physical property tables, and diving depth calculations."
  },
  relationship: "The relationship between millibar and standard atmosphere is defined by international treaty: 1 standard atmosphere equals exactly 1,013.25 millibars (1 atm = 1,013.25 mbar). Conversely, 1 millibar equals approximately 0.000986923267 atm.",
  relationshipTitle: "Millibar to Atmosphere Scale Benchmarks",
  relationshipItems: [
    { label: "1 mbar", value: "0.000987 atm (Base scaling increment)" },
    { label: "500 mbar", value: "0.493462 atm (Mid-troposphere atmospheric pressure)" },
    { label: "870 mbar", value: "0.858623 atm (Extreme low pressure: Typhoon Tip record)" },
    { label: "1,000 mbar", value: "0.986923 atm (1 bar metric milestone)" },
    { label: "1,013.25 mbar", value: "1.000000 atm (Exact standard atmospheric definition)" },
    { label: "2,026.5 mbar", value: "2.000000 atm (Depth of 10 m in sea water)" },
    { label: "3,039.75 mbar", value: "3.000000 atm (Depth of 20 m in sea water)" },
    { label: "10,132.5 mbar", value: "10.00000 atm (Depth of 90 m in sea water)" }
  ],
  formula: {
    text: "Divide the pressure in millibar by 1,013.25 (or multiply by 0.000986923267) to obtain standard atmospheres.",
    math: "\\text{atm} = \\frac{\\text{mbar}}{1\\,013.25} = \\text{mbar} \\times 0.000986923267",
    subtext: "To convert atmospheres to millibar: multiply the atm value by 1,013.25."
  },
  formulaTitle: "Millibar to Atmosphere Conversion Formula",
  practicalTip: {
    title: "The Near-Parity 1.3% Rule",
    text: "One atmosphere is approximately 1,000 millibars (specifically 1,013.25 mbar). Because 1 atm is just 1.325% larger than 1,000 mbar, you can roughly estimate atmospheres by dividing millibars by 1,000 and subtracting 1.3% for quick mental approximations."
  },
  expertNote: {
    title: "Standard Atmosphere vs. Technical Atmosphere",
    text: "Do not confuse the standard atmosphere (atm = 101,325 Pa = 1,013.25 mbar) with the older technical atmosphere (at = 1 kgf/cm² = 98,066.5 Pa = 980.665 mbar). The standard atmosphere is the only definition recognized in international chemistry and thermodynamic tables."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: SCUBA Diving Ambient Pressure",
        subtitle: "A diver at a depth of 20 meters in the ocean experiences an ambient hydrostatic pressure of 3,040 mbar absolute. Convert this to standard atmospheres.",
        steps: [
          "State starting pressure: 3,040 mbar.",
          "Apply conversion: atm = mbar ÷ 1,013.25.",
          "Calculate: 3,040 ÷ 1,013.25 = 2.99975 atm.",
          "Conclusion: 3,040 mbar equals approximately 3.00 atm (1 atm air + 2 atm water column)."
        ]
      },
      {
        title: "Example 2: Commercial Airliner Cabin Pressurization",
        subtitle: "During cruise at 38,000 feet, an aircraft cabin altitude controller maintains interior pressure at 750.0 mbar. Find the cabin pressure in atmospheres.",
        steps: [
          "Record pressure: 750.0 mbar.",
          "Calculate: 750.0 ÷ 1,013.25 = 0.74019 atm.",
          "Result: 750.0 mbar corresponds to approximately 0.740 atm."
        ]
      },
      {
        title: "Example 3: Chemical Synthesis Reactor",
        subtitle: "A hydrogenation reactor operates under a blanket pressure of 15,200 mbar. Express this in standard atmospheres.",
        steps: [
          "State value: 15,200 mbar.",
          "Divide: 15,200 ÷ 1,013.25 = 15.0012 atm.",
          "Result: 15,200 mbar equals 15.00 atm."
        ]
      }
    ]
  },
  table: {
    title: "Millibar to Atmosphere Conversion Table",
    headers: ["Millibar (mbar)", "Atmospheres (atm)", "Bar (bar)", "Kilopascals (kPa)", "Environmental Benchmark"],
    rows: [
      { fromVal: "100 mbar", toVal: "0.0987 atm", extra: "0.100 bar", extra2: "10.0 kPa", extra3: "Upper stratosphere boundary" },
      { fromVal: "250 mbar", toVal: "0.2467 atm", extra: "0.250 bar", extra2: "25.0 kPa", extra3: "Cruising altitude ambient air (10.5 km)" },
      { fromVal: "500 mbar", toVal: "0.4935 atm", extra: "0.500 bar", extra2: "50.0 kPa", extra3: "Summit of Mount Everest (approx. 8,848 m)" },
      { fromVal: "870 mbar", toVal: "0.8586 atm", extra: "0.870 bar", extra2: "87.0 kPa", extra3: "Lowest recorded sea-level hurricane pressure" },
      { fromVal: "950 mbar", toVal: "0.9376 atm", extra: "0.950 bar", extra2: "95.0 kPa", extra3: "Severe low-pressure storm center" },
      { fromVal: "1,000 mbar", toVal: "0.9869 atm", extra: "1.000 bar", extra2: "100.0 kPa", extra3: "1 bar exact milestone" },
      { fromVal: "1,013.25 mbar", toVal: "1.0000 atm", extra: "1.013 bar", extra2: "101.325 kPa", extra3: "Standard sea-level atmosphere" },
      { fromVal: "1,050 mbar", toVal: "1.0363 atm", extra: "1.050 bar", extra2: "105.0 kPa", extra3: "Intense Siberian winter high" },
      { fromVal: "2,026.5 mbar", toVal: "2.0000 atm", extra: "2.027 bar", extra2: "202.65 kPa", extra3: "10 m underwater dive depth" },
      { fromVal: "3,039.75 mbar", toVal: "3.0000 atm", extra: "3.040 bar", extra2: "303.98 kPa", extra3: "20 m underwater dive depth" },
      { fromVal: "5,066.25 mbar", toVal: "5.0000 atm", extra: "5.066 bar", extra2: "506.63 kPa", extra3: "40 m deep recreational dive limit" },
      { fromVal: "10,132.5 mbar", toVal: "10.0000 atm", extra: "10.133 bar", extra2: "1,013.25 kPa", extra3: "90 m technical trimix depth" }
    ]
  },
  applications: {
    title: "Practical & Scientific Applications",
    items: [
      {
        title: "Diving Physiology & Decompression Planning",
        text: "Dive computers track tissue nitrogen saturation using partial pressures scaled in atmospheres, calculating depth exposure from hydrostatic ambient pressure measured in millibars."
      },
      {
        title: "Chemical Thermodynamics & Gas Laws",
        text: "Standard thermodynamic values (such as standard enthalpy of formation) assume an ideal standard atmosphere of 1 atm (1,013.25 mbar)."
      },
      {
        title: "Aviation & Hypobaric Training",
        text: "Flight physiology simulators test pilots at reduced atmospheric pressures (e.g., 0.5 atm at 500 mbar) to assess hypoxia awareness and emergency oxygen mask deployment."
      },
      {
        title: "Planetary Science & Comparative Climatology",
        text: "Astronomers compare planetary surface pressures by relating Martian surface air (6 to 10 mbar, or ~0.007 atm) and Venusian atmosphere (92 bar, or ~91 atm) against Earth's 1 atm baseline."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes",
    items: [
      "Dividing by 1,000 instead of 1,013.25, introducing an error of 1.325%.",
      "Confusing standard atmospheres (atm) with bar (1 atm = 1.01325 bar, not 1.000 bar).",
      "Treating technical atmosphere (at = 980.665 mbar) as standard atmosphere (atm = 1,013.25 mbar).",
      "Forgetting to add surface atmospheric pressure (1 atm) when calculating absolute underwater diving pressures."
    ]
  },
  faqs: [
      {
        question: "How many atmospheres are in 1 millibar?",
        answer: "There are approximately 0.0009869233 atmospheres (atm) in 1 millibar. By definition, 1 atm equals exactly 1,013.25 millibars."
      },
      {
        question: "How do you convert millibar to atmosphere?",
        answer: "To convert millibar to atmosphere, divide the millibar value by 1,013.25 (or multiply by 0.0009869233): <strong>atm = mbar ÷ 1,013.25</strong>. For example, 2,026.5 mbar equals 2 atm."
      },
      {
        question: "How do you convert atmosphere to millibar?",
        answer: "Multiply the atmosphere value by 1,013.25: <strong>mbar = atm × 1,013.25</strong>. For example, 1.5 atm equals 1,519.875 mbar."
      },
      {
        question: "What is 1,000 mbar in atmospheres?",
        answer: "One thousand millibars (1 bar) equals approximately 0.986923 atm (about 1.3% less than one standard atmosphere)."
      },
      {
        question: "What is standard sea-level atmospheric pressure?",
        answer: "Standard sea-level atmospheric pressure is defined as exactly 1 atmosphere, which equals exactly 1,013.25 millibars (or 101,325 Pascals / 760 Torr)."
      },
      {
        question: "Why is 1 atmosphere equal to 1,013.25 mbar?",
        answer: "In 1954, the 10th CGPM established standard atmosphere as exactly 101,325 Pascals based on historical mean sea-level barometer records. Because 1 mbar = 100 Pa, 101,325 ÷ 100 = 1,013.25 mbar."
      },
      {
        question: "How deep underwater is 2 atmospheres?",
        answer: "At approximately 10 meters (33 feet) of seawater depth, the water column adds 1 atm of hydrostatic pressure to the 1 atm of air above, totaling 2 atm (2,026.5 mbar) absolute pressure."
      },
      {
        question: "What is the difference between bar and atm?",
        answer: "One bar is defined as exactly 100,000 Pa (1,000 mbar), whereas 1 atm is defined as exactly 101,325 Pa (1,013.25 mbar). One atm is about 1.325% larger than 1 bar."
      }
    ],
  references: [
    "BIPM: Resolution 4 of the 10th CGPM (1954) — Definition of the Standard Atmosphere",
    "ISO 80000-4: Quantities and Units — Mechanics",
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "U.S. Navy Diving Manual (SS521-AG-PRO-010)"
  ]
};
