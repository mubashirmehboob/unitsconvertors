/**
 * Authoritative Engineering Units & Conversion Reference Data
 * Grounded in:
 * - BIPM SI Brochure (9th Edition, 2019 / 2022)
 * - NIST Special Publication 811 & NIST Special Publication 330
 * - ISO/IEC 80000 series (Quantities and units: Mechanics, Electromagnetism, Thermodynamics)
 * - ASME Boiler and Pressure Vessel Code (BPVC) & Performance Test Codes
 * - IEEE Standard 260.1 (Letter Symbols for Units of Measurement)
 * - SAE J916 (Rules for the Use of SI Metric Units in Automotive Engineering)
 */

export interface EngineeringSection {
  id: string;
  title: string;
  shortTitle: string;
}

export const ENGINEERING_SECTIONS: EngineeringSection[] = [
  { id: "overview", title: "1. Engineering Units: An Overview", shortTitle: "Overview" },
  { id: "si-in-engineering", title: "2. SI Units Used in Engineering", shortTitle: "SI Foundation" },
  { id: "mechanical-units", title: "3. Mechanical Engineering Units", shortTitle: "Mechanical" },
  { id: "electrical-units", title: "4. Electrical Engineering Units", shortTitle: "Electrical" },
  { id: "thermal-units", title: "5. Thermal Engineering Units", shortTitle: "Thermal" },
  { id: "fluid-units", title: "6. Fluid Engineering Units", shortTitle: "Fluids" },
  { id: "conversion-factors", title: "7. Common Engineering Conversion Factors", shortTitle: "Conversion Factors" },
  { id: "formula-reference", title: "8. Engineering Formula Reference", shortTitle: "Formulas" },
  { id: "metric-vs-imperial", title: "9. Metric vs Imperial Engineering Units", shortTitle: "Metric vs Imperial" },
  { id: "conversion-examples", title: "10. Engineering Unit Conversion Examples", shortTitle: "Worked Examples" },
  { id: "common-mistakes", title: "11. Common Engineering Conversion Mistakes", shortTitle: "Common Pitfalls" },
  { id: "engineering-tools", title: "12. Engineering Conversion Tools", shortTitle: "Calculators & Tools" },
  { id: "faq", title: "13. Frequently Asked Questions", shortTitle: "FAQs" },
  { id: "references", title: "14. Authoritative Standards & References", shortTitle: "References" },
];

export interface UnitFactorRecord {
  quantity: string;
  siUnit: string;
  siSymbol: string;
  usUnit: string;
  usSymbol: string;
  conversionEquation: string;
  exactFactor: boolean;
  notes: string;
}

