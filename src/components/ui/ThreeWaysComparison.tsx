import * as React from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Badge } from "./badge";
import { cn } from "../../lib/utils";

export interface ThreeWaysComparisonProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ThreeWaysComparison({ className, ...props }: ThreeWaysComparisonProps) {
  return (
    <div
      className={cn(
        "w-full my-6 rounded-xl border bg-card text-card-foreground p-4 sm:p-6 shadow-sm",
        className
      )}
      {...props}
    >
      <div className="mb-5">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight">
          Getting Vietnam Currency (VND) — 3 Strategies Compared
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          From worst conversion rates to true zero fees: why withdrawing cash in Vietnam beats buying foreign currency in India.
        </p>
      </div>

      <div className="space-y-4">
        {/* 1. The Dumb Way */}
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 transition-colors">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Badge variant="destructive">1. The Dumb Way</Badge>
              <span className="text-xs font-semibold text-destructive">Avoid</span>
            </div>
            <span className="text-xs font-bold text-destructive px-2 py-0.5 rounded-full bg-destructive/10">
              -15% to -20% Spread Loss
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-sm mt-3 pt-3 border-t border-destructive/15">
            <div>
              <span className="text-xs font-medium text-muted-foreground block">Step 1: Starting Point</span>
              <p className="font-semibold text-foreground">INR in India</p>
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground block">Step 2: Conversion</span>
              <p className="font-semibold text-foreground">Forex Dealer / BookMyForex</p>
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground block">Step 3: Outcome</span>
              <p className="font-semibold text-destructive">Lose ₹1,500–₹2,000 per ₹10,000</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            <span className="font-semibold text-foreground">Why avoid:</span> Vietnamese Dong (VND) is an exotic currency in India with virtually no domestic demand, causing authorized forex dealers to charge massive buy/sell margins.
          </p>
        </div>

        {/* Transition 1 */}
        <div className="flex items-center justify-center gap-2 py-0.5 text-xs font-medium text-muted-foreground">
          <ArrowDown className="w-4 h-4 text-primary" />
          <span>Better alternative: Use globally liquid USD</span>
        </div>

        {/* 2. The Smart Way */}
        <div className="rounded-lg border border-border bg-muted/40 p-4 transition-colors">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                2. The Smart Way
              </Badge>
              <span className="text-xs font-semibold text-muted-foreground">Emergency Backup</span>
            </div>
            <span className="text-xs font-bold text-sky-700 dark:text-sky-400 px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950">
              ~0.5% Spread (Safe Cushion)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-sm mt-3 pt-3 border-t border-border">
            <div>
              <span className="text-xs font-medium text-muted-foreground block">Step 1: In India</span>
              <p className="font-semibold text-foreground">Buy USD Cash Notes</p>
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground block">Step 2: In Vietnam</span>
              <p className="font-semibold text-foreground">Exchange at Airport / Gold Shops</p>
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground block">Step 3: Outcome</span>
              <p className="font-semibold text-foreground">Minimal Spread + Offline Safety Net</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            <span className="font-semibold text-foreground">Why it works:</span> USD has the highest global liquidity, making conversion rates tight everywhere. Keeping $200–$500 in physical USD protects you if your bank blocks international debit cards. Under RBI rules, you can retain up to $2,000 USD indefinitely.
          </p>
        </div>

        {/* Transition 2 */}
        <div className="flex items-center justify-center gap-2 py-0.5 text-xs font-medium text-muted-foreground">
          <ArrowDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Smartest method: Direct live interbank withdrawal</span>
        </div>

        {/* 3. The Smartest Way */}
        <div className="rounded-lg border-2 border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 transition-colors shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                3. The Smartest Way
              </Badge>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Recommended
              </span>
            </div>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50">
              0% Fee • Live Interbank Rate
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-sm mt-3 pt-3 border-t border-emerald-500/20">
            <div>
              <span className="text-xs font-medium text-muted-foreground block">Step 1: Your Card</span>
              <p className="font-semibold text-foreground">Zero-Forex Debit Card</p>
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground block">Step 2: ATM Choice</span>
              <p className="font-semibold text-foreground">MB Bank or Ocean Bank ATM</p>
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground block">Step 3: Outcome</span>
              <p className="font-semibold text-emerald-700 dark:text-emerald-400">VND Cash at 0% Bank Markup</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            <span className="font-semibold text-foreground">The winning formula:</span> Visa and Mastercard convert INR dynamically at wholesale forex rates. By withdrawing from zero-markup ATMs like Ocean Bank or MB Bank, you skip all card fees and local ATM surcharges.
          </p>
        </div>
      </div>
    </div>
  );
}
