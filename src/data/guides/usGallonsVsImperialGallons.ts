import { GuideItem } from "../guidesData";

export const usGallonsVsImperialGallonsGuide: GuideItem = {
  slug: "us-gallons-vs-imperial-gallons",
  title: "US Gallons vs Imperial Gallons: What's the Difference?",
  seoTitle: "US Gallons vs Imperial Gallons: What's the Difference?",
  description: "Learn the difference between US and Imperial gallons, including exact sizes, liter conversions, formulas, examples and when each gallon is used.",
  publishedAt: "2026-10-23",
  updatedAt: "2026-10-23",
  category: "Measurement Fundamentals",
  readTimeMinutes: 11,
  relatedConverterSlugs: [
    "gallon-us-to-gallon-uk",
    "gallon-uk-to-gallon-us",
    "gallon-us-to-liter",
    "gallon-uk-to-liter",
    "liter-to-gallon-us"
  ],
  content: `
<h2>1. Introduction: Why Two Different Gallons Exist</h2>
<p>
  When someone speaks of a "gallon," the exact physical volume depends entirely on the country of reference. The United States uses the <strong>US Customary liquid gallon</strong>, while the United Kingdom and several historical Commonwealth jurisdictions use the <strong>British Imperial gallon</strong>.
</p>
<p>
  Both units are called gallons, but they represent two distinct physical capacities:
</p>
<ul class="list-disc pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li>The <strong>Imperial gallon</strong> is larger: it holds <strong>4.54609 liters</strong>.</li>
  <li>The <strong>US liquid gallon</strong> is smaller: it holds <strong>3.785411784 liters</strong>.</li>
</ul>
<p>
  Failing to recognize this difference leads to significant discrepancies in vehicle fuel efficiency comparisons, chemical dosing, aviation fuel calculations, and culinary recipes.
</p>

<h2>2. The US Liquid Gallon Defined</h2>
<p>
  The US liquid gallon (symbol: <strong>gal</strong>, or <strong>US gal</strong>) is legally defined as:
</p>
<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 my-4 text-center font-mono text-base font-bold">
  1 US Liquid Gallon = 231 cubic inches = 3.785411784 Liters (exact)
</div>
<p>
  Under United States customary measurements, the US liquid gallon is divided into:
</p>
<ul class="list-disc pl-6 space-y-1 my-3 text-slate-700 dark:text-slate-300">
  <li>4 US liquid quarts (0.946353 L each)</li>
  <li>8 US liquid pints (0.473176 L each)</li>
  <li>16 US customary cups (236.588 mL each)</li>
  <li>128 US fluid ounces (29.57353 mL each)</li>
</ul>

<h2>3. The British Imperial Gallon Defined</h2>
<p>
  The British Imperial gallon (symbol: <strong>gal</strong>, <strong>imp gal</strong>, or <strong>gal (UK)</strong>) is defined by statutory UK law as:
</p>
<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 my-4 text-center font-mono text-base font-bold">
  1 Imperial Gallon = 4.54609 Liters (exact)
</div>
<p>
  In the Imperial measurement system, the gallon is divided into:
</p>
<ul class="list-disc pl-6 space-y-1 my-3 text-slate-700 dark:text-slate-300">
  <li>4 Imperial quarts (1.136523 L each)</li>
  <li>8 Imperial pints (0.568261 L each)</li>
  <li>160 Imperial fluid ounces (28.41306 mL each)</li>
</ul>

<h2>4. Direct Comparison and Percentage Difference</h2>
<p>
  Comparing the two definitions directly demonstrates the scale difference:
</p>
<div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 my-4 text-slate-800 dark:text-slate-200 font-mono text-center text-sm sm:text-base">
  1 Imperial Gallon ≈ 1.20095 US Liquid Gallons<br />
  1 US Liquid Gallon ≈ 0.832674 Imperial Gallons
</div>
<p>
  Calculating the percentage difference:
</p>
<div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 my-2 font-mono text-center text-sm">
  ((4.54609 - 3.785412) ÷ 3.785412) × 100% ≈ +20.095%
</div>
<p>
  An Imperial gallon is approximately <strong>20.095% larger</strong> (roughly one-fifth larger) than a US liquid gallon. Conversely, a US liquid gallon is approximately <strong>16.733% smaller</strong> than an Imperial gallon.
</p>

<h2>5. Side-by-Side Comparison Table</h2>
<p>
  The table below compares the physical attributes and subdivisions of both systems:
</p>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-sm">
    <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold">
      <tr>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Property / Subunit</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">US Liquid Gallon</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">British Imperial Gallon</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Relative Ratio</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700 font-mono text-slate-700 dark:text-slate-300">
      <tr>
        <td class="p-3 font-sans font-medium">Exact Liters</td>
        <td class="p-3">3.785411784 L</td>
        <td class="p-3">4.54609 L</td>
        <td class="p-3 font-sans">Imperial is +20.095% larger</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">Cubic Centimeters (cm³)</td>
        <td class="p-3">3,785.412 cm³</td>
        <td class="p-3">4,546.090 cm³</td>
        <td class="p-3 font-sans">Imperial has +760.68 cm³ more volume</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">Cubic Meters (m³)</td>
        <td class="p-3">0.0037854 m³</td>
        <td class="p-3">0.0045461 m³</td>
        <td class="p-3 font-sans">1 m³ = 264.17 US gal vs 219.97 Imp gal</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">Cubic Inches (in³)</td>
        <td class="p-3">231.000 in³ (exact)</td>
        <td class="p-3">277.419 in³ (approx.)</td>
        <td class="p-3 font-sans">Imperial is 46.42 in³ larger</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">Fluid Ounces per Gallon</td>
        <td class="p-3">128 US fl oz</td>
        <td class="p-3">160 Imp fl oz</td>
        <td class="p-3 font-sans">Imperial gallon has 32 more ounces</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">Size of 1 Fluid Ounce</td>
        <td class="p-3">29.5735 mL</td>
        <td class="p-3">28.4131 mL</td>
        <td class="p-3 font-sans">US fl oz is ~4.08% larger than Imp fl oz</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">Quarts per Gallon</td>
        <td class="p-3">4 US quarts (0.946 L each)</td>
        <td class="p-3">4 Imp quarts (1.137 L each)</td>
        <td class="p-3 font-sans">Imperial quart is ~20% larger</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">Pints per Gallon</td>
        <td class="p-3">8 US pints (473.18 mL each)</td>
        <td class="p-3">8 Imp pints (568.26 mL each)</td>
        <td class="p-3 font-sans">Imperial pint is ~20% larger</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">Weight of Water at 62°F</td>
        <td class="p-3 font-sans">Approx. 8.33 pounds</td>
        <td class="p-3 font-sans">Exactly 10.00 pounds</td>
        <td class="p-3 font-sans">Imperial gallon was defined by 10 lb water</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>6. Why Are They Different?</h2>
<p>
  The divergence originates in British legal history:
</p>
<ul class="list-disc pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li>In 1707, England passed the Queen Anne wine gallon law, fixing the wine gallon at 231 cubic inches. The American colonies adopted this definition for liquid goods and retained it after declaring independence.</li>
  <li>In 1824, the British Parliament enacted the Weights and Measures Act, which abolished Queen Anne's wine gallon, along with historical ale and corn gallons. Britain created a single unified Imperial gallon defined as the volume of 10 pounds of distilled water at 62°F (equaling approximately 277.42 cubic inches or 4.54609 liters).</li>
</ul>
<p>
  Because the United States chose not to adopt the British 1824 reform, the two legal definitions permanently diverged.
</p>

<h2>7. Practical Example: The "10 Gallons" Ambiguity</h2>
<p>
  Consider what happens when a customer orders a "10-gallon" water tank:
</p>
<div class="space-y-3 my-4">
  <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm">
    <div class="font-bold text-slate-900 dark:text-white mb-1">If manufactured in the United States (US Liquid):</div>
    <div class="font-mono text-slate-700 dark:text-slate-300">10 × 3.785412 = <strong>37.85 liters</strong></div>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm">
    <div class="font-bold text-slate-900 dark:text-white mb-1">If manufactured in the United Kingdom (Imperial):</div>
    <div class="font-mono text-slate-700 dark:text-slate-300">10 × 4.54609 = <strong>45.46 liters</strong></div>
  </div>
</div>
<p>
  The Imperial container holds <strong>7.61 more liters</strong> of liquid than the US container—a difference of over 20%. In industrial chemical blending or vehicle cooling systems, this misunderstanding can lead to under-dosing or tank overflow.
</p>

<h2>8. Conversion Formulas</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
    <h3 class="font-bold text-slate-900 dark:text-white mb-2">Converting to / from Liters</h3>
    <ul class="space-y-1.5 text-sm font-mono text-slate-700 dark:text-slate-300">
      <li>Liters = US gal × 3.785412</li>
      <li>US gal = Liters ÷ 3.785412</li>
      <li>Liters = Imp gal × 4.54609</li>
      <li>Imp gal = Liters ÷ 4.54609</li>
    </ul>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
    <h3 class="font-bold text-slate-900 dark:text-white mb-2">Direct Between Gallons</h3>
    <ul class="space-y-1.5 text-sm font-mono text-slate-700 dark:text-slate-300">
      <li>US gal = Imp gal × 1.20095</li>
      <li>Imp gal = US gal ÷ 1.20095</li>
      <li>Imp gal = US gal × 0.832674</li>
      <li>US gal = Imp gal ÷ 0.832674</li>
    </ul>
  </div>
</div>

<h2>9. Common Mistakes to Avoid</h2>
<ol class="list-decimal pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li><strong>Treating Gallons as a Single Universal Unit:</strong> Assuming all English-speaking countries use the same gallon causes immediate 20% calculation errors.</li>
  <li><strong>Confusing Fluid Ounces:</strong> While an Imperial gallon is larger than a US gallon, an <em>Imperial fluid ounce (28.41 mL) is actually smaller</em> than a <em>US fluid ounce (29.57 mL)</em> because the Imperial gallon is divided into 160 ounces instead of 128.</li>
  <li><strong>Assuming Fuel Economy Figures Mean the Same Thing:</strong> A car achieving 40 MPG in the United Kingdom achieves only about 33.3 MPG in the United States, even though the engine performs identically.</li>
  <li><strong>Using US Dry Gallons for Liquid Calculations:</strong> The US dry gallon (4.40488 L) is an agricultural measure for grain and apples; it must not be confused with liquid gallons.</li>
</ol>

<h2>10. Quick Reference Summary</h2>
<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 my-4 text-slate-800 dark:text-slate-200">
  <p class="font-bold text-base mb-2">Key Takeaways:</p>
  <ul class="space-y-1 font-mono text-sm">
    <li>1 US Liquid Gallon = 3.785411784 L (231 in³)</li>
    <li>1 UK Imperial Gallon = 4.54609 L (277.42 in³)</li>
    <li>Imperial Gallon = 1.20095 US Gallons (+20.095%)</li>
    <li>US Gallon = 0.832674 Imperial Gallons (-16.733%)</li>
  </ul>
</div>

<h2>11. Frequently Asked Questions</h2>
<div class="space-y-6 my-6">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Which gallon is larger, US or Imperial?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      The British Imperial gallon is larger. It holds exactly 4.54609 liters, whereas the US liquid gallon holds 3.785412 liters. The Imperial gallon is approximately 20.095% larger.
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Why did the US and Britain develop different gallons?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      The US adopted the 1707 English Queen Anne wine gallon (231 cubic inches). In 1824, the British Parliament enacted a reform that established the Imperial gallon based on the volume of 10 pounds of water (277.42 cubic inches). The United States did not adopt the British reform.
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">How do I convert US gallons to Imperial gallons?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      Multiply the US gallon figure by 0.832674 (or divide by 1.20095). For example, 10 US gallons equals approximately 8.33 Imperial gallons.
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">How do I convert Imperial gallons to US gallons?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      Multiply the Imperial gallon figure by 1.20095 (or divide by 0.832674). For example, 10 Imperial gallons equals approximately 12.01 US gallons.
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Why is an Imperial fluid ounce smaller if the gallon is bigger?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      An Imperial gallon is divided into 160 fluid ounces, whereas a US gallon is divided into only 128 fluid ounces. Because the Imperial gallon is split into 32 more parts, each individual Imperial fluid ounce (28.41 mL) is slightly smaller than a US fluid ounce (29.57 mL).
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Does the UK still sell petrol in gallons?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      No. Under UK trade law, road vehicle fuel has been sold exclusively in liters at petrol stations since 1995. However, vehicle fuel efficiency is still officially quoted in miles per Imperial gallon (MPG).
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">What is the difference between a US pint and a UK pint?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      A British Imperial pint holds 20 Imperial fluid ounces (568.26 mL), while an American liquid pint holds 16 US fluid ounces (473.18 mL). A British pint of draught beer is approximately 20% larger than an American pint.
    </p>
  </div>
</div>

<h2>Related Converters & Guides</h2>
<ul class="list-disc pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li><a href="/gallon-us-to-gallon-uk" class="text-blue-600 dark:text-blue-400 font-medium underline">Gallon (US) to Gallon (UK) Converter</a></li>
  <li><a href="/gallon-uk-to-gallon-us" class="text-blue-600 dark:text-blue-400 font-medium underline">Gallon (UK) to Gallon (US) Converter</a></li>
  <li><a href="/guides/gallons-to-liters" class="text-blue-600 dark:text-blue-400 font-medium underline">Gallons to Liters: Formula, Examples & Conversion Table</a></li>
  <li><a href="/guides/liters-to-gallons" class="text-blue-600 dark:text-blue-400 font-medium underline">Liters to Gallons: Formula, Examples & Conversion Table</a></li>
  <li><a href="/guides/volume-conversion" class="text-blue-600 dark:text-blue-400 font-medium underline">Volume Conversion: Complete Guide to Volume Units</a></li>
</ul>
`
};
