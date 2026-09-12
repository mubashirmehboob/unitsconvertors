import { CustomArticleData } from "./types";

export const kilogramToSlug: CustomArticleData = {
  fromUnitId: "kilogram",
  toUnitId: "slug",
  seoTitle: "Kilogram to Slug Converter - kg to slug",
  metaDescription: "Convert kilograms to slugs (kg to slug) with aerospace engineering precision. Learn the 14.5939 division rule, aerodynamics air density formulas, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-to-slug",
  h1: "Kilogram to Slug Converter",
  introduction: [
    "In aerospace engineering, flight dynamics simulations, and classical mechanics within the British Gravitational System, mass is expressed in slugs rather than pounds-mass. Meanwhile, global aerospace manufacturing, modern wind tunnel testing, and satellite telemetry operate in kilograms.",
    "Unlike the pound-mass, which requires an awkward gravitational conversion constant ($g_c$) in Newton's second law ($F = m a$), the slug is a coherent unit of mass defined such that a force of one pound-force (1 lbf) accelerates a mass of one slug at exactly one foot per second squared ($1\\text{ ft/s}^2$). Because one slug equals approximately 14.59390 kilograms, converting kilograms to slugs is essential for aerodynamicists translating aircraft weights and air densities into imperial flight equations."
  ],
  quickAnswer: {
    text: "To convert kilograms to slugs, divide the kilogram value by approximately 14.593903, or multiply by 0.06852177. For example, 100 kilograms equals approximately 6.852 slugs.",
    formulaDisplay: "Mass (slug) = Kilograms (kg) ÷ 14.593903",
    subtext: "1 slug is equal to approximately 14.593903 kilograms (or 32.17405 pounds of mass)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the coherent SI base unit of mass. Defined through the Planck constant h (6.62607015 × 10⁻³⁴ J·s), the kilogram governs mass across physics, international manufacturing, and global standards. Under Earth's standard gravitational acceleration ($g = 9.80665\\text{ m/s}^2$), a one-kilogram mass exerts a gravitational downward force of 9.80665 newtons."
  },
  aboutTargetUnit: {
    title: "Understanding the Slug (slug)",
    text: "The slug (symbol: slug) is the coherent unit of mass in the gravitational foot-pound-second (FPS) engineering system. Developed by British physicist Oliver Lodge in the late 19th century and popularized in William John Macquorn Rankine's texts, the slug avoids confusion between mass and force. A mass of one slug weighs exactly 32.17405 pounds-force on Earth's surface at standard sea level."
  },
  relationship: "The relationship between kilograms and slugs is derived by equating force and acceleration across unit systems: 1 lbf = 4.4482216152605 N. In the FPS system, 1 slug = 1 lbf ÷ (1 ft/s²). Since 1 ft = 0.3048 m, 1 slug = 4.448221615 N ÷ 0.3048 m/s² = 14.5939029372 kg. Inverting this factor yields 1 kg ≈ 0.06852177 slugs.",
  relationshipTitle: "Physical Derivation and Gravitational Equivalence",
  relationshipItems: [
    { label: "1 Slug (slug)", value: "≈ 14.593903 Kilograms (kg)" },
    { label: "1 Slug (in Pounds)", value: "≈ 32.17405 Pounds-Mass (lbm)" },
    { label: "1 Kilogram (kg)", value: "≈ 0.06852177 Slugs" },
    { label: "Newton's Second Law Coherence", value: "1 lbf = 1 slug × 1 ft/s²" }
  ],
  formula: {
    text: "To convert mass from kilograms to slugs, divide the kilogram value by 14.5939029, or multiply by 0.06852177.",
    math: "\\text{Mass (slug)} = \\frac{\\text{Mass (kg)}}{14.5939029} = \\text{Mass (kg)} \\times 0.06852177",
    subtext: "To convert slugs back to kilograms: Mass (kg) = Mass (slug) × 14.5939029"
  },
  formulaTitle: "Kilogram to Slug Conversion Formula",
  practicalTip: {
    title: "The 32.2 Gravitational Factor Shortcut",
    text: "If you remember that 1 slug equals 32.174 pounds, you can convert kilograms to pounds first (multiply by 2.20462), then divide by 32.174 to obtain slugs. For example, 1,000 kg × 2.20462 = 2,204.62 lb; 2,204.62 ÷ 32.174 ≈ 68.52 slugs."
  },
  examples: {
    title: "Step-by-Step Aerospace Calculation Examples",
    items: [
      {
        title: "Example 1: UAV Takeoff Mass for Flight Simulation",
        subtitle: "An unmanned aerial vehicle (UAV) has an empty mass of 450 kilograms. Convert this mass to slugs for input into a 6-DOF aerodynamic flight simulator.",
        steps: [
          "State UAV mass: 450 kg.",
          "Apply conversion formula: slug = kg ÷ 14.593903.",
          "Calculate: 450 ÷ 14.593903 ≈ 30.8348.",
          "Conclusion: The 450 kg UAV has a mass of approximately 30.835 slugs."
        ]
      },
      {
        title: "Example 2: Rocket Payload Adapter Sizing",
        subtitle: "A satellite payload weighs 1,250 kilograms on the launch pad. Calculate the payload mass in slugs for structural vibration analysis.",
        steps: [
          "Given payload mass: 1,250 kg.",
          "Multiply by 0.06852177: 1,250 × 0.06852177 ≈ 85.6522.",
          "Conclusion: The satellite mass corresponds to approximately 85.65 slugs."
        ]
      },
      {
        title: "Example 3: Wind Tunnel Wing Model Inertia",
        subtitle: "Convert a 25-kilogram wind tunnel flutter test model into slugs.",
        steps: [
          "Identify value: 25 kg.",
          "Calculate: 25 ÷ 14.593903 ≈ 1.7130.",
          "Conclusion: The test model mass equals approximately 1.713 slugs."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram to Slug Quick Reference Table",
    headers: ["Kilograms (kg)", "Slugs (slug)", "Pounds-Mass (lbm)", "Weight at Sea Level (lbf)"],
    rows: [
      { fromVal: "1 kg", toVal: "0.0685 slug", extra: "2.205 lbm", extra2: "2.205 lbf" },
      { fromVal: "5 kg", toVal: "0.3426 slug", extra: "11.023 lbm", extra2: "11.023 lbf" },
      { fromVal: "10 kg", toVal: "0.6852 slug", extra: "22.046 lbm", extra2: "22.046 lbf" },
      { fromVal: "14.59 kg", toVal: "1.0000 slug", extra: "32.174 lbm", extra2: "32.174 lbf" },
      { fromVal: "50 kg", toVal: "3.4261 slug", extra: "110.231 lbm", extra2: "110.231 lbf" },
      { fromVal: "100 kg", toVal: "6.8522 slug", extra: "220.462 lbm", extra2: "220.462 lbf" },
      { fromVal: "500 kg", toVal: "34.2609 slug", extra: "1,102.311 lbm", extra2: "1,102.311 lbf" },
      { fromVal: "1,000 kg", toVal: "68.5218 slug", extra: "2,204.623 lbm", extra2: "2,204.623 lbf" },
      { fromVal: "5,000 kg", toVal: "342.6088 slug", extra: "11,023.113 lbm", extra2: "11,023.113 lbf" },
      { fromVal: "10,000 kg", toVal: "685.2177 slug", extra: "22,046.226 lbm", extra2: "22,046.226 lbf" }
    ]
  },
  expertNote: {
    title: "Aerodynamics Air Density: kg/m³ vs. slug/ft³",
    text: "In aerodynamic lift equations ($L = \\frac{1}{2} \\rho V^2 S C_L$), air density $\\rho$ in the metric system is approximately $1.225\\text{ kg/m}^3$ at standard sea level (ISA). In the English system, using slugs is mandatory to prevent inserting $g$: $\\rho = 0.002377\\text{ slug/ft}^3$. Forgetting to use slugs when calculating aerodynamic forces with imperial velocities in ft/s results in lift forces off by a factor of 32.2."
  },
  applications: {
    title: "Practical Aerospace & Mechanical Scenarios",
    items: [
      {
        title: "Aircraft Dynamic Flight Simulation",
        text: "Legacy and modern US flight simulation engines (such as JSBSim, NASA flight models, and military combat simulators) calculate rigid-body equations of motion using moments of inertia expressed in slug-ft², requiring conversion of metric CAD mass properties."
      },
      {
        title: "Aerodynamic Wind Tunnel Coefficient Processing",
        text: "Aeronautical test facilities operating with US customary units measure dynamic pressure ($q = \\frac{1}{2}\\rho v^2$) using air density in slugs per cubic foot, requiring test article masses in kilograms to be converted to slugs."
      },
      {
        title: "Rocket Trajectory and Staging Dynamics",
        text: "Propulsion engineers analyzing multi-stage rocket burnouts often convert dry stage masses from kilograms into slugs when verifying payload acceleration curves against imperial customer requirements."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Confusing slug with pound-mass (lbm): A slug is 32.174 times larger than a pound-mass. Using pounds instead of slugs in $F = m a$ without dividing by $g_c$ creates an error of over 3,200%.",
      "Multiplying by 14.59 instead of dividing: Because a slug is a large unit (~14.6 kg), converting kilograms to slugs must produce a smaller number.",
      "Overlooking the slinch (blob): In structural stress analysis, engineers sometimes use the 'slinch' (1 lbf·s²/in = 12 slugs = 175.13 kg). Never confuse a standard slug (ft-based) with a slinch (inch-based).",
      "Assuming the slug changes with local gravity: The slug is an absolute unit of invariant mass. Its mass remains constant whether on Earth, on the Moon, or in orbital freefall."
    ]
  },
  faqs: [
    {
      question: "How do I convert kilograms to slugs?",
      answer: "To convert kilograms (kg) to slugs, divide the kilogram value by 14.593903, or multiply by 0.06852177. For example, 500 kg divided by 14.5939 equals approximately 34.261 slugs."
    },
    {
      question: "What is a slug in kilograms?",
      answer: "One slug is equal to approximately 14.593903 kilograms (14,593.9 grams)."
    },
    {
      question: "How many pounds-mass is 1 slug?",
      answer: "One slug has a mass of approximately 32.17405 pounds-mass (lbm), which exerts 32.174 pounds-force of weight under standard Earth gravity."
    },
    {
      question: "Why was the slug invented?",
      answer: "The slug was created to make Newton's second law ($F = m a$) coherent in the imperial system: one pound of force accelerates a mass of one slug at 1 ft/s², eliminating the need for a gravitational constant ($g_c$) in dynamic equations."
    },
    {
      question: "How do I convert slugs back to kilograms?",
      answer: "To convert slugs back to kilograms, multiply the slug value by 14.593903. For instance, 10 slugs × 14.5939 = 145.939 kg."
    },
    {
      question: "What is 1,000 kg in slugs?",
      answer: "1,000 kilograms is equal to approximately 68.522 slugs (1,000 ÷ 14.593903 ≈ 68.522)."
    },
    {
      question: "Who uses slugs today?",
      answer: "Slugs are primarily used by aerospace engineers, aerodynamicists, and flight simulation developers in the United States when working with US customary units (feet, seconds, pounds-force)."
    },
    {
      question: "What is the symbol for the slug?",
      answer: "The unit is written out as 'slug' (plural 'slugs') without a single-letter abbreviation to prevent confusion with second (s)."
    },
    {
      question: "Does the mass of a slug vary on other planets?",
      answer: "No. The slug is an intrinsic measure of mass (inertia), not weight. A 1-slug mass has the exact same inertia (14.594 kg) on Mars or the Moon as it does on Earth."
    }
  ],
  relatedList: [
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" },
    { label: "Kilogram to Gram", from: "kilogram", to: "gram" },
    { label: "Pound to Slug", from: "pound", to: "slug" },
    { label: "Slug to Kilogram", from: "slug", to: "kilogram" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>, 9th Edition.",
    "Anderson, John D. <em>Introduction to Flight</em>. McGraw-Hill Education.",
    "National Institute of Standards and Technology (NIST). <em>Guide for the Use of the International System of Units</em>."
  ]
};
