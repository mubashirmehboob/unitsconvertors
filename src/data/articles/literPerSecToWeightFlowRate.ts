import { CustomArticleData } from "./types";

export const literPerSecToWeightFlowRate: CustomArticleData = {
  fromUnitId: "liter-per-sec",
  toUnitId: "weight-flow-rate",
  seoTitle: "Liter per Second to Weight Flow Rate Converter (L/s to N/s)",
  metaDescription: "Convert liters per second to weight flow rate (L/s to N/s). Learn the gravitational fluid power formula, hydraulic turbine power equations, examples, and tables.",
  h1: "Liter per Second to Weight Flow Rate Converter",
  introduction: [
    "In fluid mechanics, turbomachinery design, hydroelectric power generation, and pipeline structural engineering, converting volumetric flow rate (L/s) into weight flow rate (Ẇ in N/s or lbf/s) is essential for calculating hydraulic power, momentum thrust forces, and gravitational energy transfer.",
    "While the liter per second (L/s) measures the physical volume displaced over time, weight flow rate quantifies the downward gravitational force exerted by that flowing fluid per unit of time (Ẇ = ṁ·g = ρ·Q·g).",
    "Under standard Earth gravity (g = 9.80665 m/s²) for pure liquid water with a density of 1.000 kg/L, a volumetric flow rate of 1 L/s generates a weight flow rate of exactly 9.80665 newtons per second (N/s), equivalent to approximately 2.20462 pounds-force per second (lbf/s). This guide details the physical derivation, hydroelectric power equations, worked calculation examples, and reference conversion tables."
  ],
  quickAnswer: {
    text: "For liquid water at standard density (ρ = 1 kg/L) under standard Earth gravity (g = 9.80665 m/s²), multiply liters per second by 9.80665 to find weight flow rate in newtons per second (N/s). For example, 10 L/s produces a weight flow rate of 98.0665 N/s.",
    formulaDisplay: "\\dot{W} (\\text{N/s}) = Q (\\text{L/s}) \\times \\rho (\\text{kg/L}) \\times g (\\text{m/s}^2) \\approx Q \\times 9.80665",
    subtext: "1 L/s (Water, Earth g) = 9.80665 N/s = 2.20462 lbf/s; 1 N/s ≈ 0.101972 L/s."
  },
  aboutSourceUnit: {
    title: "Understanding Volumetric Flow (L/s)",
    text: "The liter per second (symbol: L/s) is a metric unit of volumetric displacement. One L/s represents one cubic decimeter (0.001 m³) of fluid passing through a reference plane every second. It measures geometric fluid volume independent of gravity or fluid mass density."
  },
  aboutTargetUnit: {
    title: "Understanding Weight Flow Rate (N/s)",
    text: "Weight flow rate (symbol: N/s, or Ẇ) is the time rate of gravitational force exerted by a flowing stream of matter, expressed in newtons per second. In engineering mechanics and fluid machinery, weight flow rate directly determines hydraulic power when multiplied by net hydraulic head ($P = \\dot{W} \\cdot H$, where power P is in watts and head H is in meters)."
  },
  relationship: "Weight flow rate is the product of mass flow rate (ṁ) and local gravitational acceleration (g): Ẇ = ṁ·g = ρ·Q·g. For liquid water under standard conditions (ρ = 1.00 kg/L, g = 9.80665 m/s²), multiplying 1 L/s by 1 kg/L and 9.80665 m/s² yields exactly 9.80665 N/s. In US Customary engineering units, 1 L/s corresponds to 2.20462 lbf/s.",
  relationshipTitle: "Volumetric Rate to Weight Flow Scale Comparison (Water, g = 9.80665 m/s²)",
  relationshipItems: [
    { label: "1 L/s (Water)", value: "9.80665 N/s (2.2046 lbf/s)" },
    { label: "5 L/s (Water)", value: "49.0333 N/s (11.023 lbf/s)" },
    { label: "10 L/s (Water)", value: "98.0665 N/s (22.046 lbf/s)" },
    { label: "50 L/s (Water)", value: "490.333 N/s (110.23 lbf/s)" },
    { label: "100 L/s (Water)", value: "980.665 N/s (0.9807 kN/s)" }
  ],
  formula: {
    text: "Multiply the volumetric flow rate in liters per second by fluid density in kilograms per liter and local gravitational acceleration (9.80665 m/s²).",
    math: "\\dot{W} = Q \\times \\rho \\times g \\quad \\left[\\frac{\\text{N}}{\\text{s}} = (\\text{L/s}) \\times (\\text{kg/L}) \\times (\\text{m/s}^2)\\right]",
    subtext: "For water on Earth (ρ = 1.0 kg/L, g = 9.80665 m/s²): Ẇ (N/s) = Q × 9.80665"
  },
  formulaTitle: "Volumetric Flow to Weight Flow Conversion Formula",
  practicalTip: {
    title: "Hydroelectric Power Calculation Shortcut",
    text: "Hydraulic power available from a falling stream of water equals weight flow rate multiplied by falling head: $P (\\text{Watts}) = \\dot{W} (\\text{N/s}) \\times H (\\text{meters})$. If a waterfall delivers 100 L/s (Ẇ ≈ 981 N/s) over a 20-meter drop, the theoretical gross power is $981 \\times 20 = 19,620\\text{ W}$ (19.62 kW)."
  },
  expertNote: {
    title: "Mass Flow vs Weight Flow Distinction",
    text: "Mass flow rate (ṁ in kg/s) is invariant to gravitational field variations, whereas weight flow rate (Ẇ in N/s or lbf/s) depends directly on local gravity. In aerospace propulsion and microgravity orbital fluid transfer, mass flow is conserved while weight flow approaches zero."
  },
  examples: {
    title: "Step-by-Step Practical Hydro & Piping Examples",
    items: [
      {
        title: "Example 1: Micro-Hydro Pelton Wheel Turbine",
        subtitle: "A mountain stream diversion feeds a Pelton wheel nozzle at 18 L/s. Calculate the weight flow rate of water delivered to the turbine buckets.",
        steps: [
          "State volumetric flow rate: Q = 18 L/s.",
          "Assume standard water density and Earth gravity: ρ = 1.0 kg/L, g = 9.80665 m/s².",
          "Apply formula: Ẇ = 18 × 1.0 × 9.80665.",
          "Compute result: 18 × 9.80665 = 176.5197 N/s.",
          "Final Result: The weight flow rate delivered to the turbine is approximately 176.52 N/s (39.68 lbf/s)."
        ]
      },
      {
        title: "Example 2: Industrial Crude Oil Pipeline",
        subtitle: "Crude oil (density ρ = 0.85 kg/L) is pumped at 40 L/s through a riser pipe. Determine the weight flow rate.",
        steps: [
          "State given parameters: Q = 40 L/s, ρ = 0.85 kg/L, g = 9.80665 m/s².",
          "Calculate mass flow rate: ṁ = 40 × 0.85 = 34 kg/s.",
          "Calculate weight flow rate: Ẇ = 34 × 9.80665 = 333.426 N/s.",
          "Final Result: The oil weight flow rate is approximately 333.43 N/s."
        ]
      },
      {
        title: "Example 3: High-Pressure Fire Hose Nozzle Reaction Force",
        subtitle: "A fire monitor discharges 30 L/s of water. Find the weight flow rate in newtons per second.",
        steps: [
          "State flow rate: Q = 30 L/s.",
          "Multiply by standard factor: Ẇ = 30 × 9.80665 = 294.1995 N/s.",
          "Final Result: The weight flow rate is approximately 294.2 N/s."
        ]
      }
    ]
  },
  table: {
    title: "Volumetric Flow to Weight Flow Reference Table (Water on Earth)",
    headers: ["Volumetric Flow (L/s)", "Weight Flow Rate (N/s)", "Weight Flow Rate (kN/s)", "Weight Flow (lbf/s)", "Theoretical Power at 10m Head (kW)"],
    rows: [
      { fromVal: "1 L/s", toVal: "9.807 N/s", extra: "0.0098 kN/s", extra2: "2.205 lbf/s", extra3: "0.098 kW" },
      { fromVal: "5 L/s", toVal: "49.033 N/s", extra: "0.0490 kN/s", extra2: "11.023 lbf/s", extra3: "0.490 kW" },
      { fromVal: "10 L/s", toVal: "98.067 N/s", extra: "0.0981 kN/s", extra2: "22.046 lbf/s", extra3: "0.981 kW" },
      { fromVal: "25 L/s", toVal: "245.166 N/s", extra: "0.2452 kN/s", extra2: "55.115 lbf/s", extra3: "2.452 kW" },
      { fromVal: "50 L/s", toVal: "490.333 N/s", extra: "0.4903 kN/s", extra2: "110.231 lbf/s", extra3: "4.903 kW" },
      { fromVal: "100 L/s", toVal: "980.665 N/s", extra: "0.9807 kN/s", extra2: "220.462 lbf/s", extra3: "9.807 kW" },
      { fromVal: "250 L/s", toVal: "2,451.66 N/s", extra: "2.4517 kN/s", extra2: "551.155 lbf/s", extra3: "24.517 kW" },
      { fromVal: "500 L/s", toVal: "4,903.33 N/s", extra: "4.9033 kN/s", extra2: "1,102.31 lbf/s", extra3: "49.033 kW" },
      { fromVal: "1,000 L/s", toVal: "9,806.65 N/s", extra: "9.8067 kN/s", extra2: "2,204.62 lbf/s", extra3: "98.067 kW" }
    ]
  },
  applications: {
    title: "Key Hydraulic & Mechanical Engineering Applications",
    items: [
      {
        title: "Hydroelectric Turbine Sizing & Efficiency",
        text: "Hydropower engineers calculate theoretical and brake power outputs using the product of weight flow rate (Ẇ) and gross hydraulic head (H)."
      },
      {
        title: "Piping Anchor & Thrust Block Design",
        text: "Structural engineers calculate dynamic reaction thrust forces at pipe bends and nozzle exits using fluid momentum equations driven by weight flow rates."
      },
      {
        title: "Boiler Feed Pump Hydraulic Power",
        text: "Pump head and total dynamic shaft power are determined from fluid specific weight and volumetric pumping rates."
      },
      {
        title: "Spillway Chute Energy Dissipators",
        text: "Dam engineers design hydraulic jump basins and baffle blocks to safely dissipate the kinetic and gravitational energy of high-discharge weight flow streams."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Weight Flow Calculations",
    items: [
      "Confusing mass flow rate (kg/s) with weight flow rate (N/s), omitting gravitational acceleration (g = 9.80665 m/s²).",
      "Confusing pounds-mass per second (lbm/s) with pounds-force per second (lbf/s).",
      "Neglecting variations in fluid density due to temperature or chemical composition.",
      "Assuming gravitational acceleration is constant in planetary or high-altitude aerospace applications."
    ]
  },
  faqs: [
    {
      question: "What is weight flow rate?",
      answer: "Weight flow rate (Ẇ) is the gravitational force exerted by a fluid passing a cross section per unit time, expressed in newtons per second (N/s) or pounds-force per second (lbf/s)."
    },
    {
      question: "How do you convert liters per second to weight flow rate?",
      answer: "Multiply volumetric flow (L/s) by fluid density (kg/L) and gravitational acceleration (9.80665 m/s²): Ẇ = Q × ρ × g."
    },
    {
      question: "What is the weight flow rate of 1 L/s of water on Earth?",
      answer: "For liquid water with a density of 1 kg/L under standard Earth gravity, 1 L/s produces a weight flow rate of exactly 9.80665 N/s (approx. 2.20462 lbf/s)."
    },
    {
      question: "How does weight flow rate relate to hydraulic power?",
      answer: "Hydraulic power (P in Watts) equals weight flow rate (Ẇ in N/s) multiplied by hydraulic head (H in meters): P = Ẇ × H = ρ·Q·g·H."
    },
    {
      question: "What is the difference between mass flow rate and weight flow rate?",
      answer: "Mass flow rate (kg/s) measures the quantity of matter and is independent of gravity. Weight flow rate (N/s) measures gravitational force and varies with local gravitational field strength."
    },
    {
      question: "How do you convert N/s to lbf/s?",
      answer: "Multiply the N/s value by 0.22480894 (or divide by 4.44822): 1 N/s ≈ 0.22481 lbf/s."
    },
    {
      question: "What is the weight flow rate of 100 L/s of water?",
      answer: "100 L/s of water on Earth produces 980.665 N/s (0.9807 kN/s or approximately 220.46 lbf/s)."
    },
    {
      question: "Does pressure affect weight flow rate?",
      answer: "For incompressible liquids like water, pressure changes have negligible effect on density and weight flow rate. For gases, pressure significantly alters density and weight flow."
    }
  ],
  relatedList: [
    { label: "Liter/sec to Mass Flux", from: "liter-per-sec", to: "mass-flux" },
    { label: "Liter/sec to Flow per Unit Area", from: "liter-per-sec", to: "flow-per-unit-area" },
    { label: "Liter/sec to Gallon/min", from: "liter-per-sec", to: "gallon-per-min" },
    { label: "Liter/sec to Cubic Meter/hour", from: "liter-per-sec", to: "cubic-meter-per-hour" }
  ],
  references: [
    "White, Frank M.: Fluid Mechanics (8th Edition), McGraw-Hill Education.",
    "Munson, Young, Okiishi, Huebsch: Fundamentals of Fluid Mechanics (7th Edition).",
    "ASME PTC 18: Hydraulic Turbines and Pump-Turbines Performance Test Codes."
  ]
};
