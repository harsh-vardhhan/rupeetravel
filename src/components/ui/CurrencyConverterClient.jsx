'use client';

import { useState, useMemo } from "react";
import {
  Card,
  CardHeader,
  CardContent,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { ArrowRightLeft, TrendingUp } from "lucide-react";

export const CurrencyConverterClient = ({ 
  region, 
  amount, 
  exchange = "forex market", 
  rate, 
  base = "VND", 
  quote = "INR", 
  baseSymbol = "₫",
  quoteSymbol = "₹" 
}) => {
  const [value, setValue] = useState(amount);

  const parse = (event) => event.target.value.replace(/[^\d.-]/g, '');

  const formatCurrency = useMemo(() => (val, currency) => {
    const locales = {
      IDR: "id-ID",
      INR: "en-IN",
      VND: "vi-VN",
    };
    return new Intl.NumberFormat(locales[currency] || region, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val);
  }, [region]);

  const convertedValue = (value || 0) * rate;

  const convertedPrice = useMemo(() => {
    return formatCurrency(convertedValue, quote);
  }, [convertedValue, quote, formatCurrency]);

  return (
    <Card className="my-3 shadow-sm border-border/80 overflow-hidden">
      <CardHeader className="bg-muted/40 border-b border-border/60 py-3 px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-600 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground capitalize">
              {exchange} Rate
            </span>
          </div>
          <Badge 
            variant="outline" 
            className="bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950 dark:text-teal-200 dark:border-teal-800 font-semibold text-xs sm:text-sm"
          >
            1 {base} = {quoteSymbol}{rate} {quote}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Input side */}
          <div className="md:col-span-5 space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Amount ({base})
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-sm font-bold text-muted-foreground">
                {baseSymbol}
              </span>
              <Input
                type="number"
                inputMode="decimal"
                value={value}
                onChange={(event) => setValue(parse(event))}
                className="pl-8 font-semibold text-base focus-visible:ring-green-600"
              />
            </div>
          </div>

          {/* Arrow Divider */}
          <div className="md:col-span-2 flex items-center justify-center py-1 md:py-0 md:pt-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground border border-border/60">
              <ArrowRightLeft className="h-4 w-4 rotate-90 md:rotate-0 transition-transform" />
            </div>
          </div>

          {/* Result side */}
          <div className="md:col-span-5 space-y-1.5 bg-green-500/5 p-3 rounded-lg border border-green-500/15">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Converted ({quote})
            </span>
            <div className="text-xl sm:text-2xl font-extrabold text-green-600 dark:text-green-400 truncate">
              {convertedPrice}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 