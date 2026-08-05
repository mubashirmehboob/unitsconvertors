import React from "react";
import { Info, AlertCircle } from "lucide-react";

export default function IdentityConversionNotice() {
  return (
    <div className="w-full flex flex-col gap-3.5 mt-5 no-print animate-in fade-in slide-in-from-top-2 duration-300" id="identity-conversion-notice-container">
      {/* Primary Info Card: Identity (1:1) Reference Conversion */}
      <div 
        id="identity-reference-card"
        className="relative overflow-hidden rounded-2xl border border-blue-200/90 dark:border-blue-900/60 bg-gradient-to-r from-blue-50/95 via-cyan-50/40 to-blue-50/80 dark:from-blue-950/40 dark:via-cyan-950/20 dark:to-blue-950/30 p-4 sm:p-5 shadow-sm transition-all"
      >
        <div className="flex items-start gap-3.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 dark:bg-blue-500 mt-0.5">
            <Info className="h-5 w-5 stroke-[2.5]" />
          </div>
          <div className="space-y-1 text-left">
            <h4 className="font-sans text-base font-bold text-blue-950 dark:text-blue-100 flex items-center gap-2 flex-wrap">
              <span>Identity (1:1) Reference Conversion</span>
              <span className="inline-flex items-center text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-200/80 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 border border-blue-300/60 dark:border-blue-700/60">
                1:1 Reference
              </span>
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-blue-900/85 dark:text-blue-200/90 font-medium">
              This is a 1:1 reference conversion. The numerical value does not change. This tool exists to clarify the measurement reference, notation, standard, or engineering context associated with the selected unit.
            </p>
          </div>
        </div>
      </div>

      {/* Secondary Warning Card: Important Note */}
      <div 
        id="identity-important-note-card"
        className="relative overflow-hidden rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-gradient-to-r from-amber-50/95 via-orange-50/40 to-amber-50/80 dark:from-amber-950/40 dark:via-orange-950/20 dark:to-amber-950/30 p-4 sm:p-5 shadow-sm transition-all"
      >
        <div className="flex items-start gap-3.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/20 dark:bg-amber-600 mt-0.5">
            <AlertCircle className="h-5 w-5 stroke-[2.5]" />
          </div>
          <div className="space-y-1 text-left">
            <h4 className="font-sans text-base font-bold text-amber-950 dark:text-amber-100 flex items-center gap-2">
              <span>Important Note</span>
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-amber-900/85 dark:text-amber-200/90 font-medium">
              No mathematical conversion occurs. Only the measurement reference, notation, or engineering interpretation changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
