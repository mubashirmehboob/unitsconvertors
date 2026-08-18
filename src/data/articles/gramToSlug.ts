import { CustomArticleData } from "./types";

export const gramToSlug: CustomArticleData = {
  fromUnitId: "gram",
  toUnitId: "slug",
  seoTitle: "Gram to Slug Converter - g to slug",
  metaDescription: "Convert grams to slugs (g to slug) for aerospace engineering and physics calculations. Learn the conversion formula, standard gravity definitions, and worked examples.",
  canonicalUrl: "https://unitsconvertors.com/gram-to-slug",
  h1: "Gram to Slug Converter",
  introduction: [
    "The gram and the slug represent mass in two distinctly different physical frameworks: the metric International System of Units (SI) and the British Gravitational System (Imperial/US engineering units). While the gram measures everyday and laboratory mass, the slug is specifically designed so that Newton's second law ($F = m \\cdot a$) operates cleanly without requiring a gravitational proportionality constant.",
    "Engineers in aerospace, fluid dynamics, ballistics, and flight mechanics frequently encounter the slug when working with Imperial imperial units like pounds-force (lbf) and feet per second squared (ft/s²). Understanding how to convert small metric masses in grams to slugs provides the essential link between metric laboratory measurements and traditional aeronautical engineering equations."
  ],
  quickAnswer: {
    text: "To convert grams to slugs, divide the gram value by 14,593.9029 (or multiply by 0.0000685218). For example, 1,000 grams (1 kg) equals approximately 0.06852 slugs.",
    formulaDisplay: "1 g ≈ 0.0000685218 slug",
    subtext: "Divide the mass in grams by 14,593.9029 to calculate the exact mass in slugs."
  },
  aboutSourceUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a metric unit of mass equal to 1/1,000 of a kilogram. Standardized globally under the SI system, the gram is independent of gravitational field strength and measures the intrinsic quantity of matter in an object. It is used universally across scientific chemistry, physics, industrial manufacturing, and commerce."
  },
  aboutTargetUnit: {
    title: "Understanding the Slug (slug)",
    text: "The slug (symbol: slug) is the coherent unit of mass in the gravitational foot-pound-second (FPS) engineering system. By definition, a mass of one slug accelerates at 1 foot per second squared (1 ft/s²) when acted upon by a net force of one pound-force (1 lbf). One slug equals approximately 32.174049 pounds-mass (lb) or exactly 14.5939029372 kilograms (14,593.9029 grams)."
  },
  relationship: "Because standard gravitational acceleration ($g_0$) is defined internationally as 32.17404856 ft/s² (9.80665 m/s²), one slug equals $32.17404856 \\times 0.45359237\\text{ kg} \\approx 14.5939029\\text{ kg} = 14,593.9029\\text{ g}$. Therefore, 1 gram equals approximately $6.8521765 \\times 10^{-5}$ slugs.",
  relationshipTitle: "Physical and Mathematical Relationship",
  relationshipItems: [
    { label: "1 Gram (g)", value: "≈ 0.0000685218 Slugs" },
    { label: "1 Slug (slug)", value: "14,593.9029 Grams (g)" },
    { label: "1 Kilogram (kg)", value: "0.0685218 Slugs" },
    { label: "1 Slug (slug)", value: "32.17405 Pounds-mass (lb)" }
  ],
  formula: {
    text: "To convert mass from grams to slugs, divide the value in grams by 14,593.9029, or multiply by the conversion factor 0.000068521765.",
    math: "Mass in Slugs (slug) = Mass in Grams (g) / 14,593.9029",
    subtext: "Or: slug = g × 0.000068521765"
  },
  formulaTitle: "Gram to Slug Conversion Formula",
  practicalTip: {
    title: "Aerospace Unit Coherence",
    text: "When calculating aerodynamic drag ($D = \\frac{1}{2} \\rho v^2 S$), if density $\\rho$ is in $\\text{slug/ft}^3$ and velocity $v$ is in $\\text{ft/s}$, drag $D$ directly outputs in pounds-force (lbf). Convert all component test weights from grams to slugs before inserting them into Imperial aerodynamic formulas."
  },
  examples: {
    title: "Step-by-Step Conversion Calculations",
    items: [
      {
        title: "Example 1: Drone Component Mass",
        subtitle: "A composite avionics sensor weighs 350 grams. Convert this mass to slugs for an aircraft stability analysis.",
        steps: [
          "Identify the mass in grams: 350 g.",
          "Apply the conversion formula: slug = 350 / 14,593.9029.",
          "Perform the calculation: 350 / 14,593.9029 ≈ 0.0239826 slugs.",
          "Conclude the calculation: The 350-gram sensor corresponds to approximately 0.02398 slugs."
        ]
      },
      {
        title: "Example 2: Wind Tunnel Scale Model Part",
        subtitle: "A 3D-printed wind tunnel wing tip weighs 1,250 grams. Determine its mass in slugs.",
        steps: [
          "Identify the weight in grams: 1,250 g.",
          "Multiply by the factor: 1,250 × 0.000068521765.",
          "Calculate the product: 1,250 × 0.000068521765 = 0.0856522 slugs.",
          "Conclude the calculation: The wing tip mass is approximately 0.08565 slugs."
        ]
      }
    ]
  },
  table: {
    title: "Gram to Slug Conversion Reference Table",
    headers: ["Grams (g)", "Slugs (slug)", "Engineering Reference / Application"],
    rows: [
      { fromVal: "100", toVal: "0.006852", extra: "Micro-air vehicle (MAV) electronic payload" },
      { fromVal: "250", toVal: "0.017130", extra: "Small drone carbon-fiber propeller arm" },
      { fromVal: "500", toVal: "0.034261", extra: "UAV autopilot flight controller unit" },
      { fromVal: "1,000", toVal: "0.068522", extra: "1 kilogram metric reference standard" },
      { fromVal: "2,500", toVal: "0.171304", extra: "Auxiliary aircraft flight telemetry module" },
      { fromVal: "5,000", toVal: "0.342609", extra: "Avionics backup battery pack" },
      { fromVal: "10,000", toVal: "0.685218", extra: "Experimental wind tunnel fuselage section" },
      { fromVal: "14,593.9", toVal: "1.000000", extra: "Exact equivalent of one slug (14.5939 kg)" }
    ]
  },
  expertNote: {
    title: "Why Engineers Invented the Slug",
    text: "In standard US customary units, the pound (lbm) is commonly used for mass while the pound (lbf) is used for force, creating ambiguity. The slug was introduced to establish a coherent mass unit such that 1 lbf = 1 slug × 1 ft/s², avoiding confusing $g_c$ conversion factors in classical mechanics."
  },
  applications: {
    title: "Where Gram to Slug Conversions Are Used",
    items: [
      {
        title: "Aeronautical & Flight Dynamics",
        text: "NASA and US aerospace flight simulator models compute aircraft moments of inertia, mass distributions, and control surface responses using slugs."
      },
      {
        title: "Fluid Mechanics & Hydrodynamics",
        text: "Fluid density in imperial naval architecture is expressed in slugs per cubic foot ($\text{slug/ft}^3$), requiring metric laboratory sample densities in $\text{g/cm}^3$ to be converted to slugs."
      },
      {
        title: "Mechanical Vibrations & Modal Testing",
        text: "Accelerometer calibration weights and shaker table payloads are converted between grams and slugs to match imperial dynamic stiffness matrices."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting to Slugs",
    items: [
      "Confusing slugs with pound-mass (lbm): A slug is much heavier than a pound (1 slug ≈ 32.174 lbm). Substituting pounds for slugs will introduce an error of over 3,200% into dynamic equations.",
      "Inverting the conversion factor: Dividing by 0.00006852 instead of multiplying results in an astronomical number. Remember that 1 gram is a tiny fraction of a slug.",
      "Assuming the slug depends on local gravity: While defined from standard gravity ($g_0 = 32.17405\\text{ ft/s}^2$), the slug is a pure unit of mass and does not change when taken to high altitudes or outer space."
    ]
  },
  faqs: [
    {
      question: "How many slugs are in one gram?",
      answer: "There are approximately 0.000068521765 slugs in one gram (or 6.85218 × 10⁻⁵ slugs)."
    },
    {
      question: "How many grams are in one slug?",
      answer: "One slug equals exactly 14,593.9029372 grams (approximately 14.5939 kilograms or 32.17405 pounds)."
    },
    {
      question: "What is the formula to convert grams to slugs?",
      answer: "Divide the mass in grams by 14,593.9029 (or multiply grams by 0.000068521765)."
    },
    {
      question: "What is a slug in physics?",
      answer: "A slug is the coherent imperial unit of mass that accelerates at 1 ft/s² when subjected to 1 pound-force (lbf)."
    },
    {
      question: "How many slugs are in 1 kilogram?",
      answer: "One kilogram (1,000 grams) equals approximately 0.068521765 slugs."
    },
    {
      question: "Why do aerospace engineers use slugs?",
      answer: "Using slugs eliminates gravitational correction factors ($g_c$) from Newton's second law ($F = ma$), allowing clean calculations in imperial units."
    },
    {
      question: "Is a slug a unit of weight or mass?",
      answer: "A slug is strictly a unit of mass (the quantity of matter), not a unit of force or weight."
    },
    {
      question: "How do I convert slugs back to grams?",
      answer: "Multiply the slug value by 14,593.9029 to obtain the equivalent mass in grams."
    }
  ],
  relatedList: [
    { label: "Gram to Kilogram", from: "gram", to: "kilogram" },
    { label: "Gram to Pound", from: "gram", to: "pound" },
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" },
    { label: "Gram to Grain", from: "gram", to: "grain" },
    { label: "Kilogram to Metric Ton", from: "kilogram", to: "metric-ton" }
  ],
  references: [
    "NASA Reference Publication 1228 - Fast Reference Guide to Aerospace Units and Constants",
    "ISO 80000-4: Quantities and Units - Mechanics",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units"
  ]
};
