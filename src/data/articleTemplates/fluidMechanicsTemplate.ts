import { EngineeringArticleData, EngineeringArticleFAQ } from "../engineeringArticlesEngine";
import { ArticleGeneratorContext, CalculatorCategoryArticleTemplate } from "./types";

/**
 * Fluid Mechanics Standards References
 */
const fluidStandardsReferences = [
  {
    organization: "ISO",
    code: "ISO 5167-1 / ISO 5167-2",
    title: "Measurement of Fluid Flow by Means of Pressure Differential Devices Inserted in Circular Cross-Section Conduits"
  },
  {
    organization: "ASME",
    code: "ASME MFC-3M",
    title: "Measurement of Fluid Flow in Pipes Using Orifice, Nozzle, and Venturi Meters"
  },
  {
    organization: "HI",
    code: "ANSI/HI 14.3 / 14.6",
    title: "Hydraulic Institute Standards for Rotodynamic Pumps for Hydraulic Performance Acceptance Tests"
  },
  {
    organization: "AWWA",
    code: "AWWA M11 / C200",
    title: "Steel Pipe — A Guide for Design and Installation & Water Conveyance Standards"
  }
];

/**
 * Relevant Fluid Mechanics Industries & Sectors
 */
const fluidIndustries = [
  "Hydraulic & Municipal Water Distribution Engineering",
  "Oil, Gas & Hydrocarbon Pipeline Transport",
  "HVAC, Hydronic District Heating & Chilled Water Systems",
  "Aerospace, Aerodynamics & Turbomachinery Design",
  "Chemical Process Engineering & Fluid Power Hydraulics"
];

/**
 * Fluid Mechanics Calculator Article Template
 * Adheres to FLUID MECHANICS CALCULATOR ARTICLE TEMPLATE V1.0
 */
