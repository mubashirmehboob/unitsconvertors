import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * Production-quality bespoke articles for Chemistry Calculators (Part 1).
 * Adheres strictly to CHEMISTRY CALCULATOR ARTICLE TEMPLATE V1.0.
 * Covers:
 * 1. Solution Dilution Calculator (dilution-calc)
 * 2. Molarity Calculator (molarity-calculator)
 * 3. Molality Calculator (molality-calculator)
 * 4. Normality Calculator (normality-calculator)
 * 5. Percent Concentration Calculator (percent-concentration)
 * 6. pH Calculator (ph-calculator)
 */

export const chemistryBespokeArticlesPart1: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {

  // 1. SOLUTION DILUTION CALCULATOR
  "dilution-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Solution Dilution Calculator (C1V1 = C2V2) | Chemical Concentration Solver",
    metaDescription: "Calculate target solution concentration (C2) or required stock volume (V1) using the C1V1 = C2V2 dilution equation. Includes worked laboratory examples and IUPAC standards.",
    canonicalUrl,
    introduction: {
      overview: "Solution dilution is a fundamental laboratory technique based on the conservation of solute mass. When pure solvent is added to a concentrated stock solution, the total quantity of dissolved solute particles remains constant, while the overall volume of the solution increases. Governed mathematically by the equation C1V1 = C2V2, the initial molar quantity of solute (n1 = C1 × V1) exactly equals the final molar quantity of solute (n2 = C2 × V2). This inverse relationship means that increasing total solution volume results in a proportional decrease in solution concentration.",
      applications: [
        "Preparing working analytical standards from concentrated commercial stock solutions.",
        "Performing serial dilutions for microbiological assay plating and minimum inhibitory concentration (MIC) testing.",
        "Diluting concentrated acid and base stock solutions for volumetric titration assays.",
        "Formulating buffer solutions and cell culture media in biochemical laboratories."
      ],
      industries: [
        "Analytical & Bioanalytical Chemistry",
        "Pharmaceutical Formulation & Manufacturing",
        "Clinical & Diagnostic Testing Laboratories",
        "Environmental Water Quality Analysis"
      ]
    },
    quickAnswer: "The dilution equation C1V1 = C2V2 states that the product of initial concentration and initial volume equals the product of final concentration and final volume. For an initial stock concentration C1 = 5 M, an initial volume V1 = 0.1 L, and a final diluted volume V2 = 1.0 L, the resulting concentration C2 is exactly 0.5 M (Molar).",
    governingEquation: {
      formula: "C_2 = \\frac{C_1 \\times V_1}{V_2}",
      explanation: "This formula solves for the final diluted concentration (C2 in Molar, mol/L) by dividing total initial moles of solute (C1 × V1) by the total final solution volume (V2). The calculation assumes ideal volumetric behavior where solute mass is conserved and volumes are additive.",
      variables: [
        { symbol: "C1", label: "Initial Stock Concentration", unit: "Molar (M or mol/L)", description: "Concentration of the original concentrated stock solution prior to solvent addition." },
        { symbol: "V1", label: "Initial Stock Volume", unit: "Liters (L)", description: "Volume of concentrated stock solution aliquot transferred for dilution." },
        { symbol: "C2", label: "Final Target Concentration", unit: "Molar (M or mol/L)", description: "Resulting concentration of the diluted solution after reaching final volume." },
        { symbol: "V2", label: "Final Solution Volume", unit: "Liters (L)", description: "Total final volume of the solution after diluent solvent has been added." }
      ]
    },
    inputParameters: [
      {
        name: "c1",
        label: "Initial Conc (C1)",
        unit: "Molar (M)",
        defaultValue: 5,
        explanation: "Concentration of the concentrated stock solution. The baseline default is set to 5 M (typical of concentrated laboratory stock solutions)."
      },
      {
        name: "v1",
        label: "Initial Vol (V1)",
        unit: "Liters (L)",
        defaultValue: 0.1,
        explanation: "Aliquot volume taken from the stock solution. The baseline default is set to 0.1 L (100 mL)."
      },
      {
        name: "v2",
        label: "Final Vol (V2)",
        unit: "Liters (L)",
        defaultValue: 1.0,
        explanation: "Target total volume after adding diluent. The baseline default is set to 1.0 L (1000 mL)."
      }
    ],
    outputExplanation: {
      unit: "Molar (M)",
      interpretation: "The computed value represents the final molar concentration (moles of solute per liter of total solution) of the prepared mixture.",
      designImpact: "Ensures precise reagent concentration for spectrophotometric calibration curves, enzymatic reactions, and stoichiometric chemical syntheses. Incorrect dilutions lead to systematic analytical errors."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Initial Concentration (C1)", value: 5, unit: "M" },
        { label: "Initial Volume (V1)", value: 0.1, unit: "L" },
        { label: "Final Volume (V2)", value: 1.0, unit: "L" }
      ],
      substitution: "Substitute C1 = 5 M, V1 = 0.1 L, and V2 = 1.0 L into C2 = (C1 × V1) / V2:",
      intermediateSteps: [
        "1. Identify given inputs: C1 = 5 M, V1 = 0.1 L, V2 = 1.0 L.",
        "2. Confirm volumetric unit consistency: Both V1 and V2 are expressed in Liters (L).",
        "3. Calculate initial solute amount in moles: n = C1 × V1 = 5 mol/L × 0.1 L = 0.5 mol.",
        "4. Divide solute moles by final volume: C2 = 0.5 mol / 1.0 L = 0.5 M."
      ],
      finalResult: "0.5",
      unit: "Molar (M)"
    },
    practicalExample: {
      scenarioTitle: "Preparing a 0.5 M Hydrochloric Acid Working Solution",
      industryContext: "An analytical testing laboratory requires a 0.5 M HCl standard solution for automated acid-base titrations.",
      problemStatement: "The chemist has a 5.0 M concentrated stock solution. What concentration is obtained if a 100 mL (0.1 L) aliquot of the stock is quantitatively transferred to a 1.0 L volumetric flask and filled to the mark with deionized water?",
      engineeringSolution: "Applying C2 = (C1 × V1) / V2: C2 = (5.0 M × 0.1 L) / 1.0 L = 0.50 M HCl. The volume of added deionized water is approximately 900 mL, producing exactly 1.0 L of 0.50 M working titrant."
    },
    assumptions: [
      "Solute mass is strictly conserved during the dilution process with zero chemical decomposition or precipitation.",
      "The solvent and stock solution mix homogeneously without non-ideal excess volume contraction.",
      "Temperature remains constant during mixing, preventing thermal expansion errors.",
      "No chemical reaction occurs between the solute and the added diluent solvent."
    ],
    limitations: [
      "For concentrated solutions (>1 M), volumetric non-ideality (excess volume of mixing) can cause slight deviations from simple volume additivity.",
      "Exothermic dilutions (e.g., concentrated sulfuric acid into water) require cooling to room temperature before final volumetric adjustment.",
      "Does not model pH shifts for weak acids/bases where degree of dissociation increases upon dilution."
    ],
    commonMistakes: [
      "Adding final volume V2 to initial volume V1 instead of recognizing V2 as the total final combined volume.",
      "Mixing incompatible volume units (e.g., multiplying M by mL and dividing by L without unit conversion).",
      "Pouring water into concentrated acid instead of slowly adding acid to water under stirring (safety violation).",
      "Failing to invert and thoroughly mix the volumetric flask after bringing it to the calibration line."
    ],
    bestPractices: [
      "Always use calibrated Class A volumetric pipettes and volumetric flasks for high-precision analytical dilutions.",
      "When preparing aqueous acid dilutions, always add concentrated acid to water slowly with continuous cooling/stirring.",
      "Allow solutions to equilibrate to nominal calibration temperature (typically 20°C or 25°C) before final meniscus adjustment.",
      "Use ultra-pure deionized water (Type I or Type II) to prevent trace mineral contamination in analytical standards."
    ],
    faqs: [
      {
        question: "What does C1V1 = C2V2 mean in chemistry?",
        answer: "C1V1 = C2V2 is the dilution formula, expressing that the moles of solute before dilution (C1 × V1) equal the moles of solute after dilution (C2 × V2), because adding solvent does not change the amount of dissolved solute."
      },
      {
        question: "Can I use milliliters instead of liters in the dilution calculator?",
        answer: "Yes, as long as both V1 and V2 are in the exact same unit (e.g., both in mL or both in L), the units cancel out in the ratio, yielding an accurate concentration result."
      },
      {
        question: "How do I calculate the volume of solvent to add during a dilution?",
        answer: "The volume of solvent to add is approximately V_solvent = V2 - V1, assuming ideal additive volume behavior between the solute aliquot and the diluent."
      },
      {
        question: "Why does the dilution formula not apply to mixing two different solutions?",
        answer: "If two solutions contain different solutes or undergo a chemical reaction (e.g., acid-base neutralization), simple C1V1 = C2V2 cannot be used because solute moles are not independently conserved."
      },
      {
        question: "What is a serial dilution?",
        answer: "A serial dilution is a stepwise series of sequential dilutions where the dilution factor is held constant at each step (e.g., 1:10 or 1:2), commonly used in microbiology and ELISA assays."
      },
      {
        question: "Does dilution change the number of moles of solute in the beaker?",
        answer: "No. Dilution only increases the volume of solvent; the total number of solute moles (n = C × V) remains constant throughout the process."
      },
      {
        question: "Why must solutions cool down before making up to the mark in volumetric flasks?",
        answer: "Dissolution and dilution often have significant enthalpies of mixing. Thermal expansion changes liquid density, causing volumetric errors if adjusted when warm."
      },
      {
        question: "Which standards govern analytical volumetric glassware?",
        answer: "Laboratory volumetric glassware tolerances and calibration protocols are standardized under ASTM E288, ISO 1042, and NIST Circular 602."
      }
    ],
    standardsReferences: [
      { organization: "IUPAC", code: "Green Book (3rd Ed.)", title: "Quantities, Units and Symbols in Physical Chemistry — Section 2.10 Physical Chemistry of Solutions" },
      { organization: "ISO", code: "ISO 1042", title: "Laboratory Glassware — One-Mark Volumetric Flasks" },
      { organization: "ASTM", code: "ASTM E288", title: "Standard Specification for Laboratory Glass Volumetric Flasks" },
      { organization: "NIST", code: "NIST SP 260", title: "Standard Reference Materials: Preparation and Calibration of Analytical Solutions" }
    ],
    internalLinks: {
      parentDiscipline: { id: "chemistry-calc", name: "Chemistry Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 2. MOLARITY CALCULATOR
  "molarity-calculator": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Molarity Calculator | Molar Concentration (mol/L) Solver",
    metaDescription: "Calculate solution molarity (M in mol/L) from solute amount in moles and total solution volume in liters. Features formula derivation, worked steps, and IUPAC guidelines.",
    canonicalUrl,
    introduction: {
      overview: "Molarity (symbol M, expressed in moles per liter or mol/L) is the most widely used concentration unit in quantitative chemistry. Defined as the amount of solute in moles divided by the total volume of the resulting solution in liters, molarity directly connects macroscopic liquid volume measurements with microscopic particle counts via Avogadro's number (6.022 × 10²³ particles/mol). Molarity forms the foundation for stoichiometry calculations in aqueous solution chemistry, reaction kinetics, and chemical equilibrium expressions.",
      applications: [
        "Preparing standard reagent solutions with defined stoichiometric concentrations for chemical titrations.",
        "Formulating culture media, physiological buffers, and saline solutions in biomedical research.",
        "Calculating reaction rates and kinetic rate laws dependent on reactant molar concentrations.",
        "Determining equilibrium constants (Kc) and solubility product constants (Ksp) in aqueous systems."
      ],
      industries: [
        "Analytical Chemistry & Quality Assurance",
        "Pharmaceutical Manufacturing & API Formulation",
        "Biotechnology & Life Sciences",
        "Specialty Chemical Synthesis"
      ]
    },
    quickAnswer: "Molarity (M) is defined as moles of solute (n) divided by total volume of solution (V) in liters: M = n / V. For 0.5 moles of solute dissolved in a total solution volume of 0.25 Liters, the solution molarity is exactly 2.00 M (2.00 mol/L).",
    governingEquation: {
      formula: "M = \\frac{n}{V}",
      explanation: "Molarity (M in mol/L) equals the chemical substance amount of solute (n in moles) divided by the total volume of the homogeneous solution (V in liters). If solute mass (m) and molar mass (MW) are given, n is calculated as m / MW.",
      variables: [
        { symbol: "M", label: "Molarity", unit: "Molar (M or mol/L)", description: "Molar concentration of the dissolved solute in the final solution." },
        { symbol: "n", label: "Solute Amount", unit: "Moles (mol)", description: "Quantity of chemical substance in moles (n = mass / molar mass)." },
        { symbol: "V", label: "Solution Volume", unit: "Liters (L)", description: "Total combined volume of the liquid solution containing the solute." }
      ]
    },
    inputParameters: [
      {
        name: "n",
        label: "Solute Amount (n)",
        unit: "Moles (mol)",
        defaultValue: 0.5,
        explanation: "Amount of chemical solute dissolved. The baseline default is set to 0.5 mol."
      },
      {
        name: "v",
        label: "Solution Volume (V)",
        unit: "Liters (L)",
        defaultValue: 0.25,
        explanation: "Total volume of the homogeneous solution. The baseline default is set to 0.25 L (250 mL)."
      }
    ],
    outputExplanation: {
      unit: "Molar (M)",
      interpretation: "The output value represents the number of moles of solute present in each liter of the final prepared solution.",
      designImpact: "Directly governs stoichiometric reactant proportions in aqueous reactions, ensuring complete conversion without reagent excess or deficiency."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Solute Amount (n)", value: 0.5, unit: "mol" },
        { label: "Solution Volume (V)", value: 0.25, unit: "L" }
      ],
      substitution: "Substitute n = 0.5 mol and V = 0.25 L into M = n / V:",
      intermediateSteps: [
        "1. Identify input quantities: n = 0.5 mol of solute, V = 0.25 L of solution.",
        "2. Check dimensional units: Mole (mol) divided by Liter (L) yields mol/L (Molar).",
        "3. Divide solute moles by volume: M = 0.5 mol / 0.25 L = 2.0 mol/L.",
        "4. Report the resulting concentration: M = 2.00 M."
      ],
      finalResult: "2",
      unit: "Molar (M)"
    },
    practicalExample: {
      scenarioTitle: "Preparing a Sodium Hydroxide Standard Titrant",
      industryContext: "A chemical process laboratory needs to prepare a 2.00 M NaOH solution for acid-gas scrubber monitoring.",
      problemStatement: "A technician dissolves 20.0 grams of solid NaOH (molar mass = 40.00 g/mol, equivalent to 0.50 mol) into deionized water and dilutes the mixture to a total volume of 250 mL (0.25 L). What is the molarity of the resulting solution?",
      engineeringSolution: "First compute moles: n = 20.0 g / 40.00 g/mol = 0.50 mol. Apply M = n / V: M = 0.50 mol / 0.25 L = 2.00 M NaOH. The prepared titrant meets the 2.00 M specification."
    },
    assumptions: [
      "The solute is completely dissolved and evenly dispersed throughout the homogeneous solution.",
      "The volume V represents the total final solution volume (solute + solvent), not just solvent volume.",
      "The solution is measured at standard reference temperature (typically 20°C or 25°C).",
      "No precipitation, crystallization, or unmodeled secondary complexation occurs."
    ],
    limitations: [
      "Molarity is temperature-dependent because liquid solution volume expands or contracts with temperature changes.",
      "In highly concentrated electrolyte solutions, interionic interactions reduce effective chemical activity below analytical molarity.",
      "Does not represent molality (moles solute / kg solvent), which is preferred for colligative property thermodynamics."
    ],
    commonMistakes: [
      "Dividing solute moles by liters of solvent added rather than total final volume of the prepared solution.",
      "Forgetting to convert solution volume from milliliters (mL) to liters (L) before dividing.",
      "Neglecting water of crystallization when calculating molar mass for hydrated salts (e.g., CuSO4·5H2O).",
      "Failing to account for temperature variation when using volumetric solutions prepared at a different ambient temperature."
    ],
    bestPractices: [
      "Dissolve solute in a volume of solvent smaller than the target final volume, then dilute up to the calibration mark in a volumetric flask.",
      "Always include water of hydration in molecular weight calculations when weighing hydrate reagents.",
      "Standardize volumetric solutions against primary reference standards (e.g., KHP for NaOH standardization).",
      "Store prepared standard solutions in airtight, vapor-sealed bottles to prevent evaporative concentration changes."
    ],
    faqs: [
      {
        question: "What is the difference between molarity and molality?",
        answer: "Molarity (M) is moles of solute per liter of total solution, which varies with temperature due to thermal expansion. Molality (m) is moles of solute per kilogram of solvent, which is completely temperature-independent."
      },
      {
        question: "How do you convert grams to moles to find molarity?",
        answer: "Divide the mass of the solute in grams by its molar mass in grams per mole: n (mol) = mass (g) / molar mass (g/mol). Then divide n by solution volume in liters."
      },
      {
        question: "Why is molarity temperature-dependent?",
        answer: "As temperature increases, liquid solutions undergo thermal expansion, causing solution volume (V) to increase. Because V is in the denominator, molarity decreases slightly as temperature rises."
      },
      {
        question: "What is the symbol for molarity?",
        answer: "The official IUPAC unit for molar concentration is mol/L or mol·dm⁻³, often denoted by the capital letter M (e.g., 2.0 M)."
      },
      {
        question: "What is a 1 Molar (1 M) solution?",
        answer: "A 1 Molar solution contains exactly 1 mole of dissolved solute (6.022 × 10²³ formula units) per 1 liter of total solution."
      },
      {
        question: "Can molarity exceed 10 M?",
        answer: "Yes. Highly soluble compounds can achieve high molarities (e.g., concentrated commercial hydrochloric acid is ~12 M, and concentrated sulfuric acid is ~18 M)."
      },
      {
        question: "How does volume change upon dissolving solid solute?",
        answer: "Dissolving solid solute generally increases liquid volume, which is why solutes must be dissolved in partial volume and diluted to the final mark rather than adding a fixed liter of water."
      },
      {
        question: "Which standards define molar concentration units?",
        answer: "Molar concentration standards and base units are defined by IUPAC (Green Book) and the BIPM SI Brochure (9th Edition)."
      }
    ],
    standardsReferences: [
      { organization: "IUPAC", code: "Compendium of Chemical Terminology (Gold Book)", title: "Amount-of-Substance Concentration (Molarity)" },
      { organization: "BIPM", code: "SI Brochure (9th Ed.)", title: "The International System of Units (SI) — Mole as Base Unit for Amount of Substance" },
      { organization: "NIST", code: "NIST SP 330", title: "The International System of Units (SI) — Derived Units for Concentration" },
      { organization: "ISO", code: "ISO 80000-9", title: "Quantities and Units — Physical Chemistry and Molecular Physics" }
    ],
    internalLinks: {
      parentDiscipline: { id: "chemistry-calc", name: "Chemistry Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 3. MOLALITY CALCULATOR
  "molality-calculator": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Molality Calculator | Molal Concentration (mol/kg) Solver",
    metaDescription: "Calculate molal concentration (m in mol/kg) from solute moles and solvent mass in kilograms. Temperature-independent concentration tool for colligative thermodynamics.",
    canonicalUrl,
    introduction: {
      overview: "Molality (symbol m, expressed in moles of solute per kilogram of pure solvent, mol/kg) is an intensive thermodynamic concentration metric. Unlike molarity, which depends on total liquid volume and expands or contracts with temperature fluctuations, molality is determined strictly by mass measurements. Because mass is an invariant property independent of thermal expansion or external pressure, molality remains constant over wide temperature ranges, making it the essential parameter in physical chemistry for colligative property models.",
      applications: [
        "Calculating freezing point depression in automotive coolants, industrial refrigerants, and aircraft de-icing fluids.",
        "Determining boiling point elevation in chemical distillation systems and polymer molecular weight ebullioscopy.",
        "Evaluating thermodynamic activity coefficients and chemical potentials across non-ambient temperature regimes.",
        "Studying osmotic pressure and membrane equilibrium in high-pressure reverse osmosis desalination."
      ],
      industries: [
        "Physical Chemistry & Chemical Thermodynamics",
        "Petrochemical & Coolant Formulation",
        "Food Processing & Cryogenics",
        "Polymer Science & Materials Engineering"
      ]
    },
    quickAnswer: "Molality (m) equals moles of solute (n_solute) divided by the mass of pure solvent in kilograms (m_solvent): m = n_solute / m_solvent. For 0.2 moles of solute dissolved in 0.5 kilograms of solvent, the molality is exactly 0.400 mol/kg (0.400 m).",
    governingEquation: {
      formula: "m = \\frac{n_{\\text{solute}}}{m_{\\text{solvent}}}",
      explanation: "Molality (m in mol/kg) is calculated by dividing the chemical amount of solute (n_solute in moles) by the gravimetric mass of the pure solvent (m_solvent in kilograms).",
      variables: [
        { symbol: "m", label: "Molality", unit: "Molal (mol/kg or m)", description: "Molal concentration of solute in pure solvent." },
        { symbol: "n_solute", label: "Solute Amount", unit: "Moles (mol)", description: "Quantity of dissolved solute substance in moles." },
        { symbol: "m_solvent", label: "Solvent Mass", unit: "Kilograms (kg)", description: "Mass of pure solvent in kilograms (excluding solute mass)." }
      ]
    },
    inputParameters: [
      {
        name: "molesSolute",
        label: "Solute Amount (n)",
        unit: "Moles (mol)",
        defaultValue: 0.2,
        explanation: "Amount of solute dissolved in moles. The baseline default is set to 0.2 mol."
      },
      {
        name: "massSolvent",
        label: "Solvent Mass (m)",
        unit: "Kilograms (kg)",
        defaultValue: 0.5,
        explanation: "Mass of the pure liquid solvent in kilograms. The baseline default is set to 0.5 kg (500 g)."
      }
    ],
    outputExplanation: {
      unit: "Molal (mol/kg)",
      interpretation: "The output value represents the number of moles of solute dissolved per 1 kilogram of pure solvent.",
      designImpact: "Provides a temperature-invariant basis for colligative equations (ΔTf = i × Kf × m and ΔTb = i × Kb × m), ensuring accurate thermal process engineering."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Solute Amount (n_solute)", value: 0.2, unit: "mol" },
        { label: "Solvent Mass (m_solvent)", value: 0.5, unit: "kg" }
      ],
      substitution: "Substitute n_solute = 0.2 mol and m_solvent = 0.5 kg into m = n_solute / m_solvent:",
      intermediateSteps: [
        "1. Identify given values: Solute n = 0.2 mol, Solvent mass = 0.5 kg.",
        "2. Confirm units: Moles (mol) and kilograms (kg) are fundamental SI-compatible units.",
        "3. Divide moles of solute by solvent mass: m = 0.2 mol / 0.5 kg = 0.4 mol/kg.",
        "4. Express result in molal units: m = 0.400 mol/kg (or 0.400 m)."
      ],
      finalResult: "0.4",
      unit: "Molal (mol/kg)"
    },
    practicalExample: {
      scenarioTitle: "Calculating Coolant Molality for Freezing Point Depression",
      industryContext: "An automotive thermal systems engineer is formulating an ethylene glycol aqueous coolant mixture.",
      problemStatement: "The engineer dissolves 12.41 grams of ethylene glycol (C2H6O2, molar mass = 62.07 g/mol, equivalent to 0.20 mol) into 500 grams (0.50 kg) of distilled water. Calculate the molality of the resulting solution.",
      engineeringSolution: "Determine moles: n = 12.41 g / 62.07 g/mol = 0.20 mol. Apply m = n / m_solvent: m = 0.20 mol / 0.50 kg = 0.40 mol/kg. Using the cryoscopic constant for water (Kf = 1.86 °C·kg/mol), the expected freezing point depression is ΔTf = 1.86 × 0.40 = 0.744 °C."
    },
    assumptions: [
      "Solvent mass is measured strictly for the pure solvent before solute addition.",
      "The solute dissolves completely without forming insoluble colloidal suspensions.",
      "The solution is homogeneous throughout the evaluation volume.",
      "The system is treated as non-volatile solvent with negligible solvent evaporation."
    ],
    limitations: [
      "For aqueous solutions at dilute concentrations (<0.1 M) near 4°C, molality and molarity are nearly identical, but diverge significantly at higher concentrations or different temperatures.",
      "Does not directly indicate total solution volume without known solution density data.",
      "Ion pairing and non-ideal activity coefficients must be incorporated via the van 't Hoff factor (i) for electrolyte solutions."
    ],
    commonMistakes: [
      "Dividing solute moles by total solution mass instead of pure solvent mass.",
      "Entering solvent mass in grams without converting to kilograms (producing a 1000x error).",
      "Confusing lowercase 'm' (molality, mol/kg) with uppercase 'M' (molarity, mol/L).",
      "Assuming molality changes when a solution is heated or cooled (molality is invariant with temperature)."
    ],
    bestPractices: [
      "Weigh both solute and solvent on an analytical balance to achieve high gravimetric precision.",
      "Use molality rather than molarity when conducting experiments across temperature gradients (e.g., cryoscopy or ebullioscopy).",
      "When converting between molarity and molality, obtain an accurate experimental measurement of solution density at the operating temperature.",
      "Incorporate the van 't Hoff factor (i) when evaluating colligative properties of ionic salts (e.g., NaCl, CaCl2)."
    ],
    faqs: [
      {
        question: "Why is molality preferred over molarity in thermodynamics?",
        answer: "Molality is defined by mass (kg of solvent), which does not change with temperature or pressure. Molarity uses volume (L of solution), which expands and contracts with thermal changes."
      },
      {
        question: "What is the unit of molality?",
        answer: "The IUPAC SI unit of molality is mol/kg (moles per kilogram), historically symbolized by a lowercase 'm' (e.g., 0.5 m solution)."
      },
      {
        question: "When are molarity and molality approximately equal?",
        answer: "In dilute aqueous solutions at room temperature (~20°C to 25°C) where 1 kg of water occupies approximately 1 Liter of volume, molarity (mol/L) and molality (mol/kg) are nearly identical."
      },
      {
        question: "How do you calculate freezing point depression from molality?",
        answer: "Use the formula ΔTf = i × Kf × m, where i is the van 't Hoff factor, Kf is the cryoscopic constant of the solvent, and m is the molality."
      },
      {
        question: "Does molality change if you add more solvent?",
        answer: "Yes. Adding more solvent increases the mass of the solvent (the denominator), which decreases the molal concentration of the solution."
      },
      {
        question: "Does molality depend on the density of the solution?",
        answer: "No. Molality depends purely on the mass of solute and mass of solvent. Converting between molality and molarity, however, requires solution density."
      },
      {
        question: "How do you calculate molality from mass percent?",
        answer: "For a solution with P% mass concentration: m = [P / (100 - P)] × (1000 / MW_solute), where MW_solute is the molar mass of the solute in g/mol."
      },
      {
        question: "Which standards regulate thermodynamic concentration reporting?",
        answer: "Thermodynamic molal definitions are standardized under IUPAC Green Book recommendations and ISO 80000-9."
      }
    ],
    standardsReferences: [
      { organization: "IUPAC", code: "Green Book (3rd Ed.)", title: "Quantities, Units and Symbols in Physical Chemistry — Section 2.10.1 Molality" },
      { organization: "NIST", code: "NIST Chemistry WebBook (SRD 69)", title: "Thermophysical Properties of Fluid Systems and Aqueous Solutions" },
      { organization: "ISO", code: "ISO 80000-9", title: "Quantities and Units — Part 9: Physical Chemistry and Molecular Physics" },
      { organization: "ASTM", code: "ASTM D1177", title: "Standard Test Method for Freezing Point of Aqueous Engine Coolants" }
    ],
    internalLinks: {
      parentDiscipline: { id: "chemistry-calc", name: "Chemistry Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 4. NORMALITY CALCULATOR
  "normality-calculator": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Normality Calculator | Reactive Equivalent Concentration (N) Solver",
    metaDescription: "Calculate solution normality (N in eq/L) from solute molarity and reaction equivalence factor. Features titration stoichiometry, worked examples, and IUPAC guidelines.",
    canonicalUrl,
    introduction: {
      overview: "Normality (symbol N, expressed in equivalents per liter or eq/L) is a concentration measure that quantifies the reactive capacity of a chemical solution. While molarity describes the total number of solute molecules per liter, normality accounts for the stoichiometric equivalence factor (n_eq)—the number of reactive protons (H⁺), hydroxide ions (OH⁻), or transferred electrons (e⁻) contributed by each molecule during a specific chemical reaction. Normality simplifies volumetric titration stoichiometry because exactly one equivalent of any acid reacts completely with one equivalent of any base (N1V1 = N2V2).",
      applications: [
        "Standardizing acid-base volumetric titrants for industrial quality control assays.",
        "Performing oxidation-reduction (redox) titrations (e.g., permanganometry, iodometry).",
        "Quantifying total water alkalinity, acidity, and mineral hardness (Ca²⁺/Mg²⁺ equivalents).",
        "Controlling chemical bath concentrations in industrial electroplating and metal passivation."
      ],
      industries: [
        "Analytical Chemistry & Titrimetric Quality Control",
        "Municipal Water Treatment & Wastewater Management",
        "Electroplating & Surface Finishing",
        "Environmental Monitoring & Acid Rain Analysis"
      ]
    },
    quickAnswer: "Normality (N) is calculated by multiplying solution molarity (M in mol/L) by the reactive equivalence factor (n_eq in eq/mol): N = M × n_eq. For a 0.5 M solution of a diprotic acid like sulfuric acid (n_eq = 2 eq/mol), the normality is exactly 1.00 N (1.00 eq/L).",
    governingEquation: {
      formula: "N = \\text{Molarity } (M) \\times \\text{Equivalent Factor } (n_{\\text{eq}})",
      explanation: "Normality (N in eq/L or Normal) represents the concentration of reactive equivalents per liter of solution. The equivalent factor (n_eq) is an integer representing reactive protons in acid-base reactions or transferred electrons in redox reactions.",
      variables: [
        { symbol: "N", label: "Normality", unit: "Normal (N or eq/L)", description: "Equivalent concentration of reactive species per liter of solution." },
        { symbol: "M", label: "Molarity", unit: "mol/L (M)", description: "Molar concentration of the solute in the solution." },
        { symbol: "n_eq", label: "Equivalence Factor", unit: "eq/mol", description: "Number of reactive equivalents per mole of solute for the specific reaction." }
      ]
    },
    inputParameters: [
      {
        name: "molarity",
        label: "Molarity (M)",
        unit: "mol/L",
        defaultValue: 0.5,
        explanation: "Molar concentration of the solute in mol/L. The baseline default is set to 0.5 mol/L."
      },
      {
        name: "equivFactor",
        label: "Reactive Equivalents (n_eq)",
        unit: "eq/mol",
        defaultValue: 2,
        explanation: "Number of reactive equivalents per mole of compound. The baseline default is set to 2 (representative of diprotic H2SO4 or divalent Ca2+)."
      }
    ],
    outputExplanation: {
      unit: "Normal (N)",
      interpretation: "The result represents the number of reactive equivalents of acid, base, or redox agent available per liter of solution.",
      designImpact: "Enables direct 1:1 volumetric stoichiometry calculations in titrations: Volume1 × Normality1 = Volume2 × Normality2."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Molarity (M)", value: 0.5, unit: "mol/L" },
        { label: "Equivalent Factor (n_eq)", value: 2, unit: "eq/mol" }
      ],
      substitution: "Substitute M = 0.5 mol/L and n_eq = 2 eq/mol into N = M × n_eq:",
      intermediateSteps: [
        "1. Identify given parameters: M = 0.5 mol/L, n_eq = 2 eq/mol.",
        "2. Dimensional analysis: (mol/L) × (eq/mol) = eq/L (Normal, N).",
        "3. Multiply molarity by equivalence factor: N = 0.5 × 2 = 1.0 eq/L.",
        "4. State the resulting normality: N = 1.00 N."
      ],
      finalResult: "1.0",
      unit: "Normal (N)"
    },
    practicalExample: {
      scenarioTitle: "Sulfuric Acid Titrant Standardization for Alkaline Wastewater",
      industryContext: "An environmental wastewater facility neutralizes continuous alkaline discharge using standard sulfuric acid (H2SO4).",
      problemStatement: "A 0.50 M H2SO4 solution is prepared. Because sulfuric acid can donate two protons (H⁺) per molecule during complete neutralization, its equivalence factor is n_eq = 2. What is the normality of this acid solution?",
      engineeringSolution: "Apply N = M × n_eq: N = 0.50 mol/L × 2 eq/mol = 1.00 N H2SO4. In a titration, 10.0 mL of this 1.00 N H2SO4 will neutralize exactly 10.0 mL of any 1.00 N basic solution (e.g., 1.00 M NaOH)."
    },
    assumptions: [
      "The chemical reaction goes to complete stoichiometric neutralization or complete redox transfer.",
      "The equivalence factor n_eq is explicitly defined for the specific reaction conditions.",
      "The solution is homogeneous without unreacted precipitates.",
      "No interfering side reactions consume the reactive functional groups."
    ],
    limitations: [
      "Normality is reaction-dependent: a compound can have different normalities in different chemical reactions (e.g., KMnO4 has n_eq = 5 in acidic media, but n_eq = 3 in neutral/basic media).",
      "IUPAC discourages normality in modern academic publishing in favor of explicit molar stoichiometry, though it remains widely used in water treatment and pharmacopeial monographs.",
      "Temperature changes alter normality because it is a volume-based concentration metric."
    ],
    commonMistakes: [
      "Assuming normality is an intrinsic property of a chemical rather than dependent on the specific reaction.",
      "Using the wrong equivalence factor (e.g., treating phosphoric acid H3PO4 as n_eq = 3 when titrated only to the first equivalence point with methyl orange where n_eq = 1).",
      "Confusing molarity and normality for monoprotic substances (where n_eq = 1 and N = M).",
      "Failing to standardize secondary volumetric solutions against primary reference standards."
    ],
    bestPractices: [
      "Clearly specify the intended chemical reaction when labeling volumetric reagent bottles with normality.",
      "For redox reactions, write out the balanced half-reaction to determine the exact number of transferred electrons (n_eq).",
      "Standardize normality titrants at the same ambient temperature at which sample titrations will be performed.",
      "Use primary standards such as potassium hydrogen phthalate (KHP) or sodium carbonate (Na2CO3) for titrant calibration."
    ],
    faqs: [
      {
        question: "What is normality in chemistry?",
        answer: "Normality (N) is a concentration unit equal to the number of gram equivalent weights of a solute per liter of solution. It measures the reactive capacity of a solution in acid-base or redox reactions."
      },
      {
        question: "How is normality related to molarity?",
        answer: "Normality equals molarity multiplied by the equivalence factor: N = M × n_eq. For monoprotic acids like HCl, N = M. For diprotic acids like H2SO4, N = 2M."
      },
      {
        question: "What is the equivalence factor (n_eq) for common acids and bases?",
        answer: "For HCl and HNO3, n_eq = 1. For H2SO4, n_eq = 2. For H3PO4 (complete neutralization), n_eq = 3. For NaOH and KOH, n_eq = 1. For Ca(OH)2, n_eq = 2."
      },
      {
        question: "Why is N1V1 = N2V2 used in titrations?",
        answer: "Because one equivalent of acid reacts with exactly one equivalent of base, N_acid × V_acid = N_base × V_base regardless of whether the acid or base is monoprotic, diprotic, or triprotic."
      },
      {
        question: "Can normality change for the same solution in different reactions?",
        answer: "Yes. Potassium permanganate (KMnO4) has n_eq = 5 in acidic solutions (Mn⁷⁺ to Mn²⁺) but n_eq = 3 in alkaline solutions (Mn⁷⁺ to MnO2), changing its normality."
      },
      {
        question: "Why does IUPAC recommend molarity over normality?",
        answer: "IUPAC prefers molarity because molarity is unambiguous and independent of the reaction mechanism, whereas normality depends on how the compound reacts."
      },
      {
        question: "How do you calculate normality from mass and equivalent weight?",
        answer: "Normality = [mass of solute (g) / Equivalent Weight (g/eq)] / Volume (L), where Equivalent Weight = Molar Mass / n_eq."
      },
      {
        question: "Which standards regulate titration normality methods?",
        answer: "Standard titrimetric test methods are governed by ASTM E200 and standard methods for water and wastewater examination (SM 2320)."
      }
    ],
    standardsReferences: [
      { organization: "ASTM", code: "ASTM E200", title: "Standard Practice for Preparation, Standardization, and Storage of Standard and Reagent Solutions for Chemical Analysis" },
      { organization: "IUPAC", code: "Green Book (3rd Ed.)", title: "Quantities, Units and Symbols in Physical Chemistry — Section 2.10 (Concentration Measures)" },
      { organization: "AWWA / APHA", code: "Standard Methods 2320", title: "Standard Methods for the Examination of Water and Wastewater: Alkalinity and Titrimetric Normality" },
      { organization: "USP", code: "USP-NF General Chapter <541>", title: "Titrimetry — Volumetric Reagents and Normality Standardization" }
    ],
    internalLinks: {
      parentDiscipline: { id: "chemistry-calc", name: "Chemistry Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 5. PERCENT CONCENTRATION CALCULATOR
  "percent-concentration": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Percent Concentration Calculator | Mass Percent (% w/w) Solver",
    metaDescription: "Calculate mass percentage concentration (% w/w) from solute mass and solvent mass. Features step-by-step gravimetric solutions, formulas, and ISO/ASTM standards.",
    canonicalUrl,
    introduction: {
      overview: "Mass percent concentration (expressed as % w/w or weight/weight percentage) is a gravimetric concentration metric representing the mass of solute divided by the total mass of the resulting solution, multiplied by 100%. Because mass percent is determined solely by weight measurements on analytical balances, it is completely independent of temperature and pressure variations. Mass percent is widely utilized in industrial chemical manufacturing, pharmaceutical topical formulations, and consumer product labeling.",
      applications: [
        "Formulating pharmaceutical topical ointments, creams, and physiological saline solutions (e.g., 0.9% w/w NaCl).",
        "Preparing industrial chemical blends, metal pickling baths, and electroplating concentrates.",
        "Manufacturing food and beverage products, including brine solutions and sugar syrups (Brix degrees).",
        "Documenting safety data sheets (SDS) and regulatory chemical ingredient disclosures."
      ],
      industries: [
        "Pharmaceutical Formulation & Healthcare",
        "Food & Beverage Manufacturing",
        "Specialty Chemicals & Consumer Products",
        "Materials Processing & Metallurgy"
      ]
    },
    quickAnswer: "Mass percent concentration (% w/w) equals [Solute Mass / (Solute Mass + Solvent Mass)] × 100. For 25 grams of solute dissolved in 225 grams of solvent, the total solution mass is 250 grams, yielding a concentration of exactly 10.00% (w/w).",
    governingEquation: {
      formula: "\\% \\text{ (w/w)} = \\left( \\frac{m_{\\text{solute}}}{m_{\\text{solute}} + m_{\\text{solvent}}} \\right) \\times 100",
      explanation: "Mass percent is the ratio of solute mass (m_solute) to total solution mass (m_solute + m_solvent), expressed as a percentage. The denominator represents the entire combined mass of the mixture.",
      variables: [
        { symbol: "% (w/w)", label: "Mass Percent", unit: "Percentage (%)", description: "Mass concentration of solute per 100 units of total solution mass." },
        { symbol: "m_solute", label: "Solute Mass", unit: "Grams (g)", description: "Gravimetric mass of the pure dissolved solute substance." },
        { symbol: "m_solvent", label: "Solvent Mass", unit: "Grams (g)", description: "Gravimetric mass of the liquid solvent added to dissolve the solute." }
      ]
    },
    inputParameters: [
      {
        name: "soluteMass",
        label: "Solute Mass",
        unit: "Grams (g)",
        defaultValue: 25,
        explanation: "Mass of the solute compound in grams. The baseline default is set to 25 g."
      },
      {
        name: "solventMass",
        label: "Solvent Mass",
        unit: "Grams (g)",
        defaultValue: 225,
        explanation: "Mass of the solvent in grams. The baseline default is set to 225 g."
      }
    ],
    outputExplanation: {
      unit: "Percentage (%)",
      interpretation: "The output value indicates the percentage of the total solution mass that consists of dissolved solute.",
      designImpact: "Provides exact gravimetric formulation ratios for recipe scaling, batch compounding, and safety compliance verification."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Solute Mass (m_solute)", value: 25, unit: "g" },
        { label: "Solvent Mass (m_solvent)", value: 225, unit: "g" }
      ],
      substitution: "Substitute m_solute = 25 g and m_solvent = 225 g into % = [m_solute / (m_solute + m_solvent)] × 100:",
      intermediateSteps: [
        "1. Identify given masses: Solute mass = 25 g, Solvent mass = 225 g.",
        "2. Calculate total solution mass: m_total = 25 g + 225 g = 250 g.",
        "3. Divide solute mass by total mass: Mass fraction = 25 g / 250 g = 0.10.",
        "4. Multiply by 100%: Percent concentration = 0.10 × 100 = 10.00%."
      ],
      finalResult: "10",
      unit: "Percentage (%)"
    },
    practicalExample: {
      scenarioTitle: "Compounding a 10% Saline Solution for Laboratory Use",
      industryContext: "A pharmaceutical compounding technician prepares a stock sodium chloride (NaCl) solution for biological tissue rinsing.",
      problemStatement: "The technician dissolves 25.0 g of analytical grade NaCl into 225.0 g of purified deionized water. Calculate the resulting mass percentage of the saline mixture.",
      engineeringSolution: "Total solution mass = 25.0 g + 225.0 g = 250.0 g. Percent concentration = (25.0 g / 250.0 g) × 100 = 10.00% (w/w) NaCl. The prepared solution matches the 10% target specification."
    },
    assumptions: [
      "Both solute and solvent are non-volatile under the ambient preparation conditions.",
      "The solute dissolves completely to form a single-phase homogeneous solution.",
      "All gravimetric measurements are corrected for tare weight on calibrated balances.",
      "No chemical reaction destroys or alters the solute mass during mixing."
    ],
    limitations: [
      "Mass percent does not directly indicate molar concentration (Molarity) without known solution density.",
      "Differs from volume percent (% v/v) and mass/volume percent (% w/v), which are commonly used for liquid-liquid mixtures and clinical fluids.",
      "Does not reflect chemical stoichiometry or particle counts (mole fraction)."
    ],
    commonMistakes: [
      "Dividing solute mass by solvent mass alone instead of total combined solution mass (solute + solvent).",
      "Confusing mass percent (% w/w) with mass/volume percent (% w/v, grams solute per 100 mL solution).",
      "Mixing incompatible mass units (e.g., adding kilograms of solvent to grams of solute without converting).",
      "Neglecting water of crystallization when weighing hydrate salts for percent active ingredient calculations."
    ],
    bestPractices: [
      "Use calibrated electronic analytical balances with appropriate draft shields for precision weighing.",
      "Label chemical containers clearly with the concentration type, explicitly stating '% w/w' to prevent confusion with '% w/v'.",
      "When converting mass percent to molarity, measure solution density experimentally using a pycnometer or digital density meter.",
      "Account for assay purity percentage when using technical-grade raw materials in industrial batching."
    ],
    faqs: [
      {
        question: "What is the difference between % w/w, % w/v, and % v/v?",
        answer: "% w/w (weight/weight) is grams of solute per 100 g of solution. % w/v (weight/volume) is grams of solute per 100 mL of solution. % v/v (volume/volume) is mL of liquid solute per 100 mL of total solution."
      },
      {
        question: "Why is mass percent (% w/w) independent of temperature?",
        answer: "Mass is an invariant fundamental physical quantity that does not change when heated or cooled. Unlike liquid volume, which expands with temperature, total mass remains constant."
      },
      {
        question: "How do you calculate the mass of solute needed for a target percent concentration?",
        answer: "To prepare a mass m_total of P% solution: Solute Mass = m_total × (P / 100). Solvent Mass = m_total - Solute Mass."
      },
      {
        question: "What is a 5% (w/w) glucose solution?",
        answer: "A 5% (w/w) glucose solution contains exactly 5 grams of pure glucose dissolved in 95 grams of water, creating 100 grams of total solution."
      },
      {
        question: "How do you convert mass percent (% w/w) to molarity (M)?",
        answer: "Use the formula: Molarity = [% w/w × Solution Density (g/mL) × 10] / Molar Mass of Solute (g/mol)."
      },
      {
        question: "Can mass percent exceed 100%?",
        answer: "No. Mass percent represents a fraction of the whole and cannot exceed 100% in a physical mixture."
      },
      {
        question: "What is parts per million (ppm) in terms of mass percent?",
        answer: "1% concentration equals 10,000 parts per million (ppm) by mass (1 ppm = 0.0001% w/w)."
      },
      {
        question: "Which standards regulate gravimetric solution preparation?",
        answer: "Gravimetric chemical preparation methods and tolerances are defined under ASTM E694 and ISO 8655."
      }
    ],
    standardsReferences: [
      { organization: "IUPAC", code: "Green Book (3rd Ed.)", title: "Quantities, Units and Symbols in Physical Chemistry — Section 2.10 Mass Fraction and Percentage" },
      { organization: "ISO", code: "ISO 80000-9", title: "Quantities and Units — Physical Chemistry: Mass Fraction and Mass Ratio" },
      { organization: "ASTM", code: "ASTM E694", title: "Standard Specification for Laboratory Glass Volumetric and Gravimetric Apparatus" },
      { organization: "USP", code: "USP-NF General Notices", title: "Percentage Concentrations in Compounded Pharmaceutical Solutions" }
    ],
    internalLinks: {
      parentDiscipline: { id: "chemistry-calc", name: "Chemistry Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 6. pH CALCULATOR
  "ph-calculator": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "pH Calculator | Aqueous Hydronium Ion Acidity Solver",
    metaDescription: "Calculate aqueous solution pH from hydrogen/hydronium ion concentration [H+] using the logarithmic pH formula. Includes acid-base chemistry and IUPAC reference standards.",
    canonicalUrl,
    introduction: {
      overview: "pH (potential of hydrogen) is a fundamental logarithmic measure of the acidity or basicity of an aqueous solution. Formulated by Danish chemist Søren Sørensen in 1909 and refined by IUPAC, pH is mathematically defined as the negative base-10 logarithm of the active hydrogen or hydronium ion concentration: pH = -log10([H⁺]). In pure water at 25°C, autoionization yields [H⁺] = 1.0 × 10⁻⁷ M, corresponding to a neutral pH of 7.00. Solutions with pH < 7 are acidic, while solutions with pH > 7 are basic or alkaline.",
      applications: [
        "Controlling buffer systems and biological media in cell culture, fermentation, and pharmaceutical synthesis.",
        "Monitoring chemical water treatment, municipal drinking water purification, and industrial effluent compliance.",
        "Optimizing soil pH for agricultural crop nutrient absorption and fertilizer effectiveness.",
        "Regulating food and beverage preservation, enzymatic brewing, and dairy fermentation stability."
      ],
      industries: [
        "Biotechnology & Biopharmaceuticals",
        "Municipal Water & Wastewater Utilities",
        "Food & Beverage Science",
        "Environmental Engineering & Agriculture"
      ]
    },
    quickAnswer: "pH is calculated from hydrogen ion concentration [H+] using the formula pH = -log10([H+]). For a neutral aqueous solution with [H+] = 0.0000001 mol/L (1.0 × 10⁻⁷ M), the calculated pH is exactly 7.00 pH Units.",
    governingEquation: {
      formula: "\\text{pH} = -\\log_{10}([\\text{H}^+])",
      explanation: "pH represents the negative base-10 logarithm of the aqueous hydrogen/hydronium ion molar concentration ([H⁺] in mol/L). Because the scale is logarithmic, each single integer change in pH represents a tenfold (10x) change in hydronium ion concentration.",
      variables: [
        { symbol: "pH", label: "pH Value", unit: "pH Units (dimensionless)", description: "Logarithmic measure of aqueous solution acidity or basicity." },
        { symbol: "[H+]", label: "Hydrogen Ion Concentration", unit: "Molar (mol/L or M)", description: "Molar concentration of active hydronium ions in aqueous solution." }
      ]
    },
    inputParameters: [
      {
        name: "hConc",
        label: "Hydrogen Ion [H+]",
        unit: "Molar (mol/L)",
        defaultValue: 0.0000001,
        explanation: "Molar concentration of hydrogen/hydronium ions. The baseline default is set to 0.0000001 M (1.0 × 10⁻⁷ M, neutral water at 25°C)."
      }
    ],
    outputExplanation: {
      unit: "pH Units",
      interpretation: "The output value quantifies the acidity of the solution on the standard 0 to 14 logarithmic pH scale at 25°C.",
      designImpact: "Critical for maintaining physiological enzymatic function, preventing pipe corrosion in municipal water grids, and controlling chemical precipitation reactions."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Hydrogen Ion Concentration [H+]", value: 0.0000001, unit: "mol/L" }
      ],
      substitution: "Substitute [H+] = 1.0 × 10⁻⁷ mol/L into pH = -log10([H+]):",
      intermediateSteps: [
        "1. Identify given hydrogen ion concentration: [H+] = 0.0000001 M = 1.0 × 10⁻⁷ mol/L.",
        "2. Apply base-10 logarithm: log10(1.0 × 10⁻⁷) = -7.00.",
        "3. Invert the sign: pH = -(-7.00) = 7.00.",
        "4. Interpret result: pH 7.00 corresponds to neutral water at 25°C."
      ],
      finalResult: "7.0",
      unit: "pH Units"
    },
    practicalExample: {
      scenarioTitle: "Evaluating Acidity of Dilute Hydrochloric Acid Cleaning Rinse",
      industryContext: "A pharmaceutical manufacturing equipment wash cycle uses a dilute hydrochloric acid rinse to remove mineral scales.",
      problemStatement: "The automated analytical sensor measures a hydronium ion concentration of [H+] = 0.001 M (1.0 × 10⁻³ mol/L). What is the pH of the acid rinse solution?",
      engineeringSolution: "Apply pH = -log10([H+]): pH = -log10(1.0 × 10⁻³) = -(-3.00) = 3.00 pH Units. A pH of 3.00 verifies the acid wash is within the effective descaling operating window (pH 2.5 to 3.5)."
    },
    assumptions: [
      "The solvent is pure aqueous water at a standard reference temperature of 25°C (298.15 K).",
      "The activity coefficient (γ) of the hydronium ion is assumed to be unity (γ ≈ 1.0), valid for dilute solutions (ionic strength < 0.1 M).",
      "The system is at equilibrium with no unmodeled dynamic acid-base kinetics.",
      "Atmospheric carbon dioxide absorption is neglected or controlled in closed vessels."
    ],
    limitations: [
      "In concentrated electrolyte solutions, interionic interactions reduce thermodynamic ion activity, causing measured electrochemical pH to deviate from simple concentration -log10([H+]).",
      "The neutral pH point shifts with temperature because the water autoionization constant (Kw) is temperature-dependent (neutral pH is 7.47 at 0°C and 6.14 at 100°C).",
      "Extremely concentrated strong acids can yield negative pH values (e.g., 2 M HCl has pH ≈ -0.3)."
    ],
    commonMistakes: [
      "Assuming a pH change from 7 to 5 is a 2x increase in acidity rather than a 100x increase (10² = 100).",
      "Forgetting that pH is temperature-dependent and failing to use temperature-compensated pH meters.",
      "Entering [H+] in scientific notation incorrectly into manual calculators without appropriate exponential brackets.",
      "Confusing hydrogen ion concentration [H+] with hydroxide ion concentration [OH-] without applying Kw = [H+][OH-] = 1.0 × 10⁻¹⁴."
    ],
    bestPractices: [
      "Calibrate electrochemical pH glass electrodes daily using fresh standard NIST-traceable buffer solutions (pH 4.01, 7.00, 10.01).",
      "Always enable Automatic Temperature Compensation (ATC) on laboratory pH meters during measurement.",
      "Report pH measurements to two decimal places (e.g., pH 7.00), noting that only digits after the decimal point represent significant figures in logarithmic quantities.",
      "Store pH electrodes in appropriate storage electrolyte (3 M KCl) rather than deionized water to prevent glass membrane degradation."
    ],
    faqs: [
      {
        question: "What is the formula for calculating pH?",
        answer: "The formula is pH = -log10([H+]), where [H+] is the molar concentration of hydrogen/hydronium ions in moles per liter (mol/L)."
      },
      {
        question: "Why is pH 7 considered neutral?",
        answer: "At 25°C, pure water autoionizes into equal concentrations of [H+] and [OH-], each equal to 1.0 × 10⁻⁷ M. Taking -log10(10⁻⁷) yields exactly pH 7.00."
      },
      {
        question: "Can pH be negative or greater than 14?",
        answer: "Yes. Highly concentrated strong acids (e.g., 10 M HCl) have pH values below 0, and concentrated strong bases (e.g., 10 M NaOH) have pH values exceeding 14."
      },
      {
        question: "How does temperature affect pH?",
        answer: "Water autoionization is an endothermic process (Kw increases with temperature). As temperature rises, [H+] increases in pure water, dropping the neutral pH point (e.g., neutral pH is 6.63 at 50°C)."
      },
      {
        question: "How do you calculate [H+] from a known pH value?",
        answer: "Invert the logarithmic formula: [H+] = 10^(-pH). For example, if pH = 3, then [H+] = 10⁻³ = 0.001 mol/L."
      },
      {
        question: "What is the relationship between pH and pOH?",
        answer: "In aqueous solutions at 25°C, pH and pOH are linked by the water autoionization constant: pH + pOH = 14.00."
      },
      {
        question: "Why are significant figures in pH counted only after the decimal point?",
        answer: "In logarithmic quantities, the integer before the decimal point (the characteristic) indicates the order of magnitude (exponent), while the digits after the decimal point (the mantissa) convey the precision of the measurement."
      },
      {
        question: "Which standards govern electrochemical pH measurement?",
        answer: "Electrochemical pH measurement procedures and primary standard buffer definitions are regulated by IUPAC Recommendations and ASTM D1293."
      }
    ],
    standardsReferences: [
      { organization: "IUPAC", code: "Pure Appl. Chem., Vol. 74", title: "Measurement of pH: Definition, Standards, and Procedures (IUPAC Recommendations 2002)" },
      { organization: "ASTM", code: "ASTM D1293", title: "Standard Test Methods for pH of Water" },
      { organization: "NIST", code: "NIST SP 260-53", title: "Standard Reference Materials: Standard Buffer Solutions for pH Calibration" },
      { organization: "ISO", code: "ISO 10523", title: "Water Quality — Determination of pH" }
    ],
    internalLinks: {
      parentDiscipline: { id: "chemistry-calc", name: "Chemistry Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  })

};
