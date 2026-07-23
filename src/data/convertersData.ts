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
      { id: "cup-us", name: "Cup", plural: "Cups (US)", symbol: "cp", factor: 0.24 },
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
      { id: "cup-us", name: "Cup (US)", plural: "Cups (US)", symbol: "cup", factor: 240 },
      { id: "tablespoon-us", name: "Tablespoon (US)", plural: "Tablespoons (US)", symbol: "tbsp", factor: 14.7868 },
      { id: "teaspoon-us", name: "Teaspoon (US)", plural: "Teaspoons (US)", symbol: "tsp", factor: 4.92892 },
      { id: "fluid-ounce-us", name: "Fluid Ounce (US)", plural: "Fluid Ounces (US)", symbol: "fl oz", factor: 29.5735 },
      { id: "pint-us", name: "Pint (US)", plural: "Pints (US)", symbol: "pt", factor: 473.176 },
      { id: "quart-us", name: "Quart (US)", plural: "Quarts (US)", symbol: "qt", factor: 946.353 },
      { id: "gallon-us", name: "Gallon (US)", plural: "Gallons (US)", symbol: "gal", factor: 3785.41 }
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
    id: "electrical",
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
      if (from === "wavelength-nm" && to === "frequency-light-thz") {
        return value === 0 ? 0 : 299792.458 / value;
      }
      if (from === "frequency-light-thz" && to === "wavelength-nm") {
        return value === 0 ? 0 : 299792.458 / value;
      }
      if (from === "wavelength-nm" && to === "photon-energy-ev") {
        return value === 0 ? 0 : 1239.84193 / value;
      }
      if (from === "photon-energy-ev" && to === "wavelength-nm") {
        return value === 0 ? 0 : 1239.84193 / value;
      }
      if (from === "frequency-light-thz" && to === "photon-energy-ev") {
        return value * 0.004135667;
      }
      if (from === "photon-energy-ev" && to === "frequency-light-thz") {
        return value / 0.004135667;
      }
      if (from === "nanometer" && to === "angstrom") {
        return value * 10;
      }
      if (from === "angstrom" && to === "nanometer") {
        return value * 0.1;
      }
      const factors: Record<string, number> = {
        "lux": 1,
        "foot-candle": 10.76391,
        "candela": 1,
        "lumen": 1,
        "candela-lux-inverse": 1,
        "nit": 1,
        "candela-per-m2": 1,
        "lambert": 3183.09886,
        "foot-lambert": 3.426259,
        "stilb": 10000,
        "phot": 10000,
        "watt-lumen-efficacy": 683,
        "lux-watt-m2": 683,
        "illuminance-converter": 1,
        "luminance-converter": 1,
        "luminous-flux-converter": 1,
        "luminous-efficacy-converter": 1,
        "radiant-intensity-converter": 1,
        "irradiance-converter": 1,
        "lux-lumen-ft2": 10.76391,
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
      { id: "candela", name: "Candela", plural: "Candelas", symbol: "cd", factor: 1 },
      { id: "lumen", name: "Lumen", plural: "Lumens", symbol: "lm", factor: 1 },
      { id: "candela-lux-inverse", name: "Candela ↔ Lux (at 1m)", plural: "Candela-Lux Pairings", symbol: "cd-lx", factor: 1 },
      { id: "nit", name: "Nit", plural: "Nits", symbol: "nt", factor: 1 },
      { id: "candela-per-m2", name: "Candela/m²", plural: "Candelas per Sq Meter", symbol: "cd/m²", factor: 1 },
      { id: "lambert", name: "Lambert", plural: "Lamberts", symbol: "L", factor: 3183.09886 },
      { id: "foot-lambert", name: "Foot-Lambert", plural: "Foot-Lamberts", symbol: "fL", factor: 3.426259 },
      { id: "stilb", name: "Stilb", plural: "Stilbs", symbol: "sb", factor: 10000 },
      { id: "phot", name: "Phot", plural: "Phots", symbol: "ph", factor: 10000 },
      { id: "watt-lumen-efficacy", name: "Watt ↔ Lumen (efficacy)", plural: "Watts at 555nm", symbol: "W (lm)", factor: 683 },
      { id: "lux-watt-m2", name: "Lux ↔ Watt/m²", plural: "Lux to Watt/m²", symbol: "lx-W/m²", factor: 683 },
      { id: "illuminance-converter", name: "Illuminance Converter", plural: "Illuminance Units", symbol: "lx", factor: 1 },
      { id: "luminance-converter", name: "Luminance Converter", plural: "Luminance Units", symbol: "nt", factor: 1 },
      { id: "luminous-flux-converter", name: "Luminous Flux Converter", plural: "Luminous Fluxes", symbol: "lm", factor: 1 },
      { id: "luminous-efficacy-converter", name: "Luminous Efficacy", plural: "Luminous Efficiencies", symbol: "lm/W", factor: 1 },
      { id: "radiant-intensity-converter", name: "Radiant Intensity", plural: "Radiant Intensities", symbol: "W/sr", factor: 1 },
      { id: "irradiance-converter", name: "Irradiance Converter", plural: "Irradiances", symbol: "W/m²", factor: 1 },
      { id: "photon-energy-ev", name: "Photon Energy (eV)", plural: "Photon Energies", symbol: "eV", factor: 1 },
      { id: "wavelength-nm", name: "Wavelength (nm)", plural: "Wavelengths", symbol: "nm", factor: 1 },
      { id: "frequency-light-thz", name: "Frequency (Light THz)", plural: "Light Frequencies", symbol: "THz", factor: 1 },
      { id: "nanometer", name: "Nanometer (Light)", plural: "Nanometers", symbol: "nm", factor: 1 },
      { id: "angstrom", name: "Angstrom (Å)", plural: "Angstroms", symbol: "Å", factor: 0.1 },
      { id: "color-temperature-mired", name: "Color Temp (Mired)", plural: "Mired Values", symbol: "Mired", factor: 1 },
      { id: "kelvin-temperature", name: "Kelvin", plural: "Kelvin (Light)", symbol: "K", factor: 1 },
      { id: "lux-lumen-ft2", name: "Lux ↔ Lumen/ft²", plural: "Lux per Sq Foot", symbol: "lm/ft²", factor: 10.76391 },
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
      const phonToSone = (ph: number) => Math.pow(2, (ph - 40) / 10);
      const soneToPhon = (s: number) => s <= 0 ? 0 : 40 + 10 * Math.log2(s);
      const freqToWave = (hz: number) => hz === 0 ? 0 : 343 / hz;
      const waveToFreq = (w: number) => w === 0 ? 0 : 343 / w;
      const bpmToHz = (bpm: number) => bpm / 60;
      const hzToBpm = (hz: number) => hz * 60;
      const midiToFreq = (midi: number) => 440 * Math.pow(2, (midi - 69) / 12);
      const freqToMidi = (hz: number) => hz <= 0 ? 0 : 69 + 12 * Math.log2(hz / 440);

      if (from === "decibel" || from === "decibel-spl") {
        if (to === "pascal-sound" || to === "sound-pressure") return dbToPascal(value);
        if (to === "sound-intensity" || to === "watt-m2-sound") return dbToIntensity(value);
        if (to === "bel") return value / 10;
        if (to === "neper") return value / 8.6858896;
      }
      if (from === "pascal-sound" || from === "sound-pressure") {
        if (to === "decibel" || to === "decibel-spl") return pascalToDb(value);
        if (to === "bel") return pascalToDb(value) / 10;
      }
      if (from === "sound-intensity" || from === "watt-m2-sound") {
        if (to === "decibel" || to === "decibel-spl") return intensityToDb(value);
        if (to === "bel") return intensityToDb(value) / 10;
      }
      if (from === "phon" && to === "sone") return phonToSone(value);
      if (from === "sone" && to === "phon") return soneToPhon(value);
      if (from === "frequency-sound" && to === "wavelength-sound") return freqToWave(value);
      if (from === "wavelength-sound" && to === "frequency-sound") return waveToFreq(value);
      if (from === "bpm-tempo" && to === "frequency-sound") return bpmToHz(value);
      if (from === "frequency-sound" && to === "bpm-tempo") return hzToBpm(value);
      if (from === "pitch-midi" && to === "frequency-sound") return midiToFreq(value);
      if (from === "frequency-sound" && to === "pitch-midi") return freqToMidi(value);

      if (from === "bel") {
        if (to === "decibel" || to === "decibel-spl") return value * 10;
        if (to === "neper") return (value * 10) / 8.6858896;
      }
      if (from === "neper") {
        if (to === "decibel" || to === "decibel-spl") return value * 8.6858896;
        if (to === "bel") return (value * 8.6858896) / 10;
      }

      const soundFactors: Record<string, number> = {
        "decibel": 1, "bel": 10, "decibel-spl": 1, "phon": 1, "sone": 1,
        "sound-power-level": 1, "sound-intensity-level": 1, "reverberation-time-s": 1,
        "noise-criteria-nc": 1, "dba-sound": 1, "loudness-level": 1, "speed-of-sound-ms": 1,
        "doppler-shift-ratio": 1, "acoustic-impedance-pa": 1, "db-gain-loss": 1,
        "sabine-absorption": 1, "sound-exposure-level": 1, "ultrasonic-frequency-khz": 1000,
        "infrasound-frequency-hz": 1
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
      { id: "watt-m2-sound", name: "Watt/m²", plural: "Watts per Sq Meter", symbol: "W/m²", factor: 1 },
      { id: "phon", name: "Phon", plural: "Phons", symbol: "Phon", factor: 1 },
      { id: "sone", name: "Sone", plural: "Sones", symbol: "Sone", factor: 1 },
      { id: "sound-power-level", name: "Sound Power Level", plural: "Sound Power Levels", symbol: "Lw", factor: 1 },
      { id: "sound-intensity-level", name: "Sound Intensity Level", plural: "Sound Intensity Levels", symbol: "Li", factor: 1 },
      { id: "frequency-sound", name: "Frequency (Sound)", plural: "Sound Frequencies", symbol: "Hz", factor: 1 },
      { id: "wavelength-sound", name: "Wavelength (Sound)", plural: "Sound Wavelengths", symbol: "m", factor: 1 },
      { id: "octave-ratio", name: "Octave Ratio", plural: "Octaves", symbol: "Oct", factor: 1 },
      { id: "semitone-ratio", name: "Semitone Ratio", plural: "Semitones", symbol: "Semi", factor: 1 },
      { id: "cent-music", name: "Cent (Music)", plural: "Musical Cents", symbol: "Cent", factor: 1 },
      { id: "pitch-midi", name: "Pitch (MIDI)", plural: "Pitch Key Indexes", symbol: "MIDI", factor: 1 },
      { id: "reverberation-time-s", name: "Reverberation Time", plural: "RT60 Times", symbol: "s", factor: 1 },
      { id: "noise-criteria-nc", name: "Noise Criteria", plural: "Noise Criteria (NC)", symbol: "NC", factor: 1 },
      { id: "dba-sound", name: "A-Weighted Decibel", plural: "dBA Values", symbol: "dBA", factor: 1 },
      { id: "loudness-level", name: "Loudness Level", plural: "Loudness Levels", symbol: "LUFS", factor: 1 },
      { id: "speed-of-sound-ms", name: "Speed of Sound", plural: "Speeds of Sound", symbol: "m/s", factor: 1 },
      { id: "doppler-shift-ratio", name: "Doppler Shift", plural: "Doppler Shifts", symbol: "Δf/f", factor: 1 },
      { id: "acoustic-impedance-pa", name: "Acoustic Impedance", plural: "Acoustic Impedances", symbol: "Pa·s/m", factor: 1 },
      { id: "db-gain-loss", name: "Decibel Gain/Loss", plural: "dB Gain/Loss", symbol: "dB", factor: 1 },
      { id: "sabine-absorption", name: "Sabine Absorption", plural: "Sabine Units", symbol: "Sab", factor: 1 },
      { id: "sound-exposure-level", name: "Sound Exposure Level", plural: "Sound Exposures", symbol: "dB", factor: 1 },
      { id: "ultrasonic-frequency-khz", name: "Ultrasonic Freq", plural: "Ultrasonic Frequencies", symbol: "kHz", factor: 1000 },
      { id: "infrasound-frequency-hz", name: "Infrasound Freq", plural: "Infrasound Frequencies", symbol: "Hz", factor: 1 },
      { id: "bpm-tempo", name: "BPM Tempo", plural: "BPMs", symbol: "BPM", factor: 1 }
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
      { id: "kip", name: "Kip", plural: "Kips", symbol: "kip", factor: 4448.221615 },
      { id: "poundal", name: "Poundal", plural: "Poundals", symbol: "pdl", factor: 0.138254954 },
      { id: "kilonewton", name: "Kilonewton", plural: "Kilonewtons", symbol: "kN", factor: 1000 },
      { id: "meganewton", name: "Meganewton", plural: "Meganewtons", symbol: "MN", factor: 1000000 },
      { id: "ounce-force", name: "Ounce-force", plural: "Ounce-forces", symbol: "ozf", factor: 0.27801385 },
      { id: "gram-force", name: "Gram-force", plural: "Gram-forces", symbol: "gf", factor: 0.00980665 },
      { id: "ton-force-us", name: "Ton-force US", plural: "Ton-forces (US)", symbol: "tonf (US)", factor: 8896.44323 },
      { id: "ton-force-metric", name: "Ton-force Metric", plural: "Ton-forces (Metric)", symbol: "tonf (m)", factor: 9806.65 },
      { id: "sthene", name: "Sthene", plural: "Sthenes", symbol: "sn", factor: 1000 },
      { id: "kip-force", name: "Kip-force", plural: "Kip-forces", symbol: "kipf", factor: 4448.221615 },
      { id: "force-per-length-n-m", name: "Newton per Meter", plural: "Newtons per Meter", symbol: "N/m", factor: 1 },
      { id: "force-per-length-lb-in", name: "Pound-force per Inch", plural: "Pound-forces per Inch", symbol: "lbf/in", factor: 175.1268 },
      { id: "millinewton", name: "Millinewton", plural: "Millinewtons", symbol: "mN", factor: 0.001 },
      { id: "micronewton", name: "Micronewton", plural: "Micronewtons", symbol: "µN", factor: 0.000001 },
      { id: "weight-force", name: "Weight Force", plural: "Weight Forces", symbol: "N", factor: 1 },
      { id: "centrifugal-force", name: "Centrifugal Force", plural: "Centrifugal Forces", symbol: "N", factor: 1 },
      { id: "gravitational-force", name: "Gravitational Force", plural: "Gravitational Forces", symbol: "N", factor: 1 },
      { id: "torque-n-m", name: "Torque (N·m)", plural: "Torques", symbol: "N·m", factor: 1 },
      { id: "torque-lb-ft", name: "Torque (lb·ft)", plural: "Torques (lb·ft)", symbol: "lb·ft", factor: 1.355818 },
      { id: "impulse-n-s", name: "Impulse (N·s)", plural: "Impulses", symbol: "N·s", factor: 1 },
      { id: "spring-force", name: "Spring Force", plural: "Spring Forces", symbol: "N", factor: 1 },
      { id: "frictional-force", name: "Frictional Force", plural: "Frictional Forces", symbol: "N", factor: 1 },
      { id: "tension-force", name: "Tension Force", plural: "Tension Forces", symbol: "N", factor: 1 },
      { id: "kg-force-cm2", name: "kgf/cm²", plural: "Kilogram-forces per Sq Centimeter", symbol: "kgf/cm²", factor: 98066.5 },
      { id: "force-density", name: "Force Density", plural: "Force Densities", symbol: "N/m³", factor: 1 },
      { id: "elastic-force", name: "Elastic Force", plural: "Elastic Forces", symbol: "N", factor: 1 }
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
      { id: "mass-flow-rate", name: "Mass Flow Rate", plural: "Mass Flow Rates", symbol: "kg/s", factor: 1 },
      { id: "volumetric-flow-rate", name: "Volumetric Flow Rate", plural: "Volumetric Flow Rates", symbol: "L/s", factor: 1 },
      { id: "liter-per-min", name: "Liter/min", plural: "Liters per Minute", symbol: "L/min", factor: 0.016666667 },
      { id: "gallon-per-hour", name: "Gallon/hour", plural: "Gallons per Hour", symbol: "gph", factor: 0.001051503 },
      { id: "cubic-centimeter-per-sec", name: "Cubic centimeter/sec", plural: "Cubic Centimeters per Second", symbol: "cm³/s", factor: 0.001 },
      { id: "milliliter-per-min", name: "Milliliter/min", plural: "Milliliters per Minute", symbol: "mL/min", factor: 0.000016667 },
      { id: "flow-velocity", name: "Flow Velocity", plural: "Flow Velocities", symbol: "m/s", factor: 1 },
      { id: "reynolds-number", name: "Reynolds Number", plural: "Reynolds Numbers", symbol: "Re", factor: 1 },
      { id: "discharge-rate", name: "Discharge Rate", plural: "Discharge Rates", symbol: "m³/s", factor: 1000 },
      { id: "water-flow-rate", name: "Water Flow Rate", plural: "Water Flow Rates", symbol: "L/s", factor: 1 },
      { id: "gas-flow-rate", name: "Gas Flow Rate", plural: "Gas Flow Rates", symbol: "L/s", factor: 1 },
      { id: "cfm-unit", name: "CFM", plural: "Cubic Feet per Minute", symbol: "CFM", factor: 0.471947443 },
      { id: "cmh-unit", name: "CMH", plural: "Cubic Meters per Hour", symbol: "CMH", factor: 0.277777778 },
      { id: "acre-feet-per-day", name: "Acre-feet/day", plural: "Acre-feet per Day", symbol: "ac-ft/d", factor: 14.2764 },
      { id: "million-gallons-per-day", name: "Million Gallons/Day", plural: "Million Gallons per Day", symbol: "MGD", factor: 43.8126 },
      { id: "flow-coefficient", name: "Flow Coefficient", plural: "Flow Coefficients (Cv)", symbol: "Cv", factor: 1 },
      { id: "pump-flow-rate", name: "Pump Flow Rate", plural: "Pump Flow Rates", symbol: "L/s", factor: 1 },
      { id: "blood-flow-rate", name: "Blood Flow Rate", plural: "Blood Flow Rates", symbol: "mL/min", factor: 0.000016667 },
      { id: "air-flow-rate", name: "Air Flow Rate", plural: "Air Flow Rates", symbol: "L/s", factor: 1 },
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
      const degToGrade = (deg: number) => Math.tan(deg * Math.PI / 180) * 100;
      const gradeToDeg = (grade: number) => Math.atan(grade / 100) * 180 / Math.PI;

      if (from === "degree" && to === "percent-grade") return degToGrade(value);
      if (from === "percent-grade" && to === "degree") return gradeToDeg(value);
      if (from === "radian" && to === "percent-grade") return degToGrade(value * 57.295779513);
      if (from === "percent-grade" && to === "radian") return gradeToDeg(value) / 57.295779513;

      const angleFactors: Record<string, number> = {
        "degree": 1, "radian": 57.295779513, "gradian": 0.9, "arcminute": 0.016666667,
        "arcsecond": 0.000277778, "revolution": 360, "mil-angle": 0.05625, "turn-angle": 360,
        "quadrant-angle": 90, "sextant-angle": 60, "radian-per-sec": 57.295779513,
        "rpm-angle": 6, "degree-per-sec": 1, "compass-point": 11.25,
        "grad-angle": 0.9, "decimal-degree": 1, "slope-angle-deg": 1, "angle-elevation": 1,
        "angle-depression": 1, "bearing-angle": 1, "azimuth-angle": 1, "hour-angle": 15,
        "right-ascension": 15, "angular-diameter": 1, "degree-hour": 15,
        "circular-mil-angle": 1
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
      { id: "percent-grade", name: "Percent Grade", plural: "Percent Grades", symbol: "%", factor: 1 },
      { id: "radian-per-sec", name: "Radian/sec", plural: "Radians per Second", symbol: "rad/s", factor: 57.295779513 },
      { id: "rpm-angle", name: "RPM (Angle)", plural: "Revolutions per Minute", symbol: "rpm", factor: 6 },
      { id: "degree-per-sec", name: "Degree/sec", plural: "Degrees per Second", symbol: "°/s", factor: 1 },
      { id: "compass-point", name: "Compass Point", plural: "Compass Points", symbol: "pt", factor: 11.25 },
      { id: "grad-angle", name: "Grad", plural: "Grads", symbol: "grad", factor: 0.9 },
      { id: "dms-angle", name: "DMS", plural: "Degrees-Minutes-Seconds", symbol: "DMS", factor: 1 },
      { id: "decimal-degree", name: "Decimal Degree", plural: "Decimal Degrees", symbol: "°", factor: 1 },
      { id: "slope-angle-deg", name: "Slope Angle", plural: "Slope Angles", symbol: "°", factor: 1 },
      { id: "angle-elevation", name: "Angle of Elevation", plural: "Angles of Elevation", symbol: "°", factor: 1 },
      { id: "angle-depression", name: "Angle of Depression", plural: "Angles of Depression", symbol: "°", factor: 1 },
      { id: "bearing-angle", name: "Bearing", plural: "Bearings", symbol: "°", factor: 1 },
      { id: "azimuth-angle", name: "Azimuth", plural: "Azimuth angles", symbol: "°", factor: 1 },
      { id: "hour-angle", name: "Hour Angle", plural: "Hour Angles", symbol: "ha", factor: 15 },
      { id: "right-ascension", name: "Right Ascension", plural: "Right Ascensions", symbol: "RA", factor: 15 },
      { id: "angular-diameter", name: "Angular Diameter", plural: "Angular Diameters", symbol: "°", factor: 1 },
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
    description: "Convert on-site build metrics including brick counts, timber volume, concrete strength, and R-values.",
    baseUnitId: "kilogram-construction",
    units: [
      { id: "cement-bag", name: "Cement Bag", plural: "Cement Bags (50kg)", symbol: "bag", factor: 50 },
      { id: "kilogram-construction", name: "Kilogram", plural: "Kilograms", symbol: "kg", factor: 1 },
      { id: "concrete-volume-m3", name: "Concrete Volume (m³)", plural: "Cubic Meters of Concrete", symbol: "m³", factor: 1 },
      { id: "brick-count", name: "Brick Count", plural: "Standard Brick Counts", symbol: "bricks", factor: 1 },
      { id: "rebar-weight-kg", name: "Rebar Weight (kg)", plural: "Rebar Weights", symbol: "kg", factor: 1 },
      { id: "rebar-length-m", name: "Rebar Length (m)", plural: "Rebar Lengths", symbol: "m", factor: 1 },
      { id: "paint-coverage-sqm", name: "Paint Coverage", plural: "Paint Coverages", symbol: "m²", factor: 1 },
      { id: "tile-coverage-sqm", name: "Tile Coverage", plural: "Tile Coverages", symbol: "m²", factor: 1 },
      { id: "sand-volume-m3", name: "Sand Volume", plural: "Cubic Meters of Sand", symbol: "m³", factor: 1 },
      { id: "aggregate-volume-m3", name: "Aggregate Volume", plural: "Cubic Meters of Aggregate", symbol: "m³", factor: 1 },
      { id: "board-foot", name: "Board Feet", plural: "Board Feet Volumes", symbol: "FBM", factor: 0.002359737 },
      { id: "sq-foot-construction", name: "Sq Foot", plural: "Square Feet", symbol: "ft²", factor: 0.092903 },
      { id: "sq-meter-construction", name: "Sq Meter", plural: "Square Meters", symbol: "m²", factor: 1 },
      { id: "cubic-yard-concrete", name: "Cubic Yard", plural: "Cubic Yards", symbol: "yd³", factor: 0.764555 },
      { id: "cubic-meter-concrete", name: "Cubic Meter", plural: "Cubic Meters", symbol: "m³", factor: 1 },
      { id: "plywood-sheet", name: "Plywood Sheet", plural: "Plywood Sheets (4x8)", symbol: "sheet", factor: 2.972897 },
      { id: "timber-volume-m3", name: "Timber Volume", plural: "Timber Volumes", symbol: "m³", factor: 1 },
      { id: "roofing-square", name: "Roofing Square", plural: "Roofing Squares", symbol: "sq", factor: 9.290304 },
      { id: "flooring-area-sqft", name: "Flooring Area (sqft)", plural: "Flooring Areas (sqft)", symbol: "ft²", factor: 0.092903 },
      { id: "wall-area-sqft", name: "Wall Area (sqft)", plural: "Wall Areas (sqft)", symbol: "ft²", factor: 0.092903 },
      { id: "mortar-mix-ratio", name: "Mortar Mix Ratio", plural: "Mortar Mixes", symbol: "ratio", factor: 1 },
      { id: "rebar-weight-lb", name: "Rebar Weight (lb)", plural: "Rebar Weights in lbs", symbol: "lb", factor: 0.453592 },
      { id: "pipe-diameter-inch", name: "Pipe Diameter (in)", plural: "Pipe Diameters in Inches", symbol: "in", factor: 1 },
      { id: "pipe-schedule", name: "Pipe Schedule", plural: "Pipe Schedules", symbol: "sch", factor: 1 },
      { id: "slab-thickness-inch", name: "Slab Thickness (in)", plural: "Slab Thicknesses", symbol: "in", factor: 1 },
      { id: "load-bearing-psf", name: "Load Bearing (psf)", plural: "Load Bearings (psf)", symbol: "psf", factor: 47.88026 },
      { id: "psi-strength", name: "Strength (PSI)", plural: "Concrete Strength in PSI", symbol: "psi", factor: 6894.757 },
      { id: "mpa-strength", name: "Strength (MPa)", plural: "Concrete Strength in MPa", symbol: "MPa", factor: 1000000 },
      { id: "gravel-volume-m3", name: "Gravel Volume", plural: "Cubic Meters of Gravel", symbol: "m³", factor: 1 },
      { id: "insulation-r-value", name: "Insulation R-Value", plural: "R-Values", symbol: "R-val", factor: 1 }
    ]
  },
  {
    id: "data-transfer",
    name: "Data Transfer",
    icon: "Wifi",
    description: "Convert bandwidth speeds, download/upload file times, 5G parameters, and satellite networks.",
    baseUnitId: "bps",
    customFormula: (value: number, from: string, to: string) => {
      if (to === "download-time-s" || to === "upload-time-s") {
        const transferFactors: Record<string, number> = {
          "bps": 1, "Bps": 8, "kbps": 1000, "Mbps": 1000000, "Gbps": 1000000000,
          "Tbps": 1000000000000, "KBps": 8000, "MBps": 8000000, "GBps": 8000000000
        };
        const currentSpeedBps = value * (transferFactors[from] || 1);
        return currentSpeedBps <= 0 ? 0 : 8589934592 / currentSpeedBps;
      }
      if (from === "download-time-s" || from === "upload-time-s") {
        const transferFactors: Record<string, number> = {
          "bps": 1, "Bps": 8, "kbps": 1000, "Mbps": 1000000, "Gbps": 1000000000,
          "Tbps": 1000000000000, "KBps": 8000, "MBps": 8000000, "GBps": 8000000000
        };
        const targetFactor = transferFactors[to] || 1;
        return value <= 0 ? 0 : (8589934592 / value) / targetFactor;
      }

      const transFactors: Record<string, number> = {
        "bps": 1, "Bps": 8, "kbps": 1000, "Mbps": 1000000, "Gbps": 1000000000,
        "Tbps": 1000000000000, "KBps": 8000, "MBps": 8000000, "GBps": 8000000000,
        "bandwidth-hz": 1, "baud-rate": 1, "network-speed-cat5": 100000000,
        "network-speed-cat6": 10000000000, "usb-1-1-speed": 12000000, "usb-2-0-speed": 480000000,
        "usb-3-0-speed": 5000000000, "wifi-4-speed": 300000000, "wifi-5-speed": 1300000000,
        "wifi-6-speed": 9600000000, "fiber-optic-10g": 10000000000, "mobile-4g-speed": 100000000,
        "mobile-5g-speed": 1000000000, "streaming-4k": 25000000, "streaming-1080p": 5000000,
        "latency-ms": 1, "packet-size": 8, "sample-rate-hz": 1, "audio-bitrate-mp3": 320000
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
      { id: "GBps", name: "GB/s", plural: "Gigabytes per Second", symbol: "GB/s", factor: 8000000000 },
      { id: "download-time-s", name: "Download Time (1GB)", plural: "Download times", symbol: "s", factor: 1 },
      { id: "upload-time-s", name: "Upload Time (1GB)", plural: "Upload times", symbol: "s", factor: 1 },
      { id: "bandwidth-hz", name: "Bandwidth (Hz)", plural: "Bandwidth frequencies", symbol: "Hz", factor: 1 },
      { id: "baud-rate", name: "Baud Rate", plural: "Baud rates", symbol: "Bd", factor: 1 },
      { id: "network-speed-cat5", name: "Cat5 Speed", plural: "Cat5 Speeds", symbol: "100M", factor: 100000000 },
      { id: "network-speed-cat6", name: "Cat6 Speed", plural: "Cat6 Speeds", symbol: "10G", factor: 10000000000 },
      { id: "usb-1-1-speed", name: "USB 1.1 Speed", plural: "USB 1.1 speeds", symbol: "12M", factor: 12000000 },
      { id: "usb-2-0-speed", name: "USB 2.0 Speed", plural: "USB 2.0 speeds", symbol: "480M", factor: 480000000 },
      { id: "usb-3-0-speed", name: "USB 3.0 Speed", plural: "USB 3.0 speeds", symbol: "5G", factor: 5000000000 },
      { id: "wifi-4-speed", name: "WiFi 4 Speed", plural: "WiFi 4 speeds", symbol: "300M", factor: 300000000 },
      { id: "wifi-5-speed", name: "WiFi 5 Speed", plural: "WiFi 5 speeds", symbol: "1.3G", factor: 1300000000 },
      { id: "wifi-6-speed", name: "WiFi 6 Speed", plural: "WiFi 6 speeds", symbol: "9.6G", factor: 9600000000 },
      { id: "fiber-optic-10g", name: "Fiber Optic 10G", plural: "Fiber Optic 10G speeds", symbol: "10G", factor: 10000000000 },
      { id: "mobile-4g-speed", name: "4G Speed", plural: "4G Speeds", symbol: "100M", factor: 100000000 },
      { id: "mobile-5g-speed", name: "5G Speed", plural: "5G Speeds", symbol: "1G", factor: 1000000000 },
      { id: "streaming-4k", name: "Streaming 4K", plural: "Streaming 4K bitrates", symbol: "25M", factor: 25000000 },
      { id: "streaming-1080p", name: "Streaming 1080p", plural: "Streaming 1080p bitrates", symbol: "5M", factor: 5000000 },
      { id: "latency-ms", name: "Latency (ms)", plural: "Latency values", symbol: "ms", factor: 1 },
      { id: "packet-size", name: "Packet Size", plural: "Packet sizes", symbol: "Bytes", factor: 8 },
      { id: "sample-rate-hz", name: "Sample Rate (Hz)", plural: "Sample rates", symbol: "Hz", factor: 1 },
      { id: "audio-bitrate-mp3", name: "Audio MP3", plural: "MP3 bitrates", symbol: "320k", factor: 320000 }
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
