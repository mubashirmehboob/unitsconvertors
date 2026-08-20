import { EngineeringArticleData, EngineeringArticleFAQ } from "../engineeringArticlesEngine";
import { ArticleGeneratorContext, CalculatorCategoryArticleTemplate } from "./types";

/**
 * Chemistry Standards References
 */
const chemistryStandardsReferences = [
  {
    organization: "IUPAC",
    code: "Green Book (3rd Ed.)",
    title: "Quantities, Units and Symbols in Physical Chemistry — IUPAC Recommendations"
  },
  {
    organization: "NIST",
    code: "NIST Chemistry WebBook (SRD 69)",
    title: "NIST Standard Reference Database — Thermochemical and Reaction Kinetics Data"
  },
  {
    organization: "BIPM",
    code: "SI Brochure (9th Ed.)",
    title: "The International System of Units (SI) — Base Unit for Amount of Substance (Mole)"
  },
  {
    organization: "ISO",
    code: "ISO 80000-9",
    title: "Quantities and Units — Part 9: Physical Chemistry and Molecular Physics"
  }
];

/**
 * Relevant Chemistry Industries & Sectors
 */
const chemistryIndustries = [
  "Analytical & Bioanalytical Chemistry",
  "Pharmaceutical Formulation & Manufacturing",
  "Chemical Synthesis & Specialty Chemical Processing",
  "Environmental Testing & Water Quality Analysis",
  "Academic, Clinical & Industrial Research Laboratories"
];

/**
 * Chemistry Calculator Article Template
 * Provides chemical domain principles, stoichiometry guidelines, solution thermodynamics,
 * and standards context for chemistry computational tools.
 */
