import { EngineeringArticleData, EngineeringArticleFAQ } from "../engineeringArticlesEngine";
import { ArticleGeneratorContext, CalculatorCategoryArticleTemplate } from "./types";

/**
 * Electrical Engineering Standards References
 */
const electricalStandardsReferences = [
  {
    organization: "IEEE",
    code: "IEEE Std 80",
    title: "IEEE Guide for Safety in AC Substation Grounding and Circuit Analysis"
  },
  {
    organization: "IEC",
    code: "IEC 60038",
    title: "IEC Standard Voltages, Frequencies, and Fundamental Electrical Quantities"
  },
  {
    organization: "NFPA / NEC",
    code: "NFPA 70",
    title: "National Electrical Code — Guidelines for Circuit Sizing, Protection, and Conductors"
  },
  {
    organization: "NIST",
    code: "NIST SP 330",
    title: "The International System of Units (SI) Electrical Reference Standards"
  }
];

/**
 * Relevant Electrical Industries List
 */
const electricalIndustries = [
  "Power Distribution & Electric Utilities",
  "Industrial Automation & Control Systems",
  "Electronics & Embedded Systems Design",
  "Renewable Energy (Solar & Wind) Systems",
  "Building Services & Facility Electrical Systems"
];

/**
 * Electrical Calculator Article Template
 * Provides electrical domain knowledge, circuit principles, safety guidance,
 * and standards context for electrical engineering tools.
 */