export const ENGINEERING_CONVERSION_FACTORS: UnitFactorRecord[] = [
  // Force
  {
    quantity: "Force",
    siUnit: "Newton",
    siSymbol: "N",
    usUnit: "Pound-force",
    usSymbol: "lbf",
    conversionEquation: "1 lbf = 4.448 221 615 260 5 N",
    exactFactor: true,
    notes: "Based on 0.45359237 kg × 9.80665 m/s² (1959 international agreement)"
  },
  {
    quantity: "Force",
    siUnit: "Kilonewton",
    siSymbol: "kN",
    usUnit: "Kilopound-force (Kip)",
    usSymbol: "kip",
    conversionEquation: "1 kip = 4.448 221 615 kN (1000 lbf)",
    exactFactor: false,
    notes: "Common in North American structural civil engineering"
  },
  {
    quantity: "Force",
    siUnit: "Newton",
    siSymbol: "N",
    usUnit: "Dyne",
    usSymbol: "dyn",
    conversionEquation: "1 N = 100 000 dyn (1 dyn = 10⁻⁵ N)",
    exactFactor: true,
    notes: "CGS system coherent unit of force (1 g·cm/s²)"
  },

  // Torque
  {
    quantity: "Torque / Moment",
    siUnit: "Newton-meter",
    siSymbol: "N·m",
    usUnit: "Pound-foot",
    usSymbol: "lb·ft (lbf·ft)",
    conversionEquation: "1 lb·ft ≈ 1.355 817 948 N·m",
    exactFactor: false,
    notes: "Calculated as 0.3048 m × 4.448221615 N; vector cross product r × F"
  },
  {
    quantity: "Torque / Moment",
    siUnit: "Newton-meter",
    siSymbol: "N·m",
    usUnit: "Pound-inch",
    usSymbol: "lb·in (lbf·in)",
    conversionEquation: "1 lb·in ≈ 0.112 984 829 N·m (1 lb·ft = 12 lb·in)",
    exactFactor: false,
    notes: "Standard fastener rating unit in precision aerospace and automotive"
  },
  {
    quantity: "Torque / Moment",
    siUnit: "Newton-meter",
    siSymbol: "N·m",
    usUnit: "Kilogram-force meter",
    usSymbol: "kgf·m",
    conversionEquation: "1 kgf·m = 9.806 65 N·m",
    exactFactor: true,
    notes: "Gravitational metric torque unit still observed in European automotive data"
  },

  // Pressure & Stress
  {
    quantity: "Pressure / Stress",
    siUnit: "Pascal",
    siSymbol: "Pa (N/m²)",
    usUnit: "Pound per square inch",
    usSymbol: "psi (lbf/in²)",
    conversionEquation: "1 psi ≈ 6 894.757 293 Pa (6.894 757 kPa)",
    exactFactor: false,
    notes: "Calculated as 4.448221615 N / (0.0254 m)²"
  },
  {
    quantity: "Pressure",
    siUnit: "Megapascal",
    siSymbol: "MPa (N/mm²)",
    usUnit: "Kilopound per sq inch",
    usSymbol: "ksi",
    conversionEquation: "1 ksi ≈ 6.894 757 MPa (1000 psi)",
    exactFactor: false,
    notes: "Standard structural material yield stress unit in US practice"
  },
  {
    quantity: "Pressure",
    siUnit: "Bar",
    siSymbol: "bar",
    usUnit: "Pound per square inch",
    usSymbol: "psi",
    conversionEquation: "1 bar = 100 000 Pa = 100 kPa ≈ 14.503 774 psi",
    exactFactor: false,
    notes: "Widely used in European pneumatics, hydraulics, and meteorology"
  },
  {
    quantity: "Pressure",
    siUnit: "Standard atmosphere",
    siSymbol: "atm",
    usUnit: "Pound per square inch",
    usSymbol: "psi",
    conversionEquation: "1 atm = 101 325 Pa = 1.013 25 bar ≈ 14.695 949 psi",
    exactFactor: true,
    notes: "Mean sea level standard atmospheric pressure defined at 101.325 kPa exact"
  },

  // Energy & Work
  {
    quantity: "Energy / Work",
    siUnit: "Joule",
    siSymbol: "J (N·m)",
    usUnit: "Foot-pound force",
    usSymbol: "ft·lbf",
    conversionEquation: "1 ft·lbf ≈ 1.355 817 948 J",
    exactFactor: false,
    notes: "Scalar dot product F · d of force through displacement"
  },
  {
    quantity: "Energy / Heat",
    siUnit: "Joule",
    siSymbol: "J",
    usUnit: "British Thermal Unit (IT)",
    usSymbol: "BTU_IT",
    conversionEquation: "1 BTU_IT = 1 055.055 852 62 J (≈ 1.055 056 kJ)",
    exactFactor: true,
    notes: "International Steam Table definition (5th Int. Conf. on Properties of Steam, 1956)"
  },
  {
    quantity: "Energy / Work",
    siUnit: "Megajoule",
    siSymbol: "MJ",
    usUnit: "Kilowatt-hour",
    usSymbol: "kW·h",
    conversionEquation: "1 kW·h = 3 600 000 J = 3.6 MJ",
    exactFactor: true,
    notes: "Derived from 1000 W × 3600 s; standard electrical utility billing unit"
  },

  // Power
  {
    quantity: "Power",
    siUnit: "Watt",
    siSymbol: "W (J/s)",
    usUnit: "Mechanical Horsepower",
    usSymbol: "hp (mech)",
    conversionEquation: "1 hp ≈ 745.699 871 582 W (550 ft·lbf/s)",
    exactFactor: false,
    notes: "Defined as 550 foot-pounds force per second"
  },
  {
    quantity: "Power",
    siUnit: "Watt",
    siSymbol: "W",
    usUnit: "Metric Horsepower",
    usSymbol: "PS / cv",
    conversionEquation: "1 PS = 75 kgf·m/s = 735.498 75 W",
    exactFactor: true,
    notes: "Pferdestärke / cheval-vapeur standard across continental Europe and Asia"
  },
  {
    quantity: "Power",
    siUnit: "Kilowatt",
    siSymbol: "kW",
    usUnit: "BTU per hour",
    usSymbol: "BTU/h",
    conversionEquation: "1 kW ≈ 3 412.142 BTU/h (1 BTU/h ≈ 0.293 071 W)",
    exactFactor: false,
    notes: "Fundamental conversion in HVAC heating and cooling capacity sizing"
  },

  // Density
  {
    quantity: "Density",
    siUnit: "Kilogram / cubic meter",
    siSymbol: "kg/m³",
    usUnit: "Pound / cubic foot",
    usSymbol: "lb/ft³",
    conversionEquation: "1 lb/ft³ ≈ 16.018 463 kg/m³",
    exactFactor: false,
    notes: "0.45359237 kg / (0.3048 m)³; water density ≈ 1000 kg/m³ = 62.428 lb/ft³ at 4°C"
  },
  {
    quantity: "Density",
    siUnit: "Gram / cubic centimeter",
    siSymbol: "g/cm³",
    usUnit: "Pound / cubic inch",
    usSymbol: "lb/in³",
    conversionEquation: "1 lb/in³ ≈ 27.679 905 g/cm³ = 27 679.9 kg/m³",
    exactFactor: false,
    notes: "Used in aerospace material catalogs (e.g. steel ≈ 0.283 lb/in³ = 7.85 g/cm³)"
  },

  // Volumetric Flow
  {
    quantity: "Volumetric Flow Rate",
    siUnit: "Cubic meter / second",
    siSymbol: "m³/s",
    usUnit: "Cubic foot per minute",
    usSymbol: "CFM (ft³/min)",
    conversionEquation: "1 CFM ≈ 0.000 471 947 443 m³/s (≈ 1.699 011 m³/h)",
    exactFactor: false,
    notes: "Universal ventilation and compressed air delivery rating unit"
  },
  {
    quantity: "Volumetric Flow Rate",
    siUnit: "Liter / minute",
    siSymbol: "L/min",
    usUnit: "US Gallon per minute",
    usSymbol: "US GPM",
    conversionEquation: "1 US GPM ≈ 3.785 411 784 L/min (≈ 0.227 125 m³/h)",
    exactFactor: true,
    notes: "Based on 1 US liquid gallon = 231 in³ = 3.785411784 L exact"
  },
  {
    quantity: "Volumetric Flow Rate",
    siUnit: "Liter / minute",
    siSymbol: "L/min",
    usUnit: "Imperial Gallon per min",
    usSymbol: "Imp GPM",
    conversionEquation: "1 Imp GPM = 4.546 09 L/min (≈ 1.200 950 US GPM)",
    exactFactor: true,
    notes: "1 Imperial gallon = 4.54609 L exact; 20.09% larger than a US liquid gallon"
  },

  // Viscosity
  {
    quantity: "Dynamic Viscosity (μ)",
    siUnit: "Pascal-second",
    siSymbol: "Pa·s (N·s/m²)",
    usUnit: "Centipoise",
    usSymbol: "cP",
    conversionEquation: "1 Pa·s = 1000 cP = 10 P (1 cP = 1 mPa·s)",
    exactFactor: true,
    notes: "Liquid water at 20°C has a dynamic viscosity of approximately 1.002 cP"
  },
  {
    quantity: "Kinematic Viscosity (ν)",
    siUnit: "Square meter / second",
    siSymbol: "m²/s",
    usUnit: "Centistokes",
    usSymbol: "cSt",
    conversionEquation: "1 m²/s = 1 000 000 cSt (1 cSt = 1 mm²/s = 10⁻⁶ m²/s)",
    exactFactor: true,
    notes: "Directly relates to kinematic capillary viscometers (ISO VG lubricant grades)"
  },

  // Thermal Conductivity
  {
    quantity: "Thermal Conductivity (k)",
    siUnit: "Watt per meter-kelvin",
    siSymbol: "W/(m·K)",
    usUnit: "BTU per hour-foot-deg F",
    usSymbol: "BTU/(h·ft·°F)",
    conversionEquation: "1 BTU/(h·ft·°F) ≈ 1.730 735 W/(m·K)",
    exactFactor: false,
    notes: "Central heat transfer property governing Fourier's Law conduction"
  }
];

