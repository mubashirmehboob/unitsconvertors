import { CustomArticleData } from "./types";

export const ampereHourToMegacoulomb: CustomArticleData = {
  fromUnitId: "ampere-hour",
  toUnitId: "megacoulomb",
  seoTitle: "Ampere-hour to Megacoulomb Converter (Ah to MC)",
  metaDescription: "Convert Ampere-hours to Megacoulombs (Ah to MC) with exact SI electric charge formulas, worked grid-scale storage calculations, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/electric-charge/ampere-hour-to-megacoulomb",
  h1: "Ampere-hour to Megacoulomb Converter",
  introduction: [
    "Megawatt-scale battery energy storage systems (BESS), electrified heavy rail transit networks, and industrial chlor-alkali electrolysis facilities routinely process hundreds of thousands of Ampere-hours of electrical charge.",
    "The Ampere-hour (Ah) is the standard commercial measure of battery charge capacity (1 Ah = 3,600 Coulombs). The Megacoulomb (MC) is the decimal multiple of the SI coherent derived unit of electric charge, equal to one million coulombs (10⁶ C). Expressing utility-scale battery energy in Megacoulombs enables direct integration into SI-based thermodynamic and electrochemical engineering equations.",
    "This converter provides exact mathematical conversions between Ampere-hours and Megacoulombs, worked large-scale industrial calculations, reference lookup tables, and grid storage technical guidelines."
  ],
  quickAnswer: {
    text: "To convert Ampere-hours to Megacoulombs, multiply the capacity in Ampere-hours by 0.0036 (or multiply by 3,600 and divide by 1,000,000). For example, a 1,000 Ah utility battery bank equals exactly 3.6 Megacoulombs (MC), and 277.78 Ah equals 1.0 MC.",
    formulaDisplay: "MC = Ah × 0.0036",
    subtext: "1 Ampere-hour is equal to exactly 0.0036 Megacoulomb (3.6 × 10⁻³ MC)."
  },
  aboutSourceUnit: {
    title: "Understanding Ampere-hours (Ah)",
    text: "An Ampere-hour (symbol: Ah or A·h) is a commercial unit of electric charge representing a steady current of one ampere flowing continuously for one full hour (3,600 seconds). Equal to exactly 3,600 coulombs, ampere-hours quantify charge storage across electric vehicles, telecom backup systems, and commercial battery storage modules."
  },
  aboutTargetUnit: {
    title: "What is a Megacoulomb (MC)?",
    text: "A Megacoulomb (symbol: MC) is a decimal multiple of the coulomb corresponding to one million coulombs (10⁶ C). Equal to 1,000 kilocoulombs or approximately 277.778 Ampere-hours, the megacoulomb provides a clean, prefix-scaled SI metric for describing massive quantities of electric charge in utility grid storage, aluminum electrowinning, and plasma physics."
  },
  relationship: "The relationship between ampere-hours and megacoulombs is derived from the conversion of time and the mega- prefix: 1 Ah = 3,600 C = 3,600 / 1,000,000 MC = 0.0036 MC. Conversely, 1 MC = 1,000,000 / 3,600 Ah ≈ 277.7778 Ah.",
  relationshipTitle: "Ampere-hour to Megacoulomb Common Benchmark Values",
  relationshipItems: [
    { label: "100 Ah", value: "0.36 MC (Solar battery bank charge)" },
    { label: "277.78 Ah", value: "1.00 MC (Base megacoulomb equivalent)" },
    { label: "1,000 Ah", value: "3.60 MC (Commercial backup telecom plant)" },
    { label: "5,000 Ah", value: "18.00 MC (Industrial UPS energy storage bank)" },
    { label: "10,000 Ah", value: "36.00 MC (Utility-scale BESS container module)" }
  ],
  formula: {
    text: "Multiply the capacity in Ampere-hours by 0.0036 (or multiply by 3,600 and divide by 1,000,000) to find the equivalent charge in Megacoulombs.",
    math: "Q_{(MC)} = Q_{(Ah)} \\times 0.0036 = \\frac{Q_{(Ah)} \\times 3600}{10^6}",
    subtext: "To convert megacoulombs back to ampere-hours, divide the megacoulomb value by 0.0036 (or multiply by ~277.778)."
  },
  formulaTitle: "Ampere-hour to Megacoulomb Mathematical Formula",
  practicalTip: {
    title: "The 3.6 ÷ 1,000 Mental Trick",
    text: "To convert Ah to MC quickly: Multiply the Ah value by 3.6 to get Kilocoulombs (kC), then divide by 1,000 to get Megacoulombs (MC). For example, 500 Ah × 3.6 = 1,800 kC = 1.8 MC."
  },
  expertNote: {
    title: "Industrial Electrolysis Calculations",
    text: "Electrochemical engineers sizing heavy chemical smelting lines use Megacoulombs to directly calculate product yields using Faraday's constant (1 MC ≈ 10.364 Faradays), bypassing intermediate time-based unit conversions."
  },
  examples: {
    title: "Step-by-Step Ah to MC Worked Calculations",
    items: [
      {
        title: "Example 1: Utility BESS Container Module",
        subtitle: "A 2 MWh grid-support battery storage container delivers 2,500 Ah during a peak load event. Convert this charge to Megacoulombs.",
        steps: [
          "Identify the capacity in Ampere-hours: Q = 2,500 Ah.",
          "Apply conversion formula: Q_(MC) = 2,500 × 0.0036.",
          "Perform calculation: 2,500 × 0.0036 = 9.0.",
          "Result: 2,500 Ah equals exactly 9.0 Megacoulombs (MC)."
        ]
      },
      {
        title: "Example 2: Heavy Electric Mining Truck Pack",
        subtitle: "A haul truck battery pack is rated at 1,200 Ah. Calculate the total charge capacity in Megacoulombs.",
        steps: [
          "Identify the capacity in Ampere-hours: Q = 1,200 Ah.",
          "Apply conversion formula: Q_(MC) = 1,200 × 0.0036.",
          "Perform calculation: 1,200 × 0.0036 = 4.32.",
          "Result: 1,200 Ah equals exactly 4.32 Megacoulombs (MC)."
        ]
      },
      {
        title: "Example 3: Telecom Central Office DC Plant",
        subtitle: "A central exchange battery plant has a reserve capacity of 4,000 Ah. Convert this capacity to Megacoulombs.",
        steps: [
          "Identify the capacity in Ampere-hours: Q = 4,000 Ah.",
          "Apply conversion formula: Q_(MC) = 4,000 × 0.0036.",
          "Perform calculation: 4,000 × 0.0036 = 14.4.",
          "Result: 4,000 Ah equals exactly 14.4 Megacoulombs (MC)."
        ]
      }
    ]
  },
  table: {
    title: "Ampere-hour to Megacoulomb Conversion Table",
    headers: ["Capacity (Ampere-hours, Ah)", "Charge (Megacoulombs, MC)", "Charge (Kilocoulombs, kC)"],
    rows: [
      { fromVal: "50 Ah", toVal: "0.18 MC", extra: "180 kC" },
      { fromVal: "100 Ah", toVal: "0.36 MC", extra: "360 kC" },
      { fromVal: "250 Ah", toVal: "0.90 MC", extra: "900 kC" },
      { fromVal: "277.78 Ah", toVal: "1.00 MC", extra: "1,000 kC" },
      { fromVal: "500 Ah", toVal: "1.80 MC", extra: "1,800 kC" },
      { fromVal: "1,000 Ah", toVal: "3.60 MC", extra: "3,600 kC" },
      { fromVal: "2,000 Ah", toVal: "7.20 MC", extra: "7,200 kC" },
      { fromVal: "5,000 Ah", toVal: "18.00 MC", extra: "18,000 kC" },
      { fromVal: "10,000 Ah", toVal: "36.00 MC", extra: "36,000 kC" },
      { fromVal: "20,000 Ah", toVal: "72.00 MC", extra: "72,000 kC" },
      { fromVal: "50,000 Ah", toVal: "180.00 MC", extra: "180,000 kC" },
      { fromVal: "100,000 Ah", toVal: "360.00 MC", extra: "360,000 kC" }
    ]
  },
  applications: {
    title: "Real-World Engineering Applications",
    items: [
      {
        title: "Grid-Scale Battery Energy Storage (BESS)",
        text: "System integrators convert multi-megawatt-hour battery strings from Ah into Megacoulombs to model power conversion system (PCS) throughput and thermal losses."
      },
      {
        title: "Industrial Electrowinning & Metal Smelting",
        text: "Copper and aluminum smelters running 24/7 calculate cumulative monthly charge consumption in Megacoulombs to reconcile electrical power billing with metal output."
      },
      {
        title: "Heavy Rail Traction Substations",
        text: "Railway electrification engineers convert train traction load schedules (in kAh) to Megacoulombs to verify catenary feeder thermal ratings."
      },
      {
        title: "Large-Scale Hydrogen Water Electrolyzers",
        text: "MW-scale hydrogen generation plants evaluate stack current efficiency by tracking Megacoulombs delivered versus kilograms of H₂ produced."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Converting 1,000 Ah to MC requires multiplying by 0.0036 (3.6 MC), not dividing into 277,778 MC.",
      "Prefix confusion (M vs. m): Using lowercase 'mC' (millicoulomb = 10⁻³ C) instead of uppercase 'MC' (megacoulomb = 10⁶ C) introduces a 1,000,000,000× error.",
      "Assuming 1 Ah = 1 MC: 1 MC is equal to approximately 277.78 Ah, not 1.0 Ah.",
      "Omitting voltage when calculating MWh: Megacoulombs denote electric charge, not energy. Finding Megawatt-hours (MWh) requires multiplying charge by voltage and converting units."
    ]
  },
  faqs: [
    {
      question: "How many Megacoulombs are in one Ampere-hour?",
      answer: "There are exactly 0.0036 Megacoulombs in one Ampere-hour (1 Ah = 3,600 C = 0.0036 MC = 3.6 × 10⁻³ MC)."
    },
    {
      question: "What is the formula to convert Ah to MC?",
      answer: "The formula is: Charge in MC = Capacity in Ah × 0.0036. For example, 5,000 Ah × 0.0036 = 18.0 MC."
    },
    {
      question: "How many Ampere-hours make up one Megacoulomb?",
      answer: "One Megacoulomb equals approximately 277.78 Ampere-hours (1 MC = 1,000,000 C ÷ 3,600 s ≈ 277.7778 Ah)."
    },
    {
      question: "What is the difference between MC and kC?",
      answer: "A Megacoulomb (MC) is 1,000,000 Coulombs (10⁶ C), whereas a Kilocoulomb (kC) is 1,000 Coulombs (10³ C). One Megacoulomb equals 1,000 Kilocoulombs (1 MC = 1,000 kC)."
    },
    {
      question: "How many Coulombs are in a Megacoulomb?",
      answer: "There are exactly 1,000,000 Coulombs in one Megacoulomb (1 MC = 10⁶ C)."
    },
    {
      question: "Where are Megacoulombs used in modern industry?",
      answer: "Megacoulombs are used in grid-scale battery storage (BESS), industrial chlor-alkali and aluminum electrolysis plants, railway traction power feeds, and particle accelerator facilities."
    },
    {
      question: "How many Faradays of charge are in 1 Megacoulomb?",
      answer: "Because 1 Faraday is approximately 96,485.33 Coulombs, 1 Megacoulomb (1,000,000 C) equals approximately 10.364 Faradays."
    },
    {
      question: "How do I convert Megacoulombs to Megawatt-hours?",
      answer: "To convert Megacoulombs to Megawatt-hours (MWh), multiply charge in MC by pack voltage in Volts (V), then divide by 3,600: MWh = (MC × V) ÷ 3,600."
    }
  ],
  relatedList: [
    { label: "Megacoulomb to Ampere-hour", from: "megacoulomb", to: "ampere-hour" },
    { label: "Ampere-hour to Kilocoulomb", from: "ampere-hour", to: "kilocoulomb" },
    { label: "Ampere-hour to Coulomb", from: "ampere-hour", to: "coulomb" },
    { label: "Coulomb to Megacoulomb", from: "coulomb", to: "megacoulomb" },
    { label: "Ampere-hour to Faraday", from: "ampere-hour", to: "faraday" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition (2019)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "ISO 80000-6 - Quantities and units — Part 6: Electromagnetism",
    "IEC 60050 - International Electrotechnical Vocabulary (IEV)"
  ]
};
