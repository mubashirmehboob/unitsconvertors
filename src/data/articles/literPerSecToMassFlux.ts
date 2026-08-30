import { CustomArticleData } from "./types";

export const literPerSecToMassFlux: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "mass-flux",
  seoTitle: "Liter per Second to Mass Flux Converter (L/s to kg/s/m²)",
  metaDescription: "Convert liters per second to mass flux (L/s to kg/s/m²). Learn the density-area mass flux formula, thermal hydraulics equations, examples, and tables.",
  h1: "Liter per Second to Mass Flux Converter",
  introduction: [
    "In chemical engineering, thermodynamics, thermal hydraulics, and aerospace propulsion, converting volumetric flow rate (L/s) to mass flux (mass velocity, G, in kg/s/m²) is fundamental to analyzing momentum, heat transfer, and fluid dynamics.",
    "While the liter per second (L/s) quantifies the raw volumetric throughput of fluid entering a system, mass flux measures the mass flow rate per unit cross-sectional area passing through a channel, boiler tube, or reactor core (G = ṁ / A = ρ·Q / A).",
    "For standard liquid water at 4 °C with a mass density of 1.000 kg/L (1,000 kg/m³) across a normalized one-square-meter cross section, 1 L/s equates directly to a mass flux of 1.000 kg/s/m² (1,000 g/s/m² or 3,600 kg/h/m²). This guide details the thermodynamic formulation, fluid density adjustments, heat exchanger design examples, and reference tables."
  ],
  quickAnswer: {
    text: "For liquid water at standard reference conditions (density ρ = 1 kg/L) passing through a 1 m² cross section, 1 L/s equals 1 kg/s/m². For any fluid and geometry, mass flux equals volumetric flow (L/s) multiplied by density (kg/L) divided by cross-sectional area (m²): G = (Q × ρ) / A.",
    formulaDisplay: "G (\\text{kg/s/m}^2) = \\frac{Q (\\text{L/s}) \\times \\rho (\\text{kg/L})}{A (\\text{m}^2)}",
    subtext: "For water (ρ = 1 kg/L) through 1 m²: 1 L/s = 1 kg/s/m² = 3,600 kg/(h·m²)."
  },
  aboutSourceUnit: {
    title: "Understanding Volumetric Flow (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric flow rate representing the volume of fluid (one cubic decimeter per second, 0.001 m³/s) transported through a conduit. Because volumetric flow rate ignores fluid density, it varies with temperature and pressure in compressible fluids and thermal loops."
  },
  aboutTargetUnit: {
    title: "Understanding Mass Flux (kg/s/m²)",
    text: "Mass flux (symbol: kg/s/m² or kg·s⁻¹·m⁻²), also designated as mass velocity or mass flow rate per unit area (G), is an intensive transport property defined as mass flow rate per unit of cross-sectional area. It is universally used in heat and mass transfer correlations, Reynolds number calculations, two-phase flow boiling regimes, and critical heat flux (CHF) limits."
  },
  relationship: "Mass flux (G) combines volumetric flow (Q), fluid density (ρ), and duct cross-sectional area (A): G = (ρ · Q) / A. When density is in kg/L and area is in m², multiplying Q (L/s) by ρ (kg/L) yields the mass flow rate ṁ (kg/s). Dividing by area A (m²) yields the mass flux G (kg/s/m²). For pure liquid water under standard conditions across a 1 m² duct, 1 L/s translates directly to 1 kg/s/m².",
  relationshipTitle: "Volumetric Rate to Mass Flux Scale Comparison (Water, A = 1 m²)",
  relationshipItems: [
    { label: "1 L/s (Water, 1 m²)", value: "1.000 kg/s/m² (3,600 kg/h/m²)" },
    { label: "5 L/s (Water, 1 m²)", value: "5.000 kg/s/m² (18,000 kg/h/m²)" },
    { label: "10 L/s (Water, 1 m²)", value: "10.00 kg/s/m² (36,000 kg/h/m²)" },
    { label: "50 L/s (Water, 1 m²)", value: "50.00 kg/s/m² (180,000 kg/h/m²)" },
    { label: "100 L/s (Water, 1 m²)", value: "100.0 kg/s/m² (360,000 kg/h/m²)" }
  ],
  formula: {
    text: "Multiply the volumetric flow rate in liters per second by the fluid density in kilograms per liter, then divide by the conduit cross-sectional area in square meters.",
    math: "G = \\frac{Q \\times \\rho}{A} \\quad \\left[\\frac{\\text{kg}}{\\text{s}\\cdot\\text{m}^2} = \\frac{(\\text{L/s}) \\times (\\text{kg/L})}{\\text{m}^2}\\right]",
    subtext: "For standard water (ρ = 1.0 kg/L) through normalized unit area (A = 1.0 m²): G = Q"
  },
  formulaTitle: "Volumetric Flow to Mass Flux Formula",
  practicalTip: {
    title: "Temperature-Dependent Density Adjustment",
    text: "While cold water has a density of approximately 1.00 kg/L, hot water in boiler loops at 90 °C has a density of 0.965 kg/L. Hydrocarbons like diesel (0.84 kg/L) and ethanol (0.79 kg/L) require exact density scaling to prevent mass balance errors."
  },
  expertNote: {
    title: "Importance in Reynolds Number & Heat Transfer",
    text: "In non-isothermal pipe flows, the Reynolds number is expressed conveniently as $Re = G \\cdot D_h / \\mu$, where $G = \\rho v$ is the mass flux and $\\mu$ is dynamic viscosity. Because mass flux remains constant along a constant-area duct regardless of thermal expansion, it simplifies convective heat transfer modeling."
  },
  examples: {
    title: "Step-by-Step Practical Engineering Examples",
    items: [
      {
        title: "Example 1: Steam Generator Boiler Tube Mass Flux",
        subtitle: "Feedwater at 200 °C (density ρ = 0.865 kg/L) flows at 0.5 L/s into a boiler tube bundle with a combined internal flow area of 0.0025 m². Determine the mass flux in kg/s/m².",
        steps: [
          "Identify volumetric flow rate: Q = 0.5 L/s.",
          "Identify fluid density: ρ = 0.865 kg/L.",
          "Calculate mass flow rate: ṁ = 0.5 × 0.865 = 0.4325 kg/s.",
          "Divide by cross-sectional area: G = 0.4325 / 0.0025 = 173.0 kg/s/m².",
          "Final Result: The feedwater mass flux is 173.0 kg/s/m²."
        ]
      },
      {
        title: "Example 2: Chemical Reactor Catalyst Bed",
        subtitle: "Liquid benzene (density ρ = 0.876 kg/L) is pumped at 12 L/s through a fixed-bed reactor with a bed cross section of 1.5 m². Calculate the superficial mass flux.",
        steps: [
          "State given parameters: Q = 12 L/s, ρ = 0.876 kg/L, A = 1.5 m².",
          "Calculate mass throughput: ṁ = 12 × 0.876 = 10.512 kg/s.",
          "Compute mass flux: G = 10.512 / 1.5 = 7.008 kg/s/m².",
          "Final Result: The mass flux across the catalyst bed is approximately 7.008 kg/s/m²."
        ]
      },
      {
        title: "Example 3: Industrial Chilled Water Pipe",
        subtitle: "Cold water (ρ = 1.00 kg/L) flows at 40 L/s through a 200 mm diameter pipe (Area = 0.03142 m²). Find the pipe mass flux.",
        steps: [
          "Calculate pipe cross section: A = π × (0.1 m)² = 0.031416 m².",
          "Calculate mass flow rate: ṁ = 40 L/s × 1.0 kg/L = 40 kg/s.",
          "Calculate mass flux: G = 40 / 0.031416 = 1,273.24 kg/s/m².",
          "Final Result: The pipe mass flux is approximately 1,273.2 kg/s/m²."
        ]
      }
    ]
  },
  table: {
    title: "Volumetric Flow to Mass Flux Reference (Water, ρ = 1 kg/L)",
    headers: ["Volumetric Flow (L/s)", "Mass Flux (A = 1 m²)", "Mass Flux (A = 0.1 m²)", "Mass Flux (A = 0.01 m²)", "Mass Flow Rate (kg/s)"],
    rows: [
      { fromVal: "0.1 L/s", toVal: "0.10 kg/s/m²", extra: "1.0 kg/s/m²", extra2: "10.0 kg/s/m²", extra3: "0.10 kg/s" },
      { fromVal: "0.5 L/s", toVal: "0.50 kg/s/m²", extra: "5.0 kg/s/m²", extra2: "50.0 kg/s/m²", extra3: "0.50 kg/s" },
      { fromVal: "1.0 L/s", toVal: "1.00 kg/s/m²", extra: "10.0 kg/s/m²", extra2: "100.0 kg/s/m²", extra3: "1.00 kg/s" },
      { fromVal: "2.5 L/s", toVal: "2.50 kg/s/m²", extra: "25.0 kg/s/m²", extra2: "250.0 kg/s/m²", extra3: "2.50 kg/s" },
      { fromVal: "5.0 L/s", toVal: "5.00 kg/s/m²", extra: "50.0 kg/s/m²", extra2: "500.0 kg/s/m²", extra3: "5.00 kg/s" },
      { fromVal: "10.0 L/s", toVal: "10.0 kg/s/m²", extra: "100.0 kg/s/m²", extra2: "1,000 kg/s/m²", extra3: "10.0 kg/s" },
      { fromVal: "25.0 L/s", toVal: "25.0 kg/s/m²", extra: "250.0 kg/s/m²", extra2: "2,500 kg/s/m²", extra3: "25.0 kg/s" },
      { fromVal: "50.0 L/s", toVal: "50.0 kg/s/m²", extra: "500.0 kg/s/m²", extra2: "5,000 kg/s/m²", extra3: "50.0 kg/s" },
      { fromVal: "100.0 L/s", toVal: "100.0 kg/s/m²", extra: "1,000 kg/s/m²", extra2: "10,000 kg/s/m²", extra3: "100.0 kg/s" }
    ]
  },
  applications: {
    title: "Key Thermal & Chemical Engineering Applications",
    items: [
      {
        title: "Nuclear & Thermal Boiler Core Design",
        text: "Thermal hydraulic engineers evaluate boiling crisis, two-phase friction factors, and critical heat flux (CHF) margins using coolant mass flux in kg/s/m²."
      },
      {
        title: "Shell and Tube Heat Exchangers",
        text: "Tube-side and shell-side heat transfer coefficients (Nusselt numbers) and pressure drops are calculated directly from mass velocity."
      },
      {
        title: "Fluidized Bed & Packed Column Reactors",
        text: "Process engineers check minimum fluidization velocity and flooding thresholds by converting volumetric feed rates into superficial mass flux."
      },
      {
        title: "Rocket Engine Injector Manifolds",
        text: "Propulsion specialists design injector orifices and thrust chamber cooling jackets based on propellant mass flux distribution."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Calculating Mass Flux",
    items: [
      "Neglecting fluid density variation with temperature and pressure in thermal systems.",
      "Forgetting to divide by the duct internal cross-sectional area (confusing mass flow rate in kg/s with mass flux in kg/s/m²).",
      "Using nominal pipe diameter instead of exact internal flow area.",
      "Mixing time units (e.g., confusing kg/s/m² with kg/h/m², which differs by 3,600)."
    ]
  },
  faqs: [
    {
      question: "What is mass flux in fluid mechanics?",
      answer: "Mass flux (also known as mass velocity, symbol G) is the mass flow rate of fluid per unit cross-sectional area, typically measured in kg/s/m² or lb/s/ft²."
    },
    {
      question: "How do you convert liters per second to mass flux?",
      answer: "Multiply volumetric flow (L/s) by fluid density (kg/L), then divide by the channel cross-sectional area (m²): G = (Q × ρ) / A."
    },
    {
      question: "What is the mass flux of 1 L/s of water across 1 m²?",
      answer: "For standard water with a density of 1 kg/L, 1 L/s flowing through a 1 m² cross section equals exactly 1 kg/s/m²."
    },
    {
      question: "How does mass flux relate to fluid velocity?",
      answer: "Mass flux equals fluid density multiplied by linear fluid velocity: G = ρ × v. For example, water moving at 2 m/s has a mass flux of 2,000 kg/s/m²."
    },
    {
      question: "Why is mass flux preferred over volumetric flow in heat transfer calculations?",
      answer: "Because mass is conserved regardless of temperature and pressure changes, making mass flux constant across uniform ducts even when thermal expansion alters volume and velocity."
    },
    {
      question: "How do you convert kg/s/m² to kg/h/m²?",
      answer: "Multiply the kg/s/m² value by 3,600 (seconds in one hour). For example, 5 kg/s/m² = 18,000 kg/h/m²."
    },
    {
      question: "What is the imperial equivalent of kg/s/m²?",
      answer: "The standard imperial unit is pound per second per square foot (lb/s/ft²), where 1 kg/s/m² ≈ 0.204816 lb/s/ft²."
    },
    {
      question: "Does fluid viscosity affect mass flux?",
      answer: "Viscosity affects the pressure drop and velocity profile required to achieve a flow rate, but mass flux itself depends solely on mass throughput and cross-sectional area."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Flow per Unit Area", from: "liter-per-sec", to: "flow-per-unit-area" },
    { label: "Liter/sec to Weight Flow Rate", from: "liter-per-sec", to: "weight-flow-rate" },
    { label: "Liter/sec to Molar Flow Rate", from: "liter-per-sec", to: "molar-flow-rate" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" }
  ],
  references: [
    "Incropera, DeWitt, Bergman, Lavine: Fundamentals of Heat and Mass Transfer (8th Edition).",
    "Todreas & Kazimi: Nuclear Systems Volume 1: Thermal Hydraulic Fundamentals (3rd Edition).",
    "Perry's Chemical Engineers' Handbook (9th Edition): Fluid and Particle Dynamics."
  ]
};
