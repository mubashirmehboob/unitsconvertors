import { CustomArticleData } from "./types";

export const radianToTurnAngle: CustomArticleData = {
  fromUnitId: "radian",
  toUnitId: "turn-angle",
  seoTitle: "Radian to Turn Converter (rad to turn) | UnitsConvertors.com",
  metaDescription: "Convert radians to turns (rad to turn/cycle) accurately. Explore the circular mathematics formula (turns = rad / 2π), signal phase angles, winding numbers, and tables.",
  h1: "Radian to Turn Converter",
  introduction: [
    "Converting radians to turns links the analytical calculus of continuous rotation with the cyclic phase representations used in signal processing, Fourier analysis, complex topology, and multi-turn rotary electronics.",
    "While the radian (rad) is the natural SI unit of plane angle defined by arc length along a unit circle ($s = r\\theta$), the turn (symbol: turn, also termed a cycle, full circle, or revolution) normalizes a complete $360^\\circ$ rotation to unity ($1.0\\text{ turn}$).",
    "Because one complete turn equals exactly $2\\pi$ radians (approximately 6.2831853 rad, often represented by the circle constant $\\tau$), converting radians to turns requires dividing the radian value by $2\\pi$ (or multiplying by $1 / (2\\pi) \\approx 0.159154943$). This guide details the mathematical principles, complex analysis winding numbers, signal phase unwrapping examples, and comprehensive reference tables."
  ],
  quickAnswer: {
    text: "To convert radians to turns, divide the angle in radians by 2π (or multiply by 0.1591549). For example, a phase shift of 3.14159 radians (π rad) equals exactly 0.5 turns (a half cycle).",
    formulaDisplay: "\\text{Turns} = \\frac{\\text{Radians (rad)}}{2\\pi} = \\frac{\\text{Radians}}{\\tau} \\approx \\text{Radians} \\times 0.159154943",
    subtext: "1 Radian ≈ 0.1591549 Turns | 1 Turn = 2π Radians (360°)"
  },
  aboutSourceUnit: {
    title: "Understanding the Radian (rad)",
    text: "The radian (symbol: rad) is the SI unit of plane angle. It is dimensionless ($1\\text{ rad} = 1\\text{ m/m}$) and defined as the angle subtended at the center of a circle by an arc whose length equals the radius. A full turn spans $2\\pi$ radians (≈ 6.283185 rad)."
  },
  aboutTargetUnit: {
    title: "Understanding the Turn (turn / cycle)",
    text: "A turn (symbol: turn, pla, or cycle) is an angular unit where one unit represents one complete rotation (360 degrees or $2\\pi$ radians). It is widely used in topology, winding numbers, complex exponential frequency ($e^{i 2\\pi \\theta}$), and precision multi-turn potentiometers."
  },
  relationship: "A complete circle is defined as 1 full turn, 360 degrees, or $2\\pi$ radians. Equating these systems establishes that 1 turn contains $2\\pi$ radians (or $\\tau$ radians). Dividing radians by $2\\pi$ yields turns: $1\\text{ rad} = 1 / (2\\pi) \\approx 0.159154943\\text{ turns}$.",
  relationshipTitle: "Radian vs Turn Cycle Comparison",
  relationshipItems: [
    { label: "π/2 Radians (Quarter Turn)", value: "0.250000 turn" },
    { label: "1.0 Radian (≈ 57.30°)", value: "≈ 0.159155 turn" },
    { label: "π Radians (Half Turn)", value: "0.500000 turn" },
    { label: "3π/2 Radians (Three-Quarter)", value: "0.750000 turn" },
    { label: "2π Radians (Full Circle)", value: "1.000000 turn" },
    { label: "10 Radians (≈ 572.96°)", value: "≈ 1.591549 turns" }
  ],
  formula: {
    text: "Divide the angle in radians by 2π (or tau, τ ≈ 6.283185307), or multiply by 0.159154943.",
    math: "\\text{Turns} = \\frac{\\text{Angle (rad)}}{2\\pi} = \\frac{\\text{Angle (rad)}}{\\tau} \\approx \\text{Angle (rad)} \\times 0.159154943",
    subtext: "Inverse formula: Radians (rad) = Turns × 2π ≈ Turns × 6.283185307"
  },
  formulaTitle: "Radian to Turn Conversion Formula",
  practicalTip: {
    title: "The Tau (τ) Circle Constant Simplification",
    text: "In modern mathematical education and computer science, tau (τ = 2π ≈ 6.283185) represents the full circle. Under this notation, converting radians to turns is simply: Turns = Radians / τ."
  },
  expertNote: {
    title: "Phase Unwrapping in Digital Signal Processing (DSP)",
    text: "When analyzing the frequency response of digital filters or phase-locked loops (PLLs), phase angles accumulated in radians are frequently normalized by dividing by 2π to express the phase delay in fractional and integer signal cycles (turns)."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Signal Carrier Wave Phase Offset",
        subtitle: "A digital demodulator detects an accumulated phase offset of 4.18879 radians (4π/3 rad) in a high-frequency carrier wave. Express this phase shift in fractional turns.",
        steps: [
          "State given phase: 4.18879 radians (4π/3 rad).",
          "Apply conversion: Turns = (4π/3) / (2π).",
          "Simplify fraction: (4/3) / 2 = 4/6 = 2/3 ≈ 0.66667 turns.",
          "Final Result: The phase shift equals exactly two-thirds of a turn (0.667 turns or 240°)."
        ]
      },
      {
        title: "Example 2: Precision Multi-Turn Potentiometer Adjustment",
        subtitle: "A calibration technician turns a 10-turn precision trimmer potentiometer through an angular sweep of 31.4159 radians (10π rad). Calculate the number of turns adjusted.",
        steps: [
          "State value: 31.4159 radians.",
          "Divide by 2π: 31.4159 / 6.2831853 = 5.0000 turns.",
          "Final Result: The potentiometer was adjusted by exactly 5 full turns (50% of its total travel)."
        ]
      },
      {
        title: "Example 3: Complex Analysis Winding Number",
        subtitle: "A closed curve integral around an isolated singularity yields an accumulated argument of 12.56637 radians (4π rad). Determine the curve's topological winding number in turns.",
        steps: [
          "State accumulated angle: 12.56637 radians.",
          "Divide by 2π: 12.56637 / 6.283185 = 2.0000 turns.",
          "Final Result: The topological winding number is exactly 2 turns."
        ]
      }
    ]
  },
  table: {
    title: "Radian to Turn Conversion Reference Table",
    headers: ["Radians (rad)", "Turns (turn / cycle)", "Degrees (°)", "Gradians (grad)", "Geometric Meaning"],
    rows: [
      { fromVal: "π/6 rad (0.5236)", toVal: "0.0833 turn (1/12)", extra: "30.00°", extra2: "33.33 grad", extra3: "One clock hour angle" },
      { fromVal: "π/4 rad (0.7854)", toVal: "0.1250 turn (1/8)", extra: "45.00°", extra2: "50.00 grad", extra3: "One octant of a circle" },
      { fromVal: "1.0 rad", toVal: "0.1592 turn", extra: "57.30°", extra2: "63.66 grad", extra3: "1.0 Radian arc angle" },
      { fromVal: "π/2 rad (1.5708)", toVal: "0.2500 turn (1/4)", extra: "90.00°", extra2: "100.0 grad", extra3: "Right angle (quadrant)" },
      { fromVal: "2.0 rad", toVal: "0.3183 turn", extra: "114.59°", extra2: "127.3 grad", extra3: "Double radian rotation" },
      { fromVal: "π rad (3.1416)", toVal: "0.5000 turn (1/2)", extra: "180.00°", extra2: "200.0 grad", extra3: "Half circle (straight line)" },
      { fromVal: "3π/2 rad (4.7124)", toVal: "0.7500 turn (3/4)", extra: "270.00°", extra2: "300.0 grad", extra3: "Three-quarters turn" },
      { fromVal: "2π rad (6.2832)", toVal: "1.0000 turn", extra: "360.00°", extra2: "400.0 grad", extra3: "One complete turn" },
      { fromVal: "4π rad (12.566)", toVal: "2.0000 turns", extra: "720.00°", extra2: "800.0 grad", extra3: "Two full cycles" },
      { fromVal: "10 rad", toVal: "1.5915 turns", extra: "572.96°", extra2: "636.6 grad", extra3: "Continuous rotary displacement" },
      { fromVal: "20π rad (62.832)", toVal: "10.0000 turns", extra: "3,600.0°", extra2: "4,000.0 grad", extra3: "Ten complete rotations" }
    ]
  },
  applications: {
    title: "Mathematical, DSP, & Electronic Applications",
    items: [
      {
        title: "Digital Signal Processing (DSP) & Phase Analysis",
        text: "DSP algorithms convert phase arguments from radians to fractional turns to index lookup tables (LUTs) in Direct Digital Synthesizers (DDS)."
      },
      {
        title: "Topology & Complex Analysis",
        text: "Mathematicians measure contour integration arguments in radians and divide by 2π to compute integer winding numbers around poles."
      },
      {
        title: "Multi-Turn Rotary Encoders & Transducers",
        text: "Industrial automation position sensors track total angular travel in radians and report absolute shaft positions in turns plus fractional turn angles."
      },
      {
        title: "CSS & Web Animation Standards",
        text: "Modern web animation APIs support the CSS `turn` angle unit (e.g., `transform: rotate(0.25turn)`), which developers calculate from trigonometric radian outputs."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Radian to Turn Conversions",
    items: [
      "Dividing by 360 instead of 2π (confusing degree conversion with radian conversion).",
      "Multiplying by 2π instead of dividing, giving an answer 39.5 times too large.",
      "Overlooking integer multi-turn wrap-arounds when converting phase angles greater than 2π.",
      "Confusing angular frequency in radians per second (ω) with cyclic frequency in Hertz or turns per second (f = ω / 2π)."
    ]
  },
  faqs: [
    {
      question: "How many turns are in 1 radian?",
      answer: "One radian equals 1 / (2π) turns, which is approximately 0.159154943 turns (or about 15.9% of a complete circle)."
    },
    {
      question: "How many radians are in 1 full turn?",
      answer: "There are exactly 2π radians in 1 full turn, which is approximately 6.283185307 radians (360 degrees)."
    },
    {
      question: "What is the formula to convert radians to turns?",
      answer: "The formula is: Turns = Radians / (2π) = Radians / τ ≈ Radians × 0.159154943."
    },
    {
      question: "How many turns is π radians?",
      answer: "π radians equals exactly 0.5 turns (a half circle or 180 degrees)."
    },
    {
      question: "How many turns is π/2 radians?",
      answer: "π/2 radians equals exactly 0.25 turns (a quarter turn or 90 degrees)."
    },
    {
      question: "Is a turn the same as a revolution?",
      answer: "Yes. 'Turn', 'revolution', 'cycle', and 'full circle' are mathematically identical units equal to 360 degrees or 2π radians."
    },
    {
      question: "Why is the turn unit used in computer graphics and CSS?",
      answer: "The turn unit (`turn`) provides clear, intuitive fractions of rotation (e.g., 0.25turn = 90°, 0.5turn = 180°) without requiring floating-point approximations of pi."
    },
    {
      question: "What is tau (τ) in relation to turns and radians?",
      answer: "Tau (τ) is the mathematical constant defined as 2π (≈ 6.283185). One full turn equals exactly τ radians."
    }
  ],
  relatedList: [
    { label: "Radian to Degree", from: "radian", to: "degree" },
    { label: "Radian to Revolution", from: "radian", to: "revolution" },
    { label: "Degree to Turn", from: "degree", to: "turn-angle" },
    { label: "Radian to Gradian", from: "radian", to: "gradian" }
  ],
  references: [
    "ISO 80000-3: Quantities and units — Space and time.",
    "W3C CSS Values and Units Module Level 4: The <angle> type and 'turn' unit.",
    "BIPM: The International System of Units (SI) brochure."
  ]
};
