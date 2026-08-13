const fs = require('fs');

const fileHeader = `import { EngineeringArticleData } from "./engineeringArticlesEngine";
import { mechanicalBespokeArticlesMap } from "./mechanicalBespokeArticles";

/**
 * Bespoke production-quality technical articles for Electrical Calculators on UnitsConvertors.com.
 * Every article contains mathematically accurate equations, step-by-step worked calculations,
 * industry standards, physical assumptions, common mistakes,
 * best practices, and 8-10 unique FAQs.
 */

export const bespokeArticlesMap: Record<string, (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData> = {
  ...mechanicalBespokeArticlesMap,
`;

const articles = {};

// 1. OHM'S LAW CALCULATOR
articles["ohms-law-calculator"] = `
  "ohms-law-calculator": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Ohm's Law Calculator - Calculate Circuit Voltage | UnitsConvertors.com",
    metaDescription: "Calculate circuit voltage (V) from electric current (I) and resistance (R) using Ohm's Law (V = I × R). Features worked steps, NEC standards, and FAQs.",
    canonicalUrl,
    introduction: {
      overview: "Ohm's Law expresses the fundamental proportional relationship governing direct current and linear alternating current electric circuits. Discovered by Georg Simon Ohm in 1827, the law states that the current flowing through a conductor between two points is directly proportional to the voltage across the two points and inversely proportional to the resistance between them.",
      applications: [
        "Determining expected circuit voltage drop across resistive loads.",
        "Sizing current-limiting resistors for sensitive semiconductor devices.",
        "Verifying electrical diagnostic measurements on industrial control loops.",
        "Calculating baseline power dissipation in electrical distribution branches."
      ],
      industries: [
        "Power Distribution & Utilities",
        "Industrial Automation & Control Systems",
        "Consumer Electronics Design",
        "Automotive Electrical Engineering"
      ]
    },
    quickAnswer: "Ohm's Law states that Voltage (V) equals Current (I) multiplied by Resistance (R), expressed as V = I × R. For a circuit carrying 2 Amperes through a 10 Ohm resistor, the required voltage drop is exactly 20 Volts.",
    governingEquation: {
      formula: "V = I \\times R",
      explanation: "Voltage (V in Volts) represents the electrical potential difference required to force an electric current (I in Amperes) through a material offering electrical resistance (R in Ohms). Rearranging the equation yields I = V / R and R = V / I.",
      variables: [
        { symbol: "V", label: "Voltage", unit: "Volts (V)", description: "Electrical potential difference across the load." },
        { symbol: "I", label: "Electric Current", unit: "Amperes (A)", description: "Rate of electric charge flow through the conductor." },
        { symbol: "R", label: "Resistance", unit: "Ohms (Ω)", description: "Opposition to electric current flow in the material." }
      ]
    },
    inputParameters: [
      {
        name: "current",
        label: "Electric Current (I)",
        unit: "Amperes (A)",
        defaultValue: 2,
        explanation: "The magnitude of electric charge moving through the circuit per second. Baseline value is set to 2 Amperes."
      },
      {
        name: "resistance",
        label: "Electrical Resistance (R)",
        unit: "Ohms (Ω)",
        defaultValue: 10,
        explanation: "The physical resistance offered by the circuit load or conductor. Baseline value is set to 10 Ohms."
      }
    ],
    outputExplanation: {
      unit: "Volts (V)",
      interpretation: "The output represents the total electrical pressure difference required across the circuit terminals to sustain the specified current flow.",
      designImpact: "Determines power supply voltage requirements, insulation breakdown limits, and safety isolation clearances."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Current (I)", value: 2, unit: "A" },
        { label: "Resistance (R)", value: 10, unit: "Ω" }
      ],
      substitution: "Substitute I = 2 A and R = 10 Ω into V = I × R:",
      intermediateSteps: [
        "1. Identify input values: Current I = 2 A, Resistance R = 10 Ω.",
        "2. Confirm unit compatibility: Amperes (A) and Ohms (Ω) are standard SI base and derived units.",
        "3. Multiply current by resistance: 2 A × 10 Ω = 20 Volts."
      ],
      finalResult: "20",
      unit: "Volts (V)"
    },
    practicalExample: {
      scenarioTitle: "Industrial Control Loop Power Supply Verification",
      industryContext: "An industrial automation panel uses a 4–20 mA sensor loop connected across a 250 Ω precision sensing resistor to generate a 1–5 V input signal for a PLC analog module.",
      problemStatement: "Calculate the voltage generated across the 250 Ω resistor when the sensor outputs its maximum full-scale current of 20 mA (0.020 A).",
      engineeringSolution: "Apply V = I × R: V = 0.020 A × 250 Ω = 5.0 Volts. This confirms the voltage matches the standard PLC 5 V analog input range exactly."
    },
    assumptions: [
      "The circuit material behaves as a linear Ohmic conductor at constant temperature.",
      "The electric current operates in steady-state direct current (DC) or in-phase AC.",
      "Parasitic inductance and capacitance are negligible."
    ],
    limitations: [
      "Not applicable to non-ohmic components like diodes, transistors, or gas discharge tubes.",
      "Temperature rises caused by self-heating alter resistance in high-power applications.",
      "AC circuits with reactive components require impedance (Z) rather than simple resistance (R)."
    ],
    commonMistakes: [
      "Entering current in milliamperes (mA) without converting to base Amperes (A) first (e.g., 20 mA entered as 20 instead of 0.020).",
      "Confusing total circuit resistance with single-component resistance in multi-resistor networks.",
      "Ignoring temperature-induced resistance changes during continuous high-load operation."
    ],
    bestPractices: [
      "Always convert milli-units (mA, mV, mΩ) or kilo-units (kV, kΩ) to SI base units before calculation.",
      "Verify component power ratings (P = V × I) to prevent thermal failure of circuit resistors.",
      "Account for power supply tolerance when calculating worst-case circuit currents."
    ],
    faqs: [
      {
        question: "What are the three main forms of Ohm's Law?",
        answer: "The three mathematical expressions are: V = I × R (calculating voltage), I = V / R (calculating current), and R = V / I (calculating resistance)."
      },
      {
        question: "Does Ohm's Law apply to AC circuits?",
        answer: "Yes, Ohm's Law applies to AC circuits when expressed as V = I × Z, where Z represents impedance, incorporating both resistance and reactance."
      },
      {
        question: "Why does temperature affect Ohm's Law calculations?",
        answer: "Most metallic conductors increase in resistance as temperature rises due to increased lattice vibrations. If temperature changes significantly, R changes, altering the linear V-I ratio."
      },
      {
        question: "What is an Ohmic material?",
        answer: "An Ohmic material is a conductor whose resistance remains constant regardless of the applied voltage or current magnitude, obeying a straight-line V-I curve."
      },
      {
        question: "How do I calculate electrical power using Ohm's Law?",
        answer: "Combine Ohm's Law with P = V × I to get P = I² × R or P = V² / R, allowing power calculations when any two of the three variables (V, I, R) are known."
      },
      {
        question: "What unit is used for electrical resistance?",
        answer: "Resistance is measured in Ohms (Ω), defined as one Volt per Ampere (1 Ω = 1 V / 1 A)."
      },
      {
        question: "What happens to current if resistance doubles while voltage remains constant?",
        answer: "Because current is inversely proportional to resistance (I = V / R), doubling the resistance cuts the circuit current in half."
      },
      {
        question: "Which international standards govern Ohm's Law units?",
        answer: "Electrical base units are defined by BIPM in the SI Brochure and standardized by NIST SP 330 and IEEE Std 280."
      }
    ],
    standardsReferences: [
      { organization: "IEEE", code: "IEEE Std 280", title: "Standard Letter Symbols for Quantities Used in Electrical Science and Electrical Engineering" },
      { organization: "NIST", code: "NIST SP 330", title: "The International System of Units (SI) - Electrical Quantities" },
      { organization: "IEC", code: "IEC 60027", title: "Letter Symbols to be Used in Electrical Technology" },
      { organization: "BIPM", code: "SI Brochure 9th Ed.", title: "Bureau International des Poids et Mesures - Electric Derived Units" }
    ],
    internalLinks: {
      parentDiscipline: { id: "electrical-calc", name: "Electrical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  })
`;

