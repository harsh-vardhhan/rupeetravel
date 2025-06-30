'use client';

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
} from "../components/ui/server/card";
import { Badge } from "../components/ui/server/badge";
import { Input } from "../components/ui/server/input";

export const CurrencyConverterClient = ({ region, amount, currencyPair, exchange, rate, base, quote, quoteSymbol }) => {
  const [value, setValue] = useState(amount);

  const parse = (event) => event.target.value.replace(/[^\d.-]/g, '');

  const formatCurrency = useMemo(() => (value, currency) => {
    const locales = {
      IDR: "id-ID",
      INR: "en-IN",
    };
    return new Intl.NumberFormat(locales[currency] || region, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }, [region]);

  // Calculate the converted value
  const convertedValue = value * rate;

  const convertedPrice = useMemo(() => {
    const formatted = formatCurrency(convertedValue, quote);
    return formatted;
  }, [convertedValue, quote, formatCurrency]);

  return (
    <Card className="mt-2 md:mt-3">
      <CardContent className="pt-4 md:pt-6 space-y-3 md:space-y-5">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <span className="font-bold text-sm md:text-base">{base}</span>
          <Input
            type="number"
            value={value}
            onChange={(event) => setValue(parse(event))}
            className="w-full md:max-w-[200px]"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <span className="font-bold text-sm md:text-base">{quote}</span>
          <span className="text-sm md:text-base">{convertedPrice}</span>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <span className="font-bold text-sm md:text-base whitespace-nowrap">{exchange} Rate</span>
          <Badge
            variant="secondary"
            className="bg-teal-200 text-teal-900 text-sm md:text-base"
          >
            {quoteSymbol} {rate}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}; 