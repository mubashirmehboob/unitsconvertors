import { CustomArticleData } from "./types";

export const cubicCentimeterToLiter: CustomArticleData = {
  fromUnitId: "cubic-centimeter",
  toUnitId: "liter",
  seoTitle: "Cubic Centimeter to Liter Converter (cm³ to L) - UnitsConvertors",
  metaDescription: "Convert cubic centimeters to liters (cm³ or cc to L) accurately. Explore engine displacement, laboratory glassware, exact formulas, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/cubic-centimeter-to-liter",
  h1: "Cubic Centimeter to Liter Converter",
  introduction: [
    "Converting volume between cubic centimeters and liters is one of the most frequent calculations in automotive engineering, clinical medicine, chemical laboratory analysis, and manufacturing quality control. Whether reading engine displacement specifications where an engine is labeled in cubic centimeters (cc or cm³) or liters (L), measuring liquid pharmaceutical dosages, or calculating internal fluid capacity for molded plastic components, moving between these metric measurements is fundamental.",
    "Under the International System of Units (SI) framework maintained by the International Bureau of Weights and Measures (BIPM), the liter is defined as a non-SI unit accepted for use with the SI, equal to exactly one cubic decimeter (1 dm³). Because one decimeter equals 10 centimeters, a cubic decimeter equals (10 cm)³, or exactly 1,000 cubic centimeters. Therefore, exactly 1,000 cubic centimeters make up one liter. To convert cubic centimeters to liters, divide by 1,000, or multiply by 0.001.",
    "This technical article explains the SI derivation connecting cubic centimeters to liters, explores real-world automotive engine sizing and medical syringe calibration, walks through practical calculation examples, and provides an extensive conversion lookup table."
  ],
  quickAnswer: {
    text: "To convert cubic centimeters (cm³ or cc) to liters (L), divide the cubic centimeter value by 1000 (or multiply by 0.001). For example, 1,000 cm³ equals exactly 1 liter, and a 2,000 cc vehicle engine displacement equals exactly 2.0 liters.",
    formulaDisplay: "Liters (L) = Cubic Centimeters (cm³) ÷ 1000",
    subtext: "1 cm³ = 0.001 L (Exact) | 1,000 cm³ = 1 L | 1 cm³ = 1 mL (Exact SI Definition)"
  },
  aboutSourceUnit: {
    title: "Understanding the Cubic Centimeter (cm³ / cc)",
    text: "The cubic centimeter (symbol: cm³, often abbreviated informally as cc in medical and automotive engineering) is a derived metric unit of volume. It represents the space occupied by a three-dimensional cube measuring one centimeter along each edge. Because one centimeter equals 0.01 meters, one cubic centimeter equals exactly 0.000001 cubic meters (10⁻⁶ m³) or exactly 1 milliliter (1 mL). It is standard in syringe manufacturing, internal combustion engine cylinder displacement, and mineral density calculations."
  },
  aboutTargetUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L, or l) is a universally accepted metric unit of volume equal to one cubic decimeter (0.001 cubic meters). Introduced during the French Revolution in 1795 and formally redefined by the 12th CGPM in 1964 as exactly 1/1,000 of a cubic meter, the liter is the worldwide benchmark for consumer beverage sizing, automotive fuel tank capacities, fluid mechanics, and commercial retail packaging."
  },
  relationship: "Because there are exactly 1,000 cubic centimeters in a liter, converting from cubic centimeters to liters moves the decimal point three places to the left, reducing the numerical value by a factor of one thousand.",
  relationshipTitle: "Cubic Centimeter to Liter Volume Equivalents",
  relationshipItems: [
    { label: "1.0 cm³", value: "= 0.001 L (exact 1 mL)" },
    { label: "5.0 cm³", value: "= 0.005 L (standard 5 mL medicine teaspoon)" },
    { label: "50.0 cm³", value: "= 0.050 L (small 50 cc moped engine)" },
    { label: "250.0 cm³", value: "= 0.250 L (quarter liter / metric cup)" },
    { label: "500.0 cm³", value: "= 0.500 L (half liter beverage bottle)" },
    { label: "1,000.0 cm³", value: "= 1.000 L (exact 1 liter volume)" },
    { label: "1,600.0 cm³", value: "= 1.600 L (1.6-liter passenger car engine)" },
    { label: "2,000.0 cm³", value: "= 2.000 L (2.0-liter turbocharged automotive engine)" }
  ],
  formula: {
    text: "Divide the volume in cubic centimeters by 1000 to obtain the equivalent volume in liters, or multiply by the exact decimal 0.001.",
    math: "V_L = \\frac{V_{cm^3}}{1000} = V_{cm^3} \\times 0.001",
    subtext: "To convert liters back to cubic centimeters: V_{cm^3} = V_L × 1000"
  },
  formulaTitle: "Conversion Formula: cm³ to Liters",
  practicalTip: {
    title: "The Three-Decimal Shift Rule",
    text: "Because dividing by 1,000 simply shifts the decimal point three places to the left, conversions can be performed instantly. For example, a 2,400 cc engine becomes 2.4 liters, and 750 cm³ becomes 0.75 L without needing a calculator."
  },
  expertNote: {
    title: "The 1964 CGPM Redefinition of the Liter",
    text: "Between 1901 and 1964, the liter was defined as the volume of 1 kilogram of pure water at maximum density (3.98°C), making 1 liter equal to 1,000.028 cm³. In 1964, the 12th CGPM repealed this definition and restored the liter as exactly 1 cubic decimeter (1,000 cm³ exactly). Always use the exact 1:1,000 ratio."
  },
  examples: {
    title: "Automotive & Laboratory Calculation Examples",
    items: [
      {
        title: "Example 1: Automotive Engine Displacement Conversion",
        subtitle: "A motorcycle features a four-cylinder engine with a total swept cylinder displacement of 998 cubic centimeters. What is the engine size expressed in liters?",
        steps: [
          "State displacement in cubic centimeters: 998 cm³.",
          "Apply conversion rule: divide by 1,000.",
          "Calculate: 998 / 1000 = 0.998 L.",
          "Result: The motorcycle engine displacement is 0.998 liters (commercially rounded to a 1.0-liter engine)."
        ]
      },
      {
        title: "Example 2: Laboratory Reagent Preparation",
        subtitle: "A chemist measures 350 cubic centimeters of ethanol in a graduated cylinder. Express this volume in liters for a molarity calculation.",
        steps: [
          "State volume: 350 cm³.",
          "Divide by 1,000: 350 / 1000 = 0.35 L.",
          "Result: 350 cubic centimeters equals exactly 0.35 liters."
        ]
      },
      {
        title: "Example 3: Plastic Fluid Reservoir Molding",
        subtitle: "A manufacturing engineer models an automotive windshield washer reservoir with an internal volume of 4,200 cubic centimeters. What is its capacity in liters?",
        steps: [
          "State volume: 4,200 cm³.",
          "Calculate: 4,200 / 1000 = 4.2 L.",
          "Result: The reservoir holds exactly 4.2 liters of washer fluid."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Centimeter to Liter Conversion Reference",
    headers: ["Cubic Centimeters (cm³ / cc)", "Liters (L)", "Milliliters (mL)", "Cubic Inches (in³)", "Real-World Context"],
    rows: [
      { fromVal: "1 cm³", toVal: "0.001 L", extra: "1 mL", extra2: "0.061 in³", extra3: "Standard single clinical syringe dose" },
      { fromVal: "5 cm³", toVal: "0.005 L", extra: "5 mL", extra2: "0.305 in³", extra3: "One standard culinary teaspoon" },
      { fromVal: "15 cm³", toVal: "0.015 L", extra: "15 mL", extra2: "0.915 in³", extra3: "One standard culinary tablespoon" },
      { fromVal: "50 cm³", toVal: "0.050 L", extra: "50 mL", extra2: "3.051 in³", extra3: "Small moped or scooter engine" },
      { fromVal: "100 cm³", toVal: "0.100 L", extra: "100 mL", extra2: "6.102 in³", extra3: "Travel-size cosmetic liquid container" },
      { fromVal: "250 cm³", toVal: "0.250 L", extra: "250 mL", extra2: "15.256 in³", extra3: "Metric measuring cup" },
      { fromVal: "500 cm³", toVal: "0.500 L", extra: "500 mL", extra2: "30.512 in³", extra3: "Standard European bottled water" },
      { fromVal: "750 cm³", toVal: "0.750 L", extra: "750 mL", extra2: "45.768 in³", extra3: "Standard wine bottle capacity" },
      { fromVal: "1,000 cm³", toVal: "1.000 L", extra: "1,000 mL", extra2: "61.024 in³", extra3: "One liter milk carton" },
      { fromVal: "1,600 cm³", toVal: "1.600 L", extra: "1,600 mL", extra2: "97.638 in³", extra3: "Standard 1.6-liter car engine displacement" },
      { fromVal: "2,000 cm³", toVal: "2.000 L", extra: "2,000 mL", extra2: "122.047 in³", extra3: "Standard 2.0-liter turbocharged automobile engine" },
      { fromVal: "3,500 cm³", toVal: "3.500 L", extra: "3,500 mL", extra2: "213.583 in³", extra3: "3.5-liter V6 automotive engine" },
      { fromVal: "5,000 cm³", toVal: "5.000 L", extra: "5,000 mL", extra2: "305.119 in³", extra3: "5.0-liter V8 performance vehicle engine" },
      { fromVal: "10,000 cm³", toVal: "10.000 L", extra: "10,000 mL", extra2: "610.237 in³", extra3: "Heavy commercial truck diesel engine" }
    ]
  },
  applications: {
    title: "Industry Applications for cm³ to Liter Conversions",
    items: [
      {
        title: "Automotive Engine Displacement Specifications",
        text: "Engineers calculate internal combustion swept volume by multiplying piston bore area by stroke length in cubic centimeters, converting to liters for badge designations (such as 2.0L or 3.0L)."
      },
      {
        title: "Clinical Medicine & Pharmacy",
        text: "Physicians and pharmacists convert liquid medication volumes between cubic centimeters (cc) and liters (L) when preparing intravenous drip infusions and total parenteral nutrition."
      },
      {
        title: "Analytical Chemical Laboratories",
        text: "Chemists measure reagent volumes in volumetric flasks and graduated cylinders calibrated in cm³ or mL, converting to liters to calculate molar concentrations (moles per liter)."
      },
      {
        title: "Industrial CAD & Plastic Injection Molding",
        text: "Design engineers analyzing SolidWorks or CATIA 3D models calculate part interior cavity volume in cubic centimeters, converting to liters to establish consumer liquid product capacity."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Assuming cc and cm³ are different units: The abbreviation cc stands for cubic centimeter and is identical in volume to cm³. Both equal exactly 1 milliliter.",
      "Incorrect decimal point placement: Shifting the decimal two places instead of three (e.g., claiming 1,500 cm³ is 15 L instead of 1.5 L) introduces an order-of-magnitude error.",
      "Confusing fluid volume with engine power: While engine displacement in liters relates to power potential, engine output (horsepower or kilowatts) depends heavily on forced induction (turbocharging) and tuning.",
      "Confusing cubic centimeters with cubic millimeters: One liter equals 1,000 cubic centimeters, but 1,000,000 cubic millimeters."
    ]
  },
  faqs: [
    {
      question: "How many liters are in one cubic centimeter?",
      answer: "There is exactly 0.001 liters in one cubic centimeter (cm³ or cc). This is because one liter is defined as exactly 1,000 cubic centimeters."
    },
    {
      question: "Is 1 cc the same as 1 cm³?",
      answer: "Yes, 1 cc (cubic centimeter) and 1 cm³ are two notations for the exact same unit of volume. In medical and automotive fields, cc is frequently used, while scientific papers prefer the official SI symbol cm³."
    },
    {
      question: "How do I convert cc to liters for a car engine?",
      answer: "Divide the engine displacement in cc by 1,000. For example, a 1,984 cc engine divided by 1,000 equals 1.984 liters, which car manufacturers designate as a 2.0-liter engine."
    },
    {
      question: "Is 1 cubic centimeter equal to 1 milliliter?",
      answer: "Yes, exactly. By international SI definition, 1 cubic centimeter equals exactly 1 milliliter (1 cm³ = 1 mL = 0.001 L)."
    },
    {
      question: "How do I convert liters back to cubic centimeters?",
      answer: "Multiply the number of liters by 1,000. For example, a 2.5-liter engine equals 2.5 × 1000 = 2,500 cubic centimeters."
    },
    {
      question: "How many cubic centimeters are in a 5-liter V8 engine?",
      answer: "A 5.0-liter engine has an internal swept cylinder displacement of exactly 5,000 cubic centimeters (5,000 cc)."
    },
    {
      question: "How many liters is 500 cc?",
      answer: "Five hundred cubic centimeters equals 500 / 1000 = 0.5 liters (exactly half a liter)."
    },
    {
      question: "How many cubic centimeters are in a standard 750 mL bottle of wine?",
      answer: "Since 1 mL equals 1 cm³, a 750 mL wine bottle contains exactly 750 cubic centimeters (0.75 liters)."
    },
    {
      question: "How much does 1 cubic centimeter of water weigh?",
      answer: "One cubic centimeter (1 mL) of pure water at 4 degrees Celsius weighs exactly 1 gram (0.001 kilograms)."
    },
    {
      question: "Why did older scientific books distinguish between 1 mL and 1 cm³?",
      answer: "Between 1901 and 1964, the liter was defined based on the mass of water, making 1 liter equal 1,000.028 cm³. The 12th CGPM in 1964 abolished that discrepancy, restoring 1 cm³ as identical to 1 mL."
    }
  ],
  relatedList: [
    { label: "Cubic Centimeter to Milliliter", from: "cubic-centimeter", to: "milliliter" },
    { label: "Cubic Centimeter to Cubic Meter", from: "cubic-centimeter", to: "cubic-meter" },
    { label: "Cubic Centimeter to Cubic Foot", from: "cubic-centimeter", to: "cubic-foot" },
    { label: "Liter to Cubic Centimeter", from: "liter", to: "cubic-centimeter" },
    { label: "Liter to Milliliter", from: "liter", to: "milliliter" }
  ],
  references: [
    "BIPM — The International System of Units (SI Brochure, 9th Edition)",
    "NIST Special Publication 330 — The International System of Units (SI)",
    "Society of Automotive Engineers (SAE) — Surface Vehicle Standard J604: Engine Terminology and Nomenclature"
  ]
};
