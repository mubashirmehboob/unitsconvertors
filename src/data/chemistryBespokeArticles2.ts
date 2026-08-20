import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * Production-quality bespoke articles for Chemistry Calculators (Part 2).
 * Adheres strictly to CHEMISTRY CALCULATOR ARTICLE TEMPLATE V1.0.
 * Covers:
 * 7. pOH Calculator (poh-calculator)
 * 8. Beer-Lambert Law Calculator (beer-lambert-law)
 * 9. Reaction Yield Calculator (reaction-yield)
 * 10. Ideal Gas Volume Calculator (chemistry-ideal-gas-law)
 * 11. Specific Heat Energy Calculator (chemistry-specific-heat)
 * 12. Reaction Enthalpy Calculator (reaction-enthalpy)
 */

export const chemistryBespokeArticlesPart2: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {

  // 7. pOH CALCULATOR
  "poh-calculator": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "pOH Calculator | Hydroxide Ion Alkalinity Solver",
    metaDescription: "Calculate aqueous solution pOH from hydroxide ion concentration [OH-] using the logarithmic formula pOH = -log10([OH-]). Includes water autoionization and IUPAC standards.",
    canonicalUrl,
    introduction: {
      overview: "pOH (potential of hydroxide) is the logarithmic measure of hydroxide ion alkalinity in an aqueous solution. Defined mathematically as the negative base-10 logarithm of the hydroxide ion molar concentration (pOH = -log10([OH⁻])), pOH provides a direct quantitative parameter for evaluating basic and alkaline chemical media. In pure water and neutral aqueous solutions at 25°C, autoionization produces [OH⁻] = 1.0 × 10⁻⁷ M, corresponding to a pOH of 7.00. Strongly alkaline solutions feature low pOH values (<7), while acidic solutions exhibit high pOH values (>7).",
      applications: [
        "Monitoring alkaline cleaning baths, industrial caustic degreasers, and CIP (clean-in-place) sanitation cycles.",
        "Formulating lime and sodium hydroxide dosage for acid mine drainage and industrial wastewater neutralization.",
        "Controlling precipitation and hydrometallurgical extraction of metal hydroxides (e.g., Al(OH)3, Fe(OH)3).",
        "Evaluating chemical equilibrium and base dissociation constants (Kb) for weak organic bases and amine pharmaceuticals."
      ],
      industries: [
        "Chemical Manufacturing & Processing",
        "Industrial Cleaning & Sanitation Engineering",
        "Mining, Metallurgy & Mineral Extraction",
        "Environmental & Industrial Wastewater Treatment"
      ]
    },
    quickAnswer: "pOH is calculated from hydroxide ion concentration [OH-] using the formula pOH = -log10([OH-]). For an alkaline solution with [OH-] = 0.0001 mol/L (1.0 × 10⁻⁴ M), the calculated pOH is exactly 4.00 pOH Units (corresponding to a pH of 10.00 at 25°C).",
    governingEquation: {
      formula: "\\text{pOH} = -\\log_{10}([\\text{OH}^-])",
      explanation: "pOH represents the negative base-10 logarithm of the aqueous hydroxide ion molar concentration ([OH⁻] in mol/L). In aqueous systems at standard temperature (25°C), pOH is directly coupled to pH through the water ion-product constant: pH + pOH = 14.00.",
      variables: [
        { symbol: "pOH", label: "pOH Value", unit: "pOH Units (dimensionless)", description: "Logarithmic measure of aqueous solution alkalinity." },
        { symbol: "[OH-]", label: "Hydroxide Ion Concentration", unit: "Molar (mol/L or M)", description: "Molar concentration of active hydroxide ions in aqueous solution." }
      ]
    },
    inputParameters: [
      {
        name: "ohConc",
        label: "Hydroxide Ion [OH-]",
        unit: "Molar (mol/L)",
        defaultValue: 0.0001,
        explanation: "Molar concentration of hydroxide ions. The baseline default is set to 0.0001 M (1.0 × 10⁻⁴ M, representative of a dilute alkaline solution)."
      }
    ],
    outputExplanation: {
      unit: "pOH Units",
      interpretation: "The output value quantifies the basicity of the solution on the logarithmic pOH scale.",
      designImpact: "Governs base reagent dosing, saponification rates in soap manufacture, and caustic stress corrosion cracking risk in boiler feedwaters."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Hydroxide Ion Concentration [OH-]", value: 0.0001, unit: "mol/L" }
      ],
      substitution: "Substitute [OH-] = 1.0 × 10⁻⁴ mol/L into pOH = -log10([OH-]):",
      intermediateSteps: [
        "1. Identify given hydroxide ion concentration: [OH-] = 0.0001 M = 1.0 × 10⁻⁴ mol/L.",
        "2. Evaluate the base-10 logarithm: log10(1.0 × 10⁻⁴) = -4.00.",
        "3. Apply negative sign: pOH = -(-4.00) = 4.00.",
        "4. Calculate corresponding pH at 25°C: pH = 14.00 - pOH = 14.00 - 4.00 = 10.00 (moderately basic)."
      ],
      finalResult: "4.0",
      unit: "pOH Units"
    },
    practicalExample: {
      scenarioTitle: "Evaluating Alkaline Caustic Rinse Bath for Semiconductor Wafer Cleaning",
      industryContext: "A semiconductor cleanroom uses a dilute ammonium hydroxide cleaning rinse during silicon wafer processing.",
      problemStatement: "The process analytical sensor detects a hydroxide ion concentration of [OH-] = 0.0001 mol/L (1.0 × 10⁻⁴ M). Determine the pOH of the cleaning bath and its corresponding pH at 25°C.",
      engineeringSolution: "Apply pOH = -log10([OH-]): pOH = -log10(1.0 × 10⁻⁴) = 4.00. At 25°C, pH = 14.00 - 4.00 = 10.00. This confirms the cleaning bath is within the target wafer degreasing range (pH 9.8 to 10.2)."
    },
    assumptions: [
      "The solvent is aqueous water at a standard reference temperature of 25°C (298.15 K).",
      "The activity coefficient (γ) of hydroxide ions is unity (γ ≈ 1.0), valid for dilute solutions (ionic strength < 0.1 M).",
      "The system has reached chemical equilibrium with complete base dissociation or steady-state ionization.",
      "Carbon dioxide uptake from atmospheric air (which forms carbonic acid and neutralizes hydroxide) is controlled."
    ],
    limitations: [
      "In highly concentrated caustic solutions (>1 M NaOH or KOH), ion pairing and reduced solvent activity cause deviations from simple logarithmic concentration formulas.",
      "The relationship pH + pOH = 14.00 is strictly true only at 25°C; at higher temperatures (e.g., 60°C where pKw = 13.02), pH + pOH = 13.02.",
      "Concentrated strong bases can produce negative pOH values (e.g., 2 M NaOH has pOH ≈ -0.3)."
    ],
    commonMistakes: [
      "Confusing pOH with pH (e.g., assuming a low pOH of 2 indicates an acidic solution rather than a strongly basic solution).",
      "Assuming pH + pOH = 14 holds true at elevated boiler temperatures without temperature correction of Kw.",
      "Calculating [OH-] for polybasic bases (like Ca(OH)2) without multiplying base molarity by the number of dissociable hydroxide ions.",
      "Failing to account for atmospheric CO2 neutralization when measuring unbuffered alkaline standard solutions."
    ],
    bestPractices: [
      "Always state both the pOH and the measurement temperature, noting the operating pKw of water at that temperature.",
      "For weak bases (such as NH3), calculate equilibrium [OH-] using the base dissociation constant (Kb) before applying pOH = -log10([OH-]).",
      "Store concentrated alkaline standards in alkali-resistant polymer bottles (HDPE/PTFE) rather than soda-lime glass to prevent silicate leaching.",
      "Use temperature-compensated instrumentation for automated chemical feed control in industrial scrubbers."
    ],
    faqs: [
      {
        question: "What is the formula for calculating pOH?",
        answer: "The formula is pOH = -log10([OH-]), where [OH-] is the molar concentration of hydroxide ions in moles per liter (mol/L)."
      },
      {
        question: "How do you convert pOH to pH?",
        answer: "At 25°C, use the relationship pH = 14.00 - pOH. For example, if pOH = 4.00, then pH = 14.00 - 4.00 = 10.00."
      },
      {
        question: "What is a low pOH value indicative of?",
        answer: "A low pOH value (e.g., pOH < 7) indicates a high concentration of hydroxide ions, meaning the solution is basic or alkaline."
      },
      {
        question: "What is neutral pOH at 25°C?",
        answer: "At 25°C, neutral water has [OH-] = 1.0 × 10⁻⁷ M, which gives pOH = -log10(10⁻⁷) = 7.00."
      },
      {
        question: "How do you calculate [OH-] from a known pOH value?",
        answer: "Invert the logarithmic formula: [OH-] = 10^(-pOH). For example, if pOH = 4, then [OH-] = 10⁻⁴ = 0.0001 mol/L."
      },
      {
        question: "Why does pH + pOH = 14 at 25°C?",
        answer: "The autoionization of water has an equilibrium constant Kw = [H+][OH-] = 1.0 × 10⁻¹⁴ at 25°C. Taking the negative logarithm of both sides yields -log(Kw) = -log[H+] + -log[OH-], or 14.00 = pH + pOH."
      },
      {
        question: "Can pOH be negative?",
        answer: "Yes. In concentrated strong bases with [OH-] > 1 M (such as 2 M NaOH), taking -log10(2) yields pOH = -0.30."
      },
      {
        question: "Which standards define aqueous alkalinity and pOH methods?",
        answer: "Aqueous alkalinity standards and analytical procedures are defined by IUPAC Recommendations and ASTM D1067."
      }
    ],
    standardsReferences: [
      { organization: "IUPAC", code: "Green Book (3rd Ed.)", title: "Quantities, Units and Symbols in Physical Chemistry — Section 2.10.4 Acidity and Alkalinity Constants" },
      { organization: "ASTM", code: "ASTM D1067", title: "Standard Test Methods for Acidity or Alkalinity of Water" },
      { organization: "NIST", code: "NIST Chemistry WebBook (SRD 69)", title: "Thermochemical Properties of Aqueous Hydroxide and Autoionization of Water" },
      { organization: "ISO", code: "ISO 9963", title: "Water Quality — Determination of Alkalinity" }
    ],
    internalLinks: {
      parentDiscipline: { id: "chemistry-calc", name: "Chemistry Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 8. BEER-LAMBERT LAW CALCULATOR
  "beer-lambert-law": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Beer-Lambert Law Calculator | Spectrophotometric Absorbance Solver",
    metaDescription: "Calculate optical absorbance (A) using the Beer-Lambert Law formula A = ε × c × l from molar absorptivity, concentration, and cuvette path length.",
    canonicalUrl,
    introduction: {
      overview: "The Beer-Lambert Law (also known as Beer's Law or the Beer-Lambert-Bouguer Law) describes the linear relationship between the attenuation of monochromatic light traveling through a chemical sample and the physical properties of the absorbing substance. Governed by the equation A = ε × c × l, optical absorbance (A) is directly proportional to the molar absorptivity (ε, or extinction coefficient) of the chemical chromophore, the molar concentration (c) of the analyte, and the optical path length (l) of the sample cuvette. This law serves as the quantitative foundation for UV-Visible and infrared spectrophotometry.",
      applications: [
        "Quantifying protein, DNA, and RNA concentrations in molecular biology using UV spectrophotometry (A260/A280 assays).",
        "Performing quantitative pharmaceutical dissolution testing and active pharmaceutical ingredient (API) assay verification.",
        "Monitoring real-time enzyme kinetics and chemical reaction rates by tracking optical density shifts over time.",
        "Measuring trace metal and contaminant concentrations in environmental water samples via colorimetric complexation."
      ],
      industries: [
        "Analytical Biochemistry & Molecular Biology",
        "Pharmaceutical Quality Control & Assurance",
        "Clinical Diagnostic Laboratories",
        "Environmental Monitoring & Water Analysis"
      ]
    },
    quickAnswer: "The Beer-Lambert Law states that Absorbance (A) equals molar absorptivity (ε) multiplied by molar concentration (c) and optical path length (l): A = ε × c × l. For a substance with ε = 15,000 L/(mol·cm), c = 0.00005 mol/L (5.0 × 10⁻⁵ M), and path length l = 1.0 cm, the calculated absorbance is exactly 0.750 Absorbance units.",
    governingEquation: {
      formula: "A = \\varepsilon \\times c \\times l",
      explanation: "Absorbance (A, dimensionless optical density) is calculated as the product of molar absorptivity (ε in L/(mol·cm)), molar concentration (c in mol/L), and optical path length (l in cm). Absorbance is related to light transmittance (T = I / I0) by A = -log10(T) = 2 - log10(%T).",
      variables: [
        { symbol: "A", label: "Absorbance", unit: "Absorbance Units (AU, dimensionless)", description: "Logarithmic measure of monochromatic light absorbed by the sample." },
        { symbol: "ε", label: "Molar Absorptivity", unit: "L/(mol·cm) or M⁻¹·cm⁻¹", description: "Intrinsic chemical property quantifying light absorption at a specific wavelength." },
        { symbol: "c", label: "Molar Concentration", unit: "Molar (mol/L or M)", description: "Concentration of the light-absorbing chromophore in solution." },
        { symbol: "l", label: "Optical Path Length", unit: "Centimeters (cm)", description: "Internal linear distance traversed by light through the sample cuvette." }
      ]
    },
    inputParameters: [
      {
        name: "epsilon",
        label: "Molar Absorptivity (ε)",
        unit: "L/(mol·cm)",
        defaultValue: 15000,
        explanation: "Molar extinction coefficient of the absorbing compound at the analytical wavelength. The baseline default is set to 15,000 L/(mol·cm)."
      },
      {
        name: "c",
        label: "Concentration (c)",
        unit: "Molar (mol/L)",
        defaultValue: 0.00005,
        explanation: "Molar concentration of the analyte. The baseline default is set to 0.00005 M (5.0 × 10⁻⁵ mol/L)."
      },
      {
        name: "l",
        label: "Path Length (l)",
        unit: "Centimeters (cm)",
        defaultValue: 1.0,
        explanation: "Internal optical path length of the spectrophotometer cuvette. The baseline default is set to standard 1.0 cm."
      }
    ],
    outputExplanation: {
      unit: "Absorbance (A)",
      interpretation: "The computed value represents the optical absorbance (AU) of the sample at the measurement wavelength.",
      designImpact: "Enables standard calibration curve interpolation and concentration quantification within the linear dynamic range of the spectrophotometer (typically A = 0.1 to 1.5)."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Molar Absorptivity (ε)", value: 15000, unit: "L/(mol·cm)" },
        { label: "Concentration (c)", value: 0.00005, unit: "mol/L" },
        { label: "Path Length (l)", value: 1.0, unit: "cm" }
      ],
      substitution: "Substitute ε = 15000 L/(mol·cm), c = 0.00005 mol/L, and l = 1.0 cm into A = ε × c × l:",
      intermediateSteps: [
        "1. Identify given spectrophotometric inputs: ε = 15000 L/(mol·cm), c = 5.0 × 10⁻⁵ mol/L, l = 1.0 cm.",
        "2. Check dimensional cancellation: [L / (mol·cm)] × [mol / L] × [cm] = dimensionless Absorbance.",
        "3. Multiply terms: A = 15000 × 0.00005 × 1.0 = 0.750.",
        "4. Calculate corresponding percent transmittance: %T = 10^(2 - A) = 10^(2 - 0.75) = 10^1.25 = 17.78% transmittance."
      ],
      finalResult: "0.75",
      unit: "Absorbance (A)"
    },
    practicalExample: {
      scenarioTitle: "Spectrophotometric Quantification of a Fluorescent Dye Standard",
      industryContext: "A quality assurance laboratory quantifies the concentration of an active dye tracer used in microfluidic diagnostics.",
      problemStatement: "The dye has a known molar absorptivity of ε = 15,000 L/(mol·cm) at its absorption peak (λ_max = 520 nm). A prepared solution has a concentration of 0.00005 M (50 μM) and is placed in a standard 1.0 cm quartz cuvette. What absorbance should the spectrophotometer read?",
      engineeringSolution: "Apply A = ε × c × l: A = 15,000 L/(mol·cm) × 0.00005 mol/L × 1.0 cm = 0.750 Absorbance units. Because 0.750 falls within the optimal linear detector range (0.2 to 1.0), this concentration provides excellent photometric accuracy without detector saturation."
    },
    assumptions: [
      "The incident radiation is strictly monochromatic (single wavelength with narrow bandwidth).",
      "Absorbing chromophore molecules act independently of one another without molecular aggregation or dimerization.",
      "The absorbing medium is optically homogeneous and free from light-scattering particulate matter.",
      "Reflective losses at cuvette interfaces and solvent background absorbance are fully zeroed using a blank reference."
    ],
    limitations: [
      "Deviates from linearity at high concentrations (c > 0.01 M) due to electrostatic and refractive index changes.",
      "Chemical equilibria shifts (e.g., pH-dependent acid-base tautomerism or complex dissociation) alter effective ε.",
      "Stray light within the spectrophotometer monochrometer causes negative absorbance deviations at high optical densities (A > 2.0)."
    ],
    commonMistakes: [
      "Operating outside the linear dynamic range (e.g., attempting measurements at A > 2.5 where detector noise dominates).",
      "Using dirty, scratched, or mismatched cuvettes that introduce optical scattering and reflection errors.",
      "Failing to zero (blank) the spectrophotometer with the pure solvent before reading sample absorbance.",
      "Entering path length in millimeters rather than centimeters without adjusting the unit of molar absorptivity."
    ],
    bestPractices: [
      "Select an analytical wavelength corresponding to an absorption maximum (λ_max) where rate of absorbance change with wavelength (dA/dλ) is zero.",
      "Dilute samples so that measured absorbance values fall within the optimal photometric range of 0.2 to 0.8 AU.",
      "Use optical-grade quartz cuvettes for UV measurements (<340 nm) and optical glass or disposable polystyrene for visible light.",
      "Always orient cuvettes with optical clear faces aligned perpendicular to the incident light beam."
    ],
    faqs: [
      {
        question: "What is the Beer-Lambert Law formula?",
        answer: "The Beer-Lambert Law formula is A = ε × c × l, where A is absorbance, ε is molar absorptivity in L/(mol·cm), c is molar concentration in mol/L, and l is path length in cm."
      },
      {
        question: "What is the difference between absorbance and transmittance?",
        answer: "Transmittance (T) is the fraction of light passing through the sample (T = I / I0). Absorbance (A) is the negative logarithm of transmittance: A = -log10(T)."
      },
      {
        question: "Why does the Beer-Lambert Law fail at high concentrations?",
        answer: "At high concentrations (>0.01 M), absorbing molecules come close enough together to alter each other's charge distributions, shifting absorption wavelengths and causing non-linear deviations."
      },
      {
        question: "What are the units of molar absorptivity (ε)?",
        answer: "The standard IUPAC units for molar absorptivity are L/(mol·cm) or M⁻¹·cm⁻¹."
      },
      {
        question: "What is the optimal absorbance range on a spectrophotometer?",
        answer: "The most accurate photometric range for standard UV-Vis spectrophotometers is between 0.1 and 1.0 AU (corresponding to ~10% to ~80% light transmittance)."
      },
      {
        question: "How do you calculate concentration from a measured absorbance?",
        answer: "Rearrange the Beer-Lambert Law: c = A / (ε × l). For example, if A = 0.50, ε = 10,000, and l = 1 cm, then c = 0.50 / (10,000 × 1) = 5.0 × 10⁻⁵ M."
      },
      {
        question: "Why are quartz cuvettes required for UV spectroscopy?",
        answer: "Standard glass and plastic cuvettes absorb ultraviolet light below 340 nm, blocking transmission. Quartz is optically transparent down to ~190 nm."
      },
      {
        question: "Which standards regulate spectrophotometer calibration?",
        answer: "Spectrophotometer wavelength accuracy and photometric linearity are standardized under ASTM E275, ASTM E925, and NIST SRM 930."
      }
    ],
    standardsReferences: [
      { organization: "IUPAC", code: "Pure Appl. Chem., Vol. 79", title: "Glossary of Terms Used in Photochemistry (IUPAC Recommendations 2006) — Beer-Lambert Law" },
      { organization: "ASTM", code: "ASTM E275", title: "Standard Practice for Describing and Measuring Performance of Ultraviolet and Visible Spectrophotometers" },
      { organization: "ASTM", code: "ASTM E925", title: "Standard Practice for Monitoring the Calibration of Ultraviolet-Visible Spectrophotometers" },
      { organization: "NIST", code: "NIST SP 260-202", title: "Standard Reference Materials: Holmium Oxide and Neutral Density Filters for Spectrophotometry" }
    ],
    internalLinks: {
      parentDiscipline: { id: "chemistry-calc", name: "Chemistry Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 9. REACTION YIELD CALCULATOR
  "reaction-yield": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Reaction Yield Calculator | Percent Chemical Yield (% Yield) Solver",
    metaDescription: "Calculate percentage chemical reaction yield (% Yield) from isolated actual product mass and stoichiometric theoretical yield. Includes Green Chemistry metrics.",
    canonicalUrl,
    introduction: {
      overview: "Reaction yield (expressed as percent yield, % Yield) is the primary quantitative metric used to assess the efficiency and completeness of a chemical synthesis. Defined as the ratio of the actual experimentally isolated product mass to the stoichiometric maximum theoretical yield, multiplied by 100%, percent yield reflects chemical reaction conversion, selectivity, and purification efficiency. Maximizing percent yield while minimizing side-product generation is a core objective of synthetic process development and Green Chemistry.",
      applications: [
        "Evaluating synthetic pathway efficiency and reaction optimization during pharmaceutical drug candidate synthesis.",
        "Assessing process mass intensity (PMI), atom economy, and material conversion in chemical manufacturing scale-up.",
        "Auditing organic laboratory yields in multi-step natural product and polymer polymerizations.",
        "Validating pilot-plant batch consistency against active pharmaceutical ingredient (API) regulatory yield specifications."
      ],
      industries: [
        "Organic Synthesis & Specialty Fine Chemicals",
        "Pharmaceutical API Manufacturing",
        "Petrochemical & Polymer Production",
        "Academic & Industrial Chemical Research"
      ]
    },
    quickAnswer: "Percent reaction yield (% Yield) is calculated as (Actual Yield / Theoretical Yield) × 100. For an isolated actual mass of 14.2 grams against a stoichiometric theoretical mass of 18.5 grams, the calculated percent yield is exactly 76.76%.",
    governingEquation: {
      formula: "\\% \\text{ Yield} = \\left( \\frac{m_{\\text{actual}}}{m_{\\text{theoretical}}} \\right) \\times 100",
      explanation: "Percent yield compares the actual isolated mass of purified product (m_actual in grams) to the maximum theoretical mass (m_theoretical in grams) predicted from the limiting reagent stoichiometry assuming 100% conversion.",
      variables: [
        { symbol: "% Yield", label: "Percent Yield", unit: "Percentage (%)", description: "Ratio of isolated product mass to theoretical maximum mass expressed as a percentage." },
        { symbol: "m_actual", label: "Actual Product Mass", unit: "Grams (g)", description: "Experimentally isolated, dried, and purified mass of the reaction product." },
        { symbol: "m_theoretical", label: "Theoretical Mass", unit: "Grams (g)", description: "Maximum stoichiometric product mass calculated from the limiting reagent." }
      ]
    },
    inputParameters: [
      {
        name: "actual",
        label: "Actual Product Mass",
        unit: "Grams (g)",
        defaultValue: 14.2,
        explanation: "Purified mass of product obtained from laboratory isolation. The baseline default is set to 14.2 g."
      },
      {
        name: "theoretical",
        label: "Theoretical Mass",
        unit: "Grams (g)",
        defaultValue: 18.5,
        explanation: "Theoretical maximum mass predicted by stoichiometric calculation. The baseline default is set to 18.5 g."
      }
    ],
    outputExplanation: {
      unit: "Percentage (%)",
      interpretation: "The output value represents the percentage efficiency of the chemical transformation relative to the theoretical limit.",
      designImpact: "Directly determines raw material costs, required reactor vessel volumes, waste handling requirements, and overall commercial process viability."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Actual Product Mass (m_actual)", value: 14.2, unit: "g" },
        { label: "Theoretical Product Mass (m_theoretical)", value: 18.5, unit: "g" }
      ],
      substitution: "Substitute m_actual = 14.2 g and m_theoretical = 18.5 g into % Yield = (m_actual / m_theoretical) × 100:",
      intermediateSteps: [
        "1. Identify experimental values: Actual isolated mass = 14.2 g, Stoichiometric theoretical yield = 18.5 g.",
        "2. Verify gravimetric units: Both masses are in grams (g), making the ratio dimensionless.",
        "3. Divide actual mass by theoretical mass: Yield fraction = 14.2 g / 18.5 g = 0.767568.",
        "4. Multiply by 100%: Percent yield = 0.767568 × 100 = 76.76%."
      ],
      finalResult: "76.76",
      unit: "Percentage (%)"
    },
    practicalExample: {
      scenarioTitle: "Esterification Synthesis of Ethyl Acetate",
      industryContext: "An organic synthesis laboratory performs an acid-catalyzed esterification of acetic acid with excess ethanol to produce ethyl acetate.",
      problemStatement: "Based on 15.0 g of limiting acetic acid, stoichiometric calculations predict a theoretical yield of 18.5 g of ethyl acetate. Following fractional distillation, the chemist isolates 14.2 g of pure ethyl acetate. Calculate the percent reaction yield.",
      engineeringSolution: "Apply % Yield = (m_actual / m_theoretical) × 100: % Yield = (14.2 g / 18.5 g) × 100 = 76.76%. A 76.8% yield represents typical bench-scale performance for an equilibrium-limited Fischer esterification."
    },
    assumptions: [
      "The theoretical yield is calculated correctly using the true limiting reagent based on stoichiometric molar ratios.",
      "The isolated actual product is thoroughly dried and free from residual solvent, moisture, or unreacted starting materials.",
      "The isolated product purity has been verified by analytical chromatography (HPLC/GC) or NMR spectroscopy.",
      "All mass measurements are performed on tared analytical balances."
    ],
    limitations: [
      "Does not reveal why yield was lost (e.g., incomplete conversion, competitive side reactions, or mechanical losses during filtration/extraction).",
      "A calculated yield >100% indicates product contamination with solvent, moisture, or unseparated byproduct.",
      "Does not quantify atom economy or overall environmental E-factor by itself."
    ],
    commonMistakes: [
      "Weighing wet or solvent-laden product, resulting in falsely inflated or >100% yields.",
      "Identifying the wrong starting material as the limiting reactant when calculating theoretical yield.",
      "Failing to account for reaction stoichiometry coefficients when converting starting reactant moles to product moles.",
      "Comparing impure crude product mass directly against pure product theoretical yield."
    ],
    bestPractices: [
      "Always dry isolated crystals to constant weight in a vacuum desiccator or vacuum oven prior to final weighing.",
      "Verify chemical identity and purity (e.g., melting point, NMR, or HPLC assay purity) before calculating true yield.",
      "Perform mass balance tracking across reaction filtrate, washings, and extracts to identify where yield loss occurs.",
      "In multi-step syntheses, calculate both individual step yields and overall cumulative pathway yield."
    ],
    faqs: [
      {
        question: "What is the difference between actual yield and theoretical yield?",
        answer: "Theoretical yield is the maximum possible mass of product calculated from stoichiometry assuming 100% reaction conversion. Actual yield is the mass of pure product physically isolated in the laboratory."
      },
      {
        question: "Can a chemical percent yield be greater than 100%?",
        answer: "In theory, no. If an experimental yield exceeds 100%, it indicates the product is wet (contains residual solvent/water), contains unreacted starting materials, or holds impurities."
      },
      {
        question: "Why are actual yields almost always less than 100%?",
        answer: "Yields are reduced by incomplete reversible reactions, competing side reactions forming byproducts, mechanical losses during filtration or transfer, and product solubility in washing solvents."
      },
      {
        question: "How do you identify the limiting reactant?",
        answer: "Convert the initial mass of each reactant to moles, then divide each by its stoichiometric coefficient in the balanced equation. The reactant with the smallest resulting molar quotient is the limiting reactant."
      },
      {
        question: "How is overall yield calculated in a multi-step synthesis?",
        answer: "Multiply the decimal fractional yields of each individual step together and multiply by 100%. For example, three successive 80% yield steps produce an overall yield of 0.80 × 0.80 × 0.80 = 51.2%."
      },
      {
        question: "What is the difference between reaction yield and reaction conversion?",
        answer: "Conversion measures the percentage of starting reactant consumed, whereas yield measures the percentage of consumed reactant that was successfully converted into the desired target product."
      },
      {
        question: "What is atom economy in relation to reaction yield?",
        answer: "Yield measures experimental operational efficiency, whereas Atom Economy evaluates the intrinsic molecular efficiency of the balanced reaction (molar mass of desired product / molar mass of all reactants × 100%)."
      },
      {
        question: "Which standards guide chemical yield and process metrics?",
        answer: "Synthetic yield and green chemistry metrics (PMI, Atom Economy) are standardized under ACS Green Chemistry Institute guidelines and IUPAC Recommendations."
      }
    ],
    standardsReferences: [
      { organization: "IUPAC", code: "Green Book (3rd Ed.)", title: "Quantities, Units and Symbols in Physical Chemistry — Section 2.11 Chemical Kinetics and Stoichiometry" },
      { organization: "ACS GCI", code: "ACS Green Chemistry Metrics", title: "Standard Definitions for Reaction Yield, Atom Economy, and Process Mass Intensity (PMI)" },
      { organization: "OECD", code: "OECD Principles of Good Laboratory Practice", title: "Chemical Synthesis Characterization and Yield Documentation" },
      { organization: "ISO", code: "ISO 9001:2015", title: "Quality Management Systems — Chemical Process Yield Control and Batch Validation" }
    ],
    internalLinks: {
      parentDiscipline: { id: "chemistry-calc", name: "Chemistry Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 10. IDEAL GAS VOLUME CALCULATOR
  "chemistry-ideal-gas-law": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Ideal Gas Volume Calculator | Molar Gas Law (PV = nRT) Solver",
    metaDescription: "Calculate ideal gas volume in liters from substance moles, absolute temperature in Kelvin, and pressure in atmospheres using PV = nRT and the gas constant R.",
    canonicalUrl,
    introduction: {
      overview: "The Ideal Gas Law (PV = nRT) is the foundational equation of state describing the thermodynamic behavior of hypothetical ideal gases. Developed by combining the empirical gas laws of Boyle, Charles, Avogadro, and Gay-Lussac, this equation correlates four fundamental macroscopic gas properties: system pressure (P), gas volume (V), amount of substance in moles (n), and absolute thermodynamic temperature (T), linked by the universal gas constant (R = 0.082057 L·atm/(mol·K)). At moderate pressures and temperatures well above condensation points, real gases closely approximate ideal gas behavior.",
      applications: [
        "Calculating stoichiometric gas generation and headspace volume in synthetic vapor-phase chemical reactors.",
        "Sizing compressed gas cylinders, cryogenic liquid vaporizers, and pneumatic storage vessels.",
        "Determining molar volume and molecular mass of volatile liquids via vapor density bulb methods.",
        "Analyzing gas evolution in stoichiometry experiments (e.g., hydrogen gas collection over water)."
      ],
      industries: [
        "Chemical Engineering & Reactor Design",
        "Industrial Gas Production & Distribution",
        "Biotechnology & Industrial Fermentation",
        "Environmental Air Quality & Emissions Monitoring"
      ]
    },
    quickAnswer: "The Ideal Gas Law formula for volume is V = (n × R × T) / P, where R = 0.082057 L·atm/(mol·K). For n = 2.5 moles of gas at standard room temperature T = 298.15 K (25°C) and pressure P = 1.0 atm, the calculated gas volume is exactly 61.16 Liters.",
    governingEquation: {
      formula: "V = \\frac{n \\times R \\times T}{P}",
      explanation: "Gas volume (V in Liters) is directly proportional to the amount of gas (n in moles) and absolute temperature (T in Kelvin), and inversely proportional to pressure (P in atmospheres), scaled by the universal gas constant R = 0.0820574 L·atm/(mol·K).",
      variables: [
        { symbol: "V", label: "Gas Volume", unit: "Liters (L)", description: "Total spatial volume occupied by the gaseous chemical substance." },
        { symbol: "n", label: "Amount of Gas", unit: "Moles (mol)", description: "Chemical amount of gas substance in moles." },
        { symbol: "R", label: "Gas Constant", unit: "0.082057 L·atm/(mol·K)", description: "Universal molar gas constant relating energy to temperature and mole quantity." },
        { symbol: "T", label: "Absolute Temperature", unit: "Kelvin (K)", description: "Thermodynamic temperature measured from absolute zero (K = °C + 273.15)." },
        { symbol: "P", label: "Pressure", unit: "Atmospheres (atm)", description: "Absolute hydrostatic pressure exerted by or on the gas." }
      ]
    },
    inputParameters: [
      {
        name: "moles",
        label: "Amount of Gas (n)",
        unit: "Moles (mol)",
        defaultValue: 2.5,
        explanation: "Amount of gaseous substance in moles. The baseline default is set to 2.5 mol."
      },
      {
        name: "temp",
        label: "Absolute Temp (T)",
        unit: "Kelvin (K)",
        defaultValue: 298.15,
        explanation: "Thermodynamic absolute temperature in Kelvin. The baseline default is set to 298.15 K (25.0°C)."
      },
      {
        name: "pressure",
        label: "Pressure (P)",
        unit: "Atmospheres (atm)",
        defaultValue: 1.0,
        explanation: "Absolute gas pressure in atmospheres. The baseline default is set to 1.0 atm (101.325 kPa)."
      }
    ],
    outputExplanation: {
      unit: "Liters (L)",
      interpretation: "The computed value represents the total volume occupied by the specified quantity of ideal gas under the designated temperature and pressure conditions.",
      designImpact: "Critical for sizing chemical reactor headspace, piping volumetric flow rates, and safety pressure-relief venting capacities."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Amount of Gas (n)", value: 2.5, unit: "mol" },
        { label: "Absolute Temperature (T)", value: 298.15, unit: "K" },
        { label: "Pressure (P)", value: 1.0, unit: "atm" }
      ],
      substitution: "Substitute n = 2.5 mol, R = 0.082057 L·atm/(mol·K), T = 298.15 K, and P = 1.0 atm into V = (n × R × T) / P:",
      intermediateSteps: [
        "1. Identify given thermodynamic values: n = 2.5 mol, T = 298.15 K, P = 1.0 atm, R = 0.0820574 L·atm/(mol·K).",
        "2. Confirm units: [mol] × [L·atm/(mol·K)] × [K] / [atm] cancels to Liters (L).",
        "3. Multiply numerator: n × R × T = 2.5 × 0.0820574 × 298.15 = 61.1648 L·atm.",
        "4. Divide by pressure: V = 61.1648 L·atm / 1.0 atm = 61.16 Liters."
      ],
      finalResult: "61.16",
      unit: "Liters (L)"
    },
    practicalExample: {
      scenarioTitle: "Calculating Headspace Nitrogen Volume for Reactor Inerting",
      industryContext: "A chemical plant inertizes an organic synthesis vessel with pure nitrogen gas (N2) at ambient room temperature prior to introducing flammable reagents.",
      problemStatement: "A batch process generates 2.5 moles of N2 purge gas. What volume in liters will this gas occupy at standard room conditions of 25.0°C (298.15 K) and 1.0 atmosphere of pressure?",
      engineeringSolution: "Apply V = (n × R × T) / P: V = (2.5 mol × 0.082057 L·atm/(mol·K) × 298.15 K) / 1.0 atm = 61.16 Liters of N2 gas. Sizing the purge exhaust vessel for at least 65 L provides adequate containment margin."
    },
    assumptions: [
      "Gas particles are treated as point masses occupying negligible physical volume compared to total container volume.",
      "Intermolecular attractive and repulsive forces between gas molecules are negligible.",
      "All molecular collisions with container walls are completely elastic, conserving kinetic energy.",
      "The gas is in thermal and mechanical equilibrium at uniform temperature and pressure throughout."
    ],
    limitations: [
      "Real gases deviate significantly from ideal behavior at high pressures (>10 atm) where molecular volume is non-negligible.",
      "Deviates at low temperatures near the condensation point where intermolecular van der Waals attractions become significant.",
      "Requires equations of state such as the Van der Waals equation or Peng-Robinson equation for non-ideal high-pressure gas modeling."
    ],
    commonMistakes: [
      "Entering temperature in Celsius (°C) rather than absolute Kelvin (K = °C + 273.15).",
      "Using the wrong gas constant R value (e.g., using R = 8.314 J/(mol·K) with pressures in atm and volumes in L).",
      "Confusing gauge pressure (psig) with absolute pressure (psia or atm).",
      "Applying the ideal gas law to condensable vapors near their saturation dew points."
    ],
    bestPractices: [
      "Always convert all temperature inputs to absolute Kelvin before performing gas law calculations.",
      "Ensure the numerical value of the universal gas constant R matches the dimensional units of P, V, n, and T (R = 0.082057 L·atm/(mol·K) = 8.31446 J/(mol·K) = 62.364 L·Torr/(mol·K)).",
      "Use the compressibility factor Z = PV / (nRT) to check whether real gas conditions deviate from ideality (ideal when Z ≈ 1.0).",
      "For gases collected over water, subtract water vapor pressure (P_H2O) from total barometric pressure to find dry gas pressure."
    ],
    faqs: [
      {
        question: "What is the Ideal Gas Law formula?",
        answer: "The Ideal Gas Law is PV = nRT, which can be rearranged to solve for volume: V = (n × R × T) / P, where P is pressure, V is volume, n is moles, R is the gas constant, and T is absolute temperature."
      },
      {
        question: "What is the value of the gas constant R in L·atm/(mol·K)?",
        answer: "In units of liters, atmospheres, moles, and Kelvin, the universal gas constant R is exactly 0.082057366 L·atm/(mol·K) (commonly rounded to 0.0821)."
      },
      {
        question: "What is standard molar volume of an ideal gas at STP?",
        answer: "At standard temperature and pressure (STP: 0°C / 273.15 K and 1 atm), exactly 1 mole of any ideal gas occupies 22.414 Liters."
      },
      {
        question: "Why must temperature always be in Kelvin?",
        answer: "The gas laws are derived from thermal kinetic energy, which is directly proportional to absolute thermodynamic temperature measured from absolute zero (0 K). Celsius has an arbitrary zero point."
      },
      {
        question: "What happens to gas volume if pressure is doubled while temperature remains constant?",
        answer: "According to Boyle's Law (an inverse relationship), doubling the pressure cuts the gas volume in half (V2 = V1 / 2)."
      },
      {
        question: "What happens to gas volume if temperature in Kelvin is doubled at constant pressure?",
        answer: "According to Charles's Law (a direct proportional relationship), doubling the absolute temperature doubles the gas volume (V2 = 2 × V1)."
      },
      {
        question: "When do real gases behave most ideally?",
        answer: "Real gases behave most ideally at high temperatures (where kinetic energy overcomes intermolecular attractions) and low pressures (where gas molecule volume is negligible relative to total volume)."
      },
      {
        question: "Which standards define the universal gas constant R?",
        answer: "The universal gas constant R is defined by CODATA and standardized by BIPM in the 2019 SI redefinition via the exact Boltzmann constant (k) and Avogadro constant (NA)."
      }
    ],
    standardsReferences: [
      { organization: "CODATA / BIPM", code: "CODATA Recommended Values 2018", title: "Fundamental Physical Constants: Molar Gas Constant R = NA × k" },
      { organization: "IUPAC", code: "Green Book (3rd Ed.)", title: "Quantities, Units and Symbols in Physical Chemistry — Section 2.1 (Thermodynamic Gas Laws)" },
      { organization: "ISO", code: "ISO 80000-5", title: "Quantities and Units — Part 5: Thermodynamics" },
      { organization: "NIST", code: "NIST Reference on Constants, Units, and Uncertainty", title: "Molar Gas Constant Value and Precision Standard" }
    ],
    internalLinks: {
      parentDiscipline: { id: "chemistry-calc", name: "Chemistry Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 11. SPECIFIC HEAT ENERGY CALCULATOR
  "chemistry-specific-heat": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Specific Heat Energy Calculator | Thermal Heat Transfer (Q = mcΔT) Solver",
    metaDescription: "Calculate heat energy (Q in Joules) absorbed or released during temperature change using Q = m × c × ΔT. Includes thermochemical calorimetry and IUPAC standards.",
    canonicalUrl,
    introduction: {
      overview: "Specific heat capacity (symbol c) is an intensive thermodynamic material property that quantifies the amount of heat energy required to raise the temperature of one unit mass of a substance by one unit of temperature. Governed by the fundamental calorimetry equation Q = m × c × ΔT, the total sensible heat absorbed or released (Q) is directly proportional to the mass of the substance (m), its specific heat capacity (c), and the temperature differential (ΔT). This calculation forms the foundation of thermochemistry, solution calorimetry, and thermal process management in chemical synthesis.",
      applications: [
        "Calculating thermal energy absorption and heat release in solution calorimetry and bomb calorimetry experiments.",
        "Sizing cooling jackets and heat exchangers for exothermic chemical batch reactions.",
        "Determining thermal energy requirements for heating chemical feedstocks and solvent distillation systems.",
        "Evaluating thermal management and heat dissipation in battery electrolyte and phase change materials."
      ],
      industries: [
        "Thermochemistry & Solution Calorimetry",
        "Chemical Process Safety & Reactor Engineering",
        "Materials Thermal Analysis & Characterization",
        "HVAC & Industrial Thermal Management"
      ]
    },
    quickAnswer: "The sensible heat formula is Q = m × c × ΔT. For a mass m = 250 grams of liquid water with specific heat c = 4.184 J/(g·°C) undergoing a temperature rise ΔT = 25 °C, the total heat energy absorbed is exactly 26,150 Joules (26.15 kJ).",
    governingEquation: {
      formula: "Q = m \\times c \\times \\Delta T",
      explanation: "Thermal heat energy (Q in Joules) equals the substance mass (m in grams) multiplied by the specific heat capacity (c in J/(g·°C)) and the temperature change (ΔT = T_final - T_initial in °C or K). A positive Q indicates endothermic heat absorption; a negative Q indicates exothermic heat release.",
      variables: [
        { symbol: "Q", label: "Heat Energy", unit: "Joules (J)", description: "Total sensible thermal energy transferred into or out of the substance." },
        { symbol: "m", label: "Substance Mass", unit: "Grams (g)", description: "Gravimetric mass of the substance undergoing temperature change." },
        { symbol: "c", label: "Specific Heat Capacity", unit: "J/(g·°C) or J/(g·K)", description: "Intrinsic energy required to raise 1 gram of material by 1 degree Celsius." },
        { symbol: "ΔT", label: "Temperature Change", unit: "°C or Kelvin (K)", description: "Temperature differential experienced by the substance (T_final - T_initial)." }
      ]
    },
    inputParameters: [
      {
        name: "mass",
        label: "Substance Mass (m)",
        unit: "Grams (g)",
        defaultValue: 250,
        explanation: "Mass of the material undergoing thermal transfer. The baseline default is set to 250 g (typical coffee-cup calorimeter water volume)."
      },
      {
        name: "specHeat",
        label: "Specific Heat (c)",
        unit: "J/(g·°C)",
        defaultValue: 4.184,
        explanation: "Specific heat capacity of the material. The baseline default is set to 4.184 J/(g·°C) (the specific heat capacity of liquid water)."
      },
      {
        name: "deltaT",
        label: "Temp Change (ΔT)",
        unit: "°C or K",
        defaultValue: 25,
        explanation: "Net temperature differential. The baseline default is set to 25 °C."
      }
    ],
    outputExplanation: {
      unit: "Joules (J)",
      interpretation: "The output value represents the total thermal energy transferred in Joules (1 kJ = 1,000 J).",
      designImpact: "Governs required heating/cooling utility loads, calorimeter calibration heat constants, and thermal runaway prevention thresholds."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Substance Mass (m)", value: 250, unit: "g" },
        { label: "Specific Heat Capacity (c)", value: 4.184, unit: "J/(g·°C)" },
        { label: "Temperature Change (ΔT)", value: 25, unit: "°C" }
      ],
      substitution: "Substitute m = 250 g, c = 4.184 J/(g·°C), and ΔT = 25 °C into Q = m × c × ΔT:",
      intermediateSteps: [
        "1. Identify given thermal parameters: Mass m = 250 g, Specific heat c = 4.184 J/(g·°C), Temperature shift ΔT = 25 °C.",
        "2. Dimensional analysis: [g] × [J / (g·°C)] × [°C] = Joules (J).",
        "3. Multiply mass by specific heat: m × c = 250 g × 4.184 J/(g·°C) = 1,046 J/°C (Heat Capacity C).",
        "4. Multiply by temperature change: Q = 1,046 J/°C × 25 °C = 26,150 Joules (26.15 kJ)."
      ],
      finalResult: "26150",
      unit: "Joules (J)"
    },
    practicalExample: {
      scenarioTitle: "Calorimetric Determination of Reaction Heat in Water",
      industryContext: "An analytical thermochemistry lab measures the heat released by a dissolution reaction inside an insulated coffee-cup calorimeter containing 250 mL of water.",
      problemStatement: "A dissolution reaction causes the 250 g of water (specific heat = 4.184 J/(g·°C)) to rise in temperature by 25.0 °C. Calculate the heat absorbed by the water.",
      engineeringSolution: "Apply Q = m × c × ΔT: Q = 250 g × 4.184 J/(g·°C) × 25.0 °C = 26,150 Joules (26.15 kJ). By conservation of energy, the dissolution reaction released q_rxn = -26.15 kJ of heat (exothermic)."
    },
    assumptions: [
      "No phase transition (melting, boiling, or vaporization) occurs across the specified temperature range ΔT.",
      "The specific heat capacity c is assumed constant over the temperature interval ΔT.",
      "The calorimeter vessel is an adiabatic isolated system with zero unmeasured heat loss to the surroundings.",
      "Heat is distributed instantaneously and uniformly throughout the substance."
    ],
    limitations: [
      "Phase changes require latent heat terms (Q_latent = m × L_fusion or m × L_vaporization) not accounted for in sensible heat Q = mcΔT alone.",
      "Specific heat capacity varies with temperature, especially for gases and over wide temperature swings (>50°C).",
      "Calorimeter heat capacity (C_calorimeter × ΔT) must be included for high-precision bomb calorimetry."
    ],
    commonMistakes: [
      "Mixing mass units (e.g., entering mass in kilograms when specific heat capacity is in J/(g·°C), causing a 1000x error).",
      "Using the sensible heat formula during a phase change where temperature remains constant despite heat addition.",
      "Confusing specific heat capacity c (per gram) with total extensive heat capacity C (C = m × c).",
      "Forgetting that 1 calorie equals 4.184 Joules when converting thermochemical nutritional and metric literature values."
    ],
    bestPractices: [
      "Verify that the mass unit of the substance matches the mass unit in the denominator of the specific heat capacity.",
      "In calorimetry, determine the calorimeter constant (C_cal) by electrical calibration or standard benzoic acid combustion.",
      "Use temperature-dependent integrated specific heat polynomials (c_p(T) = a + bT + cT²) for broad-temperature chemical engineering balances.",
      "Account for heat of stirring in mechanical liquid calorimeters during extended measurement cycles."
    ],
    faqs: [
      {
        question: "What does the formula Q = mcΔT calculate?",
        answer: "The formula Q = m × c × ΔT calculates the sensible heat energy (Q in Joules) required to change the temperature of a mass (m) of substance with specific heat capacity (c) by a temperature differential (ΔT)."
      },
      {
        question: "What is the specific heat capacity of water?",
        answer: "Liquid water has an unusually high specific heat capacity of 4.184 J/(g·°C) (or 1.00 cal/(g·°C) or 4,184 J/(kg·K)) at 25°C."
      },
      {
        question: "What is the difference between specific heat capacity and heat capacity?",
        answer: "Specific heat capacity (c) is an intensive property per unit mass (J/(g·°C)). Heat capacity (C = m × c) is an extensive property for an entire object or vessel (J/°C)."
      },
      {
        question: "Why can't Q = mcΔT be used during melting or boiling?",
        answer: "During a phase transition, temperature remains constant (ΔT = 0) while latent heat is absorbed or released to break or form intermolecular bonds. Latent heat is calculated as Q = m × L."
      },
      {
        question: "Is ΔT the same in Celsius and Kelvin?",
        answer: "Yes. Because 1 degree Celsius represents the exact same temperature increment as 1 Kelvin, a temperature change ΔT of 25 °C is identical to a ΔT of 25 K."
      },
      {
        question: "What does a negative Q value mean?",
        answer: "A negative Q indicates that heat is released from the system into its surroundings, which is an exothermic process. A positive Q indicates endothermic heat absorption."
      },
      {
        question: "How do you convert Joules to calories?",
        answer: "Divide Joules by 4.184 (1 calorie = 4.184 Joules). For example, 26,150 J / 4.184 = 6,250 calories (6.25 kcal)."
      },
      {
        question: "Which standards regulate calorimetry and specific heat testing?",
        answer: "Calorimetric procedures and specific heat measurement methods are standardized under ASTM E1269 (DSC method) and ASTM D240 (bomb calorimetry)."
      }
    ],
    standardsReferences: [
      { organization: "ASTM", code: "ASTM E1269", title: "Standard Test Method for Determining Specific Heat Capacity by Differential Scanning Calorimetry" },
      { organization: "ASTM", code: "ASTM D240", title: "Standard Test Method for Heat of Combustion of Liquid Hydrocarbon Fuels by Bomb Calorimeter" },
      { organization: "IUPAC", code: "Green Book (3rd Ed.)", title: "Quantities, Units and Symbols in Physical Chemistry — Section 2.11 Thermodynamics and Calorimetry" },
      { organization: "NIST", code: "NIST Chemistry WebBook (SRD 69)", title: "Condensed Phase Heat Capacity and Thermophysical Reference Data" }
    ],
    internalLinks: {
      parentDiscipline: { id: "chemistry-calc", name: "Chemistry Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 12. REACTION ENTHALPY CALCULATOR
  "reaction-enthalpy": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Reaction Enthalpy Calculator | Standard Heat of Reaction (ΔH_rxn) Solver",
    metaDescription: "Calculate standard reaction enthalpy change (ΔH_rxn in kJ) from standard enthalpies of formation of products and reactants using Hess's Law.",
    canonicalUrl,
    introduction: {
      overview: "Reaction enthalpy (symbol ΔH_rxn, expressed in kilojoules, kJ) is the state function representing the net thermal energy change occurring during a chemical reaction at constant pressure. Based on Hess's Law of constant heat summation and the first law of thermodynamics, the standard enthalpy of reaction is calculated by subtracting the sum of the standard enthalpies of formation of the reactants from the sum of the standard enthalpies of formation of the products: ΔH_rxn = ∑ΔHf(products) - ∑ΔHf(reactants). An overall negative ΔH_rxn indicates an exothermic reaction that releases heat, whereas a positive ΔH_rxn denotes an endothermic reaction that absorbs heat.",
      applications: [
        "Predicting reaction exothermicity, heat release, and adiabatic temperature rise for chemical process safety.",
        "Sizing cooling jackets, heat exchange coils, and emergency relief systems for industrial chemical reactors.",
        "Determining theoretical combustion heat yields and fuel heating values in energy engineering.",
        "Evaluating thermodynamic reaction spontaneity in conjunction with entropy change (ΔG = ΔH - TΔS)."
      ],
      industries: [
        "Chemical Process Safety & Thermal Hazchem",
        "Petrochemical Refining & Combustion Engineering",
        "Explosives, Propellants & Pyrotechnics",
        "Industrial Chemical Plant & Reactor Design"
      ]
    },
    quickAnswer: "Reaction enthalpy (ΔH_rxn) equals the sum of product standard enthalpies of formation minus the sum of reactant standard enthalpies of formation: ΔH_rxn = ∑ΔHf(products) - ∑ΔHf(reactants). For product formation enthalpies summing to -788 kJ and reactant formation enthalpies summing to -220 kJ, the reaction enthalpy is exactly -568 kJ (exothermic).",
    governingEquation: {
      formula: "\\Delta H_{\\text{rxn}} = \\sum \\Delta H_{f,\\text{products}} - \\sum \\Delta H_{f,\\text{reactants}}",
      explanation: "The standard enthalpy change of reaction (ΔH_rxn in kJ) is evaluated by summing the standard molar enthalpies of formation of all products and subtracting the sum of standard molar enthalpies of formation of all reactants, accounting for stoichiometric coefficients.",
      variables: [
        { symbol: "ΔH_rxn", label: "Reaction Enthalpy", unit: "Kilojoules (kJ)", description: "Net enthalpy change of the chemical reaction at constant pressure." },
        { symbol: "∑ΔHf(products)", label: "Sum Products Enthalpy", unit: "Kilojoules (kJ)", description: "Sum of standard heats of formation of all products multiplied by stoichiometric coefficients." },
        { symbol: "∑ΔHf(reactants)", label: "Sum Reactants Enthalpy", unit: "Kilojoules (kJ)", description: "Sum of standard heats of formation of all reactants multiplied by stoichiometric coefficients." }
      ]
    },
    inputParameters: [
      {
        name: "hProducts",
        label: "Sum Products Enthalpy",
        unit: "Kilojoules (kJ)",
        defaultValue: -788,
        explanation: "Sum of the stoichiometric enthalpies of formation for all reaction products. The baseline default is set to -788 kJ (representative of complete combustion products like 2 CO2)."
      },
      {
        name: "hReactants",
        label: "Sum Reactants Enthalpy",
        unit: "Kilojoules (kJ)",
        defaultValue: -220,
        explanation: "Sum of the stoichiometric enthalpies of formation for all starting reactants. The baseline default is set to -220 kJ."
      }
    ],
    outputExplanation: {
      unit: "Kilojoules (kJ)",
      interpretation: "The computed value represents the net thermochemical enthalpy change (ΔH_rxn) for the reaction.",
      designImpact: "Negative values (-ΔH) indicate exothermic heat generation requiring cooling control; positive values (+ΔH) indicate endothermic heat input requirements."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Sum Products Enthalpy (∑ΔHf_products)", value: -788, unit: "kJ" },
        { label: "Sum Reactants Enthalpy (∑ΔHf_reactants)", value: -220, unit: "kJ" }
      ],
      substitution: "Substitute ∑ΔHf_products = -788 kJ and ∑ΔHf_reactants = -220 kJ into ΔH_rxn = ∑ΔHf_products - ∑ΔHf_reactants:",
      intermediateSteps: [
        "1. Identify thermochemical formation sums: Products ∑ΔHf = -788 kJ, Reactants ∑ΔHf = -220 kJ.",
        "2. Confirm energy units: Both formation enthalpy sums are in Kilojoules (kJ).",
        "3. Apply Hess's Law subtraction: ΔH_rxn = (-788 kJ) - (-220 kJ).",
        "4. Calculate net enthalpy change: ΔH_rxn = -788 + 220 = -568 kJ (exothermic reaction)."
      ],
      finalResult: "-568",
      unit: "Kilojoules (kJ)"
    },
    practicalExample: {
      scenarioTitle: "Combustion Enthalpy Evaluation for Process Safety",
      industryContext: "A chemical process safety engineer evaluates the thermal hazard potential of a hydrocarbon combustion reaction in an incinerator.",
      problemStatement: "The sum of standard heats of formation for the combustion products is -788 kJ, while the reactants sum to -220 kJ. What is the net reaction enthalpy change?",
      engineeringSolution: "Apply ΔH_rxn = ∑ΔHf(products) - ∑ΔHf(reactants): ΔH_rxn = (-788 kJ) - (-220 kJ) = -568 kJ. The negative sign confirms the reaction releases 568 kJ of thermal energy, requiring cooling water circulation capable of absorbing at least 568 kJ per reaction batch."
    },
    assumptions: [
      "The chemical reaction occurs under constant pressure conditions (isobaric system).",
      "Standard enthalpies of formation are referenced to standard state conditions (298.15 K / 25°C and 1 bar or 1 atm).",
      "Pure elemental substances in their most stable thermodynamic allotrope (e.g., O2 gas, C graphite) have ΔHf° = 0 kJ/mol by definition.",
      "Stoichiometric molar coefficients from the balanced chemical equation have been properly multiplied into each formation enthalpy term."
    ],
    limitations: [
      "Standard formation enthalpies apply at 298.15 K; reaction enthalpies at elevated operating temperatures require Kirchhoff's Law integration with heat capacities: ΔH(T) = ΔH° + ∫ΔCp dT.",
      "Enthalpy alone does not determine reaction spontaneity; Gibbs Free Energy (ΔG = ΔH - TΔS) must be evaluated.",
      "Does not account for reaction activation energy barriers (Ea) or kinetic reaction rates."
    ],
    commonMistakes: [
      "Subtracting products from reactants instead of Products minus Reactants (reversing the thermodynamic sign).",
      "Forgetting that standard elements in their reference state (such as O2(g), N2(g), H2(g)) have ΔHf° = 0 kJ/mol.",
      "Neglecting stoichiometric coefficients (e.g., failing to multiply ΔHf° of H2O by 2 in a reaction producing 2 H2O).",
      "Confusing standard enthalpy of formation (ΔHf°) with bond dissociation energy summations (which use Reactant Bonds Broken minus Product Bonds Formed)."
    ],
    bestPractices: [
      "Always balance the chemical equation completely before calculating enthalpy of formation sums.",
      "Verify physical states (gas, liquid, solid, aqueous) for all species, as ΔHf° differs significantly between states (e.g., H2O(l) = -285.8 kJ/mol vs. H2O(g) = -241.8 kJ/mol).",
      "Use reputable, standard reference databases like the NIST Chemistry WebBook for standard formation enthalpy values.",
      "In corporate process hazard analysis (PHA), use reaction enthalpy to calculate maximum adiabatic theoretical temperature rise (ΔT_ad = -ΔH_rxn / Cp_total)."
    ],
    faqs: [
      {
        question: "What is Hess's Law?",
        answer: "Hess's Law states that the total enthalpy change for a chemical reaction is independent of the pathway or number of intermediate steps taken, depending only on initial reactant and final product states."
      },
      {
        question: "What is the difference between an exothermic and an endothermic reaction?",
        answer: "An exothermic reaction has a negative enthalpy change (ΔH < 0) and releases thermal energy to the surroundings. An endothermic reaction has a positive enthalpy change (ΔH > 0) and absorbs thermal energy."
      },
      {
        question: "Why is the enthalpy of formation of pure elements zero?",
        answer: "By IUPAC thermodynamic convention, pure chemical elements in their most stable reference state at standard conditions (e.g., O2 gas, N2 gas, C graphite, Fe solid) are defined as having ΔHf° = 0 kJ/mol."
      },
      {
        question: "How does reaction enthalpy relate to Gibbs Free Energy?",
        answer: "Reaction enthalpy (ΔH) and entropy change (ΔS) together determine Gibbs Free Energy: ΔG = ΔH - TΔS. A negative ΔG indicates a thermodynamically spontaneous process."
      },
      {
        question: "Why does water vapor have a different ΔHf than liquid water?",
        answer: "Converting liquid water to water vapor requires the enthalpy of vaporization (+44.0 kJ/mol at 25°C). Therefore, ΔHf° of H2O(g) is -241.8 kJ/mol, while ΔHf° of H2O(l) is -285.8 kJ/mol."
      },
      {
        question: "How do you adjust reaction enthalpy for temperatures other than 25°C?",
        answer: "Use Kirchhoff's Law: ΔH(T2) = ΔH(T1) + ∫[ΔCp] dT, where ΔCp is the difference in heat capacities between products and reactants."
      },
      {
        question: "What is the standard state in thermochemistry?",
        answer: "IUPAC defines the standard state as a pure substance at a standard pressure of 1 bar (100 kPa) or 1 atm, and usually a reference temperature of 298.15 K (25°C)."
      },
      {
        question: "Which standards regulate thermodynamic thermochemical reference data?",
        answer: "Standard thermochemical values and enthalpies of formation are compiled and standardized by the NIST-JANAF Thermochemical Tables and CODATA Recommended Values."
      }
    ],
    standardsReferences: [
      { organization: "NIST", code: "NIST-JANAF Thermochemical Tables (4th Ed.)", title: "Standard Enthalpies of Formation, Heat Capacities, and Thermodynamic Functions" },
      { organization: "IUPAC", code: "Green Book (3rd Ed.)", title: "Quantities, Units and Symbols in Physical Chemistry — Section 2.11 Chemical Thermodynamics" },
      { organization: "CODATA", code: "CODATA Key Values for Thermodynamics", title: "Internationally Agreed Values for Standard Enthalpies of Formation and Entropies" },
      { organization: "ISO", code: "ISO 80000-5", title: "Quantities and Units — Part 5: Thermodynamics and Thermochemistry" }
    ],
    internalLinks: {
      parentDiscipline: { id: "chemistry-calc", name: "Chemistry Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  })

};
