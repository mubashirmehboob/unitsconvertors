import { CustomArticleData } from "./types";

export const kmPerLiterToLitersPerKm: CustomArticleData = {
  fromUnitId: "km-per-liter",
  toUnitId: "liters-per-km",
  seoTitle: "Kilometers per Liter to Liters per Kilometer Converter (km/L to L/km)",
  metaDescription: "Convert Kilometers per Liter to Liters per Kilometer (km/L to L/km) accurately. Learn the reciprocal formula (1 / km/L), calculation examples, lookup table, and FAQs.",
  h1: "Kilometers per Liter to Liters per Kilometer Converter",
  introduction: [
    "Kilometers per liter (km/L) and liters per kilometer (L/km) are fundamental metric units of automotive fuel efficiency. While both units are built upon the exact same standard metric dimensions of length (kilometers) and liquid volume (liters), they place them in opposite positions within the measurement fraction.",
    "Kilometers per liter is an efficiency metric stating how many kilometers a vehicle travels on one liter of fuel. In contrast, liters per kilometer is a direct unit consumption metric stating the precise decimal fraction of a liter required to travel a single kilometer. Converting between these units requires taking the reciprocal: dividing 1 by the given value.",
    "Engineers, fleet operators, and automotive researchers frequently use liters per kilometer for precise telemetry logging, instantaneous engine fueling maps, and calculating exact fuel requirements for custom travel distances."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Liter (km/L) to Liters per Kilometer (L/km), divide 1 by the km/L value. For example, a vehicle achieving 12.5 km/L consumes exactly 0.08 L/km.",
    formulaDisplay: "L/km = 1 ÷ (km/L)",
    subtext: "Note: This is an exact inverse relationship. As km/L increases, L/km decreases."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per liter (km/L) is a widely used consumer fuel efficiency rating in Japan, India, Latin America, and Southeast Asia. It represents distance per unit volume; consequently, larger numbers indicate higher fuel efficiency and longer driving range per tank."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per Kilometer (L/km)",
    text: "Liters per kilometer (L/km) is the base metric consumption unit used in engineering calculations, dynamic vehicle simulation, and fleet cost modeling. It represents fuel volume burned per single unit of distance. Lower numbers reflect lower fuel consumption."
  },
  relationship: "Because km/L measures distance per volume and L/km measures volume per unit distance, the two units are inverse mathematical reciprocals. The conversion is simply L/km = 1 / (km/L), where 1 liter divided by distance traveled yields the liters consumed per single kilometer.",
  relationshipTitle: "km/L to L/km Conversion Scale",
  relationshipItems: [
    { label: "5 km/L", value: "0.200 L/km — Heavy mining truck / Extreme load haulage" },
    { label: "10 km/L", value: "0.100 L/km — Full-size SUV / High-displacement sedan" },
    { label: "12.5 km/L", value: "0.080 L/km — Average family passenger car" },
    { label: "16 km/L", value: "0.0625 L/km — Efficient compact commuter vehicle" },
    { label: "20 km/L", value: "0.050 L/km — Modern gasoline-electric hybrid" },
    { label: "25 km/L", value: "0.040 L/km — High-efficiency hybrid / Diesel subcompact" }
  ],
  formula: {
    text: "Divide 1 by the kilometers per liter rating to calculate liters per kilometer.",
    math: "L/km = 1 / (km/L)",
    subtext: "To convert back from L/km to km/L, apply the exact same reciprocal: km/L = 1 / (L/km)."
  },
  formulaTitle: "km/L to L/km Inverse Formula",
  practicalTip: {
    title: "Trip Cost Shortcut",
    text: "Multiplying your vehicle's L/km figure directly by your trip distance in kilometers gives the exact total liters of fuel needed for the journey. For example, a 250 km trip at 0.08 L/km requires 250 × 0.08 = 20 liters of fuel."
  },
  expertNote: {
    title: "Why Engineers Use L/km",
    text: "Engine control units (ECUs) and telemetry data loggers sample fuel mass and distance at millisecond intervals. Converting instantaneous sensor readings directly to L/km simplifies vehicle power-train simulation because volume integrates linearly over distance."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Urban Commuter Vehicle",
        subtitle: "Convert a city fuel economy rating of 16 km/L to liters per kilometer.",
        steps: [
          "Identify the fuel economy rating: 16 km/L.",
          "Apply the reciprocal formula: L/km = 1 ÷ 16.",
          "Perform the calculation: 1 ÷ 16 = 0.0625.",
          "Result: 16 km/L equals exactly 0.0625 L/km (or 62.5 mL per kilometer)."
        ]
      },
      {
        title: "Example 2: Commercial Delivery Van",
        subtitle: "Convert a highway rating of 10.5 km/L to L/km.",
        steps: [
          "Identify the fuel economy rating: 10.5 km/L.",
          "Apply the formula: L/km = 1 ÷ 10.5.",
          "Perform the calculation: 1 ÷ 10.5 = 0.095238...",
          "Result: 10.5 km/L equals approximately 0.0952 L/km."
        ]
      },
      {
        title: "Example 3: High-Efficiency Hybrid",
        subtitle: "Convert a hybrid rating of 24 km/L to L/km.",
        steps: [
          "Identify the fuel economy rating: 24 km/L.",
          "Apply the formula: L/km = 1 ÷ 24.",
          "Perform the calculation: 1 ÷ 24 = 0.041666...",
          "Result: 24 km/L equals approximately 0.0417 L/km."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Liter to Liters per Kilometer Table",
    headers: ["Kilometers per Liter (km/L)", "Liters per Kilometer (L/km)", "Equivalent Milliliters per km"],
    rows: [
      { fromVal: "5 km/L", toVal: "0.2000 L/km", extra: "200.0 mL/km (Heavy Truck)" },
      { fromVal: "8 km/L", toVal: "0.1250 L/km", extra: "125.0 mL/km (Large SUV / Commercial Van)" },
      { fromVal: "10 km/L", toVal: "0.1000 L/km", extra: "100.0 mL/km (Midsize Crossover)" },
      { fromVal: "12 km/L", toVal: "0.0833 L/km", extra: "83.3 mL/km (Family Sedan)" },
      { fromVal: "14 km/L", toVal: "0.0714 L/km", extra: "71.4 mL/km (Compact Sedan)" },
      { fromVal: "16 km/L", toVal: "0.0625 L/km", extra: "62.5 mL/km (Subcompact Car)" },
      { fromVal: "18 km/L", toVal: "0.0556 L/km", extra: "55.6 mL/km (Mild Hybrid)" },
      { fromVal: "20 km/L", toVal: "0.0500 L/km", extra: "50.0 mL/km (Full Hybrid)" },
      { fromVal: "25 km/L", toVal: "0.0400 L/km", extra: "40.0 mL/km (Eco Diesel / Plug-in Hybrid)" },
      { fromVal: "30 km/L", toVal: "0.0333 L/km", extra: "33.3 mL/km (Ultra-Efficient Compact)" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Exact Route Fuel Consumption Modeling",
        text: "Logistics routing software uses L/km values to compute exact fuel burn along designated waypoints by multiplying route segment lengths directly by L/km."
      },
      {
        title: "Automotive ECU Telemetry",
        text: "Powertrain control modules measure fuel injector pulse widths against wheel speed sensors to record instantaneous fuel consumption in L/km before aggregating into trip averages."
      },
      {
        title: "Carbon Emission Accounting",
        text: "Environmental audit platforms multiply total fleet kilometers by average L/km and specific fuel emission factors to report Scope 1 greenhouse gas emissions."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing L/km with L/100km: 1 L/km is 100 times larger than 1 L/100km. A vehicle burning 0.08 L/km is burning 8.0 L/100km.",
      "Inverting the calculation: Dividing km/L by 1 instead of 1 by km/L leads to serious errors in fuel volume calculations.",
      "Misinterpreting decimal magnitude: Small changes in L/km (e.g., 0.01 L/km) represent substantial fuel savings over long highway distances."
    ]
  },
  faqs: [
    {
      question: "How do you convert km/L to L/km?",
      answer: "Divide 1 by the kilometers per liter value: L/km = 1 / (km/L). For example, 20 km/L equals 1 / 20 = 0.05 L/km."
    },
    {
      question: "What is 10 km/L in L/km?",
      answer: "10 km/L equals exactly 0.10 L/km (or 100 mL of fuel per kilometer)."
    },
    {
      question: "How does L/km relate to L/100km?",
      answer: "L/km is simply L/100km divided by 100. For instance, 0.08 L/km is identical to 8.0 L/100km."
    },
    {
      question: "What is 15 km/L in L/km?",
      answer: "15 km/L equals approximately 0.0667 L/km (1 ÷ 15 = 0.06667)."
    },
    {
      question: "How much fuel is used per kilometer at 12 km/L?",
      answer: "At 12 km/L, a vehicle consumes 1 ÷ 12 ≈ 0.0833 liters (83.3 milliliters) of fuel per kilometer."
    },
    {
      question: "Is a higher or lower L/km better?",
      answer: "A lower L/km is better because it means the vehicle requires less fuel to travel each kilometer."
    },
    {
      question: "What is 25 km/L in L/km?",
      answer: "25 km/L equals exactly 0.04 L/km (40 mL of fuel per kilometer)."
    },
    {
      question: "How do I calculate total fuel for a 400 km trip using km/L?",
      answer: "Convert your km/L to L/km by calculating 1 / (km/L), then multiply by 400 km. For a car getting 16 km/L: (1 / 16) × 400 = 25 liters."
    }
  ],
  relatedList: [
    { label: "L/km to km/L", from: "liters-per-km", to: "km-per-liter" },
    { label: "km/L to L/100km", from: "km-per-liter", to: "liters-per-100km" },
    { label: "L/km to L/100km", from: "liters-per-km", to: "liters-per-100km" },
    { label: "km/L to MPG (US)", from: "km-per-liter", to: "mpg-us" }
  ],
  references: [
    "International Organization for Standardization (ISO 80000-3) — Quantities and Units: Space and Time",
    "Society of Automotive Engineers (SAE J1312) — Procedure for Measuring Fuel Consumption",
    "United States Department of Energy (DOE) — Vehicle Telemetry and Fuel Efficiency Testing"
  ]
};
