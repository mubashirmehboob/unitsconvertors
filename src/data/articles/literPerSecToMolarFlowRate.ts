import { CustomArticleData } from "./types";

export const literPerSecToMolarFlowRate: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "molar-flow-rate",
  seoTitle: "Liter per Second to Molar Flow Rate Converter (L/s to mol/s)",
  metaDescription: "Convert liters per second to molar flow rate (L/s to mol/s). Learn the chemical stoichiometry formula, molar density equations, worked examples, and tables.",
  h1: "Liter per Second to Molar Flow Rate Converter",
  introduction: [
    "In chemical reaction engineering, continuous stirred-tank reactor (CSTR) design, bioprocess fermentation, and combustion stoichiometry, converting volumetric flow rate (L/s) into molar flow rate (mol/s) is essential for balancing material streams and determining chemical reaction kinetics.",
    "While flow sensors, rotameters, and turbine meters record the macroscopic volumetric throughput in liters per second (L/s), chemical reactions proceed on a molecular and molar basis governed by Avogadro's number (6.022 × 10²³ molecules per mole).",
    "To convert volumetric flow rate to molar flow rate, the fluid's molar concentration (C in mol/L) or mass density (ρ in g/L) and molar mass (M in g/mol) must be incorporated: ṅ = Q × (ρ / M). For pure liquid water under standard conditions, 1 L/s delivers approximately 55.508 moles per second (or 3,330.5 mol/min). This guide details the thermodynamic formulation, ideal gas derivations, reaction stoichiometry examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert liters per second to molar flow rate (mol/s), multiply volumetric flow (L/s) by the substance's molar concentration (mol/L), or multiply by density (g/L) and divide by molar mass (g/mol). For pure liquid water at 20 °C, 1 L/s equals approximately 55.508 mol/s.",
    formulaDisplay: "\\dot{n} (\\text{mol/s}) = Q (\\text{L/s}) \\times \\frac{\\rho (\\text{g/L})}{M (\\text{g/mol})} = Q (\\text{L/s}) \\times C (\\text{mol/L})",
    subtext: "For pure water (M = 18.015 g/mol, ρ = 1,000 g/L): 1 L/s = 55.5084 mol/s."
  },
  aboutSourceUnit: {
    title: "Understanding Volumetric Flow (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit measuring the volume of fluid (one cubic decimeter, 0.001 m³) flowing through a boundary every second. It captures the physical displacement of liquid or gas irrespective of molecular composition or solute concentration."
  },
  aboutTargetUnit: {
    title: "Understanding Molar Flow Rate (mol/s)",
    text: "Molar flow rate (symbol: mol/s, or ṅ) is the SI base unit rate measuring the number of chemical moles (entities of 6.02214076 × 10²³ particles) passing through a system per second. It is the core operational parameter in chemical kinetics, mass balances, reactor sizing, and stoichiometric process controls."
  },
  relationship: "The relationship between volumetric flow (Q in L/s) and molar flow rate (ṅ in mol/s) is defined by the fluid's molar density (C = ρ / M in mol/L). For liquid water at standard ambient temperature (density ≈ 1,000 g/L, molar mass ≈ 18.01528 g/mol), the molar concentration is 55.5084 mol/L. Thus, each 1 L/s provides 55.5084 mol/s. For an ideal gas at Standard Temperature and Pressure (STP: 0 °C, 1 atm, molar volume = 22.414 L/mol), 1 L/s equals 1 / 22.414 ≈ 0.044615 mol/s.",
  relationshipTitle: "Volumetric Rate to Molar Flow Scaling",
  relationshipItems: [
    { label: "1 L/s (Liquid Water at 20 °C)", value: "≈ 55.5084 mol/s (1,000 g/s)" },
    { label: "1 L/s (Ideal Gas at STP, 0 °C)", value: "≈ 0.044615 mol/s (44.615 mmol/s)" },
    { label: "1 L/s (Ideal Gas at NTP, 20 °C)", value: "≈ 0.041571 mol/s (41.571 mmol/s)" },
    { label: "1 L/s (Pure Ethanol, C₂H₅OH)", value: "≈ 17.13 mol/s (789 g/s)" },
    { label: "1 L/s (1.0 M Chemical Solution)", value: "1.000 mol/s of active solute" }
  ],
  formula: {
    text: "Multiply the volumetric flow rate in liters per second by the fluid density in grams per liter, then divide by the substance's molecular weight in grams per mole.",
    math: "\\dot{n} = Q \\times \\frac{\\rho}{M} = Q \\times C \\quad \\left[\\frac{\\text{mol}}{\\text{s}} = (\\text{L/s}) \\times \\left(\\frac{\\text{mol}}{\\text{L}}\\right)\\right]",
    subtext: "For standard water: ṅ (mol/s) = Q (L/s) × 55.5084"
  },
  formulaTitle: "Volumetric Flow to Molar Flow Conversion Formula",
  practicalTip: {
    title: "Liquid Solutions vs Pure Streams",
    text: "In aqueous chemical processing, if you are calculating the molar flow rate of a dissolved solute (such as sulfuric acid or sodium hydroxide), multiply the volumetric flow in L/s directly by the solution's molarity (Molarity in mol/L). For example, 2 L/s of a 3.0 M NaOH solution yields 6.0 mol/s of NaOH."
  },
  expertNote: {
    title: "Ideal Gas Law Application for Gases",
    text: "For gaseous streams, molar flow rate is derived directly from the ideal gas equation: $\\dot{n} = (P \\cdot Q) / (R \\cdot T)$, where P is absolute pressure in kPa, Q is in L/s, R is the universal gas constant (8.31446 J/(mol·K)), and T is absolute temperature in Kelvin."
  },
  examples: {
    title: "Step-by-Step Practical Chemistry & Engineering Examples",
    items: [
      {
        title: "Example 1: Continuous Wastewater Neutralization Reactor",
        subtitle: "A 2.5 Molar hydrochloric acid (HCl) reagent stream is pumped at 0.4 L/s into a continuous neutralization tank. Determine the molar flow rate of HCl.",
        steps: [
          "State volumetric flow rate: Q = 0.4 L/s.",
          "State molar concentration (molarity): C = 2.5 mol/L.",
          "Apply the molar flow formula: ṅ = Q × C.",
          "Compute: ṅ = 0.4 L/s × 2.5 mol/L = 1.0 mol/s.",
          "Final Result: The acid reagent feeds at a molar flow rate of exactly 1.0 mol/s (60 mol/min)."
        ]
      },
      {
        title: "Example 2: Pure Liquid Methanol Feed to Catalytic Reactor",
        subtitle: "Liquid methanol (CH₃OH, molar mass M = 32.04 g/mol, density ρ = 792 g/L) feeds into a synthesis reactor at 3.0 L/s. Find the molar flow rate.",
        steps: [
          "Calculate mass flow rate: ṁ = 3.0 L/s × 792 g/L = 2,376 g/s.",
          "Divide by molar mass: ṅ = 2,376 g/s / 32.04 g/mol = 74.157 mol/s.",
          "Final Result: The feed rate is approximately 74.16 mol/s of methanol."
        ]
      },
      {
        title: "Example 3: Bioreactor Methane Gas Output",
        subtitle: "An anaerobic digester generates biogas with pure methane (CH₄) output of 15 L/s at NTP (20 °C, 1 atm, molar volume = 24.055 L/mol). Calculate the molar flow.",
        steps: [
          "State gas volumetric flow: Q = 15 L/s.",
          "State molar volume at 20 °C: V_m = 24.055 L/mol.",
          "Calculate molar flow: ṅ = 15 / 24.055 = 0.62357 mol/s.",
          "Final Result: The methane production corresponds to approximately 0.624 mol/s."
        ]
      }
    ]
  },
  table: {
    title: "L/s to Molar Flow Reference Table (Pure Water, M = 18.015 g/mol)",
    headers: ["Volumetric Flow (L/s)", "Molar Flow Rate (mol/s)", "Molar Flow Rate (kmol/h)", "Mass Flow Rate (kg/s)"],
    rows: [
      { fromVal: "0.1 L/s", toVal: "5.551 mol/s", extra: "0.01998 kmol/h", extra2: "0.100 kg/s" },
      { fromVal: "0.5 L/s", toVal: "27.754 mol/s", extra: "0.09991 kmol/h", extra2: "0.500 kg/s" },
      { fromVal: "1.0 L/s", toVal: "55.508 mol/s", extra: "0.19983 kmol/h", extra2: "1.000 kg/s" },
      { fromVal: "2.5 L/s", toVal: "138.771 mol/s", extra: "0.49958 kmol/h", extra2: "2.500 kg/s" },
      { fromVal: "5.0 L/s", toVal: "277.542 mol/s", extra: "0.99915 kmol/h", extra2: "5.000 kg/s" },
      { fromVal: "10.0 L/s", toVal: "555.084 mol/s", extra: "1.99830 kmol/h", extra2: "10.00 kg/s" },
      { fromVal: "25.0 L/s", toVal: "1,387.71 mol/s", extra: "4.99576 kmol/h", extra2: "25.00 kg/s" },
      { fromVal: "50.0 L/s", toVal: "2,775.42 mol/s", extra: "9.99151 kmol/h", extra2: "50.00 kg/s" },
      { fromVal: "100.0 L/s", toVal: "5,550.84 mol/s", extra: "19.9830 kmol/h", extra2: "100.0 kg/s" }
    ]
  },
  applications: {
    title: "Industrial & Chemical Applications",
    items: [
      {
        title: "Stoichiometric Reagent Dosing",
        text: "Automated dosing pumps adjust reagent flow rates in L/s to maintain exact molar ratios with incoming process streams."
      },
      {
        title: "Catalytic Reactor Kinetics",
        text: "Chemical engineers size catalyst volumes and residence times based on molar space velocity (GHSV / LHSV) derived from molar feed rates."
      },
      {
        title: "Distillation & Separation Columns",
        text: "Reflux ratios, McCabe-Thiele stage calculations, and vapor-liquid equilibria depend strictly on molar flow rates rather than volumetric rates."
      },
      {
        title: "Fermentation & Biological Cell Growth",
        text: "Biochemists quantify oxygen uptake rates (OUR) and carbon dioxide evolution rates (CER) in fermenters using gas molar flow rates."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Molar Flow Calculations",
    items: [
      "Assuming all liquids have the same molar density as water (e.g., ethanol has less than a third the molar density of water).",
      "Confusing solution molarity (moles of solute per liter of solution) with pure solvent molar density.",
      "Failing to correct gas volumetric flow rates for temperature and pressure variations when applying ideal gas molar volumes.",
      "Confusing molar flow rate in mol/s with mass flow rate in g/s or kg/s."
    ]
  },
  faqs: [
    {
      question: "How do you convert liters per second to moles per second?",
      answer: "Multiply the volumetric flow (L/s) by the substance's density (g/L) and divide by its molar mass (g/mol): mol/s = L/s × (ρ / M). For solutions, multiply L/s by molarity (mol/L)."
    },
    {
      question: "How many moles per second is 1 L/s of water?",
      answer: "One liter per second of pure liquid water equals approximately 55.5084 moles per second (based on water density of 1,000 g/L and molar mass of 18.01528 g/mol)."
    },
    {
      question: "How many moles per second is 1 L/s of an ideal gas at STP?",
      answer: "At standard temperature and pressure (0 °C, 1 atm), 1 mole of ideal gas occupies 22.414 L. Therefore, 1 L/s corresponds to 1 / 22.414 ≈ 0.044615 mol/s (44.615 mmol/s)."
    },
    {
      question: "What is the formula for molar flow rate of an ideal gas?",
      answer: "The formula is: ṅ = (P × Q) / (R × T), where P is pressure (kPa), Q is flow (L/s), R is 8.314 J/(mol·K), and T is absolute temperature in Kelvin."
    },
    {
      question: "Why do chemical engineers use molar flow rate instead of volumetric flow?",
      answer: "Because chemical reactions occur in specific integer stoichiometric ratios of molecules (moles), not volumes. Volume changes with temperature and pressure, while moles remain constant."
    },
    {
      question: "What is the SI unit of molar flow rate?",
      answer: "The SI unit of molar flow rate is mole per second (mol/s) or kilomole per hour (kmol/h)."
    },
    {
      question: "How do you convert mol/s to kmol/h?",
      answer: "Multiply the mol/s value by 3.6 (since 1 kmol = 1,000 mol and 1 hour = 3,600 seconds): kmol/h = mol/s × 3.6."
    },
    {
      question: "What is the relationship between mass flow and molar flow?",
      answer: "Mass flow rate (ṁ) equals molar flow rate (ṅ) multiplied by molar mass (M): ṁ (g/s) = ṅ (mol/s) × M (g/mol)."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Mass Flux", from: "liter-per-sec", to: "mass-flux" },
    { label: "Liter/sec to Flow per Unit Area", from: "liter-per-sec", to: "flow-per-unit-area" },
    { label: "Liter/sec to Weight Flow Rate", from: "liter-per-sec", to: "weight-flow-rate" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" }
  ],
  references: [
    "Levenspiel, Octave: Chemical Reaction Engineering (3rd Edition).",
    "Smith, Van Ness, Abbott: Introduction to Chemical Engineering Thermodynamics (8th Edition).",
    "IUPAC Compendium of Chemical Terminology (Gold Book): Molar Flow Rate."
  ]
};
