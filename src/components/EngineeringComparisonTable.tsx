import React from "react";
import { Scale, CheckCircle2, AlertCircle } from "lucide-react";
import MathFormula from "./MathFormula";

interface ComparisonRow {
  parameter: string;
  itemA: string;
  itemB: string;
  itemC?: string;
  highlightA?: boolean;
  highlightB?: boolean;
}

interface ComparisonTableData {
  title: string;
  description: string;
  headerA: string;
  headerB: string;
  headerC?: string;
  rows: ComparisonRow[];
  engineeringInsight: string;
}

const disciplineComparisons: Record<string, ComparisonTableData> = {
  "electrical-calc": {
    title: "Engineering Comparison: RC vs RL Circuits",
    description: "Key physical, mathematical, and operational differences between Resistance-Capacitance (RC) and Resistance-Inductance (RL) reactive circuits.",
    headerA: "RC Circuit (Capacitive)",
    headerB: "RL Circuit (Inductive)",
    rows: [
      { parameter: "Primary Energy Storage", itemA: "Electric Field ($E$ in Dielectric)", itemB: "Magnetic Field ($B$ in Core)" },
      { parameter: "Governing State Variable", itemA: "Voltage across Capacitor ($V_C$)", itemB: "Current through Inductor ($I_L$)" },
      { parameter: "Time Constant Formula ($\tau$)", itemA: "$\\tau = R \\times C$ (seconds)", itemB: "$\\tau = \\frac{L}{R}$ (seconds)" },
      { parameter: "Current/Voltage Phase Shift", itemA: "Current LEADS Voltage by $90^\\circ$ (ICE)", itemB: "Current LAGS Voltage by $90^\\circ$ (ELI)" },
      { parameter: "High-Frequency Impedance", itemA: "Decreases ($X_C = \\frac{1}{2\\pi f C} \\to 0$)", itemB: "Increases ($X_L = 2\\pi f L \\to \\infty$)" },
      { parameter: "Common Engineering Uses", itemA: "Timing circuits, bypass filters, decoupling", itemB: "Relay suppression, inductive chokes, motor drivers" }
    ],
    engineeringInsight: "Capacitors resist instantaneous changes in voltage ($i = C \\frac{dv}{dt}$), whereas inductors resist instantaneous changes in current ($v = L \\frac{di}{dt}$). Understanding phase angles is vital for AC power factor correction."
  },
  "electronics-calc": {
    title: "Engineering Comparison: Voltage Gain vs Power Gain",
    description: "Understanding non-linear logarithmic decibel ($\text{dB}$) conversions between voltage ratios and power ratios in amplifier design.",
    headerA: "Voltage Gain ($A_v$)",
    headerB: "Power Gain ($A_p$)",
    rows: [
      { parameter: "Linear Ratio Definition", itemA: "Ratio of Output Voltage to Input Voltage ($V_{\\text{out}} / V_{\\text{in}}$)", itemB: "Ratio of Output Power to Input Power ($P_{\\text{out}} / P_{\\text{in}}$)" },
      { parameter: "Decibel Equation", itemA: "$\\text{dB} = 20 \\log_{10}\\left(\\frac{V_{\\text{out}}}{V_{\\text{in}}}\\right)$", itemB: "$\\text{dB} = 10 \\log_{10}\\left(\\frac{P_{\\text{out}}}{P_{\\text{in}}}\\right)$" },
      { parameter: "Decibel Multiplier Factor", itemA: "Factor of 20 (Field quantity amplitude)", itemB: "Factor of 10 (Energy rate quantity)" },
      { parameter: "3 dB Bandwidth Point", itemA: "Voltage drops to $70.7\\%$ ($1/\\sqrt{2}$) of peak", itemB: "Power drops to $50\\%$ ($1/2$) of peak" },
      { parameter: "Matching Assumption", itemA: "Requires equal load and source impedances ($Z_L = Z_S$)", itemB: "Valid for any power transfer measurement" }
    ],
    engineeringInsight: "Because power is proportional to the square of voltage ($P \\propto V^2$), a $20\\text{ dB}$ increase in voltage gain corresponds to a $100\\times$ voltage amplitude ratio, which equals a $100\\times$ power ratio ($20\\text{ dB}$ power gain)."
  },
  "mechanical-calc": {
    title: "Engineering Comparison: Stress vs Strain",
    description: "Fundamental mechanical property metrics defining internal force intensity and relative geometrical deformation.",
    headerA: "Stress ($\\sigma$ or $\\tau$)",
    headerB: "Strain ($\\epsilon$ or $\\gamma$)",
    rows: [
      { parameter: "Physical Definition", itemA: "Internal restoring force per unit cross-sectional area", itemB: "Fractional geometric deformation or elongation" },
      { parameter: "Governing Formula", itemA: "$\\sigma = \\frac{F}{A}$ (Normal) or $\\tau = \\frac{F}{A}$ (Shear)", itemB: "$\\epsilon = \\frac{\\Delta L}{L_0}$ (Normal) or $\\gamma = \\frac{\\delta}{h}$ (Shear)" },
      { parameter: "SI Dimensional Unit", itemA: "Pascals ($\\text{Pa} = \\text{N/m}^2$) or $\\text{MPa}$", itemB: "Dimensionless ($\\text{m/m}$, $\\text{mm/mm}$, or $\%$)" },
      { parameter: "Constitutive Relationship", itemA: "Calculated from applied load and geometry", itemB: "Calculated from Hooke's Law: $\\epsilon = \\frac{\\sigma}{E}$" },
      { parameter: "Engineering Limit State", itemA: "Yield Strength ($\\sigma_y$) and Ultimate Tensile Strength ($\\sigma_{uts}$)", itemB: "Elastic Strain Limit and Ductility Elongation at Fracture" }
    ],
    engineeringInsight: "Stress represents internal material load intensity, while strain quantifies shape change. Young's Modulus ($E = \\sigma / \\epsilon$) acts as the linear elastic stiffness proportionality constant."
  },
  "civil-calc": {
    title: "Engineering Comparison: Shear Stress vs Bending Moment",
    description: "Structural beam load analysis comparing vertical shear force intensity against internal rotational moment response.",
    headerA: "Vertical Shear Force / Stress ($V / \\tau$)",
    headerB: "Bending Moment ($M$)",
    rows: [
      { parameter: "Primary Structural Action", itemA: "Internal transverse sliding force across beam cross-section", itemB: "Internal rotational couple causing top compression and bottom tension" },
      { parameter: "Dimensional SI Unit", itemA: "Kilonewtons ($\\text{kN}$) / Megapascals ($\\text{MPa}$)", itemB: "Kilonewton-meters ($\\text{kN}\\cdot\\text{m}$)" },
      { parameter: "Governing Elastic Formula", itemA: "$\\tau = \\frac{V Q}{I b}$ (Transverse shear stress)", itemB: "$\\sigma = \\frac{M y}{I}$ (Flexural bending stress)" },
      { parameter: "Differential Relationship", itemA: "$V(x) = \\frac{d M(x)}{d x}$ (Slope of moment diagram)", itemB: "$M(x) = \\int V(x) dx$ (Area under shear diagram)" },
      { parameter: "Location of Peak Value", itemA: "Maximum at neutral axis for rectangular beams", itemB: "Maximum at outer extreme fibers ($y = c$)" }
    ],
    engineeringInsight: "Where the vertical shear diagram crosses zero ($V = 0$), the bending moment reaches its local mathematical maximum or minimum ($dM/dx = 0$). This zero-shear location dictates critical flexural reinforcement design."
  },
  "physics-calc": {
    title: "Engineering Comparison: Work vs Energy vs Power",
    description: "Classical mechanical physics relationship between total work performed, system energy capacity, and dynamic power rate.",
    headerA: "Mechanical Work ($W$)",
    headerB: "Energy Capacity ($E$)",
    headerC: "Mechanical Power ($P$)",
    rows: [
      { parameter: "Core Definition", itemA: "Force applied over distance", itemB: "System capacity to perform work", itemC: "Time rate of doing work", highlightA: true },
      { parameter: "SI Unit", itemA: "Joules ($\\text{J} = \\text{N}\\cdot\\text{m}$)", itemB: "Joules ($\\text{J}$ or $\\text{kW}\\cdot\\text{h}$)", itemC: "Watts ($\\text{W} = \\text{J/s}$) or Horsepower" },
      { parameter: "Governing Equation", itemA: "$W = F \\cdot d \\cdot \\cos(\\theta)$", itemB: "$E_k = \\frac{1}{2} m v^2$, $E_p = m g h$", itemC: "$P = \\frac{W}{t} = F \\cdot v$" },
      { parameter: "Mathematical Classification", itemA: "Path-dependent Process Quantity", itemB: "State Function / Saved Property", itemC: "Time Derivative Rate Quantity" },
      { parameter: "Engineering Focus", itemA: "Energy transferred in a displacement step", itemB: "Total fuel, heat, or kinetic reserve", itemC: "Sizing motors, engines, and cooling systems" }
    ],
    engineeringInsight: "A $100\\text{ kW}$ motor performs the same total work ($3.6\\text{ MJ}$) in $36$ seconds as a $10\\text{ kW}$ motor performs in $360$ seconds, but requires $10\\times$ higher instantaneous power capacity."
  },
  "optics-light-calc": {
    title: "Engineering Comparison: Lux vs Lumens vs Candela",
    description: "Photometric lighting units comparing total luminous flux, spatial beam intensity, and surface illuminance.",
    headerA: "Lumens ($\\text{lm}$)",
    headerB: "Candela ($\\text{cd}$)",
    headerC: "Lux ($\\text{lx}$)",
    rows: [
      { parameter: "Photometric Quantity", itemA: "Luminous Flux (Total light output)", itemB: "Luminous Intensity (Directional beam)", itemC: "Illuminance (Light on a surface)", highlightA: true },
      { parameter: "SI Unit Symbol", itemA: "$\\text{lm}$", itemB: "$\\text{cd}$", itemC: "$\\text{lx} = \\text{lm/m}^2$" },
      { parameter: "Spatial Dependence", itemA: "Total light radiated in all directions", itemB: "Light flux per solid angle steradian ($d\\Phi / d\\Omega$)", itemC: "Flux incident per surface area ($d\\Phi / dA$)" },
      { parameter: "Distance Relationship", itemA: "Independent of distance", itemB: "Independent of distance", itemC: "Obeys Inverse-Square Law ($E = I / r^2$)" },
      { parameter: "Practical Spec Sheet Use", itemA: "Total light bulb capacity rating (e.g. 1000 lm)", itemB: "Spotlight beam intensity or flashlight throw", itemC: "Desk workstation illumination standards (e.g. 500 lx)" }
    ],
    engineeringInsight: "Doubling the distance from a light source reduces illuminance (lux) to one-fourth ($1/r^2$), while the total light radiated by the bulb (lumens) remains unchanged."
  },
  "thermodynamics-calc": {
    title: "Engineering Comparison: Conduction vs Convection vs Radiation",
    description: "Modes of thermal energy transport across temperature gradients, boundary layers, and electromagnetic waves.",
    headerA: "Thermal Conduction",
    headerB: "Thermal Convection",
    headerC: "Thermal Radiation",
    rows: [
      { parameter: "Required Physical Medium", itemA: "Solid or stationary fluid", itemB: "Moving fluid (gas or liquid)", itemC: "None required (operates in vacuum)" },
      { parameter: "Governing Law", itemA: "Fourier's Law of Heat Conduction", itemB: "Newton's Law of Cooling", itemC: "Stefan-Boltzmann Law" },
      { parameter: "Mathematical Equation", itemA: "$q = -k A \\frac{dT}{dx}$", itemB: "$q = h A (T_s - T_\\infty)$", itemC: "$q = \\epsilon \\sigma A (T_s^4 - T_{\\text{surr}}^4)$" },
      { parameter: "Driving Potential", itemA: "Temperature gradient ($dT/dx$)", itemB: "Fluid flow and bulk advection", itemC: "Absolute surface temperature ($T^4$)" },
      { parameter: "Practical Application", itemA: "Heat sink solid base thermal transfer", itemB: "Forced fan air cooling over fins", itemC: "Solar radiation and thermal imaging" }
    ],
    engineeringInsight: "Thermal radiation scales with absolute temperature to the fourth power ($T^4$). At high temperatures ($T > 500^\\circ\\text{C}$), radiation rapidly becomes the dominant mode of heat transfer over convection."
  },
  "chemistry-calc": {
    title: "Engineering Comparison: Molarity vs Molality",
    description: "Solution concentration metrics comparing volume-based vs mass-based solute ratios for chemical engineering.",
    headerA: "Molarity ($M$)",
    headerB: "Molality ($m$)",
    rows: [
      { parameter: "Mathematical Definition", itemA: "Moles of solute per liter of total solution", itemB: "Moles of solute per kilogram of solvent" },
      { parameter: "SI Dimensional Unit", itemA: "$\\text{mol/L}$ or $\\text{mol/dm}^3$ ($M$)", itemB: "$\\text{mol/kg}$ ($m$)" },
      { parameter: "Denominated Quantity", itemA: "Total Solution Volume ($V_{\\text{solution}}$)", itemB: "Mass of Pure Solvent ($m_{\\text{solvent}}$)" },
      { parameter: "Temperature Sensitivity", itemA: "Temperature Dependent (Volume expands with thermal changes)", itemB: "Temperature Independent (Mass remains constant)" },
      { parameter: "Preferred Laboratory Context", itemA: "Volumetric titrations, liquid dispensing, UV-Vis spectroscopy", itemB: "Thermodynamic calculations, boiling point elevation, freezing point depression" }
    ],
    engineeringInsight: "Because liquid volume varies with temperature while mass stays invariant, molality ($m$) is required for high-precision thermodynamic properties like colligative property constant determinations."
  },
  "fluid-mechanics-calc": {
    title: "Engineering Comparison: Laminar vs Turbulent Pipe Flow",
    description: "Hydrodynamic flow regimes determined by dimensionless Reynolds Number ($\text{Re}$) thresholds in closed conduit flow.",
    headerA: "Laminar Flow Regime",
    headerB: "Turbulent Flow Regime",
    rows: [
      { parameter: "Reynolds Number Boundary", itemA: "$\\text{Re} < 2100$ (Viscous dominant)", itemB: "$\\text{Re} > 4000$ (Inertial dominant)" },
      { parameter: "Fluid Particle Trajectory", itemA: "Smooth parallel streamlines without transverse mixing", itemB: "Chaotic swirling eddies, vortices, and velocity fluctuations" },
      { parameter: "Pipe Velocity Profile", itemA: "Parabolic velocity profile ($v_{\\text{max}} = 2 v_{\\text{avg}}$)", itemB: "Flatter power-law profile ($v_{\\text{max}} \\approx 1.2 v_{\\text{avg}}$)" },
      { parameter: "Darcy Friction Factor ($f$)", itemA: "Exact theoretical formula: $f = \\frac{64}{\\text{Re}}$", itemB: "Colebrook-White equation or Moody Chart ($f(\\text{Re}, \\epsilon/D)$)" },
      { parameter: "Pressure Drop ($\Delta P$)", itemA: "Proportional to velocity ($V^1$) — Hagen-Poiseuille", itemB: "Proportional to velocity squared ($V^2$) — Darcy-Weisbach" }
    ],
    engineeringInsight: "In turbulent flow, surface roughness ($\epsilon/D$) directly increases head loss, whereas in purely laminar flow, friction factor is entirely independent of pipe roughness."
  },
  "mathematics-calc": {
    title: "Engineering Comparison: Permutations vs Combinations",
    description: "Combinatorial analysis techniques comparing ordered arrangements against unordered subset selections.",
    headerA: "Permutations ($nPr$)",
    headerB: "Combinations ($nCr$)",
    rows: [
      { parameter: "Order Sensitivity", itemA: "ORDER MATTERS STRICTLY (Sequence counts)", itemB: "ORDER DOES NOT MATTER (Subset membership only)" },
      { parameter: "Mathematical Formula", itemA: "$nPr = \\frac{n!}{(n-r)!}$", itemB: "$nCr = \\frac{n!}{r!(n-r)!} = \\frac{nPr}{r!}$" },
      { parameter: "Relative Outcome Count", itemA: "Larger set of arrangements ($nPr > nCr$ for $r > 1$)", itemB: "Smaller set of subsets ($nCr = nPr / r!$)" },
      { parameter: "Key Engineering Question", itemA: "In what exact sequence will components execute?", itemB: "Which items or team members are selected?" },
      { parameter: "Practical Use Cases", itemA: "Access pin codes, scheduling sequences, state machines", itemB: "Sampling inspections, lottery combinations, team selections" }
    ],
    engineeringInsight: "For $n = 5$ items taking $r = 3$ at a time, there are $60$ permutations ($5 \\times 4 \\times 3$) but only $10$ combinations ($60 / 3!$), because each group of 3 can be ordered in $6$ ways ($3! = 6$)."
  },
  "general-engineering-calc": {
    title: "Engineering Comparison: MTBF vs MTTR vs System Availability",
    description: "Reliability and maintainability parameters defining system operational uptime and repair speed.",
    headerA: "MTBF (Mean Time Between Failures)",
    headerB: "MTTR (Mean Time To Repair)",
    headerC: "System Availability ($A$)",
    rows: [
      { parameter: "Core Engineering Metric", itemA: "System Reliability & Uptime", itemB: "System Maintainability & Service Speed", itemC: "Overall Operational Readiness", highlightA: true },
      { parameter: "Target Objective", itemA: "MAXIMIZE hours between outages", itemB: "MINIMIZE hours to diagnose and repair", itemC: "Target $99.999\\%$ ('Five Nines')" },
      { parameter: "Governing Formula", itemA: "$\\text{MTBF} = \\frac{\\text{Total Operational Time}}{\\text{Total Failures}}$", itemB: "$\\text{MTTR} = \\frac{\\text{Total Downtime}}{\\text{Total Failures}}$", itemC: "$A = \\frac{\\text{MTBF}}{\\text{MTBF} + \\text{MTTR}}$" },
      { parameter: "Dimensional Unit", itemA: "Hours (or Years)", itemB: "Hours (or Minutes)", itemC: "Dimensionless Ratio or Percentage ($\\%$)" },
      { parameter: "Engineering Focus", itemA: "Component quality and derating", itemB: "Modular spares and diagnostic speed", itemC: "Redundancy and failover architecture" }
    ],
    engineeringInsight: "High system availability ($99.999\\%$) can be achieved either by building ultra-reliable hardware with high MTBF, or by implementing instant automated failover to achieve near-zero MTTR."
  }
};

