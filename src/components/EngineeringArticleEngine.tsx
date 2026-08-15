import React, { useState } from "react";
import { 
  BookOpen, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle, 
  Zap, Layers, ArrowRight, ExternalLink, ChevronDown, ChevronUp,
  Calculator, Info, FileText, Scale, Lightbulb, Compass, Award
} from "lucide-react";
import { EngineeringArticleData } from "../data/engineeringArticlesEngine";
import MathFormula from "./MathFormula";

interface EngineeringArticleEngineProps {
  article: EngineeringArticleData;
  onNavigate: (category: string, fromUnit?: string, toUnit?: string, extraPage?: string) => void;
}

export default function EngineeringArticleEngine({
  article,
  onNavigate
}: EngineeringArticleEngineProps) {
  // State for collapsible FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <article className="space-y-10 animate-in fade-in duration-300">
      
      {/* 1. Engineering Technical Guide & Physical Principles */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              1. Engineering Technical Guide & Physical Principles
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Engineering Technical Guide & Physical Principles
            </p>
          </div>
        </div>

        <div className="prose dark:prose-invert text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
          <p>{article.introduction.overview}</p>
        </div>

        {/* Real-World Applications & Industries Grid (Sections 2 & 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <h3 className="font-bold text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
              <Compass className="h-4 w-4 text-amber-500" />
              2. Primary Engineering Applications
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {article.introduction.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <h3 className="font-bold text-xs uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
              <Award className="h-4 w-4 text-blue-500" />
              3. Key Industries & Sector Deployment
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {article.introduction.industries.map((ind, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                  <span>{ind}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Quick Answer Summary Box */}
      <section className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/60 dark:border-amber-800/60 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-amber-800 dark:text-amber-300">
          <Zap className="h-4 w-4 text-amber-500" />
          4. Quick Answer & Key Summary
        </div>
        <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
          {article.quickAnswer}
        </p>
      </section>

      {/* 5. Governing Equation & Variables Table */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
            <Calculator className="h-5 w-5" />
          </div>
          <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            5. Governing Equation & Mathematical Formulation
          </h2>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950 text-amber-400 font-mono font-bold text-center text-sm sm:text-base border border-slate-800 shadow-inner">
          <MathFormula formula={article.governingEquation.formula} displayMode={true} className="text-amber-400 dark:text-amber-400 bg-transparent border-0 shadow-none my-0 py-0" />
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {article.governingEquation.explanation}
        </p>

        {/* Variables Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3">Variable</th>
                <th className="p-3">Symbol</th>
                <th className="p-3">SI Unit</th>
                <th className="p-3">Physical Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {article.governingEquation.variables.map((v, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                  <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">{v.label}</td>
                  <td className="p-3 font-mono font-bold text-amber-600 dark:text-amber-400">{v.symbol}</td>
                  <td className="p-3 font-mono text-slate-500">{v.unit}</td>
                  <td className="p-3">{v.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6 & 7. Input Parameters & Output Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Input Parameters */}
        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-amber-500" />
            <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
              6. Input Parameters Explained
            </h2>
          </div>

          <div className="space-y-3">
            {article.inputParameters.map((inp, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-1 text-xs">
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100">
                  <span>{inp.label} ({inp.name})</span>
                  <span className="font-mono text-amber-600 dark:text-amber-400">{inp.defaultValue} {inp.unit}</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 leading-normal">
                  {inp.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Output Explanation */}
        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-emerald-500" />
              <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
                7. Output Property & Design Impact
              </h2>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-emerald-700 dark:text-emerald-400">
                Primary Output Unit: {article.outputExplanation.unit}
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {article.outputExplanation.interpretation}
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">Design & Safety Impact:</h3>
              <p>{article.outputExplanation.designImpact}</p>
            </div>
          </div>
        </section>

      </div>

      {/* 8. Step-by-Step Worked Calculation */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            8. Step-by-Step Worked Calculation
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <p className="font-medium text-slate-900 dark:text-slate-100">
            Consider a standard benchmark test case with the following initial inputs:
          </p>

          <div className="flex flex-wrap gap-2">
            {article.stepByStepExample.givenInputs.map((g, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono font-semibold text-slate-800 dark:text-slate-200 text-xs">
                {g.label} = {g.value} {g.unit}
              </span>
            ))}
          </div>

          <p>{article.stepByStepExample.substitution}</p>

          <div className="p-4 rounded-2xl bg-slate-950 text-amber-300 font-mono text-xs space-y-2 border border-slate-800">
            {article.stepByStepExample.intermediateSteps.map((step, idx) => (
              <div key={idx}>{step}</div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-between text-xs sm:text-sm">
            <span>Final Calculated Output Result:</span>
            <span className="font-mono text-base">{article.stepByStepExample.finalResult} {article.stepByStepExample.unit}</span>
          </div>
        </div>
      </section>

      {/* 9. Practical Engineering Real-World Example */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-amber-500" />
          <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            9. Engineering Application Example: {article.practicalExample.scenarioTitle}
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p className="italic font-medium text-slate-700 dark:text-slate-200">
            {article.practicalExample.industryContext}
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <span className="font-bold text-slate-900 dark:text-slate-100 block text-xs uppercase tracking-wider">
              Problem Statement:
            </span>
            <p>{article.practicalExample.problemStatement}</p>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-2">
            <span className="font-bold text-amber-800 dark:text-amber-400 block text-xs uppercase tracking-wider">
              Engineering Solution & Verification:
            </span>
            <p>{article.practicalExample.engineeringSolution}</p>
          </div>
        </div>
      </section>

      {/* 10 & 11. Assumptions & Limitations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Physical Assumptions */}
        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-blue-500" />
            <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
              10. Physical Boundary Assumptions
            </h2>
          </div>

          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            {article.assumptions.map((ass, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                <span>{ass}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Limitations */}
        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
              11. Operational Limitations
            </h2>
          </div>

          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            {article.limitations.map((lim, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                <span>{lim}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* 12 & 13. Common Mistakes & Engineering Best Practices */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-8 space-y-6 shadow-sm">
        
        {/* Common Mistakes */}
        <div className="space-y-4">
          <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            12. Common Engineering Mistakes to Avoid
          </h2>

          <div className="space-y-2.5">
            {article.commonMistakes.map((mistake, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 font-bold text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="leading-relaxed">{mistake}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-amber-500" />
            13. Engineering Best Practices & Guidelines
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {article.bestPractices.map((tip, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 14. Frequently Asked Questions (FAQs) Section */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              14. Frequently Asked Questions ({article.faqs.length} FAQs)
            </h2>
          </div>
        </div>

        <div className="space-y-3">
          {article.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="h-4 w-4 shrink-0 text-amber-500" /> : <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-slate-800/50 pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 15. Technical Standards & Reference Framework */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-amber-500" />
          <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
            15. Technical Standards & Reference Framework
          </h2>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          The following publications provide relevant terminology, quantities, units, measurement, or electrical safety context related to this calculator. They are provided for technical reference and do not constitute design certification.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {article.standardsReferences.map((ref, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-slate-100">
                <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-mono text-[10px]">
                  {ref.organization}
                </span>
                <span className="font-mono text-slate-400 text-[11px]">{ref.code}</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                {ref.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 16. Dynamic Internal Linking Navigation Hub */}
      <section className="p-6 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl">
        <div className="space-y-1">
          <h3 className="font-display text-lg font-bold flex items-center gap-2">
            <Layers className="h-5 w-5 text-amber-400" />
            16. Internal Linking & Related Engineering Tools
          </h3>
          <p className="text-xs text-slate-300">
            Explore related physical models in {article.internalLinks.parentDiscipline.name} and complementary unit conversion tools.
          </p>
        </div>

        {/* Related Engineering Tools */}
        {article.internalLinks.relatedTools.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Related Solvers in {article.internalLinks.parentDiscipline.name}:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {article.internalLinks.relatedTools.map(t => (
                <button
                  key={t.id}
                  onClick={() => onNavigate(article.internalLinks.parentDiscipline.id, t.id)}
                  className="p-4 rounded-2xl bg-slate-800/90 hover:bg-slate-800 text-left border border-slate-700/80 hover:border-amber-400 transition-all flex flex-col justify-between gap-3 group cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-amber-300 transition-colors leading-snug">
                      {t.name}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                  </div>
                  
                  <div className="px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-700/60 group-hover:border-amber-500/40 transition-colors overflow-x-auto custom-scrollbar">
                    <span className="text-xs font-mono font-medium text-amber-300 block whitespace-nowrap">
                      <MathFormula formula={t.formula} asInline={true} className="text-amber-300" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Relevant Unit Converter Categories */}
        {article.internalLinks.relevantUnitCategories.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Complementary Unit Converter Categories:
            </h4>
            <div className="flex flex-wrap gap-2">
              {article.internalLinks.relevantUnitCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => onNavigate(cat.id)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-blue-600 text-xs font-semibold text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>{cat.name} Converters</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
