import { CustomArticleData } from "./types";

export const milliliterToBarrel: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "barrel",
  seoTitle: "Milliliter to Oil Barrel Converter (mL to bbl) - UnitsConvertors",
  metaDescription: "Convert milliliters to oil barrels (mL to bbl) with petroleum engineering precision. Calculate crude oil laboratory sample volumes, chemical dosing rates, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/milliliter-to-barrel",
  h1: "Milliliter to Oil Barrel Converter",
  introduction: [
    "Translating fluid volume between metric milliliters and standard petroleum oil barrels bridges micro-scale laboratory analysis and macro-scale oilfield production. In upstream and downstream petroleum operations, geochemists and refinery chemists analyze crude oil samples in milliliters, while pipeline operators, trading desks, and reservoir engineers measure bulk hydrocarbons in oil barrels (bbl).",
    "A standard oil barrel equals exactly 42 US gallons, which corresponds to 158.987294928 liters or 158,987.294928 milliliters. Converting milliliters to oil barrels requires dividing the milliliter volume by 158,987.3, or multiplying by approximately 6.28981 × 10⁻⁶ bbl/mL.",
    "This technical guide explains the mathematical conversion between milliliters and oil barrels, explores chemical injection dosing calculations (milliliters per barrel), details worked petroleum engineering examples, and provides a reference lookup table."
  ],
  quickAnswer: {
    text: "To convert milliliters to oil barrels (bbl), divide the milliliter amount by 158,987.295 (or multiply by 0.00000628981). For example, 1,000 mL (1 liter) equals approximately 0.00629 bbl, while a full 42-gallon barrel contains exactly 158,987.3 mL.",
    formulaDisplay: "Oil Barrels (bbl) = Milliliters (mL) ÷ 158,987.294928",
    subtext: "1 Oil Barrel (bbl) = 42 US Gallons = 158.987295 Liters = 158,987.295 mL"
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL) is an accepted SI metric volume unit equal to one-thousandth of a liter (10⁻³ L) and exactly one cubic centimeter (1 cm³). In petrochemical and refining laboratories, milliliters are standard for precision glassware, ASTM centrifuge tubes, automatic titrators, and viscosity tubes where exact fluid volumes must be isolated under controlled temperatures."
  },
  aboutTargetUnit: {
    title: "Understanding the Oil Barrel (bbl)",
    text: "The oil barrel (symbol: bbl) is the universal commercial unit for crude oil and refined petroleum products worldwide. Standardized in 1866 in Pennsylvania, one barrel equals exactly 42 US liquid gallons (9,702 cubic inches), approximately 0.158987 cubic meters, or 158.987 liters. In international custody transfer, volumes are standardized to a base temperature of 60°F (15.56°C) using API gravity tables."
  },
  relationship: "Because one standard oil barrel contains nearly 159,000 milliliters, converting from milliliters to barrels yields a very small decimal fraction. It takes 158,987.29 mL to equal a single standard oil barrel.",
  relationshipTitle: "Milliliter to Oil Barrel Volume Scale",
  relationshipItems: [
    { label: "100 mL", value: "≈ 0.000000629 bbl (ASTM centrifuge tube)" },
    { label: "500 mL", value: "≈ 0.000003145 bbl (crude oil assay flask)" },
    { label: "1,000 mL (1 L)", value: "≈ 0.000006290 bbl" },
    { label: "15,898.7 mL", value: "= 0.100 bbl" },
    { label: "79,493.6 mL", value: "= 0.500 bbl" },
    { label: "158,987.3 mL", value: "= 1.000 Oil Barrel (42 US gal)" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 158,987.294928 to determine the volume in oil barrels, or multiply by 6.28981077 × 10⁻⁶.",
    math: "V_{bbl} = \\frac{V_{mL}}{158,987.294928} = V_{mL} \\times 6.28981077 \\times 10^{-6}",
    subtext: "1 bbl = 42 US gallons = 158.987295 L = 158,987.295 cm³"
  },
  formulaTitle: "Mathematical Formula: mL to bbl",
  practicalTip: {
    title: "Chemical Dosing Rule in Production",
    text: "Petroleum engineers frequently express chemical demulsifiers and corrosion inhibitors in parts per million (ppm). Because 1 bbl ≈ 158,987 mL, injecting approximately 159 mL of neat chemical into 1,000 bbl of crude represents a concentration of 1 ppm by volume."
  },
  expertNote: {
    title: "API Temperature Compensation",
    text: "Crude oil expands and contracts significantly with temperature. While 158,987.3 mL is the physical volume of a 42-gallon barrel at 60°F (15.56°C), petroleum engineers use ASTM D1250 Volume Correction Factors (VCF) to adjust measured field volumes back to standard conditions."
  },
  examples: {
    title: "Petrochemical Calculation Examples",
    items: [
      {
        title: "Example 1: Crude Oil Lab Assay Sample",
        subtitle: "A petroleum laboratory processes a 2,500 mL reservoir fluid sample. Convert this test sample volume to barrels.",
        steps: [
          "Identify the given volume: 2,500 mL.",
          "Apply the barrel conversion factor: 1 bbl = 158,987.3 mL.",
          "Calculate: 2,500 ÷ 158,987.3 = 0.0157245 bbl.",
          "Express in engineering notation: 2,500 mL equals approximately 0.01572 bbl (or 15.72 millibarrels)."
        ]
      },
      {
        title: "Example 2: Pipeline Drag Reducing Agent (DRA) Dosing",
        subtitle: "A flow loop pilot test injects 15,000 mL of polymer DRA into a test separator. How many barrels does this additive represent?",
        steps: [
          "State the volume: 15,000 mL.",
          "Perform calculation: 15,000 ÷ 158,987.3 = 0.094347 bbl.",
          "Result: 15,000 mL equals approximately 0.0943 bbl (roughly 1/10 of an oil barrel)."
        ]
      },
      {
        title: "Example 3: Core Sample Fluid Saturation",
        subtitle: "Centrifuge extraction of a sandstone core plug yields 45 mL of crude oil. Express this in barrels.",
        steps: [
          "State the volume: 45 mL.",
          "Multiply by reciprocal: 45 × 6.28981 × 10⁻⁶ = 0.000000283 bbl.",
          "Express in scientific notation: 2.83 × 10⁻⁷ bbl."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to Oil Barrel Conversion Reference",
    headers: ["Milliliters (mL)", "Oil Barrels (bbl)", "Liters Equivalent", "Gallons (US) Equivalent"],
    rows: [
      { fromVal: "100 mL", toVal: "0.000000629 bbl", extra: "0.100 L", extra2: "0.0264 gal" },
      { fromVal: "500 mL", toVal: "0.000003145 bbl", extra: "0.500 L", extra2: "0.1321 gal" },
      { fromVal: "1,000 mL", toVal: "0.000006290 bbl", extra: "1.000 L", extra2: "0.2642 gal" },
      { fromVal: "5,000 mL", toVal: "0.000031449 bbl", extra: "5.000 L", extra2: "1.3209 gal" },
      { fromVal: "10,000 mL", toVal: "0.000062898 bbl", extra: "10.000 L", extra2: "2.6417 gal" },
      { fromVal: "25,000 mL", toVal: "0.000157245 bbl", extra: "25.000 L", extra2: "6.6043 gal" },
      { fromVal: "50,000 mL", toVal: "0.000314491 bbl", extra: "50.000 L", extra2: "13.2086 gal" },
      { fromVal: "79,494 mL", toVal: "0.500000000 bbl", extra: "79.494 L", extra2: "21.0000 gal" },
      { fromVal: "100,000 mL", toVal: "0.000628981 bbl", extra: "100.000 L", extra2: "26.4172 gal" },
      { fromVal: "158,987 mL", toVal: "1.000000000 bbl", extra: "158.987 L", extra2: "42.0000 gal" },
      { fromVal: "317,975 mL", toVal: "2.000000000 bbl", extra: "317.975 L", extra2: "84.0000 gal" },
      { fromVal: "794,936 mL", toVal: "5.000000000 bbl", extra: "794.936 L", extra2: "210.0000 gal" }
    ]
  },
  applications: {
    title: "Key Industry Applications",
    items: [
      {
        title: "Petrochemical Laboratory Testing",
        text: "ASTM D4007 tests measure water and sediment (BS&W) in 100 mL centrifuge tubes, which are converted to fractional barrel losses for custody transfer contracts."
      },
      {
        title: "Specialty Chemical Dosing",
        text: "Production chemical suppliers calibrate automated metering pumps dispensing milliliters per minute of scale inhibitors into wellheads producing hundreds of barrels per day."
      },
      {
        title: "Core Sample Porosity & Saturation",
        text: "Reservoir rock analysis measures residual hydrocarbon saturations in cubic centimeters (milliliters), scaled up to compute Original Oil In Place (OOIP) in millions of barrels."
      },
      {
        title: "Fuel Additive Blending",
        text: "Refinery fuel terminals measure concentrated detergent and cetane improver packages in milliliters when preparing individual delivery batch compartments."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing 42-gallon oil barrels with 55-gallon industrial shipping drums: Standard steel drums hold 55 US gallons (208.2 L or 208,198 mL), while the global oil trading barrel (bbl) is strictly 42 US gallons (158.99 L).",
      "Ignoring thermal volume expansion: Because hydrocarbon fluids have high thermal expansion coefficients (around 0.0008 per °C), converting mL to bbl without a reference temperature creates fiscal discrepancies in custody transfer.",
      "Conflating US liquid barrels with UK beer barrels: A UK beer barrel contains 36 imperial gallons (163.66 L), whereas an oil barrel is 42 US gallons (158.99 L).",
      "Floating-point rounding errors in chemical dosing: Multiplying by 6.3 × 10⁻⁶ instead of the full factor introduces a significant error when scaling to thousands of barrels."
    ]
  },
  faqs: [
    {
      question: "How many milliliters are in one oil barrel?",
      answer: "There are exactly 158,987.294928 milliliters in one standard 42-gallon oil barrel (commonly rounded to 158,987 mL or approximately 159 liters)."
    },
    {
      question: "Why does an oil barrel equal 42 gallons instead of 50 or 55?",
      answer: "In 1866, early Pennsylvania oil producers standardized on 42-gallon tierces (formerly used for wine and salted herring). The extra 2 gallons above a nominal 40-gallon measure compensated for leakage and evaporation during transport over rough roads."
    },
    {
      question: "How do I convert milliliters to oil barrels?",
      answer: "Divide the volume in milliliters by 158,987.3 (or multiply by 0.00000628981). For example, 10,000 mL divided by 158,987.3 equals approximately 0.0000629 bbl."
    },
    {
      question: "How many barrels is 1 liter of oil?",
      answer: "Since 1 liter equals 1,000 mL, 1 liter equals approximately 0.00629 oil barrels (roughly 1/159 of a barrel)."
    },
    {
      question: "Is an oil barrel the same size as a blue industrial plastic drum?",
      answer: "No. Industrial shipping drums (both steel and blue polyethylene) typically hold 55 US gallons (208.2 liters or 208,200 mL). An oil barrel (bbl) is a trade measure of exactly 42 US gallons (158.99 L)."
    },
    {
      question: "What does 'bbl' stand for in oil measurement?",
      answer: "The abbreviation 'bbl' historically originated as 'blue barrel' (used by Standard Oil in the 1870s to guarantee a full 42 gallons), or as a typographical convention to avoid confusing 'bl' with bales or barrels of other goods."
    },
    {
      question: "How is chemical injection dosing calculated in mL per barrel?",
      answer: "To dose a chemical at 10 ppm (parts per million) by volume in crude oil, multiply 10 by 0.158987, which equals approximately 1.59 mL of neat chemical per barrel of produced fluid."
    },
    {
      question: "How many milliliters are in a 55-gallon drum of oil?",
      answer: "A 55-gallon drum contains 208,197.6 milliliters (approximately 208.2 liters), which corresponds to roughly 1.31 standard oil barrels."
    },
    {
      question: "Does API gravity affect the volume conversion from mL to bbl?",
      answer: "API gravity measures relative density rather than volume. While 158,987 mL of light crude and heavy crude occupy the same volume, the heavy crude has greater mass (weight) per barrel."
    },
    {
      question: "At what temperature is the standard oil barrel volume defined?",
      answer: "Under API Chapter 11 and ISO 91 standards, crude oil volumes are standardized to a base temperature of 60°F (15.56°C) and 1 atmosphere of pressure (101.325 kPa)."
    }
  ],
  relatedList: [
    { label: "Liter to Oil Barrel", from: "liter", to: "barrel" },
    { label: "Gallon (US) to Oil Barrel", from: "gallon-us", to: "barrel" },
    { label: "Cubic Meter to Oil Barrel", from: "cubic-meter", to: "barrel" },
    { label: "Milliliter to Liter", from: "milliliter", to: "liter" },
    { label: "Milliliter to Gallon (US)", from: "milliliter", to: "gallon-us" }
  ],
  references: [
    "American Petroleum Institute (API) — Manual of Petroleum Measurement Standards (MPMS)",
    "ASTM D1250 / IP 200 — Petroleum Measurement Tables: Volume Correction Factors",
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)"
  ]
};