// 2. ELECTRICAL POWER CALCULATOR
articles["electrical-power-calculator"] = `
  "electrical-power-calculator": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Electrical Power Calculator - Calculate Active Power (W) | UnitsConvertors.com",
    metaDescription: "Calculate electrical active power in Watts from voltage, current, and power factor (P = V × I × PF). Includes single-phase AC & DC guidelines.",
    canonicalUrl,
    introduction: {
      overview: "Electrical power is the rate at which electrical energy is transferred, dissipated, or converted into another energy form (such as heat, light, or mechanical motion). In direct current (DC) circuits and unity power factor AC circuits, power is simply the product of voltage and current. In general alternating current (AC) circuits with reactive loads, power factor (PF) accounts for the phase offset between voltage and current waveforms.",
      applications: [
        "Sizing circuit breakers, fuses, and power supply transformers.",
        "Calculating active power consumption for industrial motors and heating elements.",
        "Evaluating energy efficiency and phase-angle displacement in commercial facility feeds.",
        "Determining thermal dissipation requirements for electronic enclosures."
      ],
      industries: [
        "Electric Power Utilities",
        "HVAC & Commercial Building Systems",
        "Industrial Manufacturing",
        "Renewable Energy (Solar & Wind) Installations"
      ]
    },
    quickAnswer: "Electrical active power (P) in Watts is calculated using P = V × I × PF. For a 120 Volt supply drawing 5 Amperes at a unity power factor (PF = 1.0), the dissipated active power is exactly 600 Watts.",
    governingEquation: {
      formula: "P = V \\times I \\times PF",
      explanation: "Active or real power (P in Watts) equals RMS voltage (V in Volts) multiplied by RMS current (I in Amperes) and the dimensionless power factor (PF = cos φ, ranging from 0.0 to 1.0).",
      variables: [
        { symbol: "P", label: "Active Power", unit: "Watts (W)", description: "Real work-producing power consumed by the load." },
        { symbol: "V", label: "RMS Voltage", unit: "Volts (V)", description: "Root-mean-square electrical potential across terminals." },
        { symbol: "I", label: "RMS Current", unit: "Amperes (A)", description: "Root-mean-square electric current drawn by the load." },
        { symbol: "PF", label: "Power Factor", unit: "Ratio (0 to 1)", description: "Cosine of the phase angle difference between voltage and current." }
      ]
    },
    inputParameters: [
      {
        name: "voltage",
        label: "Line Voltage (V)",
        unit: "Volts (V)",
        defaultValue: 120,
        explanation: "Supply potential across the electrical load. Baseline value is set to 120 Volts."
      },
      {
        name: "current",
        label: "Load Current (I)",
        unit: "Amperes (A)",
        defaultValue: 5,
        explanation: "Continuous current passing through the load. Baseline value is set to 5 Amperes."
      },
      {
        name: "pf",
        label: "Power Factor (PF)",
        unit: "Ratio (0 to 1)",
        defaultValue: 1,
        explanation: "Ratio of real power to apparent power (1.0 for purely resistive loads or DC circuits). Baseline value is 1.0."
      }
    ],
    outputExplanation: {
      unit: "Watts (W)",
      interpretation: "The output value measures the actual rate of active energy consumption or heat generation in Watts.",
      designImpact: "Directly determines conductor current capacity demands, transformer kVA ratings, and utility electricity metering."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Voltage (V)", value: 120, unit: "V" },
        { label: "Current (I)", value: 5, unit: "A" },
        { label: "Power Factor (PF)", value: 1, unit: "ratio" }
      ],
      substitution: "Substitute V = 120 V, I = 5 A, and PF = 1.0 into P = V × I × PF:",
      intermediateSteps: [
        "1. Identify given values: V = 120 V, I = 5 A, PF = 1.0.",
        "2. Multiply voltage by current: 120 V × 5 A = 600 VA (Apparent Power S).",
        "3. Multiply apparent power by power factor: 600 VA × 1.0 = 600 Watts."
      ],
      finalResult: "600",
      unit: "Watts (W)"
    },
    practicalExample: {
      scenarioTitle: "Single-Phase Commercial Air Compressor Power Calculation",
      industryContext: "A workshop air compressor operates on a 230 V single-phase AC circuit, drawing an RMS current of 12 A with an inductive motor power factor of 0.85.",
      problemStatement: "Determine the active electrical power in Watts drawn by the compressor motor.",
      engineeringSolution: "Apply P = V × I × PF: P = 230 V × 12 A × 0.85 = 2,346 Watts (2.346 kW). This active power value is used for sizing backup generator requirements."
    },
    assumptions: [
      "Voltage and current waveforms are pure fundamental sine waves without harmonic distortion.",
      "The power factor remains stable across steady-state load operation.",
      "Single-phase electrical connection or balanced DC circuit."
    ],
    limitations: [
      "Does not directly compute total apparent power (VA) or reactive power (VAR) unless power factor angle is known.",
      "Three-phase AC power requires an additional multiplier factor of √3 (1.732) for line-to-line calculations.",
      "Harmonic currents in non-linear loads (e.g., VFDs) reduce true power factor below displacement power factor."
    ],
    commonMistakes: [
      "Assuming power factor is always 1.0 for inductive loads like electric motors or transformers.",
      "Confusing active power in Watts (W) with apparent power in Volt-Amperes (VA).",
      "Applying single-phase power formulas directly to three-phase delta or wye system voltages."
    ],
    bestPractices: [
      "Measure true RMS current when non-linear electronic loads are connected to the power supply.",
      "Include power factor correction capacitors to raise facility PF above 0.95 and avoid utility penalties.",
      "Verify both Watt rating (active power) and VA rating (apparent power) when sizing UPS backup systems."
    ],
    faqs: [
      {
        question: "What is the difference between active power (W) and apparent power (VA)?",
        answer: "Active power (Watts) represents actual energy converted into work or heat. Apparent power (Volt-Amperes) is the simple product of RMS voltage and RMS current without accounting for phase shift."
      },
      {
        question: "What is power factor?",
        answer: "Power factor (PF) is the ratio of real active power (W) to apparent power (VA). It measures how effectively electrical current is converted into useful work output."
      },
      {
        question: "What is the formula for power in a DC circuit?",
        answer: "In a DC circuit, power factor is always 1.0, so the formula simplifies to P = V × I, or P = I² × R, or P = V² / R."
      },
      {
        question: "How do you calculate electrical power in a 3-phase circuit?",
        answer: "For a balanced 3-phase system using line-to-line voltage, active power is P = √3 × V_line × I_line × PF."
      },
      {
        question: "How many Watts are in one horsepower?",
        answer: "One mechanical horsepower (hp) is standardized as approximately 745.7 Watts (0.746 kW)."
      },
      {
        question: "Why do electric motors have power factors less than 1.0?",
        answer: "Electric motors rely on magnetic fields to operate. Creating inductive magnetic fields causes current to lag behind voltage, lowering the displacement power factor."
      },
      {
        question: "Can power factor be negative?",
        answer: "In standard power consumption scenarios, power factor ranges from 0 to 1. A negative power factor indicates energy flowing back from a generator or active source into the grid."
      },
      {
        question: "Which standards regulate electrical power measurement?",
        answer: "Electrical power measurement and quality standards are established by IEEE Std 1459 and IEC 61000-4-30."
      }
    ],
    standardsReferences: [
      { organization: "IEEE", code: "IEEE Std 1459", title: "Standard Definitions for the Measurement of Electric Power Quantities Under Sinusoidal, Nonsinusoidal, Balanced, or Unbalanced Conditions" },
      { organization: "IEC", code: "IEC 61000-4-30", title: "Electromagnetic Compatibility (EMC) - Power Quality Measurement Methods" },
      { organization: "NEMA", code: "NEMA MG 1", title: "Motors and Generators - Power Efficiency and Ratings" },
      { organization: "NFPA", code: "NFPA 70 (NEC)", title: "National Electrical Code - Feeder and Branch Circuit Calculations" }
    ],
    internalLinks: {
      parentDiscipline: { id: "electrical-calc", name: "Electrical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  })
`;