interface EngineeringComparisonTableProps {
  disciplineId: string;
}

export default function EngineeringComparisonTable({ disciplineId }: EngineeringComparisonTableProps) {
  // Normalize discipline id to match key
  const normalizedKey = disciplineId.endsWith("-calc") ? disciplineId : `${disciplineId}-calc`;
  const data = disciplineComparisons[normalizedKey] || disciplineComparisons[disciplineId] || disciplineComparisons["electrical-calc"];

  if (!data) return null;

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 sm:p-8 space-y-5 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
          <Scale className="h-4 w-4 text-amber-500" />
          Engineering Technical Reference
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          {data.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
          {data.description}
        </p>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-inner">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-950/80 text-slate-900 dark:text-slate-100 font-display font-bold border-b border-slate-200 dark:border-slate-800">
              <th className="p-3.5 sm:p-4 min-w-[140px]">Parameter / Metric</th>
              <th className="p-3.5 sm:p-4 min-w-[200px] text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/30">
                <MathFormula formula={data.headerA} asInline={true} />
              </th>
              <th className="p-3.5 sm:p-4 min-w-[200px] text-blue-700 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30">
                <MathFormula formula={data.headerB} asInline={true} />
              </th>
              {data.headerC && (
                <th className="p-3.5 sm:p-4 min-w-[200px] text-emerald-700 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30">
                  <MathFormula formula={data.headerC} asInline={true} />
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
            {data.rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                <td className="p-3.5 sm:p-4 font-bold text-slate-800 dark:text-slate-200 bg-slate-50/50 dark:bg-slate-950/30">
                  <MathFormula formula={row.parameter} asInline={true} />
                </td>
                <td className="p-3.5 sm:p-4 text-slate-700 dark:text-slate-300 leading-normal">
                  <MathFormula formula={row.itemA} asInline={true} />
                </td>
                <td className="p-3.5 sm:p-4 text-slate-700 dark:text-slate-300 leading-normal">
                  <MathFormula formula={row.itemB} asInline={true} />
                </td>
                {data.headerC && (
                  <td className="p-3.5 sm:p-4 text-slate-700 dark:text-slate-300 leading-normal">
                    {row.itemC ? <MathFormula formula={row.itemC} asInline={true} /> : "—"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Engineering Insight Box */}
      <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
        <CheckCircle2 className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-slate-900 dark:text-slate-100 block mb-0.5">
            Key Engineering Takeaway:
          </span>
          <p className="leading-relaxed">
            <MathFormula formula={data.engineeringInsight} asInline={true} />
          </p>
        </div>
      </div>
    </div>
  );
}
