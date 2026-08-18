import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * Production-quality bespoke articles for Thermodynamics Calculators (Part 2).
 * Adheres strictly to THERMODYNAMICS CALCULATOR ARTICLE TEMPLATE V1.0.
 * Covers:
 * 7. Carnot Efficiency Calculator (carnot-efficiency)
 * 8. Ideal Gas Law Calculator (ideal-gas-law)
 * 9. Isothermal Process Calculator (isothermal-process)
 * 10. Adiabatic Process Calculator (adiabatic-process)
 * 11. Heat Exchanger Effectiveness Calculator (heat-exchanger-effectiveness)
 * 12. Thermal Resistance Calculator (thermal-resistance)
 */

export const thermodynamicsBespokeArticlesPart2: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {

  // 7. CARNOT EFFICIENCY CALCULATOR
  "carnot-efficiency": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Carnot Efficiency Calculator | Maximum Theoretical Heat Engine Efficiency",
    metaDescription: "Calculate the maximum theoretical Carnot thermal efficiency (η) percentage of a heat engine operating between hot (Th) and cold (Tc) absolute temperature reservoirs.",
    canonicalUrl,
    introduction: {
      overview: "Carnot efficiency represents the absolute theoretical maximum thermal efficiency that any heat engine can achieve when converting thermal energy into mechanical work while operating between two isothermal thermal reservoirs. Formulated by Nicolas Léonard Sadi Carnot in 1824 and establishing the foundation for the Second Law of Thermodynamics, the Carnot cycle operates through four reversible processes: two isothermal steps and two isentropic (reversible adiabatic) steps. Carnot's theorem proves that no real engine operating between two specified thermal reservoirs can ever exceed the efficiency of a reversible Carnot engine, establishing the ultimate thermodynamic benchmark against which all real-world Brayton, Rankine, Otto, Diesel, and Stirling power cycles are evaluated.",
      applications: [
        "Establishing the theoretical thermodynamic ceiling for thermal power stations (combined-cycle gas turbines, nuclear, and coal plants).",
        "Benchmarking second-law efficiency (exergy efficiency) of internal combustion engines and microturbines.",
        "Evaluating waste heat recovery and organic Rankine cycle (ORC) feasibility across low-temperature heat sources.",
        "Determining maximum theoretical coefficient of performance (COP) limits for reverse-cycle heat pumps and chillers."
      ],
      industries: [
        "Power Generation & Energy Systems",
        "Automotive & Internal Combustion Engineering",
        "Turbomachinery & Aerospace Propulsion",
        "Industrial Process Heat & Waste Energy Recovery"
      ]
    },
    quickAnswer: "The Carnot efficiency equation is η = (1 - Tc / Th) × 100%. For a heat engine operating between a hot reservoir at Th = 800 K and a cold sink at Tc = 300 K, the maximum theoretical Carnot efficiency is 62.5%.",
    governingEquation: {
      formula: "\\eta = \\left(1 - \\frac{T_c}{T_h}\\right) \\times 100\\%",
      explanation: "Carnot efficiency (η in percent) represents the ratio of net mechanical work output to gross thermal heat input for a completely reversible thermodynamic cycle. The efficiency is governed exclusively by the absolute temperatures of the high-temperature heat source (Th in Kelvin) and the low-temperature heat sink (Tc in Kelvin), independent of the working fluid.",
      variables: [
        { symbol: "η", label: "Carnot Thermal Efficiency", unit: "Percentage (%)", description: "Maximum theoretical conversion efficiency of heat into mechanical work." },
        { symbol: "Th", label: "Hot Reservoir Absolute Temp", unit: "Kelvin (K)", description: "Absolute thermodynamic temperature of the thermal heat addition source." },
        { symbol: "Tc", label: "Cold Reservoir Absolute Temp", unit: "Kelvin (K)", description: "Absolute thermodynamic temperature of the ambient heat rejection sink." }
      ]
    },
    inputParameters: [
      {
        name: "th",
        label: "Hot Reservoir Temp (Th)",
        unit: "Kelvin (K)",
        defaultValue: 800,
        explanation: "The absolute temperature of the high-temperature heat source. The default value is set to 800 K (approx. 526.85 °C), representative of an industrial steam superheater or turbine inlet."
      },
      {
        name: "tc",
        label: "Cold Reservoir Temp (Tc)",
        unit: "Kelvin (K)",
        defaultValue: 300,
        explanation: "The absolute temperature of the ambient cooling sink. The default value is set to 300 K (approx. 26.85 °C), representative of cooling tower water or ambient air."
      }
    ],
    outputExplanation: {
      unit: "Percentage (%)",
      interpretation: "The output represents the maximum possible fraction of input heat that can theoretically be converted into net shaft work.",
      designImpact: "Serves as the absolute thermodynamic reference standard; real cycle thermal efficiencies are compared against η_carnot to calculate the Second Law (Exergetic) efficiency: η_II = η_actual / η_carnot."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Hot Reservoir Temp (Th)", value: 800, unit: "K" },
        { label: "Cold Reservoir Temp (Tc)", value: 300, unit: "K" }
      ],
      substitution: "Substitute Th = 800 K and Tc = 300 K into η = (1 - Tc / Th) × 100%:",
      intermediateSteps: [
        "1. Identify absolute temperatures in Kelvin: Th = 800 K, Tc = 300 K.",
        "2. Compute the reservoir temperature ratio (Tc / Th): 300 / 800 = 0.375.",
        "3. Subtract the ratio from unity: 1 - 0.375 = 0.625.",
        "4. Multiply by 100% to express as a percentage: η = 0.625 × 100% = 62.5%."
      ],
      finalResult: "62.5",
      unit: "Percentage (%)"
    },
    practicalExample: {
      scenarioTitle: "Combined Cycle Gas Turbine Power Plant Thermal Benchmark",
      industryContext: "An advanced H-class combined cycle power station operates with a gas turbine peak firing temperature of 1500 °C (1773.15 K) and rejects condenser waste heat to a river at 20 °C (293.15 K).",
      problemStatement: "Determine the ideal Carnot theoretical efficiency limit and compare it against the plant's actual net electrical generation efficiency of 62.0%.",
      engineeringSolution: "Converting temperatures to Kelvin: Th = 1773.15 K, Tc = 293.15 K. Carnot efficiency is η_carnot = (1 - 293.15 / 1773.15) × 100% = (1 - 0.1653) × 100% = 83.47%. The plant's Second Law efficiency is η_II = 62.0% / 83.47% = 74.28%, demonstrating exceptional real-world thermodynamic optimization near theoretical limits."
    },
    assumptions: [
      "All cycle processes are internally and externally completely reversible (zero friction, zero fluid turbulence, zero viscous dissipation).",
      "Isothermal heat addition and rejection at constant reservoir temperatures Th and Tc.",
      "Isentropic (frictionless adiabatic) compression and expansion steps with zero entropy generation (S_gen = 0).",
      "Reservoirs possess infinite thermal heat capacity (temperatures Th and Tc do not drift during heat transfer)."
    ],
    limitations: [
      "Cannot be physically realized in practice because truly reversible isothermal heat transfer requires infinite heat exchanger surface area or infinitely slow operation (zero net power output).",
      "Does not account for real-world fluid friction, pressure drops, heat losses, valve throttling, or mechanical bearing losses.",
      "Absolute temperatures in Kelvin must always be used; entering Celsius produces completely invalid results."
    ],
    commonMistakes: [
      "Entering reservoir temperatures in Celsius (°C) instead of Kelvin (K), resulting in severely distorted and erroneous efficiencies.",
      "Entering Tc greater than Th (which produces a nonsensical negative efficiency for a heat engine).",
      "Assuming a real engine can exceed or match Carnot efficiency (violating the Second Law of Thermodynamics)."
    ],
    bestPractices: [
      "Always convert temperatures from Celsius or Fahrenheit to Kelvin (K = °C + 273.15) before performing Carnot calculations.",
      "To maximize thermodynamic efficiency, maximize turbine inlet temperature (Th) using advanced alloys/thermal barrier coatings and minimize condenser heat sink temperature (Tc).",
      "Use Carnot efficiency as an exergy reference benchmark to quantify real system thermodynamic irreversibilities."
    ],
    faqs: [
      {
        question: "What does the Carnot Efficiency Calculator calculate?",
        answer: "This calculator determines the maximum theoretical thermal efficiency (in percent) that any heat engine can achieve operating between two fixed thermal reservoirs at temperatures Th and Tc."
      },
      {
        question: "Why can't a heat engine achieve 100% thermal efficiency?",
        answer: "According to the Kelvin-Planck statement of the Second Law of Thermodynamics, no cyclic heat engine can convert 100% of absorbed heat into work; some thermal energy must always be rejected to a low-temperature sink (Tc > 0 K)."
      },
      {
        question: "Why must absolute temperatures (Kelvin) be used in Carnot calculations?",
        answer: "Thermodynamic efficiency is defined in terms of absolute thermodynamic temperature ratios. Using Celsius offsets yields mathematically meaningless results because 0 °C is an arbitrary freezing point, not thermodynamic absolute zero."
      },
      {
        question: "What are the four processes that make up a Carnot cycle?",
        answer: "The four reversible processes are: 1. Reversible isothermal expansion (heat addition at Th), 2. Reversible adiabatic/isentropic expansion (temperature drops to Tc), 3. Reversible isothermal compression (heat rejection at Tc), and 4. Reversible adiabatic/isentropic compression (temperature rises back to Th)."
      },
      {
        question: "How does the Carnot efficiency limit apply to heat pumps and refrigerators?",
        answer: "In reverse operation, the Carnot cycle defines the maximum theoretical Coefficient of Performance: COP_cooling = Tc / (Th - Tc), and COP_heating = Th / (Th - Tc)."
      },
      {
        question: "Why are real heat engine efficiencies lower than Carnot efficiency?",
        answer: "Real engines suffer from unavoidable thermodynamic irreversibilities, including fluid friction, turbulence, throttling losses, finite temperature differences during heat transfer, and mechanical friction."
      },
      {
        question: "What is Second Law (Exergy) Efficiency?",
        answer: "Second Law efficiency (η_II = η_actual / η_carnot) measures how closely a real engineering system approaches the ideal thermodynamic limit defined by Carnot's theorem."
      },
      {
        question: "How can engineers increase the thermal efficiency of a power plant?",
        answer: "By increasing the peak cycle temperature Th (e.g., higher boiler superheat or gas turbine firing temperatures) or decreasing the heat rejection temperature Tc (e.g., using colder condenser cooling water)."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 80000-5:2019", title: "Quantities and units — Part 5: Thermodynamics" },
      { organization: "ASME", code: "ASME PTC PM", title: "Performance Monitoring Guidelines for Power Plants" },
      { organization: "NIST", code: "SP 811", title: "SI Guide — Absolute Thermodynamic Temperature Scale" }
    ],
    internalLinks: {
      parentDiscipline: { id: "thermodynamics-calculators", name: "Thermodynamics" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 8. IDEAL GAS LAW CALCULATOR
  "ideal-gas-law": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Ideal Gas Law Calculator | PV = nRT Gas Pressure & State Equation Solver",
    metaDescription: "Calculate ideal gas pressure (P) in kilopascals (kPa) from molar quantity (n), absolute temperature (T), and container volume (V) using PV = nRT.",
    canonicalUrl,
    introduction: {
      overview: "The Ideal Gas Law is the fundamental thermodynamic equation of state relating pressure (P), volume (V), molar quantity of gas (n), and absolute thermodynamic temperature (T). Synthesizing Boyle's Law (P ∝ 1/V), Charles's Law (V ∝ T), and Avogadro's Law (V ∝ n), the ideal gas equation of state PV = nRT assumes that gas particles behave as dimensionless point masses undergoing perfectly elastic collisions with zero intermolecular attractive or repulsive forces. While real gases deviate at high pressures and cryogenic temperatures (where intermolecular forces and molecular volume become significant), the ideal gas law provides high engineering accuracy for atmospheric air, combustion gases, and light gases across moderate pressures and elevated temperatures.",
      applications: [
        "Sizing compressed air receivers, gas storage cylinders, and accumulator pressure vessels.",
        "Calculating pressure-volume-temperature state points in internal combustion and gas turbine cycles.",
        "Pneumatic pipeline sizing and gas mass flow rate density corrections in chemical plants.",
        "Atmospheric modeling, altitude pressure scaling, and HVAC air density calculations."
      ],
      industries: [
        "Chemical & Petrochemical Processing",
        "Pneumatics & Industrial Compressed Gas",
        "Aerospace & Atmospheric Flight Systems",
        "HVAC & Environmental Control Engineering"
      ]
    },
    quickAnswer: "The Ideal Gas Law state equation is P = (n × R × T) / V. For an amount of gas n = 10 moles at absolute temperature T = 298.15 K in a container volume V = 0.25 m³, the resulting gas pressure is approximately 99.16 Kilopascals (kPa).",
    governingEquation: {
      formula: "P = \\frac{n \\times R \\times T}{V}",
      explanation: "Absolute gas pressure (P in kPa) represents the isotropic normal force exerted per unit area by molecular collisions against the container walls. It is computed from the molar quantity (n in moles), the universal gas constant (R = 8.314462618 J/(mol·K)), and absolute temperature (T in Kelvin), divided by enclosure volume (V in m³). Dividing by 1000 converts standard Pascals (N/m²) to Kilopascals (kPa).",
      variables: [
        { symbol: "P", label: "Gas Pressure", unit: "Kilopascals (kPa)", description: "Absolute thermodynamic pressure exerted by the gas." },
        { symbol: "n", label: "Amount of Substance", unit: "Moles (mol)", description: "Total molar quantity of gas particles (n = mass / molar mass)." },
        { symbol: "R", label: "Universal Gas Constant", unit: "J/(mol·K)", description: "Fundamental physical constant (8.314462618 J/(mol·K))." },
        { symbol: "T", label: "Absolute Temperature", unit: "Kelvin (K)", description: "Thermodynamic temperature of the gas system." },
        { symbol: "V", label: "Gas Volume", unit: "Cubic Meters (m³)", description: "Total geometric volume occupied by the gas." }
      ]
    },
    inputParameters: [
      {
        name: "moles",
        label: "Amount of Gas (n)",
        unit: "Moles (mol)",
        defaultValue: 10,
        explanation: "The quantity of gas in moles. Default value is set to 10 mol."
      },
      {
        name: "temp",
        label: "Absolute Temp (T)",
        unit: "Kelvin (K)",
        defaultValue: 298.15,
        explanation: "The absolute temperature of the gas. Default is 298.15 K (standard room temperature, 25.0 °C)."
      },
      {
        name: "volume",
        label: "Gas Volume (V)",
        unit: "Cubic Meters (m³)",
        defaultValue: 0.25,
        explanation: "The volume occupied by the gas. Default value is 0.25 m³ (250 liters)."
      }
    ],
    outputExplanation: {
      unit: "Kilopascals (kPa)",
      interpretation: "The output represents the absolute thermodynamic pressure of the gas within the vessel.",
      designImpact: "Used by mechanical engineers to specify pressure vessel wall thicknesses (ASME Section VIII), size relief valves, and verify pneumatic pressure ratings."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Amount of Gas (n)", value: 10, unit: "mol" },
        { label: "Absolute Temp (T)", value: 298.15, unit: "K" },
        { label: "Gas Volume (V)", value: 0.25, unit: "m³" }
      ],
      substitution: "Substitute n = 10 mol, R = 8.3144626 J/(mol·K), T = 298.15 K, and V = 0.25 m³ into P = (n × R × T) / V:",
      intermediateSteps: [
        "1. Identify the input variables: n = 10 mol, R = 8.314462618 J/(mol·K), T = 298.15 K, V = 0.25 m³.",
        "2. Compute the numerator product (n × R × T): 10 × 8.314462618 × 298.15 = 24,789.57 Joules (N·m).",
        "3. Divide by volume (V = 0.25 m³): P_pascals = 24,789.57 / 0.25 = 99,158.28 Pa.",
        "4. Convert Pascals to Kilopascals by dividing by 1000: P = 99,158.28 / 1000 = 99.16 kPa (0.9916 bar)."
      ],
      finalResult: "99.16",
      unit: "Kilopascals (kPa)"
    },
    practicalExample: {
      scenarioTitle: "Pneumatic Nitrogen Accumulator Pre-charge Pressure Verification",
      industryContext: "A hydraulic power unit employs a 50-liter (0.050 m³) nitrogen gas bladder accumulator pre-charged with 40 moles of pure N2 at an ambient shop temperature of 20 °C (293.15 K).",
      problemStatement: "Calculate the absolute pressure inside the accumulator bladder in bar and megapascals (MPa).",
      engineeringSolution: "Given n = 40 mol, R = 8.31446 J/(mol·K), T = 293.15 K, and V = 0.050 m³: P = (40 × 8.31446 × 293.15) / 0.050 = 97,495.27 / 0.050 = 1,949,905 Pa = 1.95 MPa (19.5 bar). This confirms the nitrogen pre-charge meets the hydraulic circuit's 20-bar operating specification."
    },
    assumptions: [
      "The gas molecules act as point masses with negligible physical molecular volume relative to total container volume.",
      "Intermolecular forces (Van der Waals attractions and repulsions) between gas particles are zero.",
      "Collisions between gas molecules and container walls are perfectly elastic.",
      "The gas is in complete thermal and mechanical equilibrium throughout the vessel."
    ],
    limitations: [
      "Inaccurate at very high pressures (P > 50 bar) where molecular volume causes real pressure to exceed ideal predictions.",
      "Inaccurate near the vapor dome / saturation line or critical point where intermolecular attraction causes condensation.",
      "Requires compressibility factor (Z = PV / (nRT)) corrections or real-gas equations (Redlich-Kwong, Peng-Robinson) for dense supercritical fluids."
    ],
    commonMistakes: [
      "Entering temperature in Celsius instead of absolute Kelvin (which causes huge percentage errors).",
      "Confusing gauge pressure (psig / kPag) with absolute pressure (psia / kPaa); ideal gas law ALWAYS yields absolute pressure.",
      "Entering volume in liters without converting to cubic meters (1 m³ = 1000 Liters).",
      "Using the universal gas constant R instead of specific gas constant R_specific when working with mass (kg) rather than moles (mol)."
    ],
    bestPractices: [
      "ALWAYS ensure temperature is converted to Kelvin: T(K) = T(°C) + 273.15.",
      "To use mass (m in kg) directly, use the specific gas law form: P = (m × R_specific × T) / V, where R_specific = R_universal / Molar_Mass.",
      "Check the compressibility factor Z; if 0.95 < Z < 1.05, the ideal gas law provides excellent engineering accuracy."
    ],
    faqs: [
      {
        question: "What does the Ideal Gas Law Calculator calculate?",
        answer: "This calculator computes the absolute pressure (in Kilopascals) of an ideal gas based on the molar quantity, absolute temperature, and container volume using PV = nRT."
      },
      {
        question: "What is the exact value of the Universal Gas Constant (R)?",
        answer: "Under the SI system (CODATA 2018), the universal gas constant is R = 8.31446261815324 J/(mol·K). In other common units, R = 0.082057 L·atm/(mol·K) = 8.314 kPa·L/(mol·K)."
      },
      {
        question: "What is the difference between absolute pressure and gauge pressure?",
        answer: "Absolute pressure is referenced against a perfect vacuum (0 kPa). Gauge pressure is referenced against ambient atmospheric pressure (typically 101.325 kPa). Absolute Pressure = Gauge Pressure + Atmospheric Pressure."
      },
      {
        question: "How do I convert gas mass in kilograms to moles (n)?",
        answer: "Divide the mass of the gas (in grams) by its molecular molar mass (in g/mol): n = m_grams / M. For example, 320 grams of Oxygen (O2, M = 32 g/mol) equals 10 moles."
      },
      {
        question: "What are the individual gas laws combined in PV = nRT?",
        answer: "PV = nRT combines Boyle's Law (P ∝ 1/V at constant T), Charles's Law (V ∝ T at constant P), Gay-Lussac's Law (P ∝ T at constant V), and Avogadro's Law (V ∝ n at constant P and T)."
      },
      {
        question: "When does a real gas deviate from ideal gas behavior?",
        answer: "Gases deviate significantly from ideal behavior under high pressures (P > 50 bar) and low temperatures (near saturation/condensation), where intermolecular attractive forces and molecular volume cannot be neglected."
      },
      {
        question: "What is the molar volume of an ideal gas at standard temperature and pressure (STP)?",
        answer: "At standard temperature and pressure (0 °C, 273.15 K, and 101.325 kPa), one mole of any ideal gas occupies exactly 22.414 liters (0.022414 m³)."
      },
      {
        question: "What is the mass-based form of the Ideal Gas Law?",
        answer: "The mass-based form is P·V = m·R_s·T, where m is gas mass (kg) and R_s is the specific gas constant (J/(kg·K)), defined as R_s = R / M (for air, R_s ≈ 287.05 J/(kg·K))."
      }
    ],
    standardsReferences: [
      { organization: "CODATA / NIST", code: "SP 961", title: "Universal Physical Constants & Thermodynamic Definitions" },
      { organization: "ISO", code: "ISO 80000-5:2019", title: "Quantities and units — Part 5: Thermodynamics" },
      { organization: "ASME", code: "ASME Section VIII", title: "Rules for Construction of Pressure Vessels" }
    ],
    internalLinks: {
      parentDiscipline: { id: "thermodynamics-calculators", name: "Thermodynamics" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 9. ISOTHERMAL PROCESS CALCULATOR
  "isothermal-process": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Isothermal Process Calculator | Constant Temperature Gas Expansion Work Solver",
    metaDescription: "Calculate thermodynamic expansion work (W) in kilojoules performed by an ideal gas during a reversible isothermal (constant temperature) process (W = n × R × T × ln(V2 / V1)).",
    canonicalUrl,
    introduction: {
      overview: "An isothermal process is a thermodynamic state change in which the temperature of a closed system remains strictly constant throughout the entire transformation (T1 = T2 = constant, ΔT = 0). For an ideal gas undergoing a reversible isothermal expansion or compression, internal energy depends solely on temperature (ΔU = 0), meaning that all heat transferred across the system boundary is converted directly into boundary expansion work (Q = W). Governed by Boyle's Law (P1·V1 = P2·V2), the boundary work integral W = ∫ P dV evaluates to W = n·R·T·ln(V2/V1). Isothermal expansion represents the theoretical ideal for maximum work output per unit heat addition in heat engines and isothermal gas compressors.",
      applications: [
        "Calculating theoretical compression work in multi-stage air compressors with intercooling.",
        "Evaluating the isothermal expansion and compression stages of ideal Carnot and Stirling cycles.",
        "Analyzing isothermal expansion dynamics in pneumatic actuators and gas lift mechanisms.",
        "Thermodynamic modeling of slow gas absorption and desorptive expansion processes."
      ],
      industries: [
        "Industrial Compressed Air & Gas Systems",
        "Cryogenics & Gas Liquefaction",
        "Stirling & Clean Energy Thermal Engines",
        "Chemical & Petrochemical Process Thermodynamics"
      ]
    },
    quickAnswer: "The isothermal work equation is W = n × R × T × ln(V2 / V1). For n = 5 moles of gas at T = 350 K expanding reversibly from V1 = 0.1 m³ to V2 = 0.3 m³, the thermodynamic work done by the gas is approximately 15.99 Kilojoules.",
    governingEquation: {
      formula: "W = \\frac{n \\times R \\times T \\times \\ln(V_2 / V_1)}{1000}",
      explanation: "Boundary work (W in kilojoules) represents the mechanical energy delivered by the expanding gas against the surroundings at constant absolute temperature (T in Kelvin). It is evaluated by integrating boundary work W = ∫ P dV = ∫ (nRT/V) dV from initial volume V1 to final volume V2, yielding W = n·R·T·ln(V2/V1). Dividing by 1000 converts Joules to Kilojoules.",
      variables: [
        { symbol: "W", label: "Isothermal Work", unit: "Kilojoules (kJ)", description: "Boundary expansion work done by (+W) or on (-W) the gas system." },
        { symbol: "n", label: "Amount of Gas", unit: "Moles (mol)", description: "Total molar quantity of working fluid in the closed system." },
        { symbol: "R", label: "Universal Gas Constant", unit: "J/(mol·K)", description: "Universal gas constant (8.314462618 J/(mol·K))." },
        { symbol: "T", label: "System Temperature", unit: "Kelvin (K)", description: "Constant absolute thermodynamic temperature maintained during the process." },
        { symbol: "V1", label: "Initial Volume", unit: "Cubic Meters (m³)", description: "Initial cylinder or vessel volume occupied by the gas." },
        { symbol: "V2", label: "Final Volume", unit: "Cubic Meters (m³)", description: "Final cylinder or vessel volume occupied after expansion or compression." }
      ]
    },
    inputParameters: [
      {
        name: "moles",
        label: "Amount of Gas (n)",
        unit: "Moles (mol)",
        defaultValue: 5,
        explanation: "The quantity of gas in moles. Default value is set to 5 mol."
      },
      {
        name: "temp",
        label: "System Temp (T)",
        unit: "Kelvin (K)",
        defaultValue: 350,
        explanation: "The constant absolute temperature maintained during the process. Default is 350 K (approx. 76.85 °C)."
      },
      {
        name: "v1",
        label: "Initial Vol (V1)",
        unit: "Cubic Meters (m³)",
        defaultValue: 0.1,
        explanation: "The starting volume of the gas. Default value is 0.1 m³ (100 L)."
      },
      {
        name: "v2",
        label: "Final Vol (V2)",
        unit: "Cubic Meters (m³)",
        defaultValue: 0.3,
        explanation: "The ending volume of the gas after expansion. Default value is 0.3 m³ (300 L)."
      }
    ],
    outputExplanation: {
      unit: "Kilojoules (kJ)",
      interpretation: "The output represents the net mechanical boundary work (in kJ) performed by the gas during expansion (positive) or required for compression (negative).",
      designImpact: "Used to determine minimum theoretical compressor power requirements, size intercoolers, and compute Stirling engine indicator power output."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Amount of Gas (n)", value: 5, unit: "mol" },
        { label: "System Temp (T)", value: 350, unit: "K" },
        { label: "Initial Vol (V1)", value: 0.1, unit: "m³" },
        { label: "Final Vol (V2)", value: 0.3, unit: "m³" }
      ],
      substitution: "Substitute n = 5 mol, R = 8.31446 J/(mol·K), T = 350 K, V1 = 0.1 m³, and V2 = 0.3 m³ into W = (n × R × T × ln(V2 / V1)) / 1000:",
      intermediateSteps: [
        "1. Compute volume ratio: V2 / V1 = 0.3 / 0.1 = 3.0.",
        "2. Calculate natural logarithm of volume ratio: ln(3.0) = 1.0986123.",
        "3. Compute product in base Joules: 5 × 8.314462618 × 350 × 1.0986123 = 14,550.31 × 1.0986123 = 15,985.12 Joules.",
        "4. Convert Joules to Kilojoules: W = 15,985.12 / 1000 = 15.985 kJ (approx. 15.99 kJ)."
      ],
      finalResult: "15.99",
      unit: "Kilojoules (kJ)"
    },
    practicalExample: {
      scenarioTitle: "Multi-Stage Industrial Air Compressor Intercooled Stage Analysis",
      industryContext: "An industrial rotary screw compressor compresses 50 moles of air isothermally at a cooled temperature of 300 K (26.85 °C) from 0.50 m³ down to 0.10 m³ in an intercooled compression stage.",
      problemStatement: "Determine the mechanical work input required (in kJ and kWh) to compress the gas isothermally.",
      engineeringSolution: "Given n = 50 mol, T = 300 K, V1 = 0.50 m³, and V2 = 0.10 m³: Volume ratio is V2/V1 = 0.10/0.50 = 0.20. ln(0.20) = -1.60944. Applying isothermal work formula: W = (50 × 8.31446 × 300 × -1.60944) / 1000 = -200.72 kJ. The negative sign indicates 200.72 kJ of mechanical work must be supplied to the compressor shaft (0.0558 kWh)."
    },
    assumptions: [
      "The working fluid behaves as an ideal gas throughout the entire process.",
      "The process is internally and externally reversible (frictionless quasi-static equilibrium).",
      "Perfect thermal contact with an external heat reservoir maintains strictly constant temperature (T1 = T2).",
      "Zero internal energy change (ΔU = 0 for ideal gas), so net heat added exactly equals boundary work (Q = W)."
    ],
    limitations: [
      "Real-world rapid expansions/compressions are closer to polytropic or adiabatic; pure isothermal processes require very slow operation or infinite heat transfer area.",
      "Does not apply to phase changes (e.g., condensing steam or evaporating refrigerants).",
      "Gas must not approach critical pressures where ideal gas assumptions break down."
    ],
    commonMistakes: [
      "Using common logarithm (log10) instead of natural logarithm (ln / log_e), underestimating work by a factor of 2.303.",
      "Entering temperature in Celsius rather than Kelvin.",
      "Confusing compression work (V2 < V1, yielding negative work) with expansion work (V2 > V1, yielding positive work)."
    ],
    bestPractices: [
      "For isothermal compression calculations, remember that pressure ratio is inversely proportional to volume ratio: V2/V1 = P1/P2, so W = nRT·ln(P1/P2).",
      "To approximate isothermal conditions in real compressors, use multi-stage compression with intermediate intercoolers.",
      "Maintain consistent units between gas constant R (J/(mol·K)) and output energy units."
    ],
    faqs: [
      {
        question: "What is an isothermal thermodynamic process?",
        answer: "An isothermal process is a thermodynamic change of state in which the temperature of the system remains constant throughout (ΔT = 0, T = constant)."
      },
      {
        question: "Why is the change in internal energy (ΔU) zero in an ideal gas isothermal process?",
        answer: "For an ideal gas, internal energy is solely a function of temperature (U = f(T) = n·c_v·T). Because temperature is constant (ΔT = 0), the change in internal energy is strictly zero (ΔU = 0)."
      },
      {
        question: "How does heat transfer (Q) relate to work (W) in an isothermal process?",
        answer: "From the First Law of Thermodynamics (ΔU = Q - W), since ΔU = 0 for an ideal gas, Q = W. All heat added to the system is converted directly into mechanical boundary work."
      },
      {
        question: "Can isothermal work be calculated using initial and final pressures?",
        answer: "Yes. Because P1·V1 = P2·V2 for an isothermal process, the volume ratio V2/V1 equals P1/P2. Thus, the equation can be written as W = n·R·T·ln(P1 / P2)."
      },
      {
        question: "What is the sign convention for isothermal work?",
        answer: "During expansion (V2 > V1), ln(V2/V1) > 0 and work is positive (+W), meaning work is done BY the gas on the surroundings. During compression (V2 < V1), ln(V2/V1) < 0 and work is negative (-W), meaning work is done ON the gas."
      },
      {
        question: "Why do real compressors use multi-stage intercooling to approach isothermal compression?",
        answer: "Isothermal compression requires the minimum possible work input compared to adiabatic compression. Multi-stage intercooling approximates the isothermal curve, saving substantial electrical motor power."
      },
      {
        question: "What thermodynamic cycle uses isothermal processes?",
        answer: "Both the Carnot cycle and the Stirling cycle utilize two reversible isothermal processes (isothermal expansion and isothermal compression) to maximize thermodynamic efficiency."
      },
      {
        question: "How slow must a real process be to be considered isothermal?",
        answer: "The process must occur sufficiently slowly relative to the system's thermal time constant (or have high heat transfer rates) so that heat can enter or escape fast enough to prevent temperature changes."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 80000-5:2019", title: "Quantities and units — Part 5: Thermodynamics" },
      { organization: "ASME", code: "ASME PTC 10", title: "Performance Test Code on Compressors and Exhausters" },
      { organization: "CAGI", code: "Compressed Air Handbook", title: "Thermodynamic Theory of Multi-Stage Compression" }
    ],
    internalLinks: {
      parentDiscipline: { id: "thermodynamics-calculators", name: "Thermodynamics" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 10. ADIABATIC PROCESS CALCULATOR
  "adiabatic-process": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Adiabatic Process Calculator | Isentropic Gas Compression & Pressure Solver",
    metaDescription: "Calculate final gas pressure (P2) in kilopascals (kPa) during a reversible adiabatic (isentropic) compression or expansion process using P1 × (V1 / V2)^γ.",
    canonicalUrl,
    introduction: {
      overview: "An adiabatic process is a thermodynamic state change that occurs without any heat transfer between the system and its surroundings (Q = 0). When a gas expands or is compressed rapidly, or within a perfectly insulated cylinder, thermal energy has insufficient time to cross the system boundary. In a reversible adiabatic (isentropic) process for an ideal gas with constant heat capacities, the pressure and volume follow the polytropic relationship P·V^γ = constant, where γ (gamma) is the ratio of specific heats (c_p / c_v). During adiabatic compression, all boundary work done on the gas increases its internal energy, resulting in a steep rise in both pressure and temperature. Reversible adiabatic processes represent the ideal benchmark for gas turbine compressors, expansion nozzles, and internal combustion engine strokes.",
      applications: [
        "Determining cylinder peak compression pressures and temperatures in internal combustion engines (Otto and Diesel cycles).",
        "Calculating stage pressure ratios in axial and centrifugal gas turbine compressors and turbochargers.",
        "Analyzing rapid expansion of high-pressure gases across sonic nozzles and pneumatic actuators.",
        "Atmospheric adiabatic lapse rate calculations and meteorological air parcel dynamics."
      ],
      industries: [
        "Aerospace Propulsion & Gas Turbines",
        "Automotive Engine Design",
        "Heavy Industrial Turbomachinery",
        "Meteorology & Atmospheric Physics"
      ]
    },
    quickAnswer: "The isentropic adiabatic pressure equation is P2 = P1 × (V1 / V2)^γ. For a gas initially at P1 = 100 kPa compressed from V1 = 0.5 m³ down to V2 = 0.2 m³ with heat capacity ratio γ = 1.4 (diatomic air), the final adiabatic pressure is approximately 360.62 Kilopascals.",
    governingEquation: {
      formula: "P_2 = P_1 \\times \\left(\\frac{V_1}{V_2}\\right)^\\gamma",
      explanation: "Final absolute pressure (P2 in kPa) is determined from initial pressure (P1 in kPa) and the volumetric compression ratio (V1 / V2) raised to the power of the specific heat ratio (γ = c_p / c_v). This formulation derives from the first law differential dU = -dW (since dQ = 0), yielding n·c_v·dT = -P dV, which integrates to P·V^γ = constant.",
      variables: [
        { symbol: "P2", label: "Final Gas Pressure", unit: "Kilopascals (kPa)", description: "Absolute pressure of the gas at the conclusion of the adiabatic process." },
        { symbol: "P1", label: "Initial Gas Pressure", unit: "Kilopascals (kPa)", description: "Starting absolute pressure of the gas prior to expansion or compression." },
        { symbol: "V1", label: "Initial Volume", unit: "Cubic Meters (m³)", description: "Initial volume occupied by the gas." },
        { symbol: "V2", label: "Final Volume", unit: "Cubic Meters (m³)", description: "Final volume occupied by the gas." },
        { symbol: "γ", label: "Specific Heat Ratio (Gamma)", unit: "Dimensionless Ratio", description: "Ratio of constant-pressure specific heat to constant-volume specific heat (γ = c_p / c_v)." }
      ]
    },
    inputParameters: [
      {
        name: "p1",
        label: "Initial Pressure (P1)",
        unit: "Kilopascals (kPa)",
        defaultValue: 100,
        explanation: "The initial absolute pressure. Default is 100 kPa (approx. 1 atmosphere)."
      },
      {
        name: "v1",
        label: "Initial Volume (V1)",
        unit: "Cubic Meters (m³)",
        defaultValue: 0.5,
        explanation: "The initial volume of the gas. Default is 0.5 m³."
      },
      {
        name: "v2",
        label: "Final Volume (V2)",
        unit: "Cubic Meters (m³)",
        defaultValue: 0.2,
        explanation: "The final compressed volume. Default is 0.2 m³."
      },
      {
        name: "gamma",
        label: "Specific Heat Ratio (γ)",
        unit: "Ratio",
        defaultValue: 1.4,
        explanation: "The ratio of specific heats (c_p / c_v). Default is 1.4, corresponding to standard diatomic gases (air, N2, O2) at ambient temperatures."
      }
    ],
    outputExplanation: {
      unit: "Kilopascals (kPa)",
      interpretation: "The output represents the final absolute gas pressure (P2) attained after reversible adiabatic compression or expansion.",
      designImpact: "Used to calculate required cylinder structural burst ratings, estimate engine compression ratios, and determine aerodynamic nozzle pressure drops."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Initial Pressure (P1)", value: 100, unit: "kPa" },
        { label: "Initial Volume (V1)", value: 0.5, unit: "m³" },
        { label: "Final Volume (V2)", value: 0.2, unit: "m³" },
        { label: "Specific Heat Ratio (γ)", value: 1.4, unit: "ratio" }
      ],
      substitution: "Substitute P1 = 100 kPa, V1 = 0.5 m³, V2 = 0.2 m³, and γ = 1.4 into P2 = P1 × (V1 / V2)^γ:",
      intermediateSteps: [
        "1. Compute the volume ratio (compression ratio r_v = V1 / V2): 0.5 / 0.2 = 2.5.",
        "2. Raise the volume ratio to the power of gamma (γ = 1.4): (2.5)^1.4 = 3.606214.",
        "3. Multiply by initial pressure: P2 = 100 kPa × 3.606214 = 360.62 kPa.",
        "4. Confirm dimensional units: [kPa] × [dimensionless] = kPa."
      ],
      finalResult: "360.62",
      unit: "Kilopascals (kPa)"
    },
    practicalExample: {
      scenarioTitle: "Diesel Engine Cylinder Compression Stroke Analysis",
      industryContext: "A heavy-duty industrial diesel engine draws in ambient air at atmospheric pressure P1 = 101.3 kPa with a cylinder displacement volume V1 = 2.0 liters (0.002 m³). The piston compresses the air to clearance volume V2 = 0.111 liters (compression ratio r = 18:1).",
      problemStatement: "Calculate the peak adiabatic compression pressure in the combustion chamber prior to fuel injection assuming isentropic air compression (γ = 1.4).",
      engineeringSolution: "Given P1 = 101.3 kPa, V1/V2 = 18.0, and γ = 1.4: P2 = 101.3 × (18.0)^1.4 = 101.3 × 57.198 = 5794.2 kPa = 5.79 MPa (approx. 58 bar). This extreme compression generates the high temperature (~900 K) required for auto-ignition of diesel fuel."
    },
    assumptions: [
      "Zero heat transfer across the system boundary (Q = 0, perfectly insulated or rapid process).",
      "Reversible process with zero internal entropy generation (isentropic process, S1 = S2).",
      "The working fluid behaves as an ideal gas with constant ratio of specific heats (γ = constant).",
      "Negligible kinetic and potential energy changes."
    ],
    limitations: [
      "Real-world compressors and engines exhibit entropy generation due to friction, shock waves, and turbulence (captured by isentropic efficiency η_isen < 100%).",
      "At very high temperatures (>1000 K), molecular vibrational modes activate, causing specific heat ratio γ to decrease from 1.4 down to ~1.3.",
      "Heat losses through real cylinder walls turn the process into a polytropic process (P·V^n = const, where 1 < n < γ)."
    ],
    commonMistakes: [
      "Confusing specific heat ratio γ (1.4 for diatomic, 1.67 for monatomic) with polytropic index n.",
      "Entering gauge pressure instead of absolute pressure (P_abs = P_gauge + P_atm).",
      "Assuming temperature remains constant during adiabatic compression (temperature rises dramatically: T2/T1 = (V1/V2)^(γ-1))."
    ],
    bestPractices: [
      "Use appropriate gamma values: Monatomic gases (He, Ar: γ ≈ 1.67), Diatomic gases (N2, O2, Air: γ ≈ 1.40), Triatomic gases (CO2, H2O: γ ≈ 1.30).",
      "To calculate the associated temperature change, use the isentropic relation: T2 = T1 × (V1 / V2)^(γ - 1).",
      "Incorporate compressor isentropic efficiency (η_s) when evaluating real-world machines: W_actual = W_isentropic / η_s."
    ],
    faqs: [
      {
        question: "What is an adiabatic process in thermodynamics?",
        answer: "An adiabatic process is a thermodynamic transformation in which no heat enters or leaves the system (Q = 0). All work done on the system directly increases its internal energy."
      },
      {
        question: "What is the difference between an adiabatic and an isentropic process?",
        answer: "An adiabatic process has zero heat transfer (Q = 0). An isentropic process is both adiabatic AND internally reversible, meaning entropy remains strictly constant (ΔS = 0)."
      },
      {
        question: "What is the specific heat ratio (γ, gamma)?",
        answer: "Gamma (γ = c_p / c_v) is the ratio of constant-pressure specific heat to constant-volume specific heat. For ideal monatomic gases γ = 5/3 ≈ 1.67, for diatomic gases (air, N2) γ = 7/5 = 1.40, and for triatomic gases γ ≈ 1.30."
      },
      {
        question: "How does temperature change during adiabatic compression?",
        answer: "During adiabatic compression, mechanical work done on the gas increases its internal thermal energy, causing temperature to rise according to T2 = T1 × (V1 / V2)^(γ - 1)."
      },
      {
        question: "Why is an adiabatic compression curve steeper than an isothermal curve on a P-V diagram?",
        answer: "Because γ > 1, the pressure derivative for an adiabatic process (dP/dV = -γ·P/V) is γ times steeper than the isothermal derivative (dP/dV = -P/V), due to simultaneous temperature elevation."
      },
      {
        question: "What is a polytropic process and how does it relate to adiabatic?",
        answer: "A polytropic process follows P·V^n = constant. When n = γ, the process is isentropic adiabatic. When n = 1, it is isothermal. Real compressors typically operate with polytropic index 1.2 < n < 1.35 due to heat loss."
      },
      {
        question: "Why do diesel engines rely on adiabatic compression?",
        answer: "Diesel engines lack spark plugs; they compress air adiabatically at high ratios (16:1 to 22:1), heating the air above 600 °C to auto-ignite injected diesel fuel."
      },
      {
        question: "Can sound waves be modeled as adiabatic processes?",
        answer: "Yes. Sound waves propagate via rapid microscopic compressions and rarefactions where heat transfer between adjacent wave crests and troughs is negligible, meaning acoustic wave speed is governed by the adiabatic bulk modulus (c = √(γ·R·T))."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 80000-5:2019", title: "Quantities and units — Part 5: Thermodynamics" },
      { organization: "ASME", code: "ASME PTC 10", title: "Performance Test Code for Axial and Centrifugal Compressors" },
      { organization: "SAE", code: "SAE J1349", title: "Engine Power Test Code — Spark Ignition and Compression Ignition" }
    ],
    internalLinks: {
      parentDiscipline: { id: "thermodynamics-calculators", name: "Thermodynamics" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 11. HEAT EXCHANGER EFFECTIVENESS CALCULATOR
  "heat-exchanger-effectiveness": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Heat Exchanger Effectiveness Calculator | ε-NTU Thermal Performance Solver",
    metaDescription: "Calculate heat exchanger thermal effectiveness (ε) percentage from actual heat transfer rate (Q_actual) and maximum thermodynamically possible heat transfer rate (Q_max).",
    canonicalUrl,
    introduction: {
      overview: "Heat exchanger effectiveness (ε) is a dimensionless thermal performance parameter that quantifies how closely a real heat exchanger approaches the maximum heat transfer rate thermodynamically possible in an idealized counter-flow heat exchanger of infinite surface area. Central to the Effectiveness-Number of Transfer Units (ε-NTU) method developed by London and Kays, effectiveness eliminates the need for iterative trial-and-error temperature calculations when outlet fluid temperatures are unknown. Defined as the ratio of actual heat transfer duty (Q_actual) to maximum theoretical heat transfer capacity (Q_max = C_min × (T_hot,in - T_cold,in)), effectiveness ranges from 0% to a theoretical 100%, directly reflecting equipment thermal efficiency, surface design, and flow configuration.",
      applications: [
        "Rating and sizing shell-and-tube, plate-and-frame, and microchannel heat exchangers in chemical plants.",
        "Evaluating HVAC air-to-air energy recovery ventilators (ERV) and economizer run-around coils.",
        "Optimizing vehicle radiator, oil cooler, and charge air cooler (intercooler) thermal performance.",
        "Monitoring fouling accumulation and performance degradation in industrial cooling water networks."
      ],
      industries: [
        "HVAC & Building Energy Recovery",
        "Chemical & Petrochemical Processing",
        "Automotive & Powertrain Thermal Engineering",
        "Power Generation & Waste Heat Recovery"
      ]
    },
    quickAnswer: "Heat exchanger effectiveness is calculated as ε = (Q_actual / Q_max) × 100%. For a heat exchanger delivering Q_actual = 180 kW out of a maximum possible Q_max = 240 kW, the thermal effectiveness is 75.0%.",
    governingEquation: {
      formula: "\\varepsilon = \\left(\\frac{Q_{\\text{actual}}}{Q_{\\text{max}}}\\right) \\times 100\\%",
      explanation: "Thermal effectiveness (ε in percent) represents the ratio of actual thermal energy transferred between fluid streams (Q_actual in kW) to the maximum theoretical heat transfer rate that could be transferred in an infinitely long counter-flow exchanger (Q_max in kW). In terms of stream heat capacity rates, Q_max = C_min × (T_h,in - T_c,in), where C_min = min(m_dot_h × c_p,h, m_dot_c × c_p,c).",
      variables: [
        { symbol: "ε", label: "Thermal Effectiveness", unit: "Percentage (%)", description: "Ratio of actual heat transfer duty to theoretical maximum heat transfer capacity." },
        { symbol: "Q_actual", label: "Actual Heat Transfer", unit: "Kilowatts (kW)", description: "Actual measured or specified heat transfer rate achieved between the streams." },
        { symbol: "Q_max", label: "Maximum Possible Heat", unit: "Kilowatts (kW)", description: "Thermodynamic maximum heat transfer rate achievable with infinite surface area." }
      ]
    },
    inputParameters: [
      {
        name: "qActual",
        label: "Actual Heat Transfer (Q)",
        unit: "Kilowatts (kW)",
        defaultValue: 180,
        explanation: "The actual thermal heat transfer rate achieved by the heat exchanger. Default value is 180 kW."
      },
      {
        name: "qMax",
        label: "Max Possible Heat (Qmax)",
        unit: "Kilowatts (kW)",
        defaultValue: 240,
        explanation: "The maximum possible heat transfer rate defined by C_min × (T_hot,in - T_cold,in). Default value is 240 kW."
      }
    ],
    outputExplanation: {
      unit: "Percentage (%)",
      interpretation: "The output represents the thermal effectiveness percentage (ε) of the heat exchanger.",
      designImpact: "Used to select appropriate flow configurations (counter-flow vs. parallel-flow vs. cross-flow), calculate Number of Transfer Units (NTU = U·A / C_min), and predict fluid exit temperatures."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Actual Heat Transfer (Q)", value: 180, unit: "kW" },
        { label: "Max Possible Heat (Qmax)", value: 240, unit: "kW" }
      ],
      substitution: "Substitute Q_actual = 180 kW and Q_max = 240 kW into ε = (Q_actual / Q_max) × 100%:",
      intermediateSteps: [
        "1. Identify input heat duty values: Q_actual = 180 kW, Q_max = 240 kW.",
        "2. Compute effectiveness fraction: 180 / 240 = 0.75.",
        "3. Multiply by 100% to convert to percentage: ε = 0.75 × 100% = 75.0%.",
        "4. Confirm result: ε lies within the physically valid range of 0% to 100%."
      ],
      finalResult: "75",
      unit: "Percentage (%)"
    },
    practicalExample: {
      scenarioTitle: "HVAC Energy Recovery Ventilator (ERV) Effectiveness Rating",
      industryContext: "A hospital HVAC air handling unit incorporates a counter-flow plate air-to-air energy recovery heat exchanger to recover heat from exhaust air.",
      problemStatement: "Exhaust air leaves at 24 °C (T_h,in) while outdoor makeup air enters at -6 °C (T_c,in). With balanced airflow C_min = 5.0 kW/K, the theoretical maximum heat transfer is Q_max = 5.0 × (24 - (-6)) = 150 kW. The measured heat transfer is 112.5 kW. Determine the ERV effectiveness.",
      engineeringSolution: "Applying the effectiveness equation: ε = (112.5 kW / 150.0 kW) × 100% = 75.0%. This meets ASHRAE 90.1 minimum efficiency standards for energy recovery systems."
    },
    assumptions: [
      "Steady-state operating conditions with constant mass flow rates and fluid temperatures.",
      "No heat losses to the ambient surroundings (adiabatic outer shell/insulation, Q_hot = Q_cold = Q_actual).",
      "Constant fluid specific heats (c_p) over the temperature range.",
      "No phase change occurring inside the heat exchanger channels."
    ],
    limitations: [
      "Effectiveness alone does not reveal whether the exchanger is parallel-flow, counter-flow, or cross-flow; flow geometry determines the relationship between ε and NTU.",
      "Cannot exceed theoretical limits: in parallel-flow heat exchangers, maximum effectiveness cannot exceed 50% for equal capacity rates (C_min = C_max).",
      "Does not account for tube fouling, maldistribution of flow, or bypass leaks unless reflected in measured Q_actual."
    ],
    commonMistakes: [
      "Entering Q_actual greater than Q_max (which violates the Second Law of Thermodynamics and produces ε > 100%).",
      "Using inconsistent power units (e.g., entering Q_actual in Watts and Q_max in Kilowatts).",
      "Confusing heat exchanger effectiveness (ε) with overall heat transfer coefficient (U) or surface efficiency."
    ],
    bestPractices: [
      "Always calculate Q_max using the minimum heat capacity rate stream: Q_max = C_min × (T_h,in - T_c,in), where C_min = min(m_dot_h·c_p,h, m_dot_c·c_p,c).",
      "Counter-flow configurations provide the highest effectiveness for a given surface area (NTU).",
      "Monitor effectiveness trends over time to schedule cleaning before fouling thermal resistance causes excessive process degradation."
    ],
    faqs: [
      {
        question: "What does the Heat Exchanger Effectiveness Calculator calculate?",
        answer: "This calculator computes the thermal effectiveness percentage (ε) of a heat exchanger by dividing actual thermal duty by maximum theoretical heat transfer capacity."
      },
      {
        question: "How is maximum theoretical heat transfer (Q_max) determined?",
        answer: "Q_max is calculated as Q_max = C_min × (T_hot,in - T_cold,in), where C_min is the smaller of the two fluid stream heat capacity rates (m_dot × c_p) and (T_hot,in - T_cold,in) is the maximum inlet temperature difference."
      },
      {
        question: "What is the ε-NTU method and why is it useful?",
        answer: "The ε-NTU (Number of Transfer Units) method relates effectiveness to heat transfer area (U·A) and capacity rates. It allows direct calculation of heat exchanger performance when outlet temperatures are unknown, avoiding iterative LMTD calculations."
      },
      {
        question: "Why is counter-flow more effective than parallel-flow?",
        answer: "In counter-flow, the cold fluid exits near the hottest inlet temperature, maintaining a uniform temperature gradient throughout the exchanger. In parallel-flow, the outlet cold temperature can never exceed the outlet hot temperature, capping maximum theoretical effectiveness at 50% for C_r = 1."
      },
      {
        question: "What is the Number of Transfer Units (NTU)?",
        answer: "NTU is a dimensionless measure of heat exchanger physical size and heat transfer area, defined as NTU = (U × A) / C_min, where U is overall heat transfer coefficient and A is surface area."
      },
      {
        question: "Can heat exchanger effectiveness exceed 100%?",
        answer: "No. An effectiveness greater than 100% is physically impossible as it would violate the First and Second Laws of Thermodynamics by transferring more heat than the maximum enthalpy differential between the two streams."
      },
      {
        question: "What is the heat capacity rate ratio (C_r)?",
        answer: "C_r is the ratio of minimum to maximum stream heat capacity rates: C_r = C_min / C_max (ranging from 0 for condensers/boilers to 1 for balanced flow exchangers)."
      },
      {
        question: "What are typical effectiveness values for industrial heat exchangers?",
        answer: "Typical values include: Plate heat exchangers (75%–90%), Counter-flow shell-and-tube (60%–80%), Cross-flow car radiators (50%–70%), and HVAC air-to-air energy recovery wheels (70%–85%)."
      }
    ],
    standardsReferences: [
      { organization: "TEMA", code: "Standards of the Tubular Exchanger Manufacturers Association", title: "Thermal Performance & Mechanical Standards" },
      { organization: "AHRI", code: "AHRI Standard 400", title: "Liquid-to-Liquid Heat Exchangers" },
      { organization: "ASHRAE", code: "ASHRAE Standard 84", title: "Method of Testing Air-to-Air Heat/Energy Exchangers" }
    ],
    internalLinks: {
      parentDiscipline: { id: "thermodynamics-calculators", name: "Thermodynamics" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 12. THERMAL RESISTANCE CALCULATOR
  "thermal-resistance": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Thermal Resistance Calculator | Fourier Conduction R-Value Solver",
    metaDescription: "Calculate conductive thermal resistance (R_th) in Kelvin per Watt (K/W) across solid material layers from thickness (d), thermal conductivity (k), and surface area (A).",
    canonicalUrl,
    introduction: {
      overview: "Thermal resistance (R_th) is the fundamental thermodynamic property that quantifies a material's or assembly's opposition to the conduction of thermal heat flux under a steady-state temperature gradient. Formulated in direct mathematical analogy to electrical Ohm's Law (where thermal resistance R_th = ΔT / Q corresponds to electrical resistance R = V / I), conduction thermal resistance depends directly on layer thickness along the heat flow path and inversely on the material's thermal conductivity and cross-sectional surface area (R_th = d / (k × A)). In thermal engineering, building physics, and semiconductor packaging, modeling complex multilayer walls, heat sinks, and insulation jackets as series and parallel thermal resistor networks allows straightforward calculation of junction temperatures, heat loss rates, and composite R-values.",
      applications: [
        "Designing thermal packaging and heatsink junction-to-ambient resistance networks (θ_JA) for microprocessors and power transistors.",
        "Evaluating composite building wall, roof, and floor insulation assemblies (R-values and U-factors).",
        "Sizing thermal barrier insulation for cryogenic liquid tanks and high-temperature steam lines.",
        "Optimizing multi-layer furnace refractory linings and fireproof barrier envelopes."
      ],
      industries: [
        "Electronics Thermal Management",
        "Building Envelope & Architectural Physics",
        "Cryogenics & Industrial Insulation",
        "Aerospace Thermal Protection Systems"
      ]
    },
    quickAnswer: "Conductive thermal resistance is calculated as R_th = d / (k × A). For an insulation layer with thickness d = 0.05 m, thermal conductivity k = 0.04 W/(m·K), and surface area A = 10 m², the thermal resistance is 0.125 Kelvin per Watt (K/W).",
    governingEquation: {
      formula: "R_{\\text{th}} = \\frac{d}{k \\times A}",
      explanation: "Conduction thermal resistance (R_th in K/W) represents the temperature difference required to transfer one Watt of thermal power through a planar layer. It is directly proportional to layer thickness (d in meters) and inversely proportional to thermal conductivity (k in W/(m·K)) and heat transfer surface area (A in m²). By analogy to Ohm's Law, heat transfer rate is expressed as Q = ΔT / R_th.",
      variables: [
        { symbol: "R_th", label: "Thermal Resistance", unit: "Kelvin per Watt (K/W)", description: "Opposition to steady-state conductive heat flow across the solid barrier." },
        { symbol: "d", label: "Layer Thickness", unit: "Meters (m)", description: "Physical thickness traversed by heat flux along the thermal gradient." },
        { symbol: "k", label: "Thermal Conductivity", unit: "W/(m·K)", description: "Intrinsic material property measuring rate of heat conduction." },
        { symbol: "A", label: "Surface Area", unit: "Square Meters (m²)", description: "Cross-sectional face area perpendicular to the heat conduction path." }
      ]
    },
    inputParameters: [
      {
        name: "thickness",
        label: "Layer Thickness (d)",
        unit: "Meters (m)",
        defaultValue: 0.05,
        explanation: "The physical thickness of the material layer. Default value is 0.05 m (50 mm)."
      },
      {
        name: "k",
        label: "Thermal Conductivity (k)",
        unit: "W/(m·K)",
        defaultValue: 0.04,
        explanation: "The thermal conductivity of the material. Default is 0.04 W/(m·K), representative of mineral wool or fiberglass building insulation."
      },
      {
        name: "area",
        label: "Surface Area (A)",
        unit: "Square Meters (m²)",
        defaultValue: 10,
        explanation: "The heat transfer surface area. Default value is 10 m²."
      }
    ],
    outputExplanation: {
      unit: "K / W",
      interpretation: "The output represents the absolute thermal resistance (in Kelvin per Watt or °C/W) of the specific material layer geometry.",
      designImpact: "Engineers sum series thermal resistances (R_total = R_conv1 + R_cond1 + R_cond2 + R_conv2) to calculate overall heat flux and determine interface temperatures."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Layer Thickness (d)", value: 0.05, unit: "m" },
        { label: "Thermal Conductivity (k)", value: 0.04, unit: "W/(m·K)" },
        { label: "Surface Area (A)", value: 10, unit: "m²" }
      ],
      substitution: "Substitute d = 0.05 m, k = 0.04 W/(m·K), and A = 10 m² into R_th = d / (k × A):",
      intermediateSteps: [
        "1. Identify input variables: d = 0.05 m, k = 0.04 W/(m·K), A = 10 m².",
        "2. Compute denominator product (k × A): 0.04 W/(m·K) × 10 m² = 0.40 W·m/K.",
        "3. Divide thickness by denominator: R_th = 0.05 m / 0.40 W·m/K = 0.125 K/W.",
        "4. Dimensional check: [m] / [W·m/K] = K/W."
      ],
      finalResult: "0.125",
      unit: "K / W"
    },
    practicalExample: {
      scenarioTitle: "Semiconductor Power Transistor Heatsink Thermal Pad Sizing",
      industryContext: "A high-power IGBT inverter module dissipates 200 Watts of waste heat through an electrically insulating silicone thermal gap filler pad into an aluminum heatsink across a contact area of 0.005 m² (50 cm²).",
      problemStatement: "Calculate the thermal resistance of a 1.0 mm (0.001 m) thick pad with thermal conductivity k = 2.5 W/(m·K), and determine the temperature drop across the pad.",
      engineeringSolution: "Given d = 0.001 m, k = 2.5 W/(m·K), and A = 0.005 m²: R_th = 0.001 / (2.5 × 0.005) = 0.001 / 0.0125 = 0.080 K/W. With Q = 200 W, the temperature drop across the pad is ΔT = Q × R_th = 200 W × 0.080 K/W = 16.0 K (16 °C), confirming safe junction operating temperatures."
    },
    assumptions: [
      "One-dimensional steady-state heat conduction across planar parallel faces.",
      "Homogeneous and isotropic material with uniform thermal conductivity k.",
      "Negligible thermal contact resistance at the layer boundary interfaces.",
      "Zero internal volumetric heat generation within the layer."
    ],
    limitations: [
      "Does not apply directly to cylindrical (radial) geometries (which require R_cyl = ln(r2/r1) / (2·π·k·L)) or spherical shells.",
      "Does not include convective surface film resistances (R_conv = 1 / (h·A)) or radiative thermal resistances.",
      "Neglects micro-scale surface roughness and air gaps at interfaces unless a separate contact resistance is added."
    ],
    commonMistakes: [
      "Confusing absolute thermal resistance (R_th in K/W) with area-normalized thermal resistance (R-value in m²·K/W, where R_value = d / k).",
      "Entering thickness in millimeters instead of meters.",
      "Omitting contact resistance (TIM resistance) in high-flux electronic cooling calculations."
    ],
    bestPractices: [
      "For composite wall systems, sum series resistances: R_total = R1 + R2 + ... + Rn.",
      "To find heat transfer rate from total thermal resistance, apply the thermal Ohm's law: Q = ΔT_total / R_total.",
      "To convert absolute thermal resistance (K/W) to area-normalized R-value (m²·K/W), multiply R_th by surface area A: R_value = R_th × A."
    ],
    faqs: [
      {
        question: "What does the Thermal Resistance Calculator calculate?",
        answer: "This calculator determines the conductive thermal resistance (in Kelvin per Watt, K/W) across a planar solid material layer from its thickness, thermal conductivity, and surface area."
      },
      {
        question: "What is the electrical analogy for thermal resistance?",
        answer: "In the thermal-electrical analogy: Temperature difference (ΔT in K) corresponds to Voltage (V), Heat transfer rate (Q in Watts) corresponds to Current (I), and Thermal resistance (R_th in K/W) corresponds to Electrical resistance (R in Ohms), governed by ΔT = Q × R_th."
      },
      {
        question: "What is the difference between absolute thermal resistance (K/W) and R-value (m²·K/W)?",
        answer: "Absolute thermal resistance (R_th = d / (k·A) in K/W) depends on specific component area. Building R-value (R = d / k in m²·K/W) is an area-independent property measuring thermal resistance per unit area."
      },
      {
        question: "How do you combine thermal resistances in series?",
        answer: "Thermal resistances in series (such as multilayer walls) are summed directly: R_total = R_1 + R_2 + R_3 + ... + R_n."
      },
      {
        question: "How do you combine thermal resistances in parallel?",
        answer: "For parallel heat paths (such as wall studs and cavity insulation): 1 / R_total = 1 / R_1 + 1 / R_2 + ... + 1 / R_n."
      },
      {
        question: "What is thermal contact resistance?",
        answer: "Thermal contact resistance occurs at the interface between two contacting solid surfaces due to microscopic surface roughness that traps insulating microscopic air pockets, causing an interface temperature drop."
      },
      {
        question: "How does increasing surface area affect thermal resistance?",
        answer: "Because surface area (A) is in the denominator (R_th = d / (k·A)), doubling the surface area cuts the absolute thermal resistance in half, allowing twice as much heat to flow for the same temperature difference."
      },
      {
        question: "What is the formula for convective thermal resistance?",
        answer: "Convective thermal resistance at a solid-fluid interface is given by R_conv = 1 / (h × A), where h is the convective heat transfer coefficient (W/(m²·K)) and A is surface area (m²)."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 6946", title: "Building components and building elements — Thermal resistance and thermal transmittance — Calculation methods" },
      { organization: "JEDEC", code: "JESD51-1", title: "Integrated Circuit Thermal Measurement Method — Electrical Test Method (Single Semiconductor Device)" },
      { organization: "ASTM", code: "ASTM C518", title: "Standard Test Method for Steady-State Thermal Transmission Properties by Means of the Heat Flow Meter Apparatus" }
    ],
    internalLinks: {
      parentDiscipline: { id: "thermodynamics-calculators", name: "Thermodynamics" },
      relatedTools,
      relevantUnitCategories
    }
  })

};