export const chemistryArticleTemplate: CalculatorCategoryArticleTemplate = {
  categoryId: "chemistry-calc",
  categoryName: "Chemistry",

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

    // Detect chemical concept type for tailored copy
    const isDilution = toolIdLower.includes("dilution") || formulaStr.includes("C1") || formulaStr.includes("V1");
    const isMolarity = toolIdLower.includes("molarity") || (outputUnitStr.toLowerCase().includes("molar") && !isDilution);
    const isMolality = toolIdLower.includes("molality") || outputUnitStr.toLowerCase().includes("molal");
    const isNormality = toolIdLower.includes("normality") || outputUnitStr.toLowerCase().includes("normal");
    const isPercent = toolIdLower.includes("percent") || outputUnitStr.includes("%");
    const isPh = toolIdLower.includes("ph") && !toolIdLower.includes("poh");
    const isPoh = toolIdLower.includes("poh");
    const isBeerLambert = toolIdLower.includes("beer") || toolIdLower.includes("absorbance");
    const isYield = toolIdLower.includes("yield");
    const isGas = toolIdLower.includes("gas") || formulaStr.includes("R × T") || formulaStr.includes("PV");
    const isSpecificHeat = toolIdLower.includes("heat") && formulaStr.includes("m × c");
    const isEnthalpy = toolIdLower.includes("enthalpy") || formulaStr.includes("ΔH");

    // 1. Tailored Introduction Overview
    let overview = "";
    if (isDilution) {
      overview = `The ${tool.name} calculates the target concentration or aliquot volume required during solution dilution using the conservation of solute mass principle (${formulaStr}). In analytical and synthetic chemistry, stock solution dilution represents a standard laboratory operation where solvent is added to decrease solute concentration while preserving total solute molar quantity.`;
    } else if (isMolarity) {
      overview = `The ${tool.name} determines solution molarity (M, in mol/L) from the molar amount of solute dissolved per total liter of solution (${formulaStr}). Molarity is the primary concentration parameter in quantitative chemical analysis, governing stoichiometric reagent ratios, chemical equilibrium dynamics, and reaction rates.`;
    } else if (isMolality) {
      overview = `The ${tool.name} computes molal concentration (m, in mol/kg) based on moles of solute dissolved per kilogram of pure solvent (${formulaStr}). Unlike volumetric concentration metrics, molality is independent of temperature and thermal expansion, making it the fundamental parameter for colligative property evaluations such as boiling-point elevation and freezing-point depression.`;
    } else if (isNormality) {
      overview = `The ${tool.name} calculates solution normality (N, in eq/L) by multiplying molar concentration by the reactive equivalence factor (${formulaStr}). Normality quantifies the concentration of reactive equivalents in acid-base proton transfer or oxidation-reduction electron transfer reactions.`;
    } else if (isPercent) {
      overview = `The ${tool.name} calculates the mass percentage concentration (% w/w) of a solute relative to the total mass of the homogeneous solution (${formulaStr}). Mass percent provides a gravimetric measure of solution composition commonly utilized in pharmaceutical formulation, industrial reagent packaging, and chemical manufacturing.`;
    } else if (isPh) {
      overview = `The ${tool.name} evaluates aqueous solution acidity on the logarithmic pH scale from active hydronium/hydrogen ion concentration (${formulaStr}). In aqueous solutions at 25°C, pH quantifies chemical acidity or basicity, controlling enzymatic activity, solubility equilibria, buffer capacity, and chemical reaction pathways.`;
    } else if (isPoh) {
      overview = `The ${tool.name} calculates solution pOH from hydroxide ion concentration [OH⁻] using the logarithmic scale (${formulaStr}). Reflecting solution alkalinity, pOH complements pH through the autoionization equilibrium of water (pH + pOH = 14.00 at 25°C).`;
    } else if (isBeerLambert) {
      overview = `The ${tool.name} computes optical absorbance (A) using the Beer-Lambert Law (${formulaStr}), relating the attenuation of monochromatic light to the molar absorptivity of the analyte, solution concentration, and optical cuvette path length in quantitative spectrophotometry.`;
    } else if (isYield) {
      overview = `The ${tool.name} determines percentage reaction yield by comparing the isolated mass of synthesized product to the maximum stoichiometric theoretical yield (${formulaStr}). Reaction yield is the benchmark metric for evaluating chemical reaction efficiency, synthetic optimization, and material conversion.`;
    } else if (isGas) {
      overview = `The ${tool.name} calculates ideal gas properties using the classical equation of state (${formulaStr}). By correlating molar substance quantity, absolute thermodynamic temperature, and system pressure, this formulation governs stoichiometric gas evolution and vapor-phase chemical reactions.`;
    } else if (isSpecificHeat) {
      overview = `The ${tool.name} evaluates thermal energy transfer (Q) absorbed or evolved during temperature changes without phase change using calorimetry principles (${formulaStr}). Thermal heat capacity calculations are vital for bomb calorimetry, reaction temperature control, and process thermochemistry.`;
    } else if (isEnthalpy) {
      overview = `The ${tool.name} calculates the standard reaction enthalpy change (ΔH_rxn) from standard enthalpies of formation of products and reactants using Hess's Law (${formulaStr}). The net enthalpy change indicates whether a chemical transformation is exothermic (heat released) or endothermic (heat absorbed).`;
    } else {
      overview = `The ${tool.name} solves quantitative chemical relationships based on the governing formulation ${formulaStr}. This computational tool provides reliable calculation of chemical quantities, solution concentrations, and stoichiometric parameters for laboratory and process chemistry.`;
    }

    // 2. Tailored Applications
    const applications = [
      `Quantifying ${tool.name.toLowerCase()} parameters for analytical laboratory testing and standard reagent preparation.`,
      `Establishing stoichiometric baseline ratios and mass balance in synthetic chemical synthesis.`,
      `Ensuring compliance with chemical quality control tolerances and analytical assay validation protocols.`,
      `Evaluating thermodynamic, kinetic, or equilibrium properties during industrial scale-up and batch processing.`
    ];

    // 3. Quick Answer
    const quickAnswer = `The ${tool.name} calculates ${outputUnitStr} from input chemical parameters using the governing relationship ${formulaStr}. For the baseline test configuration, the calculated result is ${outputFormatted} ${outputUnitStr}.`;

    // 4. Input Parameters with explanations
    const inputParameters = tool.inputs.map((inp) => ({
      name: inp.name,
      label: inp.label,
      unit: inp.unit,
      defaultValue: inp.defaultValue,
      explanation: `Chemical parameter '${inp.label}' measured in ${inp.unit}. Serves as an input parameter in evaluating ${tool.formula}.`
    }));

    // 5. Variables description
    const variables = tool.inputs.map((inp) => ({
      symbol: inp.name,
      label: inp.label,
      unit: inp.unit,
      description: `Input chemical quantity (${inp.label}) specified in ${inp.unit}.`
    }));
    variables.push({
      symbol: "Result",
      label: tool.name.replace(" Calculator", "").replace(" Solver", ""),
      unit: tool.outputUnit,
      description: `Calculated chemical output property in ${tool.outputUnit}.`
    });

    // 6. Step-by-step example
    const givenInputs = tool.inputs.map((inp) => ({
      label: inp.label,
      value: inp.defaultValue,
      unit: inp.unit
    }));

    const stepByStepExample = {
      givenInputs,
      substitution: `Substitute the default laboratory baseline parameters directly into the governing chemical equation: ${tool.formula}`,
      intermediateSteps: [
        `Step 1: Identify all chemical input quantities and verify units are in standard SI/laboratory format.`,
        `Step 2: Apply the governing chemical formula: ${tool.formula}`,
        `Step 3: Evaluate intermediate numerical terms using standard arithmetic operations.`,
        `Step 4: Compute final output value = ${outputFormatted} ${outputUnitStr}.`
      ],
      finalResult: outputFormatted,
      unit: tool.outputUnit
    };

    // 7. Practical Chemistry Scenario
    const practicalExample = {
      scenarioTitle: `Laboratory Verification — ${tool.name}`,
      industryContext: "Analytical Chemistry & Quality Control Assay",
      problemStatement: `An analytical chemist needs to determine the expected output for a solution preparation or chemical process where the given input parameters are set to standard baseline test specifications.`,
      engineeringSolution: `By inserting the specified chemical values into the governing relationship (${tool.formula}), the chemist calculates a verified result of ${outputFormatted} ${tool.outputUnit}, ensuring solution precision and protocol compliance.`
    };

    // 8. Assumptions & Limitations
    const assumptions = tool.assumptions && tool.assumptions.length > 0
      ? tool.assumptions
      : [
          "Homogeneous solution or gas phase without unmodeled precipitates",
          "Ideal behavior without significant ionic activity coefficient deviations",
          "Constant ambient temperature and pressure during measurement",
          "Pure reagent components matching nominal molecular weights"
        ];

    const limitations = tool.limitations && tool.limitations.length > 0
      ? tool.limitations
      : [
          "Concentrated solutions may deviate from ideal behavior due to interionic interactions",
          "Temperature variations can alter liquid solution density and volumetric concentrations",
          "Side reactions, incomplete conversions, or precipitation are not automatically modeled",
          "Activity coefficients must be incorporated when working with high ionic strength solutions"
        ];

    // 9. Common Mistakes & Best Practices
    const commonMistakes = [
      "Unit mismatch: Mixing milliliters (mL) with liters (L) or grams (g) with kilograms (kg) without required conversion factors.",
      "Temperature dependence: Neglecting thermal expansion effects on volumetric concentrations (Molarity/Normality) when temperature shifts.",
      "Activity vs. concentration: Assuming activity equals concentration in high ionic strength solutions (I > 0.01 M).",
      "Significant figures: Over-reporting precision beyond the least precise laboratory measurement instrument."
    ];

    const bestPractices = [
      "Always verify that all input units match the dimensional requirements of the governing formula before calculation.",
      "Use analytical balances and calibrated volumetric glassware (Class A) when preparing standard solutions.",
      "Maintain consistent laboratory temperature during volumetric titration and spectrophotometric assays.",
      "Account for solute purity, hydration states, and assay percentages when weighing reagents.",
      "Cross-check calculated results against standard reference tables and chemical equilibrium benchmarks."
    ];

    // 10. Exactly 8 Chemistry-Specific FAQs
    const faqs: EngineeringArticleFAQ[] = [
      {
        question: `What does the ${tool.name} calculate?`,
        answer: `The ${tool.name} calculates ${outputUnitStr} based on the governing relationship ${formulaStr}. It provides quantitative evaluation of chemical parameters for analytical, synthetic, and quality control applications.`
      },
      {
        question: `What is the governing formula used by this chemistry calculator?`,
        answer: `This calculator utilizes the fundamental chemical relationship ${formulaStr}, where all input variables are converted to compatible SI or metric laboratory units before computation.`
      },
      {
        question: `What units should be entered into the calculator?`,
        answer: `Input variables should be entered in their designated units as shown in the interface (${tool.inputs.map((i) => `${i.label} in ${i.unit}`).join(", ")}). Consistent unit usage prevents order-of-magnitude calculation errors.`
      },
      {
        question: `How does changing the primary input affect the calculated ${outputUnitStr}?`,
        answer: `Based on the equation ${formulaStr}, the output responds according to the mathematical relationship: directly proportional inputs increase the result linearly, while denominator terms reduce the result inversely.`
      },
      {
        question: `What fundamental assumptions does this chemical calculation make?`,
        answer: `The calculation assumes ${assumptions[0].toLowerCase()}, constant operational conditions, and negligible interference from unmodeled side reactions or non-ideal solution dynamics.`
      },
      {
        question: `Can this calculator be used for precise laboratory preparations?`,
        answer: `Yes, for routine chemical calculations within dilute and ideal operational ranges. For highly concentrated electrolyte solutions or non-ideal regimes, activity coefficients and non-ideal equations of state should be applied.`
      },
      {
        question: `What are the most common mistakes when performing this calculation?`,
        answer: `The most frequent errors include mixing incompatible volume or mass units, confusing molarity with molality, neglecting solution density in mass-to-volume conversions, and ignoring reagent hydration water.`
      },
      {
        question: `How should the calculated result (${outputFormatted} ${outputUnitStr}) be interpreted?`,
        answer: `The result of ${outputFormatted} ${outputUnitStr} represents the theoretical chemical quantity expected under specified input conditions, ready for use in recipe formulation, batch scaling, or analytical verification.`
      }
    ];

    return {
      title: `${tool.name} | Chemistry Calculation Engine`,
      metaDescription: `Calculate ${outputUnitStr} with the ${tool.name}. Includes exact governing formula ${formulaStr}, step-by-step worked examples, and IUPAC reference standards.`,
      canonicalUrl,
      introduction: {
        overview,
        applications,
        industries: chemistryIndustries
      },
      quickAnswer,
      governingEquation: {
        formula: formulaStr,
        explanation: `The equation ${formulaStr} relates input chemical quantities to the resulting ${outputUnitStr}. In quantitative chemical analysis, maintaining strict unit consistency across all terms is required for stoichiometric accuracy.`,
        variables
      },
      inputParameters,
      outputExplanation: {
        unit: outputUnitStr,
        interpretation: `The primary calculated result is expressed in ${outputUnitStr}. It represents the quantitative chemical property derived under the specified input conditions.`,
        designImpact: `In laboratory and industrial chemistry, accurate evaluation of ${outputUnitStr} ensures correct reagent stoichiometric proportions, batch quality, reaction safety, and product specification compliance.`
      },
      stepByStepExample,
      practicalExample,
      assumptions,
      limitations,
      commonMistakes,
      bestPractices,
      faqs,
      standardsReferences: chemistryStandardsReferences,
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