export const electricalArticleTemplate: CalculatorCategoryArticleTemplate = {
  categoryId: "electrical-calc",
  categoryName: "Electrical Engineering",

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

    // Detect electrical concept type for tailored copy
    const isPower = toolIdLower.includes("power") || outputUnitStr.toLowerCase().includes("watt") || formulaStr.includes("P =") || formulaStr.includes("P=");
    const isVoltage = toolIdLower.includes("voltage") || outputUnitStr.toLowerCase().includes("volt") || formulaStr.startsWith("V") || formulaStr.includes("Vin") || formulaStr.includes("Vout");
    const isCurrent = toolIdLower.includes("current") || outputUnitStr.toLowerCase().includes("amp") || formulaStr.startsWith("I") || formulaStr.includes("Itotal");
    const isResistance = toolIdLower.includes("resis") || outputUnitStr.toLowerCase().includes("ohm") || formulaStr.includes("Rtotal") || formulaStr.includes("R =");
    const isEnergy = toolIdLower.includes("energy") || outputUnitStr.toLowerCase().includes("kwh") || outputUnitStr.toLowerCase().includes("joule");
    const isDivider = toolIdLower.includes("divider");
    const isSeriesParallel = toolIdLower.includes("series") || toolIdLower.includes("parallel");

    // 1. Tailored Introduction Overview
    let overview = "";
    if (isPower) {
      overview = `The ${tool.name} calculates electrical power transfer in watts (W) or kilowatts (kW) using the governing relationship ${formulaStr}. Electrical power represents the rate at which electrical energy is converted into work, heat, or electromagnetic fields across a circuit component or distribution branch.`;
    } else if (isVoltage) {
      overview = `The ${tool.name} evaluates electrical potential difference (voltage) in volts (V) across circuit elements using the mathematical formulation ${formulaStr}. Voltage serves as the electromotive force (EMF) that drives electric charge through conductive pathways and circuit loads.`;
    } else if (isCurrent) {
      overview = `The ${tool.name} computes electric current flow in amperes (A) through conductors or circuit branches according to ${formulaStr}. Electric current defines the rate of electric charge drift, essential for conductor cross-section sizing and overcurrent protection evaluation.`;
    } else if (isResistance) {
      overview = `The ${tool.name} determines equivalent electrical resistance in ohms (Ω) for circuit networks using the relation ${formulaStr}. Resistance quantifies the Ohmic opposition to electric current flow, directly impacting voltage drops and thermal energy dissipation.`;
    } else if (isEnergy) {
      overview = `The ${tool.name} calculates cumulative electrical energy consumption over time in kilowatt-hours (kWh) or joules (J) using ${formulaStr}. Tracking energy usage is critical for utility load forecasting, equipment efficiency auditing, and operating cost estimation.`;
    } else if (isDivider) {
      overview = `The ${tool.name} analyzes voltage or current attenuation across multi-resistor branch configurations governed by ${formulaStr}. Divider circuits are widely utilized in sensor signal conditioning, reference voltage generation, and analog input scaling.`;
    } else {
      overview = `The ${tool.name} evaluates fundamental circuit relationships in ${discipline.name.toLowerCase()} using the governing equation ${formulaStr}. It provides precise mathematical output in ${outputUnitStr} for circuit design, system sizing, and diagnostic verification.`;
    }

    // 2. Tailored Applications
    let applications: string[] = [];
    if (isPower) {
      applications = [
        "Evaluating active power draw and thermal dissipation for electrical panels and machinery.",
        "Sizing circuit protection devices, conductors, and transformer load capacities.",
        "Balancing single-phase and three-phase loads in commercial distribution systems.",
        "Calculating baseline electrical operating costs and energy efficiency metrics."
      ];
    } else if (isVoltage || isDivider) {
      applications = [
        "Analyzing voltage drops across transmission lines and motor branch feeders.",
        "Biasing transistor terminals and scaling sensor signals for analog-to-digital converters (ADCs).",
        "Establishing stable reference voltages in instrumentation and control loops.",
        "Verifying electrical power supply outputs against component operating tolerances."
      ];
    } else if (isCurrent) {
      applications = [
        "Determining branch load currents for conductor ampacity and breaker selection.",
        "Analyzing current division across parallel resistive and reactive branches.",
        "Evaluating short-circuit currents and overcurrent protection coordination.",
        "Monitoring transducer loop signals (e.g., 4–20 mA industrial process instrumentation)."
      ];
    } else if (isResistance || isSeriesParallel) {
      applications = [
        "Calculating equivalent network resistance for series and parallel resistor arrays.",
        "Evaluating heating element resistances and current-limiting resistor values.",
        "Verifying grounding conductor integrity and contact resistance measurements.",
        "Designing passive attenuation networks and impedance matching circuits."
      ];
    } else {
      applications = [
        "Sizing electrical components and evaluating steady-state circuit parameters.",
        "Cross-verifying field diagnostic measurements against theoretical circuit calculations.",
        "Preparing technical design documentation and engineering calculation packages.",
        "Verifying compliance with equipment voltage, current, and power dissipation ratings."
      ];
    }

    // 3. Quick Answer
    const quickAnswer = `The ${tool.name} computes ${outputUnitStr} using the equation ${formulaStr}. For standard baseline inputs (${tool.inputs.map(i => `${i.label} = ${i.defaultValue} ${i.unit}`).join(", ")}), the calculated output is ${outputFormatted} ${outputUnitStr}. Calculated values should be checked against applicable equipment ratings, installation requirements, and relevant electrical codes.`;

    // 4. Input Parameters
    const inputParameters = tool.inputs.map(inp => ({
      name: inp.name,
      label: inp.label,
      unit: inp.unit,
      defaultValue: inp.defaultValue,
      explanation: `Specifies the magnitude of ${inp.label.toLowerCase()} entering the equation ${formulaStr}. Baseline value is set to ${inp.defaultValue} ${inp.unit}. Ensure proper SI unit prefix scaling (e.g., converting mV to V or mA to A) before manual substitution.`
    }));

    // 5. Output Explanation & Design Impact
    const outputExplanation = {
      unit: outputUnitStr,
      interpretation: `The calculated value represents the magnitude of ${tool.name.toLowerCase()} expressed in ${outputUnitStr}.`,
      designImpact: `In electrical system design, this output value establishes operating levels for component selection, thermal dissipation, and insulation requirements. Calculated values should be checked against applicable equipment ratings, installation requirements, and relevant electrical codes.`
    };

    // 6. Step-by-Step Example
    const stepByStepExample = {
      givenInputs: tool.inputs.map(i => ({
        label: i.label,
        value: i.defaultValue,
        unit: i.unit
      })),
      substitution: `Substitute the given input values into the governing electrical equation (${formulaStr}):`,
      intermediateSteps: [
        `1. Identify all circuit input parameters: ${tool.inputs.map(i => `${i.label} = ${i.defaultValue} ${i.unit}`).join(", ")}.`,
        `2. Verify that input units are converted to compatible base SI dimensions (e.g., A, V, Ω, W, s, Hz).`,
        `3. Execute the calculation according to ${formulaStr}.`,
        `4. Obtain the calculated output: ${outputFormatted} ${outputUnitStr}.`
      ],
      finalResult: outputFormatted,
      unit: outputUnitStr
    };

    // 7. Practical Real-World Example
    const practicalExample = {
      scenarioTitle: `Practical Electrical Application: ${tool.name} in Industrial Distribution`,
      industryContext: `During the design and commissioning of an industrial facility electrical distribution system, engineers must evaluate ${tool.name.toLowerCase()} to ensure reliable equipment operation.`,
      problemStatement: `An electrical engineering team needs to determine the resulting ${outputUnitStr} for a circuit operating with parameters: ${tool.inputs.map(i => `${i.label} = ${i.defaultValue} ${i.unit}`).join(", ")}.`,
      engineeringSolution: `Applying the governing formula (${formulaStr}) yields a calculated result of ${outputFormatted} ${outputUnitStr}. Calculated values should be checked against applicable equipment ratings, installation requirements, and relevant electrical codes.`
    };

    // 8. Physical Assumptions
    const defaultAssumptions = [
      "Steady-state electrical operating conditions without unmodeled dynamic switching transients.",
      "Linear Ohmic electrical component behavior unless non-linear characteristics are explicitly stated.",
      "Negligible parasitic capacitance and stray inductance in conductors.",
      "Stable ambient operating temperature maintaining constant conductor resistivity."
    ];
    const assumptions = tool.assumptions && tool.assumptions.length >= 3 
      ? tool.assumptions 
      : (tool.assumptions && tool.assumptions.length > 0 ? [...tool.assumptions, ...defaultAssumptions.slice(tool.assumptions.length)] : defaultAssumptions);

    // 9. Operational Limitations
    const defaultLimitations = [
      "Does not account for non-linear temperature coefficients or component thermal drift during prolonged high-load operation.",
      "AC circuit applications involving inductive or capacitive loads require complex impedance (Z) and power factor consideration.",
      "Calculations yield ideal theoretical values; physical installations depend on component manufacturing tolerances and measurement instrument accuracy."
    ];
    const limitations = tool.limitations && tool.limitations.length >= 3 
      ? tool.limitations 
      : (tool.limitations && tool.limitations.length > 0 ? [...tool.limitations, ...defaultLimitations.slice(tool.limitations.length)] : defaultLimitations);

    // 10. Common Electrical Mistakes
    const commonMistakes = [
      "Mixing unit prefixes without preliminary conversion (e.g., substituting milliamperes directly as amperes or kilohms as ohms).",
      "Confusing voltage drop across an individual load component with total line-to-neutral or line-to-line supply voltage.",
      "Ignoring power factor (PF) in AC inductive or capacitive loads, treating apparent power (VA) as active power (W).",
      "Neglecting component power dissipation ratings (P = I²R or P = V²/R), leading to thermal overload despite correct voltage calculations.",
      "Confusing line and phase quantities in three-phase electrical systems when evaluating current or power."
    ];

    // 11. Electrical Best Practices
    const bestPractices = [
      "Always verify unit prefixes (e.g., m, k, M, µ) and convert to base SI units before substituting into equations.",
      "Cross-reference calculated values against manufacturer equipment datasheets and maximum continuous operating limits.",
      "Calculated values should be checked against applicable equipment ratings, installation requirements, and relevant electrical codes.",
      "Incorporate safety margins (e.g., 80% continuous load rule per NEC guidelines) when selecting protective devices and conductors.",
      "Perform dimensional analysis to confirm that units balance correctly across both sides of the governing equation."
    ];

    // 12. Calculator-Aware Electrical FAQs (Exactly 8 Complete FAQs)
    const faqs: EngineeringArticleFAQ[] = [
      {
        question: `What is the primary function of the ${tool.name}?`,
        answer: `The ${tool.name} evaluates fundamental electrical circuit parameters to determine ${outputUnitStr} using the governing formula ${formulaStr}. It helps electrical engineers, designers, and technicians quickly model electrical behavior, verify component sizing, and avoid manual algebraic calculation errors.`
      },
      {
        question: `What mathematical formula governs the ${tool.name}?`,
        answer: `The calculation is governed by the relation ${formulaStr}. In this mathematical model, all input variables must be expressed in consistent base SI dimensions (volts, amperes, ohms, watts, or seconds) prior to evaluation.`
      },
      {
        question: `What electrical unit is the primary output (${outputUnitStr}) expressed in?`,
        answer: `The main output value is calculated directly in ${outputUnitStr}. If your engineering documentation or equipment datasheets require alternative units (such as kW, MW, kVA, or millivolts), you can easily convert the result using UnitsConvertors.com dedicated electrical unit converters.`
      },
      {
        question: `How do I handle unit prefixes like mA, mV, or kΩ in this calculation?`,
        answer: `All prefixed values must be converted to base SI units before substituting into the equation. For example, divide milliamperes (mA) by 1,000 to obtain Amperes, or multiply kilohms (kΩ) by 1,000 to obtain Ohms. Entering prefixed numbers directly into base SI formulas will distort results by powers of ten.`
      },
      {
        question: `Can this calculation be applied to both AC and DC electrical circuits?`,
        answer: isPower
          ? `This calculation applies directly to DC circuits or single-phase AC circuits operating at unity power factor (PF = 1.0). For reactive AC circuits with inductive or capacitive loads, active power (W), apparent power (VA), and power factor must be explicitly incorporated.`
          : `For DC circuits and purely resistive AC circuits, the formula applies directly. For reactive AC circuits, total impedance (Z) incorporating capacitive and inductive reactance must replace pure resistance (R).`
      },
      {
        question: `What physical boundary assumptions are embedded in this model?`,
        answer: `This calculator assumes steady-state operating conditions, linear circuit parameter behavior, uniform conductor temperature, and negligible parasitic electromagnetic interference. The governing assumptions include: ${assumptions.slice(0, 3).join("; ")}.`
      },
      {
        question: `How does changing an input parameter affect the calculated output in ${outputUnitStr}?`,
        answer: `Because the physical relationship is governed by ${formulaStr}, increasing numerator input parameters scales the output up proportionally, whereas increasing denominator input parameters scales the calculated result down inversely.`
      },
      {
        question: `Should calculated values be verified against electrical codes and equipment ratings?`,
        answer: `Yes. Mathematical results generated by this tool represent theoretical physical values. Real-world installations must incorporate continuous load safety margins (such as the 80% NEC rule), conductor temperature derating factors, and applicable regional electrical codes (NFPA 70 / IEC 60038).`
      }
    ];

    return {
      title: `${tool.name} | Electrical Engineering Calculator`,
      metaDescription: `${tool.description} Free online electrical calculator for ${outputUnitStr} using ${formulaStr}. Includes worked calculations, circuit principles, and practical engineering guidance.`,
      canonicalUrl,
      introduction: {
        overview,
        applications,
        industries: electricalIndustries
      },
      quickAnswer,
      governingEquation: {
        formula: formulaStr,
        explanation: `The mathematical model evaluates the governing circuit relation linking input variables to the output quantity (${outputUnitStr}). All terms follow standard International System of Units (SI) definitions.`,
        variables: tool.inputs.map(i => ({
          symbol: i.name,
          label: i.label,
          unit: i.unit,
          description: `Input variable representing ${i.label.toLowerCase()} measured in ${i.unit}.`
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
      standardsReferences: electricalStandardsReferences,
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
