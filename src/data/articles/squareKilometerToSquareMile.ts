import { CustomArticleData } from "./types";

export const squareKilometerToSquareMile: CustomArticleData = {
  fromUnitId: "square-kilometer",
  toUnitId: "square-mile",
  seoTitle: "Square Kilometer to Square Mile Converter - km² to mi²",
  metaDescription: "Convert square kilometers to square miles (km² to mi² or sq mi). Learn the exact conversion factor, formulas, step-by-step calculations, and comparison tables.",
  h1: "Square Kilometer to Square Mile Converter",
  introduction: [
    "Comparing the territorial size of countries, geographic regions, national parks, and urban metropolitan areas often requires translating between the international metric standard (square kilometers) and the US customary/imperial system (square miles). While international bodies, the United Nations, and scientific journals record planetary surface areas in square kilometers, land administration and public statistics across the United States, the United Kingdom, and several commonwealth nations frequently rely on square miles.",
    "Because both systems are anchored to precise international standards, converting square kilometers to square miles is straightforward and exact. This guide provides the official conversion factors, manual calculation formulas, step-by-step worked examples, reference tables, and real-world geographic benchmarks to help you convert km² to mi² with complete accuracy."
  ],
  quickAnswer: {
    text: "To convert square kilometers to square miles, multiply the area in square kilometers by 0.386102 (or divide by 2.589988). For example, a 100 km² municipality is equal to approximately 38.61 square miles.",
    formulaDisplay: "1 km² ≈ 0.386102 mi² | 1 mi² = 2.589988 km²",
    subtext: "One international square mile is defined as exactly (1,609.344 meters)² = 2,589,988.110336 m² = 2.589988110336 km²."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Kilometer (km²)",
    text: "The square kilometer (symbol: km²) is the standard large-scale SI derived unit of area. Defined as the surface area of a square measuring exactly 1,000 meters on each side (1,000,000 square meters), it is the global standard for geography, cartography, demographic density reporting, and international environmental statistics."
  },
  aboutTargetUnit: {
    title: "Understanding the Square Mile (mi² / sq mi)",
    text: "The square mile (symbol: mi² or sq mi) is an imperial and US customary unit of land area. Equal to the area of a square measuring one international mile (5,280 feet or 1,760 yards) on each side, it contains exactly 640 acres (27,878,400 square feet). It is the standard territorial unit for state boundaries, county jurisdictions, and regional zoning across the United States."
  },
  relationship: "The international yard agreement of 1959 established that 1 mile equals exactly 1.609344 kilometers. Squaring this linear relationship produces (1.609344 km)² = 2.589988110336 km² per square mile. Inverting this ratio gives 1 km² = 1 / 2.589988110336 ≈ 0.3861021585 square miles.",
  relationshipTitle: "Metric vs Imperial Territorial Scale: km² vs mi²",
  relationshipItems: [
    { label: "1 Square Kilometer (km²)", value: "approx. 0.386102 Square Miles (mi²)" },
    { label: "1 Square Mile (mi²)", value: "exactly 2.589988110336 Square Kilometers (km²)" },
    { label: "1 Square Mile (mi²)", value: "640 Acres (ac)" },
    { label: "1 Square Kilometer (km²)", value: "approx. 247.105 Acres (ac)" }
  ],
  formula: {
    text: "Convert square kilometers to square miles by multiplying the square kilometer value by 0.38610216, or by dividing by the exact conversion factor of 2.58998811.",
    math: "Area in Square Miles (mi²) = Area in Square Kilometers (km²) × 0.3861021585",
    subtext: "Alternatively: Area in Square Miles (mi²) = Area in Square Kilometers (km²) / 2.58998811"
  },
  formulaTitle: "Square Kilometer to Square Mile Conversion Formula",
  practicalTip: {
    title: "The 40% Quick Estimate Rule",
    text: "For fast mental estimates, multiply the square kilometer value by 0.4 and subtract 3.5%. For example, 100 km² × 0.4 = 40; subtracting ~1.4 gives ~38.6 mi², which is exceptionally close to the exact 38.61 mi²."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: National Park Conservation Territory",
        subtitle: "A wildlife sanctuary covers an area of 450 square kilometers. Convert this reserve area into square miles.",
        steps: [
          "State the initial area: Area = 450 km².",
          "Apply the conversion formula: Area (mi²) = Area (km²) × 0.386102.",
          "Substitute the value: Area (mi²) = 450 × 0.38610216.",
          "Perform the multiplication: Area (mi²) = 173.74597 mi².",
          "Conclude: The wildlife sanctuary spans approximately 173.75 square miles."
        ]
      },
      {
        title: "Example 2: Metropolitan Area Comparison",
        subtitle: "The administrative land area of Paris is approximately 105.4 square kilometers. Determine this area in square miles for comparison with American cities.",
        steps: [
          "Identify the given area: Area = 105.4 km².",
          "Use the division method: Area (mi²) = 105.4 / 2.589988.",
          "Calculate the quotient: 105.4 / 2.589988 = 40.695 mi².",
          "Conclude: The city of Paris covers roughly 40.70 square miles."
        ]
      },
      {
        title: "Example 3: Offshore Marine Protected Zone",
        subtitle: "An oceanic coral reef protection perimeter spans 1,200 square kilometers. Convert this marine zone to square miles.",
        steps: [
          "State the given area: Area = 1,200 km².",
          "Apply the formula: Area (mi²) = 1,200 × 0.38610216.",
          "Compute the product: 1,200 × 0.38610216 = 463.3226 mi².",
          "Conclude: The marine protected zone encompasses approximately 463.32 square miles."
        ]
      }
    ]
  },
  table: {
    title: "Square Kilometer to Square Mile Conversion Table",
    headers: ["Square Kilometers (km²)", "Square Miles (mi²)", "Acres (Approx.)", "Geographic Landmark Benchmark"],
    rows: [
      { fromVal: "1 km²", toVal: "0.386 mi²", extra: "247.1 ac", extra2: "Small village or golf resort" },
      { fromVal: "2.59 km²", toVal: "1.000 mi²", extra: "640.0 ac", extra2: "Standard 1 square mile US public land survey section" },
      { fromVal: "5 km²", toVal: "1.931 mi²", extra: "1,235.5 ac", extra2: "Large urban airport complex" },
      { fromVal: "10 km²", toVal: "3.861 mi²", extra: "2,471.1 ac", extra2: "Medium island or suburban township" },
      { fromVal: "25 km²", toVal: "9.653 mi²", extra: "6,177.6 ac", extra2: "Manhattan Island land area (~59 km² / 22.8 mi²)" },
      { fromVal: "50 km²", toVal: "19.305 mi²", extra: "12,355.3 ac", extra2: "San Francisco city territory (~121 km² / 46.9 mi²)" },
      { fromVal: "100 km²", toVal: "38.610 mi²", extra: "24,710.5 ac", extra2: "Disney World property, Florida (~101 km² / 39 mi²)" },
      { fromVal: "500 km²", toVal: "193.051 mi²", extra: "123,552.7 ac", extra2: "Greater London inner core or lake system" },
      { fromVal: "1,000 km²", toVal: "386.102 mi²", extra: "247,105.4 ac", extra2: "Major national park or metropolitan county" },
      { fromVal: "10,000 km²", toVal: "3,861.022 mi²", extra: "2,471,053.8 ac", extra2: "State of Delaware (~6,446 km² / 2,489 mi²)" }
    ]
  },
  applications: {
    title: "Geographic, Demographic & Commercial Applications",
    items: [
      {
        title: "International Demographics & Population Density",
        text: "Global statistical organizations report population densities in persons per square kilometer, while US and UK agencies report persons per square mile. Converting between the two allows accurate comparative demographic analysis."
      },
      {
        title: "Aviation & Airspace Corridor Planning",
        text: "Federal Aviation Administration (FAA) and International Civil Aviation Organization (ICAO) flight corridors and terminal airspace boundaries require converting regional radar charts between nautical/statute miles and metric grid systems."
      },
      {
        title: "Environmental Conservation & Forestry Management",
        text: "Forest fire containment perimeters, watershed runoff catchments, and wildlife migration corridors mapped in metric GIS formats are frequently translated to square miles for US federal and state agency reporting."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Using the linear conversion factor (1 km = 0.621371 miles) instead of the squared factor (0.386102): Always square the linear ratio when working with area: (0.621371)² ≈ 0.386102.",
      "Confusing statute square miles with nautical square miles: An international statute mile is 1,609.344 meters (1 sq mi = 2.589988 km²), whereas a nautical mile is 1,852 meters (1 sq nmi = 3.429904 km²).",
      "Over-rounding the conversion factor: Using 0.38 instead of 0.386102 introduces a 1.6% error, which compounds to hundreds of square miles across regional state-level calculations."
    ]
  },
  faqs: [
    {
      question: "How many square miles are in 1 square kilometer?",
      answer: "There are approximately 0.386102 square miles in 1 square kilometer."
    },
    {
      question: "How many square kilometers are in 1 square mile?",
      answer: "There are exactly 2.589988110336 square kilometers in 1 international square mile."
    },
    {
      question: "What is the formula to convert km² to mi²?",
      answer: "The formula is: Area in mi² = Area in km² × 0.38610216 (or Area in mi² = Area in km² / 2.58998811)."
    },
    {
      question: "Which is larger, a square kilometer or a square mile?",
      answer: "A square mile is significantly larger than a square kilometer. One square mile is roughly 2.59 times the area of a square kilometer."
    },
    {
      question: "How do I convert population density from per km² to per mi²?",
      answer: "To convert people per km² to people per mi², multiply the density by 2.589988 (since a square mile contains more area and therefore more people at the same density)."
    },
    {
      question: "How many acres are in a square mile compared to a square kilometer?",
      answer: "A square mile contains exactly 640 acres, whereas a square kilometer contains approximately 247.105 acres."
    },
    {
      question: "What is the abbreviation for square miles and square kilometers?",
      answer: "Square miles are abbreviated as 'mi²' or 'sq mi'. Square kilometers are officially abbreviated as 'km²' or 'sq km'."
    },
    {
      question: "How many square miles is 1,000 square kilometers?",
      answer: "1,000 square kilometers is approximately equal to 386.102 square miles."
    }
  ],
  relatedList: [
    { label: "Square Mile to Square Kilometer", from: "square-mile", to: "square-kilometer" },
    { label: "Square Kilometer to Acre", from: "square-kilometer", to: "acre" },
    { label: "Square Kilometer to Hectare", from: "square-kilometer", to: "hectare" },
    { label: "Square Kilometer to Square Meter", from: "square-kilometer", to: "square-meter" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) — Units of Measurement: Area",
    "United States Geological Survey (USGS) — Map Projections and Area Calculation Standards",
    "ISO 80000-3:2019 — Quantities and Units (Space and Time)"
  ]
};
