import { CustomArticleData } from "./types";

export const newtonToDyne: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "dyne",
  seoTitle: "Newton to Dyne Converter (N to dyn)",
  metaDescription: "Convert newtons to dynes (N to dyn) accurately. Learn the exact CGS to SI unit relationship, formula, step-by-step examples, and conversion table.",
  h1: "Newton to Dyne Converter",
  introduction: [
    "The newton (N) and dyne (dyn) are standard units of force representing two fundamental physical measurement systems: the International System of Units (SI) and the centimeter-gram-second (CGS) system.",
    "Because both units measure mechanical force based on mass times acceleration, converting between them requires a simple powers-of-ten scaling. One newton equals exactly 100,000 dynes (10⁵ dynes).",
    "This reference guide provides the exact conversion formula, mathematical derivation from first principles, step-by-step calculation examples, and a comprehensive conversion table for engineering and physics calculations."
  ],
  quickAnswer: {
    text: "To convert newtons to dynes, multiply the force in newtons by 100,000. For example, 5 N equals 500,000 dynes.",
    formulaDisplay: "dyn = N × 100,000",
    subtext: "One newton accelerates 1 kilogram at 1 m/s², while one dyne accelerates 1 gram at 1 cm/s²."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton (N)",
    text: "The newton is the coherent SI derived unit of force, named after Sir Isaac Newton in recognition of his classical mechanics breakthroughs. Defined by Newton's second law of motion (F = ma), 1 newton is the amount of force needed to accelerate a 1-kilogram mass at a rate of 1 meter per second squared (1 N = 1 kg·m/s²)."
  },
  aboutTargetUnit: {
    title: "Understanding the Dyne (dyn)",
    text: "The dyne is the primary unit of force in the centimeter-gram-second (CGS) system of units. First proposed by the British Association for the Advancement of Science in 1873, 1 dyne is defined as the force required to accelerate a 1-gram mass at a rate of 1 centimeter per second squared (1 dyn = 1 g·cm/s²)."
  },
  relationship: "Since 1 kilogram equals 1,000 grams (10³ g) and 1 meter equals 100 centimeters (10² cm), multiplying these factors (10³ × 10²) yields exactly 100,000 (10⁵). Therefore, 1 N is equal to precisely 100,000 dynes.",
  relationshipTitle: "Newton vs Dyne Physics Scale Comparison",
  relationshipItems: [
    { label: "1 Newton (N)", value: "100,000 dyn" },
    { label: "1 Dyne (dyn)", value: "0.00001 N (10⁻⁵ N)" },
    { label: "1 Kilonewton (kN)", value: "100,000,000 dyn (10⁸ dyn)" },
    { label: "1 Micronewton (µN)", value: "0.1 dyn" }
  ],
  formula: {
    text: "Multiply the force in newtons by 100,000 to obtain the equivalent force in dynes.",
    math: "dyn = N × 100,000",
    subtext: "In scientific notation: dyn = N × 10⁵."
  },
  formulaTitle: "Newton to Dyne Formula",
  practicalTip: {
    title: "Scientific Notation Rule",
    text: "When dealing with large dyne values in physics and microfluidics, express results in scientific notation by adding 5 to the base 10 exponent of the newton value."
  },
  expertNote: {
    title: "Surface Tension & Microfluidics",
    text: "While the newton dominates modern engineering, dynes remain widely used in surface science, where surface tension is conventionally reported in dynes per centimeter (dyn/cm), which equals millinewtons per meter (mN/m)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 2.5 Newtons",
        subtitle: "Calculate the equivalent force in dynes for a laboratory force reading of 2.5 N.",
        steps: [
          "Identify the initial value in newtons: 2.5 N.",
          "Apply the conversion factor: dyn = 2.5 × 100,000.",
          "Perform the multiplication: 2.5 × 100,000 = 250,000.",
          "Result: 2.5 N is equal to 250,000 dynes."
        ]
      },
      {
        title: "Example 2: Converting 0.01 Newtons (10 mN)",
        subtitle: "Convert a small actuator force of 0.01 N into dynes.",
        steps: [
          "Identify the input value: 0.01 N.",
          "Multiply by 100,000: 0.01 × 100,000 = 1,000.",
          "Result: 0.01 N corresponds to 1,000 dynes (1 kdyn)."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Dyne Quick Reference Table",
    headers: ["Newtons (N)", "Dynes (dyn)", "Scientific Notation", "Engineering Context"],
    rows: [
      { fromVal: "0.0001 N", toVal: "10 dyn", extra: "10¹ dyn", extra2: "Micro-actuator force" },
      { fromVal: "0.001 N", toVal: "100 dyn", extra: "10² dyn", extra2: "Light contact sensor" },
      { fromVal: "0.01 N", toVal: "1,000 dyn", extra: "10³ dyn", extra2: "Microfluidic droplet force" },
      { fromVal: "0.1 N", toVal: "10,000 dyn", extra: "10⁴ dyn", extra2: "Small spring tension" },
      { fromVal: "1 N", toVal: "100,000 dyn", extra: "10⁵ dyn", extra2: "Weight of a small apple" },
      { fromVal: "5 N", toVal: "500,000 dyn", extra: "5 × 10⁵ dyn", extra2: "Handheld button press force" },
      { fromVal: "10 N", toVal: "1,000,000 dyn", extra: "10⁶ dyn", extra2: "1 megadyne (Mdyn)" },
      { fromVal: "50 N", toVal: "5,000,000 dyn", extra: "5 × 10⁶ dyn", extra2: "Moderate mechanical pull" },
      { fromVal: "100 N", toVal: "10,000,000 dyn", extra: "10⁷ dyn", extra2: "Structural testing benchmark" },
      { fromVal: "1,000 N", toVal: "100,000,000 dyn", extra: "10⁸ dyn", extra2: "1 kilonewton (kN) structural force" }
    ]
  },
  applications: {
    title: "Practical Uses of N to dyn Conversion",
    items: [
      {
        title: "Fluid Mechanics & Surface Tension",
        text: "Interfacial tension tests measure liquid contact forces in dyn/cm, requiring conversions from SI sensor outputs measured in newtons or millinewtons."
      },
      {
        title: "Biophysics & Cellular Mechanics",
        text: "Forces exerted by cellular structures, cilia, and optical tweezers are often published in sub-dyne or dyne ranges."
      },
      {
        title: "Legacy CGS Engineering Equipment",
        text: "Calibrating legacy scientific instruments designed around CGS standards requires accurate conversion from modern SI force sensors."
      },
      {
        title: "Material Testing & Thin Films",
        text: "Peel strength and adhesion tests on ultra-thin coatings frequently utilize dynes for fine resolution reporting."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing dynes with dynes per centimeter (a measure of surface tension rather than pure force).",
      "Miscounting zeros when multiplying by 100,000; using scientific notation prevents manual zero counting errors.",
      "Mistaking dyne for a unit of mass rather than dynamic force."
    ]
  },
  faqs: [
    {
      question: "How many dynes are in 1 newton?",
      answer: "There are exactly 100,000 dynes in 1 newton. This is an exact integer factor because 1 N = 10³ g × 10² cm/s²."
    },
    {
      question: "What is the physical definition of a dyne?",
      answer: "A dyne is the force required to accelerate a 1-gram mass at a rate of 1 centimeter per second squared."
    },
    {
      question: "Why is 1 N equal to 100,000 dynes?",
      answer: "1 N is defined as 1 kg·m/s². Converting kilograms to grams (1,000) and meters to centimeters (100) gives 1,000 × 100 = 100,000 dynes."
    },
    {
      question: "Which system of units uses dynes?",
      answer: "The dyne belongs to the CGS (centimeter-gram-second) system of physical units, whereas the newton belongs to the SI (International System of Units)."
    },
    {
      question: "Is dyne still used in modern engineering?",
      answer: "Yes, dynes are still widely used in surface science, fluid mechanics (dyn/cm), and micro-electro-mechanical systems (MEMS)."
    },
    {
      question: "How do I convert dynes back to newtons?",
      answer: "To convert dynes back to newtons, divide the dyne value by 100,000 (or multiply by 0.00001)."
    },
    {
      question: "What is 1 megadyne?",
      answer: "1 megadyne (Mdyn) is 1,000,000 dynes, which equals exactly 10 newtons."
    },
    {
      question: "Can I use newtons and dynes in the same equation?",
      answer: "You must convert all forces to the same system (either all newtons for SI or all dynes for CGS) before executing physical calculations."
    }
  ],
  relatedList: [
    { label: "Newton to Pound-force", from: "newton", to: "pound-force" },
    { label: "Newton to Kilogram-force", from: "newton", to: "kilogram-force" },
    { label: "Newton to Kilonewton", from: "newton", to: "kilonewton" },
    { label: "Newton to Gram-force", from: "newton", to: "gram-force" },
    { label: "Newton to Ounce-force", from: "newton", to: "ounce-force" },
    { label: "Newton to Poundal", from: "newton", to: "poundal" }
  ],
  references: [
    "BIPM - The International System of Units (SI), 9th Edition",
    "NIST Special Publication 330: The International System of Units",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics"
  ]
};
