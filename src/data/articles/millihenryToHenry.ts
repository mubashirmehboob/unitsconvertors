import { CustomArticleData } from "./types";

export const millihenryToHenry: CustomArticleData = {
  fromUnitId: "millihenry",
  toUnitId: "henry",
  seoTitle: "Millihenry to Henry Converter - mH to H",
  metaDescription: "Convert Millihenrys to Henrys (mH to H). Learn how to scale component catalog values for computer-aided SPICE simulations.",
  h1: "Millihenry to Henry Converter",
  introduction: [
    "Converting from the highly popular Millihenry (mH) scale used for physical electronics parts to the primary SI unit, the Henry (H), is a vital step for simulation and system modeling. While manufacturing datasheets catalog passive audio components and power filters in millihenrys, system-level loop analysis software usually requires input in standard Henrys.",
    "This calculator translates your millihenry measurements back to standard Henrys instantly. Below, we explain the scaling mathematics, share practical simulation alignment strategies, and list typical power distribution applications."
  ],
  quickAnswer: {
    text: "To convert Millihenrys to Henrys, divide the Millihenry value by 1,000. For example, a 500 Millihenry filter choke contains exactly 0.5 Henrys.",
    formulaDisplay: "1 mH = 0.001 H",
    subtext: "Simply divide the inductance by 1,000 or shift the decimal point three places to the left."
  },
  aboutSourceUnit: {
    title: "About the Millihenry (mH)",
    text: "The Millihenry (mH) is a metric subunit representing one-thousandth of a Henry. Because full-scale Henry ratings are too large for consumer electronics, millihenry coils are widely used on circuit boards for audio speakers, motor filters, and mains isolation filters."
  },
  aboutTargetUnit: {
    title: "About the Henry (H)",
    text: "The Henry (H) is the fundamental SI unit of inductance. It represents the electrical capacity of a loop to generate one volt of potential when current changes by one ampere per second. Full Henry ratings are typically limited to heavy industrial reactors and grid power equipment."
  },
  relationship: "The metric system defines the prefix 'milli-' as exactly 10⁻³. This means that a Millihenry is 1,000 times smaller than a Henry. Converting from the subunit back to the primary unit requires dividing your measurement by 1,000.",
  relationshipTitle: "The Scaling Principle",
  relationshipItems: [
    { label: "Millihenry (mH) to Henry (H)", value: "Divide by 1,000" },
    { label: "Henry (H) to Millihenry (mH)", value: "Multiply by 1,000" }
  ],
  formula: {
    text: "To mathematically scale Millihenrys to Henrys, use this division formula. Dividing by 1,000 reduces the numerical value while shifting it to the primary SI base unit scale.",
    math: "Inductance in Henrys (H) = Inductance in mH ÷ 1,000",
    subtext: "To do this manually, shift the decimal point three places to the left."
  },
  formulaTitle: "Under the Hood: The Scaling Factor",
  practicalTip: {
    title: "Practical Crossover Simulation Tip",
    text: "When simulating crossovers in software like LTspice, the program expects values in full Henrys (H), but catalog parts are always labeled in millihenrys (mH). Always remember to divide by 1,000 when defining your inductors in simulation files, otherwise your crossover frequency will be off by a factor of 1,000!"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Audio System Simulation",
        subtitle: "A speaker designer has a catalog bass inductor rated at 6.8 mH. Convert this value to Henrys for simulation software.",
        steps: [
          "Identify the starting inductance: 6.8 mH.",
          "Write the conversion formula: H = mH ÷ 1,000.",
          "Perform the division: 6.8 ÷ 1,000 = 0.0068.",
          "Conclude: The value to input in the simulator is exactly 0.0068 H."
        ]
      },
      {
        title: "Example 2: Industrial AC Power Filter",
        subtitle: "Convert a heavy-duty filter rated at 1,500 mH to Henrys.",
        steps: [
          "Identify the value in mH: 1,500 mH.",
          "Apply the conversion factor: Divide by 1,000.",
          "Calculate: 1,500 ÷ 1,000 = 1.5.",
          "Conclude: The filter contains exactly 1.5 Henrys of inductance."
        ]
      }
    ]
  },
  table: {
    title: "Millihenry to Henry Conversion Table",
    headers: ["Millihenrys (mH)", "Henrys (H)", "Typical Equipment Scales"],
    rows: [
      { fromVal: "1", toVal: "0.001", extra: "RF line filters and small decoupling coils" },
      { fromVal: "5", toVal: "0.005", extra: "Mid-range passive audio crossovers" },
      { fromVal: "25", toVal: "0.025", extra: "Low-frequency speaker sub-woofers" },
      { fromVal: "100", toVal: "0.1", extra: "Compact power supply ripples suppression" },
      { fromVal: "500", toVal: "0.5", extra: "Medium frequency isolation chokes" },
      { fromVal: "1,000", toVal: "1", extra: "Standard primary unit equivalent" },
      { fromVal: "5,000", toVal: "5", extra: "Large industrial AC noise choke networks" }
    ]
  },
  expertNote: {
    title: "Did You Know? (Magnetic Core Saturation)",
    text: "As you convert smaller millihenry ratings to full Henry chokes, the physical size of the iron or ferrite core grows exponentially. Large Henry-range chokes require heavy laminated iron cores to prevent magnetic saturation from high line currents."
  },
  applications: {
    title: "Millihenry to Henry Applications",
    items: [
      {
        title: "Industrial AC Mains Filters",
        text: "Factories use large noise chokes to isolate sensitive CNC machinery from voltage spikes. These chokes are often simulated in Henrys (H) to evaluate filter loop stability but built using components measured in mH."
      },
      {
        title: "High-Fidelity Speaker Design",
        text: "Professional speaker design packages model acoustic enclosures using full Henrys. Translating the cabinet's physical woofer coils from mH to H is necessary to align the simulated phase charts."
      },
      {
        title: "Renewable Energy Inverters",
        text: "Wind turbines generate erratic electrical signals. Heavy-duty converters use massive inductors to smooth out energy before routing it into substation transformers, with engineers mapping the inductance in Henrys."
      }
    ]
  },
  pitfalls: {
    title: "Common Engineering Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting from a smaller unit (mH) to a larger unit (H) means your final number must be smaller. Never multiply by 1,000 when going from mH to H.",
      "Ignoring Copper Wire Resistance: In real-world filters, millihenry coils contain long copper wire loops that introduce resistance. Forgetting to input this internal resistance alongside your converted Henry value will cause simulation mismatches."
    ]
  },
  faqs: [
    {
      question: "How do I convert Millihenrys to Henrys?",
      answer: "Divide your Millihenry value by 1,000. For example, 150 mH divided by 1,000 is 0.15 H."
    },
    {
      question: "Why does SPICE software require Henrys instead of Millihenrys?",
      answer: "SPICE modeling software uses the fundamental SI unit standards for its calculations. Since the Henry is the SI base unit for inductance, values must be input in H to ensure correct voltage and current predictions."
    },
    {
      question: "What is the relation between mH and H?",
      answer: "One Millihenry is equal to exactly 0.001 Henry (1 mH = 10⁻³ H)."
    },
    {
      question: "How do I convert a decimal mH value back to H?",
      answer: "Use the same division rule. Divide by 1,000 or shift the decimal point three places to the left. For example, 4.5 mH becomes 0.0045 H."
    },
    {
      question: "Is there a simple way to remember mH to H?",
      answer: "Yes. Think of millimeters to meters. Just as 1 millimeter is 0.001 meters, 1 millihenry is 0.001 Henrys."
    }
  ],
  relatedList: [
    { label: "Henry to Millihenry", from: "henry", to: "millihenry" },
    { label: "Millihenry to Microhenry", from: "millihenry", to: "microhenry" },
    { label: "Millihenry to Nanohenry", from: "millihenry", to: "nanohenry" },
    { label: "Microhenry to Henry", from: "microhenry", to: "henry" },
    { label: "Nanohenry to Henry", from: "nanohenry", to: "henry" },
    { label: "Henry to Microhenry", from: "henry", to: "microhenry" },
    { label: "Henry to Nanohenry", from: "henry", to: "nanohenry" },
    { label: "Microhenry to Millihenry", from: "microhenry", to: "millihenry" },
    { label: "Microhenry to Nanohenry", from: "microhenry", to: "nanohenry" },
    { label: "Nanohenry to Millihenry", from: "nanohenry", to: "millihenry" },
    { label: "Nanohenry to Microhenry", from: "nanohenry", to: "microhenry" }
  ],
  references: [
    "National Institute of Standards and Technology. <em>The International System of Units (SI)</em>.",
    "SPICE User Manual. <em>Inductor Parameter Conventions</em>."
  ]
};
