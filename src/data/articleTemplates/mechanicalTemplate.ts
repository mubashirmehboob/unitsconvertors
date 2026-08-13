import { EngineeringArticleData, EngineeringArticleFAQ } from "../engineeringArticlesEngine";
import { ArticleGeneratorContext, CalculatorCategoryArticleTemplate } from "./types";

/**
 * Mechanical Engineering Standards References
 */
const mechanicalStandardsReferences = [
  {
    organization: "ASME",
    code: "ASME B31.3 / ASME PTC",
    title: "American Society of Mechanical Engineers Codes & Mechanical Power Test Codes"
  },
  {
    organization: "ISO",
    code: "ISO 281 / ISO 6336",
    title: "International Organization for Standardization — Mechanical Systems, Bearing Life & Gear Ratings"
  },
  {
    organization: "ASTM",
    code: "ASTM E8/E8M",
    title: "Standard Test Methods for Tension and Mechanical Testing of Materials"
  },
  {
    organization: "SAE",
    code: "SAE J429 / SAE Standards",
    title: "Society of Automotive Engineers Standards for Mechanical Powertrain & Fastener Components"
  },
  {
    organization: "NIST",
    code: "NIST SP 330",
    title: "The International System of Units (SI) Mechanical & Dimensional Reference Standards"
  }
];

/**
 * Relevant Mechanical Industries List
 */
const mechanicalIndustries = [
  "Industrial Manufacturing & Heavy Machinery",
  "Automotive & Powertrain Engineering",
  "Aerospace & Defense Equipment Design",
  "Robotics, Mechatronics & Automation",
  "Material Handling & Conveyor System Design"
];

/**
 * Mechanical Calculator Article Template
 * Provides mechanical domain knowledge, kinematic/kinetic principles, machine element context,
 * safety guidance, and technical references for mechanical engineering tools.
 */
