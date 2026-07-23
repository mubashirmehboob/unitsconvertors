import { CustomArticleData } from "./types";

export const becquerelToKilobecquerel: CustomArticleData = {
  fromUnitId: "becquerel",
  toUnitId: "kilobecquerel",
  seoTitle: "Becquerel to Kilobecquerel Converter - Bq to kBq",
  metaDescription: "Easily convert Becquerels to Kilobecquerels (Bq to kBq). Master the division-by-1000 formula, review step-by-step examples, and learn metric prefixes.",
  h1: "Becquerel to Kilobecquerel Converter",
  introduction: [
    "Radioactivity metrics are structured entirely around the metric system to ensure simple, consistent scaling across physics and biology laboratories. The primary base unit is the Becquerel (Bq), representing exactly one atomic decay event per second.",
    "For typical natural materials, soil samples, and food products, a single Becquerel is a very small scale of activity. To avoid long numbers, researchers convert these values into Kilobecquerels (kBq), representing one thousand decays per second."
  ],
  quickAnswer: {
    text: "To convert Becquerels to Kilobecquerels, divide the Becquerel value by 1,000. For example, a radioactive source emitting 25,000 Becquerels has exactly 25 Kilobecquerels of activity.",
    formulaDisplay: "1 Bq = 0.001 kBq",
    subtext: "Simply divide the value by 1,000 or shift the decimal point three positions to the left."
  },
  aboutSourceUnit: {
    title: "Understanding the Base Unit: Becquerel (Bq)",
    text: "A single Becquerel (Bq) represents one nuclear decay per second. Because atomic decay occurs continuously in nature, most trace radiation sources contain thousands of Becquerels."
  },
  aboutTargetUnit: {
    title: "Understanding the Metric Prefix: Kilobecquerel (kBq)",
    text: "The Kilobecquerel (kBq) is formed by combining the prefix 'kilo-' (meaning one thousand) with the base unit Becquerel. One Kilobecquerel represents exactly 1,000 disintegrations per second."
  },
  relationship: "The relationship between Becquerels and Kilobecquerels is direct and fixed. Because one Kilobecquerel is defined as exactly 1,000 Becquerels, converting from Bq to kBq is identical to converting meters to kilometers.",
  relationshipTitle: "The Radioactivity Metric Scaling: Bq vs kBq",
  relationshipItems: [
    { label: "1 Becquerel (Bq)", value: "0.001 Kilobecquerel (kBq)" },
    { label: "1 Kilobecquerel (kBq)", value: "1,000 Becquerels (Bq)" }
  ],
  formula: {
    text: "Convert radioactivity values by dividing the base decay count (Bq) by 1,000.",
    math: "Activity in Kilobecquerels (kBq) = Activity in Becquerels (Bq) / 1,000",
    subtext: "For manual calculations, shift the decimal point three places to the left."
  },
  formulaTitle: "The Bq to kBq Mathematical Formula",
  practicalTip: {
    title: "Easy Visual Decimals",
    text: "Whenever you convert from Bq to kBq, remember that dividing by 1,000 is equivalent to putting a decimal point before the last three digits. For instance, 4,500 Bq becomes 4.5 kBq instantly without paper calculations."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Food Safety Activity",
        subtitle: "A load of imported produce is measured and shows an activity of 152,000 Becquerels of Cesium-137. Express this in Kilobecquerels.",
        steps: [
          "Identify the starting activity in Becquerels: 152,000 Bq.",
          "Write down the conversion formula: kBq = Bq / 1,000.",
          "Divide by 1,000: 152,000 / 1,000 = 152.",
          "Conclude the calculation: 152,000 Becquerels is equivalent to exactly 152 kBq."
        ]
      },
      {
        title: "Example 2: Lab Calibration Standard",
        subtitle: "A radioactive check source has an activity of 3,750 Becquerels. Convert this value to kBq.",
        steps: [
          "Identify the activity: 3,750 Bq.",
          "Use the conversion division: 3,750 / 1,000.",
          "Calculate the result: 3.75.",
          "Conclude the calculation: 3,750 Becquerels is equal to 3.75 kBq."
        ]
      }
    ]
  },
  table: {
    title: "Becquerel to Kilobecquerel Reference Table",
    headers: ["Becquerels (Bq)", "Kilobecquerels (kBq)", "Isotope Reference Examples"],
    rows: [
      { fromVal: "1", toVal: "0.001", extra: "Traces of potassium-40 in one single grape" },
      { fromVal: "100", toVal: "0.1", extra: "Typical cosmic ray activity in high altitude" },
      { fromVal: "500", toVal: "0.5", extra: "Average radioactive mineral dust sample" },
      { fromVal: "1,000", toVal: "1", extra: "One Kilobecquerel base benchmark value" },
      { fromVal: "10,000", toVal: "10", extra: "Typical household smoke detector element" },
      { fromVal: "50,000", toVal: "50", extra: "Trace uranium ore mineral sample" },
      { fromVal: "100,000", toVal: "100", extra: "Trace geological rock core" },
      { fromVal: "1,000,000", toVal: "1,000", extra: "1 Megabecquerel (MBq) transition mark" }
    ]
  },
  expertNote: {
    title: "Why Standardizing on SI Matters",
    text: "Modern regulatory compliance laws (such as EPA, Euratom, and WHO guidelines) define radioactive contaminant limits in foodstuffs and drinking water in terms of Becquerels (Bq) and Kilobecquerels (kBq). This avoids the confusion of legacy non-metric units like Curies."
  },
  applications: {
    title: "Real-World Radioactivity Applications",
    items: [
      {
        title: "Agricultural Inspections",
        text: "Customs and agricultural safety inspectors scan imported crops for radioactive cesium and iodine. Limits are regulated in kBq per kilogram of weight, meaning raw Bq detector counts require fast conversion."
      },
      {
        title: "Environmental Hydrology",
        text: "Groundwater isotope studies track the concentration of tritium and radon in aquifers. Since activity values are typically in thousands of Bq, scientists write results in kBq to ensure clean, publication-ready logs."
      }
    ]
  },
  pitfalls: {
    title: "Common Radioactive Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: A Kilobecquerel is 1,000 times larger than a Becquerel. If you convert from Bq to kBq, your resulting value must be 1,000 times smaller. Double-check your arithmetic if the number gets larger.",
      "Symbol Case Errors: The prefix 'kilo-' must always be written with a lowercase 'k' ('kBq'). A capital 'K' is non-standard and should be avoided in official scientific publications."
    ]
  },
  faqs: [
    {
      question: "How do I convert Becquerels to Kilobecquerels?",
      answer: "Divide your Becquerel value by 1,000 to find the equivalent activity in Kilobecquerels."
    },
    {
      question: "What is the difference between Bq and kBq?",
      answer: "A Becquerel (Bq) represents one nuclear decay per second, while a Kilobecquerel (kBq) represents exactly one thousand (1,000) decays per second."
    },
    {
      question: "How many Bq are in 1 kBq?",
      answer: "There are exactly 1,000 Becquerels in one Kilobecquerel."
    },
    {
      question: "What is the symbol for Kilobecquerel?",
      answer: "The official SI symbol is 'kBq' with a lowercase 'k' and capitalized 'Bq'."
    },
    {
      question: "Does converting from Bq to kBq change the radioactivity level?",
      answer: "No, the rate of physical atomic decay remains identical. You are simply representing the measurement on a different scale."
    },
    {
      question: "How do I convert 3,700 Bq to kBq?",
      answer: "Divide 3,700 by 1,000 to get exactly 3.7 kBq."
    },
    {
      question: "What is the reverse formula to go from kBq back to Bq?",
      answer: "To convert Kilobecquerels back to Becquerels, multiply your kBq value by 1,000."
    },
    {
      question: "Is kBq an official unit of the International System (SI)?",
      answer: "Yes, the Kilobecquerel is an official SI-derived unit formed by combining the standard metric prefix 'kilo-' with the SI radioactivity base unit 'Becquerel'."
    }
  ],
  relatedList: [
    { label: "Kilobecquerel to Becquerel", from: "kilobecquerel", to: "becquerel" },
    { label: "Becquerel to Curie", from: "becquerel", to: "curie" },
    { label: "Becquerel to Rutherford", from: "becquerel", to: "rutherford" },
    { label: "Becquerel to Megabecquerel", from: "becquerel", to: "megabecquerel" },
    { label: "Curie to Kilobecquerel", from: "curie", to: "kilobecquerel" },
    { label: "Rutherford to Kilobecquerel", from: "rutherford", to: "kilobecquerel" },
    { label: "Megabecquerel to Kilobecquerel", from: "megabecquerel", to: "kilobecquerel" },
    { label: "Curie to Becquerel", from: "curie", to: "becquerel" },
    { label: "Curie to Rutherford", from: "curie", to: "rutherford" },
    { label: "Curie to Megabecquerel", from: "curie", to: "megabecquerel" },
    { label: "Rutherford to Becquerel", from: "rutherford", to: "becquerel" },
    { label: "Rutherford to Curie", from: "rutherford", to: "curie" },
    { label: "Rutherford to Megabecquerel", from: "rutherford", to: "megabecquerel" },
    { label: "Kilobecquerel to Curie", from: "kilobecquerel", to: "curie" },
    { label: "Kilobecquerel to Rutherford", from: "kilobecquerel", to: "rutherford" },
    { label: "Kilobecquerel to Megabecquerel", from: "kilobecquerel", to: "megabecquerel" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI)</em>.",
    "International Atomic Energy Agency (IAEA). <em>Radiation Protection and Safety of Radiation Sources</em>."
  ]
};