export interface FormulaDetailed {
  name: string;
  formula: string;
  latex: string;
  variables: { symbol: string; name: string; siUnit: string; imperialUnit: string; description: string }[];
  description: string;
  engineeringContext: string;
}

export const ENGINEERING_FORMULAS: FormulaDetailed[] = [
  {
    name: "Newton's Second Law of Motion",
    formula: "F = m · a",
    latex: "F = m \\cdot a",
    variables: [
      { symbol: "F", name: "Force", siUnit: "Newton (N = kg·m/s²)", imperialUnit: "Pound-force (lbf)", description: "Net resultant physical force vector applied to the body." },
      { symbol: "m", name: "Mass", siUnit: "Kilogram (kg)", imperialUnit: "Slug (or lbm with gc factor)", description: "Inertial resistance of the body to acceleration." },
      { symbol: "a", name: "Acceleration", siUnit: "Meters per second squared (m/s²)", imperialUnit: "Feet per second squared (ft/s²)", description: "Time rate of change of linear velocity." }
    ],
    description: "Defines the dynamic relationship between unbalanced force, inertial mass, and spatial acceleration. In the coherent SI system, 1 Newton accelerates 1 kilogram at 1 m/s².",
    engineeringContext: "Crucial for sizing mechanical actuators, computing braking decelerations, seismic structural analysis, and vibration shock mounts."
  },
  {
    name: "Fluid & Hydrostatic Pressure",
    formula: "P = F / A",
    latex: "P = \\frac{F}{A}",
    variables: [
      { symbol: "P", name: "Pressure", siUnit: "Pascal (Pa = N/m²)", imperialUnit: "Pound per square inch (psi)", description: "Uniform perpendicular compressive force exerted per unit area." },
      { symbol: "F", name: "Normal Force", siUnit: "Newton (N)", imperialUnit: "Pound-force (lbf)", description: "Component of force acting perpendicular to the surface." },
      { symbol: "A", name: "Surface Area", siUnit: "Square meter (m²)", imperialUnit: "Square inch (in²)", description: "Projected contact surface area." }
    ],
    description: "Quantifies normal compressive force distributed over a boundary. In engineering, pressure is isotropic in static fluids and always acts normal to containment walls.",
    engineeringContext: "Applied in hydraulic cylinders, pressure vessels (ASME Section VIII), pipe network hydraulics, and pneumatic automation."
  },
  {
    name: "Mechanical Work Done by Constant Force",
    formula: "W = F · d",
    latex: "W = F \\cdot d \\cdot \\cos(\\theta)",
    variables: [
      { symbol: "W", name: "Work", siUnit: "Joule (J = N·m)", imperialUnit: "Foot-pound force (ft·lbf)", description: "Scalar energy transferred through displacement." },
      { symbol: "F", name: "Force Magnitude", siUnit: "Newton (N)", imperialUnit: "Pound-force (lbf)", description: "Magnitude of the applied mechanical force." },
      { symbol: "d", name: "Displacement", siUnit: "Meter (m)", imperialUnit: "Foot (ft)", description: "Distance through which the point of application moves." }
    ],
    description: "Evaluates the scalar dot product of a force vector acting along a displacement path. When force and displacement are collinear, W = F · d.",
    engineeringContext: "Used in elevator hoisting motors, winch energy consumption, material handling conveyors, and mechanical presses."
  },
  {
    name: "Mechanical & Thermal Power",
    formula: "P = W / t",
    latex: "P = \\frac{W}{t} = F \\cdot v",
    variables: [
      { symbol: "P", name: "Power", siUnit: "Watt (W = J/s)", imperialUnit: "Horsepower (hp) / (ft·lbf/s)", description: "Instantaneous or average time rate of doing work or transferring energy." },
      { symbol: "W", name: "Work / Energy", siUnit: "Joule (J)", imperialUnit: "Foot-pound force (ft·lbf)", description: "Quantity of energy transformed or transferred." },
      { symbol: "t", name: "Elapsed Time", siUnit: "Second (s)", imperialUnit: "Second (s) / Hour (h)", description: "Duration over which the energy transfer occurs." }
    ],
    description: "Expresses how quickly mechanical work is performed or heat is released. In continuous kinematic systems, mechanical power equals force multiplied by velocity (P = F · v).",
    engineeringContext: "Guides the selection of electric drive motors, internal combustion engines, steam turbine stages, and pump drives."
  },
  {
    name: "Volumetric Mass Density",
    formula: "ρ = m / V",
    latex: "\\rho = \\frac{m}{V}",
    variables: [
      { symbol: "ρ", name: "Density", siUnit: "Kilogram per cubic meter (kg/m³)", imperialUnit: "Pound per cubic foot (lb/ft³)", description: "Mass of physical matter contained within a unit volume." },
      { symbol: "m", name: "Mass", siUnit: "Kilogram (kg)", imperialUnit: "Pound mass (lbm) / Slug", description: "Total quantity of matter." },
      { symbol: "V", name: "Volume", siUnit: "Cubic meter (m³)", imperialUnit: "Cubic foot (ft³) / Gallon", description: "Three-dimensional space occupied by the substance." }
    ],
    description: "Defines the volumetric concentration of matter. Density determines buoyancy, fluid head pressures, inertial mass, and structural dead loads.",
    engineeringContext: "Applied in naval architecture (ship displacement), aerodynamics, HVAC duct sizing, and material selection for lightweighting."
  },
  {
    name: "Mechanical Normal Stress",
    formula: "σ = F / A",
    latex: "\\sigma = \\frac{F}{A}",
    variables: [
      { symbol: "σ", name: "Normal Stress", siUnit: "Pascal / Megapascal (Pa, MPa = N/mm²)", imperialUnit: "Kip per square inch (ksi)", description: "Internal resisting force per unit cross-sectional area." },
      { symbol: "F", name: "Axial Force", siUnit: "Newton (N)", imperialUnit: "Pound-force (lbf)", description: "Internal tensile or compressive load passing through centroid." },
      { symbol: "A", name: "Cross-Sectional Area", siUnit: "Square meter (m²) or mm²", imperialUnit: "Square inch (in²)", description: "Original un-deformed cross-sectional area." }
    ],
    description: "Quantifies the internal intensity of forces within a deformed elastic continuum. Megapascal (MPa) is numerically identical to N/mm², providing convenient engineering units.",
    engineeringContext: "Directly evaluated against material yield strength (σ_y) and ultimate tensile strength (σ_u) in structural and machine component safety factors."
  },
  {
    name: "Linear Elastic Strain",
    formula: "ε = ΔL / L",
    latex: "\\varepsilon = \\frac{\\Delta L}{L_0}",
    variables: [
      { symbol: "ε", name: "Normal Strain", siUnit: "Dimensionless (m/m, % or με)", imperialUnit: "Dimensionless (in/in or με)", description: "Fractional deformation or relative elongation of a member." },
      { symbol: "ΔL", name: "Elongation / Deflection", siUnit: "Meter (m) or mm", imperialUnit: "Inch (in)", description: "Change in gauge length under applied loading." },
      { symbol: "L₀", name: "Original Gauge Length", siUnit: "Meter (m) or mm", imperialUnit: "Inch (in)", description: "Reference length of member prior to deformation." }
    ],
    description: "A normalized geometric measure of deformation. Because numerator and denominator share identical units of length, strain is formally dimensionless, often stated in microstrain (με = 10⁻⁶).",
    engineeringContext: "Measured using bonded electrical resistance strain gauges; coupled with stress via Hooke's Law (σ = E · ε) where E is Young's Modulus."
  },
  {
    name: "Ohm's Law for DC & Resistive Circuits",
    formula: "V = I · R",
    latex: "V = I \\cdot R",
    variables: [
      { symbol: "V", name: "Potential Difference", siUnit: "Volt (V = J/C)", imperialUnit: "Volt (V)", description: "Electric potential drop or electromotive force between two nodes." },
      { symbol: "I", name: "Electric Current", siUnit: "Ampere (A = C/s)", imperialUnit: "Ampere (A)", description: "Rate of net electric charge flow through conductor." },
      { symbol: "R", name: "Electrical Resistance", siUnit: "Ohm (Ω = V/A)", imperialUnit: "Ohm (Ω)", description: "Opposition to current flow in a conductive medium." }
    ],
    description: "Governs linear steady-state electric conduction in ohmic media. States that current is directly proportional to voltage and inversely proportional to resistance.",
    engineeringContext: "Used in circuit analysis, PCB power rail voltage-drop calculation, current-limiting resistor sizing, and wire gauge specification."
  },
  {
    name: "Electric Power Dissipation (Joule Heating)",
    formula: "P = V · I",
    latex: "P = V \\cdot I = I^2 \\cdot R = \\frac{V^2}{R}",
    variables: [
      { symbol: "P", name: "Electric Power", siUnit: "Watt (W = J/s)", imperialUnit: "Watt (W) / Horsepower (hp)", description: "Rate of electrical energy conversion into heat, mechanical work, or radiation." },
      { symbol: "V", name: "Voltage Across Element", siUnit: "Volt (V)", imperialUnit: "Volt (V)", description: "Potential drop across resistive component." },
      { symbol: "I", name: "Current Flowing", siUnit: "Ampere (A)", imperialUnit: "Ampere (A)", description: "Electric current through resistive element." }
    ],
    description: "Quantifies the rate at which electrical potential energy is dissipated in a circuit branch. For pure resistors, substitution of Ohm's Law yields P = I²R and P = V²/R.",
    engineeringContext: "Fundamental in heatsink thermal calculations, electrical motor ratings, power supply sizing, and wiring ampacity limits (NFPA 70 / NEC)."
  },
  {
    name: "Coulombic Electric Charge Transport",
    formula: "Q = I · t",
    latex: "Q = \\int I \\, dt = I \\cdot t",
    variables: [
      { symbol: "Q", name: "Electric Charge", siUnit: "Coulomb (C = A·s)", imperialUnit: "Ampere-hour (Ah = 3600 C)", description: "Cumulative physical quantity of electric charge moved." },
      { symbol: "I", name: "Constant Current", siUnit: "Ampere (A)", imperialUnit: "Ampere (A)", description: "Steady electrical current stream." },
      { symbol: "t", name: "Conduction Time", siUnit: "Second (s)", imperialUnit: "Hour (h)", description: "Time window of charge delivery." }
    ],
    description: "Relates electric charge directly to current and time. One Coulomb represents the total charge carried by a constant current of one Ampere flowing for one second.",
    engineeringContext: "Crucial for sizing chemical battery capacities (stated in mAh or Ah), electroplating deposition rates, and capacitor charging curves (Q = C · V)."
  },
  {
    name: "Cumulative Electrical Energy",
    formula: "E = P · t",
    latex: "E = P \\cdot t = V \\cdot I \\cdot t",
    variables: [
      { symbol: "E", name: "Electrical Energy", siUnit: "Joule (J) / Kilowatt-hour (kW·h)", imperialUnit: "kW·h / BTU", description: "Total work or energy transferred by electric current over time." },
      { symbol: "P", name: "Power Consumed", siUnit: "Watt (W) or Kilowatt (kW)", imperialUnit: "Watt (W) or Horsepower", description: "Operating rate of energy consumption." },
      { symbol: "t", name: "Duration of Operation", siUnit: "Second (s) or Hour (h)", imperialUnit: "Hour (h)", description: "Time interval that electrical equipment operates." }
    ],
    description: "Represents the time-integral of power. A one-kilowatt load operating for one continuous hour consumes exactly 1 kW·h, which equals 3.6 Megajoules (3.6 × 10⁶ J).",
    engineeringContext: "Used in electric vehicle battery pack range analysis (kWh capacity), industrial energy auditing, facility utility billing, and backup generator sizing."
  }
];

