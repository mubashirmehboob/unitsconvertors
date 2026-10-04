import { CustomArticleData } from "./types";

export const ampereToKiloampere: CustomArticleData = {
  fromUnitId: "ampere",
  toUnitId: "kiloampere",
  seoTitle: "Ampere to Kiloampere Converter (A to kA) | UnitsConvertors.com",
  metaDescription: "Convert Amperes to Kiloamperes (A to kA) instantly. Master the 1,000 division formula, worked examples, conversion table, switchgear AIC ratings, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/ampere-to-kiloampere",
  h1: "Ampere to Kiloampere Converter",
  introduction: [
    "The <strong>Ampere (A)</strong> is the foundational International System of Units (SI) base unit for electric current, while the <strong>Kiloampere (kA)</strong> is its decimal multiple representing 1,000 amperes (10³ A). In electrical power generation, high-voltage transmission substations, industrial arc furnaces, and short-circuit fault current analysis, currents frequently reach magnitudes where kiloamperes provide a clearer, more practical engineering representation.",
    "Because the SI prefix <em>kilo-</em> represents exactly one thousand units, one kiloampere equals 1,000 amperes. Converting amperes to kiloamperes is calculated by dividing the current in amperes by 1,000 (or multiplying by 0.001).",
    "This engineering reference explains the mathematical conversion method, provides step-by-step worked calculations, conversion tables, switchgear interrupting capacity rules, common calculation errors, and answers to frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert Amperes to Kiloamperes, divide the current in amperes by 1,000 (or multiply by 0.001). For example, a fault current of 25,000 A equals 25 kA, and 4,800 A equals 4.8 kA.",
    formulaDisplay: "kA = A / 1,000",
    subtext: "1 Kiloampere (kA) = 1,000 Amperes (A) exactly; 1 A = 0.001 kA."
  },
  aboutSourceUnit: {
    title: "What is an Ampere (A)?",
    text: "The <strong>Ampere</strong> (symbol: <strong>A</strong>) is the SI base unit measuring the rate of electric charge flow. Following the 2019 CGPM redefinition, the ampere is defined by fixing the elementary charge <em>e</em> at 1.602176634 × 10⁻¹⁹ coulombs. One ampere equals one coulomb of charge passing through a conductor per second (1 A = 1 C/s)."
  },
  aboutTargetUnit: {
    title: "What is a Kiloampere (kA)?",
    text: "The <strong>Kiloampere</strong> (symbol: <strong>kA</strong>) is a decimal multiple of the ampere equal to 1,000 amperes (10³ A). Kiloamperes are universally used by utility engineers, power plant operators, and industrial electricians to specify electrical substation busbar capacities, lightning strike intensities, and circuit breaker short-circuit interrupting ratings (AIC / SCCR)."
  },
  relationship: "1 Kiloampere equals exactly 1,000 Amperes. Conversely, 1 Ampere equals exactly 0.001 (10⁻³) Kiloamperes.",
  relationshipTitle: "Ampere to Kiloampere Metric Scaling",
  relationshipItems: [
    { label: "100 A", value: "0.1 kA" },
    { label: "500 A", value: "0.5 kA" },
    { label: "1,000 A", value: "1.0 kA" },
    { label: "5,000 A", value: "5.0 kA" },
    { label: "10,000 A", value: "10.0 kA" },
    { label: "50,000 A", value: "50.0 kA" },
    { label: "100,000 A", value: "100.0 kA" }
  ],
  formula: {
    text: "Divide the electric current value in amperes by 1,000 (or multiply by 10⁻³) to determine the equivalent value in kiloamperes.",
    math: "I_{(kA)} = \\frac{I_{(A)}}{1,000} = I_{(A)} × 10^{-3}",
    subtext: "To convert kiloamperes back to amperes, multiply the current value in kiloamperes by 1,000."
  },
  formulaTitle: "Ampere to Kiloampere Formula",
  practicalTip: {
    title: "Three-Digit Decimal Shift",
    text: "To convert amperes to kiloamperes mentally, shift the decimal point three places to the left. For example, 32,500 A becomes 32.5 kA."
  },
  expertNote: {
    title: "Circuit Breaker Interrupting Rating (AIC / SCCR)",
    text: "Under the National Electrical Code (NEC Article 110.9) and IEC 60947, electrical equipment must have an Ampere Interrupting Capacity (AIC) or Short-Circuit Current Rating (SCCR) exceeding the maximum available fault current. Engineers always calculate available fault currents in kiloamperes (e.g., 65 kA symmetrical) to specify properly rated switchgear."
  },
  examples: {
    title: "Step-by-Step Manual Calculation Examples",
    items: [
      {
        title: "Example 1: Utility Transformer Short-Circuit Fault Current",
        subtitle: "A 2,500 kVA substation transformer has a calculated prospective three-phase bolted fault current of 42,000 Amperes. Convert this value to kiloamperes.",
        steps: [
          "Identify the given fault current: I = 42,000 A.",
          "Apply the conversion formula: I_(kA) = I_(A) / 1,000.",
          "Perform the division: 42,000 / 1,000 = 42 kA.",
          "State conclusion: 42,000 Amperes equals exactly 42 Kiloamperes."
        ]
      },
      {
        title: "Example 2: Industrial Arc Furnace Electrode Current",
        subtitle: "A steel manufacturing electric arc furnace operates at a continuous electrode current of 65,000 Amperes. Convert this current to kiloamperes.",
        steps: [
          "Identify initial current value: I = 65,000 A.",
          "Multiply by 0.001: 65,000 × 0.001 = 65 kA.",
          "Result: 65,000 Amperes equals 65 Kiloamperes."
        ]
      },
      {
        title: "Example 3: Natural Lightning Discharge Current",
        subtitle: "A cloud-to-ground lightning return stroke discharges a peak current of 30,000 Amperes. Express this peak discharge in kiloamperes.",
        steps: [
          "Starting parameter: I = 30,000 A.",
          "Divide by 1,000: 30,000 / 1,000 = 30 kA.",
          "Final answer: The lightning stroke current is 30 kA."
        ]
      },
      {
        title: "Example 4: Main Distribution Switchboard Rating",
        subtitle: "A low-voltage facility switchboard is supplied by an incoming busbar carrying 3,200 Amperes. Express this load in kiloamperes.",
        steps: [
          "Given current: I = 3,200 A.",
          "Calculate: 3,200 / 1,000 = 3.2 kA.",
          "Result: 3,200 Amperes equals 3.2 kA."
        ]
      }
    ]
  },
  table: {
    title: "Ampere to Kiloampere Conversion Reference Table",
    headers: ["Amperes (A)", "Kiloamperes (kA)", "Megamperes (MA)", "Typical Electrical Industry Context"],
    rows: [
      { fromVal: "100 A", toVal: "0.1 kA", extra: "0.0001 MA", extra2: "Residential service feeder" },
      { fromVal: "500 A", toVal: "0.5 kA", extra: "0.0005 MA", extra2: "Commercial distribution panel" },
      { fromVal: "1,000 A", toVal: "1.0 kA", extra: "0.001 MA", extra2: "1 Kiloampere threshold" },
      { fromVal: "2,000 A", toVal: "2.0 kA", extra: "0.002 MA", extra2: "Substation low-voltage breaker" },
      { fromVal: "5,000 A", toVal: "5.0 kA", extra: "0.005 MA", extra2: "Industrial plant service entrance" },
      { fromVal: "10,000 A", toVal: "10.0 kA", extra: "0.01 MA", extra2: "Standard residential AIC rating (10 kAIC)" },
      { fromVal: "22,000 A", toVal: "22.0 kA", extra: "0.022 MA", extra2: "Commercial 22 kAIC breaker rating" },
      { fromVal: "42,000 A", toVal: "42.0 kA", extra: "0.042 MA", extra2: "Medium-voltage utility short circuit" },
      { fromVal: "65,000 A", toVal: "65.0 kA", extra: "0.065 MA", extra2: "Heavy industrial 65 kAIC switchgear" },
      { fromVal: "100,000 A", toVal: "100.0 kA", extra: "0.1 MA", extra2: "High-energy utility fault current" }
    ]
  },
  applications: {
    title: "Power Engineering and Heavy Industry Applications",
    items: [
      {
        title: "Short-Circuit Fault Current Calculations (AIC / SCCR)",
        text: "Power systems engineers perform IEEE 141 and IEEE 242 short-circuit studies to determine prospective bolted fault currents. Equipment nameplates specify interrupting capacity strictly in kiloamperes (e.g., 14 kAIC, 22 kAIC, 65 kAIC). Converting raw calculated ampere values to kiloamperes prevents specifying undersized circuit breakers that could catastrophically explode under fault conditions."
      },
      {
        title: "Lightning Protection and Grounding System Design",
        text: "Direct lightning strikes deliver rapid impulse currents typically ranging between 10 kA and 100 kA, with extreme strikes exceeding 200 kA. Engineers size grounding down-conductors and surge protective devices (SPDs) according to NFPA 780 and IEC 62305 based on kiloampere ratings."
      },
      {
        title: "Electric Arc Furnaces and Smelting Facilities",
        text: "In metallurgical processing and secondary steelmaking, alternating-current (AC) or direct-current (DC) electric arc furnaces utilize graphite electrodes conducting 50 kA to 120 kA to melt scrap iron at temperatures exceeding 3,000°C."
      },
      {
        title: "Electrochemical Chlor-Alkali and Aluminum Production",
        text: "Industrial electrolysis cells producing chlorine, caustic soda, and primary aluminum require high-current DC rectifiers operating continuously at dozens to hundreds of kiloamperes, requiring massive copper busbar distribution."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Multiplying Instead of Dividing: Because a kiloampere is 1,000 times larger than an ampere, the numerical value must decrease. Multiplying by 1,000 results in an error of six orders of magnitude (1,000,000×).",
      "Confusing Symmetrical and Asymmetrical Fault Currents: In AC power systems, fault currents have an initial DC offset that causes asymmetrical peak kiloamperes to exceed steady-state symmetrical RMS kiloamperes by a factor of 1.6 to 2.7.",
      "Mismatched Prefix Capitalization: The metric symbol for kilo is lowercase 'k', while Ampere is uppercase 'A'. The correct symbol is 'kA', not 'KA' or 'ka'.",
      "Overlooking Continuous Rating vs Interrupting Rating: A circuit breaker may have a continuous current rating of 800 A (0.8 kA), but an interrupting capacity rating of 65 kA. Confusing these two parameters is a hazardous electrical safety violation."
    ]
  },
  faqs: [
      {
        question: "How many amperes are in one kiloampere?",
        answer: "There are exactly 1,000 amperes in one kiloampere (1 kA = 1,000 A)."
      },
      {
        question: "What is the formula to convert amperes to kiloamperes?",
        answer: "The formula is: Current in kA = Current in A / 1,000 (or kA = A × 0.001)."
      },
      {
        question: "How do I convert kiloamperes back to amperes?",
        answer: "Multiply the kiloampere value by 1,000. For example, 15 kA × 1,000 = 15,000 A."
      },
      {
        question: "What does 'kA' mean on a circuit breaker?",
        answer: "On a circuit breaker, 'kA' typically denotes the Ampere Interrupting Capacity (AIC) or short-circuit breaking capacity (e.g., 10 kA or 22 kA). This specifies the maximum fault current the breaker can safely interrupt without rupturing or welding closed."
      },
      {
        question: "How do I convert 4,500 amperes to kiloamperes?",
        answer: "Divide 4,500 by 1,000: 4,500 / 1,000 = 4.5 kA."
      },
      {
        question: "How many kiloamperes is a typical lightning strike?",
        answer: "A typical negative cloud-to-ground lightning strike carries an average peak current of approximately 30 kA (30,000 A), with rare positive strikes reaching 150 kA to 300 kA."
      },
      {
        question: "What is the difference between a kiloampere and a megampere?",
        answer: "A kiloampere (kA) equals 1,000 amperes (10³ A), whereas a megampere (MA) equals 1,000,000 amperes (10⁶ A). One megampere contains 1,000 kiloamperes."
      },
      {
        question: "Why do power engineers use kiloamperes instead of amperes?",
        answer: "Utility fault currents and industrial loads span tens of thousands of amperes. Using kiloamperes avoids large, cumbersome numbers and reduces formatting errors in single-line electrical diagrams."
      },
      {
        question: "Is kiloampere an official SI unit?",
        answer: "Yes. The kiloampere is an official SI decimal multiple combining the base unit 'ampere' with the SI prefix 'kilo' (k, representing 10³)."
      },
      {
        question: "How many kiloamperes are in 1 Biot?",
        answer: "Because 1 Biot equals 10 amperes, 1 Biot equals 10 / 1,000 = 0.01 kA."
      }
    ],
  relatedList: [
    { label: "Ampere to Milliampere", from: "ampere", to: "milliampere" },
    { label: "Ampere to Microampere", from: "ampere", to: "microampere" },
    { label: "Ampere to Biot", from: "ampere", to: "biot" },
    { label: "Milliampere to Kiloampere", from: "milliampere", to: "kiloampere" },
    { label: "Microampere to Kiloampere", from: "microampere", to: "kiloampere" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM): The International System of Units (SI Brochure, 9th Edition, 2019).",
    "IEEE Std 141: Recommended Practice for Electric Power Distribution for Industrial Plants (IEEE Red Book).",
    "NFPA 70: National Electrical Code (NEC), Article 110.9 (Interrupting Rating).",
    "IEC 60947-2: Low-voltage switchgear and controlgear - Part 2: Circuit-breakers."
  ]
};
