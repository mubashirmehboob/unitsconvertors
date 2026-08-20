import { CustomArticleData } from "./types";

export const milliliterToCubicCentimeter: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "cubic-centimeter",
  seoTitle: "Milliliter to Cubic Centimeter Converter - mL to cm³ (cc)",
  metaDescription: "Convert milliliters to cubic centimeters (mL to cm³ or cc). Discover the exact 1:1 identity, medical syringe standards, engine displacement, and FAQs.",
  h1: "Milliliter to Cubic Centimeter Converter",
  introduction: [
    "In clinical medicine, pharmacology, mechanical engineering, and automotive mechanics, one of the most common questions is how to convert milliliters (mL) to cubic centimeters (cm³ or cc). Whether reading a medical syringe graduation, evaluating motorcycle engine displacement, or measuring laboratory reagent densities, understanding the relationship between milliliters and cubic centimeters is a fundamental scientific concept.",
    "The milliliter and the cubic centimeter are identical in volume: 1 milliliter equals exactly 1 cubic centimeter (1 mL = 1 cm³ = 1 cc). While 'milliliter' is the preferred terminology in fluid medicine, chemistry, and culinary liquids, 'cubic centimeter' (or 'cc') is the geometric and mechanical term widely used in solid geometry, automotive combustion chamber volumes, and syringe specifications. This guide explains their historical definition, identical ratio, clinical and automotive context, and conversion examples."
  ],
  quickAnswer: {
    text: "Milliliters and cubic centimeters are exactly identical in volume: 1 milliliter equals exactly 1 cubic centimeter (1 mL = 1 cm³ = 1 cc). To convert between them, no calculation is needed—the numerical value remains unchanged.",
    formulaDisplay: "1 mL = 1 cm³ = 1 cc | Value (cm³) = Value (mL) × 1",
    subtext: "Both units define the exact volume of a cube measuring 1 centimeter on each edge (0.001 liters)."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL or ml) is a metric unit of volume equal to one-thousandth of a liter (10⁻³ L). Introduced during the French metric revolution and accepted for use alongside the International System of Units (SI), the milliliter is the global standard for fluid pharmaceuticals, commercial beverages, liquid reagents, and clinical injections."
  },
  aboutTargetUnit: {
    title: "Understanding the Cubic Centimeter (cm³ / cc)",
    text: "The cubic centimeter (symbol: cm³, commonly abbreviated in colloquial and medical contexts as 'cc') is the coherent CGS unit of volume defined as the three-dimensional space enclosed by a cube with 1-centimeter sides. It is universally used in automotive engine displacement (e.g., a 250 cc motorcycle engine), medical syringe sizing, material density (g/cm³), and structural casting."
  },
  relationship: "Under current International System of Units (SI) definitions established in 1964 by the 12th CGPM, 1 liter is defined as exactly 1 cubic decimeter (1 dm³ = 1,000 cm³). Consequently, 1 milliliter (0.001 L) is mathematically and physically identical to 1 cubic centimeter (1 cm³). The ratio is exactly 1 to 1.",
  relationshipTitle: "1:1 Geometric Identity: Milliliters vs Cubic Centimeters",
  relationshipItems: [
    { label: "1 Milliliter (mL)", value: "exactly 1.0 Cubic Centimeter (cm³)" },
    { label: "1 Cubic Centimeter (cm³)", value: "exactly 1.0 Milliliter (mL)" },
    { label: "1 'cc' (Colloquial abbreviation)", value: "identical to 1 mL / 1 cm³" },
    { label: "1,000 mL = 1,000 cm³", value: "exactly 1.0 Liter (1.0 dm³)" }
  ],
  formula: {
    text: "Because 1 milliliter equals 1 cubic centimeter, the numerical value remains identical when converting between them.",
    math: "Volume in Cubic Centimeters (cm³) = Volume in Milliliters (mL) × 1",
    subtext: "Value in cm³ = Value in mL (1 mL = 1 cm³ = 1 cc)"
  },
  formulaTitle: "Milliliter to Cubic Centimeter Conversion Formula",
  practicalTip: {
    title: "The Zero-Math Rule",
    text: "Whenever you see 'mL', 'cm³', or 'cc', simply replace the unit symbol while keeping the exact same number. For example, a 50 mL fluid injection is identical to a 50 cc injection."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Clinical Syringe Medication Dosage",
        subtitle: "A physician orders an intramuscular injection of 2.5 mL of antibiotic. A nurse selects a syringe marked in cc. Find the equivalent in cc.",
        steps: [
          "State the prescribed volume: Volume = 2.5 mL.",
          "Apply the identity conversion: 1 mL = 1 cc = 1 cm³.",
          "Substitute the value: Volume (cc) = 2.5 × 1 = 2.5 cc.",
          "Conclude: The nurse draws exactly 2.5 cc into the syringe."
        ]
      },
      {
        title: "Example 2: Small Engine Displacement Sizing",
        subtitle: "A fuel consumption test injects 125 mL of fuel per cycle into a test chamber. Express this fluid volume in cubic centimeters.",
        steps: [
          "State the given volume: Volume = 125 mL.",
          "Multiply by 1: 125 × 1 = 125 cm³.",
          "Conclude: The injected volume equals exactly 125 cm³."
        ]
      },
      {
        title: "Example 3: Laboratory Density Determination",
        subtitle: "A solid specimen displaces 47.8 mL of water in a graduated cylinder. Find the specimen's volume in cm³ to compute density in g/cm³.",
        steps: [
          "State the displaced volume: Volume = 47.8 mL.",
          "Apply the 1:1 ratio: 47.8 mL = 47.8 cm³.",
          "Conclude: The specimen volume is exactly 47.8 cm³."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to Cubic Centimeter Conversion Table",
    headers: ["Milliliters (mL)", "Cubic Centimeters (cm³ / cc)", "Liters (L)", "Clinical & Mechanical Benchmark"],
    rows: [
      { fromVal: "0.5 mL", toVal: "0.5 cm³ (cc)", extra: "0.0005 L", extra2: "Insulin syringe standard dose" },
      { fromVal: "1 mL", toVal: "1 cm³ (cc)", extra: "0.0010 L", extra2: "Tuberculin / allergy testing syringe" },
      { fromVal: "3 mL", toVal: "3 cm³ (cc)", extra: "0.0030 L", extra2: "Standard intramuscular vaccination syringe" },
      { fromVal: "5 mL", toVal: "5 cm³ (cc)", extra: "0.0050 L", extra2: "1 medical teaspoon / oral liquid dispenser" },
      { fromVal: "10 mL", toVal: "10 cm³ (cc)", extra: "0.0100 L", extra2: "Standard blood collection vial volume" },
      { fromVal: "20 mL", toVal: "20 cm³ (cc)", extra: "0.0200 L", extra2: "Wound irrigation syringe barrel" },
      { fromVal: "50 mL", toVal: "50 cm³ (cc)", extra: "0.0500 L", extra2: "Moped / scooter 50 cc engine cylinder" },
      { fromVal: "125 mL", toVal: "125 cm³ (cc)", extra: "0.1250 L", extra2: "Standard 125 cc commuter motorcycle cylinder" },
      { fromVal: "250 mL", toVal: "250 cm³ (cc)", extra: "0.2500 L", extra2: "Quarter-liter measuring beaker" },
      { fromVal: "1,000 mL", toVal: "1,000 cm³ (cc)", extra: "1.0000 L", extra2: "1-liter volumetric flask (1.0 dm³ / 1,000 cc)" }
    ]
  },
  applications: {
    title: "Medicine, Pharmacology & Automotive Applications",
    items: [
      {
        title: "Medical Syringe Markings & Drug Administration",
        text: "While medical literature and drug manufacturers label concentrations in mg/mL, clinical syringes are frequently stamped with 'cc' or 'mL'. Recognizing their 1:1 identity prevents dosage transcription errors."
      },
      {
        title: "Internal Combustion Engine Displacement (cc)",
        text: "Engineers calculate cylinder swept volume from piston bore and stroke dimensions in centimeters ($\text{Volume} = \pi \times r^2 \times h$), yielding cm³ (cc), which directly equals milliliter fluid capacity."
      },
      {
        title: "Materials Science & Specific Gravity Testing",
        text: "In Archimedes water displacement testing, the volume of water displaced in milliliters directly equals the volume of the solid submerged object in cubic centimeters for calculating density ($\rho = m/V$ in $\text{g/cm}^3$)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming 'cc' is an Imperial unit: 'cc' is simply an informal abbreviation for 'cubic centimeter' (a metric unit), identical to 'mL'.",
      "Confusing cubic centimeters with cubic millimeters: 1 cm³ = 1,000 mm³, while 1 cm³ = 1 mL.",
      "Historical 1901–1964 discrepancy: Between 1901 and 1964, 1 liter was temporarily defined as the volume of 1 kg of pure water at 4°C (1.000028 dm³), causing 1 mL to equal 1.000028 cm³. In 1964, the CGPM restored the exact definition: 1 L = 1 dm³, making 1 mL = 1 cm³ exactly."
    ]
  },
  faqs: [
    {
      question: "Is 1 mL equal to 1 cm³ (or 1 cc)?",
      answer: "Yes, 1 milliliter (mL) is exactly equal to 1 cubic centimeter (cm³ or cc). They are physically and mathematically identical."
    },
    {
      question: "What is the difference between mL and cc?",
      answer: "There is no difference in volume. 'mL' (milliliter) is preferred in chemistry and fluid packaging, while 'cc' (cubic centimeter) is commonly used in medical syringe dosing and engine displacement."
    },
    {
      question: "How do I convert 5 mL to cm³?",
      answer: "5 mL is equal to exactly 5 cm³ (or 5 cc) without any mathematical adjustment."
    },
    {
      question: "Why do motorcycles use 'cc' for engine size?",
      answer: "'cc' stands for cubic centimeters, which represents the total volume displaced by the engine's pistons during one stroke. A 250 cc engine displaces 250 mL of air-fuel mixture."
    },
    {
      question: "How many cubic centimeters are in 1 liter?",
      answer: "There are exactly 1,000 cubic centimeters (1,000 cm³ or 1,000 cc) in 1 liter."
    },
    {
      question: "Is 'cc' an official SI symbol?",
      answer: "No. The official SI symbol is 'cm³' for cubic centimeter and 'mL' (or 'ml') for milliliter. 'cc' is a colloquial and commercial abbreviation."
    },
    {
      question: "How many grams does 1 mL (or 1 cm³) of water weigh?",
      answer: "At standard temperature (4°C) and pressure, 1 mL (1 cm³) of pure liquid water weighs exactly 1.000 gram."
    },
    {
      question: "How many cubic centimeters is 500 mL?",
      answer: "500 mL equals exactly 500 cm³ (500 cc or 0.5 liters)."
    }
  ],
  relatedList: [
    { label: "Cubic Centimeter to Milliliter", from: "cubic-centimeter", to: "milliliter" },
    { label: "Milliliter to Liter", from: "milliliter", to: "liter" },
    { label: "Liter to Cubic Centimeter", from: "liter", to: "cubic-centimeter" },
    { label: "Milliliter to Cubic Meter", from: "milliliter", to: "cubic-meter" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — 12th CGPM Resolution 6 (1964: Definition of the Liter)",
    "NIST Special Publication 330 — The International System of Units (SI)",
    "ISO 80000-3:2019 — Quantities and Units (Space and Time)"
  ]
};
