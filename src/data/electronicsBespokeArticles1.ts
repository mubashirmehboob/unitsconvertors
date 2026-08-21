import { EngineeringArticleData } from "./engineeringArticlesEngine";

/**
 * Production-quality bespoke articles for Electronics Calculators (Part 1).
 * Adheres strictly to ELECTRONICS CALCULATOR ARTICLE TEMPLATE V1.0.
 * Covers:
 * 1. RC Circuit Time Constant & Cutoff Calculator (rc-time-constant)
 * 2. RC Low-Pass Filter Cutoff Frequency Calculator (rc-low-pass-filter)
 * 3. RC High-Pass Filter Cutoff Frequency Calculator (rc-high-pass-filter)
 * 4. RL Time Constant Calculator (rl-time-constant)
 * 5. LC Resonant Frequency Calculator (lc-resonant-frequency)
 * 6. RLC Resonant Frequency Calculator (rlc-resonant-frequency)
 */

export const electronicsBespokeArticlesPart1: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {

  // 1. RC CIRCUIT TIME CONSTANT & CUTOFF CALCULATOR
  "rc-time-constant": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "RC Circuit Time Constant & Cutoff Calculator | Tau & Frequency Solver",
    metaDescription: "Calculate RC circuit time constant tau (τ = R × C) and -3dB cutoff frequency. Includes capacitor charging dynamics, timing analysis, and EIA component standards.",
    canonicalUrl,
    introduction: {
      overview: "An RC circuit combines an electrical resistor and a capacitor to establish a time-dependent voltage and current response. When a DC step voltage is applied across a series RC network, the capacitor does not charge instantaneously; instead, electric charge accumulates exponentially as governed by the circuit's resistance and capacitance. The fundamental metric characterizing this exponential transient response is the time constant tau (τ = R × C). In frequency-domain analysis, this identical physical RC pairing establishes a first-order corner cutoff frequency (fc = 1 / (2πRC)), marking the boundary where signal power drops by half (-3 dB). Understanding RC time constants is essential for timing delays, debouncing mechanical switches, analog signal filtering, and pulse-width modulation (PWM) smoothing.",
      applications: [
        "Hardware switch debouncing circuits to eliminate contact chatter on digital microcontroller inputs.",
        "Precision analog timing delays, monostable multivibrators, and 555-timer relaxation oscillators.",
        "Power supply ripple smoothing and low-pass filtering after diode rectification.",
        "Analog-to-digital converter (ADC) input antialiasing and sensor signal conditioning."
      ],
      industries: [
        "Embedded Systems & Microcontroller Design",
        "Consumer Audio & Signal Processing",
        "Industrial Automation & Sensor Interfaces",
        "Power Electronics & Voltage Regulation"
      ]
    },
    quickAnswer: "The RC circuit time constant tau (τ) equals resistance multiplied by capacitance (τ = R × C). For a 10 kΩ (10,000 Ω) resistor and a 1 µF (0.000001 F) capacitor, the time constant tau is exactly 0.01 seconds (10 milliseconds). The capacitor reaches 63.2% of full supply voltage in 1τ and over 99.3% in 5τ.",
    governingEquation: {
      formula: "\\tau = R \\times C \\quad \\text{and} \\quad f_c = \\frac{1}{2 \\pi R C}",
      explanation: "The primary time constant equation multiplies resistance (R in Ohms) by capacitance (C in Farads) to yield tau (τ in seconds). During charging from a DC step voltage V_supply, capacitor voltage follows V(t) = V_supply × (1 - e^(-t/τ)). At t = 1τ, the capacitor reaches approximately 63.2% of V_supply; at t = 5τ, it reaches 99.3% (conventionally considered fully charged). In AC steady state, the corresponding -3 dB corner cutoff frequency is fc = 1 / (2πRC).",
      variables: [
        { symbol: "τ", label: "Time Constant (Tau)", unit: "Seconds (s)", description: "Time required for capacitor voltage to charge to 63.2% or discharge to 36.8% of initial potential." },
        { symbol: "R", label: "Resistance", unit: "Ohms (Ω)", description: "Total series resistance limiting the charging and discharging current." },
        { symbol: "C", label: "Capacitance", unit: "Farads (F)", description: "Electrostatic charge storage capacity of the circuit capacitor." }
      ]
    },
    inputParameters: [
      {
        name: "r",
        label: "Resistance (R)",
        unit: "Ohms (Ω)",
        defaultValue: 10000,
        explanation: "The series current-limiting resistance in Ohms. Default is set to 10,000 Ω (10 kΩ), a ubiquitous value in pull-up and timing networks."
      },
      {
        name: "c",
        label: "Capacitance (C)",
        unit: "Farads (F)",
        defaultValue: 0.000001,
        explanation: "The electrostatic capacitance in Farads. Default is set to 0.000001 F (1 µF), typical for ceramic or film timing capacitors."
      }
    ],
    outputExplanation: {
      unit: "Seconds (s)",
      interpretation: "The computed value represents the single time constant (1τ) of the RC network in seconds.",
      designImpact: "Engineers use tau to size hardware timing intervals and settle times. In digital inputs, setting τ between 1 ms and 20 ms effectively suppresses switch bounce without creating noticeable user-perceived button latency."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Resistance (R)", value: 10000, unit: "Ω" },
        { label: "Capacitance (C)", value: 0.000001, unit: "F" }
      ],
      substitution: "Substitute R = 10,000 Ω and C = 0.000001 F into the time constant formula τ = R × C:",
      intermediateSteps: [
        "1. Identify the input values: Resistance R = 10,000 Ω (10 kΩ), Capacitance C = 1.0 × 10⁻⁶ F (1 µF).",
        "2. Verify dimensional consistency: 1 Ohm × 1 Farad = (V / A) × (A·s / V) = 1 Second (s).",
        "3. Multiply resistance by capacitance: τ = 10,000 × 0.000001 = 0.01 s (10 ms).",
        "4. Calculate the corresponding 5τ full-charge settling time: 5 × 0.01 s = 0.05 s (50 ms).",
        "5. Calculate the equivalent -3 dB cutoff frequency: fc = 1 / (2 × π × 0.01) = 15.915 Hz."
      ],
      finalResult: "0.01",
      unit: "Seconds (s)"
    },
    practicalExample: {
      scenarioTitle: "Microcontroller Push-Button Hardware Debounce Network",
      industryContext: "An embedded systems hardware designer needs to debounce an industrial tactile momentary push-button connected to a 3.3 V microcontroller GPIO input.",
      problemStatement: "Mechanical switch contacts chatter for approximately 5 ms upon closure. If a 10 kΩ pull-up resistor is used, what capacitor value creates a time constant of τ = 10 ms to guarantee bounce-free logic transitions?",
      engineeringSolution: "Rearranging τ = R × C gives C = τ / R = 0.010 s / 10,000 Ω = 1.0 × 10⁻⁶ F = 1.0 µF. When the button is released, the capacitor charges through the 10 kΩ resistor with τ = 10 ms, absorbing all millisecond-scale contact chatter."
    },
    assumptions: [
      "The resistor exhibits linear Ohmic behavior with zero parasitic inductance or capacitance.",
      "The capacitor behaves as an ideal electrostatic element with negligible equivalent series resistance (ESR) and zero leakage current.",
      "The input driving voltage step is instantaneous with zero source impedance.",
      "The output terminal is connected to an infinite-impedance load with zero loading current."
    ],
    limitations: [
      "Real-world ceramic capacitors (especially Class II dielectrics like X5R/X7R) suffer from DC voltage bias derating, losing up to 40–70% of nominal capacitance under operational voltage.",
      "Electrolytic capacitors exhibit significant manufacturing tolerances (±20%) and high ESR, shifting actual timing intervals.",
      "Parasitic PCB trace capacitance and microcontroller input pin capacitance (typically 3–10 pF) alter microsecond-scale timing networks.",
      "Source driving impedance adds directly to R, increasing the effective charging time constant."
    ],
    commonMistakes: [
      "Entering microfarads (µF) or nanofarads (nF) directly into equations without converting them to base Farads (F).",
      "Assuming the capacitor is fully charged after 1τ (it is only 63.2% charged; 5τ is required for 99.3% charge).",
      "Ignoring the input leakage current or threshold hysteresis of downstream digital logic gates.",
      "Overlooking capacitor dielectric absorption and leakage in long-duration (multi-second) analog timing loops."
    ],
    bestPractices: [
      "Use Class I temperature-stable C0G/NP0 dielectric ceramic capacitors or precision film capacitors for timing circuits.",
      "Account for DC voltage bias characteristics when using high-capacitance SMD ceramic capacitors.",
      "Pair the RC network with a Schmitt-trigger input buffer to ensure clean digital transitions from slow analog voltage ramps.",
      "Select standard EIA decade resistor values (E24 or E96 series) to match commercial stock availability."
    ],
    faqs: [
      {
        question: "What does the RC time constant tau (τ) represent in a circuit?",
        answer: "The time constant tau (τ = R × C) is the duration required for an uncharged capacitor to charge to approximately 63.2% of its maximum steady-state voltage through a series resistor, or discharge down to 36.8% of its initial potential."
      },
      {
        question: "How many time constants does it take for a capacitor to fully charge?",
        answer: "Theoretically, charging is asymptotic and takes infinite time. In practical engineering, a capacitor is considered fully charged after 5 time constants (5τ), at which point it reaches 99.33% of the supply voltage."
      },
      {
        question: "How is the RC time constant related to cutoff frequency?",
        answer: "The time-domain time constant and frequency-domain cutoff frequency are inversely related by the equation fc = 1 / (2πRC) = 1 / (2πτ). A 10 ms time constant corresponds to a corner cutoff frequency of approximately 15.92 Hz."
      },
      {
        question: "Why does capacitor voltage charge to exactly 63.2% in one time constant?",
        answer: "The charging curve follows V(t) = V_max × (1 - e^(-t/τ)). When t = τ, the term becomes (1 - e⁻¹) = (1 - 0.36788) = 0.63212, which equals exactly 63.21% of the final steady-state voltage."
      },
      {
        question: "What happens if I double the resistance in an RC circuit?",
        answer: "Doubling the resistance doubles the time constant tau (τ), meaning the capacitor takes twice as long to charge and discharge, while halving the corresponding AC corner cutoff frequency."
      },
      {
        question: "Does the supply voltage affect the RC time constant?",
        answer: "No. The time constant τ = R × C depends entirely on resistance and capacitance. While a higher supply voltage increases the final stored charge (Q = C × V), the time required to reach 63.2% of that voltage remains unchanged."
      },
      {
        question: "What type of capacitor is best for precision timing circuits?",
        answer: "C0G/NP0 ceramic capacitors and polypropylene or polyphenylene sulfide (PPS) film capacitors are preferred because of their low temperature coefficients, zero voltage derating, and negligible dielectric absorption."
      },
      {
        question: "How does load impedance affect an RC timing circuit?",
        answer: "A finite load impedance connected in parallel with the capacitor forms a voltage divider with R, reducing the peak achievable voltage and altering both the charging curve and effective time constant."
      }
    ],
    standardsReferences: [
      { organization: "IEC", code: "IEC 60384", title: "Fixed Capacitors for Use in Electronic Equipment — Specification & Reliability" },
      { organization: "IEEE", code: "IEEE Std 141", title: "Recommended Practice for Electric Power Distribution for Industrial Plants" },
      { organization: "EIA", code: "EIA-RS-198", title: "Ceramic Dielectric Capacitors Classes I, II, and III" },
      { organization: "IPC", code: "IPC-2221", title: "Generic Standard on Printed Board Design — Signal Integrity & Component Spacing" }
    ],
    internalLinks: {
      parentDiscipline: { id: "electronics-calc", name: "Electronics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 2. RC LOW-PASS FILTER CUTOFF FREQUENCY CALCULATOR
  "rc-low-pass-filter": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "RC Low-Pass Filter Cutoff Frequency Calculator | -3dB Corner Frequency",
    metaDescription: "Calculate the -3dB cutoff frequency (fc = 1 / (2πRC)) of a first-order passive RC low-pass filter. Includes frequency attenuation slopes, phase lag, and audio filter design.",
    canonicalUrl,
    introduction: {
      overview: "A passive first-order RC low-pass filter consists of a series resistor followed by a shunt capacitor connected to ground. It permits low-frequency electrical signals to pass from input to output with minimal attenuation while attenuating frequencies above a designated threshold. The critical threshold where signal power is reduced by half (-3 dB relative to DC passband) is defined as the cutoff frequency (fc). Above the cutoff corner, the filter attenuates higher-frequency components at a roll-off rate of -20 dB per decade (-6 dB per octave). RC low-pass filters are widely deployed across analog audio circuits, sensor antialiasing stages, power supply rail decoupling, and digital DAC reconstruction filters.",
      applications: [
        "Analog-to-digital converter (ADC) input antialiasing filters to eliminate high-frequency out-of-band noise.",
        "Audio crossover networks and tone control stages to filter out high-frequency hiss.",
        "Digital microcontroller PWM output smoothing into continuous DC analog control voltages.",
        "Sensor signal conditioning to filter electromagnetic interference (EMI) and power grid hum (50/60 Hz)."
      ],
      industries: [
        "Audio Engineering & Acoustic Systems",
        "Analog Sensor & Transducer Interfacing",
        "Medical Diagnostic Equipment (ECG/EEG)",
        "Automotive Electronic Control Units (ECU)"
      ]
    },
    quickAnswer: "The cutoff frequency (fc) of a passive first-order RC low-pass filter is calculated using fc = 1 / (2 × π × R × C). For a 10 kΩ resistor and a 100 nF (0.1 µF) capacitor, the -3dB cutoff frequency is approximately 159.15 Hz, with a phase shift of -45° at cutoff.",
    governingEquation: {
      formula: "f_c = \\frac{1}{2 \\pi R C} \\quad \\text{and} \\quad |H(f)| = \\frac{1}{\\sqrt{1 + (f / f_c)^2}}",
      explanation: "The cutoff frequency (fc in Hertz) occurs when the capacitive reactance X_C = 1 / (2πfC) exactly equals the resistance R. At this corner point, the output voltage magnitude drops to 1/√2 (≈ 70.71%) of the input voltage, corresponding to a power reduction of -3.01 dB and an output phase lag of exactly -45° relative to the input.",
      variables: [
        { symbol: "fc", label: "Cutoff Frequency (-3dB Point)", unit: "Hertz (Hz)", description: "Frequency at which output signal power drops to 50% (-3 dB) of passband level." },
        { symbol: "R", label: "Series Resistance", unit: "Ohms (Ω)", description: "Filter input series resistance limiting AC charge transfer." },
        { symbol: "C", label: "Shunt Capacitance", unit: "Farads (F)", description: "Filter capacitor shunting high-frequency signal energy to ground." }
      ]
    },
    inputParameters: [
      {
        name: "r",
        label: "Resistance (R)",
        unit: "Ohms (Ω)",
        defaultValue: 10000,
        explanation: "The series filter resistance in Ohms. Default is set to 10,000 Ω (10 kΩ), providing standard impedance matching for operational amplifiers and audio stages."
      },
      {
        name: "c",
        label: "Capacitance (C)",
        unit: "Farads (F)",
        defaultValue: 0.0000001,
        explanation: "The shunt filter capacitance in Farads. Default is set to 0.0000001 F (100 nF or 0.1 µF), common in analog sensor signal paths."
      }
    ],
    outputExplanation: {
      unit: "Hertz (Hz)",
      interpretation: "The computed value represents the -3 dB corner cutoff frequency of the single-pole passive low-pass network.",
      designImpact: "Signals with frequencies well below fc pass with minimal attenuation, while frequencies higher than fc are attenuated at -20 dB per decade. If higher roll-off steepness is required, multi-pole active filters (e.g., Sallen-Key or Butterworth topologies) must be implemented."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Resistance (R)", value: 10000, unit: "Ω" },
        { label: "Capacitance (C)", value: 0.0000001, unit: "F" }
      ],
      substitution: "Substitute R = 10,000 Ω and C = 1.0 × 10⁻⁷ F into the cutoff formula fc = 1 / (2 × π × R × C):",
      intermediateSteps: [
        "1. Identify given parameters: Resistance R = 10,000 Ω, Capacitance C = 1.0 × 10⁻⁷ F (100 nF).",
        "2. Calculate the product R × C: 10,000 × 0.0000001 = 0.001 s (1 ms).",
        "3. Multiply by 2 × π: 2 × 3.14159265 × 0.001 = 0.006283185 s.",
        "4. Invert to find frequency: fc = 1 / 0.006283185 ≈ 159.155 Hz.",
        "5. Evaluate attenuation at 1,591.55 Hz (10 × fc): Attenuation ≈ -20 dB (output is 10% of input voltage)."
      ],
      finalResult: "159.15",
      unit: "Hertz (Hz)"
    },
    practicalExample: {
      scenarioTitle: "Analog DAC Output Reconstruction Filter for Audio Playback",
      industryContext: "An audio hardware engineer is designing a voice-band reconstruction filter following an 8 kHz sampling rate digital-to-analog converter (DAC).",
      problemStatement: "To suppress sampling clock images while maintaining voice clarity, the engineer requires a -3 dB cutoff frequency of approximately 3.4 kHz using a 4.7 kΩ series resistor. What capacitor value is required?",
      engineeringSolution: "Rearranging fc = 1 / (2πRC) yields C = 1 / (2π × R × fc) = 1 / (2 × π × 4,700 Ω × 3,400 Hz) = 1 / 100,402,646 ≈ 9.96 × 10⁻⁹ F (9.96 nF). The engineer selects a standard 10 nF (0.01 µF) film capacitor, giving fc = 3,386 Hz."
    },
    assumptions: [
      "The filter is driven by an ideal voltage source with zero output impedance.",
      "The output terminal is connected to an infinite input impedance load (unloaded condition).",
      "The capacitor and resistor are ideal passive linear components with zero parasitics.",
      "Signals are sinusoidal steady-state voltages operating within linear component ratings."
    ],
    limitations: [
      "First-order passive filters provide a gentle roll-off rate of only -20 dB/decade (-6 dB/octave), which may be insufficient for steep antialiasing requirements.",
      "Connecting a low-impedance downstream load forms a parallel impedance with C and a voltage divider with R, distorting the cutoff frequency and passband gain.",
      "Capacitor manufacturing tolerance (±5% to ±20%) directly shifts the cutoff frequency.",
      "Source driving impedance adds in series with R, shifting the actual corner frequency downward."
    ],
    commonMistakes: [
      "Ignoring downstream load impedance and failing to buffer the passive filter output with an operational amplifier voltage follower.",
      "Assuming a first-order filter completely blocks frequencies above fc (at 2 × fc, attenuation is only -7 dB).",
      "Using high-K ceramic capacitors (such as Y5V or Z5U) that experience extreme capacitance shifts with temperature and voltage.",
      "Neglecting source impedance when sizing high-frequency filter resistors."
    ],
    bestPractices: [
      "Place an op-amp unity-gain buffer after the RC filter when driving loads with input impedance less than 100 times R.",
      "Use film (polypropylene/polyester) or C0G/NP0 ceramic capacitors for audio and precision instrumentation filters to minimize harmonic distortion.",
      "Keep resistance values between 1 kΩ and 100 kΩ to balance Johnson thermal noise against excessive loading on prior stages.",
      "Verify filter frequency response with a Bode plot analyzer or SPICE simulation including source and load impedances."
    ],
    faqs: [
      {
        question: "What is the physical meaning of the -3 dB cutoff frequency in a low-pass filter?",
        answer: "The -3 dB point is the frequency where output power drops to 50% of the input power, and output voltage drops to 70.71% (1/√2) of the input voltage. It marks the transition between the passband and the stopband."
      },
      {
        question: "What is the roll-off rate of a first-order passive RC low-pass filter?",
        answer: "A first-order (single-pole) RC filter attenuates high frequencies at a rate of -20 dB per decade (a factor of 10 in frequency) or -6 dB per octave (a doubling of frequency)."
      },
      {
        question: "What is the phase shift at the cutoff frequency of an RC low-pass filter?",
        answer: "At the cutoff frequency (fc), the output voltage lags the input voltage by exactly 45 degrees (-45°). At very high frequencies, the phase lag approaches -90 degrees."
      },
      {
        question: "Why does connecting a load resistor change the cutoff frequency?",
        answer: "A load resistor in parallel with the capacitor creates a complex impedance divider, altering the equivalent Thevenin resistance and shifting the effective corner frequency while attenuating DC passband gain."
      },
      {
        question: "How do I make the filter cutoff slope steeper?",
        answer: "To achieve steeper roll-off slopes (-40 dB/decade for 2nd order, -60 dB/decade for 3rd order), cascade multiple filter stages using active operational amplifier topologies such as Sallen-Key or multiple feedback filters."
      },
      {
        question: "Can an RC low-pass filter be used to convert PWM to DC?",
        answer: "Yes. By choosing a cutoff frequency significantly lower than the PWM switching frequency (typically 1/10th or lower), the filter suppresses high-frequency harmonics and outputs a smooth DC voltage proportional to the duty cycle."
      },
      {
        question: "What happens if I swap the positions of the resistor and capacitor?",
        answer: "Swapping the components (putting the capacitor in series and the resistor to ground) transforms the circuit from a low-pass filter into a high-pass filter, blocking DC and passing high frequencies."
      },
      {
        question: "Why should I avoid very large resistor values (e.g., >1 MΩ) in RC filters?",
        answer: "Very large resistors increase Johnson-Nyquist thermal noise, make the filter highly susceptible to stray board capacitance and leakage currents, and increase loading errors from downstream stages."
      }
    ],
    standardsReferences: [
      { organization: "IEC", code: "IEC 61000-4-6", title: "Electromagnetic Compatibility (EMC) — Immunity to Conducted Disturbances" },
      { organization: "IEEE", code: "IEEE Std 519", title: "Standard for Harmonic Control in Electric Power Systems" },
      { organization: "AES", code: "AES17", title: "Standard Method for Digital Audio Engineering — Measurement of Audio Equipment" },
      { organization: "IPC", code: "IPC-2141A", title: "Design Guide for High-Speed Controlled Impedance Circuit Boards" }
    ],
    internalLinks: {
      parentDiscipline: { id: "electronics-calc", name: "Electronics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 3. RC HIGH-PASS FILTER CUTOFF FREQUENCY CALCULATOR
  "rc-high-pass-filter": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "RC High-Pass Filter Cutoff Frequency Calculator | DC Blocking & Corner Frequency",
    metaDescription: "Calculate the -3dB corner frequency (fc = 1 / (2πRC)) of a passive RC high-pass filter. Covers DC blocking, AC audio coupling, phase lead, and signal isolation.",
    canonicalUrl,
    introduction: {
      overview: "A passive first-order RC high-pass filter consists of a series capacitor followed by a shunt resistor connected to ground. It functions as a frequency-selective network that blocks steady direct current (DC) and low-frequency electrical signals while allowing high-frequency AC signals to pass unimpeded. The transition frequency where the output voltage drops to 70.7% of passband amplitude (-3 dB power level) is defined as the cutoff frequency (fc). High-pass RC networks are ubiquitous in audio coupling (DC blocking between amplifier stages), instrumentation amplifier baseline stabilization, bio-potential signal conditioning (ECG motion artifact removal), and RF signal injection networks.",
      applications: [
        "AC coupling (DC blocking capacitors) between preamplifier and power amplifier stages.",
        "Microphone input signal conditioning to remove low-frequency mechanical rumble and pop noise.",
        "Biomedical ECG and EEG signal acquisition to eliminate electrode DC half-cell offset potentials.",
        "Differentiating pulse networks for edge-triggered digital timing and clock generation."
      ],
      industries: [
        "Audio Electronics & Sound Reinforcement",
        "Biomedical Instrumentation & Diagnostics",
        "RF Communications & Microwave Engineering",
        "Industrial Sensor Signal Conditioning"
      ]
    },
    quickAnswer: "The cutoff frequency of a first-order passive RC high-pass filter is fc = 1 / (2 × π × R × C). For a 1 kΩ (1,000 Ω) resistor and a 100 nF (0.1 µF) capacitor, the -3dB cutoff frequency is approximately 1,591.55 Hz, with an output phase lead of +45° at cutoff.",
    governingEquation: {
      formula: "f_c = \\frac{1}{2 \\pi R C} \\quad \\text{and} \\quad |H(f)| = \\frac{f / f_c}{\\sqrt{1 + (f / f_c)^2}}",
      explanation: "At zero frequency (DC), the capacitor's impedance is infinite (open circuit), completely blocking DC current. As signal frequency increases, capacitive reactance X_C = 1 / (2πfC) decreases. At fc, X_C equals R, resulting in an output voltage of 1/√2 (≈ 70.71%) of input voltage and an output phase lead of +45° relative to the input signal.",
      variables: [
        { symbol: "fc", label: "Cutoff Frequency (-3dB Corner)", unit: "Hertz (Hz)", description: "Frequency where output amplitude drops to 70.71% (-3 dB) of passband level." },
        { symbol: "R", label: "Shunt Resistance", unit: "Ohms (Ω)", description: "Filter resistor providing DC return path to ground." },
        { symbol: "C", label: "Series Capacitance", unit: "Farads (F)", description: "Filter series capacitor blocking DC and passing AC signals." }
      ]
    },
    inputParameters: [
      {
        name: "r",
        label: "Resistance (R)",
        unit: "Ohms (Ω)",
        defaultValue: 1000,
        explanation: "The shunt resistance to ground in Ohms. Default is set to 1,000 Ω (1 kΩ), representative of low-impedance audio and RF termination loads."
      },
      {
        name: "c",
        label: "Capacitance (C)",
        unit: "Farads (F)",
        defaultValue: 0.0000001,
        explanation: "The series DC blocking capacitance in Farads. Default is set to 0.0000001 F (100 nF or 0.1 µF), standard for AC coupling stages."
      }
    ],
    outputExplanation: {
      unit: "Hertz (Hz)",
      interpretation: "The computed result is the -3 dB lower corner frequency of the high-pass filter network.",
      designImpact: "In AC coupling applications, fc must be set well below the lowest operating signal frequency (e.g., below 20 Hz for full-range high-fidelity audio) to prevent unwanted low-frequency phase distortion and bass loss."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Resistance (R)", value: 1000, unit: "Ω" },
        { label: "Capacitance (C)", value: 0.0000001, unit: "F" }
      ],
      substitution: "Substitute R = 1,000 Ω and C = 1.0 × 10⁻⁷ F into the cutoff formula fc = 1 / (2 × π × R × C):",
      intermediateSteps: [
        "1. Identify given inputs: Resistance R = 1,000 Ω, Capacitance C = 1.0 × 10⁻⁷ F (100 nF).",
        "2. Compute the product R × C: 1,000 × 0.0000001 = 0.0001 s (100 µs).",
        "3. Multiply by 2 × π: 2 × 3.14159265 × 0.0001 = 0.0006283185 s.",
        "4. Calculate inverse to find frequency: fc = 1 / 0.0006283185 ≈ 1,591.55 Hz.",
        "5. Evaluate attenuation at 159.155 Hz (0.1 × fc): Attenuation ≈ -20 dB (output is 10% of input voltage)."
      ],
      finalResult: "1591.55",
      unit: "Hertz (Hz)"
    },
    practicalExample: {
      scenarioTitle: "Audio Preamplifier Interstage AC Coupling Design",
      industryContext: "An audio amplifier design engineer is connecting a transistor preamplifier stage (operating at a +6 V DC bias) to a volume control potentiometer.",
      problemStatement: "The input resistance of the volume stage is 47 kΩ. The designer needs to pass all audible bass frequencies down to 10 Hz with less than 1 dB attenuation, setting the -3 dB corner at fc = 3 Hz. What coupling capacitor is needed?",
      engineeringSolution: "Rearranging fc = 1 / (2πRC) gives C = 1 / (2π × 47,000 Ω × 3 Hz) = 1 / 885,929 ≈ 1.13 × 10⁻⁶ F (1.13 µF). The designer selects a standard 2.2 µF film capacitor, which establishes fc = 1.54 Hz, guaranteeing flat audio response and zero phase distortion across the 20 Hz – 20 kHz spectrum."
    },
    assumptions: [
      "The input source has zero internal source resistance.",
      "The output drives an infinite load impedance.",
      "The capacitor exhibits zero DC leakage current and negligible equivalent series resistance (ESR).",
      "Signal levels remain within the linear operating range of the passive components."
    ],
    limitations: [
      "Electrolytic coupling capacitors exhibit DC leakage current, which can introduce small DC offset voltages onto sensitive downstream high-impedance inputs.",
      "Downstream parallel load resistance reduces the effective R, shifting the high-pass cutoff frequency upward and cutting off low frequencies prematurely.",
      "Capacitor voltage rating must exceed the sum of peak AC signal voltage plus the maximum DC bias potential.",
      "Phase lead distortion occurs near and below fc, potentially degrading low-frequency transient audio reproduction."
    ],
    commonMistakes: [
      "Sizing the coupling capacitor for exactly 20 Hz in audio circuits, causing noticeable phase shift and -3 dB amplitude loss at the bottom of the audible spectrum.",
      "Installing polarized electrolytic capacitors backward relative to the DC bias polarity across the two circuit nodes.",
      "Ignoring source impedance, which adds in series with the capacitor's impedance at high frequencies.",
      "Omitting the DC return resistor (R) to ground on an AC-coupled op-amp input, causing the op-amp input bias current to saturate the amplifier rail."
    ],
    bestPractices: [
      "Design the -3 dB cutoff frequency at least 3 to 10 times lower than the lowest operational signal frequency of interest.",
      "Always provide a DC return path (bleeder resistor to ground) on AC-coupled amplifier inputs to sink input bias currents.",
      "Use non-polarized film capacitors (polypropylene or polyester) for signal paths to eliminate dielectric distortion and DC leakage.",
      "Observe polarity strictly if polarized tantalum or electrolytic capacitors must be used for large coupling values."
    ],
    faqs: [
      {
        question: "How does an RC high-pass filter block DC voltage?",
        answer: "A capacitor consists of two conductive plates separated by an insulator. Direct current (0 Hz) cannot cross this dielectric barrier in steady state, so the capacitor acts as an open circuit (infinite impedance), blocking DC completely."
      },
      {
        question: "What is the phase response of an RC high-pass filter?",
        answer: "At very high frequencies, the phase shift is 0°. At the cutoff frequency (fc), the output voltage leads the input voltage by +45°. At very low frequencies approaching DC, the phase lead approaches +90°."
      },
      {
        question: "Why is an RC high-pass filter called a differentiator?",
        answer: "When the input signal frequency is far below the cutoff frequency (f << fc, or t << RC), the voltage drop across the resistor is directly proportional to the time rate of change (derivative) of the input voltage: V_out ≈ RC × (dV_in/dt)."
      },
      {
        question: "What is the difference between AC coupling and a high-pass filter?",
        answer: "AC coupling is a practical application of a high-pass filter. The series capacitor blocks the DC operating bias between stages while allowing AC information signals to pass."
      },
      {
        question: "Why do audio circuits use high-pass cutoff frequencies as low as 1 Hz to 5 Hz?",
        answer: "Setting the cutoff far below the audible 20 Hz threshold ensures flat frequency response (less than 0.1 dB attenuation at 20 Hz) and eliminates phase distortion in low-frequency audio reproduction."
      },
      {
        question: "Can an RC high-pass filter eliminate 60 Hz hum from a sensor signal?",
        answer: "A simple first-order high-pass filter set above 60 Hz will attenuate hum, but its gentle -20 dB/decade slope will also attenuate nearby desired signals. A dedicated notch filter is usually preferred for hum rejection."
      },
      {
        question: "What happens if the shunt resistor R is removed?",
        answer: "Without a shunt resistor to ground, the output node floats with no DC reference, allowing charge to accumulate indefinitely on the capacitor and preventing stable circuit operation."
      },
      {
        question: "How does source resistance affect an RC high-pass filter?",
        answer: "Source resistance acts in series with the input, attenuating high-frequency passband gain and slightly altering the effective filter corner frequency."
      }
    ],
    standardsReferences: [
      { organization: "IEC", code: "IEC 60268-3", title: "Sound System Equipment — Part 3: Amplifiers" },
      { organization: "IEEE", code: "IEEE Std 1057", title: "Standard for Digitizing Waveform Recorders — Frequency Response & Settling Time" },
      { organization: "AES", code: "AES-2id", title: "AES Information Document for Digital Audio Engineering — Audio Filter Specifications" },
      { organization: "ANSI", code: "ANSI/CTA-2034", title: "Standard Method of Measurement for In-Home Loudspeakers" }
    ],
    internalLinks: {
      parentDiscipline: { id: "electronics-calc", name: "Electronics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 4. RL TIME CONSTANT CALCULATOR
  "rl-time-constant": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "RL Time Constant Calculator | Inductive Tau (τ = L/R) & Transient Solver",
    metaDescription: "Calculate RL circuit time constant tau (τ = L / R) for inductive current rise and decay. Covers flyback voltage spikes, relay coil timing, and magnetic energy storage.",
    canonicalUrl,
    introduction: {
      overview: "An RL circuit comprises an electrical inductor and a resistor connected in series. Because an inductor opposes any instantaneous change in electric current by generating a back-electromotive force (back-EMF) governed by Faraday's law of induction (V_L = -L × di/dt), current through an RL network builds up or decays exponentially over time. The characteristic rate of this inductive transient response is defined by the time constant tau (τ = L / R). Understanding RL time constants is vital for calculating relay coil pull-in and drop-out times, designing flyback diode snubber circuits, managing motor winding transients, and optimizing inductive energy storage in switch-mode power converters.",
      applications: [
        "Electromechanical relay and solenoid coil energization and de-energization timing.",
        "Flyback voltage spike suppression and freewheeling diode protection for power transistors.",
        "DC motor winding current rise-time analysis in PWM motor speed controllers.",
        "Inductive energy storage and charging cycle calculations in buck/boost switch-mode power supplies."
      ],
      industries: [
        "Power Electronics & Motor Drives",
        "Industrial Automation & Relays",
        "Automotive Ignition & Solenoid Control",
        "Switch-Mode Power Supply (SMPS) Design"
      ]
    },
    quickAnswer: "The RL circuit time constant tau (τ) equals inductance divided by resistance (τ = L / R). For an inductance of 10 mH (0.01 H) and a resistance of 100 Ω, the time constant tau is exactly 0.0001 seconds (100 microseconds). Current reaches 63.2% of its maximum steady-state value after 1τ.",
    governingEquation: {
      formula: "\\tau = \\frac{L}{R} \\quad \\text{and} \\quad I(t) = \\frac{V}{R} \\left(1 - e^{-t/\\tau}\\right)",
      explanation: "The RL time constant equation divides inductance (L in Henries) by resistance (R in Ohms) to calculate tau (τ in seconds). During current growth from a DC voltage source V, current rises exponentially toward the Ohm's law limit I_max = V / R. After 1τ, current reaches 63.2% of I_max; after 5τ, it reaches 99.3% and enters magnetic steady state.",
      variables: [
        { symbol: "τ", label: "Time Constant (Tau)", unit: "Seconds (s)", description: "Time required for inductor current to rise to 63.2% of steady-state maximum or decay to 36.8%." },
        { symbol: "L", label: "Inductance", unit: "Henries (H)", description: "Magnetic flux linkage capacity of the coil or inductor." },
        { symbol: "R", label: "Resistance", unit: "Ohms (Ω)", description: "Total series circuit resistance, including inductor coil wire resistance (DCR)." }
      ]
    },
    inputParameters: [
      {
        name: "l",
        label: "Inductance (L)",
        unit: "Henries (H)",
        defaultValue: 0.01,
        explanation: "The circuit inductance in Henries. Default is set to 0.01 H (10 mH), representative of small relay coils, choke inductors, and solenoid actuators."
      },
      {
        name: "r",
        label: "Resistance (R)",
        unit: "Ohms (Ω)",
        defaultValue: 100,
        explanation: "The total series resistance in Ohms. Default is set to 100 Ω, combining discrete series resistance and inductor copper wire resistance."
      }
    ],
    outputExplanation: {
      unit: "Seconds (s)",
      interpretation: "The computed value represents the single inductive time constant (1τ) in seconds.",
      designImpact: "Engineers use tau to determine maximum switching frequencies for inductive loads. Switching off an inductor faster than its natural decay time causes high inductive voltage spikes (V = L di/dt) that require protection diodes or TVS clamps."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Inductance (L)", value: 0.01, unit: "H" },
        { label: "Resistance (R)", value: 100, unit: "Ω" }
      ],
      substitution: "Substitute L = 0.01 H and R = 100 Ω into the inductive time constant formula τ = L / R:",
      intermediateSteps: [
        "1. Identify given inputs: Inductance L = 0.01 H (10 mH), Resistance R = 100 Ω.",
        "2. Check dimensional homogeneity: 1 Henry / 1 Ohm = (V·s / A) / (V / A) = 1 Second (s).",
        "3. Divide inductance by resistance: τ = 0.01 / 100 = 0.0001 s (100 µs).",
        "4. Calculate full current rise time (5τ): 5 × 0.0001 s = 0.0005 s (500 µs or 0.5 ms).",
        "5. Calculate steady-state current for a 12 V source: I_max = 12 V / 100 Ω = 0.12 A (120 mA)."
      ],
      finalResult: "0.0001",
      unit: "Seconds (s)"
    },
    practicalExample: {
      scenarioTitle: "Automotive Relay Coil Energization Timing",
      industryContext: "An automotive electronics engineer is designing a solid-state driver circuit for an automotive starter relay coil.",
      problemStatement: "The relay coil has an inductance of L = 0.4 H and a DC winding resistance of R = 80 Ω. What is the time constant of the coil, and how long after applying 12 V does the current reach the 118 mA threshold (approximately 80% of final current) required to pull in the mechanical contacts?",
      engineeringSolution: "Calculate the time constant: τ = L / R = 0.4 H / 80 Ω = 0.005 s (5 ms). Final current is I_max = 12 V / 80 Ω = 150 mA. Current follows I(t) = 150 mA × (1 - e^(-t/5ms)). Setting I(t) = 118 mA gives 118/150 = 0.787 = 1 - e^(-t/5ms) → e^(-t/5ms) = 0.213 → t = -5 ms × ln(0.213) ≈ 7.73 ms. The relay pulls in approximately 7.7 ms after energization."
    },
    assumptions: [
      "The inductor magnetic core operates in its linear region without magnetic saturation.",
      "The winding resistance is constant and lumped into the total series resistance R.",
      "Inter-winding parasitic capacitance is negligible at the switching speeds considered.",
      "The DC voltage source provides an ideal step input with zero internal impedance."
    ],
    limitations: [
      "Core saturation dramatically reduces effective inductance (L) at high current levels, shortening the effective time constant.",
      "Eddy current and hysteresis losses in iron or ferrite cores introduce non-linear damping not modeled by simple L/R.",
      "Skin effect and proximity effect increase AC winding resistance at high frequencies.",
      "Interrupting inductor current abruptly with a mechanical switch creates arc voltages exceeding thousands of volts if unsuppressed."
    ],
    commonMistakes: [
      "Confusing the RL formula (τ = L / R) with the RC formula (τ = R × C) and multiplying L by R instead of dividing.",
      "Omitting the internal DC resistance (DCR) of the inductor winding when calculating total series resistance.",
      "Forgetting to install a freewheeling flyback diode across inductive loads driven by bipolar transistors or MOSFETs.",
      "Ignoring core saturation current ratings when sizing power inductors."
    ],
    bestPractices: [
      "Always place a flyback diode (such as a 1N4007 or Schottky diode) anti-parallel across DC relay coils and solenoids to safely recirculate decay current.",
      "Measure the DC resistance (DCR) of physical inductor coils with a four-wire Kelvin ohmmeter for accurate timing modeling.",
      "Verify that peak circuit current stays well below the inductor's magnetic core saturation rating (I_sat).",
      "For fast relay de-energization, use a Zener diode in series with the flyback diode to increase dissipation voltage and shorten drop-out time."
    ],
    faqs: [
      {
        question: "Why is the RL time constant τ = L / R instead of τ = L × R?",
        answer: "Dimensionally, 1 Henry = 1 (Volt · Second) / Ampere, and 1 Ohm = 1 Volt / Ampere. Dividing Henry by Ohm yields seconds: [(V·s)/A] / [V/A] = seconds. Physically, higher resistance limits current faster, shortening the transient duration."
      },
      {
        question: "Why do inductors create high voltage spikes when disconnected?",
        answer: "An inductor opposes rapid current changes according to V = -L × (di/dt). When a switch opens, current tries to drop to zero instantly (dt ≈ 0), causing di/dt to approach infinity and generating massive flyback voltages that can destroy semiconductors."
      },
      {
        question: "What percentage of final current is reached at 1, 2, 3, 4, and 5 time constants?",
        answer: "At 1τ current reaches 63.2%; at 2τ it reaches 86.5%; at 3τ it reaches 95.0%; at 4τ it reaches 98.2%; and at 5τ it reaches 99.3% of maximum steady-state current."
      },
      {
        question: "How does magnetic core saturation affect the RL time constant?",
        answer: "When magnetic core flux saturates, the differential permeability collapses, drastically reducing inductance (L). This causes current to spike rapidly because the effective time constant τ drops sharply."
      },
      {
        question: "What is the equivalent AC cutoff frequency of an RL low-pass circuit?",
        answer: "For an RL low-pass filter (resistor output, inductor in series), the -3 dB cutoff frequency is fc = R / (2 × π × L) = 1 / (2πτ)."
      },
      {
        question: "How does a flyback diode affect relay turn-off time?",
        answer: "A simple flyback diode clamps coil voltage to ~0.7 V, forcing current to decay slowly through the coil's internal resistance (τ = L/R_coil), which delays relay contact opening. Adding a series Zener diode speeds up release."
      },
      {
        question: "Does an inductor consume real power in steady-state DC?",
        answer: "In ideal steady-state DC, the magnetic field is constant and the inductor consumes zero power (acting as a short circuit). Real inductors consume I² × DCR power solely due to winding copper resistance."
      },
      {
        question: "How do temperature changes affect the RL time constant?",
        answer: "Copper wire has a positive temperature coefficient of resistance (+0.393%/°C). As coil temperature rises, resistance R increases, which shortens the time constant τ = L/R and reduces steady-state current."
      }
    ],
    standardsReferences: [
      { organization: "IEC", code: "IEC 61810-1", title: "Electromechanical Elementary Relays — General & Safety Requirements" },
      { organization: "IEEE", code: "IEEE Std 399", title: "Recommended Practice for Industrial and Commercial Power Systems Analysis" },
      { organization: "NEMA", code: "NEMA ICS 2", title: "Industrial Control and Systems: Controllers, Contactors and Overload Relays" },
      { organization: "SAE", code: "SAE J1171", title: "External Ignition Protection of Marine Electrical Devices" }
    ],
    internalLinks: {
      parentDiscipline: { id: "electronics-calc", name: "Electronics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 5. LC RESONANT FREQUENCY CALCULATOR
  "lc-resonant-frequency": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "LC Resonant Frequency Calculator | Tank Circuit Resonance Solver",
    metaDescription: "Calculate the natural undamped resonant frequency (f0 = 1 / (2π√(LC))) of an LC tank circuit. Covers RF oscillators, tuning circuits, and impedance matching.",
    canonicalUrl,
    introduction: {
      overview: "An LC circuit (often called a tank or resonant circuit) consists of an electrical inductor and a capacitor connected in parallel or series. Because the inductor stores energy in its magnetic field while the capacitor stores energy in its electrostatic field, energy oscillates continuously back and forth between the two reactive components. At a specific natural frequency known as the resonant frequency (f0), the inductive reactance (X_L = 2πfL) exactly equals the capacitive reactance (X_C = 1 / (2πfC)), canceling each other out. In a parallel tank circuit, resonance creates an extremely high impedance, while in a series LC circuit, resonance creates a minimum impedance (approaching zero). LC resonant circuits form the foundation of radio frequency (RF) transmitters, receivers, bandpass filters, and wireless power transfer systems.",
      applications: [
        "Radio frequency (RF) antenna tuning and broadcast bandpass filtering (AM/FM/Shortwave).",
        "Local oscillators and tank circuits in Colpitts, Hartley, and Clapp RF oscillators.",
        "Wireless power transfer and inductive charging coils (Qi standard).",
        "Electromagnetic interference (EMI) notch traps and power line harmonic rejection filters."
      ],
      industries: [
        "RF Communications & Wireless Systems",
        "Broadcast Radio & Television Engineering",
        "Aerospace Avionics & Radar Systems",
        "Wireless Power & Inductive Heating"
      ]
    },
    quickAnswer: "The resonant frequency (f0) of an ideal LC tank circuit is f0 = 1 / (2 × π × √(L × C)). For an inductance of 1 mH (0.001 H) and a capacitance of 10 nF (0.00000001 F), the natural resonant frequency is approximately 50,329.21 Hz (50.33 kHz).",
    governingEquation: {
      formula: "f_0 = \\frac{1}{2 \\pi \\sqrt{L C}} \\quad \\text{and} \\quad \\omega_0 = \\frac{1}{\\sqrt{L C}}",
      explanation: "Resonance occurs when inductive reactance equals capacitive reactance: 2πfL = 1 / (2πfC). Solving for frequency f yields Thomson's formula f0 = 1 / (2π√(LC)), where f0 is the resonant frequency in Hertz (Hz), L is inductance in Henries (H), and C is capacitance in Farads (F). The angular resonant frequency is ω0 = 1 / √(LC) in radians per second.",
      variables: [
        { symbol: "f0", label: "Resonant Frequency", unit: "Hertz (Hz)", description: "Natural oscillation frequency where reactive impedances cancel." },
        { symbol: "L", label: "Inductance", unit: "Henries (H)", description: "Inductance of the tank coil storing magnetic energy." },
        { symbol: "C", label: "Capacitance", unit: "Farads (F)", description: "Capacitance of the tank capacitor storing electrostatic energy." }
      ]
    },
    inputParameters: [
      {
        name: "l",
        label: "Inductance (L)",
        unit: "Henries (H)",
        defaultValue: 0.001,
        explanation: "The tank circuit inductance in Henries. Default is set to 0.001 H (1 mH), typical for medium-frequency RF tuning coils and chokes."
      },
      {
        name: "c",
        label: "Capacitance (C)",
        unit: "Farads (F)",
        defaultValue: 0.00000001,
        explanation: "The tank circuit capacitance in Farads. Default is set to 0.00000001 F (10 nF), standard for RF resonant tank capacitors."
      }
    ],
    outputExplanation: {
      unit: "Hertz (Hz)",
      interpretation: "The computed result is the undamped natural resonant frequency of the LC combination in Hertz.",
      designImpact: "In parallel tank circuits, input impedance peaks sharply at f0, allowing selective amplification of a target radio station while rejecting adjacent channel signals."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Inductance (L)", value: 0.001, unit: "H" },
        { label: "Capacitance (C)", value: 0.00000001, unit: "F" }
      ],
      substitution: "Substitute L = 0.001 H and C = 1.0 × 10⁻⁸ F into the Thomson resonance formula f0 = 1 / (2 × π × √(L × C)):",
      intermediateSteps: [
        "1. Identify given values: Inductance L = 0.001 H, Capacitance C = 1.0 × 10⁻⁸ F.",
        "2. Compute the product L × C: 0.001 × 1.0 × 10⁻⁸ = 1.0 × 10⁻¹¹ s².",
        "3. Take the square root: √(1.0 × 10⁻¹¹) ≈ 3.16227766 × 10⁻⁶ s.",
        "4. Multiply by 2 × π: 2 × 3.14159265 × 3.16227766 × 10⁻⁶ ≈ 1.98691765 × 10⁻⁵ s.",
        "5. Invert to calculate resonant frequency: f0 = 1 / (1.98691765 × 10⁻⁵) ≈ 50,329.21 Hz (50.33 kHz)."
      ],
      finalResult: "50329.21",
      unit: "Hertz (Hz)"
    },
    practicalExample: {
      scenarioTitle: "AM Radio Receiver 1000 kHz Antenna Front-End Tuner",
      industryContext: "An RF communications engineer is designing an LC front-end tuning stage to select an AM radio broadcast channel at 1,000 kHz (1.0 MHz).",
      problemStatement: "The receiver uses a fixed 220 µH ferrite rod antenna inductor. What capacitance value must the variable tuning capacitor be adjusted to in order to resonate precisely at 1.0 MHz?",
      engineeringSolution: "Rearranging f0 = 1 / (2π√(LC)) to solve for C: C = 1 / (4π² × f0² × L) = 1 / (4 × π² × (1.0 × 10⁶)² × 220 × 10⁻⁶) = 1 / (4 × 9.8696 × 10¹² × 2.2 × 10⁻⁴) = 1 / 8.685 × 10⁹ ≈ 1.15 × 10⁻¹⁰ F (115 pF). The tuning capacitor is adjusted to 115 pF."
    },
    assumptions: [
      "The circuit is lossless with zero internal resistance in the inductor winding or capacitor dielectric.",
      "The inductor and capacitor values are linear and independent of signal amplitude and frequency.",
      "Zero radiation losses occur from the circuit loop.",
      "Operating environment temperature remains constant."
    ],
    limitations: [
      "Real-world inductors have internal DC winding resistance (DCR) and inter-turn capacitance, which damp oscillations and lower the actual resonant peak.",
      "Real capacitors have equivalent series resistance (ESR) and equivalent series inductance (ESL) that alter high-frequency resonance.",
      "Circuit Quality Factor (Q) determines resonant bandwidth; an ideal LC calculation does not predict bandwidth without knowing circuit resistance.",
      "Temperature drift in ferrite core permeability shifts the resonant frequency over thermal cycles."
    ],
    commonMistakes: [
      "Entering microhenries (µH) or picofarads (pF) directly into calculation formulas without converting to base units (H and F).",
      "Confusing series resonance (minimum impedance) with parallel resonance (maximum impedance).",
      "Overlooking the self-resonant frequency (SRF) of the inductor caused by its parasitic inter-turn capacitance.",
      "Neglecting stray PCB trace capacitance (typically 2–5 pF) when designing high-frequency RF resonant circuits."
    ],
    bestPractices: [
      "Use high-Q C0G/NP0 ceramic, silver mica, or air-variable capacitors in RF resonant circuits for maximum stability and minimal dielectric loss.",
      "Select inductors wound on low-loss toroidal iron powder or ferrite cores designed specifically for the operating frequency band.",
      "Include parasitic capacitance estimates (typically 3–10 pF) when calculating resonance above 10 MHz.",
      "Calculate the loaded Quality Factor (Q_L) to ensure the resonant circuit bandwidth matches the modulation signal bandwidth."
    ],
    faqs: [
      {
        question: "What is the difference between series and parallel LC resonance?",
        answer: "In a series LC circuit at resonance, the opposing reactive voltages cancel, producing minimum theoretical impedance (Z ≈ 0, purely resistive). In a parallel LC circuit, opposing circulating currents cancel, producing maximum theoretical impedance (Z ≈ ∞)."
      },
      {
        question: "What is an LC tank circuit?",
        answer: "A tank circuit is a parallel LC network that acts as an electrical resonator, storing and exchanging energy between the capacitor's electric field and the inductor's magnetic field like a mechanical pendulum."
      },
      {
        question: "How does changing inductance vs. capacitance affect resonant frequency?",
        answer: "Both L and C have equal inverse-square-root influence on resonant frequency. Doubling either L or C reduces f0 by a factor of √2 (approximately 29.3% reduction). To double f0, you must reduce either L or C to one-fourth of its original value."
      },
      {
        question: "What is the Quality Factor (Q) of an LC circuit?",
        answer: "The Quality Factor (Q = 2π × Energy Stored / Energy Dissipated per cycle) measures the sharpness of resonance. High-Q circuits have narrow bandwidths and low energy loss, while low-Q circuits have broader passbands."
      },
      {
        question: "What is the self-resonant frequency (SRF) of an inductor?",
        answer: "Every physical inductor has parasitic inter-turn capacitance. The self-resonant frequency is the point where the inductor's inductance resonates with its own parasitic capacitance, beyond which it behaves like a capacitor."
      },
      {
        question: "Why do LC oscillators eventually stop oscillating without a power source?",
        answer: "Because real conductors and dielectric materials have internal resistance (DCR and ESR) that continuously converts circulating electrical energy into heat, damping the oscillation over time."
      },
      {
        question: "Can an LC circuit resonate at multiple frequencies?",
        answer: "A single lumped-element LC circuit has only one fundamental resonant frequency. However, distributed-element transmission lines and cavities exhibit multiple harmonic resonant modes."
      },
      {
        question: "How do I calculate the bandwidth of a resonant LC circuit?",
        answer: "Bandwidth (BW in Hz) at the -3 dB points is calculated by dividing the resonant frequency by the circuit Quality Factor: BW = f0 / Q."
      }
    ],
    standardsReferences: [
      { organization: "IEEE", code: "IEEE Std 315", title: "Graphic Symbols for Electrical and Electronics Diagrams" },
      { organization: "IEC", code: "IEC 60068-2", title: "Environmental Testing for Telecommunication & Electronic Components" },
      { organization: "EIA", code: "EIA-372", title: "Test Methods for Radio Frequency Inductors" },
      { organization: "ISO", code: "ISO 14443", title: "Identification Cards — Contactless Integrated Circuit Cards (13.56 MHz RFID Resonance)" }
    ],
    internalLinks: {
      parentDiscipline: { id: "electronics-calc", name: "Electronics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  }),

  // 6. RLC RESONANT FREQUENCY CALCULATOR
  "rlc-resonant-frequency": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "RLC Resonant Frequency Calculator | Series & Parallel RLC Solver",
    metaDescription: "Calculate undamped resonant frequency (f0 = 1 / (2π√(LC))), damping factor, and bandwidth for series and parallel RLC circuits. Includes quality factor analysis.",
    canonicalUrl,
    introduction: {
      overview: "An RLC circuit incorporates an electrical resistor (R), an inductor (L), and a capacitor (C) connected in either series or parallel configuration. While the reactive components (L and C) exchange stored energy to create natural oscillations at the resonant frequency f0 = 1 / (2π√(LC)), the resistive element (R) dissipates energy as heat, introducing damping. Depending on the relative value of R compared to the characteristic impedance Z0 = √(L/C), the circuit transient response exhibits underdamped (ringing), critically damped, or overdamped behavior. In frequency-domain applications, RLC networks function as bandpass, bandstop (notch), and equalizing filters with precisely controlled selectivity and bandwidth.",
      applications: [
        "Narrowband bandpass and notch filters for radio frequency (RF) and audio signal processing.",
        "Impedance matching networks between RF power amplifiers and transmission lines.",
        "Surge suppression, snubber networks, and transient voltage spike damping across inductive loads.",
        "Wireless inductive power receiver resonance tuning with controlled load damping."
      ],
      industries: [
        "Telecommunications & RF Hardware Design",
        "Audio Signal Processing & Acoustic Equalization",
        "Power Electronics & Snubber Design",
        "Automotive & Industrial Sensor Networks"
      ]
    },
    quickAnswer: "The undamped resonant frequency (f0) of an RLC circuit is f0 = 1 / (2 × π × √(L × C)). For an inductance of 10 mH (0.01 H), capacitance of 100 nF (0.0000001 F), and damping resistance of 10 Ω, the resonant frequency is approximately 5,032.92 Hz (5.033 kHz).",
    governingEquation: {
      formula: "f_0 = \\frac{1}{2 \\pi \\sqrt{L C}} \\quad \\text{and} \\quad Q_{\\text{series}} = \\frac{1}{R} \\sqrt{\\frac{L}{C}}",
      explanation: "The undamped natural resonant frequency f0 depends solely on inductance (L in Henries) and capacitance (C in Farads). The damping resistance (R in Ohms) determines the circuit Quality Factor (Q) and bandwidth (BW = f0 / Q). In a series RLC circuit, Q = (1/R) × √(L/C) = (2πf0L) / R; in a parallel RLC circuit, Q = R × √(C/L) = R / (2πf0L).",
      variables: [
        { symbol: "f0", label: "Undamped Resonant Frequency", unit: "Hertz (Hz)", description: "Natural frequency where inductive and capacitive reactances cancel." },
        { symbol: "L", label: "Inductance", unit: "Henries (H)", description: "Energy storage in magnetic flux." },
        { symbol: "C", label: "Capacitance", unit: "Farads (F)", description: "Energy storage in electrostatic field." },
        { symbol: "R", label: "Damping Resistance", unit: "Ohms (Ω)", description: "Energy dissipation element controlling circuit damping and bandwidth." }
      ]
    },
    inputParameters: [
      {
        name: "l",
        label: "Inductance (L)",
        unit: "Henries (H)",
        defaultValue: 0.01,
        explanation: "The series or parallel inductance in Henries. Default is set to 0.01 H (10 mH)."
      },
      {
        name: "c",
        label: "Capacitance (C)",
        unit: "Farads (F)",
        defaultValue: 0.0000001,
        explanation: "The series or parallel capacitance in Farads. Default is set to 0.0000001 F (100 nF or 0.1 µF)."
      },
      {
        name: "r",
        label: "Damping Resistance (R)",
        unit: "Ohms (Ω)",
        defaultValue: 10,
        explanation: "The circuit damping resistance in Ohms. Default is set to 10 Ω, representing typical loop resistance."
      }
    ],
    outputExplanation: {
      unit: "Hertz (Hz)",
      interpretation: "The computed value is the undamped natural resonant frequency (f0) of the RLC network.",
      designImpact: "While f0 defines the center frequency, the damping resistance R establishes the sharpness of the frequency response curve (Quality Factor Q) and the rate at which transient oscillations decay."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Inductance (L)", value: 0.01, unit: "H" },
        { label: "Capacitance (C)", value: 0.0000001, unit: "F" },
        { label: "Resistance (R)", value: 10, unit: "Ω" }
      ],
      substitution: "Substitute L = 0.01 H, C = 1.0 × 10⁻⁷ F, and R = 10 Ω into f0 = 1 / (2 × π × √(L × C)):",
      intermediateSteps: [
        "1. Identify given inputs: L = 0.01 H (10 mH), C = 1.0 × 10⁻⁷ F (100 nF), R = 10 Ω.",
        "2. Calculate L × C product: 0.01 × 1.0 × 10⁻⁷ = 1.0 × 10⁻⁹ s².",
        "3. Compute square root: √(1.0 × 10⁻⁹) ≈ 3.16227766 × 10⁻⁵ s.",
        "4. Multiply by 2 × π: 2 × 3.14159265 × 3.16227766 × 10⁻⁵ ≈ 1.98691765 × 10⁻⁴ s.",
        "5. Invert to calculate natural resonant frequency: f0 = 1 / (1.98691765 × 10⁻⁴) ≈ 5,032.92 Hz (5.033 kHz).",
        "6. Calculate series Quality Factor: Q = (1 / 10 Ω) × √(0.01 / 1.0 × 10⁻⁷) = 0.1 × √100,000 ≈ 31.62.",
        "7. Calculate series -3 dB bandwidth: BW = f0 / Q = 5,032.92 Hz / 31.62 ≈ 159.15 Hz."
      ],
      finalResult: "5032.92",
      unit: "Hertz (Hz)"
    },
    practicalExample: {
      scenarioTitle: "Audio Graphic Equalizer 1 kHz Midrange Bandpass Filter",
      industryContext: "An audio hardware designer is implementing a 1.0 kHz peaking equalizer bandpass filter with a target Quality Factor of Q = 5.0.",
      problemStatement: "Using a standard 47 mH audio inductor, what capacitance C and series resistance R are required to center the filter at 1.0 kHz with Q = 5.0?",
      engineeringSolution: "Rearranging f0 = 1 / (2π√(LC)) gives C = 1 / (4π² × f0² × L) = 1 / (4 × π² × (1000)² × 0.047) ≈ 5.39 × 10⁻⁷ F (539 nF). Sizing the resistor from Q = (2πf0L) / R yields R = (2 × π × 1000 × 0.047) / 5.0 = 295.3 / 5.0 ≈ 59.06 Ω. The engineer uses a 540 nF capacitor and a 59 Ω resistor."
    },
    assumptions: [
      "Components are lumped linear time-invariant passive elements.",
      "Resistance R is non-inductive and represents total circuit dissipation.",
      "Zero radiative electromagnetic coupling to external conductors.",
      "Operation is in steady-state AC regime."
    ],
    limitations: [
      "In heavily damped circuits (low Q, under critical damping where R > 2√(L/C) in series), the actual damped oscillation frequency fd = f0 × √(1 - (1/(2Q))²) shifts noticeably below f0.",
      "Inductor core non-linearities and saturation at high signal amplitudes alter effective inductance.",
      "Capacitor dielectric losses (dissipation factor tan δ) contribute additional effective series resistance.",
      "Parasitic trace capacitance and inductance alter high-frequency resonant performance."
    ],
    commonMistakes: [
      "Using the series Q formula for a parallel RLC circuit (in parallel RLC, Q is proportional to R, whereas in series RLC, Q is inversely proportional to R).",
      "Ignoring the inductor's internal winding resistance (DCR), which adds directly to R in series circuits.",
      "Assuming high Q is always desirable (excessive Q causes ringing and severe transient overshoot).",
      "Confusing undamped resonant frequency f0 with damped ringing frequency fd."
    ],
    bestPractices: [
      "Calculate both undamped resonant frequency (f0) and Quality Factor (Q) to completely characterize circuit response.",
      "In series RLC circuits, use low-DCR inductors to ensure the desired Q is determined by the precision external resistor.",
      "Check damping ratio ζ = 1 / (2Q) for pulse and step applications to prevent unwanted ringing (aim for ζ ≈ 0.707 for Butterworth response).",
      "Use film or C0G ceramic capacitors to maintain Q factor stability across operating temperature ranges."
    ],
    faqs: [
      {
        question: "How does resistance (R) affect the resonant frequency of an RLC circuit?",
        answer: "Resistance does not change the undamped natural resonant frequency f0 = 1 / (2π√(LC)). However, in time-domain transient response, resistance causes damping, lowering the actual ringing frequency to fd = f0 × √(1 - ζ²)."
      },
      {
        question: "What is the difference between underdamped, critically damped, and overdamped RLC circuits?",
        answer: "Underdamped (Q > 0.5, ζ < 1) circuits ring with decaying sinusoidal oscillations. Critically damped (Q = 0.5, ζ = 1) circuits return to steady state in the fastest possible time without overshoot. Overdamped (Q < 0.5, ζ > 1) circuits return to equilibrium sluggishly without oscillating."
      },
      {
        question: "Why is the Quality Factor formula different for series and parallel RLC circuits?",
        answer: "In a series RLC circuit, a smaller R reduces dissipation and increases Q (Q = (1/R)√(L/C)). In a parallel RLC circuit, current splits; a larger R draws less dissipative current, increasing Q (Q = R√(C/L))."
      },
      {
        question: "How is circuit bandwidth related to Quality Factor (Q)?",
        answer: "Bandwidth (BW) between the -3 dB half-power frequencies is inversely proportional to Q: BW = f0 / Q. A high-Q circuit creates a sharp, narrow filter, while a low-Q circuit creates a wide filter."
      },
      {
        question: "What happens to the impedance of a series RLC circuit at resonance?",
        answer: "At resonance, the inductive reactance (+jX_L) and capacitive reactance (-jX_C) cancel out completely, leaving the circuit impedance purely resistive and equal to R (Z = R), resulting in maximum circuit current."
      },
      {
        question: "What happens to the impedance of a parallel RLC circuit at resonance?",
        answer: "At resonance, parallel circulating reactive currents cancel, producing a maximum purely resistive impedance equal to R (Z = R), resulting in minimum total supply current."
      },
      {
        question: "What is the damping ratio (zeta, ζ) in an RLC circuit?",
        answer: "The damping ratio ζ = 1 / (2Q) measures how oscillations decay relative to critical damping. Critical damping occurs at ζ = 1 (Q = 0.5)."
      },
      {
        question: "How do I choose between an active filter and a passive RLC filter?",
        answer: "Passive RLC filters are preferred at high frequencies (RF/microwave) and high power levels where active op-amps cannot operate. Active RC filters (Sallen-Key, MFB) are preferred at audio and low frequencies to eliminate bulky, expensive inductors."
      }
    ],
    standardsReferences: [
      { organization: "IEEE", code: "IEEE Std 100", title: "Standard Dictionary of Electrical and Electronic Terms" },
      { organization: "IEC", code: "IEC 60384-1", title: "Fixed Capacitors for Use in Electronic Equipment — Generic Specification" },
      { organization: "AES", code: "AES-12id", title: "AES Information Document for Digital Audio Engineering — Filter Topologies & Alignment" },
      { organization: "IPC", code: "IPC-D-317A", title: "Design Guidelines for Electronic Packaging Utilizing High Speed Techniques" }
    ],
    internalLinks: {
      parentDiscipline: { id: "electronics-calc", name: "Electronics Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  })

};
