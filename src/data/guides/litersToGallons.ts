import { GuideItem } from "../guidesData";

export const litersToGallonsGuide: GuideItem = {
  slug: "liters-to-gallons",
  title: "Liters to Gallons: Formula, Examples and Conversion Table",
  seoTitle: "Liters to Gallons: Formula, Examples & Conversion Table",
  description: "Learn how to convert liters to US and Imperial gallons using the correct formulas, with worked examples, conversion tables and common mistakes.",
  publishedAt: "2026-10-23",
  updatedAt: "2026-10-23",
  category: "Measurement Fundamentals",
  readTimeMinutes: 11,
  relatedConverterSlugs: [
    "liter-to-gallon-us",
    "liter-to-gallon-uk",
    "gallon-us-to-liter",
    "gallon-uk-to-liter",
    "gallon-us-to-gallon-uk"
  ],
  content: `
<h2>1. Introduction: Converting Metric Liters to Gallons</h2>
<p>
  Converting liters to gallons is a standard requirement when calculating vehicle fuel capacities, comparing beverage packaging, sizing swimming pools, or following international engineering specifications.
</p>
<p>
  However, you cannot convert liters to "gallons" without first establishing which gallon is required. Two distinct units bear the name:
</p>
<ul class="list-disc pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li><strong>The US Liquid Gallon:</strong> The standard in the United States, equal to 3.785411784 liters.</li>
  <li><strong>The UK Imperial Gallon:</strong> The standard in the United Kingdom and across Commonwealth applications, equal to 4.54609 liters.</li>
</ul>
<p>
  Because the British Imperial gallon is roughly 20% larger than the American gallon, one liter yields a significantly different number depending on which standard you select.
</p>

<h2>2. Liters to US Gallons Formula</h2>
<p>
  To convert liters to US liquid gallons, divide the volume in liters by <strong>3.785411784</strong>, or multiply by its reciprocal <strong>0.264172052</strong>:
</p>
<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 my-4 text-center font-mono text-base font-bold">
  US Gallons = Liters ÷ 3.785411784
</div>
<p class="text-center font-mono text-sm text-slate-600 dark:text-slate-400">
  Alternatively: US Gallons = Liters × 0.264172
</p>

<h2>3. Liters to Imperial Gallons Formula</h2>
<p>
  To convert liters to British Imperial gallons, divide the volume in liters by <strong>4.54609</strong>, or multiply by <strong>0.219969248</strong>:
</p>
<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 my-4 text-center font-mono text-base font-bold">
  Imperial Gallons = Liters ÷ 4.54609
</div>
<p class="text-center font-mono text-sm text-slate-600 dark:text-slate-400">
  Alternatively: Imperial Gallons = Liters × 0.219969
</p>

<h2>4. Step-by-Step Worked Examples</h2>
<p>
  Below is the step-by-step calculation for standard liter amounts, showing both US and Imperial gallon outputs:
</p>

<div class="space-y-3 my-4">
  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm">
    <div class="font-bold text-slate-900 dark:text-white mb-1">1 Liter:</div>
    <div class="font-mono text-slate-700 dark:text-slate-300">US Gallons: 1 ÷ 3.78541 = <strong>0.2642 gal (US)</strong></div>
    <div class="font-mono text-slate-700 dark:text-slate-300">Imperial Gallons: 1 ÷ 4.54609 = <strong>0.2200 gal (UK)</strong></div>
  </div>

  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm">
    <div class="font-bold text-slate-900 dark:text-white mb-1">2 Liters:</div>
    <div class="font-mono text-slate-700 dark:text-slate-300">US Gallons: 2 ÷ 3.78541 = <strong>0.5283 gal (US)</strong></div>
    <div class="font-mono text-slate-700 dark:text-slate-300">Imperial Gallons: 2 ÷ 4.54609 = <strong>0.4399 gal (UK)</strong></div>
  </div>

  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm">
    <div class="font-bold text-slate-900 dark:text-white mb-1">5 Liters:</div>
    <div class="font-mono text-slate-700 dark:text-slate-300">US Gallons: 5 ÷ 3.78541 = <strong>1.3209 gal (US)</strong></div>
    <div class="font-mono text-slate-700 dark:text-slate-300">Imperial Gallons: 5 ÷ 4.54609 = <strong>1.0998 gal (UK)</strong></div>
  </div>

  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm">
    <div class="font-bold text-slate-900 dark:text-white mb-1">10 Liters:</div>
    <div class="font-mono text-slate-700 dark:text-slate-300">US Gallons: 10 ÷ 3.78541 = <strong>2.6417 gal (US)</strong></div>
    <div class="font-mono text-slate-700 dark:text-slate-300">Imperial Gallons: 10 ÷ 4.54609 = <strong>2.1997 gal (UK)</strong></div>
  </div>

  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm">
    <div class="font-bold text-slate-900 dark:text-white mb-1">20 Liters:</div>
    <div class="font-mono text-slate-700 dark:text-slate-300">US Gallons: 20 ÷ 3.78541 = <strong>5.2834 gal (US)</strong></div>
    <div class="font-mono text-slate-700 dark:text-slate-300">Imperial Gallons: 20 ÷ 4.54609 = <strong>4.3994 gal (UK)</strong></div>
  </div>

  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm">
    <div class="font-bold text-slate-900 dark:text-white mb-1">50 Liters (Standard Vehicle Fuel Tank):</div>
    <div class="font-mono text-slate-700 dark:text-slate-300">US Gallons: 50 ÷ 3.78541 = <strong>13.2086 gal (US)</strong></div>
    <div class="font-mono text-slate-700 dark:text-slate-300">Imperial Gallons: 50 ÷ 4.54609 = <strong>10.9985 gal (UK)</strong></div>
  </div>

  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm">
    <div class="font-bold text-slate-900 dark:text-white mb-1">100 Liters:</div>
    <div class="font-mono text-slate-700 dark:text-slate-300">US Gallons: 100 ÷ 3.78541 = <strong>26.4172 gal (US)</strong></div>
    <div class="font-mono text-slate-700 dark:text-slate-300">Imperial Gallons: 100 ÷ 4.54609 = <strong>21.9969 gal (UK)</strong></div>
  </div>
</div>

<h2>5. Separate Conversion Tables</h2>
<p>
  Always consult the table corresponding to your geographical and technical context:
</p>

<h3>Table A: Liters to US Liquid Gallons</h3>
<div class="overflow-x-auto my-4">
  <table class="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-sm">
    <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold">
      <tr>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Liters (L)</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">US Gallons (gal US)</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">US Quarts (qt)</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">US Pints (pt)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700 font-mono text-slate-700 dark:text-slate-300">
      <tr>
        <td class="p-3 font-sans font-medium">1 L</td>
        <td class="p-3">0.264 gal</td>
        <td class="p-3">1.057 qt</td>
        <td class="p-3">2.113 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">2 L</td>
        <td class="p-3">0.528 gal</td>
        <td class="p-3">2.113 qt</td>
        <td class="p-3">4.227 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">3 L</td>
        <td class="p-3">0.793 gal</td>
        <td class="p-3">3.170 qt</td>
        <td class="p-3">6.340 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">5 L</td>
        <td class="p-3">1.321 gal</td>
        <td class="p-3">5.283 qt</td>
        <td class="p-3">10.567 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">10 L</td>
        <td class="p-3">2.642 gal</td>
        <td class="p-3">10.567 qt</td>
        <td class="p-3">21.134 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">20 L</td>
        <td class="p-3">5.283 gal</td>
        <td class="p-3">21.134 qt</td>
        <td class="p-3">42.268 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">40 L</td>
        <td class="p-3">10.567 gal</td>
        <td class="p-3">42.268 qt</td>
        <td class="p-3">84.535 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">60 L</td>
        <td class="p-3">15.850 gal</td>
        <td class="p-3">63.401 qt</td>
        <td class="p-3">126.803 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">100 L</td>
        <td class="p-3">26.417 gal</td>
        <td class="p-3">105.669 qt</td>
        <td class="p-3">211.338 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">1,000 L</td>
        <td class="p-3">264.172 gal</td>
        <td class="p-3">1,056.688 qt</td>
        <td class="p-3">2,113.376 pt</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Table B: Liters to UK Imperial Gallons</h3>
<div class="overflow-x-auto my-4">
  <table class="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-sm">
    <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold">
      <tr>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Liters (L)</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Imperial Gallons (gal UK)</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Imperial Quarts (qt)</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Imperial Pints (pt)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700 font-mono text-slate-700 dark:text-slate-300">
      <tr>
        <td class="p-3 font-sans font-medium">1 L</td>
        <td class="p-3">0.220 gal</td>
        <td class="p-3">0.880 qt</td>
        <td class="p-3">1.760 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">2 L</td>
        <td class="p-3">0.440 gal</td>
        <td class="p-3">1.760 qt</td>
        <td class="p-3">3.519 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">5 L</td>
        <td class="p-3">1.100 gal</td>
        <td class="p-3">4.399 qt</td>
        <td class="p-3">8.799 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">10 L</td>
        <td class="p-3">2.200 gal</td>
        <td class="p-3">8.799 qt</td>
        <td class="p-3">17.598 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">20 L</td>
        <td class="p-3">4.399 gal</td>
        <td class="p-3">17.598 qt</td>
        <td class="p-3">35.195 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">50 L</td>
        <td class="p-3">10.998 gal</td>
        <td class="p-3">43.994 qt</td>
        <td class="p-3">87.988 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">100 L</td>
        <td class="p-3">21.997 gal</td>
        <td class="p-3">87.988 qt</td>
        <td class="p-3">175.975 pt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">1,000 L</td>
        <td class="p-3">219.969 gal</td>
        <td class="p-3">879.877 qt</td>
        <td class="p-3">1,759.754 pt</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>6. Reverse Conversion: Gallons to Liters</h2>
<p>
  To reverse the calculation and determine liters from gallons:
</p>
<ul class="list-disc pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li><strong>From US Gallons:</strong> Liters = US Gallons × 3.785411784</li>
  <li><strong>From Imperial Gallons:</strong> Liters = Imperial Gallons × 4.54609</li>
</ul>

<h2>7. Decimal Values and Practical Sizing</h2>
<p>
  Common retail and technical values often include decimal portions of a liter:
</p>
<ul class="list-disc pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li><strong>0.75 L (Standard Wine Bottle):</strong> $0.75 ÷ 3.78541 = 0.1981\text{ US gal}$ ($0.1650\text{ Imp gal}$)</li>
  <li><strong>1.5 L (Magnum Bottle):</strong> $1.5 ÷ 3.78541 = 0.3963\text{ US gal}$ ($0.3299\text{ Imp gal}$)</li>
  <li><strong>3.785 L:</strong> Exactly $1.0000\text{ US gallon}$</li>
  <li><strong>4.546 L:</strong> Exactly $1.0000\text{ Imperial gallon}$</li>
  <li><strong>65.5 L (Full SUV Fuel Tank):</strong> $65.5 ÷ 3.78541 = 17.303\text{ US gal}$ ($14.408\text{ Imp gal}$)</li>
</ul>

<h2>8. Common Conversion Pitfalls</h2>
<ol class="list-decimal pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li><strong>Failing to Identify the Gallon Type:</strong> Converting liters to gallons without knowing whether the client or specification expects US or Imperial measurements leads to an immediate 20% calculation error.</li>
  <li><strong>Using an Approximate Multiplier as Exact:</strong> Multiplying by 0.264 instead of 0.264172052 introduces errors when scaling up to bulk commercial deliveries.</li>
  <li><strong>Confusing Liquid Gallons with Dry Gallons:</strong> In the US agricultural sector, dry gallons equal 4.40488 liters. For water, milk, beverages, or fuel, always use the liquid gallon standard (3.78541 L).</li>
  <li><strong>Rounding Discrepancies in Fuel Economy:</strong> A car consuming 6.0 L/100 km delivers 39.2 MPG in the United States, but 47.1 MPG in the United Kingdom due to the larger Imperial gallon.</li>
</ol>

<h2>9. Quick Reference Conversion Factors</h2>
<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 my-4 text-slate-800 dark:text-slate-200">
  <p class="font-bold text-base mb-2">Formulas at a Glance:</p>
  <ul class="space-y-1 font-mono text-sm">
    <li>US Gallons = Liters ÷ 3.785411784</li>
    <li>Imperial Gallons = Liters ÷ 4.54609</li>
    <li>1 Liter ≈ 0.264172 US Gallons</li>
    <li>1 Liter ≈ 0.219969 Imperial Gallons</li>
  </ul>
</div>

<h2>10. Frequently Asked Questions</h2>
<div class="space-y-6 my-6">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">How many US gallons are in one liter?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      One liter equals approximately 0.264172 US liquid gallons (about 0.264 gallons, or roughly one-quarter of a gallon).
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">How many Imperial gallons are in one liter?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      One liter equals approximately 0.219969 UK Imperial gallons (about 0.220 gallons).
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">How many gallons is a 50-liter car fuel tank?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      A 50-liter fuel tank holds approximately 13.21 US liquid gallons, or 11.00 British Imperial gallons.
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">How many gallons is 1,000 liters?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      One thousand liters (1 cubic meter) equals approximately 264.17 US liquid gallons, or 219.97 Imperial gallons.
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Why are there two different gallon conversions?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      The United States preserved the 1707 English Queen Anne wine gallon (231 cubic inches / 3.785 L), while Britain updated its system in 1824 to the Imperial gallon (10 lbs of water / 4.546 L).
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">How do I convert liters to gallons mentally?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      For US gallons, divide liters by 4 and add about 5% (since 1/3.785 is roughly 0.264). For Imperial gallons, divide liters by 4.5.
    </p>
  </div>
</div>

<h2>Related Converters & Guides</h2>
<ul class="list-disc pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li><a href="/liter-to-gallon-us" class="text-blue-600 dark:text-blue-400 font-medium underline">Liter to Gallon (US) Converter</a></li>
  <li><a href="/liter-to-gallon-uk" class="text-blue-600 dark:text-blue-400 font-medium underline">Liter to Gallon (UK) Converter</a></li>
  <li><a href="/guides/gallons-to-liters" class="text-blue-600 dark:text-blue-400 font-medium underline">Gallons to Liters: Formula, Examples & Conversion Table</a></li>
  <li><a href="/guides/us-gallons-vs-imperial-gallons" class="text-blue-600 dark:text-blue-400 font-medium underline">US Gallons vs Imperial Gallons: What's the Difference?</a></li>
  <li><a href="/guides/volume-conversion" class="text-blue-600 dark:text-blue-400 font-medium underline">Volume Conversion: Complete Guide to Volume Units</a></li>
</ul>
`
};
