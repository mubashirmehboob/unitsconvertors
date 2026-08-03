export interface EngineeringInput {
  name: string;
  label: string;
  unit: string;
  defaultValue: number;
}

export interface RegistrySeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords: string[];
}

export interface EngineeringTool {
  id: string;
  slug: string;
  title: string;
  name: string;
  discipline: string;
  disciplineId: string;
  description: string;
  formula: string;
  outputUnit: string;
  assumptions: string[];
  inputs: EngineeringInput[];
  calculate: (inputs: Record<string, number>) => number;
  route: string;
  seo: RegistrySeoMetadata;
  searchKeywords: string[];
}

export interface EngineeringCalculatorDiscipline {
  id: string;
  name: string;
  description: string;
  iconName: string;
  badge: string;
  tools: EngineeringTool[];
  calculators: EngineeringTool[];
}

// Master Centralized Engineering Calculator Registry
export const engineeringCalculatorRegistry: EngineeringTool[] = [
  // --- ELECTRICAL ENGINEERING ---
  {
    id: "ohms-law",
    slug: "ohms-law",
    title: "Ohm's Law Calculator",
    name: "Ohm's Law Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate voltage, current, or power from circuit resistance.",
    formula: "V = I × R",
    outputUnit: "Volts (V)",
    assumptions: ["Steady-state DC circuit", "Constant temperature", "Linear conductor"],
    inputs: [
      { name: "current", label: "Current (I)", unit: "Amperes (A)", defaultValue: 2 },
      { name: "resistance", label: "Resistance (R)", unit: "Ohms (Ω)", defaultValue: 10 }
    ],
    calculate: (inputs) => (inputs.current || 0) * (inputs.resistance || 0),
    route: "/engineering-calculators/electrical-calc/ohms-law",
    seo: {
      title: "Ohm's Law Calculator | Electrical Engineering",
      description: "Calculate voltage, current, resistance, and power with exact SI equations.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/ohms-law",
      keywords: ["ohms law", "voltage", "current", "resistance", "v=ir", "electrical calculator"]
    },
    searchKeywords: ["ohms law", "voltage", "current", "resistance", "v=ir", "circuit", "electrical", "amps", "volts", "ohms"]
  },
  {
    id: "voltage-divider",
    slug: "voltage-divider",
    title: "Voltage Divider Calculator",
    name: "Voltage Divider Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate output voltage across resistor divider under unloaded assumptions.",
    formula: "Vout = Vin × [R2 / (R1 + R2)]",
    outputUnit: "Volts (V)",
    assumptions: ["High impedance load (negligible current drop)", "Linear resistors"],
    inputs: [
      { name: "vin", label: "Input Voltage (Vin)", unit: "Volts (V)", defaultValue: 12 },
      { name: "r1", label: "Resistor R1", unit: "Ohms (Ω)", defaultValue: 1000 },
      { name: "r2", label: "Resistor R2", unit: "Ohms (Ω)", defaultValue: 2000 }
    ],
    calculate: (inputs) => {
      const rSum = (inputs.r1 || 0) + (inputs.r2 || 0);
      if (rSum === 0) return 0;
      return (inputs.vin || 0) * ((inputs.r2 || 0) / rSum);
    },
    route: "/engineering-calculators/electrical-calc/voltage-divider",
    seo: {
      title: "Voltage Divider Calculator | Electrical Engineering",
      description: "Calculate output voltage from resistor dividers with linear circuit assumptions.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/voltage-divider",
      keywords: ["voltage divider", "vout", "resistor ratio", "r1 r2", "electrical"]
    },
    searchKeywords: ["voltage divider", "vout", "resistor divider", "r1", "r2", "unloaded"]
  },
  {
    id: "power-calc",
    slug: "power-calc",
    title: "Electric Power Calculator",
    name: "Electric Power Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Single-phase electric power calculation from voltage and current.",
    formula: "P = V × I × PF",
    outputUnit: "Watts (W)",
    assumptions: ["Pure sinusoidal waveform", "Constant power factor"],
    inputs: [
      { name: "voltage", label: "Voltage (V)", unit: "Volts (V)", defaultValue: 120 },
      { name: "current", label: "Current (I)", unit: "Amperes (A)", defaultValue: 5 },
      { name: "pf", label: "Power Factor (PF)", unit: "Ratio (0-1)", defaultValue: 0.95 }
    ],
    calculate: (inputs) => (inputs.voltage || 0) * (inputs.current || 0) * (inputs.pf || 1),
    route: "/engineering-calculators/electrical-calc/power-calc",
    seo: {
      title: "Electric Power Calculator | Electrical Engineering",
      description: "Determine AC/DC electrical power output considering power factor.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/power-calc",
      keywords: ["electric power", "watts", "power factor", "voltage current power"]
    },
    searchKeywords: ["power", "watts", "kw", "va", "power factor", "electrical"]
  },
  {
    id: "battery-runtime",
    slug: "battery-runtime",
    title: "Battery Runtime Calculator",
    name: "Battery Runtime Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Estimate battery operating duration based on Peukert capacity loss factor.",
    formula: "Hours = (Ah / Current) × Discharge Efficiency",
    outputUnit: "Hours (h)",
    assumptions: ["Standard 20-hour discharge rating", "Ambient temperature 25°C"],
    inputs: [
      { name: "capacity", label: "Battery Capacity", unit: "Amp-hours (Ah)", defaultValue: 100 },
      { name: "loadCurrent", label: "Load Current", unit: "Amperes (A)", defaultValue: 10 },
      { name: "efficiency", label: "Efficiency Factor", unit: "Ratio (0-1)", defaultValue: 0.85 }
    ],
    calculate: (inputs) => {
      if (!inputs.loadCurrent) return 0;
      return ((inputs.capacity || 0) / inputs.loadCurrent) * (inputs.efficiency || 0.85);
    },
    route: "/engineering-calculators/electrical-calc/battery-runtime",
    seo: {
      title: "Battery Runtime Calculator | Electrical Engineering",
      description: "Estimate battery operational hours from Ah capacity and load discharge current.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/battery-runtime",
      keywords: ["battery runtime", "amp hours", "peukert law", "discharge time"]
    },
    searchKeywords: ["battery", "runtime", "ah", "discharge", "backup power", "hours"]
  },
  {
    id: "wire-gauge-drop",
    slug: "wire-gauge-drop",
    title: "Voltage Drop & Wire Size Calculator",
    name: "Voltage Drop & Wire Size Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate wire voltage drop across conductor length and cross-sectional area.",
    formula: "Vdrop = (2 × K × I × L) / CM",
    outputUnit: "Volts (V)",
    assumptions: ["Copper conductor (K = 12.9)", "Continuous load current"],
    inputs: [
      { name: "current", label: "Current Load", unit: "Amperes (A)", defaultValue: 20 },
      { name: "length", label: "One-Way Distance", unit: "Feet (ft)", defaultValue: 100 },
      { name: "cm", label: "Circular Mils (CM)", unit: "CM", defaultValue: 6530 }
    ],
    calculate: (inputs) => {
      if (!inputs.cm) return 0;
      return (2 * 12.9 * (inputs.current || 0) * (inputs.length || 0)) / inputs.cm;
    },
    route: "/engineering-calculators/electrical-calc/wire-gauge-drop",
    seo: {
      title: "Voltage Drop & Wire Size Calculator | Electrical Engineering",
      description: "Determine conductor voltage loss for copper and aluminum electrical wiring.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/wire-gauge-drop",
      keywords: ["voltage drop", "wire size", "awg", "circular mils", "electrical wiring"]
    },
    searchKeywords: ["wire size", "voltage drop", "awg", "copper conductor", "feeder drop"]
  },
  {
    id: "single-phase-current",
    slug: "single-phase-current",
    title: "Single Phase Current Calculator",
    name: "Single Phase Current Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate AC single-phase current load in Amperes from active power, voltage, and power factor.",
    formula: "I = P / (V × PF)",
    outputUnit: "Amperes (A)",
    assumptions: ["Sinusoidal AC voltage waveform", "Constant load power factor PF"],
    inputs: [
      { name: "power", label: "Active Power (P)", unit: "Watts (W)", defaultValue: 2400 },
      { name: "voltage", label: "Voltage (V)", unit: "Volts (V)", defaultValue: 230 },
      { name: "pf", label: "Power Factor (PF)", unit: "Ratio (0-1)", defaultValue: 0.95 }
    ],
    calculate: (inputs) => (inputs.voltage && inputs.pf ? (inputs.power || 0) / (inputs.voltage * inputs.pf) : 0),
    route: "/engineering-calculators/electrical-calc/single-phase-current",
    seo: {
      title: "Single Phase Current Calculator | Electrical Engineering",
      description: "Calculate AC single-phase electric current in Amperes from active power, voltage, and power factor.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/single-phase-current",
      keywords: ["single phase current", "ac current calculator", "amps from watts", "power factor current", "electrical"]
    },
    searchKeywords: ["single phase current", "ac current calculator", "amps from watts", "power factor current", "electrical"]
  },
  {
    id: "three-phase-power",
    slug: "three-phase-power",
    title: "Three Phase Power Calculator",
    name: "Three Phase Power Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate total 3-phase real electrical power in Kilowatts (kW) from line voltage, current, and power factor.",
    formula: "P = √3 × V_LL × I × PF / 1000",
    outputUnit: "Kilowatts (kW)",
    assumptions: ["Balanced 3-phase load", "Line-to-line RMS voltage input"],
    inputs: [
      { name: "voltage", label: "Line-to-Line Voltage (V_LL)", unit: "Volts (V)", defaultValue: 400 },
      { name: "current", label: "Line Current (I)", unit: "Amperes (A)", defaultValue: 50 },
      { name: "pf", label: "Power Factor (PF)", unit: "Ratio (0-1)", defaultValue: 0.85 }
    ],
    calculate: (inputs) => (Math.sqrt(3) * (inputs.voltage || 0) * (inputs.current || 0) * (inputs.pf || 0.85)) / 1000,
    route: "/engineering-calculators/electrical-calc/three-phase-power",
    seo: {
      title: "Three Phase Power Calculator | Electrical Engineering",
      description: "Calculate total 3-phase active power in kW from line-to-line voltage, current, and power factor.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/three-phase-power",
      keywords: ["three phase power", "3 phase kw", "line voltage power", "balanced 3 phase power", "electrical"]
    },
    searchKeywords: ["three phase power", "3 phase kw", "line voltage power", "balanced 3 phase power", "electrical"]
  },
  {
    id: "three-phase-current",
    slug: "three-phase-current",
    title: "Three Phase Current Calculator",
    name: "Three Phase Current Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate line current in Amperes for balanced three-phase AC loads.",
    formula: "I = (P_kW × 1000) / (√3 × V_LL × PF)",
    outputUnit: "Amperes (A)",
    assumptions: ["Balanced 3-phase system", "Line-to-line RMS voltage"],
    inputs: [
      { name: "powerKw", label: "Active Power (P)", unit: "Kilowatts (kW)", defaultValue: 30 },
      { name: "voltage", label: "Line-to-Line Voltage (V_LL)", unit: "Volts (V)", defaultValue: 415 },
      { name: "pf", label: "Power Factor (PF)", unit: "Ratio (0-1)", defaultValue: 0.85 }
    ],
    calculate: (inputs) => (inputs.voltage && inputs.pf ? ((inputs.powerKw || 0) * 1000) / (Math.sqrt(3) * inputs.voltage * inputs.pf) : 0),
    route: "/engineering-calculators/electrical-calc/three-phase-current",
    seo: {
      title: "Three Phase Current Calculator | Electrical Engineering",
      description: "Calculate 3-phase AC line current in Amperes from active power kW rating and voltage.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/three-phase-current",
      keywords: ["three phase current", "3 phase amps", "line current calculator", "3 phase current load", "electrical"]
    },
    searchKeywords: ["three phase current", "3 phase amps", "line current calculator", "3 phase current load", "electrical"]
  },
  {
    id: "apparent-power-va",
    slug: "apparent-power-va",
    title: "Apparent Power (VA) Calculator",
    name: "Apparent Power (VA) Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate apparent power (S) in kVA from active power and power factor.",
    formula: "S = P_kW / PF",
    outputUnit: "kVA",
    assumptions: ["AC circuit in steady state", "Known load power factor"],
    inputs: [
      { name: "powerKw", label: "Active Power (P)", unit: "Kilowatts (kW)", defaultValue: 40 },
      { name: "pf", label: "Power Factor (PF)", unit: "Ratio (0-1)", defaultValue: 0.8 }
    ],
    calculate: (inputs) => (inputs.pf ? (inputs.powerKw || 0) / inputs.pf : 0),
    route: "/engineering-calculators/electrical-calc/apparent-power-va",
    seo: {
      title: "Apparent Power (VA) Calculator | Electrical Engineering",
      description: "Calculate apparent electrical power S in kVA from active power kW and power factor.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/apparent-power-va",
      keywords: ["apparent power", "kva calculator", "kw to kva", "power factor va", "electrical"]
    },
    searchKeywords: ["apparent power", "kva calculator", "kw to kva", "power factor va", "electrical"]
  },
  {
    id: "reactive-power-calc",
    slug: "reactive-power-calc",
    title: "Reactive Power Calculator",
    name: "Reactive Power Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate reactive power (Q) in kVAR from active power and power factor angle.",
    formula: "Q = P_kW × tan(arccos(PF))",
    outputUnit: "kVAR",
    assumptions: ["Pure sinusoidal AC voltage and current", "Lagging or leading power factor"],
    inputs: [
      { name: "powerKw", label: "Active Power (P)", unit: "Kilowatts (kW)", defaultValue: 50 },
      { name: "pf", label: "Power Factor (PF)", unit: "Ratio (0-1)", defaultValue: 0.8 }
    ],
    calculate: (inputs) => {
      const pf = Math.min(Math.max(inputs.pf || 0.8, 0.01), 1);
      const angle = Math.acos(pf);
      return (inputs.powerKw || 0) * Math.tan(angle);
    },
    route: "/engineering-calculators/electrical-calc/reactive-power-calc",
    seo: {
      title: "Reactive Power Calculator | Electrical Engineering",
      description: "Calculate reactive electrical power Q in kVAR from active power and power factor.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/reactive-power-calc",
      keywords: ["reactive power", "kvar calculator", "reactive power kvar", "power factor kvar", "electrical"]
    },
    searchKeywords: ["reactive power", "kvar calculator", "reactive power kvar", "power factor kvar", "electrical"]
  },
  {
    id: "power-factor-calc",
    slug: "power-factor-calc",
    title: "Power Factor Calculator",
    name: "Power Factor Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate electrical power factor (PF) ratio from active power (kW) and apparent power (kVA).",
    formula: "PF = Active Power (kW) / Apparent Power (kVA)",
    outputUnit: "Ratio (0-1)",
    assumptions: ["Steady state AC load conditions", "Non-zero apparent power"],
    inputs: [
      { name: "activePower", label: "Active Power (P)", unit: "Kilowatts (kW)", defaultValue: 75 },
      { name: "apparentPower", label: "Apparent Power (S)", unit: "kVA", defaultValue: 90 }
    ],
    calculate: (inputs) => (inputs.apparentPower ? (inputs.activePower || 0) / inputs.apparentPower : 0),
    route: "/engineering-calculators/electrical-calc/power-factor-calc",
    seo: {
      title: "Power Factor Calculator | Electrical Engineering",
      description: "Calculate power factor ratio from active power in kW and apparent power in kVA.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/power-factor-calc",
      keywords: ["power factor calculator", "kw kva power factor", "cos phi calculator", "electrical power factor", "electrical"]
    },
    searchKeywords: ["power factor calculator", "kw kva power factor", "cos phi calculator", "electrical power factor", "electrical"]
  },
  {
    id: "energy-consumption-kwh",
    slug: "energy-consumption-kwh",
    title: "Energy Consumption Calculator (kWh)",
    name: "Energy Consumption Calculator (kWh)",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate total electrical energy consumed in Kilowatt-hours (kWh) over operating duration.",
    formula: "Energy = (Power in Watts × Hours) / 1000",
    outputUnit: "kWh",
    assumptions: ["Constant load power demand during operating time interval"],
    inputs: [
      { name: "powerWatts", label: "Load Power", unit: "Watts (W)", defaultValue: 1500 },
      { name: "hours", label: "Operating Time", unit: "Hours (h)", defaultValue: 24 }
    ],
    calculate: (inputs) => ((inputs.powerWatts || 0) * (inputs.hours || 0)) / 1000,
    route: "/engineering-calculators/electrical-calc/energy-consumption-kwh",
    seo: {
      title: "Energy Consumption Calculator (kWh) | Electrical Engineering",
      description: "Calculate electrical energy consumption in Kilowatt-hours (kWh) from wattage and usage hours.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/energy-consumption-kwh",
      keywords: ["energy consumption calculator", "kwh calculator", "watts to kwh", "electricity usage", "electrical"]
    },
    searchKeywords: ["energy consumption calculator", "kwh calculator", "watts to kwh", "electricity usage", "electrical"]
  },
  {
    id: "transformer-turns-ratio",
    slug: "transformer-turns-ratio",
    title: "Transformer Turns Ratio Calculator",
    name: "Transformer Turns Ratio Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate transformer winding turns ratio (Np/Ns) from primary and secondary voltages.",
    formula: "Ratio = V_primary / V_secondary",
    outputUnit: "Ratio (:1)",
    assumptions: ["Ideal single-phase transformer core", "Zero copper or flux leakage losses"],
    inputs: [
      { name: "vPrimary", label: "Primary Voltage (Vp)", unit: "Volts (V)", defaultValue: 480 },
      { name: "vSecondary", label: "Secondary Voltage (Vs)", unit: "Volts (V)", defaultValue: 120 }
    ],
    calculate: (inputs) => (inputs.vSecondary ? (inputs.vPrimary || 0) / inputs.vSecondary : 0),
    route: "/engineering-calculators/electrical-calc/transformer-turns-ratio",
    seo: {
      title: "Transformer Turns Ratio Calculator | Electrical Engineering",
      description: "Calculate transformer turns ratio Np/Ns from primary and secondary RMS voltage ratings.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/transformer-turns-ratio",
      keywords: ["transformer turns ratio", "np ns ratio", "primary secondary voltage ratio", "transformer formula", "electrical"]
    },
    searchKeywords: ["transformer turns ratio", "np ns ratio", "primary secondary voltage ratio", "transformer formula", "electrical"]
  },
  {
    id: "transformer-secondary-voltage",
    slug: "transformer-secondary-voltage",
    title: "Transformer Secondary Voltage Calculator",
    name: "Transformer Secondary Voltage Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate transformer secondary voltage output from primary voltage and winding turns ratio.",
    formula: "Vs = Vp × (Ns / Np)",
    outputUnit: "Volts (V)",
    assumptions: ["Ideal magnetic core coupling", "Negligible voltage drop under load"],
    inputs: [
      { name: "vPrimary", label: "Primary Voltage (Vp)", unit: "Volts (V)", defaultValue: 230 },
      { name: "nPrimary", label: "Primary Turns (Np)", unit: "Turns", defaultValue: 1000 },
      { name: "nSecondary", label: "Secondary Turns (Ns)", unit: "Turns", defaultValue: 100 }
    ],
    calculate: (inputs) => (inputs.nPrimary ? (inputs.vPrimary || 0) * ((inputs.nSecondary || 0) / inputs.nPrimary) : 0),
    route: "/engineering-calculators/electrical-calc/transformer-secondary-voltage",
    seo: {
      title: "Transformer Secondary Voltage Calculator | Electrical Engineering",
      description: "Calculate transformer secondary output voltage from primary voltage and winding turn counts.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/transformer-secondary-voltage",
      keywords: ["transformer secondary voltage", "secondary voltage calculator", "transformer step down", "transformer step up", "electrical"]
    },
    searchKeywords: ["transformer secondary voltage", "secondary voltage calculator", "transformer step down", "transformer step up", "electrical"]
  },
  {
    id: "short-circuit-current",
    slug: "short-circuit-current",
    title: "Short Circuit Current Calculator",
    name: "Short Circuit Current Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate prospective secondary short circuit fault current (Isc) at transformer terminals.",
    formula: "Isc = I_full_load / (%Z / 100)",
    outputUnit: "Kiloamperes (kA)",
    assumptions: ["Infinite primary utility bus capacity", "3-phase symmetrical bolted fault"],
    inputs: [
      { name: "kva", label: "Transformer Rating", unit: "kVA", defaultValue: 1000 },
      { name: "vLine", label: "Secondary Line Voltage", unit: "Volts (V)", defaultValue: 400 },
      { name: "impedance", label: "Percent Impedance (%Z)", unit: "Percent (%)", defaultValue: 5 }
    ],
    calculate: (inputs) => {
      if (!inputs.vLine || !inputs.impedance) return 0;
      const iFullLoad = ((inputs.kva || 0) * 1000) / (Math.sqrt(3) * inputs.vLine);
      return (iFullLoad / (inputs.impedance / 100)) / 1000;
    },
    route: "/engineering-calculators/electrical-calc/short-circuit-current",
    seo: {
      title: "Short Circuit Current Calculator | Electrical Engineering",
      description: "Calculate prospective secondary short-circuit fault current in kA using transformer impedance.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/short-circuit-current",
      keywords: ["short circuit current", "fault current calculator", "transformer short circuit", "isc ka", "electrical"]
    },
    searchKeywords: ["short circuit current", "fault current calculator", "transformer short circuit", "isc ka", "electrical"]
  },
  {
    id: "cable-size-calc",
    slug: "cable-size-calc",
    title: "Cable Size Calculator",
    name: "Cable Size Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate required minimum conductor area in mm² based on current rating and allowable voltage drop percentage.",
    formula: "A_mm² = (2 × ρ × I × L) / (V_supply × %Drop_max / 100)",
    outputUnit: "mm²",
    assumptions: ["Single-phase copper conductor resistivity ρ = 0.0175 Ω·mm²/m", "Unity power factor"],
    inputs: [
      { name: "current", label: "Load Current (I)", unit: "Amperes (A)", defaultValue: 32 },
      { name: "length", label: "Cable Distance (L)", unit: "Meters (m)", defaultValue: 40 },
      { name: "voltage", label: "Supply Voltage (V)", unit: "Volts (V)", defaultValue: 230 },
      { name: "dropPercent", label: "Max Allowable Drop", unit: "Percent (%)", defaultValue: 3 }
    ],
    calculate: (inputs) => {
      const vMaxDrop = (inputs.voltage || 230) * ((inputs.dropPercent || 3) / 100);
      return vMaxDrop > 0 ? (2 * 0.0175 * (inputs.current || 0) * (inputs.length || 0)) / vMaxDrop : 0;
    },
    route: "/engineering-calculators/electrical-calc/cable-size-calc",
    seo: {
      title: "Cable Size Calculator | Electrical Engineering",
      description: "Calculate minimum conductor cross-sectional area in mm² for safe voltage drop limits.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/cable-size-calc",
      keywords: ["cable size calculator", "cable mm2", "conductor sizing", "voltage drop cable size", "electrical"]
    },
    searchKeywords: ["cable size calculator", "cable mm2", "conductor sizing", "voltage drop cable size", "electrical"]
  },
  {
    id: "electrical-load-calc",
    slug: "electrical-load-calc",
    title: "Electrical Load Calculator",
    name: "Electrical Load Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate total diversified electrical demand load taking demand factors into consideration.",
    formula: "Demand Load (kW) = Total Connected Load × Demand Factor",
    outputUnit: "Kilowatts (kW)",
    assumptions: ["Non-coincident peak load profile", "Applied system diversity factor"],
    inputs: [
      { name: "connectedLoad", label: "Total Connected Load", unit: "Kilowatts (kW)", defaultValue: 120 },
      { name: "demandFactor", label: "Demand Factor", unit: "Ratio (0-1)", defaultValue: 0.75 }
    ],
    calculate: (inputs) => (inputs.connectedLoad || 0) * (inputs.demandFactor || 0.75),
    route: "/engineering-calculators/electrical-calc/electrical-load-calc",
    seo: {
      title: "Electrical Load Calculator | Electrical Engineering",
      description: "Calculate total diversified electrical demand load in kW using demand factor multipliers.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/electrical-load-calc",
      keywords: ["electrical load calculator", "demand load kw", "connected load demand factor", "building electrical load", "electrical"]
    },
    searchKeywords: ["electrical load calculator", "demand load kw", "connected load demand factor", "building electrical load", "electrical"]
  },
  {
    id: "motor-full-load-current",
    slug: "motor-full-load-current",
    title: "Motor Full Load Current Calculator",
    name: "Motor Full Load Current Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate full load current (FLC) for 3-phase AC induction motors.",
    formula: "FLC = (P_kW × 1000) / (√3 × V_LL × PF × η)",
    outputUnit: "Amperes (A)",
    assumptions: ["Balanced 3-phase induction motor", "Known nameplate efficiency η and power factor PF"],
    inputs: [
      { name: "powerKw", label: "Motor Shaft Power", unit: "Kilowatts (kW)", defaultValue: 15 },
      { name: "voltage", label: "Line Voltage", unit: "Volts (V)", defaultValue: 400 },
      { name: "pf", label: "Power Factor", unit: "Ratio (0-1)", defaultValue: 0.85 },
      { name: "efficiency", label: "Motor Efficiency (η)", unit: "Ratio (0-1)", defaultValue: 0.90 }
    ],
    calculate: (inputs) => {
      const denom = Math.sqrt(3) * (inputs.voltage || 400) * (inputs.pf || 0.85) * (inputs.efficiency || 0.9);
      return denom > 0 ? ((inputs.powerKw || 0) * 1000) / denom : 0;
    },
    route: "/engineering-calculators/electrical-calc/motor-full-load-current",
    seo: {
      title: "Motor Full Load Current Calculator | Electrical Engineering",
      description: "Calculate 3-phase AC motor full load current (FLC) in Amperes from kW rating.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/motor-full-load-current",
      keywords: ["motor full load current", "motor flc calculator", "3 phase motor amps", "motor current kw", "electrical"]
    },
    searchKeywords: ["motor full load current", "motor flc calculator", "3 phase motor amps", "motor current kw", "electrical"]
  },
  {
    id: "generator-sizing-calc",
    slug: "generator-sizing-calc",
    title: "Generator Sizing Calculator",
    name: "Generator Sizing Calculator",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate recommended standby generator rating in kVA for motor starting and connected electrical loads.",
    formula: "Gen kVA = [(Running kW + Starting kW) / PF] × Safety Margin",
    outputUnit: "kVA",
    assumptions: ["Direct-on-line (DOL) motor starting surge factor included", "20% safety margin factor"],
    inputs: [
      { name: "runningKw", label: "Continuous Running Load", unit: "Kilowatts (kW)", defaultValue: 50 },
      { name: "startingKw", label: "Largest Motor Inrush", unit: "Kilowatts (kW)", defaultValue: 25 },
      { name: "pf", label: "Generator Power Factor", unit: "Ratio (0-1)", defaultValue: 0.8 },
      { name: "safetyMargin", label: "Safety Margin", unit: "Multiplier", defaultValue: 1.2 }
    ],
    calculate: (inputs) => (inputs.pf ? (((inputs.runningKw || 0) + (inputs.startingKw || 0)) / inputs.pf) * (inputs.safetyMargin || 1.2) : 0),
    route: "/engineering-calculators/electrical-calc/generator-sizing-calc",
    seo: {
      title: "Generator Sizing Calculator | Electrical Engineering",
      description: "Calculate required standby generator rating in kVA for connected and motor starting surge loads.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/generator-sizing-calc",
      keywords: ["generator sizing calculator", "generator kva calculator", "standby generator size", "genset sizing", "electrical"]
    },
    searchKeywords: ["generator sizing calculator", "generator kva calculator", "standby generator size", "genset sizing", "electrical"]
  },
  {
    id: "capacitor-bank-pfc",
    slug: "capacitor-bank-pfc",
    title: "Capacitor Bank Calculator (Power Factor Correction)",
    name: "Capacitor Bank Calculator (Power Factor Correction)",
    discipline: "Electrical",
    disciplineId: "electrical-calc",
    description: "Calculate required reactive power rating in kVAR for power factor correction capacitor banks.",
    formula: "Q_cap (kVAR) = P_kW × [tan(arccos(PF1)) - tan(arccos(PF2))]",
    outputUnit: "kVAR",
    assumptions: ["Constant active load power (P)", "Sinusoidal power factor correction"],
    inputs: [
      { name: "powerKw", label: "Active Power Load", unit: "Kilowatts (kW)", defaultValue: 100 },
      { name: "pfOriginal", label: "Initial Power Factor (PF1)", unit: "Ratio (0-1)", defaultValue: 0.75 },
      { name: "pfTarget", label: "Target Power Factor (PF2)", unit: "Ratio (0-1)", defaultValue: 0.95 }
    ],
    calculate: (inputs) => {
      const pf1 = Math.min(Math.max(inputs.pfOriginal || 0.75, 0.1), 0.99);
      const pf2 = Math.min(Math.max(inputs.pfTarget || 0.95, 0.1), 1.0);
      const tan1 = Math.tan(Math.acos(pf1));
      const tan2 = Math.tan(Math.acos(pf2));
      return (inputs.powerKw || 0) * (tan1 - tan2);
    },
    route: "/engineering-calculators/electrical-calc/capacitor-bank-pfc",
    seo: {
      title: "Capacitor Bank Calculator (Power Factor Correction) | Electrical Engineering",
      description: "Calculate required capacitor bank kVAR rating for power factor correction.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electrical-calc/capacitor-bank-pfc",
      keywords: ["capacitor bank calculator", "power factor correction kvar", "pfc capacitor size", "kvar calculator", "electrical"]
    },
    searchKeywords: ["capacitor bank calculator", "power factor correction kvar", "pfc capacitor size", "kvar calculator", "electrical"]
  },

  // --- MECHANICAL ENGINEERING ---
  {
    id: "gear-ratio",
    slug: "gear-ratio",
    title: "Gear Ratio & Velocity Calculator",
    name: "Gear Ratio & Velocity Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate output velocity and mechanical advantage between driver and driven gears.",
    formula: "N_driven = N_driver × (T_driver / T_driven)",
    outputUnit: "RPM",
    assumptions: ["Rigid gear teeth", "Zero backlash power transmission"],
    inputs: [
      { name: "rpmDriver", label: "Driver Speed (N1)", unit: "RPM", defaultValue: 1750 },
      { name: "teethDriver", label: "Driver Teeth (T1)", unit: "Count", defaultValue: 20 },
      { name: "teethDriven", label: "Driven Teeth (T2)", unit: "Count", defaultValue: 60 }
    ],
    calculate: (inputs) => {
      if (!inputs.teethDriven) return 0;
      return (inputs.rpmDriver || 0) * ((inputs.teethDriver || 1) / inputs.teethDriven);
    },
    route: "/engineering-calculators/mechanical-calc/gear-ratio",
    seo: {
      title: "Gear Ratio & Velocity Calculator | Mechanical Engineering",
      description: "Calculate mechanical velocity reduction and torque multiplication ratios.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/gear-ratio",
      keywords: ["gear ratio", "rpm calculator", "driver driven gear", "mechanical advantage"]
    },
    searchKeywords: ["gear ratio", "velocity", "rpm", "driver gear", "driven gear", "teeth count"]
  },
  {
    id: "shaft-torque",
    slug: "shaft-torque",
    title: "Shaft Torque & Torsional Stress Calculator",
    name: "Shaft Torque & Torsional Stress Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Determine torsional shear stress on solid cylindrical rotating shafts.",
    formula: "Torque = (P × 9549) / RPM",
    outputUnit: "Newton-meters (N·m)",
    assumptions: ["Uniform circular cross-section", "Elastic material behavior"],
    inputs: [
      { name: "powerKw", label: "Transmitted Power", unit: "Kilowatts (kW)", defaultValue: 15 },
      { name: "speedRpm", label: "Shaft Speed", unit: "RPM", defaultValue: 1450 }
    ],
    calculate: (inputs) => {
      if (!inputs.speedRpm) return 0;
      return ((inputs.powerKw || 0) * 9549) / inputs.speedRpm;
    },
    route: "/engineering-calculators/mechanical-calc/shaft-torque",
    seo: {
      title: "Shaft Torque & Torsional Stress Calculator | Mechanical Engineering",
      description: "Calculate rotating drive shaft torque from kW power and RPM speed.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/shaft-torque",
      keywords: ["shaft torque", "torsional stress", "power to torque", "n-m calculator"]
    },
    searchKeywords: ["shaft torque", "torsional stress", "nm", "rpm", "kw", "drive shaft"]
  },
  {
    id: "belt-length",
    slug: "belt-length",
    title: "Belt Length Calculator",
    name: "Belt Length Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate open-loop V-belt pitch length between two pulley centers.",
    formula: "L = 2C + 1.57(D + d) + (D - d)² / (4C)",
    outputUnit: "Meters (m)",
    assumptions: ["Open belt configuration", "Flat or V-ribbed pulleys"],
    inputs: [
      { name: "centerDist", label: "Center Distance (C)", unit: "Meters (m)", defaultValue: 1.2 },
      { name: "largeDia", label: "Large Pulley Dia (D)", unit: "Meters (m)", defaultValue: 0.3 },
      { name: "smallDia", label: "Small Pulley Dia (d)", unit: "Meters (m)", defaultValue: 0.1 }
    ],
    calculate: (inputs) => {
      const c = inputs.centerDist || 1;
      const D = inputs.largeDia || 0;
      const d = inputs.smallDia || 0;
      if (c === 0) return 0;
      return 2 * c + 1.57 * (D + d) + Math.pow(D - d, 2) / (4 * c);
    },
    route: "/engineering-calculators/mechanical-calc/belt-length",
    seo: {
      title: "Belt Length Calculator | Mechanical Engineering",
      description: "Determine pitch length for drive belts across center pulley distances.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/belt-length",
      keywords: ["belt length", "v-belt pitch", "pulley center distance", "mechanical drive"]
    },
    searchKeywords: ["belt length", "pulley", "v-belt", "pitch length", "drive belt"]
  },
  {
    id: "bearing-life",
    slug: "bearing-life",
    title: "Bearing L10 Rating Life Calculator",
    name: "Bearing L10 Rating Life Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Estimate rolling element bearing fatigue life rating in million revolutions.",
    formula: "L10 = (C / P)^3 × 10^6",
    outputUnit: "Revolutions (Millions)",
    assumptions: ["Radial ball bearing (exponent = 3)", "Clean ISO lubrication"],
    inputs: [
      { name: "dynCapacity", label: "Dynamic Load Rating (C)", unit: "kilonewtons (kN)", defaultValue: 25 },
      { name: "equivLoad", label: "Equivalent Load (P)", unit: "kilonewtons (kN)", defaultValue: 5 }
    ],
    calculate: (inputs) => {
      if (!inputs.equivLoad) return 0;
      return Math.pow((inputs.dynCapacity || 0) / inputs.equivLoad, 3);
    },
    route: "/engineering-calculators/mechanical-calc/bearing-life",
    seo: {
      title: "Bearing L10 Life Calculator | Mechanical Engineering",
      description: "Determine ISO 281 L10 bearing fatigue life rating under equivalent loads.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/bearing-life",
      keywords: ["bearing life", "l10 rating", "fatigue life", "ball bearing load"]
    },
    searchKeywords: ["bearing life", "l10", "ball bearing", "dynamic load", "revolutions"]
  },
  {
    id: "pulley-speed-ratio",
    slug: "pulley-speed-ratio",
    title: "Pulley Speed Ratio Calculator",
    name: "Pulley Speed Ratio Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate output RPM speed and pulley speed ratio for belt-driven systems.",
    formula: "N_driven = N_driver × (D_driver / D_driven)",
    outputUnit: "RPM",
    assumptions: ["No belt slip (100% friction grip)", "Rigid circular pulleys"],
    inputs: [
      { name: "driverDiameter", label: "Driver Pulley Diameter (D1)", unit: "Meters (m)", defaultValue: 0.1 },
      { name: "drivenDiameter", label: "Driven Pulley Diameter (D2)", unit: "Meters (m)", defaultValue: 0.2 },
      { name: "driverRpm", label: "Driver Speed (N1)", unit: "RPM", defaultValue: 1750 }
    ],
    calculate: (inputs) => (inputs.drivenDiameter ? (inputs.driverRpm || 0) * ((inputs.driverDiameter || 0) / inputs.drivenDiameter) : 0),
    route: "/engineering-calculators/mechanical-calc/pulley-speed-ratio",
    seo: {
      title: "Pulley Speed Ratio Calculator | Mechanical Engineering",
      description: "Calculate driven pulley output speed in RPM from diameter ratios and driver speed.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/pulley-speed-ratio",
      keywords: ["pulley speed ratio", "pulley rpm", "belt drive rpm", "driven pulley speed", "mechanical"]
    },
    searchKeywords: ["pulley speed ratio", "pulley rpm", "belt drive rpm", "driven pulley speed", "mechanical"]
  },
  {
    id: "mechanical-power-calc",
    slug: "mechanical-power-calc",
    title: "Mechanical Power Calculator",
    name: "Mechanical Power Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate mechanical shaft power output in Watts from torque and angular speed.",
    formula: "P = (2 × π × N × τ) / 60",
    outputUnit: "Watts (W)",
    assumptions: ["Steady rotational motion", "Constant shaft torque"],
    inputs: [
      { name: "torque", label: "Torque (τ)", unit: "Newton-meters (N·m)", defaultValue: 100 },
      { name: "rpm", label: "Rotational Speed (N)", unit: "RPM", defaultValue: 1500 }
    ],
    calculate: (inputs) => (2 * Math.PI * (inputs.rpm || 0) * (inputs.torque || 0)) / 60,
    route: "/engineering-calculators/mechanical-calc/mechanical-power-calc",
    seo: {
      title: "Mechanical Power Calculator | Mechanical Engineering",
      description: "Calculate mechanical power output in Watts from torque in N·m and rotational speed in RPM.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/mechanical-power-calc",
      keywords: ["mechanical power", "watts from torque", "power torque rpm", "shaft power", "mechanical"]
    },
    searchKeywords: ["mechanical power", "watts from torque", "power torque rpm", "shaft power", "mechanical"]
  },
  {
    id: "rotational-kinetic-energy",
    slug: "rotational-kinetic-energy",
    title: "Rotational Kinetic Energy Calculator",
    name: "Rotational Kinetic Energy Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate stored rotational kinetic energy in a rotating body.",
    formula: "E_rot = ½ × I × ω²",
    outputUnit: "Joules (J)",
    assumptions: ["Rigid body rotating about a fixed axis", "Constant moment of inertia I"],
    inputs: [
      { name: "inertia", label: "Moment of Inertia (I)", unit: "kg·m²", defaultValue: 2.5 },
      { name: "omega", label: "Angular Velocity (ω)", unit: "rad/s", defaultValue: 50 }
    ],
    calculate: (inputs) => 0.5 * (inputs.inertia || 0) * Math.pow(inputs.omega || 0, 2),
    route: "/engineering-calculators/mechanical-calc/rotational-kinetic-energy",
    seo: {
      title: "Rotational Kinetic Energy Calculator | Mechanical Engineering",
      description: "Calculate stored rotational kinetic energy in Joules from moment of inertia and angular velocity.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/rotational-kinetic-energy",
      keywords: ["rotational kinetic energy", "1/2 I w2", "flywheel kinetic energy", "rotating energy", "mechanical"]
    },
    searchKeywords: ["rotational kinetic energy", "1/2 I w2", "flywheel kinetic energy", "rotating energy", "mechanical"]
  },
  {
    id: "flywheel-energy-storage",
    slug: "flywheel-energy-storage",
    title: "Flywheel Energy Storage Calculator",
    name: "Flywheel Energy Storage Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate usable kinetic energy released or stored by a flywheel between two speed limits.",
    formula: "ΔE = ½ × I × (ω_max² - ω_min²)",
    outputUnit: "Joules (J)",
    assumptions: ["Uniform rigid flywheel disk", "Negligible bearing windage drag during charge/discharge"],
    inputs: [
      { name: "inertia", label: "Moment of Inertia (I)", unit: "kg·m²", defaultValue: 10 },
      { name: "wMax", label: "Max Angular Velocity (ω_max)", unit: "rad/s", defaultValue: 300 },
      { name: "wMin", label: "Min Angular Velocity (ω_min)", unit: "rad/s", defaultValue: 100 }
    ],
    calculate: (inputs) => 0.5 * (inputs.inertia || 0) * (Math.pow(inputs.wMax || 0, 2) - Math.pow(inputs.wMin || 0, 2)),
    route: "/engineering-calculators/mechanical-calc/flywheel-energy-storage",
    seo: {
      title: "Flywheel Energy Storage Calculator | Mechanical Engineering",
      description: "Calculate usable flywheel energy storage capacity in Joules across speed operating bounds.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/flywheel-energy-storage",
      keywords: ["flywheel energy storage", "flywheel kinetic energy", "usable energy flywheel", "energy buffer", "mechanical"]
    },
    searchKeywords: ["flywheel energy storage", "flywheel kinetic energy", "usable energy flywheel", "energy buffer", "mechanical"]
  },
  {
    id: "shaft-horsepower",
    slug: "shaft-horsepower",
    title: "Shaft Horsepower Calculator",
    name: "Shaft Horsepower Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate shaft horsepower (HP) from mechanical torque in lb-ft and RPM speed.",
    formula: "HP = (Torque × RPM) / 5252",
    outputUnit: "Horsepower (HP)",
    assumptions: ["Standard imperial mechanical horsepower (1 HP = 5252 lb-ft RPM)", "Continuous steady load"],
    inputs: [
      { name: "torque", label: "Torque (τ)", unit: "lb-ft", defaultValue: 300 },
      { name: "rpm", label: "Rotational Speed (N)", unit: "RPM", defaultValue: 3500 }
    ],
    calculate: (inputs) => ((inputs.torque || 0) * (inputs.rpm || 0)) / 5252,
    route: "/engineering-calculators/mechanical-calc/shaft-horsepower",
    seo: {
      title: "Shaft Horsepower Calculator | Mechanical Engineering",
      description: "Calculate mechanical shaft horsepower from torque in lb-ft and rotational speed in RPM.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/shaft-horsepower",
      keywords: ["shaft horsepower", "hp calculator", "torque rpm to hp", "engine horsepower", "mechanical"]
    },
    searchKeywords: ["shaft horsepower", "hp calculator", "torque rpm to hp", "engine horsepower", "mechanical"]
  },
  {
    id: "torque-converter-calc",
    slug: "torque-converter-calc",
    title: "Torque Converter Calculator",
    name: "Torque Converter Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate output shaft torque in N·m from motor power in kW and RPM speed.",
    formula: "Torque (N·m) = (P_kW × 9549) / RPM",
    outputUnit: "Newton-meters (N·m)",
    assumptions: ["100% transmission efficiency", "Steady state rotation"],
    inputs: [
      { name: "powerKw", label: "Power (P)", unit: "Kilowatts (kW)", defaultValue: 45 },
      { name: "rpm", label: "Rotational Speed (N)", unit: "RPM", defaultValue: 1450 }
    ],
    calculate: (inputs) => (inputs.rpm ? ((inputs.powerKw || 0) * 9549) / inputs.rpm : 0),
    route: "/engineering-calculators/mechanical-calc/torque-converter-calc",
    seo: {
      title: "Torque Converter Calculator | Mechanical Engineering",
      description: "Convert power and RPM into output torque in N·m for rotating mechanical shafts.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/torque-converter-calc",
      keywords: ["torque converter", "power to torque", "kw to nm", "shaft torque rpm", "mechanical"]
    },
    searchKeywords: ["torque converter", "power to torque", "kw to nm", "shaft torque rpm", "mechanical"]
  },
  {
    id: "lead-screw-speed",
    slug: "lead-screw-speed",
    title: "Lead Screw Linear Speed Calculator",
    name: "Lead Screw Linear Speed Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate linear travel speed of a nut on a rotating lead screw.",
    formula: "v = (Lead × RPM) / 60",
    outputUnit: "mm/s",
    assumptions: ["Constant screw rotation rate", "Zero thread backlash slip"],
    inputs: [
      { name: "lead", label: "Screw Lead (L)", unit: "Millimeters (mm)", defaultValue: 8 },
      { name: "rpm", label: "Screw Speed (N)", unit: "RPM", defaultValue: 600 }
    ],
    calculate: (inputs) => ((inputs.lead || 0) * (inputs.rpm || 0)) / 60,
    route: "/engineering-calculators/mechanical-calc/lead-screw-speed",
    seo: {
      title: "Lead Screw Linear Speed Calculator | Mechanical Engineering",
      description: "Calculate linear travel velocity in mm/s for rotating lead screws and ball screws.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/lead-screw-speed",
      keywords: ["lead screw speed", "linear travel speed", "ball screw velocity", "lead screw mm/s", "mechanical"]
    },
    searchKeywords: ["lead screw speed", "linear travel speed", "ball screw velocity", "lead screw mm/s", "mechanical"]
  },
  {
    id: "lead-screw-torque",
    slug: "lead-screw-torque",
    title: "Lead Screw Torque Calculator",
    name: "Lead Screw Torque Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate required driving torque to move an axial load with a lead screw.",
    formula: "T = (F × Lead) / (2 × π × η)",
    outputUnit: "Newton-meters (N·m)",
    assumptions: ["Uniform axial load distribution", "Constant screw efficiency factor η"],
    inputs: [
      { name: "force", label: "Axial Load (F)", unit: "Newtons (N)", defaultValue: 1500 },
      { name: "lead", label: "Screw Lead (L)", unit: "Meters (m)", defaultValue: 0.005 },
      { name: "efficiency", label: "Efficiency (η)", unit: "Ratio (0-1)", defaultValue: 0.85 }
    ],
    calculate: (inputs) => (inputs.efficiency ? ((inputs.force || 0) * (inputs.lead || 0)) / (2 * Math.PI * inputs.efficiency) : 0),
    route: "/engineering-calculators/mechanical-calc/lead-screw-torque",
    seo: {
      title: "Lead Screw Torque Calculator | Mechanical Engineering",
      description: "Calculate required lead screw motor drive torque in N·m for given axial loads.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/lead-screw-torque",
      keywords: ["lead screw torque", "drive torque lead screw", "axial load torque", "ball screw torque", "mechanical"]
    },
    searchKeywords: ["lead screw torque", "drive torque lead screw", "axial load torque", "ball screw torque", "mechanical"]
  },
  {
    id: "spring-force-hookes-law",
    slug: "spring-force-hookes-law",
    title: "Spring Force (Hooke's Law) Calculator",
    name: "Spring Force (Hooke's Law) Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate restorative spring force according to Hooke's Law.",
    formula: "F = k × x",
    outputUnit: "Newtons (N)",
    assumptions: ["Linear elastic deformation within proportional elastic limit", "Constant spring stiffness k"],
    inputs: [
      { name: "k", label: "Spring Constant (k)", unit: "N/m", defaultValue: 2500 },
      { name: "x", label: "Displacement (x)", unit: "Meters (m)", defaultValue: 0.04 }
    ],
    calculate: (inputs) => (inputs.k || 0) * (inputs.x || 0),
    route: "/engineering-calculators/mechanical-calc/spring-force-hookes-law",
    seo: {
      title: "Spring Force (Hooke's Law) Calculator | Mechanical Engineering",
      description: "Calculate spring force in Newtons using Hooke's law equation F = kx.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/spring-force-hookes-law",
      keywords: ["spring force", "hookes law", "f=kx", "spring constant", "elastic force", "mechanical"]
    },
    searchKeywords: ["spring force", "hookes law", "f=kx", "spring constant", "elastic force", "mechanical"]
  },
  {
    id: "spring-potential-energy",
    slug: "spring-potential-energy",
    title: "Spring Potential Energy Calculator",
    name: "Spring Potential Energy Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate elastic potential energy stored in a compressed or stretched linear spring.",
    formula: "U = ½ × k × x²",
    outputUnit: "Joules (J)",
    assumptions: ["Ideal linear spring", "Deformation strictly within elastic limit"],
    inputs: [
      { name: "k", label: "Spring Rate (k)", unit: "N/m", defaultValue: 5000 },
      { name: "x", label: "Compression/Extension (x)", unit: "Meters (m)", defaultValue: 0.08 }
    ],
    calculate: (inputs) => 0.5 * (inputs.k || 0) * Math.pow(inputs.x || 0, 2),
    route: "/engineering-calculators/mechanical-calc/spring-potential-energy",
    seo: {
      title: "Spring Potential Energy Calculator | Mechanical Engineering",
      description: "Calculate elastic potential energy stored in spring in Joules from rate and deflection.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/spring-potential-energy",
      keywords: ["spring potential energy", "stored elastic energy", "1/2 kx2", "spring compression energy", "mechanical"]
    },
    searchKeywords: ["spring potential energy", "stored elastic energy", "1/2 kx2", "spring compression energy", "mechanical"]
  },
  {
    id: "hydraulic-cylinder-force",
    slug: "hydraulic-cylinder-force",
    title: "Hydraulic Cylinder Force Calculator",
    name: "Hydraulic Cylinder Force Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate output force exerted by a hydraulic cylinder piston.",
    formula: "F = P × (π × d² / 4)",
    outputUnit: "Newtons (N)",
    assumptions: ["Incompressible fluid pressure", "Negligible seal friction losses"],
    inputs: [
      { name: "pressure", label: "Hydraulic Pressure (P)", unit: "Pascals (Pa)", defaultValue: 15000000 },
      { name: "diameter", label: "Piston Bore Diameter (d)", unit: "Meters (m)", defaultValue: 0.1 }
    ],
    calculate: (inputs) => (inputs.pressure || 0) * (Math.PI * Math.pow(inputs.diameter || 0, 2) / 4),
    route: "/engineering-calculators/mechanical-calc/hydraulic-cylinder-force",
    seo: {
      title: "Hydraulic Cylinder Force Calculator | Mechanical Engineering",
      description: "Calculate hydraulic piston force in Newtons from fluid pressure and bore diameter.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/hydraulic-cylinder-force",
      keywords: ["hydraulic cylinder force", "piston force", "hydraulic pressure force", "cylinder tonnage", "mechanical"]
    },
    searchKeywords: ["hydraulic cylinder force", "piston force", "hydraulic pressure force", "cylinder tonnage", "mechanical"]
  },
  {
    id: "pneumatic-cylinder-force",
    slug: "pneumatic-cylinder-force",
    title: "Pneumatic Cylinder Force Calculator",
    name: "Pneumatic Cylinder Force Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate thrust or pull force of a pneumatic cylinder taking friction efficiency into account.",
    formula: "F = P × (π × d² / 4) × η",
    outputUnit: "Newtons (N)",
    assumptions: ["Regulated compressed air pressure", "Constant mechanical efficiency η (typically 0.85 - 0.95)"],
    inputs: [
      { name: "pressure", label: "Air Pressure (P)", unit: "Pascals (Pa)", defaultValue: 600000 },
      { name: "bore", label: "Cylinder Bore Diameter (d)", unit: "Meters (m)", defaultValue: 0.05 },
      { name: "efficiency", label: "Friction Efficiency (η)", unit: "Ratio (0-1)", defaultValue: 0.9 }
    ],
    calculate: (inputs) => (inputs.pressure || 0) * (Math.PI * Math.pow(inputs.bore || 0, 2) / 4) * (inputs.efficiency || 0.9),
    route: "/engineering-calculators/mechanical-calc/pneumatic-cylinder-force",
    seo: {
      title: "Pneumatic Cylinder Force Calculator | Mechanical Engineering",
      description: "Calculate pneumatic cylinder force output in Newtons considering system efficiency.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/pneumatic-cylinder-force",
      keywords: ["pneumatic cylinder force", "air cylinder thrust", "pneumatic piston force", "air pressure force", "mechanical"]
    },
    searchKeywords: ["pneumatic cylinder force", "air cylinder thrust", "pneumatic piston force", "air pressure force", "mechanical"]
  },
  {
    id: "mechanical-advantage-calc",
    slug: "mechanical-advantage-calc",
    title: "Mechanical Advantage Calculator",
    name: "Mechanical Advantage Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate actual mechanical advantage (AMA) factor from output load and input effort force.",
    formula: "MA = F_output / F_input",
    outputUnit: "Ratio",
    assumptions: ["Static or slow steady-state equilibrium", "Rigid link force transmission"],
    inputs: [
      { name: "fOut", label: "Output Load Force (F_out)", unit: "Newtons (N)", defaultValue: 2500 },
      { name: "fIn", label: "Input Effort Force (F_in)", unit: "Newtons (N)", defaultValue: 500 }
    ],
    calculate: (inputs) => (inputs.fIn ? (inputs.fOut || 0) / inputs.fIn : 0),
    route: "/engineering-calculators/mechanical-calc/mechanical-advantage-calc",
    seo: {
      title: "Mechanical Advantage Calculator | Mechanical Engineering",
      description: "Calculate actual mechanical advantage ratio from effort and load force magnitudes.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/mechanical-advantage-calc",
      keywords: ["mechanical advantage", "ama calculator", "force ratio", "effort vs load", "lever advantage", "mechanical"]
    },
    searchKeywords: ["mechanical advantage", "ama calculator", "force ratio", "effort vs load", "lever advantage", "mechanical"]
  },
  {
    id: "belt-speed-calc",
    slug: "belt-speed-calc",
    title: "Belt Speed Calculator",
    name: "Belt Speed Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate linear surface velocity of a belt or pulley rim.",
    formula: "v = (π × D × N) / 60",
    outputUnit: "m/s",
    assumptions: ["No belt slip on driving pulley rim", "Pure circular pulley geometry"],
    inputs: [
      { name: "diameter", label: "Pulley Diameter (D)", unit: "Meters (m)", defaultValue: 0.2 },
      { name: "rpm", label: "Pulley Speed (N)", unit: "RPM", defaultValue: 1450 }
    ],
    calculate: (inputs) => (Math.PI * (inputs.diameter || 0) * (inputs.rpm || 0)) / 60,
    route: "/engineering-calculators/mechanical-calc/belt-speed-calc",
    seo: {
      title: "Belt Speed Calculator | Mechanical Engineering",
      description: "Calculate linear belt speed in m/s from pulley pitch diameter and rotational RPM.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/belt-speed-calc",
      keywords: ["belt speed", "linear belt velocity", "pulley rim speed", "conveyor belt speed", "m/s belt", "mechanical"]
    },
    searchKeywords: ["belt speed", "linear belt velocity", "pulley rim speed", "conveyor belt speed", "m/s belt", "mechanical"]
  },
  {
    id: "pulley-belt-ratio",
    slug: "pulley-belt-ratio",
    title: "Pulley Belt Ratio Calculator",
    name: "Pulley Belt Ratio Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate drive ratio between driven and driver pulleys.",
    formula: "Ratio = D_driven / D_driver",
    outputUnit: "Ratio (:1)",
    assumptions: ["Open or crossed belt drive", "Matching pitch diameter specs"],
    inputs: [
      { name: "dDriver", label: "Driver Pulley Diameter (D_driver)", unit: "Millimeters (mm)", defaultValue: 75 },
      { name: "dDriven", label: "Driven Pulley Diameter (D_driven)", unit: "Millimeters (mm)", defaultValue: 225 }
    ],
    calculate: (inputs) => (inputs.dDriver ? (inputs.dDriven || 0) / inputs.dDriver : 0),
    route: "/engineering-calculators/mechanical-calc/pulley-belt-ratio",
    seo: {
      title: "Pulley Belt Ratio Calculator | Mechanical Engineering",
      description: "Calculate mechanical pulley drive reduction ratio from driver and driven diameters.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/pulley-belt-ratio",
      keywords: ["pulley belt ratio", "pulley reduction ratio", "drive pulley ratio", "pulley ratio calculator", "mechanical"]
    },
    searchKeywords: ["pulley belt ratio", "pulley reduction ratio", "drive pulley ratio", "pulley ratio calculator", "mechanical"]
  },
  {
    id: "gear-train-ratio",
    slug: "gear-train-ratio",
    title: "Gear Train Ratio Calculator",
    name: "Gear Train Ratio Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate total compound gear reduction ratio across a two-stage gear train.",
    formula: "Total Ratio = (T_driven1 / T_driver1) × (T_driven2 / T_driver2)",
    outputUnit: "Ratio (:1)",
    assumptions: ["Mesh continuity without teeth slipping", "Two-stage reduction train"],
    inputs: [
      { name: "t1", label: "Stage 1 Driver Teeth (T1)", unit: "Teeth", defaultValue: 18 },
      { name: "t2", label: "Stage 1 Driven Teeth (T2)", unit: "Teeth", defaultValue: 54 },
      { name: "t3", label: "Stage 2 Driver Teeth (T3)", unit: "Teeth", defaultValue: 12 },
      { name: "t4", label: "Stage 2 Driven Teeth (T4)", unit: "Teeth", defaultValue: 48 }
    ],
    calculate: (inputs) => (inputs.t1 && inputs.t3 ? ((inputs.t2 || 1) / inputs.t1) * ((inputs.t4 || 1) / inputs.t3) : 0),
    route: "/engineering-calculators/mechanical-calc/gear-train-ratio",
    seo: {
      title: "Gear Train Ratio Calculator | Mechanical Engineering",
      description: "Calculate overall gear reduction ratio for multi-stage compound gear trains.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/gear-train-ratio",
      keywords: ["gear train ratio", "compound gear ratio", "gear reduction train", "multi stage gear ratio", "mechanical"]
    },
    searchKeywords: ["gear train ratio", "compound gear ratio", "gear reduction train", "multi stage gear ratio", "mechanical"]
  },
  {
    id: "linear-velocity-calc",
    slug: "linear-velocity-calc",
    title: "Linear Velocity Calculator",
    name: "Linear Velocity Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate linear velocity from distance displacement and elapsed time.",
    formula: "v = d / t",
    outputUnit: "m/s",
    assumptions: ["Uniform linear displacement", "Constant average velocity over time interval t"],
    inputs: [
      { name: "distance", label: "Displacement (d)", unit: "Meters (m)", defaultValue: 250 },
      { name: "time", label: "Time Interval (t)", unit: "Seconds (s)", defaultValue: 12.5 }
    ],
    calculate: (inputs) => (inputs.time ? (inputs.distance || 0) / inputs.time : 0),
    route: "/engineering-calculators/mechanical-calc/linear-velocity-calc",
    seo: {
      title: "Linear Velocity Calculator | Mechanical Engineering",
      description: "Calculate linear velocity in m/s from displacement distance and travel duration.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/linear-velocity-calc",
      keywords: ["linear velocity", "v=d/t", "speed from distance and time", "linear speed", "mechanical"]
    },
    searchKeywords: ["linear velocity", "v=d/t", "speed from distance and time", "linear speed", "mechanical"]
  },
  {
    id: "angular-velocity-calc",
    slug: "angular-velocity-calc",
    title: "Angular Velocity Calculator",
    name: "Angular Velocity Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate angular velocity in radians per second from angular displacement and time duration.",
    formula: "ω = Δθ / t",
    outputUnit: "rad/s",
    assumptions: ["Uniform rotational motion", "Angle measured in radians"],
    inputs: [
      { name: "angle", label: "Angular Displacement (Δθ)", unit: "Radians (rad)", defaultValue: 314.159 },
      { name: "time", label: "Time Duration (t)", unit: "Seconds (s)", defaultValue: 5 }
    ],
    calculate: (inputs) => (inputs.time ? (inputs.angle || 0) / inputs.time : 0),
    route: "/engineering-calculators/mechanical-calc/angular-velocity-calc",
    seo: {
      title: "Angular Velocity Calculator | Mechanical Engineering",
      description: "Calculate angular velocity in rad/s from angular displacement and duration.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/angular-velocity-calc",
      keywords: ["angular velocity", "omega rad/s", "rotational velocity", "angle per time", "mechanical"]
    },
    searchKeywords: ["angular velocity", "omega rad/s", "rotational velocity", "angle per time", "mechanical"]
  },
  {
    id: "centrifugal-force-calc",
    slug: "centrifugal-force-calc",
    title: "Centrifugal Force Calculator",
    name: "Centrifugal Force Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate apparent centrifugal force on a rotating mass.",
    formula: "F_cf = m × ω² × r",
    outputUnit: "Newtons (N)",
    assumptions: ["Rotating frame of reference", "Fixed rotation radius r"],
    inputs: [
      { name: "mass", label: "Mass (m)", unit: "Kilograms (kg)", defaultValue: 20 },
      { name: "omega", label: "Angular Velocity (ω)", unit: "rad/s", defaultValue: 80 },
      { name: "radius", label: "Radius (r)", unit: "Meters (m)", defaultValue: 0.4 }
    ],
    calculate: (inputs) => (inputs.mass || 0) * Math.pow(inputs.omega || 0, 2) * (inputs.radius || 0),
    route: "/engineering-calculators/mechanical-calc/centrifugal-force-calc",
    seo: {
      title: "Centrifugal Force Calculator | Mechanical Engineering",
      description: "Calculate centrifugal force in Newtons on rotating mass from angular speed and radius.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/centrifugal-force-calc",
      keywords: ["centrifugal force", "f=m w2 r", "rotating frame force", "outward rotational force", "mechanical"]
    },
    searchKeywords: ["centrifugal force", "f=m w2 r", "rotating frame force", "outward rotational force", "mechanical"]
  },
  {
    id: "rotational-inertia-calc",
    slug: "rotational-inertia-calc",
    title: "Rotational Inertia Calculator",
    name: "Rotational Inertia Calculator",
    discipline: "Mechanical",
    disciplineId: "mechanical-calc",
    description: "Calculate moment of inertia for a solid cylindrical disc rotating about its central axis.",
    formula: "I = ½ × m × r²",
    outputUnit: "kg·m²",
    assumptions: ["Uniform density solid cylinder or disc", "Central axis rotation"],
    inputs: [
      { name: "mass", label: "Mass (m)", unit: "Kilograms (kg)", defaultValue: 15 },
      { name: "radius", label: "Radius (r)", unit: "Meters (m)", defaultValue: 0.25 }
    ],
    calculate: (inputs) => 0.5 * (inputs.mass || 0) * Math.pow(inputs.radius || 0, 2),
    route: "/engineering-calculators/mechanical-calc/rotational-inertia-calc",
    seo: {
      title: "Rotational Inertia Calculator | Mechanical Engineering",
      description: "Calculate rotational moment of inertia in kg·m² for solid cylindrical discs.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mechanical-calc/rotational-inertia-calc",
      keywords: ["rotational inertia", "moment of inertia cylinder", "1/2 mr2", "disc inertia", "mechanical"]
    },
    searchKeywords: ["rotational inertia", "moment of inertia cylinder", "1/2 mr2", "disc inertia", "mechanical"]
  },

  // --- CIVIL ENGINEERING ---
  {
    id: "concrete-volume",
    slug: "concrete-volume",
    title: "Concrete Volume Calculator",
    name: "Concrete Volume Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate required concrete volume and bag counts for slab pours.",
    formula: "Volume = L × W × H",
    outputUnit: "Cubic Meters (m³)",
    assumptions: ["Uniform thickness", "5% site spillage/waste allowance included"],
    inputs: [
      { name: "length", label: "Slab Length", unit: "Meters (m)", defaultValue: 10 },
      { name: "width", label: "Slab Width", unit: "Meters (m)", defaultValue: 5 },
      { name: "thickness", label: "Slab Thickness", unit: "Meters (m)", defaultValue: 0.15 }
    ],
    calculate: (inputs) => (inputs.length || 0) * (inputs.width || 0) * (inputs.thickness || 0) * 1.05,
    route: "/engineering-calculators/civil-calc/concrete-volume",
    seo: {
      title: "Concrete Volume Calculator | Civil Engineering",
      description: "Estimate cubic yardage and cubic meters of ready-mix concrete for construction slabs.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/concrete-volume",
      keywords: ["concrete volume", "slab concrete", "cubic meters concrete", "construction pour"]
    },
    searchKeywords: ["concrete volume", "slab", "cubic meters", "ready mix", "civil pour"]
  },
  {
    id: "rebar-weight",
    slug: "rebar-weight",
    title: "Steel Rebar Mass Calculator",
    name: "Steel Rebar Mass Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Determine total weight of steel reinforcing rebar from bar diameter and total length.",
    formula: "Weight = (D² / 162) × Length",
    outputUnit: "Kilograms (kg)",
    assumptions: ["Standard carbon steel density (7850 kg/m³)", "Nominal bar diameter"],
    inputs: [
      { name: "diameter", label: "Bar Diameter (D)", unit: "Millimeters (mm)", defaultValue: 16 },
      { name: "length", label: "Total Bar Length", unit: "Meters (m)", defaultValue: 120 }
    ],
    calculate: (inputs) => {
      const d = inputs.diameter || 0;
      return ((d * d) / 162) * (inputs.length || 0);
    },
    route: "/engineering-calculators/civil-calc/rebar-weight",
    seo: {
      title: "Steel Rebar Mass Calculator | Civil Engineering",
      description: "Calculate reinforcing bar steel tonnage and kilogram mass for structural concrete.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/rebar-weight",
      keywords: ["rebar weight", "steel rebar mass", "reinforcing bar", "rebar diameter"]
    },
    searchKeywords: ["rebar weight", "steel rebar", "bar diameter", "reinforcement", "civil steel"]
  },
  {
    id: "concrete-slab-calc",
    slug: "concrete-slab-calc",
    title: "Concrete Slab Calculator",
    name: "Concrete Slab Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate required concrete volume and bag counts for rectangular concrete slabs.",
    formula: "Volume = Length × Width × Thickness × (1 + Waste%)",
    outputUnit: "Cubic Meters (m³)",
    assumptions: ["Uniform thickness", "Includes waste/spillage allowance"],
    inputs: [
      { name: "length", label: "Slab Length", unit: "Meters (m)", defaultValue: 10 },
      { name: "width", label: "Slab Width", unit: "Meters (m)", defaultValue: 6 },
      { name: "thickness", label: "Slab Thickness", unit: "Meters (m)", defaultValue: 0.15 },
      { name: "waste", label: "Waste Allowance", unit: "Percent (%)", defaultValue: 5 }
    ],
    calculate: (inputs) => (inputs.length || 0) * (inputs.width || 0) * (inputs.thickness || 0) * (1 + (inputs.waste || 5) / 100),
    route: "/engineering-calculators/civil-calc/concrete-slab-calc",
    seo: {
      title: "Concrete Slab Calculator | Civil Engineering",
      description: "Calculate total cubic meters of ready-mix concrete for slab pours.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/concrete-slab-calc",
      keywords: ["concrete slab calculator", "slab volume", "concrete cubic meters", "slab pour", "civil"]
    },
    searchKeywords: ["concrete slab calculator", "slab volume", "concrete cubic meters", "slab pour", "civil"]
  },
  {
    id: "concrete-footing-calc",
    slug: "concrete-footing-calc",
    title: "Concrete Footing Calculator",
    name: "Concrete Footing Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate total concrete volume required for strip or pad foundation footings.",
    formula: "Volume = Length × Width × Depth × Quantity × 1.05",
    outputUnit: "Cubic Meters (m³)",
    assumptions: ["Prismatic footing geometry", "5% site waste factor"],
    inputs: [
      { name: "length", label: "Footing Length", unit: "Meters (m)", defaultValue: 5 },
      { name: "width", label: "Footing Width", unit: "Meters (m)", defaultValue: 1 },
      { name: "depth", label: "Footing Depth", unit: "Meters (m)", defaultValue: 0.5 },
      { name: "quantity", label: "Number of Footings", unit: "Count", defaultValue: 4 }
    ],
    calculate: (inputs) => (inputs.length || 0) * (inputs.width || 0) * (inputs.depth || 0) * (inputs.quantity || 1) * 1.05,
    route: "/engineering-calculators/civil-calc/concrete-footing-calc",
    seo: {
      title: "Concrete Footing Calculator | Civil Engineering",
      description: "Calculate concrete volume for strip footings and foundation pads.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/concrete-footing-calc",
      keywords: ["concrete footing calculator", "footing volume", "foundation concrete", "pad footing", "civil"]
    },
    searchKeywords: ["concrete footing calculator", "footing volume", "foundation concrete", "pad footing", "civil"]
  },
  {
    id: "concrete-column-calc",
    slug: "concrete-column-calc",
    title: "Concrete Column Calculator",
    name: "Concrete Column Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate concrete volume required for structural columns.",
    formula: "Volume = Height × Width × Depth × Count × 1.05",
    outputUnit: "Cubic Meters (m³)",
    assumptions: ["Rectangular column cross section", "5% placement spillage waste"],
    inputs: [
      { name: "height", label: "Column Height", unit: "Meters (m)", defaultValue: 3.5 },
      { name: "width", label: "Column Width", unit: "Meters (m)", defaultValue: 0.4 },
      { name: "depth", label: "Column Depth", unit: "Meters (m)", defaultValue: 0.4 },
      { name: "count", label: "Column Count", unit: "Count", defaultValue: 6 }
    ],
    calculate: (inputs) => (inputs.height || 0) * (inputs.width || 0) * (inputs.depth || 0) * (inputs.count || 1) * 1.05,
    route: "/engineering-calculators/civil-calc/concrete-column-calc",
    seo: {
      title: "Concrete Column Calculator | Civil Engineering",
      description: "Calculate total concrete volume for rectangular structural columns.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/concrete-column-calc",
      keywords: ["concrete column calculator", "column concrete volume", "pillar concrete", "structural column", "civil"]
    },
    searchKeywords: ["concrete column calculator", "column concrete volume", "pillar concrete", "structural column", "civil"]
  },
  {
    id: "brick-quantity-calc",
    slug: "brick-quantity-calc",
    title: "Brick Quantity Calculator",
    name: "Brick Quantity Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate required standard masonry bricks and mortar allowance for walls.",
    formula: "Bricks = [Wall Area / ((L + Joint) × (H + Joint))] × 1.05",
    outputUnit: "Count",
    assumptions: ["Single-wythe wall construction", "5% cutting waste included"],
    inputs: [
      { name: "wallLength", label: "Wall Length", unit: "Meters (m)", defaultValue: 10 },
      { name: "wallHeight", label: "Wall Height", unit: "Meters (m)", defaultValue: 3 },
      { name: "brickLength", label: "Brick Length", unit: "Meters (m)", defaultValue: 0.23 },
      { name: "brickHeight", label: "Brick Height", unit: "Meters (m)", defaultValue: 0.075 },
      { name: "joint", label: "Mortar Joint Thickness", unit: "Meters (m)", defaultValue: 0.01 }
    ],
    calculate: (inputs) => {
      const bl = (inputs.brickLength || 0.23) + (inputs.joint || 0.01);
      const bh = (inputs.brickHeight || 0.075) + (inputs.joint || 0.01);
      const wallArea = (inputs.wallLength || 0) * (inputs.wallHeight || 0);
      return bl && bh ? Math.ceil((wallArea / (bl * bh)) * 1.05) : 0;
    },
    route: "/engineering-calculators/civil-calc/brick-quantity-calc",
    seo: {
      title: "Brick Quantity Calculator | Civil Engineering",
      description: "Estimate total bricks required for masonry wall construction.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/brick-quantity-calc",
      keywords: ["brick quantity calculator", "how many bricks", "masonry wall brick count", "brickwork calculator", "civil"]
    },
    searchKeywords: ["brick quantity calculator", "how many bricks", "masonry wall brick count", "brickwork calculator", "civil"]
  },
  {
    id: "block-quantity-calc",
    slug: "block-quantity-calc",
    title: "Block Quantity Calculator",
    name: "Block Quantity Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate hollow concrete blocks (CMU) needed for building walls.",
    formula: "Blocks = [Wall Area / ((L + Joint) × (H + Joint))] × 1.05",
    outputUnit: "Count",
    assumptions: ["Standard CMU unit size", "5% break/cutting waste factor"],
    inputs: [
      { name: "wallLength", label: "Wall Length", unit: "Meters (m)", defaultValue: 15 },
      { name: "wallHeight", label: "Wall Height", unit: "Meters (m)", defaultValue: 2.8 },
      { name: "blockLength", label: "Block Length", unit: "Meters (m)", defaultValue: 0.39 },
      { name: "blockHeight", label: "Block Height", unit: "Meters (m)", defaultValue: 0.19 },
      { name: "joint", label: "Mortar Joint", unit: "Meters (m)", defaultValue: 0.01 }
    ],
    calculate: (inputs) => {
      const bl = (inputs.blockLength || 0.39) + (inputs.joint || 0.01);
      const bh = (inputs.blockHeight || 0.19) + (inputs.joint || 0.01);
      const wallArea = (inputs.wallLength || 0) * (inputs.wallHeight || 0);
      return bl && bh ? Math.ceil((wallArea / (bl * bh)) * 1.05) : 0;
    },
    route: "/engineering-calculators/civil-calc/block-quantity-calc",
    seo: {
      title: "Block Quantity Calculator | Civil Engineering",
      description: "Calculate concrete hollow block count for wall construction projects.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/block-quantity-calc",
      keywords: ["block quantity calculator", "cmu block count", "concrete block wall", "cmu calculator", "civil"]
    },
    searchKeywords: ["block quantity calculator", "cmu block count", "concrete block wall", "cmu calculator", "civil"]
  },
  {
    id: "concrete-mix-proportions",
    slug: "concrete-mix-proportions",
    title: "Cement, Sand & Aggregate Mix Calculator",
    name: "Cement, Sand & Aggregate Mix Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate required weight of cement, fine aggregate, and coarse aggregate for concrete mix ratios.",
    formula: "Dry Volume = Wet Volume × 1.54; Cement (kg) = (C / Sum Parts) × Dry Vol × 1440",
    outputUnit: "Kilograms (kg)",
    assumptions: ["Volumetric dry factor = 1.54", "Cement bulk density = 1440 kg/m³"],
    inputs: [
      { name: "volume", label: "Wet Concrete Volume", unit: "Cubic Meters (m³)", defaultValue: 5 },
      { name: "cement", label: "Cement Parts", unit: "Ratio Part", defaultValue: 1 },
      { name: "sand", label: "Sand Parts", unit: "Ratio Part", defaultValue: 2 },
      { name: "aggregate", label: "Aggregate Parts", unit: "Ratio Part", defaultValue: 4 }
    ],
    calculate: (inputs) => {
      const wetV = inputs.volume || 0;
      const c = inputs.cement || 1;
      const s = inputs.sand || 2;
      const a = inputs.aggregate || 4;
      const totalRatio = c + s + a;
      const dryV = wetV * 1.54;
      return totalRatio > 0 ? (c / totalRatio) * dryV * 1440 : 0;
    },
    route: "/engineering-calculators/civil-calc/concrete-mix-proportions",
    seo: {
      title: "Cement, Sand & Aggregate Mix Calculator | Civil Engineering",
      description: "Calculate cement, sand, and aggregate batch masses for concrete mixes.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/concrete-mix-proportions",
      keywords: ["concrete mix calculator", "cement sand aggregate ratio", "concrete mix batching", "civil concrete design"]
    },
    searchKeywords: ["concrete mix calculator", "cement sand aggregate ratio", "concrete mix batching", "civil concrete design"]
  },
  {
    id: "excavation-volume-calc",
    slug: "excavation-volume-calc",
    title: "Excavation Volume Calculator",
    name: "Excavation Volume Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate total soil excavation volume including soil swell/bulking expansion factor.",
    formula: "Volume = Length × Width × Depth × Swell Factor",
    outputUnit: "Cubic Meters (m³)",
    assumptions: ["Rectangular excavation pit/trench", "Constant swell factor"],
    inputs: [
      { name: "length", label: "Excavation Length", unit: "Meters (m)", defaultValue: 12 },
      { name: "width", label: "Excavation Width", unit: "Meters (m)", defaultValue: 4 },
      { name: "depth", label: "Excavation Depth", unit: "Meters (m)", defaultValue: 2 },
      { name: "swell", label: "Swell Factor", unit: "Multiplier", defaultValue: 1.2 }
    ],
    calculate: (inputs) => (inputs.length || 0) * (inputs.width || 0) * (inputs.depth || 0) * (inputs.swell || 1.2),
    route: "/engineering-calculators/civil-calc/excavation-volume-calc",
    seo: {
      title: "Excavation Volume Calculator | Civil Engineering",
      description: "Calculate total loose soil earthwork excavation volume with swell factors.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/excavation-volume-calc",
      keywords: ["excavation volume calculator", "earthwork volume", "soil swell factor", "trench excavation", "civil"]
    },
    searchKeywords: ["excavation volume calculator", "earthwork volume", "soil swell factor", "trench excavation", "civil"]
  },
  {
    id: "earth-fill-volume",
    slug: "earth-fill-volume",
    title: "Earth Fill Volume Calculator",
    name: "Earth Fill Volume Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate required loose soil volume required for compacted backfill earthwork.",
    formula: "Loose Volume = Length × Width × Fill Depth × Compaction Factor",
    outputUnit: "Cubic Meters (m³)",
    assumptions: ["Uniform lift depth", "Compaction factor 1.2 - 1.3"],
    inputs: [
      { name: "length", label: "Fill Area Length", unit: "Meters (m)", defaultValue: 20 },
      { name: "width", label: "Fill Area Width", unit: "Meters (m)", defaultValue: 15 },
      { name: "depth", label: "Compacted Fill Depth", unit: "Meters (m)", defaultValue: 0.8 },
      { name: "compaction", label: "Compaction Shrinkage Factor", unit: "Multiplier", defaultValue: 1.25 }
    ],
    calculate: (inputs) => (inputs.length || 0) * (inputs.width || 0) * (inputs.depth || 0) * (inputs.compaction || 1.25),
    route: "/engineering-calculators/civil-calc/earth-fill-volume",
    seo: {
      title: "Earth Fill Volume Calculator | Civil Engineering",
      description: "Calculate loose soil volume needed for compacted earth fill and embankment.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/earth-fill-volume",
      keywords: ["earth fill volume calculator", "compacted fill volume", "backfill earthwork", "soil volume", "civil"]
    },
    searchKeywords: ["earth fill volume calculator", "compacted fill volume", "backfill earthwork", "soil volume", "civil"]
  },
  {
    id: "asphalt-quantity-calc",
    slug: "asphalt-quantity-calc",
    title: "Asphalt Quantity Calculator",
    name: "Asphalt Quantity Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate required asphalt weight in metric tonnes for road and driveway paving.",
    formula: "Mass = Length × Width × Thickness × Density (2.35 t/m³)",
    outputUnit: "Tonnes (t)",
    assumptions: ["Compacted hot mix asphalt density = 2.35 t/m³"],
    inputs: [
      { name: "length", label: "Pavement Length", unit: "Meters (m)", defaultValue: 50 },
      { name: "width", label: "Pavement Width", unit: "Meters (m)", defaultValue: 6 },
      { name: "thickness", label: "Compacted Thickness", unit: "Meters (m)", defaultValue: 0.08 },
      { name: "density", label: "Asphalt Density", unit: "t/m³", defaultValue: 2.35 }
    ],
    calculate: (inputs) => (inputs.length || 0) * (inputs.width || 0) * (inputs.thickness || 0) * (inputs.density || 2.35),
    route: "/engineering-calculators/civil-calc/asphalt-quantity-calc",
    seo: {
      title: "Asphalt Quantity Calculator | Civil Engineering",
      description: "Calculate hot mix asphalt tonnage required for highway and driveway paving.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/asphalt-quantity-calc",
      keywords: ["asphalt quantity calculator", "asphalt tonnage", "paving asphalt weight", "road paving", "civil"]
    },
    searchKeywords: ["asphalt quantity calculator", "asphalt tonnage", "paving asphalt weight", "road paving", "civil"]
  },
  {
    id: "paint-coverage-calc",
    slug: "paint-coverage-calc",
    title: "Paint Coverage Calculator",
    name: "Paint Coverage Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate total paint volume in Liters for interior/exterior surface area.",
    formula: "Liters = (Surface Area / Spreading Rate) × Number of Coats",
    outputUnit: "Liters (L)",
    assumptions: ["Smooth prepared substrate surface", "Constant paint spreading rate"],
    inputs: [
      { name: "area", label: "Surface Area", unit: "Square Meters (m²)", defaultValue: 120 },
      { name: "coverage", label: "Paint Spreading Rate", unit: "m²/L", defaultValue: 10 },
      { name: "coats", label: "Number of Coats", unit: "Count", defaultValue: 2 }
    ],
    calculate: (inputs) => (inputs.coverage ? ((inputs.area || 0) / inputs.coverage) * (inputs.coats || 2) : 0),
    route: "/engineering-calculators/civil-calc/paint-coverage-calc",
    seo: {
      title: "Paint Coverage Calculator | Civil Engineering",
      description: "Calculate paint litres needed for wall and ceiling finishing coats.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/paint-coverage-calc",
      keywords: ["paint coverage calculator", "paint liters needed", "wall paint calculation", "paint coats", "civil"]
    },
    searchKeywords: ["paint coverage calculator", "paint liters needed", "wall paint calculation", "paint coats", "civil"]
  },
  {
    id: "tile-quantity-calc",
    slug: "tile-quantity-calc",
    title: "Tile Quantity Calculator",
    name: "Tile Quantity Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate required floor or wall tiles including cutting and corner waste.",
    formula: "Tiles = [Room Area / (Tile L × Tile W)] × (1 + Waste%)",
    outputUnit: "Count",
    assumptions: ["Grid tile layout", "Includes cutting waste allowance"],
    inputs: [
      { name: "roomArea", label: "Room Surface Area", unit: "Square Meters (m²)", defaultValue: 45 },
      { name: "tileLength", label: "Tile Length", unit: "Meters (m)", defaultValue: 0.6 },
      { name: "tileWidth", label: "Tile Width", unit: "Meters (m)", defaultValue: 0.6 },
      { name: "waste", label: "Waste Allowance", unit: "Percent (%)", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      const ta = (inputs.tileLength || 0.6) * (inputs.tileWidth || 0.6);
      const ra = inputs.roomArea || 0;
      const w = 1 + (inputs.waste || 10) / 100;
      return ta > 0 ? Math.ceil((ra / ta) * w) : 0;
    },
    route: "/engineering-calculators/civil-calc/tile-quantity-calc",
    seo: {
      title: "Tile Quantity Calculator | Civil Engineering",
      description: "Calculate total tiles required for floor and wall tiling projects.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/tile-quantity-calc",
      keywords: ["tile quantity calculator", "how many tiles", "floor tile count", "wall tile calculator", "civil"]
    },
    searchKeywords: ["tile quantity calculator", "how many tiles", "floor tile count", "wall tile calculator", "civil"]
  },
  {
    id: "plaster-material-calc",
    slug: "plaster-material-calc",
    title: "Plaster Material Calculator",
    name: "Plaster Material Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate cement bags required for wall plastering mortar layer.",
    formula: "Dry Vol = Area × Thickness × 1.35; Bags = (1 / Mix Parts) × Dry Vol × 28.8",
    outputUnit: "Bags (50kg)",
    assumptions: ["Standard 50kg cement bag", "1.35 dry factor allowance"],
    inputs: [
      { name: "area", label: "Wall Surface Area", unit: "Square Meters (m²)", defaultValue: 100 },
      { name: "thickness", label: "Plaster Thickness", unit: "Meters (m)", defaultValue: 0.012 },
      { name: "sandRatio", label: "Sand Ratio Parts (1:N)", unit: "Ratio Part", defaultValue: 4 }
    ],
    calculate: (inputs) => {
      const area = inputs.area || 0;
      const th = inputs.thickness || 0.012;
      const ratio = 1 + (inputs.sandRatio || 4);
      const dryV = area * th * 1.35;
      return (dryV / ratio) * (1440 / 50);
    },
    route: "/engineering-calculators/civil-calc/plaster-material-calc",
    seo: {
      title: "Plaster Material Calculator | Civil Engineering",
      description: "Calculate cement bags for wall and ceiling plastering render.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/plaster-material-calc",
      keywords: ["plaster material calculator", "cement for plaster", "wall rendering cement", "plastering mortar", "civil"]
    },
    searchKeywords: ["plaster material calculator", "cement for plaster", "wall rendering cement", "plastering mortar", "civil"]
  },
  {
    id: "roof-area-calc",
    slug: "roof-area-calc",
    title: "Roof Area Calculator",
    name: "Roof Area Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate sloped roof surface area from building footprint and pitch angle.",
    formula: "Roof Area = (Footprint Area + Overhang Area) / cos(Pitch Angle)",
    outputUnit: "Square Meters (m²)",
    assumptions: ["Symmetrical gable or hip roof pitch", "Uniform pitch slope angle"],
    inputs: [
      { name: "footprint", label: "Building Footprint Area", unit: "Square Meters (m²)", defaultValue: 120 },
      { name: "pitch", label: "Roof Pitch Angle", unit: "Degrees (°)", defaultValue: 30 },
      { name: "overhang", label: "Overhang Area Allowance", unit: "Square Meters (m²)", defaultValue: 15 }
    ],
    calculate: (inputs) => {
      const rad = ((inputs.pitch || 30) * Math.PI) / 180;
      const cosPitch = Math.cos(rad);
      return cosPitch > 0 ? ((inputs.footprint || 0) + (inputs.overhang || 0)) / cosPitch : 0;
    },
    route: "/engineering-calculators/civil-calc/roof-area-calc",
    seo: {
      title: "Roof Area Calculator | Civil Engineering",
      description: "Calculate true sloped roof surface area from pitch angle and footprint.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/roof-area-calc",
      keywords: ["roof area calculator", "pitched roof surface area", "roof pitch multiplier", "roofing calculator", "civil"]
    },
    searchKeywords: ["roof area calculator", "pitched roof surface area", "roof pitch multiplier", "roofing calculator", "civil"]
  },
  {
    id: "stair-stringer-calc",
    slug: "stair-stringer-calc",
    title: "Stair Calculator",
    name: "Stair Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate total stair horizontal run length and step count for staircase layout.",
    formula: "Count = Round(Total Height / Target Riser); Total Run = (Count - 1) × Tread Depth",
    outputUnit: "Meters (m)",
    assumptions: ["Standard building code riser height bounds (150-200mm)", "Equal risers"],
    inputs: [
      { name: "totalHeight", label: "Floor-to-Floor Height", unit: "Meters (m)", defaultValue: 2.8 },
      { name: "targetRiser", label: "Target Riser Height", unit: "Meters (m)", defaultValue: 0.175 },
      { name: "treadDepth", label: "Tread Depth", unit: "Meters (m)", defaultValue: 0.28 }
    ],
    calculate: (inputs) => {
      const targetR = inputs.targetRiser || 0.175;
      const totalH = inputs.totalHeight || 0;
      const tread = inputs.treadDepth || 0.28;
      const count = targetR > 0 ? Math.round(totalH / targetR) : 0;
      return count > 1 ? (count - 1) * tread : 0;
    },
    route: "/engineering-calculators/civil-calc/stair-stringer-calc",
    seo: {
      title: "Stair Calculator | Civil Engineering",
      description: "Calculate staircase riser counts and total horizontal run dimension.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/stair-stringer-calc",
      keywords: ["stair calculator", "stair riser tread", "stair stringer run", "staircase design", "civil"]
    },
    searchKeywords: ["stair calculator", "stair riser tread", "stair stringer run", "staircase design", "civil"]
  },
  {
    id: "foundation-load-calc",
    slug: "foundation-load-calc",
    title: "Foundation Load Calculator",
    name: "Foundation Load Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate total design gravity load applied to foundation footings.",
    formula: "Design Load = (Dead Load + Live Load) × Safety Factor",
    outputUnit: "Kilonewtons (kN)",
    assumptions: ["Concentric axial column load", "Constant dead and live load combination factor"],
    inputs: [
      { name: "deadLoad", label: "Structural Dead Load", unit: "Kilonewtons (kN)", defaultValue: 450 },
      { name: "liveLoad", label: "Occupancy Live Load", unit: "Kilonewtons (kN)", defaultValue: 200 },
      { name: "safetyFactor", label: "Load Safety Factor", unit: "Multiplier", defaultValue: 1.5 }
    ],
    calculate: (inputs) => ((inputs.deadLoad || 0) + (inputs.liveLoad || 0)) * (inputs.safetyFactor || 1.5),
    route: "/engineering-calculators/civil-calc/foundation-load-calc",
    seo: {
      title: "Foundation Load Calculator | Civil Engineering",
      description: "Calculate total factored design load on foundation footings.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/foundation-load-calc",
      keywords: ["foundation load calculator", "footing design load", "dead load live load", "structural load", "civil"]
    },
    searchKeywords: ["foundation load calculator", "footing design load", "dead load live load", "structural load", "civil"]
  },
  {
    id: "retaining-wall-calc",
    slug: "retaining-wall-calc",
    title: "Retaining Wall Calculator",
    name: "Retaining Wall Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate lateral active earth pressure thrust acting on a retaining wall.",
    formula: "Ka = (1 - sin φ) / (1 + sin φ); Resultant Pa = ½ × Ka × γ × H²",
    outputUnit: "kN/m",
    assumptions: ["Rankine active earth pressure theory", "Vertical wall stem back", "Cohesionless backfill soil"],
    inputs: [
      { name: "height", label: "Wall Height (H)", unit: "Meters (m)", defaultValue: 3.5 },
      { name: "weight", label: "Soil Unit Weight (γ)", unit: "kN/m³", defaultValue: 18 },
      { name: "frictionAngle", label: "Internal Friction Angle (φ)", unit: "Degrees (°)", defaultValue: 30 }
    ],
    calculate: (inputs) => {
      const phiRad = ((inputs.frictionAngle || 30) * Math.PI) / 180;
      const ka = (1 - Math.sin(phiRad)) / (1 + Math.sin(phiRad));
      const h = inputs.height || 0;
      const gamma = inputs.weight || 18;
      return 0.5 * ka * gamma * h * h;
    },
    route: "/engineering-calculators/civil-calc/retaining-wall-calc",
    seo: {
      title: "Retaining Wall Calculator | Civil Engineering",
      description: "Calculate active earth pressure thrust force on retaining walls using Rankine theory.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/retaining-wall-calc",
      keywords: ["retaining wall calculator", "active earth pressure", "rankine ka", "retaining wall force", "civil"]
    },
    searchKeywords: ["retaining wall calculator", "active earth pressure", "rankine ka", "retaining wall force", "civil"]
  },
  {
    id: "beam-load-calc",
    slug: "beam-load-calc",
    title: "Beam Load Calculator",
    name: "Beam Load Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate maximum bending moment for a simply supported beam under uniform distributed load.",
    formula: "M_max = (w × L²) / 8",
    outputUnit: "kN·m",
    assumptions: ["Simply supported beam ends", "Uniformly distributed load w"],
    inputs: [
      { name: "load", label: "Uniform Distributed Load (w)", unit: "kN/m", defaultValue: 15 },
      { name: "span", label: "Beam Span Length (L)", unit: "Meters (m)", defaultValue: 6 }
    ],
    calculate: (inputs) => ((inputs.load || 0) * Math.pow(inputs.span || 0, 2)) / 8,
    route: "/engineering-calculators/civil-calc/beam-load-calc",
    seo: {
      title: "Beam Load Calculator | Civil Engineering",
      description: "Calculate maximum bending moment in kN·m for simply supported beams.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/beam-load-calc",
      keywords: ["beam load calculator", "bending moment wL2/8", "simply supported beam", "beam flexure", "civil"]
    },
    searchKeywords: ["beam load calculator", "bending moment wL2/8", "simply supported beam", "beam flexure", "civil"]
  },
  {
    id: "column-load-calc",
    slug: "column-load-calc",
    title: "Column Load Calculator",
    name: "Column Load Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate ultimate axial compressive load capacity for reinforced concrete columns.",
    formula: "Pu = [0.85 × fck × (Ac - Ast) + fyk × Ast] / 1000",
    outputUnit: "Kilonewtons (kN)",
    assumptions: ["Short column behavior (negligible buckling)", "Standard concrete and steel material grades"],
    inputs: [
      { name: "concreteArea", label: "Gross Concrete Area (Ac)", unit: "mm²", defaultValue: 160000 },
      { name: "steelArea", label: "Rebar Steel Area (Ast)", unit: "mm²", defaultValue: 3200 },
      { name: "fck", label: "Concrete Strength (fck)", unit: "MPa", defaultValue: 30 },
      { name: "fyk", label: "Steel Strength (fyk)", unit: "MPa", defaultValue: 460 }
    ],
    calculate: (inputs) => {
      const ac = inputs.concreteArea || 160000;
      const ast = inputs.steelArea || 3200;
      const fck = inputs.fck || 30;
      const fyk = inputs.fyk || 460;
      return (0.85 * fck * (ac - ast) + fyk * ast) / 1000;
    },
    route: "/engineering-calculators/civil-calc/column-load-calc",
    seo: {
      title: "Column Load Calculator | Civil Engineering",
      description: "Calculate ultimate axial axial load capacity of reinforced concrete columns.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/column-load-calc",
      keywords: ["column load calculator", "concrete column capacity", "axial column load", "column rebar strength", "civil"]
    },
    searchKeywords: ["column load calculator", "concrete column capacity", "axial column load", "column rebar strength", "civil"]
  },
  {
    id: "reinforcement-spacing-calc",
    slug: "reinforcement-spacing-calc",
    title: "Reinforcement Spacing Calculator",
    name: "Reinforcement Spacing Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate center-to-center rebar bar spacing across concrete slab or beam widths.",
    formula: "Spacing = (Width - 2 × Cover - Diameter) / (Bar Count - 1)",
    outputUnit: "Millimeters (mm)",
    assumptions: ["Uniform rebar distribution", "Equal end clear cover on both sides"],
    inputs: [
      { name: "slabWidth", label: "Slab/Section Width", unit: "Millimeters (mm)", defaultValue: 2000 },
      { name: "numBars", label: "Number of Rebars", unit: "Count", defaultValue: 11 },
      { name: "cover", label: "Clear Concrete Cover", unit: "Millimeters (mm)", defaultValue: 25 },
      { name: "barDiameter", label: "Rebar Diameter", unit: "Millimeters (mm)", defaultValue: 12 }
    ],
    calculate: (inputs) => {
      const w = inputs.slabWidth || 2000;
      const n = inputs.numBars || 11;
      const cover = inputs.cover || 25;
      const d = inputs.barDiameter || 12;
      return n > 1 ? (w - 2 * cover - d) / (n - 1) : 0;
    },
    route: "/engineering-calculators/civil-calc/reinforcement-spacing-calc",
    seo: {
      title: "Reinforcement Spacing Calculator | Civil Engineering",
      description: "Calculate center-to-center rebar spacing for concrete slabs and beams.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/reinforcement-spacing-calc",
      keywords: ["reinforcement spacing calculator", "rebar spacing slab", "center to center rebar", "concrete cover", "civil"]
    },
    searchKeywords: ["reinforcement spacing calculator", "rebar spacing slab", "center to center rebar", "concrete cover", "civil"]
  },
  {
    id: "soil-bearing-pressure-calc",
    slug: "soil-bearing-pressure-calc",
    title: "Soil Bearing Pressure Calculator",
    name: "Soil Bearing Pressure Calculator",
    discipline: "Civil",
    disciplineId: "civil-calc",
    description: "Calculate uniform contact pressure applied to foundation subgrade soil.",
    formula: "Pressure q = Vertical Load P / (Footing Length × Width)",
    outputUnit: "kPa (kN/m²)",
    assumptions: ["Rigid footing base", "Uniformly distributed contact pressure"],
    inputs: [
      { name: "load", label: "Total Vertical Force (P)", unit: "Kilonewtons (kN)", defaultValue: 800 },
      { name: "length", label: "Footing Length (L)", unit: "Meters (m)", defaultValue: 2.5 },
      { name: "width", label: "Footing Width (W)", unit: "Meters (m)", defaultValue: 2.5 }
    ],
    calculate: (inputs) => {
      const area = (inputs.length || 0) * (inputs.width || 0);
      return area > 0 ? (inputs.load || 0) / area : 0;
    },
    route: "/engineering-calculators/civil-calc/soil-bearing-pressure-calc",
    seo: {
      title: "Soil Bearing Pressure Calculator | Civil Engineering",
      description: "Calculate applied foundation soil contact pressure in kPa.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/civil-calc/soil-bearing-pressure-calc",
      keywords: ["soil bearing pressure calculator", "foundation soil contact pressure", "footing pressure kpa", "subgrade load", "civil"]
    },
    searchKeywords: ["soil bearing pressure calculator", "foundation soil contact pressure", "footing pressure kpa", "subgrade load", "civil"]
  },

  // --- PHYSICS ---
  {
    id: "force-calc",
    slug: "force-calc",
    title: "Force Calculator (Newton's 2nd Law)",
    name: "Force Calculator (Newton's 2nd Law)",
    discipline: "Physics",
    disciplineId: "physics-calc",
    description: "Calculate net acceleration force on a rigid mass.",
    formula: "F = m × a",
    outputUnit: "Newtons (N)",
    assumptions: ["Constant mass", "Inertial frame of reference"],
    inputs: [
      { name: "mass", label: "Mass (m)", unit: "Kilograms (kg)", defaultValue: 75 },
      { name: "accel", label: "Acceleration (a)", unit: "m/s²", defaultValue: 9.81 }
    ],
    calculate: (inputs) => (inputs.mass || 0) * (inputs.accel || 0),
    route: "/engineering-calculators/physics-calc/force-calc",
    seo: {
      title: "Force Calculator (Newton's 2nd Law) | Physics",
      description: "Calculate mechanical net force in Newtons from mass and acceleration.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/physics-calc/force-calc",
      keywords: ["force calculator", "f=ma", "newtons law", "mass acceleration"]
    },
    searchKeywords: ["force", "f=ma", "newtons", "acceleration", "mass", "physics"]
  },
  {
    id: "projectile-motion",
    slug: "projectile-motion",
    title: "Projectile Range Calculator",
    name: "Projectile Range Calculator",
    discipline: "Physics",
    disciplineId: "physics-calc",
    description: "Calculate horizontal trajectory range for ballistic projectiles.",
    formula: "R = (v² × sin(2θ)) / g",
    outputUnit: "Meters (m)",
    assumptions: ["Flat terrain launch and impact", "Zero atmospheric drag"],
    inputs: [
      { name: "velocity", label: "Initial Velocity (v)", unit: "m/s", defaultValue: 50 },
      { name: "angle", label: "Launch Angle (θ)", unit: "Degrees (°)", defaultValue: 45 }
    ],
    calculate: (inputs) => {
      const v = inputs.velocity || 0;
      const rad = ((inputs.angle || 0) * Math.PI) / 180;
      return (v * v * Math.sin(2 * rad)) / 9.81;
    },
    route: "/engineering-calculators/physics-calc/projectile-motion",
    seo: {
      title: "Projectile Range Calculator | Physics",
      description: "Determine kinematic trajectory distance for launch velocity and angle.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/physics-calc/projectile-motion",
      keywords: ["projectile range", "trajectory calculator", "ballistic motion", "kinematics"]
    },
    searchKeywords: ["projectile motion", "trajectory", "launch angle", "kinematics", "range"]
  },
  {
    id: "kinetic-energy",
    slug: "kinetic-energy",
    title: "Kinetic Energy Calculator",
    name: "Kinetic Energy Calculator",
    discipline: "Physics",
    disciplineId: "physics-calc",
    description: "Calculate the kinetic energy of a moving object from its mass and velocity.",
    formula: "KE = ½ × m × v²",
    outputUnit: "Joules (J)",
    assumptions: ["Non-relativistic velocity (v ≪ c)", "Translational motion of rigid mass"],
    inputs: [
      { name: "mass", label: "Mass (m)", unit: "Kilograms (kg)", defaultValue: 10 },
      { name: "velocity", label: "Velocity (v)", unit: "m/s", defaultValue: 20 }
    ],
    calculate: (inputs) => 0.5 * (inputs.mass || 0) * Math.pow(inputs.velocity || 0, 2),
    route: "/engineering-calculators/physics-calc/kinetic-energy",
    seo: {
      title: "Kinetic Energy Calculator | Physics",
      description: "Calculate kinetic energy in Joules from object mass in kg and velocity in m/s.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/physics-calc/kinetic-energy",
      keywords: ["kinetic energy", "ke=1/2mv2", "motion energy", "mass velocity energy", "physics energy"]
    },
    searchKeywords: ["kinetic energy", "ke=1/2mv2", "motion energy", "mass velocity", "joules", "physics"]
  },
  {
    id: "potential-energy",
    slug: "potential-energy",
    title: "Gravitational Potential Energy Calculator",
    name: "Gravitational Potential Energy Calculator",
    discipline: "Physics",
    disciplineId: "physics-calc",
    description: "Calculate gravitational potential energy stored in an elevated mass.",
    formula: "PE = m × g × h",
    outputUnit: "Joules (J)",
    assumptions: ["Standard gravity g = 9.81 m/s²", "Uniform gravitational field near Earth's surface"],
    inputs: [
      { name: "mass", label: "Mass (m)", unit: "Kilograms (kg)", defaultValue: 50 },
      { name: "height", label: "Height (h)", unit: "Meters (m)", defaultValue: 10 },
      { name: "g", label: "Gravity (g)", unit: "m/s²", defaultValue: 9.81 }
    ],
    calculate: (inputs) => (inputs.mass || 0) * (inputs.g || 9.81) * (inputs.height || 0),
    route: "/engineering-calculators/physics-calc/potential-energy",
    seo: {
      title: "Gravitational Potential Energy Calculator | Physics",
      description: "Calculate gravitational potential energy in Joules from mass, height, and acceleration of gravity.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/physics-calc/potential-energy",
      keywords: ["potential energy", "pe=mgh", "gravitational energy", "stored energy", "height mass energy"]
    },
    searchKeywords: ["potential energy", "pe=mgh", "gravitational energy", "stored energy", "height mass", "physics"]
  },
  {
    id: "momentum-calc",
    slug: "momentum-calc",
    title: "Linear Momentum Calculator",
    name: "Linear Momentum Calculator",
    discipline: "Physics",
    disciplineId: "physics-calc",
    description: "Calculate linear momentum of a moving mass.",
    formula: "p = m × v",
    outputUnit: "kg·m/s",
    assumptions: ["Constant mass system", "Classical Newtonian mechanics"],
    inputs: [
      { name: "mass", label: "Mass (m)", unit: "Kilograms (kg)", defaultValue: 1200 },
      { name: "velocity", label: "Velocity (v)", unit: "m/s", defaultValue: 25 }
    ],
    calculate: (inputs) => (inputs.mass || 0) * (inputs.velocity || 0),
    route: "/engineering-calculators/physics-calc/momentum-calc",
    seo: {
      title: "Linear Momentum Calculator | Physics",
      description: "Calculate linear momentum in kg·m/s from mass and velocity.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/physics-calc/momentum-calc",
      keywords: ["momentum calculator", "p=mv", "linear momentum", "mass velocity momentum"]
    },
    searchKeywords: ["momentum", "p=mv", "linear momentum", "mass velocity", "physics"]
  },
  {
    id: "impulse-calc",
    slug: "impulse-calc",
    title: "Impulse Calculator",
    name: "Impulse Calculator",
    discipline: "Physics",
    disciplineId: "physics-calc",
    description: "Calculate change in momentum (impulse) from force applied over a time interval.",
    formula: "J = F × Δt",
    outputUnit: "N·s",
    assumptions: ["Constant average effective force during impact", "One-dimensional linear force application"],
    inputs: [
      { name: "force", label: "Applied Force (F)", unit: "Newtons (N)", defaultValue: 500 },
      { name: "time", label: "Time Interval (Δt)", unit: "Seconds (s)", defaultValue: 0.2 }
    ],
    calculate: (inputs) => (inputs.force || 0) * (inputs.time || 0),
    route: "/engineering-calculators/physics-calc/impulse-calc",
    seo: {
      title: "Impulse Calculator | Physics",
      description: "Calculate impulse in Newton-seconds from force and time duration.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/physics-calc/impulse-calc",
      keywords: ["impulse calculator", "j=f*dt", "change in momentum", "force time interval", "impact force"]
    },
    searchKeywords: ["impulse", "j=f*dt", "change in momentum", "force time", "impact force", "physics"]
  },
  {
    id: "free-fall",
    slug: "free-fall",
    title: "Free Fall Distance Calculator",
    name: "Free Fall Distance Calculator",
    discipline: "Physics",
    disciplineId: "physics-calc",
    description: "Calculate fall distance and drop displacement under free-fall gravity acceleration.",
    formula: "h = v₀ × t + ½ × g × t²",
    outputUnit: "Meters (m)",
    assumptions: ["Negligible air resistance (vacuum fall)", "Constant gravitational acceleration g = 9.81 m/s²"],
    inputs: [
      { name: "time", label: "Fall Duration (t)", unit: "Seconds (s)", defaultValue: 3 },
      { name: "v0", label: "Initial Velocity (v₀)", unit: "m/s", defaultValue: 0 },
      { name: "g", label: "Gravity (g)", unit: "m/s²", defaultValue: 9.81 }
    ],
    calculate: (inputs) => (inputs.v0 || 0) * (inputs.time || 0) + 0.5 * (inputs.g || 9.81) * Math.pow(inputs.time || 0, 2),
    route: "/engineering-calculators/physics-calc/free-fall",
    seo: {
      title: "Free Fall Distance Calculator | Physics",
      description: "Calculate drop displacement distance in meters for free fall under gravity.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/physics-calc/free-fall",
      keywords: ["free fall calculator", "gravity fall", "falling body distance", "h=1/2gt2", "drop distance"]
    },
    searchKeywords: ["free fall", "gravity fall", "falling body", "h=1/2gt2", "drop distance", "physics"]
  },
  {
    id: "centripetal-force",
    slug: "centripetal-force",
    title: "Centripetal Force Calculator",
    name: "Centripetal Force Calculator",
    discipline: "Physics",
    disciplineId: "physics-calc",
    description: "Calculate inward centripetal force required for circular motion.",
    formula: "Fc = (m × v²) / r",
    outputUnit: "Newtons (N)",
    assumptions: ["Uniform circular motion", "Constant tangential speed and motion radius"],
    inputs: [
      { name: "mass", label: "Mass (m)", unit: "Kilograms (kg)", defaultValue: 1000 },
      { name: "velocity", label: "Tangential Velocity (v)", unit: "m/s", defaultValue: 20 },
      { name: "radius", label: "Radius (r)", unit: "Meters (m)", defaultValue: 50 }
    ],
    calculate: (inputs) => (inputs.radius ? ((inputs.mass || 0) * Math.pow(inputs.velocity || 0, 2)) / inputs.radius : 0),
    route: "/engineering-calculators/physics-calc/centripetal-force",
    seo: {
      title: "Centripetal Force Calculator | Physics",
      description: "Calculate centripetal force in Newtons for circular motion from mass, velocity, and radius.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/physics-calc/centripetal-force",
      keywords: ["centripetal force", "fc=mv2/r", "circular motion", "orbital force", "tangential speed"]
    },
    searchKeywords: ["centripetal force", "fc=mv2/r", "circular motion", "orbital force", "tangential speed", "physics"]
  },
  {
    id: "escape-velocity",
    slug: "escape-velocity",
    title: "Escape Velocity Calculator",
    name: "Escape Velocity Calculator",
    discipline: "Physics",
    disciplineId: "physics-calc",
    description: "Calculate minimum speed required to break free from celestial gravitational attraction.",
    formula: "Ve = √(2 × G × M / R)",
    outputUnit: "m/s",
    assumptions: ["Newtonian point-mass spherical gravity", "Gravitational constant G = 6.6743 × 10⁻¹¹ m³/(kg·s²)", "Negligible atmospheric drag"],
    inputs: [
      { name: "mass", label: "Celestial Mass (M)", unit: "Kilograms (kg)", defaultValue: 5.972e24 },
      { name: "radius", label: "Body Radius (R)", unit: "Meters (m)", defaultValue: 6371000 }
    ],
    calculate: (inputs) => {
      const G = 6.6743e-11;
      const m = inputs.mass || 0;
      const r = inputs.radius || 0;
      return r > 0 ? Math.sqrt((2 * G * m) / r) : 0;
    },
    route: "/engineering-calculators/physics-calc/escape-velocity",
    seo: {
      title: "Escape Velocity Calculator | Physics",
      description: "Calculate celestial escape velocity in m/s from body mass and radius.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/physics-calc/escape-velocity",
      keywords: ["escape velocity", "ve=sqrt(2gm/r)", "gravitational escape", "orbital speed", "space physics"]
    },
    searchKeywords: ["escape velocity", "ve=sqrt(2gm/r)", "gravitational escape", "orbital velocity", "space physics", "astrophysics"]
  },
  {
    id: "gravitational-force",
    slug: "gravitational-force",
    title: "Universal Gravitational Force Calculator",
    name: "Universal Gravitational Force Calculator",
    discipline: "Physics",
    disciplineId: "physics-calc",
    description: "Calculate Newton's universal gravitational attraction force between two masses.",
    formula: "F = G × (m₁ × m₂) / r²",
    outputUnit: "Newtons (N)",
    assumptions: ["Point mass or spherical bodies approximation", "G = 6.6743 × 10⁻¹¹ m³/(kg·s²)"],
    inputs: [
      { name: "m1", label: "Mass 1 (m₁)", unit: "Kilograms (kg)", defaultValue: 5.972e24 },
      { name: "m2", label: "Mass 2 (m₂)", unit: "Kilograms (kg)", defaultValue: 70 },
      { name: "r", label: "Center Distance (r)", unit: "Meters (m)", defaultValue: 6371000 }
    ],
    calculate: (inputs) => {
      const G = 6.6743e-11;
      const r = inputs.r || 0;
      return r > 0 ? (G * (inputs.m1 || 0) * (inputs.m2 || 0)) / (r * r) : 0;
    },
    route: "/engineering-calculators/physics-calc/gravitational-force",
    seo: {
      title: "Universal Gravitational Force Calculator | Physics",
      description: "Calculate gravitational attraction force in Newtons between two masses.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/physics-calc/gravitational-force",
      keywords: ["gravitational force", "f=gm1m2/r2", "universal gravitation", "newton gravity", "attraction force"]
    },
    searchKeywords: ["gravitational force", "f=gm1m2/r2", "universal gravitation", "newton gravity", "attraction force", "physics"]
  },
  {
    id: "work-calc",
    slug: "work-calc",
    title: "Mechanical Work Calculator",
    name: "Mechanical Work Calculator",
    discipline: "Physics",
    disciplineId: "physics-calc",
    description: "Calculate mechanical work done by a force acting over a displacement distance.",
    formula: "W = F × d × cos(θ)",
    outputUnit: "Joules (J)",
    assumptions: ["Constant force magnitude", "Linear rigid displacement"],
    inputs: [
      { name: "force", label: "Applied Force (F)", unit: "Newtons (N)", defaultValue: 100 },
      { name: "distance", label: "Displacement (d)", unit: "Meters (m)", defaultValue: 15 },
      { name: "angle", label: "Angle (θ)", unit: "Degrees (°)", defaultValue: 0 }
    ],
    calculate: (inputs) => {
      const rad = ((inputs.angle || 0) * Math.PI) / 180;
      return (inputs.force || 0) * (inputs.distance || 0) * Math.cos(rad);
    },
    route: "/engineering-calculators/physics-calc/work-calc",
    seo: {
      title: "Mechanical Work Calculator | Physics",
      description: "Calculate mechanical work in Joules done by force over displacement.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/physics-calc/work-calc",
      keywords: ["mechanical work", "w=fd cos theta", "work calculator", "force distance angle", "joules work"]
    },
    searchKeywords: ["work calculator", "w=fd cos theta", "mechanical work", "force distance angle", "energy transfer", "physics"]
  },
  {
    id: "mechanical-power",
    slug: "mechanical-power",
    title: "Mechanical Power Calculator",
    name: "Mechanical Power Calculator",
    discipline: "Physics",
    disciplineId: "physics-calc",
    description: "Calculate rate of work or mechanical power output in Watts.",
    formula: "P = W / t",
    outputUnit: "Watts (W)",
    assumptions: ["Uniform rate of work performed over time interval t"],
    inputs: [
      { name: "work", label: "Work Done (W)", unit: "Joules (J)", defaultValue: 1500 },
      { name: "time", label: "Time Duration (t)", unit: "Seconds (s)", defaultValue: 5 }
    ],
    calculate: (inputs) => (inputs.time ? (inputs.work || 0) / inputs.time : 0),
    route: "/engineering-calculators/physics-calc/mechanical-power",
    seo: {
      title: "Mechanical Power Calculator | Physics",
      description: "Calculate mechanical power output in Watts from work done and time duration.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/physics-calc/mechanical-power",
      keywords: ["mechanical power", "p=w/t", "power output", "work done rate", "watts power"]
    },
    searchKeywords: ["mechanical power", "p=w/t", "power output", "work done rate", "watts", "physics"]
  },

  // --- OPTICS & LIGHT ---
  {
    id: "inverse-square-law",
    slug: "inverse-square-law",
    title: "Inverse Square Law Illuminance Calculator",
    name: "Inverse Square Law Illuminance Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Calculate light intensity reduction over distance.",
    formula: "E = I / d²",
    outputUnit: "Lux (lx)",
    assumptions: ["Isotropic point source", "Zero atmospheric absorption"],
    inputs: [
      { name: "intensity", label: "Source Intensity (I)", unit: "Candela (cd)", defaultValue: 1000 },
      { name: "distance", label: "Distance (d)", unit: "Meters (m)", defaultValue: 5 }
    ],
    calculate: (inputs) => {
      if (!inputs.distance) return 0;
      return (inputs.intensity || 0) / (inputs.distance * inputs.distance);
    },
    route: "/engineering-calculators/optics-light-calc/inverse-square-law",
    seo: {
      title: "Inverse Square Law Illuminance Calculator | Optics",
      description: "Calculate light intensity in lux at specific distances from point sources.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/inverse-square-law",
      keywords: ["inverse square law", "illuminance", "lux calculator", "candela optics"]
    },
    searchKeywords: ["inverse square law", "illuminance", "lux", "candela", "optics", "light intensity"]
  },
  {
    id: "lux-to-lumen",
    slug: "lux-to-lumen",
    title: "Luminous Flux from Lux & Area Calculator",
    name: "Luminous Flux from Lux & Area Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Calculate total luminous flux in lumens from surface illuminance and coverage area.",
    formula: "Φ = E × A",
    outputUnit: "Lumens (lm)",
    assumptions: ["Uniform illuminance across entire surface area", "Perpendicular angle of incidence"],
    inputs: [
      { name: "illuminance", label: "Illuminance (E)", unit: "Lux (lx)", defaultValue: 500 },
      { name: "area", label: "Surface Area (A)", unit: "Square Meters (m²)", defaultValue: 20 }
    ],
    calculate: (inputs) => (inputs.illuminance || 0) * (inputs.area || 0),
    route: "/engineering-calculators/optics-light-calc/lux-to-lumen",
    seo: {
      title: "Luminous Flux from Lux & Area Calculator | Optics & Light Engineering",
      description: "Calculate total luminous flux in lumens from surface illuminance and area.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/lux-to-lumen",
      keywords: ["luminous flux", "lux to lumen", "illuminance area", "lighting calculation", "lumens"]
    },
    searchKeywords: ["luminous flux", "lux to lumen", "illuminance area", "lighting calculation", "lumens"]
  },
  {
    id: "lumen-to-lux",
    slug: "lumen-to-lux",
    title: "Illuminance from Lumens & Area Calculator",
    name: "Illuminance from Lumens & Area Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Determine surface illuminance in lux from total luminous flux and target surface area.",
    formula: "E = Φ / A",
    outputUnit: "Lux (lx)",
    assumptions: ["Even distribution of light flux across surface", "Negligible reflection losses"],
    inputs: [
      { name: "lumens", label: "Luminous Flux (Φ)", unit: "Lumens (lm)", defaultValue: 10000 },
      { name: "area", label: "Surface Area (A)", unit: "Square Meters (m²)", defaultValue: 20 }
    ],
    calculate: (inputs) => (inputs.area ? (inputs.lumens || 0) / inputs.area : 0),
    route: "/engineering-calculators/optics-light-calc/lumen-to-lux",
    seo: {
      title: "Illuminance from Lumens & Area Calculator | Optics & Light Engineering",
      description: "Determine surface illuminance in lux from total luminous flux and area.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/lumen-to-lux",
      keywords: ["illuminance", "lumen to lux", "lux calculator", "surface lumens", "lighting density"]
    },
    searchKeywords: ["illuminance", "lumen to lux", "lux calculator", "surface lumens", "lighting density"]
  },
  {
    id: "candela-to-lux",
    slug: "candela-to-lux",
    title: "Illuminance from Candela & Distance Calculator",
    name: "Illuminance from Candela & Distance Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Calculate illuminance in lux from luminous intensity in candela and target distance.",
    formula: "E = I / d²",
    outputUnit: "Lux (lx)",
    assumptions: ["Point light source model", "Perpendicular light ray arrival angle"],
    inputs: [
      { name: "intensity", label: "Luminous Intensity (I)", unit: "Candela (cd)", defaultValue: 1500 },
      { name: "distance", label: "Distance (d)", unit: "Meters (m)", defaultValue: 3 }
    ],
    calculate: (inputs) => (inputs.distance ? (inputs.intensity || 0) / Math.pow(inputs.distance, 2) : 0),
    route: "/engineering-calculators/optics-light-calc/candela-to-lux",
    seo: {
      title: "Illuminance from Candela & Distance Calculator | Optics & Light",
      description: "Calculate illuminance in lux from luminous intensity in candela and distance.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/candela-to-lux",
      keywords: ["illuminance from candela", "candela to lux", "luminous intensity", "inverse square law"]
    },
    searchKeywords: ["illuminance from candela", "candela to lux", "luminous intensity", "inverse square law"]
  },
  {
    id: "lux-to-candela",
    slug: "lux-to-candela",
    title: "Required Candela from Lux & Distance Calculator",
    name: "Required Candela from Lux & Distance Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Determine required source luminous intensity in candela from target lux illuminance and distance.",
    formula: "I = E × d²",
    outputUnit: "Candela (cd)",
    assumptions: ["Isotropic or focused beam center-line intensity", "Zero air scattering"],
    inputs: [
      { name: "illuminance", label: "Illuminance (E)", unit: "Lux (lx)", defaultValue: 300 },
      { name: "distance", label: "Distance (d)", unit: "Meters (m)", defaultValue: 4 }
    ],
    calculate: (inputs) => (inputs.illuminance || 0) * Math.pow(inputs.distance || 0, 2),
    route: "/engineering-calculators/optics-light-calc/lux-to-candela",
    seo: {
      title: "Required Candela from Lux & Distance Calculator | Optics & Light",
      description: "Determine required luminous intensity in candela from lux illuminance and distance.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/lux-to-candela",
      keywords: ["required candela", "lux to candela", "lx to cd", "luminous intensity", "beam intensity"]
    },
    searchKeywords: ["required candela", "lux to candela", "lx to cd", "luminous intensity", "beam intensity"]
  },
  {
    id: "luminous-efficacy",
    slug: "luminous-efficacy",
    title: "Luminous Efficacy Calculator",
    name: "Luminous Efficacy Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Calculate energy efficiency of lighting sources in lumens per watt.",
    formula: "η = Φ / P",
    outputUnit: "Lumens per Watt (lm/W)",
    assumptions: ["Constant electrical power consumption", "Rated total initial lumen output"],
    inputs: [
      { name: "lumens", label: "Luminous Flux (Φ)", unit: "Lumens (lm)", defaultValue: 4800 },
      { name: "power", label: "Electrical Power (P)", unit: "Watts (W)", defaultValue: 40 }
    ],
    calculate: (inputs) => (inputs.power ? (inputs.lumens || 0) / inputs.power : 0),
    route: "/engineering-calculators/optics-light-calc/luminous-efficacy",
    seo: {
      title: "Luminous Efficacy Calculator | Optics & Light Engineering",
      description: "Calculate energy efficiency ratio in lumens per watt for lighting sources.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/luminous-efficacy",
      keywords: ["luminous efficacy", "lumens per watt", "lm/w", "lighting efficiency", "led efficiency"]
    },
    searchKeywords: ["luminous efficacy", "lumens per watt", "lm/w", "lighting efficiency", "led efficiency"]
  },
  {
    id: "beam-angle-coverage",
    slug: "beam-angle-coverage",
    title: "Beam Angle & Coverage Area Calculator",
    name: "Beam Angle & Coverage Area Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Calculate light cone beam spot diameter and total circular coverage area at target distance.",
    formula: "Area = π × [d × tan(θ / 2)]²  |  Spot Dia = 2 × d × tan(θ / 2)",
    outputUnit: "Square Meters Area (m²)",
    assumptions: ["Circular beam distribution profile", "Flat surface perpendicular to optical axis"],
    inputs: [
      { name: "distance", label: "Distance (d)", unit: "Meters (m)", defaultValue: 5 },
      { name: "angle", label: "Beam Angle (θ)", unit: "Degrees (°)", defaultValue: 36 }
    ],
    calculate: (inputs) => {
      const rad = ((inputs.angle || 0) * Math.PI) / 360;
      const radius = (inputs.distance || 0) * Math.tan(rad);
      return Math.PI * radius * radius;
    },
    route: "/engineering-calculators/optics-light-calc/beam-angle-coverage",
    seo: {
      title: "Beam Angle & Coverage Area Calculator | Optics & Light",
      description: "Calculate beam spot diameter and beam cone circular coverage area at specified distance.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/beam-angle-coverage",
      keywords: ["beam angle", "beam coverage", "coverage area", "spot diameter", "lighting cone"]
    },
    searchKeywords: ["beam angle", "beam coverage", "coverage area", "spot diameter", "lighting cone"]
  },
  {
    id: "irradiance-calc",
    slug: "irradiance-calc",
    title: "Irradiance Calculator",
    name: "Irradiance Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Calculate radiant power density per unit surface area in Watts per square meter.",
    formula: "Ee = P / A",
    outputUnit: "Watts / m² (W/m²)",
    assumptions: ["Uniform power distribution over target area", "Normal optical incidence"],
    inputs: [
      { name: "power", label: "Radiant Power (P)", unit: "Watts (W)", defaultValue: 100 },
      { name: "area", label: "Surface Area (A)", unit: "Square Meters (m²)", defaultValue: 2 }
    ],
    calculate: (inputs) => (inputs.area ? (inputs.power || 0) / inputs.area : 0),
    route: "/engineering-calculators/optics-light-calc/irradiance-calc",
    seo: {
      title: "Irradiance Calculator | Optics & Light Engineering",
      description: "Calculate optical radiant power density in W/m² on target surfaces.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/irradiance-calc",
      keywords: ["irradiance", "radiant power density", "w/m2", "solar flux", "optical power"]
    },
    searchKeywords: ["irradiance", "radiant power density", "w/m2", "solar flux", "optical power"]
  },
  {
    id: "radiant-intensity",
    slug: "radiant-intensity",
    title: "Radiant Intensity Calculator",
    name: "Radiant Intensity Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Calculate optical radiant flux per unit solid angle in Watts per steradian.",
    formula: "Ie = P / [2π × (1 - cos(θ/2))]",
    outputUnit: "Watts / steradian (W/sr)",
    assumptions: ["Symmetrical conical beam emission", "Uniform radiant flux distribution"],
    inputs: [
      { name: "power", label: "Radiant Power (P)", unit: "Watts (W)", defaultValue: 50 },
      { name: "beamAngle", label: "Cone Beam Angle (θ)", unit: "Degrees (°)", defaultValue: 60 }
    ],
    calculate: (inputs) => {
      const rad = ((inputs.beamAngle || 0) * Math.PI) / 360;
      const omega = 2 * Math.PI * (1 - Math.cos(rad));
      return omega ? (inputs.power || 0) / omega : 0;
    },
    route: "/engineering-calculators/optics-light-calc/radiant-intensity",
    seo: {
      title: "Radiant Intensity Calculator | Optics & Light Engineering",
      description: "Calculate optical radiant flux per unit solid angle in Watts per steradian.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/radiant-intensity",
      keywords: ["radiant intensity", "watts per steradian", "w/sr", "steradian", "radiometry"]
    },
    searchKeywords: ["radiant intensity", "watts per steradian", "w/sr", "steradian", "radiometry"]
  },
  {
    id: "photon-energy",
    slug: "photon-energy",
    title: "Photon Energy Calculator",
    name: "Photon Energy Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Calculate individual photon quantum energy from electromagnetic wavelength.",
    formula: "E = (h × c) / λ",
    outputUnit: "Electronvolts (eV)",
    assumptions: ["Vacuum light velocity c = 2.9979e8 m/s", "Planck constant h = 6.626e-34 J·s"],
    inputs: [
      { name: "wavelength", label: "Wavelength (λ)", unit: "Nanometers (nm)", defaultValue: 532 },
      { name: "photonCount", label: "Photon Count (N)", unit: "Photons", defaultValue: 1 }
    ],
    calculate: (inputs) => {
      const lam = (inputs.wavelength || 0) * 1e-9;
      if (!lam) return 0;
      const h = 6.62607015e-34;
      const c = 299792458;
      const eJoules = (h * c * (inputs.photonCount || 1)) / lam;
      return eJoules / 1.602176634e-19;
    },
    route: "/engineering-calculators/optics-light-calc/photon-energy",
    seo: {
      title: "Photon Energy Calculator | Optics & Light Engineering",
      description: "Calculate photon quantum energy in electronvolts from wavelength.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/photon-energy",
      keywords: ["photon energy", "planck constant", "wavelength energy", "ev calculator", "quantum optics"]
    },
    searchKeywords: ["photon energy", "planck constant", "wavelength energy", "ev calculator", "quantum optics"]
  },
  {
    id: "wavelength-frequency",
    slug: "wavelength-frequency",
    title: "Wavelength to Frequency Calculator",
    name: "Wavelength to Frequency Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Convert optical electromagnetic wavelength to wave frequency in Terahertz.",
    formula: "f = c / λ",
    outputUnit: "Terahertz (THz)",
    assumptions: ["Propagation in vacuum or standard atmosphere (n ≈ 1.0)", "Constant c = 2.9979e8 m/s"],
    inputs: [
      { name: "wavelength", label: "Wavelength (λ)", unit: "Nanometers (nm)", defaultValue: 632.8 },
      { name: "refractiveIndex", label: "Medium Refractive Index (n)", unit: "Ratio", defaultValue: 1.0 }
    ],
    calculate: (inputs) => {
      const n = inputs.refractiveIndex || 1.0;
      const lamMeters = (inputs.wavelength || 0) * 1e-9;
      if (!lamMeters || !n) return 0;
      const c = 299792458 / n;
      return (c / lamMeters) / 1e12;
    },
    route: "/engineering-calculators/optics-light-calc/wavelength-frequency",
    seo: {
      title: "Wavelength to Frequency Calculator | Optics & Light Engineering",
      description: "Calculate optical frequency in THz from wavelength in nanometers.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/wavelength-frequency",
      keywords: ["wavelength frequency", "thz calculator", "light frequency", "c=f*lambda", "optics wavelength"]
    },
    searchKeywords: ["wavelength frequency", "thz calculator", "light frequency", "c=f*lambda", "optics wavelength"]
  },
  {
    id: "frequency-to-wavelength",
    slug: "frequency-to-wavelength",
    title: "Frequency to Wavelength Calculator",
    name: "Frequency to Wavelength Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Calculate optical electromagnetic wavelength in nanometers from wave frequency in Terahertz.",
    formula: "λ = c / f",
    outputUnit: "Nanometers (nm)",
    assumptions: ["Propagation in vacuum or medium (n ≈ 1.0)", "Speed of light c = 2.9979e8 m/s"],
    inputs: [
      { name: "frequency", label: "Frequency (f)", unit: "Terahertz (THz)", defaultValue: 473.7 },
      { name: "refractiveIndex", label: "Medium Refractive Index (n)", unit: "Ratio", defaultValue: 1.0 }
    ],
    calculate: (inputs) => {
      const freqHz = (inputs.frequency || 0) * 1e12;
      const n = inputs.refractiveIndex || 1.0;
      if (!freqHz || !n) return 0;
      const c = 299792458 / n;
      return (c / freqHz) * 1e9;
    },
    route: "/engineering-calculators/optics-light-calc/frequency-to-wavelength",
    seo: {
      title: "Frequency to Wavelength Calculator | Optics & Light Engineering",
      description: "Calculate optical wavelength in nanometers from wave frequency in THz.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/frequency-to-wavelength",
      keywords: ["frequency to wavelength", "thz to nm", "light wavelength", "optics frequency", "lambda calculator"]
    },
    searchKeywords: ["frequency to wavelength", "thz to nm", "light wavelength", "optics frequency", "lambda calculator"]
  },
  {
    id: "kelvin-mired",
    slug: "kelvin-mired",
    title: "Color Temperature (Kelvin to Mired) Calculator",
    name: "Color Temperature (Kelvin to Mired) Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Convert light color temperature in Kelvin to micro reciprocal degrees (Mireds).",
    formula: "Mired = 1,000,000 / T",
    outputUnit: "Mireds (M)",
    assumptions: ["Planckian blackbody radiator locus", "Standard optical photography color shift scale"],
    inputs: [
      { name: "kelvin", label: "Color Temperature (T)", unit: "Kelvin (K)", defaultValue: 5500 },
      { name: "shiftFactor", label: "Filter Shift Factor", unit: "Multiplier", defaultValue: 1.0 }
    ],
    calculate: (inputs) => (inputs.kelvin ? 1000000 / (inputs.kelvin * (inputs.shiftFactor || 1.0)) : 0),
    route: "/engineering-calculators/optics-light-calc/kelvin-mired",
    seo: {
      title: "Color Temperature (Kelvin to Mired) Calculator | Optics & Light",
      description: "Convert color temperature in Kelvin to micro reciprocal degrees (Mireds).",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/kelvin-mired",
      keywords: ["kelvin mired", "color temperature", "mired scale", "mired shift", "photography lighting"]
    },
    searchKeywords: ["kelvin mired", "color temperature", "mired scale", "mired shift", "photography lighting"]
  },
  {
    id: "mired-to-kelvin",
    slug: "mired-to-kelvin",
    title: "Color Temperature (Mired to Kelvin) Calculator",
    name: "Color Temperature (Mired to Kelvin) Calculator",
    discipline: "Optics & Light",
    disciplineId: "optics-light-calc",
    description: "Convert micro reciprocal degrees (Mireds) back to color temperature in Kelvin.",
    formula: "T = 1,000,000 / Mired",
    outputUnit: "Kelvin (K)",
    assumptions: ["Planckian blackbody radiator locus", "Standard optical color temperature scale"],
    inputs: [
      { name: "mired", label: "Color Value (M)", unit: "Mireds (M)", defaultValue: 181.8 },
      { name: "shiftFactor", label: "Filter Shift Factor", unit: "Multiplier", defaultValue: 1.0 }
    ],
    calculate: (inputs) => (inputs.mired ? 1000000 / (inputs.mired * (inputs.shiftFactor || 1.0)) : 0),
    route: "/engineering-calculators/optics-light-calc/mired-to-kelvin",
    seo: {
      title: "Color Temperature (Mired to Kelvin) Calculator | Optics & Light",
      description: "Convert micro reciprocal degrees (Mireds) back to Kelvin color temperature.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/optics-light-calc/mired-to-kelvin",
      keywords: ["mired to kelvin", "color temperature", "mired scale", "kelvin calculator", "photography lighting"]
    },
    searchKeywords: ["mired to kelvin", "color temperature", "mired scale", "kelvin calculator", "photography lighting"]
  },

  // --- THERMODYNAMICS ---
  {
    id: "heat-transfer",
    slug: "heat-transfer",
    title: "Conduction Heat Transfer Calculator",
    name: "Conduction Heat Transfer Calculator",
    discipline: "Thermodynamics",
    disciplineId: "thermodynamics-calc",
    description: "Calculate Fourier conduction heat flux across flat barriers.",
    formula: "Q = (k × A × ΔT) / d",
    outputUnit: "Watts (W)",
    assumptions: ["1D steady state conduction", "Constant thermal conductivity"],
    inputs: [
      { name: "k", label: "Thermal Conductivity (k)", unit: "W/(m·K)", defaultValue: 0.8 },
      { name: "area", label: "Surface Area (A)", unit: "m²", defaultValue: 12 },
      { name: "deltaT", label: "Temperature Diff (ΔT)", unit: "Kelvin (K)", defaultValue: 25 },
      { name: "thickness", label: "Thickness (d)", unit: "Meters (m)", defaultValue: 0.1 }
    ],
    calculate: (inputs) => {
      if (!inputs.thickness) return 0;
      return ((inputs.k || 0) * (inputs.area || 0) * (inputs.deltaT || 0)) / inputs.thickness;
    },
    route: "/engineering-calculators/thermodynamics-calc/heat-transfer",
    seo: {
      title: "Conduction Heat Transfer Calculator | Thermodynamics Engineering",
      description: "Determine heat loss rate in Watts across flat thermal barrier walls.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/thermodynamics-calc/heat-transfer",
      keywords: ["conduction heat transfer", "fourier law", "thermal conductivity", "heat flux"]
    },
    searchKeywords: ["heat transfer", "conduction", "fourier law", "thermal conductivity", "thermodynamics"]
  },
  {
    id: "heat-transfer-rate",
    slug: "heat-transfer-rate",
    title: "Heat Transfer Rate Calculator",
    name: "Heat Transfer Rate Calculator",
    discipline: "Thermodynamics",
    disciplineId: "thermodynamics-calc",
    description: "Calculate total heat power transferred per unit time from thermal energy change and time duration.",
    formula: "Q_dot = ΔQ / Δt",
    outputUnit: "Watts (W)",
    assumptions: ["Uniform heat flux delivery", "Constant energy transfer rate"],
    inputs: [
      { name: "deltaQ", label: "Total Heat Energy (ΔQ)", unit: "Joules (J)", defaultValue: 500000 },
      { name: "deltaTime", label: "Time Interval (Δt)", unit: "Seconds (s)", defaultValue: 100 }
    ],
    calculate: (inputs) => (inputs.deltaTime ? (inputs.deltaQ || 0) / inputs.deltaTime : 0),
    route: "/engineering-calculators/thermodynamics-calc/heat-transfer-rate",
    seo: {
      title: "Heat Transfer Rate Calculator | Thermodynamics Engineering",
      description: "Calculate heat transfer rate in Watts from thermal energy and time interval.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/thermodynamics-calc/heat-transfer-rate",
      keywords: ["heat transfer rate", "thermal power", "joules to watts", "thermodynamic power", "heat flux rate"]
    },
    searchKeywords: ["heat transfer rate", "thermal power", "joules to watts", "thermodynamic power", "heat flux rate"]
  },
  {
    id: "convection-heat-transfer",
    slug: "convection-heat-transfer",
    title: "Convection Heat Transfer Calculator",
    name: "Convection Heat Transfer Calculator",
    discipline: "Thermodynamics",
    disciplineId: "thermodynamics-calc",
    description: "Calculate Newton's law of cooling convective heat transfer between surface and fluid.",
    formula: "Q = h × A × (Ts - T∞)",
    outputUnit: "Watts (W)",
    assumptions: ["Steady convective heat transfer coefficient h", "Uniform surface temperature Ts"],
    inputs: [
      { name: "h", label: "Heat Transfer Coeff (h)", unit: "W/(m²·K)", defaultValue: 25 },
      { name: "area", label: "Surface Area (A)", unit: "Square Meters (m²)", defaultValue: 5 },
      { name: "surfaceTemp", label: "Surface Temp (Ts)", unit: "°C or K", defaultValue: 80 },
      { name: "fluidTemp", label: "Fluid Temp (T∞)", unit: "°C or K", defaultValue: 20 }
    ],
    calculate: (inputs) => (inputs.h || 0) * (inputs.area || 0) * ((inputs.surfaceTemp || 0) - (inputs.fluidTemp || 0)),
    route: "/engineering-calculators/thermodynamics-calc/convection-heat-transfer",
    seo: {
      title: "Convection Heat Transfer Calculator | Thermodynamics Engineering",
      description: "Calculate convective heat loss rate in Watts using Newton's law of cooling.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/thermodynamics-calc/convection-heat-transfer",
      keywords: ["convection heat transfer", "newton cooling law", "heat transfer coefficient", "convective flux"]
    },
    searchKeywords: ["convection heat transfer", "newton cooling law", "heat transfer coefficient", "convective flux"]
  },
  {
    id: "radiation-heat-transfer",
    slug: "radiation-heat-transfer",
    title: "Radiation Heat Transfer Calculator",
    name: "Radiation Heat Transfer Calculator",
    discipline: "Thermodynamics",
    disciplineId: "thermodynamics-calc",
    description: "Calculate net Stefan-Boltzmann thermal radiation exchange between object and surroundings.",
    formula: "Q = ε × σ × A × (T1⁴ - T2⁴)",
    outputUnit: "Watts (W)",
    assumptions: ["Stefan-Boltzmann constant σ = 5.670374e-8 W/(m²·K⁴)", "Emissivity ε constant across wavelengths"],
    inputs: [
      { name: "emissivity", label: "Surface Emissivity (ε)", unit: "Ratio (0-1)", defaultValue: 0.9 },
      { name: "area", label: "Surface Area (A)", unit: "Square Meters (m²)", defaultValue: 2 },
      { name: "t1", label: "Object Abs Temp (T1)", unit: "Kelvin (K)", defaultValue: 500 },
      { name: "t2", label: "Surrounding Abs Temp (T2)", unit: "Kelvin (K)", defaultValue: 300 }
    ],
    calculate: (inputs) => {
      const sigma = 5.670374419e-8;
      const t1_4 = Math.pow(inputs.t1 || 0, 4);
      const t2_4 = Math.pow(inputs.t2 || 0, 4);
      return (inputs.emissivity || 0) * sigma * (inputs.area || 0) * (t1_4 - t2_4);
    },
    route: "/engineering-calculators/thermodynamics-calc/radiation-heat-transfer",
    seo: {
      title: "Radiation Heat Transfer Calculator | Thermodynamics Engineering",
      description: "Calculate net Stefan-Boltzmann thermal radiation power in Watts.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/thermodynamics-calc/radiation-heat-transfer",
      keywords: ["radiation heat transfer", "stefan boltzmann", "thermal radiation", "emissivity", "radiation power"]
    },
    searchKeywords: ["radiation heat transfer", "stefan boltzmann", "thermal radiation", "emissivity", "radiation power"]
  },
  {
    id: "specific-heat-energy",
    slug: "specific-heat-energy",
    title: "Specific Heat Energy Calculator",
    name: "Specific Heat Energy Calculator",
    discipline: "Thermodynamics",
    disciplineId: "thermodynamics-calc",
    description: "Calculate thermal energy required to change material temperature.",
    formula: "Q = m × c × ΔT",
    outputUnit: "Kilojoules (kJ)",
    assumptions: ["Constant specific heat capacity over temperature range", "No phase change occurring"],
    inputs: [
      { name: "mass", label: "Mass (m)", unit: "Kilograms (kg)", defaultValue: 10 },
      { name: "specificHeat", label: "Specific Heat (c)", unit: "J/(kg·K)", defaultValue: 4184 },
      { name: "deltaT", label: "Temp Change (ΔT)", unit: "Kelvin or °C", defaultValue: 50 }
    ],
    calculate: (inputs) => ((inputs.mass || 0) * (inputs.specificHeat || 0) * (inputs.deltaT || 0)) / 1000,
    route: "/engineering-calculators/thermodynamics-calc/specific-heat-energy",
    seo: {
      title: "Specific Heat Energy Calculator | Thermodynamics Engineering",
      description: "Calculate thermal heat energy Q in kilojoules required for temperature change.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/thermodynamics-calc/specific-heat-energy",
      keywords: ["specific heat calculator", "q=mcdeltat", "heat capacity", "thermal energy", "kilojoules"]
    },
    searchKeywords: ["specific heat calculator", "q=mcdeltat", "heat capacity", "thermal energy", "kilojoules"]
  },
  {
    id: "thermal-expansion",
    slug: "thermal-expansion",
    title: "Thermal Expansion Calculator",
    name: "Thermal Expansion Calculator",
    discipline: "Thermodynamics",
    disciplineId: "thermodynamics-calc",
    description: "Calculate linear dimension thermal elongation of solids due to temperature change.",
    formula: "ΔL = α × L0 × ΔT",
    outputUnit: "Millimeters (mm)",
    assumptions: ["Isotropic linear thermal expansion", "Constant expansion coefficient α"],
    inputs: [
      { name: "length", label: "Initial Length (L0)", unit: "Meters (m)", defaultValue: 10 },
      { name: "alpha", label: "Linear Coeff α", unit: "10⁻⁶ / K", defaultValue: 12 },
      { name: "deltaT", label: "Temp Change (ΔT)", unit: "Kelvin or °C", defaultValue: 60 }
    ],
    calculate: (inputs) => (inputs.alpha || 0) * 1e-6 * (inputs.length || 0) * (inputs.deltaT || 0) * 1000,
    route: "/engineering-calculators/thermodynamics-calc/thermal-expansion",
    seo: {
      title: "Thermal Expansion Calculator | Thermodynamics Engineering",
      description: "Calculate linear thermal expansion elongation ΔL in millimeters.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/thermodynamics-calc/thermal-expansion",
      keywords: ["thermal expansion", "linear expansion", "thermal elongation", "alpha coefficient", "expansion calculator"]
    },
    searchKeywords: ["thermal expansion", "linear expansion", "thermal elongation", "alpha coefficient", "expansion calculator"]
  },
  {
    id: "carnot-efficiency",
    slug: "carnot-efficiency",
    title: "Carnot Efficiency Calculator",
    name: "Carnot Efficiency Calculator",
    discipline: "Thermodynamics",
    disciplineId: "thermodynamics-calc",
    description: "Calculate maximum theoretical Carnot thermodynamic heat engine efficiency.",
    formula: "η = (1 - Tc / Th) × 100%",
    outputUnit: "Percentage (%)",
    assumptions: ["Reversible Carnot heat cycle", "Absolute temperature input in Kelvin"],
    inputs: [
      { name: "th", label: "Hot Reservoir Temp (Th)", unit: "Kelvin (K)", defaultValue: 800 },
      { name: "tc", label: "Cold Reservoir Temp (Tc)", unit: "Kelvin (K)", defaultValue: 300 }
    ],
    calculate: (inputs) => (inputs.th ? (1 - (inputs.tc || 0) / inputs.th) * 100 : 0),
    route: "/engineering-calculators/thermodynamics-calc/carnot-efficiency",
    seo: {
      title: "Carnot Efficiency Calculator | Thermodynamics Engineering",
      description: "Calculate maximum theoretical thermodynamic Carnot efficiency percentage.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/thermodynamics-calc/carnot-efficiency",
      keywords: ["carnot efficiency", "thermodynamic efficiency", "heat engine", "carnot cycle", "max efficiency"]
    },
    searchKeywords: ["carnot efficiency", "thermodynamic efficiency", "heat engine", "carnot cycle", "max efficiency"]
  },
  {
    id: "ideal-gas-law",
    slug: "ideal-gas-law",
    title: "Ideal Gas Law Calculator",
    name: "Ideal Gas Law Calculator",
    discipline: "Thermodynamics",
    disciplineId: "thermodynamics-calc",
    description: "Calculate ideal gas pressure from molar amount, temperature, and volume.",
    formula: "P = (n × R × T) / V",
    outputUnit: "Kilopascals (kPa)",
    assumptions: ["Universal gas constant R = 8.3144626 J/(mol·K)", "Ideal point particle gas behavior"],
    inputs: [
      { name: "moles", label: "Amount of Gas (n)", unit: "Moles (mol)", defaultValue: 10 },
      { name: "temp", label: "Absolute Temp (T)", unit: "Kelvin (K)", defaultValue: 298.15 },
      { name: "volume", label: "Gas Volume (V)", unit: "Cubic Meters (m³)", defaultValue: 0.25 }
    ],
    calculate: (inputs) => {
      const R = 8.314462618;
      return inputs.volume ? (((inputs.moles || 0) * R * (inputs.temp || 0)) / inputs.volume) / 1000 : 0;
    },
    route: "/engineering-calculators/thermodynamics-calc/ideal-gas-law",
    seo: {
      title: "Ideal Gas Law Calculator | Thermodynamics Engineering",
      description: "Calculate pressure, volume, temperature, or moles using ideal gas equation PV=nRT.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/thermodynamics-calc/ideal-gas-law",
      keywords: ["ideal gas law", "pv=nrt", "gas pressure", "moles to pressure", "thermodynamic state"]
    },
    searchKeywords: ["ideal gas law", "pv=nrt", "gas pressure", "moles to pressure", "thermodynamic state"]
  },
  {
    id: "isothermal-process",
    slug: "isothermal-process",
    title: "Isothermal Process Calculator",
    name: "Isothermal Process Calculator",
    discipline: "Thermodynamics",
    disciplineId: "thermodynamics-calc",
    description: "Calculate thermodynamic work done by gas during constant-temperature expansion.",
    formula: "W = n × R × T × ln(V2 / V1)",
    outputUnit: "Kilojoules (kJ)",
    assumptions: ["Constant temperature process (T1 = T2)", "Reversible ideal gas expansion"],
    inputs: [
      { name: "moles", label: "Amount of Gas (n)", unit: "Moles (mol)", defaultValue: 5 },
      { name: "temp", label: "System Temp (T)", unit: "Kelvin (K)", defaultValue: 350 },
      { name: "v1", label: "Initial Vol (V1)", unit: "Cubic Meters (m³)", defaultValue: 0.1 },
      { name: "v2", label: "Final Vol (V2)", unit: "Cubic Meters (m³)", defaultValue: 0.3 }
    ],
    calculate: (inputs) => {
      const R = 8.314462618;
      if (!inputs.v1 || !inputs.v2) return 0;
      return ((inputs.moles || 0) * R * (inputs.temp || 0) * Math.log(inputs.v2 / inputs.v1)) / 1000;
    },
    route: "/engineering-calculators/thermodynamics-calc/isothermal-process",
    seo: {
      title: "Isothermal Process Calculator | Thermodynamics Engineering",
      description: "Calculate thermodynamic work done in kilojoules during isothermal gas expansion.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/thermodynamics-calc/isothermal-process",
      keywords: ["isothermal process", "isothermal work", "gas expansion work", "constant temperature"]
    },
    searchKeywords: ["isothermal process", "isothermal work", "gas expansion work", "constant temperature"]
  },
  {
    id: "adiabatic-process",
    slug: "adiabatic-process",
    title: "Adiabatic Process Calculator",
    name: "Adiabatic Process Calculator",
    discipline: "Thermodynamics",
    disciplineId: "thermodynamics-calc",
    description: "Calculate final gas pressure during reversible adiabatic compression without heat transfer.",
    formula: "P2 = P1 × (V1 / V2)^γ",
    outputUnit: "Kilopascals (kPa)",
    assumptions: ["Zero heat exchange Q = 0", "Constant ratio of specific heats γ (gamma)"],
    inputs: [
      { name: "p1", label: "Initial Pressure (P1)", unit: "Kilopascals (kPa)", defaultValue: 100 },
      { name: "v1", label: "Initial Volume (V1)", unit: "Cubic Meters (m³)", defaultValue: 0.5 },
      { name: "v2", label: "Final Volume (V2)", unit: "Cubic Meters (m³)", defaultValue: 0.2 },
      { name: "gamma", label: "Specific Heat Ratio (γ)", unit: "Ratio", defaultValue: 1.4 }
    ],
    calculate: (inputs) => {
      if (!inputs.v2) return 0;
      return (inputs.p1 || 0) * Math.pow((inputs.v1 || 0) / inputs.v2, inputs.gamma || 1.4);
    },
    route: "/engineering-calculators/thermodynamics-calc/adiabatic-process",
    seo: {
      title: "Adiabatic Process Calculator | Thermodynamics Engineering",
      description: "Calculate final pressure P2 in kPa during reversible adiabatic compression.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/thermodynamics-calc/adiabatic-process",
      keywords: ["adiabatic process", "isentropic process", "p1v1^gamma", "adiabatic pressure", "thermodynamics"]
    },
    searchKeywords: ["adiabatic process", "isentropic process", "p1v1^gamma", "adiabatic pressure", "thermodynamics"]
  },
  {
    id: "heat-exchanger-effectiveness",
    slug: "heat-exchanger-effectiveness",
    title: "Heat Exchanger Effectiveness Calculator",
    name: "Heat Exchanger Effectiveness Calculator",
    discipline: "Thermodynamics",
    disciplineId: "thermodynamics-calc",
    description: "Calculate thermal effectiveness ratio of heat exchangers using heat transfer duties.",
    formula: "ε = (Q_actual / Q_max) × 100%",
    outputUnit: "Percentage (%)",
    assumptions: ["Steady counter-flow heat exchanger", "Zero external insulation heat loss"],
    inputs: [
      { name: "qActual", label: "Actual Heat Transfer (Q)", unit: "Kilowatts (kW)", defaultValue: 180 },
      { name: "qMax", label: "Max Possible Heat (Qmax)", unit: "Kilowatts (kW)", defaultValue: 240 }
    ],
    calculate: (inputs) => (inputs.qMax ? ((inputs.qActual || 0) / inputs.qMax) * 100 : 0),
    route: "/engineering-calculators/thermodynamics-calc/heat-exchanger-effectiveness",
    seo: {
      title: "Heat Exchanger Effectiveness Calculator | Thermodynamics Engineering",
      description: "Calculate thermal effectiveness ratio percentage for heat exchanger design.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/thermodynamics-calc/heat-exchanger-effectiveness",
      keywords: ["heat exchanger effectiveness", "ntu method", "heat transfer effectiveness", "counterflow heat exchanger"]
    },
    searchKeywords: ["heat exchanger effectiveness", "ntu method", "heat transfer effectiveness", "counterflow heat exchanger"]
  },
  {
    id: "thermal-resistance",
    slug: "thermal-resistance",
    title: "Thermal Resistance Calculator",
    name: "Thermal Resistance Calculator",
    discipline: "Thermodynamics",
    disciplineId: "thermodynamics-calc",
    description: "Calculate conductive thermal resistance (R-value) across insulation and wall materials.",
    formula: "R_th = d / (k × A)",
    outputUnit: "K / W",
    assumptions: ["1D steady conductive heat path", "Uniform thermal conductivity k"],
    inputs: [
      { name: "thickness", label: "Layer Thickness (d)", unit: "Meters (m)", defaultValue: 0.05 },
      { name: "k", label: "Thermal Conductivity (k)", unit: "W/(m·K)", defaultValue: 0.04 },
      { name: "area", label: "Surface Area (A)", unit: "Square Meters (m²)", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      const denominator = (inputs.k || 0) * (inputs.area || 0);
      return denominator ? (inputs.thickness || 0) / denominator : 0;
    },
    route: "/engineering-calculators/thermodynamics-calc/thermal-resistance",
    seo: {
      title: "Thermal Resistance Calculator | Thermodynamics Engineering",
      description: "Calculate conduction thermal resistance in K/W across material layers.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/thermodynamics-calc/thermal-resistance",
      keywords: ["thermal resistance", "r-value", "insulation resistance", "kelvin per watt", "thermal barrier"]
    },
    searchKeywords: ["thermal resistance", "r-value", "insulation resistance", "kelvin per watt", "thermal barrier"]
  },

  // --- CHEMISTRY ---
  {
    id: "dilution-calc",
    slug: "dilution-calc",
    title: "Solution Dilution Calculator (C1V1 = C2V2)",
    name: "Solution Dilution Calculator (C1V1 = C2V2)",
    discipline: "Chemistry",
    disciplineId: "chemistry-calc",
    description: "Determine target concentration after adding solvent volume.",
    formula: "C2 = (C1 × V1) / V2",
    outputUnit: "Molar (M)",
    assumptions: ["Ideal solution (additive volumes)", "No chemical reaction"],
    inputs: [
      { name: "c1", label: "Initial Conc (C1)", unit: "Molar (M)", defaultValue: 5 },
      { name: "v1", label: "Initial Vol (V1)", unit: "Liters (L)", defaultValue: 0.1 },
      { name: "v2", label: "Final Vol (V2)", unit: "Liters (L)", defaultValue: 1.0 }
    ],
    calculate: (inputs) => {
      if (!inputs.v2) return 0;
      return ((inputs.c1 || 0) * (inputs.v1 || 0)) / inputs.v2;
    },
    route: "/engineering-calculators/chemistry-calc/dilution-calc",
    seo: {
      title: "Solution Dilution Calculator (C1V1 = C2V2) | Chemistry",
      description: "Calculate target chemical molarity after solvent dilution steps.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/chemistry-calc/dilution-calc",
      keywords: ["dilution calculator", "c1v1 c2v2", "molarity dilution", "chemical concentration"]
    },
    searchKeywords: ["dilution", "c1v1", "molarity", "concentration", "chemistry"]
  },
  {
    id: "molarity-calculator",
    slug: "molarity-calculator",
    title: "Molarity Calculator",
    name: "Molarity Calculator",
    discipline: "Chemistry",
    disciplineId: "chemistry-calc",
    description: "Calculate molar concentration M (moles per liter) of a solution from solute moles and total solution volume.",
    formula: "M = n / V",
    outputUnit: "Molar (M)",
    assumptions: ["Complete dissolution of solute", "Solution volume measured at standard temperature"],
    inputs: [
      { name: "n", label: "Solute Amount (n)", unit: "Moles (mol)", defaultValue: 0.5 },
      { name: "v", label: "Solution Volume (V)", unit: "Liters (L)", defaultValue: 0.25 }
    ],
    calculate: (inputs) => (inputs.v ? (inputs.n || 0) / inputs.v : 0),
    route: "/engineering-calculators/chemistry-calc/molarity-calculator",
    seo: {
      title: "Molarity Calculator | Chemistry Engineering",
      description: "Calculate solution molarity M in mol/L from moles of solute and liquid solution volume.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/chemistry-calc/molarity-calculator",
      keywords: ["molarity calculator", "moles to molarity", "molar concentration", "mol/l", "solution stoichiometry"]
    },
    searchKeywords: ["molarity", "concentration", "moles", "liters", "solution", "chemistry"]
  },
  {
    id: "molality-calculator",
    slug: "molality-calculator",
    title: "Molality Calculator",
    name: "Molality Calculator",
    discipline: "Chemistry",
    disciplineId: "chemistry-calc",
    description: "Calculate molal concentration m (moles of solute per kilogram of solvent).",
    formula: "m = n_solute / m_solvent",
    outputUnit: "Molal (mol/kg)",
    assumptions: ["Solvent mass measured independently of solute", "Temperature independent concentration scale"],
    inputs: [
      { name: "molesSolute", label: "Solute Amount (n)", unit: "Moles (mol)", defaultValue: 0.2 },
      { name: "massSolvent", label: "Solvent Mass (m)", unit: "Kilograms (kg)", defaultValue: 0.5 }
    ],
    calculate: (inputs) => (inputs.massSolvent ? (inputs.molesSolute || 0) / inputs.massSolvent : 0),
    route: "/engineering-calculators/chemistry-calc/molality-calculator",
    seo: {
      title: "Molality Calculator | Chemistry Engineering",
      description: "Calculate molal concentration m in mol/kg from moles of solute and mass of solvent.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/chemistry-calc/molality-calculator",
      keywords: ["molality calculator", "mol/kg", "colligative properties", "solute solvent mass", "molal concentration"]
    },
    searchKeywords: ["molality", "concentration", "solute", "solvent", "mol/kg", "chemistry"]
  },
  {
    id: "normality-calculator",
    slug: "normality-calculator",
    title: "Normality Calculator",
    name: "Normality Calculator",
    discipline: "Chemistry",
    disciplineId: "chemistry-calc",
    description: "Calculate normality N (equivalents per liter) from solute molarity and equivalent reactive factor.",
    formula: "N = Molarity (M) × Equivalent Factor (n_eq)",
    outputUnit: "Normal (N)",
    assumptions: ["Equivalent factor n_eq based on H+ / OH- acid-base or redox electron change", "Homogeneous liquid mixture"],
    inputs: [
      { name: "molarity", label: "Molarity (M)", unit: "mol/L", defaultValue: 0.5 },
      { name: "equivFactor", label: "Reactive Equivalents (n_eq)", unit: "eq/mol", defaultValue: 2 }
    ],
    calculate: (inputs) => (inputs.molarity || 0) * (inputs.equivFactor || 1),
    route: "/engineering-calculators/chemistry-calc/normality-calculator",
    seo: {
      title: "Normality Calculator | Chemistry Engineering",
      description: "Calculate solution normality N in eq/L from molarity and reactive equivalence factor.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/chemistry-calc/normality-calculator",
      keywords: ["normality calculator", "molarity to normality", "acid base equivalence", "reactive factor", "normal solution"]
    },
    searchKeywords: ["normality", "molarity", "equivalents", "acid base", "titration", "chemistry"]
  },
  {
    id: "percent-concentration",
    slug: "percent-concentration",
    title: "Percent Concentration Calculator",
    name: "Percent Concentration Calculator",
    discipline: "Chemistry",
    disciplineId: "chemistry-calc",
    description: "Calculate mass percent concentration (% w/w) of solute in total solution.",
    formula: "% = [Solute Mass / (Solute Mass + Solvent Mass)] × 100",
    outputUnit: "Percentage (%)",
    assumptions: ["Mass conservation (Total Mass = Solute Mass + Solvent Mass)", "No evaporation loss during mixing"],
    inputs: [
      { name: "soluteMass", label: "Solute Mass", unit: "Grams (g)", defaultValue: 25 },
      { name: "solventMass", label: "Solvent Mass", unit: "Grams (g)", defaultValue: 225 }
    ],
    calculate: (inputs) => {
      const total = (inputs.soluteMass || 0) + (inputs.solventMass || 0);
      return total ? ((inputs.soluteMass || 0) / total) * 100 : 0;
    },
    route: "/engineering-calculators/chemistry-calc/percent-concentration",
    seo: {
      title: "Percent Concentration Calculator | Chemistry Engineering",
      description: "Calculate mass percent (% w/w) concentration of solute dissolved in solvent.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/chemistry-calc/percent-concentration",
      keywords: ["percent concentration", "mass percent", "weight percentage", "solute percentage", "solution concentration"]
    },
    searchKeywords: ["percent concentration", "mass percent", "solute", "solvent", "percentage", "chemistry"]
  },
  {
    id: "ph-calculator",
    slug: "ph-calculator",
    title: "pH Calculator",
    name: "pH Calculator",
    discipline: "Chemistry",
    disciplineId: "chemistry-calc",
    description: "Calculate aqueous solution pH from hydrogen ion activity concentration [H⁺].",
    formula: "pH = -log₁₀([H⁺])",
    outputUnit: "pH Units",
    assumptions: ["Dilute aqueous solution at 25°C", "Hydrogen ion concentration in moles per liter (M)"],
    inputs: [
      { name: "hConc", label: "Hydrogen Ion [H⁺]", unit: "Molar (mol/L)", defaultValue: 0.0000001 }
    ],
    calculate: (inputs) => (inputs.hConc && inputs.hConc > 0 ? -Math.log10(inputs.hConc) : 0),
    route: "/engineering-calculators/chemistry-calc/ph-calculator",
    seo: {
      title: "pH Calculator | Chemistry Engineering",
      description: "Calculate solution pH level from hydrogen ion concentration [H+] in mol/L.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/chemistry-calc/ph-calculator",
      keywords: ["ph calculator", "hydrogen ion concentration", "acidity calculator", "logarithmic ph", "aqueous solution"]
    },
    searchKeywords: ["ph", "acidity", "hydrogen ion", "hydronium", "logarithm", "chemistry"]
  },
  {
    id: "poh-calculator",
    slug: "poh-calculator",
    title: "pOH Calculator",
    name: "pOH Calculator",
    discipline: "Chemistry",
    disciplineId: "chemistry-calc",
    description: "Calculate solution pOH from hydroxide ion concentration [OH⁻].",
    formula: "pOH = -log₁₀([OH⁻])",
    outputUnit: "pOH Units",
    assumptions: ["Dilute aqueous solution at 25°C", "Hydroxide ion concentration in moles per liter (M)"],
    inputs: [
      { name: "ohConc", label: "Hydroxide Ion [OH⁻]", unit: "Molar (mol/L)", defaultValue: 0.0001 }
    ],
    calculate: (inputs) => (inputs.ohConc && inputs.ohConc > 0 ? -Math.log10(inputs.ohConc) : 0),
    route: "/engineering-calculators/chemistry-calc/poh-calculator",
    seo: {
      title: "pOH Calculator | Chemistry Engineering",
      description: "Calculate solution pOH and alkalinity from hydroxide ion concentration [OH-].",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/chemistry-calc/poh-calculator",
      keywords: ["poh calculator", "hydroxide ion concentration", "alkalinity", "logarithmic poh", "base concentration"]
    },
    searchKeywords: ["poh", "alkalinity", "hydroxide ion", "base", "logarithm", "chemistry"]
  },
  {
    id: "beer-lambert-law",
    slug: "beer-lambert-law",
    title: "Beer-Lambert Law Calculator",
    name: "Beer-Lambert Law Calculator",
    discipline: "Chemistry",
    disciplineId: "chemistry-calc",
    description: "Calculate light absorbance A through absorbing chemical solute species.",
    formula: "A = ε × c × l",
    outputUnit: "Absorbance (A)",
    assumptions: ["Monochromatic light beam", "Dilute non-scattering solute solution"],
    inputs: [
      { name: "epsilon", label: "Molar Absorptivity (ε)", unit: "L/(mol·cm)", defaultValue: 15000 },
      { name: "c", label: "Concentration (c)", unit: "Molar (mol/L)", defaultValue: 0.00005 },
      { name: "l", label: "Path Length (l)", unit: "Centimeters (cm)", defaultValue: 1.0 }
    ],
    calculate: (inputs) => (inputs.epsilon || 0) * (inputs.c || 0) * (inputs.l || 0),
    route: "/engineering-calculators/chemistry-calc/beer-lambert-law",
    seo: {
      title: "Beer-Lambert Law Calculator | Chemistry Engineering",
      description: "Calculate optical absorbance A using Beer-Lambert law from molar absorptivity, concentration, and path length.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/chemistry-calc/beer-lambert-law",
      keywords: ["beer lambert law", "absorbance calculator", "spectrophotometry", "molar absorptivity", "cuvette path length"]
    },
    searchKeywords: ["beer lambert", "absorbance", "spectrophotometry", "extinction coefficient", "cuvette", "chemistry"]
  },
  {
    id: "reaction-yield",
    slug: "reaction-yield",
    title: "Reaction Yield Calculator",
    name: "Reaction Yield Calculator",
    discipline: "Chemistry",
    disciplineId: "chemistry-calc",
    description: "Calculate percentage reaction yield from actual lab yield and theoretical stoichiometric yield.",
    formula: "% Yield = (Actual Yield / Theoretical Yield) × 100",
    outputUnit: "Percentage (%)",
    assumptions: ["Consistent measurement units for actual and theoretical masses", "Isolatable product species"],
    inputs: [
      { name: "actual", label: "Actual Product Mass", unit: "Grams (g)", defaultValue: 14.2 },
      { name: "theoretical", label: "Theoretical Mass", unit: "Grams (g)", defaultValue: 18.5 }
    ],
    calculate: (inputs) => (inputs.theoretical ? ((inputs.actual || 0) / inputs.theoretical) * 100 : 0),
    route: "/engineering-calculators/chemistry-calc/reaction-yield",
    seo: {
      title: "Reaction Yield Calculator | Chemistry Engineering",
      description: "Calculate chemical percentage reaction yield from actual laboratory and theoretical masses.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/chemistry-calc/reaction-yield",
      keywords: ["reaction yield", "percent yield", "theoretical yield", "stoichiometric yield", "chemistry yield"]
    },
    searchKeywords: ["reaction yield", "percent yield", "theoretical yield", "stoichiometry", "lab yield", "chemistry"]
  },
  {
    id: "chemistry-ideal-gas-law",
    slug: "chemistry-ideal-gas-law",
    title: "Ideal Gas Volume Calculator",
    name: "Ideal Gas Volume Calculator",
    discipline: "Chemistry",
    disciplineId: "chemistry-calc",
    description: "Calculate gas volume in liters from moles, pressure in atm, and temperature in Kelvin.",
    formula: "V = (n × R × T) / P",
    outputUnit: "Liters (L)",
    assumptions: ["Universal gas constant R = 0.082057 L·atm/(mol·K)", "Ideal gas behavior without intermolecular forces"],
    inputs: [
      { name: "moles", label: "Amount of Gas (n)", unit: "Moles (mol)", defaultValue: 2.5 },
      { name: "temp", label: "Absolute Temp (T)", unit: "Kelvin (K)", defaultValue: 298.15 },
      { name: "pressure", label: "Pressure (P)", unit: "Atmospheres (atm)", defaultValue: 1.0 }
    ],
    calculate: (inputs) => {
      const R = 0.082057366;
      return inputs.pressure ? ((inputs.moles || 0) * R * (inputs.temp || 0)) / inputs.pressure : 0;
    },
    route: "/engineering-calculators/chemistry-calc/chemistry-ideal-gas-law",
    seo: {
      title: "Ideal Gas Volume Calculator | Chemistry Engineering",
      description: "Calculate gas volume in liters using PV=nRT ideal gas law formula.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/chemistry-calc/chemistry-ideal-gas-law",
      keywords: ["ideal gas law", "pv=nrt", "gas volume calculator", "moles to volume", "gas law chemistry"]
    },
    searchKeywords: ["ideal gas", "pv=nrt", "gas volume", "moles", "pressure", "temperature", "chemistry"]
  },
  {
    id: "chemistry-specific-heat",
    slug: "chemistry-specific-heat",
    title: "Specific Heat Energy Calculator",
    name: "Specific Heat Energy Calculator",
    discipline: "Chemistry",
    disciplineId: "chemistry-calc",
    description: "Calculate thermal heat energy Q in Joules absorbed or released during chemical temperature changes.",
    formula: "Q = m × c × ΔT",
    outputUnit: "Joules (J)",
    assumptions: ["Constant specific heat capacity c across temperature change", "No phase transition occurring"],
    inputs: [
      { name: "mass", label: "Substance Mass (m)", unit: "Grams (g)", defaultValue: 250 },
      { name: "specHeat", label: "Specific Heat (c)", unit: "J/(g·°C)", defaultValue: 4.184 },
      { name: "deltaT", label: "Temp Change (ΔT)", unit: "°C or K", defaultValue: 25 }
    ],
    calculate: (inputs) => (inputs.mass || 0) * (inputs.specHeat || 0) * (inputs.deltaT || 0),
    route: "/engineering-calculators/chemistry-calc/chemistry-specific-heat",
    seo: {
      title: "Specific Heat Energy Calculator | Chemistry Engineering",
      description: "Calculate thermal heat energy Q in Joules from mass, specific heat, and temperature change.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/chemistry-calc/chemistry-specific-heat",
      keywords: ["specific heat calculator", "q=mcdeltat", "calorimetry", "heat energy joules", "thermochemistry"]
    },
    searchKeywords: ["specific heat", "q=mcdeltat", "calorimetry", "heat energy", "joules", "chemistry"]
  },
  {
    id: "reaction-enthalpy",
    slug: "reaction-enthalpy",
    title: "Reaction Enthalpy Calculator",
    name: "Reaction Enthalpy Calculator",
    discipline: "Chemistry",
    disciplineId: "chemistry-calc",
    description: "Calculate net standard reaction enthalpy change ΔH_rxn from sum of product and reactant enthalpies.",
    formula: "ΔH_rxn = ∑ ΔH_f(products) - ∑ ΔH_f(reactants)",
    outputUnit: "Kilojoules (kJ)",
    assumptions: ["Hess's law thermochemical summation", "Standard state conditions (25°C, 1 bar)"],
    inputs: [
      { name: "hProducts", label: "Sum Products Enthalpy", unit: "Kilojoules (kJ)", defaultValue: -788 },
      { name: "hReactants", label: "Sum Reactants Enthalpy", unit: "Kilojoules (kJ)", defaultValue: -220 }
    ],
    calculate: (inputs) => (inputs.hProducts || 0) - (inputs.hReactants || 0),
    route: "/engineering-calculators/chemistry-calc/reaction-enthalpy",
    seo: {
      title: "Reaction Enthalpy Calculator | Chemistry Engineering",
      description: "Calculate net reaction enthalpy change ΔH in kJ using Hess law standard formation enthalpies.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/chemistry-calc/reaction-enthalpy",
      keywords: ["reaction enthalpy", "delta h", "hess law", "exothermic endothermic", "thermochemistry"]
    },
    searchKeywords: ["reaction enthalpy", "delta h", "hess law", "thermochemistry", "exothermic", "endothermic", "chemistry"]
  },

  // --- FLUID MECHANICS ---
  {
    id: "reynolds-number",
    slug: "reynolds-number",
    title: "Reynolds Flow Regime Calculator",
    name: "Reynolds Flow Regime Calculator",
    discipline: "Fluid Mechanics",
    disciplineId: "fluid-mechanics-calc",
    description: "Determine dimensionless Reynolds number for laminar vs turbulent flow.",
    formula: "Re = (ρ × v × D) / μ",
    outputUnit: "Dimensionless (Re)",
    assumptions: ["Incompressible Newtonian fluid", "Full circular pipe flow"],
    inputs: [
      { name: "density", label: "Fluid Density (ρ)", unit: "kg/m³", defaultValue: 998 },
      { name: "velocity", label: "Flow Velocity (v)", unit: "m/s", defaultValue: 1.5 },
      { name: "diameter", label: "Pipe Diameter (D)", unit: "Meters (m)", defaultValue: 0.05 },
      { name: "viscosity", label: "Dynamic Viscosity (μ)", unit: "Pa·s", defaultValue: 0.001 }
    ],
    calculate: (inputs) => {
      if (!inputs.viscosity) return 0;
      return ((inputs.density || 0) * (inputs.velocity || 0) * (inputs.diameter || 0)) / inputs.viscosity;
    },
    route: "/engineering-calculators/fluid-mechanics-calc/reynolds-number",
    seo: {
      title: "Reynolds Flow Regime Calculator | Fluid Mechanics",
      description: "Calculate dimensionless Reynolds number for laminar, transition, and turbulent pipe flow.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/fluid-mechanics-calc/reynolds-number",
      keywords: ["reynolds number", "laminar flow", "turbulent flow", "pipe fluid dynamics"]
    },
    searchKeywords: ["reynolds number", "laminar", "turbulent", "pipe flow", "viscosity", "fluid mechanics"]
  },
  {
    id: "darcy-weisbach-pressure-loss",
    slug: "darcy-weisbach-pressure-loss",
    title: "Darcy–Weisbach Pressure Loss Calculator",
    name: "Darcy–Weisbach Pressure Loss Calculator",
    discipline: "Fluid Mechanics",
    disciplineId: "fluid-mechanics-calc",
    description: "Calculate friction pressure loss along pipe conduits using the Darcy-Weisbach equation.",
    formula: "ΔP = f × (L / D) × (ρ × v² / 2)",
    outputUnit: "Kilopascals (kPa)",
    assumptions: ["Steady incompressible pipe flow", "Constant friction factor f along pipe length"],
    inputs: [
      { name: "f", label: "Friction Factor (f)", unit: "Ratio", defaultValue: 0.02 },
      { name: "length", label: "Pipe Length (L)", unit: "Meters (m)", defaultValue: 100 },
      { name: "diameter", label: "Pipe Inner Dia (D)", unit: "Meters (m)", defaultValue: 0.1 },
      { name: "density", label: "Fluid Density (ρ)", unit: "kg/m³", defaultValue: 1000 },
      { name: "velocity", label: "Flow Velocity (v)", unit: "m/s", defaultValue: 2 }
    ],
    calculate: (inputs) => (inputs.diameter ? (inputs.f || 0) * ((inputs.length || 0) / inputs.diameter) * ((inputs.density || 0) * Math.pow(inputs.velocity || 0, 2) / 2) / 1000 : 0),
    route: "/engineering-calculators/fluid-mechanics-calc/darcy-weisbach-pressure-loss",
    seo: {
      title: "Darcy–Weisbach Pressure Loss Calculator | Fluid Mechanics",
      description: "Calculate friction pressure loss ΔP in kPa along pipe lengths using Darcy-Weisbach equation.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/fluid-mechanics-calc/darcy-weisbach-pressure-loss",
      keywords: ["darcy weisbach", "pressure loss", "pipe friction", "friction factor", "head loss"]
    },
    searchKeywords: ["darcy weisbach", "pressure loss", "pipe friction", "friction factor", "head loss"]
  },
  {
    id: "bernoulli-equation",
    slug: "bernoulli-equation",
    title: "Bernoulli Equation Calculator",
    name: "Bernoulli Equation Calculator",
    discipline: "Fluid Mechanics",
    disciplineId: "fluid-mechanics-calc",
    description: "Calculate fluid pressure at point 2 along a streamline using Bernoulli energy conservation law.",
    formula: "P2 = P1 + ½ρ(v1² - v2²) + ρg(z1 - z2)",
    outputUnit: "Kilopascals (kPa)",
    assumptions: ["Inviscid steady incompressible flow", "Flow along a single streamline"],
    inputs: [
      { name: "p1", label: "Initial Pressure (P1)", unit: "Kilopascals (kPa)", defaultValue: 200 },
      { name: "v1", label: "Initial Velocity (v1)", unit: "m/s", defaultValue: 2 },
      { name: "v2", label: "Final Velocity (v2)", unit: "m/s", defaultValue: 5 },
      { name: "z1", label: "Initial Elevation (z1)", unit: "Meters (m)", defaultValue: 10 },
      { name: "z2", label: "Final Elevation (z2)", unit: "Meters (m)", defaultValue: 0 },
      { name: "density", label: "Fluid Density (ρ)", unit: "kg/m³", defaultValue: 1000 }
    ],
    calculate: (inputs) => {
      const g = 9.81;
      const rho = inputs.density || 1000;
      const deltaK = 0.5 * rho * (Math.pow(inputs.v1 || 0, 2) - Math.pow(inputs.v2 || 0, 2));
      const deltaP = rho * g * ((inputs.z1 || 0) - (inputs.z2 || 0));
      return (inputs.p1 || 0) + (deltaK + deltaP) / 1000;
    },
    route: "/engineering-calculators/fluid-mechanics-calc/bernoulli-equation",
    seo: {
      title: "Bernoulli Equation Calculator | Fluid Mechanics",
      description: "Calculate fluid pressure along streamlines using Bernoulli's energy conservation equation.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/fluid-mechanics-calc/bernoulli-equation",
      keywords: ["bernoulli equation", "fluid pressure", "streamline energy", "dynamic pressure", "elevation head"]
    },
    searchKeywords: ["bernoulli equation", "fluid pressure", "streamline energy", "dynamic pressure", "elevation head"]
  },
  {
    id: "flow-rate",
    slug: "flow-rate",
    title: "Flow Rate Calculator",
    name: "Flow Rate Calculator",
    discipline: "Fluid Mechanics",
    disciplineId: "fluid-mechanics-calc",
    description: "Calculate volumetric flow rate Q in liters per second from pipe inner diameter and mean fluid velocity.",
    formula: "Q = A × v = (π × D² / 4) × v",
    outputUnit: "Liters per Second (L/s)",
    assumptions: ["Full circular cross-section pipe", "Uniform average fluid velocity"],
    inputs: [
      { name: "diameter", label: "Pipe Diameter (D)", unit: "Meters (m)", defaultValue: 0.1 },
      { name: "velocity", label: "Mean Velocity (v)", unit: "m/s", defaultValue: 2.5 }
    ],
    calculate: (inputs) => {
      const area = (Math.PI * Math.pow(inputs.diameter || 0, 2)) / 4;
      return area * (inputs.velocity || 0) * 1000;
    },
    route: "/engineering-calculators/fluid-mechanics-calc/flow-rate",
    seo: {
      title: "Flow Rate Calculator | Fluid Mechanics",
      description: "Calculate volumetric flow rate in L/s from pipe diameter and average flow velocity.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/fluid-mechanics-calc/flow-rate",
      keywords: ["flow rate calculator", "volumetric flow rate", "pipe discharge", "liters per second", "q=av"]
    },
    searchKeywords: ["flow rate calculator", "volumetric flow rate", "pipe discharge", "liters per second", "q=av"]
  },
  {
    id: "pipe-velocity",
    slug: "pipe-velocity",
    title: "Pipe Velocity Calculator",
    name: "Pipe Velocity Calculator",
    discipline: "Fluid Mechanics",
    disciplineId: "fluid-mechanics-calc",
    description: "Calculate mean fluid velocity in meters per second from volumetric flow rate and inner pipe diameter.",
    formula: "v = Q / A = (4 × Q) / (π × D²)",
    outputUnit: "Meters per Second (m/s)",
    assumptions: ["Incompressible steady fluid flow", "Full circular conduit area"],
    inputs: [
      { name: "flowRate", label: "Flow Rate (Q)", unit: "Liters / sec (L/s)", defaultValue: 25 },
      { name: "diameter", label: "Pipe Diameter (D)", unit: "Meters (m)", defaultValue: 0.1 }
    ],
    calculate: (inputs) => {
      const qM3s = (inputs.flowRate || 0) / 1000;
      const area = (Math.PI * Math.pow(inputs.diameter || 0, 2)) / 4;
      return area ? qM3s / area : 0;
    },
    route: "/engineering-calculators/fluid-mechanics-calc/pipe-velocity",
    seo: {
      title: "Pipe Velocity Calculator | Fluid Mechanics",
      description: "Determine mean fluid velocity in m/s from flow rate and pipe inner diameter.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/fluid-mechanics-calc/pipe-velocity",
      keywords: ["pipe velocity", "flow velocity", "mean fluid speed", "pipe diameter velocity", "v=q/a"]
    },
    searchKeywords: ["pipe velocity", "flow velocity", "mean fluid speed", "pipe diameter velocity", "v=q/a"]
  },
  {
    id: "continuity-equation",
    slug: "continuity-equation",
    title: "Continuity Equation Calculator",
    name: "Continuity Equation Calculator",
    discipline: "Fluid Mechanics",
    disciplineId: "fluid-mechanics-calc",
    description: "Calculate exit velocity in a tapering or expanding pipe section based on mass conservation.",
    formula: "v2 = v1 × (D1 / D2)²",
    outputUnit: "Meters per Second (m/s)",
    assumptions: ["Incompressible steady state fluid", "1D average velocity profile"],
    inputs: [
      { name: "v1", label: "Entry Velocity (v1)", unit: "m/s", defaultValue: 1.5 },
      { name: "d1", label: "Entry Diameter (D1)", unit: "Meters (m)", defaultValue: 0.2 },
      { name: "d2", label: "Exit Diameter (D2)", unit: "Meters (m)", defaultValue: 0.1 }
    ],
    calculate: (inputs) => (inputs.d2 ? (inputs.v1 || 0) * Math.pow((inputs.d1 || 0) / inputs.d2, 2) : 0),
    route: "/engineering-calculators/fluid-mechanics-calc/continuity-equation",
    seo: {
      title: "Continuity Equation Calculator | Fluid Mechanics",
      description: "Calculate velocity changes in pipe reductions using the fluid continuity law A1v1 = A2v2.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/fluid-mechanics-calc/continuity-equation",
      keywords: ["continuity equation", "a1v1=a2v2", "pipe reduction velocity", "fluid conservation", "pipe constriction"]
    },
    searchKeywords: ["continuity equation", "a1v1=a2v2", "pipe reduction velocity", "fluid conservation", "pipe constriction"]
  },
  {
    id: "hydrostatic-pressure",
    slug: "hydrostatic-pressure",
    title: "Hydrostatic Pressure Calculator",
    name: "Hydrostatic Pressure Calculator",
    discipline: "Fluid Mechanics",
    disciplineId: "fluid-mechanics-calc",
    description: "Calculate total hydrostatic fluid pressure at specific submerged depth.",
    formula: "P = P_atm + (ρ × g × h)",
    outputUnit: "Kilopascals (kPa)",
    assumptions: ["Static fluid in uniform gravity field", "Constant fluid density ρ with depth"],
    inputs: [
      { name: "depth", label: "Fluid Depth (h)", unit: "Meters (m)", defaultValue: 10 },
      { name: "density", label: "Fluid Density (ρ)", unit: "kg/m³", defaultValue: 1000 },
      { name: "pAtm", label: "Atmospheric Pressure", unit: "Kilopascals (kPa)", defaultValue: 101.325 }
    ],
    calculate: (inputs) => {
      const g = 9.81;
      const pGauge = ((inputs.density || 0) * g * (inputs.depth || 0)) / 1000;
      return (inputs.pAtm || 0) + pGauge;
    },
    route: "/engineering-calculators/fluid-mechanics-calc/hydrostatic-pressure",
    seo: {
      title: "Hydrostatic Pressure Calculator | Fluid Mechanics",
      description: "Calculate total and gauge hydrostatic pressure at fluid depth.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/fluid-mechanics-calc/hydrostatic-pressure",
      keywords: ["hydrostatic pressure", "p=rhogh", "fluid depth pressure", "submerged pressure", "gauge pressure"]
    },
    searchKeywords: ["hydrostatic pressure", "p=rhogh", "fluid depth pressure", "submerged pressure", "gauge pressure"]
  },
  {
    id: "dynamic-pressure",
    slug: "dynamic-pressure",
    title: "Dynamic Pressure Calculator",
    name: "Dynamic Pressure Calculator",
    discipline: "Fluid Mechanics",
    disciplineId: "fluid-mechanics-calc",
    description: "Calculate kinetic dynamic fluid pressure q from flow velocity and fluid density.",
    formula: "q = ½ × ρ × v²",
    outputUnit: "Kilopascals (kPa)",
    assumptions: ["Incompressible fluid motion", "Uniform velocity magnitude v"],
    inputs: [
      { name: "velocity", label: "Flow Velocity (v)", unit: "m/s", defaultValue: 30 },
      { name: "density", label: "Fluid Density (ρ)", unit: "kg/m³", defaultValue: 1.225 }
    ],
    calculate: (inputs) => (0.5 * (inputs.density || 0) * Math.pow(inputs.velocity || 0, 2)) / 1000,
    route: "/engineering-calculators/fluid-mechanics-calc/dynamic-pressure",
    seo: {
      title: "Dynamic Pressure Calculator | Fluid Mechanics",
      description: "Calculate kinetic fluid dynamic pressure in kPa from flow speed and fluid density.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/fluid-mechanics-calc/dynamic-pressure",
      keywords: ["dynamic pressure", "kinetic fluid pressure", "q=0.5rhov2", "pitot pressure", "aerodynamic pressure"]
    },
    searchKeywords: ["dynamic pressure", "kinetic fluid pressure", "q=0.5rhov2", "pitot pressure", "aerodynamic pressure"]
  },
  {
    id: "venturi-flow",
    slug: "venturi-flow",
    title: "Venturi Flow Calculator",
    name: "Venturi Flow Calculator",
    discipline: "Fluid Mechanics",
    disciplineId: "fluid-mechanics-calc",
    description: "Calculate discharge flow rate through a Venturi meter tube using differential pressure drop.",
    formula: "Q = Cd × A2 × √[ (2 × ΔP) / (ρ × (1 - (A2/A1)²)) ]",
    outputUnit: "Liters per Second (L/s)",
    assumptions: ["Incompressible steady flow", "Venturi discharge coefficient Cd ≈ 0.98"],
    inputs: [
      { name: "d1", label: "Inlet Diameter (D1)", unit: "Meters (m)", defaultValue: 0.15 },
      { name: "d2", label: "Throat Diameter (D2)", unit: "Meters (m)", defaultValue: 0.075 },
      { name: "deltaP", label: "Pressure Drop (ΔP)", unit: "Kilopascals (kPa)", defaultValue: 20 },
      { name: "density", label: "Fluid Density (ρ)", unit: "kg/m³", defaultValue: 1000 },
      { name: "cd", label: "Discharge Coeff (Cd)", unit: "Ratio", defaultValue: 0.98 }
    ],
    calculate: (inputs) => {
      const a1 = (Math.PI * Math.pow(inputs.d1 || 0, 2)) / 4;
      const a2 = (Math.PI * Math.pow(inputs.d2 || 0, 2)) / 4;
      if (!a1 || !a2 || a1 <= a2) return 0;
      const ratio2 = Math.pow(a2 / a1, 2);
      const deltaP_Pa = (inputs.deltaP || 0) * 1000;
      const inside = (2 * deltaP_Pa) / ((inputs.density || 1000) * (1 - ratio2));
      if (inside <= 0) return 0;
      const qM3s = (inputs.cd || 0.98) * a2 * Math.sqrt(inside);
      return qM3s * 1000;
    },
    route: "/engineering-calculators/fluid-mechanics-calc/venturi-flow",
    seo: {
      title: "Venturi Flow Calculator | Fluid Mechanics",
      description: "Calculate flow rate in L/s through Venturi tube meters from differential pressure drop.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/fluid-mechanics-calc/venturi-flow",
      keywords: ["venturi meter", "venturi flow rate", "differential pressure flow", "throat pressure drop", "cd discharge"]
    },
    searchKeywords: ["venturi meter", "venturi flow rate", "differential pressure flow", "throat pressure drop", "cd discharge"]
  },
  {
    id: "orifice-flow-rate",
    slug: "orifice-flow-rate",
    title: "Orifice Flow Rate Calculator",
    name: "Orifice Flow Rate Calculator",
    discipline: "Fluid Mechanics",
    disciplineId: "fluid-mechanics-calc",
    description: "Calculate fluid flow rate through sharp-edged circular orifice plate meters.",
    formula: "Q = Cd × A_orifice × √(2 × g × h)",
    outputUnit: "Liters per Second (L/s)",
    assumptions: ["Submerged orifice discharge", "Standard orifice coefficient Cd ≈ 0.62"],
    inputs: [
      { name: "dOrifice", label: "Orifice Dia (d)", unit: "Meters (m)", defaultValue: 0.05 },
      { name: "head", label: "Differential Head (h)", unit: "Meters (m)", defaultValue: 2 },
      { name: "cd", label: "Discharge Coeff (Cd)", unit: "Ratio", defaultValue: 0.62 }
    ],
    calculate: (inputs) => {
      const g = 9.81;
      const area = (Math.PI * Math.pow(inputs.dOrifice || 0, 2)) / 4;
      const head = inputs.head || 0;
      if (head < 0) return 0;
      const qM3s = (inputs.cd || 0.62) * area * Math.sqrt(2 * g * head);
      return qM3s * 1000;
    },
    route: "/engineering-calculators/fluid-mechanics-calc/orifice-flow-rate",
    seo: {
      title: "Orifice Flow Rate Calculator | Fluid Mechanics",
      description: "Calculate liquid discharge flow rate through sharp-edged orifice meters.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/fluid-mechanics-calc/orifice-flow-rate",
      keywords: ["orifice flow rate", "orifice meter", "discharge coefficient", "orifice plate", "fluid discharge"]
    },
    searchKeywords: ["orifice flow rate", "orifice meter", "discharge coefficient", "orifice plate", "fluid discharge"]
  },
  {
    id: "pump-hydraulic-power",
    slug: "pump-hydraulic-power",
    title: "Pump Hydraulic Power Calculator",
    name: "Pump Hydraulic Power Calculator",
    discipline: "Fluid Mechanics",
    disciplineId: "fluid-mechanics-calc",
    description: "Calculate net fluid hydraulic power output required from pump flow rate and head.",
    formula: "P_hyd = (ρ × g × Q × H) / 1000",
    outputUnit: "Kilowatts (kW)",
    assumptions: ["Steady state liquid pumping", "Incompressible fluid"],
    inputs: [
      { name: "flowRate", label: "Flow Rate (Q)", unit: "Liters / sec (L/s)", defaultValue: 20 },
      { name: "head", label: "Total Head (H)", unit: "Meters (m)", defaultValue: 30 },
      { name: "density", label: "Fluid Density (ρ)", unit: "kg/m³", defaultValue: 1000 }
    ],
    calculate: (inputs) => {
      const g = 9.81;
      const qM3s = (inputs.flowRate || 0) / 1000;
      return ((inputs.density || 1000) * g * qM3s * (inputs.head || 0)) / 1000;
    },
    route: "/engineering-calculators/fluid-mechanics-calc/pump-hydraulic-power",
    seo: {
      title: "Pump Hydraulic Power Calculator | Fluid Mechanics",
      description: "Calculate pump hydraulic power requirement in kW from flow rate and head.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/fluid-mechanics-calc/pump-hydraulic-power",
      keywords: ["pump hydraulic power", "water horsepower", "pump kw", "total dynamic head", "pumping power"]
    },
    searchKeywords: ["pump hydraulic power", "water horsepower", "pump kw", "total dynamic head", "pumping power"]
  },
  {
    id: "pipe-friction-head-loss",
    slug: "pipe-friction-head-loss",
    title: "Pipe Friction Head Loss Calculator",
    name: "Pipe Friction Head Loss Calculator",
    discipline: "Fluid Mechanics",
    disciplineId: "fluid-mechanics-calc",
    description: "Calculate head loss hf in meters of fluid due to pipe wall friction.",
    formula: "hf = f × (L / D) × (v² / 2g)",
    outputUnit: "Meters of Fluid (m)",
    assumptions: ["Full pipe flow condition", "Constant Darcy friction factor f"],
    inputs: [
      { name: "f", label: "Friction Factor (f)", unit: "Ratio", defaultValue: 0.02 },
      { name: "length", label: "Pipe Length (L)", unit: "Meters (m)", defaultValue: 50 },
      { name: "diameter", label: "Pipe Diameter (D)", unit: "Meters (m)", defaultValue: 0.1 },
      { name: "velocity", label: "Flow Velocity (v)", unit: "m/s", defaultValue: 2 }
    ],
    calculate: (inputs) => {
      const g = 9.81;
      if (!inputs.diameter || !g) return 0;
      return (inputs.f || 0) * ((inputs.length || 0) / inputs.diameter) * (Math.pow(inputs.velocity || 0, 2) / (2 * g));
    },
    route: "/engineering-calculators/fluid-mechanics-calc/pipe-friction-head-loss",
    seo: {
      title: "Pipe Friction Head Loss Calculator | Fluid Mechanics",
      description: "Calculate pipe friction head loss hf in meters of fluid using Darcy equation.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/fluid-mechanics-calc/pipe-friction-head-loss",
      keywords: ["pipe friction head loss", "head loss calculator", "darcy head loss", "fluid friction loss", "meters of head"]
    },
    searchKeywords: ["pipe friction head loss", "head loss calculator", "darcy head loss", "fluid friction loss", "meters of head"]
  },

  // --- ELECTRONICS ---
  {
    id: "rc-time-constant",
    slug: "rc-time-constant",
    title: "RC Circuit Time Constant & Cutoff Calculator",
    name: "RC Circuit Time Constant & Cutoff Calculator",
    discipline: "Electronics",
    disciplineId: "electronics-calc",
    description: "Calculate RC time constant tau (τ) and -3dB cutoff frequency.",
    formula: "τ = R × C",
    outputUnit: "Seconds (s)",
    assumptions: ["Ideal linear capacitor and resistor", "Zero initial charge"],
    inputs: [
      { name: "r", label: "Resistance (R)", unit: "Ohms (Ω)", defaultValue: 10000 },
      { name: "c", label: "Capacitance (C)", unit: "Farads (F)", defaultValue: 0.000001 }
    ],
    calculate: (inputs) => (inputs.r || 0) * (inputs.c || 0),
    route: "/engineering-calculators/electronics-calc/rc-time-constant",
    seo: {
      title: "RC Circuit Time Constant Calculator | Electronics",
      description: "Determine tau delay time constant and cutoff frequency for RC filters.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electronics-calc/rc-time-constant",
      keywords: ["rc time constant", "tau calculator", "cutoff frequency", "rc filter"]
    },
    searchKeywords: ["rc time constant", "tau", "cutoff frequency", "resistor capacitor", "filter", "electronics"]
  },
  {
    id: "rc-low-pass-filter",
    slug: "rc-low-pass-filter",
    title: "RC Low-Pass Filter Cutoff Frequency Calculator",
    name: "RC Low-Pass Filter Cutoff Frequency Calculator",
    discipline: "Electronics",
    disciplineId: "electronics-calc",
    description: "Calculate the -3dB cutoff frequency (fc) of a first-order passive RC low-pass filter circuit.",
    formula: "fc = 1 / (2 × π × R × C)",
    outputUnit: "Hertz (Hz)",
    assumptions: ["Ideal linear passive resistor and capacitor", "High load impedance (unloaded output)"],
    inputs: [
      { name: "r", label: "Resistance (R)", unit: "Ohms (Ω)", defaultValue: 10000 },
      { name: "c", label: "Capacitance (C)", unit: "Farads (F)", defaultValue: 0.0000001 }
    ],
    calculate: (inputs) => (inputs.r && inputs.c ? 1 / (2 * Math.PI * inputs.r * inputs.c) : 0),
    route: "/engineering-calculators/electronics-calc/rc-low-pass-filter",
    seo: {
      title: "RC Low-Pass Filter Cutoff Frequency Calculator | Electronics",
      description: "Calculate -3dB corner cutoff frequency in Hz for passive RC low-pass filters from resistance and capacitance.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electronics-calc/rc-low-pass-filter",
      keywords: ["rc low pass filter", "cutoff frequency", "corner frequency", "low pass rc", "attenuation frequency"]
    },
    searchKeywords: ["rc low pass filter", "cutoff frequency", "low pass", "filter", "fc=1/(2piRC)", "electronics"]
  },
  {
    id: "rc-high-pass-filter",
    slug: "rc-high-pass-filter",
    title: "RC High-Pass Filter Cutoff Frequency Calculator",
    name: "RC High-Pass Filter Cutoff Frequency Calculator",
    discipline: "Electronics",
    disciplineId: "electronics-calc",
    description: "Calculate the corner cutoff frequency (-3dB point) of a passive RC high-pass filter.",
    formula: "fc = 1 / (2 × π × R × C)",
    outputUnit: "Hertz (Hz)",
    assumptions: ["Ideal passive linear components", "Negligible signal source impedance"],
    inputs: [
      { name: "r", label: "Resistance (R)", unit: "Ohms (Ω)", defaultValue: 1000 },
      { name: "c", label: "Capacitance (C)", unit: "Farads (F)", defaultValue: 0.0000001 }
    ],
    calculate: (inputs) => (inputs.r && inputs.c ? 1 / (2 * Math.PI * inputs.r * inputs.c) : 0),
    route: "/engineering-calculators/electronics-calc/rc-high-pass-filter",
    seo: {
      title: "RC High-Pass Filter Cutoff Frequency Calculator | Electronics",
      description: "Calculate high-pass corner cutoff frequency in Hz for RC passive high-pass filters.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electronics-calc/rc-high-pass-filter",
      keywords: ["rc high pass filter", "high pass cutoff frequency", "corner frequency", "high pass rc", "dc blocking filter"]
    },
    searchKeywords: ["rc high pass filter", "high pass", "cutoff frequency", "dc blocking", "filter", "electronics"]
  },
  {
    id: "rl-time-constant",
    slug: "rl-time-constant",
    title: "RL Time Constant Calculator",
    name: "RL Time Constant Calculator",
    discipline: "Electronics",
    disciplineId: "electronics-calc",
    description: "Calculate RL circuit time constant tau (τ = L / R) for inductive current response.",
    formula: "τ = L / R",
    outputUnit: "Seconds (s)",
    assumptions: ["Ideal inductor with zero internal winding resistance", "Constant series resistor R"],
    inputs: [
      { name: "l", label: "Inductance (L)", unit: "Henries (H)", defaultValue: 0.01 },
      { name: "r", label: "Resistance (R)", unit: "Ohms (Ω)", defaultValue: 100 }
    ],
    calculate: (inputs) => (inputs.r ? (inputs.l || 0) / inputs.r : 0),
    route: "/engineering-calculators/electronics-calc/rl-time-constant",
    seo: {
      title: "RL Time Constant Calculator | Electronics",
      description: "Calculate RL circuit inductive time constant tau in seconds from inductance L and resistance R.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electronics-calc/rl-time-constant",
      keywords: ["rl time constant", "tau=l/r", "inductive time constant", "rl delay", "inductor transient"]
    },
    searchKeywords: ["rl time constant", "tau", "inductor", "resistor", "transient", "electronics"]
  },
  {
    id: "lc-resonant-frequency",
    slug: "lc-resonant-frequency",
    title: "LC Resonant Frequency Calculator",
    name: "LC Resonant Frequency Calculator",
    discipline: "Electronics",
    disciplineId: "electronics-calc",
    description: "Calculate natural oscillation resonant frequency f0 of an LC tank circuit.",
    formula: "f0 = 1 / (2 × π × √(L × C))",
    outputUnit: "Hertz (Hz)",
    assumptions: ["Lossless LC circuit with zero parasitic resistance", "Pure sinusoidal AC resonance"],
    inputs: [
      { name: "l", label: "Inductance (L)", unit: "Henries (H)", defaultValue: 0.001 },
      { name: "c", label: "Capacitance (C)", unit: "Farads (F)", defaultValue: 0.00000001 }
    ],
    calculate: (inputs) => (inputs.l && inputs.c && inputs.l > 0 && inputs.c > 0 ? 1 / (2 * Math.PI * Math.sqrt(inputs.l * inputs.c)) : 0),
    route: "/engineering-calculators/electronics-calc/lc-resonant-frequency",
    seo: {
      title: "LC Resonant Frequency Calculator | Electronics",
      description: "Calculate resonant frequency f0 in Hz for tank LC circuits using inductance and capacitance.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electronics-calc/lc-resonant-frequency",
      keywords: ["lc resonant frequency", "lc tank circuit", "resonance calculator", "f0=1/2pi sqrt(lc)", "rf tuner"]
    },
    searchKeywords: ["lc resonant frequency", "tank circuit", "resonance", "inductor capacitor", "rf tuner", "electronics"]
  },
  {
    id: "rlc-resonant-frequency",
    slug: "rlc-resonant-frequency",
    title: "RLC Resonant Frequency Calculator",
    name: "RLC Resonant Frequency Calculator",
    discipline: "Electronics",
    disciplineId: "electronics-calc",
    description: "Calculate natural undamped resonant frequency f0 of a series or parallel RLC circuit.",
    formula: "f0 = 1 / (2 × π × √(L × C))",
    outputUnit: "Hertz (Hz)",
    assumptions: ["Linear time-invariant R, L, C components", "Lumped element circuit network"],
    inputs: [
      { name: "l", label: "Inductance (L)", unit: "Henries (H)", defaultValue: 0.01 },
      { name: "c", label: "Capacitance (C)", unit: "Farads (F)", defaultValue: 0.0000001 },
      { name: "r", label: "Damping Resistance (R)", unit: "Ohms (Ω)", defaultValue: 10 }
    ],
    calculate: (inputs) => (inputs.l && inputs.c && inputs.l > 0 && inputs.c > 0 ? 1 / (2 * Math.PI * Math.sqrt(inputs.l * inputs.c)) : 0),
    route: "/engineering-calculators/electronics-calc/rlc-resonant-frequency",
    seo: {
      title: "RLC Resonant Frequency Calculator | Electronics",
      description: "Calculate undamped resonant frequency f0 for RLC series and parallel resonant networks.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electronics-calc/rlc-resonant-frequency",
      keywords: ["rlc resonant frequency", "series rlc resonance", "parallel rlc resonance", "damping factor", "circuit resonance"]
    },
    searchKeywords: ["rlc resonant frequency", "rlc circuit", "resonance", "damping", "quality factor", "electronics"]
  },
  {
    id: "decibel-voltage-gain",
    slug: "decibel-voltage-gain",
    title: "Decibel (Voltage Gain) Calculator",
    name: "Decibel (Voltage Gain) Calculator",
    discipline: "Electronics",
    disciplineId: "electronics-calc",
    description: "Calculate voltage amplification or attenuation ratio in decibels (dB).",
    formula: "Gain (dB) = 20 × log₁₀(V_out / V_in)",
    outputUnit: "Decibels (dB)",
    assumptions: ["Matched input and output terminal load impedances", "AC sinusoidal signal voltages"],
    inputs: [
      { name: "vIn", label: "Input Voltage (V_in)", unit: "Volts (V)", defaultValue: 0.1 },
      { name: "vOut", label: "Output Voltage (V_out)", unit: "Volts (V)", defaultValue: 1.0 }
    ],
    calculate: (inputs) => (inputs.vIn && inputs.vOut && inputs.vIn > 0 && inputs.vOut > 0 ? 20 * Math.log10(inputs.vOut / inputs.vIn) : 0),
    route: "/engineering-calculators/electronics-calc/decibel-voltage-gain",
    seo: {
      title: "Decibel (Voltage Gain) Calculator | Electronics",
      description: "Calculate signal voltage gain or attenuation in dB from input and output voltage levels.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electronics-calc/decibel-voltage-gain",
      keywords: ["decibel voltage gain", "voltage gain db", "20 log vout/vin", "amplifier db gain", "attenuation db"]
    },
    searchKeywords: ["decibel voltage gain", "db gain", "voltage amplification", "20 log", "attenuation", "electronics"]
  },
  {
    id: "decibel-power-gain",
    slug: "decibel-power-gain",
    title: "Decibel (Power Gain) Calculator",
    name: "Decibel (Power Gain) Calculator",
    discipline: "Electronics",
    disciplineId: "electronics-calc",
    description: "Calculate power amplification ratio or loss in decibels (dB) from input and output power levels.",
    formula: "Gain (dB) = 10 × log₁₀(P_out / P_in)",
    outputUnit: "Decibels (dB)",
    assumptions: ["Positive input and output signal power levels", "Steady state power measurement"],
    inputs: [
      { name: "pIn", label: "Input Power (P_in)", unit: "Watts (W)", defaultValue: 0.01 },
      { name: "pOut", label: "Output Power (P_out)", unit: "Watts (W)", defaultValue: 1.0 }
    ],
    calculate: (inputs) => (inputs.pIn && inputs.pOut && inputs.pIn > 0 && inputs.pOut > 0 ? 10 * Math.log10(inputs.pOut / inputs.pIn) : 0),
    route: "/engineering-calculators/electronics-calc/decibel-power-gain",
    seo: {
      title: "Decibel (Power Gain) Calculator | Electronics",
      description: "Calculate RF or audio power gain in dB from input and output power levels.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electronics-calc/decibel-power-gain",
      keywords: ["decibel power gain", "power gain db", "10 log pout/pin", "rf power gain", "amplifier power gain"]
    },
    searchKeywords: ["decibel power gain", "db gain", "power amplification", "10 log", "rf power", "electronics"]
  },
  {
    id: "op-amp-gain",
    slug: "op-amp-gain",
    title: "Operational Amplifier Gain Calculator",
    name: "Operational Amplifier Gain Calculator",
    discipline: "Electronics",
    disciplineId: "electronics-calc",
    description: "Calculate closed-loop voltage gain Av of a non-inverting operational amplifier circuit.",
    formula: "Av = 1 + (Rf / R1)",
    outputUnit: "Ratio (V/V)",
    assumptions: ["Ideal op-amp with infinite open-loop gain and input impedance", "Operation within supply voltage limits"],
    inputs: [
      { name: "r1", label: "Input Resistor (R1)", unit: "Ohms (Ω)", defaultValue: 10000 },
      { name: "rf", label: "Feedback Resistor (Rf)", unit: "Ohms (Ω)", defaultValue: 90000 }
    ],
    calculate: (inputs) => (inputs.r1 ? 1 + (inputs.rf || 0) / inputs.r1 : 0),
    route: "/engineering-calculators/electronics-calc/op-amp-gain",
    seo: {
      title: "Operational Amplifier Gain Calculator | Electronics",
      description: "Calculate non-inverting op-amp voltage gain ratio Av from feedback resistor Rf and input resistor R1.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electronics-calc/op-amp-gain",
      keywords: ["op amp gain", "operational amplifier gain", "non inverting op amp", "av = 1 + rf/r1", "feedback resistance"]
    },
    searchKeywords: ["op amp gain", "operational amplifier", "non inverting", "feedback resistor", "voltage gain", "electronics"]
  },
  {
    id: "led-current-limiting-resistor",
    slug: "led-current-limiting-resistor",
    title: "LED Current Limiting Resistor Calculator",
    name: "LED Current Limiting Resistor Calculator",
    discipline: "Electronics",
    disciplineId: "electronics-calc",
    description: "Calculate required series current limiting resistor R for driving an LED from a DC power supply.",
    formula: "R = (V_supply - V_forward) / I_led",
    outputUnit: "Ohms (Ω)",
    assumptions: ["DC supply voltage higher than LED forward voltage drop", "Constant LED forward voltage drop V_f"],
    inputs: [
      { name: "vSupply", label: "Supply Voltage (V_supply)", unit: "Volts (V)", defaultValue: 5 },
      { name: "vForward", label: "LED Forward Voltage (V_f)", unit: "Volts (V)", defaultValue: 2 },
      { name: "iLed", label: "LED Current (I_led)", unit: "Amperes (A)", defaultValue: 0.02 }
    ],
    calculate: (inputs) => {
      const vDiff = (inputs.vSupply || 0) - (inputs.vForward || 0);
      return inputs.iLed && vDiff > 0 ? vDiff / inputs.iLed : 0;
    },
    route: "/engineering-calculators/electronics-calc/led-current-limiting-resistor",
    seo: {
      title: "LED Current Limiting Resistor Calculator | Electronics",
      description: "Calculate required series resistor Ohms to safely power an LED from a DC power source.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electronics-calc/led-current-limiting-resistor",
      keywords: ["led resistor calculator", "current limiting resistor", "led series resistor", "led forward voltage", "led ohm law"]
    },
    searchKeywords: ["led resistor", "current limiting", "led forward voltage", "series resistor", "diode", "electronics"]
  },
  {
    id: "voltage-regulator-power-dissipation",
    slug: "voltage-regulator-power-dissipation",
    title: "Voltage Regulator Power Dissipation Calculator",
    name: "Voltage Regulator Power Dissipation Calculator",
    discipline: "Electronics",
    disciplineId: "electronics-calc",
    description: "Calculate thermal power dissipation in Watts for linear voltage regulator ICs.",
    formula: "P_diss = (V_in - V_out) × I_load + (V_in × I_quiescent)",
    outputUnit: "Watts (W)",
    assumptions: ["Continuous linear DC regulation", "Steady state load current I_load"],
    inputs: [
      { name: "vIn", label: "Input Voltage (V_in)", unit: "Volts (V)", defaultValue: 12 },
      { name: "vOut", label: "Regulated Output (V_out)", unit: "Volts (V)", defaultValue: 5 },
      { name: "iLoad", label: "Load Current (I_load)", unit: "Amperes (A)", defaultValue: 0.5 },
      { name: "iQuiescent", label: "Quiescent Current (I_q)", unit: "Amperes (A)", defaultValue: 0.005 }
    ],
    calculate: (inputs) => ((inputs.vIn || 0) - (inputs.vOut || 0)) * (inputs.iLoad || 0) + (inputs.vIn || 0) * (inputs.iQuiescent || 0),
    route: "/engineering-calculators/electronics-calc/voltage-regulator-power-dissipation",
    seo: {
      title: "Voltage Regulator Power Dissipation Calculator | Electronics",
      description: "Calculate thermal power dissipation in Watts for linear regulators (LM7805, LDOs) under load.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electronics-calc/voltage-regulator-power-dissipation",
      keywords: ["voltage regulator power dissipation", "linear regulator heat", "ldo power dissipation", "lm7805 power", "thermal dissipation"]
    },
    searchKeywords: ["voltage regulator power dissipation", "linear regulator", "ldo", "lm7805", "heat dissipation", "thermal", "electronics"]
  },
  {
    id: "pcb-trace-current-capacity",
    slug: "pcb-trace-current-capacity",
    title: "PCB Trace Current Capacity Calculator",
    name: "PCB Trace Current Capacity Calculator",
    discipline: "Electronics",
    disciplineId: "electronics-calc",
    description: "Calculate maximum PCB trace current carrying capacity based on IPC-2221 conductor thermal standard.",
    formula: "I = k × ΔT^0.44 × A^0.725 (IPC-2221, k=0.048 for external layer)",
    outputUnit: "Amperes (A)",
    assumptions: ["IPC-2221 empirical thermal current model", "Standard copper thickness (1 oz/ft² = 1.37 mils)", "External surface PCB layer trace"],
    inputs: [
      { name: "width", label: "Trace Width", unit: "Mils (thou)", defaultValue: 50 },
      { name: "thickness", label: "Copper Thickness", unit: "Ounces (oz/ft²)", defaultValue: 1 },
      { name: "tempRise", label: "Temperature Rise (ΔT)", unit: "Degrees C (°C)", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      const w = inputs.width || 0;
      const th = (inputs.thickness || 1) * 1.37;
      const areaMil2 = w * th;
      if (!areaMil2 || areaMil2 <= 0) return 0;
      const dt = inputs.tempRise || 10;
      const k = 0.048;
      return k * Math.pow(dt, 0.44) * Math.pow(areaMil2, 0.725);
    },
    route: "/engineering-calculators/electronics-calc/pcb-trace-current-capacity",
    seo: {
      title: "PCB Trace Current Capacity Calculator | Electronics",
      description: "Calculate maximum trace current capacity in Amperes using IPC-2221 thermal standard.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/electronics-calc/pcb-trace-current-capacity",
      keywords: ["pcb trace current capacity", "ipc 2221 calculator", "pcb trace width current", "copper thickness current", "pcb ampacity"]
    },
    searchKeywords: ["pcb trace current capacity", "ipc 2221", "trace width", "ampacity", "copper thickness", "pcb design", "electronics"]
  },

  // --- MATHEMATICS ---
  {
    id: "quadratic-solver",
    slug: "quadratic-solver",
    title: "Quadratic Equation Roots Solver",
    name: "Quadratic Equation Roots Solver",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Solve ax² + bx + c = 0 quadratic discriminant roots.",
    formula: "x = [-b ± √(b² - 4ac)] / 2a",
    outputUnit: "Root x1",
    assumptions: ["Non-zero coefficient a"],
    inputs: [
      { name: "a", label: "Coefficient a", unit: "Number", defaultValue: 1 },
      { name: "b", label: "Coefficient b", unit: "Number", defaultValue: -5 },
      { name: "c", label: "Coefficient c", unit: "Number", defaultValue: 6 }
    ],
    calculate: (inputs) => {
      const a = inputs.a || 1;
      const b = inputs.b || 0;
      const c = inputs.c || 0;
      const disc = b * b - 4 * a * c;
      if (a === 0 || disc < 0) return 0;
      return (-b + Math.sqrt(disc)) / (2 * a);
    },
    route: "/engineering-calculators/mathematics-calc/quadratic-solver",
    seo: {
      title: "Quadratic Equation Roots Solver | Mathematics",
      description: "Calculate real algebraic roots and discriminant for quadratic polynomials.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/quadratic-solver",
      keywords: ["quadratic formula", "roots solver", "discriminant", "algebraic equation"]
    },
    searchKeywords: ["quadratic formula", "roots", "discriminant", "algebra", "mathematics"]
  },
  {
    id: "matrix-determinant-calc",
    slug: "matrix-determinant-calc",
    title: "Matrix Determinant Calculator",
    name: "Matrix Determinant Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate the determinant of a 3x3 square matrix.",
    formula: "det(A) = a11(a22·a33 - a23·a32) - a12(a21·a33 - a23·a31) + a13(a21·a32 - a22·a31)",
    outputUnit: "Determinant det(A)",
    assumptions: ["3x3 square matrix real coefficients"],
    inputs: [
      { name: "a11", label: "Element a11", unit: "Number", defaultValue: 1 },
      { name: "a12", label: "Element a12", unit: "Number", defaultValue: 2 },
      { name: "a13", label: "Element a13", unit: "Number", defaultValue: 3 },
      { name: "a21", label: "Element a21", unit: "Number", defaultValue: 0 },
      { name: "a22", label: "Element a22", unit: "Number", defaultValue: 1 },
      { name: "a23", label: "Element a23", unit: "Number", defaultValue: 4 },
      { name: "a31", label: "Element a31", unit: "Number", defaultValue: 5 },
      { name: "a32", label: "Element a32", unit: "Number", defaultValue: 6 },
      { name: "a33", label: "Element a33", unit: "Number", defaultValue: 0 }
    ],
    calculate: (inputs) => {
      const a11 = inputs.a11 || 0, a12 = inputs.a12 || 0, a13 = inputs.a13 || 0;
      const a21 = inputs.a21 || 0, a22 = inputs.a22 || 0, a23 = inputs.a23 || 0;
      const a31 = inputs.a31 || 0, a32 = inputs.a32 || 0, a33 = inputs.a33 || 0;
      return a11 * (a22 * a33 - a23 * a32) - a12 * (a21 * a33 - a23 * a31) + a13 * (a21 * a32 - a22 * a31);
    },
    route: "/engineering-calculators/mathematics-calc/matrix-determinant-calc",
    seo: {
      title: "Matrix Determinant Calculator | Mathematics",
      description: "Calculate the scalar determinant for 3x3 square matrices.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/matrix-determinant-calc",
      keywords: ["matrix determinant", "3x3 matrix determinant", "linear algebra det", "matrix algebra"]
    },
    searchKeywords: ["matrix determinant", "3x3 matrix determinant", "linear algebra det", "matrix algebra", "mathematics"]
  },
  {
    id: "matrix-inverse-calc",
    slug: "matrix-inverse-calc",
    title: "Matrix Inverse Calculator",
    name: "Matrix Inverse Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate the determinant of the inverse matrix det(A⁻¹) = 1 / det(A) for a 2x2 matrix.",
    formula: "det(A⁻¹) = 1 / (a11·a22 - a12·a21)",
    outputUnit: "det(A⁻¹)",
    assumptions: ["Non-singular square matrix (det(A) ≠ 0)"],
    inputs: [
      { name: "a11", label: "Element a11", unit: "Number", defaultValue: 2 },
      { name: "a12", label: "Element a12", unit: "Number", defaultValue: 1 },
      { name: "a21", label: "Element a21", unit: "Number", defaultValue: 1 },
      { name: "a22", label: "Element a22", unit: "Number", defaultValue: 3 }
    ],
    calculate: (inputs) => {
      const det = (inputs.a11 || 0) * (inputs.a22 || 0) - (inputs.a12 || 0) * (inputs.a21 || 0);
      return det !== 0 ? 1 / det : 0;
    },
    route: "/engineering-calculators/mathematics-calc/matrix-inverse-calc",
    seo: {
      title: "Matrix Inverse Calculator | Mathematics",
      description: "Calculate inverse matrix properties and determinant det(A⁻¹) for 2x2 square matrices.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/matrix-inverse-calc",
      keywords: ["matrix inverse", "inverse matrix determinant", "2x2 inverse", "linear algebra"]
    },
    searchKeywords: ["matrix inverse", "inverse matrix determinant", "2x2 inverse", "linear algebra", "mathematics"]
  },
  {
    id: "matrix-multiplication-calc",
    slug: "matrix-multiplication-calc",
    title: "Matrix Multiplication Calculator",
    name: "Matrix Multiplication Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate product matrix determinant det(A × B) = det(A) × det(B) for two 2x2 matrices.",
    formula: "det(A × B) = (a11·a22 - a12·a21) × (b11·b22 - b12·b21)",
    outputUnit: "det(A × B)",
    assumptions: ["Conformable 2x2 square real matrices"],
    inputs: [
      { name: "a11", label: "Matrix A a11", unit: "Number", defaultValue: 1 },
      { name: "a12", label: "Matrix A a12", unit: "Number", defaultValue: 2 },
      { name: "a21", label: "Matrix A a21", unit: "Number", defaultValue: 3 },
      { name: "a22", label: "Matrix A a22", unit: "Number", defaultValue: 4 },
      { name: "b11", label: "Matrix B b11", unit: "Number", defaultValue: 5 },
      { name: "b12", label: "Matrix B b12", unit: "Number", defaultValue: 6 },
      { name: "b21", label: "Matrix B b21", unit: "Number", defaultValue: 7 },
      { name: "b22", label: "Matrix B b22", unit: "Number", defaultValue: 8 }
    ],
    calculate: (inputs) => {
      const detA = (inputs.a11 || 0) * (inputs.a22 || 0) - (inputs.a12 || 0) * (inputs.a21 || 0);
      const detB = (inputs.b11 || 0) * (inputs.b22 || 0) - (inputs.b12 || 0) * (inputs.b21 || 0);
      return detA * detB;
    },
    route: "/engineering-calculators/mathematics-calc/matrix-multiplication-calc",
    seo: {
      title: "Matrix Multiplication Calculator | Mathematics",
      description: "Calculate matrix multiplication properties and product determinants.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/matrix-multiplication-calc",
      keywords: ["matrix multiplication", "matrix product determinant", "2x2 matrix product", "linear algebra"]
    },
    searchKeywords: ["matrix multiplication", "matrix product determinant", "2x2 matrix product", "linear algebra", "mathematics"]
  },
  {
    id: "linear-system-solver",
    slug: "linear-system-solver",
    title: "Linear System Solver (Gaussian Elimination)",
    name: "Linear System Solver (Gaussian Elimination)",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Solve a 2x2 system of linear equations a1·x + b1·y = c1 and a2·x + b2·y = c2 using Cramer's rule.",
    formula: "x = (c1·b2 - b1·c2) / (a1·b2 - b1·a2)",
    outputUnit: "Variable x",
    assumptions: ["Non-singular coefficient matrix (a1·b2 - b1·a2 ≠ 0)"],
    inputs: [
      { name: "a1", label: "a1 (Equation 1)", unit: "Coefficient", defaultValue: 2 },
      { name: "b1", label: "b1 (Equation 1)", unit: "Coefficient", defaultValue: 3 },
      { name: "c1", label: "c1 (Equation 1)", unit: "Constant", defaultValue: 8 },
      { name: "a2", label: "a2 (Equation 2)", unit: "Coefficient", defaultValue: 1 },
      { name: "b2", label: "b2 (Equation 2)", unit: "Coefficient", defaultValue: -1 },
      { name: "c2", label: "c2 (Equation 2)", unit: "Constant", defaultValue: 1 }
    ],
    calculate: (inputs) => {
      const det = (inputs.a1 || 0) * (inputs.b2 || 0) - (inputs.b1 || 0) * (inputs.a2 || 0);
      return det !== 0 ? ((inputs.c1 || 0) * (inputs.b2 || 0) - (inputs.b1 || 0) * (inputs.c2 || 0)) / det : 0;
    },
    route: "/engineering-calculators/mathematics-calc/linear-system-solver",
    seo: {
      title: "Linear System Solver | Mathematics",
      description: "Solve 2x2 simultaneous linear equation systems using Cramer's rule and Gaussian elimination.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/linear-system-solver",
      keywords: ["linear system solver", "gaussian elimination", "cramers rule 2x2", "simultaneous equations"]
    },
    searchKeywords: ["linear system solver", "gaussian elimination", "cramers rule 2x2", "simultaneous equations", "mathematics"]
  },
  {
    id: "vector-magnitude-calc",
    slug: "vector-magnitude-calc",
    title: "Vector Magnitude Calculator",
    name: "Vector Magnitude Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate Euclidean norm (magnitude length) of a 3D vector v = (x, y, z).",
    formula: "|v| = √(x² + y² + z²)",
    outputUnit: "Magnitude |v|",
    assumptions: ["3D Cartesian coordinate system"],
    inputs: [
      { name: "x", label: "Component X", unit: "Scalar", defaultValue: 3 },
      { name: "y", label: "Component Y", unit: "Scalar", defaultValue: 4 },
      { name: "z", label: "Component Z", unit: "Scalar", defaultValue: 12 }
    ],
    calculate: (inputs) => {
      const x = inputs.x || 0, y = inputs.y || 0, z = inputs.z || 0;
      return Math.sqrt(x * x + y * y + z * z);
    },
    route: "/engineering-calculators/mathematics-calc/vector-magnitude-calc",
    seo: {
      title: "Vector Magnitude Calculator | Mathematics",
      description: "Calculate Euclidean norm magnitude for 3D vector components.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/vector-magnitude-calc",
      keywords: ["vector magnitude", "vector norm", "3d vector length", "euclidean norm"]
    },
    searchKeywords: ["vector magnitude", "vector norm", "3d vector length", "euclidean norm", "mathematics"]
  },
  {
    id: "dot-product-calc",
    slug: "dot-product-calc",
    title: "Dot Product Calculator",
    name: "Dot Product Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate the scalar dot product of two 3D vectors A and B.",
    formula: "A · B = Ax·Bx + Ay·By + Az·Bz",
    outputUnit: "Scalar Product",
    assumptions: ["3D Euclidean vector space"],
    inputs: [
      { name: "ax", label: "Vector A (x)", unit: "Scalar", defaultValue: 1 },
      { name: "ay", label: "Vector A (y)", unit: "Scalar", defaultValue: 2 },
      { name: "az", label: "Vector A (z)", unit: "Scalar", defaultValue: 3 },
      { name: "bx", label: "Vector B (x)", unit: "Scalar", defaultValue: 4 },
      { name: "by", label: "Vector B (y)", unit: "Scalar", defaultValue: 5 },
      { name: "bz", label: "Vector B (z)", unit: "Scalar", defaultValue: 6 }
    ],
    calculate: (inputs) => (inputs.ax || 0) * (inputs.bx || 0) + (inputs.ay || 0) * (inputs.by || 0) + (inputs.az || 0) * (inputs.bz || 0),
    route: "/engineering-calculators/mathematics-calc/dot-product-calc",
    seo: {
      title: "Dot Product Calculator | Mathematics",
      description: "Calculate scalar dot product for 3D spatial vectors.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/dot-product-calc",
      keywords: ["dot product", "scalar product", "vector dot product 3d", "vector multiplication"]
    },
    searchKeywords: ["dot product", "scalar product", "vector dot product 3d", "vector multiplication", "mathematics"]
  },
  {
    id: "cross-product-calc",
    slug: "cross-product-calc",
    title: "Cross Product Calculator",
    name: "Cross Product Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate the magnitude of the 3D vector cross product |A × B|.",
    formula: "|A × B| = √[(Ay·Bz - Az·By)² + (Az·Bx - Ax·Bz)² + (Ax·By - Ay·Bx)²]",
    outputUnit: "Magnitude |A × B|",
    assumptions: ["Right-handed 3D Cartesian coordinate system"],
    inputs: [
      { name: "ax", label: "Vector A (x)", unit: "Scalar", defaultValue: 1 },
      { name: "ay", label: "Vector A (y)", unit: "Scalar", defaultValue: 0 },
      { name: "az", label: "Vector A (z)", unit: "Scalar", defaultValue: 0 },
      { name: "bx", label: "Vector B (x)", unit: "Scalar", defaultValue: 0 },
      { name: "by", label: "Vector B (y)", unit: "Scalar", defaultValue: 1 },
      { name: "bz", label: "Vector B (z)", unit: "Scalar", defaultValue: 0 }
    ],
    calculate: (inputs) => {
      const ax = inputs.ax || 0, ay = inputs.ay || 0, az = inputs.az || 0;
      const bx = inputs.bx || 0, by = inputs.by || 0, bz = inputs.bz || 0;
      const cx = ay * bz - az * by;
      const cy = az * bx - ax * bz;
      const cz = ax * by - ay * bx;
      return Math.sqrt(cx * cx + cy * cy + cz * cz);
    },
    route: "/engineering-calculators/mathematics-calc/cross-product-calc",
    seo: {
      title: "Cross Product Calculator | Mathematics",
      description: "Calculate 3D vector cross product magnitude |A × B|.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/cross-product-calc",
      keywords: ["cross product", "vector cross product", "outer product 3d", "vector cross product magnitude"]
    },
    searchKeywords: ["cross product", "vector cross product", "outer product 3d", "vector cross product magnitude", "mathematics"]
  },
  {
    id: "distance-two-points-calc",
    slug: "distance-two-points-calc",
    title: "Distance Between Two Points Calculator",
    name: "Distance Between Two Points Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate 3D Euclidean distance between coordinates (x1, y1, z1) and (x2, y2, z2).",
    formula: "d = √[(x2 - x1)² + (y2 - y1)² + (z2 - z1)²]",
    outputUnit: "Distance d",
    assumptions: ["Cartesian 3D coordinate space"],
    inputs: [
      { name: "x1", label: "Point 1 (x1)", unit: "Coordinate", defaultValue: 0 },
      { name: "y1", label: "Point 1 (y1)", unit: "Coordinate", defaultValue: 0 },
      { name: "z1", label: "Point 1 (z1)", unit: "Coordinate", defaultValue: 0 },
      { name: "x2", label: "Point 2 (x2)", unit: "Coordinate", defaultValue: 3 },
      { name: "y2", label: "Point 2 (y2)", unit: "Coordinate", defaultValue: 4 },
      { name: "z2", label: "Point 2 (z2)", unit: "Coordinate", defaultValue: 0 }
    ],
    calculate: (inputs) => {
      const dx = (inputs.x2 || 0) - (inputs.x1 || 0);
      const dy = (inputs.y2 || 0) - (inputs.y1 || 0);
      const dz = (inputs.z2 || 0) - (inputs.z1 || 0);
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    },
    route: "/engineering-calculators/mathematics-calc/distance-two-points-calc",
    seo: {
      title: "Distance Between Two Points Calculator | Mathematics",
      description: "Calculate Euclidean 3D distance between two point coordinates.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/distance-two-points-calc",
      keywords: ["distance between two points", "3d distance formula", "euclidean distance", "coordinate geometry"]
    },
    searchKeywords: ["distance between two points", "3d distance formula", "euclidean distance", "coordinate geometry", "mathematics"]
  },
  {
    id: "midpoint-calc",
    slug: "midpoint-calc",
    title: "Midpoint Calculator",
    name: "Midpoint Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate X-coordinate of the midpoint between two points (x1, y1, z1) and (x2, y2, z2).",
    formula: "M_x = (x1 + x2) / 2",
    outputUnit: "Midpoint X",
    assumptions: ["Euclidean coordinate geometry"],
    inputs: [
      { name: "x1", label: "Point 1 (x1)", unit: "Coordinate", defaultValue: 2 },
      { name: "y1", label: "Point 1 (y1)", unit: "Coordinate", defaultValue: 4 },
      { name: "z1", label: "Point 1 (z1)", unit: "Coordinate", defaultValue: 6 },
      { name: "x2", label: "Point 2 (x2)", unit: "Coordinate", defaultValue: 8 },
      { name: "y2", label: "Point 2 (y2)", unit: "Coordinate", defaultValue: 10 },
      { name: "z2", label: "Point 2 (z2)", unit: "Coordinate", defaultValue: 12 }
    ],
    calculate: (inputs) => ((inputs.x1 || 0) + (inputs.x2 || 0)) / 2,
    route: "/engineering-calculators/mathematics-calc/midpoint-calc",
    seo: {
      title: "Midpoint Calculator | Mathematics",
      description: "Calculate midpoint coordinate between two points in geometry.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/midpoint-calc",
      keywords: ["midpoint calculator", "coordinate midpoint", "segment midpoint", "geometry"]
    },
    searchKeywords: ["midpoint calculator", "coordinate midpoint", "segment midpoint", "geometry", "mathematics"]
  },
  {
    id: "standard-deviation-calc",
    slug: "standard-deviation-calc",
    title: "Standard Deviation Calculator",
    name: "Standard Deviation Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate sample standard deviation s for a set of 5 sample observations.",
    formula: "s = √[ ∑(xi - x̄)² / (n - 1) ]",
    outputUnit: "Standard Deviation (s)",
    assumptions: ["Unbiased sample variance estimator (n - 1 = 4)"],
    inputs: [
      { name: "x1", label: "Value x1", unit: "Sample", defaultValue: 10 },
      { name: "x2", label: "Value x2", unit: "Sample", defaultValue: 12 },
      { name: "x3", label: "Value x3", unit: "Sample", defaultValue: 15 },
      { name: "x4", label: "Value x4", unit: "Sample", defaultValue: 18 },
      { name: "x5", label: "Value x5", unit: "Sample", defaultValue: 20 }
    ],
    calculate: (inputs) => {
      const arr = [inputs.x1 || 0, inputs.x2 || 0, inputs.x3 || 0, inputs.x4 || 0, inputs.x5 || 0];
      const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
      const devSum = arr.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0);
      return Math.sqrt(devSum / (arr.length - 1));
    },
    route: "/engineering-calculators/mathematics-calc/standard-deviation-calc",
    seo: {
      title: "Standard Deviation Calculator | Mathematics",
      description: "Calculate sample standard deviation and variance metrics.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/standard-deviation-calc",
      keywords: ["standard deviation", "sample standard deviation", "variance calculator", "statistics"]
    },
    searchKeywords: ["standard deviation", "sample standard deviation", "variance calculator", "statistics", "mathematics"]
  },
  {
    id: "mean-median-mode-calc",
    slug: "mean-median-mode-calc",
    title: "Mean, Median & Mode Calculator",
    name: "Mean, Median & Mode Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate arithmetic mean x̄ for a numerical dataset.",
    formula: "x̄ = (x1 + x2 + x3 + x4 + x5) / 5",
    outputUnit: "Mean (x̄)",
    assumptions: ["Equally weighted numerical data values"],
    inputs: [
      { name: "x1", label: "Value x1", unit: "Data", defaultValue: 5 },
      { name: "x2", label: "Value x2", unit: "Data", defaultValue: 10 },
      { name: "x3", label: "Value x3", unit: "Data", defaultValue: 15 },
      { name: "x4", label: "Value x4", unit: "Data", defaultValue: 20 },
      { name: "x5", label: "Value x5", unit: "Data", defaultValue: 25 }
    ],
    calculate: (inputs) => ((inputs.x1 || 0) + (inputs.x2 || 0) + (inputs.x3 || 0) + (inputs.x4 || 0) + (inputs.x5 || 0)) / 5,
    route: "/engineering-calculators/mathematics-calc/mean-median-mode-calc",
    seo: {
      title: "Mean, Median & Mode Calculator | Mathematics",
      description: "Calculate central tendency arithmetic mean for datasets.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/mean-median-mode-calc",
      keywords: ["mean median mode", "arithmetic mean", "central tendency", "statistics"]
    },
    searchKeywords: ["mean median mode", "arithmetic mean", "central tendency", "statistics", "mathematics"]
  },
  {
    id: "permutation-npr-calc",
    slug: "permutation-npr-calc",
    title: "Permutation Calculator (nPr)",
    name: "Permutation Calculator (nPr)",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate ordered permutations P(n, r) = n! / (n - r)!.",
    formula: "P(n, r) = n! / (n - r)!",
    outputUnit: "Permutations Count",
    assumptions: ["Order matters; sampling without replacement; n ≥ r ≥ 0"],
    inputs: [
      { name: "n", label: "Total Set Size (n)", unit: "Count", defaultValue: 10 },
      { name: "r", label: "Subset Selected (r)", unit: "Count", defaultValue: 3 }
    ],
    calculate: (inputs) => {
      const n = Math.floor(inputs.n || 0);
      const r = Math.floor(inputs.r || 0);
      if (n < 0 || r < 0 || r > n) return 0;
      let perm = 1;
      for (let i = 0; i < r; i++) {
        perm *= n - i;
      }
      return perm;
    },
    route: "/engineering-calculators/mathematics-calc/permutation-npr-calc",
    seo: {
      title: "Permutation Calculator (nPr) | Mathematics",
      description: "Calculate permutations nPr for combinatorics and probability.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/permutation-npr-calc",
      keywords: ["permutation npr", "npr calculator", "permutations count", "combinatorics"]
    },
    searchKeywords: ["permutation npr", "npr calculator", "permutations count", "combinatorics", "mathematics"]
  },
  {
    id: "combination-ncr-calc",
    slug: "combination-ncr-calc",
    title: "Combination Calculator (nCr)",
    name: "Combination Calculator (nCr)",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate unordered combinations C(n, r) = n! / [r! (n - r)!].",
    formula: "C(n, r) = n! / [r! (n - r)!]",
    outputUnit: "Combinations Count",
    assumptions: ["Order does not matter; sampling without replacement; n ≥ r ≥ 0"],
    inputs: [
      { name: "n", label: "Total Set Size (n)", unit: "Count", defaultValue: 10 },
      { name: "r", label: "Subset Selected (r)", unit: "Count", defaultValue: 3 }
    ],
    calculate: (inputs) => {
      const n = Math.floor(inputs.n || 0);
      const r = Math.floor(inputs.r || 0);
      if (n < 0 || r < 0 || r > n) return 0;
      let comb = 1;
      const k = Math.min(r, n - r);
      for (let i = 1; i <= k; i++) {
        comb = (comb * (n - k + i)) / i;
      }
      return Math.round(comb);
    },
    route: "/engineering-calculators/mathematics-calc/combination-ncr-calc",
    seo: {
      title: "Combination Calculator (nCr) | Mathematics",
      description: "Calculate combinations nCr for combinatorics and probability.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/combination-ncr-calc",
      keywords: ["combination ncr", "ncr calculator", "binomial coefficient", "combinatorics"]
    },
    searchKeywords: ["combination ncr", "ncr calculator", "binomial coefficient", "combinatorics", "mathematics"]
  },
  {
    id: "binomial-probability-calc",
    slug: "binomial-probability-calc",
    title: "Binomial Probability Calculator",
    name: "Binomial Probability Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate exact binomial probability P(X = k) = C(n, k) · p^k · (1 - p)^(n - k).",
    formula: "P(X = k) = [n! / (k!(n - k)!)] × p^k × (1 - p)^(n - k)",
    outputUnit: "Probability (0 - 1)",
    assumptions: ["Independent Bernoulli trials with constant probability p"],
    inputs: [
      { name: "n", label: "Number of Trials (n)", unit: "Count", defaultValue: 10 },
      { name: "k", label: "Exact Successes (k)", unit: "Count", defaultValue: 3 },
      { name: "p", label: "Success Probability (p)", unit: "Ratio (0-1)", defaultValue: 0.5 }
    ],
    calculate: (inputs) => {
      const n = Math.floor(inputs.n || 0);
      const k = Math.floor(inputs.k || 0);
      const p = Math.min(Math.max(inputs.p || 0.5, 0), 1);
      if (n < 0 || k < 0 || k > n) return 0;
      let comb = 1;
      const subK = Math.min(k, n - k);
      for (let i = 1; i <= subK; i++) {
        comb = (comb * (n - subK + i)) / i;
      }
      return comb * Math.pow(p, k) * Math.pow(1 - p, n - k);
    },
    route: "/engineering-calculators/mathematics-calc/binomial-probability-calc",
    seo: {
      title: "Binomial Probability Calculator | Mathematics",
      description: "Calculate exact Bernoulli trial binomial probabilities P(X = k).",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/binomial-probability-calc",
      keywords: ["binomial probability", "bernoulli trial", "binomial distribution", "statistics"]
    },
    searchKeywords: ["binomial probability", "bernoulli trial", "binomial distribution", "statistics", "mathematics"]
  },
  {
    id: "z-score-calc",
    slug: "z-score-calc",
    title: "Z-Score Calculator",
    name: "Z-Score Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate standard normal distribution Z-score from raw value x, mean μ, and standard deviation σ.",
    formula: "Z = (x - μ) / σ",
    outputUnit: "Z-score",
    assumptions: ["Normal distribution curve with σ > 0"],
    inputs: [
      { name: "x", label: "Raw Score (x)", unit: "Value", defaultValue: 85 },
      { name: "mean", label: "Population Mean (μ)", unit: "Value", defaultValue: 70 },
      { name: "stdDev", label: "Standard Deviation (σ)", unit: "Value", defaultValue: 10 }
    ],
    calculate: (inputs) => (inputs.stdDev ? ((inputs.x || 0) - (inputs.mean || 0)) / inputs.stdDev : 0),
    route: "/engineering-calculators/mathematics-calc/z-score-calc",
    seo: {
      title: "Z-Score Calculator | Mathematics",
      description: "Calculate standard score Z value from raw data, mean, and standard deviation.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/z-score-calc",
      keywords: ["z score calculator", "standard score", "normal distribution z", "statistics"]
    },
    searchKeywords: ["z score calculator", "standard score", "normal distribution z", "statistics", "mathematics"]
  },
  {
    id: "normal-distribution-prob-calc",
    slug: "normal-distribution-prob-calc",
    title: "Normal Distribution Probability Calculator",
    name: "Normal Distribution Probability Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate cumulative normal distribution probability P(X ≤ x) using standard error function polynomial approximation.",
    formula: "P(X ≤ x) = Φ(Z) = 0.5 × [1 + erf(Z / √2)]",
    outputUnit: "Probability P(X ≤ x)",
    assumptions: ["Continuous normal Gaussian probability distribution"],
    inputs: [
      { name: "x", label: "Raw Value (x)", unit: "Value", defaultValue: 85 },
      { name: "mean", label: "Mean (μ)", unit: "Value", defaultValue: 70 },
      { name: "stdDev", label: "Standard Deviation (σ)", unit: "Value", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      if (!inputs.stdDev) return 0;
      const z = ((inputs.x || 0) - (inputs.mean || 0)) / inputs.stdDev;
      const x = z / Math.SQRT2;
      const sign = x < 0 ? -1 : 1;
      const absX = Math.abs(x);
      const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
      const t = 1.0 / (1.0 + p * absX);
      const y = 1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);
      const erf = sign * y;
      return 0.5 * (1 + erf);
    },
    route: "/engineering-calculators/mathematics-calc/normal-distribution-prob-calc",
    seo: {
      title: "Normal Distribution Probability Calculator | Mathematics",
      description: "Calculate cumulative normal distribution probability P(X ≤ x) using error function polynomial.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/normal-distribution-prob-calc",
      keywords: ["normal distribution probability", "gaussian probability p(x)", "cumulative normal distribution", "statistics"]
    },
    searchKeywords: ["normal distribution probability", "gaussian probability p(x)", "cumulative normal distribution", "statistics", "mathematics"]
  },
  {
    id: "linear-regression-calc",
    slug: "linear-regression-calc",
    title: "Linear Regression Calculator",
    name: "Linear Regression Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate slope m of least-squares best fit linear regression line y = m·x + b for 4 coordinate pairs.",
    formula: "m = [n·∑(x·y) - ∑x·∑y] / [n·∑(x²) - (∑x)²]",
    outputUnit: "Slope (m)",
    assumptions: ["Linear relationship between independent x and dependent y variables"],
    inputs: [
      { name: "x1", label: "x1", unit: "Scalar", defaultValue: 1 },
      { name: "y1", label: "y1", unit: "Scalar", defaultValue: 2 },
      { name: "x2", label: "x2", unit: "Scalar", defaultValue: 2 },
      { name: "y2", label: "y2", unit: "Scalar", defaultValue: 3 },
      { name: "x3", label: "x3", unit: "Scalar", defaultValue: 3 },
      { name: "y3", label: "y3", unit: "Scalar", defaultValue: 5 },
      { name: "x4", label: "x4", unit: "Scalar", defaultValue: 4 },
      { name: "y4", label: "y4", unit: "Scalar", defaultValue: 4 }
    ],
    calculate: (inputs) => {
      const xs = [inputs.x1 || 0, inputs.x2 || 0, inputs.x3 || 0, inputs.x4 || 0];
      const ys = [inputs.y1 || 0, inputs.y2 || 0, inputs.y3 || 0, inputs.y4 || 0];
      const n = 4;
      const sumX = xs.reduce((a, b) => a + b, 0);
      const sumY = ys.reduce((a, b) => a + b, 0);
      const sumXY = xs.reduce((acc, x, i) => acc + x * ys[i], 0);
      const sumXX = xs.reduce((acc, x) => acc + x * x, 0);
      const denom = n * sumXX - sumX * sumX;
      return denom !== 0 ? (n * sumXY - sumX * sumY) / denom : 0;
    },
    route: "/engineering-calculators/mathematics-calc/linear-regression-calc",
    seo: {
      title: "Linear Regression Calculator | Mathematics",
      description: "Calculate least-squares linear regression slope m for scatter coordinate pairs.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/linear-regression-calc",
      keywords: ["linear regression slope", "least squares regression", "trend line slope", "statistics"]
    },
    searchKeywords: ["linear regression slope", "least squares regression", "trend line slope", "statistics", "mathematics"]
  },
  {
    id: "polynomial-root-calc",
    slug: "polynomial-root-calc",
    title: "Polynomial Root Calculator",
    name: "Polynomial Root Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate real root for cubic polynomial f(x) = a·x³ + b·x² + c·x + d using Newton-Raphson numerical root finding.",
    formula: "x_{k+1} = x_k - (a·x_k³ + b·x_k² + c·x_k + d) / (3a·x_k² + 2b·x_k + c)",
    outputUnit: "Real Root x",
    assumptions: ["Cubic polynomial with real roots"],
    inputs: [
      { name: "a", label: "Coefficient a (x³)", unit: "Number", defaultValue: 1 },
      { name: "b", label: "Coefficient b (x²)", unit: "Number", defaultValue: 0 },
      { name: "c", label: "Coefficient c (x)", unit: "Number", defaultValue: -2 },
      { name: "d", label: "Constant d", unit: "Number", defaultValue: -5 },
      { name: "xInitial", label: "Initial Guess x0", unit: "Number", defaultValue: 2 }
    ],
    calculate: (inputs) => {
      const a = inputs.a || 1, b = inputs.b || 0, c = inputs.c || 0, d = inputs.d || 0;
      let x = inputs.xInitial || 2;
      for (let i = 0; i < 15; i++) {
        const fx = a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
        const fpx = 3 * a * Math.pow(x, 2) + 2 * b * x + c;
        if (Math.abs(fpx) < 1e-12) break;
        x = x - fx / fpx;
      }
      return x;
    },
    route: "/engineering-calculators/mathematics-calc/polynomial-root-calc",
    seo: {
      title: "Polynomial Root Calculator | Mathematics",
      description: "Calculate real polynomial roots using Newton-Raphson numerical iterations.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/polynomial-root-calc",
      keywords: ["polynomial root calculator", "cubic root solver", "newton raphson roots", "algebra"]
    },
    searchKeywords: ["polynomial root calculator", "cubic root solver", "newton raphson roots", "algebra", "mathematics"]
  },
  {
    id: "complex-number-calc",
    slug: "complex-number-calc",
    title: "Complex Number Calculator",
    name: "Complex Number Calculator",
    discipline: "Mathematics",
    disciplineId: "mathematics-calc",
    description: "Calculate modulus magnitude |z| of complex number z = a + b·i.",
    formula: "|z| = √(a² + b²)",
    outputUnit: "Modulus |z|",
    assumptions: ["Complex number represented in Cartesian form z = a + b·i"],
    inputs: [
      { name: "real", label: "Real Part (a)", unit: "Real", defaultValue: 3 },
      { name: "imaginary", label: "Imaginary Part (b)", unit: "Imaginary", defaultValue: 4 }
    ],
    calculate: (inputs) => {
      const real = inputs.real || 0;
      const imag = inputs.imaginary || 0;
      return Math.sqrt(real * real + imag * imag);
    },
    route: "/engineering-calculators/mathematics-calc/complex-number-calc",
    seo: {
      title: "Complex Number Calculator | Mathematics",
      description: "Calculate modulus magnitude |z| for Cartesian complex numbers z = a + b·i.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/mathematics-calc/complex-number-calc",
      keywords: ["complex number modulus", "complex magnitude", "cartesian complex z", "algebra"]
    },
    searchKeywords: ["complex number modulus", "complex magnitude", "cartesian complex z", "algebra", "mathematics"]
  },

  // --- GENERAL ENGINEERING ---
  {
    id: "factor-of-safety",
    slug: "factor-of-safety",
    title: "Structural Factor of Safety (FoS) Calculator",
    name: "Structural Factor of Safety (FoS) Calculator",
    discipline: "General Engineering",
    disciplineId: "general-engineering-calc",
    description: "Calculate safety margin ratio between material ultimate strength and design load stress.",
    formula: "FoS = Ultimate Stress / Allowable Stress",
    outputUnit: "Ratio (FoS)",
    assumptions: ["Static loading conditions", "Homogeneous material properties"],
    inputs: [
      { name: "ultStrength", label: "Ultimate Strength", unit: "MPa", defaultValue: 400 },
      { name: "workingStress", label: "Working Design Stress", unit: "MPa", defaultValue: 150 }
    ],
    calculate: (inputs) => {
      if (!inputs.workingStress) return 0;
      return (inputs.ultStrength || 0) / inputs.workingStress;
    },
    route: "/engineering-calculators/general-engineering-calc/factor-of-safety",
    seo: {
      title: "Factor of Safety (FoS) Calculator | General Engineering",
      description: "Determine structural safety margin factors from ultimate and working load stresses.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/general-engineering-calc/factor-of-safety",
      keywords: ["factor of safety", "fos calculator", "structural safety margin", "allowable stress"]
    },
    searchKeywords: ["factor of safety", "fos", "safety margin", "allowable stress", "ultimate strength", "engineering"]
  },
  {
    id: "engineering-economy-npv",
    slug: "engineering-economy-npv",
    title: "Engineering Economy Calculator",
    name: "Engineering Economy Calculator",
    discipline: "General Engineering",
    disciplineId: "general-engineering-calc",
    description: "Calculate Net Present Value (NPV) for engineering capital investment projects.",
    formula: "NPV = -Initial Investment + ∑ [Annual Cash Inflow / (1 + i)^t]",
    outputUnit: "Currency ($)",
    assumptions: ["Uniform annual cash inflow over lifespan", "Constant discount interest rate i"],
    inputs: [
      { name: "initialInvestment", label: "Initial Capital Outlay", unit: "Currency ($)", defaultValue: 100000 },
      { name: "annualCashFlow", label: "Annual Net Inflow", unit: "Currency ($)", defaultValue: 25000 },
      { name: "discountRate", label: "Discount Rate (i)", unit: "Percent (%)", defaultValue: 8 },
      { name: "years", label: "Project Lifespan (n)", unit: "Years", defaultValue: 6 }
    ],
    calculate: (inputs) => {
      const i = (inputs.discountRate || 8) / 100;
      const cash = inputs.annualCashFlow || 0;
      const n = inputs.years || 1;
      let npv = -(inputs.initialInvestment || 0);
      for (let t = 1; t <= n; t++) {
        npv += cash / Math.pow(1 + i, t);
      }
      return npv;
    },
    route: "/engineering-calculators/general-engineering-calc/engineering-economy-npv",
    seo: {
      title: "Engineering Economy Calculator | General Engineering",
      description: "Calculate Net Present Value (NPV) for engineering capital project investment appraisal.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/general-engineering-calc/engineering-economy-npv",
      keywords: ["engineering economy calculator", "npv calculator", "capital investment npv", "discounted cash flow", "general engineering"]
    },
    searchKeywords: ["engineering economy calculator", "npv calculator", "capital investment npv", "discounted cash flow", "general engineering"]
  },
  {
    id: "compound-interest-engineering",
    slug: "compound-interest-engineering",
    title: "Compound Interest for Engineering Projects Calculator",
    name: "Compound Interest for Engineering Projects Calculator",
    discipline: "General Engineering",
    disciplineId: "general-engineering-calc",
    description: "Calculate future worth of engineering capital investments with compounding interest.",
    formula: "F = P × (1 + r / n)^(n × t)",
    outputUnit: "Currency ($)",
    assumptions: ["Fixed nominal annual interest rate", "Discrete compounding frequency"],
    inputs: [
      { name: "principal", label: "Principal Worth (P)", unit: "Currency ($)", defaultValue: 50000 },
      { name: "rate", label: "Annual Interest Rate (r)", unit: "Percent (%)", defaultValue: 6 },
      { name: "frequency", label: "Compounding Frequency (n)", unit: "Times/Year", defaultValue: 12 },
      { name: "time", label: "Duration (t)", unit: "Years", defaultValue: 5 }
    ],
    calculate: (inputs) => {
      const p = inputs.principal || 0;
      const r = (inputs.rate || 6) / 100;
      const n = inputs.frequency || 12;
      const t = inputs.time || 5;
      return p * Math.pow(1 + r / n, n * t);
    },
    route: "/engineering-calculators/general-engineering-calc/compound-interest-engineering",
    seo: {
      title: "Compound Interest for Engineering Projects Calculator | General Engineering",
      description: "Calculate future capital project compounding interest growth and investment yields.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/general-engineering-calc/compound-interest-engineering",
      keywords: ["compound interest engineering", "future worth capital", "project financing interest", "general engineering"]
    },
    searchKeywords: ["compound interest engineering", "future worth capital", "project financing interest", "general engineering"]
  },
  {
    id: "break-even-analysis",
    slug: "break-even-analysis",
    title: "Break-Even Analysis Calculator",
    name: "Break-Even Analysis Calculator",
    discipline: "General Engineering",
    disciplineId: "general-engineering-calc",
    description: "Calculate break-even production quantity units where total revenue balances total fixed and variable costs.",
    formula: "Break-Even Q = Fixed Costs / (Unit Selling Price - Variable Cost per Unit)",
    outputUnit: "Units",
    assumptions: ["Constant selling price per unit", "Linear variable manufacturing cost"],
    inputs: [
      { name: "fixedCost", label: "Total Fixed Costs", unit: "Currency ($)", defaultValue: 50000 },
      { name: "pricePerUnit", label: "Selling Price per Unit", unit: "Currency ($)", defaultValue: 150 },
      { name: "variableCostPerUnit", label: "Variable Cost per Unit", unit: "Currency ($)", defaultValue: 70 }
    ],
    calculate: (inputs) => {
      const margin = (inputs.pricePerUnit || 0) - (inputs.variableCostPerUnit || 0);
      return margin > 0 ? (inputs.fixedCost || 0) / margin : 0;
    },
    route: "/engineering-calculators/general-engineering-calc/break-even-analysis",
    seo: {
      title: "Break-Even Analysis Calculator | General Engineering",
      description: "Calculate break-even production quantity units where total revenue balances total costs.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/general-engineering-calc/break-even-analysis",
      keywords: ["break even analysis calculator", "break even quantity", "fixed variable cost break even", "general engineering"]
    },
    searchKeywords: ["break even analysis calculator", "break even quantity", "fixed variable cost break even", "general engineering"]
  },
  {
    id: "project-cost-escalation",
    slug: "project-cost-escalation",
    title: "Project Cost Escalation Calculator",
    name: "Project Cost Escalation Calculator",
    discipline: "General Engineering",
    disciplineId: "general-engineering-calc",
    description: "Calculate escalated future project budget accounting for multi-year inflation and material rate escalation.",
    formula: "Escalated Cost = Base Budget × (1 + Annual Escalation Rate)^Years",
    outputUnit: "Currency ($)",
    assumptions: ["Compound annual escalation rate", "Base cost estimated at current market prices"],
    inputs: [
      { name: "baseCost", label: "Base Estimated Budget", unit: "Currency ($)", defaultValue: 200000 },
      { name: "escalationRate", label: "Annual Escalation Rate", unit: "Percent (%)", defaultValue: 4.5 },
      { name: "years", label: "Project Schedule Delay", unit: "Years", defaultValue: 3 }
    ],
    calculate: (inputs) => (inputs.baseCost || 0) * Math.pow(1 + (inputs.escalationRate || 4.5) / 100, inputs.years || 0),
    route: "/engineering-calculators/general-engineering-calc/project-cost-escalation",
    seo: {
      title: "Project Cost Escalation Calculator | General Engineering",
      description: "Calculate escalated future engineering project cost accounting for multi-year cost inflation.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/general-engineering-calc/project-cost-escalation",
      keywords: ["project cost escalation", "cost escalation calculator", "inflation adjustment budget", "general engineering"]
    },
    searchKeywords: ["project cost escalation", "cost escalation calculator", "inflation adjustment budget", "general engineering"]
  },
  {
    id: "material-cost-estimator",
    slug: "material-cost-estimator",
    title: "Material Cost Estimator Calculator",
    name: "Material Cost Estimator Calculator",
    discipline: "General Engineering",
    disciplineId: "general-engineering-calc",
    description: "Calculate total material procurement cost including waste percentage allowance and delivery freight charges.",
    formula: "Total Cost = [Required Quantity × (1 + Waste%) × Unit Price] + Freight Fee",
    outputUnit: "Currency ($)",
    assumptions: ["Uniform material purchase price", "Freight as fixed fee"],
    inputs: [
      { name: "quantity", label: "Required Quantity", unit: "Units", defaultValue: 500 },
      { name: "unitPrice", label: "Unit Purchase Price", unit: "Currency ($)", defaultValue: 45 },
      { name: "wastePercent", label: "Waste Allowance", unit: "Percent (%)", defaultValue: 8 },
      { name: "freight", label: "Shipping & Handling Fee", unit: "Currency ($)", defaultValue: 350 }
    ],
    calculate: (inputs) => (inputs.quantity || 0) * (1 + (inputs.wastePercent || 8) / 100) * (inputs.unitPrice || 0) + (inputs.freight || 0),
    route: "/engineering-calculators/general-engineering-calc/material-cost-estimator",
    seo: {
      title: "Material Cost Estimator Calculator | General Engineering",
      description: "Calculate total material procurement cost with waste factor allowance and delivery shipping.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/general-engineering-calc/material-cost-estimator",
      keywords: ["material cost estimator", "material procurement cost", "waste factor cost estimation", "general engineering"]
    },
    searchKeywords: ["material cost estimator", "material procurement cost", "waste factor cost estimation", "general engineering"]
  },
  {
    id: "engineering-productivity",
    slug: "engineering-productivity",
    title: "Engineering Productivity Calculator",
    name: "Engineering Productivity Calculator",
    discipline: "General Engineering",
    disciplineId: "general-engineering-calc",
    description: "Calculate labor productivity rate in output units generated per man-hour spent.",
    formula: "Productivity = Total Output Units / (Crew Size × Hours per Worker)",
    outputUnit: "Units / Man-Hour",
    assumptions: ["Effective total working hours count", "Homogeneous output measure"],
    inputs: [
      { name: "outputUnits", label: "Total Completed Output", unit: "Units", defaultValue: 1200 },
      { name: "crewSize", label: "Crew Size", unit: "Workers", defaultValue: 6 },
      { name: "hoursPerWorker", label: "Hours Worked per Worker", unit: "Hours", defaultValue: 40 }
    ],
    calculate: (inputs) => {
      const totalHours = (inputs.crewSize || 0) * (inputs.hoursPerWorker || 0);
      return totalHours > 0 ? (inputs.outputUnits || 0) / totalHours : 0;
    },
    route: "/engineering-calculators/general-engineering-calc/engineering-productivity",
    seo: {
      title: "Engineering Productivity Calculator | General Engineering",
      description: "Calculate crew labor productivity rate in units per man-hour.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/general-engineering-calc/engineering-productivity",
      keywords: ["engineering productivity calculator", "units per man hour", "labor productivity rate", "general engineering"]
    },
    searchKeywords: ["engineering productivity calculator", "units per man hour", "labor productivity rate", "general engineering"]
  },
  {
    id: "equipment-utilization",
    slug: "equipment-utilization",
    title: "Equipment Utilization Calculator",
    name: "Equipment Utilization Calculator",
    discipline: "General Engineering",
    disciplineId: "general-engineering-calc",
    description: "Calculate equipment utilization percentage from productive operating hours versus available capacity hours.",
    formula: "Utilization (%) = (Actual Productive Operating Hours / Scheduled Available Hours) × 100",
    outputUnit: "Percent (%)",
    assumptions: ["Scheduled available capacity hours exclude planned overhaul shutdown"],
    inputs: [
      { name: "operatingHours", label: "Productive Operating Hours", unit: "Hours", defaultValue: 140 },
      { name: "availableHours", label: "Scheduled Available Hours", unit: "Hours", defaultValue: 168 }
    ],
    calculate: (inputs) => (inputs.availableHours ? ((inputs.operatingHours || 0) / inputs.availableHours) * 100 : 0),
    route: "/engineering-calculators/general-engineering-calc/equipment-utilization",
    seo: {
      title: "Equipment Utilization Calculator | General Engineering",
      description: "Calculate plant and fleet equipment utilization efficiency percentage.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/general-engineering-calc/equipment-utilization",
      keywords: ["equipment utilization calculator", "operating hours utilization", "plant asset utilization", "general engineering"]
    },
    searchKeywords: ["equipment utilization calculator", "operating hours utilization", "plant asset utilization", "general engineering"]
  },
  {
    id: "system-availability",
    slug: "system-availability",
    title: "Availability Calculator",
    name: "Availability Calculator",
    discipline: "General Engineering",
    disciplineId: "general-engineering-calc",
    description: "Calculate operational uptime availability percentage of an engineering system using MTBF and MTTR.",
    formula: "Availability (%) = [MTBF / (MTBF + MTTR)] × 100",
    outputUnit: "Percent (%)",
    assumptions: ["Steady state repairable system", "Constant failure and repair rates"],
    inputs: [
      { name: "mtbf", label: "Mean Time Between Failures (MTBF)", unit: "Hours", defaultValue: 500 },
      { name: "mttr", label: "Mean Time To Repair (MTTR)", unit: "Hours", defaultValue: 12 }
    ],
    calculate: (inputs) => {
      const total = (inputs.mtbf || 0) + (inputs.mttr || 0);
      return total > 0 ? ((inputs.mtbf || 0) / total) * 100 : 0;
    },
    route: "/engineering-calculators/general-engineering-calc/system-availability",
    seo: {
      title: "Availability Calculator | General Engineering",
      description: "Calculate system operational uptime availability percentage from MTBF and MTTR metrics.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/general-engineering-calc/system-availability",
      keywords: ["availability calculator", "system availability mtbf mttr", "uptime percentage", "general engineering"]
    },
    searchKeywords: ["availability calculator", "system availability mtbf mttr", "uptime percentage", "general engineering"]
  },
  {
    id: "system-reliability",
    slug: "system-reliability",
    title: "Reliability Calculator",
    name: "Reliability Calculator",
    discipline: "General Engineering",
    disciplineId: "general-engineering-calc",
    description: "Calculate probability of failure-free operation R(t) over operating duration t using exponential distribution.",
    formula: "R(t) = e^(-t / MTBF) × 100",
    outputUnit: "Percent (%)",
    assumptions: ["Constant failure rate λ = 1/MTBF (exponential distribution)", "Useful life operating period"],
    inputs: [
      { name: "mtbf", label: "Mean Time Between Failures (MTBF)", unit: "Hours", defaultValue: 1000 },
      { name: "operatingTime", label: "Operating Duration (t)", unit: "Hours", defaultValue: 200 }
    ],
    calculate: (inputs) => (inputs.mtbf ? Math.exp(-(inputs.operatingTime || 0) / inputs.mtbf) * 100 : 0),
    route: "/engineering-calculators/general-engineering-calc/system-reliability",
    seo: {
      title: "Reliability Calculator | General Engineering",
      description: "Calculate system probability of failure-free operation over operating duration.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/general-engineering-calc/system-reliability",
      keywords: ["reliability calculator", "probability of failure free operation", "exponential reliability mtbf", "general engineering"]
    },
    searchKeywords: ["reliability calculator", "probability of failure free operation", "exponential reliability mtbf", "general engineering"]
  },
  {
    id: "mtbf-calculator",
    slug: "mtbf-calculator",
    title: "Mean Time Between Failures (MTBF) Calculator",
    name: "Mean Time Between Failures (MTBF) Calculator",
    discipline: "General Engineering",
    disciplineId: "general-engineering-calc",
    description: "Calculate mean operating time between system breakdown failures.",
    formula: "MTBF = Total Operational Hours / Number of Failures",
    outputUnit: "Hours (h)",
    assumptions: ["Repairable equipment system", "Failures are independent random events"],
    inputs: [
      { name: "totalOperatingHours", label: "Total Operational Hours", unit: "Hours", defaultValue: 5000 },
      { name: "numberOfFailures", label: "Total Failure Events", unit: "Count", defaultValue: 8 }
    ],
    calculate: (inputs) => (inputs.numberOfFailures ? (inputs.totalOperatingHours || 0) / inputs.numberOfFailures : 0),
    route: "/engineering-calculators/general-engineering-calc/mtbf-calculator",
    seo: {
      title: "Mean Time Between Failures (MTBF) Calculator | General Engineering",
      description: "Calculate Mean Time Between Failures (MTBF) metric in operational hours.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/general-engineering-calc/mtbf-calculator",
      keywords: ["mtbf calculator", "mean time between failures", "equipment reliability mtbf", "general engineering"]
    },
    searchKeywords: ["mtbf calculator", "mean time between failures", "equipment reliability mtbf", "general engineering"]
  },
  {
    id: "mttr-calculator",
    slug: "mttr-calculator",
    title: "Mean Time To Repair (MTTR) Calculator",
    name: "Mean Time To Repair (MTTR) Calculator",
    discipline: "General Engineering",
    disciplineId: "general-engineering-calc",
    description: "Calculate average maintenance time required to repair and restore failed equipment to operational status.",
    formula: "MTTR = Total Maintenance Downtime Hours / Total Number of Repairs",
    outputUnit: "Hours (h)",
    assumptions: ["Active diagnostic and repair time included", "Excludes supply chain lead time delays"],
    inputs: [
      { name: "downtimeHours", label: "Total Repair Downtime", unit: "Hours", defaultValue: 48 },
      { name: "numberOfRepairs", label: "Number of Repair Events", unit: "Count", defaultValue: 6 }
    ],
    calculate: (inputs) => (inputs.numberOfRepairs ? (inputs.downtimeHours || 0) / inputs.numberOfRepairs : 0),
    route: "/engineering-calculators/general-engineering-calc/mttr-calculator",
    seo: {
      title: "Mean Time To Repair (MTTR) Calculator | General Engineering",
      description: "Calculate Mean Time To Repair (MTTR) maintenance metric in hours.",
      canonicalUrl: "https://unitsconvertors.com/engineering-calculators/general-engineering-calc/mttr-calculator",
      keywords: ["mttr calculator", "mean time to repair", "maintenance downtime mttr", "general engineering"]
    },
    searchKeywords: ["mttr calculator", "mean time to repair", "maintenance downtime mttr", "general engineering"]
  }
];

// Definition of engineering discipline categories
const disciplineDefinitions = [
  {
    id: "electrical-calc",
    name: "Electrical",
    description: "Multi-variable electrical engineering solvers requiring Ohm's law, voltage dividers, AC/DC power, and battery runtime models.",
    iconName: "Zap"
  },
  {
    id: "mechanical-calc",
    name: "Mechanical",
    description: "Mechanical engineering tools for gear ratio dynamics, shaft torque stresses, belt lengths, and bearing life ratings.",
    iconName: "RotateCw"
  },
  {
    id: "civil-calc",
    name: "Civil",
    description: "Structural and civil construction estimators for concrete volume, rebar mass, asphalt paving tonnage, and foundation loads.",
    iconName: "HardHat"
  },
  {
    id: "physics-calc",
    name: "Physics",
    description: "Classical and modern physics solvers for trajectory motion, Newton forces, impulse momentum, and energy conservation.",
    iconName: "Atom"
  },
  {
    id: "optics-light-calc",
    name: "Optics & Light",
    description: "Photometric and radiometric optics models for lux to lumens, beam coverage angles, reflectance, and illuminance.",
    iconName: "Sun"
  },
  {
    id: "thermodynamics-calc",
    name: "Thermodynamics",
    description: "Thermal engineering solvers for heat transfer rate, Carnot engine cycle efficiencies, and steam property tables.",
    iconName: "Thermometer"
  },
  {
    id: "chemistry-calc",
    name: "Chemistry",
    description: "Stoichiometric chemical solvers for molar concentration, C1V1 solution dilutions, pH levels, and molecular weights.",
    iconName: "Droplet"
  },
  {
    id: "fluid-mechanics-calc",
    name: "Fluid Mechanics",
    description: "Hydraulic and fluid dynamic models for Darcy pressure drop friction, Reynolds flow regime, and Bernoulli pressure head.",
    iconName: "Waves"
  },
  {
    id: "electronics-calc",
    name: "Electronics",
    description: "Circuit analysis tools for resistor color band codes, RC time constants, PCB trace current width, and op-amp gains.",
    iconName: "Cpu"
  },
  {
    id: "mathematics-calc",
    name: "Mathematics",
    description: "Pure and applied mathematical solvers for matrix linear algebra, quadratic equations, vector dot products, and roots.",
    iconName: "Grid"
  },
  {
    id: "general-engineering-calc",
    name: "General Engineering",
    description: "Cross-disciplinary engineering calculators for structural safety factors, linear thermal expansion, and cost estimation.",
    iconName: "Compass"
  }
];

// Dynamically construct engineeringCalculatorsData array driven strictly from the registry
export const engineeringCalculatorsData: EngineeringCalculatorDiscipline[] = disciplineDefinitions.map(def => {
  return {
    id: def.id,
    name: def.name,
    description: def.description,
    iconName: def.iconName,
    get tools() {
      return engineeringCalculatorRegistry.filter(
        t => t.disciplineId === def.id || 
             t.discipline === def.name || 
             t.disciplineId === `${def.id}-calc` || 
             t.disciplineId.replace("-calc", "") === def.id.replace("-calc", "")
      );
    },
    get calculators() {
      return this.tools;
    },
    get badge() {
      const count = this.tools.length;
      return `${count} ${count === 1 ? "Tool" : "Tools"}`;
    }
  };
});

// Helper Registry Query Functions
export function getCalculatorsByDiscipline(disciplineIdOrName: string): EngineeringTool[] {
  const norm = disciplineIdOrName.toLowerCase().replace("-calc", "");
  return engineeringCalculatorRegistry.filter(
    t => t.disciplineId.toLowerCase().replace("-calc", "") === norm ||
         t.discipline.toLowerCase().replace("-calc", "") === norm
  );
}

export function searchEngineeringRegistry(query: string, disciplineIdFilter?: string): EngineeringTool[] {
  let list = engineeringCalculatorRegistry;
  if (disciplineIdFilter) {
    list = getCalculatorsByDiscipline(disciplineIdFilter);
  }

  if (!query || !query.trim()) return list;

  const q = query.toLowerCase().trim();
  return list.filter(t => 
    t.title.toLowerCase().includes(q) ||
    t.name.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.formula.toLowerCase().includes(q) ||
    t.outputUnit.toLowerCase().includes(q) ||
    t.searchKeywords.some(k => k.toLowerCase().includes(q))
  );
}
