import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * Production-quality bespoke articles for Optics & Light Calculators (Part 2).
 * Adheres strictly to OPTICS & LIGHT CALCULATOR ARTICLE TEMPLATE V1.0.
 */

export const opticsBespokeArticlesPart2: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {

  // 10. PHOTON ENERGY CALCULATOR
  "photon-energy": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Photon Energy Calculator | Quantum Optical Energy (eV & Joules) Solver",
    metaDescription: "Calculate single or multi-photon quantum energy in electronvolts (E = hc / λ) from electromagnetic wavelength using Planck's quantum relation.",
    canonicalUrl,
    introduction: {
      overview: "In quantum optics and semiconductor optoelectronics, light is quantized into discrete elementary energy packets called photons. According to the Planck-Einstein relation (E = h·ν = hc/λ), the energy carried by an individual photon is inversely proportional to its electromagnetic wavelength (λ) and directly proportional to its wave frequency. In photonics, laser engineering, spectroscopy, solar photovoltaics, and photo-detector design, calculating photon energy in electronvolts (eV) is essential for matching photon energies to semiconductor bandgaps (E_g), determining work functions in photoemission, and evaluating photochemical reaction thresholds.",
      applications: [
        "Matching photon energies to semiconductor direct bandgap energies (e.g., GaN, GaAs, Silicon) in LED and laser diode design.",
        "Evaluating photoelectric work function barriers in photomultiplier tubes (PMTs) and image sensors.",
        "Determining photochemical dissociation and ionization energy thresholds in laser ablation and medical surgery.",
        "Calculating solar photovoltaic spectral quantum absorption limits (Shockley-Queisser limit)."
      ],
      industries: [
        "Quantum Optics & Laser Engineering",
        "Semiconductor Optoelectronics & Photodetectors",
        "Photovoltaic Solar Cell Manufacturing",
        "Spectroscopy, Metrology & Particle Physics"
      ]
    },
    quickAnswer: "The Photon Energy Calculator determines quantum photon energy from wavelength using E = (h × c × N) / λ. For green light at 532 nm (N = 1 photon), the energy is approximately 2.33 Electronvolts (eV) (or 3.73 × 10⁻¹⁹ Joules).",
    governingEquation: {
      formula: "E = \\frac{h \\times c \\times N}{\\lambda}",
      explanation: "Individual photon energy (E in Joules or electronvolts, eV) equals Planck's constant (h = 6.62607015 × 10⁻³⁴ J·s) multiplied by the speed of light in vacuum (c = 299,792,458 m/s) and photon count (N), divided by wavelength (λ in meters). In practical electronvolt units: E(eV) ≈ 1239.84193 / λ(nm).",
      variables: [
        { symbol: "E", label: "Photon Energy", unit: "Electronvolts (eV)", description: "Quantum energy of the photons (1 eV = 1.602176634 × 10⁻¹⁹ J)." },
        { symbol: "h", label: "Planck's Constant", unit: "Joule·seconds (J·s)", description: "Fundamental physical constant: h = 6.62607015 × 10⁻³⁴ J·s." },
        { symbol: "c", label: "Speed of Light", unit: "m/s", description: "Speed of electromagnetic waves in vacuum: c = 299,792,458 m/s." },
        { symbol: "λ", label: "Wavelength", unit: "Nanometers (nm)", description: "Electromagnetic wavelength of the incident light." },
        { symbol: "N", label: "Photon Count", unit: "Count", description: "Total number of photons in the quantum packet (default = 1)." }
      ]
    },
    inputParameters: [
      {
        name: "wavelength",
        label: "Wavelength (λ)",
        unit: "Nanometers (nm)",
        defaultValue: 532,
        explanation: "The vacuum electromagnetic wavelength of the optical radiation in nanometers. Default baseline is 532 nm (standard green DPSS laser)."
      },
      {
        name: "photonCount",
        label: "Photon Count (N)",
        unit: "Photons",
        defaultValue: 1,
        explanation: "The total number of individual photons evaluated in the energy packet. Default baseline is 1 photon."
      }
    ],
    outputExplanation: {
      unit: "Electronvolts (eV)",
      interpretation: "The quantum kinetic/electromagnetic energy carried per photon (or multi-photon packet).",
      designImpact: "Enables semiconductor engineers to select direct bandgap materials whose energy gap (E_g) is smaller than or equal to the incident photon energy for optical absorption."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Wavelength (λ)", value: 532, unit: "nm" },
        { label: "Photon Count (N)", value: 1, unit: "Photons" }
      ],
      substitution: "Substitute λ = 532 × 10⁻⁹ m, h = 6.62607015 × 10⁻³⁴ J·s, c = 299,792,458 m/s, and 1 eV = 1.602176634 × 10⁻¹⁹ J into E = (h·c) / (λ·q):",
      intermediateSteps: [
        "1. Convert wavelength to meters: λ = 532 nm = 532 × 10⁻⁹ meters.",
        "2. Compute hc product in Joules·meters: hc = (6.62607015 × 10⁻³⁴) × (299,792,458) ≈ 1.98644586 × 10⁻²⁵ J·m.",
        "3. Compute photon energy in Joules: E_joules = (1.98644586 × 10⁻²⁵) / (532 × 10⁻⁹) ≈ 3.73392 × 10⁻¹⁹ Joules.",
        "4. Convert Joules to electronvolts (divide by 1.602176634 × 10⁻¹⁹ J/eV): E_eV = 3.73392 × 10⁻¹⁹ / 1.602176634 × 10⁻¹⁹ ≈ 2.33053 eV.",
        "5. Round to two decimal places: 2.33 eV."
      ],
      finalResult: "2.33",
      unit: "Electronvolts (eV)"
    },
    practicalExample: {
      scenarioTitle: "Silicon Photodiode Cutoff Wavelength Determination",
      industryContext: "A semiconductor optoelectronics engineer evaluates whether a crystalline silicon photodiode with an electronic bandgap of E_g = 1.12 eV can detect infrared telecommunication lasers emitting at 850 nm and 1550 nm.",
      problemStatement: "Calculate the photon energy at 850 nm and 1550 nm, and determine if silicon can absorb both wavelengths.",
      engineeringSolution: "At 850 nm: E = 1239.84 / 850 ≈ 1.458 eV (> 1.12 eV, absorbed, photodiode operates). At 1550 nm: E = 1239.84 / 1550 ≈ 0.800 eV (< 1.12 eV, transparent, silicon cannot detect 1550 nm; InGaAs with E_g = 0.75 eV is required instead)."
    },
    assumptions: [
      "Propagation through vacuum where speed of light is exactly c = 299,792,458 m/s.",
      "Single-photon linear quantum interactions (excludes non-linear two-photon absorption processes).",
      "Constants adhere to SI 2019 redefinition exact values for h and e."
    ],
    limitations: [
      "In dispersive optical media with refractive index n > 1, photon wavelength shortens (λ_m = λ_0 / n) while frequency and photon energy remain strictly invariant.",
      "High-intensity femtosecond pulsed lasers can cause non-linear multi-photon ionization where two lower-energy photons combine to bridge a bandgap.",
      "Does not account for relativistic Doppler shifts when emitter and detector have relative velocity."
    ],
    commonMistakes: [
      "Forgetting that shorter wavelengths (e.g., UV 254 nm ≈ 4.88 eV) have higher energy than longer wavelengths (e.g., IR 1064 nm ≈ 1.16 eV).",
      "Using the speed of light in air without recognizing that photon quantum energy E = h·ν depends strictly on source frequency.",
      "Confusing electronvolts (eV) with Joules (J)."
    ],
    bestPractices: [
      "Memorize the standard photonics shortcut: E(eV) ≈ 1240 / λ(nm) for rapid mental approximations.",
      "When designing solar cells or photodetectors, ensure the photon energy exceeds the semiconductor bandgap (hν ≥ E_g) to generate electron-hole pairs.",
      "In UV disinfection and laser safety, recognize that photon energy above 3.1 eV (UV-A/B/C) carries sufficient quantum energy to alter molecular bonds."
    ],
    faqs: [
      {
        question: "What is the Planck-Einstein relation for photon energy?",
        answer: "The Planck-Einstein relation states that energy E = h × ν = (h × c) / λ, where h is Planck's constant, ν is frequency, c is the speed of light, and λ is wavelength."
      },
      {
        question: "What is an electronvolt (eV)?",
        answer: "An electronvolt (eV) is the amount of kinetic energy gained or lost by a single electron moving across an electric potential difference of one Volt. 1 eV = 1.602176634 × 10⁻¹⁹ Joules."
      },
      {
        question: "Why does green light (532 nm) have an energy of 2.33 eV?",
        answer: "Using E(eV) = 1239.84 / 532 nm yields 2.33 eV. This energy corresponds to the quantum transition of Nd:YAG frequency-doubled laser emissions."
      },
      {
        question: "Does light slow down and lose photon energy in glass or water?",
        answer: "In glass or water, light phase velocity decreases (v = c / n) and wavelength shortens (λ' = λ / n), but the frequency (ν) and individual photon energy (E = hν) remain strictly unchanged."
      },
      {
        question: "What is the energy range of visible light in electronvolts?",
        answer: "Visible light ranges from approximately 1.65 eV (deep red at 750 nm) to 3.26 eV (deep violet at 380 nm)."
      },
      {
        question: "How does photon energy relate to the work function in the photoelectric effect?",
        answer: "In the photoelectric effect, electrons are emitted from a metal surface only if the incident photon energy exceeds the material's work function (hν ≥ Φ). Excess energy becomes photoelectron kinetic energy: KE_max = hν - Φ."
      },
      {
        question: "What photon energy is needed to ionize a hydrogen atom from ground state?",
        answer: "The Rydberg ionization energy of hydrogen is 13.6 eV, which corresponds to an extreme ultraviolet (EUV) photon with a wavelength of approximately 91.18 nm."
      },
      {
        question: "Which international standard defines the fundamental physical constants h, c, and e?",
        answer: "The BIPM 2019 SI Brochure (9th Edition) and CODATA 2018 establish exact defining values for Planck's constant, the speed of light, and the elementary charge."
      }
    ],
    standardsReferences: [
      { organization: "BIPM", code: "SI Brochure (9th Ed., 2019)", title: "Fundamental Constants Defining the International System of Units" },
      { organization: "CODATA", code: "CODATA 2018", title: "Recommended Values of the Fundamental Physical Constants" },
      { organization: "ISO", code: "ISO 80000-10:2019", title: "Quantities and units — Part 10: Atomic and Nuclear Physics" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 11. WAVELENGTH TO FREQUENCY CALCULATOR
  "wavelength-frequency": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Wavelength to Frequency Calculator | Optical Terahertz (THz) Solver",
    metaDescription: "Convert optical electromagnetic wavelength in nanometers to frequency in Terahertz (f = c / (λ × n)) across optical media and vacuum.",
    canonicalUrl,
    introduction: {
      overview: "Electromagnetic radiation—including visible light, ultraviolet, and infrared—travels as oscillating transverse electromagnetic waves characterized by wavelength (λ) and frequency (f). For a plane electromagnetic wave propagating through a homogeneous, isotropic, non-magnetic medium, the phase velocity is approximately v_p = c / n. If the entered wavelength is the wavelength in the propagation medium, frequency is calculated as f = c / (λ·n). If the entered value is a vacuum wavelength, frequency is f = c / λ_0 because frequency does not change when light enters a medium. In optical fiber communications, laser spectroscopy, optical interferometry, and photonic integrated circuit (PIC) design, converting between wavelength (in nanometers) and frequency (in Terahertz) is fundamental for specifying ITU-T optical channel grids and laser cavity modes.",
      applications: [
        "Mapping optical telecommunication wavelengths (1310 nm, 1550 nm) to ITU-T dense wavelength division multiplexing (DWDM) 100 GHz / 50 GHz frequency grids.",
        "Analyzing atomic transition absorption lines in laser absorption spectroscopy.",
        "Calculating laser phase velocity and optical carrier frequencies in fiber-optic transceivers.",
        "Determining resonant frequencies in optical fabry-perot microcavities and photonic crystals."
      ],
      industries: [
        "Fiber-Optic Telecommunications & DWDM",
        "Laser Spectroscopy & Atomic Physics",
        "Photonic Integrated Circuits (PIC)",
        "Optical Metrology & Interferometry"
      ]
    },
    quickAnswer: "The Wavelength to Frequency Calculator determines wave frequency using f = c / (λ × n). If the entered wavelength is the wavelength in the propagation medium, frequency is calculated as f = c / (λ·n). If the entered value is a vacuum wavelength, frequency is f = c / λ_0 because frequency does not change when light enters a medium. For a standard red Helium-Neon (He-Ne) laser vacuum wavelength of 632.8 nm in vacuum (n = 1.0), the optical wave frequency is approximately 473.75 Terahertz (THz).",
    governingEquation: {
      formula: "f = \\frac{c}{\\lambda \\times n}",
      explanation: "If the entered wavelength is the wavelength in the propagation medium, frequency is calculated as f = c / (λ·n). If the entered value is a vacuum wavelength, frequency is f = c / λ_0 because frequency does not change when light enters a medium. First calculate frequency in Hertz: f(Hz) = c / (λ(m) × n), then convert to Terahertz: f(THz) = f(Hz) / 10¹².",
      variables: [
        { symbol: "f", label: "Wave Frequency", unit: "Terahertz (THz)", description: "Oscillation frequency of the electromagnetic wave." },
        { symbol: "c", label: "Speed of Light", unit: "m/s", description: "Universal vacuum speed of light: c = 299,792,458 m/s." },
        { symbol: "λ", label: "Wavelength", unit: "Nanometers (nm)", description: "Spatial period of the electromagnetic wave." },
        { symbol: "n", label: "Refractive Index", unit: "Ratio", description: "Phase refractive index of the optical propagation medium (n ≥ 1.0)." }
      ]
    },
    inputParameters: [
      {
        name: "wavelength",
        label: "Wavelength (λ)",
        unit: "Nanometers (nm)",
        defaultValue: 632.8,
        explanation: "The electromagnetic wavelength in nanometers. Default baseline is 632.8 nm (He-Ne red laser emission line)."
      },
      {
        name: "refractiveIndex",
        label: "Medium Refractive Index (n)",
        unit: "Ratio",
        defaultValue: 1.0,
        explanation: "The refractive index of the optical medium (n = 1.0 for vacuum, ~1.00029 for air, ~1.468 for silica optical fiber). Default baseline is 1.0."
      }
    ],
    outputExplanation: {
      unit: "Terahertz (THz)",
      interpretation: "The optical carrier frequency in Terahertz (10¹² cycles per second).",
      designImpact: "Used by optical network engineers to align lasers with the ITU-T G.694.1 DWDM grid anchored at 193.10 THz (1552.52 nm)."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Wavelength (λ)", value: 632.8, unit: "nm" },
        { label: "Medium Refractive Index (n)", value: 1.0, unit: "Ratio" }
      ],
      substitution: "First calculate frequency in Hertz using f(Hz) = c / (λ(m) × n), then convert to Terahertz using f(THz) = f(Hz) / 10¹²:",
      intermediateSteps: [
        "1. Convert wavelength to meters: λ = 632.8 nm = 632.8 × 10⁻⁹ meters.",
        "2. Compute phase velocity in the medium: v = c / n = 299,792,458 / 1.0 = 299,792,458 m/s.",
        "3. Calculate frequency in Hertz: f(Hz) = c / (λ(m) × n) = 299,792,458 / (632.8 × 10⁻⁹ × 1.0) ≈ 4.7375546 × 10¹⁴ Hz.",
        "4. Convert Hertz to Terahertz: f(THz) = f(Hz) / 10¹² = (4.7375546 × 10¹⁴) / 10¹² ≈ 473.755 THz.",
        "5. Round to standard engineering precision: 473.75 THz."
      ],
      finalResult: "473.75",
      unit: "Terahertz (THz)"
    },
    practicalExample: {
      scenarioTitle: "DWDM Fiber Optic Telecom Channel Frequency Alignment",
      industryContext: "A DFB laser has a specified vacuum wavelength of 1550.12 nm for single-mode optical fiber transmission.",
      problemStatement: "Determine the optical carrier frequency in Terahertz, and verify if it corresponds to the standard ITU-T 100 GHz grid channel.",
      engineeringSolution: "In vacuum (n = 1.0): f(Hz) = 299,792,458 / (1550.12 × 10⁻⁹) ≈ 1.933996 × 10¹⁴ Hz. In Terahertz: f(THz) = (1.933996 × 10¹⁴) / 10¹² ≈ 193.3996 THz. This corresponds approximately to the 193.40 THz channel frequency on the standard ITU-T G.694.1 DWDM grid (while inside silica fiber with n ≈ 1.468, the medium wavelength compresses to ~1056 nm while carrier frequency remains invariant at 193.40 THz)."
    },
    assumptions: [
      "Plane electromagnetic wave propagating in a non-magnetic, homogeneous medium.",
      "Refractive index is isotropic and linear at the operating frequency.",
      "Speed of light in vacuum is exactly c = 299,792,458 m/s."
    ],
    limitations: [
      "Chromatic dispersion causes the refractive index n(λ) to vary with wavelength, meaning phase velocity varies across broad spectral pulses.",
      "In high-intensity laser fields, non-linear Kerr effect (n = n_0 + n_2·I) alters the effective index.",
      "Group velocity v_g = dω/dk differs from phase velocity v_p = c/n for modulated pulses."
    ],
    commonMistakes: [
      "Forgetting that 1 Terahertz equals 1,000 Gigahertz = 10¹² Hertz.",
      "Assuming frequency changes when light enters a high-index medium (frequency remains constant; only wavelength shortens: λ_m = λ_0 / n).",
      "Using nominal speed of light 3.0 × 10⁸ m/s instead of exact value 299,792,458 m/s in precision optical metrology."
    ],
    bestPractices: [
      "Use vacuum wavelength (λ_0) when citing standardized laser emission lines, as media refractive indices vary with temperature and atmospheric pressure.",
      "In fiber-optic telecommunications, refer to ITU-T Recommendation G.694.1 for standardized frequency grid channels anchored at 193.10 THz.",
      "Apply the Cauchy or Sellmeier dispersion equations to determine the exact refractive index n(λ) of optical glass at the target wavelength."
    ],
    faqs: [
      {
        question: "What is the relationship between wavelength and frequency of light?",
        answer: "Wavelength and frequency are inversely related by the wave velocity equation: c = f × λ (or f = c / λ in vacuum). As wavelength increases, frequency decreases proportionally."
      },
      {
        question: "What is 1 Terahertz (THz) in terms of Hertz?",
        answer: "One Terahertz (1 THz) equals 10¹² Hertz (1,000,000,000,000 cycles per second) or 1,000 Gigahertz (GHz)."
      },
      {
        question: "What is the frequency of standard 632.8 nm red laser light?",
        answer: "Red laser light at 632.8 nm has a frequency of approximately 473.75 Terahertz (4.7375 × 10¹⁴ Hz)."
      },
      {
        question: "What frequency corresponds to the 1550 nm fiber optic telecommunications band?",
        answer: "A vacuum wavelength of 1550.0 nm corresponds to an optical carrier frequency of approximately 193.414 Terahertz (193.414 THz)."
      },
      {
        question: "What is the ITU-T DWDM Grid standard for optical fiber channels?",
        answer: "ITU-T G.694.1 defines the standard dense wavelength division multiplexing (DWDM) grid based on fixed frequency spacings (100 GHz, 50 GHz, 25 GHz, or 12.5 GHz) anchored at a reference frequency of 193.10 THz."
      },
      {
        question: "Why is optical frequency preferred over wavelength in high-speed optical networking?",
        answer: "Frequency channels have fixed, constant channel bandwidths (e.g., 50 GHz or 100 GHz) that remain constant regardless of the optical medium, whereas wavelength spacing varies across the spectrum (Δλ ≈ (λ²/c)·Δf)."
      },
      {
        question: "Does light frequency change when entering water (n = 1.33)?",
        answer: "No. When light enters water or glass, its frequency remains unchanged because the oscillation frequency is determined by the emitter. Only the wave speed and wavelength decrease (v = c/1.33, λ = λ_0/1.33)."
      },
      {
        question: "Which standards regulate frequency grids for telecommunication networks?",
        answer: "ITU-T Recommendation G.694.1 (Spectral grids for WDM applications: DWDM frequency grid) and G.694.2 (CWDM wavelength grid) govern global optical telecommunications."
      }
    ],
    standardsReferences: [
      { organization: "ITU-T", code: "ITU-T G.694.1", title: "Spectral grids for WDM applications: DWDM frequency grid" },
      { organization: "BIPM", code: "SI Brochure (9th Ed., 2019)", title: "Speed of Light in Vacuum Constant" },
      { organization: "IEEE", code: "IEEE 802.3bs", title: "Standard for Ethernet — 200 Gb/s and 400 Gb/s Operation over Optical Fiber" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 12. FREQUENCY TO WAVELENGTH CALCULATOR
  "frequency-to-wavelength": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Frequency to Wavelength Calculator | Optical Nanometer (nm) Solver",
    metaDescription: "Calculate electromagnetic wavelength in nanometers (λ = c / (f × n)) from optical frequency in Terahertz (THz) across vacuum and optical media.",
    canonicalUrl,
    introduction: {
      overview: "Converting optical wave frequency (measured in Terahertz, THz) back to electromagnetic wavelength (measured in nanometers, nm) is the fundamental reverse transformation of classical wave mechanics: λ = c / (f·n). In optical networking, laser physics, telecommunications, and spectroscopic analysis, transceivers and tunable laser sources are often tuned according to standardized ITU frequency channels, while optical filters, diffraction gratings, dielectric coatings, and waveguide dimensions are physically manufactured to exact geometric nanometer specifications.",
      applications: [
        "Translating ITU-T DWDM grid channel frequencies (e.g., 193.10 THz, 193.20 THz) into exact physical nanometer filter wavelengths.",
        "Sizing Bragg grating pitch and Fabry-Perot cavity mirror spacings for targeted laser frequencies.",
        "Designing anti-reflective (AR) optical coating layer thicknesses (d = λ/4) from laser frequencies.",
        "Specifying spectroscopic monochromator grating ruling angles for specified emission frequencies."
      ],
      industries: [
        "Optical Component Manufacturing & Thin-Film Coatings",
        "Telecommunications & WDM Network Planning",
        "Laser Diode Fabrication & Photonics",
        "Precision Optical Metrology"
      ]
    },
    quickAnswer: "The Frequency to Wavelength Calculator determines wavelength using λ = c / (f × n). For an optical frequency of 473.7 Terahertz in vacuum (n = 1.0), the calculated electromagnetic wavelength is approximately 632.87 nanometers (nm) (red He-Ne laser line).",
    governingEquation: {
      formula: "\\lambda = \\frac{c}{f \\times n}",
      explanation: "Wavelength (λ in nanometers, nm) equals the speed of light in vacuum (c = 299,792,458 m/s) divided by the product of optical frequency (f in Terahertz converted to Hz) and the refractive index (n) of the medium, multiplied by 10⁹ to convert meters to nanometers.",
      variables: [
        { symbol: "λ", label: "Wavelength", unit: "Nanometers (nm)", description: "Physical spatial period of the electromagnetic wave." },
        { symbol: "c", label: "Speed of Light", unit: "m/s", description: "Universal speed of light: c = 299,792,458 m/s." },
        { symbol: "f", label: "Frequency", unit: "Terahertz (THz)", description: "Oscillation frequency of the optical wave." },
        { symbol: "n", label: "Refractive Index", unit: "Ratio", description: "Phase refractive index of the medium (n ≥ 1.0)." }
      ]
    },
    inputParameters: [
      {
        name: "frequency",
        label: "Frequency (f)",
        unit: "Terahertz (THz)",
        defaultValue: 473.7,
        explanation: "The optical wave frequency in Terahertz. Default baseline is 473.7 THz."
      },
      {
        name: "refractiveIndex",
        label: "Medium Refractive Index (n)",
        unit: "Ratio",
        defaultValue: 1.0,
        explanation: "The refractive index of the medium through which light propagates. Default baseline is 1.0 (vacuum)."
      }
    ],
    outputExplanation: {
      unit: "Nanometers (nm)",
      interpretation: "The physical wavelength of the electromagnetic wave in nanometers.",
      designImpact: "Used by optical fabricators to design physical microstructures, thin-film coating stack thicknesses, and optical lithography masks."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Frequency (f)", value: 473.7, unit: "THz" },
        { label: "Medium Refractive Index (n)", value: 1.0, unit: "Ratio" }
      ],
      substitution: "Substitute f = 473.7 × 10¹² Hz, c = 299,792,458 m/s, and n = 1.0 into λ = (c / (f × n)) × 10⁹ nm:",
      intermediateSteps: [
        "1. Convert frequency to Hertz: f = 473.7 THz = 473.7 × 10¹² Hz.",
        "2. Compute speed of light in medium: v = 299,792,458 / 1.0 = 299,792,458 m/s.",
        "3. Divide speed of light by frequency: λ_meters = 299,792,458 / (473.7 × 10¹²) ≈ 6.3287409 × 10⁻⁷ meters.",
        "4. Convert meters to nanometers (multiply by 10⁹): λ_nm = (6.3287409 × 10⁻⁷) × 10⁹ ≈ 632.874 nm.",
        "5. Round to standard engineering precision: 632.87 nm."
      ],
      finalResult: "632.87",
      unit: "Nanometers (nm)"
    },
    practicalExample: {
      scenarioTitle: "ITU-T Optical Filter Passband Geometric Sizing",
      industryContext: "A thin-film optical filter engineer manufactures a dielectric interference bandpass filter for the ITU-T reference frequency channel of 193.10 THz.",
      problemStatement: "Calculate the exact vacuum wavelength in nanometers that the thin-film stack must center on.",
      engineeringSolution: "λ = (299,792,458 / (193.10 × 10¹²)) × 10⁹ = (1.55252438 × 10⁻⁶) × 10⁹ ≈ 1552.524 nm. The filter coating stack is centered at 1552.52 nm."
    },
    assumptions: [
      "Monochromatic electromagnetic wave oscillation.",
      "Propagation through a linear, non-absorptive optical medium.",
      "Vacuum speed of light is defined as exactly c = 299,792,458 m/s."
    ],
    limitations: [
      "In dispersive media (like fused silica or BK7 glass), wavelength shrinks proportionally to the refractive index: λ_medium = λ_vacuum / n.",
      "Temperature changes alter both glass refractive index and laser cavity length, causing slight wavelength drifts (typically ~0.1 nm/°C for semiconductor lasers).",
      "Does not calculate linewidth broadening caused by laser phase noise."
    ],
    commonMistakes: [
      "Entering frequency in Gigahertz (GHz) instead of Terahertz (THz), resulting in an answer off by a factor of 1,000.",
      "Confusing physical wavelength inside a fiber core (where n ≈ 1.468, so λ ≈ 1057 nm) with nominal vacuum wavelength (λ_0 = 1552 nm).",
      "Using rounded speed of light c = 3.00 × 10⁸ m/s, causing a ~0.4 nm error in the C-band telecom window."
    ],
    bestPractices: [
      "In high-precision optical telecommunications, always use the exact speed of light c = 299,792,458 m/s.",
      "When designing physical optical coatings (e.g., quarter-wave anti-reflective stacks), use the physical wavelength in the film: d = λ_vacuum / (4·n_film).",
      "Verify whether optical component specifications refer to vacuum wavelength (λ_0) or standard air wavelength (λ_air = λ_0 / 1.00029)."
    ],
    faqs: [
      {
        question: "How do you convert Terahertz (THz) to nanometers (nm)?",
        answer: "Wavelength (nm) = [299,792,458 / (Frequency in THz × 10¹²)] × 10⁹ = 299,792.458 / Frequency (THz)."
      },
      {
        question: "What vacuum wavelength corresponds to 193.10 THz?",
        answer: "193.10 THz corresponds to approximately 1552.52 nanometers (the anchor frequency of the ITU-T DWDM grid)."
      },
      {
        question: "What is the wavelength of 500 THz light?",
        answer: "λ = 299,792.458 / 500 = 599.58 nm (orange-yellow visible light)."
      },
      {
        question: "How does the refractive index affect wavelength?",
        answer: "When light enters a medium with refractive index n > 1, its velocity slows (v = c / n) and its wavelength compresses (λ_medium = λ_vacuum / n), while its frequency remains constant."
      },
      {
        question: "What is the frequency range of the visible spectrum in THz?",
        answer: "Visible light spans from approximately 400 THz (deep red, ~750 nm) to 789 THz (deep violet, ~380 nm)."
      },
      {
        question: "What is the wavelength spacing equivalent to a 100 GHz channel spacing at 1550 nm?",
        answer: "At 1550 nm, a frequency spacing of Δf = 100 GHz corresponds to a wavelength spacing of Δλ ≈ (λ²/c)·Δf = (1550 nm)² / (3×10¹⁷ nm/s) × 10¹¹ s⁻¹ ≈ 0.80 nm."
      },
      {
        question: "Why do fiber lasers and transceivers drift in wavelength with temperature?",
        answer: "Thermal expansion changes the laser cavity physical length, and the semiconductor material's refractive index changes with temperature (dn/dT), shifting the resonant emission wavelength."
      },
      {
        question: "Which standards define wavelength and frequency conversions for optical networks?",
        answer: "ITU-T Recommendation G.694.1 and IEC 61280-2-9 define spectral measurement methods and DWDM grid channel mappings."
      }
    ],
    standardsReferences: [
      { organization: "ITU-T", code: "ITU-T G.694.1", title: "Spectral grids for WDM applications: DWDM frequency grid" },
      { organization: "IEC", code: "IEC 61280-2-9", title: "Fiber Optic Communication Subsystem Test Procedures — Optical Spectral Analysis" },
      { organization: "BIPM", code: "SI Brochure (9th Ed., 2019)", title: "Defining Constants of the SI System" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 13. COLOR TEMPERATURE (KELVIN TO MIRED) CALCULATOR
  "kelvin-mired": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Color Temperature (Kelvin to Mired) Calculator | Micro Reciprocal Degrees Solver",
    metaDescription: "Convert correlated color temperature in Kelvin to Mireds (M = 1,000,000 / T) for photographic lighting, color correction filters, and cinematography.",
    canonicalUrl,
    introduction: {
      overview: "The Mired (micro reciprocal degree, symbol M) is a metric scale of color temperature defined as one million divided by the color temperature in Kelvin (M = 10⁶ / T). While color temperature in Kelvin describes the spectral distribution of a Planckian blackbody radiator, human visual color perception is non-linear with respect to Kelvin: a 500 K shift between 2,500 K and 3,000 K produces an obvious warm visual difference, whereas a 500 K shift between 6,000 K and 6,500 K is barely perceptible. On the Mired scale, equal numerical steps correspond to equal perceptual color differences, making Mired values the universal standard for specifying optical color temperature conversion (CTO/CTB) filters in cinematography, photography, and stage lighting.",
      applications: [
        "Specifying Color Temperature Orange (CTO) and Color Temperature Blue (CTB) gel filters in film production.",
        "Calculating photographic lens filter mired shift values (Mired Shift = M_target - M_source).",
        "Calibrating dual-color white LED studio light panels for seamless camera sensor color matching.",
        "Designing architectural tunable-white lighting controls to maintain uniform perceptual color steps."
      ],
      industries: [
        "Cinematography, Television & Film Production",
        "Commercial Photography & Studio Lighting",
        "Stage, Theater & Entertainment Lighting",
        "Architectural Tunable-White Lighting Control"
      ]
    },
    quickAnswer: "The Color Temperature (Kelvin to Mired) Calculator converts Kelvin to Mireds using Mired = 1,000,000 / (T × shiftFactor). For standard daylight at 5,500 Kelvin (shift factor 1.0), the calculated color value is approximately 181.82 Mireds.",
    governingEquation: {
      formula: "\\text{Mired} = \\frac{1,000,000}{T \\times \\text{shiftFactor}}",
      explanation: "Mired value (M in micro reciprocal degrees) equals 1,000,000 divided by the product of color temperature (T in Kelvin) and an optional optical filter shift factor multiplier (default = 1.0).",
      variables: [
        { symbol: "Mired", label: "Mired Value", unit: "Mireds (M)", description: "Color temperature on the perceptually uniform micro reciprocal degree scale." },
        { symbol: "T", label: "Color Temperature", unit: "Kelvin (K)", description: "Correlated color temperature of the light source." },
        { symbol: "shiftFactor", label: "Filter Shift Factor", unit: "Multiplier", description: "Optical filter multiplier factor (default = 1.0)." }
      ]
    },
    inputParameters: [
      {
        name: "kelvin",
        label: "Color Temperature (T)",
        unit: "Kelvin (K)",
        defaultValue: 5500,
        explanation: "The Correlated Color Temperature (CCT) of the light source in Kelvin. Standard daylight is 5,500 K; warm tungsten is 3,200 K. Default baseline is 5,500 K."
      },
      {
        name: "shiftFactor",
        label: "Filter Shift Factor",
        unit: "Multiplier",
        defaultValue: 1.0,
        explanation: "Optical transmission filter shift multiplier. Default baseline is 1.0."
      }
    ],
    outputExplanation: {
      unit: "Mireds (M)",
      interpretation: "The color temperature expressed in micro reciprocal degrees (10⁶ / K).",
      designImpact: "Used by gaffers and cinematographers to select exact CTO/CTB color gels by calculating Mired Shift: ΔM = M_destination - M_source."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Color Temperature (T)", value: 5500, unit: "K" },
        { label: "Filter Shift Factor", value: 1.0, unit: "Multiplier" }
      ],
      substitution: "Substitute T = 5500 K and shiftFactor = 1.0 into Mired = 1,000,000 / (T × shiftFactor):",
      intermediateSteps: [
        "1. Identify the source color temperature: T = 5500 Kelvin.",
        "2. Multiply temperature by shift factor: 5500 K × 1.0 = 5500.",
        "3. Divide 1,000,000 by 5500: Mired = 1,000,000 / 5500 ≈ 181.81818...",
        "4. Round to standard engineering precision: 181.82 Mireds."
      ],
      finalResult: "181.82",
      unit: "Mireds (M)"
    },
    practicalExample: {
      scenarioTitle: "Film Set Tungsten-to-Daylight (CTB) Gel Selection",
      industryContext: "A cinematographer is shooting a scene with a 3,200 K tungsten lamp (M_source = 10⁶ / 3200 = 312.5 Mireds) and needs to match incoming 5,600 K daylight (M_target = 10⁶ / 5600 = 178.6 Mireds).",
      problemStatement: "Calculate the required Mired Shift value and determine whether a Full CTB or Half CTB filter is required.",
      engineeringSolution: "Mired Shift = M_target - M_source = 178.6 - 312.5 = -133.9 Mireds (blue cooling shift). Standard Full CTB (Color Temperature Blue) gel provides a rated shift of -137 Mireds, matching the required -133.9 Mired correction."
    },
    assumptions: [
      "Light source spectrum follows or closely correlates with the Planckian blackbody locus.",
      "Linear reciprocal temperature scale behavior.",
      "Filter shift factors are constant across the visible band."
    ],
    limitations: [
      "Does not capture green-magenta tint deviations (Duv) perpendicular to the Planckian blackbody locus.",
      "Fluorescent and low-quality LED sources with discontinuous line emission spectra may have color rendering issues even when Mired values match.",
      "Filter transmission losses reduce overall luminous output."
    ],
    commonMistakes: [
      "Subtracting Kelvin values directly to choose color gels (a 1,000 K shift at 3,000 K requires a completely different filter than a 1,000 K shift at 6,000 K).",
      "Confusing positive mired shift (warming CTO filters: amber/orange) with negative mired shift (cooling CTB filters: blue).",
      "Forgetting to multiply by 1,000,000 when performing manual calculations."
    ],
    bestPractices: [
      "Always calculate gel filter requirements using Mired Shift: ΔM = (10⁶ / T_target) - (10⁶ / T_source).",
      "Remember standard filter values: Full CTO = +137 Mireds; Half CTO = +68 Mireds; Quarter CTO = +34 Mireds; Full CTB = -137 Mireds; Half CTB = -68 Mireds.",
      "Use a spectrophotometer to verify that the light source's Duv (distance from Planckian locus) is within ±0.005 to prevent green or magenta color casts."
    ],
    faqs: [
      {
        question: "What is a Mired?",
        answer: "A Mired (micro reciprocal degree) is a unit of measurement for color temperature, defined as 1,000,000 divided by the color temperature in Kelvin (Mired = 10⁶ / K)."
      },
      {
        question: "Why do photographers and cinematographers use Mireds instead of Kelvin?",
        answer: "Because human visual perception of color temperature is non-linear with Kelvin, but linear with Mireds. A filter with a rated Mired shift of +100 Mireds produces the exact same perceptual warming effect on any light source regardless of its starting temperature."
      },
      {
        question: "What are the Mired values of common light sources?",
        answer: "Candlelight (1900 K) ≈ 526 Mireds; Incandescent Tungsten (3200 K) ≈ 312.5 Mireds; Studio Halogen (3400 K) ≈ 294 Mireds; Direct Daylight (5500 K) ≈ 181.8 Mireds; Overcast Sky (6500 K) ≈ 153.8 Mireds; Blue Sky (10000 K) ≈ 100 Mireds."
      },
      {
        question: "What is a Mired Shift?",
        answer: "Mired Shift (ΔM) is the difference in Mired value between the desired target color temperature and the original light source: ΔM = M_target - M_source. Positive ΔM warms the light (orange); negative ΔM cools the light (blue)."
      },
      {
        question: "What Mired shift does a Full CTO (Color Temperature Orange) gel provide?",
        answer: "A standard Full CTO gel has a Mired shift of approximately +137 Mireds, converting 5,500 K daylight into approximately 3,200 K tungsten light."
      },
      {
        question: "What Mired shift does a Full CTB (Color Temperature Blue) gel provide?",
        answer: "A standard Full CTB gel has a Mired shift of approximately -137 Mireds, converting 3,200 K tungsten light into approximately 5,700 K daylight."
      },
      {
        question: "How do Mired values relate to tunable white LED controllers?",
        answer: "High-end DMX and DALI tunable-white lighting controllers map their slider faders to linear Mired steps rather than Kelvin to ensure smooth, visually uniform color temperature transitions."
      },
      {
        question: "Which standards govern color temperature and filter definitions?",
        answer: "ISO 7589 (Photography — Illuminants for sensitometry) and CIE 15:2018 (Colorimetry) define standards for color temperature and reciprocal color temperature."
      }
    ],
    standardsReferences: [
      { organization: "ISO", code: "ISO 7589:2002", title: "Photography — Illuminants for Sensitometry — Specifications for Daylight and Tungsten" },
      { organization: "CIE", code: "CIE 15:2018", title: "Colorimetry (4th Edition)" },
      { organization: "SMPTE", code: "SMPTE RP 2093", title: "Television Production Lighting Specifications and Terminology" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 14. COLOR TEMPERATURE (MIRED TO KELVIN) CALCULATOR
  "mired-to-kelvin": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Color Temperature (Mired to Kelvin) Calculator | Correlated Color Temperature Solver",
    metaDescription: "Convert micro reciprocal degrees (Mireds) back to Correlated Color Temperature in Kelvin (T = 1,000,000 / M) for studio lighting and optical filter design.",
    canonicalUrl,
    introduction: {
      overview: "Converting micro reciprocal degrees (Mireds) back to Correlated Color Temperature in Kelvin (T = 10⁶ / Mired) completes the bidirectional transformation between perceptual color shifts and thermodynamic blackbody temperatures. When optical filter specifications, camera white balance firmware settings, or DMX lighting console channels provide Mired values, converting to Kelvin is required to configure digital color rendering engines, verify luminaire datasheet ratings, and ensure architectural lighting code compliance.",
      applications: [
        "Converting camera sensor Mired color matrix offsets into user-facing Kelvin color temperatures.",
        "Calculating resulting color temperature after applying physical gelatin filters with known Mired shift ratings.",
        "Translating DALI-2 (IEC 62386-209) tunable white lighting command Mired values into Kelvin.",
        "Calibrating optical colorimeters and spectroradiometers against Planckian blackbody reference curves."
      ],
      industries: [
        "Architectural Lighting Controls (DALI / DMX)",
        "Digital Camera Firmware & Image Sensor Processing",
        "Film, Stage & Television Studio Engineering",
        "Photometry & Colorimetric Metrology"
      ]
    },
    quickAnswer: "The Color Temperature (Mired to Kelvin) Calculator determines Kelvin temperature using T = 1,000,000 / (Mired × shiftFactor). For a Mired value of 181.8 Mireds (shift factor 1.0), the calculated color temperature is approximately 5,500.55 Kelvin (K) (standard daylight).",
    governingEquation: {
      formula: "T = \\frac{1,000,000}{\\text{Mired} \\times \\text{shiftFactor}}",
      explanation: "Correlated Color Temperature (T in Kelvin) is calculated by dividing 1,000,000 by the product of the Mired value (M) and the optical filter shift factor multiplier (default = 1.0).",
      variables: [
        { symbol: "T", label: "Color Temperature", unit: "Kelvin (K)", description: "Thermodynamic / correlated color temperature of the light source." },
        { symbol: "Mired", label: "Mired Value", unit: "Mireds (M)", description: "Micro reciprocal degree color temperature value." },
        { symbol: "shiftFactor", label: "Filter Shift Factor", unit: "Multiplier", description: "Optical filter multiplier factor (default = 1.0)." }
      ]
    },
    inputParameters: [
      {
        name: "mired",
        label: "Color Value (M)",
        unit: "Mireds (M)",
        defaultValue: 181.8,
        explanation: "The color temperature expressed in micro reciprocal degrees (Mireds). Default baseline is 181.8 M (corresponding to ~5,500 K daylight)."
      },
      {
        name: "shiftFactor",
        label: "Filter Shift Factor",
        unit: "Multiplier",
        defaultValue: 1.0,
        explanation: "Optical filter shift multiplier. Default baseline is 1.0."
      }
    ],
    outputExplanation: {
      unit: "Kelvin (K)",
      interpretation: "The equivalent Correlated Color Temperature in Kelvin.",
      designImpact: "Used by lighting designers and colorists to verify standard CCT presets (e.g., 2700K warm white, 3000K soft white, 4000K neutral white, 5000K/6500K daylight)."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Color Value (M)", value: 181.8, unit: "M" },
        { label: "Filter Shift Factor", value: 1.0, unit: "Multiplier" }
      ],
      substitution: "Substitute Mired = 181.8 M and shiftFactor = 1.0 into T = 1,000,000 / (Mired × shiftFactor):",
      intermediateSteps: [
        "1. Identify the input Mired value: M = 181.8 Mireds.",
        "2. Multiply by shift factor: 181.8 × 1.0 = 181.8.",
        "3. Divide 1,000,000 by 181.8: T = 1,000,000 / 181.8 ≈ 5500.550055... Kelvin.",
        "4. Round to standard engineering precision: 5500.55 Kelvin."
      ],
      finalResult: "5500.55",
      unit: "Kelvin (K)"
    },
    practicalExample: {
      scenarioTitle: "DALI-2 Tunable White Luminaire Controller Calibration",
      industryContext: "A building automation engineer configures a DALI-2 (IEC 62386-209 Type 8) lighting controller that sets luminaire color using a 16-bit Mired register value of 370.37 Mireds.",
      problemStatement: "Determine the corresponding Kelvin color temperature to ensure the luminaire matches the specified 2,700 K warm white hospitality standard.",
      engineeringSolution: "T = 1,000,000 / 370.37 ≈ 2,700.00 Kelvin. The DALI-2 register setting corresponds precisely to 2,700 K warm white."
    },
    assumptions: [
      "The spectral distribution corresponds to a Planckian blackbody radiator or standard CIE daylight illuminant.",
      "Linear micro reciprocal degree mathematical relationship.",
      "Filter multiplier applies uniformly across the photopic spectrum."
    ],
    limitations: [
      "Does not convey spectral color rendering metrics (CRI Ra, R9, TM-30 Rf/Rg).",
      "Cannot determine green/magenta tint offsets from the blackbody curve without chromaticity coordinates (x, y) or Duv data.",
      "Non-thermal sources (like LEDs and fluorescent lamps) are correlated approximations (CCT) rather than true thermodynamic temperatures."
    ],
    commonMistakes: [
      "Dividing the Mired value into 1,000 instead of 1,000,000, causing a 1,000x scaling error.",
      "Assuming high Mired values mean hot/cool blue light (high Mired = low Kelvin = warm orange; low Mired = high Kelvin = cool blue).",
      "Using Mired values for monochromatic LED sources (such as pure red or pure blue LEDs) which have no valid CCT."
    ],
    bestPractices: [
      "Remember the inverse relationship: as Mireds increase, Kelvin temperature decreases (warmer color appearance).",
      "When designing tunable-white digital controls (DALI-2 / Zigbee / Matter), store color values internally in Mireds (153 M to 500 M) to achieve smooth, visually linear color fading.",
      "Verify that high-temperature daylight sources (> 5000 K) adhere to CIE Standard Illuminant D Series spectral power distributions."
    ],
    faqs: [
      {
        question: "How do you convert Mired to Kelvin?",
        answer: "Divide 1,000,000 by the Mired value: Kelvin = 1,000,000 / Mired."
      },
      {
        question: "Why does a higher Mired value mean a lower Kelvin temperature?",
        answer: "Because Mired is a reciprocal scale (10⁶ / T). As Kelvin temperature T decreases (becoming warmer and more amber), the reciprocal 1/T increases, resulting in a larger Mired value."
      },
      {
        question: "What Kelvin temperature corresponds to 312.5 Mireds?",
        answer: "T = 1,000,000 / 312.5 = 3,200 Kelvin (standard tungsten halogen studio light)."
      },
      {
        question: "What Kelvin temperature corresponds to 153.85 Mireds?",
        answer: "T = 1,000,000 / 153.85 ≈ 6,500 Kelvin (CIE Standard Illuminant D65 overcast daylight)."
      },
      {
        question: "How is the Mired scale used in the DALI-2 lighting standard?",
        answer: "DALI-2 Type 8 (IEC 62386-209) standardizes color temperature control using Mired units (Kelvin-1) in 16-bit integer registers, allowing visually linear color tuning across tunable-white luminaires."
      },
      {
        question: "What is the difference between true Color Temperature and Correlated Color Temperature (CCT)?",
        answer: "True color temperature applies only to blackbody thermal radiators (like tungsten filaments). Correlated Color Temperature (CCT) applies to non-blackbody light sources (like LEDs and fluorescent lamps) whose perceived color matches a blackbody radiator at that temperature."
      },
      {
        question: "Can two lights with the exact same Kelvin temperature look different in color?",
        answer: "Yes. If one light has a positive Duv (greenish tint) and the other has a negative Duv (magenta/pinkish tint), they will look noticeably different to the eye even though they share the exact same CCT in Kelvin and Mireds."
      },
      {
        question: "Which standards specify CCT tolerances and chromaticity bins for LED lighting?",
        answer: "ANSI C78.377 and CIE 15:2018 define standardized chromaticity quadrangles and MacAdam ellipse tolerance bins (1-step to 7-step SDCM) for solid-state lighting products."
      }
    ],
    standardsReferences: [
      { organization: "IEC", code: "IEC 62386-209:2011", title: "Digital Addressable Lighting Interface (DALI) — Part 209: Colour Control (Device Type 8)" },
      { organization: "ANSI", code: "ANSI C78.377-2017", title: "Specifications for the Chromaticity of Solid-State Lighting Products" },
      { organization: "CIE", code: "CIE 15:2018", title: "Colorimetry (4th Edition)" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 15. LUX TO COLOR TEMPERATURE (MIRED) CALCULATOR
  "lux-to-color-temp-mired-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Lux to Color Temperature (Mired) Calculator | Photopic Mired Solver",
    metaDescription: "Calculate micro reciprocal degree (Mired) color temperature values from Correlated Color Temperature in Kelvin under ambient photopic Lux illuminance levels.",
    canonicalUrl,
    introduction: {
      overview: "Color temperature (measured in Kelvin, K) and illuminance (measured in Lux, lx) are the two fundamental dimensions defining ambient visual environments. In architectural lighting, ergonomics, and circadian biology, the Kruithof curve describes the psychological perception of lighting: low illuminance levels feel pleasing with warm color temperatures (high Mireds), whereas high illuminance levels feel natural with cool daylight color temperatures (low Mireds). Converting source Kelvin temperatures into micro reciprocal degrees (Mireds = 10⁶ / T_k) within a known photopic lux environment allows optical engineers and smart building designers to evaluate circadian lighting metrics, tune circadian stimulus (CS), and program automated diurnal color-temperature schedules.",
      applications: [
        "Evaluating human-centric architectural lighting and circadian stimulus (CS) schedules.",
        "Programming smart office tunable-white circadian daylight-harvesting control algorithms.",
        "Designing broadcast studio and video-conferencing ambient illuminance and color balance.",
        "Calibrating museum and gallery illuminance (lux) limits alongside color temperature constraints to prevent artwork photochemical fading."
      ],
      industries: [
        "Human-Centric & Circadian Architectural Lighting",
        "Smart Building Automation & IoT Lighting Controls",
        "Television Broadcast & Video Production Studios",
        "Museum Conservation & Cultural Heritage Preservation"
      ]
    },
    quickAnswer: "The Lux to Color Temperature (Mired) Calculator determines the Mired value from source color temperature using Mired = 1,000,000 / T_k under ambient illuminance. With a color temperature of 6,500 Kelvin and an ambient illuminance of 500 Lux, the calculated color value is approximately 153.85 Mireds.",
    governingEquation: {
      formula: "\\text{Mired} = \\frac{1,000,000}{T_k}",
      explanation: "Mired color value (M in micro reciprocal degrees) equals 1,000,000 divided by the Correlated Color Temperature (T_k in Kelvin) of the light source, evaluated within the specified photopic lux illuminance field.",
      variables: [
        { symbol: "Mired", label: "Mired Value", unit: "Mireds (M)", description: "Color temperature expressed on the reciprocal Mired scale." },
        { symbol: "Tk", label: "Color Temperature", unit: "Kelvin (K)", description: "Correlated Color Temperature (CCT) of the ambient source." },
        { symbol: "E", label: "Illuminance", unit: "Lux (lx)", description: "Ambient photopic illuminance incident on the task surface." }
      ]
    },
    inputParameters: [
      {
        name: "temperature",
        label: "Color Temperature (T)",
        unit: "Kelvin (K)",
        defaultValue: 6500,
        explanation: "The Correlated Color Temperature of the light source in Kelvin. Default baseline is 6,500 K (CIE D65 standard daylight)."
      },
      {
        name: "illuminance",
        label: "Illuminance (E)",
        unit: "Lux (lx)",
        defaultValue: 500,
        explanation: "The ambient photopic illuminance level at the task surface in Lux. Standard office workplane illuminance is 500 lx. Default baseline is 500 lx."
      }
    ],
    outputExplanation: {
      unit: "Mireds (M)",
      interpretation: "The micro reciprocal degree value of the light source in the specified illuminance environment.",
      designImpact: "Allows lighting controls to program linear color transitions along the Kruithof comfort curve as illuminance dims or brightens."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Color Temperature (T)", value: 6500, unit: "K" },
        { label: "Illuminance (E)", value: 500, unit: "lx" }
      ],
      substitution: "Substitute T_k = 6500 K into Mired = 1,000,000 / T_k:",
      intermediateSteps: [
        "1. Identify the source color temperature: T_k = 6500 Kelvin.",
        "2. Note the ambient task illuminance: E = 500 Lux (photopic visual regime).",
        "3. Divide 1,000,000 by 6500: Mired = 1,000,000 / 6500 ≈ 153.84615...",
        "4. Round to standard engineering precision: 153.85 Mireds."
      ],
      finalResult: "153.85",
      unit: "Mireds (M)"
    },
    practicalExample: {
      scenarioTitle: "Circadian Office Lighting Diurnal Schedule Programming",
      industryContext: "A smart building engineer programs an automated human-centric lighting schedule for a commercial office: at 9:00 AM, the system ramps up to 500 Lux at 6,500 K (153.85 Mireds) for alertness, and at 5:00 PM dims down to 200 Lux at 2,700 K (370.37 Mireds) to promote melatonin onset.",
      problemStatement: "Calculate the total Mired shift required between morning and evening states.",
      engineeringSolution: "Morning Mired: M_am = 10⁶ / 6500 = 153.85 M. Evening Mired: M_pm = 10⁶ / 2700 = 370.37 M. Required Mired Shift = 370.37 - 153.85 = +216.52 Mireds (warming shift) as illuminance decreases from 500 lx to 200 lx."
    },
    assumptions: [
      "Illuminance is in the photopic vision regime (E > 10 Lux, cone-dominated photoreception).",
      "Source spectrum is continuous or a high-CRI phosphor-converted white LED.",
      "Reciprocal micro degree scale accurately represents perceptual color differences."
    ],
    limitations: [
      "Under mesopic and scotopic conditions (E < 3 Lux), the Purkinje shift alters visual spectral sensitivity toward blue wavelengths (V'(λ)).",
      "Does not directly output Equivalent Melanopic Lux (EML) or Melanopic EDI without full spectral power distribution data.",
      "Mired values assume Planckian locus alignment and do not convey green/magenta off-axis chromaticity shifts."
    ],
    commonMistakes: [
      "Assuming high lux requires high Mireds (high lux naturally pairs with low Mired / cool daylight temperatures according to Kruithof's criteria).",
      "Confusing photopic illuminance (lux) with melanopic illuminance (melanopic lux / EDI).",
      "Omitting ambient task illuminance when evaluating human visual comfort and glare."
    ],
    bestPractices: [
      "Design circadian office lighting according to UL 24480 and WELL Building Standard v2 (Feature L03: Circadian Lighting Design).",
      "Pair high illuminance (> 500 lx) with cool color temperatures (5000K–6500K / 150–200 Mireds) during morning hours, and low illuminance (< 200 lx) with warm color temperatures (2200K–2700K / 370–450 Mireds) in the evening.",
      "Ensure color temperature shifts occur slowly (over 20–30 minutes) to prevent occupant distraction."
    ],
    faqs: [
      {
        question: "How does ambient lux affect the human perception of color temperature?",
        answer: "According to the Kruithof curve, at high illuminance levels (e.g., 500–1000 Lux), cool daylight temperatures (5000K–6500K / 150–200 Mireds) appear natural and invigorating, whereas warm light feels overly yellow. At low illuminance levels (< 150 Lux), cool light appears dim and gloomy, while warm light (2700K / 370 Mireds) feels cozy and comfortable."
      },
      {
        question: "What is the formula to convert Kelvin to Mireds in this calculator?",
        answer: "Mired = 1,000,000 / Color Temperature in Kelvin (T_k)."
      },
      {
        question: "What is the Kruithof curve in lighting design?",
        answer: "The Kruithof curve is an empirical psychophysical model defining the region of illuminance (lux) and correlated color temperature (Kelvin) that human observers consider aesthetically pleasing and comfortable."
      },
      {
        question: "What is Equivalent Melanopic Lux (EML)?",
        answer: "Equivalent Melanopic Lux (EML) is a metric quantifying light's circadian biological impact on intrinsically photosensitive retinal ganglion cells (ipRGCs) using the melanopic action spectrum peaking at 490 nm (cyan-blue light)."
      },
      {
        question: "Why is 6,500 K (153.85 Mireds) used as standard daylight?",
        answer: "CIE Standard Illuminant D65 represents average northern sky daylight with a correlated color temperature of 6,504 K, corresponding to approximately 153.85 Mireds."
      },
      {
        question: "What is the photopic visual range in illuminance?",
        answer: "Photopic vision occurs at illuminance levels above approximately 10 Lux, where retinal cone photoreceptors dominate visual acuity, color perception, and foveal detail."
      },
      {
        question: "How do smart tunable-white luminaires adjust both lux and Mireds?",
        answer: "Tunable-white LED fixtures contain warm white (e.g., 2200K) and cool white (e.g., 6500K) LED channels. Digital controllers vary the pulse-width modulation (PWM) duty cycle of each channel independently to adjust total flux (lux) and color blend (Mireds)."
      },
      {
        question: "Which standards regulate human-centric circadian lighting design?",
        answer: "CIE S 026/E:2018 (CIE System for Metrology of Optical Radiation for ipRGC-Influenced Responses to Light) and UL 24480 define standardized metrics for circadian lighting."
      }
    ],
    standardsReferences: [
      { organization: "CIE", code: "CIE S 026/E:2018", title: "CIE System for Metrology of Optical Radiation for ipRGC-Influenced Responses to Light" },
      { organization: "UL", code: "UL 24480", title: "Design Guideline for Promoting Circadian Entrainment with Light for Day-Active People" },
      { organization: "IWBI", code: "WELL Building Standard v2", title: "Feature L03: Circadian Lighting Design" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 16. LUX TO KELVIN (COLOR TEMPERATURE) CALCULATOR
  "lux-to-kelvin-color-temp-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Lux to Kelvin (Color Temperature) Calculator | Photopic Kelvin Solver",
    metaDescription: "Calculate Correlated Color Temperature in Kelvin (T = 1,000,000 / Mired) from Mired values evaluated under photopic ambient Lux illuminance levels.",
    canonicalUrl,
    introduction: {
      overview: "Correlated Color Temperature (CCT, measured in Kelvin) defines the apparent warmth or coolness of light emitted by artificial luminaires and natural daylight sources. In architectural lighting, smart building automation, and ergonomic workplace engineering, light sources are evaluated simultaneously in terms of task illuminance (measured in Lux) and color temperature (measured in Kelvin). Converting Mired color values back to Kelvin under designated photopic illuminance levels allows facility engineers to verify luminaire specification compliance, calibrate tunable-white circadian schedules, and ensure optimal visual performance.",
      applications: [
        "Converting DALI-2 / Zigbee Mired color control settings into Kelvin ratings for workplace compliance audits.",
        "Verifying tunable-white luminaire color tracking across different dimming lux levels.",
        "Calibrating retail display lighting to match merchandise material finishes and brand aesthetics.",
        "Designing biological lighting protocols for healthcare and senior living facilities."
      ],
      industries: [
        "Architectural & Commercial Lighting Engineering",
        "Healthcare & Senior Living Facility Design",
        "Retail Store Planning & Visual Merchandising",
        "Smart Building Controls & IoT Systems"
      ]
    },
    quickAnswer: "The Lux to Kelvin (Color Temperature) Calculator determines color temperature in Kelvin using T = 1,000,000 / Mired under ambient illuminance. For a Mired value of 153.85 Mireds at an ambient illuminance of 500 Lux, the resulting color temperature is approximately 6,500.0 Kelvin (K) (CIE D65 standard daylight).",
    governingEquation: {
      formula: "T = \\frac{1,000,000}{\\text{Mired}}",
      explanation: "Correlated Color Temperature (T in Kelvin) equals 1,000,000 divided by the Mired color value (M), evaluated in the presence of ambient photopic illuminance (E in Lux).",
      variables: [
        { symbol: "T", label: "Color Temperature", unit: "Kelvin (K)", description: "Correlated Color Temperature of the light source." },
        { symbol: "Mired", label: "Mired Value", unit: "Mireds (M)", description: "Input micro reciprocal degree color value." },
        { symbol: "E", label: "Illuminance", unit: "Lux (lx)", description: "Ambient surface illuminance level." }
      ]
    },
    inputParameters: [
      {
        name: "mired",
        label: "Mired Value (M)",
        unit: "Mireds (M)",
        defaultValue: 153.85,
        explanation: "The micro reciprocal degree color temperature value. Default baseline is 153.85 M (corresponding to 6,500 K daylight)."
      },
      {
        name: "illuminance",
        label: "Illuminance (E)",
        unit: "Lux (lx)",
        defaultValue: 500,
        explanation: "The ambient illuminance in Lux. Default baseline is 500 lx (standard indoor office desk illuminance)."
      }
    ],
    outputExplanation: {
      unit: "Kelvin (K)",
      interpretation: "The Correlated Color Temperature in Kelvin of the light source.",
      designImpact: "Used by building lighting designers to specify commercial LED luminaire CCT bins per ANSI C78.377."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Mired Value (M)", value: 153.85, unit: "M" },
        { label: "Illuminance (E)", value: 500, unit: "lx" }
      ],
      substitution: "Substitute Mired = 153.85 into T = 1,000,000 / Mired:",
      intermediateSteps: [
        "1. Identify the input Mired value: M = 153.85 Mireds.",
        "2. Note the ambient task illuminance: E = 500 Lux.",
        "3. Divide 1,000,000 by 153.85: T = 1,000,000 / 153.85 ≈ 6499.8375... Kelvin.",
        "4. Round to standard engineering precision: 6500.0 Kelvin."
      ],
      finalResult: "6500",
      unit: "Kelvin (K)"
    },
    practicalExample: {
      scenarioTitle: "Retail Jewelry Display Case Lighting Optimization",
      industryContext: "A visual merchandising consultant designs a diamond display counter illuminated to 1,200 Lux. The lighting fixture is set via DMX to a Mired value of 181.8 Mireds.",
      problemStatement: "Determine the Kelvin color temperature to ensure the diamonds exhibit sharp brilliance without yellow tinting.",
      engineeringSolution: "T = 1,000,000 / 181.8 ≈ 5,500.55 Kelvin (Daylight White). At 1,200 Lux and 5,500 K, the diamonds refract crisp white fire with high sparkle contrast."
    },
    assumptions: [
      "The light source is evaluated within the photopic visual range (E > 10 Lux).",
      "The light source has a spectral distribution aligned with the Planckian blackbody radiator or CIE daylight illuminant curve.",
      "Input Mired value is greater than zero."
    ],
    limitations: [
      "Does not convey spectral color rendering quality (CRI / TM-30).",
      "Does not indicate off-axis green/magenta chromaticity tint (Duv).",
      "Correlated color temperature is not defined for deeply saturated colored lights (pure red, green, blue)."
    ],
    commonMistakes: [
      "Assuming higher Mired values represent higher Kelvin temperatures (the relationship is strictly inverse).",
      "Specifying cool daylight (> 5000 K) in low-illuminance residential spaces (< 100 lx), creating a cold, dingy ambiance.",
      "Ignoring chromaticity bin tolerances (MacAdam steps) when matching fixtures from different manufacturers."
    ],
    bestPractices: [
      "Follow standard CCT application targets: 2700K (Warm White) for hospitality/living; 3000K (Soft White) for residential/dining; 4000K (Neutral White) for offices/schools; 5000K–6500K (Daylight) for industrial inspection and drafting.",
      "Ensure all luminaires in a common visual space adhere to tight 3-step MacAdam ellipse chromaticity bins (ANSI C78.377).",
      "Verify that ambient task illuminance matches the chosen color temperature along the Kruithof comfort zone."
    ],
    faqs: [
      {
        question: "How do you calculate Kelvin from Mireds in this calculator?",
        answer: "Kelvin = 1,000,000 / Mired. For example, 153.85 Mireds yields 1,000,000 / 153.85 ≈ 6,500 K."
      },
      {
        question: "What is standard office lighting in Kelvin and Lux?",
        answer: "Standard modern commercial office lighting typically provides 500 Lux of illuminance with a neutral color temperature of 4,000 K (250 Mireds)."
      },
      {
        question: "What Kelvin temperature is considered warm white vs cool white?",
        answer: "Warm White is typically 2,700 K to 3,000 K (333–370 Mireds); Neutral White is 3,500 K to 4,000 K (250–285 Mireds); Cool White / Daylight is 5,000 K to 6,500 K (154–200 Mireds)."
      },
      {
        question: "What is a MacAdam ellipse in lighting color temperature?",
        answer: "A MacAdam ellipse defines a region on the chromaticity diagram where all colors are indistinguishable to the human eye from the center point. A 3-step MacAdam ellipse is the commercial standard for unnoticeable fixture-to-fixture color variation."
      },
      {
        question: "Why does sunlight change color temperature throughout the day?",
        answer: "Due to Rayleigh scattering in Earth's atmosphere: at sunrise and sunset, light travels through a thick air mass, scattering blue wavelengths and leaving warm 2,000K–3,000K red/amber light; at solar noon, path length is minimal, producing 5,500K–6,500K white daylight."
      },
      {
        question: "What is Correlated Color Temperature (CCT)?",
        answer: "CCT is the temperature of a Planckian blackbody radiator whose perceived chromaticity most closely matches that of the given light source."
      },
      {
        question: "Does color temperature affect human melatonin secretion?",
        answer: "Yes. Light with high CCT (> 5000 K) contains high cyan-blue content (~480–490 nm) that activates ipRGC photoreceptors, suppressing melatonin production and boosting daytime alertness."
      },
      {
        question: "Which standards define indoor workplace lighting illuminance and color quality?",
        answer: "ISO/CIE 8995-1 / EN 12464-1, ANSI C78.377, and IES RP-1 define illuminance levels, CCT categories, and color rendering minimums for indoor workplaces."
      }
    ],
    standardsReferences: [
      { organization: "ISO / CIE", code: "ISO/CIE 8995-1:2002", title: "Lighting of Work Places — Part 1: Indoor" },
      { organization: "ANSI", code: "ANSI C78.377-2017", title: "Electric Lamps — Specifications for the Chromaticity of Solid-State Lighting Products" },
      { organization: "CIE", code: "CIE 15:2018", title: "Colorimetry (4th Edition)" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 17. LUX TO NANOMETER CALCULATOR
  "lux-to-nanometer-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Lux to Nanometer Calculator | Wien's Displacement Law Peak Wavelength Solver",
    metaDescription: "Calculate peak spectral emission wavelength in nanometers (λ_peak = b / T_k) using Wien's Displacement Law for thermal and blackbody light sources.",
    canonicalUrl,
    introduction: {
      overview: "Thermal blackbody radiators—such as the Sun, incandescent tungsten filaments, molten metals, and cosmic background radiation—emit a continuous electromagnetic spectrum described by Planck's radiation law. Wien's Displacement Law states that the peak spectral radiant exitance wavelength (λ_peak, measured in nanometers) is inversely proportional to the absolute thermodynamic temperature (T_k in Kelvin) of the emitter: λ_peak = b / T_k, where b is Wien's displacement constant (b ≈ 2,897,771.9 nm·K). In optical spectroscopy, thermal imaging, astrophysics, and pyrometry, calculating peak wavelength in nanometers under ambient photopic illuminance levels allows engineers to evaluate detector spectral sensitivity bands, solar collector absorption profiles, and thermal infrared sensor responsivity.",
      applications: [
        "Determining the peak solar emission wavelength in photovoltaic and solar thermal collector design.",
        "Calibrating optical pyrometers and thermal infrared cameras for non-contact high-temperature measurement.",
        "Designing spectroradiometer grating ranges for high-temperature incandescent filament characterization.",
        "Analyzing stellar classification and surface temperatures in astrophysics and astronomical spectroscopy."
      ],
      industries: [
        "Optical Spectroscopy & Thermal Metrology",
        "Solar Energy & Photovoltaic Systems",
        "Astrophysics & Space Optical Instrumentation",
        "Industrial Pyrometry & High-Temperature Manufacturing"
      ]
    },
    quickAnswer: "The Lux to Nanometer Calculator determines peak spectral emission wavelength using Wien's Displacement Law: λ_peak = 2,897,771.9 / T_k. For a source color temperature of 5,500 Kelvin (solar daylight) under 1,000 Lux illuminance, the peak emission wavelength is approximately 526.87 nanometers (nm) (green-yellow visible light).",
    governingEquation: {
      formula: "\\lambda_{\\text{peak}} = \\frac{2,897,771.9}{T_k}",
      explanation: "Peak spectral emission wavelength (λ_peak in nanometers, nm) is calculated using Wien's Displacement Constant (b = 2,897,771.9 nm·K) divided by the absolute thermodynamic color temperature (T_k in Kelvin) of the radiator.",
      variables: [
        { symbol: "λ_peak", label: "Peak Wavelength", unit: "Nanometers (nm)", description: "Wavelength of maximum spectral radiant exitance per unit wavelength." },
        { symbol: "b", label: "Wien's Constant", unit: "nm·K", description: "Wien's displacement constant: b = 2,897,771.9 nm·K." },
        { symbol: "Tk", label: "Color Temperature", unit: "Kelvin (K)", description: "Thermodynamic temperature of the blackbody radiator." },
        { symbol: "E", label: "Illuminance", unit: "Lux (lx)", description: "Ambient photopic illuminance level." }
      ]
    },
    inputParameters: [
      {
        name: "temperature",
        label: "Color Temperature (T)",
        unit: "Kelvin (K)",
        defaultValue: 5500,
        explanation: "The thermodynamic / blackbody color temperature of the emitting source in Kelvin. Default baseline is 5,500 K (approximate solar surface temperature)."
      },
      {
        name: "illuminance",
        label: "Illuminance (E)",
        unit: "Lux (lx)",
        defaultValue: 1000,
        explanation: "The ambient photopic illuminance level in Lux. Default baseline is 1,000 lx."
      }
    ],
    outputExplanation: {
      unit: "Nanometers (nm)",
      interpretation: "The peak spectral wavelength in nanometers where the blackbody emitter radiates maximum spectral power per unit wavelength.",
      designImpact: "Used by optical engineers to align photodetector spectral responsivity curves with the emitter's peak radiant wavelength."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Color Temperature (T)", value: 5500, unit: "K" },
        { label: "Illuminance (E)", value: 1000, unit: "lx" }
      ],
      substitution: "Substitute T_k = 5500 K into λ_peak = 2,897,771.9 / T_k:",
      intermediateSteps: [
        "1. Identify the emitter temperature: T_k = 5500 Kelvin.",
        "2. Note the ambient task illuminance: E = 1000 Lux.",
        "3. Divide Wien's displacement constant by temperature: λ_peak = 2,897,771.9 / 5500 ≈ 526.8676... nm.",
        "4. Round to standard engineering precision: 526.87 nanometers."
      ],
      finalResult: "526.87",
      unit: "Nanometers (nm)"
    },
    practicalExample: {
      scenarioTitle: "Solar Photovoltaic Spectral Bandgap Optimization",
      industryContext: "A photovoltaic cell research team optimizes a triple-junction solar cell to capture peak solar radiation from the Sun's photosphere (effective blackbody temperature T ≈ 5,778 K).",
      problemStatement: "Calculate the peak solar radiation wavelength in nanometers using Wien's Displacement Law.",
      engineeringSolution: "λ_peak = 2,897,771.9 / 5,778 K ≈ 501.52 nanometers (green light). The top cell junction (InGaP) is tailored with a bandgap corresponding to ~500 nm to capture maximum solar spectral energy."
    },
    assumptions: [
      "The light source emits a continuous thermal blackbody radiation spectrum according to Planck's law.",
      "Wien's displacement constant b = 2,897,771.9 nm·K (wavelength domain formulation).",
      "Propagation through vacuum or transparent air."
    ],
    limitations: [
      "Does not apply to non-thermal monochromatic emitters (such as semiconductor laser diodes or low-pressure gas discharge lamps) which emit narrow atomic spectral lines.",
      "Peak wavelength in the frequency domain (ν_peak = 5.879 × 10¹⁰ × T Hz) does not correspond to c / λ_peak due to the non-linear Jacobian transformation between wavelength and frequency intervals.",
      "Atmospheric absorption (ozone, water vapor, CO₂) creates transmission notches in the terrestrial solar spectrum."
    ],
    commonMistakes: [
      "Applying Wien's Displacement Law to phosphor-converted white LEDs, which produce peak emissions based on semiconductor and phosphor chemistry rather than thermal blackbody laws.",
      "Confusing the wavelength-domain peak (b = 2.898 × 10⁻³ m·K) with the frequency-domain peak (b' = 5.879 × 10¹⁰ Hz/K).",
      "Using Celsius instead of absolute Kelvin for temperature inputs."
    ],
    bestPractices: [
      "Always convert temperatures to Kelvin (K = °C + 273.15) before calculating Wien's displacement wavelength.",
      "For solar energy calculations, remember that the Sun's peak spectral irradiance in space is approximately 500 nm, aligning closely with human eye photopic peak sensitivity (555 nm).",
      "For room-temperature thermal imaging (300 K / 27°C), peak infrared radiation occurs in the long-wave infrared (LWIR) band at λ_peak ≈ 2,898,000 / 300 ≈ 9.66 µm (9,660 nm)."
    ],
    faqs: [
      {
        question: "What is Wien's Displacement Law?",
        answer: "Wien's Displacement Law states that the wavelength of maximum spectral emission from a blackbody radiator is inversely proportional to its absolute temperature: λ_peak = b / T, where b ≈ 2,897,771.9 nm·K."
      },
      {
        question: "Why does the Sun (5500 K – 5800 K) peak at green-yellow wavelengths (~500–530 nm)?",
        answer: "Because dividing Wien's constant (2,897,771.9 nm·K) by 5,500 K yields approximately 527 nm, which lies directly in the green portion of the visible electromagnetic spectrum."
      },
      {
        question: "What is the peak wavelength emitted by the human body (310 K / 37°C)?",
        answer: "λ_peak = 2,897,771.9 / 310.15 K ≈ 9,343 nm (9.34 µm), which lies in the Long-Wave Infrared (LWIR) thermal radiation spectrum."
      },
      {
        question: "Does Wien's law apply to fluorescent and LED bulbs?",
        answer: "No. Fluorescent and LED lamps emit light via atomic gas transitions and semiconductor electroluminescence, not thermal incandescence, so their spectral peak is determined by materials science rather than blackbody physics."
      },
      {
        question: "Why does an incandescent metal glow red, then yellow, then white as it gets hotter?",
        answer: "As temperature increases, Wien's displacement shifts the peak emission from the invisible infrared into deep red (~700 nm), then orange/yellow (~600 nm), and eventually across the entire visible spectrum to appear brilliant white."
      },
      {
        question: "What is the peak wavelength of the Cosmic Microwave Background (2.725 K)?",
        answer: "λ_peak = 2,897,771.9 / 2.725 K ≈ 1,063,400 nm (1.063 mm), placing it in the microwave spectrum."
      },
      {
        question: "What is the difference between Wien's law in wavelength vs frequency?",
        answer: "In the wavelength domain, spectral exitance peaks at λ_max = 2.898 × 10⁻³ / T m. In the frequency domain, it peaks at ν_max = 5.879 × 10¹⁰ × T Hz. Because dλ ≠ -c/ν² dν, the peaks do not align directly at c/λ_max."
      },
      {
        question: "Which standards define blackbody radiation and physical constants?",
        answer: "CODATA 2018 and ISO 80000-10 define fundamental physical constants, including Planck's constant, Boltzmann's constant, and Wien's displacement constant."
      }
    ],
    standardsReferences: [
      { organization: "CODATA", code: "CODATA 2018", title: "Recommended Values of the Fundamental Physical Constants — Wien Constant" },
      { organization: "ISO", code: "ISO 80000-10:2019", title: "Quantities and units — Part 10: Atomic and Nuclear Physics" },
      { organization: "ASTM", code: "ASTM E490-22", title: "Standard Solar Constant and Zero Air Mass Solar Spectral Irradiance Tables" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 18. LUX TO ANGSTROM CALCULATOR
  "lux-to-angstrom-calc": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Lux to Angstrom Calculator | Spectroscopic Peak Wavelength Solver",
    metaDescription: "Calculate peak emission wavelength in Ångströms (λ_Å = 28,977,719 / T_k) from thermal color temperature using Wien's displacement law in spectroscopy.",
    canonicalUrl,
    introduction: {
      overview: "The Ångström (symbol Å, defined as exactly 10⁻¹⁰ meters or 0.1 nanometers) is a traditional unit of length widely used in optical spectroscopy, crystallography, atomic physics, and astronomical telescope filter design. By applying Wien's Displacement Law in Ångström units (λ_Å = 28,977,719 / T_k), optical scientists and spectroscopists calculate the precise atomic peak wavelength emitted by blackbody radiators, hot plasma arcs, star surfaces, and optical pyrometry sources under specified ambient photopic illuminance conditions.",
      applications: [
        "Specifying astronomical narrow-band filter passbands (e.g., Hydrogen-alpha at 6563 Å, Oxygen-III at 5007 Å).",
        "Calibrating optical emission spectrometers (OES) and diffraction grating rulings in atomic spectroscopy.",
        "Analyzing stellar classification and spectral line profiles in astrophysics.",
        "Designing X-ray and extreme ultraviolet (EUV) optical crystal reflection spacings."
      ],
      industries: [
        "Astronomical Spectroscopy & Observatories",
        "Optical Emission Spectrometry (OES) & Metallurgical Testing",
        "Atomic Physics & Crystallography",
        "Semiconductor EUV Lithography Metrology"
      ]
    },
    quickAnswer: "The Lux to Angstrom Calculator determines peak spectral emission in Ångströms using λ_Å = 28,977,719 / T_k. For a source color temperature of 5,500 Kelvin under 1,000 Lux illuminance, the calculated peak wavelength is approximately 5,268.68 Ångströms (Å) (or 526.87 nm).",
    governingEquation: {
      formula: "\\lambda_{\\text{\\AA}} = \\frac{28,977,719}{T_k}",
      explanation: "Peak spectral wavelength in Ångströms (λ_Å) is determined by dividing Wien's displacement constant expressed in Ångström-Kelvin (b_Å = 28,977,719 Å·K) by the absolute thermodynamic temperature (T_k in Kelvin). 1 nm = 10 Å.",
      variables: [
        { symbol: "λ_Å", label: "Peak Wavelength (Å)", unit: "Ångströms (Å)", description: "Peak emission wavelength in Ångströms (1 Å = 10⁻¹⁰ m = 0.1 nm)." },
        { symbol: "b_Å", label: "Wien Constant (Å)", unit: "Å·K", description: "Wien's displacement constant in Ångström units: 28,977,719 Å·K." },
        { symbol: "Tk", label: "Color Temperature", unit: "Kelvin (K)", description: "Thermodynamic blackbody temperature of the source." },
        { symbol: "E", label: "Illuminance", unit: "Lux (lx)", description: "Ambient photopic illuminance level." }
      ]
    },
    inputParameters: [
      {
        name: "temperature",
        label: "Color Temperature (T)",
        unit: "Kelvin (K)",
        defaultValue: 5500,
        explanation: "The thermodynamic color temperature of the blackbody source in Kelvin. Default baseline is 5,500 K."
      },
      {
        name: "illuminance",
        label: "Illuminance (E)",
        unit: "Lux (lx)",
        defaultValue: 1000,
        explanation: "The ambient photopic task illuminance in Lux. Default baseline is 1,000 lx."
      }
    ],
    outputExplanation: {
      unit: "Ångströms (Å)",
      interpretation: "The peak spectral emission wavelength in Ångströms (1 Å = 0.1 nm).",
      designImpact: "Used in optical spectrometer grating angle calibrations and atomic spectral database indexing (e.g., NIST Atomic Spectra Database)."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Color Temperature (T)", value: 5500, unit: "K" },
        { label: "Illuminance (E)", value: 1000, unit: "lx" }
      ],
      substitution: "Substitute T_k = 5500 K into λ_Å = 28,977,719 / T_k:",
      intermediateSteps: [
        "1. Identify the emitter temperature: T_k = 5500 Kelvin.",
        "2. Note ambient task illuminance: E = 1000 Lux.",
        "3. Divide Wien's constant in Ångströms by temperature: λ_Å = 28,977,719 / 5500 ≈ 5268.67618... Ångströms.",
        "4. Round to standard engineering precision: 5268.68 Å."
      ],
      finalResult: "5268.68",
      unit: "Ångströms (Å)"
    },
    practicalExample: {
      scenarioTitle: "Astronomical Solar Telescope Filter Passband Sizing",
      industryContext: "An observatory astrophysicist configures a Fabry-Perot solar telescope etalon filter to isolate the solar continuum peak near 5,500 K.",
      problemStatement: "Calculate the peak continuous emission wavelength in Ångströms and compare it to the prominent Fraunhofer b₁ magnesium absorption line at 5183.6 Å.",
      engineeringSolution: "λ_peak = 28,977,719 / 5500 K ≈ 5268.68 Å. The solar continuum peaks within ~85 Å of the magnesium Fraunhofer b triplet (5167–5184 Å), providing maximum spectral flux for high-resolution solar magnetogram imaging."
    },
    assumptions: [
      "The emitting source behaves as an ideal thermal blackbody radiator.",
      "1 Ångström is defined as exactly 10⁻¹⁰ meters (0.1 nm).",
      "Wien's displacement constant b_Å = 28,977,719 Å·K."
    ],
    limitations: [
      "The Ångström is a non-SI unit (though accepted for use in atomic physics and crystallography); SI derived units recommend nanometers (nm) or picometers (pm).",
      "Does not model non-thermal atomic line lasers or gas discharge emissions.",
      "Medium refractive index shortens the physical wavelength inside optical lenses (λ_medium = λ_vacuum / n)."
    ],
    commonMistakes: [
      "Confusing Ångströms with nanometers (1 nm = 10 Å, so 500 nm = 5,000 Å).",
      "Entering temperature in degrees Fahrenheit or Celsius instead of absolute Kelvin.",
      "Assuming the Ångström unit is an SI base unit (it is a non-SI unit equal to 10⁻¹⁰ m)."
    ],
    bestPractices: [
      "To convert nanometers to Ångströms, simply multiply by 10 (e.g., 532 nm = 5320 Å).",
      "Consult the NIST Atomic Spectra Database (ASD) for official atomic transition wavelength reference tables in Ångströms and nanometers.",
      "When specifying narrow-band optical filters, express full width at half maximum (FWHM) in Ångströms (e.g., 0.5 Å H-alpha solar filters)."
    ],
    faqs: [
      {
        question: "What is an Ångström (Å)?",
        answer: "An Ångström (symbol Å) is a unit of length equal to 10⁻¹⁰ meters (0.1 nanometers or 100 picometers), named after Swedish physicist Anders Jonas Ångström."
      },
      {
        question: "How do you convert nanometers to Ångströms?",
        answer: "Multiply the wavelength in nanometers by 10. For example, 500 nm equals 5,000 Ångströms."
      },
      {
        question: "Why is the Ångström commonly used in astronomy and spectroscopy?",
        answer: "Because optical atomic transition lines (such as Hydrogen-alpha at 6562.8 Å and Sodium D lines at 5889.9 Å and 5895.9 Å) have very fine spectral separation that is conveniently expressed in whole Ångströms and tenths of Ångströms."
      },
      {
        question: "What is the formula to calculate peak wavelength in Ångströms from Kelvin?",
        answer: "Peak Wavelength (Å) = 28,977,719 / Temperature in Kelvin (T_k)."
      },
      {
        question: "What is the peak wavelength of 5,500 K in Ångströms?",
        answer: "λ_Å = 28,977,719 / 5500 ≈ 5268.68 Ångströms (526.87 nm)."
      },
      {
        question: "What is the wavelength range of visible light in Ångströms?",
        answer: "Visible light extends from approximately 3,800 Å (deep violet) to 7,500 Å (deep red)."
      },
      {
        question: "What are Fraunhofer lines in the solar spectrum?",
        answer: "Fraunhofer lines are dark absorption lines in the Sun's optical spectrum caused by atomic elements in the solar atmosphere absorbing specific discrete wavelengths (e.g., H-alpha at 6563 Å, Na D at 5890 Å, Fe at 4383 Å)."
      },
      {
        question: "Which standards organization maintains official atomic spectra databases in Ångströms?",
        answer: "NIST (National Institute of Standards and Technology) maintains the NIST Atomic Spectra Database (ASD), providing energy levels and transition wavelengths for all known elements in Ångströms and nanometers."
      }
    ],
    standardsReferences: [
      { organization: "NIST", code: "NIST SP 250-89", title: "Spectroradiometric Calibrations and Standards" },
      { organization: "BIPM", code: "SI Brochure (9th Ed., 2019)", title: "Non-SI Units Accepted for Use with the International System of Units" },
      { organization: "IAU", code: "IAU Style Manual", title: "International Astronomical Union Standards for Units and Astronomical Nomenclature" }
    ],
    internalLinks: {
      parentDiscipline: { id: "optics-light-calculators", name: "Optics & Light" },
      relatedTools,
      relevantUnitCategories
    }
  })

};
