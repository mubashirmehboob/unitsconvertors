import { CustomArticleData } from "./types";

export const milliliterToTeaspoonUs: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "teaspoon-us",
  seoTitle: "Milliliter to Teaspoon (US) Converter (mL to tsp) - UnitsConvertors",
  metaDescription: "Convert milliliters to US teaspoons (mL to tsp) accurately. Learn the conversion formula (1 US tsp ≈ 4.929 mL), kitchen dosing ratios, tables, and FAQs.",
  h1: "Milliliter to Teaspoon (US) Converter",
  introduction: [
    "Converting liquid volume from milliliters to US teaspoons is one of the most common daily calculations in home cooking, baking, pediatric medicine dosing, and nutritional meal prep. While metric recipes and pharmaceutical labels list liquid volumes in milliliters, American recipes and measuring spoons use US teaspoons.",
    "One standard US Customary teaspoon equals 4.92892159 milliliters (frequently rounded to 5 mL in practical culinary and medical contexts). To convert milliliters to US teaspoons, divide the milliliter value by 4.92892 (or multiply by 0.202884).",
    "This reference guide details the exact mathematical conversion between milliliters and US teaspoons, provides step-by-step worked examples, offers comprehensive lookup tables, and answers common kitchen and medical dosing questions."
  ],
  quickAnswer: {
    text: "To convert milliliters to US Customary teaspoons, divide the milliliter value by 4.92892 (or multiply by 0.202884). For quick kitchen estimations, divide by 5. For example, 15 mL equals 3.04 US teaspoons (or exactly 3 metric teaspoons at 5 mL/tsp).",
    formulaDisplay: "tsp (US) = mL ÷ 4.92892159",
    subtext: "1 US Customary Teaspoon = 4.92892 mL (Metric teaspoon = 5.0 mL)."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL) is a metric volume unit equal to one-thousandth of a liter (0.001 L) or one cubic centimeter (1 cm³). It is the global scientific standard for precise liquid volumes, pharmaceutical dosing, and food labeling."
  },
  aboutTargetUnit: {
    title: "Understanding the US Teaspoon (tsp)",
    text: "The US Customary teaspoon (symbol: tsp or t) is a traditional unit of volume equal to 1/3 of a US tablespoon, 1/6 of a US fluid ounce, or 1/48 of a US cup. In exact US customary measure, 1 tsp equals 4.92892159 milliliters."
  },
  relationship: "Because 1 US teaspoon contains approximately 4.929 milliliters, converting from milliliters to teaspoons multiplies the value by roughly 0.203 (or divides by ~4.93). A 10 mL volume equals roughly 2.03 US customary teaspoons.",
  relationshipTitle: "Milliliter vs US Teaspoon Volume Scale",
  relationshipItems: [
    { label: "1 mL", value: "≈ 0.203 tsp" },
    { label: "2.5 mL", value: "≈ 0.507 tsp (1/2 teaspoon)" },
    { label: "4.93 mL", value: "= 1.000 US Customary Teaspoon" },
    { label: "10 mL", value: "≈ 2.029 US Customary Teaspoons" },
    { label: "15 mL", value: "≈ 3.043 US Customary Teaspoons (1 tbsp)" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 4.92892159 to calculate the exact equivalent in US Customary teaspoons.",
    math: "Volume in US Teaspoons = Volume in Milliliters (mL) ÷ 4.92892159",
    subtext: "Alternatively: tsp = mL × 0.202884. For practical culinary estimates: tsp ≈ mL ÷ 5."
  },
  formulaTitle: "Milliliter to US Teaspoon Conversion Formula",
  practicalTip: {
    title: "Quick Kitchen & Dosing Rule",
    text: "Dividing milliliters by 5 provides an easy mental conversion (5 mL ≈ 1 teaspoon). In pediatric medical dosing, always use a calibrated oral syringe or measuring cup marked in mL rather than a household spoon."
  },
  expertNote: {
    title: "Medical Syringe vs Kitchen Spoon Safety",
    text: "While 5 mL equals 1 metric teaspoon in baking, household dining teaspoons vary from 3 mL to 7 mL. The American Academy of Pediatrics recommends giving liquid pediatric medicines strictly in milliliters using an oral syringe."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Measuring Vanilla Extract",
        subtitle: "Convert 7.5 mL of vanilla extract into US teaspoons for a baking recipe.",
        steps: [
          "Identify volume in milliliters: 7.5 mL.",
          "Apply formula: tsp = 7.5 ÷ 4.92892159.",
          "Calculate: 7.5 ÷ 4.92892159 = 1.52163.",
          "Result: 7.5 mL equals approximately 1.52 US teaspoons (about 1 1/2 teaspoons)."
        ]
      },
      {
        title: "Example 2: Liquid Vitamin Supplement Dosing",
        subtitle: "Convert a 10 mL supplement dose to US teaspoons.",
        steps: [
          "Identify volume: 10 mL.",
          "Divide by 4.92892: 10 ÷ 4.92892 = 2.02884.",
          "Result: 10 mL equals approximately 2.03 US teaspoons (2 level teaspoons)."
        ]
      },
      {
        title: "Example 3: Baking Soda Solution",
        subtitle: "Convert 2.5 mL of liquid leavening agent to US teaspoons.",
        steps: [
          "Identify volume: 2.5 mL.",
          "Divide by 4.92892: 2.5 ÷ 4.92892 = 0.50721.",
          "Result: 2.5 mL equals approximately 0.51 US teaspoons (1/2 teaspoon)."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to US Teaspoon Conversion Table",
    headers: ["Milliliters (mL)", "US Customary Teaspoons", "Kitchen Measuring Equivalent"],
    rows: [
      { fromVal: "1.0 mL", toVal: "0.203 tsp", extra: "About 20 drops" },
      { fromVal: "2.5 mL", toVal: "0.507 tsp", extra: "1/2 US teaspoon" },
      { fromVal: "4.93 mL", toVal: "1.000 tsp", extra: "1 US Customary Teaspoon" },
      { fromVal: "5.0 mL", toVal: "1.014 tsp", extra: "1 metric teaspoon" },
      { fromVal: "7.5 mL", toVal: "1.522 tsp", extra: "1 1/2 teaspoons" },
      { fromVal: "10.0 mL", toVal: "2.029 tsp", extra: "2 US teaspoons" },
      { fromVal: "12.5 mL", toVal: "2.536 tsp", extra: "2 1/2 teaspoons" },
      { fromVal: "14.79 mL", toVal: "3.000 tsp", extra: "3 teaspoons (1 US tablespoon)" },
      { fromVal: "15.0 mL", toVal: "3.043 tsp", extra: "1 metric tablespoon" },
      { fromVal: "30.0 mL", toVal: "6.086 tsp", extra: "6 teaspoons (2 tbsp / 1 fl oz)" }
    ]
  },
  applications: {
    title: "Practical Applications of mL to tsp Conversion",
    items: [
      {
        title: "Home Baking & Recipe Adaptation",
        text: "Translating European and Asian cake, pastry, and bread recipes listing small liquid extracts in milliliters into US teaspoon measuring tools."
      },
      {
        title: "Liquid Medication Administration",
        text: "Converting prescribed milliliter doses of cough syrup, antibiotics, or infant fever reducers into spoon measurements when syringes are unavailable."
      },
      {
        title: "Bar & Cocktail Mixology",
        text: "Bartenders converting precise milliliter bitters and syrup dashes into customary teaspoon measurements."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Using a dining tableware teaspoon: Cutlery teaspoons vary significantly in volume (from 3 mL to 7 mL) and cause dosage errors.",
      "Confusing teaspoons (tsp) with tablespoons (tbsp): 1 tablespoon equals 3 teaspoons (15 mL vs 5 mL).",
      "Assuming 5 mL is strictly identical to 1 US customary teaspoon: 5 mL is 1.4% larger than 1 US customary teaspoon (4.93 mL)."
    ]
  },
  faqs: [
    {
      question: "How many teaspoons is 5 mL?",
      answer: "5 mL equals approximately 1.01 US Customary teaspoons (or exactly 1.0 metric teaspoon)."
    },
    {
      question: "Is 1 teaspoon equal to 5 mL?",
      answer: "In practical cooking and medicine, 1 teaspoon is universally rounded to 5 mL. The exact US Customary teaspoon is 4.92892 mL."
    },
    {
      question: "How many teaspoons is 10 mL?",
      answer: "10 mL equals approximately 2.03 US Customary teaspoons (or 2.0 metric teaspoons)."
    },
    {
      question: "How many teaspoons is 15 mL?",
      answer: "15 mL equals approximately 3.04 US Customary teaspoons (which equals 1 US tablespoon)."
    },
    {
      question: "How do I convert 2.5 mL to teaspoons?",
      answer: "Divide 2.5 by 4.92892 to get approximately 0.51 US teaspoons (1/2 teaspoon)."
    },
    {
      question: "How many teaspoons is 30 mL?",
      answer: "30 mL equals approximately 6.09 US Customary teaspoons (2 tablespoons)."
    },
    {
      question: "What is 7.5 mL in teaspoons?",
      answer: "7.5 mL equals approximately 1.52 US Customary teaspoons (1 1/2 teaspoons)."
    },
    {
      question: "Can I use a regular kitchen spoon to measure 5 mL?",
      answer: "No, household dining spoons are not standardized. For medicine, always use a calibrated measuring dropper, oral syringe, or dosage cup."
    }
  ],
  relatedList: [
    { label: "Milliliter to Tablespoon (US)", from: "milliliter", to: "tablespoon-us" },
    { label: "Milliliter to Cup (US)", from: "milliliter", to: "cup-us" },
    { label: "Milliliter to Fluid Ounce (US)", from: "milliliter", to: "fluid-ounce-us" },
    { label: "Milliliter to Liter", from: "milliliter", to: "liter" }
  ],
  references: [
    "NIST Special Publication 811 — Units of Liquid Measure",
    "American Academy of Pediatrics — Dosing Guidelines for Liquid Medications"
  ]
};
