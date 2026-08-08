'use client';

import React, { useState, useMemo } from "react";
import { Card, CardHeader, CardContent } from "./card";
import { Badge } from "./badge";
import { Input } from "./input";
import { ArrowRightLeft, TrendingUp } from "lucide-react";

export interface CurrencyConverterClientProps {
  region?: string;
  amount: number;
  currencyPair?: string;
  exchange?: string;
  rate: number;
  base?: string;
  quote?: string;
  baseSymbol?: string;
  quoteSymbol?: string;
}

export const CurrencyConverterClient: React.FC<CurrencyConverterClientProps> = ({ 
  region, 
  amount, 
  exchange = "forex market", 
  rate, 
  base = "VND", 
  quote = "INR", 
  baseSymbol = "₫",
  quoteSymbol = "₹" 
}) => {
  const [value, setValue] = useState<number | string>(amount);

  const parse = (event: React.ChangeEvent<HTMLInputElement>) => event.target.value.replace(/[^\d.-]/g, '');

  const formatCurrency = useMemo(() => (val: number, currency: string) => {
    const locales: Record<string, string> = {
      IDR: "id-ID",
      INR: "en-IN",
      VND: "vi-VN",
    };
    return new Intl.NumberFormat(locales[currency] || region || "en-IN", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val);
  }, [region]);

  const numericValue = typeof value === 'number' ? value : parseFloat(value) || 0;
  const convertedValue = numericValue * rate;

  const convertedPrice = useMemo(() => {
    return formatCurrency(convertedValue, quote);
  }, [convertedValue, quote, formatCurrency]);

  return (
    <Card className="my-3 shadow-sm border-border/80 overflow-hidden">
      <CardHeader className="bg-muted/40 border-b border-border/60 py-2 px-3 sm:px-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="text-xs font-medium text-muted-foreground capitalize truncate">
              {exchange} Rate
            </span>
          </div>
          <Badge 
            variant="outline" 
            className="bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/20 font-semibold text-[11px] sm:text-xs py-0.5 px-2 shrink-0"
          >
            1 {base} = {quoteSymbol}{rate} {quote}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-3 sm:p-4">
        <div className="grid grid-cols-[1fr_auto_1fr] sm:grid-cols-12 gap-2 sm:gap-4 items-center">
          {/* Input side */}
          <div className="sm:col-span-5 min-w-0 space-y-1">
            <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground block truncate">
              Amount ({base})
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-2.5 text-xs sm:text-sm font-bold text-muted-foreground pointer-events-none select-none">
                {baseSymbol}
              </span>
              <Input
                type="number"
                inputMode="decimal"
                value={value}
                onChange={(event) => setValue(parse(event))}
                className="pl-7 pr-2 h-9 sm:h-10 text-xs sm:text-sm font-semibold focus-visible:ring-emerald-600"
              />
            </div>
          </div>

          {/* Arrow Divider */}
          <div className="sm:col-span-2 flex items-center justify-center pt-3.5 sm:pt-4">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-muted text-muted-foreground border border-border/60 shrink-0">
              <ArrowRightLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
          </div>

          {/* Result side */}
          <div className="sm:col-span-5 min-w-0 space-y-1 bg-emerald-500/10 dark:bg-emerald-950/30 p-2 sm:p-3 rounded-lg border border-emerald-500/20">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 block truncate">
              Converted ({quote})
            </span>
            <div className="text-sm sm:text-base md:text-lg font-bold text-emerald-700 dark:text-emerald-300 truncate">
              {convertedPrice}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