export interface EngineeringFaq {
  question: string;
  answer: string;
}

export const ENGINEERING_FAQS: EngineeringFaq[] = [
  {
    question: "What are engineering units?",
    answer: "Engineering units are standardized measurement quantities specifically chosen and scaled for technical design, fabrication, safety analysis, and performance modeling across mechanical, electrical, civil, chemical, and aerospace disciplines. While based on fundamental physics dimensions (mass, length, time, electric current, temperature), engineering units prioritize practical magnitudes suitable for human construction and machine operation—such as Megapascals (MPa) rather than bare Pascals for steel stress, kilowatt-hours (kWh) rather than Joules for electrical grid distribution, and liters per minute (L/min) for hydraulic fluid flow."
  },
  {
    question: "What is the SI unit of force?",
    answer: "The coherent SI unit of force is the Newton, abbreviated with the uppercase letter N. One Newton is formally defined as the exact net force required to accelerate an inertial mass of one kilogram at a constant rate of one meter per second squared (1 N = 1 kg·m/s²). Named in honor of Sir Isaac Newton, it is a derived unit expressed entirely through the base units kilogram (kg), meter (m), and second (s). In imperial units, 1 Newton is equivalent to approximately 0.224809 pound-force (lbf)."
  },
  {
    question: "What is the SI unit of pressure?",
    answer: "The coherent SI unit of pressure and mechanical stress is the Pascal, abbreviated Pa. One Pascal is defined as a uniform compressive normal force of one Newton exerted perpendicular to an area of one square meter (1 Pa = 1 N/m² = 1 kg/(m·s²)). Because one Pascal represents a very small physical pressure—approximately the pressure exerted by a single sheet of paper resting flat on a table—engineers routinely work with decimal multiples: kilopascal (1 kPa = 1,000 Pa), megapascal (1 MPa = 1,000,000 Pa = 1 N/mm²), and bar (1 bar = 100,000 Pa = 100 kPa)."
  },
  {
    question: "What is the difference between force and pressure?",
    answer: "Force is a net directional vector quantity representing an interaction that can accelerate an object with mass, measured in Newtons (N) or pounds-force (lbf). In contrast, pressure is a scalar quantity defined as the intensity of compressive force distributed per unit surface area (P = F / A), measured in Pascals (N/m²) or pounds per square inch (psi). A sharp needle and a broad snowshoe can both apply an identical downward force of 100 Newtons, but the needle produces immense pressure capable of puncturing leather, whereas the snowshoe disperses that force over a large area, yielding low pressure that prevents sinking."
  },
  {
    question: "What is the difference between energy and power?",
    answer: "Energy is the total capacity or capacity to do mechanical work or supply heat, measured in Joules (J), kilowatt-hours (kWh), or British Thermal Units (BTU). Power is the time rate at which that energy is delivered, converted, or consumed (P = Energy / time), measured in Watts (1 W = 1 J/s) or Horsepower (1 hp ≈ 745.7 W). For example, a 100-watt incandescent bulb and a 10-watt LED both consume 1,000 Joules of energy, but the 100-watt bulb consumes that energy in 10 seconds, whereas the 10-watt LED draws the same energy over 100 seconds."
  },
  {
    question: "What is the SI unit of torque?",
    answer: "The coherent SI unit of torque (also called moment of force) is the Newton-meter, symbolized N·m. Mathematically, torque is the vector cross product of position vector and force vector (τ = r × F). Although dimensionally equivalent to the Joule (1 N·m = 1 J), torque must never be expressed in Joules. The Joule is reserved strictly for scalar work and energy, whereas torque represents a rotational moment capable of producing angular acceleration about an axis. In US customary engineering, torque is typically measured in pound-feet (lb·ft) or pound-inches (lb·in)."
  },
  {
    question: "What is the SI unit of electrical resistance?",
    answer: "The coherent SI unit of electrical resistance and impedance is the Ohm, designated by the Greek capital letter Omega (Ω). One Ohm is defined as the electrical resistance between two points on a linear conductor when a constant potential difference of one Volt applied between them produces a current of one Ampere (1 Ω = 1 V/A = 1 kg·m²·s⁻³·A⁻²). The reciprocal of resistance is electrical conductance, measured in Siemens (S = 1/Ω)."
  },
  {
    question: "What is the difference between US customary and Imperial units?",
    answer: "Although both systems share historical origins in British measurement practices and utilize identical linear definitions since the 1959 International Yard and Pound Agreement (1 yard = 0.9144 m; 1 pound = 0.45359237 kg), they diverge significantly in volume and weight measurements. A US liquid gallon is defined strictly as 231 cubic inches (exactly 3.785411784 liters), whereas the British Imperial gallon was defined as the volume of 10 pounds of distilled water at 62°F (exactly 4.54609 liters)—making the Imperial gallon approximately 20.1% larger. Furthermore, the US short ton equals 2,000 pounds (907.185 kg), while the Imperial long ton equals 2,240 pounds (1,016.047 kg). Conflating US and Imperial units in engineering fluid calculations introduces catastrophic volumetric errors."
  },
  {
    question: "Why are engineering units important?",
    answer: "Engineering units provide the universal physical syntax that transforms mathematical formulas into safe, functioning physical hardware. Clear, unambiguous unit definitions prevent catastrophic engineering failures, ensure mechanical and electrical interchangeability across international supply chains, guarantee statutory regulatory compliance (such as ASME boiler codes and NEC electrical standards), and allow multi-disciplinary teams to collaborate effectively. Historical disasters—such as the 1999 loss of the NASA Mars Climate Orbiter due to an untranslated mismatch between pound-force-seconds and Newton-seconds—demonstrate that rigorous unit discipline is literally a matter of life, mission success, and millions of dollars."
  },
  {
    question: "How do I convert engineering units?",
    answer: "The safest and most rigorous method for converting engineering units is dimensional analysis using unit conversion factors equal to 1. First, identify the starting numerical value and its full physical units. Second, look up the verified conversion equality (such as 1 lbf = 4.448221615 N or 1 inch = 0.0254 m). Third, express the equality as a conversion fraction where the unwanted unit sits on the opposite side of the fraction bar so it cancels algebraically. Fourth, for units with powers (such as area in in² or volume in ft³), apply the power to the entire conversion factor (e.g., (0.0254 m / 1 in)² = 0.00064516 m²/in²). Finally, carry all significant figures through intermediate steps and round only the final reporting value."
  }
];