export const mechanicalArticleTemplate: CalculatorCategoryArticleTemplate = {
  categoryId: "mechanical-calc",
  categoryName: "Mechanical Engineering",

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

    // Detect mechanical concept domain for tailored text
    const isPowerOrEnergy = toolIdLower.includes("power") || toolIdLower.includes("hp") || toolIdLower.includes("horsepower") || toolIdLower.includes("energy") || toolIdLower.includes("flywheel") || outputUnitStr.toLowerCase().includes("watt") || outputUnitStr.toLowerCase().includes("hp") || outputUnitStr.toLowerCase().includes("joule");
    const isTorqueOrShaft = toolIdLower.includes("torque") || toolIdLower.includes("shaft") || toolIdLower.includes("torsion") || outputUnitStr.toLowerCase().includes("n·m") || outputUnitStr.toLowerCase().includes("lb-ft");
    const isDrivetrainOrGear = toolIdLower.includes("gear") || toolIdLower.includes("pulley") || toolIdLower.includes("belt") || toolIdLower.includes("screw") || toolIdLower.includes("sprocket") || toolIdLower.includes("ratio");
    const isBearingOrElement = toolIdLower.includes("bearing") || toolIdLower.includes("spring") || toolIdLower.includes("life") || toolIdLower.includes("l10");

    // 1. Tailored Introduction Overview
    let overview = "";
    if (isPowerOrEnergy) {
      overview = `The ${tool.name} calculates mechanical power or stored kinetic energy in mechanical systems using the governing equation ${formulaStr}. Mechanical power and energy metrics quantify rate of work output, shaft power capacity, or energy storage capacity across rotating and linear machine assemblies.`;
    } else if (isTorqueOrShaft) {
      overview = `The ${tool.name} computes twisting moment (torque) or torsional stress across rotating drive shafts and machine spindles using the formula ${formulaStr}. Accurately determining shaft torque is essential for preventing torsional shear fatigue failure and sizing power transmission shafts.`;
    } else if (isDrivetrainOrGear) {
      overview = `The ${tool.name} evaluates kinematic ratios, linear travel speeds, or drive belt/gear train geometries using the governing equation ${formulaStr}. Velocity and mechanical advantage calculations ensure proper speed matching between prime movers and industrial machinery loads.`;
    } else if (isBearingOrElement) {
      overview = `The ${tool.name} evaluates mechanical component performance, fatigue rating life, or load capacity using the mathematical relation ${formulaStr}. Machine component analysis is vital for equipment reliability engineering, preventative maintenance scheduling, and load capacity verification.`;
    } else {
      overview = `The ${tool.name} analyzes core physical and mechanical relationships in ${discipline.name.toLowerCase()} using the governing equation ${formulaStr}. It provides precise mathematical output in ${outputUnitStr} for machine design, component selection, and structural verification.`;
    }

    // 2. Tailored Applications
    let applications: string[] = [];
    if (isPowerOrEnergy) {
      applications = [
        "Determining continuous shaft power requirements for prime movers, electric motors, and engines.",
        "Evaluating kinetic energy storage capacity in flywheels and rotating energy buffers.",
        "Calculating thermal energy rejection rates and mechanical drivetrain efficiency.",
        "Sizing mechanical clutches, brakes, and power transmission couplings."
      ];
    } else if (isTorqueOrShaft) {
      applications = [
        "Sizing solid and hollow drive shafts against torsional shear stress yield limits.",
        "Selecting appropriately rated flexible couplings, keys, and spline connections.",
        "Evaluating gear drive input torque requirements and gear tooth bending stress.",
        "Cross-verifying field torque transducer measurements during machinery testing."
      ];
    } else if (isDrivetrainOrGear) {
      applications = [
        "Determining driven shaft rotational speeds and velocity ratios in gearboxes and pulley drives.",
        "Calculating belt pitch lengths and center distances for open and crossed belt drives.",
        "Evaluating linear positioning speed and nut displacement in lead screw and ball screw actuators.",
        "Optimizing speed reduction ratios for conveyor drives and industrial machinery."
      ];
    } else if (isBearingOrElement) {
      applications = [
        "Estimating rolling element bearing L10 fatigue life rating in million revolutions or operating hours.",
        "Calculating spring force, deflection, and spring rate in mechanical actuation mechanisms.",
        "Selecting rolling element bearings based on dynamic load ratings and equivalent applied loads.",
        "Establishing preventative maintenance replacement intervals for critical rotating plant assets."
      ];
    } else {
      applications = [
        "Sizing mechanical machine elements and evaluating steady-state physical operating limits.",
        "Cross-verifying empirical laboratory measurements against theoretical mechanical equations.",
        "Preparing design documentation, calculations packages, and engineering specifications.",
        "Verifying structural and kinematic compliance with machinery design requirements."
      ];
    }

    // 3. Quick Answer
    const quickAnswer = `The ${tool.name} computes ${outputUnitStr} using the equation ${formulaStr}. For standard baseline inputs (${tool.inputs.map(i => `${i.label} = ${i.defaultValue} ${i.unit}`).join(", ")}), the calculated output is ${outputFormatted} ${outputUnitStr}. Calculated values should be checked against applicable equipment ratings, manufacturer specifications, design requirements, and appropriate safety factors.`;

    // 4. Input Parameters
    const inputParameters = tool.inputs.map(inp => ({
      name: inp.name,
      label: inp.label,
      unit: inp.unit,
      defaultValue: inp.defaultValue,
      explanation: `Specifies the magnitude of ${inp.label.toLowerCase()} entering the governing equation ${formulaStr}. The baseline default value is set to ${inp.defaultValue} ${inp.unit}. Ensure input dimensions match required units (e.g., converting RPM to rad/s or mm to m) before manual substitution.`
    }));

    // 5. Output Explanation & Design Impact
    const outputExplanation = {
      unit: outputUnitStr,
      interpretation: `The computed output value represents the magnitude of ${tool.name.toLowerCase()} expressed in ${outputUnitStr}.`,
      designImpact: `In mechanical system engineering, this output governs component geometry, material selection, power margins, and structural integrity. Calculated values should be checked against applicable equipment ratings, manufacturer specifications, design requirements, and appropriate safety factors.`
    };

    // 6. Step-by-Step Example
    const stepByStepExample = {
      givenInputs: tool.inputs.map(i => ({
        label: i.label,
        value: i.defaultValue,
        unit: i.unit
      })),
      substitution: `Substitute the given mechanical input values into the governing equation (${formulaStr}):`,
      intermediateSteps: [
        `1. Identify all given physical input parameters: ${tool.inputs.map(i => `${i.label} = ${i.defaultValue} ${i.unit}`).join(", ")}.`,
        `2. Confirm unit compatibility across terms (converting angular velocity, linear dimensions, or forces if needed).`,
        `3. Execute the calculation according to ${formulaStr}.`,
        `4. Obtain the calculated result: ${outputFormatted} ${outputUnitStr}.`
      ],
      finalResult: outputFormatted,
      unit: outputUnitStr
    };

    // 7. Practical Real-World Example
    const practicalExample = {
      scenarioTitle: `Practical Mechanical Application: ${tool.name} in Industrial Machinery`,
      industryContext: `During the detail design and engineering phase of an industrial machine assembly, engineers must evaluate ${tool.name.toLowerCase()} to ensure reliable continuous service.`,
      problemStatement: `A mechanical design team needs to determine the resulting ${outputUnitStr} for a drive assembly operating with baseline parameters: ${tool.inputs.map(i => `${i.label} = ${i.defaultValue} ${i.unit}`).join(", ")}.`,
      engineeringSolution: `Applying the governing formula (${formulaStr}) yields a calculated result of ${outputFormatted} ${outputUnitStr}. Calculated values should be checked against applicable equipment ratings, manufacturer specifications, design requirements, and appropriate safety factors.`
    };

    // 8. Physical Assumptions
    const assumptions = tool.assumptions && tool.assumptions.length > 0 ? tool.assumptions : [
      "Rigid body mechanical kinematics without unmodeled structural deflection or elastic elasticity.",
      "Steady-state operating conditions without dynamic shock loads or vibration transients.",
      "Isotropic material properties and uniform stress distribution across cross-sections.",
      "Ideal mechanical power transfer without unmodeled frictional or windage losses unless specified."
    ];

    // 9. Operational Limitations
    const limitations = tool.limitations && tool.limitations.length > 0 ? tool.limitations : [
      "Does not account for non-linear dynamic impact loads, thermal expansion, or resonant vibration modes.",
      "Calculated values represent theoretical kinematic/kinetic limits; physical performance depends on machining tolerances, surface finish, and lubrication quality.",
      "Safety factors, fatigue endurance limits, and environmental factors (temperature, corrosion) must be applied separately during detailed design."
    ];

    // 10. Common Mechanical Mistakes
    const commonMistakes = [
      "Confusing rotational speed in RPM with angular velocity in rad/s when evaluating kinetic energy or power formulas.",
      "Mixing linear dimensions (e.g., entering millimeters into equations that require meters or inches).",
      "Confusing shaft torque (twisting moment) with bending moment or radial load on bearings.",
      "Reversing driver and driven gear or pulley diameters when computing speed reduction and torque multiplication ratios.",
      "Ignoring service factors, shock load multipliers, or manufacturer dynamic load capacity limits."
    ];

    // 11. Mechanical Best Practices
    const bestPractices = [
      "Always perform dimensional analysis to confirm that units balance correctly across all equation terms.",
      "Cross-check theoretical calculations against manufacturer catalog ratings and empirical testing data.",
      "Calculated values should be checked against applicable equipment ratings, manufacturer specifications, design requirements, and appropriate safety factors.",
      "Apply appropriate design safety factors (e.g., SF = 1.5 to 3.0 depending on load criticality and shock exposure) to calculated baseline results.",
      "Document all physical operating assumptions, boundary conditions, and material properties in engineering design records."
    ];

    // 12. Calculator-Aware Mechanical FAQs
    const faqs: EngineeringArticleFAQ[] = [
      {
        question: `What is the primary function of the ${tool.name}?`,
        answer: `The ${tool.name} evaluates physical machine relationships to calculate ${outputUnitStr} using the equation ${formulaStr}. It speeds up machine component sizing and eliminates manual calculation errors.`
      },
      {
        question: `What mathematical formula governs the ${tool.name}?`,
        answer: `The calculation is governed by the relation: ${formulaStr}. All input values must be provided in compatible physical dimensions.`
      },
      {
        question: `What unit is the calculated output (${outputUnitStr}) expressed in?`,
        answer: `The primary output is generated directly in ${outputUnitStr}. If alternative units are required for project documentation, UnitsConvertors.com provides complementary unit converters.`
      },
      {
        question: `How do changes in input parameters affect the result (${outputUnitStr})?`,
        answer: `Because the relationship is governed by ${formulaStr}, increasing numerator inputs increases the output proportionally, while increasing denominator inputs reduces the result inversely.`
      },
      {
        question: `What physical assumptions are embedded in this calculation model?`,
        answer: `This calculator assumes: ${assumptions.join("; ")}.`
      },
      {
        question: `Should calculated values be checked against safety factors and equipment ratings?`,
        answer: `Yes. Calculated values should be checked against applicable equipment ratings, manufacturer specifications, design requirements, and appropriate safety factors.`
      },
      {
        question: `What factors can make real-world mechanical performance differ from this calculation?`,
        answer: `Real-world differences can arise from dynamic vibration, friction losses, material machining tolerances, thermal expansion, and non-uniform load distribution.`
      },
      {
        question: `What are the most common mistakes when using this calculator?`,
        answer: `Common mistakes include mixing unit dimensions (e.g., mm vs. m), confusing RPM with rad/s, or omitting necessary mechanical service factors.`
      }
    ];

    if (tool.inputs.length > 0) {
      faqs.push({
        question: `How is ${tool.inputs[0].label} defined in this equation?`,
        answer: `${tool.inputs[0].label} (${tool.inputs[0].unit}) represents a key governing input variable with a benchmark baseline value set to ${tool.inputs[0].defaultValue} ${tool.inputs[0].unit}.`
      });
    }

    return {
      title: `${tool.name} | Mechanical Engineering Calculator`,
      metaDescription: `${tool.description} Free online mechanical calculator for ${outputUnitStr} using ${formulaStr}. Includes worked calculations, physical principles, and engineering design guidance.`,
      canonicalUrl,
      introduction: {
        overview,
        applications,
        industries: mechanicalIndustries
      },
      quickAnswer,
      governingEquation: {
        formula: formulaStr,
        explanation: `The mathematical model evaluates the governing mechanical relationship linking input variables to the output property (${outputUnitStr}). All terms follow standard International System of Units (SI) or recognized engineering definitions.`,
        variables: tool.inputs.map(i => ({
          symbol: i.name,
          label: i.label,
          unit: i.unit,
          description: `Input parameter representing ${i.label.toLowerCase()} measured in ${i.unit}.`
        }))
      },
      inputParameters,
      outputExplanation,
      stepByStepExample,
      practicalExample,
      assumptions,
      limitations,
      commonMistakes,
      bestPractices,
      faqs,
      standardsReferences: mechanicalStandardsReferences,
      internalLinks: {
        parentDiscipline: {
          id: discipline.id,
          name: discipline.name
        },
        relatedTools,
        relevantUnitCategories
      }
    };
  }
};
