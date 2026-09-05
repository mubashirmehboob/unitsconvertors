import { CustomArticleData } from "./types";

export const nanofaradToPicofarad: CustomArticleData = {
  fromUnitId: "nanofarad",
  toUnitId: "picofarad",
  seoTitle: "Nanofarad to Picofarad Converter - nF to pF",
  metaDescription: "Convert nanofarads to picofarads (nF to pF) with ease. Master the 1,000x multiplier rule, EIA 3-digit component codes (102, 103, 104), and worked examples.",
  h1: "Nanofarad to Picofarad Converter",
  introduction: [
    "Converting nanofarads (nF) to picofarads (pF) is a cornerstone calculation in electronics engineering, radio frequency (RF) design, and component testing. Because the widely used three-digit Electronic Industries Alliance (EIA) capacitor marking code is natively defined in picofarads, translating from schematic nanofarads to physical picofarads is essential for component identification.",
    "Both units belong to adjacent metric decades separated by a factor of 1,000. This converter provides instantaneous conversions, walks through the underlying mathematics, and explains how to decode physical capacitor markings accurately."
  ],
  quickAnswer: {
    text: "To convert nanofarads to picofarads, multiply the nanofarad value by 1,000. For instance, a 10 nF capacitor equals exactly 10,000 pF (marked with EIA code '103').",
    formulaDisplay: "1 nF = 1,000 pF",
    subtext: "Shift the decimal point three positions to the right to convert nanofarads into picofarads."
  },
  aboutSourceUnit: {
    title: "About the Nanofarad (nF)",
    text: "The nanofarad (symbol: nF) is an SI metric subunit representing one-billionth of a farad (10⁻⁹ F). It represents standard capacitance values for audio equalizers, tone controls, intermediate-frequency (IF) filters, and digital decoupling. Capacitors in this range typically employ metallized film, ceramic C0G/NP0, or multi-layer X7R dielectrics."
  },
  aboutTargetUnit: {
    title: "About the Picofarad (pF)",
    text: "The picofarad (symbol: pF, historically 'mmfd' or 'µµF') represents one-trillionth of a farad (10⁻¹² F). Picofarad-scale capacitors are ubiquitous in RF communications, antenna matching circuits, crystal oscillator load circuits, and high-speed PCB trace analysis where tiny capacitive values dictate circuit behavior."
  },
  relationship: "The relationship between nanofarads and picofarads is defined by SI metric prefix scaling. Since 'nano-' represents 10⁻⁹ and 'pico-' represents 10⁻¹², one nanofarad is exactly 1,000 times larger than one picofarad.",
  relationshipTitle: "Prefix Ratio and Mathematical Relationship",
  relationshipItems: [
    { label: "Nanofarads (nF) to Picofarads (pF)", value: "Multiply by 1,000" },
    { label: "Picofarads (pF) to Nanofarads (nF)", value: "Divide by 1,000 (or multiply by 0.001)" },
    { label: "SI Exponential Scaling", value: "10⁻⁹ F ÷ 10⁻¹² F = 10³ = 1,000" },
    { label: "Base Ratio", value: "1 nF : 1,000 pF" }
  ],
  formula: {
    text: "To convert capacitance from nanofarads to picofarads, multiply the value by 1,000.",
    math: "Capacitance (pF) = Capacitance (nF) × 1,000",
    subtext: "In scientific notation: pF = nF × 10³"
  },
  formulaTitle: "Conversion Formula",
  practicalTip: {
    title: "Connecting nF to the EIA Three-Digit Marking Code",
    text: "Capacitor manufacturers mark small disc and film components with a 3-digit EIA code based on picofarads (XY × 10ᶻ pF). For example, 1 nF = 1,000 pF = 10 × 10² pF, coded as '102'. Similarly, 10 nF = 10,000 pF (code '103'), and 100 nF = 100,000 pF (code '104'). Converting nF to pF makes deciphering component packaging intuitive."
  },
  examples: {
    title: "Step-by-Step Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Audio Preamplifier RF Filter",
        subtitle: "A circuit diagram specifies a 2.2 nF ceramic capacitor placed across an op-amp input to suppress RF demodulation. Convert this value to picofarads.",
        steps: [
          "State the initial capacitance: C = 2.2 nF.",
          "Apply the conversion formula: pF = nF × 1,000.",
          "Calculate: 2.2 × 1,000 = 2,200.",
          "Conclusion: 2.2 nF equals 2,200 pF (marked with code '222')."
        ]
      },
      {
        title: "Example 2: Guitar Tone Control Circuit",
        subtitle: "A classic guitar tone control calls for a 47 nF 'Bumblebee' capacitor. Express this value in picofarads.",
        steps: [
          "Given capacitance: C = 47 nF.",
          "Multiply by 1,000: 47 × 1,000 = 47,000.",
          "Conclusion: 47 nF equals 47,000 pF (marked as '473' or 0.047 µF)."
        ]
      },
      {
        title: "Example 3: RF Crystal Oscillator Shunt",
        subtitle: "A communications circuit uses a 0.5 nF (500 pF) damping capacitor. Verify the conversion from nanofarads to picofarads.",
        steps: [
          "Identify the value: C = 0.5 nF.",
          "Calculate: 0.5 × 1,000 = 500.",
          "Conclusion: 0.5 nF is exactly 500 pF."
        ]
      }
    ]
  },
  table: {
    title: "Nanofarad to Picofarad Reference Table",
    headers: ["Nanofarads (nF)", "Picofarads (pF)", "EIA 3-Digit Code", "Common Circuit Application"],
    rows: [
      { fromVal: "0.1 nF", toVal: "100 pF", extra: "EIA 101 | Op-amp phase margin stabilization" },
      { fromVal: "0.22 nF", toVal: "220 pF", extra: "EIA 221 | Audio power amplifier Miller capacitor" },
      { fromVal: "0.47 nF", toVal: "470 pF", extra: "EIA 471 | High-speed digital signal slew damping" },
      { fromVal: "1.0 nF", toVal: "1,000 pF", extra: "EIA 102 | Switched-mode power supply snubber" },
      { fromVal: "2.2 nF", toVal: "2,200 pF", extra: "EIA 222 | Line filter transient suppression" },
      { fromVal: "4.7 nF", toVal: "4,700 pF", extra: "EIA 472 | Tone control filter circuit" },
      { fromVal: "10 nF", toVal: "10,000 pF", extra: "EIA 103 | Op-amp intermediate power bypass" },
      { fromVal: "22 nF", toVal: "22,000 pF", extra: "EIA 223 | Electric guitar tone circuit" },
      { fromVal: "47 nF", toVal: "47,000 pF", extra: "EIA 473 | Sallen-Key active low-pass crossover" },
      { fromVal: "100 nF", toVal: "100,000 pF", extra: "EIA 104 | Universal digital logic IC decoupling" }
    ]
  },
  expertNote: {
    title: "Dielectric Selection in the nF to pF Boundary",
    text: "Components below 1,000 pF (1 nF) are almost exclusively manufactured using Class 1 C0G/NP0 ceramics or silver mica, offering zero voltage coefficient and exceptional temperature stability. Above 10 nF (10,000 pF), Class 2 ceramics (X7R, X5R) become common, offering higher capacitance density but requiring attention to DC voltage bias derating."
  },
  applications: {
    title: "Practical Engineering Scenarios",
    items: [
      {
        title: "Deciphering Physical Capacitor Markings",
        text: "When picking components from parts bins or inspecting surface-mount carrier reels, values are printed in EIA three-digit picofarad codes. Knowing that 10 nF equals 10,000 pF ('103') allows technicians to verify component reels against schematics instantly."
      },
      {
        title: "Phase-Locked Loop (PLL) Filter Design",
        text: "PLL loop filters synthesize stable high-frequency clocks for microprocessors and wireless transmitters. The loop filter's poles and zeros are calculated using nanofarads and picofarads to optimize lock time while suppressing phase noise."
      },
      {
        title: "High-Frequency Active Filtering",
        text: "Active Sallen-Key and state-variable filters operating in the ultrasonic and RF spectrums combine nanofarad and picofarad capacitors with precision resistors to achieve steep cut-off responses without self-resonance."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Dividing instead of multiplying: Because a nanofarad is 1,000 times larger than a picofarad, your result in pF must always be larger than your starting value in nF.",
      "Misinterpreting three-digit codes: Confusing code '102' (10 × 10² pF = 1,000 pF = 1 nF) with 102 pF.",
      "Overlooking parasitic trace capacitance: In high-speed circuits, 5 pF to 10 pF of PCB layout capacitance can alter the behavior of small nanofarad and picofarad networks.",
      "Assuming identical dielectric performance: Substituting a 10 nF (10,000 pF) X7R ceramic for a precision film or C0G capacitor can introduce harmonic distortion in audio signal paths."
    ]
  },
  faqs: [
    {
      question: "How do I convert nanofarads to picofarads?",
      answer: "To convert nanofarads (nF) to picofarads (pF), multiply the nanofarad value by 1,000. For instance, 4.7 nF multiplied by 1,000 equals 4,700 pF."
    },
    {
      question: "How many picofarads are in 1 nanofarad?",
      answer: "There are exactly 1,000 picofarads in 1 nanofarad (1 nF = 10³ pF)."
    },
    {
      question: "What is 1 nF in picofarads?",
      answer: "1 nF equals 1,000 pF. On ceramic disc capacitors, this is marked with the code '102'."
    },
    {
      question: "What is 10 nF in picofarads?",
      answer: "10 nF equals 10,000 pF (marked with EIA code '103'). In microfarads, it equals 0.01 µF."
    },
    {
      question: "What is 100 nF in picofarads?",
      answer: "100 nF is equal to 100,000 pF (marked with EIA code '104'). In microfarads, it equals 0.1 µF."
    },
    {
      question: "How do I convert picofarads back to nanofarads?",
      answer: "To convert picofarads to nanofarads, divide the picofarad value by 1,000. For example, 47,000 pF divided by 1,000 equals 47 nF."
    },
    {
      question: "What does code '222' mean on a capacitor?",
      answer: "Code '222' represents 22 followed by two zeros in picofarads: 2,200 pF. Converting this to nanofarads gives 2.2 nF (or 0.0022 µF)."
    },
    {
      question: "What is 0.1 nF in picofarads?",
      answer: "0.1 nF equals 100 pF (marked as code '101')."
    },
    {
      question: "Why does the EIA 3-digit capacitor code use picofarads as its base?",
      answer: "When standard capacitor marking was developed by the EIA, the picofarad was the smallest practical unit manufactured. Using picofarads as the base allowed all common values up to microfarads to be represented using just three digits."
    }
  ],
  relatedList: [
    { label: "Picofarad to Nanofarad", from: "picofarad", to: "nanofarad" },
    { label: "Nanofarad to Microfarad", from: "nanofarad", to: "microfarad" },
    { label: "Nanofarad to Farad", from: "nanofarad", to: "farad" },
    { label: "Microfarad to Picofarad", from: "microfarad", to: "picofarad" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM). <em>The International System of Units (SI) Brochure</em>.",
    "National Institute of Standards and Technology (NIST). <em>Special Publication 811: Guide for the Use of the International System of Units</em>.",
    "Electronic Industries Alliance (EIA). <em>EIA-198: Ceramic Dielectric Capacitors</em>."
  ]
};