export interface WorkedConversionExample {
  title: string;
  category: string;
  problem: string;
  given: string[];
  find: string;
  stepByStep: string[];
  finalAnswer: string;
  engineeringTakeaway: string;
}

export const WORKED_ENGINEERING_EXAMPLES: WorkedConversionExample[] = [
  {
    title: "Hydraulic Cylinder Output Force",
    category: "Mechanical & Fluid Power",
    problem: "A heavy excavator hydraulic boom cylinder has an internal bore diameter of 4.00 inches and operates at a relief pressure of 3,000 psi. Calculate the maximum extension force delivered by the cylinder in both pounds-force (lbf) and kilonewtons (kN).",
    given: [
      "Bore diameter d = 4.00 inches",
      "Operating hydraulic pressure P = 3,000 psi (lbf/in²)"
    ],
    find: "Hydraulic output force F in lbf and kN",
    stepByStep: [
      "1. Calculate the circular piston face area: A = π · (d / 2)² = π · (2.00 in)² = 4π in² ≈ 12.56637 in².",
      "2. Calculate mechanical force in imperial units: F = P · A = (3,000 lbf/in²) × 12.56637 in² = 37,699.11 lbf.",
      "3. Convert force to Newtons using the exact 1959 international factor: 1 lbf = 4.448 221 615 260 5 N.",
      "4. F (Newtons) = 37,699.11 lbf × 4.448 221 615 N/lbf = 167,694.13 N.",
      "5. Convert to kilonewtons by dividing by 1,000: F = 167.69 kN."
    ],
    finalAnswer: "F = 37,700 lbf = 167.7 kN (to 4 significant figures)",
    engineeringTakeaway: "Never convert intermediate rounded numbers. Computing cross-sectional area first in inches keeps the psi cancellation clean before applying the single exact lbf-to-N conversion factor."
  },
  {
    title: "Electric Motor Torque & Shaft Power",
    category: "Electrical & Mechanical",
    problem: "An industrial three-phase induction motor produces 180 lb·ft of continuous shaft torque while rotating at an operating speed of 1,750 RPM. Determine the mechanical shaft output power in both mechanical horsepower (hp) and kilowatts (kW).",
    given: [
      "Shaft torque τ = 180 lb·ft",
      "Rotational speed N = 1,750 RPM"
    ],
    find: "Shaft mechanical power in hp and kW",
    stepByStep: [
      "1. Calculate horsepower using the standard imperial engineering formula: P (hp) = (Torque in lb·ft × RPM) / 5,252.113.",
      "2. P (hp) = (180 × 1,750) / 5,252.113 = 315,000 / 5,252.113 ≈ 59.976 hp ≈ 60.0 hp.",
      "3. Convert mechanical horsepower to Watts using 1 hp = 745.699872 W (550 ft·lbf/s): P (W) = 59.976 hp × 745.699872 W/hp ≈ 44,724.3 W.",
      "4. Convert Watts to kilowatts: P (kW) = 44,724.3 / 1,000 = 44.72 kW.",
      "5. Alternative verification in pure SI units: Convert 180 lb·ft to N·m: 180 × 1.355818 = 244.047 N·m. Angular velocity ω = 1,750 × (2π / 60) = 183.2596 rad/s. Power P = τ · ω = 244.047 × 183.2596 = 44,724 W = 44.72 kW."
    ],
    finalAnswer: "P = 60.0 hp = 44.72 kW",
    engineeringTakeaway: "Notice how the SI approach (P = τ · ω) requires zero arbitrary constants like 5,252. The constant 5,252 arises purely in Imperial units because 1 hp = 550 ft·lbf/s and 1 min = 60 s (550 × 60 / 2π = 5,252.113)."
  },
  {
    title: "Pipe Cooling Water Flow Rate & Mass Flow",
    category: "Fluid & Thermal Systems",
    problem: "A chemical plant heat exchanger receives cooling water at a volumetric flow rate of 450 US GPM. Assuming water density at operating temperature is 998.2 kg/m³, determine the flow rate in cubic meters per hour (m³/h) and the resulting mass flow rate in kilograms per second (kg/s).",
    given: [
      "Volumetric flow rate Q = 450 US GPM",
      "Fluid density ρ = 998.2 kg/m³"
    ],
    find: "Volumetric flow rate in m³/h and mass flow rate ṁ in kg/s",
    stepByStep: [
      "1. Convert US GPM to liters per minute: 1 US gal = 3.785411784 L exact. Q = 450 × 3.785411784 = 1,703.435 L/min.",
      "2. Convert liters per minute to cubic meters per hour: 1 m³ = 1,000 L, and 1 hour = 60 minutes. Q (m³/h) = (1,703.435 L/min × 60 min/h) / 1,000 L/m³ = 102.206 m³/h.",
      "3. Convert volumetric flow rate to cubic meters per second: Q (m³/s) = 102.206 / 3,600 = 0.0283906 m³/s.",
      "4. Calculate mass flow rate ṁ = ρ · Q: ṁ = 998.2 kg/m³ × 0.0283906 m³/s = 28.3395 kg/s."
    ],
    finalAnswer: "Q = 102.2 m³/h; Mass flow rate ṁ = 28.34 kg/s",
    engineeringTakeaway: "Verify whether a flow meter reports US liquid gallons or Imperial gallons before applying conversion factors. Using the Imperial gallon factor (4.54609 L) here would have overestimated cooling water flow by 20.1%."
  },
  {
    title: "Structural Steel Beam Tensile Stress",
    category: "Structural Mechanics",
    problem: "An ASTM A36 structural steel tie rod with a cross-sectional area of 1.75 square inches carries an axial tensile load of 45.5 kips. Calculate the tensile stress in both ksi and Megapascals (MPa), and verify against the ASTM A36 minimum yield strength of 250 MPa.",
    given: [
      "Tensile force F = 45.5 kips = 45,500 lbf",
      "Cross-sectional area A = 1.75 in²",
      "Material yield strength σ_y = 250 MPa (36 ksi)"
    ],
    find: "Tensile stress σ in ksi and MPa, and check yield condition",
    stepByStep: [
      "1. Calculate imperial normal stress: σ = F / A = 45.5 kips / 1.75 in² = 26.00 ksi (26,000 psi).",
      "2. Convert ksi to Megapascals using 1 psi = 6,894.757 Pa: 1 ksi = 6.894757 MPa. σ (MPa) = 26.00 ksi × 6.894757 MPa/ksi = 179.26 MPa.",
      "3. Compare calculated stress with material yield strength: σ = 179.3 MPa < σ_y (250 MPa).",
      "4. Calculate yield safety factor: SF = 250 MPa / 179.26 MPa = 1.39."
    ],
    finalAnswer: "σ = 26.0 ksi = 179.3 MPa (Safety Factor = 1.39 against yield)",
    engineeringTakeaway: "1 ksi is approximately 6.895 MPa. Structural engineers memorizing this conversion ratio can quickly evaluate structural safety between American and European code standards."
  },
  {
    title: "Thermal Conductivity of Boiler Insulation",
    category: "Thermal Engineering",
    problem: "An industrial mineral wool insulation blanket is specified with a thermal conductivity of 0.28 BTU·in/(h·ft²·°F). Convert this value into SI coherent thermal conductivity units of Watts per meter-Kelvin [W/(m·K)].",
    given: [
      "k = 0.28 (BTU · in) / (h · ft² · °F)"
    ],
    find: "Thermal conductivity k in W/(m·K)",
    stepByStep: [
      "1. Notice the mixed length unit in the imperial specification: numerator has inches (thickness), denominator has square feet (area).",
      "2. Simplify length dimensions: 1 ft = 12 in, so 1 in / 1 ft² = 1 / (12 ft). Therefore, 0.28 BTU·in/(h·ft²·°F) = (0.28 / 12) BTU/(h·ft·°F) = 0.023333 BTU/(h·ft·°F).",
      "3. Apply the conversion factor for 1 BTU/(h·ft·°F) to W/(m·K): 1 BTU/(h·ft·°F) ≈ 1.730735 W/(m·K).",
      "4. k [W/(m·K)] = 0.0233333 BTU/(h·ft·°F) × 1.730735 W/(m·K) per [BTU/(h·ft·°F)] = 0.04038 W/(m·K)."
    ],
    finalAnswer: "k = 0.0404 W/(m·K)",
    engineeringTakeaway: "US building and insulation codes routinely express thermal conductivity with inches of thickness in the numerator (k-value in BTU·in/(h·ft²·°F)), while European and scientific standards express it per meter thickness. Always cancel the inch against foot before converting to SI."
  }
];

