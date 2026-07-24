import { CustomArticleData } from "./types";

export const pascalToBar: CustomArticleData = {
  fromUnitId: "pascal",
  toUnitId: "bar",
  seoTitle: "Pascal to Bar Converter (Pa to bar)",
  metaDescription: "Convert Pascals to bars (Pa to bar) with exact metric precision. Learn the conversion factor, formula, step-by-step examples, pressure reference tables, and FAQs.",
  h1: "Pascal to Bar Converter",
  introduction: [
    "The Pascal (Pa) and the bar (bar) are fundamental pressure units widely employed in physics, meteorology, oceanography, automotive engineering, and industrial hydraulics. While the Pascal is the official SI unit for pressure, the bar is a convenient metric unit defined as exactly 100,000 Pascals—roughly equal to Earth's atmospheric pressure at sea level.",
    "Because the bar is legally defined in terms of Pascals, converting Pascals to bars is an exact mathematical transformation. To convert Pa to bar, divide the pressure value in Pascals by 100,000 or shift the decimal point five places to the left.",
    "This comprehensive guide presents the exact conversion formula, worked step-by-step calculation examples, an intuitive pressure reference table, real-world engineering applications, and answers to frequently asked pressure questions."
  ],
  quickAnswer: {
    text: "To convert Pascals to bars, divide the pressure value in Pascals by 100,000 (or multiply by 0.00001). For example, 250,000 Pa equals 2.5 bar, and standard atmospheric pressure of 101,325 Pa equals 1.01325 bar.",
    formulaDisplay: "bar = Pa ÷ 100,000",
    subtext: "One Pascal is equal to exactly 0.00001 bar (10⁻⁵ bar)."
  },
  aboutSourceUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "The Pascal (symbol: Pa) is the base derived unit of pressure in the International System of Units (SI). Defined as one Newton per square meter (1 N/m²), it measures force distributed across a surface. Named after Blaise Pascal, a single Pascal represents a very gentle pressure, so industrial applications often convert Pa to bars or kilopascals for manageable figures."
  },
  aboutTargetUnit: {
    title: "Understanding the Bar (bar)",
    text: "Introduced in 1909 by Norwegian meteorologist Vilhelm Bjerknes, the bar (symbol: bar) is a metric unit of pressure defined as exactly 100,000 Pascals (10⁵ Pa). Although not an official SI unit, it is widely recognized for use with SI units due to its close alignment with normal sea-level atmospheric pressure (1 atm = 1.01325 bar). The bar is heavily used in scuba diving, compressed gas storage, tire inflation, and European automotive specifications."
  },
  relationship: "The relationship between Pascals and bars is exact by international convention: 1 bar = 100,000 Pa, meaning 1 Pa = 0.00001 bar. The conversion involves no empirical estimation or rounding.",
  relationshipTitle: "Pascal vs Bar Pressure Benchmark Scale",
  relationshipItems: [
    { label: "1 Pa", value: "0.00001 bar (Micro-pressure differential)" },
    { label: "10,000 Pa", value: "0.1 bar (100 mbar / suction level)" },
    { label: "100,000 Pa", value: "1.0 bar (100 kPa / standard barometric baseline)" },
    { label: "101,325 Pa", value: "1.01325 bar (1 Standard Atmosphere)" },
    { label: "220,000 Pa", value: "2.2 bar (Standard passenger vehicle tire pressure)" }
  ],
  formula: {
    text: "Divide the pressure value in Pascals by 100,000 to convert to bars.",
    math: "bar = Pa / 100000",
    subtext: "To convert bars back to Pascals, multiply the bar value by 100,000."
  },
  formulaTitle: "Pascal to Bar Formula",
  practicalTip: {
    title: "5-Decimal Shift Rule",
    text: "To quickly convert Pascals to bars without a calculator, move the decimal point 5 positions to the left (e.g., 350,000.0 Pa becomes 3.5 bar)."
  },
  expertNote: {
    title: "Atmospheric Benchmark Note",
    text: "Standard atmospheric pressure (1 atm) is 101,325 Pa, which equals 1.01325 bar. For quick engineering estimates, 1 bar is often treated as equivalent to 1 atmosphere."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Automotive Tire Pressure",
        subtitle: "Convert a tire pressure sensor reading of 240,000 Pa into bars.",
        steps: [
          "Identify the pressure in Pascals: 240,000 Pa.",
          "Apply conversion formula: bar = Pa ÷ 100,000.",
          "Calculate: 240,000 ÷ 100,000 = 2.4.",
          "Result: 240,000 Pa equals exactly 2.4 bar."
        ]
      },
      {
        title: "Example 2: Espresso Machine Boiler Pressure",
        subtitle: "Convert a commercial espresso extraction pump pressure of 900,000 Pa to bars.",
        steps: [
          "Identify pressure: 900,000 Pa.",
          "Divide by 100,000: 900,000 ÷ 100,000 = 9.",
          "Result: 900,000 Pa equals 9 bar (standard espresso pressure)."
        ]
      },
      {
        title: "Example 3: Scuba Diving Cylinder Pressure",
        subtitle: "Convert a compressed air tank pressure of 20,000,000 Pa to bars.",
        steps: [
          "Identify starting pressure: 20,000,000 Pa.",
          "Apply formula: 20,000,000 ÷ 100,000 = 200.",
          "Result: 20,000,000 Pa equals 200 bar."
        ]
      }
    ]
  },
  table: {
    title: "Pascal to Bar Conversion Table",
    headers: ["Pascals (Pa)", "Bars (bar)", "Real-World Engineering Context"],
    rows: [
      { fromVal: "100 Pa", toVal: "0.001 bar", extra: "1 millibar atmospheric pressure" },
      { fromVal: "1,000 Pa", toVal: "0.01 bar", extra: "Low vacuum suction level" },
      { fromVal: "10,000 Pa", toVal: "0.1 bar", extra: "1 meter water column depth pressure" },
      { fromVal: "50,000 Pa", toVal: "0.5 bar", extra: "Half-atmosphere altitude air pressure" },
      { fromVal: "100,000 Pa", toVal: "1 bar", extra: "Standard metric pressure baseline (100 kPa)" },
      { fromVal: "101,325 Pa", toVal: "1.01325 bar", extra: "Standard sea-level atmospheric pressure" },
      { fromVal: "200,000 Pa", toVal: "2 bar", extra: "Bicycle tire / low car tire pressure" },
      { fromVal: "300,000 Pa", toVal: "3 bar", extra: "Residential water heater relief valve limit" },
      { fromVal: "900,000 Pa", toVal: "9 bar", extra: "Ideal espresso machine extraction pressure" },
      { fromVal: "2,000,000 Pa", toVal: "20 bar", extra: "Commercial building fire sprinkler main" },
      { fromVal: "20,000,000 Pa", toVal: "200 bar", extra: "Full scuba diving air cylinder pressure" }
    ]
  },
  applications: {
    title: "Real-World Applications of Pa to Bar Conversion",
    items: [
      {
        title: "Automotive & Tyre Manufacturing",
        text: "Automotive manufacturers specify tire inflation pressures in bars across Europe and Asia. Tire pressure monitoring systems (TPMS) read raw sensor data in Pascals and convert to bars for driver displays."
      },
      {
        title: "Scuba Diving & Hyperbaric Medicine",
        text: "Diving pressure gauges display breathing gas cylinder capacity in bars (e.g., 200 bar). Converting depth water pressure in Pascals to bars helps divers calculate gas consumption rates."
      },
      {
        title: "Industrial Compressors & Pneumatics",
        text: "Compressed air tools, pneumatic cylinders, and air compressors are rated in bars (typically 6 bar to 10 bar operating pressure). Pressure transducers record Pascals, which are scaled to bars on control panels."
      },
      {
        title: "Meteorology & Oceanography",
        text: "While meteorologists often use millibars (mbar), oceanographers measure deep sea pressure in bars, where every 10 meters of water depth adds roughly 1 bar of hydrostatic pressure."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 1,000 instead of 100,000: Dividing Pa by 1,000 yields kilopascals (kPa), not bars.",
      "Confusing bar with standard atmosphere (atm): 1 bar = 100,000 Pa, whereas 1 atm = 101,325 Pa (1 atm = 1.01325 bar).",
      "Misinterpreting gauge pressure vs absolute pressure: Bar gauges often read zero at atmospheric pressure (barg), whereas absolute pressure includes atmospheric pressure (bara).",
      "Confusing millibar with bar: 1 millibar (mbar) = 0.001 bar = 100 Pa."
    ]
  },
  faqs: [
    {
      question: "How many Pascals are in 1 bar?",
      answer: "There are exactly 100,000 Pascals in 1 bar. The bar is defined internationally as 10⁵ Pascals."
    },
    {
      question: "What is the formula to convert Pascals to bars?",
      answer: "The formula is: bar = Pa ÷ 100,000. You can also multiply the Pascal value by 0.00001."
    },
    {
      question: "Is 1 bar equal to 1 atmosphere?",
      answer: "They are very close but not identical. One bar equals 100,000 Pa, while 1 standard atmosphere (atm) equals 101,325 Pa (1 atm = 1.01325 bar)."
    },
    {
      question: "How many PSI is 1 bar?",
      answer: "One bar is equal to approximately 14.5038 pounds per square inch (PSI)."
    },
    {
      question: "How do I convert bars back to Pascals?",
      answer: "To convert bars back to Pascals, multiply the bar value by 100,000 (e.g., 2.5 bar × 100,000 = 250,000 Pa)."
    },
    {
      question: "Is the bar an official SI unit?",
      answer: "No. The bar is a non-SI metric unit, but it is officially accepted for use alongside SI units due to its widespread adoption in industry and daily life."
    },
    {
      question: "Why is bar used instead of Pascal in automotive pressure?",
      answer: "Because 1 bar represents a convenient, human-readable value close to atmospheric pressure, making tire and turbo boost readings simpler than using hundreds of thousands of Pascals."
    },
    {
      question: "What is 1 millibar in Pascals?",
      answer: "One millibar (mbar) is equal to 1/1,000th of a bar, which equals exactly 100 Pascals (1 hPa)."
    }
  ],
  relatedList: [
    { label: "Pascal to Kilopascal", from: "pascal", to: "kilopascal" },
    { label: "Pascal to Millibar", from: "pascal", to: "millibar" },
    { label: "Pascal to PSI", from: "pascal", to: "psi" },
    { label: "Pascal to Atmosphere", from: "pascal", to: "atmosphere" },
    { label: "Pascal to Megapascal", from: "pascal", to: "megapascal" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - Non-SI units accepted for use with the SI.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