export const fluidMechanicsArticleTemplate: CalculatorCategoryArticleTemplate = {
  categoryId: "fluid-mechanics-calc",
  categoryName: "Fluid Mechanics",

  generateArticle: (ctx: ArticleGeneratorContext): EngineeringArticleData => {
    const {
      tool,
      discipline,
      canonicalUrl,
      outputFormatted,
      relatedTools,
      relevantUnitCategories
    } = ctx;

    const toolNameLower = tool.name.toLowerCase();
    const toolIdLower = tool.id.toLowerCase();
    const formulaStr = tool.formula;
    const outputUnitStr = tool.outputUnit;

    const isReynolds = toolIdLower.includes("reynolds");
    const isDarcyWeisbach = toolIdLower.includes("darcy-weisbach") || toolIdLower.includes("friction-loss");
    const isBernoulli = toolIdLower.includes("bernoulli");
    const isFlowRate = toolIdLower.includes("flow-rate") && !toolIdLower.includes("orifice") && !toolIdLower.includes("venturi");
    const isPipeVelocity = toolIdLower.includes("pipe-velocity") || toolIdLower.includes("velocity");
    const isContinuity = toolIdLower.includes("continuity");
    const isHydrostatic = toolIdLower.includes("hydrostatic");
    const isDynamicPressure = toolIdLower.includes("dynamic-pressure");
    const isVenturi = toolIdLower.includes("venturi");
    const isOrifice = toolIdLower.includes("orifice");
    const isPump = toolIdLower.includes("pump");
    const isHeadLoss = toolIdLower.includes("head-loss");

    // 1. Fluid Technical Guide & Fluid Principles
    let overview = "";
    if (isReynolds) {
      overview = `The ${tool.name} determines the dimensionless Reynolds number (Re) for fluid flow through closed circular pipes or conduits (${formulaStr}). The Reynolds number quantifies the relative ratio of dynamic inertial forces to viscous resistive shear forces within the moving fluid stream. In fluid mechanics and piping design, this value serves as the governing criterion identifying whether the flow regime is smooth laminar (Re < 2000), transitional (2000 ≤ Re ≤ 4000), or chaotic turbulent (Re > 4000).`;
    } else if (isDarcyWeisbach) {
      overview = `The ${tool.name} calculates the friction pressure drop (ΔP in kPa) along pipe conduits using the fundamental Darcy–Weisbach formulation (${formulaStr}). Fluid viscosity and pipe wall surface roughness generate continuous shear friction against the flowing stream, converting kinetic and pressure energy into unrecoverable thermal energy along the pipeline length.`;
    } else if (isBernoulli) {
      overview = `The ${tool.name} calculates downstream fluid static pressure (P2 in kPa) along a steady streamline using the Bernoulli energy conservation principle (${formulaStr}). Neglecting viscous friction, Bernoulli's theorem balances static pressure energy, dynamic kinetic energy (½ρv²), and gravitational potential energy (ρgz) between two distinct hydraulic stations.`;
    } else if (isFlowRate) {
      overview = `The ${tool.name} computes volumetric fluid discharge rate (Q in L/s) through a full circular conduit from the internal pipe diameter and cross-sectional mean velocity (${formulaStr}). Volumetric flow rate quantifies the liquid volume passing a stationary cross-section per unit time, serving as the foundational parameter for pipeline sizing, water distribution networks, and pump selection.`;
    } else if (isPipeVelocity) {
      overview = `The ${tool.name} determines the cross-sectional mean fluid velocity (v in m/s) from the total volumetric flow rate and pipe internal diameter (${formulaStr}). Flow velocity governs pipe wall shear stress, Reynolds regime transitions, erosion limits, settling of suspended solids, and total frictional energy loss.`;
    } else if (isContinuity) {
      overview = `The ${tool.name} evaluates fluid velocity changes across tapering or expanding circular pipe transitions using the principle of conservation of mass (${formulaStr}). For steady, incompressible liquid flow, the volumetric flow rate remains strictly constant across all cross-sections (A1·v1 = A2·v2), forcing the fluid velocity to vary inversely with the square of the internal pipe diameter.`;
    } else if (isHydrostatic) {
      overview = `The ${tool.name} calculates total absolute hydrostatic pressure (P in kPa) exerted by a static column of fluid at depth h (${formulaStr}). Hydrostatic pressure arises from the cumulative weight of the liquid overburden acting under gravity, transmitting equal normal stress in all directions at a given submergence depth.`;
    } else if (isDynamicPressure) {
      overview = `The ${tool.name} calculates fluid dynamic pressure (q in kPa) from bulk fluid density and relative flow velocity (${formulaStr}). Dynamic pressure represents the kinetic energy per unit volume of fluid motion, corresponding to the stagnation pressure rise experienced when a moving fluid stream decelerates to zero velocity isentropically.`;
    } else if (isVenturi) {
      overview = `The ${tool.name} calculates volumetric flow rate (Q in L/s) through a convergent-divergent Venturi meter tube based on differential pressure drop across the constricted throat (${formulaStr}). Venturi meters utilize the Bernoulli effect: as flow constricts through the throat, kinetic velocity surges while static pressure drops proportionally to the square of flow rate.`;
    } else if (isOrifice) {
      overview = `The ${tool.name} determines fluid discharge flow rate (Q in L/s) through a sharp-edged circular orifice plate under a differential pressure head (${formulaStr}). Flow constricts downstream of the aperture creating a vena contracta, where static head converts into discharge jet velocity regulated by the empirical discharge coefficient (Cd).`;
    } else if (isPump) {
      overview = `The ${tool.name} calculates the net hydraulic fluid power (P_hyd in kW) imparted into a moving liquid stream by a pump operating against a total dynamic head (${formulaStr}). Hydraulic power represents the rate of mechanical energy transferred into fluid pressure and elevation head, serving as the benchmark for motor sizing and pump efficiency benchmarking.`;
    } else if (isHeadLoss) {
      overview = `The ${tool.name} calculates pipe friction head loss (hf in meters of fluid) along circular conduits using the Darcy–Weisbach head loss equation (${formulaStr}). Expressing energy loss in equivalent vertical fluid column height (meters of head) simplifies hydraulic grade line (HGL) plotting and total dynamic head (TDH) calculations.`;
    } else {
      overview = `The ${tool.name} solves fundamental fluid mechanics relationships using the governing formulation ${formulaStr}. This tool provides rigorous hydraulic and aerodynamic parameter evaluation for piping networks, pumps, and fluid transport systems.`;
    }

    // 2. Primary Fluid Applications
    const applications = [
      `Sizing process pipe diameters, pumps, and valves to maintain acceptable hydraulic velocity and pressure drop.`,
      `Evaluating flow regimes (laminar vs turbulent) and friction factors for accurate pressure drop calculations.`,
      `Analyzing hydraulic grade lines (HGL) and energy grade lines (EGL) across closed conduit networks.`,
      `Calibrating differential pressure flowmeters (Venturi, orifice plates, Pitot tubes) for accurate flow measurement.`,
      `Preventing cavitation, excessive acoustic noise, pipe erosion, and water hammer surges in fluid distribution systems.`
    ];

    // 3. Industries
    const industries = fluidIndustries;

    // 4. Quick Answer
    const quickAnswer = `The ${tool.name} calculates ${outputUnitStr} from input fluid and geometric parameters using ${formulaStr}. Under baseline reference conditions, the calculated result is ${outputFormatted} ${outputUnitStr}.`;

    // 5. Variables & input parameters
    const variables = tool.inputs.map(inp => ({
      symbol: inp.name,
      label: inp.label,
      unit: inp.unit,
      description: `Input parameter representing ${inp.label.toLowerCase()} in standard hydraulic calculations.`
    }));

    const inputParameters = tool.inputs.map(inp => ({
      name: inp.name,
      label: inp.label,
      unit: inp.unit,
      defaultValue: inp.defaultValue,
      explanation: `Specifies ${inp.label.toLowerCase()} in ${inp.unit}. Baseline reference default is ${inp.defaultValue}.`
    }));

    // Step-by-step benchmark
    const givenInputs = tool.inputs.map(inp => ({
      label: inp.label,
      value: inp.defaultValue,
      unit: inp.unit
    }));

    const stepByStepExample = {
      givenInputs,
      substitution: `Substitute baseline input values into ${formulaStr}:`,
      intermediateSteps: [
        `1. Identify governing hydraulic relationship: ${formulaStr}.`,
        `2. Insert numerical parameters: ${tool.inputs.map(i => `${i.name} = ${i.defaultValue} ${i.unit}`).join(", ")}.`,
        `3. Evaluate intermediate algebraic terms according to standard fluid mechanics formulas.`,
        `4. Apply metric/SI unit conversions to express final result in ${outputUnitStr}.`
      ],
      finalResult: String(outputFormatted),
      unit: outputUnitStr
    };

    const practicalExample = {
      scenarioTitle: `Industrial Fluid System Engineering Design — ${tool.name}`,
      industryContext: `A mechanical piping engineer is designing a water conveyance system operating under standard industrial hydraulic conditions.`,
      problemStatement: `Determine the exact ${outputUnitStr} for the system under reference design parameters to verify hydraulic compliance.`,
      engineeringSolution: `Applying the governing equation ${formulaStr} with baseline inputs yields a verified result of ${outputFormatted} ${outputUnitStr}, ensuring the piping network operates within safe velocity and pressure loss tolerances.`
    };

    const assumptions = tool.assumptions && tool.assumptions.length > 0 ? tool.assumptions : [
      "Incompressible fluid behavior with constant density across the analyzed control volume.",
      "Steady, non-pulsating 1D flow streamlines along the conduit.",
      "Fully developed velocity profile across the circular cross-section.",
      "Uniform fluid temperature maintaining constant dynamic viscosity."
    ];

    const limitations = [
      "Not valid for highly compressible gas flows exceeding Mach 0.3 without compressibility corrections.",
      "Does not account for transient water hammer shockwaves or rapid valve closure surges.",
      "Assumes Newtonian fluid rheology; non-Newtonian slurries or polymer solutions require apparent viscosity corrections.",
      "Minor fitting losses (elbows, tees, check valves) must be added separately via equivalent length or resistance coefficients (K-factors)."
    ];

    const commonMistakes = [
      "Entering pipe diameter in millimeters (mm) or inches without converting to meters (m).",
      "Confusing dynamic viscosity (μ in Pa·s) with kinematic viscosity (ν in m²/s or cSt).",
      "Using gauge pressure where absolute pressure is required (or neglecting atmospheric pressure in hydrostatic calculations).",
      "Failing to verify the Reynolds number regime before selecting pipe friction factors from the Moody chart.",
      "Neglecting elevation differences (potential head) when analyzing pressure drops across sloping conduits."
    ];

    const bestPractices = [
      "Always verify Reynolds number to confirm whether laminar, transitional, or turbulent equations apply.",
      "Maintain liquid velocities between 1.0 to 2.5 m/s in pumped water lines to balance pipe capital cost against pumping energy loss.",
      "Apply Moody chart or Colebrook-White equation for precise Darcy friction factor determination in turbulent flow.",
      "Perform Net Positive Suction Head (NPSHA vs NPSHR) checks on all pump suction lines to prevent destructive cavitation.",
      "Ensure minimum straight pipe run lengths (typically 10–20 diameters upstream) before differential pressure flowmeters."
    ];

    const faqs: EngineeringArticleFAQ[] = [
      {
        question: `How does the ${tool.name} calculate ${outputUnitStr}?`,
        answer: `The calculator applies the governing relationship ${formulaStr} using your input fluid properties and conduit geometry to determine ${outputUnitStr} according to standard fluid mechanics principles.`
      },
      {
        question: `What units must be used for ${tool.name} inputs?`,
        answer: `All calculations follow standard SI units (${tool.inputs.map(i => `${i.label} in ${i.unit}`).join(", ")}). Always convert pipe diameters to meters and flow rates to compatible SI units before evaluating.`
      },
      {
        question: `What is the difference between laminar and turbulent flow?`,
        answer: `Laminar flow (Re < 2000) features smooth, parallel fluid layers dominated by viscous shear. Turbulent flow (Re > 4000) is characterized by chaotic velocity fluctuations, eddy formation, and significantly higher wall friction losses.`
      },
      {
        question: `Why is pipe velocity critical in hydraulic system design?`,
        answer: `Excessive velocity (> 3.0 m/s) causes severe friction loss, erosion, acoustic noise, and water hammer risks. Conversely, overly low velocity (< 0.6 m/s) leads to sediment deposition and oversized, costly piping.`
      },
      {
        question: `How does fluid temperature affect hydraulic calculations?`,
        answer: `Temperature changes significantly alter fluid density and dynamic viscosity. For instance, cold water at 5°C is nearly twice as viscous as warm water at 50°C, increasing friction factors and pumping head requirements.`
      },
      {
        question: `What is the Darcy friction factor?`,
        answer: `The Darcy friction factor (f) is a dimensionless coefficient quantifying pipe wall shear resistance. In laminar flow f = 64/Re, while in turbulent flow f depends on relative pipe roughness (ε/D) and Reynolds number via the Colebrook-White equation.`
      },
      {
        question: `What is the difference between dynamic pressure and static pressure?`,
        answer: `Static pressure is the actual thermodynamic fluid pressure acting equally in all directions. Dynamic pressure (½ρv²) is the kinetic energy per unit volume resulting from fluid velocity.`
      },
      {
        question: `Which international standards govern this fluid mechanics calculation?`,
        answer: `Hydraulic piping calculations follow ISO 5167, ASME MFC-3M, ANSI/HI pump standards, AWWA water conveyance manuals, and ASHRAE piping guidelines.`
      }
    ];

    return {
      title: `${tool.name} | Fluid Mechanics Engineering`,
      metaDescription: `Calculate ${outputUnitStr} using ${formulaStr}. Complete fluid mechanics guide with step-by-step calculations, hydraulic principles, and engineering standards.`,
      canonicalUrl,
      introduction: {
        overview,
        applications,
        industries
      },
      quickAnswer,
      governingEquation: {
        formula: formulaStr,
        explanation: `The governing fluid mechanics equation is ${formulaStr}, relating input parameters to output ${outputUnitStr}.`,
        variables
      },
      inputParameters,
      outputExplanation: {
        unit: outputUnitStr,
        interpretation: `The calculated value expresses ${outputUnitStr} under steady fluid flow conditions.`,
        designImpact: `Used by hydraulic and process engineers to size piping, evaluate pumping requirements, and verify system performance.`
      },
      stepByStepExample,
      practicalExample,
      assumptions,
      limitations,
      commonMistakes,
      bestPractices,
      faqs,
      standardsReferences: fluidStandardsReferences,
      internalLinks: {
        parentDiscipline: { id: "fluid-mechanics-calc", name: "Fluid Mechanics Calculators" },
        relatedTools,
        relevantUnitCategories
      }
    };
  }
};