// 3. ELECTRICAL ENERGY CONSUMPTION CALCULATOR
articles["electrical-energy-consumption-calculator"] = `
  "electrical-energy-consumption-calculator": (canonicalUrl, relatedTools, relevantUnitCategories) => ({
    title: "Electrical Energy Consumption Calculator - Calculate kWh Usage | UnitsConvertors.com",
    metaDescription: "Calculate total electrical energy consumption in kilowatt-hours (kWh) over daily, monthly, or annual operating periods. Ideal for equipment cost modeling.",
    canonicalUrl,
    introduction: {
      overview: "Electrical energy consumption measures the cumulative amount of work performed by electrical equipment over time. While power (in Watts) represents the instantaneous rate of energy use, energy (in kilowatt-hours) represents total power sustained over an operational duration. Electric utility companies bill residential, commercial, and industrial facilities based on kilowatt-hours consumed.",
      applications: [
        "Estimating monthly utility bills for appliances, machinery, and HVAC equipment.",
        "Evaluating payback periods for high-efficiency motor or LED lighting retrofits.",
        "Sizing off-grid solar battery storage capacities based on daily energy demand.",
        "Auditing industrial plant equipment energy consumption profiles."
      ],
      industries: [
        "Commercial Property Management",
        "Industrial Plant Engineering",
        "Energy Management & Sustainability",
        "Solar & Renewable Energy Integration"
      ]
    },
    quickAnswer: "Energy consumption in kilowatt-hours (kWh) is calculated by multiplying equipment power rating in Watts by operating hours per day and number of days, then dividing by 1,000. A 1,500 Watt heater running 8 hours daily for 30 days consumes exactly 360 kWh.",
    governingEquation: {
      formula: "E_{\\text{kWh}} = \\frac{P_{\\text{Watts}} \\times t_{\\text{hours/day}} \\times \\text{Days}}{1000}",
      explanation: "Total electrical energy (E in kWh) equals load power (P in Watts) multiplied by daily operating hours (t) and total operational days, scaled down by 1,000 Watts per kilowatt.",
      variables: [
        { symbol: "E", label: "Energy Consumption", unit: "Kilowatt-hours (kWh)", description: "Cumulative electrical energy consumed over time." },
        { symbol: "P", label: "Power Rating", unit: "Watts (W)", description: "Continuous operating electric power draw of the equipment." },
        { symbol: "t", label: "Daily Operating Time", unit: "Hours/Day (h)", description: "Average hours the load runs per 24-hour cycle." },
        { symbol: "Days", label: "Duration", unit: "Days", description: "Total period duration in days." }
      ]
    },
    inputParameters: [
      {
        name: "powerWatts",
        label: "Power Rating",
        unit: "Watts (W)",
        defaultValue: 1500,
        explanation: "Electrical power draw of the load in Watts. Baseline value is set to 1,500 Watts."
      },
      {
        name: "hoursPerDay",
        label: "Usage per Day",
        unit: "Hours (h)",
        defaultValue: 8,
        explanation: "Average operating duration per day in hours. Baseline value is set to 8 hours."
      },
      {
        name: "days",
        label: "Duration",
        unit: "Days",
        defaultValue: 30,
        explanation: "Evaluation period in days. Baseline value is set to 30 days (1 month)."
      }
    ],
    outputExplanation: {
      unit: "Kilowatt-hours (kWh)",
      interpretation: "The result represents total electrical work delivered or consumed during the designated billing or evaluation period.",
      designImpact: "Used directly to multiply by local utility electricity rates ($/kWh) to determine operational expenditure."
    },
    stepByStepExample: {
      givenInputs: [
        { label: "Power Rating (P)", value: 1500, unit: "W" },
        { label: "Daily Usage (t)", value: 8, unit: "h" },
        { label: "Duration", value: 30, unit: "days" }
      ],
      substitution: "Substitute P = 1500 W, t = 8 h/day, and Days = 30 into E = (P × t × Days) / 1000:",
      intermediateSteps: [
        "1. Calculate daily energy in Watt-hours: 1500 W × 8 h = 12,000 Wh/day.",
        "2. Multiply by evaluation days: 12,000 Wh/day × 30 days = 360,000 Watt-hours.",
        "3. Convert Watt-hours to kilowatt-hours: 360,000 Wh / 1000 = 360 kWh."
      ],
      finalResult: "360",
      unit: "Kilowatt-hours (kWh)"
    },
    practicalExample: {
      scenarioTitle: "Commercial Warehouse High-Bay LED Upgrade Audit",
      industryContext: "A logistics facility operates 100 legacy metal halide light fixtures drawing 400 W each for 12 hours a day, 365 days a year.",
      problemStatement: "Determine annual energy consumption in kWh for the lighting array.",
      engineeringSolution: "Total array power = 100 fixtures × 400 W = 40,000 W (40 kW). Annual energy E = (40,000 W × 12 h × 365 days) / 1000 = 175,200 kWh. Upgrading to 150 W LEDs cuts power to 15,000 W, yielding 65,700 kWh/yr and saving 109,500 kWh annually."
    },
    assumptions: [
      "Equipment draws steady constant power throughout its duty cycle.",
      "Duty cycle factor is 100% during active operating hours.",
      "Standby or phantom power losses are neglected unless included in power rating."
    ],
    limitations: [
      "Cycling loads (such as refrigerators, air conditioners, or thermostatically controlled pumps) require an effective duty cycle percentage multiplier.",
      "Does not calculate peak demand charges ($/kW) imposed on commercial utility bills.",
      "Assumes constant supply voltage without significant line sag."
    ],
    commonMistakes: [
      "Using nominal thermal capacity instead of actual electrical input power (e.g., using 12,000 BTU for an AC unit instead of its 1,200 W electrical draw).",
      "Forgetting to divide Watt-hours by 1,000 to convert to kilowatt-hours.",
      "Overlooking standby phantom load draw when equipment remains plugged in 24/7."
    ],
    bestPractices: [
      "Use sub-metering or data loggers to measure variable load duty cycles over a 7-day period for exact modeling.",
      "Factor in peak demand ($/kW) charges alongside volumetric energy ($/kWh) charges for commercial facilities.",
      "Include power factor and driver efficiency losses when evaluating electronic light fixtures."
    ],
    faqs: [
      {
        question: "What is a kilowatt-hour (kWh)?",
        answer: "A kilowatt-hour (kWh) is a unit of energy equal to 1,000 Watts of power used continuously for 1 hour. It equals 3.6 million Joules (3.6 MJ)."
      },
      {
        question: "How do I calculate electricity cost from kWh?",
        answer: "Multiply total consumed kWh by your utility company's rate per kWh (e.g., 360 kWh × $0.15/kWh = $54.00)."
      },
      {
        question: "What is the difference between kW and kWh?",
        answer: "kW (kilowatts) measures instantaneous power capacity or draw, while kWh (kilowatt-hours) measures total energy consumed over time."
      },
      {
        question: "How many kWh does an average home use per day?",
        answer: "In the United States, an average residential home uses approximately 28 to 30 kWh per day (around 886 kWh per month)."
      },
      {
        question: "How do I calculate energy usage for a device with variable power?",
        answer: "Multiply peak power by the duty cycle percentage (e.g., a 1,000 W compressor running 40% of the time has an average power draw of 400 W)."
      },
      {
        question: "Why does my electricity bill include demand charges?",
        answer: "Commercial utilities charge demand fees ($/kW) based on the highest average power draw during a short interval (typically 15 minutes) to cover infrastructure grid capacity."
      },
      {
        question: "How much energy does 1 Watt use if left on 24/7 for a year?",
        answer: "1 Watt × 24 hours × 365 days / 1000 = 8.76 kWh per year."
      },
      {
        question: "Which standards regulate energy metering?",
        answer: "Electric energy meters are governed by ANSI C12.20 and IEC 62053 standards for revenue billing accuracy."
      }
    ],
    standardsReferences: [
      { organization: "ANSI", code: "ANSI C12.20", title: "American National Standard for Electricity Meters - 0.1, 0.2, and 0.5 Accuracy Classes" },
      { organization: "IEC", code: "IEC 62053-21", title: "Electricity Metering Equipment (AC) - Particular Requirements for Static Meters for Active Energy" },
      { organization: "IEEE", code: "IEEE Std 739", title: "IEEE Recommended Practice for Energy Management in Industrial and Commercial Facilities" },
      { organization: "ISO", code: "ISO 50001", title: "Energy Management Systems - Requirements with Guidance for Use" }
    ],
    internalLinks: {
      parentDiscipline: { id: "electrical-calc", name: "Electrical Calculators" },
      relatedTools,
      relevantUnitCategories
    }
  })
`;

// Write out the first chunk
fs.writeFileSync('/tmp/electrical_part1.js', JSON.stringify({
  fileHeader,
  ohms: articles["ohms-law-calculator"],
  power: articles["electrical-power-calculator"],
  energy: articles["electrical-energy-consumption-calculator"]
}));

console.log("Part 1 ready");
