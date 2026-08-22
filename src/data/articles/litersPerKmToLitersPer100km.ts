import { CustomArticleData } from "./types";

export const litersPerKmToLitersPer100km: CustomArticleData = {
  fromUnitId: "liters-per-km",
  toUnitId: "liters-per-100km",
  seoTitle: "Liters per Kilometer to Liters per 100km Converter (L/km to L/100km)",
  metaDescription: "Convert Liters per Kilometer to Liters per 100 Kilometers (L/km to L/100km) instantly. Learn the direct formula (L/km × 100), worked examples, table, and FAQs.",
  h1: "Liters per Kilometer to Liters per 100km Converter",
  introduction: [
    "Liters per kilometer (L/km) and liters per 100 kilometers (L/100km) are direct metric measurements of automobile fuel consumption. Both units evaluate the volume of liquid fuel burned to travel a specific distance, using International System of Units (SI) standards for liquid volume (liters) and distance (kilometers).",
    "Because both units measure consumption rather than efficiency, they are directly proportional. The only difference is the distance baseline: L/km measures fuel burned over one kilometer, whereas L/100km scales that value over a standardized 100-kilometer trip. Converting from L/km to L/100km is straightforward: multiply the value by 100 (or shift the decimal point two places to the right).",
    "Automotive engineers, fleet coordinators, and transport researchers use this conversion to translate low-level vehicle telemetry and trip sensor logs into standardized consumer-facing window sticker ratings."
  ],
  quickAnswer: {
    text: "To convert Liters per Kilometer (L/km) to Liters per 100 Kilometers (L/100km), multiply the L/km value by 100. For example, a fuel consumption rate of 0.075 L/km equals exactly 7.50 L/100km.",
    formulaDisplay: "L/100km = (L/km) × 100",
    subtext: "Note: This is a direct linear conversion. Both units measure fuel consumption (lower numbers indicate better fuel economy)."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Kilometer (L/km)",
    text: "Liters per kilometer (L/km) is the base metric engineering unit for vehicle fuel consumption. It represents the decimal volume of fuel burned per single kilometer of travel. Extensively used in powertrain dynamometer testing and vehicle CAN bus telemetry, lower values represent superior fuel efficiency."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100 Kilometers (L/100km)",
    text: "Liters per 100 kilometers (L/100km) is the statutory consumer fuel consumption rating across Europe, Canada, Australia, and New Zealand. Regulated under UNECE and WLTP testing procedures, it indicates how many liters of fuel are consumed over a 100-kilometer trip."
  },
  relationship: "Because both units measure volume per unit distance, the conversion is directly linear with a constant multiplier of 100. 1 L/km equals exactly 100 L/100km.",
  relationshipTitle: "L/km to L/100km Benchmark Scale",
  relationshipItems: [
    { label: "0.150 L/km (150 mL/km)", value: "15.00 L/100km — Heavy commercial truck / Full-size V8" },
    { label: "0.100 L/km (100 mL/km)", value: "10.00 L/100km — Large crossover / Midsize SUV" },
    { label: "0.075 L/km (75 mL/km)", value: "7.50 L/100km — Standard 4-cylinder passenger car" },
    { label: "0.050 L/km (50 mL/km)", value: "5.00 L/100km — Modern compact car / Mild hybrid" },
    { label: "0.035 L/km (35 mL/km)", value: "3.50 L/100km — High-efficiency full hybrid / PHEV" }
  ],
  formula: {
    text: "Multiply the fuel consumption value in liters per kilometer by 100 to calculate liters per 100 kilometers.",
    math: "L/100km = (L/km) * 100",
    subtext: "To convert back from L/100km to L/km, divide by 100: L/km = (L/100km) / 100."
  },
  formulaTitle: "L/km to L/100km Direct Formula",
  practicalTip: {
    title: "Quick Decimal Shift",
    text: "To convert L/km to L/100km instantly in your head, simply move the decimal point two digits to the right: 0.082 L/km becomes 8.2 L/100km; 0.045 L/km becomes 4.5 L/100km."
  },
  expertNote: {
    title: "Sensor Aggregation into Consumer Ratings",
    text: "Modern vehicle telematics sample injector fuel mass flow in real time to calculate instantaneous L/km. Trip computers integrate these instantaneous values over 100 km distance windows to display the vehicle's rolling average in L/100km."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Compact Family Sedan",
        subtitle: "Convert a telemetry sensor reading of 0.062 L/km into standard L/100km.",
        steps: [
          "State the fuel consumption: 0.062 L/km.",
          "Apply the formula: L/100km = 0.062 × 100.",
          "Perform the multiplication: 0.062 × 100 = 6.2.",
          "Result: 0.062 L/km equals exactly 6.20 L/100km."
        ]
      },
      {
        title: "Example 2: All-Wheel Drive SUV",
        subtitle: "Convert a highway consumption rate of 0.085 L/km to L/100km.",
        steps: [
          "State the fuel consumption: 0.085 L/km.",
          "Apply the formula: L/100km = 0.085 × 100.",
          "Perform the calculation: 0.085 × 100 = 8.5.",
          "Result: 0.085 L/km equals exactly 8.50 L/100km."
        ]
      },
      {
        title: "Example 3: Heavy Commercial Delivery Truck",
        subtitle: "Convert an urban route consumption rate of 0.18 L/km to L/100km.",
        steps: [
          "State the fuel consumption: 0.18 L/km.",
          "Apply the formula: L/100km = 0.18 × 100.",
          "Perform the calculation: 0.18 × 100 = 18.0.",
          "Result: 0.18 L/km equals exactly 18.00 L/100km."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Kilometer to Liters per 100km Table",
    headers: ["Liters per Kilometer (L/km)", "Liters per 100km (L/100km)", "Efficiency Assessment"],
    rows: [
      { fromVal: "0.0300 L/km", toVal: "3.00 L/100km", extra: "Ultra Efficient (Plug-in Hybrid / Micro Diesel)" },
      { fromVal: "0.0400 L/km", toVal: "4.00 L/100km", extra: "Outstanding (Full Hybrid Compact)" },
      { fromVal: "0.0500 L/km", toVal: "5.00 L/100km", extra: "Excellent (Subcompact / Mild Hybrid)" },
      { fromVal: "0.0600 L/km", toVal: "6.00 L/100km", extra: "Very Good (Compact Sedan)" },
      { fromVal: "0.0700 L/km", toVal: "7.00 L/100km", extra: "Good (Midsize Passenger Sedan)" },
      { fromVal: "0.0800 L/km", toVal: "8.00 L/100km", extra: "Average (Family Crossover AWD)" },
      { fromVal: "0.0900 L/km", toVal: "9.00 L/100km", extra: "Moderate (Midsize All-Wheel Drive SUV)" },
      { fromVal: "0.1000 L/km", toVal: "10.00 L/100km", extra: "Moderate-High (Large SUV / V6)" },
      { fromVal: "0.1200 L/km", toVal: "12.00 L/100km", extra: "High Consumption (Full-Size 4x4 / Light Truck)" },
      { fromVal: "0.1500 L/km", toVal: "15.00 L/100km", extra: "Very High Consumption (Heavy Commercial Vehicle)" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Vehicle Telemetry Display Systems",
        text: "Automotive digital instrument clusters multiply instantaneous CAN bus fuel flow data in L/km by 100 to display the familiar L/100km trip average to drivers."
      },
      {
        title: "Fleet Fuel Consumption Audits",
        text: "Fleet management platforms converting total fuel burned per kilometer into standard L/100km figures produce comparative benchmark reports for corporate sustainability audits."
      },
      {
        title: "Emissions Certification Reporting",
        text: "Automotive testing laboratories scale bench dynamometer fuel flow rates measured in L/km to official 100-kilometer test cycle reports."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Dividing instead of multiplying: Dividing by 100 produces an error that understates fuel consumption by a factor of 10,000.",
      "Misplacing decimal points: A common error is multiplying by 10 instead of 100 (e.g., converting 0.08 L/km into 0.8 L/100km instead of 8.0 L/100km).",
      "Confusing with MPG: Both L/km and L/100km are consumption units where lower is better, unlike MPG where higher is better."
    ]
  },
  faqs: [
    {
      question: "How do you convert L/km to L/100km?",
      answer: "Multiply the L/km figure by 100: L/100km = (L/km) × 100. For example, 0.085 L/km equals 0.085 × 100 = 8.50 L/100km."
    },
    {
      question: "What is 0.07 L/km in L/100km?",
      answer: "0.07 L/km equals exactly 7.00 L/100km (0.07 × 100 = 7.0)."
    },
    {
      question: "What is 0.055 L/km in L/100km?",
      answer: "0.055 L/km equals exactly 5.50 L/100km (0.055 × 100 = 5.5)."
    },
    {
      question: "What is 0.10 L/km in L/100km?",
      answer: "0.10 L/km equals exactly 10.00 L/100km (0.10 × 100 = 10.0)."
    },
    {
      question: "Why do we multiply by 100?",
      answer: "Because L/100km measures fuel consumed over 100 kilometers, which is 100 times the distance of 1 kilometer."
    },
    {
      question: "What is 0.04 L/km in L/100km?",
      answer: "0.04 L/km equals exactly 4.00 L/100km (40 mL per kilometer)."
    },
    {
      question: "Is a lower or higher L/100km better?",
      answer: "A lower L/100km is better because it means the vehicle burns less fuel to travel 100 kilometers."
    },
    {
      question: "How do I convert L/100km back to L/km?",
      answer: "Divide the L/100km value by 100: L/km = (L/100km) ÷ 100."
    }
  ],
  relatedList: [
    { label: "L/100km to L/km", from: "liters-per-100km", to: "liters-per-km" },
    { label: "L/km to km/L", from: "liters-per-km", to: "km-per-liter" },
    { label: "L/km to MPG (US)", from: "liters-per-km", to: "mpg-us" },
    { label: "L/km to MPG (UK)", from: "liters-per-km", to: "mpg-uk" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — The International System of Units (SI)",
    "United Nations Economic Commission for Europe (UNECE Regulation 101) — Fuel Consumption Measurement",
    "International Organization for Standardization (ISO 80000-1) — Quantities and Units"
  ]
};
