import { CustomArticleData } from "./types";

export const luxToCandela: CustomArticleData = {
  fromUnitId: "lux",
  toUnitId: "candela",
  seoTitle: "Lux to Candela Engineering Calculation (lx to cd) | UnitsConvertors.com",
  metaDescription: "Calculate Candela from Lux (lx to cd) using distance and the inverse square law. Learn photometric beam formulas, point-source criteria, worked examples, and FAQs.",
  h1: "Lux to Candela Engineering Calculation",
  introduction: [
    "Lux measures illuminance—the density of luminous flux falling on a surface (lumens per square meter). In contrast, Candela measures luminous intensity—the luminous flux emitted by a light source in a specific direction per unit solid angle (lumens per steradian). Because lux quantifies light received at a distance while candela quantifies beam intensity originating at the source, there is no single universal conversion factor between lux and candela without specifying the measurement distance.",
    "Under the inverse square law of photometry, illuminance ($E$) decreases proportionally with the square of distance ($d$) from an isotropic point source: $E = I / d^2$. By rearranging this physical law, luminous intensity in candelas ($I$) is calculated by multiplying illuminance in lux ($E$) by the square of the distance in meters ($d^2$): $I = E \times d^2$.",
    "This calculation represents a Type B conditional engineering transformation rather than a standard direct unit conversion. This guide explains the required point-source assumptions, beam angle considerations, ANSI/NEMA FL1 flashlight rating standards, automotive headlamp compliance, and step-by-step engineering calculations."
  ],
  quickAnswer: {
    text: "Lux measures illuminance at a target surface, while Candela measures directional luminous intensity at the source. Therefore, there is no fixed conversion factor between lux and candela. To calculate Candela from Lux, you must multiply the illuminance in Lux by the square of the measurement distance in meters: cd = lx × (distance in meters)².",
    formulaDisplay: "cd = lx × d² (where d = distance in meters)",
    subtext: "At a standardized distance baseline of exactly 1 meter, 1 Lux corresponds to 1 Candela."
  },
  aboutSourceUnit: {
    title: "What is a Lux (lx)?",
    text: "The Lux (symbol: lx) is the SI unit of illuminance. It measures how much luminous flux (lumens) strikes a surface area of one square meter (1 lx = 1 lm/m²). Lux indicates how brightly illuminated a target surface (such as a desk, road surface, or sensor plane) actually appears."
  },
  aboutTargetUnit: {
    title: "Understanding Candela (cd)",
    text: "The Candela (symbol: cd) is one of the seven fundamental SI base units. It measures luminous intensity—the directional beam punch emitted by a light source into a solid angle of one steradian (1 cd = 1 lm/sr). Flashlights, spotlights, and automotive headlamps are rated in peak candela."
  },
  relationship: "Lux and Candela are physically linked by distance via the photometric inverse square law (E = I / d²). To find candela, multiply lux by distance squared in meters (I = E × d²). Doubling the distance quadruples the candela required to maintain the same lux level at the target plane.",
  relationshipTitle: "Lux vs Candela Scale Ratios (at 1m, 3m, 5m, and 10m Distances)",
  relationshipItems: [
    { label: "1 lx at 1 m", value: "1 cd (Standardized 1-meter radius baseline)" },
    { label: "1 lx at 3 m", value: "9 cd (3² = 9 multiplier for 3-meter measurement distance)" },
    { label: "1 lx at 5 m", value: "25 cd (5² = 25 multiplier for 5-meter measurement distance)" },
    { label: "1 lx at 10 m", value: "100 cd (10² = 100 multiplier for 10-meter measurement distance)" },
    { label: "100 lx at 10 m", value: "10,000 cd (High-intensity architectural spotlight beam)" }
  ],
  formula: {
    text: "Multiply the illuminance reading in Lux by the square of the measurement distance in meters to calculate Luminous Intensity in Candela.",
    math: "cd = lx × (d in meters)²",
    subtext: "If distance is measured in feet, first convert feet to meters (meters = feet × 0.3048) or use: cd = fc × (distance in feet)²."
  },
  formulaTitle: "Lux to Candela Inverse Square Formula",
  practicalTip: {
    title: "The Five-Times Rule for Photometric Validity",
    text: "The inverse square law formula (I = E × d²) assumes a point light source. For accurate candela calculations, the measurement distance (d) must be at least 5 times greater than the largest physical dimension of the luminaire fixture."
  },
  expertNote: {
    title: "ANSI/NEMA FL1 Flashlight Beam Ratings",
    text: "Flashlight manufacturers determine peak beam candela by measuring lux at a darkroom test distance (e.g., 2m or 10m) and applying I = E × d². Beam distance is defined as the distance where illuminance drops to 0.25 lux: Beam Distance = √(Peak Candela / 0.25)."
  },
  examples: {
    title: "Step-by-Step lx to cd Engineering Worked Examples",
    items: [
      {
        title: "Example 1: Studio Cinematography Spotlight at 3 Meters",
        subtitle: "A light meter records 500 Lux on an actor located 3 meters away from a studio spotlight. Calculate the beam intensity in Candela.",
        steps: [
          "Identify target illuminance: 500 lx.",
          "Identify distance: d = 3 meters.",
          "Calculate distance squared: 3² = 9 m².",
          "Apply formula: cd = 500 × 9 = 4,500.",
          "Final Result: 500 Lux at 3 meters corresponds to 4,500 Candela."
        ]
      },
      {
        title: "Example 2: Automotive High-Beam Headlamp Test at 25 Meters",
        subtitle: "An ECE headlamp compliance sensor measures 80 Lux at a distance of 25 meters. Determine peak center intensity in Candela.",
        steps: [
          "Identify illuminance: 80 lx.",
          "Identify measurement distance: d = 25 meters.",
          "Calculate distance squared: 25² = 625 m².",
          "Apply formula: cd = 80 × 625 = 50,000.",
          "Final Result: 80 Lux at 25 meters corresponds to 50,000 Candela."
        ]
      },
      {
        title: "Example 3: Architectural Floodlight at 10 Meters",
        subtitle: "Calculate intensity in Candela for a floodlight producing 120 Lux at a distance of 10 meters.",
        steps: [
          "Identify illuminance: 120 lx.",
          "Square the distance: 10² = 100 m².",
          "Multiply: 120 × 100 = 12,000.",
          "Final Result: 120 Lux at 10 meters corresponds to 12,000 Candela."
        ]
      }
    ]
  },
  table: {
    title: "Lux to Candela Engineering Calculation Matrix",
    headers: ["Lux Reading", "Distance (m)", "Calculated Intensity (cd)", "Photometric Application Context"],
    rows: [
      { fromVal: "1 lx", toVal: "1 m", extra: "1 cd", extra2: "Standardized 1-meter calibration baseline" },
      { fromVal: "10 lx", toVal: "2 m", extra: "40 cd", extra2: "Low-voltage garden pathway marker LED" },
      { fromVal: "50 lx", toVal: "3 m", extra: "450 cd", extra2: "Retail display track spotlight luminaire" },
      { fromVal: "100 lx", toVal: "5 m", extra: "2,500 cd", extra2: "Automotive auxiliary fog lamp peak beam" },
      { fromVal: "250 lx", toVal: "5 m", extra: "6,250 cd", extra2: "Theater stage reflector spotlight beam" },
      { fromVal: "500 lx", toVal: "3 m", extra: "4,500 cd", extra2: "High-bay industrial inspection luminaire" },
      { fromVal: "1,000 lx", toVal: "2 m", extra: "4,000 cd", extra2: "Surgical task lamp focal illumination" },
      { fromVal: "100 lx", toVal: "10 m", extra: "10,000 cd", extra2: "Architectural facade projection spotlight" },
      { fromVal: "500 lx", toVal: "10 m", extra: "50,000 cd", extra2: "Searchlight / emergency beacon beam" },
      { fromVal: "1,000 lx", toVal: "10 m", extra: "100,000 cd", extra2: "Long-throw tactical search light" }
    ]
  },
  applications: {
    title: "Industry Applications of Lux to Candela Engineering Calculations",
    items: [
      {
        title: "Automotive Headlamp Regulatory Compliance",
        text: "SAE J581 and ECE R112 testing laboratories record illuminance on a screen placed 25 meters from a headlamp to calculate beam intensity in candelas."
      },
      {
        title: "Aviation Runway Approach Light Testing",
        text: "Airport maintenance teams verify high-intensity approach light beacons (candela) by taking field lux measurements at designated calibration distances."
      },
      {
        title: "Tactical Flashlight & Searchlight Design",
        text: "Optical engineers evaluate reflector parabolic focus by measuring peak lux across darkroom distances to calculate center-beam candelas."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Calculating Candela from Lux",
    items: [
      "Assuming a fixed universal conversion factor: Lux and candela measure different physical properties; distance is mandatory.",
      "Ignoring the point-source rule: Measuring large LED panel lights at short distances invalidates the inverse square law.",
      "Mixing feet and meters: Distance must be in meters for lux, or distance in feet for foot-candles, to prevent scale errors by a factor of 10.76."
    ]
  },
  faqs: [
    {
      question: "Is there a direct fixed conversion factor between Lux and Candela?",
      answer: "No. Lux measures surface illuminance (lumens per m²) while Candela measures source intensity (lumens per steradian). The calculation depends strictly on measurement distance."
    },
    {
      question: "What is the formula to calculate Candela from Lux?",
      answer: "The formula is: Candela = Lux × (Distance in meters)²."
    },
    {
      question: "How many Candelas equal 1 Lux at 1 meter?",
      answer: "At a distance of exactly 1 meter, 1 Lux corresponds to 1 Candela."
    },
    {
      question: "What happens to Candela if I double the distance?",
      answer: "Because candela = lux × d², doubling the distance quadruples the candela required to deliver the same lux to the target."
    },
    {
      question: "How do I calculate Candela if distance is in feet?",
      answer: "Either convert feet to meters first (m = ft × 0.3048), or multiply foot-candles by (distance in feet)²."
    },
    {
      question: "What is the difference between Lumens, Lux, and Candela?",
      answer: "Lumens measure total light emitted in all directions; Candela measures beam strength in one direction; Lux measures light striking a specific surface."
    },
    {
      question: "Why do flashlight manufacturers list both Lumens and Candela?",
      answer: "Lumens indicate total raw light output, while Candela indicates beam concentration and throw distance."
    },
    {
      question: "How many Candelas is 100 Lux at 5 meters?",
      answer: "100 Lux × 5² = 100 × 25 = 2,500 Candela."
    }
  ],
  relatedList: [
    { label: "Lux to Foot-candle", from: "lux", to: "foot-candle" },
    { label: "Lux to Lumen", from: "lux", to: "lumen" },
    { label: "Lux to Candela ↔ Lux (at 1m)", from: "lux", to: "candela-lux-inverse" },
    { label: "Lux to Illuminance Converter", from: "lux", to: "illuminance-converter" }
  ],
  references: [
    "CIE 18.2: The Measurement of Luminous Flux and Intensity.",
    "ANSI/PLATO FL1 2019: Flashlight Basic Performance Standard.",
    "IES LM-79-19: Optical and Electrical Measurements of Solid-State Lighting Products."
  ]
};
