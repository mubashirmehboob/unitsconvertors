import { CustomArticleData } from "./types";

export const kilogramToGrain: CustomArticleData = {
  fromUnitId: "kilogram",
  toUnitId: "grain",
  seoTitle: "Kilogram to Grain Converter - kg to gr",
  metaDescription: "Convert kilograms to grains (kg to gr) with high-precision formulas. Learn the 15,432.36 conversion factor, ballistics powder charges, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-to-grain",
  h1: "Kilogram to Grain Converter",
  introduction: [
    "In precision ballistics, competitive archery, and specialty apothecary formulations, mass is traditionally specified in grains (gr). Meanwhile, industrial ammunition manufacturing, bulk powder propellant import consignments, and scientific balances operate strictly in kilograms.",
    "Because the international avoirdupois pound is legally defined as exactly 7,000 grains (0.45359237 kilograms), one grain equals exactly 64.79891 milligrams, meaning one kilogram contains approximately 15,432.36 grains. Converting kilograms to grains allows ammunition handloaders, ballistic engineers, and archery equipment designers to translate bulk raw materials into micro-precision measurements."
  ],
  quickAnswer: {
    text: "To convert kilograms to grains, multiply the kilogram value by approximately 15,432.35835 (or multiply by 7,000 and divide by 0.45359237). For example, 1 kilogram is equal to approximately 15,432.36 grains.",
    formulaDisplay: "Grains (gr) = Kilograms (kg) × 15,432.3584",
    subtext: "1 grain is defined as exactly 64.79891 milligrams (0.06479891 grams)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the fundamental base unit of mass in the International System of Units (SI). Defined since 2019 through the fixed Planck constant h (6.62607015 × 10⁻³⁴ J·s), the kilogram is the global scientific standard for commercial trade, chemical manufacturing, and precision scale calibration."
  },
  aboutTargetUnit: {
    title: "Understanding the Grain (gr)",
    text: "The grain (symbol: gr, not to be confused with gram 'g') is the smallest historical unit of mass in the traditional English troy, avoirdupois, and apothecaries' systems. Based originally on the average mass of a single cereal grain of barley or wheat, the grain was legally unified in 1959 under the International Yard and Pound Treaty, where one avoirdupois pound equals exactly 7,000 grains. It remains the dominant unit in small-arms ammunition ballistics and archery."
  },
  relationship: "The relationship between kilograms and grains is exact through the legal definition of the international avoirdupois pound: 1 lb = 7,000 grains = 0.45359237 kg. Consequently: 1 grain = 0.45359237 ÷ 7,000 kg = 0.00006479891 kg (64.79891 mg). Inverting this yields 1 kg = 7,000 ÷ 0.45359237 ≈ 15,432.3583529 grains.",
  relationshipTitle: "Exact Mathematical Ratio and Equivalences",
  relationshipItems: [
    { label: "1 Kilogram (kg)", value: "≈ 15,432.3584 Grains (gr)" },
    { label: "1 Grain (gr)", value: "Exactly 64.79891 Milligrams (0.06479891 g)" },
    { label: "1 Pound (lb)", value: "Exactly 7,000 Grains (0.45359237 kg)" },
    { label: "1 Gram (g)", value: "≈ 15.4324 Grains (gr)" }
  ],
  formula: {
    text: "To convert mass from kilograms into grains, multiply the kilogram measurement by 15,432.35835.",
    math: "\\text{Mass (gr)} = \\text{Mass (kg)} \\times 15,432.35835",
    subtext: "To convert grains back to kilograms: Mass (kg) = Mass (gr) × 0.00006479891"
  },
  formulaTitle: "Kilogram to Grain Conversion Formula",
  practicalTip: {
    title: "Two-Step Precision Method",
    text: "For quick calculations without a scientific conversion table: convert kilograms to pounds first (multiply by 2.20462), then multiply by 7,000 (since 1 lb = 7,000 grains). For example, 0.5 kg × 2.20462 ≈ 1.10231 lb; 1.10231 × 7,000 ≈ 7,716.2 grains."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Bulk Smokeless Propellant Sizing",
        subtitle: "A commercial ammunition loading facility imports a 25-kilogram drum of canister smokeless rifle powder. Calculate the total charge capacity in grains.",
        steps: [
          "State bulk mass: 25 kg.",
          "Apply conversion formula: gr = kg × 15,432.35835.",
          "Calculate: 25 × 15,432.35835 ≈ 385,808.96.",
          "Conclusion: The 25 kg drum provides approximately 385,809 grains of propellant."
        ]
      },
      {
        title: "Example 2: Handloading Cartridge Yield Estimation",
        subtitle: "A handloader has 0.5 kilograms of pistol powder and loads 5.0 grains per 9mm cartridge. How many rounds can be loaded?",
        steps: [
          "Convert 0.5 kg to grains: 0.5 × 15,432.35835 ≈ 7,716.18 gr.",
          "Divide by charge weight: 7,716.18 gr ÷ 5.0 gr/round ≈ 1,543.2 rounds.",
          "Conclusion: Half a kilogram yields approximately 1,543 completed cartridges."
        ]
      },
      {
        title: "Example 3: Lead Bullet Casting Ingot Mass",
        subtitle: "A bullet caster casts 158-grain revolver bullets from a 10-kilogram lead alloy ingot. Calculate ingot capacity in grains.",
        steps: [
          "Identify ingot weight: 10 kg.",
          "Convert to grains: 10 × 15,432.35835 = 154,323.58 gr.",
          "Estimate bullet count: 154,323.58 ÷ 158 ≈ 976 bullets.",
          "Conclusion: The 10 kg ingot yields roughly 976 projectiles of 158 grains each."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram to Grain Quick Reference Table",
    headers: ["Kilograms (kg)", "Grains (gr)", "Grams (g)", "Pounds (lb)"],
    rows: [
      { fromVal: "0.01 kg", toVal: "154.32 gr", extra: "10 g", extra2: "0.022 lb" },
      { fromVal: "0.05 kg", toVal: "771.62 gr", extra: "50 g", extra2: "0.110 lb" },
      { fromVal: "0.10 kg", toVal: "1,543.24 gr", extra: "100 g", extra2: "0.220 lb" },
      { fromVal: "0.4536 kg", toVal: "7,000.00 gr", extra: "453.59 g", extra2: "1.000 lb" },
      { fromVal: "0.50 kg", toVal: "7,716.18 gr", extra: "500 g", extra2: "1.102 lb" },
      { fromVal: "1.00 kg", toVal: "15,432.36 gr", extra: "1,000 g", extra2: "2.205 lb" },
      { fromVal: "2.00 kg", toVal: "30,864.72 gr", extra: "2,000 g", extra2: "4.409 lb" },
      { fromVal: "5.00 kg", toVal: "77,161.79 gr", extra: "5,000 g", extra2: "11.023 lb" },
      { fromVal: "10.00 kg", toVal: "154,323.58 gr", extra: "10,000 g", extra2: "22.046 lb" },
      { fromVal: "25.00 kg", toVal: "385,808.96 gr", extra: "25,000 g", extra2: "55.116 lb" }
    ]
  },
  expertNote: {
    title: "Grain Symbol vs. Gram Symbol Confusion",
    text: "A critical safety pitfall in ammunition handloading and apothecary compounding is confusing the symbol 'gr' (grain) with 'g' (gram). Since 1 gram equals 15.432 grains, mistaking 5 grams of smokeless gunpowder for 5 grains would result in a 1,543% propellant overcharge—causing catastrophic firearm chamber rupture. Always distinguish 'gr' (grain) from 'g' (gram)."
  },
  applications: {
    title: "Practical Ballistics & Specialized Engineering Scenarios",
    items: [
      {
        title: "Ammunition Propellant Loading and Quality Control",
        text: "Industrial powder dispensers meter powder in grains while automated hopper scales weigh raw propellant bins in kilograms. Converting bulk weights to grains ensures accurate cartridge fill calculations."
      },
      {
        title: "Competitive Archery Arrow Weight Tuning",
        text: "Archers measure arrow shafts, inserts, fletchings, and broadhead tips in grains to calibrate front-of-center (FOC) balance and kinetic energy. Bulk carbon fiber and aluminum raw stock are quantified in kilograms."
      },
      {
        title: "Dentistry and Precious Metal Foil Compounding",
        text: "Restorative dentistry historical formulations and gold foil malleting procedures traditionally rate precious metal weights in grains, converting certified bullion bar purchases from kilograms."
      }
    ]
  },
  pitfalls: {
    title: "Common Industry Pitfalls",
    items: [
      "Confusing 'gr' (grains) with 'g' (grams): 1 g = 15.43 gr. Confusing these two symbols in pyrotechnics or ballistics can be dangerous.",
      "Dividing by 15,432 instead of multiplying: Grains are microscopic units compared to kilograms, so converting kilograms to grains must yield a very large number.",
      "Using rough approximations in powder charge safety: In internal ballistics, tenths of a grain matter. Using an imprecise factor like 15,000 gr/kg introduces an unacceptable 2.8% error.",
      "Overlooking propellant density differences: Grains measure mass, not volume. Different gunpowder formulations have varying bulk densities; never equate volumetric scoops with weighed grains without calibrating."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilograms to grains?",
      answer: "To convert kilograms (kg) to grains (gr), multiply the kilogram value by 15,432.35835. For example, 2 kg multiplied by 15,432.36 equals approximately 30,864.72 grains."
    },
    {
      question: "How many grains are in 1 kilogram?",
      answer: "There are approximately 15,432.36 grains in 1 kilogram (precisely 7,000 ÷ 0.45359237 ≈ 15,432.3583529 gr)."
    },
    {
      question: "How many milligrams is 1 grain?",
      answer: "One grain is defined as exactly 64.79891 milligrams (0.06479891 grams)."
    },
    {
      question: "What is 1 pound in grains?",
      answer: "One international avoirdupois pound is equal to exactly 7,000 grains."
    },
    {
      question: "How do I convert grains back to kilograms?",
      answer: "To convert grains back to kilograms, multiply the grain value by 0.00006479891 (or divide by 15,432.358). For instance, 7,000 grains × 0.00006479891 ≈ 0.45359 kg (1 lb)."
    },
    {
      question: "Why does the firearms industry still use grains?",
      answer: "The grain offers an ideal scale of granularity for small arms: common bullet weights range from 40 to 250 grains, and powder charges vary in precise tenth-of-a-grain increments (e.g., 42.5 gr) without cumbersome multi-digit decimals."
    },
    {
      question: "What is the symbol for grain?",
      answer: "The official symbol for grain is 'gr'. The symbol for gram is 'g'."
    },
    {
      question: "How many grains are in 1 gram?",
      answer: "One gram contains approximately 15.4324 grains (1 ÷ 0.06479891 ≈ 15.4324 gr)."
    },
    {
      question: "What is the origin of the grain unit?",
      answer: "The grain was historically based on the weight of a single plump kernel of wheat or barley taken from the middle of the ear, standardized internationally in 1959."
    }
  ],
  relatedList: [
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" },
    { label: "Kilogram to Gram", from: "kilogram", to: "gram" },
    { label: "Gram to Grain", from: "gram", to: "grain" },
    { label: "Grain to Kilogram", from: "grain", to: "kilogram" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "National Institute of Standards and Technology (NIST). <em>Refinement of Values for the Yard and the Pound</em>.",
    "Sporting Arms and Ammunition Manufacturers' Institute (SAAMI). <em>Glossary of Industry Terms</em>."
  ]
};