export interface AuthoritativeReference {
  organization: string;
  code: string;
  title: string;
  description: string;
  url: string;
}

export const ENGINEERING_STANDARDS_REFERENCES: AuthoritativeReference[] = [
  {
    organization: "Bureau International des Poids et Mesures (BIPM)",
    code: "SI Brochure (9th Edition)",
    title: "The International System of Units (SI)",
    description: "The definitive global authority on the definitions of SI base units, derived units, metric prefixes, and rules for physical unit symbol formatting.",
    url: "https://www.bipm.org/en/publications/si-brochure"
  },
  {
    organization: "National Institute of Standards and Technology (NIST)",
    code: "NIST SP 811 (2008 Edition)",
    title: "Guide for the Use of the International System of Units (SI)",
    description: "Authoritative United States federal guidelines and mathematical conversion factors for transitioning between US customary and metric measurement systems.",
    url: "https://www.nist.gov/pml/special-publication-811"
  },
  {
    organization: "International Organization for Standardization (ISO / IEC)",
    code: "ISO/IEC 80000 Series",
    title: "Quantities and Units (Mechanics, Thermodynamics, Electromagnetism)",
    description: "The worldwide standard defining physical quantities, dimensional mathematical symbols, and coherent engineering unit equations.",
    url: "https://www.iso.org/standard/64973.html"
  },
  {
    organization: "American Society of Mechanical Engineers (ASME)",
    code: "ASME PTC 19.1 & BPVC",
    title: "Performance Test Codes & Boiler and Pressure Vessel Code",
    description: "Sets the global safety standards for pressure equipment, piping, boilers, and thermodynamic efficiency testing across both SI and US customary units.",
    url: "https://www.asme.org"
  },
  {
    organization: "Institute of Electrical and Electronics Engineers (IEEE)",
    code: "IEEE Std 260.1-2004",
    title: "Standard Letter Symbols for Units of Measurement",
    description: "Defines accepted abbreviations, symbols, and mathematical representations for electrical, electronic, and telecommunication units.",
    url: "https://standards.ieee.org"
  }
];
