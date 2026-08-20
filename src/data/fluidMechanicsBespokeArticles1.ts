import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * Bespoke production-quality technical articles for Fluid Mechanics Calculators (Part 1).
 * Adheres strictly to the FLUID MECHANICS CALCULATOR ARTICLE TEMPLATE V1.0.
 * Covers:
 * 1. Reynolds Flow Regime Calculator (reynolds-number)
 * 2. Darcy–Weisbach Pressure Loss Calculator (darcy-weisbach-pressure-loss)
 * 3. Bernoulli Equation Calculator (bernoulli-equation)
 * 4. Flow Rate Calculator (flow-rate)
 * 5. Pipe Velocity Calculator (pipe-velocity)
 * 6. Continuity Equation Calculator (continuity-equation)
 */

export const fluidMechanicsBespokeArticlesPart1: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {
  // =========================================================================
  // 1. REYNOLDS FLOW REGIME CALCULATOR
  // =========================================================================
  "reynolds-number": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Reynolds Flow Regime Calculator | Fluid Dynamics Solver",
    metaDescription: "Calculate dimensionless Reynolds number (Re) for closed pipe flow from density, velocity, diameter, and dynamic viscosity. Identify laminar vs turbulent flow regimes.",
    canonicalUrl,
    introduction: {
      overview: "The Reynolds Flow Regime Calculator determines the dimensionless Reynolds number (Re) for internal fluid flow through circular pipes and closed conduits. The Reynolds number expresses the ratio of dynamic inertial forces to viscous shear forces within the moving fluid. By evaluating this ratio, engineers identify whether the fluid motion is orderly and laminar, transitional, or chaotically turbulent.\n\nIn circular pipes under fully developed conditions, flow is generally classified as laminar for Re < 2000, where fluid particles travel in smooth parallel streamlines dominated by viscous damping. Between Re = 2000 and Re = 4000, flow occupies an unstable transition zone. At Re > 4000, inertial forces overwhelm viscous resistance, generating turbulent eddies, rapid cross-stream mixing, and a significantly flatter velocity profile with higher wall shear stress.\n\nAccurate determination of the flow regime is a prerequisite for selecting proper friction factor models (such as the Hagen-Poiseuille law or the Colebrook-White equation), sizing heat exchangers, designing chemical reactors, and assessing boundary layer separation in turbomachinery.",
      applications: [
        "Classifying flow regimes (laminar, transitional, turbulent) in process piping and municipal water mains.",
        "Selecting appropriate friction factor equations on the Moody diagram for pipeline pressure drop calculations.",
        "Evaluating convective heat transfer coefficients in shell-and-tube and plate heat exchangers.",
        "Designing chemical dosing and blending conduits to ensure adequate turbulent micro-mixing.",
        "Analyzing scale-model similitude and dynamic similarity in wind tunnel and water flume testing."
      ],
      industries: [
        "Water & Wastewater Infrastructure",
        "Chemical Process & Petrochemical Refining",
        "HVAC & Hydronic District Energy",
        "Oil & Gas Pipeline Transportation",
        "Aerospace & Fluid Power Engineering"
      ]
    },
    quickAnswer: "The Reynolds number is calculated using Re = (ρ × v × D) / μ. For water with density 998 kg/m³, flow velocity 1.5 m/s, pipe diameter 0.05 m (50 mm), and dynamic viscosity 0.001 Pa·s (1.0 cP), the Reynolds number is exactly 74,850, indicating fully turbulent flow.",
    governingEquation: {
      formula: "Re = \\frac{\\rho \\times v \\times D}{\\mu} = \\frac{v \\times D}{\\nu}",
      explanation: "The Reynolds number (Re, dimensionless) is calculated by multiplying fluid density (ρ in kg/m³), mean flow velocity (v in m/s), and internal pipe diameter (D in m), then dividing by dynamic viscosity (μ in Pa·s). Alternatively, substituting kinematic viscosity (ν = μ / ρ in m²/s) yields Re = (v × D) / ν.",
      variables: [
        { symbol: "Re", label: "Reynolds Number", unit: "Dimensionless", description: "Ratio of inertial forces to viscous forces in the fluid." },
        { symbol: "ρ", label: "Fluid Density", unit: "kg/m³", description: "Mass of fluid per unit volume at operating temperature." },
        { symbol: "v", label: "Flow Velocity", unit: "m/s", description: "Cross-sectional mean fluid velocity through the pipe." },
        { symbol: "D", label: "Pipe Diameter", unit: "m", description: "Internal circular diameter of the conduit." },
        { symbol: "μ", label: "Dynamic Viscosity", unit: "Pa·s", description: "Fluid shear resistance (1 Pa·s = 1 N·s/m² = 1000 cP)." }
      ]
    },
    inputParameters: [
      {
        name: "density",
        label: "Fluid Density (ρ)",
        unit: "kg/m³",
        defaultValue: 998,
        explanation: "Density of the flowing fluid in kilograms per cubic meter. Baseline reference is water at 20°C (998 kg/m³)."
      },
      {
        name: "velocity",
        label: "Flow Velocity (v)",
        unit: "m/s",
        defaultValue: 1.5,
        explanation: "Mean fluid velocity across the pipe cross-section in meters per second. Baseline value is 1.5 m/s."
      },
      {
        name: "diameter",
        label: "Pipe Diameter (D)",
        unit: "m",
        defaultValue: 0.05,
        explanation: "Internal pipe diameter in meters (0.05 m = 50 mm = ~2 inches). Baseline value is 0.05 m."
      },
      {
        name: "viscosity",
        label: "Dynamic Viscosity (μ)",
        unit: "Pa·s",
        defaultValue: 0.001,
        explanation: "Dynamic shear viscosity of the fluid in Pascal-seconds (Pa·s). Baseline value is 0.001 Pa·s (water at 20°C)."
      }
    ],
    outputExplanation: {
      unit: "Dimensionless (Re)",
      interpretation: "A Reynolds number of 74,850 places the flow deep within the turbulent regime (Re > 4000). Fluid particles experience intense chaotic cross-stream momentum exchange.",
      designImpact: "Confirms that turbulent friction factor correlations (such as the Colebrook-White equation or Swamee-Jain formula) must be used rather than the laminar relation f = 64/Re."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Fluid Density (ρ)", value: 998, unit: "kg/m³" },
        { label: "Flow Velocity (v)", value: 1.5, unit: "m/s" },
        { label: "Pipe Diameter (D)", value: 0.05, unit: "m" },
        { label: "Dynamic Viscosity (μ)", value: 0.001, unit: "Pa·s" }
      ],
      substitution: "Substitute ρ = 998 kg/m³, v = 1.5 m/s, D = 0.05 m, and μ = 0.001 Pa·s into Re = (ρ × v × D) / μ:",
      intermediateSteps: [
        "1. Calculate numerator (inertial scale): 998 kg/m³ × 1.5 m/s × 0.05 m = 74.85 kg/(m·s).",
        "2. Divide by dynamic viscosity (viscous scale): 74.85 / 0.001 Pa·s = 74,850.",
        "3. Evaluate flow regime: Re = 74,850 > 4000, confirming fully turbulent pipe flow."
      ],
      finalResult: "74850",
      unit: "Dimensionless (Re)"
    },
    practicalExample: {
      scenarioTitle: "Cooling Water Line Flow Regime & Heat Transfer Verification",
      industryContext: "A plant engineer is reviewing a chilled water loop supplying an industrial reactor jacket. Water at 15°C (density 999 kg/m³, dynamic viscosity 0.00114 Pa·s) flows at 2.2 m/s through a 75 mm (0.075 m) stainless steel pipe.",
      problemStatement: "Determine the Reynolds number to verify if the flow is turbulent enough to achieve high convective heat transfer coefficients without creating excessive pressure drop.",
      engineeringSolution: "Apply Re = (ρ × v × D) / μ: Re = (999 × 2.2 × 0.075) / 0.00114 = 164.835 / 0.00114 = 144,592. Because Re is well above 10,000, the thermal boundary layer is suppressed, ensuring robust turbulent heat transfer in accordance with the Dittus-Boelter correlation."
    },
    assumptions: [
      "The fluid exhibits Newtonian rheology where shear stress is directly proportional to shear rate.",
      "The pipe has a uniform, closed circular cross-section running completely full.",
      "The flow is steady and isothermal, maintaining constant density and viscosity throughout the section.",
      "The velocity represents the area-weighted average mean velocity across the cross-section."
    ],
    limitations: [
      "Non-circular ducts require calculating the hydraulic diameter (Dh = 4A / Pw) instead of internal diameter D.",
      "Non-Newtonian fluids (slurries, drilling muds, polymer solutions) require generalized Reynolds numbers (e.g. Metzner-Reed Re).",
      "Entrance regions (hydrodynamic development length) experience transitional velocity profiles before reaching fully developed status.",
      "Severe internal pipe scale or macroscopic obstructions can trigger premature transition at lower Reynolds numbers."
    ],
    commonMistakes: [
      "Entering pipe diameter in millimeters (e.g. 50) instead of meters (0.05), skewing the result by a factor of 1000.",
      "Confusing dynamic viscosity (μ in Pa·s or cP) with kinematic viscosity (ν in cSt or m²/s).",
      "Using room-temperature water viscosity for hot water (80°C) or chilled brine, where viscosity varies by more than 300%.",
      "Applying the laminar friction formula f = 64/Re to a system operating at Re > 4000."
    ],
    bestPractices: [
      "Always look up fluid viscosity at the exact operating bulk fluid temperature.",
      "In critical process designs, keep normal operating points outside the uncertain transitional zone (2000 < Re < 4000).",
      "For open channels or non-circular conduits, strictly compute the hydraulic diameter Dh = 4 × Area / Wetted Perimeter.",
      "Pair Reynolds calculations with relative pipe roughness (ε/D) to determine Darcy friction factors on the Moody chart."
    ],
    faqs: [
      {
        question: "What are the critical Reynolds number thresholds for internal pipe flow?",
        answer: "For standard circular pipe flow: Re < 2000 is laminar; 2000 ≤ Re ≤ 4000 is the critical transition zone; and Re > 4000 is fully turbulent flow."
      },
      {
        question: "Is the Reynolds number dimensionless?",
        answer: "Yes. In the SI system, (kg/m³) × (m/s) × (m) / (Pa·s) simplifies to (kg/(m·s)) / (kg/(m·s)) = 1, meaning it is purely dimensionless."
      },
      {
        question: "How does temperature affect the Reynolds number for liquids vs gases?",
        answer: "Heating a liquid decreases its viscosity, increasing the Reynolds number at a constant velocity. Conversely, heating a gas increases its viscosity, which decreases the Reynolds number."
      },
      {
        question: "What is the difference between dynamic and kinematic viscosity in Reynolds calculations?",
        answer: "Dynamic viscosity (μ) measures internal shear resistance (Pa·s). Kinematic viscosity (ν = μ/ρ) is dynamic viscosity divided by density (m²/s). The formula Re = (v × D) / ν yields the identical result."
      },
      {
        question: "Why does turbulent flow cause higher pressure drops in piping?",
        answer: "Turbulence creates chaotic eddies and cross-stream momentum exchange, dramatically steepening the velocity gradient at the pipe wall and generating higher shear stress and head loss."
      },
      {
        question: "What is hydraulic diameter, and when is it used?",
        answer: "Hydraulic diameter Dh = 4A/P (where A is area and P is wetted perimeter). It replaces D in Reynolds calculations for rectangular ducts, annular spaces, and open channels."
      },
      {
        question: "Can pipe flow remain laminar above Re = 2000 under laboratory conditions?",
        answer: "Yes. In extremely smooth pipes free of external vibrations and disturbances, laminar flow has been maintained up to Re ≈ 100,000, but in practical engineering systems, disturbances trigger turbulence at Re ≈ 2300–4000."
      },
      {
        question: "Which standards reference Reynolds number criteria?",
        answer: "Key standards include ISO 5167 for flow measurement, ASME MFC-3M, and Hydraulic Institute guidelines for piping and pump testing."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 5167-1:2022", title: "Measurement of fluid flow by means of pressure differential devices inserted in circular cross-section conduits" },
      { organization: "ASME", code: "ASME MFC-3M-2004", title: "Measurement of Fluid Flow in Pipes Using Orifice, Nozzle, and Venturi" },
      { organization: "Hydraulic Institute", code: "ANSI/HI 14.3-2019", title: "Rotodynamic Pumps for Design and Application" }
    ],
    internalLinks: {
      parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // =========================================================================
  // 2. DARCY-WEISBACH PRESSURE LOSS CALCULATOR
  // =========================================================================
  "darcy-weisbach-pressure-loss": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Darcy–Weisbach Pressure Loss Calculator | Pipe Friction Solver",
    metaDescription: "Calculate friction pressure drop (ΔP in kPa) along pipe conduits using the Darcy-Weisbach equation from friction factor, length, diameter, density, and velocity.",
    canonicalUrl,
    introduction: {
      overview: "The Darcy–Weisbach Pressure Loss Calculator computes the frictional pressure drop (ΔP in kPa) along circular pipes and conduits for incompressible fluid flow. The Darcy–Weisbach equation represents the most fundamental and universally valid theoretical model for continuous pipe friction, applicable across all Newtonian fluids, flow regimes, and pipe roughness conditions.\n\nAs fluid travels through a conduit, shear stresses generated at the pipe wall and viscous dissipation within the fluid stream continuously convert mechanical pressure and kinetic energy into non-recoverable thermal energy. This loss is directly proportional to conduit length and the square of flow velocity, while inversely proportional to pipe diameter.\n\nAccurate calculation of friction pressure drop is vital for sizing booster pumps, verifying minimum delivery pressures at municipal water taps, preventing vapor flashing in hydrocarbon lines, and optimizing pipeline operational energy costs.",
      applications: [
        "Calculating continuous pressure drop in water distribution networks and district heating mains.",
        "Sizing industrial transfer pumps and determining required discharge pressure ratings.",
        "Optimizing pipe diameters to minimize lifetime capital cost versus pumping energy consumption.",
        "Evaluating pressure gradients in oil, natural gas liquid (NGL), and chemical processing pipelines.",
        "Verifying fire protection distribution pressure requirements per NFPA 13 and NFPA 24."
      ],
      industries: [
        "Civil & Municipal Water Resources",
        "Chemical & Petrochemical Processing",
        "HVAC & Building Hydronic Services",
        "Oil & Gas Pipeline Transport",
        "Fire Protection Engineering"
      ]
    },
    quickAnswer: "The Darcy–Weisbach pressure loss is calculated using ΔP = f × (L / D) × (ρ × v² / 2). For a 100 meter pipe with diameter 0.1 m (100 mm), friction factor f = 0.02, fluid density 1000 kg/m³, and velocity 2.0 m/s, the pressure drop is exactly 40.0 kPa (0.40 bar).",
    governingEquation: {
      formula: "\\Delta P = f \\times \\left(\\frac{L}{D}\\right) \\times \\left(\\frac{\\rho \\times v^2}{2}\\right)",
      explanation: "Friction pressure loss (ΔP in Pascals or kPa) equals the Darcy friction factor (f) multiplied by length-to-diameter ratio (L / D) and dynamic pressure (½ρv²). Dividing the result in Pascals by 1000 yields the output in Kilopascals (kPa).",
      variables: [
        { symbol: "ΔP", label: "Pressure Loss", unit: "kPa", description: "Total frictional pressure drop along the pipe segment." },
        { symbol: "f", label: "Darcy Friction Factor", unit: "Ratio", description: "Dimensionless friction factor derived from Colebrook or Moody." },
        { symbol: "L", label: "Pipe Length", unit: "m", description: "Total length of the straight pipe segment." },
        { symbol: "D", label: "Inner Diameter", unit: "m", description: "Internal circular diameter of the conduit." },
        { symbol: "ρ", label: "Fluid Density", unit: "kg/m³", description: "Mass density of the flowing fluid." },
        { symbol: "v", label: "Flow Velocity", unit: "m/s", description: "Average cross-sectional flow speed." }
      ]
    },
    inputParameters: [
      {
        name: "f",
        label: "Friction Factor (f)",
        unit: "Ratio",
        defaultValue: 0.02,
        explanation: "Dimensionless Darcy-Weisbach friction factor. Baseline reference default is 0.02 (typical for commercial steel pipe in turbulent water flow)."
      },
      {
        name: "length",
        label: "Pipe Length (L)",
        unit: "m",
        defaultValue: 100,
        explanation: "Total straight pipeline run length in meters. Baseline value is 100 meters."
      },
      {
        name: "diameter",
        label: "Pipe Inner Dia (D)",
        unit: "m",
        defaultValue: 0.1,
        explanation: "Internal pipe diameter in meters (0.1 m = 100 mm = ~4 inches). Baseline value is 0.1 m."
      },
      {
        name: "density",
        label: "Fluid Density (ρ)",
        unit: "kg/m³",
        defaultValue: 1000,
        explanation: "Fluid density in kg/m³. Baseline default is 1000 kg/m³ (water at standard temperature)."
      },
      {
        name: "velocity",
        label: "Flow Velocity (v)",
        unit: "m/s",
        defaultValue: 2,
        explanation: "Mean cross-sectional fluid velocity in meters per second. Baseline value is 2.0 m/s."
      }
    ],
    outputExplanation: {
      unit: "Kilopascals (kPa)",
      interpretation: "The result of 40.0 kPa represents the hydraulic pressure dissipation over the 100-meter pipe run due entirely to wall friction.",
      designImpact: "Engineers must ensure the upstream pump or supply header provides at least 40.0 kPa above the required downstream terminal delivery pressure."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Friction Factor (f)", value: 0.02, unit: "Ratio" },
        { label: "Pipe Length (L)", value: 100, unit: "m" },
        { label: "Pipe Inner Dia (D)", value: 0.1, unit: "m" },
        { label: "Fluid Density (ρ)", value: 1000, unit: "kg/m³" },
        { label: "Flow Velocity (v)", value: 2, unit: "m/s" }
      ],
      substitution: "Substitute f = 0.02, L = 100 m, D = 0.1 m, ρ = 1000 kg/m³, and v = 2 m/s into ΔP = f × (L/D) × (ρ × v² / 2):",
      intermediateSteps: [
        "1. Compute geometric length-to-diameter ratio: 100 m / 0.1 m = 1000.",
        "2. Compute fluid dynamic pressure: 0.5 × 1000 kg/m³ × (2.0 m/s)² = 0.5 × 1000 × 4.0 = 2000 Pa.",
        "3. Multiply terms: 0.02 × 1000 × 2000 Pa = 40,000 Pa.",
        "4. Convert Pascals to Kilopascals: 40,000 Pa / 1000 = 40.0 kPa."
      ],
      finalResult: "40.0",
      unit: "Kilopascals (kPa)"
    },
    practicalExample: {
      scenarioTitle: "Municipal Booster Station Pipe Sizing & Pressure Drop Check",
      industryContext: "A civil engineer is designing a 500-meter treated water transmission main using 200 mm (0.2 m) ductile iron pipe (estimated f = 0.019). The design flow velocity is 1.8 m/s with water density of 1000 kg/m³.",
      problemStatement: "Determine total friction pressure drop in kPa and verify whether the existing 350 kPa booster pump can deliver water at the required minimum 200 kPa residual pressure.",
      engineeringSolution: "Apply ΔP = f × (L/D) × (0.5 × ρ × v²): ΔP = 0.019 × (500 / 0.2) × (0.5 × 1000 × 1.8²) = 0.019 × 2500 × 1620 = 76,950 Pa = 76.95 kPa. Adding this friction drop to the 200 kPa residual demand requires 276.95 kPa at the station outlet, confirming the 350 kPa pump provides adequate head with a 73 kPa safety margin."
    },
    assumptions: [
      "The fluid is incompressible and experiences steady, single-phase liquid flow.",
      "The conduit is fully primed and completely filled across its entire cross-sectional area.",
      "The friction factor f is uniform along the full pipe length.",
      "Minor losses from elbows, tees, valves, and reducers are excluded and must be added separately."
    ],
    limitations: [
      "Does not account for static elevation changes (which must be integrated using Bernoulli / energy grade line equations).",
      "Inapplicable to slurry flows where solid particle deposition alters the effective cross-sectional flow area.",
      "For compressible gas flows where pressure drops exceed 10% of inlet pressure, isothermal or adiabatic expansion models must be applied.",
      "Transient pressure spikes (water hammer) caused by rapid valve closure cannot be evaluated with this steady-state equation."
    ],
    commonMistakes: [
      "Confusing the Darcy friction factor (f) with the Fanning friction factor (f_F = f / 4), resulting in a fourfold error.",
      "Using outer nominal pipe size (NPS) rather than the actual internal diameter (ID) accounting for wall schedule thickness.",
      "Neglecting to square the velocity term (v²), which leads to dramatic underestimation of pressure drop at higher flow rates.",
      "Failing to convert pipe length and diameter into consistent SI units (meters) before calculation."
    ],
    bestPractices: [
      "Use the Colebrook-White equation or Swamee-Jain explicit formula to calculate friction factor f based on Reynolds number and pipe roughness ε/D.",
      "Keep water velocities between 1.2 m/s and 2.1 m/s in commercial systems to limit energy loss without causing excessive sedimentation.",
      "Account for pipe aging and internal tuberculation by increasing the effective surface roughness ε over time.",
      "Include standard 10–15% equivalent length allowances for valves and fittings during preliminary hydraulic sizing."
    ],
    faqs: [
      {
        question: "What is the difference between Darcy and Fanning friction factors?",
        answer: "The Darcy friction factor (f, used in civil and mechanical engineering) is exactly 4 times the Fanning friction factor (f_F, commonly used in chemical engineering). Always verify which convention your charts or correlations use."
      },
      {
        question: "How do I convert pressure loss in kPa to meters of head?",
        answer: "Divide pressure loss in kPa by (ρ × g / 1000). For water (density 1000 kg/m³, g = 9.81 m/s²), 40 kPa corresponds to 40 / 9.81 = 4.077 meters of head loss."
      },
      {
        question: "Why does doubling the velocity increase pressure loss by four times?",
        answer: "Pressure loss is directly proportional to kinetic energy (v²). Doubling flow velocity (2v) quadruples (2² = 4) the frictional pressure loss."
      },
      {
        question: "How does pipe diameter influence pressure drop for a fixed flow rate?",
        answer: "For a fixed volumetric flow rate Q, velocity is proportional to 1/D², making pressure drop proportional to 1/D⁵. Halving the pipe diameter increases friction loss by 32 times (2⁵ = 32)."
      },
      {
        question: "What is the Hazen-Williams equation, and how does it compare to Darcy-Weisbach?",
        answer: "Hazen-Williams is an empirical formula strictly calibrated for room-temperature water. Darcy-Weisbach is theoretically grounded and valid for any Newtonian fluid at any temperature."
      },
      {
        question: "How do I calculate friction factor f for laminar flow?",
        answer: "For laminar flow (Re < 2000), the Darcy friction factor is independent of pipe roughness and is calculated simply as f = 64 / Re."
      },
      {
        question: "What typical friction factor values occur in commercial steel pipe?",
        answer: "In turbulent water service, commercial steel pipes typically exhibit friction factors ranging between f = 0.015 and 0.025."
      },
      {
        question: "Which standards govern pipeline friction calculations?",
        answer: "Key standards include AWWA M11 for steel water pipes, ASME B31.3 for process piping, and ISO 5167."
      }
    ],
    standardsReferences: [
      { organization: "ASME", code: "ASME B31.3-2022", title: "Process Piping Design — Fluid Flow & Pressure Drop Specifications" },
      { organization: "AWWA", code: "AWWA Manual M11", title: "Steel Pipe — A Guide for Design and Installation" },
      { organization: "ISO", code: "ISO 13623:2017", title: "Petroleum and natural gas industries — Pipeline transportation systems" }
    ],
    internalLinks: {
      parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // =========================================================================
  // 3. BERNOULLI EQUATION CALCULATOR
  // =========================================================================
  "bernoulli-equation": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Bernoulli Equation Calculator | Fluid Energy Solver",
    metaDescription: "Calculate downstream fluid pressure (P2 in kPa) along streamlines using Bernoulli's energy conservation principle from pressure, velocity, and elevation heads.",
    canonicalUrl,
    introduction: {
      overview: "The Bernoulli Equation Calculator computes downstream static pressure (P2 in kPa) between two points along a fluid streamline based on the law of conservation of mechanical energy for steady, incompressible, frictionless flow. Bernoulli's principle states that the total mechanical energy—composed of static pressure head, dynamic kinetic velocity head, and potential elevation head—remains constant along any given streamline.\n\nWhen a fluid accelerates through a constriction or nozzle, its kinetic energy increases at the direct expense of its internal static pressure. Conversely, as fluid rises to higher elevation, gravitational potential energy increases while static pressure or velocity diminishes. In practical engineering, Bernoulli's formulation provides the foundational baseline for differential pressure flowmeters, venturis, siphon systems, open tank draining, and aerodynamic lift calculations.\n\nWhile real fluids experience frictional dissipation, Bernoulli's ideal energy balance serves as the essential theoretical benchmark upon which friction head loss and pump energy terms are added in extended engineering models.",
      applications: [
        "Analyzing pressure variations across tapering nozzles, Venturi meters, and flow constrictions.",
        "Calculating draining discharge rates and bottom nozzle pressures in atmospheric storage tanks (Torricelli's theorem).",
        "Designing siphon lines and determining maximum allowable crest elevations without vapor flashing.",
        "Evaluating aerodynamic lift and pressure distributions over airfoils and wind turbine blades.",
        "Determining static and stagnation pressures in Pitot-static tube velocity measurements."
      ],
      industries: [
        "Aerospace & Aerodynamics",
        "Hydraulic & Water Resources Engineering",
        "Chemical Process & Turbomachinery",
        "Marine & Naval Architecture",
        "HVAC Ductwork & Air Distribution"
      ]
    },
    quickAnswer: "Bernoulli's equation states P2 = P1 + ½ρ(v1² - v2²) + ρg(z1 - z2). For an initial pressure of 200 kPa at velocity 2 m/s and elevation 10 m descending to 0 m at 5 m/s (water density 1000 kg/m³), the downstream pressure P2 is 287.6 kPa.",
    governingEquation: {
      formula: "P_2 = P_1 + \\frac{1}{2}\\rho(v_1^2 - v_2^2) + \\rho g (z_1 - z_2)",
      explanation: "Downstream pressure (P2 in kPa) equals upstream pressure (P1 in kPa) plus the change in dynamic kinetic energy (½ρ[v1² - v2²] / 1000) plus the hydrostatic elevation head change (ρg[z1 - z2] / 1000). Standard gravity is g = 9.81 m/s².",
      variables: [
        { symbol: "P2", label: "Final Pressure", unit: "kPa", description: "Static fluid pressure at downstream point 2." },
        { symbol: "P1", label: "Initial Pressure", unit: "kPa", description: "Static fluid pressure at upstream point 1." },
        { symbol: "v1", label: "Initial Velocity", unit: "m/s", description: "Fluid velocity at upstream point 1." },
        { symbol: "v2", label: "Final Velocity", unit: "m/s", description: "Fluid velocity at downstream point 2." },
        { symbol: "z1", label: "Initial Elevation", unit: "m", description: "Vertical geodetic elevation at point 1." },
        { symbol: "z2", label: "Final Elevation", unit: "m", description: "Vertical geodetic elevation at point 2." },
        { symbol: "ρ", label: "Fluid Density", unit: "kg/m³", description: "Mass density of the flowing fluid." }
      ]
    },
    inputParameters: [
      {
        name: "p1",
        label: "Initial Pressure (P1)",
        unit: "kPa",
        defaultValue: 200,
        explanation: "Static pressure at initial upstream station 1 in Kilopascals. Baseline value is 200 kPa."
      },
      {
        name: "v1",
        label: "Initial Velocity (v1)",
        unit: "m/s",
        defaultValue: 2,
        explanation: "Fluid flow velocity at station 1 in meters per second. Baseline value is 2.0 m/s."
      },
      {
        name: "v2",
        label: "Final Velocity (v2)",
        unit: "m/s",
        defaultValue: 5,
        explanation: "Fluid flow velocity at downstream station 2 in meters per second. Baseline value is 5.0 m/s."
      },
      {
        name: "z1",
        label: "Initial Elevation (z1)",
        unit: "m",
        defaultValue: 10,
        explanation: "Geodetic elevation of station 1 in meters. Baseline value is 10 meters."
      },
      {
        name: "z2",
        label: "Final Elevation (z2)",
        unit: "m",
        defaultValue: 0,
        explanation: "Geodetic elevation of downstream station 2 in meters. Baseline value is 0 meters."
      },
      {
        name: "density",
        label: "Fluid Density (ρ)",
        unit: "kg/m³",
        defaultValue: 1000,
        explanation: "Fluid density in kg/m³. Baseline default is 1000 kg/m³ (water)."
      }
    ],
    outputExplanation: {
      unit: "Kilopascals (kPa)",
      interpretation: "The downstream pressure is 287.6 kPa. The 10-meter descent converts potential energy into 98.1 kPa of hydrostatic pressure, overcoming the 10.5 kPa pressure reduction caused by fluid acceleration from 2 to 5 m/s.",
      designImpact: "Confirms that gravity head gain outweighs kinetic pressure drop, resulting in a net pressure increase at station 2."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Initial Pressure (P1)", value: 200, unit: "kPa" },
        { label: "Initial Velocity (v1)", value: 2, unit: "m/s" },
        { label: "Final Velocity (v2)", value: 5, unit: "m/s" },
        { label: "Initial Elevation (z1)", value: 10, unit: "m" },
        { label: "Final Elevation (z2)", value: 0, unit: "m" },
        { label: "Fluid Density (ρ)", value: 1000, unit: "kg/m³" }
      ],
      substitution: "Substitute values into P2 = P1 + ½ρ(v1² - v2²) + ρg(z1 - z2):",
      intermediateSteps: [
        "1. Compute kinetic energy change: 0.5 × 1000 × (2² - 5²) = 500 × (4 - 25) = 500 × (-21) = -10,500 Pa = -10.5 kPa.",
        "2. Compute potential elevation head change: 1000 × 9.81 × (10 - 0) = 98,100 Pa = +98.1 kPa.",
        "3. Sum all pressure components: P2 = 200 kPa + (-10.5 kPa) + 98.1 kPa = 287.6 kPa."
      ],
      finalResult: "287.6",
      unit: "Kilopascals (kPa)"
    },
    practicalExample: {
      scenarioTitle: "Hydroelectric Penstock Inlet-to-Turbine Energy Transition",
      industryContext: "A mini-hydro penstock takes water from a reservoir intake (elevation 150 m, velocity 1.0 m/s, static pressure 101.3 kPa) and delivers it down to a powerhouse manifold at elevation 100 m, where the pipe constricts and velocity reaches 8.0 m/s.",
      problemStatement: "Calculate the static water pressure entering the turbine manifold neglecting friction.",
      engineeringSolution: "Apply P2 = P1 + 0.5ρ(v1² - v2²) + ρg(z1 - z2): Kinetic change = 0.5 × 1000 × (1² - 8²) = 500 × (-63) = -31,500 Pa (-31.5 kPa). Potential head gain = 1000 × 9.81 × (150 - 100) = 490,500 Pa (+490.5 kPa). Downstream pressure P2 = 101.3 - 31.5 + 490.5 = 560.3 kPa (5.60 bar absolute)."
    },
    assumptions: [
      "The fluid is inviscid (zero viscosity, no frictional head dissipation).",
      "The flow is strictly steady, meaning velocity and pressure do not vary with time at any point.",
      "The fluid is incompressible with constant density ρ along the entire streamline.",
      "Points 1 and 2 lie along the exact same fluid streamline or within an irrotational flow field."
    ],
    limitations: [
      "Real piping networks experience friction losses that must be added as head loss (hf) via the extended energy equation.",
      "Does not account for shaft work added by pumps or extracted by turbines between stations 1 and 2.",
      "Invalid across shock waves or boundary layer separation zones where rotational turbulence dominates.",
      "Inapplicable to compressible high-speed gas flows (Mach > 0.3) without thermodynamic gas expansion corrections."
    ],
    commonMistakes: [
      "Mixing gauge pressure at point 1 with absolute pressure at point 2.",
      "Forgetting to divide Pa by 1000 when summing with kPa pressure inputs.",
      "Reversing the elevation subtraction order (using z2 - z1 instead of z1 - z2).",
      "Applying Bernoulli across a pump or turbine without adding the mechanical head term."
    ],
    bestPractices: [
      "Establish a clear, fixed horizontal datum plane before assigning elevation coordinates z1 and z2.",
      "For real piping systems, incorporate the Darcy-Weisbach head loss term: P1/γ + v1²/2g + z1 = P2/γ + v2²/2g + z2 + hf.",
      "Check that static pressure at any point does not drop below the liquid vapor pressure (Pv) to avoid cavitation.",
      "Ensure velocity values are derived consistently from continuity (A1·v1 = A2·v2)."
    ],
    faqs: [
      {
        question: "Why does fluid pressure decrease when velocity increases?",
        answer: "Because total mechanical energy along a streamline is conserved. When fluid accelerates into a constriction, kinetic energy increases, which requires an equal decrease in static pressure energy."
      },
      {
        question: "What is the difference between static, dynamic, and total pressure?",
        answer: "Static pressure is the thermodynamic pressure felt moving with the fluid. Dynamic pressure is the kinetic energy term (½ρv²). Total (stagnation) pressure is their sum: P_total = P_static + ½ρv²."
      },
      {
        question: "How does the extended energy equation differ from the basic Bernoulli equation?",
        answer: "The extended energy equation incorporates practical engineering terms: pump head (hp), turbine extraction head (ht), and frictional head loss (hf): (P1/γ + v1²/2g + z1 + hp = P2/γ + v2²/2g + z2 + ht + hf)."
      },
      {
        question: "What is cavitation, and how does Bernoulli relate to it?",
        answer: "When fluid velocity surges through a constriction, static pressure can drop below the liquid's vapor pressure, causing vapor bubbles to flash and violently collapse downstream, damaging equipment."
      },
      {
        question: "Can Bernoulli's equation be applied to gas flows?",
        answer: "Yes, provided the gas velocity is low (Mach < 0.3) and pressure changes are small enough that density variations remain under 5%."
      },
      {
        question: "What is Torricelli's Law?",
        answer: "Torricelli's Law is a specific application of Bernoulli's equation showing that liquid discharge velocity from an open tank orifice at depth h is v = √(2gh)."
      },
      {
        question: "What is a streamline?",
        answer: "A streamline is a continuous line in a fluid flow field everywhere tangent to the instantaneous local velocity vector."
      },
      {
        question: "Which standards govern aerodynamic and hydraulic Bernoulli applications?",
        answer: "ASME PTC 19.5 for flow measurement, ISO 5167, and ANSI/AMCA 210 for aerodynamic duct testing."
      }
    ],
    standardsReferences: [
      { organization: "ASME", code: "ASME PTC 19.5-2004", title: "Flow Measurement — Application of Energy and Continuity Relations" },
      { organization: "ISO", code: "ISO 5167-2:2022", title: "Measurement of Fluid Flow — Orifice Plates, Nozzles, and Venturi Tubes" },
      { organization: "AMCA", code: "ANSI/AMCA 210-16", title: "Laboratory Methods of Testing Fans for Aerodynamic Performance Rating" }
    ],
    internalLinks: {
      parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // =========================================================================
  // 4. FLOW RATE CALCULATOR
  // =========================================================================
  "flow-rate": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Flow Rate Calculator | Pipe Discharge Solver",
    metaDescription: "Calculate volumetric flow rate Q in liters per second (L/s) from pipe internal diameter and mean fluid velocity using Q = A × v = (πD²/4) × v.",
    canonicalUrl,
    introduction: {
      overview: "The Flow Rate Calculator computes the volumetric discharge capacity (Q in liters per second, L/s) of a full circular pipe based on internal diameter (D) and cross-sectional mean fluid velocity (v). Volumetric flow rate represents the physical volume of fluid crossing a stationary plane per unit time, serving as the core quantity for pipeline sizing, water network distribution, pump selection, and industrial process control.\n\nThe relationship Q = A × v combines circular cross-sectional geometry with fluid kinematics. Because cross-sectional area scales with the square of diameter (A = πD²/4), small increments in pipe diameter produce substantial increases in flow capacity at a constant flow velocity.\n\nMaintaining appropriate flow rates and velocities is essential in piping design to balance pipe capital cost against pumping power dissipation while avoiding erosion, acoustic noise, sediment settling, and water hammer risks.",
      applications: [
        "Sizing municipal water supply mains, distribution feeders, and service lateral connections.",
        "Selecting industrial process transfer pumps, dosing skids, and control valve trim sizes.",
        "Evaluating cooling water circulation rates in chiller loops and cooling tower circuits.",
        "Verifying fire sprinkler branch line water supply discharge per NFPA 13 requirements.",
        "Designing agricultural irrigation mainlines and wastewater effluent gravity conduits."
      ],
      industries: [
        "Water & Wastewater Utilities",
        "HVAC & Hydronic Building Engineering",
        "Chemical & Petrochemical Processing",
        "Agriculture & Irrigation Engineering",
        "Fire Protection System Design"
      ]
    },
    quickAnswer: "Volumetric flow rate is calculated using Q = (π × D² / 4) × v × 1000. For a pipe with internal diameter 0.1 m (100 mm) and mean velocity 2.5 m/s, the cross-sectional area is 0.007854 m² and the discharge flow rate is exactly 19.635 L/s (70.69 m³/h).",
    governingEquation: {
      formula: "Q = A \\times v = \\left(\\frac{\\pi \\times D^2}{4}\\right) \\times v",
      explanation: "Volumetric flow rate (Q in m³/s) equals pipe cross-sectional area (A in m²) multiplied by average fluid velocity (v in m/s). Multiplying m³/s by 1000 converts the final result to liters per second (L/s).",
      variables: [
        { symbol: "Q", label: "Volumetric Flow Rate", unit: "L/s", description: "Discharge volume passing through the pipe per second." },
        { symbol: "A", label: "Cross-Sectional Area", unit: "m²", description: "Internal circular flow area (A = πD²/4)." },
        { symbol: "D", label: "Pipe Diameter", unit: "m", description: "Internal diameter of the pipe conduit." },
        { symbol: "v", label: "Mean Velocity", unit: "m/s", description: "Average cross-sectional fluid velocity." }
      ]
    },
    inputParameters: [
      {
        name: "diameter",
        label: "Pipe Diameter (D)",
        unit: "m",
        defaultValue: 0.1,
        explanation: "Internal pipe diameter in meters (0.1 m = 100 mm = ~4 inches). Baseline value is 0.1 m."
      },
      {
        name: "velocity",
        label: "Mean Velocity (v)",
        unit: "m/s",
        defaultValue: 2.5,
        explanation: "Mean cross-sectional fluid velocity in meters per second. Baseline value is 2.5 m/s."
      }
    ],
    outputExplanation: {
      unit: "Liters per Second (L/s)",
      interpretation: "The result of 19.635 L/s indicates that 19.635 liters (0.019635 cubic meters) of fluid pass through the pipe section every second.",
      designImpact: "Allows engineers to select appropriately sized pumps, flow meters, and downstream process vessels capable of handling ~70.7 m³/h."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Pipe Diameter (D)", value: 0.1, unit: "m" },
        { label: "Mean Velocity (v)", value: 2.5, unit: "m/s" }
      ],
      substitution: "Substitute D = 0.1 m and v = 2.5 m/s into Q = (π × D² / 4) × v:",
      intermediateSteps: [
        "1. Compute pipe internal cross-sectional area: A = π × (0.1)² / 4 = 3.14159265 × 0.01 / 4 = 0.00785398 m².",
        "2. Multiply area by velocity to get cubic meters per second: Q_m3s = 0.00785398 m² × 2.5 m/s = 0.01963495 m³/s.",
        "3. Convert m³/s to liters per second: 0.01963495 × 1000 = 19.635 L/s."
      ],
      finalResult: "19.635",
      unit: "Liters per Second (L/s)"
    },
    practicalExample: {
      scenarioTitle: "Cooling Tower Recirculation Main Flow Capacity Verification",
      industryContext: "A facility manager is upgrading a central cooling plant. A 250 mm (0.25 m) internal diameter condenser water pipe operates at a recommended design velocity of 2.0 m/s.",
      problemStatement: "Determine the total volumetric flow rate in L/s and cubic meters per hour (m³/h) to confirm chiller compatibility.",
      engineeringSolution: "Apply Q = (π × D² / 4) × v: Area A = π × 0.25² / 4 = 0.049087 m². Volumetric flow rate Q = 0.049087 × 2.0 = 0.098175 m³/s = 98.175 L/s. In hourly units, Q = 98.175 × 3.6 = 353.43 m³/h, confirming full capacity for the 1000-ton chiller requirement."
    },
    assumptions: [
      "The pipe has a circular geometry and flows completely full under steady pressurized conditions.",
      "The fluid velocity represents the area-weighted average velocity across the entire cross-section.",
      "The fluid is incompressible under steady-state operating conditions."
    ],
    limitations: [
      "Inapplicable to partially filled gravity drainage pipes (which require Manning's open-channel equation).",
      "Non-circular ducts require calculating actual cross-sectional geometric area rather than circular πD²/4.",
      "Does not account for velocity profile distortion immediately downstream of elbows, valves, or tees."
    ],
    commonMistakes: [
      "Entering nominal pipe diameter (NPS) rather than the true inside diameter (ID) based on pipe wall schedule.",
      "Entering diameter in millimeters without converting to meters, causing an error factor of 1,000,000 in area.",
      "Confusing volumetric flow rate (L/s, m³/h) with mass flow rate (kg/s, tonnes/h)."
    ],
    bestPractices: [
      "Design liquid piping within standard economic velocity guidelines: 1.0–2.5 m/s for general water service, 0.8–1.2 m/s for pump suction.",
      "Verify internal diameter using manufacturer pipe schedule tables (e.g. Schedule 40 vs Schedule 80 steel).",
      "For mass flow rate determination, multiply volumetric flow (m³/s) by fluid density (ρ in kg/m³)."
    ],
    faqs: [
      {
        question: "How do I convert liters per second (L/s) to cubic meters per hour (m³/h)?",
        answer: "Multiply L/s by 3.6. For example, 19.635 L/s × 3.6 = 70.686 m³/h."
      },
      {
        question: "How do I convert liters per second (L/s) to US Gallons per Minute (GPM)?",
        answer: "Multiply L/s by 15.8503. For example, 19.635 L/s × 15.8503 ≈ 311.2 GPM."
      },
      {
        question: "Why is pipe inner diameter so critical in flow calculations?",
        answer: "Because flow area scales with diameter squared (D²). A 20% increase in pipe diameter increases flow area and flow capacity by 44% at the same velocity."
      },
      {
        question: "What is the difference between volumetric flow rate and mass flow rate?",
        answer: "Volumetric flow rate (Q) measures volume per unit time (m³/s, L/s). Mass flow rate (ṁ) measures mass per unit time (kg/s) and equals Q × ρ."
      },
      {
        question: "What velocity is recommended for pump suction piping?",
        answer: "Suction velocity is typically limited to 0.8–1.2 m/s to minimize friction losses and prevent Net Positive Suction Head (NPSH) cavitation."
      },
      {
        question: "What velocity is recommended for pump discharge piping?",
        answer: "Discharge piping is typically sized for 1.5–2.5 m/s to balance pipe material cost against pumping energy losses."
      },
      {
        question: "Can this formula be used for partially full gravity sewer pipes?",
        answer: "No. Partially full gravity pipes require Manning's equation or hydraulic element charts based on wetted depth."
      },
      {
        question: "Which standards govern pipeline flow sizing?",
        answer: "Standards include AWWA M11 for water transmission, ASHRAE Fundamentals for HVAC piping, and ASME B31.3 for process piping."
      }
    ],
    standardsReferences: [
      { organization: "AWWA", code: "AWWA M11", title: "Steel Pipe — A Guide for Design and Installation" },
      { organization: "ASHRAE", code: "ASHRAE Handbook — Fundamentals", title: "Pipe Sizing & Fluid Flow Principles (Chapter 22)" },
      { organization: "ASME", code: "ASME B31.3-2022", title: "Process Piping Design Standards" }
    ],
    internalLinks: {
      parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // =========================================================================
  // 5. PIPE VELOCITY CALCULATOR
  // =========================================================================
  "pipe-velocity": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Pipe Velocity Calculator | Fluid Flow Speed Solver",
    metaDescription: "Calculate mean fluid velocity in meters per second (m/s) from volumetric flow rate Q and pipe inner diameter D using v = Q / A = (4Q) / (πD²).",
    canonicalUrl,
    introduction: {
      overview: "The Pipe Velocity Calculator determines the cross-sectional mean fluid velocity (v in meters per second, m/s) from the volumetric flow rate (Q in L/s) and the internal pipe diameter (D in meters). Fluid velocity is the single most critical governing parameter in hydraulic piping design, dictating pipe wall shear stress, Reynolds number regime transitions, erosive wear, acoustic noise generation, and frictional head loss.\n\nBy rearranging the continuity equation v = Q / A = 4Q / (πD²), this tool allows engineers to evaluate whether a selected pipe diameter maintains fluid speed within recommended economic and mechanical design limits. Excessively high velocities cause severe pressure drops, water hammer pressure transients, and cavitation, whereas excessively low velocities result in oversized, uneconomic piping and unwanted sedimentation in slurry or wastewater applications.\n\nPipe velocity checks are a mandatory step during hydraulic network design across municipal, industrial, HVAC hydronic, and hydrocarbon pipeline sectors.",
      applications: [
        "Verifying that water velocities in domestic and commercial piping comply with plumbing code limits (typically < 2.4 m/s).",
        "Evaluating pump suction lines to guarantee low velocity (< 1.2 m/s) and prevent suction cavitation.",
        "Sizing compressed air and gas distribution headers to restrict velocity below 6–10 m/s.",
        "Designing storm and sanitary sewer lines to maintain minimum self-cleansing velocity (> 0.75 m/s).",
        "Optimizing district cooling and heating hydronic loop piping for minimum lifecycle cost."
      ],
      industries: [
        "Building Mechanical Services & Plumbing",
        "Municipal Water & Wastewater Infrastructure",
        "Oil & Gas Process Piping",
        "Chemical Manufacturing",
        "Industrial Plant Engineering"
      ]
    },
    quickAnswer: "Mean fluid velocity is calculated using v = (Q / 1000) / (π × D² / 4) = (4 × Q / 1000) / (π × D²). For a flow rate of 25 L/s (0.025 m³/s) through a pipe with internal diameter 0.1 m (100 mm), the mean velocity is exactly 3.183 m/s.",
    governingEquation: {
      formula: "v = \\frac{Q}{A} = \\frac{4 \\times Q}{\\pi \\times D^2}",
      explanation: "Mean velocity (v in m/s) equals volumetric flow rate (Q converted from L/s to m³/s by dividing by 1000) divided by internal cross-sectional area (A = πD²/4 in m²).",
      variables: [
        { symbol: "v", label: "Mean Velocity", unit: "m/s", description: "Average cross-sectional fluid velocity." },
        { symbol: "Q", label: "Flow Rate", unit: "L/s", description: "Volumetric discharge rate through the conduit." },
        { symbol: "D", label: "Pipe Diameter", unit: "m", description: "Internal diameter of the circular pipe." },
        { symbol: "A", label: "Cross-Sectional Area", unit: "m²", description: "Internal cross-sectional flow area (A = πD²/4)." }
      ]
    },
    inputParameters: [
      {
        name: "flowRate",
        label: "Flow Rate (Q)",
        unit: "L/s",
        defaultValue: 25,
        explanation: "Volumetric flow rate in liters per second (L/s). Baseline value is 25 L/s."
      },
      {
        name: "diameter",
        label: "Pipe Diameter (D)",
        unit: "m",
        defaultValue: 0.1,
        explanation: "Internal pipe diameter in meters (0.1 m = 100 mm = ~4 inches). Baseline value is 0.1 m."
      }
    ],
    outputExplanation: {
      unit: "Meters per Second (m/s)",
      interpretation: "The result of 3.183 m/s indicates that fluid moves through the pipe at an average speed of 3.183 meters every second.",
      designImpact: "A velocity of 3.18 m/s exceeds standard continuous commercial water guidelines (~2.0–2.4 m/s), indicating the pipe diameter should be upsized to 125 mm or 150 mm to avoid excessive pressure loss."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Flow Rate (Q)", value: 25, unit: "L/s" },
        { label: "Pipe Diameter (D)", value: 0.1, unit: "m" }
      ],
      substitution: "Substitute Q = 25 L/s (0.025 m³/s) and D = 0.1 m into v = (4 × Q) / (π × D²):",
      intermediateSteps: [
        "1. Convert flow rate to cubic meters per second: Q_m3s = 25 L/s / 1000 = 0.025 m³/s.",
        "2. Compute internal pipe cross-sectional area: A = π × (0.1 m)² / 4 = 3.14159265 × 0.01 / 4 = 0.00785398 m².",
        "3. Divide flow rate by cross-sectional area: v = 0.025 m³/s / 0.00785398 m² = 3.1831 m/s."
      ],
      finalResult: "3.183",
      unit: "Meters per Second (m/s)"
    },
    practicalExample: {
      scenarioTitle: "Commercial Building Chilled Water Header Velocity Audit",
      industryContext: "A mechanical consultant is auditing an existing 150 mm (0.15 m ID) chilled water header carrying 30 L/s during peak cooling hours.",
      problemStatement: "Determine fluid velocity and verify if it complies with the ASHRAE maximum recommendation of 2.5 m/s for closed-loop hydronic piping.",
      engineeringSolution: "Apply v = (4 × Q) / (π × D²): Q = 30 / 1000 = 0.03 m³/s. Area A = π × 0.15² / 4 = 0.01767 m². Velocity v = 0.03 / 0.01767 = 1.698 m/s (~1.70 m/s). Because 1.70 m/s is below the 2.5 m/s limit, the existing header operates safely within acoustic and energy standards."
    },
    assumptions: [
      "The conduit is a circular pipe flowing 100% full under pressurized steady flow.",
      "The fluid is incompressible with uniform bulk velocity distribution across the cross-section.",
      "Steady-state conditions where volumetric flow rate does not pulsate over time."
    ],
    limitations: [
      "Does not capture the radial velocity profile (parabolic in laminar flow, power-law 1/7th in turbulent flow); calculates mean velocity only.",
      "Partially filled gravity conduits require open-channel hydraulic radius calculations.",
      "Non-circular ducts must use actual cross-sectional geometric area."
    ],
    commonMistakes: [
      "Using outer nominal pipe diameter rather than the true inside diameter after subtracting wall thickness.",
      "Forgetting to convert liters per second to cubic meters per second (dividing by 1000).",
      "Neglecting velocity limits on copper pipe, where velocities > 2.0 m/s cause premature erosion corrosion."
    ],
    bestPractices: [
      "Maintain liquid velocity between 1.2 m/s and 2.1 m/s in pumped distribution mains.",
      "Limit pump suction line velocity to 0.8–1.2 m/s to prevent vortexing and cavitation.",
      "For copper domestic water lines, limit velocity to 1.5 m/s for hot water and 2.4 m/s for cold water per CDA standards.",
      "For wastewater and slurry pipelines, ensure velocity remains above 0.75–0.9 m/s to prevent solid particle deposition."
    ],
    faqs: [
      {
        question: "What is considered a safe water velocity in building piping?",
        answer: "Standard building codes typically recommend 1.2–2.0 m/s for general water lines. Velocities above 2.4 m/s create acoustic noise, pipe erosion, and severe water hammer risks."
      },
      {
        question: "What is the self-cleansing velocity in wastewater piping?",
        answer: "Wastewater lines require a minimum velocity of 0.75 m/s (2.5 ft/s) to keep suspended solids and grit in suspension and prevent blockages."
      },
      {
        question: "How does pipe velocity affect water hammer surge pressure?",
        answer: "Water hammer pressure surge (Joukowsky equation: ΔP = ρ × c × Δv) is directly proportional to the fluid velocity change. Higher velocities generate significantly larger destructive pressure spikes upon rapid valve closure."
      },
      {
        question: "How does velocity vary across the pipe radius?",
        answer: "Fluid velocity is zero at the pipe wall (no-slip condition) and reaches a maximum at the centerline. In laminar flow, the centerline velocity is 2.0 times the mean velocity; in turbulent flow, it is approximately 1.2 times the mean."
      },
      {
        question: "Why should pump suction lines have lower velocity than discharge lines?",
        answer: "Lower suction velocity (0.8–1.2 m/s) minimizes friction head loss, preserving available suction pressure (NPSHA) and preventing pump cavitation."
      },
      {
        question: "How do I convert velocity from m/s to feet per second (ft/s)?",
        answer: "Multiply m/s by 3.28084. For example, 3.183 m/s × 3.28084 ≈ 10.44 ft/s."
      },
      {
        question: "What happens if velocity is too low in hydronic heating pipes?",
        answer: "Air bubbles cannot be carried along to air separators and become trapped at high points, causing air locks and restricting thermal circulation."
      },
      {
        question: "Which standards govern velocity limits in piping?",
        answer: "ASHRAE 90.1, International Plumbing Code (IPC), Copper Development Association (CDA), and AWWA manuals."
      }
    ],
    standardsReferences: [
      { organization: "ASHRAE", code: "ASHRAE 90.1-2022", title: "Energy Standard for Buildings — Hydronic Piping Velocity Criteria" },
      { organization: "ICC", code: "International Plumbing Code (IPC) 2021", title: "Water Supply and Distribution Sizing Limits" },
      { organization: "CDA", code: "Copper Tube Handbook", title: "Maximum Velocity Guidelines for Copper Water Piping" }
    ],
    internalLinks: {
      parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // =========================================================================
  // 6. CONTINUITY EQUATION CALCULATOR
  // =========================================================================
  "continuity-equation": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Continuity Equation Calculator | Pipe Constriction Solver",
    metaDescription: "Calculate exit fluid velocity (v2 in m/s) across pipe transitions, reductions, and expansions using the continuity law A1·v1 = A2·v2 (v2 = v1 × [D1/D2]²).",
    canonicalUrl,
    introduction: {
      overview: "The Continuity Equation Calculator evaluates fluid velocity changes across tapering, reducing, or expanding circular pipe transitions based on the fundamental law of conservation of mass. For steady, 1D, incompressible fluid flow through a closed conduit, mass flow rate remains strictly constant across every consecutive cross-section: ṁ = ρ1·A1·v1 = ρ2·A2·v2.\n\nWhen fluid density remains constant (incompressible liquid flow), mass conservation simplifies directly to volumetric flow continuity: A1·v1 = A2·v2. Because the cross-sectional area of a circular pipe is proportional to the square of its diameter (A = πD²/4), the exit velocity varies inversely with the square of the diameter ratio: v2 = v1 × (D1 / D2)².\n\nThis governing geometric relationship dictates fluid acceleration through nozzles, Venturi meters, and pipe reducers, as well as deceleration through diffusers and expanding conduits. Applying the continuity equation is the essential first step in determining dynamic pressure surges and calculating downstream pressure variations via Bernoulli's theorem.",
      applications: [
        "Calculating fluid velocity acceleration through pipe reducers and constriction nozzles.",
        "Sizing fire hose nozzles and industrial spray nozzles for target jet discharge velocities.",
        "Evaluating throat velocities in Venturi flowmeters and differential pressure devices.",
        "Designing hydraulic diffusers and draft tubes for kinetic energy recovery.",
        "Analyzing pipeline diameter transitions in municipal water distribution networks."
      ],
      industries: [
        "Fluid Power & Hydraulic Systems",
        "Municipal Water & Wastewater Engineering",
        "Fire Protection & Emergency Response",
        "Chemical Process & Refineries",
        "Aerospace & Propulsion Systems"
      ]
    },
    quickAnswer: "The continuity equation states v2 = v1 × (D1 / D2)². For an entry velocity of 1.5 m/s through a 0.2 m (200 mm) diameter pipe tapering to a 0.1 m (100 mm) diameter exit, the exit velocity is exactly 6.0 m/s (a 4-fold increase).",
    governingEquation: {
      formula: "v_2 = v_1 \\times \\left(\\frac{D_1}{D_2}\\right)^2",
      explanation: "Exit velocity (v2 in m/s) equals entry velocity (v1 in m/s) multiplied by the square of the diameter ratio (D1 / D2)², derived directly from cross-sectional area continuity A1·v1 = A2·v2.",
      variables: [
        { symbol: "v2", label: "Exit Velocity", unit: "m/s", description: "Cross-sectional mean fluid velocity at downstream exit station 2." },
        { symbol: "v1", label: "Entry Velocity", unit: "m/s", description: "Cross-sectional mean fluid velocity at upstream entry station 1." },
        { symbol: "D1", label: "Entry Diameter", unit: "m", description: "Internal circular diameter of the upstream pipe section." },
        { symbol: "D2", label: "Exit Diameter", unit: "m", description: "Internal circular diameter of the downstream constricted section." }
      ]
    },
    inputParameters: [
      {
        name: "v1",
        label: "Entry Velocity (v1)",
        unit: "m/s",
        defaultValue: 1.5,
        explanation: "Fluid flow velocity at initial upstream station 1 in meters per second. Baseline value is 1.5 m/s."
      },
      {
        name: "d1",
        label: "Entry Diameter (D1)",
        unit: "m",
        defaultValue: 0.2,
        explanation: "Internal diameter of upstream pipe 1 in meters (0.2 m = 200 mm = ~8 inches). Baseline value is 0.2 m."
      },
      {
        name: "d2",
        label: "Exit Diameter (D2)",
        unit: "m",
        defaultValue: 0.1,
        explanation: "Internal diameter of downstream pipe 2 in meters (0.1 m = 100 mm = ~4 inches). Baseline value is 0.1 m."
      }
    ],
    outputExplanation: {
      unit: "Meters per Second (m/s)",
      interpretation: "Halving the pipe diameter from 0.2 m to 0.1 m reduces the cross-sectional area by a factor of 4, forcing fluid velocity to quadruple from 1.5 m/s to 6.0 m/s.",
      designImpact: "The resulting high velocity (6.0 m/s) will cause significant dynamic pressure head (½ρv² = 18 kPa) and steep frictional losses, requiring verification of downstream pipe pressure ratings."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Entry Velocity (v1)", value: 1.5, unit: "m/s" },
        { label: "Entry Diameter (D1)", value: 0.2, unit: "m" },
        { label: "Exit Diameter (D2)", value: 0.1, unit: "m" }
      ],
      substitution: "Substitute v1 = 1.5 m/s, D1 = 0.2 m, and D2 = 0.1 m into v2 = v1 × (D1 / D2)²:",
      intermediateSteps: [
        "1. Compute diameter ratio: D1 / D2 = 0.2 m / 0.1 m = 2.0.",
        "2. Square the diameter ratio: (2.0)² = 4.0 (area reduction ratio).",
        "3. Multiply entry velocity by area ratio: v2 = 1.5 m/s × 4.0 = 6.0 m/s."
      ],
      finalResult: "6.0",
      unit: "Meters per Second (m/s)"
    },
    practicalExample: {
      scenarioTitle: "Fire Monitor Deluge Nozzle Jet Velocity Sizing",
      industryContext: "An industrial fire protection engineer is designing a foam deluge monitor fed by a 100 mm (0.1 m) supply pipe at 3.0 m/s water flow. The discharge nozzle tip has an exit diameter of 40 mm (0.04 m).",
      problemStatement: "Determine the exit jet discharge velocity to evaluate effective stream reach and nozzle reaction force.",
      engineeringSolution: "Apply v2 = v1 × (D1 / D2)²: v2 = 3.0 × (0.1 / 0.04)² = 3.0 × (2.5)² = 3.0 × 6.25 = 18.75 m/s. The 18.75 m/s nozzle jet velocity produces a substantial trajectory throw distance, and reaction force is computed from mass flow rate (ṁ × v2)."
    },
    assumptions: [
      "The fluid is strictly incompressible with constant density (ρ1 = ρ2) across the entire transition.",
      "The flow is steady and 1D, with uniform velocity profiles across both cross-sections.",
      "There are no side inflows, outflows, or fluid storage accumulation within the transition section."
    ],
    limitations: [
      "For compressible gas flows where pressure changes cause significant density shifts (ρ1 ≠ ρ2), the mass continuity form ρ1·A1·v1 = ρ2·A2·v2 must be used.",
      "Does not capture localized flow separation or recirculation eddies occurring in abrupt, non-streamlined pipe reducers.",
      "Non-circular cross-sections must use actual geometric areas rather than diameter ratios."
    ],
    commonMistakes: [
      "Forgetting to square the diameter ratio (using D1/D2 instead of [D1/D2]²), which causes a 50% error when diameter halves.",
      "Mixing outer pipe dimensions with internal bore diameters.",
      "Applying incompressible continuity to high-speed supersonic gas nozzles where density drops precipitously."
    ],
    bestPractices: [
      "Use gradual concentric reducers with cone angles < 15° to prevent boundary layer separation and turbulence.",
      "Always pair continuity calculations with Bernoulli's equation to evaluate the corresponding static pressure drop.",
      "Verify that exit velocity does not cause severe cavitation at the constriction throat."
    ],
    faqs: [
      {
        question: "Why does fluid velocity increase when pipe diameter decreases?",
        answer: "Because mass is conserved. If the cross-sectional area shrinks, the same volume of incompressible fluid must travel faster through the smaller opening to pass the same amount of fluid per second."
      },
      {
        question: "What is the general continuity equation for compressible flow?",
        answer: "For compressible flow (such as high-speed gases), the equation is ṁ = ρ1 × A1 × v1 = ρ2 × A2 × v2, where fluid density ρ varies between stations."
      },
      {
        question: "What is the relationship between diameter ratio and velocity ratio?",
        answer: "The velocity ratio is equal to the square of the diameter ratio: v2 / v1 = (D1 / D2)². If diameter is cut in half, velocity increases by 2² = 4 times."
      },
      {
        question: "Can fluid continuity be violated in a closed pipe?",
        answer: "No. In steady state, mass cannot be created or destroyed. In transient conditions (e.g. water hammer), fluid compressibility and pipe wall elasticity store mass temporarily."
      },
      {
        question: "How does continuity apply to branching pipes (tees and manifolds)?",
        answer: "Total inflow equals total outflow: Q_inlet = Q_branch1 + Q_branch2, or A1·v1 = A2·v2 + A3·v3."
      },
      {
        question: "What happens to static pressure when velocity increases through a reducer?",
        answer: "Per Bernoulli's principle, as kinetic velocity increases, static pressure decreases proportionally to conserve total mechanical energy."
      },
      {
        question: "What is a vena contracta?",
        answer: "A vena contracta is the minimum cross-sectional area of a fluid jet occurring slightly downstream of an abrupt orifice or constriction before expanding."
      },
      {
        question: "Which standards govern pipe reducers and nozzle transitions?",
        answer: "ASME B16.9 for factory-made wrought buttwelding fittings and ISO 5167 for nozzle and Venturi geometry."
      }
    ],
    standardsReferences: [
      { organization: "ASME", code: "ASME B16.9-2018", title: "Factory-Made Wrought Buttwelding Fittings — Concentric & Eccentric Reducers" },
      { organization: "ISO", code: "ISO 5167-3:2020", title: "Measurement of Fluid Flow — Nozzles and Venturi Nozzles" },
      { organization: "NFPA", code: "NFPA 1964", title: "Standard for Spray Nozzles and Fire Appliances" }
    ],
    internalLinks: {
      parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  })
};
