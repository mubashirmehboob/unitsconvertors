import { GuideItem } from "../guidesData";

export const commonMeasurementUnitsConversionFactorsGuide: GuideItem = {
  slug: "common-measurement-units-conversion-factors",
  title: "Common Measurement Units and Their Conversion Factors",
  seoTitle: "Common Measurement Units and Their Conversion Factors | UnitsConvertors.com",
  description: "A comprehensive reference guide to common measurement units and conversion factors across length, area, volume, mass, weight, time, temperature, pressure, and energy.",
  publishedAt: "2026-10-04",
  updatedAt: "2026-10-04",
  category: "Reference & Standards",
  readTimeMinutes: 12,
  relatedConverterSlugs: [
    "meter-to-foot",
    "kilometer-to-mile",
    "kilogram-to-pound",
    "celsius-to-fahrenheit",
    "liter-to-gallon-us",
    "pascal-to-bar",
    "joule-to-calorie"
  ],
  content: `
<h2>A Practical Reference Guide to Common Units</h2>
<p>
  Whether you are analyzing engineering drawings, formulating chemical solutions, calculating freight logistics, or solving physics equations, accurate unit conversion is fundamental. Physical measurements rely on standardized units, yet global industry and everyday commerce continue to divide their practices among the International System of Units (SI), metric prefixes, US Customary units, and British Imperial standards.
</p>
<p>
  This guide serves as a practical, authoritative reference lookup. It compiles the most frequently used measurement units across thirteen primary physical dimensions, explains the quantity being measured, provides standardized unit symbols, and presents verified conversion factors.
</p>

<h2>How to Use These Conversion Tables</h2>
<p>
  To find an equivalent measurement using the tables in this reference:
</p>
<ol class="list-decimal pl-6 my-4 space-y-2 text-slate-700 dark:text-slate-300">
  <li><strong>Locate the physical category</strong> you wish to convert (such as Length, Pressure, or Energy).</li>
  <li><strong>Find your starting unit</strong> in the table. The conversion factor expresses the equivalent value in base SI units or primary customary equivalents.</li>
  <li><strong>Multiply by the conversion factor</strong> when converting from the unit into the stated reference unit.</li>
  <li><strong>Divide by the conversion factor</strong> when converting from the reference unit back into the specific unit.</li>
</ol>

<h2>Exact vs Approximate Conversion Factors</h2>
<p>
  A critical distinction in measurement science is the difference between an <strong>exact conversion factor</strong> and an <strong>approximate conversion factor</strong>:
</p>
<ul class="list-disc pl-6 my-4 space-y-2 text-slate-700 dark:text-slate-300">
  <li>
    <strong>Exact Conversion Factors:</strong> Established by international treaty, legal statute, or mathematical definition. They have an infinite number of significant digits and introduce zero rounding error into calculations. For example, by the International Yard and Pound Agreement of 1959, $1\\text{ inch} = 2.54\\text{ cm}$ exactly, $1\\text{ yard} = 0.9144\\text{ m}$ exactly, and $1\\text{ avoirdupois pound} = 0.45359237\\text{ kg}$ exactly.
  </li>
  <li>
    <strong>Approximate Conversion Factors:</strong> Arise when converting between systems whose definitions produce repeating or irrational decimals, or where values are rounded for computational convenience. For example, $1\\text{ meter} \\approx 3.28084\\text{ feet}$ or $1\\text{ kilogram} \\approx 2.20462\\text{ pounds}$. When conducting high-precision scientific or engineering work, always maintain sufficient significant figures until final rounding.
  </li>
</ul>

<h2>Common Conversion Factors at a Glance</h2>
<p>
  The table below summarizes the most common conversion relationships encountered across science, engineering, and commerce:
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Quantity</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Conversion Pair</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Relationship</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Nature</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Length</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Inch to Centimeter</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1\\text{ in} = 2.54\\text{ cm}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-medium">Exact (1959)</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Length</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Foot to Meter</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1\\text{ ft} = 0.3048\\text{ m}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-medium">Exact</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Length</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Mile to Kilometer</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1\\text{ mi} = 1.609344\\text{ km}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-medium">Exact</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Mass</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Pound to Kilogram</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1\\text{ lb} = 0.45359237\\text{ kg}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-medium">Exact</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Volume</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">US Gallon to Liter</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1\\text{ gal (US)} = 3.785411784\\text{ L}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-medium">Exact ($231\\text{ in}^3$)</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Volume</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Imperial Gallon to Liter</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1\\text{ gal (Imp)} = 4.54609\\text{ L}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-medium">Exact</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Pressure</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Atmosphere to Pascal</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1\\text{ atm} = 101,325\\text{ Pa}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-medium">Exact Standard</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Energy</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Calorie (IT) to Joule</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1\\text{ cal}_{\\text{IT}} = 4.1868\\text{ J}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-medium">Exact</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Power</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Mechanical Horsepower to Watt</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1\\text{ hp} = 745.69987158227022\\text{ W}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-medium">Exact ($550\\text{ ft}\\cdot\\text{lbf}/\\text{s}$)</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>1. Length and Distance</h2>
<p>
  <strong>Physical Quantity:</strong> Linear spatial separation between two points in one dimension. The SI base unit is the <strong>meter (m)</strong>.
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Unit Name</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Symbol</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Meters (m)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Customary Equivalent</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Millimeter</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">mm</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.001\\text{ m}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 0.0393701\\text{ in}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^{-3}\\text{ m}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Centimeter</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">cm</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.01\\text{ m}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 0.393701\\text{ in}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^{-2}\\text{ m}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Meter (SI Base)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">m</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ m}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 3.28084\\text{ ft}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">SI Base Unit</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Kilometer</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">km</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,000\\text{ m}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 0.621371\\text{ mi}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^3\\text{ m}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Inch</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">in</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.0254\\text{ m}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$25.4\\text{ mm}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact by treaty</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Foot</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">ft</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.3048\\text{ m}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$12\\text{ in}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact by definition</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Yard</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">yd</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.9144\\text{ m}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$3\\text{ ft} = 36\\text{ in}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact by definition</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Mile (Statute)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">mi</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,609.344\\text{ m}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$5,280\\text{ ft} = 1,760\\text{ yd}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact by definition</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Nautical Mile</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">NM</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,852\\text{ m}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 1.15078\\text{ mi}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact international standard</td>
      </tr>
    </tbody>
  </table>
</div>
<p>
  Use our <a href="/converters/length/meter-to-foot" class="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 transition-colors">Meter to Foot Converter</a> or <a href="/converters/length/kilometer-to-mile" class="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 transition-colors">Kilometer to Mile Converter</a> for automated calculations.
</p>

<h2>2. Area</h2>
<p>
  <strong>Physical Quantity:</strong> Two-dimensional spatial surface extent. The SI coherent derived unit is the <strong>square meter (m²)</strong>.
</p>
<p>
  <strong>Dimensional Exponent Rule:</strong> Area conversion factors are derived by squaring their corresponding linear conversion factors:
</p>
<p class="my-4 text-center font-mono py-2">
  $$(1\\text{ m} = 3.280839895\\text{ ft}) \\implies 1\\text{ m}^2 = (3.280839895)^2 \\approx 10.76391\\text{ ft}^2$$
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Unit Name</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Symbol</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Square Meters (m²)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Customary Equivalent</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Square Millimeter</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">mm²</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.000001\\text{ m}^2$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 0.001550\\text{ in}^2$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^{-6}\\text{ m}^2$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Square Centimeter</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">cm²</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.0001\\text{ m}^2$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 0.1550\\text{ in}^2$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^{-4}\\text{ m}^2$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Square Meter (SI Derived)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">m²</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ m}^2$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 10.76391\\text{ ft}^2$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Coherent SI Unit</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Hectare</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">ha</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$10,000\\text{ m}^2$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 2.47105\\text{ acres}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact metric ($10^4\\text{ m}^2$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Square Kilometer</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">km²</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,000,000\\text{ m}^2$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 0.386102\\text{ mi}^2$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^6\\text{ m}^2$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Square Inch</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">in²</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.00064516\\text{ m}^2$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$6.4516\\text{ cm}^2$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact by definition</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Square Foot</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">ft²</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.09290304\\text{ m}^2$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$144\\text{ in}^2$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact by definition</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Square Yard</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">yd²</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.83612736\\text{ m}^2$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$9\\text{ ft}^2$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact by definition</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Acre</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">ac</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$4,046.8564224\\text{ m}^2$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$43,560\\text{ ft}^2$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact international acre</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Square Mile</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">mi²</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$2,589,988.110336\\text{ m}^2$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$640\\text{ acres}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact by definition</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>3. Volume and Fluid Capacity</h2>
<p>
  <strong>Physical Quantity:</strong> Three-dimensional spatial capacity. The SI coherent derived unit is the <strong>cubic meter (m³)</strong>. Everyday commerce and chemistry widely employ the <strong>liter (L)</strong>, defined as $1\\text{ dm}^3 = 0.001\\text{ m}^3$.
</p>
<p>
  <strong>Dimensional Exponent Rule:</strong> Cubic conversion factors equal the cube of their linear equivalents: $(1\\text{ m} = 100\\text{ cm}) \\implies 1\\text{ m}^3 = (100)^3 = 1,000,000\\text{ cm}^3$.
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Unit Name</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Symbol</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Liters (L)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in m³</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Milliliter</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">mL (cm³)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.001\\text{ L}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$10^{-6}\\text{ m}^3$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($1\\text{ cm}^3$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Liter (Metric standard)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">L</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ L}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.001\\text{ m}^3$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($1\\text{ dm}^3$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Cubic Meter (SI Derived)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">m³</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,000\\text{ L}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ m}^3$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Coherent SI Unit</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Fluid Ounce (US Liquid)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">fl oz (US)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.0295735\\text{ L}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$29.5735295625\\text{ cm}^3$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($1/128\\text{ US gal}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Fluid Ounce (Imperial)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">fl oz (Imp)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.0284131\\text{ L}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$28.4130625\\text{ cm}^3$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($1/160\\text{ Imp gal}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">US Liquid Gallon</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">gal (US)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$3.785411784\\text{ L}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.003785411784\\text{ m}^3$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($231\\text{ in}^3$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Imperial Gallon (UK)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">gal (Imp)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$4.54609\\text{ L}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.00454609\\text{ m}^3$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact by Weights & Measures Act</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Cubic Foot</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">ft³</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 28.3168\\text{ L}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.028316846592\\text{ m}^3$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($1,728\\text{ in}^3$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Cubic Yard</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">yd³</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 764.555\\text{ L}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.764554857984\\text{ m}^3$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($27\\text{ ft}^3$)</td>
      </tr>
    </tbody>
  </table>
</div>
<p>
  Convert fluid volumes using our <a href="/converters/volume/liter-to-gallon-us" class="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 transition-colors">Liter to US Gallon Converter</a>.
</p>

<h2>4. Mass</h2>
<p>
  <strong>Physical Quantity:</strong> Quantitative measure of inertia—the fundamental quantity of matter contained within a physical body. The SI base unit is the <strong>kilogram (kg)</strong>, defined in 2019 by fixing the Planck constant $h = 6.62607015 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$.
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Unit Name</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Symbol</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Kilograms (kg)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Customary Equivalent</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Milligram</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">mg</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.000001\\text{ kg}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 0.0154324\\text{ grains}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^{-6}\\text{ kg}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Gram</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">g</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.001\\text{ kg}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 0.0352740\\text{ oz}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^{-3}\\text{ kg}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Kilogram (SI Base)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">kg</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ kg}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 2.204623\\text{ lb}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">SI Base Unit</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Metric Ton (Tonne)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">t</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,000\\text{ kg}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 2,204.62\\text{ lb}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^3\\text{ kg}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Ounce (Avoirdupois)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">oz</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.028349523125\\text{ kg}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$1/16\\text{ lb} = 437.5\\text{ grains}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact by definition</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Pound (Avoirdupois)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">lb</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.45359237\\text{ kg}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$16\\text{ oz} = 7,000\\text{ grains}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact international standard</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Short Ton (US)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">ton (short)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$907.18474\\text{ kg}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$2,000\\text{ lb}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact by definition</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Long Ton (Imperial)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">ton (long)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,016.0469088\\text{ kg}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$2,240\\text{ lb}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact by definition</td>
      </tr>
    </tbody>
  </table>
</div>
<p>
  Calculate mass values with our <a href="/converters/mass/kilogram-to-pound" class="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 transition-colors">Kilogram to Pound Converter</a>.
</p>

<h2>5. Weight and Force</h2>
<p>
  <strong>Physical Distinction:</strong> While everyday language frequently interchanges mass and weight, in physics and engineering they represent fundamentally different quantities. <strong>Mass</strong> is an invariant property of matter measured in kilograms. <strong>Weight</strong> is the gravitational force exerted on that mass ($F = m \\cdot g$), measured in units of force.
</p>
<p>
  The SI coherent derived unit of force is the <strong>newton (N)</strong>: $1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$. The standard gravitational acceleration constant is legally defined as $g_0 = 9.80665\\text{ m/s}^2 \\approx 32.17405\\text{ ft/s}^2$.
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Unit Name</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Symbol</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Newtons (N)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Customary Equivalent</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Newton (SI Derived)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">N</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ N}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 0.224809\\text{ lbf}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Coherent SI Unit</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Kilonewton</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">kN</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,000\\text{ N}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 224.809\\text{ lbf}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^3\\text{ N}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Dyne</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">dyn</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.00001\\text{ N}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 2.24809 \\times 10^{-6}\\text{ lbf}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact CGS ($10^{-5}\\text{ N}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Kilogram-force (Kilopond)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">kgf (kp)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$9.80665\\text{ N}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$\\approx 2.20462\\text{ lbf}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact standard gravity</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Pound-force</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">lbf</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$4.4482216152605\\text{ N}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$1\\text{ lb} \\times g_0$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact standard definition</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>6. Time</h2>
<p>
  <strong>Physical Quantity:</strong> Continuous progression of physical events. The SI base unit is the <strong>second (s)</strong>, defined by the caesium-133 ground state hyperfine transition frequency $\\Delta \\nu_{\\text{Cs}} = 9,192,631,770\\text{ Hz}$.
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Unit Name</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Symbol</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Seconds (s)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Subunit Relationship</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Microsecond</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">μs</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.000001\\text{ s}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$10^{-6}\\text{ s}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact SI prefix</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Millisecond</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">ms</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.001\\text{ s}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$10^{-3}\\text{ s}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact SI prefix</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Second (SI Base)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">s</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ s}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Base Unit</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">SI Base Standard</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Minute</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">min</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$60\\text{ s}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$60\\text{ s}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact non-SI accepted</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Hour</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">h</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$3,600\\text{ s}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$60\\text{ min}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact non-SI accepted</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Day</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">d</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$86,400\\text{ s}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$24\\text{ h}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact standard day</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Julian Year</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">a (yr)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$31,557,600\\text{ s}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$365.25\\text{ d}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact astronomical standard</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>7. Temperature</h2>
<p>
  <strong>Physical Quantity:</strong> Quantitative thermodynamic measure of average microscopic kinetic energy. The SI base unit is the <strong>kelvin (K)</strong>.
</p>
<p>
  <strong>Mathematical Note:</strong> Unlike other units that share a common zero point, temperature scales have arbitrary zero offsets. Therefore, temperature conversions cannot be performed using a single multiplication factor. They require linear algebraic formulas combining a scale slope and an additive offset.
</p>

<h3>Core Temperature Conversion Formulas</h3>
<ul class="list-disc pl-6 my-4 space-y-2 text-slate-700 dark:text-slate-300">
  <li><strong>Celsius to Fahrenheit:</strong> $T_{(^\\circ\\text{F})} = (T_{(^\\circ\\text{C})} \\times 9/5) + 32$</li>
  <li><strong>Fahrenheit to Celsius:</strong> $T_{(^\\circ\\text{C})} = (T_{(^\\circ\\text{F})} - 32) \\times 5/9$</li>
  <li><strong>Celsius to Kelvin:</strong> $T_{(\\text{K})} = T_{(^\\circ\\text{C})} + 273.15$</li>
  <li><strong>Fahrenheit to Rankine:</strong> $T_{(^\\circ\\text{R})} = T_{(^\\circ\\text{F})} + 459.67$</li>
</ul>

<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Physical Benchmark</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Kelvin (K)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Celsius (°C)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Fahrenheit (°F)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Rankine (°R)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Absolute Zero</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0\\text{ K}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$-273.15^\\circ\\text{C}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$-459.67^\\circ\\text{F}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0^\\circ\\text{R}$</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Freezing Point of Water</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$273.15\\text{ K}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.0^\\circ\\text{C}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$32.0^\\circ\\text{F}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$491.67^\\circ\\text{R}$</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Standard Room Temperature</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$293.15\\text{ K}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$20.0^\\circ\\text{C}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$68.0^\\circ\\text{F}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$527.67^\\circ\\text{R}$</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Normal Human Body Temp</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$310.15\\text{ K}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$37.0^\\circ\\text{C}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$98.6^\\circ\\text{F}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$558.27^\\circ\\text{R}$</td>
      </tr>
      <tr>
        <td class="p-3.5 font-semibold text-slate-900 dark:text-white">Boiling Point of Water (1 atm)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$373.15\\text{ K}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$100.0^\\circ\\text{C}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$212.0^\\circ\\text{F}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$671.67^\\circ\\text{R}$</td>
      </tr>
    </tbody>
  </table>
</div>
<p>
  Convert temperatures with our <a href="/converters/temperature/celsius-to-fahrenheit" class="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 transition-colors">Celsius to Fahrenheit Converter</a>.
</p>

<h2>8. Speed and Velocity</h2>
<p>
  <strong>Physical Quantity:</strong> Rate of spatial displacement over time. The SI coherent derived unit is <strong>meters per second (m/s)</strong>.
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Unit Name</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Symbol</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in m/s</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in km/h</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in mph</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Meter per second (SI Derived)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">m/s</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ m/s}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$3.6\\text{ km/h}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 2.23694\\text{ mph}$</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Kilometer per hour</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">km/h</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.277778\\text{ m/s}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ km/h}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.621371\\text{ mph}$</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Mile per hour</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">mph</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.44704\\text{ m/s}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.609344\\text{ km/h}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ mph}$</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Foot per second</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">ft/s</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.3048\\text{ m/s}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.09728\\text{ km/h}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.681818\\text{ mph}$</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Knot (Nautical mile/hr)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">kn (kt)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.514444\\text{ m/s}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.852\\text{ km/h}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 1.15078\\text{ mph}$</td>
      </tr>
    </tbody>
  </table>
</div>
<p>
  Convert velocities using our <a href="/converters/speed/kmh-to-mph" class="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 transition-colors">km/h to mph Converter</a>.
</p>

<h2>9. Pressure and Stress</h2>
<p>
  <strong>Physical Quantity:</strong> Force applied perpendicular to a surface per unit area ($P = F / A$). The SI coherent derived unit is the <strong>pascal (Pa)</strong>, defined as $1\\text{ N/m}^2$.
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Unit Name</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Symbol</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Pascals (Pa)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in PSI (lbf/in²)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Pascal (SI Derived)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">Pa</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ Pa}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.000145038\\text{ psi}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Coherent SI Unit</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Kilopascal</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">kPa</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,000\\text{ Pa}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.145038\\text{ psi}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^3\\text{ Pa}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Megapascal</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">MPa</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,000,000\\text{ Pa}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 145.038\\text{ psi}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^6\\text{ Pa} = 1\\text{ N/mm}^2$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Bar</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">bar</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$100,000\\text{ Pa}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 14.50377\\text{ psi}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^5\\text{ Pa}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Standard Atmosphere</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">atm</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$101,325\\text{ Pa}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 14.69595\\text{ psi}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact standard definition</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Pound per square inch</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">psi (lbf/in²)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 6,894.757\\text{ Pa}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ psi}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($1\\text{ lbf} / 1\\text{ in}^2$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Millimeter of mercury (Torr)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">mmHg (Torr)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 133.322\\text{ Pa}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.0193368\\text{ psi}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($101,325 / 760\\text{ Pa}$)</td>
      </tr>
    </tbody>
  </table>
</div>
<p>
  Convert pressures with our <a href="/converters/pressure/psi-to-bar" class="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 transition-colors">PSI to Bar Converter</a>.
</p>

<h2>10. Energy and Work</h2>
<p>
  <strong>Physical Quantity:</strong> Quantitative capability of a system to perform work. The SI coherent derived unit is the <strong>joule (J)</strong>, defined as $1\\text{ N}\\cdot\\text{m} = 1\\text{ kg}\\cdot\\text{m}^2/\\text{s}^2$.
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Unit Name</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Symbol</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Joules (J)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Customary Equivalent</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Joule (SI Derived)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">J</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ J}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.737562\\text{ ft}\\cdot\\text{lbf}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Coherent SI Unit</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Kilojoule</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">kJ</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,000\\text{ J}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.947817\\text{ BTU}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^3\\text{ J}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Calorie (International Table)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">cal (IT)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$4.1868\\text{ J}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.0039683\\text{ BTU}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact standard (1956)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Kilocalorie (Food Calorie)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">kcal (Cal)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$4,186.8\\text{ J}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 3.96832\\text{ BTU}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($1,000\\text{ cal}_{\\text{IT}}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Watt-hour</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">Wh</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$3,600\\text{ J}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 3.41214\\text{ BTU}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($1\\text{ W} \\times 3,600\\text{ s}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Kilowatt-hour</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">kWh</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$3,600,000\\text{ J}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 3,412.14\\text{ BTU}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($3.6\\text{ MJ}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">British Thermal Unit (IT)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">BTU (IT)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,055.05585262\\text{ J}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 778.169\\text{ ft}\\cdot\\text{lbf}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact standard definition</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Foot-pound force</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">ft·lbf</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.3558179483314004\\text{ J}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1\\text{ ft} \\times 1\\text{ lbf}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact mechanical standard</td>
      </tr>
    </tbody>
  </table>
</div>
<p>
  Calculate energy values with our <a href="/converters/energy/joule-to-calorie" class="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 transition-colors">Joule to Calorie Converter</a>.
</p>

<h2>11. Power</h2>
<p>
  <strong>Physical Quantity:</strong> Rate at which energy is transferred or work is performed over time ($P = W / t$). The SI coherent derived unit is the <strong>watt (W)</strong>, defined as $1\\text{ J/s} = 1\\text{ kg}\\cdot\\text{m}^2/\\text{s}^3$.
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Unit Name</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Symbol</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Watts (W)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Horsepower (hp)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Watt (SI Derived)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">W</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ W}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.00134102\\text{ hp}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Coherent SI Unit</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Kilowatt</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">kW</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,000\\text{ W}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 1.34102\\text{ hp}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($10^3\\text{ W}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Horsepower (Mechanical / Imperial)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">hp</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$745.69987158227022\\text{ W}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ hp}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($550\\text{ ft}\\cdot\\text{lbf}/\\text{s}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Horsepower (Metric / PS / CV)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">PS (ch)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$735.49875\\text{ W}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.98632\\text{ hp}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($75\\text{ kgf}\\cdot\\text{m}/\\text{s}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">BTU per hour</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">BTU/h</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.293071\\text{ W}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.000393015\\text{ hp}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($1,055.056 / 3,600\\text{ W}$)</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>12. Frequency</h2>
<p>
  <strong>Physical Quantity:</strong> Number of complete periodic cycles occurring per unit time. The SI coherent derived unit is the <strong>hertz (Hz)</strong>, defined as $1\\text{ s}^{-1}$.
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Unit Name</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Symbol</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Hertz (Hz)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Relationship</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Hertz (SI Derived)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">Hz</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ Hz}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$1\\text{ cycle/s}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Coherent SI Unit</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Kilohertz</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">kHz</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,000\\text{ Hz}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$10^3\\text{ Hz}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact SI prefix</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Megahertz</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">MHz</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,000,000\\text{ Hz}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$10^6\\text{ Hz}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact SI prefix</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Gigahertz</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">GHz</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1,000,000,000\\text{ Hz}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$10^9\\text{ Hz}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact SI prefix</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Revolutions per minute</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">rpm</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\approx 0.0166667\\text{ Hz}$</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">$1/60\\text{ s}^{-1}$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($1/60\\text{ Hz}$)</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>13. Plane Angle</h2>
<p>
  <strong>Physical Quantity:</strong> Rotational separation between two intersecting rays. The SI coherent derived unit is the dimensionless <strong>radian (rad)</strong>, defined as the ratio of subtended arc length to radius ($s / r$).
</p>
<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
  <table class="w-full text-left border-collapse text-sm">
    <thead>
      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Unit Name</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Symbol</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Radians (rad)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Equivalent in Degrees (°)</th>
        <th class="p-3.5 font-bold text-slate-900 dark:text-white">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Degree</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">° (deg)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\pi / 180 \\approx 0.0174533\\text{ rad}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0^\\circ$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($1/360\\text{ turn}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Radian (SI Derived)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">rad</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$1.0\\text{ rad}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$180 / \\pi \\approx 57.29578^\\circ$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Coherent SI Unit</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Gradian (Gon)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">grad (gon)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$\\pi / 200 \\approx 0.015708\\text{ rad}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$0.9^\\circ$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact ($1/400\\text{ turn}$)</td>
      </tr>
      <tr>
        <td class="p-3.5 text-slate-700 dark:text-slate-300">Revolution (Turn)</td>
        <td class="p-3.5 text-slate-700 dark:text-slate-300 font-mono">rev (tr)</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$2\\pi \\approx 6.283185\\text{ rad}$</td>
        <td class="p-3.5 font-mono text-slate-900 dark:text-white">$360.0^\\circ$</td>
        <td class="p-3.5 text-emerald-600 dark:text-emerald-400">Exact full circle</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Frequently Asked Questions</h2>
<div class="space-y-4 my-6">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
    <h3 class="font-bold text-base text-slate-900 dark:text-white mb-1">What is the difference between an exact conversion factor and an approximate one?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      An exact conversion factor is defined by international treaty or mathematical definition (such as $1\\text{ in} = 2.54\\text{ cm}$ or $1\\text{ lb} = 0.45359237\\text{ kg}$). It has infinite precision and never causes rounding errors. An approximate conversion factor involves repeating or non-terminating decimals (such as $1\\text{ m} \\approx 3.28084\\text{ ft}$) and must be rounded according to required precision.
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
    <h3 class="font-bold text-base text-slate-900 dark:text-white mb-1">Why is a British Imperial gallon different from a US liquid gallon?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      The United States adopted the English Queen Anne wine gallon of 1706 ($231\\text{ cubic inches} \\approx 3.78541\\text{ L}$). In 1824, the United Kingdom abolished historic wine, ale, and corn gallons and introduced the Imperial gallon, defined as the volume of 10 pounds of distilled water at $62^\\circ\\text{F}$ ($4.54609\\text{ L}$). As a result, an Imperial gallon is approximately 20.1% larger than a US liquid gallon.
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
    <h3 class="font-bold text-base text-slate-900 dark:text-white mb-1">Why can't I convert temperature using a simple multiplication factor?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      Unlike distance or mass where zero represents the complete absence of the physical quantity, temperature scales have arbitrary zero points. The Celsius freezing point ($0^\\circ\\text{C}$) corresponds to $32^\\circ\\text{F}$, not $0^\\circ\\text{F}$. Because the zero points do not align, conversions require both an additive offset ($+32$) and a scale multiplier ($9/5$ or $1.8$).
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
    <h3 class="font-bold text-base text-slate-900 dark:text-white mb-1">How do area and volume conversion factors differ from linear factors?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      Area measurements exist in two dimensions ($L^2$) and volume measurements exist in three dimensions ($L^3$). You must square the linear conversion factor when converting areas ($(1\\text{ m} = 100\\text{ cm}) \\implies 1\\text{ m}^2 = 10,000\\text{ cm}^2$) and cube it when converting volumes ($(1\\text{ m} = 100\\text{ cm}) \\implies 1\\text{ m}^3 = 1,000,000\\text{ cm}^3$). Applying linear factors directly produces errors of several orders of magnitude.
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
    <h3 class="font-bold text-base text-slate-900 dark:text-white mb-1">What is the distinction between mass and weight in engineering?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      Mass is a scalar measure of inertia and amount of matter, measured in kilograms (kg) or pounds-mass (lbm). Weight is a vector force exerted on that mass by gravity, measured in newtons (N) or pounds-force (lbf). While an object's mass remains identical everywhere in the universe, its weight varies directly with local gravitational acceleration.
    </p>
  </div>
</div>

<h2>Authoritative References and Measurement Standards</h2>
<ul class="text-xs text-slate-500 dark:text-slate-400 space-y-1 my-4">
  <li>Bureau International des Poids et Mesures (BIPM): <em>The International System of Units (SI Brochure, 9th Edition, 2019)</em>.</li>
  <li>National Institute of Standards and Technology (NIST): <em>Special Publication 811: Guide for the Use of the International System of Units (SI)</em>.</li>
  <li>International Organization for Standardization: <em>ISO 80000 Series (Quantities and units, Parts 1–14)</em>.</li>
  <li>IEEE/ASTM SI 10: <em>American National Standard for Metric Practice</em>.</li>
</ul>
`
};
