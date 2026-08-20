import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * Bespoke production-quality technical articles for Fluid Mechanics Calculators (Part 2).
 * Adheres strictly to the FLUID MECHANICS CALCULATOR ARTICLE TEMPLATE V1.0.
 * Covers:
 * 7. Hydrostatic Pressure Calculator (hydrostatic-pressure)
 * 8. Dynamic Pressure Calculator (dynamic-pressure)
 * 9. Venturi Flow Calculator (venturi-flow)
 * 10. Orifice Flow Rate Calculator (orifice-flow-rate)
 * 11. Pump Hydraulic Power Calculator (pump-hydraulic-power)
 * 12. Pipe Friction Head Loss Calculator (pipe-friction-head-loss)
 */

export const fluidMechanicsBespokeArticlesPart2: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {
  // =========================================================================
  // 7. HYDROSTATIC PRESSURE CALCULATOR
  // =========================================================================
  "hydrostatic-pressure": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Hydrostatic Pressure Calculator | Fluid Depth Pressure Solver",
    metaDescription: "Calculate total absolute and gauge hydrostatic fluid pressure (P in kPa) at submergence depth h using P = P_atm + (ρ × g × h).",
    canonicalUrl,
    introduction: {
      overview: "The Hydrostatic Pressure Calculator evaluates the total absolute fluid pressure (P in kPa) and gauge pressure acting at a specific vertical depth (h) within a static liquid column. Hydrostatic pressure results from the cumulative downward weight of fluid situated above the reference plane acting under uniform gravity. In accordance with Pascal's Law, static fluid pressure acts isotropically with equal magnitude in all directions and perpendicular to any contacting solid boundary.\n\nFor an incompressible fluid of uniform density ρ, hydrostatic gauge pressure increases linearly with submergence depth: P_gauge = ρ × g × h. Adding ambient atmospheric pressure (P_atm) yields the total absolute pressure experienced by submerged equipment, tank walls, dams, submarine hulls, and deep borehole casings.\n\nEvaluating hydrostatic pressure gradients is fundamental in civil hydraulics, ocean engineering, oil well drilling, atmospheric storage tank structural design (API 650), and deep-sea submersible rating.",
      applications: [
        "Determining bottom shell pressure and hoop stress in vertical liquid storage tanks (API 650).",
        "Calculating overturning moments and hydrostatic thrust forces on concrete gravity dams and sluice gates.",
        "Evaluating hydrostatic hull pressure ratings for underwater submersibles, ROVs, and subsea pipelines.",
        "Designing deep wellbore drilling mud column densities to balance subterranean pore pressures.",
        "Sizing municipal water standpipes and elevated distribution storage reservoirs."
      ],
      industries: [
        "Civil & Dam Engineering",
        "Marine & Subsea Offshore Engineering",
        "Oil & Gas Drilling / Reservoir Engineering",
        "Municipal Water Storage & Distribution",
        "Storage Tank & Pressure Vessel Manufacturing"
      ]
    },
    quickAnswer: "Hydrostatic pressure is calculated using P = P_atm + (ρ × g × h / 1000). For water (density 1000 kg/m³) at a depth of 10.0 meters under standard atmospheric pressure (101.325 kPa), the gauge pressure is 98.10 kPa and the total absolute pressure is exactly 199.425 kPa.",
    governingEquation: {
      formula: "P = P_{\\text{atm}} + (\\rho \\times g \\times h)",
      explanation: "Total absolute pressure (P in kPa) equals ambient atmospheric pressure (P_atm in kPa) plus hydrostatic gauge pressure (ρ × g × h / 1000). Standard gravitational acceleration is g = 9.81 m/s².",
      variables: [
        { symbol: "P", label: "Total Absolute Pressure", unit: "kPa", description: "Total fluid pressure acting at depth h." },
        { symbol: "P_atm", label: "Atmospheric Pressure", unit: "kPa", description: "Ambient surface pressure (standard sea level = 101.325 kPa)." },
        { symbol: "ρ", label: "Fluid Density", unit: "kg/m³", description: "Mass density of the static liquid column." },
        { symbol: "g", label: "Gravitational Acceleration", unit: "m/s²", description: "Standard gravity constant (9.81 m/s²)." },
        { symbol: "h", label: "Fluid Depth", unit: "m", description: "Vertical liquid column height above reference point." }
      ]
    },
    inputParameters: [
      {
        name: "depth",
        label: "Fluid Depth (h)",
        unit: "m",
        defaultValue: 10,
        explanation: "Vertical liquid column height or submergence depth in meters. Baseline value is 10.0 meters."
      },
      {
        name: "density",
        label: "Fluid Density (ρ)",
        unit: "kg/m³",
        defaultValue: 1000,
        explanation: "Liquid density in kg/m³. Baseline value is 1000 kg/m³ (fresh water at 4°C)."
      },
      {
        name: "pAtm",
        label: "Atmospheric Pressure",
        unit: "kPa",
        defaultValue: 101.325,
        explanation: "Ambient surface atmospheric pressure in kPa. Baseline default is 101.325 kPa (1.0 atm)."
      }
    ],
    outputExplanation: {
      unit: "Kilopascals (kPa)",
      interpretation: "The result of 199.425 kPa represents the total absolute pressure at a 10-meter water depth (~1.99 bar absolute, or ~0.98 bar gauge).",
      designImpact: "Every ~10 meters (33.9 feet) of water depth adds approximately 1 atmosphere (98.1 kPa) of hydrostatic gauge pressure, dictating wall thickness and flange ratings."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Fluid Depth (h)", value: 10, unit: "m" },
        { label: "Fluid Density (ρ)", value: 1000, unit: "kg/m³" },
        { label: "Atmospheric Pressure (P_atm)", value: 101.325, unit: "kPa" }
      ],
      substitution: "Substitute h = 10 m, ρ = 1000 kg/m³, g = 9.81 m/s², and P_atm = 101.325 kPa into P = P_atm + (ρ × g × h / 1000):",
      intermediateSteps: [
        "1. Compute hydrostatic gauge pressure in Pascals: P_gauge = 1000 kg/m³ × 9.81 m/s² × 10 m = 98,100 Pa.",
        "2. Convert gauge pressure to Kilopascals: 98,100 Pa / 1000 = 98.10 kPa.",
        "3. Add surface atmospheric pressure: P_total = 101.325 kPa + 98.10 kPa = 199.425 kPa."
      ],
      finalResult: "199.425",
      unit: "Kilopascals (kPa)"
    },
    practicalExample: {
      scenarioTitle: "Municipal Water Storage Standpipe Base Shell Pressure Rating",
      industryContext: "A municipal water authority is constructing a 30-meter high cylindrical steel standpipe filled with potable water (density 1000 kg/m³). Ambient atmospheric pressure at the site elevation is 101.3 kPa.",
      problemStatement: "Determine the maximum hydrostatic gauge pressure and total absolute pressure at the base of the tank to size the bottom shell plate thickness.",
      engineeringSolution: "Apply P_gauge = (ρ × g × h) / 1000 = (1000 × 9.81 × 30) / 1000 = 294.3 kPa (2.943 bar gauge). Total absolute pressure P_total = 101.3 + 294.3 = 395.6 kPa (3.956 bar absolute). The structural plate thickness is designed against the 294.3 kPa gauge pressure per API 650."
    },
    assumptions: [
      "The fluid is static with zero bulk velocity (no dynamic shear or kinetic pressure).",
      "The liquid is incompressible, maintaining uniform density ρ throughout the depth.",
      "Gravitational acceleration is constant at g = 9.81 m/s².",
      "The pressure vessel or water surface is exposed to uniform ambient atmospheric pressure."
    ],
    limitations: [
      "Deep ocean trenches (> 1000 m) experience slight water compressibility (~4% density increase at 10 km depth).",
      "Liquid columns with thermal stratification exhibit varying density that requires integral depth calculations (∫ ρ(z)g dz).",
      "Does not apply to gas columns over large vertical distances, where barometric compressibility equations apply."
    ],
    commonMistakes: [
      "Confusing gauge pressure (P_gauge = ρgh) with absolute pressure (P_abs = P_atm + ρgh).",
      "Using depth in feet or inches with metric density units without proper conversion.",
      "Forgetting that seawater has a higher density (~1025 kg/m³) than fresh water (~1000 kg/m³)."
    ],
    bestPractices: [
      "Always specify whether pressure values are reported in gauge (kPag, barg) or absolute (kPaa, bara).",
      "For seawater applications, use standard oceanographic density of 1025 kg/m³ to calculate depth ratings.",
      "In storage tank design, account for maximum liquid overflow nozzle height rather than nominal fill height."
    ],
    faqs: [
      {
        question: "What is the difference between gauge pressure and absolute pressure?",
        answer: "Gauge pressure measures pressure relative to local atmospheric pressure (reading zero at open sea level). Absolute pressure measures pressure relative to a perfect vacuum: P_absolute = P_gauge + P_atmospheric."
      },
      {
        question: "How deep in water do you have to go to add 1 atmosphere of pressure?",
        answer: "Approximately 10.33 meters (33.9 feet) of fresh water produces 101.325 kPa (1 atmosphere) of gauge pressure. In denser seawater (1025 kg/m³), 1 atm is reached at approximately 10.07 meters (33.0 feet)."
      },
      {
        question: "Does the shape or width of a container affect hydrostatic pressure at the bottom?",
        answer: "No (the Hydrostatic Paradox). Hydrostatic pressure depends strictly on vertical liquid depth (h) and fluid density (ρ), completely independent of container shape, surface area, or total liquid volume."
      },
      {
        question: "How does hydrostatic pressure act on submerged surfaces?",
        answer: "Hydrostatic pressure acts perpendicular (normal) to any submerged surface in all orientations (Pascal's Principle)."
      },
      {
        question: "What is specific weight (γ, gamma)?",
        answer: "Specific weight is density multiplied by gravity (γ = ρ × g), measured in N/m³ or kN/m³. The hydrostatic formula is often written as P = γ × h."
      },
      {
        question: "How does temperature affect hydrostatic pressure?",
        answer: "Higher temperatures cause liquid thermal expansion, slightly decreasing fluid density ρ and reducing the hydrostatic pressure for a given column height."
      },
      {
        question: "How is hydrostatic pressure used in well drilling?",
        answer: "Heavy drilling mud is circulated into the wellbore to maintain hydrostatic pressure higher than subterranean pore pressure, preventing uncontrolled gas blowouts."
      },
      {
        question: "Which standards govern hydrostatic testing and pressure vessels?",
        answer: "ASME Boiler & Pressure Vessel Code (BPVC Section VIII), API 650 for storage tanks, and AWWA D100 for water tanks."
      }
    ],
    standardsReferences: [
      { organization: "API", code: "API Standard 650", title: "Welded Tanks for Oil Storage — Hydrostatic Shell Design" },
      { organization: "ASME", code: "ASME BPVC Section VIII", title: "Rules for Construction of Pressure Vessels — Hydrostatic Proof Testing" },
      { organization: "AWWA", code: "AWWA D100-21", title: "Welded Carbon Steel Tanks for Water Storage" }
    ],
    internalLinks: {
      parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // =========================================================================
  // 8. DYNAMIC PRESSURE CALCULATOR
  // =========================================================================
  "dynamic-pressure": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Dynamic Pressure Calculator | Fluid Kinetic Pressure Solver",
    metaDescription: "Calculate kinetic dynamic fluid pressure q in kPa from flow velocity v and fluid density ρ using q = ½ × ρ × v².",
    canonicalUrl,
    introduction: {
      overview: "The Dynamic Pressure Calculator determines the kinetic dynamic pressure (q in kPa) of a fluid stream based on bulk fluid density (ρ) and relative flow velocity (v). Dynamic pressure represents the kinetic energy per unit volume of fluid motion: q = ½ρv². In fluid dynamics and aerodynamics, it quantifies the pressure rise that occurs when a moving fluid stream is brought isentropically to rest at a stagnation point.\n\nDynamic pressure is the foundational aerodynamic parameter used to compute aerodynamic drag (Fd = Cd × A × q), lift forces on aircraft wings and wind turbine blades, wind loading on buildings per ASCE 7, and flow velocity from Pitot-static tube differential pressure measurements.\n\nBecause dynamic pressure increases quadratically with velocity (v²), doubling flow velocity quadruples dynamic pressure, dramatically escalating structural aerodynamic drag and hydrodynamic impact forces.",
      applications: [
        "Calculating wind velocity pressures and structural building wind loads per ASCE 7-22.",
        "Evaluating aerodynamic lift and drag forces on aircraft wings, UAVs, and automotive spoilers.",
        "Calibrating airspeed indicators and Pitot-static tube instrumentation in wind tunnels and flight testing.",
        "Determining hydrodynamic drag and wave impact pressures on offshore platform legs and ship hulls.",
        "Sizing industrial ventilation fans and measuring velocity pressure in HVAC ductwork."
      ],
      industries: [
        "Aerospace & Aeronautical Engineering",
        "Civil & Structural Wind Engineering",
        "Automotive Aerodynamics & Racing",
        "Marine & Naval Architecture",
        "HVAC & Industrial Ventilation"
      ]
    },
    quickAnswer: "Dynamic pressure is calculated using q = (0.5 × ρ × v²) / 1000. For standard air (density 1.225 kg/m³) moving at a velocity of 30.0 m/s (108 km/h or ~67 mph), the dynamic pressure is exactly 0.55125 kPa (551.25 Pa).",
    governingEquation: {
      formula: "q = \\frac{1}{2} \\rho v^2",
      explanation: "Dynamic pressure (q in kPa) equals one-half multiplied by fluid density (ρ in kg/m³) and flow velocity squared (v² in m²/s²), divided by 1000 to convert from Pascals to Kilopascals.",
      variables: [
        { symbol: "q", label: "Dynamic Pressure", unit: "kPa", description: "Kinetic pressure per unit volume of fluid motion." },
        { symbol: "ρ", label: "Fluid Density", unit: "kg/m³", description: "Mass density of the fluid stream." },
        { symbol: "v", label: "Flow Velocity", unit: "m/s", description: "Relative velocity of the fluid stream." }
      ]
    },
    inputParameters: [
      {
        name: "velocity",
        label: "Flow Velocity (v)",
        unit: "m/s",
        defaultValue: 30,
        explanation: "Fluid flow velocity in meters per second. Baseline value is 30 m/s (108 km/h)."
      },
      {
        name: "density",
        label: "Fluid Density (ρ)",
        unit: "kg/m³",
        defaultValue: 1.225,
        explanation: "Fluid density in kg/m³. Baseline default is standard sea-level air at 15°C (1.225 kg/m³)."
      }
    ],
    outputExplanation: {
      unit: "Kilopascals (kPa)",
      interpretation: "The result of 0.55125 kPa (551.25 N/m²) represents the stagnation pressure increase exerted by a 30 m/s air stream on a perpendicular solid surface.",
      designImpact: "Used directly to calculate wind load forces: Force = Pressure × Area × Drag Coefficient (Cd)."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Flow Velocity (v)", value: 30, unit: "m/s" },
        { label: "Fluid Density (ρ)", value: 1.225, unit: "kg/m³" }
      ],
      substitution: "Substitute v = 30 m/s and ρ = 1.225 kg/m³ into q = 0.5 × ρ × v²:",
      intermediateSteps: [
        "1. Square the flow velocity: (30 m/s)² = 900 m²/s².",
        "2. Multiply by fluid density: 1.225 kg/m³ × 900 m²/s² = 1102.5 N/m².",
        "3. Multiply by 0.5 to get dynamic pressure in Pascals: 0.5 × 1102.5 = 551.25 Pa.",
        "4. Convert Pascals to Kilopascals: 551.25 Pa / 1000 = 0.55125 kPa."
      ],
      finalResult: "0.55125",
      unit: "Kilopascals (kPa)"
    },
    practicalExample: {
      scenarioTitle: "Structural Wind Load Evaluation on Solar PV Array",
      industryContext: "A structural engineer is evaluating the maximum wind pressure acting on a ground-mounted solar tracker subjected to a 45 m/s (162 km/h) hurricane design gust. Air density is 1.20 kg/m³.",
      problemStatement: "Determine the basic dynamic wind pressure in kPa to calculate uplift and overturning moments.",
      engineeringSolution: "Apply q = 0.5 × ρ × v² / 1000: q = 0.5 × 1.20 × (45)² / 1000 = 0.60 × 2025 / 1000 = 1.215 kPa (1215 Pa). Multiplying 1.215 kPa by solar panel surface area and aerodynamic pressure coefficients (Cp) provides the design structural fastener load."
    },
    assumptions: [
      "The fluid flow is incompressible (Mach number < 0.3).",
      "Fluid density ρ is uniform and homogeneous throughout the control volume.",
      "The velocity v represents the undisturbed upstream freestream velocity."
    ],
    limitations: [
      "For high-speed compressible air flows (Mach > 0.3), isentropic compressibility corrections (q_comp = q × [1 + M²/4 + M⁴/40 + ...]) must be applied.",
      "Dynamic pressure cannot be measured directly in isolation; it is determined by subtracting static pressure from total stagnation pressure: q = P_total - P_static.",
      "Does not account for ground boundary layer wind shear gradients unless combined with atmospheric profile factors."
    ],
    commonMistakes: [
      "Forgetting to square the velocity, resulting in extreme underestimation of high-speed aerodynamic forces.",
      "Using air density at sea level for high-altitude locations where density is significantly lower.",
      "Confusing dynamic pressure (kinetic energy) with total stagnation pressure (static + dynamic)."
    ],
    bestPractices: [
      "Adjust air density for site elevation and ambient temperature using the ideal gas law: ρ = P / (R_specific × T).",
      "For liquid water flows, remember that water density (~1000 kg/m³) is over 800 times higher than air, generating huge dynamic pressures at modest speeds.",
      "Apply appropriate aerodynamic shape factors and drag coefficients (Cd) when converting dynamic pressure into physical thrust or drag forces."
    ],
    faqs: [
      {
        question: "How does a Pitot-static tube measure dynamic pressure?",
        answer: "A Pitot tube measures total stagnation pressure at its tip and static pressure at side ports. The differential pressure between the two equals the dynamic pressure: ΔP = P_total - P_static = ½ρv²."
      },
      {
        question: "Why is dynamic pressure denoted as 'q'?",
        answer: "In classical aerodynamics and fluid dynamics, the letter 'q' (or 'Q') has historically been standardized to designate dynamic pressure."
      },
      {
        question: "What is the dynamic pressure of water moving at 5 m/s?",
        answer: "For water (ρ = 1000 kg/m³) at 5 m/s: q = 0.5 × 1000 × 5² = 500 × 25 = 12,500 Pa = 12.5 kPa (much higher than air at the same speed due to water's density)."
      },
      {
        question: "What is 'Max Q' in aerospace rocketry?",
        answer: "'Max Q' is the point of maximum dynamic pressure during a rocket's atmospheric ascent, where the combination of high airspeed and atmospheric density creates the peak mechanical stress on the rocket structure."
      },
      {
        question: "How do I calculate air velocity from dynamic pressure?",
        answer: "Rearrange the equation: v = √[(2 × q) / ρ], where q is in Pascals and ρ is in kg/m³."
      },
      {
        question: "How does altitude affect dynamic pressure at a constant velocity?",
        answer: "As altitude increases, atmospheric density decreases, causing dynamic pressure to drop proportionally at a constant true airspeed."
      },
      {
        question: "What is the difference between dynamic pressure and impact pressure?",
        answer: "In incompressible flow, dynamic pressure and impact pressure are identical (½ρv²). In supersonic/compressible flow, impact pressure is higher due to shock wave compression."
      },
      {
        question: "Which standards govern dynamic wind pressure calculations?",
        answer: "ASCE 7-22 (Minimum Design Loads for Buildings), ISO 4354 (Wind Actions on Structures), and Eurocode 1 (EN 1991-1-4)."
      }
    ],
    standardsReferences: [
      { organization: "ASCE", code: "ASCE/SEI 7-22", title: "Minimum Design Loads and Associated Criteria for Buildings and Other Structures" },
      { organization: "ISO", code: "ISO 4354:2009", title: "Wind Actions on Structures — Dynamic Pressure Formulations" },
      { organization: "CEN", code: "EN 1991-1-4 (Eurocode 1)", title: "Actions on Structures — Part 1-4: General Actions — Wind Actions" }
    ],
    internalLinks: {
      parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // =========================================================================
  // 9. VENTURI FLOW CALCULATOR
  // =========================================================================
  "venturi-flow": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Venturi Flow Calculator | Differential Pressure Flow Solver",
    metaDescription: "Calculate discharge flow rate (Q in L/s) through Venturi meter tubes from inlet/throat diameters, differential pressure drop ΔP, density, and discharge coefficient Cd.",
    canonicalUrl,
    introduction: {
      overview: "The Venturi Flow Calculator computes the volumetric discharge flow rate (Q in L/s) through a convergent-divergent Venturi flowmeter based on the differential pressure drop (ΔP) measured between the inlet and the constricted throat. Operating on the combined principles of Bernoulli energy conservation and continuity, the Venturi meter accelerates the fluid stream through a smooth conical reduction into a narrow throat.\n\nAs fluid velocity surges through the throat, static pressure drops proportionally to the square of the flow rate. Measuring this differential pressure with high-precision pressure transducers allows accurate determination of flow rate in accordance with ISO 5167-4 and ASME MFC-3M standards. Downstream of the throat, a gradual conical diffuser (typically 5° to 7° cone angle) gently decelerates the stream, recovering 85% to 95% of the temporary pressure drop.\n\nBecause of their streamlined internal profile and exceptional permanent pressure recovery, Venturi meters are widely deployed for large-diameter municipal water mains, gas pipelines, wet gas measurement, and wastewater sludge flows.",
      applications: [
        "Measuring large-volume municipal treated water distribution and transmission line flows.",
        "Monitoring natural gas, steam, and compressed air flows in industrial utility plants.",
        "Measuring wastewater raw sewage, return activated sludge (RAS), and slurry flows without clogging.",
        "Calibrating carburetor fuel-air mixing and industrial chemical jet eductors/aspirators.",
        "High-accuracy custody transfer flow metering per ISO 5167 and ASME MFC-3M standards."
      ],
      industries: [
        "Water & Wastewater Treatment Utilities",
        "Oil, Gas & Petrochemical Processing",
        "Power Generation & Steam Distribution",
        "Chemical Manufacturing & Bulk Refining",
        "Mining & Mineral Slurry Transport"
      ]
    },
    quickAnswer: "Venturi flow rate is calculated using Q = Cd × A2 × √[(2 × ΔP) / (ρ × (1 - (A2/A1)²))]. For an inlet diameter of 0.15 m (150 mm), throat diameter of 0.075 m (75 mm), pressure drop ΔP = 20 kPa, fluid density 1000 kg/m³, and Cd = 0.98, the flow rate is exactly 28.28 L/s.",
    governingEquation: {
      formula: "Q = C_d \\times A_2 \\times \\sqrt{ \\frac{2 \\times \\Delta P}{\\rho \\times \\left(1 - \\left(\\frac{A_2}{A_1}\\right)^2\\right)} }",
      explanation: "Volumetric flow rate (Q in m³/s) equals the discharge coefficient (Cd) multiplied by throat area (A2) and the theoretical velocity term. ΔP is differential pressure drop in Pascals (kPa × 1000), ρ is fluid density in kg/m³, A1 is inlet area, and A2 is throat area. Multiplying m³/s by 1000 yields L/s.",
      variables: [
        { symbol: "Q", label: "Discharge Flow Rate", unit: "L/s", description: "Volumetric fluid flow rate through the Venturi tube." },
        { symbol: "Cd", label: "Discharge Coefficient", unit: "Ratio", description: "Empirical discharge coefficient (typically 0.96–0.995)." },
        { symbol: "D1", label: "Inlet Diameter", unit: "m", description: "Internal pipe diameter at upstream pressure tap." },
        { symbol: "D2", label: "Throat Diameter", unit: "m", description: "Internal diameter at constricted throat pressure tap." },
        { symbol: "ΔP", label: "Differential Pressure", unit: "kPa", description: "Measured static pressure drop between inlet and throat." },
        { symbol: "ρ", label: "Fluid Density", unit: "kg/m³", description: "Mass density of the flowing fluid." }
      ]
    },
    inputParameters: [
      {
        name: "d1",
        label: "Inlet Diameter (D1)",
        unit: "m",
        defaultValue: 0.15,
        explanation: "Upstream inlet internal pipe diameter in meters (0.15 m = 150 mm = ~6 inches). Baseline value is 0.15 m."
      },
      {
        name: "d2",
        label: "Throat Diameter (D2)",
        unit: "m",
        defaultValue: 0.075,
        explanation: "Venturi throat internal diameter in meters (0.075 m = 75 mm = ~3 inches, beta ratio β = 0.5). Baseline value is 0.075 m."
      },
      {
        name: "deltaP",
        label: "Pressure Drop (ΔP)",
        unit: "kPa",
        defaultValue: 20,
        explanation: "Differential pressure drop between inlet and throat in Kilopascals. Baseline value is 20.0 kPa (20,000 Pa)."
      },
      {
        name: "density",
        label: "Fluid Density (ρ)",
        unit: "kg/m³",
        defaultValue: 1000,
        explanation: "Fluid density in kg/m³. Baseline default is 1000 kg/m³ (water)."
      },
      {
        name: "cd",
        label: "Discharge Coeff (Cd)",
        unit: "Ratio",
        defaultValue: 0.98,
        explanation: "Dimensionless discharge coefficient accounting for boundary layer friction. Baseline value is 0.98."
      }
    ],
    outputExplanation: {
      unit: "Liters per Second (L/s)",
      interpretation: "The result of 28.28 L/s (101.8 m³/h) is the actual volumetric flow rate through the pipeline corresponding to the 20 kPa differential pressure signal.",
      designImpact: "Permits differential pressure transmitters (4–20 mA or digital Fieldbus) to be scaled accurately for process flow monitoring."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Inlet Diameter (D1)", value: 0.15, unit: "m" },
        { label: "Throat Diameter (D2)", value: 0.075, unit: "m" },
        { label: "Pressure Drop (ΔP)", value: 20, unit: "kPa" },
        { label: "Fluid Density (ρ)", value: 1000, unit: "kg/m³" },
        { label: "Discharge Coeff (Cd)", value: 0.98, unit: "Ratio" }
      ],
      substitution: "Substitute values into Q = Cd × A2 × √[(2 × ΔP) / (ρ × (1 - (A2/A1)²))]:",
      intermediateSteps: [
        "1. Compute areas: A1 = π × (0.15)² / 4 = 0.0176715 m²; A2 = π × (0.075)² / 4 = 0.00441786 m².",
        "2. Compute area ratio squared: (A2/A1)² = (0.00441786 / 0.0176715)² = (0.25)² = 0.0625. Denominator term: 1 - 0.0625 = 0.9375.",
        "3. Compute velocity radical: √[(2 × 20,000 Pa) / (1000 kg/m³ × 0.9375)] = √[40,000 / 937.5] = √42.6667 = 6.53197 m/s.",
        "4. Calculate flow rate in m³/s: Q_m3s = 0.98 × 0.00441786 m² × 6.53197 m/s = 0.02828 m³/s.",
        "5. Convert to liters per second: 0.02828 × 1000 = 28.28 L/s."
      ],
      finalResult: "28.28",
      unit: "Liters per Second (L/s)"
    },
    practicalExample: {
      scenarioTitle: "Water Treatment Plant Raw Water Intake Flowmeter Calibration",
      industryContext: "A water treatment plant operates a 300 mm (0.3 m) raw water intake equipped with a classical Venturi tube having a 150 mm (0.15 m) machined throat (β = 0.5, Cd = 0.985). During peak pumping, the differential transmitter reads ΔP = 15 kPa for water at density 1000 kg/m³.",
      problemStatement: "Determine the intake flow rate in L/s and megaliters per day (MLD).",
      engineeringSolution: "Apply Venturi formulation: A1 = 0.070686 m², A2 = 0.017671 m², (A2/A1)² = 0.0625. Velocity term = √[(2 × 15,000) / (1000 × 0.9375)] = √32.0 = 5.65685 m/s. Flow rate Q = 0.985 × 0.017671 × 5.65685 = 0.098468 m³/s = 98.47 L/s. Daily volume = 98.468 L/s × 86,400 s / 1,000,000 = 8.51 MLD."
    },
    assumptions: [
      "The fluid flow is steady, 1D, and incompressible.",
      "The meter is installed in a horizontal circular pipe running completely full.",
      "The velocity profile upstream of the Venturi is fully developed and free from swirl.",
      "Static pressure taps are installed flush and free from burrs."
    ],
    limitations: [
      "Requires straight upstream pipe runs (typically 5 to 20 pipe diameters depending on upstream fittings) to eliminate swirl.",
      "Beta ratio (β = D2/D1) must strictly reside between 0.28 and 0.75 per ISO 5167-4.",
      "For compressible gas service, an expansibility factor (ε) must be included in the formula."
    ],
    commonMistakes: [
      "Entering differential pressure in kPa without multiplying by 1000 to convert to Pascals.",
      "Inverting the diameter ratio (using D1/D2 instead of D2/D1).",
      "Using a generic discharge coefficient Cd without verifying Reynolds number compliance."
    ],
    bestPractices: [
      "Use machined Venturi tubes (Cd ≈ 0.995) for precision custody transfer applications.",
      "Maintain adequate differential pressure (> 5 kPa) at minimum flow to ensure transmitter accuracy (avoiding low-end square root distortion).",
      "Install flow conditioning vanes upstream if sufficient straight pipe run is unavailable."
    ],
    faqs: [
      {
        question: "Why does a Venturi meter recover most of its pressure drop?",
        answer: "The gentle 5° to 7° diverging diffuser cone decelerates the fluid stream smoothly without boundary layer separation, converting kinetic energy back into static pressure with minimal eddy dissipation."
      },
      {
        question: "What is the beta ratio (β) of a Venturi tube?",
        answer: "The beta ratio is the ratio of throat diameter to inlet diameter: β = D2 / D1. It typically ranges between 0.3 and 0.75."
      },
      {
        question: "How does a Venturi meter compare to an orifice plate?",
        answer: "Venturi meters have higher initial cost but recover 85–95% of pressure drop, saving substantial pumping energy over time and resisting slurry clogging compared to orifice plates."
      },
      {
        question: "Why is the discharge coefficient (Cd) less than 1.0?",
        answer: "Boundary layer friction along the convergent cone and slight non-uniformity in the throat velocity profile reduce actual discharge slightly below ideal theoretical frictionless flow."
      },
      {
        question: "What is the velocity of approach factor (E)?",
        answer: "The velocity of approach factor is E = 1 / √[1 - β⁴]. It accounts for the kinetic energy of fluid entering the meter."
      },
      {
        question: "Can Venturi meters measure gas and steam flow?",
        answer: "Yes, by incorporating the gas expansibility factor (ε) to correct for density changes caused by throat depressurization."
      },
      {
        question: "What happens if throat pressure drops too low?",
        answer: "If throat static pressure drops to the liquid's vapor pressure, cavitation occurs, creating vapor choking, severe noise, and physical erosion of the throat."
      },
      {
        question: "Which standards govern Venturi flowmeters?",
        answer: "ISO 5167-4 (Classical Venturi Tubes), ASME MFC-3M, and ISO 5167-1."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 5167-4:2022", title: "Measurement of Fluid Flow — Part 4: Venturi Tubes" },
      { organization: "ASME", code: "ASME MFC-3M-2004", title: "Measurement of Fluid Flow in Pipes Using Orifice, Nozzle, and Venturi" },
      { organization: "API", code: "API MPMS Chapter 14.3", title: "Concentric, Square-Edged Orifice and Differential Pressure Meters" }
    ],
    internalLinks: {
      parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // =========================================================================
  // 10. ORIFICE FLOW RATE CALCULATOR
  // =========================================================================
  "orifice-flow-rate": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Orifice Flow Rate Calculator | Orifice Meter Discharge Solver",
    metaDescription: "Calculate fluid discharge flow rate (Q in L/s) through sharp-edged circular orifice plates from orifice diameter, differential head h, and discharge coefficient Cd.",
    canonicalUrl,
    introduction: {
      overview: "The Orifice Flow Rate Calculator determines the liquid discharge flow rate (Q in liters per second, L/s) passing through a concentric, sharp-edged circular orifice plate based on the differential pressure head (h in meters) and the discharge coefficient (Cd). Orifice plates represent the most widely utilized differential pressure flow measurement device in process engineering due to their simplicity, standardized geometry, low initial capital cost, and extensive empirical validation under ISO 5167-2 and ASME MFC-3M.\n\nWhen a fluid stream encounters the sharp-edged aperture, flow streamlines constrict abruptly, forming a minimum jet cross-section slightly downstream known as the *vena contracta*. At the vena contracta, fluid velocity reaches its maximum while static pressure drops to a minimum. The square root of the differential head is directly proportional to volumetric flow rate per Torricelli's and Bernoulli's formulations.\n\nWhile orifice plates generate higher unrecoverable permanent pressure loss than Venturi tubes due to turbulent eddy formation behind the plate, their standard dimensions and predictable discharge coefficients make them ideal for clean liquid, steam, and gas flow measurement.",
      applications: [
        "Measuring liquid, natural gas, and steam flow rates in chemical plants and oil refineries.",
        "Calibrating differential pressure flowmeters in boiler feedwater and cooling water circuits.",
        "Designing restriction orifice (RO) plates for pressure breakdown and flow balancing in piping systems.",
        "Custody transfer metering of hydrocarbons in accordance with API MPMS 14.3 / AGA Report No. 3.",
        "Measuring effluent discharge through tank bottom drain nozzles and storm retention weir plates."
      ],
      industries: [
        "Oil & Gas Refining & Petrochemicals",
        "Chemical Process Manufacturing",
        "Power Generation & Thermal Utilities",
        "Municipal Water Distribution",
        "HVAC & Building Mechanical Hydronics"
      ]
    },
    quickAnswer: "Orifice discharge flow rate is calculated using Q = Cd × A_orifice × √(2 × g × h) × 1000. For an orifice diameter of 0.05 m (50 mm), differential head h = 2.0 m, and Cd = 0.62, the orifice area is 0.0019635 m² and the discharge flow rate is exactly 7.626 L/s.",
    governingEquation: {
      formula: "Q = C_d \\times A_{\\text{orifice}} \\times \\sqrt{2 \\times g \\times h}",
      explanation: "Volumetric discharge rate (Q in m³/s) equals the discharge coefficient (Cd) multiplied by orifice cross-sectional area (A = πd²/4 in m²) and theoretical Torricelli velocity √(2gh). Standard gravitational acceleration is g = 9.81 m/s². Multiplying m³/s by 1000 gives L/s.",
      variables: [
        { symbol: "Q", label: "Discharge Flow Rate", unit: "L/s", description: "Volumetric liquid flow rate passing through the orifice plate." },
        { symbol: "Cd", label: "Discharge Coefficient", unit: "Ratio", description: "Discharge coefficient combining contraction and velocity factors (~0.60–0.62)." },
        { symbol: "d", label: "Orifice Diameter", unit: "m", description: "Bore diameter of the sharp-edged circular orifice aperture." },
        { symbol: "h", label: "Differential Head", unit: "m", description: "Differential pressure head across the plate in meters of fluid." },
        { symbol: "g", label: "Gravity Acceleration", unit: "m/s²", description: "Standard acceleration of gravity (9.81 m/s²)." }
      ]
    },
    inputParameters: [
      {
        name: "dOrifice",
        label: "Orifice Dia (d)",
        unit: "m",
        defaultValue: 0.05,
        explanation: "Bore diameter of the orifice plate in meters (0.05 m = 50 mm = ~2 inches). Baseline value is 0.05 m."
      },
      {
        name: "head",
        label: "Differential Head (h)",
        unit: "m",
        defaultValue: 2,
        explanation: "Differential pressure head across the plate in meters of fluid column. Baseline value is 2.0 meters."
      },
      {
        name: "cd",
        label: "Discharge Coeff (Cd)",
        unit: "Ratio",
        defaultValue: 0.62,
        explanation: "Dimensionless orifice discharge coefficient. Baseline reference default is 0.62 (standard for sharp-edged circular orifice plates)."
      }
    ],
    outputExplanation: {
      unit: "Liters per Second (L/s)",
      interpretation: "The result of 7.626 L/s (27.45 m³/h) represents the actual volumetric flow rate passing through the 50 mm orifice plate under a 2-meter differential head.",
      designImpact: "Allows sizing of differential pressure transmitters (where 2.0 m of water corresponds to ΔP = ρgh = 19.62 kPa) and verification of orifice bore sizing."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Orifice Dia (d)", value: 0.05, unit: "m" },
        { label: "Differential Head (h)", value: 2, unit: "m" },
        { label: "Discharge Coeff (Cd)", value: 0.62, unit: "Ratio" }
      ],
      substitution: "Substitute d = 0.05 m, h = 2 m, g = 9.81 m/s², and Cd = 0.62 into Q = Cd × (π × d² / 4) × √(2 × g × h):",
      intermediateSteps: [
        "1. Compute orifice cross-sectional area: A = π × (0.05 m)² / 4 = 3.14159265 × 0.0025 / 4 = 0.0019635 m².",
        "2. Compute theoretical Torricelli velocity: v_theoretical = √(2 × 9.81 m/s² × 2.0 m) = √39.24 = 6.26418 m/s.",
        "3. Multiply terms to find flow rate in m³/s: Q_m3s = 0.62 × 0.0019635 m² × 6.26418 m/s = 0.007626 m³/s.",
        "4. Convert m³/s to liters per second: 0.007626 × 1000 = 7.626 L/s."
      ],
      finalResult: "7.626",
      unit: "Liters per Second (L/s)"
    },
    practicalExample: {
      scenarioTitle: "Boiler Feedwater Chemical Dosing Line Orifice Meter Check",
      industryContext: "A thermal power plant uses an orifice plate (bore d = 25 mm = 0.025 m, Cd = 0.61) on a boiler feedwater conditioning line. A differential pressure gauge measures a head drop of h = 3.5 meters of water.",
      problemStatement: "Determine the volumetric dosing rate in L/s and liters per minute (L/min).",
      engineeringSolution: "Apply Q = Cd × (πd²/4) × √(2gh): Area A = π × 0.025² / 4 = 0.00049087 m². Velocity = √(2 × 9.81 × 3.5) = √68.67 = 8.2867 m/s. Flow rate Q = 0.61 × 0.00049087 × 8.2867 = 0.002481 m³/s = 2.481 L/s. In minute units, Q = 2.481 × 60 = 148.86 L/min."
    },
    assumptions: [
      "The orifice is concentric with a clean, sharp, square 90° upstream edge.",
      "The fluid is an incompressible liquid under steady, non-pulsating flow conditions.",
      "The pipe upstream and downstream runs completely full.",
      "The differential head h is measured at standard tap locations (flange taps, corner taps, or D and D/2 taps)."
    ],
    limitations: [
      "Unrecoverable permanent pressure loss ranges between 40% and 90% of measured differential pressure depending on beta ratio.",
      "Abrasive slurries or corrosive liquids can wear down the sharp edge, causing Cd to drift and introducing significant measurement error.",
      "Requires straight upstream pipe runs (typically 15–40 pipe diameters) to eliminate velocity profile distortion."
    ],
    commonMistakes: [
      "Installing the orifice plate backwards (with the beveled edge facing upstream rather than downstream).",
      "Using nominal pipe size instead of actual orifice bore diameter.",
      "Failing to account for liquid viscosity shifts at low Reynolds numbers (Re_D < 10,000)."
    ],
    bestPractices: [
      "Inspect orifice plate edges regularly for edge rounding, nicking, or accumulation of scale.",
      "Use flange taps spaced 25.4 mm (1 inch) upstream and downstream of plate faces per ASME/ISO standards.",
      "Select beta ratio β (d/D) between 0.20 and 0.70 to ensure optimal linearity and accuracy."
    ],
    faqs: [
      {
        question: "Why is the discharge coefficient (Cd) of an orifice plate approximately 0.60 to 0.62?",
        answer: "The discharge coefficient combines the contraction coefficient (Cc ≈ 0.62, representing vena contracta jet narrowing) and the velocity friction coefficient (Cv ≈ 0.98): Cd = Cc × Cv ≈ 0.61–0.62."
      },
      {
        question: "Which way should the bevel on an orifice plate face?",
        answer: "The sharp square edge MUST face upstream toward the incoming flow. If a bevel is present, the beveled side must always face downstream."
      },
      {
        question: "How do I convert differential pressure in kPa to head in meters?",
        answer: "Divide differential pressure in kPa by (ρ × g / 1000). For water (ρ = 1000 kg/m³), h = ΔP / 9.81. For example, 19.62 kPa corresponds to 2.0 meters of head."
      },
      {
        question: "What is a restriction orifice (RO)?",
        answer: "A restriction orifice is a thick orifice plate designed specifically to produce a permanent, controlled pressure drop or restrict maximum flow rather than measure it."
      },
      {
        question: "What tap configurations are standardized for orifice meters?",
        answer: "Common standard tap types include Flange Taps (1 inch upstream / 1 inch downstream), Corner Taps (at plate faces), and D and D/2 Taps (1 pipe diameter upstream, 0.5 diameter downstream)."
      },
      {
        question: "How does edge rounding affect orifice measurement accuracy?",
        answer: "Edge rounding reduces jet contraction, increasing the effective Cd and causing the meter to underestimate the actual flow rate."
      },
      {
        question: "What is the Reader-Harris/Gallagher (RG) equation?",
        answer: "The Reader-Harris/Gallagher equation is the universally accepted ISO 5167 formula calculating the exact discharge coefficient Cd as a function of pipe diameter, beta ratio, tap type, and Reynolds number."
      },
      {
        question: "Which standards govern orifice flowmeter design?",
        answer: "ISO 5167-2, ASME MFC-3M, and API MPMS Chapter 14.3 (AGA Report No. 3)."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 5167-2:2022", title: "Measurement of Fluid Flow — Part 2: Orifice Plates" },
      { organization: "ASME", code: "ASME MFC-3M-2004", title: "Measurement of Fluid Flow in Pipes Using Orifice, Nozzle, and Venturi" },
      { organization: "AGA", code: "AGA Report No. 3 (API 14.3)", title: "Orifice Metering of Natural Gas and Other Related Hydrocarbon Fluids" }
    ],
    internalLinks: {
      parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // =========================================================================
  // 11. PUMP HYDRAULIC POWER CALCULATOR
  // =========================================================================
  "pump-hydraulic-power": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Pump Hydraulic Power Calculator | Water Horsepower Solver",
    metaDescription: "Calculate net hydraulic fluid power output (P_hyd in kW) from pump flow rate Q, total dynamic head H, and fluid density ρ using P = (ρ × g × Q × H) / 1000.",
    canonicalUrl,
    introduction: {
      overview: "The Pump Hydraulic Power Calculator determines the theoretical fluid power output (P_hyd in Kilowatts, kW)—also historically termed *water horsepower* (WHP)—transferred into a moving liquid stream by a pump operating against a Total Dynamic Head (TDH, H in meters). Hydraulic power represents the useful mechanical work rate imparted to the fluid to overcome elevation lift, static pressure differences, and pipeline friction losses.\n\nBecause all mechanical pumping machinery experiences internal hydraulic friction, disk friction, leakage recirculations, and mechanical bearing/seal drag, actual electric motor power (brake horsepower, BHP) is always higher than hydraulic power: P_brake = P_hyd / η_pump, where η_pump is the pump wire-to-water mechanical efficiency (typically 65% to 88% for modern centrifugal pumps).\n\nEvaluating hydraulic power is the indispensable primary step in motor sizing, electrical switchgear selection, energy auditing, operating cost forecasting, and life-cycle cost (LCC) optimization across municipal, agricultural, and industrial pumping installations.",
      applications: [
        "Calculating baseline fluid power for municipal booster pumps, raw water intakes, and sewage lift stations.",
        "Sizing electric motors and variable frequency drives (VFDs) based on pump efficiency curves.",
        "Performing energy audits and efficiency benchmarking on industrial centrifugal and positive displacement pumps.",
        "Evaluating boiler feedwater pump power requirements in steam power generation plants.",
        "Designing agricultural deep-well submersible turbine pumps and drip irrigation booster skids."
      ],
      industries: [
        "Municipal Water & Wastewater Utilities",
        "Power Generation & Thermal Utilities",
        "Industrial Manufacturing & Chemical Processing",
        "Agriculture & Large-Scale Irrigation",
        "Mining & Mineral Dewatering"
      ]
    },
    quickAnswer: "Pump hydraulic power is calculated using P_hyd = (ρ × g × Q × H) / 1,000,000. For water (density 1000 kg/m³) pumped at a flow rate of 20 L/s (0.02 m³/s) against a total head of 30.0 meters, the net hydraulic power is exactly 5.886 kW (7.89 WHP).",
    governingEquation: {
      formula: "P_{\\text{hyd}} = \\frac{\\rho \\times g \\times Q \\times H}{1000} \\quad [\\text{with } Q \\text{ in m}^3/\\text{s}]",
      explanation: "Hydraulic power (P_hyd in kW) equals fluid density (ρ in kg/m³) multiplied by gravity (g = 9.81 m/s²), volumetric flow rate (Q in m³/s = L/s / 1000), and total dynamic head (H in meters), divided by 1000 to convert Watts to Kilowatts.",
      variables: [
        { symbol: "P_hyd", label: "Hydraulic Power", unit: "kW", description: "Net useful mechanical power transferred into the liquid stream." },
        { symbol: "ρ", label: "Fluid Density", unit: "kg/m³", description: "Mass density of the pumped liquid." },
        { symbol: "g", label: "Gravity Acceleration", unit: "m/s²", description: "Standard acceleration of gravity (9.81 m/s²)." },
        { symbol: "Q", label: "Flow Rate", unit: "L/s", description: "Volumetric discharge capacity delivered by the pump." },
        { symbol: "H", label: "Total Dynamic Head", unit: "m", description: "Total head (static + friction + velocity) imparted by the pump." }
      ]
    },
    inputParameters: [
      {
        name: "flowRate",
        label: "Flow Rate (Q)",
        unit: "L/s",
        defaultValue: 20,
        explanation: "Volumetric liquid flow rate delivered by the pump in liters per second. Baseline value is 20 L/s (72 m³/h)."
      },
      {
        name: "head",
        label: "Total Head (H)",
        unit: "m",
        defaultValue: 30,
        explanation: "Total dynamic head (TDH) developed by the pump in meters of liquid column. Baseline value is 30.0 meters (~294 kPa for water)."
      },
      {
        name: "density",
        label: "Fluid Density (ρ)",
        unit: "kg/m³",
        defaultValue: 1000,
        explanation: "Pumped liquid density in kg/m³. Baseline default is 1000 kg/m³ (water)."
      }
    ],
    outputExplanation: {
      unit: "Kilowatts (kW)",
      interpretation: "The result of 5.886 kW is the actual fluid power added to the water stream. With a typical 75% pump efficiency, the required motor brake power is 5.886 / 0.75 = 7.848 kW.",
      designImpact: "Guides motor sizing: engineers would select a standard 11 kW (15 HP) motor to provide a comfortable 40% operating service factor reserve."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Flow Rate (Q)", value: 20, unit: "L/s" },
        { label: "Total Head (H)", value: 30, unit: "m" },
        { label: "Fluid Density (ρ)", value: 1000, unit: "kg/m³" }
      ],
      substitution: "Substitute Q = 20 L/s (0.02 m³/s), H = 30 m, ρ = 1000 kg/m³, and g = 9.81 m/s² into P_hyd = (ρ × g × Q × H) / 1000:",
      intermediateSteps: [
        "1. Convert flow rate to cubic meters per second: Q_m3s = 20 L/s / 1000 = 0.02 m³/s.",
        "2. Compute weight flow rate (mass flow × g): 1000 kg/m³ × 9.81 m/s² × 0.02 m³/s = 196.2 N/s.",
        "3. Multiply weight flow by total head to obtain power in Watts: 196.2 N/s × 30 m = 5886 Watts.",
        "4. Convert Watts to Kilowatts: 5886 W / 1000 = 5.886 kW."
      ],
      finalResult: "5.886",
      unit: "Kilowatts (kW)"
    },
    practicalExample: {
      scenarioTitle: "Municipal Booster Pumping Station Motor Sizing & Energy Cost",
      industryContext: "A water utility is installing a booster pump delivering 100 L/s (0.10 m³/s = 360 m³/h) against a total dynamic head of 65 meters for potable water (density 1000 kg/m³). The pump manufacturer guarantees 80% efficiency at Best Efficiency Point (BEP).",
      problemStatement: "Calculate hydraulic power in kW, required shaft brake power (BHP), and annual electricity consumption assuming 8000 operating hours per year.",
      engineeringSolution: "Hydraulic power P_hyd = (1000 × 9.81 × 0.10 × 65) / 1000 = 63.765 kW. Shaft brake power P_brake = 63.765 / 0.80 = 79.71 kW (requiring a standard 90 kW motor). Annual energy = 79.71 kW × 8000 h = 637,680 kWh/year."
    },
    assumptions: [
      "The pumped fluid is an incompressible liquid under steady operating conditions.",
      "The total dynamic head H includes static elevation, differential pressure, velocity head, and all friction/minor losses.",
      "Fluid density ρ remains constant across the pump suction and discharge nozzles."
    ],
    limitations: [
      "Does not include pump mechanical, volumetric, or hydraulic efficiency losses (which must be factored in via η_pump).",
      "Inapplicable to compressible gases (which require compressor thermodynamic enthalpy models).",
      "Highly viscous liquids (viscosity > 50 cSt) require Hydraulic Institute viscosity derating corrections for head, flow, and efficiency."
    ],
    commonMistakes: [
      "Confusing hydraulic fluid power (water horsepower) with electric motor nameplate power (brake horsepower).",
      "Using static elevation lift alone instead of Total Dynamic Head (TDH = Static Head + Friction Head + Pressure Head).",
      "Forgetting to adjust fluid density for heavy liquids (e.g. caustic soda ρ = 1300 kg/m³ or brine ρ = 1200 kg/m³)."
    ],
    bestPractices: [
      "Select pumps operating within 80% to 110% of their Best Efficiency Point (BEP) to maximize energy efficiency and seal life.",
      "Calculate shaft brake power: P_brake = P_hyd / η_pump, and electrical grid input power: P_elec = P_brake / η_motor.",
      "Always verify that available Net Positive Suction Head (NPSHA) exceeds required NPSH (NPSHR) by at least 1.0 meter."
    ],
    faqs: [
      {
        question: "What is the difference between hydraulic power and brake horsepower (BHP)?",
        answer: "Hydraulic power is the net work rate imparted to the fluid. Brake horsepower is the mechanical shaft power required from the motor to overcome internal pump friction losses: BHP = Hydraulic Power / Pump Efficiency."
      },
      {
        question: "How do I convert Kilowatts (kW) to horsepower (HP)?",
        answer: "Multiply Kilowatts by 1.34102. For example, 5.886 kW × 1.34102 ≈ 7.893 Horsepower (HP)."
      },
      {
        question: "What is Total Dynamic Head (TDH)?",
        answer: "TDH is the total equivalent vertical height a pump must lift liquid, calculated as: TDH = (Static Elevation Lift) + (Static Pressure Head Difference) + (Friction Loss) + (Velocity Head Difference)."
      },
      {
        question: "How does pumping a heavy liquid (like sulfuric acid, ρ = 1840 kg/m³) affect power?",
        answer: "Hydraulic power is directly proportional to density. Pumping a liquid with density 1840 kg/m³ requires exactly 1.84 times more power than water at the identical flow rate and head."
      },
      {
        question: "What is typical centrifugal pump efficiency?",
        answer: "Commercial centrifugal pumps generally exhibit efficiencies between 60% and 88% when operated near their Best Efficiency Point (BEP)."
      },
      {
        question: "How does impeller trimming affect pump flow, head, and power?",
        answer: "Per the pump Affinity Laws: Flow Q scales with diameter (D), Head H scales with D², and Power P scales with D³."
      },
      {
        question: "Why should a pump operate near its Best Efficiency Point (BEP)?",
        answer: "Operating near BEP minimizes radial hydraulic thrust on the impeller, prevents premature mechanical seal and bearing failure, minimizes noise, and minimizes electricity costs."
      },
      {
        question: "Which standards govern pump power and performance testing?",
        answer: "ANSI/HI 14.6 (Hydraulic Performance Acceptance Tests), ISO 9906 (Rotodynamic Pumps — Hydraulic Performance Tests), and API 610 (Centrifugal Pumps for Petroleum Industries)."
      }
    ],
    standardsReferences: [
      { organization: "Hydraulic Institute", code: "ANSI/HI 14.6-2016", title: "Rotodynamic Pumps for Hydraulic Performance Acceptance Tests" },
      { organization: "ISO", code: "ISO 9906:2012", title: "Rotodynamic Pumps — Hydraulic Performance Acceptance Tests (Grades 1, 2, and 3)" },
      { organization: "API", code: "API Standard 610 (12th Ed.)", title: "Centrifugal Pumps for Petroleum, Petrochemical, and Natural Gas Industries" }
    ],
    internalLinks: {
      parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // =========================================================================
  // 12. PIPE FRICTION HEAD LOSS CALCULATOR
  // =========================================================================
  "pipe-friction-head-loss": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Pipe Friction Head Loss Calculator | Darcy Head Loss Solver",
    metaDescription: "Calculate pipe friction head loss hf in meters of fluid using Darcy-Weisbach formulation hf = f × (L/D) × (v² / 2g) from friction factor, length, diameter, and velocity.",
    canonicalUrl,
    introduction: {
      overview: "The Pipe Friction Head Loss Calculator determines the hydraulic energy dissipation (hf in meters of fluid column) along circular pipe conduits due to fluid viscous shear and pipe wall surface roughness using the classic Darcy–Weisbach head loss equation. Expressing friction loss in equivalent vertical fluid height ('meters of head' or 'feet of head') provides a universal, density-independent metric essential for plotting Hydraulic Grade Lines (HGL) and Energy Grade Lines (EGL).\n\nIn pressurized liquid systems, head loss represents the direct reduction in total mechanical energy available to transport the fluid. The Darcy–Weisbach formulation combines pipeline geometry (length-to-diameter ratio L/D), flow kinematics (velocity head v²/2g), and boundary roughness friction factor (f).\n\nDetermining friction head loss is the core calculation required to establish pump Total Dynamic Head (TDH), verify gravity pipeline conveyance capacity, balance branching distribution loops, and comply with civil and building plumbing codes.",
      applications: [
        "Determining Total Dynamic Head (TDH) for municipal water and wastewater pump selection.",
        "Plotting Hydraulic Grade Lines (HGL) and Energy Grade Lines (EGL) across pipeline profiles.",
        "Sizing gravity-fed water transmission pipelines to verify minimum delivery pressures at consumer taps.",
        "Balancing hydronic heating and chilled water circuit balancing valves in commercial buildings.",
        "Calculating friction loss in fire protection main loops per NFPA 13 and NFPA 24."
      ],
      industries: [
        "Civil & Municipal Water Infrastructure",
        "HVAC Hydronics & District Energy",
        "Chemical Process & Industrial Piping",
        "Agriculture & Irrigation Distribution",
        "Fire Protection Engineering"
      ]
    },
    quickAnswer: "Pipe friction head loss is calculated using hf = f × (L / D) × (v² / 2g). For a 50 meter pipe with diameter 0.1 m (100 mm), friction factor f = 0.02, and flow velocity 2.0 m/s, the friction head loss is exactly 2.039 meters of fluid.",
    governingEquation: {
      formula: "h_f = f \\times \\left(\\frac{L}{D}\\right) \\times \\left(\\frac{v^2}{2g}\\right)",
      explanation: "Friction head loss (hf in meters) equals Darcy friction factor (f) multiplied by the geometric ratio (L / D) and the kinetic velocity head (v² / 2g). Standard gravitational acceleration is g = 9.81 m/s².",
      variables: [
        { symbol: "hf", label: "Friction Head Loss", unit: "m", description: "Energy dissipation expressed as equivalent fluid column height." },
        { symbol: "f", label: "Darcy Friction Factor", unit: "Ratio", description: "Dimensionless pipe wall friction factor." },
        { symbol: "L", label: "Pipe Length", unit: "m", description: "Total length of the straight pipe conduit." },
        { symbol: "D", label: "Inner Diameter", unit: "m", description: "Internal circular diameter of the pipe." },
        { symbol: "v", label: "Flow Velocity", unit: "m/s", description: "Mean cross-sectional fluid velocity." },
        { symbol: "g", label: "Gravity Acceleration", unit: "m/s²", description: "Standard acceleration of gravity (9.81 m/s²)." }
      ]
    },
    inputParameters: [
      {
        name: "f",
        label: "Friction Factor (f)",
        unit: "Ratio",
        defaultValue: 0.02,
        explanation: "Dimensionless Darcy-Weisbach friction factor. Baseline reference default is 0.02 (commercial steel in turbulent water flow)."
      },
      {
        name: "length",
        label: "Pipe Length (L)",
        unit: "m",
        defaultValue: 50,
        explanation: "Total straight pipeline length in meters. Baseline value is 50.0 meters."
      },
      {
        name: "diameter",
        label: "Pipe Diameter (D)",
        unit: "m",
        defaultValue: 0.1,
        explanation: "Internal pipe diameter in meters (0.1 m = 100 mm = ~4 inches). Baseline value is 0.1 m."
      },
      {
        name: "velocity",
        label: "Flow Velocity (v)",
        unit: "m/s",
        defaultValue: 2,
        explanation: "Mean cross-sectional flow velocity in meters per second. Baseline value is 2.0 m/s."
      }
    ],
    outputExplanation: {
      unit: "Meters of Fluid (m)",
      interpretation: "The result of 2.039 meters indicates that 2.039 meters of pressure head (equivalent to ΔP = 20.0 kPa for water) is dissipated over the 50-meter pipe run due to wall friction.",
      designImpact: "Must be added directly to static lift when calculating pump Total Dynamic Head (TDH)."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Friction Factor (f)", value: 0.02, unit: "Ratio" },
        { label: "Pipe Length (L)", value: 50, unit: "m" },
        { label: "Pipe Diameter (D)", value: 0.1, unit: "m" },
        { label: "Flow Velocity (v)", value: 2, unit: "m/s" }
      ],
      substitution: "Substitute f = 0.02, L = 50 m, D = 0.1 m, v = 2 m/s, and g = 9.81 m/s² into hf = f × (L/D) × (v² / 2g):",
      intermediateSteps: [
        "1. Compute geometric length-to-diameter ratio: L / D = 50 m / 0.1 m = 500.",
        "2. Compute velocity head: v² / 2g = (2.0 m/s)² / (2 × 9.81 m/s²) = 4.0 / 19.62 = 0.203874 m.",
        "3. Multiply terms: hf = 0.02 × 500 × 0.203874 m = 10 × 0.203874 m = 2.0387 m.",
        "4. Round to 3 decimal places: 2.039 meters."
      ],
      finalResult: "2.039",
      unit: "Meters of Fluid (m)"
    },
    practicalExample: {
      scenarioTitle: "Municipal Gravity Transmission Main Hydraulic Grade Line Check",
      industryContext: "A civil engineer is evaluating a 1200-meter ductile iron gravity transmission main (internal diameter D = 0.25 m, estimated f = 0.018). The design flow velocity is 1.6 m/s.",
      problemStatement: "Determine total friction head loss in meters to verify if available reservoir elevation drop (35 meters) can sustain gravity flow.",
      engineeringSolution: "Apply hf = f × (L/D) × (v² / 2g): Geometric ratio L/D = 1200 / 0.25 = 4800. Velocity head = (1.6)² / (2 × 9.81) = 2.56 / 19.62 = 0.13048 m. Total head loss hf = 0.018 × 4800 × 0.13048 = 11.27 meters. Because 11.27 m is well below the available 35 m reservoir fall, gravity flow is easily maintained with a 23.7 m residual pressure head at delivery."
    },
    assumptions: [
      "The conduit is a circular pipe flowing completely full under steady incompressible flow.",
      "The friction factor f is constant and uniform along the specified length.",
      "Minor losses (bends, valves, reducers) are excluded and must be computed separately via K-factors: hm = ∑ K × (v² / 2g)."
    ],
    limitations: [
      "Does not apply to open-channel or non-pressurized gravity flow (which require Manning's or Chezy's formulations).",
      "High-speed compressible gas flows where pressure drops exceed 10% require compressible flow formulations.",
      "Does not evaluate transient pressure surges resulting from rapid valve closure (water hammer)."
    ],
    commonMistakes: [
      "Confusing head loss in meters (hf) with pressure drop in kPa (ΔP = ρ × g × hf / 1000).",
      "Using outer nominal pipe size (NPS) rather than internal bore diameter (ID).",
      "Forgetting that doubling velocity quadruples (4x) the head loss due to the v² term."
    ],
    bestPractices: [
      "Determine friction factor f using the Colebrook-White equation or Swamee-Jain formula based on Reynolds number and relative roughness (ε/D).",
      "Add minor loss head (K-factors for fittings) to major friction head loss to determine total pipeline head loss.",
      "Limit design velocities to 1.2–2.0 m/s in continuous service to prevent excessive head loss and energy waste."
    ],
    faqs: [
      {
        question: "How do I convert head loss in meters to pressure drop in kPa or bar?",
        answer: "Multiply head loss in meters by (ρ × g / 1000). For water (density 1000 kg/m³), 1 meter of head corresponds to approximately 9.81 kPa (0.0981 bar or ~1.42 psi)."
      },
      {
        question: "Why do engineers prefer 'meters of head' over pressure in kPa?",
        answer: "Head (meters of fluid) is density-independent and directly represents physical vertical elevation, simplifying pump selection and hydraulic grade line (HGL) profile drawings."
      },
      {
        question: "What is velocity head (v² / 2g)?",
        answer: "Velocity head represents the kinetic energy of fluid motion expressed as an equivalent vertical height column. For water at 2 m/s, velocity head is 2² / (2 × 9.81) = 0.204 meters."
      },
      {
        question: "What is the difference between major loss and minor loss?",
        answer: "Major loss is continuous friction along straight pipe lengths (Darcy-Weisbach). Minor loss is localized turbulence caused by fittings, valves, bends, tees, and contractions."
      },
      {
        question: "How does pipe aging affect friction head loss?",
        answer: "Internal corrosion, scaling, and tuberculation increase surface roughness ε over time, increasing the friction factor f and escalating head loss by 20% to 50% over decades of service."
      },
      {
        question: "What is the Hydraulic Grade Line (HGL)?",
        answer: "The HGL is a graphical plot representing the sum of elevation head (z) and static pressure head (P/γ) along a pipeline, sloping downward in the direction of flow due to friction head loss."
      },
      {
        question: "What happens to head loss if pipe diameter is doubled for the same flow rate?",
        answer: "For a constant flow rate Q, head loss is inversely proportional to the fifth power of diameter (hf ∝ 1/D⁵). Doubling diameter reduces friction head loss by a factor of 32 (2⁵ = 32)."
      },
      {
        question: "Which standards govern pipeline head loss calculations?",
        answer: "AWWA M11, ASME B31.3, Hydraulic Institute Standards, and ASHRAE Fundamentals."
      }
    ],
    standardsReferences: [
      { organization: "AWWA", code: "AWWA M11", title: "Steel Pipe — A Guide for Design and Installation (Friction Head Loss)" },
      { organization: "ASME", code: "ASME B31.3-2022", title: "Process Piping Design Standards" },
      { organization: "Hydraulic Institute", code: "ANSI/HI 14.3", title: "Rotodynamic Pumps for Design and Application" }
    ],
    internalLinks: {
      parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  })
};
