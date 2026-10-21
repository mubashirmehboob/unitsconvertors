import { CustomArticleData } from "./types";

export const centimeterToMicrometer: CustomArticleData = {
  fromUnitId: "centimeter",
  toUnitId: "micrometer",
  seoTitle: "Centimeter to Micrometer Converter | cm to µm",
  metaDescription: "Convert centimeters to micrometers (cm to µm / microns) with exact metric precision. Includes formulas, worked examples, microns table, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/converters/length/centimeter-to-micrometer",
  h1: "Centimeter to Micrometer Converter",
  introduction: [
    "Bridging centimeters (cm) and micrometers (µm, commonly called microns) links visible macroscopic objects with microscopic structures. While centimeters describe everyday dimensions such as stationery, screen widths, and biological specimens, micrometers are the primary unit for cellular biology, optical coatings, aerosol particle filtering, and semiconductor lithography.",
    "Both units are decimal fractions of the SI base unit, the meter. Because one centimeter contains exactly 10,000 micrometers, converting between them is an exact base-10 transformation. This guide covers the mathematical relationship, step-by-step conversion examples, industrial applications, and answers to common microscopic measurement questions."
  ],
  quickAnswer: {
    text: "One centimeter is equal to exactly 10,000 micrometers (µm). Conversely, one micrometer is equal to exactly 0.0001 centimeters (10⁻⁴ cm).",
    formulaDisplay: "1 cm = 10,000 µm",
    subtext: "To convert centimeters to micrometers, multiply the centimeter value by 10,000, or shift the decimal point four places to the right."
  },
  aboutSourceUnit: {
    title: "Understanding the Centimeter (cm)",
    text: "The centimeter is a standard SI submultiple representing one hundredth of a meter (10⁻² meters). Widely used across global commerce, education, textiles, and everyday life, the centimeter provides a familiar reference frame for physical objects visible to the naked human eye."
  },
  aboutTargetUnit: {
    title: "Understanding the Micrometer (µm / Micron)",
    text: "The micrometer (symbol: µm), also historically and colloquially known as the micron, is an SI unit of length equal to one millionth of a meter (10⁻⁶ meters) or one thousandth of a millimeter. Micrometers are fundamental in microbiology (measuring bacteria and eukaryotic cells), materials science, precision machining tolerances, and air quality analysis (such as PM2.5 and PM10 particulates)."
  },
  relationship: "Because 1 centimeter equals 0.01 meters and 1 micrometer equals 0.000001 meters, dividing 0.01 by 0.000001 yields exactly 10,000 micrometers per centimeter.",
  relationshipItems: [
    { label: "Centimeters to Micrometers", value: "1 cm = 10,000 µm (exact)" },
    { label: "Micrometers to Centimeters", value: "1 µm = 0.0001 cm (exact)" },
    { label: "Scientific Ratio", value: "1 cm = 10⁴ µm" }
  ],
  formula: {
    text: "To convert centimeters to micrometers, multiply the centimeter figure by 10,000.",
    math: "Micrometers (µm) = Centimeters (cm) × 10,000",
    subtext: "This conversion is exact and based on SI decimal prefixes; no rounding or approximation is required."
  },
  practicalTip: {
    title: "Decimal Multiplication Shortcut",
    text: "To multiply by 10,000 quickly, simply shift the decimal point four positions to the right. For example, 0.025 cm becomes 250 µm."
  },
  examples: {
    title: "Step-by-Step Conversion Scenarios",
    items: [
      {
        title: "Example 1: Measuring a Microscope Slide Sample",
        subtitle: "Convert a histological tissue slice thickness of 0.005 cm into micrometers.",
        steps: [
          "State the starting length: 0.005 cm.",
          "Apply the conversion factor: Multiply by 10,000.",
          "Perform calculation: 0.005 × 10,000 = 50.",
          "Final result: 0.005 cm is exactly equal to 50 micrometers (µm)."
        ]
      },
      {
        title: "Example 2: Precision Machining Tolerance",
        subtitle: "Convert a mechanical bearing clearance of 0.02 cm into micrometers.",
        steps: [
          "State the starting clearance: 0.02 cm.",
          "Multiply by 10,000: 0.02 × 10,000 = 200.",
          "Conclusion: 0.02 cm equals 200 micrometers."
        ]
      },
      {
        title: "Example 3: Thin Film Coating",
        subtitle: "Convert an optical protective film thickness of 0.0012 cm into micrometers.",
        steps: [
          "State the starting thickness: 0.0012 cm.",
          "Shift decimal four places right: 0.0012 × 10,000 = 12.",
          "Final answer: 0.0012 cm equals 12 µm."
        ]
      }
    ]
  },
  table: {
    title: "Centimeter to Micrometer Reference Table",
    headers: ["Centimeters (cm)", "Micrometers (µm)", "Context / Common Application"],
    rows: [
      { fromVal: "0.0001", toVal: "1", extra: "1 µm (typical bacterium length / optical limit)" },
      { fromVal: "0.0005", toVal: "5", extra: "5 µm (red blood cell diameter)" },
      { fromVal: "0.001", toVal: "10", extra: "10 µm (fog droplet / fine airborne dust)" },
      { fromVal: "0.005", toVal: "50", extra: "50 µm (thickness of fine human hair)" },
      { fromVal: "0.01", toVal: "100", extra: "100 µm (thickness of standard printer paper)" },
      { fromVal: "0.05", toVal: "500", extra: "500 µm (0.5 mm, small sand grain diameter)" },
      { fromVal: "0.1", toVal: "1,000", extra: "1 mm (standard pencil lead tip)" },
      { fromVal: "0.5", toVal: "5,000", extra: "5 mm (common screw head diameter)" },
      { fromVal: "1", toVal: "10,000", extra: "Exactly 1 centimeter" },
      { fromVal: "5", toVal: "50,000", extra: "5 centimeters (matchbox length)" }
    ]
  },
  applications: {
    title: "Real-World Contexts & Applications",
    items: [
      {
        title: "Microbiology & Cell Biology",
        text: "Biologists examine specimens under optical microscopes where biological cells, organelles, and bacterial cultures range between 1 and 100 micrometers, requiring seamless translation from slide millimeter/centimeter grids."
      },
      {
        title: "Semiconductor Manufacturing & Cleanrooms",
        text: "Photolithography wafers and cleanroom air filters measure particulate contamination in micrometers (such as HEPA filter ratings capturing 0.3 µm particles), whereas silicon wafer diameters are expressed in centimeters."
      },
      {
        title: "Surface Metrology & Tribology",
        text: "Surface roughness (Ra values) and wear tolerances in precision automotive engines and aerospace turbine blades are measured in micrometers to guarantee smooth lubrication and prevent friction failure."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1,000 instead of 10,000: Multiplying centimeters by 1,000 results in millimeters × 100, not micrometers. Remember: 1 cm = 10 mm = 10,000 µm.",
      "Confusing the micron with the nanometer: A nanometer is 1,000 times smaller than a micrometer. 1 cm = 10,000 µm, but 10,000,000 nm.",
      "Symbol confusion: The Greek letter 'µ' (mu) represents micro; writing 'um' is acceptable in plain ASCII, but the standard SI symbol is 'µm'.",
      "Dividing instead of multiplying: Dividing by 10,000 converts micrometers to centimeters, not centimeters to micrometers."
    ]
  },
  faqs: [
    {
      question: "How many micrometers are in one centimeter?",
      answer: "There are exactly 10,000 micrometers in one centimeter. This equals 10 millimeters, with each millimeter containing 1,000 micrometers."
    },
    {
      question: "What is the difference between a micrometer and a micron?",
      answer: "There is no difference in magnitude; 'micron' is simply the older, traditional name for the micrometer (µm). The BIPM officially adopted 'micrometer' in 1967."
    },
    {
      question: "What is the formula to convert cm to µm?",
      answer: "The formula is: Micrometers = Centimeters × 10,000. Simply multiply your centimeter measurement by 10,000."
    },
    {
      question: "How do you convert micrometers back to centimeters?",
      answer: "To convert micrometers to centimeters, divide by 10,000 or multiply by 0.0001. For example, 50,000 µm divided by 10,000 equals 5 cm."
    },
    {
      question: "How many micrometers is 0.1 cm?",
      answer: "Multiplying 0.1 cm by 10,000 gives exactly 1,000 micrometers (which is also equal to 1 millimeter)."
    },
    {
      question: "How many micrometers is the thickness of a human hair in centimeters?",
      answer: "An average human hair is roughly 0.007 cm thick, which converts to approximately 70 micrometers."
    },
    {
      question: "What is the official symbol for the micrometer?",
      answer: "The official SI symbol is 'µm' using the Greek letter mu (µ), though 'um' is frequently used in plain text environments."
    },
    {
      question: "Why is the centimeter-to-micrometer conversion exact?",
      answer: "Because both units are defined as exact decimal fractions of the SI meter (10⁻² m and 10⁻⁶ m), the ratio 10⁴ is mathematically exact."
    }
  ],
  relatedList: [
    { label: "Micrometer to Centimeter", from: "micrometer", to: "centimeter" },
    { label: "Centimeter to Nanometer", from: "centimeter", to: "nanometer" },
    { label: "Centimeter to Millimeter", from: "centimeter", to: "millimeter" },
    { label: "Centimeter to Meter", from: "centimeter", to: "meter" },
    { label: "Centimeter to Inch", from: "centimeter", to: "inch" },
    { label: "Centimeter to Kilometer", from: "centimeter", to: "kilometer" }
  ],
  references: [
    "BIPM (International Bureau of Weights and Measures) - The International System of Units (SI Brochure, 9th edition).",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units.",
    "ISO 80000-3 - Quantities and units — Space and time."
  ]
};
