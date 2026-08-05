import { Category } from "../types";

export const categoriesData: Category[] = [
  {
    id: "length",
    name: "Length",
    icon: "Ruler",
    description: "Convert between various standard metric and imperial length measurements such as meters, kilometers, miles, yards, and feet.",
    baseUnitId: "meter",
    units: [
      { id: "meter", name: "Meter", plural: "Meters", symbol: "m", factor: 1 },
      { id: "kilometer", name: "Kilometer", plural: "Kilometers", symbol: "km", factor: 1000 },
      { id: "centimeter", name: "Centimeter", plural: "Centimeters", symbol: "cm", factor: 0.01 },
      { id: "millimeter", name: "Millimeter", plural: "Millimeters", symbol: "mm", factor: 0.001 },
      { id: "micrometer", name: "Micrometer", plural: "Micrometers", symbol: "µm", factor: 0.000001 },
      { id: "nanometer", name: "Nanometer", plural: "Nanometers", symbol: "nm", factor: 0.000000001 },
      { id: "mile", name: "Mile", plural: "Miles", symbol: "mi", factor: 1609.344 },
      { id: "yard", name: "Yard", plural: "Yards", symbol: "yd", factor: 0.9144 },
      { id: "foot", name: "Foot", plural: "Feet", symbol: "ft", factor: 0.3048 },
      { id: "inch", name: "Inch", plural: "Inches", symbol: "in", factor: 0.0254 },
      { id: "nautical-mile", name: "Nautical Mile", plural: "Nautical Miles", symbol: "nmi", factor: 1852 },
      { id: "rod", name: "Rod", plural: "Rods", symbol: "rd", factor: 5.0292 },
      { id: "chain", name: "Chain", plural: "Chains", symbol: "ch", factor: 20.1168 },
      { id: "furlong", name: "Furlong", plural: "Furlongs", symbol: "fur", factor: 201.168 },
      { id: "league", name: "League", plural: "Leagues", symbol: "lea", factor: 4828.032 },
      { id: "hand", name: "Hand", plural: "Hands", symbol: "hd", factor: 0.1016 },
      { id: "cubit", name: "Cubit", plural: "Cubits", symbol: "ct", factor: 0.4572 }
    ]
  },
  {
    id: "weight-mass",
    name: "Weight & Mass",
    icon: "Weight",
    description: "Convert weights and masses ranging from sub-milligrams to tonnes, pounds, stones, and solar mass scales.",
    baseUnitId: "gram",
    units: [
      { id: "gram", name: "Gram", plural: "Grams", symbol: "g", factor: 1 },
      { id: "kilogram", name: "Kilogram", plural: "Kilograms", symbol: "kg", factor: 1000 },
      { id: "milligram", name: "Milligram", plural: "Milligrams", symbol: "mg", factor: 0.001 },
      { id: "microgram", name: "Microgram", plural: "Micrograms", symbol: "µg", factor: 0.000001 },
      { id: "pound", name: "Pound", plural: "Pounds", symbol: "lb", factor: 453.59237 },
      { id: "ounce", name: "Ounce", plural: "Ounces", symbol: "oz", factor: 28.349523125 },
      { id: "stone", name: "Stone", plural: "Stones", symbol: "st", factor: 6350.29318 },
      { id: "metric-ton", name: "Metric Ton", plural: "Metric Tons", symbol: "t", factor: 1000000 },
      { id: "us-ton", name: "US Ton", plural: "US Short Tons", symbol: "ton", factor: 907184.74 },
      { id: "imperial-ton", name: "Imperial Ton", plural: "Imperial Long Tons", symbol: "lton", factor: 1016046.9088 },
      { id: "carat", name: "Carat", plural: "Carats", symbol: "ct", factor: 0.2 },
      { id: "grain", name: "Grain", plural: "Grains", symbol: "gr", factor: 0.06479891 },
      { id: "slug", name: "Slug", plural: "Slugs", symbol: "slug", factor: 14593.9029 },
      { id: "troy-ounce", name: "Troy Ounce", plural: "Troy Ounces", symbol: "ozt", factor: 31.1034768 }
    ]
  },
  {
    id: "area",
    name: "Area",
    icon: "Grid",
    description: "Convert land and screen sizes from square meters, hectares, and acres to bighas, kanals, and square miles.",
    baseUnitId: "square-meter",
    units: [
      { id: "square-meter", name: "Square Meter", plural: "Square Meters", symbol: "m²", factor: 1 },
      { id: "square-kilometer", name: "Square Kilometer", plural: "Square Kilometers", symbol: "km²", factor: 1000000 },
      { id: "square-centimeter", name: "Square Centimeter", plural: "Square Centimeters", symbol: "cm²", factor: 0.0001 },
      { id: "square-millimeter", name: "Square Millimeter", plural: "Square Millimeters", symbol: "mm²", factor: 0.000001 },
      { id: "square-mile", name: "Square Mile", plural: "Square Miles", symbol: "mi²", factor: 2589988.110336 },
      { id: "square-yard", name: "Square Yard", plural: "Square Yards", symbol: "yd²", factor: 0.83612736 },
      { id: "square-foot", name: "Square Foot", plural: "Square Feet", symbol: "ft²", factor: 0.09290304 },
      { id: "square-inch", name: "Square Inch", plural: "Square Inches", symbol: "in²", factor: 0.00064516 },
      { id: "acre", name: "Acre", plural: "Acres", symbol: "ac", factor: 4046.8564224 },
      { id: "hectare", name: "Hectare", plural: "Hectares", symbol: "ha", factor: 10000 },
      { id: "bigha", name: "Bigha", plural: "Bighas", symbol: "bigha", factor: 2529.285 },
      { id: "kanal", name: "Kanal", plural: "Kanals", symbol: "kanal", factor: 505.857 }
    ]
  },
  {
    id: "volume",
    name: "Volume",
    icon: "Box",
    description: "Convert capacities and fluid volumes such as liters, cubic meters, gallons, pints, cups, and barrels.",
    baseUnitId: "liter",
    units: [
      { id: "liter", name: "Liter", plural: "Liters", symbol: "L", factor: 1 },
      { id: "milliliter", name: "Milliliter", plural: "Milliliters", symbol: "mL", factor: 0.001 },
      { id: "cubic-meter", name: "Cubic Meter", plural: "Cubic Meters", symbol: "m³", factor: 1000 },
      { id: "cubic-centimeter", name: "Cubic Centimeter", plural: "Cubic Centimeters", symbol: "cm³", factor: 0.001 },
      { id: "cubic-foot", name: "Cubic Foot", plural: "Cubic Feet", symbol: "ft³", factor: 28.316846592 },
      { id: "cubic-inch", name: "Cubic Inch", plural: "Cubic Inches", symbol: "in³", factor: 0.016387064 },
      { id: "gallon-us", name: "Gallon (US)", plural: "Gallons (US)", symbol: "gal (US)", factor: 3.785411784 },
      { id: "gallon-uk", name: "Gallon (UK)", plural: "Gallons (UK)", symbol: "gal (UK)", factor: 4.54609 },
      { id: "quart-us", name: "Quart", plural: "Quarts (US)", symbol: "qt", factor: 0.946352946 },
      { id: "pint-us", name: "Pint", plural: "Pints (US)", symbol: "pt", factor: 0.473176473 },
      { id: "cup-us", name: "Cup (US)", plural: "Cups (US)", symbol: "cup", factor: 0.2365882365 },
      { id: "fluid-ounce-us", name: "Fluid Ounce", plural: "Fluid Ounces (US)", symbol: "fl oz", factor: 0.0295735295 },
      { id: "barrel", name: "Oil Barrel", plural: "Barrels (Oil)", symbol: "bbl", factor: 158.987294928 }
    ]
  },
  {
    id: "temperature",
    name: "Temperature",
    icon: "Thermometer",
    description: "Convert thermal states instantly between Celsius, Fahrenheit, Kelvin, Rankine, and Réaumur scales.",
    baseUnitId: "celsius",
    customFormula: (value: number, from: string, to: string) => {
      // First convert to Celsius
      let celsius = value;
      switch (from) {
        case "celsius": celsius = value; break;
        case "fahrenheit": celsius = (value - 32) / 1.8; break;
        case "kelvin": celsius = value - 273.15; break;
        case "rankine": celsius = (value - 491.67) / 1.8; break;
        case "reaumur": celsius = value * 1.25; break;
        case "newton": celsius = value * (100 / 33); break;
        case "romer": celsius = (value - 7.5) * (40 / 21); break;
        case "delisle": celsius = 100 - value * (2 / 3); break;
      }
      // Convert from Celsius to ToUnit
      switch (to) {
        case "celsius": return celsius;
        case "fahrenheit": return celsius * 1.8 + 32;
        case "kelvin": return celsius + 273.15;
        case "rankine": return (celsius + 273.15) * 1.8;
        case "reaumur": return celsius * 0.8;
        case "newton": return celsius * 0.33;
        case "romer": return celsius * (21 / 40) + 7.5;
        case "delisle": return (100 - celsius) * 1.5;
        default: return celsius;
      }
    },
    customExplain: (value: number, from: any, to: any) => {
      // Provide clean step-by-step math for temperature
      const steps = [];
      steps.push(`Start with the input temperature: ${value} °${from.symbol || from.name[0]}`);
      
      // Convert to Celsius first as intermediary if not starting with Celsius
      let celsius = value;
      if (from.id !== "celsius") {
        switch (from.id) {
          case "fahrenheit":
            celsius = (value - 32) / 1.8;
            steps.push(`Convert Fahrenheit to Celsius: (${value} - 32) / 1.8 = ${celsius.toFixed(4)} °C`);
            break;
          case "kelvin":
            celsius = value - 273.15;
            steps.push(`Convert Kelvin to Celsius: ${value} - 273.15 = ${celsius.toFixed(4)} °C`);
            break;
          case "reaumur":
            celsius = value * 1.25;
            steps.push(`Convert Réaumur to Celsius: ${value} * 1.25 = ${celsius.toFixed(4)} °C`);
            break;
          case "rankine":
            celsius = (value - 491.67) / 1.8;
            steps.push(`Convert Rankine to Celsius: (${value} - 491.67) / 1.8 = ${celsius.toFixed(4)} °C`);
            break;
          default:
            celsius = value;
            steps.push(`Equate to Celsius: ${celsius.toFixed(4)} °C`);
        }
      } else {
        steps.push(`Input is already in Celsius: ${value} °C`);
      }

      // Convert Celsius to ToUnit
      if (to.id !== "celsius") {
        switch (to.id) {
          case "fahrenheit":
            const f = celsius * 1.8 + 32;
            steps.push(`Convert Celsius to Fahrenheit: (${celsius.toFixed(4)} * 1.8) + 32 = ${f.toFixed(4)} °F`);
            break;
          case "kelvin":
            const k = celsius + 273.15;
            steps.push(`Convert Celsius to Kelvin: ${celsius.toFixed(4)} + 273.15 = ${k.toFixed(4)} K`);
            break;
          case "rankine":
            const r = (celsius + 273.15) * 1.8;
            steps.push(`Convert Celsius to Rankine: (${celsius.toFixed(4)} + 273.15) * 1.8 = ${r.toFixed(4)} °R`);
            break;
          case "reaumur":
            const re = celsius * 0.8;
            steps.push(`Convert Celsius to Réaumur: ${celsius.toFixed(4)} * 0.8 = ${re.toFixed(4)} °Ré`);
            break;
        }
      }
      return steps;
    },
    units: [
      { id: "celsius", name: "Celsius", plural: "Celsius", symbol: "C", factor: 1 },
      { id: "fahrenheit", name: "Fahrenheit", plural: "Fahrenheit", symbol: "F", factor: 1 },
      { id: "kelvin", name: "Kelvin", plural: "Kelvin", symbol: "K", factor: 1 },
      { id: "rankine", name: "Rankine", plural: "Rankine", symbol: "R", factor: 1 },
      { id: "reaumur", name: "Réaumur", plural: "Réaumur", symbol: "Re", factor: 1 },
      { id: "newton", name: "Newton", plural: "Newton", symbol: "N", factor: 1 },
      { id: "romer", name: "Rømer", plural: "Rømer", symbol: "Ro", factor: 1 },
      { id: "delisle", name: "Delisle", plural: "Delisle", symbol: "De", factor: 1 }
    ]
  },
  {
    id: "time",
    name: "Time",
    icon: "Clock",
    description: "Convert durations from nanoseconds and milliseconds to standard hours, days, weeks, and centuries.",
    baseUnitId: "second",
    units: [
      { id: "second", name: "Second", plural: "Seconds", symbol: "s", factor: 1 },
      { id: "millisecond", name: "Millisecond", plural: "Milliseconds", symbol: "ms", factor: 0.001 },
      { id: "microsecond", name: "Microsecond", plural: "Microseconds", symbol: "µs", factor: 0.000001 },
      { id: "nanosecond", name: "Nanosecond", plural: "Nanoseconds", symbol: "ns", factor: 0.000000001 },
      { id: "minute", name: "Minute", plural: "Minutes", symbol: "min", factor: 60 },
      { id: "hour", name: "Hour", plural: "Hours", symbol: "h", factor: 3600 },
      { id: "day", name: "Day", plural: "Days", symbol: "d", factor: 86400 },
      { id: "week", name: "Week", plural: "Weeks", symbol: "wk", factor: 604800 },
      { id: "month", name: "Month", plural: "Months (Average)", symbol: "mo", factor: 2629746 }, // average month (365.2425/12 days)
      { id: "year", name: "Year", plural: "Years (Common)", symbol: "yr", factor: 31536000 },
      { id: "decade", name: "Decade", plural: "Decades", symbol: "dec", factor: 315360000 },
      { id: "century", name: "Century", plural: "Centuries", symbol: "cent", factor: 3153600000 },
      { id: "fortnight", name: "Fortnight", plural: "Fortnights", symbol: "fn", factor: 1209600 }
    ]
  },
  {
    id: "speed",
    name: "Speed",
    icon: "Gauge",
    description: "Convert motion vectors easily from kilometers per hour (km/h) and miles per hour (mph) to speed of light or warp speeds.",
    baseUnitId: "meter-per-second",
    units: [
      { id: "meter-per-second", name: "Meter per Second", plural: "Meters per Second", symbol: "m/s", factor: 1 },
      { id: "kilometer-per-hour", name: "Kilometer per Hour", plural: "Kilometers per Hour", symbol: "km/h", factor: 0.277777778 },
      { id: "mile-per-hour", name: "Mile per Hour", plural: "Miles per Hour", symbol: "mph", factor: 0.44704 },
      { id: "knot", name: "Knot", plural: "Knots", symbol: "kn", factor: 0.514444444 },
      { id: "mach", name: "Mach (Speed of Sound)", plural: "Mach Number", symbol: "M", factor: 343 }, // speed of sound at standard atmosphere
      { id: "speed-of-light", name: "Speed of Light", plural: "Speed of Light", symbol: "c", factor: 299792458 },
      { id: "foot-per-second", name: "Foot per Second", plural: "Feet per Second", symbol: "ft/s", factor: 0.3048 }
    ]
  },
  {
    id: "pressure",
    name: "Pressure",
    icon: "ArrowDownCircle",
    description: "Convert atmospheric forces, vacuums, and gas metrics from Pascals to PSI, Bar, and millimeters of mercury.",
    baseUnitId: "pascal",
    units: [
      { id: "pascal", name: "Pascal", plural: "Pascals", symbol: "Pa", factor: 1 },
      { id: "kilopascal", name: "Kilopascal", plural: "Kilopascals", symbol: "kPa", factor: 1000 },
      { id: "megapascal", name: "Megapascal", plural: "Megapascals", symbol: "MPa", factor: 1000000 },
      { id: "bar", name: "Bar", plural: "Bars", symbol: "bar", factor: 100000 },
      { id: "millibar", name: "Millibar", plural: "Millibars", symbol: "mbar", factor: 100 },
      { id: "psi", name: "PSI", plural: "Pounds per Square Inch", symbol: "psi", factor: 6894.757293 },
      { id: "atmosphere", name: "Atmosphere", plural: "Atmospheres (Standard)", symbol: "atm", factor: 101325 },
      { id: "torr", name: "Torr", plural: "Torrs", symbol: "Torr", factor: 133.322368 },
      { id: "mmhg", name: "Millimeter of Mercury", plural: "Millimeters of Mercury", symbol: "mmHg", factor: 133.322387 }
    ]
  },
  {
    id: "energy",
    name: "Energy",
    icon: "Zap",
    description: "Convert work, heat, and electrical fuel potential between Joules, calories, kilowatt-hours, and British Thermal Units.",
    baseUnitId: "joule",
    units: [
      { id: "joule", name: "Joule", plural: "Joules", symbol: "J", factor: 1 },
      { id: "kilojoule", name: "Kilojoule", plural: "Kilojoules", symbol: "kJ", factor: 1000 },
      { id: "calorie", name: "Calorie", plural: "Calories (Gram)", symbol: "cal", factor: 4.184 },
      { id: "kilocalorie", name: "Kilocalorie", plural: "Kilocalories (Food)", symbol: "kcal", factor: 4184 },
      { id: "watt-hour", name: "Watt Hour", plural: "Watt Hours", symbol: "Wh", factor: 3600 },
      { id: "kilowatt-hour", name: "Kilowatt Hour", plural: "Kilowatt Hours", symbol: "kWh", factor: 3600000 },
      { id: "btu", name: "BTU", plural: "British Thermal Units", symbol: "BTU", factor: 1055.05585 },
      { id: "electron-volt", name: "Electron Volt", plural: "Electron Volts", symbol: "eV", factor: 1.602176634e-19 },
      { id: "erg", name: "Erg", plural: "Ergs", symbol: "erg", factor: 1e-7 },
      { id: "foot-pound", name: "Foot-Pound", plural: "Foot-Pounds", symbol: "ft-lb", factor: 1.3558179 }
    ]
  },
  {
    id: "power",
    name: "Power",
    icon: "Activity",
    description: "Convert production and generation work rates between Watts, Kilowatts, Horsepower, and BTUs per hour.",
    baseUnitId: "watt",
    units: [
      { id: "watt", name: "Watt", plural: "Watts", symbol: "W", factor: 1 },
      { id: "kilowatt", name: "Kilowatt", plural: "Kilowatts", symbol: "kW", factor: 1000 },
      { id: "megawatt", name: "Megawatt", plural: "Megawatts", symbol: "MW", factor: 1000000 },
      { id: "gigawatt", name: "Gigawatt", plural: "Gigawatts", symbol: "GW", factor: 1000000000 },
      { id: "horsepower-mechanical", name: "Horsepower (Mechanical)", plural: "Horsepower (HP)", symbol: "hp", factor: 745.699872 },
      { id: "horsepower-metric", name: "Horsepower (Metric)", plural: "Metric Horsepower", symbol: "ps", factor: 735.49875 },
      { id: "btu-per-hour", name: "BTU per Hour", plural: "BTUs per Hour", symbol: "BTU/h", factor: 0.293071 },
      { id: "calorie-per-second", name: "Calorie per Second", plural: "Calories per Second", symbol: "cal/s", factor: 4.184 }
    ]
  },
  {
    id: "fuel-economy",
    name: "Fuel Economy",
    icon: "Droplet",
    description: "Convert vehicle mileage and consumption rates from MPG and km/L to Liters per 100km.",
    baseUnitId: "mpg-us",
    customFormula: (value: number, from: string, to: string) => {
      // Normalizing to MPG (US)
      let mpgUs = value;
      if (from === "mpg-us") mpgUs = value;
      else if (from === "mpg-uk") mpgUs = value * 0.832674184;
      else if (from === "km-per-liter") mpgUs = value * 2.35214583;
      else if (from === "liters-per-100km") mpgUs = value === 0 ? 0 : 235.214583 / value;
      else if (from === "liters-per-km") mpgUs = value === 0 ? 0 : 2.35214583 / value;

      // Converting from MPG (US) to target
      if (to === "mpg-us") return mpgUs;
      if (to === "mpg-uk") return mpgUs / 0.832674184;
      if (to === "km-per-liter") return mpgUs / 2.35214583;
      if (to === "liters-per-100km") return mpgUs === 0 ? 0 : 235.214583 / mpgUs;
      if (to === "liters-per-km") return mpgUs === 0 ? 0 : 2.35214583 / mpgUs;
      return mpgUs;
    },
    customExplain: (value: number, from: any, to: any) => {
      const steps = [];
      steps.push(`Start with the vehicle fuel economy: ${value} ${from.symbol}`);
      
      let mpgUs = value;
      if (from.id !== "mpg-us") {
        if (from.id === "liters-per-100km") {
          mpgUs = value === 0 ? 0 : 235.214583 / value;
          steps.push(`Convert L/100km to MPG (US) using inverse formula: 235.2146 / ${value} = ${mpgUs.toFixed(4)} MPG`);
        } else if (from.id === "km-per-liter") {
          mpgUs = value * 2.35214583;
          steps.push(`Convert km/L to MPG (US): ${value} * 2.3521 = ${mpgUs.toFixed(4)} MPG`);
        } else if (from.id === "mpg-uk") {
          mpgUs = value * 0.832674;
          steps.push(`Convert MPG (UK) to MPG (US): ${value} * 0.8327 = ${mpgUs.toFixed(4)} MPG`);
        }
      }

      if (to.id !== from.id) {
        if (to.id === "liters-per-100km") {
          const l100 = mpgUs === 0 ? 0 : 235.214583 / mpgUs;
          steps.push(`Convert MPG (US) to L/100km using inverse formula: 235.2146 / ${mpgUs.toFixed(4)} = ${l100.toFixed(4)} L/100km`);
        } else if (to.id === "km-per-liter") {
          const kml = mpgUs / 2.35214583;
          steps.push(`Convert MPG (US) to km/L: ${mpgUs.toFixed(4)} / 2.3521 = ${kml.toFixed(4)} km/L`);
        } else if (to.id === "mpg-uk") {
          const mpgUk = mpgUs / 0.832674184;
          steps.push(`Convert MPG (US) to MPG (UK): ${mpgUs.toFixed(4)} / 0.8327 = ${mpgUk.toFixed(4)} MPG (UK)`);
        }
      }
      return steps;
    },
    units: [
      { id: "mpg-us", name: "MPG (US)", plural: "Miles per Gallon (US)", symbol: "mpg (US)", factor: 1 },
      { id: "mpg-uk", name: "MPG (UK)", plural: "Miles per Gallon (UK)", symbol: "mpg (UK)", factor: 1 },
      { id: "km-per-liter", name: "Kilometers per Liter", plural: "Kilometers per Liter", symbol: "km/L", factor: 1 },
      { id: "liters-per-100km", name: "Liters per 100km", plural: "Liters per 100 Kilometers", symbol: "L/100km", factor: 1 },
      { id: "liters-per-km", name: "Liters per Kilometer", plural: "Liters per Kilometer", symbol: "L/km", factor: 1 }
    ]
  },
  {
    id: "cooking",
    name: "Cooking",
    icon: "ChefHat",
    description: "Convert culinary metrics from measuring spoons and cups to metric milliliters or grams for precise baking recipe scales.",
    baseUnitId: "milliliter",
    units: [
      { id: "milliliter", name: "Milliliter", plural: "Milliliters", symbol: "mL", factor: 1 },
      { id: "liter", name: "Liter", plural: "Liters", symbol: "L", factor: 1000 },
      { id: "cup-us", name: "Cup (US)", plural: "Cups (US)", symbol: "cup", factor: 236.5882365 },
      { id: "tablespoon-us", name: "Tablespoon (US)", plural: "Tablespoons (US)", symbol: "tbsp", factor: 14.78676478125 },
      { id: "teaspoon-us", name: "Teaspoon (US)", plural: "Teaspoons (US)", symbol: "tsp", factor: 4.92892159375 },
      { id: "fluid-ounce-us", name: "Fluid Ounce (US)", plural: "Fluid Ounces (US)", symbol: "fl oz", factor: 29.5735295625 },
      { id: "pint-us", name: "Pint (US)", plural: "Pints (US)", symbol: "pt", factor: 473.176473 },
      { id: "quart-us", name: "Quart (US)", plural: "Quarts (US)", symbol: "qt", factor: 946.352946 },
      { id: "gallon-us", name: "Gallon (US)", plural: "Gallons (US)", symbol: "gal", factor: 3785.411784 }
    ]
  },
  {
    id: "data-storage",
    name: "Data Storage",
    icon: "Database",
    description: "Convert digital information capacities between raw bits, bytes, Megabytes, Terabytes, and binary Tebibytes.",
    baseUnitId: "byte",
    units: [
      { id: "byte", name: "Byte", plural: "Bytes", symbol: "B", factor: 1 },
      { id: "bit", name: "Bit", plural: "Bits", symbol: "b", factor: 0.125 },
      { id: "kilobit", name: "Kilobit", plural: "Kilobits", symbol: "kb", factor: 125 },
      { id: "kilobyte", name: "Kilobyte (decimal)", plural: "Kilobytes", symbol: "KB", factor: 1000 },
      { id: "megabit", name: "Megabit", plural: "Megabits", symbol: "Mb", factor: 125000 },
      { id: "megabyte", name: "Megabyte (decimal)", plural: "Megabytes", symbol: "MB", factor: 1000000 },
      { id: "gigabit", name: "Gigabit", plural: "Gigabits", symbol: "Gb", factor: 125000000 },
      { id: "gigabyte", name: "Gigabyte (decimal)", plural: "Gigabytes", symbol: "GB", factor: 1000000000 },
      { id: "terabit", name: "Terabit", plural: "Terabits", symbol: "Tb", factor: 125000000000 },
      { id: "terabyte", name: "Terabyte (decimal)", plural: "Terabytes", symbol: "TB", factor: 1000000000000 },
      { id: "petabyte", name: "Petabyte (decimal)", plural: "Petabytes", symbol: "PB", factor: 1000000000000000 },
      { id: "kibibyte", name: "Kibibyte (binary)", plural: "Kibibytes", symbol: "KiB", factor: 1024 },
      { id: "mebibyte", name: "Mebibyte (binary)", plural: "Mebibytes", symbol: "MiB", factor: 1048576 },
      { id: "gibibyte", name: "Gibibyte (binary)", plural: "Gibibytes", symbol: "GiB", factor: 1073741824 },
      { id: "tebibyte", name: "Tebibyte (binary)", plural: "Tebibytes", symbol: "TiB", factor: 1099511627776 }
    ]
  },
  {
    id: "engineering",
    name: "Density",
    icon: "Layers",
    description: "Convert density measurements including kilograms per cubic meter, grams per cubic centimeter, and pounds per cubic foot.",
    baseUnitId: "kilogram-per-cubic-meter",
    units: [
      { id: "kilogram-per-cubic-meter", name: "Kilogram per Cubic Meter", plural: "Kilograms per Cubic Meter", symbol: "kg/m³", factor: 1 },
      { id: "gram-per-cubic-centimeter", name: "Gram per Cubic Centimeter", plural: "Grams per Cubic Centimeter", symbol: "g/cm³", factor: 1000 },
      { id: "pound-per-cubic-foot", name: "Pound per Cubic Foot", plural: "Pounds per Cubic Foot", symbol: "lb/ft³", factor: 16.018463 },
      { id: "gram-per-liter", name: "Gram per Liter", plural: "Grams per Liter", symbol: "g/L", factor: 1 },
      { id: "pound-per-gallon-us", name: "Pound per Gallon (US)", plural: "Pounds per Gallon (US)", symbol: "lb/gal (US)", factor: 119.826427 },
      { id: "ounce-per-cubic-inch", name: "Ounce per Cubic Inch", plural: "Ounces per Cubic Inch", symbol: "oz/in³", factor: 1729.99404 }
    ]
  },
  {
    id: "voltage",
    name: "Voltage",
    icon: "Zap",
    description: "Convert electromotive force and electrical potential differences including volts, kilovolts, millivolts, and microvolts.",
    baseUnitId: "volt",
    units: [
      { id: "volt", name: "Volt", plural: "Volts", symbol: "V", factor: 1 },
      { id: "kilovolt", name: "Kilovolt", plural: "Kilovolts", symbol: "kV", factor: 1000 },
      { id: "millivolt", name: "Millivolt", plural: "Millivolts", symbol: "mV", factor: 0.001 },
      { id: "microvolt", name: "Microvolt", plural: "Microvolts", symbol: "µV", factor: 0.000001 },
      { id: "megavolt", name: "Megavolt", plural: "Megavolts", symbol: "MV", factor: 1000000 }
    ]
  },
  {
    id: "scientific",
    name: "Amount of Substance",
    icon: "Atom",
    description: "Convert amount of chemical substance quantities including moles, millimoles, micromoles, and kilomoles.",
    baseUnitId: "mole",
    units: [
      { id: "mole", name: "Mole", plural: "Moles", symbol: "mol", factor: 1 },
      { id: "millimole", name: "Millimole", plural: "Millimoles", symbol: "mmol", factor: 0.001 },
      { id: "micromole", name: "Micromole", plural: "Micromoles", symbol: "µmol", factor: 0.000001 },
      { id: "nanomole", name: "Nanomole", plural: "Nanomoles", symbol: "nmol", factor: 0.000000001 },
      { id: "kilomole", name: "Kilomole", plural: "Kilomoles", symbol: "kmol", factor: 1000 }
    ]
  },
  {
    id: "light",
    name: "Light",
    icon: "Sun",
    description: "Convert physical and astronomical light, illuminance, luminance, and energy properties.",
    baseUnitId: "lux",
    customFormula: (value: number, from: string, to: string) => {
      const factors: Record<string, number> = {
        "lux": 1,
        "foot-candle": 10.76391,
        "nit": 1,
        "candela-per-m2": 1,
        "lambert": 3183.09886,
        "foot-lambert": 3.426259,
        "stilb": 10000,
        "phot": 10000,
        "apostilb": 0.318309886,
        "blondel": 0.318309886,
        "skot": 0.000318309886
      };
      const fFrom = factors[from] || 1;
      const fTo = factors[to] || 1;
      return (value * fFrom) / fTo;
    },
    units: [
      { id: "lux", name: "Lux (lx)", plural: "Lux", symbol: "lx", factor: 1 },
      { id: "foot-candle", name: "Foot-candle", plural: "Foot-candles", symbol: "fc", factor: 10.76391 },
      { id: "nit", name: "Nit", plural: "Nits", symbol: "nt", factor: 1 },
      { id: "candela-per-m2", name: "Candela/m²", plural: "Candelas per Sq Meter", symbol: "cd/m²", factor: 1 },
      { id: "lambert", name: "Lambert", plural: "Lamberts", symbol: "L", factor: 3183.09886 },
      { id: "foot-lambert", name: "Foot-Lambert", plural: "Foot-Lamberts", symbol: "fL", factor: 3.426259 },
      { id: "stilb", name: "Stilb", plural: "Stilbs", symbol: "sb", factor: 10000 },
      { id: "phot", name: "Phot", plural: "Phots", symbol: "ph", factor: 10000 },
      { id: "apostilb", name: "Apostilb", plural: "Apostilbs", symbol: "asb", factor: 0.318309886 },
      { id: "blondel", name: "Blondel", plural: "Blondels", symbol: "blondel", factor: 0.318309886 },
      { id: "skot", name: "Skot", plural: "Skots", symbol: "skot", factor: 0.000318309886 }
    ]
  },
  {
    id: "sound",
    name: "Sound",
    icon: "Volume2",
    description: "Convert audio levels, decibels, wave frequencies, and tone pitch acoustics.",
    baseUnitId: "decibel",
    customFormula: (value: number, from: string, to: string) => {
      const dbToPascal = (db: number) => 2e-5 * Math.pow(10, db / 20);
      const pascalToDb = (p: number) => p <= 0 ? -120 : 20 * Math.log10(p / 2e-5);
      const dbToIntensity = (db: number) => 1e-12 * Math.pow(10, db / 10);
      const intensityToDb = (i: number) => i <= 0 ? -120 : 10 * Math.log10(i / 1e-12);

      const dbUnits = new Set([
        "decibel", "decibel-spl"
      ]);
      const pressureUnits = new Set(["pascal-sound", "sound-pressure"]);
      const intensityUnits = new Set(["sound-intensity", "watt-m2-sound"]);

      const isLogFrom = dbUnits.has(from) || from === "bel" || pressureUnits.has(from) || intensityUnits.has(from);
      const isLogTo = dbUnits.has(to) || to === "bel" || pressureUnits.has(to) || intensityUnits.has(to);

      if (isLogFrom && isLogTo) {
        let db = value;
        if (from === "bel") db = value * 10;
        else if (pressureUnits.has(from)) db = pascalToDb(value);
        else if (intensityUnits.has(from)) db = intensityToDb(value);

        if (to === "bel") return db / 10;
        if (pressureUnits.has(to)) return dbToPascal(db);
        if (intensityUnits.has(to)) return dbToIntensity(db);
        return db;
      }

      const soundFactors: Record<string, number> = {
        "decibel": 1, "bel": 10, "decibel-spl": 1
      };
      const fFrom = soundFactors[from] || 1;
      const fTo = soundFactors[to] || 1;
      return (value * fFrom) / fTo;
    },
    units: [
      { id: "decibel", name: "Decibel", plural: "Decibels", symbol: "dB", factor: 1 },
      { id: "bel", name: "Bel", plural: "Bels", symbol: "B", factor: 10 },
      { id: "decibel-spl", name: "Decibel SPL", plural: "dB SPL Values", symbol: "dB SPL", factor: 1 },
      { id: "pascal-sound", name: "Pascal (Sound)", plural: "Pascals (Sound)", symbol: "Pa", factor: 1 },
      { id: "sound-pressure", name: "Sound Pressure", plural: "Sound Pressures", symbol: "Pa", factor: 1 },
      { id: "sound-intensity", name: "Sound Intensity", plural: "Sound Intensities", symbol: "W/m²", factor: 1 },
      { id: "watt-m2-sound", name: "Watt/m²", plural: "Watts per Sq Meter", symbol: "W/m²", factor: 1 }
    ]
  },
  {
    id: "force",
    name: "Force",
    icon: "Hammer",
    description: "Convert loads, tensions, weight pulls, and structural force vectors.",
    baseUnitId: "newton",
    units: [
      { id: "newton", name: "Newton", plural: "Newtons", symbol: "N", factor: 1 },
      { id: "dyne", name: "Dyne", plural: "Dynes", symbol: "dyn", factor: 1e-5 },
      { id: "pound-force", name: "Pound-force", plural: "Pound-forces", symbol: "lbf", factor: 4.448221615 },
      { id: "kilogram-force", name: "Kilogram-force", plural: "Kilogram-forces", symbol: "kgf", factor: 9.80665 },
      { id: "poundal", name: "Poundal", plural: "Poundals", symbol: "pdl", factor: 0.138254954 },
      { id: "kilonewton", name: "Kilonewton", plural: "Kilonewtons", symbol: "kN", factor: 1000 },
      { id: "meganewton", name: "Meganewton", plural: "Meganewtons", symbol: "MN", factor: 1000000 },
      { id: "ounce-force", name: "Ounce-force", plural: "Ounce-forces", symbol: "ozf", factor: 0.27801385 },
      { id: "gram-force", name: "Gram-force", plural: "Gram-forces", symbol: "gf", factor: 0.00980665 },
      { id: "ton-force-us", name: "Ton-force US", plural: "Ton-forces (US)", symbol: "tonf (US)", factor: 8896.44323 },
      { id: "ton-force-metric", name: "Ton-force Metric", plural: "Ton-forces (Metric)", symbol: "tonf (m)", factor: 9806.65 },
      { id: "sthene", name: "Sthene", plural: "Sthenes", symbol: "sn", factor: 1000 },
      { id: "kip-force", name: "Kip-force", plural: "Kip-forces", symbol: "kipf", factor: 4448.221615 },
      { id: "millinewton", name: "Millinewton", plural: "Millinewtons", symbol: "mN", factor: 0.001 },
      { id: "micronewton", name: "Micronewton", plural: "Micronewtons", symbol: "µN", factor: 0.000001 }
    ]
  },
  {
    id: "flow",
    name: "Flow",
    icon: "Waves",
    description: "Convert volumetric and mass flow rates for water, gases, and industrial pipelines.",
    baseUnitId: "liter-per-sec",
    units: [
      { id: "liter-per-sec", name: "Liter/sec", plural: "Liters per Second", symbol: "L/s", factor: 1 },
      { id: "gallon-per-min", name: "Gallon/min", plural: "Gallons per Minute", symbol: "GPM", factor: 0.063090196 },
      { id: "cubic-meter-per-hour", name: "Cubic meter/hour", plural: "Cubic Meters per Hour", symbol: "m³/h", factor: 0.277777778 },
      { id: "cubic-feet-per-min", name: "Cubic feet/min", plural: "Cubic Feet per Minute", symbol: "CFM", factor: 0.471947443 },
      { id: "barrel-per-day", name: "Barrel/day", plural: "Barrels per Day", symbol: "bbl/d", factor: 0.00184013 },
      { id: "cubic-meter-per-sec", name: "Cubic meter/sec", plural: "Cubic Meters per Second", symbol: "m³/s", factor: 1000 },
      { id: "cubic-feet-per-sec", name: "Cubic feet/sec", plural: "Cubic Feet per Second", symbol: "cfs", factor: 28.316846 },
      { id: "liter-per-min", name: "Liter/min", plural: "Liters per Minute", symbol: "L/min", factor: 0.016666667 },
      { id: "gallon-per-hour", name: "Gallon/hour", plural: "Gallons per Hour", symbol: "gph", factor: 0.001051503 },
      { id: "cubic-centimeter-per-sec", name: "Cubic centimeter/sec", plural: "Cubic Centimeters per Second", symbol: "cm³/s", factor: 0.001 },
      { id: "milliliter-per-min", name: "Milliliter/min", plural: "Milliliters per Minute", symbol: "mL/min", factor: 0.000016667 },
      { id: "cfm-unit", name: "CFM", plural: "Cubic Feet per Minute", symbol: "CFM", factor: 0.471947443 },
      { id: "cmh-unit", name: "CMH", plural: "Cubic Meters per Hour", symbol: "CMH", factor: 0.277777778 },
      { id: "acre-feet-per-day", name: "Acre-feet/day", plural: "Acre-feet per Day", symbol: "ac-ft/d", factor: 14.2764 },
      { id: "million-gallons-per-day", name: "Million Gallons/Day", plural: "Million Gallons per Day", symbol: "MGD", factor: 43.8126 },
      { id: "flow-per-unit-area", name: "Flow per Unit Area", plural: "Flow rates per Sq Meter", symbol: "L/s/m²", factor: 1 },
      { id: "mass-flux", name: "Mass Flux", plural: "Mass Fluxes", symbol: "kg/s/m²", factor: 1 },
      { id: "molar-flow-rate", name: "Molar Flow Rate", plural: "Molar Flow Rates", symbol: "mol/s", factor: 1 },
      { id: "weight-flow-rate", name: "Weight Flow Rate", plural: "Weight Flow Rates", symbol: "N/s", factor: 1 }
    ]
  },
  {
    id: "angle",
    name: "Angle",
    icon: "Compass",
    description: "Convert trigonometry angles, solid angular areas, slope percents, and quadrant headings.",
    baseUnitId: "degree",
    customFormula: (value: number, from: string, to: string) => {
      const angleFactors: Record<string, number> = {
        "degree": 1, "radian": 57.295779513, "gradian": 0.9, "arcminute": 0.016666667,
        "arcsecond": 0.000277778, "revolution": 360, "mil-angle": 0.05625, "turn-angle": 360,
        "quadrant-angle": 90, "sextant-angle": 60, "compass-point": 11.25,
        "grad-angle": 0.9, "decimal-degree": 1, "hour-angle": 15,
        "right-ascension": 15, "degree-hour": 15, "circular-mil-angle": 1
      };
      const fFrom = angleFactors[from] || 1;
      const fTo = angleFactors[to] || 1;
      return (value * fFrom) / fTo;
    },
    units: [
      { id: "degree", name: "Degree", plural: "Degrees", symbol: "°", factor: 1 },
      { id: "radian", name: "Radian", plural: "Radians", symbol: "rad", factor: 57.295779513 },
      { id: "gradian", name: "Gradian", plural: "Gradians", symbol: "grad", factor: 0.9 },
      { id: "arcminute", name: "Arcminute", plural: "Arcminutes", symbol: "'", factor: 0.016666667 },
      { id: "arcsecond", name: "Arcsecond", plural: "Arcseconds", symbol: "\"", factor: 0.000277778 },
      { id: "revolution", name: "Revolution", plural: "Revolutions", symbol: "rev", factor: 360 },
      { id: "mil-angle", name: "Mil (Angle)", plural: "Mil Angles", symbol: "mil", factor: 0.05625 },
      { id: "turn-angle", name: "Turn", plural: "Turns", symbol: "turn", factor: 360 },
      { id: "quadrant-angle", name: "Quadrant", plural: "Quadrants", symbol: "quad", factor: 90 },
      { id: "sextant-angle", name: "Sextant", plural: "Sextants", symbol: "sext", factor: 60 },
      { id: "compass-point", name: "Compass Point", plural: "Compass Points", symbol: "pt", factor: 11.25 },
      { id: "grad-angle", name: "Grad", plural: "Grads", symbol: "grad", factor: 0.9 },
      { id: "dms-angle", name: "DMS", plural: "Degrees-Minutes-Seconds", symbol: "DMS", factor: 1 },
      { id: "decimal-degree", name: "Decimal Degree", plural: "Decimal Degrees", symbol: "°", factor: 1 },
      { id: "hour-angle", name: "Hour Angle", plural: "Hour Angles", symbol: "ha", factor: 15 },
      { id: "right-ascension", name: "Right Ascension", plural: "Right Ascensions", symbol: "RA", factor: 15 },
      { id: "degree-hour", name: "Degree ↔ Hour", plural: "Degree-Hour alignments", symbol: "°(h)", factor: 15 },
      { id: "circular-mil-angle", name: "Circular Mil Angle", plural: "Circular Mil Angles", symbol: "mil", factor: 1 }
    ]
  },
  {
    id: "electricity",
    name: "Electric Current",
    icon: "Activity",
    description: "Convert rate of electric charge flow, including amperes, milliamperes, microamperes, and kiloamperes.",
    baseUnitId: "ampere",
    units: [
      { id: "ampere", name: "Ampere", plural: "Amperes", symbol: "A", factor: 1 },
      { id: "milliampere", name: "Milliampere", plural: "Milliamperes", symbol: "mA", factor: 0.001 },
      { id: "microampere", name: "Microampere", plural: "Microamperes", symbol: "µA", factor: 0.000001 },
      { id: "kiloampere", name: "Kiloampere", plural: "Kiloamperes", symbol: "kA", factor: 1000 },
      { id: "abampere", name: "Abampere", plural: "Abamperes", symbol: "abA", factor: 10 }
    ]
  },
  {
    id: "construction",
    name: "Construction",
    icon: "HardHat",
    description: "Convert on-site build metrics including lumber board feet and concrete volumes.",
    baseUnitId: "cubic-meter-concrete",
    units: [
      { id: "board-foot", name: "Board Feet", plural: "Board Feet Volumes", symbol: "FBM", factor: 0.002359737 },
      { id: "sq-foot-construction", name: "Sq Foot", plural: "Square Feet", symbol: "ft²", factor: 0.092903 },
      { id: "sq-meter-construction", name: "Sq Meter", plural: "Square Meters", symbol: "m²", factor: 1 },
      { id: "cubic-yard-concrete", name: "Cubic Yard", plural: "Cubic Yards", symbol: "yd³", factor: 0.764555 },
      { id: "cubic-meter-concrete", name: "Cubic Meter", plural: "Cubic Meters", symbol: "m³", factor: 1 }
    ]
  },
  {
    id: "data-transfer",
    name: "Data Transfer",
    icon: "Wifi",
    description: "Convert bandwidth speeds and network data transfer rates.",
    baseUnitId: "bps",
    customFormula: (value: number, from: string, to: string) => {
      const transFactors: Record<string, number> = {
        "bps": 1, "Bps": 8, "kbps": 1000, "Mbps": 1000000, "Gbps": 1000000000,
        "Tbps": 1000000000000, "KBps": 8000, "MBps": 8000000, "GBps": 8000000000
      };
      const fFrom = transFactors[from] || 1;
      const fTo = transFactors[to] || 1;
      return (value * fFrom) / fTo;
    },
    units: [
      { id: "bps", name: "Bit/sec", plural: "Bits per Second", symbol: "bps", factor: 1 },
      { id: "Bps", name: "Byte/sec", plural: "Bytes per Second", symbol: "B/s", factor: 8 },
      { id: "kbps", name: "Kbps", plural: "Kilobits per Second", symbol: "kbps", factor: 1000 },
      { id: "Mbps", name: "Mbps", plural: "Megabits per Second", symbol: "Mbps", factor: 1000000 },
      { id: "Gbps", name: "Gbps", plural: "Gigabits per Second", symbol: "Gbps", factor: 1000000000 },
      { id: "Tbps", name: "Tbps", plural: "Terabits per Second", symbol: "Tbps", factor: 1000000000000 },
      { id: "KBps", name: "KB/s", plural: "Kilobytes per Second", symbol: "KB/s", factor: 8000 },
      { id: "MBps", name: "MB/s", plural: "Megabytes per Second", symbol: "MB/s", factor: 8000000 },
      { id: "GBps", name: "GB/s", plural: "Gigabytes per Second", symbol: "GB/s", factor: 8000000000 }
    ]
  },
  {
    id: "solid-angle",
    name: "Solid Angle",
    icon: "Orbit",
    description: "Convert three-dimensional solid angular areas including steradians, spats, and square degrees.",
    baseUnitId: "steradian",
    units: [
      { id: "steradian", name: "Steradian", plural: "Steradians", symbol: "sr", factor: 1 },
      { id: "spat", name: "Spat", plural: "Spats", symbol: "sp", factor: 12.566370614 },
      { id: "square-degree", name: "Square Degree", plural: "Square Degrees", symbol: "deg²", factor: 0.0003046174197 },
      { id: "square-radian", name: "Square Radian", plural: "Square Radians", symbol: "rad²", factor: 1 },
      { id: "square-arcmin", name: "Square Arcminute", plural: "Square Arcminutes", symbol: "arcmin²", factor: 8.461595e-8 },
      { id: "square-arcsec", name: "Square Arcsecond", plural: "Square Arcseconds", symbol: "arcsec²", factor: 2.350443e-11 }
    ]
  },
  {
    id: "torque",
    name: "Torque",
    icon: "RotateCw",
    description: "Convert rotational moments of force including Newton-meters, pound-feet, and kilogram-force meters.",
    baseUnitId: "newton-meter",
    units: [
      { id: "newton-meter", name: "Newton-meter", plural: "Newton-meters", symbol: "N·m", factor: 1 },
      { id: "pound-foot", name: "Pound-foot", plural: "Pound-feet", symbol: "lb·ft", factor: 1.3558179483 },
      { id: "pound-inch", name: "Pound-inch", plural: "Pound-inches", symbol: "lb·in", factor: 0.112984829 },
      { id: "kilogram-force-meter", name: "Kilogram-force meter", plural: "Kilogram-force meters", symbol: "kgf·m", factor: 9.80665 },
      { id: "newton-centimeter", name: "Newton-centimeter", plural: "Newton-centimeters", symbol: "N·cm", factor: 0.01 },
      { id: "dyne-centimeter", name: "Dyne-centimeter", plural: "Dyne-centimeters", symbol: "dyn·cm", factor: 1e-7 }
    ]
  },
  {
    id: "acceleration",
    name: "Acceleration",
    icon: "TrendingUp",
    description: "Convert rates of change of velocity including meters per second squared, g-force, and gal.",
    baseUnitId: "meter-per-second-squared",
    units: [
      { id: "meter-per-second-squared", name: "Meter/sec²", plural: "Meters per Second Squared", symbol: "m/s²", factor: 1 },
      { id: "foot-per-second-squared", name: "Foot/sec²", plural: "Feet per Second Squared", symbol: "ft/s²", factor: 0.3048 },
      { id: "gravity-acceleration", name: "Standard Gravity (g)", plural: "G-forces", symbol: "g", factor: 9.80665 },
      { id: "gal-acceleration", name: "Gal", plural: "Gals", symbol: "Gal", factor: 0.01 },
      { id: "milligal-acceleration", name: "Milligal", plural: "Milligals", symbol: "mGal", factor: 0.00001 },
      { id: "kilometer-per-hour-second", name: "KM/h/s", plural: "Kilometers per Hour per Second", symbol: "km/h/s", factor: 0.277777778 },
      { id: "mile-per-hour-second", name: "MPH/s", plural: "Miles per Hour per Second", symbol: "mph/s", factor: 0.44704 }
    ]
  },
  {
    id: "electric-resistance",
    name: "Electric Resistance",
    icon: "Shield",
    description: "Convert electrical impedance including ohms, kilohms, megohms, and milliohms.",
    baseUnitId: "ohm",
    units: [
      { id: "ohm", name: "Ohm", plural: "Ohms", symbol: "Ω", factor: 1 },
      { id: "kilohm", name: "Kilohm", plural: "Kilohms", symbol: "kΩ", factor: 1000 },
      { id: "megohm", name: "Megohm", plural: "Megohms", symbol: "MΩ", factor: 1000000 },
      { id: "milliohm", name: "Milliohm", plural: "Milliohms", symbol: "mΩ", factor: 0.001 },
      { id: "microohm", name: "Microohm", plural: "Microohms", symbol: "µΩ", factor: 0.000001 },
      { id: "gigaohm", name: "Gigaohm", plural: "Gigaohms", symbol: "GΩ", factor: 1000000000 }
    ]
  },
  {
    id: "capacitance",
    name: "Capacitance",
    icon: "Cpu",
    description: "Convert electrical capacitance values including farads, microfarads, nanofarads, and picofarads.",
    baseUnitId: "farad",
    units: [
      { id: "farad", name: "Farad", plural: "Farads", symbol: "F", factor: 1 },
      { id: "millifarad", name: "Millifarad", plural: "Millifarads", symbol: "mF", factor: 0.001 },
      { id: "microfarad", name: "Microfarad", plural: "Microfarads", symbol: "µF", factor: 0.000001 },
      { id: "nanofarad", name: "Nanofarad", plural: "Nanofarads", symbol: "nF", factor: 1e-9 },
      { id: "picofarad", name: "Picofarad", plural: "Picofarads", symbol: "pF", factor: 1e-12 }
    ]
  },
  {
    id: "inductance",
    name: "Inductance",
    icon: "Waves",
    description: "Convert electrical inductance values including henrys, millihenrys, and microhenrys.",
    baseUnitId: "henry",
    units: [
      { id: "henry", name: "Henry", plural: "Henrys", symbol: "H", factor: 1 },
      { id: "millihenry", name: "Millihenry", plural: "Millihenrys", symbol: "mH", factor: 0.001 },
      { id: "microhenry", name: "Microhenry", plural: "Microhenrys", symbol: "µH", factor: 0.000001 },
      { id: "nanohenry", name: "Nanohenry", plural: "Nanohenrys", symbol: "nH", factor: 1e-9 }
    ]
  },
  {
    id: "electric-charge",
    name: "Electric Charge",
    icon: "Battery",
    description: "Convert electrical charge quantities including coulombs, ampere-hours, and milliampere-hours.",
    baseUnitId: "coulomb",
    units: [
      { id: "coulomb", name: "Coulomb", plural: "Coulombs", symbol: "C", factor: 1 },
      { id: "ampere-hour", name: "Ampere-hour", plural: "Ampere-hours", symbol: "Ah", factor: 3600 },
      { id: "milliampere-hour", name: "Milliampere-hour", plural: "Milliampere-hours", symbol: "mAh", factor: 3.6 },
      { id: "kilocoulomb", name: "Kilocoulomb", plural: "Kilocoulombs", symbol: "kC", factor: 1000 },
      { id: "megacoulomb", name: "Megacoulomb", plural: "Megacoulombs", symbol: "MC", factor: 1000000 },
      { id: "faraday", name: "Faraday", plural: "Faradays", symbol: "F", factor: 96485.33212 }
    ]
  },
  {
    id: "radioactivity",
    name: "Radioactivity",
    icon: "Radio",
    description: "Convert nuclear radioactivity decay rates including becquerels, curies, and rutherfords.",
    baseUnitId: "becquerel",
    units: [
      { id: "becquerel", name: "Becquerel", plural: "Becquerels", symbol: "Bq", factor: 1 },
      { id: "curie", name: "Curie", plural: "Curies", symbol: "Ci", factor: 3.7e10 },
      { id: "rutherford", name: "Rutherford", plural: "Rutherfords", symbol: "Rd", factor: 1000000 },
      { id: "kilobecquerel", name: "Kilobecquerel", plural: "Kilobecquerels", symbol: "kBq", factor: 1000 },
      { id: "megabecquerel", name: "Megabecquerel", plural: "Megabecquerels", symbol: "MBq", factor: 1000000 }
    ]
  }
];
