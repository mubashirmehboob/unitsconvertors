import { GuideItem } from "../guidesData";

export const gallonsToLitersGuide: GuideItem = {
  slug: "gallons-to-liters",
  title: "Gallons to Liters: Formula, Examples and Conversion Table",
  seoTitle: "Gallons to Liters: Formula, Examples & Conversion Table",
  description: "Learn how to convert gallons to liters with exact conversion factors for US and Imperial gallons, formulas, examples and conversion tables.",
  publishedAt: "2026-10-23",
  updatedAt: "2026-10-23",
  category: "Measurement Fundamentals",
  readTimeMinutes: 11,
  relatedConverterSlugs: [
    "gallon-us-to-liter",
    "gallon-uk-to-liter",
    "liter-to-gallon-us",
    "liter-to-gallon-uk",
    "gallon-us-to-gallon-uk"
  ],
  content: `
<h2>1. Introduction: Why the Word "Gallon" Requires Clarification</h2>
<p>
  When converting gallons to liters, the most critical step is answering a preliminary question: <strong>which gallon are you converting?</strong>
</p>
<p>
  There is no single universal "gallon." The United States and the United Kingdom use two legally distinct units that share the same name but represent substantially different physical capacities:
</p>
<ul class="list-disc pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li><strong>The US Liquid Gallon:</strong> Legally defined as exactly 231 cubic inches, equal to <strong>3.785411784 liters</strong>.</li>
  <li><strong>The British Imperial Gallon:</strong> Legally defined by UK statute as exactly <strong>4.54609 liters</strong>.</li>
</ul>
<p>
  An Imperial gallon holds approximately 20.095% more liquid than a US liquid gallon. Using a US gallon factor when converting a British or Canadian measurement introduces a substantial error of nearly 0.76 liters per gallon.
</p>

<h2>2. US Gallon to Liter Conversion Formula</h2>
<p>
  To convert US liquid gallons to liters, multiply the number of gallons by the exact international constant <strong>3.785411784</strong>:
</p>
<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 my-4 text-center font-mono text-base font-bold">
  Liters = US Gallons × 3.785411784
</div>
<p>
  For quick day-to-day calculations, multiplying by <strong>3.785</strong> provides sufficient precision with less than 0.01% error.
</p>

<h2>3. Imperial Gallon to Liter Conversion Formula</h2>
<p>
  To convert British Imperial gallons (used in the United Kingdom, Ireland, and throughout Commonwealth agricultural contexts) to liters, multiply by the exact statutory constant <strong>4.54609</strong>:
</p>
<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 my-4 text-center font-mono text-base font-bold">
  Liters = Imperial Gallons × 4.54609
</div>
<p>
  For rapid estimations in the field, multiplying by <strong>4.546</strong> gives reliable accuracy.
</p>

<h2>4. Step-by-Step Worked Examples</h2>

<h3>US Liquid Gallon Examples</h3>
<div class="space-y-3 my-4">
  <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-mono text-slate-700 dark:text-slate-300">
    <strong>1 US Gallon:</strong> 1 × 3.785411784 = <strong>3.7854 liters</strong>
  </div>
  <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-mono text-slate-700 dark:text-slate-300">
    <strong>2 US Gallons:</strong> 2 × 3.785411784 = <strong>7.5708 liters</strong>
  </div>
  <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-mono text-slate-700 dark:text-slate-300">
    <strong>5 US Gallons:</strong> 5 × 3.785411784 = <strong>18.9271 liters</strong> (standard commercial paint pail)
  </div>
  <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-mono text-slate-700 dark:text-slate-300">
    <strong>10 US Gallons:</strong> 10 × 3.785411784 = <strong>37.8541 liters</strong>
  </div>
  <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-mono text-slate-700 dark:text-slate-300">
    <strong>20 US Gallons:</strong> 20 × 3.785411784 = <strong>75.7082 liters</strong> (vehicle fuel tank)
  </div>
  <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-mono text-slate-700 dark:text-slate-300">
    <strong>50 US Gallons:</strong> 50 × 3.785411784 = <strong>189.2706 liters</strong>
  </div>
</div>

<h3>Imperial Gallon Examples</h3>
<div class="space-y-3 my-4">
  <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-mono text-slate-700 dark:text-slate-300">
    <strong>1 Imperial Gallon:</strong> 1 × 4.54609 = <strong>4.5461 liters</strong>
  </div>
  <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-mono text-slate-700 dark:text-slate-300">
    <strong>2 Imperial Gallons:</strong> 2 × 4.54609 = <strong>9.0922 liters</strong>
  </div>
  <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-mono text-slate-700 dark:text-slate-300">
    <strong>5 Imperial Gallons:</strong> 5 × 4.54609 = <strong>22.7305 liters</strong>
  </div>
  <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-mono text-slate-700 dark:text-slate-300">
    <strong>10 Imperial Gallons:</strong> 10 × 4.54609 = <strong>45.4609 liters</strong>
  </div>
</div>

<h2>5. Conversion Tables</h2>
<p>
  Because combining US and Imperial gallons into a single ambiguous column leads to costly errors, the reference tables below are presented separately.
</p>

<h3>Table A: US Liquid Gallons to Liters</h3>
<div class="overflow-x-auto my-4">
  <table class="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-sm">
    <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold">
      <tr>
        <th class="p-3 border border-slate-200 dark:border-slate-700">US Gallons (gal US)</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Liters (L)</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Milliliters (mL)</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Common Application</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700 font-mono text-slate-700 dark:text-slate-300">
      <tr>
        <td class="p-3 font-sans font-medium">1 gal</td>
        <td class="p-3">3.785 L</td>
        <td class="p-3">3,785.4 mL</td>
        <td class="p-3 font-sans">Standard milk jug / paint can</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">2 gal</td>
        <td class="p-3">7.571 L</td>
        <td class="p-3">7,570.8 mL</td>
        <td class="p-3 font-sans">Garden watering can</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">3 gal</td>
        <td class="p-3">11.356 L</td>
        <td class="p-3">11,356.2 mL</td>
        <td class="p-3 font-sans">Small office water bottle</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">5 gal</td>
        <td class="p-3">18.927 L</td>
        <td class="p-3">18,927.1 mL</td>
        <td class="p-3 font-sans">Standard office water cooler jug</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">10 gal</td>
        <td class="p-3">37.854 L</td>
        <td class="p-3">37,854.1 mL</td>
        <td class="p-3 font-sans">Compact car fuel tank</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">15 gal</td>
        <td class="p-3">56.781 L</td>
        <td class="p-3">56,781.2 mL</td>
        <td class="p-3 font-sans">Midsize sedan fuel tank</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">20 gal</td>
        <td class="p-3">75.708 L</td>
        <td class="p-3">75,708.2 mL</td>
        <td class="p-3 font-sans">Pickup truck fuel tank</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">55 gal</td>
        <td class="p-3">208.198 L</td>
        <td class="p-3">208,197.6 mL</td>
        <td class="p-3 font-sans">Standard industrial steel chemical drum</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">100 gal</td>
        <td class="p-3">378.541 L</td>
        <td class="p-3">378,541.2 mL</td>
        <td class="p-3 font-sans">Livestock stock water trough</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Table B: UK Imperial Gallons to Liters</h3>
<div class="overflow-x-auto my-4">
  <table class="w-full text-left border-collapse border border-slate-200 dark:border-slate-700 text-sm">
    <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold">
      <tr>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Imperial Gallons (gal UK)</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Liters (L)</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Equivalent in US Gallons</th>
        <th class="p-3 border border-slate-200 dark:border-slate-700">Common Application</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 dark:divide-slate-700 font-mono text-slate-700 dark:text-slate-300">
      <tr>
        <td class="p-3 font-sans font-medium">1 gal</td>
        <td class="p-3">4.546 L</td>
        <td class="p-3">1.201 US gal</td>
        <td class="p-3 font-sans">British fuel economy benchmark</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">2 gal</td>
        <td class="p-3">9.092 L</td>
        <td class="p-3">2.402 US gal</td>
        <td class="p-3 font-sans">UK garden bucket</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">5 gal</td>
        <td class="p-3">22.730 L</td>
        <td class="p-3">6.005 US gal</td>
        <td class="p-3 font-sans">Agricultural pesticide tank</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">10 gal</td>
        <td class="p-3">45.461 L</td>
        <td class="p-3">12.009 US gal</td>
        <td class="p-3 font-sans">UK home heating oil portable drum</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">20 gal</td>
        <td class="p-3">90.922 L</td>
        <td class="p-3">24.019 US gal</td>
        <td class="p-3 font-sans">Domestic hot water cylinder</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">50 gal</td>
        <td class="p-3">227.305 L</td>
        <td class="p-3">60.047 US gal</td>
        <td class="p-3 font-sans">Rainwater butt</td>
      </tr>
      <tr>
        <td class="p-3 font-sans font-medium">100 gal</td>
        <td class="p-3">454.609 L</td>
        <td class="p-3">120.095 US gal</td>
        <td class="p-3 font-sans">Farm slurry mixing tank</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>6. Reverse Conversion: Liters to Gallons</h2>
<p>
  To convert from liters back to gallons, divide by the respective conversion constant:
</p>
<ul class="list-disc pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li><strong>To US Gallons:</strong> US Gallons = Liters ÷ 3.785411784 (or Liters × 0.264172)</li>
  <li><strong>To Imperial Gallons:</strong> Imperial Gallons = Liters ÷ 4.54609 (or Liters × 0.219969)</li>
</ul>
<p>
  For example, 20 liters converted to US gallons equals $20 ÷ 3.78541 = 5.283\text{ US gallons}$. The same 20 liters converted to Imperial gallons equals $20 ÷ 4.54609 = 4.400\text{ Imperial gallons}$.
</p>

<h2>7. Decimal Gallons</h2>
<p>
  Calculations frequently produce fractional or decimal gallons:
</p>
<ul class="list-disc pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li><strong>1.5 US Gallons:</strong> $1.5 \times 3.785411784 = 5.6781\text{ L}$</li>
  <li><strong>2.75 US Gallons:</strong> $2.75 \times 3.785411784 = 10.4099\text{ L}$</li>
  <li><strong>5.5 Imperial Gallons:</strong> $5.5 \times 4.54609 = 25.0035\text{ L}$</li>
</ul>

<h2>8. Common Mistakes When Converting Gallons</h2>
<ol class="list-decimal pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li><strong>Treating Gallons as a Single Unit:</strong> Multiplying an Imperial gallon quantity by 3.785 produces a 20% underestimate of the real volume.</li>
  <li><strong>Using 3.785 in High-Precision Sizing:</strong> In a 10,000-gallon municipal tank, using 3.785 instead of 3.785411784 causes an error of more than 4.1 liters.</li>
  <li><strong>Rounding Prematurely:</strong> Multiplying by a rounded factor and then rounding the result repeatedly compounds mathematical discrepancies.</li>
  <li><strong>Confusing Liquid Gallons with US Dry Gallons:</strong> The US dry gallon (4.40488 liters) is used strictly for dry agricultural produce (such as grain and berries) and must not be used for liquids.</li>
</ol>

<h2>9. Quick Reference Summary</h2>
<div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 my-4 text-slate-800 dark:text-slate-200">
  <p class="font-bold text-base mb-2">Essential Conversion Factors:</p>
  <ul class="space-y-1 text-sm font-mono">
    <li>1 US Gallon = 3.785411784 Liters (Exact)</li>
    <li>1 Imperial Gallon = 4.54609 Liters (Exact)</li>
    <li>1 Imperial Gallon ≈ 1.20095 US Gallons</li>
    <li>1 US Gallon ≈ 0.83267 Imperial Gallons</li>
  </ul>
</div>

<h2>10. Frequently Asked Questions</h2>
<div class="space-y-6 my-6">
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">How many liters are in 1 US gallon?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      One US liquid gallon contains exactly 3.785411784 liters (commonly rounded to 3.785 L for everyday commercial fuel and grocery use).
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">How many liters are in 1 UK Imperial gallon?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      One British Imperial gallon contains exactly 4.54609 liters. It is approximately 20.095% larger than a US liquid gallon.
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">Which gallon does Canada use?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      Canada officially adopted the metric system (liters) for all fuel and retail sales in the 1970s and 1980s. When older Canadian equipment or building plans mention gallons, they refer to the British Imperial gallon (4.54609 L), not the US gallon.
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">How many liters are in a 5-gallon water bottle?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      A standard 5-gallon office cooler water jug in the US contains 5 × 3.78541 = 18.927 liters (often labeled as 18.9 L).
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">How do I convert liters to gallons?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      To convert liters to US gallons, divide the liters by 3.78541 (or multiply by 0.264172). To convert liters to Imperial gallons, divide by 4.54609 (or multiply by 0.219969).
    </p>
  </div>
  <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
    <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">How much does 1 gallon of water weigh in kilograms?</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      Because 1 liter of water weighs approximately 1 kilogram, 1 US gallon of water weighs approximately 3.785 kg (8.34 pounds). One Imperial gallon of water weighs exactly 10 pounds (4.546 kg).
    </p>
  </div>
</div>

<h2>Related Converters & Guides</h2>
<ul class="list-disc pl-6 space-y-2 my-4 text-slate-700 dark:text-slate-300">
  <li><a href="/gallon-us-to-liter" class="text-blue-600 dark:text-blue-400 font-medium underline">Gallon (US) to Liter Converter</a></li>
  <li><a href="/gallon-uk-to-liter" class="text-blue-600 dark:text-blue-400 font-medium underline">Gallon (UK) to Liter Converter</a></li>
  <li><a href="/guides/liters-to-gallons" class="text-blue-600 dark:text-blue-400 font-medium underline">Liters to Gallons: Formula, Examples & Conversion Table</a></li>
  <li><a href="/guides/us-gallons-vs-imperial-gallons" class="text-blue-600 dark:text-blue-400 font-medium underline">US Gallons vs Imperial Gallons: What's the Difference?</a></li>
  <li><a href="/guides/volume-conversion" class="text-blue-600 dark:text-blue-400 font-medium underline">Volume Conversion: Complete Guide to Volume Units</a></li>
</ul>
`
};
